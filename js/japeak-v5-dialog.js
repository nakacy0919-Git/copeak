/* Japeak V5: one two-step situation -> phrase picker, reused on home and menu.
   No text-search UI, no extra menu-page navigation, never guesses the first lesson. */
(function (root) {
  'use strict';
  const catalog = root.JapeakV5Catalog;
  if (!catalog || !Array.isArray(catalog.categories)) return;
  const categories = catalog.categories.filter(group => group.key && group.lessons?.length);
  const levels = [
    {id:'all',ja:'すべて',en:'All'}, {id:'intro',ja:'入門',en:'Starter'},
    {id:'a1',ja:'A1',en:'A1'}, {id:'a2',ja:'A2',en:'A2'},
    {id:'b1',ja:'B1',en:'B1'}, {id:'b2',ja:'B2',en:'B2'}
  ];
  const domains = [
    {id:'all',icon:'✨',ja:'すべて',en:'All'},
    {id:'daily',icon:'💬',ja:'あいさつ・日常',en:'Everyday'},
    {id:'shopping',icon:'🛍️',ja:'買い物・食事',en:'Shopping & dining'},
    {id:'work',icon:'💼',ja:'仕事・職場',en:'Work'},
    {id:'health',icon:'🏥',ja:'健康・病院',en:'Health'},
    {id:'community',icon:'🏘️',ja:'地域・手続き',en:'Community'},
    {id:'family',icon:'👪',ja:'家族・子育て',en:'Family'},
    {id:'transport',icon:'🚃',ja:'交通・外出',en:'Transport'},
    {id:'safety',icon:'🆘',ja:'防災・安全',en:'Safety'}
  ];
  const labels = {
    ja: {school:'学校で話そう',life:'暮らしで話そう',choose:'どんな場面で話しますか？',
      phrase:'練習するフレーズを選んでください',level:'日本語レベル',domain:'生活カテゴリー',
      back:'← 場面を選び直す',close:'閉じる',count:'件',practice:'音読を始める',empty:'この場面の教材はありません。'},
    en: {school:'School Japanese',life:'Daily Life Japanese',choose:'Choose a situation',
      phrase:'Choose a phrase to practice',level:'Japanese level',domain:'Life situations',
      back:'← Back to situations',close:'Close',count:'items',practice:'Start reading',empty:'No lessons in this situation.'},
    id: {school:'Bahasa Jepang di sekolah',life:'Bahasa Jepang sehari-hari',choose:'Pilih situasi',
      phrase:'Pilih frasa untuk latihan',level:'Tingkat bahasa Jepang',domain:'Kategori kehidupan',
      back:'← Kembali ke situasi',close:'Tutup',count:'pilihan',practice:'Mulai latihan',empty:'Tidak ada materi.'},
    vi: {school:'Tiếng Nhật ở trường',life:'Tiếng Nhật hằng ngày',choose:'Chọn tình huống',
      phrase:'Chọn câu để luyện tập',level:'Trình độ',domain:'Chủ đề',back:'← Quay lại',close:'Đóng',count:'mục',practice:'Bắt đầu luyện tập',empty:'Chưa có bài học.'},
    pt: {school:'Na escola',life:'Vida cotidiana',choose:'Escolha uma situação',phrase:'Escolha uma frase',
      level:'Nível de japonês',domain:'Categoria',back:'← Voltar',close:'Fechar',count:'itens',practice:'Praticar',empty:'Sem aulas.'}
  };
  const supportedPracticeLanguages = new Set(['ja','en','zh-CN','zh-TW','ko','vi','tl','id','th','my','km','ne','mn','si','bn','pt','es','fr','ru','uk']);
  const inMenu = !!document.getElementById('gate-container');
  const overlay = document.createElement('div');
  overlay.id = 'jpk-v5-overlay';
  overlay.className = 'jpk-v5-overlay';
  overlay.hidden = true;
  overlay.innerHTML = '<div class="jpk-v5-dialog" role="dialog" aria-modal="true" aria-labelledby="jpk-v5-title" tabindex="-1">' +
      '<div class="jpk-v5-heading"><div><p class="jpk-v5-eyebrow" id="jpk-v5-kicker">JAPEAK</p><h2 id="jpk-v5-title"></h2></div>' +
      '<button type="button" id="jpk-v5-close" class="jpk-v5-close" aria-label="Close">×</button></div>' +
      '<div id="jpk-v5-controls" class="jpk-v5-controls"><div id="jpk-v5-level-wrap"><p id="jpk-v5-level-label"></p><div id="jpk-v5-levels" class="jpk-v5-chips"></div></div>' +
      '<div id="jpk-v5-domain-wrap"><p id="jpk-v5-domain-label"></p><div id="jpk-v5-domains" class="jpk-v5-chips"></div></div></div>' +
      '<div id="jpk-v5-phrase-nav" class="jpk-v5-phrase-nav" hidden><button type="button" id="jpk-v5-back"></button><span id="jpk-v5-counter" aria-live="polite"></span></div>' +
      '<div class="jpk-v5-scroll" id="jpk-v5-scroll"><div id="jpk-v5-results" class="jpk-v5-grid"></div></div>' +
      '<div id="jpk-v5-footer" class="jpk-v5-footer" aria-live="polite"></div></div>';
  document.body.appendChild(overlay);
  const $ = id => document.getElementById(id);
  const dialog = $('jpk-v5-overlay').querySelector('.jpk-v5-dialog');
  let mode = 'school', level = 'all', domain = 'all', stage = 'scenes';
  let chosen = null, originalFocus = null, originalOverflow = '';
  let active = false;

  function getLanguage() {
    const select = document.getElementById(inMenu ? 'menu-lang-select' : 'jpk-v4-lang');
    if (select?.value) return select.value;
    try { return root.localStorage?.getItem('japeakLang') || 'ja'; } catch (_) { return 'ja'; }
  }
  function dictionary() { return labels[getLanguage()] || labels.en; }
  function localName(value) {
    const lang = getLanguage();
    return value?.[lang] || value?.en || value?.ja || '';
  }
  function titleFor(group) { return localName(group.names) || group.key; }
  function practiceHref(lesson) {
    const lang = getLanguage();
    return 'japeak.html?id=' + encodeURIComponent(lesson.id) +
      '&lang=' + encodeURIComponent(supportedPracticeLanguages.has(lang) ? lang : 'en');
  }
  function addChip(container, item, selected, click) {
    const button = document.createElement('button');
    button.type='button'; button.className='jpk-v5-chip';
    button.textContent=(item.icon ? item.icon + ' ' : '') + localName(item);
    button.setAttribute('aria-pressed', String(item.id === selected));
    button.addEventListener('click',()=>{ click(item.id); render(); });
    container.appendChild(button);
  }
  function visibleGroups() {
    return categories.filter(g=>g.mode===mode &&
      (mode==='school' || ((level==='all'||g.level===level) && (domain==='all'||g.domain===domain))));
  }
  function setStatus(total) {
    $('jpk-v5-footer').textContent = total + ' ' + dictionary().count;
  }
  function renderScenes() {
    const d=dictionary();
    $('jpk-v5-title').textContent=d.choose;
    $('jpk-v5-kicker').textContent=mode==='school' ? d.school : d.life;
    $('jpk-v5-controls').hidden=mode==='school';
    $('jpk-v5-phrase-nav').hidden=true;
    const list=$('jpk-v5-results');
    list.replaceChildren();
    list.className='jpk-v5-grid';
    const levelsContainer=$('jpk-v5-levels'), domainsContainer=$('jpk-v5-domains');
    levelsContainer.replaceChildren();domainsContainer.replaceChildren();
    $('jpk-v5-level-label').textContent=d.level;
    $('jpk-v5-domain-label').textContent=d.domain;
    if(mode==='life'){
      levels.forEach(l=>addChip(levelsContainer,l,level,id=>{level=id;}));
      domains.forEach(x=>addChip(domainsContainer,x,domain,id=>{domain=id;}));
    }
    const groups=visibleGroups();
    for(const group of groups){
      const button=document.createElement('button');button.type='button';
      button.className='jpk-v5-scene';
      const icon=document.createElement('span');
      icon.className='jpk-v5-scene-icon';icon.textContent=group.icon||'🗣️';
      const label=document.createElement('span');label.className='jpk-v5-scene-label';
      const strong=document.createElement('strong');strong.textContent=titleFor(group);
      const small=document.createElement('small');small.textContent=group.lessons.length+' '+d.count;
      label.append(strong,small);button.append(icon,label);
      button.addEventListener('click',()=>{
        chosen=group;stage='phrases';render();$('jpk-v5-scroll').scrollTop=0;
        $('jpk-v5-back').focus();
      });
      list.appendChild(button);
    }
    if (!groups.length) {
      const p=document.createElement('p');p.className='jpk-v5-empty';p.textContent=d.empty;list.appendChild(p);
    }
    setStatus(groups.length);
  }
  function renderPhrases() {
    const d=dictionary();
    $('jpk-v5-title').textContent=d.phrase;
    $('jpk-v5-kicker').textContent=(mode==='school'?d.school:d.life)+' / '+titleFor(chosen);
    $('jpk-v5-controls').hidden=true;
    $('jpk-v5-phrase-nav').hidden=false;
    $('jpk-v5-back').textContent=d.back;
    $('jpk-v5-counter').textContent=chosen.lessons.length+' '+d.count;
    const container=$('jpk-v5-results');
    container.replaceChildren();
    container.className='jpk-v5-grid jpk-v5-phrases';
    for(const item of chosen.lessons){
      const a=document.createElement('a');
      a.href=practiceHref(item);
      a.className='jpk-v5-phrase';
      const text=document.createElement('span');
      const title=document.createElement('strong');
      title.textContent=item.title||item.japanese||'日本語を練習';
      const japanese=document.createElement('small');
      japanese.textContent=item.japanese||'';
      text.append(title,japanese);
      const arrow=document.createElement('span');
      arrow.className='jpk-v5-next';arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';
      a.append(text,arrow);
      container.appendChild(a);
    }
    setStatus(chosen.lessons.length);
  }
  function render(){if(!active)return;if(stage==='phrases'&&chosen)renderPhrases();else renderScenes();}
  function open(selectedMode, categoryKey) {
    mode=selectedMode==='life'?'life':'school';
    level='all';domain='all';stage='scenes';chosen=null;
    originalFocus=document.activeElement;originalOverflow=document.body.style.overflow;
    overlay.hidden=false;active=true;document.body.style.overflow='hidden';
    if(categoryKey) {
      const found=categories.find(g=>g.mode===mode&&g.key===categoryKey);
      if(found){chosen=found;stage='phrases';}
    }
    render();
    dialog.focus();
  }
  function close(){
    if(!active)return;
    overlay.hidden=true;active=false;document.body.style.overflow=originalOverflow;
    if(originalFocus && document.contains(originalFocus)) originalFocus.focus();
  }
  $('jpk-v5-close').addEventListener('click',close);
  $('jpk-v5-back').addEventListener('click',()=>{stage='scenes';chosen=null;render();$('jpk-v5-scroll').scrollTop=0;dialog.focus();});
  overlay.addEventListener('click',event=>{if(event.target===overlay)close();});
  document.addEventListener('keydown',event=>{
    if(!active)return;
    if(event.key==='Escape'){event.preventDefault();close();return;}
    if(event.key!=='Tab')return;
    const focusable=[...overlay.querySelectorAll('button:not([disabled]),a[href]')]
      .filter(el=>el.getClientRects().length>0 && !el.closest('[hidden]'));
    if(!focusable.length)return;
    const first=focusable[0],last=focusable[focusable.length-1];
    if(event.shiftKey && (document.activeElement===first || document.activeElement===dialog)){
      event.preventDefault();last.focus();
    }else if(!event.shiftKey && document.activeElement===last){
      event.preventDefault();first.focus();
    }
  });
  for(const selector of ['.start-school','.start-life']){
    document.querySelectorAll(selector).forEach(button=>{
      button.addEventListener('click',event=>{
        event.preventDefault();
        open(selector==='.start-school'?'school':'life');
      });
    });
  }
  if(inMenu) {
    for(const [id,type] of [['btn-text-school','school'],['btn-text-life','life']]){
      const button=$(id)?.closest('button');
      if(button) {
        // Original inline onclick is kept as a no-JS fallback, but the capture
        // listener owns navigation when the popup is available.
        button.addEventListener('click',event=>{event.preventDefault();event.stopImmediatePropagation();open(type);},true);
      }
    }
  }
  for(const id of ['jpk-v4-lang','menu-lang-select']) {
    $(id)?.addEventListener('change',()=>{if(active)render();});
  }
  root.JapeakV5Dialog={open,close,visibleGroups,practiceHref};
  // A course menu must always start on the scenic home screen.
  // Even old bookmarked URLs with ?mode=school/life&cat=... must NOT auto-open.
  // Keep open() available only after an explicit user click on School or Daily Life.
})(window);
