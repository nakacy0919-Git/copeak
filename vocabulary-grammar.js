(function(){
'use strict';
const root=document.getElementById('gtRoot');
const STORAGE='copeak-grammar-progress-v1';
const pageSize=6;
const stages=['Read','Chunk','Vanish','Shadowing','Challenge'];
const stageThresholds=[80,90,90,95,100];
const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
let view='home',course='',section=null,point=null,manifest=null,chapterData=null,categoryQuestions=[],category=null,questionIndex=0,answer='',page=0;
let examples=[],exampleIndex=0,stageIndex=0,readingBack=null,readingMode='course',transcript='',interim='',recognition=null,recording=false,closing=false,lastReadScore=null;
let state;
try{state=JSON.parse(localStorage.getItem(STORAGE)||'{}');if(!state||typeof state!=='object')state={};}catch{state={};}
state.reading=state.reading||{};state.quiz=state.quiz||{};
const put=()=>{try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch(_){}};
const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
const add=(parent,...children)=>{children.forEach(x=>parent.appendChild(x));return parent;};
const btn=(cls,text,handler)=>{const b=el('button',cls,text);b.type='button';b.addEventListener('click',handler);return b;};
function clear(){stopRecognition(true);root.replaceChildren();}
function heading(label,title,detail,back){
 const bar=el('div','gt-heading');
 if(back)add(bar,btn('gt-back','← 戻る',back));
 const copy=el('div','gt-headingcopy');
 add(copy,el('div','gt-kicker',label),el('h1','gt-title',title),el('p','gt-intro',detail||''));
 return add(bar,copy);
}
function buttonCard(id,title,detail,click,icon,kind){
 const b=btn('gt-course '+(kind||''),'',click);
 add(b,el('span','gt-course-icon',icon),el('strong','',title),el('small','',detail),el('span','gt-course-arrow','›'));
 return b;
}
function showHome(){
 view='home';course='';clear();
 add(root,heading('CHOOSE YOUR TRAINING','Vocabulary & Grammar Training','学習したいコースを選択してください。'));
 const grid=el('div','gt-courses');
 const a=el('a','gt-course gt-course-teal');
 a.href='vocabulary-check.html?ui=ja';
 add(a,el('span','gt-course-icon','🧩'),el('strong','','Vocabulary Check'),el('small','','既存の語彙診断（Quick 25 / Deep 70）をそのまま利用'),el('span','gt-course-arrow','›'));
 grid.append(a);
 add(grid,
   buttonCard('middle','Junior High Grammar','中1・中2・中3の例文音読',()=>loadCurriculum('middle'),'📗','gt-course-blue'),
   buttonCard('high','High School Grammar','高校英文法の基本例文・5段階音読',()=>loadCurriculum('high'),'📘','gt-course-purple'),
   buttonCard('university','University Entrance Grammar','分野別4択・詳細解説・復習音読',()=>loadUniversity(),'🎓','gt-course-gold'));
 add(root,grid);
}
function showError(message,back){
 view='error';clear();add(root,heading('DATA LOADING','教材を読み込めませんでした',message,back||showHome),el('p','gt-error','Webサーバー接続と教材データの配置を確認してください。'));
}
async function loadJson(url){const r=await fetch(url,{cache:'no-store'});if(!r.ok)throw Error(url+' HTTP '+r.status);return r.json();}
function listPager(all,draw){
 const pageCount=Math.max(1,Math.ceil(all.length/pageSize));page=Math.min(Math.max(page,0),pageCount-1);
 const grid=el('div','gt-categories');
 all.slice(page*pageSize,(page+1)*pageSize).forEach(x=>grid.append(draw(x)));
 const pager=el('div','gt-pager');
 const prev=btn('','◀',()=>{page--;renderList();});prev.disabled=page<=0;prev.setAttribute('aria-label','前のページ');
 const next=btn('','▶',()=>{page++;renderList();});next.disabled=page>=pageCount-1;next.setAttribute('aria-label','次のページ');
 add(pager,prev,el('span','',String(page+1)+' / '+String(pageCount)),next);
 add(root,grid,pager);
}
function smallCard(id,title,detail,onClick){
 const b=btn('gt-choice','',onClick);
 add(b,el('span','gt-id',id),el('strong','',title),el('small','',detail||''),el('span','gt-course-arrow','›'));
 return b;
}
async function loadCurriculum(name){
 course=name;view='loading';clear();add(root,el('div','gt-loading','教材を読み込んでいます…'));
 try{
  chapterData=await loadJson(name==='middle'?'data/grammar-middle.json':'data/grammar-highschool.json');
  if(!Array.isArray(chapterData.sections))throw Error('Missing sections');
  section=null;point=null;page=0;view='sections';renderList();
 }catch(e){showError(e.message,showHome);}
}
async function loadUniversity(){
 course='university';view='loading';clear();add(root,el('div','gt-loading','大学入試問題を読み込んでいます…'));
 try{manifest=await loadJson('data/grammar-university-manifest.json');
  if(!Array.isArray(manifest.categories))throw Error('Missing categories');
  category=null;point=null;page=0;view='universitySections';renderList();
 }catch(e){showError(e.message,showHome);}
}
function renderList(){
 clear();
 if(view==='sections'){
  const all=chapterData.sections;
  root.append(heading('GRAMMAR READING',course==='middle'?'中学英文法':'高校英文法','単元を選んで、例文を5段階で音読します。',showHome));
  listPager(all,x=>smallCard(x.id,x.title,x.subtitle||String((x.points||[]).length)+'ポイント',()=>{section=x;page=0;view='points';renderList();}));
 }else if(view==='points'){
  root.append(heading(section.id,section.title,'例文を選ぶと音読練習が始まります。',()=>{view='sections';page=0;renderList();}));
  listPager(section.points||[],x=>smallCard(x.id,x.title,String((x.examples||[]).length)+'例文',()=>{point=x;beginReading(x.examples||[],'course');}));
 }else if(view==='universitySections'){
  root.append(heading('UNIVERSITY ENTRANCE','大学入試英文法','分野別・細かな文法ポイント別に4択演習できます。',showHome));
  listPager(manifest.categories,x=>smallCard(x.id,x.title,String(x.count||0)+'問',()=>openCategory(x)));
 }else if(view==='universityPoints'){
  root.append(heading(category.id,category.title,'1ポイントにつき16問・解説と別例文付き',()=>{view='universitySections';page=0;renderList();}));
  listPager(category.points,x=>smallCard(x.id,x.title,String(x.count||16)+'問',()=>beginQuiz(x)));
 }
}
async function openCategory(selected){
 category=selected;course='university';view='loading';clear();add(root,el('div','gt-loading','問題を読み込んでいます…'));
 try{
  const data=await loadJson(category.file);
  categoryQuestions=Array.isArray(data)?data:(data.questions||[]);
  if(!categoryQuestions.length)throw Error('Empty question bank');
  view='universityPoints';page=0;renderList();
 }catch(e){showError(e.message,loadUniversity);}
}
function beginQuiz(selected){
 point=selected;questionIndex=0;answer='';view='quiz';
 const saved=state.quiz[point.id];
 if(saved&&Number.isInteger(saved.lastIndex))questionIndex=Math.min(Math.max(saved.lastIndex,0),getQuestions().length-1);
 renderQuiz();
}
function getQuestions(){return categoryQuestions.filter(q=>q.point_id===point.id);}
function renderQuiz(){
 view='quiz';clear();
 const questions=getQuestions(),q=questions[questionIndex];
 if(!q){showError('この文法ポイントに問題がありません。',()=>{view='universityPoints';renderList();});return;}
 const prior=state.quiz[q.id];answer=prior?.choice||'';
 add(root,heading(point.id+' · '+(q.level||''),point.title,String(questionIndex+1)+' / '+questions.length,()=>{view='universityPoints';page=0;renderList();}));
 const panel=el('div','gt-quiz'),left=el('div','gt-quiz-question'),right=el('div','gt-explain');
 add(left,el('p','gt-muted',q.question_jp||'正しいものを選びなさい。'),el('h2','',q.stem_en));
 const choices=el('div','gt-choices');
 for(const key of ['A','B','C','D']){
  const b=btn('gt-answer'+(answer&&(key===q.answer?' is-correct':key===answer?' is-wrong':'')),key+'.  '+(q.options?.[key]||''),()=>chooseAnswer(q,key));
  if(answer)b.disabled=true;choices.append(b);
 }
 left.append(choices);
 const controls=el('div','gt-quiz-buttons');
 const prev=btn('gt-mini','◀ 前の問題',()=>{questionIndex--;renderQuiz();});prev.disabled=questionIndex===0;
 const next=btn('gt-action','次の問題 ▶',()=>{questionIndex++;renderQuiz();});next.disabled=!answer||questionIndex===questions.length-1;
 add(controls,prev,next);left.append(controls);
 add(right,el('h3','',answer?'解説・別例文':'解答後に詳しい解説を表示'));
 if(answer){
  add(right,el('p','gt-note','正解：'+q.answer+'  '+q.options[q.answer]),
    el('p','',q.answer_sentence_en||''),el('p','',q.answer_sentence_jp||''),el('p','',q.explanation_jp||''));
  const wrong=q.wrong_choice_explanations_jp||{};
  for(const key of ['A','B','C','D'])if(key!==q.answer && wrong[key])right.append(el('p','gt-muted',key+'：'+wrong[key]));
  if(q.rule_jp)right.append(el('p','gt-note','ポイント：'+q.rule_jp));
  right.append(el('p','gt-note','別例文：'+(q.extra_example_en||'')));
  right.append(el('p','',q.extra_example_jp||''));
  if(q.extra_example_en)right.append(btn('gt-action','別例文を音読する',()=>beginReading([{id:q.id+'-extra',en:q.extra_example_en,ja:q.extra_example_jp||''}],'quiz')));
 }else{
  add(right,el('p','gt-muted','まず4つの選択肢から1つを選びます。正答と誤答理由は回答後に表示します。'),
    el('p','gt-muted','問題は分野別・登録順に表示され、ランダムには出題されません。'));
 }
 add(panel,left,right);root.append(panel);
}
function chooseAnswer(q,key){
 if(answer)return;
 answer=key;
 state.quiz[q.id]={choice:key,correct:key===q.answer,updated:Date.now()};
 state.quiz[point.id]={lastIndex:questionIndex,updated:Date.now()};
 put();renderQuiz();
}
function beginReading(items,mode){
 if(!items.length){showError('この単元にまだ例文がありません。',()=>{view='points';renderList();});return;}
 readingMode=mode;examples=items.filter(x=>x.en&&x.ja);if(!examples.length){showError('例文・日本語訳が不足しています。',()=>{view='points';renderList();});return;}
 exampleIndex=0;stageIndex=Math.min(4,readProgress(examples[0].id).stage||0);transcript='';interim='';lastReadScore=null;view='read';
 renderReading();
}
function currentExample(){return examples[exampleIndex];}
function readingText(text,stage){
 const ratio=[0,.25,.5,.75,1][stage]||0;
 if(!ratio)return text;
 const words=text.split(/\s+/),hidden=Math.round(words.length*ratio);
 const indexes=new Set(Array.from({length:hidden},(_,i)=>Math.min(words.length-1,Math.floor((i+.5)*words.length/hidden))));
 return words.map((word,i)=>indexes.has(i)?'____':word).join(' ');
}
function readProgress(id){return state.reading[id]||{best:0,stage:0,attempts:0};}
function renderReading(){
 view='read';clear();
 const item=currentExample(),saved=readProgress(item.id);
 add(root,heading((readingMode==='quiz'?'UNIVERSITY EXAMPLE':course==='middle'?'JUNIOR HIGH':'HIGH SCHOOL')+' · '+(point?.title||''),
  '音読トレーニング',String(exampleIndex+1)+' / '+examples.length+'  ·  5ステージ',
  ()=>{if(readingMode==='quiz')renderQuiz();else{view='points';renderList();}}));
 const bar=el('div','gt-reading-bar');stages.forEach((s,i)=>{const x=el('span','gt-stage',(i+1)+'. '+s);if(i===stageIndex)x.setAttribute('aria-current','step');bar.append(x);});root.append(bar);
 const content=el('div','gt-review'),sentence=el('div','gt-sentence'),results=el('div','gt-results');
 const mainText=el('h2','',readingText(item.en,stageIndex));
 const translation=el('p','',item.ja);
 add(sentence,el('div','gt-kicker','ENGLISH SENTENCE'),mainText,translation);
 if(stageIndex>=3)sentence.append(el('p','gt-muted','日本語訳から英文を思い出して音読しましょう。'));
 const row=el('div','gt-reading-bar');
 const listen=btn('gt-mini','🔊 お手本を聞く',()=>speak(item.en));
 const start=btn('gt-action','🎤 音読スタート',startRecognition);
 const stop=btn('gt-action gt-stop','■ 終了して判定',()=>stopRecognition(false));stop.disabled=!recording;
 start.disabled=!SpeechRecognition||recording;
 add(row,listen,start,stop);sentence.append(row);
 const status=el('div','gt-status',SpeechRecognition?'準備完了':'このブラウザでは音声認識が使えません。ChromeまたはSafariでお試しください。');status.id='gtStatus';sentence.append(status);
 add(results,el('h3','','YOUR SPEECH / 文字起こし'));
 const spoken=el('div','gt-transcript',transcript||'音読すると認識された英文が表示されます。');spoken.id='gtTranscript';results.append(spoken);
 const gauge=el('div','gt-gauge',lastReadScore===null?'—%':String(lastReadScore)+'%');
 add(gauge,el('small','',' Accuracy / 認識一致率'));gauge.id='gtAccuracy';results.append(gauge);
 results.append(el('p','gt-muted','最高記録：'+saved.best+'% ／ 挑戦回数：'+saved.attempts));
 const nav=el('div','gt-quiz-buttons');
 const prev=btn('gt-mini','◀ 前の例文',()=>{exampleIndex--;stageIndex=Math.min(4,readProgress(examples[exampleIndex].id).stage||0);lastReadScore=null;renderReading();});prev.disabled=exampleIndex===0;
 const next=btn('gt-action','次の例文 ▶',()=>{exampleIndex++;stageIndex=Math.min(4,readProgress(examples[exampleIndex].id).stage||0);lastReadScore=null;renderReading();});next.disabled=exampleIndex===examples.length-1;
 const nextStage=btn('gt-mini','次のステージ →',()=>{stageIndex++;lastReadScore=null;renderReading();});nextStage.disabled=stageIndex===stages.length-1 || (lastReadScore===null||lastReadScore<stageThresholds[stageIndex]);
 add(nav,prev,nextStage,next);results.append(nav);
 add(content,sentence,results);root.append(content);
}
function speak(text){
 if(!('speechSynthesis'in window))return;
 speechSynthesis.cancel();const x=new SpeechSynthesisUtterance(text);x.lang='en-US';x.rate=.88;speechSynthesis.speak(x);
}
function startRecognition(){
 if(!SpeechRecognition||recording)return;
 transcript='';interim='';lastReadScore=null;closing=false;
 try{
  const r=new SpeechRecognition();recognition=r;
  r.lang='en-US';r.continuous=true;r.interimResults=true;
  r.onresult=e=>{
   let finals=[],temporary=[];
   for(let i=0;i<e.results.length;i++){const t=e.results[i][0]?.transcript||'';(e.results[i].isFinal?finals:temporary).push(t);}
   transcript=finals.join(' ').trim();interim=temporary.join(' ').trim();
   const target=document.getElementById('gtTranscript');if(target)target.textContent=(transcript+' '+interim).trim()||'認識中…';
  };
  r.onerror=e=>{const x=document.getElementById('gtStatus');if(x)x.textContent='音声認識エラー：'+e.error;};
  r.onend=()=>finishRecognition();
  recording=true;r.start();
  const status=document.getElementById('gtStatus');if(status)status.textContent='● 音声認識中… 音読を終えたら「終了して判定」を押してください。';
  updateControls();
 }catch(e){recording=false;recognition=null;const status=document.getElementById('gtStatus');if(status)status.textContent='マイクを開始できません：'+e.message;}
}
function updateControls(){
 const bars=document.querySelectorAll('.gt-sentence .gt-reading-bar button');
 const start=bars[1],stop=bars[2];if(start)start.disabled=recording||!SpeechRecognition;if(stop)stop.disabled=!recording;
}
function stopRecognition(silent){
 if(!recognition)return;
 closing=silent;
 const r=recognition;
 if(silent){recognition=null;recording=false;try{r.onend=null;r.abort();}catch(_){}return;}
 try{r.stop();}catch(_){finishRecognition();}
}
function finishRecognition(){
 if(!recording)return;
 recording=false;recognition=null;updateControls();
 if(closing)return;
 const status=document.getElementById('gtStatus');
 if(!(transcript||interim).trim()){if(status)status.textContent='音声を認識できませんでした。もう一度お試しください。';return;}
 const q=currentExample(),result=window.CopeakVocabularyReading?.score(q.en,(transcript+' '+interim).trim());
 if(!result){if(status)status.textContent='採点機能を読み込めませんでした。';return;}
 lastReadScore=result.percent;
 const record=readProgress(q.id);
 record.best=Math.max(record.best||0,result.percent);record.attempts=(record.attempts||0)+1;
 if(result.percent>=stageThresholds[stageIndex])record.stage=Math.max(record.stage||0,stageIndex+1);
 state.reading[q.id]=record;put();
 const g=document.getElementById('gtAccuracy');if(g)g.firstChild.textContent=result.percent+'%';
 const t=document.getElementById('gtTranscript');
 if(t){t.replaceChildren();for(const w of result.wordMatches){const span=el('span',w.matched?'gt-word-good':'gt-word-bad',w.value+' ');t.append(span);}}
 if(status)status.textContent=result.percent>=stageThresholds[stageIndex]?'合格！ 次のステージに進めます。':stageThresholds[stageIndex]+'%以上を目指してもう一度音読しましょう。';
 const nav=document.querySelector('.gt-results .gt-quiz-buttons');if(nav){const b=nav.children[1];if(b)b.disabled=stageIndex===stages.length-1||result.percent<stageThresholds[stageIndex];}
 const meta=document.querySelector('.gt-results>.gt-muted');if(meta)meta.textContent='最高記録：'+record.best+'% ／ 挑戦回数：'+record.attempts;
}
window.addEventListener('beforeunload',()=>{stopRecognition(true);if('speechSynthesis'in window)speechSynthesis.cancel();});
showHome();
})();