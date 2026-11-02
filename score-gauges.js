/* Progressive enhancement for Copeak's reading-result screen.
   The original numeric nodes are never animated or rewritten because
   Classroom reads them to submit final scores. */
(function () {
  'use strict';
  function init() {
    const board = document.getElementById('resultScoreBoard');
    const surface = document.getElementById('scoreSummaryRow');
    if (!board || !surface || !surface.classList.contains('cp-score-surface')) return;
    const captions = {
      accuracy: surface.querySelector('[data-score-caption="accuracy"]'),
      wpm: surface.querySelector('[data-score-caption="wpm"]'),
      performance: surface.querySelector('[data-score-caption="performance"]')
    };
    const groups = [
      {key:'accuracy',element:document.getElementById('bigAccValue')},
      {key:'wpm',element:document.getElementById('bigWpmValue')},
      {key:'performance',element:document.getElementById('bigCompValue')}
    ];
    for (const g of groups) {
      g.card = surface.querySelector('[data-score-gauge="' + g.key + '"]');
      g.arc = g.card && g.card.querySelector('.cp-gauge-fill');
      g.halo = g.card && g.card.querySelector('.cp-gauge-halo');
      if (!g.element || !g.arc || !g.halo) return;
      g.current = 0;
      g.animation = 0;
    }
    const celebrationLayer = surface.querySelector('.cp-score-celebration-layer');
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    let lastSignature = null;
    let pending = 0;
    let clearingCelebration = 0;
    const parse = element => {
      const n = Number(String(element.textContent || '').replace(/[^\d.-]/g,''));
      return Number.isFinite(n) ? Math.max(0,n) : 0;
    };
    const clamp = n => Math.min(100,Math.max(0,n));
    const goal = () => {
      try {
        const n = typeof targetWpm !== 'undefined' ? Number(targetWpm) : 120;
        return Number.isFinite(n) && n > 0 ? n : 120;
      } catch (_) {return 120;}
    };
    const shown = () => window.getComputedStyle(board).display !== 'none';
    function animate(group,pct) {
      const to = clamp(pct);
      if (group.animation) cancelAnimationFrame(group.animation);
      const from = group.current;
      const duration = 1050;
      const time = performance.now();
      const draw = value => {
        const a = Math.max(0,Math.min(100,value));
        group.arc.setAttribute('stroke-dasharray',a.toFixed(2)+' 100');
        group.halo.setAttribute('stroke-dasharray',a.toFixed(2)+' 100');
        group.current = a;
      };
      if (reduceMotion && reduceMotion.matches) {draw(to);return;}
      function frame(now) {
        const t = Math.min(1,(now-time)/duration);
        const eased = 1-Math.pow(1-t,3);
        draw(from+(to-from)*eased);
        group.animation = t<1 ? requestAnimationFrame(frame) : 0;
      }
      group.animation = requestAnimationFrame(frame);
    }
    function confetti() {
      if (!celebrationLayer || (reduceMotion && reduceMotion.matches)) return;
      celebrationLayer.replaceChildren();
      const colors = ['#7dd3fc','#5eead4','#fcd34d','#f9a8d4','#c4b5fd','#fff5d5'];
      const fragment = document.createDocumentFragment();
      for (let i=0;i<27;i++) {
        const piece = document.createElement('span');
        piece.className = 'cp-confetti-piece';
        piece.style.left = (30 + (i*17.9)%55)+'%';
        piece.style.setProperty('--cp-confetti-color',colors[i%colors.length]);
        piece.style.setProperty('--cp-confetti-drift',((i*53)%181-90)+'px');
        piece.style.setProperty('--cp-confetti-rotation',((i%2?1:-1)*(180+(i*41)%400))+'deg');
        piece.style.setProperty('--cp-confetti-delay',((i*29)%270)+'ms');
        fragment.appendChild(piece);
      }
      celebrationLayer.appendChild(fragment);
      window.setTimeout(()=>celebrationLayer.replaceChildren(),2700);
    }
    function celebrate(values,achievements) {
      if (clearingCelebration) clearTimeout(clearingCelebration);
      const qualified = [values[0]>=80,achievements[1]>=80,values[2]>=80];
      groups.forEach((g,i)=>{
        g.card.classList.remove('is-celebrating');
        void g.card.offsetWidth;
        if(qualified[i] && !(reduceMotion && reduceMotion.matches))g.card.classList.add('is-celebrating');
      });
      if(values[2]>=80) confetti();
      clearingCelebration = window.setTimeout(() => {
        groups.forEach(g=>g.card.classList.remove('is-celebrating'));
        clearingCelebration = 0;
      },2200);
    }
    function updateCaptions(target) {
      const ja = (window.currentAppLang || document.documentElement.lang || 'ja').toLowerCase().startsWith('ja');
      captions.accuracy.textContent = ja ? '読みの正確さ' : 'Reading accuracy';
      captions.wpm.textContent = ja ? '語数／分 · 目標'+target : 'Words/min · goal '+target;
      captions.performance.textContent = ja ? '100点満点' : 'Score out of 100';
    }
    function update() {
      pending = 0;
      if (!shown()) {
        lastSignature = null;
        groups.forEach(g=>{if(g.animation)cancelAnimationFrame(g.animation);g.animation=0;g.current=0;g.arc.setAttribute('stroke-dasharray','0 100');g.halo.setAttribute('stroke-dasharray','0 100');});
        return;
      }
      const values=groups.map(g=>parse(g.element));
      const target=goal();
      const achievement=[clamp(values[0]),clamp(values[1]/target*100),clamp(values[2])];
      updateCaptions(target);
      const signature=values.join('|')+'|'+target;
      if(signature===lastSignature)return;
      lastSignature=signature;
      groups.forEach((g,i)=>{
        g.card.setAttribute('aria-label',
          g.key==='wpm'?'WPM '+values[i]+' (goal '+target+')':
          (g.key==='accuracy'?'Accuracy '+values[i]+'%':'Reading Performance '+values[i]+'/100'));
        animate(g,achievement[i]);
      });
      // Trigger celebration once per newly published final result.
      if(values.some(v=>v>0))celebrate(values,achievement);
    }
    function schedule() {
      if(!pending)pending=requestAnimationFrame(update);
    }
    groups.forEach(g=>{
      new MutationObserver(schedule).observe(g.element,{childList:true,characterData:true,subtree:true});
    });
    new MutationObserver(schedule).observe(board,{attributes:true,attributeFilter:['style','class']});
    schedule();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();