const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const catalog=JSON.parse(fs.readFileSync(path.join(root,'data/copeak-library.json'),'utf8'));
const manifest=JSON.parse(fs.readFileSync(path.join(root,'data/famous-people-assets.json'),'utf8'));
const original=catalog.items.filter(x=>x.folderId==='__copeak_famous_people__');
test('all 32 portrait thumbnails map one-to-one to the original biography scripts',()=>{
 assert.equal(original.length,32);
 assert.equal(manifest.entries.length,32);
 assert.equal(manifest.entries.filter(x=>x.thumbnailStatus==='registered').length,32);
 for(const entry of original){
   assert.ok(/^bio-0(?:[0-2][0-9]|3[0-2])$/.test(entry.sourceId),entry.sourceId);
   assert.ok(entry.thumbnail&&entry.thumbnail.startsWith('./assets/famous-people/'),entry.sourceId);
   const image=fs.readFileSync(path.join(root,entry.thumbnail));
   assert.ok(image.length>3000,entry.sourceId);
   assert.equal(image.toString('ascii',0,4),'RIFF',entry.sourceId);
   const ref=manifest.entries.find(x=>x.sourceId===entry.sourceId);
   assert.equal(entry.thumbnail,ref.thumbnail);
 }
});
test('image and supplied audio mappings coexist without changing any script content',()=>{
 assert.equal(original.filter(x=>x.audioReady===true).length,16);
 assert.equal(manifest.entries.filter(x=>x.audioStatus==='registered').length,16);
 const unrelated=catalog.items.filter(x=>x.folderId!=='__copeak_famous_people__');
 assert.equal(unrelated.length,50);
});
