// =====================================================
// Japeak B1 Level
// Scene: 進路について相談しよう
// File: data/japeak-b1-career-consultation.js
// Category Key: b1_career_consultation
// =====================================================

const b1CareerConsultationLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1CareerConsultationTranslations(translations) {
    const completed = {};

    b1CareerConsultationLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1CareerConsultationContext = {
    ja: "将来の進路について、希望する仕事や学校、進学と就職の選択肢、成績や入学条件、日本語力、学校説明会、学費や奨学金、保護者との意見の違い、進路計画などについて相談する日本語を練習します。",

    en: "Practice Japanese for discussing future educational and career plans, including desired jobs and schools, choices between further education and employment, grades and admission requirements, Japanese ability, school information sessions, tuition and scholarships, differences of opinion with parents, and career planning.",

    "zh-CN": "练习讨论未来升学和职业规划时使用的日语，包括希望从事的工作和学校、升学与就业的选择、成绩和入学条件、日语能力、学校说明会、学费和奖学金、与家长意见不一致以及制定升学和职业计划。",

    "zh-TW": "練習討論未來升學和職業規劃時使用的日語，包括希望從事的工作和學校、升學與就業的選擇、成績和入學條件、日語能力、學校說明會、學費和獎學金、與家長意見不一致以及制定升學和職業計畫。",

    ko: "앞으로의 진로에 대해 희망하는 직업과 학교, 진학과 취업의 선택, 성적과 입학 조건, 일본어 능력, 학교 설명회, 학비와 장학금, 부모와의 의견 차이, 진로 계획 등을 상담하는 일본어를 연습합니다.",

    vi: "Luyện tiếng Nhật để trao đổi về con đường học tập và nghề nghiệp trong tương lai, bao gồm nghề nghiệp và trường học mong muốn, lựa chọn giữa học tiếp và đi làm, điểm số và điều kiện nhập học, năng lực tiếng Nhật, buổi giới thiệu trường, học phí và học bổng, khác biệt ý kiến với cha mẹ và kế hoạch tương lai.",

    tl: "Practice Japanese for discussing future education and career plans, including desired jobs and schools, further education or employment, grades, admission requirements, Japanese ability, school information sessions, tuition, scholarships, family opinions, and career planning.",

    id: "Latihan bahasa Jepang untuk membicarakan rencana pendidikan dan karier masa depan, termasuk pekerjaan dan sekolah yang diinginkan, pilihan melanjutkan pendidikan atau bekerja, nilai dan persyaratan masuk, kemampuan bahasa Jepang, sesi informasi sekolah, biaya pendidikan, beasiswa, perbedaan pendapat dengan orang tua, dan rencana masa depan.",

    th: "ฝึกภาษาญี่ปุ่นสำหรับปรึกษาเรื่องการศึกษาต่อและอาชีพในอนาคต เช่น งานและโรงเรียนที่ต้องการ ทางเลือกระหว่างเรียนต่อกับทำงาน ผลการเรียนและเงื่อนไขการสมัคร ความสามารถภาษาญี่ปุ่น งานแนะนำโรงเรียน ค่าเล่าเรียน ทุนการศึกษา ความเห็นที่ต่างจากผู้ปกครอง และการวางแผนอนาคต",

    my: "အနာဂတ်ပညာရေးနှင့် အလုပ်အကိုင်လမ်းကြောင်းအကြောင်း တိုင်ပင်ရန် ဂျပန်စကားကို လေ့ကျင့်ပါ။ နှစ်သက်သောအလုပ်နှင့် ကျောင်း၊ ဆက်လက်ပညာသင်ခြင်းနှင့် အလုပ်ဝင်ခြင်းရွေးချယ်မှု၊ အမှတ်များနှင့် ဝင်ခွင့်လိုအပ်ချက်များ၊ ဂျပန်ဘာသာစကားစွမ်းရည်၊ ကျောင်းရှင်းလင်းပွဲများ၊ ကျောင်းလခနှင့် ပညာသင်ဆု၊ မိဘများနှင့် အမြင်ကွာခြားမှု၊ အနာဂတ်အစီအစဉ်တို့ ပါဝင်သည်။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់ពិគ្រោះអំពីការសិក្សា និងអាជីពនាពេលអនាគត រួមមានការងារ និងសាលាដែលចង់បាន ជម្រើសរវាងការបន្តសិក្សា និងការធ្វើការ ពិន្ទុ និងលក្ខខណ្ឌចូលរៀន សមត្ថភាពភាសាជប៉ុន កម្មវិធីណែនាំសាលា ថ្លៃសិក្សា អាហារូបករណ៍ ការខុសគ្នានៃមតិជាមួយឪពុកម្តាយ និងផែនការអនាគត។",

    ne: "भविष्यको अध्ययन र करियरबारे परामर्श गर्न चाहेको पेशा र विद्यालय, उच्च शिक्षा वा रोजगारीको विकल्प, अंक र प्रवेश सर्त, जापानी भाषा क्षमता, विद्यालय जानकारी कार्यक्रम, शुल्क र छात्रवृत्ति, अभिभावकसँगको फरक विचार तथा भविष्यको योजना सम्बन्धी जापानी अभ्यास।",

    mn: "Ирээдүйн боловсрол болон ажил мэргэжлийн талаар хүсэж буй ажил, сургууль, цааш сурах эсвэл ажиллах сонголт, дүн ба элсэлтийн шаардлага, япон хэлний чадвар, сургуулийн танилцуулга, сургалтын төлбөр ба тэтгэлэг, эцэг эхтэй санал зөрөх байдал, ирээдүйн төлөвлөгөөний талаар япон хэлээр зөвлөлдөх дадлага.",

    si: "අනාගත අධ්‍යාපන සහ වෘත්තීය මාර්ග පිළිබඳව කැමති රැකියාව සහ පාසල, වැඩිදුර අධ්‍යාපනය හෝ රැකියාව, ලකුණු සහ ඇතුළත් වීමේ කොන්දේසි, ජපන් භාෂා හැකියාව, පාසල් තොරතුරු සැසි, ගාස්තු සහ ශිෂ්‍යත්ව, දෙමාපියන් සමඟ මතභේද සහ අනාගත සැලැස්ම ගැන ජපන් භාෂාවෙන් පුහුණු වීම.",

    bn: "ভবিষ্যতের পড়াশোনা ও পেশা সম্পর্কে পরামর্শের জন্য পছন্দের কাজ ও স্কুল, উচ্চশিক্ষা বা চাকরি, ফলাফল ও ভর্তি শর্ত, জাপানি ভাষার দক্ষতা, স্কুলের তথ্যসভা, শিক্ষাব্যয় ও বৃত্তি, অভিভাবকের সঙ্গে মতপার্থক্য এবং ভবিষ্যৎ পরিকল্পনা নিয়ে জাপানি অনুশীলন।",

    pt: "Prática de japonês para conversar sobre estudos e carreira no futuro, incluindo profissão e escola desejadas, opções entre continuar os estudos e trabalhar, notas e requisitos de admissão, nível de japonês, sessões informativas, mensalidades e bolsas, diferenças de opinião com os pais e planejamento do futuro.",

    es: "Práctica de japonés para hablar sobre estudios y carrera profesional en el futuro, incluyendo trabajo y escuela deseados, opciones entre continuar estudiando o trabajar, calificaciones y requisitos de admisión, nivel de japonés, sesiones informativas, matrícula y becas, diferencias de opinión con los padres y planificación del futuro.",

    fr: "Entraînement en japonais pour discuter des études et de l'orientation professionnelle, notamment le métier et l'établissement souhaités, le choix entre études et emploi, les résultats et conditions d'admission, le niveau de japonais, les réunions d'information, les frais de scolarité et bourses, les désaccords avec les parents et la planification de l'avenir.",

    ru: "Практика японского языка для обсуждения дальнейшего образования и карьеры: желаемая профессия и учебное заведение, выбор между учёбой и работой, оценки и требования к поступлению, уровень японского языка, дни открытых дверей, стоимость обучения и стипендии, разногласия с родителями и планирование будущего.",

    uk: "Практика японської мови для обговорення подальшої освіти та кар'єри: бажана професія й навчальний заклад, вибір між навчанням і роботою, оцінки та вимоги до вступу, рівень японської мови, інформаційні заходи, вартість навчання та стипендії, розбіжності з батьками й планування майбутнього."
};

const b1CareerConsultationSpeakerNames = {

    student: {
        ja: "生徒",
        en: "Student",
        "zh-CN": "学生",
        "zh-TW": "學生",
        ko: "학생",
        vi: "Học sinh",
        tl: "Mag-aaral",
        id: "Siswa",
        th: "นักเรียน",
        my: "ကျောင်းသား",
        km: "សិស្ស",
        ne: "विद्यार्थी",
        mn: "Сурагч",
        si: "ශිෂ්‍යයා",
        bn: "শিক্ষার্থী",
        pt: "Aluno",
        es: "Estudiante",
        fr: "Élève",
        ru: "Ученик",
        uk: "Учень"
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

    careerCounselor: {
        ja: "進路指導担当",
        en: "Career Counselor",
        "zh-CN": "升学就业指导老师",
        "zh-TW": "升學就業指導老師",
        ko: "진로 상담 교사",
        vi: "Giáo viên hướng nghiệp",
        tl: "Career counselor",
        id: "Konselor karier",
        th: "ครูแนะแนวอาชีพ",
        my: "အလုပ်အကိုင်လမ်းညွှန်ဆရာ",
        km: "គ្រូប្រឹក្សាអាជីព",
        ne: "करियर परामर्शदाता",
        mn: "Мэргэжлийн чиг баримжааны зөвлөх",
        si: "වෘත්තීය උපදේශක",
        bn: "ক্যারিয়ার পরামর্শদাতা",
        pt: "Orientador profissional",
        es: "Orientador profesional",
        fr: "Conseiller d'orientation",
        ru: "Профориентатор",
        uk: "Кар'єрний консультант"
    },

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
        ru: "Сотрудник учебного заведения",
        uk: "Працівник навчального закладу"
    }
};

function makeB1CareerConsultationDialogue(
    id,
    title,
    dialogue,
    dialogueTranslations
) {
    const fullDialogueTranslations =
        completeB1CareerConsultationTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_career_consultation",

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
                b1CareerConsultationSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1CareerConsultationContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1CareerConsultationData = [

    // =====================================================
    // 001 将来やりたいことについて相談する
    // =====================================================

    makeB1CareerConsultationDialogue(
        "b1_careerconsult_001",
        "将来やりたいことについて相談する",

        [
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "将来のことを考えなければならないのですが、まだやりたいことがはっきり決まっていません。",
                target: "しょうらいのことをかんがえなければならないのですが まだやりたいことがはっきりきまっていません",
                ruby: "<ruby>将来<rt>しょうらい</rt></ruby>のことを<ruby>考<rt>かんが</rt></ruby>えなければならないのですが、まだやりたいことがはっきり<ruby>決<rt>き</rt></ruby>まっていません。",
                romaji: "Shōrai no koto o kangaenakereba naranai no desu ga, mada yaritai koto ga hakkiri kimatte imasen."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "今すぐ一つに決めなくても大丈夫です。興味があることや得意なことはありますか。",
                target: "いますぐひとつにきめなくてもだいじょうぶです きょうみがあることやとくいなことはありますか",
                ruby: "<ruby>今<rt>いま</rt></ruby>すぐ<ruby>一<rt>ひと</rt></ruby>つに<ruby>決<rt>き</rt></ruby>めなくても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。<ruby>興味<rt>きょうみ</rt></ruby>があることや<ruby>得意<rt>とくい</rt></ruby>なことはありますか。",
                romaji: "Ima sugu hitotsu ni kimenakute mo daijōbu desu. Kyōmi ga aru koto ya tokui na koto wa arimasu ka."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "人と話すことが好きで、外国語や海外の文化にも興味があります。",
                target: "ひととはなすことがすきで がいこくごやかいがいのぶんかにもきょうみがあります",
                ruby: "<ruby>人<rt>ひと</rt></ruby>と<ruby>話<rt>はな</rt></ruby>すことが<ruby>好<rt>す</rt></ruby>きで、<ruby>外国語<rt>がいこくご</rt></ruby>や<ruby>海外<rt>かいがい</rt></ruby>の<ruby>文化<rt>ぶんか</rt></ruby>にも<ruby>興味<rt>きょうみ</rt></ruby>があります。",
                romaji: "Hito to hanasu koto ga suki de, gaikokugo ya kaigai no bunka ni mo kyōmi ga arimasu."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "それなら、語学や国際関係、観光などを学べる学校や仕事を調べてみるのもよいですね。",
                target: "それなら ごがくやこくさいかんけい かんこうなどをまなべるがっこうやしごとをしらべてみるのもよいですね",
                ruby: "それなら、<ruby>語学<rt>ごがく</rt></ruby>や<ruby>国際関係<rt>こくさいかんけい</rt></ruby>、<ruby>観光<rt>かんこう</rt></ruby>などを<ruby>学<rt>まな</rt></ruby>べる<ruby>学校<rt>がっこう</rt></ruby>や<ruby>仕事<rt>しごと</rt></ruby>を<ruby>調<rt>しら</rt></ruby>べてみるのもよいですね。",
                romaji: "Sore nara, gogaku ya kokusai kankei, kankō nado o manaberu gakkō ya shigoto o shirabete miru no mo yoi desu ne."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "仕事だけでなく、どんな勉強が必要なのかも調べた方がよさそうですね。",
                target: "しごとだけでなく どんなべんきょうがひつようなのかもしらべたほうがよさそうですね",
                ruby: "<ruby>仕事<rt>しごと</rt></ruby>だけでなく、どんな<ruby>勉強<rt>べんきょう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>なのかも<ruby>調<rt>しら</rt></ruby>べた<ruby>方<rt>ほう</rt></ruby>がよさそうですね。",
                romaji: "Shigoto dake de naku, donna benkyō ga hitsuyō na no ka mo shirabeta hō ga yosasō desu ne."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "その通りです。興味のある分野から少しずつ調べて、自分に合う選択肢を増やしていきましょう。",
                target: "そのとおりです きょうみのあるぶんやからすこしずつしらべて じぶんにあうせんたくしをふやしていきましょう",
                ruby: "その<ruby>通<rt>とお</rt></ruby>りです。<ruby>興味<rt>きょうみ</rt></ruby>のある<ruby>分野<rt>ぶんや</rt></ruby>から<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>調<rt>しら</rt></ruby>べて、<ruby>自分<rt>じぶん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>う<ruby>選択肢<rt>せんたくし</rt></ruby>を<ruby>増<rt>ふ</rt></ruby>やしていきましょう。",
                romaji: "Sono tōri desu. Kyōmi no aru bun'ya kara sukoshizutsu shirabete, jibun ni au sentakushi o fuyashite ikimashō."
            }
        ],

        {
            ja: [
                "生徒：将来のことを考えなければならないのですが、まだやりたいことがはっきり決まっていません。",
                "進路指導担当：今すぐ一つに決めなくても大丈夫です。興味があることや得意なことはありますか。",
                "生徒：人と話すことが好きで、外国語や海外の文化にも興味があります。",
                "進路指導担当：それなら、語学や国際関係、観光などを学べる学校や仕事を調べてみるのもよいですね。",
                "生徒：仕事だけでなく、どんな勉強が必要なのかも調べた方がよさそうですね。",
                "進路指導担当：その通りです。興味のある分野から少しずつ調べて、自分に合う選択肢を増やしていきましょう。"
            ],

            en: [
                "Student: I need to think about my future, but I still have not clearly decided what I want to do.",
                "Career Counselor: You do not have to choose just one thing right away. Is there anything that interests you or that you are good at?",
                "Student: I like talking with people, and I am interested in foreign languages and cultures from other countries.",
                "Career Counselor: Then it may be useful to research schools and jobs related to languages, international studies, or tourism.",
                "Student: It seems I should research not only jobs but also what kind of study is required.",
                "Career Counselor: Exactly. Start by exploring fields that interest you and gradually increase the options that may suit you."
            ],

            "zh-CN": [
                "学生：我必须考虑将来的事情，但还没有明确决定自己想做什么。",
                "升学就业指导老师：不用马上决定唯一的方向。你有什么感兴趣或擅长的事情吗？",
                "学生：我喜欢和人交流，也对外语和外国文化感兴趣。",
                "升学就业指导老师：那么，可以调查一下能学习语言、国际关系、旅游等领域的学校和相关工作。",
                "学生：看来不仅要了解工作，也应该调查需要学习什么。",
                "升学就业指导老师：没错。从感兴趣的领域开始一点一点调查，逐渐增加适合自己的选择吧。"
            ],

            "zh-TW": [
                "學生：我必須考慮將來的事情，但還沒有明確決定自己想做什麼。",
                "升學就業指導老師：不用馬上決定唯一的方向。你有什麼感興趣或擅長的事情嗎？",
                "學生：我喜歡和人交流，也對外語和外國文化感興趣。",
                "升學就業指導老師：那麼，可以調查一下能學習語言、國際關係、觀光等領域的學校和相關工作。",
                "學生：看來不僅要了解工作，也應該調查需要學習什麼。",
                "升學就業指導老師：沒錯。從感興趣的領域開始一點一點調查，逐漸增加適合自己的選擇吧。"
            ],

            ko: [
                "학생: 미래를 생각해야 하지만 아직 무엇을 하고 싶은지 확실히 정하지 못했습니다.",
                "진로 상담 교사: 지금 바로 하나로 정하지 않아도 괜찮습니다. 관심 있는 것이나 잘하는 것이 있나요?",
                "학생: 사람들과 이야기하는 것을 좋아하고 외국어와 해외 문화에도 관심이 있습니다.",
                "진로 상담 교사: 그렇다면 어학, 국제관계, 관광 등을 배울 수 있는 학교나 관련 직업을 조사해 보는 것도 좋습니다.",
                "학생: 직업뿐 아니라 어떤 공부가 필요한지도 알아보는 것이 좋겠네요.",
                "진로 상담 교사: 맞습니다. 관심 있는 분야부터 조금씩 조사하면서 자신에게 맞는 선택지를 늘려 갑시다."
            ],

            vi: [
                "Học sinh: Em phải nghĩ về tương lai nhưng vẫn chưa quyết định rõ mình muốn làm gì.",
                "Giáo viên hướng nghiệp: Em không cần phải quyết định ngay một lựa chọn duy nhất. Em có điều gì hứng thú hoặc giỏi không?",
                "Học sinh: Em thích nói chuyện với mọi người và cũng quan tâm đến ngoại ngữ và văn hóa nước ngoài.",
                "Giáo viên hướng nghiệp: Vậy em có thể tìm hiểu về các trường và nghề liên quan đến ngôn ngữ, quan hệ quốc tế hoặc du lịch.",
                "Học sinh: Có lẽ em nên tìm hiểu không chỉ về nghề nghiệp mà cả việc cần học những gì.",
                "Giáo viên hướng nghiệp: Đúng vậy. Hãy bắt đầu từ lĩnh vực em quan tâm và dần tăng thêm những lựa chọn phù hợp với mình."
            ]
        }
    ),

    // =====================================================
    // 002 進学と就職の選択肢を知る
    // =====================================================

    makeB1CareerConsultationDialogue(
        "b1_careerconsult_002",
        "進学と就職の選択肢を知る",

        [
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "卒業後に進学するか就職するかで迷っています。",
                target: "そつぎょうごにしんがくするかしゅうしょくするかでまよっています",
                ruby: "<ruby>卒業後<rt>そつぎょうご</rt></ruby>に<ruby>進学<rt>しんがく</rt></ruby>するか<ruby>就職<rt>しゅうしょく</rt></ruby>するかで<ruby>迷<rt>まよ</rt></ruby>っています。",
                romaji: "Sotsugyōgo ni shingaku suru ka shūshoku suru ka de mayotte imasu."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "それぞれに良い点があります。今の時点では、どちらに少し興味がありますか。",
                target: "それぞれによいてんがあります いまのじてんでは どちらにすこしきょうみがありますか",
                ruby: "それぞれに<ruby>良<rt>よ</rt></ruby>い<ruby>点<rt>てん</rt></ruby>があります。<ruby>今<rt>いま</rt></ruby>の<ruby>時点<rt>じてん</rt></ruby>では、どちらに<ruby>少<rt>すこ</rt></ruby>し<ruby>興味<rt>きょうみ</rt></ruby>がありますか。",
                romaji: "Sorezore ni yoi ten ga arimasu. Ima no jiten de wa, dochira ni sukoshi kyōmi ga arimasu ka."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "早く働いて経験を積みたい気持ちもありますが、もっと専門的なことも学びたいです。",
                target: "はやくはたらいてけいけんをつみたいきもちもありますが もっとせんもんてきなこともまなびたいです",
                ruby: "<ruby>早<rt>はや</rt></ruby>く<ruby>働<rt>はたら</rt></ruby>いて<ruby>経験<rt>けいけん</rt></ruby>を<ruby>積<rt>つ</rt></ruby>みたい<ruby>気持<rt>きも</rt></ruby>ちもありますが、もっと<ruby>専門的<rt>せんもんてき</rt></ruby>なことも<ruby>学<rt>まな</rt></ruby>びたいです。",
                romaji: "Hayaku hataraite keiken o tsumitai kimochi mo arimasu ga, motto senmonteki na koto mo manabitai desu."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "大学や専門学校で学ぶ方法もありますし、就職後に資格を取る道もあります。",
                target: "だいがくやせんもんがっこうでまなぶほうほうもありますし しゅうしょくごにしかくをとるみちもあります",
                ruby: "<ruby>大学<rt>だいがく</rt></ruby>や<ruby>専門学校<rt>せんもんがっこう</rt></ruby>で<ruby>学<rt>まな</rt></ruby>ぶ<ruby>方法<rt>ほうほう</rt></ruby>もありますし、<ruby>就職後<rt>しゅうしょくご</rt></ruby>に<ruby>資格<rt>しかく</rt></ruby>を<ruby>取<rt>と</rt></ruby>る<ruby>道<rt>みち</rt></ruby>もあります。",
                romaji: "Daigaku ya senmon gakkō de manabu hōhō mo arimasu shi, shūshokugo ni shikaku o toru michi mo arimasu."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "一つの道だけではなく、いくつかの方法があるのですね。",
                target: "ひとつのみちだけではなく いくつかのほうほうがあるのですね",
                ruby: "<ruby>一<rt>ひと</rt></ruby>つの<ruby>道<rt>みち</rt></ruby>だけではなく、いくつかの<ruby>方法<rt>ほうほう</rt></ruby>があるのですね。",
                romaji: "Hitotsu no michi dake de wa naku, ikutsuka no hōhō ga aru no desu ne."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "はい。自分が何を大切にしたいかを考えながら、それぞれの特徴を比べてみましょう。",
                target: "はい じぶんがなにをたいせつにしたいかをかんがえながら それぞれのとくちょうをくらべてみましょう",
                ruby: "はい。<ruby>自分<rt>じぶん</rt></ruby>が<ruby>何<rt>なに</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にしたいかを<ruby>考<rt>かんが</rt></ruby>えながら、それぞれの<ruby>特徴<rt>とくちょう</rt></ruby>を<ruby>比<rt>くら</rt></ruby>べてみましょう。",
                romaji: "Hai. Jibun ga nani o taisetsu ni shitai ka o kangaenagara, sorezore no tokuchō o kurabete mimashō."
            }
        ],

        {
            ja: [
                "生徒：卒業後に進学するか就職するかで迷っています。",
                "進路指導担当：それぞれに良い点があります。今の時点では、どちらに少し興味がありますか。",
                "生徒：早く働いて経験を積みたい気持ちもありますが、もっと専門的なことも学びたいです。",
                "進路指導担当：大学や専門学校で学ぶ方法もありますし、就職後に資格を取る道もあります。",
                "生徒：一つの道だけではなく、いくつかの方法があるのですね。",
                "進路指導担当：はい。自分が何を大切にしたいかを考えながら、それぞれの特徴を比べてみましょう。"
            ],

            en: [
                "Student: I am unsure whether to continue my education or start working after graduation.",
                "Career Counselor: Both have advantages. At this point, which option interests you a little more?",
                "Student: Part of me wants to start working early and gain experience, but I also want to study something more specialized.",
                "Career Counselor: You can study at a university or vocational school, and there are also paths where you earn qualifications after starting work.",
                "Student: So there is not just one path. There are several possibilities.",
                "Career Counselor: Exactly. Think about what is important to you and compare the characteristics of each option."
            ],

            "zh-CN": [
                "学生：我在犹豫毕业后是继续升学还是就业。",
                "升学就业指导老师：两者都有优点。目前你对哪一个更有兴趣一些？",
                "学生：我也想早点工作积累经验，但同时也想学习更专业的知识。",
                "升学就业指导老师：可以在大学或专门学校学习，也有就业后再取得资格证书的道路。",
                "学生：原来不是只有一条路，而是有多种方法。",
                "升学就业指导老师：是的。想一想自己最重视什么，再比较各个选择的特点吧。"
            ],

            "zh-TW": [
                "學生：我在猶豫畢業後是繼續升學還是就業。",
                "升學就業指導老師：兩者都有優點。目前你對哪一個更有興趣一些？",
                "學生：我也想早點工作累積經驗，但同時也想學習更專業的知識。",
                "升學就業指導老師：可以在大學或專門學校學習，也有就業後再取得資格證書的道路。",
                "學生：原來不是只有一條路，而是有多種方法。",
                "升學就業指導老師：是的。想一想自己最重視什麼，再比較各個選擇的特點吧。"
            ],

            ko: [
                "학생: 졸업 후 진학할지 취업할지 고민하고 있습니다.",
                "진로 상담 교사: 각각 장점이 있습니다. 지금은 어느 쪽에 조금 더 관심이 있나요?",
                "학생: 빨리 일하면서 경험을 쌓고 싶은 마음도 있지만 더 전문적인 것도 배우고 싶습니다.",
                "진로 상담 교사: 대학이나 전문학교에서 배우는 방법도 있고 취업 후 자격증을 따는 길도 있습니다.",
                "학생: 하나의 길만 있는 것이 아니라 여러 방법이 있군요.",
                "진로 상담 교사: 네. 자신이 무엇을 중요하게 생각하는지 고민하면서 각 선택의 특징을 비교해 봅시다."
            ],

            vi: [
                "Học sinh: Em đang phân vân sau khi tốt nghiệp nên học tiếp hay đi làm.",
                "Giáo viên hướng nghiệp: Mỗi lựa chọn đều có ưu điểm. Hiện tại em quan tâm hơn một chút đến lựa chọn nào?",
                "Học sinh: Em cũng muốn đi làm sớm để tích lũy kinh nghiệm, nhưng em cũng muốn học kiến thức chuyên môn hơn.",
                "Giáo viên hướng nghiệp: Có thể học ở đại học hoặc trường chuyên môn, và cũng có con đường lấy chứng chỉ sau khi đi làm.",
                "Học sinh: Vậy không chỉ có một con đường mà có nhiều cách khác nhau.",
                "Giáo viên hướng nghiệp: Đúng vậy. Hãy nghĩ về điều quan trọng với mình và so sánh đặc điểm của từng lựa chọn."
            ]
        }
    ),

    // =====================================================
    // 003 成績と必要な条件を確認する
    // =====================================================

    makeB1CareerConsultationDialogue(
        "b1_careerconsult_003",
        "成績と必要な条件を確認する",

        [
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "興味のある学校が見つかったのですが、自分の成績で受験できるか心配です。",
                target: "きょうみのあるがっこうがみつかったのですが じぶんのせいせきでじゅけんできるかしんぱいです",
                ruby: "<ruby>興味<rt>きょうみ</rt></ruby>のある<ruby>学校<rt>がっこう</rt></ruby>が<ruby>見<rt>み</rt></ruby>つかったのですが、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>成績<rt>せいせき</rt></ruby>で<ruby>受験<rt>じゅけん</rt></ruby>できるか<ruby>心配<rt>しんぱい</rt></ruby>です。",
                romaji: "Kyōmi no aru gakkō ga mitsukatta no desu ga, jibun no seiseki de juken dekiru ka shinpai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "まず、その学校の入試方法や必要な条件を一緒に確認してみましょう。",
                target: "まず そのがっこうのにゅうしほうほうやひつようなじょうけんをいっしょにかくにんしてみましょう",
                ruby: "まず、その<ruby>学校<rt>がっこう</rt></ruby>の<ruby>入試方法<rt>にゅうしほうほう</rt></ruby>や<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>してみましょう。",
                romaji: "Mazu, sono gakkō no nyūshi hōhō ya hitsuyō na jōken o issho ni kakunin shite mimashō."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "試験だけでなく、学校の成績や面接も見られるのでしょうか。",
                target: "しけんだけでなく がっこうのせいせきやめんせつもみられるのでしょうか",
                ruby: "<ruby>試験<rt>しけん</rt></ruby>だけでなく、<ruby>学校<rt>がっこう</rt></ruby>の<ruby>成績<rt>せいせき</rt></ruby>や<ruby>面接<rt>めんせつ</rt></ruby>も<ruby>見<rt>み</rt></ruby>られるのでしょうか。",
                romaji: "Shiken dake de naku, gakkō no seiseki ya mensetsu mo mirareru no deshō ka."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "選抜方法によって違います。成績、面接、作文、試験などを組み合わせる場合もあります。",
                target: "せんばつほうほうによってちがいます せいせき めんせつ さくぶん しけんなどをくみあわせるばあいもあります",
                ruby: "<ruby>選抜方法<rt>せんばつほうほう</rt></ruby>によって<ruby>違<rt>ちが</rt></ruby>います。<ruby>成績<rt>せいせき</rt></ruby>、<ruby>面接<rt>めんせつ</rt></ruby>、<ruby>作文<rt>さくぶん</rt></ruby>、<ruby>試験<rt>しけん</rt></ruby>などを<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせる<ruby>場合<rt>ばあい</rt></ruby>もあります。",
                romaji: "Senbatsu hōhō ni yotte chigaimasu. Seiseki, mensetsu, sakubun, shiken nado o kumiawaseru baai mo arimasu."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "今から特に力を入れた方がいいことを教えてください。",
                target: "いまからとくにちからをいれたほうがいいことをおしえてください",
                ruby: "<ruby>今<rt>いま</rt></ruby>から<ruby>特<rt>とく</rt></ruby>に<ruby>力<rt>ちから</rt></ruby>を<ruby>入<rt>い</rt></ruby>れた<ruby>方<rt>ほう</rt></ruby>がいいことを<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Ima kara toku ni chikara o ireta hō ga ii koto o oshiete kudasai."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "現在の状況と受験までの時間を考えて、優先することを一緒に決めましょう。",
                target: "げんざいのじょうきょうとじゅけんまでのじかんをかんがえて ゆうせんすることをいっしょにきめましょう",
                ruby: "<ruby>現在<rt>げんざい</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>と<ruby>受験<rt>じゅけん</rt></ruby>までの<ruby>時間<rt>じかん</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えて、<ruby>優先<rt>ゆうせん</rt></ruby>することを<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>決<rt>き</rt></ruby>めましょう。",
                romaji: "Genzai no jōkyō to juken made no jikan o kangaete, yūsen suru koto o issho ni kimemashō."
            }
        ],

        {
            ja: [
                "生徒：興味のある学校が見つかったのですが、自分の成績で受験できるか心配です。",
                "先生：まず、その学校の入試方法や必要な条件を一緒に確認してみましょう。",
                "生徒：試験だけでなく、学校の成績や面接も見られるのでしょうか。",
                "先生：選抜方法によって違います。成績、面接、作文、試験などを組み合わせる場合もあります。",
                "生徒：今から特に力を入れた方がいいことを教えてください。",
                "先生：現在の状況と受験までの時間を考えて、優先することを一緒に決めましょう。"
            ],

            en: [
                "Student: I found a school that interests me, but I am worried about whether my grades are good enough to apply.",
                "Teacher: First, let us check the school's admission methods and requirements together.",
                "Student: Do they consider not only entrance examinations but also school grades and interviews?",
                "Teacher: It depends on the selection method. Some combine grades, interviews, essays, and examinations.",
                "Student: Please tell me what I should especially focus on from now.",
                "Teacher: Let us consider your current situation and the time remaining before the examination and decide your priorities together."
            ],

            "zh-CN": [
                "学生：我找到了感兴趣的学校，但担心自己的成绩能不能报考。",
                "老师：首先，我们一起确认那所学校的入学考试方式和必要条件吧。",
                "学生：除了考试，学校成绩和面试也会被考虑吗？",
                "老师：根据选拔方式不同，有时会综合成绩、面试、作文和考试等。",
                "学生：请告诉我从现在开始应该特别努力什么。",
                "老师：考虑你目前的情况和距离考试的时间，我们一起决定优先事项吧。"
            ],

            "zh-TW": [
                "學生：我找到了一所有興趣的學校，但擔心自己的成績能不能報考。",
                "老師：首先，我們一起確認那所學校的入學考試方式和必要條件吧。",
                "學生：除了考試，學校成績和面試也會被考慮嗎？",
                "老師：根據選拔方式不同，有時會綜合成績、面試、作文和考試等。",
                "學生：請告訴我從現在開始應該特別努力什麼。",
                "老師：考慮你目前的情況和距離考試的時間，我們一起決定優先事項吧。"
            ],

            ko: [
                "학생: 관심 있는 학교를 찾았지만 제 성적으로 지원할 수 있을지 걱정됩니다.",
                "교사: 우선 그 학교의 입시 방법과 필요한 조건을 함께 확인해 봅시다.",
                "학생: 시험뿐 아니라 학교 성적이나 면접도 보나요?",
                "교사: 전형 방법에 따라 다릅니다. 성적, 면접, 작문, 시험 등을 함께 평가하는 경우도 있습니다.",
                "학생: 지금부터 특히 어떤 부분에 힘을 써야 하는지 알려 주세요.",
                "교사: 현재 상황과 시험까지 남은 시간을 생각해서 우선할 일을 함께 정합시다."
            ],

            vi: [
                "Học sinh: Em đã tìm thấy một trường mình quan tâm nhưng lo không biết điểm của mình có đủ để dự tuyển không.",
                "Giáo viên: Trước hết, chúng ta hãy cùng kiểm tra phương thức tuyển sinh và các điều kiện cần thiết của trường đó.",
                "Học sinh: Ngoài kỳ thi, điểm ở trường và phỏng vấn cũng được xem xét phải không?",
                "Giáo viên: Điều đó tùy phương thức tuyển chọn. Có trường kết hợp điểm số, phỏng vấn, bài viết và kỳ thi.",
                "Học sinh: Xin hãy cho em biết từ bây giờ nên đặc biệt tập trung vào điều gì.",
                "Giáo viên: Chúng ta hãy xem xét tình hình hiện tại và thời gian còn lại trước kỳ thi để cùng quyết định ưu tiên."
            ]
        }
    ),

    // =====================================================
    // 004 日本語力について相談する
    // =====================================================

    makeB1CareerConsultationDialogue(
        "b1_careerconsult_004",
        "日本語力について相談する",

        [
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "進学したい気持ちはありますが、日本語で授業についていけるか心配です。",
                target: "しんがくしたいきもちはありますが にほんごでじゅぎょうについていけるかしんぱいです",
                ruby: "<ruby>進学<rt>しんがく</rt></ruby>したい<ruby>気持<rt>きも</rt></ruby>ちはありますが、<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>授業<rt>じゅぎょう</rt></ruby>についていけるか<ruby>心配<rt>しんぱい</rt></ruby>です。",
                romaji: "Shingaku shitai kimochi wa arimasu ga, Nihongo de jugyō ni tsuite ikeru ka shinpai desu."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "会話だけでなく、教科書を読んだり文章を書いたりする力も必要になることがあります。",
                target: "かいわだけでなく きょうかしょをよんだりぶんしょうをかいたりするちからもひつようになることがあります",
                ruby: "<ruby>会話<rt>かいわ</rt></ruby>だけでなく、<ruby>教科書<rt>きょうかしょ</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んだり<ruby>文章<rt>ぶんしょう</rt></ruby>を<ruby>書<rt>か</rt></ruby>いたりする<ruby>力<rt>ちから</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>になることがあります。",
                romaji: "Kaiwa dake de naku, kyōkasho o yondari bunshō o kaitari suru chikara mo hitsuyō ni naru koto ga arimasu."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "日常会話はできますが、長い文章や難しい漢字はまだ苦手です。",
                target: "にちじょうかいわはできますが ながいぶんしょうやむずかしいかんじはまだにがてです",
                ruby: "<ruby>日常会話<rt>にちじょうかいわ</rt></ruby>はできますが、<ruby>長<rt>なが</rt></ruby>い<ruby>文章<rt>ぶんしょう</rt></ruby>や<ruby>難<rt>むずか</rt></ruby>しい<ruby>漢字<rt>かんじ</rt></ruby>はまだ<ruby>苦手<rt>にがて</rt></ruby>です。",
                romaji: "Nichijō kaiwa wa dekimasu ga, nagai bunshō ya muzukashii kanji wa mada nigate desu."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "では、希望する学校で必要になる日本語と、利用できる支援があるかを確認しましょう。",
                target: "では きぼうするがっこうでひつようになるにほんごと りようできるしえんがあるかをかくにんしましょう",
                ruby: "では、<ruby>希望<rt>きぼう</rt></ruby>する<ruby>学校<rt>がっこう</rt></ruby>で<ruby>必要<rt>ひつよう</rt></ruby>になる<ruby>日本語<rt>にほんご</rt></ruby>と、<ruby>利用<rt>りよう</rt></ruby>できる<ruby>支援<rt>しえん</rt></ruby>があるかを<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Dewa, kibō suru gakkō de hitsuyō ni naru Nihongo to, riyō dekiru shien ga aru ka o kakunin shimashō."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "苦手だからあきらめるのではなく、今からできる準備を知りたいです。",
                target: "にがてだからあきらめるのではなく いまからできるじゅんびをしりたいです",
                ruby: "<ruby>苦手<rt>にがて</rt></ruby>だからあきらめるのではなく、<ruby>今<rt>いま</rt></ruby>からできる<ruby>準備<rt>じゅんび</rt></ruby>を<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Nigate dakara akirameru no de wa naku, ima kara dekiru junbi o shiritai desu."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "いい考えですね。読む、書く、聞く、話す力を確認して、必要な部分から計画的に伸ばしましょう。",
                target: "いいかんがえですね よむ かく きく はなすちからをかくにんして ひつようなぶぶんからけいかくてきにのばしましょう",
                ruby: "いい<ruby>考<rt>かんが</rt></ruby>えですね。<ruby>読<rt>よ</rt></ruby>む、<ruby>書<rt>か</rt></ruby>く、<ruby>聞<rt>き</rt></ruby>く、<ruby>話<rt>はな</rt></ruby>す<ruby>力<rt>ちから</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>して、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>部分<rt>ぶぶん</rt></ruby>から<ruby>計画的<rt>けいかくてき</rt></ruby>に<ruby>伸<rt>の</rt></ruby>ばしましょう。",
                romaji: "Ii kangae desu ne. Yomu, kaku, kiku, hanasu chikara o kakunin shite, hitsuyō na bubun kara keikakuteki ni nobashimashō."
            }
        ],

        {
            ja: [
                "生徒：進学したい気持ちはありますが、日本語で授業についていけるか心配です。",
                "進路指導担当：会話だけでなく、教科書を読んだり文章を書いたりする力も必要になることがあります。",
                "生徒：日常会話はできますが、長い文章や難しい漢字はまだ苦手です。",
                "進路指導担当：では、希望する学校で必要になる日本語と、利用できる支援があるかを確認しましょう。",
                "生徒：苦手だからあきらめるのではなく、今からできる準備を知りたいです。",
                "進路指導担当：いい考えですね。読む、書く、聞く、話す力を確認して、必要な部分から計画的に伸ばしましょう。"
            ],

            en: [
                "Student: I want to continue my education, but I am worried about whether I can keep up with classes in Japanese.",
                "Career Counselor: In addition to conversation, you may need the ability to read textbooks and write longer texts.",
                "Student: I can manage everyday conversation, but long texts and difficult kanji are still difficult for me.",
                "Career Counselor: Then let us check the Japanese required at the school you hope to attend and whether support is available.",
                "Student: I do not want to give up just because Japanese is difficult. I want to know what I can prepare now.",
                "Career Counselor: That is a good attitude. Let us check your reading, writing, listening, and speaking skills and improve the areas you need step by step."
            ],

            "zh-CN": [
                "学生：我想继续升学，但担心自己能不能跟上用日语进行的课程。",
                "升学就业指导老师：除了会话，有时还需要阅读教科书和写文章的能力。",
                "学生：我能进行日常会话，但长文章和难汉字仍然不擅长。",
                "升学就业指导老师：那么，我们确认一下你希望进入的学校需要什么样的日语能力，以及是否有可以利用的支援。",
                "学生：我不想因为不擅长就放弃，我想知道现在可以做什么准备。",
                "升学就业指导老师：这是很好的想法。我们确认阅读、书写、听力和口语能力，从需要的部分开始有计划地提高吧。"
            ],

            "zh-TW": [
                "學生：我想繼續升學，但擔心自己能不能跟上用日語進行的課程。",
                "升學就業指導老師：除了會話，有時還需要閱讀教科書和寫文章的能力。",
                "學生：我能進行日常會話，但長文章和難漢字仍然不擅長。",
                "升學就業指導老師：那麼，我們確認一下你希望進入的學校需要什麼樣的日語能力，以及是否有可以利用的支援。",
                "學生：我不想因為不擅長就放棄，我想知道現在可以做什麼準備。",
                "升學就業指導老師：這是很好的想法。我們確認閱讀、書寫、聽力和口語能力，從需要的部分開始有計畫地提高吧。"
            ],

            ko: [
                "학생: 진학하고 싶지만 일본어로 수업을 따라갈 수 있을지 걱정됩니다.",
                "진로 상담 교사: 대화뿐 아니라 교과서를 읽고 글을 쓰는 능력도 필요할 수 있습니다.",
                "학생: 일상 대화는 할 수 있지만 긴 글이나 어려운 한자는 아직 어렵습니다.",
                "진로 상담 교사: 그러면 희망하는 학교에서 필요한 일본어와 이용할 수 있는 지원이 있는지 확인해 봅시다.",
                "학생: 어렵다고 포기하는 것이 아니라 지금부터 할 수 있는 준비를 알고 싶습니다.",
                "진로 상담 교사: 좋은 생각입니다. 읽기, 쓰기, 듣기, 말하기 능력을 확인하고 필요한 부분부터 계획적으로 늘려 갑시다."
            ],

            vi: [
                "Học sinh: Em muốn học tiếp nhưng lo không biết có thể theo kịp các lớp học bằng tiếng Nhật không.",
                "Giáo viên hướng nghiệp: Ngoài giao tiếp, có thể cần cả khả năng đọc sách giáo khoa và viết bài.",
                "Học sinh: Em có thể giao tiếp hằng ngày nhưng vẫn yếu về bài dài và chữ Hán khó.",
                "Giáo viên hướng nghiệp: Vậy chúng ta hãy kiểm tra trình độ tiếng Nhật cần thiết ở trường em mong muốn và xem có hỗ trợ nào không.",
                "Học sinh: Em không muốn bỏ cuộc chỉ vì mình còn yếu. Em muốn biết từ bây giờ có thể chuẩn bị gì.",
                "Giáo viên hướng nghiệp: Đó là suy nghĩ rất tốt. Hãy kiểm tra khả năng đọc, viết, nghe và nói rồi cải thiện có kế hoạch từ những phần cần thiết."
            ]
        }
    ),

    // =====================================================
    // 005 学校説明会やオープンキャンパスについて聞く
    // =====================================================

    makeB1CareerConsultationDialogue(
        "b1_careerconsult_005",
        "学校説明会やオープンキャンパスについて聞く",

        [
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "学校のホームページだけでは雰囲気がわからないので、実際に見に行きたいです。",
                target: "がっこうのほーむぺーじだけではふんいきがわからないので じっさいにみにいきたいです",
                ruby: "<ruby>学校<rt>がっこう</rt></ruby>のホームページだけでは<ruby>雰囲気<rt>ふんいき</rt></ruby>がわからないので、<ruby>実際<rt>じっさい</rt></ruby>に<ruby>見<rt>み</rt></ruby>に<ruby>行<rt>い</rt></ruby>きたいです。",
                romaji: "Gakkō no hōmupēji dake de wa fun'iki ga wakaranai node, jissai ni mi ni ikitai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "学校説明会やオープンキャンパスに参加すると、授業や施設について直接知ることができます。",
                target: "がっこうせつめいかいやおーぷんきゃんぱすにさんかすると じゅぎょうやしせつについてちょくせつしることができます",
                ruby: "<ruby>学校説明会<rt>がっこうせつめいかい</rt></ruby>やオープンキャンパスに<ruby>参加<rt>さんか</rt></ruby>すると、<ruby>授業<rt>じゅぎょう</rt></ruby>や<ruby>施設<rt>しせつ</rt></ruby>について<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>知<rt>し</rt></ruby>ることができます。",
                romaji: "Gakkō setsumeikai ya ōpun kyanpasu ni sanka suru to, jugyō ya shisetsu ni tsuite chokusetsu shiru koto ga dekimasu."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "参加するときに、どんなことを質問するとよいでしょうか。",
                target: "さんかするときに どんなことをしつもんするとよいでしょうか",
                ruby: "<ruby>参加<rt>さんか</rt></ruby>するときに、どんなことを<ruby>質問<rt>しつもん</rt></ruby>するとよいでしょうか。",
                romaji: "Sanka suru toki ni, donna koto o shitsumon suru to yoi deshō ka."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "授業内容、入試、学費、資格、卒業後の進路など、自分が知りたいことを事前にまとめておくとよいです。",
                target: "じゅぎょうないよう にゅうし がくひ しかく そつぎょうごのしんろなど じぶんがしりたいことをじぜんにまとめておくとよいです",
                ruby: "<ruby>授業内容<rt>じゅぎょうないよう</rt></ruby>、<ruby>入試<rt>にゅうし</rt></ruby>、<ruby>学費<rt>がくひ</rt></ruby>、<ruby>資格<rt>しかく</rt></ruby>、<ruby>卒業後<rt>そつぎょうご</rt></ruby>の<ruby>進路<rt>しんろ</rt></ruby>など、<ruby>自分<rt>じぶん</rt></ruby>が<ruby>知<rt>し</rt></ruby>りたいことを<ruby>事前<rt>じぜん</rt></ruby>にまとめておくとよいです。",
                romaji: "Jugyō naiyō, nyūshi, gakuhi, shikaku, sotsugyōgo no shinro nado, jibun ga shiritai koto o jizen ni matomete oku to yoi desu."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "一つの学校だけではなく、いくつか見て比べた方がよさそうですね。",
                target: "ひとつのがっこうだけではなく いくつかみてくらべたほうがよさそうですね",
                ruby: "<ruby>一<rt>ひと</rt></ruby>つの<ruby>学校<rt>がっこう</rt></ruby>だけではなく、いくつか<ruby>見<rt>み</rt></ruby>て<ruby>比<rt>くら</rt></ruby>べた<ruby>方<rt>ほう</rt></ruby>がよさそうですね。",
                romaji: "Hitotsu no gakkō dake de wa naku, ikutsuka mite kurabeta hō ga yosasō desu ne."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "そうですね。実際に見て感じたことも記録しておくと、あとで比較しやすくなります。",
                target: "そうですね じっさいにみてかんじたこともきろくしておくと あとでひかくしやすくなります",
                ruby: "そうですね。<ruby>実際<rt>じっさい</rt></ruby>に<ruby>見<rt>み</rt></ruby>て<ruby>感<rt>かん</rt></ruby>じたことも<ruby>記録<rt>きろく</rt></ruby>しておくと、あとで<ruby>比較<rt>ひかく</rt></ruby>しやすくなります。",
                romaji: "Sō desu ne. Jissai ni mite kanjita koto mo kiroku shite oku to, ato de hikaku shiyasuku narimasu."
            }
        ],

        {
            ja: [
                "生徒：学校のホームページだけでは雰囲気がわからないので、実際に見に行きたいです。",
                "先生：学校説明会やオープンキャンパスに参加すると、授業や施設について直接知ることができます。",
                "生徒：参加するときに、どんなことを質問するとよいでしょうか。",
                "先生：授業内容、入試、学費、資格、卒業後の進路など、自分が知りたいことを事前にまとめておくとよいです。",
                "生徒：一つの学校だけではなく、いくつか見て比べた方がよさそうですね。",
                "先生：そうですね。実際に見て感じたことも記録しておくと、あとで比較しやすくなります。"
            ],

            en: [
                "Student: It is difficult to understand a school's atmosphere from its website alone, so I would like to visit in person.",
                "Teacher: By attending an information session or open campus, you can learn directly about classes and facilities.",
                "Student: What kinds of questions should I ask when I attend?",
                "Teacher: Prepare questions in advance about things such as courses, admissions, tuition, qualifications, and career paths after graduation.",
                "Student: It seems better to visit several schools and compare them rather than looking at only one.",
                "Teacher: Yes. Keeping notes about what you saw and felt will make it easier to compare them later."
            ],

            "zh-CN": [
                "学生：只看学校网站很难了解实际氛围，所以我想亲自去看看。",
                "老师：参加学校说明会或开放校园活动，可以直接了解课程和设施。",
                "学生：参加时应该问哪些问题比较好？",
                "老师：可以事先整理自己想了解的内容，例如课程、入学考试、学费、资格证书和毕业后的去向等。",
                "学生：看来不应该只看一所学校，而是比较几所学校比较好。",
                "老师：是的。把实际看到和感受到的事情记录下来，以后会更容易比较。"
            ],

            "zh-TW": [
                "學生：只看學校網站很難了解實際氛圍，所以我想親自去看看。",
                "老師：參加學校說明會或開放校園活動，可以直接了解課程和設施。",
                "學生：參加時應該問哪些問題比較好？",
                "老師：可以事先整理自己想了解的內容，例如課程、入學考試、學費、資格證書和畢業後的去向等。",
                "學生：看來不應該只看一所學校，而是比較幾所學校比較好。",
                "老師：是的。把實際看到和感受到的事情記錄下來，以後會更容易比較。"
            ],

            ko: [
                "학생: 학교 홈페이지만으로는 분위기를 알기 어려워서 직접 가 보고 싶습니다.",
                "교사: 학교 설명회나 오픈 캠퍼스에 참여하면 수업과 시설을 직접 확인할 수 있습니다.",
                "학생: 참가할 때 어떤 것을 질문하면 좋을까요?",
                "교사: 수업 내용, 입시, 학비, 자격증, 졸업 후 진로 등 알고 싶은 것을 미리 정리해 두면 좋습니다.",
                "학생: 한 학교만 보는 것이 아니라 여러 학교를 보고 비교하는 편이 좋겠네요.",
                "교사: 그렇습니다. 실제로 보고 느낀 것도 기록해 두면 나중에 비교하기 쉬워집니다."
            ],

            vi: [
                "Học sinh: Chỉ xem trang web thì khó biết không khí của trường nên em muốn đến tận nơi.",
                "Giáo viên: Khi tham gia buổi giới thiệu trường hoặc ngày hội mở, em có thể trực tiếp tìm hiểu về lớp học và cơ sở vật chất.",
                "Học sinh: Khi tham gia, em nên hỏi những điều gì?",
                "Giáo viên: Nên chuẩn bị trước những điều muốn biết như nội dung học, tuyển sinh, học phí, chứng chỉ và con đường sau khi tốt nghiệp.",
                "Học sinh: Có lẽ nên xem và so sánh nhiều trường thay vì chỉ một trường.",
                "Giáo viên: Đúng vậy. Nếu ghi lại những gì em nhìn thấy và cảm nhận, sau này sẽ dễ so sánh hơn."
            ]
        }
    ),

    // =====================================================
    // 006 学費や奨学金について相談する
    // =====================================================

    makeB1CareerConsultationDialogue(
        "b1_careerconsult_006",
        "学費や奨学金について相談する",

        [
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "進学したい学校がありますが、学費が高くて家族に負担をかけないか心配です。",
                target: "しんがくしたいがっこうがありますが がくひがたかくてかぞくにふたんをかけないかしんぱいです",
                ruby: "<ruby>進学<rt>しんがく</rt></ruby>したい<ruby>学校<rt>がっこう</rt></ruby>がありますが、<ruby>学費<rt>がくひ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>くて<ruby>家族<rt>かぞく</rt></ruby>に<ruby>負担<rt>ふたん</rt></ruby>をかけないか<ruby>心配<rt>しんぱい</rt></ruby>です。",
                romaji: "Shingaku shitai gakkō ga arimasu ga, gakuhi ga takakute kazoku ni futan o kakenai ka shinpai desu."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "学費だけでなく、入学金や教材費、通学費なども含めて考えることが大切です。",
                target: "がくひだけでなく にゅうがくきんやきょうざいひ つうがくひなどもふくめてかんがえることがたいせつです",
                ruby: "<ruby>学費<rt>がくひ</rt></ruby>だけでなく、<ruby>入学金<rt>にゅうがくきん</rt></ruby>や<ruby>教材費<rt>きょうざいひ</rt></ruby>、<ruby>通学費<rt>つうがくひ</rt></ruby>なども<ruby>含<rt>ふく</rt></ruby>めて<ruby>考<rt>かんが</rt></ruby>えることが<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Gakuhi dake de naku, nyūgakukin ya kyōzaihi, tsūgakuhi nado mo fukumete kangaeru koto ga taisetsu desu."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "奨学金や学費の支援を利用できる可能性はありますか。",
                target: "しょうがくきんやがくひのしえんをりようできるかのうせいはありますか",
                ruby: "<ruby>奨学金<rt>しょうがくきん</rt></ruby>や<ruby>学費<rt>がくひ</rt></ruby>の<ruby>支援<rt>しえん</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>できる<ruby>可能性<rt>かのうせい</rt></ruby>はありますか。",
                romaji: "Shōgakukin ya gakuhi no shien o riyō dekiru kanōsei wa arimasu ka."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "制度によって条件が違うので、学校や自治体などの情報を確認する必要があります。",
                target: "せいどによってじょうけんがちがうので がっこうやじちたいなどのじょうほうをかくにんするひつようがあります",
                ruby: "<ruby>制度<rt>せいど</rt></ruby>によって<ruby>条件<rt>じょうけん</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>うので、<ruby>学校<rt>がっこう</rt></ruby>や<ruby>自治体<rt>じちたい</rt></ruby>などの<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>があります。",
                romaji: "Seido ni yotte jōken ga chigau node, gakkō ya jichitai nado no jōhō o kakunin suru hitsuyō ga arimasu."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "お金のことで最初からあきらめる前に、調べられることを調べたいです。",
                target: "おかねのことではじめからあきらめるまえに しらべられることをしらべたいです",
                ruby: "お<ruby>金<rt>かね</rt></ruby>のことで<ruby>最初<rt>さいしょ</rt></ruby>からあきらめる<ruby>前<rt>まえ</rt></ruby>に、<ruby>調<rt>しら</rt></ruby>べられることを<ruby>調<rt>しら</rt></ruby>べたいです。",
                romaji: "Okane no koto de saisho kara akirameru mae ni, shiraberareru koto o shirabetai desu."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "そうですね。必要な費用と利用できる支援を整理して、現実的な方法を一緒に考えましょう。",
                target: "そうですね ひつようなひようとりようできるしえんをせいりして げんじつてきなほうほうをいっしょにかんがえましょう",
                ruby: "そうですね。<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>費用<rt>ひよう</rt></ruby>と<ruby>利用<rt>りよう</rt></ruby>できる<ruby>支援<rt>しえん</rt></ruby>を<ruby>整理<rt>せいり</rt></ruby>して、<ruby>現実的<rt>げんじつてき</rt></ruby>な<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Sō desu ne. Hitsuyō na hiyō to riyō dekiru shien o seiri shite, genjitsuteki na hōhō o issho ni kangaemashō."
            }
        ],

        {
            ja: [
                "生徒：進学したい学校がありますが、学費が高くて家族に負担をかけないか心配です。",
                "進路指導担当：学費だけでなく、入学金や教材費、通学費なども含めて考えることが大切です。",
                "生徒：奨学金や学費の支援を利用できる可能性はありますか。",
                "進路指導担当：制度によって条件が違うので、学校や自治体などの情報を確認する必要があります。",
                "生徒：お金のことで最初からあきらめる前に、調べられることを調べたいです。",
                "進路指導担当：そうですね。必要な費用と利用できる支援を整理して、現実的な方法を一緒に考えましょう。"
            ],

            en: [
                "Student: There is a school I want to attend, but the tuition is high, and I am worried about placing a burden on my family.",
                "Career Counselor: It is important to consider not only tuition but also admission fees, materials, transportation, and other costs.",
                "Student: Is there a possibility that I can use scholarships or tuition support?",
                "Career Counselor: The conditions differ depending on the program, so we need to check information from schools, local governments, and other sources.",
                "Student: Before giving up because of money, I want to research every possibility available.",
                "Career Counselor: That is a good approach. Let us organize the necessary costs and available support and think about realistic options together."
            ],

            "zh-CN": [
                "学生：我有想去的学校，但学费很高，我担心给家里增加负担。",
                "升学就业指导老师：不仅要考虑学费，还要考虑入学金、教材费和交通费等。",
                "学生：有可能利用奖学金或学费支援吗？",
                "升学就业指导老师：不同制度的条件不同，需要确认学校、自治体等方面的信息。",
                "学生：我不想因为钱的问题一开始就放弃，想先调查所有可能性。",
                "升学就业指导老师：很好。我们整理必要费用和可以利用的支援，一起考虑现实可行的方法吧。"
            ],

            "zh-TW": [
                "學生：我有想去的學校，但學費很高，我擔心給家裡增加負擔。",
                "升學就業指導老師：不僅要考慮學費，還要考慮入學金、教材費和交通費等。",
                "學生：有可能利用獎學金或學費支援嗎？",
                "升學就業指導老師：不同制度的條件不同，需要確認學校、自治體等方面的資訊。",
                "學生：我不想因為錢的問題一開始就放棄，想先調查所有可能性。",
                "升學就業指導老師：很好。我們整理必要費用和可以利用的支援，一起考慮現實可行的方法吧。"
            ],

            ko: [
                "학생: 진학하고 싶은 학교가 있지만 학비가 비싸서 가족에게 부담을 주지 않을지 걱정됩니다.",
                "진로 상담 교사: 학비뿐 아니라 입학금, 교재비, 교통비 등도 함께 생각하는 것이 중요합니다.",
                "학생: 장학금이나 학비 지원을 이용할 가능성이 있나요?",
                "진로 상담 교사: 제도마다 조건이 다르므로 학교나 지방자치단체 등의 정보를 확인해야 합니다.",
                "학생: 돈 때문에 처음부터 포기하기 전에 알아볼 수 있는 것은 모두 알아보고 싶습니다.",
                "진로 상담 교사: 좋습니다. 필요한 비용과 이용 가능한 지원을 정리해서 현실적인 방법을 함께 생각해 봅시다."
            ],

            vi: [
                "Học sinh: Có một trường em muốn học nhưng học phí cao nên em lo sẽ tạo gánh nặng cho gia đình.",
                "Giáo viên hướng nghiệp: Điều quan trọng là phải tính không chỉ học phí mà cả phí nhập học, tài liệu và đi lại.",
                "Học sinh: Có khả năng em được sử dụng học bổng hoặc hỗ trợ học phí không?",
                "Giáo viên hướng nghiệp: Điều kiện khác nhau tùy chương trình nên cần kiểm tra thông tin từ trường, chính quyền địa phương và các nguồn khác.",
                "Học sinh: Trước khi từ bỏ ngay vì vấn đề tiền bạc, em muốn tìm hiểu mọi khả năng có thể.",
                "Giáo viên hướng nghiệp: Đúng vậy. Chúng ta hãy sắp xếp các chi phí cần thiết và sự hỗ trợ có thể sử dụng rồi cùng nghĩ về phương án thực tế."
            ]
        }
    ),

    // =====================================================
    // 007 保護者と進路の意見が違うことを相談する
    // =====================================================

    makeB1CareerConsultationDialogue(
        "b1_careerconsult_007",
        "保護者と進路の意見が違うことを相談する",

        [
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "私は専門学校に行きたいのですが、家族は大学へ行ってほしいと言っています。",
                target: "わたしはせんもんがっこうにいきたいのですが かぞくはだいがくへいってほしいといっています",
                ruby: "<ruby>私<rt>わたし</rt></ruby>は<ruby>専門学校<rt>せんもんがっこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きたいのですが、<ruby>家族<rt>かぞく</rt></ruby>は<ruby>大学<rt>だいがく</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってほしいと<ruby>言<rt>い</rt></ruby>っています。",
                romaji: "Watashi wa senmon gakkō ni ikitai no desu ga, kazoku wa daigaku e itte hoshii to itte imasu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "意見が違うのですね。あなたは、なぜ専門学校へ行きたいのですか。",
                target: "いけんがちがうのですね あなたは なぜせんもんがっこうへいきたいのですか",
                ruby: "<ruby>意見<rt>いけん</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>うのですね。あなたは、なぜ<ruby>専門学校<rt>せんもんがっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きたいのですか。",
                romaji: "Iken ga chigau no desu ne. Anata wa, naze senmon gakkō e ikitai no desu ka."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "将来やりたい仕事が決まっていて、そのための技術を早く身につけたいからです。",
                target: "しょうらいやりたいしごとがきまっていて そのためのぎじゅつをはやくみにつけたいからです",
                ruby: "<ruby>将来<rt>しょうらい</rt></ruby>やりたい<ruby>仕事<rt>しごと</rt></ruby>が<ruby>決<rt>き</rt></ruby>まっていて、そのための<ruby>技術<rt>ぎじゅつ</rt></ruby>を<ruby>早<rt>はや</rt></ruby>く<ruby>身<rt>み</rt></ruby>につけたいからです。",
                romaji: "Shōrai yaritai shigoto ga kimatte ite, sono tame no gijutsu o hayaku mi ni tsuketai kara desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "では、感情だけでなく、学ぶ内容や卒業後の進路など具体的な情報を使って説明するとよいですね。",
                target: "では かんじょうだけでなく まなぶないようやそつぎょうごのしんろなどぐたいてきなじょうほうをつかってせつめいするとよいですね",
                ruby: "では、<ruby>感情<rt>かんじょう</rt></ruby>だけでなく、<ruby>学<rt>まな</rt></ruby>ぶ<ruby>内容<rt>ないよう</rt></ruby>や<ruby>卒業後<rt>そつぎょうご</rt></ruby>の<ruby>進路<rt>しんろ</rt></ruby>など<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>説明<rt>せつめい</rt></ruby>するとよいですね。",
                romaji: "Dewa, kanjō dake de naku, manabu naiyō ya sotsugyōgo no shinro nado gutaiteki na jōhō o tsukatte setsumei suru to yoi desu ne."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "家族が心配している理由も聞いて、お互いに話す必要がありそうです。",
                target: "かぞくがしんぱいしているりゆうもきいて おたがいにはなすひつようがありそうです",
                ruby: "<ruby>家族<rt>かぞく</rt></ruby>が<ruby>心配<rt>しんぱい</rt></ruby>している<ruby>理由<rt>りゆう</rt></ruby>も<ruby>聞<rt>き</rt></ruby>いて、お<ruby>互<rt>たが</rt></ruby>いに<ruby>話<rt>はな</rt></ruby>す<ruby>必要<rt>ひつよう</rt></ruby>がありそうです。",
                romaji: "Kazoku ga shinpai shite iru riyū mo kiite, otagai ni hanasu hitsuyō ga arisō desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "その通りです。必要なら三者で話す機会を作って、情報を確認しながら一緒に考えましょう。",
                target: "そのとおりです ひつようならさんしゃではなすきかいをつくって じょうほうをかくにんしながらいっしょにかんがえましょう",
                ruby: "その<ruby>通<rt>とお</rt></ruby>りです。<ruby>必要<rt>ひつよう</rt></ruby>なら<ruby>三者<rt>さんしゃ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>す<ruby>機会<rt>きかい</rt></ruby>を<ruby>作<rt>つく</rt></ruby>って、<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しながら<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Sono tōri desu. Hitsuyō nara sansha de hanasu kikai o tsukutte, jōhō o kakunin shinagara issho ni kangaemashō."
            }
        ],

        {
            ja: [
                "生徒：私は専門学校に行きたいのですが、家族は大学へ行ってほしいと言っています。",
                "先生：意見が違うのですね。あなたは、なぜ専門学校へ行きたいのですか。",
                "生徒：将来やりたい仕事が決まっていて、そのための技術を早く身につけたいからです。",
                "先生：では、感情だけでなく、学ぶ内容や卒業後の進路など具体的な情報を使って説明するとよいですね。",
                "生徒：家族が心配している理由も聞いて、お互いに話す必要がありそうです。",
                "先生：その通りです。必要なら三者で話す機会を作って、情報を確認しながら一緒に考えましょう。"
            ],

            en: [
                "Student: I want to attend a vocational school, but my family wants me to go to university.",
                "Teacher: So you have different opinions. Why do you want to attend a vocational school?",
                "Student: I have already decided what kind of job I want, and I want to gain the necessary practical skills quickly.",
                "Teacher: Then it may help to explain your choice using concrete information about what you will study and career paths after graduation, not only your feelings.",
                "Student: I should probably also listen to why my family is worried and discuss it with them.",
                "Teacher: Exactly. If necessary, we can arrange a meeting with you, your family, and the school and think about it together while checking the facts."
            ],

            "zh-CN": [
                "学生：我想去专门学校，但家人希望我上大学。",
                "老师：你们的意见不同。你为什么想去专门学校？",
                "学生：因为我已经决定了将来想做的工作，希望尽快掌握需要的技术。",
                "老师：那么，不仅要表达自己的感受，也可以用学习内容和毕业后的去向等具体信息来说明。",
                "学生：我也应该听听家人为什么担心，双方需要好好谈一谈。",
                "老师：没错。有需要的话，可以安排学生、家长和学校三方一起谈，在确认信息的同时共同考虑。"
            ],

            "zh-TW": [
                "學生：我想去專門學校，但家人希望我上大學。",
                "老師：你們的意見不同。你為什麼想去專門學校？",
                "學生：因為我已經決定了將來想做的工作，希望儘快掌握需要的技術。",
                "老師：那麼，不僅要表達自己的感受，也可以用學習內容和畢業後的去向等具體資訊來說明。",
                "學生：我也應該聽聽家人為什麼擔心，雙方需要好好談一談。",
                "老師：沒錯。有需要的話，可以安排學生、家長和學校三方一起談，在確認資訊的同時共同考慮。"
            ],

            ko: [
                "학생: 저는 전문학교에 가고 싶지만 가족은 대학에 가기를 바랍니다.",
                "교사: 의견이 다르군요. 왜 전문학교에 가고 싶나요?",
                "학생: 장래에 하고 싶은 일이 정해져 있고 그 일에 필요한 기술을 빨리 배우고 싶기 때문입니다.",
                "교사: 그렇다면 감정만이 아니라 배우는 내용과 졸업 후 진로 같은 구체적인 정보를 이용해 설명하는 것이 좋습니다.",
                "학생: 가족이 걱정하는 이유도 듣고 서로 이야기할 필요가 있을 것 같습니다.",
                "교사: 맞습니다. 필요하다면 학생, 보호자, 학교가 함께 이야기하는 자리를 마련해서 정보를 확인하며 함께 생각합시다."
            ],

            vi: [
                "Học sinh: Em muốn vào trường chuyên môn nhưng gia đình muốn em học đại học.",
                "Giáo viên: Vậy hai bên có ý kiến khác nhau. Tại sao em muốn vào trường chuyên môn?",
                "Học sinh: Vì em đã quyết định nghề mình muốn làm trong tương lai và muốn sớm học các kỹ năng cần thiết.",
                "Giáo viên: Vậy ngoài cảm xúc, em nên giải thích bằng thông tin cụ thể như nội dung học và con đường sau khi tốt nghiệp.",
                "Học sinh: Có lẽ em cũng cần nghe lý do gia đình lo lắng và hai bên cần nói chuyện với nhau.",
                "Giáo viên: Đúng vậy. Nếu cần, chúng ta có thể tổ chức buổi trao đổi giữa học sinh, gia đình và nhà trường để cùng xem xét thông tin."
            ]
        }
    ),

    // =====================================================
    // 008 自分の進路計画を立てる
    // =====================================================

    makeB1CareerConsultationDialogue(
        "b1_careerconsult_008",
        "自分の進路計画を立てる",

        [
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "いろいろ調べましたが、何から始めればいいか整理できていません。",
                target: "いろいろしらべましたが なにからはじめればいいかせいりできていません",
                ruby: "いろいろ<ruby>調<rt>しら</rt></ruby>べましたが、<ruby>何<rt>なに</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>めればいいか<ruby>整理<rt>せいり</rt></ruby>できていません。",
                romaji: "Iroiro shirabemashita ga, nani kara hajimereba ii ka seiri dekite imasen."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "では、まず第一希望とほかの選択肢、それぞれに必要な準備を書き出してみましょう。",
                target: "では まずだいいちきぼうとほかのせんたくし それぞれにひつようなじゅんびをかきだしてみましょう",
                ruby: "では、まず<ruby>第一希望<rt>だいいちきぼう</rt></ruby>とほかの<ruby>選択肢<rt>せんたくし</rt></ruby>、それぞれに<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>準備<rt>じゅんび</rt></ruby>を<ruby>書<rt>か</rt></ruby>き<ruby>出<rt>だ</rt></ruby>してみましょう。",
                romaji: "Dewa, mazu daiichi kibō to hoka no sentakushi, sorezore ni hitsuyō na junbi o kakidashite mimashō."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "受験日や申し込み期限も、一緒に書いた方がよいですか。",
                target: "じゅけんびやもうしこみきげんも いっしょにかいたほうがよいですか",
                ruby: "<ruby>受験日<rt>じゅけんび</rt></ruby>や<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>み<ruby>期限<rt>きげん</rt></ruby>も、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>書<rt>か</rt></ruby>いた<ruby>方<rt>ほう</rt></ruby>がよいですか。",
                romaji: "Jukenbi ya mōshikomi kigen mo, issho ni kaita hō ga yoi desu ka."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "はい。試験、書類提出、面接、説明会などの日程をまとめると、準備しやすくなります。",
                target: "はい しけん しょるいていしゅつ めんせつ せつめいかいなどのにっていをまとめると じゅんびしやすくなります",
                ruby: "はい。<ruby>試験<rt>しけん</rt></ruby>、<ruby>書類提出<rt>しょるいていしゅつ</rt></ruby>、<ruby>面接<rt>めんせつ</rt></ruby>、<ruby>説明会<rt>せつめいかい</rt></ruby>などの<ruby>日程<rt>にってい</rt></ruby>をまとめると、<ruby>準備<rt>じゅんび</rt></ruby>しやすくなります。",
                romaji: "Hai. Shiken, shorui teishutsu, mensetsu, setsumeikai nado no nittei o matomeru to, junbi shiyasuku narimasu."
            },
            {
                label: "話者B",
                key: "student",
                name: "生徒",
                line: "一度決めた計画も、状況が変わったら見直していいのでしょうか。",
                target: "いちどきめたけいかくも じょうきょうがかわったらみなおしていいのでしょうか",
                ruby: "<ruby>一度<rt>いちど</rt></ruby><ruby>決<rt>き</rt></ruby>めた<ruby>計画<rt>けいかく</rt></ruby>も、<ruby>状況<rt>じょうきょう</rt></ruby>が<ruby>変<rt>か</rt></ruby>わったら<ruby>見直<rt>みなお</rt></ruby>していいのでしょうか。",
                romaji: "Ichido kimeta keikaku mo, jōkyō ga kawattara minaoshite ii no deshō ka."
            },
            {
                label: "話者A",
                key: "careerCounselor",
                name: "進路指導担当",
                line: "もちろんです。大切なのは、情報を確認しながら、自分で考えて納得できる選択をしていくことです。",
                target: "もちろんです たいせつなのは じょうほうをかくにんしながら じぶんでかんがえてなっとくできるせんたくをしていくことです",
                ruby: "もちろんです。<ruby>大切<rt>たいせつ</rt></ruby>なのは、<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しながら、<ruby>自分<rt>じぶん</rt></ruby>で<ruby>考<rt>かんが</rt></ruby>えて<ruby>納得<rt>なっとく</rt></ruby>できる<ruby>選択<rt>せんたく</rt></ruby>をしていくことです。",
                romaji: "Mochiron desu. Taisetsu na no wa, jōhō o kakunin shinagara, jibun de kangaete nattoku dekiru sentaku o shite iku koto desu."
            }
        ],

        {
            ja: [
                "生徒：いろいろ調べましたが、何から始めればいいか整理できていません。",
                "進路指導担当：では、まず第一希望とほかの選択肢、それぞれに必要な準備を書き出してみましょう。",
                "生徒：受験日や申し込み期限も、一緒に書いた方がよいですか。",
                "進路指導担当：はい。試験、書類提出、面接、説明会などの日程をまとめると、準備しやすくなります。",
                "生徒：一度決めた計画も、状況が変わったら見直していいのでしょうか。",
                "進路指導担当：もちろんです。大切なのは、情報を確認しながら、自分で考えて納得できる選択をしていくことです。"
            ],

            en: [
                "Student: I have researched many things, but I still have not organized where to begin.",
                "Career Counselor: Then first, let us write down your first choice, other options, and the preparation needed for each.",
                "Student: Should I also write down examination dates and application deadlines?",
                "Career Counselor: Yes. Organizing dates for examinations, document submission, interviews, and information sessions makes preparation easier.",
                "Student: Is it okay to review a plan I have already made if my situation changes?",
                "Career Counselor: Of course. What matters is continuing to check information, think for yourself, and make choices that you truly understand and accept."
            ],

            "zh-CN": [
                "学生：我调查了很多信息，但还没有整理好应该从哪里开始。",
                "升学就业指导老师：那么，首先把第一志愿、其他选择以及各自需要的准备写出来吧。",
                "学生：考试日期和报名截止日期也应该一起写吗？",
                "升学就业指导老师：是的。把考试、提交材料、面试和说明会等日程整理好，会更容易准备。",
                "学生：已经制定的计划，如果情况改变了，也可以重新调整吗？",
                "升学就业指导老师：当然可以。重要的是一边确认信息，一边自己思考，做出自己能够理解和接受的选择。"
            ],

            "zh-TW": [
                "學生：我調查了很多資訊，但還沒有整理好應該從哪裡開始。",
                "升學就業指導老師：那麼，首先把第一志願、其他選擇以及各自需要的準備寫出來吧。",
                "學生：考試日期和報名截止日期也應該一起寫嗎？",
                "升學就業指導老師：是的。把考試、提交資料、面試和說明會等日程整理好，會更容易準備。",
                "學生：已經制定的計畫，如果情況改變了，也可以重新調整嗎？",
                "升學就業指導老師：當然可以。重要的是一邊確認資訊，一邊自己思考，做出自己能夠理解和接受的選擇。"
            ],

            ko: [
                "학생: 여러 가지를 알아봤지만 무엇부터 시작해야 할지 정리하지 못했습니다.",
                "진로 상담 교사: 그러면 먼저 제1희망과 다른 선택지, 각각 필요한 준비를 적어 봅시다.",
                "학생: 시험일이나 신청 마감일도 함께 쓰는 것이 좋나요?",
                "진로 상담 교사: 네. 시험, 서류 제출, 면접, 설명회 등의 일정을 정리하면 준비하기 쉬워집니다.",
                "학생: 한 번 정한 계획도 상황이 바뀌면 다시 검토해도 되나요?",
                "진로 상담 교사: 물론입니다. 중요한 것은 정보를 확인하면서 스스로 생각하고 자신이 납득할 수 있는 선택을 해 나가는 것입니다."
            ],

            vi: [
                "Học sinh: Em đã tìm hiểu nhiều thứ nhưng vẫn chưa sắp xếp được nên bắt đầu từ đâu.",
                "Giáo viên hướng nghiệp: Vậy trước tiên hãy viết ra nguyện vọng thứ nhất, các lựa chọn khác và sự chuẩn bị cần thiết cho từng lựa chọn.",
                "Học sinh: Em cũng nên ghi cả ngày thi và hạn đăng ký phải không?",
                "Giáo viên hướng nghiệp: Đúng vậy. Nếu tổng hợp lịch thi, nộp hồ sơ, phỏng vấn và các buổi giới thiệu thì sẽ dễ chuẩn bị hơn.",
                "Học sinh: Kế hoạch đã quyết định rồi có thể xem xét lại nếu tình hình thay đổi không?",
                "Giáo viên hướng nghiệp: Tất nhiên. Điều quan trọng là vừa kiểm tra thông tin, vừa tự suy nghĩ và đưa ra lựa chọn mà bản thân hiểu rõ và chấp nhận."
            ]
        }
    )

];