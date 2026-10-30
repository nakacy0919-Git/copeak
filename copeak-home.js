(function homeScript() {
  'use strict';
  const dict = {
    ja: {read:'音読教材をよむ',readSub:'保存した教材・課題を開く',create:'音読教材を作る',createSub:'自分だけの教材を作成',sound:'Sound Quest をする',soundSub:'発音チャレンジ',japeak:'Japeak をする',japeakSub:'日本語で練習',library:'教材ライブラリ',librarySub:'保存した教材やQuestを確認',libraryGo:'教材を開く',targets:'学習の目標',targetsSub:'目標スコアを確認しよう',targetsGo:'目標を見る',home:'ホーム',lessons:'教材',make:'作成',menu:'メニュー',more:'その他のメニュー',language:'表示言語',profile:'プロフィール',returnHome:'← ホームに戻る',trouble:'🎤 音声トラブルのヘルプ',world:'🌍 World Collection',target:'🎯 目標スコアと解説',challenge:'🏆 National Copeak Challenge',quest:'🗺️ Copeak Quest',teacher:'🔐 教員用メニュー',legacy:'⚙️ 従来のすべての機能',guide:'🧭 活用ガイド'},
    en: {read:'Read aloud',readSub:'Open lessons and assignments',create:'Create a lesson',createSub:'Make your own reading material',sound:'Play Sound Quest',soundSub:'Pronunciation challenge',japeak:'Practice Japeak',japeakSub:'Learn Japanese',library:'Lesson library',librarySub:'Saved lessons and quests',libraryGo:'Open library',targets:'Learning goals',targetsSub:'Check your target scores',targetsGo:'View goals',home:'Home',lessons:'Lessons',make:'Create',menu:'Menu',more:'More options',language:'Display language',profile:'Profile',returnHome:'← Back to home',trouble:'🎤 Microphone help',world:'🌍 World Collection',target:'🎯 Scores and guide',challenge:'🏆 National Copeak Challenge',quest:'🗺️ Copeak Quest',teacher:'🔐 Teacher menu',legacy:'⚙️ All existing features',guide:'🧭 Copeak guide'},
    'zh-TW': {read:'朗讀教材',readSub:'開啟教材與作業',create:'製作朗讀教材',createSub:'建立自己的教材',sound:'挑戰 Sound Quest',soundSub:'發音練習',japeak:'練習 Japeak',japeakSub:'學習日語',library:'教材庫',librarySub:'查看已儲存教材',libraryGo:'開啟教材',targets:'學習目標',targetsSub:'確認目標分數',targetsGo:'查看目標',home:'首頁',lessons:'教材',make:'製作',menu:'選單',more:'其他功能',language:'顯示語言',profile:'個人資料',returnHome:'← 返回首頁',trouble:'🎤 麥克風協助',world:'🌍 World Collection',target:'🎯 目標分數',challenge:'🏆 National Copeak Challenge',quest:'🗺️ Copeak Quest',teacher:'🔐 教師選單',legacy:'⚙️ 所有舊功能',guide:'🧭 使用指南'},
    vi: {read:'Đọc bài luyện tập',readSub:'Mở bài học và bài tập',create:'Tạo bài luyện đọc',createSub:'Tự tạo nội dung',sound:'Chơi Sound Quest',soundSub:'Luyện phát âm',japeak:'Học với Japeak',japeakSub:'Luyện tiếng Nhật',library:'Thư viện bài học',librarySub:'Bài học đã lưu',libraryGo:'Mở thư viện',targets:'Mục tiêu',targetsSub:'Kiểm tra điểm mục tiêu',targetsGo:'Xem mục tiêu',home:'Trang chủ',lessons:'Bài học',make:'Tạo bài',menu:'Menu',more:'Thêm tính năng',language:'Ngôn ngữ',profile:'Hồ sơ',returnHome:'← Về trang chủ',trouble:'🎤 Trợ giúp mic',world:'🌍 World Collection',target:'🎯 Mục tiêu',challenge:'🏆 National Copeak Challenge',quest:'🗺️ Copeak Quest',teacher:'🔐 Giáo viên',legacy:'⚙️ Tất cả tính năng',guide:'🧭 Hướng dẫn'},
    id: {read:'Baca materi',readSub:'Buka materi dan tugas',create:'Buat materi',createSub:'Buat latihan sendiri',sound:'Main Sound Quest',soundSub:'Latihan pengucapan',japeak:'Latihan Japeak',japeakSub:'Belajar bahasa Jepang',library:'Perpustakaan materi',librarySub:'Lihat materi tersimpan',libraryGo:'Buka materi',targets:'Target belajar',targetsSub:'Lihat target skor',targetsGo:'Lihat target',home:'Beranda',lessons:'Materi',make:'Buat',menu:'Menu',more:'Opsi lainnya',language:'Bahasa tampilan',profile:'Profil',returnHome:'← Kembali',trouble:'🎤 Bantuan mikrofon',world:'🌍 World Collection',target:'🎯 Target skor',challenge:'🏆 National Copeak Challenge',quest:'🗺️ Copeak Quest',teacher:'🔐 Menu guru',legacy:'⚙️ Semua fitur lama',guide:'🧭 Panduan'},
    tl: {read:'Magbasa ng aralin',readSub:'Buksan ang mga gawain',create:'Gumawa ng aralin',createSub:'Sariling materyal',sound:'Maglaro ng Sound Quest',soundSub:'Hamon sa bigkas',japeak:'Mag-Japeak',japeakSub:'Mag-aral ng Nihongo',library:'Aklatan ng aralin',librarySub:'Mga naka-save na aralin',libraryGo:'Buksan',targets:'Mga layunin',targetsSub:'Tingnan ang target score',targetsGo:'Tingnan',home:'Home',lessons:'Aralin',make:'Gumawa',menu:'Menu',more:'Ibang opsyon',language:'Wika',profile:'Profile',returnHome:'← Bumalik sa home',trouble:'🎤 Tulong sa mikropono',world:'🌍 World Collection',target:'🎯 Target score',challenge:'🏆 National Copeak Challenge',quest:'🗺️ Copeak Quest',teacher:'🔐 Para sa guro',legacy:'⚙️ Lahat ng feature',guide:'🧭 Gabay'},
    hi: {read:'पाठ पढ़ें',readSub:'सहेजे हुए पाठ खोलें',create:'पाठ बनाएँ',createSub:'अपना पाठ बनाएँ',sound:'Sound Quest खेलें',soundSub:'उच्चारण अभ्यास',japeak:'Japeak अभ्यास',japeakSub:'जापानी सीखें',library:'पाठ लाइब्रेरी',librarySub:'सहेजे गए पाठ',libraryGo:'खोलें',targets:'सीखने के लक्ष्य',targetsSub:'लक्ष्य स्कोर देखें',targetsGo:'लक्ष्य देखें',home:'होम',lessons:'पाठ',make:'बनाएँ',menu:'मेनू',more:'अन्य विकल्प',language:'भाषा',profile:'प्रोफ़ाइल',returnHome:'← होम पर वापस',trouble:'🎤 माइक्रोफ़ोन सहायता',world:'🌍 World Collection',target:'🎯 लक्ष्य स्कोर',challenge:'🏆 National Copeak Challenge',quest:'🗺️ Copeak Quest',teacher:'🔐 शिक्षक मेनू',legacy:'⚙️ सभी सुविधाएँ',guide:'🧭 उपयोग गाइड'}
  };
  function start() {
    const home = document.getElementById('homeScreen');
    if (!home || document.getElementById('copeakHomeHub')) return;
    // Keep every original ID/form/event in the DOM. Just move its parent.
    const existing = document.createElement('div');
    existing.id = 'copeakLegacyWorkspace';
    while (home.firstChild) existing.appendChild(home.firstChild);
    const hub = document.createElement('div');
    hub.id = 'copeakHomeHub';
    hub.setAttribute('aria-label','Copeak home');
    hub.innerHTML = `
      <header class="cp-home-header">
        <div class="cp-brand"><img src="logo.png" alt="" class="cp-brand-logo">
          <div><div class="cp-brand-word">Co<span>peak</span></div><div class="cp-brand-sub">Read · Create · Practice</div></div>
        </div>
        <img src="opening-final-mobile.png" alt="" class="cp-home-illustration" aria-hidden="true">
        <div class="cp-header-actions">
          <button class="cp-profile-pill" type="button" data-cp-action="profile" aria-label="Profile"><span class="cp-profile-avatar">👤</span><span id="cpProfileLabel" data-cp-t="profile">プロフィール</span></button>
          <button class="cp-settings" type="button" data-cp-action="menu" aria-controls="cpHomeMenu" aria-expanded="false" aria-label="Menu">⚙</button>
        </div>
        <div id="cpHomeMenu" class="cp-home-menu" hidden>
          <p class="cp-home-menu-title" data-cp-t="more">その他のメニュー</p>
          <label for="cpHomeLang" class="cp-menu-label" data-cp-t="language">表示言語</label>
          <select id="cpHomeLang" aria-label="Display language"></select>
          <button type="button" class="cp-menu-button" data-cp-action="sos" data-cp-t="trouble">🎤 音声トラブルのヘルプ</button>
          <button type="button" class="cp-menu-button" data-cp-action="world" data-cp-t="world">🌍 World Collection</button>
          <button type="button" class="cp-menu-button" data-cp-action="targets" data-cp-t="target">🎯 目標スコアと解説</button>
          <button type="button" class="cp-menu-button" data-cp-action="challenge" data-cp-t="challenge">🏆 National Copeak Challenge</button>
          <button type="button" class="cp-menu-button" data-cp-action="quest" data-cp-t="quest">🗺️ Copeak Quest</button>
          <button type="button" class="cp-menu-button" data-cp-action="teacher" data-cp-t="teacher">🔐 教員用メニュー</button>
          <button type="button" class="cp-menu-button" data-cp-action="legacy" data-cp-t="legacy">⚙️ 従来のすべての機能</button>
          <a href="copeak-guide.html" class="cp-menu-link" data-cp-t="guide">🧭 活用ガイド</a>
        </div>
      </header>
      <section class="cp-home-cards" aria-label="Main activities">
        <button type="button" class="cp-action cp-action-read" data-cp-action="read"><span class="cp-action-icon" aria-hidden="true"><img src="assets/home-icons/read-aloud.png" alt="" width="160" height="160" decoding="async"></span><span class="cp-action-copy"><span class="cp-action-title" data-cp-t="read">音読教材をよむ</span><span class="cp-action-sub" data-cp-t="readSub">保存した教材・課題を開く</span></span><span class="cp-action-arrow" aria-hidden="true">›</span></button>
        <button type="button" class="cp-action cp-action-create" data-cp-action="create"><span class="cp-action-icon" aria-hidden="true"><img src="assets/home-icons/create-material.png" alt="" width="160" height="160" decoding="async"></span><span class="cp-action-copy"><span class="cp-action-title" data-cp-t="create">音読教材を作る</span><span class="cp-action-sub" data-cp-t="createSub">自分だけの教材を作成</span></span><span class="cp-action-arrow" aria-hidden="true">›</span></button>
        <button type="button" class="cp-action cp-action-sound" data-cp-action="sound"><span class="cp-action-icon" aria-hidden="true"><img src="assets/home-icons/sound-quest.png" alt="" width="160" height="160" decoding="async"></span><span class="cp-action-copy"><span class="cp-action-title" data-cp-t="sound">Sound Quest をする</span><span class="cp-action-sub" data-cp-t="soundSub">発音チャレンジ</span></span><span class="cp-action-arrow" aria-hidden="true">›</span></button>
        <button type="button" class="cp-action cp-action-japeak" data-cp-action="japeak"><span class="cp-action-icon" aria-hidden="true"><img src="japeaklog.png" alt="" width="714" height="720" decoding="async"></span><span class="cp-action-copy"><span class="cp-action-title" data-cp-t="japeak">Japeak をする</span><span class="cp-action-sub" data-cp-t="japeakSub">日本語で練習</span></span><span class="cp-action-arrow" aria-hidden="true">›</span></button>
      </section>
      <section class="cp-home-extras" aria-label="Helpful shortcuts">
        <div class="cp-extra"><div><h3>📚 <span data-cp-t="library">教材ライブラリ</span></h3><p data-cp-t="librarySub">保存した教材やQuestを確認</p></div><button type="button" class="cp-extra-link" data-cp-action="read" data-cp-t="libraryGo">教材を開く</button></div>
        <div class="cp-extra"><div><h3>🎯 <span data-cp-t="targets">学習の目標</span></h3><p data-cp-t="targetsSub">目標スコアを確認しよう</p></div><button type="button" class="cp-extra-link" data-cp-action="targets" data-cp-t="targetsGo">目標を見る</button></div>
      </section>
      <nav class="cp-home-bottom" aria-label="Primary navigation">
        <button type="button" class="cp-nav" data-cp-action="home" aria-current="page"><span class="cp-nav-icon">⌂</span><span data-cp-t="home">ホーム</span></button>
        <button type="button" class="cp-nav" data-cp-action="read"><span class="cp-nav-icon">📖</span><span data-cp-t="lessons">教材</span></button>
        <button type="button" class="cp-nav" data-cp-action="create"><span class="cp-nav-icon">✎</span><span data-cp-t="make">作成</span></button>
        <button type="button" class="cp-nav" data-cp-action="menu"><span class="cp-nav-icon">☷</span><span data-cp-t="menu">メニュー</span></button>
      </nav>`;
    const back = document.createElement('button');
    back.id = 'copeakLegacyBack';
    back.type = 'button';
    back.dataset.cpAction = 'home';
    back.textContent = '← ホームに戻る';
    home.append(hub,back,existing);
    const language = document.getElementById('appLangSelector');
    const langMenu = document.getElementById('cpHomeLang');
    if (language) {
      Array.from(language.options).forEach(option => langMenu.add(new Option(option.textContent, option.value)));
      langMenu.value = language.value;
    }
    const menu = document.getElementById('cpHomeMenu');
    const settingButton = hub.querySelector('.cp-settings');
    function menuOpen(value) {
      menu.hidden = !value;
      settingButton.setAttribute('aria-expanded', String(value));
      if (value && language) langMenu.value=language.value;
    }
    function localize() {
      const labels = dict[language ? language.value : 'ja'] || dict.en;
      hub.querySelectorAll('[data-cp-t]').forEach(n => {if(labels[n.dataset.cpT]) n.textContent=labels[n.dataset.cpT];});
      back.textContent = labels.returnHome;
      settingButton.setAttribute('aria-label',labels.more);
      hub.querySelector('.cp-profile-pill').setAttribute('aria-label',labels.profile);
      try {
        const name = JSON.parse(localStorage.getItem('copeak_student_profile')||'null')?.name;
        if (name) document.getElementById('cpProfileLabel').textContent=name;
      } catch (_) {}
    }
    function showHome() {
      existing.hidden=true;hub.hidden=false;back.hidden=true;
      home.classList.remove('cp-legacy-mode');
      home.classList.add('cp-dashboard-mode');
      document.body.classList.add('copeak-home-mode');
      menuOpen(false);
      localize();
      window.scrollTo(0,0);
    }
    function showOriginal(anchorId,accordion) {
      hub.hidden=true;existing.hidden=false;back.hidden=false;
      home.classList.remove('cp-dashboard-mode');
      home.classList.add('cp-legacy-mode');
      document.body.classList.remove('copeak-home-mode');
      menuOpen(false);
      if (accordion) {
        const el = document.getElementById('acc-'+accordion+'-content');
        if (el && !el.classList.contains('is-open')) {
          if (typeof window.toggleAccordion==='function') window.toggleAccordion(accordion);
          else el.classList.add('is-open');
        }
      }
      requestAnimationFrame(() => setTimeout(() => {
        const el=anchorId && document.getElementById(anchorId);
        if(el) el.scrollIntoView({block:'start',behavior:'instant'});
        else window.scrollTo(0,0);
      },90));
    }
    function selectAction(name) {
      switch(name) {
        case 'home':showHome();break;
        case 'read':showOriginal('librarySectionTitle');break;
        case 'create':showOriginal('acc-form-content','form');break;
        case 'sound':window.location.assign('sound-quest.html');break;
        case 'japeak':window.location.assign('japeak-top.html');break;
        case 'targets':showOriginal('acc-target-content','target');break;
        case 'quest':showOriginal('questLibraryList');break;
        case 'challenge':window.location.assign('challenge.html');break;
        case 'teacher':
          showOriginal('teacherModeArea');
          if (typeof window.toggleTeacherMode==='function') {
            const area=document.getElementById('teacherModeArea');
            if(area && (area.style.display==='none' || area.style.display===''))window.toggleTeacherMode();
          }
          break;
        case 'legacy':showOriginal();break;
        case 'sos':menuOpen(false);document.getElementById('btn-open-trouble')?.click();break;
        case 'world':menuOpen(false);document.getElementById('btnWorldCollection')?.click();break;
        case 'profile':
          menuOpen(false);
          document.getElementById('studentProfileModal')?.classList.remove('hidden');
          break;
        case 'menu':menuOpen(menu.hidden);break;
      }
    }
    home.addEventListener('click', event => {
      const actionButton=event.target.closest('[data-cp-action]');
      if (actionButton && home.contains(actionButton)) selectAction(actionButton.dataset.cpAction);
    });
    langMenu.addEventListener('change', () => {
      if (!language) return;
      language.value=langMenu.value;
      language.dispatchEvent(new Event('change',{bubbles:true}));
      localize();
    });
    if(language) language.addEventListener('change',localize);
    document.addEventListener('click',event => {
      if(!menu.hidden && !menu.contains(event.target) && !event.target.closest('[data-cp-action="menu"]')) menuOpen(false);
    });
    document.addEventListener('keydown',event => {
      if(event.key==='Escape' && !menu.hidden){menuOpen(false);settingButton.focus();}
    });
    // Existing reading / classroom / Quest code still controls its own screens.
    let leftHome=false;
    new MutationObserver(() => {
      const nowHome=home.classList.contains('active') && home.style.display!=='none';
      if(!nowHome) {
        leftHome=true;
        document.body.classList.remove('copeak-home-mode');
      } else if(leftHome){leftHome=false;showHome();}
    }).observe(home,{attributes:true,attributeFilter:['class','style']});
    if(home.classList.contains('active') && home.style.display!=='none')showHome();
    else{hub.hidden=true;existing.hidden=false;back.hidden=true;}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);
  else start();
})();
