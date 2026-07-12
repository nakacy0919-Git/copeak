// =====================================================
// Japeak B1 Level
// Scene: 出産の準備をしよう
// File: data/japeak-b1-childbirth-preparation.js
// Category Key: b1_childbirth_preparation
// =====================================================

const b1ChildbirthPreparationLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1ChildbirthPreparationTranslations(translations) {
    const completed = {};

    b1ChildbirthPreparationLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1ChildbirthPreparationContext = {
    ja: "出産に向けて、準備の計画、妊婦健診と母子健康手帳、入院方法、入院バッグ、病院への連絡方法、家族との役割分担、自治体の支援、緊急時の連絡先などについて日本語で話す練習をします。",

    en: "Practice Japanese for preparing for childbirth, including planning preparations, prenatal checkups and the maternal and child health handbook, hospital admission, packing a hospital bag, contacting the hospital, sharing responsibilities with family, local government support, and emergency contacts.",

    "zh-CN": "练习为分娩做准备时使用的日语，包括制定准备计划、孕妇健康检查和母子健康手册、住院方法、住院行李、联系医院、与家人分工、自治体支援以及紧急联系方式。",

    "zh-TW": "練習為分娩做準備時使用的日語，包括制定準備計畫、孕婦健康檢查和母子健康手冊、住院方法、住院行李、聯絡醫院、與家人分工、自治體支援以及緊急聯絡方式。",

    ko: "출산 준비 계획, 임산부 건강검진과 모자건강수첩, 입원 방법, 입원 가방, 병원 연락 방법, 가족과의 역할 분담, 지자체 지원, 긴급 연락처 등에 대해 일본어로 이야기하는 연습을 합니다.",

    vi: "Luyện tiếng Nhật để chuẩn bị sinh con, bao gồm lập kế hoạch chuẩn bị, khám thai và sổ sức khỏe mẹ và bé, cách nhập viện, chuẩn bị túi nhập viện, liên lạc với bệnh viện, phân chia vai trò với gia đình, hỗ trợ của chính quyền địa phương và liên lạc khẩn cấp.",

    tl: "Practice Japanese for preparing for childbirth, including planning, prenatal checkups, the maternal and child health handbook, hospital admission, packing a hospital bag, contacting the hospital, sharing responsibilities with family, local support, and emergency contacts.",

    id: "Latihan bahasa Jepang untuk mempersiapkan persalinan, termasuk membuat rencana, pemeriksaan kehamilan, buku kesehatan ibu dan anak, prosedur masuk rumah sakit, menyiapkan tas rumah sakit, menghubungi rumah sakit, pembagian tugas dengan keluarga, dukungan pemerintah daerah, dan kontak darurat.",

    th: "ฝึกภาษาญี่ปุ่นเพื่อเตรียมตัวคลอดบุตร รวมถึงการวางแผน การตรวจครรภ์ สมุดสุขภาพแม่และเด็ก การเข้ารักษาในโรงพยาบาล การเตรียมกระเป๋าเข้าโรงพยาบาล การติดต่อโรงพยาบาล การแบ่งหน้าที่กับครอบครัว การสนับสนุนจากหน่วยงานท้องถิ่น และข้อมูลติดต่อฉุกเฉิน",

    my: "ကလေးမွေးဖွားရန် ပြင်ဆင်မှုအစီအစဉ်၊ ကိုယ်ဝန်ဆောင်ကျန်းမာရေးစစ်ဆေးမှု၊ မိခင်နှင့်ကလေးကျန်းမာရေးမှတ်တမ်း၊ ဆေးရုံတက်ခြင်း၊ ဆေးရုံသွားရန်အိတ်ပြင်ဆင်ခြင်း၊ ဆေးရုံသို့ဆက်သွယ်ခြင်း၊ မိသားစုနှင့်တာဝန်ခွဲဝေခြင်း၊ ဒေသဆိုင်ရာအထောက်အပံ့နှင့် အရေးပေါ်ဆက်သွယ်ရန်နံပါတ်များအကြောင်း ဂျပန်စကားဖြင့် လေ့ကျင့်ပါသည်။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់ត្រៀមសម្រាលកូន រួមមានការរៀបចំផែនការ ការពិនិត្យសុខភាពស្ត្រីមានផ្ទៃពោះ សៀវភៅសុខភាពម្តាយនិងកុមារ ការចូលមន្ទីរពេទ្យ ការរៀបចំកាបូបសម្រាប់មន្ទីរពេទ្យ ការទាក់ទងមន្ទីរពេទ្យ ការបែងចែកតួនាទីជាមួយគ្រួសារ ការគាំទ្រពីអាជ្ញាធរមូលដ្ឋាន និងទំនាក់ទំនងបន្ទាន់។",

    ne: "प्रसवको तयारी, गर्भावस्था स्वास्थ्य जाँच, आमा तथा शिशु स्वास्थ्य पुस्तिका, अस्पताल भर्ना, अस्पताल जाने झोला तयार गर्ने, अस्पतालमा सम्पर्क गर्ने, परिवारसँग जिम्मेवारी बाँड्ने, स्थानीय सरकारको सहयोग र आपतकालीन सम्पर्कबारे जापानी अभ्यास।",

    mn: "Төрөхөд бэлтгэх төлөвлөгөө, жирэмсний үзлэг, эх хүүхдийн эрүүл мэндийн дэвтэр, эмнэлэгт хэвтэх, эмнэлгийн цүнх бэлтгэх, эмнэлэгтэй холбогдох, гэр бүлийн үүрэг хуваарилалт, орон нутгийн дэмжлэг, яаралтай холбоо барих мэдээллийн талаар япон хэлээр дадлага хийнэ.",

    si: "දරු ප්‍රසූතිය සඳහා සූදානම් වීම, ගර්භණී සෞඛ්‍ය පරීක්ෂණ, මව් හා ළමා සෞඛ්‍ය පොත, රෝහල්ගත වීම, රෝහල් බෑගය සූදානම් කිරීම, රෝහලට සම්බන්ධ වීම, පවුල සමඟ වගකීම් බෙදා ගැනීම, පළාත් පාලන සහාය සහ හදිසි සම්බන්ධතා ගැන ජපන් භාෂාවෙන් පුහුණු වීම.",

    bn: "প্রসবের প্রস্তুতি, গর্ভকালীন স্বাস্থ্য পরীক্ষা, মা ও শিশুর স্বাস্থ্যবই, হাসপাতালে ভর্তি, হাসপাতালের ব্যাগ প্রস্তুত, হাসপাতালের সঙ্গে যোগাযোগ, পরিবারের সঙ্গে দায়িত্ব ভাগ করা, স্থানীয় সরকারের সহায়তা এবং জরুরি যোগাযোগ সম্পর্কে জাপানি অনুশীলন।",

    pt: "Prática de japonês para se preparar para o parto, incluindo planejamento, consultas pré-natais, caderneta de saúde materno-infantil, internação, preparação da bolsa para o hospital, contato com o hospital, divisão de responsabilidades com a família, apoio do governo local e contatos de emergência.",

    es: "Práctica de japonés para prepararse para el parto, incluyendo planificación, controles prenatales, libreta de salud materno-infantil, hospitalización, preparación de la bolsa para el hospital, contacto con el hospital, reparto de responsabilidades familiares, apoyo del gobierno local y contactos de emergencia.",

    fr: "Entraînement en japonais pour préparer l'accouchement, notamment la planification, les examens prénataux, le carnet de santé maternelle et infantile, l'hospitalisation, la préparation du sac pour l'hôpital, le contact avec l'hôpital, le partage des responsabilités familiales, les aides locales et les contacts d'urgence.",

    ru: "Практика японского языка для подготовки к родам: планирование, дородовые осмотры, книжка здоровья матери и ребёнка, госпитализация, подготовка сумки в больницу, связь с больницей, распределение обязанностей в семье, помощь местных органов и экстренные контакты.",

    uk: "Практика японської мови для підготовки до пологів: планування, допологові огляди, книжка здоров'я матері та дитини, госпіталізація, підготовка сумки до лікарні, зв'язок із лікарнею, розподіл обов'язків у сім'ї, підтримка місцевої влади та екстрені контакти."
};

const b1ChildbirthPreparationSpeakerNames = {

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
    }
};

function makeB1ChildbirthPreparationDialogue(
    id,
    title,
    dialogue,
    dialogueTranslations
) {
    const fullDialogueTranslations =
        completeB1ChildbirthPreparationTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_childbirth_preparation",

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
                b1ChildbirthPreparationSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1ChildbirthPreparationContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1ChildbirthPreparationData = [

    // =====================================================
    // 001 出産までの準備を整理する
    // =====================================================

    makeB1ChildbirthPreparationDialogue(
        "b1_childbirthprep_001",
        "出産までの準備を整理する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "出産予定日が近づいてきたので、何から準備すればいいか整理したいです。",
                target: "しゅっさんよていびがちかづいてきたので なにからじゅんびすればいいかせいりしたいです",
                ruby: "<ruby>出産予定日<rt>しゅっさんよていび</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づいてきたので、<ruby>何<rt>なに</rt></ruby>から<ruby>準備<rt>じゅんび</rt></ruby>すればいいか<ruby>整理<rt>せいり</rt></ruby>したいです。",
                romaji: "Shussan yoteibi ga chikazuite kita node, nani kara junbi sureba ii ka seiri shitai desu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "まず、健診の予定、入院の準備、病院への連絡方法を確認しておくと安心です。",
                target: "まず けんしんのよてい にゅういんのじゅんび びょういんへのれんらくほうほうをかくにんしておくとあんしんです",
                ruby: "まず、<ruby>健診<rt>けんしん</rt></ruby>の<ruby>予定<rt>よてい</rt></ruby>、<ruby>入院<rt>にゅういん</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>、<ruby>病院<rt>びょういん</rt></ruby>への<ruby>連絡方法<rt>れんらくほうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しておくと<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Mazu, kenshin no yotei, nyūin no junbi, byōin e no renraku hōhō o kakunin shite oku to anshin desu."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "一度に全部しようとすると不安なので、優先順位を決めたいです。",
                target: "いちどにぜんぶしようとするとふあんなので ゆうせんじゅんいをきめたいです",
                ruby: "<ruby>一度<rt>いちど</rt></ruby>に<ruby>全部<rt>ぜんぶ</rt></ruby>しようとすると<ruby>不安<rt>ふあん</rt></ruby>なので、<ruby>優先順位<rt>ゆうせんじゅんい</rt></ruby>を<ruby>決<rt>き</rt></ruby>めたいです。",
                romaji: "Ichido ni zenbu shiyō to suru to fuan na node, yūsen jun'i o kimetai desu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "では、今週中に必要な物を確認し、来週までにバッグを準備するのはどうでしょうか。",
                target: "では こんしゅうちゅうにひつようなものをかくにんし らいしゅうまでにばっぐをじゅんびするのはどうでしょうか",
                ruby: "では、<ruby>今週中<rt>こんしゅうちゅう</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>物<rt>もの</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>し、<ruby>来週<rt>らいしゅう</rt></ruby>までにバッグを<ruby>準備<rt>じゅんび</rt></ruby>するのはどうでしょうか。",
                romaji: "Dewa, konshū-chū ni hitsuyō na mono o kakunin shi, raishū made ni baggu o junbi suru no wa dō deshō ka."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "それなら進めやすそうです。家族とも予定を共有しておきます。",
                target: "それならすすめやすそうです かぞくともよていをきょうゆうしておきます",
                ruby: "それなら<ruby>進<rt>すす</rt></ruby>めやすそうです。<ruby>家族<rt>かぞく</rt></ruby>とも<ruby>予定<rt>よてい</rt></ruby>を<ruby>共有<rt>きょうゆう</rt></ruby>しておきます。",
                romaji: "Sore nara susumeyasusō desu. Kazoku to mo yotei o kyōyū shite okimasu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "いいですね。自分一人で抱えず、家族や周りの人と分担することも大切です。",
                target: "いいですね じぶんひとりでかかえず かぞくやまわりのひととぶんたんすることもたいせつです",
                ruby: "いいですね。<ruby>自分一人<rt>じぶんひとり</rt></ruby>で<ruby>抱<rt>かか</rt></ruby>えず、<ruby>家族<rt>かぞく</rt></ruby>や<ruby>周<rt>まわ</rt></ruby>りの<ruby>人<rt>ひと</rt></ruby>と<ruby>分担<rt>ぶんたん</rt></ruby>することも<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Ii desu ne. Jibun hitori de kakaezu, kazoku ya mawari no hito to buntan suru koto mo taisetsu desu."
            }
        ],

        {
            ja: [
                "妊婦：出産予定日が近づいてきたので、何から準備すればいいか整理したいです。",
                "助産師：まず、健診の予定、入院の準備、病院への連絡方法を確認しておくと安心です。",
                "妊婦：一度に全部しようとすると不安なので、優先順位を決めたいです。",
                "助産師：では、今週中に必要な物を確認し、来週までにバッグを準備するのはどうでしょうか。",
                "妊婦：それなら進めやすそうです。家族とも予定を共有しておきます。",
                "助産師：いいですね。自分一人で抱えず、家族や周りの人と分担することも大切です。"
            ],

            en: [
                "Pregnant Woman: My due date is getting closer, so I would like to organize what I need to prepare first.",
                "Midwife: First, it is reassuring to check your prenatal appointment schedule, preparations for hospital admission, and how to contact the hospital.",
                "Pregnant Woman: Trying to do everything at once makes me anxious, so I would like to decide my priorities.",
                "Midwife: Then how about checking the necessary items this week and preparing your hospital bag by next week?",
                "Pregnant Woman: That sounds manageable. I will also share the schedule with my family.",
                "Midwife: Good. It is also important not to handle everything alone and to share responsibilities with family and people around you."
            ],

            "zh-CN": [
                "孕妇：预产期越来越近了，所以我想整理一下应该先准备什么。",
                "助产士：首先确认产检安排、住院准备和联系医院的方法，会比较安心。",
                "孕妇：如果一次全部做完，我会感到不安，所以想决定优先顺序。",
                "助产士：那么，这周确认需要的物品，下周之前准备好住院包怎么样？",
                "孕妇：这样好像比较容易进行。我也会和家人共享计划。",
                "助产士：很好。不要一个人承担所有事情，与家人和周围的人分担也很重要。"
            ],

            "zh-TW": [
                "孕婦：預產期越來越近了，所以我想整理一下應該先準備什麼。",
                "助產師：首先確認產檢安排、住院準備和聯絡醫院的方法，會比較安心。",
                "孕婦：如果一次全部做完，我會感到不安，所以想決定優先順序。",
                "助產師：那麼，這週確認需要的物品，下週之前準備好住院包怎麼樣？",
                "孕婦：這樣好像比較容易進行。我也會和家人共享計畫。",
                "助產師：很好。不要一個人承擔所有事情，與家人和周圍的人分擔也很重要。"
            ],

            ko: [
                "임산부: 출산 예정일이 가까워져서 무엇부터 준비해야 할지 정리하고 싶습니다.",
                "조산사: 우선 검진 일정, 입원 준비, 병원에 연락하는 방법을 확인해 두면 안심됩니다.",
                "임산부: 한꺼번에 모두 하려고 하면 불안해서 우선순위를 정하고 싶습니다.",
                "조산사: 그러면 이번 주 안에 필요한 물건을 확인하고 다음 주까지 가방을 준비하는 것은 어떨까요?",
                "임산부: 그렇다면 진행하기 쉬울 것 같습니다. 가족과도 일정을 공유해 두겠습니다.",
                "조산사: 좋습니다. 혼자서 모든 것을 떠안지 말고 가족이나 주변 사람과 역할을 나누는 것도 중요합니다."
            ],

            vi: [
                "Thai phụ: Ngày dự sinh đang đến gần nên tôi muốn sắp xếp xem cần chuẩn bị gì trước.",
                "Nữ hộ sinh: Trước tiên, bạn nên kiểm tra lịch khám thai, việc chuẩn bị nhập viện và cách liên lạc với bệnh viện.",
                "Thai phụ: Nếu làm tất cả cùng lúc tôi sẽ thấy lo lắng, nên tôi muốn xác định thứ tự ưu tiên.",
                "Nữ hộ sinh: Vậy tuần này bạn kiểm tra những đồ cần thiết và chuẩn bị túi nhập viện trước tuần sau thì sao?",
                "Thai phụ: Như vậy có vẻ dễ thực hiện hơn. Tôi cũng sẽ chia sẻ kế hoạch với gia đình.",
                "Nữ hộ sinh: Tốt lắm. Điều quan trọng là không ôm hết mọi việc một mình mà chia sẻ trách nhiệm với gia đình và những người xung quanh."
            ]
        }
    ),

    // =====================================================
    // 002 妊婦健診と母子健康手帳を確認する
    // =====================================================

    makeB1ChildbirthPreparationDialogue(
        "b1_childbirthprep_002",
        "妊婦健診と母子健康手帳を確認する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "次の妊婦健診に持っていく物を、もう一度確認したいです。",
                target: "つぎのにんぷけんしんにもっていくものを もういちどかくにんしたいです",
                ruby: "<ruby>次<rt>つぎ</rt></ruby>の<ruby>妊婦健診<rt>にんぷけんしん</rt></ruby>に<ruby>持<rt>も</rt></ruby>っていく<ruby>物<rt>もの</rt></ruby>を、もう<ruby>一度<rt>いちど</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Tsugi no ninpu kenshin ni motte iku mono o, mō ichido kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "母子健康手帳や診察券など、病院から案内されている物を準備してください。",
                target: "ぼしけんこうてちょうやしんさつけんなど びょういんからあんないされているものをじゅんびしてください",
                ruby: "<ruby>母子健康手帳<rt>ぼしけんこうてちょう</rt></ruby>や<ruby>診察券<rt>しんさつけん</rt></ruby>など、<ruby>病院<rt>びょういん</rt></ruby>から<ruby>案内<rt>あんない</rt></ruby>されている<ruby>物<rt>もの</rt></ruby>を<ruby>準備<rt>じゅんび</rt></ruby>してください。",
                romaji: "Boshi kenkō techō ya shinsatsuken nado, byōin kara annai sarete iru mono o junbi shite kudasai."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "母子健康手帳には、どのようなことが記録されるのですか。",
                target: "ぼしけんこうてちょうには どのようなことがきろくされるのですか",
                ruby: "<ruby>母子健康手帳<rt>ぼしけんこうてちょう</rt></ruby>には、どのようなことが<ruby>記録<rt>きろく</rt></ruby>されるのですか。",
                romaji: "Boshi kenkō techō ni wa, dono yō na koto ga kiroku sareru no desu ka."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "妊娠中の経過や健診の記録など、大切な情報が記録されます。",
                target: "にんしんちゅうのけいかやけんしんのきろくなど たいせつなじょうほうがきろくされます",
                ruby: "<ruby>妊娠中<rt>にんしんちゅう</rt></ruby>の<ruby>経過<rt>けいか</rt></ruby>や<ruby>健診<rt>けんしん</rt></ruby>の<ruby>記録<rt>きろく</rt></ruby>など、<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>情報<rt>じょうほう</rt></ruby>が<ruby>記録<rt>きろく</rt></ruby>されます。",
                romaji: "Ninshin-chū no keika ya kenshin no kiroku nado, taisetsu na jōhō ga kiroku saremasu."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "では、なくさないようにして、必要なときにすぐ出せるようにしておきます。",
                target: "では なくさないようにして ひつようなときにすぐだせるようにしておきます",
                ruby: "では、なくさないようにして、<ruby>必要<rt>ひつよう</rt></ruby>なときにすぐ<ruby>出<rt>だ</rt></ruby>せるようにしておきます。",
                romaji: "Dewa, nakusanai yō ni shite, hitsuyō na toki ni sugu daseru yō ni shite okimasu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "いいですね。病院からの案内も一緒に確認しながら、大切に保管してください。",
                target: "いいですね びょういんからのあんないもいっしょにかくにんしながら たいせつにほかんしてください",
                ruby: "いいですね。<ruby>病院<rt>びょういん</rt></ruby>からの<ruby>案内<rt>あんない</rt></ruby>も<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しながら、<ruby>大切<rt>たいせつ</rt></ruby>に<ruby>保管<rt>ほかん</rt></ruby>してください。",
                romaji: "Ii desu ne. Byōin kara no annai mo issho ni kakunin shinagara, taisetsu ni hokan shite kudasai."
            }
        ],

        {
            ja: [
                "妊婦：次の妊婦健診に持っていく物を、もう一度確認したいです。",
                "助産師：母子健康手帳や診察券など、病院から案内されている物を準備してください。",
                "妊婦：母子健康手帳には、どのようなことが記録されるのですか。",
                "助産師：妊娠中の経過や健診の記録など、大切な情報が記録されます。",
                "妊婦：では、なくさないようにして、必要なときにすぐ出せるようにしておきます。",
                "助産師：いいですね。病院からの案内も一緒に確認しながら、大切に保管してください。"
            ],

            en: [
                "Pregnant Woman: I would like to check once again what I need to bring to my next prenatal checkup.",
                "Midwife: Please prepare the items your hospital has instructed you to bring, such as your maternal and child health handbook and patient card.",
                "Pregnant Woman: What kind of information is recorded in the maternal and child health handbook?",
                "Midwife: Important information such as the progress of your pregnancy and records of health checkups is recorded in it.",
                "Pregnant Woman: Then I will keep it safe and make sure I can take it out quickly when necessary.",
                "Midwife: Good. Please keep it carefully while also checking the information provided by your hospital."
            ],

            "zh-CN": [
                "孕妇：我想再次确认一下下次产检需要带什么。",
                "助产士：请准备医院通知您携带的物品，例如母子健康手册和诊察券。",
                "孕妇：母子健康手册里会记录哪些内容？",
                "助产士：其中会记录怀孕过程和健康检查记录等重要信息。",
                "孕妇：那么，我会好好保管，需要时能够马上拿出来。",
                "助产士：很好。也请同时确认医院的通知，并妥善保管。"
            ],

            "zh-TW": [
                "孕婦：我想再次確認一下下次產檢需要帶什麼。",
                "助產師：請準備醫院通知您攜帶的物品，例如母子健康手冊和診察券。",
                "孕婦：母子健康手冊裡會記錄哪些內容？",
                "助產師：其中會記錄懷孕過程和健康檢查紀錄等重要資訊。",
                "孕婦：那麼，我會好好保管，需要時能夠馬上拿出來。",
                "助產師：很好。也請同時確認醫院的通知，並妥善保管。"
            ],

            ko: [
                "임산부: 다음 임산부 검진에 가져갈 물건을 다시 한번 확인하고 싶습니다.",
                "조산사: 모자건강수첩이나 진찰권 등 병원에서 안내받은 물건을 준비해 주세요.",
                "임산부: 모자건강수첩에는 어떤 내용이 기록되나요?",
                "조산사: 임신 중의 경과와 검진 기록 등 중요한 정보가 기록됩니다.",
                "임산부: 그러면 잃어버리지 않도록 하고 필요할 때 바로 꺼낼 수 있게 해 두겠습니다.",
                "조산사: 좋습니다. 병원 안내도 함께 확인하면서 소중히 보관해 주세요."
            ],

            vi: [
                "Thai phụ: Tôi muốn kiểm tra lại một lần nữa những thứ cần mang đến lần khám thai tiếp theo.",
                "Nữ hộ sinh: Hãy chuẩn bị những thứ bệnh viện đã hướng dẫn, chẳng hạn như sổ sức khỏe mẹ và bé và thẻ khám bệnh.",
                "Thai phụ: Trong sổ sức khỏe mẹ và bé sẽ ghi những thông tin gì?",
                "Nữ hộ sinh: Những thông tin quan trọng như quá trình mang thai và hồ sơ khám sức khỏe sẽ được ghi lại.",
                "Thai phụ: Vậy tôi sẽ giữ cẩn thận và để ở nơi có thể lấy ra ngay khi cần.",
                "Nữ hộ sinh: Tốt lắm. Hãy bảo quản cẩn thận và đồng thời kiểm tra hướng dẫn của bệnh viện."
            ]
        }
    ),

    // =====================================================
    // 003 入院するときの流れを確認する
    // =====================================================

    makeB1ChildbirthPreparationDialogue(
        "b1_childbirthprep_003",
        "入院するときの流れを確認する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "出産する病院は決まっていますが、入院するときの流れがまだよくわかりません。",
                target: "しゅっさんするびょういんはきまっていますが にゅういんするときのながれがまだよくわかりません",
                ruby: "<ruby>出産<rt>しゅっさん</rt></ruby>する<ruby>病院<rt>びょういん</rt></ruby>は<ruby>決<rt>き</rt></ruby>まっていますが、<ruby>入院<rt>にゅういん</rt></ruby>するときの<ruby>流<rt>なが</rt></ruby>れがまだよくわかりません。",
                romaji: "Shussan suru byōin wa kimatte imasu ga, nyūin suru toki no nagare ga mada yoku wakarimasen."
            },
            {
                label: "話者A",
                key: "hospitalStaff",
                name: "病院職員",
                line: "陣痛や破水などの状況によって案内が異なるので、まず病院へ電話してください。",
                target: "じんつうやはすいなどのじょうきょうによってあんないがことなるので まずびょういんへでんわしてください",
                ruby: "<ruby>陣痛<rt>じんつう</rt></ruby>や<ruby>破水<rt>はすい</rt></ruby>などの<ruby>状況<rt>じょうきょう</rt></ruby>によって<ruby>案内<rt>あんない</rt></ruby>が<ruby>異<rt>こと</rt></ruby>なるので、まず<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>電話<rt>でんわ</rt></ruby>してください。",
                romaji: "Jintsū ya hasui nado no jōkyō ni yotte annai ga kotonaru node, mazu byōin e denwa shite kudasai."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "病院に連絡するときは、何を伝えればいいですか。",
                target: "びょういんにれんらくするときは なにをつたえればいいですか",
                ruby: "<ruby>病院<rt>びょういん</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>するときは、<ruby>何<rt>なに</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えればいいですか。",
                romaji: "Byōin ni renraku suru toki wa, nani o tsutaereba ii desu ka."
            },
            {
                label: "話者A",
                key: "hospitalStaff",
                name: "病院職員",
                line: "お名前、出産予定日、現在の症状などを確認することが多いので、落ち着いて答えてください。",
                target: "おなまえ しゅっさんよていび げんざいのしょうじょうなどをかくにんすることがおおいので おちついてこたえてください",
                ruby: "お<ruby>名前<rt>なまえ</rt></ruby>、<ruby>出産予定日<rt>しゅっさんよていび</rt></ruby>、<ruby>現在<rt>げんざい</rt></ruby>の<ruby>症状<rt>しょうじょう</rt></ruby>などを<ruby>確認<rt>かくにん</rt></ruby>することが<ruby>多<rt>おお</rt></ruby>いので、<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて<ruby>答<rt>こた</rt></ruby>えてください。",
                romaji: "Onamae, shussan yoteibi, genzai no shōjō nado o kakunin suru koto ga ōi node, ochitsuite kotaete kudasai."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "夜中の場合でも、同じ連絡先に電話すればいいでしょうか。",
                target: "よなかのばあいでも おなじれんらくさきにでんわすればいいでしょうか",
                ruby: "<ruby>夜中<rt>よなか</rt></ruby>の<ruby>場合<rt>ばあい</rt></ruby>でも、<ruby>同<rt>おな</rt></ruby>じ<ruby>連絡先<rt>れんらくさき</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>すればいいでしょうか。",
                romaji: "Yonaka no baai demo, onaji renrakusaki ni denwa sureba ii deshō ka."
            },
            {
                label: "話者A",
                key: "hospitalStaff",
                name: "病院職員",
                line: "夜間の連絡先は病院によって異なるため、事前に案内を確認しておいてください。",
                target: "やかんのれんらくさきはびょういんによってことなるため じぜんにあんないをかくにんしておいてください",
                ruby: "<ruby>夜間<rt>やかん</rt></ruby>の<ruby>連絡先<rt>れんらくさき</rt></ruby>は<ruby>病院<rt>びょういん</rt></ruby>によって<ruby>異<rt>こと</rt></ruby>なるため、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>案内<rt>あんない</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しておいてください。",
                romaji: "Yakan no renrakusaki wa byōin ni yotte kotonaru tame, jizen ni annai o kakunin shite oite kudasai."
            }
        ],

        {
            ja: [
                "妊婦：出産する病院は決まっていますが、入院するときの流れがまだよくわかりません。",
                "病院職員：陣痛や破水などの状況によって案内が異なるので、まず病院へ電話してください。",
                "妊婦：病院に連絡するときは、何を伝えればいいですか。",
                "病院職員：お名前、出産予定日、現在の症状などを確認することが多いので、落ち着いて答えてください。",
                "妊婦：夜中の場合でも、同じ連絡先に電話すればいいでしょうか。",
                "病院職員：夜間の連絡先は病院によって異なるため、事前に案内を確認しておいてください。"
            ],

            en: [
                "Pregnant Woman: I have chosen the hospital where I will give birth, but I still do not fully understand the hospital admission process.",
                "Hospital Staff: Instructions differ depending on circumstances such as labor pains or your water breaking, so please call the hospital first.",
                "Pregnant Woman: What should I tell the hospital when I call?",
                "Hospital Staff: We often ask for your name, due date, and current symptoms, so please answer calmly.",
                "Pregnant Woman: Should I call the same number even in the middle of the night?",
                "Hospital Staff: Nighttime contact numbers differ by hospital, so please check your hospital's instructions in advance."
            ],

            "zh-CN": [
                "孕妇：我已经决定了分娩的医院，但是还不太清楚住院时的流程。",
                "医院工作人员：根据阵痛、破水等情况，医院的指示会有所不同，所以请先给医院打电话。",
                "孕妇：联系医院时，我应该告诉他们什么？",
                "医院工作人员：一般会确认您的姓名、预产期和目前的症状等，请冷静回答。",
                "孕妇：即使是半夜，也打同一个联系电话吗？",
                "医院工作人员：夜间联系方式因医院而异，所以请提前确认医院的说明。"
            ],

            "zh-TW": [
                "孕婦：我已經決定了分娩的醫院，但是還不太清楚住院時的流程。",
                "醫院工作人員：根據陣痛、破水等情況，醫院的指示會有所不同，所以請先給醫院打電話。",
                "孕婦：聯絡醫院時，我應該告訴他們什麼？",
                "醫院工作人員：一般會確認您的姓名、預產期和目前的症狀等，請冷靜回答。",
                "孕婦：即使是半夜，也打同一個聯絡電話嗎？",
                "醫院工作人員：夜間聯絡方式因醫院而異，所以請提前確認醫院的說明。"
            ],

            ko: [
                "임산부: 출산할 병원은 정해졌지만 입원할 때의 절차를 아직 잘 모르겠습니다.",
                "병원 직원: 진통이나 양수 파수 등의 상황에 따라 안내가 다르므로 먼저 병원에 전화해 주세요.",
                "임산부: 병원에 연락할 때는 무엇을 말해야 하나요?",
                "병원 직원: 이름, 출산 예정일, 현재 증상 등을 확인하는 경우가 많으니 침착하게 대답해 주세요.",
                "임산부: 한밤중에도 같은 연락처로 전화하면 되나요?",
                "병원 직원: 야간 연락처는 병원마다 다르므로 미리 안내를 확인해 두세요."
            ],

            vi: [
                "Thai phụ: Tôi đã quyết định bệnh viện nơi sẽ sinh, nhưng vẫn chưa hiểu rõ quy trình nhập viện.",
                "Nhân viên bệnh viện: Hướng dẫn có thể khác nhau tùy tình trạng như chuyển dạ hoặc vỡ ối, nên trước tiên hãy gọi cho bệnh viện.",
                "Thai phụ: Khi gọi bệnh viện, tôi nên nói những gì?",
                "Nhân viên bệnh viện: Thông thường chúng tôi sẽ hỏi tên, ngày dự sinh và triệu chứng hiện tại, nên hãy bình tĩnh trả lời.",
                "Thai phụ: Ngay cả giữa đêm tôi cũng gọi cùng số liên lạc đó phải không?",
                "Nhân viên bệnh viện: Số liên lạc ban đêm khác nhau tùy bệnh viện, nên hãy kiểm tra hướng dẫn trước."
            ]
        }
    ),

    // =====================================================
    // 004 入院バッグを準備する
    // =====================================================

    makeB1ChildbirthPreparationDialogue(
        "b1_childbirthprep_004",
        "入院バッグを準備する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "入院バッグを準備したいのですが、何を入れればいいでしょうか。",
                target: "にゅういんばっぐをじゅんびしたいのですが なにをいれればいいでしょうか",
                ruby: "<ruby>入院<rt>にゅういん</rt></ruby>バッグを<ruby>準備<rt>じゅんび</rt></ruby>したいのですが、<ruby>何<rt>なに</rt></ruby>を<ruby>入<rt>い</rt></ruby>れればいいでしょうか。",
                romaji: "Nyūin baggu o junbi shitai no desu ga, nani o irereba ii deshō ka."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "病院によって必要な物が違うので、まず入院案内の一覧を確認してください。",
                target: "びょういんによってひつようなものがちがうので まずにゅういんあんないのいちらんをかくにんしてください",
                ruby: "<ruby>病院<rt>びょういん</rt></ruby>によって<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>物<rt>もの</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>うので、まず<ruby>入院案内<rt>にゅういんあんない</rt></ruby>の<ruby>一覧<rt>いちらん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Byōin ni yotte hitsuyō na mono ga chigau node, mazu nyūin annai no ichiran o kakunin shite kudasai."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "自分の着替えだけでなく、赤ちゃんの物も必要ですか。",
                target: "じぶんのきがえだけでなく あかちゃんのものもひつようですか",
                ruby: "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>着替<rt>きが</rt></ruby>えだけでなく、<ruby>赤<rt>あか</rt></ruby>ちゃんの<ruby>物<rt>もの</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>ですか。",
                romaji: "Jibun no kigae dake de naku, akachan no mono mo hitsuyō desu ka."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "病院で用意される物もあるので、自分で全部そろえる前に確認するといいですよ。",
                target: "びょういんでよういされるものもあるので じぶんでぜんぶそろえるまえにかくにんするといいですよ",
                ruby: "<ruby>病院<rt>びょういん</rt></ruby>で<ruby>用意<rt>ようい</rt></ruby>される<ruby>物<rt>もの</rt></ruby>もあるので、<ruby>自分<rt>じぶん</rt></ruby>で<ruby>全部<rt>ぜんぶ</rt></ruby>そろえる<ruby>前<rt>まえ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>するといいですよ。",
                romaji: "Byōin de yōi sareru mono mo aru node, jibun de zenbu soroeru mae ni kakunin suru to ii desu yo."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "書類や母子健康手帳は、すぐ取り出せる場所に入れておきます。",
                target: "しょるいやぼしけんこうてちょうは すぐとりだせるばしょにいれておきます",
                ruby: "<ruby>書類<rt>しょるい</rt></ruby>や<ruby>母子健康手帳<rt>ぼしけんこうてちょう</rt></ruby>は、すぐ<ruby>取<rt>と</rt></ruby>り<ruby>出<rt>だ</rt></ruby>せる<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れておきます。",
                romaji: "Shorui ya boshi kenkō techō wa, sugu toridaseru basho ni irete okimasu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "それがいいですね。家族にもバッグの場所を伝えておくと、急なときにも対応しやすいです。",
                target: "それがいいですね かぞくにもばっぐのばしょをつたえておくと きゅうなときにもたいおうしやすいです",
                ruby: "それがいいですね。<ruby>家族<rt>かぞく</rt></ruby>にもバッグの<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えておくと、<ruby>急<rt>きゅう</rt></ruby>なときにも<ruby>対応<rt>たいおう</rt></ruby>しやすいです。",
                romaji: "Sore ga ii desu ne. Kazoku ni mo baggu no basho o tsutaete oku to, kyū na toki ni mo taiō shiyasui desu."
            }
        ],

        {
            ja: [
                "妊婦：入院バッグを準備したいのですが、何を入れればいいでしょうか。",
                "助産師：病院によって必要な物が違うので、まず入院案内の一覧を確認してください。",
                "妊婦：自分の着替えだけでなく、赤ちゃんの物も必要ですか。",
                "助産師：病院で用意される物もあるので、自分で全部そろえる前に確認するといいですよ。",
                "妊婦：書類や母子健康手帳は、すぐ取り出せる場所に入れておきます。",
                "助産師：それがいいですね。家族にもバッグの場所を伝えておくと、急なときにも対応しやすいです。"
            ],

            en: [
                "Pregnant Woman: I would like to prepare my hospital bag. What should I put in it?",
                "Midwife: Required items differ by hospital, so first check the hospital's admission list.",
                "Pregnant Woman: Do I need things for the baby as well as a change of clothes for myself?",
                "Midwife: Some items may be provided by the hospital, so it is good to check before buying everything yourself.",
                "Pregnant Woman: I will keep documents and my maternal and child health handbook somewhere easy to reach.",
                "Midwife: That is a good idea. If your family also knows where the bag is, it will be easier to respond if something happens suddenly."
            ],

            "zh-CN": [
                "孕妇：我想准备住院包，应该放些什么呢？",
                "助产士：不同医院需要的东西不同，所以请先确认医院的住院物品清单。",
                "孕妇：除了自己的换洗衣物，也需要准备婴儿的东西吗？",
                "助产士：有些物品医院会提供，所以自己全部购买之前最好先确认。",
                "孕妇：我会把文件和母子健康手册放在容易马上取出的地方。",
                "助产士：很好。如果家人也知道住院包放在哪里，遇到突然的情况时会更容易应对。"
            ],

            "zh-TW": [
                "孕婦：我想準備住院包，應該放些什麼呢？",
                "助產師：不同醫院需要的東西不同，所以請先確認醫院的住院物品清單。",
                "孕婦：除了自己的換洗衣物，也需要準備嬰兒的東西嗎？",
                "助產師：有些物品醫院會提供，所以自己全部購買之前最好先確認。",
                "孕婦：我會把文件和母子健康手冊放在容易馬上取出的地方。",
                "助產師：很好。如果家人也知道住院包放在哪裡，遇到突然的情況時會更容易應對。"
            ],

            ko: [
                "임산부: 입원 가방을 준비하고 싶은데 무엇을 넣으면 좋을까요?",
                "조산사: 병원에 따라 필요한 물건이 다르므로 먼저 입원 안내 목록을 확인해 주세요.",
                "임산부: 제 갈아입을 옷뿐 아니라 아기 물건도 필요한가요?",
                "조산사: 병원에서 준비해 주는 물건도 있으므로 직접 모두 준비하기 전에 확인하는 것이 좋습니다.",
                "임산부: 서류와 모자건강수첩은 바로 꺼낼 수 있는 곳에 넣어 두겠습니다.",
                "조산사: 좋습니다. 가족에게도 가방 위치를 알려 두면 갑작스러운 상황에도 대응하기 쉽습니다."
            ],

            vi: [
                "Thai phụ: Tôi muốn chuẩn bị túi nhập viện. Tôi nên cho những gì vào đó?",
                "Nữ hộ sinh: Những thứ cần thiết khác nhau tùy bệnh viện, nên trước tiên hãy kiểm tra danh sách nhập viện.",
                "Thai phụ: Ngoài quần áo thay của tôi, tôi có cần chuẩn bị đồ cho em bé không?",
                "Nữ hộ sinh: Có những thứ bệnh viện sẽ chuẩn bị, nên bạn nên kiểm tra trước khi tự mua tất cả.",
                "Thai phụ: Tôi sẽ để giấy tờ và sổ sức khỏe mẹ và bé ở nơi có thể lấy ra ngay.",
                "Nữ hộ sinh: Như vậy rất tốt. Nếu gia đình cũng biết vị trí của túi thì sẽ dễ ứng phó hơn khi có việc đột xuất."
            ]
        }
    ),

    // =====================================================
    // 005 病院へ連絡するタイミングを確認する
    // =====================================================

    makeB1ChildbirthPreparationDialogue(
        "b1_childbirthprep_005",
        "病院へ連絡するタイミングを確認する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "お腹が痛くなったとき、どのタイミングで病院に連絡すればいいか不安です。",
                target: "おなかがいたくなったとき どのたいみんぐでびょういんにれんらくすればいいかふあんです",
                ruby: "お<ruby>腹<rt>なか</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くなったとき、どのタイミングで<ruby>病院<rt>びょういん</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>すればいいか<ruby>不安<rt>ふあん</rt></ruby>です。",
                romaji: "Onaka ga itaku natta toki, dono taimingu de byōin ni renraku sureba ii ka fuan desu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "連絡の目安は病院からの案内を優先し、わからないときは自己判断せず電話で確認してください。",
                target: "れんらくのめやすはびょういんからのあんないをゆうせんし わからないときはじこはんだんせずでんわでかくにんしてください",
                ruby: "<ruby>連絡<rt>れんらく</rt></ruby>の<ruby>目安<rt>めやす</rt></ruby>は<ruby>病院<rt>びょういん</rt></ruby>からの<ruby>案内<rt>あんない</rt></ruby>を<ruby>優先<rt>ゆうせん</rt></ruby>し、わからないときは<ruby>自己判断<rt>じこはんだん</rt></ruby>せず<ruby>電話<rt>でんわ</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Renraku no meyasu wa byōin kara no annai o yūsen shi, wakaranai toki wa jikohandan sezu denwa de kakunin shite kudasai."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "破水したかもしれない場合や出血がある場合も、すぐに連絡した方がいいですか。",
                target: "はすいしたかもしれないばあいやしゅっけつがあるばあいも すぐにれんらくしたほうがいいですか",
                ruby: "<ruby>破水<rt>はすい</rt></ruby>したかもしれない<ruby>場合<rt>ばあい</rt></ruby>や<ruby>出血<rt>しゅっけつ</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>も、すぐに<ruby>連絡<rt>れんらく</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Hasui shita kamo shirenai baai ya shukketsu ga aru baai mo, sugu ni renraku shita hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "はい。気になる症状がある場合は、まず病院へ連絡して指示を受けてください。",
                target: "はい きになるしょうじょうがあるばあいは まずびょういんへれんらくしてしじをうけてください",
                ruby: "はい。<ruby>気<rt>き</rt></ruby>になる<ruby>症状<rt>しょうじょう</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は、まず<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>連絡<rt>れんらく</rt></ruby>して<ruby>指示<rt>しじ</rt></ruby>を<ruby>受<rt>う</rt></ruby>けてください。",
                romaji: "Hai. Ki ni naru shōjō ga aru baai wa, mazu byōin e renraku shite shiji o ukete kudasai."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "慌てないように、病院の電話番号を家族とも共有しておきます。",
                target: "あわてないように びょういんのでんわばんごうをかぞくともきょうゆうしておきます",
                ruby: "<ruby>慌<rt>あわ</rt></ruby>てないように、<ruby>病院<rt>びょういん</rt></ruby>の<ruby>電話番号<rt>でんわばんごう</rt></ruby>を<ruby>家族<rt>かぞく</rt></ruby>とも<ruby>共有<rt>きょうゆう</rt></ruby>しておきます。",
                romaji: "Awatenai yō ni, byōin no denwa bangō o kazoku to mo kyōyū shite okimasu."
            },
            {
                label: "話者A",
                key: "midwife",
                name: "助産師",
                line: "それがいいですね。住所や病院までの移動方法も一緒に確認しておくと安心です。",
                target: "それがいいですね じゅうしょやびょういんまでのいどうほうほうもいっしょにかくにんしておくとあんしんです",
                ruby: "それがいいですね。<ruby>住所<rt>じゅうしょ</rt></ruby>や<ruby>病院<rt>びょういん</rt></ruby>までの<ruby>移動方法<rt>いどうほうほう</rt></ruby>も<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しておくと<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Sore ga ii desu ne. Jūsho ya byōin made no idō hōhō mo issho ni kakunin shite oku to anshin desu."
            }
        ],

        {
            ja: [
                "妊婦：お腹が痛くなったとき、どのタイミングで病院に連絡すればいいか不安です。",
                "助産師：連絡の目安は病院からの案内を優先し、わからないときは自己判断せず電話で確認してください。",
                "妊婦：破水したかもしれない場合や出血がある場合も、すぐに連絡した方がいいですか。",
                "助産師：はい。気になる症状がある場合は、まず病院へ連絡して指示を受けてください。",
                "妊婦：慌てないように、病院の電話番号を家族とも共有しておきます。",
                "助産師：それがいいですね。住所や病院までの移動方法も一緒に確認しておくと安心です。"
            ],

            en: [
                "Pregnant Woman: I am worried because I do not know when I should contact the hospital if my stomach starts hurting.",
                "Midwife: Follow your hospital's instructions about when to call, and if you are unsure, do not decide by yourself; call the hospital and ask.",
                "Pregnant Woman: If I think my water may have broken or if I have bleeding, should I contact the hospital immediately?",
                "Midwife: Yes. If you have symptoms that concern you, first contact the hospital and follow their instructions.",
                "Pregnant Woman: So I do not panic, I will share the hospital's phone number with my family.",
                "Midwife: That is a good idea. It is also reassuring to check your address and how you will travel to the hospital."
            ],

            "zh-CN": [
                "孕妇：如果肚子开始疼，我不知道什么时候应该联系医院，所以有些不安。",
                "助产士：请优先按照医院关于联系时间的说明，如果不清楚，不要自己判断，请打电话向医院确认。",
                "孕妇：如果可能破水或者有出血，也应该马上联系医院吗？",
                "助产士：是的。如果有让您担心的症状，请首先联系医院并接受指示。",
                "孕妇：为了不慌张，我会和家人共享医院的电话号码。",
                "助产士：这样很好。也请一起确认住址和去医院的交通方法。"
            ],

            "zh-TW": [
                "孕婦：如果肚子開始疼，我不知道什麼時候應該聯絡醫院，所以有些不安。",
                "助產師：請優先按照醫院關於聯絡時間的說明，如果不清楚，不要自己判斷，請打電話向醫院確認。",
                "孕婦：如果可能破水或者有出血，也應該馬上聯絡醫院嗎？",
                "助產師：是的。如果有讓您擔心的症狀，請首先聯絡醫院並接受指示。",
                "孕婦：為了不慌張，我會和家人共享醫院的電話號碼。",
                "助產師：這樣很好。也請一起確認住址和去醫院的交通方式。"
            ],

            ko: [
                "임산부: 배가 아파졌을 때 언제 병원에 연락해야 하는지 몰라서 불안합니다.",
                "조산사: 연락 기준은 병원의 안내를 우선하고, 잘 모르겠을 때는 스스로 판단하지 말고 전화로 확인해 주세요.",
                "임산부: 양수가 터졌을지도 모르거나 출혈이 있는 경우에도 바로 연락하는 편이 좋나요?",
                "조산사: 네. 걱정되는 증상이 있는 경우에는 먼저 병원에 연락하여 지시를 받아 주세요.",
                "임산부: 당황하지 않도록 병원의 전화번호를 가족과도 공유해 두겠습니다.",
                "조산사: 좋습니다. 주소와 병원까지 이동하는 방법도 함께 확인해 두면 안심됩니다."
            ],

            vi: [
                "Thai phụ: Khi bụng bắt đầu đau, tôi lo vì không biết lúc nào nên liên lạc với bệnh viện.",
                "Nữ hộ sinh: Hãy ưu tiên hướng dẫn của bệnh viện về thời điểm liên lạc. Nếu không chắc chắn, đừng tự quyết định mà hãy gọi điện để xác nhận.",
                "Thai phụ: Nếu tôi nghĩ có thể đã vỡ ối hoặc bị chảy máu, tôi cũng nên liên lạc ngay phải không?",
                "Nữ hộ sinh: Vâng. Nếu có triệu chứng khiến bạn lo lắng, trước tiên hãy liên lạc với bệnh viện và nhận hướng dẫn.",
                "Thai phụ: Để không hoảng loạn, tôi sẽ chia sẻ số điện thoại của bệnh viện với gia đình.",
                "Nữ hộ sinh: Rất tốt. Bạn cũng nên cùng nhau xác nhận địa chỉ và cách di chuyển đến bệnh viện."
            ]
        }
    ),

    // =====================================================
    // 006 パートナーと役割を相談する
    // =====================================================

    makeB1ChildbirthPreparationDialogue(
        "b1_childbirthprep_006",
        "パートナーと役割を相談する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "出産が近づいてきたので、当日の役割について一緒に確認したいです。",
                target: "しゅっさんがちかづいてきたので とうじつのやくわりについていっしょにかくにんしたいです",
                ruby: "<ruby>出産<rt>しゅっさん</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づいてきたので、<ruby>当日<rt>とうじつ</rt></ruby>の<ruby>役割<rt>やくわり</rt></ruby>について<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Shussan ga chikazuite kita node, tōjitsu no yakuwari ni tsuite issho ni kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "partner",
                name: "パートナー",
                line: "もちろん。病院への連絡や移動は、できるだけ私が担当しようと思っています。",
                target: "もちろん びょういんへのれんらくやいどうは できるだけわたしがたんとうしようとおもっています",
                ruby: "もちろん。<ruby>病院<rt>びょういん</rt></ruby>への<ruby>連絡<rt>れんらく</rt></ruby>や<ruby>移動<rt>いどう</rt></ruby>は、できるだけ<ruby>私<rt>わたし</rt></ruby>が<ruby>担当<rt>たんとう</rt></ruby>しようと<ruby>思<rt>おも</rt></ruby>っています。",
                romaji: "Mochiron. Byōin e no renraku ya idō wa, dekiru dake watashi ga tantō shiyō to omotte imasu."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "ありがとう。でも仕事中で連絡が取れない場合も考えておきたいです。",
                target: "ありがとう でもしごとちゅうでれんらくがとれないばあいもかんがえておきたいです",
                ruby: "ありがとう。でも<ruby>仕事中<rt>しごとちゅう</rt></ruby>で<ruby>連絡<rt>れんらく</rt></ruby>が<ruby>取<rt>と</rt></ruby>れない<ruby>場合<rt>ばあい</rt></ruby>も<ruby>考<rt>かんが</rt></ruby>えておきたいです。",
                romaji: "Arigatō. Demo shigoto-chū de renraku ga torenai baai mo kangaete okitai desu."
            },
            {
                label: "話者A",
                key: "partner",
                name: "パートナー",
                line: "そうだね。その場合に頼れる家族や友人にも、事前に相談しておこう。",
                target: "そうだね そのばあいにたよれるかぞくやゆうじんにも じぜんにそうだんしておこう",
                ruby: "そうだね。その<ruby>場合<rt>ばあい</rt></ruby>に<ruby>頼<rt>たよ</rt></ruby>れる<ruby>家族<rt>かぞく</rt></ruby>や<ruby>友人<rt>ゆうじん</rt></ruby>にも、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>しておこう。",
                romaji: "Sō da ne. Sono baai ni tayoreru kazoku ya yūjin ni mo, jizen ni sōdan shite okō."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "入院バッグの場所や必要な書類についても共有しておきます。",
                target: "にゅういんばっぐのばしょやひつようなしょるいについてもきょうゆうしておきます",
                ruby: "<ruby>入院<rt>にゅういん</rt></ruby>バッグの<ruby>場所<rt>ばしょ</rt></ruby>や<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>についても<ruby>共有<rt>きょうゆう</rt></ruby>しておきます。",
                romaji: "Nyūin baggu no basho ya hitsuyō na shorui ni tsuite mo kyōyū shite okimasu."
            },
            {
                label: "話者A",
                key: "partner",
                name: "パートナー",
                line: "それがいいね。予定通りにならない場合もあるから、いくつか方法を考えておこう。",
                target: "それがいいね よていどおりにならないばあいもあるから いくつかほうほうをかんがえておこう",
                ruby: "それがいいね。<ruby>予定通<rt>よていどお</rt></ruby>りにならない<ruby>場合<rt>ばあい</rt></ruby>もあるから、いくつか<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えておこう。",
                romaji: "Sore ga ii ne. Yotei dōri ni naranai baai mo aru kara, ikutsuka hōhō o kangaete okō."
            }
        ],

        {
            ja: [
                "妊婦：出産が近づいてきたので、当日の役割について一緒に確認したいです。",
                "パートナー：もちろん。病院への連絡や移動は、できるだけ私が担当しようと思っています。",
                "妊婦：ありがとう。でも仕事中で連絡が取れない場合も考えておきたいです。",
                "パートナー：そうだね。その場合に頼れる家族や友人にも、事前に相談しておこう。",
                "妊婦：入院バッグの場所や必要な書類についても共有しておきます。",
                "パートナー：それがいいね。予定通りにならない場合もあるから、いくつか方法を考えておこう。"
            ],

            en: [
                "Pregnant Woman: The birth is getting closer, so I would like us to review our roles for that day.",
                "Partner: Of course. I am planning to handle contacting the hospital and transportation as much as possible.",
                "Pregnant Woman: Thank you. But I also want to think about what to do if I cannot reach you while you are at work.",
                "Partner: That's true. Let us talk in advance with family members or friends we can rely on in that situation.",
                "Pregnant Woman: I will also share the location of the hospital bag and information about the necessary documents.",
                "Partner: Good idea. Things may not go according to plan, so let us think of several possible options."
            ],

            "zh-CN": [
                "孕妇：分娩越来越近了，所以我想和你一起确认一下当天各自的任务。",
                "伴侣：当然。联系医院和前往医院，我想尽量由我来负责。",
                "孕妇：谢谢。但是我也想考虑一下如果你在工作、联系不上时怎么办。",
                "伴侣：是啊。那种情况下，也提前和可以依靠的家人或朋友商量一下吧。",
                "孕妇：我也会告诉你住院包的位置和需要的文件。",
                "伴侣：这样很好。也可能不会完全按照计划进行，所以我们提前想几个办法吧。"
            ],

            "zh-TW": [
                "孕婦：分娩越來越近了，所以我想和你一起確認一下當天各自的任務。",
                "伴侶：當然。聯絡醫院和前往醫院，我想盡量由我來負責。",
                "孕婦：謝謝。但是我也想考慮一下如果你在工作、聯絡不上時怎麼辦。",
                "伴侶：是啊。那種情況下，也提前和可以依靠的家人或朋友商量一下吧。",
                "孕婦：我也會告訴你住院包的位置和需要的文件。",
                "伴侶：這樣很好。也可能不會完全按照計畫進行，所以我們提前想幾個辦法吧。"
            ],

            ko: [
                "임산부: 출산이 가까워져서 당일 역할에 대해 함께 확인하고 싶습니다.",
                "파트너: 물론이지. 병원 연락과 이동은 가능한 한 내가 담당하려고 해.",
                "임산부: 고마워. 하지만 당신이 일하는 중이라 연락이 안 되는 경우도 생각해 두고 싶어.",
                "파트너: 그렇네. 그런 경우에 의지할 수 있는 가족이나 친구에게도 미리 이야기해 두자.",
                "임산부: 입원 가방의 위치와 필요한 서류도 공유해 둘게.",
                "파트너: 좋아. 계획대로 되지 않을 수도 있으니 몇 가지 방법을 생각해 두자."
            ],

            vi: [
                "Thai phụ: Ngày sinh đang đến gần nên tôi muốn cùng nhau xác nhận vai trò của mỗi người trong ngày đó.",
                "Bạn đời: Tất nhiên. Tôi dự định sẽ cố gắng phụ trách việc liên lạc với bệnh viện và di chuyển.",
                "Thai phụ: Cảm ơn. Nhưng tôi cũng muốn nghĩ trước trường hợp bạn đang làm việc và tôi không thể liên lạc được.",
                "Bạn đời: Đúng vậy. Trong trường hợp đó, chúng ta cũng nên trao đổi trước với người thân hoặc bạn bè có thể nhờ cậy.",
                "Thai phụ: Tôi cũng sẽ chia sẻ vị trí của túi nhập viện và thông tin về các giấy tờ cần thiết.",
                "Bạn đời: Tốt đấy. Mọi việc có thể không diễn ra đúng kế hoạch, nên chúng ta hãy nghĩ trước một vài phương án."
            ]
        }
    ),

    // =====================================================
    // 007 出産後に利用できる支援を確認する
    // =====================================================

    makeB1ChildbirthPreparationDialogue(
        "b1_childbirthprep_007",
        "出産後に利用できる支援を確認する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "出産後の生活も少し不安なので、今のうちに利用できる支援を知っておきたいです。",
                target: "しゅっさんごのせいかつもすこしふあんなので いまのうちにりようできるしえんをしっておきたいです",
                ruby: "<ruby>出産後<rt>しゅっさんご</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>も<ruby>少<rt>すこ</rt></ruby>し<ruby>不安<rt>ふあん</rt></ruby>なので、<ruby>今<rt>いま</rt></ruby>のうちに<ruby>利用<rt>りよう</rt></ruby>できる<ruby>支援<rt>しえん</rt></ruby>を<ruby>知<rt>し</rt></ruby>っておきたいです。",
                romaji: "Shussango no seikatsu mo sukoshi fuan na node, ima no uchi ni riyō dekiru shien o shitte okitai desu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "自治体によって、相談窓口や訪問支援など、利用できるサービスが異なります。",
                target: "じちたいによって そうだんまどぐちやほうもんしえんなど りようできるさーびすがことなります",
                ruby: "<ruby>自治体<rt>じちたい</rt></ruby>によって、<ruby>相談窓口<rt>そうだんまどぐち</rt></ruby>や<ruby>訪問支援<rt>ほうもんしえん</rt></ruby>など、<ruby>利用<rt>りよう</rt></ruby>できるサービスが<ruby>異<rt>こと</rt></ruby>なります。",
                romaji: "Jichitai ni yotte, sōdan madoguchi ya hōmon shien nado, riyō dekiru sābisu ga kotonarimasu."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "日本語に自信がない場合でも相談できますか。",
                target: "にほんごにじしんがないばあいでもそうだんできますか",
                ruby: "<ruby>日本語<rt>にほんご</rt></ruby>に<ruby>自信<rt>じしん</rt></ruby>がない<ruby>場合<rt>ばあい</rt></ruby>でも<ruby>相談<rt>そうだん</rt></ruby>できますか。",
                romaji: "Nihongo ni jishin ga nai baai demo sōdan dekimasu ka."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "多言語対応の有無は自治体によって違いますが、まず窓口で相談してみてください。",
                target: "たげんごたいおうのうむはじちたいによってちがいますが まずまどぐちでそうだんしてみてください",
                ruby: "<ruby>多言語対応<rt>たげんごたいおう</rt></ruby>の<ruby>有無<rt>うむ</rt></ruby>は<ruby>自治体<rt>じちたい</rt></ruby>によって<ruby>違<rt>ちが</rt></ruby>いますが、まず<ruby>窓口<rt>まどぐち</rt></ruby>で<ruby>相談<rt>そうだん</rt></ruby>してみてください。",
                romaji: "Tagengo taiō no umu wa jichitai ni yotte chigaimasu ga, mazu madoguchi de sōdan shite mite kudasai."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "出産してから探すより、今のうちに連絡先をまとめておいた方がよさそうですね。",
                target: "しゅっさんしてからさがすより いまのうちにれんらくさきをまとめておいたほうがよさそうですね",
                ruby: "<ruby>出産<rt>しゅっさん</rt></ruby>してから<ruby>探<rt>さが</rt></ruby>すより、<ruby>今<rt>いま</rt></ruby>のうちに<ruby>連絡先<rt>れんらくさき</rt></ruby>をまとめておいた<ruby>方<rt>ほう</rt></ruby>がよさそうですね。",
                romaji: "Shussan shite kara sagasu yori, ima no uchi ni renrakusaki o matomete oita hō ga yosasō desu ne."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "はい。家族だけで抱え込まず、必要なときに相談できる場所を知っておくことが大切です。",
                target: "はい かぞくだけでかかえこまず ひつようなときにそうだんできるばしょをしっておくことがたいせつです",
                ruby: "はい。<ruby>家族<rt>かぞく</rt></ruby>だけで<ruby>抱<rt>かか</rt></ruby>え<ruby>込<rt>こ</rt></ruby>まず、<ruby>必要<rt>ひつよう</rt></ruby>なときに<ruby>相談<rt>そうだん</rt></ruby>できる<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>知<rt>し</rt></ruby>っておくことが<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Hai. Kazoku dake de kakaekomazu, hitsuyō na toki ni sōdan dekiru basho o shitte oku koto ga taisetsu desu."
            }
        ],

        {
            ja: [
                "妊婦：出産後の生活も少し不安なので、今のうちに利用できる支援を知っておきたいです。",
                "市職員：自治体によって、相談窓口や訪問支援など、利用できるサービスが異なります。",
                "妊婦：日本語に自信がない場合でも相談できますか。",
                "市職員：多言語対応の有無は自治体によって違いますが、まず窓口で相談してみてください。",
                "妊婦：出産してから探すより、今のうちに連絡先をまとめておいた方がよさそうですね。",
                "市職員：はい。家族だけで抱え込まず、必要なときに相談できる場所を知っておくことが大切です。"
            ],

            en: [
                "Pregnant Woman: I am a little worried about life after giving birth, so I would like to learn now about the support I can use.",
                "City Official: Available services, such as consultation desks and home-visit support, differ depending on the local government.",
                "Pregnant Woman: Can I still ask for help if I am not confident in my Japanese?",
                "City Official: Multilingual support differs by municipality, but please first ask at the consultation desk.",
                "Pregnant Woman: Rather than searching after the baby is born, it seems better to organize the contact information now.",
                "City Official: Yes. It is important not to handle everything only within the family and to know where you can ask for help when necessary."
            ],

            "zh-CN": [
                "孕妇：我对产后的生活也有些不安，所以想现在就了解可以利用的支援。",
                "市政府工作人员：根据自治体不同，可以利用的咨询窗口、上门支援等服务也不同。",
                "孕妇：如果我对日语没有信心，也可以咨询吗？",
                "市政府工作人员：是否提供多语言服务因自治体而异，不过请先到窗口咨询。",
                "孕妇：比起生完孩子以后再寻找，似乎现在就整理好联系方式比较好。",
                "市政府工作人员：是的。不要只由家人承担所有事情，提前知道需要时可以去哪里咨询很重要。"
            ],

            "zh-TW": [
                "孕婦：我對產後的生活也有些不安，所以想現在就了解可以利用的支援。",
                "市政府工作人員：根據自治體不同，可以利用的諮詢窗口、到府支援等服務也不同。",
                "孕婦：如果我對日語沒有信心，也可以諮詢嗎？",
                "市政府工作人員：是否提供多語言服務因自治體而異，不過請先到窗口諮詢。",
                "孕婦：比起生完孩子以後再尋找，似乎現在就整理好聯絡方式比較好。",
                "市政府工作人員：是的。不要只由家人承擔所有事情，提前知道需要時可以去哪裡諮詢很重要。"
            ],

            ko: [
                "임산부: 출산 후 생활도 조금 불안해서 지금 이용할 수 있는 지원을 알아 두고 싶습니다.",
                "시청 직원: 지자체에 따라 상담 창구나 방문 지원 등 이용할 수 있는 서비스가 다릅니다.",
                "임산부: 일본어에 자신이 없어도 상담할 수 있나요?",
                "시청 직원: 다국어 지원 여부는 지자체마다 다르지만 우선 상담 창구에 문의해 보세요.",
                "임산부: 출산한 뒤에 찾는 것보다 지금 연락처를 정리해 두는 편이 좋겠네요.",
                "시청 직원: 네. 가족만으로 모든 것을 떠안지 말고 필요할 때 상담할 수 있는 곳을 알아 두는 것이 중요합니다."
            ],

            vi: [
                "Thai phụ: Tôi cũng hơi lo về cuộc sống sau khi sinh, nên muốn biết trước những hỗ trợ có thể sử dụng.",
                "Nhân viên thành phố: Các dịch vụ như nơi tư vấn hoặc hỗ trợ thăm nhà khác nhau tùy từng địa phương.",
                "Thai phụ: Ngay cả khi tôi không tự tin về tiếng Nhật, tôi vẫn có thể tư vấn không?",
                "Nhân viên thành phố: Việc hỗ trợ đa ngôn ngữ khác nhau tùy địa phương, nhưng trước tiên bạn hãy thử hỏi tại quầy tư vấn.",
                "Thai phụ: Thay vì đợi đến sau khi sinh mới tìm, có vẻ tốt hơn nếu bây giờ tôi tổng hợp sẵn thông tin liên lạc.",
                "Nhân viên thành phố: Vâng. Điều quan trọng là không để gia đình tự gánh hết mọi việc và biết nơi có thể nhờ tư vấn khi cần."
            ]
        }
    ),

    // =====================================================
    // 008 緊急時の連絡先と移動方法を確認する
    // =====================================================

    makeB1ChildbirthPreparationDialogue(
        "b1_childbirthprep_008",
        "緊急時の連絡先と移動方法を確認する",

        [
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "夜中や家族がいないときに何かあったら、どうやって病院へ行くか心配です。",
                target: "よなかやかぞくがいないときになにかあったら どうやってびょういんへいくかしんぱいです",
                ruby: "<ruby>夜中<rt>よなか</rt></ruby>や<ruby>家族<rt>かぞく</rt></ruby>がいないときに<ruby>何<rt>なに</rt></ruby>かあったら、どうやって<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くか<ruby>心配<rt>しんぱい</rt></ruby>です。",
                romaji: "Yonaka ya kazoku ga inai toki ni nanika attara, dō yatte byōin e iku ka shinpai desu."
            },
            {
                label: "話者A",
                key: "hospitalStaff",
                name: "病院職員",
                line: "まず病院から案内された連絡方法を確認し、移動手段も事前に考えておきましょう。",
                target: "まずびょういんからあんないされたれんらくほうほうをかくにんし いどうしゅだんもじぜんにかんがえておきましょう",
                ruby: "まず<ruby>病院<rt>びょういん</rt></ruby>から<ruby>案内<rt>あんない</rt></ruby>された<ruby>連絡方法<rt>れんらくほうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>し、<ruby>移動手段<rt>いどうしゅだん</rt></ruby>も<ruby>事前<rt>じぜん</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えておきましょう。",
                romaji: "Mazu byōin kara annai sareta renraku hōhō o kakunin shi, idō shudan mo jizen ni kangaete okimashō."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "タクシーの連絡先や、頼れる人の電話番号もまとめておいた方がいいですね。",
                target: "たくしーのれんらくさきや たよれるひとのでんわばんごうもまとめておいたほうがいいですね",
                ruby: "タクシーの<ruby>連絡先<rt>れんらくさき</rt></ruby>や、<ruby>頼<rt>たよ</rt></ruby>れる<ruby>人<rt>ひと</rt></ruby>の<ruby>電話番号<rt>でんわばんごう</rt></ruby>もまとめておいた<ruby>方<rt>ほう</rt></ruby>がいいですね。",
                romaji: "Takushī no renrakusaki ya, tayoreru hito no denwa bangō mo matomete oita hō ga ii desu ne."
            },
            {
                label: "話者A",
                key: "hospitalStaff",
                name: "病院職員",
                line: "そうですね。必要な連絡先を一か所にまとめ、家族と共有しておくと安心です。",
                target: "そうですね ひつようなれんらくさきをいっかしょにまとめ かぞくときょうゆうしておくとあんしんです",
                ruby: "そうですね。<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>連絡先<rt>れんらくさき</rt></ruby>を<ruby>一<rt>いっ</rt></ruby>か<ruby>所<rt>しょ</rt></ruby>にまとめ、<ruby>家族<rt>かぞく</rt></ruby>と<ruby>共有<rt>きょうゆう</rt></ruby>しておくと<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Sō desu ne. Hitsuyō na renrakusaki o ikkasho ni matome, kazoku to kyōyū shite oku to anshin desu."
            },
            {
                label: "話者B",
                key: "pregnantWoman",
                name: "妊婦",
                line: "必要な書類や自分の情報も、すぐ確認できるようにしておきます。",
                target: "ひつようなしょるいやじぶんのじょうほうも すぐかくにんできるようにしておきます",
                ruby: "<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>や<ruby>自分<rt>じぶん</rt></ruby>の<ruby>情報<rt>じょうほう</rt></ruby>も、すぐ<ruby>確認<rt>かくにん</rt></ruby>できるようにしておきます。",
                romaji: "Hitsuyō na shorui ya jibun no jōhō mo, sugu kakunin dekiru yō ni shite okimasu."
            },
            {
                label: "話者A",
                key: "hospitalStaff",
                name: "病院職員",
                line: "いいですね。体調に異変を感じたときは無理をせず、医療機関の指示を受けてください。",
                target: "いいですね たいちょうにいへんをかんじたときはむりをせず いりょうきかんのしじをうけてください",
                ruby: "いいですね。<ruby>体調<rt>たいちょう</rt></ruby>に<ruby>異変<rt>いへん</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じたときは<ruby>無理<rt>むり</rt></ruby>をせず、<ruby>医療機関<rt>いりょうきかん</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>を<ruby>受<rt>う</rt></ruby>けてください。",
                romaji: "Ii desu ne. Taichō ni ihen o kanjita toki wa muri o sezu, iryō kikan no shiji o ukete kudasai."
            }
        ],

        {
            ja: [
                "妊婦：夜中や家族がいないときに何かあったら、どうやって病院へ行くか心配です。",
                "病院職員：まず病院から案内された連絡方法を確認し、移動手段も事前に考えておきましょう。",
                "妊婦：タクシーの連絡先や、頼れる人の電話番号もまとめておいた方がいいですね。",
                "病院職員：そうですね。必要な連絡先を一か所にまとめ、家族と共有しておくと安心です。",
                "妊婦：必要な書類や自分の情報も、すぐ確認できるようにしておきます。",
                "病院職員：いいですね。体調に異変を感じたときは無理をせず、医療機関の指示を受けてください。"
            ],

            en: [
                "Pregnant Woman: I am worried about how I would get to the hospital if something happened in the middle of the night or when my family was not there.",
                "Hospital Staff: First, check the contact method provided by your hospital and think in advance about transportation.",
                "Pregnant Woman: It would be good to organize taxi contact information and phone numbers of people I can rely on.",
                "Hospital Staff: Yes. It is reassuring to keep necessary contact information in one place and share it with your family.",
                "Pregnant Woman: I will also make sure that necessary documents and my personal information can be checked quickly.",
                "Hospital Staff: Good. If you notice an unusual change in your condition, do not push yourself and follow instructions from a medical institution."
            ],

            "zh-CN": [
                "孕妇：如果半夜或家人不在的时候发生什么情况，我很担心怎么去医院。",
                "医院工作人员：首先确认医院通知您的联系方式，并提前考虑好交通方式。",
                "孕妇：最好也整理出租车联系方式和可以依靠的人的电话号码。",
                "医院工作人员：是的。把必要的联系方式集中在一个地方并与家人共享，会比较安心。",
                "孕妇：我也会确保必要的文件和自己的信息能够马上确认。",
                "医院工作人员：很好。如果感觉身体有异常，不要勉强自己，请接受医疗机构的指导。"
            ],

            "zh-TW": [
                "孕婦：如果半夜或家人不在的時候發生什麼情況，我很擔心怎麼去醫院。",
                "醫院工作人員：首先確認醫院通知您的聯絡方式，並提前考慮好交通方式。",
                "孕婦：最好也整理計程車聯絡方式和可以依靠的人的電話號碼。",
                "醫院工作人員：是的。把必要的聯絡方式集中在一個地方並與家人共享，會比較安心。",
                "孕婦：我也會確保必要的文件和自己的資訊能夠馬上確認。",
                "醫院工作人員：很好。如果感覺身體有異常，不要勉強自己，請接受醫療機構的指導。"
            ],

            ko: [
                "임산부: 한밤중이나 가족이 없을 때 무슨 일이 생기면 어떻게 병원에 갈지 걱정됩니다.",
                "병원 직원: 우선 병원에서 안내받은 연락 방법을 확인하고 이동 수단도 미리 생각해 둡시다.",
                "임산부: 택시 연락처와 의지할 수 있는 사람의 전화번호도 정리해 두는 편이 좋겠네요.",
                "병원 직원: 그렇습니다. 필요한 연락처를 한곳에 정리하고 가족과 공유해 두면 안심됩니다.",
                "임산부: 필요한 서류와 제 정보도 바로 확인할 수 있도록 해 두겠습니다.",
                "병원 직원: 좋습니다. 몸 상태에 이상을 느꼈을 때는 무리하지 말고 의료기관의 지시를 받아 주세요."
            ],

            vi: [
                "Thai phụ: Tôi lo không biết sẽ đến bệnh viện bằng cách nào nếu có chuyện xảy ra giữa đêm hoặc khi gia đình không có ở đó.",
                "Nhân viên bệnh viện: Trước tiên, hãy kiểm tra cách liên lạc mà bệnh viện đã hướng dẫn và nghĩ trước về phương tiện di chuyển.",
                "Thai phụ: Có lẽ tôi cũng nên tổng hợp thông tin liên lạc của taxi và số điện thoại của những người có thể nhờ cậy.",
                "Nhân viên bệnh viện: Đúng vậy. Giữ các thông tin liên lạc cần thiết ở một nơi và chia sẻ với gia đình sẽ giúp bạn yên tâm hơn.",
                "Thai phụ: Tôi cũng sẽ đảm bảo rằng các giấy tờ cần thiết và thông tin cá nhân của mình có thể được kiểm tra ngay.",
                "Nhân viên bệnh viện: Tốt lắm. Nếu cảm thấy cơ thể có điều gì bất thường, đừng cố chịu đựng mà hãy làm theo hướng dẫn của cơ sở y tế."
            ]
        }
    )

];