// ==========================================
// rewards-config.js
// Copeak Rewards 設定
// SP・ガチャ確率などはここだけで調整する
// ==========================================

window.COPEAK_REWARDS_CONFIG = {

    version: 1,

    // --------------------------------------
    // 1. 保存
    // --------------------------------------

    storageKey: "copeak_rewards_v1",


    // --------------------------------------
    // 2. 有効な音読の条件
    // --------------------------------------
    // 0 / 0 や音声認識失敗をReward対象から除外
    // 実際の判定処理は rewards.js が担当する
    // --------------------------------------

    validReading: {

        minAccuracy: 0.1,

        minWpm: 1,

        requireTranscript: true,

        minTranscriptLength: 1

    },


    // --------------------------------------
    // 3. SP
    // --------------------------------------

    sp: {

        // 正常な音読1回
        validReading: 10,


        // 同じ教材を繰り返した努力
        milestones: {

            5: 15,

            10: 35,

            20: 75

        },


        // Accuracy自己ベスト
        accuracyPersonalBest: {

            points: 5,

            // 3ポイント以上更新した場合
            minImprovementPoints: 3

        },


        // WPM自己ベスト
        wpmPersonalBest: {

            points: 5,

            // 5%以上更新した場合
            minImprovementRate: 0.05

        },


        // 1回の音読でもらえる
        // PBボーナスの最大値
        maxGrowthBonusPerReading: 10,


        // Copeak Levelの新しい段階を
        // 初めて達成した場合
        levelFirstAchievement: 10

    },


    // --------------------------------------
    // 4. World Capsule
    // --------------------------------------

    capsule: {

        // 1回のガチャに必要なSP
        costSP: 100,


        // ----------------------------------
        // 第1抽選
        // ----------------------------------

        // Country Card
        countryCardRate: 0.85,

        // カード以外の小さなReward
        miniRewardRate: 0.15,


        // ----------------------------------
        // Country Cardに当選した場合
        // ----------------------------------
        //
        // 60%：
        // まだ持っていない国から抽選
        //
        // 40%：
        // 197か国すべてから抽選
        // → 重複カードも発生
        //
        // ----------------------------------

        newCountryBoostRate: 0.60

    },


    // --------------------------------------
    // 5. Mini Reward
    // --------------------------------------
    // Country Cardが出なかった場合でも
    // 完全な「0」にはしない
    //
    // weightは相対的な抽選比率
    // --------------------------------------

    miniRewards: [

        {
            type: "sp",
            amount: 10,
            weight: 50
        },

        {
            type: "sp",
            amount: 20,
            weight: 35
        },

        {
            type: "sp",
            amount: 30,
            weight: 15
        }

    ],


    // --------------------------------------
    // 6. Collection
    // --------------------------------------

    collection: {

        totalCountries: 197,

        countryDataPath: "countries.json",

        regions: [
            "Africa",
            "Americas",
            "Asia",
            "Europe",
            "Oceania"
        ]

    },


    // --------------------------------------
    // 7. Debug
    // --------------------------------------
    // 開発中のみ true にすると、
    // rewards.js から詳細ログを出せる
    // 本番では false
    // --------------------------------------

    debug: false

};