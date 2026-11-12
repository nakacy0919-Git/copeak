/* Copeak Study Entrance Reading Studio. Each lesson is authored, sourced, and reviewed individually. */
(()=>{'use strict';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const escapeXml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&apos;'}[c])).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g,'');
const state={manifest:null,sets:[],lesson:null,category:'all',level:'all',showAll:false,support:false,answers:{},clozeAnswers:{},vocabIndex:0,vocabChoice:null,vocabOrder:[],panel:'questions',exercise:null,graded:false,gradingMode:'immediate',activeQuestionId:null};
const label=(id,collection)=>collection.find(x=>x.id===id)?.label||id;
const status=s=>{$('loadStatus').textContent=s;};
const words=lesson=>lesson.paragraphs.flatMap(p=>p.sentences).map(s=>s.en).join(' ').trim().split(/\s+/).filter(Boolean).length;
const readProgress=id=>{try{return JSON.parse(localStorage.getItem('copeak-reading-'+id)||'{}');}catch{return {};}};
const saveProgress=()=>{try{localStorage.setItem('copeak-reading-'+state.lesson.id,JSON.stringify({answers:state.answers,clozeAnswers:state.clozeAnswers,graded:state.graded}));}catch{}};
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
function selectLesson(id,startFocus=true){
 const s=state.sets.find(x=>x.id===id);if(!s)return;
 state.lesson=s;const progress=readProgress(s.id);state.answers=progress.answers||{};state.clozeAnswers=progress.clozeAnswers||{};state.graded=progress.graded===true;state.activeQuestionId=null;
 state.showAll=false;state.support=false;state.vocabIndex=0;state.vocabChoice=null;state.panel='questions';state.exercise=null;
 $('supportToggle').disabled=false;$('printOpen').disabled=false;$('focusStart').disabled=false;
 $('supportToggle').setAttribute('aria-pressed','false');$('supportToggle').setAttribute('aria-label','読解の根拠段落を表示');
 $('lessonTitle').textContent=s.title+' / '+s.title_ja;
 $('lessonMeta').textContent=label(s.category_id,state.manifest.categories)+' · '+(s.level_ids||[s.level_id]).map(id=>label(id,state.manifest.levels)).join(' / ')+' · '+s.word_count+' words · '+s.questions.length+' questions';
 $('sourceLinks').innerHTML=s.source_links.map(l=>'<a target="_blank" rel="noopener noreferrer" href="'+esc(l.url)+'">'+esc(l.title)+'</a>').join('');
 renderPassage();renderQuestions();renderVocab();renderNotes();renderCloze();switchTab('questions');renderSetList();showExerciseChooser();
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
function normalizeWord(word){return String(word||'').toLowerCase().replace(/[’]/g,"'").replace(/^[^a-z]+|[^a-z]+$/g,'');}
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
 const re=/[A-Za-z]+(?:['’\-][A-Za-z]+)*/g;
 for(const m of text.matchAll(re)){
  out+=esc(text.slice(last,m.index));
  out+='<span class="reading-word" data-word="'+esc(m[0])+'" title="単語を長押しで意味を見る">'+esc(m[0])+'</span>';
  last=m.index+m[0].length;
 }
 return out+esc(text.slice(last));
}
function clozeSentence(text,paragraphId,sentenceIndex){
 const targets=state.lesson?.cloze?.map((q,index)=>({...q,index})).filter(q=>q.paragraph_id===paragraphId&&q.sentence_index===sentenceIndex)||[];
 if(!targets.length)return wordSpans(text);
 let spans=[{start:0,end:text.length,masked:false,raw:text}];
 for(const q of targets){
  const where=text.indexOf(q.answer);
  if(where<0)continue;
  spans=spans.flatMap(part=>{
   if(part.masked||part.start>where||part.end<where+q.answer.length)return [part];
   return [
    {start:part.start,end:where,masked:false,raw:text.slice(part.start,where)},
    {start:where,end:where+q.answer.length,masked:true,index:q.index},
    {start:where+q.answer.length,end:part.end,masked:false,raw:text.slice(where+q.answer.length,part.end)}
   ];
  });
 }
 return spans.map(part=>part.masked?'<span class="reading-blank" aria-label="空欄'+(part.index+1)+'">【'+(part.index+1)+'】________</span>':wordSpans(part.raw)).join('');
}
function renderPassage(){
 const s=state.lesson;if(!s)return;
 const cloze=state.exercise==='cloze';
 $('passage').innerHTML=s.paragraphs.map((p,pi)=>
 '<div class="paragraph" id="'+esc(p.id)+'" data-paragraph="'+esc(p.id)+'"><strong>PARAGRAPH '+(pi+1)+'</strong>'+
 p.sentences.map((t,si)=>'<span class="sentence" data-sentence="'+pi+'-'+si+'"><span class="sentence-line">'+
 (cloze?clozeSentence(t.en,p.id,si):wordSpans(t.en))+
 '</span> </span>').join('')+'</div>').join('');
 $('passage').classList.toggle('cloze-active',cloze);
 $('passageScroll').scrollTop=0;
}
function showLookup(kind,payload){
 if(!state.lesson)return;
 const dialog=$('readingLookupDialog');
 $('lookupDefinition').hidden=kind!=='word';
 $('lookupKind').textContent=kind==='word'?'WORD LOOKUP':'SENTENCE TRANSLATION';
 if(kind==='sentence'){
  if(state.exercise==='cloze'){
   $('lookupHeading').textContent='本文穴埋めの練習中';
   $('lookupJapanese').textContent='答えを隠すため、穴埋め練習中は一文訳を表示しません。他の練習に切り替えると確認できます。';
  }else{
   $('lookupHeading').textContent='第'+(payload.pi+1)+'段落 · '+(payload.si+1)+'文目';
   $('lookupJapanese').textContent=state.lesson.paragraphs[payload.pi]?.sentences[payload.si]?.ja||'日本語訳が未登録です。';
  }
 }else{
  $('lookupHeading').textContent=payload.word;
  const known=dictionaryEntry(payload.word);
  $('lookupJapanese').textContent=known?'日本語：'+known.ja:'日本語の意味：この語は教材辞書に未登録です。';
  $('lookupDefinition').textContent=known?'English definition: '+known.definition+(known.synonym?' ／ Synonym: '+known.synonym:''):'英英定義：未登録です。重要語彙から優先して追加しています。';
 }
 if(!dialog.open)dialog.showModal();
}
function installLongPressLookup(){
 const root=$('passage');let timer=null,start=null,suppressed=false;
 const clear=()=>{if(timer!==null){clearTimeout(timer);timer=null;}start=null;};
 const resolve=target=>{
  const word=target.closest?.('[data-word]');
  const sentence=target.closest?.('[data-sentence]');
  if(!sentence)return null;
  if(word)return {kind:'word',word:word.dataset.word};
  const [pi,si]=sentence.dataset.sentence.split('-').map(Number);
  return {kind:'sentence',pi,si};
 };
 root.addEventListener('pointerdown',e=>{
  if(e.button!==undefined&&e.button!==0)return;
  const info=resolve(e.target);if(!info)return;
  suppressed=false;
  start={x:e.clientX,y:e.clientY,info};
  timer=setTimeout(()=>{
   timer=null;
   if(!start)return;
   suppressed=true;
   const last=start.info;start=null;
   try{window.getSelection()?.removeAllRanges();}catch(_){}
   showLookup(last.kind,last);
  },650);
 });
 root.addEventListener('pointermove',e=>{
  if(start&&Math.hypot(e.clientX-start.x,e.clientY-start.y)>12)clear();
 });
 for(const type of ['pointerup','pointercancel','pointerleave'])root.addEventListener(type,clear);
 root.addEventListener('contextmenu',e=>{
  const info=resolve(e.target);if(!info)return;
  e.preventDefault();clear();
  if(suppressed){suppressed=false;return;}
  showLookup(info.kind,info);
 });
 root.addEventListener('dblclick',e=>{
  const el=e.target.closest?.('[data-sentence]');if(!el)return;
  const [pi,si]=el.dataset.sentence.split('-').map(Number);
  showLookup('sentence',{pi,si});
 });
 $('lookupClose').addEventListener('click',()=>$('readingLookupDialog').close());
 $('readingLookupDialog').addEventListener('click',e=>{if(e.target===$('readingLookupDialog'))$('readingLookupDialog').close();});
}
function focusEvidence(ids,jump=false){
 document.querySelectorAll('.paragraph.support-hit').forEach(x=>x.classList.remove('support-hit'));
 const statusText=$('evidenceStatus');
 if(!state.support){
  statusText.textContent='サポートモードをONにすると、根拠段落を表示できます。';
  return;
 }
 if(!ids?.length){statusText.textContent='問題を選ぶと根拠段落が黄色で表示されます。';return;}
 const paragraphNames=ids.map(id=>{
  const ix=state.lesson?.paragraphs.findIndex(p=>p.id===id);
  const node=document.getElementById(id);
  if(node)node.classList.add('support-hit');
  return ix>=0?'第'+(ix+1)+'段落':'';
 }).filter(Boolean);
 statusText.textContent='根拠：'+paragraphNames.join('・')+' をハイライトしています。';
 if(jump&&ids[0]){
  const node=document.getElementById(ids[0]),scroll=$('passageScroll');
  if(node&&scroll&&document.body.classList.contains('reading-focus')){
   const delta=node.getBoundingClientRect().top-scroll.getBoundingClientRect().top;
   scroll.scrollTo({top:Math.max(0,scroll.scrollTop+delta-Math.max(15,scroll.clientHeight*.20)),behavior:'smooth'});
  }else node?.scrollIntoView({behavior:'smooth',block:'center'});
 }
}
function renderQuestions(){
 const s=state.lesson;if(!s)return;
 const panelScroll=$('questionScroll');
 const retainedScroll=panelScroll?.scrollTop||0;
 const qTotal=s.questions.length;
 const answered=s.questions.filter(q=>Number.isInteger(state.answers[q.id])).length;
 const complete=answered===qTotal;
 const isBatch=state.gradingMode==='batch';
 const showResults=!isBatch||state.graded;
 $('answerCount').textContent=answered+' / '+qTotal+'問回答';
 $('gradingMode').value=state.gradingMode;
 $('gradeAll').hidden=!isBatch;
 $('gradeAll').disabled=!complete||state.graded;
 $('gradeAll').textContent=state.graded?'採点済み':'全問の結果を表示';
 $('readingResult').textContent=complete&&showResults
  ?'採点結果：'+s.questions.filter(q=>state.answers[q.id]===q.answer).length+' / '+qTotal+' 問正解'
  :(isBatch&&!state.graded?'全問を選択すると採点できます。回答は採点前なら変更できます。':'');
 $('questions').innerHTML=s.questions.map((q,i)=>{
  const chosen=state.answers[q.id],selected=Number.isInteger(chosen);
  const revealed=selected&&showResults;
  return '<article class="question-card" data-question="'+esc(q.id)+'"><p class="skill">'+esc(q.skill.toUpperCase())+' · Q'+(i+1)+'</p><h4>'+esc(q.prompt)+'</h4><div class="choices">'+q.options.map((option,j)=>
   '<button type="button" data-q="'+esc(q.id)+'" data-option="'+j+'" aria-pressed="'+(selected&&j===chosen)+'" '+
   (revealed?'disabled ':'')+'class="'+(revealed&&j===q.answer?'correct':revealed&&j===chosen?'wrong':selected&&j===chosen?'selected':'')+'">'+String.fromCharCode(65+j)+'. '+esc(option)+'</button>'
  ).join('')+'</div>'+
  (revealed?'<p class="feedback '+(chosen===q.answer?'correct':'wrong')+'">'+(chosen===q.answer?'正解！':'正解は '+String.fromCharCode(65+q.answer))+'</p><p class="feedback">'+esc(q.explanation_ja)+'</p>':'')+
  '<div class="card-actions"><button type="button" data-evidence="'+esc(q.id)+'" '+(state.support?'':'hidden')+'>根拠段落を見る</button></div></article>';
 }).join('');
 $('questions').querySelectorAll('[data-q]').forEach(b=>b.addEventListener('click',()=>{
  const q=s.questions.find(x=>x.id===b.dataset.q);
  if(!q||(state.gradingMode==='batch'&&state.graded)||
   (state.gradingMode==='immediate'&&Number.isInteger(state.answers[q.id])))return;
  state.activeQuestionId=q.id;
  state.answers[q.id]=Number(b.dataset.option);
  saveProgress();renderQuestions();renderSetList();
  if(state.support)focusEvidence(q.paragraph_ids,true);
 }));
 $('questions').querySelectorAll('[data-evidence]').forEach(b=>b.addEventListener('click',()=>{
  const q=s.questions.find(x=>x.id===b.dataset.evidence);
  state.activeQuestionId=q?.id||null;
  focusEvidence(q?.paragraph_ids,true);
 }));
 if(panelScroll)panelScroll.scrollTop=retainedScroll;
}
function renderVocab(){
 const s=state.lesson;if(!s)return;
 $('vocabList').innerHTML=s.vocabulary.map(v=>'<article><strong>'+esc(v.term)+'</strong><span>日本語：'+esc(v.ja)+'</span><span>Synonym: '+esc(v.synonym)+'</span><span>Definition: '+esc(v.definition)+'</span></article>').join('');
 state.vocabOrder=shuffle(s.vocabulary.map((_,i)=>i));state.vocabIndex=0;state.vocabChoice=null;renderVocabQuiz();
}
function renderVocabQuiz(){
 const s=state.lesson;if(!s)return;
 if(state.vocabIndex>=state.vocabOrder.length){
 $('vocabQuiz').innerHTML='<p class="notice">すべての語彙を確認しました。もう一度取り組む場合は「クイズをやり直す」を押してください。</p>';return;
 }
 const i=state.vocabOrder[state.vocabIndex],v=s.vocabulary[i],mode=$('vocabQuizMode').value;
 const target=x=>mode==='en-ja'?x.ja:x.term;
 const prompt=mode==='en-ja'?v.term:mode==='ja-en'?v.ja:v.definition;
 const others=shuffle(s.vocabulary.filter((_,j)=>j!==i)).slice(0,3);
 const options=shuffle([v,...others]),answered=state.vocabChoice!==null;
 $('vocabQuiz').innerHTML='<article class="quiz-card"><p>QUESTION '+(state.vocabIndex+1)+' / '+state.vocabOrder.length+'</p><h3>'+esc(prompt)+'</h3><div class="choices">'+options.map(x=>{
 const choice=target(x),correct=choice===target(v);
 return '<button type="button" data-vocab="'+esc(x.term)+'" '+(answered?'disabled ':'')+'class="'+(answered&&correct?'correct':answered&&x.term===state.vocabChoice?'wrong':'')+'">'+esc(choice)+'</button>';
 }).join('')+'</div>'+(answered?'<p class="feedback">'+(state.vocabChoice===v.term?'Correct!':'正解：'+esc(target(v)))+'　'+esc(v.synonym)+'</p><button type="button" id="nextVocab">次の語彙 →</button>':'')+'</article>';
 $('vocabQuiz').querySelectorAll('[data-vocab]').forEach(b=>b.addEventListener('click',()=>{
  if(state.vocabChoice!==null)return;state.vocabChoice=b.dataset.vocab;
  // preserve the choices shown when feedback is displayed
  const chosen=b.dataset.vocab,correct=state.lesson.vocabulary[i].term;
  $('vocabQuiz').querySelectorAll('[data-vocab]').forEach(btn=>{
   btn.disabled=true;if(btn.dataset.vocab===correct)btn.classList.add('correct');
   if(btn.dataset.vocab===chosen&&chosen!==correct)btn.classList.add('wrong');
  });
  const card=$('vocabQuiz').querySelector('.quiz-card');
  const feedback=document.createElement('p');feedback.className='feedback';feedback.textContent=(chosen===correct?'Correct!':'正解：'+target(v))+' / Synonym: '+v.synonym;card.appendChild(feedback);
  const next=document.createElement('button');next.type='button';next.textContent='次の語彙 →';card.appendChild(next);
  next.addEventListener('click',()=>{state.vocabIndex++;state.vocabChoice=null;renderVocabQuiz();});
 }));
}
function renderNotes(){
 const s=state.lesson;if(!s)return;
 const p=n=>'<article class="note-card"><strong>'+esc(n.focus||n.expression||n.source)+'</strong><p>'+esc(n.explanation_ja||n.role_ja||'')+'</p>'+(n.rewrite?'<p>→ '+esc(n.rewrite)+'</p>':'')+(n.paragraph_id?'<small>'+esc(n.paragraph_id.toUpperCase())+'</small>':'')+'</article>';
 $('grammarNotes').innerHTML=s.grammar.map(p).join('');$('discourseNotes').innerHTML=s.discourse.map(p).join('');$('paraphraseNotes').innerHTML=s.paraphrases.map(p).join('');
}
function renderCloze(){
 const s=state.lesson;if(!s)return;
 $('clozeQuestions').innerHTML=s.cloze.map((q,i)=>{
 const paragraph=s.paragraphs.find(p=>p.id===q.paragraph_id),sentence=paragraph?.sentences[q.sentence_index]?.en||'';
 const pos=sentence.indexOf(q.answer);const blank=pos<0?sentence:sentence.slice(0,pos)+' ________ '+sentence.slice(pos+q.answer.length);
 const chosen=state.clozeAnswers[i],answered=Number.isInteger(chosen);
 return '<article class="question-card"><p class="skill">CLOZE '+(i+1)+' · '+esc(q.paragraph_id.toUpperCase())+'</p><h4>'+esc(blank)+'</h4><div class="choices">'+q.options.map((o,j)=>'<button type="button" data-cloze="'+i+'" data-option="'+j+'" '+(answered?'disabled ':'')+'class="'+(answered&&o===q.answer?'correct':answered&&j===chosen?'wrong':'')+'">'+String.fromCharCode(65+j)+'. '+esc(o)+'</button>').join('')+'</div>'+
 (answered?'<p class="feedback">'+(q.options[chosen]===q.answer?'Correct!':'正解：'+esc(q.answer))+'</p><p>'+esc(q.explanation_ja)+'</p>':'')+'</article>';
 }).join('');
 $('clozeQuestions').querySelectorAll('[data-cloze]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.cloze);if(Number.isInteger(state.clozeAnswers[i]))return;state.clozeAnswers[i]=Number(b.dataset.option);saveProgress();renderCloze();}));
}
function switchTab(tab){
 const changed=state.panel!==tab;
 state.panel=tab;document.querySelectorAll('[data-tab]').forEach(b=>b.setAttribute('aria-current',String(b.dataset.tab===tab)));
 document.querySelectorAll('[data-panel]').forEach(p=>p.hidden=p.dataset.panel!==tab);
 if(changed)$('questionScroll').scrollTop=0;
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
 $('catalogToggle').hidden=false;
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
 $('focusExit').addEventListener('click',exitFocusMode);
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
 status('教材一覧を読み込んでいます…');
 try{
  const response=await fetch('data/reading/entrance/manifest.json',{cache:'no-store'});if(!response.ok)throw Error('一覧 HTTP '+response.status);
  const manifest=await response.json();if(!Array.isArray(manifest.sets))throw Error('一覧形式が不正です');
  state.manifest=manifest;
  const results=await Promise.allSettled(manifest.sets.map(async item=>{
   const r=await fetch(item.file,{cache:'no-store'});if(!r.ok)throw Error(item.id+' HTTP '+r.status);
   const obj=await r.json();const actual=words(obj),expected=manifest.levels.find(l=>l.id===obj.level_id)?.words,compatible=(obj.level_ids||[obj.level_id]).every(id=>{const band=manifest.levels.find(l=>l.id===id)?.words;return band&&actual>=band[0]&&actual<=band[1];});
   if(!expected||!compatible||actual!==obj.word_count||actual<expected[0]||actual>expected[1]||!obj.original||!obj.source_links?.length||!obj.questions?.length)throw Error(item.id+' の内容・語数を確認してください');
   if(obj.status!=='reviewed'&&obj.status!=='published')return null;return obj;
  }));
  state.sets=results.filter(r=>r.status==='fulfilled'&&r.value).map(r=>r.value);
  const errors=results.filter(r=>r.status==='rejected');status(errors.length?errors.length+'件の教材を検証できませんでした。編集データを確認してください。':'現在の収録教材 '+state.sets.length+'セット / 目標450セット');
  renderCatalog();if(state.sets.length)selectLesson(state.sets[0].id,false);
 }catch(e){status('教材一覧を読み込めませんでした：'+e.message);}
}
$('categoryFilter').addEventListener('change',e=>{state.category=e.target.value;renderCatalog();renderSetList();});
$('levelFilter').addEventListener('change',e=>{state.level=e.target.value;renderSetList();});
$('translationsAll').addEventListener('click',()=>{state.showAll=!state.showAll;renderPassage();$('translationsAll').textContent=state.showAll?'日本語訳をすべて隠す':'日本語訳をすべて表示';focusEvidence(null,false);});
$('supportToggle').addEventListener('click',()=>{
 state.support=!state.support;
 $('supportToggle').setAttribute('aria-pressed',String(state.support));
 $('supportToggle').textContent='サポートモード '+(state.support?'ON':'OFF');
 renderQuestions();
 if(state.support){
  const q=state.lesson?.questions.find(x=>x.id===state.activeQuestionId)
   ||state.lesson?.questions.find(x=>!Number.isInteger(state.answers[x.id]))
   ||state.lesson?.questions[0];
  state.activeQuestionId=q?.id||null;
  focusEvidence(q?.paragraph_ids,true);
 }else focusEvidence(null,false);
});
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>switchTab(b.dataset.tab)));
$('vocabQuizMode').addEventListener('change',()=>{state.vocabIndex=0;state.vocabChoice=null;if(state.lesson)renderVocabQuiz();});
$('vocabRestart').addEventListener('click',()=>{if(state.lesson)renderVocab();});
$('gradingMode').addEventListener('change',e=>{
 state.gradingMode=e.target.value==='batch'?'batch':'immediate';
 try{localStorage.setItem('copeak-reading-grading-mode',state.gradingMode);}catch(_){}
 renderQuestions();
});
$('gradeAll').addEventListener('click',()=>{
 if(!state.lesson||state.gradingMode!=='batch'||state.graded)return;
 if(!state.lesson.questions.every(q=>Number.isInteger(state.answers[q.id])))return;
 state.graded=true;saveProgress();renderQuestions();
 $('questionScroll').scrollTo({top:0,behavior:'smooth'});
});
$('resetAnswers').addEventListener('click',()=>{
 if(!state.lesson)return;
 state.answers={};state.graded=false;state.activeQuestionId=null;
 saveProgress();renderQuestions();renderSetList();focusEvidence(null,false);
 $('questionScroll').scrollTo({top:0,behavior:'smooth'});
});
try{state.gradingMode=localStorage.getItem('copeak-reading-grading-mode')==='batch'?'batch':'immediate';}catch(_){}
$('gradingMode').value=state.gradingMode;
$('printOpen').addEventListener('click',()=>$('printDialog').showModal());
$('printPdf').addEventListener('click',printPDF);$('printDocx').addEventListener('click',downloadDocx);
initReadingUI();
init();
})();
