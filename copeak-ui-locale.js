/* Copeak seven-language UI harmonizer. Display language only.
   Does not touch study text, language of speech recognition, scoring or IndexedDB. */
(function(){
'use strict';
const languages=['ja','en','zh-TW','vi','id','tl','hi'];
const strings={
  readerTitle:['音読教材をよむ','Read Aloud','朗讀教材','Đọc bài học','Baca Materi','Magbasa ng Aralin','पाठ पढ़ें'],
  readerSub:['教材を選んで音読・シャドーイングを始めよう','Choose a lesson and start reading or shadowing','選擇教材，開始朗讀或跟讀','Chọn bài học để đọc và luyện shadowing','Pilih materi untuk membaca dan shadowing','Pumili ng aralin para magbasa at mag-shadowing','पाठ चुनें और पढ़ना या शैडोइंग शुरू करें'],
  readerLibrary:['📚 教材ライブラリ','📚 Lesson Library','📚 教材庫','📚 Thư viện bài học','📚 Perpustakaan Materi','📚 Aklatan ng Aralin','📚 पाठ लाइब्रेरी'],
  readerCreate:['＋ 教材を作る','＋ Create Lesson','＋ 製作教材','＋ Tạo bài học','＋ Buat Materi','＋ Gumawa ng Aralin','＋ पाठ बनाएँ'],
  questSub:['連続ミッション','Sequential missions','連續任務','Nhiệm vụ liên tiếp','Misi berurutan','Sunod-sunod na misyon','क्रमिक मिशन'],
  learningSupport:['学習サポート・イベント','Learning Support & Events','學習支援與活動','Hỗ trợ học tập & Sự kiện','Bantuan Belajar & Acara','Suporta at mga Event','सीखने में सहायता और कार्यक्रम'],
  warning:['⚠️ データ保存のお願い','⚠️ Data Saving Notice','⚠️ 資料儲存提醒','⚠️ Lưu ý lưu dữ liệu','⚠️ Penting: Simpan Data','⚠️ Paalala sa Pag-save','⚠️ डेटा सहेजने की सूचना'],
  creatorTitle:['音読教材を作る','Create a Lesson','製作朗讀教材','Tạo bài học','Buat Materi','Gumawa ng Aralin','पाठ बनाएँ'],
  creatorSub:['既存の教材作成・編集機能をそのまま利用できます','Create and edit lessons using the existing tools','使用原有功能製作、編輯教材','Tạo và chỉnh sửa bài học bằng các công cụ hiện có','Buat dan edit materi dengan alat yang tersedia','Gamitin ang mga tool sa paggawa at pag-edit','मौजूदा टूल से पाठ बनाएँ और संपादित करें'],
  creatorSection:['✎ 教材を作成・編集','✎ Create / Edit Material','✎ 製作／編輯教材','✎ Tạo / Sửa bài học','✎ Buat / Edit Materi','✎ Gumawa / Mag-edit','✎ पाठ बनाएँ / संपादित करें'],
  savedLesson:['保存済み教材を開く','Open Saved Lessons','開啟已儲存教材','Mở bài học đã lưu','Buka Materi Tersimpan','Buksan ang Naka-save','सहेजे पाठ खोलें'],
  teacherSection:['👨‍🏫 先生向け設定・教材作成','👨‍🏫 Teacher Tools & Lesson Creation','👨‍🏫 教師設定與教材製作','👨‍🏫 Công cụ dành cho giáo viên','👨‍🏫 Pengaturan & Materi Guru','👨‍🏫 Mga Tool para sa Guro','👨‍🏫 शिक्षक टूल और पाठ'],
  teacherOpen:['教員用メニューを開く','Open Teacher Menu','開啟教師選單','Mở menu giáo viên','Buka Menu Guru','Buksan ang Menu ng Guro','शिक्षक मेनू खोलें'],
  teacherDesc:['成績回収設定とCopeak Questの作成機能を引き継いでいます。','Score collection settings and Copeak Quest creation are available here.','可在此設定成績收集並製作 Copeak Quest。','Cài đặt thu thập kết quả và tạo Copeak Quest ở đây.','Pengaturan pengumpulan nilai dan pembuatan Copeak Quest tersedia di sini.','Nandito ang pagkolekta ng marka at paggawa ng Copeak Quest.','अंक संग्रह सेटिंग और Copeak Quest बनाना यहाँ उपलब्ध है।'],
  home:['ホーム','Home','首頁','Trang chủ','Beranda','Home','होम'],
  lessonNav:['教材をよむ','Read','朗讀教材','Đọc bài','Baca','Magbasa','पढ़ें'],
  createNav:['教材を作る','Create','製作教材','Tạo bài','Buat','Gumawa','बनाएँ'],
  menu:['メニュー','Menu','選單','Menu','Menu','Menu','मेनू'],
  recentTitle:['◷ 最近の課題','◷ Recent Lessons','◷ 最近的教材','◷ Bài học gần đây','◷ Materi Terbaru','◷ Mga Kamakailang Aralin','◷ हाल के पाठ'],
  recentDesc:['この端末の教材・音読履歴','Lessons and practice on this device','此裝置上的教材與朗讀紀錄','Bài học và lịch sử luyện đọc trên thiết bị này','Materi dan latihan di perangkat ini','Mga aralin at pagsasanay sa device na ito','इस डिवाइस पर पाठ और अभ्यास का इतिहास'],
  progressTitle:['▥ 学習の記録','▥ Learning Progress','▥ 學習記錄','▥ Tiến độ học tập','▥ Kemajuan Belajar','▥ Pag-unlad sa Pag-aaral','▥ सीखने की प्रगति'],
  streak:['連続学習','Learning Streak','連續學習','Chuỗi ngày học','Hari Berturut-turut','Magkakasunod na Araw','लगातार अभ्यास'],
  accuracy:['平均 Accuracy','Average Accuracy','平均準確率','Độ chính xác TB','Rata-rata Akurasi','Average Accuracy','औसत सटीकता'],
  last30:['（直近30回）','(last 30)','（最近30次）','(30 lần gần nhất)','(30 terbaru)','(huling 30)','(पिछले 30)'],
  total:['累計音読','Total Readings','累計朗讀','Tổng lượt đọc','Total Latihan','Kabuuang Pagbasa','कुल अभ्यास'],
  days:['日','days','天','ngày','hari','araw','दिन'],
  times:['回','times','次','lần','kali','beses','बार'],
  notStarted:['未学習','Not started','未開始','Chưa học','Belum dimulai','Hindi pa nasimulan','शुरू नहीं किया'],
  noLesson:['教材はまだありません','No lessons yet','尚無教材','Chưa có bài học','Belum ada materi','Wala pang aralin','अभी कोई पाठ नहीं'],
  loadLesson:['教材データを読み込んでいます','Loading lessons…','正在載入教材…','Đang tải bài học…','Memuat materi…','Naglo-load ng aralin…','पाठ लोड हो रहे हैं…'],
  checkLesson:['教材を確認しています…','Checking lessons…','正在確認教材…','Đang kiểm tra bài học…','Memeriksa materi…','Sinusuri ang aralin…','पाठ जाँचे जा रहे हैं…'],
  loadError:['履歴を読み込めませんでした','Could not load history','無法載入紀錄','Không tải được lịch sử','Riwayat tidak dapat dimuat','Hindi ma-load ang kasaysayan','इतिहास लोड नहीं हो सका'],
  untitled:['無題の教材','Untitled Lesson','未命名教材','Bài học không tên','Materi Tanpa Judul','Araling Walang Pamagat','बिना शीर्षक पाठ'],
  homeBack:['ホームに戻る','Back to Home','返回首頁','Về trang chủ','Kembali ke Beranda','Bumalik sa Home','होम पर वापस जाएँ'],
  lastSeven:['過去7日間','Last 7 days','過去7天','7 ngày qua','7 hari terakhir','Huling 7 araw','पिछले 7 दिन']
};
function getLanguage(){
  let code=document.getElementById('appLangSelector')?.value;
  if(!languages.includes(code)){try{code=localStorage.getItem('copeak_lang');}catch(_){}}
  return languages.includes(code)?code:'ja';
}
function t(key,lang){
  const tuple=strings[key];return tuple?tuple[Math.max(0,languages.indexOf(lang||getLanguage()))]:key;
}
const textIfChanged=(node,value)=>{
  if(node && typeof value==='string' && node.textContent!==value)node.textContent=value;
};
function selectorText(root,query,value){textIfChanged(root?.querySelector(query),value);}
function translatePage(page,root,lang){
  const reader=page==='read';
  const nav=root.querySelectorAll('.cp-page-bottom [data-page-go]');
  nav.forEach(el=>{
    const name=el.dataset.pageGo;
    const map={home:'⌂ '+t('home',lang),read:'📖 '+t('lessonNav',lang),create:'✎ '+t('createNav',lang),menu:'☷ '+t('menu',lang)};
    textIfChanged(el,map[name]);
  });
  const back=root.querySelector('.cp-page-home');if(back)back.setAttribute('aria-label',t('homeBack',lang));
  selectorText(root,'.cp-page-head h2',t(reader?'readerTitle':'creatorTitle',lang));
  selectorText(root,'.cp-page-head .cp-page-subtitle',t(reader?'readerSub':'creatorSub',lang));
  const headings=root.querySelectorAll('.cp-panel-title h3');
  if(reader){
    textIfChanged(headings[0],t('readerLibrary',lang));
    textIfChanged(root.querySelector('#cpReaderLibrary [data-page-go="create"]'),t('readerCreate',lang));
    textIfChanged(root.querySelector('#cpReadQuest')?.parentElement?.querySelector('.cp-panel-title small'),t('questSub',lang));
    textIfChanged(headings[2],t('learningSupport',lang));
    textIfChanged(root.querySelector('[data-page-go="warning"]'),t('warning',lang));
  }else{
    textIfChanged(headings[0],t('creatorSection',lang));
    textIfChanged(root.querySelector('#cpCreateForm')?.previousElementSibling?.querySelector('[data-page-go="read"]'),t('savedLesson',lang));
    textIfChanged(headings[1],t('teacherSection',lang));
    textIfChanged(root.querySelector('[data-page-go="teacher"]'),t('teacherOpen',lang));
    textIfChanged(root.querySelector('#cpCreateTeacher')?.previousElementSibling,t('teacherDesc',lang));
  }
}
const storedOriginal=new WeakMap();
function dynamicLocalize(lang){
  const list=document.getElementById('cpRecentList');
  if(list){
    const states=[...strings.noLesson,...strings.loadLesson,...strings.checkLesson,...strings.loadError];
    if(!list.querySelector('.cp-recent-row') && states.includes(list.textContent.trim())){
      const key=['noLesson','loadLesson','checkLesson','loadError'].find(k=>strings[k].includes(list.textContent.trim()));
      if(key)textIfChanged(list,t(key,lang));
    }
    list.querySelectorAll('.cp-recent-row small').forEach(el=>{
      const original=storedOriginal.get(el)||el.textContent.trim();
      if(!storedOriginal.has(el))storedOriginal.set(el,original);
      const n=original.match(/^(\d+)(?:回音読| times|次朗讀| lần đọc| kali baca| beses na pagbasa| बार पढ़ा)$/);
      if(n){
        const units={ja:'回音読',en:' times', 'zh-TW':'次朗讀',vi:' lần đọc',id:' kali baca',tl:' beses na pagbasa',hi:' बार पढ़ा'};
        textIfChanged(el,n[1]+units[lang]);
      }else if(strings.notStarted.some(value=>value===original))textIfChanged(el,t('notStarted',lang));
    });
  }
  const num=document.getElementById('cpProgressNum');
  if(num){
    const count=num.textContent.match(/^(\d+)\s*\/\s*7/);
    if(count)textIfChanged(num,lang==='ja'?count[1]+'/7日':count[1]+'/7 '+t('days',lang));
  }
  const total=document.getElementById('cpLearningTotal');
  if(total){
    const n=total.textContent.match(/^(\d+)/);
    if(n)textIfChanged(total,lang==='ja'?n[1]+'回':n[1]+' '+t('times',lang));
  }
  const streak=document.getElementById('cpStreakText');
  if(streak){
    const n=streak.textContent.match(/^(\d+)/);
    if(n)textIfChanged(streak,lang==='ja'?n[1]+'日':n[1]+' '+t('days',lang));
  }
}
function refresh(){
  const lang=getLanguage();
  document.documentElement.lang=lang;
  const reader=document.getElementById('cpReaderPage');
  const creator=document.getElementById('cpCreatorPage');
  if(reader)translatePage('read',reader,lang);
  if(creator)translatePage('create',creator,lang);
  const extras=document.querySelectorAll('#copeakHomeHub .cp-home-extras .cp-extra');
  if(extras[0]){
    selectorText(extras[0],'h3',t('recentTitle',lang));
    selectorText(extras[0],'p',t('recentDesc',lang));
  }
  if(extras[1]){
    selectorText(extras[1],'h3',t('progressTitle',lang));
    selectorText(extras[1],'.cp-record-stat:nth-child(1) .cp-record-stat-label',t('streak',lang));
    const accuracy=extras[1].querySelector('.cp-record-stat:nth-child(2) .cp-record-stat-label');
    if(accuracy){
      // Preserve <small> for responsive layout.
      const small=accuracy.querySelector('small');
      if(accuracy.firstChild?.nodeType===3 && accuracy.firstChild.textContent!==t('accuracy',lang)+' ')
        accuracy.firstChild.textContent=t('accuracy',lang)+' ';
      if(small)textIfChanged(small,t('last30',lang));
    }
    selectorText(extras[1],'.cp-record-stat-total .cp-record-stat-label',t('total',lang));
  }
  dynamicLocalize(lang);
}
function init(){
  // The legacy i18n dictionary owns the old Copeak learning components.
  // This layer only fills the newer Copeak pages without altering course text.
  window.CopeakUI={getLanguage,t,refresh,languages:languages.slice()};
  const source=document.getElementById('appLangSelector');
  source?.addEventListener('change',()=>queueMicrotask(refresh));
  window.addEventListener('copeak:languagechange',()=>queueMicrotask(refresh));
  // A queued DOMContentLoaded run follows creation of the dedicated pages.
  setTimeout(refresh,20);
  setTimeout(refresh,400);
  const list=document.getElementById('cpRecentList');
  if(list){
    let pending=false;
    new MutationObserver(()=>{
      if(pending)return;
      pending=true;
      queueMicrotask(()=>{pending=false;dynamicLocalize(getLanguage());});
    }).observe(list,{childList:true,subtree:true});
  }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
else init();
})();