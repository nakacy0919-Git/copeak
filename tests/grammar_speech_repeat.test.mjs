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
vm.runInNewContext(read('grammar-training.js'),ctx);
async function tick(){for(let i=0;i<24;i++)await Promise.resolve()}
const ready=s=>{s.onstart();s.onaudiostart()};
const result=(s,text)=>s.onresult({results:[{isFinal:true,0:{transcript:text}}]});
function start(){dom.gtRecord.click();const s=sessions.at(-1);assert(s.started);return s}
async function run(){
 modes[0].click();await tick();dom.gtCategoryCards.children[0].click();await tick();dom.gtUnitList.children[0].click();
 const phrase=dom.gtReadingText.textContent;
 assert(phrase.length>5);

 let r=start();assert.equal(dom.gtStop.disabled,false);
 ready(r);result(r,phrase);dom.gtStop.click();r.onend();
 assert.equal(dom.gtRecord.disabled,false);
 assert.equal(dom.gtScoreNumber.textContent,'100%');
 assert.equal(dom.gtNextStage.hidden,false);
 const recordId=fixture.units[0].sentences[0].id;
 let attempts=JSON.parse(storage.copeak_grammar_training_v2).records[recordId].readingAttempts;

 r=start();ready(r);result(r,phrase);dom.gtStop.click();r.onend();
 assert.equal(dom.gtRecord.disabled,false,'same-stage reading can restart');
 assert.equal(JSON.parse(storage.copeak_grammar_training_v2).records[recordId].readingAttempts,attempts+1);
 dom.gtNextStage.click();
 assert(dom.gtReadingHeading.textContent.includes('25%'),'stage advances');
 r=start();ready(r);result(r,phrase);dom.gtStop.click();r.onend();
 assert.equal(dom.gtScoreNumber.textContent,'100%');

 // The browser can auto-end and re-open recognition without scoring.
 r=start();ready(r);result(r,'I am');
 r.onend();assert.equal(dom.gtScoreNumber.textContent,'—');
 assert(timers.some(t=>!t.canceled&&t.delay===250));
 fire(250);
 let next=sessions.at(-1);assert.notEqual(next,r);assert(next.started);
 ready(next);result(next,'a student');dom.gtStop.click();next.onend();
 assert.equal(dom.gtRecord.disabled,false);
 assert.equal(dom.gtScoreNumber.textContent,'100%');

 // If Safari skips onend after stop, release after GCC's 1.6s safeguard.
 r=start();ready(r);result(r,phrase);dom.gtStop.click();
 assert(timers.some(t=>!t.canceled&&t.delay===1600));
 fire(1600);assert(r.aborted);
 assert.equal(dom.gtRecord.disabled,false);
 const count=JSON.parse(storage.copeak_grammar_training_v2).records[recordId].readingAttempts;
 r.onend();
 assert.equal(JSON.parse(storage.copeak_grammar_training_v2).records[recordId].readingAttempts,count,'stale end cannot re-score');

 // Stop without recognized words should not count as a completed attempt.
 r=start();ready(r);dom.gtStop.click();r.onend();
 assert.equal(dom.gtRecord.disabled,false);
 assert(dom.gtRecognitionStatus.textContent.includes('再挑戦'));

 // A fatal error aborts promptly; no legacy start/error timers involved.
 r=start();ready(r);r.onerror({error:'audio-capture'});
 assert(r.aborted);
 assert.equal(dom.gtRecord.disabled,false);
 r.onend();
 r=start();ready(r);result(r,phrase);dom.gtStop.click();r.onend();
 assert.equal(dom.gtScoreNumber.textContent,'100%');

 // A WebKit stop that ends synchronously must not retain a stray fallback timer.
 r=start();ready(r);result(r,phrase);
 r.stop=()=>{r.stopped=true;r.onend();};
 dom.gtStop.click();
 assert.equal(dom.gtRecord.disabled,false);
 assert.equal(timers.filter(t=>!t.canceled&&t.delay===1600).length,0);

 // Preserve interim-only words when a service ends without a final result.
 r=start();r.onstart();
 assert(dom.gtSignalAudio.textContent.includes('待機'),'service start is not audio capture');
 r.onaudiostart();
 r.onresult({resultIndex:0,results:[{isFinal:false,0:{transcript:'I am'}}]});
 r.onend();fire(250);next=sessions.at(-1);ready(next);result(next,'a student');
 assert.equal(dom.gtTranscript.textContent,'I am a student');
 dom.gtStop.click();next.onend();
 assert.equal(scored.at(-1),'I am a student','score must receive the complete session');
 assert(dom.gtRecognitionStatus.textContent.includes('未確定'));

 // A cumulative final may be revised; use the current snapshot, not append-only indices.
 r=start();ready(r);result(r,'I ham');result(r,'I am');
 r.onresult({resultIndex:1,results:[{isFinal:true,0:{transcript:'I am'}},{isFinal:false,0:{transcript:'a student'}}]});
 r.onresult({resultIndex:1,results:[{isFinal:true,0:{transcript:'I am'}}]});
 assert.equal(dom.gtTranscript.textContent,'I am','removed interim results must disappear');
 dom.gtStop.click();r.onend();assert.equal(scored.at(-1),'I am');

 assert(!timers.some(t=>!t.canceled&&[6500,7000,18000].includes(t.delay)));
 // iPad category paging must expose every entry without squeezing the cards.
 modes[2].click();await tick();
 const found=new Set();
 for(let page=0;page<10;page++){
  assert(parseFloat(dom.gtCategoryCards.style['--gt-grid-height'])>=158);
  dom.gtCategoryCards.children.forEach(c=>found.add(c.dataset.category));
  if(dom.gtNextCategories.disabled)break;
  dom.gtNextCategories.click();
 }
 assert.equal(found.size,26,'all entrance categories remain accessible');
 assert.equal(dom.gtNextCategories.disabled,true);
 dom.gtPrevCategories.click();assert.equal(dom.gtPrevCategories.disabled,true);
 assert.equal(dom.gtCategoryCards.children[0].dataset.category,'A01');
 console.log('PASS category pagination: all 26 categories, forward/back boundaries');
 console.log('PASS GCC controller: explicit scoring, same-stage retry, next-stage, auto-reconnect, stale events, stop fallback, fatal errors');
}
await run();
