const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..');
const library=JSON.parse(fs.readFileSync(path.join(root,'data/copeak-library.json'),'utf8'));
const manifest=JSON.parse(fs.readFileSync(path.join(root,'data/copeak-audio-manifest.json'),'utf8'));
const famous=JSON.parse(fs.readFileSync(path.join(root,'data/famous-people-assets.json'),'utf8'));
const bundle=fs.readFileSync(path.join(root,'app-bundle.js'),'utf8');
test('88 audio assets map to preserved lesson identifiers and have nonempty MP3 payloads',()=>{
 assert.equal(library.items.length,82);
 assert.ok(library.items.every(x=>x.audioReady===true));
 assert.equal(manifest.stage,'production');
 assert.equal(manifest.entries.length,88);
 assert.equal(new Set(manifest.entries.map(x=>x.assetPath)).size,88);
 for(const item of library.items){
  assert.equal(item.audioPath,'./audio/library/'+item.sourceId+'.mp3');
  assert.ok(fs.statSync(path.join(root,item.audioPath)).size>30000,item.sourceId);
 }
 for(const entry of manifest.entries)assert.ok(fs.statSync(path.join(root,entry.assetPath)).size>30000,entry.sourceId);
 assert.equal(manifest.entries.filter(x=>x.kind==='built_in_sample').length,5);
 assert.equal(manifest.entries.filter(x=>x.kind==='ncc_sample').length,1);
 for(const entry of manifest.entries.filter(x=>x.kind!=='copeak_original'))assert.ok(bundle.includes(entry.assetPath),entry.sourceId);
});
test('all 32 silhouette covers attach to the correct biographies without replacing text',()=>{
 const bios=library.items.filter(x=>x.folderId==='__copeak_famous_people__');
 assert.equal(bios.length,32);assert.equal(famous.entries.length,32);
 for(const item of bios){
  assert.ok(item.thumbnail&&item.thumbnail.startsWith('./assets/famous-people/'),item.sourceId);
  assert.ok(fs.statSync(path.join(root,item.thumbnail)).size>3000,item.sourceId);
  const match=famous.entries.find(x=>x.sourceId===item.sourceId);
  assert.ok(match&&match.thumbnail===item.thumbnail&&match.audioPath===item.audioPath);
 }
});
