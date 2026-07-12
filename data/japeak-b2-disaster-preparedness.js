// =====================================================
// Japeak B2 Level
// Scene: 防災について考えよう
// File: data/japeak-b2-disaster-preparedness.js
// Category Key: b2_disaster_preparedness
// =====================================================

const b2DisasterPreparednessLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB2DisasterPreparednessTranslations(translations) {
    const completed = {};
    b2DisasterPreparednessLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const b2DisasterPreparednessContext = {
    ja: "地震、台風、大雨などの災害に備えて、家庭での準備、避難場所、非常用品、家族との連絡方法、外国人への情報提供、地域の防災訓練、災害後の助け合いについて考え、自分の意見を伝える日本語を練習します。",
    en: "Practice Japanese for discussing disaster preparedness, including earthquakes, typhoons, heavy rain, preparations at home, evacuation sites, emergency supplies, family communication, information for foreign residents, community drills, and mutual support after a disaster.",
    "zh-CN": "练习用日语讨论地震、台风、大雨等灾害的防灾准备，包括家庭准备、避难场所、应急物资、与家人的联系方式、向外国居民提供信息、社区防灾训练以及灾后的互助。",
    "zh-TW": "練習用日語討論地震、颱風、大雨等災害的防災準備，包括家庭準備、避難場所、緊急物資、與家人的聯絡方式、向外國居民提供資訊、社區防災訓練以及災後互助。",
    ko: "지진, 태풍, 폭우 등의 재해에 대비하여 가정 준비, 대피 장소, 비상용품, 가족 연락 방법, 외국인 주민을 위한 정보, 지역 방재 훈련, 재해 후 상호 지원에 대해 생각하고 의견을 말하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật để thảo luận về phòng chống thiên tai như động đất, bão, mưa lớn, chuẩn bị tại nhà, nơi sơ tán, đồ dùng khẩn cấp, liên lạc với gia đình, thông tin cho người nước ngoài, diễn tập phòng chống thiên tai và hỗ trợ lẫn nhau sau thảm họa.",
    tl: "Practice Japanese for discussing disaster preparedness, including earthquakes, typhoons, heavy rain, home preparations, evacuation sites, emergency supplies, family communication, information for foreign residents, community drills, and mutual support.",
    id: "Latihan bahasa Jepang untuk membahas kesiapsiagaan bencana seperti gempa bumi, topan, hujan lebat, persiapan di rumah, tempat evakuasi, perlengkapan darurat, komunikasi keluarga, informasi bagi warga asing, latihan bencana, dan saling membantu setelah bencana.",
    th: "ฝึกภาษาญี่ปุ่นเพื่อพูดคุยเกี่ยวกับการเตรียมพร้อมรับภัยพิบัติ เช่น แผ่นดินไหว พายุไต้ฝุ่น ฝนตกหนัก การเตรียมตัวที่บ้าน สถานที่อพยพ อุปกรณ์ฉุกเฉิน การติดต่อครอบครัว ข้อมูลสำหรับชาวต่างชาติ การฝึกซ้อมป้องกันภัย และการช่วยเหลือกันหลังภัยพิบัติ",
    my: "ငလျင်၊ မုန်တိုင်း၊ မိုးသည်းထန်ခြင်း စသည့် ဘေးအန္တရာယ်များအတွက် အိမ်တွင်းပြင်ဆင်မှု၊ ရှောင်တိမ်းရာနေရာ၊ အရေးပေါ်ပစ္စည်းများ၊ မိသားစုဆက်သွယ်ရေး၊ နိုင်ငံခြားသားများအတွက် သတင်းအချက်အလက်၊ ရပ်ရွာလေ့ကျင့်မှုနှင့် ဘေးအန္တရာယ်ပြီးနောက် အပြန်အလှန်ကူညီမှုတို့အကြောင်း ဂျပန်စကားဖြင့် လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ពិភាក្សាអំពីការត្រៀមខ្លួនចំពោះគ្រោះមហន្តរាយ ដូចជា រញ្ជួយដី ព្យុះ និងភ្លៀងខ្លាំង រួមទាំងការត្រៀមនៅផ្ទះ កន្លែងជម្លៀស សម្ភារៈបន្ទាន់ ការទាក់ទងគ្រួសារ ព័ត៌មានសម្រាប់ជនបរទេស ការហ្វឹកហាត់ការពារគ្រោះមហន្តរាយ និងការជួយគ្នាបន្ទាប់ពីគ្រោះមហន្តរាយ។",
    ne: "भूकम्प, आँधी, भारी वर्षा जस्ता विपद्का लागि घरको तयारी, सुरक्षित स्थान, आपतकालीन सामान, परिवारसँग सम्पर्क, विदेशी बासिन्दाका लागि सूचना, सामुदायिक अभ्यास र विपद्पछि पारस्परिक सहयोगबारे जापानीमा छलफल गर्ने अभ्यास।",
    mn: "Газар хөдлөлт, хар салхи, хүчтэй бороо зэрэг гамшигт бэлтгэх, гэрийн бэлтгэл, нүүлгэн шилжүүлэх газар, яаралтай хэрэгсэл, гэр бүлийн холбоо, гадаад оршин суугчдад мэдээлэл өгөх, орон нутгийн сургалт, гамшгийн дараах харилцан туслалцааны талаар япон хэлээр ярилцах дадлага.",
    si: "භූමිකම්පා, සුළි කුණාටු, අධික වැසි වැනි ආපදා සඳහා නිවසේ සූදානම, ඉවත් වීමේ ස්ථාන, හදිසි භාණ්ඩ, පවුල් සම්බන්ධතා, විදේශිකයින්ට තොරතුරු, ප්‍රජා පුහුණුව සහ ආපදා පසු සහයෝගය ගැන ජපන් භාෂාවෙන් සාකච්ඡා කිරීමේ පුහුණුව.",
    bn: "ভূমিকম্প, টাইফুন, ভারী বৃষ্টি ইত্যাদি দুর্যোগের জন্য ঘরের প্রস্তুতি, আশ্রয়স্থল, জরুরি সামগ্রী, পরিবারের সঙ্গে যোগাযোগ, বিদেশি বাসিন্দাদের তথ্য, কমিউনিটি মহড়া এবং দুর্যোগের পর পারস্পরিক সহায়তা নিয়ে জাপানিতে আলোচনা করার অনুশীলন।",
    pt: "Prática de japonês para discutir preparação para desastres, incluindo terremotos, tufões, chuvas fortes, preparação em casa, locais de evacuação, suprimentos de emergência, comunicação familiar, informações para residentes estrangeiros, simulados comunitários e ajuda mútua.",
    es: "Práctica de japonés para hablar sobre la preparación ante desastres, incluidos terremotos, tifones, lluvias intensas, preparación en casa, lugares de evacuación, suministros de emergencia, comunicación familiar, información para residentes extranjeros, simulacros comunitarios y ayuda mutua.",
    fr: "Entraînement en japonais pour discuter de la préparation aux catastrophes, notamment les séismes, typhons, fortes pluies, préparatifs à domicile, lieux d’évacuation, fournitures d’urgence, communication familiale, informations pour les résidents étrangers, exercices communautaires et entraide.",
    ru: "Практика японского языка для обсуждения подготовки к стихийным бедствиям, включая землетрясения, тайфуны, сильные дожди, подготовку дома, места эвакуации, аварийные запасы, связь с семьёй, информацию для иностранных жителей, учения и взаимопомощь.",
    uk: "Практика японської мови для обговорення підготовки до стихійних лих, включаючи землетруси, тайфуни, сильні дощі, підготовку вдома, місця евакуації, аварійні запаси, зв’язок із родиною, інформацію для іноземних мешканців, навчання та взаємодопомогу."
};

const b2DisasterPreparednessSpeakerNames = {
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
    cityStaff: {
        ja: "市職員",
        en: "City Official",
        "zh-CN": "市政府工作人员",
        "zh-TW": "市政府工作人員",
        ko: "시청 직원",
        vi: "Nhân viên thành phố",
        tl: "City official",
        id: "Petugas kota",
        th: "เจ้าหน้าที่เมือง",
        my: "မြို့ဝန်ထမ်း",
        km: "មន្ត្រីក្រុង",
        ne: "नगर कर्मचारी",
        mn: "Хотын ажилтан",
        si: "නගර නිලධාරියා",
        bn: "সিটি কর্মকর্তা",
        pt: "Funcionário municipal",
        es: "Funcionario municipal",
        fr: "Agent municipal",
        ru: "Сотрудник муниципалитета",
        uk: "Міський працівник"
    },
    neighbor: {
        ja: "近所の人",
        en: "Neighbor",
        "zh-CN": "邻居",
        "zh-TW": "鄰居",
        ko: "이웃",
        vi: "Hàng xóm",
        tl: "Neighbor",
        id: "Tetangga",
        th: "เพื่อนบ้าน",
        my: "အိမ်နီးချင်း",
        km: "អ្នកជិតខាង",
        ne: "छिमेकी",
        mn: "Хөрш",
        si: "අසල්වැසියා",
        bn: "প্রতিবেশী",
        pt: "Vizinho",
        es: "Vecino",
        fr: "Voisin",
        ru: "Сосед",
        uk: "Сусід"
    },
    volunteer: {
        ja: "ボランティア",
        en: "Volunteer",
        "zh-CN": "志愿者",
        "zh-TW": "志工",
        ko: "자원봉사자",
        vi: "Tình nguyện viên",
        tl: "Volunteer",
        id: "Relawan",
        th: "อาสาสมัคร",
        my: "စေတနာ့ဝန်ထမ်း",
        km: "អ្នកស្ម័គ្រចិត្ត",
        ne: "स्वयंसेवक",
        mn: "Сайн дурын ажилтан",
        si: "ස්වේච්ඡා සේවකයා",
        bn: "স্বেচ্ছাসেবক",
        pt: "Voluntário",
        es: "Voluntario",
        fr: "Bénévole",
        ru: "Волонтёр",
        uk: "Волонтер"
    },
    family: {
        ja: "家族",
        en: "Family Member",
        "zh-CN": "家人",
        "zh-TW": "家人",
        ko: "가족",
        vi: "Người nhà",
        tl: "Family member",
        id: "Anggota keluarga",
        th: "สมาชิกครอบครัว",
        my: "မိသားစုဝင်",
        km: "សមាជិកគ្រួសារ",
        ne: "परिवार सदस्य",
        mn: "Гэр бүлийн гишүүн",
        si: "පවුලේ සාමාජිකයා",
        bn: "পরিবারের সদস্য",
        pt: "Familiar",
        es: "Familiar",
        fr: "Membre de la famille",
        ru: "Член семьи",
        uk: "Член родини"
    }
};

function makeB2DisasterPreparednessDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeB2DisasterPreparednessTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b2_disaster_preparedness",
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
            speakerNames: b2DisasterPreparednessSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: b2DisasterPreparednessContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB2DisasterPreparednessData = [

    makeB2DisasterPreparednessDialogue(
        "b2_disaster_001",
        "地震に備えて家の中を見直す",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "最近、地震に備えて家の中を見直した方がいいと思うようになりました。",
                target: "さいきん じしんにそなえていえのなかをみなおしたほうがいいとおもうようになりました",
                ruby: "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>地震<rt>じしん</rt></ruby>に<ruby>備<rt>そな</rt></ruby>えて<ruby>家<rt>いえ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を<ruby>見直<rt>みなお</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいいと<ruby>思<rt>おも</rt></ruby>うようになりました。",
                romaji: "Saikin, jishin ni sonaete ie no naka o minaoshita hō ga ii to omou yō ni narimashita."
            },
            {
                label: "話者A",
                key: "neighbor",
                name: "近所の人",
                line: "私もそう思います。特に大きな家具が倒れないようにすることが大切ですね。",
                target: "わたしもそうおもいます とくにおおきなかぐがたおれないようにすることがたいせつですね",
                ruby: "<ruby>私<rt>わたし</rt></ruby>もそう<ruby>思<rt>おも</rt></ruby>います。<ruby>特<rt>とく</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>家具<rt>かぐ</rt></ruby>が<ruby>倒<rt>たお</rt></ruby>れないようにすることが<ruby>大切<rt>たいせつ</rt></ruby>ですね。",
                romaji: "Watashi mo sō omoimasu. Toku ni ōkina kagu ga taorenai yō ni suru koto ga taisetsu desu ne."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "本棚は固定しましたが、食器棚についてはまだ何もしていません。",
                target: "ほんだなはこていしましたが しょっきだなについてはまだなにもしていません",
                ruby: "<ruby>本棚<rt>ほんだな</rt></ruby>は<ruby>固定<rt>こてい</rt></ruby>しましたが、<ruby>食器棚<rt>しょっきだな</rt></ruby>についてはまだ<ruby>何<rt>なに</rt></ruby>もしていません。",
                romaji: "Hondana wa kotei shimashita ga, shokkidana ni tsuite wa mada nani mo shite imasen."
            },
            {
                label: "話者A",
                key: "neighbor",
                name: "近所の人",
                line: "扉が急に開かないように、専用の器具をつけておく方法もありますよ。",
                target: "とびらがきゅうにひらかないように せんようのきぐをつけておくほうほうもありますよ",
                ruby: "<ruby>扉<rt>とびら</rt></ruby>が<ruby>急<rt>きゅう</rt></ruby>に<ruby>開<rt>ひら</rt></ruby>かないように、<ruby>専用<rt>せんよう</rt></ruby>の<ruby>器具<rt>きぐ</rt></ruby>をつけておく<ruby>方法<rt>ほうほう</rt></ruby>もありますよ。",
                romaji: "Tobira ga kyū ni hirakanai yō ni, sen'yō no kigu o tsukete oku hōhō mo arimasu yo."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "なるほど。避難することだけでなく、まず家の中でけがをしない対策も必要ですね。",
                target: "なるほど ひなんすることだけでなく まずいえのなかでけがをしないたいさくもひつようですね",
                ruby: "なるほど。<ruby>避難<rt>ひなん</rt></ruby>することだけでなく、まず<ruby>家<rt>いえ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>でけがをしない<ruby>対策<rt>たいさく</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>ですね。",
                romaji: "Naruhodo. Hinan suru koto dake de naku, mazu ie no naka de kega o shinai taisaku mo hitsuyō desu ne."
            },
            {
                label: "話者A",
                key: "neighbor",
                name: "近所の人",
                line: "そうですね。災害が起きてからでは遅いので、できることから準備しておくのが大切です。",
                target: "そうですね さいがいがおきてからではおそいので できることからじゅんびしておくのがたいせつです",
                ruby: "そうですね。<ruby>災害<rt>さいがい</rt></ruby>が<ruby>起<rt>お</rt></ruby>きてからでは<ruby>遅<rt>おそ</rt></ruby>いので、できることから<ruby>準備<rt>じゅんび</rt></ruby>しておくのが<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Sō desu ne. Saigai ga okite kara de wa osoi node, dekiru koto kara junbi shite oku no ga taisetsu desu."
            }
        ],
        {
            ja: [
                "住民：最近、地震に備えて家の中を見直した方がいいと思うようになりました。",
                "近所の人：私もそう思います。特に大きな家具が倒れないようにすることが大切ですね。",
                "住民：本棚は固定しましたが、食器棚についてはまだ何もしていません。",
                "近所の人：扉が急に開かないように、専用の器具をつけておく方法もありますよ。",
                "住民：なるほど。避難することだけでなく、まず家の中でけがをしない対策も必要ですね。",
                "近所の人：そうですね。災害が起きてからでは遅いので、できることから準備しておくのが大切です。"
            ],
            en: [
                "Resident: Recently, I have started thinking that I should review the safety of my home in preparation for earthquakes.",
                "Neighbor: I agree. It is especially important to prevent large furniture from falling over.",
                "Resident: I secured my bookshelf, but I have not done anything about the cupboard yet.",
                "Neighbor: One option is to attach special devices so that the doors do not suddenly open.",
                "Resident: I see. Besides evacuating, we also need measures to avoid getting injured inside our homes.",
                "Neighbor: Exactly. It is too late after a disaster happens, so it is important to prepare little by little in advance."
            ],
            "zh-CN": [
                "居民：最近，我开始觉得为了防备地震，应该重新检查一下家里的安全。",
                "邻居：我也这样认为。特别是防止大型家具倒下来非常重要。",
                "居民：书架已经固定了，不过餐具柜还没有采取任何措施。",
                "邻居：也可以安装专用装置，防止柜门突然打开。",
                "居民：原来如此。不仅要考虑避难，首先还需要防止在家中受伤。",
                "邻居：是的。灾害发生以后再准备就太迟了，所以应该从能做的事情开始提前准备。"
            ],
            "zh-TW": [
                "居民：最近，我開始覺得為了防備地震，應該重新檢查一下家裡的安全。",
                "鄰居：我也這樣認為。特別是防止大型家具倒下來非常重要。",
                "居民：書架已經固定了，不過餐具櫃還沒有採取任何措施。",
                "鄰居：也可以安裝專用裝置，防止櫃門突然打開。",
                "居民：原來如此。不僅要考慮避難，首先還需要防止在家中受傷。",
                "鄰居：是的。災害發生以後再準備就太遲了，所以應該從能做的事情開始提前準備。"
            ],
            ko: [
                "주민: 최근 지진에 대비해서 집 안을 다시 점검해야겠다고 생각하게 되었습니다.",
                "이웃: 저도 그렇게 생각합니다. 특히 큰 가구가 넘어지지 않도록 하는 것이 중요합니다.",
                "주민: 책장은 고정했지만 찬장에 대해서는 아직 아무것도 하지 않았습니다.",
                "이웃: 문이 갑자기 열리지 않도록 전용 장치를 설치해 두는 방법도 있습니다.",
                "주민: 그렇군요. 대피하는 것뿐 아니라 우선 집 안에서 다치지 않도록 대책을 마련하는 것도 필요하네요.",
                "이웃: 그렇습니다. 재해가 발생한 뒤에는 늦으니 할 수 있는 것부터 준비하는 것이 중요합니다."
            ],
            vi: [
                "Cư dân: Gần đây tôi bắt đầu nghĩ rằng nên kiểm tra lại trong nhà để chuẩn bị cho động đất.",
                "Hàng xóm: Tôi cũng nghĩ vậy. Đặc biệt, điều quan trọng là ngăn đồ nội thất lớn bị đổ.",
                "Cư dân: Tôi đã cố định giá sách, nhưng vẫn chưa làm gì với tủ đựng bát đĩa.",
                "Hàng xóm: Cũng có thể gắn thiết bị chuyên dụng để cửa tủ không bất ngờ bật mở.",
                "Cư dân: Ra vậy. Không chỉ sơ tán, chúng ta còn cần biện pháp để trước hết không bị thương trong nhà.",
                "Hàng xóm: Đúng vậy. Sau khi thiên tai xảy ra thì đã quá muộn, nên điều quan trọng là chuẩn bị trước từ những việc có thể làm."
            ]
        }
    ),

    makeB2DisasterPreparednessDialogue(
        "b2_disaster_002",
        "避難場所と避難経路を確認する",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "避難場所の名前は知っていますが、実際に歩いて行ったことはありません。",
                target: "ひなんばしょのなまえはしっていますが じっさいにあるいていったことはありません",
                ruby: "<ruby>避難場所<rt>ひなんばしょ</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>は<ruby>知<rt>し</rt></ruby>っていますが、<ruby>実際<rt>じっさい</rt></ruby>に<ruby>歩<rt>ある</rt></ruby>いて<ruby>行<rt>い</rt></ruby>ったことはありません。",
                romaji: "Hinan basho no namae wa shitte imasu ga, jissai ni aruite itta koto wa arimasen."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "それなら、一度自宅から避難場所まで歩いて確認することをおすすめします。",
                target: "それなら いちどじたくからひなんばしょまであるいてかくにんすることをおすすめします",
                ruby: "それなら、<ruby>一度<rt>いちど</rt></ruby><ruby>自宅<rt>じたく</rt></ruby>から<ruby>避難場所<rt>ひなんばしょ</rt></ruby>まで<ruby>歩<rt>ある</rt></ruby>いて<ruby>確認<rt>かくにん</rt></ruby>することをおすすめします。",
                romaji: "Sore nara, ichido jitaku kara hinan basho made aruite kakunin suru koto o osusume shimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "地図では近く見えますが、夜や大雨のときは同じ道を使えない可能性もありますね。",
                target: "ちずではちかくみえますが よるやおおあめのときはおなじみちをつかえないかのうせいもありますね",
                ruby: "<ruby>地図<rt>ちず</rt></ruby>では<ruby>近<rt>ちか</rt></ruby>く<ruby>見<rt>み</rt></ruby>えますが、<ruby>夜<rt>よる</rt></ruby>や<ruby>大雨<rt>おおあめ</rt></ruby>のときは<ruby>同<rt>おな</rt></ruby>じ<ruby>道<rt>みち</rt></ruby>を<ruby>使<rt>つか</rt></ruby>えない<ruby>可能性<rt>かのうせい</rt></ruby>もありますね。",
                romaji: "Chizu de wa chikaku miemasu ga, yoru ya ōame no toki wa onaji michi o tsukaenai kanōsei mo arimasu ne."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "その通りです。一つの経路だけでなく、別の行き方も考えておくと安心です。",
                target: "そのとおりです ひとつのけいろだけでなく べつのいきかたもかんがえておくとあんしんです",
                ruby: "その<ruby>通<rt>とお</rt></ruby>りです。<ruby>一<rt>ひと</rt></ruby>つの<ruby>経路<rt>けいろ</rt></ruby>だけでなく、<ruby>別<rt>べつ</rt></ruby>の<ruby>行<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby>も<ruby>考<rt>かんが</rt></ruby>えておくと<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Sono tōri desu. Hitotsu no keiro dake de naku, betsu no ikikata mo kangaete oku to anshin desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "家族と一緒に歩いて、危険な場所がないか確認してみます。",
                target: "かぞくといっしょにあるいて きけんなばしょがないかかくにんしてみます",
                ruby: "<ruby>家族<rt>かぞく</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>歩<rt>ある</rt></ruby>いて、<ruby>危険<rt>きけん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>がないか<ruby>確認<rt>かくにん</rt></ruby>してみます。",
                romaji: "Kazoku to issho ni aruite, kiken na basho ga nai ka kakunin shite mimasu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "それがいいですね。子どもや高齢者と一緒の場合は、移動にかかる時間も確認しておくと役立ちます。",
                target: "それがいいですね こどもやこうれいしゃといっしょのばあいは いどうにかかるじかんもかくにんしておくとやくだちます",
                ruby: "それがいいですね。<ruby>子<rt>こ</rt></ruby>どもや<ruby>高齢者<rt>こうれいしゃ</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>移動<rt>いどう</rt></ruby>にかかる<ruby>時間<rt>じかん</rt></ruby>も<ruby>確認<rt>かくにん</rt></ruby>しておくと<ruby>役立<rt>やくだ</rt></ruby>ちます。",
                romaji: "Sore ga ii desu ne. Kodomo ya kōreisha to issho no baai wa, idō ni kakaru jikan mo kakunin shite oku to yakudachimasu."
            }
        ],
        {
            ja: [
                "住民：避難場所の名前は知っていますが、実際に歩いて行ったことはありません。",
                "市職員：それなら、一度自宅から避難場所まで歩いて確認することをおすすめします。",
                "住民：地図では近く見えますが、夜や大雨のときは同じ道を使えない可能性もありますね。",
                "市職員：その通りです。一つの経路だけでなく、別の行き方も考えておくと安心です。",
                "住民：家族と一緒に歩いて、危険な場所がないか確認してみます。",
                "市職員：それがいいですね。子どもや高齢者と一緒の場合は、移動にかかる時間も確認しておくと役立ちます。"
            ],
            en: [
                "Resident: I know the name of the evacuation site, but I have never actually walked there.",
                "City Official: In that case, I recommend walking there once from your home to check the route.",
                "Resident: It looks close on the map, but at night or during heavy rain, the same road may not be usable.",
                "City Official: Exactly. It is reassuring to consider an alternative route as well as the main one.",
                "Resident: I will walk there with my family and check whether there are any dangerous places.",
                "City Official: That is a good idea. If you are with children or elderly people, it is also useful to check how long the trip takes."
            ],
            "zh-CN": [
                "居民：我知道避难场所的名字，但从来没有实际走过去。",
                "市政府工作人员：那样的话，建议您从家里实际走一次到避难场所确认路线。",
                "居民：地图上看起来很近，不过晚上或下大雨时，可能不能走同一条路。",
                "市政府工作人员：正是如此。除了主要路线，提前考虑另一条路线会更安心。",
                "居民：我会和家人一起走一次，确认是否有危险的地方。",
                "市政府工作人员：这样很好。如果和孩子或老年人一起，还应该确认移动所需的时间。"
            ],
            "zh-TW": [
                "居民：我知道避難場所的名字，但從來沒有實際走過去。",
                "市政府工作人員：那樣的話，建議您從家裡實際走一次到避難場所確認路線。",
                "居民：地圖上看起來很近，不過晚上或下大雨時，可能不能走同一條路。",
                "市政府工作人員：正是如此。除了主要路線，提前考慮另一條路線會更安心。",
                "居民：我會和家人一起走一次，確認是否有危險的地方。",
                "市政府工作人員：這樣很好。如果和孩子或老年人一起，還應該確認移動所需的時間。"
            ],
            ko: [
                "주민: 대피 장소의 이름은 알고 있지만 실제로 걸어가 본 적은 없습니다.",
                "시청 직원: 그렇다면 한 번 집에서 대피 장소까지 걸어가며 확인하는 것을 권합니다.",
                "주민: 지도에서는 가까워 보이지만 밤이나 폭우 때는 같은 길을 사용할 수 없을 가능성도 있겠네요.",
                "시청 직원: 맞습니다. 하나의 경로뿐 아니라 다른 길도 생각해 두면 안심입니다.",
                "주민: 가족과 함께 걸어가면서 위험한 장소가 없는지 확인해 보겠습니다.",
                "시청 직원: 좋습니다. 아이나 고령자와 함께 갈 경우에는 이동에 걸리는 시간도 확인해 두면 도움이 됩니다."
            ],
            vi: [
                "Cư dân: Tôi biết tên nơi sơ tán nhưng chưa bao giờ thực sự đi bộ đến đó.",
                "Nhân viên thành phố: Vậy thì tôi khuyên bạn nên một lần đi bộ từ nhà đến nơi sơ tán để kiểm tra.",
                "Cư dân: Trên bản đồ có vẻ gần, nhưng vào ban đêm hoặc khi mưa lớn, có thể không dùng được cùng một con đường.",
                "Nhân viên thành phố: Đúng vậy. Không chỉ một tuyến, nếu nghĩ trước cả đường đi khác thì sẽ yên tâm hơn.",
                "Cư dân: Tôi sẽ đi bộ cùng gia đình và kiểm tra xem có nơi nào nguy hiểm không.",
                "Nhân viên thành phố: Như vậy rất tốt. Nếu đi cùng trẻ em hoặc người cao tuổi, kiểm tra cả thời gian di chuyển cũng sẽ hữu ích."
            ]
        }
    ),

    makeB2DisasterPreparednessDialogue(
        "b2_disaster_003",
        "非常用品の内容を見直す",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "非常用バッグを準備していますが、本当に必要な物がそろっているか自信がありません。",
                target: "ひじょうようばっぐをじゅんびしていますが ほんとうにひつようなものがそろっているかじしんがありません",
                ruby: "<ruby>非常用<rt>ひじょうよう</rt></ruby>バッグを<ruby>準備<rt>じゅんび</rt></ruby>していますが、<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>物<rt>もの</rt></ruby>がそろっているか<ruby>自信<rt>じしん</rt></ruby>がありません。",
                romaji: "Hijōyō baggu o junbi shite imasu ga, hontō ni hitsuyō na mono ga sorotte iru ka jishin ga arimasen."
            },
            {
                label: "話者A",
                key: "volunteer",
                name: "ボランティア",
                line: "家族の人数や年齢によって必要な物は違うので、全員が同じ内容でよいとは限りません。",
                target: "かぞくのにんずうやねんれいによってひつようなものはちがうので ぜんいんがおなじないようでよいとはかぎりません",
                ruby: "<ruby>家族<rt>かぞく</rt></ruby>の<ruby>人数<rt>にんずう</rt></ruby>や<ruby>年齢<rt>ねんれい</rt></ruby>によって<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>物<rt>もの</rt></ruby>は<ruby>違<rt>ちが</rt></ruby>うので、<ruby>全員<rt>ぜんいん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>内容<rt>ないよう</rt></ruby>でよいとは<ruby>限<rt>かぎ</rt></ruby>りません。",
                romaji: "Kazoku no ninzū ya nenrei ni yotte hitsuyō na mono wa chigau node, zen'in ga onaji naiyō de yoi to wa kagirimasen."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "うちには小学生の子どもと高齢の母がいるので、それぞれ必要な物を考える必要がありますね。",
                target: "うちにはしょうがくせいのこどもとこうれいのははがいるので それぞれひつようなものをかんがえるひつようがありますね",
                ruby: "うちには<ruby>小学生<rt>しょうがくせい</rt></ruby>の<ruby>子<rt>こ</rt></ruby>どもと<ruby>高齢<rt>こうれい</rt></ruby>の<ruby>母<rt>はは</rt></ruby>がいるので、それぞれ<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>物<rt>もの</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>える<ruby>必要<rt>ひつよう</rt></ruby>がありますね。",
                romaji: "Uchi ni wa shōgakusei no kodomo to kōrei no haha ga iru node, sorezore hitsuyō na mono o kangaeru hitsuyō ga arimasu ne."
            },
            {
                label: "話者A",
                key: "volunteer",
                name: "ボランティア",
                line: "そうですね。常用している薬や眼鏡の予備など、個人によって必要な物も忘れないでください。",
                target: "そうですね じょうようしているくすりやめがねのよびなど こじんによってひつようなものもわすれないでください",
                ruby: "そうですね。<ruby>常用<rt>じょうよう</rt></ruby>している<ruby>薬<rt>くすり</rt></ruby>や<ruby>眼鏡<rt>めがね</rt></ruby>の<ruby>予備<rt>よび</rt></ruby>など、<ruby>個人<rt>こじん</rt></ruby>によって<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>物<rt>もの</rt></ruby>も<ruby>忘<rt>わす</rt></ruby>れないでください。",
                romaji: "Sō desu ne. Jōyō shite iru kusuri ya megane no yobi nado, kojin ni yotte hitsuyō na mono mo wasurenaide kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "一度準備して終わりではなく、定期的に中身を確認した方がよさそうですね。",
                target: "いちどじゅんびしておわりではなく ていきてきになかみをかくにんしたほうがよさそうですね",
                ruby: "<ruby>一度<rt>いちど</rt></ruby><ruby>準備<rt>じゅんび</rt></ruby>して<ruby>終<rt>お</rt></ruby>わりではなく、<ruby>定期的<rt>ていきてき</rt></ruby>に<ruby>中身<rt>なかみ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がよさそうですね。",
                romaji: "Ichido junbi shite owari de wa naku, teikiteki ni nakami o kakunin shita hō ga yosasō desu ne."
            },
            {
                label: "話者A",
                key: "volunteer",
                name: "ボランティア",
                line: "はい。食品や電池には使用期限があるので、半年に一度など確認する日を決めておくと続けやすいです。",
                target: "はい しょくひんやでんちにはしようきげんがあるので はんとしにいちどなどかくにんするひをきめておくとつづけやすいです",
                ruby: "はい。<ruby>食品<rt>しょくひん</rt></ruby>や<ruby>電池<rt>でんち</rt></ruby>には<ruby>使用期限<rt>しようきげん</rt></ruby>があるので、<ruby>半年<rt>はんとし</rt></ruby>に<ruby>一度<rt>いちど</rt></ruby>など<ruby>確認<rt>かくにん</rt></ruby>する<ruby>日<rt>ひ</rt></ruby>を<ruby>決<rt>き</rt></ruby>めておくと<ruby>続<rt>つづ</rt></ruby>けやすいです。",
                romaji: "Hai. Shokuhin ya denchi ni wa shiyō kigen ga aru node, hantoshi ni ichido nado kakunin suru hi o kimete oku to tsuzukeyasui desu."
            }
        ],
        {
            ja: [
                "住民：非常用バッグを準備していますが、本当に必要な物がそろっているか自信がありません。",
                "ボランティア：家族の人数や年齢によって必要な物は違うので、全員が同じ内容でよいとは限りません。",
                "住民：うちには小学生の子どもと高齢の母がいるので、それぞれ必要な物を考える必要がありますね。",
                "ボランティア：そうですね。常用している薬や眼鏡の予備など、個人によって必要な物も忘れないでください。",
                "住民：一度準備して終わりではなく、定期的に中身を確認した方がよさそうですね。",
                "ボランティア：はい。食品や電池には使用期限があるので、半年に一度など確認する日を決めておくと続けやすいです。"
            ],
            en: [
                "Resident: I have prepared an emergency bag, but I am not confident that it contains everything we really need.",
                "Volunteer: Necessary items differ depending on family size and age, so the same contents are not necessarily suitable for everyone.",
                "Resident: We have an elementary school child and my elderly mother, so we need to consider what each person needs.",
                "Volunteer: Exactly. Do not forget personal items such as regular medicines or spare glasses.",
                "Resident: Rather than preparing it once and forgetting about it, we should check the contents regularly.",
                "Volunteer: Yes. Food and batteries have expiration dates, so choosing a regular day, such as once every six months, makes it easier to continue."
            ],
            "zh-CN": [
                "居民：我准备了应急包，但不确定是否真的备齐了需要的东西。",
                "志愿者：根据家庭人数和年龄，所需物品不同，所以并不是所有人准备相同内容就可以。",
                "居民：我家有小学生和年迈的母亲，所以需要分别考虑各自需要的东西。",
                "志愿者：是的。还不要忘记平时服用的药物、备用眼镜等个人所需物品。",
                "居民：看来不能准备一次就结束，而应该定期检查里面的东西。",
                "志愿者：是的。食品和电池有使用期限，所以规定半年一次之类的检查日期会比较容易坚持。"
            ],
            "zh-TW": [
                "居民：我準備了緊急包，但不確定是否真的備齊了需要的東西。",
                "志工：根據家庭人數和年齡，所需物品不同，所以並不是所有人準備相同內容就可以。",
                "居民：我家有小學生和年邁的母親，所以需要分別考慮各自需要的東西。",
                "志工：是的。還不要忘記平時服用的藥物、備用眼鏡等個人所需物品。",
                "居民：看來不能準備一次就結束，而應該定期檢查裡面的東西。",
                "志工：是的。食品和電池有使用期限，所以規定半年一次之類的檢查日期會比較容易堅持。"
            ],
            ko: [
                "주민: 비상용 가방을 준비했지만 정말 필요한 물건이 다 있는지 자신이 없습니다.",
                "자원봉사자: 가족 수와 나이에 따라 필요한 물건이 다르므로 모두 같은 내용이면 된다고 할 수는 없습니다.",
                "주민: 우리 집에는 초등학생 아이와 고령의 어머니가 있어서 각각 필요한 것을 생각해야겠네요.",
                "자원봉사자: 그렇습니다. 평소 복용하는 약이나 여분의 안경처럼 개인에게 필요한 물건도 잊지 마세요.",
                "주민: 한 번 준비하고 끝나는 것이 아니라 정기적으로 내용물을 확인하는 편이 좋겠네요.",
                "자원봉사자: 네. 식품이나 건전지에는 사용 기한이 있으므로 반년에 한 번처럼 확인하는 날을 정해 두면 계속하기 쉽습니다."
            ],
            vi: [
                "Cư dân: Tôi đã chuẩn bị túi khẩn cấp nhưng không chắc đã có đủ những thứ thật sự cần thiết.",
                "Tình nguyện viên: Những thứ cần thiết khác nhau tùy số người và độ tuổi trong gia đình, nên không phải ai cũng chuẩn bị giống nhau là được.",
                "Cư dân: Nhà tôi có một trẻ tiểu học và mẹ lớn tuổi, nên cần nghĩ đến đồ dùng riêng cho từng người.",
                "Tình nguyện viên: Đúng vậy. Đừng quên những đồ cá nhân như thuốc uống thường xuyên hay kính dự phòng.",
                "Cư dân: Có vẻ không nên chỉ chuẩn bị một lần rồi thôi mà cần kiểm tra định kỳ.",
                "Tình nguyện viên: Vâng. Thực phẩm và pin có hạn sử dụng, nên nếu đặt ngày kiểm tra chẳng hạn mỗi sáu tháng một lần thì sẽ dễ duy trì hơn."
            ]
        }
    ),

    makeB2DisasterPreparednessDialogue(
        "b2_disaster_004",
        "家族との連絡方法を決める",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "災害が起きたとき、家族全員が同じ場所にいるとは限りませんよね。",
                target: "さいがいがおきたとき かぞくぜんいんがおなじばしょにいるとはかぎりませんよね",
                ruby: "<ruby>災害<rt>さいがい</rt></ruby>が<ruby>起<rt>お</rt></ruby>きたとき、<ruby>家族全員<rt>かぞくぜんいん</rt></ruby>が<ruby>同<rt>おな</rt></ruby>じ<ruby>場所<rt>ばしょ</rt></ruby>にいるとは<ruby>限<rt>かぎ</rt></ruby>りませんよね。",
                romaji: "Saigai ga okita toki, kazoku zen'in ga onaji basho ni iru to wa kagirimasen yo ne."
            },
            {
                label: "話者A",
                key: "family",
                name: "家族",
                line: "そうですね。学校や職場にいる可能性もあるので、連絡方法を決めておく必要があります。",
                target: "そうですね がっこうやしょくばにいるかのうせいもあるので れんらくほうほうをきめておくひつようがあります",
                ruby: "そうですね。<ruby>学校<rt>がっこう</rt></ruby>や<ruby>職場<rt>しょくば</rt></ruby>にいる<ruby>可能性<rt>かのうせい</rt></ruby>もあるので、<ruby>連絡方法<rt>れんらくほうほう</rt></ruby>を<ruby>決<rt>き</rt></ruby>めておく<ruby>必要<rt>ひつよう</rt></ruby>があります。",
                romaji: "Sō desu ne. Gakkō ya shokuba ni iru kanōsei mo aru node, renraku hōhō o kimete oku hitsuyō ga arimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "電話がつながらない場合を考えると、一つの方法だけに頼るのは不安です。",
                target: "でんわがつながらないばあいをかんがえると ひとつのほうほうだけにたよるのはふあんです",
                ruby: "<ruby>電話<rt>でんわ</rt></ruby>がつながらない<ruby>場合<rt>ばあい</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えると、<ruby>一<rt>ひと</rt></ruby>つの<ruby>方法<rt>ほうほう</rt></ruby>だけに<ruby>頼<rt>たよ</rt></ruby>るのは<ruby>不安<rt>ふあん</rt></ruby>です。",
                romaji: "Denwa ga tsunagaranai baai o kangaeru to, hitotsu no hōhō dake ni tayoru no wa fuan desu."
            },
            {
                label: "話者A",
                key: "family",
                name: "家族",
                line: "では、メッセージだけでなく、集まる場所や連絡を待つ時間も決めておきましょう。",
                target: "では めっせーじだけでなく あつまるばしょやれんらくをまつじかんもきめておきましょう",
                ruby: "では、メッセージだけでなく、<ruby>集<rt>あつ</rt></ruby>まる<ruby>場所<rt>ばしょ</rt></ruby>や<ruby>連絡<rt>れんらく</rt></ruby>を<ruby>待<rt>ま</rt></ruby>つ<ruby>時間<rt>じかん</rt></ruby>も<ruby>決<rt>き</rt></ruby>めておきましょう。",
                romaji: "Dewa, messēji dake de naku, atsumaru basho ya renraku o matsu jikan mo kimete okimashō."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "それなら、お互いに連絡できなくても、次に何をするか判断しやすくなりますね。",
                target: "それなら おたがいにれんらくできなくても つぎになにをするかはんだんしやすくなりますね",
                ruby: "それなら、お<ruby>互<rt>たが</rt></ruby>いに<ruby>連絡<rt>れんらく</rt></ruby>できなくても、<ruby>次<rt>つぎ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をするか<ruby>判断<rt>はんだん</rt></ruby>しやすくなりますね。",
                romaji: "Sore nara, otagai ni renraku dekinakute mo, tsugi ni nani o suru ka handan shiyasuku narimasu ne."
            },
            {
                label: "話者A",
                key: "family",
                name: "家族",
                line: "はい。災害のときは予定通りにならないこともあるので、基本的なルールだけ共有しておくのがよいと思います。",
                target: "はい さいがいのときはよていどおりにならないこともあるので きほんてきなるーるだけきょうゆうしておくのがよいとおもいます",
                ruby: "はい。<ruby>災害<rt>さいがい</rt></ruby>のときは<ruby>予定通<rt>よていどお</rt></ruby>りにならないこともあるので、<ruby>基本的<rt>きほんてき</rt></ruby>なルールだけ<ruby>共有<rt>きょうゆう</rt></ruby>しておくのがよいと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Hai. Saigai no toki wa yotei dōri ni naranai koto mo aru node, kihonteki na rūru dake kyōyū shite oku no ga yoi to omoimasu."
            }
        ],
        {
            ja: [
                "住民：災害が起きたとき、家族全員が同じ場所にいるとは限りませんよね。",
                "家族：そうですね。学校や職場にいる可能性もあるので、連絡方法を決めておく必要があります。",
                "住民：電話がつながらない場合を考えると、一つの方法だけに頼るのは不安です。",
                "家族：では、メッセージだけでなく、集まる場所や連絡を待つ時間も決めておきましょう。",
                "住民：それなら、お互いに連絡できなくても、次に何をするか判断しやすくなりますね。",
                "家族：はい。災害のときは予定通りにならないこともあるので、基本的なルールだけ共有しておくのがよいと思います。"
            ],
            en: [
                "Resident: When a disaster happens, not every family member will necessarily be in the same place.",
                "Family Member: That is true. We may be at school or work, so we need to decide how to contact one another.",
                "Resident: Considering that phone calls may not connect, I feel uneasy relying on only one method.",
                "Family Member: Then let us decide not only how to send messages, but also where to meet and how long to wait for contact.",
                "Resident: That would make it easier to decide what to do next, even if we cannot contact each other.",
                "Family Member: Yes. Things may not go as planned during a disaster, so I think it is best to share some basic rules in advance."
            ],
            "zh-CN": [
                "居民：灾害发生时，并不是所有家人都会在同一个地方吧。",
                "家人：是的。可能有人在学校或工作场所，所以有必要提前决定联系方式。",
                "居民：考虑到电话可能打不通，只依赖一种方法让我觉得不安。",
                "家人：那么，除了信息联系，也决定集合地点以及等待联系的时间吧。",
                "居民：这样即使无法互相联系，也比较容易判断下一步该做什么。",
                "家人：是的。灾害时事情不一定按计划进行，所以我认为只要事先共享基本规则就很好。"
            ],
            "zh-TW": [
                "居民：災害發生時，並不是所有家人都會在同一個地方吧。",
                "家人：是的。可能有人在學校或工作場所，所以有必要提前決定聯絡方式。",
                "居民：考慮到電話可能打不通，只依賴一種方法讓我覺得不安。",
                "家人：那麼，除了訊息聯絡，也決定集合地點以及等待聯絡的時間吧。",
                "居民：這樣即使無法互相聯絡，也比較容易判斷下一步該做什麼。",
                "家人：是的。災害時事情不一定按計畫進行，所以我認為只要事先共享基本規則就很好。"
            ],
            ko: [
                "주민: 재해가 발생했을 때 가족 모두가 같은 장소에 있다고는 할 수 없지요.",
                "가족: 그렇습니다. 학교나 직장에 있을 가능성도 있으므로 연락 방법을 정해 둘 필요가 있습니다.",
                "주민: 전화가 연결되지 않는 경우를 생각하면 한 가지 방법에만 의존하는 것은 불안합니다.",
                "가족: 그렇다면 메시지뿐 아니라 모일 장소와 연락을 기다릴 시간도 정해 둡시다.",
                "주민: 그러면 서로 연락할 수 없어도 다음에 무엇을 할지 판단하기 쉬워지겠네요.",
                "가족: 네. 재해 때는 계획대로 되지 않는 경우도 있으므로 기본적인 규칙만이라도 공유해 두는 것이 좋다고 생각합니다."
            ],
            vi: [
                "Cư dân: Khi thiên tai xảy ra, không phải lúc nào mọi thành viên trong gia đình cũng ở cùng một nơi đúng không?",
                "Người nhà: Đúng vậy. Có thể có người ở trường hoặc nơi làm việc, nên cần quyết định cách liên lạc trước.",
                "Cư dân: Nghĩ đến trường hợp điện thoại không kết nối được, tôi thấy không yên tâm nếu chỉ dựa vào một phương pháp.",
                "Người nhà: Vậy thì ngoài tin nhắn, chúng ta hãy quyết định cả nơi tập trung và thời gian chờ liên lạc.",
                "Cư dân: Như vậy dù không thể liên lạc với nhau, cũng dễ quyết định bước tiếp theo hơn.",
                "Người nhà: Vâng. Khi có thiên tai, mọi việc có thể không diễn ra theo kế hoạch, nên tôi nghĩ chia sẻ trước những quy tắc cơ bản là tốt."
            ]
        }
    ),

    makeB2DisasterPreparednessDialogue(
        "b2_disaster_005",
        "台風や大雨の情報を判断する",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "台風が近づいているようですが、いつ避難すべきか判断するのが難しいです。",
                target: "たいふうがちかづいているようですが いつひなんすべきかはんだんするのがむずかしいです",
                ruby: "<ruby>台風<rt>たいふう</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づいているようですが、いつ<ruby>避難<rt>ひなん</rt></ruby>すべきか<ruby>判断<rt>はんだん</rt></ruby>するのが<ruby>難<rt>むずか</rt></ruby>しいです。",
                romaji: "Taifū ga chikazuite iru yō desu ga, itsu hinan subeki ka handan suru no ga muzukashii desu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "まず、自分が住んでいる場所にどのような危険があるか確認しておくことが重要です。",
                target: "まず じぶんがすんでいるばしょにどのようなきけんがあるかかくにんしておくことがじゅうようです",
                ruby: "まず、<ruby>自分<rt>じぶん</rt></ruby>が<ruby>住<rt>す</rt></ruby>んでいる<ruby>場所<rt>ばしょ</rt></ruby>にどのような<ruby>危険<rt>きけん</rt></ruby>があるか<ruby>確認<rt>かくにん</rt></ruby>しておくことが<ruby>重要<rt>じゅうよう</rt></ruby>です。",
                romaji: "Mazu, jibun ga sunde iru basho ni dono yō na kiken ga aru ka kakunin shite oku koto ga jūyō desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "川の近くに住んでいるので、大雨のときは早めに行動した方がよさそうですね。",
                target: "かわのちかくにすんでいるので おおあめのときははやめにこうどうしたほうがよさそうですね",
                ruby: "<ruby>川<rt>かわ</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くに<ruby>住<rt>す</rt></ruby>んでいるので、<ruby>大雨<rt>おおあめ</rt></ruby>のときは<ruby>早<rt>はや</rt></ruby>めに<ruby>行動<rt>こうどう</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がよさそうですね。",
                romaji: "Kawa no chikaku ni sunde iru node, ōame no toki wa hayame ni kōdō shita hō ga yosasō desu ne."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "はい。特に夜になってからの移動は危険になる場合があるので、明るいうちの判断も大切です。",
                target: "はい とくによるになってからのいどうはきけんになるばあいがあるので あかるいうちのはんだんもたいせつです",
                ruby: "はい。<ruby>特<rt>とく</rt></ruby>に<ruby>夜<rt>よる</rt></ruby>になってからの<ruby>移動<rt>いどう</rt></ruby>は<ruby>危険<rt>きけん</rt></ruby>になる<ruby>場合<rt>ばあい</rt></ruby>があるので、<ruby>明<rt>あか</rt></ruby>るいうちの<ruby>判断<rt>はんだん</rt></ruby>も<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Hai. Toku ni yoru ni natte kara no idō wa kiken ni naru baai ga aru node, akarui uchi no handan mo taisetsu desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "情報が多すぎて迷うこともありますが、どの情報を優先すればいいでしょうか。",
                target: "じょうほうがおおすぎてまようこともありますが どのじょうほうをゆうせんすればいいでしょうか",
                ruby: "<ruby>情報<rt>じょうほう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>すぎて<ruby>迷<rt>まよ</rt></ruby>うこともありますが、どの<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>優先<rt>ゆうせん</rt></ruby>すればいいでしょうか。",
                romaji: "Jōhō ga ōsugite mayou koto mo arimasu ga, dono jōhō o yūsen sureba ii deshō ka."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "自治体や気象機関など、信頼できる公的な情報を確認し、自分の地域に関係する内容を優先してください。",
                target: "じちたいやきしょうきかんなど しんらいできるこうてきなじょうほうをかくにんし じぶんのちいきにかんけいするないようをゆうせんしてください",
                ruby: "<ruby>自治体<rt>じちたい</rt></ruby>や<ruby>気象機関<rt>きしょうきかん</rt></ruby>など、<ruby>信頼<rt>しんらい</rt></ruby>できる<ruby>公的<rt>こうてき</rt></ruby>な<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>し、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>地域<rt>ちいき</rt></ruby>に<ruby>関係<rt>かんけい</rt></ruby>する<ruby>内容<rt>ないよう</rt></ruby>を<ruby>優先<rt>ゆうせん</rt></ruby>してください。",
                romaji: "Jichitai ya kishō kikan nado, shinrai dekiru kōteki na jōhō o kakunin shi, jibun no chiiki ni kankei suru naiyō o yūsen shite kudasai."
            }
        ],
        {
            ja: [
                "住民：台風が近づいているようですが、いつ避難すべきか判断するのが難しいです。",
                "市職員：まず、自分が住んでいる場所にどのような危険があるか確認しておくことが重要です。",
                "住民：川の近くに住んでいるので、大雨のときは早めに行動した方がよさそうですね。",
                "市職員：はい。特に夜になってからの移動は危険になる場合があるので、明るいうちの判断も大切です。",
                "住民：情報が多すぎて迷うこともありますが、どの情報を優先すればいいでしょうか。",
                "市職員：自治体や気象機関など、信頼できる公的な情報を確認し、自分の地域に関係する内容を優先してください。"
            ],
            en: [
                "Resident: A typhoon seems to be approaching, but it is difficult to decide when we should evacuate.",
                "City Official: First, it is important to understand what kinds of risks exist where you live.",
                "Resident: Since I live near a river, it sounds better to act early during heavy rain.",
                "City Official: Yes. Moving after dark can sometimes become dangerous, so making decisions while it is still light is also important.",
                "Resident: Sometimes there is so much information that I get confused. Which information should I prioritize?",
                "City Official: Check reliable official information from local governments and weather agencies, and prioritize information related to your own area."
            ],
            "zh-CN": [
                "居民：台风好像正在接近，但很难判断什么时候应该避难。",
                "市政府工作人员：首先，了解自己居住地区有什么危险非常重要。",
                "居民：因为我住在河边，看来大雨时应该早点行动。",
                "市政府工作人员：是的。特别是天黑后移动有时会变得危险，所以白天做出判断也很重要。",
                "居民：信息太多时有时会困惑，应该优先看哪些信息呢？",
                "市政府工作人员：请确认自治体和气象机构等可靠的官方信息，并优先关注与自己所在地区有关的内容。"
            ],
            "zh-TW": [
                "居民：颱風好像正在接近，但很難判斷什麼時候應該避難。",
                "市政府工作人員：首先，了解自己居住地區有什麼危險非常重要。",
                "居民：因為我住在河邊，看來大雨時應該早點行動。",
                "市政府工作人員：是的。特別是天黑後移動有時會變得危險，所以白天做出判斷也很重要。",
                "居民：資訊太多時有時會困惑，應該優先看哪些資訊呢？",
                "市政府工作人員：請確認自治體和氣象機構等可靠的官方資訊，並優先關注與自己所在地區有關的內容。"
            ],
            ko: [
                "주민: 태풍이 다가오고 있는 것 같은데 언제 대피해야 할지 판단하기 어렵습니다.",
                "시청 직원: 우선 자신이 사는 장소에 어떤 위험이 있는지 확인해 두는 것이 중요합니다.",
                "주민: 강 근처에 살고 있으니 폭우 때는 일찍 행동하는 편이 좋겠네요.",
                "시청 직원: 네. 특히 밤이 된 후의 이동은 위험해질 수 있으므로 밝을 때 판단하는 것도 중요합니다.",
                "주민: 정보가 너무 많아 혼란스러울 때도 있는데 어떤 정보를 우선해야 하나요?",
                "시청 직원: 지자체나 기상 기관 등 신뢰할 수 있는 공식 정보를 확인하고 자신의 지역과 관련된 내용을 우선해 주세요."
            ],
            vi: [
                "Cư dân: Có vẻ bão đang đến gần, nhưng thật khó quyết định khi nào nên sơ tán.",
                "Nhân viên thành phố: Trước tiên, điều quan trọng là kiểm tra nơi mình sống có những nguy hiểm gì.",
                "Cư dân: Vì tôi sống gần sông, có vẻ khi mưa lớn nên hành động sớm hơn.",
                "Nhân viên thành phố: Vâng. Đặc biệt, di chuyển sau khi trời tối có thể nguy hiểm, nên quyết định khi còn sáng cũng rất quan trọng.",
                "Cư dân: Có lúc quá nhiều thông tin khiến tôi bối rối. Tôi nên ưu tiên thông tin nào?",
                "Nhân viên thành phố: Hãy kiểm tra thông tin chính thức đáng tin cậy từ chính quyền địa phương hoặc cơ quan khí tượng, và ưu tiên nội dung liên quan đến khu vực của bạn."
            ]
        }
    ),

    makeB2DisasterPreparednessDialogue(
        "b2_disaster_006",
        "外国人にもわかる防災情報を考える",
        [
            {
                label: "話者B",
                key: "volunteer",
                name: "ボランティア",
                line: "外国人住民に防災情報を伝えるとき、日本語だけでは十分ではないと感じています。",
                target: "がいこくじんじゅうみんにぼうさいじょうほうをつたえるとき にほんごだけではじゅうぶんではないとかんじています",
                ruby: "<ruby>外国人住民<rt>がいこくじんじゅうみん</rt></ruby>に<ruby>防災情報<rt>ぼうさいじょうほう</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えるとき、<ruby>日本語<rt>にほんご</rt></ruby>だけでは<ruby>十分<rt>じゅうぶん</rt></ruby>ではないと<ruby>感<rt>かん</rt></ruby>じています。",
                romaji: "Gaikokujin jūmin ni bōsai jōhō o tsutaeru toki, Nihongo dake de wa jūbun de wa nai to kanjite imasu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "そうですね。ただ、多言語に翻訳するだけで解決するわけでもありません。",
                target: "そうですね ただ たげんごにほんやくするだけでかいけつするわけでもありません",
                ruby: "そうですね。ただ、<ruby>多言語<rt>たげんご</rt></ruby>に<ruby>翻訳<rt>ほんやく</rt></ruby>するだけで<ruby>解決<rt>かいけつ</rt></ruby>するわけでもありません。",
                romaji: "Sō desu ne. Tada, tagengo ni hon'yaku suru dake de kaiketsu suru wake demo arimasen."
            },
            {
                label: "話者B",
                key: "volunteer",
                name: "ボランティア",
                line: "難しい言葉や、日本の制度を知らないと理解できない表現もありますからね。",
                target: "むずかしいことばや にほんのせいどをしらないとりかいできないひょうげんもありますからね",
                ruby: "<ruby>難<rt>むずか</rt></ruby>しい<ruby>言葉<rt>ことば</rt></ruby>や、<ruby>日本<rt>にほん</rt></ruby>の<ruby>制度<rt>せいど</rt></ruby>を<ruby>知<rt>し</rt></ruby>らないと<ruby>理解<rt>りかい</rt></ruby>できない<ruby>表現<rt>ひょうげん</rt></ruby>もありますからね。",
                romaji: "Muzukashii kotoba ya, Nihon no seido o shiranai to rikai dekinai hyōgen mo arimasu kara ne."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "そのため、やさしい日本語やイラスト、地図などを組み合わせることも重要です。",
                target: "そのため やさしいにほんごやいらすと ちずなどをくみあわせることもじゅうようです",
                ruby: "そのため、やさしい<ruby>日本語<rt>にほんご</rt></ruby>やイラスト、<ruby>地図<rt>ちず</rt></ruby>などを<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせることも<ruby>重要<rt>じゅうよう</rt></ruby>です。",
                romaji: "Sono tame, yasashii Nihongo ya irasuto, chizu nado o kumiawaseru koto mo jūyō desu."
            },
            {
                label: "話者B",
                key: "volunteer",
                name: "ボランティア",
                line: "情報を作る側だけで決めず、実際に外国人住民に読んでもらうことも必要だと思います。",
                target: "じょうほうをつくるがわだけできめず じっさいにがいこくじんじゅうみんによんでもらうこともひつようだとおもいます",
                ruby: "<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る<ruby>側<rt>がわ</rt></ruby>だけで<ruby>決<rt>き</rt></ruby>めず、<ruby>実際<rt>じっさい</rt></ruby>に<ruby>外国人住民<rt>がいこくじんじゅうみん</rt></ruby>に<ruby>読<rt>よ</rt></ruby>んでもらうことも<ruby>必要<rt>ひつよう</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Jōhō o tsukuru gawa dake de kimezu, jissai ni gaikokujin jūmin ni yonde morau koto mo hitsuyō da to omoimasu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "私も賛成です。伝えたつもりではなく、実際に伝わる情報にすることが大切ですね。",
                target: "わたしもさんせいです つたえたつもりではなく じっさいにつたわるじょうほうにすることがたいせつですね",
                ruby: "<ruby>私<rt>わたし</rt></ruby>も<ruby>賛成<rt>さんせい</rt></ruby>です。<ruby>伝<rt>つた</rt></ruby>えたつもりではなく、<ruby>実際<rt>じっさい</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>わる<ruby>情報<rt>じょうほう</rt></ruby>にすることが<ruby>大切<rt>たいせつ</rt></ruby>ですね。",
                romaji: "Watashi mo sansei desu. Tsutaeta tsumori de wa naku, jissai ni tsutawaru jōhō ni suru koto ga taisetsu desu ne."
            }
        ],
        {
            ja: [
                "ボランティア：外国人住民に防災情報を伝えるとき、日本語だけでは十分ではないと感じています。",
                "市職員：そうですね。ただ、多言語に翻訳するだけで解決するわけでもありません。",
                "ボランティア：難しい言葉や、日本の制度を知らないと理解できない表現もありますからね。",
                "市職員：そのため、やさしい日本語やイラスト、地図などを組み合わせることも重要です。",
                "ボランティア：情報を作る側だけで決めず、実際に外国人住民に読んでもらうことも必要だと思います。",
                "市職員：私も賛成です。伝えたつもりではなく、実際に伝わる情報にすることが大切ですね。"
            ],
            en: [
                "Volunteer: When providing disaster information to foreign residents, I feel Japanese alone is not enough.",
                "City Official: I agree. However, simply translating everything into multiple languages does not necessarily solve the problem.",
                "Volunteer: There are difficult words and expressions that are hard to understand without knowing Japanese systems.",
                "City Official: That is why combining easy Japanese, illustrations, and maps is also important.",
                "Volunteer: I think we should not let only the people creating the information decide. We should also ask foreign residents to actually read it.",
                "City Official: I agree. The goal should not be information that we think we have communicated, but information that is truly understood."
            ],
            "zh-CN": [
                "志愿者：向外国居民传达防灾信息时，我觉得只有日语并不充分。",
                "市政府工作人员：是的。不过，只翻译成多种语言也不一定能解决问题。",
                "志愿者：因为有些词很难，也有些表达如果不了解日本的制度就无法理解。",
                "市政府工作人员：因此，把简明日语、插图和地图结合起来也很重要。",
                "志愿者：我认为不能只让制作信息的人决定，也有必要请外国居民实际阅读。",
                "市政府工作人员：我也赞成。重要的不是自己认为已经传达，而是制作真正能被理解的信息。"
            ],
            "zh-TW": [
                "志工：向外國居民傳達防災資訊時，我覺得只有日語並不充分。",
                "市政府工作人員：是的。不過，只翻譯成多種語言也不一定能解決問題。",
                "志工：因為有些詞很難，也有些表達如果不了解日本的制度就無法理解。",
                "市政府工作人員：因此，把簡明日語、插圖和地圖結合起來也很重要。",
                "志工：我認為不能只讓製作資訊的人決定，也有必要請外國居民實際閱讀。",
                "市政府工作人員：我也贊成。重要的不是自己認為已經傳達，而是製作真正能被理解的資訊。"
            ],
            ko: [
                "자원봉사자: 외국인 주민에게 방재 정보를 전달할 때 일본어만으로는 충분하지 않다고 느낍니다.",
                "시청 직원: 그렇습니다. 하지만 여러 언어로 번역하기만 하면 해결되는 것도 아닙니다.",
                "자원봉사자: 어려운 말이나 일본의 제도를 모르면 이해할 수 없는 표현도 있으니까요.",
                "시청 직원: 그래서 쉬운 일본어, 그림, 지도 등을 함께 사용하는 것도 중요합니다.",
                "자원봉사자: 정보를 만드는 쪽에서만 결정하지 말고 실제로 외국인 주민에게 읽어 달라고 하는 것도 필요하다고 생각합니다.",
                "시청 직원: 저도 찬성합니다. 전달했다고 생각하는 것이 아니라 실제로 전달되는 정보로 만드는 것이 중요하네요."
            ],
            vi: [
                "Tình nguyện viên: Khi truyền đạt thông tin phòng chống thiên tai cho người nước ngoài, tôi cảm thấy chỉ tiếng Nhật là chưa đủ.",
                "Nhân viên thành phố: Đúng vậy. Tuy nhiên, chỉ dịch sang nhiều ngôn ngữ cũng không nhất thiết giải quyết được vấn đề.",
                "Tình nguyện viên: Vì còn có những từ khó và những cách diễn đạt không thể hiểu nếu không biết hệ thống của Nhật Bản.",
                "Nhân viên thành phố: Vì vậy, kết hợp tiếng Nhật dễ hiểu, hình minh họa và bản đồ cũng rất quan trọng.",
                "Tình nguyện viên: Tôi nghĩ không nên chỉ để phía làm thông tin quyết định, mà cũng cần nhờ chính người nước ngoài đọc thử.",
                "Nhân viên thành phố: Tôi cũng đồng ý. Điều quan trọng không phải là nghĩ rằng mình đã truyền đạt, mà là tạo ra thông tin thực sự đến được với người nhận."
            ]
        }
    ),

    makeB2DisasterPreparednessDialogue(
        "b2_disaster_007",
        "地域の防災訓練について考える",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "地域の防災訓練に参加したことがないのですが、実際に役に立つのでしょうか。",
                target: "ちいきのぼうさいくんれんにさんかしたことがないのですが じっさいにやくにたつのでしょうか",
                ruby: "<ruby>地域<rt>ちいき</rt></ruby>の<ruby>防災訓練<rt>ぼうさいくんれん</rt></ruby>に<ruby>参加<rt>さんか</rt></ruby>したことがないのですが、<ruby>実際<rt>じっさい</rt></ruby>に<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>つのでしょうか。",
                romaji: "Chiiki no bōsai kunren ni sanka shita koto ga nai no desu ga, jissai ni yaku ni tatsu no deshō ka."
            },
            {
                label: "話者A",
                key: "volunteer",
                name: "ボランティア",
                line: "訓練だけですべてに対応できるわけではありませんが、地域の人や場所を知る機会にはなります。",
                target: "くんれんだけですべてにたいおうできるわけではありませんが ちいきのひとやばしょをしるきかいにはなります",
                ruby: "<ruby>訓練<rt>くんれん</rt></ruby>だけですべてに<ruby>対応<rt>たいおう</rt></ruby>できるわけではありませんが、<ruby>地域<rt>ちいき</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>や<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>知<rt>し</rt></ruby>る<ruby>機会<rt>きかい</rt></ruby>にはなります。",
                romaji: "Kunren dake de subete ni taiō dekiru wake de wa arimasen ga, chiiki no hito ya basho o shiru kikai ni wa narimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "災害のときに初めて近所の人と話すより、普段から顔を知っていた方が助け合いやすそうですね。",
                target: "さいがいのときにはじめてきんじょのひととはなすより ふだんからかおをしっていたほうがたすけあいやすそうですね",
                ruby: "<ruby>災害<rt>さいがい</rt></ruby>のときに<ruby>初<rt>はじ</rt></ruby>めて<ruby>近所<rt>きんじょ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>話<rt>はな</rt></ruby>すより、<ruby>普段<rt>ふだん</rt></ruby>から<ruby>顔<rt>かお</rt></ruby>を<ruby>知<rt>し</rt></ruby>っていた<ruby>方<rt>ほう</rt></ruby>が<ruby>助<rt>たす</rt></ruby>け<ruby>合<rt>あ</rt></ruby>いやすそうですね。",
                romaji: "Saigai no toki ni hajimete kinjo no hito to hanasu yori, fudan kara kao o shitte ita hō ga tasukeai yasusō desu ne."
            },
            {
                label: "話者A",
                key: "volunteer",
                name: "ボランティア",
                line: "そう思います。特に支援が必要な人がどこにいるかを知ることも、地域では重要です。",
                target: "そうおもいます とくにしえんがひつようなひとがどこにいるかをしることも ちいきではじゅうようです",
                ruby: "そう<ruby>思<rt>おも</rt></ruby>います。<ruby>特<rt>とく</rt></ruby>に<ruby>支援<rt>しえん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>がどこにいるかを<ruby>知<rt>し</rt></ruby>ることも、<ruby>地域<rt>ちいき</rt></ruby>では<ruby>重要<rt>じゅうよう</rt></ruby>です。",
                romaji: "Sō omoimasu. Toku ni shien ga hitsuyō na hito ga doko ni iru ka o shiru koto mo, chiiki de wa jūyō desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "ただ、若い人や外国人が参加しにくい雰囲気もあるように感じます。",
                target: "ただ わかいひとやがいこくじんがさんかしにくいふんいきもあるようにかんじます",
                ruby: "ただ、<ruby>若<rt>わか</rt></ruby>い<ruby>人<rt>ひと</rt></ruby>や<ruby>外国人<rt>がいこくじん</rt></ruby>が<ruby>参加<rt>さんか</rt></ruby>しにくい<ruby>雰囲気<rt>ふんいき</rt></ruby>もあるように<ruby>感<rt>かん</rt></ruby>じます。",
                romaji: "Tada, wakai hito ya gaikokujin ga sanka shinikui fun'iki mo aru yō ni kanjimasu."
            },
            {
                label: "話者A",
                key: "volunteer",
                name: "ボランティア",
                line: "その点は改善が必要ですね。参加する側の意見を聞きながら、内容や案内方法を変えていくべきだと思います。",
                target: "そのてんはかいぜんがひつようですね さんかするがわのいけんをききながら ないようやあんないほうほうをかえていくべきだとおもいます",
                ruby: "その<ruby>点<rt>てん</rt></ruby>は<ruby>改善<rt>かいぜん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>ですね。<ruby>参加<rt>さんか</rt></ruby>する<ruby>側<rt>がわ</rt></ruby>の<ruby>意見<rt>いけん</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きながら、<ruby>内容<rt>ないよう</rt></ruby>や<ruby>案内方法<rt>あんないほうほう</rt></ruby>を<ruby>変<rt>か</rt></ruby>えていくべきだと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Sono ten wa kaizen ga hitsuyō desu ne. Sanka suru gawa no iken o kikinagara, naiyō ya annai hōhō o kaete iku beki da to omoimasu."
            }
        ],
        {
            ja: [
                "住民：地域の防災訓練に参加したことがないのですが、実際に役に立つのでしょうか。",
                "ボランティア：訓練だけですべてに対応できるわけではありませんが、地域の人や場所を知る機会にはなります。",
                "住民：災害のときに初めて近所の人と話すより、普段から顔を知っていた方が助け合いやすそうですね。",
                "ボランティア：そう思います。特に支援が必要な人がどこにいるかを知ることも、地域では重要です。",
                "住民：ただ、若い人や外国人が参加しにくい雰囲気もあるように感じます。",
                "ボランティア：その点は改善が必要ですね。参加する側の意見を聞きながら、内容や案内方法を変えていくべきだと思います。"
            ],
            en: [
                "Resident: I have never participated in a community disaster drill. Is it really useful?",
                "Volunteer: A drill cannot prepare us for everything, but it gives us a chance to learn about local people and places.",
                "Resident: It seems easier to help one another if we already know our neighbors rather than meeting them for the first time during a disaster.",
                "Volunteer: I agree. It is also important for the community to know where people who may need support are located.",
                "Resident: However, I feel that young people and foreign residents may find it difficult to participate.",
                "Volunteer: That is something that needs improvement. I think the content and communication methods should be changed while listening to participants' opinions."
            ],
            "zh-CN": [
                "居民：我从来没有参加过社区防灾训练，它真的有用吗？",
                "志愿者：仅靠训练不可能应对所有情况，但可以成为了解社区居民和地点的机会。",
                "居民：比起灾害发生时才第一次和邻居说话，平时就认识的话似乎更容易互相帮助。",
                "志愿者：我也这样认为。特别是知道需要支援的人住在哪里，对社区也很重要。",
                "居民：不过，我觉得年轻人和外国人可能不太容易参加。",
                "志愿者：这一点需要改善。我认为应该听取参加者的意见，并改变活动内容和通知方式。"
            ],
            "zh-TW": [
                "居民：我從來沒有參加過社區防災訓練，它真的有用嗎？",
                "志工：僅靠訓練不可能應對所有情況，但可以成為了解社區居民和地點的機會。",
                "居民：比起災害發生時才第一次和鄰居說話，平時就認識的話似乎更容易互相幫助。",
                "志工：我也這樣認為。特別是知道需要支援的人住在哪裡，對社區也很重要。",
                "居民：不過，我覺得年輕人和外國人可能不太容易參加。",
                "志工：這一點需要改善。我認為應該聽取參加者的意見，並改變活動內容和通知方式。"
            ],
            ko: [
                "주민: 지역 방재 훈련에 참여한 적이 없는데 실제로 도움이 되나요?",
                "자원봉사자: 훈련만으로 모든 상황에 대응할 수 있는 것은 아니지만 지역 사람과 장소를 알 수 있는 기회가 됩니다.",
                "주민: 재해 때 처음 이웃과 이야기하는 것보다 평소에 서로 얼굴을 알고 있는 편이 서로 돕기 쉬울 것 같네요.",
                "자원봉사자: 저도 그렇게 생각합니다. 특히 지원이 필요한 사람이 어디에 있는지 아는 것도 지역에서는 중요합니다.",
                "주민: 다만 젊은 사람이나 외국인이 참여하기 어려운 분위기도 있는 것 같습니다.",
                "자원봉사자: 그 점은 개선이 필요하네요. 참여하는 사람들의 의견을 들으면서 내용과 안내 방법을 바꾸어 가야 한다고 생각합니다."
            ],
            vi: [
                "Cư dân: Tôi chưa từng tham gia diễn tập phòng chống thiên tai của khu vực. Nó thực sự có ích không?",
                "Tình nguyện viên: Chỉ diễn tập thì không thể ứng phó với mọi thứ, nhưng đó là cơ hội để biết người và địa điểm trong khu vực.",
                "Cư dân: Có vẻ sẽ dễ giúp đỡ nhau hơn nếu đã biết mặt hàng xóm từ trước thay vì lần đầu nói chuyện khi có thiên tai.",
                "Tình nguyện viên: Tôi cũng nghĩ vậy. Đặc biệt, việc biết người cần hỗ trợ đang ở đâu cũng rất quan trọng trong cộng đồng.",
                "Cư dân: Tuy nhiên, tôi cảm thấy người trẻ và người nước ngoài có vẻ khó tham gia.",
                "Tình nguyện viên: Điểm đó cần được cải thiện. Tôi nghĩ nên thay đổi nội dung và cách thông báo trong khi lắng nghe ý kiến của người tham gia."
            ]
        }
    ),

    makeB2DisasterPreparednessDialogue(
        "b2_disaster_008",
        "災害後の助け合いについて考える",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "大きな災害のあと、行政の支援だけですべての人をすぐに助けるのは難しいですよね。",
                target: "おおきなさいがいのあと ぎょうせいのしえんだけですべてのひとをすぐにたすけるのはむずかしいですよね",
                ruby: "<ruby>大<rt>おお</rt></ruby>きな<ruby>災害<rt>さいがい</rt></ruby>のあと、<ruby>行政<rt>ぎょうせい</rt></ruby>の<ruby>支援<rt>しえん</rt></ruby>だけですべての<ruby>人<rt>ひと</rt></ruby>をすぐに<ruby>助<rt>たす</rt></ruby>けるのは<ruby>難<rt>むずか</rt></ruby>しいですよね。",
                romaji: "Ōkina saigai no ato, gyōsei no shien dake de subete no hito o sugu ni tasukeru no wa muzukashii desu yo ne."
            },
            {
                label: "話者A",
                key: "volunteer",
                name: "ボランティア",
                line: "そうですね。そのため、近所の人同士で助け合うことも重要になります。",
                target: "そうですね そのため きんじょのひとどうしでたすけあうこともじゅうようになります",
                ruby: "そうですね。そのため、<ruby>近所<rt>きんじょ</rt></ruby>の<ruby>人同士<rt>ひとどうし</rt></ruby>で<ruby>助<rt>たす</rt></ruby>け<ruby>合<rt>あ</rt></ruby>うことも<ruby>重要<rt>じゅうよう</rt></ruby>になります。",
                romaji: "Sō desu ne. Sono tame, kinjo no hito dōshi de tasukeau koto mo jūyō ni narimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "ただ、自分の家族も大変な状況で、どこまで他の人を助けられるか不安です。",
                target: "ただ じぶんのかぞくもたいへんなじょうきょうで どこまでほかのひとをたすけられるかふあんです",
                ruby: "ただ、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>家族<rt>かぞく</rt></ruby>も<ruby>大変<rt>たいへん</rt></ruby>な<ruby>状況<rt>じょうきょう</rt></ruby>で、どこまでほかの<ruby>人<rt>ひと</rt></ruby>を<ruby>助<rt>たす</rt></ruby>けられるか<ruby>不安<rt>ふあん</rt></ruby>です。",
                romaji: "Tada, jibun no kazoku mo taihen na jōkyō de, doko made hoka no hito o tasukerareru ka fuan desu."
            },
            {
                label: "話者A",
                key: "volunteer",
                name: "ボランティア",
                line: "無理をして自分まで危険になる必要はありません。できる範囲で声をかけたり、情報を共有したりするだけでも助けになります。",
                target: "むりをしてじぶんまできけんになるひつようはありません できるはんいでこえをかけたり じょうほうをきょうゆうしたりするだけでもたすけになります",
                ruby: "<ruby>無理<rt>むり</rt></ruby>をして<ruby>自分<rt>じぶん</rt></ruby>まで<ruby>危険<rt>きけん</rt></ruby>になる<ruby>必要<rt>ひつよう</rt></ruby>はありません。できる<ruby>範囲<rt>はんい</rt></ruby>で<ruby>声<rt>こえ</rt></ruby>をかけたり、<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>共有<rt>きょうゆう</rt></ruby>したりするだけでも<ruby>助<rt>たす</rt></ruby>けになります。",
                romaji: "Muri o shite jibun made kiken ni naru hitsuyō wa arimasen. Dekiru han'i de koe o kaketari, jōhō o kyōyū shitari suru dake demo tasuke ni narimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "助けるというと大きな行動を想像していましたが、小さなことでも意味があるのですね。",
                target: "たすけるというとおおきなこうどうをそうぞうしていましたが ちいさなことでもいみがあるのですね",
                ruby: "<ruby>助<rt>たす</rt></ruby>けるというと<ruby>大<rt>おお</rt></ruby>きな<ruby>行動<rt>こうどう</rt></ruby>を<ruby>想像<rt>そうぞう</rt></ruby>していましたが、<ruby>小<rt>ちい</rt></ruby>さなことでも<ruby>意味<rt>いみ</rt></ruby>があるのですね。",
                romaji: "Tasukeru to iu to ōkina kōdō o sōzō shite imashita ga, chiisana koto demo imi ga aru no desu ne."
            },
            {
                label: "話者A",
                key: "volunteer",
                name: "ボランティア",
                line: "はい。普段から人とのつながりを作っておくことが、災害時の大きな力になることもあります。",
                target: "はい ふだんからひととのつながりをつくっておくことが さいがいじのおおきなちからになることもあります",
                ruby: "はい。<ruby>普段<rt>ふだん</rt></ruby>から<ruby>人<rt>ひと</rt></ruby>とのつながりを<ruby>作<rt>つく</rt></ruby>っておくことが、<ruby>災害時<rt>さいがいじ</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きな<ruby>力<rt>ちから</rt></ruby>になることもあります。",
                romaji: "Hai. Fudan kara hito to no tsunagari o tsukutte oku koto ga, saigaiji no ōkina chikara ni naru koto mo arimasu."
            }
        ],
        {
            ja: [
                "住民：大きな災害のあと、行政の支援だけですべての人をすぐに助けるのは難しいですよね。",
                "ボランティア：そうですね。そのため、近所の人同士で助け合うことも重要になります。",
                "住民：ただ、自分の家族も大変な状況で、どこまで他の人を助けられるか不安です。",
                "ボランティア：無理をして自分まで危険になる必要はありません。できる範囲で声をかけたり、情報を共有したりするだけでも助けになります。",
                "住民：助けるというと大きな行動を想像していましたが、小さなことでも意味があるのですね。",
                "ボランティア：はい。普段から人とのつながりを作っておくことが、災害時の大きな力になることもあります。"
            ],
            en: [
                "Resident: After a major disaster, it is difficult for government support alone to immediately help everyone.",
                "Volunteer: That is true. Therefore, mutual support among neighbors also becomes important.",
                "Resident: However, if my own family is also in a difficult situation, I worry about how much I can help others.",
                "Volunteer: You do not need to put yourself in danger. Even checking on someone or sharing information within your ability can be helpful.",
                "Resident: When I thought of helping, I imagined major actions, but even small things can have meaning.",
                "Volunteer: Yes. Building connections with people in everyday life can sometimes become a great source of strength during a disaster."
            ],
            "zh-CN": [
                "居民：大型灾害之后，仅靠政府支援很难立即帮助所有人吧。",
                "志愿者：是的。因此，邻居之间互相帮助也会变得非常重要。",
                "居民：但是，如果自己的家人也处于困难状态，我会担心到底能帮助别人到什么程度。",
                "志愿者：没有必要勉强自己，让自己也陷入危险。即使只是在能力范围内问候一下或共享信息，也能帮助别人。",
                "居民：说到帮助别人，我原来想象的是很大的行动，但小事情也有意义啊。",
                "志愿者：是的。平时与人建立联系，有时会成为灾害时的重要力量。"
            ],
            "zh-TW": [
                "居民：大型災害之後，僅靠政府支援很難立即幫助所有人吧。",
                "志工：是的。因此，鄰居之間互相幫助也會變得非常重要。",
                "居民：但是，如果自己的家人也處於困難狀態，我會擔心到底能幫助別人到什麼程度。",
                "志工：沒有必要勉強自己，讓自己也陷入危險。即使只是在能力範圍內問候一下或共享資訊，也能幫助別人。",
                "居民：說到幫助別人，我原來想像的是很大的行動，但小事情也有意義啊。",
                "志工：是的。平時與人建立聯繫，有時會成為災害時的重要力量。"
            ],
            ko: [
                "주민: 큰 재해 후에는 행정의 지원만으로 모든 사람을 바로 돕는 것은 어렵지요.",
                "자원봉사자: 그렇습니다. 그래서 이웃끼리 서로 돕는 것도 중요해집니다.",
                "주민: 하지만 제 가족도 어려운 상황이라면 어디까지 다른 사람을 도울 수 있을지 불안합니다.",
                "자원봉사자: 무리해서 자신까지 위험해질 필요는 없습니다. 할 수 있는 범위에서 말을 걸거나 정보를 공유하는 것만으로도 도움이 됩니다.",
                "주민: 돕는다고 하면 큰 행동을 생각했는데 작은 일도 의미가 있군요.",
                "자원봉사자: 네. 평소부터 사람들과 관계를 만들어 두는 것이 재해 때 큰 힘이 될 수도 있습니다."
            ],
            vi: [
                "Cư dân: Sau một thảm họa lớn, chỉ sự hỗ trợ của chính quyền thì khó có thể giúp ngay tất cả mọi người đúng không?",
                "Tình nguyện viên: Đúng vậy. Vì thế, việc hàng xóm giúp đỡ lẫn nhau cũng trở nên quan trọng.",
                "Cư dân: Nhưng nếu gia đình tôi cũng đang gặp khó khăn, tôi lo không biết mình có thể giúp người khác đến mức nào.",
                "Tình nguyện viên: Bạn không cần cố đến mức bản thân cũng gặp nguy hiểm. Chỉ cần hỏi thăm hoặc chia sẻ thông tin trong khả năng cũng đã là một sự giúp đỡ.",
                "Cư dân: Khi nghĩ đến giúp đỡ, tôi từng tưởng tượng những hành động lớn, nhưng ngay cả những việc nhỏ cũng có ý nghĩa.",
                "Tình nguyện viên: Vâng. Việc xây dựng mối quan hệ với mọi người từ ngày thường đôi khi trở thành sức mạnh lớn khi có thiên tai."
            ]
        }
    )

];