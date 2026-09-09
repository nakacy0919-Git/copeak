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
    // Capsule Opening Animation
    // ==========================================

    function showCapsuleOpening() {

        return new Promise(
            resolve => {

                openModal(`
                    <div class="cr-capsule-opening">

                        <div class="cr-capsule-label">
                            COPEAK WORLD CAPSULE
                        </div>

                        <div class="cr-capsule-stage">

                            <div class="cr-capsule-glow"></div>

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

                        <div class="cr-capsule-opening-title">
                            DISCOVERING YOUR WORLD...
                        </div>

                        <div class="cr-capsule-opening-ja">
                            新しい世界を探索しています
                        </div>

                        <div class="cr-capsule-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>
                `);


                setTimeout(
                    () => {

                        const orb =
                            document.querySelector(
                                ".cr-capsule-orb"
                            );

                        if (orb) {
                            orb.classList.add(
                                "is-opening"
                            );
                        }

                    },
                    900
                );


                setTimeout(
                    resolve,
                    1700
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


            // ======================================
            // Country Card
            // ======================================

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


            // ======================================
            // Mini Reward
            // ======================================

            if (
                result.type ===
                "mini"
            ) {

                showMiniReward(
                    result
                );
            }


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


                <div
                    class="
                        cr-capsule-area
                    "
                >
                    <button
    type="button"
    class="cr-capsule-button"
    id="crOpenCapsuleBtn"
>
    🎁 OPEN WORLD CAPSULE · 150 SP
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
                async () => {

                    await openCapsule();

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

    updateHeader:
        updateRewardHeader,

    close:
        closeModal

};

})();