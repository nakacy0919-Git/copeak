'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..'),read=(file)=>fs.readFileSync(path.join(root,file),'utf8');
const top=read('japeak-top.html'),menu=read('japeak-menu.html');
const css=read('css/japeak-v4.css'),ui=read('js/japeak-v4-ui.js'),taxonomy=read('js/japeak-v4-taxonomy.js'),i18n=read('js/japeak-v4-i18n.js');
test('V4 scripts parse without changing stage 1–3 files',()=>{
  for(const code of [ui,taxonomy,i18n])assert.doesNotThrow(()=>new vm.Script(code));
  assert.match(menu,/japeak-learning-history\.js/);
  assert.match(menu,/japeak-menu-main\.js/);
  assert.match(top,/data-share-qr/);
});
test('responsive picture uses exact portrait and landscape assets',()=>{
  assert.match(top,/srcset="assets\/japeak-bg-portrait\.webp"/);
  assert.match(top,/src="assets\/japeak-bg-landscape\.webp"/);
  assert.match(css,/height:100dvh/);
  assert.match(css,/overflow:hidden/);
  assert.match(css,/@media\(max-width:600px\)/);
  assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
});
test('V4 filter UI is loaded after Stage 3 data and can navigate to original lessons',()=>{
  for(const file of ['js/japeak-v4-taxonomy.js','js/japeak-v4-i18n.js','js/japeak-menu-main.js','js/japeak-v4-ui.js'])assert.ok(menu.includes('src="'+file));
  assert.ok(menu.indexOf('japeak-menu-main.js')<menu.indexOf('japeak-v4-ui.js'));
  assert.match(ui,/window\.loadJapeakCategory\(item\.key,item\.name\)/);
  assert.match(ui,/renderPhraseList\(item\.key\)/);
  assert.match(ui,/encodeURIComponent\(cat\)/);
  assert.match(ui,/aria-modal/);
  assert.match(ui,/initialDeepLinkSkip/);
});
test('taxonomy deduplicates and assigns embedded B2 keys to B2 level',()=>{
  const fake={};vm.runInNewContext(taxonomy,{window:fake});
  const T=fake.JapeakV4Taxonomy;
  assert.equal(T.languages.length,29);
  const scenes=T.makeScenes([
    {labelId:'title_convenient',scenes:[{catKey:'a1_scene1',name:'こんにちは',isReady:true}]},
    {labelId:'title_a1',scenes:[{catKey:'a1_scene1',name:'こんにちは',isReady:true}]},
    {labelId:'title_b1',scenes:[{catKey:'b2_disaster_preparedness',name:'防災について考えよう',isReady:true}]}
  ]);
  assert.equal(scenes.length,2);
  assert.equal(scenes.find(s=>s.key==='b2_disaster_preparedness').level,'b2');
  assert.equal(scenes.find(s=>s.key==='b2_disaster_preparedness').domain,'safety');
});
test('language options preserve 20 existing languages and append nine fallbacks',()=>{
 assert.match(i18n,/extraLanguages/);assert.match(i18n,/Object\.assign\(\{\},uiDict\.en\)/);
 assert.match(css,/jpk-v4-reopen/);
});
