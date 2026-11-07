import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = name => readFileSync(new URL('../'+name,import.meta.url),'utf8');

test('junior reading studio uses high-contrast white learning cards',()=>{
 const css=read('grammar-junior-visual.css');
 assert.match(css,/editorial-white cards/);
 assert.match(css,/\.gt-reading-dialog\.gt-junior-dialog\s*\{\s*background:#fff/);
 assert.match(css,/\.gt-junior-dialog \.gj-flow\s*\{\s*display:grid/);
 assert.match(css,/grid-template-columns:repeat\(var\(--gj-cols,3\),minmax\(0,1fr\)\)/);
 assert.match(css,/\.gt-junior-dialog \.gj-arrow \{display:none\}/);
 assert.match(css,/\.gt-junior-dialog \.gj-note\{[\s\S]*?border-left:3px solid #d47c45/);
 assert.match(css,/\.gt-junior-dialog \.gj-chip\.gj-phrase\{\s*background:#fff2e9/);
 assert.match(css,/\.gt-junior-dialog \.gj-chip\.gj-clause\s*\{\s*background:#eef6fd/);
});
test('the compact UI respects iPad viewports and avoids cut-off on narrow phones',()=>{
 const css=read('grammar-junior-visual.css');
 assert.match(css,/max-height:calc\(100dvh - 18px\)/);
 assert.match(css,/@media\(min-width:700px\) and \(max-height:760px\)/);
 assert.match(css,/@media\(max-width:699px\)/);
 assert.match(css,/overflow-y:auto/);
});
test('the visual is limited to junior mode, preserves original content and busts browser caches',()=>{
 const js=read('grammar-training.js'),html=read('grammar-training.html');
 assert.match(js,/flow\.style\.setProperty\('--gj-cols',String\(Math\.min\(5,diagram\.segments\.length\)\)\)/);
 assert.doesNotMatch(js,/flow\.append\(node\('span','gj-arrow'/);
 assert.match(js,/state\.guideExpanded=false/);
 assert.match(js,/if\(!expanded\)\{details\.hidden=true;root\.append\(details\);return;\}/);
 assert.match(js,/root\.hidden=!\(isJunior&&juniorVisual\|\|isSenior&&seniorVisual\)/);
 assert.match(html,/grammar-junior-visual\.css\?v=20261107-3/);
 assert.match(html,/grammar-training\.js\?v=20261107-7/);
});
