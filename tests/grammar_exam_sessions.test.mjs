import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const read=name=>readFileSync(new URL('../'+name,import.meta.url),'utf8');
const window={};
vm.runInNewContext(read('grammar-exam-sessions.js'),{window,module:{exports:{}}});
const helper=window.CopeakExamSessions;
assert(helper);

const pools=[
 {id:'A01',questions:Array.from({length:12},(_,i)=>({id:'A01-'+i,categoryId:'A01',stem:'A'+i}))},
 {id:'A02',questions:Array.from({length:9},(_,i)=>({id:'A02-'+i,categoryId:'A02',stem:'B'+i}))},
 {id:'B10',questions:Array.from({length:5},(_,i)=>({id:'B10-'+i,categoryId:'B10',stem:'C'+i}))}
];
assert.equal(helper.select(pools,9,()=>.21).length,9);
for(let times=0;times<50;times++){
 const questions=helper.select(pools,8);
 assert.equal(questions.length,8);
 assert.equal(new Set(questions.map(q=>q.id)).size,8,'must not repeat any ID');
 assert.equal(new Set(questions.map(q=>q.categoryId)).size,3,'at least one of each selected category');
}
assert.equal(helper.select(pools,100).length,26,'cap to actual available pool');
assert.equal(helper.select([pools[0]],7).length,7,'one category');
assert.equal(helper.select([],20).length,0,'no selected categories');
assert.equal(helper.clampCount(0,10),1,'count clamps to min');
assert.equal(helper.clampCount(30,10),10,'count caps to valid pool');
assert.equal(helper.clampCount(19.7,50),19,'integer count');
assert.equal(helper.accuracy(3,4),75);
assert.equal(helper.accuracy(0,0),0);
assert.equal(helper.accuracy(5,8),63);

const store={getItem(k){return this[k]||null;},setItem(k,v){this[k]=v;}};
const session={id:'s1',type:'random',categoryIds:['A01','B10'],total:8,answered:4,correct:3,startedAt:'2026-11-06T00:00:00Z',status:'in_progress'};
helper.saveHistory(store,session);
assert.equal(helper.safeHistory(store)[0].correct,3);
session.answered=8;session.correct=5;session.status='completed';
helper.saveHistory(store,session);
assert.equal(helper.safeHistory(store).length,1,'upsert same session, never duplicate attempts');
assert.equal(helper.describe(helper.safeHistory(store)[0]).rate,63);
helper.saveHistory(store,{id:'s2',type:'category',categoryIds:['A01'],answered:2,correct:1});
assert.equal(helper.safeHistory(store).length,2);
assert.equal(helper.safeHistory(store)[0].id,'s2','latest history first');
store[helper.KEY]='{invalid';
assert.equal(helper.safeHistory(store).length,0,'corrupt storage handled');
console.log('PASS exam session helper: distinct/random category coverage, counts, accuracy, persistent upsert and corruption');
