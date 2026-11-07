import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const visual=require('../grammar-senior-visual.js');
const core=require('../grammar-training-core.js');
const load=relative=>JSON.parse(readFileSync(new URL('../'+relative,import.meta.url),'utf8'));
const guide=(id,english,title,hint='')=>visual.get(id,english,{title,hint,core});
const texts=d=>d.segments.map(x=>x.text);
const kinds=d=>d.segments.map(x=>x.kind);
const cases=[
 ['HS-01-024-01','My parents let me join the club.','使役構文：let',['My parents','let','me','join the club'],['subject','focus','object','complement']],
 ['HS-01-020-01','We call our dog Lucky.','第5文型：目的語説明型',['We','call','our dog','Lucky'],['subject','focus','object','complement']],
 ['HS-01-017-01','My mother gave me a warm jacket.','第4文型：授与型',['My mother','gave','me','a warm jacket'],['subject','focus','object','object']],
 ['HS-01-019-02','I made a sandwich for my brother.','to・forを使った授与',['I','made','a sandwich','for my brother'],['subject','focus','object','modifier']],
 ['HS-07-136-02','She heard her name called over the speaker.','目的語説明型の分詞',['She','heard','her name','called over the speaker'],['subject','focus','object','complement']],
 ['HS-01-023-03','She had her hair cut yesterday.','使役構文：have',['She','had','her hair','cut','yesterday'],['subject','focus','object','complement','modifier']],
 ['HS-01-026-01','I want you to be honest.','want・allow・expect',['I','want','you','to be honest'],['subject','focus','object','complement']],
 ['HS-01-015-02','The flowers smell sweet.','第2文型で使う一般動詞',['The flowers','smell','sweet'],['subject','focus','complement']],
 ['HS-15-S02-01','The baby is still asleep.','説明語句として用いる形容詞',['The baby','is','still asleep'],['subject','focus','complement']],
 ['HS-05-108-01','My dream is to become a doctor.','be動詞の説明語句になるto不定詞',['My dream','is','to become a doctor'],['subject','focus','complement']],
 ['HS-06-EX-A-01','My favorite hobby is taking pictures of birds.','be動詞の説明語句になる動名詞',['My favorite hobby','is','taking pictures of birds'],['subject','focus','complement']],
 ['HS-07-140-01','Feeling nervous, I checked my notes again.','分詞構文の配置',['Feeling nervous','I checked my notes again'],['phrase','clause']],
 ['HS-08-145-01','My bag is as heavy as yours.','as ... as の基本',['My bag is','as heavy as yours'],['basic','phrase']],
 ['HS-09-169-01','The book I bought yesterday is interesting.','関係代名詞の省略（目的格）',['The book','I bought yesterday','is interesting'],['basic','clause','basic']],
 ['HS-10-178-01','If I had more time, I would read more books.','仮定法過去',['If I had more time','I would read more books'],['clause','clause']],
 ['HS-18-309-02','I can help you if you need it.','if：条件を表す節',['I can help you','if you need it'],['basic','clause']],
 ['HS-02-058-03','We will have lived here for ten years next spring.','未来完了形',['We','will have lived','here for ten years next spring'],['subject','focus','modifier']],
 ['HS-01-016-03','He opened the door quietly.','第3文型：他動型',['He','opened','the door','quietly'],['subject','focus','object','modifier']],
 ['HS-01-019-05','He explained the rules to the new students.','to・forを使った授与',['He','explained','the rules','to the new students'],['subject','focus','object','modifier']],
 ['HS-05-112-03','We made a promise to help each other.','名詞を修飾：名詞の内容を説明',['We made a promise','to help each other'],['basic','phrase']],
 ['HS-05-112-04','He has the ability to solve difficult problems.','名詞を修飾：名詞の内容を説明',['He has the ability','to solve difficult problems'],['basic','phrase']],
 ['HS-01-031-01','There is a small park near my house.','there文の基本',['There','is','a small park','near my house'],['basic','focus','subject','modifier']],
 ['HS-01-020-03','Please keep your room clean.','第5文型：目的語説明型',['Please','keep','your room','clean'],['modifier','focus','object','complement']],
 ['HS-01-004-05','A short walk will make you feel better.','無生物主語',['A short walk','will make','you','feel better'],['subject','focus','object','complement']],
 ['HS-06-001-01','Not getting enough sleep affects your concentration.','動名詞の否定',['Not getting enough sleep','affects your concentration'],['phrase','basic']]
];
test('representative structures from all major error classes remain pedagogically correct',()=>{
 for(const [id,english,title,expected,roles] of cases){
  const d=guide(id,english,title);
  assert.ok(d,'missing diagram '+id);
  assert.deepEqual(texts(d),expected,'wrong segmentation for '+id);
  assert.deepEqual(kinds(d),roles,'wrong grammatical roles for '+id);
 }
});
test('every senior example has an ordered, non-overlapping guide with no invented text',()=>{
 let total=0,reviewFlags=0;
 for(let ch=1;ch<=18;ch++){
  const bank=load('data/grammar/senior/HS-'+String(ch).padStart(2,'0')+'.json');
  for(const t of bank.topics)for(const sentence of t.sentences){
   total++;
   const d=guide(sentence.id,sentence.english,t.title,t.pattern_hint);
   assert.ok(d&&d.segments.length>0,'missing guide '+sentence.id);
   assert.ok(d.note,'missing note '+sentence.id);
   if(d.confidence==='limited')reviewFlags++;
   let cursor=0;
   for(const part of d.segments){
    assert.ok(part.text&&part.kind&&part.label,sentence.id);
    const index=sentence.english.indexOf(part.text,cursor);
    assert.ok(index>=0,'incorrect/unordered text for '+sentence.id+': '+part.text);
    cursor=index+part.text.length;
    assert.ok(!(/^(?:Please|Never|Don't|There|Let's)$/i.test(part.text)&&part.kind==='subject'),
      'false grammatical subject '+sentence.id);
   }
  }
 }
 assert.equal(total,1830);
 assert.ok(reviewFlags<400,'too many ambiguous diagrams '+reviewFlags);
});
test('speech, stage masking and examination bank have unchanged behavior',()=>{
 const js=readFileSync(new URL('../grammar-training.js',import.meta.url),'utf8');
 const html=readFileSync(new URL('../grammar-training.html',import.meta.url),'utf8');
 assert.match(js,/core\.maskedParts\(q\.sentence,state\.stage\)/);
 assert.match(js,/scoreEngine\(\)\.score\(q\.sentence,spoken\)/);
 assert.match(js,/state\.guideExpanded=state\.stage===1/);
 assert.match(html,/grammar-senior-structure-rules\.js\?v=20261107-1/);
 assert.match(html,/grammar-senior-visual\.js\?v=20261107-2/);
 assert.deepEqual(core.STAGES.map(x=>x.threshold),[80,90,90,95,100]);
 const manifest=load('data/grammar/entrance/manifest.json');
 assert.equal(manifest.total_questions,4912);
 const deployment=load('vercel.json');
 assert.equal(deployment.git.deploymentEnabled,false);
});
