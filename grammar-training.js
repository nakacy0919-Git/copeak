/* Copeak Grammar Training v1.0 - standalone local progress; no Classroom writes. */
(function(){
'use strict';
const core=window.CopeakGrammarCore,progressEngine=window.CopeakGrammarProgress,cardIcons=window.CopeakGrammarCardIcons,scoreEngine=()=>window.CopeakGrammarPractice||window.CopeakVocabularyReading;
if(!core||!progressEngine||!cardIcons){console.error('Missing Copeak grammar helpers');return;}
const feedback=window.CopeakGrammarPractice?.createFeedback(window);
const examTools=window.CopeakExamSessions;
const tone=kind=>feedback?.tone(kind);
const $=id=>document.getElementById(id),KEY='copeak_grammar_training_v2';
const SETTINGS={
 junior:{name:'中学校の基礎英文法',url:'data/grammar/junior/manifest.json',group:'grades'},
 senior:{name:'高校英文法の音読',url:'data/grammar/senior/manifest.json',group:'chapters'},
 entrance:{name:'大学入試英文法',url:'data/grammar/entrance/manifest.json',group:'categories'}
};
const DEFAULT_TOTALS={junior:144,senior:1830,entrance:4912};
function restore(){try{const x=JSON.parse(localStorage.getItem(KEY)||'{}');return x.version===2&&x.records&&typeof x.records==='object'?x:{version:2,records:{}};}catch{return{version:2,records:{}};}}
const state={examType:'category',examScope:'all',examSelectedIds:new Set(),examSession:null,examLastConfig:null,mode:'',manifest:null,categories:[],category:'',categoryPage:0,units:[],unitPage:0,unit:null,items:[],index:0,answered:false,examCorrect:null,missionSkipped:false,missionCleared:false,sessionCorrect:0,sessionAnswered:0,stage:1,extra:false,score:null,recognition:null,micToken:0,fetchToken:0,recording:false,micPhase:'idle',micStopTimer:null,micRestartTimer:null,micHealthTimer:null,levelTimer:null,bannerTimer:null,bannerHideTimer:null,micRecoveries:0,effectTimer:null,stopRequested:false,transcript:'',interimTranscript:'',usedInterim:false,micSignals:{audio:false,voice:false,text:false},micDiagnosticToken:0,micDiagnosticStream:null,micDiagnosticContext:null,cache:new Map(),progress:restore(),totals:{...DEFAULT_TOTALS}};
const node=(tag,className,text)=>{const n=document.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=text;return n;};
function progress(id){return state.progress.records[id]||{};}
function save(id,patch){state.progress.records[id]=Object.assign({},progress(id),patch,{updated:new Date().toISOString()});try{localStorage.setItem(KEY,JSON.stringify(state.progress));}catch(e){console.warn('Grammar progress not saved',e);}renderOverallProgress();}
function categoryName(x){return(x.id?x.id+'  ':'')+(x.title||'');}

// The exam-session history is stored separately from the existing per-question
// progress records; random attempts still call save() for every actual answer.
function getExamHistory(){return examTools?.safeHistory(localStorage)||[];}
function renderExamHistory(){
 const panel=$('gtExamHistoryPanel');panel.hidden=state.mode!=='entrance';
 if(panel.hidden)return;
 const rows=$('gtExamHistoryRows');rows.replaceChildren();
 const history=getExamHistory().filter(session=>Number(session.answered)>0);
 if(!history.length){$('gtExamHistoryOverview').textContent='まだ学習履歴がありません。';return;}
 const total=history.reduce((sum,x)=>sum+Number(x.answered||0),0);
 const correct=history.reduce((sum,x)=>sum+Number(x.correct||0),0);
 $('gtExamHistoryOverview').textContent='累計 '+correct+' / '+total+' 正解 · 正解率 '+examTools.accuracy(correct,total)+'%';
 for(const session of history.slice(0,6)){
  const info=examTools.describe(session),row=node('div','gt-exam-history-item');
  const title=node('div');title.append(node('strong','',info.type==='random'?'ランダム · '+(info.categoryIds?.length||0)+'カテゴリー':'カテゴリー別 · '+(info.title||'')));
  const timestamp=node('time','',new Date(info.startedAt||Date.now()).toLocaleString('ja-JP',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'}));
  title.append(timestamp);
  row.append(title,node('span','',info.correct+' / '+info.answered+' 正解 · '+(info.status==='completed'?'完了':'途中終了')),node('b','',info.rate+'%'));
  rows.append(row);
 }
}
function saveExamSession(status){
 if(!state.examSession||!examTools)return null;
 const session=state.examSession;
 session.updatedAt=new Date().toISOString();
 session.status=status||'in_progress';
 if(session.answered>0)examTools.saveHistory(localStorage,session);
 if(session.status!=='in_progress')state.examSession=null;
 renderExamHistory();return {...session};
}
function beginExamSession(){
 if(state.mode!=='entrance'||!examTools)return;
 if(state.examSession)saveExamSession('exited');
 const now=new Date().toISOString();
 const categories=state.examType==='random'?(state.examLastConfig?.categories||[]):[state.category];
 const current={
  id:Date.now()+'-'+Math.random().toString(36).slice(2,9),
  startedAt:now,updatedAt:now,type:state.examType,
  title:state.unit?.title||'',categoryIds:categories.slice(),
  requested:state.examType==='random'?Number(state.examLastConfig?.count)||state.items.length:state.items.length,
  total:state.items.length,answered:0,correct:0,status:'in_progress'
 };
 state.examSession=current;renderExamHistory();
}
function recordExamAnswer(correct){
 if(!state.examSession)return;
 state.examSession.answered=state.sessionAnswered;
 state.examSession.correct=state.sessionCorrect;
 saveExamSession('in_progress');
}
function updateExamAccuracy(){
 const el=$('gtExamAccuracy');el.hidden=state.mode!=='entrance';
 if(!el.hidden)el.textContent='正解率 '+(examTools?.accuracy(state.sessionCorrect,state.sessionAnswered)||0)+'% · '+state.sessionCorrect+'/'+state.sessionAnswered;
}
function updateExamModeUi(){
 const exam=state.mode==='entrance',random=exam&&state.examType==='random';
 $('gtExamModeNav').hidden=!exam;
 $('gtExamRandomPanel').hidden=!random;
 $('gtExamCategoryMode').setAttribute('aria-pressed',String(!random));
 $('gtExamRandomMode').setAttribute('aria-pressed',String(random));
 $('gtExamCategoryCountWrap').hidden=!exam||random||$('gtUnitsPanel').hidden;
 if(exam)renderExamHistory();
}
function randomCategories(){
 return state.examScope==='all'?state.categories:state.categories.filter(cat=>state.examSelectedIds.has(cat.id));
}
function updateRandomAvailability(){
 $('gtExamScopeAll').checked=state.examScope==='all';
 $('gtExamScopeSelected').checked=state.examScope==='selected';
 $('gtExamCategorySelect').hidden=state.examScope!=='selected';
 const categories=randomCategories(),available=categories.reduce((sum,c)=>sum+(Number(c.count)||0),0);
 const requested=Number($('gtExamQuestionCount').value);
 $('gtExamQuestionCount').max=String(available||1);
 $('gtExamSelectedCount').textContent=categories.length+'カテゴリーを選択';
 $('gtExamAvailableNote').textContent=categories.length+'カテゴリー・最大'+available.toLocaleString('ja-JP')+'問。出題数が多い場合は上限まで出題します。';
 $('gtExamStartRandom').disabled=!examTools||!categories.length||!Number.isInteger(requested)||requested<1;
}
function renderRandomCategories(){
 $('gtExamAvailableCategories').textContent=String(state.categories.length);
 $('gtExamAvailableQuestions').textContent=Number(state.manifest?.total_questions||state.totals.entrance).toLocaleString('ja-JP');
 const grid=$('gtExamCategoryChecks');grid.replaceChildren();
 for(const cat of state.categories){
  const label=node('label'),input=node('input');input.type='checkbox';input.value=cat.id;input.checked=state.examSelectedIds.has(cat.id);
  input.addEventListener('change',()=>{
   if(input.checked)state.examSelectedIds.add(cat.id);else state.examSelectedIds.delete(cat.id);
   updateRandomAvailability();
  });
  label.append(input,node('span','',cat.id+' '+cat.title+' · '+cat.count+'問'));grid.append(label);
 }
 updateRandomAvailability();
}
function showRandomSetup(){
 if(state.mode!=='entrance')return;
 closeReadingMission();closeExplanation();cancelRecognition();
 if(state.examSession)saveExamSession('exited');
 state.fetchToken++;state.examType='random';state.unit=null;
 $('gtExamRandomStatus').textContent='';
 $('gtLesson').hidden=true;$('gtExamResult').hidden=true;$('gtContent').hidden=true;$('gtStudyBar').hidden=true;
 $('gtPicker').hidden=false;$('gtCategoriesPanel').hidden=true;$('gtUnitsPanel').hidden=true;
 setHeaderBack('学習メニュー');updateExamModeUi();renderRandomCategories();
}
async function startRandomExam(){
 if(state.mode!=='entrance'||!examTools)return;
 const categories=randomCategories(),requested=Number($('gtExamQuestionCount').value);
 if(!categories.length||!Number.isInteger(requested)||requested<1){
  $('gtExamRandomStatus').textContent='文法カテゴリーと1以上の問題数を選択してください。';return;
 }
 const token=++state.fetchToken,pools=[];
 $('gtExamStartRandom').disabled=true;
 $('gtExamRandomStatus').textContent='問題を準備しています…';
 try{
  for(let i=0;i<categories.length;i+=4){
   const group=categories.slice(i,i+4);
   const loaded=await Promise.all(group.map(async cat=>{
    const key='entrance|'+cat.id;
    let bank=state.cache.get(key);
    if(!bank){bank=await getJson(cat.url);state.cache.set(key,bank);}
    return {id:cat.id,questions:(bank.questions||[]).map(core.normalizeQuestion).filter(Boolean)};
   }));
   if(token!==state.fetchToken)return;
   pools.push(...loaded);
   $('gtExamRandomStatus').textContent='問題を準備しています… '+Math.min(categories.length,i+4)+' / '+categories.length+'カテゴリー';
  }
  const selection=examTools.select(pools,requested);
  if(token!==state.fetchToken)return;
  if(!selection.length)throw Error('有効な問題がありません');
  state.examType='random';state.category='random';
  state.examLastConfig={type:'random',categories:categories.map(x=>x.id),scope:state.examScope,count:requested};
  state.unit={id:'random',title:'ランダム出題 · '+selection.length+'問',items:selection};
  startLesson();
 }catch(e){
  if(token!==state.fetchToken)return;
  $('gtExamRandomStatus').textContent='問題の読み込みに失敗しました。接続を確認して再挑戦してください。';
  console.error('Exam random load failed',e);
 }finally{
  if(token===state.fetchToken)updateRandomAvailability();
 }
}
function showExamResult(session){
 $('gtPicker').hidden=true;$('gtLesson').hidden=true;$('gtContent').hidden=false;$('gtExamResult').hidden=false;
 $('gtExamResultTitle').textContent=session?.type==='random'?'ランダム出題の結果':'カテゴリー別問題の結果';
 const correct=Number(session?.correct)||0,answered=Number(session?.answered)||0,planned=Number(session?.total)||0;
 $('gtExamResultRate').textContent=(examTools?.accuracy(correct,answered)||0)+'%';
 $('gtExamResultCount').textContent=correct+' / '+answered+' 正解';
 $('gtExamResultDetail').textContent='出題 '+planned+'問 · 学習結果はこの端末に保存されました。';
 setHeaderBack('出題設定');window.scrollTo({top:0,behavior:'instant'});
}


function renderOverallProgress(){
 for(const mode of Object.keys(SETTINGS)){
  const cap=mode.charAt(0).toUpperCase()+mode.slice(1);
  const total=state.totals[mode]||DEFAULT_TOTALS[mode];
  const stat=progressEngine.overall(state.progress.records,mode,total);
  $('gtOverall'+cap).textContent='学習済み '+stat.studied.toLocaleString('ja-JP')+' / '+stat.total.toLocaleString('ja-JP');
  if(mode==='entrance')$('gtEntranceQuestionCount').textContent=Number(total).toLocaleString('ja-JP');
  $('gtOverallRate'+cap).textContent=stat.rate+'%';
  $('gtOverallBar'+cap).style.width=stat.percent+'%';
 }
}
function progressStrip(stat){
 const meta=node('span','gt-card-progress-number',stat.studied+' / '+stat.total);
 const rate=node('strong','gt-card-progress-rate',stat.rate+'%');
 const rail=node('span','gt-card-progress-rail');
 const fill=node('span','gt-card-progress-fill');
 fill.style.width=stat.percent+'%';
 rail.append(fill);
 return{meta,rate,rail};
}
function premiumIcon(title,id){
 const icon=node('span','gt-pretty-icon');
 icon.append(cardIcons.make(title,id));return icon;
}
function premiumArrow(stat){
 const complete=stat.total>0&&stat.studied>=stat.total;
 const arrow=node('span','gt-pretty-arrow'+(complete?' is-complete':''),complete?'✓':'›');
 arrow.setAttribute('aria-hidden','true');return arrow;
}

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
 const width=window.innerWidth||1280,isCategory=grid.id==='gtCategoryCards';
 const cols=isCategory?(width>=1400?count<=4?count:count<=10?5:6:width>=1000?count<=4?count:count<=10?5:5:width>=700?count<=3?count:4:2):
   (width>=1400?count<=4?count:count<=24?4:5:width>=1000?count<=4?count:count<=15?4:5:width>=700?count<=4?count:4:2);
 const rows=Math.max(1,Math.ceil(count/Math.max(1,cols)));
 grid.style.setProperty('--gt-grid-cols',String(Math.max(1,cols)));
 grid.style.setProperty('--gt-grid-rows',String(rows));
 const available=Math.max(260,(window.innerHeight||850)-(width<900?175:180));
 const targetRow=isCategory?(width<700?140:count<=4?220:185):(width<700?92:96);
 grid.style.setProperty('--gt-grid-height',Math.min(available,rows*targetRow)+'px');
 grid.classList.toggle('gt-dense-grid',count>25);
 grid.classList.toggle('gt-few-categories',isCategory&&count<=4);
}
function categoryLayout(){
 const width=window.innerWidth||1280,height=window.innerHeight||850;
 const cols=width>=1000?5:width>=700?4:2;
 // Leave room for the workspace title, panel heading, padding and page controls.
 const rows=Math.max(1,Math.min(4,Math.floor((height-225)/170)));
 return {cols,rows,size:cols*rows};
}
function updatePager(kind){
 if(kind!=='category'){$('gtUnitPager').hidden=true;return;}
 const {size}=categoryLayout(),pages=Math.max(1,Math.ceil(state.categories.length/size));
 $('gtCategoryPager').hidden=pages<=1;
 $('gtCategoryPage').textContent=(state.categoryPage+1)+' / '+pages;
 $('gtPrevCategories').disabled=state.categoryPage===0;
 $('gtNextCategories').disabled=state.categoryPage>=pages-1;
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
 return state.examType==='random'&&state.answered||state.examCorrect===true||state.missionSkipped||state.missionCleared;
}
function updateMissionActions(){
 if(state.mode!=='entrance')return;
 const allowed=canAdvanceExam();
 $('gtLessonNext').hidden=!allowed;$('gtLessonNext').disabled=!allowed;
 $('gtModalNext').hidden=!allowed;
 $('gtMissionNext').hidden=!allowed;
 $('gtMissionSkip').hidden=state.examType==='random'||state.missionSkipped||state.missionCleared;
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
 if(state.mode==='entrance'&&state.answered&&state.examType!=='random')openReadingMission();
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
 const layout=categoryLayout();
 state.categoryPage=Math.min(state.categoryPage,Math.max(0,Math.ceil(state.categories.length/layout.size)-1));
 const visible=state.categories.slice(state.categoryPage*layout.size,(state.categoryPage+1)*layout.size);
 for(const c of visible){
  const b=node('button','gt-category-card gt-square-tile');b.type='button';b.dataset.category=c.id;
  const count=state.mode==='entrance'?c.count+'問':(state.mode==='senior'?c.topics:c.units)+'項目';
  const total=state.mode==='entrance'?c.count:c.sentences;
  const stat=progressEngine.category(state.progress.records,state.mode,c.id,total);
  const info=cardIcons.describe(c.title,c.id);b.dataset.tone=info.tone;
  // Keep every grammar category on the same soft surface; avoid alternating saturated tiles.
  const strip=progressStrip(stat),detail=node('span','gt-square-content'),bottom=node('span','gt-square-bottom');
  detail.append(node('strong','gt-card-name',c.title),node('span','gt-square-english',info.english));
  bottom.append(node('span','gt-card-progress-number',stat.studied+' / '+stat.total),node('strong','gt-card-progress-rate',stat.rate+'%'));
  b.setAttribute('aria-label',c.title+'。'+count+'。学習済み '+stat.studied+'/'+stat.total+'。進捗 '+stat.rate+'%。');
  b.append(node('span','gt-card-code',c.id),premiumIcon(c.title,c.id),detail,bottom,strip.rail);
  b.addEventListener('click',()=>loadCategory(c.id));fragment.append(b);
 }
 grid.replaceChildren(fragment);
 const rows=Math.max(1,Math.min(layout.rows,Math.ceil(state.categories.length/layout.cols)));
 grid.style.setProperty('--gt-grid-cols',String(Math.min(layout.cols,state.categories.length)||1));
 grid.style.setProperty('--gt-grid-rows',String(rows));
 grid.style.setProperty('--gt-grid-height',String(rows*170-12)+'px');
 grid.classList.toggle('gt-few-categories',state.categories.length<=4);
 markCategoryCards();updatePager('category');
}
function renderUnitCards(){
 const list=$('gtUnitList'),fragment=document.createDocumentFragment();
 for(const unit of state.units){
  const title=topicName(unit),stat=progressEngine.unit(state.progress.records,state.mode,unit.items);
  const b=node('button','gt-unit-item gt-compact-tile');b.type='button';b.dataset.unit=unit.id;
  const info=cardIcons.describe(title,unit.id);b.dataset.tone=info.tone;
  if(title.length>19)b.classList.add('gt-long-label');
  b.setAttribute('aria-pressed',String(state.unit?.id===unit.id));
  b.setAttribute('aria-label',title+'。学習済み '+stat.studied+'/'+stat.total+'。進捗 '+stat.rate+'%。');
  const strip=progressStrip(stat),details=node('span','gt-compact-detail'),metrics=node('span','gt-compact-metrics');
  metrics.append(strip.meta,strip.rate);
  details.append(node('strong','gt-unit-name',title),metrics,strip.rail);
  b.append(premiumIcon(title,unit.id),details,premiumArrow(stat));
  b.addEventListener('click',()=>{selectUnit(unit.id);startLesson();});fragment.append(b);
 }
 list.replaceChildren(fragment);fitGrid(list,state.units.length);updatePager('unit');
}
function showCategoryPicker(){
 closeReadingMission();closeExplanation();cancelRecognition();
 if(state.examSession)saveExamSession('exited');
 state.examType='category';state.fetchToken++;setHeaderBack('学習メニュー');
 $('gtLesson').hidden=true;$('gtContent').hidden=true;$('gtStudyBar').hidden=true;
 $('gtPicker').hidden=false;$('gtCategoriesPanel').hidden=false;$('gtUnitsPanel').hidden=true;$('gtExamResult').hidden=true;
 updateExamModeUi();renderCategoryCards();
}
function showTopicPicker(){
 if(state.mode==='entrance'&&state.examType==='random'){showRandomSetup();return;}
 closeReadingMission();closeExplanation();cancelRecognition();
 if(state.examSession)saveExamSession('exited');
 setHeaderBack('カテゴリーへ');
 $('gtLesson').hidden=true;$('gtContent').hidden=true;$('gtStudyBar').hidden=true;
 $('gtPicker').hidden=false;$('gtCategoriesPanel').hidden=true;$('gtUnitsPanel').hidden=false;$('gtExamResult').hidden=true;
 updateExamModeUi();if(state.units.length)renderUnitCards();
}
function unitStatus(s){$('gtUnitMeta').textContent=s;}
function micStatus(s){$('gtRecognitionStatus').textContent=s||'';}
function updateSpeechSignals(){
 const stages=[
  ['gtSignalAudio',state.micSignals.audio,'マイク：起動通知','マイク：待機'],
  ['gtSignalVoice',state.micSignals.voice,'発話：検出通知','発話：未確認'],
  ['gtSignalText',state.micSignals.text,'文字起こし：受信','文字起こし：未受信']
 ];
 for(const [id,seen,yes,no] of stages){
  $(id).textContent=seen?yes:no;
  $(id).setAttribute('data-status',seen?'active':state.micPhase==='listening'?'pending':'idle');
 }
}
// GCC Practice English lifecycle: logical recording is independent of browser recognizer instances.
function closeMicDiagnostic(){
 state.micDiagnosticToken++;
 const stream=state.micDiagnosticStream,context=state.micDiagnosticContext;
 state.micDiagnosticStream=null;state.micDiagnosticContext=null;
 if(stream)for(const track of stream.getTracks())try{track.stop();}catch(_){}
 if(context)try{context.close();}catch(_){}
 $('gtMicTest').disabled=false;
}
function clearMicWatchdogs(){
 if(state.micHealthTimer!==null){window.clearTimeout(state.micHealthTimer);state.micHealthTimer=null;}
 if(state.micStopTimer!==null){window.clearTimeout(state.micStopTimer);state.micStopTimer=null;}
 if(state.micRestartTimer!==null){window.clearTimeout(state.micRestartTimer);state.micRestartTimer=null;}
}
function micButtons(phase){
 state.micPhase=phase;
 $('gtRecord').hidden=phase!=='idle';
 $('gtStop').hidden=phase==='idle';
 $('gtRecord').disabled=phase!=='idle';
 $('gtStop').disabled=phase!=='listening';
 $('gtStop').classList.toggle('is-recording-guide',phase==='listening');
 $('gtRecord').textContent=phase==='listening'||phase==='stopping'?'● 録音中':'● 音読スタート';
 $('gtStop').textContent=phase==='stopping'?'■ 終了処理中…':'■ 終了・判定';
 $('gtRecognitionStatus').setAttribute('data-mic-state',phase);
}
function finalizeSpeechSession(token,q,timeout=false){
 if(token!==state.micToken||!state.stopRequested)return;
 const recognizer=state.recognition;
 clearMicWatchdogs();
 const spoken=[state.transcript,state.interimTranscript].filter(Boolean).join(' ').trim();
 const pending=state.usedInterim||Boolean(state.interimTranscript);
 state.micToken++;state.recognition=null;state.recording=false;state.stopRequested=false;
 micButtons('idle');updateSpeechSignals();
 if(timeout&&recognizer)try{recognizer.abort();}catch(_){}
 if(!spoken){
  tone('retry');
  $('gtRetrySpeech').hidden=false;
  micStatus('文字起こしを受信できませんでした。「音読スタート」で再挑戦してください。');
  return;
 }
 finishSpeech(q,spoken,pending);
}

async function testMicInput(){
 if(state.recognition||state.micPhase!=='idle'){
  $('gtMicTestResult').textContent='先に「終了・判定」を押してください。';return;
 }
 const nav=window.navigator;
 if(!nav?.mediaDevices?.getUserMedia){
  $('gtMicTestResult').textContent='このブラウザーでは独立したマイク音量テストを利用できません。';return;
 }
 closeMicDiagnostic();
 const token=state.micDiagnosticToken,button=$('gtMicTest');
 button.disabled=true;$('gtMicTestResult').textContent='マイクの許可を確認中…';
 let stream=null,ctx=null;
 try{
  stream=await nav.mediaDevices.getUserMedia({audio:true});
  if(token!==state.micDiagnosticToken){
   for(const track of stream.getTracks())track.stop();return;
  }
  state.micDiagnosticStream=stream;
  const Audio=window.AudioContext||window.webkitAudioContext;
  if(!Audio){
   $('gtMicTestResult').textContent='マイクの権限を確認しました。音量測定には未対応です。';return;
  }
  ctx=new Audio();state.micDiagnosticContext=ctx;
  if(ctx.state==='suspended'&&ctx.resume)await ctx.resume();
  const src=ctx.createMediaStreamSource(stream),analyser=ctx.createAnalyser();
  analyser.fftSize=512;src.connect(analyser);
  const values=new Uint8Array(analyser.fftSize);
  let peak=0;
  $('gtMicTestResult').textContent='3秒間、英文を声に出してください…';
  for(let i=0;i<20;i++){
   if(token!==state.micDiagnosticToken)return;
   analyser.getByteTimeDomainData(values);
   let sum=0;
   for(const value of values){const centered=(value-128)/128;sum+=centered*centered;}
   peak=Math.max(peak,Math.sqrt(sum/values.length));
   await new Promise(resolve=>window.setTimeout(resolve,150));
  }
  if(token!==state.micDiagnosticToken)return;
  $('gtMicTestResult').textContent=peak>=0.016?
   'マイク音量を検出しました。文字起こしが無反応ならブラウザー側の認識処理に問題がある可能性があります。':
   '音量を検出できませんでした。もう一度、大きめの声でテストしてください。';
 }catch(error){
  if(token===state.micDiagnosticToken)
   $('gtMicTestResult').textContent='マイク診断に失敗しました。Safari／Chromeのマイク権限を確認してください。';
 }finally{
  if(token===state.micDiagnosticToken)closeMicDiagnostic();
 }
}
function retrySpeechRecognition(){
 if(state.recording||state.micPhase!=='idle')cancelRecognition();
 beginSpeech(); // Initiated from the user's button tap, preserving WebKit user activation.
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
 $('gtRetrySpeech').hidden=true;
}
function cancelRecognition(){
 if(state.bannerTimer!==null){window.clearTimeout(state.bannerTimer);state.bannerTimer=null;}
 if(state.bannerHideTimer!==null){window.clearTimeout(state.bannerHideTimer);state.bannerHideTimer=null;}
 if($('gtLevelBanner'))$('gtLevelBanner').hidden=true;
 if(state.effectTimer!==null){window.clearTimeout(state.effectTimer);state.effectTimer=null;}
 if(state.levelTimer!==null){window.clearTimeout(state.levelTimer);state.levelTimer=null;}
 closeMicDiagnostic();state.micToken++;clearMicWatchdogs();
 const r=state.recognition;state.recognition=null;state.recording=false;
 state.stopRequested=false;state.interimTranscript='';
 if(r){try{r.abort();}catch(_){}}
 micButtons('idle');
}
async function changeMode(mode){
 if(!SETTINGS[mode])return;closeReadingMission();closeExplanation();cancelRecognition();if(window.speechSynthesis)window.speechSynthesis.cancel();
 document.body.classList.add('gt-in-workspace');setHeaderBack('学習メニュー');
 if(state.examSession)saveExamSession('exited');
 state.mode=mode;state.examType='category';state.categories=[];state.units=[];state.category='';state.unit=null;state.items=[];state.manifest=null;state.categoryPage=0;state.unitPage=0;
 $('gtLanding').hidden=true;$('gtWorkspace').hidden=false;$('gtWelcome').hidden=true;$('gtLesson').hidden=true;$('gtExamResult').hidden=true;
 $('gtExamScopeAll').checked=true;state.examScope='all';
 $('gtPicker').hidden=false;$('gtCategoriesPanel').hidden=false;$('gtUnitsPanel').hidden=true;$('gtContent').hidden=true;$('gtStudyBar').hidden=true;
 updateExamModeUi();
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
  if(Number(total)>0){state.totals[mode]=Number(total);renderOverallProgress();}
  if(mode==='entrance'){renderRandomCategories();updateExamModeUi();}
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
  $('gtExamCategoryQuestionCount').value='';
  if(!state.units.length)throw Error('学習例文がありません');
  $('gtUnit').replaceChildren(...state.units.map(u=>new Option(u.title,u.id)));
  renderUnitCards();
  unitStatus(state.units.length+'項目');
 }catch(e){if(token!==state.fetchToken)return;unitStatus('このカテゴリーを読み込めませんでした。他の分野を選択するか再読込してください。');console.error(e);}
}
function selectUnit(id){
 state.unit=state.units.find(u=>u.id===id)||null;if(!state.unit)return;
 if(state.mode==='entrance')$('gtExamCategoryQuestionCount').max=String(state.unit.items.length);
 cancelRecognition();$('gtUnit').value=id;
 $('gtUnitList').querySelectorAll('[data-unit]').forEach(b=>{const on=b.dataset.unit===id;b.classList.toggle('is-selected',on);b.setAttribute('aria-pressed',String(on));});
 const stat=progressEngine.unit(state.progress.records,state.mode,state.unit.items);
 unitStatus(state.unit.items.length+(state.mode==='entrance'?'問':'文')+' ・ 学習済み '+stat.studied+'/'+stat.total);
 $('gtStart').disabled=false;$('gtLesson').hidden=true;$('gtWelcome').hidden=true;
}
function startLesson(){
 if(!state.unit)return;
 cancelRecognition();
 let items=state.unit.items;
 if(state.mode==='entrance'&&state.examType==='category'){
  const selected=String($('gtExamCategoryQuestionCount').value).trim();
  if(selected){
   const count=examTools?.clampCount(Number(selected),items.length)||items.length;
   items=items.slice(0,count);
  }
 }
 state.items=items;state.index=0;state.sessionCorrect=0;state.sessionAnswered=0;
 if(state.mode==='entrance'&&state.examType==='category')state.examLastConfig={type:'category',category:state.category,unitId:state.unit.id,count:items.length};
 beginExamSession();
 $('gtLessonTitle').textContent=state.unit.title;
 $('gtTopicLabel').textContent=state.mode==='entrance'&&state.examType==='random'?'選択した文法カテゴリーからランダム出題':categoryName(state.categories.find(x=>x.id===state.category)||{});
 $('gtPicker').hidden=true;$('gtExamResult').hidden=true;$('gtStudyBar').hidden=true;$('gtContent').hidden=false;setHeaderBack(state.examType==='random'?'出題設定':'文法項目へ');
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
 updateExamAccuracy();
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
 $('gtFeedback').hidden=false;$('gtQuizScore').textContent='4択正解 '+state.sessionCorrect+' / '+state.sessionAnswered+' · 正解率 '+(examTools?.accuracy(state.sessionCorrect,state.sessionAnswered)||0)+'%';
 updateExamAccuracy();
 const prev=progress(q.id);
 save(q.id,{mcAttempts:(prev.mcAttempts||0)+1,mcCorrect:(prev.mcCorrect||0)+(ok?1:0),lastChoiceCorrect:ok});
 recordExamAnswer(ok);
 $('gtReading').hidden=false;prepareReading();updateMissionActions();
 $('gtModalClose').textContent=state.examType==='random'?'問題へ戻る':ok?'音読を練習する':'音読ミッションへ';
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
 resetReading();renderStage();showLevelBanner(1,900);
}
function showLevelBanner(level,duration=0){
 if(state.bannerHideTimer!==null)window.clearTimeout(state.bannerHideTimer);
 $('gtLevelBannerTitle').textContent='LEVEL '+level+' START!';
 $('gtLevelBannerTarget').textContent='目標 '+core.STAGES[level-1].threshold+'% · 次のチャレンジへ！';
 $('gtLevelBanner').hidden=false;
 if(duration)state.bannerHideTimer=window.setTimeout(()=>{state.bannerHideTimer=null;$('gtLevelBanner').hidden=true;},duration);
}
function renderStage(){
 const q=readingItem();if(!q)return;const step=core.STAGES[state.stage-1],rec=progress(q.id),unlocked=Math.min(5,(rec.cleared||0)+1);
 $('gtReadingHeading').textContent=(state.mode==='entrance'?(state.extra?'別例文':'完成英文'):'基礎例文')+' · Level '+state.stage+' / 5 · '+step.label;
 const readingText=$('gtReadingText');readingText.replaceChildren();
 for(const part of core.maskedParts(q.sentence,state.stage)){
  if(!part.hidden){readingText.append(document.createTextNode(part.text));continue;}
  const mask=node('span','gt-word-mask');
  mask.style.setProperty('--gt-mask-width',Math.min(13,Math.max(2,part.length+.6))+'ch');
  mask.setAttribute('role','img');mask.setAttribute('aria-label','hidden word');
  readingText.append(mask);
 }
 readingText.classList.toggle('is-masked',state.stage>1);
 $('gtJapanese').textContent=q.japanese;$('gtPassCondition').textContent='合格基準：'+step.threshold+'% 以上';
 const tabs=$('gtStageTabs');tabs.replaceChildren();
 for(const s of core.STAGES){
  const b=node('button','gt-stage-button','Level '+s.step+' · '+s.label);b.type='button';b.disabled=s.step>unlocked;
  b.classList.toggle('is-current',s.step===state.stage);b.classList.toggle('is-cleared',s.step<unlocked);
  b.setAttribute('aria-pressed',String(s.step===state.stage));
  b.addEventListener('click',()=>{cancelRecognition();state.stage=s.step;resetReading();renderStage();});tabs.append(b);
 }
 $('gtBestAccuracy').textContent=Number.isFinite(rec.bestAccuracy)?'Level '+state.stage+' Best '+(rec.bestByLevel?.[state.stage-1]??rec.bestAccuracy)+'%':'';
 $('gtNextStage').hidden=true;
 $('gtReadingNext').hidden=(Number(rec.cleared)||0)<5;
 if(!state.recording&&state.score===null)micStatus('お手本を聞いてから音読できます。');
}
function switchSentence(extra){
 if(state.recording)return;state.extra=extra;prepareReading();
}
function speak(){
 const q=readingItem();if(!q)return;
 if(state.micPhase!=='idle'){micStatus('音声認識中はお手本を再生できません。「終了・判定」を押してください。');return;}
 if(!('speechSynthesis' in window)){micStatus('読み上げ機能に対応していません。');return;}
 window.speechSynthesis.cancel();
 const utterance=new SpeechSynthesisUtterance(q.sentence);
 utterance.lang='en-US';utterance.rate=.9;window.speechSynthesis.speak(utterance);
}
/* GCC Practice English voice lifecycle: a recognizer end is NOT a learner stop.
   The reading stays open across service-level recognizer re-connections.
   Only explicit End & Score scores the combined transcript. */
// Port of the active GCC Practice English control flow (PracticePageV170):
// start -> SpeechRecognition -> onresult -> onend auto-restart (250ms)
// -> explicit End & Score -> finish on end or 1600ms fallback.
// Copeak owns only the UI, Accuracy scoring and local progress; no main-app microphone imports.
function beginSpeech(){
 const Speech=window.SpeechRecognition||window.webkitSpeechRecognition,q=readingItem();
 if(!q||state.recording||state.micPhase!=='idle')return;
 if(!Speech){micStatus('音声認識を利用できません。ブラウザーのマイク設定を確認してください。');return;}
 tone('tap');
 closeMicDiagnostic();
 window.speechSynthesis?.cancel();
 cancelRecognition();
 state.recording=true;state.stopRequested=false;state.micRecoveries=0;
 state.transcript='';state.interimTranscript='';state.usedInterim=false;
 state.micSignals={audio:false,voice:false,text:false};
 const token=state.micToken;
 resetReading();micButtons('listening');updateSpeechSignals();
 micStatus('🔴 音読中です。読み終えたら「終了・判定」を押してください。');
 $('gtTranscript').textContent='Listening…';

 const listen=()=>{
  if(!state.recording||state.stopRequested||token!==state.micToken)return;
  state.micRestartTimer=null;
  let r;
  try{
   r=new Speech();state.recognition=r;
   r.lang='en-US';r.continuous=true;r.interimResults=true;r.maxAlternatives=1;
  }catch(e){
   cancelRecognition();micStatus('マイクを準備できませんでした：'+e.message);return;
  }
  const current=()=>token===state.micToken&&state.recognition===r;
  // Web Speech API result arrays are cumulative within one recognizer.
  // Rebuild this recognizer's portion without duplicating cumulative results.
  const previousTranscript=state.transcript;
  // WebKit can send start/audiostart but never result, error or end.
  // Bound recovery to one fresh recognizer; never leave the learner stuck.
  state.micHealthTimer=window.setTimeout(()=>{
   state.micHealthTimer=null;
   if(!current()||state.stopRequested||state.micSignals.text)return;
   if(state.micRecoveries>=1){
    cancelRecognition();$('gtRetrySpeech').hidden=false;
    micStatus('文字起こしが応答していません。「再接続して音読する」を押してください。');
    return;
   }
   state.micRecoveries++;state.recognition=null;
   r.onstart=r.onaudiostart=r.onspeechstart=r.onresult=r.onerror=r.onend=null;
   try{r.abort();}catch(_){}
   micStatus('文字起こしを再接続しています。接続後にもう一度読んでください。');
   state.micRestartTimer=window.setTimeout(listen,500);
  },8000);
  r.onstart=()=>{
   if(!current()||!state.recording)return;
   micStatus('音声認識サービスが開始しました。マイク入力・文字起こしを確認中です。');
  };
  r.onaudiostart=()=>{
   if(!current()||!state.recording)return;
   state.micSignals.audio=true;updateSpeechSignals();
  };
  r.onspeechstart=()=>{
   if(!current()||!state.recording)return;
   state.micSignals.voice=true;updateSpeechSignals();
  };
  r.onresult=event=>{
   if(!current()||!state.recording)return;
   // Read the complete current snapshot: resultIndex points to the first changed
   // result, and earlier final results can be revised by the recognition service.
   const finals=[],interims=[];
   for(let i=0;i<event.results.length;i++){
    const result=event.results[i];
    const text=String(result&&result[0]&&result[0].transcript||'').trim();
    if(text)(result.isFinal?finals:interims).push(text);
   }
   // Ignore empty WebKit placeholders, but honor a nonempty snapshot which
   // removes an earlier interim result.
   if(!finals.length&&!interims.length)return;
   if(state.micHealthTimer!==null){window.clearTimeout(state.micHealthTimer);state.micHealthTimer=null;}
   state.transcript=[previousTranscript,...finals].filter(Boolean).join(' ').trim();
   state.interimTranscript=interims.join(' ');
   state.micSignals.audio=true;state.micSignals.voice=true;state.micSignals.text=true;
   updateSpeechSignals();$('gtRetrySpeech').hidden=true;
   $('gtTranscript').textContent=[state.transcript,state.interimTranscript].filter(Boolean).join(' ');
  };
  r.onerror=event=>{
   if(!current())return;
   const error=event.error||'unknown';
   if(['not-allowed','service-not-allowed','audio-capture','language-not-supported'].includes(error)){
    cancelRecognition();
    $('gtRetrySpeech').hidden=false;
    micStatus(speechErrorMessage(error));
   }else if(error!=='no-speech'&&error!=='aborted'){
    micStatus('音声認識が中断されました（'+error+'）。自動で再接続します。');
   }
  };
  r.onend=()=>{
   if(!current())return;
   if(state.micHealthTimer!==null){window.clearTimeout(state.micHealthTimer);state.micHealthTimer=null;}
   state.recognition=null;
   if(state.recording&&!state.stopRequested){
    // Some services end with only interim text. Keep it at the recognizer
    // boundary so the next instance cannot erase words already displayed.
    if(state.interimTranscript){
     state.transcript=[state.transcript,state.interimTranscript].filter(Boolean).join(' ');
     state.interimTranscript='';state.usedInterim=true;
    }
    state.micRestartTimer=window.setTimeout(listen,250);
   }else if(state.stopRequested){
    finalizeSpeechSession(token,q);
   }
  };
  try{r.start();}
  catch(e){
   cancelRecognition();
   micStatus('マイクを開始できませんでした：'+e.message);
  }
 };
 listen();
}
function endSpeech(){
 if(!state.recording||state.stopRequested)return;
 const q=readingItem(),token=state.micToken,r=state.recognition;
 tone('tap');
 state.stopRequested=true;micButtons('stopping');updateSpeechSignals();
 micStatus('文字起こしの最終結果を取得して判定しています…');
 if(state.micRestartTimer!==null){window.clearTimeout(state.micRestartTimer);state.micRestartTimer=null;}
 if(r){
  // Install fallback first: synchronous onend also clears this timer.
  state.micStopTimer=window.setTimeout(()=>finalizeSpeechSession(token,q,true),1600);
  try{r.stop();}catch(_){finalizeSpeechSession(token,q,true);}
 }else finalizeSpeechSession(token,q);
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
 tone('rise');
 $('gtScoreNote').textContent=passed?(state.stage===5?'Level 5 CLEAR！ 全レベル達成！':'Level '+state.stage+' CLEAR！ 次のレベルへ進みます。'):'基準 '+core.STAGES[state.stage-1].threshold+'% を目指してもう一度音読しましょう。';
 micStatus((usedInterim?'未確定の認識結果を一部利用しました。':'音読終了。')+'Accuracy '+percent+'%（単語の抜け・置換・追加を判定。発音品質評価ではありません）。');
 const prev=progress(q.id),bestByLevel=Array.from({length:5},(_,i)=>Number(prev.bestByLevel?.[i])||0);
 bestByLevel[state.stage-1]=Math.max(bestByLevel[state.stage-1],percent);
 save(q.id,{bestByLevel,readingAttempts:(prev.readingAttempts||0)+1,lastAccuracy:percent,bestAccuracy:Math.max(Number(prev.bestAccuracy)||0,percent),cleared:passed?Math.max(Number(prev.cleared)||0,state.stage):Number(prev.cleared)||0});
 renderStage();
 if(passed&&state.stage<5){
  $('gtNextStage').hidden=false;
  const level=state.stage,id=q.id;
  state.bannerTimer=window.setTimeout(()=>{
   state.bannerTimer=null;
   if(readingItem()?.id!==id||state.stage!==level||state.recording)return;
   $('gtRecord').disabled=true;
   tone('next');showLevelBanner(level+1);
  },1000);
  state.levelTimer=window.setTimeout(()=>{
   state.levelTimer=null;
   if(readingItem()?.id!==id||state.stage!==level||state.recording)return;
   nextStage();
  },2000);
 }
 state.effectTimer=window.setTimeout(()=>{state.effectTimer=null;if(!state.recording&&readingItem()?.id===q.id)tone(percent>=90?(percent===100?'100':'90'):passed?'80':'retry');},700);
 if(state.mode==='entrance'&&passed&&state.stage===5){state.missionCleared=true;updateMissionActions();}
}
function nextStage(){
 const q=readingItem();if(!q)return;
 if(state.stage<5&&(Number(progress(q.id).cleared)||0)>=state.stage){
  cancelRecognition();state.stage++;resetReading();renderStage();
 }
}
function endLesson(){
 if(state.mode==='entrance'){
  const summary=saveExamSession('completed')||{type:state.examType,total:state.items.length,answered:state.sessionAnswered,correct:state.sessionCorrect};
  showExamResult(summary);return;
 }
 const summary='例文 '+state.items.length+' 文';
 showTopicPicker();unitStatus('完了：'+summary+' · 次の項目を選べます');
 // The same topic page remains visible after completing the lesson.
}
function nextItem(){
 if(state.mode==='entrance'&&(!state.answered||!canAdvanceExam()))return;
 closeReadingMission();closeExplanation();
 cancelRecognition();state.index++;if(state.index>=state.items.length){endLesson();return;}renderItem();
}
document.querySelectorAll('[data-gt-mode]').forEach(b=>b.addEventListener('click',()=>changeMode(b.dataset.gtMode)));

$('gtExamCategoryMode').addEventListener('click',showCategoryPicker);
$('gtExamRandomMode').addEventListener('click',showRandomSetup);
$('gtExamScopeAll').addEventListener('change',()=>{
 if($('gtExamScopeAll').checked){state.examScope='all';updateRandomAvailability();}
});
$('gtExamScopeSelected').addEventListener('change',()=>{
 if($('gtExamScopeSelected').checked){state.examScope='selected';updateRandomAvailability();}
});
$('gtExamSelectAll').addEventListener('click',()=>{
 state.examSelectedIds=new Set(state.categories.map(x=>x.id));
 renderRandomCategories();
});
$('gtExamClearAll').addEventListener('click',()=>{
 state.examSelectedIds.clear();renderRandomCategories();
});
$('gtExamQuestionCount').addEventListener('input',updateRandomAvailability);
document.querySelectorAll('[data-exam-count]').forEach(button=>button.addEventListener('click',()=>{
 $('gtExamQuestionCount').value=button.dataset.examCount;
 updateRandomAvailability();
}));
$('gtExamStartRandom').addEventListener('click',startRandomExam);
$('gtExamBack').addEventListener('click',()=>{
 if(state.examType==='random')showRandomSetup();else showTopicPicker();
});
$('gtExamAgain').addEventListener('click',()=>{
 if(state.examLastConfig?.type==='random'){
  const config=state.examLastConfig;
  state.examScope=config.scope;
  state.examSelectedIds=new Set(config.categories);
  $('gtExamQuestionCount').value=String(config.count);
  showRandomSetup();startRandomExam();
 }else startLesson();
});

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

$('gtPrevCategories').addEventListener('click',()=>{if(state.categoryPage>0){state.categoryPage--;renderCategoryCards();}});
$('gtNextCategories').addEventListener('click',()=>{if((state.categoryPage+1)*categoryLayout().size<state.categories.length){state.categoryPage++;renderCategoryCards();}});
$('gtBackToTopics').addEventListener('click',showTopicPicker);
$('gtBackHome').addEventListener('click',()=>{
 if(!$('gtLesson').hidden||!$('gtExamResult').hidden){if(state.mode==='entrance'&&state.examType==='random')showRandomSetup();else showTopicPicker();return;}
 if(!$('gtUnitsPanel').hidden){showCategoryPicker();return;}
 closeReadingMission();closeExplanation();cancelRecognition();if(state.examSession)saveExamSession('exited');state.fetchToken++;state.mode='';document.body.classList.remove('gt-in-workspace');
 $('gtWorkspace').hidden=true;$('gtLanding').hidden=false;$('gtLesson').hidden=true;$('gtExamResult').hidden=true;$('gtContent').hidden=true;$('gtStudyBar').hidden=true;window.scrollTo({top:0,behavior:'instant'});
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
$('gtRetrySpeech').addEventListener('click',retrySpeechRecognition);
$('gtMicTest').addEventListener('click',testMicInput);
$('gtNextStage').addEventListener('click',nextStage);
$('gtReadingNext').addEventListener('click',()=>{const q=readingItem();if(q&&(Number(progress(q.id).cleared)||0)>=5)nextItem();});
if($('gtSoundToggle')&&feedback){
 const sync=()=>{$('gtSoundToggle').textContent=feedback.enabled?'効果音 ON':'効果音 OFF';$('gtSoundToggle').setAttribute('aria-pressed',String(feedback.enabled));};
 $('gtSoundToggle').addEventListener('click',()=>{feedback.toggle();sync();tone('tap');});sync();
}
window.addEventListener('pagehide',()=>{closeReadingMission();closeExplanation();cancelRecognition();if(state.examSession)saveExamSession('exited');});
window.addEventListener('resize',()=>{if(!$('gtCategoriesPanel').hidden)renderCategoryCards();if(!$('gtUnitsPanel').hidden)fitGrid($('gtUnitList'),state.units.length);});
micButtons('idle');resetReading();updateSpeechSignals();renderOverallProgress();
const query=new URLSearchParams(window.location.search);if(SETTINGS[query.get('mode')])changeMode(query.get('mode'));
})();