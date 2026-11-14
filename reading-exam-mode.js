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
 let ticker=0,submitPending=false,saveFailed=false;
 const elapsed=()=>current?Math.max(0,Math.floor((Date.now()-current.startedAt)/1000)):0;
 const durationText=s=>String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');
 function clock(){if(!current)return;const used=current.finished?current.elapsedSeconds:elapsed(),limit=current.limit*60,remaining=limit?Math.max(0,limit-used):used;const node=$('examClock');node.textContent=durationText(remaining);node.classList.toggle('is-urgent',!!limit&&remaining<=60&&!current.finished);node.setAttribute('aria-label',limit?'残り時間':'経過時間');$('examSessionStatus').textContent=saveFailed?'端末への保存に失敗しました':current.finished?'採点済み':submitPending?'未解答があります。もう一度提出で確定':limit&&remaining===0?'時間終了・提出できます':'解答は端末に保存';}
 function startClock(){clearInterval(ticker);clock();ticker=setInterval(clock,1000);}
 function stopClock(){clearInterval(ticker);ticker=0;}
 function resetSubmit(){submitPending=false;$('examSubmitTop').textContent='提出';$('examSubmit').textContent='提出・採点する';}
 function jumpQuestion(id){resetSubmit();clock();const node=[...$('examQuestions').querySelectorAll('[data-exam-question]')].find(el=>el.dataset.examQuestion===id);if(!node)return;current.active=id;const sc=$('examQuestionScroll');sc.scrollTop+=node.getBoundingClientRect().top-sc.getBoundingClientRect().top-6;renderNavigator();saveDraft();}
 function jumpNext(test){if(!current)return;const n=current.items.length,at=current.items.findIndex(q=>q.id===current.active);for(let step=1;step<=n;step++){const q=current.items[(at+step+n)%n];if(test(q)){jumpQuestion(q.id);return;}}}
 function jumpParagraph(id){const node=[...$('examPassage').querySelectorAll('[data-exam-paragraph]')].find(x=>x.dataset.examParagraph===id);if(node){const sc=$('examPassageScroll');sc.scrollTop+=node.getBoundingClientRect().top-sc.getBoundingClientRect().top-6;}}
 function renderNavigator(){if(!current)return;const n=answerCount(),flags=current.items.filter(q=>current.flags[q.id]).length;$('examNavSummary').textContent=n+' / '+current.items.length+' 解答 · '+flags+' 見直し';$('examNextOpen').disabled=current.finished||n===current.items.length;$('examNextFlag').disabled=flags===0;const nav=$('examQuestionNav'),left=nav.scrollLeft;nav.innerHTML=current.items.map((q,i)=>{const answered=Number.isInteger(current.answers[q.id]),flag=!!current.flags[q.id],outcome=current.finished?(answered&&current.answers[q.id]===q.answer?' correct':' incorrect'):answered?' answered':'';return '<button type="button" data-jump-q="'+escapeHtml(q.id)+'" class="exam-nav-chip'+outcome+(flag?' flagged':'')+(current.active===q.id?' active':'')+'" aria-label="問題 '+(i+1)+(answered?' 解答済み':' 未解答')+(flag?' 見直し':'')+'">'+(i+1)+(flag?' ⚑':'')+'</button>';}).join('');nav.scrollLeft=left;}

 let split=50;
 try{split=clamp(Number(localStorage.getItem('copeak-reading-exam-split'))||50,30,70);}catch(_){}
 function itemsFor(ctx){
  if(ctx.mode==='questions')return ctx.lesson.questions.map(q=>({
   id:q.id,prompt:q.prompt,options:q.options,answer:q.answer,
   explanation:q.explanation_ja||'解説は登録されていません。',paragraph_ids:q.paragraph_ids||[],skill:q.skill||''
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
   '<div class="exam-paragraph" data-exam-paragraph="'+escapeHtml(p.id)+'" data-number="PARAGRAPH '+(pi+1)+'">'+
   p.sentences.map((s,si)=>examLine(s.en,marks.get(p.id+'-'+si)||[])).join(' ')+
   '</div>'
  ).join('');
  $('examParagraphNav').innerHTML=ctx.lesson.paragraphs.map((p,i)=>'<button type="button" data-jump-p="'+escapeHtml(p.id)+'" aria-label="第'+(i+1)+'段落">P'+(i+1)+'</button>').join('');
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
    '<div class="exam-question-number"><span>QUESTION '+(index+1)+' / '+current.items.length+'</span><button class="exam-flag" type="button" data-flag-q="'+escapeHtml(q.id)+'" aria-pressed="'+!!current.flags[q.id]+'" '+(explained?'disabled':'')+'>(current.flags[q.id]?'⚑ 見直し中':'⚐ 見直し')+'</button></div>'+
    '<h3>' + escapeHtml(q.prompt) + '</h3>'+(q.subprompt?'<p class="exam-subprompt">'+escapeHtml(q.subprompt)+'</p>':'')+
    '<div class="exam-options">'+q.options.map((opt,j)=>{
     const cls=explained?(j===q.answer?'is-correct':j===picked?'is-wrong':''):(picked===j?'is-selected':'');
     const crossed=!explained&&(current.crossed[q.id]||[]).includes(j);
     return '<div class="exam-option-row"><button type="button" class="exam-option '+cls+(crossed?' is-crossed':'')+'" data-exam-q="'+escapeHtml(q.id)+'" data-exam-choice="'+j+'" aria-pressed="'+(picked===j)+'" '+(explained?'disabled':'')+'>'+
      '<span class="exam-option-letter">'+String.fromCharCode(65+j)+'</span><span>'+escapeHtml(opt)+'</span></button>'+(explained?'':'<button type="button" class="exam-cross" data-cross-q="'+escapeHtml(q.id)+'" data-cross-choice="'+j+'" aria-pressed="'+crossed+'" aria-label="選択肢 '+String.fromCharCode(65+j)+' の消去">×</button>')+'</div>';
    }).join('')+'</div>'+
    (explained?'<p class="exam-explanation">'+
     '<strong>'+(picked===q.answer?'正解':!answered?'未解答':'不正解')+' ／ 正答：'+String.fromCharCode(65+q.answer)+'</strong>　'+escapeHtml(q.explanation)+
     '</p>'+((q.paragraph_ids?.length||q.source?.paragraphId)?'<div class="exam-evidence">'+(q.paragraph_ids?.length?q.paragraph_ids:[q.source.paragraphId]).map(id=>'<button type="button" data-evidence-p="'+escapeHtml(id)+'">根拠 '+escapeHtml(id.toUpperCase())+'</button>').join('')+'</div>':''):'')+
    '</article>';
  }).join('');
  const answered=answerCount();
  $('examAnswerCount').textContent=answered+' / '+current.items.length+' 問解答';
  $('examSubmit').disabled=current.finished;$('examSubmitTop').disabled=current.finished;$('examTimeLimit').disabled=current.finished;renderNavigator();clock();
  $('examSubmitArea').hidden=current.finished&&!saveFailed;
  $('examResult').hidden=!current.finished;
  if(current.finished){
   const score=current.items.filter(q=>current.answers[q.id]===q.answer).length;
   $('examResult').innerHTML='<h3>採点結果：'+score+' / '+current.items.length+' 問正解</h3>'+
    '<p>正答率 '+Math.round(score/current.items.length*100)+'% ／ 時間 '+durationText(current.elapsedSeconds||0)+' ／ 未解答 '+(current.items.length-answered)+'問</p><button type="button" id="examRetryWrong">誤答・未解答へ移動</button> '+
    '<button type="button" id="examReturnToStudy">学習画面に戻る</button>';
   $('examReturnToStudy').addEventListener('click',leaveExam);$('examRetryWrong').addEventListener('click',()=>jumpNext(q=>current.answers[q.id]!==q.answer));
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
  saveFailed=true;clock();const status=$('examSaveStatus');
  status.hidden=false;
  status.textContent='この端末では途中の解答を保存できません。';
 }
 function clearSaveError(){
  saveFailed=false;clock();const status=$('examSaveStatus');
  status.hidden=true;status.textContent='';
 }
 function saveDraft(){
  if(!current||current.finished)return;
  try{
   localStorage.setItem(draftName(current.key),JSON.stringify({
    fingerprint:current.fingerprint,
    passageFont:overlay.style.getPropertyValue('--reading-passage-size'),questionFont:overlay.style.getPropertyValue('--reading-question-size'),
    answers:current.answers,flags:current.flags,crossed:current.crossed,active:current.active,startedAt:current.startedAt,limit:current.limit,passageTop:$('examPassageScroll').scrollTop,questionTop:$('examQuestionScroll').scrollTop
   }));
   clearSaveError();
  }catch{reportSaveError();}
 }
 function loadDraft(key,items){
  const clean={answers:Object.create(null),flags:Object.create(null),crossed:Object.create(null),active:items[0]?.id,startedAt:Date.now(),limit:0,passageTop:0,questionTop:0,passageFont:'',questionFont:''};
  try{
   const d=JSON.parse(localStorage.getItem(draftName(key))||'null');
   if(!d||d.fingerprint!==bankFingerprint(items))return clean;
   for(const q of items){const a=d.answers?.[q.id];if(Number.isInteger(a)&&a>=0&&a<q.options.length)clean.answers[q.id]=a;if(d.flags?.[q.id]===true)clean.flags[q.id]=true;const crossed=d.crossed?.[q.id];if(Array.isArray(crossed))clean.crossed[q.id]=[...new Set(crossed.filter(i=>Number.isInteger(i)&&i>=0&&i<q.options.length&&i!==a))];}
   if(items.some(q=>q.id===d.active))clean.active=d.active;
   if(Number.isFinite(d.startedAt)&&d.startedAt>0&&d.startedAt<=Date.now())clean.startedAt=d.startedAt;
   if([0,5,10,15,20,30,45].includes(d.limit))clean.limit=d.limit;
   for(const k of ['passageTop','questionTop'])if(Number.isFinite(d[k]))clean[k]=Math.max(0,d[k]);
   for(const k of ['passageFont','questionFont'])if(typeof d[k]==='string'&&/^\d{2}px$/.test(d[k])&&parseInt(d[k])>=13&&parseInt(d[k])<=28)clean[k]=d[k];
  }catch{}
  return clean;
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
    date:new Date().toISOString(),score:correct,total:current.items.length,answers:{...current.answers},elapsedSeconds:current.elapsedSeconds,limit:current.limit,flags:{...current.flags},incorrect:current.items.filter(q=>current.answers[q.id]!==q.answer).map(q=>({id:q.id,skill:q.skill||current.mode,unanswered:!Number.isInteger(current.answers[q.id])}))});
   localStorage.setItem(key,JSON.stringify(list.slice(-10)));
   clearSaveError();
   return true;
  }catch(_){reportSaveError();return false;}
 }
 function setSplit(value,save=false){
  const bounds=$('examLayout').getBoundingClientRect();
  const effective=bounds.width-18;
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
  saveDraft();stopClock();resetSubmit();
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
  if(!current||current.key!==key||current.finished||current.fingerprint!==bankFingerprint(items)){
   current={key,lessonId:ctx.lesson.id,mode:ctx.mode,direction:ctx.direction,items,...loadDraft(key,items),fingerprint:bankFingerprint(items),finished:false};
  }else{const saved=loadDraft(key,items);current.passageTop=saved.passageTop;current.questionTop=saved.questionTop;current.passageFont=saved.passageFont;current.questionFont=saved.questionFont;}
  resetSubmit();$('examLessonTitle').textContent=ctx.lesson.title;$('examTimeLimit').value=String(current.limit);
  renderPassage(ctx,current.items);
  // Attach handwriting when viewport dimensions are available.
  renderQuestions(false);
  overlay.hidden=false;
  clearSaveError();
  document.body.classList.add('reading-exam-mode');
  $('readingWorkspace').inert=true;
  document.querySelector('.masthead').inert=true;
  const app=$('readingApp');
  for(const key of ['--reading-passage-size','--reading-question-size']){
   const size=(key==='--reading-passage-size'?current.passageFont:current.questionFont)||app.style.getPropertyValue(key);
   if(size)overlay.style.setProperty(key,size);else overlay.style.removeProperty(key);
  }
  setSplit(split);
  $('examPassageScroll').scrollTop=current.passageTop||0;
  $('examQuestionScroll').scrollTop=current.questionTop||0;
  window.CopeakReadingInk?.syncExam(ctx.lesson.id,(ctx.mode||'questions')+'-'+(ctx.mode==='vocab'?ctx.direction:'standard'));
  startClock();saveDraft();
  $('examExit').focus({preventScroll:true});
  // Request true fullscreen when the browser permits it. Keep the fixed,
  // independently scrollable viewport as a fallback for iPad Safari, which
  // may reject fullscreen or leave it after system gestures.
  if(!/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)&&typeof overlay.requestFullscreen==='function'){
   try{
    const result=overlay.requestFullscreen();
    result?.catch?.(()=>{});
   }catch(_){}
  }
 }
 start.addEventListener('click',enterExam);
 $('examExit').addEventListener('click',leaveExam);
 $('examQuestions').addEventListener('click',e=>{
  const flag=e.target.closest?.('[data-flag-q]'),cross=e.target.closest?.('[data-cross-q]'),evidence=e.target.closest?.('[data-evidence-p]');
  if(evidence&&current?.finished){jumpParagraph(evidence.dataset.evidenceP);for(const p of $('examPassage').querySelectorAll('[data-exam-paragraph]'))p.classList.toggle('exam-evidence-active',p.dataset.examParagraph===evidence.dataset.evidenceP);return;}
  if(flag&&current&&!current.finished){const id=flag.dataset.flagQ;current.flags[id]=!current.flags[id];current.active=id;resetSubmit();saveDraft();renderQuestions();return;}
  if(cross&&current&&!current.finished){const id=cross.dataset.crossQ,i=Number(cross.dataset.crossChoice);if(current.answers[id]===i)delete current.answers[id];const list=current.crossed[id]||[];current.crossed[id]=list.includes(i)?list.filter(x=>x!==i):[...list,i];current.active=id;resetSubmit();saveDraft();renderQuestions();return;}
  const option=e.target.closest?.('[data-exam-q]');
  if(!option||!current||current.finished)return;
  const q=current.items.find(x=>x.id===option.dataset.examQ);
  const chosen=Number(option.dataset.examChoice);
  if(!q||!Number.isInteger(chosen)||chosen<0||chosen>=q.options.length)return;
  if(current.answers[q.id]===chosen)delete current.answers[q.id];else current.answers[q.id]=chosen;
  current.crossed[q.id]=(current.crossed[q.id]||[]).filter(x=>x!==chosen);current.active=q.id;resetSubmit();saveDraft();
  const scroll=$('examQuestionScroll').scrollTop;
  renderQuestions();
  $('examQuestionScroll').scrollTop=scroll;
  $('examQuestions').querySelector('[data-exam-q="'+q.id+'"][data-exam-choice="'+chosen+'"]')?.focus({preventScroll:true});
 });
 function submit(){
  if(!current||current.finished)return;
  if(answerCount()!==current.items.length&&!submitPending){submitPending=true;$('examSubmitTop').textContent='未解答あり・確定';$('examSubmit').textContent='未解答のまま提出';clock();return;}
  current.elapsedSeconds=elapsed();current.finished=true;stopClock();resetSubmit();
  const archived=saveCompletedAttempt();if(archived)clearDraft();renderQuestions();
  const sc=$('examQuestionScroll'),result=$('examResult');sc.scrollTop+=result.getBoundingClientRect().top-sc.getBoundingClientRect().top-6;
 }
 $('examSubmit').addEventListener('click',submit);$('examSubmitTop').addEventListener('click',submit);
 $('examQuestionNav').addEventListener('click',e=>{const b=e.target.closest('[data-jump-q]');if(b)jumpQuestion(b.dataset.jumpQ);});
 $('examParagraphNav').addEventListener('click',e=>{const b=e.target.closest('[data-jump-p]');if(b)jumpParagraph(b.dataset.jumpP);});
 $('examNextOpen').addEventListener('click',()=>jumpNext(q=>!Number.isInteger(current.answers[q.id])));
 $('examNextFlag').addEventListener('click',()=>jumpNext(q=>current.flags[q.id]));
 $('examTimeLimit').addEventListener('change',e=>{if(!current||current.finished)return;resetSubmit();current.limit=Number(e.target.value)||0;clock();saveDraft();});
 function resizeText(delta){for(const [prop,base,min,max] of [['--reading-passage-size',19,14,28],['--reading-question-size',16,13,24]]){const old=Number.parseFloat(getComputedStyle(overlay).getPropertyValue(prop))||base;overlay.style.setProperty(prop,clamp(old+delta,min,max)+'px');}saveDraft();}
 $('examTextSmaller').addEventListener('click',()=>resizeText(-1));$('examTextLarger').addEventListener('click',()=>resizeText(1));
 let scrollTimer=0;for(const id of ['examPassageScroll','examQuestionScroll'])$(id).addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{if(!overlay.hidden)saveDraft();},300);},{passive:true});
 window.addEventListener('pagehide',()=>{if(!overlay.hidden)saveDraft();});document.addEventListener('visibilitychange',()=>{if(!overlay.hidden){if(document.hidden)saveDraft();else clock();}});
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
  if(e.key==='Escape'&&!overlay.hidden){if(submitPending){resetSubmit();clock();}else leaveExam();}
 });

 window.addEventListener('resize',()=>{if(!overlay.hidden&&!dragging)setSplit(split);});
})();
