import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const html=read('grammar-training.html'),code=read('grammar-training.js');
const css=read('grammar-premium-buttons.css'),source=read('grammar-card-icons.js');
const el=(tag)=>({tag,attrs:{},children:[],setAttribute(k,v){this.attrs[k]=v},append(child){this.children.push(child)}});
const window={};
vm.runInNewContext(source,{window,document:{createElementNS:(ns,tag)=>el(tag)}});
const icons=window.CopeakGrammarCardIcons;
assert(icons,'grammar card icon module loads');
for(const [name,icon] of [['関係代名詞','link'],['不定詞','link'],['動名詞','infinity'],['受動態','shield'],['時制','clock'],['比較','scales'],['分詞','crown'],['中1','book']]){
 assert.equal(icons.describe(name).icon,icon,name);
 const svg=icons.make(name,'A01');
 assert.equal(svg.tag,'svg');assert(svg.children.length>0,name+' must render SVG paths');
}
for(const asset of ['grammar-card-icons.js','grammar-premium-buttons.css']){
 assert(html.includes(asset),'missing '+asset+' link');
}
assert(html.indexOf('grammar-card-icons.js')<html.indexOf('grammar-training.js'),'icons must load before app');
assert(code.includes('gt-category-card gt-square-tile'),'square category buttons');
assert(code.includes('gt-unit-item gt-compact-tile'),'compact grammar topic buttons');
assert(code.includes('gt-pretty-arrow'),'completion/arrow indicator');
assert(code.includes("progressEngine.unit(state.progress.records,state.mode,unit.items)"),'progress history preserved');
assert(code.includes('const title=topicName(unit)'),'full topic title preserved');
for(const selector of ['.gt-square-tile','.gt-compact-tile','.gt-pretty-icon','.gt-compact-metrics','.gt-card-progress-rail'])
 assert(css.includes(selector),'missing CSS '+selector);
assert(css.includes('prefers-reduced-motion'),'reduced motion');
assert(css.includes('@media(max-width:650px)'),'narrow-screen fallback');
console.log('PASS: premium grammar square/compact button integration and semantic SVG icons');
