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
  shell.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovered = true; syncRotation(); } });
  shell.addEventListener('pointerleave', event => { if (event.pointerType === 'mouse') { hovered = false; syncRotation(); } });
  shell.addEventListener('focusin', () => { focusWithin = true; syncRotation(); });
  shell.addEventListener('focusout', () => {
    requestAnimationFrame(() => { focusWithin = shell.contains(document.activeElement); syncRotation(); });
  });
  document.addEventListener('visibilitychange', syncRotation);
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', syncRotation);

  // A swipe rotates the library instead of accidentally opening a story.
  // touch-action:pan-y in CSS preserves vertical page scrolling on iOS/iPadOS.
  let gesture = null, suppressClickUntil = 0;
  shell.addEventListener('pointerdown', event => {
    if (!enabled() || (event.pointerType === 'mouse' && event.button !== 0)) return;
    if (event.target.closest('.st-carousel-arrow, .st-carousel-toggle, .st-carousel-dot')) return;
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, time: performance.now() };
  });
  document.addEventListener('pointerup', event => {
    if (!gesture || event.pointerId !== gesture.id) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    const elapsed = Math.max(1, performance.now() - gesture.time);
    gesture = null;
    // Reject vertical scrolling and tiny finger movement; accept deliberate swipes/flicks.
    const horizontal = Math.abs(dx) >= 34 &&
      Math.abs(dx) > Math.abs(dy) * 1.25 &&
      (Math.abs(dx) >= 56 || Math.abs(dx) / elapsed >= .24);
    if (horizontal && enabled() && !$('catalogView').hidden) {
      suppressClickUntil = performance.now() + 700;
      rotateTo(current + (dx < 0 ? 1 : -1));
      syncRotation();
    }
  });
  document.addEventListener('pointercancel', event => {
    if (gesture && event.pointerId === gesture.id) gesture = null;
  });
  // In the side positions, a tap brings the book into focus. A second tap opens it.
  shell.addEventListener('click', event => {
    const card = event.target.closest('.st-card');
    if (!card || !enabled()) return;
    if (performance.now() < suppressClickUntil) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    const selected = cards.indexOf(card);
    if (selected >= 0 && selected !== current) {
      event.preventDefault();
      event.stopImmediatePropagation();
      rotateTo(selected);
      syncRotation();
    }
  }, true);
  shell.addEventListener('keydown', event => {
    if (!enabled() || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    rotateTo(current + (event.key === 'ArrowRight' ? 1 : -1));
    syncRotation();
    cards[current]?.focus({ preventScroll: true });
  });

  const stars = $('storyStarfield');
  if (stars) {
    const fragment = document.createDocumentFragment();
    let seed = 20261119;
    function rand() {
      seed = (1664525 * seed + 1013904223) >>> 0;
      return seed / 4294967296;
    }
    const compact = window.matchMedia('(max-width: 590px)').matches;
    const starCount = reducedMotion.matches ? 34 : compact ? 74 : 116;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('i');
      star.className = 'st-story-star' + (i % 8 === 0 ? ' st-story-star-cross' : '') + (i % 5 === 0 ? ' st-story-mote' : '');
      star.style.setProperty('--st-x', (5 + rand() * 90).toFixed(2) + '%');
      star.style.setProperty('--st-y', (7 + rand() * 87).toFixed(2) + '%');
      star.style.setProperty('--st-size', ((i % 5 === 0 ? 2.3 : 1.2) + rand() * (i % 5 === 0 ? 3.1 : 2.3)).toFixed(2) + 'px');
      star.style.setProperty('--st-duration', (3.6 + rand() * 6.4).toFixed(2) + 's');
      star.style.setProperty('--st-delay', (-rand() * 16).toFixed(2) + 's');
      fragment.append(star);
    }
    stars.append(fragment);
  }
  const meteorSky = document.querySelector('.st-meteor-sky');
  if (meteorSky) {
    // Six differently timed trails, including the three existing decorative trails.
    while (meteorSky.children.length < 7) meteorSky.append(document.createElement('i'));
  }
})();
