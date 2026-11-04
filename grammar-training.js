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
const state={mode:'',manifest:null,categories:[],category:'',units:[],unit:null,items:[],index:0,answered:false,sessionCorrect:0,sessionAnswered:0,stage:1,extra:false,score:null,recognition:null,micToken:0,fetchToken:0,recording:false,transcript:'',error:'',cache:new Map(),progress:restore()};
const node=(tag,className,text)=>{const n=document.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=text;return n;};
function progress(id){return state.progress.records[id]||{};}
function save(id,patch){state.progress.records[id]=Object.assign({},progress(id),patch,{updated:new Date().toISOString()});try{localStorage.setItem(KEY,JSON.stringify(state.progress));}catch(e){console.warn('Grammar progress not saved',e);}}
function categoryName(x){return(x.id?x.id+'  ':'')+(x.title||'');}
function unitStatus(s){$('gtUnitMeta').textContent=s;}
function micStatus(s){$('gtRecognitionStatus').textContent=s||'';}
async function getJson(url){const res=await fetch(url,{cache:'no-store'});if(!res.ok)throw Error('HTTP '+res.status+' '+url);return await res.json();}
function resetReading(){
 state.score=null;$('gtScoreNumber').textContent='—';$('gtScoreArc').style.strokeDasharray='0 100';$('gtScoreArc').classList.remove('is-pass');
 $('gtScoreMeter').removeAttribute('aria-valuenow');$('gtScoreMeter').setAttribute('aria-valuetext','判定前');
 $('gtScoreNote').textContent='音読終了後に結果を表示します。';
 $('gtTranscript').textContent='音読を始めると、認識された英語がここに表示されます。';$('gtNextStage').hidden=true;
}
function cancelRecognition(){
 state.micToken++;const r=state.recognition;state.recognition=null;state.recording=false;
 if(r){try{r.abort();}catch(_){}}$('gtRecord').disabled=false;$('gtStop').disabled=true;
}
async function changeMode(mode){
 if(!SETTINGS[mode])return;cancelRecognition();if(window.speechSynthesis)window.speechSynthesis.cancel();
 state.mode=mode;state.categories=[];state.units=[];state.category='';state.unit=null;state.items=[];state.manifest=null;
 $('gtLanding').hidden=true;$('gtWorkspace').hidden=false;$('gtWelcome').hidden=false;$('gtLesson').hidden=true;
 $('gtModeTitle').textContent=SETTINGS[mode].name;$('gtModeTotal').textContent='読み込み中…';
 $('gtCategory').replaceChildren();$('gtUnit').replaceChildren();$('gtUnitList').replaceChildren();$('gtStart').disabled=true;unitStatus('教材を読み込んでいます。');
 const token=++state.fetchToken;
 try{
  const manifest=await getJson(SETTINGS[mode].url);if(token!==state.fetchToken)return;
  state.manifest=manifest;state.categories=manifest[SETTINGS[mode].group]||[];
  if(!state.categories.length)throw Error('教材カテゴリーが空です');
  $('gtCategory').replaceChildren(...state.categories.map(c=>new Option(categoryName(c),c.id)));
  const total=mode==='entrance'?manifest.total_questions:manifest.total_sentences;
  $('gtModeTotal').textContent=Number(total||0).toLocaleString('ja-JP')+(mode==='entrance'?'問':'例文');
  await loadCategory(state.categories[0].id);
 }catch(e){if(token!==state.fetchToken)return;unitStatus('教材を読み込めませんでした。接続とファイルの配置を確認してください。');console.error(e);}
 window.scrollTo({top:0,behavior:'instant'});
}
async function loadCategory(id){
 if(!state.mode||!id)return;cancelRecognition();state.category=id;state.units=[];state.unit=null;
 $('gtCategory').value=id;$('gtUnit').replaceChildren();$('gtUnitList').replaceChildren();$('gtStart').disabled=true;$('gtLesson').hidden=true;$('gtWelcome').hidden=false;unitStatus('ポイントを読込中…');
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
  const list=$('gtUnitList');list.replaceChildren();
  for(const unit of state.units){
   const b=node('button','gt-unit-item');b.type='button';b.dataset.unit=unit.id;
   b.append(node('span','',unit.title),node('b','',unit.items.length+(state.mode==='entrance'?'問':'文')));
   b.addEventListener('click',()=>selectUnit(unit.id));list.append(b);
  }
  selectUnit(state.units[0].id);
 }catch(e){if(token!==state.fetchToken)return;unitStatus('このカテゴリーを読み込めませんでした。他の分野を選択するか再読込してください。');console.error(e);}
}
function selectUnit(id){
 state.unit=state.units.find(u=>u.id===id)||null;if(!state.unit)return;
 cancelRecognition();$('gtUnit').value=id;
 $('gtUnitList').querySelectorAll('[data-unit]').forEach(b=>{const on=b.dataset.unit===id;b.classList.toggle('is-selected',on);b.setAttribute('aria-current',String(on));});
 const done=state.unit.items.filter(item=>progress(item.id).mcAttempts||progress(item.id).cleared).length;
 unitStatus(state.unit.items.length+(state.mode==='entrance'?'問':'文')+' ・ 学習記録 '+done+'件');
 $('gtStart').disabled=false;$('gtLesson').hidden=true;$('gtWelcome').hidden=false;
}
function startLesson(){
 if(!state.unit)return;cancelRecognition();state.items=state.unit.items;state.index=0;state.sessionCorrect=0;state.sessionAnswered=0;
 $('gtLessonTitle').textContent=state.unit.title;
 $('gtTopicLabel').textContent=categoryName(state.categories.find(x=>x.id===state.category)||{});
 $('gtWelcome').hidden=true;$('gtLesson').hidden=false;renderItem();
 if(window.matchMedia('(max-width:840px)').matches)$('gtLesson').scrollIntoView({behavior:'smooth',block:'start'});
}
function item(){return state.items[state.index]||null;}
function renderItem(){
 cancelRecognition();const q=item();if(!q){endLesson();return;}
 state.answered=false;state.extra=false;state.stage=1;state.score=null;
 $('gtProgressText').textContent=(state.index+1)+' / '+state.items.length;
 $('gtProgressBar').style.width=(100*(state.index+1)/state.items.length)+'%';
 $('gtLessonNext').textContent=state.index===state.items.length-1?'学習を終える':'次の英文へ →';
 $('gtQuizScore').textContent=state.mode==='entrance'?'4択正解 '+state.sessionCorrect+' / '+state.sessionAnswered:'';
 const quiz=state.mode==='entrance';$('gtQuiz').hidden=!quiz;$('gtReading').hidden=quiz;$('gtLessonNext').disabled=quiz;
 $('gtFeedback').hidden=true;$('gtWrongExplanations').replaceChildren();
 if(quiz){
  $('gtInstruction').textContent=q.instruction||'最も適切な選択肢を選びなさい。';$('gtStem').textContent=q.stem;
  $('gtOptions').replaceChildren();
  q.options.forEach((option,i)=>{const b=node('button','gt-choice',core.LETTERS[i]+'. '+option);b.type='button';b.addEventListener('click',()=>answer(i));$('gtOptions').append(b);});
 }else{prepareReading();}
}
function answer(i){
 if(state.answered)return;const q=item();state.answered=true;const ok=i===q.answerIndex;
 state.sessionAnswered++;if(ok)state.sessionCorrect++;
 $('gtOptions').querySelectorAll('button').forEach((b,index)=>{b.disabled=true;if(index===q.answerIndex)b.classList.add('is-correct');else if(index===i)b.classList.add('is-wrong');b.setAttribute('aria-pressed',String(index===i));});
 $('gtFeedbackTitle').textContent=(ok?'正解です！':'正解は '+core.LETTERS[q.answerIndex]+' です')+' ─ '+q.options[q.answerIndex];
 $('gtExplanation').textContent=q.explanation;$('gtRule').textContent=q.rule?'文法のポイント：'+q.rule:'';
 $('gtAnswerSentence').textContent='完成英文：'+q.sentence;$('gtAnswerJapanese').textContent='和訳：'+q.japanese;
 const wrongs=$('gtWrongExplanations');wrongs.replaceChildren();
 core.LETTERS.forEach((letter,k)=>{if(k===q.answerIndex)return;const reason=q.wrong&&q.wrong[letter];if(reason)wrongs.append(node('div','',letter+'：'+reason));});
 $('gtFeedback').hidden=false;$('gtQuizScore').textContent='4択正解 '+state.sessionCorrect+' / '+state.sessionAnswered;
 const prev=progress(q.id);
 save(q.id,{mcAttempts:(prev.mcAttempts||0)+1,mcCorrect:(prev.mcCorrect||0)+(ok?1:0),lastChoiceCorrect:ok});
 $('gtLessonNext').disabled=false;$('gtReading').hidden=false;prepareReading();
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
 if(!q||state.recording)return;
 if(!Speech){micStatus('このブラウザーでは音声認識を使用できません。Chromeなどでお試しください。');return;}
 const token=++state.micToken,r=new Speech();r.lang='en-US';r.continuous=true;r.interimResults=true;
 state.recognition=r;state.error='';state.transcript='';resetReading();
 r.onresult=event=>{
  if(token!==state.micToken)return;
  const finals=[],interims=[];
  for(let i=0;i<event.results.length;i++){const row=event.results[i],text=row[0]&&row[0].transcript||'';(row.isFinal?finals:interims).push(text);}
  state.transcript=finals.join(' ').trim();
  $('gtTranscript').textContent=(state.transcript+' '+interims.join(' ')).trim()||'音声を認識しています…';
 };
 r.onerror=e=>{if(token!==state.micToken)return;state.error=e.error||'unknown';micStatus('音声認識エラー：'+state.error);};
 r.onend=()=>{
  if(token!==state.micToken)return;state.recording=false;state.recognition=null;
  $('gtRecord').disabled=false;$('gtStop').disabled=true;
  if(state.error){micStatus('音声認識が正常に終了しませんでした。もう一度お試しください。');return;}
  if(!state.transcript.trim()){micStatus('音声を認識できませんでした。もう一度音読してください。');return;}
  finishSpeech(q,state.transcript);
 };
 try{
  if(window.speechSynthesis)window.speechSynthesis.cancel();r.start();state.recording=true;
  $('gtRecord').disabled=true;$('gtStop').disabled=false;micStatus('● 音声認識中… 終了ボタンを押すまで継続します。');
 }catch(e){state.recognition=null;state.recording=false;$('gtRecord').disabled=false;$('gtStop').disabled=true;micStatus('マイクを開始できませんでした：'+e.message);}
}
function endSpeech(){
 if(!state.recognition||!state.recording)return;
 micStatus('音声認識を終了して判定しています…');
 try{state.recognition.stop();}catch(e){micStatus('音声認識を終了できませんでした。');cancelRecognition();}
}
function finishSpeech(q,spoken){
 if(!scoreEngine()?.score){micStatus('Accuracy判定モジュールがありません。');return;}
 const result=scoreEngine().score(q.sentence,spoken),percent=result.percent,passed=core.stageCanAdvance(state.stage,percent);
 state.score=percent;
 const transcript=$('gtTranscript');transcript.replaceChildren();
 result.wordMatches.forEach((word,i)=>{if(i)transcript.append(document.createTextNode(' '));transcript.append(node('span',word.matched?'gt-word-ok':'gt-word-miss',word.value));});
 $('gtScoreNumber').textContent=percent+'%';$('gtScoreArc').style.strokeDasharray=percent+' 100';
 $('gtScoreArc').classList.toggle('is-pass',passed);
 $('gtScoreMeter').setAttribute('aria-valuenow',String(percent));$('gtScoreMeter').setAttribute('aria-valuetext','単語一致率 '+percent+'パーセント');
 $('gtScoreNote').textContent=passed?'合格！ 次のステージに挑戦しましょう。':'基準 '+core.STAGES[state.stage-1].threshold+'% を目指してもう一度音読しましょう。';
 micStatus('音読終了。認識一致 '+result.matchCount+' / '+result.targetCount+' 語（発音品質評価ではありません）。');
 const prev=progress(q.id);
 save(q.id,{readingAttempts:(prev.readingAttempts||0)+1,lastAccuracy:percent,bestAccuracy:Math.max(Number(prev.bestAccuracy)||0,percent),cleared:passed?Math.max(Number(prev.cleared)||0,state.stage):Number(prev.cleared)||0});
 renderStage();
 if(passed&&state.stage<5)$('gtNextStage').hidden=false;
}
function nextStage(){
 const q=readingItem();if(!q)return;
 if(state.stage<5&&(Number(progress(q.id).cleared)||0)>=state.stage){
  cancelRecognition();state.stage++;resetReading();renderStage();
 }
}
function endLesson(){
 cancelRecognition();$('gtLesson').hidden=true;$('gtWelcome').hidden=false;
 $('gtWelcome').querySelector('h2').textContent='このポイントの学習が終わりました';
 $('gtWelcome').querySelector('p').textContent=(state.mode==='entrance'?'4択 '+state.sessionCorrect+' / '+state.sessionAnswered+' 正解':'例文 '+state.items.length+' 文')+'。別のポイントを選んで続けましょう。';
}
function nextItem(){
 if(state.mode==='entrance'&&!state.answered)return;
 cancelRecognition();state.index++;if(state.index>=state.items.length){endLesson();return;}renderItem();
}
document.querySelectorAll('[data-gt-mode]').forEach(b=>b.addEventListener('click',()=>changeMode(b.dataset.gtMode)));
$('gtBackHome').addEventListener('click',()=>{cancelRecognition();state.fetchToken++;state.mode='';$('gtWorkspace').hidden=true;$('gtLanding').hidden=false;$('gtLesson').hidden=true;window.scrollTo({top:0,behavior:'instant'});});
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
document.addEventListener('visibilitychange',()=>{if(document.hidden&&state.recording)cancelRecognition();});
window.addEventListener('pagehide',cancelRecognition);
resetReading();
const query=new URLSearchParams(window.location.search);if(SETTINGS[query.get('mode')])changeMode(query.get('mode'));
})();