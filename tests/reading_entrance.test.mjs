import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const load=path=>JSON.parse(readFileSync(new URL('../'+path,import.meta.url),'utf8'));
const manifest=load('data/reading/entrance/manifest.json');
const sets=manifest.sets.map(s=>load(s.file));
test('15 categories, 30 authentic-set targets each; target is not the published count',()=>{
 assert.equal(manifest.categories.length,15);
 assert.equal(new Set(manifest.categories.map(x=>x.id)).size,15);
 assert.ok(manifest.categories.every(x=>x.target===30));
 assert.equal(manifest.categories.reduce((n,x)=>n+x.target,0),450);
 assert.ok(manifest.sets.length<450,'do not silently pad with fake lessons');
});
for(const s of sets){
 test(s.id+' has fact sources, correct word counts, full bilingual sentences and grounded exercises',()=>{
  assert.ok(manifest.categories.some(c=>c.id===s.category_id));
  assert.equal(s.original,true);
  assert.ok(s.source_links.length>0);
  assert.ok(s.source_links.every(x=>/^https:\/\//.test(x.url)));
  assert.ok(['reviewed','published'].includes(s.status));
  const text=s.paragraphs.flatMap(p=>p.sentences).map(x=>x.en).join(' ');
  const actual=text.trim().split(/\s+/).length;
  const level=manifest.levels.find(l=>l.id===s.level_id);
  assert.ok(level,'level must exist');
  assert.equal(actual,s.word_count);
  assert.ok(actual>=level.words[0]&&actual<=level.words[1],actual+' outside level '+s.level_id);
  assert.ok((s.level_ids||[s.level_id]).every(id=>{const band=manifest.levels.find(l=>l.id===id)?.words;return band&&actual>=band[0]&&actual<=band[1];}));
  assert.ok(s.paragraphs.every(p=>p.id&&p.sentences.every(t=>t.en&&t.ja)));
  assert.ok(s.questions.length>=4);
  assert.ok(s.questions.every(q=>q.options.length===4&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4&&q.paragraph_ids.length>0&&q.paragraph_ids.every(id=>s.paragraphs.some(p=>p.id===id))&&q.explanation_ja));
  assert.ok(s.vocabulary.length>=5&&s.vocabulary.every(v=>v.term&&v.ja&&v.synonym&&v.definition));
  assert.ok(s.paraphrases.every(p=>text.includes(p.source)&&p.rewrite&&p.explanation_ja),'paraphrases must quote a real phrase from passage');
  assert.ok(s.discourse.every(d=>s.paragraphs.find(p=>p.id===d.paragraph_id)?.sentences.some(t=>t.en.includes(d.expression))),'discourse expression must occur in tagged paragraph');
  assert.ok(s.cloze.every(q=>{const p=s.paragraphs.find(p=>p.id===q.paragraph_id);const sentence=p?.sentences[q.sentence_index]?.en;return sentence?.includes(q.answer)&&q.options.length===4&&q.options.includes(q.answer)&&q.explanation_ja;}),'cloze answer must exist at indicated sentence index');
  assert.equal(new Set(s.questions.map(q=>q.id)).size,s.questions.length);
 });
}
