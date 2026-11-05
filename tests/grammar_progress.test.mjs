import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(import.meta.url);
const progress=require('../grammar-progress.js');
const json=file=>JSON.parse(fs.readFileSync(path.join(root,file),'utf8'));

const exam=json('data/grammar/entrance/A01.json').questions[0];
const senior=json('data/grammar/senior/HS-09.json').topics[0].sentences[0];
const junior=json('data/grammar/junior/J1.json').units[0].sentences[0];
const records={
 [exam.id]:{mcAttempts:3,mcCorrect:1},
 [exam.id+'|answer']:{readingAttempts:5,cleared:5},
 [senior.id]:{readingAttempts:2,cleared:3},
 [junior.id]:{readingAttempts:1,cleared:5},
 'A01-01-99':{readingSkips:2},
 'HS-09-999-01':{readingSkips:2}
};
const examProgress=progress.overall(records,'entrance',1840);
assert.equal(examProgress.studied,1,'repeated answers counted once');
assert.equal(examProgress.completed,1,'exam correct-at-least-once count');
assert.equal(examProgress.rate,'0.1','small percentages remain visible');
assert.equal(progress.category(records,'entrance','A01',144).studied,1);
assert.equal(progress.unit(records,'entrance',[exam]).studied,1);
assert.equal(progress.unit(records,'entrance',[]).studied,0);
assert.equal(progress.overall(records,'senior',1830).studied,1);
assert.equal(progress.category(records,'senior','HS-09',100).studied,1);
assert.equal(progress.unit(records,'senior',[senior]).completed,0);
assert.equal(progress.overall(records,'junior',144).studied,1);
assert.equal(progress.unit(records,'junior',[junior]).completed,1);
assert.equal(progress.overall({},'entrance',1840).studied,0);
assert.equal(progress.overall({[senior.id]:{cleared:5}},'senior',1830).studied,0,'a skipped/invalid attempt cannot count');
assert.equal(progress.overall({[exam.id]:{readingSkips:1}},'entrance',1840).studied,0,'skip alone cannot count');
const html=fs.readFileSync(path.join(root,'grammar-training.html'),'utf8');
for(const mode of ['Junior','Senior','Entrance']){
 for(const suffix of ['','Rate','Bar'])assert(html.includes('id="gtOverall'+suffix+mode+'"'),'missing '+mode+' '+suffix);
}
assert(html.includes('grammar-progress.js'),'progress script must load before UI controller');
assert(html.includes('grammar-progress.css'),'progress styles must be linked');
console.log('PASS progress: unique study counts, mastery semantics, skipped exclusion, three modes, category and topic UI');
