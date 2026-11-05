/* Copeak Grammar Training core: pure helpers for browser and tests. */
(function(root,factory){'use strict';const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;if(root)root.CopeakGrammarCore=api;})(typeof window!=='undefined'?window:(typeof globalThis!=='undefined'?globalThis:null),function(){'use strict';
const STAGES=Object.freeze([{step:1,hide:0,threshold:80,label:'全文表示'},{step:2,hide:.25,threshold:90,label:'25%非表示'},{step:3,hide:.5,threshold:90,label:'50%非表示'},{step:4,hide:.75,threshold:95,label:'75%非表示'},{step:5,hide:1,threshold:100,label:'全文を思い出す'}]);
const LETTERS=['A','B','C','D'];
function normalizeQuestion(q){if(!q||typeof q!=='object')return null;const raw=q.options||q.choices;const options=Array.isArray(raw)?raw.slice(0,4):LETTERS.map(k=>raw&&raw[k]);const answer=String(q.answer||q.correct_answer||'').trim().toUpperCase(),answerIndex=LETTERS.indexOf(answer),stem=String(q.stem_en||q.question||'').trim(),sentence=String(q.answer_sentence_en||'').trim();if(!q.id||options.length!==4||options.some(v=>typeof v!=='string'||!v.trim())||answerIndex===-1||!stem||!sentence)return null;return{id:String(q.id),pointId:String(q.point_id||q.unit||''),categoryId:String(q.category_id||''),level:String(q.level||''),instruction:String(q.question_jp||''),stem,options,answerIndex,sentence,japanese:String(q.answer_sentence_jp||''),explanation:String(q.explanation_jp||''),rule:String(q.rule_jp||''),wrong:q.wrong_choice_explanations_jp||{},example:String(q.extra_example_en||''),exampleJa:String(q.extra_example_jp||''),subtopic:String(q.subtopic_jp||'')};}
function groupedQuestions(questions){const grouped=new Map();for(const raw of questions||[]){const q=normalizeQuestion(raw);if(!q)continue;if(!grouped.has(q.pointId))grouped.set(q.pointId,[]);grouped.get(q.pointId).push(q);}return grouped;}
function hideWords(sentence,step){
 const text=String(sentence||''),stage=STAGES[Math.min(5,Math.max(1,Number(step)||1))-1];
 if(!stage.hide||!text.trim())return text;
 const matches=[...text.matchAll(/[\p{L}\p{N}]+(?:[’'][\p{L}\p{N}]+)*/gu)];
 const count=stage.hide===1?matches.length:Math.max(1,Math.ceil(matches.length*stage.hide));
 const seed=[...text].reduce((h,ch)=>(Math.imul(h^ch.codePointAt(0),16777619)>>>0),2166136261);
 const ranks=matches.map((_,i)=>({i,weight:Math.imul((i+1)^seed,2654435761)>>>0})).sort((a,b)=>a.weight-b.weight||a.i-b.i);
 const hidden=new Set(ranks.slice(0,count).map(x=>x.i));let output='',cursor=0;
 for(let i=0;i<matches.length;i++){const m=matches[i];output+=text.slice(cursor,m.index)+(hidden.has(i)?'_____':m[0]);cursor=m.index+m[0].length;}
 return output+text.slice(cursor);
}
function stageCanAdvance(step,percent){return Number.isFinite(percent)&&percent>=STAGES[Math.min(5,Math.max(1,Number(step)||1))-1].threshold;}
function makeReading(raw){if(!raw)return null;const english=String(raw.english||raw.sentence||'').trim(),japanese=String(raw.japanese||raw.ja||'').trim();if(!english||!japanese||!raw.id)return null;return{id:String(raw.id),sentence:english,japanese,example:'',exampleJa:'',priority:String(raw.priority||'')};}
return Object.freeze({STAGES,LETTERS,normalizeQuestion,groupedQuestions,hideWords,stageCanAdvance,makeReading});});