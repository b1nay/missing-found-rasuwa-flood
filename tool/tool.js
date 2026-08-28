/* ============================================================
   Duplicate Checker — uploads a CSV to the FastAPI backend
   (see /api, and api/README.md) and renders the name/phone/
   passport duplicate groups it finds. Talks to the standalone
   backend on the VPS (api.found.kachhuwa.com) — see api/README.md
   for why Vercel's own /api routing isn't used in production.
   ============================================================ */
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const API_URL='https://api.found.kachhuwa.com';

let lastResult=null;

function kpiTile(label,value){
  return `<div class="kpi-tile"><div class="kpi-label">${esc(label)}</div><div class="kpi-value">${esc(value)}</div></div>`;
}

const ROW_COLUMNS=[
  ['row','Row'],['name','Name'],['phone','Phone'],['passport','Passport'],
  ['found_location','Found location'],['last_known_location','Last known location'],
  ['status','Status'],['reported_by','Reported by']
];

function groupTable(group){
  const rows=group.rows.map(r=>`<tr>
    <td class="dup-check"><input type="checkbox" aria-label="Mark handled"></td>
    ${ROW_COLUMNS.map(([k])=>`<td${k==='name'?' class="dup-name"':''}>${esc(r[k]??'')}</td>`).join('')}
  </tr>`).join('');
  return `<div class="dup-group">
    <div class="dup-group-value">"${esc(group.value)}" <span>${group.rows.length} rows</span></div>
    <div class="tw"><table><thead><tr><th></th>${ROW_COLUMNS.map(([,l])=>`<th>${esc(l)}</th>`).join('')}</tr></thead>
    <tbody>${rows}</tbody></table></div>
  </div>`;
}

function renderGroups(el,groups){
  $(el).innerHTML=groups.length
    ? groups.map(groupTable).join('')
    : '<p class="chart-empty">None found.</p>';
}

function renderResult(data){
  lastResult=data;
  $('toolResults').hidden=false;
  $('toolSummary').innerHTML=
    kpiTile('Total rows',data.total_rows)+
    kpiTile('Duplicate names',data.summary.duplicate_name_groups)+
    kpiTile('Duplicate phones',data.summary.duplicate_phone_groups)+
    kpiTile('Duplicate passports',data.summary.duplicate_passport_groups);
  renderGroups('dupNames',data.duplicate_names);
  renderGroups('dupPhones',data.duplicate_phones);
  renderGroups('dupPassports',data.duplicate_passports);
  if(data.missing_fields&&data.missing_fields.length){
    const labels={name:'Name',phone:'Phone Number',passport:'Passport number'};
    const list=data.missing_fields.map(f=>labels[f]||f).join(', ');
    $('toolState').innerHTML=`<div class="state"><strong>This file has no ${esc(list)} column</strong>That's fine — everything else still ran. There's just nothing to check duplicates against for ${esc(list)}.</div>`;
  }else{
    $('toolState').innerHTML='';
  }
}

async function checkDuplicates(){
  const file=$('csvFile').files[0];
  if(!file){$('toolState').innerHTML='<div class="state"><strong>Choose a CSV file first</strong></div>';return}

  $('toolResults').hidden=true;
  $('toolState').innerHTML='<div class="state">Checking…</div>';
  const fd=new FormData();
  fd.append('file',file);
  try{
    const res=await fetch(API_URL+'/api/check-duplicates',{method:'POST',body:fd});
    const text=await res.text();
    let data;
    try{data=JSON.parse(text)}
    catch(e){throw new Error(`The server didn't return JSON (status ${res.status}) — the backend at ${API_URL} might be down.`)}
    if(!res.ok)throw new Error(data.detail||'Request failed');
    $('toolState').innerHTML='';
    renderResult(data);
  }catch(e){
    $('toolState').innerHTML=`<div class="state"><strong>Couldn't check that file</strong>${esc(e.message)}</div>`;
  }
}

/* Tick a row's checkbox to cross its name out — a lightweight way to
   track which duplicates you've already resolved while working
   through the list. Purely visual, not sent anywhere. */
document.addEventListener('change',e=>{
  const cb=e.target.closest('.dup-check input');
  if(!cb)return;
  cb.closest('tr').classList.toggle('dup-done',cb.checked);
});

/* ---------- export every duplicate row as one CSV ---------- */
function csvCell(v){
  const s=String(v??'');
  return /[",\r\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s;
}
function toDupesCSV(data){
  const header=['Duplicate Type','Duplicate Value','Row','Name','Phone','Passport','Found Location','Last known location','Status','Reported by'];
  const lines=[header];
  const addGroup=(label,groups)=>{
    (groups||[]).forEach(g=>{
      g.rows.forEach(r=>{
        lines.push([label,g.value,r.row,r.name||'',r.phone||'',r.passport||'',
          r.found_location||'',r.last_known_location||'',r.status||'',r.reported_by||'']);
      });
    });
  };
  addGroup('Name',data.duplicate_names);
  addGroup('Phone',data.duplicate_phones);
  addGroup('Passport',data.duplicate_passports);
  return lines.map(row=>row.map(csvCell).join(',')).join('\r\n');
}
function downloadCSV(filename,csv){
  const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=filename;
  document.body.appendChild(a);a.click();a.remove();
  URL.revokeObjectURL(url);
}

$('checkBtn').onclick=checkDuplicates;
$('exportDupesBtn').onclick=()=>{
  if(!lastResult)return;
  downloadCSV('duplicates.csv',toDupesCSV(lastResult));
};
