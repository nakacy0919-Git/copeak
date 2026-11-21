const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..');
const storage=fs.readFileSync(path.join(root,'storage.js'),'utf8');
const names=[{"path":"taylor.mp3","label":"(NCC課題) Taylor Swift NYU Speech 2022"},{"path":"audio/conversation.mp3","label":"(sample) Conversation New Job"},{"path":"audio/sdgs.mp3","label":"(sample) Introduction to SDGs"},{"path":"audio/malala.mp3","label":"(sample) Malala Yousafzai - UN Speech"},{"path":"audio/jobs.mp3","label":"(sample) Steve Jobs - Stanford Speech"},{"path":"audio/northwind.mp3","label":"(sample) The North Wind and the Sun"}];
test('six samples have audio files in the locations used by their existing preset definitions',()=>{
 for(const x of names){
  const disk=path.join(root,x.path);
  assert.ok(fs.statSync(disk).size>30000,x.label);
  assert.ok(storage.includes(x.path),x.path);
 }
});
test('existing sample learning records are preserved while missing narration URLs are restored',()=>{
 assert.match(storage,/sampleAudioRepairs = existingLessons/);
 assert.match(storage,/!l\.audioBlob && !l\.audioUrl/);
 assert.match(storage,/sampleAudioRepairs\.forEach\(l=>store\.put\(l\)\)/);
});
