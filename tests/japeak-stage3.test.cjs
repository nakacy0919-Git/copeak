'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const historyCode = read('js/japeak-learning-history.js');
const menuCode = read('js/japeak-menu-main.js');
const menuDataCode = read('js/japeak-menu-data.js');
const practiceCode = read('js/japeak-app.js');
const topHtml = read('japeak-top.html');
const menuHtml = read('japeak-menu.html');
const practiceHtml = read('japeak.html');
const stage3Css = read('css/japeak-stage3.css');

function createStorage() {
    const values = new Map();
    return {
        values,
        getItem(key) { return values.has(key) ? values.get(key) : null; },
        setItem(key, value) { values.set(key, value); }
    };
}
function createHistory(storage) {
    const window = { localStorage: storage };
    vm.runInNewContext(historyCode, { window, module: { exports: {} } });
    return window.JapeakLearningHistory;
}

test('all modified JavaScript files parse and scripts load in dependency order', () => {
    for (const code of [historyCode, menuCode, menuDataCode, practiceCode]) {
        assert.doesNotThrow(() => new vm.Script(code));
    }
    assert.ok(menuHtml.indexOf('src="js/japeak-learning-history.js"') < menuHtml.indexOf('src="js/japeak-menu-main.js"'));
    assert.ok(practiceHtml.indexOf('src="js/japeak-learning-history.js"') < practiceHtml.indexOf('src="js/japeak-app.js"'));
});

test('animated welcome is navigable with direct school/life routes and respects reduced motion', () => {
    assert.match(topHtml, /japeak-menu\.html\?mode=school/);
    assert.match(topHtml, /japeak-menu\.html\?mode=life/);
    assert.match(topHtml, /href="#main"/);
    assert.match(topHtml, /prefers-reduced-motion:reduce/);
    assert.match(topHtml, /data-share-qr/);
});

test('responsive menu exposes search, favorites, recent lessons, and clear control', () => {
    for (const id of ['quick-access-section', 'quick-access-list', 'quick-tab-favorites',
        'quick-tab-recent', 'quick-clear-recent', 'japeak-search-input', 'search-results-panel',
        'search-results-list', 'btn-search-favorites']) {
        assert.ok(menuHtml.includes('id="' + id + '"'), 'Missing: ' + id);
    }
    assert.match(stage3Css, /@media \(max-width:720px\)/);
    assert.match(stage3Css, /prefers-reduced-motion:reduce/);
    assert.match(menuHtml, /このブラウザだけに保存されます/);
});

test('favorite lesson IDs persist and can be removed', () => {
    const storage = createStorage();
    const history = createHistory(storage);
    assert.deepEqual(Array.from(history.getFavorites()), []);
    assert.equal(history.toggleFavorite('school_life_001'), true);
    assert.equal(history.isFavorite('school_life_001'), true);
    assert.ok(storage.getItem('japeak:favorites:v1').includes('school_life_001'));
    assert.equal(history.toggleFavorite('school_life_001'), false);
    assert.equal(history.isFavorite('school_life_001'), false);
});

test('recent lessons are unique, newest-first, bounded and clearable', () => {
    const history = createHistory(createStorage());
    for (let i = 0; i < 20; i++) history.addRecent('lesson_' + i);
    assert.equal(history.getRecent().length, 12);
    history.addRecent('lesson_14');
    assert.equal(history.getRecent()[0], 'lesson_14');
    assert.equal(history.getRecent().filter(id => id === 'lesson_14').length, 1);
    assert.deepEqual(Array.from(history.clearRecent()), []);
});

test('only valid lesson IDs are stored, and broken storage data is ignored', () => {
    const storage = createStorage();
    storage.setItem('japeak:favorites:v1', JSON.stringify(['safe_001', '<script>', 123, 'safe_001']));
    const history = createHistory(storage);
    assert.deepEqual(Array.from(history.getFavorites()), ['safe_001']);
    assert.equal(history.toggleFavorite('<img>'), false);
    storage.setItem('japeak:recent:v1', '{not valid JSON');
    assert.deepEqual(Array.from(history.getRecent()), []);
});

test('storage-disabled school devices still support session-only favorites', () => {
    const storage = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } };
    const history = createHistory(storage);
    history.toggleFavorite('school_001');
    assert.equal(history.isFavorite('school_001'), true);
    history.addRecent('school_001');
    assert.equal(history.getRecent()[0], 'school_001');
});

function createMenuHarness() {
    const nodes = new Map(), created = [];
    class Element {
        constructor(tag = 'div') {
            this.tag = tag;
            this.children = [];
            this.attrs = {};
            this.handlers = {};
            this.classes = new Set();
            this.value = '';
            this.style = {};
            this.innerHTML = '';
            this.innerText = '';
            this.textContent = '';
            this.className = '';
            this.classList = {
                add: (...names) => names.forEach(n => this.classes.add(n)),
                remove: (...names) => names.forEach(n => this.classes.delete(n)),
                toggle: (n, yes) => yes ? this.classes.add(n) : this.classes.delete(n),
                contains: n => this.classes.has(n)
            };
            created.push(this);
        }
        setAttribute(key, value) { this.attrs[key] = String(value); }
        getAttribute(key) { return this.attrs[key] || null; }
        addEventListener(key, fn) { this.handlers[key] = fn; }
        appendChild(child) { this.children.push(child); }
        replaceChildren(...items) { this.children = items; }
        focus() {}
    }
    const document = {
        getElementById(id) {
            if (!nodes.has(id)) nodes.set(id, new Element());
            return nodes.get(id);
        },
        createElement(tag) { return new Element(tag); },
        createDocumentFragment() { return new Element('fragment'); },
        addEventListener() {},
        querySelectorAll(query) {
            return query === '[data-favorite-id]' ? created.filter(e => e.attrs['data-favorite-id']) : [];
        }
    };
    const storage = createStorage();
    const window = { localStorage: storage, location: { href: '' }, pageYOffset: 0,
        scrollTo() {}, matchMedia() { return { matches: false }; } };
    const history = createHistory(storage);
    window.JapeakLearningHistory = history;

    const school = { id: 'school_001', category: 'school_life', title: 'あいさつ',
        japanese: '<img src=x onerror=alert(1)> おはようございます。', translations: { en: 'Good morning' } };
    const life = { id: 'life_001', category: 'a1_restaurant', title: '注文',
        japanese: 'これをください', translations: { en: 'I would like this' } };
    const context = vm.createContext({
        window, document, localStorage: storage,
        allJapeakData: [school, life], menuLang: 'en', selectedCategory: null,
        langData: [{ code: 'en', native: 'English', jp: '英語' }],
        lifeMasterData: [{ labelId: 'life', titles: { en: 'Daily Life' },
            scenes: [{ name: 'Restaurant', catKey: 'a1_restaurant', isReady: true }] }],
        categoryTranslations: { school_life: { en: 'School', ja_ruby: '学校', icon: '🏫' } },
        uiDict: { en: { empty: 'Empty', school: 'School', life: 'Daily Life',
            schoolSub: 'School', lifeSub: 'Life', back: 'Back', top: 'Top',
            category: 'Category', phrase: 'Phrases', prompt: 'Choose',
            lifeTitle: 'Daily Life', practice: 'Practice' } },
        console: { warn() {} }, setTimeout(callback) { callback(); },
        fetch: async () => ({ ok: false }), alert() {}
    });
    vm.runInContext(menuCode, context);
    context.initStage3Navigation();
    return { context, window, document, nodes, history, school, life };
}

test('phrase cards are links and escape untrusted lesson text', () => {
    const { context, nodes } = createMenuHarness();
    context.renderPhraseList('school_life');
    const card = nodes.get('phrase-list-container').children[0].children[0];
    assert.equal(card.tag, 'article');
    assert.equal(card.children[0].tag, 'a');
    assert.match(card.children[0].href, /id=school_001/);
    assert.match(card.children[0].innerHTML, /&lt;img/);
    assert.doesNotMatch(card.children[0].innerHTML, /<img src=x/);
});

test('favorites are reachable from both quick access and the lesson list', () => {
    const { context, nodes, history } = createMenuHarness();
    context.renderPhraseList('school_life');
    const card = nodes.get('phrase-list-container').children[0].children[0];
    card.children[1].handlers.click({ preventDefault() {}, stopPropagation() {} });
    assert.equal(history.isFavorite('school_001'), true);
    context.renderQuickAccess();
    assert.equal(nodes.get('quick-access-section').classes.has('hidden'), false);
});

test('search isolates school and daily-life lessons and preserves category views', () => {
    const { context, nodes } = createMenuHarness();
    context.enterWorkspace('school');
    assert.equal(nodes.get('gate-container').style.display, 'none');
    nodes.get('japeak-search-input').value = 'あいさつ';
    context.renderSearchResults();
    assert.equal(nodes.get('workspace-container').classes.has('search-active'), true);
    assert.match(nodes.get('search-results-summary').textContent, /^1 /);
    nodes.get('japeak-search-input').value = '注文';
    context.renderSearchResults();
    assert.match(nodes.get('search-results-summary').textContent, /^0 /);
    context.enterWorkspace('life');
    context.renderSearchResults();
    assert.match(nodes.get('search-results-summary').textContent, /^1 /);
    context.backToGate();
    assert.equal(nodes.get('gate-container').style.display, 'grid');
});

test('clearing recent history removes the shortcut without deleting favorites', () => {
    const { context, nodes, history } = createMenuHarness();
    history.addRecent('school_001');
    history.toggleFavorite('life_001');
    context.renderQuickAccess();
    nodes.get('quick-tab-recent').handlers.click();
    nodes.get('quick-clear-recent').handlers.click();
    assert.deepEqual(Array.from(history.getRecent()), []);
    assert.deepEqual(Array.from(history.getFavorites()), ['life_001']);
});

test('practice page provides an accessible favorite button and records opened lessons', () => {
    assert.match(practiceHtml, /id="btn-lesson-favorite"/);
    assert.match(practiceHtml, /aria-pressed="false"/);
    assert.match(practiceCode, /stage3History\?\.addRecent\(currentLesson\.id\)/);
    assert.match(practiceCode, /stage3History\.toggleFavorite\(currentLesson\.id\)/);
    assert.match(practiceCode, /function updateLessonBookmark\(\)/);
    assert.match(practiceCode, /encodeURIComponent\(cat\)/);
});
