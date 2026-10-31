(function buildInfoMenu(){
  'use strict';
  function start(){
    const home=document.getElementById('homeScreen'),hub=document.getElementById('copeakHomeHub');
    if(!home||!hub||document.getElementById('cpInfoPage'))return;
    const panel=document.createElement('section');
    panel.id='cpInfoPage';
    panel.className='cp-page cp-info-page';
    panel.hidden=true;
    panel.setAttribute('aria-label','Copeak menu');
    panel.innerHTML=`
<header class="cp-page-head cp-info-head">
 <div class="cp-page-head-main"><button class="cp-page-home" type="button" data-info-action="home" aria-label="ホームに戻る">‹</button>
 <div><div class="cp-page-eyebrow">COPEAK • INFORMATION</div><h2 data-info-t="pageTitle">メニュー</h2><p class="cp-page-subtitle" data-info-t="pageSubtitle">サービス・サポート・運営情報</p></div></div>
 <div class="cp-page-brand"><img src="logo.png" alt="Copeak">Copeak</div>
</header>
<div class="cp-page-scroll cp-info-scroll">
 <div class="cp-info-layout">
  <div class="cp-info-column">
   <section class="cp-info-panel" aria-labelledby="cpInfoServices">
    <div class="cp-info-section-heading"><span class="cp-info-kicker">RELATED SERVICES</span><h3 id="cpInfoServices" data-info-t="services">関連サービス</h3></div>
    <div class="cp-info-app-grid">
      <a class="cp-info-app cp-info-app-pic" href="https://www.pic-speak-story.com/index.html" target="_blank" rel="noopener noreferrer">
       <span class="cp-info-app-mark" aria-hidden="true">💬</span><span><strong>PicSpeak</strong><small data-info-t="picspeak">スピーキング学習</small></span><span class="cp-info-chevron" aria-hidden="true">↗</span></a>
      <a class="cp-info-app cp-info-app-voca" href="https://vocadash.pic-speak-story.com/" target="_blank" rel="noopener noreferrer">
       <span class="cp-info-app-mark" aria-hidden="true">🔤</span><span><strong>VocaDash</strong><small data-info-t="vocadash">単語学習</small></span><span class="cp-info-chevron" aria-hidden="true">↗</span></a>
    </div>
   </section>
   <section class="cp-info-panel" aria-labelledby="cpInfoSupport">
    <div class="cp-info-section-heading"><span class="cp-info-kicker">GUIDE & SUPPORT</span><h3 id="cpInfoSupport" data-info-t="support">活用ガイド・サポート</h3></div>
    <div class="cp-info-links">
      <a class="cp-info-link" href="copeak-guide.html"><span class="cp-info-line-icon cp-info-ic-blue" aria-hidden="true">🧭</span><span class="cp-info-link-content"><strong data-info-t="guide">Copeak 活用ガイド</strong><small data-info-t="guideSub">使い方を確認する</small></span><span class="cp-info-chevron" aria-hidden="true">›</span></a>
      <button class="cp-info-link" type="button" data-info-action="sos"><span class="cp-info-line-icon cp-info-ic-rose" aria-hidden="true">🎤</span><span class="cp-info-link-content"><strong data-info-t="sos">音声トラブルのヘルプ</strong><small data-info-t="sosSub">マイク・音声認識のトラブル対処</small></span><span class="cp-info-chevron" aria-hidden="true">›</span></button>
      <a class="cp-info-link" href="https://sites.google.com/view/koheinakashima/bio" target="_blank" rel="noopener noreferrer"><span class="cp-info-line-icon cp-info-ic-blue" aria-hidden="true">👨‍🏫</span><span class="cp-info-link-content"><strong data-info-t="developer">開発者について</strong><small data-info-t="developerSub">Copeakの開発者紹介</small></span><span class="cp-info-chevron" aria-hidden="true">↗</span></a>
      <a class="cp-info-link" href="https://forms.gle/Kvfezyax5qs9BvYQ7" target="_blank" rel="noopener noreferrer"><span class="cp-info-line-icon cp-info-ic-gold" aria-hidden="true">🤝</span><span class="cp-info-link-content"><strong data-info-t="sponsor">スポンサー・協賛のお問い合わせ</strong><small data-info-t="sponsorSub">協賛・ご支援に関するご連絡</small></span><span class="cp-info-chevron" aria-hidden="true">↗</span></a>
    </div>
   </section>
  </div>
  <div class="cp-info-column">
   <section class="cp-info-panel" aria-labelledby="cpInfoLegal">
    <div class="cp-info-section-heading"><span class="cp-info-kicker">POLICY & LEGAL</span><h3 id="cpInfoLegal" data-info-t="legal">ポリシー・法的情報</h3></div>
    <div class="cp-info-links">
      <a class="cp-info-link" href="copeak-terms.html"><span class="cp-info-line-icon cp-info-ic-lavender" aria-hidden="true">📜</span><span class="cp-info-link-content"><strong data-info-t="terms">利用規約</strong></span><span class="cp-info-chevron" aria-hidden="true">›</span></a>
      <a class="cp-info-link" href="copeak-privacy.html"><span class="cp-info-line-icon cp-info-ic-lavender" aria-hidden="true">🛡️</span><span class="cp-info-link-content"><strong data-info-t="privacy">プライバシーポリシー</strong></span><span class="cp-info-chevron" aria-hidden="true">›</span></a>
    </div>
   </section>
   <section class="cp-info-panel cp-info-partner" aria-labelledby="cpInfoPartner">
    <div class="cp-info-section-heading"><span class="cp-info-kicker">OUR PARTNER</span><h3 id="cpInfoPartner" data-info-t="partners">サポート企業</h3></div>
    <a class="cp-info-partner-link" href="https://vital-design.co.jp/" target="_blank" rel="noopener noreferrer">
      <span data-info-t="supportedBy">SUPPORTED BY</span><img src="support1.webp" alt="VITAL DESIGN"><span class="cp-info-chevron" aria-hidden="true">↗</span>
    </a>
   </section>
   <details class="cp-info-panel cp-info-advanced">
    <summary><span>⚙️ <span data-info-t="moreTools">その他のCopeak機能</span></span><span class="cp-info-chevron" aria-hidden="true">⌄</span></summary>
    <div class="cp-info-links">
      <button class="cp-info-link" type="button" data-info-action="world"><span>🌍</span><strong>World Collection</strong><span class="cp-info-chevron">›</span></button>
      <button class="cp-info-link" type="button" data-info-action="target"><span>🎯</span><strong>Target Scores</strong><span class="cp-info-chevron">›</span></button>
      <button class="cp-info-link" type="button" data-info-action="ncc"><span>🏆</span><strong>National Copeak Challenge</strong><span class="cp-info-chevron">›</span></button>
      <button class="cp-info-link" type="button" data-info-action="teacher"><span>🔐</span><strong data-info-t="teacher">教員用メニュー</strong><span class="cp-info-chevron">›</span></button>
      <button class="cp-info-link" type="button" data-info-action="legacy"><span>🗂️</span><strong data-info-t="allFeatures">従来のすべての機能</strong><span class="cp-info-chevron">›</span></button>
    </div>
   </details>
   <div class="cp-info-copyright">© 2026 Kohei Nakashima. <span>All Rights Reserved.</span></div>
  </div>
 </div>
</div>
<nav class="cp-page-bottom cp-info-bottom" aria-label="Primary navigation">
  <button type="button" data-info-action="home"><span class="cp-info-nav-icon">⌂</span><span data-info-t="home">ホーム</span></button>
  <button type="button" data-info-action="read"><span class="cp-info-nav-icon">📖</span><span data-info-t="read">教材</span></button>
  <button type="button" data-info-action="create"><span class="cp-info-nav-icon">✎</span><span data-info-t="create">作成</span></button>
  <button type="button" data-info-action="info" aria-current="page"><span class="cp-info-nav-icon">☷</span><span data-info-t="menu">メニュー</span></button>
</nav>`;
    home.appendChild(panel);
    const strings={
      ja:{pageTitle:'メニュー',pageSubtitle:'サービス・サポート・運営情報',services:'関連サービス',picspeak:'スピーキング学習',vocadash:'単語学習',support:'活用ガイド・サポート',guide:'Copeak 活用ガイド',guideSub:'使い方を確認する',sos:'音声トラブルのヘルプ',sosSub:'マイク・音声認識のトラブル対処',developer:'開発者について',developerSub:'Copeakの開発者紹介',sponsor:'スポンサー・協賛のお問い合わせ',sponsorSub:'協賛・ご支援に関するご連絡',legal:'ポリシー・法的情報',terms:'利用規約',privacy:'プライバシーポリシー',partners:'サポート企業',supportedBy:'SUPPORTED BY',moreTools:'その他のCopeak機能',teacher:'教員用メニュー',allFeatures:'従来のすべての機能',home:'ホーム',read:'教材',create:'作成',menu:'メニュー'},
      en:{pageTitle:'Menu',pageSubtitle:'Services, support & company information',services:'Related services',picspeak:'Speaking practice',vocadash:'Vocabulary practice',support:'Guides & support',guide:'Copeak User Guide',guideSub:'Learn how to use Copeak',sos:'Microphone troubleshooting',sosSub:'Speech recognition and audio help',developer:'About the developer',developerSub:'Meet the creator of Copeak',sponsor:'Sponsorship inquiries',sponsorSub:'Contact us about support',legal:'Policies & legal',terms:'Terms of use',privacy:'Privacy policy',partners:'Supported by',moreTools:'More Copeak tools',teacher:'Teacher menu',allFeatures:'All original features',home:'Home',read:'Lessons',create:'Create',menu:'Menu'},
      'zh-TW':{pageTitle:'選單',pageSubtitle:'服務、支援與營運資訊',services:'相關服務',picspeak:'口說練習',vocadash:'單字學習',support:'指南與支援',guide:'Copeak 使用指南',guideSub:'了解如何使用',sos:'麥克風疑難排解',sosSub:'語音辨識問題',developer:'關於開發者',sponsor:'贊助與合作洽詢',legal:'政策與法律資訊',terms:'使用條款',privacy:'隱私政策',partners:'支持企業',moreTools:'其他 Copeak 功能',teacher:'教師選單',allFeatures:'所有原有功能',home:'首頁',read:'教材',create:'製作',menu:'選單',guideSub:"查看 Copeak 的使用方式",sosSub:"麥克風和語音辨識協助",developerSub:"認識 Copeak 開發者",sponsorSub:"聯絡我們洽談贊助合作"},
      vi:{pageTitle:'Menu',pageSubtitle:'Dịch vụ và hỗ trợ',services:'Dịch vụ liên quan',picspeak:'Luyện nói',vocadash:'Học từ vựng',support:'Hướng dẫn và hỗ trợ',guide:'Hướng dẫn Copeak',sos:'Trợ giúp mic',developer:'Về nhà phát triển',sponsor:'Liên hệ tài trợ',legal:'Chính sách và pháp lý',terms:'Điều khoản sử dụng',privacy:'Chính sách riêng tư',partners:'Đơn vị hỗ trợ',moreTools:'Công cụ khác',teacher:'Dành cho giáo viên',allFeatures:'Các tính năng cũ',home:'Trang chủ',read:'Bài học',create:'Tạo bài',menu:'Menu',guideSub:"Tìm hiểu cách sử dụng Copeak",sosSub:"Trợ giúp mic và nhận dạng giọng nói",developerSub:"Giới thiệu người tạo Copeak",sponsorSub:"Liên hệ về tài trợ và hỗ trợ"},
      id:{pageTitle:'Menu',pageSubtitle:'Layanan dan dukungan',services:'Layanan terkait',picspeak:'Latihan berbicara',vocadash:'Belajar kosakata',support:'Panduan dan bantuan',guide:'Panduan Copeak',sos:'Bantuan mikrofon',developer:'Tentang pengembang',sponsor:'Hubungi sponsor',legal:'Kebijakan dan hukum',terms:'Ketentuan penggunaan',privacy:'Kebijakan privasi',partners:'Pendukung',moreTools:'Fitur lainnya',teacher:'Menu guru',allFeatures:'Semua fitur lama',home:'Beranda',read:'Materi',create:'Buat',menu:'Menu',guideSub:"Pelajari cara menggunakan Copeak",sosSub:"Bantuan mikrofon dan pengenalan suara",developerSub:"Kenali pembuat Copeak",sponsorSub:"Hubungi kami tentang dukungan"},
      tl:{pageTitle:'Menu',pageSubtitle:'Mga serbisyo at suporta',services:'Iba pang serbisyo',picspeak:'Pagsasanay sa pagsasalita',vocadash:'Pag-aaral ng bokabularyo',support:'Gabay at suporta',guide:'Gabay sa Copeak',sos:'Tulong sa mikropono',developer:'Tungkol sa developer',sponsor:'Sponsorship inquiries',legal:'Patakaran at legal',terms:'Mga tuntunin',privacy:'Patakaran sa privacy',partners:'Mga sumusuporta',moreTools:'Ibang kagamitan',teacher:'Menu ng guro',allFeatures:'Lahat ng lumang feature',home:'Home',read:'Aralin',create:'Gumawa',menu:'Menu',guideSub:"Alamin ang paggamit ng Copeak",sosSub:"Tulong sa mikropono at speech recognition",developerSub:"Kilalanin ang lumikha ng Copeak",sponsorSub:"Makipag-ugnayan tungkol sa suporta"},
      hi:{pageTitle:'मेनू',pageSubtitle:'सेवाएँ और सहायता',services:'संबंधित सेवाएँ',picspeak:'बोलने का अभ्यास',vocadash:'शब्दावली अभ्यास',support:'मार्गदर्शिका और सहायता',guide:'Copeak उपयोग गाइड',sos:'माइक्रोफ़ोन सहायता',developer:'डेवलपर के बारे में',sponsor:'प्रायोजन पूछताछ',legal:'नीतियाँ और कानूनी जानकारी',terms:'उपयोग की शर्तें',privacy:'गोपनीयता नीति',partners:'समर्थक',moreTools:'अन्य सुविधाएँ',teacher:'शिक्षक मेनू',allFeatures:'सभी पुरानी सुविधाएँ',home:'होम',read:'पाठ',create:'बनाएँ',menu:'मेनू',guideSub:"Copeak का उपयोग सीखें",sosSub:"माइक्रोफ़ोन और आवाज़ पहचान में सहायता",developerSub:"Copeak के निर्माता के बारे में",sponsorSub:"सहायता और प्रायोजन के लिए संपर्क"}
    };
    const language=document.getElementById('appLangSelector');
    function translate(){
      const locale=language?.value||'ja';
      const values={...strings.en,...(strings[locale]||{})};
      panel.querySelectorAll('[data-info-t]').forEach(el=>{
        const v=values[el.dataset.infoT];if(v)el.textContent=v;
      });
      panel.setAttribute('aria-label',values.pageTitle||'Menu');
      panel.querySelector('.cp-page-home').setAttribute('aria-label',values.home||'Home');
    }
    language?.addEventListener('change',translate);
    translate();
    function close(){panel.hidden=true;home.classList.remove('cp-info-active');}
    function open(){
      translate();
      panel.hidden=false;hub.hidden=true;
      for(const id of ['cpReaderPage','cpCreatorPage']){
        const p=document.getElementById(id);if(p)p.hidden=true;
      }
      const legacy=document.getElementById('copeakLegacyWorkspace');if(legacy)legacy.hidden=true;
      const oldBack=document.getElementById('copeakLegacyBack');if(oldBack)oldBack.hidden=true;
      const settings=document.getElementById('cpHomeMenu');if(settings)settings.hidden=true;
      hub.querySelector('.cp-settings')?.setAttribute('aria-expanded','false');
      home.classList.remove('cp-legacy-mode');
      home.classList.add('cp-dashboard-mode','cp-section-mode','cp-info-active');
      document.body.classList.add('copeak-home-mode');
      panel.querySelector('.cp-page-scroll').scrollTop=0;
    }
    function go(where){
      close();
      if(window.CopeakHomePages && ['home','read','create'].includes(where)){
        window.CopeakHomePages.open(where);return;
      }
      if(where==='home'){
        hub.hidden=false;home.classList.remove('cp-section-mode');home.classList.add('cp-dashboard-mode');
      }
    }
    function run(which){
      if(which==='sos'||which==='world'){
        document.getElementById(which==='sos'?'btn-open-trouble':'btnWorldCollection')?.click();
      }else if(which==='target'||which==='ncc'){
        go('read');
        document.querySelector('#cpReaderPage [data-page-go="'+which+'"]')?.click();
      }else if(which==='teacher'){
        go('create');
        document.querySelector('#cpCreatorPage [data-page-go="teacher"]')?.click();
      }else if(which==='legacy'){
        close();hub.hidden=false;
        const trigger=document.createElement('button');
        trigger.type='button';trigger.dataset.cpAction='legacy';
        hub.appendChild(trigger);trigger.click();trigger.remove();
      }
    }
    panel.addEventListener('click',event=>{
      const btn=event.target.closest('[data-info-action]');
      if(!btn||!panel.contains(btn))return;
      event.preventDefault();
      const action=btn.dataset.infoAction;
      if(['home','read','create'].includes(action))go(action);
      else if(action==='info')open();
      else run(action);
    });
    // Keep ordinary lesson/recording screen transitions under app control.
    new MutationObserver(()=>{
      if(!home.classList.contains('active')&&!panel.hidden)close();
    }).observe(home,{attributes:true,attributeFilter:['class','style']});
    window.CopeakInfoMenu={open,close};
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);
  else start();
})();
