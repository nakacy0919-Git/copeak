/* Copeak learning UI language consistency, 7 existing display languages.
   Presentation-only: never edit lesson text, user data, speech or scoring. */
(function(){
  'use strict';
  const locales=['ja','en','zh-TW','vi','id','tl','hi',...(window.CopeakExtraLocales?.newCodes||[])];
  // All seven slots are required. Course names, lesson text and scoring remain untouched.
  const text={
    library:['教材','Library','教材','Thư viện','Perpustakaan','Aklatan','पाठ'],
    together:['共同モード','Together Mode','共同模式','Chế độ cùng học','Mode Bersama','Sabayang Mode','साथ में अभ्यास'],
    tap:['単語をタップすると発音が聞けます','Tap a word to hear its pronunciation','點選單字即可聆聽發音','Chạm vào từ để nghe phát âm','Ketuk kata untuk mendengar pelafalannya','I-tap ang salita para marinig ang bigkas','उच्चारण सुनने के लिए शब्द पर टैप करें'],
    tapShort:['単語タップで発音','タップで発音','點字聽發音','Chạm để nghe','Ketuk untuk dengar','I-tap para marinig','शब्द टैप करें'],
    fullscreen:['フルスクリーンで予行練習','Full-screen Practice','全螢幕練習','Luyện tập toàn màn hình','Latihan layar penuh','Full-screen na Pagsasanay','पूर्ण स्क्रीन अभ्यास'],
    fullscreenShort:['予行練習','Practice','練習','Luyện tập','Latihan','Magsanay','अभ्यास'],
    show:['訳を表示','Show Translation','顯示翻譯','Hiện bản dịch','Tampilkan Terjemahan','Ipakita ang Salin','अनुवाद दिखाएँ'],
    hide:['訳を隠す','Hide Translation','隱藏翻譯','Ẩn bản dịch','Sembunyikan Terjemahan','Itago ang Salin','अनुवाद छिपाएँ'],
    guideTip:['各モードの学習ガイドを見る','View the learning mode guide','查看各模式的學習指南','Xem hướng dẫn các chế độ học','Lihat panduan setiap mode','Tingnan ang gabay ng bawat mode','अभ्यास मोड की गाइड देखें'],
    graphTip:['学習推移グラフを見る','View learning progress chart','查看學習進度圖表','Xem biểu đồ tiến độ học','Lihat grafik kemajuan belajar','Tingnan ang graph ng pag-unlad','अभ्यास प्रगति चार्ट देखें'],
    recordTip:['学習記録を見る','View learning records','查看學習記錄','Xem lịch sử học','Lihat riwayat belajar','Tingnan ang tala ng pag-aaral','अभ्यास रिकॉर्ड देखें'],
    aiTip:['AI音声を再生 / 停止','Play / stop AI audio','播放／停止 AI 語音','Phát / dừng giọng AI','Putar / hentikan suara AI','I-play / ihinto ang AI audio','AI आवाज़ चलाएँ / रोकें'],
    details:['詳細を見る','View Details','查看詳情','Xem chi tiết','Lihat detail','Tingnan ang detalye','विवरण देखें'],
    closeDetails:['閉じる','Close','關閉','Đóng','Tutup','Isara','बंद करें'],
    lessDetails:['詳細を閉じる','Hide Details','收合詳情','Ẩn chi tiết','Tutup detail','Itago ang detalye','विवरण छिपाएँ'],
    moveMaterial:['教材を移動','Move Lesson','移動教材','Chuyển bài học','Pindahkan Materi','Ilipat ang Aralin','पाठ स्थानांतरित करें'],
    chooseFolder:['移動先のフォルダを選択してください。','Select the destination folder.','請選擇目的地資料夾。','Chọn thư mục đích.','Pilih folder tujuan.','Pumili ng folder na paglilipatan.','गंतव्य फ़ोल्डर चुनें।'],
    cancel:['キャンセル','Cancel','取消','Hủy','Batal','Kanselahin','रद्द करें'],
    move:['移動する','Move','移動','Di chuyển','Pindahkan','Ilipat','स्थानांतरित करें'],
    waitHost:['メンバーの接続を待っています','Waiting for other players','等待其他成員連線','Đang chờ thành viên kết nối','Menunggu anggota terhubung','Naghihintay sa mga kasama','सदस्यों के जुड़ने की प्रतीक्षा'],
    leave:['退出する','Leave','離開','Thoát','Keluar','Umalis','बाहर जाएँ'],
    createGroup:['新しくグループを作る','Create a New Group','建立新群組','Tạo nhóm mới','Buat Grup Baru','Gumawa ng Bagong Grupo','नया समूह बनाएँ'],
    createGroupDesc:['自分がリーダーとなり、一緒にシンクロ・音読するメンバーを募集します。','Host a group and invite others to read together.','擔任主持人，邀請其他成員一起同步朗讀。','Làm chủ nhóm và mời bạn cùng đọc đồng bộ.','Jadi host dan undang teman membaca bersama.','Maging host at mag-imbita ng kasabay na magbasa.','समूह बनाकर अन्य सदस्यों को साथ पढ़ने बुलाएँ।'],
    makeRoom:['ルームを作成してIDを発行','Create Room & Get ID','建立房間並取得 ID','Tạo phòng và lấy ID','Buat Ruang & Dapatkan ID','Gumawa ng Room at Kumuha ng ID','रूम बनाएँ और ID पाएँ'],
    roomID:['グループのルームID','Group Room ID','群組房間 ID','ID phòng nhóm','ID Ruang Grup','ID ng Room','समूह रूम ID'],
    roomIDHelp:['この4桁の数字を一緒に遊ぶ仲間に伝えてください','Share this 4-digit number with your partners.','將此四位數字告訴組員。','Chia sẻ mã 4 số này với bạn cùng nhóm.','Bagikan 4 angka ini kepada teman.','Ibigay ang 4 na numerong ito sa kasama.','यह 4 अंकों का नंबर साथियों को बताएँ।'],
    joinGroup:['既存のグループに入る','Join an Existing Group','加入現有群組','Tham gia nhóm hiện có','Gabung Grup','Sumali sa Grupo','मौजूदा समूह से जुड़ें'],
    joinDesc:['友達（ホスト）から教えてもらった4桁のルームIDを入力してください。','Enter the 4-digit Room ID from the host.','輸入主持人提供的四位房間 ID。','Nhập ID phòng gồm 4 số từ chủ nhóm.','Masukkan ID 4 digit dari host.','Ilagay ang 4-digit ID mula sa host.','होस्ट से मिली 4 अंकों की रूम ID डालें।'],
    roomPlaceholder:['4桁のID','4-digit ID','四位數 ID','ID 4 chữ số','ID 4 digit','4-digit ID','4 अंकों की ID'],
    connect:['接続する','Connect','連線','Kết nối','Hubungkan','Kumonekta','जुड़ें'],
    connected:['Connected Players (最大3人)','Connected Players (max 3)','已連線成員（最多3人）','Người đã kết nối (tối đa 3)','Peserta Terhubung (maks. 3)','Mga Kasali (hanggang 3)','जुड़े खिलाड़ी (अधिकतम 3)'],
    disconnected:['未接続','Not connected','未連線','Chưa kết nối','Belum terhubung','Hindi konektado','जुड़ा नहीं'],
    checkingLesson:['教材を確認中...','Checking lesson…','正在確認教材…','Đang kiểm tra bài học…','Memeriksa materi…','Sinusuri ang aralin…','पाठ जाँचा जा रहा है…'],
    micAfterConnect:['接続後にマイク確認','Check mic after connecting','連線後檢查麥克風','Kiểm tra mic sau khi kết nối','Periksa mic setelah terhubung','Suriin ang mic pagkatapos kumonekta','जुड़ने के बाद माइक्रोफ़ोन जाँचें'],
    syncStart:['Synchronizing Reading Start...','Synchronizing reading start…','同步朗讀即將開始…','Đang đồng bộ bắt đầu đọc…','Menyinkronkan awal membaca…','Sinisimulan ang sabayang pagbasa…','पढ़ना शुरू करने का समन्वय…'],
    player2:['Player 2 を待機中...','Waiting for Player 2…','正在等待玩家 2…','Đang chờ người chơi 2…','Menunggu Pemain 2…','Naghihintay sa Player 2…','खिलाड़ी 2 की प्रतीक्षा…'],
    player3:['Player 3 を待機中...','Waiting for Player 3…','正在等待玩家 3…','Đang chờ người chơi 3…','Menunggu Pemain 3…','Naghihintay sa Player 3…','खिलाड़ी 3 की प्रतीक्षा…'],
    waiting:['WAITING','WAITING','等待中','ĐANG CHỜ','MENUNGGU','NAGHIHINTAY','प्रतीक्षा'],
    expandedTranslation:['🌐 訳を表示','🌐 Show Translation','🌐 顯示翻譯','🌐 Hiện bản dịch','🌐 Tampilkan Terjemahan','🌐 Ipakita ang Salin','🌐 अनुवाद दिखाएँ'],
    collapsedTranslation:['🌐 訳を隠す','🌐 Hide Translation','🌐 隱藏翻譯','🌐 Ẩn bản dịch','🌐 Sembunyikan Terjemahan','🌐 Itago ang Salin','🌐 अनुवाद छिपाएँ'],
    imageOn:['画像 ON','Image ON','圖片開啟','Bật ảnh','Gambar ON','Larawan ON','चित्र चालू'],
    imageOff:['画像 OFF','Image OFF','圖片關閉','Tắt ảnh','Gambar OFF','Larawan OFF','चित्र बंद'],
    recordReading:['START READING','START READING','開始朗讀','BẮT ĐẦU ĐỌC','MULAI MEMBACA','SIMULAN ANG PAGBASA','पढ़ना शुरू करें'],
    retryReading:['RETRY READING','RETRY READING','重新朗讀','ĐỌC LẠI','ULANGI MEMBACA','ULITIN ANG PAGBASA','फिर पढ़ें'],
    recordPaced:['START PACED','START PACED','開始配速','BẮT ĐẦU PACED','MULAI PACED','SIMULAN ANG PACED','पेस्ड अभ्यास शुरू करें'],
    retryPaced:['RETRY PACED','RETRY PACED','重新配速','THỬ LẠI PACED','ULANGI PACED','ULITIN ANG PACED','पेस्ड फिर करें'],
    recordVanish:['START VANISH','START VANISH','開始消字','BẮT ĐẦU VANISH','MULAI VANISH','SIMULAN ANG VANISH','वैनिश शुरू करें'],
    retryVanish:['RETRY VANISH','RETRY VANISH','重新消字','THỬ LẠI VANISH','ULANGI VANISH','ULITIN ANG VANISH','वैनिश फिर करें'],
    recordShadow:['START SHADOWING','START SHADOWING','開始跟讀','BẮT ĐẦU SHADOWING','MULAI SHADOWING','SIMULAN ANG SHADOWING','शैडोइंग शुरू करें'],
    retryShadow:['RETRY SHADOWING','RETRY SHADOWING','重新跟讀','THỬ LẠI SHADOWING','ULANGI SHADOWING','ULITIN ANG SHADOWING','शैडोइंग फिर करें'],
    finish:['FINISH (終了して結果を見る)','FINISH (View Results)','完成（查看結果）','KẾT THÚC (Xem kết quả)','SELESAI (Lihat Hasil)','TAPOS (Tingnan ang Resulta)','समाप्त (परिणाम देखें)'],
    togetherQuit:['共同モードを終了','Exit Together Mode','結束共同模式','Thoát chế độ nhóm','Keluar Mode Bersama','Umalis sa Sabayang Mode','साथ में अभ्यास समाप्त करें'],
    waitPlaylist:['⚠️ まずはプレイリストから読む教材を選択してください','⚠️ Select a lesson from the playlist first.','⚠️ 請先從播放清單選擇教材。','⚠️ Hãy chọn bài học từ danh sách trước.','⚠️ Pilih materi dari playlist terlebih dahulu.','⚠️ Pumili muna ng aralin sa playlist.','⚠️ पहले प्लेलिस्ट से पाठ चुनें।']
  };
  const reverses=new Map();
  for(const [key,values] of Object.entries(text)){
    values.forEach(value=>reverses.set(value,key));
  }
  for(const c of (window.CopeakExtraLocales?.newCodes||[]))for(const key of Object.keys(text)){const v=window.CopeakExtraLocales.sectionText("learning",c,key);if(v)reverses.set(v,key);}
  const lang=()=>{
    const selection=document.getElementById('appLangSelector')?.value;
    let code=selection;
    if(!locales.includes(code))try{code=localStorage.getItem('copeak_lang')}catch(_){}
    return locales.includes(code)?code:'ja';
  };
  const value=(key)=>{const selected=lang(),idx=locales.indexOf(selected);return (idx>=0&&idx<7?text[key]?.[idx]:window.CopeakExtraLocales?.sectionText('learning',selected,key))||text[key]?.[1]||'';};
  const put=(el,v)=>{
    if(el && v && el.textContent!==v) el.textContent=v;
  };
  const labels=[
    ['#mobileLibraryBtn','library','📚 '],
    ['#learningHeader button[onclick="openMultiplaySetup()"]','together','👥 '],
    ['#tapPronunciationHint span.hidden.sm\\:inline','tap',''],
    ['#tapPronunciationHint span.sm\\:hidden','tapShort',''],
    ['#targetTextWrapper button[onclick="openFullscreenPreview()"] span.hidden.sm\\:inline','fullscreen',''],
    ['#targetTextWrapper button[onclick="openFullscreenPreview()"] span.sm\\:hidden','fullscreenShort',''],
    ['#feedbackToggleBtn','details','＋ '],
    ['#youtubeReplayBtn','replay','↺ '],
  ];
  // Add the few English-only labels here, without changing the course content.
  text.replay=['Replay','Replay','重播','Phát lại','Putar Ulang','Ulitin','फिर चलाएँ'];
  text.loop=['Loop','Loop','循環','Lặp','Ulangi','Ulit-ulit','दोहराएँ'];
  for(const key of ['replay','loop'])text[key].forEach(v=>reverses.set(v,key));
  const tooltips=[
    ['#learningTabs button[onclick="openModeGuide()"]','guideTip','title'],
    ['#scoreSummaryRow button[onclick="openChartModal()"]','graphTip','title'],
    ['#targetTextWrapper button[onclick="openChartModal()"]','recordTip','title'],
    ['#aiVoiceBtn','aiTip','title']
  ];
  // These static texts belong to UI only. Never traverse editable fields,
  // loaded lesson content, transcript, speaker names, or user-entered material.
  const roots=['#multiplayLobbyScreen','#moveLessonModal','#sync-countdown-overlay',
               '#fullscreenPreviewOverlay','#resultScoreBoard'];
  const reject=[
    '#learningTitle','#engContainer','#jpnContainer','#recognizedTextDisplay',
    '#fsTitleDisplay','#fsEngContainer','#fsJpnContainer','#together-lesson-title',
    '#my-room-id','#input-room-id','#player-list-container','.user-content',
    '#slaAdviceText','#reflectionsArea'
  ].join(',');
  function translateStatic(root){
    if(!root)return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())){
      const parent=node.parentElement;
      if(!parent||parent.closest('script,style,textarea,option')||parent.closest(reject))continue;
      const orig=(node.nodeValue||'').trim();
      const key=reverses.get(orig);
      if(!key)continue;
      const white=node.nodeValue.match(/^\s*/)[0],trailing=node.nodeValue.match(/\s*$/)[0];
      const updated=white+value(key)+trailing;
      if(node.nodeValue!==updated)node.nodeValue=updated;
    }
    const input=root.querySelector('#input-room-id');
    if(input&&input.getAttribute('placeholder')!==value('roomPlaceholder'))input.setAttribute('placeholder',value('roomPlaceholder'));
  }
  function translateModeLabels(){
    for(const [selector,key,prefix] of labels){
      const el=document.querySelector(selector);
      if(!el)continue;
      if(key==='details'){
        const expanded=document.getElementById('slaAdviceContainer')?.classList.contains('feedback-expanded');
        put(el,(expanded?'− ':'＋ ')+value(expanded?'closeDetails':'details'));
      }else{
        put(el,prefix+value(key));
      }
    }
    const loop=document.getElementById('youtubeLoopStatus');
    if(loop && loop.textContent.trim() && reverses.get(loop.textContent.trim())==='loop')put(loop,value('loop'));
    for(const id of ['p2-name','p3-name','p1-status','p2-status','p3-status']){
      const el=document.getElementById(id);
      const key=el && reverses.get(el.textContent.trim());
      if(key && ['player2','player3','waiting'].includes(key))put(el,value(key));
    }
    for(const [selector,key,attr] of tooltips){
      const el=document.querySelector(selector),v=value(key);
      if(el&&v&&el.getAttribute(attr)!==v)el.setAttribute(attr,v);
    }
    const btn=document.getElementById('toggleJpnBtn'),wrapper=document.getElementById('jpnWrapper');
    if(btn && wrapper){
      const shown=!wrapper.classList.contains('hidden');
      put(btn,shown?value('collapsedTranslation'):value('expandedTranslation'));
    }
    const mic=document.getElementById('micBtnText');
    if(mic){
      const key=reverses.get(mic.textContent.trim());
      if(key && ['recordReading','retryReading','recordPaced','retryPaced',
                 'recordVanish','retryVanish','recordShadow','retryShadow','finish'].includes(key)){
        put(mic,value(key));
      }
    }
    const toggle=document.getElementById('fsToggleImageBtn');
    if(toggle){
      const shown=!!window.isFsImageShowing;
      const next='🖼️ '+(shown?value('imageOff'):value('imageOn'));
      // Preserve the existing responsive span, not its source event handler.
      const span=toggle.querySelector('span');
      if(span)put(span,shown?value('imageOff'):value('imageOn'));
      else if(toggle.textContent.trim()!==next)toggle.textContent=next;
    }
    for(const selector of roots)translateStatic(document.querySelector(selector));
    const fs=document.querySelector('#fullscreenPreviewOverlay #fsTextPane > div:first-child');
    if(fs){
      const content=fs.textContent.trim();
      const key=reverses.get(content.replace(/^🔊\s*/, ''));
      if(key==='tap')put(fs,'🔊 '+value('tap'));
    }
  }
  let scheduled=false;
  function schedule(){
    if(scheduled)return;
    scheduled=true;
    queueMicrotask(()=>{scheduled=false;translateModeLabels()});
  }
  function initialize(){
    schedule();
    // Copeak's original i18n engine manages existing data-i18n entries.
    document.getElementById('appLangSelector')?.addEventListener('change',schedule);
    window.addEventListener('pageshow',schedule);
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)schedule()});
    // Observe only control surfaces, not the rapidly changing transcript
    // or the speech recognition engine, to avoid unnecessary work.
    for(const sel of ['#toggleJpnBtn','#jpnWrapper','#micBtnText','#feedbackToggleBtn',
                       '#multiplayLobbyScreen','#sync-countdown-overlay']){
      const node=document.querySelector(sel);
      if(node)new MutationObserver(schedule).observe(node,{
        childList:true,characterData:true,subtree:true,
        attributes:node.id==='jpnWrapper',attributeFilter:node.id==='jpnWrapper'?['class']:undefined
      });
    }
    // Fullscreen preview is generated dynamically as a direct body child.
    new MutationObserver(changes=>{
      for(const change of changes){
        for(const node of change.addedNodes){
          if(node.nodeType!==1)continue;
          if(node.id==='fullscreenPreviewOverlay'){
            // Fullscreen image control is rebuilt on every toggle.
            new MutationObserver(schedule).observe(node,{childList:true,subtree:true});
            schedule();
          }else if(node.id==='moveLessonModal'){schedule();}
        }
      }
    }).observe(document.body,{childList:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialize);
  else initialize();
})();