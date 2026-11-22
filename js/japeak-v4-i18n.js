/* Extend the language picker without altering existing translation or scoring logic.
   Nine added languages use explicit English UI/lesson fallbacks until reviewed translations exist. */
(function(){
 'use strict';
 if(typeof langData==='undefined'||typeof uiDict==='undefined'||!window.JapeakV4Taxonomy)return;
 const known=new Set(langData.map(x=>x.code));
 window.JapeakV4Taxonomy.extraLanguages.forEach(x=>{
   if(known.has(x.code))return;
   langData.push({code:x.code,native:x.name,jp:x.name});
   const fallback=Object.assign({},uiDict.en);
   uiDict[x.code]=fallback;
   known.add(x.code);
 });
 const pick=document.getElementById('menu-lang-select');
 if(pick)window.JapeakV4Taxonomy.extraLanguages.forEach(x=>{
   if(pick.querySelector('option[value="'+x.code+'"]'))return;
   const option=document.createElement('option');option.value=x.code;option.textContent=x.name;pick.appendChild(option);
 });
})();
