/* Japeak V4 UI layer. Stage 1–3 learning, scoring, searching and favorites remain untouched. */
(function () {
  'use strict';
  const T=window.JapeakV4Taxonomy;
  if (!T) return;
  const inMenu=!!document.getElementById('gate-container');
  const inHome=!!document.querySelector('.jpk-v4-home');
  if(!inMenu&&!inHome) return;
  const params=new URLSearchParams(location.search);
  const schoolCategories=[
    ['school_life','🎒','学校生活'],['school_life_conversation','🗣️','友だちとの会話'],
    ['class_time','✏️','授業'],['health_clinic','🏥','保健室'],
    ['lunch_time','🍱','給食・お弁当'],['break_time','⚽','休み時間'],
    ['clubs_committees','🏃','部活動'],['teachers_room','👨‍🏫','職員室'],
    ['commuting','🚶','登下校'],['troubles','🆘','困りごと'],
    ['school_events','🎊','学校行事'],['school_office','🏢','事務室'],
    ['student_paragraphs','🧑‍🎓','生徒の文章'],['parent_paragraphs','👪','保護者の連絡']
  ];
  const words={
    ja:{title:'どんな場面で話しますか？',school:'学校で話そう',life:'暮らしで話そう',level:'日本語レベル',domain:'生活カテゴリー',search:'場面を検索',all:'すべて',count:'件の場面',close:'閉じる',choose:'このカテゴリーを見る',starter:'入門'},
    en:{title:'Where would you like to practice?',school:'School Japanese',life:'Japanese for daily life',level:'Japanese level',domain:'Situation',search:'Search situations',all:'All',count:'situations',close:'Close',choose:'Browse this category',starter:'Starter'},
    pt:{title:'Onde você quer praticar?',school:'Na escola',life:'Vida cotidiana',level:'Nível',domain:'Situação',search:'Buscar situações',all:'Todos',count:'situações',close:'Fechar',choose:'Abrir categoria',starter:'Iniciante'},
    es:{title:'¿Dónde quieres practicar?',school:'En la escuela',life:'Vida diaria',level:'Nivel',domain:'Situación',search:'Buscar situaciones',all:'Todas',count:'situaciones',close:'Cerrar',choose:'Ver categoría',starter:'Inicial'},
    vi:{title:'Bạn muốn luyện tập ở đâu?',school:'Trường học',life:'Đời sống',level:'Trình độ',domain:'Tình huống',search:'Tìm tình huống',all:'Tất cả',count:'tình huống',close:'Đóng',choose:'Xem danh mục',starter:'Cơ bản'},
    ko:{title:'어디에서 연습할까요?',school:'학교',life:'일상생활',level:'수준',domain:'상황',search:'상황 검색',all:'전체',count:'상황',close:'닫기',choose:'선택',starter:'입문'},
    'zh-CN':{title:'想练习什么场景？',school:'学校',life:'日常生活',level:'级别',domain:'场景',search:'搜索场景',all:'全部',count:'个场景',close:'关闭',choose:'查看类别',starter:'入门'},
    'zh-TW':{title:'想練習什麼場景？',school:'學校',life:'日常生活',level:'級別',domain:'情境',search:'搜尋情境',all:'全部',count:'個情境',close:'關閉',choose:'查看類別',starter:'入門'}
  };
  function lang(){if(inMenu&&typeof menuLang!=='undefined')return menuLang;try{return localStorage.getItem('japeakLang')||'en'}catch(e){return'en'}}
  function tx(){return words[lang()]||words.en}
  function localText(item){return lang()==='ja' ? item.ja : (item[lang()]||item.en||item.ja)}
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  let mode='life',level='all',domain='all',query='',focusReturn=null;
  let activeSelection=null;
  const overlay=document.createElement('div');
  overlay.className='jpk-v4-overlay';overlay.hidden=true;overlay.id='jpk-v4-overlay';
  overlay.innerHTML='<section class="jpk-v4-dialog" role="dialog" aria-modal="true" aria-labelledby="jpk-v4-title" tabindex="-1">'+
    '<div class="jpk-v4-dialog-head"><h2 id="jpk-v4-title"></h2><button type="button" class="jpk-v4-close" aria-label="Close">×</button></div>'+
    '<div class="jpk-v4-dialog-filters"><div class="jpk-v4-legend" id="jpk-v4-level-label"></div><div class="jpk-v4-chips" id="jpk-v4-levels" data-kind="level"></div>'+
    '<div class="jpk-v4-legend" id="jpk-v4-domain-label"></div><div class="jpk-v4-chips" id="jpk-v4-domains" data-kind="domain"></div>'+
    '<input id="jpk-v4-search" class="jpk-v4-search" type="search" autocomplete="off" aria-label="Search scenes"></div>'+
    '<div class="jpk-v4-results" id="jpk-v4-results"></div><div class="jpk-v4-count" id="jpk-v4-count"></div></section>';
  document.body.appendChild(overlay);
  const $=id=>document.getElementById(id);
  const dialog=overlay.querySelector('.jpk-v4-dialog');
  const input=$('jpk-v4-search');
  let oldBodyOverflow='';
  function setupChips(id,items,selected,onChange){
    const root=$(id);root.replaceChildren();
    items.forEach(item=>{
      const b=document.createElement('button');b.type='button';b.className='jpk-v4-chip';
      b.textContent=(item.icon?item.icon+' ':'')+localText(item);
      b.setAttribute('aria-pressed',String(item.id===selected));
      b.addEventListener('click',()=>onChange(item.id));root.appendChild(b);
    });
  }
  function hrefFor(cat,course){return 'japeak-menu.html?mode='+encodeURIComponent(course)+'&cat='+encodeURIComponent(cat)}
  function sceneRows(){
    if(mode==='school') {
      const data=inMenu && typeof allJapeakData!=='undefined'
        ? schoolCategories.filter(x=>allJapeakData.some(y=>y.category===x[0])) : schoolCategories;
      return data.map(x=>({key:x[0],name:(inMenu&&typeof categoryTranslations!=='undefined'&&categoryTranslations[x[0]])
         ? (categoryTranslations[x[0]][lang()]||categoryTranslations[x[0]].en||categoryTranslations[x[0]].ja_ruby) : x[2],
        icon:x[1],level:'all',domain:'school'}));
    }
    if(!inMenu||typeof lifeMasterData==='undefined') return [];
    return T.makeScenes(lifeMasterData).filter(s=>(level==='all'||s.level===level)&&(domain==='all'||s.domain===domain)&&
      (!query||(s.name+' '+s.key+' '+localText(T.domains.find(d=>d.id===s.domain)||T.domains[0])).toLocaleLowerCase().includes(query)));
  }
  function updateSelectionSummary(){
    const phrasePanel=$('phrase-panel');
    const summary=$('jpk-v4-selected-summary');
    if(phrasePanel)phrasePanel.hidden=!activeSelection;
    if(summary){
      summary.hidden=!activeSelection;
      summary.textContent=activeSelection ? '✓ '+activeSelection.name : '';
    }
  }

  function render(){
    const w=tx();
    $('jpk-v4-title').textContent=w.title;
    $('jpk-v4-level-label').textContent=w.level;
    $('jpk-v4-domain-label').textContent=w.domain;
    input.placeholder=w.search;
    $('jpk-v4-level-label').hidden=(mode==='school');
    $('jpk-v4-domain-label').hidden=(mode==='school');
    $('jpk-v4-levels').hidden=(mode==='school');$('jpk-v4-domains').hidden=(mode==='school');
    setupChips('jpk-v4-levels',T.levels,level,x=>{level=x;render()});
    setupChips('jpk-v4-domains',T.domains,domain,x=>{domain=x;render()});
    const panel=$('jpk-v4-results');panel.replaceChildren();
    const grid=document.createElement('div');grid.className='jpk-v4-result-grid';
    let rows=sceneRows();
    if(mode==='school'&&query)rows=rows.filter(row=>(row.name+' '+row.key).toLocaleLowerCase().includes(query));
    if(mode==='life'&&!inMenu){
      // Top page intentionally routes to the real dataset on the menu page.
      rows=T.domains.filter(d=>d.id!=='all'&&(domain==='all'||d.id===domain))
        .filter(d=>!query||(d.ja+' '+d.en).toLocaleLowerCase().includes(query))
        .map(d=>({key:d.id,name:localText(d),icon:d.icon,domain:d.id}));
    }
    rows.forEach(item=>{
      const a=document.createElement(inMenu?'button':'a');
      a.className='jpk-v4-result';
      const icon=item.icon||T.domains.find(d=>d.id===item.domain)?.icon||'🗣️';
      a.innerHTML='<span>'+esc(icon)+'　'+esc(item.name)+'</span><span aria-hidden="true">›</span>';
      if(inMenu){
        a.type='button';
        a.addEventListener('click',()=>{
          close();
          activeSelection=item;
          const phrasePanel=$('phrase-panel');
          if(phrasePanel)phrasePanel.hidden=false;
          updateSelectionSummary();
          if(mode==='school'){
            selectedCategory=item.key;
            if(typeof renderCategories==='function')renderCategories();
            if(typeof renderPhraseList==='function')renderPhraseList(item.key);
            if(typeof scrollToPhraseArea==='function')scrollToPhraseArea();
          }else if(typeof window.loadJapeakCategory==='function'){
            window.loadJapeakCategory(item.key,item.name);
          }
        });
      }else if(mode==='school') a.href=hrefFor(item.key,'school');
      else a.href='japeak-menu.html?mode=life&level='+encodeURIComponent(level)+'&domain='+encodeURIComponent(item.domain);
      grid.appendChild(a);
    });
    if(!rows.length)panel.innerHTML='<p class="jpk-v4-empty">No matching situations / 見つかりませんでした</p>';
    else panel.appendChild(grid);
    $('jpk-v4-count').textContent=rows.length+' '+w.count;
  }
  function open(type,initial){
    mode=type==='school'?'school':'life';
    level=(initial&&T.levels.some(v=>v.id===initial.level))?initial.level:'all';
    domain=(initial&&T.domains.some(v=>v.id===initial.domain))?initial.domain:'all';
    query='';input.value='';
    focusReturn=document.activeElement;oldBodyOverflow=document.body.style.overflow;
    overlay.hidden=false;document.body.style.overflow='hidden';
    render();dialog.focus();
  }
  function close(){
    overlay.hidden=true;document.body.style.overflow=oldBodyOverflow;
    if(focusReturn&&document.contains(focusReturn))focusReturn.focus();
  }
  overlay.querySelector('.jpk-v4-close').addEventListener('click',close);
  overlay.addEventListener('click',e=>{if(e.target===overlay)close()});
  document.addEventListener('keydown',e=>{
    if(overlay.hidden)return;
    if(e.key==='Escape'){e.preventDefault();close();return}
    if(e.key==='Tab'){
      const nodes=[...overlay.querySelectorAll('button:not([disabled]),a[href],input:not([disabled])')].filter(n=>n.offsetParent!==null);
      if(!nodes.length)return;
      if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes[nodes.length-1].focus()}
      else if(!e.shiftKey&&document.activeElement===nodes[nodes.length-1]){e.preventDefault();nodes[0].focus()}
    }
  });
  input.addEventListener('input',()=>{query=input.value.trim().toLocaleLowerCase();render();input.focus()});
  if(inMenu){
    // Wrap only public navigation; do not touch stage-3 renderers, scores, or lesson IDs.
    const oldEnter=window.enterWorkspace;
    let initialDeepLinkSkip=params.has('cat');
    window.enterWorkspace=function(course){
      mode=course==='school'?'school':'life';
      const direct=initialDeepLinkSkip;
      initialDeepLinkSkip=false;
      activeSelection=null;
      oldEnter(course);
      if(direct){
        const key=params.get('cat');
        const matched=mode==='school' ? schoolCategories.find(x=>x[0]===key) :
           T.makeScenes(lifeMasterData).find(x=>x.key===key);
        if(matched)activeSelection={key,name:matched.name||matched[2]||key};
        updateSelectionSummary();
        return;
      }
      updateSelectionSummary();
      open(course,{level:params.get('level'),domain:params.get('domain')});
    };
    const oldSetLang=window.setJapeakMenuLanguage;
    if(typeof oldSetLang==='function')window.setJapeakMenuLanguage=function(code){
      const res=oldSetLang(code);if(!overlay.hidden)render();return res;
    };
    document.addEventListener('DOMContentLoaded',()=>{
      for(const course of ['school','life']){
        const host=$('area-'+course);if(!host)continue;
        const b=document.createElement('button');b.type='button';
        b.textContent=course==='school' ? '🏫 '+tx().choose : '🏘️ '+tx().choose;
        b.className='jpk-v4-reopen';b.addEventListener('click',()=>open(course));
        host.prepend(b);
      }
      const summary=document.createElement('p');
      summary.id='jpk-v4-selected-summary';
      summary.className='jpk-v4-selected-summary';
      summary.hidden=true;
      const panel=$('phrase-panel');
      if(panel){panel.parentNode?.insertBefore(summary,panel);if(!params.has('cat'))panel.hidden=true;}
      if(params.has('mode')){
        const back=$('btn-back-to-course');
        if(back){
          back.textContent=lang()==='ja' ? '← ホームに戻る' : '← Back to home';
          back.addEventListener('click',event=>{
            event.preventDefault();event.stopImmediatePropagation();
            window.location.href='japeak-top.html';
          },true);
        }
      }
      // Existing category lists remain in DOM for compatibility, but the new modal owns navigation.
      document.body.classList.add('jpk-v4-enhanced');
    });
  }else{
    document.querySelectorAll('.start-btn').forEach(a=>{
      const course=a.classList.contains('start-school')?'school':'life';
      a.addEventListener('click',e=>{e.preventDefault();open(course)});
    });
    const choose=document.getElementById('jpk-v4-lang');
    if(choose){
      T.languages.forEach(it=>{const op=document.createElement('option');op.value=it.code;op.textContent=it.name;choose.appendChild(op)});
      choose.value=lang();
      choose.addEventListener('change',()=>{
        try{localStorage.setItem('japeakLang',choose.value)}catch(e){}
        if(!overlay.hidden)render();
      });
    }
    const photograph=document.querySelector('.jpk-v4-photo img');
    if(photograph){
      const failed=()=>document.querySelector('.jpk-v4-home')?.classList.add('jpk-v4-photo-error');
      photograph.addEventListener('error',failed);
      if(photograph.complete && photograph.naturalWidth===0)failed();
    }
    // Use a fixed small particle set rather than re-rendering or animation in JS.
    const atmosphere=document.createElement('div');atmosphere.className='jpk-v4-atmosphere';atmosphere.setAttribute('aria-hidden','true');
    document.querySelector('.jpk-v4-home').appendChild(atmosphere);
    const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!reduced)for(let i=0;i<23;i++){
      const x=document.createElement('i');const isPetal=i<13;x.className=isPetal?'jpk-v4-petal':'jpk-v4-mote';
      x.style.left=((i*41+11)%96)+'%';x.style.top= isPetal?'0':((i*29+17)%94)+'%';
      x.style.setProperty('--t',(10+i%9)+'s');x.style.setProperty('--delay',-(i*1.8)+'s');
      x.style.setProperty('--size',(5+i%6)+'px');atmosphere.appendChild(x);
    }
  }
  window.JapeakV4Ui={open,close,render};
})();
