import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const grammar = require('../grammar-training-core.js');
const focused = (sentence, meta) => grammar.focusRanges(sentence, meta).map(({start,end})=>sentence.slice(start,end));

test('junior grammar: only the target words receive emphasis',()=>{
 assert.deepEqual(focused('I am a student.',{title:'be動詞・肯定文'}),['am']);
 assert.deepEqual(focused('She is studying English.',{title:'現在進行形'}),['is studying']);
 assert.ok(focused('She carries a small umbrella.',{title:'三人称単数現在'}).includes('carries'));
});
test('senior grammar: phrase patterns and contractions',()=>{
 assert.ok(focused('I have lived here for five years.',{title:'現在完了・継続'}).includes('have lived'));
 assert.ok(focused('The book which I bought yesterday is interesting.',{title:'関係代名詞'}).includes('which'));
 assert.ok(focused('You shouldn’t believe every rumor online.',{title:'should：助言・確信'}).includes('shouldn’t'));
 assert.ok(focused('We bought tickets at a discount.',{title:'at：点・場所・時刻・速度'}).includes('at'));
});
test('entrance exam: highlight meaningful S/V instead of an explicitly excluded adverb',()=>{
 assert.deepEqual(focused('The baby slept peacefully.',{
  title:'第1〜第5文型の識別',explanation:'The baby がS、slept がVです。peacefully は副詞です。'
 }),['The baby','slept']);
});
test('focus ranges preserve original sentence text and masking rules',()=>{
 const sentence='This house was built in 1975.';
 const spans=grammar.focusRanges(sentence,{title:'受動態の基本形'});
 for(let i=1;i<=5;i++){
  const parts=grammar.maskedParts(sentence,i);
  const positions=parts.reduce((sum,p)=>sum+(p.hidden?p.length:p.text.length),0);
  assert.equal(positions,sentence.length);
  assert.ok(spans.every(r=>r.start>=0&&r.end<=sentence.length&&r.start<r.end));
 }
 assert.equal(grammar.maskedParts(sentence,1).map(p=>p.text).join(''),sentence);
 assert.equal(grammar.hideWords(sentence,5).includes('_____'),true);
});
