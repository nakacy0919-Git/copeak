/* Copeak Voice Horizon — decorative, non-interactive motion layer.
   Existing learning routes, forms and score tracking are not touched. */
(() => {
  'use strict';

  function installVoiceAtmosphere() {
    const home = document.getElementById('homeScreen');
    const hub = document.getElementById('copeakHomeHub');
    if (!home || !hub || document.getElementById('cpVoiceAtmosphere')) return;

    const scene = document.createElement('div');
    scene.id = 'cpVoiceAtmosphere';
    scene.className = 'cp-voice-atmosphere';
    scene.setAttribute('aria-hidden', 'true');
    scene.innerHTML = '<div class="cp-fx-aura"></div><div class="cp-fx-waves"><canvas class="cp-fx-wave-canvas"></canvas></div><div class="cp-fx-stars"></div><div class="cp-fx-shooting-stars"></div>';
    home.insertBefore(scene, hub);

    const stars = scene.querySelector('.cp-fx-stars');
    const meteors = scene.querySelector('.cp-fx-shooting-stars');
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 39; i++) {
      const sparkle = document.createElement('span');
      sparkle.className = 'cp-fx-star' + (i % 5 === 0 ? ' cp-fx-star-gold' : '');
      sparkle.style.setProperty('--x', ((i * 67 + 7) % 97 + 1) + '%');
      sparkle.style.setProperty('--y', ((i * 37 + 13) % 70 + 2) + '%');
      sparkle.style.setProperty('--size', (i % 7 === 0 ? 4 : i % 3 === 0 ? 3 : 2) + 'px');
      sparkle.style.setProperty('--delay', (-((i * 13) % 97) / 9).toFixed(2) + 's');
      sparkle.style.setProperty('--duration', (5.5 + ((i * 11) % 29) / 10).toFixed(1) + 's');
      fragment.appendChild(sparkle);
    }
    stars.appendChild(fragment);

    for (let i = 0; i < 4; i++) {
      const star = document.createElement('span');
      star.className = 'cp-fx-meteor';
      star.style.setProperty('--x', (64 + (i * 11) % 28) + '%');
      star.style.setProperty('--y', (7 + i * 7) + '%');
      star.style.setProperty('--delay', (-i * 6.2 - 2) + 's');
      star.style.setProperty('--duration', (22 + i * 3) + 's');
      meteors.appendChild(star);
    }

    const canvas = scene.querySelector('canvas');
    const context = canvas.getContext('2d', {alpha:true});
    if (!context) return;
    const area = scene.querySelector('.cp-fx-waves');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0, height = 0, ratio = 1;
    let animationFrame = null, start = null, lastDraw = 0;

    function resize() {
      const box = area.getBoundingClientRect();
      width = Math.max(1, box.width);
      height = Math.max(1, box.height);
      ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio,0,0,ratio,0,0);
      draw(0);
    }

    const TAU = Math.PI * 2;
    function draw(seconds) {
      const ctx = context;
      ctx.clearRect(0,0,width,height);
      if (width < 1 || height < 1) return;

      const flow = seconds * 0.21;
      const step = Math.max(5,Math.floor(width / 230));
      const bands = [
        {color:'cyan',base:0.47,phase:0.15,travel:0.78,lines:29},
        {color:'gold',base:0.55,phase:1.2,travel:0.65,lines:26},
        {color:'ice',base:0.58,phase:2.15,travel:0.83,lines:16}
      ];

      for (const band of bands) {
        const gradient = ctx.createLinearGradient(0,0,width,0);
        if (band.color === 'gold') {
          gradient.addColorStop(0,'rgba(255,208,89,0.04)');
          gradient.addColorStop(.22,'rgba(255,230,147,0.32)');
          gradient.addColorStop(.55,'rgba(255,203,89,0.53)');
          gradient.addColorStop(.84,'rgba(255,233,169,0.38)');
          gradient.addColorStop(1,'rgba(255,209,100,0.06)');
        } else {
          gradient.addColorStop(0,'rgba(0,210,255,0.04)');
          gradient.addColorStop(.18,'rgba(57,222,255,0.46)');
          gradient.addColorStop(.53,'rgba(124,233,255,0.48)');
          gradient.addColorStop(.82,'rgba(23,191,255,0.45)');
          gradient.addColorStop(1,'rgba(37,220,255,0.05)');
        }
        for (let line = 0; line < band.lines; line++) {
          const n = (line / Math.max(1,band.lines-1)) - 0.5;
          const highlight = (line % 11 === 0);
          ctx.beginPath();
          for (let x=0; x<=width+step; x+=step) {
            const u = x / width;
            const envelope = Math.pow(Math.sin(Math.PI * Math.min(1,Math.max(0,u))),0.6);
            const primary = Math.sin(u * TAU * 2.1 - flow * band.travel + band.phase);
            const secondary = Math.sin(u * TAU * 3.9 + flow * .5 + band.phase * .5);
            const amplitude = height * (0.17 + 0.035 * secondary);
            const curvature = primary * amplitude;
            const strand = n * height * (0.35 + .23 * Math.cos(u*TAU*1.65 + flow*0.46 + band.phase));
            const narrow = Math.sin(u*TAU*7.3 - flow*.9 + band.phase + n*3) * height * 0.009;
            const y = height*band.base + curvature + strand*envelope + narrow;
            if (x === 0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
          }
          ctx.lineWidth = highlight ? 1.4 : 0.6;
          ctx.globalAlpha = (highlight ? 0.76 : 0.36) * (1 - Math.abs(n)*.60);
          ctx.strokeStyle = gradient;
          if (highlight) {
            ctx.shadowBlur = 9;
            ctx.shadowColor = band.color === 'gold' ? 'rgba(255,203,91,.88)' : 'rgba(31,207,255,.95)';
          }
          ctx.stroke();
          if (highlight) ctx.shadowBlur = 0;
        }
      }
      ctx.globalAlpha = 1;
    }

    function isVisible() {
      return !document.hidden && !hub.hidden
        && home.classList.contains('active')
        && home.classList.contains('cp-dashboard-mode')
        && !home.classList.contains('cp-section-mode');
    }

    function frame(timestamp) {
      if (!isVisible() || reducedMotion.matches) {animationFrame=null;return;}
      if (start === null) start=timestamp;
      if (timestamp-lastDraw >= 33) {
        draw((timestamp-start)/1000);
        lastDraw=timestamp;
      }
      animationFrame = requestAnimationFrame(frame);
    }
    function sync() {
      const active = isVisible() && !reducedMotion.matches;
      scene.classList.toggle('cp-fx-paused', !active);
      if (active && animationFrame===null) {
        start=null;
        animationFrame=requestAnimationFrame(frame);
      } else if (!active && animationFrame!==null) {
        cancelAnimationFrame(animationFrame);
        animationFrame=null;
      }
      if (reducedMotion.matches) draw(0);
    }

    if ('ResizeObserver' in window) {
      const observer=new ResizeObserver(resize);
      observer.observe(area);
    } else window.addEventListener('resize',resize,{passive:true});
    document.addEventListener('visibilitychange',sync);
    const observer = new MutationObserver(sync);
    observer.observe(home,{attributes:true,attributeFilter:['class','style']});
    observer.observe(hub,{attributes:true,attributeFilter:['hidden']});
    if (typeof reducedMotion.addEventListener==='function') reducedMotion.addEventListener('change',sync);
    resize();
    sync();
  }

  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',installVoiceAtmosphere);
  else installVoiceAtmosphere();
})();
