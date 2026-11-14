/* Original Copeak Study reading authoring helper, batch 6. */
function makeBatch6(d, glossary, build) {
  const order = ["However","For example","In addition","Nevertheless"];
  const roles = [
    "本文冒頭の考えと、その例外・注意を対比します。",
    "前の考えを具体例で説明します。",
    "前の説明に新たな条件や視点を加えます。",
    "先に述べた利点と、残る限界や条件を対比します。"
  ];
  const dis=order.map((word,i)=>{
    const pIndex=d.p.findIndex(p=>p.some(s=>s[0].includes(word)));
    if (pIndex<0) throw Error(d.id+": connector absent from passage: "+word);
    return ["p"+(pIndex+1),word,roles[i],[word,...order.filter(w=>w!==word)]];
  });
  const q=d.q.map((item,i)=>{
    const [skill,prompt,correct,wrong1,wrong2,wrong3,why,evidence]=item;
    const options=[wrong1,wrong2,wrong3];
    const index=i%4;
    options.splice(index,0,correct);
    return [skill,prompt,options,index,why,evidence.map(n=>"p"+n)];
  });
  const g=d.g.map(([p,s,focus,why])=>["p"+p,s,focus,why]);
  const extra=(d.v||[]).map(([t,ja,syn,def])=>[t,ja,syn,def]);
  const x=build({
    id:d.id,title:d.title,ja:d.ja,level:d.level,sources:d.sources,notes:d.notes,
    p:d.p,q,g,dis,para:d.para,v:[...extra,...glossary]
  });
  return x;
}
