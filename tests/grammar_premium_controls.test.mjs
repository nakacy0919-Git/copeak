import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const load=name=>fs.readFileSync(path.join(root,name),"utf8");
const markup=load("grammar-training.html");
const css=load("grammar-premium-controls.css");
const app=load("grammar-training.js");
const count=expression=>(markup.match(expression)||[]).length;

assert.equal(count(/class="gt-mode-card /g),4,"four training modes retained");
assert.equal(count(/class="gt-card-icon" aria-hidden="true"><svg/g),4,"illustrated icons present for every mode");
assert.equal(count(/class="gt-card-arrow" aria-hidden="true">›<\/span>/g),4,"all arrows match");
assert(markup.includes('class="gt-record-actions"'),"record and stop must share a centered wrapper");
assert(markup.includes('id="gtRecognitionStatus" role="status" aria-live="polite"'),"mic ready state remains available");
assert(markup.indexOf("grammar-premium-controls.css")>markup.indexOf("grammar-premium-buttons.css"),"control styles load last");
const ids=[...markup.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size,"no duplicate ids");
for(const match of app.matchAll(/\$\('([^']+)'\)/g))assert(ids.includes(match[1]),"missing DOM control "+match[1]);
for(const required of [
 ".gt-landing .gt-mode-card", ".gt-landing .gt-mode-card .gt-card-icon svg",
 "#gtOptions.gt-choices", "#gtOptions .gt-choice", "#gtStem",
 ".gt-record-actions", ".gt-record-buttons #gtRecognitionStatus",
 "@media(max-width:700px)", "@media(max-width:430px)", "prefers-reduced-motion"
])assert(css.includes(required),"missing design selector "+required);
assert(css.includes("max-width:1160px"),"answer buttons should be widened");
assert(css.includes("clamp(26px,3vw,36px)"),"visible breathing room after question");
assert(css.includes("grid-template-columns:repeat(2,minmax(0,1fr))"),"quiz/home two-column layout");
assert(app.includes("core.stageCanAdvance(state.stage,percent)"),"reading mission accuracy logic preserved");
assert(app.includes("function finalizeSpeechSession("),"speech recognizer recovery logic preserved");
console.log("PASS: all four premium home cards, enlarged quiz choices, centered microphone controls, retained app hooks");
