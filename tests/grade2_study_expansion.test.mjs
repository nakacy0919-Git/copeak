import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const html = readFileSync(new URL('../new-horizon-2.html', import.meta.url), 'utf8');
const expansion = readFileSync(new URL('../study-grade2-expansion.js', import.meta.url), 'utf8');
const extract = name => {
  const match = html.match(new RegExp('^const ' + name + ' = (.+);$', 'm'));
  assert.ok(match, name + ' must exist in Grade 2 HTML');
  return JSON.parse(match[1]);
};
const catalog = extract('SECTION_CATALOG');
const practice = extract('SECTION_PRACTICE');
const warnings = [];
const sandbox = vm.createContext({
  SECTION_CATALOG: catalog,
  SECTION_PRACTICE: practice,
  console: { warn: (...args) => warnings.push(args.join(' ')) }
});
vm.runInContext(expansion, sandbox, { timeout: 10000, filename: 'study-grade2-expansion.js' });

const categories = ['vocab', 'listening', 'meaning', 'grammar', 'speaking', 'spelling', 'ordering', 'reading'];
const stats = { sections: 0, questions: 0, modeCounts: Object.fromEntries(categories.map(x => [x, 0])) };
const issues = [];
for (const [unit, sections] of Object.entries(catalog)) {
  for (const sec of sections) {
    stats.sections++;
    const pool = practice[unit]?.[sec.id];
    if (!pool) { issues.push(sec.id + ': missing practice'); continue; }
    for (const cat of categories) {
      const list = pool[cat] || [];
      stats.questions += list.length;
      stats.modeCounts[cat] += list.length;
      if (list.length < 10) issues.push(sec.id + ' ' + cat + ': only ' + list.length);
      const ids = list.map(x => x.id);
      if (ids.length !== new Set(ids).size) issues.push(sec.id + ' ' + cat + ': duplicate IDs');
      if (cat === 'speaking' || cat === 'listening') {
        for (const x of list) if (!(x.en || x.tts)) issues.push(x.id + ': missing speech text');
      }
      if (cat === 'spelling') {
        for (const x of list) if (!x.word || !x.jp) issues.push(x.id + ': missing spelling keyword');
      }
      if (cat === 'ordering') {
        for (const x of list) if (!Array.isArray(x.answer) || x.answer.length < 3) issues.push(x.id + ': malformed word-order item');
      }
      if (['listening', 'meaning', 'grammar', 'reading'].includes(cat)) {
        for (const x of list) {
          if (!Array.isArray(x.choices) || x.choices.length < 3 || x.choices.length > 5) {
            issues.push(x.id + ': invalid choices length'); continue;
          }
          if (new Set(x.choices).size !== x.choices.length) issues.push(x.id + ': duplicate options');
          if (!Number.isInteger(x.correct) || x.correct < 0 || x.correct >= x.choices.length) {
            issues.push(x.id + ': invalid correct index');
          }
        }
      }
    }
  }
}
assert.equal(stats.sections, 35, 'expected the 35 Grade 2 sections');
assert.match(html, /study-grade2-expansion\.js/, 'Grade 2 HTML must load expansion script');
assert.match(html, /function spellingChoices\(it\)/, 'spelling should offer near-miss choices');
assert.doesNotMatch(html, /function recognizeHandwriting\(/, 'Grade 2 spelling should not depend on handwriting OCR');
if (warnings.length) issues.push(...warnings);
assert.deepEqual(issues, [], 'Grade 2 practice QA failed:\n' + issues.join('\n'));
console.log(JSON.stringify(stats, null, 2));
