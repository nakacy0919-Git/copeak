import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const visual=require('../grammar-senior-visual.js');
const core=require('../grammar-training-core.js');
const fromFile=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const get=(id,sentence,title,hint)=>visual.get(id,sentence,{title,hint,core});

test('all 1,830 senior reading sentences have a nonempty visual guide',()=>{
 let total=0,limited=0;
 for(let chapter=1;chapter<=18;chapter++){
  const id='HS-'+String(chapter).padStart(2,'0');
  const bank=JSON.parse(fromFile('data/grammar/senior/'+id+'.json'));
  for(const topic of bank.topics)for(const sentence of topic.sentences){
   total++;
   const d=get(sentence.id,sentence.english,topic.title,topic.pattern_hint);
   assert.ok(d,sentence.id+' missing diagram');
   assert.ok(d.segments.length>=1,sentence.id);
   assert.ok(d.note.trim().length>0,sentence.id);
   if(d.confidence==='limited')limited++;
   for(const seg of d.segments){
    assert.ok(sentence.english.includes(seg.text),sentence.id+' synthesized text '+seg.text);
    assert.ok(seg.label&&seg.kind,sentence.id);
    assert.doesNotMatch(seg.text,/\[[A-Za-z]+\]/,sentence.id+' unwanted in-sentence bracket');
   }
  }
 }
 assert.equal(total,1830);
 assert.ok(limited<300,'too many examples reduced to neutral focus');
});
test('simple grammar patterns use canonical S/V/O/C blocks',()=>{
 const d=get('HS-01-001-01','My younger sister loves animals.','主語とは何か','主語 + 述語');
 assert.deepEqual(d.segments.map(s=>s.text),['My younger sister','loves','animals']);
 assert.deepEqual(d.segments.map(s=>s.kind),['subject','focus','object']);
 const passive=get('HS-04-001-01','This song is loved by many children.','受動態の基本形','be + p.p.');
 assert.deepEqual(passive.segments.map(s=>s.text),['This song','is loved','by many children']);
 assert.deepEqual(passive.segments.map(s=>s.kind),['subject','focus','modifier']);
});
test('noun modifiers and clauses identify the exact head',()=>{
 const a=get('HS-01-003-01','The girl near the window plays the violin.','主語の範囲を見抜く','長い主語');
 assert.equal(a.relation?.sourceText,'near the window');
 assert.equal(a.relation?.targetText,'The girl');
 const b=get('HS-09-001-01','I have a friend who speaks three languages.','関係代名詞','関係詞節');
 assert.equal(b.relation?.sourceText,'who speaks three languages');
 assert.equal(b.relation?.targetText,'a friend');
});
test('conditions and compound sentence examples are not mislabeled as a single SVO',()=>{
 const d=get('HS-10-001-01','If I were rich, I would travel around the world.','仮定法過去','if + 過去');
 assert.equal(d.segments[0].kind,'clause');
 assert.match(d.relation?.label||'',/条件/);
 const dialogue=get('HS-12-001-01','What did you buy? I bought a book.','疑問文','疑問詞');
 assert.ok(dialogue.segments.every(s=>s.kind==='clause'));
});
test('accented loanwords are not clipped by Latin-only tokenization',()=>{
 const d=get('HS-15-S01-01','We found a quiet café near the station.','形容詞による前置修飾','形容詞');
 assert.ok(d.segments.some(s=>s.text.includes('café')));
});
test('guide is senior/junior only, hidden word labels never reveal answer',()=>{
 const js=fromFile('grammar-training.js'),html=fromFile('grammar-training.html'),css=fromFile('grammar-visual-flat.css');
 assert.match(js,/isJunior\?juniorVisual\.get/);
 assert.match(js,/seniorVisual\.get/);
 assert.match(js,/const reveal=state\.stage===1/);
 assert.match(js,/if\(reveal\)chip\.append/);
 assert.match(js,/const link=reveal\?/);
 assert.match(js,/const isJunior=state\.mode==='junior',isSenior=state\.mode==='senior'/);
 assert.match(html,/grammar-senior-visual\.js\?v=20261107-1/);
 assert.match(html,/grammar-visual-flat\.css\?v=20261107-1/);
 assert.match(css,/\.gj-chip::before/);
 assert.match(css,/content:none!important/);
 for(const name of ['gj-subject','gj-focus','gj-object','gj-complement','gj-modifier','gj-clause'])
  assert.ok(css.includes('.gj-chip.'+name),'missing pastel role '+name);
});
