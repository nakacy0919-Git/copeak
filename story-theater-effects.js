/* Copeak Story Theater: cinematic carousel and twinkling stars.
   Independent of the reading player and progress database. */
(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const host = $('storyCards'), shell = $('storyCarousel');
  const previous = $('storyCarouselPrev'), next = $('storyCarouselNext');
  const footer = $('storyCarouselFooter'), dots = $('storyCarouselDots'), toggle = $('storyCarouselToggle');
  if (!host || !shell || !previous || !next || !footer || !dots || !toggle) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let cards = [], current = 0, timer = null, manuallyPaused = false, hovered = false, focusWithin = false;
  const enabled = () => cards.length >= 3;
  function setPositions() {
    if (!enabled()) return;
    const count = cards.length;
    cards.forEach((card, index) => {
      const relative = (index - current + count) % count;
      const position = relative === 0 ? 'center' : relative === 1 ? 'next' : relative === count - 1 ? 'prev' : 'off';
      card.dataset.carouselPosition = position;
      const invisible = position === 'off';
      card.setAttribute('aria-hidden', String(invisible));
      card.setAttribute('aria-current', String(position === 'center'));
      card.tabIndex = invisible ? -1 : 0;
    });
    dots.querySelectorAll('button').forEach((dot, index) => {
      const selected = index === current;
      dot.classList.toggle('is-current', selected);
      dot.setAttribute('aria-current', String(selected));
      dot.setAttribute('aria-label', (index + 1) + '番目の作品' + (selected ? 'を表示中' : 'を表示'));
    });
  }
  function rotateTo(index) {
    if (!enabled()) return;
    current = (index + cards.length) % cards.length;
    setPositions();
  }
  function syncRotation() {
    if (timer !== null) { clearInterval(timer); timer = null; }
    if (!enabled() || manuallyPaused || hovered || focusWithin || document.hidden || reducedMotion.matches) return;
    timer = setInterval(() => {
      if (!$('catalogView').hidden) rotateTo(current + 1);
    }, 6500);
  }
  function refresh() {
    const latest = [...host.querySelectorAll(':scope > .st-card')];
    if (!latest.length) { cards = []; syncRotation(); return; }
    const oldId = cards[current] && cards[current].dataset.storyId;
    cards = latest;
    current = Math.max(0, cards.findIndex(card => card.dataset.storyId === oldId));
    const active = enabled();
    host.dataset.carousel = active ? 'on' : 'off';
    shell.dataset.carousel = active ? 'on' : 'off';
    previous.hidden = next.hidden = footer.hidden = !active;
    cards.forEach(card => {
      if (!active) {
        delete card.dataset.carouselPosition;
        card.removeAttribute('aria-hidden');
        card.removeAttribute('aria-current');
        card.tabIndex = 0;
      }
    });
    dots.replaceChildren();
    if (active) {
      cards.forEach((card, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'st-carousel-dot';
        dot.addEventListener('click', () => { rotateTo(index); syncRotation(); });
        dots.append(dot);
      });
      setPositions();
    }
    syncRotation();
  }
  new MutationObserver(refresh).observe(host, { childList: true });
  refresh();
  previous.addEventListener('click', () => { rotateTo(current - 1); syncRotation(); });
  next.addEventListener('click', () => { rotateTo(current + 1); syncRotation(); });
  toggle.addEventListener('click', () => {
    manuallyPaused = !manuallyPaused;
    toggle.setAttribute('aria-pressed', String(manuallyPaused));
    toggle.textContent = manuallyPaused ? '▶ 自動回転を再開' : 'Ⅱ 自動回転を停止';
    syncRotation();
  });
  shell.addEventListener('pointerenter', () => { hovered = true; syncRotation(); });
  shell.addEventListener('pointerleave', () => { hovered = false; syncRotation(); });
  shell.addEventListener('focusin', () => { focusWithin = true; syncRotation(); });
  shell.addEventListener('focusout', () => {
    requestAnimationFrame(() => { focusWithin = shell.contains(document.activeElement); syncRotation(); });
  });
  document.addEventListener('visibilitychange', syncRotation);
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', syncRotation);
  const stars = $('storyStarfield');
  if (stars) {
    const fragment = document.createDocumentFragment();
    let seed = 20261119;
    function rand() {
      seed = (1664525 * seed + 1013904223) >>> 0;
      return seed / 4294967296;
    }
    for (let i = 0; i < 44; i++) {
      const star = document.createElement('i');
      star.className = 'st-story-star' + (i % 9 === 0 ? ' st-story-star-cross' : '');
      star.style.setProperty('--st-x', (5 + rand() * 90).toFixed(2) + '%');
      star.style.setProperty('--st-y', (7 + rand() * 87).toFixed(2) + '%');
      star.style.setProperty('--st-size', (1 + rand() * 1.9).toFixed(2) + 'px');
      star.style.setProperty('--st-duration', (3.8 + rand() * 8).toFixed(2) + 's');
      star.style.setProperty('--st-delay', (-rand() * 13).toFixed(2) + 's');
      fragment.append(star);
    }
    stars.append(fragment);
  }
})();
