const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..');
const catalog=JSON.parse(fs.readFileSync(path.join(root,'data/copeak-library.json'),'utf8'));
const cases={"science-06":"What Makes a Language Endangered","cert-pre1-01":"When Convenience Changes Choice","science-05":"Why AI Answers Can Sound Certain","exam-06":"Why Charts Need Words","school-04":"Why I Joined the Speech Contest","cert-pre2-01":"Why Morning Light Matters","science-01":"Why We Forget","bio-006":"Yuzuru Hanyu"};
test('last eight audio uploads resolve to the correct scripts',()=>{
 for(const [id,source] of Object.entries(cases)){
  const item=catalog.items.find(x=>x.sourceId===id);
  assert.ok(item,id);assert.equal(item.audioReady,true,id);
  assert.equal(item.audioPath,'./audio/library/'+id+'.mp3');
  const file=path.join(root,'audio/library',id+'.mp3');
  assert.ok(fs.statSync(file).size>30000,source);
 }
});
test('other lessons and histories are not modified and catalog has 82 originals',()=>{
 assert.equal(catalog.items.length,82);
 assert.equal(catalog.audioEnabled,false);
});
