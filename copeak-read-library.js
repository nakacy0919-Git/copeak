/* Copeak Reading Studio: focused entrance, existing IndexedDB and legacy routes preserved. */
(() => {
  'use strict';
  const DB='CopeakDB', STORE='CustomLessons', FOLDERKEY='copeak_library_folders';
  const FAVKEY='copeak_reader_favorites_v1';
  let page,root,foldersBox,lessonsBox,heading,count,search,sort,questView,legacyList;
  let lessons=[],folder='*',order='recent',query='',favorites=new Set(),initialized=false,timer=0;
  let expanded=false;
  const safe=t=>String(t??'');
  const enc=t=>safe(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const folderData=()=>{try{return typeof window.getLibraryFolders==='function'?window.getLibraryFolders():JSON.parse(localStorage.getItem(FOLDERKEY)||'[]')}catch(_){return []}};
  const countReads=l=>Array.isArray(l.history)?l.history.length:0;
  const lastTime=l=>Number(l.lastPracticed||l.createdAt||0)||0;
  const idOf=l=>String(l.id);
  const isOriginal=l=>Boolean(l.copeakLibrary);
  const belongs=(l,id)=>id==='*'?true:id==='__unfiled__'?!l.folderId:id==='__copeak_original__'?isOriginal(l):String(l.folderId||'')===id;
  const imageSrc=l=>window.CopeakThumbnail?.safeUrl(l.thumbnailDataUrl)||'logo.png';
  function displayName(){
    if(folder==='*')return 'すべての教材';
    if(folder==='__unfiled__')return '未整理';
    return folderData().find(f=>String(f.id)===folder)?.name?.replace(/^📚\s*/,'')||'教材一覧';
  }
  function readAll(){
    return new Promise((resolve,reject)=>{
      // Reuse the authenticated app's existing connection. Never open or create
      // CopeakDB from a presentation layer while the core schema initializes.
      if(typeof db==='undefined'||!db||!db.objectStoreNames.contains(STORE)){resolve([]);return}
      try {
        const tx=db.transaction(STORE,'readonly'),get=tx.objectStore(STORE).getAll();
        get.onsuccess=()=>resolve(get.result||[]);
        get.onerror=()=>reject(get.error);
      } catch(error) {reject(error)}
    });
  }
  function notify(message){if(typeof window.showMsg==='function')window.showMsg(message);else console.info(message)}
  async function refresh(){
    timer=0;if(!initialized)return;
    try{lessons=await readAll();renderFolders();renderLessons()}catch(e){
      console.warn('Copeak Reading Studio',e);
      lessonsBox.textContent='教材を読み込めません。ページを再読み込みしてください。';
    }
  }
  function schedule(){if(timer)clearTimeout(timer);timer=setTimeout(refresh,100)}
  function button(label,cl){const el=document.createElement('button');el.type='button';el.textContent=label;el.className=cl;return el}
  function renderFolders(){
    const all=folderData().filter(x=>x&&x.id);
    const children=all.filter(f=>f.system&&f.id!=='__samples__'&&f.id!=='__copeak_original__');
    const parents=all.filter(f=>!children.includes(f));
    const known=new Set(all.map(f=>String(f.id)));
    if(folder!=='*'&&folder!=='__unfiled__'&&!known.has(folder))folder='*';
    foldersBox.replaceChildren();
    function append(id,name,system=false,child=false){
      const count=lessons.filter(l=>belongs(l,id)).length;
      const row=document.createElement('div');row.className='cp-studio-folder'+(id===folder?' selected':'')+(child?' child':'');
      const pick=button('','cp-studio-folder-main');
      const ico=document.createElement('span');ico.className='cp-studio-folder-ico';ico.textContent='📁';
      const title=document.createElement('span');title.className='cp-studio-folder-name';title.textContent=name;
      const num=document.createElement('span');num.className='cp-studio-folder-num';num.textContent=String(count);
      pick.append(ico,title,num);
      pick.setAttribute('aria-current',String(id===folder));
      pick.addEventListener('click',()=>{
        folder=id;if(id==='__copeak_original__')expanded=!expanded;
        query='';search.value='';renderFolders();renderLessons();
      });
      row.appendChild(pick);
      if(!system&&id!=='*'&&id!=='__unfiled__'){
        const more=button('⋮','cp-studio-folder-more');more.title='フォルダを管理';
        more.addEventListener('click',e=>{
          e.stopPropagation();
          const n=prompt('フォルダ操作: 1 名前変更 / 2 削除 / 3 上へ移動 / 4 下へ移動','1');
          if(n==='1'&&typeof window.renameLibraryFolder==='function')window.renameLibraryFolder(e,id);
          if(n==='2'&&typeof window.deleteLibraryFolder==='function')window.deleteLibraryFolder(e,id);
          if(n==='3'||n==='4'){
            const fs=folderData(),i=fs.findIndex(f=>String(f.id)===id);
            let j=i+(n==='3'?-1:1);
            while(j>=0&&j<fs.length&&fs[j].system)j+=(n==='3'?-1:1);
            if(i>=0&&j>=0&&j<fs.length){
              [fs[i],fs[j]]=[fs[j],fs[i]];
              window.saveLibraryFolders?.(fs);
            }
          }
          schedule();
        });
        row.appendChild(more);
      }
      if(!['*','__copeak_original__'].includes(id)){
        row.addEventListener('dragover',e=>{e.preventDefault();row.classList.add('drop-target')});
        row.addEventListener('dragleave',()=>row.classList.remove('drop-target'));
        row.addEventListener('drop',e=>{
          e.preventDefault();row.classList.remove('drop-target');
          const dragged=e.dataTransfer.getData('text/plain');
          if(dragged)moveLesson(dragged,id==='__unfiled__'?null:id);
        });
      }
      foldersBox.appendChild(row);
    }
    append('*','すべての教材',true);
    for(const f of parents)append(String(f.id),safe(f.name).replace(/^📚\s*/,''),Boolean(f.system));
    if(children.length&&!parents.some(x=>x.id==='__copeak_original__'))append('__copeak_original__','Copeak Original教材',true);
    if(expanded||children.some(x=>String(x.id)===folder)){
      for(const f of children)append(String(f.id),safe(f.name),true,true);
    }
    append('__unfiled__','未整理',true);
  }
  async function moveLesson(value,target){
    const id=Number(value);if(!Number.isSafeInteger(id))return;
    try{
      await new Promise((resolve,reject)=>{
        if(typeof db==='undefined'||!db){reject(new Error('IndexedDB not ready'));return}
        const tx=db.transaction(STORE,'readwrite'),store=tx.objectStore(STORE),get=store.get(id);
        get.onsuccess=()=>{if(get.result){get.result.folderId=target;store.put(get.result)}};
        tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);
      });
      notify('📁 教材を移動しました');schedule();
      if(typeof window.loadSavedLessons==='function')window.loadSavedLessons();
    }catch(e){console.warn(e);notify('⚠ フォルダへ移動できませんでした')}
  }
  function moveDialog(l){
    const fs=folderData().filter(f=>f.id!=='__copeak_original__');
    const options=fs.map((f,i)=>String(i+1)+'：'+f.name).join('\n');
    const raw=prompt('移動先の番号を入力\n0：未整理\n'+options,'0');
    if(raw===null)return;
    const n=Number(raw),id=n===0?null:fs[n-1]?.id;
    if(!Number.isInteger(n)||(n!==0&&!id))return;
    moveLesson(l.id,id);
  }
  function renderLessons(){
    const filtered=lessons.filter(l=>belongs(l,folder));
    const term=query.trim().toLocaleLowerCase();
    let items=filtered.filter(l=>!term||[l.title,l.eng,l.type,...(l.tags||[])].some(s=>safe(s).toLocaleLowerCase().includes(term)));
    if(order==='favorites')items=items.filter(l=>favorites.has(idOf(l)));
    else if(order==='popular')items.sort((a,b)=>countReads(b)-countReads(a)||lastTime(b)-lastTime(a));
    else if(order==='new')items.sort((a,b)=>(Number(b.createdAt)||0)-(Number(a.createdAt)||0));
    else items.sort((a,b)=>lastTime(b)-lastTime(a));
    heading.textContent=displayName();
    count.textContent=items.length.toLocaleString('ja-JP')+'件';
    lessonsBox.replaceChildren();
    if(!items.length){
      const empty=document.createElement('div');empty.className='cp-studio-empty';
      empty.innerHTML='<span>📖</span><strong>該当する教材がありません</strong><small>フォルダや検索条件を変えてみてください</small>';
      lessonsBox.appendChild(empty);return;
    }
    for(const lesson of items){
      const row=document.createElement('div');row.className='cp-studio-item';
      row.draggable=true;
      row.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',idOf(lesson));e.dataTransfer.effectAllowed='move'});
      const thumbnail=document.createElement('img');thumbnail.className='cp-studio-thumbnail';
      thumbnail.alt='';thumbnail.loading='lazy';thumbnail.src=imageSrc(lesson);
      if(thumbnail.src.endsWith('/logo.png'))thumbnail.classList.add('is-fallback');
      thumbnail.onerror=()=>{thumbnail.onerror=null;thumbnail.src='logo.png';thumbnail.classList.add('is-fallback')};
      const info=document.createElement('div');info.className='cp-studio-item-info';
      const name=document.createElement('strong');name.className='cp-studio-item-name';name.textContent=safe(lesson.title||'無題の教材');
      const badges=document.createElement('div');badges.className='cp-studio-badges';
      [lesson.levelLabel||lesson.cefr,lesson.type==='dialogue'?'会話':lesson.tags?.[0]||'音読',String(countReads(lesson))+'回音読'].filter(Boolean).forEach(v=>{
        const badge=document.createElement('span');badge.textContent=safe(v);badges.append(badge);
      });
      info.append(name,badges);
      const fav=button(favorites.has(idOf(lesson))?'★':'☆','cp-studio-item-fav');
      fav.title='お気に入り';fav.setAttribute('aria-label','お気に入り');
      fav.addEventListener('click',()=>{
        const k=idOf(lesson);if(favorites.has(k))favorites.delete(k);else favorites.add(k);
        try{localStorage.setItem(FAVKEY,JSON.stringify([...favorites]))}catch(_){}
        renderLessons();
      });
      const more=button('⋮','cp-studio-item-more');more.title='編集・移動';
      more.addEventListener('click',e=>{
        const choice=prompt('教材操作: 1 フォルダ移動 / 2 教材編集','1');
        if(choice==='1'&&typeof window.openMoveLessonModal==='function')window.openMoveLessonModal(e,lesson.id);
        else if(choice==='1')moveDialog(lesson);
        else if(choice==='2'&&typeof window.editLesson==='function')window.editLesson(e,lesson.id);
      });
      const play=button('▶','cp-studio-item-play');play.title='教材を開いて音読';
      const start=()=>{if(typeof window.startCustomLesson==='function')window.startCustomLesson(lesson);else notify('音読画面を開けませんでした')};
      play.addEventListener('click',start);row.addEventListener('dblclick',start);
      row.append(thumbnail,info,fav,more,play);lessonsBox.appendChild(row);
    }
  }
  function setMode(mode){
    root.dataset.studioMode=mode;
    root.querySelectorAll('[data-studio-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.studioCategory===mode)));
    questView.hidden=mode!=='quest';
    if(mode==='library')schedule();
  }
  function mount(){
    if(initialized)return;
    page=document.getElementById('cpReaderPage');
    const scroll=page?.querySelector('.cp-page-scroll');
    legacyList=document.getElementById('savedLessonsList');
    if(!scroll||!legacyList){setTimeout(mount,100);return;}
    initialized=true;page.classList.add('cp-studio-enabled');
    root=document.createElement('section');root.id='cpReadingStudio';root.dataset.studioMode='library';
    root.innerHTML=[
      '<div class="cp-studio-hero"><div class="cp-studio-eyebrow">READ · PRACTICE</div><h1>音読教材をよむ</h1><p>英語の世界へ、声を出して踏み出そう</p></div>',
      '<div class="cp-studio-categories">',
      '<button type="button" data-studio-category="library" aria-pressed="true" class="cp-studio-category blue"><i>📖</i><span><strong>通常の音読教材</strong><small>ニュース・エッセイ・スピーチ</small></span><b>›</b></button>',
      '<a href="./story-theater.html" class="cp-studio-category teal"><i>🎬</i><span><strong>Story Theater</strong><small>物語を楽しみながら音読</small></span><b>›</b></a>',
      '<button type="button" data-studio-category="quest" aria-pressed="false" class="cp-studio-category gold"><i>🏆</i><span><strong>Copeak Quest</strong><small>発音・表現・流暢さに挑戦</small></span><b>›</b></button>',
      '</div><div class="cp-studio-grid">',
      '<aside class="cp-studio-panel cp-studio-folder-panel"><div class="cp-studio-panel-head"><h2>📁 フォルダ</h2><button type="button" id="cpStudioAddFolder">＋ フォルダを作成</button></div><div id="cpStudioFolders" class="cp-studio-scroll"></div><p class="cp-studio-folder-hint">フォルダを選択すると中央の教材が切り替わります</p></aside>',
      '<section class="cp-studio-panel cp-studio-list-panel"><div class="cp-studio-panel-head cp-studio-list-toolbar"><h2>📚 <span id="cpStudioFolderName">すべての教材</span> <small id="cpStudioTotal"></small></h2><div class="cp-studio-filter-controls"><input id="cpStudioSearch" type="search" placeholder="⌕ 教材を検索" aria-label="教材検索"><select id="cpStudioSort" aria-label="並び替え"><option value="recent">最近読んだ順</option><option value="new">新着順</option><option value="popular">人気順</option><option value="favorites">お気に入り</option></select></div></div><div id="cpStudioItems" class="cp-studio-scroll" aria-live="polite"></div></section>',
      '<aside class="cp-studio-panel cp-studio-side-panel"><div class="cp-studio-panel-head"><h2>⚡ クイックアクション</h2></div>',
      '<button data-studio-quick="guide" type="button" class="cp-studio-side-card featured"><i>📖</i><span><strong>はじめての音読ガイド</strong><small>4つの練習モードを紹介</small></span><b>›</b></button>',
      '<button data-studio-quick="popular" type="button" class="cp-studio-side-card"><i>☆</i><span><strong>人気の教材</strong><small>音読回数の多い順</small></span><b>›</b></button>',
      '<button data-studio-quick="new" type="button" class="cp-studio-side-card"><i>🚀</i><span><strong>新着教材</strong><small>最近追加された教材</small></span><b>›</b></button>',
      '<button data-studio-quick="search" type="button" class="cp-studio-side-card"><i>⌕</i><span><strong>教材を探す</strong><small>教材名と本文から検索</small></span><b>›</b></button>',
      '<button data-studio-quick="create" type="button" class="cp-studio-side-card"><i>＋</i><span><strong>教材を作る</strong><small>新しい教材を登録</small></span><b>›</b></button></aside></div>',
      '<section class="cp-studio-quest" id="cpStudioQuestView" hidden><h2>🏆 Copeak Quest</h2><p>挑戦するミッションを選ぼう</p><div id="cpStudioQuestList"></div></section>'
    ].join('');
    scroll.prepend(root);
    [...scroll.children].filter(node=>node!==root).forEach(n=>n.classList.add('cp-studio-legacy'));
    const q=document.getElementById('cpReadQuest');
    questView=root.querySelector('#cpStudioQuestView');
    if(q)root.querySelector('#cpStudioQuestList').appendChild(q);
    foldersBox=root.querySelector('#cpStudioFolders');lessonsBox=root.querySelector('#cpStudioItems');
    heading=root.querySelector('#cpStudioFolderName');count=root.querySelector('#cpStudioTotal');
    search=root.querySelector('#cpStudioSearch');sort=root.querySelector('#cpStudioSort');
    search.addEventListener('input',()=>{query=search.value;renderLessons()});
    sort.addEventListener('change',()=>{order=sort.value;renderLessons()});
    root.querySelector('#cpStudioAddFolder').addEventListener('click',()=>{window.createLibraryFolder?.();schedule()});
    root.querySelector('[data-studio-category="library"]').addEventListener('click',()=>setMode('library'));
    root.querySelector('[data-studio-category="quest"]').addEventListener('click',()=>setMode('quest'));
    root.querySelectorAll('[data-studio-quick]').forEach(b=>b.addEventListener('click',()=>{
      const k=b.dataset.studioQuick;
      if(k==='guide')window.location.href='./copeak-guide.html';
      else if(k==='create')window.CopeakHomePages?.open('create');
      else {setMode('library');folder='*';query='';search.value='';
        if(k==='search'){search.focus();return}
        order=k==='popular'?'popular':'new';sort.value=order;renderFolders();renderLessons();}
    }));
    try{favorites=new Set(JSON.parse(localStorage.getItem(FAVKEY)||'[]').map(String))}catch(_){}
    new MutationObserver(schedule).observe(legacyList,{childList:true});
    new MutationObserver(()=>{
      document.getElementById('homeScreen')?.classList.toggle('cp-reader-active',!page.hidden);
      if(!page.hidden)schedule();
    }).observe(page,{attributes:true,attributeFilter:['hidden']});
    document.getElementById('homeScreen')?.classList.toggle('cp-reader-active',!page.hidden);
    window.addEventListener('copeak-storage-ready',schedule);
    window.addEventListener('focus',()=>{if(!page.hidden)schedule()});
    refresh();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(mount,80));
  else setTimeout(mount,80);
})();