import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const visuals=require('../grammar-junior-visual.js');
const links=require('../grammar-junior-relations.js');
const read=id=>JSON.parse(readFileSync(new URL('../data/grammar/junior/'+id+'.json',import.meta.url),'utf8'));
test('all 144 junior diagrams continue to match their original reading sentences',()=>{
 let count=0,relationCount=0;
 for(const grade of ['J1','J2','J3'])for(const unit of read(grade).units)for(const sentence of unit.sentences){
  const diagram=visuals.get(sentence.id,sentence.english);
  assert.ok(diagram,sentence.id);
  count++;
  const link=links.get(diagram);
  if(!link)continue;
  relationCount++;
  assert.ok(diagram.segments[link.from],sentence.id+' link from');
  assert.ok(diagram.segments[link.to],sentence.id+' link to');
  assert.notEqual(link.from,link.to);
  assert.equal(link.sourceText,diagram.segments[link.from].text);
  assert.ok(link.targetText.trim());
  assert.ok(link.label.trim());
 }
 assert.equal(count,144);
 assert.ok(relationCount>=80);
});
test('pastel grammar cells distinguish S V O C and clause roles',()=>{
 const d=visuals.get('J2-04-01','Reading books is fun.');
 assert.deepEqual(d.segments.map(x=>x.kind),['subject','focus','complement']);
 const d2=visuals.get('J3-02-02','The girl who lives next door is my friend.');
 assert.equal(d2.segments[1].kind,'clause');
 const d3=visuals.get('J1-02-01','I play tennis after school.');
 assert.equal(d3.segments[3].kind,'modifier');
});
test('postposed adjective clauses and participles point to the correct antecedent',()=>{
 const cases=[
  ['J3-02-02','The girl who lives next door is my friend.','who lives next door','The girl'],
  ['J3-03-03','The girl standing by the door is my cousin.','standing by the door','The girl'],
  ['J2-03-04','I have a book to read.','to read','a book'],
  ['J3-03-01','Look at the boy running in the park.','running in the park','the boy'],
  ['J2-06-05','Is this room cleaned every day?','every day','cleaned']
 ];
 for(const [id,sentence,src,target] of cases){
  const r=links.get(visuals.get(id,sentence));
  assert.equal(r.sourceText,src,id);
  assert.equal(r.targetText,target,id);
 }
});
test('pastel layout has mobile fallback and masked reading has no arrow answer leak',()=>{
 const css=readFileSync(new URL('../grammar-junior-visual.css',import.meta.url),'utf8');
 const main=readFileSync(new URL('../grammar-training.js',import.meta.url),'utf8');
 assert.match(css,/\.gt-junior-dialog \.gj-chip\.gj-subject/);
 assert.match(css,/\.gt-junior-dialog \.gj-chip\.gj-object/);
 assert.match(css,/\.gt-junior-dialog \.gj-chip\.gj-complement/);
 assert.match(css,/\.gt-junior-dialog \.gj-chip\.gj-modifier/);
 assert.match(css,/\.gt-junior-dialog \.gj-chip\.gj-phrase/);
 assert.match(css,/\.gt-junior-dialog \.gj-chip\.gj-clause/);
 assert.match(main,/const link=reveal\?\(isJunior\?juniorRelations\?\.get\(diagram\):diagram\.relation\):null/);
 assert.match(main,/arrow\.setAttribute\('viewBox','0 0 56 20'\)/);
 assert.match(css,/@media\(max-width:699px\)/);
});
