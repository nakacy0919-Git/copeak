import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source=file=>fs.readFileSync(path.join(root,file),'utf8');
const manifest=JSON.parse(source('data/grammar/junior/manifest.json'));
const bank=JSON.parse(source('data/grammar/junior/J1.json'));
class Element{
 constructor(tag='div'){
  this.tag=tag;this.children=[];this.parentElement=null;this.handlers={};this.dataset={};
  this.hidden=false;this.disabled=false;this.open=false;this.textContent='';this.value='';this.attrs={};
  this.style={setProperty:(name,value)=>{this.style[name]=value}};
  const classes=new Set();
  this.classList={add:name=>classes.add(name),remove:name=>classes.delete(name),
   contains:name=>classes.has(name),toggle:(name,yes)=>yes?classes.add(name):classes.delete(name)};
 }
 append(...items){for(const item of items.flatMap(x=>x?.tag==='fragment'?x.children.slice():[x])){
  if(!item)continue;
  if(item.parentElement)item.parentElement.children=item.parentElement.children.filter(y=>y!==item);
  this.children.push(item);item.parentElement=this;
 }}
 replaceChildren(...items){this.children=[];this.append(...items)}
 after(item){const parent=this.parentElement;assert(parent);const i=parent.children.indexOf(this);parent.children.splice(i+1,0,item);item.parentElement=parent}
 setAttribute(name,value){this.attrs[name]=String(value)}
 removeAttribute(name){delete this.attrs[name]}
 addEventListener(name,fn){(this.handlers[name]??=[]).push(fn)}
 click(){for(const fn of this.handlers.click||[])fn({target:this})}
 querySelectorAll(query){const result=[];const scan=parent=>parent.children.forEach(child=>{
  if(query==='button'&&child.tag==='button'||query==='[data-category]'&&child.dataset.category||query==='[data-unit]'&&child.dataset.unit)result.push(child);
  scan(child);
 });scan(this);return result}
 closest(){return null}
 scrollIntoView(){}
 showModal(){this.open=true}
 close(){this.open=false}
}
const ids=[...source('grammar-training.html').matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
const els=Object.fromEntries(ids.map(id=>[id,new Element()]));
els.gtLesson.append(els.gtQuiz,els.gtReading);els.gtQuiz.append(els.gtOptions);
const modes=['junior','senior','entrance'].map(mode=>{const button=new Element('button');button.dataset.gtMode=mode;return button});
const document={getElementById:id=>els[id],createElement:tag=>new Element(tag),
 createElementNS:(ns,tag)=>new Element(tag),createDocumentFragment:()=>new Element('fragment'),
 createTextNode:txt=>{const e=new Element('text');e.textContent=txt;return e},
 querySelectorAll:query=>query==='[data-gt-mode]'?modes:[],body:new Element(),addEventListener(){}};
const files={'data/grammar/junior/manifest.json':manifest,'data/grammar/junior/J1.json':bank};
const fetch=async url=>{assert(files[url],url);return{ok:true,json:async()=>files[url]}};
const timers=[],recognizers=[],storage={};
const window={navigator:{userAgent:'Mozilla/5.0 (iPad; CPU OS 26_6 like Mac OS X) AppleWebKit/605.1.15 Safari/604.1',
 platform:'iPad',maxTouchPoints:5},innerWidth:1100,innerHeight:800,location:{search:''},
 speechSynthesis:{speaking:false,cancel(){window.synthCancels=(window.synthCancels||0)+1}},
 matchMedia:()=>({matches:false}),scrollTo(){},addEventListener(){},
 setTimeout:(fn,ms)=>{const timer={fn,ms,active:true};timers.push(timer);return timer},
 clearTimeout:timer=>{if(timer)timer.active=false}};
const fire=ms=>{for(const t of timers.filter(t=>t.active&&t.ms===ms)){t.active=false;t.fn()}};
class Recognizer{
 constructor(){recognizers.push(this);this.started=false;this.aborted=false;this.stopped=false}
 start(){this.started=true}
 stop(){this.stopped=true}
 abort(){this.aborted=true}
}
window.webkitSpeechRecognition=Recognizer;
window.CopeakVocabularyReading={score:(sentence,spoken)=>{
 assert(spoken.length>0);
 const words=sentence.trim().split(/\s+/);
 return{percent:100,matchCount:words.length,targetCount:words.length,
  wordMatches:words.map(value=>({value,matched:true}))};
}};
function Option(text,value){this.textContent=text;this.value=value}
function URLSearchParams(){this.get=()=>null}
const localStorage={getItem:key=>storage[key]??null,setItem:(key,value)=>storage[key]=value};
const environment={window,document,fetch,localStorage,Option,URLSearchParams,console};
vm.runInNewContext(source('grammar-training-core.js'),{window,module:{exports:{}}});
vm.runInNewContext(source('grammar-progress.js'),{window,module:{exports:{}}});
vm.runInNewContext(source('grammar-card-icons.js'),{window,document});
vm.runInNewContext(source('grammar-training.js'),environment);
async function tick(){for(let i=0;i<35;i++)await Promise.resolve()}
const getNew=()=>{els.gtRecord.click();const r=recognizers.at(-1);assert(r?.started);return r};
const ready=r=>{r.onstart();r.onaudiostart()};
const transcribe=(r,text)=>r.onresult({results:[{isFinal:true,0:{transcript:text}}]});
modes[0].click();await tick();assert(els.gtCategoryCards.children.length>0);
els.gtCategoryCards.children[0].click();await tick();assert(els.gtUnitList.children.length>0);
els.gtUnitList.children[0].click();const phrase=els.gtReadingText.textContent;assert(phrase.length>5);
const initialSynthCancels=window.synthCancels||0;
for(let attempt=0;attempt<3;attempt++){
 const r=getNew();assert.equal(r.continuous,true,'Safari must match GCC continuous recognizer');
 assert.equal(els.gtStop.disabled,true);
 assert.equal(els.gtStop.classList.contains('is-recording-guide'),false);
 ready(r);assert.equal(els.gtStop.disabled,false);
 assert.equal(els.gtStop.classList.contains('is-recording-guide'),true);
 transcribe(r,phrase);
 els.gtStop.click();assert.equal(els.gtStop.classList.contains('is-recording-guide'),false);r.onend();
 assert.equal(els.gtRecord.disabled,false);
 assert.equal(els.gtScoreNumber.textContent,'100%');
}
assert.equal(window.synthCancels||0,initialSynthCancels,'Do not reset idle WebKit speech audio session on restart');

// Actual GCC pattern: browser can end recognition on a pause WITHOUT student ending the reading.
// Copeak must transparently reopen recognition and accumulate across sessions.
const autoFirst=getNew();
ready(autoFirst);transcribe(autoFirst,'This is');
autoFirst.onend();
assert.equal(els.gtRecord.disabled,true,'browser auto-end must not finish student recording');
assert.equal(els.gtScoreNumber.textContent,'—','automatic end must not score');
assert(timers.some(timer=>timer.active&&timer.ms===250),'GCC-style 250ms restart required');
fire(250);
const autoSecond=recognizers.at(-1);
assert.notEqual(autoSecond,autoFirst);
assert(autoSecond.started);
ready(autoSecond);
autoSecond.onresult({resultIndex:0,results:[{isFinal:true,0:{transcript:'a sentence'}}]});
assert.equal(els.gtTranscript.textContent,'This is a sentence','transcript must accumulate');
autoSecond.onresult({resultIndex:0,results:[{isFinal:true,0:{transcript:'a sentence'}}]});
assert.equal(els.gtTranscript.textContent,'This is a sentence','do not duplicate repeated final results');
els.gtStop.click();autoSecond.onend();
assert.equal(els.gtRecord.disabled,false,'explicit End & Score releases recorder');
assert.equal(els.gtScoreNumber.textContent,'100%');


const partial=getNew();ready(partial);partial.onspeechstart();
assert(els.gtSignalAudio.textContent.includes('起動'));
assert(els.gtSignalVoice.textContent.includes('検出'));
partial.onresult({results:[{isFinal:false,0:{transcript:'hello WebKit'}}]});
assert(els.gtTranscript.textContent.includes('hello WebKit'));
partial.onresult({results:[{isFinal:false,0:{transcript:''}}]});
assert(els.gtTranscript.textContent.includes('hello WebKit'),'blank result must not erase prior words');
partial.onresult({results:[{isFinal:true,0:{transcript:phrase}}]});
assert(els.gtSignalText.textContent.includes('受信'));
els.gtStop.click();partial.onend();
const stalled=getNew();ready(stalled);stalled.onspeechstart();
assert(timers.some(t=>t.active&&t.ms===7000),'transcript watchdog must be active');
fire(7000);
assert.equal(els.gtRetrySpeech.hidden,false,'visible reconnect after missing onresult');
assert(els.gtRecognitionStatus.textContent.includes('文字起こし'));
els.gtRetrySpeech.click();
assert(stalled.aborted,'reconnect must abort the stalled recognizer');
const reconnected=recognizers.at(-1);
assert(reconnected.started,'reconnect must synchronously start new recognition from tap');
ready(reconnected);transcribe(reconnected,phrase);els.gtStop.click();reconnected.onend();
assert.equal(els.gtScoreNumber.textContent,'100%');

// A Safari session can start while never producing onresult, onerror or onend.
let r=getNew();ready(r);
assert(timers.some(timer=>timer.active&&timer.ms===18000));
fire(18000);
assert.equal(r.aborted,true);
assert.equal(els.gtRecord.disabled,false);
assert(els.gtRecognitionStatus.textContent.includes('Safari'));
r.onend(); // Stale event from former session must not score.
r=getNew();ready(r);transcribe(r,phrase);els.gtStop.click();r.onend();
assert.equal(els.gtScoreNumber.textContent,'100%');
// Unlike the previous Copeak, GCC treats no-speech as nonfatal and reconnects.
r=getNew();ready(r);r.onerror({error:'no-speech'});
assert.equal(els.gtStop.classList.contains('is-recording-guide'),true);
r.onend();
assert(timers.some(t=>t.active&&t.ms===250),'nonfatal no-speech must auto-reconnect');
fire(250);
const recovered=recognizers.at(-1);
assert(recovered!==r&&recovered.started);
ready(recovered);transcribe(recovered,phrase);
els.gtStop.click();recovered.onend();
assert.equal(els.gtRecord.disabled,false);
assert(source('grammar-safari-guide.css').includes('prefers-reduced-motion:reduce'));
console.log('PASS iPad Safari: GCC auto-restart, cross-session cumulative transcript, explicit scoring, repeat 3x, no-result and no-speech recovery');
