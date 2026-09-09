// ==========================================
// rewards-storage.js
// Copeak Rewards 専用ローカル保存
// ※ Copeak本体の storage.js とは完全に分離
// ==========================================

(function () {
    "use strict";

    const DEFAULT_STORAGE_KEY = "copeak_rewards_v1";

    function getStorageKey() {
        return window.COPEAK_REWARDS_CONFIG?.storageKey || DEFAULT_STORAGE_KEY;
    }

    function createDefaultRewardsData() {
        const now = new Date().toISOString();

        return {
            version: 1,

            // SP
            spBalance: 0,       // 現在使えるSP
            lifetimeSP: 0,      // 今まで獲得した累計SP

            // 努力・成長
            totalReads: 0,
            explorerLevel: 1,
            lessonStats: {},

            // World Collection
            countries: {},
            capsulesOpened: 0,
            discoveryFragments: 0,
            discoveryTickets: 0,

            createdAt: now,
            updatedAt: now
        };
    }

    function normalizeRewardsData(raw) {
        const base = createDefaultRewardsData();

        if (!raw || typeof raw !== "object") {
            return base;
        }

        // 以前の試作データで totalSP を使っていた場合の互換処理
        const legacySP =
            Number.isFinite(Number(raw.totalSP))
                ? Math.max(0, Number(raw.totalSP))
                : 0;

        const spBalance =
            Number.isFinite(Number(raw.spBalance))
                ? Math.max(0, Number(raw.spBalance))
                : legacySP;

        const lifetimeSP =
            Number.isFinite(Number(raw.lifetimeSP))
                ? Math.max(0, Number(raw.lifetimeSP))
                : Math.max(spBalance, legacySP);

        return {
            ...base,
            ...raw,

            version: 1,
            spBalance,
            lifetimeSP,

            totalReads:
                Number.isFinite(Number(raw.totalReads))
                    ? Math.max(0, Math.floor(Number(raw.totalReads)))
                    : 0,

            explorerLevel:
                Number.isFinite(Number(raw.explorerLevel))
                    ? Math.max(1, Math.floor(Number(raw.explorerLevel)))
                    : 1,

            capsulesOpened:
                Number.isFinite(Number(raw.capsulesOpened))
                    ? Math.max(0, Math.floor(Number(raw.capsulesOpened)))
                    : 0,

            discoveryFragments:
                Number.isFinite(Number(raw.discoveryFragments))
                    ? Math.max(0, Math.floor(Number(raw.discoveryFragments)))
                    : 0,

            discoveryTickets:
                Number.isFinite(Number(raw.discoveryTickets))
                    ? Math.max(0, Math.floor(Number(raw.discoveryTickets)))
                    : 0,

            lessonStats:
                raw.lessonStats &&
                typeof raw.lessonStats === "object" &&
                !Array.isArray(raw.lessonStats)
                    ? raw.lessonStats
                    : {},

            countries:
                raw.countries &&
                typeof raw.countries === "object" &&
                !Array.isArray(raw.countries)
                    ? raw.countries
                    : {}
        };
    }

    function loadRewards() {
        try {
            const raw = localStorage.getItem(getStorageKey());

            if (!raw) {
                return createDefaultRewardsData();
            }

            return normalizeRewardsData(
                JSON.parse(raw)
            );

        } catch (error) {
            console.error(
                "[Copeak Rewards] load failed:",
                error
            );

            return createDefaultRewardsData();
        }
    }

    function saveRewards(data) {
        try {
            const normalized =
                normalizeRewardsData(data);

            normalized.updatedAt =
                new Date().toISOString();

            localStorage.setItem(
    getStorageKey(),
    JSON.stringify(normalized)
);

window.dispatchEvent(
    new CustomEvent(
        "copeak:rewards-updated",
        {
            detail: normalized
        }
    )
);

return normalized;

        } catch (error) {
            console.error(
                "[Copeak Rewards] save failed:",
                error
            );

            return null;
        }
    }

    function updateRewards(mutator) {
        if (typeof mutator !== "function") {
            return loadRewards();
        }

        const current =
            loadRewards();

        try {
            const next =
                mutator(current) || current;

            return saveRewards(next);

        } catch (error) {
            console.error(
                "[Copeak Rewards] update failed:",
                error
            );

            return null;
        }
    }

    function getSnapshot() {
        const data =
            loadRewards();

        if (
            typeof structuredClone ===
            "function"
        ) {
            return structuredClone(data);
        }

        return JSON.parse(
            JSON.stringify(data)
        );
    }

    function resetRewards() {
        const fresh =
            createDefaultRewardsData();

        return saveRewards(fresh);
    }

    window.CopeakRewardsStorage = {
        load: loadRewards,
        save: saveRewards,
        update: updateRewards,
        snapshot: getSnapshot,
        reset: resetRewards,
        createDefault: createDefaultRewardsData
    };

})();