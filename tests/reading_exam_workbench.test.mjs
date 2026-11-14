import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const read=p=>fs.readFileSync(new URL('../'+p,import.meta.url),'utf8');
const js=read('reading-exam-mode.js'),ink=read('reading-ink.js'),html=read('reading-entrance.html');
test('syntax and unique HTML IDs',()=>{new vm.Script(js);new vm.Script(ink);const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size);for(const id of ['examClock','examTimeLimit','examQuestionNav','examParagraphNav','examSubmitTop','examInkNotice'])assert(ids.includes(id));});
test('review and local draft wiring',()=>{for(const s of ['flags:current.flags','crossed:current.crossed','startedAt:current.startedAt','submitPending=true','current.elapsedSeconds=elapsed()','q.subprompt','data-evidence-p'])assert(js.includes(s),s);for(const s of ["name==='exam'?'exam:'","'blue','highlight'","ink-layout-mismatch","lostpointercapture"])assert(ink.includes(s),s);});
