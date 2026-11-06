import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=file=>readFileSync(new URL('../'+file,import.meta.url),'utf8');
const html=read('grammar-training.html');
const js=read('grammar-training.js');
const css=read('grammar-ui-cleanup.css');

// The saturated alternate tile is no longer added to every fifth category.
assert(!js.includes("if(i%5===1)b.classList.add('gt-dark-tile')"));
assert(js.includes("const b=node('button','gt-category-card gt-square-tile')"));
assert(css.includes('.gt-picker .gt-category-card.gt-square-tile.gt-dark-tile'));
assert(css.includes('.gt-picker .gt-category-card.gt-square-tile.is-selected'));

// Eliminate duplicate in-panel headline; retain top dialog title and pass threshold.
assert(!html.includes('READ ALOUD · 5 STAGES'));
assert(html.includes('<h2 id="gtMissionTitle">音読ミッション</h2>'));
assert(html.includes('id="gtPassCondition"'));
assert(css.includes('.gt-reading .gt-reading-head'));

// All internally referenced nodes remain; only presentation is hidden.
for(const id of [
 'gtSentenceSwitcher','gtMainSentence','gtExtraSentence',
 'gtRecognitionStatus','gtSignalAudio','gtSignalVoice','gtSignalText',
 'gtMissionStatus','gtRecord','gtStop','gtTranscript','gtScorePanel','gtNextStage'
]){
 assert(html.includes('id="'+id+'"'),'missing retained node '+id);
}
assert(css.includes('#gtSentenceSwitcher'));
assert(css.includes('.gt-reading .gt-speech-pipeline'));
assert(css.includes('.gt-reading #gtRecognitionStatus'));
assert(css.includes('.gt-reading-modal-footer #gtMissionStatus'));
assert(css.includes('justify-content:flex-end'));

// Ensure updated assets reach iPad caches.
assert(html.includes('grammar-ui-cleanup.css?v=20261105-22'));
assert(html.includes('grammar-training.js?v=20261106-4'));
assert(js.includes("scoreEngine().score(q.sentence,spoken)"));
assert(js.includes('state.micRestartTimer=window.setTimeout(listen,250)'));
console.log('PASS grammar UI cleanup: pastel category tiles, redundant labels hidden, recording/score nodes intact');
