'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const top=read('japeak-top.html'),my=read('japeak-my.html');
const topJs=read('js/japeak-v4-home.js'),i18nJs=read('js/japeak-top-i18n.js');
const myI18nJs=read('js/japeak-my-i18n.js');
const taxonomyJs=read('js/japeak-v4-taxonomy.js');
const css=read('css/japeak-v7-polish.css');
const expected=['ja','en','zh-CN','zh-TW','ko','vi','tl','id','th','my','km','ne','mn','si','bn','pt','es','fr','ru','uk','hi','ur','ar','de','it','tr','ms','uz','fa'];
function setup() {
  const buttons={},names={},all=[];
  class Element {
    constructor(name){this.name=name;this.attrs={};this.textContent='';this.href='';this.value='';this.options=[];this.listeners={};this.complete=false;this.naturalWidth=1024;
      if(name.startsWith('start-'))buttons[name]=this;}
    getAttribute(name){return this.attrs[name];}
    setAttribute(key,val){this.attrs[key]=String(val);}
    addEventListener(type,cb){this.listeners[type]=cb;}
    appendChild(node){this.options.push(node);}
  }
  for(const name of ['school','life','my','headline','description','choose','schoolSub','lifeSub','mySub']){
    const el=new Element(name);el.attrs['data-jpk-home-key']=name;all.push(el);names[name]=el;
  }
  for(const name of ['start-school','start-life','start-my'])new Element(name);
  const photo=new Element('photo');
  const home={classList:{add(){}},querySelector(sel){
    if(sel==='.jpk-v4-photo img')return photo;
    return buttons[sel.slice(1)]||null;
  },querySelectorAll(sel){return sel==='[data-jpk-home-key]'?all:[]},appendChild(){}};
  const dropdown=new Element('select');
  const document={
    documentElement:{lang:'ja'},
    querySelector(sel){return sel==='.jpk-v4-home'?home:null;},
    getElementById(id){return id==='jpk-v4-lang'?dropdown:null;},
    createElement(name){return new Element(name)}
  };
  const local=new Map();
  const localStorage={getItem:k=>local.get(k)||null,setItem:(k,v)=>local.set(k,v)};
  const window={matchMedia:()=>({matches:true})};
  const context=vm.createContext({window,document,localStorage});
  vm.runInContext(taxonomyJs,context);
  vm.runInContext(myI18nJs,context);
  vm.runInContext(i18nJs,context);
  // Save an initial language before the homepage handler fills the select.
  localStorage.setItem('japeakLang','id');
  vm.runInContext(topJs,context);
  return {window,document,dropdown,names,buttons,localStorage};
}
test('all new scripts parse',()=>{
  assert.doesNotThrow(()=>new vm.Script(i18nJs));
  assert.doesNotThrow(()=>new vm.Script(topJs));
});
test('homepage supports all 29 languages exactly',()=>{
  const {window}=setup();
  assert.deepEqual(Array.from(window.JapeakTopI18n.languages).sort(),expected.slice().sort());
  for(const [code,dict] of Object.entries(window.JapeakTopI18n.dictionaries)){
    for(const key of ['school','life','headline','description','choose','schoolSub','lifeSub','mySub']){
      assert.ok(typeof dict[key]==='string' && dict[key].trim(),code+' '+key);
    }
  }
});
test('saved Indonesian language is applied immediately to all three buttons and copy',()=>{
  const {document,names,buttons,dropdown}=setup();
  assert.equal(dropdown.value,'id');
  assert.equal(document.documentElement.lang,'id');
  assert.equal(names.school.textContent,'Berbicara di sekolah');
  assert.equal(names.life.textContent,'Berbicara sehari-hari');
  assert.ok(names.description.textContent.includes('Jepang'));
  assert.ok(names.choose.textContent.includes('Mulai'));
  assert.match(buttons['start-my'].href,/lang=id/);
  assert.match(buttons['start-school'].href,/mode=school&lang=id/);
  assert.match(buttons['start-life'].href,/mode=life&lang=id/);
});
test('language change updates home live, saved choice and accessible labels',()=>{
  const {dropdown,document,localStorage,names,buttons}=setup();
  dropdown.value='pt';
  dropdown.listeners.change();
  assert.equal(document.documentElement.lang,'pt');
  assert.equal(localStorage.getItem('japeakLang'),'pt');
  assert.equal(names.school.textContent,'Fale na escola');
  assert.equal(names.life.textContent,'Fale no dia a dia');
  assert.ok(buttons['start-my'].attrs['aria-label'].includes('Meus materiais'));
  assert.equal(names.my.textContent,'Meus materiais');
});
test('new stylesheet loads after earlier V4 and V6 styles',()=>{
  const last=top.lastIndexOf('css/japeak-v7-polish.css');
  assert.ok(last>top.indexOf('css/japeak-v4.css'));
  assert.ok(last>top.indexOf('css/japeak-practice-v6.css'));
  assert.ok(my.indexOf('css/japeak-v7-polish.css')>my.indexOf('css/japeak-my.css'));
});
test('homepage translation scripts load after taxonomy and before home handler',()=>{
  assert.ok(top.indexOf('js/japeak-v4-taxonomy.js')<top.indexOf('js/japeak-top-i18n.js'));
  assert.ok(top.indexOf('js/japeak-my-i18n.js')<top.indexOf('js/japeak-top-i18n.js'));
  assert.ok(top.indexOf('js/japeak-top-i18n.js')<top.indexOf('js/japeak-v4-home.js'));
  assert.equal((top.match(/data-jpk-home-key=/g)||[]).length,9);
});
test('tablet viewport and photo use full viewport without a fixed 1024px width',()=>{
  assert.match(css,/width:100vw\s*!important/);
  assert.match(css,/height:100dvh\s*!important/);
  assert.match(css,/\.jpk-v4-home \.jpk-v4-photo img/);
  assert.match(css,/object-fit:cover\s*!important/);
  assert.match(css,/@media \(min-width:700px\) and \(max-width:1500px\) and \(orientation:landscape\)/);
  assert.doesNotMatch(css,/width:1024px/);
});
test('washi glass uses accessible contrast and blur without removing original Sakura effect',()=>{
  assert.match(css,/rgba\(255,255,255,\.24\)/);
  assert.match(css,/backdrop-filter:blur\(8px\)/);
  assert.match(css,/\.start-school/);
  assert.match(css,/\.start-life/);
  assert.match(top,/jpk-v4-photo/);
  assert.match(read('css/japeak-v4.css'),/jpkV4Sakura/);
});
test('third button matches two-column width, but smartphone buttons are full width',()=>{
  assert.match(css,/\.start-my \{[\s\S]*?grid-column:1\/-1;[\s\S]*?width:calc\(\(100% - clamp\(/);
  assert.match(css,/@media \(max-width:699px\)[\s\S]*?\.start-my\s*\{[\s\S]*?width:100%\s*!important/);
  assert.match(top,/class="start-btn start-my"/);
});
test('personal library header keeps language and Home horizontally aligned',()=>{
  assert.match(css,/\.jp-lang\{display:inline-flex!important;flex-direction:row!important/);
  assert.match(css,/\.jp-back\{display:inline-flex;align-items:center;justify-content:center;height:44px/);
  assert.match(css,/\.jp-top-actions\{display:flex;align-items:center/);
  assert.match(my,/id="jp-ui-language"/);
});
