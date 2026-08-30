/* ============================================================
   Shared data layer — used by the search page and the
   visualization page. Fetches + normalizes the same family.json
   feed so both pages read the exact same records.
   ============================================================ */

const $=id=>document.getElementById(id);
const esc=s=>String(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- Devanagari → Latin, so one query searches both scripts ---------- */
const CONS={'क':'k','ख':'kh','ग':'g','घ':'gh','ङ':'ng','च':'ch','छ':'chh','ज':'j','झ':'jh','ञ':'ny',
 'ट':'t','ठ':'th','ड':'d','ढ':'dh','ण':'n','त':'t','थ':'th','द':'d','ध':'dh','न':'n',
 'प':'p','फ':'ph','ब':'b','भ':'bh','म':'m','य':'y','र':'r','ल':'l','ळ':'l','व':'v',
 'श':'sh','ष':'sh','स':'s','ह':'h','ज़':'j','फ़':'f','ड़':'d','ढ़':'dh','क़':'k','ग़':'g','ख़':'kh'};
const VOW={'अ':'a','आ':'aa','इ':'i','ई':'i','उ':'u','ऊ':'u','ऋ':'ri','ए':'e','ऐ':'ai','ओ':'o','औ':'au'};
const MAT={'ा':'aa','ि':'i','ी':'i','ु':'u','ू':'u','ृ':'ri','े':'e','ै':'ai','ो':'o','ौ':'au','ं':'n','ँ':'n','ः':'h'};
const DIG={'०':'0','१':'1','२':'2','३':'3','४':'4','५':'5','६':'6','७':'7','८':'8','९':'9'};
const VIR='्';

function deva2lat(s){
  let o='';
  for(let i=0;i<s.length;i++){
    const c=s[i];
    if(DIG[c]){o+=DIG[c];continue}
    if(CONS[c]){
      o+=CONS[c];
      const n=s[i+1];
      if(n===VIR)i++;
      else if(MAT[n]!==undefined){o+=MAT[n];i++}
      else o+='a';
      continue;
    }
    if(VOW[c]){o+=VOW[c];continue}
    if(MAT[c]!==undefined){o+=MAT[c];continue}
    if(c===VIR)continue;
    o+=c;
  }
  return o;
}
const norm=s=>deva2lat(String(s||'')).toLowerCase()
  .normalize('NFD').replace(/[̀-ͯ]/g,'')
  .replace(/[^a-z0-9]+/g,' ')
  .replace(/aa/g,'a').replace(/ii/g,'i').replace(/uu/g,'u').replace(/ee/g,'i').replace(/oo/g,'u')
  .trim();

/* Nepali names get romanised many ways (Shrestha/Shreshtha, Bishnu/Vishnu).
   Dropping vowels and folding aspirates makes those collapse to one key. */
const skel=s=>norm(s).replace(/[0-9]/g,'')
  .replace(/w/g,'v').replace(/z/g,'j')
  .replace(/ph/g,'f').replace(/ch/g,'c').replace(/sh/g,'s')
  .replace(/kh/g,'k').replace(/gh/g,'g').replace(/th/g,'t')
  .replace(/dh/g,'d').replace(/bh/g,'b').replace(/jh/g,'j')
  .replace(/[aeiou]/g,'').replace(/(.)\1+/g,'$1').replace(/\s+/g,'');
const digits=s=>String(s||'').replace(/[०-९]/g,d=>DIG[d]).replace(/\D/g,'');

/* ---------- Places — one canonical label, many spellings in the data ---------- */
const PLACES_RAW=[
 ['Timure · टिमुरे',            ['Timure','टिमुरे','तिमुरे','Timmure','Timura','Timur']],
 ['Rasuwagadhi · रसुवागढी',     ['Rasuwagadhi','रसुवागढी','Rasuvagadhi','Rasuwagadi','Rashwagadi','Rasuwagadhi border']],
 ['Kerung / Gyirong · केरुङ',   ['Kerung','केरुङ','Gyirong','Kyirong','Keyrung','Kerung border','Gyirong']],
 ['Syabrubesi · स्याफ्रुबेसी',   ['Syabrubesi','Syafrubesi','स्याफ्रुबेसी','स्याब्रुबेसी','Shyafru','Syaphru','Syabru','Syafru']],
 ['Dhunche · धुन्चे',           ['Dhunche','धुन्चे','Dunche']],
 ['Gosaikunda · गोसाइकुण्ड',     ['Gosaikunda','गोसाइकुण्ड','गोसाईकुण्ड','Gosainkunda','Gosaikunda','Gosaikund']],
 ['Langtang · लाङटाङ',          ['Langtang','लाङटाङ','लाङटाङ']],
 ['Mailung · मैलुङ',            ['Mailung','मैलुङ','Mailun','Maelung']],
 ['Ghattekhola · घट्टेखोला',     ['Ghattekhola','घट्टेखोला','Ghatte khola','Ghattekhol']],
 ['Haku · हाकु',                ['Haku','हाकु']],
 ['Betrawati · बेत्रावती',       ['Betrawati','बेत्रावती','Bitrawati','Bhetrawati','Vetrawati','Betrabati']],
 ['Trishuli / Bidur · त्रिशूली', ['Trishuli','त्रिशूली','Trisuli','Bidur','विदुर','वि.न.पा','ब्यासी','Byasi']],
 ['Upper Trishuli-1 · 216 MW',  ['Upper Trishuli','216','Doosan','अपर त्रिशुली']],
 ['Hotel Kailash',              ['Hotel Kailash','Kailash Hotel','कैलाश','Kailas']],
 ['Rasuwa (district) · रसुवा',  ['Rasuwa','रसुवा','Rasuva']],
 ['Nuwakot · नुवाकोट',          ['Nuwakot','नुवाकोट','Nuwakot']],
 ['Dhading · धादिङ',            ['Dhading','धादिङ','Dhadhing']],
 ['Gorkha · गोरखा',             ['Gorkha','गोरखा']],
 ['Chitwan · चितवन',            ['Chitwan','चितवन']]
];
const PLACES=PLACES_RAW.map(([label,al],i)=>({
  id:'p'+i, label,
  keys:al.map(a=>({n:norm(a),s:skel(a)}))
}));

const inPlace=(rec,p)=>p.keys.some(k=>
  (k.n && rec._pn.includes(k.n)) || (k.s.length>=4 && rec._ps.includes(k.s))
);

/* the found list carries home addresses; the last comma-part is the town/district */
function addrGroup(place){
  let p=String(place||'').split('·')[0].trim();
  const parts=p.split(',').map(x=>x.trim()).filter(Boolean);
  let last=parts.length?parts[parts.length-1]:p;
  last=last.replace(/[–\-]\s*[०-९0-9]+$/,'').trim()
           .replace(/\s*(उप)?(म\.)?न\.पा\.?$/,'').replace(/\s*गा\.पा\.?$/,'').trim()
           .replace(/[–\-,]+$/,'').trim();
  return last;
}

/* ---------- Fetch + normalize ---------- */
const BASE='https://nirajbhusal.github.io/rasuwa-flood-bulletin/';
const SOURCES=[
  'https://raw.githubusercontent.com/nirajbhusal/rasuwa-flood-bulletin/main/family.json',
  BASE+'family.json'
];

/* Home addresses are occasionally reported in the note field of the
   upstream family.json feed (which we don't control) and someone later
   asks for theirs taken down — strip that text out client-side rather
   than editing a feed we don't own. */
const NOTE_REDACTIONS={
  'sheet-20260827-102548-anil-grover':'117 Holst Ave., Markham, Ontario L6C 2L9 Canada'
};
function redactNote(r){
  const cut=NOTE_REDACTIONS[r.id];
  if(!cut||!r.note)return r.note;
  return r.note.split(cut).join('').replace(/\s*·\s*·\s*/g,' · ').replace(/^[\s·]+|[\s·]+$/g,'').trim();
}

function buildRows(d,extra){
  const build=(arr,status)=>(arr||[]).map(r=>{
    const name=[r.name,r.name_en].filter(Boolean).join(' / ');
    const note=redactNote(r);
    const blob=[name,r.place,note,r.when,r.reporter,r.phone].filter(Boolean).join(' ');
    return {...r,name,status,note,
      _n:norm(blob),_s:skel(blob),_d:digits(r.phone)+' '+digits(r.reporter),
      _pn:norm(r.place),_ps:skel(r.place),_g:addrGroup(r.place)};
  });
  /* locally-curated records (see sources/extra-records.json) already carry their
     own status and an optional `extra` object of rich detail fields */
  const buildExtra=(arr)=>(arr||[]).map(r=>{
    const blob=[r.name,r.place,r.note,r.when,r.reporter,r.phone].filter(Boolean).join(' ');
    return {...r,
      _n:norm(blob),_s:skel(blob),_d:digits(r.phone)+' '+digits(r.reporter),
      _pn:norm(r.place),_ps:skel(r.place),_g:addrGroup(r.place)};
  });
  return {
    rows:[...build(d.missing,'missing'),...build(d.found,'found'),...build(d.matched,'found'),...buildExtra(extra)],
    updated:d.updated_at||''
  };
}

async function fetchFamilyData(){
  for(const url of SOURCES){
    try{
      const r=await fetch(url,{cache:'no-cache'});
      if(!r.ok)continue;
      return await r.json();
    }catch(e){}
  }
  throw new Error('all sources failed');
}

async function fetchExtraRecords(path){
  try{
    const r=await fetch(path,{cache:'no-cache'});
    if(!r.ok)return[];
    return await r.json();
  }catch(e){return[]}
}

/* ---------- Dedupe across every source: same person if name AND phone
   both match. Missing a phone means we can't confirm it's the same
   person, so those rows are always kept as-is. ---------- */
function mergeRowInto(a,b){
  if(b.status==='found')a.status='found';
  ['place','phone','when','reporter','note','age','photo','name_en'].forEach(f=>{
    if(!a[f]&&b[f])a[f]=b[f];
  });
  if(b.extra)a.extra=Object.assign({},b.extra,a.extra||{});
  const blob=[a.name,a.place,a.note,a.when,a.reporter,a.phone].filter(Boolean).join(' ');
  a._n=norm(blob);a._s=skel(blob);a._d=digits(a.phone)+' '+digits(a.reporter);
  a._pn=norm(a.place);a._ps=skel(a.place);a._g=addrGroup(a.place);
}

function dedupeRows(rows){
  const seen=new Map();
  const out=[];
  for(const r of rows){
    const phoneKey=digits(r.phone), nameKey=skel(r.name);
    if(!phoneKey||!nameKey){out.push(r);continue}
    const key=nameKey+'|'+phoneKey;
    if(seen.has(key))mergeRowInto(seen.get(key),r);
    else{seen.set(key,r);out.push(r)}
  }
  return out;
}

/* ---------- Cross-tab duplicate check: is this record (from a separate
   curated list, e.g. the Latvian Tourists tab or a fresh CSV export)
   already present somewhere else on the site? Same person if a phone
   number matches, or if the *exact* normalized name matches — checked
   against the main missing/found rows and against any other name-only
   list (e.g. the Kailash tab). This deliberately uses norm() rather than
   the fuzzier skel() key: skel() folds away enough (vowels, aspirates)
   that common Nepali surnames collide across different people (e.g.
   "Sushan Tamang" vs "Ashen Tamang"), which would wrongly hide real,
   distinct missing/found records at the scale of a few thousand rows. */
function isDuplicateElsewhere(entry,rows,otherLists){
  const nameKey=norm(entry.name);
  const entryPhones=[entry.phone,entry.relativePhone,entry.reporter].map(digits).filter(Boolean);
  const phoneMatches=d=>!!d&&entryPhones.includes(d);
  if((rows||[]).some(r=>(nameKey&&norm(r.name)===nameKey)||phoneMatches(digits(r.phone))||phoneMatches(digits(r.reporter))))return true;
  return (otherLists||[]).some(list=>(list||[]).some(x=>nameKey&&norm(x.name||'')===nameKey));
}

/* ---------- International-tourist filter: exclude anyone whose address
   mentions Rasuwa, Timure, Sindhupalchowk, Ramechhap, Trishuli,
   Kathmandu, Kerung, Mailung, Betrawati, Nuwakot, or has any
   Devanagari (Nepali) letters in it — everyone else counts as
   international. ---------- */
const DOMESTIC_TERMS=['rasuwa','timure','sindhupalchowk','sindhupalchok','ramechhap',
 'trishuli','kathmandu','kerung','mailung','betrawati','nuwakot'];
function isInternational(place){
  if(!place)return false;
  if(/[ऀ-ॿ]/.test(place))return false;
  const lower=String(place).toLowerCase();
  return !DOMESTIC_TERMS.some(t=>lower.includes(t));
}
