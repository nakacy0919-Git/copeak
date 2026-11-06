import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>readFileSync(path.join(root,p),'utf8');
const fixture=JSON.parse(read('data/grammar/junior/J1.json'));
const manifest=JSON.parse(read('data/grammar/junior/manifest.json'));
class Element {
 constructor(tag='div',id=''){
  this.tag=tag;this.id=id;this.children=[];this.parentElement=null;this.handlers={};this.dataset={};
  this.hidden=false;this.disabled=false;this.open=false;this.textContent='';this.value='';
  this.style={setProperty:(k,v)=>{this.style[k]=v}};this.attrs={};
  const set=new Set();
  this.classList={add:k=>set.add(k),remove:k=>set.delete(k),toggle:(k,yes)=>yes?set.add(k):set.delete(k)};
 }
 append(...xs){for(const x of xs.flatMap(y=>y?.tag==='fragment'?y.children.slice():[y])){if(!x)continue;if(x.parentElement)x.parentElement.children=x.parentElement.children.filter(z=>z!==x);this.children.push(x);x.parentElement=this;}}
 appendChild(x){this.append(x);return x}
 replaceChildren(...xs){this.children=[];this.append(...xs)}
 after(x){const p=this.parentElement;assert(p);const at=p.children.indexOf(this);p.children.splice(at+1,0,x);x.parentElement=p}
 setAttribute(k,v){this.attrs[k]=String(v)}
 removeAttribute(k){delete this.attrs[k]}
 addEventListener(k,f){(this.handlers[k]??=[]).push(f)}
 click(){for(const f of this.handlers.click||[])f({target:this})}
 querySelectorAll(s){const a=[];const walk=p=>p.children.forEach(c=>{if(s==='button'&&c.tag==='button'||s==='[data-category]'&&c.dataset.category||s==='[data-unit]'&&c.dataset.unit)a.push(c);walk(c)});walk(this);return a}
 closest(t){let p=this.parentElement;while(p){if(p.tag===t)return p;p=p.parentElement}return null}
 scrollIntoView(){}showModal(){this.open=true}close(){this.open=false}
}
const ids=[...read('grammar-training.html').matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
const dom=Object.fromEntries(ids.map(id=>[id,new Element('div',id)]));
dom.gtLesson.append(dom.gtQuiz,dom.gtReading);
dom.gtQuiz.append(dom.gtOptions);
const detail=new Element('details');detail.append(dom.gtWrongExplanations);
const modes=['junior','senior','entrance'].map(mode=>{const e=new Element('button');e.dataset.gtMode=mode;return e});
const document={
 getElementById:id=>dom[id],
 createElement:t=>new Element(t),createElementNS:(ns,t)=>new Element(t),
 createDocumentFragment:()=>new Element('fragment'),
 createTextNode:t=>{const e=new Element('text');e.textContent=t;return e},
 querySelectorAll:s=>s==='[data-gt-mode]'?modes:[],
 addEventListener(){},body:new Element('body')
};
const data={'data/grammar/entrance/manifest.json':JSON.parse(read('data/grammar/entrance/manifest.json')),'data/grammar/junior/manifest.json':manifest,'data/grammar/junior/J1.json':fixture};
for(const file of ['data/grammar/senior/manifest.json','data/grammar/senior/HS-01.json','data/grammar/entrance/A01.json','data/grammar/entrance/A02.json'])data[file]=JSON.parse(read(file));
const fetch=async url=>{assert(data[url],'unexpected fetch: '+url);return{ok:true,json:async()=>data[url]}};
const timers=[],sessions=[],storage={},scored=[];
const window={
 innerWidth:1440,innerHeight:875,location:{search:''},addEventListener(){},scrollTo(){},
 matchMedia:()=>({matches:false}),speechSynthesis:{cancel(){}},
 setTimeout:(fn,delay)=>{const timer={fn,delay,canceled:false};timers.push(timer);return timer},
 clearTimeout:t=>{if(t)t.canceled=true}
};
const fire=delay=>{for(const t of timers.filter(t=>!t.canceled&&t.delay===delay)){t.canceled=true;t.fn()}};
class Recognizer {
 constructor(){this.started=false;this.stopped=false;this.aborted=false;sessions.push(this)}
 start(){this.started=true}stop(){this.stopped=true}abort(){this.aborted=true}
}
window.SpeechRecognition=Recognizer;
window.CopeakVocabularyReading={score:(sentence,spoken)=>{
 assert(spoken.length);scored.push(spoken);
 const words=sentence.trim().split(/\s+/);
 return {percent:100,matchCount:words.length,targetCount:words.length,wordMatches:words.map(value=>({value,matched:true}))};
}};
function Option(text,value){this.textContent=text;this.value=value}
function URLSearchParams(){this.get=()=>null}
const localStorage={getItem:k=>storage[k]??null,setItem:(k,v)=>storage[k]=v};
const ctx={window,document,fetch,localStorage,Option,URLSearchParams,console};
vm.runInNewContext(read('grammar-training-core.js'),{window,module:{exports:{}}});
vm.runInNewContext(read('grammar-progress.js'),{window,module:{exports:{}}});
vm.runInNewContext(read('grammar-card-icons.js'),{window,document});
vm.runInNewContext(read('grammar-exam-sessions.js'),{window,module:{exports:{}}});
vm.runInNewContext(read('grammar-training.js'),ctx);
async function tick(){for(let i=0;i<24;i++)await Promise.resolve()}
const ready=s=>{s.onstart();s.onaudiostart()};
const result=(s,text)=>s.onresult({results:[{isFinal:true,0:{transcript:text}}]});
function start(){dom.gtRecord.click();const s=sessions.at(-1);assert(s.started);return s}
async function run(){
 modes[2].click();await tick();
 assert.equal(dom.gtExamModeNav.hidden,false,'exam mode chooser visible');
 assert.equal(dom.gtExamCategoryMode.attrs['aria-pressed'],'true');
 assert.equal(dom.gtExamRandomPanel.hidden,true);

 // One or multiple categories, with an explicit number of questions.
 dom.gtExamQuestionCount.value='20';
 dom.gtExamRandomMode.click();
 assert.equal(dom.gtExamRandomPanel.hidden,false);
 assert.equal(dom.gtCategoriesPanel.hidden,true);
 dom.gtExamScopeSelected.checked=true;dom.gtExamScopeAll.checked=false;
 dom.gtExamScopeSelected.handlers.change[0]();
 assert.equal(dom.gtExamStartRandom.disabled,true,'no category selected');
 const inputs=dom.gtExamCategoryChecks.children.map(label=>label.children[0]);
 const chosen=inputs.filter(input=>['A01','A02'].includes(input.value));
 assert.equal(chosen.length,2);
 for(const input of chosen){input.checked=true;input.handlers.change[0]();}
 assert.equal(dom.gtExamSelectedCount.textContent,'2カテゴリーを選択');
 assert.equal(dom.gtExamStartRandom.disabled,false);
 dom.gtExamQuestionCount.value='8';
 dom.gtExamQuestionCount.handlers.input[0]();
 dom.gtExamStartRandom.click();await tick();
 assert.equal(dom.gtLesson.hidden,false,'random test started');
 assert.equal(dom.gtProgressText.textContent,'1 / 8','exact selected question count');
 assert.equal(dom.gtExamAccuracy.hidden,false);
 const used=[];
 for(let i=0;i<8;i++){
  const question=[...data['data/grammar/entrance/A01.json'].questions,...data['data/grammar/entrance/A02.json'].questions]
   .find(q=>q.stem_en===dom.gtStem.textContent);
  assert(question,'random question from selected source banks');
  used.push(question.id);
  const correctIndex='ABCD'.indexOf(question.answer);
  dom.gtOptions.children[i%2===0?correctIndex:(correctIndex+1)%4].click();
  assert.equal(dom.gtQuizScore.textContent.includes('正解率'),true);
  const stored=JSON.parse(storage.copeak_grammar_exam_sessions_v1);
  assert.equal(stored[0].answered,i+1,'each answer persists immediately');
  assert.equal(stored[0].type,'random');
  assert.equal(stored[0].categoryIds.length,2);
  assert.equal(stored[0].total,8);
  assert.equal(stored[0].correct,Math.ceil((i+1)/2));
  assert.equal(dom.gtModalNext.hidden,false,'even incorrect random answers can advance');
  dom.gtModalNext.click();
 }
 assert.equal(new Set(used).size,8,'never repeat a question in one test');
 assert.equal(dom.gtExamResult.hidden,false,'show completed result');
 assert.equal(dom.gtExamResultCount.textContent,'4 / 8 正解');
 assert.equal(dom.gtExamResultRate.textContent,'50%');
 assert.equal(JSON.parse(storage.copeak_grammar_exam_sessions_v1)[0].status,'completed');
 assert.equal(dom.gtExamHistoryOverview.textContent.includes('50%'),true);

 // Replay runs a fresh random draw under the same category/count conditions.
 dom.gtExamAgain.click();await tick();
 assert.equal(dom.gtLesson.hidden,false);
 assert.equal(dom.gtProgressText.textContent,'1 / 8');

 // Leave after one answer: save partial accuracy with an exited status.
 const question=[...data['data/grammar/entrance/A01.json'].questions,...data['data/grammar/entrance/A02.json'].questions]
  .find(q=>q.stem_en===dom.gtStem.textContent);
 dom.gtOptions.children['ABCD'.indexOf(question.answer)].click();
 dom.gtBackHome.click();
 assert.equal(dom.gtExamRandomPanel.hidden,false,'back from random lesson returns to random settings');
 const history=JSON.parse(storage.copeak_grammar_exam_sessions_v1);
 assert.equal(history[0].answered,1);
 assert.equal(history[0].status,'exited');
 assert.equal(history[1].correct,4);
 assert.equal(history[1].status,'completed');

 // Original category-by-topic learning remains available with an optional limit.
 dom.gtExamCategoryMode.click();
 assert.equal(dom.gtCategoriesPanel.hidden,false);
 assert.equal(dom.gtExamRandomPanel.hidden,true);
 dom.gtCategoryCards.children[0].click();await tick();
 assert.equal(dom.gtExamCategoryCountWrap.hidden,false);
 dom.gtExamCategoryQuestionCount.value='2';
 dom.gtUnitList.children[0].click();
 assert.equal(dom.gtProgressText.textContent,'1 / 2');
 for(let i=0;i<2;i++){
  const src=data['data/grammar/entrance/A01.json'].questions.find(q=>q.stem_en===dom.gtStem.textContent);
  assert(src);
  dom.gtOptions.children['ABCD'.indexOf(src.answer)].click();
  dom.gtModalNext.click();
 }
 assert.equal(dom.gtExamResult.hidden,false);
 assert.equal(dom.gtExamResultCount.textContent,'2 / 2 正解');
 assert.equal(dom.gtExamResultRate.textContent,'100%');
 const updated=JSON.parse(storage.copeak_grammar_exam_sessions_v1);
 assert.equal(updated[0].type,'category');
 assert.equal(updated[0].status,'completed');
 assert.equal(updated[1].type,'random');
 console.log('PASS exam flow: categories, 8-question mixed quiz, 50% accuracy history, retry, partial exit and 2-question category run');
}
await run();
