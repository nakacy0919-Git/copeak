import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const code=fs.readFileSync(path.join(root,'grammar-training.js'),'utf8');
const a=code.indexOf('async function testMicInput(){');
const b=code.indexOf('function retrySpeechRecognition(){',a);
assert(a>=0&&b>a);
const nodes={gtMicTest:{disabled:false},gtMicTestResult:{textContent:''}};
const state={recognition:{},micPhase:'listening',micDiagnosticToken:0,micDiagnosticStream:null,micDiagnosticContext:null};
const tracks=[{stopped:false,stop(){this.stopped=true}}];
let count=0,ctxClosed=false;
class Audio {
 constructor(){this.state='running'}
 createMediaStreamSource(){return{connect(){}}}
 createAnalyser(){return{fftSize:512,getByteTimeDomainData(buffer){count++;for(let i=0;i<buffer.length;i++)buffer[i]=i%2?148:108;}}}
 async close(){ctxClosed=true}
}
let permissions=0;
const window={
 navigator:{mediaDevices:{getUserMedia:async()=>{permissions++;return{getTracks:()=>tracks}}}},
 AudioContext:Audio,
 setTimeout:fn=>{Promise.resolve().then(fn);return{}}
};
function cleanup(){
 state.micDiagnosticToken++;
 const stream=state.micDiagnosticStream,ctx=state.micDiagnosticContext;
 state.micDiagnosticStream=null;state.micDiagnosticContext=null;
 if(stream)for(const track of stream.getTracks())track.stop();
 if(ctx)ctx.close();
 nodes.gtMicTest.disabled=false;
}
const create=vm.runInNewContext(
 '(function(state,window,$,closeMicDiagnostic){'+code.slice(a,b)+';return testMicInput;})',
 {Uint8Array,Promise,Math});
const test=create(state,window,id=>nodes[id],cleanup);
await test();
assert.equal(permissions,0,'never request a second microphone while recognition is active');
state.recognition=null;state.micPhase='idle';
await test();
assert.equal(permissions,1);
assert.equal(count,20);
assert(nodes.gtMicTestResult.textContent.includes('マイク音量を検出'));
assert(tracks[0].stopped,'microphone track must be stopped');
assert(ctxClosed,'AudioContext must be closed');
assert.equal(nodes.gtMicTest.disabled,false);
assert(!code.includes('MediaRecorder'), 'diagnostic must not record audio files');
console.log('PASS microphone RMS diagnostic: no concurrent mic, sound detected, stream and AudioContext released');
