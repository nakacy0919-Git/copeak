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
 assert.match(html,/grammar-reading-minimal\.css\?v=20261107-1/);
 assert.match(html,/grammar-training\.js\?v=20261107-6/);
});
test('minimal transcript and diagnostics preserve recovery when recognition fails',()=>{
 assert.match(js,/state\.mode==='entrance'\?'音読を始めると、認識された英語がここに表示されます。':''/);
 assert.match(js,/trouble\.hidden=!\//);
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
test('Level 1 opens, Level 2-5 collapse, a deliberate click reveals and closes boxes',()=>{
 const start=js.indexOf('function renderGrammarVisual(q){'),stop=js.indexOf('function canAdvanceExam(){');
 assert.ok(start>0&&stop>start);
 const state={mode:'senior',stage:1,guideKey:'',guideExpanded:true,unit:{title:'現在進行形',hint:'be + ing'}};
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
 assert.equal(header().attrs['aria-expanded'],'true');
 assert.match(textTree(root),/is reading/);
 state.stage=2;render(q);
 assert.equal(header().attrs['aria-expanded'],'false');
 assert.doesNotMatch(textTree(root),/is reading/,'masked answers leaked from the closed guide');
 assert.equal(root.children[1].hidden,true);
 assert.equal(header().attrs['aria-controls'],'gtGrammarGuideDetails');
 header().handlers.click();
 assert.equal(header().attrs['aria-expanded'],'true');
 assert.match(textTree(root),/is reading/);
 header().handlers.click();
 assert.equal(header().attrs['aria-expanded'],'false');
 assert.doesNotMatch(textTree(root),/is reading/);
 for(const level of [3,4,5]){
  state.stage=level;render(q);
  assert.equal(header().attrs['aria-expanded'],'false','guide shown by default at Level '+level);
 }
 state.stage=1;render(q);
 assert.equal(header().attrs['aria-expanded'],'true');
});
test('no protrusions or effect on unchanged entrance mode',()=>{
 const flat=read('grammar-visual-flat.css');
 assert.match(flat,/content:none!important/);
 assert.match(css,/#gtJuniorGuide\.gj-guide\.gj-collapsed/);
 assert.doesNotMatch(css,/body\[data-gt-mode="entrance"\]/);
 assert.match(read('vercel.json'),/"deploymentEnabled"\s*:\s*false/);
});
