/* ============================================================
   1. Interface strings
   ============================================================ */
const T={
 ne:{title:"हराएको / भेटिएको",sub:"रसुवा–भोटेकोशी बाढी",ph:"नाम वा फोन नम्बर खोज्नुहोस्",
  missing:"हराएको",found:"भेटिएको",allLoc:"सबै स्थान",strip:"भेटिएकाको ठेगाना",
  intlTourists:"अन्तर्राष्ट्रिय पर्यटक",dAgency:"एजेन्सी",
  expMissing:"हराएको CSV निकाल्नुहोस्",expFound:"भेटिएको CSV निकाल्नुहोस्",
  kailashTab:"कैलाश यात्रा",kailashTitle:"हराएको कैलाश यात्रा समूहको फोटो — पहिचानका लागि",
  kailashIntro:"तलको फोटोमा कसैलाई चिन्नुहुन्छ भने, थाहा भएको कुरा WhatsApp मार्फत पठाउन 'स्थिति रिपोर्ट गर्नुहोस्' थिच्नुहोस्।",
  kailashReportBtn:"स्थिति रिपोर्ट गर्नुहोस्",kailashNoName:"नाम उल्लेख छैन",
  nm:"नाम",ag:"उमेर",pl:"ठेगाना / स्थान",wh:"अन्तिम सम्पर्क",ph2:"फोन",dt:"विवरण",
  cnt:n=>`${n} विवरण`,upd:"अद्यावधिक",rl:"पुनः लोड",more:"थप देखाउनुहोस्",ld:"लोड हुँदै…",
  e1:"सूची लोड भएन",e2:"इन्टरनेट जाँचेर फेरि प्रयास गर्नुहोस्।",rt:"फेरि प्रयास",
  z1:"केही भेटिएन",z2:"नामको केही अक्षर वा फोनका केही अंक मात्र लेख्नुहोस्। रोमन र देवनागरी दुवै चल्छ।",
  dtMore:"थप हेर्नुहोस्",
  dStatus:"स्थिति",dTracked:"फोन पछिल्लोपटक ट्रयाक भएको",dPeople:"वरपर भएका मानिस",dPurpose:"उद्देश्य",
  dProfession:"पेशा",dReportedBy:"रिपोर्ट गर्ने",dDob:"जन्म मिति",dPassport:"राहदानी नं.",dSex:"लिङ्ग",dNationality:"राष्ट्रियता",
  mSafeQ:"के तपाईं प्रभावित क्षेत्रमा हुनुहुन्छ?",mMarkSafe:"सुरक्षित छु भनी जनाउनुहोस्",mAskRescue:"उद्धार माग्नुहोस्",
  mSafeTitle:"आफू सुरक्षित छु भनी जनाउनुहोस्",mRescueTitle:"उद्धारको लागि अनुरोध",
  mName:"नाम",mNumber:"नम्बर",mLocation:"स्थान",mSend:"WhatsApp मार्फत पठाउनुहोस्",
  mNote:"यसले तपाईंको विवरण भरिएको WhatsApp खोल्छ — पठाउन तपाईंले आफै पठाउनुहोस् थिच्नुपर्छ।",
  rCtaQ:"कसैको हराएको वा भेटिएको थाहा छ?",rBtnMissing:"हराएको रिपोर्ट गर्नुहोस्",rBtnFound:"भेटिएको थप्नुहोस्",
  rTitleMissing:"हराएको व्यक्तिको रिपोर्ट",rTitleFound:"भेटिएको व्यक्ति थप्नुहोस्",
  rHomeAddr:"घरको ठेगाना",rLastLoc:"अन्तिम थाहा भएको स्थान",rPhoto:"फोटो",rPhotoDoc:"फोटो / कागजात",
  rRelContact:"आफन्तको सम्पर्क",rFoundFrom:"कहाँ भेटियो",rStatusLabel:"अवस्था",
  rStatusRescue:"तत्काल उद्धार आवश्यक",rStatusFine:"सुरक्षित छ",rStatusDeceased:"मृत",
  rShareNote:"यसले तपाईंको विवरण WhatsApp मार्फत पठाउँछ। केही फोनमा फोटो पनि सिधै पठाउन मिल्छ (खुल्ने सूचीमा WhatsApp छान्नुहोस्); नत्र WhatsApp विवरणसहित खुल्छ र फोटो आफैं थप्नुपर्छ।"},
 en:{title:"Missing & found",sub:"Rasuwa–Bhotekoshi flood",ph:"Search a name or phone number",
  missing:"Missing",found:"Found",allLoc:"All locations",strip:"Found · by address",
  intlTourists:"International Tourists",dAgency:"Agency",
  expMissing:"Export Missing CSV",expFound:"Export Found CSV",
  kailashTab:"Kailash Yatra",kailashTitle:"Photos of Missing Kailash Yatra Group for Identification Purpose",
  kailashIntro:"If you recognize someone below, tap Report Status to share what you know via WhatsApp.",
  kailashReportBtn:"Report Status",kailashNoName:"Name not recorded",
  nm:"Name",ag:"Age",pl:"Address / place",wh:"Last contact",ph2:"Phone",dt:"Details",
  cnt:n=>`${n} records`,upd:"Updated",rl:"Reload",more:"Show more",ld:"Loading…",
  e1:"The list didn't load",e2:"Check your connection and try again.",rt:"Try again",
  z1:"Nothing matched",z2:"Try part of a name or a few digits of a phone number. Roman and Devanagari both work.",
  dtMore:"View more",
  dStatus:"Status",dTracked:"Phone last tracked",dPeople:"People around",dPurpose:"Purpose",
  dProfession:"Profession",dReportedBy:"Reported by",dDob:"Date of birth",dPassport:"Passport no.",dSex:"Sex",dNationality:"Nationality",
  mSafeQ:"Are you in the affected area?",mMarkSafe:"Mark Safe",mAskRescue:"Ask for Rescue",
  mSafeTitle:"Report yourself safe",mRescueTitle:"Ask for rescue",
  mName:"Name",mNumber:"Number",mLocation:"Location",mSend:"Send via WhatsApp",
  mNote:"This opens WhatsApp with your details filled in — you still need to hit send yourself.",
  rCtaQ:"Know someone missing or found?",rBtnMissing:"Report Missing",rBtnFound:"Add Found",
  rTitleMissing:"Report a missing person",rTitleFound:"Add a found person",
  rHomeAddr:"Home address",rLastLoc:"Last known location",rPhoto:"Photo",rPhotoDoc:"Photo / document",
  rRelContact:"Relative contact",rFoundFrom:"Found from",rStatusLabel:"Status",
  rStatusRescue:"Need immediate rescue",rStatusFine:"Fine",rStatusDeceased:"Dead",
  rShareNote:"This sends your report via WhatsApp. On some phones you can include the photo directly (choose WhatsApp from the share sheet); otherwise WhatsApp opens with the text only and you can attach the photo yourself."},
 hi:{title:"लापता / मिले",sub:"रसुवा–भोटेकोशी बाढ़",ph:"नाम या फ़ोन नंबर खोजें",
  missing:"लापता",found:"मिले",allLoc:"सभी स्थान",strip:"मिले · पते के अनुसार",
  intlTourists:"अंतरराष्ट्रीय पर्यटक",dAgency:"एजेंसी",
  expMissing:"लापता CSV निर्यात करें",expFound:"मिले CSV निर्यात करें",
  kailashTab:"कैलाश यात्रा",kailashTitle:"लापता कैलाश यात्रा समूह की तस्वीरें — पहचान हेतु",
  kailashIntro:"यदि आप नीचे किसी को पहचानते हैं, तो WhatsApp पर जानकारी भेजने के लिए 'स्थिति रिपोर्ट करें' दबाएं।",
  kailashReportBtn:"स्थिति रिपोर्ट करें",kailashNoName:"नाम दर्ज नहीं",
  nm:"नाम",ag:"उम्र",pl:"पता / जगह",wh:"आख़िरी संपर्क",ph2:"फ़ोन",dt:"विवरण",
  cnt:n=>`${n} प्रविष्टियाँ`,upd:"अपडेट",rl:"फिर लोड करें",more:"और दिखाएँ",ld:"लोड हो रहा है…",
  e1:"सूची लोड नहीं हुई",e2:"इंटरनेट जाँचकर दोबारा कोशिश करें।",rt:"दोबारा कोशिश",
  z1:"कुछ नहीं मिला",z2:"नाम का कुछ हिस्सा या फ़ोन के कुछ अंक लिखें। रोमन और देवनागरी दोनों चलते हैं।",
  dtMore:"और देखें",
  dStatus:"स्थिति",dTracked:"फ़ोन आख़िरी बार ट्रैक",dPeople:"आसपास मौजूद लोग",dPurpose:"उद्देश्य",
  dProfession:"पेशा",dReportedBy:"रिपोर्ट करने वाला",dDob:"जन्म तिथि",dPassport:"पासपोर्ट नं.",dSex:"लिंग",dNationality:"राष्ट्रीयता",
  mSafeQ:"क्या आप प्रभावित क्षेत्र में हैं?",mMarkSafe:"सुरक्षित होने की सूचना दें",mAskRescue:"बचाव के लिए अनुरोध करें",
  mSafeTitle:"स्वयं को सुरक्षित बताएं",mRescueTitle:"बचाव का अनुरोध",
  mName:"नाम",mNumber:"नंबर",mLocation:"स्थान",mSend:"WhatsApp से भेजें",
  mNote:"इससे आपकी जानकारी भरा हुआ WhatsApp खुलेगा — भेजने के लिए आपको खुद भेजें दबाना होगा।",
  rCtaQ:"किसी के लापता या मिलने की जानकारी है?",rBtnMissing:"लापता की रिपोर्ट करें",rBtnFound:"मिला हुआ व्यक्ति जोड़ें",
  rTitleMissing:"लापता व्यक्ति की रिपोर्ट",rTitleFound:"मिले हुए व्यक्ति की जानकारी",
  rHomeAddr:"घर का पता",rLastLoc:"आख़िरी ज्ञात स्थान",rPhoto:"फ़ोटो",rPhotoDoc:"फ़ोटो / दस्तावेज़",
  rRelContact:"रिश्तेदार का संपर्क",rFoundFrom:"कहाँ मिला",rStatusLabel:"स्थिति",
  rStatusRescue:"तुरंत बचाव आवश्यक",rStatusFine:"ठीक है",rStatusDeceased:"मृत",
  rShareNote:"यह आपकी रिपोर्ट WhatsApp के ज़रिए भेजता है। कुछ फ़ोन पर आप फ़ोटो सीधे शामिल कर सकते हैं (खुलने वाली सूची में WhatsApp चुनें); नहीं तो WhatsApp केवल टेक्स्ट के साथ खुलेगा और आपको फ़ोटो खुद जोड़नी होगी।"},
 zh:{title:"失踪 / 已找到",sub:"拉苏瓦–波特科西洪灾",ph:"搜索姓名或电话号码",
  missing:"失踪",found:"已找到",allLoc:"所有地点",strip:"已找到 · 按住址",
  intlTourists:"国际游客",dAgency:"旅行社",
  expMissing:"导出失踪名单 CSV",expFound:"导出已找到名单 CSV",
  kailashTab:"凯拉萨朝圣团",kailashTitle:"失踪凯拉萨朝圣团照片 — 用于身份识别",
  kailashIntro:"如果您认出下方的人，请点击「报告状态」，通过 WhatsApp 分享您所知道的信息。",
  kailashReportBtn:"报告状态",kailashNoName:"姓名未记录",
  nm:"姓名",ag:"年龄",pl:"住址 / 地点",wh:"最后联系",ph2:"电话",dt:"详情",
  cnt:n=>`${n} 条记录`,upd:"更新于",rl:"重新加载",more:"显示更多",ld:"加载中…",
  e1:"名单加载失败",e2:"请检查网络后重试。",rt:"重试",
  z1:"没有匹配结果",z2:"请输入姓名的一部分或电话号码的几位数字。罗马字母与天城文均可。",
  dtMore:"查看更多",
  dStatus:"状态",dTracked:"电话最后追踪",dPeople:"周围的人",dPurpose:"目的",
  dProfession:"职业",dReportedBy:"报告人",dDob:"出生日期",dPassport:"护照号",dSex:"性别",dNationality:"国籍",
  mSafeQ:"您是否在受灾地区？",mMarkSafe:"报平安",mAskRescue:"请求救援",
  mSafeTitle:"报平安",mRescueTitle:"请求救援",
  mName:"姓名",mNumber:"号码",mLocation:"位置",mSend:"通过 WhatsApp 发送",
  mNote:"这将打开已填好信息的 WhatsApp——您仍需自行点击发送。",
  rCtaQ:"知道有人失踪或被找到吗？",rBtnMissing:"报告失踪",rBtnFound:"添加已找到人员",
  rTitleMissing:"报告失踪人员",rTitleFound:"添加已找到人员",
  rHomeAddr:"家庭住址",rLastLoc:"最后已知位置",rPhoto:"照片",rPhotoDoc:"照片 / 文件",
  rRelContact:"亲属联系方式",rFoundFrom:"在哪里找到",rStatusLabel:"状态",
  rStatusRescue:"急需救援",rStatusFine:"情况良好",rStatusDeceased:"已死亡",
  rShareNote:"这将通过 WhatsApp 发送您的报告。部分手机可直接附上照片（在分享菜单中选择 WhatsApp）；否则 WhatsApp 将只带文字打开，您需要自行添加照片。"},
 es:{title:"Desaparecidos / hallados",sub:"Inundación Rasuwa–Bhotekoshi",ph:"Busca un nombre o teléfono",
  missing:"Desaparecidos",found:"Hallados",allLoc:"Todos los lugares",strip:"Hallados · por dirección",
  intlTourists:"Turistas internacionales",dAgency:"Agencia",
  expMissing:"Exportar CSV de desaparecidos",expFound:"Exportar CSV de hallados",
  kailashTab:"Peregrinación Kailash",kailashTitle:"Fotos del grupo desaparecido de la peregrinación Kailash — para identificación",
  kailashIntro:"Si reconoces a alguien abajo, toca \"Reportar estado\" para compartir lo que sepas por WhatsApp.",
  kailashReportBtn:"Reportar estado",kailashNoName:"Nombre no registrado",
  nm:"Nombre",ag:"Edad",pl:"Dirección / lugar",wh:"Último contacto",ph2:"Teléfono",dt:"Detalles",
  cnt:n=>`${n} registros`,upd:"Actualizado",rl:"Recargar",more:"Ver más",ld:"Cargando…",
  e1:"La lista no se cargó",e2:"Revisa tu conexión e inténtalo otra vez.",rt:"Reintentar",
  z1:"Sin resultados",z2:"Prueba con parte del nombre o unos dígitos del teléfono. Funciona en latino y devanagari.",
  dtMore:"Ver más",
  dStatus:"Estado",dTracked:"Último rastreo del teléfono",dPeople:"Personas alrededor",dPurpose:"Propósito",
  dProfession:"Profesión",dReportedBy:"Reportado por",dDob:"Fecha de nacimiento",dPassport:"N.º de pasaporte",dSex:"Sexo",dNationality:"Nacionalidad",
  mSafeQ:"¿Estás en la zona afectada?",mMarkSafe:"Marcar como a salvo",mAskRescue:"Pedir rescate",
  mSafeTitle:"Repórtate a salvo",mRescueTitle:"Solicitar rescate",
  mName:"Nombre",mNumber:"Número",mLocation:"Ubicación",mSend:"Enviar por WhatsApp",
  mNote:"Esto abre WhatsApp con tus datos ya escritos; igual debes pulsar enviar.",
  rCtaQ:"¿Conoces a alguien desaparecido o hallado?",rBtnMissing:"Reportar desaparecido",rBtnFound:"Añadir hallado",
  rTitleMissing:"Reportar a una persona desaparecida",rTitleFound:"Añadir a una persona hallada",
  rHomeAddr:"Dirección de casa",rLastLoc:"Última ubicación conocida",rPhoto:"Foto",rPhotoDoc:"Foto / documento",
  rRelContact:"Contacto de un familiar",rFoundFrom:"Encontrado en",rStatusLabel:"Estado",
  rStatusRescue:"Necesita rescate inmediato",rStatusFine:"Está bien",rStatusDeceased:"Muerto",
  rShareNote:"Esto envía tu reporte por WhatsApp. En algunos teléfonos puedes incluir la foto directamente (elige WhatsApp en el menú para compartir); si no, WhatsApp se abrirá solo con el texto y deberás adjuntar la foto tú mismo."},
 fr:{title:"Disparus / retrouvés",sub:"Inondation Rasuwa–Bhotekoshi",ph:"Rechercher un nom ou un téléphone",
  missing:"Disparus",found:"Retrouvés",allLoc:"Tous les lieux",strip:"Retrouvés · par adresse",
  intlTourists:"Touristes internationaux",dAgency:"Agence",
  expMissing:"Exporter le CSV des disparus",expFound:"Exporter le CSV des retrouvés",
  kailashTab:"Pèlerinage Kailash",kailashTitle:"Photos du groupe disparu du pèlerinage Kailash — pour identification",
  kailashIntro:"Si vous reconnaissez quelqu'un ci-dessous, appuyez sur « Signaler le statut » pour partager ce que vous savez via WhatsApp.",
  kailashReportBtn:"Signaler le statut",kailashNoName:"Nom non enregistré",
  nm:"Nom",ag:"Âge",pl:"Adresse / lieu",wh:"Dernier contact",ph2:"Téléphone",dt:"Détails",
  cnt:n=>`${n} fiches`,upd:"Mis à jour",rl:"Recharger",more:"Voir plus",ld:"Chargement…",
  e1:"La liste n'a pas pu être chargée",e2:"Vérifiez votre connexion et réessayez.",rt:"Réessayer",
  z1:"Aucun résultat",z2:"Essayez une partie du nom ou quelques chiffres du numéro. Latin et devanagari fonctionnent.",
  dtMore:"Voir plus",
  dStatus:"Statut",dTracked:"Dernier suivi du téléphone",dPeople:"Personnes autour",dPurpose:"Motif",
  dProfession:"Profession",dReportedBy:"Signalé par",dDob:"Date de naissance",dPassport:"N° de passeport",dSex:"Sexe",dNationality:"Nationalité",
  mSafeQ:"Êtes-vous dans la zone touchée ?",mMarkSafe:"Se déclarer en sécurité",mAskRescue:"Demander un secours",
  mSafeTitle:"Déclarez-vous en sécurité",mRescueTitle:"Demande de secours",
  mName:"Nom",mNumber:"Numéro",mLocation:"Lieu",mSend:"Envoyer via WhatsApp",
  mNote:"Cela ouvre WhatsApp avec vos informations déjà remplies — vous devez encore appuyer sur envoyer.",
  rCtaQ:"Vous connaissez une personne disparue ou retrouvée ?",rBtnMissing:"Signaler un disparu",rBtnFound:"Ajouter un retrouvé",
  rTitleMissing:"Signaler une personne disparue",rTitleFound:"Ajouter une personne retrouvée",
  rHomeAddr:"Adresse du domicile",rLastLoc:"Dernier lieu connu",rPhoto:"Photo",rPhotoDoc:"Photo / document",
  rRelContact:"Contact d'un proche",rFoundFrom:"Retrouvé à",rStatusLabel:"État",
  rStatusRescue:"Secours immédiat nécessaire",rStatusFine:"Va bien",rStatusDeceased:"Mort",
  rShareNote:"Cela envoie votre signalement via WhatsApp. Sur certains téléphones, vous pouvez inclure la photo directement (choisissez WhatsApp dans le menu de partage) ; sinon WhatsApp s'ouvre avec le texte seul et vous devrez ajouter la photo vous-même."},
 ru:{title:"Пропавшие и найденные",sub:"Наводнение Расува–Бхотекоши",ph:"Поиск по имени или номеру телефона",
  missing:"Пропавшие",found:"Найденные",allLoc:"Все места",strip:"Найденные · по адресу",
  intlTourists:"Иностранные туристы",dAgency:"Агентство",
  expMissing:"Экспорт CSV пропавших",expFound:"Экспорт CSV найденных",
  kailashTab:"Паломники Кайлас",kailashTitle:"Фото пропавшей группы паломников на Кайлас — для опознания",
  kailashIntro:"Если вы узнали кого-то ниже, нажмите «Сообщить статус», чтобы отправить информацию через WhatsApp.",
  kailashReportBtn:"Сообщить статус",kailashNoName:"Имя не указано",
  nm:"Имя",ag:"Возраст",pl:"Адрес / место",wh:"Последний контакт",ph2:"Телефон",dt:"Подробности",
  cnt:n=>`${n} записей`,upd:"Обновлено",rl:"Обновить",more:"Показать ещё",ld:"Загрузка…",
  e1:"Список не загрузился",e2:"Проверьте соединение и попробуйте снова.",rt:"Повторить",
  z1:"Ничего не найдено",z2:"Введите часть имени или несколько цифр номера телефона. Работают латиница и деванагари.",
  dtMore:"Показать полностью",
  dStatus:"Статус",dTracked:"Последнее отслеживание телефона",dPeople:"Люди рядом",dPurpose:"Цель",
  dProfession:"Профессия",dReportedBy:"Кем сообщено",dDob:"Дата рождения",dPassport:"Номер паспорта",dSex:"Пол",dNationality:"Национальность",
  mSafeQ:"Вы находитесь в пострадавшем районе?",mMarkSafe:"Сообщить, что в безопасности",mAskRescue:"Запросить спасение",
  mSafeTitle:"Сообщить, что вы в безопасности",mRescueTitle:"Запрос на спасение",
  mName:"Имя",mNumber:"Номер",mLocation:"Местоположение",mSend:"Отправить через WhatsApp",
  mNote:"Откроется WhatsApp с уже заполненными данными — отправить нужно будет вручную.",
  rCtaQ:"Знаете кого-то пропавшего или найденного?",rBtnMissing:"Сообщить о пропавшем",rBtnFound:"Добавить найденного",
  rTitleMissing:"Сообщить о пропавшем человеке",rTitleFound:"Добавить найденного человека",
  rHomeAddr:"Домашний адрес",rLastLoc:"Последнее известное местоположение",rPhoto:"Фото",rPhotoDoc:"Фото / документ",
  rRelContact:"Контакт родственника",rFoundFrom:"Где найден",rStatusLabel:"Статус",
  rStatusRescue:"Нужна немедленная помощь",rStatusFine:"В порядке",rStatusDeceased:"Погиб",
  rShareNote:"Это отправит ваш отчёт через WhatsApp. На некоторых телефонах можно сразу приложить фото (выберите WhatsApp в меню share); иначе WhatsApp откроется только с текстом, и фото нужно будет прикрепить самостоятельно."}
};

/* ============================================================
   2. Page state
   (Devanagari matching, places, and data fetching live in data.js,
   shared with the visualization page.)
   ============================================================ */
const WA_NUMBER='9779746861925';

let lang='ne', tab='missing', loc='', addr='', shown=60;
let rows=[], updated='', modalType='safe', kailashData=[];

async function load(){
  $('out').innerHTML=`<div class="state">${esc(T[lang].ld)}</div>`;
  try{
    const [d,extra,tourists,found3,kailash]=await Promise.all([
      fetchFamilyData(),fetchExtraRecords('sources/extra-records.json'),fetchExtraRecords('sources/tourists-records.json'),
      fetchExtraRecords('sources/found-tracker-3-records.json'),fetchExtraRecords('sources/kailash-group.json')
    ]);
    const built=buildRows(d,[...extra,...tourists,...found3]);
    rows=dedupeRows(built.rows); updated=built.updated; kailashData=kailash;
    chrome(); render();
  }catch(e){
    const t=T[lang];
    $('out').innerHTML=`<div class="state"><strong>${esc(t.e1)}</strong>${esc(t.e2)}<br><button id="rt" type="button">${esc(t.rt)}</button></div>`;
    $('rt').onclick=load;
  }
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
  if(loc==='INTL')out=out.filter(r=>isInternational(r.place));
  else if(loc){const p=PLACES.find(p=>p.id===loc); if(p)out=out.filter(r=>inPlace(r,p))}
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

function tr(r,i,raw){
  const t=T[lang];
  const phones=String(r.phone||'').split(/[\/,、]|\s+or\s+/).map(p=>p.trim()).filter(p=>digits(p).length>=6);
  const img=r.photo?`<img class="thumb" loading="lazy" alt="" src="${esc(r.photo.startsWith('http')?r.photo:BASE+r.photo)}">`:'';
  return `<tr>
   <td class="n">${i}</td>
   <td class="nm" data-l="${esc(t.nm)}">${img}${mark(r.name,raw)}${r.name_en&&r.name!==r.name_en?`<small>${esc(r.name_en)}</small>`:''}</td>
   <td class="ag" data-l="${esc(t.ag)}">${esc(r.age||'')}</td>
   <td data-l="${esc(t.pl)}">${mark(r.place,raw)}</td>
   <td data-l="${esc(t.wh)}">${esc(r.when||'')}</td>
   <td class="ph" data-l="${esc(t.ph2)}">${phones.map(p=>`<a href="tel:${esc(tel(p))}">${esc(p)}</a>`).join('')}</td>
   <td class="dt" data-l="${esc(t.dt)}"><button type="button" class="dt-view" data-id="${esc(r.id||'')}">${esc(t.dtMore)}</button></td>
  </tr>`;
}

/* ============================================================
   6b. Detail modal — every row's full record, whatever fields
   the source actually has (basic list feed vs. the richer
   locally-curated sources/extra-records.json)
   ============================================================ */
function buildDetailFields(r){
  const t=T[lang];
  const out=[];
  const push=(label,val)=>{if(val)out.push([label,val])};
  push(t.dStatus,r.status==='found'?t.found:t.missing);
  push(t.ag,r.age);
  push(t.pl,r.place);
  push(t.wh,r.when);
  push(t.ph2,r.phone);
  push(t.dReportedBy,r.reporter);
  const e=r.extra||{};
  const tracked=[e.phoneTrackedAt,e.phoneTrackedLoc].filter(Boolean).join(' · ');
  push(t.dTracked,tracked);
  push(t.dPeople,e.peopleAround);
  push(t.dPurpose,e.purpose);
  push(t.dProfession,e.profession);
  push(t.dDob,e.dob);
  push(t.dPassport,e.passport);
  push(t.dSex,e.sex);
  push(t.dNationality,e.nationality);
  push(t.dAgency,e.agency);
  push(t.dt,r.note);
  return out;
}

function detailRowHtml(label,val){
  if(label===T[lang].ph2){
    const phones=String(val||'').split(/[\/,、]|\s+or\s+/).map(p=>p.trim()).filter(p=>digits(p).length>=6);
    if(phones.length)val=phones.map(p=>`<a href="tel:${esc(tel(p))}">${esc(p)}</a>`).join(', ');
  }else{
    val=esc(val);
  }
  return `<div class="detail-row"><span class="detail-label">${esc(label)}</span><span class="detail-value">${val}</span></div>`;
}

function openDetailModal(id){
  const r=rows.find(x=>x.id===id);
  if(!r)return;
  $('detailName').textContent=r.name;
  $('detailBody').innerHTML=buildDetailFields(r).map(([l,v])=>detailRowHtml(l,v)).join('');
  $('detailModalOverlay').classList.add('open');
}
function closeDetailModal(){
  $('detailModalOverlay').classList.remove('open');
}

/* ============================================================
   6b2. Kailash Yatra identification tab — the sheet's photos are
   pasted directly into cells and don't come through any export, so
   the live sheet is embedded for the photos; the name list (which
   does export) is rendered ourselves so each row can get a report
   button.
   ============================================================ */
const KAILASH_SHEET_URL='https://docs.google.com/spreadsheets/d/1K5nQq6iGQ7wv24d26kiW1095GSTfKIpG4Vy_SvS4Wi8/preview';

function reportKailashStatus(sn,name){
  const t=T[lang];
  const lines=[`📷 ${t.kailashTitle}`,`SN: ${sn}`];
  if(name)lines.push(`${t.nm}: ${name}`);
  lines.push(`${t.kailashReportBtn}: `);
  window.open('https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener');
}

function renderKailash(){
  const t=T[lang];
  const rowsHtml=kailashData.map(k=>`<div class="kailash-row">
    <span class="kailash-sn">#${esc(k.sn)}</span>
    <span class="kailash-name">${k.name?esc(k.name):`<em>${esc(t.kailashNoName)}</em>`}</span>
    <button type="button" class="dt-view kailash-report" data-sn="${esc(k.sn)}" data-name="${esc(k.name||'')}">${esc(t.kailashReportBtn)}</button>
  </div>`).join('');
  $('out').innerHTML=`
    <div class="kailash-hd">
      <h2>${esc(t.kailashTitle)}</h2>
      <p>${esc(t.kailashIntro)}</p>
    </div>
    <div class="kailash-embed"><iframe src="${KAILASH_SHEET_URL}" loading="lazy" title="${esc(t.kailashTitle)}"></iframe></div>
    <div class="kailash-list">${rowsHtml}</div>`;
}

function render(){
  if(tab==='kailash'){renderKailash();return}
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
  $('exportMissing').textContent=t.expMissing;
  $('exportFound').textContent=t.expFound;
  $('updated').textContent=updated
    ? t.upd+' '+new Date(updated).toLocaleString(lang==='ne'?'ne-NP':lang,{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}) : '';
  $('safeCtaLbl').textContent=t.mSafeQ;
  $('btnSafe').textContent=t.mMarkSafe;
  $('btnRescue').textContent=t.mAskRescue;
  $('lblName').textContent=t.mName;
  $('lblNumber').textContent=t.mNumber;
  $('lblLocation').textContent=t.mLocation;
  $('modalSubmit').textContent=t.mSend;
  $('modalNote').textContent=t.mNote;
  $('modalTitle').textContent=modalType==='safe'?t.mSafeTitle:t.mRescueTitle;

  $('reportCtaLbl').textContent=t.rCtaQ;
  $('btnReportMissing').textContent=t.rBtnMissing;
  $('btnAddFound').textContent=t.rBtnFound;

  $('rmTitle').textContent=t.rTitleMissing;
  $('rmNote').textContent=t.rShareNote;
  $('rmLblName').textContent=t.mName;
  $('rmLblPhone').textContent=t.mNumber;
  $('rmLblHomeAddr').textContent=t.rHomeAddr;
  $('rmLblLastLoc').textContent=t.rLastLoc;
  $('rmLblPhoto').textContent=t.rPhoto;
  $('rmSubmit').textContent=t.mSend;

  $('afTitle').textContent=t.rTitleFound;
  $('afNote').textContent=t.rShareNote;
  $('afLblName').textContent=t.mName;
  $('afLblPhone').textContent=t.mNumber;
  $('afLblHomeAddr').textContent=t.rHomeAddr;
  $('afLblRelContact').textContent=t.rRelContact;
  $('afLblFoundFrom').textContent=t.rFoundFrom;
  $('afLblPhoto').textContent=t.rPhotoDoc;
  $('afLblStatus').textContent=t.rStatusLabel;
  $('afStRescue').textContent=t.rStatusRescue;
  $('afStFine').textContent=t.rStatusFine;
  $('afStDeceased').textContent=t.rStatusDeceased;
  $('afSubmit').textContent=t.mSend;

  document.querySelectorAll('.tab').forEach(b=>{
    if(b.dataset.t==='kailash'){
      b.textContent=t.kailashTab;
      b.setAttribute('aria-selected',String(b.dataset.t===tab));
      return;
    }
    const n=rows.filter(r=>r.status===b.dataset.t).length;
    b.innerHTML=esc(t[b.dataset.t])+`<b>${n}</b>`;
    b.setAttribute('aria-selected',String(b.dataset.t===tab));
  });

  document.querySelectorAll('#langs .pin').forEach(b=>{
    b.setAttribute('aria-pressed',String(b.dataset.lg===lang));
  });

  /* the Kailash tab has its own layout — search/location, the found
     strip, and the count/export meta bar don't apply to it */
  const onKailash=tab==='kailash';
  document.querySelector('.controls').hidden=onKailash;
  document.querySelector('.meta').hidden=onKailash;
  if(onKailash)$('strip').hidden=true;

  /* location list, built from whatever the current tab actually contains */
  const pool=rows.filter(r=>r.status===tab);
  const opts=PLACES.map(p=>[p,pool.filter(r=>inPlace(r,p)).length])
                   .filter(([,n])=>n>0).sort((a,b)=>b[1]-a[1]);
  const intlN=pool.filter(r=>isInternational(r.place)).length;
  $('loc').innerHTML=`<option value="">${esc(t.allLoc)}</option>`+
    (intlN>0?`<option value="INTL">${esc(t.intlTourists)} (${intlN})</option>`:'')+
    opts.map(([p,n])=>`<option value="${p.id}">${esc(p.label)} (${n})</option>`).join('');
  if(!(loc==='INTL'&&intlN>0)&&!opts.some(([p])=>p.id===loc))loc='';
  $('loc').value=loc;

  /* strip: where the found people are from */
  if(!onKailash){
    const g={};
    rows.filter(r=>r.status==='found'&&r._g).forEach(r=>{g[r._g]=(g[r._g]||0)+1});
    const pins=Object.entries(g).sort((a,b)=>b[1]-a[1]);
    $('strip').hidden=!pins.length;
    $('strip-lb').textContent=t.strip;
    $('pins').innerHTML=pins.map(([k,n])=>
      `<button class="pin" type="button" data-a="${esc(k)}" aria-pressed="${addr===k}">${esc(k)}<b>${n}</b></button>`).join('');
  }
}

/* ============================================================
   6c. CSV export
   ============================================================ */
function csvCell(v){
  const s=String(v??'');
  return /[",\r\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s;
}
function toCSV(list){
  const t=T[lang];
  const header=[t.nm,t.ag,t.pl,t.wh,t.ph2,t.dReportedBy,t.dt];
  const body=list.map(r=>[r.name,r.age||'',r.place||'',r.when||'',r.phone||'',r.reporter||'',r.note||'']);
  return [header,...body].map(row=>row.map(csvCell).join(',')).join('\r\n');
}
function downloadCSV(filename,csv){
  const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=filename;
  document.body.appendChild(a);a.click();a.remove();
  URL.revokeObjectURL(url);
}

/* ============================================================
   7. Wiring
   ============================================================ */
let timer;
$('q').addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>{shown=60;render()},110)});
$('clear').onclick=()=>{$('q').value='';shown=60;$('q').focus();render()};
$('refresh').onclick=load;
$('exportMissing').onclick=()=>downloadCSV('missing.csv',toCSV(rows.filter(r=>r.status==='missing')));
$('exportFound').onclick=()=>downloadCSV('found.csv',toCSV(rows.filter(r=>r.status==='found')));
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
  const kb=e.target.closest('.kailash-report');
  if(kb){reportKailashStatus(kb.dataset.sn,kb.dataset.name);return}
  const b=e.target.closest('.dt-view'); if(!b)return;
  openDetailModal(b.dataset.id);
});
$('detailModalClose').onclick=closeDetailModal;
$('detailModalOverlay').addEventListener('click',e=>{if(e.target===$('detailModalOverlay'))closeDetailModal()});

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
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  if($('modalOverlay').classList.contains('open'))closeModal();
  if($('detailModalOverlay').classList.contains('open'))closeDetailModal();
  if($('reportMissingOverlay').classList.contains('open'))closeReportMissing();
  if($('addFoundOverlay').classList.contains('open'))closeAddFound();
});
$('safeForm').addEventListener('submit',e=>{
  e.preventDefault();
  const t=T[lang];
  const name=$('fName').value.trim(), num=$('fNumber').value.trim(), locv=$('fLocation').value.trim();
  const head=(modalType==='safe'?'✅ ':'🆘 ')+(modalType==='safe'?t.mSafeTitle:t.mRescueTitle);
  const msg=`${head}\n${t.mName}: ${name}\n${t.mNumber}: ${num}\n${t.mLocation}: ${locv}`;
  window.open('https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(msg),'_blank','noopener');
  closeModal();
});

/* Photos can't ride along a wa.me link (it's just a URL) — where the
   Web Share API supports file sharing we hand WhatsApp the photo
   directly; everywhere else we fall back to text-only and the modal's
   note tells people to attach the photo themselves. */
async function shareViaWhatsApp(msg,file){
  if(file&&navigator.canShare&&navigator.canShare({files:[file]})){
    try{await navigator.share({text:msg,files:[file]});return}catch(e){}
  }
  window.open('https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(msg),'_blank','noopener');
}

function openReportMissing(){
  $('rmForm').reset();
  chrome();
  $('reportMissingOverlay').classList.add('open');
  $('rmName').focus();
}
function closeReportMissing(){
  $('reportMissingOverlay').classList.remove('open');
}
$('btnReportMissing').onclick=openReportMissing;
$('rmClose').onclick=closeReportMissing;
$('reportMissingOverlay').addEventListener('click',e=>{if(e.target===$('reportMissingOverlay'))closeReportMissing()});
$('rmForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const t=T[lang];
  const name=$('rmName').value.trim(),phone=$('rmPhone').value.trim(),
    addr=$('rmHomeAddr').value.trim(),locv=$('rmLastLoc').value.trim();
  const lines=[`🔍 ${t.rTitleMissing}`,`${t.mName}: ${name}`,`${t.mNumber}: ${phone}`];
  if(addr)lines.push(`${t.rHomeAddr}: ${addr}`);
  if(locv)lines.push(`${t.rLastLoc}: ${locv}`);
  await shareViaWhatsApp(lines.join('\n'),$('rmPhoto').files[0]);
  closeReportMissing();
});

function openAddFound(){
  $('afForm').reset();
  chrome();
  $('addFoundOverlay').classList.add('open');
  $('afName').focus();
}
function closeAddFound(){
  $('addFoundOverlay').classList.remove('open');
}
$('btnAddFound').onclick=openAddFound;
$('afClose').onclick=closeAddFound;
$('addFoundOverlay').addEventListener('click',e=>{if(e.target===$('addFoundOverlay'))closeAddFound()});
$('afForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const t=T[lang];
  const name=$('afName').value.trim(),phone=$('afPhone').value.trim(),
    addr=$('afHomeAddr').value.trim(),rel=$('afRelContact').value.trim(),from=$('afFoundFrom').value.trim();
  const statusVal=($('afForm').querySelector('input[name="afStatus"]:checked')||{}).value;
  const statusLabel=statusVal==='rescue'?t.rStatusRescue:statusVal==='deceased'?t.rStatusDeceased:t.rStatusFine;
  const lines=[`📍 ${t.rTitleFound}`,`${t.mName}: ${name}`];
  if(phone)lines.push(`${t.mNumber}: ${phone}`);
  if(addr)lines.push(`${t.rHomeAddr}: ${addr}`);
  if(rel)lines.push(`${t.rRelContact}: ${rel}`);
  if(from)lines.push(`${t.rFoundFrom}: ${from}`);
  lines.push(`${t.rStatusLabel}: ${statusLabel}`);
  await shareViaWhatsApp(lines.join('\n'),$('afPhoto').files[0]);
  closeAddFound();
});

(function(){const b=(navigator.language||'ne').slice(0,2); if(T[b])lang=b})();
chrome();
load();
