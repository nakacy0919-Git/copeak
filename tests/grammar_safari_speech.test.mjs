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

const playedNotes=[];
class AudioContextMock{
 constructor(){this.state='running';this.currentTime=0;this.destination={};}
 createOscillator(){return {type:'sine',frequency:{value:0},connect(){},start(){playedNotes.push(this.frequency.value)},stop(){}}}
 createGain(){return {gain:{setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){}}}
}
window.AudioContext=AudioContextMock;

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
// GCC has no browser-specific speech start/stop watchdogs. Safari and iPad Chrome
// use exactly the same lifecycle as GCC Practice English.
const initialSynthCancels=window.synthCancels||0;
for(let attempt=0;attempt<5;attempt++){
 const rec=getNew();
 assert.equal(rec.continuous,true);
 assert.equal(rec.interimResults,true);
 assert.equal(rec.maxAlternatives,1);
 assert.equal(els.gtStop.disabled,false,'GCC enables End & Score as soon as Start is tapped');
 assert(els.gtStop.classList.contains('is-recording-guide'));
 ready(rec);transcribe(rec,phrase);
 els.gtStop.click();
 assert.equal(els.gtStop.classList.contains('is-recording-guide'),false);
 rec.onend();
 assert.equal(els.gtRecord.disabled,false,'record again after each assessment');
 assert.equal(els.gtScoreNumber.textContent,'100%');
}
assert.equal((window.synthCancels||0)-initialSynthCancels,5,'GCC cancels TTS before each recognition session');

assert.equal(playedNotes.length,5*9,'GCC plays 2 start notes + 2 stop notes + 5 success notes per perfect read');
assert.equal(playedNotes[0],523);
assert.equal(playedNotes[1],659);
assert.equal(playedNotes[2],523);
assert.equal(playedNotes[3],659);
assert.equal(playedNotes[4],523);
assert.equal(playedNotes[8],1318,'GCC 100% fanfare finishes with its highest tone');

// The audio toggle is opt-out and must never change recording results.
els.gtSoundToggle.click();
assert.equal(els.gtSoundToggle.attrs['aria-pressed'],'false');
const noteCount=playedNotes.length;
const muted=getNew();ready(muted);transcribe(muted,phrase);
els.gtStop.click();muted.onend();
assert.equal(els.gtScoreNumber.textContent,'100%');
assert.equal(playedNotes.length,noteCount,'muted interaction has no oscillators');
els.gtSoundToggle.click();
assert.equal(els.gtSoundToggle.attrs['aria-pressed'],'true');
assert.equal(playedNotes.length,noteCount+2,'enabling audio previews GCC two-note tap');
assert(storage['copeak-grammar-sounds']==='on');

// Diagnostic logs are event metadata only, not identifiable spoken text.
assert(els.gtSpeechTraceOutput.textContent.includes('recognizer.onresult'));
assert(els.gtSpeechTraceOutput.textContent.includes('session.finalize'));
assert(!els.gtSpeechTraceOutput.textContent.includes(phrase),'never persist recognized sentences in diagnostic output');


// Automatic recognition end must not end the learner's logical recording.
const first=getNew();ready(first);transcribe(first,'This is');
first.onend();
assert.equal(els.gtRecord.disabled,true);
assert.equal(els.gtScoreNumber.textContent,'—');
assert(timers.some(timer=>timer.active&&timer.ms===250),'GCC retries automatically');
fire(250);
const second=recognizers.at(-1);assert(second!==first&&second.started);
ready(second);
second.onresult({resultIndex:0,results:[{isFinal:true,0:{transcript:'a sentence'}}]});
assert.equal(els.gtTranscript.textContent,'This is a sentence','cumulative transcript across recognizers');
second.onresult({resultIndex:0,results:[{isFinal:true,0:{transcript:'a sentence'}}]});
assert.equal(els.gtTranscript.textContent,'This is a sentence','no duplicate results');
els.gtStop.click();second.onend();
assert.equal(els.gtRecord.disabled,false);
assert.equal(els.gtScoreNumber.textContent,'100%');

// End & Score during GCC's 250ms restart gap must complete without a microphone.
const gap=getNew();ready(gap);transcribe(gap,phrase);gap.onend();
const count=recognizers.length;
els.gtStop.click();
assert.equal(els.gtRecord.disabled,false);
fire(250);
assert.equal(recognizers.length,count,'Stop cancels pending restart');

// Empty WebKit events must preserve already recognized text.
const partial=getNew();ready(partial);partial.onspeechstart();
assert(els.gtSignalAudio.textContent.includes('起動'));
assert(els.gtSignalVoice.textContent.includes('検出'));
partial.onresult({resultIndex:0,results:[{isFinal:false,0:{transcript:'hello WebKit'}}]});
assert(els.gtTranscript.textContent.includes('hello WebKit'));
partial.onresult({resultIndex:0,results:[{isFinal:false,0:{transcript:''}}]});
assert(els.gtTranscript.textContent.includes('hello WebKit'));
partial.onresult({resultIndex:0,results:[{isFinal:true,0:{transcript:phrase}}]});
assert.equal(els.gtTranscript.textContent,phrase);
els.gtStop.click();partial.onend();

// No-speech is nonfatal in GCC; onend retries.
const silent=getNew();ready(silent);silent.onerror({error:'no-speech'});
silent.onend();
assert(timers.some(timer=>timer.active&&timer.ms===250));
fire(250);
const recovered=recognizers.at(-1);assert(recovered!==silent&&recovered.started);
ready(recovered);transcribe(recovered,phrase);els.gtStop.click();recovered.onend();
assert.equal(els.gtScoreNumber.textContent,'100%');

// Fatal mic errors abort and allow a fresh attempt directly from the tap.
const denied=getNew();ready(denied);denied.onerror({error:'audio-capture'});
assert.equal(els.gtRecord.disabled,false);
assert.equal(els.gtRetrySpeech.hidden,false);
denied.onend();
els.gtRetrySpeech.click();
const retry=recognizers.at(-1);assert(retry!==denied&&retry.started);
ready(retry);transcribe(retry,phrase);els.gtStop.click();retry.onend();
assert.equal(els.gtScoreNumber.textContent,'100%');


// Reproduce the reported problem: the recognizer says it started, but produces
// no onresult on the following attempt. The private event trace must explain
// the missing callback, without retaining the sentence text.
const deaf=getNew();ready(deaf);
const logAfterStart=els.gtSpeechTraceOutput.textContent.split('\n');
const lastSessionStart=logAfterStart.findLastIndex(entry=>entry.includes('session.begin'));
const thisAttempt=logAfterStart.slice(lastSessionStart);
assert(thisAttempt.some(entry=>entry.includes('recognizer.onstart')));
assert(thisAttempt.some(entry=>entry.includes('recognizer.onaudiostart')));
assert(!thisAttempt.some(entry=>entry.includes('recognizer.onresult')));
els.gtStop.click();deaf.onend();
assert.equal(els.gtRecord.disabled,false,'silent recognition must permit a fresh tap');
assert(els.gtRecognitionStatus.textContent.includes('再挑戦'));
assert(!els.gtSpeechTraceOutput.textContent.includes(phrase));

// None of Copeak's old timer-driven stops may remain.
assert(!timers.some(t=>t.active&&[6500,7000,18000].includes(t.ms)));
assert(source('grammar-safari-guide.css').includes('prefers-reduced-motion:reduce'));
console.log('PASS GCC audio: 5x Start/End/Score tunes, muted mode, anonymized mic trace; iPad reconnect and transcript parity');
