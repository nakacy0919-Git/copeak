const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const library=JSON.parse(fs.readFileSync(path.join(root,'data/copeak-library.json'),'utf8'));
const manifest=JSON.parse(fs.readFileSync(path.join(root,'data/famous-people-assets.json'),'utf8'));
const loader=fs.readFileSync(path.join(root,'copeak-library.js'),'utf8');
const expected={
  "bio-001": "./assets/famous-people/shohei-ohtani.webp",
  "bio-002": "./assets/famous-people/naomi-osaka.webp",
  "bio-003": "./assets/famous-people/taylor-swift.webp",
  "bio-004": "./assets/famous-people/lionel-messi.webp",
  "bio-005": "./assets/famous-people/jackie-chan.webp",
  "bio-006": "./assets/famous-people/yuzuru-hanyu.webp",
  "bio-007": "./assets/famous-people/simone-biles.webp",
  "bio-008": "./assets/famous-people/emma-watson.webp",
  "bio-009": "./assets/famous-people/steve-jobs.webp",
  "bio-010": "./assets/famous-people/malala-yousafzai.webp"
};
test('all ten thumbnails map to exact original script IDs',()=>{
 const records=Object.fromEntries(library.items.map(x=>[x.sourceId,x]));
 for(const [id,thumbnail] of Object.entries(expected)){
   assert.equal(records[id].thumbnail,thumbnail,id);
   assert.equal(records[id].folderId,'__copeak_famous_people__');
   assert.ok(fs.statSync(path.join(root,thumbnail)).size>3000);
 }
});
test('remaining biography thumbnails await upload; existing scripts and learning audio remain unchanged',()=>{
 assert.equal(manifest.totalScripts,32);
 assert.equal(manifest.entries.filter(x=>x.thumbnailStatus==='registered').length,10);
 assert.equal(manifest.entries.filter(x=>x.audioStatus==='awaiting_upload').length,32);
 assert.ok(!library.audioEnabled);
 for(const item of manifest.entries)assert.equal(item.audioPath,null);
 assert.equal(library.items.filter(x=>x.folderId==='__copeak_famous_people__').length,32);
});
test('bundled thumbnail is synced into existing IndexedDB record without discarding history or custom image',()=>{
 assert.match(loader,/thumbnail:\s*item\.thumbnail\s*\|\|\s*existing\?\.thumbnail/);
 assert.match(loader,/history:\s*existing\?\.history/);
 assert.match(loader,/memoImage:\s*existing\?\.memoImage/);
});
