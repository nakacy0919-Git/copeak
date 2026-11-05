import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const read=p=>fs.readFileSync(new URL('../'+p,import.meta.url),'utf8');
const window={};vm.runInNewContext(read('grammar-practice-engine.js'),{window});
const {score,createFeedback}=window.CopeakGrammarPractice;
// Independent edit-distance reference: counts insertions, deletions and substitutions.
function reference(target,spoken){
 const norm=s=>s.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9\s]/g,' ').trim().split(/\s+/).filter(Boolean);
 const a=norm(target),b=norm(spoken);let row=b.map((_,i)=>i+1);row.unshift(0);
 for(let i=1;i<=a.length;i++){const next=[i];for(let j=1;j<=b.length;j++)next[j]=Math.min(row[j]+1,next[j-1]+1,row[j-1]+(a[i-1]===b[j-1]?0:1));row=next;}
 return a.length?Math.max(0,Math.round(100*(1-row[b.length]/a.length))):100;
}
const cases=[['I am a student.','I am a student'],['I am a student.','I am a good student'],["I'm here.",'I am here'],['I like English','English like I'],['I can read this',''],['','']];
for(let i=0;i<100;i++){const t='We practice English every day at school';const heard=t.split(' ').filter((_,j)=>(j+i)%4!==0);if(i%2)heard.splice(i%heard.length,0,'extra');cases.push([t,heard.join(' ')]);}
for(const [target,spoken] of cases)assert.equal(score(target,spoken).percent,reference(target,spoken));
assert.equal(score('I am a student','I am a good student').percent,75,'extra words reduce GCC accuracy');
let contexts=0,resumes=0,notes=0;const amplitudes=[];
class Audio{
 constructor(){contexts++;this.state='suspended';this.currentTime=0;this.destination={};}
 resume(){resumes++;return Promise.resolve();}
 createOscillator(){return {type:'',frequency:{value:0},connect(){},start(){notes++},stop(){}};}
 createGain(){return {gain:{setValueAtTime(){},exponentialRampToValueAtTime:v=>amplitudes.push(v)},connect(){}};}
}
const sound=createFeedback({AudioContext:Audio});sound.tone('tap');sound.tone('90');
assert.equal(contexts,1);assert.equal(resumes,2);assert.equal(notes,5);assert(Math.max(...amplitudes)<=.025);
sound.toggle();sound.tone('100');assert.equal(notes,5,'muted feedback stays silent');
assert.doesNotThrow(()=>createFeedback({AudioContext:class{constructor(){throw Error('unavailable')}}}).tone('tap'));
console.log('PASS GCC word-error scoring and optional gentle Web Audio feedback');
