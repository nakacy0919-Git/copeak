/* Copeak image workspace v1 - presentation only, no recording/scoring changes */
(function () {
  "use strict";
  if (window.__copeakImageWorkspaceV1) return;
  window.__copeakImageWorkspaceV1 = true;

  var presets = { main: { wide: null, compact: null }, full: { wide: null, compact: null } };
  var zoom = { main: { level: 1, x: 0, y: 0, key: "" }, full: { level: 1, x: 0, y: 0, key: "" } };
  var lastImage = "";
  var pendingSync = false;
  var minZoom = 1, maxZoom = 3;
  var $ = function (id) { return document.getElementById(id); };
  var clamp = function (v, lo, hi) { return Math.max(lo, Math.min(hi, v)); };
  var mainCompact = function () { return window.innerWidth <= 899; };
  var fullCompact = function () { return window.innerWidth <= 767; };

  function makeButton(label, title, action) {
    var button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.title = title;
    button.setAttribute("aria-label", title);
    button.addEventListener("click", action);
    return button;
  }

  function applyZoom(which) {
    var img = which === "main" ? $("lessonSupportImage") : $("fsMemoImageDisplay");
    var state = zoom[which];
    if (!img) return;
    img.style.transform = "translate(" + state.x + "px," + state.y + "px) scale(" + state.level + ")";
    img.style.cursor = state.level > 1 ? "grab" : "default";
    var toolbar = $(which === "main" ? "copeak-main-image-tools" : "copeak-full-image-tools");
    if (!toolbar) return;
    var minus = toolbar.querySelector('[data-zoom="minus"]');
    var plus = toolbar.querySelector('[data-zoom="plus"]');
    var value = toolbar.querySelector(".copeak-zoom-value");
    if (minus) minus.disabled = state.level <= minZoom;
    if (plus) plus.disabled = state.level >= maxZoom;
    if (value) value.textContent = Math.round(state.level * 100) + "%";
  }

  function changeZoom(which, amount) {
    var state = zoom[which];
    state.level = clamp(Math.round((state.level + amount) * 10) / 10, minZoom, maxZoom);
    if (state.level === 1) { state.x = 0; state.y = 0; }
    applyZoom(which);
  }

  function bindPan(which, img) {
    if (!img || img.dataset.copeakPanBound) return;
    img.dataset.copeakPanBound = "1";
    img.draggable = false;
    var start = null;
    img.addEventListener("pointerdown", function (event) {
      if (zoom[which].level <= 1) return;
      start = { pageX: event.clientX, pageY: event.clientY, x: zoom[which].x, y: zoom[which].y };
      img.setPointerCapture(event.pointerId);
      img.style.cursor = "grabbing";
      event.preventDefault();
    });
    img.addEventListener("pointermove", function (event) {
      if (!start) return;
      var parent = img.parentElement.getBoundingClientRect();
      var limitX = parent.width * (zoom[which].level - 1) / 2;
      var limitY = parent.height * (zoom[which].level - 1) / 2;
      zoom[which].x = clamp(start.x + event.clientX - start.pageX, -limitX, limitX);
      zoom[which].y = clamp(start.y + event.clientY - start.pageY, -limitY, limitY);
      applyZoom(which);
    });
    function release() { start = null; applyZoom(which); }
    img.addEventListener("pointerup", release);
    img.addEventListener("pointercancel", release);
    img.addEventListener("lostpointercapture", release);
  }

  function createTools(which, container) {
    var id = which === "main" ? "copeak-main-image-tools" : "copeak-full-image-tools";
    var toolbar = $(id);
    if (!toolbar) {
      toolbar = document.createElement("div");
      toolbar.id = id;
      toolbar.className = "copeak-image-toolbar";
      toolbar.appendChild(makeButton("−", "画像を縮小", function () { changeZoom(which, -0.2); }));
      toolbar.lastElementChild.dataset.zoom = "minus";
      var value = document.createElement("span");
      value.className = "copeak-zoom-value";
      value.textContent = "100%";
      toolbar.appendChild(value);
      toolbar.appendChild(makeButton("+", "画像を拡大", function () { changeZoom(which, 0.2); }));
      toolbar.lastElementChild.dataset.zoom = "plus";
    }
    if (toolbar.parentElement !== container) container.appendChild(toolbar);
    applyZoom(which);
    return toolbar;
  }

  function defaultSplit(which, compact) {
    var img = $(which === "main" ? "lessonSupportImage" : "fsMemoImageDisplay");
    var aspect = img && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1;
    return compact ? (aspect > 1.3 ? 30 : aspect < 0.8 ? 50 : 39)
                   : (aspect > 1.3 ? 52 : aspect < 0.8 ? 36 : 44);
  }

  function applySplit(which) {
    var compact = which === "main" ? mainCompact() : fullCompact();
    var place = compact ? "compact" : "wide";
    var value = presets[which][place];
    if (value === null) value = defaultSplit(which, compact);
    var root = which === "main" ? $("learningContentArea") : $("fsImagePane") && $("fsImagePane").parentElement;
    if (!root) return;
    root.style.setProperty(which === "main"
      ? (compact ? "--copeak-main-image-height" : "--copeak-main-image-width")
      : (compact ? "--copeak-fs-image-height" : "--copeak-fs-image-width"), value + "%");
    var grip = $(which === "main" ? "copeak-main-image-grip" : "copeak-full-image-grip");
    if (grip) {
      grip.setAttribute("aria-orientation", compact ? "horizontal" : "vertical");
      grip.setAttribute("aria-valuenow", String(Math.round(value)));
    }
  }

  function setSplit(which, amount) {
    var compact = which === "main" ? mainCompact() : fullCompact();
    var place = compact ? "compact" : "wide";
    presets[which][place] = clamp(amount, 20, 76);
    applySplit(which);
  }

  function ensureGrip(which, imagePane, textPane) {
    if (!imagePane || !textPane || !imagePane.parentElement || imagePane.parentElement !== textPane.parentElement) return;
    var id = which === "main" ? "copeak-main-image-grip" : "copeak-full-image-grip";
    var grip = $(id);
    if (!grip) {
      grip = document.createElement("div");
      grip.id = id;
      grip.className = "copeak-image-grip";
      grip.setAttribute("role", "separator");
      grip.setAttribute("aria-label", "画像と英文の表示サイズを調整");
      grip.setAttribute("aria-valuemin", "20");
      grip.setAttribute("aria-valuemax", "76");
      grip.tabIndex = 0;
      grip.title = "ドラッグで画像と英文の幅を調整。ダブルクリックで初期化";
      grip.addEventListener("pointerdown", function (e) {
        if (e.button !== 0 && e.pointerType === "mouse") return;
        e.preventDefault();
        grip.setPointerCapture(e.pointerId);
        var onMove = function (move) {
          var root = grip.parentElement;
          if (!root) return;
          var rect = root.getBoundingClientRect();
          var compact = which === "main" ? mainCompact() : fullCompact();
          var value = compact ? ((move.clientY - rect.top) / rect.height) * 100
                              : ((move.clientX - rect.left) / rect.width) * 100;
          if (Number.isFinite(value)) setSplit(which, value);
        };
        var onEnd = function () {
          grip.removeEventListener("pointermove", onMove);
          grip.removeEventListener("pointerup", onEnd);
          grip.removeEventListener("pointercancel", onEnd);
        };
        grip.addEventListener("pointermove", onMove);
        grip.addEventListener("pointerup", onEnd);
        grip.addEventListener("pointercancel", onEnd);
      });
      grip.addEventListener("keydown", function (e) {
        var compact = which === "main" ? mainCompact() : fullCompact();
        var sign = compact ? (e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0)
                           : (e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0);
        if (!sign) return;
        e.preventDefault();
        var place = compact ? "compact" : "wide";
        setSplit(which, (presets[which][place] ?? defaultSplit(which, compact)) + sign * 3);
      });
      grip.addEventListener("dblclick", function () {
        presets[which][mainCompact() && which === "main" || fullCompact() && which === "full" ? "compact" : "wide"] = null;
        applySplit(which);
      });
    }
    if (grip.parentElement !== imagePane.parentElement || grip.nextElementSibling !== textPane) {
      imagePane.parentElement.insertBefore(grip, textPane);
    }
    applySplit(which);
  }

  function syncMain() {
    var pane = $("lessonSupportImagePane"), target = $("targetTextWrapper");
    var image = $("lessonSupportImage"), button = $("toggleLessonSupportImageBtn");
    if (!pane || !target || !image || !button) return;
    var available = document.body.classList.contains("support-image-available");
    var visible = document.body.classList.contains("support-image-visible");
    var card = target.firstElementChild;
    var header = card && card.firstElementChild;
    var left = header && header.firstElementChild;
    var right = header && header.lastElementChild;
    var preview = target.querySelector('button[onclick="openFullscreenPreview()"]');
    if (preview && right) {
      var slot = $("copeak-preview-slot");
      if (!slot) { slot = document.createElement("span"); slot.id = "copeak-preview-slot"; slot.className = "copeak-preview-slot"; }
      if (slot.parentElement !== right) right.insertBefore(slot, right.firstChild);
      if (preview.parentElement !== slot) slot.appendChild(preview);
    }
    if (!available) return;
    var imageHeader = pane.firstElementChild;
    if (!imageHeader || !left) return;
    var actions = $("copeak-main-image-actions");
    if (!actions) { actions = document.createElement("div"); actions.id = "copeak-main-image-actions"; actions.className = "copeak-image-toolbar"; }
    if (actions.parentElement !== imageHeader) imageHeader.appendChild(actions);
    var returnSlot = $("copeak-image-return");
    if (!returnSlot) { returnSlot = document.createElement("span"); returnSlot.id = "copeak-image-return"; }
    if (returnSlot.parentElement !== left) left.appendChild(returnSlot);
    var destination = visible ? actions : returnSlot;
    if (button.parentElement !== destination) destination.insertBefore(button, destination.firstChild);
    var imageKey = image.getAttribute("src") || "";
    if (imageKey !== lastImage) {
      lastImage = imageKey;
      zoom.main.level = 1; zoom.main.x = 0; zoom.main.y = 0;
      presets.main.wide = null; presets.main.compact = null;
    }
    if (!image.dataset.copeakRatioBound) {
      image.dataset.copeakRatioBound = "1";
      image.addEventListener("load", function () { applySplit("main"); applyZoom("main"); });
    }
    bindPan("main", image);
    createTools("main", actions);
    var area = $("learningContentArea");
    if (area) ensureGrip("main", pane, target);
    applyZoom("main");
    applySplit("main");
  }

  function syncFullscreen() {
    var overlay = $("fullscreenPreviewOverlay"), pane = $("fsImagePane");
    var target = $("fsTextPane"), image = $("fsMemoImageDisplay");
    if (!overlay || !pane || !target || !image || !image.getAttribute("src")) return;
    var content = pane.parentElement;
    if (!content) return;
    content.classList.add("copeak-fs-content");
    content.classList.toggle("copeak-fs-visible", Boolean(window.isFsImageShowing));
    var toolsHost = pane.querySelector(".copeak-full-image-tools-host");
    if (!toolsHost) { toolsHost = document.createElement("div"); toolsHost.className = "copeak-full-image-tools-host"; }
    var stage = pane.querySelector(".copeak-fs-image-stage");
    if (!stage) {
      stage = document.createElement("div");
      stage.className = "copeak-fs-image-stage";
      pane.appendChild(stage);
    }
    if (image.parentElement !== stage) stage.appendChild(image);
    if (toolsHost.parentElement !== pane) pane.insertBefore(toolsHost, stage);
    var key = image.getAttribute("src") || "";
    if (key !== zoom.full.key) {
      zoom.full.key = key;
      zoom.full.level = 1; zoom.full.x = 0; zoom.full.y = 0;
      presets.full.wide = null; presets.full.compact = null;
    }
    if (!image.dataset.copeakRatioBound) {
      image.dataset.copeakRatioBound = "1";
      image.addEventListener("load", function () { applySplit("full"); applyZoom("full"); });
    }
    bindPan("full", image);
    createTools("full", toolsHost);
    ensureGrip("full", pane, target);
    applySplit("full");
    applyZoom("full");
  }

  function queueSync() {
    if (pendingSync) return;
    pendingSync = true;
    requestAnimationFrame(function () {
      pendingSync = false;
      syncMain();
      syncFullscreen();
    });
  }

  function wrap(name, after) {
    var original = window[name];
    if (typeof original !== "function") return;
    window[name] = function () {
      var result = original.apply(this, arguments);
      after();
      return result;
    };
  }

  function start() {
    wrap("applyLessonSupportImage", queueSync);
    wrap("toggleLessonSupportImage", queueSync);
    wrap("openFullscreenPreview", queueSync);
    wrap("toggleFsMemoImage", queueSync);
    var originalButton = $("toggleLessonSupportImageBtn");
    if (originalButton && typeof window.toggleLessonSupportImage === "function")
      originalButton.onclick = window.toggleLessonSupportImage;
    var observer = new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        if (records[i].attributeName === "class") { queueSync(); break; }
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("resize", queueSync, { passive: true });
    queueSync();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();
