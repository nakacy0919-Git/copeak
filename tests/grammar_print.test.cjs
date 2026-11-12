const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const core=require('../grammar-print-core.js');
const root=path.resolve(__dirname,'..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'data/grammar/entrance/manifest.json')));
const pool=manifest.categories.flatMap(c=>JSON.parse(fs.readFileSync(path.join(root,c.url))).questions);
assert.equal(pool.length,4912);
const sample=core.sample(pool,50,'random');
assert.equal(sample.length,50);assert.equal(new Set(sample.map(q=>q.id)).size,50);
assert.throws(()=>core.sample(pool,0,'random'));assert.throws(()=>core.sample(pool,50.5,'random'));assert.throws(()=>core.sample(pool,4913,'random'));
assert.deepEqual(core.sample(pool,5,'source').map(q=>q.id),['A01-01-01','A01-01-02','A01-01-03','A01-01-04','A01-01-05']);
const fixture=core.sample(pool,2,'source');
for(const paper of ['A4','B4'])for(const orientation of ['portrait','landscape'])for(const columns of [1,2,3])for(const content of ['questions','answers','both']){
 const c={paper,orientation,columns,content,fontSize:10,title:'Test < & >',setId:'TEST01',wrong:true};
 const html=core.html(fixture,c),bytes=core.docx(fixture,c);
 assert(html.includes('Test &lt; &amp; &gt;'));assert(html.includes(`column-count:${columns}`));
 assert.equal((html.match(/<article>/g)||[]).length,content==='both'?4:2);
 if(content==='questions')assert(!html.includes('1. 正解'));
 if(content==='answers')assert(!html.includes('解答（'));
 assert.equal(Buffer.from(bytes).readUInt32LE(0),0x04034b50);
 const xml=Buffer.from(bytes).toString('utf8');assert(xml.includes(`<w:cols w:num="${columns}"`));
 if(paper==='B4')assert(xml.includes(orientation==='portrait'?'w:w="14570" w:h="20636"':'w:w="20636" w:h="14570"'));
}
assert.throws(()=>core.html(fixture,{paper:'A3'}));
const c={paper:'B4',orientation:'portrait',columns:3,content:'both',fontSize:10,title:'検証用 < & >',setId:'TEST01',wrong:true};
fs.writeFileSync('/tmp/copeak-print-test.docx',core.docx(sample,c));
console.log('Worksheet tests passed: all 36 paper/orientation/column combinations, all output modes, sampling and answer isolation.');
