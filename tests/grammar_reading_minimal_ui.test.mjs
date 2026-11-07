import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=name=>readFileSync(new URL('../'+name,import.meta.url),'utf8');
const js=read('grammar-training.js'),html=read('grammar-training.html'),css=read('grammar-reading-minimal.css');

test('school lesson strips duplicate totals, FACT labels and reading heading without changing exam mode',()=>{
 assert.match(js,/\$\('gtModeTotal'\)\.hidden=mode!=='entrance'/);
 assert.doesNotMatch(js,/title:'FACT '\+t\.fact_id/);
 assert.match(js,/id:id\+'-'\+t\.fact_id,title:t\.title/);
 assert.match(js,/\$\('gtReadingHeading'\)\.hidden=state\.mode!=='entrance'/);
 assert.match(js,/state\.mode==='entrance'\?'お手本を聞いてから音読できます。':''/);
 assert.match(js,/state\.mode==='entrance'\?'Listening…':''/);
 assert.match(css,/#gtReadingHeading\[hidden\]/);
 assert.match(css,/#gtModeTotal\[hidden\]/);
});
test('Japanese translation appears directly below the English before the guide',()=>{
 const english=html.indexOf('id="gtReadingText"');
 const japanese=html.indexOf('id="gtJapanese"');
 const guide=html.indexOf('id="gtJuniorGuide"');
 assert.ok(english>=0&&japanese>english&&guide>japanese);
 assert.match(html,/grammar-reading-minimal\.css\?v=20261107-2/);
 assert.match(html,/grammar-training\.js\?v=20261107-7/);
});
test('minimal transcript and diagnostics preserve recovery when recognition fails',()=>{
 assert.match(js,/state\.mode==='entrance'\?'音読を始めると、認識された英語がここに表示されます。':''/);
 assert.match(js,/trouble\.hidden=state\.mode!=='entrance'&&!isError/);
 assert.match(js,/if\(trouble\.hidden\)trouble\.open=false/);
 assert.match(js,/\$\('gtRetrySpeech'\)\.hidden=false/);
 assert.match(css,/\.gt-speech-debug\[hidden\]/);
});
class FakeNode{
 constructor(tag,cls='',text=''){
  this.tag=tag;this.className=cls;this.textContent=text;this.children=[];this.attrs={};this.handlers={};this.hidden=false;
  this.style={setProperty:(k,v)=>{this.attrs[k]=v}};
  this.classList={
   toggle:(name,active)=>{const names=new Set(this.className.split(/\s+/));if(active)names.add(name);else names.delete(name);this.className=[...names].join(' ');},
   remove:name=>{this.className=this.className.split(/\s+/).filter(x=>x!==name).join(' ')}
  };
 }
 setAttribute(k,v){this.attrs[k]=String(v);}
 append(...nodes){this.children.push(...nodes);}
 replaceChildren(...nodes){this.children=[...nodes];}
 addEventListener(k,handler){this.handlers[k]=handler;}
}
const textTree=n=>(typeof n==='string'?n:n.textContent+' '+n.children.map(textTree).join(' '));
test('guide begins as inviting CTA on all levels; explicit clicks disclose and close the structure',()=>{
 const start=js.indexOf('function renderGrammarVisual(q){'),stop=js.indexOf('function canAdvanceExam(){');
 assert.ok(start>0&&stop>start);
 const state={mode:'senior',stage:1,guideKey:'',guideExpanded:false,unit:{title:'現在進行形',hint:'be + ing'}};
 const root=new FakeNode('section','gj-guide');
 const node=(type,cls,value)=>new FakeNode(type,cls,value||'');
 const data={segments:[
  {text:'She',label:'主語 S',kind:'subject'},
  {text:'is reading',label:'動詞 V',kind:'focus'},
  {text:'a book',label:'目的語 O',kind:'object'}
 ],note:'be動詞 + 動詞-ing',relation:null};
 const render=new Function('state','juniorVisual','seniorVisual','juniorRelations','$','node','document','core',js.slice(start,stop)+';return renderGrammarVisual;')(
  state,null,{get:()=>data},null,()=>root,node,{},{}
 );
 const q={id:'HS-01-002-01',sentence:'She is reading a book.'};
 const header=()=>root.children[0];
 render(q);
 assert.equal(header().attrs['aria-expanded'],'false');
 assert.equal(header().attrs['aria-label'],'図で文構造を確認する');
 assert.match(textTree(header()),/図で文構造を確認する/);
 assert.equal(header().tag,'button');
 assert.equal(root.children[1].hidden,true);
 assert.doesNotMatch(textTree(root),/is reading/,'no diagram or masked answers before tapping the CTA');
 assert.equal(header().attrs['aria-controls'],'gtGrammarGuideDetails');
 assert.match(header().children[0].className,/gj-visual-icon/);
 assert.equal(header().children[0].attrs['aria-hidden'],'true');
 header().handlers.click();
 assert.equal(header().attrs['aria-expanded'],'true');
 assert.equal(header().attrs['aria-label'],'文構造の図を閉じる');
 assert.match(textTree(header()),/図を閉じる/);
 assert.match(textTree(root),/is reading/);
 header().handlers.click();
 assert.equal(header().attrs['aria-expanded'],'false');
 assert.doesNotMatch(textTree(root),/is reading/);
 for(const level of [2,3,4,5]){
  state.stage=level;render(q);
  assert.equal(header().attrs['aria-expanded'],'false','unexpected auto-open at Level '+level);
  assert.doesNotMatch(textTree(root),/is reading/,'stage '+level+' leaked masked words');
  header().handlers.click();
  assert.equal(header().attrs['aria-expanded'],'true','learner cannot request the diagram at Level '+level);
  header().handlers.click();
  assert.equal(header().attrs['aria-expanded'],'false');
 }
 state.stage=1;render(q);
 assert.equal(header().attrs['aria-expanded'],'false','returning to Level 1 must not auto-open');
 const q2={id:'HS-01-002-02',sentence:'She is reading a book.'};
 header().handlers.click();
 assert.equal(header().attrs['aria-expanded'],'true');
 render(q2);
 assert.equal(header().attrs['aria-expanded'],'false','a different sentence must begin collapsed');

});
test('no protrusions or effect on unchanged entrance mode',()=>{
 const flat=read('grammar-visual-flat.css');
 assert.match(flat,/content:none!important/);
 assert.match(css,/#gtJuniorGuide\.gj-guide\.gj-collapsed/);
 assert.match(css,/min-height:44px/);
 assert.match(css,/gj-visual-bar-1/);
 assert.match(js,/state\.guideExpanded=false/);
 assert.match(js,/nextButton\?\.focus\?\./);
 assert.doesNotMatch(css,/body\[data-gt-mode="entrance"\]/);
 assert.match(read('vercel.json'),/"deploymentEnabled"\s*:\s*false/);
});
