const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const catalog=JSON.parse(fs.readFileSync(path.join(root,'data/copeak-library.json'),'utf8'));
const manifest=JSON.parse(fs.readFileSync(path.join(root,'data/copeak-audio-manifest.json'),'utf8'));
const biographies=JSON.parse(fs.readFileSync(path.join(root,'data/famous-people-assets.json'),'utf8'));
const loader=fs.readFileSync(path.join(root,'copeak-library.js'),'utf8');
const bundle=fs.readFileSync(path.join(root,'app-bundle.js'),'utf8');

test('40 supplied audio files have unique paths and nonempty MP3 assets',()=>{
 assert.equal(manifest.entries.length,40);
 assert.equal(new Set(manifest.entries.map(x=>x.sourceId)).size,40);
 assert.equal(new Set(manifest.entries.map(x=>x.assetPath)).size,40);
 for(const e of manifest.entries){
   const file=path.join(root,e.assetPath);
   const bytes=fs.readFileSync(file);
   assert.ok(bytes.length>10000,e.sourceId);
   assert.equal(bytes.toString('ascii',0,3),'ID3',e.sourceId);
 }
});
test('each of 34 Copeak original lessons has precisely one matching enabled audio',()=>{
 const all=new Map(catalog.items.map(x=>[x.sourceId,x]));
 const original=manifest.entries.filter(x=>x.kind==='copeak_original');
 assert.equal(original.length,34);
 for(const e of original){
   const item=all.get(e.sourceId);
   assert.ok(item,e.sourceId);
   assert.equal(item.audioPath,e.assetPath);
   assert.equal(item.audioReady,true);
 }
 assert.equal(catalog.audioEnabled,false,'Unprovided tracks stay disabled');
 assert.match(loader,/item\.audioReady\s*===\s*true/);
});
test('sample and NCC audio can replace original built-in narration without deleting history',()=>{
 const samples=manifest.entries.filter(x=>x.kind!=='copeak_original');
 assert.equal(samples.length,6);
 for(const e of samples)assert.ok(bundle.includes(e.assetPath));
 assert.match(bundle,/audioRefreshes\.forEach\(lesson => store\.put\(lesson\)\)/);
 assert.match(bundle,/\.\.\.lesson,\s*audioBlob:\s*null,\s*audioUrl:/);
 assert.match(bundle,/lesson\.eng === preset\.eng/);
});
test('biography thumbnail mapping continues to coexist with narration',()=>{
 const bios=biographies.entries.filter(x=>x.audioStatus==='registered');
 assert.equal(bios.length,manifest.entries.filter(x=>x.sourceId.startsWith('bio-')).length);
 assert.ok(bios.some(x=>x.sourceId==='bio-017'&&x.audioPath.endsWith('bio-017.mp3')));
 assert.ok(biographies.entries.some(x=>x.thumbnailStatus==='registered'));
});
