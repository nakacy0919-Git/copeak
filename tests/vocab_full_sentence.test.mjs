import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=fs.readFileSync(path.join(root,'vocabulary-check.js'),'utf8');
const start=source.indexOf('  function highlightReview(target,item){');
const end=source.indexOf('\n  function resetReadingFeedback()',start);
assert(start>=0 && end>start,'Review rendering function must be present');
const code=source.slice(start,end);
const document={
  createTextNode(text){return {textContent:String(text)}},
  createElement(tag){return {tagName:tag,textContent:''}}
};
const highlightReview=new Function('document',code+'\nreturn highlightReview;')(document);
function display(item){
 const nodes=[];
 const target={
   replaceChildren(...values){nodes.splice(0,nodes.length,...values)},
   append(...values){nodes.push(...values)},
   appendChild(value){nodes.push(value)}
 };
 Object.defineProperty(target,'textContent',{
   get(){return nodes.map(x=>x.textContent).join('')},
   set(value){target.replaceChildren({textContent:String(value)})}
 });
 highlightReview(target,item);
 return {value:target.textContent,nodes};
}
const example='Try to keep a promise even when it becomes difficult.';
const output=display({example_en:example,highlight_en:'keep a promise'});
assert.equal(output.value,example,'The suffix after the highlighted phrase must remain visible');
assert.equal(output.nodes.length,3,'Prefix, highlighted focus and suffix are all rendered');
assert.equal(output.nodes[2].textContent,' even when it becomes difficult.');
const examples=[
  {example_en:'We ride the subway to the city center.',highlight_en:'ride the subway'},
  {example_en:'I always keep a promise.',highlight_en:'keep a promise'},
  {example_en:'Keep a promise even when it is hard.',highlight_en:'Keep a promise'},
  {example_en:'Hello world.',highlight_en:'not here'}
];
for(const item of examples)assert.equal(display(item).value,item.example_en);
console.log('PASS: review renders the full English sentence after highlighting');
