// ==========================================
// rewards.js
// Copeak Rewards メインエンジン
// ==========================================

(function () {
    "use strict";

    // ------------------------------------------
    // 設定取得
    // ------------------------------------------

    function getConfig() {
        return window.COPEAK_REWARDS_CONFIG || {};
    }

    function getStorage() {
        return window.CopeakRewardsStorage || null;
    }


    // ------------------------------------------
    // 数値を安全に変換
    // ------------------------------------------

    function toNumber(value) {

        const num = Number(value);

        return Number.isFinite(num)
            ? num
            : 0;
    }


    // ------------------------------------------
    // 有効な音読か判定
    // 0 / 0・音声認識失敗などはReward対象外
    // ------------------------------------------

    function isValidReading(result) {

        const config =
            getConfig().validReading || {};

        const accuracy =
            toNumber(result?.accuracy);

        const wpm =
            toNumber(result?.wpm);

        const transcript =
            typeof result?.transcript === "string"
                ? result.transcript.trim()
                : "";


        if (
            accuracy <
            (config.minAccuracy ?? 0.1)
        ) {
            return false;
        }


        if (
            wpm <
            (config.minWpm ?? 1)
        ) {
            return false;
        }


        if (
            config.requireTranscript === true &&
            transcript.length <
            (config.minTranscriptLength ?? 1)
        ) {
            return false;
        }


        return true;
    }


    // ------------------------------------------
    // 教材ID
    // ------------------------------------------

    function getLessonKey(result) {

        return String(
            result?.lessonKey ||
            result?.lessonId ||
            ""
        ).trim();
    }


    // ------------------------------------------
    // 教材ごとの初期データ
    // ------------------------------------------

    function createLessonStats() {

        return {

            reads: 0,

            bestAccuracy: 0,

            bestWpm: 0,

            achievedLevels: [],

            lastReadAt: null

        };
    }


    // ------------------------------------------
    // Milestone SP
    // ------------------------------------------

    function getMilestoneBonus(
        reads,
        milestones
    ) {

        if (
            !milestones ||
            typeof milestones !== "object"
        ) {
            return 0;
        }

        const value =
            milestones[String(reads)] ??
            milestones[reads];

        return toNumber(value);
    }


    // ------------------------------------------
    // Level 初達成判定
    // ------------------------------------------

    function checkLevelAchievement(
        lessonStats,
        level
    ) {

        if (
            level === undefined ||
            level === null ||
            level === ""
        ) {
            return false;
        }


        const levelKey =
            String(level);


        if (
            lessonStats.achievedLevels.includes(
                levelKey
            )
        ) {
            return false;
        }


        lessonStats.achievedLevels.push(
            levelKey
        );

        return true;
    }


    // ==========================================
    // 音読結果をRewardへ反映
    // ==========================================

    function processReading(result) {

        const config =
            getConfig();

        const storage =
            getStorage();


        // Rewardファイル未読込
        if (!storage) {

            console.warn(
                "[Copeak Rewards] rewards-storage.js が読み込まれていません"
            );

            return null;
        }


        // --------------------------------------
        // 無効な音読
        // --------------------------------------

        if (!isValidReading(result)) {

            if (config.debug) {
                console.log(
                    "[Copeak Rewards] Invalid reading",
                    result
                );
            }


            return {

                valid: false,

                earnedSP: 0,

                reason: "invalid_reading",

                message:
                    "音声認識が正常に確認できなかったため、SPは加算されませんでした。"

            };
        }


        // --------------------------------------
        // 教材ID確認
        // --------------------------------------

        const lessonKey =
            getLessonKey(result);


        if (!lessonKey) {

            console.warn(
                "[Copeak Rewards] lessonId がありません"
            );

            return {

                valid: false,

                earnedSP: 0,

                reason: "missing_lesson_id"

            };
        }


        const accuracy =
            toNumber(result.accuracy);

        const wpm =
            toNumber(result.wpm);


        const spConfig =
            config.sp || {};


        let rewardResult = null;


        // ======================================
        // Storage更新
        // ======================================

        const saved =
            storage.update(data => {


                // --------------------------------
                // Lesson Stats
                // --------------------------------

                if (
                    !data.lessonStats[lessonKey]
                ) {

                    data.lessonStats[lessonKey] =
                        createLessonStats();
                }


                const stats =
                    data.lessonStats[lessonKey];


                // 古いデータ互換
                if (
                    !Array.isArray(
                        stats.achievedLevels
                    )
                ) {
                    stats.achievedLevels = [];
                }


                const previousBestAccuracy =
                    toNumber(
                        stats.bestAccuracy
                    );

                const previousBestWpm =
                    toNumber(
                        stats.bestWpm
                    );


                // --------------------------------
                // 今回のReward内訳
                // --------------------------------

                const breakdown = [];

                let earnedSP = 0;


                // =================================
                // 1. 基本努力点
                // =================================

                const baseSP =
                    toNumber(
                        spConfig.validReading
                    );


                earnedSP +=
                    baseSP;


                breakdown.push({

                    type: "reading",

                    label:
                        "Reading Complete",

                    sp: baseSP

                });


                // =================================
                // 2. 音読回数
                // =================================

                stats.reads =
                    toNumber(stats.reads) + 1;


                data.totalReads =
                    toNumber(data.totalReads) + 1;


                const currentReads =
                    stats.reads;


                // =================================
                // 3. Milestone
                // =================================

                const milestoneSP =
                    getMilestoneBonus(
                        currentReads,
                        spConfig.milestones
                    );


                if (milestoneSP > 0) {

                    earnedSP +=
                        milestoneSP;


                    breakdown.push({

                        type: "milestone",

                        label:
                            `${currentReads} Reads Milestone`,

                        sp:
                            milestoneSP

                    });
                }


                // =================================
                // 4. Accuracy Personal Best
                // =================================

                let accuracyPB =
                    false;


                // 初回はPBボーナス対象外
                if (
                    previousBestAccuracy > 0
                ) {

                    const improvement =
                        accuracy -
                        previousBestAccuracy;


                    const required =
                        toNumber(
                            spConfig
                                .accuracyPersonalBest
                                ?.minImprovementPoints
                        );


                    if (
                        improvement >=
                        required
                    ) {

                        accuracyPB = true;
                    }
                }


                if (
                    accuracy >
                    previousBestAccuracy
                ) {

                    stats.bestAccuracy =
                        accuracy;
                }


                // =================================
                // 5. WPM Personal Best
                // =================================

                let wpmPB =
                    false;


                // 初回はPBボーナス対象外
                if (
                    previousBestWpm > 0
                ) {

                    const improvementRate =
                        (
                            wpm -
                            previousBestWpm
                        ) /
                        previousBestWpm;


                    const requiredRate =
                        Number(
                            spConfig
                                .wpmPersonalBest
                                ?.minImprovementRate ??
                            0.05
                        );


                    if (
                        improvementRate >=
                        requiredRate
                    ) {

                        wpmPB = true;
                    }
                }


                if (
                    wpm >
                    previousBestWpm
                ) {

                    stats.bestWpm =
                        wpm;
                }


                // =================================
                // 6. Growth Bonus
                // =================================

                let growthSP = 0;


                if (accuracyPB) {

                    growthSP +=
                        toNumber(
                            spConfig
                                .accuracyPersonalBest
                                ?.points
                        );


                    breakdown.push({

                        type:
                            "accuracy_pb",

                        label:
                            "Accuracy Personal Best",

                        sp:
                            toNumber(
                                spConfig
                                    .accuracyPersonalBest
                                    ?.points
                            )

                    });
                }


                if (wpmPB) {

                    growthSP +=
                        toNumber(
                            spConfig
                                .wpmPersonalBest
                                ?.points
                        );


                    breakdown.push({

                        type:
                            "wpm_pb",

                        label:
                            "WPM Personal Best",

                        sp:
                            toNumber(
                                spConfig
                                    .wpmPersonalBest
                                    ?.points
                            )

                    });
                }


                // Growth Bonusの上限
                const growthLimit =
                    toNumber(
                        spConfig
                            .maxGrowthBonusPerReading
                    );


                if (
                    growthLimit > 0 &&
                    growthSP > growthLimit
                ) {

                    earnedSP +=
                        growthLimit;

                } else {

                    earnedSP +=
                        growthSP;
                }


                // =================================
                // 7. Copeak Level 初達成
                // =================================

                const levelAchieved =
                    checkLevelAchievement(
                        stats,
                        result.level
                    );


                if (levelAchieved) {

                    const levelSP =
                        toNumber(
                            spConfig
                                .levelFirstAchievement
                        );


                    earnedSP +=
                        levelSP;


                    breakdown.push({

                        type:
                            "level",

                        label:
                            `Level ${result.level} First Achievement`,

                        sp:
                            levelSP

                    });
                }


                // =================================
                // 8. SP保存
                // =================================

                data.spBalance =
                    toNumber(
                        data.spBalance
                    ) +
                    earnedSP;


                data.lifetimeSP =
                    toNumber(
                        data.lifetimeSP
                    ) +
                    earnedSP;


                stats.lastReadAt =
                    new Date().toISOString();


                // =================================
                // 今回結果
                // =================================

                rewardResult = {

                    valid: true,

                    lessonKey,

                    reads:
                        currentReads,

                    accuracy,

                    wpm,

                    accuracyPB,

                    wpmPB,

                    levelAchieved,

                    earnedSP,

                    breakdown,

                    spBalance:
                        data.spBalance,

                    lifetimeSP:
                        data.lifetimeSP,

                    bestAccuracy:
                        stats.bestAccuracy,

                    bestWpm:
                        stats.bestWpm

                };


                return data;
            });


        // 保存失敗
        if (!saved) {

            return {

                valid: false,

                earnedSP: 0,

                reason:
                    "storage_error"

            };
        }


        if (config.debug) {

    console.log(
        "[Copeak Rewards]",
        rewardResult
    );
}


// ==========================================
// Reward UIへ通知
// ==========================================
if (
    rewardResult &&
    rewardResult.valid
) {

    window.dispatchEvent(
        new CustomEvent(
            "copeak:reading-reward",
            {
                detail:
                    rewardResult
            }
        )
    );
}


return rewardResult;
    }

        // ==========================================
    // Country Data
    // ==========================================

    let cachedCountries = null;


    async function loadCountries() {

        if (cachedCountries) {
            return cachedCountries;
        }


        const config =
            getConfig();


        const path =
            config.collection?.countryDataPath ||
            "countries.json";


        try {

            const response =
                await fetch(path);


            if (!response.ok) {

                throw new Error(
                    `countries.json load failed: ${response.status}`
                );
            }


            const json =
                await response.json();


            if (
                !json ||
                !Array.isArray(json.countries)
            ) {

                throw new Error(
                    "countries.json format error"
                );
            }


            cachedCountries =
                json.countries;


            return cachedCountries;


        } catch (error) {

            console.error(
                "[Copeak Rewards] countries.json load failed:",
                error
            );


            return [];
        }
    }



    // ==========================================
    // Country取得回数
    // ==========================================

    function getCountryCount(
        countries,
        countryId
    ) {

        const value =
            countries?.[countryId];


        if (
            typeof value === "number"
        ) {

            return value;
        }


        if (
            value &&
            typeof value === "object"
        ) {

            return toNumber(
                value.count
            );
        }


        return 0;
    }



    // ==========================================
    // Random Pick
    // ==========================================

    function randomPick(array) {

        if (
            !Array.isArray(array) ||
            array.length === 0
        ) {

            return null;
        }


        const index =
            Math.floor(
                Math.random() *
                array.length
            );


        return array[index];
    }



    // ==========================================
    // Weighted Mini Reward
    // ==========================================

    function pickMiniReward(
        rewards
    ) {

        if (
            !Array.isArray(rewards) ||
            rewards.length === 0
        ) {

            return null;
        }


        const totalWeight =
            rewards.reduce(
                (sum, item) =>
                    sum +
                    Math.max(
                        0,
                        toNumber(
                            item.weight
                        )
                    ),
                0
            );


        if (
            totalWeight <= 0
        ) {

            return randomPick(
                rewards
            );
        }


        let roll =
            Math.random() *
            totalWeight;


        for (
            const reward
            of rewards
        ) {

            roll -=
                Math.max(
                    0,
                    toNumber(
                        reward.weight
                    )
                );


            if (
                roll <= 0
            ) {

                return reward;
            }
        }


        return rewards[
            rewards.length - 1
        ];
    }



    // ==========================================
    // WORLD CAPSULE
    // ==========================================

    async function openWorldCapsule() {

        const config =
            getConfig();


        const storage =
            getStorage();


        if (!storage) {

            return {

                success: false,

                reason:
                    "storage_unavailable"

            };
        }


        const capsuleConfig =
            config.capsule || {};


        const costSP =
            toNumber(
                capsuleConfig.costSP
            );


        const countries =
            await loadCountries();


        if (
            countries.length === 0
        ) {

            return {

                success: false,

                reason:
                    "country_data_unavailable"

            };
        }


        let capsuleResult =
            null;


        const saved =
            storage.update(
                data => {


                    // ==========================
                    // SP不足
                    // ==========================

                    if (
                        toNumber(
                            data.spBalance
                        ) <
                        costSP
                    ) {

                        capsuleResult = {

                            success:
                                false,

                            reason:
                                "not_enough_sp",

                            requiredSP:
                                costSP,

                            currentSP:
                                toNumber(
                                    data.spBalance
                                )

                        };


                        return data;
                    }



                    // ==========================
                    // SP消費
                    // ==========================

                    data.spBalance =
                        toNumber(
                            data.spBalance
                        ) -
                        costSP;


                    data.capsulesOpened =
                        toNumber(
                            data.capsulesOpened
                        ) +
                        1;



                    // ==========================
                    // 第1抽選
                    // Country Card / Mini Reward
                    // ==========================

                    const countryRate =
                        Number(
                            capsuleConfig
                                .countryCardRate ??
                            0.85
                        );


                    const isCountryCard =
                        Math.random() <
                        countryRate;



                    // ==========================
                    // COUNTRY CARD
                    // ==========================

                    if (
                        isCountryCard
                    ) {

                        const owned =
                            data.countries ||
                            {};


                        const unownedCountries =
                            countries.filter(
                                country =>
                                    getCountryCount(
                                        owned,
                                        country.id
                                    ) === 0
                            );


                        const newCountryBoostRate =
                            Number(
                                capsuleConfig
                                    .newCountryBoostRate ??
                                0.60
                            );


                        let pool =
                            countries;


                        let usedDiscoveryBoost =
                            false;


                        if (
                            unownedCountries.length >
                                0 &&
                            Math.random() <
                                newCountryBoostRate
                        ) {

                            pool =
                                unownedCountries;


                            usedDiscoveryBoost =
                                true;
                        }


                        const selectedCountry =
                            randomPick(
                                pool
                            );


                        if (
                            !selectedCountry
                        ) {

                            capsuleResult = {

                                success:
                                    false,

                                reason:
                                    "country_draw_failed"

                            };


                            // 抽選失敗時のみSPを返す
                            data.spBalance +=
                                costSP;


                            data.capsulesOpened -=
                                1;


                            return data;
                        }


                        const previousCount =
                            getCountryCount(
                                owned,
                                selectedCountry.id
                            );


                        const newCount =
                            previousCount +
                            1;


                        data.countries[
                            selectedCountry.id
                        ] =
                            newCount;


                        capsuleResult = {

                            success:
                                true,

                            type:
                                "country",

                            costSP,

                            country:
                                selectedCountry,

                            countryId:
                                selectedCountry.id,

                            isNew:
                                previousCount ===
                                0,

                            previousCount,

                            count:
                                newCount,

                            usedDiscoveryBoost,

                            spBalance:
                                data.spBalance,

                            collectedCountries:
                                Object.keys(
                                    data.countries
                                )
                                .filter(
                                    id =>
                                        getCountryCount(
                                            data.countries,
                                            id
                                        ) >
                                        0
                                )
                                .length

                        };


                        return data;
                    }



                    // ==========================
                    // MINI REWARD
                    // ==========================

                    const miniReward =
                        pickMiniReward(
                            config.miniRewards
                        );


                    if (
                        !miniReward
                    ) {

                        capsuleResult = {

                            success:
                                true,

                            type:
                                "mini",

                            reward:
                                null,

                            costSP,

                            spBalance:
                                data.spBalance

                        };


                        return data;
                    }


                    if (
                        miniReward.type ===
                        "sp"
                    ) {

                        const rewardSP =
                            toNumber(
                                miniReward.amount
                            );


                        // Mini Rewardは
                        // ガチャによる返却SPなので
                        // lifetimeSPには加算しない
                        data.spBalance +=
                            rewardSP;
                    }


                    capsuleResult = {

                        success:
                            true,

                        type:
                            "mini",

                        reward:
                            {
                                ...miniReward
                            },

                        costSP,

                        spBalance:
                            data.spBalance

                    };


                    return data;
                }
            );


        if (!saved) {

            return {

                success: false,

                reason:
                    "storage_error"

            };
        }


        if (
            config.debug
        ) {

            console.log(
                "[Copeak World Capsule]",
                capsuleResult
            );
        }


        return capsuleResult;
    }
    // ==========================================
    // SP残高取得
    // ==========================================

    function getRewardSummary() {

        const storage =
            getStorage();


        if (!storage) {
            return null;
        }


        const data =
            storage.load();


        return {

            spBalance:
                toNumber(
                    data.spBalance
                ),

            lifetimeSP:
                toNumber(
                    data.lifetimeSP
                ),

            totalReads:
                toNumber(
                    data.totalReads
                ),

            explorerLevel:
                toNumber(
                    data.explorerLevel
                ),

            collectedCountries:
                Object.keys(
                    data.countries || {}
                ).length,

            capsulesOpened:
                toNumber(
                    data.capsulesOpened
                )

        };
    }


    // ==========================================
    // 外部公開
    // ==========================================

    window.CopeakRewards = {

    processReading,

    isValidReading,

    getSummary:
        getRewardSummary,

    openCapsule:
        openWorldCapsule,

    loadCountries:
        loadCountries

};


    // speech.js から簡単に呼べる入口
    window.processCopeakReward =
        processReading;

})();