// =====================================================
// Japeak B1 Level
// Scene: 子育てについて相談しよう
// File: data/japeak-b1-parenting-consultation.js
// Category Key: b1_parenting_consultation
// =====================================================

const b1ParentingConsultationLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1ParentingConsultationTranslations(translations) {
    const completed = {};

    b1ParentingConsultationLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1ParentingConsultationContext = {
    ja: "子育てについて相談するときに、育児の不安、夜泣きや睡眠、食事、言葉や発達、子どもの気持ち、親の疲れ、きょうだいへの対応、継続的な相談方法などについて日本語で話す練習をします。",

    en: "Practice Japanese for consulting about parenting, including worries about childcare, nighttime crying and sleep, meals, language and development, children's emotions, parental fatigue, sibling relationships, and ways to continue receiving support.",

    "zh-CN": "练习关于育儿咨询时使用的日语，包括育儿不安、夜哭和睡眠、饮食、语言和发展、孩子的情绪、父母的疲劳、兄弟姐妹之间的关系以及持续咨询的方法。",

    "zh-TW": "練習關於育兒諮詢時使用的日語，包括育兒不安、夜哭和睡眠、飲食、語言和發展、孩子的情緒、父母的疲勞、兄弟姊妹之間的關係以及持續諮詢的方法。",

    ko: "육아에 대해 상담할 때 필요한 일본어를 연습합니다. 육아 불안, 밤 울음과 수면, 식사, 언어와 발달, 아이의 감정, 부모의 피로, 형제자매 관계, 지속적인 상담 방법을 다룹니다.",

    vi: "Luyện tiếng Nhật để tư vấn về nuôi dạy trẻ, bao gồm lo lắng khi chăm con, khóc đêm và giấc ngủ, bữa ăn, ngôn ngữ và phát triển, cảm xúc của trẻ, sự mệt mỏi của cha mẹ, quan hệ anh chị em và cách tiếp tục nhận hỗ trợ.",

    tl: "Practice Japanese for consulting about parenting, including childcare worries, sleep, meals, child development, children's emotions, parental fatigue, sibling relationships, and continuing support.",

    id: "Latihan bahasa Jepang untuk berkonsultasi tentang pengasuhan anak, termasuk kekhawatiran dalam merawat anak, tidur, makanan, perkembangan bahasa, emosi anak, kelelahan orang tua, hubungan saudara, dan cara melanjutkan dukungan.",

    th: "ฝึกภาษาญี่ปุ่นสำหรับการปรึกษาเรื่องการเลี้ยงลูก เช่น ความกังวลในการดูแลเด็ก การร้องตอนกลางคืนและการนอน อาหาร ภาษาและพัฒนาการ อารมณ์ของเด็ก ความเหนื่อยของผู้ปกครอง ความสัมพันธ์ระหว่างพี่น้อง และวิธีรับคำปรึกษาต่อเนื่อง",

    my: "ကလေးပြုစုပျိုးထောင်ရေးအကြောင်း တိုင်ပင်ရန် ဂျပန်စကားကို လေ့ကျင့်ပါ။ ကလေးပြုစုရာတွင် စိုးရိမ်မှု၊ ညဘက်ငိုခြင်းနှင့် အိပ်စက်ခြင်း၊ အစားအစာ၊ ဘာသာစကားနှင့် ဖွံ့ဖြိုးမှု၊ ကလေး၏ခံစားချက်၊ မိဘ၏ပင်ပန်းမှု၊ မောင်နှမဆက်ဆံရေးနှင့် ဆက်လက်တိုင်ပင်နည်းများ ပါဝင်သည်။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់ពិគ្រោះអំពីការចិញ្ចឹមកូន រួមមានការព្រួយបារម្ភក្នុងការថែទាំកូន ការយំយប់ និងការគេង អាហារ ភាសា និងការអភិវឌ្ឍ អារម្មណ៍របស់កុមារ ភាពនឿយហត់របស់ឪពុកម្តាយ ទំនាក់ទំនងរវាងបងប្អូន និងវិធីទទួលការពិគ្រោះបន្ត។",

    ne: "बालबालिका पालनपोषणबारे परामर्श गर्दा प्रयोग हुने जापानी अभ्यास। यसमा बाल हेरचाहको चिन्ता, राति रुने र निद्रा, खाना, भाषा र विकास, बच्चाको भावना, अभिभावकको थकान, दाजुभाइ-दिदीबहिनी सम्बन्ध र निरन्तर सहयोग लिने तरिका समावेश छन्।",

    mn: "Хүүхэд өсгөх талаар зөвлөгөө авах япон хэлний дадлага. Үүнд хүүхэд асрах үеийн санаа зовнил, шөнө уйлах ба унтах, хоол, хэл яриа ба хөгжил, хүүхдийн сэтгэл хөдлөл, эцэг эхийн ядаргаа, ах дүүгийн харилцаа, үргэлжлүүлэн зөвлөгөө авах арга багтана.",

    si: "දරුවන් ඇතිදැඩි කිරීම පිළිබඳ උපදෙස් ලබාගැනීමට ජපන් භාෂාව පුහුණු වීම. ළමා රැකවරණයේ කනස්සල්ල, රාත්‍රියේ ඇඬීම සහ නින්ද, ආහාර, භාෂාව සහ වර්ධනය, දරුවාගේ හැඟීම්, දෙමාපියන්ගේ වෙහෙස, සහෝදර සම්බන්ධතා සහ අඛණ්ඩ උපදෙස් ලබාගැනීම ඇතුළත් වේ.",

    bn: "শিশু লালনপালন সম্পর্কে পরামর্শ করার জন্য জাপানি অনুশীলন। এতে শিশুর যত্ন নিয়ে উদ্বেগ, রাতে কান্না ও ঘুম, খাবার, ভাষা ও বিকাশ, শিশুর অনুভূতি, অভিভাবকের ক্লান্তি, ভাইবোনের সম্পর্ক এবং ধারাবাহিক সহায়তা নেওয়ার উপায় অন্তর্ভুক্ত।",

    pt: "Prática de japonês para consultar sobre criação de filhos, incluindo preocupações com os cuidados, choro noturno e sono, alimentação, linguagem e desenvolvimento, emoções da criança, cansaço dos pais, relacionamento entre irmãos e formas de continuar recebendo apoio.",

    es: "Práctica de japonés para consultar sobre la crianza, incluyendo preocupaciones sobre el cuidado infantil, llanto nocturno y sueño, comidas, lenguaje y desarrollo, emociones del niño, cansancio de los padres, relación entre hermanos y formas de continuar recibiendo apoyo.",

    fr: "Entraînement en japonais pour consulter au sujet de la parentalité, notamment les inquiétudes liées à l'éducation, les pleurs nocturnes et le sommeil, les repas, le langage et le développement, les émotions de l'enfant, la fatigue des parents, les relations entre frères et sœurs et les moyens de poursuivre le soutien.",

    ru: "Практика японского языка для консультаций по воспитанию детей: тревоги по уходу за ребёнком, ночной плач и сон, питание, речь и развитие, эмоции ребёнка, усталость родителей, отношения между братьями и сёстрами и способы продолжать получать поддержку.",

    uk: "Практика японської мови для консультацій щодо виховання дітей: тривоги у догляді за дитиною, нічний плач і сон, харчування, мовлення та розвиток, емоції дитини, втома батьків, стосунки між братами й сестрами та способи продовжувати отримувати підтримку."
};

const b1ParentingConsultationSpeakerNames = {

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

    counselor: {
        ja: "子育て相談員",
        en: "Parenting Counselor",
        "zh-CN": "育儿咨询员",
        "zh-TW": "育兒諮詢員",
        ko: "육아 상담원",
        vi: "Nhân viên tư vấn nuôi dạy trẻ",
        tl: "Parenting counselor",
        id: "Konselor pengasuhan anak",
        th: "ที่ปรึกษาการเลี้ยงดูเด็ก",
        my: "ကလေးပြုစုရေးအကြံပေး",
        km: "អ្នកពិគ្រោះការចិញ្ចឹមកូន",
        ne: "बाल पालन परामर्शदाता",
        mn: "Хүүхэд өсгөх зөвлөх",
        si: "දරුවන් ඇතිදැඩි කිරීමේ උපදේශක",
        bn: "শিশু লালনপালন পরামর্শদাতা",
        pt: "Consultor de parentalidade",
        es: "Asesor de crianza",
        fr: "Conseiller parental",
        ru: "Консультант по воспитанию",
        uk: "Консультант із виховання"
    },

    publicHealthNurse: {
        ja: "保健師",
        en: "Public Health Nurse",
        "zh-CN": "保健师",
        "zh-TW": "保健師",
        ko: "보건사",
        vi: "Y tá sức khỏe cộng đồng",
        tl: "Public health nurse",
        id: "Perawat kesehatan masyarakat",
        th: "พยาบาลสาธารณสุข",
        my: "ပြည်သူ့ကျန်းမာရေးသူနာပြု",
        km: "គិលានុបដ្ឋាកសុខភាពសាធារណៈ",
        ne: "जनस्वास्थ्य नर्स",
        mn: "Нийгмийн эрүүл мэндийн сувилагч",
        si: "මහජන සෞඛ්‍ය හෙද නිලධාරි",
        bn: "জনস্বাস্থ্য নার্স",
        pt: "Enfermeiro de saúde pública",
        es: "Enfermero de salud pública",
        fr: "Infirmier de santé publique",
        ru: "Медсестра общественного здравоохранения",
        uk: "Медсестра громадського здоров'я"
    },

    childcareTeacher: {
        ja: "保育士",
        en: "Childcare Teacher",
        "zh-CN": "保育员",
        "zh-TW": "保育人員",
        ko: "보육교사",
        vi: "Giáo viên giữ trẻ",
        tl: "Childcare teacher",
        id: "Guru penitipan anak",
        th: "ครูผู้ดูแลเด็ก",
        my: "ကလေးထိန်းဆရာမ",
        km: "គ្រូថែទាំកុមារ",
        ne: "बाल हेरचाह शिक्षक",
        mn: "Хүүхэд асрах багш",
        si: "ළමා සුරැකුම් ගුරුවරයා",
        bn: "শিশু পরিচর্যা শিক্ষক",
        pt: "Educador infantil",
        es: "Educador infantil",
        fr: "Éducateur de jeunes enfants",
        ru: "Воспитатель",
        uk: "Вихователь"
    },

    developmentStaff: {
        ja: "発達相談員",
        en: "Development Counselor",
        "zh-CN": "发展咨询员",
        "zh-TW": "發展諮詢員",
        ko: "발달 상담원",
        vi: "Nhân viên tư vấn phát triển",
        tl: "Development counselor",
        id: "Konselor perkembangan",
        th: "ที่ปรึกษาด้านพัฒนาการ",
        my: "ဖွံ့ဖြိုးမှုအကြံပေး",
        km: "អ្នកពិគ្រោះអភិវឌ្ឍន៍",
        ne: "विकास परामर्शदाता",
        mn: "Хөгжлийн зөвлөх",
        si: "වර්ධන උපදේශක",
        bn: "বিকাশ পরামর্শদাতা",
        pt: "Consultor de desenvolvimento",
        es: "Asesor de desarrollo",
        fr: "Conseiller en développement",
        ru: "Консультант по развитию",
        uk: "Консультант із розвитку"
    }
};

function makeB1ParentingConsultationDialogue(
    id,
    title,
    dialogue,
    dialogueTranslations
) {
    const fullDialogueTranslations =
        completeB1ParentingConsultationTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_parenting_consultation",

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
                b1ParentingConsultationSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1ParentingConsultationContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1ParentingConsultationData = [

    // =====================================================
    // 001 子育ての不安を相談する
    // =====================================================

    makeB1ParentingConsultationDialogue(
        "b1_parentingconsult_001",
        "子育ての不安を相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "最近、子育てに自信がなくなってきて、少し相談したいです。",
                target: "さいきん こそだてにじしんがなくなってきて すこしそうだんしたいです",
                ruby: "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>子育<rt>こそだ</rt></ruby>てに<ruby>自信<rt>じしん</rt></ruby>がなくなってきて、<ruby>少<rt>すこ</rt></ruby>し<ruby>相談<rt>そうだん</rt></ruby>したいです。",
                romaji: "Saikin, kosodate ni jishin ga nakunatte kite, sukoshi sōdan shitai desu."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "子育て相談員",
                line: "話してくださってありがとうございます。どのような場面で一番不安を感じますか。",
                target: "はなしてくださってありがとうございます どのようなばめんでいちばんふあんをかんじますか",
                ruby: "<ruby>話<rt>はな</rt></ruby>してくださってありがとうございます。どのような<ruby>場面<rt>ばめん</rt></ruby>で<ruby>一番<rt>いちばん</rt></ruby><ruby>不安<rt>ふあん</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じますか。",
                romaji: "Hanashite kudasatte arigatō gozaimasu. Dono yō na bamen de ichiban fuan o kanjimasu ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが泣き続けると、どう対応すればいいかわからなくなります。",
                target: "こどもがなきつづけると どうたいおうすればいいかわからなくなります",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>泣<rt>な</rt></ruby>き<ruby>続<rt>つづ</rt></ruby>けると、どう<ruby>対応<rt>たいおう</rt></ruby>すればいいかわからなくなります。",
                romaji: "Kodomo ga nakitsuzukeru to, dō taiō sureba ii ka wakaranaku narimasu."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "子育て相談員",
                line: "一人で抱え込むと、とてもつらくなりますよね。普段、助けを頼める人はいますか。",
                target: "ひとりでかかえこむと とてもつらくなりますよね ふだん たすけをたのめるひとはいますか",
                ruby: "<ruby>一人<rt>ひとり</rt></ruby>で<ruby>抱<rt>かか</rt></ruby>え<ruby>込<rt>こ</rt></ruby>むと、とてもつらくなりますよね。<ruby>普段<rt>ふだん</rt></ruby>、<ruby>助<rt>たす</rt></ruby>けを<ruby>頼<rt>たの</rt></ruby>める<ruby>人<rt>ひと</rt></ruby>はいますか。",
                romaji: "Hitori de kakaekomu to, totemo tsuraku narimasu yo ne. Fudan, tasuke o tanomeru hito wa imasu ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "近くに家族がいないので、ほとんど一人で見ています。",
                target: "ちかくにかぞくがいないので ほとんどひとりでみています",
                ruby: "<ruby>近<rt>ちか</rt></ruby>くに<ruby>家族<rt>かぞく</rt></ruby>がいないので、ほとんど<ruby>一人<rt>ひとり</rt></ruby>で<ruby>見<rt>み</rt></ruby>ています。",
                romaji: "Chikaku ni kazoku ga inai node, hotondo hitori de mite imasu."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "子育て相談員",
                line: "では、利用できる相談窓口や支援サービスを一緒に確認しましょう。",
                target: "では りようできるそうだんまどぐちやしえんさーびすをいっしょにかくにんしましょう",
                ruby: "では、<ruby>利用<rt>りよう</rt></ruby>できる<ruby>相談窓口<rt>そうだんまどぐち</rt></ruby>や<ruby>支援<rt>しえん</rt></ruby>サービスを<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Dewa, riyō dekiru sōdan madoguchi ya shien sābisu o issho ni kakunin shimashō."
            }
        ],

        {
            ja: [
                "保護者：最近、子育てに自信がなくなってきて、少し相談したいです。",
                "子育て相談員：話してくださってありがとうございます。どのような場面で一番不安を感じますか。",
                "保護者：子どもが泣き続けると、どう対応すればいいかわからなくなります。",
                "子育て相談員：一人で抱え込むと、とてもつらくなりますよね。普段、助けを頼める人はいますか。",
                "保護者：近くに家族がいないので、ほとんど一人で見ています。",
                "子育て相談員：では、利用できる相談窓口や支援サービスを一緒に確認しましょう。"
            ],

            en: [
                "Parent: Recently, I have been losing confidence in parenting, and I would like to talk about it.",
                "Parenting Counselor: Thank you for sharing that. In what situations do you feel the most anxious?",
                "Parent: When my child keeps crying, I no longer know how to respond.",
                "Parenting Counselor: It can be very hard when you carry everything alone. Do you usually have anyone you can ask for help?",
                "Parent: I do not have family nearby, so I care for my child almost entirely by myself.",
                "Parenting Counselor: Then let us check together what consultation desks and support services you can use."
            ],

            "zh-CN": [
                "家长：最近我对育儿越来越没有自信，想稍微咨询一下。",
                "育儿咨询员：谢谢您愿意说出来。您在什么情况下最感到不安？",
                "家长：孩子一直哭的时候，我就不知道该怎么应对。",
                "育儿咨询员：一个人承担的话会非常辛苦。平时有可以求助的人吗？",
                "家长：附近没有家人，所以几乎都是我一个人在照顾。",
                "育儿咨询员：那么，我们一起确认可以利用的咨询窗口和支援服务吧。"
            ],

            "zh-TW": [
                "家長：最近我對育兒越來越沒有自信，想稍微諮詢一下。",
                "育兒諮詢員：謝謝您願意說出來。您在什麼情況下最感到不安？",
                "家長：孩子一直哭的時候，我就不知道該怎麼應對。",
                "育兒諮詢員：一個人承擔的話會非常辛苦。平時有可以求助的人嗎？",
                "家長：附近沒有家人，所以幾乎都是我一個人在照顧。",
                "育兒諮詢員：那麼，我們一起確認可以利用的諮詢窗口和支援服務吧。"
            ],

            ko: [
                "보호자: 최근 육아에 자신이 없어져서 조금 상담하고 싶습니다.",
                "육아 상담원: 말씀해 주셔서 감사합니다. 어떤 상황에서 가장 불안하신가요?",
                "보호자: 아이가 계속 울면 어떻게 대응해야 할지 모르겠습니다.",
                "육아 상담원: 혼자서 모든 것을 떠안으면 정말 힘들지요. 평소 도움을 부탁할 수 있는 사람이 있나요?",
                "보호자: 가까이에 가족이 없어서 거의 혼자 돌보고 있습니다.",
                "육아 상담원: 그러면 이용할 수 있는 상담 창구와 지원 서비스를 함께 확인해 봅시다."
            ],

            vi: [
                "Phụ huynh: Gần đây tôi mất tự tin trong việc nuôi con nên muốn được tư vấn một chút.",
                "Nhân viên tư vấn nuôi dạy trẻ: Cảm ơn bạn đã chia sẻ. Bạn cảm thấy lo lắng nhất trong tình huống nào?",
                "Phụ huynh: Khi con cứ khóc mãi, tôi không biết phải xử lý thế nào.",
                "Nhân viên tư vấn nuôi dạy trẻ: Nếu ôm hết mọi việc một mình thì rất vất vả. Bình thường bạn có ai có thể nhờ giúp không?",
                "Phụ huynh: Gia đình tôi không ở gần nên hầu như tôi chăm con một mình.",
                "Nhân viên tư vấn nuôi dạy trẻ: Vậy chúng ta hãy cùng kiểm tra các nơi tư vấn và dịch vụ hỗ trợ mà bạn có thể sử dụng."
            ]
        }
    ),

    // =====================================================
    // 002 夜泣きと睡眠について相談する
    // =====================================================

    makeB1ParentingConsultationDialogue(
        "b1_parentingconsult_002",
        "夜泣きと睡眠について相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが夜中に何度も起きるので、私もほとんど眠れていません。",
                target: "こどもがよなかになんどもおきるので わたしもほとんどねむれていません",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>夜中<rt>よなか</rt></ruby>に<ruby>何度<rt>なんど</rt></ruby>も<ruby>起<rt>お</rt></ruby>きるので、<ruby>私<rt>わたし</rt></ruby>もほとんど<ruby>眠<rt>ねむ</rt></ruby>れていません。",
                romaji: "Kodomo ga yonaka ni nando mo okiru node, watashi mo hotondo nemurete imasen."
            },
            {
                label: "話者A",
                key: "publicHealthNurse",
                name: "保健師",
                line: "それは大変ですね。夜に起きるとき、泣き方や体調に気になる変化はありますか。",
                target: "それはたいへんですね よるにおきるとき なきかたやたいちょうにきになるへんかはありますか",
                ruby: "それは<ruby>大変<rt>たいへん</rt></ruby>ですね。<ruby>夜<rt>よる</rt></ruby>に<ruby>起<rt>お</rt></ruby>きるとき、<ruby>泣<rt>な</rt></ruby>き<ruby>方<rt>かた</rt></ruby>や<ruby>体調<rt>たいちょう</rt></ruby>に<ruby>気<rt>き</rt></ruby>になる<ruby>変化<rt>へんか</rt></ruby>はありますか。",
                romaji: "Sore wa taihen desu ne. Yoru ni okiru toki, nakikata ya taichō ni ki ni naru henka wa arimasu ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "熱はありませんが、抱っこしないと長く泣き続けます。",
                target: "ねつはありませんが だっこしないとながくなきつづけます",
                ruby: "<ruby>熱<rt>ねつ</rt></ruby>はありませんが、<ruby>抱<rt>だ</rt></ruby>っこしないと<ruby>長<rt>なが</rt></ruby>く<ruby>泣<rt>な</rt></ruby>き<ruby>続<rt>つづ</rt></ruby>けます。",
                romaji: "Netsu wa arimasen ga, dakko shinai to nagaku nakitsuzukemasu."
            },
            {
                label: "話者A",
                key: "publicHealthNurse",
                name: "保健師",
                line: "まずは生活リズムや昼寝の時間を一緒に確認してみましょう。",
                target: "まずはせいかつりずむやひるねのじかんをいっしょにかくにんしてみましょう",
                ruby: "まずは<ruby>生活<rt>せいかつ</rt></ruby>リズムや<ruby>昼寝<rt>ひるね</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>してみましょう。",
                romaji: "Mazu wa seikatsu rizumu ya hirune no jikan o issho ni kakunin shite mimashō."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "昼寝の時間が日によって違うので、それも関係しているかもしれません。",
                target: "ひるねのじかんがひによってちがうので それもかんけいしているかもしれません",
                ruby: "<ruby>昼寝<rt>ひるね</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>が<ruby>日<rt>ひ</rt></ruby>によって<ruby>違<rt>ちが</rt></ruby>うので、それも<ruby>関係<rt>かんけい</rt></ruby>しているかもしれません。",
                romaji: "Hirune no jikan ga hi ni yotte chigau node, sore mo kankei shite iru kamo shiremasen."
            },
            {
                label: "話者A",
                key: "publicHealthNurse",
                name: "保健師",
                line: "記録をつけると変化が見えやすくなります。無理のない範囲で試してみましょう。",
                target: "きろくをつけるとへんかがみえやすくなります むりのないはんいでためしてみましょう",
                ruby: "<ruby>記録<rt>きろく</rt></ruby>をつけると<ruby>変化<rt>へんか</rt></ruby>が<ruby>見<rt>み</rt></ruby>えやすくなります。<ruby>無理<rt>むり</rt></ruby>のない<ruby>範囲<rt>はんい</rt></ruby>で<ruby>試<rt>ため</rt></ruby>してみましょう。",
                romaji: "Kiroku o tsukeru to henka ga mieyasuku narimasu. Muri no nai han'i de tameshite mimashō."
            }
        ],

        {
            ja: [
                "保護者：子どもが夜中に何度も起きるので、私もほとんど眠れていません。",
                "保健師：それは大変ですね。夜に起きるとき、泣き方や体調に気になる変化はありますか。",
                "保護者：熱はありませんが、抱っこしないと長く泣き続けます。",
                "保健師：まずは生活リズムや昼寝の時間を一緒に確認してみましょう。",
                "保護者：昼寝の時間が日によって違うので、それも関係しているかもしれません。",
                "保健師：記録をつけると変化が見えやすくなります。無理のない範囲で試してみましょう。"
            ],

            en: [
                "Parent: My child wakes up many times during the night, so I can hardly sleep either.",
                "Public Health Nurse: That sounds very difficult. When your child wakes at night, have you noticed any concerning changes in crying or health?",
                "Parent: There is no fever, but my child keeps crying for a long time unless I hold them.",
                "Public Health Nurse: First, let us check the daily rhythm and nap times together.",
                "Parent: Nap times differ depending on the day, so that may be related.",
                "Public Health Nurse: Keeping a record can make patterns easier to see. Let us try it within a manageable range."
            ],

            "zh-CN": [
                "家长：孩子半夜会醒来好几次，所以我也几乎睡不好。",
                "保健师：那真是很辛苦。孩子晚上醒来时，哭法或身体状况有没有让您担心的变化？",
                "家长：没有发烧，但是如果不抱着，就会哭很久。",
                "保健师：首先我们一起确认一下生活节奏和午睡时间吧。",
                "家长：午睡时间每天不一样，也许和这个有关。",
                "保健师：做记录的话更容易看出变化。我们在不勉强的范围内试试看吧。"
            ],

            "zh-TW": [
                "家長：孩子半夜會醒來好幾次，所以我也幾乎睡不好。",
                "保健師：那真是很辛苦。孩子晚上醒來時，哭法或身體狀況有沒有讓您擔心的變化？",
                "家長：沒有發燒，但是如果不抱著，就會哭很久。",
                "保健師：首先我們一起確認一下生活節奏和午睡時間吧。",
                "家長：午睡時間每天不一樣，也許和這個有關。",
                "保健師：做記錄的話更容易看出變化。我們在不勉強的範圍內試試看吧。"
            ],

            ko: [
                "보호자: 아이가 밤중에 여러 번 깨서 저도 거의 잠을 자지 못합니다.",
                "보건사: 정말 힘드시겠네요. 밤에 깰 때 울음이나 몸 상태에 걱정되는 변화가 있나요?",
                "보호자: 열은 없지만 안아 주지 않으면 오래 계속 웁니다.",
                "보건사: 우선 생활 리듬과 낮잠 시간을 함께 확인해 봅시다.",
                "보호자: 낮잠 시간이 날마다 달라서 그것도 관련이 있을지 모르겠습니다.",
                "보건사: 기록을 하면 변화가 보이기 쉬워집니다. 무리하지 않는 범위에서 시도해 봅시다."
            ],

            vi: [
                "Phụ huynh: Con tôi thức dậy nhiều lần vào ban đêm nên tôi cũng hầu như không ngủ được.",
                "Y tá sức khỏe cộng đồng: Điều đó thật vất vả. Khi cháu thức dậy ban đêm, cách khóc hoặc sức khỏe có thay đổi gì khiến bạn lo không?",
                "Phụ huynh: Cháu không sốt, nhưng nếu không bế thì cháu khóc rất lâu.",
                "Y tá sức khỏe cộng đồng: Trước hết, chúng ta hãy cùng kiểm tra nhịp sinh hoạt và thời gian ngủ trưa.",
                "Phụ huynh: Thời gian ngủ trưa khác nhau tùy ngày, nên có thể điều đó cũng liên quan.",
                "Y tá sức khỏe cộng đồng: Ghi chép lại sẽ giúp dễ thấy sự thay đổi hơn. Hãy thử trong phạm vi không quá sức."
            ]
        }
    ),

    // =====================================================
    // 003 食事や好き嫌いについて相談する
    // =====================================================

    makeB1ParentingConsultationDialogue(
        "b1_parentingconsult_003",
        "食事や好き嫌いについて相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもの好き嫌いが多くて、食事の時間が毎日大変です。",
                target: "こどものすききらいがおおくて しょくじのじかんがまいにちたいへんです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもの<ruby>好<rt>す</rt></ruby>き<ruby>嫌<rt>きら</rt></ruby>いが<ruby>多<rt>おお</rt></ruby>くて、<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>が<ruby>毎日<rt>まいにち</rt></ruby><ruby>大変<rt>たいへん</rt></ruby>です。",
                romaji: "Kodomo no sukikirai ga ōkute, shokuji no jikan ga mainichi taihen desu."
            },
            {
                label: "話者A",
                key: "publicHealthNurse",
                name: "保健師",
                line: "毎日のことなので負担になりますよね。どのような食べ物を嫌がりますか。",
                target: "まいにちのことなのでふたんになりますよね どのようなたべものをいやがりますか",
                ruby: "<ruby>毎日<rt>まいにち</rt></ruby>のことなので<ruby>負担<rt>ふたん</rt></ruby>になりますよね。どのような<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>を<ruby>嫌<rt>いや</rt></ruby>がりますか。",
                romaji: "Mainichi no koto na node futan ni narimasu yo ne. Dono yō na tabemono o iyagarimasu ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "野菜をほとんど食べません。出すだけで泣くこともあります。",
                target: "やさいをほとんどたべません だすだけでなくこともあります",
                ruby: "<ruby>野菜<rt>やさい</rt></ruby>をほとんど<ruby>食<rt>た</rt></ruby>べません。<ruby>出<rt>だ</rt></ruby>すだけで<ruby>泣<rt>な</rt></ruby>くこともあります。",
                romaji: "Yasai o hotondo tabemasen. Dasu dake de naku koto mo arimasu."
            },
            {
                label: "話者A",
                key: "publicHealthNurse",
                name: "保健師",
                line: "無理に食べさせようとすると、食事の時間がつらくなることもあります。",
                target: "むりにたべさせようとすると しょくじのじかんがつらくなることもあります",
                ruby: "<ruby>無理<rt>むり</rt></ruby>に<ruby>食<rt>た</rt></ruby>べさせようとすると、<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>がつらくなることもあります。",
                romaji: "Muri ni tabesaseyō to suru to, shokuji no jikan ga tsuraku naru koto mo arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "食べさせなければいけないと思って、私も焦ってしまいます。",
                target: "たべさせなければいけないとおもって わたしもあせってしまいます",
                ruby: "<ruby>食<rt>た</rt></ruby>べさせなければいけないと<ruby>思<rt>おも</rt></ruby>って、<ruby>私<rt>わたし</rt></ruby>も<ruby>焦<rt>あせ</rt></ruby>ってしまいます。",
                romaji: "Tabesasenakereba ikenai to omotte, watashi mo asette shimaimasu."
            },
            {
                label: "話者A",
                key: "publicHealthNurse",
                name: "保健師",
                line: "少しずつ慣れる方法を考えましょう。食事の様子も記録しておくと相談しやすいです。",
                target: "すこしずつなれるほうほうをかんがえましょう しょくじのようすもきろくしておくとそうだんしやすいです",
                ruby: "<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>慣<rt>な</rt></ruby>れる<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えましょう。<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>様子<rt>ようす</rt></ruby>も<ruby>記録<rt>きろく</rt></ruby>しておくと<ruby>相談<rt>そうだん</rt></ruby>しやすいです。",
                romaji: "Sukoshizutsu nareru hōhō o kangaemashō. Shokuji no yōsu mo kiroku shite oku to sōdan shiyasui desu."
            }
        ],

        {
            ja: [
                "保護者：子どもの好き嫌いが多くて、食事の時間が毎日大変です。",
                "保健師：毎日のことなので負担になりますよね。どのような食べ物を嫌がりますか。",
                "保護者：野菜をほとんど食べません。出すだけで泣くこともあります。",
                "保健師：無理に食べさせようとすると、食事の時間がつらくなることもあります。",
                "保護者：食べさせなければいけないと思って、私も焦ってしまいます。",
                "保健師：少しずつ慣れる方法を考えましょう。食事の様子も記録しておくと相談しやすいです。"
            ],

            en: [
                "Parent: My child is very picky, so mealtimes are difficult every day.",
                "Public Health Nurse: Since it happens every day, it becomes a burden. What kinds of foods does your child dislike?",
                "Parent: My child hardly eats vegetables. Sometimes just serving them makes my child cry.",
                "Public Health Nurse: If you try to force your child to eat, mealtimes may become stressful.",
                "Parent: I feel that I have to make my child eat, so I get anxious too.",
                "Public Health Nurse: Let us think about ways to get used to foods little by little. Keeping a record of mealtimes also makes it easier to discuss."
            ],

            "zh-CN": [
                "家长：孩子挑食很严重，每天吃饭时间都很辛苦。",
                "保健师：每天都会发生，所以确实会成为负担。孩子不喜欢什么样的食物？",
                "家长：几乎不吃蔬菜。有时候只是端出来就会哭。",
                "保健师：如果勉强让孩子吃，吃饭时间可能会变得更痛苦。",
                "家长：我总觉得必须让孩子吃，所以自己也会着急。",
                "保健师：我们一起想想让孩子一点一点适应的方法吧。记录吃饭时的情况也会更方便咨询。"
            ],

            "zh-TW": [
                "家長：孩子挑食很嚴重，每天吃飯時間都很辛苦。",
                "保健師：每天都會發生，所以確實會成為負擔。孩子不喜歡什麼樣的食物？",
                "家長：幾乎不吃蔬菜。有時候只是端出來就會哭。",
                "保健師：如果勉強讓孩子吃，吃飯時間可能會變得更痛苦。",
                "家長：我總覺得必須讓孩子吃，所以自己也會著急。",
                "保健師：我們一起想想讓孩子一點一點適應的方法吧。記錄吃飯時的情況也會更方便諮詢。"
            ],

            ko: [
                "보호자: 아이가 편식이 심해서 식사 시간이 매일 힘듭니다.",
                "보건사: 매일 있는 일이라 부담이 되겠네요. 어떤 음식을 싫어하나요?",
                "보호자: 채소를 거의 먹지 않습니다. 내놓기만 해도 울 때가 있습니다.",
                "보건사: 억지로 먹이려고 하면 식사 시간이 더 힘들어질 수도 있습니다.",
                "보호자: 먹여야 한다고 생각해서 저도 초조해집니다.",
                "보건사: 조금씩 익숙해지는 방법을 생각해 봅시다. 식사 모습도 기록해 두면 상담하기 쉽습니다."
            ],

            vi: [
                "Phụ huynh: Con tôi kén ăn nhiều nên giờ ăn mỗi ngày rất vất vả.",
                "Y tá sức khỏe cộng đồng: Vì đó là việc hằng ngày nên chắc chắn rất áp lực. Cháu không thích những món như thế nào?",
                "Phụ huynh: Cháu hầu như không ăn rau. Có khi chỉ cần tôi đưa ra là cháu khóc.",
                "Y tá sức khỏe cộng đồng: Nếu cố ép trẻ ăn, giờ ăn có thể trở nên căng thẳng hơn.",
                "Phụ huynh: Tôi nghĩ mình phải cho cháu ăn nên cũng trở nên sốt ruột.",
                "Y tá sức khỏe cộng đồng: Chúng ta hãy nghĩ cách để cháu quen dần từng chút một. Ghi lại tình hình bữa ăn cũng giúp việc tư vấn dễ hơn."
            ]
        }
    ),

    // =====================================================
    // 004 言葉や発達について相談する
    // =====================================================

    makeB1ParentingConsultationDialogue(
        "b1_parentingconsult_004",
        "言葉や発達について相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "同じ年齢の子と比べて、言葉が少ないように感じて心配です。",
                target: "おなじねんれいのことくらべて ことばがすくないようにかんじてしんぱいです",
                ruby: "<ruby>同<rt>おな</rt></ruby>じ<ruby>年齢<rt>ねんれい</rt></ruby>の<ruby>子<rt>こ</rt></ruby>と<ruby>比<rt>くら</rt></ruby>べて、<ruby>言葉<rt>ことば</rt></ruby>が<ruby>少<rt>すく</rt></ruby>ないように<ruby>感<rt>かん</rt></ruby>じて<ruby>心配<rt>しんぱい</rt></ruby>です。",
                romaji: "Onaji nenrei no ko to kurabete, kotoba ga sukunai yō ni kanjite shinpai desu."
            },
            {
                label: "話者A",
                key: "developmentStaff",
                name: "発達相談員",
                line: "心配になりますよね。普段、どのような場面で言葉を使っていますか。",
                target: "しんぱいになりますよね ふだん どのようなばめんでことばをつかっていますか",
                ruby: "<ruby>心配<rt>しんぱい</rt></ruby>になりますよね。<ruby>普段<rt>ふだん</rt></ruby>、どのような<ruby>場面<rt>ばめん</rt></ruby>で<ruby>言葉<rt>ことば</rt></ruby>を<ruby>使<rt>つか</rt></ruby>っていますか。",
                romaji: "Shinpai ni narimasu yo ne. Fudan, dono yō na bamen de kotoba o tsukatte imasu ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "欲しい物があるときは、指をさして声を出しますが、単語は少ないです。",
                target: "ほしいものがあるときは ゆびをさしてこえをだしますが たんごはすくないです",
                ruby: "<ruby>欲<rt>ほ</rt></ruby>しい<ruby>物<rt>もの</rt></ruby>があるときは、<ruby>指<rt>ゆび</rt></ruby>をさして<ruby>声<rt>こえ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>しますが、<ruby>単語<rt>たんご</rt></ruby>は<ruby>少<rt>すく</rt></ruby>ないです。",
                romaji: "Hoshii mono ga aru toki wa, yubi o sashite koe o dashimasu ga, tango wa sukunai desu."
            },
            {
                label: "話者A",
                key: "developmentStaff",
                name: "発達相談員",
                line: "言葉だけでなく、表情や指さしなどの伝え方も大切な情報です。",
                target: "ことばだけでなく ひょうじょうやゆびさしなどのつたえかたもたいせつなじょうほうです",
                ruby: "<ruby>言葉<rt>ことば</rt></ruby>だけでなく、<ruby>表情<rt>ひょうじょう</rt></ruby>や<ruby>指<rt>ゆび</rt></ruby>さしなどの<ruby>伝<rt>つた</rt></ruby>え<ruby>方<rt>かた</rt></ruby>も<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>情報<rt>じょうほう</rt></ruby>です。",
                romaji: "Kotoba dake de naku, hyōjō ya yubisashi nado no tsutaekata mo taisetsu na jōhō desu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "家では母語も使っているので、日本語が遅れているのかと不安になります。",
                target: "いえではぼごもつかっているので にほんごがおくれているのかとふあんになります",
                ruby: "<ruby>家<rt>いえ</rt></ruby>では<ruby>母語<rt>ぼご</rt></ruby>も<ruby>使<rt>つか</rt></ruby>っているので、<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れているのかと<ruby>不安<rt>ふあん</rt></ruby>になります。",
                romaji: "Ie de wa bogo mo tsukatte iru node, Nihongo ga okurete iru no ka to fuan ni narimasu."
            },
            {
                label: "話者A",
                key: "developmentStaff",
                name: "発達相談員",
                line: "家庭での言語環境も含めて考えます。様子を聞きながら、必要な支援を一緒に考えましょう。",
                target: "かていでのげんごかんきょうもふくめてかんがえます ようすをききながら ひつようなしえんをいっしょにかんがえましょう",
                ruby: "<ruby>家庭<rt>かてい</rt></ruby>での<ruby>言語環境<rt>げんごかんきょう</rt></ruby>も<ruby>含<rt>ふく</rt></ruby>めて<ruby>考<rt>かんが</rt></ruby>えます。<ruby>様子<rt>ようす</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きながら、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>支援<rt>しえん</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Katei de no gengo kankyō mo fukumete kangaemasu. Yōsu o kikinagara, hitsuyō na shien o issho ni kangaemashō."
            }
        ],

        {
            ja: [
                "保護者：同じ年齢の子と比べて、言葉が少ないように感じて心配です。",
                "発達相談員：心配になりますよね。普段、どのような場面で言葉を使っていますか。",
                "保護者：欲しい物があるときは、指をさして声を出しますが、単語は少ないです。",
                "発達相談員：言葉だけでなく、表情や指さしなどの伝え方も大切な情報です。",
                "保護者：家では母語も使っているので、日本語が遅れているのかと不安になります。",
                "発達相談員：家庭での言語環境も含めて考えます。様子を聞きながら、必要な支援を一緒に考えましょう。"
            ],

            en: [
                "Parent: Compared with children of the same age, my child seems to use fewer words, and I am worried.",
                "Development Counselor: That can be concerning. In what situations does your child usually use words?",
                "Parent: When my child wants something, they point and make sounds, but they use only a few words.",
                "Development Counselor: Communication through facial expressions and pointing is also important information, not only words.",
                "Parent: We also use our home language at home, so I worry that my child's Japanese may be delayed.",
                "Development Counselor: We will consider the language environment at home too. Let us listen to your child's situation and think together about support if needed."
            ],

            "zh-CN": [
                "家长：和同龄孩子相比，我觉得孩子说的话比较少，所以很担心。",
                "发展咨询员：这确实会让人担心。平时孩子在什么情况下会使用语言？",
                "家长：想要东西的时候，会用手指并发出声音，但是单词很少。",
                "发展咨询员：不仅是语言，表情和指物等表达方式也是重要的信息。",
                "家长：家里也使用母语，所以我担心孩子的日语是不是落后了。",
                "发展咨询员：我们会把家庭语言环境也考虑进去。一边听取孩子的情况，一边一起考虑需要的支援。"
            ],

            "zh-TW": [
                "家長：和同齡孩子相比，我覺得孩子說的話比較少，所以很擔心。",
                "發展諮詢員：這確實會讓人擔心。平時孩子在什麼情況下會使用語言？",
                "家長：想要東西的時候，會用手指並發出聲音，但是單詞很少。",
                "發展諮詢員：不僅是語言，表情和指物等表達方式也是重要的資訊。",
                "家長：家裡也使用母語，所以我擔心孩子的日語是不是落後了。",
                "發展諮詢員：我們會把家庭語言環境也考慮進去。一邊聽取孩子的情況，一邊一起考慮需要的支援。"
            ],

            ko: [
                "보호자: 같은 나이의 아이와 비교해서 말이 적은 것 같아 걱정됩니다.",
                "발달 상담원: 걱정되시겠네요. 평소 어떤 상황에서 말을 사용하나요?",
                "보호자: 원하는 것이 있을 때는 손가락으로 가리키고 소리를 내지만 단어는 적습니다.",
                "발달 상담원: 말뿐만 아니라 표정이나 손가락으로 가리키는 등 전달 방식도 중요한 정보입니다.",
                "보호자: 집에서는 모국어도 사용하고 있어서 일본어가 늦는 것은 아닌지 불안합니다.",
                "발달 상담원: 가정의 언어 환경도 포함해서 생각합니다. 아이의 모습을 들으면서 필요한 지원을 함께 생각해 봅시다."
            ],

            vi: [
                "Phụ huynh: So với trẻ cùng tuổi, tôi cảm thấy con tôi nói ít hơn nên rất lo.",
                "Nhân viên tư vấn phát triển: Điều đó có thể khiến bạn lo lắng. Bình thường cháu dùng lời nói trong những tình huống nào?",
                "Phụ huynh: Khi muốn thứ gì đó, cháu chỉ tay và phát ra âm thanh, nhưng số từ rất ít.",
                "Nhân viên tư vấn phát triển: Không chỉ lời nói, cách truyền đạt bằng nét mặt hoặc chỉ tay cũng là thông tin quan trọng.",
                "Phụ huynh: Ở nhà chúng tôi cũng dùng tiếng mẹ đẻ nên tôi lo tiếng Nhật của cháu bị chậm.",
                "Nhân viên tư vấn phát triển: Chúng tôi sẽ xem xét cả môi trường ngôn ngữ trong gia đình. Hãy cùng nghe tình hình của cháu và suy nghĩ về hỗ trợ cần thiết."
            ]
        }
    ),

    // =====================================================
    // 005 子どもの気持ちへの対応を相談する
    // =====================================================

    makeB1ParentingConsultationDialogue(
        "b1_parentingconsult_005",
        "子どもの気持ちへの対応を相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが思い通りにならないと、大きな声で泣いたり怒ったりします。",
                target: "こどもがおもいどおりにならないと おおきなこえでないたりおこったりします",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>思<rt>おも</rt></ruby>い<ruby>通<rt>どお</rt></ruby>りにならないと、<ruby>大<rt>おお</rt></ruby>きな<ruby>声<rt>こえ</rt></ruby>で<ruby>泣<rt>な</rt></ruby>いたり<ruby>怒<rt>おこ</rt></ruby>ったりします。",
                romaji: "Kodomo ga omoi dōri ni naranai to, ōkina koe de naitari okottari shimasu."
            },
            {
                label: "話者A",
                key: "childcareTeacher",
                name: "保育士",
                line: "そのような場面が続くと、保護者の方も疲れてしまいますよね。",
                target: "そのようなばめんがつづくと ほごしゃのかたもつかれてしまいますよね",
                ruby: "そのような<ruby>場面<rt>ばめん</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>くと、<ruby>保護者<rt>ほごしゃ</rt></ruby>の<ruby>方<rt>かた</rt></ruby>も<ruby>疲<rt>つか</rt></ruby>れてしまいますよね。",
                romaji: "Sono yō na bamen ga tsuzuku to, hogosha no kata mo tsukarete shimaimasu yo ne."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "つい強く注意してしまい、あとで後悔することがあります。",
                target: "つよくちゅういしてしまい あとでこうかいすることがあります",
                ruby: "つい<ruby>強<rt>つよ</rt></ruby>く<ruby>注意<rt>ちゅうい</rt></ruby>してしまい、あとで<ruby>後悔<rt>こうかい</rt></ruby>することがあります。",
                romaji: "Tsui tsuyoku chūi shite shimai, ato de kōkai suru koto ga arimasu."
            },
            {
                label: "話者A",
                key: "childcareTeacher",
                name: "保育士",
                line: "まずは子どもの気持ちを短い言葉で受け止める方法を試してみましょう。",
                target: "まずはこどものきもちをみじかいことばでうけとめるほうほうをためしてみましょう",
                ruby: "まずは<ruby>子<rt>こ</rt></ruby>どもの<ruby>気持<rt>きも</rt></ruby>ちを<ruby>短<rt>みじか</rt></ruby>い<ruby>言葉<rt>ことば</rt></ruby>で<ruby>受<rt>う</rt></ruby>け<ruby>止<rt>と</rt></ruby>める<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>試<rt>ため</rt></ruby>してみましょう。",
                romaji: "Mazu wa kodomo no kimochi o mijikai kotoba de uketomeru hōhō o tameshite mimashō."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "例えば、どのように声をかければいいでしょうか。",
                target: "たとえば どのようにこえをかければいいでしょうか",
                ruby: "<ruby>例<rt>たと</rt></ruby>えば、どのように<ruby>声<rt>こえ</rt></ruby>をかければいいでしょうか。",
                romaji: "Tatoeba, dono yō ni koe o kakereba ii deshō ka."
            },
            {
                label: "話者A",
                key: "childcareTeacher",
                name: "保育士",
                line: "「嫌だったね」や「まだ遊びたかったね」のように、気持ちを言葉にしてあげるとよいです。",
                target: "いやだったね や まだあそびたかったね のように きもちをことばにしてあげるとよいです",
                ruby: "「<ruby>嫌<rt>いや</rt></ruby>だったね」や「まだ<ruby>遊<rt>あそ</rt></ruby>びたかったね」のように、<ruby>気持<rt>きも</rt></ruby>ちを<ruby>言葉<rt>ことば</rt></ruby>にしてあげるとよいです。",
                romaji: "“Iya datta ne” ya “mada asobitakatta ne” no yō ni, kimochi o kotoba ni shite ageru to yoi desu."
            }
        ],

        {
            ja: [
                "保護者：子どもが思い通りにならないと、大きな声で泣いたり怒ったりします。",
                "保育士：そのような場面が続くと、保護者の方も疲れてしまいますよね。",
                "保護者：つい強く注意してしまい、あとで後悔することがあります。",
                "保育士：まずは子どもの気持ちを短い言葉で受け止める方法を試してみましょう。",
                "保護者：例えば、どのように声をかければいいでしょうか。",
                "保育士：「嫌だったね」や「まだ遊びたかったね」のように、気持ちを言葉にしてあげるとよいです。"
            ],

            en: [
                "Parent: When things do not go the way my child wants, my child cries loudly or gets angry.",
                "Childcare Teacher: When those situations continue, parents become tired too.",
                "Parent: I sometimes scold my child too strongly and regret it afterward.",
                "Childcare Teacher: First, let us try accepting your child's feelings in short words.",
                "Parent: For example, what should I say?",
                "Childcare Teacher: It can help to put the feeling into words, such as, “That felt bad, didn't it?” or “You still wanted to play.”"
            ],

            "zh-CN": [
                "家长：孩子不如意时，会大声哭或生气。",
                "保育员：这样的场面持续发生，家长也会很累吧。",
                "家长：我有时会不由自主地严厉批评，之后又后悔。",
                "保育员：首先可以试着用简短的话接住孩子的情绪。",
                "家长：比如，应该怎么说呢？",
                "保育员：可以把孩子的感受说出来，比如“你觉得不喜欢，对吧”或“你还想继续玩，对吧”。"
            ],

            "zh-TW": [
                "家長：孩子不如意時，會大聲哭或生氣。",
                "保育人員：這樣的場面持續發生，家長也會很累吧。",
                "家長：我有時會不由自主地嚴厲批評，之後又後悔。",
                "保育人員：首先可以試著用簡短的話接住孩子的情緒。",
                "家長：比如，應該怎麼說呢？",
                "保育人員：可以把孩子的感受說出來，比如「你覺得不喜歡，對吧」或「你還想繼續玩，對吧」。"
            ],

            ko: [
                "보호자: 아이가 뜻대로 되지 않으면 큰 소리로 울거나 화를 냅니다.",
                "보육교사: 그런 상황이 계속되면 보호자도 지치게 되지요.",
                "보호자: 저도 모르게 강하게 주의를 주고 나중에 후회할 때가 있습니다.",
                "보육교사: 우선 아이의 마음을 짧은 말로 받아 주는 방법을 시도해 봅시다.",
                "보호자: 예를 들면 어떻게 말을 걸면 좋을까요?",
                "보육교사: “싫었구나”나 “아직 놀고 싶었구나”처럼 마음을 말로 표현해 주면 좋습니다."
            ],

            vi: [
                "Phụ huynh: Khi mọi việc không theo ý mình, con tôi khóc lớn hoặc tức giận.",
                "Giáo viên giữ trẻ: Nếu những tình huống như vậy kéo dài, cha mẹ cũng sẽ rất mệt.",
                "Phụ huynh: Có lúc tôi lỡ la mắng mạnh rồi sau đó lại hối hận.",
                "Giáo viên giữ trẻ: Trước hết, hãy thử cách đón nhận cảm xúc của trẻ bằng những câu ngắn.",
                "Phụ huynh: Ví dụ, tôi nên nói như thế nào?",
                "Giáo viên giữ trẻ: Bạn có thể nói thành lời cảm xúc của trẻ, như “Con không thích nhỉ” hoặc “Con vẫn muốn chơi nữa nhỉ.”"
            ]
        }
    ),

    // =====================================================
    // 006 親の疲れについて相談する
    // =====================================================

    makeB1ParentingConsultationDialogue(
        "b1_parentingconsult_006",
        "親の疲れについて相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "最近、疲れがたまっていて、子どもに優しくできない日があります。",
                target: "さいきん つかれがたまっていて こどもにやさしくできないひがあります",
                ruby: "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>疲<rt>つか</rt></ruby>れがたまっていて、<ruby>子<rt>こ</rt></ruby>どもに<ruby>優<rt>やさ</rt></ruby>しくできない<ruby>日<rt>ひ</rt></ruby>があります。",
                romaji: "Saikin, tsukare ga tamatte ite, kodomo ni yasashiku dekinai hi ga arimasu."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "子育て相談員",
                line: "正直に話してくださってありがとうございます。休む時間は少しでも取れていますか。",
                target: "しょうじきにはなしてくださってありがとうございます やすむじかんはすこしでもとれていますか",
                ruby: "<ruby>正直<rt>しょうじき</rt></ruby>に<ruby>話<rt>はな</rt></ruby>してくださってありがとうございます。<ruby>休<rt>やす</rt></ruby>む<ruby>時間<rt>じかん</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>しでも<ruby>取<rt>と</rt></ruby>れていますか。",
                romaji: "Shōjiki ni hanashite kudasatte arigatō gozaimasu. Yasumu jikan wa sukoshi demo torete imasu ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが寝たあとに家事をしているので、自分の時間がほとんどありません。",
                target: "こどもがねたあとにかじをしているので じぶんのじかんがほとんどありません",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>寝<rt>ね</rt></ruby>たあとに<ruby>家事<rt>かじ</rt></ruby>をしているので、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>がほとんどありません。",
                romaji: "Kodomo ga neta ato ni kaji o shite iru node, jibun no jikan ga hotondo arimasen."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "子育て相談員",
                line: "全部を完璧にしようとすると、心も体も休まりませんよね。",
                target: "ぜんぶをかんぺきにしようとすると こころもからだもやすまりませんよね",
                ruby: "<ruby>全部<rt>ぜんぶ</rt></ruby>を<ruby>完璧<rt>かんぺき</rt></ruby>にしようとすると、<ruby>心<rt>こころ</rt></ruby>も<ruby>体<rt>からだ</rt></ruby>も<ruby>休<rt>やす</rt></ruby>まりませんよね。",
                romaji: "Zenbu o kanpeki ni shiyō to suru to, kokoro mo karada mo yasumarimasen yo ne."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "でも、手を抜くと悪い親のように感じてしまいます。",
                target: "でも てをぬくとわるいおやのようにかんじてしまいます",
                ruby: "でも、<ruby>手<rt>て</rt></ruby>を<ruby>抜<rt>ぬ</rt></ruby>くと<ruby>悪<rt>わる</rt></ruby>い<ruby>親<rt>おや</rt></ruby>のように<ruby>感<rt>かん</rt></ruby>じてしまいます。",
                romaji: "Demo, te o nuku to warui oya no yō ni kanjite shimaimasu."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "子育て相談員",
                line: "休むことも子育ての一部です。頼れる人やサービスを一緒に探しましょう。",
                target: "やすむこともこそだてのいちぶです たよれるひとやさーびすをいっしょにさがしましょう",
                ruby: "<ruby>休<rt>やす</rt></ruby>むことも<ruby>子育<rt>こそだ</rt></ruby>ての<ruby>一部<rt>いちぶ</rt></ruby>です。<ruby>頼<rt>たよ</rt></ruby>れる<ruby>人<rt>ひと</rt></ruby>やサービスを<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>探<rt>さが</rt></ruby>しましょう。",
                romaji: "Yasumu koto mo kosodate no ichibu desu. Tayoreru hito ya sābisu o issho ni sagashimashō."
            }
        ],

        {
            ja: [
                "保護者：最近、疲れがたまっていて、子どもに優しくできない日があります。",
                "子育て相談員：正直に話してくださってありがとうございます。休む時間は少しでも取れていますか。",
                "保護者：子どもが寝たあとに家事をしているので、自分の時間がほとんどありません。",
                "子育て相談員：全部を完璧にしようとすると、心も体も休まりませんよね。",
                "保護者：でも、手を抜くと悪い親のように感じてしまいます。",
                "子育て相談員：休むことも子育ての一部です。頼れる人やサービスを一緒に探しましょう。"
            ],

            en: [
                "Parent: Recently, I have been very tired, and there are days when I cannot be gentle with my child.",
                "Parenting Counselor: Thank you for speaking honestly. Are you able to get even a little time to rest?",
                "Parent: After my child goes to sleep, I do housework, so I hardly have any time for myself.",
                "Parenting Counselor: If you try to do everything perfectly, your mind and body cannot rest.",
                "Parent: But when I do less, I feel like I am a bad parent.",
                "Parenting Counselor: Resting is also part of parenting. Let us look together for people or services you can rely on."
            ],

            "zh-CN": [
                "家长：最近很累，有些日子无法温柔地对待孩子。",
                "育儿咨询员：谢谢您诚实地说出来。您有哪怕一点休息时间吗？",
                "家长：孩子睡了以后我要做家务，所以几乎没有自己的时间。",
                "育儿咨询员：如果想把所有事情都做得完美，身心都无法休息。",
                "家长：但是如果少做一点，我就会觉得自己像个不好的父母。",
                "育儿咨询员：休息也是育儿的一部分。我们一起寻找可以依靠的人和服务吧。"
            ],

            "zh-TW": [
                "家長：最近很累，有些日子無法溫柔地對待孩子。",
                "育兒諮詢員：謝謝您誠實地說出來。您有哪怕一點休息時間嗎？",
                "家長：孩子睡了以後我要做家務，所以幾乎沒有自己的時間。",
                "育兒諮詢員：如果想把所有事情都做得完美，身心都無法休息。",
                "家長：但是如果少做一點，我就會覺得自己像個不好的父母。",
                "育兒諮詢員：休息也是育兒的一部分。我們一起尋找可以依靠的人和服務吧。"
            ],

            ko: [
                "보호자: 최근 피로가 쌓여서 아이에게 다정하게 대하지 못하는 날이 있습니다.",
                "육아 상담원: 솔직하게 말씀해 주셔서 감사합니다. 조금이라도 쉴 시간은 있나요?",
                "보호자: 아이가 잠든 뒤에 집안일을 해서 제 시간이 거의 없습니다.",
                "육아 상담원: 모든 것을 완벽하게 하려고 하면 마음도 몸도 쉬지 못하지요.",
                "보호자: 하지만 대충하면 나쁜 부모처럼 느껴집니다.",
                "육아 상담원: 쉬는 것도 육아의 일부입니다. 의지할 수 있는 사람이나 서비스를 함께 찾아봅시다."
            ],

            vi: [
                "Phụ huynh: Gần đây tôi rất mệt và có những ngày không thể dịu dàng với con.",
                "Nhân viên tư vấn nuôi dạy trẻ: Cảm ơn bạn đã nói thật. Bạn có thể có dù chỉ một chút thời gian nghỉ ngơi không?",
                "Phụ huynh: Sau khi con ngủ, tôi làm việc nhà nên hầu như không có thời gian cho bản thân.",
                "Nhân viên tư vấn nuôi dạy trẻ: Nếu cố làm mọi thứ hoàn hảo, cả tinh thần và cơ thể đều không được nghỉ.",
                "Phụ huynh: Nhưng nếu tôi làm bớt đi, tôi cảm thấy mình như một phụ huynh tệ.",
                "Nhân viên tư vấn nuôi dạy trẻ: Nghỉ ngơi cũng là một phần của nuôi dạy con. Hãy cùng tìm người hoặc dịch vụ mà bạn có thể dựa vào."
            ]
        }
    ),

    // =====================================================
    // 007 きょうだいへの対応を相談する
    // =====================================================

    makeB1ParentingConsultationDialogue(
        "b1_parentingconsult_007",
        "きょうだいへの対応を相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "下の子が生まれてから、上の子が甘えたり怒ったりすることが増えました。",
                target: "したのこがうまれてから うえのこがあまえたりおこったりすることがふえました",
                ruby: "<ruby>下<rt>した</rt></ruby>の<ruby>子<rt>こ</rt></ruby>が<ruby>生<rt>う</rt></ruby>まれてから、<ruby>上<rt>うえ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>が<ruby>甘<rt>あま</rt></ruby>えたり<ruby>怒<rt>おこ</rt></ruby>ったりすることが<ruby>増<rt>ふ</rt></ruby>えました。",
                romaji: "Shita no ko ga umarete kara, ue no ko ga amaetari okottari suru koto ga fuemashita."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "子育て相談員",
                line: "家族が増えて、上のお子さんも気持ちが揺れているのかもしれませんね。",
                target: "かぞくがふえて うえのおこさんもきもちがゆれているのかもしれませんね",
                ruby: "<ruby>家族<rt>かぞく</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えて、<ruby>上<rt>うえ</rt></ruby>のお<ruby>子<rt>こ</rt></ruby>さんも<ruby>気持<rt>きも</rt></ruby>ちが<ruby>揺<rt>ゆ</rt></ruby>れているのかもしれませんね。",
                romaji: "Kazoku ga fuete, ue no okosan mo kimochi ga yurete iru no kamo shiremasen ne."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "赤ちゃんのお世話で忙しく、上の子の話をゆっくり聞けていません。",
                target: "あかちゃんのおせわでいそがしく うえのこのはなしをゆっくりきけていません",
                ruby: "<ruby>赤<rt>あか</rt></ruby>ちゃんのお<ruby>世話<rt>せわ</rt></ruby>で<ruby>忙<rt>いそが</rt></ruby>しく、<ruby>上<rt>うえ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>をゆっくり<ruby>聞<rt>き</rt></ruby>けていません。",
                romaji: "Akachan no osewa de isogashiku, ue no ko no hanashi o yukkuri kikete imasen."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "子育て相談員",
                line: "長い時間でなくても、上のお子さんだけを見る時間を少し作れるとよいです。",
                target: "ながいじかんでなくても うえのおこさんだけをみるじかんをすこしつくれるとよいです",
                ruby: "<ruby>長<rt>なが</rt></ruby>い<ruby>時間<rt>じかん</rt></ruby>でなくても、<ruby>上<rt>うえ</rt></ruby>のお<ruby>子<rt>こ</rt></ruby>さんだけを<ruby>見<rt>み</rt></ruby>る<ruby>時間<rt>じかん</rt></ruby>を<ruby>少<rt>すこ</rt></ruby>し<ruby>作<rt>つく</rt></ruby>れるとよいです。",
                romaji: "Nagai jikan de nakute mo, ue no okosan dake o miru jikan o sukoshi tsukureru to yoi desu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "一日に十分だけでも、一緒に遊ぶ時間を作ってみます。",
                target: "いちにちにじゅっぷんだけでも いっしょにあそぶじかんをつくってみます",
                ruby: "<ruby>一日<rt>いちにち</rt></ruby>に<ruby>十分<rt>じゅっぷん</rt></ruby>だけでも、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>遊<rt>あそ</rt></ruby>ぶ<ruby>時間<rt>じかん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ってみます。",
                romaji: "Ichinichi ni juppun dake demo, issho ni asobu jikan o tsukutte mimasu."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "子育て相談員",
                line: "いいですね。完璧にしようとせず、できることから少しずつ始めましょう。",
                target: "いいですね かんぺきにしようとせず できることからすこしずつはじめましょう",
                ruby: "いいですね。<ruby>完璧<rt>かんぺき</rt></ruby>にしようとせず、できることから<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>始<rt>はじ</rt></ruby>めましょう。",
                romaji: "Ii desu ne. Kanpeki ni shiyō to sezu, dekiru koto kara sukoshizutsu hajimemashō."
            }
        ],

        {
            ja: [
                "保護者：下の子が生まれてから、上の子が甘えたり怒ったりすることが増えました。",
                "子育て相談員：家族が増えて、上のお子さんも気持ちが揺れているのかもしれませんね。",
                "保護者：赤ちゃんのお世話で忙しく、上の子の話をゆっくり聞けていません。",
                "子育て相談員：長い時間でなくても、上のお子さんだけを見る時間を少し作れるとよいです。",
                "保護者：一日に十分だけでも、一緒に遊ぶ時間を作ってみます。",
                "子育て相談員：いいですね。完璧にしようとせず、できることから少しずつ始めましょう。"
            ],

            en: [
                "Parent: Since the younger child was born, my older child has become more clingy and gets angry more often.",
                "Parenting Counselor: With a new family member, your older child's feelings may be unsettled.",
                "Parent: I am busy caring for the baby, so I have not been able to listen carefully to my older child.",
                "Parenting Counselor: Even if it is not a long time, it can help to make a little time just for your older child.",
                "Parent: I will try to make time to play together, even just ten minutes a day.",
                "Parenting Counselor: That sounds good. Do not try to be perfect; start little by little with what you can do."
            ],

            "zh-CN": [
                "家长：自从小的孩子出生后，大的孩子变得更爱撒娇，也更容易生气。",
                "育儿咨询员：家庭成员增加了，老大的心情也许也在摇摆。",
                "家长：因为照顾宝宝很忙，所以没有好好听老大的话。",
                "育儿咨询员：即使时间不长，也可以稍微创造只关注老大的时间。",
                "家长：哪怕一天只有十分钟，我也试着安排一起玩的时间。",
                "育儿咨询员：很好。不要追求完美，从能做的事情一点一点开始吧。"
            ],

            "zh-TW": [
                "家長：自從小的孩子出生後，大的孩子變得更愛撒嬌，也更容易生氣。",
                "育兒諮詢員：家庭成員增加了，老大的心情也許也在搖擺。",
                "家長：因為照顧寶寶很忙，所以沒有好好聽老大的話。",
                "育兒諮詢員：即使時間不長，也可以稍微創造只關注老大的時間。",
                "家長：哪怕一天只有十分鐘，我也試著安排一起玩的時間。",
                "育兒諮詢員：很好。不要追求完美，從能做的事情一點一點開始吧。"
            ],

            ko: [
                "보호자: 둘째가 태어난 후 첫째가 더 응석을 부리거나 화를 내는 일이 늘었습니다.",
                "육아 상담원: 가족이 늘어나면서 첫째 아이도 마음이 흔들리고 있을 수 있습니다.",
                "보호자: 아기 돌보느라 바빠서 첫째의 이야기를 천천히 들어 주지 못하고 있습니다.",
                "육아 상담원: 긴 시간이 아니어도 첫째 아이만 바라보는 시간을 조금 만들 수 있으면 좋습니다.",
                "보호자: 하루에 10분만이라도 함께 노는 시간을 만들어 보겠습니다.",
                "육아 상담원: 좋습니다. 완벽하게 하려고 하지 말고 할 수 있는 것부터 조금씩 시작합시다."
            ],

            vi: [
                "Phụ huynh: Từ khi em bé ra đời, con lớn của tôi hay bám mẹ hơn và cũng dễ tức giận hơn.",
                "Nhân viên tư vấn nuôi dạy trẻ: Khi gia đình có thêm thành viên, cảm xúc của con lớn cũng có thể dao động.",
                "Phụ huynh: Vì bận chăm em bé nên tôi chưa thể lắng nghe con lớn một cách chậm rãi.",
                "Nhân viên tư vấn nuôi dạy trẻ: Dù không dài, việc tạo một chút thời gian chỉ dành cho con lớn cũng rất tốt.",
                "Phụ huynh: Tôi sẽ thử tạo thời gian chơi cùng con, dù chỉ mười phút mỗi ngày.",
                "Nhân viên tư vấn nuôi dạy trẻ: Tốt lắm. Đừng cố hoàn hảo, hãy bắt đầu từng chút từ những gì có thể làm."
            ]
        }
    ),

    // =====================================================
    // 008 継続して相談する方法を確認する
    // =====================================================

    makeB1ParentingConsultationDialogue(
        "b1_parentingconsult_008",
        "継続して相談する方法を確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "今日相談して少し安心しましたが、また困ったときに相談できますか。",
                target: "きょうそうだんしてすこしあんしんしましたが またこまったときにそうだんできますか",
                ruby: "<ruby>今日<rt>きょう</rt></ruby><ruby>相談<rt>そうだん</rt></ruby>して<ruby>少<rt>すこ</rt></ruby>し<ruby>安心<rt>あんしん</rt></ruby>しましたが、また<ruby>困<rt>こま</rt></ruby>ったときに<ruby>相談<rt>そうだん</rt></ruby>できますか。",
                romaji: "Kyō sōdan shite sukoshi anshin shimashita ga, mata komatta toki ni sōdan dekimasu ka."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "子育て相談員",
                line: "もちろんです。一回で解決しようとせず、必要なときに何度でも相談してください。",
                target: "もちろんです いっかいでかいけつしようとせず ひつようなときになんどでもそうだんしてください",
                ruby: "もちろんです。<ruby>一回<rt>いっかい</rt></ruby>で<ruby>解決<rt>かいけつ</rt></ruby>しようとせず、<ruby>必要<rt>ひつよう</rt></ruby>なときに<ruby>何度<rt>なんど</rt></ruby>でも<ruby>相談<rt>そうだん</rt></ruby>してください。",
                romaji: "Mochiron desu. Ikkai de kaiketsu shiyō to sezu, hitsuyō na toki ni nando demo sōdan shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "次に相談するときは、予約が必要でしょうか。",
                target: "つぎにそうだんするときは よやくがひつようでしょうか",
                ruby: "<ruby>次<rt>つぎ</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>するときは、<ruby>予約<rt>よやく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>でしょうか。",
                romaji: "Tsugi ni sōdan suru toki wa, yoyaku ga hitsuyō deshō ka."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "子育て相談員",
                line: "相談内容や窓口によって違いますので、利用しやすい方法を一緒に確認しましょう。",
                target: "そうだんないようやまどぐちによってちがいますので りようしやすいほうほうをいっしょにかくにんしましょう",
                ruby: "<ruby>相談内容<rt>そうだんないよう</rt></ruby>や<ruby>窓口<rt>まどぐち</rt></ruby>によって<ruby>違<rt>ちが</rt></ruby>いますので、<ruby>利用<rt>りよう</rt></ruby>しやすい<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Sōdan naiyō ya madoguchi ni yotte chigaimasu node, riyō shiyasui hōhō o issho ni kakunin shimashō."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "電話よりも、できれば直接話せる場所があると助かります。",
                target: "でんわよりも できればちょくせつはなせるばしょがあるとたすかります",
                ruby: "<ruby>電話<rt>でんわ</rt></ruby>よりも、できれば<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>話<rt>はな</rt></ruby>せる<ruby>場所<rt>ばしょ</rt></ruby>があると<ruby>助<rt>たす</rt></ruby>かります。",
                romaji: "Denwa yori mo, dekireba chokusetsu hanaseru basho ga aru to tasukarimasu."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "子育て相談員",
                line: "わかりました。近くの相談場所と利用できる時間を確認して、無理なく続けられる形を考えましょう。",
                target: "わかりました ちかくのそうだんばしょとりようできるじかんをかくにんして むりなくつづけられるかたちをかんがえましょう",
                ruby: "わかりました。<ruby>近<rt>ちか</rt></ruby>くの<ruby>相談場所<rt>そうだんばしょ</rt></ruby>と<ruby>利用<rt>りよう</rt></ruby>できる<ruby>時間<rt>じかん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>して、<ruby>無理<rt>むり</rt></ruby>なく<ruby>続<rt>つづ</rt></ruby>けられる<ruby>形<rt>かたち</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Wakarimashita. Chikaku no sōdan basho to riyō dekiru jikan o kakunin shite, muri naku tsuzukerareru katachi o kangaemashō."
            }
        ],

        {
            ja: [
                "保護者：今日相談して少し安心しましたが、また困ったときに相談できますか。",
                "子育て相談員：もちろんです。一回で解決しようとせず、必要なときに何度でも相談してください。",
                "保護者：次に相談するときは、予約が必要でしょうか。",
                "子育て相談員：相談内容や窓口によって違いますので、利用しやすい方法を一緒に確認しましょう。",
                "保護者：電話よりも、できれば直接話せる場所があると助かります。",
                "子育て相談員：わかりました。近くの相談場所と利用できる時間を確認して、無理なく続けられる形を考えましょう。"
            ],

            en: [
                "Parent: Talking today made me feel a little relieved. Can I consult again when I have trouble?",
                "Parenting Counselor: Of course. Do not try to solve everything in one session; please consult as many times as needed.",
                "Parent: Do I need a reservation the next time I want to consult?",
                "Parenting Counselor: It depends on the content and the consultation desk, so let us check a convenient method together.",
                "Parent: Rather than by phone, it would help if there were a place where I could talk in person.",
                "Parenting Counselor: I understand. Let us check nearby consultation places and available times, and think about a way you can continue without difficulty."
            ],

            "zh-CN": [
                "家长：今天咨询后我稍微安心了。以后遇到困难时还可以再咨询吗？",
                "育儿咨询员：当然可以。不需要一次就解决所有问题，有需要时请随时多次咨询。",
                "家长：下次咨询时需要预约吗？",
                "育儿咨询员：根据咨询内容和窗口不同会有所不同，我们一起确认方便使用的方法吧。",
                "家长：比起电话，如果有可以直接面对面说话的地方会更有帮助。",
                "育儿咨询员：明白了。我们确认附近的咨询地点和可利用时间，一起想一个可以不勉强持续下去的方法。"
            ],

            "zh-TW": [
                "家長：今天諮詢後我稍微安心了。以後遇到困難時還可以再諮詢嗎？",
                "育兒諮詢員：當然可以。不需要一次就解決所有問題，有需要時請隨時多次諮詢。",
                "家長：下次諮詢時需要預約嗎？",
                "育兒諮詢員：根據諮詢內容和窗口不同會有所不同，我們一起確認方便使用的方法吧。",
                "家長：比起電話，如果有可以直接面對面說話的地方會更有幫助。",
                "育兒諮詢員：明白了。我們確認附近的諮詢地點和可利用時間，一起想一個可以不勉強持續下去的方法。"
            ],

            ko: [
                "보호자: 오늘 상담해서 조금 안심이 되었습니다. 또 어려울 때 상담할 수 있나요?",
                "육아 상담원: 물론입니다. 한 번에 해결하려고 하지 말고 필요할 때 몇 번이든 상담해 주세요.",
                "보호자: 다음에 상담할 때는 예약이 필요한가요?",
                "육아 상담원: 상담 내용이나 창구에 따라 다르므로 이용하기 쉬운 방법을 함께 확인해 봅시다.",
                "보호자: 전화보다 가능하면 직접 이야기할 수 있는 장소가 있으면 도움이 됩니다.",
                "육아 상담원: 알겠습니다. 가까운 상담 장소와 이용 가능한 시간을 확인해서 무리 없이 계속할 수 있는 방법을 생각해 봅시다."
            ],

            vi: [
                "Phụ huynh: Sau khi được tư vấn hôm nay, tôi thấy yên tâm hơn một chút. Khi gặp khó khăn tôi có thể tư vấn lại không?",
                "Nhân viên tư vấn nuôi dạy trẻ: Tất nhiên. Đừng cố giải quyết mọi thứ chỉ trong một lần; khi cần, hãy tư vấn bao nhiêu lần cũng được.",
                "Phụ huynh: Lần sau khi tư vấn, tôi có cần đặt trước không?",
                "Nhân viên tư vấn nuôi dạy trẻ: Tùy nội dung tư vấn và nơi tiếp nhận, nên chúng ta hãy cùng kiểm tra cách thuận tiện nhất.",
                "Phụ huynh: Nếu có nơi có thể nói chuyện trực tiếp thay vì qua điện thoại thì sẽ giúp tôi nhiều hơn.",
                "Nhân viên tư vấn nuôi dạy trẻ: Tôi hiểu. Chúng ta hãy kiểm tra địa điểm tư vấn gần nhà và thời gian sử dụng, rồi tìm cách có thể tiếp tục mà không quá sức."
            ]
        }
    )

];