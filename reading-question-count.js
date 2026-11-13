/* Copeak Study Reading Comprehension: exam-sized, deterministic question sets.
   All options are selected from authored questions. No invented items. */
(function(root){
 'use strict';
 const availableCounts=(total)=>{
   const max=Math.min(10,Math.max(0,Number(total)||0));
   if(max<=0)return [];
   const source=[Math.min(5,max),Math.min(7,max),max];
   const names=['標準','じっくり','徹底'];
   const descriptions=['入試に近い基本演習','根拠・推論まで確認','本文を深く読み込む'];
   const result=[],seen=new Set();
   for(let i=0;i<source.length;i++){
     const count=source[i];
     if(seen.has(count))continue;
     seen.add(count);
     result.push({count,label:count===max&&max<5?'全問':names[i],
       description:count===max&&max<5?'収録済みの問題に挑戦':descriptions[i]});
   }
   return result;
 };
 function select(lesson,requested){
   const bank=Array.isArray(lesson?.questions)?lesson.questions:[];
   const n=Math.max(0,Math.min(10,bank.length,Math.floor(Number(requested)||0)));
   if(n===0)return [];
   if(n>=bank.length)return bank.slice();
   const chosen=[],usedParas=new Set(),usedSkills=new Set();
   const pick=(entry)=>{chosen.push(entry);for(const pid of entry.q.paragraph_ids||[])usedParas.add(pid);usedSkills.add(entry.q.skill||'other');};
   const indexed=bank.map((q,i)=>({q,i}));
   const main=indexed.find(v=>/main.idea|main.topic|overall/i.test(v.q.skill||''));
   if(main)pick(main);
   while(chosen.length<n){
     let best=null,bestScore=-Infinity;
     for(const item of indexed){
       if(chosen.includes(item))continue;
       const pids=item.q.paragraph_ids||[];
       const uncovered=pids.filter(p=>!usedParas.has(p)).length;
       const skill=item.q.skill||'other';
       // A broad "main idea" item may cite many paragraphs; do not allow it
       // to crowd out precise detail/inference evidence from other paragraphs.
       const single=pids.length===1;
       const novelty=uncovered>0?Math.min(2,uncovered)*12:0;
       const categoryNovel=!usedSkills.has(skill)?10:0;
       const inference=/inference|purpose|attitude/i.test(skill)?3:0;
       const content=/detail|fact|data.interpretation/i.test(skill)?2:0;
       const vocab=/vocabulary|paraphrase|discourse/i.test(skill)?-2:0;
       const proximity=chosen.length?Math.min(...chosen.map(other=>Math.abs(other.i-item.i))):bank.length;
       const score=novelty+categoryNovel+inference+content+vocab+(single?3:0)+Math.min(7,proximity)+item.i/(bank.length*100);
       if(score>bestScore){bestScore=score;best=item;}
     }
     if(!best)break;
     pick(best);
   }
   return chosen.sort((a,b)=>a.i-b.i).map(x=>x.q);
 }
 root.CopeakReadingQuestionCount=Object.freeze({availableCounts,select});
})(window);
