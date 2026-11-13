/* Copeak Study Entrance Reading Studio. Each lesson is authored, sourced, and reviewed individually. */
(()=>{'use strict';
const $=id=>document.getElementById(id);
const practiceEngine=window.CopeakReadingPractice;
const questionSelector=window.CopeakReadingQuestionCount;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const escapeXml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&apos;'}[c])).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g,'');
const state={manifest:null,sets:[],lesson:null,category:'all',level:'all',showAll:false,support:false,lookupEnabled:true,answers:{},clozeAnswers:{},vocabIndex:0,vocabChoice:null,vocabOrder:[],panel:'questions',exercise:null,graded:false,gradingMode:'immediate',gradingChosen:false,questionCount:0,questionIds:[],questionCountChosen:false,activeQuestionId:null,practice:{},quizCursor:{}};
const label=(id,collection)=>collection.find(x=>x.id===id)?.label||id;
const status=s=>{$('loadStatus').textContent=s;};
const words=lesson=>lesson.paragraphs.flatMap(p=>p.sentences).map(s=>s.en).join(' ').trim().split(/\s+/).filter(Boolean).length;
const readProgress=id=>{
 try{
  const data=JSON.parse(localStorage.getItem('copeak-reading-'+id)||'{}');
  if(!data||typeof data!=='object'||Array.isArray(data))return {};
  const cleanAnswers=value=>{
   const result=Object.create(null);
   if(!value||typeof value!=='object'||Array.isArray(value))return result;
   for(const [key,answer] of Object.entries(value).slice(0,200)){
    if(/^[A-Za-z0-9:_-]{1,80}$/.test(key)&&Number.isInteger(answer)&&answer>=0&&answer<=3)result[key]=answer;
   }
   return result;
  };
  const practice=Object.create(null),allowed=new Set(['questions','vocab:en-ja','vocab:ja-en','vocab:definition','grammar','discourse','paraphrase','cloze']);
  if(data.practice&&typeof data.practice==='object'&&!Array.isArray(data.practice)){
   for(const [key,value] of Object.entries(data.practice)){
    if(!allowed.has(key)||!value||typeof value!=='object'||Array.isArray(value))continue;
    practice[key]={
     answers:cleanAnswers(value.answers),
     runs:Number.isInteger(value.runs)?Math.max(0,Math.min(value.runs,100000)):0,
     best:Number.isFinite(value.best)?Math.max(0,Math.min(value.best,100)):0,
     finished:value.finished===true,
     migrated:value.migrated===true
    };
   }
  }
  const questionIds=Array.isArray(data.questionIds)?[...new Set(data.questionIds.filter(x=>typeof x==='string'&&/^[A-Za-z0-9:_-]{1,80}$/.test(x)))].slice(0,10):[];
  const questionCount=Number.isInteger(data.questionCount)&&data.questionCount>=1&&data.questionCount<=10?data.questionCount:0;
  return {answers:cleanAnswers(data.answers),clozeAnswers:cleanAnswers(data.clozeAnswers),graded:data.graded===true,practice,questionIds,questionCount};
 }catch{return {};}
};
const saveProgress=()=>{
 if(!state.lesson)return;
 try{
  localStorage.setItem('copeak-reading-'+state.lesson.id,JSON.stringify({answers:state.answers,clozeAnswers:state.clozeAnswers,graded:state.graded,practice:state.practice,questionIds:state.questionIds,questionCount:state.questionCount}));
  const warn=$('storageStatus');if(warn)warn.hidden=true;
 }catch{
  const warn=$('storageStatus');
  if(warn){warn.hidden=false;warn.textContent='この端末では学習記録を保存できません。空き容量やプライベートブラウズ設定を確認してください。';}
 }
};
const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;};
function renderCatalog(){
 const m=state.manifest;if(!m)return;
 $('categoryFilter').innerHTML='<option value="all">すべての分野</option>'+m.categories.map(c=>'<option value="'+esc(c.id)+'">'+esc(c.id+' '+c.label)+'</option>').join('');
 $('levelFilter').innerHTML='<option value="all">すべてのレベル</option>'+m.levels.map(l=>'<option value="'+esc(l.id)+'">'+esc(l.label)+'</option>').join('');
 $('categoryFilter').value=state.category;$('levelFilter').value=state.level;
 $('categoryGrid').innerHTML=m.categories.map(c=>{
 const count=state.sets.filter(s=>s.category_id===c.id).length;
 return '<button type="button" data-category="'+esc(c.id)+'" title="'+esc(c.label)+'　'+count+' / 30" class="'+(state.category===c.id?'active':'')+'"><span class="cat-icon">'+esc(c.icon)+'</span><span>'+esc(c.id+' '+c.label)+'</span><small>'+count+' / 30</small></button>';
 }).join('');
 $('catalogProgress').textContent=state.sets.length+' / '+m.categories.reduce((n,c)=>n+c.target,0)+' 収録済み';
 $('categoryGrid').querySelectorAll('[data-category]').forEach(btn=>btn.addEventListener('click',()=>{
  const next=btn.dataset.category;state.category=state.category===next?'all':next;$('categoryFilter').value=state.category;
  renderCatalog();renderSetList();
 }));
 renderSetList();
}
function renderSetList(){
 const list=state.sets.filter(s=>(state.category==='all'||s.category_id===state.category)&&(state.level==='all'||(s.level_ids||[s.level_id]).includes(state.level)));
 $('availableCount').textContent='('+list.length+'件)';
 $('setList').innerHTML=list.length?list.map(s=>{
 const cat=label(s.category_id,state.manifest.categories),lvl=(s.level_ids||[s.level_id]).map(id=>label(id,state.manifest.levels)).join(' / ');
 const score=readProgress(s.id).answers||{};const done=Object.keys(score).length;
 return '<button type="button" role="listitem" data-set="'+esc(s.id)+'" class="'+(state.lesson?.id===s.id?'active':'')+'"><strong>'+esc(s.title)+'</strong><small>'+esc(cat)+' · '+esc(lvl)+' · '+s.word_count+'語 · 回答 '+done+'/'+s.questions.length+'</small></button>';
 }).join(''):'<p class="empty">この条件の長文はまだ準備中です。他のレベル・分野をご覧ください。</p>';
 $('setList').querySelectorAll('[data-set]').forEach(b=>b.addEventListener('click',()=>selectLesson(b.dataset.set)));
}
/* Full-page browsing: category → level → original passage. */
const browseState={step:'category',category:null,level:null};
const browseAvailable=(category,level)=>state.sets.filter(x=>
 (!category||x.category_id===category)&&(!level||(x.level_ids||[x.level_id]).includes(level)));
function browseCard(id,title,description,info,number,disabled,icon=''){
 return '<button class="browse-card'+(disabled?' is-unavailable':'')+'" type="button" data-browse-pick="'+esc(id)+'" '+(disabled?'disabled':'')+'>'+
 '<span class="browse-number'+(icon?' browse-icon':'')+'" aria-hidden="true">'+esc(icon||number)+'</span>'+
 '<span class="browse-card-content"><strong>'+esc(title)+'</strong><small>'+esc(description)+'</small></span>'+
 '<span class="browse-card-info">'+esc(info)+'</span></button>';
}
function renderBrowse(){
 if(!state.manifest)return;
 const step=browseState.step,category=browseState.category,level=browseState.level;
 const cLabel=category?label(category,state.manifest.categories):'';
 const lLabel=level?label(level,state.manifest.levels):'';
 const head=step==='category'?'15分野から選ぶ':step==='level'?cLabel+'：レベルを選ぶ':'読みたい長文を選ぶ';
 $('browseHeading').textContent=head;
 $('readingBrowse').dataset.step=step;
 $('browseStepLabel').textContent='STEP '+(step==='category'?1:step==='level'?2:3)+' / 3';
 $('browseDescription').textContent=step==='category'?'分野を選択':step==='level'?'レベルを選択':'';
 $('browseDescription').hidden=step==='article';
 const crumbs=[{name:'15分野',step:'category'}];
 if(step!=='category')crumbs.push({name:cLabel,step:'level'});
 if(step==='article')crumbs.push({name:lLabel,step:'article'});
 $('browseBreadcrumbs').innerHTML=crumbs.map((c,i)=>i===crumbs.length-1?'<span aria-current="step">'+esc(c.name)+'</span>':
  '<button type="button" data-browse-step="'+esc(c.step)+'">'+esc(c.name)+'</button><span class="browse-divider">/</span>').join('');
 let html='';
 if(step==='category'){
  $('browseCards').className='browse-cards browse-categories';
  html=state.manifest.categories.map((c,i)=>{
   const total=browseAvailable(c.id).length;
   return browseCard(c.id,c.label,c.id+' · '+(total?'収録済み教材があります':'教材準備中'),total?total+' セット':'準備中',
    String(i+1).padStart(2,'0'),false,c.icon||'📚');
  }).join('');
 }else if(step==='level'){
  $('browseCards').className='browse-cards browse-levels';
  html=state.manifest.levels.map((l,i)=>{
   const total=browseAvailable(category,l.id).length;
   return browseCard(l.id,l.label,l.words.join('–')+'語 · 目安 '+l.minutes.join('–')+'分',
    total?total+' セット':'準備中',String(i+1).padStart(2,'0'),!total,['📗','📘','📙','📕','🏫','🏛️','🎓'][i]||'📖');
  }).join('');
 }else{
  $('browseCards').className='browse-cards browse-articles';
  html=browseAvailable(category,level).map((item,i)=>{
   const done=Object.keys(readProgress(item.id).answers||{}).length;
   return browseCard(item.id,item.title_ja||item.title,
    item.title+' · '+item.word_count+' words · '+item.questions.length+' 問',
    '回答 '+done+'/'+item.questions.length,String(i+1).padStart(2,'0'),false,'📖');
  }).join('')||'<p class="browse-empty">この条件にはまだ教材がありません。戻って別のレベルを選択してください。</p>';
 }
 $('browseCards').innerHTML=html;
 // Expose the actual number of selectable cards for responsive grid balancing.
 const cardCount=$('browseCards').querySelectorAll('.browse-card').length;
 $('browseCards').dataset.count=String(cardCount);
 // When advancing or returning between steps, show the first row, not the previous scroll position.
 $('browseCards').scrollTop=0;
 $('browseNotice').textContent=step==='category'?'現在 '+state.sets.length+' セット収録 · 追加制作中':
  step==='level'?cLabel+' · '+browseAvailable(category).length+' セット収録':'学習記録はこの端末に保存されます。';
 $('browseCards').querySelectorAll('[data-browse-pick]').forEach(b=>b.addEventListener('click',()=>{
  const value=b.dataset.browsePick;
  if(step==='category'){browseState.category=value;browseState.level=null;browseState.step='level';renderBrowse();}
  else if(step==='level'){browseState.level=value;browseState.step='article';renderBrowse();}
  else{
   $('readingBrowse').hidden=true;
   $('readingWorkspace').hidden=false;
   document.body.classList.remove('reading-browsing');
   selectLesson(value,true);
  }
  window.scrollTo?.({top:0,behavior:'auto'});
 }));
 $('browseBreadcrumbs').querySelectorAll('[data-browse-step]').forEach(b=>b.addEventListener('click',()=>openBrowse(b.dataset.browseStep)));
}
function openBrowse(step='category'){
 window.CopeakReadingInk?.pauseStudy();
 closeCatalog(false);
 document.body.classList.remove('reading-focus','catalog-open');
 document.body.classList.add('reading-browsing');
 $('readingCatalog').inert=false;
 $('readingWorkspace').hidden=true;
 $('readingBrowse').hidden=false;
 $('focusStart').hidden=false;$('focusExit').hidden=true;
 $('catalogToggle').hidden=true;
 if(step==='category'){browseState.category=null;browseState.level=null;}
 if(step==='level')browseState.level=null;
 browseState.step=step;
 renderBrowse();
 window.scrollTo?.({top:0,behavior:'auto'});
}

function safeSourceUrl(raw){
 try{
  const value=String(raw||'').trim();
  if(!/^https:\/\//i.test(value))return null;
  const url=new URL(value);
  return url.protocol==='https:'&&!url.username&&!url.password?url.href:null;
 }catch{return null;}
}
function selectLesson(id,startFocus=true){
 const s=state.sets.find(x=>x.id===id);if(!s)return;
 if($('vocabListPanel').open)$('vocabListPanel').close();
 state.lesson=s;const progress=readProgress(s.id);state.answers=progress.answers||{};state.clozeAnswers=progress.clozeAnswers||{};state.graded=progress.graded===true;state.gradingChosen=false;state.questionCountChosen=false;state.questionCount=progress.questionCount||0;state.questionIds=progress.questionIds||[];state.activeQuestionId=null;state.practice=progress.practice&&typeof progress.practice==='object'?progress.practice:{};state.quizCursor={};
 state.showAll=false;state.support=false;state.vocabIndex=0;state.vocabChoice=null;state.panel='questions';state.exercise=null;
 $('supportToggle').disabled=false;$('printOpen').disabled=false;$('focusStart').disabled=false;$('examModeStart').disabled=false;
 $('supportToggle').setAttribute('aria-pressed','false');$('supportToggle').setAttribute('aria-label','読解の根拠段落を表示');
 $('lessonTitle').textContent=s.title+' / '+s.title_ja;
 $('lessonMeta').textContent=label(s.category_id,state.manifest.categories)+' · '+(s.level_ids||[s.level_id]).map(id=>label(id,state.manifest.levels)).join(' / ')+' · '+s.word_count+' words · 最大'+Math.min(10,s.questions.length)+'問を選択';
 $('sourceLinks').innerHTML=(s.source_links||[]).map(l=>{
  const href=safeSourceUrl(l.url);
  return href?'<a target="_blank" rel="noopener noreferrer" href="'+esc(href)+'">'+esc(l.title)+'</a>':'';
 }).join('');
 renderPassage();renderQuestions();renderVocab();renderNotes();renderCloze();switchTab('questions');renderSetList();chooseExercise('questions');renderPracticeProgress();
 if(startFocus)enterFocusMode();
 if(startFocus&&document.body.classList.contains('reading-focus'))closeCatalog();
 if(!document.body.classList.contains('reading-focus')&&window.matchMedia('(max-width:1000px)').matches)$('reader').scrollIntoView({behavior:'smooth',block:'start'});
}
/* Vocabulary is retrieved from the original lesson entries. Never guess unknown definitions. */
const supplementaryGlossary={
 ozone:['オゾン','a gas made of three oxygen atoms that forms part of the atmosphere'],
 layer:['層','one of several levels or sheets of a substance'],
 protect:['守る・保護する','to prevent someone or something from being harmed'],
 radiation:['放射線・放射','energy that travels in rays or waves'],
 atmosphere:['大気','the gases surrounding a planet'],
 sunlight:['日光','light that comes from the sun'],
 harmful:['有害な','likely to cause damage or injury'],
 international:['国際的な','involving or relating to more than one country'],
 chemicals:['化学物質','substances used in or produced by chemical processes'],
 evidence:['証拠','facts or information supporting a conclusion'],
 Antarctica:['南極大陸','the continent surrounding the South Pole'],
 climate:['気候','weather patterns in an area over a long period'],
 percentage:['百分率','a rate expressed as parts of one hundred'],
 ecosystems:['生態系','communities of living things and their environments'],
 scientists:['科学者たち','people who study the natural or physical world'],
 agreement:['協定・合意','a decision or arrangement accepted by different parties'],
 research:['研究','careful study to learn more about something'],
 observation:['観測・観察','the act of watching something carefully'],
 cooperation:['協力','working together toward a shared aim'],
 however:['しかしながら','used to introduce a contrast'],
 therefore:['したがって','for that reason; as a result'],
 nevertheless:['それにもかかわらず','despite what has just been said']
};
function normalizeWord(word){return String(word||'').toLowerCase().replace(/[’]/g,"'").replace(/^[^\p{L}]+|[^\p{L}]+$/gu,'');}
function dictionaryEntry(word){
 const raw=normalizeWord(word);
 const keys=[raw];
 if(raw.endsWith('ies'))keys.push(raw.slice(0,-3)+'y');
 if(raw.endsWith('es'))keys.push(raw.slice(0,-2));
 if(raw.endsWith('s'))keys.push(raw.slice(0,-1));
 if(raw.endsWith('ed'))keys.push(raw.slice(0,-2),raw.slice(0,-1));
 if(raw.endsWith('ing'))keys.push(raw.slice(0,-3),raw.slice(0,-3)+'e');
 for(const lesson of [state.lesson,...state.sets.filter(s=>s.id!==state.lesson?.id)]){
  if(!lesson?.vocabulary)continue;
  const found=lesson.vocabulary.find(v=>keys.some(k=>normalizeWord(v.term)===k));
  if(found)return {term:found.term,ja:found.ja,definition:found.definition,synonym:found.synonym};
 }
 for(const key of keys){const entry=Object.entries(supplementaryGlossary).find(([k])=>k.toLowerCase()===key);
  if(entry)return {term:entry[0],ja:entry[1][0],definition:entry[1][1],synonym:''};}
 return null;
}
function wordSpans(text){
 let out='',last=0;
 const re=/[\p{L}]+(?:['’\-][\p{L}]+)*/gu;
 for(const m of text.matchAll(re)){
  out+=esc(text.slice(last,m.index));
  out+='<span class="reading-word" data-word="'+esc(m[0])+'" title="単語をタップして意味を見る">'+esc(m[0])+'</span>';
  last=m.index+m[0].length;
 }
 return out+esc(text.slice(last));
}
/* Passage markup changes with the selected exercise.
   Never expose a masked marker's answer in the left passage. */
function activePracticeItem(){
 if(!state.lesson||!state.exercise||state.exercise==='questions')return null;
 const list=practiceBank(state.exercise);return list[state.quizCursor[state.exercise]||0]||null;
}
function practiceBank(mode){
 if(!state.lesson||!practiceEngine)return [];
 return practiceEngine.build(state.lesson,mode,state.sets,$('vocabQuizMode').value);
}
function annotatedWords(text,marks){
 const ranges=[];
 for(const mark of marks){
  if(!mark?.sourceText)continue;
  const source=String(mark.sourceText).split('...')[0].trim();
  if(!source)continue;
  let at=text.indexOf(source);
  if(at<0)at=text.toLowerCase().indexOf(source.toLowerCase());
  if(at<0)continue;
  const end=at+source.length;
  if(ranges.some(r=>at<r.end&&r.start<end))continue;
  ranges.push({start:at,end,mark});
 }
 ranges.sort((a,b)=>a.start-b.start);
 let cursor=0,html='';
 for(const range of ranges){
  html+=wordSpans(text.slice(cursor,range.start));
  const chunk=text.slice(range.start,range.end);
  if(range.mark.sourceStyle==='mask'){
   html+='<span class="reading-blank" aria-label="設問'+(range.mark.index+1)+'の空欄">【'+(range.mark.index+1)+'】 ________</span>';
  }else{
   html+='<span class="exam-underline" title="設問の下線部">'+wordSpans(chunk)+'</span>';
  }
  cursor=range.end;
 }
 return html+wordSpans(text.slice(cursor));
}
function readingUnderline(){
 if(!state.support||state.exercise!=='questions'||!state.lesson||!state.activeQuestionId)return null;
 const q=state.lesson.questions.find(x=>x.id===state.activeQuestionId);
 if(!q||!practiceEngine)return null;
 const source=practiceEngine.evidence(state.lesson,q);
 return source?{source,sourceText:source.phrase,sourceStyle:'underline',index:0}:null;
}
function renderPassage(preserveScroll=true){
 const lesson=state.lesson;if(!lesson)return;
 const scroll=$('passageScroll'),top=preserveScroll?scroll.scrollTop:0;
 const mode=state.exercise;
 const all=mode==='discourse'||mode==='cloze'?practiceBank(mode):
  mode==='questions'?[readingUnderline()]:
  mode?[activePracticeItem()]:[];
 const sourceMap=new Map();
 for(const item of all){
  if(!item?.source)continue;
  const k=item.source.paragraphId+'-'+item.source.sentenceIndex;
  if(!sourceMap.has(k))sourceMap.set(k,[]);
  sourceMap.get(k).push(item);
 }
 $('passage').innerHTML=lesson.paragraphs.map((p,pi)=>
 '<div class="paragraph" id="'+esc(p.id)+'" data-paragraph="'+esc(p.id)+'"><strong>PARAGRAPH '+(pi+1)+'</strong>'+
 p.sentences.map((t,si)=>'<span class="sentence" data-sentence="'+pi+'-'+si+'"><span class="sentence-line">'+
 annotatedWords(t.en,sourceMap.get(p.id+'-'+si)||[])+
 '</span> </span>').join('')+'</div>').join('');
 $('passage').classList.toggle('cloze-active',mode==='cloze'||mode==='discourse');
 window.CopeakReadingInk?.syncStudy(lesson.id,mode||'questions');
 scroll.scrollTop=top;
}
/* A tap looks up one word; selecting a full phrase reveals the original
   sentence-level Japanese translation. Text selection stays native on iPad. */
let activeLookupId=0;
const lookupDictionary=()=>window.CopeakReadingDictionary;
function getContext(pi,si){
 const sentence=state.lesson?.paragraphs?.[pi]?.sentences?.[si]||null;
 return sentence?{en:sentence.en,ja:sentence.ja}:null;
}
function highlightLookupEnglish(text,word){
 if(!word)return esc(text);
 const lower=text.toLowerCase(),needle=String(word).toLowerCase(),at=lower.indexOf(needle);
 if(at<0)return esc(text);
 return esc(text.slice(0,at))+'<mark class="lookup-word-highlight">'+esc(text.slice(at,at+word.length))+'</mark>'+esc(text.slice(at+word.length));
}
function highlightLookupJapanese(text,meaning){
 const ja=String(text||''),candidate=String(meaning||'').split(/[、，／・／]/)[0].trim();
 if(!candidate||candidate.length<2||!ja.includes(candidate))return esc(ja);
 const at=ja.indexOf(candidate);
 return esc(ja.slice(0,at))+'<mark class="lookup-ja-highlight">'+esc(candidate)+'</mark>'+esc(ja.slice(at+candidate.length));
}
/* Keep the popup in the same answer-safe state as the passage itself.
   Without this, a learner can reveal a blanked cloze/discourse answer through
   the sentence preview even though the visible passage masks the same word. */
function lookupIsMasked(){
 return state.exercise==='cloze'||state.exercise==='discourse';
}
function lookupVocabPending(){
 if(state.exercise!=='vocab')return false;
 const item=activePracticeItem();
 return !!(item&&!Number.isInteger(practiceRecord('vocab').answers[item.id]));
}
function maskedLookupExample(pi,si){
 const context=getContext(pi,si);
 if(!context)return '';
 if(!lookupIsMasked())return context.en;
 const paragraph=state.lesson?.paragraphs?.[pi];
 if(!paragraph)return '';
 const masks=practiceBank(state.exercise).filter(q=>q.source?.paragraphId===paragraph.id&&q.source.sentenceIndex===si);
 const ranges=[];
 for(const q of masks){
  const key=String(q.sourceText||'').split('...')[0].trim();
  if(!key)continue;
  let start=context.en.indexOf(key);
  if(start<0)start=context.en.toLowerCase().indexOf(key.toLowerCase());
  if(start<0)continue;
  const end=start+key.length;
  if(ranges.some(r=>r.start<end&&start<r.end))continue;
  ranges.push({start,end,num:q.index+1});
 }
 ranges.sort((a,b)=>a.start-b.start);
 let result='',offset=0;
 for(const range of ranges){
  result+=context.en.slice(offset,range.start)+'【'+range.num+'】 ________';
  offset=range.end;
 }
 return result+context.en.slice(offset);
}
function renderLookupWord(entry,payload){
 $('lookupJapanese').textContent=entry?.ja||'日本語の意味を確認できませんでした';
 const explanation=entry?.definition||'英英定義が未登録です。';
 $('lookupDefinition').innerHTML='<strong>ENGLISH DEFINITION</strong>'+esc(explanation)+(entry?.synonym?'<p>Synonym: '+esc(entry.synonym)+'</p>':'');
 $('lookupSource').textContent=entry?.source||'登録語彙';
 const context=getContext(payload.pi,payload.si);
 if(context){
  const example=maskedLookupExample(payload.pi,payload.si);
  $('lookupExampleEn').innerHTML=highlightLookupEnglish(example,payload.word);
  if(lookupIsMasked()||lookupVocabPending()){
   $('lookupExampleJa').textContent='解答前のため、この一文の日本語訳は非表示です。';
  }else{
   $('lookupExampleJa').innerHTML=highlightLookupJapanese(context.ja,entry?.ja);
  }
 }
}
function showLookup(kind,payload){
 if(!state.lesson||!state.lookupEnabled)return;
 const dialog=$('readingLookupDialog'),serial=++activeLookupId;
 const context=getContext(payload.pi,payload.si);
 const blocked=lookupIsMasked(),vocabPending=lookupVocabPending();
 const hasSentence=Boolean(context);
 const seeSentence=$('lookupSentenceLink');
 seeSentence.hidden=kind!=='word'||blocked||vocabPending||!hasSentence;
 if(hasSentence){seeSentence.dataset.pi=String(payload.pi);seeSentence.dataset.si=String(payload.si);}
 $('lookupExampleEn').textContent=hasSentence?maskedLookupExample(payload.pi,payload.si):'本文中の英文を選んでください。';
 $('lookupExampleJa').textContent=blocked||vocabPending?'解答前のため、この一文の日本語訳は非表示です。':context?.ja||'';
 $('lookupDefinition').hidden=kind!=='word';
 $('lookupKind').textContent=kind==='word'?'CONTEXT DICTIONARY':'SENTENCE TRANSLATION';
 if(kind==='sentence'){
  $('lookupSource').textContent='教材の一文訳';
  $('lookupHeading').textContent='第'+(payload.pi+1)+'段落 · '+(payload.si+1)+'文目';
  $('lookupJapanese').textContent=blocked||vocabPending?'問題の答えを守るため、解答前の日本語訳は表示しません。':context?.ja||'日本語訳が未登録です。';
 }else{
  $('lookupHeading').textContent=payload.word;
  const current=activePracticeItem();
  const target=String(current?.sourceText||'').toLowerCase();
  if(vocabPending&&normalizeWord(payload.word)===normalizeWord(target)){
   $('lookupSource').textContent='語彙クイズ';
   $('lookupJapanese').textContent='この単語はクイズに回答すると確認できます。';
   $('lookupDefinition').innerHTML='<strong>ENGLISH DEFINITION</strong>クイズ解答後に単語をタップしてください。';
   $('lookupExampleEn').textContent=maskedLookupExample(payload.pi,payload.si);
  }else{
   $('lookupExampleEn').innerHTML=highlightLookupEnglish(maskedLookupExample(payload.pi,payload.si),payload.word);
   const known=dictionaryEntry(payload.word)||lookupDictionary()?.local(payload.word,state.lesson,state.sets);
   if(known){
    renderLookupWord({...known,source:known.source||'教材登録'},payload);
   }else{
    $('lookupJapanese').textContent='日本語の意味を照会しています…';
    $('lookupDefinition').innerHTML='<strong>ENGLISH DEFINITION</strong><span class="lookup-pending">単語辞書を確認しています…</span>';
    $('lookupSource').textContent='オンライン辞書照会中';
    lookupDictionary()?.remote?.(payload.word)?.then(entry=>{
     if(serial!==activeLookupId||!dialog.open)return;
     if(entry)renderLookupWord(entry,payload);
     else{
      $('lookupJapanese').textContent='この語の辞書訳を取得できませんでした';
      $('lookupDefinition').innerHTML='<strong>ENGLISH DEFINITION</strong>通信・語形の問題で取得できませんでした。';
      $('lookupSource').textContent='辞書照会失敗';
     }
    }).catch(()=>{
     if(serial!==activeLookupId||!dialog.open)return;
     $('lookupJapanese').textContent='辞書に接続できませんでした';
     $('lookupSource').textContent='オフライン';
    });
   }
  }
 }
 if(!dialog.open)dialog.showModal();
}
function installLongPressLookup(){
 const passage=$('passage');let pointerDown=false,selectionTimer=0,lastSelection='';
 const getSentence=element=>element?.closest?.('[data-sentence]')||null;
 const positionFrom=sentence=>{
  const data=sentence?.dataset?.sentence;
  if(!data)return null;
  const [pi,si]=data.split('-').map(Number);
  return Number.isInteger(pi)&&Number.isInteger(si)?{pi,si}:null;
 };
 const selectedSentence=()=>{
  const sel=window.getSelection?.();
  if(!sel||sel.isCollapsed)return null;
  const text=String(sel.toString()).trim();
  if(text.length<8||!/\s/.test(text))return null;
  let node=sel.anchorNode;
  if(!node)return null;
  const element=node.nodeType===1?node:node.parentElement;
  const sentence=getSentence(element);
  if(!sentence||!passage.contains(sentence))return null;
  const pos=positionFrom(sentence);
  return pos?{...pos,signature:pos.pi+'-'+pos.si+':'+text}:null;
 };
 function showSelection(){
  if(!state.lookupEnabled||pointerDown||$('readingLookupDialog').open)return false;
  const info=selectedSentence();
  if(!info||lastSelection===info.signature)return false;
  lastSelection=info.signature;
  showLookup('sentence',info);
  return true;
 }
 passage.addEventListener('pointerdown',()=>{pointerDown=true;});
 passage.addEventListener('pointerup',()=>{pointerDown=false;setTimeout(showSelection,100);});
 passage.addEventListener('pointercancel',()=>{pointerDown=false;});
 document.addEventListener('selectionchange',()=>{
  if(selectionTimer)clearTimeout(selectionTimer);
  const sel=window.getSelection?.();
  if(!sel||sel.isCollapsed){lastSelection='';return;}
  selectionTimer=setTimeout(showSelection,450);
 });
 passage.addEventListener('click',e=>{
  if(!state.lookupEnabled)return;
  // Click after text-drag must not accidentally open the single-word popup.
  if(showSelection())return;
  if(window.getSelection?.()?.toString().trim())return;
  const span=e.target?.closest?.('[data-word]');
  if(!span)return;
  const sentence=getSentence(span),pos=positionFrom(sentence);
  if(!pos)return;
  showLookup('word',{...pos,word:span.dataset.word});
 });
 passage.addEventListener('contextmenu',e=>{
  if(!state.lookupEnabled)return;
  if(showSelection()){e.preventDefault();return;}
  const word=e.target?.closest?.('[data-word]');
  const pos=positionFrom(getSentence(e.target));
  if(!pos)return;
  e.preventDefault();
  showLookup(word?'word':'sentence',{...pos,word:word?.dataset.word});
 });
 passage.addEventListener('dblclick',e=>{
  if(!state.lookupEnabled)return;
  const pos=positionFrom(getSentence(e.target));
  if(pos&&!showSelection())showLookup('sentence',pos);
 });
 $('lookupSentenceLink').addEventListener('click',()=>showLookup('sentence',{
  pi:Number($('lookupSentenceLink').dataset.pi),si:Number($('lookupSentenceLink').dataset.si)
 }));
 $('lookupClose').addEventListener('click',()=>$('readingLookupDialog').close());
 $('readingLookupDialog').addEventListener('close',()=>{
  ++activeLookupId;
  try{window.getSelection?.()?.removeAllRanges();}catch(_){}
  lastSelection='';
 });
 $('readingLookupDialog').addEventListener('click',e=>{
  if(e.target===$('readingLookupDialog'))$('readingLookupDialog').close();
 });
}
function focusEvidence(ids,jump=false){
 document.querySelectorAll('.paragraph.support-hit,.evidence-sentence-hit').forEach(node=>{
  node.classList.remove('support-hit','evidence-sentence-hit');
 });
 const statusText=$('evidenceStatus');
 if(!state.support||!state.lesson||!state.activeQuestionId){
  statusText.textContent='根拠を確認したい設問の「根拠を見る」を押してください。';
  return;
 }
 const question=state.lesson.questions.find(q=>q.id===state.activeQuestionId);
 if(!question){statusText.textContent='設問の根拠を確認できませんでした。';return;}
 const evidence=practiceEngine?.evidence(state.lesson,question);
 const paragraphIndex=evidence?state.lesson.paragraphs.findIndex(p=>p.id===evidence.paragraphId):-1;
 const sentence=paragraphIndex>=0
  ?$('passage').querySelector('[data-sentence="'+paragraphIndex+'-'+evidence.sentenceIndex+'"]')
  :null;
 let target=sentence;
 if(sentence)sentence.classList.add('evidence-sentence-hit');
 else {
  const first=(ids||question.paragraph_ids||[])[0];
  target=first?document.getElementById(first):null;
  if(target)target.classList.add('support-hit');
 }
 const index=state.lesson.questions.indexOf(question);
 statusText.textContent=target
  ?'Q'+(index+1)+' の根拠の目安：第'+(paragraphIndex>=0?paragraphIndex+1:state.lesson.paragraphs.findIndex(p=>p.id===ids?.[0])+1)+'段落'
  :'この設問の根拠箇所を特定できませんでした。';
 if(jump&&target){
  const scroll=$('passageScroll');
  const delta=target.getBoundingClientRect().top-scroll.getBoundingClientRect().top;
  scroll.scrollTo({top:Math.max(0,scroll.scrollTop+delta-Math.max(12,scroll.clientHeight*.22)),behavior:'smooth'});
 }
}
/* A comprehension attempt uses only a balanced subset of existing authored
   questions. Saved question IDs remain stable when switching tabs/reopening. */
function activeQuestions(){
 if(!state.lesson||!state.questionIds.length)return [];
 const byId=new Map(state.lesson.questions.map(q=>[q.id,q]));
 return state.questionIds.map(id=>byId.get(id)).filter(Boolean);
}
function renderQuestionCountChoices(){
 const counts=questionSelector?.availableCounts(state.lesson?.questions.length)||[];
 $('readingQuestionCountChoices').innerHTML=counts.map(c=>
  '<button type="button" class="reading-count-card" data-reading-count="'+c.count+'" title="'+esc(c.description)+'">'+
  '<span class="reading-count-number" aria-hidden="true">'+c.count+'</span><strong>'+esc(c.label)+' '+c.count+'問</strong>'+
  '<small>'+esc(c.description)+'</small></button>'
 ).join('');
 $('questionCountHint').textContent='この教材には'+(state.lesson?.questions.length||0)+'問を収録。出題数は最大10問です。';
}
function selectQuestionCount(count){
 if(!state.lesson||!questionSelector)return;
 const all=state.lesson.questions;
 const choices=questionSelector.availableCounts(all.length).map(x=>x.count);
 if(!choices.includes(count))return;
 const selected=questionSelector.select(state.lesson,count);
 if(selected.length!==count||!selected.every(q=>all.includes(q)))return;
 const ids=selected.map(q=>q.id);
 const same=ids.length===state.questionIds.length&&ids.every((id,i)=>id===state.questionIds[i]);
 const earlierAnswered=Object.keys(state.answers).length>0;
 if(!same&&earlierAnswered){
  if(!window.confirm('問題数を変更すると、この長文の現在の解答は新しい挑戦としてリセットされます。過去の最高記録は残ります。変更しますか？'))return;
 }
 if(!same){
  state.answers={};state.graded=false;
  const r=practiceRecord('questions');r.finished=false;
  state.support=false;state.activeQuestionId=null;
 }
 state.questionCount=count;state.questionIds=ids;state.questionCountChosen=true;
 state.gradingChosen=false;
 saveProgress();
 renderQuestions();renderSetList();renderPracticeProgress();renderPassage(true);focusEvidence(null,false);
 $('questionScroll').scrollTop=0;
 $('gradingSettings').querySelector('[data-grading-mode]')?.focus({preventScroll:true});
}
function renderQuestions(){
 const s=state.lesson;if(!s)return;
 const panelScroll=$('questionScroll');
 const retainedScroll=panelScroll?.scrollTop||0;
 const subset=activeQuestions();
 const qTotal=subset.length;
 const answered=subset.filter(q=>Number.isInteger(state.answers[q.id])).length;
 const complete=qTotal>0&&answered===qTotal;
 const isBatch=state.gradingMode==='batch';
 const showResults=state.gradingChosen&&(!isBatch||state.graded);
 $('answerCount').textContent=answered+' / '+qTotal+'問回答';
 $('gradingSettings').querySelectorAll('[data-grading-mode]').forEach(button=>button.setAttribute('aria-pressed',String(state.gradingChosen&&state.gradingMode===button.dataset.gradingMode)));
 $('questionCountSettings').hidden=state.questionCountChosen;
 $('readingCountSummary').hidden=!state.questionCountChosen;
 $('readingQuestionCountLabel').textContent='読解：'+qTotal+'問を選択中';
 $('gradingSettings').hidden=!state.questionCountChosen||state.gradingChosen;
 if(!state.questionCountChosen)renderQuestionCountChoices();
 $('questions').hidden=!state.questionCountChosen||!state.gradingChosen;
 $('readingGradingActions').hidden=!state.questionCountChosen||!state.gradingChosen;
 $('answerCount').hidden=!state.gradingChosen;
 $('gradeAll').hidden=!isBatch;
 $('gradeAll').disabled=!complete||state.graded;
 $('gradeAll').textContent=state.graded?'採点済み':'全問の結果を表示';
 $('readingResult').hidden=!(complete&&showResults);
 $('readingResult').textContent=complete&&showResults
  ?'採点結果：'+subset.filter(q=>state.answers[q.id]===q.answer).length+' / '+qTotal+' 問正解':'';
 $('evidenceStatus').hidden=!state.support;
 $('questions').innerHTML=subset.map((q,i)=>{
  const chosen=state.answers[q.id],selected=Number.isInteger(chosen);
  const revealed=selected&&showResults;
  return '<article class="question-card" data-question="'+esc(q.id)+'"><p class="skill">'+esc(q.skill.toUpperCase())+' · Q'+(i+1)+'</p><h4>'+esc(q.prompt)+'</h4><div class="choices">'+q.options.map((option,j)=>
   '<button type="button" data-q="'+esc(q.id)+'" data-option="'+j+'" aria-pressed="'+(selected&&j===chosen)+'" '+
   (revealed||!state.gradingChosen?'disabled ':'')+'class="'+(revealed&&j===q.answer?'correct':revealed&&j===chosen?'wrong':selected&&j===chosen?'selected':'')+'">'+String.fromCharCode(65+j)+'. '+esc(option)+'</button>'
  ).join('')+'</div>'+
  (revealed?'<p class="feedback '+(chosen===q.answer?'correct':'wrong')+'">'+(chosen===q.answer?'正解！':'正解は '+String.fromCharCode(65+q.answer))+'</p><p class="feedback">'+esc(q.explanation_ja)+'</p>':'')+
  '<div class="card-actions"><button type="button" data-evidence="'+esc(q.id)+'" aria-pressed="'+(state.support&&state.activeQuestionId===q.id)+'" class="question-evidence-toggle">'+(state.support&&state.activeQuestionId===q.id?'✕ 根拠を閉じる':'⌕ 根拠を見る')+'</button></div></article>';
 }).join('');
 $('questions').querySelectorAll('[data-q]').forEach(b=>b.addEventListener('click',()=>{
  const q=s.questions.find(x=>x.id===b.dataset.q);
  if(!q||!state.gradingChosen||(state.gradingMode==='batch'&&state.graded)||
   (state.gradingMode==='immediate'&&Number.isInteger(state.answers[q.id])))return;
  state.answers[q.id]=Number(b.dataset.option);
  if(state.gradingMode==='immediate'&&state.answers[q.id]===q.answer)window.CopeakReadingEffects?.celebrate();
  saveProgress();
  if(state.gradingMode==='immediate'&&subset.every(x=>Number.isInteger(state.answers[x.id])))recordCompletion('questions');
  renderQuestions();renderSetList();renderPracticeProgress();renderPassage(true);
  if(state.support){const active=s.questions.find(x=>x.id===state.activeQuestionId);focusEvidence(active?.paragraph_ids,false);}
 }));
 $('questions').querySelectorAll('[data-evidence]').forEach(b=>b.addEventListener('click',()=>{
  const q=s.questions.find(x=>x.id===b.dataset.evidence);
  if(!q)return;
  const same=state.support&&state.activeQuestionId===q.id;
  state.support=!same;
  state.activeQuestionId=same?null:q.id;
  renderQuestions();
  renderPassage(true);
  focusEvidence(state.support?q.paragraph_ids:null,state.support);
  $('questions').querySelector('[data-evidence="'+q.id+'"]')?.focus({preventScroll:true});
 }));
 if(panelScroll)panelScroll.scrollTop=retainedScroll;
}
/* Interactive exercises: all modes use four choices and reveal an explanation after
   every submitted answer, regardless of correctness. Responses are saved per lesson. */
function practiceKey(mode){
 return mode==='vocab'?'vocab:'+($('vocabQuizMode').value||'en-ja'):mode;
}
function practiceRecord(mode){
 const key=practiceKey(mode);
 if(!state.practice[key]||typeof state.practice[key]!=='object'){
  state.practice[key]={answers:{},runs:0,best:0,finished:false};
 }
 const record=state.practice[key];
 if(!record.answers||typeof record.answers!=='object')record.answers={};
 // Import older cloze answers only once so a pupil does not lose previous practice.
 if(mode==='cloze'&&!record.migrated){
  for(const [oldIndex,value] of Object.entries(state.clozeAnswers||{})){
   if(Number.isInteger(value)&&!Object.prototype.hasOwnProperty.call(record.answers,'c-'+oldIndex))record.answers['c-'+oldIndex]=value;
  }
  record.migrated=true;
 }
 // A legacy six-word/ two-blank bank may already be marked complete.
 // Preserve past runs and best scores, but reopen newly added questions.
 if(record.finished&&state.lesson&&['vocab','grammar','cloze'].includes(mode)){
  const items=practiceBank(mode);
  if(items.some(item=>!Number.isInteger(record.answers[item.id])))record.finished=false;
 }
 return record;
}
function modeSummary(mode){
 if(!state.lesson)return {total:0,answered:0,correct:0,percent:0,accuracy:0,runs:0,best:0};
 const items=mode==='questions'?activeQuestions():practiceBank(mode);
 const record=practiceRecord(mode);
 const answers=mode==='questions'?state.answers:record.answers;
 let answered=0,correct=0;
 for(const item of items){
  const picked=answers[item.id];
  if(Number.isInteger(picked)&&picked>=0&&picked<item.options.length){
   answered++;
   if(picked===item.answer)correct++;
  }
 }
 const total=items.length;
 return {total,answered,correct,percent:total?Math.round(answered/total*100):0,
  accuracy:answered?Math.round(correct/answered*100):0,
  runs:Number(record.runs)||0,best:Number(record.best)||0};
}
function renderPracticeProgress(){
 if(!state.lesson||!practiceEngine)return;
 const icons={
  questions:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h7M8 16h5"/>',
  vocab:'<path d="m4 20 5-13 5 13M6 15h6"/><path d="M16 8h4M18 6v13"/>',
  grammar:'<path d="M4 7h16M7 4v6M17 4v6M4 17h16M8 14v6M16 14v6"/>',
  discourse:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M10 6h4v11M10 17h4"/>',
  paraphrase:'<path d="M4 7h15l-3-3m3 3-3 3M20 17H5l3-3m-3 3 3 3"/><path d="M8 12h8"/>',
  cloze:'<path d="M4 4h16v16H4zM8 9h8M8 14h5"/>'
 };
 let percentages=[];
 $('practiceProgress').innerHTML=practiceEngine.modes.map(mode=>{
  const x=modeSummary(mode),name=practiceEngine.labels[mode],p=x.percent;
  percentages.push(p);
  const detail=x.answered+'/'+x.total+'問 · 正答率'+x.accuracy+'% · 完走'+x.runs+'回'+(x.runs?' · 最高'+x.best+'%':'');
  return '<div class="progress-mini" data-progress-mode="'+esc(mode)+'" style="--progress:'+p+'%" title="'+esc(name+'：'+detail)+'" aria-label="'+esc(name+' '+p+'パーセント達成、'+detail)+'">'+
   '<span class="progress-ring"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+icons[mode]+'</svg></span>'+
   '<span class="progress-copy"><strong>'+esc(name)+'</strong><small>'+p+'%</small></span></div>';
 }).join('');
 for(const b of $('exerciseChoices').querySelectorAll('[data-exercise]')){
  const x=modeSummary(b.dataset.exercise);
  const tag=b.querySelector('[data-choice-progress]');
  if(tag)tag.textContent=x.answered+'/'+x.total+' · '+x.percent+'%';
 }
 const done=percentages.length?Math.round(percentages.reduce((a,b)=>a+b,0)/percentages.length):0;
 const total=$('overallProgress');
 if(total)total.textContent='総合 '+done+'%';
}
function recordCompletion(mode){
 const r=practiceRecord(mode),info=modeSummary(mode);
 if(info.total&&info.answered===info.total&&!r.finished){
  r.finished=true;r.runs=(Number(r.runs)||0)+1;
  r.best=Math.max(Number(r.best)||0,Math.round(info.correct/info.total*100));
 }
 saveProgress();
 renderPracticeProgress();
}
function resetMode(mode){
 const r=practiceRecord(mode);
 r.answers={};r.finished=false;
 state.quizCursor[mode]=0;
 if(mode==='cloze')state.clozeAnswers={};
 saveProgress();
 renderPracticeQuiz(mode);
 renderPracticeProgress();
 renderPassage(true);
}
function renderModeList(){
 const lesson=state.lesson;if(!lesson)return;
 const list=lesson.vocabulary||[];
 $('vocabQuestionCount').textContent='この長文の登録語彙：'+list.length+'語 ／ クイズ：各方向 '+list.length+'問';
 $('vocabList').innerHTML=list.map((v,i)=>
  '<article role="listitem" data-vocab-search="'+esc([v.term,v.ja,v.definition,v.synonym].join(' ').toLowerCase())+'">'+
  '<span class="vocab-entry-number">'+(i+1)+'</span><strong>'+esc(v.term)+'</strong><span>日本語：'+esc(v.ja)+'</span>'+
  '<span>類義語：'+esc(v.synonym||'—')+'</span><span>英英定義：'+esc(v.definition)+'</span></article>'
 ).join('');
 $('vocabListCount').textContent=list.length+'語を収録';
 $('vocabListToggle').textContent='語彙一覧を見る（'+list.length+'語）';
 $('vocabListSearch').value='';
}
function practiceSourceHtml(mode,item){
 if(!['grammar','paraphrase'].includes(mode)||!item?.source||!state.lesson)return '';
 const p=state.lesson.paragraphs.find(p=>p.id===item.source.paragraphId);
 const sentence=p?.sentences?.[item.source.sentenceIndex]?.en||'';
 if(!sentence)return '';
 const phrase=String(item.sourceText||'').split('...')[0].trim();
 const pos=phrase?sentence.toLowerCase().indexOf(phrase.toLowerCase()):-1;
 const content=pos<0?esc(sentence):esc(sentence.slice(0,pos))+'<mark>'+esc(sentence.slice(pos,pos+phrase.length))+'</mark>'+esc(sentence.slice(pos+phrase.length));
 return '<div class="practice-source"><span>READ THE SENTENCE · 本文からの出題</span><p>'+content+'</p></div>';
}
const panelIds={vocab:'vocabQuiz',grammar:'grammarNotes',discourse:'discourseNotes',paraphrase:'paraphraseNotes',cloze:'clozeQuestions'};
/* A completed set can be reviewed without erasing the achievement history. */
function renderPracticeReview(mode,onlyWrong=false){
 const pane=$(panelIds[mode]),bank=practiceBank(mode),record=practiceRecord(mode);
 const list=onlyWrong?bank.filter(q=>record.answers[q.id]!==q.answer):bank;
 const heading=onlyWrong?'間違えた問題の復習':'全問の解説';
 pane.innerHTML='<div class="practice-review-head"><h3>'+heading+'（'+list.length+'問）</h3>'+
  '<button type="button" data-review-close>結果に戻る</button></div>'+
  (list.length?list.map((q,i)=>{
   const picked=record.answers[q.id],correct=picked===q.answer;
   return '<article class="practice-review-card">'+
    '<p class="practice-review-number">QUESTION '+(q.index+1)+'</p>'+
    '<h4>'+esc(q.prompt)+'</h4>'+
    practiceSourceHtml(mode,q)+
    (q.subprompt?'<p class="practice-subprompt">'+esc(q.subprompt)+'</p>':'')+
    '<div class="practice-review-options">'+q.options.map((op,j)=>
     '<div class="'+(j===q.answer?'is-answer':j===picked?'is-mistake':'')+'">'+String.fromCharCode(65+j)+'. '+esc(op)+
     (j===q.answer?'　✓ 正解':j===picked?'　← 自分の回答':'')+'</div>'
    ).join('')+'</div>'+
    '<p class="practice-review-explanation"><strong>'+(correct?'正解':'要復習')+'</strong>　'+esc(q.explanation)+'</p>'+
   '</article>';
  }).join(''):'<p class="muted">間違えた問題はありません。全問正解です。</p>');
 pane.querySelector('[data-review-close]')?.addEventListener('click',()=>renderPracticeQuiz(mode));
 $('questionScroll').scrollTop=0;
}
function renderPracticeQuiz(mode){
 if(!state.lesson||!panelIds[mode])return;
 const pane=$(panelIds[mode]),items=practiceBank(mode),record=practiceRecord(mode);
 if(!items.length){
  pane.innerHTML='<p class="practice-empty">この練習の問題は準備中です。</p>';return;
 }
 let index=state.quizCursor[mode];
 if(!Number.isInteger(index)){
  const next=items.findIndex(x=>!Number.isInteger(record.answers[x.id]));
  index=next<0?items.length:next;
  state.quizCursor[mode]=index;
 }
 if(index>=items.length){
  const summary=modeSummary(mode);
  pane.innerHTML='<div class="practice-finish"><span class="finish-mark" aria-hidden="true">✓</span><h3>'+esc(practiceEngine.labels[mode])+' 完了</h3><p>'+summary.correct+' / '+summary.total+' 問正解　·　正答率'+summary.accuracy+'%</p>'+
   '<p class="practice-statline">完走 '+summary.runs+'回　最高正答率 '+summary.best+'%</p>'+
   '<div class="practice-finish-actions"><button type="button" data-practice-review="all">全問の解説を見る</button>'+
   (summary.correct<summary.total?'<button type="button" data-practice-review="wrong">間違えた問題を復習</button>':'')+
   '<button type="button" data-practice-restart="'+esc(mode)+'">もう一度挑戦</button></div></div>';
  pane.querySelector('[data-practice-restart]')?.addEventListener('click',()=>resetMode(mode));
  pane.querySelectorAll('[data-practice-review]').forEach(btn=>btn.addEventListener('click',()=>renderPracticeReview(mode,btn.dataset.practiceReview==='wrong')));
  return;
 }
 const item=items[index];
 const picked=record.answers[item.id];
 const answered=Number.isInteger(picked)&&picked>=0&&picked<item.options.length;
 const score=modeSummary(mode);
 const prompt=(item.subprompt?'<p class="practice-subprompt">'+esc(item.subprompt)+'</p>':'');
 pane.innerHTML='<div class="practice-meta"><span>'+esc(practiceEngine.labels[mode])+'</span><span>QUESTION '+(index+1)+' / '+items.length+'</span><span>'+score.answered+'問解答済み</span></div>'+
  '<article class="practice-card"><h3>'+esc(item.prompt)+'</h3>'+practiceSourceHtml(mode,item)+prompt+
  '<div class="practice-options">'+item.options.map((op,j)=>{
   const cls=answered?(j===item.answer?'correct':j===picked?'wrong':''):'';
   return '<button type="button" data-practice-option="'+j+'" '+(answered?'disabled ':'')+'aria-pressed="'+(picked===j)+'" class="'+cls+'"><span class="option-letter">'+String.fromCharCode(65+j)+'</span><span>'+esc(op)+'</span></button>';
  }).join('')+'</div>'+
  (answered?'<div class="practice-explanation" role="status"><strong class="'+(picked===item.answer?'correct':'wrong')+'">'+(picked===item.answer?'✓ 正解':'× 不正解')+'　正答 '+String.fromCharCode(65+item.answer)+'. '+esc(item.options[item.answer])+'</strong><p>'+esc(item.explanation)+'</p></div>':'')+
  '<div class="practice-footer">'+(answered?'<button type="button" class="primary" data-practice-next>'+(index+1===items.length?'結果を見る':'次の問題へ →')+'</button>':'<span class="muted">選択すると正誤と解説が表示されます。</span>')+
  '<button type="button" class="practice-reset" data-practice-restart="'+esc(mode)+'">最初から</button></div></article>';
 pane.querySelectorAll('[data-practice-option]').forEach(btn=>btn.addEventListener('click',()=>{
  if(Number.isInteger(practiceRecord(mode).answers[item.id]))return;
  const selectedIndex=Number(btn.dataset.practiceOption);
  practiceRecord(mode).answers[item.id]=selectedIndex;
  if(selectedIndex===item.answer)window.CopeakReadingEffects?.celebrate();
  if(mode==='cloze')state.clozeAnswers[index]=selectedIndex;
  recordCompletion(mode);
  const top=$('questionScroll').scrollTop;
  renderPracticeQuiz(mode);
  $('questionScroll').scrollTop=top;
 }));
 pane.querySelector('[data-practice-next]')?.addEventListener('click',()=>{
  state.quizCursor[mode]=index+1;
  renderPracticeQuiz(mode);
  renderPassage(true);
  $('questionScroll').scrollTop=0;
 });
 pane.querySelector('[data-practice-restart]')?.addEventListener('click',()=>resetMode(mode));
}
function renderVocab(){renderModeList();if(state.exercise==='vocab')renderPracticeQuiz('vocab');}
function renderVocabQuiz(){renderPracticeQuiz('vocab');}
function renderNotes(){
 for(const mode of ['grammar','discourse','paraphrase'])if(state.exercise===mode)renderPracticeQuiz(mode);
}
function renderCloze(){if(state.exercise==='cloze')renderPracticeQuiz('cloze');}
function updateSupportUI(){
 // Evidence is controlled on each question card rather than revealing many
 // paragraph highlights at once through a global switch.
 const btn=$('supportToggle');
 btn.hidden=true;
 btn.disabled=true;
 btn.setAttribute('aria-pressed','false');
}
function showExerciseChooser(){
 state.exercise=null;
 state.support=false;state.activeQuestionId=null;
 $('exerciseChooser').hidden=false;
 $('tabNavigation').hidden=true;
 $('questionScroll').hidden=true;
 $('exerciseChange').hidden=true;
 updateSupportUI();
 renderPassage(true);
 renderPracticeProgress();
 focusEvidence(null,false);
}
function chooseExercise(tab){
 const allowed=['questions','vocab','grammar','discourse','paraphrase','cloze'];
 if(!state.lesson||!allowed.includes(tab))return;
 $('exerciseChooser').hidden=true;
 $('tabNavigation').hidden=false;
 $('questionScroll').hidden=false;
 $('exerciseChange').hidden=false;
 switchTab(tab);
 updateSupportUI();
 $('questionScroll').scrollTop=0;
}
function switchTab(tab){
 const changed=state.panel!==tab;
 state.panel=tab;state.exercise=tab;
 document.querySelectorAll('[data-tab]').forEach(b=>b.setAttribute('aria-current',String(b.dataset.tab===tab)));
 document.querySelectorAll('[data-panel]').forEach(p=>p.hidden=p.dataset.panel!==tab);
 $('practicePaneTitle').textContent=tab==='questions'?'読解問題':(practiceEngine?.labels[tab]||'問題・解説');
 if(changed)$('questionScroll').scrollTop=0;
 if(tab!=='questions'&&state.support){state.support=false;focusEvidence(null,false);}
 if(tab!=='questions'){
  const list=practiceBank(tab),rec=practiceRecord(tab);
  const first=list.findIndex(item=>!Number.isInteger(rec.answers[item.id]));
  state.quizCursor[tab]=first<0?list.length:first;
  if(tab==='vocab'&&$('vocabListPanel').open)$('vocabListPanel').close();
    renderPracticeQuiz(tab);
 }
 renderPassage(true);
 updateSupportUI();
 renderPracticeProgress();
}
function printConfig(){return {paper:$('paper').value,orientation:$('orientation').value,columns:Number($('columns').value),fontSize:Number($('fontSize').value),answers:$('printAnswers').value,translation:$('printTranslation').checked,skills:$('printSkills').checked};}
function buildPrintParts(s,c){
 const enPass=s.paragraphs.map((p,i)=>({title:'Paragraph '+(i+1),lines:p.sentences.flatMap(t=>c.translation?[t.en,t.ja]:[t.en])}));
 const qLines=s.questions.flatMap((q,i)=>['Q'+(i+1)+'. '+q.prompt,...q.options.map((o,j)=>'　'+String.fromCharCode(65+j)+'. '+o),'']);
 const skillLines=c.skills?[
 '【重要語彙】',...s.vocabulary.map(v=>v.term+' — '+v.ja+' / '+v.synonym+' / '+v.definition),
 '【文法】',...s.grammar.map(g=>g.focus+' — '+g.explanation_ja),
 '【ディスコースマーカー】',...s.discourse.map(d=>d.expression+' — '+d.role_ja),
 '【Paraphrasing】',...s.paraphrases.map(p=>p.source+' → '+p.rewrite),
 '【穴埋め】',...s.cloze.map((q,i)=>{
 const t=s.paragraphs.find(p=>p.id===q.paragraph_id)?.sentences[q.sentence_index]?.en||'';
 return (i+1)+'. '+t.replace(q.answer,'________')+'　'+q.options.map((o,j)=>String.fromCharCode(65+j)+'. '+o).join(' / ');
 })
 ]:[];
 const answerLines=s.questions.flatMap((q,i)=>['Q'+(i+1)+'. '+String.fromCharCode(65+q.answer)+'　'+q.options[q.answer],q.explanation_ja,'']);
 if(c.skills)answerLines.push('【穴埋め解答】',...s.cloze.map((q,i)=>(i+1)+'. '+q.answer+' — '+q.explanation_ja));
 return {enPass,qLines,skillLines,answerLines};
}
function printableHTML(s,c){
 const dims={A4:[210,297],B4:[257,364]},size=dims[c.paper]||dims.A4,w=c.orientation==='landscape'?size[1]:size[0],h=c.orientation==='landscape'?size[0]:size[1],data=buildPrintParts(s,c);
 const line=x=>'<p>'+esc(x)+'</p>';
 const passage=data.enPass.map(p=>'<div class="paragraph"><b>'+esc(p.title)+'</b>'+p.lines.map(line).join('')+'</div>').join('');
 const body=c.answers==='answers'?'':'<section><h1>'+esc(s.title)+'</h1><div class="meta">'+esc(s.title_ja)+' ｜ '+s.word_count+' words ｜ 年　組　番　氏名 ________________</div><div class="passage">'+passage+'</div><h2>Reading Comprehension</h2><div class="columns">'+s.questions.map((q,i)=>'<article class="print-question"><b>Q'+(i+1)+'. '+esc(q.prompt)+'</b>'+q.options.map((o,j)=>'<p>'+String.fromCharCode(65+j)+'. '+esc(o)+'</p>').join('')+'</article>').join('')+'</div>'+(c.skills?'<h2>Vocabulary / Language Study</h2><div class="columns">'+data.skillLines.map(line).join('')+'</div>':'')+'</section>';
 const answer=c.answers==='questions'?'':'<section class="'+(c.answers==='both'?'answer-section':'')+'"><h1>解答・解説 — '+esc(s.title)+'</h1><div class="columns">'+data.answerLines.map(line).join('')+'</div></section>';
 return '<!doctype html><html lang="ja"><head><meta charset="utf-8"><title>'+esc(s.title)+'</title><style>@page{size:'+w+'mm '+h+'mm;margin:11mm}*{box-sizing:border-box}body{color:#000;font-family:Georgia,"Yu Gothic",serif;font-size:'+c.fontSize+'pt;line-height:1.42;margin:0}h1{font-size:15pt;margin:0 0 4mm}h2{font-size:11pt;border-bottom:1px solid #000;padding-bottom:2mm;margin:5mm 0 3mm}.meta{font-size:8pt;border-bottom:1px solid #777;padding-bottom:3mm}.passage .paragraph{margin:4mm 0;break-inside:avoid}.passage b{display:block;font:700 8pt Arial,sans-serif;color:#555}.passage p{margin:0 0 1.2mm}.columns{column-count:'+c.columns+';column-gap:6mm}.columns p{margin:0 0 2mm;break-inside:avoid;overflow-wrap:anywhere}.print-question{break-inside:avoid;page-break-inside:avoid;margin-bottom:3mm}.print-question b{display:block;margin-bottom:1mm}.print-question p{margin:1mm 0}.answer-section{break-before:page;page-break-before:always}section{margin-bottom:7mm}</style></head><body>'+body+answer+'</body></html>';
}
function printPDF(){
 const s=state.lesson;if(!s)return;const frame=document.createElement('iframe');frame.style.cssText='position:fixed;width:0;height:0;opacity:0;pointer-events:none';frame.setAttribute('title','印刷');document.body.appendChild(frame);
 try{const doc=frame.contentDocument;doc.open();doc.write(printableHTML(s,printConfig()));doc.close();
 $('printStatus').textContent='印刷画面で PDFに保存 を選択してください。';
 frame.contentWindow?.focus();frame.contentWindow?.print();setTimeout(()=>frame.remove(),30000);
 }catch(e){frame.remove();$('printStatus').textContent='印刷できませんでした：'+e.message;}
}
function docxBytes(s,c){
 if(!window.CopeakGrammarPrint?.zip)throw Error('Word出力ライブラリを読み込めません。');
 const data=buildPrintParts(s,c),dim={A4:[210,297],B4:[257,364]}[c.paper],long=c.orientation==='landscape'?dim[1]:dim[0],high=c.orientation==='landscape'?dim[0]:dim[1],tw=n=>Math.round(n*1440/25.4);
 const sect=(cols,type='continuous')=>'<w:sectPr><w:type w:val="'+type+'"/><w:pgSz w:w="'+tw(long)+'" w:h="'+tw(high)+'"'+(c.orientation==='landscape'?' w:orient="landscape"':'')+'/><w:pgMar w:top="620" w:right="620" w:bottom="620" w:left="620" w:header="0" w:footer="0" w:gutter="0"/><w:cols w:num="'+cols+'" w:space="360"/></w:sectPr>';
 const para=(s,{bold=false,size=c.fontSize,next=false,section='',page=false}={})=>'<w:p><w:pPr><w:keepLines/>'+(next?'<w:keepNext/>':'')+(page?'<w:pageBreakBefore/>':'')+section+'</w:pPr><w:r><w:rPr><w:rFonts w:ascii="Georgia" w:hAnsi="Georgia" w:eastAsia="Yu Gothic"/>'+(bold?'<w:b/>':'')+'<w:sz w:val="'+(size*2)+'"/></w:rPr><w:t xml:space="preserve">'+escapeXml(s)+'</w:t></w:r></w:p>';
 let body='';
 if(c.answers!=='answers'){
  body+=para(s.title,{size:15,bold:true,next:true})+para(s.title_ja+' | '+s.word_count+' words | 年　組　番　氏名 __________',{size:9});
  data.enPass.forEach(p=>{body+=para(p.title,{size:9,bold:true});p.lines.forEach(l=>body+=para(l));});
  body+=para('',{section:sect(1)});
  body+=para('Reading Comprehension',{size:13,bold:true});
  data.qLines.forEach((l,i)=>body+=para(l,{bold:/^Q\d+\./.test(l),next:l!==''}));
  if(c.skills){body+=para('Vocabulary / Language Study',{size:13,bold:true});data.skillLines.forEach(l=>body+=para(l));}
 }
 if(c.answers!=='questions'){
  body+=para('解答・解説 — '+s.title,{size:15,bold:true,page:c.answers==='both'});
  data.answerLines.forEach(l=>body+=para(l,{bold:/^Q\d+\./.test(l),next:/^Q\d+\./.test(l)}));
 }
 body+=sect(c.columns);
 return window.CopeakGrammarPrint.zip({
 '[Content_Types].xml':'<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>',
 '_rels/.rels':'<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>',
 'word/document.xml':'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>'+body+'</w:body></w:document>'
 });
}
function downloadDocx(){
 const s=state.lesson;if(!s)return;
 try{const bytes=docxBytes(s,printConfig()),url=URL.createObjectURL(new Blob([bytes],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'}));
 const a=document.createElement('a');a.href=url;a.download=s.id+'_'+s.title.replace(/[^A-Za-z0-9 -]/g,'')+'.docx';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
 $('printStatus').textContent='Wordファイルを保存しました。';}
 catch(e){$('printStatus').textContent='Word出力に失敗しました：'+e.message;}
}

/* Focused reading UI: independent pane scrolling, tablet resize bar and slide-out catalog. */
const uiPref={passageSize:18,questionSize:16,split:50,dragging:false};
const range=(n,min,max)=>Math.max(min,Math.min(max,n));
function readUISettings(){
 try{
  const saved=JSON.parse(localStorage.getItem('copeak-reading-layout-v1')||'{}');
  uiPref.passageSize=range(Number(saved.passageSize)||18,14,28);
  uiPref.questionSize=range(Number(saved.questionSize)||16,13,24);
  uiPref.split=range(Number(saved.split)||50,30,70);
 }catch(_){}
}
function storeUISettings(){
 try{localStorage.setItem('copeak-reading-layout-v1',JSON.stringify({
  passageSize:uiPref.passageSize,questionSize:uiPref.questionSize,split:uiPref.split
 }));}catch(_){}
}
function applyTypography(){
 $('readingApp').style.setProperty('--reading-passage-size',uiPref.passageSize+'px');
 $('readingApp').style.setProperty('--reading-question-size',uiPref.questionSize+'px');
 $('passageFontValue').textContent=uiPref.passageSize+'px';
 $('questionFontValue').textContent=uiPref.questionSize+'px';
 $('passageFontMinus').disabled=uiPref.passageSize<=14;
 $('passageFontPlus').disabled=uiPref.passageSize>=28;
 $('questionFontMinus').disabled=uiPref.questionSize<=13;
 $('questionFontPlus').disabled=uiPref.questionSize>=24;
}
function splitBounds(){
 const available=$('studyLayout').clientWidth-16;
 if(available<=0)return [30,70];
 const min=Math.max(30,Math.ceil(265/available*100));
 const max=Math.min(70,Math.floor((available-295)/available*100));
 return min<=max?[min,max]:[50,50];
}
function applySplit(pct,save=false){
 const [lo,hi]=splitBounds();
 uiPref.split=range(Math.round(pct),lo,hi);
 $('studyLayout').style.setProperty('--reading-left-width',uiPref.split+'%');
 const bar=$('studySplitter');
 bar.setAttribute('aria-valuemin',String(lo));
 bar.setAttribute('aria-valuemax',String(hi));
 bar.setAttribute('aria-valuenow',String(uiPref.split));
 bar.setAttribute('aria-valuetext','英文'+uiPref.split+'%、問題'+(100-uiPref.split)+'%');
 if(save)storeUISettings();
}
function closeCatalog(restoreFocus=false){
 const wasOpen=document.body.classList.contains('catalog-open');
 document.body.classList.remove('catalog-open');
 $('readingCatalog').inert=document.body.classList.contains('reading-focus');
 $('catalogBackdrop').hidden=true;
 $('catalogToggle').setAttribute('aria-expanded','false');
 $('catalogToggle').setAttribute('aria-label','教材一覧を開く');
 $('catalogToggle').innerHTML='→ <span>教材</span>';
 if(restoreFocus&&wasOpen)$('catalogToggle').focus();
}
function openCatalog(){
 if(!document.body.classList.contains('reading-focus'))return;
 document.body.classList.add('catalog-open');
 $('readingCatalog').inert=false;
 $('catalogBackdrop').hidden=false;
 $('catalogToggle').setAttribute('aria-expanded','true');
 $('catalogToggle').setAttribute('aria-label','教材一覧を閉じる');
 $('catalogToggle').innerHTML='← <span>閉じる</span>';
 $('categoryFilter').focus();
}
function enterFocusMode(){
 if(!state.lesson)return;
 document.body.classList.add('reading-focus');
 $('catalogToggle').hidden=true;
 $('focusStart').hidden=true;
 $('focusExit').hidden=false;
 closeCatalog(false);
 applyTypography();
 applySplit(uiPref.split);
 $('passageScroll').scrollTop=0;
 $('questionScroll').scrollTop=0;
}
function exitFocusMode(){
 closeCatalog(false);
 document.body.classList.remove('reading-focus');
 $('readingCatalog').inert=false;
 $('catalogToggle').hidden=true;
 $('focusStart').hidden=false;
 $('focusExit').hidden=true;
 $('catalogToggle').setAttribute('aria-expanded','false');
 $('reader').scrollIntoView({block:'start',behavior:'smooth'});
}
function initReadingUI(){
 readUISettings();
 applyTypography();
 applySplit(uiPref.split);
 $('catalogToggle').addEventListener('click',()=>{
  if(document.body.classList.contains('catalog-open'))closeCatalog(true);
  else openCatalog();
 });
 $('catalogBackdrop').addEventListener('click',()=>closeCatalog(true));
 $('focusStart').addEventListener('click',enterFocusMode);
 $('focusExit').addEventListener('click',()=>openBrowse('category'));
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&document.body.classList.contains('catalog-open'))closeCatalog(true);
 });
 for(const [button,key,step] of [
  ['passageFontMinus','passageSize',-2],['passageFontPlus','passageSize',2],
  ['questionFontMinus','questionSize',-1],['questionFontPlus','questionSize',1]
 ]){
  $(button).addEventListener('click',()=>{
   const [lo,hi]=key==='passageSize'?[14,28]:[13,24];
   uiPref[key]=range(uiPref[key]+step,lo,hi);
   applyTypography();storeUISettings();
  });
 }
 const bar=$('studySplitter');
 bar.addEventListener('pointerdown',e=>{
  if(!document.body.classList.contains('reading-focus')||!window.matchMedia('(min-width:700px)').matches)return;
  uiPref.dragging=true;
  bar.classList.add('is-dragging');
  try{bar.setPointerCapture(e.pointerId);}catch(_){}
  e.preventDefault();
 });
 bar.addEventListener('pointermove',e=>{
  if(!uiPref.dragging)return;
  const bounds=$('studyLayout').getBoundingClientRect();
  if(!bounds.width)return;
  applySplit((e.clientX-bounds.left)/bounds.width*100);
 });
 const finishDrag=()=>{
  if(!uiPref.dragging)return;
  uiPref.dragging=false;bar.classList.remove('is-dragging');storeUISettings();
 };
 bar.addEventListener('pointerup',finishDrag);
 bar.addEventListener('pointercancel',finishDrag);
 bar.addEventListener('lostpointercapture',finishDrag);
 bar.addEventListener('keydown',e=>{
  const diff=e.key==='ArrowLeft'?-2:e.key==='ArrowRight'?2:e.key==='Home'?-100:e.key==='End'?100:0;
  if(!diff)return;
  e.preventDefault();
  applySplit(e.key==='Home'?30:e.key==='End'?70:uiPref.split+diff,true);
 });
 window.addEventListener('resize',()=>{if(!uiPref.dragging)applySplit(uiPref.split);});
}

async function init(){
 $('readingBrowse').hidden=false;
 $('readingWorkspace').hidden=true;
 document.body.classList.add('reading-browsing');
 $('browseStepLabel').textContent='LOADING';
 $('browseHeading').textContent='教材を読み込んでいます';
 $('browseDescription').textContent='15分野の長文教材を準備しています。';
 $('browseCards').innerHTML='<p class="browse-empty" role="status">収録済みの教材を確認しています…</p>';
 $('browseNotice').textContent='';
 status('教材一覧を読み込んでいます…');
 try{
  const response=await fetch('data/reading/entrance/manifest.json',{cache:'no-store'});if(!response.ok)throw Error('一覧 HTTP '+response.status);
  const manifest=await response.json();if(!Array.isArray(manifest.sets))throw Error('一覧形式が不正です');
  state.manifest=manifest;
  // Keep the network request count bounded as the library grows toward 450 lessons.
  // Loading 450 JSON files simultaneously can overwhelm Safari and school Wi-Fi.
  const results=[];
  const batchSize=8;
  for(let offset=0;offset<manifest.sets.length;offset+=batchSize){
   const batch=manifest.sets.slice(offset,offset+batchSize);
   const settled=await Promise.allSettled(batch.map(async item=>{
    const r=await fetch(item.file,{cache:'no-store'});if(!r.ok)throw Error(item.id+' HTTP '+r.status);
    const obj=await r.json();const actual=words(obj),expected=manifest.levels.find(l=>l.id===obj.level_id)?.words,compatible=(obj.level_ids||[obj.level_id]).every(id=>{const band=manifest.levels.find(l=>l.id===id)?.words;return band&&actual>=band[0]&&actual<=band[1];});
    if(!expected||!compatible||actual!==obj.word_count||actual<expected[0]||actual>expected[1]||!obj.original||!obj.source_links?.length||!obj.questions?.length)throw Error(item.id+' の内容・語数を確認してください');
    if(obj.status!=='reviewed'&&obj.status!=='published')return null;return obj;
   }));
   results.push(...settled);
   status('教材を読み込み中… '+Math.min(offset+batchSize,manifest.sets.length)+' / '+manifest.sets.length);
  }
  state.sets=results.filter(r=>r.status==='fulfilled'&&r.value).map(r=>r.value);
  if(window.CopeakReadingEnrichment?.expandAll)state.sets=window.CopeakReadingEnrichment.expandAll(state.sets);
  const errors=results.filter(r=>r.status==='rejected');status(errors.length?errors.length+'件の教材を検証できませんでした。編集データを確認してください。':'現在の収録教材 '+state.sets.length+'セット / 目標450セット');
  renderCatalog();openBrowse('category');
 }catch(e){
  status('教材一覧を読み込めませんでした：'+e.message);
  $('browseStepLabel').textContent='LOAD ERROR';
  $('browseHeading').textContent='教材を読み込めませんでした';
  $('browseDescription').textContent='インターネット接続を確認し、ページを再読み込みしてください。';
  $('browseCards').innerHTML='<p class="browse-empty" role="alert">教材の取得に失敗しました。再読み込みしてお試しください。</p>';
 }
}
$('categoryFilter').addEventListener('change',e=>{state.category=e.target.value;renderCatalog();renderSetList();});
$('levelFilter').addEventListener('change',e=>{state.level=e.target.value;renderSetList();});
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>chooseExercise(b.dataset.tab)));
$('exerciseChoices').querySelectorAll('[data-exercise]').forEach(b=>b.addEventListener('click',()=>chooseExercise(b.dataset.exercise)));
$('exerciseChange').addEventListener('click',showExerciseChooser);
$('vocabQuizMode').addEventListener('change',()=>{
 if(!state.lesson)return;
 const items=practiceBank('vocab'),r=practiceRecord('vocab');
 const i=items.findIndex(q=>!Number.isInteger(r.answers[q.id]));
 state.quizCursor.vocab=i<0?items.length:i;
 renderVocabQuiz();renderPassage(true);renderPracticeProgress();
});
$('vocabRestart').addEventListener('click',()=>{if(state.lesson)resetMode('vocab');});
$('vocabListToggle').addEventListener('click',()=>{
 if(!state.lesson)return;
 $('vocabListPanel').showModal();
 $('vocabListSearch').focus({preventScroll:true});
});
$('vocabListClose').addEventListener('click',()=>$('vocabListPanel').close());
$('vocabListPanel').addEventListener('click',event=>{
 if(event.target===$('vocabListPanel'))$('vocabListPanel').close();
});
$('vocabListSearch').addEventListener('input',event=>{
 const q=event.target.value.trim().toLowerCase();
 let count=0;
 $('vocabList').querySelectorAll('[data-vocab-search]').forEach(card=>{
  card.hidden=!!q&&!card.dataset.vocabSearch.includes(q);
  if(!card.hidden)count++;
 });
 $('vocabListCount').textContent=count+' / '+(state.lesson?.vocabulary.length||0)+'語を表示';
});
$('gradingSettings').querySelectorAll('[data-grading-mode]').forEach(button=>button.addEventListener('click',()=>{
 const selected=button.dataset.gradingMode;
 if(selected!=='batch'&&selected!=='immediate'||state.gradingChosen||!state.lesson)return;
 state.gradingMode=selected;state.gradingChosen=true;
 try{localStorage.setItem('copeak-reading-grading-mode',selected);}catch(_){}
 renderQuestions();$('questionScroll').scrollTop=0;
 $('questions').querySelector('[data-q]')?.focus({preventScroll:true});
}));
$('gradeAll').addEventListener('click',()=>{
 if(!state.lesson||state.gradingMode!=='batch'||state.graded)return;
 if(!state.lesson.questions.every(q=>Number.isInteger(state.answers[q.id])))return;
 state.graded=true;recordCompletion('questions');renderQuestions();renderPracticeProgress();
 const accurate=state.lesson.questions.filter(q=>state.answers[q.id]===q.answer).length;
 if(accurate/state.lesson.questions.length>=0.8)window.CopeakReadingEffects?.celebrate();
 $('questionScroll').scrollTo({top:0,behavior:'smooth'});
});
$('resetAnswers').addEventListener('click',()=>{
 if(!state.lesson)return;
 state.answers={};state.graded=false;state.activeQuestionId=null;
 practiceRecord('questions').finished=false;
 saveProgress();renderQuestions();renderSetList();renderPracticeProgress();renderPassage(true);focusEvidence(null,false);
 $('questionScroll').scrollTo({top:0,behavior:'smooth'});
});
try{state.gradingMode=localStorage.getItem('copeak-reading-grading-mode')==='batch'?'batch':'immediate';}catch(_){}

$('printOpen').addEventListener('click',()=>$('printDialog').showModal());
$('printPdf').addEventListener('click',printPDF);$('printDocx').addEventListener('click',downloadDocx);
window.CopeakReadingExamContext=()=>({lesson:state.lesson,mode:state.exercise||'questions',sets:state.sets,direction:$('vocabQuizMode').value});
try{state.lookupEnabled=localStorage.getItem('copeak-reading-lookup-enabled')!=='false';}catch(_){}
function updateLookupUI(){
 const button=$('wordLookupToggle');
 button.setAttribute('aria-pressed',String(state.lookupEnabled));
 button.textContent=state.lookupEnabled?'単語 ON':'単語 OFF';
 button.title=state.lookupEnabled?'単語・英文タップで意味を表示（押すとOFF）':'単語・英文タップの意味表示はOFF（押すとON）';
 $('passage').classList.toggle('dictionary-off',!state.lookupEnabled);
}
$('wordLookupToggle').addEventListener('click',()=>{
 state.lookupEnabled=!state.lookupEnabled;
 try{localStorage.setItem('copeak-reading-lookup-enabled',String(state.lookupEnabled));}catch(_){}
 if(!state.lookupEnabled&&$('readingLookupDialog').open)$('readingLookupDialog').close();
 updateLookupUI();
});
updateLookupUI();
initReadingUI();
installLongPressLookup();
init();
})();
