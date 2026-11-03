import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'vocabulary-check.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'vocabulary-check.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'vocabulary-check.js'), 'utf8');

assert(html.includes('vocabulary-check.css?v=8.5.1'), 'Safari must load the new stylesheet');
assert(html.includes('vocabulary-check.js?v=8.5.0'), 'adaptive assessment script must remain unchanged');
assert(css.includes('v8.5.1 — iPad vocabulary check'));
assert(css.includes('@media (min-width:701px) and (max-width:1400px)'), 'tablet widths covered');
assert(css.includes('@media (min-width:701px) and (max-width:900px) and (orientation:portrait)'), 'portrait layout');
assert(css.includes('@media (min-width:901px) and (max-width:1400px) and (max-height:850px) and (orientation:landscape)'), 'landscape layout');
assert(css.includes('@media (min-width:701px) and (max-height:700px)'), 'iPad Split View / short viewport fallback');
assert(/body\.vc-is-quiz \.vc-question-card\s*\{[^}]*overflow-y:auto/s.test(css), 'long quiz text scrolls within card');
assert(/body\.vc-is-quiz \.vc-options\s*\{[^}]*grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/s.test(css), 'tablet options stay 2x2');
assert(/body\.vc-is-result \.vc-summary-panel\s*\{[^}]*overflow-y:auto/s.test(css), 'result never clips long content');
assert(/body\.vc-is-result #vcV8Guidance\s*\{[^}]*max-height:none;[^}]*overflow:visible/s.test(css), 'guidance remains readable');
assert(/body\.vc-is-result \.vc-review-card\s*\{[^}]*overscroll-behavior:contain/s.test(css), 'review card keeps overflow internal');
assert(css.includes('body.vc-is-quiz{height:100dvh;overflow:hidden}'), 'quiz viewport fixed');
assert(css.includes('body.vc-is-result{overflow:hidden}'), 'result viewport fixed');
assert(js.includes('nextTarget(session.answers,session.estimate)'), 'adaptive diagnosis untouched');
assert(js.includes("const COUNTS = Object.freeze({quick:25,deep:70})"), '25/70 questions preserved');
console.log('PASS v8.5.1: iPad portrait/landscape and Split View layout rules; quiz/results reading safety; unchanged assessment.');
