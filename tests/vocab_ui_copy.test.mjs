import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const html=read('vocabulary-check.html');
const js=read('vocabulary-check.js');
const css=read('vocabulary-check.css');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
assert.equal(new Set(ids).size,ids.length,'duplicate IDs');
const referenced=[...new Set([...js.matchAll(/\$\('([^']+)'\)/g)].map(x=>x[1]))];
assert.deepEqual(referenced.filter(id=>!ids.includes(id)&&id!=='vcLast'),[],'missing DOM IDs');
assert(html.indexOf('id="vcReviewGate"')<html.indexOf('id="vcQuick"'),'review gate precedes diagnosis');
assert(css.includes('body.vc-review-required #vcIntro .vc-start-actions{display:none!important}'),
 'Quick and Deep should not compete with a due review gate');
assert(html.includes('id="vcGatePractice"')&&!html.includes('id="vcInsightStartReview"'),
 'one primary review CTA only');
assert(!js.includes("vcInsightStartReview"),'no stale event bindings to removed CTA');
assert(!html.includes('この復習履歴は端末内にのみ保存されます。'),'no redundant privacy note in gate');
assert(html.includes('data-t="tabSummary">レベル・分析</button>'));
assert(html.includes('data-t="review">例文</strong>'));
assert(!html.includes('MY LEARNING JOURNEY'),'no repetitive overline above progress heading');
assert(!html.includes('CHUNK VOCABULARY <span>'),'no repeated decorative text under question');
assert(html.includes('誤答／出題'),'weakness chart explains its denominator');
assert(js.includes("state.total>shown?'（今回'+shown+'文）'"),
 'the user should see the current batch limit when due count exceeds 20');
assert(js.includes("loading.hidden=Boolean(bank.length)"),
 'loading message should disappear rather than repeat ready guidance');
assert(html.includes('vocabulary-check.css?v=8.7.4'));
assert(html.includes('vocabulary-check.js?v=8.7.4'));
console.log('PASS vocabulary copy/UI audit: one CTA per state, concise labels, accurate batch counts and valid selectors');
