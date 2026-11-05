/* Copeak Grammar Training v1.0 - standalone local progress; no Classroom writes. */
(function(){
'use strict';
const core=window.CopeakGrammarCore,scoreEngine=()=>window.CopeakVocabularyReading;
if(!core){console.error('Missing Copeak grammar core');return;}
const $=id=>document.getElementById(id),KEY='copeak_grammar_training_v2';
const SETTINGS={
 junior:{name:'中学校の基礎英文法',url:'data/grammar/junior/manifest.json',group:'grades'},
 senior:{name:'高校英文法の音読',url:'data/grammar/senior/manifest.json',group:'chapters'},
 entrance:{name:'大学入試英文法',url:'data/grammar/entrance/manifest.json',group:'categories'}
};
function restore(){try{const x=JSON.parse(localStorage.getItem(KEY)||'{}');return x.version===2&&x.records&&typeof x.records==='object'?x:{version:2,records:{}};}catch{return{version:2,records:{}};}}
const state={mode:'',manifest:null,categories:[],category:'',categoryPage:0,units:[],unitPage:0,unit:null,items:[],index:0,answered:false,examCorrect:null,missionSkipped:false,missionCleared:false,sessionCorrect:0,sessionAnswered:0,stage:1,extra:false,score:null,recognition:null,micToken:0,fetchToken:0,recording:false,micPhase:'idle',micReadyTimer:null,stopRequested:false,transcript:'',interimTranscript:'',error:'',cache:new Map(),progress:restore()};
const node=(tag,className,text)=>{const n=document.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=text;return n;};
function progress(id){return state.progress.records[id]||{};}
function save(id,patch){state.progress.records[id]=Object.assign({},progress(id),patch,{updated:new Date().toISOString()});try{localStorage.setItem(KEY,JSON.stringify(state.progress));}catch(e){console.warn('Grammar progress not saved',e);}}
function categoryName(x){return(x.id?x.id+'  ':'')+(x.title||'');}
function topicName(u){return String(u?.title||'').replace(/^[A-Z0-9-]+\s*(?:·|：)\s*/,'').replace(/^FACT\s*\d+\s*·\s*/i,'').trim();}
function reducedMotion(){return !!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);}
function markCategoryCards(){
 $('gtCategoryCards').querySelectorAll('[data-category]').forEach(b=>{
  const selected=b.dataset.category===state.category;
  b.classList.toggle('is-selected',selected);
  b.setAttribute('aria-pressed',String(selected));
 });
}
function fitGrid(grid,count){
 const width=window.innerWidth||1280;
 const cols=count<=4?Math.max(1,count):width>=1400?(count<=10?5:count<=18?6:count<=24?5:6):width>=1000?(count<=10?4:count<=24?4:5):width>=700?(count<=10?3:4):(count<=10?2:3);
 const rows=Math.max(1,Math.ceil(count/cols));
 grid.style.setProperty('--gt-grid-cols',String(cols));
 grid.style.setProperty('--gt-grid-rows',String(rows));
 const available=Math.max(260,(window.innerHeight||850)-(width<900?170:175));
 grid.style.setProperty('--gt-grid-height',Math.min(available,rows*(width<900?102:119))+'px');
 grid.classList.toggle('gt-dense-grid',count>25);
}
function updatePager(kind){
 $(kind==='category'?'gtCategoryPager':'gtUnitPager').hidden=true;
}
let feedbackTimer=0;
function closeExplanation(){
 if(feedbackTimer){window.clearTimeout(feedbackTimer);feedbackTimer=0;}
 $('gtSuccessCelebration').hidden=true;
 const dialog=$('gtExplanationDialog');
 if(dialog.open&&typeof dialog.close==='function')dialog.close();
 else dialog.removeAttribute('open');
}
function openExplanation(){
 const dialog=$('gtExplanationDialog');
 if(!dialog.open){
  if(typeof dialog.showModal==='function')dialog.showModal();
  else dialog.setAttribute('open','');
 }
}
function showAnswerFeedback(correct){
 if(correct&&!reducedMotion()){
  $('gtSuccessCelebration').hidden=false;
  feedbackTimer=window.setTimeout(()=>{
   feedbackTimer=0;$('gtSuccessCelebration').hidden=true;
   if(state.answered&&state.mode==='entrance'&&!$('gtLesson').hidden)openExplanation();
  },950);
 }else{
  openExplanation();
 }
}
function setHeaderBack(label){$('gtBackHome').textContent='← '+label;}

function placeReading(){
 const reading=$('gtReading'),mount=$('gtReadingModalMount');
 if(state.mode==='entrance'){
  if(reading.parentElement!==mount)mount.appendChild(reading);
 }else if(reading.parentElement!==$('gtLesson')){
  $('gtQuiz').after(reading);
 }
}
function closeReadingMission(){
 const dlg=$('gtReadingDialog');
 if(dlg.open&&typeof dlg.close==='function')dlg.close();
 else dlg.removeAttribute('open');
 cancelRecognition();
}
function canAdvanceExam(){
 return state.examCorrect===true||state.missionSkipped||state.missionCleared;
}
function updateMissionActions(){
 if(state.mode!=='entrance')return;
 const allowed=canAdvanceExam();
 $('gtLessonNext').hidden=!allowed;$('gtLessonNext').disabled=!allowed;
 $('gtModalNext').hidden=!allowed;
 $('gtMissionNext').hidden=!allowed;
 $('gtMissionSkip').hidden=state.missionSkipped||state.missionCleared;
 $('gtOpenReading').hidden=!state.answered;
 $('gtOpenReading').textContent=state.missionCleared?'音読ミッションを復習':state.missionSkipped?'音読をもう一度練習':'音読ミッションへ';
 $('gtMissionStatus').textContent=state.missionCleared?'ミッションクリア！ 次の英文に進めます。':state.missionSkipped?'音読はスキップしました。次の英文に進めます。':state.examCorrect?'音読は任意です。次の英文に進むこともできます。':'5段階クリアで次の英文へ。スキップもできます。';
}
function openReadingMission(){
 if(state.mode!=='entrance'||!state.answered)return;
 closeExplanation();placeReading();
 $('gtReading').hidden=false;updateMissionActions();
 const dlg=$('gtReadingDialog');
 if(!dlg.open){if(typeof dlg.showModal==='function')dlg.showModal();else dlg.setAttribute('open','');}
}
function leaveExplanation(){
 if(state.mode==='entrance'&&state.answered)openReadingMission();
 else closeExplanation();
}
function skipReadingMission(){
 if(state.mode!=='entrance'||!state.answered||state.missionSkipped||state.missionCleared)return;
 cancelRecognition();
 state.missionSkipped=true;
 const q=item();if(q){const prev=progress(q.id);save(q.id,{readingSkips:(prev.readingSkips||0)+1});}
 updateMissionActions();
}

function renderCategoryCards(){
 const grid=$('gtCategoryCards'),fragment=document.createDocumentFragment();
 for(const c of state.categories){
  const b=node('button','gt-category-card');b.type='button';b.dataset.category=c.id;
  const count=state.mode==='entrance'?c.count+'問':(state.mode==='senior'?c.topics:c.units)+'項目';
  b.append(node('span','gt-card-code',c.id),node('strong','gt-card-name',c.title),node('span','gt-card-meta',count));
  b.addEventListener('click',()=>loadCategory(c.id));fragment.append(b);
 }
 grid.replaceChildren(fragment);fitGrid(grid,state.categories.length);markCategoryCards();updatePager('category');
}
function renderUnitCards(){
 const list=$('gtUnitList'),fragment=document.createDocumentFragment();
 for(const unit of state.units){
  const b=node('button','gt-unit-item');b.type='button';b.dataset.unit=unit.id;
  if(topicName(unit).length>19)b.classList.add('gt-long-label');
  b.setAttribute('aria-pressed',String(state.unit?.id===unit.id));
  b.append(node('span','gt-unit-id',unit.id),node('strong','gt-unit-name',topicName(unit)),node('span','gt-unit-count',unit.items.length+(state.mode==='entrance'?'問':'例文')));
  b.addEventListener('click',()=>{selectUnit(unit.id);startLesson();});fragment.append(b);
 }
 list.replaceChildren(fragment);fitGrid(list,state.units.length);updatePager('unit');
}
function showCategoryPicker(){
 closeReadingMission();closeExplanation();cancelRecognition();state.fetchToken++;setHeaderBack('学習メニュー');
 $('gtLesson').hidden=true;$('gtContent').hidden=true;$('gtStudyBar').hidden=true;
 $('gtPicker').hidden=false;$('gtCategoriesPanel').hidden=false;$('gtUnitsPanel').hidden=true;
 renderCategoryCards();
}
function showTopicPicker(){
 closeReadingMission();closeExplanation();cancelRecognition();setHeaderBack('カテゴリーへ');
 $('gtLesson').hidden=true;$('gtContent').hidden=true;$('gtStudyBar').hidden=true;
 $('gtPicker').hidden=false;$('gtCategoriesPanel').hidden=true;$('gtUnitsPanel').hidden=false;
}
function unitStatus(s){$('gtUnitMeta').textContent=s;}
function micStatus(s){$('gtRecognitionStatus').textContent=s||'';}

function clearMicReadyTimer(){
 if(state.micReadyTimer!==null){window.clearTimeout(state.micReadyTimer);state.micReadyTimer=null;}
}
function micButtons(phase){
 state.micPhase=phase;
 $('gtRecord').disabled=phase!=='idle';
 $('gtStop').disabled=phase!=='listening';
 $('gtRecord').textContent=phase==='starting'||phase==='connecting'?'● マイク準備中…':phase==='listening'||phase==='stopping'?'● 録音中':'● 音読スタート';
 $('gtStop').textContent=phase==='stopping'?'■ 終了処理中…':'■ 終了・判定';
 $('gtRecognitionStatus').setAttribute('data-mic-state',phase);
}
function micReady(token){
 if(token!==state.micToken||!state.recognition||state.micPhase==='stopping'||state.micPhase==='idle')return;
 clearMicReadyTimer();
 if(state.micPhase!=='listening'){
  state.recording=true;micButtons('listening');
  micStatus('● マイク準備完了。ここから英文を話してください。終了まで音声認識を続けます。');
 }
}
function speechErrorMessage(code){
 const map={
  'not-allowed':'マイクの利用が許可されていません。ブラウザーのマイク権限を確認してください。',
  'service-not-allowed':'音声認識サービスを利用できません。ブラウザーの設定を確認してください。',
  'audio-capture':'マイクから音声を取得できません。接続や別のアプリの使用状況を確認してください。',
  'network':'音声認識の通信に失敗しました。ネットワークを確認して再試行してください。',
  'no-speech':'音声が検出されませんでした。マイク準備完了を確認してから話してください。',
  'aborted':'音声認識が中断されました。'
 };
 return map[code]||'音声認識でエラーが発生しました（'+code+'）。もう一度お試しください。';
}

async function getJson(url){const res=await fetch(url,{cache:'no-store'});if(!res.ok)throw Error('HTTP '+res.status+' '+url);return await res.json();}
function resetReading(){
 state.score=null;$('gtScoreNumber').textContent='—';$('gtScoreArc').style.strokeDasharray='0 100';$('gtScoreArc').classList.remove('is-pass');
 $('gtScoreMeter').removeAttribute('aria-valuenow');$('gtScoreMeter').setAttribute('aria-valuetext','判定前');
 $('gtScoreNote').textContent='音読終了後に結果を表示します。';
 $('gtTranscript').textContent='音読を始めると、認識された英語がここに表示されます。';$('gtNextStage').hidden=true;
}
function cancelRecognition(){
 state.micToken++;clearMicReadyTimer();
 const r=state.recognition;state.recognition=null;state.recording=false;
 state.stopRequested=false;state.interimTranscript='';
 if(r){try{r.abort();}catch(_){}}
 micButtons('idle');
}
async function changeMode(mode){
 if(!SETTINGS[mode])return;closeReadingMission();closeExplanation();cancelRecognition();if(window.speechSynthesis)window.speechSynthesis.cancel();
 document.body.classList.add('gt-in-workspace');setHeaderBack('学習メニュー');
 state.mode=mode;state.categories=[];state.units=[];state.category='';state.unit=null;state.items=[];state.manifest=null;state.categoryPage=0;state.unitPage=0;
 $('gtLanding').hidden=true;$('gtWorkspace').hidden=false;$('gtWelcome').hidden=true;$('gtLesson').hidden=true;
 $('gtPicker').hidden=false;$('gtCategoriesPanel').hidden=false;$('gtUnitsPanel').hidden=true;$('gtContent').hidden=true;$('gtStudyBar').hidden=true;
 $('gtModeTitle').textContent=SETTINGS[mode].name;$('gtModeTotal').textContent='読み込み中…';
 $('gtCategory').replaceChildren();$('gtUnit').replaceChildren();$('gtCategoryCards').replaceChildren();$('gtUnitList').replaceChildren();$('gtStart').disabled=true;unitStatus('読み込み中…');
 const token=++state.fetchToken;
 try{
  const manifest=await getJson(SETTINGS[mode].url);if(token!==state.fetchToken)return;
  state.manifest=manifest;state.categories=manifest[SETTINGS[mode].group]||[];
  if(!state.categories.length)throw Error('教材カテゴリーが空です');
  $('gtCategory').replaceChildren(...state.categories.map(c=>new Option(categoryName(c),c.id)));
  renderCategoryCards();
  const total=mode==='entrance'?manifest.total_questions:manifest.total_sentences;
  $('gtModeTotal').textContent=Number(total||0).toLocaleString('ja-JP')+(mode==='entrance'?'問':'例文');
  // Category is selected from the visible first page.
 }catch(e){if(token!==state.fetchToken)return;unitStatus('教材を読み込めませんでした。接続とファイルの配置を確認してください。');console.error(e);}
 window.scrollTo({top:0,behavior:'instant'});
}
async function loadCategory(id){
 if(!state.mode||!id)return;cancelRecognition();state.category=id;state.units=[];state.unit=null;state.unitPage=0;
 showTopicPicker();markCategoryCards();
 $('gtCategory').value=id;$('gtUnit').replaceChildren();$('gtUnitList').replaceChildren();$('gtStart').disabled=true;$('gtLesson').hidden=true;$('gtWelcome').hidden=true;unitStatus('読み込み中…');
 const meta=state.categories.find(x=>x.id===id);if(!meta)return;const token=++state.fetchToken;
 try{
  const key=state.mode+'|'+id;let bank=state.cache.get(key);
  if(!bank){bank=await getJson(meta.url);state.cache.set(key,bank);}
  if(token!==state.fetchToken)return;
  if(state.mode==='entrance'){
   state.units=[...core.groupedQuestions(bank.questions).entries()].map(([pid,qs])=>({id:pid,title:pid+' · '+((state.manifest.point_titles||{})[pid]||qs[0].subtopic||'文法演習'),items:qs}));
  }else if(state.mode==='senior'){
   state.units=(bank.topics||[]).map(t=>({id:id+'-'+t.fact_id,title:'FACT '+t.fact_id+' · '+t.title,items:(t.sentences||[]).map(core.makeReading).filter(Boolean)}));
  }else{
   state.units=(bank.units||[]).map(t=>({id:t.id,title:t.title,items:(t.sentences||[]).map(core.makeReading).filter(Boolean)}));
  }
  state.units=state.units.filter(x=>x.items.length);
  if(!state.units.length)throw Error('学習例文がありません');
  $('gtUnit').replaceChildren(...state.units.map(u=>new Option(u.title,u.id)));
  renderUnitCards();
  unitStatus(state.units.length+'項目');
 }catch(e){if(token!==state.fetchToken)return;unitStatus('このカテゴリーを読み込めませんでした。他の分野を選択するか再読込してください。');console.error(e);}
}
function selectUnit(id){
 state.unit=state.units.find(u=>u.id===id)||null;if(!state.unit)return;
 cancelRecognition();$('gtUnit').value=id;
 $('gtUnitList').querySelectorAll('[data-unit]').forEach(b=>{const on=b.dataset.unit===id;b.classList.toggle('is-selected',on);b.setAttribute('aria-pressed',String(on));});
 const done=state.unit.items.filter(item=>progress(item.id).mcAttempts||progress(item.id).cleared).length;
 unitStatus(state.unit.items.length+(state.mode==='entrance'?'問':'文')+' ・ 学習記録 '+done+'件');
 $('gtStart').disabled=false;$('gtLesson').hidden=true;$('gtWelcome').hidden=true;
}
function startLesson(){
 if(!state.unit)return;cancelRecognition();state.items=state.unit.items;state.index=0;state.sessionCorrect=0;state.sessionAnswered=0;
 $('gtLessonTitle').textContent=state.unit.title;
 $('gtTopicLabel').textContent=categoryName(state.categories.find(x=>x.id===state.category)||{});
 $('gtPicker').hidden=true;$('gtStudyBar').hidden=true;$('gtContent').hidden=false;setHeaderBack('文法項目へ');
 $('gtWelcome').hidden=true;$('gtLesson').hidden=false;renderItem();
 window.scrollTo({top:0,behavior:'instant'});
}
function item(){return state.items[state.index]||null;}
function renderItem(){
 closeReadingMission();closeExplanation();cancelRecognition();const q=item();if(!q){endLesson();return;}
 state.answered=false;state.examCorrect=null;state.missionSkipped=false;state.missionCleared=false;state.extra=false;state.stage=1;state.score=null;
 placeReading();$('gtOpenReading').hidden=true;
 $('gtProgressText').textContent=(state.index+1)+' / '+state.items.length;
 $('gtProgressBar').style.width=(100*(state.index+1)/state.items.length)+'%';
 $('gtLessonNext').textContent=state.index===state.items.length-1?'学習を終える':'次の英文へ →';
 $('gtQuizScore').textContent=state.mode==='entrance'?'4択正解 '+state.sessionCorrect+' / '+state.sessionAnswered:'';
 const quiz=state.mode==='entrance';$('gtQuiz').hidden=!quiz;$('gtReading').hidden=quiz;$('gtLessonNext').disabled=quiz;$('gtLessonNext').hidden=quiz;
 $('gtFeedback').hidden=true;$('gtWrongExplanations').replaceChildren();$('gtSelectedWrong').hidden=true;
 const details=$('gtWrongExplanations').closest('details');if(details)details.open=false;
 if(quiz){
  $('gtInstruction').textContent=q.instruction||'最も適切な選択肢を選びなさい。';$('gtStem').textContent=q.stem;
  $('gtOptions').replaceChildren();
  q.options.forEach((option,i)=>{const b=node('button','gt-choice',core.LETTERS[i]+'. '+option);b.type='button';b.addEventListener('click',()=>answer(i));$('gtOptions').append(b);});
 }else{prepareReading();}
}
function answer(i){
 if(state.answered)return;const q=item();state.answered=true;const ok=i===q.answerIndex;state.examCorrect=ok;
 state.sessionAnswered++;if(ok)state.sessionCorrect++;
 $('gtOptions').querySelectorAll('button').forEach((b,index)=>{b.disabled=true;if(index===q.answerIndex)b.classList.add('is-correct');else if(index===i)b.classList.add('is-wrong');b.setAttribute('aria-pressed',String(index===i));});
 $('gtModalQuestion').textContent=q.stem;
 $('gtModalStatus').textContent=ok?'Correct! 正解！':'解答を確認しましょう';
 $('gtModalStatus').classList.toggle('is-correct',ok);
 $('gtFeedbackTitle').textContent=(ok?'正解です！':'正解は '+core.LETTERS[q.answerIndex]+' です')+' ─ '+q.options[q.answerIndex];
 $('gtExplanation').textContent=q.explanation;$('gtRule').textContent=q.rule?'文法のポイント：'+q.rule:'';
 $('gtAnswerSentence').textContent='完成英文：'+q.sentence;$('gtAnswerJapanese').textContent='和訳：'+q.japanese;
 const selectedReason=!ok&&q.wrong?q.wrong[core.LETTERS[i]]:null;
 $('gtSelectedWrong').hidden=!selectedReason;
 $('gtSelectedWrong').textContent=selectedReason?'選んだ答え：'+core.LETTERS[i]+'　'+selectedReason:'';
 const wrongs=$('gtWrongExplanations');wrongs.replaceChildren();
 core.LETTERS.forEach((letter,k)=>{if(k===q.answerIndex)return;const reason=q.wrong&&q.wrong[letter];if(reason)wrongs.append(node('div','',letter+'：'+reason));});
 $('gtFeedback').hidden=false;$('gtQuizScore').textContent='4択正解 '+state.sessionCorrect+' / '+state.sessionAnswered;
 const prev=progress(q.id);
 save(q.id,{mcAttempts:(prev.mcAttempts||0)+1,mcCorrect:(prev.mcCorrect||0)+(ok?1:0),lastChoiceCorrect:ok});
 $('gtReading').hidden=false;prepareReading();updateMissionActions();
 $('gtModalClose').textContent=ok?'音読を練習する':'音読ミッションへ';
 showAnswerFeedback(ok);
}
function readingItem(){
 const q=item();if(!q)return null;
 if(state.mode!=='entrance')return q;
 return state.extra&&q.example?{id:q.id+'|extra',sentence:q.example,japanese:q.exampleJa}:{id:q.id+'|answer',sentence:q.sentence,japanese:q.japanese};
}
function prepareReading(){
 cancelRecognition();state.stage=1;
 const q=item(),hasExtra=state.mode==='entrance'&&!!q.example;
 $('gtSentenceSwitcher').hidden=!hasExtra;
 $('gtMainSentence').setAttribute('aria-pressed',String(!state.extra));$('gtExtraSentence').setAttribute('aria-pressed',String(state.extra));
 resetReading();renderStage();
}
function renderStage(){
 const q=readingItem();if(!q)return;const step=core.STAGES[state.stage-1],rec=progress(q.id),unlocked=Math.min(5,(rec.cleared||0)+1);
 $('gtReadingHeading').textContent=(state.mode==='entrance'?(state.extra?'別例文':'完成英文'):'基礎例文')+' · '+step.label;
 $('gtReadingText').textContent=core.hideWords(q.sentence,state.stage);$('gtReadingText').classList.toggle('is-masked',state.stage>1);
 $('gtJapanese').textContent=q.japanese;$('gtPassCondition').textContent='合格基準：'+step.threshold+'% 以上';
 const tabs=$('gtStageTabs');tabs.replaceChildren();
 for(const s of core.STAGES){
  const b=node('button','gt-stage-button',s.step+'/5 '+s.label);b.type='button';b.disabled=s.step>unlocked;
  b.classList.toggle('is-current',s.step===state.stage);b.classList.toggle('is-cleared',s.step<unlocked);
  b.setAttribute('aria-pressed',String(s.step===state.stage));
  b.addEventListener('click',()=>{cancelRecognition();state.stage=s.step;resetReading();renderStage();});tabs.append(b);
 }
 $('gtBestAccuracy').textContent=Number.isFinite(rec.bestAccuracy)?'Best '+rec.bestAccuracy+'%':'';
 $('gtNextStage').hidden=true;
 if(!state.recording&&state.score===null)micStatus('お手本を聞いてから音読できます。');
}
function switchSentence(extra){
 if(state.recording)return;state.extra=extra;prepareReading();
}
function speak(){
 const q=readingItem();if(!q)return;
 if(!('speechSynthesis' in window)){micStatus('読み上げ機能に対応していません。');return;}
 window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(q.sentence);
 utterance.lang='en-US';utterance.rate=.9;window.speechSynthesis.speak(utterance);
}
function beginSpeech(){
 const Speech=window.SpeechRecognition||window.webkitSpeechRecognition,q=readingItem();
 if(!q||state.recording||state.recognition||state.micPhase!=='idle')return;
 if(!Speech){micStatus('このブラウザーでは音声認識を使用できません。Chromeなどでお試しください。');return;}
 const token=++state.micToken,r=new Speech();
 r.lang='en-US';r.continuous=true;r.interimResults=true;
 state.recognition=r;state.recording=false;state.error='';
 state.transcript='';state.interimTranscript='';state.stopRequested=false;
 resetReading();micButtons('starting');
 micStatus('マイクを準備中です。「マイク準備完了」と表示されるまで話し始めずにお待ちください。');
 r.onstart=()=>{
  if(token!==state.micToken||!state.recognition||state.micPhase==='listening')return;
  micButtons('connecting');
  micStatus('マイクを接続中です。準備完了が表示されてから話してください。');
  clearMicReadyTimer();
  // Some WebKit implementations do not dispatch onaudiostart.
  // After onstart, fall back only if an explicit audio-start event was not received.
  state.micReadyTimer=window.setTimeout(()=>micReady(token),850);
 };
 r.onaudiostart=()=>micReady(token);
 r.onresult=event=>{
  if(token!==state.micToken)return;
  micReady(token);
  const finals=[],interims=[];
  for(let i=0;i<event.results.length;i++){
   const row=event.results[i],text=row[0]&&row[0].transcript||'';
   (row.isFinal?finals:interims).push(text);
  }
  state.transcript=finals.join(' ').trim();
  state.interimTranscript=interims.join(' ').trim();
  $('gtTranscript').textContent=[state.transcript,state.interimTranscript].filter(Boolean).join(' ')||'音声を認識しています…';
 };
 r.onerror=e=>{
  if(token!==state.micToken)return;
  state.error=e.error||'unknown';clearMicReadyTimer();
  micStatus(speechErrorMessage(state.error));
 };
 r.onend=()=>{
  if(token!==state.micToken)return;
  clearMicReadyTimer();state.recording=false;state.recognition=null;
  micButtons('idle');
  if(state.error){micStatus(speechErrorMessage(state.error));return;}
  const confirmed=state.transcript.trim(),pending=state.interimTranscript.trim();
  const spoken=[confirmed,pending].filter(Boolean).join(' ').trim();
  if(!spoken){
   micStatus('音声を認識できませんでした。次回は「マイク準備完了」を確認してから話し始めてください。');
   return;
  }
  finishSpeech(q,spoken,Boolean(pending));
 };
 try{
  if(window.speechSynthesis)window.speechSynthesis.cancel();
  r.start();
 }catch(e){
  if(token!==state.micToken)return;
  clearMicReadyTimer();state.recognition=null;state.recording=false;
  micButtons('idle');micStatus('マイクを開始できませんでした：'+e.message);
 }
}
function endSpeech(){
 if(!state.recognition||state.micPhase!=='listening'||state.stopRequested)return;
 const r=state.recognition;
 state.stopRequested=true;micButtons('stopping');
 micStatus('音声認識の最終結果を受信しています。判定までお待ちください。');
 try{r.stop();}
 catch(e){
  micStatus('音声認識の終了に失敗しました。もう一度お試しください。');
  cancelRecognition();
 }
}
function finishSpeech(q,spoken,usedInterim=false){
 if(!scoreEngine()?.score){micStatus('Accuracy判定モジュールがありません。');return;}
 const result=scoreEngine().score(q.sentence,spoken),percent=result.percent,passed=core.stageCanAdvance(state.stage,percent);
 state.score=percent;
 const transcript=$('gtTranscript');transcript.replaceChildren();
 result.wordMatches.forEach((word,i)=>{if(i)transcript.append(document.createTextNode(' '));transcript.append(node('span',word.matched?'gt-word-ok':'gt-word-miss',word.value));});
 $('gtScoreNumber').textContent=percent+'%';$('gtScoreArc').style.strokeDasharray=percent+' 100';
 $('gtScoreArc').classList.toggle('is-pass',passed);
 $('gtScoreMeter').setAttribute('aria-valuenow',String(percent));$('gtScoreMeter').setAttribute('aria-valuetext','単語一致率 '+percent+'パーセント');
 $('gtScoreNote').textContent=passed?'合格！ 次のステージに挑戦しましょう。':'基準 '+core.STAGES[state.stage-1].threshold+'% を目指してもう一度音読しましょう。';
 micStatus((usedInterim?'未確定の認識結果を一部利用しました。':'音読終了。')+'認識一致 '+result.matchCount+' / '+result.targetCount+' 語（発音品質評価ではありません）。');
 const prev=progress(q.id);
 save(q.id,{readingAttempts:(prev.readingAttempts||0)+1,lastAccuracy:percent,bestAccuracy:Math.max(Number(prev.bestAccuracy)||0,percent),cleared:passed?Math.max(Number(prev.cleared)||0,state.stage):Number(prev.cleared)||0});
 renderStage();
 if(passed&&state.stage<5)$('gtNextStage').hidden=false;
 if(state.mode==='entrance'&&passed&&state.stage===5){state.missionCleared=true;updateMissionActions();}
}
function nextStage(){
 const q=readingItem();if(!q)return;
 if(state.stage<5&&(Number(progress(q.id).cleared)||0)>=state.stage){
  cancelRecognition();state.stage++;resetReading();renderStage();
 }
}
function endLesson(){
 const summary=state.mode==='entrance'?'4択 '+state.sessionCorrect+' / '+state.sessionAnswered+' 正解':'例文 '+state.items.length+' 文';
 showTopicPicker();unitStatus('完了：'+summary+' · 次の項目を選べます');
 // The same topic page remains visible after completing the lesson.
}
function nextItem(){
 if(state.mode==='entrance'&&(!state.answered||!canAdvanceExam()))return;
 closeReadingMission();closeExplanation();
 cancelRecognition();state.index++;if(state.index>=state.items.length){endLesson();return;}renderItem();
}
document.querySelectorAll('[data-gt-mode]').forEach(b=>b.addEventListener('click',()=>changeMode(b.dataset.gtMode)));
$('gtModalClose').addEventListener('click',leaveExplanation);
$('gtModalCloseX').addEventListener('click',leaveExplanation);
$('gtModalNext').addEventListener('click',()=>{closeExplanation();nextItem();});
$('gtExplanationDialog').addEventListener('click',e=>{if(e.target===$('gtExplanationDialog'))leaveExplanation();});
$('gtExplanationDialog').addEventListener('cancel',e=>{if(state.mode==='entrance'&&state.answered){e.preventDefault();leaveExplanation();}});
$('gtExplanationDialog').addEventListener('close',()=>{$('gtSuccessCelebration').hidden=true;});
$('gtOpenReading').addEventListener('click',openReadingMission);
$('gtMissionClose').addEventListener('click',closeReadingMission);
$('gtMissionCloseX').addEventListener('click',closeReadingMission);
$('gtMissionSkip').addEventListener('click',skipReadingMission);
$('gtMissionNext').addEventListener('click',()=>{closeReadingMission();nextItem();});
$('gtReadingDialog').addEventListener('click',e=>{if(e.target===$('gtReadingDialog'))closeReadingMission();});
$('gtReadingDialog').addEventListener('cancel',e=>{e.preventDefault();closeReadingMission();});
$('gtBackToCategories').addEventListener('click',showCategoryPicker);

$('gtBackToTopics').addEventListener('click',showTopicPicker);
$('gtBackHome').addEventListener('click',()=>{
 if(!$('gtLesson').hidden){showTopicPicker();return;}
 if(!$('gtUnitsPanel').hidden){showCategoryPicker();return;}
 closeReadingMission();closeExplanation();cancelRecognition();state.fetchToken++;state.mode='';document.body.classList.remove('gt-in-workspace');
 $('gtWorkspace').hidden=true;$('gtLanding').hidden=false;$('gtLesson').hidden=true;$('gtContent').hidden=true;$('gtStudyBar').hidden=true;window.scrollTo({top:0,behavior:'instant'});
});
$('gtCategory').addEventListener('change',e=>loadCategory(e.target.value));
$('gtUnit').addEventListener('change',e=>selectUnit(e.target.value));
$('gtStart').addEventListener('click',startLesson);
$('gtLessonNext').addEventListener('click',nextItem);
$('gtMainSentence').addEventListener('click',()=>switchSentence(false));
$('gtExtraSentence').addEventListener('click',()=>switchSentence(true));
$('gtListen').addEventListener('click',speak);
$('gtRecord').addEventListener('click',beginSpeech);
$('gtStop').addEventListener('click',endSpeech);
$('gtNextStage').addEventListener('click',nextStage);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&state.recognition)cancelRecognition();});
window.addEventListener('pagehide',()=>{closeReadingMission();closeExplanation();cancelRecognition();});
window.addEventListener('resize',()=>{if(!$('gtCategoriesPanel').hidden)fitGrid($('gtCategoryCards'),state.categories.length);if(!$('gtUnitsPanel').hidden)fitGrid($('gtUnitList'),state.units.length);});
micButtons('idle');resetReading();
const query=new URLSearchParams(window.location.search);if(SETTINGS[query.get('mode')])changeMode(query.get('mode'));
})();