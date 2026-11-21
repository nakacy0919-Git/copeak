const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),cat=JSON.parse(fs.readFileSync(path.join(root,'data/copeak-library.json'),'utf8'));
test('all 82 original Copeak library readings have usable narration',()=>{
 assert.equal(cat.items.length,82);
 for(const item of cat.items){
  assert.equal(item.audioReady,true,item.sourceId);
  assert.equal(item.audioPath,'./audio/library/'+item.sourceId+'.mp3');
  assert.ok(fs.statSync(path.join(root,'audio/library',item.sourceId+'.mp3')).size>30000,item.sourceId);
 }
});
test('original library keeps per-item enablement; does not flip global audio on without files',()=>{
 assert.equal(cat.audioEnabled,false);
 const m=JSON.parse(fs.readFileSync(path.join(root,'data/famous-people-assets.json'),'utf8'));
 assert.equal(m.entries.length,32);
 assert.ok(m.entries.every(x=>x.audioStatus==='registered'));
});
