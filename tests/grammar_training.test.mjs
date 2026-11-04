import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(import.meta.url);
const core=require('../grammar-training-core.js');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const json=name=>JSON.parse(read(name));

assert.equal(core.STAGES.length,5);
assert.deepEqual(core.STAGES.map(s=>s.threshold),[80,90,90,95,100]);
assert.equal(core.hideWords('I have a book.',1),'I have a book.');
assert.match(core.hideWords('I have a book.',3),/_/);
assert(!/[a-z]/i.test(core.hideWords('I have a book.',5)));
assert(core.stageCanAdvance(1,80));
assert(!core.stageCanAdvance(4,90));
assert(core.stageCanAdvance(5,100));

const entrance=json('data/grammar/entrance/manifest.json');
assert.equal(entrance.total_questions,1840);
const ids=new Set(),points=new Map();
let questions=0;
for(const category of entrance.categories){
  const data=json(category.url);
  assert.equal(data.questions.length,category.count,category.id+' count');
  questions+=data.questions.length;
  const byPoint=core.groupedQuestions(data.questions);
  for(const [pointId,items] of byPoint) {
    assert.equal(items.length,16,pointId+' should contain 16 questions');
    points.set(pointId,items.length);
    assert(entrance.point_titles[pointId],pointId+' missing title');
  }
  for(const raw of data.questions){
    const q=core.normalizeQuestion(raw);
    assert(q,'invalid question '+raw.id);
    assert(!ids.has(q.id),'duplicate '+q.id);ids.add(q.id);
    assert(q.sentence&&q.japanese&&q.explanation&&q.example&&q.exampleJa,'incomplete '+q.id);
    assert.equal(Object.keys(q.wrong).length,3,'wrong-answer explanations '+q.id);
  }
}
assert.equal(questions,1840);
assert.equal(ids.size,1840);
assert.equal(points.size,115);

const senior=json('data/grammar/senior/manifest.json');
assert.equal(senior.chapters.length,18);
let topics=0,seniorSentences=0;
const readingIds=new Set();
for(const category of senior.chapters){
 const ch=json(category.url);
 assert.equal(ch.topics.length,category.topics);
 topics+=ch.topics.length;
 let count=0;
 for(const t of ch.topics)for(const raw of t.sentences){
  const sentence=core.makeReading(raw);assert(sentence,'invalid HS sentence '+raw.id);
  assert(!readingIds.has(sentence.id),'duplicate HS sentence '+sentence.id);
  readingIds.add(sentence.id);count++;
 }
 assert.equal(count,category.sentences,category.id);
 seniorSentences+=count;
}
assert.equal(topics,366);
assert.equal(seniorSentences,1830);

const junior=json('data/grammar/junior/manifest.json');
assert.equal(junior.grades.length,3);
let juniorUnits=0,juniorSentences=0;
for(const grade of junior.grades){
 const group=json(grade.url);
 juniorUnits+=group.units.length;
 let count=0;
 for(const u of group.units)for(const raw of u.sentences){
  const sentence=core.makeReading(raw);assert(sentence,'invalid JHS sentence '+raw.id);
  assert(!readingIds.has(sentence.id),'duplicate JHS sentence '+sentence.id);
  readingIds.add(sentence.id);count++;
 }
 assert.equal(count,grade.sentences);
 juniorSentences+=count;
}
assert.equal(juniorUnits,18);
assert.equal(juniorSentences,144);

const html=read('grammar-training.html'),js=read('grammar-training.js'),home=read('copeak-home.js');
const domIds=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(new Set(domIds).size,domIds.length,'duplicate DOM IDs');
const used=[...new Set([...js.matchAll(/\$\('([^']+)'\)/g)].map(m=>m[1]))];
assert.deepEqual(used.filter(id=>!domIds.includes(id)),[],'unmatched DOM references');
assert(html.includes('vocabulary-check.html'),'keep Vocabulary Check');
assert(home.includes("case 'vocabulary':window.location.assign('grammar-training.html"),'new home route');
assert(read('vocabulary-check.html').includes('vocabulary-check.js'),'diagnostic remains accessible');
assert.equal(json('vercel.json').git.deploymentEnabled,false,'production auto deploy must remain off');

console.log('PASS grammar training: 1,840 entrance MCQs / 115 points, 1,830 HS sentences / 366 topics, 144 JHS sentences / 18 units, 5 reading stages, navigation and diagnosis preserved');
