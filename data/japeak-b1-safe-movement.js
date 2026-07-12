// =====================================================
// Japeak B1 Level
// Scene: 安全に注意して移動しよう
// File: data/japeak-b1-safe-movement.js
// Category Key: b1_safe_movement
// =====================================================

const b1SafeMovementLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1SafeMovementTranslations(translations) {
    const completed = {};
    b1SafeMovementLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const b1SafeMovementContext = {
    ja: "道路、駅、バス、自転車、夜道、雨の日、混雑した場所などで、安全に注意しながら移動するための日本語を練習します。",
    en: "Practice Japanese for moving safely on roads, at stations, on buses, by bicycle, at night, on rainy days, and in crowded places.",
    "zh-CN": "练习在道路、车站、公交、自行车、夜路、雨天和拥挤场所中注意安全移动时使用的日语。",
    "zh-TW": "練習在道路、車站、公車、自行車、夜路、雨天和擁擠場所中注意安全移動時使用的日語。",
    ko: "도로, 역, 버스, 자전거, 밤길, 비 오는 날, 사람이 많은 장소에서 안전에 주의하며 이동하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật để di chuyển an toàn trên đường, ở nhà ga, trên xe buýt, bằng xe đạp, vào ban đêm, ngày mưa và nơi đông người.",
    tl: "Practice Japanese for moving safely on roads, at stations, on buses, by bicycle, at night, on rainy days, and in crowded places.",
    id: "Latihan bahasa Jepang untuk bergerak dengan aman di jalan, stasiun, bus, sepeda, malam hari, hari hujan, dan tempat ramai.",
    th: "ฝึกภาษาญี่ปุ่นเพื่อเดินทางอย่างปลอดภัยบนถนน ที่สถานี บนรถบัส ด้วยจักรยาน ตอนกลางคืน วันที่ฝนตก และสถานที่แออัด",
    my: "လမ်း၊ ဘူတာ၊ ဘတ်စ်ကား၊ စက်ဘီး၊ ညလမ်း၊ မိုးရွာသောနေ့နှင့် လူများသောနေရာများတွင် ဘေးကင်းစွာ သွားလာရန် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ធ្វើដំណើរដោយសុវត្ថិភាពលើផ្លូវ នៅស្ថានីយ លើឡានក្រុង ជិះកង់ ពេលយប់ ពេលភ្លៀង និងកន្លែងមានមនុស្សច្រើន។",
    ne: "सडक, स्टेशन, बस, साइकल, रातको बाटो, पानी परेको दिन र भीड भएको ठाउँमा सुरक्षित रूपमा हिँड्न जापानी अभ्यास।",
    mn: "Зам, өртөө, автобус, дугуй, шөнө, бороотой өдөр, хүн ихтэй газар аюулгүй хөдөлгөөн хийх япон хэлний дадлага.",
    si: "මාර්ගය, දුම්රිය ස්ථානය, බස් රථය, පාපැදිය, රාත්‍රී මාර්ගය, වැසි දින සහ ජනතාව වැඩි තැන්වල ආරක්ෂිතව ගමන් කිරීමට ජපන් භාෂා පුහුණුව.",
    bn: "রাস্তা, স্টেশন, বাস, সাইকেল, রাতের পথ, বৃষ্টির দিন এবং ভিড়ের জায়গায় নিরাপদে চলাচলের জাপানি অনুশীলন।",
    pt: "Prática de japonês para se deslocar com segurança em ruas, estações, ônibus, bicicleta, à noite, em dias de chuva e em lugares cheios.",
    es: "Práctica de japonés para desplazarse con seguridad en calles, estaciones, autobuses, bicicleta, de noche, en días de lluvia y en lugares concurridos.",
    fr: "Entraînement en japonais pour se déplacer en sécurité dans la rue, à la gare, en bus, à vélo, la nuit, les jours de pluie et dans les lieux bondés.",
    ru: "Практика японского языка для безопасного передвижения по дорогам, на станциях, в автобусе, на велосипеде, ночью, в дождь и в людных местах.",
    uk: "Практика японської мови для безпечного пересування дорогами, на станціях, в автобусі, велосипедом, уночі, в дощ і в людних місцях."
};

const b1SafeMovementSpeakerNames = {
    resident: {
        ja: "住民",
        en: "Resident",
        "zh-CN": "居民",
        "zh-TW": "居民",
        ko: "주민",
        vi: "Cư dân",
        tl: "Resident",
        id: "Warga",
        th: "ผู้อยู่อาศัย",
        my: "နေထိုင်သူ",
        km: "អ្នករស់នៅ",
        ne: "बासिन्दा",
        mn: "Оршин суугч",
        si: "පදිංචිකරු",
        bn: "বাসিন্দা",
        pt: "Morador",
        es: "Residente",
        fr: "Résident",
        ru: "Житель",
        uk: "Мешканець"
    },
    staff: {
        ja: "係員",
        en: "Staff",
        "zh-CN": "工作人员",
        "zh-TW": "工作人員",
        ko: "직원",
        vi: "Nhân viên",
        tl: "Staff",
        id: "Petugas",
        th: "เจ้าหน้าที่",
        my: "ဝန်ထမ်း",
        km: "បុគ្គលិក",
        ne: "कर्मचारी",
        mn: "Ажилтан",
        si: "සේවකයා",
        bn: "কর্মী",
        pt: "Funcionário",
        es: "Personal",
        fr: "Personnel",
        ru: "Сотрудник",
        uk: "Працівник"
    },
    stationStaff: {
        ja: "駅員",
        en: "Station Staff",
        "zh-CN": "车站工作人员",
        "zh-TW": "車站工作人員",
        ko: "역무원",
        vi: "Nhân viên nhà ga",
        tl: "Station staff",
        id: "Petugas stasiun",
        th: "เจ้าหน้าที่สถานี",
        my: "ဘူတာဝန်ထမ်း",
        km: "បុគ្គលិកស្ថានីយ",
        ne: "स्टेशन कर्मचारी",
        mn: "Станцын ажилтан",
        si: "දුම්රිය ස්ථාන සේවකයා",
        bn: "স্টেশন কর্মী",
        pt: "Funcionário da estação",
        es: "Personal de la estación",
        fr: "Personnel de la gare",
        ru: "Сотрудник станции",
        uk: "Працівник станції"
    },
    passerby: {
        ja: "通行人",
        en: "Passerby",
        "zh-CN": "路人",
        "zh-TW": "路人",
        ko: "지나가는 사람",
        vi: "Người qua đường",
        tl: "Passerby",
        id: "Pejalan",
        th: "คนเดินผ่าน",
        my: "လမ်းသွားလမ်းလာ",
        km: "អ្នកដំណើរឆ្លងកាត់",
        ne: "बाटो हिँड्ने व्यक्ति",
        mn: "Хажуугаар өнгөрөгч",
        si: "මග යන අයෙකු",
        bn: "পথচারী",
        pt: "Passante",
        es: "Transeúnte",
        fr: "Passant",
        ru: "Прохожий",
        uk: "Перехожий"
    },
    driver: {
        ja: "運転手",
        en: "Driver",
        "zh-CN": "司机",
        "zh-TW": "司機",
        ko: "운전기사",
        vi: "Tài xế",
        tl: "Driver",
        id: "Sopir",
        th: "คนขับรถ",
        my: "ယာဉ်မောင်း",
        km: "អ្នកបើកបរ",
        ne: "चालक",
        mn: "Жолооч",
        si: "රියදුරු",
        bn: "চালক",
        pt: "Motorista",
        es: "Conductor",
        fr: "Chauffeur",
        ru: "Водитель",
        uk: "Водій"
    },
    friend: {
        ja: "友人",
        en: "Friend",
        "zh-CN": "朋友",
        "zh-TW": "朋友",
        ko: "친구",
        vi: "Bạn",
        tl: "Friend",
        id: "Teman",
        th: "เพื่อน",
        my: "သူငယ်ချင်း",
        km: "មិត្តភក្តិ",
        ne: "साथी",
        mn: "Найз",
        si: "මිතුරා",
        bn: "বন্ধু",
        pt: "Amigo",
        es: "Amigo",
        fr: "Ami",
        ru: "Друг",
        uk: "Друг"
    }
};

function makeB1SafeMovementDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeB1SafeMovementTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_safe_movement",
        japanese: dialogue.map(t => `${t.name}：${t.line}`).join("\n"),
        target_speech: dialogue.map(t => t.target || t.line).join(" "),
        ruby: {
            hiragana: dialogue.map(t => t.ruby || t.line).join("<br>"),
            romaji: dialogue.map(t => t.romaji || "").join("<br>")
        },
        dialogue: dialogue.map(t => ({
            speakerLabel: t.label,
            speakerName: t.name,
            speakerKey: t.key || t.name,
            speakerNames: b1SafeMovementSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: b1SafeMovementContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1SafeMovementData = [

    makeB1SafeMovementDialogue(
        "b1_safemove_001",
        "横断歩道を安全に渡る",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "すみません。この交差点は車が多いですね。",
                target: "すみません このこうさてんはくるまがおおいですね",
                ruby: "すみません。この<ruby>交差点<rt>こうさてん</rt></ruby>は<ruby>車<rt>くるま</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いですね。",
                romaji: "Sumimasen. Kono kōsaten wa kuruma ga ōi desu ne."
            },
            {
                label: "話者A",
                key: "passerby",
                name: "通行人",
                line: "はい。ここは朝と夕方に特に混みます。",
                target: "はい ここはあさとゆうがたにとくにこみます",
                ruby: "はい。ここは<ruby>朝<rt>あさ</rt></ruby>と<ruby>夕方<rt>ゆうがた</rt></ruby>に<ruby>特<rt>とく</rt></ruby>に<ruby>混<rt>こ</rt></ruby>みます。",
                romaji: "Hai. Koko wa asa to yūgata ni toku ni komimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "青信号でも、すぐに渡らない方がいいですか。",
                target: "あおしんごうでも すぐにわたらないほうがいいですか",
                ruby: "<ruby>青信号<rt>あおしんごう</rt></ruby>でも、すぐに<ruby>渡<rt>わた</rt></ruby>らない<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Ao shingō demo, sugu ni wataranai hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "passerby",
                name: "通行人",
                line: "はい。右と左をよく見てから渡った方が安全です。",
                target: "はい みぎとひだりをよくみてからわたったほうがあんぜんです",
                ruby: "はい。<ruby>右<rt>みぎ</rt></ruby>と<ruby>左<rt>ひだり</rt></ruby>をよく<ruby>見<rt>み</rt></ruby>てから<ruby>渡<rt>わた</rt></ruby>った<ruby>方<rt>ほう</rt></ruby>が<ruby>安全<rt>あんぜん</rt></ruby>です。",
                romaji: "Hai. Migi to hidari o yoku mite kara watatta hō ga anzen desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "自転車も急に来ることがあるので、気をつけます。",
                target: "じてんしゃもきゅうにくることがあるので きをつけます",
                ruby: "<ruby>自転車<rt>じてんしゃ</rt></ruby>も<ruby>急<rt>きゅう</rt></ruby>に<ruby>来<rt>く</rt></ruby>ることがあるので、<ruby>気<rt>き</rt></ruby>をつけます。",
                romaji: "Jitensha mo kyū ni kuru koto ga aru node, ki o tsukemasu."
            },
            {
                label: "話者A",
                key: "passerby",
                name: "通行人",
                line: "そうですね。歩きながらスマホを見るのも危ないので、やめた方がいいです。",
                target: "そうですね あるきながらすまほをみるのもあぶないので やめたほうがいいです",
                ruby: "そうですね。<ruby>歩<rt>ある</rt></ruby>きながらスマホを<ruby>見<rt>み</rt></ruby>るのも<ruby>危<rt>あぶ</rt></ruby>ないので、やめた<ruby>方<rt>ほう</rt></ruby>がいいです。",
                romaji: "Sō desu ne. Aruki nagara sumaho o miru no mo abunai node, yameta hō ga ii desu."
            }
        ],
        {
            ja: [
                "住民：すみません。この交差点は車が多いですね。",
                "通行人：はい。ここは朝と夕方に特に混みます。",
                "住民：青信号でも、すぐに渡らない方がいいですか。",
                "通行人：はい。右と左をよく見てから渡った方が安全です。",
                "住民：自転車も急に来ることがあるので、気をつけます。",
                "通行人：そうですね。歩きながらスマホを見るのも危ないので、やめた方がいいです。"
            ],
            en: [
                "Resident: Excuse me. There are many cars at this intersection, aren’t there?",
                "Passerby: Yes. This place is especially crowded in the morning and evening.",
                "Resident: Even when the light is green, is it better not to cross right away?",
                "Passerby: Yes. It is safer to cross after checking both right and left carefully.",
                "Resident: Bicycles may also come suddenly, so I will be careful.",
                "Passerby: That’s right. Looking at your phone while walking is also dangerous, so it is better not to do it."
            ],
            "zh-CN": [
                "居民：不好意思。这个十字路口车很多呢。",
                "路人：是的。这里早上和傍晚特别拥挤。",
                "居民：即使是绿灯，也不要马上过马路比较好吗？",
                "路人：是的。仔细看右边和左边后再过比较安全。",
                "居民：自行车也可能突然过来，所以我会注意。",
                "路人：是的。边走边看手机也很危险，最好不要这样做。"
            ],
            "zh-TW": [
                "居民：不好意思。這個十字路口車很多呢。",
                "路人：是的。這裡早上和傍晚特別擁擠。",
                "居民：即使是綠燈，也不要馬上過馬路比較好嗎？",
                "路人：是的。仔細看右邊和左邊後再過比較安全。",
                "居民：自行車也可能突然過來，所以我會注意。",
                "路人：是的。邊走邊看手機也很危險，最好不要這樣做。"
            ],
            ko: [
                "주민: 죄송합니다. 이 교차로는 차가 많네요.",
                "지나가는 사람: 네. 여기는 아침과 저녁에 특히 붐빕니다.",
                "주민: 파란불이어도 바로 건너지 않는 편이 좋을까요?",
                "지나가는 사람: 네. 오른쪽과 왼쪽을 잘 보고 건너는 편이 안전합니다.",
                "주민: 자전거도 갑자기 올 수 있으니 조심하겠습니다.",
                "지나가는 사람: 그렇습니다. 걸으면서 스마트폰을 보는 것도 위험하니 하지 않는 편이 좋습니다."
            ],
            vi: [
                "Cư dân: Xin lỗi. Ngã tư này có nhiều xe quá nhỉ.",
                "Người qua đường: Vâng. Chỗ này đặc biệt đông vào buổi sáng và chiều tối.",
                "Cư dân: Dù đèn xanh, tôi không nên băng qua ngay phải không?",
                "Người qua đường: Vâng. Sẽ an toàn hơn nếu nhìn kỹ bên phải và bên trái rồi mới qua.",
                "Cư dân: Xe đạp cũng có thể đến bất ngờ, nên tôi sẽ cẩn thận.",
                "Người qua đường: Đúng vậy. Vừa đi vừa nhìn điện thoại cũng nguy hiểm, nên tốt hơn là không làm vậy."
            ]
        }
    ),

    makeB1SafeMovementDialogue(
        "b1_safemove_002",
        "駅のホームで安全に待つ",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "すみません。このホームは人が多くて少し不安です。",
                target: "すみません このほーむはひとがおおくてすこしふあんです",
                ruby: "すみません。このホームは<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>くて<ruby>少<rt>すこ</rt></ruby>し<ruby>不安<rt>ふあん</rt></ruby>です。",
                romaji: "Sumimasen. Kono hōmu wa hito ga ōkute sukoshi fuan desu."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "白線の内側でお待ちください。前に出すぎると危険です。",
                target: "はくせんのうちがわでおまちください まえにですぎるときけんです",
                ruby: "<ruby>白線<rt>はくせん</rt></ruby>の<ruby>内側<rt>うちがわ</rt></ruby>でお<ruby>待<rt>ま</rt></ruby>ちください。<ruby>前<rt>まえ</rt></ruby>に<ruby>出<rt>で</rt></ruby>すぎると<ruby>危険<rt>きけん</rt></ruby>です。",
                romaji: "Hakusen no uchigawa de omachi kudasai. Mae ni desugiru to kiken desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "電車が来たら、すぐに乗ってもいいですか。",
                target: "でんしゃがきたら すぐにのってもいいですか",
                ruby: "<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>来<rt>き</rt></ruby>たら、すぐに<ruby>乗<rt>の</rt></ruby>ってもいいですか。",
                romaji: "Densha ga kitara, sugu ni notte mo ii desu ka."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "まず降りる人を待ってから、順番に乗ってください。",
                target: "まずおりるひとをまってから じゅんばんにのってください",
                ruby: "まず<ruby>降<rt>お</rt></ruby>りる<ruby>人<rt>ひと</rt></ruby>を<ruby>待<rt>ま</rt></ruby>ってから、<ruby>順番<rt>じゅんばん</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ってください。",
                romaji: "Mazu oriru hito o matte kara, junban ni notte kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "混んでいるときは、入口の近くで止まらない方がいいですね。",
                target: "こんでいるときは いりぐちのちかくでとまらないほうがいいですね",
                ruby: "<ruby>混<rt>こ</rt></ruby>んでいるときは、<ruby>入口<rt>いりぐち</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くで<ruby>止<rt>と</rt></ruby>まらない<ruby>方<rt>ほう</rt></ruby>がいいですね。",
                romaji: "Konde iru toki wa, iriguchi no chikaku de tomaranai hō ga ii desu ne."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "はい。中ほどまで進むと、後ろの人も乗りやすくなります。",
                target: "はい なかほどまですすむと うしろのひとも のりやすくなります",
                ruby: "はい。<ruby>中<rt>なか</rt></ruby>ほどまで<ruby>進<rt>すす</rt></ruby>むと、<ruby>後<rt>うし</rt></ruby>ろの<ruby>人<rt>ひと</rt></ruby>も<ruby>乗<rt>の</rt></ruby>りやすくなります。",
                romaji: "Hai. Nakahodo made susumu to, ushiro no hito mo noriyasuku narimasu."
            }
        ],
        {
            ja: [
                "住民：すみません。このホームは人が多くて少し不安です。",
                "駅員：白線の内側でお待ちください。前に出すぎると危険です。",
                "住民：電車が来たら、すぐに乗ってもいいですか。",
                "駅員：まず降りる人を待ってから、順番に乗ってください。",
                "住民：混んでいるときは、入口の近くで止まらない方がいいですね。",
                "駅員：はい。中ほどまで進むと、後ろの人も乗りやすくなります。"
            ],
            en: [
                "Resident: Excuse me. This platform is crowded, so I feel a little uneasy.",
                "Station Staff: Please wait inside the white line. It is dangerous to stand too far forward.",
                "Resident: When the train comes, may I get on right away?",
                "Station Staff: First, wait for people to get off, and then get on in order.",
                "Resident: When it is crowded, it is better not to stop near the entrance, right?",
                "Station Staff: Yes. If you move toward the middle, it becomes easier for people behind you to get on."
            ],
            "zh-CN": [
                "居民：不好意思。这个站台人很多，我有点不安。",
                "车站工作人员：请在白线内侧等候。太靠前很危险。",
                "居民：电车来了之后，可以马上上车吗？",
                "车站工作人员：请先等下车的人下完，再按顺序上车。",
                "居民：拥挤的时候，不要停在入口附近比较好吧？",
                "车站工作人员：是的。往车厢中间走，后面的人也更容易上车。"
            ],
            "zh-TW": [
                "居民：不好意思。這個月台人很多，我有點不安。",
                "車站工作人員：請在白線內側等候。太靠前很危險。",
                "居民：電車來了之後，可以馬上上車嗎？",
                "車站工作人員：請先等下車的人下完，再按順序上車。",
                "居民：擁擠的時候，不要停在入口附近比較好吧？",
                "車站工作人員：是的。往車廂中間走，後面的人也更容易上車。"
            ],
            ko: [
                "주민: 죄송합니다. 이 플랫폼은 사람이 많아서 조금 불안합니다.",
                "역무원: 흰 선 안쪽에서 기다려 주세요. 너무 앞으로 나가면 위험합니다.",
                "주민: 전철이 오면 바로 타도 되나요?",
                "역무원: 먼저 내리는 사람을 기다린 뒤 순서대로 타 주세요.",
                "주민: 붐빌 때는 입구 근처에 멈추지 않는 편이 좋지요?",
                "역무원: 네. 안쪽으로 들어가면 뒤에 있는 사람도 타기 쉬워집니다."
            ],
            vi: [
                "Cư dân: Xin lỗi. Sân ga này đông người nên tôi hơi lo.",
                "Nhân viên nhà ga: Vui lòng chờ bên trong vạch trắng. Đứng quá gần phía trước rất nguy hiểm.",
                "Cư dân: Khi tàu đến, tôi có thể lên ngay không?",
                "Nhân viên nhà ga: Trước tiên hãy chờ người xuống, rồi lên theo thứ tự.",
                "Cư dân: Khi đông người, tốt hơn là không dừng gần cửa đúng không?",
                "Nhân viên nhà ga: Vâng. Nếu bạn đi vào giữa, người phía sau cũng dễ lên hơn."
            ]
        }
    ),

    makeB1SafeMovementDialogue(
        "b1_safemove_003",
        "雨の日に歩くとき注意する",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "今日は雨が強いですね。駅まで歩くのが少し心配です。",
                target: "きょうはあめがつよいですね えきまであるくのがすこししんぱいです",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>いですね。<ruby>駅<rt>えき</rt></ruby>まで<ruby>歩<rt>ある</rt></ruby>くのが<ruby>少<rt>すこ</rt></ruby>し<ruby>心配<rt>しんぱい</rt></ruby>です。",
                romaji: "Kyō wa ame ga tsuyoi desu ne. Eki made aruku no ga sukoshi shinpai desu."
            },
            {
                label: "話者A",
                key: "friend",
                name: "友人",
                line: "道が滑りやすいので、急がない方がいいですよ。",
                target: "みちがすべりやすいので いそがないほうがいいですよ",
                ruby: "<ruby>道<rt>みち</rt></ruby>が<ruby>滑<rt>すべ</rt></ruby>りやすいので、<ruby>急<rt>いそ</rt></ruby>がない<ruby>方<rt>ほう</rt></ruby>がいいですよ。",
                romaji: "Michi ga suberiyasui node, isoganai hō ga ii desu yo."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "時間に間に合うか不安ですが、走らないようにします。",
                target: "じかんにまにあうかふあんですが はしらないようにします",
                ruby: "<ruby>時間<rt>じかん</rt></ruby>に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うか<ruby>不安<rt>ふあん</rt></ruby>ですが、<ruby>走<rt>はし</rt></ruby>らないようにします。",
                romaji: "Jikan ni maniau ka fuan desu ga, hashiranai yō ni shimasu."
            },
            {
                label: "話者A",
                key: "friend",
                name: "友人",
                line: "駅の前の坂は特に滑りやすいので、手すりの近くを歩いてください。",
                target: "えきのまえのさかはとくにすべりやすいので てすりのちかくをあるいてください",
                ruby: "<ruby>駅<rt>えき</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>の<ruby>坂<rt>さか</rt></ruby>は<ruby>特<rt>とく</rt></ruby>に<ruby>滑<rt>すべ</rt></ruby>りやすいので、<ruby>手<rt>て</rt></ruby>すりの<ruby>近<rt>ちか</rt></ruby>くを<ruby>歩<rt>ある</rt></ruby>いてください。",
                romaji: "Eki no mae no saka wa toku ni suberiyasui node, tesuri no chikaku o aruite kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "わかりました。荷物も前に持って、足元をよく見ます。",
                target: "わかりました にもつもまえにもって あしもとをよくみます",
                ruby: "わかりました。<ruby>荷物<rt>にもつ</rt></ruby>も<ruby>前<rt>まえ</rt></ruby>に<ruby>持<rt>も</rt></ruby>って、<ruby>足元<rt>あしもと</rt></ruby>をよく<ruby>見<rt>み</rt></ruby>ます。",
                romaji: "Wakarimashita. Nimotsu mo mae ni motte, ashimoto o yoku mimasu."
            },
            {
                label: "話者A",
                key: "friend",
                name: "友人",
                line: "それがいいです。遅れそうなら、先に連絡すれば大丈夫です。",
                target: "それがいいです おくれそうなら さきにれんらくすればだいじょうぶです",
                ruby: "それがいいです。<ruby>遅<rt>おく</rt></ruby>れそうなら、<ruby>先<rt>さき</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>すれば<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。",
                romaji: "Sore ga ii desu. Okuresō nara, saki ni renraku sureba daijōbu desu."
            }
        ],
        {
            ja: [
                "住民：今日は雨が強いですね。駅まで歩くのが少し心配です。",
                "友人：道が滑りやすいので、急がない方がいいですよ。",
                "住民：時間に間に合うか不安ですが、走らないようにします。",
                "友人：駅の前の坂は特に滑りやすいので、手すりの近くを歩いてください。",
                "住民：わかりました。荷物も前に持って、足元をよく見ます。",
                "友人：それがいいです。遅れそうなら、先に連絡すれば大丈夫です。"
            ],
            en: [
                "Resident: The rain is heavy today. I am a little worried about walking to the station.",
                "Friend: The road is slippery, so you should not hurry.",
                "Resident: I am worried about being on time, but I will try not to run.",
                "Friend: The slope in front of the station is especially slippery, so please walk near the handrail.",
                "Resident: Understood. I will also hold my bag in front and watch my step carefully.",
                "Friend: That is good. If you might be late, it is okay to contact them first."
            ],
            "zh-CN": [
                "居民：今天雨很大。走到车站有点担心。",
                "朋友：路很滑，所以不要着急比较好。",
                "居民：我担心赶不上时间，但我会尽量不跑。",
                "朋友：车站前的坡特别容易滑，请靠近扶手走。",
                "居民：明白了。我也会把行李拿在前面，注意脚下。",
                "朋友：这样很好。如果可能迟到，先联系就没问题。"
            ],
            "zh-TW": [
                "居民：今天雨很大。走到車站有點擔心。",
                "朋友：路很滑，所以不要著急比較好。",
                "居民：我擔心趕不上時間，但我會盡量不跑。",
                "朋友：車站前的坡特別容易滑，請靠近扶手走。",
                "居民：明白了。我也會把行李拿在前面，注意腳下。",
                "朋友：這樣很好。如果可能遲到，先聯絡就沒問題。"
            ],
            ko: [
                "주민: 오늘은 비가 많이 오네요. 역까지 걸어가는 것이 조금 걱정입니다.",
                "친구: 길이 미끄러우니 서두르지 않는 편이 좋아요.",
                "주민: 시간에 맞을지 불안하지만 뛰지 않도록 하겠습니다.",
                "친구: 역 앞의 언덕은 특히 미끄러우니 난간 가까이 걸어가세요.",
                "주민: 알겠습니다. 짐도 앞으로 들고 발밑을 잘 보겠습니다.",
                "친구: 그게 좋습니다. 늦을 것 같으면 먼저 연락하면 괜찮습니다."
            ],
            vi: [
                "Cư dân: Hôm nay mưa to quá. Tôi hơi lo khi đi bộ đến ga.",
                "Bạn: Đường dễ trơn, nên bạn không nên vội.",
                "Cư dân: Tôi lo không kịp giờ, nhưng tôi sẽ cố không chạy.",
                "Bạn: Con dốc trước ga đặc biệt dễ trơn, nên hãy đi gần tay vịn.",
                "Cư dân: Tôi hiểu rồi. Tôi cũng sẽ cầm hành lý phía trước và nhìn kỹ dưới chân.",
                "Bạn: Như vậy là tốt. Nếu có vẻ bị trễ, chỉ cần liên lạc trước là được."
            ]
        }
    ),

    makeB1SafeMovementDialogue(
        "b1_safemove_004",
        "夜道を安全に歩く",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "夜に駅から家まで歩くとき、少し怖い道があります。",
                target: "よるにえきからいえまであるくとき すこしこわいみちがあります",
                ruby: "<ruby>夜<rt>よる</rt></ruby>に<ruby>駅<rt>えき</rt></ruby>から<ruby>家<rt>いえ</rt></ruby>まで<ruby>歩<rt>ある</rt></ruby>くとき、<ruby>少<rt>すこ</rt></ruby>し<ruby>怖<rt>こわ</rt></ruby>い<ruby>道<rt>みち</rt></ruby>があります。",
                romaji: "Yoru ni eki kara ie made aruku toki, sukoshi kowai michi ga arimasu."
            },
            {
                label: "話者A",
                key: "friend",
                name: "友人",
                line: "暗い道より、明るくて人通りの多い道を選んだ方がいいです。",
                target: "くらいみちより あかるくてひとどおりのおおいみちをえらんだほうがいいです",
                ruby: "<ruby>暗<rt>くら</rt></ruby>い<ruby>道<rt>みち</rt></ruby>より、<ruby>明<rt>あか</rt></ruby>るくて<ruby>人通<rt>ひとどお</rt></ruby>りの<ruby>多<rt>おお</rt></ruby>い<ruby>道<rt>みち</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んだ<ruby>方<rt>ほう</rt></ruby>がいいです。",
                romaji: "Kurai michi yori, akarukute hitodōri no ōi michi o eranda hō ga ii desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "少し遠回りになりますが、安全な道を使った方がいいですね。",
                target: "すこしとおまわりになりますが あんぜんなみちをつかったほうがいいですね",
                ruby: "<ruby>少<rt>すこ</rt></ruby>し<ruby>遠回<rt>とおまわ</rt></ruby>りになりますが、<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>道<rt>みち</rt></ruby>を<ruby>使<rt>つか</rt></ruby>った<ruby>方<rt>ほう</rt></ruby>がいいですね。",
                romaji: "Sukoshi tōmawari ni narimasu ga, anzen na michi o tsukatta hō ga ii desu ne."
            },
            {
                label: "話者A",
                key: "friend",
                name: "友人",
                line: "はい。歩きながらイヤホンの音を大きくするのも避けた方がいいです。",
                target: "はい あるきながらいやほんのおとをおおきくするのもさけたほうがいいです",
                ruby: "はい。<ruby>歩<rt>ある</rt></ruby>きながらイヤホンの<ruby>音<rt>おと</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きくするのも<ruby>避<rt>さ</rt></ruby>けた<ruby>方<rt>ほう</rt></ruby>がいいです。",
                romaji: "Hai. Aruki nagara iyahon no oto o ōkiku suru no mo saketa hō ga ii desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "周りの音が聞こえるように、片方だけにします。",
                target: "まわりのおとがきこえるように かたほうだけにします",
                ruby: "<ruby>周<rt>まわ</rt></ruby>りの<ruby>音<rt>おと</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえるように、<ruby>片方<rt>かたほう</rt></ruby>だけにします。",
                romaji: "Mawari no oto ga kikoeru yō ni, katahō dake ni shimasu."
            },
            {
                label: "話者A",
                key: "friend",
                name: "友人",
                line: "それなら安心です。家に着いたら、短く連絡してください。",
                target: "それならあんしんです いえについたら みじかくれんらくしてください",
                ruby: "それなら<ruby>安心<rt>あんしん</rt></ruby>です。<ruby>家<rt>いえ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いたら、<ruby>短<rt>みじか</rt></ruby>く<ruby>連絡<rt>れんらく</rt></ruby>してください。",
                romaji: "Sore nara anshin desu. Ie ni tsuitara, mijikaku renraku shite kudasai."
            }
        ],
        {
            ja: [
                "住民：夜に駅から家まで歩くとき、少し怖い道があります。",
                "友人：暗い道より、明るくて人通りの多い道を選んだ方がいいです。",
                "住民：少し遠回りになりますが、安全な道を使った方がいいですね。",
                "友人：はい。歩きながらイヤホンの音を大きくするのも避けた方がいいです。",
                "住民：周りの音が聞こえるように、片方だけにします。",
                "友人：それなら安心です。家に着いたら、短く連絡してください。"
            ],
            en: [
                "Resident: When I walk from the station to my home at night, there is a road that feels a little scary.",
                "Friend: It is better to choose a bright road with many people rather than a dark road.",
                "Resident: It will be a little longer, but I should use the safer road, right?",
                "Friend: Yes. You should also avoid turning up your earphones while walking.",
                "Resident: I will use only one earphone so that I can hear the sounds around me.",
                "Friend: That sounds safer. When you get home, please send me a short message."
            ],
            "zh-CN": [
                "居民：晚上从车站走回家时，有一条路有点可怕。",
                "朋友：比起暗的路，最好选择明亮、人多的路。",
                "居民：虽然会绕一点远路，但还是走安全的路比较好吧。",
                "朋友：是的。边走边把耳机声音开大也最好避免。",
                "居民：为了能听到周围的声音，我只戴一边。",
                "朋友：那样比较安心。到家后，请简单联系我一下。"
            ],
            "zh-TW": [
                "居民：晚上從車站走回家時，有一條路有點可怕。",
                "朋友：比起暗的路，最好選擇明亮、人多的路。",
                "居民：雖然會繞一點遠路，但還是走安全的路比較好吧。",
                "朋友：是的。邊走邊把耳機聲音開大也最好避免。",
                "居民：為了能聽到周圍的聲音，我只戴一邊。",
                "朋友：那樣比較安心。到家後，請簡單聯絡我一下。"
            ],
            ko: [
                "주민: 밤에 역에서 집까지 걸을 때 조금 무서운 길이 있습니다.",
                "친구: 어두운 길보다 밝고 사람이 많은 길을 선택하는 편이 좋습니다.",
                "주민: 조금 돌아가게 되지만 안전한 길을 사용하는 편이 좋겠네요.",
                "친구: 네. 걸으면서 이어폰 소리를 크게 하는 것도 피하는 편이 좋습니다.",
                "주민: 주변 소리가 들리도록 한쪽만 끼겠습니다.",
                "친구: 그러면 안심입니다. 집에 도착하면 짧게 연락해 주세요."
            ],
            vi: [
                "Cư dân: Khi đi bộ từ ga về nhà vào ban đêm, có một con đường hơi đáng sợ.",
                "Bạn: Tốt hơn là chọn con đường sáng và có nhiều người qua lại hơn là đường tối.",
                "Cư dân: Dù hơi vòng xa, tôi nên đi đường an toàn hơn đúng không?",
                "Bạn: Vâng. Bạn cũng nên tránh mở âm lượng tai nghe quá lớn khi đang đi bộ.",
                "Cư dân: Tôi sẽ chỉ đeo một bên để có thể nghe âm thanh xung quanh.",
                "Bạn: Như vậy thì yên tâm hơn. Khi về đến nhà, hãy nhắn ngắn cho tôi."
            ]
        }
    ),

    makeB1SafeMovementDialogue(
        "b1_safemove_005",
        "自転車で移動するとき注意する",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "自転車で駅まで行きたいのですが、気をつけることはありますか。",
                target: "じてんしゃでえきまでいきたいのですが きをつけることはありますか",
                ruby: "<ruby>自転車<rt>じてんしゃ</rt></ruby>で<ruby>駅<rt>えき</rt></ruby>まで<ruby>行<rt>い</rt></ruby>きたいのですが、<ruby>気<rt>き</rt></ruby>をつけることはありますか。",
                romaji: "Jitensha de eki made ikitai no desu ga, ki o tsukeru koto wa arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "係員",
                line: "夜に乗る場合は、ライトを必ずつけてください。",
                target: "よるにのるばあいは らいとをかならずつけてください",
                ruby: "<ruby>夜<rt>よる</rt></ruby>に<ruby>乗<rt>の</rt></ruby>る<ruby>場合<rt>ばあい</rt></ruby>は、ライトを<ruby>必<rt>かなら</rt></ruby>ずつけてください。",
                romaji: "Yoru ni noru baai wa, raito o kanarazu tsukete kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "歩道を走ってもいい場所と、走ってはいけない場所がありますよね。",
                target: "ほどうをはしってもいいばしょと はしってはいけないばしょがありますよね",
                ruby: "<ruby>歩道<rt>ほどう</rt></ruby>を<ruby>走<rt>はし</rt></ruby>ってもいい<ruby>場所<rt>ばしょ</rt></ruby>と、<ruby>走<rt>はし</rt></ruby>ってはいけない<ruby>場所<rt>ばしょ</rt></ruby>がありますよね。",
                romaji: "Hodō o hashitte mo ii basho to, hashitte wa ikenai basho ga arimasu yo ne."
            },
            {
                label: "話者A",
                key: "staff",
                name: "係員",
                line: "はい。自転車通行可の標識があるか確認してください。",
                target: "はい じてんしゃつうこうかのひょうしきがあるかかくにんしてください",
                ruby: "はい。<ruby>自転車通行可<rt>じてんしゃつうこうか</rt></ruby>の<ruby>標識<rt>ひょうしき</rt></ruby>があるか<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Hai. Jitensha tsūkōka no hyōshiki ga aru ka kakunin shite kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "歩いている人が近くにいるときは、スピードを落とします。",
                target: "あるいているひとがちかくにいるときは すぴーどをおとします",
                ruby: "<ruby>歩<rt>ある</rt></ruby>いている<ruby>人<rt>ひと</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>くにいるときは、スピードを<ruby>落<rt>お</rt></ruby>とします。",
                romaji: "Aruite iru hito ga chikaku ni iru toki wa, supīdo o otoshimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "係員",
                line: "それが大切です。スマホを見ながら運転するのは絶対にやめてください。",
                target: "それがたいせつです すまほをみながらうんてんするのはぜったいにやめてください",
                ruby: "それが<ruby>大切<rt>たいせつ</rt></ruby>です。スマホを<ruby>見<rt>み</rt></ruby>ながら<ruby>運転<rt>うんてん</rt></ruby>するのは<ruby>絶対<rt>ぜったい</rt></ruby>にやめてください。",
                romaji: "Sore ga taisetsu desu. Sumaho o minagara unten suru no wa zettai ni yamete kudasai."
            }
        ],
        {
            ja: [
                "住民：自転車で駅まで行きたいのですが、気をつけることはありますか。",
                "係員：夜に乗る場合は、ライトを必ずつけてください。",
                "住民：歩道を走ってもいい場所と、走ってはいけない場所がありますよね。",
                "係員：はい。自転車通行可の標識があるか確認してください。",
                "住民：歩いている人が近くにいるときは、スピードを落とします。",
                "係員：それが大切です。スマホを見ながら運転するのは絶対にやめてください。"
            ],
            en: [
                "Resident: I want to go to the station by bicycle. Is there anything I should be careful about?",
                "Staff: If you ride at night, please be sure to turn on your light.",
                "Resident: There are places where bicycles can ride on the sidewalk and places where they cannot, right?",
                "Staff: Yes. Please check whether there is a sign that allows bicycle traffic.",
                "Resident: When people walking are nearby, I will slow down.",
                "Staff: That is important. Please never use your phone while riding."
            ],
            "zh-CN": [
                "居民：我想骑自行车去车站，有什么需要注意的吗？",
                "工作人员：晚上骑车时，请一定要开灯。",
                "居民：有人行道可以骑自行车的地方，也有不能骑的地方吧？",
                "工作人员：是的。请确认是否有允许自行车通行的标志。",
                "居民：附近有行人时，我会放慢速度。",
                "工作人员：这很重要。请绝对不要边看手机边骑车。"
            ],
            "zh-TW": [
                "居民：我想騎自行車去車站，有什麼需要注意的嗎？",
                "工作人員：晚上騎車時，請一定要開燈。",
                "居民：有人行道可以騎自行車的地方，也有不能騎的地方吧？",
                "工作人員：是的。請確認是否有允許自行車通行的標誌。",
                "居民：附近有行人時，我會放慢速度。",
                "工作人員：這很重要。請絕對不要邊看手機邊騎車。"
            ],
            ko: [
                "주민: 자전거로 역까지 가고 싶은데 주의할 것이 있나요?",
                "직원: 밤에 탈 경우에는 반드시 라이트를 켜 주세요.",
                "주민: 보도를 달려도 되는 곳과 달리면 안 되는 곳이 있지요?",
                "직원: 네. 자전거 통행 가능 표지가 있는지 확인해 주세요.",
                "주민: 걷는 사람이 가까이에 있을 때는 속도를 줄이겠습니다.",
                "직원: 그것이 중요합니다. 스마트폰을 보면서 운전하는 것은 절대 하지 마세요."
            ],
            vi: [
                "Cư dân: Tôi muốn đi đến ga bằng xe đạp. Có điều gì cần chú ý không?",
                "Nhân viên: Nếu đi vào ban đêm, hãy nhất định bật đèn.",
                "Cư dân: Có nơi được đi xe đạp trên vỉa hè và có nơi không được đi, đúng không?",
                "Nhân viên: Vâng. Hãy kiểm tra xem có biển cho phép xe đạp đi qua không.",
                "Cư dân: Khi có người đi bộ gần đó, tôi sẽ giảm tốc độ.",
                "Nhân viên: Điều đó rất quan trọng. Tuyệt đối không dùng điện thoại khi đang đi xe."
            ]
        }
    ),

    makeB1SafeMovementDialogue(
        "b1_safemove_006",
        "バスの中で安全に立つ",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "バスが混んでいて座れません。どこに立てば安全ですか。",
                target: "ばすがこんでいてすわれません どこにたてばあんぜんですか",
                ruby: "バスが<ruby>混<rt>こ</rt></ruby>んでいて<ruby>座<rt>すわ</rt></ruby>れません。どこに<ruby>立<rt>た</rt></ruby>てば<ruby>安全<rt>あんぜん</rt></ruby>ですか。",
                romaji: "Basu ga konde ite suwaremasen. Doko ni tateba anzen desu ka."
            },
            {
                label: "話者A",
                key: "driver",
                name: "運転手",
                line: "つり革か手すりにつかまって、通路をふさがないようにしてください。",
                target: "つりかわかてすりにつかまって つうろをふさがないようにしてください",
                ruby: "つり<ruby>革<rt>かわ</rt></ruby>か<ruby>手<rt>て</rt></ruby>すりにつかまって、<ruby>通路<rt>つうろ</rt></ruby>をふさがないようにしてください。",
                romaji: "Tsurikawa ka tesuri ni tsukamatte, tsūro o fusaganai yō ni shite kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "急に止まることもあるので、両手で持った方がいいですか。",
                target: "きゅうにとまることもあるので りょうてでもったほうがいいですか",
                ruby: "<ruby>急<rt>きゅう</rt></ruby>に<ruby>止<rt>と</rt></ruby>まることもあるので、<ruby>両手<rt>りょうて</rt></ruby>で<ruby>持<rt>も</rt></ruby>った<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Kyū ni tomaru koto mo aru node, ryōte de motta hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "driver",
                name: "運転手",
                line: "はい。荷物は足元か体の前で持つと、周りの人に当たりにくいです。",
                target: "はい にもつはあしもとかからだのまえでもつと まわりのひとにあたりにくいです",
                ruby: "はい。<ruby>荷物<rt>にもつ</rt></ruby>は<ruby>足元<rt>あしもと</rt></ruby>か<ruby>体<rt>からだ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>で<ruby>持<rt>も</rt></ruby>つと、<ruby>周<rt>まわ</rt></ruby>りの<ruby>人<rt>ひと</rt></ruby>に<ruby>当<rt>あ</rt></ruby>たりにくいです。",
                romaji: "Hai. Nimotsu wa ashimoto ka karada no mae de motsu to, mawari no hito ni atarinikui desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "降りる停留所が近づいたら、早めに出口の方へ行ってもいいですか。",
                target: "おりるていりゅうじょがちかづいたら はやめにでぐちのほうへいってもいいですか",
                ruby: "<ruby>降<rt>お</rt></ruby>りる<ruby>停留所<rt>ていりゅうじょ</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づいたら、<ruby>早<rt>はや</rt></ruby>めに<ruby>出口<rt>でぐち</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってもいいですか。",
                romaji: "Oriru teiryūjo ga chikazuitara, hayame ni deguchi no hō e itte mo ii desu ka."
            },
            {
                label: "話者A",
                key: "driver",
                name: "運転手",
                line: "バスが動いている間は危ないので、止まってから移動してください。",
                target: "ばすがうごいているあいだはあぶないので とまってからいどうしてください",
                ruby: "バスが<ruby>動<rt>うご</rt></ruby>いている<ruby>間<rt>あいだ</rt></ruby>は<ruby>危<rt>あぶ</rt></ruby>ないので、<ruby>止<rt>と</rt></ruby>まってから<ruby>移動<rt>いどう</rt></ruby>してください。",
                romaji: "Basu ga ugoite iru aida wa abunai node, tomatte kara idō shite kudasai."
            }
        ],
        {
            ja: [
                "住民：バスが混んでいて座れません。どこに立てば安全ですか。",
                "運転手：つり革か手すりにつかまって、通路をふさがないようにしてください。",
                "住民：急に止まることもあるので、両手で持った方がいいですか。",
                "運転手：はい。荷物は足元か体の前で持つと、周りの人に当たりにくいです。",
                "住民：降りる停留所が近づいたら、早めに出口の方へ行ってもいいですか。",
                "運転手：バスが動いている間は危ないので、止まってから移動してください。"
            ],
            en: [
                "Resident: The bus is crowded and I cannot sit down. Where should I stand to be safe?",
                "Driver: Please hold on to a strap or handrail and avoid blocking the aisle.",
                "Resident: Since the bus may stop suddenly, is it better to hold on with both hands?",
                "Driver: Yes. If you hold your bag near your feet or in front of your body, it is less likely to hit others.",
                "Resident: When my stop gets close, may I move toward the exit early?",
                "Driver: It is dangerous while the bus is moving, so please move after the bus stops."
            ],
            "zh-CN": [
                "居民：公交很挤，坐不了。站在哪里比较安全？",
                "司机：请抓住吊环或扶手，不要挡住通道。",
                "居民：公交可能会突然停下，所以用双手抓比较好吗？",
                "司机：是的。把行李放在脚边或身体前面，不容易碰到别人。",
                "居民：快到下车站时，可以早点往出口走吗？",
                "司机：公交行驶时很危险，请停车后再移动。"
            ],
            "zh-TW": [
                "居民：公車很擠，坐不了。站在哪裡比較安全？",
                "司機：請抓住吊環或扶手，不要擋住通道。",
                "居民：公車可能會突然停下，所以用雙手抓比較好嗎？",
                "司機：是的。把行李放在腳邊或身體前面，不容易碰到別人。",
                "居民：快到下車站時，可以早點往出口走嗎？",
                "司機：公車行駛時很危險，請停車後再移動。"
            ],
            ko: [
                "주민: 버스가 붐벼서 앉을 수 없습니다. 어디에 서면 안전한가요?",
                "운전기사: 손잡이나 난간을 잡고 통로를 막지 않도록 해 주세요.",
                "주민: 갑자기 멈출 수도 있으니 양손으로 잡는 편이 좋을까요?",
                "운전기사: 네. 짐은 발밑이나 몸 앞쪽에 들면 주변 사람에게 부딪히기 어렵습니다.",
                "주민: 내릴 정류장이 가까워지면 미리 출구 쪽으로 가도 되나요?",
                "운전기사: 버스가 움직이는 동안은 위험하니 멈춘 뒤 이동해 주세요."
            ],
            vi: [
                "Cư dân: Xe buýt đông quá nên tôi không ngồi được. Tôi nên đứng ở đâu cho an toàn?",
                "Tài xế: Hãy bám vào tay nắm hoặc thanh vịn và đừng chắn lối đi.",
                "Cư dân: Vì xe có thể dừng đột ngột, tôi nên bám bằng cả hai tay phải không?",
                "Tài xế: Vâng. Nếu giữ hành lý ở dưới chân hoặc trước người, nó sẽ ít va vào người khác hơn.",
                "Cư dân: Khi gần đến trạm xuống, tôi có thể đi về phía cửa sớm không?",
                "Tài xế: Khi xe buýt đang chạy thì nguy hiểm, nên hãy di chuyển sau khi xe dừng."
            ]
        }
    ),

    makeB1SafeMovementDialogue(
        "b1_safemove_007",
        "人が多い場所で子どもと移動する",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "今日は駅前がとても混んでいますね。子どもと歩くのが少し心配です。",
                target: "きょうはえきまえがとてもこんでいますね こどもとあるくのがすこししんぱいです",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>駅前<rt>えきまえ</rt></ruby>がとても<ruby>混<rt>こ</rt></ruby>んでいますね。<ruby>子<rt>こ</rt></ruby>どもと<ruby>歩<rt>ある</rt></ruby>くのが<ruby>少<rt>すこ</rt></ruby>し<ruby>心配<rt>しんぱい</rt></ruby>です。",
                romaji: "Kyō wa ekimae ga totemo konde imasu ne. Kodomo to aruku no ga sukoshi shinpai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "係員",
                line: "人が多いので、手をつないでゆっくり進んでください。",
                target: "ひとがおおいので てをつないでゆっくりすすんでください",
                ruby: "<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いので、<ruby>手<rt>て</rt></ruby>をつないでゆっくり<ruby>進<rt>すす</rt></ruby>んでください。",
                romaji: "Hito ga ōi node, te o tsunaide yukkuri susunde kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "もし離れてしまったら、どこで待ち合わせればいいですか。",
                target: "もしはなれてしまったら どこでまちあわせればいいですか",
                ruby: "もし<ruby>離<rt>はな</rt></ruby>れてしまったら、どこで<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせればいいですか。",
                romaji: "Moshi hanarete shimattara, doko de machiawasereba ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "係員",
                line: "改札の横にある案内所を待ち合わせ場所にするとわかりやすいです。",
                target: "かいさつのよこにあるあんないじょをまちあわせばしょにするとわかりやすいです",
                ruby: "<ruby>改札<rt>かいさつ</rt></ruby>の<ruby>横<rt>よこ</rt></ruby>にある<ruby>案内所<rt>あんないじょ</rt></ruby>を<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせ<ruby>場所<rt>ばしょ</rt></ruby>にするとわかりやすいです。",
                romaji: "Kaisatsu no yoko ni aru annaijo o machiawase basho ni suru to wakariyasui desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "子どもにも、困ったら案内所に行くように伝えます。",
                target: "こどもにも こまったらあんないじょにいくようにつたえます",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもにも、<ruby>困<rt>こま</rt></ruby>ったら<ruby>案内所<rt>あんないじょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>くように<ruby>伝<rt>つた</rt></ruby>えます。",
                romaji: "Kodomo ni mo, komattara annaijo ni iku yō ni tsutaemasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "係員",
                line: "それがいいです。名前と電話番号を書いたメモを持たせると安心です。",
                target: "それがいいです なまえとでんわばんごうをかいためもをもたせるとあんしんです",
                ruby: "それがいいです。<ruby>名前<rt>なまえ</rt></ruby>と<ruby>電話番号<rt>でんわばんごう</rt></ruby>を<ruby>書<rt>か</rt></ruby>いたメモを<ruby>持<rt>も</rt></ruby>たせると<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Sore ga ii desu. Namae to denwa bangō o kaita memo o motaseru to anshin desu."
            }
        ],
        {
            ja: [
                "住民：今日は駅前がとても混んでいますね。子どもと歩くのが少し心配です。",
                "係員：人が多いので、手をつないでゆっくり進んでください。",
                "住民：もし離れてしまったら、どこで待ち合わせればいいですか。",
                "係員：改札の横にある案内所を待ち合わせ場所にするとわかりやすいです。",
                "住民：子どもにも、困ったら案内所に行くように伝えます。",
                "係員：それがいいです。名前と電話番号を書いたメモを持たせると安心です。"
            ],
            en: [
                "Resident: The area in front of the station is very crowded today. I am a little worried about walking with my child.",
                "Staff: Since there are many people, please hold hands and move slowly.",
                "Resident: If we get separated, where should we meet?",
                "Staff: It is easy to understand if you use the information desk next to the ticket gate as your meeting place.",
                "Resident: I will also tell my child to go to the information desk if there is a problem.",
                "Staff: That is good. It is reassuring to have your child carry a note with their name and phone number."
            ],
            "zh-CN": [
                "居民：今天车站前非常拥挤。和孩子一起走有点担心。",
                "工作人员：人很多，请牵着手慢慢前进。",
                "居民：如果走散了，在哪里会合比较好？",
                "工作人员：把检票口旁边的咨询处作为会合地点会比较容易懂。",
                "居民：我也会告诉孩子，如果遇到困难就去咨询处。",
                "工作人员：这样很好。让孩子带着写有姓名和电话号码的纸条会更安心。"
            ],
            "zh-TW": [
                "居民：今天車站前非常擁擠。和孩子一起走有點擔心。",
                "工作人員：人很多，請牽著手慢慢前進。",
                "居民：如果走散了，在哪裡會合比較好？",
                "工作人員：把剪票口旁邊的服務台作為會合地點會比較容易懂。",
                "居民：我也會告訴孩子，如果遇到困難就去服務台。",
                "工作人員：這樣很好。讓孩子帶著寫有姓名和電話號碼的紙條會更安心。"
            ],
            ko: [
                "주민: 오늘은 역 앞이 매우 붐비네요. 아이와 걷는 것이 조금 걱정입니다.",
                "직원: 사람이 많으니 손을 잡고 천천히 이동해 주세요.",
                "주민: 만약 떨어지게 되면 어디에서 만나면 좋을까요?",
                "직원: 개찰구 옆에 있는 안내소를 만남 장소로 하면 알기 쉽습니다.",
                "주민: 아이에게도 곤란하면 안내소에 가라고 말하겠습니다.",
                "직원: 그게 좋습니다. 이름과 전화번호를 쓴 메모를 가지고 있게 하면 안심입니다."
            ],
            vi: [
                "Cư dân: Hôm nay khu vực trước ga rất đông. Tôi hơi lo khi đi cùng con.",
                "Nhân viên: Vì có nhiều người, hãy nắm tay và đi chậm.",
                "Cư dân: Nếu bị lạc nhau, chúng tôi nên hẹn gặp ở đâu?",
                "Nhân viên: Dùng quầy hướng dẫn bên cạnh cổng soát vé làm nơi hẹn sẽ dễ hiểu.",
                "Cư dân: Tôi cũng sẽ nói với con rằng nếu gặp khó khăn thì hãy đến quầy hướng dẫn.",
                "Nhân viên: Như vậy là tốt. Sẽ yên tâm hơn nếu cho trẻ mang theo giấy ghi tên và số điện thoại."
            ]
        }
    ),

    makeB1SafeMovementDialogue(
        "b1_safemove_008",
        "体調が悪いときに無理せず移動する",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "少し気分が悪いのですが、これから電車に乗る予定です。",
                target: "すこしきぶんがわるいのですが これからでんしゃにのるよていです",
                ruby: "<ruby>少<rt>すこ</rt></ruby>し<ruby>気分<rt>きぶん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いのですが、これから<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>る<ruby>予定<rt>よてい</rt></ruby>です。",
                romaji: "Sukoshi kibun ga warui no desu ga, kore kara densha ni noru yotei desu."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "無理をしないでください。少し休んでから移動した方が安全です。",
                target: "むりをしないでください すこしやすんでからいどうしたほうがあんぜんです",
                ruby: "<ruby>無理<rt>むり</rt></ruby>をしないでください。<ruby>少<rt>すこ</rt></ruby>し<ruby>休<rt>やす</rt></ruby>んでから<ruby>移動<rt>いどう</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>が<ruby>安全<rt>あんぜん</rt></ruby>です。",
                romaji: "Muri o shinaide kudasai. Sukoshi yasunde kara idō shita hō ga anzen desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "近くに座って休める場所はありますか。",
                target: "ちかくにすわってやすめるばしょはありますか",
                ruby: "<ruby>近<rt>ちか</rt></ruby>くに<ruby>座<rt>すわ</rt></ruby>って<ruby>休<rt>やす</rt></ruby>める<ruby>場所<rt>ばしょ</rt></ruby>はありますか。",
                romaji: "Chikaku ni suwatte yasumeru basho wa arimasu ka."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "改札の近くにベンチがあります。必要なら駅事務室にも案内します。",
                target: "かいさつのちかくにべんちがあります ひつようならえきじむしつにもあんないします",
                ruby: "<ruby>改札<rt>かいさつ</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くにベンチがあります。<ruby>必要<rt>ひつよう</rt></ruby>なら<ruby>駅事務室<rt>えきじむしつ</rt></ruby>にも<ruby>案内<rt>あんない</rt></ruby>します。",
                romaji: "Kaisatsu no chikaku ni benchi ga arimasu. Hitsuyō nara eki jimushitsu ni mo annai shimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "ありがとうございます。少し休んで、水を飲んでから考えます。",
                target: "ありがとうございます すこしやすんで みずをのんでからかんがえます",
                ruby: "ありがとうございます。<ruby>少<rt>すこ</rt></ruby>し<ruby>休<rt>やす</rt></ruby>んで、<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んでから<ruby>考<rt>かんが</rt></ruby>えます。",
                romaji: "Arigatō gozaimasu. Sukoshi yasunde, mizu o nonde kara kangaemasu."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "気分がよくならない場合は、遠慮なく声をかけてください。",
                target: "きぶんがよくならないばあいは えんりょなくこえをかけてください",
                ruby: "<ruby>気分<rt>きぶん</rt></ruby>がよくならない<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>遠慮<rt>えんりょ</rt></ruby>なく<ruby>声<rt>こえ</rt></ruby>をかけてください。",
                romaji: "Kibun ga yoku naranai baai wa, enryo naku koe o kakete kudasai."
            }
        ],
        {
            ja: [
                "住民：少し気分が悪いのですが、これから電車に乗る予定です。",
                "駅員：無理をしないでください。少し休んでから移動した方が安全です。",
                "住民：近くに座って休める場所はありますか。",
                "駅員：改札の近くにベンチがあります。必要なら駅事務室にも案内します。",
                "住民：ありがとうございます。少し休んで、水を飲んでから考えます。",
                "駅員：気分がよくならない場合は、遠慮なく声をかけてください。"
            ],
            en: [
                "Resident: I feel a little unwell, but I am planning to take the train now.",
                "Station Staff: Please do not push yourself. It is safer to rest a little before moving.",
                "Resident: Is there a place nearby where I can sit and rest?",
                "Station Staff: There is a bench near the ticket gate. If necessary, I can also guide you to the station office.",
                "Resident: Thank you. I will rest a little, drink some water, and then think about what to do.",
                "Station Staff: If you do not feel better, please feel free to ask for help."
            ],
            "zh-CN": [
                "居民：我有点不舒服，但接下来打算坐电车。",
                "车站工作人员：请不要勉强。先休息一下再移动比较安全。",
                "居民：附近有可以坐下休息的地方吗？",
                "车站工作人员：检票口附近有长椅。如果需要，也可以带您去车站办公室。",
                "居民：谢谢。我先休息一下，喝点水后再考虑。",
                "车站工作人员：如果身体没有好转，请不要客气，随时叫我们。"
            ],
            "zh-TW": [
                "居民：我有點不舒服，但接下來打算坐電車。",
                "車站工作人員：請不要勉強。先休息一下再移動比較安全。",
                "居民：附近有可以坐下休息的地方嗎？",
                "車站工作人員：剪票口附近有長椅。如果需要，也可以帶您去車站辦公室。",
                "居民：謝謝。我先休息一下，喝點水後再考慮。",
                "車站工作人員：如果身體沒有好轉，請不要客氣，隨時叫我們。"
            ],
            ko: [
                "주민: 조금 몸이 좋지 않은데 지금부터 전철을 탈 예정입니다.",
                "역무원: 무리하지 마세요. 조금 쉬고 나서 이동하는 편이 안전합니다.",
                "주민: 근처에 앉아서 쉴 수 있는 곳이 있나요?",
                "역무원: 개찰구 근처에 벤치가 있습니다. 필요하면 역 사무실로도 안내하겠습니다.",
                "주민: 감사합니다. 조금 쉬고 물을 마신 뒤 생각하겠습니다.",
                "역무원: 기분이 좋아지지 않을 경우에는 사양하지 말고 말씀해 주세요."
            ],
            vi: [
                "Cư dân: Tôi hơi khó chịu trong người, nhưng bây giờ tôi định lên tàu.",
                "Nhân viên nhà ga: Xin đừng cố quá. Sẽ an toàn hơn nếu bạn nghỉ một chút rồi mới di chuyển.",
                "Cư dân: Gần đây có chỗ nào tôi có thể ngồi nghỉ không?",
                "Nhân viên nhà ga: Có ghế gần cổng soát vé. Nếu cần, tôi cũng có thể hướng dẫn bạn đến văn phòng nhà ga.",
                "Cư dân: Cảm ơn. Tôi sẽ nghỉ một chút, uống nước rồi suy nghĩ.",
                "Nhân viên nhà ga: Nếu bạn không thấy khá hơn, hãy thoải mái gọi chúng tôi."
            ]
        }
    )

];