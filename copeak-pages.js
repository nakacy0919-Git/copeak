function initCopeakDedicatedPages() {
  'use strict';
  const home=document.getElementById('homeScreen'),hub=document.getElementById('copeakHomeHub');
  if(!home||!hub||document.getElementById('cpReaderPage'))return;
  const page=(id,step,title,subtitle,body,active)=>{
    const el=document.createElement('section');el.id=id;el.className='cp-page';el.hidden=true;
    el.innerHTML=`<header class="cp-page-head">
      <div class="cp-page-head-main"><button class="cp-page-home" data-page-go="home" type="button" aria-label="ホームに戻る">‹</button>
      <div><div class="cp-page-eyebrow">${step}</div><h2>${title}</h2><div class="cp-page-subtitle">${subtitle}</div></div></div>
      <div class="cp-page-brand"><img src="logo.png" alt="Copeak">Copeak</div></header>
      <div class="cp-page-scroll">${body}</div>
      <nav class="cp-page-bottom" aria-label="ページナビゲーション">
      <button type="button" data-page-go="home" ${active==='home'?'aria-current="page"':''}>⌂ ホーム</button>
      <button type="button" data-page-go="read" ${active==='read'?'aria-current="page"':''}>📖 教材をよむ</button>
      <button type="button" data-page-go="create" ${active==='create'?'aria-current="page"':''}>✎ 教材を作る</button>
      <button type="button" data-page-go="menu">☷ メニュー</button></nav>`;
    home.appendChild(el);return el;
  };
  const reader=page('cpReaderPage','READ • PRACTICE','音読教材をよむ','教材を選んで音読・シャドーイングを始めよう',
    `<div class="cp-panel" id="cpReaderLibrary"><div class="cp-panel-title"><h3>📚 教材ライブラリ</h3><button class="cp-link-pill" data-page-go="create" type="button">＋ 教材を作る</button></div><div id="cpReadFolders"></div></div>
    <div class="cp-panel"><div class="cp-panel-title"><h3>🗺️ Copeak Quest</h3><small>連続ミッション</small></div><div id="cpReadQuest"></div></div>
    <div class="cp-panel"><div class="cp-panel-title"><h3>学習サポート・イベント</h3></div>
      <div class="cp-page-actions"><button type="button" data-page-go="target">🎯 Target Scores</button>
       <button type="button" data-page-go="ncc">🏆 National Copeak Challenge</button>
       <button type="button" data-page-go="warning">⚠️ データ保存のお願い</button></div>
      <div id="cpReadGuides"></div></div>`,'read');
  const creator=page('cpCreatorPage','CREATE • EDIT','音読教材を作る','既存の教材作成・編集機能をそのまま利用できます',
    `<div class="cp-panel"><div class="cp-panel-title"><h3>✎ 教材を作成・編集</h3>
      <button type="button" class="cp-link-pill" data-page-go="read">保存済み教材を開く</button></div>
      <div id="cpCreateForm"></div></div>
    <div class="cp-panel"><div class="cp-panel-title"><h3>👨‍🏫 先生向け設定・教材作成</h3>
      <button type="button" class="cp-link-pill" data-page-go="teacher">教員用メニューを開く</button></div>
      <p style="font-size:12px;color:#6e829b;margin:0 0 12px">成績回収設定とCopeak Questの作成機能を引き継いでいます。</p>
      <div id="cpCreateTeacher" hidden></div></div>`,'create');
  const move=(id,node)=>{const target=document.getElementById(id);if(target&&node)target.appendChild(node);};
  const libraryTitle=document.getElementById('librarySectionTitle');
  if(libraryTitle)move('cpReadFolders',libraryTitle.parentElement?.parentElement?.parentElement);
  move('cpReadFolders',document.getElementById('savedLessonsList'));
  const quest=document.getElementById('questLibraryList');
  if(quest){move('cpReadQuest',quest.previousElementSibling);move('cpReadQuest',quest);}
  const form=document.getElementById('acc-form-content');
  if(form){
    const wrapper=form.parentElement;wrapper.id='cpOriginalFormSection';
    move('cpCreateForm',wrapper);form.classList.add('is-open');
  }
  move('cpCreateTeacher',document.getElementById('teacherModeArea'));
  ['target','ncc','warning'].forEach(key=>{
    const accordion=document.getElementById('acc-'+key+'-content');
    if(!accordion)return;
    const wrap=accordion.parentElement;wrap.id='cpGuide'+key;wrap.classList.add('cp-guide-section');
    move('cpReadGuides',wrap);
    accordion.classList.remove('is-open');
    const icon=document.getElementById('acc-'+key+'-icon');if(icon)icon.textContent='＋';
  });
  const menu=document.getElementById('cpHomeMenu');
  function go(which){
    const onHome=which==='home';
    reader.hidden=which!=='read';creator.hidden=which!=='create';hub.hidden=!onHome;
    home.classList.toggle('cp-section-mode',!onHome);
    home.classList.add('cp-dashboard-mode');
    document.body.classList.add('copeak-home-mode');
    const previous=document.getElementById('copeakLegacyWorkspace');if(previous)previous.hidden=true;
    const legacyBack=document.getElementById('copeakLegacyBack');if(legacyBack)legacyBack.hidden=true;
    if(menu)menu.hidden=true;
    const settings=hub.querySelector('.cp-settings');if(settings)settings.setAttribute('aria-expanded','false');
    if(onHome)refreshActivity();
    else{
      const panel=which==='read'?reader:creator;
      const scroll=panel.querySelector('.cp-page-scroll');if(scroll)scroll.scrollTop=0;
      if(which==='read'){try{if(typeof db!=='undefined'&&db&&typeof loadSavedLessons==='function')loadSavedLessons();}catch(_){}}
    }
    window.scrollTo(0,0);
  }
  function guide(key) {
    go('read');
    const wrapper=document.getElementById('cpGuide'+key);if(!wrapper)return;
    document.querySelectorAll('#cpReadGuides .cp-guide-section').forEach(x=>x.classList.toggle('cp-is-visible',x===wrapper));
    const content=document.getElementById('acc-'+key+'-content');
    if(content&&!content.classList.contains('is-open'))content.classList.add('is-open');
    const icon=document.getElementById('acc-'+key+'-icon');if(icon)icon.textContent='－';
    setTimeout(()=>{
      wrapper.scrollIntoView({block:'start',behavior:'smooth'});
      if(key==='target'&&typeof window.initTargetChart==='function')window.initTargetChart();
    },90);
  }
  function teacher(){
    go('create');
    const section=document.getElementById('cpCreateTeacher'),area=document.getElementById('teacherModeArea');
    if(!section||!area)return;
    if((area.style.display==='none'||area.style.display==='')&&typeof window.toggleTeacherMode==='function')window.toggleTeacherMode();
    if(area.style.display!=='none'){section.hidden=false;setTimeout(()=>section.scrollIntoView({block:'start',behavior:'smooth'}),80);}
  }
  function action(which){
    if(which==='home'||which==='read'||which==='create')go(which);
    else if(which==='sound')window.location.assign('sound-quest.html');
    else if(which==='menu')window.CopeakInfoMenu?.open();
    else if(which==='target'||which==='ncc'||which==='warning')guide(which);
    else if(which==='teacher')teacher();
  }
  [reader,creator].forEach(p=>p.addEventListener('click',event=>{
    const btn=event.target.closest('[data-page-go]');
    if(!btn)return;event.preventDefault();event.stopPropagation();action(btn.dataset.pageGo);
  }));
  // Intercept the old home-screen router before it can expose the legacy
  // scrolling workspace. Sound Quest and Japeak retain their direct routes.
  hub.addEventListener('click',event=>{
    const btn=event.target.closest('[data-cp-action]');if(!btn)return;
    const commands={read:'read',create:'create',targets:'target',challenge:'ncc',quest:'read',teacher:'teacher'};
    const act=commands[btn.dataset.cpAction];if(!act)return;
    event.preventDefault();event.stopPropagation();event.stopImmediatePropagation();action(act);
  },true);
  if(typeof window.editLesson==='function'&&!window.editLesson.__cpPagePatched){
    const original=window.editLesson;
    const wrapper=function(){const value=original.apply(this,arguments);go('create');return value;};
    wrapper.__cpPagePatched=true;window.editLesson=wrapper;
  }

  // Home – preserve existing logo, reuse original SP indicator, remove hero.
  hub.querySelector('.cp-home-illustration')?.remove();
  const strapline=hub.querySelector('.cp-brand-sub');if(strapline)strapline.textContent='AI ENGLISH SHADOWING PLATFORM';
  const controls=hub.querySelector('.cp-header-actions');
  if(controls){
    const w=document.createElement('button');w.type='button';w.className='cp-world-home';
    w.innerHTML='<span>🌍</span><span class="cp-world-text">WORLD COLLECTION</span><span class="cp-sp-count" id="cpWorldSP">0 SP</span>';
    controls.prepend(w);w.addEventListener('click',()=>document.getElementById('btnWorldCollection')?.click());
    const source=document.getElementById('worldCollectionSp');
    const sync=()=>{const t=source?.textContent?.trim();if(t)document.getElementById('cpWorldSP').textContent=t;};
    sync();if(source)new MutationObserver(sync).observe(source,{subtree:true,characterData:true,childList:true});
  }
  const boxes=hub.querySelectorAll('.cp-home-extras .cp-extra');
  if(boxes[0])boxes[0].innerHTML='<h3>◷ 最近の課題</h3><p>この端末の教材・音読履歴</p><div id="cpRecentList" class="cp-recent-list">教材を確認しています…</div>';
  if(boxes[1])boxes[1].innerHTML='<h3>▥ 学習の記録</h3><div class="cp-record-content"><div id="cpProgressRing" class="cp-progress-ring"><div class="cp-progress-core" id="cpProgressNum">0/7日</div></div><div class="cp-record-metrics"><div class="cp-record-stat"><span class="cp-record-stat-label">連続学習</span><strong id="cpStreakText">0日</strong></div><div class="cp-record-stat"><span class="cp-record-stat-label">平均 Accuracy <small>（直近30回）</small></span><strong id="cpAverageAccuracy">—</strong></div><div class="cp-record-stat cp-record-stat-total"><span class="cp-record-stat-label">累計音読</span><strong id="cpLearningTotal">0回</strong></div></div></div>';
  const dateKey=value=>{
    const d=new Date(value);if(!Number.isFinite(d.getTime()))return null;
    return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
  };
  const logTime=log=>{
    const v=log?.timestamp??log?.createdAt??log?.date;
    if(typeof v==='number')return Number.isFinite(v)?v:null;
    if(typeof v==='string'){const n=Date.parse(v);return Number.isFinite(n)?n:null;}
    return null;
  };
  function refreshActivity(){
    let database;try{database=typeof db==='undefined'?null:db;}catch(_){}
    const list=document.getElementById('cpRecentList');if(!list)return;
    if(!database||!database.objectStoreNames.contains('CustomLessons')){
      list.textContent='教材データを読み込んでいます';return;
    }
    try{
      const request=database.transaction('CustomLessons','readonly').objectStore('CustomLessons').getAll();
      request.onsuccess=()=>paint(Array.isArray(request.result)?request.result:[]);
      request.onerror=()=>list.textContent='履歴を読み込めませんでした';
    }catch(_){list.textContent='履歴を読み込めませんでした';}
  }
  function paint(lessons){
    const list=document.getElementById('cpRecentList');if(!list)return;
    list.replaceChildren();
    const recents=lessons.map(lesson=>({lesson,
      latest:Number(lesson.lastPracticed)||Math.max(0,...(Array.isArray(lesson.history)?lesson.history:[]).map(logTime).filter(Boolean))||Number(lesson.createdAt)||0
    })).sort((a,b)=>b.latest-a.latest).slice(0,3);
    if(!recents.length)list.textContent='教材はまだありません';
    else recents.forEach(({lesson})=>{
      const btn=document.createElement('button');btn.type='button';btn.className='cp-recent-row';
      const label=document.createElement('span');label.className='cp-recent-name';label.textContent='📖 '+(lesson.title||'無題の教材');
      const small=document.createElement('small');small.textContent=(lesson.history?.length||0) ? `${lesson.history.length}回音読` : '未学習';
      btn.append(label,small);
      btn.addEventListener('click',()=>{
        go('read');
        if(typeof window.openLibraryFolder==='function')window.openLibraryFolder(lesson.folderId||'__unfiled__');
      });
      list.appendChild(btn);
    });
    const times=lessons.flatMap(l=>Array.isArray(l.history)?l.history.map(logTime).filter(x=>x!=null):[]);
    const days=new Set(times.map(dateKey).filter(Boolean));
    const now=new Date(),dayAt=n=>dateKey(new Date(now.getFullYear(),now.getMonth(),now.getDate()-n));
    let week=0;for(let i=0;i<7;i++)if(days.has(dayAt(i)))week++;
    let streak=0;for(let i=days.has(dayAt(0))?0:1;i<3700;i++){if(!days.has(dayAt(i)))break;streak++;}
    const count=document.getElementById('cpProgressNum');if(count)count.textContent=`${week}/7日`;
    const circle=document.getElementById('cpProgressRing');if(circle)circle.style.setProperty('--cp-progress',Math.round(week/7*100)+'%');
    const streakText=document.getElementById('cpStreakText');if(streakText)streakText.textContent=streak+'日';
    const total=document.getElementById('cpLearningTotal');if(total)total.textContent=times.length+'回';
    // A local, read-only calculation. Copeak stores Accuracy as history[].score (0-100).
    // Exclude entries with no numeric score, rather than reporting a misleading 0%.
    const scored=lessons.flatMap(l=>Array.isArray(l.history)?l.history.map(log=>({
      score:typeof log?.score==='number'?log.score: (typeof log?.score==='string'&&log.score.trim()!==''?Number(log.score):NaN),
      time:logTime(log)
    })):[]).filter(x=>Number.isFinite(x.score)&&x.score>=0&&x.score<=100)
      .sort((a,b)=>(b.time??0)-(a.time??0)).slice(0,30);
    const average=document.getElementById('cpAverageAccuracy');
    if(average)average.textContent=scored.length?(scored.reduce((sum,x)=>sum+x.score,0)/scored.length).toFixed(1)+'%':'—';
  }
  window.CopeakHomePages={open:go,refresh:refreshActivity};
  window.addEventListener('copeak-storage-ready',refreshActivity);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshActivity();});
  window.addEventListener('focus',refreshActivity);
  setTimeout(refreshActivity,450);setTimeout(refreshActivity,1900);
  // Existing Copeak learning and classroom navigation own their screen
  // transitions; only reset our subview when leaving & reentering home.
  let left=false;
  new MutationObserver(()=>{
    const active=home.classList.contains('active')&&home.style.display!=='none';
    if(!active)left=true;
    else if(left){left=false;reader.hidden=true;creator.hidden=true;home.classList.remove('cp-section-mode');refreshActivity();}
  }).observe(home,{attributes:true,attributeFilter:['class','style']});
}
document.addEventListener('click',function(event){if(event.target.closest('#enterCopeakBtn,.copeak-opening-enter-hit')){try{localStorage.setItem('copeak_opening_seen_v1','1')}catch(_){}}},true);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(initCopeakDedicatedPages,0));else setTimeout(initCopeakDedicatedPages,0);
