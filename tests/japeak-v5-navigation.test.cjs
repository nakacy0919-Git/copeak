'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const catalogCode=read('js/japeak-v5-catalog.js');
const dialogCode=read('js/japeak-v5-dialog.js');
const css=read('css/japeak-v5.css');
const top=read('japeak-top.html');
const menu=read('japeak-menu.html');
const lesson=read('japeak.html');

function getCatalog() {
    const window={};
    vm.runInNewContext(catalogCode,{window});
    return window.JapeakV5Catalog;
}

test('compact catalog maps every actual scene and lesson to a stable ID',()=>{
    const catalog=getCatalog();
    assert.equal(catalog.categories.length,69);
    assert.equal(catalog.categories.filter(x=>x.mode==='school').length,14);
    assert.equal(catalog.categories.filter(x=>x.mode==='life').length,55);
    const lessons=catalog.categories.flatMap(x=>x.lessons);
    assert.equal(lessons.length,576);
    assert.equal(new Set(lessons.map(x=>x.id)).size,lessons.length);
    assert.ok(catalog.categories.every(x=>x.names.ja && x.lessons.length && x.key));
    assert.ok(lessons.every(x=>x.id && x.category && x.title));
});

test('top page preserves responsive cherry blossom photos and uses popup, not search',()=>{
    assert.match(top,/assets\/japeak-bg-portrait\.webp/);
    assert.match(top,/assets\/japeak-bg-landscape\.webp/);
    assert.match(top,/js\/japeak-v5-dialog\.js/);
    assert.match(top,/js\/japeak-v5-catalog\.js/);
    assert.doesNotMatch(top,/class="top-menu-link"/);
    assert.doesNotMatch(top,/すべての教材から選ぶ/);
    assert.match(top,/class="start-btn start-school"/);
    assert.match(top,/class="start-btn start-life"/);
});
test('menu replaces search UI with scene and phrase buttons',()=>{
    assert.match(menu,/japeak-v5-dialog\.js/);
    assert.doesNotMatch(menu,/id="japeak-search-input"/);
    assert.doesNotMatch(menu,/id="search-results-panel"/);
    assert.doesNotMatch(menu,/japeak-v4-ui\.js/);
    assert.match(dialogCode,/function renderScenes\(\)/);
    assert.match(dialogCode,/function renderPhrases\(\)/);
    assert.match(dialogCode,/function practiceHref\(lesson\)/);
});
test('native language dropdowns are single-line for long names',()=>{
    assert.match(menu,/jpk-v5-native-lang/);
    assert.match(lesson,/jpk-v5-native-lang/);
    assert.match(css,/#menu-lang-select,\.jpk-v5-native-lang #lang-select/);
    assert.match(css,/text-overflow:ellipsis;white-space:nowrap/);
    assert.match(css,/display:none!important/);
});
test('soft landscape/portrait photo backgrounds are also used on speaking screens',()=>{
    assert.match(css,/body\.japeak-stage3-menu::before,body\.japeak-stage3-practice::before/);
    assert.match(css,/japeak-bg-landscape\.webp/);
    assert.match(css,/japeak-bg-portrait\.webp/);
    assert.match(css,/rgba\(246,250,250,\.8/);
    assert.match(css,/prefers-reduced-motion:reduce/);
    assert.match(lesson,/css\/japeak-v5\.css/);
});

function runPopupHarness(menuPage=false,initial='') {
    const elements=new Map(),ready=[],startSchool=[],startLife=[];
    class Node {
        constructor(tag='div') {
            this.tag=tag;this.children=[];this.listeners={};this.attrs={};this.value='';
            this.textContent='';this.innerHTML='';this.hidden=false;this.style={};this.scrollTop=0;
            this.className='';this.classList={add(){},remove(){}};
        }
        set id(x){this._id=x;elements.set(x,this)} get id(){return this._id}
        setAttribute(k,v){this.attrs[k]=String(v)}
        getAttribute(k){return this.attrs[k]}
        addEventListener(t,fn){this.listeners[t]=fn}
        appendChild(n){this.children.push(n)}
        append(...nodes){this.children.push(...nodes)}
        replaceChildren(...nodes){this.children=nodes}
        querySelector(){return new Node('div')}
        querySelectorAll(){return []}
        getClientRects(){return [{x:1}]}
        closest(){return this}
        focus(){document.activeElement=this}
    }
    const document={
        activeElement:null,
        body:new Node('body'),
        createElement:tag=>new Node(tag),
        getElementById(id){
            if(!menuPage && (id==='gate-container'||id==='menu-lang-select'))return null;
            if(!elements.has(id)){const n=new Node();n.id=id;}
            return elements.get(id);
        },
        querySelectorAll(selector){
            return selector==='.start-school' ? startSchool : selector==='.start-life' ? startLife : [];
        },
        addEventListener(type,fn){if(type==='DOMContentLoaded')ready.push(fn)},
        contains(){return true}
    };
    const homeLang=document.getElementById(menuPage?'menu-lang-select':'jpk-v4-lang');
    homeLang.value='id';
    const popupButton=new Node('a');startSchool.push(popupButton);
    const popupLife=new Node('a');startLife.push(popupLife);
    const window={location:{search:initial},localStorage:{getItem:()=>null}};
    const context=vm.createContext({window,document,URLSearchParams,console});
    vm.runInContext(catalogCode,context);
    vm.runInContext(dialogCode,context);
    return {window,document,elements,ready,popupButton,popupLife};
}
test('school button opens modal, then a scene and an individual lesson',()=>{
    const {window,elements,popupButton}=runPopupHarness();
    popupButton.listeners.click({preventDefault(){}});
    assert.equal(elements.get('jpk-v5-overlay').hidden,false);
    const scenes=elements.get('jpk-v5-results').children;
    assert.equal(scenes.length,14);
    assert.equal(scenes[0].tag,'button');
    scenes[0].listeners.click();
    const phrases=elements.get('jpk-v5-results').children;
    assert.ok(phrases.length>1);
    assert.equal(phrases[0].tag,'a');
    assert.match(phrases[0].href,/japeak\.html\?id=/);
    assert.match(phrases[0].href,/lang=id/);
    elements.get('jpk-v5-back').listeners.click();
    assert.equal(elements.get('jpk-v5-results').children.length,14);
    window.JapeakV5Dialog.close();
    assert.equal(elements.get('jpk-v5-overlay').hidden,true);
});
test('daily life shows all actual categories, with level and domain button filters',()=>{
    const {window,elements,popupLife}=runPopupHarness();
    popupLife.listeners.click({preventDefault(){}});
    assert.equal(window.JapeakV5Dialog.visibleGroups().length,55);
    const chips=elements.get('jpk-v5-levels').children;
    assert.ok(chips.length>2);
    chips[2].listeners.click();
    assert.ok(window.JapeakV5Dialog.visibleGroups().length>0);
    assert.ok(window.JapeakV5Dialog.visibleGroups().length<55);
    assert.equal(elements.get('jpk-v5-controls').hidden,false);
});
test('old menu back links open their selected category directly in the modal',()=>{
    const {elements,ready}=runPopupHarness(true,'?mode=life&cat=a1_restaurant');
    ready.forEach(fn=>fn());
    assert.equal(elements.get('jpk-v5-overlay').hidden,false);
    assert.ok(elements.get('jpk-v5-results').children.length>=1);
    assert.equal(elements.get('jpk-v5-results').children[0].tag,'a');
    assert.match(elements.get('jpk-v5-kicker').textContent,/予約|レストラン|restaurant|sekolah|Bahasa|暮らし/i);
});
test('the modal never injects lesson title or Japanese text as HTML',()=>{
    assert.match(dialogCode,/title\.textContent=item\.title/);
    assert.match(dialogCode,/japanese\.textContent=item\.japanese/);
    assert.match(dialogCode,/strong\.textContent=titleFor\(group\)/);
    assert.doesNotMatch(dialogCode,/eval\(/);
});


test('menu home restores immersive photo and translucent course cards without altering learning navigation',()=>{
    const immersive=read('css/japeak-menu-immersive.css');
    const bg=immersive.slice(immersive.indexOf('body.japeak-stage3-menu::before'),immersive.indexOf('/* The older pale veil'));
    assert.match(bg,/url\("\.\.\/assets\/japeak-bg-landscape\.webp"\)!important/);
    assert.match(immersive,/url\("\.\.\/assets\/japeak-bg-portrait\.webp"\)!important/);
    assert.doesNotMatch(bg,/rgba\(246,250,250,\.8/);
    assert.match(immersive,/body\.japeak-stage3-menu #jpk-menu-header/);
    assert.match(immersive,/#jpk-menu-school/);
    assert.match(immersive,/#jpk-menu-life/);
    assert.match(immersive,/#quick-access-section/);
    assert.match(immersive,/backdrop-filter:blur\(12px\)/);
    assert.ok(menu.indexOf('css/japeak-menu-immersive.css?v=20261122-10')>menu.indexOf('css/japeak-v5.css'));
    assert.match(menu,/id="jpk-menu-header"/);
    assert.match(menu,/id="jpk-menu-school" onclick="enterWorkspace\('school'\)"/);
    assert.match(menu,/id="jpk-menu-life" onclick="enterWorkspace\('life'\)"/);
    assert.match(menu,/id="quick-tab-favorites"/);
    assert.match(menu,/id="quick-tab-recent"/);
    assert.match(menu,/id="menu-lang-select"/);
    assert.doesNotMatch(menu,/id="btn-top-back"/);
});


test('v11 PC and tablet menu leaves photo unobstructed and places three courses on the right',()=>{
    const css=read('css/japeak-menu-photo-rail-v11.css');
    const body=css.slice(css.indexOf('body.japeak-stage3-menu{'),css.indexOf('/* Remove the previous heavy darkening:'));
    const photo=css.slice(css.indexOf('body.japeak-stage3-menu::before{'),css.indexOf('body.japeak-stage3-menu #jpk-menu-header{'));
    assert.match(body,/display:grid!important/);
    assert.match(body,/grid-template-columns:minmax\(0,1fr\)/);
    assert.match(photo,/rgba\(8,27,42,\.015\)/);
    assert.match(photo,/japeak-bg-landscape\.webp/);
    assert.match(css,/japeak-bg-portrait\.webp/);
    assert.match(css,/#gate-container\{\s*grid-column:2;/);
    assert.match(css,/#quick-access-section\{\s*grid-column:2;grid-row:3;/);
    assert.match(css,/#japeak-info-footer\{\s*grid-column:2;grid-row:5;/);
    assert.match(css,/#jpk-menu-my\{\s*grid-column:1\/-1;/);
    assert.match(css,/@media\(max-width:720px\)/);
    assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
    assert.ok(menu.indexOf('css/japeak-menu-photo-rail-v11.css?v=20261123-11')>menu.indexOf('css/japeak-menu-immersive.css'));
    assert.match(menu,/id="jpk-menu-header"/);
    assert.match(menu,/class="jpk-menu-brand" href="japeak-top.html"/);
    assert.match(menu,/class="jpk-menu-brand-title"/);
    assert.match(menu,/class="jpk-menu-actions/);
    assert.doesNotMatch(menu,/id="btn-top-back"/);
    assert.match(menu,/id="jpk-menu-my" href="japeak-my.html"/);
    assert.match(menu,/id="jpk-menu-school" onclick="enterWorkspace\('school'\)"/);
    assert.match(menu,/id="jpk-menu-life" onclick="enterWorkspace\('life'\)"/);
    assert.match(menu,/id="quick-access-section"/);
    assert.match(menu,/id="japeak-info-footer"/);
    assert.doesNotMatch(menu,/Japeak Support Center/);
    assert.match(menu,/安心して日本語を学ぶために/);
    for(const action of ['trouble','terms','privacy','developer']){
      assert.match(menu,new RegExp("openJapeakInfoModal\\('"+action+"'\\)"));
    }
});

test('v11 My Lessons card respects UI language and preserves creation route',()=>{
    const js=read('js/japeak-menu-main.js');
    assert.match(menu,/japeak-my-i18n\.js\?v=20261122-1/);
    assert.match(js,/window\.JapeakMyI18n/);
    assert.match(js,/myLink\.href = 'japeak-my\.html\?lang='/);
    assert.match(js,/myText\?\.t\(menuLang, 'my'\)/);
    assert.match(js,/myText\?\.t\(menuLang, 'create'\)/);
    assert.match(js,/menuLang === 'ja' \? '安心して日本語を学ぶために'/);
    assert.ok(menu.indexOf('js/japeak-my-i18n.js')<menu.indexOf('js/japeak-menu-main.js?v=20261123-11'));
});
