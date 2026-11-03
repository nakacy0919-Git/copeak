import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const root=new URL('../',import.meta.url),read=p=>fs.readFileSync(new URL(p,root),'utf8');
const html=read('vocabulary-check.html'),css=read('vocabulary-check.css'),js=read('vocabulary-check.js');
new vm.Script(js);new vm.Script(read('vocabulary-review.js'));new vm.Script(read('vocabulary-quality.js'));
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(new Set(ids).size,ids.length);
for(const id of ['vcLearningInsights','vcInsightDue','vcInsightScheduled','vcInsightPracticed',
'vcInsightConfirmed','vcWeaknessBars','vcInsightNextDue','vcGatePractice','vcBackupExport',
'vcBackupImport','vcBackupFile','vcEvidenceSummary','vcEvidenceRange','vcEvidenceWarning','vcAuditSummary']){
 assert(ids.includes(id),id);
}
for(const file of ['vocabulary-review.js','vocabulary-quality.js'])assert(html.includes('src="'+file+'?'));
assert(js.includes("localStorage.setItem(REVIEW_KEY"),'device-only due record');
assert(js.includes('new Blob([JSON.stringify(payload,null,2)]'),'offline export');
assert(js.includes('await file.text()'),'offline import');
assert(js.includes('function renderLearningInsights()'));
assert(css.includes('.vc-learning-insights')&&css.includes('@media(max-width:700px)'));
assert(html.includes('details class="vc-diagnosis-evidence"'),'reliability detail is collapsed');
assert(html.includes('診断の根拠を見る'));
assert(!html.includes('id="vcInsightStartReview"'),'duplicate review button should stay removed');
console.log('PASS insights: visual metrics, offline backup, interim evidence and viewport-safe details.');
