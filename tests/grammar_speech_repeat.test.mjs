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
 createElement:t=>new Element(t),
 createDocumentFragment:()=>new Element('fragment'),
 createTextNode:t=>{const e=new Element('text');e.textContent=t;return e},
 querySelectorAll:s=>s==='[data-gt-mode]'?modes:[],
 addEventListener(){},body:new Element('body')
};
const data={'data/grammar/junior/manifest.json':manifest,'data/grammar/junior/J1.json':fixture};
const fetch=async url=>{assert(data[url],'unexpected fetch: '+url);return{ok:true,json:async()=>data[url]}};
const timers=[],sessions=[],storage={};
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
 assert(spoken.length);
 const words=sentence.trim().split(/\s+/);
 return {percent:100,matchCount:words.length,targetCount:words.length,wordMatches:words.map(value=>({value,matched:true}))};
}};
function Option(text,value){this.textContent=text;this.value=value}
function URLSearchParams(){this.get=()=>null}
const localStorage={getItem:k=>storage[k]??null,setItem:(k,v)=>storage[k]=v};
const ctx={window,document,fetch,localStorage,Option,URLSearchParams,console};
vm.runInNewContext(read('grammar-training-core.js'),{window,module:{exports:{}}});
vm.runInNewContext(read('grammar-progress.js'),{window,module:{exports:{}}});
vm.runInNewContext(read('grammar-training.js'),ctx);
async function tick(){for(let i=0;i<24;i++)await Promise.resolve()}
const ready=s=>{s.onstart();s.onaudiostart()};
const result=(s,text)=>s.onresult({results:[{isFinal:true,0:{transcript:text}}]});
function start(){dom.gtRecord.click();const s=sessions.at(-1);assert(s.started);return s}
async function run(){
 modes[0].click();await tick();dom.gtCategoryCards.children[0].click();await tick();dom.gtUnitList.children[0].click();
 const phrase=dom.gtReadingText.textContent;
 assert(phrase.length>5);
 let s=start();ready(s);result(s,phrase);dom.gtStop.click();s.onend();
 assert.equal(dom.gtRecord.disabled,false,'first successful read must re-enable mic');
 assert.equal(dom.gtScoreNumber.textContent,'100%');
 assert.equal(dom.gtNextStage.hidden,false);
 // Re-read the same stage even after scoring.
 s=start();ready(s);result(s,phrase);dom.gtStop.click();s.onend();
 assert.equal(dom.gtRecord.disabled,false,'same-stage repeat must be possible');
 dom.gtNextStage.click();
 assert(dom.gtReadingHeading.textContent.includes('25%'),'next stage should be unlocked');
 s=start();ready(s);result(s,phrase);dom.gtStop.click();s.onend();
 assert.equal(dom.gtRecord.disabled,false,'next-stage read must also restart');
 // Safari/WebKit: stop() fires no end event.
 s=start();ready(s);result(s,phrase);dom.gtStop.click();
 assert.equal(dom.gtRecord.disabled,true);
 assert(timers.some(t=>!t.canceled&&t.delay===3000),'stop recovery watchdog must be armed');
 s.onstart(); // delayed start event must NOT revert stopping state.
 assert.equal(dom.gtStop.disabled,true);
 fire(3000);
 assert(s.aborted,'recognizer must be released');
 assert.equal(dom.gtRecord.disabled,false,'must recover after missing onend');
 assert.equal(dom.gtScoreNumber.textContent,'100%','available transcript must still be scored');
 const recordId=fixture.units[0].sentences[0].id;
 const count=JSON.parse(storage.copeak_grammar_training_v2).records[recordId].readingAttempts;
 s.onend();
 assert.equal(JSON.parse(storage.copeak_grammar_training_v2).records[recordId].readingAttempts,count,'stale onend must not rescore');
 // Stop with no speech should reset controls without recording success.
 s=start();ready(s);dom.gtStop.click();fire(3000);
 assert.equal(dom.gtRecord.disabled,false);
 assert(dom.gtRecognitionStatus.textContent.includes('再挑戦'));
 // Service never starts: timeout must release the microphone.
 s=start();fire(6500);
 assert(s.aborted);assert.equal(dom.gtRecord.disabled,false);
 // Error received, but browser omits end.
 s=start();s.onstart();s.onerror({error:'no-speech'});fire(950);
 assert.equal(dom.gtRecord.disabled,false);
 s=start();ready(s);result(s,phrase);dom.gtStop.click();s.onend();
 assert.equal(dom.gtRecord.disabled,false);
 console.log('PASS: repeat, next-stage, missing end, late event, silent stop, failed start, error recovery');
}
await run();
