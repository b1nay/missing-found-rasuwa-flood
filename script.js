/* ============================================================
   1. Interface strings
   ============================================================ */
const T={
 ne:{title:"हराएको / भेटिएको",sub:"रसुवा–भोटेकोशी बाढी",ph:"नाम वा फोन नम्बर खोज्नुहोस्",
  missing:"हराएको",found:"भेटिएको",allLoc:"सबै स्थान",strip:"भेटिएकाको ठेगाना",
  nm:"नाम",ag:"उमेर",pl:"ठेगाना / स्थान",wh:"अन्तिम सम्पर्क",ph2:"फोन",dt:"विवरण",
  cnt:n=>`${n} विवरण`,upd:"अद्यावधिक",rl:"पुनः लोड",more:"थप देखाउनुहोस्",ld:"लोड हुँदै…",
  e1:"सूची लोड भएन",e2:"इन्टरनेट जाँचेर फेरि प्रयास गर्नुहोस्।",rt:"फेरि प्रयास",
  z1:"केही भेटिएन",z2:"नामको केही अक्षर वा फोनका केही अंक मात्र लेख्नुहोस्। रोमन र देवनागरी दुवै चल्छ।",
  src:"स्रोत",dtMore:"थप हेर्नुहोस्",dtLess:"कम देखाउनुहोस्",
  mSafeQ:"के तपाईं प्रभावित क्षेत्रमा हुनुहुन्छ?",mMarkSafe:"सुरक्षित छु भनी जनाउनुहोस्",mAskRescue:"उद्धार माग्नुहोस्",
  mSafeTitle:"आफू सुरक्षित छु भनी जनाउनुहोस्",mRescueTitle:"उद्धारको लागि अनुरोध",
  mName:"नाम",mNumber:"नम्बर",mLocation:"स्थान",mSend:"WhatsApp मार्फत पठाउनुहोस्",
  mNote:"यसले तपाईंको विवरण भरिएको WhatsApp खोल्छ — पठाउन तपाईंले आफै पठाउनुहोस् थिच्नुपर्छ।"},
 en:{title:"Missing & found",sub:"Rasuwa–Bhotekoshi flood",ph:"Search a name or phone number",
  missing:"Missing",found:"Found",allLoc:"All locations",strip:"Found · by address",
  nm:"Name",ag:"Age",pl:"Address / place",wh:"Last contact",ph2:"Phone",dt:"Details",
  cnt:n=>`${n} records`,upd:"Updated",rl:"Reload",more:"Show more",ld:"Loading…",
  e1:"The list didn't load",e2:"Check your connection and try again.",rt:"Try again",
  z1:"Nothing matched",z2:"Try part of a name or a few digits of a phone number. Roman and Devanagari both work.",
  src:"Source",dtMore:"View more",dtLess:"View less",
  mSafeQ:"Are you in the affected area?",mMarkSafe:"Mark Safe",mAskRescue:"Ask for Rescue",
  mSafeTitle:"Report yourself safe",mRescueTitle:"Ask for rescue",
  mName:"Name",mNumber:"Number",mLocation:"Location",mSend:"Send via WhatsApp",
  mNote:"This opens WhatsApp with your details filled in — you still need to hit send yourself."},
 hi:{title:"लापता / मिले",sub:"रसुवा–भोटेकोशी बाढ़",ph:"नाम या फ़ोन नंबर खोजें",
  missing:"लापता",found:"मिले",allLoc:"सभी स्थान",strip:"मिले · पते के अनुसार",
  nm:"नाम",ag:"उम्र",pl:"पता / जगह",wh:"आख़िरी संपर्क",ph2:"फ़ोन",dt:"विवरण",
  cnt:n=>`${n} प्रविष्टियाँ`,upd:"अपडेट",rl:"फिर लोड करें",more:"और दिखाएँ",ld:"लोड हो रहा है…",
  e1:"सूची लोड नहीं हुई",e2:"इंटरनेट जाँचकर दोबारा कोशिश करें।",rt:"दोबारा कोशिश",
  z1:"कुछ नहीं मिला",z2:"नाम का कुछ हिस्सा या फ़ोन के कुछ अंक लिखें। रोमन और देवनागरी दोनों चलते हैं।",
  src:"स्रोत",dtMore:"और देखें",dtLess:"कम देखें",
  mSafeQ:"क्या आप प्रभावित क्षेत्र में हैं?",mMarkSafe:"सुरक्षित होने की सूचना दें",mAskRescue:"बचाव के लिए अनुरोध करें",
  mSafeTitle:"स्वयं को सुरक्षित बताएं",mRescueTitle:"बचाव का अनुरोध",
  mName:"नाम",mNumber:"नंबर",mLocation:"स्थान",mSend:"WhatsApp से भेजें",
  mNote:"इससे आपकी जानकारी भरा हुआ WhatsApp खुलेगा — भेजने के लिए आपको खुद भेजें दबाना होगा।"},
 zh:{title:"失踪 / 已找到",sub:"拉苏瓦–波特科西洪灾",ph:"搜索姓名或电话号码",
  missing:"失踪",found:"已找到",allLoc:"所有地点",strip:"已找到 · 按住址",
  nm:"姓名",ag:"年龄",pl:"住址 / 地点",wh:"最后联系",ph2:"电话",dt:"详情",
  cnt:n=>`${n} 条记录`,upd:"更新于",rl:"重新加载",more:"显示更多",ld:"加载中…",
  e1:"名单加载失败",e2:"请检查网络后重试。",rt:"重试",
  z1:"没有匹配结果",z2:"请输入姓名的一部分或电话号码的几位数字。罗马字母与天城文均可。",
  src:"来源",dtMore:"查看更多",dtLess:"收起",
  mSafeQ:"您是否在受灾地区？",mMarkSafe:"报平安",mAskRescue:"请求救援",
  mSafeTitle:"报平安",mRescueTitle:"请求救援",
  mName:"姓名",mNumber:"号码",mLocation:"位置",mSend:"通过 WhatsApp 发送",
  mNote:"这将打开已填好信息的 WhatsApp——您仍需自行点击发送。"},
 es:{title:"Desaparecidos / hallados",sub:"Inundación Rasuwa–Bhotekoshi",ph:"Busca un nombre o teléfono",
  missing:"Desaparecidos",found:"Hallados",allLoc:"Todos los lugares",strip:"Hallados · por dirección",
  nm:"Nombre",ag:"Edad",pl:"Dirección / lugar",wh:"Último contacto",ph2:"Teléfono",dt:"Detalles",
  cnt:n=>`${n} registros`,upd:"Actualizado",rl:"Recargar",more:"Ver más",ld:"Cargando…",
  e1:"La lista no se cargó",e2:"Revisa tu conexión e inténtalo otra vez.",rt:"Reintentar",
  z1:"Sin resultados",z2:"Prueba con parte del nombre o unos dígitos del teléfono. Funciona en latino y devanagari.",
  src:"Fuente",dtMore:"Ver más",dtLess:"Ver menos",
  mSafeQ:"¿Estás en la zona afectada?",mMarkSafe:"Marcar como a salvo",mAskRescue:"Pedir rescate",
  mSafeTitle:"Repórtate a salvo",mRescueTitle:"Solicitar rescate",
  mName:"Nombre",mNumber:"Número",mLocation:"Ubicación",mSend:"Enviar por WhatsApp",
  mNote:"Esto abre WhatsApp con tus datos ya escritos; igual debes pulsar enviar."},
 fr:{title:"Disparus / retrouvés",sub:"Inondation Rasuwa–Bhotekoshi",ph:"Rechercher un nom ou un téléphone",
  missing:"Disparus",found:"Retrouvés",allLoc:"Tous les lieux",strip:"Retrouvés · par adresse",
  nm:"Nom",ag:"Âge",pl:"Adresse / lieu",wh:"Dernier contact",ph2:"Téléphone",dt:"Détails",
  cnt:n=>`${n} fiches`,upd:"Mis à jour",rl:"Recharger",more:"Voir plus",ld:"Chargement…",
  e1:"La liste n'a pas pu être chargée",e2:"Vérifiez votre connexion et réessayez.",rt:"Réessayer",
  z1:"Aucun résultat",z2:"Essayez une partie du nom ou quelques chiffres du numéro. Latin et devanagari fonctionnent.",
  src:"Source",dtMore:"Voir plus",dtLess:"Voir moins",
  mSafeQ:"Êtes-vous dans la zone touchée ?",mMarkSafe:"Se déclarer en sécurité",mAskRescue:"Demander un secours",
  mSafeTitle:"Déclarez-vous en sécurité",mRescueTitle:"Demande de secours",
  mName:"Nom",mNumber:"Numéro",mLocation:"Lieu",mSend:"Envoyer via WhatsApp",
  mNote:"Cela ouvre WhatsApp avec vos informations déjà remplies — vous devez encore appuyer sur envoyer."},
 ru:{title:"Пропавшие и найденные",sub:"Наводнение Расува–Бхотекоши",ph:"Поиск по имени или номеру телефона",
  missing:"Пропавшие",found:"Найденные",allLoc:"Все места",strip:"Найденные · по адресу",
  nm:"Имя",ag:"Возраст",pl:"Адрес / место",wh:"Последний контакт",ph2:"Телефон",dt:"Подробности",
  cnt:n=>`${n} записей`,upd:"Обновлено",rl:"Обновить",more:"Показать ещё",ld:"Загрузка…",
  e1:"Список не загрузился",e2:"Проверьте соединение и попробуйте снова.",rt:"Повторить",
  z1:"Ничего не найдено",z2:"Введите часть имени или несколько цифр номера телефона. Работают латиница и деванагари.",
  src:"Источник",dtMore:"Показать полностью",dtLess:"Свернуть",
  mSafeQ:"Вы находитесь в пострадавшем районе?",mMarkSafe:"Сообщить, что в безопасности",mAskRescue:"Запросить спасение",
  mSafeTitle:"Сообщить, что вы в безопасности",mRescueTitle:"Запрос на спасение",
  mName:"Имя",mNumber:"Номер",mLocation:"Местоположение",mSend:"Отправить через WhatsApp",
  mNote:"Откроется WhatsApp с уже заполненными данными — отправить нужно будет вручную."}
};

/* ============================================================
   2. Devanagari → Latin, so one query searches both scripts
   ============================================================ */
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

/* ============================================================
   3. Places — one canonical label, many spellings in the data
   ============================================================ */
const PLACES=[
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
].map(([label,al],i)=>({
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

/* ============================================================
   4. Data
   ============================================================ */
const BASE='https://nirajbhusal.github.io/rasuwa-flood-bulletin/';
const SOURCES=[
  'https://raw.githubusercontent.com/nirajbhusal/rasuwa-flood-bulletin/main/family.json',
  BASE+'family.json'
];
const WA_NUMBER='9779746861925';

let lang='ne', tab='missing', loc='', addr='', shown=60;
let rows=[], updated='', modalType='safe';

const $=id=>document.getElementById(id);
const esc=s=>String(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function ingest(d){
  const build=(arr,status)=>(arr||[]).map(r=>{
    const name=[r.name,r.name_en].filter(Boolean).join(' / ');
    const blob=[name,r.place,r.note,r.when,r.reporter,r.phone].filter(Boolean).join(' ');
    return {...r,name,status,
      _n:norm(blob),_s:skel(blob),_d:digits(r.phone)+' '+digits(r.reporter),
      _pn:norm(r.place),_ps:skel(r.place),_g:addrGroup(r.place)};
  });
  rows=[...build(d.missing,'missing'),...build(d.found,'found'),...build(d.matched,'found')];
  updated=d.updated_at||'';
}

async function load(){
  $('out').innerHTML=`<div class="state">${esc(T[lang].ld)}</div>`;
  for(const url of SOURCES){
    try{
      const r=await fetch(url,{cache:'no-cache'});
      if(!r.ok)continue;
      ingest(await r.json());
      chrome(); render(); return;
    }catch(e){}
  }
  const t=T[lang];
  $('out').innerHTML=`<div class="state"><strong>${esc(t.e1)}</strong>${esc(t.e2)}<br><button id="rt" type="button">${esc(t.rt)}</button></div>`;
  $('rt').onclick=load;
}

/* ============================================================
   5. Filter + rank
   ============================================================ */
function score(r,terms){
  let total=0;
  for(const t of terms){
    let best=0;
    if(t.d&&t.d.length>2&&r._d.includes(t.d))best=3;
    else if(t.n&&norm(r.name).includes(t.n))best=3;
    else if(t.n&&r._n.includes(t.n))best=2;
    else if(t.s&&t.s.length>1&&r._s.includes(t.s))best=1;
    if(!best)return 0;
    total+=best;
  }
  return total;
}

function hit(){
  const raw=$('q').value.trim();
  let out=rows.filter(r=>r.status===tab);
  if(loc){const p=PLACES.find(p=>p.id===loc); if(p)out=out.filter(r=>inPlace(r,p))}
  if(addr)out=out.filter(r=>r._g===addr);
  if(!raw)return out;
  const terms=raw.split(/\s+/).map(w=>({n:norm(w),s:skel(w),d:digits(w)})).filter(t=>t.n||t.d);
  if(!terms.length)return out;
  return out.map(r=>[score(r,terms),r]).filter(p=>p[0]>0).sort((a,b)=>b[0]-a[0]).map(p=>p[1]);
}

function mark(text,raw){
  const safe=esc(text);
  if(!raw)return safe;
  const w=raw.trim().split(/\s+/).filter(x=>x.length>1).map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
  if(!w.length)return safe;
  try{return safe.replace(new RegExp('('+w.join('|')+')','gi'),'<mark>$1</mark>')}catch(e){return safe}
}

/* ============================================================
   6. Render
   ============================================================ */
function tel(p){
  const d=digits(p);
  return d.length>10?'+'+d:'+977'+d;
}

function detailsHtml(details,raw){
  const t=T[lang];
  const words=details.split(/\s+/).filter(Boolean);
  if(words.length<=5)return mark(details,raw);
  const short=words.slice(0,5).join(' ')+'…';
  return `<span class="dt-wrap"><span class="dt-short">${mark(short,raw)}</span><span class="dt-full">${mark(details,raw)}</span>`
    +`<button type="button" class="dt-toggle">${esc(t.dtMore)}</button></span>`;
}

function tr(r,i,raw){
  const t=T[lang];
  const phones=String(r.phone||'').split(/[\/,、]|\s+or\s+/).map(p=>p.trim()).filter(p=>digits(p).length>=6);
  const details=[r.note,r.reporter&&`— ${r.reporter}`].filter(Boolean).join(' ');
  const img=r.photo?`<img class="thumb" loading="lazy" alt="" src="${esc(r.photo.startsWith('http')?r.photo:BASE+r.photo)}">`:'';
  return `<tr>
   <td class="n">${i}</td>
   <td class="nm" data-l="${esc(t.nm)}">${img}${mark(r.name,raw)}${r.name_en&&r.name!==r.name_en?`<small>${esc(r.name_en)}</small>`:''}</td>
   <td class="ag" data-l="${esc(t.ag)}">${esc(r.age||'')}</td>
   <td data-l="${esc(t.pl)}">${mark(r.place,raw)}</td>
   <td data-l="${esc(t.wh)}">${esc(r.when||'')}</td>
   <td class="ph" data-l="${esc(t.ph2)}">${phones.map(p=>`<a href="tel:${esc(tel(p))}">${esc(p)}</a>`).join('')}</td>
   <td class="dt" data-l="${esc(t.dt)}">${detailsHtml(details,raw)}</td>
  </tr>`;
}

function render(){
  const t=T[lang], raw=$('q').value.trim(), res=hit();
  $('count').textContent=t.cnt(res.length);
  $('clear').classList.toggle('on',!!raw);

  if(!res.length){
    $('out').innerHTML=`<div class="state"><strong>${esc(t.z1)}</strong>${esc(t.z2)}</div>`;
    return;
  }
  const slice=res.slice(0,shown);
  let html=`<div class="tw"><table><thead><tr>
    <th></th><th>${esc(t.nm)}</th><th>${esc(t.ag)}</th><th>${esc(t.pl)}</th>
    <th>${esc(t.wh)}</th><th>${esc(t.ph2)}</th><th>${esc(t.dt)}</th></tr></thead><tbody>
    ${slice.map((r,i)=>tr(r,i+1,raw)).join('')}</tbody></table></div>`;
  if(res.length>slice.length)html+=`<button class="more" id="more" type="button">${esc(t.more)} (${res.length-slice.length})</button>`;
  $('out').innerHTML=html;
  const m=$('more'); if(m)m.onclick=()=>{shown+=60;render()};
}

function chrome(){
  const t=T[lang];
  document.documentElement.lang=lang;
  document.title=t.title+' · '+t.sub;
  $('ttl').firstChild.nodeValue=t.title;
  $('sub').textContent=t.sub;
  $('q').placeholder=t.ph;
  $('refresh').textContent=t.rl;
  $('updated').textContent=updated
    ? t.upd+' '+new Date(updated).toLocaleString(lang==='ne'?'ne-NP':lang,{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}) : '';
  $('src').innerHTML=esc(t.src)+`: <a href="${BASE}#family" target="_blank" rel="noopener">${esc(BASE.replace(/^https:\/\//,''))}</a>`;

  $('safeCtaLbl').textContent=t.mSafeQ;
  $('btnSafe').textContent=t.mMarkSafe;
  $('btnRescue').textContent=t.mAskRescue;
  $('lblName').textContent=t.mName;
  $('lblNumber').textContent=t.mNumber;
  $('lblLocation').textContent=t.mLocation;
  $('modalSubmit').textContent=t.mSend;
  $('modalNote').textContent=t.mNote;
  $('modalTitle').textContent=modalType==='safe'?t.mSafeTitle:t.mRescueTitle;

  document.querySelectorAll('.tab').forEach(b=>{
    const n=rows.filter(r=>r.status===b.dataset.t).length;
    b.innerHTML=esc(t[b.dataset.t])+`<b>${n}</b>`;
    b.setAttribute('aria-selected',String(b.dataset.t===tab));
  });

  document.querySelectorAll('#langs .pin').forEach(b=>{
    b.setAttribute('aria-pressed',String(b.dataset.lg===lang));
  });

  /* location list, built from whatever the current tab actually contains */
  const pool=rows.filter(r=>r.status===tab);
  const opts=PLACES.map(p=>[p,pool.filter(r=>inPlace(r,p)).length])
                   .filter(([,n])=>n>0).sort((a,b)=>b[1]-a[1]);
  $('loc').innerHTML=`<option value="">${esc(t.allLoc)}</option>`+
    opts.map(([p,n])=>`<option value="${p.id}">${esc(p.label)} (${n})</option>`).join('');
  if(!opts.some(([p])=>p.id===loc))loc='';
  $('loc').value=loc;

  /* strip: where the found people are from */
  const g={};
  rows.filter(r=>r.status==='found'&&r._g).forEach(r=>{g[r._g]=(g[r._g]||0)+1});
  const pins=Object.entries(g).sort((a,b)=>b[1]-a[1]);
  $('strip').hidden=!pins.length;
  $('strip-lb').textContent=t.strip;
  $('pins').innerHTML=pins.map(([k,n])=>
    `<button class="pin" type="button" data-a="${esc(k)}" aria-pressed="${addr===k}">${esc(k)}<b>${n}</b></button>`).join('');
}

/* ============================================================
   7. Wiring
   ============================================================ */
let timer;
$('q').addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>{shown=60;render()},110)});
$('clear').onclick=()=>{$('q').value='';shown=60;$('q').focus();render()};
$('refresh').onclick=load;
$('langs').addEventListener('click',e=>{
  const b=e.target.closest('.pin'); if(!b)return;
  lang=b.dataset.lg; chrome(); render();
});
$('loc').addEventListener('change',e=>{loc=e.target.value;addr='';shown=60;chrome();render()});
document.querySelector('.tabs').addEventListener('click',e=>{
  const b=e.target.closest('.tab'); if(!b)return;
  tab=b.dataset.t; addr=''; shown=60; chrome(); render();
  const soft=!matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({top:0,behavior:soft?'smooth':'auto'});
});
$('pins').addEventListener('click',e=>{
  const b=e.target.closest('.pin'); if(!b)return;
  addr = addr===b.dataset.a ? '' : b.dataset.a;
  tab='found'; loc=''; shown=60; chrome(); render();
});
$('out').addEventListener('click',e=>{
  const b=e.target.closest('.dt-toggle'); if(!b)return;
  const td=b.closest('.dt'), open=td.classList.toggle('expanded');
  b.textContent=T[lang][open?'dtLess':'dtMore'];
});

function openModal(type){
  modalType=type;
  $('safeForm').reset();
  chrome();
  $('modalOverlay').classList.add('open');
  $('fName').focus();
}
function closeModal(){
  $('modalOverlay').classList.remove('open');
}
$('btnSafe').onclick=()=>openModal('safe');
$('btnRescue').onclick=()=>openModal('rescue');
$('modalClose').onclick=closeModal;
$('modalOverlay').addEventListener('click',e=>{if(e.target===$('modalOverlay'))closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('modalOverlay').classList.contains('open'))closeModal()});
$('safeForm').addEventListener('submit',e=>{
  e.preventDefault();
  const t=T[lang];
  const name=$('fName').value.trim(), num=$('fNumber').value.trim(), locv=$('fLocation').value.trim();
  const head=(modalType==='safe'?'✅ ':'🆘 ')+(modalType==='safe'?t.mSafeTitle:t.mRescueTitle);
  const msg=`${head}\n${t.mName}: ${name}\n${t.mNumber}: ${num}\n${t.mLocation}: ${locv}`;
  window.open('https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(msg),'_blank','noopener');
  closeModal();
});

(function(){const b=(navigator.language||'ne').slice(0,2); if(T[b])lang=b})();
chrome();
load();
