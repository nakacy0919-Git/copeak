// =====================================================
// Japeak B1 Level
// Scene: 入学に向けて準備しよう
// File: data/japeak-b1-school-enrollment.js
// Category Key: b1_school_enrollment
// =====================================================

const b1SchoolEnrollmentLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1SchoolEnrollmentTranslations(translations) {
    const completed = {};

    b1SchoolEnrollmentLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1SchoolEnrollmentContext = {
    ja: "子どもの入学に向けて、入学手続き、必要書類、健康診断、学校用品、学校生活、給食とアレルギー、通学路、日本語支援や学校との連絡方法などについて質問したり確認したりする日本語を練習します。",

    en: "Practice Japanese for preparing a child to enter school, including enrollment procedures, required documents, health examinations, school supplies, daily school life, school lunch and allergies, routes to school, Japanese-language support, and communication with the school.",

    "zh-CN": "练习为孩子入学做准备时使用的日语，包括入学手续、必要文件、健康检查、学习用品、学校生活、学校午餐和过敏、上学路线、日语支援以及与学校的联系方法。",

    "zh-TW": "練習為孩子入學做準備時使用的日語，包括入學手續、必要文件、健康檢查、學習用品、學校生活、學校午餐和過敏、上學路線、日語支援以及與學校的聯絡方法。",

    ko: "자녀의 입학을 준비하면서 입학 절차, 필요한 서류, 건강검진, 학교 준비물, 학교생활, 급식과 알레르기, 통학로, 일본어 지원 및 학교와의 연락 방법에 대해 질문하고 확인하는 일본어를 연습합니다.",

    vi: "Luyện tiếng Nhật để chuẩn bị cho trẻ nhập học, bao gồm thủ tục nhập học, giấy tờ cần thiết, khám sức khỏe, đồ dùng học tập, sinh hoạt trường học, bữa trưa và dị ứng, đường đi học, hỗ trợ tiếng Nhật và cách liên lạc với nhà trường.",

    tl: "Practice Japanese for preparing a child to enter school, including enrollment procedures, documents, health checks, school supplies, school life, lunch and allergies, routes to school, Japanese support, and communication with the school.",

    id: "Latihan bahasa Jepang untuk mempersiapkan anak masuk sekolah, termasuk prosedur pendaftaran, dokumen yang diperlukan, pemeriksaan kesehatan, perlengkapan sekolah, kehidupan sekolah, makan siang dan alergi, rute ke sekolah, dukungan bahasa Jepang, dan komunikasi dengan sekolah.",

    th: "ฝึกภาษาญี่ปุ่นสำหรับเตรียมเด็กเข้าโรงเรียน เช่น ขั้นตอนการสมัคร เอกสารที่จำเป็น การตรวจสุขภาพ อุปกรณ์การเรียน ชีวิตในโรงเรียน อาหารกลางวันและอาการแพ้ เส้นทางไปโรงเรียน การสนับสนุนภาษาญี่ปุ่น และการติดต่อกับโรงเรียน",

    my: "ကလေးကျောင်းဝင်ရန် ပြင်ဆင်ရာတွင် ကျောင်းဝင်လုပ်ထုံးလုပ်နည်း၊ လိုအပ်သောစာရွက်စာတမ်းများ၊ ကျန်းမာရေးစစ်ဆေးမှု၊ ကျောင်းသုံးပစ္စည်းများ၊ ကျောင်းဘဝ၊ နေ့လယ်စာနှင့် ဓာတ်မတည့်မှု၊ ကျောင်းသွားလမ်းကြောင်း၊ ဂျပန်ဘာသာစကားအထောက်အပံ့နှင့် ကျောင်းနှင့်ဆက်သွယ်နည်းတို့ကို မေးမြန်းရန် ဂျပန်စကားကို လေ့ကျင့်ပါ။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់ត្រៀមកុមារចូលរៀន រួមមាននីតិវិធីចូលរៀន ឯកសារចាំបាច់ ការពិនិត្យសុខភាព សម្ភារៈសិក្សា ជីវិតនៅសាលា អាហារថ្ងៃត្រង់ និងអាឡែស៊ី ផ្លូវទៅសាលា ការគាំទ្រភាសាជប៉ុន និងការទំនាក់ទំនងជាមួយសាលា។",

    ne: "बच्चालाई विद्यालय प्रवेशका लागि तयार गर्दा भर्ना प्रक्रिया, आवश्यक कागजात, स्वास्थ्य परीक्षण, विद्यालय सामग्री, विद्यालय जीवन, खाजा र एलर्जी, विद्यालय जाने बाटो, जापानी भाषा सहायता तथा विद्यालयसँग सम्पर्क गर्ने तरिकाबारे जापानीमा प्रश्न गर्ने अभ्यास।",

    mn: "Хүүхдийг сургуульд элсэхэд бэлтгэхдээ элсэлтийн журам, шаардлагатай баримт бичиг, эрүүл мэндийн үзлэг, хичээлийн хэрэгсэл, сургуулийн амьдрал, өдрийн хоол ба харшил, сургууль хүрэх зам, япон хэлний дэмжлэг болон сургуультай холбоо барих талаар япон хэлээр асуух дадлага.",

    si: "දරුවා පාසලට ඇතුළත් කිරීම සඳහා ලියාපදිංචි ක්‍රියාපටිපාටි, අවශ්‍ය ලේඛන, සෞඛ්‍ය පරීක්ෂණ, පාසල් උපකරණ, පාසල් ජීවිතය, දිවා ආහාරය සහ අසාත්මිකතා, පාසලට යන මාර්ගය, ජපන් භාෂා සහාය සහ පාසල සමඟ සන්නිවේදනය පිළිබඳව ජපන් භාෂාවෙන් විමසීමට පුහුණු වීම.",

    bn: "শিশুকে স্কুলে ভর্তির জন্য প্রস্তুত করার সময় ভর্তি প্রক্রিয়া, প্রয়োজনীয় নথি, স্বাস্থ্য পরীক্ষা, স্কুলের সামগ্রী, স্কুল জীবন, দুপুরের খাবার ও অ্যালার্জি, স্কুলে যাওয়ার পথ, জাপানি ভাষা সহায়তা এবং স্কুলের সঙ্গে যোগাযোগ সম্পর্কে জাপানিতে প্রশ্ন করার অনুশীলন।",

    pt: "Prática de japonês para preparar uma criança para entrar na escola, incluindo procedimentos de matrícula, documentos necessários, exames de saúde, materiais escolares, vida escolar, merenda e alergias, caminho para a escola, apoio em japonês e comunicação com a escola.",

    es: "Práctica de japonés para preparar a un niño para entrar en la escuela, incluyendo procedimientos de matrícula, documentos necesarios, exámenes de salud, material escolar, vida escolar, almuerzo y alergias, ruta escolar, apoyo en japonés y comunicación con la escuela.",

    fr: "Entraînement en japonais pour préparer l'entrée d'un enfant à l'école, notamment les procédures d'inscription, les documents nécessaires, les examens de santé, le matériel scolaire, la vie scolaire, la cantine et les allergies, le trajet scolaire, le soutien en japonais et la communication avec l'école.",

    ru: "Практика японского языка для подготовки ребёнка к поступлению в школу: процедуры зачисления, необходимые документы, медицинский осмотр, школьные принадлежности, школьная жизнь, питание и аллергии, маршрут до школы, поддержка японского языка и общение со школой.",

    uk: "Практика японської мови для підготовки дитини до вступу до школи: процедури зарахування, необхідні документи, медичний огляд, шкільне приладдя, шкільне життя, харчування та алергії, маршрут до школи, підтримка японської мови й спілкування зі школою."
};

const b1SchoolEnrollmentSpeakerNames = {

    parent: {
        ja: "保護者",
        en: "Parent",
        "zh-CN": "家长",
        "zh-TW": "家長",
        ko: "보호자",
        vi: "Phụ huynh",
        tl: "Magulang",
        id: "Orang tua",
        th: "ผู้ปกครอง",
        my: "မိဘ",
        km: "អាណាព្យាបាល",
        ne: "अभिभावक",
        mn: "Эцэг эх",
        si: "දෙමාපියා",
        bn: "অভিভাবক",
        pt: "Responsável",
        es: "Progenitor",
        fr: "Parent",
        ru: "Родитель",
        uk: "Один із батьків"
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

    schoolStaff: {
        ja: "学校職員",
        en: "School Staff",
        "zh-CN": "学校工作人员",
        "zh-TW": "學校工作人員",
        ko: "학교 직원",
        vi: "Nhân viên trường học",
        tl: "School staff",
        id: "Petugas sekolah",
        th: "เจ้าหน้าที่โรงเรียน",
        my: "ကျောင်းဝန်ထမ်း",
        km: "បុគ្គលិកសាលា",
        ne: "विद्यालय कर्मचारी",
        mn: "Сургуулийн ажилтан",
        si: "පාසල් නිලධාරියා",
        bn: "স্কুল কর্মী",
        pt: "Funcionário da escola",
        es: "Personal de la escuela",
        fr: "Personnel scolaire",
        ru: "Сотрудник школы",
        uk: "Працівник школи"
    },

    teacher: {
        ja: "先生",
        en: "Teacher",
        "zh-CN": "老师",
        "zh-TW": "老師",
        ko: "교사",
        vi: "Giáo viên",
        tl: "Guro",
        id: "Guru",
        th: "ครู",
        my: "ဆရာ",
        km: "គ្រូ",
        ne: "शिक्षक",
        mn: "Багш",
        si: "ගුරුවරයා",
        bn: "শিক্ষক",
        pt: "Professor",
        es: "Profesor",
        fr: "Enseignant",
        ru: "Учитель",
        uk: "Учитель"
    },

    schoolNurse: {
        ja: "養護教諭",
        en: "School Nurse",
        "zh-CN": "校医",
        "zh-TW": "校護",
        ko: "보건교사",
        vi: "Nhân viên y tế trường học",
        tl: "School nurse",
        id: "Petugas kesehatan sekolah",
        th: "ครูพยาบาล",
        my: "ကျောင်းကျန်းမာရေးဝန်ထမ်း",
        km: "គិលានុបដ្ឋាកសាលា",
        ne: "विद्यालय स्वास्थ्यकर्मी",
        mn: "Сургуулийн эмч",
        si: "පාසල් සෞඛ්‍ය නිලධාරියා",
        bn: "স্কুল নার্স",
        pt: "Enfermeiro escolar",
        es: "Enfermero escolar",
        fr: "Infirmier scolaire",
        ru: "Школьная медсестра",
        uk: "Шкільна медсестра"
    },

    nutritionStaff: {
        ja: "給食担当者",
        en: "School Lunch Staff",
        "zh-CN": "学校午餐负责人",
        "zh-TW": "學校午餐負責人",
        ko: "급식 담당자",
        vi: "Nhân viên phụ trách bữa trưa",
        tl: "School lunch staff",
        id: "Petugas makan siang sekolah",
        th: "เจ้าหน้าที่อาหารกลางวัน",
        my: "ကျောင်းနေ့လယ်စာတာဝန်ခံ",
        km: "បុគ្គលិកអាហារថ្ងៃត្រង់",
        ne: "विद्यालय भोजन कर्मचारी",
        mn: "Сургуулийн хоолны ажилтан",
        si: "පාසල් දිවා ආහාර නිලධාරියා",
        bn: "স্কুলের মধ্যাহ্নভোজ কর্মী",
        pt: "Responsável pela alimentação escolar",
        es: "Responsable del comedor escolar",
        fr: "Responsable de la restauration scolaire",
        ru: "Сотрудник школьного питания",
        uk: "Працівник шкільного харчування"
    }
};

function makeB1SchoolEnrollmentDialogue(
    id,
    title,
    dialogue,
    dialogueTranslations
) {
    const fullDialogueTranslations =
        completeB1SchoolEnrollmentTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_school_enrollment",

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
                b1SchoolEnrollmentSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1SchoolEnrollmentContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1SchoolEnrollmentData = [

    // =====================================================
    // 001 入学手続きについて相談する
    // =====================================================

    makeB1SchoolEnrollmentDialogue(
        "b1_schoolenrollment_001",
        "入学手続きについて相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが来年小学校に入学するので、必要な手続きについて相談したいです。",
                target: "こどもがらいねんしょうがっこうににゅうがくするので ひつようなてつづきについてそうだんしたいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>来年<rt>らいねん</rt></ruby><ruby>小学校<rt>しょうがっこう</rt></ruby>に<ruby>入学<rt>にゅうがく</rt></ruby>するので、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>手続<rt>てつづ</rt></ruby>きについて<ruby>相談<rt>そうだん</rt></ruby>したいです。",
                romaji: "Kodomo ga rainen shōgakkō ni nyūgaku suru node, hitsuyō na tetsuzuki ni tsuite sōdan shitai desu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "はい。現在お住まいの住所と、お子さんの生年月日を確認させてください。",
                target: "はい げんざいおすまいのじゅうしょと おこさんのせいねんがっぴをかくにんさせてください",
                ruby: "はい。<ruby>現在<rt>げんざい</rt></ruby>お<ruby>住<rt>す</rt></ruby>まいの<ruby>住所<rt>じゅうしょ</rt></ruby>と、お<ruby>子<rt>こ</rt></ruby>さんの<ruby>生年月日<rt>せいねんがっぴ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>させてください。",
                romaji: "Hai. Genzai osumai no jūsho to, okosan no seinengappi o kakunin sasete kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "住所はこちらです。子どもは六歳で、四月から入学する予定です。",
                target: "じゅうしょはこちらです こどもはろくさいで しがつからにゅうがくするよていです",
                ruby: "<ruby>住所<rt>じゅうしょ</rt></ruby>はこちらです。<ruby>子<rt>こ</rt></ruby>どもは<ruby>六歳<rt>ろくさい</rt></ruby>で、<ruby>四月<rt>しがつ</rt></ruby>から<ruby>入学<rt>にゅうがく</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>です。",
                romaji: "Jūsho wa kochira desu. Kodomo wa rokusai de, shigatsu kara nyūgaku suru yotei desu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "わかりました。通常は住所によって通う学校が決まりますので、こちらで確認します。",
                target: "わかりました つうじょうはじゅうしょによってかようがっこうがきまりますので こちらでかくにんします",
                ruby: "わかりました。<ruby>通常<rt>つうじょう</rt></ruby>は<ruby>住所<rt>じゅうしょ</rt></ruby>によって<ruby>通<rt>かよ</rt></ruby>う<ruby>学校<rt>がっこう</rt></ruby>が<ruby>決<rt>き</rt></ruby>まりますので、こちらで<ruby>確認<rt>かくにん</rt></ruby>します。",
                romaji: "Wakarimashita. Tsūjō wa jūsho ni yotte kayou gakkō ga kimarimasu node, kochira de kakunin shimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "入学までに、学校へ直接行って手続きをする必要もありますか。",
                target: "にゅうがくまでに がっこうへちょくせついっててつづきをするひつようもありますか",
                ruby: "<ruby>入学<rt>にゅうがく</rt></ruby>までに、<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>行<rt>い</rt></ruby>って<ruby>手続<rt>てつづ</rt></ruby>きをする<ruby>必要<rt>ひつよう</rt></ruby>もありますか。",
                romaji: "Nyūgaku made ni, gakkō e chokusetsu itte tetsuzuki o suru hitsuyō mo arimasu ka."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "必要な手続きや説明会の日程について、学校からの案内も確認してください。",
                target: "ひつようなてつづきやせつめいかいのにっていについて がっこうからのあんないもかくにんしてください",
                ruby: "<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>手続<rt>てつづ</rt></ruby>きや<ruby>説明会<rt>せつめいかい</rt></ruby>の<ruby>日程<rt>にってい</rt></ruby>について、<ruby>学校<rt>がっこう</rt></ruby>からの<ruby>案内<rt>あんない</rt></ruby>も<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Hitsuyō na tetsuzuki ya setsumeikai no nittei ni tsuite, gakkō kara no annai mo kakunin shite kudasai."
            }
        ],

        {
            ja: [
                "保護者：子どもが来年小学校に入学するので、必要な手続きについて相談したいです。",
                "市職員：はい。現在お住まいの住所と、お子さんの生年月日を確認させてください。",
                "保護者：住所はこちらです。子どもは六歳で、四月から入学する予定です。",
                "市職員：わかりました。通常は住所によって通う学校が決まりますので、こちらで確認します。",
                "保護者：入学までに、学校へ直接行って手続きをする必要もありますか。",
                "市職員：必要な手続きや説明会の日程について、学校からの案内も確認してください。"
            ],

            en: [
                "Parent: My child will enter elementary school next year, so I would like to ask about the necessary procedures.",
                "City Official: Certainly. Please let me confirm your current address and your child's date of birth.",
                "Parent: Here is our address. My child is six years old and plans to start school in April.",
                "City Official: I understand. Usually, the school a child attends is determined by the home address, so I will check it.",
                "Parent: Before enrollment, do I also need to go directly to the school for any procedures?",
                "City Official: Please also check information from the school about required procedures and orientation dates."
            ],

            "zh-CN": [
                "家长：孩子明年要上小学，所以我想咨询一下必要的手续。",
                "市政府工作人员：好的。请让我确认一下您现在的住址和孩子的出生日期。",
                "家长：这是我们的地址。孩子六岁，计划四月入学。",
                "市政府工作人员：明白了。通常根据住址决定孩子就读的学校，我来为您确认。",
                "家长：入学之前，还需要直接去学校办理手续吗？",
                "市政府工作人员：关于必要手续和说明会日期，也请确认学校发来的通知。"
            ],

            "zh-TW": [
                "家長：孩子明年要上小學，所以我想諮詢一下必要的手續。",
                "市政府工作人員：好的。請讓我確認一下您現在的住址和孩子的出生日期。",
                "家長：這是我們的地址。孩子六歲，計畫四月入學。",
                "市政府工作人員：明白了。通常根據住址決定孩子就讀的學校，我來為您確認。",
                "家長：入學之前，還需要直接去學校辦理手續嗎？",
                "市政府工作人員：關於必要手續和說明會日期，也請確認學校發來的通知。"
            ],

            ko: [
                "보호자: 아이가 내년에 초등학교에 입학해서 필요한 절차에 대해 상담하고 싶습니다.",
                "시청 직원: 네. 현재 주소와 아이의 생년월일을 확인하겠습니다.",
                "보호자: 주소는 여기입니다. 아이는 여섯 살이고 4월부터 입학할 예정입니다.",
                "시청 직원: 알겠습니다. 보통 주소에 따라 다닐 학교가 결정되므로 확인하겠습니다.",
                "보호자: 입학 전 학교에 직접 가서 처리해야 하는 절차도 있나요?",
                "시청 직원: 필요한 절차와 설명회 일정에 대해서는 학교에서 보내는 안내도 확인해 주세요."
            ],

            vi: [
                "Phụ huynh: Con tôi sẽ vào tiểu học năm sau nên tôi muốn hỏi về các thủ tục cần thiết.",
                "Nhân viên thành phố: Vâng. Xin cho tôi xác nhận địa chỉ hiện tại và ngày sinh của cháu.",
                "Phụ huynh: Đây là địa chỉ. Cháu sáu tuổi và dự định nhập học vào tháng Tư.",
                "Nhân viên thành phố: Tôi hiểu. Thông thường trường mà trẻ theo học được xác định theo địa chỉ nhà, nên tôi sẽ kiểm tra.",
                "Phụ huynh: Trước khi nhập học, tôi có cần trực tiếp đến trường làm thủ tục không?",
                "Nhân viên thành phố: Xin hãy kiểm tra cả thông báo từ trường về các thủ tục cần thiết và ngày họp hướng dẫn."
            ]
        }
    ),

    // =====================================================
    // 002 必要書類と期限を確認する
    // =====================================================

    makeB1SchoolEnrollmentDialogue(
        "b1_schoolenrollment_002",
        "必要書類と期限を確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "入学のために必要な書類がいくつかあると聞きました。",
                target: "にゅうがくのためにひつようなしょるいがいくつかあるとききました",
                ruby: "<ruby>入学<rt>にゅうがく</rt></ruby>のために<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>がいくつかあると<ruby>聞<rt>き</rt></ruby>きました。",
                romaji: "Nyūgaku no tame ni hitsuyō na shorui ga ikutsuka aru to kikimashita."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "はい。ご家庭の状況によって必要な書類が異なる場合があります。",
                target: "はい ごかていのじょうきょうによってひつようなしょるいがことなるばあいがあります",
                ruby: "はい。ご<ruby>家庭<rt>かてい</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>によって<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>が<ruby>異<rt>こと</rt></ruby>なる<ruby>場合<rt>ばあい</rt></ruby>があります。",
                romaji: "Hai. Gokatei no jōkyō ni yotte hitsuyō na shorui ga kotonaru baai ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "外国籍ですが、特別に準備しなければならない書類はありますか。",
                target: "がいこくせきですが とくべつにじゅんびしなければならないしょるいはありますか",
                ruby: "<ruby>外国籍<rt>がいこくせき</rt></ruby>ですが、<ruby>特別<rt>とくべつ</rt></ruby>に<ruby>準備<rt>じゅんび</rt></ruby>しなければならない<ruby>書類<rt>しょるい</rt></ruby>はありますか。",
                romaji: "Gaikokuseki desu ga, tokubetsu ni junbi shinakereba naranai shorui wa arimasu ka."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "必要なものを確認しますので、在留カードなどお持ちの書類を見せてください。",
                target: "ひつようなものをかくにんしますので ざいりゅうかーどなどおもちのしょるいをみせてください",
                ruby: "<ruby>必要<rt>ひつよう</rt></ruby>なものを<ruby>確認<rt>かくにん</rt></ruby>しますので、<ruby>在留<rt>ざいりゅう</rt></ruby>カードなどお<ruby>持<rt>も</rt></ruby>ちの<ruby>書類<rt>しょるい</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。",
                romaji: "Hitsuyō na mono o kakunin shimasu node, zairyū kādo nado omochi no shorui o misete kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "提出期限を間違えないように、一覧で確認したいです。",
                target: "ていしゅつきげんをまちがえないように いちらんでかくにんしたいです",
                ruby: "<ruby>提出期限<rt>ていしゅつきげん</rt></ruby>を<ruby>間違<rt>まちが</rt></ruby>えないように、<ruby>一覧<rt>いちらん</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Teishutsu kigen o machigaenai yō ni, ichiran de kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "わかりました。書類の名前と提出先、期限を一緒に確認しましょう。",
                target: "わかりました しょるいのなまえとていしゅつさき きげんをいっしょにかくにんしましょう",
                ruby: "わかりました。<ruby>書類<rt>しょるい</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>と<ruby>提出先<rt>ていしゅつさき</rt></ruby>、<ruby>期限<rt>きげん</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Wakarimashita. Shorui no namae to teishutsusaki, kigen o issho ni kakunin shimashō."
            }
        ],

        {
            ja: [
                "保護者：入学のために必要な書類がいくつかあると聞きました。",
                "学校職員：はい。ご家庭の状況によって必要な書類が異なる場合があります。",
                "保護者：外国籍ですが、特別に準備しなければならない書類はありますか。",
                "学校職員：必要なものを確認しますので、在留カードなどお持ちの書類を見せてください。",
                "保護者：提出期限を間違えないように、一覧で確認したいです。",
                "学校職員：わかりました。書類の名前と提出先、期限を一緒に確認しましょう。"
            ],

            en: [
                "Parent: I heard that several documents are required for school enrollment.",
                "School Staff: Yes. The documents required may differ depending on your family's circumstances.",
                "Parent: We are foreign nationals. Are there any special documents we need to prepare?",
                "School Staff: I will check what is required, so please show me documents you have, such as your residence card.",
                "Parent: I would like to check everything in a list so I do not miss any submission deadlines.",
                "School Staff: Certainly. Let us check the document names, where to submit them, and the deadlines together."
            ],

            "zh-CN": [
                "家长：我听说入学需要准备几份文件。",
                "学校工作人员：是的。根据家庭情况，所需文件可能不同。",
                "家长：我们是外国籍，需要特别准备什么文件吗？",
                "学校工作人员：我来确认所需材料，请出示在留卡等您持有的文件。",
                "家长：为了不弄错提交期限，我想用清单确认。",
                "学校工作人员：好的。我们一起确认文件名称、提交地点和期限吧。"
            ],

            "zh-TW": [
                "家長：我聽說入學需要準備幾份文件。",
                "學校工作人員：是的。根據家庭情況，所需文件可能不同。",
                "家長：我們是外國籍，需要特別準備什麼文件嗎？",
                "學校工作人員：我來確認所需資料，請出示在留卡等您持有的文件。",
                "家長：為了不弄錯提交期限，我想用清單確認。",
                "學校工作人員：好的。我們一起確認文件名稱、提交地點和期限吧。"
            ],

            ko: [
                "보호자: 입학을 위해 필요한 서류가 몇 가지 있다고 들었습니다.",
                "학교 직원: 네. 가정 상황에 따라 필요한 서류가 다를 수 있습니다.",
                "보호자: 외국 국적인데 특별히 준비해야 하는 서류가 있나요?",
                "학교 직원: 필요한 것을 확인하겠습니다. 재류 카드 등 가지고 계신 서류를 보여 주세요.",
                "보호자: 제출 기한을 틀리지 않도록 목록으로 확인하고 싶습니다.",
                "학교 직원: 알겠습니다. 서류 이름과 제출처, 기한을 함께 확인해 봅시다."
            ],

            vi: [
                "Phụ huynh: Tôi nghe nói cần một số giấy tờ để nhập học.",
                "Nhân viên trường học: Vâng. Giấy tờ cần thiết có thể khác nhau tùy hoàn cảnh gia đình.",
                "Phụ huynh: Chúng tôi là người nước ngoài. Có giấy tờ đặc biệt nào phải chuẩn bị không?",
                "Nhân viên trường học: Tôi sẽ kiểm tra những gì cần thiết, nên hãy cho tôi xem các giấy tờ bạn có, chẳng hạn như thẻ cư trú.",
                "Phụ huynh: Tôi muốn kiểm tra bằng danh sách để không nhầm thời hạn nộp.",
                "Nhân viên trường học: Vâng. Chúng ta hãy cùng kiểm tra tên giấy tờ, nơi nộp và thời hạn."
            ]
        }
    ),

    // =====================================================
    // 003 就学時健康診断について確認する
    // =====================================================

    makeB1SchoolEnrollmentDialogue(
        "b1_schoolenrollment_003",
        "就学時健康診断について確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "入学前に健康診断を受ける必要があると聞きました。",
                target: "にゅうがくまえにけんこうしんだんをうけるひつようがあるとききました",
                ruby: "<ruby>入学前<rt>にゅうがくまえ</rt></ruby>に<ruby>健康診断<rt>けんこうしんだん</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける<ruby>必要<rt>ひつよう</rt></ruby>があると<ruby>聞<rt>き</rt></ruby>きました。",
                romaji: "Nyūgaku mae ni kenkō shindan o ukeru hitsuyō ga aru to kikimashita."
            },
            {
                label: "話者A",
                key: "schoolNurse",
                name: "養護教諭",
                line: "はい。入学前に、お子さんの健康状態を確認する機会があります。",
                target: "はい にゅうがくまえに おこさんのけんこうじょうたいをかくにんするきかいがあります",
                ruby: "はい。<ruby>入学前<rt>にゅうがくまえ</rt></ruby>に、お<ruby>子<rt>こ</rt></ruby>さんの<ruby>健康状態<rt>けんこうじょうたい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>機会<rt>きかい</rt></ruby>があります。",
                romaji: "Hai. Nyūgaku mae ni, okosan no kenkō jōtai o kakunin suru kikai ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "当日は何を持っていけばいいですか。予約も必要でしょうか。",
                target: "とうじつはなにをもっていけばいいですか よやくもひつようでしょうか",
                ruby: "<ruby>当日<rt>とうじつ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>を<ruby>持<rt>も</rt></ruby>っていけばいいですか。<ruby>予約<rt>よやく</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>でしょうか。",
                romaji: "Tōjitsu wa nani o motte ikeba ii desu ka. Yoyaku mo hitsuyō deshō ka."
            },
            {
                label: "話者A",
                key: "schoolNurse",
                name: "養護教諭",
                line: "日時や持ち物は案内に書いてありますので、事前によく確認してください。",
                target: "にちじやもちものはあんないにかいてありますので じぜんによくかくにんしてください",
                ruby: "<ruby>日時<rt>にちじ</rt></ruby>や<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>は<ruby>案内<rt>あんない</rt></ruby>に<ruby>書<rt>か</rt></ruby>いてありますので、<ruby>事前<rt>じぜん</rt></ruby>によく<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Nichiji ya mochimono wa annai ni kaite arimasu node, jizen ni yoku kakunin shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもには持病があります。それについても伝えた方がいいですか。",
                target: "こどもにはじびょうがあります それについてもつたえたほうがいいですか",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもには<ruby>持病<rt>じびょう</rt></ruby>があります。それについても<ruby>伝<rt>つた</rt></ruby>えた<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Kodomo ni wa jibyō ga arimasu. Sore ni tsuite mo tsutaeta hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "schoolNurse",
                name: "養護教諭",
                line: "はい。学校生活で配慮が必要なことがあれば、できるだけ早めに相談してください。",
                target: "はい がっこうせいかつではいりょがひつようなことがあれば できるだけはやめにそうだんしてください",
                ruby: "はい。<ruby>学校生活<rt>がっこうせいかつ</rt></ruby>で<ruby>配慮<rt>はいりょ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>なことがあれば、できるだけ<ruby>早<rt>はや</rt></ruby>めに<ruby>相談<rt>そうだん</rt></ruby>してください。",
                romaji: "Hai. Gakkō seikatsu de hairyo ga hitsuyō na koto ga areba, dekiru dake hayame ni sōdan shite kudasai."
            }
        ],

        {
            ja: [
                "保護者：入学前に健康診断を受ける必要があると聞きました。",
                "養護教諭：はい。入学前に、お子さんの健康状態を確認する機会があります。",
                "保護者：当日は何を持っていけばいいですか。予約も必要でしょうか。",
                "養護教諭：日時や持ち物は案内に書いてありますので、事前によく確認してください。",
                "保護者：子どもには持病があります。それについても伝えた方がいいですか。",
                "養護教諭：はい。学校生活で配慮が必要なことがあれば、できるだけ早めに相談してください。"
            ],

            en: [
                "Parent: I heard that my child needs to have a health examination before entering school.",
                "School Nurse: Yes. Before enrollment, there is an opportunity to check your child's health condition.",
                "Parent: What should we bring on the day? Do we also need a reservation?",
                "School Nurse: The date, time, and items to bring are written in the information notice, so please check it carefully in advance.",
                "Parent: My child has a chronic medical condition. Should I tell the school about that too?",
                "School Nurse: Yes. If your child needs special consideration during school life, please consult us as early as possible."
            ],

            "zh-CN": [
                "家长：我听说入学前需要接受健康检查。",
                "校医：是的。入学前会有机会确认孩子的健康状况。",
                "家长：当天需要带什么？也需要预约吗？",
                "校医：日期、时间和携带物品会写在通知里，请提前仔细确认。",
                "家长：孩子有慢性疾病。这个也应该告诉学校吗？",
                "校医：是的。如果在学校生活中需要特别照顾，请尽早咨询。"
            ],

            "zh-TW": [
                "家長：我聽說入學前需要接受健康檢查。",
                "校護：是的。入學前會有機會確認孩子的健康狀況。",
                "家長：當天需要帶什麼？也需要預約嗎？",
                "校護：日期、時間和攜帶物品會寫在通知裡，請提前仔細確認。",
                "家長：孩子有慢性疾病。這個也應該告訴學校嗎？",
                "校護：是的。如果在學校生活中需要特別照顧，請儘早諮詢。"
            ],

            ko: [
                "보호자: 입학 전에 건강검진을 받아야 한다고 들었습니다.",
                "보건교사: 네. 입학 전에 아이의 건강 상태를 확인하는 기회가 있습니다.",
                "보호자: 당일에는 무엇을 가져가야 하나요? 예약도 필요한가요?",
                "보건교사: 날짜와 시간, 준비물은 안내문에 적혀 있으니 미리 잘 확인해 주세요.",
                "보호자: 아이에게 지병이 있습니다. 그것도 알려야 하나요?",
                "보건교사: 네. 학교생활에서 배려가 필요한 점이 있으면 가능한 한 빨리 상담해 주세요."
            ],

            vi: [
                "Phụ huynh: Tôi nghe nói cần khám sức khỏe trước khi nhập học.",
                "Nhân viên y tế trường học: Vâng. Trước khi nhập học có một dịp để kiểm tra tình trạng sức khỏe của trẻ.",
                "Phụ huynh: Hôm đó cần mang gì theo? Có cần đặt trước không?",
                "Nhân viên y tế trường học: Ngày giờ và đồ cần mang được ghi trong thông báo, nên hãy kiểm tra kỹ trước.",
                "Phụ huynh: Con tôi có bệnh nền. Tôi có nên báo việc đó không?",
                "Nhân viên y tế trường học: Có. Nếu cần sự hỗ trợ đặc biệt trong sinh hoạt trường học, xin hãy trao đổi càng sớm càng tốt."
            ]
        }
    ),

    // =====================================================
    // 004 学校用品を準備する
    // =====================================================

    makeB1SchoolEnrollmentDialogue(
        "b1_schoolenrollment_004",
        "学校用品を準備する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "入学までに何を準備すればいいか、持ち物の一覧を確認したいです。",
                target: "にゅうがくまでになにをじゅんびすればいいか もちもののいちらんをかくにんしたいです",
                ruby: "<ruby>入学<rt>にゅうがく</rt></ruby>までに<ruby>何<rt>なに</rt></ruby>を<ruby>準備<rt>じゅんび</rt></ruby>すればいいか、<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>の<ruby>一覧<rt>いちらん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Nyūgaku made ni nani o junbi sureba ii ka, mochimono no ichiran o kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "こちらが準備する物の一覧です。学校でまとめて購入する物もあります。",
                target: "こちらがじゅんびするもののいちらんです がっこうでまとめてこうにゅうするものもあります",
                ruby: "こちらが<ruby>準備<rt>じゅんび</rt></ruby>する<ruby>物<rt>もの</rt></ruby>の<ruby>一覧<rt>いちらん</rt></ruby>です。<ruby>学校<rt>がっこう</rt></ruby>でまとめて<ruby>購入<rt>こうにゅう</rt></ruby>する<ruby>物<rt>もの</rt></ruby>もあります。",
                romaji: "Kochira ga junbi suru mono no ichiran desu. Gakkō de matomete kōnyū suru mono mo arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "自分で買う物と、学校で買う物を分けて教えていただけますか。",
                target: "じぶんでかうものと がっこうでかうものをわけておしえていただけますか",
                ruby: "<ruby>自分<rt>じぶん</rt></ruby>で<ruby>買<rt>か</rt></ruby>う<ruby>物<rt>もの</rt></ruby>と、<ruby>学校<rt>がっこう</rt></ruby>で<ruby>買<rt>か</rt></ruby>う<ruby>物<rt>もの</rt></ruby>を<ruby>分<rt>わ</rt></ruby>けて<ruby>教<rt>おし</rt></ruby>えていただけますか。",
                romaji: "Jibun de kau mono to, gakkō de kau mono o wakete oshiete itadakemasu ka."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "もちろんです。また、学校によって決まりがある物は、購入前に確認してください。",
                target: "もちろんです また がっこうによってきまりがあるものは こうにゅうまえにかくにんしてください",
                ruby: "もちろんです。また、<ruby>学校<rt>がっこう</rt></ruby>によって<ruby>決<rt>き</rt></ruby>まりがある<ruby>物<rt>もの</rt></ruby>は、<ruby>購入前<rt>こうにゅうまえ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Mochiron desu. Mata, gakkō ni yotte kimari ga aru mono wa, kōnyū mae ni kakunin shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "名前を書く必要がある物も多いのでしょうか。",
                target: "なまえをかくひつようがあるものもおおいのでしょうか",
                ruby: "<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書<rt>か</rt></ruby>く<ruby>必要<rt>ひつよう</rt></ruby>がある<ruby>物<rt>もの</rt></ruby>も<ruby>多<rt>おお</rt></ruby>いのでしょうか。",
                romaji: "Namae o kaku hitsuyō ga aru mono mo ōi no deshō ka."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "はい。ほかの子の物と間違えないように、必要な物には名前を書いてください。",
                target: "はい ほかのこのものとまちがえないように ひつようなものにはなまえをかいてください",
                ruby: "はい。ほかの<ruby>子<rt>こ</rt></ruby>の<ruby>物<rt>もの</rt></ruby>と<ruby>間違<rt>まちが</rt></ruby>えないように、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>物<rt>もの</rt></ruby>には<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Hai. Hoka no ko no mono to machigaenai yō ni, hitsuyō na mono ni wa namae o kaite kudasai."
            }
        ],

        {
            ja: [
                "保護者：入学までに何を準備すればいいか、持ち物の一覧を確認したいです。",
                "先生：こちらが準備する物の一覧です。学校でまとめて購入する物もあります。",
                "保護者：自分で買う物と、学校で買う物を分けて教えていただけますか。",
                "先生：もちろんです。また、学校によって決まりがある物は、購入前に確認してください。",
                "保護者：名前を書く必要がある物も多いのでしょうか。",
                "先生：はい。ほかの子の物と間違えないように、必要な物には名前を書いてください。"
            ],

            en: [
                "Parent: I would like to check the list of things we need to prepare before school starts.",
                "Teacher: Here is the list. Some items are purchased together through the school.",
                "Parent: Could you separate the items we buy ourselves from those purchased through the school?",
                "Teacher: Of course. Also, for items that have school-specific rules, please check before buying them.",
                "Parent: Are there also many items that need the child's name written on them?",
                "Teacher: Yes. Please write your child's name on required items so they are not confused with another child's belongings."
            ],

            "zh-CN": [
                "家长：我想确认入学前需要准备什么，以及携带物品清单。",
                "老师：这是需要准备的物品清单。有些物品由学校统一购买。",
                "家长：可以分别告诉我哪些需要自己买，哪些由学校购买吗？",
                "老师：当然可以。另外，有些物品有学校规定，请在购买前确认。",
                "家长：需要写名字的物品也很多吗？",
                "老师：是的。为了避免和其他孩子的物品弄错，请在需要的物品上写名字。"
            ],

            "zh-TW": [
                "家長：我想確認入學前需要準備什麼，以及攜帶物品清單。",
                "老師：這是需要準備的物品清單。有些物品由學校統一購買。",
                "家長：可以分別告訴我哪些需要自己買，哪些由學校購買嗎？",
                "老師：當然可以。另外，有些物品有學校規定，請在購買前確認。",
                "家長：需要寫名字的物品也很多嗎？",
                "老師：是的。為了避免和其他孩子的物品弄錯，請在需要的物品上寫名字。"
            ],

            ko: [
                "보호자: 입학 전 무엇을 준비해야 하는지 준비물 목록을 확인하고 싶습니다.",
                "교사: 이것이 준비해야 할 물건의 목록입니다. 학교에서 함께 구매하는 물건도 있습니다.",
                "보호자: 직접 사는 물건과 학교에서 사는 물건을 나누어 알려 주실 수 있나요?",
                "교사: 물론입니다. 학교마다 규정이 있는 물건은 구입 전에 확인해 주세요.",
                "보호자: 이름을 써야 하는 물건도 많은가요?",
                "교사: 네. 다른 아이의 물건과 헷갈리지 않도록 필요한 물건에는 이름을 써 주세요."
            ],

            vi: [
                "Phụ huynh: Tôi muốn kiểm tra danh sách những thứ cần chuẩn bị trước khi nhập học.",
                "Giáo viên: Đây là danh sách các đồ cần chuẩn bị. Một số đồ sẽ được mua chung qua trường.",
                "Phụ huynh: Bạn có thể tách rõ đồ tự mua và đồ mua qua trường không?",
                "Giáo viên: Tất nhiên. Ngoài ra, với những đồ có quy định riêng của trường, hãy kiểm tra trước khi mua.",
                "Phụ huynh: Có nhiều đồ cần ghi tên của trẻ không?",
                "Giáo viên: Có. Hãy ghi tên lên những đồ cần thiết để tránh nhầm với đồ của trẻ khác."
            ]
        }
    ),

    // =====================================================
    // 005 学校生活と一日の流れを確認する
    // =====================================================

    makeB1SchoolEnrollmentDialogue(
        "b1_schoolenrollment_005",
        "学校生活と一日の流れを確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが学校でどのように一日を過ごすのか、まだよくわかっていません。",
                target: "こどもががっこうでどのようにいちにちをすごすのか まだよくわかっていません",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>学校<rt>がっこう</rt></ruby>でどのように<ruby>一日<rt>いちにち</rt></ruby>を<ruby>過<rt>す</rt></ruby>ごすのか、まだよくわかっていません。",
                romaji: "Kodomo ga gakkō de dono yō ni ichinichi o sugosu no ka, mada yoku wakatte imasen."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "では、登校してから下校するまでの基本的な流れをご説明します。",
                target: "では とうこうしてからげこうするまでのきほんてきなながれをごせつめいします",
                ruby: "では、<ruby>登校<rt>とうこう</rt></ruby>してから<ruby>下校<rt>げこう</rt></ruby>するまでの<ruby>基本的<rt>きほんてき</rt></ruby>な<ruby>流<rt>なが</rt></ruby>れをご<ruby>説明<rt>せつめい</rt></ruby>します。",
                romaji: "Dewa, tōkō shite kara gekō suru made no kihonteki na nagare o go-setsumei shimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "授業だけでなく、休み時間や掃除の時間もあるのですか。",
                target: "じゅぎょうだけでなく やすみじかんやそうじのじかんもあるのですか",
                ruby: "<ruby>授業<rt>じゅぎょう</rt></ruby>だけでなく、<ruby>休<rt>やす</rt></ruby>み<ruby>時間<rt>じかん</rt></ruby>や<ruby>掃除<rt>そうじ</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>もあるのですか。",
                romaji: "Jugyō dake de naku, yasumi jikan ya sōji no jikan mo aru no desu ka."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "はい。学校によって違いはありますが、給食や掃除なども学校生活の一部です。",
                target: "はい がっこうによってちがいはありますが きゅうしょくやそうじなどもがっこうせいかつのいちぶです",
                ruby: "はい。<ruby>学校<rt>がっこう</rt></ruby>によって<ruby>違<rt>ちが</rt></ruby>いはありますが、<ruby>給食<rt>きゅうしょく</rt></ruby>や<ruby>掃除<rt>そうじ</rt></ruby>なども<ruby>学校生活<rt>がっこうせいかつ</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>です。",
                romaji: "Hai. Gakkō ni yotte chigai wa arimasu ga, kyūshoku ya sōji nado mo gakkō seikatsu no ichibu desu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "家でも事前に説明しておけば、子どもも安心できそうです。",
                target: "いえでもじぜんにせつめいしておけば こどももあんしんできそうです",
                ruby: "<ruby>家<rt>いえ</rt></ruby>でも<ruby>事前<rt>じぜん</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>しておけば、<ruby>子<rt>こ</rt></ruby>どもも<ruby>安心<rt>あんしん</rt></ruby>できそうです。",
                romaji: "Ie demo jizen ni setsumei shite okeba, kodomo mo anshin dekisō desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "そうですね。わからないことや不安なことがあれば、入学前でも相談してください。",
                target: "そうですね わからないことやふあんなことがあれば にゅうがくまえでもそうだんしてください",
                ruby: "そうですね。わからないことや<ruby>不安<rt>ふあん</rt></ruby>なことがあれば、<ruby>入学前<rt>にゅうがくまえ</rt></ruby>でも<ruby>相談<rt>そうだん</rt></ruby>してください。",
                romaji: "Sō desu ne. Wakaranai koto ya fuan na koto ga areba, nyūgaku mae demo sōdan shite kudasai."
            }
        ],

        {
            ja: [
                "保護者：子どもが学校でどのように一日を過ごすのか、まだよくわかっていません。",
                "先生：では、登校してから下校するまでの基本的な流れをご説明します。",
                "保護者：授業だけでなく、休み時間や掃除の時間もあるのですか。",
                "先生：はい。学校によって違いはありますが、給食や掃除なども学校生活の一部です。",
                "保護者：家でも事前に説明しておけば、子どもも安心できそうです。",
                "先生：そうですね。わからないことや不安なことがあれば、入学前でも相談してください。"
            ],

            en: [
                "Parent: I still do not clearly understand how my child will spend a full day at school.",
                "Teacher: Then I will explain the basic schedule from arrival at school until going home.",
                "Parent: Besides lessons, are there also breaks and cleaning time?",
                "Teacher: Yes. It differs by school, but school lunch and cleaning are also part of school life.",
                "Parent: If I explain it at home beforehand, I think my child will feel more comfortable.",
                "Teacher: Yes. If there is anything you do not understand or anything that worries you, please consult us even before enrollment."
            ],

            "zh-CN": [
                "家长：我还不太清楚孩子在学校一天是怎样度过的。",
                "老师：那么，我来说明一下从到校到放学的基本流程。",
                "家长：除了上课，还有休息时间和打扫时间吗？",
                "老师：是的。虽然每所学校有所不同，但午餐和打扫也是学校生活的一部分。",
                "家长：如果我在家提前说明，孩子应该也会更安心。",
                "老师：是的。有不明白或担心的事情，入学前也可以咨询。"
            ],

            "zh-TW": [
                "家長：我還不太清楚孩子在學校一天是怎樣度過的。",
                "老師：那麼，我來說明一下從到校到放學的基本流程。",
                "家長：除了上課，還有休息時間和打掃時間嗎？",
                "老師：是的。雖然每所學校有所不同，但午餐和打掃也是學校生活的一部分。",
                "家長：如果我在家提前說明，孩子應該也會更安心。",
                "老師：是的。有不明白或擔心的事情，入學前也可以諮詢。"
            ],

            ko: [
                "보호자: 아이가 학교에서 하루를 어떻게 보내는지 아직 잘 모르겠습니다.",
                "교사: 그러면 등교부터 하교까지의 기본적인 흐름을 설명하겠습니다.",
                "보호자: 수업뿐 아니라 쉬는 시간이나 청소 시간도 있나요?",
                "교사: 네. 학교마다 차이는 있지만 급식이나 청소도 학교생활의 일부입니다.",
                "보호자: 집에서도 미리 설명하면 아이도 안심할 것 같습니다.",
                "교사: 그렇습니다. 모르는 것이나 불안한 점이 있으면 입학 전에도 상담해 주세요."
            ],

            vi: [
                "Phụ huynh: Tôi vẫn chưa hiểu rõ con sẽ trải qua một ngày ở trường như thế nào.",
                "Giáo viên: Vậy tôi sẽ giải thích lịch trình cơ bản từ lúc đến trường cho đến khi về nhà.",
                "Phụ huynh: Ngoài giờ học, còn có giờ nghỉ và giờ dọn vệ sinh không?",
                "Giáo viên: Có. Tùy trường có khác nhau, nhưng bữa trưa và dọn vệ sinh cũng là một phần của cuộc sống trường học.",
                "Phụ huynh: Nếu giải thích trước ở nhà, tôi nghĩ con cũng sẽ yên tâm hơn.",
                "Giáo viên: Đúng vậy. Nếu có điều gì chưa hiểu hoặc lo lắng, hãy trao đổi ngay cả trước khi nhập học."
            ]
        }
    ),

    // =====================================================
    // 006 給食とアレルギーについて相談する
    // =====================================================

    makeB1SchoolEnrollmentDialogue(
        "b1_schoolenrollment_006",
        "給食とアレルギーについて相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもに食物アレルギーがあるので、給食について相談したいです。",
                target: "こどもにしょくもつあれるぎーがあるので きゅうしょくについてそうだんしたいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもに<ruby>食物<rt>しょくもつ</rt></ruby>アレルギーがあるので、<ruby>給食<rt>きゅうしょく</rt></ruby>について<ruby>相談<rt>そうだん</rt></ruby>したいです。",
                romaji: "Kodomo ni shokumotsu arerugī ga aru node, kyūshoku ni tsuite sōdan shitai desu."
            },
            {
                label: "話者A",
                key: "nutritionStaff",
                name: "給食担当者",
                line: "わかりました。どの食べ物にアレルギーがあり、これまでどのような症状が出ましたか。",
                target: "わかりました どのたべものにあれるぎーがあり これまでどのようなしょうじょうがでましたか",
                ruby: "わかりました。どの<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>にアレルギーがあり、これまでどのような<ruby>症状<rt>しょうじょう</rt></ruby>が<ruby>出<rt>で</rt></ruby>ましたか。",
                romaji: "Wakarimashita. Dono tabemono ni arerugī ga ari, kore made dono yō na shōjō ga demashita ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "卵にアレルギーがあり、以前食べたときに体に赤い発疹が出ました。",
                target: "たまごにあれるぎーがあり いぜんたべたときにからだにあかいほっしんがでました",
                ruby: "<ruby>卵<rt>たまご</rt></ruby>にアレルギーがあり、<ruby>以前<rt>いぜん</rt></ruby><ruby>食<rt>た</rt></ruby>べたときに<ruby>体<rt>からだ</rt></ruby>に<ruby>赤<rt>あか</rt></ruby>い<ruby>発疹<rt>ほっしん</rt></ruby>が<ruby>出<rt>で</rt></ruby>ました。",
                romaji: "Tamago ni arerugī ga ari, izen tabeta toki ni karada ni akai hosshin ga demashita."
            },
            {
                label: "話者A",
                key: "nutritionStaff",
                name: "給食担当者",
                line: "安全に対応するため、医師の指示や必要な書類を確認させてください。",
                target: "あんぜんにたいおうするため いしのしじやひつようなしょるいをかくにんさせてください",
                ruby: "<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>対応<rt>たいおう</rt></ruby>するため、<ruby>医師<rt>いし</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>や<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>させてください。",
                romaji: "Anzen ni taiō suru tame, ishi no shiji ya hitsuyō na shorui o kakunin sasete kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "献立も事前に確認できますか。家庭でも一緒に確認したいです。",
                target: "こんだてもじぜんにかくにんできますか かていでもいっしょにかくにんしたいです",
                ruby: "<ruby>献立<rt>こんだて</rt></ruby>も<ruby>事前<rt>じぜん</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>できますか。<ruby>家庭<rt>かてい</rt></ruby>でも<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Kondate mo jizen ni kakunin dekimasu ka. Katei demo issho ni kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "nutritionStaff",
                name: "給食担当者",
                line: "はい。学校の対応方法も含めて、入学前に詳しく確認しておきましょう。",
                target: "はい がっこうのたいおうほうほうもふくめて にゅうがくまえにくわしくかくにんしておきましょう",
                ruby: "はい。<ruby>学校<rt>がっこう</rt></ruby>の<ruby>対応方法<rt>たいおうほうほう</rt></ruby>も<ruby>含<rt>ふく</rt></ruby>めて、<ruby>入学前<rt>にゅうがくまえ</rt></ruby>に<ruby>詳<rt>くわ</rt></ruby>しく<ruby>確認<rt>かくにん</rt></ruby>しておきましょう。",
                romaji: "Hai. Gakkō no taiō hōhō mo fukumete, nyūgaku mae ni kuwashiku kakunin shite okimashō."
            }
        ],

        {
            ja: [
                "保護者：子どもに食物アレルギーがあるので、給食について相談したいです。",
                "給食担当者：わかりました。どの食べ物にアレルギーがあり、これまでどのような症状が出ましたか。",
                "保護者：卵にアレルギーがあり、以前食べたときに体に赤い発疹が出ました。",
                "給食担当者：安全に対応するため、医師の指示や必要な書類を確認させてください。",
                "保護者：献立も事前に確認できますか。家庭でも一緒に確認したいです。",
                "給食担当者：はい。学校の対応方法も含めて、入学前に詳しく確認しておきましょう。"
            ],

            en: [
                "Parent: My child has a food allergy, so I would like to ask about school lunch.",
                "School Lunch Staff: I understand. Which food is your child allergic to, and what symptoms have occurred before?",
                "Parent: My child is allergic to eggs and once developed a red rash after eating them.",
                "School Lunch Staff: To respond safely, please let us check any doctor's instructions and required documents.",
                "Parent: Can I also check the menu in advance? I would like to review it at home too.",
                "School Lunch Staff: Yes. Let us carefully confirm everything before enrollment, including how the school handles the allergy."
            ],

            "zh-CN": [
                "家长：孩子有食物过敏，所以我想咨询学校午餐。",
                "学校午餐负责人：明白了。孩子对什么食物过敏？以前出现过什么症状？",
                "家长：孩子对鸡蛋过敏，以前吃了以后身体出现过红色皮疹。",
                "学校午餐负责人：为了安全处理，请让我们确认医生的指示和必要文件。",
                "家长：可以提前确认菜单吗？我也想在家一起确认。",
                "学校午餐负责人：可以。包括学校的处理方法，我们在入学前详细确认吧。"
            ],

            "zh-TW": [
                "家長：孩子有食物過敏，所以我想諮詢學校午餐。",
                "學校午餐負責人：明白了。孩子對什麼食物過敏？以前出現過什麼症狀？",
                "家長：孩子對雞蛋過敏，以前吃了以後身體出現過紅色皮疹。",
                "學校午餐負責人：為了安全處理，請讓我們確認醫師的指示和必要文件。",
                "家長：可以提前確認菜單嗎？我也想在家一起確認。",
                "學校午餐負責人：可以。包括學校的處理方法，我們在入學前詳細確認吧。"
            ],

            ko: [
                "보호자: 아이에게 음식 알레르기가 있어서 급식에 대해 상담하고 싶습니다.",
                "급식 담당자: 알겠습니다. 어떤 음식에 알레르기가 있고 지금까지 어떤 증상이 있었나요?",
                "보호자: 계란 알레르기가 있고 예전에 먹었을 때 몸에 붉은 발진이 생겼습니다.",
                "급식 담당자: 안전하게 대응하기 위해 의사의 지시와 필요한 서류를 확인하겠습니다.",
                "보호자: 식단도 미리 확인할 수 있나요? 집에서도 함께 확인하고 싶습니다.",
                "급식 담당자: 네. 학교의 대응 방법도 포함해서 입학 전에 자세히 확인해 둡시다."
            ],

            vi: [
                "Phụ huynh: Con tôi bị dị ứng thực phẩm nên tôi muốn trao đổi về bữa trưa ở trường.",
                "Nhân viên phụ trách bữa trưa: Tôi hiểu. Cháu dị ứng với thực phẩm nào và trước đây đã có triệu chứng gì?",
                "Phụ huynh: Cháu dị ứng với trứng và trước đây từng nổi phát ban đỏ trên cơ thể sau khi ăn.",
                "Nhân viên phụ trách bữa trưa: Để xử lý an toàn, xin hãy cho chúng tôi kiểm tra hướng dẫn của bác sĩ và các giấy tờ cần thiết.",
                "Phụ huynh: Tôi có thể xem thực đơn trước không? Tôi cũng muốn kiểm tra ở nhà.",
                "Nhân viên phụ trách bữa trưa: Có. Chúng ta hãy xác nhận chi tiết trước khi nhập học, bao gồm cả cách nhà trường xử lý dị ứng."
            ]
        }
    ),

    // =====================================================
    // 007 通学路と安全について確認する
    // =====================================================

    makeB1SchoolEnrollmentDialogue(
        "b1_schoolenrollment_007",
        "通学路と安全について確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが一人で学校へ通うことになるので、少し心配しています。",
                target: "こどもがひとりでがっこうへかようことになるので すこししんぱいしています",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>一人<rt>ひとり</rt></ruby>で<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>通<rt>かよ</rt></ruby>うことになるので、<ruby>少<rt>すこ</rt></ruby>し<ruby>心配<rt>しんぱい</rt></ruby>しています。",
                romaji: "Kodomo ga hitori de gakkō e kayou koto ni naru node, sukoshi shinpai shite imasu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "入学前に、実際の通学路をお子さんと一緒に歩いてみることをおすすめします。",
                target: "にゅうがくまえに じっさいのつうがくろをおこさんといっしょにあるいてみることをおすすめします",
                ruby: "<ruby>入学前<rt>にゅうがくまえ</rt></ruby>に、<ruby>実際<rt>じっさい</rt></ruby>の<ruby>通学路<rt>つうがくろ</rt></ruby>をお<ruby>子<rt>こ</rt></ruby>さんと<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>歩<rt>ある</rt></ruby>いてみることをおすすめします。",
                romaji: "Nyūgaku mae ni, jissai no tsūgakuro o okosan to issho ni aruite miru koto o osusume shimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "交通量が多い交差点があるので、そこを特に確認したいです。",
                target: "こうつうりょうがおおいこうさてんがあるので そこをとくにかくにんしたいです",
                ruby: "<ruby>交通量<rt>こうつうりょう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い<ruby>交差点<rt>こうさてん</rt></ruby>があるので、そこを<ruby>特<rt>とく</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Kōtsūryō ga ōi kōsaten ga aru node, soko o toku ni kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "そうですね。信号や横断歩道だけでなく、見通しの悪い場所にも注意してください。",
                target: "そうですね しんごうやおうだんほどうだけでなく みとおしのわるいばしょにもちゅういしてください",
                ruby: "そうですね。<ruby>信号<rt>しんごう</rt></ruby>や<ruby>横断歩道<rt>おうだんほどう</rt></ruby>だけでなく、<ruby>見通<rt>みとお</rt></ruby>しの<ruby>悪<rt>わる</rt></ruby>い<ruby>場所<rt>ばしょ</rt></ruby>にも<ruby>注意<rt>ちゅうい</rt></ruby>してください。",
                romaji: "Sō desu ne. Shingō ya ōdan hodō dake de naku, mitōshi no warui basho ni mo chūi shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "雨の日や朝の混んでいる時間にも、一度歩いてみた方がよさそうですね。",
                target: "あめのひやあさのこんでいるじかんにも いちどあるいてみたほうがよさそうですね",
                ruby: "<ruby>雨<rt>あめ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>や<ruby>朝<rt>あさ</rt></ruby>の<ruby>混<rt>こ</rt></ruby>んでいる<ruby>時間<rt>じかん</rt></ruby>にも、<ruby>一度<rt>いちど</rt></ruby><ruby>歩<rt>ある</rt></ruby>いてみた<ruby>方<rt>ほう</rt></ruby>がよさそうですね。",
                romaji: "Ame no hi ya asa no konde iru jikan ni mo, ichido aruite mita hō ga yosasō desu ne."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "はい。実際に歩くことで、危険な場所や必要な時間も確認できます。",
                target: "はい じっさいにあるくことで きけんなばしょやひつようなじかんもかくにんできます",
                ruby: "はい。<ruby>実際<rt>じっさい</rt></ruby>に<ruby>歩<rt>ある</rt></ruby>くことで、<ruby>危険<rt>きけん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>や<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>時間<rt>じかん</rt></ruby>も<ruby>確認<rt>かくにん</rt></ruby>できます。",
                romaji: "Hai. Jissai ni aruku koto de, kiken na basho ya hitsuyō na jikan mo kakunin dekimasu."
            }
        ],

        {
            ja: [
                "保護者：子どもが一人で学校へ通うことになるので、少し心配しています。",
                "先生：入学前に、実際の通学路をお子さんと一緒に歩いてみることをおすすめします。",
                "保護者：交通量が多い交差点があるので、そこを特に確認したいです。",
                "先生：そうですね。信号や横断歩道だけでなく、見通しの悪い場所にも注意してください。",
                "保護者：雨の日や朝の混んでいる時間にも、一度歩いてみた方がよさそうですね。",
                "先生：はい。実際に歩くことで、危険な場所や必要な時間も確認できます。"
            ],

            en: [
                "Parent: My child will be traveling to school alone, so I am a little worried.",
                "Teacher: Before enrollment, I recommend walking the actual route to school together with your child.",
                "Parent: There is an intersection with a lot of traffic, so I especially want to check that area.",
                "Teacher: Yes. Please pay attention not only to traffic lights and crosswalks, but also to places with poor visibility.",
                "Parent: It may also be useful to walk the route once on a rainy day or during the busy morning time.",
                "Teacher: Yes. By actually walking the route, you can check dangerous places and how much time is needed."
            ],

            "zh-CN": [
                "家长：孩子以后要自己去学校，所以我有点担心。",
                "老师：建议在入学前和孩子一起实际走一次上学路线。",
                "家长：有一个车辆很多的十字路口，所以我特别想确认那里。",
                "老师：是的。不仅要注意信号灯和人行横道，也要注意视线不好的地方。",
                "家长：雨天或早晨拥挤的时候，也最好实际走一次。",
                "老师：是的。实际走一遍，可以确认危险地点和所需时间。"
            ],

            "zh-TW": [
                "家長：孩子以後要自己去學校，所以我有點擔心。",
                "老師：建議在入學前和孩子一起實際走一次上學路線。",
                "家長：有一個車輛很多的十字路口，所以我特別想確認那裡。",
                "老師：是的。不僅要注意號誌和行人穿越道，也要注意視線不好的地方。",
                "家長：雨天或早晨擁擠的時候，也最好實際走一次。",
                "老師：是的。實際走一遍，可以確認危險地點和所需時間。"
            ],

            ko: [
                "보호자: 아이가 혼자 학교에 다니게 되어 조금 걱정됩니다.",
                "교사: 입학 전에 실제 통학로를 아이와 함께 걸어 보는 것을 권합니다.",
                "보호자: 교통량이 많은 교차로가 있어서 그곳을 특히 확인하고 싶습니다.",
                "교사: 그렇습니다. 신호나 횡단보도뿐 아니라 시야가 좋지 않은 장소도 주의해 주세요.",
                "보호자: 비 오는 날이나 아침의 혼잡한 시간에도 한 번 걸어 보는 것이 좋겠네요.",
                "교사: 네. 실제로 걸으면 위험한 장소와 필요한 시간도 확인할 수 있습니다."
            ],

            vi: [
                "Phụ huynh: Con tôi sẽ phải tự đi học nên tôi hơi lo.",
                "Giáo viên: Trước khi nhập học, tôi khuyên bạn nên đi thử tuyến đường đến trường cùng con.",
                "Phụ huynh: Có một giao lộ rất đông xe nên tôi đặc biệt muốn kiểm tra chỗ đó.",
                "Giáo viên: Đúng vậy. Không chỉ chú ý đèn giao thông và vạch qua đường mà còn cần chú ý những nơi tầm nhìn kém.",
                "Phụ huynh: Có lẽ cũng nên đi thử vào ngày mưa hoặc giờ đông người buổi sáng.",
                "Giáo viên: Vâng. Bằng cách đi thực tế, bạn có thể xác nhận những chỗ nguy hiểm và thời gian cần thiết."
            ]
        }
    ),

    // =====================================================
    // 008 日本語支援と学校との連絡方法を相談する
    // =====================================================

    makeB1SchoolEnrollmentDialogue(
        "b1_schoolenrollment_008",
        "日本語支援と学校との連絡方法を相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもは日常会話ができますが、授業で使う日本語にはまだ不安があります。",
                target: "こどもはにちじょうかいわができますが じゅぎょうでつかうにほんごにはまだふあんがあります",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもは<ruby>日常会話<rt>にちじょうかいわ</rt></ruby>ができますが、<ruby>授業<rt>じゅぎょう</rt></ruby>で<ruby>使<rt>つか</rt></ruby>う<ruby>日本語<rt>にほんご</rt></ruby>にはまだ<ruby>不安<rt>ふあん</rt></ruby>があります。",
                romaji: "Kodomo wa nichijō kaiwa ga dekimasu ga, jugyō de tsukau Nihongo ni wa mada fuan ga arimasu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "わかりました。これまでの日本語学習や、学校で困りそうなことを教えてください。",
                target: "わかりました これまでのにほんごがくしゅうや がっこうでこまりそうなことをおしえてください",
                ruby: "わかりました。これまでの<ruby>日本語学習<rt>にほんごがくしゅう</rt></ruby>や、<ruby>学校<rt>がっこう</rt></ruby>で<ruby>困<rt>こま</rt></ruby>りそうなことを<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Wakarimashita. Kore made no Nihongo gakushū ya, gakkō de komarisō na koto o oshiete kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "読むことと書くことがまだ難しいので、授業についていけるか心配です。",
                target: "よむこととかくことがまだむずかしいので じゅぎょうについていけるかしんぱいです",
                ruby: "<ruby>読<rt>よ</rt></ruby>むことと<ruby>書<rt>か</rt></ruby>くことがまだ<ruby>難<rt>むずか</rt></ruby>しいので、<ruby>授業<rt>じゅぎょう</rt></ruby>についていけるか<ruby>心配<rt>しんぱい</rt></ruby>です。",
                romaji: "Yomu koto to kaku koto ga mada muzukashii node, jugyō ni tsuite ikeru ka shinpai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "利用できる日本語支援があるか確認し、お子さんの様子を見ながら対応を考えます。",
                target: "りようできるにほんごしえんがあるかかくにんし おこさんのようすをみながらたいおうをかんがえます",
                ruby: "<ruby>利用<rt>りよう</rt></ruby>できる<ruby>日本語支援<rt>にほんごしえん</rt></ruby>があるか<ruby>確認<rt>かくにん</rt></ruby>し、お<ruby>子<rt>こ</rt></ruby>さんの<ruby>様子<rt>ようす</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら<ruby>対応<rt>たいおう</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えます。",
                romaji: "Riyō dekiru Nihongo shien ga aru ka kakunin shi, okosan no yōsu o minagara taiō o kangaemasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "私も難しい日本語はよくわからないので、学校からの連絡を理解できるか不安です。",
                target: "わたしもむずかしいにほんごはよくわからないので がっこうからのれんらくをりかいできるかふあんです",
                ruby: "<ruby>私<rt>わたし</rt></ruby>も<ruby>難<rt>むずか</rt></ruby>しい<ruby>日本語<rt>にほんご</rt></ruby>はよくわからないので、<ruby>学校<rt>がっこう</rt></ruby>からの<ruby>連絡<rt>れんらく</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>できるか<ruby>不安<rt>ふあん</rt></ruby>です。",
                romaji: "Watashi mo muzukashii Nihongo wa yoku wakaranai node, gakkō kara no renraku o rikai dekiru ka fuan desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "大切な連絡がわからないときは、遠慮せず学校に確認してください。一緒に方法を考えましょう。",
                target: "たいせつなれんらくがわからないときは えんりょせずがっこうにかくにんしてください いっしょにほうほうをかんがえましょう",
                ruby: "<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>連絡<rt>れんらく</rt></ruby>がわからないときは、<ruby>遠慮<rt>えんりょ</rt></ruby>せず<ruby>学校<rt>がっこう</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>してください。<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Taisetsu na renraku ga wakaranai toki wa, enryo sezu gakkō ni kakunin shite kudasai. Issho ni hōhō o kangaemashō."
            }
        ],

        {
            ja: [
                "保護者：子どもは日常会話ができますが、授業で使う日本語にはまだ不安があります。",
                "先生：わかりました。これまでの日本語学習や、学校で困りそうなことを教えてください。",
                "保護者：読むことと書くことがまだ難しいので、授業についていけるか心配です。",
                "先生：利用できる日本語支援があるか確認し、お子さんの様子を見ながら対応を考えます。",
                "保護者：私も難しい日本語はよくわからないので、学校からの連絡を理解できるか不安です。",
                "先生：大切な連絡がわからないときは、遠慮せず学校に確認してください。一緒に方法を考えましょう。"
            ],

            en: [
                "Parent: My child can manage everyday conversation, but I am still worried about the Japanese used in class.",
                "Teacher: I understand. Please tell me about your child's Japanese study so far and anything that may be difficult at school.",
                "Parent: Reading and writing are still difficult, so I am worried about whether my child can keep up with lessons.",
                "Teacher: We will check what Japanese-language support is available and consider appropriate support while watching your child's progress.",
                "Parent: I also do not understand difficult Japanese well, so I am worried about understanding notices from the school.",
                "Teacher: When you do not understand an important message, please do not hesitate to check with the school. Let us find a suitable method together."
            ],

            "zh-CN": [
                "家长：孩子能进行日常会话，但是我还是担心课堂上使用的日语。",
                "老师：明白了。请告诉我孩子至今的日语学习情况，以及在学校可能遇到的困难。",
                "家长：阅读和书写还比较困难，所以我担心孩子跟不上课程。",
                "老师：我们会确认可以利用的日语支援，并观察孩子的情况来考虑对应方法。",
                "家长：我自己也不太懂复杂的日语，所以担心无法理解学校的通知。",
                "老师：如果有重要通知看不懂，请不要客气，向学校确认。我们一起考虑合适的方法吧。"
            ],

            "zh-TW": [
                "家長：孩子能進行日常會話，但是我還是擔心課堂上使用的日語。",
                "老師：明白了。請告訴我孩子至今的日語學習情況，以及在學校可能遇到的困難。",
                "家長：閱讀和書寫還比較困難，所以我擔心孩子跟不上課程。",
                "老師：我們會確認可以利用的日語支援，並觀察孩子的情況來考慮對應方法。",
                "家長：我自己也不太懂複雜的日語，所以擔心無法理解學校的通知。",
                "老師：如果有重要通知看不懂，請不要客氣，向學校確認。我們一起考慮合適的方法吧。"
            ],

            ko: [
                "보호자: 아이는 일상 대화는 할 수 있지만 수업에서 사용하는 일본어가 아직 걱정됩니다.",
                "교사: 알겠습니다. 지금까지의 일본어 학습과 학교에서 어려울 것 같은 점을 알려 주세요.",
                "보호자: 읽기와 쓰기가 아직 어려워서 수업을 따라갈 수 있을지 걱정됩니다.",
                "교사: 이용할 수 있는 일본어 지원이 있는지 확인하고 아이의 상태를 보면서 대응을 생각하겠습니다.",
                "보호자: 저도 어려운 일본어를 잘 몰라서 학교의 연락을 이해할 수 있을지 불안합니다.",
                "교사: 중요한 연락을 이해하지 못했을 때는 부담 갖지 말고 학교에 확인해 주세요. 함께 방법을 생각해 봅시다."
            ],

            vi: [
                "Phụ huynh: Con tôi có thể giao tiếp hằng ngày nhưng tôi vẫn lo về tiếng Nhật được dùng trong lớp học.",
                "Giáo viên: Tôi hiểu. Hãy cho tôi biết về việc học tiếng Nhật của cháu đến nay và những khó khăn có thể gặp ở trường.",
                "Phụ huynh: Việc đọc và viết vẫn còn khó nên tôi lo cháu không theo kịp bài học.",
                "Giáo viên: Chúng tôi sẽ kiểm tra xem có hỗ trợ tiếng Nhật nào có thể sử dụng và cân nhắc cách hỗ trợ phù hợp khi quan sát tình hình của cháu.",
                "Phụ huynh: Tôi cũng không hiểu tốt tiếng Nhật khó nên lo không hiểu các thông báo từ trường.",
                "Giáo viên: Khi không hiểu một thông báo quan trọng, đừng ngại hỏi lại nhà trường. Chúng ta hãy cùng tìm một cách phù hợp."
            ]
        }
    )

];