/* Context dictionary fallback: local authored entries first, then optional
   keyless English-Japanese single-word lookup, cached only in this browser.
   Third-party results are explicitly marked as auto-translated. */
(function(root){
 'use strict';
 const memory=Object.create(null),namespace='copeak-reading-word-v1:';
 const norm=x=>String(x||'').trim().toLowerCase().replace(/[’]/g,"'").replace(/^[^\p{L}]+|[^\p{L}]+$/gu,'');
 const bases=w=>{
  const out=[w],add=v=>{if(v&&!out.includes(v))out.push(v)};
  const irregular={went:'go',gone:'go',did:'do',done:'do',seen:'see',saw:'see',took:'take',taken:'take',made:'make',known:'know',knew:'know',gave:'give',given:'give',found:'find',thought:'think',brought:'bring',bought:'buy',children:'child',men:'man',women:'woman',teeth:'tooth',feet:'foot',better:'good',best:'good',worse:'bad',worst:'bad'};
  add(irregular[w]);
  if(w.endsWith('ies'))add(w.slice(0,-3)+'y');
  if(w.endsWith('es'))add(w.slice(0,-2));
  if(w.endsWith('s'))add(w.slice(0,-1));
  if(w.endsWith('ied'))add(w.slice(0,-3)+'y');
  if(w.endsWith('ed')){add(w.slice(0,-2));add(w.slice(0,-1));}
  if(w.endsWith('ing')){add(w.slice(0,-3));add(w.slice(0,-3)+'e');}
  if(w.endsWith('ly'))add(w.slice(0,-2));
  return out;
 };
 const cacheGet=k=>{
  if(memory[k])return memory[k];
  try{
   const value=JSON.parse(localStorage.getItem(namespace+k)||'null');
   if(value?.ja&&typeof value.ja==='string'&&value.ja.length<170){memory[k]=value;return value}
  }catch(_){}
  return null;
 };
 const cachePut=(k,v)=>{
  memory[k]=v;
  try{localStorage.setItem(namespace+k,JSON.stringify(v))}catch(_){}
 };
 function local(word,lesson,sets){
  const w=norm(word),keys=bases(w),corpus=[lesson,...(sets||[])].filter(Boolean);
  for(const key of keys){
   for(const l of corpus){
    const v=(l.vocabulary||[]).find(x=>norm(x.term)===key);
    if(v)return {term:v.term,ja:v.ja,definition:v.definition,synonym:v.synonym||'',source:'教材登録'};
   }
   const core=root.CopeakReadingLexicon?.[key];
   if(core)return {...core,source:'基本語彙'};
   const cached=cacheGet(key);
   if(cached)return {...cached,source:'オンライン取得済み'};
  }
  return null;
 }
 const pending=new Map();
 async function remote(word){
  const term=norm(word),existing=cacheGet(term);
  if(existing)return {...existing,source:'オンライン取得済み'};
  if(!/^[\p{L}]+(?:[-'][\p{L}]+)*$/u.test(term)||term.length>60)return null;
  if(pending.has(term))return pending.get(term);
  const promise=(async()=>{
   const ctrl=new AbortController();
   const timeout=setTimeout(()=>ctrl.abort(),4800);
   try{
    const jp=fetch('https://api.mymemory.translated.net/get?q='+encodeURIComponent(term)+'&langpair=en%7Cja',{signal:ctrl.signal,mode:'cors',cache:'no-store'})
     .then(r=>r.ok?r.json():null).then(data=>data?.responseStatus===200?String(data.responseData?.translatedText||'').trim():'').catch(()=>'');
    const en=fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(term),{signal:ctrl.signal,mode:'cors'})
     .then(r=>r.ok?r.json():null).then(data=>Array.isArray(data)?data.flatMap(e=>e.meanings||[]).flatMap(m=>m.definitions||[]).map(x=>x.definition).find(x=>typeof x==='string'&&x.length>=12&&x.length<350)||'':'').catch(()=>'');
    const [ja,definition]=await Promise.all([jp,en]);
    const safeJapanese=ja&&ja.length<170&&!/^MYMEMORY WARNING|QUERY LENGTH LIMIT/i.test(ja)?ja:'';
    if(!safeJapanese&&!definition)return null;
    const row={term,ja:safeJapanese||'',definition:definition||'',synonym:''};
    if(row.ja)cachePut(term,row);
    return {...row,source:'自動翻訳・要確認'};
   }finally{clearTimeout(timeout)}
  })();
  pending.set(term,promise);
  try{return await promise}finally{pending.delete(term)}
 }
 root.CopeakReadingDictionary=Object.freeze({local,remote,norm,bases});
})(window);