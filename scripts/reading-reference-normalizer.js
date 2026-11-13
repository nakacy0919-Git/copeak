/* Draft authoring helper: repair only verifiable source locations.
   Never creates translations, answers, or unsourced facts. */
'use strict';
function normalizeReferences(d){
 const text=d.p.flat().map(s=>s[0]).join(' ');
 for(const entry of d.g||[]){
   const [pid,,focus]=entry;
   const index=Number(pid.slice(1))-1;
   let s=d.p[index]?.[entry[1]]?.[0];
   if(s?.includes(focus))continue;
   const other=d.p[index]?.findIndex(x=>x[0].includes(focus));
   if(other>=0){entry[1]=other;continue;}
   throw Error('Unmatched grammar '+pid+' '+focus);
 }
 for(const entry of d.para||[]){
   if(text.includes(entry[0]))continue;
   const index=text.toLowerCase().indexOf(entry[0].toLowerCase());
   if(index>=0){entry[0]=text.slice(index,index+entry[0].length);continue;}
   throw Error('Unmatched paraphrase '+entry[0]);
 }
 return d;
}
