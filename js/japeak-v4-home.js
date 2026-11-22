/* V4 home only: background atmosphere + language preference. No redundant course modal. */
(function(){
  'use strict';
  const home=document.querySelector('.jpk-v4-home');
  if(!home||!window.JapeakV4Taxonomy)return;
  const select=document.getElementById('jpk-v4-lang');
  const langs=window.JapeakV4Taxonomy.languages;
  if(select){
    for(const item of langs){
      const option=document.createElement('option');
      option.value=item.code;
      option.textContent=item.name+(window.JapeakV4Taxonomy.extraLanguages.some(x=>x.code===item.code)?' / English fallback':'');
      select.appendChild(option);
    }
    try{select.value=localStorage.getItem('japeakLang')||'ja'}catch(e){select.value='ja'}
    if(!select.value)select.value='ja';
    // Change the headings, every entry button, and the helper copy immediately.
    window.JapeakTopI18n?.apply(select.value);
    select.addEventListener('change',()=>{
      try{localStorage.setItem('japeakLang',select.value)}catch(e){}
      window.JapeakTopI18n?.apply(select.value);
    });
  }
  const photograph=home.querySelector('.jpk-v4-photo img');
  if(photograph){
    const failed=()=>home.classList.add('jpk-v4-photo-error');
    photograph.addEventListener('error',failed);
    if(photograph.complete&&photograph.naturalWidth===0)failed();
  }
  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduce){
    const layer=document.createElement('div');
    layer.className='jpk-v4-atmosphere';layer.setAttribute('aria-hidden','true');
    home.appendChild(layer);
    for(let i=0;i<23;i++){
      const particle=document.createElement('i'),petal=i<13;
      particle.className=petal?'jpk-v4-petal':'jpk-v4-mote';
      particle.style.left=((i*41+11)%96)+'%';
      particle.style.top=petal?'0':((i*29+17)%94)+'%';
      particle.style.setProperty('--t',(10+i%9)+'s');
      particle.style.setProperty('--delay',-(i*1.8)+'s');
      particle.style.setProperty('--size',(5+i%6)+'px');
      layer.appendChild(particle);
    }
  }
})();
