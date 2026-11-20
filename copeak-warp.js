/* Copeak dashboard cinematic navigation.
 * Intercepts only the main dashboard/page navigation, replays the original click
 * after the warp covers the page, and never touches speech/recording/scoring.
 */
(function (root) {
  'use strict';
  const NAV_SELECTOR = [
    '#copeakHomeHub .cp-home-cards [data-cp-action]',
    '#copeakHomeHub .cp-home-bottom [data-cp-action]',
    '#copeakHomeHub .cp-home-bottom a.cp-nav-ncc',
    '#homeScreen .cp-page [data-page-go]',
    '#copeakLegacyBack[data-cp-action="home"]'
  ].join(',');
  const SWITCH_MS = 300;
  const DURATION_MS = 690;
  const COLORS = {
    read:'#4ad9ff',create:'#29efc4',sound:'#ffd46b',
    vocabulary:'#c3a0ff',home:'#4ad9ff',info:'#c3a0ff',
    ncc:'#ffd46b',menu:'#c3a0ff'
  };
  let running = false;
  let replaying = false;
  let activeLayer = null;
  let activeOrigin = null;
  let activeExit = null;
  let activeEnter = null;

  function reducedMotion() {
    try { return root.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true; }
    catch (_) { return false; }
  }
  function visiblePanel() {
    const home = document.getElementById('homeScreen');
    if (!home) return null;
    const pages = home.querySelectorAll('.cp-page:not([hidden])');
    if (pages.length) return pages[0];
    const hub = document.getElementById('copeakHomeHub');
    return hub && !hub.hidden ? hub : null;
  }
  function modeFor(target) {
    return target?.dataset?.cpAction || target?.dataset?.pageGo ||
      (target?.matches?.('.cp-nav-ncc') ? 'ncc' : '') || '';
  }
  function samePageAction(target) {
    const action = modeFor(target);
    const home = document.getElementById('homeScreen');
    const activePage = visiblePanel();
    if (action === 'home' && activePage?.id === 'copeakHomeHub' && home?.classList?.contains('cp-dashboard-mode')) return true;
    if (action === 'read' && activePage?.id === 'cpReaderPage') return true;
    if (action === 'create' && activePage?.id === 'cpCreatorPage') return true;
    return false;
  }
  function eligible(event, target) {
    if (!target || target.disabled || reducedMotion()) return false;
    if (event.button !== undefined && event.button !== 0) return false;
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return false;
    if (target.tagName === 'A' &&
        (target.hasAttribute?.('download') || (target.target && target.target !== '_self'))) return false;
    return !samePageAction(target);
  }
  function cleanup() {
    activeLayer?.remove();
    activeOrigin?.classList?.remove('cp-warp-origin');
    activeExit?.classList?.remove('cp-warp-exit');
    activeEnter?.classList?.remove('cp-warp-enter');
    activeLayer = activeOrigin = activeExit = activeEnter = null;
    document.documentElement.classList.remove('cp-warp-in-flight');
    running = false;
  }
  function click(event) {
    if (replaying) return;
    const target = event.target?.closest?.(NAV_SELECTOR);
    if (running) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    if (!eligible(event,target)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    running = true;

    const bounds = target.getBoundingClientRect();
    const x = event.detail === 0 || !Number.isFinite(event.clientX) || !event.clientX
      ? bounds.left+bounds.width/2 : event.clientX;
    const y = event.detail === 0 || !Number.isFinite(event.clientY) || !event.clientY
      ? bounds.top+bounds.height/2 : event.clientY;
    const layer = document.createElement('div');
    layer.className = 'cp-warp-layer';
    layer.setAttribute('aria-hidden','true');
    layer.style.setProperty('--cp-warp-x',x+'px');
    layer.style.setProperty('--cp-warp-y',y+'px');
    layer.style.setProperty('--cp-warp-hue',COLORS[modeFor(target)] || '#4ad9ff');
    document.body.appendChild(layer);
    document.documentElement.classList.add('cp-warp-in-flight');
    activeLayer = layer;
    activeOrigin = target;
    activeOrigin.classList.add('cp-warp-origin');
    activeExit = visiblePanel();
    if (activeExit) {
      const r = activeExit.getBoundingClientRect();
      activeExit.style.setProperty('--cp-warp-origin-x',(x-r.left)+'px');
      activeExit.style.setProperty('--cp-warp-origin-y',(y-r.top)+'px');
      activeExit.classList.add('cp-warp-exit');
    }

    root.setTimeout(() => {
      // The existing Copeak home/page controllers and standard links still
      // perform all routing. The warp does not replace or duplicate them.
      replaying = true;
      try { if (target.isConnected !== false) target.click(); }
      finally { replaying = false; }
      const destination = visiblePanel();
      if (destination && destination !== activeExit) {
        activeEnter = destination;
        destination.classList.add('cp-warp-enter');
      }
    }, SWITCH_MS);
    root.setTimeout(cleanup, DURATION_MS+60);
  }

  document.addEventListener('click',click,true);
  root.addEventListener?.('pagehide',cleanup);
  root.CopeakWarpNavigation = { reducedMotion, get active(){return running;} };
})(window);
