// =====================================================
// Japeak B2 Level
// Scene: 行きたい場所に自分の力で行ってみよう
// File: data/japeak-b2-go-to-destination.js
// Category Key: b2_go_to_destination
// =====================================================

const b2GoToDestinationLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB2GoToDestinationTranslations(translations) {
    const completed = {};
    b2GoToDestinationLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const b2GoToDestinationContext = {
    ja: "電車、バス、徒歩、乗り換え、出口、地図アプリ、遅延、目的地までの行き方などを自分で確認しながら、行きたい場所にたどり着くための日本語を練習します。",
    en: "Practice Japanese for reaching a destination by yourself while checking trains, buses, walking routes, transfers, exits, map apps, delays, and directions.",
    "zh-CN": "练习自己确认电车、公交、步行路线、换乘、出口、地图应用、延误和去目的地的方法时使用的日语。",
    "zh-TW": "練習自己確認電車、公車、步行路線、轉乘、出口、地圖App、延誤和前往目的地的方法時使用的日語。",
    ko: "전철, 버스, 도보, 환승, 출구, 지도 앱, 지연, 목적지까지 가는 방법을 스스로 확인하며 목적지에 도착하기 위한 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật để tự mình đến nơi muốn đi bằng cách kiểm tra tàu, xe buýt, đi bộ, chuyển tuyến, lối ra, ứng dụng bản đồ, chậm trễ và đường đến điểm đến.",
    tl: "Practice Japanese for going to a place by yourself while checking trains, buses, walking routes, transfers, exits, map apps, delays, and directions.",
    id: "Latihan bahasa Jepang untuk pergi ke tempat tujuan sendiri sambil memeriksa kereta, bus, rute jalan kaki, transfer, pintu keluar, aplikasi peta, keterlambatan, dan arah.",
    th: "ฝึกภาษาญี่ปุ่นเพื่อเดินทางไปยังสถานที่ที่ต้องการด้วยตนเอง โดยตรวจสอบรถไฟ รถบัส เส้นทางเดิน การเปลี่ยนสาย ทางออก แอปแผนที่ ความล่าช้า และวิธีไปยังจุดหมาย",
    my: "ရထား၊ ဘတ်စ်ကား၊ လမ်းလျှောက်လမ်းကြောင်း၊ ပြောင်းစီးခြင်း၊ ထွက်ပေါက်၊ မြေပုံအက်ပ်၊ နောက်ကျခြင်းနှင့် ဦးတည်ရာသို့ သွားရာလမ်းကို ကိုယ်တိုင်စစ်ဆေးပြီး သွားနိုင်ရန် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ទៅដល់គោលដៅដោយខ្លួនឯង ដោយពិនិត្យរថភ្លើង ឡានក្រុង ផ្លូវដើរ ការផ្ទេរខ្សែ ច្រកចេញ កម្មវិធីផែនទី ការយឺត និងទិសដៅ។",
    ne: "रेल, बस, पैदल बाटो, सर्ने ठाउँ, exit, map app, ढिलाइ र गन्तव्यसम्म जाने बाटो आफैं जाँच गर्दै जान जापानी अभ्यास।",
    mn: "Галт тэрэг, автобус, алхах зам, дамжин суух, гарц, газрын зураг, хоцролт, очих газар хүртэлх замыг өөрөө шалгаж очих япон хэлний дадлага.",
    si: "දුම්රිය, බස්, පා ගමන් මාර්ග, මාරුවීම්, පිටවීම, map app, ප්‍රමාදය සහ ගමනාන්තයට යන මාර්ගය තනිව පරීක්ෂා කර යාමට ජපන් භාෂා පුහුණුව.",
    bn: "ট্রেন, বাস, হাঁটার পথ, বদল, exit, map app, দেরি এবং গন্তব্যে যাওয়ার পথ নিজে যাচাই করে যাওয়ার জাপানি অনুশীলন।",
    pt: "Prática de japonês para chegar a um destino por conta própria, verificando trens, ônibus, rotas a pé, transferências, saídas, aplicativos de mapa, atrasos e direções.",
    es: "Práctica de japonés para llegar a un destino por cuenta propia, revisando trenes, autobuses, rutas a pie, transbordos, salidas, aplicaciones de mapas, retrasos y direcciones.",
    fr: "Entraînement en japonais pour atteindre une destination par soi-même en vérifiant les trains, bus, itinéraires à pied, correspondances, sorties, applications de carte, retards et directions.",
    ru: "Практика японского языка для самостоятельного прибытия в пункт назначения с проверкой поездов, автобусов, пеших маршрутов, пересадок, выходов, карт, задержек и направлений.",
    uk: "Практика японської мови для самостійного прибуття до місця призначення з перевіркою потягів, автобусів, пішого маршруту, пересадок, виходів, карт, затримок і напрямків."
};

const b2GoToDestinationSpeakerNames = {
    traveler: {
        ja: "利用者",
        en: "Traveler",
        "zh-CN": "乘客",
        "zh-TW": "乘客",
        ko: "이용자",
        vi: "Người đi đường",
        tl: "Traveler",
        id: "Pengguna",
        th: "ผู้เดินทาง",
        my: "ခရီးသွားသူ",
        km: "អ្នកធ្វើដំណើរ",
        ne: "यात्री",
        mn: "Зорчигч",
        si: "ගමන්කරු",
        bn: "যাত্রী",
        pt: "Viajante",
        es: "Viajero",
        fr: "Voyageur",
        ru: "Пассажир",
        uk: "Пасажир"
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
    busDriver: {
        ja: "運転手",
        en: "Bus Driver",
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

function makeB2GoToDestinationDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeB2GoToDestinationTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b2_go_to_destination",
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
            speakerNames: b2GoToDestinationSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: b2GoToDestinationContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB2GoToDestinationData = [

    makeB2GoToDestinationDialogue(
        "b2_destination_001",
        "目的地までの行き方を確認する",
        [
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "すみません。市民センターまで自分で行きたいのですが、行き方を確認してもいいですか。",
                target: "すみません しみんせんたーまでじぶんでいきたいのですが いきかたをかくにんしてもいいですか",
                ruby: "すみません。<ruby>市民<rt>しみん</rt></ruby>センターまで<ruby>自分<rt>じぶん</rt></ruby>で<ruby>行<rt>い</rt></ruby>きたいのですが、<ruby>行<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してもいいですか。",
                romaji: "Sumimasen. Shimin sentā made jibun de ikitai no desu ga, ikikata o kakunin shite mo ii desu ka."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "はい。現在地はこの駅で、目的地は市民センターですね。",
                target: "はい げんざいちはこのえきで もくてきちはしみんせんたーですね",
                ruby: "はい。<ruby>現在地<rt>げんざいち</rt></ruby>はこの<ruby>駅<rt>えき</rt></ruby>で、<ruby>目的地<rt>もくてきち</rt></ruby>は<ruby>市民<rt>しみん</rt></ruby>センターですね。",
                romaji: "Hai. Genzaichi wa kono eki de, mokutekichi wa shimin sentā desu ne."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "はい。地図アプリではバスに乗るように出ていますが、少し不安です。",
                target: "はい ちずあぷりではばすにのるようにでていますが すこしふあんです",
                ruby: "はい。<ruby>地図<rt>ちず</rt></ruby>アプリではバスに<ruby>乗<rt>の</rt></ruby>るように<ruby>出<rt>で</rt></ruby>ていますが、<ruby>少<rt>すこ</rt></ruby>し<ruby>不安<rt>ふあん</rt></ruby>です。",
                romaji: "Hai. Chizu apuri de wa basu ni noru yō ni dete imasu ga, sukoshi fuan desu."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "この駅の南口を出て、三番のバス乗り場へ行ってください。",
                target: "このえきのみなみぐちをでて さんばんのばすのりばへいってください",
                ruby: "この<ruby>駅<rt>えき</rt></ruby>の<ruby>南口<rt>みなみぐち</rt></ruby>を<ruby>出<rt>で</rt></ruby>て、<ruby>三番<rt>さんばん</rt></ruby>のバス<ruby>乗<rt>の</rt></ruby>り<ruby>場<rt>ば</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってください。",
                romaji: "Kono eki no minamiguchi o dete, sanban no basu noriba e itte kudasai."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "三番のバス乗り場ですね。どの方面のバスに乗ればいいですか。",
                target: "さんばんのばすのりばですね どのほうめんのばすにのればいいですか",
                ruby: "<ruby>三番<rt>さんばん</rt></ruby>のバス<ruby>乗<rt>の</rt></ruby>り<ruby>場<rt>ば</rt></ruby>ですね。どの<ruby>方面<rt>ほうめん</rt></ruby>のバスに<ruby>乗<rt>の</rt></ruby>ればいいですか。",
                romaji: "Sanban no basu noriba desu ne. Dono hōmen no basu ni noreba ii desu ka."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "市役所方面のバスに乗って、文化会館前で降りると近いです。",
                target: "しやくしょほうめんのばすにのって ぶんかかいかんまえでおりるとちかいです",
                ruby: "<ruby>市役所方面<rt>しやくしょほうめん</rt></ruby>のバスに<ruby>乗<rt>の</rt></ruby>って、<ruby>文化会館前<rt>ぶんかかいかんまえ</rt></ruby>で<ruby>降<rt>お</rt></ruby>りると<ruby>近<rt>ちか</rt></ruby>いです。",
                romaji: "Shiyakusho hōmen no basu ni notte, Bunka kaikan-mae de oriru to chikai desu."
            }
        ],
        {
            ja: [
                "利用者：すみません。市民センターまで自分で行きたいのですが、行き方を確認してもいいですか。",
                "駅員：はい。現在地はこの駅で、目的地は市民センターですね。",
                "利用者：はい。地図アプリではバスに乗るように出ていますが、少し不安です。",
                "駅員：この駅の南口を出て、三番のバス乗り場へ行ってください。",
                "利用者：三番のバス乗り場ですね。どの方面のバスに乗ればいいですか。",
                "駅員：市役所方面のバスに乗って、文化会館前で降りると近いです。"
            ],
            en: [
                "Traveler: Excuse me. I would like to get to the community center by myself. May I check the route?",
                "Station Staff: Yes. Your current location is this station, and your destination is the community center, correct?",
                "Traveler: Yes. The map app says I should take a bus, but I feel a little unsure.",
                "Station Staff: Please go out the south exit of this station and go to bus stop number three.",
                "Traveler: Bus stop number three, right? Which direction should the bus be going?",
                "Station Staff: Take the bus toward City Hall and get off at Bunka Kaikan-mae. It is close from there."
            ],
            "zh-CN": [
                "乘客：不好意思。我想自己去市民中心，可以确认一下路线吗？",
                "车站工作人员：可以。现在的位置是这个车站，目的地是市民中心，对吧？",
                "乘客：是的。地图应用显示要坐公交，但我有点不安。",
                "车站工作人员：请从这个车站的南口出去，到三号公交站。",
                "乘客：三号公交站对吧？应该坐哪个方向的公交？",
                "车站工作人员：请坐开往市政府方向的公交，在文化会馆前下车，那里比较近。"
            ],
            "zh-TW": [
                "乘客：不好意思。我想自己去市民中心，可以確認一下路線嗎？",
                "車站工作人員：可以。現在的位置是這個車站，目的地是市民中心，對吧？",
                "乘客：是的。地圖App顯示要坐公車，但我有點不安。",
                "車站工作人員：請從這個車站的南口出去，到三號公車站。",
                "乘客：三號公車站對吧？應該坐哪個方向的公車？",
                "車站工作人員：請坐開往市政府方向的公車，在文化會館前下車，那裡比較近。"
            ],
            ko: [
                "이용자: 죄송합니다. 시민센터까지 스스로 가고 싶은데, 가는 방법을 확인해도 될까요?",
                "역무원: 네. 현재 위치는 이 역이고 목적지는 시민센터 맞지요?",
                "이용자: 네. 지도 앱에서는 버스를 타라고 나오는데 조금 불안합니다.",
                "역무원: 이 역의 남쪽 출구로 나가서 3번 버스 승강장으로 가세요.",
                "이용자: 3번 버스 승강장이군요. 어느 방면 버스를 타면 되나요?",
                "역무원: 시청 방면 버스를 타고 문화회관 앞에서 내리면 가깝습니다."
            ],
            vi: [
                "Người đi đường: Xin lỗi. Tôi muốn tự đi đến trung tâm cộng đồng. Tôi có thể xác nhận đường đi không?",
                "Nhân viên nhà ga: Vâng. Vị trí hiện tại là ga này và điểm đến là trung tâm cộng đồng, đúng không?",
                "Người đi đường: Vâng. Ứng dụng bản đồ hiển thị là đi xe buýt, nhưng tôi hơi lo.",
                "Nhân viên nhà ga: Hãy ra cửa nam của ga này và đi đến bến xe buýt số 3.",
                "Người đi đường: Bến xe buýt số 3 đúng không ạ? Tôi nên đi xe buýt hướng nào?",
                "Nhân viên nhà ga: Hãy đi xe buýt hướng tòa thị chính và xuống ở Bunka Kaikan-mae. Từ đó sẽ gần."
            ]
        }
    ),

    makeB2GoToDestinationDialogue(
        "b2_destination_002",
        "電車の乗り換えを確認する",
        [
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "すみません。中央病院へ行くには、どこで乗り換えればよいでしょうか。",
                target: "すみません ちゅうおうびょういんへいくには どこでのりかえればよいでしょうか",
                ruby: "すみません。<ruby>中央病院<rt>ちゅうおうびょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くには、どこで<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えればよいでしょうか。",
                romaji: "Sumimasen. Chūō byōin e iku ni wa, doko de norikaereba yoi deshō ka."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "まず二番線から普通電車に乗って、東町駅で降りてください。",
                target: "まずにばんせんからふつうでんしゃにのって ひがしまちえきでおりてください",
                ruby: "まず<ruby>二番線<rt>にばんせん</rt></ruby>から<ruby>普通電車<rt>ふつうでんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>って、<ruby>東町駅<rt>ひがしまちえき</rt></ruby>で<ruby>降<rt>お</rt></ruby>りてください。",
                romaji: "Mazu niban-sen kara futsū densha ni notte, Higashimachi-eki de orite kudasai."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "東町駅で降りたあと、バスに乗り換えるということで合っていますか。",
                target: "ひがしまちえきでおりたあと ばすにのりかえるということであっていますか",
                ruby: "<ruby>東町駅<rt>ひがしまちえき</rt></ruby>で<ruby>降<rt>お</rt></ruby>りたあと、バスに<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えるということで<ruby>合<rt>あ</rt></ruby>っていますか。",
                romaji: "Higashimachi-eki de orita ato, basu ni norikaeru to iu koto de atte imasu ka."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "はい。東町駅の東口から病院行きのバスが出ています。",
                target: "はい ひがしまちえきのひがしぐちからびょういんいきのばすがでています",
                ruby: "はい。<ruby>東町駅<rt>ひがしまちえき</rt></ruby>の<ruby>東口<rt>ひがしぐち</rt></ruby>から<ruby>病院行<rt>びょういんい</rt></ruby>きのバスが<ruby>出<rt>で</rt></ruby>ています。",
                romaji: "Hai. Higashimachi-eki no higashiguchi kara byōin-iki no basu ga dete imasu."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "もしバスの時間が合わない場合、歩いて行くこともできますか。",
                target: "もしばすのじかんがあわないばあい あるいていくこともできますか",
                ruby: "もしバスの<ruby>時間<rt>じかん</rt></ruby>が<ruby>合<rt>あ</rt></ruby>わない<ruby>場合<rt>ばあい</rt></ruby>、<ruby>歩<rt>ある</rt></ruby>いて<ruby>行<rt>い</rt></ruby>くこともできますか。",
                romaji: "Moshi basu no jikan ga awanai baai, aruite iku koto mo dekimasu ka."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "歩くと二十分ほどかかりますが、道は比較的わかりやすいです。",
                target: "あるくとにじゅっぷんほどかかりますが みちはひかくてきわかりやすいです",
                ruby: "<ruby>歩<rt>ある</rt></ruby>くと<ruby>二十分<rt>にじゅっぷん</rt></ruby>ほどかかりますが、<ruby>道<rt>みち</rt></ruby>は<ruby>比較的<rt>ひかくてき</rt></ruby>わかりやすいです。",
                romaji: "Aruku to nijuppun hodo kakarimasu ga, michi wa hikakuteki wakariyasui desu."
            }
        ],
        {
            ja: [
                "利用者：すみません。中央病院へ行くには、どこで乗り換えればよいでしょうか。",
                "駅員：まず二番線から普通電車に乗って、東町駅で降りてください。",
                "利用者：東町駅で降りたあと、バスに乗り換えるということで合っていますか。",
                "駅員：はい。東町駅の東口から病院行きのバスが出ています。",
                "利用者：もしバスの時間が合わない場合、歩いて行くこともできますか。",
                "駅員：歩くと二十分ほどかかりますが、道は比較的わかりやすいです。"
            ],
            en: [
                "Traveler: Excuse me. To get to Central Hospital, where should I transfer?",
                "Station Staff: First, take a local train from platform two and get off at Higashimachi Station.",
                "Traveler: After getting off at Higashimachi Station, I should transfer to a bus, correct?",
                "Station Staff: Yes. A bus bound for the hospital leaves from the east exit of Higashimachi Station.",
                "Traveler: If the bus time does not work, is it also possible to walk?",
                "Station Staff: It takes about twenty minutes on foot, but the route is relatively easy to understand."
            ],
            "zh-CN": [
                "乘客：不好意思。去中央医院的话，应该在哪里换乘？",
                "车站工作人员：首先从二号线乘普通电车，在东町站下车。",
                "乘客：在东町站下车后，再换乘公交，对吗？",
                "车站工作人员：是的。从东町站东口有开往医院的公交。",
                "乘客：如果公交时间不合适，也可以步行去吗？",
                "车站工作人员：步行大约二十分钟，不过路线比较容易明白。"
            ],
            "zh-TW": [
                "乘客：不好意思。去中央醫院的話，應該在哪裡轉乘？",
                "車站工作人員：首先從二號線乘普通電車，在東町站下車。",
                "乘客：在東町站下車後，再轉乘公車，對嗎？",
                "車站工作人員：是的。從東町站東口有開往醫院的公車。",
                "乘客：如果公車時間不合適，也可以步行去嗎？",
                "車站工作人員：步行大約二十分鐘，不過路線比較容易明白。"
            ],
            ko: [
                "이용자: 죄송합니다. 중앙병원에 가려면 어디에서 갈아타면 될까요?",
                "역무원: 먼저 2번선에서 보통 전철을 타고 히가시마치역에서 내리세요.",
                "이용자: 히가시마치역에서 내린 뒤 버스로 갈아타면 맞나요?",
                "역무원: 네. 히가시마치역 동쪽 출구에서 병원행 버스가 나옵니다.",
                "이용자: 만약 버스 시간이 맞지 않으면 걸어갈 수도 있나요?",
                "역무원: 걸으면 약 20분 걸리지만 길은 비교적 알기 쉽습니다."
            ],
            vi: [
                "Người đi đường: Xin lỗi. Để đến Bệnh viện Trung tâm, tôi nên chuyển tuyến ở đâu?",
                "Nhân viên nhà ga: Trước tiên, hãy đi tàu thường từ tuyến số 2 và xuống ở ga Higashimachi.",
                "Người đi đường: Sau khi xuống ở ga Higashimachi, tôi chuyển sang xe buýt, đúng không?",
                "Nhân viên nhà ga: Vâng. Xe buýt đi đến bệnh viện xuất phát từ cửa đông của ga Higashimachi.",
                "Người đi đường: Nếu giờ xe buýt không phù hợp, tôi có thể đi bộ không?",
                "Nhân viên nhà ga: Đi bộ mất khoảng 20 phút, nhưng đường tương đối dễ hiểu."
            ]
        }
    ),

    makeB2GoToDestinationDialogue(
        "b2_destination_003",
        "遅延があるときに別の行き方を考える",
        [
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "すみません。この電車は遅れているようですが、別の行き方はありますか。",
                target: "すみません このでんしゃはおくれているようですが べつのいきかたはありますか",
                ruby: "すみません。この<ruby>電車<rt>でんしゃ</rt></ruby>は<ruby>遅<rt>おく</rt></ruby>れているようですが、<ruby>別<rt>べつ</rt></ruby>の<ruby>行<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby>はありますか。",
                romaji: "Sumimasen. Kono densha wa okurete iru yō desu ga, betsu no ikikata wa arimasu ka."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "目的地はどちらですか。",
                target: "もくてきちはどちらですか",
                ruby: "<ruby>目的地<rt>もくてきち</rt></ruby>はどちらですか。",
                romaji: "Mokutekichi wa dochira desu ka."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "午後二時までに国際交流センターへ着きたいです。",
                target: "ごごにじまでにこくさいこうりゅうせんたーへつきたいです",
                ruby: "<ruby>午後二時<rt>ごごにじ</rt></ruby>までに<ruby>国際交流<rt>こくさいこうりゅう</rt></ruby>センターへ<ruby>着<rt>つ</rt></ruby>きたいです。",
                romaji: "Gogo ni-ji made ni kokusai kōryū sentā e tsukitai desu."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "それなら、地下鉄に乗り換えた方が早いかもしれません。",
                target: "それなら ちかてつにのりかえたほうがはやいかもしれません",
                ruby: "それなら、<ruby>地下鉄<rt>ちかてつ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えた<ruby>方<rt>ほう</rt></ruby>が<ruby>早<rt>はや</rt></ruby>いかもしれません。",
                romaji: "Sore nara, chikatetsu ni norikaeta hō ga hayai kamoshiremasen."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "地下鉄の駅までは、ここから歩いて行けますか。",
                target: "ちかてつのえきまでは ここからあるいていけますか",
                ruby: "<ruby>地下鉄<rt>ちかてつ</rt></ruby>の<ruby>駅<rt>えき</rt></ruby>までは、ここから<ruby>歩<rt>ある</rt></ruby>いて<ruby>行<rt>い</rt></ruby>けますか。",
                romaji: "Chikatetsu no eki made wa, koko kara aruite ikemasu ka."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "はい。北口を出て、案内表示に沿って五分ほど歩いてください。",
                target: "はい きたぐちをでて あんないひょうじにそってごふんほどあるいてください",
                ruby: "はい。<ruby>北口<rt>きたぐち</rt></ruby>を<ruby>出<rt>で</rt></ruby>て、<ruby>案内表示<rt>あんないひょうじ</rt></ruby>に<ruby>沿<rt>そ</rt></ruby>って<ruby>五分<rt>ごふん</rt></ruby>ほど<ruby>歩<rt>ある</rt></ruby>いてください。",
                romaji: "Hai. Kitaguchi o dete, annai hyōji ni sotte gofun hodo aruite kudasai."
            }
        ],
        {
            ja: [
                "利用者：すみません。この電車は遅れているようですが、別の行き方はありますか。",
                "駅員：目的地はどちらですか。",
                "利用者：午後二時までに国際交流センターへ着きたいです。",
                "駅員：それなら、地下鉄に乗り換えた方が早いかもしれません。",
                "利用者：地下鉄の駅までは、ここから歩いて行けますか。",
                "駅員：はい。北口を出て、案内表示に沿って五分ほど歩いてください。"
            ],
            en: [
                "Traveler: Excuse me. This train seems to be delayed. Is there another way to get there?",
                "Station Staff: Where is your destination?",
                "Traveler: I want to arrive at the International Exchange Center by 2 p.m.",
                "Station Staff: In that case, transferring to the subway may be faster.",
                "Traveler: Can I walk to the subway station from here?",
                "Station Staff: Yes. Go out the north exit and walk for about five minutes following the signs."
            ],
            "zh-CN": [
                "乘客：不好意思。这班电车好像晚点了。还有别的去法吗？",
                "车站工作人员：您的目的地是哪里？",
                "乘客：我想在下午两点前到国际交流中心。",
                "车站工作人员：那样的话，换乘地铁可能更快。",
                "乘客：从这里可以走到地铁站吗？",
                "车站工作人员：可以。请从北口出去，沿着指示牌走大约五分钟。"
            ],
            "zh-TW": [
                "乘客：不好意思。這班電車好像誤點了。還有別的去法嗎？",
                "車站工作人員：您的目的地是哪裡？",
                "乘客：我想在下午兩點前到國際交流中心。",
                "車站工作人員：那樣的話，轉乘捷運可能更快。",
                "乘客：從這裡可以走到捷運站嗎？",
                "車站工作人員：可以。請從北口出去，沿著指示牌走大約五分鐘。"
            ],
            ko: [
                "이용자: 죄송합니다. 이 전철은 지연되고 있는 것 같은데 다른 가는 방법이 있나요?",
                "역무원: 목적지는 어디인가요?",
                "이용자: 오후 2시까지 국제교류센터에 도착하고 싶습니다.",
                "역무원: 그렇다면 지하철로 갈아타는 편이 빠를지도 모릅니다.",
                "이용자: 지하철역까지는 여기서 걸어갈 수 있나요?",
                "역무원: 네. 북쪽 출구로 나가서 안내 표지를 따라 5분 정도 걸어가세요."
            ],
            vi: [
                "Người đi đường: Xin lỗi. Có vẻ tàu này đang bị trễ. Có cách đi khác không?",
                "Nhân viên nhà ga: Điểm đến của bạn là đâu?",
                "Người đi đường: Tôi muốn đến Trung tâm Giao lưu Quốc tế trước 2 giờ chiều.",
                "Nhân viên nhà ga: Vậy thì chuyển sang tàu điện ngầm có thể nhanh hơn.",
                "Người đi đường: Tôi có thể đi bộ từ đây đến ga tàu điện ngầm không?",
                "Nhân viên nhà ga: Vâng. Hãy ra cửa bắc và đi bộ khoảng 5 phút theo biển hướng dẫn."
            ]
        }
    ),

    makeB2GoToDestinationDialogue(
        "b2_destination_004",
        "出口を間違えないように確認する",
        [
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "すみません。市立図書館へ行きたいのですが、どの出口を使えばよいですか。",
                target: "すみません しりつとしょかんへいきたいのですが どのでぐちをつかえばよいですか",
                ruby: "すみません。<ruby>市立図書館<rt>しりつとしょかん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きたいのですが、どの<ruby>出口<rt>でぐち</rt></ruby>を<ruby>使<rt>つか</rt></ruby>えばよいですか。",
                romaji: "Sumimasen. Shiritsu toshokan e ikitai no desu ga, dono deguchi o tsukaeba yoi desu ka."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "図書館なら、西口を使うのが一番近いです。",
                target: "としょかんなら にしぐちをつかうのがいちばんちかいです",
                ruby: "<ruby>図書館<rt>としょかん</rt></ruby>なら、<ruby>西口<rt>にしぐち</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うのが<ruby>一番<rt>いちばん</rt></ruby><ruby>近<rt>ちか</rt></ruby>いです。",
                romaji: "Toshokan nara, nishiguchi o tsukau no ga ichiban chikai desu."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "地図では東口と出ているのですが、西口の方が近いのですね。",
                target: "ちずではひがしぐちとでているのですが にしぐちのほうがちかいのですね",
                ruby: "<ruby>地図<rt>ちず</rt></ruby>では<ruby>東口<rt>ひがしぐち</rt></ruby>と<ruby>出<rt>で</rt></ruby>ているのですが、<ruby>西口<rt>にしぐち</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>いのですね。",
                romaji: "Chizu de wa higashiguchi to dete iru no desu ga, nishiguchi no hō ga chikai no desu ne."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "はい。東口から出ると、大きな道路を渡る必要があります。",
                target: "はい ひがしぐちからでると おおきなどうろをわたるひつようがあります",
                ruby: "はい。<ruby>東口<rt>ひがしぐち</rt></ruby>から<ruby>出<rt>で</rt></ruby>ると、<ruby>大<rt>おお</rt></ruby>きな<ruby>道路<rt>どうろ</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>があります。",
                romaji: "Hai. Higashiguchi kara deru to, ōkina dōro o wataru hitsuyō ga arimasu."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "西口を出たあとは、何を目印に歩けばよいでしょうか。",
                target: "にしぐちをでたあとは なにをめじるしにあるけばよいでしょうか",
                ruby: "<ruby>西口<rt>にしぐち</rt></ruby>を<ruby>出<rt>で</rt></ruby>たあとは、<ruby>何<rt>なに</rt></ruby>を<ruby>目印<rt>めじるし</rt></ruby>に<ruby>歩<rt>ある</rt></ruby>けばよいでしょうか。",
                romaji: "Nishiguchi o deta ato wa, nani o mejirushi ni arukeba yoi deshō ka."
            },
            {
                label: "話者A",
                key: "stationStaff",
                name: "駅員",
                line: "右側に郵便局が見えますので、その角を左に曲がってください。",
                target: "みぎがわにゆうびんきょくがみえますので そのかどをひだりにまがってください",
                ruby: "<ruby>右側<rt>みぎがわ</rt></ruby>に<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>が<ruby>見<rt>み</rt></ruby>えますので、その<ruby>角<rt>かど</rt></ruby>を<ruby>左<rt>ひだり</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がってください。",
                romaji: "Migigawa ni yūbinkyoku ga miemasu node, sono kado o hidari ni magatte kudasai."
            }
        ],
        {
            ja: [
                "利用者：すみません。市立図書館へ行きたいのですが、どの出口を使えばよいですか。",
                "駅員：図書館なら、西口を使うのが一番近いです。",
                "利用者：地図では東口と出ているのですが、西口の方が近いのですね。",
                "駅員：はい。東口から出ると、大きな道路を渡る必要があります。",
                "利用者：西口を出たあとは、何を目印に歩けばよいでしょうか。",
                "駅員：右側に郵便局が見えますので、その角を左に曲がってください。"
            ],
            en: [
                "Traveler: Excuse me. I want to go to the city library. Which exit should I use?",
                "Station Staff: For the library, the west exit is the closest.",
                "Traveler: The map says east exit, but the west exit is closer, right?",
                "Station Staff: Yes. If you go out the east exit, you need to cross a big road.",
                "Traveler: After I go out the west exit, what should I use as a landmark?",
                "Station Staff: You will see a post office on your right, so turn left at that corner."
            ],
            "zh-CN": [
                "乘客：不好意思。我想去市立图书馆，应该用哪个出口？",
                "车站工作人员：去图书馆的话，西口最近。",
                "乘客：地图上显示东口，但西口更近，对吧？",
                "车站工作人员：是的。从东口出去的话，需要过一条大马路。",
                "乘客：从西口出去后，应该以什么为标志走？",
                "车站工作人员：右边会看到邮局，请在那个拐角左转。"
            ],
            "zh-TW": [
                "乘客：不好意思。我想去市立圖書館，應該用哪個出口？",
                "車站工作人員：去圖書館的話，西口最近。",
                "乘客：地圖上顯示東口，但西口更近，對吧？",
                "車站工作人員：是的。從東口出去的話，需要過一條大馬路。",
                "乘客：從西口出去後，應該以什麼為標誌走？",
                "車站工作人員：右邊會看到郵局，請在那個轉角左轉。"
            ],
            ko: [
                "이용자: 죄송합니다. 시립도서관에 가고 싶은데 어느 출구를 이용하면 되나요?",
                "역무원: 도서관이라면 서쪽 출구를 이용하는 것이 가장 가깝습니다.",
                "이용자: 지도에는 동쪽 출구라고 나오는데 서쪽 출구가 더 가깝군요.",
                "역무원: 네. 동쪽 출구로 나가면 큰 도로를 건너야 합니다.",
                "이용자: 서쪽 출구를 나온 뒤에는 무엇을 표식으로 걸어가면 될까요?",
                "역무원: 오른쪽에 우체국이 보이니 그 모퉁이를 왼쪽으로 도세요."
            ],
            vi: [
                "Người đi đường: Xin lỗi. Tôi muốn đến thư viện thành phố. Tôi nên dùng lối ra nào?",
                "Nhân viên nhà ga: Nếu là thư viện, lối ra phía tây là gần nhất.",
                "Người đi đường: Trên bản đồ hiển thị lối ra phía đông, nhưng lối ra phía tây gần hơn đúng không?",
                "Nhân viên nhà ga: Vâng. Nếu ra lối đông, bạn cần băng qua một con đường lớn.",
                "Người đi đường: Sau khi ra lối tây, tôi nên dùng gì làm dấu mốc để đi bộ?",
                "Nhân viên nhà ga: Bạn sẽ thấy bưu điện ở bên phải, hãy rẽ trái ở góc đó."
            ]
        }
    ),

    makeB2GoToDestinationDialogue(
        "b2_destination_005",
        "バスの行き先を確認する",
        [
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "すみません。このバスは総合体育館の近くまで行きますか。",
                target: "すみません このばすはそうごうたいいくかんのちかくまでいきますか",
                ruby: "すみません。このバスは<ruby>総合体育館<rt>そうごうたいいくかん</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くまで<ruby>行<rt>い</rt></ruby>きますか。",
                romaji: "Sumimasen. Kono basu wa sōgō taiikukan no chikaku made ikimasu ka."
            },
            {
                label: "話者A",
                key: "busDriver",
                name: "運転手",
                line: "はい。体育館前という停留所で降りると便利です。",
                target: "はい たいいくかんまえというていりゅうじょでおりるとべんりです",
                ruby: "はい。<ruby>体育館前<rt>たいいくかんまえ</rt></ruby>という<ruby>停留所<rt>ていりゅうじょ</rt></ruby>で<ruby>降<rt>お</rt></ruby>りると<ruby>便利<rt>べんり</rt></ruby>です。",
                romaji: "Hai. Taiikukan-mae to iu teiryūjo de oriru to benri desu."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "体育館前ですね。そこまで何分くらいかかりますか。",
                target: "たいいくかんまえですね そこまでなんぷんくらいかかりますか",
                ruby: "<ruby>体育館前<rt>たいいくかんまえ</rt></ruby>ですね。そこまで<ruby>何分<rt>なんぷん</rt></ruby>くらいかかりますか。",
                romaji: "Taiikukan-mae desu ne. Soko made nanpun kurai kakarimasu ka."
            },
            {
                label: "話者A",
                key: "busDriver",
                name: "運転手",
                line: "道路が混んでいなければ、十五分くらいで着くと思います。",
                target: "どうろがこんでいなければ じゅうごふんくらいでつくとおもいます",
                ruby: "<ruby>道路<rt>どうろ</rt></ruby>が<ruby>混<rt>こ</rt></ruby>んでいなければ、<ruby>十五分<rt>じゅうごふん</rt></ruby>くらいで<ruby>着<rt>つ</rt></ruby>くと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Dōro ga konde inakereba, jūgofun kurai de tsuku to omoimasu."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "降りる停留所が近づいたら、アナウンスでわかりますか。",
                target: "おりるていりゅうじょがちかづいたら あなうんすでわかりますか",
                ruby: "<ruby>降<rt>お</rt></ruby>りる<ruby>停留所<rt>ていりゅうじょ</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づいたら、アナウンスでわかりますか。",
                romaji: "Oriru teiryūjo ga chikazuitara, anaunsu de wakarimasu ka."
            },
            {
                label: "話者A",
                key: "busDriver",
                name: "運転手",
                line: "はい。次の停留所として案内されますので、その後にボタンを押してください。",
                target: "はい つぎのていりゅうじょとしてあんないされますので そのあとにぼたんをおしてください",
                ruby: "はい。<ruby>次<rt>つぎ</rt></ruby>の<ruby>停留所<rt>ていりゅうじょ</rt></ruby>として<ruby>案内<rt>あんない</rt></ruby>されますので、その<ruby>後<rt>あと</rt></ruby>にボタンを<ruby>押<rt>お</rt></ruby>してください。",
                romaji: "Hai. Tsugi no teiryūjo to shite annai saremasu node, sono ato ni botan o oshite kudasai."
            }
        ],
        {
            ja: [
                "利用者：すみません。このバスは総合体育館の近くまで行きますか。",
                "運転手：はい。体育館前という停留所で降りると便利です。",
                "利用者：体育館前ですね。そこまで何分くらいかかりますか。",
                "運転手：道路が混んでいなければ、十五分くらいで着くと思います。",
                "利用者：降りる停留所が近づいたら、アナウンスでわかりますか。",
                "運転手：はい。次の停留所として案内されますので、その後にボタンを押してください。"
            ],
            en: [
                "Traveler: Excuse me. Does this bus go near the general gymnasium?",
                "Bus Driver: Yes. It is convenient to get off at the stop called Taiikukan-mae.",
                "Traveler: Taiikukan-mae, right? About how many minutes does it take?",
                "Bus Driver: If the road is not crowded, I think it will take about fifteen minutes.",
                "Traveler: When the stop gets close, will I know from the announcement?",
                "Bus Driver: Yes. It will be announced as the next stop, so please press the button after that."
            ],
            "zh-CN": [
                "乘客：不好意思。这辆公交到综合体育馆附近吗？",
                "司机：到。在体育馆前这个站下车比较方便。",
                "乘客：体育馆前对吧？到那里大概要几分钟？",
                "司机：如果路上不堵，大约十五分钟能到。",
                "乘客：快到下车站时，会通过广播知道吗？",
                "司机：会的。会作为下一站进行广播，请之后按下车按钮。"
            ],
            "zh-TW": [
                "乘客：不好意思。這輛公車到綜合體育館附近嗎？",
                "司機：到。在體育館前這個站下車比較方便。",
                "乘客：體育館前對吧？到那裡大概要幾分鐘？",
                "司機：如果路上不塞車，大約十五分鐘能到。",
                "乘客：快到下車站時，會透過廣播知道嗎？",
                "司機：會的。會作為下一站進行廣播，請之後按下車鈕。"
            ],
            ko: [
                "이용자: 죄송합니다. 이 버스는 종합체육관 근처까지 가나요?",
                "운전기사: 네. 체육관 앞이라는 정류장에서 내리면 편리합니다.",
                "이용자: 체육관 앞이군요. 거기까지 몇 분 정도 걸리나요?",
                "운전기사: 도로가 막히지 않으면 15분 정도면 도착할 것 같습니다.",
                "이용자: 내릴 정류장이 가까워지면 안내 방송으로 알 수 있나요?",
                "운전기사: 네. 다음 정류장으로 안내되니 그 후에 버튼을 눌러 주세요."
            ],
            vi: [
                "Người đi đường: Xin lỗi. Xe buýt này có đi gần nhà thi đấu tổng hợp không?",
                "Tài xế: Có. Xuống ở trạm tên là Taiikukan-mae thì tiện.",
                "Người đi đường: Taiikukan-mae đúng không ạ? Mất khoảng bao nhiêu phút đến đó?",
                "Tài xế: Nếu đường không đông, tôi nghĩ khoảng 15 phút sẽ đến.",
                "Người đi đường: Khi gần đến trạm xuống, tôi có biết qua thông báo không?",
                "Tài xế: Có. Nó sẽ được thông báo là trạm tiếp theo, nên sau đó hãy bấm nút."
            ]
        }
    ),

    makeB2GoToDestinationDialogue(
        "b2_destination_006",
        "道に迷ったときに現在地を説明する",
        [
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "すみません。道に迷ってしまいました。現在地を確認してもらえますか。",
                target: "すみません みちにまよってしまいました げんざいちをかくにんしてもらえますか",
                ruby: "すみません。<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>ってしまいました。<ruby>現在地<rt>げんざいち</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してもらえますか。",
                romaji: "Sumimasen. Michi ni mayotte shimaimashita. Genzaichi o kakunin shite moraemasu ka."
            },
            {
                label: "話者A",
                key: "passerby",
                name: "通行人",
                line: "はい。どこへ行く予定ですか。",
                target: "はい どこへいくよていですか",
                ruby: "はい。どこへ<ruby>行<rt>い</rt></ruby>く<ruby>予定<rt>よてい</rt></ruby>ですか。",
                romaji: "Hai. Doko e iku yotei desu ka."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "駅前ホールに行きたいのですが、地図の向きがわからなくなりました。",
                target: "えきまえほーるにいきたいのですが ちずのむきがわからなくなりました",
                ruby: "<ruby>駅前<rt>えきまえ</rt></ruby>ホールに<ruby>行<rt>い</rt></ruby>きたいのですが、<ruby>地図<rt>ちず</rt></ruby>の<ruby>向<rt>む</rt></ruby>きがわからなくなりました。",
                romaji: "Ekimae hōru ni ikitai no desu ga, chizu no muki ga wakaranaku narimashita."
            },
            {
                label: "話者A",
                key: "passerby",
                name: "通行人",
                line: "今いる場所は駅の反対側です。ホールへ行くには、一度駅の方へ戻った方がよいです。",
                target: "いまいるばしょはえきのはんたいがわです ほーるへいくには いちどえきのほうへもどったほうがよいです",
                ruby: "<ruby>今<rt>いま</rt></ruby>いる<ruby>場所<rt>ばしょ</rt></ruby>は<ruby>駅<rt>えき</rt></ruby>の<ruby>反対側<rt>はんたいがわ</rt></ruby>です。ホールへ<ruby>行<rt>い</rt></ruby>くには、<ruby>一度<rt>いちど</rt></ruby><ruby>駅<rt>えき</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>へ<ruby>戻<rt>もど</rt></ruby>った<ruby>方<rt>ほう</rt></ruby>がよいです。",
                romaji: "Ima iru basho wa eki no hantaigawa desu. Hōru e iku ni wa, ichido eki no hō e modotta hō ga yoi desu."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "駅の方へ戻るには、この道をまっすぐで合っていますか。",
                target: "えきのほうへもどるには このみちをまっすぐであっていますか",
                ruby: "<ruby>駅<rt>えき</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>へ<ruby>戻<rt>もど</rt></ruby>るには、この<ruby>道<rt>みち</rt></ruby>をまっすぐで<ruby>合<rt>あ</rt></ruby>っていますか。",
                romaji: "Eki no hō e modoru ni wa, kono michi o massugu de atte imasu ka."
            },
            {
                label: "話者A",
                key: "passerby",
                name: "通行人",
                line: "はい。信号を二つ過ぎたら、左に駅の入口が見えます。",
                target: "はい しんごうをふたつすぎたら ひだりにえきのいりぐちがみえます",
                ruby: "はい。<ruby>信号<rt>しんごう</rt></ruby>を<ruby>二<rt>ふた</rt></ruby>つ<ruby>過<rt>す</rt></ruby>ぎたら、<ruby>左<rt>ひだり</rt></ruby>に<ruby>駅<rt>えき</rt></ruby>の<ruby>入口<rt>いりぐち</rt></ruby>が<ruby>見<rt>み</rt></ruby>えます。",
                romaji: "Hai. Shingō o futatsu sugitara, hidari ni eki no iriguchi ga miemasu."
            }
        ],
        {
            ja: [
                "利用者：すみません。道に迷ってしまいました。現在地を確認してもらえますか。",
                "通行人：はい。どこへ行く予定ですか。",
                "利用者：駅前ホールに行きたいのですが、地図の向きがわからなくなりました。",
                "通行人：今いる場所は駅の反対側です。ホールへ行くには、一度駅の方へ戻った方がよいです。",
                "利用者：駅の方へ戻るには、この道をまっすぐで合っていますか。",
                "通行人：はい。信号を二つ過ぎたら、左に駅の入口が見えます。"
            ],
            en: [
                "Traveler: Excuse me. I got lost. Could you help me check where I am now?",
                "Passerby: Sure. Where are you planning to go?",
                "Traveler: I want to go to Ekimae Hall, but I no longer understand the direction of the map.",
                "Passerby: You are on the opposite side of the station. To get to the hall, you should go back toward the station once.",
                "Traveler: To go back toward the station, is it correct to go straight on this road?",
                "Passerby: Yes. After you pass two traffic lights, you will see the station entrance on your left."
            ],
            "zh-CN": [
                "乘客：不好意思。我迷路了。可以帮我确认现在的位置吗？",
                "路人：可以。你打算去哪里？",
                "乘客：我想去站前大厅，但看不懂地图方向了。",
                "路人：你现在在车站的反方向。去大厅的话，最好先回到车站方向。",
                "乘客：要回到车站方向的话，沿这条路直走对吗？",
                "路人：对。过两个红绿灯后，左边会看到车站入口。"
            ],
            "zh-TW": [
                "乘客：不好意思。我迷路了。可以幫我確認現在的位置嗎？",
                "路人：可以。你打算去哪裡？",
                "乘客：我想去站前大廳，但看不懂地圖方向了。",
                "路人：你現在在車站的反方向。去大廳的話，最好先回到車站方向。",
                "乘客：要回到車站方向的話，沿這條路直走對嗎？",
                "路人：對。過兩個紅綠燈後，左邊會看到車站入口。"
            ],
            ko: [
                "이용자: 죄송합니다. 길을 잃어버렸습니다. 현재 위치를 확인해 주실 수 있나요?",
                "지나가는 사람: 네. 어디에 갈 예정인가요?",
                "이용자: 역 앞 홀에 가고 싶은데 지도의 방향을 알 수 없게 되었습니다.",
                "지나가는 사람: 지금 있는 곳은 역의 반대편입니다. 홀에 가려면 한 번 역 쪽으로 돌아가는 것이 좋습니다.",
                "이용자: 역 쪽으로 돌아가려면 이 길을 똑바로 가면 맞나요?",
                "지나가는 사람: 네. 신호등을 두 개 지나면 왼쪽에 역 입구가 보입니다."
            ],
            vi: [
                "Người đi đường: Xin lỗi. Tôi bị lạc đường. Bạn có thể giúp tôi kiểm tra vị trí hiện tại không?",
                "Người qua đường: Được. Bạn định đi đâu?",
                "Người đi đường: Tôi muốn đến hội trường trước ga, nhưng tôi không còn hiểu hướng của bản đồ nữa.",
                "Người qua đường: Chỗ bạn đang đứng là phía đối diện của ga. Để đến hội trường, bạn nên quay lại phía ga một lần.",
                "Người đi đường: Để quay lại phía ga, tôi đi thẳng đường này là đúng không?",
                "Người qua đường: Đúng. Sau khi qua hai đèn tín hiệu, bạn sẽ thấy lối vào ga ở bên trái."
            ]
        }
    ),

    makeB2GoToDestinationDialogue(
        "b2_destination_007",
        "友人に到着予定を伝える",
        [
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "もしもし。今、駅に着きました。これから会場まで自分で向かいます。",
                target: "もしもし いま えきにつきました これからかいじょうまでじぶんでむかいます",
                ruby: "もしもし。<ruby>今<rt>いま</rt></ruby>、<ruby>駅<rt>えき</rt></ruby>に<ruby>着<rt>つ</rt></ruby>きました。これから<ruby>会場<rt>かいじょう</rt></ruby>まで<ruby>自分<rt>じぶん</rt></ruby>で<ruby>向<rt>む</rt></ruby>かいます。",
                romaji: "Moshi moshi. Ima, eki ni tsukimashita. Kore kara kaijō made jibun de mukaimasu."
            },
            {
                label: "話者A",
                key: "friend",
                name: "友人",
                line: "わかりました。地図アプリで場所は確認できていますか。",
                target: "わかりました ちずあぷりでばしょはかくにんできていますか",
                ruby: "わかりました。<ruby>地図<rt>ちず</rt></ruby>アプリで<ruby>場所<rt>ばしょ</rt></ruby>は<ruby>確認<rt>かくにん</rt></ruby>できていますか。",
                romaji: "Wakarimashita. Chizu apuri de basho wa kakunin dekite imasu ka."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "はい。駅の西口から出て、商店街を通るルートを選びました。",
                target: "はい えきのにしぐちからでて しょうてんがいをとおるるーとをえらびました",
                ruby: "はい。<ruby>駅<rt>えき</rt></ruby>の<ruby>西口<rt>にしぐち</rt></ruby>から<ruby>出<rt>で</rt></ruby>て、<ruby>商店街<rt>しょうてんがい</rt></ruby>を<ruby>通<rt>とお</rt></ruby>るルートを<ruby>選<rt>えら</rt></ruby>びました。",
                romaji: "Hai. Eki no nishiguchi kara dete, shōtengai o tōru rūto o erabimashita."
            },
            {
                label: "話者A",
                key: "friend",
                name: "友人",
                line: "そのルートならわかりやすいです。途中で大きな薬局が見えるはずです。",
                target: "そのるーとならわかりやすいです とちゅうでおおきなやっきょくがみえるはずです",
                ruby: "そのルートならわかりやすいです。<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>大<rt>おお</rt></ruby>きな<ruby>薬局<rt>やっきょく</rt></ruby>が<ruby>見<rt>み</rt></ruby>えるはずです。",
                romaji: "Sono rūto nara wakariyasui desu. Tochū de ōkina yakkyoku ga mieru hazu desu."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "薬局を過ぎたら、右に曲がればいいのですね。",
                target: "やっきょくをすぎたら みぎにまがればいいのですね",
                ruby: "<ruby>薬局<rt>やっきょく</rt></ruby>を<ruby>過<rt>す</rt></ruby>ぎたら、<ruby>右<rt>みぎ</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がればいいのですね。",
                romaji: "Yakkyoku o sugitara, migi ni magareba ii no desu ne."
            },
            {
                label: "話者A",
                key: "friend",
                name: "友人",
                line: "はい。もし迷ったら、近くの建物の名前を教えてください。",
                target: "はい もしまよったら ちかくのたてもののなまえをおしえてください",
                ruby: "はい。もし<ruby>迷<rt>まよ</rt></ruby>ったら、<ruby>近<rt>ちか</rt></ruby>くの<ruby>建物<rt>たてもの</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Hai. Moshi mayottara, chikaku no tatemono no namae o oshiete kudasai."
            }
        ],
        {
            ja: [
                "利用者：もしもし。今、駅に着きました。これから会場まで自分で向かいます。",
                "友人：わかりました。地図アプリで場所は確認できていますか。",
                "利用者：はい。駅の西口から出て、商店街を通るルートを選びました。",
                "友人：そのルートならわかりやすいです。途中で大きな薬局が見えるはずです。",
                "利用者：薬局を過ぎたら、右に曲がればいいのですね。",
                "友人：はい。もし迷ったら、近くの建物の名前を教えてください。"
            ],
            en: [
                "Traveler: Hello. I have just arrived at the station. I will head to the venue by myself from here.",
                "Friend: Okay. Have you checked the location on the map app?",
                "Traveler: Yes. I chose the route that goes out the west exit of the station and passes through the shopping street.",
                "Friend: That route is easy to understand. You should see a large pharmacy on the way.",
                "Traveler: After I pass the pharmacy, I should turn right, correct?",
                "Friend: Yes. If you get lost, please tell me the name of a nearby building."
            ],
            "zh-CN": [
                "乘客：喂。我现在到车站了。接下来我自己去会场。",
                "朋友：好的。你用地图应用确认好地点了吗？",
                "乘客：是的。我选择了从车站西口出去，经过商店街的路线。",
                "朋友：那个路线比较容易懂。途中应该会看到一家大药局。",
                "乘客：过了药局之后右转就可以，对吧？",
                "朋友：是的。如果迷路了，请告诉我附近建筑物的名字。"
            ],
            "zh-TW": [
                "乘客：喂。我現在到車站了。接下來我自己去會場。",
                "朋友：好的。你用地圖App確認好地點了嗎？",
                "乘客：是的。我選擇了從車站西口出去，經過商店街的路線。",
                "朋友：那個路線比較容易懂。途中應該會看到一家大藥局。",
                "乘客：過了藥局之後右轉就可以，對吧？",
                "朋友：是的。如果迷路了，請告訴我附近建築物的名字。"
            ],
            ko: [
                "이용자: 여보세요. 지금 역에 도착했습니다. 이제 회장까지 혼자 가겠습니다.",
                "친구: 알겠습니다. 지도 앱으로 장소는 확인하고 있나요?",
                "이용자: 네. 역 서쪽 출구로 나가서 상점가를 지나는 경로를 선택했습니다.",
                "친구: 그 경로라면 알기 쉽습니다. 중간에 큰 약국이 보일 것입니다.",
                "이용자: 약국을 지나면 오른쪽으로 돌면 되는 거지요?",
                "친구: 네. 만약 길을 잃으면 근처 건물 이름을 알려 주세요."
            ],
            vi: [
                "Người đi đường: Alo. Bây giờ tôi đã đến ga. Từ đây tôi sẽ tự đi đến địa điểm.",
                "Bạn: Được rồi. Bạn đã kiểm tra địa điểm bằng ứng dụng bản đồ chưa?",
                "Người đi đường: Vâng. Tôi đã chọn tuyến đi ra cửa tây của ga và đi qua phố mua sắm.",
                "Bạn: Tuyến đó dễ hiểu. Trên đường bạn sẽ thấy một hiệu thuốc lớn.",
                "Người đi đường: Sau khi đi qua hiệu thuốc, tôi rẽ phải là được đúng không?",
                "Bạn: Đúng. Nếu bạn bị lạc, hãy cho tôi biết tên tòa nhà gần đó."
            ]
        }
    ),

    makeB2GoToDestinationDialogue(
        "b2_destination_008",
        "目的地に着いたあと場所を確認する",
        [
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "すみません。ここは国際交流センターで合っていますか。",
                target: "すみません ここはこくさいこうりゅうせんたーであっていますか",
                ruby: "すみません。ここは<ruby>国際交流<rt>こくさいこうりゅう</rt></ruby>センターで<ruby>合<rt>あ</rt></ruby>っていますか。",
                romaji: "Sumimasen. Koko wa kokusai kōryū sentā de atte imasu ka."
            },
            {
                label: "話者A",
                key: "passerby",
                name: "通行人",
                line: "はい、合っています。受付は二階にあります。",
                target: "はい あっています うけつけはにかいにあります",
                ruby: "はい、<ruby>合<rt>あ</rt></ruby>っています。<ruby>受付<rt>うけつけ</rt></ruby>は<ruby>二階<rt>にかい</rt></ruby>にあります。",
                romaji: "Hai, atte imasu. Uketsuke wa nikai ni arimasu."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "ありがとうございます。イベント会場も二階でしょうか。",
                target: "ありがとうございます いべんとかいじょうもにかいでしょうか",
                ruby: "ありがとうございます。イベント<ruby>会場<rt>かいじょう</rt></ruby>も<ruby>二階<rt>にかい</rt></ruby>でしょうか。",
                romaji: "Arigatō gozaimasu. Ibento kaijō mo nikai deshō ka."
            },
            {
                label: "話者A",
                key: "passerby",
                name: "通行人",
                line: "会場は三階ですが、まず二階の受付で名前を伝える必要があります。",
                target: "かいじょうはさんかいですが まずにかいのうけつけでなまえをつたえるひつようがあります",
                ruby: "<ruby>会場<rt>かいじょう</rt></ruby>は<ruby>三階<rt>さんかい</rt></ruby>ですが、まず<ruby>二階<rt>にかい</rt></ruby>の<ruby>受付<rt>うけつけ</rt></ruby>で<ruby>名前<rt>なまえ</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>える<ruby>必要<rt>ひつよう</rt></ruby>があります。",
                romaji: "Kaijō wa sankai desu ga, mazu nikai no uketsuke de namae o tsutaeru hitsuyō ga arimasu."
            },
            {
                label: "話者B",
                key: "traveler",
                name: "利用者",
                line: "わかりました。エレベーターはこの奥にありますか。",
                target: "わかりました えれべーたーはこのおくにありますか",
                ruby: "わかりました。エレベーターはこの<ruby>奥<rt>おく</rt></ruby>にありますか。",
                romaji: "Wakarimashita. Erebētā wa kono oku ni arimasu ka."
            },
            {
                label: "話者A",
                key: "passerby",
                name: "通行人",
                line: "はい。まっすぐ進むと右側にあります。案内板も出ています。",
                target: "はい まっすぐすすむとみぎがわにあります あんないばんもでています",
                ruby: "はい。まっすぐ<ruby>進<rt>すす</rt></ruby>むと<ruby>右側<rt>みぎがわ</rt></ruby>にあります。<ruby>案内板<rt>あんないばん</rt></ruby>も<ruby>出<rt>で</rt></ruby>ています。",
                romaji: "Hai. Massugu susumu to migigawa ni arimasu. Annaiban mo dete imasu."
            }
        ],
        {
            ja: [
                "利用者：すみません。ここは国際交流センターで合っていますか。",
                "通行人：はい、合っています。受付は二階にあります。",
                "利用者：ありがとうございます。イベント会場も二階でしょうか。",
                "通行人：会場は三階ですが、まず二階の受付で名前を伝える必要があります。",
                "利用者：わかりました。エレベーターはこの奥にありますか。",
                "通行人：はい。まっすぐ進むと右側にあります。案内板も出ています。"
            ],
            en: [
                "Traveler: Excuse me. Is this the International Exchange Center?",
                "Passerby: Yes, that is correct. The reception desk is on the second floor.",
                "Traveler: Thank you. Is the event venue also on the second floor?",
                "Passerby: The venue is on the third floor, but first you need to give your name at the reception desk on the second floor.",
                "Traveler: Understood. Is the elevator further inside here?",
                "Passerby: Yes. If you go straight, it is on the right. There is also a sign."
            ],
            "zh-CN": [
                "乘客：不好意思。这里是国际交流中心，对吗？",
                "路人：是的，没错。接待处在二楼。",
                "乘客：谢谢。活动会场也在二楼吗？",
                "路人：会场在三楼，但首先需要在二楼接待处报上姓名。",
                "乘客：明白了。电梯在里面吗？",
                "路人：是的。直走的话在右边。也有指示牌。"
            ],
            "zh-TW": [
                "乘客：不好意思。這裡是國際交流中心，對嗎？",
                "路人：是的，沒錯。接待處在二樓。",
                "乘客：謝謝。活動會場也在二樓嗎？",
                "路人：會場在三樓，但首先需要在二樓接待處報上姓名。",
                "乘客：明白了。電梯在裡面嗎？",
                "路人：是的。直走的話在右邊。也有指示牌。"
            ],
            ko: [
                "이용자: 죄송합니다. 여기가 국제교류센터가 맞나요?",
                "지나가는 사람: 네, 맞습니다. 접수는 2층에 있습니다.",
                "이용자: 감사합니다. 이벤트 회장도 2층인가요?",
                "지나가는 사람: 회장은 3층이지만 먼저 2층 접수에서 이름을 말해야 합니다.",
                "이용자: 알겠습니다. 엘리베이터는 이 안쪽에 있나요?",
                "지나가는 사람: 네. 곧장 가면 오른쪽에 있습니다. 안내판도 나와 있습니다."
            ],
            vi: [
                "Người đi đường: Xin lỗi. Đây có đúng là Trung tâm Giao lưu Quốc tế không?",
                "Người qua đường: Vâng, đúng rồi. Quầy tiếp tân ở tầng 2.",
                "Người đi đường: Cảm ơn. Địa điểm sự kiện cũng ở tầng 2 phải không?",
                "Người qua đường: Hội trường ở tầng 3, nhưng trước tiên bạn cần báo tên ở quầy tiếp tân tầng 2.",
                "Người đi đường: Tôi hiểu rồi. Thang máy ở phía trong này phải không?",
                "Người qua đường: Vâng. Đi thẳng thì nó ở bên phải. Cũng có bảng hướng dẫn."
            ]
        }
    )

];