/* ============================================================
   Duplicate Checker — uploads a CSV to the FastAPI backend
   (see /backend) and renders the name/phone/passport duplicate
   groups it finds.
   ============================================================ */
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const STORAGE_KEY='dupcheck-api-url';
try{
  const saved=localStorage.getItem(STORAGE_KEY);
  if(saved)$('apiUrl').value=saved;
}catch(e){}

function kpiTile(label,value){
  return `<div class="kpi-tile"><div class="kpi-label">${esc(label)}</div><div class="kpi-value">${esc(value)}</div></div>`;
}

const ROW_COLUMNS=[
  ['row','Row'],['name','Name'],['phone','Phone'],['passport','Passport'],
  ['found_location','Found location'],['last_known_location','Last known location'],
  ['status','Status'],['reported_by','Reported by']
];

function groupTable(group){
  const rows=group.rows.map(r=>`<tr>${ROW_COLUMNS.map(([k])=>`<td>${esc(r[k]??'')}</td>`).join('')}</tr>`).join('');
  return `<div class="dup-group">
    <div class="dup-group-value">"${esc(group.value)}" <span>${group.rows.length} rows</span></div>
    <div class="tw"><table><thead><tr>${ROW_COLUMNS.map(([,l])=>`<th>${esc(l)}</th>`).join('')}</tr></thead>
    <tbody>${rows}</tbody></table></div>
  </div>`;
}

function renderGroups(el,groups){
  $(el).innerHTML=groups.length
    ? groups.map(groupTable).join('')
    : '<p class="chart-empty">None found.</p>';
}

function renderResult(data){
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
    $('toolState').innerHTML=`<div class="state"><strong>Some expected columns weren't found</strong>Missing: ${esc(data.missing_fields.join(', '))} — duplicate checks for those fields were skipped.</div>`;
  }else{
    $('toolState').innerHTML='';
  }
}

async function checkDuplicates(){
  const apiUrl=$('apiUrl').value.trim().replace(/\/+$/,'');
  const file=$('csvFile').files[0];
  if(!apiUrl){$('toolState').innerHTML='<div class="state"><strong>Set the backend API URL first</strong></div>';return}
  if(!file){$('toolState').innerHTML='<div class="state"><strong>Choose a CSV file first</strong></div>';return}
  try{localStorage.setItem(STORAGE_KEY,apiUrl)}catch(e){}

  $('toolResults').hidden=true;
  $('toolState').innerHTML='<div class="state">Checking…</div>';
  const fd=new FormData();
  fd.append('file',file);
  try{
    const res=await fetch(apiUrl+'/api/check-duplicates',{method:'POST',body:fd});
    const data=await res.json();
    if(!res.ok)throw new Error(data.detail||'Request failed');
    $('toolState').innerHTML='';
    renderResult(data);
  }catch(e){
    $('toolState').innerHTML=`<div class="state"><strong>Couldn't check that file</strong>${esc(e.message)}</div>`;
  }
}

$('checkBtn').onclick=checkDuplicates;
