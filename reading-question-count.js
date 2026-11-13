/* Copeak Study Reading Comprehension: exam-sized, deterministic question sets.
   All options are selected from authored questions. No invented items. */
(function(root){
 'use strict';
 const availableCounts=(total)=>{
   const max=Math.min(10,Math.max(0,Math.floor(Number(total)||0)));
   if(max<=0)return [];
   // Earlier authored passages may have only 4–6 questions. Always give a
   // shorter option when possible instead of offering a single inert choice.
   const counts=max>=7?[5,7,max]:max>=5?[3,5,max]:[Math.min(3,max),max];
   const result=[],seen=new Set();
   for(const count of counts){
     if(seen.has(count))continue;seen.add(count);
     const all=count===max;
     const label=all?(max===10?'徹底':'全問'):count<=3?'短め':count<=5?'標準':'じっくり';
     const description=all?'この長文の収録問題をすべて解く':
       count<=3?'短時間で要点を確認':count<=5?'入試に近い基本演習':'根拠・推論まで確認';
     result.push({count,label,description});
   }
   return result;
 };
 function select(lesson,requested){
   const bank=Array.isArray(lesson?.questions)?lesson.questions:[];
   const n=Math.max(0,Math.min(10,bank.length,Math.floor(Number(requested)||0)));
   if(n===0)return [];
   if(n>=bank.length)return bank.slice();
   const chosen=[],usedParas=new Set(),usedSkills=new Set();
   const pick=(entry)=>{chosen.push(entry);if(!/main.idea|main.topic|overall/i.test(entry.q.skill||'')){for(const pid of entry.q.paragraph_ids||[])usedParas.add(pid);}usedSkills.add(entry.q.skill||'other');};
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
