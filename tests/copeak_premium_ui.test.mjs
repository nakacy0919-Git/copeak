import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const css=read('copeak-premium.css');
const pages=['index.html','vocabulary-check.html','sound-quest.html'];
const v=read('vocabulary-check.html');
const j=read('vocabulary-check.js');

for(const page of pages){
 const html=read(page);
 const count=[...html.matchAll(/href="copeak-premium\.css\?v=20261103"/g)].length;
 assert.equal(count,1,page+' must import the premium design exactly once');
}
assert(read('sound-quest.html').includes('z-0 sq-premium'),'Sound Quest style is isolated');
assert(css.includes('#copeakHomeHub'),'home styles');
assert(css.includes('.cp-page .cp-panel'),'reading/creator surfaces');
assert(css.includes('#targetTextWrapper > div:first-child'),'live reader original');
assert(css.includes('#yourVoiceWrapper'),'live reader transcript');
assert(css.includes('body.result-layout-active #scoreSummaryRow.cp-score-surface'),'result visuals');
assert(css.includes('.vc-landing-grid'),'vocabulary check landing');
assert(css.includes('#vcPanelReview .vc-reading-feedback'),'vocabulary reading result');
assert(css.includes('body.sq-premium'),'Sound Quest style');
assert(css.includes('width:min(1480px,100%)'),'home no longer capped at 1220px');
assert(css.includes('max-width:1500px'),'vocabulary shell expands at desktop widths');
assert(css.includes('@media(min-width:761px) and (max-width:930px)'),'iPad portrait reflow');
assert(css.includes('@media(max-height:700px) and (min-width:481px)'),'short laptop layout');
assert(css.includes('@media(max-width:480px)'),'small phone layout');
assert(css.includes('body.vc-is-result #vcPanelSummary'),'scrollable portrait result');
assert(css.includes('@media(max-height:600px)'),'short viewport scroll fallback');
assert(css.includes('body.vc-is-quiz{overflow-y:auto}'),'short viewport quiz not clipped');
assert(css.includes('@media(prefers-reduced-motion:reduce)'),'accessibility');
assert(!css.includes('#micBtn{'),'do not override live microphone states');
assert(j.includes('const report=scoring.score(sentence,transcript)'),'scoring module unchanged');
for(const id of ['vcReviewGate','vcInsightDue','vcReadTranscript'])assert(v.includes('id="'+id+'"'));
const styleLinks=read('index.html');
assert(styleLinks.indexOf('href="copeak-pages.css"')<styleLinks.indexOf('href="copeak-premium.css?v=20261103"'),'premium CSS after base screens');
assert(v.indexOf('href="vocabulary-check.css?v=8.7.4"')<v.indexOf('href="copeak-premium.css?v=20261103"'),'vocab premium CSS after base');
console.log('PASS: unified Copeak design and responsive layout hooks across home, reader, creator, vocabulary and Sound Quest.');
