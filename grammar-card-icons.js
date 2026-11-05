/* Copeak grammar card icons — original inline SVG paths; no external asset requests. */
(function(root){
 'use strict';
 const ns='http://www.w3.org/2000/svg';
 const paths={
  book:['M12 7v14','M12 7C9.5 5.5 6 5 2 6v14c4-1 7.5-.5 10 1','M12 7c2.5-1.5 6-2 10-1v14c-4-1-7.5-.5-10 1'],
  link:['M10 13a5 5 0 0 0 7 .5l3-3a5 5 0 0 0-7-7l-1.7 1.7','M14 11a5 5 0 0 0-7-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7'],
  infinity:['M6 16c-2.5 0-4-2-4-4s1.5-4 4-4c4 0 8 8 12 8 2.5 0 4-2 4-4s-1.5-4-4-4c-4 0-8 8-12 8Z'],
  clock:['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18','M12 7v5l3.5 2'],
  shield:['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z','m9 12 2 2 4-4'],
  crown:['m2 8 5 4 5-8 5 8 5-4-2 12H4L2 8Z','M4 20h16'],
  scales:['M12 3v18','M5 7h14','M4 7l-3 5a4 4 0 0 0 6 0L4 7','M20 7l-3 5a4 4 0 0 0 6 0l-3-5','M8 21h8'],
  sparkles:['m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z','m19 17 .7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z'],
  layers:['m12 2 9 5-9 5-9-5 9-5Z','m3 12 9 5 9-5','m3 17 9 5 9-5'],
  shuffle:['m18 14 4 4-4 4','M2 18h3c6 0 7-12 14-12h3','m18 2 4 4-4 4','M2 6h3c2.5 0 4 2 5 4','M14 16c1.5 2 3 2 5 2h3'],
  network:['M12 4v4','M4 20h16','M4 15v5','M12 12v8','M20 15v5','M4 15h16','M4 15l8-7 8 7'],
  message:['M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4.5-1.2L3 20l1.3-4a8.5 8.5 0 1 1 16.7-4.5Z','M8 12h8'],
  target:['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18','M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10','M12 10v4','M10 12h4'],
  pen:['M4 20l4-1 11-11-3-3L5 16l-1 4Z','m14 6 3 3'],
  puzzle:['M8 3H3v6c3-1 4 0 4 2s-1 3-4 2v8h7c-1-3 0-4 2-4s3 1 2 4h7v-7c-3 1-4 0-4-2s1-3 4-2V3h-8c1 3 0 4-2 4S8 6 8 3Z'],
  check:['m5 12 5 5L20 7']
 };
 const rules=[
  [/中[１２３1-3]|英文法の基礎|基本文型|文型|構文/, 'book','blue','Sentence Structure'],
  [/関係副詞|関係詞|関係代名詞|who|whose|which/, 'link','indigo','Relative Clauses'],
  [/不定詞|to\s*不定詞/, 'link','purple','Infinitives'],
  [/動名詞|ing形/, 'infinity','cyan','Gerunds'],
  [/分詞/, 'crown','gold','Participles'],
  [/比較|最上級/, 'scales','blue','Comparatives'],
  [/受動態|受け身/, 'shield','violet','Passive Voice'],
  [/助動詞|can|must|may/, 'sparkles','indigo','Modal Verbs'],
  [/時制|過去|現在|未来|時を/, 'clock','orange','Tenses'],
  [/仮定法|条件/, 'shuffle','pink','Conditionals'],
  [/接続詞|等位/, 'network','blue','Conjunctions'],
  [/関係詞の応用|話法|発話/, 'message','pink','Grammar'],
  [/否定|疑問/, 'target','cyan','Questions'],
  [/形容詞|副詞/, 'sparkles','mint','Modifiers'],
  [/名詞|代名詞|冠詞/, 'book','indigo','Nouns'],
  [/前置詞/, 'network','teal','Prepositions']
 ];
 const fallback=['book','link','infinity','layers','shield','scales','sparkles','clock'];
 const tones=['blue','purple','cyan','gold','mint','pink','violet','orange'];
 function describe(title,id){
  for(const [pattern,icon,tone,english] of rules)if(pattern.test(String(title)))return {icon,tone,english};
  let i=Array.from(String(id||title)).reduce((sum,ch)=>sum+ch.charCodeAt(0),0)%fallback.length;
  return {icon:fallback[i],tone:tones[i],english:'Grammar Practice'};
 }
 function make(title,id){
  const info=describe(title,id),svg=document.createElementNS(ns,'svg');
  svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');
  svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.9');
  svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');
  svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
  for(const d of paths[info.icon]||paths.book){
   const path=document.createElementNS(ns,'path');path.setAttribute('d',d);svg.append(path);
  }
  return svg;
 }
 root.CopeakGrammarCardIcons=Object.freeze({describe,make});
})(window);
