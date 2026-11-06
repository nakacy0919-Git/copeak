import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../app-bundle.js', import.meta.url), 'utf8');
const start = source.indexOf('function toggleFsOriginalAudio() {');
const end = source.indexOf('\n\n// ==========================================', start);
assert.ok(start >= 0 && end > start, 'full-screen original MP3 function exists');
const code = source.slice(start,end);

function setupAudio(play) {
  const messages = [];
  const mockClasses = () => ({add(){},remove(){}});
  const button = {innerHTML:'🎧 ▶',classList:mockClasses(),attributes:{},
    setAttribute(name,value){this.attributes[name]=value;}};
  const aiButton={innerHTML:'🤖 AI ▶',classList:mockClasses()};
  const audio={src:'blob:mock',paused:true,play(){return play(this);},
    pause(){this.paused=true;},onended:null,onerror:null};
  const elements={audioPlayer:audio,fsOriginalAudioBtn:button,fsAiVoiceBtn:aiButton};
  const sandbox=vm.createContext({
    document:{getElementById:id=>elements[id]},
    window:{speechSynthesis:{speaking:false,cancel(){}}},
    console:{warn(){}},
    showMsg(message){messages.push(message);}
  });
  vm.runInContext('let isFsAudioPlaying = false; let fsOriginalAudioPlaybackSeq=0;\n'
    +code+'\nglobalThis.toggle=toggleFsOriginalAudio; globalThis.playing=()=>isFsAudioPlaying;',sandbox);
  return {audio,button,messages,toggle:sandbox.toggle,playing:sandbox.playing};
}

test('accepted iPad playback shows Stop and the ending event resets to Play',async()=>{
  const {audio,button,toggle,playing}=setupAudio(element=>{
    element.paused=false;return Promise.resolve();
  });
  toggle(); await Promise.resolve();
  assert.equal(playing(),true);
  assert.equal(button.innerHTML,'🎧 ⏹');
  assert.equal(button.attributes['aria-pressed'],'true');
  audio.onended();
  assert.equal(playing(),false);
  assert.equal(button.innerHTML,'🎧 ▶');
});

test('rejected playback never leaves a false playing state',async()=>{
  const {button,messages,toggle,playing}=setupAudio(()=>Promise.reject(new Error('NotAllowedError')));
  toggle();await new Promise(resolve=>setImmediate(resolve));
  assert.equal(playing(),false);
  assert.equal(button.innerHTML,'🎧 再試行');
  assert.match(messages[0],/モデル音声/);
});

test('synchronous Safari playback errors show retry',()=>{
  const {button,toggle,playing}=setupAudio(()=>{throw new Error('MediaNotSupportedError');});
  toggle();
  assert.equal(playing(),false);
  assert.equal(button.innerHTML,'🎧 再試行');
});

test('stopping original MP3 pauses the element and resets Play',async()=>{
  const {audio,button,toggle,playing}=setupAudio(element=>{
    element.paused=false;return Promise.resolve();
  });
  toggle();await Promise.resolve();toggle();
  assert.equal(audio.paused,true);
  assert.equal(playing(),false);
  assert.equal(button.innerHTML,'🎧 ▶');
});
