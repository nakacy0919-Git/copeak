// =====================================================
// Japeak B1 Level
// Scene: 病気を予防しよう
// File: data/japeak-b1-prevent-illness.js
// Category Key: b1_prevent_illness
// =====================================================

const b1PreventIllnessLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1PreventIllnessTranslations(translations) {
    const completed = {};

    b1PreventIllnessLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1PreventIllnessContext = {
    ja: "手洗い、生活習慣、予防接種、健康診断、職場での感染対策、食品衛生、歯の健康、家族での予防習慣など、病気を予防するために日常生活でできることについて日本語で話す練習をします。",

    en: "Practice Japanese for talking about everyday ways to prevent illness, including handwashing, healthy routines, vaccination, health checkups, infection prevention at work, food safety, dental health, and prevention habits for the whole family.",

    "zh-CN": "练习用日语讨论日常生活中预防疾病的方法，包括洗手、健康的生活习惯、预防接种、健康检查、职场感染预防、食品卫生、牙齿健康以及全家的预防习惯。",

    "zh-TW": "練習用日語討論日常生活中預防疾病的方法，包括洗手、健康的生活習慣、預防接種、健康檢查、職場感染預防、食品衛生、牙齒健康以及全家的預防習慣。",

    ko: "손 씻기, 생활 습관, 예방 접종, 건강 검진, 직장에서의 감염 예방, 식품 위생, 치아 건강, 가족의 예방 습관 등 일상생활에서 질병을 예방하기 위해 할 수 있는 일에 대해 일본어로 이야기하는 연습을 합니다.",

    vi: "Luyện tiếng Nhật để nói về những việc có thể làm trong cuộc sống hằng ngày nhằm phòng bệnh, bao gồm rửa tay, thói quen sinh hoạt lành mạnh, tiêm chủng, khám sức khỏe, phòng lây nhiễm tại nơi làm việc, an toàn thực phẩm, sức khỏe răng miệng và thói quen phòng bệnh trong gia đình.",

    tl: "Practice Japanese for discussing everyday ways to prevent illness, including handwashing, healthy habits, vaccination, health checkups, infection prevention, food safety, dental health, and family health habits.",

    id: "Latihan bahasa Jepang untuk membicarakan cara mencegah penyakit dalam kehidupan sehari-hari, termasuk mencuci tangan, kebiasaan hidup sehat, vaksinasi, pemeriksaan kesehatan, pencegahan infeksi di tempat kerja, keamanan makanan, kesehatan gigi, dan kebiasaan sehat keluarga.",

    th: "ฝึกภาษาญี่ปุ่นเพื่อพูดคุยเกี่ยวกับวิธีป้องกันโรคในชีวิตประจำวัน เช่น การล้างมือ พฤติกรรมสุขภาพ การฉีดวัคซีน การตรวจสุขภาพ การป้องกันการติดเชื้อในที่ทำงาน ความปลอดภัยของอาหาร สุขภาพฟัน และนิสัยป้องกันโรคของครอบครัว",

    my: "လက်ဆေးခြင်း၊ ကျန်းမာသော နေထိုင်မှုပုံစံ၊ ကာကွယ်ဆေးထိုးခြင်း၊ ကျန်းမာရေးစစ်ဆေးခြင်း၊ အလုပ်ခွင်တွင် ကူးစက်မှုကာကွယ်ခြင်း၊ အစားအသောက်ဘေးကင်းရေး၊ သွားကျန်းမာရေးနှင့် မိသားစုကျန်းမာရေးအလေ့အထများအပါအဝင် နေ့စဉ်ဘဝတွင် ရောဂါကာကွယ်ရန် လုပ်နိုင်သည့်အရာများကို ဂျပန်စကားဖြင့် လေ့ကျင့်ခြင်း။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់និយាយអំពីវិធីការពារជំងឺក្នុងជីវិតប្រចាំថ្ងៃ រួមមានការលាងដៃ ទម្លាប់រស់នៅល្អ ការចាក់វ៉ាក់សាំង ការពិនិត្យសុខភាព ការការពារការឆ្លងនៅកន្លែងធ្វើការ សុវត្ថិភាពអាហារ សុខភាពធ្មេញ និងទម្លាប់សុខភាពគ្រួសារ។",

    ne: "हात धुने, स्वस्थ जीवनशैली, खोप, स्वास्थ्य जाँच, कार्यस्थलमा संक्रमण रोकथाम, खाद्य सुरक्षा, दाँतको स्वास्थ्य र पारिवारिक स्वास्थ्य बानीसहित दैनिक जीवनमा रोग रोक्न सकिने उपायबारे जापानीमा बोल्ने अभ्यास।",

    mn: "Гар угаах, эрүүл амьдралын хэвшил, вакцинжуулалт, эрүүл мэндийн үзлэг, ажлын байран дахь халдвараас сэргийлэх, хүнсний аюулгүй байдал, шүдний эрүүл мэнд, гэр бүлийн эрүүл дадал зэрэг өвчнөөс урьдчилан сэргийлэх талаар япон хэлээр ярилцах дадлага.",

    si: "අත් සේදීම, සෞඛ්‍ය සම්පන්න ජීවන පුරුදු, එන්නත්, සෞඛ්‍ය පරීක්ෂණ, රැකියා ස්ථානයේ ආසාදන වැළැක්වීම, ආහාර ආරක්ෂාව, දන්ත සෞඛ්‍යය සහ පවුලේ සෞඛ්‍ය පුරුදු ඇතුළුව රෝග වැළැක්වීම ගැන ජපන් භාෂාවෙන් කතා කිරීමේ පුහුණුව.",

    bn: "হাত ধোয়া, স্বাস্থ্যকর জীবনযাপন, টিকাদান, স্বাস্থ্য পরীক্ষা, কর্মস্থলে সংক্রমণ প্রতিরোধ, খাদ্য নিরাপত্তা, দাঁতের স্বাস্থ্য এবং পারিবারিক স্বাস্থ্য অভ্যাসসহ দৈনন্দিন জীবনে রোগ প্রতিরোধের উপায় নিয়ে জাপানিতে কথা বলার অনুশীলন।",

    pt: "Prática de japonês para falar sobre formas de prevenir doenças no dia a dia, incluindo lavar as mãos, hábitos saudáveis, vacinação, exames de saúde, prevenção de infecções no trabalho, segurança alimentar, saúde dentária e hábitos familiares.",

    es: "Práctica de japonés para hablar sobre formas de prevenir enfermedades en la vida diaria, como lavarse las manos, mantener hábitos saludables, vacunarse, realizar controles médicos, prevenir infecciones en el trabajo, cuidar la seguridad alimentaria, la salud dental y los hábitos familiares.",

    fr: "Entraînement en japonais pour parler des moyens de prévenir les maladies au quotidien, notamment le lavage des mains, les habitudes saines, la vaccination, les bilans de santé, la prévention des infections au travail, la sécurité alimentaire, la santé dentaire et les habitudes familiales.",

    ru: "Практика японского языка для обсуждения способов профилактики заболеваний в повседневной жизни, включая мытьё рук, здоровые привычки, вакцинацию, медицинские осмотры, профилактику инфекций на работе, безопасность пищевых продуктов, здоровье зубов и семейные привычки.",

    uk: "Практика японської мови для обговорення способів профілактики захворювань у повсякденному житті, включаючи миття рук, здорові звички, вакцинацію, медичні огляди, профілактику інфекцій на роботі, безпечність харчових продуктів, здоров'я зубів і сімейні звички."
};

const b1PreventIllnessSpeakerNames = {

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

    healthStaff: {
        ja: "保健師",
        en: "Health Professional",
        "zh-CN": "保健人员",
        "zh-TW": "保健人員",
        ko: "보건사",
        vi: "Nhân viên y tế",
        tl: "Health professional",
        id: "Petugas kesehatan",
        th: "เจ้าหน้าที่สาธารณสุข",
        my: "ကျန်းမာရေးဝန်ထမ်း",
        km: "បុគ្គលិកសុខាភិបាល",
        ne: "स्वास्थ्यकर्मी",
        mn: "Эрүүл мэндийн ажилтан",
        si: "සෞඛ්‍ය සේවකයා",
        bn: "স্বাস্থ্যকর্মী",
        pt: "Profissional de saúde",
        es: "Profesional de salud",
        fr: "Professionnel de santé",
        ru: "Медицинский работник",
        uk: "Медичний працівник"
    },

    worker: {
        ja: "社員",
        en: "Worker",
        "zh-CN": "员工",
        "zh-TW": "員工",
        ko: "직원",
        vi: "Nhân viên",
        tl: "Worker",
        id: "Pekerja",
        th: "พนักงาน",
        my: "အလုပ်သမား",
        km: "បុគ្គលិក",
        ne: "कर्मचारी",
        mn: "Ажилтан",
        si: "සේවකයා",
        bn: "কর্মী",
        pt: "Trabalhador",
        es: "Trabajador",
        fr: "Employé",
        ru: "Сотрудник",
        uk: "Працівник"
    },

    coworker: {
        ja: "同僚",
        en: "Coworker",
        "zh-CN": "同事",
        "zh-TW": "同事",
        ko: "동료",
        vi: "Đồng nghiệp",
        tl: "Coworker",
        id: "Rekan kerja",
        th: "เพื่อนร่วมงาน",
        my: "လုပ်ဖော်ကိုင်ဖက်",
        km: "មិត្តរួមការងារ",
        ne: "सहकर्मी",
        mn: "Хамт ажиллагч",
        si: "සහකරු",
        bn: "সহকর্মী",
        pt: "Colega de trabalho",
        es: "Compañero de trabajo",
        fr: "Collègue",
        ru: "Коллега",
        uk: "Колега"
    },

    dentist: {
        ja: "歯科医師",
        en: "Dentist",
        "zh-CN": "牙医",
        "zh-TW": "牙醫",
        ko: "치과 의사",
        vi: "Nha sĩ",
        tl: "Dentist",
        id: "Dokter gigi",
        th: "ทันตแพทย์",
        my: "သွားဆရာဝန်",
        km: "ទន្តពេទ្យ",
        ne: "दन्त चिकित्सक",
        mn: "Шүдний эмч",
        si: "දන්ත වෛද්‍යවරයා",
        bn: "দন্ত চিকিৎসক",
        pt: "Dentista",
        es: "Dentista",
        fr: "Dentiste",
        ru: "Стоматолог",
        uk: "Стоматолог"
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

function makeB1PreventIllnessDialogue(id, title, dialogue, dialogueTranslations) {

    const fullDialogueTranslations =
        completeB1PreventIllnessTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_prevent_illness",

        japanese: dialogue
            .map(t => `${t.name}：${t.line}`)
            .join("\n"),

        target_speech: dialogue
            .map(t => t.target || t.line)
            .join(" "),

        ruby: {
            hiragana: dialogue
                .map(t => t.ruby || t.line)
                .join("<br>"),

            romaji: dialogue
                .map(t => t.romaji || "")
                .join("<br>")
        },

        dialogue: dialogue.map(t => ({
            speakerLabel: t.label,
            speakerName: t.name,
            speakerKey: t.key || t.name,
            speakerNames:
                b1PreventIllnessSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1PreventIllnessContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1PreventIllnessData = [

    // =====================================================
    // 001 手洗いの方法を見直す
    // =====================================================

    makeB1PreventIllnessDialogue(
        "b1_preventillness_001",
        "手洗いの方法を見直す",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "最近、病気を予防するために、毎日の習慣を見直したいと思っています。",
                target: "さいきん びょうきをよぼうするために まいにちのしゅうかんをみなおしたいとおもっています",
                ruby: "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>病気<rt>びょうき</rt></ruby>を<ruby>予防<rt>よぼう</rt></ruby>するために、<ruby>毎日<rt>まいにち</rt></ruby>の<ruby>習慣<rt>しゅうかん</rt></ruby>を<ruby>見直<rt>みなお</rt></ruby>したいと<ruby>思<rt>おも</rt></ruby>っています。",
                romaji: "Saikin, byōki o yobō suru tame ni, mainichi no shūkan o minaoshitai to omotte imasu."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "それなら、まず手洗いの方法から確認してみるといいですね。",
                target: "それなら まずてあらいのほうほうからかくにんしてみるといいですね",
                ruby: "それなら、まず<ruby>手洗<rt>てあら</rt></ruby>いの<ruby>方法<rt>ほうほう</rt></ruby>から<ruby>確認<rt>かくにん</rt></ruby>してみるといいですね。",
                romaji: "Sore nara, mazu tearai no hōhō kara kakunin shite miru to ii desu ne."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "いつも水で簡単に洗うだけですが、それでは十分ではないでしょうか。",
                target: "いつもみずでかんたんにあらうだけですが それではじゅうぶんではないでしょうか",
                ruby: "いつも<ruby>水<rt>みず</rt></ruby>で<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>洗<rt>あら</rt></ruby>うだけですが、それでは<ruby>十分<rt>じゅうぶん</rt></ruby>ではないでしょうか。",
                romaji: "Itsumo mizu de kantan ni arau dake desu ga, sore de wa jūbun de wa nai deshō ka."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "石けんを使って、指の間や指先まで丁寧に洗うことを意識してください。",
                target: "せっけんをつかって ゆびのあいやゆびさきまでていねいにあらうことをいしきしてください",
                ruby: "<ruby>石<rt>せっ</rt></ruby>けんを<ruby>使<rt>つか</rt></ruby>って、<ruby>指<rt>ゆび</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>や<ruby>指先<rt>ゆびさき</rt></ruby>まで<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>洗<rt>あら</rt></ruby>うことを<ruby>意識<rt>いしき</rt></ruby>してください。",
                romaji: "Sekken o tsukatte, yubi no aida ya yubisaki made teinei ni arau koto o ishiki shite kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "外から帰ったときや食事の前は、特に気をつけるようにします。",
                target: "そとからかえったときやしょくじのまえは とくにきをつけるようにします",
                ruby: "<ruby>外<rt>そと</rt></ruby>から<ruby>帰<rt>かえ</rt></ruby>ったときや<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>は、<ruby>特<rt>とく</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつけるようにします。",
                romaji: "Soto kara kaetta toki ya shokuji no mae wa, toku ni ki o tsukeru yō ni shimasu."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "いいですね。大切なのは、特別なことではなく、毎日の習慣として続けることです。",
                target: "いいですね たいせつなのは とくべつなことではなく まいにちのしゅうかんとしてつづけることです",
                ruby: "いいですね。<ruby>大切<rt>たいせつ</rt></ruby>なのは、<ruby>特別<rt>とくべつ</rt></ruby>なことではなく、<ruby>毎日<rt>まいにち</rt></ruby>の<ruby>習慣<rt>しゅうかん</rt></ruby>として<ruby>続<rt>つづ</rt></ruby>けることです。",
                romaji: "Ii desu ne. Taisetsu na no wa, tokubetsu na koto de wa naku, mainichi no shūkan to shite tsuzukeru koto desu."
            }
        ],

        {
            ja: [
                "住民：最近、病気を予防するために、毎日の習慣を見直したいと思っています。",
                "保健師：それなら、まず手洗いの方法から確認してみるといいですね。",
                "住民：いつも水で簡単に洗うだけですが、それでは十分ではないでしょうか。",
                "保健師：石けんを使って、指の間や指先まで丁寧に洗うことを意識してください。",
                "住民：外から帰ったときや食事の前は、特に気をつけるようにします。",
                "保健師：いいですね。大切なのは、特別なことではなく、毎日の習慣として続けることです。"
            ],

            en: [
                "Resident: Recently, I have been thinking about reviewing my daily habits to help prevent illness.",
                "Health Professional: In that case, it would be good to start by checking how you wash your hands.",
                "Resident: I usually just rinse them quickly with water. Is that not enough?",
                "Health Professional: Try to use soap and carefully wash between your fingers and around your fingertips.",
                "Resident: I will pay special attention after coming home and before meals.",
                "Health Professional: Good. The important thing is not doing something special, but continuing it as a daily habit."
            ],

            "zh-CN": [
                "居民：最近，为了预防疾病，我想重新审视一下每天的生活习惯。",
                "保健人员：那样的话，可以先从确认洗手方法开始。",
                "居民：我平时只是简单地用水洗一下，这样不够吗？",
                "保健人员：请注意使用肥皂，并仔细清洗指缝和指尖。",
                "居民：从外面回家时和吃饭前，我会特别注意。",
                "保健人员：很好。重要的不是做特别的事情，而是作为每天的习惯坚持下去。"
            ],

            "zh-TW": [
                "居民：最近，為了預防疾病，我想重新檢視一下每天的生活習慣。",
                "保健人員：那樣的話，可以先從確認洗手方法開始。",
                "居民：我平時只是簡單地用水洗一下，這樣不夠嗎？",
                "保健人員：請注意使用肥皂，並仔細清洗指縫和指尖。",
                "居民：從外面回家時和吃飯前，我會特別注意。",
                "保健人員：很好。重要的不是做特別的事情，而是作為每天的習慣堅持下去。"
            ],

            ko: [
                "주민: 최근 질병을 예방하기 위해 매일의 습관을 다시 살펴보고 싶다고 생각하고 있습니다.",
                "보건사: 그렇다면 먼저 손 씻는 방법부터 확인해 보면 좋겠네요.",
                "주민: 항상 물로 간단히 씻기만 하는데 그것으로는 충분하지 않나요?",
                "보건사: 비누를 사용하고 손가락 사이와 손끝까지 꼼꼼하게 씻도록 의식해 주세요.",
                "주민: 밖에서 돌아왔을 때와 식사 전에는 특히 주의하겠습니다.",
                "보건사: 좋습니다. 중요한 것은 특별한 일을 하는 것이 아니라 매일의 습관으로 계속하는 것입니다."
            ],

            vi: [
                "Cư dân: Gần đây tôi muốn xem lại những thói quen hằng ngày để phòng bệnh.",
                "Nhân viên y tế: Vậy thì trước tiên bạn có thể kiểm tra lại cách rửa tay.",
                "Cư dân: Tôi thường chỉ rửa nhanh bằng nước. Như vậy chưa đủ sao?",
                "Nhân viên y tế: Hãy dùng xà phòng và chú ý rửa kỹ cả kẽ ngón tay và đầu ngón tay.",
                "Cư dân: Tôi sẽ đặc biệt chú ý sau khi về nhà và trước bữa ăn.",
                "Nhân viên y tế: Tốt đấy. Điều quan trọng không phải làm điều gì đặc biệt mà là duy trì nó như một thói quen hằng ngày."
            ]
        }
    ),

    // =====================================================
    // 002 生活習慣を整える
    // =====================================================

    makeB1PreventIllnessDialogue(
        "b1_preventillness_002",
        "生活習慣を整える",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "最近仕事が忙しくて、睡眠時間が短くなっています。",
                target: "さいきんしごとがいそがしくて すいみんじかんがみじかくなっています",
                ruby: "<ruby>最近<rt>さいきん</rt></ruby><ruby>仕事<rt>しごと</rt></ruby>が<ruby>忙<rt>いそが</rt></ruby>しくて、<ruby>睡眠時間<rt>すいみんじかん</rt></ruby>が<ruby>短<rt>みじか</rt></ruby>くなっています。",
                romaji: "Saikin shigoto ga isogashikute, suimin jikan ga mijikaku natte imasu."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "忙しい時期でも、休養を取って体調を整えることは大切です。",
                target: "いそがしいじきでも きゅうようをとってたいちょうをととのえることはたいせつです",
                ruby: "<ruby>忙<rt>いそが</rt></ruby>しい<ruby>時期<rt>じき</rt></ruby>でも、<ruby>休養<rt>きゅうよう</rt></ruby>を<ruby>取<rt>と</rt></ruby>って<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>整<rt>ととの</rt></ruby>えることは<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Isogashii jiki demo, kyūyō o totte taichō o totonoeru koto wa taisetsu desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "食事の時間も不規則で、朝ご飯を食べない日もあります。",
                target: "しょくじのじかんもふきそくで あさごはんをたべないひもあります",
                ruby: "<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>も<ruby>不規則<rt>ふきそく</rt></ruby>で、<ruby>朝<rt>あさ</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べない<ruby>日<rt>ひ</rt></ruby>もあります。",
                romaji: "Shokuji no jikan mo fukisoku de, asagohan o tabenai hi mo arimasu."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "すべてを一度に変える必要はありません。まず一つ、続けられそうなことを決めてみましょう。",
                target: "すべてをいちどにかえるひつようはありません まずひとつ つづけられそうなことをきめてみましょう",
                ruby: "すべてを<ruby>一度<rt>いちど</rt></ruby>に<ruby>変<rt>か</rt></ruby>える<ruby>必要<rt>ひつよう</rt></ruby>はありません。まず<ruby>一<rt>ひと</rt></ruby>つ、<ruby>続<rt>つづ</rt></ruby>けられそうなことを<ruby>決<rt>き</rt></ruby>めてみましょう。",
                romaji: "Subete o ichido ni kaeru hitsuyō wa arimasen. Mazu hitotsu, tsuzukerare sō na koto o kimete mimashō."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "では、まず夜更かしを減らして、寝る時間を少し早くしてみます。",
                target: "では まずよふかしをへらして ねるじかんをすこしはやくしてみます",
                ruby: "では、まず<ruby>夜更<rt>よふ</rt></ruby>かしを<ruby>減<rt>へ</rt></ruby>らして、<ruby>寝<rt>ね</rt></ruby>る<ruby>時間<rt>じかん</rt></ruby>を<ruby>少<rt>すこ</rt></ruby>し<ruby>早<rt>はや</rt></ruby>くしてみます。",
                romaji: "Dewa, mazu yofukashi o herashite, neru jikan o sukoshi hayaku shite mimasu."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "いいですね。無理なく続けながら、自分の体調の変化も確認してみてください。",
                target: "いいですね むりなくつづけながら じぶんのたいちょうのへんかもかくにんしてみてください",
                ruby: "いいですね。<ruby>無理<rt>むり</rt></ruby>なく<ruby>続<rt>つづ</rt></ruby>けながら、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>体調<rt>たいちょう</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>も<ruby>確認<rt>かくにん</rt></ruby>してみてください。",
                romaji: "Ii desu ne. Muri naku tsuzukenagara, jibun no taichō no henka mo kakunin shite mite kudasai."
            }
        ],

        {
            ja: [
                "住民：最近仕事が忙しくて、睡眠時間が短くなっています。",
                "保健師：忙しい時期でも、休養を取って体調を整えることは大切です。",
                "住民：食事の時間も不規則で、朝ご飯を食べない日もあります。",
                "保健師：すべてを一度に変える必要はありません。まず一つ、続けられそうなことを決めてみましょう。",
                "住民：では、まず夜更かしを減らして、寝る時間を少し早くしてみます。",
                "保健師：いいですね。無理なく続けながら、自分の体調の変化も確認してみてください。"
            ],

            en: [
                "Resident: Recently, work has been busy and I have been sleeping for fewer hours.",
                "Health Professional: Even during busy periods, it is important to get enough rest and take care of your condition.",
                "Resident: My meal times are also irregular, and sometimes I skip breakfast.",
                "Health Professional: You do not need to change everything at once. First, choose one thing that you think you can continue.",
                "Resident: Then I will start by staying up late less often and going to bed a little earlier.",
                "Health Professional: Good. Continue without pushing yourself and pay attention to changes in how you feel."
            ],

            "zh-CN": [
                "居民：最近工作很忙，睡眠时间变短了。",
                "保健人员：即使在忙碌的时候，充分休息、调整身体状态也很重要。",
                "居民：吃饭时间也不规律，有时不吃早餐。",
                "保健人员：不需要一次改变所有事情。先决定一件自己能够坚持的事情吧。",
                "居民：那么，我先减少熬夜，试着早点睡。",
                "保健人员：很好。不要勉强自己，坚持的同时也注意自己的身体变化。"
            ],

            "zh-TW": [
                "居民：最近工作很忙，睡眠時間變短了。",
                "保健人員：即使在忙碌的時候，充分休息、調整身體狀態也很重要。",
                "居民：吃飯時間也不規律，有時不吃早餐。",
                "保健人員：不需要一次改變所有事情。先決定一件自己能夠堅持的事情吧。",
                "居民：那麼，我先減少熬夜，試著早點睡。",
                "保健人員：很好。不要勉強自己，堅持的同時也注意自己的身體變化。"
            ],

            ko: [
                "주민: 최근 일이 바빠서 수면 시간이 짧아지고 있습니다.",
                "보건사: 바쁜 시기에도 휴식을 취하고 몸 상태를 관리하는 것은 중요합니다.",
                "주민: 식사 시간도 불규칙하고 아침을 먹지 않는 날도 있습니다.",
                "보건사: 모든 것을 한꺼번에 바꿀 필요는 없습니다. 우선 계속할 수 있을 것 같은 한 가지를 정해 봅시다.",
                "주민: 그러면 먼저 늦게 자는 것을 줄이고 잠자는 시간을 조금 앞당겨 보겠습니다.",
                "보건사: 좋습니다. 무리하지 않고 계속하면서 자신의 몸 상태 변화도 확인해 보세요."
            ],

            vi: [
                "Cư dân: Gần đây công việc bận nên thời gian ngủ của tôi ngắn hơn.",
                "Nhân viên y tế: Ngay cả khi bận rộn, nghỉ ngơi và chăm sóc tình trạng cơ thể vẫn rất quan trọng.",
                "Cư dân: Giờ ăn cũng không đều và có ngày tôi bỏ bữa sáng.",
                "Nhân viên y tế: Bạn không cần thay đổi tất cả cùng một lúc. Trước tiên hãy chọn một việc mà bạn nghĩ mình có thể duy trì.",
                "Cư dân: Vậy trước hết tôi sẽ giảm thức khuya và thử đi ngủ sớm hơn một chút.",
                "Nhân viên y tế: Tốt đấy. Hãy tiếp tục mà không ép bản thân quá mức và theo dõi những thay đổi của cơ thể."
            ]
        }
    ),

    // =====================================================
    // 003 予防接種について確認する
    // =====================================================

    makeB1PreventIllnessDialogue(
        "b1_preventillness_003",
        "予防接種について確認する",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "自分がこれまでにどの予防接種を受けたのか、よく覚えていません。",
                target: "じぶんがこれまでにどのよぼうせっしゅをうけたのか よくおぼえていません",
                ruby: "<ruby>自分<rt>じぶん</rt></ruby>がこれまでにどの<ruby>予防接種<rt>よぼうせっしゅ</rt></ruby>を<ruby>受<rt>う</rt></ruby>けたのか、よく<ruby>覚<rt>おぼ</rt></ruby>えていません。",
                romaji: "Jibun ga kore made ni dono yobō sesshu o uketa no ka, yoku oboete imasen."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "接種の記録や母子健康手帳など、確認できるものはありますか。",
                target: "せっしゅのきろくやぼしけんこうてちょうなど かくにんできるものはありますか",
                ruby: "<ruby>接種<rt>せっしゅ</rt></ruby>の<ruby>記録<rt>きろく</rt></ruby>や<ruby>母子健康手帳<rt>ぼしけんこうてちょう</rt></ruby>など、<ruby>確認<rt>かくにん</rt></ruby>できるものはありますか。",
                romaji: "Sesshu no kiroku ya boshi kenkō techō nado, kakunin dekiru mono wa arimasu ka."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "古い手帳が家にあると思いますが、内容を見たことがありません。",
                target: "ふるいてちょうがいえにあるとおもいますが ないようをみたことがありません",
                ruby: "<ruby>古<rt>ふる</rt></ruby>い<ruby>手帳<rt>てちょう</rt></ruby>が<ruby>家<rt>いえ</rt></ruby>にあると<ruby>思<rt>おも</rt></ruby>いますが、<ruby>内容<rt>ないよう</rt></ruby>を<ruby>見<rt>み</rt></ruby>たことがありません。",
                romaji: "Furui techō ga ie ni aru to omoimasu ga, naiyō o mita koto ga arimasen."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "一度確認してみるといいですね。必要な予防接種は、年齢や健康状態などによって異なる場合があります。",
                target: "いちどかくにんしてみるといいですね ひつようなよぼうせっしゅは ねんれいやけんこうじょうたいなどによってことなるばあいがあります",
                ruby: "<ruby>一度<rt>いちど</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>してみるといいですね。<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>予防接種<rt>よぼうせっしゅ</rt></ruby>は、<ruby>年齢<rt>ねんれい</rt></ruby>や<ruby>健康状態<rt>けんこうじょうたい</rt></ruby>などによって<ruby>異<rt>こと</rt></ruby>なる<ruby>場合<rt>ばあい</rt></ruby>があります。",
                romaji: "Ichido kakunin shite miru to ii desu ne. Hitsuyō na yobō sesshu wa, nenrei ya kenkō jōtai nado ni yotte kotonaru baai ga arimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "インターネットの情報だけで、自分で判断してもいいですか。",
                target: "いんたーねっとのじょうほうだけで じぶんではんだんしてもいいですか",
                ruby: "インターネットの<ruby>情報<rt>じょうほう</rt></ruby>だけで、<ruby>自分<rt>じぶん</rt></ruby>で<ruby>判断<rt>はんだん</rt></ruby>してもいいですか。",
                romaji: "Intānetto no jōhō dake de, jibun de handan shite mo ii desu ka."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "一般的な情報は参考になりますが、自分の場合については医療機関や自治体に確認すると安心です。",
                target: "いっぱんてきなじょうほうはさんこうになりますが じぶんのばあいについてはいりょうきかんやじちたいにかくにんするとあんしんです",
                ruby: "<ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>情報<rt>じょうほう</rt></ruby>は<ruby>参考<rt>さんこう</rt></ruby>になりますが、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>については<ruby>医療機関<rt>いりょうきかん</rt></ruby>や<ruby>自治体<rt>じちたい</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>すると<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Ippanteki na jōhō wa sankō ni narimasu ga, jibun no baai ni tsuite wa iryō kikan ya jichitai ni kakunin suru to anshin desu."
            }
        ],

        {
            ja: [
                "住民：自分がこれまでにどの予防接種を受けたのか、よく覚えていません。",
                "保健師：接種の記録や母子健康手帳など、確認できるものはありますか。",
                "住民：古い手帳が家にあると思いますが、内容を見たことがありません。",
                "保健師：一度確認してみるといいですね。必要な予防接種は、年齢や健康状態などによって異なる場合があります。",
                "住民：インターネットの情報だけで、自分で判断してもいいですか。",
                "保健師：一般的な情報は参考になりますが、自分の場合については医療機関や自治体に確認すると安心です。"
            ],

            en: [
                "Resident: I do not clearly remember which vaccinations I have received so far.",
                "Health Professional: Do you have any vaccination records or a maternal and child health handbook that you can check?",
                "Resident: I think there is an old handbook at home, but I have never looked at its contents.",
                "Health Professional: It would be good to check it once. Vaccinations that may be needed can differ depending on age, health condition, and other factors.",
                "Resident: Is it okay to decide for myself using only information from the internet?",
                "Health Professional: General information can be useful, but for your individual situation it is reassuring to check with a medical institution or local government."
            ],

            "zh-CN": [
                "居民：我不太记得自己以前接种过哪些疫苗。",
                "保健人员：您有接种记录或母子健康手册之类可以确认的资料吗？",
                "居民：我想家里有一本旧手册，不过从来没有看过里面的内容。",
                "保健人员：可以先确认一下。需要接种的疫苗可能根据年龄、健康状况等有所不同。",
                "居民：只根据网上的信息自己判断可以吗？",
                "保健人员：一般信息可以作为参考，不过关于您个人的情况，向医疗机构或自治体确认会更安心。"
            ],

            "zh-TW": [
                "居民：我不太記得自己以前接種過哪些疫苗。",
                "保健人員：您有接種紀錄或母子健康手冊之類可以確認的資料嗎？",
                "居民：我想家裡有一本舊手冊，不過從來沒有看過裡面的內容。",
                "保健人員：可以先確認一下。需要接種的疫苗可能根據年齡、健康狀況等有所不同。",
                "居民：只根據網路上的資訊自己判斷可以嗎？",
                "保健人員：一般資訊可以作為參考，不過關於您個人的情況，向醫療機構或自治體確認會更安心。"
            ],

            ko: [
                "주민: 지금까지 어떤 예방 접종을 받았는지 잘 기억하지 못합니다.",
                "보건사: 접종 기록이나 모자 건강 수첩 등 확인할 수 있는 것이 있나요?",
                "주민: 집에 오래된 수첩이 있는 것 같지만 내용을 본 적은 없습니다.",
                "보건사: 한 번 확인해 보면 좋겠네요. 필요한 예방 접종은 나이나 건강 상태 등에 따라 달라질 수 있습니다.",
                "주민: 인터넷 정보만 보고 제가 직접 판단해도 되나요?",
                "보건사: 일반적인 정보는 참고가 되지만 개인의 경우에는 의료기관이나 지자체에 확인하면 더 안심할 수 있습니다."
            ],

            vi: [
                "Cư dân: Tôi không nhớ rõ mình đã tiêm những loại vắc-xin nào.",
                "Nhân viên y tế: Bạn có hồ sơ tiêm chủng hoặc sổ sức khỏe mẹ và bé để kiểm tra không?",
                "Cư dân: Tôi nghĩ ở nhà có một cuốn sổ cũ, nhưng tôi chưa bao giờ xem nội dung.",
                "Nhân viên y tế: Bạn nên kiểm tra một lần. Những loại vắc-xin cần thiết có thể khác nhau tùy tuổi, tình trạng sức khỏe và các yếu tố khác.",
                "Cư dân: Tôi có thể tự quyết định chỉ dựa vào thông tin trên internet không?",
                "Nhân viên y tế: Thông tin chung có thể hữu ích, nhưng với trường hợp của riêng bạn, nên xác nhận với cơ sở y tế hoặc chính quyền địa phương."
            ]
        }
    ),

    // =====================================================
    // 004 健康診断の結果を活用する
    // =====================================================

    makeB1PreventIllnessDialogue(
        "b1_preventillness_004",
        "健康診断の結果を活用する",

        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "健康診断の結果が届きましたが、数字を見てもよくわかりません。",
                target: "けんこうしんだんのけっかがとどきましたが すうじをみてもよくわかりません",
                ruby: "<ruby>健康診断<rt>けんこうしんだん</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>が<ruby>届<rt>とど</rt></ruby>きましたが、<ruby>数字<rt>すうじ</rt></ruby>を<ruby>見<rt>み</rt></ruby>てもよくわかりません。",
                romaji: "Kenkō shindan no kekka ga todokimashita ga, sūji o mite mo yoku wakarimasen."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "結果の中に、再検査や医療機関への相談をすすめる説明はありますか。",
                target: "けっかのなかに さいけんさやいりょうきかんへのそうだんをすすめるせつめいはありますか",
                ruby: "<ruby>結果<rt>けっか</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に、<ruby>再検査<rt>さいけんさ</rt></ruby>や<ruby>医療機関<rt>いりょうきかん</rt></ruby>への<ruby>相談<rt>そうだん</rt></ruby>をすすめる<ruby>説明<rt>せつめい</rt></ruby>はありますか。",
                romaji: "Kekka no naka ni, saikensa ya iryō kikan e no sōdan o susumeru setsumei wa arimasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "一つの項目に注意が必要と書いてありますが、今は特に症状がありません。",
                target: "ひとつのこうもくにちゅういがひつようとかいてありますが いまはとくにしょうじょうがありません",
                ruby: "<ruby>一<rt>ひと</rt></ruby>つの<ruby>項目<rt>こうもく</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>と<ruby>書<rt>か</rt></ruby>いてありますが、<ruby>今<rt>いま</rt></ruby>は<ruby>特<rt>とく</rt></ruby>に<ruby>症状<rt>しょうじょう</rt></ruby>がありません。",
                romaji: "Hitotsu no kōmoku ni chūi ga hitsuyō to kaite arimasu ga, ima wa toku ni shōjō ga arimasen."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "症状がない場合でも、結果に書かれた案内を確認して、必要な対応を取ることが大切です。",
                target: "しょうじょうがないばあいでも けっかにかかれたあんないをかくにんして ひつようなたいおうをとることがたいせつです",
                ruby: "<ruby>症状<rt>しょうじょう</rt></ruby>がない<ruby>場合<rt>ばあい</rt></ruby>でも、<ruby>結果<rt>けっか</rt></ruby>に<ruby>書<rt>か</rt></ruby>かれた<ruby>案内<rt>あんない</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>して、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>対応<rt>たいおう</rt></ruby>を<ruby>取<rt>と</rt></ruby>ることが<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Shōjō ga nai baai demo, kekka ni kakareta annai o kakunin shite, hitsuyō na taiō o toru koto ga taisetsu desu."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "去年の結果も残しておけば、変化を比べることができますか。",
                target: "きょねんのけっかものこしておけば へんかをくらべることができますか",
                ruby: "<ruby>去年<rt>きょねん</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>も<ruby>残<rt>のこ</rt></ruby>しておけば、<ruby>変化<rt>へんか</rt></ruby>を<ruby>比<rt>くら</rt></ruby>べることができますか。",
                romaji: "Kyonen no kekka mo nokoshite okeba, henka o kuraberu koto ga dekimasu ka."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "はい。毎年の結果を保管しておくと、自分の健康状態の変化を振り返るときに役立ちます。",
                target: "はい まいとしのけっかをほかんしておくと じぶんのけんこうじょうたいのへんかをふりかえるときにやくだちます",
                ruby: "はい。<ruby>毎年<rt>まいとし</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>を<ruby>保管<rt>ほかん</rt></ruby>しておくと、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>健康状態<rt>けんこうじょうたい</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>を<ruby>振<rt>ふ</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>るときに<ruby>役立<rt>やくだ</rt></ruby>ちます。",
                romaji: "Hai. Maitoshi no kekka o hokan shite oku to, jibun no kenkō jōtai no henka o furikaeru toki ni yakudachimasu."
            }
        ],

        {
            ja: [
                "社員：健康診断の結果が届きましたが、数字を見てもよくわかりません。",
                "保健師：結果の中に、再検査や医療機関への相談をすすめる説明はありますか。",
                "社員：一つの項目に注意が必要と書いてありますが、今は特に症状がありません。",
                "保健師：症状がない場合でも、結果に書かれた案内を確認して、必要な対応を取ることが大切です。",
                "社員：去年の結果も残しておけば、変化を比べることができますか。",
                "保健師：はい。毎年の結果を保管しておくと、自分の健康状態の変化を振り返るときに役立ちます。"
            ],

            en: [
                "Worker: My health checkup results arrived, but I do not really understand the numbers.",
                "Health Professional: Is there any explanation recommending another examination or consultation with a medical institution?",
                "Worker: One item says that attention is needed, but I do not have any particular symptoms now.",
                "Health Professional: Even if you have no symptoms, it is important to check the guidance written in the results and take any necessary action.",
                "Worker: If I keep last year's results too, can I compare the changes?",
                "Health Professional: Yes. Keeping your results each year can help you review changes in your health condition."
            ],

            "zh-CN": [
                "员工：健康检查的结果寄来了，但是看数字也不太明白。",
                "保健人员：结果中有没有建议复查或咨询医疗机构的说明？",
                "员工：有一个项目写着需要注意，不过现在没有特别的症状。",
                "保健人员：即使没有症状，也应该确认结果中的说明，并采取必要的措施。",
                "员工：如果保留去年的结果，也可以比较变化吗？",
                "保健人员：可以。保存每年的结果，有助于回顾自己健康状况的变化。"
            ],

            "zh-TW": [
                "員工：健康檢查的結果寄來了，但是看數字也不太明白。",
                "保健人員：結果中有沒有建議複檢或諮詢醫療機構的說明？",
                "員工：有一個項目寫著需要注意，不過現在沒有特別的症狀。",
                "保健人員：即使沒有症狀，也應該確認結果中的說明，並採取必要的措施。",
                "員工：如果保留去年的結果，也可以比較變化嗎？",
                "保健人員：可以。保存每年的結果，有助於回顧自己健康狀況的變化。"
            ],

            ko: [
                "직원: 건강 검진 결과가 왔지만 숫자를 봐도 잘 모르겠습니다.",
                "보건사: 결과 안에 재검사나 의료기관 상담을 권하는 설명이 있나요?",
                "직원: 한 항목에 주의가 필요하다고 적혀 있지만 지금은 특별한 증상이 없습니다.",
                "보건사: 증상이 없는 경우에도 결과에 적힌 안내를 확인하고 필요한 대응을 하는 것이 중요합니다.",
                "직원: 작년 결과도 보관하면 변화를 비교할 수 있나요?",
                "보건사: 네. 매년의 결과를 보관하면 자신의 건강 상태 변화를 돌아볼 때 도움이 됩니다."
            ],

            vi: [
                "Nhân viên: Kết quả khám sức khỏe đã đến, nhưng nhìn các con số tôi không hiểu rõ.",
                "Nhân viên y tế: Trong kết quả có hướng dẫn nào khuyên kiểm tra lại hoặc tư vấn tại cơ sở y tế không?",
                "Nhân viên: Có một mục ghi rằng cần chú ý, nhưng hiện tại tôi không có triệu chứng đặc biệt.",
                "Nhân viên y tế: Ngay cả khi không có triệu chứng, điều quan trọng là kiểm tra hướng dẫn trong kết quả và thực hiện những việc cần thiết.",
                "Nhân viên: Nếu tôi giữ cả kết quả năm ngoái, tôi có thể so sánh sự thay đổi không?",
                "Nhân viên y tế: Có. Giữ kết quả hằng năm sẽ hữu ích khi nhìn lại những thay đổi trong tình trạng sức khỏe của bạn."
            ]
        }
    ),

    // =====================================================
    // 005 職場で感染を広げないようにする
    // =====================================================

    makeB1PreventIllnessDialogue(
        "b1_preventillness_005",
        "職場で感染を広げないようにする",

        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "最近、職場でせきをしている人が増えているので、少し心配です。",
                target: "さいきん しょくばでせきをしているひとがふえているので すこししんぱいです",
                ruby: "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>職場<rt>しょくば</rt></ruby>でせきをしている<ruby>人<rt>ひと</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えているので、<ruby>少<rt>すこ</rt></ruby>し<ruby>心配<rt>しんぱい</rt></ruby>です。",
                romaji: "Saikin, shokuba de seki o shite iru hito ga fuete iru node, sukoshi shinpai desu."
            },
            {
                label: "話者A",
                key: "coworker",
                name: "同僚",
                line: "私も気になっています。手洗いや換気など、できることを続けた方がいいですね。",
                target: "わたしもきになっています てあらいやかんきなど できることをつづけたほうがいいですね",
                ruby: "<ruby>私<rt>わたし</rt></ruby>も<ruby>気<rt>き</rt></ruby>になっています。<ruby>手洗<rt>てあら</rt></ruby>いや<ruby>換気<rt>かんき</rt></ruby>など、できることを<ruby>続<rt>つづ</rt></ruby>けた<ruby>方<rt>ほう</rt></ruby>がいいですね。",
                romaji: "Watashi mo ki ni natte imasu. Tearai ya kanki nado, dekiru koto o tsuzuketa hō ga ii desu ne."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "自分にせきやくしゃみがあるときは、周りの人への配慮も必要ですね。",
                target: "じぶんにせきやくしゃみがあるときは まわりのひとへのはいりょもひつようですね",
                ruby: "<ruby>自分<rt>じぶん</rt></ruby>にせきやくしゃみがあるときは、<ruby>周<rt>まわ</rt></ruby>りの<ruby>人<rt>ひと</rt></ruby>への<ruby>配慮<rt>はいりょ</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>ですね。",
                romaji: "Jibun ni seki ya kushami ga aru toki wa, mawari no hito e no hairyo mo hitsuyō desu ne."
            },
            {
                label: "話者A",
                key: "coworker",
                name: "同僚",
                line: "そうですね。せきエチケットを意識して、体調が悪いときは無理をしないことも大切です。",
                target: "そうですね せきえちけっとをいしきして たいちょうがわるいときはむりをしないこともたいせつです",
                ruby: "そうですね。せきエチケットを<ruby>意識<rt>いしき</rt></ruby>して、<ruby>体調<rt>たいちょう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いときは<ruby>無理<rt>むり</rt></ruby>をしないことも<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Sō desu ne. Seki echiketto o ishiki shite, taichō ga warui toki wa muri o shinai koto mo taisetsu desu."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "仕事が忙しいと、少しくらいなら出勤しようと思ってしまうことがあります。",
                target: "しごとがいそがしいと すこしくらいならしゅっきんしようとおもってしまうことがあります",
                ruby: "<ruby>仕事<rt>しごと</rt></ruby>が<ruby>忙<rt>いそが</rt></ruby>しいと、<ruby>少<rt>すこ</rt></ruby>しくらいなら<ruby>出勤<rt>しゅっきん</rt></ruby>しようと<ruby>思<rt>おも</rt></ruby>ってしまうことがあります。",
                romaji: "Shigoto ga isogashii to, sukoshi kurai nara shukkin shiyō to omotte shimau koto ga arimasu."
            },
            {
                label: "話者A",
                key: "coworker",
                name: "同僚",
                line: "その気持ちはわかりますが、職場のルールを確認して、早めに上司へ相談した方がいいと思います。",
                target: "そのきもちはわかりますが しょくばのるーるをかくにんして はやめにじょうしへそうだんしたほうがいいとおもいます",
                ruby: "その<ruby>気持<rt>きも</rt></ruby>ちはわかりますが、<ruby>職場<rt>しょくば</rt></ruby>のルールを<ruby>確認<rt>かくにん</rt></ruby>して、<ruby>早<rt>はや</rt></ruby>めに<ruby>上司<rt>じょうし</rt></ruby>へ<ruby>相談<rt>そうだん</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいいと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Sono kimochi wa wakarimasu ga, shokuba no rūru o kakunin shite, hayame ni jōshi e sōdan shita hō ga ii to omoimasu."
            }
        ],

        {
            ja: [
                "社員：最近、職場でせきをしている人が増えているので、少し心配です。",
                "同僚：私も気になっています。手洗いや換気など、できることを続けた方がいいですね。",
                "社員：自分にせきやくしゃみがあるときは、周りの人への配慮も必要ですね。",
                "同僚：そうですね。せきエチケットを意識して、体調が悪いときは無理をしないことも大切です。",
                "社員：仕事が忙しいと、少しくらいなら出勤しようと思ってしまうことがあります。",
                "同僚：その気持ちはわかりますが、職場のルールを確認して、早めに上司へ相談した方がいいと思います。"
            ],

            en: [
                "Worker: Recently, more people have been coughing at work, so I am a little worried.",
                "Coworker: I have noticed that too. We should continue things we can do, such as washing our hands and ventilating the room.",
                "Worker: When I have a cough or sneeze, I also need to be considerate of the people around me.",
                "Coworker: That's right. It is important to follow cough etiquette and not push yourself when you feel unwell.",
                "Worker: When work is busy, I sometimes think I should go to work if my symptoms are only mild.",
                "Coworker: I understand that feeling, but I think you should check the workplace rules and talk to your supervisor early."
            ],

            "zh-CN": [
                "员工：最近职场里咳嗽的人增加了，所以我有点担心。",
                "同事：我也注意到了。洗手、通风等能做的事情还是应该继续。",
                "员工：自己有咳嗽或打喷嚏时，也需要考虑周围的人吧。",
                "同事：是的。注意咳嗽礼仪，身体不舒服时不要勉强自己也很重要。",
                "员工：工作忙的时候，有时会想如果只是稍微不舒服还是去上班吧。",
                "同事：我理解这种心情，不过最好确认职场规定，并尽早和上司商量。"
            ],

            "zh-TW": [
                "員工：最近職場裡咳嗽的人增加了，所以我有點擔心。",
                "同事：我也注意到了。洗手、通風等能做的事情還是應該繼續。",
                "員工：自己有咳嗽或打噴嚏時，也需要考慮周圍的人吧。",
                "同事：是的。注意咳嗽禮儀，身體不舒服時不要勉強自己也很重要。",
                "員工：工作忙的時候，有時會想如果只是稍微不舒服還是去上班吧。",
                "同事：我理解這種心情，不過最好確認職場規定，並儘早和上司商量。"
            ],

            ko: [
                "직원: 최근 직장에서 기침하는 사람이 늘어서 조금 걱정됩니다.",
                "동료: 저도 신경 쓰입니다. 손 씻기와 환기 등 할 수 있는 일을 계속하는 편이 좋겠네요.",
                "직원: 제가 기침이나 재채기를 할 때는 주변 사람에 대한 배려도 필요하겠네요.",
                "동료: 그렇습니다. 기침 예절을 지키고 몸이 좋지 않을 때 무리하지 않는 것도 중요합니다.",
                "직원: 일이 바쁘면 조금 아픈 정도라면 출근해야겠다고 생각할 때가 있습니다.",
                "동료: 그 마음은 이해하지만 직장 규칙을 확인하고 일찍 상사와 상담하는 편이 좋다고 생각합니다."
            ],

            vi: [
                "Nhân viên: Gần đây số người ho ở nơi làm việc tăng lên nên tôi hơi lo.",
                "Đồng nghiệp: Tôi cũng để ý điều đó. Chúng ta nên tiếp tục những việc có thể làm như rửa tay và thông gió.",
                "Nhân viên: Khi bản thân ho hoặc hắt hơi, cũng cần quan tâm đến những người xung quanh.",
                "Đồng nghiệp: Đúng vậy. Chú ý phép lịch sự khi ho và không cố quá khi cảm thấy không khỏe cũng rất quan trọng.",
                "Nhân viên: Khi công việc bận, đôi khi tôi nghĩ nếu chỉ hơi khó chịu thì vẫn nên đi làm.",
                "Đồng nghiệp: Tôi hiểu cảm giác đó, nhưng nên kiểm tra quy định của nơi làm việc và trao đổi sớm với cấp trên."
            ]
        }
    ),

    // =====================================================
    // 006 食品の安全に気をつける
    // =====================================================

    makeB1PreventIllnessDialogue(
        "b1_preventillness_006",
        "食品の安全に気をつける",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "作った料理を長い時間、部屋に置いたままにしてしまうことがあります。",
                target: "つくったりょうりをながいじかん へやにおいたままにしてしまうことがあります",
                ruby: "<ruby>作<rt>つく</rt></ruby>った<ruby>料理<rt>りょうり</rt></ruby>を<ruby>長<rt>なが</rt></ruby>い<ruby>時間<rt>じかん</rt></ruby>、<ruby>部屋<rt>へや</rt></ruby>に<ruby>置<rt>お</rt></ruby>いたままにしてしまうことがあります。",
                romaji: "Tsukutta ryōri o nagai jikan, heya ni oita mama ni shite shimau koto ga arimasu."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "食品は種類によって保存方法が違うので、表示や保存方法を確認することが大切です。",
                target: "しょくひんはしゅるいによってほぞんほうほうがちがうので ひょうじやほぞんほうほうをかくにんすることがたいせつです",
                ruby: "<ruby>食品<rt>しょくひん</rt></ruby>は<ruby>種類<rt>しゅるい</rt></ruby>によって<ruby>保存方法<rt>ほぞんほうほう</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>うので、<ruby>表示<rt>ひょうじ</rt></ruby>や<ruby>保存方法<rt>ほぞんほうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>することが<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Shokuhin wa shurui ni yotte hozon hōhō ga chigau node, hyōji ya hozon hōhō o kakunin suru koto ga taisetsu desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "見た目やにおいに問題がなければ、食べても大丈夫だと思っていました。",
                target: "みためやにおいにもんだいがなければ たべてもだいじょうぶだとおもっていました",
                ruby: "<ruby>見<rt>み</rt></ruby>た<ruby>目<rt>め</rt></ruby>やにおいに<ruby>問題<rt>もんだい</rt></ruby>がなければ、<ruby>食<rt>た</rt></ruby>べても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>っていました。",
                romaji: "Mitame ya nioi ni mondai ga nakereba, tabete mo daijōbu da to omotte imashita."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "見た目だけでは判断できないこともあるので、保存時間や状態にも注意してください。",
                target: "みためだけでははんだんできないこともあるので ほぞんじかんやじょうたいにもちゅういしてください",
                ruby: "<ruby>見<rt>み</rt></ruby>た<ruby>目<rt>め</rt></ruby>だけでは<ruby>判断<rt>はんだん</rt></ruby>できないこともあるので、<ruby>保存時間<rt>ほぞんじかん</rt></ruby>や<ruby>状態<rt>じょうたい</rt></ruby>にも<ruby>注意<rt>ちゅうい</rt></ruby>してください。",
                romaji: "Mitame dake de wa handan dekinai koto mo aru node, hozon jikan ya jōtai ni mo chūi shite kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "料理をする前の手洗いや、調理器具を清潔にすることも必要ですね。",
                target: "りょうりをするまえのてあらいや ちょうりきぐをせいけつにすることもひつようですね",
                ruby: "<ruby>料理<rt>りょうり</rt></ruby>をする<ruby>前<rt>まえ</rt></ruby>の<ruby>手洗<rt>てあら</rt></ruby>いや、<ruby>調理器具<rt>ちょうりきぐ</rt></ruby>を<ruby>清潔<rt>せいけつ</rt></ruby>にすることも<ruby>必要<rt>ひつよう</rt></ruby>ですね。",
                romaji: "Ryōri o suru mae no tearai ya, chōri kigu o seiketsu ni suru koto mo hitsuyō desu ne."
            },
            {
                label: "話者A",
                key: "healthStaff",
                name: "保健師",
                line: "そうですね。買うとき、保存するとき、調理するとき、それぞれの段階で気をつけることが大切です。",
                target: "そうですね かうとき ほぞんするとき ちょうりするとき それぞれのだんかいできをつけることがたいせつです",
                ruby: "そうですね。<ruby>買<rt>か</rt></ruby>うとき、<ruby>保存<rt>ほぞん</rt></ruby>するとき、<ruby>調理<rt>ちょうり</rt></ruby>するとき、それぞれの<ruby>段階<rt>だんかい</rt></ruby>で<ruby>気<rt>き</rt></ruby>をつけることが<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Sō desu ne. Kau toki, hozon suru toki, chōri suru toki, sorezore no dankai de ki o tsukeru koto ga taisetsu desu."
            }
        ],

        {
            ja: [
                "住民：作った料理を長い時間、部屋に置いたままにしてしまうことがあります。",
                "保健師：食品は種類によって保存方法が違うので、表示や保存方法を確認することが大切です。",
                "住民：見た目やにおいに問題がなければ、食べても大丈夫だと思っていました。",
                "保健師：見た目だけでは判断できないこともあるので、保存時間や状態にも注意してください。",
                "住民：料理をする前の手洗いや、調理器具を清潔にすることも必要ですね。",
                "保健師：そうですね。買うとき、保存するとき、調理するとき、それぞれの段階で気をつけることが大切です。"
            ],

            en: [
                "Resident: Sometimes I leave cooked food sitting in the room for a long time.",
                "Health Professional: Storage methods differ depending on the food, so it is important to check the label and storage instructions.",
                "Resident: I thought it was okay to eat food if its appearance and smell seemed normal.",
                "Health Professional: Sometimes you cannot judge only by appearance, so pay attention to storage time and condition as well.",
                "Resident: Washing hands before cooking and keeping cooking utensils clean are also necessary, right?",
                "Health Professional: Yes. It is important to be careful at each stage: buying, storing, and cooking food."
            ],

            "zh-CN": [
                "居民：有时我会把做好的饭菜长时间放在房间里。",
                "保健人员：不同食品的保存方法不同，所以确认标签和保存方法很重要。",
                "居民：我以前以为只要外观和气味没有问题，就可以吃。",
                "保健人员：有时不能只通过外观判断，因此也要注意保存时间和状态。",
                "居民：做饭前洗手和保持烹饪工具清洁也很必要吧。",
                "保健人员：是的。购买、保存和烹饪，每个阶段都要注意。"
            ],

            "zh-TW": [
                "居民：有時我會把做好的飯菜長時間放在房間裡。",
                "保健人員：不同食品的保存方法不同，所以確認標籤和保存方法很重要。",
                "居民：我以前以為只要外觀和氣味沒有問題，就可以吃。",
                "保健人員：有時不能只透過外觀判斷，因此也要注意保存時間和狀態。",
                "居民：做飯前洗手和保持烹飪工具清潔也很必要吧。",
                "保健人員：是的。購買、保存和烹飪，每個階段都要注意。"
            ],

            ko: [
                "주민: 만든 음식을 오랫동안 방에 그대로 두는 경우가 있습니다.",
                "보건사: 식품은 종류에 따라 보관 방법이 다르므로 표시와 보관 방법을 확인하는 것이 중요합니다.",
                "주민: 겉모습이나 냄새에 문제가 없으면 먹어도 괜찮다고 생각했습니다.",
                "보건사: 겉모습만으로 판단할 수 없는 경우도 있으므로 보관 시간과 상태에도 주의해 주세요.",
                "주민: 요리하기 전 손 씻기와 조리 도구를 깨끗하게 하는 것도 필요하겠네요.",
                "보건사: 그렇습니다. 구입할 때, 보관할 때, 조리할 때 각각의 단계에서 주의하는 것이 중요합니다."
            ],

            vi: [
                "Cư dân: Đôi khi tôi để thức ăn đã nấu trong phòng khá lâu.",
                "Nhân viên y tế: Cách bảo quản khác nhau tùy loại thực phẩm, nên điều quan trọng là kiểm tra nhãn và hướng dẫn bảo quản.",
                "Cư dân: Tôi từng nghĩ nếu hình thức và mùi không có vấn đề thì có thể ăn được.",
                "Nhân viên y tế: Có những trường hợp không thể đánh giá chỉ bằng vẻ ngoài, nên cũng cần chú ý thời gian và tình trạng bảo quản.",
                "Cư dân: Rửa tay trước khi nấu và giữ dụng cụ nấu ăn sạch sẽ cũng cần thiết đúng không?",
                "Nhân viên y tế: Đúng vậy. Điều quan trọng là chú ý ở từng giai đoạn: mua, bảo quản và nấu ăn."
            ]
        }
    ),

    // =====================================================
    // 007 歯の健康を守る
    // =====================================================

    makeB1PreventIllnessDialogue(
        "b1_preventillness_007",
        "歯の健康を守る",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "今は歯が痛くないのですが、歯医者に行った方がいいのでしょうか。",
                target: "いまははがいたくないのですが はいしゃにいったほうがいいのでしょうか",
                ruby: "<ruby>今<rt>いま</rt></ruby>は<ruby>歯<rt>は</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くないのですが、<ruby>歯医者<rt>はいしゃ</rt></ruby>に<ruby>行<rt>い</rt></ruby>った<ruby>方<rt>ほう</rt></ruby>がいいのでしょうか。",
                romaji: "Ima wa ha ga itakunai no desu ga, haisha ni itta hō ga ii no deshō ka."
            },
            {
                label: "話者A",
                key: "dentist",
                name: "歯科医師",
                line: "痛みがなくても、口の中の状態を確認するために検診を受ける方法があります。",
                target: "いたみがなくても くちのなかのじょうたいをかくにんするためにけんしんをうけるほうほうがあります",
                ruby: "<ruby>痛<rt>いた</rt></ruby>みがなくても、<ruby>口<rt>くち</rt></ruby>の<ruby>中<rt>なか</rt></ruby>の<ruby>状態<rt>じょうたい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>するために<ruby>検診<rt>けんしん</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける<ruby>方法<rt>ほうほう</rt></ruby>があります。",
                romaji: "Itami ga nakute mo, kuchi no naka no jōtai o kakunin suru tame ni kenshin o ukeru hōhō ga arimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "毎日歯を磨いているので、それだけで十分だと思っていました。",
                target: "まいにちはをみがいているので それだけでじゅうぶんだとおもっていました",
                ruby: "<ruby>毎日<rt>まいにち</rt></ruby><ruby>歯<rt>は</rt></ruby>を<ruby>磨<rt>みが</rt></ruby>いているので、それだけで<ruby>十分<rt>じゅうぶん</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>っていました。",
                romaji: "Mainichi ha o migaite iru node, sore dake de jūbun da to omotte imashita."
            },
            {
                label: "話者A",
                key: "dentist",
                name: "歯科医師",
                line: "毎日の歯磨きは大切ですが、自分では気づきにくい変化が見つかることもあります。",
                target: "まいにちのはみがきはたいせつですが じぶんではきづきにくいへんかがみつかることもあります",
                ruby: "<ruby>毎日<rt>まいにち</rt></ruby>の<ruby>歯磨<rt>はみが</rt></ruby>きは<ruby>大切<rt>たいせつ</rt></ruby>ですが、<ruby>自分<rt>じぶん</rt></ruby>では<ruby>気<rt>き</rt></ruby>づきにくい<ruby>変化<rt>へんか</rt></ruby>が<ruby>見<rt>み</rt></ruby>つかることもあります。",
                romaji: "Mainichi no hamigaki wa taisetsu desu ga, jibun de wa kizukinikui henka ga mitsukaru koto mo arimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "自分に合った歯磨きの方法も教えてもらえますか。",
                target: "じぶんにあったはみがきのほうほうもおしえてもらえますか",
                ruby: "<ruby>自分<rt>じぶん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>った<ruby>歯磨<rt>はみが</rt></ruby>きの<ruby>方法<rt>ほうほう</rt></ruby>も<ruby>教<rt>おし</rt></ruby>えてもらえますか。",
                romaji: "Jibun ni atta hamigaki no hōhō mo oshiete moraemasu ka."
            },
            {
                label: "話者A",
                key: "dentist",
                name: "歯科医師",
                line: "もちろんです。歯や歯ぐきの状態を確認しながら、磨き方について一緒に考えましょう。",
                target: "もちろんです はやはぐきのじょうたいをかくにんしながら みがきかたについていっしょにかんがえましょう",
                ruby: "もちろんです。<ruby>歯<rt>は</rt></ruby>や<ruby>歯<rt>は</rt></ruby>ぐきの<ruby>状態<rt>じょうたい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しながら、<ruby>磨<rt>みが</rt></ruby>き<ruby>方<rt>かた</rt></ruby>について<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Mochiron desu. Ha ya haguki no jōtai o kakunin shinagara, migakikata ni tsuite issho ni kangaemashō."
            }
        ],

        {
            ja: [
                "住民：今は歯が痛くないのですが、歯医者に行った方がいいのでしょうか。",
                "歯科医師：痛みがなくても、口の中の状態を確認するために検診を受ける方法があります。",
                "住民：毎日歯を磨いているので、それだけで十分だと思っていました。",
                "歯科医師：毎日の歯磨きは大切ですが、自分では気づきにくい変化が見つかることもあります。",
                "住民：自分に合った歯磨きの方法も教えてもらえますか。",
                "歯科医師：もちろんです。歯や歯ぐきの状態を確認しながら、磨き方について一緒に考えましょう。"
            ],

            en: [
                "Resident: My teeth do not hurt now, but should I still go to the dentist?",
                "Dentist: Even without pain, you can have a dental checkup to examine the condition inside your mouth.",
                "Resident: I brush my teeth every day, so I thought that was enough.",
                "Dentist: Daily brushing is important, but sometimes there are changes that are difficult to notice by yourself.",
                "Resident: Can you also teach me a brushing method that suits me?",
                "Dentist: Of course. We can check the condition of your teeth and gums and think together about how you should brush."
            ],

            "zh-CN": [
                "居民：现在我的牙不痛，不过还是应该去看牙医吗？",
                "牙医：即使没有疼痛，也可以通过检查确认口腔内的状态。",
                "居民：我每天刷牙，所以以前觉得这样就足够了。",
                "牙医：每天刷牙很重要，不过有时也会发现自己难以察觉的变化。",
                "居民：也可以教我适合自己的刷牙方法吗？",
                "牙医：当然可以。我们一边确认牙齿和牙龈的状态，一边一起考虑合适的刷牙方法吧。"
            ],

            "zh-TW": [
                "居民：現在我的牙不痛，不過還是應該去看牙醫嗎？",
                "牙醫：即使沒有疼痛，也可以透過檢查確認口腔內的狀態。",
                "居民：我每天刷牙，所以以前覺得這樣就足夠了。",
                "牙醫：每天刷牙很重要，不過有時也會發現自己難以察覺的變化。",
                "居民：也可以教我適合自己的刷牙方法嗎？",
                "牙醫：當然可以。我們一邊確認牙齒和牙齦的狀態，一邊一起考慮合適的刷牙方法吧。"
            ],

            ko: [
                "주민: 지금은 이가 아프지 않은데 치과에 가는 편이 좋을까요?",
                "치과 의사: 통증이 없어도 입 안의 상태를 확인하기 위해 검진을 받을 수 있습니다.",
                "주민: 매일 이를 닦고 있어서 그것만으로 충분하다고 생각했습니다.",
                "치과 의사: 매일 양치하는 것은 중요하지만 자신이 알아차리기 어려운 변화가 발견되는 경우도 있습니다.",
                "주민: 저에게 맞는 양치 방법도 알려 주실 수 있나요?",
                "치과 의사: 물론입니다. 치아와 잇몸 상태를 확인하면서 양치 방법을 함께 생각해 봅시다."
            ],

            vi: [
                "Cư dân: Hiện tại răng tôi không đau, nhưng tôi có nên đi nha sĩ không?",
                "Nha sĩ: Ngay cả khi không đau, bạn vẫn có thể khám để kiểm tra tình trạng trong miệng.",
                "Cư dân: Tôi đánh răng mỗi ngày nên từng nghĩ chỉ vậy là đủ.",
                "Nha sĩ: Đánh răng hằng ngày rất quan trọng, nhưng đôi khi có những thay đổi mà bản thân khó nhận ra.",
                "Cư dân: Tôi có thể được hướng dẫn cách đánh răng phù hợp với mình không?",
                "Nha sĩ: Tất nhiên. Chúng ta sẽ kiểm tra tình trạng răng và nướu rồi cùng nghĩ về cách đánh răng phù hợp."
            ]
        }
    ),

    // =====================================================
    // 008 家族で予防習慣を考える
    // =====================================================

    makeB1PreventIllnessDialogue(
        "b1_preventillness_008",
        "家族で予防習慣を考える",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "家族みんなで病気の予防について話し合ったことがありません。",
                target: "かぞくみんなでびょうきのよぼうについてはなしあったことがありません",
                ruby: "<ruby>家族<rt>かぞく</rt></ruby>みんなで<ruby>病気<rt>びょうき</rt></ruby>の<ruby>予防<rt>よぼう</rt></ruby>について<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>ったことがありません。",
                romaji: "Kazoku minna de byōki no yobō ni tsuite hanashiatta koto ga arimasen."
            },
            {
                label: "話者A",
                key: "family",
                name: "家族",
                line: "確かに、体調が悪くなってから考えることが多いですね。",
                target: "たしかに たいちょうがわるくなってからかんがえることがおおいですね",
                ruby: "<ruby>確<rt>たし</rt></ruby>かに、<ruby>体調<rt>たいちょう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くなってから<ruby>考<rt>かんが</rt></ruby>えることが<ruby>多<rt>おお</rt></ruby>いですね。",
                romaji: "Tashika ni, taichō ga waruku natte kara kangaeru koto ga ōi desu ne."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "子どもと高齢の母では、気をつけることも違うと思います。",
                target: "こどもとこうれいのははでは きをつけることもちがうとおもいます",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもと<ruby>高齢<rt>こうれい</rt></ruby>の<ruby>母<rt>はは</rt></ruby>では、<ruby>気<rt>き</rt></ruby>をつけることも<ruby>違<rt>ちが</rt></ruby>うと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Kodomo to kōrei no haha de wa, ki o tsukeru koto mo chigau to omoimasu."
            },
            {
                label: "話者A",
                key: "family",
                name: "家族",
                line: "そうですね。それぞれの年齢や生活に合わせて、できることを考えた方がよさそうです。",
                target: "そうですね それぞれのねんれいやせいかつにあわせて できることをかんがえたほうがよさそうです",
                ruby: "そうですね。それぞれの<ruby>年齢<rt>ねんれい</rt></ruby>や<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせて、できることを<ruby>考<rt>かんが</rt></ruby>えた<ruby>方<rt>ほう</rt></ruby>がよさそうです。",
                romaji: "Sō desu ne. Sorezore no nenrei ya seikatsu ni awasete, dekiru koto o kangaeta hō ga yosasō desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "まず、手洗いや睡眠など、家族みんなで続けられることから始めたいです。",
                target: "まず てあらいやすいみんなど かぞくみんなでつづけられることからはじめたいです",
                ruby: "まず、<ruby>手洗<rt>てあら</rt></ruby>いや<ruby>睡眠<rt>すいみん</rt></ruby>など、<ruby>家族<rt>かぞく</rt></ruby>みんなで<ruby>続<rt>つづ</rt></ruby>けられることから<ruby>始<rt>はじ</rt></ruby>めたいです。",
                romaji: "Mazu, tearai ya suimin nado, kazoku minna de tsuzukerareru koto kara hajimetai desu."
            },
            {
                label: "話者A",
                key: "family",
                name: "家族",
                line: "いいですね。完璧にすることより、お互いに声をかけながら続けることを大切にしましょう。",
                target: "いいですね かんぺきにすることより おたがいにこえをかけながらつづけることをたいせつにしましょう",
                ruby: "いいですね。<ruby>完璧<rt>かんぺき</rt></ruby>にすることより、お<ruby>互<rt>たが</rt></ruby>いに<ruby>声<rt>こえ</rt></ruby>をかけながら<ruby>続<rt>つづ</rt></ruby>けることを<ruby>大切<rt>たいせつ</rt></ruby>にしましょう。",
                romaji: "Ii desu ne. Kanpeki ni suru koto yori, otagai ni koe o kakenagara tsuzukeru koto o taisetsu ni shimashō."
            }
        ],

        {
            ja: [
                "住民：家族みんなで病気の予防について話し合ったことがありません。",
                "家族：確かに、体調が悪くなってから考えることが多いですね。",
                "住民：子どもと高齢の母では、気をつけることも違うと思います。",
                "家族：そうですね。それぞれの年齢や生活に合わせて、できることを考えた方がよさそうです。",
                "住民：まず、手洗いや睡眠など、家族みんなで続けられることから始めたいです。",
                "家族：いいですね。完璧にすることより、お互いに声をかけながら続けることを大切にしましょう。"
            ],

            en: [
                "Resident: Our whole family has never discussed how to prevent illness.",
                "Family Member: That's true. We often start thinking about it only after someone feels unwell.",
                "Resident: I think the things we need to be careful about are different for children and my elderly mother.",
                "Family Member: Yes. It seems better to think about what each person can do according to their age and lifestyle.",
                "Resident: First, I want to start with things the whole family can continue, such as handwashing and getting enough sleep.",
                "Family Member: Good idea. Rather than trying to be perfect, let's focus on continuing while reminding and supporting each other."
            ],

            "zh-CN": [
                "居民：我们全家从来没有一起讨论过如何预防疾病。",
                "家人：确实，我们经常是在身体不舒服之后才开始考虑。",
                "居民：孩子和年迈的母亲需要注意的事情应该也不一样。",
                "家人：是的。最好根据每个人的年龄和生活方式考虑能做的事情。",
                "居民：首先，我想从洗手、睡眠等全家都能坚持的事情开始。",
                "家人：很好。比起追求完美，更重要的是互相提醒、一起坚持下去。"
            ],

            "zh-TW": [
                "居民：我們全家從來沒有一起討論過如何預防疾病。",
                "家人：確實，我們經常是在身體不舒服之後才開始考慮。",
                "居民：孩子和年邁的母親需要注意的事情應該也不一樣。",
                "家人：是的。最好根據每個人的年齡和生活方式考慮能做的事情。",
                "居民：首先，我想從洗手、睡眠等全家都能堅持的事情開始。",
                "家人：很好。比起追求完美，更重要的是互相提醒、一起堅持下去。"
            ],

            ko: [
                "주민: 가족 모두가 질병 예방에 대해 함께 이야기해 본 적이 없습니다.",
                "가족: 확실히 몸이 나빠진 뒤에 생각하는 경우가 많네요.",
                "주민: 아이와 고령의 어머니는 주의해야 할 것도 다를 것 같습니다.",
                "가족: 그렇습니다. 각자의 나이와 생활에 맞춰 할 수 있는 일을 생각하는 편이 좋겠네요.",
                "주민: 우선 손 씻기와 수면 등 가족 모두가 계속할 수 있는 일부터 시작하고 싶습니다.",
                "가족: 좋습니다. 완벽하게 하는 것보다 서로 말을 걸고 도우면서 계속하는 것을 중요하게 생각합시다."
            ],

            vi: [
                "Cư dân: Cả gia đình tôi chưa từng cùng nhau nói về việc phòng bệnh.",
                "Người nhà: Đúng vậy. Chúng ta thường chỉ bắt đầu nghĩ đến điều đó sau khi sức khỏe không tốt.",
                "Cư dân: Tôi nghĩ những điều cần chú ý sẽ khác nhau giữa trẻ em và mẹ lớn tuổi.",
                "Người nhà: Đúng vậy. Có lẽ nên nghĩ đến những việc mỗi người có thể làm phù hợp với tuổi và cuộc sống của mình.",
                "Cư dân: Trước tiên, tôi muốn bắt đầu từ những việc cả gia đình có thể duy trì như rửa tay và ngủ đủ.",
                "Người nhà: Hay đấy. Thay vì cố làm mọi thứ hoàn hảo, hãy coi trọng việc nhắc nhở và hỗ trợ nhau để cùng tiếp tục."
            ]
        }
    )

];