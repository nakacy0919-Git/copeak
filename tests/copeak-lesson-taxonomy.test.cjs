const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const tax=require('../copeak-lesson-taxonomy.js');
const base=path.join(__dirname,'..');
const rows=JSON.parse(fs.readFileSync(path.join(base,'data/copeak-library.json'),'utf8')).items;
test('sources separate samples, originals, personal and Classroom',()=>{
 assert.equal(tax.source({folderId:'__samples__',isPreset:true}),'sample');
 assert.equal(tax.source({folderId:'__copeak_school_english__',copeakLibrary:true}),'original');
 assert.equal(tax.source({folderId:'__copeak_school_english__',classroomAssignmentId:'id'}),'classroom');
 assert.equal(tax.source({title:'My own lesson'}),'personal');
 assert.equal(tax.source({textbookSeries:'New Horizon 2'}),'new_horizon');
});
test('explicit grades and CEFR without guesses',()=>{
 assert.deepEqual(tax.grades({schoolLevel:'中1-中2'}),['中1','中2']);
 assert.deepEqual(tax.grades({schoolLevel:'中2'}),['中2']);
 assert.deepEqual(tax.grades({schoolLevel:'中学生〜高校初級'}),[]);
 assert.deepEqual(tax.cefr({cefr:'A2-B1'}),['A2','B1']);
 assert.equal(tax.matches({schoolLevel:'中2'},{grade:'中3'}),false);
});
test('certification ranges keep all explicit bands and do not confuse pre-2 with 2',()=>{
 assert.deepEqual(tax.certification({levelLabel:'準2級プラス〜2級目安'}),['準2級プラス','2級']);
 assert.deepEqual(tax.certification({levelLabel:'英語レベル5〜4級目安'}),['4級','5級']);
 assert.deepEqual(tax.certification({levelLabel:'準1級相当'}),['準1級']);
});
test('the existing catalog metadata remain intact',()=>{
 assert.ok(rows.length>=80);
 assert.equal(rows.filter(taxItem=>tax.source(taxItem)==='original').length,rows.length);
 assert.ok(rows.some(item=>tax.matches(item,{source:'original',cert:'準2級',cefr:'A2'})));
 assert.ok(rows.some(item=>tax.grades(item).includes('中2')));
});
test('reader retains original start, folders and search alongside filters',()=>{
 const js=fs.readFileSync(path.join(base,'copeak-reader-workspace.js'),'utf8');
 for(const id of ['cprGrade','cprCert','cprCefr','cprClearFilters'])assert.ok(js.includes(id));
 assert.ok(js.includes('startCustomLesson'));
 assert.ok(js.includes('matchesFolder(l,selected)'));
 assert.ok(js.includes('New Horizon'));
});
