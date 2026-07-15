// =====================================================
// Japeak B1 Level
// Scene: 出産について相談してみよう
// File: data/japeak-b1-childbirth-consultation.js
// Category Key: b1_childbirth_consultation
// =====================================================

const b1ChildbirthConsultationLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1ChildbirthConsultationTranslations(translations) {
    const completed = {};

    b1ChildbirthConsultationLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1ChildbirthConsultationContext = {
    ja: "出産への不安、自分の希望、痛みへの心配、持病や薬、立ち会い出産、言葉の不安、予定どおりにならない場合、出産後の生活などについて、医師や助産師などに相談するための日本語を練習します。",

    en: "Practice Japanese for discussing childbirth with doctors, midwives, and hospital staff, including worries about giving birth, personal preferences, pain, medical conditions and medicines, having a partner present, language concerns, unexpected changes to the birth plan, and life after childbirth.",

    "zh-CN": "练习用日语向医生、助产士和医院工作人员咨询分娩相关问题，包括对分娩的担忧、个人希望、疼痛、疾病和药物、陪产、语言问题、分娩计划发生变化以及产后生活。",

    "zh-TW": "練習用日語向醫生、助產師和醫院工作人員諮詢分娩相關問題，包括對分娩的擔憂、個人希望、疼痛、疾病和藥物、陪產、語言問題、分娩計畫發生變化以及產後生活。",

    ko: "출산에 대한 불안, 자신의 희망, 통증에 대한 걱정, 지병과 약, 가족의 출산 동행, 언어 문제, 출산 계획의 변경 가능성, 출산 후 생활 등에 대해 의사나 조산사에게 상담하는 일본어를 연습합니다.",

    vi: "Luyện tiếng Nhật để trao đổi với bác sĩ, nữ hộ sinh và nhân viên bệnh viện về những lo lắng khi sinh con, mong muốn cá nhân, đau đớn, bệnh nền và thuốc, người thân có mặt khi sinh, khó khăn ngôn ngữ, thay đổi kế hoạch sinh và cuộc sống sau sinh.",

    tl: "Practice Japanese for consulting doctors and midwives about childbirth, including worries, personal preferences, pain, medical conditions and medicine, having a partner present, language concerns, changes to the birth plan, and life after childbirth.",

    id: "Latihan bahasa Jepang untuk berkonsultasi dengan dokter dan bidan tentang persalinan, termasuk kekhawatiran, keinginan pribadi, rasa sakit, kondisi kesehatan dan obat-obatan, pendampingan saat melahirkan, masalah bahasa, perubahan rencana persalinan, dan kehidupan setelah melahirkan.",

    th: "ฝึกภาษาญี่ปุ่นเพื่อปรึกษาแพทย์และพยาบาลผดุงครรภ์เกี่ยวกับการคลอด เช่น ความกังวล ความต้องการส่วนตัว ความเจ็บปวด โรคประจำตัวและยา การมีคู่ครองอยู่ด้วยขณะคลอด ปัญหาด้านภาษา การเปลี่ยนแผนการคลอด และชีวิตหลังคลอด",

    my: "ကလေးမွေးဖွားခြင်းနှင့်ပတ်သက်သော စိုးရိမ်မှုများ၊ ကိုယ်ပိုင်ဆန္ဒများ၊ နာကျင်မှု၊ ရောဂါအခံနှင့် ဆေးဝါးများ၊ မိသားစုဝင်အတူရှိခြင်း၊ ဘာသာစကားအခက်အခဲ၊ မွေးဖွားမှုအစီအစဉ် ပြောင်းလဲနိုင်ခြင်းနှင့် မွေးဖွားပြီးနောက်ဘဝတို့ကို ဆရာဝန်နှင့် သားဖွားဆရာမတို့အား တိုင်ပင်ရန် ဂျပန်စကားကို လေ့ကျင့်ပါသည်။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់ពិគ្រោះជាមួយវេជ្ជបណ្ឌិត និងឆ្មបអំពីការសម្រាលកូន រួមមានការព្រួយបារម្ភ បំណងផ្ទាល់ខ្លួន ការឈឺចាប់ ជំងឺប្រចាំកាយ និងថ្នាំ ការមានដៃគូនៅពេលសម្រាល បញ្ហាភាសា ការផ្លាស់ប្តូរផែនការសម្រាល និងជីវិតក្រោយសម្រាល។",

    ne: "प्रसवसम्बन्धी डर, व्यक्तिगत चाहना, दुखाइ, स्वास्थ्य अवस्था र औषधि, प्रसवका बेला परिवारको उपस्थिति, भाषासम्बन्धी चिन्ता, प्रसव योजनामा परिवर्तन र प्रसवपछिको जीवनबारे डाक्टर वा प्रसूति सहायकसँग जापानीमा परामर्श गर्ने अभ्यास।",

    mn: "Төрөхтэй холбоотой айдас, өөрийн хүсэл, өвдөлт, суурь өвчин болон эм, хамтрагч төрөх үед байлцах эсэх, хэлний бэрхшээл, төрөх төлөвлөгөө өөрчлөгдөх боломж, төрсний дараах амьдралын талаар эмч, эх баригчтай япон хэлээр зөвлөлдөх дадлага.",

    si: "දරු ප්‍රසූතිය පිළිබඳ බිය, තම කැමැත්ත, වේදනාව, සෞඛ්‍ය තත්ත්ව සහ ඖෂධ, සහකරුගේ සහභාගීත්වය, භාෂා ගැටලු, ප්‍රසව සැලැස්මේ වෙනස්කම් සහ ප්‍රසවයෙන් පසු ජීවිතය ගැන වෛද්‍යවරුන් සහ වින්නඹු මාතාවන් සමඟ ජපන් භාෂාවෙන් සාකච්ඡා කිරීමේ පුහුණුව.",

    bn: "প্রসব নিয়ে উদ্বেগ, ব্যক্তিগত ইচ্ছা, ব্যথা, স্বাস্থ্য সমস্যা ও ওষুধ, প্রসবের সময় সঙ্গীর উপস্থিতি, ভাষাগত সমস্যা, প্রসব পরিকল্পনার পরিবর্তন এবং প্রসব-পরবর্তী জীবন সম্পর্কে ডাক্তার ও ধাত্রীর সঙ্গে জাপানিতে পরামর্শ করার অনুশীলন।",

    pt: "Prática de japonês para conversar com médicos e parteiras sobre o parto, incluindo preocupações, preferências pessoais, dor, condições médicas e medicamentos, presença do parceiro, dificuldades com o idioma, mudanças no plano de parto e a vida após o nascimento.",

    es: "Práctica de japonés para consultar con médicos y matronas sobre el parto, incluyendo preocupaciones, preferencias personales, dolor, enfermedades y medicamentos, presencia de la pareja, dificultades lingüísticas, cambios en el plan de parto y la vida después del nacimiento.",

    fr: "Entraînement en japonais pour consulter des médecins et des sages-femmes au sujet de l'accouchement, notamment les inquiétudes, les préférences personnelles, la douleur, les problèmes médicaux et les médicaments, la présence du partenaire, les difficultés linguistiques, les changements du projet de naissance et la vie après l'accouchement.",

    ru: "Практика японского языка для консультаций с врачами и акушерками о родах: тревоги, личные пожелания, боль, заболевания и лекарства, присутствие партнёра, языковые трудности, изменения плана родов и жизнь после рождения ребёнка.",

    uk: "Практика японської мови для консультацій із лікарями та акушерками щодо пологів: тривоги, особисті побажання, біль, захворювання й ліки, присутність партнера, мовні труднощі, зміни плану пологів і життя після народження дитини."
};

const b1ChildbirthConsultationSpeakerNames = {

    pregnantWoman: {
        ja: "妊婦",
        en: "Pregnant Woman",
        "zh-CN": "孕妇",
        "zh-TW": "孕婦",
        ko: "임산부",
        vi: "Thai phụ",
        tl: "Buntis",
        id: "Ibu hamil",
        th: "หญิงตั้งครรภ์",
        my: "ကိုယ်ဝန်ဆောင်မိခင်",
        km: "ស្ត្រីមានផ្ទៃពោះ",
        ne: "गर्भवती महिला",
        mn: "Жирэмсэн эмэгтэй",
        si: "ගර්භණී කාන්තාව",
        bn: "গর্ভবতী নারী",
        pt: "Gestante",
        es: "Embarazada",
        fr: "Femme enceinte",
        ru: "Беременная женщина",
        uk: "Вагітна жінка"
    },

    midwife: {
        ja: "助産師",
        en: "Midwife",
        "zh-CN": "助产士",
        "zh-TW": "助產師",
        ko: "조산사",
        vi: "Nữ hộ sinh",
        tl: "Midwife",
        id: "Bidan",
        th: "พยาบาลผดุงครรภ์",
        my: "သားဖွားဆရာမ",
        km: "ឆ្មប",
        ne: "प्रसूति सहायक",
        mn: "Эх баригч",
        si: "වින්නඹු මාතාව",
        bn: "ধাত্রী",
        pt: "Parteira",
        es: "Matrona",
        fr: "Sage-femme",
        ru: "Акушерка",
        uk: "Акушерка"
    },

    doctor: {
        ja: "医師",
        en: "Doctor",
        "zh-CN": "医生",
        "zh-TW": "醫師",
        ko: "의사",
        vi: "Bác sĩ",
        tl: "Doctor",
        id: "Dokter",
        th: "แพทย์",
        my: "ဆရာဝန်",
        km: "វេជ្ជបណ្ឌិត",
        ne: "डाक्टर",
        mn: "Эмч",
        si: "වෛද්‍යවරයා",
        bn: "ডাক্তার",
        pt: "Médico",
        es: "Médico",
        fr: "Médecin",
        ru: "Врач",
        uk: "Лікар"
    },

    hospitalStaff: {
        ja: "病院職員",
        en: "Hospital Staff",
        "zh-CN": "医院工作人员",
        "zh-TW": "醫院工作人員",
        ko: "병원 직원",
        vi: "Nhân viên bệnh viện",
        tl: "Hospital staff",
        id: "Petugas rumah sakit",
        th: "เจ้าหน้าที่โรงพยาบาล",
        my: "ဆေးရုံဝန်ထမ်း",
        km: "បុគ្គលិកមន្ទីរពេទ្យ",
        ne: "अस्पताल कर्मचारी",
        mn: "Эмнэлгийн ажилтан",
        si: "රෝහල් කාර්ය මණ්ඩලය",
        bn: "হাসপাতাল কর্মী",
        pt: "Funcionário do hospital",
        es: "Personal del hospital",
        fr: "Personnel hospitalier",
        ru: "Сотрудник больницы",
        uk: "Працівник лікарні"
    },

    partner: {
        ja: "パートナー",
        en: "Partner",
        "zh-CN": "伴侣",
        "zh-TW": "伴侶",
        ko: "파트너",
        vi: "Bạn đời",
        tl: "Partner",
        id: "Pasangan",
        th: "คู่ครอง",
        my: "အိမ်ထောင်ဖက်",
        km: "ដៃគូ",
        ne: "जीवनसाथी",
        mn: "Хань",
        si: "සහකරු",
        bn: "সঙ্গী",
        pt: "Parceiro",
        es: "Pareja",
        fr: "Partenaire",
        ru: "Партнёр",
        uk: "Партнер"
    }
};

function makeB1ChildbirthConsultationDialogue(
    id,
    title,
    dialogue,
    dialogueTranslations
) {
    const fullDialogueTranslations =
        completeB1ChildbirthConsultationTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_childbirth_consultation",

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
                b1ChildbirthConsultationSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1ChildbirthConsultationContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1ChildbirthConsultationData = [

    // =====================================================
    // 001 出産への不安を相談する
    // =====================================================

    makeB1ChildbirthConsultationDialogue(
        "b1_childbirthconsult_001",
        "出産への不安を相談する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "出産予定日が近づくにつれて、だんだん不安が強くなってきました。",
                target: "しゅっさんよていびがちかづくにつれて だんだんふあんがつよくなってきました",
                ruby: "<ruby>出産予定日<rt>しゅっさんよていび</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づくにつれて、だんだん<ruby>不安<rt>ふあん</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>くなってきました。",
                romaji: "Shussan yoteibi ga chikazuku ni tsurete, dandan fuan ga tsuyoku natte kimashita."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "そう感じる方は少なくありません。特にどのようなことが心配ですか。",
                target: "そうかんじるかたはすくなくありません とくにどのようなことがしんぱいですか",
                ruby: "そう<ruby>感<rt>かん</rt></ruby>じる<ruby>方<rt>かた</rt></ruby>は<ruby>少<rt>すく</rt></ruby>なくありません。<ruby>特<rt>とく</rt></ruby>にどのようなことが<ruby>心配<rt>しんぱい</rt></ruby>ですか。",
                romaji: "Sō kanjiru kata wa sukunaku arimasen. Toku ni dono yō na koto ga shinpai desu ka."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "初めての出産なので、何が起こるかわからないことが一番不安です。",
                target: "はじめてのしゅっさんなので なにがおこるかわからないことがいちばんふあんです",
                ruby: "<ruby>初<rt>はじ</rt></ruby>めての<ruby>出産<rt>しゅっさん</rt></ruby>なので、<ruby>何<rt>なに</rt></ruby>が<ruby>起<rt>お</rt></ruby>こるかわからないことが<ruby>一番<rt>いちばん</rt></ruby><ruby>不安<rt>ふあん</rt></ruby>です。",
                romaji: "Hajimete no shussan na node, nani ga okoru ka wakaranai koto ga ichiban fuan desu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "では、出産の一般的な流れと、病院へ連絡する場合について一緒に確認しましょう。",
                target: "では しゅっさんのいっぱんてきなながれと びょういんへれんらくするばあいについていっしょにかくにんしましょう",
                ruby: "では、<ruby>出産<rt>しゅっさん</rt></ruby>の<ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>流<rt>なが</rt></ruby>れと、<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>連絡<rt>れんらく</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>について<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Dewa, shussan no ippanteki na nagare to, byōin e renraku suru baai ni tsuite issho ni kakunin shimashō."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "ありがとうございます。わからないことを一つずつ確認できれば、少し安心できそうです。",
                target: "ありがとうございます わからないことをひとつずつかくにんできれば すこしあんしんできそうです",
                ruby: "ありがとうございます。わからないことを<ruby>一<rt>ひと</rt></ruby>つずつ<ruby>確認<rt>かくにん</rt></ruby>できれば、<ruby>少<rt>すこ</rt></ruby>し<ruby>安心<rt>あんしん</rt></ruby>できそうです。",
                romaji: "Arigatō gozaimasu. Wakaranai koto o hitotsu zutsu kakunin dekireba, sukoshi anshin dekisō desu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "遠慮しなくて大丈夫です。気になることは、健診のときに何度でも質問してください。",
                target: "えんりょしなくてだいじょうぶです きになることは けんしんのときになんどでもしつもんしてください",
                ruby: "<ruby>遠慮<rt>えんりょ</rt></ruby>しなくて<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。<ruby>気<rt>き</rt></ruby>になることは、<ruby>健診<rt>けんしん</rt></ruby>のときに<ruby>何度<rt>なんど</rt></ruby>でも<ruby>質問<rt>しつもん</rt></ruby>してください。",
                romaji: "Enryo shinakute daijōbu desu. Ki ni naru koto wa, kenshin no toki ni nando demo shitsumon shite kudasai."
            }
        ],

        {
            ja: [
                "妊婦：出産予定日が近づくにつれて、だんだん不安が強くなってきました。",
                "助産師：そう感じる方は少なくありません。特にどのようなことが心配ですか。",
                "妊婦：初めての出産なので、何が起こるかわからないことが一番不安です。",
                "助産師：では、出産の一般的な流れと、病院へ連絡する場合について一緒に確認しましょう。",
                "妊婦：ありがとうございます。わからないことを一つずつ確認できれば、少し安心できそうです。",
                "助産師：遠慮しなくて大丈夫です。気になることは、健診のときに何度でも質問してください。"
            ],

            en: [
                "Pregnant Woman: As my due date gets closer, I have been feeling more and more anxious.",
                "Midwife: Many people feel that way. What are you particularly worried about?",
                "Pregnant Woman: This is my first time giving birth, so not knowing what will happen worries me most.",
                "Midwife: Then let us review the general process of childbirth and when you may need to contact the hospital.",
                "Pregnant Woman: Thank you. I think I will feel a little more relaxed if I can check things one by one.",
                "Midwife: Please do not hesitate. You can ask questions as many times as necessary during your checkups."
            ],

            "zh-CN": [
                "孕妇：随着预产期越来越近，我越来越感到不安。",
                "助产士：很多人都会有这样的感觉。您特别担心什么呢？",
                "孕妇：因为是第一次分娩，我最担心的是不知道会发生什么。",
                "助产士：那么，我们一起确认一下分娩的一般流程以及需要联系医院的情况吧。",
                "孕妇：谢谢。如果能一件一件确认，我想自己会安心一些。",
                "助产士：不用客气。有任何担心的事情，都可以在产检时反复询问。"
            ],

            "zh-TW": [
                "孕婦：隨著預產期越來越近，我越來越感到不安。",
                "助產師：很多人都會有這樣的感覺。您特別擔心什麼呢？",
                "孕婦：因為是第一次分娩，我最擔心的是不知道會發生什麼。",
                "助產師：那麼，我們一起確認一下分娩的一般流程以及需要聯絡醫院的情況吧。",
                "孕婦：謝謝。如果能一件一件確認，我想自己會安心一些。",
                "助產師：不用客氣。有任何擔心的事情，都可以在產檢時反覆詢問。"
            ],

            ko: [
                "임산부: 출산 예정일이 가까워질수록 점점 불안해지고 있습니다.",
                "조산사: 그렇게 느끼는 분들이 적지 않습니다. 특히 어떤 점이 걱정되나요?",
                "임산부: 첫 출산이라 무엇이 일어날지 모른다는 것이 가장 불안합니다.",
                "조산사: 그러면 출산의 일반적인 과정과 병원에 연락해야 하는 경우를 함께 확인해 봅시다.",
                "임산부: 감사합니다. 모르는 것을 하나씩 확인하면 조금 안심할 수 있을 것 같습니다.",
                "조산사: 부담 갖지 않으셔도 됩니다. 궁금한 점은 검진 때 몇 번이라도 질문해 주세요."
            ],

            vi: [
                "Thai phụ: Khi ngày dự sinh đến gần, tôi ngày càng cảm thấy lo lắng hơn.",
                "Nữ hộ sinh: Có nhiều người cũng cảm thấy như vậy. Bạn đặc biệt lo về điều gì?",
                "Thai phụ: Vì đây là lần đầu sinh con nên điều khiến tôi lo nhất là không biết chuyện gì sẽ xảy ra.",
                "Nữ hộ sinh: Vậy chúng ta hãy cùng xác nhận quy trình sinh con thông thường và những trường hợp cần liên lạc với bệnh viện.",
                "Thai phụ: Cảm ơn. Nếu có thể xác nhận từng điều một, tôi nghĩ mình sẽ yên tâm hơn.",
                "Nữ hộ sinh: Bạn không cần ngại. Hãy hỏi bất cứ điều gì bạn quan tâm trong những lần khám thai."
            ]
        }
    ),

    // =====================================================
    // 002 出産についての希望を伝える
    // =====================================================

    makeB1ChildbirthConsultationDialogue(
        "b1_childbirthconsult_002",
        "出産についての希望を伝える",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "出産について自分なりの希望があるのですが、相談してもいいでしょうか。",
                target: "しゅっさんについてじぶんなりのきぼうがあるのですが そうだんしてもいいでしょうか",
                ruby: "<ruby>出産<rt>しゅっさん</rt></ruby>について<ruby>自分<rt>じぶん</rt></ruby>なりの<ruby>希望<rt>きぼう</rt></ruby>があるのですが、<ruby>相談<rt>そうだん</rt></ruby>してもいいでしょうか。",
                romaji: "Shussan ni tsuite jibun nari no kibō ga aru no desu ga, sōdan shite mo ii deshō ka."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "もちろんです。どのような出産を希望しているか、できるだけ具体的に教えてください。",
                target: "もちろんです どのようなしゅっさんをきぼうしているか できるだけぐたいてきにおしえてください",
                ruby: "もちろんです。どのような<ruby>出産<rt>しゅっさん</rt></ruby>を<ruby>希望<rt>きぼう</rt></ruby>しているか、できるだけ<ruby>具体的<rt>ぐたいてき</rt></ruby>に<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Mochiron desu. Dono yō na shussan o kibō shite iru ka, dekiru dake gutaiteki ni oshiete kudasai."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "できれば落ち着いた環境で、説明を受けながら出産したいと思っています。",
                target: "できればおちついたかんきょうで せつめいをうけながらしゅっさんしたいとおもっています",
                ruby: "できれば<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いた<ruby>環境<rt>かんきょう</rt></ruby>で、<ruby>説明<rt>せつめい</rt></ruby>を<ruby>受<rt>う</rt></ruby>けながら<ruby>出産<rt>しゅっさん</rt></ruby>したいと<ruby>思<rt>おも</rt></ruby>っています。",
                romaji: "Dekireba ochitsuita kankyō de, setsumei o ukenagara shussan shitai to omotte imasu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "わかりました。病院で対応できることと難しいことを確認しながら、一緒に考えていきましょう。",
                target: "わかりました びょういんでたいおうできることとむずかしいことをかくにんしながら いっしょにかんがえていきましょう",
                ruby: "わかりました。<ruby>病院<rt>びょういん</rt></ruby>で<ruby>対応<rt>たいおう</rt></ruby>できることと<ruby>難<rt>むずか</rt></ruby>しいことを<ruby>確認<rt>かくにん</rt></ruby>しながら、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えていきましょう。",
                romaji: "Wakarimashita. Byōin de taiō dekiru koto to muzukashii koto o kakunin shinagara, issho ni kangaete ikimashō."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "希望を伝えても、状況によって変更が必要になることもありますよね。",
                target: "きぼうをつたえても じょうきょうによってへんこうがひつようになることもありますよね",
                ruby: "<ruby>希望<rt>きぼう</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えても、<ruby>状況<rt>じょうきょう</rt></ruby>によって<ruby>変更<rt>へんこう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>になることもありますよね。",
                romaji: "Kibō o tsutaete mo, jōkyō ni yotte henkō ga hitsuyō ni naru koto mo arimasu yo ne."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "はい。その場合も、できるだけ理由を説明しながら相談して進めることが大切です。",
                target: "はい そのばあいも できるだけりゆうをせつめいしながらそうだんしてすすめることがたいせつです",
                ruby: "はい。その<ruby>場合<rt>ばあい</rt></ruby>も、できるだけ<ruby>理由<rt>りゆう</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>しながら<ruby>相談<rt>そうだん</rt></ruby>して<ruby>進<rt>すす</rt></ruby>めることが<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Hai. Sono baai mo, dekiru dake riyū o setsumei shinagara sōdan shite susumeru koto ga taisetsu desu."
            }
        ],

        {
            ja: [
                "妊婦：出産について自分なりの希望があるのですが、相談してもいいでしょうか。",
                "助産師：もちろんです。どのような出産を希望しているか、できるだけ具体的に教えてください。",
                "妊婦：できれば落ち着いた環境で、説明を受けながら出産したいと思っています。",
                "助産師：わかりました。病院で対応できることと難しいことを確認しながら、一緒に考えていきましょう。",
                "妊婦：希望を伝えても、状況によって変更が必要になることもありますよね。",
                "助産師：はい。その場合も、できるだけ理由を説明しながら相談して進めることが大切です。"
            ],

            en: [
                "Pregnant Woman: I have some personal preferences about childbirth. May I discuss them with you?",
                "Midwife: Of course. Please tell me as specifically as possible what kind of childbirth experience you hope for.",
                "Pregnant Woman: If possible, I would like to give birth in a calm environment while receiving explanations about what is happening.",
                "Midwife: I understand. Let us consider it together while checking what the hospital can and cannot provide.",
                "Pregnant Woman: Even if I express my preferences, changes may be necessary depending on the situation, right?",
                "Midwife: Yes. Even in that case, it is important to explain the reasons as much as possible and proceed through discussion."
            ],

            "zh-CN": [
                "孕妇：关于分娩，我有一些自己的希望，可以和您商量吗？",
                "助产士：当然可以。请尽量具体地告诉我您希望怎样分娩。",
                "孕妇：如果可以的话，我希望在安静的环境中，一边接受说明一边分娩。",
                "助产士：明白了。我们一边确认医院可以做到和比较困难的事情，一边一起考虑。",
                "孕妇：即使表达了自己的希望，根据情况也可能需要改变，对吧？",
                "助产士：是的。即使在那种情况下，也应该尽可能说明理由，并通过商量来进行。"
            ],

            "zh-TW": [
                "孕婦：關於分娩，我有一些自己的希望，可以和您商量嗎？",
                "助產師：當然可以。請盡量具體地告訴我您希望怎樣分娩。",
                "孕婦：如果可以的話，我希望在安靜的環境中，一邊接受說明一邊分娩。",
                "助產師：明白了。我們一邊確認醫院可以做到和比較困難的事情，一邊一起考慮。",
                "孕婦：即使表達了自己的希望，根據情況也可能需要改變，對吧？",
                "助產師：是的。即使在那種情況下，也應該盡可能說明理由，並透過商量來進行。"
            ],

            ko: [
                "임산부: 출산에 대해 저만의 희망이 있는데 상담해도 될까요?",
                "조산사: 물론입니다. 어떤 출산을 원하시는지 가능한 한 구체적으로 말씀해 주세요.",
                "임산부: 가능하면 차분한 환경에서 설명을 들으면서 출산하고 싶습니다.",
                "조산사: 알겠습니다. 병원에서 가능한 것과 어려운 것을 확인하면서 함께 생각해 봅시다.",
                "임산부: 희망을 말해도 상황에 따라 변경이 필요할 수도 있겠지요?",
                "조산사: 네. 그런 경우에도 가능한 한 이유를 설명하면서 상담을 통해 진행하는 것이 중요합니다."
            ],

            vi: [
                "Thai phụ: Tôi có một số mong muốn riêng về việc sinh con. Tôi có thể trao đổi với bạn không?",
                "Nữ hộ sinh: Tất nhiên. Hãy cho tôi biết càng cụ thể càng tốt bạn mong muốn một cuộc sinh như thế nào.",
                "Thai phụ: Nếu có thể, tôi muốn sinh trong môi trường yên tĩnh và được giải thích về những gì đang xảy ra.",
                "Nữ hộ sinh: Tôi hiểu. Chúng ta sẽ cùng xem xét trong khi xác nhận những gì bệnh viện có thể và khó có thể đáp ứng.",
                "Thai phụ: Ngay cả khi tôi nói mong muốn của mình, vẫn có thể cần thay đổi tùy tình hình, đúng không?",
                "Nữ hộ sinh: Đúng vậy. Ngay cả trong trường hợp đó, điều quan trọng là giải thích lý do hết mức có thể và cùng nhau trao đổi."
            ]
        }
    ),

    // =====================================================
    // 003 痛みへの不安を相談する
    // =====================================================

    makeB1ChildbirthConsultationDialogue(
        "b1_childbirthconsult_003",
        "痛みへの不安を相談する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "出産の痛みに耐えられるかどうか、とても心配しています。",
                target: "しゅっさんのいたみにたえられるかどうか とてもしんぱいしています",
                ruby: "<ruby>出産<rt>しゅっさん</rt></ruby>の<ruby>痛<rt>いた</rt></ruby>みに<ruby>耐<rt>た</rt></ruby>えられるかどうか、とても<ruby>心配<rt>しんぱい</rt></ruby>しています。",
                romaji: "Shussan no itami ni taerareru ka dō ka, totemo shinpai shite imasu."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "痛みに対する不安があるのですね。どのようなことを特に心配していますか。",
                target: "いたみにたいするふあんがあるのですね どのようなことをとくにしんぱいしていますか",
                ruby: "<ruby>痛<rt>いた</rt></ruby>みに<ruby>対<rt>たい</rt></ruby>する<ruby>不安<rt>ふあん</rt></ruby>があるのですね。どのようなことを<ruby>特<rt>とく</rt></ruby>に<ruby>心配<rt>しんぱい</rt></ruby>していますか。",
                romaji: "Itami ni taisuru fuan ga aru no desu ne. Dono yō na koto o toku ni shinpai shite imasu ka."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "痛みが強くなったときに、落ち着いていられるか自信がありません。",
                target: "いたみがつよくなったときに おちついていられるかじしんがありません",
                ruby: "<ruby>痛<rt>いた</rt></ruby>みが<ruby>強<rt>つよ</rt></ruby>くなったときに、<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いていられるか<ruby>自信<rt>じしん</rt></ruby>がありません。",
                romaji: "Itami ga tsuyoku natta toki ni, ochitsuite irareru ka jishin ga arimasen."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "病院で利用できる方法について説明できますので、それぞれの特徴を聞いてから考えましょう。",
                target: "びょういんでりようできるほうほうについてせつめいできますので それぞれのとくちょうをきいてからかんがえましょう",
                ruby: "<ruby>病院<rt>びょういん</rt></ruby>で<ruby>利用<rt>りよう</rt></ruby>できる<ruby>方法<rt>ほうほう</rt></ruby>について<ruby>説明<rt>せつめい</rt></ruby>できますので、それぞれの<ruby>特徴<rt>とくちょう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてから<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Byōin de riyō dekiru hōhō ni tsuite setsumei dekimasu node, sorezore no tokuchō o kiite kara kangaemashō."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "方法によって条件や注意点が違うのであれば、それも詳しく知りたいです。",
                target: "ほうほうによってじょうけんやちゅういてんがちがうのであれば それもくわしくしりたいです",
                ruby: "<ruby>方法<rt>ほうほう</rt></ruby>によって<ruby>条件<rt>じょうけん</rt></ruby>や<ruby>注意点<rt>ちゅういてん</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>うのであれば、それも<ruby>詳<rt>くわ</rt></ruby>しく<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Hōhō ni yotte jōken ya chūiten ga chigau no de areba, sore mo kuwashiku shiritai desu."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "もちろんです。わからない言葉があれば、その場で確認しながら一緒に考えていきましょう。",
                target: "もちろんです わからないことばがあれば そのばでかくにんしながらいっしょにかんがえていきましょう",
                ruby: "もちろんです。わからない<ruby>言葉<rt>ことば</rt></ruby>があれば、その<ruby>場<rt>ば</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>しながら<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えていきましょう。",
                romaji: "Mochiron desu. Wakaranai kotoba ga areba, sono ba de kakunin shinagara issho ni kangaete ikimashō."
            }
        ],

        {
            ja: [
                "妊婦：出産の痛みに耐えられるかどうか、とても心配しています。",
                "医師：痛みに対する不安があるのですね。どのようなことを特に心配していますか。",
                "妊婦：痛みが強くなったときに、落ち着いていられるか自信がありません。",
                "医師：病院で利用できる方法について説明できますので、それぞれの特徴を聞いてから考えましょう。",
                "妊婦：方法によって条件や注意点が違うのであれば、それも詳しく知りたいです。",
                "医師：もちろんです。わからない言葉があれば、その場で確認しながら一緒に考えていきましょう。"
            ],

            en: [
                "Pregnant Woman: I am very worried about whether I will be able to handle the pain of childbirth.",
                "Doctor: I see that you are anxious about the pain. What are you especially worried about?",
                "Pregnant Woman: I am not confident that I will be able to stay calm when the pain becomes stronger.",
                "Doctor: We can explain the options available at this hospital, so let us consider them after you understand their different features.",
                "Pregnant Woman: If the conditions and points to consider differ depending on the method, I would like to know about those in detail too.",
                "Doctor: Of course. If there are words you do not understand, let us check them at the time and think about the options together."
            ],

            "zh-CN": [
                "孕妇：我非常担心自己能不能承受分娩的疼痛。",
                "医生：您对疼痛感到不安。您特别担心什么呢？",
                "孕妇：疼痛变强的时候，我没有信心自己能够保持冷静。",
                "医生：我们可以说明本医院可以采用的方法，您了解各种方法的特点以后再考虑吧。",
                "孕妇：如果不同方法的条件和注意事项不同，我也想详细了解。",
                "医生：当然可以。如果有不明白的词语，我们可以当场确认并一起考虑。"
            ],

            "zh-TW": [
                "孕婦：我非常擔心自己能不能承受分娩的疼痛。",
                "醫師：您對疼痛感到不安。您特別擔心什麼呢？",
                "孕婦：疼痛變強的時候，我沒有信心自己能夠保持冷靜。",
                "醫師：我們可以說明本醫院可以採用的方法，您了解各種方法的特點以後再考慮吧。",
                "孕婦：如果不同方法的條件和注意事項不同，我也想詳細了解。",
                "醫師：當然可以。如果有不明白的詞語，我們可以當場確認並一起考慮。"
            ],

            ko: [
                "임산부: 출산의 통증을 견딜 수 있을지 매우 걱정됩니다.",
                "의사: 통증에 대한 불안이 있으시군요. 특히 어떤 점이 걱정되나요?",
                "임산부: 통증이 강해졌을 때 침착하게 있을 수 있을지 자신이 없습니다.",
                "의사: 병원에서 이용할 수 있는 방법을 설명해 드릴 수 있으니 각각의 특징을 들은 후 생각해 봅시다.",
                "임산부: 방법에 따라 조건이나 주의할 점이 다르다면 그것도 자세히 알고 싶습니다.",
                "의사: 물론입니다. 모르는 말이 있으면 그 자리에서 확인하면서 함께 생각해 봅시다."
            ],

            vi: [
                "Thai phụ: Tôi rất lo không biết mình có thể chịu được cơn đau khi sinh hay không.",
                "Bác sĩ: Tôi hiểu bạn đang lo về cơn đau. Bạn đặc biệt lo điều gì?",
                "Thai phụ: Tôi không tự tin mình có thể giữ bình tĩnh khi cơn đau trở nên mạnh hơn.",
                "Bác sĩ: Chúng tôi có thể giải thích các phương pháp có tại bệnh viện, nên hãy tìm hiểu đặc điểm của từng phương pháp rồi cùng cân nhắc.",
                "Thai phụ: Nếu mỗi phương pháp có điều kiện và điểm cần chú ý khác nhau, tôi cũng muốn biết rõ.",
                "Bác sĩ: Tất nhiên. Nếu có từ nào không hiểu, chúng ta sẽ xác nhận ngay lúc đó và cùng nhau cân nhắc."
            ]
        }
    ),

    // =====================================================
    // 004 持病や薬について相談する
    // =====================================================

    makeB1ChildbirthConsultationDialogue(
        "b1_childbirthconsult_004",
        "持病や薬について相談する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "妊娠する前から飲んでいる薬があるので、出産への影響が心配です。",
                target: "にんしんするまえからのんでいるくすりがあるので しゅっさんへのえいきょうがしんぱいです",
                ruby: "<ruby>妊娠<rt>にんしん</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>から<ruby>飲<rt>の</rt></ruby>んでいる<ruby>薬<rt>くすり</rt></ruby>があるので、<ruby>出産<rt>しゅっさん</rt></ruby>への<ruby>影響<rt>えいきょう</rt></ruby>が<ruby>心配<rt>しんぱい</rt></ruby>です。",
                romaji: "Ninshin suru mae kara nonde iru kusuri ga aru node, shussan e no eikyō ga shinpai desu."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "わかりました。薬の名前と飲んでいる量、それから持病について教えてください。",
                target: "わかりました くすりのなまえとのんでいるりょう それからじびょうについておしえてください",
                ruby: "わかりました。<ruby>薬<rt>くすり</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>と<ruby>飲<rt>の</rt></ruby>んでいる<ruby>量<rt>りょう</rt></ruby>、それから<ruby>持病<rt>じびょう</rt></ruby>について<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Wakarimashita. Kusuri no namae to nonde iru ryō, sorekara jibyō ni tsuite oshiete kudasai."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "お薬手帳を持ってきました。自分で薬をやめた方がいいのでしょうか。",
                target: "おくすりてちょうをもってきました じぶんでくすりをやめたほうがいいのでしょうか",
                ruby: "お<ruby>薬手帳<rt>くすりてちょう</rt></ruby>を<ruby>持<rt>も</rt></ruby>ってきました。<ruby>自分<rt>じぶん</rt></ruby>で<ruby>薬<rt>くすり</rt></ruby>をやめた<ruby>方<rt>ほう</rt></ruby>がいいのでしょうか。",
                romaji: "Okusuri techō o motte kimashita. Jibun de kusuri o yameta hō ga ii no deshō ka."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "自己判断で中止せず、薬について心配なことは医師や薬剤師に相談してください。",
                target: "じこはんだんでちゅうしせず くすりについてしんぱいなことはいしややくざいしにそうだんしてください",
                ruby: "<ruby>自己判断<rt>じこはんだん</rt></ruby>で<ruby>中止<rt>ちゅうし</rt></ruby>せず、<ruby>薬<rt>くすり</rt></ruby>について<ruby>心配<rt>しんぱい</rt></ruby>なことは<ruby>医師<rt>いし</rt></ruby>や<ruby>薬剤師<rt>やくざいし</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>してください。",
                romaji: "Jikohandan de chūshi sezu, kusuri ni tsuite shinpai na koto wa ishi ya yakuzaishi ni sōdan shite kudasai."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "わかりました。今後、新しい薬を使う場合も先に確認するようにします。",
                target: "わかりました こんご あたらしいくすりをつかうばあいもさきにかくにんするようにします",
                ruby: "わかりました。<ruby>今後<rt>こんご</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しい<ruby>薬<rt>くすり</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>も<ruby>先<rt>さき</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>するようにします。",
                romaji: "Wakarimashita. Kongo, atarashii kusuri o tsukau baai mo saki ni kakunin suru yō ni shimasu."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "それがいいですね。健診のときには、お薬手帳も持ってきてください。",
                target: "それがいいですね けんしんのときには おくすりてちょうももってきてください",
                ruby: "それがいいですね。<ruby>健診<rt>けんしん</rt></ruby>のときには、お<ruby>薬手帳<rt>くすりてちょう</rt></ruby>も<ruby>持<rt>も</rt></ruby>ってきてください。",
                romaji: "Sore ga ii desu ne. Kenshin no toki ni wa, okusuri techō mo motte kite kudasai."
            }
        ],

        {
            ja: [
                "妊婦：妊娠する前から飲んでいる薬があるので、出産への影響が心配です。",
                "医師：わかりました。薬の名前と飲んでいる量、それから持病について教えてください。",
                "妊婦：お薬手帳を持ってきました。自分で薬をやめた方がいいのでしょうか。",
                "医師：自己判断で中止せず、薬について心配なことは医師や薬剤師に相談してください。",
                "妊婦：わかりました。今後、新しい薬を使う場合も先に確認するようにします。",
                "医師：それがいいですね。健診のときには、お薬手帳も持ってきてください。"
            ],

            en: [
                "Pregnant Woman: I have been taking medicine since before becoming pregnant, so I am worried about how it may affect childbirth.",
                "Doctor: I understand. Please tell me the name of the medicine, how much you take, and any medical conditions you have.",
                "Pregnant Woman: I brought my medication notebook. Should I stop taking the medicine by myself?",
                "Doctor: Do not stop it on your own. If you are worried about medicine, please consult a doctor or pharmacist.",
                "Pregnant Woman: I understand. I will also check first before using any new medicine in the future.",
                "Doctor: Good. Please bring your medication notebook with you to your checkups."
            ],

            "zh-CN": [
                "孕妇：我从怀孕前就一直在服药，所以担心会不会影响分娩。",
                "医生：明白了。请告诉我药物的名称、服用量以及您的既往疾病。",
                "孕妇：我带来了用药手册。我应该自己停药吗？",
                "医生：请不要自行停药。如果对药物有担心，请咨询医生或药剂师。",
                "孕妇：明白了。今后使用新的药物时，我也会事先确认。",
                "医生：很好。产检时也请带上您的用药手册。"
            ],

            "zh-TW": [
                "孕婦：我從懷孕前就一直在服藥，所以擔心會不會影響分娩。",
                "醫師：明白了。請告訴我藥物的名稱、服用量以及您的既往疾病。",
                "孕婦：我帶來了用藥手冊。我應該自己停藥嗎？",
                "醫師：請不要自行停藥。如果對藥物有擔心，請諮詢醫師或藥師。",
                "孕婦：明白了。今後使用新的藥物時，我也會事先確認。",
                "醫師：很好。產檢時也請帶上您的用藥手冊。"
            ],

            ko: [
                "임산부: 임신 전부터 먹고 있는 약이 있어서 출산에 미치는 영향이 걱정됩니다.",
                "의사: 알겠습니다. 약 이름과 복용량, 그리고 지병에 대해 알려 주세요.",
                "임산부: 약 수첩을 가져왔습니다. 제가 스스로 약을 끊는 편이 좋을까요?",
                "의사: 스스로 판단해서 중단하지 말고, 약에 대해 걱정되는 점은 의사나 약사와 상담해 주세요.",
                "임산부: 알겠습니다. 앞으로 새로운 약을 사용할 때도 먼저 확인하겠습니다.",
                "의사: 좋습니다. 검진 때는 약 수첩도 가져와 주세요."
            ],

            vi: [
                "Thai phụ: Tôi đã dùng một loại thuốc từ trước khi mang thai nên lo nó có thể ảnh hưởng đến việc sinh con.",
                "Bác sĩ: Tôi hiểu. Hãy cho tôi biết tên thuốc, liều lượng đang dùng và bệnh nền của bạn.",
                "Thai phụ: Tôi đã mang theo sổ thuốc. Tôi có nên tự ngừng thuốc không?",
                "Bác sĩ: Đừng tự ý ngừng thuốc. Nếu lo lắng về thuốc, hãy trao đổi với bác sĩ hoặc dược sĩ.",
                "Thai phụ: Tôi hiểu. Sau này nếu dùng thuốc mới, tôi cũng sẽ xác nhận trước.",
                "Bác sĩ: Tốt. Khi đi khám thai, hãy mang theo cả sổ thuốc."
            ]
        }
    ),

    // =====================================================
    // 005 立ち会い出産について相談する
    // =====================================================

    makeB1ChildbirthConsultationDialogue(
        "b1_childbirthconsult_005",
        "立ち会い出産について相談する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "出産のときに、パートナーにそばにいてもらいたいと思っています。",
                target: "しゅっさんのときに ぱーとなーにそばにいてもらいたいとおもっています",
                ruby: "<ruby>出産<rt>しゅっさん</rt></ruby>のときに、パートナーにそばにいてもらいたいと<ruby>思<rt>おも</rt></ruby>っています。",
                romaji: "Shussan no toki ni, pātonā ni soba ni ite moraitai to omotte imasu."
            },
            {
                label: "話者A",
                key: "hospitalStaff",
                name: "病院職員",
                line: "立ち会いについては病院のルールがありますので、条件を一緒に確認しましょう。",
                target: "たちあいについてはびょういんのるーるがありますので じょうけんをいっしょにかくにんしましょう",
                ruby: "<ruby>立<rt>た</rt></ruby>ち<ruby>会<rt>あ</rt></ruby>いについては<ruby>病院<rt>びょういん</rt></ruby>のルールがありますので、<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Tachiai ni tsuite wa byōin no rūru ga arimasu node, jōken o issho ni kakunin shimashō."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "事前に申し込みや説明会への参加が必要でしょうか。",
                target: "じぜんにもうしこみやせつめいかいへのさんかがひつようでしょうか",
                ruby: "<ruby>事前<rt>じぜん</rt></ruby>に<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みや<ruby>説明会<rt>せつめいかい</rt></ruby>への<ruby>参加<rt>さんか</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>でしょうか。",
                romaji: "Jizen ni mōshikomi ya setsumeikai e no sanka ga hitsuyō deshō ka."
            },
            {
                label: "話者A",
                key: "hospitalStaff",
                name: "病院職員",
                line: "必要な手続きは病院によって異なりますので、こちらの案内を確認してください。",
                target: "ひつようなてつづきはびょういんによってことなりますので こちらのあんないをかくにんしてください",
                ruby: "<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>手続<rt>てつづ</rt></ruby>きは<ruby>病院<rt>びょういん</rt></ruby>によって<ruby>異<rt>こと</rt></ruby>なりますので、こちらの<ruby>案内<rt>あんない</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Hitsuyō na tetsuzuki wa byōin ni yotte kotonarimasu node, kochira no annai o kakunin shite kudasai."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "もし立ち会えない場合に、どのように支えてもらうかも相談しておきたいです。",
                target: "もしたちあえないばあいに どのようにささえてもらうかもそうだんしておきたいです",
                ruby: "もし<ruby>立<rt>た</rt></ruby>ち<ruby>会<rt>あ</rt></ruby>えない<ruby>場合<rt>ばあい</rt></ruby>に、どのように<ruby>支<rt>ささ</rt></ruby>えてもらうかも<ruby>相談<rt>そうだん</rt></ruby>しておきたいです。",
                romaji: "Moshi tachiaenai baai ni, dono yō ni sasaete morau ka mo sōdan shite okitai desu."
            },
            {
                label: "話者A",
                key: "hospitalStaff",
                name: "病院職員",
                line: "いいですね。いくつかの場合を考えておくと、予定が変わったときにも対応しやすくなります。",
                target: "いいですね いくつかのばあいをかんがえておくと よていがかわったときにもたいおうしやすくなります",
                ruby: "いいですね。いくつかの<ruby>場合<rt>ばあい</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えておくと、<ruby>予定<rt>よてい</rt></ruby>が<ruby>変<rt>か</rt></ruby>わったときにも<ruby>対応<rt>たいおう</rt></ruby>しやすくなります。",
                romaji: "Ii desu ne. Ikutsuka no baai o kangaete oku to, yotei ga kawatta toki ni mo taiō shiyasuku narimasu."
            }
        ],

        {
            ja: [
                "妊婦：出産のときに、パートナーにそばにいてもらいたいと思っています。",
                "病院職員：立ち会いについては病院のルールがありますので、条件を一緒に確認しましょう。",
                "妊婦：事前に申し込みや説明会への参加が必要でしょうか。",
                "病院職員：必要な手続きは病院によって異なりますので、こちらの案内を確認してください。",
                "妊婦：もし立ち会えない場合に、どのように支えてもらうかも相談しておきたいです。",
                "病院職員：いいですね。いくつかの場合を考えておくと、予定が変わったときにも対応しやすくなります。"
            ],

            en: [
                "Pregnant Woman: I would like my partner to be with me when I give birth.",
                "Hospital Staff: The hospital has rules about having someone present during childbirth, so let us check the conditions together.",
                "Pregnant Woman: Do we need to apply in advance or attend an information session?",
                "Hospital Staff: Required procedures differ depending on the hospital, so please check this information.",
                "Pregnant Woman: I would also like to discuss how my partner can support me if being present is not possible.",
                "Hospital Staff: That is a good idea. Thinking about several possible situations makes it easier to respond if plans change."
            ],

            "zh-CN": [
                "孕妇：分娩的时候，我希望伴侣能够陪在身边。",
                "医院工作人员：关于陪产，医院有相关规定，我们一起确认一下条件吧。",
                "孕妇：需要提前申请或参加说明会吗？",
                "医院工作人员：所需手续因医院而异，请确认这份说明。",
                "孕妇：如果无法陪产，我也想提前商量伴侣可以怎样支持我。",
                "医院工作人员：很好。事先考虑几种情况，即使计划发生变化也比较容易应对。"
            ],

            "zh-TW": [
                "孕婦：分娩的時候，我希望伴侶能夠陪在身邊。",
                "醫院工作人員：關於陪產，醫院有相關規定，我們一起確認一下條件吧。",
                "孕婦：需要提前申請或參加說明會嗎？",
                "醫院工作人員：所需手續因醫院而異，請確認這份說明。",
                "孕婦：如果無法陪產，我也想提前商量伴侶可以怎樣支持我。",
                "醫院工作人員：很好。事先考慮幾種情況，即使計畫發生變化也比較容易應對。"
            ],

            ko: [
                "임산부: 출산할 때 파트너가 제 곁에 있어 주었으면 합니다.",
                "병원 직원: 출산 동행에 대해서는 병원 규정이 있으므로 조건을 함께 확인해 봅시다.",
                "임산부: 미리 신청하거나 설명회에 참석해야 하나요?",
                "병원 직원: 필요한 절차는 병원마다 다르므로 이 안내를 확인해 주세요.",
                "임산부: 만약 함께 있을 수 없는 경우에는 어떻게 지원받을지도 상담해 두고 싶습니다.",
                "병원 직원: 좋습니다. 여러 상황을 생각해 두면 계획이 바뀌었을 때도 대응하기 쉬워집니다."
            ],

            vi: [
                "Thai phụ: Khi sinh con, tôi muốn bạn đời ở bên cạnh mình.",
                "Nhân viên bệnh viện: Bệnh viện có quy định về người có mặt khi sinh, nên chúng ta hãy cùng kiểm tra điều kiện.",
                "Thai phụ: Có cần đăng ký trước hoặc tham gia buổi hướng dẫn không?",
                "Nhân viên bệnh viện: Các thủ tục cần thiết khác nhau tùy bệnh viện, nên hãy kiểm tra hướng dẫn này.",
                "Thai phụ: Nếu không thể có mặt, tôi cũng muốn trao đổi trước về cách bạn đời có thể hỗ trợ tôi.",
                "Nhân viên bệnh viện: Đó là một ý hay. Nghĩ trước một vài tình huống sẽ giúp bạn dễ ứng phó hơn khi kế hoạch thay đổi."
            ]
        }
    ),

    // =====================================================
    // 006 日本語や通訳について相談する
    // =====================================================

    makeB1ChildbirthConsultationDialogue(
        "b1_childbirthconsult_006",
        "日本語や通訳について相談する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "普段の会話はできますが、医療の難しい日本語には自信がありません。",
                target: "ふだんのかいわはできますが いりょうのむずかしいにほんごにはじしんがありません",
                ruby: "<ruby>普段<rt>ふだん</rt></ruby>の<ruby>会話<rt>かいわ</rt></ruby>はできますが、<ruby>医療<rt>いりょう</rt></ruby>の<ruby>難<rt>むずか</rt></ruby>しい<ruby>日本語<rt>にほんご</rt></ruby>には<ruby>自信<rt>じしん</rt></ruby>がありません。",
                romaji: "Fudan no kaiwa wa dekimasu ga, iryō no muzukashii Nihongo ni wa jishin ga arimasen."
            },
            {
                label: "話者A",
                key: "hospitalStaff",
                name: "病院職員",
                line: "わかりました。特に説明がわかりにくいときは、遠慮なく伝えてください。",
                target: "わかりました とくにせつめいがわかりにくいときは えんりょなくつたえてください",
                ruby: "わかりました。<ruby>特<rt>とく</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>がわかりにくいときは、<ruby>遠慮<rt>えんりょ</rt></ruby>なく<ruby>伝<rt>つた</rt></ruby>えてください。",
                romaji: "Wakarimashita. Toku ni setsumei ga wakarinikui toki wa, enryo naku tsutaete kudasai."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "大切な説明を聞き間違えるのが心配です。通訳を利用できる場合はありますか。",
                target: "たいせつなせつめいをききまちがえるのがしんぱいです つうやくをりようできるばあいはありますか",
                ruby: "<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>説明<rt>せつめい</rt></ruby>を<ruby>聞<rt>き</rt></ruby>き<ruby>間違<rt>まちが</rt></ruby>えるのが<ruby>心配<rt>しんぱい</rt></ruby>です。<ruby>通訳<rt>つうやく</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>できる<ruby>場合<rt>ばあい</rt></ruby>はありますか。",
                romaji: "Taisetsu na setsumei o kikimachigaeru no ga shinpai desu. Tsūyaku o riyō dekiru baai wa arimasu ka."
            },
            {
                label: "話者A",
                key: "hospitalStaff",
                name: "病院職員",
                line: "対応方法は病院によって異なりますので、事前に利用できるサービスを確認しましょう。",
                target: "たいおうほうほうはびょういんによってことなりますので じぜんにりようできるさーびすをかくにんしましょう",
                ruby: "<ruby>対応方法<rt>たいおうほうほう</rt></ruby>は<ruby>病院<rt>びょういん</rt></ruby>によって<ruby>異<rt>こと</rt></ruby>なりますので、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>利用<rt>りよう</rt></ruby>できるサービスを<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Taiō hōhō wa byōin ni yotte kotonarimasu node, jizen ni riyō dekiru sābisu o kakunin shimashō."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "説明を聞いたあと、自分の言葉で確認してもいいでしょうか。",
                target: "せつめいをきいたあと じぶんのことばでかくにんしてもいいでしょうか",
                ruby: "<ruby>説明<rt>せつめい</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いたあと、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>してもいいでしょうか。",
                romaji: "Setsumei o kiita ato, jibun no kotoba de kakunin shite mo ii deshō ka."
            },
            {
                label: "話者A",
                key: "hospitalStaff",
                name: "病院職員",
                line: "もちろんです。大切な内容は、理解できたか一緒に確認しながら進めましょう。",
                target: "もちろんです たいせつなないようは りかいできたかいっしょにかくにんしながらすすめましょう",
                ruby: "もちろんです。<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>内容<rt>ないよう</rt></ruby>は、<ruby>理解<rt>りかい</rt></ruby>できたか<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しながら<ruby>進<rt>すす</rt></ruby>めましょう。",
                romaji: "Mochiron desu. Taisetsu na naiyō wa, rikai dekita ka issho ni kakunin shinagara susumemashō."
            }
        ],

        {
            ja: [
                "妊婦：普段の会話はできますが、医療の難しい日本語には自信がありません。",
                "病院職員：わかりました。特に説明がわかりにくいときは、遠慮なく伝えてください。",
                "妊婦：大切な説明を聞き間違えるのが心配です。通訳を利用できる場合はありますか。",
                "病院職員：対応方法は病院によって異なりますので、事前に利用できるサービスを確認しましょう。",
                "妊婦：説明を聞いたあと、自分の言葉で確認してもいいでしょうか。",
                "病院職員：もちろんです。大切な内容は、理解できたか一緒に確認しながら進めましょう。"
            ],

            en: [
                "Pregnant Woman: I can manage everyday conversations, but I am not confident with difficult medical Japanese.",
                "Hospital Staff: I understand. Please do not hesitate to tell us when an explanation is difficult to understand.",
                "Pregnant Woman: I am worried that I might misunderstand important explanations. Is interpretation available in some cases?",
                "Hospital Staff: Support methods differ by hospital, so let us check in advance what services are available.",
                "Pregnant Woman: After hearing an explanation, may I confirm it again in my own words?",
                "Hospital Staff: Of course. For important information, let us proceed while checking together that you have understood it."
            ],

            "zh-CN": [
                "孕妇：日常会话没有问题，但是我对医疗方面的复杂日语没有信心。",
                "医院工作人员：明白了。如果说明特别难懂，请不要客气，告诉我们。",
                "孕妇：我担心自己听错重要的说明。有时可以使用口译服务吗？",
                "医院工作人员：不同医院的应对方法不同，我们提前确认可以利用的服务吧。",
                "孕妇：听完说明以后，我可以用自己的话再次确认吗？",
                "医院工作人员：当然可以。重要的内容，我们一边确认您是否理解，一边进行。"
            ],

            "zh-TW": [
                "孕婦：日常會話沒有問題，但是我對醫療方面的複雜日語沒有信心。",
                "醫院工作人員：明白了。如果說明特別難懂，請不要客氣，告訴我們。",
                "孕婦：我擔心自己聽錯重要的說明。有時可以使用口譯服務嗎？",
                "醫院工作人員：不同醫院的應對方法不同，我們提前確認可以利用的服務吧。",
                "孕婦：聽完說明以後，我可以用自己的話再次確認嗎？",
                "醫院工作人員：當然可以。重要的內容，我們一邊確認您是否理解，一邊進行。"
            ],

            ko: [
                "임산부: 일상 대화는 할 수 있지만 어려운 의료 일본어에는 자신이 없습니다.",
                "병원 직원: 알겠습니다. 특히 설명을 이해하기 어려울 때는 부담 없이 말씀해 주세요.",
                "임산부: 중요한 설명을 잘못 들을까 봐 걱정됩니다. 통역을 이용할 수 있는 경우가 있나요?",
                "병원 직원: 지원 방법은 병원마다 다르므로 미리 이용 가능한 서비스를 확인해 봅시다.",
                "임산부: 설명을 들은 후 제 말로 다시 확인해도 될까요?",
                "병원 직원: 물론입니다. 중요한 내용은 이해했는지 함께 확인하면서 진행합시다."
            ],

            vi: [
                "Thai phụ: Tôi có thể giao tiếp hằng ngày, nhưng không tự tin với tiếng Nhật y tế khó.",
                "Nhân viên bệnh viện: Tôi hiểu. Khi phần giải thích khó hiểu, đừng ngại nói với chúng tôi.",
                "Thai phụ: Tôi lo có thể nghe nhầm những giải thích quan trọng. Có trường hợp nào được sử dụng phiên dịch không?",
                "Nhân viên bệnh viện: Cách hỗ trợ khác nhau tùy bệnh viện, nên chúng ta hãy kiểm tra trước những dịch vụ có thể sử dụng.",
                "Thai phụ: Sau khi nghe giải thích, tôi có thể xác nhận lại bằng lời của mình không?",
                "Nhân viên bệnh viện: Tất nhiên. Với nội dung quan trọng, chúng ta sẽ cùng xác nhận bạn đã hiểu trước khi tiếp tục."
            ]
        }
    ),

    // =====================================================
    // 007 予定どおりにならない場合について相談する
    // =====================================================

    makeB1ChildbirthConsultationDialogue(
        "b1_childbirthconsult_007",
        "予定どおりにならない場合について相談する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "出産が予定どおりに進まなかったらどうなるのか、それも心配しています。",
                target: "しゅっさんがよていどおりにすすまなかったらどうなるのか それもしんぱいしています",
                ruby: "<ruby>出産<rt>しゅっさん</rt></ruby>が<ruby>予定通<rt>よていどお</rt></ruby>りに<ruby>進<rt>すす</rt></ruby>まなかったらどうなるのか、それも<ruby>心配<rt>しんぱい</rt></ruby>しています。",
                romaji: "Shussan ga yotei dōri ni susumanakattara dō naru no ka, sore mo shinpai shite imasu."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "出産の経過は一人ひとり違うので、状況を確認しながら対応を考えていきます。",
                target: "しゅっさんのけいかはひとりひとりちがうので じょうきょうをかくにんしながらたいおうをかんがえていきます",
                ruby: "<ruby>出産<rt>しゅっさん</rt></ruby>の<ruby>経過<rt>けいか</rt></ruby>は<ruby>一人<rt>ひとり</rt></ruby>ひとり<ruby>違<rt>ちが</rt></ruby>うので、<ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しながら<ruby>対応<rt>たいおう</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えていきます。",
                romaji: "Shussan no keika wa hitori hitori chigau node, jōkyō o kakunin shinagara taiō o kangaete ikimasu."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "急に方法を変える必要がある場合は、説明を受けることができますか。",
                target: "きゅうにほうほうをかえるひつようがあるばあいは せつめいをうけることができますか",
                ruby: "<ruby>急<rt>きゅう</rt></ruby>に<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>変<rt>か</rt></ruby>える<ruby>必要<rt>ひつよう</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>説明<rt>せつめい</rt></ruby>を<ruby>受<rt>う</rt></ruby>けることができますか。",
                romaji: "Kyū ni hōhō o kaeru hitsuyō ga aru baai wa, setsumei o ukeru koto ga dekimasu ka."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "状況に応じて、必要なことや理由をできるだけわかりやすく説明します。",
                target: "じょうきょうにおうじて ひつようなことやりゆうをできるだけわかりやすくせつめいします",
                ruby: "<ruby>状況<rt>じょうきょう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて、<ruby>必要<rt>ひつよう</rt></ruby>なことや<ruby>理由<rt>りゆう</rt></ruby>をできるだけわかりやすく<ruby>説明<rt>せつめい</rt></ruby>します。",
                romaji: "Jōkyō ni ōjite, hitsuyō na koto ya riyū o dekiru dake wakariyasuku setsumei shimasu."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "自分が慌てて質問できない場合に備えて、パートナーとも希望を共有しておきます。",
                target: "じぶんがあわててしつもんできないばあいにそなえて ぱーとなーともきぼうをきょうゆうしておきます",
                ruby: "<ruby>自分<rt>じぶん</rt></ruby>が<ruby>慌<rt>あわ</rt></ruby>てて<ruby>質問<rt>しつもん</rt></ruby>できない<ruby>場合<rt>ばあい</rt></ruby>に<ruby>備<rt>そな</rt></ruby>えて、パートナーとも<ruby>希望<rt>きぼう</rt></ruby>を<ruby>共有<rt>きょうゆう</rt></ruby>しておきます。",
                romaji: "Jibun ga awatete shitsumon dekinai baai ni sonaete, pātonā to mo kibō o kyōyū shite okimasu."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "それはよい準備ですね。気になることは事前に書いておく方法もあります。",
                target: "それはよいじゅんびですね きになることはじぜんにかいておくほうほうもあります",
                ruby: "それはよい<ruby>準備<rt>じゅんび</rt></ruby>ですね。<ruby>気<rt>き</rt></ruby>になることは<ruby>事前<rt>じぜん</rt></ruby>に<ruby>書<rt>か</rt></ruby>いておく<ruby>方法<rt>ほうほう</rt></ruby>もあります。",
                romaji: "Sore wa yoi junbi desu ne. Ki ni naru koto wa jizen ni kaite oku hōhō mo arimasu."
            }
        ],

        {
            ja: [
                "妊婦：出産が予定どおりに進まなかったらどうなるのか、それも心配しています。",
                "医師：出産の経過は一人ひとり違うので、状況を確認しながら対応を考えていきます。",
                "妊婦：急に方法を変える必要がある場合は、説明を受けることができますか。",
                "医師：状況に応じて、必要なことや理由をできるだけわかりやすく説明します。",
                "妊婦：自分が慌てて質問できない場合に備えて、パートナーとも希望を共有しておきます。",
                "医師：それはよい準備ですね。気になることは事前に書いておく方法もあります。"
            ],

            en: [
                "Pregnant Woman: I am also worried about what will happen if the birth does not go according to plan.",
                "Doctor: The progress of childbirth differs from person to person, so we consider the appropriate response while checking the situation.",
                "Pregnant Woman: If the plan suddenly needs to change, will I receive an explanation?",
                "Doctor: Depending on the situation, we will explain what is necessary and why as clearly as possible.",
                "Pregnant Woman: In case I am too overwhelmed to ask questions, I will share my preferences with my partner in advance.",
                "Doctor: That is good preparation. You can also write down your questions and concerns beforehand."
            ],

            "zh-CN": [
                "孕妇：我也担心如果分娩没有按照计划进行会怎么样。",
                "医生：每个人的分娩过程都不同，我们会一边确认情况，一边考虑相应的应对方式。",
                "孕妇：如果突然需要改变方法，我可以得到说明吗？",
                "医生：我们会根据情况，尽可能清楚地说明需要做什么以及原因。",
                "孕妇：为了防止自己慌张得无法提问，我会提前和伴侣共享自己的希望。",
                "医生：这是很好的准备。也可以事先把担心的问题写下来。"
            ],

            "zh-TW": [
                "孕婦：我也擔心如果分娩沒有按照計畫進行會怎麼樣。",
                "醫師：每個人的分娩過程都不同，我們會一邊確認情況，一邊考慮相應的應對方式。",
                "孕婦：如果突然需要改變方法，我可以得到說明嗎？",
                "醫師：我們會根據情況，盡可能清楚地說明需要做什麼以及原因。",
                "孕婦：為了防止自己慌張得無法提問，我會提前和伴侶共享自己的希望。",
                "醫師：這是很好的準備。也可以事先把擔心的問題寫下來。"
            ],

            ko: [
                "임산부: 출산이 계획대로 진행되지 않으면 어떻게 되는지도 걱정됩니다.",
                "의사: 출산 과정은 사람마다 다르기 때문에 상황을 확인하면서 대응 방법을 생각합니다.",
                "임산부: 갑자기 방법을 바꿔야 할 경우 설명을 들을 수 있나요?",
                "의사: 상황에 따라 필요한 일과 이유를 가능한 한 이해하기 쉽게 설명하겠습니다.",
                "임산부: 제가 당황해서 질문하지 못할 경우를 대비해 파트너와도 제 희망을 공유해 두겠습니다.",
                "의사: 좋은 준비입니다. 궁금한 점을 미리 적어 두는 방법도 있습니다."
            ],

            vi: [
                "Thai phụ: Tôi cũng lo không biết chuyện gì sẽ xảy ra nếu việc sinh con không diễn ra theo kế hoạch.",
                "Bác sĩ: Quá trình sinh của mỗi người khác nhau, nên chúng tôi sẽ xem xét cách xử lý trong khi theo dõi tình hình.",
                "Thai phụ: Nếu đột nhiên cần thay đổi phương pháp, tôi có được giải thích không?",
                "Bác sĩ: Tùy tình hình, chúng tôi sẽ giải thích những gì cần thiết và lý do một cách dễ hiểu nhất có thể.",
                "Thai phụ: Để phòng trường hợp tôi quá hoảng nên không thể đặt câu hỏi, tôi sẽ chia sẻ mong muốn của mình với bạn đời trước.",
                "Bác sĩ: Đó là sự chuẩn bị tốt. Bạn cũng có thể viết trước những điều mình lo lắng."
            ]
        }
    ),

    // =====================================================
    // 008 出産後の生活への不安を相談する
    // =====================================================

    makeB1ChildbirthConsultationDialogue(
        "b1_childbirthconsult_008",
        "出産後の生活への不安を相談する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "出産そのものだけでなく、赤ちゃんとの生活が始まったあとのことも不安です。",
                target: "しゅっさんそのものだけでなく あかちゃんとのせいかつがはじまったあとのこともふあんです",
                ruby: "<ruby>出産<rt>しゅっさん</rt></ruby>そのものだけでなく、<ruby>赤<rt>あか</rt></ruby>ちゃんとの<ruby>生活<rt>せいかつ</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まったあとのことも<ruby>不安<rt>ふあん</rt></ruby>です。",
                romaji: "Shussan sono mono dake de naku, akachan to no seikatsu ga hajimatta ato no koto mo fuan desu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "特にどのようなことを心配していますか。今のうちから一緒に整理してみましょう。",
                target: "とくにどのようなことをしんぱいしていますか いまのうちからいっしょにせいりしてみましょう",
                ruby: "<ruby>特<rt>とく</rt></ruby>にどのようなことを<ruby>心配<rt>しんぱい</rt></ruby>していますか。<ruby>今<rt>いま</rt></ruby>のうちから<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>整理<rt>せいり</rt></ruby>してみましょう。",
                romaji: "Toku ni dono yō na koto o shinpai shite imasu ka. Ima no uchi kara issho ni seiri shite mimashō."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "近くに家族がいないので、一人で全部できるかどうか心配しています。",
                target: "ちかくにかぞくがいないので ひとりでぜんぶできるかどうかしんぱいしています",
                ruby: "<ruby>近<rt>ちか</rt></ruby>くに<ruby>家族<rt>かぞく</rt></ruby>がいないので、<ruby>一人<rt>ひとり</rt></ruby>で<ruby>全部<rt>ぜんぶ</rt></ruby>できるかどうか<ruby>心配<rt>しんぱい</rt></ruby>しています。",
                romaji: "Chikaku ni kazoku ga inai node, hitori de zenbu dekiru ka dō ka shinpai shite imasu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "家族だけで抱え込まず、病院や自治体など、相談できる場所を事前に確認しておきましょう。",
                target: "かぞくだけでかかえこまず びょういんやじちたいなど そうだんできるばしょをじぜんにかくにんしておきましょう",
                ruby: "<ruby>家族<rt>かぞく</rt></ruby>だけで<ruby>抱<rt>かか</rt></ruby>え<ruby>込<rt>こ</rt></ruby>まず、<ruby>病院<rt>びょういん</rt></ruby>や<ruby>自治体<rt>じちたい</rt></ruby>など、<ruby>相談<rt>そうだん</rt></ruby>できる<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>事前<rt>じぜん</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しておきましょう。",
                romaji: "Kazoku dake de kakaekomazu, byōin ya jichitai nado, sōdan dekiru basho o jizen ni kakunin shite okimashō."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "困ってから探すのではなく、今のうちに連絡先をまとめておきたいです。",
                target: "こまってからさがすのではなく いまのうちにれんらくさきをまとめておきたいです",
                ruby: "<ruby>困<rt>こま</rt></ruby>ってから<ruby>探<rt>さが</rt></ruby>すのではなく、<ruby>今<rt>いま</rt></ruby>のうちに<ruby>連絡先<rt>れんらくさき</rt></ruby>をまとめておきたいです。",
                romaji: "Komatte kara sagasu no de wa naku, ima no uchi ni renrakusaki o matomete okitai desu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "いいですね。不安や困りごとを一人で我慢せず、早めに相談することも大切です。",
                target: "いいですね ふあんやこまりごとをひとりでがまんせず はやめにそうだんすることもたいせつです",
                ruby: "いいですね。<ruby>不安<rt>ふあん</rt></ruby>や<ruby>困<rt>こま</rt></ruby>りごとを<ruby>一人<rt>ひとり</rt></ruby>で<ruby>我慢<rt>がまん</rt></ruby>せず、<ruby>早<rt>はや</rt></ruby>めに<ruby>相談<rt>そうだん</rt></ruby>することも<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Ii desu ne. Fuan ya komarigoto o hitori de gaman sezu, hayame ni sōdan suru koto mo taisetsu desu."
            }
        ],

        {
            ja: [
                "妊婦：出産そのものだけでなく、赤ちゃんとの生活が始まったあとのことも不安です。",
                "助産師：特にどのようなことを心配していますか。今のうちから一緒に整理してみましょう。",
                "妊婦：近くに家族がいないので、一人で全部できるかどうか心配しています。",
                "助産師：家族だけで抱え込まず、病院や自治体など、相談できる場所を事前に確認しておきましょう。",
                "妊婦：困ってから探すのではなく、今のうちに連絡先をまとめておきたいです。",
                "助産師：いいですね。不安や困りごとを一人で我慢せず、早めに相談することも大切です。"
            ],

            en: [
                "Pregnant Woman: I am worried not only about childbirth itself, but also about life after I start living with the baby.",
                "Midwife: What are you especially worried about? Let us organize your concerns together now.",
                "Pregnant Woman: My family does not live nearby, so I am worried about whether I can manage everything alone.",
                "Midwife: Rather than trying to handle everything only within the family, let us check in advance where you can ask for help, such as the hospital or local government.",
                "Pregnant Woman: Instead of searching only after I have a problem, I would like to organize the contact information now.",
                "Midwife: Good. It is also important not to keep worries and difficulties to yourself and to ask for help early."
            ],

            "zh-CN": [
                "孕妇：我不仅担心分娩本身，也担心孩子出生以后开始的生活。",
                "助产士：您特别担心什么呢？我们现在就一起整理一下吧。",
                "孕妇：我的家人不住在附近，所以我担心自己一个人能不能做所有事情。",
                "助产士：不要只由家庭承担所有问题，提前确认医院、自治体等可以咨询的地方吧。",
                "孕妇：我不想等遇到困难后才寻找，希望现在就整理好联系方式。",
                "助产士：很好。不要一个人忍耐不安和困难，尽早咨询也很重要。"
            ],

            "zh-TW": [
                "孕婦：我不僅擔心分娩本身，也擔心孩子出生以後開始的生活。",
                "助產師：您特別擔心什麼呢？我們現在就一起整理一下吧。",
                "孕婦：我的家人不住在附近，所以我擔心自己一個人能不能做所有事情。",
                "助產師：不要只由家庭承擔所有問題，提前確認醫院、自治體等可以諮詢的地方吧。",
                "孕婦：我不想等遇到困難後才尋找，希望現在就整理好聯絡方式。",
                "助產師：很好。不要一個人忍耐不安和困難，儘早諮詢也很重要。"
            ],

            ko: [
                "임산부: 출산 자체뿐 아니라 아기와의 생활이 시작된 후의 일도 불안합니다.",
                "조산사: 특히 어떤 점이 걱정되나요? 지금부터 함께 정리해 봅시다.",
                "임산부: 가까이에 가족이 없어서 혼자서 모든 것을 할 수 있을지 걱정됩니다.",
                "조산사: 가족끼리만 모든 것을 떠안지 말고 병원이나 지자체 등 상담할 수 있는 곳을 미리 확인해 둡시다.",
                "임산부: 곤란해진 후에 찾기보다 지금 연락처를 정리해 두고 싶습니다.",
                "조산사: 좋습니다. 불안이나 어려움을 혼자 참지 말고 일찍 상담하는 것도 중요합니다."
            ],

            vi: [
                "Thai phụ: Tôi không chỉ lo về việc sinh con mà còn lo về cuộc sống sau khi bắt đầu sống cùng em bé.",
                "Nữ hộ sinh: Bạn đặc biệt lo điều gì? Chúng ta hãy cùng sắp xếp những lo lắng ngay từ bây giờ.",
                "Thai phụ: Gia đình tôi không sống gần đây nên tôi lo liệu mình có thể tự làm mọi việc hay không.",
                "Nữ hộ sinh: Đừng để gia đình tự gánh mọi việc. Hãy xác nhận trước những nơi có thể xin tư vấn như bệnh viện hoặc chính quyền địa phương.",
                "Thai phụ: Thay vì đợi đến khi gặp khó khăn mới tìm, tôi muốn tổng hợp sẵn thông tin liên lạc từ bây giờ.",
                "Nữ hộ sinh: Tốt lắm. Điều quan trọng là không chịu đựng lo lắng và khó khăn một mình mà nên xin tư vấn sớm."
            ]
        }
    )

];