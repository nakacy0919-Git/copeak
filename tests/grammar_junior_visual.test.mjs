import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {get,count}=require('../grammar-junior-visual.js');
const read=id=>JSON.parse(readFileSync(new URL('../data/grammar/junior/'+id+'.json',import.meta.url),'utf8'));

test('all 144 junior sentences have validated, sentence-specific diagrams',()=>{
 let total=0,units=0;
 for(const grade of ['J1','J2','J3']){
  const bank=read(grade);
  units+=bank.units.length;
  for(const unit of bank.units){
   for(const sentence of unit.sentences){
    total++;
    const diagram=get(sentence.id,sentence.english);
    assert.ok(diagram,grade+': diagram absent for '+sentence.id);
    assert.equal(diagram.id,sentence.id);
    assert.ok(diagram.segments.length>=2,sentence.id);
    assert.ok(diagram.segments.every(s=>s.text.trim()&&s.label.trim()));
    assert.ok(diagram.note.trim(),sentence.id+' missing teaching note');
   }
  }
 }
 assert.equal(count,144);assert.equal(total,144);assert.equal(units,18);
});

test('clauses and modifiers indicate the relationship, not only parts of speech',()=>{
 const clauses=[
  ['J2-05-01','I stayed home because it was raining.','理由節'],
  ['J2-05-04','I think that this plan will work.','名詞節'],
  ['J3-02-02','The girl who lives next door is my friend.','関係詞節'],
  ['J3-03-03','The girl standing by the door is my cousin.','分詞句'],
  ['J3-04-01','Do you know where she lives?','間接疑問']
 ];
 for(const [id,sentence,label] of clauses){
  const diagram=get(id,sentence);
  assert.ok(diagram.segments.some(s=>s.label.includes(label)),id+' clause missing');
  assert.match(diagram.note,/→|主節|まとまり|修飾|内容|役割|関係/);
 }
});

test('missing or altered source does not render a misleading visual',()=>{
 assert.equal(get('J1-01-01','He is a student.'),null);
 assert.equal(get('J1-99-99','I am a student.'),null);
 assert.equal(get('HS-01-001-01','I am a student.'),null);
});
test('junior diagrams do not leak full sentence words into masked level display',()=>{
 const js=readFileSync(new URL('../grammar-training.js',import.meta.url),'utf8');
 assert.match(js,/state\.guideExpanded=state\.stage===1/);
 assert.match(js,/if\(!expanded\)\{details\.hidden=true;root\.append\(details\);return;\}/);
 assert.match(js,/if\(state\.mode==='junior'\)openJuniorReadingMission\(\)/);
 const css=readFileSync(new URL('../grammar-junior-visual.css',import.meta.url),'utf8');
 assert.match(css,/\.gt-junior-dialog \.gt-reading-modal-content\{\s*overflow:hidden/);
 assert.match(css,/@media\(max-width:699px\), \(max-height:550px\)/);
});
