// ==========================================
// rewards-ui.js
// Copeak World Collection UI
// ==========================================

(function () {
    "use strict";
        let capsuleOpening = false;


    // ==========================================
    // HTML Escape
    // ==========================================

    function escapeHtml(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    // ==========================================
    // Number
    // ==========================================

    function formatNumber(value) {

        const num =
            Number(value);


        if (
            !Number.isFinite(num)
        ) {

            return "—";
        }


        return new Intl
            .NumberFormat("en-US")
            .format(num);
    }

　　    // ==========================================
    // Country Mini Map
    // ==========================================

    function buildCountryMapUrl(country) {

        const lat =
            Number(
                country
                    ?.geography
                    ?.coordinates
                    ?.lat
            );

        const lng =
            Number(
                country
                    ?.geography
                    ?.coordinates
                    ?.lng
            );


        if (
            !Number.isFinite(lat) ||
            !Number.isFinite(lng)
        ) {
            return "";
        }


        const latSpan = 5;
        const lngSpan = 8;


        const south =
            Math.max(
                -85,
                lat - latSpan
            );

        const north =
            Math.min(
                85,
                lat + latSpan
            );

        const west =
            Math.max(
                -180,
                lng - lngSpan
            );

        const east =
            Math.min(
                180,
                lng + lngSpan
            );


        const params =
            new URLSearchParams({

                bbox:
                    `${west},${south},${east},${north}`,

                layer:
                    "mapnik",

                marker:
                    `${lat},${lng}`

            });


        return (
            "https://www.openstreetmap.org/export/embed.html?" +
            params.toString()
        );
    }
    // ==========================================
    // Modal
    // ==========================================

    function ensureModal() {

        let overlay =
            document.getElementById(
                "copeakRewardOverlay"
            );


        if (overlay) {
            return overlay;
        }


        overlay =
            document.createElement(
                "div"
            );


        overlay.id =
            "copeakRewardOverlay";


        overlay.className =
            "copeak-reward-overlay is-hidden";


        overlay.innerHTML = `
            <div
                class="copeak-reward-modal"
                id="copeakRewardModal"
            >
                <button
                    class="copeak-reward-close"
                    type="button"
                    aria-label="Close"
                >
                    ×
                </button>

                <div
                    id="copeakRewardContent"
                ></div>
            </div>
        `;


        document.body.appendChild(
            overlay
        );


        overlay
            .querySelector(
                ".copeak-reward-close"
            )
            ?.addEventListener(
                "click",
                closeModal
            );


        overlay.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    overlay
                ) {

                    closeModal();
                }
            }
        );


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeModal();
                }
            }
        );


        return overlay;
    }


    function closeModal() {

        const overlay =
            document.getElementById(
                "copeakRewardOverlay"
            );


        if (overlay) {

            overlay.classList.add(
                "is-hidden"
            );
        }
    }


    function openModal(html) {

        const overlay =
            ensureModal();


        const content =
            overlay.querySelector(
                "#copeakRewardContent"
            );


        content.innerHTML =
            html;


        overlay.classList.remove(
            "is-hidden"
        );


        bindReadingTabs(
            overlay
        );
    }


    // ==========================================
    // Read Aloud Toggle
    // ==========================================

    function bindReadingTabs(
        root
    ) {

        const tabs =
            root.querySelectorAll(
                ".cr-reading-tab"
            );


        tabs.forEach(
            tab => {

                tab.addEventListener(
                    "click",
                    () => {

                        const lang =
                            tab.dataset.lang;


                        root
                            .querySelectorAll(
                                ".cr-reading-tab"
                            )
                            .forEach(
                                item =>
                                    item
                                        .classList
                                        .remove(
                                            "is-active"
                                        )
                            );


                        tab.classList.add(
                            "is-active"
                        );


                        root
                            .querySelectorAll(
                                ".cr-reading-text"
                            )
                            .forEach(
                                item => {

                                    item
                                        .classList
                                        .toggle(
                                            "is-hidden",
                                            item
                                                .dataset
                                                .lang !==
                                            lang
                                        );
                                }
                            );
                    }
                );
            }
        );
    }


    // ==========================================
    // Helpers
    // ==========================================

    function getLanguageText(
        country
    ) {

        return (
            country.languages ||
            []
        )
            .map(
                item =>
                    item.ja ||
                    item.en
            )
            .filter(Boolean);
    }


    function getCurrencyText(
        country
    ) {

        return (
            country.currencies ||
            []
        )
            .map(
                item =>
                    item.ja ||
                    item.en ||
                    item.code
            )
            .filter(Boolean);
    }


    function getReligionText(
        country
    ) {

        return (
            country
                .religion
                ?.majorTraditions ||
            []
        )
            .map(
                item =>
                    item.ja ||
                    item.en
            )
            .filter(Boolean);
    }


    function getEconomyText(
        country
    ) {

        return (
            country
                .economy
                ?.learningHighlights ||
            []
        )
            .map(
                item =>
                    item.ja ||
                    item.en
            )
            .filter(Boolean);
    }


    // ==========================================
    // Country Card HTML
    // ==========================================

    function buildCountryCard(
        country,
        options = {}
    ) {

        const isNew =
            options.isNew === true;


        const count =
            Number(
                options.count || 1
            );


        const nameEn =
            country.name?.en ||
            country.id;


        const nameJa =
            country.name?.ja ||
            "";


        const regionEn =
            country
                .geography
                ?.region
                ?.en ||
            "";


        const regionJa =
            country
                .geography
                ?.region
                ?.ja ||
            "";


        const subregionEn =
            country
                .geography
                ?.subregion
                ?.en ||
            "";


        const capitalEn =
            country
                .geography
                ?.capital
                ?.en ||
            "—";


        const capitalJa =
            country
                .geography
                ?.capital
                ?.ja ||
            capitalEn;


        const population =
            country
                .population
                ?.value;


        const area =
            country
                .geography
                ?.areaKm2;
        
        const mapUrl =
    buildCountryMapUrl(
        country
    );


        const summaryEn =
            country
                .summary
                ?.en ||
            "";


        const summaryJa =
            country
                .summary
                ?.ja ||
            "";


        const readingEn =
            country
                .readAloud
                ?.full
                ?.en ||
            "";


        const readingJa =
            country
                .readAloud
                ?.full
                ?.ja ||
            "";


        const languages =
            getLanguageText(
                country
            );


        const currencies =
            getCurrencyText(
                country
            );


        const religions =
            getReligionText(
                country
            );


        const economy =
            getEconomyText(
                country
            );


        const facts =
            Array.isArray(
                country.facts
            )
                ? country.facts
                : [];


        const statusText =
            isNew
                ? "✦ NEW DISCOVERY"
                : `COLLECTED ×${count}`;


        return `
            <section
                class="cr-hero"
            >

                <div
                    class="cr-status"
                >
                    ${escapeHtml(
                        statusText
                    )}
                </div>


                <div
                    class="cr-hero-main"
                >

                    <div
    class="cr-flag"
>
    <img
        src="https://flagcdn.com/${escapeHtml(
            (country.code2 || "").toLowerCase()
        )}.svg"
        alt="${escapeHtml(nameEn)} flag"
        class="cr-flag-image"
    >
</div>


                    <div>

                        <h2
                            class="cr-country-name"
                        >
                            ${escapeHtml(
                                nameEn
                            )}
                        </h2>


                        <div
                            class="cr-country-ja"
                        >
                            ${escapeHtml(
                                nameJa
                            )}
                        </div>


                        <div
                            class="cr-region"
                        >
                            ${escapeHtml(
                                regionEn
                            )}

                            ${subregionEn
                                ? " · " +
                                  escapeHtml(
                                      subregionEn
                                  )
                                : ""
                            }

                            ${regionJa
                                ? " / " +
                                  escapeHtml(
                                      regionJa
                                  )
                                : ""
                            }
                        </div>

                    </div>

                </div>

            </section>


            <section
                class="cr-content"
            >

                <div
                    class="cr-data-grid"
                >

                    <div
                        class="cr-data"
                    >
                        <div
                            class="cr-data-label"
                        >
                            CAPITAL
                        </div>

                        <div
                            class="cr-data-value"
                        >
                            ${escapeHtml(
                                capitalEn
                            )}
                            <br>
                            ${escapeHtml(
                                capitalJa
                            )}
                        </div>
                    </div>


                    <div
                        class="cr-data"
                    >
                        <div
                            class="cr-data-label"
                        >
                            POPULATION
                        </div>

                        <div
                            class="cr-data-value"
                        >
                            ${formatNumber(
                                population
                            )}
                        </div>
                    </div>


                    <div
                        class="cr-data"
                    >
                        <div
                            class="cr-data-label"
                        >
                            AREA
                        </div>

                        <div
                            class="cr-data-value"
                        >
                            ${formatNumber(
                                area
                            )}
                            km²
                        </div>
                    </div>


                    <div
                        class="cr-data"
                    >
                        <div
                            class="cr-data-label"
                        >
                            CURRENCY
                        </div>

                        <div
                            class="cr-data-value"
                        >
                            ${escapeHtml(
                                currencies[0] ||
                                "—"
                            )}
                        </div>
                    </div>

                </div>

                ${
                    mapUrl
                        ? `
                            <div
                                class="cr-section"
                            >

                                <div
                                    class="cr-section-title"
                                >
                                    📍 World Location
                                </div>


                                <div
                                    class="cr-map-wrap"
                                >

                                    <iframe
                                        class="cr-map-frame"
                                        src="${escapeHtml(mapUrl)}"
                                        loading="lazy"
                                        title="${escapeHtml(nameEn)} location map"
                                    ></iframe>


                                    <div
                                        class="cr-map-caption"
                                    >
                                        ${escapeHtml(
                                            nameEn
                                        )}
                                        ·
                                        ${escapeHtml(
                                            subregionEn
                                        )}
                                    </div>

                                </div>

                            </div>
                        `
                        : ""
                }
                <div
                    class="cr-section"
                >

                    <div
                        class="cr-section-title"
                    >
                        ◇ Country Profile
                    </div>


                    <div
                        class="cr-summary"
                    >

                        <div
                            class="cr-summary-en"
                        >
                            ${escapeHtml(
                                summaryEn
                            )}
                        </div>


                        <div
                            class="cr-summary-ja"
                        >
                            ${escapeHtml(
                                summaryJa
                            )}
                        </div>

                    </div>

                </div>


                <div
                    class="cr-section"
                >

                    <div
                        class="cr-section-title"
                    >
                        🗣 Languages
                    </div>


                    <div
                        class="cr-chips"
                    >

                        ${
                            languages
                                .map(
                                    item =>
                                        `<span class="cr-chip">${escapeHtml(item)}</span>`
                                )
                                .join("")
                        }

                    </div>

                </div>


                <div
                    class="cr-section"
                >

                    <div
                        class="cr-section-title"
                    >
                        🌏 Religion & Culture
                    </div>


                    <div
                        class="cr-chips"
                    >

                        ${
                            religions
                                .map(
                                    item =>
                                        `<span class="cr-chip">${escapeHtml(item)}</span>`
                                )
                                .join("")
                        }

                    </div>

                </div>


                <div
                    class="cr-section"
                >

                    <div
                        class="cr-section-title"
                    >
                        ⚙ Economy
                    </div>


                    <div
                        class="cr-chips"
                    >

                        ${
                            economy
                                .map(
                                    item =>
                                        `<span class="cr-chip">${escapeHtml(item)}</span>`
                                )
                                .join("")
                        }

                    </div>

                </div>


                <div
                    class="cr-section"
                >

                    <div
                        class="cr-section-title"
                    >
                        📖 Read This Country
                    </div>


                    <div
                        class="cr-reading"
                    >

                        <div
                            class="cr-reading-tabs"
                        >

                            <button
                                class="cr-reading-tab is-active"
                                data-lang="en"
                                type="button"
                            >
                                English
                            </button>


                            <button
                                class="cr-reading-tab"
                                data-lang="ja"
                                type="button"
                            >
                                日本語
                            </button>

                        </div>


                        <div
                            class="cr-reading-text"
                            data-lang="en"
                        >
                            ${escapeHtml(
                                readingEn
                            )}
                        </div>


                        <div
                            class="cr-reading-text is-hidden"
                            data-lang="ja"
                        >
                            ${escapeHtml(
                                readingJa
                            )}
                        </div>
                        <div
    class="cr-read-action"
>
    <button
        type="button"
        class="cr-read-in-copeak"
        onclick="CopeakRewardsUI.startCountryReading('${escapeHtml(country.id)}')"
    >
        <span class="cr-read-button-icon">
            🎙️
        </span>

        <span>
            <strong>
                READ IN COPEAK
            </strong>

            <small>
                この英文をCopeakで音読する
            </small>
        </span>

        <span class="cr-read-button-arrow">
            →
        </span>
    </button>
</div>
                    </div>

                </div>


                <div
                    class="cr-section"
                >

                    <div
                        class="cr-section-title"
                    >
                        ✦ Country Facts
                    </div>


                    <div
                        class="cr-facts"
                    >

                        ${
                            facts
                                .slice(
                                    0,
                                    6
                                )
                                .map(
                                    fact => `
                                        <div
                                            class="cr-fact"
                                        >

                                            <div
                                                class="cr-fact-en"
                                            >
                                                ${escapeHtml(
                                                    fact.en ||
                                                    ""
                                                )}
                                            </div>


                                            <div
                                                class="cr-fact-ja"
                                            >
                                                ${escapeHtml(
                                                    fact.ja ||
                                                    ""
                                                )}
                                            </div>

                                        </div>
                                    `
                                )
                                .join("")
                        }

                    </div>

                </div>

            </section>
        `;
    }


    // ==========================================
    // Mini Reward
    // ==========================================

    function showMiniReward(
        result
    ) {

        const amount =
            result.reward?.amount ||
            0;


        openModal(`
            <div
                class="cr-mini-reward"
            >

                <div
                    class="cr-mini-icon"
                >
                    🎁
                </div>


                <div
                    class="cr-mini-title"
                >
                    MINI REWARD
                </div>


                <div
                    class="cr-mini-value"
                >
                    +${escapeHtml(
                        amount
                    )} SP
                </div>


                <p>
                    Keep reading.
                    Your next country
                    may be waiting.
                </p>

            </div>
        `);
    }


    // ==========================================
    // Show Country
    // ==========================================

    function showCountry(
        country,
        options = {}
    ) {

        if (!country) {
            return;
        }


        openModal(
            buildCountryCard(
                country,
                options
            )
        );
    }


    // ==========================================
    // Country IDから表示
    // SPを消費しない
    // ==========================================

    async function showCountryById(
        countryId
    ) {

        if (
            !window.CopeakRewards
        ) {
            return;
        }


        const countries =
            await window
                .CopeakRewards
                .loadCountries();


        const country =
            countries.find(
                item =>
                    item.id ===
                    countryId
            );


        if (!country) {

            console.warn(
                "[Copeak Rewards UI] Country not found:",
                countryId
            );

            return;
        }


        const stored =
            window
                .CopeakRewardsStorage
                ?.load();


        const count =
            Number(
                stored
                    ?.countries
                    ?.[countryId] ||
                0
            );


        showCountry(
            country,
            {
                isNew: false,
                count:
                    Math.max(
                        1,
                        count
                    )
            }
        );
    }
    
        // ==========================================
    // Country Card → Copeak Reading
    // ==========================================

    async function startCountryReading(
        countryId
    ) {

        if (
            !countryId ||
            !window.CopeakRewards
        ) {
            return;
        }


        const countries =
            await window
                .CopeakRewards
                .loadCountries();


        const country =
            countries.find(
                item =>
                    item.id ===
                    countryId
            );


        if (!country) {

            console.warn(
                "[Copeak Rewards UI] Country not found:",
                countryId
            );

            return;
        }


        const readingEn =
            country
                .readAloud
                ?.full
                ?.en ||
            "";


        if (!readingEn.trim()) {

            alert(
                "この国の英語音読データがありません。"
            );

            return;
        }


        const nameEn =
            country.name?.en ||
            country.id;


        const nameJa =
            country.name?.ja ||
            "";


        // Libraryには保存しない一時教材
        const lesson = {

            id:
                `world_country_${country.id}`,

            title:
                `🌍 ${nameEn}`,

            eng:
                readingEn,

            jpn:
                country
                    .readAloud
                    ?.full
                    ?.ja ||
                "",

            lang:
                "en-US",

            langName:
                "🇺🇸 English (US)",

            type:
                "standard",

            dialogue:
                [],

            history:
                [],

            audioBlob:
                null,

            audioUrl:
                null,

            memoImage:
                null,

            isWorldCountry:
                true,

            countryId:
                country.id,

            countryNameEn:
                nameEn,

            countryNameJa:
                nameJa

        };


        closeModal();


        // 既存Copeakの教材開始処理をそのまま利用
        if (
            typeof startCustomLesson ===
            "function"
        ) {

            startCustomLesson(
                lesson
            );

            return;
        }


        // 念のためのfallback
        if (
            typeof openLearningScreen ===
            "function"
        ) {

            if (
                typeof currentCustomLesson !==
                "undefined"
            ) {

                currentCustomLesson =
                    lesson;
            }


            openLearningScreen(
                lesson
            );
        }
    }
    // ==========================================
// Capsule Result
// ==========================================

function showCapsuleResult(
    result
) {

    if (
        !result ||
        result.success !== true
    ) {
        return;
    }


    if (
        result.type ===
        "country"
    ) {

        showCountry(
            result.country,
            {
                isNew:
                    result.isNew,

                count:
                    result.count
            }
        );


        if (
            result.isNew
        ) {

            setTimeout(
                celebrateDiscovery,
                250
            );
        }

        return;
    }


    if (
        result.type ===
        "mini"
    ) {

        showMiniReward(
            result
        );
    }
}



// ==========================================
// World Gashapon Machine
// ==========================================

function showGashaponMachine() {

    if (
        !window.CopeakRewards ||
        !window.CopeakRewardsStorage
    ) {
        return;
    }


    const cost =
        Number(
            window
                .COPEAK_REWARDS_CONFIG
                ?.capsule
                ?.costSP ||
            150
        );


    const data =
        window
            .CopeakRewardsStorage
            .load();


    const sp =
        Number(
            data.spBalance ||
            0
        );


    if (sp < cost) {

        alert(
            `あと ${cost - sp} SP必要です。`
        );

        return;
    }


    // ======================================
    // ドーム内のカプセル
    // Talk Gacha風に毎回少し配置を変える
    // ======================================

    const colors = [
        "#c99e42",
        "#356d73",
        "#405f8b",
        "#765c7c",
        "#8b6942"
    ];


    const balls =
        Array.from(
            { length: 22 },
            (_, i) => {

                const left =
                    7 +
                    Math.random() * 86;

                const top =
                    48 +
                    Math.random() * 42;

                const rotate =
                    -40 +
                    Math.random() * 80;

                const scale =
                    0.78 +
                    Math.random() * 0.40;


                return `
                    <span
                        class="cr-gacha2-ball"
                        style="
                            left:${left.toFixed(1)}%;
                            top:${top.toFixed(1)}%;
                            --cr-ball-color:${colors[i % colors.length]};
                            transform:
                                translate(-50%,-50%)
                                rotate(${rotate.toFixed(0)}deg)
                                scale(${scale.toFixed(2)});
                            z-index:${Math.round(top)};
                        "
                    ></span>
                `;
            }
        )
        .join("");


    openModal(`
        <div class="cr-gacha2-screen">

            <div class="cr-gacha2-eyebrow">
                COPEAK WORLD CAPSULE
            </div>

            <div class="cr-gacha2-title">
                TURN THE HANDLE
            </div>

            <div class="cr-gacha2-sub">
                ハンドルを右に1回転させて、
                世界へのカプセルを取り出そう。
            </div>


            <div class="cr-gacha2-stage">

                <div
                    class="cr-gacha2-machine"
                    id="crGacha2Machine"
                >

                    <!-- Glass Dome -->
                    <div class="cr-gacha2-dome">

                        <div class="cr-gacha2-inventory">
                            ${balls}
                        </div>

                        <div class="cr-gacha2-world">
                            🌍
                        </div>

                        <div class="cr-gacha2-glass-shine"></div>

                    </div>


                    <!-- Control Body -->
                    <div class="cr-gacha2-body">

                        <div class="cr-gacha2-price">

                            <small>
                                WORLD CAPSULE
                            </small>

                            <strong>
                                ${cost} SP
                            </strong>

                        </div>


                        <div class="cr-gacha2-handle-zone">

                            <div
                                class="cr-gacha2-handle"
                                id="crGacha2Handle"
                                role="button"
                                tabindex="0"
                                aria-label="Turn the gacha handle"
                            >

                                <span class="cr-gacha2-handle-ring"></span>

                                <span
                                    class="
                                        cr-gacha2-handle-arm
                                        is-horizontal
                                    "
                                ></span>

                                <span
                                    class="
                                        cr-gacha2-handle-arm
                                        is-vertical
                                    "
                                ></span>

                                <span class="cr-gacha2-handle-hub">
                                    ↻
                                </span>

                            </div>

                            <div class="cr-gacha2-turn">
                                TURN RIGHT →
                            </div>

                        </div>


                        <div class="cr-gacha2-chute">

                            <small>
                                CAPSULE
                            </small>

                            <div>
                                ▼
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div
                class="cr-gacha2-status"
                id="crGacha2Status"
            >
                HANDLE READY
            </div>


            <div
                class="cr-gacha2-status-ja"
                id="crGacha2StatusJa"
            >
                ハンドルをつかんで右に回してください
            </div>


            <!-- Capsule Reveal -->
            <div
                class="cr-gacha2-reveal"
                id="crGacha2Reveal"
            >

                <div class="cr-gacha2-rays"></div>


                <button
                    type="button"
                    class="cr-gacha2-big-capsule"
                    id="crGacha2Capsule"
                    aria-label="Open capsule"
                >

                    <span class="cr-gacha2-capsule-world">
                        🌍
                    </span>

                    <span class="cr-gacha2-tap-badge">
                        TAP!
                    </span>

                </button>


                <div class="cr-gacha2-reveal-title">
                    CAPSULE DISPENSED!
                </div>

                <div class="cr-gacha2-reveal-ja">
                    カプセルをタップして世界を開こう
                </div>

            </div>


            <div
                class="cr-gacha2-flash"
                id="crGacha2Flash"
            ></div>

        </div>
    `);


    const machine =
        document.getElementById(
            "crGacha2Machine"
        );


    const handle =
        document.getElementById(
            "crGacha2Handle"
        );


    const status =
        document.getElementById(
            "crGacha2Status"
        );


    const statusJa =
        document.getElementById(
            "crGacha2StatusJa"
        );


    const reveal =
        document.getElementById(
            "crGacha2Reveal"
        );


    const capsule =
        document.getElementById(
            "crGacha2Capsule"
        );
    const turnSfx = new Audio('./gatch.mp3');
    const openSfx = new Audio('./bright.mp3');

    turnSfx.preload = 'auto';
    openSfx.preload = 'auto';

    function playSfx(audio) {
        if (!audio) return;
        try {
            audio.currentTime = 0;
            audio.play();
        } catch (e) {
            console.warn('SFX play error:', e);
        }
    }

    let dragging = false;

    let dispensed = false;

    let opening = false;

    let rotation = 0;

    let cumulativeRotation = 0;

    let lastAngle = 0;

    let lastTick = 0;

    let turnSfxPlayed = false;


    // ======================================
    // Pointer角度
    // ======================================

    function getAngle(event) {

        const rect =
            handle.getBoundingClientRect();


        const centerX =
            rect.left +
            rect.width / 2;


        const centerY =
            rect.top +
            rect.height / 2;


        return (
            Math.atan2(
                event.clientY - centerY,
                event.clientX - centerX
            ) *
            180 /
            Math.PI
        );
    }


    // ======================================
    // Capsule排出
    // ======================================

    function dispenseCapsule() {

        if (dispensed) {
            return;
        }


        dispensed = true;

        dragging = false;


        handle.classList.remove(
            "is-dragging"
        );


        handle.classList.add(
            "is-complete"
        );


        machine.classList.add(
            "is-rumbling"
        );


        status.textContent =
            "GACHA... GACHA...";


        statusJa.textContent =
            "カプセルを取り出しています";


        if (
            navigator.vibrate
        ) {

            navigator.vibrate(
                [80, 40, 100]
            );
        }


        setTimeout(
            () => {

                machine.classList.remove(
                    "is-rumbling"
                );


                reveal.classList.add(
                    "is-visible"
                );


                status.textContent =
                    "CAPSULE DISPENSED!";


                statusJa.textContent =
                    "カプセルをタップして開けよう！";

            },
            850
        );
    }


    // ======================================
    // Start Drag
    // ======================================

    handle.addEventListener(
        "pointerdown",
        event => {

            if (dispensed) {
                return;
            }


            dragging = true;
            turnSfxPlayed = false;


            lastAngle =
                getAngle(
                    event
                );


            handle.classList.add(
                "is-dragging"
            );


            try {

                handle.setPointerCapture(
                    event.pointerId
                );

            } catch (_) {}


            event.preventDefault();
        }
    );


    // ======================================
    // Turn Handle
    // ======================================

    handle.addEventListener(
        "pointermove",
        event => {

            if (
                !dragging ||
                dispensed
            ) {
                return;
            }
                        if (!turnSfxPlayed) {
                playSfx(turnSfx);
                turnSfxPlayed = true;
            }

            const currentAngle =
                getAngle(
                    event
                );


            let delta =
                currentAngle -
                lastAngle;


            // -180 / 180 の境界補正
            if (delta > 180) {
                delta -= 360;
            }

            if (delta < -180) {
                delta += 360;
            }


            rotation +=
                delta;


            cumulativeRotation =
                Math.max(
                    0,
                    cumulativeRotation +
                    delta
                );


            lastAngle =
                currentAngle;


            handle.style.setProperty(
                "--cr-gacha2-rotation",
                `${rotation}deg`
            );


            const progress =
                Math.min(
                    100,
                    Math.round(
                        cumulativeRotation /
                        360 *
                        100
                    )
                );


            status.textContent =
                `TURN RIGHT → ${progress}%`;


            statusJa.textContent =
                progress < 100
                    ? "そのまま右へ回そう"
                    : "OK!";


            // Talk Gachaと同じ感覚で
            // 約60度ごとに小さく振動
            const tick =
                Math.floor(
                    cumulativeRotation /
                    60
                );


            if (
                tick >
                lastTick
            ) {

                lastTick =
                    tick;


                machine.classList.add(
                    "is-ticking"
                );


                setTimeout(
                    () => {

                        machine
                            .classList
                            .remove(
                                "is-ticking"
                            );

                    },
                    70
                );


                if (
                    navigator.vibrate
                ) {

                    navigator.vibrate(
                        6
                    );
                }
            }


            if (
                cumulativeRotation >=
                360
            ) {

                dispenseCapsule();
            }


            event.preventDefault();
        }
    );


    // ======================================
    // End Drag
    // ======================================

    function stopDragging(
        event
    ) {

        dragging = false;


        handle.classList.remove(
            "is-dragging"
        );


        if (
            event &&
            event.pointerId !==
            undefined
        ) {

            try {

                handle.releasePointerCapture(
                    event.pointerId
                );

            } catch (_) {}
        }
    }


    handle.addEventListener(
        "pointerup",
        stopDragging
    );


    handle.addEventListener(
        "pointercancel",
        stopDragging
    );


    // ======================================
    // Keyboard fallback
    // ======================================

    handle.addEventListener(
        "keydown",
        event => {

            if (
                dispensed ||
                (
                    event.key !==
                    "Enter" &&
                    event.key !==
                    " "
                )
            ) {
                return;
            }


            event.preventDefault();

            playSfx(turnSfx);

            handle.classList.add(
                "is-auto-turning"
            );


            status.textContent =
                "TURNING...";


            statusJa.textContent =
                "ハンドルを回しています";


            setTimeout(
                dispenseCapsule,
                950
            );
        }
    );


    // ======================================
    // Open Capsule
    // ======================================

    capsule.addEventListener(
        "click",
        async () => {

            if (
                !dispensed ||
                opening
            ) {
                return;
            }


            opening = true;


            capsule.disabled =
                true;
            
            playSfx(openSfx);

            status.textContent =
                "OPENING...";


            statusJa.textContent =
                "世界を開いています";


            const result =
                await window
                    .CopeakRewards
                    .openCapsule();


            if (
                !result ||
                result.success !== true
            ) {

                alert(
                    "World Capsuleを開けませんでした。"
                );


                showCollection();

                return;
            }


            capsule.classList.add(
                "is-opening"
            );


            document
                .getElementById(
                    "crGacha2Flash"
                )
                ?.classList
                .add(
                    "is-active"
                );


            if (
                navigator.vibrate
            ) {

                navigator.vibrate(
                    [60, 30, 120]
                );
            }


            setTimeout(
                () => {

                    showCapsuleResult(
                        result
                    );

                },
                700
            );
        }
    );
}
        // ==========================================
    // Capsule Opening Animation
    // ==========================================

    function showCapsuleOpening() {

    return new Promise(
        resolve => {

            openModal(`
                <div class="cr-capsule-opening">

                    <div class="cr-capsule-space">

                        <div class="cr-capsule-ring ring-1"></div>
                        <div class="cr-capsule-ring ring-2"></div>
                        <div class="cr-capsule-ring ring-3"></div>

                        <div class="cr-capsule-rays"></div>

                        <div class="cr-capsule-orb">

                            <div class="cr-capsule-top">
                                🌍
                            </div>

                            <div class="cr-capsule-line"></div>

                            <div class="cr-capsule-bottom">
                                COPEAK
                            </div>

                        </div>

                    </div>


                    <div
                        class="cr-capsule-status"
                        id="crCapsuleStatus"
                    >
                        WORLD SIGNAL SEARCHING...
                    </div>


                    <div
                        class="cr-capsule-status-ja"
                        id="crCapsuleStatusJa"
                    >
                        世界からシグナルを探しています
                    </div>


                    <div class="cr-capsule-scan">

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>


                    <div
                        class="cr-capsule-flash"
                        id="crCapsuleFlash"
                    ></div>

                </div>
            `);


            const orb =
                document.querySelector(
                    ".cr-capsule-orb"
                );

            const status =
                document.getElementById(
                    "crCapsuleStatus"
                );

            const statusJa =
                document.getElementById(
                    "crCapsuleStatusJa"
                );


            // Stage 1
            setTimeout(
                () => {

                    if (status) {
                        status.textContent =
                            "SIGNAL DETECTED";
                    }

                    if (statusJa) {
                        statusJa.textContent =
                            "シグナルを発見しました";
                    }

                    orb?.classList.add(
                        "is-charging"
                    );

                },
                900
            );


            // Stage 2
            setTimeout(
                () => {

                    if (status) {
                        status.textContent =
                            "LOCKING WORLD COORDINATES...";
                    }

                    if (statusJa) {
                        statusJa.textContent =
                            "世界の座標を特定しています";
                    }

                    orb?.classList.add(
                        "is-shaking"
                    );

                },
                1800
            );


            // Stage 3
            setTimeout(
                () => {

                    if (status) {
                        status.textContent =
                            "DISCOVERY READY";
                    }

                    if (statusJa) {
                        statusJa.textContent =
                            "新しい発見が目前です";
                    }

                    orb?.classList.add(
                        "is-critical"
                    );

                    if (
                        navigator.vibrate
                    ) {
                        navigator.vibrate(
                            [40, 40, 80]
                        );
                    }

                },
                2700
            );


            // Burst
            setTimeout(
                () => {

                    if (status) {
                        status.textContent =
                            "OPEN!";
                    }

                    if (statusJa) {
                        statusJa.textContent =
                            "";
                    }

                    orb?.classList.add(
                        "is-opening"
                    );


                    document
                        .getElementById(
                            "crCapsuleFlash"
                        )
                        ?.classList
                        .add(
                            "is-active"
                        );

                },
                3300
            );


            // Result
            setTimeout(
                resolve,
                3900
            );

        }
    );
}


    // ==========================================
    // New Country Celebration
    // ==========================================

    function celebrateDiscovery() {

        if (
            typeof window.confetti !==
            "function"
        ) {
            return;
        }


        window.confetti({

            particleCount: 90,

            spread: 75,

            origin: {
                y: 0.55
            }

        });
    }
    // ==========================================
    // Capsuleを開いて結果表示
    // ==========================================

        async function openCapsule() {

        if (
            capsuleOpening ||
            !window.CopeakRewards
        ) {
            return;
        }


        capsuleOpening =
            true;


        try {

            // ======================================
            // まず抽選
            // ======================================

            const result =
                await window
                    .CopeakRewards
                    .openCapsule();


            if (!result) {
                return;
            }


            // ======================================
            // SP不足など
            // ======================================

            if (
                result.success !==
                true
            ) {

                if (
                    result.reason ===
                    "not_enough_sp"
                ) {

                    alert(
                        `SPが足りません。\n\n必要：${result.requiredSP} SP\n現在：${result.currentSP} SP`
                    );

                    return;
                }


                alert(
                    "World Capsuleを開けませんでした。"
                );


                return;
            }


            // ======================================
            // Opening Animation
            // ======================================

            await showCapsuleOpening();


            showCapsuleResult(
    result
);


        } finally {

            capsuleOpening =
                false;
        }
    }

        // ==========================================
    // World Collection
    // ==========================================

    async function showCollection(
        selectedRegion = "ALL"
    ) {

        if (
            !window.CopeakRewards ||
            !window.CopeakRewardsStorage
        ) {
            return;
        }


        const countries =
            await window
                .CopeakRewards
                .loadCountries();


        const rewardData =
            window
                .CopeakRewardsStorage
                .load();


        const owned =
            rewardData.countries ||
            {};


        const ownedCount =
            countries.filter(
                country =>
                    Number(
                        owned[country.id] ||
                        0
                    ) > 0
            ).length;


        const total =
            countries.length;


        const progress =
            total > 0
                ? (
                    ownedCount /
                    total
                ) * 100
                : 0;


        const spBalance =
            Number(
                rewardData.spBalance ||
                0
            );
        const capsuleCost =
    Number(
        window
            .COPEAK_REWARDS_CONFIG
            ?.capsule
            ?.costSP ||
        150
    );


const canOpenCapsule =
    spBalance >=
    capsuleCost;

        const regions = [
            "ALL",
            "Asia",
            "Europe",
            "Africa",
            "Americas",
            "Oceania"
        ];


        const filtered =
            selectedRegion === "ALL"
                ? countries
                : countries.filter(
                    country =>
                        country
                            .geography
                            ?.region
                            ?.en ===
                        selectedRegion
                );


        const tiles =
            filtered
                .map(
                    country => {

                        const count =
                            Number(
                                owned[
                                    country.id
                                ] ||
                                0
                            );


                        const isOwned =
                            count > 0;


                        if (
                            !isOwned
                        ) {

                            return `
                                <div
                                    class="
                                        cr-country-tile
                                        is-locked
                                    "
                                >

                                    <div
                                        class="
                                            cr-tile-locked
                                        "
                                    >
                                        🔒
                                    </div>


                                    <div
                                        class="
                                            cr-tile-name
                                        "
                                    >
                                        ???
                                    </div>


                                    <div
                                        class="
                                            cr-tile-ja
                                        "
                                    >
                                        未発見
                                    </div>


                                    <div
                                        class="
                                            cr-tile-region
                                        "
                                    >
                                        UNKNOWN
                                    </div>

                                </div>
                            `;
                        }


                        const code =
                            String(
                                country.code2 ||
                                ""
                            )
                            .toLowerCase();


                        return `
                            <div
                                class="
                                    cr-country-tile
                                    is-owned
                                "

                                data-country-id="${escapeHtml(country.id)}"
                            >

                                <div
                                    class="
                                        cr-tile-count
                                    "
                                >
                                    ×${count}
                                </div>


                                <div
                                    class="
                                        cr-tile-flag
                                    "
                                >
                                    <img
                                        src="
                                            https://flagcdn.com/${escapeHtml(
                                                code
                                            )}.svg
                                        "

                                        alt="
                                            ${escapeHtml(
                                                country
                                                    .name
                                                    ?.en ||
                                                ""
                                            )}
                                        "
                                    >
                                </div>


                                <div
                                    class="
                                        cr-tile-name
                                    "
                                >
                                    ${escapeHtml(
                                        country
                                            .name
                                            ?.en ||
                                        country.id
                                    )}
                                </div>


                                <div
                                    class="
                                        cr-tile-ja
                                    "
                                >
                                    ${escapeHtml(
                                        country
                                            .name
                                            ?.ja ||
                                        ""
                                    )}
                                </div>


                                <div
                                    class="
                                        cr-tile-region
                                    "
                                >
                                    ${escapeHtml(
                                        country
                                            .geography
                                            ?.region
                                            ?.en ||
                                        ""
                                    )}
                                </div>

                            </div>
                        `;
                    }
                )
                .join("");


        const tabs =
            regions
                .map(
                    region => `
                        <button
                            type="button"

                            class="
                                cr-region-tab
                                ${
                                    selectedRegion ===
                                    region
                                        ? "is-active"
                                        : ""
                                }
                            "

                            data-region="${escapeHtml(region)}"
                        >
                            ${escapeHtml(
                                region
                            )}
                        </button>
                    `
                )
                .join("");


        openModal(`
            <div
                class="
                    cr-collection
                "
            >

                <div
                    class="
                        cr-collection-header
                    "
                >

                    <div>

                        <div
                            class="
                                cr-collection-eyebrow
                            "
                        >
                            COPEAK REWARDS
                        </div>


                        <h2
                            class="
                                cr-collection-title
                            "
                        >
                            🌍 World Collection
                        </h2>

                    </div>


                    <div
                        class="
                            cr-collection-stats
                        "
                    >

                        <div
                            class="
                                cr-stat-box
                            "
                        >

                            <div
                                class="
                                    cr-stat-label
                                "
                            >
                                COLLECTED
                            </div>

                            <div
                                class="
                                    cr-stat-number
                                "
                            >
                                ${ownedCount}
                                /
                                ${total}
                            </div>

                        </div>


                        <div
                            class="
                                cr-stat-box
                            "
                        >

                            <div
                                class="
                                    cr-stat-label
                                "
                            >
                                YOUR SP
                            </div>

                            <div
                                class="
                                    cr-stat-number
                                "
                            >
                                ${spBalance}
                            </div>

                        </div>

                    </div>

                </div>


                <div
                    class="
                        cr-progress
                    "
                >
                    <div
                        class="
                            cr-progress-bar
                        "

                        style="
                            width:
                            ${progress}%;
                        "
                    ></div>
                </div>
<div class="cr-collection-guide">

    <div class="cr-guide-copy">

        <div class="cr-guide-kicker">
            READ · EARN · DISCOVER
        </div>

        <div class="cr-guide-title">
            音読して、世界を集めよう。
        </div>

        <div class="cr-guide-text">
            Copeakで音読するとSPがたまります。
            150SPでWorld Capsuleを1回開けて、
            世界197カ国のCountry Cardを集めることができます。
            手に入れたカードでは、その国について学び、
            英文をそのままCopeakで音読できます。
        </div>

    </div>


    <div class="cr-guide-steps">

        <div class="cr-guide-step">
            <span class="cr-guide-number">1</span>
            <span class="cr-guide-icon">🎙️</span>
            <strong>READ</strong>
            <small>Copeakで音読</small>
        </div>

        <div class="cr-guide-arrow">
            →
        </div>

        <div class="cr-guide-step">
            <span class="cr-guide-number">2</span>
            <span class="cr-guide-icon">✨</span>
            <strong>EARN</strong>
            <small>SPをためる</small>
        </div>

        <div class="cr-guide-arrow">
            →
        </div>

        <div class="cr-guide-step">
            <span class="cr-guide-number">3</span>
            <span class="cr-guide-icon">🌍</span>
            <strong>DISCOVER</strong>
            <small>世界を発見</small>
        </div>

    </div>


    <div class="cr-guide-note">
        ※ 同じ国が出ることもあります。新しい国を発見するとCollectionが増えます。
    </div>

<div class="cr-capsule-area">

    <button
        type="button"
        class="cr-capsule-button ${canOpenCapsule ? "is-ready" : "is-locked"}"
        id="crOpenCapsuleBtn"
        ${canOpenCapsule ? "" : "disabled"}
    >

        <span>
            🎁 OPEN WORLD CAPSULE · ${capsuleCost} SP
        </span>

        <small>
            ${
                canOpenCapsule
                    ? "READY! TURN THE HANDLE"
                    : `あと ${capsuleCost - spBalance} SP`
            }
        </small>

    </button>

</div>


                <div
                    class="
                        cr-region-tabs
                    "
                >
                    ${tabs}
                </div>


                <div
                    class="
                        cr-collection-grid
                    "
                >
                    ${tiles}
                </div>

            </div>
        `);


        const overlay =
            document.getElementById(
                "copeakRewardOverlay"
            );


        // Region切替
        overlay
            ?.querySelectorAll(
                ".cr-region-tab"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            const region =
                                button.dataset
                                    .region ||
                                "ALL";


                            showCollection(
                                region
                            );
                        }
                    );
                }
            );


        // Country Card
        overlay
            ?.querySelectorAll(
                ".cr-country-tile.is-owned"
            )
            .forEach(
                tile => {

                    tile.addEventListener(
                        "click",
                        () => {

                            const id =
                                tile.dataset
                                    .countryId;


                            if (id) {

                                showCountryById(
                                    id
                                );
                            }
                        }
                    );
                }
            );


        // Capsule
overlay
    ?.querySelector(
        "#crOpenCapsuleBtn"
    )
    ?.addEventListener(
        "click",
        () => {

            showGashaponMachine();

        }
    );
    }
        // ==========================================
    // Header SP
    // ==========================================

    function updateRewardHeader() {

        const el =
            document.getElementById(
                "worldCollectionSp"
            );

        if (
            !el ||
            !window.CopeakRewardsStorage
        ) {
            return;
        }

        const data =
            window.CopeakRewardsStorage
                .load();

        el.textContent =
            `${Number(
                data.spBalance || 0
            )} SP`;
    }


    window.addEventListener(
        "copeak:rewards-updated",
        updateRewardHeader
    );


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            updateRewardHeader
        );

    } else {

        updateRewardHeader();
    }
        // ==========================================
    // Reading Reward Toast
    // ==========================================

    function showReadingRewardToast(
        reward
    ) {

        if (
            !reward ||
            reward.valid !== true
        ) {
            return;
        }


        const oldToast =
            document.getElementById(
                "copeakReadingRewardToast"
            );


        if (oldToast) {
            oldToast.remove();
        }


        const toast =
            document.createElement(
                "div"
            );


        toast.id =
            "copeakReadingRewardToast";


        toast.className =
            "cr-reward-toast";


        const breakdown =
            Array.isArray(
                reward.breakdown
            )
                ? reward.breakdown
                : [];


        const bonusHtml =
            breakdown
                .filter(
                    item =>
                        item.type !==
                        "reading"
                )
                .map(
                    item => `
                        <div
                            class="cr-reward-toast-bonus"
                        >
                            <span>
                                ${escapeHtml(
                                    item.label
                                )}
                            </span>

                            <strong>
                                +${Number(
                                    item.sp || 0
                                )} SP
                            </strong>
                        </div>
                    `
                )
                .join("");


        toast.innerHTML = `
            <div
                class="cr-reward-toast-head"
            >
                <span>
                    ✓ READING COMPLETE
                </span>

                <span
                    class="cr-reward-toast-read"
                >
                    READ #${Number(
                        reward.reads || 0
                    )}
                </span>
            </div>


            <div
                class="cr-reward-toast-points"
            >
                +${Number(
                    reward.earnedSP || 0
                )}
                <span>SP</span>
            </div>


            ${
                bonusHtml
                    ? `
                        <div
                            class="cr-reward-toast-breakdown"
                        >
                            ${bonusHtml}
                        </div>
                    `
                    : ""
            }


            <div
                class="cr-reward-toast-balance"
            >
                TOTAL
                <strong>
                    ${Number(
                        reward.spBalance || 0
                    )} SP
                </strong>
            </div>
        `;


        document.body.appendChild(
            toast
        );


        requestAnimationFrame(
            () => {

                toast.classList.add(
                    "is-visible"
                );
            }
        );


        setTimeout(
            () => {

                toast.classList.remove(
                    "is-visible"
                );


                setTimeout(
                    () => {
                        toast.remove();
                    },
                    350
                );

            },
            4200
        );
    }


    window.addEventListener(
        "copeak:reading-reward",
        event => {

            showReadingRewardToast(
                event.detail
            );
        }
    );
    // ==========================================
    // Public
    // ==========================================

   window.CopeakRewardsUI = {

    openCapsule,

    showCountry,

    showCountryById,

    showCollection,
    
    showGashaponMachine,

    startCountryReading,

    updateHeader:
        updateRewardHeader,

    close:
        closeModal

};

})();