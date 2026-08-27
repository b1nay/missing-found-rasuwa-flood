/* ============================================================
   Visualization page — charts built from the same family.json
   feed as the search page (via data.js). No external chart
   library: plain HTML/CSS bar lists and column histograms, so
   the page stays light and fast on a slow connection.
   ============================================================ */

function kpiTile(label,value){
  return `<div class="kpi-tile"><div class="kpi-label">${esc(label)}</div><div class="kpi-value">${esc(value)}</div></div>`;
}

function barList(data,colorClass){
  if(!data.length)return '<p class="chart-empty">No data yet.</p>';
  const max=Math.max(...data.map(d=>d[1]));
  return `<div class="barlist">`+data.map(([label,val])=>{
    const pct=Math.max(3,Math.round(val/max*100));
    return `<div class="barlist-row">
      <div class="barlist-label">${esc(label)}</div>
      <div class="barlist-track" title="${esc(label)}: ${val}"><div class="barlist-fill ${colorClass}" style="width:${pct}%"></div></div>
      <div class="barlist-value">${val}</div>
    </div>`;
  }).join('')+`</div>`;
}

function colChart(data){
  const max=Math.max(1,...data.map(d=>d[1]));
  return `<div class="colchart">`+data.map(([label,val])=>{
    const pct=val?Math.max(4,Math.round(val/max*100)):0;
    return `<div class="colchart-col" title="${esc(label)}: ${val}">
      <div class="colchart-track"><div class="colchart-bar" style="height:${pct}%">
        <span class="colchart-value">${val}</span>
      </div></div>
      <div class="colchart-label">${esc(label)}</div>
    </div>`;
  }).join('')+`</div>`;
}

function render(rows,updated){
  $('vizState').innerHTML='';
  $('vizBody').hidden=false;

  const missing=rows.filter(r=>r.status==='missing');
  const found=rows.filter(r=>r.status==='found');
  const total=missing.length+found.length;
  const rate=total?Math.round(found.length/total*100):0;

  $('kpiRow').innerHTML=
    kpiTile('Missing',missing.length)+
    kpiTile('Found',found.length)+
    kpiTile('Found rate',rate+'%')+
    kpiTile('Updated',updated?new Date(updated).toLocaleDateString('en-GB',{day:'numeric',month:'short'}):'—');

  const areaCounts=PLACES.map(p=>[p.label,missing.filter(r=>inPlace(r,p)).length])
    .filter(([,n])=>n>0).sort((a,b)=>b[1]-a[1]).slice(0,10);
  $('chartMissingArea').innerHTML=barList(areaCounts,'c-blue');

  const homeTally={};
  found.forEach(r=>{if(r._g)homeTally[r._g]=(homeTally[r._g]||0)+1});
  const homeCounts=Object.entries(homeTally).sort((a,b)=>b[1]-a[1]).slice(0,10);
  $('chartFoundHome').innerHTML=barList(homeCounts,'c-green');

  const buckets=[[0,9,'0–9'],[10,19,'10–19'],[20,29,'20–29'],[30,39,'30–39'],
    [40,49,'40–49'],[50,59,'50–59'],[60,69,'60–69'],[70,999,'70+']];
  const knownAges=missing.map(r=>String(r.age||'').trim()).filter(a=>/^\d{1,3}$/.test(a)).map(Number);
  const ageData=buckets.map(([lo,hi,label])=>[label,knownAges.filter(a=>a>=lo&&a<=hi).length]);
  $('ageNote').textContent=`Age known for ${knownAges.length} of ${missing.length} missing records — entries with an uncertain age (e.g. "around 50") are left out.`;
  $('chartAge').innerHTML=colChart(ageData);
}

async function loadViz(){
  $('vizState').innerHTML='<div class="state">Loading…</div>';
  try{
    const [d,extra]=await Promise.all([fetchFamilyData(),fetchExtraRecords('../extra-records.json')]);
    const built=buildRows(d,extra);
    render(built.rows,built.updated);
  }catch(e){
    $('vizState').innerHTML=`<div class="state"><strong>The data didn't load</strong>Check your connection and try again.<br><button id="rt" type="button">Try again</button></div>`;
    $('rt').onclick=loadViz;
  }
}

loadViz();
