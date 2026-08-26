// ==========================================
// 1. ミニマルペア コースデータ (courses)
// ==========================================
const courses = {
    "l-r": {
        id: "l-r", title: "L / R", subtitle: "Light or Right?", labelJa: "LとRの聞き分け",
        theme: "text-emerald-600", bgTheme: "bg-emerald-50", coachA: "l", coachB: "r",
        pairs: [
            { wordA: "light", wordB: "right", ipaA: "/laɪt/", ipaB: "/raɪt/" },
            { wordA: "lead", wordB: "read", ipaA: "/liːd/", ipaB: "/riːd/" },
            { wordA: "glass", wordB: "grass", ipaA: "/ɡlæs/", ipaB: "/ɡræs/" },
            { wordA: "play", wordB: "pray", ipaA: "/pleɪ/", ipaB: "/preɪ/" }
        ],
        phrases: [
            { text: "red light", translation: "赤い信号", targetWords: ["light"], kana: "レッド ライト" },
            { text: "turn right", translation: "右に曲がる", targetWords: ["right"], kana: "ターン ライト" }
        ],
        sentences: [
            { text: "Turn right at the red light.", translation: "赤信号で右に曲がってください。", targetWords: ["right", "light"], kana: "ターン ライト アット ザ レッド ライト" }
        ]
    },
    "b-v": {
        id: "b-v", title: "B / V", subtitle: "Berry or Very?", labelJa: "BとVの聞き分け",
        theme: "text-blue-600", bgTheme: "bg-blue-50", coachA: "b", coachB: "v",
        pairs: [
            { wordA: "berry", wordB: "very", ipaA: "/ˈbɛri/", ipaB: "/ˈvɛri/" },
            { wordA: "best", wordB: "vest", ipaA: "/bɛst/", ipaB: "/vɛst/" },
            { wordA: "boat", wordB: "vote", ipaA: "/boʊt/", ipaB: "/voʊt/" },
            { wordA: "ban", wordB: "van", ipaA: "/bæn/", ipaB: "/væn/" }
        ],
        phrases: [
            { text: "very best", translation: "最高の", targetWords: ["very", "best"], kana: "ヴェリー ベスト" },
            { text: "big van", translation: "大きなバン（車）", targetWords: ["van"], kana: "ビッグ ヴァン" }
        ],
        sentences: [
            { text: "He drives a very big van.", translation: "彼はとても大きなバンを運転します。", targetWords: ["very", "van"], kana: "ヒー ドライヴズ ア ヴェリー ビッグ ヴァン" }
        ]
    },
    "s-sh": {
        id: "s-sh", title: "S / SH", subtitle: "See or She?", labelJa: "SとSHの聞き分け",
        theme: "text-indigo-600", bgTheme: "bg-indigo-50", coachA: "s", coachB: "sh",
        pairs: [
            { wordA: "see", wordB: "she", ipaA: "/siː/", ipaB: "/ʃiː/" },
            { wordA: "seat", wordB: "sheet", ipaA: "/siːt/", ipaB: "/ʃiːt/" },
            { wordA: "save", wordB: "shave", ipaA: "/seɪv/", ipaB: "/ʃeɪv/" },
            { wordA: "sign", wordB: "shine", ipaA: "/saɪn/", ipaB: "/ʃaɪn/" }
        ],
        phrases: [
            { text: "see the sea", translation: "海を見る", targetWords: ["see"], kana: "シー ザ シー" },
            { text: "clean sheet", translation: "清潔なシーツ", targetWords: ["sheet"], kana: "クリーン シート" }
        ],
        sentences: [
            { text: "She sells sea shells on the beach.", translation: "彼女はビーチで貝殻を売っています。", targetWords: ["She", "shells"], kana: "シー セルズ シー シェルズ オン ザ ビーチ" }
        ]
    },
    "s-th": {
        id: "s-th", title: "S / TH", subtitle: "Sink or Think?", labelJa: "Sと無声音TH",
        theme: "text-teal-600", bgTheme: "bg-teal-50", coachA: "s", coachB: "th_s",
        pairs: [
            { wordA: "sink", wordB: "think", ipaA: "/sɪŋk/", ipaB: "/θɪŋk/" },
            { wordA: "sing", wordB: "thing", ipaA: "/sɪŋ/", ipaB: "/θɪŋ/" },
            { wordA: "face", wordB: "faith", ipaA: "/feɪs/", ipaB: "/feɪθ/" },
            { wordA: "mouse", wordB: "mouth", ipaA: "/maʊs/", ipaB: "/maʊθ/" }
        ],
        phrases: [
            { text: "think twice", translation: "よく考える", targetWords: ["think"], kana: "シンク トワイス" },
            { text: "sink down", translation: "沈み込む", targetWords: ["sink"], kana: "シンク ダウン" }
        ],
        sentences: [
            { text: "I think the ship will sink.", translation: "その船は沈むと思います。", targetWords: ["think", "sink"], kana: "アイ シンク ザ シップ ウィル シンク" }
        ]
    },
    "th-z": {
        id: "th-z", title: "TH / Z", subtitle: "Breathe or Breeze?", labelJa: "有声音THとZ",
        theme: "text-emerald-500", bgTheme: "bg-emerald-50", coachA: "th_z", coachB: "z",
        pairs: [
            { wordA: "breathe", wordB: "breeze", ipaA: "/briːð/", ipaB: "/briːz/" },
            { wordA: "teething", wordB: "teasing", ipaA: "/ˈtiːðɪŋ/", ipaB: "/ˈtiːzɪŋ/" },
            { wordA: "clothing", wordB: "closing", ipaA: "/ˈkloʊðɪŋ/", ipaB: "/ˈkloʊzɪŋ/" },
            { wordA: "lathe", wordB: "laze", ipaA: "/leɪð/", ipaB: "/leɪz/" }
        ],
        phrases: [
            { text: "cool breeze", translation: "涼しい風", targetWords: ["breeze"], kana: "クール ブリーズ" },
            { text: "breathe deeply", translation: "深呼吸する", targetWords: ["breathe"], kana: "ブリーズ ディープリー" }
        ],
        sentences: [
            { text: "Breathe deeply in the cool breeze.", translation: "涼しい風の中で深呼吸してください。", targetWords: ["Breathe", "breeze"], kana: "ブリーズ ディープリー イン ザ クール ブリーズ" }
        ]
    },
    "f-h": {
        id: "f-h", title: "F / H", subtitle: "Food or Hood?", labelJa: "FとHの聞き分け",
        theme: "text-amber-600", bgTheme: "bg-amber-50", coachA: "f", coachB: "h",
        pairs: [
            { wordA: "food", wordB: "hood", ipaA: "/fuːd/", ipaB: "/hʊd/" },
            { wordA: "feel", wordB: "heel", ipaA: "/fiːl/", ipaB: "/hiːl/" },
            { wordA: "fool", wordB: "pool", ipaA: "/fuːl/", ipaB: "/huːl/" },
            { wordA: "fat", wordB: "hat", ipaA: "/fæt/", ipaB: "/hæt/" }
        ],
        phrases: [
            { text: "fast food", translation: "ファストフード", targetWords: ["fast", "food"], kana: "ファスト フード" },
            { text: "high heel", translation: "ハイヒール", targetWords: ["high", "heel"], kana: "ハイ ヒール" }
        ],
        sentences: [
            { text: "He wears a hat and eats fast food.", translation: "彼は帽子をかぶってファストフードを食べます。", targetWords: ["hat", "fast", "food"], kana: "ヒー ウェアズ ア ハット アンド イーツ ファスト フード" }
        ]
    },
    "f-v": {
        id: "f-v", title: "F / V", subtitle: "Fan or Van?", labelJa: "無声音と有声音(F/V)",
        theme: "text-rose-500", bgTheme: "bg-rose-50", coachA: "f", coachB: "v",
        pairs: [
            { wordA: "fan", wordB: "van", ipaA: "/fæn/", ipaB: "/væn/" },
            { wordA: "safe", wordB: "save", ipaA: "/seɪf/", ipaB: "/seɪv/" },
            { wordA: "leaf", wordB: "leave", ipaA: "/liːf/", ipaB: "/liːv/" },
            { wordA: "half", wordB: "have", ipaA: "/hæf/", ipaB: "/hæv/" }
        ],
        phrases: [
            { text: "half price", translation: "半額", targetWords: ["half"], kana: "ハフ プライス" },
            { text: "safe drive", translation: "安全運転", targetWords: ["safe", "drive"], kana: "セイフ ドライヴ" }
        ],
        sentences: [
            { text: "Drive safe in the big van.", translation: "大きなバンで安全運転してください。", targetWords: ["safe", "van"], kana: "ドライヴ セイフ イン ザ ビッグ ヴァン" }
        ]
    },
    "p-f": {
        id: "p-f", title: "P / F", subtitle: "Pool or Fool?", labelJa: "PとFの聞き分け",
        theme: "text-fuchsia-600", bgTheme: "bg-fuchsia-50", coachA: "p", coachB: "f",
        pairs: [
            { wordA: "pool", wordB: "fool", ipaA: "/puːl/", ipaB: "/fuːl/" },
            { wordA: "pan", wordB: "fan", ipaA: "/pæn/", ipaB: "/fæn/" },
            { wordA: "copy", wordB: "coffee", ipaA: "/ˈkɑːpi/", ipaB: "/ˈkɔːfi/" },
            { wordA: "pine", wordB: "fine", ipaA: "/paɪn/", ipaB: "/faɪn/" }
        ],
        phrases: [
            { text: "hot coffee", translation: "ホットコーヒー", targetWords: ["coffee"], kana: "ホット コーヒー" },
            { text: "swimming pool", translation: "プール", targetWords: ["pool"], kana: "スイミング プール" }
        ],
        sentences: [
            { text: "I drink coffee by the pool.", translation: "プールのそばでコーヒーを飲みます。", targetWords: ["coffee", "pool"], kana: "アイ ドリンク コーヒー バイ ザ プール" }
        ]
    },
    "w-v": {
        id: "w-v", title: "W / V", subtitle: "West or Vest?", labelJa: "WとVの聞き分け",
        theme: "text-cyan-600", bgTheme: "bg-cyan-50", coachA: "w", coachB: "v",
        pairs: [
            { wordA: "west", wordB: "vest", ipaA: "/wɛst/", ipaB: "/vɛst/" },
            { wordA: "wet", wordB: "vet", ipaA: "/wɛt/", ipaB: "/vɛt/" },
            { wordA: "wine", wordB: "vine", ipaA: "/waɪn/", ipaB: "/vaɪn/" },
            { wordA: "worse", wordB: "verse", ipaA: "/wɜːrs/", ipaB: "/vɜːrs/" }
        ],
        phrases: [
            { text: "red wine", translation: "赤ワイン", targetWords: ["wine"], kana: "レッド ワイン" },
            { text: "wet floor", translation: "濡れた床", targetWords: ["wet"], kana: "ウェット フロア" }
        ],
        sentences: [
            { text: "Do not spill wine on the wet floor.", translation: "濡れた床にワインをこぼさないでください。", targetWords: ["wine", "wet"], kana: "ドゥ ノット スピル ワイン オン ザ ウェット フロア" }
        ]
    },
    "i-ee": {
        id: "i-ee", title: "I / EE", subtitle: "Hit or Heat?", labelJa: "短いイ・長いイー",
        theme: "text-fuchsia-500", bgTheme: "bg-fuchsia-50", coachA: "i_short", coachB: "i_long",
        pairs: [
            { wordA: "hit", wordB: "heat", ipaA: "/hɪt/", ipaB: "/hiːt/" },
            { wordA: "sit", wordB: "seat", ipaA: "/sɪt/", ipaB: "/siːt/" },
            { wordA: "ship", wordB: "sheep", ipaA: "/ʃɪp/", ipaB: "/ʃiːp/" },
            { wordA: "fit", wordB: "feet", ipaA: "/fɪt/", ipaB: "/fiːt/" }
        ],
        phrases: [
            { text: "take a seat", translation: "席に座る", targetWords: ["seat"], kana: "テイク ア シート" },
            { text: "big ship", translation: "大きな船", targetWords: ["ship"], kana: "ビッグ シップ" }
        ],
        sentences: [
            { text: "Please sit on the seat.", translation: "その席に座ってください。", targetWords: ["sit", "seat"], kana: "プリーズ シット オン ザ シート" }
        ]
    },
    "a-u": {
        id: "a-u", title: "A / U", subtitle: "Cat or Cut?", labelJa: "アとア (æ / ʌ)",
        theme: "text-rose-500", bgTheme: "bg-rose-50", coachA: "a_ae", coachB: "a_wedge",
        pairs: [
            { wordA: "cat", wordB: "cut", ipaA: "/kæt/", ipaB: "/kʌt/" },
            { wordA: "hat", wordB: "hut", ipaA: "/hæt/", ipaB: "/hʌt/" },
            { wordA: "match", wordB: "much", ipaA: "/mætʃ/", ipaB: "/mʌtʃ/" },
            { wordA: "cap", wordB: "cup", ipaA: "/kæp/", ipaB: "/kʌp/" }
        ],
        phrases: [
            { text: "black cat", translation: "黒猫", targetWords: ["cat"], kana: "ブラック キャット" },
            { text: "coffee cup", translation: "コーヒーカップ", targetWords: ["cup"], kana: "コーヒー カップ" }
        ],
        sentences: [
            { text: "The black cat is in the hut.", translation: "黒猫が小屋の中にいます。", targetWords: ["cat", "hut"], kana: "ザ ブラック キャット イズ イン ザ ハット" }
        ]
    },
    "e-a": {
        id: "e-a", title: "E / A", subtitle: "Bed or Bad?", labelJa: "エとア (ɛ / æ)",
        theme: "text-purple-600", bgTheme: "bg-purple-50", coachA: "e", coachB: "a_ae",
        pairs: [
            { wordA: "bed", wordB: "bad", ipaA: "/bɛd/", ipaB: "/bæd/" },
            { wordA: "head", wordB: "had", ipaA: "/hɛd/", ipaB: "/hæd/" },
            { wordA: "men", wordB: "man", ipaA: "/mɛn/", ipaB: "/mæn/" },
            { wordA: "said", wordB: "sad", ipaA: "/sɛd/", ipaB: "/sæd/" }
        ],
        phrases: [
            { text: "red bed", translation: "赤いベッド", targetWords: ["bed"], kana: "レッド ベッド" },
            { text: "bad man", translation: "悪い男", targetWords: ["bad", "man"], kana: "バッド マン" }
        ],
        sentences: [
            { text: "The bad man sat on the bed.", translation: "その悪い男はベッドに座った。", targetWords: ["bad", "man", "bed"], kana: "ザ バッド マン サット オン ザ ベッド" }
        ]
    },
    "n-ng": {
        id: "n-ng", title: "N / NG", subtitle: "Sin or Sing?", labelJa: "鼻音の聞き分け",
        theme: "text-emerald-500", bgTheme: "bg-emerald-50", coachA: "n", coachB: "ng",
        pairs: [
            { wordA: "sin", wordB: "sing", ipaA: "/sɪn/", ipaB: "/sɪŋ/" },
            { wordA: "thin", wordB: "thing", ipaA: "/θɪn/", ipaB: "/θɪŋ/" },
            { wordA: "ran", wordB: "rang", ipaA: "/ræn/", ipaB: "/ræŋ/" },
            { wordA: "win", wordB: "wing", ipaA: "/wɪn/", ipaB: "/wɪŋ/" }
        ],
        phrases: [
            { text: "sing a song", translation: "歌を歌う", targetWords: ["sing"], kana: "シング ア ソング" },
            { text: "win the game", translation: "試合に勝つ", targetWords: ["win"], kana: "ウィン ザ ゲイム" }
        ],
        sentences: [
            { text: "Sing a song and win the game.", translation: "歌を歌って試合に勝とう。", targetWords: ["Sing", "win"], kana: "シング ア ソング アンド ウィン ザ ゲイム" }
        ]
    },
    "u-oo": {
        id: "u-oo", title: "U / OO", subtitle: "Pull or Pool?", labelJa: "ウとウー (ʊ / u:)",
        theme: "text-cyan-600", bgTheme: "bg-cyan-50", coachA: "u_short", coachB: "u_long",
        pairs: [
            { wordA: "pull", wordB: "pool", ipaA: "/pʊl/", ipaB: "/puːl/" },
            { wordA: "full", wordB: "fool", ipaA: "/fʊl/", ipaB: "/fuːl/" },
            { wordA: "look", wordB: "luke", ipaA: "/lʊk/", ipaB: "/luːk/" },
            { wordA: "wood", wordB: "wooed", ipaA: "/wʊd/", ipaB: "/wuːd/" }
        ],
        phrases: [
            { text: "look at", translation: "〜を見る", targetWords: ["look"], kana: "ルック アット" },
            { text: "swimming pool", translation: "プール", targetWords: ["pool"], kana: "スイミング プール" }
        ],
        sentences: [
            { text: "Look at the fool in the pool.", translation: "プールにいるあのバカ者を見て。", targetWords: ["Look", "fool", "pool"], kana: "ルック アット ザ フール イン ザ プール" }
        ]
    },
    "ur-ar": {
        id: "ur-ar", title: "UR / AR", subtitle: "Hurt or Heart?", labelJa: "こもったアとアー",
        theme: "text-purple-600", bgTheme: "bg-purple-50", coachA: "ur", coachB: "ar",
        pairs: [
            { wordA: "hurt", wordB: "heart", ipaA: "/hɜːrt/", ipaB: "/hɑːrt/" },
            { wordA: "firm", wordB: "farm", ipaA: "/fɜːrm/", ipaB: "/fɑːrm/" },
            { wordA: "stir", wordB: "star", ipaA: "/stɜːr/", ipaB: "/stɑːr/" },
            { wordA: "bird", wordB: "bard", ipaA: "/bɜːrd/", ipaB: "/bɑːrd/" }
        ],
        phrases: [
            { text: "bright star", translation: "明るい星", targetWords: ["star"], kana: "ブライト スター" },
            { text: "hurt arm", translation: "痛む腕", targetWords: ["hurt"], kana: "ハート アーム" }
        ],
        sentences: [
            { text: "The bird flies to the star.", translation: "その鳥は星に向かって飛びます。", targetWords: ["bird", "star"], kana: "ザ バード フライズ トゥ ザ スター" }
        ]
    },
    "aw-ow": {
        id: "aw-ow", title: "AW / OW", subtitle: "Bought or Boat?", labelJa: "オーとオウ",
        theme: "text-orange-500", bgTheme: "bg-orange-50", coachA: "aw", coachB: "ow",
        pairs: [
            { wordA: "bought", wordB: "boat", ipaA: "/bɔːt/", ipaB: "/boʊt/" },
            { wordA: "caught", wordB: "coat", ipaA: "/kɔːt/", ipaB: "/koʊt/" },
            { wordA: "law", wordB: "low", ipaA: "/lɔː/", ipaB: "/loʊ/" },
            { wordA: "saw", wordB: "so", ipaA: "/sɔː/", ipaB: "/soʊ/" }
        ],
        phrases: [
            { text: "new boat", translation: "新しいボート", targetWords: ["boat"], kana: "ニュー ボート" },
            { text: "caught a fish", translation: "魚を捕まえた", targetWords: ["caught"], kana: "コート ア フィッシュ" }
        ],
        sentences: [
            { text: "I bought a new boat.", translation: "私は新しいボートを買いました。", targetWords: ["bought", "boat"], kana: "アイ ボート ア ニュー ボート" }
        ]
    }
};

// ==========================================
// 2. 音声解説コーチングデータ (coachingData)
// ==========================================
const coachingData = {
    // ----------------------------------------
    // 子音 (Consonants)
    // ----------------------------------------
    "l": {
        symbol: "/l/", title: "舌先をピタッと押し当てる", theme: "emerald",
        howTo: "Lの音は「舌先をどこに置くか」がすべてです。上の前歯のすぐ裏にある膨らみ（歯茎）に、舌先をピタッと押し当ててください。そのままの状態で、舌の両脇のすき間から声と息を逃がすように「ウー」と鳴らします。",
        tips: "日本語の「ラ行」よりも、はるかにしっかりと舌を上に押し付けます。",
        wordLists: [
            { title: "/l/ の入った単語", desc: "語頭のL（ライトL）は、はっきり明るく聞こえます。", words: ["large", "learn", "less", "letter", "light", "like", "lift", "list", "long", "love", "black", "flag"] },
            { title: "知っておきたい！「ダークL」", desc: "単語の最後や子音の前にくると、こもった「オ」や「ウ」のような響きに変わります。", words: ["always", "also", "apple", "beautiful", "call", "cold", "feel", "girl", "help", "milk", "school", "tall"] }
        ]
    },
    "r": {
        symbol: "/r/", title: "空間を作り、舌を奥に引く", theme: "emerald",
        howTo: "Rの音は、口の中の『空間づくり』がカギになります。唇を「ウ」の形にすぼめて前に突き出し、舌全体を喉の奥へグッと引き込みます。この時、舌先は上を向きますが、口の中のどこにも触れてはいけません。うがいをするような、くぐもった「ゥー」という音が出れば大成功です。",
        tips: "よく「舌を巻く」と勘違いされますが、実際に巻いてしまうと不自然な音になります。『舌を根元から奥に引く』『唇を少し丸める』の2点を守るだけで綺麗なRになります。",
        wordLists: [
            { title: "/r/ の入った単語", desc: "口を丸めて、こもった音を作ることに集中しましょう。", words: ["already", "experience", "favorite", "parents", "period", "read", "red", "rest", "return", "story"] },
            { title: "語尾のRは引きっぱなし！", desc: "直前の母音を発音した後、そのままの口の形で舌を奥に引きます。", words: ["doctor", "door", "remember", "river", "ruler"] }
        ]
    },
    "b": {
        symbol: "/b/", title: "唇を弾いて音を出す「ブ」", theme: "blue",
        howTo: "上下の唇をしっかりと閉じ、息をせき止めます。そして、喉を震わせながら「ブッ」と一気に唇を開いて音を出します。",
        tips: "日本語の「バ行」とほぼ同じですが、より唇をしっかり閉じて弾く感覚を意識しましょう。",
        wordLists: [
            { title: "/b/ の入った単語", desc: "唇をしっかり閉じてから発音します。", words: ["berry", "best", "boat", "ban", "big"] }
        ]
    },
    "v": {
        symbol: "/v/", title: "下唇を噛んで震わせる「ヴ」", theme: "blue",
        howTo: "上の前歯で下唇の内側を軽く押さえます。そのまま喉を震わせながら、歯と唇の隙間から息をこすり出すように「ヴー」と音を出します。",
        tips: "下唇を強く噛みすぎる必要はありません。上の歯が触れる程度で十分です。",
        wordLists: [
            { title: "/v/ の入った単語", desc: "歯と唇の間でビリビリと震えるのを感じましょう。", words: ["very", "vest", "vote", "van", "voice"] }
        ]
    },
    "s": {
        symbol: "/s/", title: "隙間から鋭く息を出す「ス」", theme: "indigo",
        howTo: "舌先を上の前歯に近づけて、ただしひっつけずに、間に細い空気の通り道を作ります。その間から鋭く息を出して発音します。日本語の「さすせそ」とほぼ同じ子音です。ただし、/si:/は日本語の「し」の発音とは違うので注意しましょう。",
        tips: "舌先は上の歯茎の裏あたりに近づけます。息の摩擦音だけを鋭く出すのがポイントです。",
        wordLists: [
            { title: "/s/ の入った単語", desc: "鋭い摩擦音を意識しましょう。", words: ["see", "sink", "seat", "save", "sign"] }
        ]
    },
    "sh": {
        symbol: "/ʃ/", title: "静かにさせる時の「シッ」", theme: "indigo",
        howTo: "舌先を歯茎から少し喉の奥側の上あごに近づけるべく反らせて、空気が通るせまい道を作ります。",
        tips: "日本語の「シ」よりも唇を少し前に突き出し、息の通り道を広くして「シュッ」と音を出します。",
        wordLists: [
            { title: "/ʃ/ の入った単語", desc: "唇を少し前に丸めて発音します。", words: ["she", "sheet", "shave", "shine", "shoe"] }
        ]
    },
    "z": {
        symbol: "/z/", title: "隙間から鋭く息を出して濁らせる「ズ」", theme: "emerald",
        howTo: "舌先を上の前歯に近づけて、ただしひっつけずに、間に細い空気の通り道を作ります。その間から鋭く息を出して発音します。日本語の「ざじずぜぞ」を発音するときには舌先が歯にひっつく瞬間がある場合もありますが、英語の/z/では舌先を口の中のどこにもひっつけず、間から通した息の音色のみで発音することがポイントです。",
        tips: "喉の震えを伴う有声音です。舌をどこにも当てないことで、ビリビリとした摩擦音を作ります。",
        wordLists: [
            { title: "/z/ の入った単語", desc: "舌を当てずにビリビリと濁らせます。", words: ["breeze", "teasing", "closing", "laze", "zoo"] }
        ]
    },
    "th_s": {
        symbol: "/θ/", title: "舌先を軽く噛んで息を出す（無声音）", theme: "teal",
        howTo: "上下の前歯で舌先を軽く挟みます。その状態で、舌と上の歯の隙間から「スッ」と息をこすり出すように音を出します。声（喉の震え）は出しません。",
        tips: "舌を出しすぎる必要はありません。ほんの少し歯の間から見える程度で十分です。",
        wordLists: [
            { title: "/θ/ の入った単語", desc: "舌を軽く挟んで息だけを出します。", words: ["think", "thing", "faith", "mouth", "thank"] }
        ]
    },
    "th_z": {
        symbol: "/ð/", title: "舌先を軽く噛んで声を出す（有声音）", theme: "emerald",
        howTo: "上下の前歯で舌先を軽く挟み、その状態から喉を震わせて「ズッ」と濁った音を出します。",
        tips: "ハエが飛ぶような「ズー」という振動音を作ります。舌が歯に触れてビリビリするのを感じてください。",
        wordLists: [
            { title: "/ð/ の入った単語", desc: "舌を軽く挟んで喉を震わせます。", words: ["breathe", "teething", "clothing", "this", "that"] }
        ]
    },
    "f": {
        symbol: "/f/", title: "下唇を軽く噛んで息を出す「フ」", theme: "amber",
        howTo: "上の前歯で下唇の内側を軽く押さえます。声は出さず、歯と唇の隙間から息だけを強く「フッ」とこすり出します。",
        tips: "ろうそくの火を吹き消すような強い息を意識しましょう。下唇を噛みすぎないように注意です。",
        wordLists: [
            { title: "/f/ の入った単語", desc: "息の音だけで鋭く発音します。", words: ["food", "feel", "fool", "fat", "fan"] }
        ]
    },
    "h": {
        symbol: "/h/", title: "喉の奥からため息をつく「ハ」", theme: "amber",
        howTo: "口をぽかんと開け、喉の奥から「ハァー」と温かい息を吐き出します。",
        tips: "冬の寒い日に、手に温かい息を吹きかける時のような感覚です。口のどこにも力を入れません。",
        wordLists: [
            { title: "/h/ の入った単語", desc: "喉からリラックスして息を出します。", words: ["hood", "heel", "hat", "hot", "house"] }
        ]
    },
    "p": {
        symbol: "/p/", title: "唇を弾いて息を出す「プ」", theme: "fuchsia",
        howTo: "上下の唇をしっかりと閉じ、息をせき止めます。声は出さず、「プッ」と一気に唇を開いて息だけを破裂させます。",
        tips: "口の前にティッシュを置いたら、息でパッと揺れるくらい鋭く発音します。",
        wordLists: [
            { title: "/p/ の入った単語", desc: "唇をしっかり閉じてから弾きます。", words: ["pool", "pan", "copy", "pine", "pig"] }
        ]
    },
    "w": {
        symbol: "/w/", title: "唇をタコのように丸める「ゥワ」", theme: "cyan",
        howTo: "唇をタコのようにギュッと小さく丸め、前に突き出します。そこから「ゥワッ」と一気に唇を開きながら声を出します。",
        tips: "日本語の「ワ」よりも、はるかに口を小さく丸めてスタートするのがポイントです。",
        wordLists: [
            { title: "/w/ の入った単語", desc: "唇をギュッとすぼめてから開きます。", words: ["west", "wet", "wine", "worse", "water"] }
        ]
    },
    "n": {
        symbol: "/n/", title: "舌を歯茎につけて鼻に抜く「ン」", theme: "emerald",
        howTo: "舌全体を上あご（前歯の裏の歯茎）にぴったりとくっつけ、口から息が出ないように塞ぎます。そのまま声を鼻に響かせて「ンー」と鳴らします。",
        tips: "日本語の「案内（アンナイ）」の「ン」の時の舌の位置です。",
        wordLists: [
            { title: "/n/ の入った単語", desc: "舌を上あごにしっかりつけます。", words: ["sin", "thin", "ran", "win", "name"] }
        ]
    },
    "ng": {
        symbol: "/ŋ/", title: "舌の奥を持ち上げて鼻に抜く「ング」", theme: "emerald",
        howTo: "舌の奥（根元）を柔らかい口蓋（喉の奥の上部）に押し当てて息を塞ぎます。そのまま鼻から声を抜いて「ンー」と鳴らします。",
        tips: "日本語の「案外（アンガイ）」の「ン」の時の舌の位置です。舌先は下の歯の裏に下がっています。",
        wordLists: [
            { title: "/ŋ/ の入った単語", desc: "喉の奥を塞いで鼻に響かせます。", words: ["sing", "thing", "rang", "wing", "song"] }
        ]
    },

    // ----------------------------------------
    // 母音 (Vowels)
    // ----------------------------------------
    "i_short": {
        symbol: "/ɪ/", title: "リラックスした短い「イ」", theme: "fuchsia",
        howTo: "日本語の「エ」の口の形をして、短く「イ」と発音します。口や舌に力を入れないリラックスした音です。",
        tips: "「イ」と「エ」の中間のような音に聞こえます。鋭く「イッ」と言わないように注意しましょう。",
        wordLists: [
            { title: "/ɪ/ の入った単語", desc: "力を抜いて短く発音します。", words: ["hit", "sit", "ship", "fit", "bit"] }
        ]
    },
    "i_long": {
        symbol: "/iː/", title: "口を横に引いて伸ばす「イー」", theme: "fuchsia",
        howTo: "にっこり笑うように口を横にしっかり引き、口の中に緊張感を持たせて「イー」と長めに発音します。",
        tips: "日本語の「イー」よりも、もっと大げさに唇を横に引っ張るのがポイントです。",
        wordLists: [
            { title: "/iː/ の入った単語", desc: "口をしっかり横に引いて発音します。", words: ["heat", "seat", "sheep", "feet", "beat"] }
        ]
    },
    "a_ae": {
        symbol: "/æ/", title: "口を大きく開ける「エァ」", theme: "rose",
        howTo: "日本語の「ア」の口の形をして、喉の奥から「エ」と発音します。「エ」と「ア」が混ざったような音になります。",
        tips: "下あごをしっかり下げて口を大きく開けるのがコツです。",
        wordLists: [
            { title: "/æ/ の入った単語", desc: "口を大きく縦に開けて「エ」と言います。", words: ["cat", "hat", "match", "cap", "bad"] }
        ]
    },
    "a_wedge": {
        symbol: "/ʌ/", title: "短く鋭い「ア」", theme: "rose",
        howTo: "口をあまり開けず、リラックスした状態からお腹をキュッと引っ込めて、短く鋭く「アッ」と発音します。",
        tips: "驚いた時に思わず出る「アッ！」という音に似ています。",
        wordLists: [
            { title: "/ʌ/ の入った単語", desc: "短く鋭く発音します。", words: ["cut", "hut", "much", "cup", "but"] }
        ]
    },
    "e": {
        symbol: "/ɛ/", title: "日本語に近い「エ」", theme: "purple",
        howTo: "日本語の「エ」とほぼ同じ音です。口を少し横に開き、短く「エ」と発音します。",
        tips: "無理に口を大きく開ける必要はありません。自然な形で発音しましょう。",
        wordLists: [
            { title: "/ɛ/ の入った単語", desc: "日本語の「エ」をイメージします。", words: ["bed", "head", "men", "said", "red"] }
        ]
    },
    "u_short": {
        symbol: "/ʊ/", title: "リラックスした「ウ」", theme: "cyan",
        howTo: "口を少しだけ丸め、リラックスした状態で短く「ウ」と発音します。唇を突き出しすぎないのがポイントです。",
        tips: "日本語の「ウ」よりも、少し口の中を広く保ち、弱く発音します。",
        wordLists: [
            { title: "/ʊ/ の入った単語", desc: "力を抜いて短く発音します。", words: ["pull", "full", "look", "wood", "book"] }
        ]
    },
    "u_long": {
        symbol: "/uː/", title: "唇をすぼめて伸ばす「ウー」", theme: "cyan",
        howTo: "唇をタコのようにギュッとすぼめて前に突き出し、緊張感を持たせて「ウー」と長めに発音します。",
        tips: "日本語の「ウー」よりも、はるかに大げさに唇を丸め続けるのがコツです。",
        wordLists: [
            { title: "/uː/ の入った単語", desc: "唇をギュッと丸めて発音します。", words: ["pool", "fool", "luke", "wooed", "boot"] }
        ]
    },
    "ur": {
        symbol: "/ɜːr/", title: "口をすぼめて喉の奥で鳴らす「アー」", theme: "purple",
        howTo: "口をあまり開けず、舌を喉の奥に引き込みながら「アー」と長めに発音します。",
        tips: "唇をリラックスさせたまま、舌の根元を後ろに引くことで、こもった響き（Rの音色）を作ります。",
        wordLists: [
            { title: "/ɜːr/ の入った単語", desc: "こもったRの響きを意識します。", words: ["hurt", "firm", "stir", "bird", "girl"] }
        ]
    },
    "ar": {
        symbol: "/ɑːr/", title: "口を大きく開ける「アー」", theme: "purple",
        howTo: "指が縦に2本入るくらい口を大きく開け、喉の奥から「アー」と声を出し、最後に少し舌を引いてRの響きを足します。",
        tips: "お医者さんに喉を見せる時に「アーンして」と言われる時の、あの大きな口の形です。",
        wordLists: [
            { title: "/ɑːr/ の入った単語", desc: "口を大きく開けてからRの音に繋げます。", words: ["heart", "farm", "star", "bard", "car"] }
        ]
    },
    "aw": {
        symbol: "/ɔː/", title: "口を縦に開ける「オー」", theme: "orange",
        howTo: "あくびをする時のように口を縦に大きく開け、喉の奥で「オー」と長めに発音します。",
        tips: "日本語の「オー」よりも、あごをしっかり下げて縦に開くのがポイントです。",
        wordLists: [
            { title: "/ɔː/ の入った単語", desc: "あごを下げて深く響かせます。", words: ["bought", "caught", "law", "saw", "call"] }
        ]
    },
    "ow": {
        symbol: "/oʊ/", title: "二重母音の「オウ」", theme: "orange",
        howTo: "最初は口を普通に開けて「オ」と言い、滑らかに口をすぼめて「ウ」へと変化させます。",
        tips: "「オー」とただ伸ばすのではなく、はっきりと口の形を変えて「オ・ウ」と2つの音を繋げます。",
        wordLists: [
            { title: "/oʊ/ の入った単語", desc: "口の形をしっかり変化させます。", words: ["boat", "coat", "low", "so", "show"] }
        ]
    }
};