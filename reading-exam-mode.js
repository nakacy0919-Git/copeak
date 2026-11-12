/* Copeak Reading: independently scored, distraction-free exam mode.
   Native fullscreen when supported; a fixed viewport fallback for iPad Safari.
   The learner's existing study answers and explanation settings are never modified. */
(()=>{
 'use strict';
 const $=id=>document.getElementById(id);
 const overlay=$('examOverlay'),start=$('examModeStart');
 if(!overlay||!start)return;
 const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({
  '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
 })[c]);
 const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
 let current=null;
 let dragging=false;
 let leaving=false;
 let split=50;
 try{split=clamp(Number(localStorage.getItem('copeak-reading-exam-split'))||50,30,70);}catch(_){}
 function itemsFor(ctx){
  if(ctx.mode==='questions')return ctx.lesson.questions.map(q=>({
   id:q.id,prompt:q.prompt,options:q.options,answer:q.answer,
   explanation:q.explanation_ja||'解説は登録されていません。'
  }));
  return window.CopeakReadingPractice?.build(ctx.lesson,ctx.mode,ctx.sets,ctx.direction)||[];
 }
 function examLine(text,annotations){
  if(!annotations.length)return escapeHtml(text);
  const positions=[];
  for(const q of annotations){
   if(!q.sourceText)continue;
   const value=String(q.sourceText).split('...')[0].trim();
   if(!value)continue;
   let offset=text.indexOf(value);
   if(offset<0)offset=text.toLowerCase().indexOf(value.toLowerCase());
   if(offset<0)continue;
   if(positions.some(o=>offset<o.end&&o.start<offset+value.length))continue;
   positions.push({start:offset,end:offset+value.length,index:q.index,mask:q.sourceStyle==='mask'});
  }
  positions.sort((a,b)=>a.start-b.start);
  let out='',last=0;
  for(const p of positions){
   out+=escapeHtml(text.slice(last,p.start));
   out+=p.mask?'<span class="reading-blank">【'+(p.index+1)+'】 ________</span>':
    '<span class="exam-underline">'+escapeHtml(text.slice(p.start,p.end))+'</span>';
   last=p.end;
  }
  return out+escapeHtml(text.slice(last));
 }
 function renderPassage(ctx,bank){
  const mode=ctx.mode;
  const marks=new Map();
  if(['cloze','discourse','grammar','paraphrase'].includes(mode)){
   for(const [index,q] of bank.entries()){
    const source=q.source;
    if(!source)continue;
    const key=source.paragraphId+'-'+source.sentenceIndex;
    if(!marks.has(key))marks.set(key,[]);
    marks.get(key).push({...q,index});
   }
  }
  $('examPassage').innerHTML=ctx.lesson.paragraphs.map((p,pi)=>
   '<div class="exam-paragraph" data-number="PARAGRAPH '+(pi+1)+'">'+
   p.sentences.map((s,si)=>examLine(s.en,marks.get(p.id+'-'+si)||[])).join(' ')+
   '</div>'
  ).join('');
 }
 function answerCount(){
  return current?current.items.filter(q=>Number.isInteger(current.answers[q.id])).length:0;
 }
 function renderQuestions(preserveScroll=true){
  if(!current)return;
  const scroll=$('examQuestionScroll'),top=preserveScroll?scroll.scrollTop:0;
  $('examQuestions').innerHTML=current.items.map((q,index)=>{
   const picked=current.answers[q.id];
   const answered=Number.isInteger(picked);
   const explained=current.finished;
   return '<article class="exam-question" data-exam-question="'+escapeHtml(q.id)+'">'+
    '<div class="exam-question-number">QUESTION '+(index+1)+' / '+current.items.length+'</div>'+
    '<h3>' + escapeHtml(q.prompt) + '</h3>'+
    '<div class="exam-options">'+q.options.map((opt,j)=>{
     const cls=explained?(j===q.answer?'is-correct':j===picked?'is-wrong':''):(picked===j?'is-selected':'');
     return '<button type="button" class="exam-option '+cls+'" data-exam-q="'+escapeHtml(q.id)+'" data-exam-choice="'+j+'" aria-pressed="'+(picked===j)+'" '+(explained?'disabled':'')+'>'+
      '<span class="exam-option-letter">'+String.fromCharCode(65+j)+'</span><span>'+escapeHtml(opt)+'</span></button>';
    }).join('')+'</div>'+
    (explained?'<p class="exam-explanation">'+
     '<strong>'+(picked===q.answer?'正解':'不正解')+' ／ 正答：'+String.fromCharCode(65+q.answer)+'</strong>　'+escapeHtml(q.explanation)+
     '</p>':'')+
    '</article>';
  }).join('');
  const answered=answerCount();
  $('examAnswerCount').textContent=answered+' / '+current.items.length+' 問解答';
  $('examSubmit').disabled=current.finished||answered!==current.items.length;
  $('examSubmitArea').hidden=current.finished;
  $('examResult').hidden=!current.finished;
  if(current.finished){
   const score=current.items.filter(q=>current.answers[q.id]===q.answer).length;
   $('examResult').innerHTML='<h3>採点結果：'+score+' / '+current.items.length+' 問正解</h3>'+
    '<p>正答率 '+Math.round(score/current.items.length*100)+'%。各問題の下に解説を表示しました。</p>'+
    '<button type="button" id="examReturnToStudy">学習画面に戻る</button>';
   $('examReturnToStudy').addEventListener('click',leaveExam);
  }else $('examResult').innerHTML='';
  scroll.scrollTop=top;
 }
 // Local-only draft: not part of classroom grades and never sent to an API.
 const draftName=key=>'copeak-reading-exam-draft-'+key;
 function bankFingerprint(items){
  let h=2166136261;
  const source=items.map(q=>q.id+'\u001f'+q.options.join('\u001f')).join('\u001e');
  for(let i=0;i<source.length;i++)h=Math.imul(h^source.charCodeAt(i),16777619);
  return h>>>0;
 }
 function reportSaveError(){
  const status=$('examSaveStatus');
  status.hidden=false;
  status.textContent='この端末では途中の解答を保存できません。';
 }
 function clearSaveError(){
  const status=$('examSaveStatus');
  status.hidden=true;status.textContent='';
 }
 function saveDraft(){
  if(!current||current.finished)return;
  try{
   localStorage.setItem(draftName(current.key),JSON.stringify({
    fingerprint:current.fingerprint,
    answers:current.answers
   }));
   clearSaveError();
  }catch{reportSaveError();}
 }
 function loadDraft(key,items){
  try{
   const data=JSON.parse(localStorage.getItem(draftName(key))||'null');
   if(!data||data.fingerprint!==bankFingerprint(items)||!data.answers||typeof data.answers!=='object'||Array.isArray(data.answers))return Object.create(null);
   const answerMap=Object.create(null);
   for(const q of items){
    const value=data.answers[q.id];
    if(Number.isInteger(value)&&value>=0&&value<q.options.length)answerMap[q.id]=value;
   }
   return answerMap;
  }catch{return Object.create(null)}
 }
 function clearDraft(){
  if(!current)return;
  try{localStorage.removeItem(draftName(current.key));}catch{}
 }
 function saveCompletedAttempt(){
  if(!current)return;
  const key='copeak-reading-exam-history-'+current.lessonId;
  const correct=current.items.filter(q=>current.answers[q.id]===q.answer).length;
  try{
   const previous=JSON.parse(localStorage.getItem(key)||'[]');
   const list=Array.isArray(previous)?previous:[];
   list.push({mode:current.mode,direction:current.direction||null,
    date:new Date().toISOString(),score:correct,total:current.items.length,answers:{...current.answers}});
   localStorage.setItem(key,JSON.stringify(list.slice(-10)));
   clearSaveError();
   return true;
  }catch(_){reportSaveError();return false;}
 }
 function setSplit(value,save=false){
  const bounds=$('examLayout').getBoundingClientRect();
  const effective=bounds.width-12;
  const lo=effective>0?Math.max(30,Math.ceil(260/effective*100)):30;
  const hi=effective>0?Math.min(70,Math.floor((effective-280)/effective*100)):70;
  split=clamp(value,lo<=hi?lo:50,lo<=hi?hi:50);
  $('examLayout').style.setProperty('--exam-left',split+'%');
  $('examSplitter').setAttribute('aria-valuenow',String(Math.round(split)));
  $('examSplitter').setAttribute('aria-valuetext','英文 '+Math.round(split)+'%、問題 '+Math.round(100-split)+'%');
  if(save)try{localStorage.setItem('copeak-reading-exam-split',String(Math.round(split)));}catch(_){}
 }
 function leaveExam(){
  if(leaving||overlay.hidden)return;
  leaving=true;
  window.CopeakReadingInk?.pauseExam();
  if(document.fullscreenElement===overlay){
   try{document.exitFullscreen?.()?.catch?.(()=>{});}catch(_){}
  }
  overlay.hidden=true;
  document.body.classList.remove('reading-exam-mode');
  $('readingWorkspace').inert=false;
  document.querySelector('.masthead').inert=false;
  leaving=false;
  start.focus();
 }
 function enterExam(){
  const ctx=window.CopeakReadingExamContext?.();
  if(!ctx?.lesson)return;
  const items=itemsFor(ctx);
  if(!items.length)return;
  const key=ctx.lesson.id+'/'+ctx.mode+'/'+ctx.direction;
  if(!current||current.key!==key||current.finished){
   current={key,lessonId:ctx.lesson.id,mode:ctx.mode,direction:ctx.direction,items,
    answers:loadDraft(key,items),fingerprint:bankFingerprint(items),finished:false};
  }
  renderPassage(ctx,current.items);
  window.CopeakReadingInk?.syncExam(ctx.lesson.id,ctx.mode||'questions');
  renderQuestions(false);
  overlay.hidden=false;
  clearSaveError();
  document.body.classList.add('reading-exam-mode');
  $('readingWorkspace').inert=true;
  document.querySelector('.masthead').inert=true;
  const app=$('readingApp');
  for(const key of ['--reading-passage-size','--reading-question-size']){
   const size=app.style.getPropertyValue(key);
   if(size)overlay.style.setProperty(key,size);
  }
  setSplit(split);
  $('examPassageScroll').scrollTop=0;
  $('examQuestionScroll').scrollTop=0;
  $('examExit').focus({preventScroll:true});
  // Request true fullscreen when the browser permits it. Keep the fixed,
  // independently scrollable viewport as a fallback for iPad Safari, which
  // may reject fullscreen or leave it after system gestures.
  if(typeof overlay.requestFullscreen==='function'){
   try{
    const result=overlay.requestFullscreen();
    result?.catch?.(()=>{});
   }catch(_){}
  }
 }
 start.addEventListener('click',enterExam);
 $('examExit').addEventListener('click',leaveExam);
 $('examQuestions').addEventListener('click',e=>{
  const option=e.target.closest?.('[data-exam-q]');
  if(!option||!current||current.finished)return;
  const q=current.items.find(x=>x.id===option.dataset.examQ);
  const chosen=Number(option.dataset.examChoice);
  if(!q||!Number.isInteger(chosen)||chosen<0||chosen>=q.options.length)return;
  current.answers[q.id]=chosen;
  saveDraft();
  const scroll=$('examQuestionScroll').scrollTop;
  renderQuestions();
  $('examQuestionScroll').scrollTop=scroll;
  $('examQuestions').querySelector('[data-exam-q="'+q.id+'"][data-exam-choice="'+chosen+'"]')?.focus({preventScroll:true});
 });
 $('examSubmit').addEventListener('click',()=>{
  if(!current||current.finished||answerCount()!==current.items.length)return;
  current.finished=true;
  const archived=saveCompletedAttempt();
  if(archived)clearDraft();
  renderQuestions();
  $('examQuestionScroll').scrollTop=0;
 });
 const splitter=$('examSplitter');
 splitter.addEventListener('pointerdown',e=>{
  if(overlay.hidden||window.matchMedia('(max-width:699px)').matches)return;
  dragging=true;splitter.setPointerCapture?.(e.pointerId);e.preventDefault();
 });
 splitter.addEventListener('pointermove',e=>{
  if(!dragging)return;
  const r=$('examLayout').getBoundingClientRect();
  if(r.width>0)setSplit((e.clientX-r.left)/r.width*100);
 });
 const stop=()=>{if(!dragging)return;dragging=false;setSplit(split,true);};
 for(const event of ['pointerup','pointercancel','lostpointercapture'])splitter.addEventListener(event,stop);
 splitter.addEventListener('keydown',e=>{
  let next=null;
  if(e.key==='ArrowLeft')next=split-2;
  else if(e.key==='ArrowRight')next=split+2;
  else if(e.key==='Home')next=30;
  else if(e.key==='End')next=70;
  if(next===null)return;
  e.preventDefault();setSplit(next,true);
 });
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&!overlay.hidden)leaveExam();
 });

 window.addEventListener('resize',()=>{if(!overlay.hidden&&!dragging)setSplit(split);});
})();
