const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),ui=fs.readFileSync(path.join(root,'copeak-reader-workspace.js'),'utf8'),css=fs.readFileSync(path.join(root,'copeak-reader-workspace.css'),'utf8');
test('phone folder selection opens accessible modal with searchable lesson list',()=>{
 for(const id of ['cprFolderDialog','cprFolderSearch','cprFolderSort','cprFolderLessonRows','cprFolderClose'])assert.ok(ui.includes(id),id);
 assert.match(ui,/openFolderDialog\(f\)/);
 assert.match(ui,/closeFolderDialog\(\);if\(typeof startCustomLesson/);
 assert.match(css,/#cprFolderDialog\[open\]/);
 assert.match(css,/#cprLibrary #cprFolderRows\{display:grid/);
});
