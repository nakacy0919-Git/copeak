const TROUBLE_IMAGES = [
    'assets/images/ipad1.webp',
    'assets/images/ipad2.webp',
    'assets/images/ipad3.webp',
    'assets/images/ipad4.webp',
    'assets/images/ipad5.webp'
];

let currentInfoType = 'trouble';
let currentTroubleSlide = 0;
let currentInfoPack = null;
let infoLoadToken = 0;
const infoCache = {};

const DEFAULT_INFO_PACK = {
    footerBadge: 'Japeak Support Center',
    footerTitle: 'Learn Japanese with confidence',
    footerSubtitle: 'Check voice troubleshooting, terms, privacy, and developer information.',
    navTrouble: 'Voice Help',
    navTerms: 'Terms',
    navPrivacy: 'Privacy',
    navDeveloper: 'Developer',
    navCopeak: 'Copeak',
    close: 'Close',
    back: '◀ Back',
    next: 'Next ▶',
    step: 'STEP',
    troubleTitle: 'Voice Recognition Troubleshooting',
    troubleSubtitle: 'Follow these steps if your voice is not recognized on iPad, iPhone, or Chrome.',
    troubleKicker: 'Voice Recognition Support',
    notes: [
        'First, make sure your device and browser are ready.',
        'Follow the screenshots and check the settings carefully.',
        'If it still does not work, try another device or check school device restrictions.'
    ],
    troubleTitles: [
        'Update iPadOS / iOS',
        'Open Privacy & Security',
        'Check Speech Recognition and Microphone',
        'Allow your browser',
        'Restart the device'
    ],
    troubleBodies: [
        'Open Settings > General > Software Update. Older systems may prevent microphone or speech recognition features from working correctly.',
        'Open the Settings app and scroll down to Privacy & Security.',
        'Open Speech Recognition and make sure Safari or Chrome is allowed. Also check Microphone settings.',
        'Make sure the browser you use is turned on. If it is blocked, Japeak cannot listen to your voice.',
        'If it still does not work, reload the page, restart the browser, or restart the device. School devices may also have restrictions set by administrators.'
    ],
    termsTitle: 'Japeak Terms of Use',
    termsSubtitle: 'Rules and notes for using Japeak safely and responsibly.',
    termsKicker: 'Terms of Use',
    termsSections: [['1. Purpose', 'Japeak is a web application for Japanese reading-aloud and speaking practice.']],
    privacyTitle: 'Japeak Privacy Policy',
    privacySubtitle: 'How voice recognition and learning-related data are handled.',
    privacyKicker: 'Privacy Policy',
    privacySections: [['1. Basic Policy', 'Japeak values a safe environment for Japanese learning.']],
    developerTitle: 'About the Developer',
    developerSubtitle: 'The background of Japeak, Copeak, and Global Classroom.',
    developerKicker: 'About the Developer',
    ctaDeveloper: 'Developer Page',
    developerSections: [['Kohei Nakashima', 'High School English Teacher / Global Classroom Founder / EdTech Developer']]
};

const $ = id => document.getElementById(id);
const learningHistory = window.JapeakLearningHistory || null;
let currentWorkspace = null;
let workspaceFavoritesOpen = false;
let activeQuickTab = 'favorites';

function esc(text) {
    return String(text ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function isSupportedLang(code) {
    return Array.isArray(langData) && langData.some(lang => lang.code === code);
}

function getUi() {
    return uiDict[menuLang] || uiDict.en;
}

function getInfoPack() {
    return currentInfoPack || DEFAULT_INFO_PACK;
}

async function fetchInfoJson(code) {
    if (infoCache[code]) return infoCache[code];

    const response = await fetch(`i18n/info/${encodeURIComponent(code)}.json`, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`Failed to load i18n/info/${code}.json`);

    const data = await response.json();
    infoCache[code] = data;
    return data;
}

async function loadInfoPack(code) {
    const lang = isSupportedLang(code) ? code : 'en';

    try {
        return await fetchInfoJson(lang);
    } catch (error) {
        console.warn(error);
        if (lang !== 'en') {
            try {
                return await fetchInfoJson('en');
            } catch (fallbackError) {
                console.warn(fallbackError);
            }
        }
        return DEFAULT_INFO_PACK;
    }
}

function getSceneLabel(scene) {
    return scene.names?.[menuLang] || scene.name;
}

function getLifeCategoryKeys() {
    const keys = new Set();
    lifeMasterData.forEach(cat => cat.scenes.forEach(scene => scene.catKey && keys.add(scene.catKey)));
    return keys;
}

async function setLanguage(code) {
    const safeCode = isSupportedLang(code) ? code : 'en';
    const token = ++infoLoadToken;

    menuLang = safeCode;
    window.menuLang = menuLang;
    window.japeakCurrentLang = menuLang;
    localStorage.setItem('japeakLang', menuLang);
    localStorage.setItem('menuLang', menuLang);

    const select = $('menu-lang-select');
    if (select) select.value = menuLang;

    updateCustomLangDisplay();
    updateUiLanguage();
    renderCategories();
    if (selectedCategory) renderPhraseList(selectedCategory);
    renderQuickAccess();
    renderSearchResults();

    currentInfoPack = await loadInfoPack(menuLang);
    if (token !== infoLoadToken) return;

    updateJapeakInfoFooterTexts();
    refreshOpenInfoModal();
}
window.setJapeakMenuLanguage = setLanguage;

function updateCustomLangDisplay() {
    const display = $('custom-lang-display');
    const current = langData.find(lang => lang.code === menuLang) || langData[1];
    if (!display) return;

    display.innerHTML = `<span>${esc(current.native)}</span> <span class="text-[10px] font-normal opacity-90 mb-0.5">${esc(current.jp)}</span>`;
}

function updateUiLanguage() {
    const d = getUi();

    if ($('btn-text-school')) $('btn-text-school').innerText = d.school;
    if ($('sub-text-school')) $('sub-text-school').innerText = d.schoolSub;
    if ($('btn-text-life')) $('btn-text-life').innerText = d.life;
    if ($('sub-text-life')) $('sub-text-life').innerText = d.lifeSub;
    if ($('btn-back-to-course')) $('btn-back-to-course').innerText = d.back;
    if ($('btn-top-back')) $('btn-top-back').innerText = d.top;
    if ($('label-category')) $('label-category').innerText = d.category;
    if ($('label-phrase')) $('label-phrase').innerText = d.phrase;
    if ($('label-life-title')) $('label-life-title').innerText = d.lifeTitle;
    if ($('label-select-prompt')) $('label-select-prompt').innerText = d.prompt;

    renderLifeDashboard();
    updateStage3Labels();
}

function enterWorkspace(mode) {
    currentWorkspace = mode === 'school' ? 'school' : 'life';
    const quick = $('quick-access-section');
    if (quick) quick.classList.add('hidden');
    const gateContainer = $('gate-container');
    const workspaceContainer = $('workspace-container');
    const areaSchool = $('area-school');
    const areaLife = $('area-life');

    if (gateContainer) gateContainer.style.display = 'none';
    if (workspaceContainer) {
        workspaceContainer.classList.remove('hidden');
        setTimeout(() => workspaceContainer.classList.remove('opacity-0'), 50);
    }

    if (currentWorkspace === 'school') {
        areaSchool?.classList.remove('hidden');
        areaSchool?.classList.add('flex');
        areaLife?.classList.remove('flex');
        areaLife?.classList.add('hidden');
    } else {
        areaSchool?.classList.remove('flex');
        areaSchool?.classList.add('hidden');
        areaLife?.classList.remove('hidden');
        areaLife?.classList.add('flex');
    }
    renderSearchResults();
}
window.enterWorkspace = enterWorkspace;

function backToGate() {
    currentWorkspace = null;
    workspaceFavoritesOpen = false;
    const input = $('japeak-search-input');
    if (input) input.value = '';
    $('workspace-container')?.classList.remove('search-active');
    updateStage3Labels();
    const gateContainer = $('gate-container');
    const workspaceContainer = $('workspace-container');

    if (!workspaceContainer || !gateContainer) return;

    workspaceContainer.classList.add('opacity-0');
    setTimeout(() => {
        workspaceContainer.classList.add('hidden');
        gateContainer.style.display = 'grid';
        renderQuickAccess();
    }, window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 0 : 300);
}
window.backToGate = backToGate;

function renderCategories() {
    const container = $('category-container');
    if (!container) return;

    container.innerHTML = '';
    container.className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';

    const lifeKeys = getLifeCategoryKeys();
    const uniqueCategories = [...new Set(allJapeakData.map(item => item.category))]
        .filter(cat => !lifeKeys.has(cat));

    uniqueCategories.forEach(cat => {
        const btn = document.createElement('button');
        const trans = categoryTranslations[cat];
        const icon = trans?.icon || '🗻';
        const subtitle = trans ? (trans[menuLang] || trans.en) : cat;

        btn.innerHTML = `
            <div class="text-3xl md:text-4xl mb-2 drop-shadow-sm group-hover:scale-110 transition-transform">${esc(icon)}</div>
            <div class="text-sm font-bold leading-snug">${trans ? esc(trans.ja_ruby) : esc(cat)}</div>
            <div class="text-[10px] opacity-80 mt-1">${esc(subtitle)}</div>
        `;
        btn.className = `category-btn group flex flex-col items-center justify-center p-4 h-full w-full bg-[#f4f0e6] text-[#1e3a5f] border-2 border-[#1e3a5f] rounded-sm hover:bg-[#1e3a5f] hover:text-white transition shadow-sm ${selectedCategory === cat ? 'active' : ''}`;
        btn.onclick = () => {
            selectedCategory = cat;
            renderCategories();
            renderPhraseList(cat);
            scrollToPhraseArea();
        };

        container.appendChild(btn);
    });
}

function getCardJapanese(item) {
    if (item.dialogue && item.dialogue.length) {
        return item.dialogue.map(turn => `${turn.speakerName || turn.speakerLabel || ''}：${turn.line || ''}`).join(' / ');
    }
    return item.japanese || item.title || '';
}

function getCardTranslation(item) {
    // Japanese UI is supported; do not silently show English as its description.
    if (menuLang === 'ja') return item.context?.ja || item.translations?.ja || '';
    if (!item.translations) return '';
    return item.translations[menuLang] || item.translations.en || '';
}


const QUICK_TEXT = {
    ja:{heading:'✨ つづきから学ぶ',favorites:'☆ お気に入り',recent:'◷ 最近の教材',search:'🔎 教材を検索',placeholder:'日本語・英語・場面から探す',results:'検索結果',empty:'見つかりませんでした。別の言葉でも検索してみてください。',count:'件見つかりました',showing:'件表示',start:'▶ 練習する',save:'お気に入りに追加',unsave:'お気に入りから削除',all:'すべて'},
    en:{heading:'✨ Pick up where you left off',favorites:'☆ Favorites',recent:'◷ Recent lessons',search:'🔎 Find lessons',placeholder:'Search Japanese, translations or topics',results:'Search results',empty:'No matching lessons. Try another keyword.',count:'lessons found',showing:'shown',start:'▶ Practice',save:'Add to favorites',unsave:'Remove favorite',all:'All'}
};
function getQuickText() { return QUICK_TEXT[menuLang] || QUICK_TEXT.en; }

function getLessonHref(item) {
    return 'japeak.html?id=' + encodeURIComponent(item.id) + '&lang=' + encodeURIComponent(menuLang);
}

function refreshFavoriteButtons() {
    document.querySelectorAll('[data-favorite-id]').forEach(button => {
        const id = button.getAttribute('data-favorite-id');
        const selected = learningHistory?.isFavorite(id) || false;
        button.textContent = selected ? '★' : '☆';
        button.setAttribute('aria-pressed', String(selected));
        button.setAttribute('aria-label', selected ? getQuickText().unsave : getQuickText().save);
        button.title = selected ? getQuickText().unsave : getQuickText().save;
    });
}

function createFavoriteButton(item) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'japeak-bookmark-btn';
    btn.setAttribute('data-favorite-id', item.id);
    btn.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        if (!learningHistory) return;
        learningHistory.toggleFavorite(item.id);
        refreshFavoriteButtons();
        renderQuickAccess();
        if (workspaceFavoritesOpen) renderSearchResults();
    });
    return btn;
}

function createPhraseCard(item) {
    const card = document.createElement('article');
    card.className = 'japeak-phrase-card';
    const link = document.createElement('a');
    link.href = getLessonHref(item);
    link.className = 'japeak-phrase-link';
    link.innerHTML = '<small>' + esc(item.title || '') + '</small>' +
        '<strong>' + esc(getCardJapanese(item)) + '</strong>' +
        '<p>' + esc(getCardTranslation(item)) + '</p>' +
        '<span class="japeak-practice-hint">' + esc(getQuickText().start) + ' →</span>';
    card.appendChild(link);
    card.appendChild(createFavoriteButton(item));
    return card;
}

function renderPhraseList(category) {
    const container = $('phrase-list-container');
    if (!container) return;
    container.replaceChildren();
    const filteredData = allJapeakData.filter(item => item.category === category);
    if (!filteredData.length) {
        const empty = document.createElement('p');
        empty.className = 'text-stone-400 text-center py-10 font-bold';
        empty.textContent = getUi().empty;
        container.appendChild(empty);
        return;
    }
    const fragment = document.createDocumentFragment();
    filteredData.forEach(item => fragment.appendChild(createPhraseCard(item)));
    container.appendChild(fragment);
    refreshFavoriteButtons();
}

function getSavedLessons(type) {
    if (!learningHistory) return [];
    const ids = type === 'recent' ? learningHistory.getRecent() : learningHistory.getFavorites();
    const byId = new Map(allJapeakData.map(item => [item.id, item]));
    return ids.map(id => byId.get(id)).filter(Boolean);
}

function renderQuickAccess() {
    const section = $('quick-access-section');
    const container = $('quick-access-list');
    if (!section || !container) return;
    const favorites = getSavedLessons('favorites');
    const recent = getSavedLessons('recent');
    if (currentWorkspace || (!favorites.length && !recent.length)) {
        section.classList.add('hidden');
        return;
    }
    section.classList.remove('hidden');
    if (activeQuickTab === 'favorites' && !favorites.length) activeQuickTab = 'recent';
    if (activeQuickTab === 'recent' && !recent.length) activeQuickTab = 'favorites';
    const tabFav = $('quick-tab-favorites');
    const tabRecent = $('quick-tab-recent');
    if (tabFav) tabFav.setAttribute('aria-selected', String(activeQuickTab === 'favorites'));
    if (tabRecent) tabRecent.setAttribute('aria-selected', String(activeQuickTab === 'recent'));
    container.replaceChildren();
    const lessons = activeQuickTab === 'favorites' ? favorites : recent;
    lessons.slice(0, 6).forEach(item => {
        const row = document.createElement('div');
        row.className = 'japeak-quick-item';
        const link = document.createElement('a');
        link.href = getLessonHref(item);
        link.innerHTML = '<strong>' + esc(item.title || getCardJapanese(item)) + '</strong>' +
            '<span>' + esc(getCardJapanese(item)) + '</span>';
        row.appendChild(link);
        row.appendChild(createFavoriteButton(item));
        container.appendChild(row);
    });
    refreshFavoriteButtons();
}

function updateStage3Labels() {
    const t = getQuickText();
    const elements = [
        ['quick-access-heading',t.heading],
        ['quick-tab-favorites',t.favorites],
        ['quick-tab-recent',t.recent],
        ['japeak-search-label',t.search],
        ['btn-search-favorites',t.favorites],
        ['search-results-heading',workspaceFavoritesOpen ? t.favorites : t.results]
    ];
    for (const [id,label] of elements) {
        const element = $(id);
        if (element) element.textContent = label;
    }
    const input = $('japeak-search-input');
    if (input) input.placeholder = t.placeholder;
    const fav = $('btn-search-favorites');
    if (fav) fav.setAttribute('aria-pressed', String(workspaceFavoritesOpen));
}

function searchLessonText(item) {
    const cat = categoryTranslations[item.category];
    return [item.title, getCardJapanese(item), getCardTranslation(item), cat?.ja_ruby, cat?.[menuLang], item.context?.ja, item.context?.[menuLang]]
        .filter(Boolean).join(' ').normalize('NFKC').toLowerCase();
}

function renderSearchResults() {
    const workspace = $('workspace-container');
    const panel = $('search-results-panel');
    const container = $('search-results-list');
    const summary = $('search-results-summary');
    if (!workspace || !panel || !container) return;
    const query = $('japeak-search-input')?.value.trim().normalize('NFKC').toLowerCase() || '';
    const isActive = !!currentWorkspace && (query.length > 0 || workspaceFavoritesOpen);
    workspace.classList.toggle('search-active', isActive);
    panel.classList.toggle('hidden', !isActive);
    updateStage3Labels();
    if (!isActive) return;
    const lifeKeys = getLifeCategoryKeys();
    let lessons;
    if (workspaceFavoritesOpen) lessons = getSavedLessons('favorites');
    else lessons = allJapeakData.filter(item =>
        currentWorkspace === 'life' ? lifeKeys.has(item.category) : !lifeKeys.has(item.category)
    );
    if (query) lessons = lessons.filter(item => searchLessonText(item).includes(query));
    const limit = 48;
    const total = lessons.length;
    if (summary) summary.textContent = total + ' ' + getQuickText().count + ' / ' + Math.min(total, limit) + ' ' + getQuickText().showing;
    container.replaceChildren();
    if (!total) {
        const empty = document.createElement('p');
        empty.className = 'text-center py-8 text-stone-500 font-bold';
        empty.textContent = getQuickText().empty;
        container.appendChild(empty);
        return;
    }
    const fragment = document.createDocumentFragment();
    lessons.slice(0, limit).forEach(item => fragment.appendChild(createPhraseCard(item)));
    container.appendChild(fragment);
    refreshFavoriteButtons();
}

function initStage3Navigation() {
    const input = $('japeak-search-input');
    if (input) input.addEventListener('input', () => {
        workspaceFavoritesOpen = false;
        renderSearchResults();
    });
    const favorites = $('btn-search-favorites');
    if (favorites) favorites.addEventListener('click', () => {
        workspaceFavoritesOpen = !workspaceFavoritesOpen;
        renderSearchResults();
        if (workspaceFavoritesOpen) $('search-results-heading')?.focus?.();
    });
    [['quick-tab-favorites','favorites'],['quick-tab-recent','recent']].forEach(([id,tab]) => {
        $(id)?.addEventListener('click', () => {
            activeQuickTab = tab;
            renderQuickAccess();
        });
    });
    renderQuickAccess();
    updateStage3Labels();
}
function scrollToPhraseArea() {
    const phraseArea = $('phrase-list-container');
    if (!phraseArea?.parentElement) return;

    const y = phraseArea.parentElement.getBoundingClientRect().top + window.pageYOffset - 20;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
}

function renderLifeDashboard() {
    const container = $('life-categories-box');
    if (!container) return;

    container.innerHTML = '';

    lifeMasterData.forEach(cat => {
        const block = document.createElement('div');
        block.className = 'flex flex-col gap-3';

        const categoryTitleText = cat.titles[menuLang] || cat.titles.en || cat.titles.ja;
        block.innerHTML = `
            <h3 class="font-bold text-stone-700 text-sm md:text-base mb-2 flex items-center gap-2 bg-stone-100 p-2 rounded-sm">${esc(categoryTitleText)}</h3>
            <div class="flex flex-col gap-2" id="box-${cat.labelId}"></div>
        `;
        container.appendChild(block);

        const listInner = $(`box-${cat.labelId}`);
        cat.scenes.forEach(scene => {
            const btn = document.createElement('button');
            const label = getSceneLabel(scene);

            if (scene.isReady) {
                const isSelected = window.selectedLifeSceneName === scene.name;
                btn.className = isSelected
                    ? 'w-full text-left px-4 py-3 rounded-sm border border-emerald-700 bg-emerald-700 text-white font-black transition-all flex justify-between items-center shadow-[0_2px_0_rgba(4,120,87,1)] active:translate-y-0.5 active:shadow-none text-xs md:text-sm'
                    : 'w-full text-left px-4 py-3 rounded-sm border border-emerald-600 bg-emerald-50 text-emerald-900 font-bold hover:bg-emerald-100 transition-all flex justify-between items-center shadow-[0_2px_0_rgba(4,120,87,1)] active:translate-y-0.5 active:shadow-none text-xs md:text-sm';
                btn.innerHTML = `<span>${esc(label)}</span><span class="text-xs ${isSelected ? 'text-white' : 'text-emerald-600'} font-black">▼</span>`;
                btn.onclick = () => {
                    if (scene.catKey) window.loadJapeakCategory(scene.catKey, scene.name);
                    else alert(`「${scene.name}」のフレーズデータがまだ登録されていません。`);
                };
            } else {
                btn.disabled = true;
                btn.className = 'w-full text-left px-4 py-3 rounded-sm border border-stone-200 bg-stone-50 text-stone-400 font-medium grayscale cursor-not-allowed flex justify-between items-center shadow-sm text-xs md:text-sm';
                btn.innerHTML = `<span>${esc(label)}</span><span class="text-[9px] bg-stone-300 text-white px-1.5 py-0.5 rounded-sm font-bold tracking-wider">${esc(getUi().soon)}</span>`;
            }

            listInner.appendChild(btn);
        });
    });
}

window.loadJapeakCategory = function(category, sceneName) {
    selectedCategory = category;
    window.selectedLifeSceneName = sceneName;
    renderLifeDashboard();
    renderPhraseList(category);
    scrollToPhraseArea();
};

function updateJapeakInfoFooterTexts() {
    const p = getInfoPack();

    if ($('jp-info-footer-badge')) $('jp-info-footer-badge').innerText = p.footerBadge;
    if ($('jp-info-footer-title')) $('jp-info-footer-title').innerText = p.footerTitle;
    if ($('jp-info-footer-subtitle')) $('jp-info-footer-subtitle').innerText = p.footerSubtitle;

    document.querySelectorAll('[data-jpinfo]').forEach(el => {
        const key = el.getAttribute('data-jpinfo');
        if (p[key]) el.innerText = p[key];
    });
}

function getInfoData(type) {
    const p = getInfoPack();

    if (type === 'trouble') {
        return { icon: '🆘', kicker: p.troubleKicker, title: p.troubleTitle, subtitle: p.troubleSubtitle };
    }
    if (type === 'terms') {
        return { icon: '📜', kicker: p.termsKicker, title: p.termsTitle, subtitle: p.termsSubtitle, sections: p.termsSections };
    }
    if (type === 'privacy') {
        return { icon: '🛡️', kicker: p.privacyKicker, title: p.privacyTitle, subtitle: p.privacySubtitle, sections: p.privacySections };
    }
    return {
        icon: '👨‍🏫',
        kicker: p.developerKicker,
        title: p.developerTitle,
        subtitle: p.developerSubtitle,
        sections: p.developerSections,
        ctaDeveloper: p.ctaDeveloper
    };
}

function setModalHeader(type) {
    const d = getInfoData(type);
    const p = getInfoPack();

    $('jp-info-modal-icon').innerText = d.icon;
    $('jp-info-modal-kicker').innerText = d.kicker;
    $('jp-info-modal-title').innerText = d.title;
    $('jp-info-modal-subtitle').innerText = d.subtitle;
    $('jp-info-close-btn').innerText = p.close;
    $('jp-info-prev-btn').innerText = p.back;
    $('jp-info-next-btn').innerText = p.next;
}

function renderCardSections(type) {
    const d = getInfoData(type);
    const body = $('jp-info-modal-body');
    const isDev = type === 'developer';

    body.innerHTML = `
        <div class="max-w-4xl mx-auto grid grid-cols-1 gap-4">
            ${d.sections.map((sec, i) => `
                <section class="bg-white rounded-xl border-2 ${isDev ? 'border-emerald-200' : 'border-stone-200'} shadow-sm p-5 md:p-6 hover:shadow-md transition">
                    <div class="flex items-start gap-4">
                        <div class="shrink-0 w-9 h-9 rounded-lg ${isDev ? 'bg-emerald-100 text-emerald-800' : 'bg-[#1e3a5f]/10 text-[#1e3a5f]'} flex items-center justify-center font-black">${i + 1}</div>
                        <div>
                            <h3 class="text-base md:text-lg font-black ${isDev ? 'text-emerald-800' : 'text-[#1e3a5f]'} mb-2">${esc(sec[0])}</h3>
                            <p class="text-sm md:text-base text-stone-700 leading-relaxed font-medium">${esc(sec[1])}</p>
                        </div>
                    </div>
                </section>
            `).join('')}
            ${isDev ? `
                <div class="pt-2 flex flex-wrap gap-3">
                    <a href="index.html" class="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#172a45] text-white px-4 py-2.5 rounded-sm font-black transition text-sm shadow-md">🎧 Copeak</a>
                    <a href="https://sites.google.com/view/koheinakashima/bio" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2.5 rounded-sm font-black transition text-sm shadow-md">👨‍🏫 ${esc(d.ctaDeveloper || 'Developer Page')}</a>
                </div>
            ` : ''}
        </div>
    `;

    $('jp-info-prev-btn').classList.add('hidden');
    $('jp-info-next-btn').classList.add('hidden');
    $('jp-info-dots').classList.add('hidden');
    $('jp-info-close-btn').classList.remove('hidden');
}

function getTroubleSteps() {
    const p = getInfoPack();
    const titles = Array.isArray(p.troubleTitles) ? p.troubleTitles : DEFAULT_INFO_PACK.troubleTitles;
    const bodies = Array.isArray(p.troubleBodies) ? p.troubleBodies : DEFAULT_INFO_PACK.troubleBodies;

    return titles.map((title, i) => ({
        img: TROUBLE_IMAGES[i],
        label: `${p.step || 'STEP'} ${i + 1}`,
        title,
        body: bodies[i] || ''
    }));
}

function renderTroubleSlide() {
    const p = getInfoPack();
    const steps = getTroubleSteps();
    const step = steps[currentTroubleSlide] || steps[0];
    const notes = Array.isArray(p.notes) ? p.notes : DEFAULT_INFO_PACK.notes;
    const note = currentTroubleSlide === 0
        ? notes[0]
        : currentTroubleSlide === steps.length - 1
            ? notes[2]
            : notes[1];

    $('jp-info-modal-body').innerHTML = `
        <div class="max-w-5xl mx-auto h-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5 md:gap-6">
            <div class="bg-white rounded-2xl border-2 border-stone-200 shadow-inner p-3 md:p-4 flex items-center justify-center min-h-[250px] md:min-h-[420px]">
                <img src="${esc(step.img)}" alt="${esc(step.title)}" class="max-w-full max-h-[52vh] object-contain drop-shadow-lg">
            </div>
            <div class="bg-white rounded-2xl border-2 border-red-200 shadow-sm p-5 md:p-6 flex flex-col justify-center">
                <span class="inline-block bg-red-600 text-white text-[10px] md:text-xs font-black px-3 py-1 rounded-sm tracking-widest w-max mb-4">${esc(step.label)}</span>
                <h3 class="text-xl md:text-2xl font-black text-red-700 mb-4 leading-snug">${esc(step.title)}</h3>
                <p class="text-sm md:text-base text-stone-700 leading-relaxed font-medium">${esc(step.body)}</p>
                <div class="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-sm">
                    <p class="text-xs md:text-sm text-red-800 font-bold leading-relaxed">${esc(note)}</p>
                </div>
            </div>
        </div>
    `;

    $('jp-info-dots').innerHTML = steps.map((_, i) => `
        <span class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${i === currentTroubleSlide ? 'bg-[#1e3a5f]' : 'bg-stone-300'}"></span>
    `).join('');

    $('jp-info-prev-btn').classList.remove('hidden');
    $('jp-info-next-btn').classList.remove('hidden');
    $('jp-info-dots').classList.remove('hidden');
    $('jp-info-close-btn').classList.add('hidden');

    $('jp-info-prev-btn').style.visibility = currentTroubleSlide === 0 ? 'hidden' : 'visible';
    $('jp-info-next-btn').innerText = currentTroubleSlide === steps.length - 1 ? p.close : p.next;
}

function refreshOpenInfoModal() {
    const modal = $('japeak-info-modal');
    if (!modal || modal.classList.contains('hidden')) return;

    setModalHeader(currentInfoType);
    if (currentInfoType === 'trouble') renderTroubleSlide();
    else renderCardSections(currentInfoType);
}

window.openJapeakInfoModal = async function(type) {
    currentInfoType = type;
    const modal = $('japeak-info-modal');
    if (!modal) return;

    if (!currentInfoPack) currentInfoPack = await loadInfoPack(menuLang);

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setModalHeader(type);

    if (type === 'trouble') {
        currentTroubleSlide = 0;
        renderTroubleSlide();
    } else {
        renderCardSections(type);
    }
};

window.closeJapeakInfoModal = function() {
    const modal = $('japeak-info-modal');
    if (!modal) return;

    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

window.moveJapeakTroubleSlide = function(direction) {
    const steps = getTroubleSteps();

    if (currentTroubleSlide === steps.length - 1 && direction > 0) {
        closeJapeakInfoModal();
        return;
    }

    currentTroubleSlide = Math.max(0, Math.min(steps.length - 1, currentTroubleSlide + direction));
    renderTroubleSlide();
};

function initLanguageMenu() {
    const btn = $('custom-lang-btn');
    const menu = $('custom-lang-menu');
    const list = $('custom-lang-list');
    const hiddenSelect = $('menu-lang-select');
    const chevron = $('custom-lang-chevron');

    if (!btn || !menu || !list || !hiddenSelect || !chevron) return;

    list.innerHTML = '';

    langData.forEach(lang => {
        const li = document.createElement('li');
        li.className = 'px-4 py-3 hover:bg-[#eef8ff] cursor-pointer border-b border-stone-100 last:border-0 transition-colors flex items-baseline gap-2 text-left';
        li.innerHTML = `<span class="text-base font-medium">${esc(lang.native)}</span><span class="text-[10px] text-stone-500 font-bold mb-0.5">${esc(lang.jp)}</span>`;
        li.onclick = () => {
            setLanguage(lang.code);
            closeMenu();
        };
        list.appendChild(li);
    });

    function toggleMenu() {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            chevron.classList.add('rotate-180');
        } else {
            closeMenu();
        }
    }

    function closeMenu() {
        menu.classList.add('hidden');
        chevron.classList.remove('rotate-180');
    }

    btn.addEventListener('click', event => {
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', event => {
        if (!menu.contains(event.target) && !btn.contains(event.target)) closeMenu();
    });

    hiddenSelect.addEventListener('change', event => setLanguage(event.target.value));
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguageMenu();
    initStage3Navigation();
    setLanguage(menuLang);
    renderCategories();
    updateUiLanguage();
    updateJapeakInfoFooterTexts();
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeJapeakInfoModal();
});
