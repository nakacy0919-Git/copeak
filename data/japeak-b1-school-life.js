// =====================================================
// Japeak B1 Level
// Scene: 学校生活について理解しよう
// File: data/japeak-b1-school-life.js
// Category Key: b1_school_life
// =====================================================

const b1SchoolLifeLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1SchoolLifeTranslations(translations) {
    const completed = {};

    b1SchoolLifeLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1SchoolLifeContext = {
    ja: "日本の学校生活について、登校から朝の会、時間割と授業、宿題と持ち物、給食、休み時間、掃除、当番や係活動、学校行事、欠席や遅刻の連絡、学校からのお知らせなどについて質問したり確認したりする日本語を練習します。",

    en: "Practice Japanese for understanding daily school life, including arrival at school, morning meetings, timetables and lessons, homework and belongings, school lunch, breaks, cleaning, classroom duties, school events, absence and lateness procedures, and school notices.",

    "zh-CN": "练习了解日本学校生活时使用的日语，包括到校、晨会、课程表和上课、作业和携带物品、学校午餐、休息时间、打扫、值日和班级分工、学校活动、请假和迟到的联系方法以及学校通知。",

    "zh-TW": "練習了解日本學校生活時使用的日語，包括到校、晨會、課表和上課、作業和攜帶物品、學校午餐、休息時間、打掃、值日和班級分工、學校活動、請假和遲到的聯絡方法以及學校通知。",

    ko: "일본의 학교생활을 이해하기 위해 등교, 아침 조회, 시간표와 수업, 숙제와 준비물, 급식, 쉬는 시간, 청소, 당번과 역할 활동, 학교 행사, 결석과 지각 연락, 학교 공지 등에 대해 질문하고 확인하는 일본어를 연습합니다.",

    vi: "Luyện tiếng Nhật để hiểu về đời sống trường học ở Nhật, bao gồm đến trường, sinh hoạt buổi sáng, thời khóa biểu và giờ học, bài tập và đồ dùng, bữa trưa, giờ nghỉ, dọn vệ sinh, trực nhật và nhiệm vụ trong lớp, sự kiện trường, thông báo nghỉ học hoặc đi muộn và các thông báo từ trường.",

    tl: "Practice Japanese for understanding school life, including arrival, morning meetings, lessons, homework, school lunch, breaks, cleaning, classroom duties, school events, absences, lateness, and school notices.",

    id: "Latihan bahasa Jepang untuk memahami kehidupan sekolah, termasuk kedatangan, pertemuan pagi, jadwal dan pelajaran, pekerjaan rumah dan barang bawaan, makan siang sekolah, waktu istirahat, kebersihan, tugas kelas, acara sekolah, ketidakhadiran, keterlambatan, dan pemberitahuan sekolah.",

    th: "ฝึกภาษาญี่ปุ่นเพื่อเข้าใจชีวิตในโรงเรียน เช่น การมาโรงเรียน การประชุมตอนเช้า ตารางเรียนและชั้นเรียน การบ้านและของที่ต้องนำมา อาหารกลางวัน เวลาพัก การทำความสะอาด หน้าที่ในห้องเรียน กิจกรรมโรงเรียน การลา การมาสาย และประกาศจากโรงเรียน",

    my: "ကျောင်းဘဝကို နားလည်ရန် ကျောင်းရောက်ခြင်း၊ မနက်ခင်းအစည်းအဝေး၊ အချိန်ဇယားနှင့် သင်ခန်းစာများ၊ အိမ်စာနှင့် ယူဆောင်ရမည့်ပစ္စည်းများ၊ ကျောင်းနေ့လယ်စာ၊ နားချိန်၊ သန့်ရှင်းရေး၊ အတန်းတာဝန်များ၊ ကျောင်းပွဲများ၊ ပျက်ကွက်ခြင်း၊ နောက်ကျခြင်းနှင့် ကျောင်းအသိပေးစာများအကြောင်း ဂျပန်စကားကို လေ့ကျင့်ပါ။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់យល់អំពីជីវិតនៅសាលា រួមមានការមកដល់សាលា កិច្ចប្រជុំពេលព្រឹក កាលវិភាគនិងមេរៀន កិច្ចការផ្ទះនិងសម្ភារៈ អាហារថ្ងៃត្រង់ ពេលសម្រាក ការសម្អាត ភារកិច្ចក្នុងថ្នាក់ ព្រឹត្តិការណ៍សាលា ការអវត្តមាន ការយឺត និងសេចក្តីជូនដំណឹងពីសាលា។",

    ne: "विद्यालय जीवन बुझ्न विद्यालय पुग्ने समय, बिहानको सभा, समयतालिका र कक्षा, गृहकार्य र सामग्री, विद्यालय भोजन, विश्राम, सरसफाइ, कक्षाको जिम्मेवारी, विद्यालय कार्यक्रम, अनुपस्थिति, ढिलाइ र विद्यालयका सूचनाबारे जापानीमा प्रश्न गर्ने अभ्यास।",

    mn: "Сургуулийн амьдралыг ойлгоход сургуульд ирэх, өглөөний уулзалт, хуваарь ба хичээл, гэрийн даалгавар ба хэрэглэл, сургуулийн хоол, завсарлага, цэвэрлэгээ, ангийн үүрэг, сургуулийн арга хэмжээ, таслалт, хоцролт болон сургуулийн мэдэгдлийн талаар япон хэлээр асуух дадлага.",

    si: "පාසල් ජීවිතය තේරුම් ගැනීම සඳහා පාසලට පැමිණීම, උදෑසන රැස්වීම, කාලසටහන සහ පාඩම්, ගෙදර වැඩ සහ රැගෙන එන දේ, පාසල් දිවා ආහාරය, විවේකය, පිරිසිදු කිරීම, පන්තියේ වගකීම්, පාසල් උත්සව, නොපැමිණීම, ප්‍රමාදය සහ පාසල් දැනුම්දීම් පිළිබඳ ජපන් භාෂාවෙන් පුහුණු වීම.",

    bn: "স্কুল জীবন বোঝার জন্য স্কুলে পৌঁছানো, সকালের সভা, সময়সূচি ও ক্লাস, বাড়ির কাজ ও প্রয়োজনীয় জিনিস, স্কুলের দুপুরের খাবার, বিরতি, পরিষ্কার-পরিচ্ছন্নতা, শ্রেণির দায়িত্ব, স্কুল অনুষ্ঠান, অনুপস্থিতি, দেরি এবং স্কুলের নোটিশ সম্পর্কে জাপানিতে প্রশ্ন করার অনুশীলন।",

    pt: "Prática de japonês para compreender a vida escolar, incluindo chegada à escola, reunião da manhã, horários e aulas, tarefas e materiais, merenda escolar, intervalos, limpeza, responsabilidades da turma, eventos escolares, faltas, atrasos e comunicados da escola.",

    es: "Práctica de japonés para comprender la vida escolar, incluyendo la llegada a la escuela, la reunión de la mañana, horarios y clases, deberes y materiales, almuerzo escolar, recreos, limpieza, responsabilidades de clase, eventos escolares, ausencias, retrasos y avisos de la escuela.",

    fr: "Entraînement en japonais pour comprendre la vie scolaire, notamment l'arrivée à l'école, la réunion du matin, les emplois du temps et les cours, les devoirs et le matériel, la cantine, les récréations, le nettoyage, les responsabilités dans la classe, les événements scolaires, les absences, les retards et les communications de l'école.",

    ru: "Практика японского языка для понимания школьной жизни: приход в школу, утренние собрания, расписание и уроки, домашние задания и принадлежности, школьное питание, перемены, уборка, классные обязанности, школьные мероприятия, отсутствие, опоздание и школьные объявления.",

    uk: "Практика японської мови для розуміння шкільного життя: прихід до школи, ранкові збори, розклад і уроки, домашні завдання та приладдя, шкільне харчування, перерви, прибирання, класні обов'язки, шкільні заходи, відсутність, запізнення та шкільні повідомлення."
};

const b1SchoolLifeSpeakerNames = {

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

    homeroomTeacher: {
        ja: "担任",
        en: "Homeroom Teacher",
        "zh-CN": "班主任",
        "zh-TW": "導師",
        ko: "담임교사",
        vi: "Giáo viên chủ nhiệm",
        tl: "Homeroom teacher",
        id: "Wali kelas",
        th: "ครูประจำชั้น",
        my: "အတန်းပိုင်ဆရာ",
        km: "គ្រូប្រចាំថ្នាក់",
        ne: "कक्षा शिक्षक",
        mn: "Ангийн багш",
        si: "පන්ති භාර ගුරුවරයා",
        bn: "শ্রেণিশিক্ষক",
        pt: "Professor responsável pela turma",
        es: "Profesor tutor",
        fr: "Professeur principal",
        ru: "Классный руководитель",
        uk: "Класний керівник"
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

    student: {
        ja: "児童",
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
        es: "Alumno",
        fr: "Élève",
        ru: "Ученик",
        uk: "Учень"
    }
};

function makeB1SchoolLifeDialogue(
    id,
    title,
    dialogue,
    dialogueTranslations
) {
    const fullDialogueTranslations =
        completeB1SchoolLifeTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_school_life",

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
                b1SchoolLifeSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1SchoolLifeContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1SchoolLifeData = [

    // =====================================================
    // 001 登校から朝の会までの流れを確認する
    // =====================================================

    makeB1SchoolLifeDialogue(
        "b1_schoollife_001",
        "登校から朝の会までの流れを確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが学校に着いてから授業が始まるまで、どのように過ごすのか知りたいです。",
                target: "こどもががっこうについてからじゅぎょうがはじまるまで どのようにすごすのかしりたいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>学校<rt>がっこう</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いてから<ruby>授業<rt>じゅぎょう</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まるまで、どのように<ruby>過<rt>す</rt></ruby>ごすのか<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Kodomo ga gakkō ni tsuite kara jugyō ga hajimaru made, dono yō ni sugosu no ka shiritai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "まず教室に入り、持ち物を片づけて、連絡帳や宿題を提出します。",
                target: "まずきょうしつにはいり もちものをかたづけて れんらくちょうやしゅくだいをていしゅつします",
                ruby: "まず<ruby>教室<rt>きょうしつ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>り、<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>を<ruby>片<rt>かた</rt></ruby>づけて、<ruby>連絡帳<rt>れんらくちょう</rt></ruby>や<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>提出<rt>ていしゅつ</rt></ruby>します。",
                romaji: "Mazu kyōshitsu ni hairi, mochimono o katazukete, renrakuchō ya shukudai o teishutsu shimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "朝の会では、どのようなことをするのですか。",
                target: "あさのかいでは どのようなことをするのですか",
                ruby: "<ruby>朝<rt>あさ</rt></ruby>の<ruby>会<rt>かい</rt></ruby>では、どのようなことをするのですか。",
                romaji: "Asa no kai de wa, dono yō na koto o suru no desu ka."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "出席を確認したり、その日の予定や大切な連絡を伝えたりします。",
                target: "しゅっせきをかくにんしたり そのひのよていやたいせつなれんらくをつたえたりします",
                ruby: "<ruby>出席<rt>しゅっせき</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>したり、その<ruby>日<rt>ひ</rt></ruby>の<ruby>予定<rt>よてい</rt></ruby>や<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>連絡<rt>れんらく</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えたりします。",
                romaji: "Shusseki o kakunin shitari, sono hi no yotei ya taisetsu na renraku o tsutaetari shimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "遅刻しそうな場合は、事前に学校へ連絡した方がいいですか。",
                target: "ちこくしそうなばあいは じぜんにがっこうへれんらくしたほうがいいですか",
                ruby: "<ruby>遅刻<rt>ちこく</rt></ruby>しそうな<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>連絡<rt>れんらく</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Chikoku shisō na baai wa, jizen ni gakkō e renraku shita hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "はい。学校ごとの連絡方法を確認し、できるだけ早めに連絡してください。",
                target: "はい がっこうごとのれんらくほうほうをかくにんし できるだけはやめにれんらくしてください",
                ruby: "はい。<ruby>学校<rt>がっこう</rt></ruby>ごとの<ruby>連絡方法<rt>れんらくほうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>し、できるだけ<ruby>早<rt>はや</rt></ruby>めに<ruby>連絡<rt>れんらく</rt></ruby>してください。",
                romaji: "Hai. Gakkō goto no renraku hōhō o kakunin shi, dekiru dake hayame ni renraku shite kudasai."
            }
        ],

        {
            ja: [
                "保護者：子どもが学校に着いてから授業が始まるまで、どのように過ごすのか知りたいです。",
                "先生：まず教室に入り、持ち物を片づけて、連絡帳や宿題を提出します。",
                "保護者：朝の会では、どのようなことをするのですか。",
                "先生：出席を確認したり、その日の予定や大切な連絡を伝えたりします。",
                "保護者：遅刻しそうな場合は、事前に学校へ連絡した方がいいですか。",
                "先生：はい。学校ごとの連絡方法を確認し、できるだけ早めに連絡してください。"
            ],

            en: [
                "Parent: I would like to know how my child spends the time between arriving at school and the start of lessons.",
                "Teacher: First, students enter the classroom, put away their belongings, and submit communication notebooks and homework.",
                "Parent: What happens during the morning meeting?",
                "Teacher: We check attendance and share the day's schedule and important information.",
                "Parent: If my child is likely to be late, should I contact the school in advance?",
                "Teacher: Yes. Please check the school's communication procedure and contact the school as early as possible."
            ],

            "zh-CN": [
                "家长：我想知道孩子到学校以后，到开始上课之前是怎样度过的。",
                "老师：首先进入教室，整理好自己的物品，然后提交联系本和作业。",
                "家长：晨会的时候会做什么？",
                "老师：会确认出勤情况，并说明当天的安排和重要通知。",
                "家长：如果可能迟到，应该提前联系学校吗？",
                "老师：是的。请确认学校规定的联系方法，并尽早联系。"
            ],

            "zh-TW": [
                "家長：我想知道孩子到學校以後，到開始上課之前是怎樣度過的。",
                "老師：首先進入教室，整理好自己的物品，然後提交聯絡簿和作業。",
                "家長：晨會的時候會做什麼？",
                "老師：會確認出席情況，並說明當天的安排和重要通知。",
                "家長：如果可能遲到，應該提前聯絡學校嗎？",
                "老師：是的。請確認學校規定的聯絡方法，並儘早聯絡。"
            ],

            ko: [
                "보호자: 아이가 학교에 도착한 뒤 수업이 시작될 때까지 어떻게 지내는지 알고 싶습니다.",
                "교사: 먼저 교실에 들어가 준비물을 정리하고 연락장과 숙제를 제출합니다.",
                "보호자: 아침 조회에서는 어떤 일을 하나요?",
                "교사: 출석을 확인하고 그날의 일정과 중요한 연락 사항을 전달합니다.",
                "보호자: 지각할 것 같으면 미리 학교에 연락하는 편이 좋나요?",
                "교사: 네. 학교별 연락 방법을 확인하고 가능한 한 일찍 연락해 주세요."
            ],

            vi: [
                "Phụ huynh: Tôi muốn biết từ khi con đến trường cho đến khi bắt đầu giờ học, cháu sẽ làm gì.",
                "Giáo viên: Trước tiên, học sinh vào lớp, cất đồ dùng và nộp sổ liên lạc cùng bài tập về nhà.",
                "Phụ huynh: Trong buổi sinh hoạt sáng sẽ làm những gì?",
                "Giáo viên: Chúng tôi kiểm tra sĩ số và thông báo lịch trong ngày cùng những thông tin quan trọng.",
                "Phụ huynh: Nếu con có thể đi muộn, tôi có nên liên lạc với trường trước không?",
                "Giáo viên: Có. Hãy kiểm tra cách liên lạc của trường và thông báo càng sớm càng tốt."
            ]
        }
    ),

    // =====================================================
    // 002 時間割と授業の流れを理解する
    // =====================================================

    makeB1SchoolLifeDialogue(
        "b1_schoollife_002",
        "時間割と授業の流れを理解する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "時間割を見ても、科目の名前や授業の流れがまだよくわかりません。",
                target: "じかんわりをみても かもくのなまえやじゅぎょうのながれがまだよくわかりません",
                ruby: "<ruby>時間割<rt>じかんわり</rt></ruby>を<ruby>見<rt>み</rt></ruby>ても、<ruby>科目<rt>かもく</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>や<ruby>授業<rt>じゅぎょう</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れがまだよくわかりません。",
                romaji: "Jikanwari o mite mo, kamoku no namae ya jugyō no nagare ga mada yoku wakarimasen."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "学校によって違いはありますが、時間割にはその日に学習する科目が書かれています。",
                target: "がっこうによってちがいはありますが じかんわりにはそのひにがくしゅうするかもくがかかれています",
                ruby: "<ruby>学校<rt>がっこう</rt></ruby>によって<ruby>違<rt>ちが</rt></ruby>いはありますが、<ruby>時間割<rt>じかんわり</rt></ruby>にはその<ruby>日<rt>ひ</rt></ruby>に<ruby>学習<rt>がくしゅう</rt></ruby>する<ruby>科目<rt>かもく</rt></ruby>が<ruby>書<rt>か</rt></ruby>かれています。",
                romaji: "Gakkō ni yotte chigai wa arimasu ga, jikanwari ni wa sono hi ni gakushū suru kamoku ga kakarete imasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "授業によって、教室を移動したり特別な持ち物が必要になったりしますか。",
                target: "じゅぎょうによって きょうしつをいどうしたりとくべつなもちものがひつようになったりしますか",
                ruby: "<ruby>授業<rt>じゅぎょう</rt></ruby>によって、<ruby>教室<rt>きょうしつ</rt></ruby>を<ruby>移動<rt>いどう</rt></ruby>したり<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>になったりしますか。",
                romaji: "Jugyō ni yotte, kyōshitsu o idō shitari tokubetsu na mochimono ga hitsuyō ni nattari shimasu ka."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "はい。体育や音楽などでは、教室を移動したり準備する物が変わったりすることがあります。",
                target: "はい たいいくやおんがくなどでは きょうしつをいどうしたりじゅんびするものがかわったりすることがあります",
                ruby: "はい。<ruby>体育<rt>たいいく</rt></ruby>や<ruby>音楽<rt>おんがく</rt></ruby>などでは、<ruby>教室<rt>きょうしつ</rt></ruby>を<ruby>移動<rt>いどう</rt></ruby>したり<ruby>準備<rt>じゅんび</rt></ruby>する<ruby>物<rt>もの</rt></ruby>が<ruby>変<rt>か</rt></ruby>わったりすることがあります。",
                romaji: "Hai. Taiiku ya ongaku nado de wa, kyōshitsu o idō shitari junbi suru mono ga kawattari suru koto ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "時間割が変更されたときは、どのように知らされますか。",
                target: "じかんわりがへんこうされたときは どのようにしらされますか",
                ruby: "<ruby>時間割<rt>じかんわり</rt></ruby>が<ruby>変更<rt>へんこう</rt></ruby>されたときは、どのように<ruby>知<rt>し</rt></ruby>らされますか。",
                romaji: "Jikanwari ga henkō sareta toki wa, dono yō ni shirasaremasu ka."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "連絡帳や学校の連絡システムなどで伝えますので、毎日確認してください。",
                target: "れんらくちょうやがっこうのれんらくしすてむなどでつたえますので まいにちかくにんしてください",
                ruby: "<ruby>連絡帳<rt>れんらくちょう</rt></ruby>や<ruby>学校<rt>がっこう</rt></ruby>の<ruby>連絡<rt>れんらく</rt></ruby>システムなどで<ruby>伝<rt>つた</rt></ruby>えますので、<ruby>毎日<rt>まいにち</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Renrakuchō ya gakkō no renraku shisutemu nado de tsutaemasu node, mainichi kakunin shite kudasai."
            }
        ],

        {
            ja: [
                "保護者：時間割を見ても、科目の名前や授業の流れがまだよくわかりません。",
                "担任：学校によって違いはありますが、時間割にはその日に学習する科目が書かれています。",
                "保護者：授業によって、教室を移動したり特別な持ち物が必要になったりしますか。",
                "担任：はい。体育や音楽などでは、教室を移動したり準備する物が変わったりすることがあります。",
                "保護者：時間割が変更されたときは、どのように知らされますか。",
                "担任：連絡帳や学校の連絡システムなどで伝えますので、毎日確認してください。"
            ],

            en: [
                "Parent: Even when I look at the timetable, I still do not clearly understand the subject names or how lessons are organized.",
                "Homeroom Teacher: It differs by school, but the timetable shows which subjects students will study that day.",
                "Parent: Depending on the lesson, do students move to another classroom or need special items?",
                "Homeroom Teacher: Yes. For subjects such as physical education or music, students may change classrooms or need different materials.",
                "Parent: How are we informed when the timetable changes?",
                "Homeroom Teacher: We communicate changes through the communication notebook or the school's communication system, so please check every day."
            ],

            "zh-CN": [
                "家长：即使看课程表，我还是不太明白科目名称和上课流程。",
                "班主任：每所学校可能有所不同，但课程表上会写当天学习的科目。",
                "家长：根据不同课程，会需要换教室或者准备特别的物品吗？",
                "班主任：是的。体育、音乐等课程有时需要换教室或准备不同的物品。",
                "家长：课程表发生变化时，会怎样通知我们？",
                "班主任：会通过联系本或学校的联系系统等通知，所以请每天确认。"
            ],

            "zh-TW": [
                "家長：即使看課表，我還是不太明白科目名稱和上課流程。",
                "導師：每所學校可能有所不同，但課表上會寫當天學習的科目。",
                "家長：根據不同課程，會需要換教室或者準備特別的物品嗎？",
                "導師：是的。體育、音樂等課程有時需要換教室或準備不同的物品。",
                "家長：課表發生變化時，會怎樣通知我們？",
                "導師：會透過聯絡簿或學校的聯絡系統等通知，所以請每天確認。"
            ],

            ko: [
                "보호자: 시간표를 봐도 과목 이름이나 수업 흐름을 아직 잘 모르겠습니다.",
                "담임교사: 학교마다 차이는 있지만 시간표에는 그날 공부할 과목이 적혀 있습니다.",
                "보호자: 수업에 따라 교실을 이동하거나 특별한 준비물이 필요할 수도 있나요?",
                "담임교사: 네. 체육이나 음악 등에서는 교실을 이동하거나 준비물이 달라질 수 있습니다.",
                "보호자: 시간표가 변경될 때는 어떻게 알려 주나요?",
                "담임교사: 연락장이나 학교 연락 시스템 등으로 알려 드리므로 매일 확인해 주세요."
            ],

            vi: [
                "Phụ huynh: Dù nhìn thời khóa biểu, tôi vẫn chưa hiểu rõ tên các môn học và cách các tiết học diễn ra.",
                "Giáo viên chủ nhiệm: Mỗi trường có thể khác nhau, nhưng thời khóa biểu ghi các môn học trong ngày.",
                "Phụ huynh: Tùy môn học, học sinh có phải đổi phòng hoặc cần đồ dùng đặc biệt không?",
                "Giáo viên chủ nhiệm: Có. Với các môn như thể dục hoặc âm nhạc, học sinh có thể phải đổi phòng hoặc chuẩn bị đồ khác.",
                "Phụ huynh: Khi thời khóa biểu thay đổi, chúng tôi sẽ được thông báo bằng cách nào?",
                "Giáo viên chủ nhiệm: Chúng tôi thông báo qua sổ liên lạc hoặc hệ thống liên lạc của trường, vì vậy hãy kiểm tra mỗi ngày."
            ]
        }
    ),

    // =====================================================
    // 003 宿題と持ち物を確認する
    // =====================================================

    makeB1SchoolLifeDialogue(
        "b1_schoollife_003",
        "宿題と持ち物を確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが宿題や明日の持ち物を忘れることがあるので、確認方法を知りたいです。",
                target: "こどもがしゅくだいやあしたのもちものをわすれることがあるので かくにんほうほうをしりたいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>宿題<rt>しゅくだい</rt></ruby>や<ruby>明日<rt>あした</rt></ruby>の<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れることがあるので、<ruby>確認方法<rt>かくにんほうほう</rt></ruby>を<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Kodomo ga shukudai ya ashita no mochimono o wasureru koto ga aru node, kakunin hōhō o shiritai desu."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "多くの場合、宿題や持ち物は連絡帳や学校の連絡システムで確認できます。",
                target: "おおくのばあい しゅくだいやもちものはれんらくちょうやがっこうのれんらくしすてむでかくにんできます",
                ruby: "<ruby>多<rt>おお</rt></ruby>くの<ruby>場合<rt>ばあい</rt></ruby>、<ruby>宿題<rt>しゅくだい</rt></ruby>や<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>は<ruby>連絡帳<rt>れんらくちょう</rt></ruby>や<ruby>学校<rt>がっこう</rt></ruby>の<ruby>連絡<rt>れんらく</rt></ruby>システムで<ruby>確認<rt>かくにん</rt></ruby>できます。",
                romaji: "Ōku no baai, shukudai ya mochimono wa renrakuchō ya gakkō no renraku shisutemu de kakunin dekimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "宿題が終わっていない場合は、保護者が代わりにやらせるべきでしょうか。",
                target: "しゅくだいがおわっていないばあいは ほごしゃがかわりにやらせるべきでしょうか",
                ruby: "<ruby>宿題<rt>しゅくだい</rt></ruby>が<ruby>終<rt>お</rt></ruby>わっていない<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>保護者<rt>ほごしゃ</rt></ruby>が<ruby>代<rt>か</rt></ruby>わりにやらせるべきでしょうか。",
                romaji: "Shukudai ga owatte inai baai wa, hogosha ga kawari ni yaraseru beki deshō ka."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "まずは理由を確認して、難しくてできなかった場合は学校にも相談してください。",
                target: "まずはりゆうをかくにんして むずかしくてできなかったばあいはがっこうにもそうだんしてください",
                ruby: "まずは<ruby>理由<rt>りゆう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>して、<ruby>難<rt>むずか</rt></ruby>しくてできなかった<ruby>場合<rt>ばあい</rt></ruby>は<ruby>学校<rt>がっこう</rt></ruby>にも<ruby>相談<rt>そうだん</rt></ruby>してください。",
                romaji: "Mazu wa riyū o kakunin shite, muzukashikute dekinakatta baai wa gakkō ni mo sōdan shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "家でどこまで手伝えばいいのか、いつも迷っていました。",
                target: "いえでどこまでてつだえばいいのか いつもまよっていました",
                ruby: "<ruby>家<rt>いえ</rt></ruby>でどこまで<ruby>手伝<rt>てつだ</rt></ruby>えばいいのか、いつも<ruby>迷<rt>まよ</rt></ruby>っていました。",
                romaji: "Ie de doko made tetsudaeba ii no ka, itsumo mayotte imashita."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "お子さんの様子を見ながら、自分でできる部分を大切にし、困ったときは相談してください。",
                target: "おこさんのようすをみながら じぶんでできるぶぶんをたいせつにし こまったときはそうだんしてください",
                ruby: "お<ruby>子<rt>こ</rt></ruby>さんの<ruby>様子<rt>ようす</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら、<ruby>自分<rt>じぶん</rt></ruby>でできる<ruby>部分<rt>ぶぶん</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にし、<ruby>困<rt>こま</rt></ruby>ったときは<ruby>相談<rt>そうだん</rt></ruby>してください。",
                romaji: "Okosan no yōsu o minagara, jibun de dekiru bubun o taisetsu ni shi, komatta toki wa sōdan shite kudasai."
            }
        ],

        {
            ja: [
                "保護者：子どもが宿題や明日の持ち物を忘れることがあるので、確認方法を知りたいです。",
                "担任：多くの場合、宿題や持ち物は連絡帳や学校の連絡システムで確認できます。",
                "保護者：宿題が終わっていない場合は、保護者が代わりにやらせるべきでしょうか。",
                "担任：まずは理由を確認して、難しくてできなかった場合は学校にも相談してください。",
                "保護者：家でどこまで手伝えばいいのか、いつも迷っていました。",
                "担任：お子さんの様子を見ながら、自分でできる部分を大切にし、困ったときは相談してください。"
            ],

            en: [
                "Parent: My child sometimes forgets homework or what to bring the next day, so I would like to know how to check.",
                "Homeroom Teacher: In many cases, homework and required items can be checked in the communication notebook or the school's communication system.",
                "Parent: If the homework is not finished, should the parent make the child complete it?",
                "Homeroom Teacher: First, check the reason. If your child could not complete it because it was difficult, please also consult the school.",
                "Parent: I have always been unsure how much I should help at home.",
                "Homeroom Teacher: While watching your child's situation, value the parts your child can do independently and consult us when there is a difficulty."
            ],

            "zh-CN": [
                "家长：孩子有时会忘记作业或第二天需要带的东西，所以我想知道如何确认。",
                "班主任：很多情况下，可以通过联系本或学校的联系系统确认作业和携带物品。",
                "家长：如果作业没有完成，家长应该要求孩子一定完成吗？",
                "班主任：首先确认原因。如果因为太难而无法完成，也请向学校咨询。",
                "家长：我一直不知道在家应该帮助到什么程度。",
                "班主任：请观察孩子的情况，重视孩子自己能够完成的部分，有困难时请咨询。"
            ],

            "zh-TW": [
                "家長：孩子有時會忘記作業或第二天需要帶的東西，所以我想知道如何確認。",
                "導師：很多情況下，可以透過聯絡簿或學校的聯絡系統確認作業和攜帶物品。",
                "家長：如果作業沒有完成，家長應該要求孩子一定完成嗎？",
                "導師：首先確認原因。如果因為太難而無法完成，也請向學校諮詢。",
                "家長：我一直不知道在家應該幫助到什麼程度。",
                "導師：請觀察孩子的情況，重視孩子自己能夠完成的部分，有困難時請諮詢。"
            ],

            ko: [
                "보호자: 아이가 숙제나 다음 날 준비물을 잊을 때가 있어서 확인 방법을 알고 싶습니다.",
                "담임교사: 많은 경우 숙제와 준비물은 연락장이나 학교 연락 시스템에서 확인할 수 있습니다.",
                "보호자: 숙제를 끝내지 못했을 때는 보호자가 반드시 하게 해야 하나요?",
                "담임교사: 먼저 이유를 확인하고 어려워서 하지 못한 경우에는 학교에도 상담해 주세요.",
                "보호자: 집에서 어느 정도까지 도와야 하는지 항상 고민했습니다.",
                "담임교사: 아이의 상태를 보면서 스스로 할 수 있는 부분을 중요하게 생각하고 어려울 때는 상담해 주세요."
            ],

            vi: [
                "Phụ huynh: Con tôi đôi khi quên bài tập hoặc đồ cần mang ngày hôm sau, nên tôi muốn biết cách kiểm tra.",
                "Giáo viên chủ nhiệm: Trong nhiều trường hợp, có thể kiểm tra bài tập và đồ cần mang qua sổ liên lạc hoặc hệ thống liên lạc của trường.",
                "Phụ huynh: Nếu chưa làm xong bài tập, phụ huynh có nên bắt trẻ phải hoàn thành không?",
                "Giáo viên chủ nhiệm: Trước hết hãy tìm hiểu lý do. Nếu trẻ không làm được vì quá khó, hãy trao đổi với nhà trường.",
                "Phụ huynh: Tôi luôn phân vân không biết nên giúp đến mức nào ở nhà.",
                "Giáo viên chủ nhiệm: Hãy quan sát tình hình của trẻ, coi trọng phần trẻ có thể tự làm và trao đổi với chúng tôi khi gặp khó khăn."
            ]
        }
    ),

    // =====================================================
    // 004 給食・休み時間・掃除について理解する
    // =====================================================

    makeB1SchoolLifeDialogue(
        "b1_schoollife_004",
        "給食・休み時間・掃除について理解する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "日本の学校では、給食や掃除も子どもたちが一緒に行うと聞きました。",
                target: "にほんのがっこうでは きゅうしょくやそうじもこどもたちがいっしょにおこなうとききました",
                ruby: "<ruby>日本<rt>にほん</rt></ruby>の<ruby>学校<rt>がっこう</rt></ruby>では、<ruby>給食<rt>きゅうしょく</rt></ruby>や<ruby>掃除<rt>そうじ</rt></ruby>も<ruby>子<rt>こ</rt></ruby>どもたちが<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>うと<ruby>聞<rt>き</rt></ruby>きました。",
                romaji: "Nihon no gakkō de wa, kyūshoku ya sōji mo kodomotachi ga issho ni okonau to kikimashita."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "学校によって違いはありますが、子どもたちが役割を分担して活動することがあります。",
                target: "がっこうによってちがいはありますが こどもたちがやくわりをぶんたんしてかつどうすることがあります",
                ruby: "<ruby>学校<rt>がっこう</rt></ruby>によって<ruby>違<rt>ちが</rt></ruby>いはありますが、<ruby>子<rt>こ</rt></ruby>どもたちが<ruby>役割<rt>やくわり</rt></ruby>を<ruby>分担<rt>ぶんたん</rt></ruby>して<ruby>活動<rt>かつどう</rt></ruby>することがあります。",
                romaji: "Gakkō ni yotte chigai wa arimasu ga, kodomotachi ga yakuwari o buntan shite katsudō suru koto ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "給食当番になったときは、特別に準備する物がありますか。",
                target: "きゅうしょくとうばんになったときは とくべつにじゅんびするものがありますか",
                ruby: "<ruby>給食当番<rt>きゅうしょくとうばん</rt></ruby>になったときは、<ruby>特別<rt>とくべつ</rt></ruby>に<ruby>準備<rt>じゅんび</rt></ruby>する<ruby>物<rt>もの</rt></ruby>がありますか。",
                romaji: "Kyūshoku tōban ni natta toki wa, tokubetsu ni junbi suru mono ga arimasu ka."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "必要な物や衛生上の決まりは学校によって異なるので、学校からの案内を確認してください。",
                target: "ひつようなものやえいせいじょうのきまりはがっこうによってことなるので がっこうからのあんないをかくにんしてください",
                ruby: "<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>物<rt>もの</rt></ruby>や<ruby>衛生上<rt>えいせいじょう</rt></ruby>の<ruby>決<rt>き</rt></ruby>まりは<ruby>学校<rt>がっこう</rt></ruby>によって<ruby>異<rt>こと</rt></ruby>なるので、<ruby>学校<rt>がっこう</rt></ruby>からの<ruby>案内<rt>あんない</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Hitsuyō na mono ya eiseijō no kimari wa gakkō ni yotte kotonaru node, gakkō kara no annai o kakunin shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "休み時間は自由に遊べるのでしょうか。",
                target: "やすみじかんはじゆうにあそべるのでしょうか",
                ruby: "<ruby>休<rt>やす</rt></ruby>み<ruby>時間<rt>じかん</rt></ruby>は<ruby>自由<rt>じゆう</rt></ruby>に<ruby>遊<rt>あそ</rt></ruby>べるのでしょうか。",
                romaji: "Yasumi jikan wa jiyū ni asoberu no deshō ka."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "基本的には休憩の時間ですが、安全や場所について学校のルールを守る必要があります。",
                target: "きほんてきにはきゅうけいのじかんですが あんぜんやばしょについてがっこうのるーるをまもるひつようがあります",
                ruby: "<ruby>基本的<rt>きほんてき</rt></ruby>には<ruby>休憩<rt>きゅうけい</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>ですが、<ruby>安全<rt>あんぜん</rt></ruby>や<ruby>場所<rt>ばしょ</rt></ruby>について<ruby>学校<rt>がっこう</rt></ruby>のルールを<ruby>守<rt>まも</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>があります。",
                romaji: "Kihonteki ni wa kyūkei no jikan desu ga, anzen ya basho ni tsuite gakkō no rūru o mamoru hitsuyō ga arimasu."
            }
        ],

        {
            ja: [
                "保護者：日本の学校では、給食や掃除も子どもたちが一緒に行うと聞きました。",
                "先生：学校によって違いはありますが、子どもたちが役割を分担して活動することがあります。",
                "保護者：給食当番になったときは、特別に準備する物がありますか。",
                "先生：必要な物や衛生上の決まりは学校によって異なるので、学校からの案内を確認してください。",
                "保護者：休み時間は自由に遊べるのでしょうか。",
                "先生：基本的には休憩の時間ですが、安全や場所について学校のルールを守る必要があります。"
            ],

            en: [
                "Parent: I heard that in Japanese schools, children may take part in serving lunch and cleaning together.",
                "Teacher: It differs by school, but children may share different roles and carry out activities together.",
                "Parent: When my child is on school lunch duty, are there any special items to prepare?",
                "Teacher: Required items and hygiene rules differ by school, so please check the information provided by your school.",
                "Parent: Can children play freely during break time?",
                "Teacher: It is basically a time for rest, but students need to follow school rules regarding safety and where they may play."
            ],

            "zh-CN": [
                "家长：我听说在日本的学校里，孩子们也会一起参加午餐分发和打扫。",
                "老师：每所学校可能不同，不过孩子们有时会分担不同的角色进行活动。",
                "家长：轮到午餐值日时，需要特别准备什么吗？",
                "老师：所需物品和卫生规定因学校而异，请确认学校发来的通知。",
                "家长：休息时间可以自由玩耍吗？",
                "老师：基本上是休息时间，但在安全和活动地点方面需要遵守学校规定。"
            ],

            "zh-TW": [
                "家長：我聽說在日本的學校裡，孩子們也會一起參加午餐分發和打掃。",
                "老師：每所學校可能不同，不過孩子們有時會分擔不同的角色進行活動。",
                "家長：輪到午餐值日時，需要特別準備什麼嗎？",
                "老師：所需物品和衛生規定因學校而異，請確認學校發來的通知。",
                "家長：休息時間可以自由玩耍嗎？",
                "老師：基本上是休息時間，但在安全和活動地點方面需要遵守學校規定。"
            ],

            ko: [
                "보호자: 일본 학교에서는 급식이나 청소도 아이들이 함께 한다고 들었습니다.",
                "교사: 학교마다 차이는 있지만 아이들이 역할을 나누어 활동하는 경우가 있습니다.",
                "보호자: 급식 당번이 되었을 때 특별히 준비할 것이 있나요?",
                "교사: 필요한 물건과 위생 규칙은 학교마다 다르므로 학교 안내를 확인해 주세요.",
                "보호자: 쉬는 시간에는 자유롭게 놀 수 있나요?",
                "교사: 기본적으로 휴식 시간이지만 안전과 장소에 관한 학교 규칙을 지켜야 합니다."
            ],

            vi: [
                "Phụ huynh: Tôi nghe nói ở trường Nhật, trẻ cũng cùng nhau phục vụ bữa trưa và dọn vệ sinh.",
                "Giáo viên: Mỗi trường có thể khác nhau, nhưng trẻ có thể chia nhau các vai trò để cùng hoạt động.",
                "Phụ huynh: Khi đến lượt trực bữa trưa, có cần chuẩn bị đồ đặc biệt không?",
                "Giáo viên: Đồ cần thiết và quy định vệ sinh khác nhau tùy trường, nên hãy kiểm tra thông báo của trường.",
                "Phụ huynh: Trong giờ nghỉ, trẻ có thể tự do chơi không?",
                "Giáo viên: Về cơ bản đó là thời gian nghỉ, nhưng trẻ cần tuân theo quy định của trường về an toàn và địa điểm."
            ]
        }
    ),

    // =====================================================
    // 005 当番や係活動について理解する
    // =====================================================

    makeB1SchoolLifeDialogue(
        "b1_schoollife_005",
        "当番や係活動について理解する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが「係になった」と言っていましたが、どのような活動なのかわかりません。",
                target: "こどもがかかりになったといっていましたが どのようなかつどうなのかわかりません",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが「<ruby>係<rt>かかり</rt></ruby>になった」と<ruby>言<rt>い</rt></ruby>っていましたが、どのような<ruby>活動<rt>かつどう</rt></ruby>なのかわかりません。",
                romaji: "Kodomo ga 'kakari ni natta' to itte imashita ga, dono yō na katsudō na no ka wakarimasen."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "係活動では、子どもたちがクラスのために必要な役割を担当することがあります。",
                target: "かかりかつどうでは こどもたちがくらすのためにひつようなやくわりをたんとうすることがあります",
                ruby: "<ruby>係活動<rt>かかりかつどう</rt></ruby>では、<ruby>子<rt>こ</rt></ruby>どもたちがクラスのために<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>役割<rt>やくわり</rt></ruby>を<ruby>担当<rt>たんとう</rt></ruby>することがあります。",
                romaji: "Kakari katsudō de wa, kodomotachi ga kurasu no tame ni hitsuyō na yakuwari o tantō suru koto ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "例えば、どのような役割がありますか。",
                target: "たとえば どのようなやくわりがありますか",
                ruby: "<ruby>例<rt>たと</rt></ruby>えば、どのような<ruby>役割<rt>やくわり</rt></ruby>がありますか。",
                romaji: "Tatoeba, dono yō na yakuwari ga arimasu ka."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "本の整理や掲示物の管理など、クラスによってさまざまな係があります。",
                target: "ほんのせいりやけいじぶつのかんりなど くらすによってさまざまなかかりがあります",
                ruby: "<ruby>本<rt>ほん</rt></ruby>の<ruby>整理<rt>せいり</rt></ruby>や<ruby>掲示物<rt>けいじぶつ</rt></ruby>の<ruby>管理<rt>かんり</rt></ruby>など、クラスによってさまざまな<ruby>係<rt>かかり</rt></ruby>があります。",
                romaji: "Hon no seiri ya keijibutsu no kanri nado, kurasu ni yotte samazama na kakari ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが役割を忘れてしまった場合は、どうしたらいいでしょうか。",
                target: "こどもがやくわりをわすれてしまったばあいは どうしたらいいでしょうか",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>役割<rt>やくわり</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れてしまった<ruby>場合<rt>ばあい</rt></ruby>は、どうしたらいいでしょうか。",
                romaji: "Kodomo ga yakuwari o wasurete shimatta baai wa, dō shitara ii deshō ka."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "まずは自分で確認するように声をかけ、困っている場合は担任に相談してください。",
                target: "まずはじぶんでかくにんするようにこえをかけ こまっているばあいはたんにんにそうだんしてください",
                ruby: "まずは<ruby>自分<rt>じぶん</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>するように<ruby>声<rt>こえ</rt></ruby>をかけ、<ruby>困<rt>こま</rt></ruby>っている<ruby>場合<rt>ばあい</rt></ruby>は<ruby>担任<rt>たんにん</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>してください。",
                romaji: "Mazu wa jibun de kakunin suru yō ni koe o kake, komatte iru baai wa tannin ni sōdan shite kudasai."
            }
        ],

        {
            ja: [
                "保護者：子どもが「係になった」と言っていましたが、どのような活動なのかわかりません。",
                "先生：係活動では、子どもたちがクラスのために必要な役割を担当することがあります。",
                "保護者：例えば、どのような役割がありますか。",
                "先生：本の整理や掲示物の管理など、クラスによってさまざまな係があります。",
                "保護者：子どもが役割を忘れてしまった場合は、どうしたらいいでしょうか。",
                "先生：まずは自分で確認するように声をかけ、困っている場合は担任に相談してください。"
            ],

            en: [
                "Parent: My child said, “I got a class duty,” but I do not know what kind of activity it is.",
                "Teacher: In classroom duty activities, children may take responsibility for roles needed by the class.",
                "Parent: For example, what kinds of roles are there?",
                "Teacher: Depending on the class, there may be different roles such as organizing books or managing classroom displays.",
                "Parent: What should I do if my child forgets the assigned responsibility?",
                "Teacher: First, encourage your child to check independently, and if your child is having difficulty, please consult the homeroom teacher."
            ],

            "zh-CN": [
                "家长：孩子说“我负责一个班级任务”，但我不知道是什么活动。",
                "老师：在班级分工活动中，孩子们有时会负责班级需要的不同角色。",
                "家长：例如，有哪些角色？",
                "老师：根据班级不同，会有整理书籍、管理张贴物等各种任务。",
                "家长：如果孩子忘记了自己的任务，应该怎么办？",
                "老师：首先提醒孩子自己确认，如果遇到困难，请向班主任咨询。"
            ],

            "zh-TW": [
                "家長：孩子說「我負責一個班級任務」，但我不知道是什麼活動。",
                "老師：在班級分工活動中，孩子們有時會負責班級需要的不同角色。",
                "家長：例如，有哪些角色？",
                "老師：根據班級不同，會有整理書籍、管理張貼物等各種任務。",
                "家長：如果孩子忘記了自己的任務，應該怎麼辦？",
                "老師：首先提醒孩子自己確認，如果遇到困難，請向導師諮詢。"
            ],

            ko: [
                "보호자: 아이가 '담당 역할을 맡았다'고 했는데 어떤 활동인지 모르겠습니다.",
                "교사: 역할 활동에서는 아이들이 학급에 필요한 일을 담당하기도 합니다.",
                "보호자: 예를 들면 어떤 역할이 있나요?",
                "교사: 책 정리나 게시물 관리 등 학급에 따라 다양한 역할이 있습니다.",
                "보호자: 아이가 역할을 잊어버리면 어떻게 해야 하나요?",
                "교사: 먼저 스스로 확인하도록 이야기하고 어려워할 경우 담임교사에게 상담해 주세요."
            ],

            vi: [
                "Phụ huynh: Con tôi nói rằng cháu đã được giao một nhiệm vụ trong lớp, nhưng tôi không hiểu đó là hoạt động gì.",
                "Giáo viên: Trong hoạt động phân công, trẻ có thể đảm nhận những vai trò cần thiết cho lớp.",
                "Phụ huynh: Ví dụ có những vai trò nào?",
                "Giáo viên: Tùy lớp có nhiều nhiệm vụ khác nhau như sắp xếp sách hoặc quản lý bảng thông báo.",
                "Phụ huynh: Nếu con quên nhiệm vụ của mình thì nên làm gì?",
                "Giáo viên: Trước hết hãy khuyến khích trẻ tự kiểm tra, và nếu gặp khó khăn thì hãy trao đổi với giáo viên chủ nhiệm."
            ]
        }
    ),

    // =====================================================
    // 006 学校行事と予定変更を確認する
    // =====================================================

    makeB1SchoolLifeDialogue(
        "b1_schoollife_006",
        "学校行事と予定変更を確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "学校行事が多いので、どの行事に保護者が参加するのか確認したいです。",
                target: "がっこうぎょうじがおおいので どのぎょうじにほごしゃがさんかするのかかくにんしたいです",
                ruby: "<ruby>学校行事<rt>がっこうぎょうじ</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いので、どの<ruby>行事<rt>ぎょうじ</rt></ruby>に<ruby>保護者<rt>ほごしゃ</rt></ruby>が<ruby>参加<rt>さんか</rt></ruby>するのか<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Gakkō gyōji ga ōi node, dono gyōji ni hogosha ga sanka suru no ka kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "年間予定表に主な行事が書かれていますが、詳しい案内は行事の前にお知らせします。",
                target: "ねんかんよていひょうにおもなぎょうじがかかれていますが くわしいあんないはぎょうじのまえにおしらせします",
                ruby: "<ruby>年間予定表<rt>ねんかんよていひょう</rt></ruby>に<ruby>主<rt>おも</rt></ruby>な<ruby>行事<rt>ぎょうじ</rt></ruby>が<ruby>書<rt>か</rt></ruby>かれていますが、<ruby>詳<rt>くわ</rt></ruby>しい<ruby>案内<rt>あんない</rt></ruby>は<ruby>行事<rt>ぎょうじ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>にお<ruby>知<rt>し</rt></ruby>らせします。",
                romaji: "Nenkan yoteihyō ni omona gyōji ga kakarete imasu ga, kuwashii annai wa gyōji no mae ni oshirase shimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "雨や天候の影響で予定が変わる場合もありますか。",
                target: "あめやてんこうのえいきょうでよていがかわるばあいもありますか",
                ruby: "<ruby>雨<rt>あめ</rt></ruby>や<ruby>天候<rt>てんこう</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>で<ruby>予定<rt>よてい</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる<ruby>場合<rt>ばあい</rt></ruby>もありますか。",
                romaji: "Ame ya tenkō no eikyō de yotei ga kawaru baai mo arimasu ka."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "はい。変更がある場合は、学校の連絡システムなどでできるだけ早くお知らせします。",
                target: "はい へんこうがあるばあいは がっこうのれんらくしすてむなどでできるだけはやくおしらせします",
                ruby: "はい。<ruby>変更<rt>へんこう</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>学校<rt>がっこう</rt></ruby>の<ruby>連絡<rt>れんらく</rt></ruby>システムなどでできるだけ<ruby>早<rt>はや</rt></ruby>くお<ruby>知<rt>し</rt></ruby>らせします。",
                romaji: "Hai. Henkō ga aru baai wa, gakkō no renraku shisutemu nado de dekiru dake hayaku oshirase shimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "仕事があるので、保護者の参加が必要な行事は早めに知りたいです。",
                target: "しごとがあるので ほごしゃのさんかがひつようなぎょうじははやめにしりたいです",
                ruby: "<ruby>仕事<rt>しごと</rt></ruby>があるので、<ruby>保護者<rt>ほごしゃ</rt></ruby>の<ruby>参加<rt>さんか</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>行事<rt>ぎょうじ</rt></ruby>は<ruby>早<rt>はや</rt></ruby>めに<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Shigoto ga aru node, hogosha no sanka ga hitsuyō na gyōji wa hayame ni shiritai desu."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "年間予定表と学校からのお知らせを確認し、不明な点は早めに学校へ質問してください。",
                target: "ねんかんよていひょうとがっこうからのおしらせをかくにんし ふめいなてんははやめにがっこうへしつもんしてください",
                ruby: "<ruby>年間予定表<rt>ねんかんよていひょう</rt></ruby>と<ruby>学校<rt>がっこう</rt></ruby>からのお<ruby>知<rt>し</rt></ruby>らせを<ruby>確認<rt>かくにん</rt></ruby>し、<ruby>不明<rt>ふめい</rt></ruby>な<ruby>点<rt>てん</rt></ruby>は<ruby>早<rt>はや</rt></ruby>めに<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>質問<rt>しつもん</rt></ruby>してください。",
                romaji: "Nenkan yoteihyō to gakkō kara no oshirase o kakunin shi, fumei na ten wa hayame ni gakkō e shitsumon shite kudasai."
            }
        ],

        {
            ja: [
                "保護者：学校行事が多いので、どの行事に保護者が参加するのか確認したいです。",
                "学校職員：年間予定表に主な行事が書かれていますが、詳しい案内は行事の前にお知らせします。",
                "保護者：雨や天候の影響で予定が変わる場合もありますか。",
                "学校職員：はい。変更がある場合は、学校の連絡システムなどでできるだけ早くお知らせします。",
                "保護者：仕事があるので、保護者の参加が必要な行事は早めに知りたいです。",
                "学校職員：年間予定表と学校からのお知らせを確認し、不明な点は早めに学校へ質問してください。"
            ],

            en: [
                "Parent: There are many school events, so I would like to check which ones require parents to participate.",
                "School Staff: The main events are listed in the annual schedule, and detailed information is provided before each event.",
                "Parent: Can schedules change because of rain or other weather conditions?",
                "School Staff: Yes. If there is a change, we will inform families as early as possible through the school's communication system or other methods.",
                "Parent: I work, so I would like to know early about events that require parent participation.",
                "School Staff: Please check the annual schedule and school notices, and ask the school early if anything is unclear."
            ],

            "zh-CN": [
                "家长：学校活动很多，所以我想确认哪些活动需要家长参加。",
                "学校工作人员：主要活动写在年度日程表中，详细通知会在活动前发出。",
                "家长：因为下雨或天气原因，日程也会改变吗？",
                "学校工作人员：会。如果有变化，我们会通过学校联系系统等尽早通知。",
                "家长：因为我要工作，所以希望尽早知道哪些活动需要家长参加。",
                "学校工作人员：请确认年度日程和学校通知，有不明白的地方请尽早向学校询问。"
            ],

            "zh-TW": [
                "家長：學校活動很多，所以我想確認哪些活動需要家長參加。",
                "學校工作人員：主要活動寫在年度日程表中，詳細通知會在活動前發出。",
                "家長：因為下雨或天氣原因，日程也會改變嗎？",
                "學校工作人員：會。如果有變化，我們會透過學校聯絡系統等儘早通知。",
                "家長：因為我要工作，所以希望儘早知道哪些活動需要家長參加。",
                "學校工作人員：請確認年度日程和學校通知，有不明白的地方請儘早向學校詢問。"
            ],

            ko: [
                "보호자: 학교 행사가 많아서 어떤 행사에 보호자가 참여해야 하는지 확인하고 싶습니다.",
                "학교 직원: 연간 일정표에 주요 행사가 적혀 있고 자세한 안내는 행사 전에 알려 드립니다.",
                "보호자: 비나 날씨 때문에 일정이 바뀌는 경우도 있나요?",
                "학교 직원: 네. 변경이 있을 경우 학교 연락 시스템 등을 통해 가능한 한 빨리 알려 드립니다.",
                "보호자: 일을 하고 있어서 보호자 참여가 필요한 행사는 일찍 알고 싶습니다.",
                "학교 직원: 연간 일정표와 학교 안내를 확인하고 모르는 점은 일찍 학교에 질문해 주세요."
            ],

            vi: [
                "Phụ huynh: Có nhiều sự kiện ở trường nên tôi muốn xác nhận những sự kiện nào phụ huynh cần tham gia.",
                "Nhân viên trường học: Các sự kiện chính được ghi trong lịch năm, còn thông tin chi tiết sẽ được gửi trước mỗi sự kiện.",
                "Phụ huynh: Lịch có thể thay đổi do mưa hoặc thời tiết không?",
                "Nhân viên trường học: Có. Nếu có thay đổi, chúng tôi sẽ thông báo sớm nhất có thể qua hệ thống liên lạc của trường hoặc phương thức khác.",
                "Phụ huynh: Vì tôi đi làm nên muốn biết sớm những sự kiện cần phụ huynh tham gia.",
                "Nhân viên trường học: Hãy kiểm tra lịch năm và thông báo từ trường, và hỏi nhà trường sớm nếu có điểm nào chưa rõ."
            ]
        }
    ),

    // =====================================================
    // 007 欠席・遅刻・早退を連絡する
    // =====================================================

    makeB1SchoolLifeDialogue(
        "b1_schoollife_007",
        "欠席・遅刻・早退を連絡する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが朝から体調を崩しているので、今日は学校を休ませたいです。",
                target: "こどもがあさからたいちょうをくずしているので きょうはがっこうをやすませたいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>朝<rt>あさ</rt></ruby>から<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>しているので、<ruby>今日<rt>きょう</rt></ruby>は<ruby>学校<rt>がっこう</rt></ruby>を<ruby>休<rt>やす</rt></ruby>ませたいです。",
                romaji: "Kodomo ga asa kara taichō o kuzushite iru node, kyō wa gakkō o yasumasetai desu."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "わかりました。学校で決められた方法で、欠席の理由も一緒に連絡してください。",
                target: "わかりました がっこうできめられたほうほうで けっせきのりゆうもいっしょにれんらくしてください",
                ruby: "わかりました。<ruby>学校<rt>がっこう</rt></ruby>で<ruby>決<rt>き</rt></ruby>められた<ruby>方法<rt>ほうほう</rt></ruby>で、<ruby>欠席<rt>けっせき</rt></ruby>の<ruby>理由<rt>りゆう</rt></ruby>も<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>してください。",
                romaji: "Wakarimashita. Gakkō de kimerareta hōhō de, kesseki no riyū mo issho ni renraku shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "病院へ行ってから遅れて登校できそうな場合は、どうすればいいですか。",
                target: "びょういんへいってからおくれてとうこうできそうなばあいは どうすればいいですか",
                ruby: "<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってから<ruby>遅<rt>おく</rt></ruby>れて<ruby>登校<rt>とうこう</rt></ruby>できそうな<ruby>場合<rt>ばあい</rt></ruby>は、どうすればいいですか。",
                romaji: "Byōin e itte kara okurete tōkō dekisō na baai wa, dō sureba ii desu ka."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "遅れて登校する予定であることと、到着する予定時刻を学校へ連絡してください。",
                target: "おくれてとうこうするよていであることと とうちゃくするよていじこくをがっこうへれんらくしてください",
                ruby: "<ruby>遅<rt>おく</rt></ruby>れて<ruby>登校<rt>とうこう</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>であることと、<ruby>到着<rt>とうちゃく</rt></ruby>する<ruby>予定時刻<rt>よていじこく</rt></ruby>を<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>連絡<rt>れんらく</rt></ruby>してください。",
                romaji: "Okurete tōkō suru yotei de aru koto to, tōchaku suru yotei jikoku o gakkō e renraku shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "家庭の用事で早退させたい場合も、事前に連絡が必要ですか。",
                target: "かていのようじでそうたいさせたいばあいも じぜんにれんらくがひつようですか",
                ruby: "<ruby>家庭<rt>かてい</rt></ruby>の<ruby>用事<rt>ようじ</rt></ruby>で<ruby>早退<rt>そうたい</rt></ruby>させたい<ruby>場合<rt>ばあい</rt></ruby>も、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>ですか。",
                romaji: "Katei no yōji de sōtai sasetai baai mo, jizen ni renraku ga hitsuyō desu ka."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "はい。安全に下校できるように、時間や迎えに来る人などを事前に確認します。",
                target: "はい あんぜんにげこうできるように じかんやむかえにくるひとなどをじぜんにかくにんします",
                ruby: "はい。<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>下校<rt>げこう</rt></ruby>できるように、<ruby>時間<rt>じかん</rt></ruby>や<ruby>迎<rt>むか</rt></ruby>えに<ruby>来<rt>く</rt></ruby>る<ruby>人<rt>ひと</rt></ruby>などを<ruby>事前<rt>じぜん</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>します。",
                romaji: "Hai. Anzen ni gekō dekiru yō ni, jikan ya mukae ni kuru hito nado o jizen ni kakunin shimasu."
            }
        ],

        {
            ja: [
                "保護者：子どもが朝から体調を崩しているので、今日は学校を休ませたいです。",
                "学校職員：わかりました。学校で決められた方法で、欠席の理由も一緒に連絡してください。",
                "保護者：病院へ行ってから遅れて登校できそうな場合は、どうすればいいですか。",
                "学校職員：遅れて登校する予定であることと、到着する予定時刻を学校へ連絡してください。",
                "保護者：家庭の用事で早退させたい場合も、事前に連絡が必要ですか。",
                "学校職員：はい。安全に下校できるように、時間や迎えに来る人などを事前に確認します。"
            ],

            en: [
                "Parent: My child has been unwell since this morning, so I would like my child to stay home from school today.",
                "School Staff: I understand. Please contact the school using the designated method and include the reason for the absence.",
                "Parent: What should I do if my child may be able to come to school late after visiting the hospital?",
                "School Staff: Please inform the school that your child plans to arrive late and provide the expected arrival time.",
                "Parent: If I want my child to leave school early for a family matter, do I also need to contact the school in advance?",
                "School Staff: Yes. To ensure your child leaves safely, we confirm the time and who will pick up your child in advance."
            ],

            "zh-CN": [
                "家长：孩子从早上开始身体不舒服，所以今天想让孩子请假。",
                "学校工作人员：明白了。请按照学校规定的方法联系，并一起说明缺席理由。",
                "家长：如果去医院以后可能可以晚一点到校，应该怎么办？",
                "学校工作人员：请联系学校，说明孩子会迟到以及预计到校时间。",
                "家长：如果因为家庭事务需要让孩子早退，也需要提前联系吗？",
                "学校工作人员：是的。为了让孩子安全离校，我们会提前确认时间以及谁来接孩子。"
            ],

            "zh-TW": [
                "家長：孩子從早上開始身體不舒服，所以今天想讓孩子請假。",
                "學校工作人員：明白了。請按照學校規定的方法聯絡，並一起說明缺席理由。",
                "家長：如果去醫院以後可能可以晚一點到校，應該怎麼辦？",
                "學校工作人員：請聯絡學校，說明孩子會遲到以及預計到校時間。",
                "家長：如果因為家庭事務需要讓孩子早退，也需要提前聯絡嗎？",
                "學校工作人員：是的。為了讓孩子安全離校，我們會提前確認時間以及誰來接孩子。"
            ],

            ko: [
                "보호자: 아이가 아침부터 몸이 좋지 않아서 오늘은 학교를 쉬게 하고 싶습니다.",
                "학교 직원: 알겠습니다. 학교에서 정한 방법으로 결석 이유와 함께 연락해 주세요.",
                "보호자: 병원에 다녀온 뒤 늦게라도 등교할 수 있을 것 같으면 어떻게 해야 하나요?",
                "학교 직원: 늦게 등교할 예정이라는 것과 예상 도착 시간을 학교에 알려 주세요.",
                "보호자: 가정 사정으로 조퇴시키고 싶을 때도 미리 연락해야 하나요?",
                "학교 직원: 네. 안전하게 하교할 수 있도록 시간과 데리러 오는 사람 등을 미리 확인합니다."
            ],

            vi: [
                "Phụ huynh: Con tôi không khỏe từ sáng nên hôm nay tôi muốn cho cháu nghỉ học.",
                "Nhân viên trường học: Tôi hiểu. Hãy liên lạc theo phương thức nhà trường quy định và thông báo cả lý do nghỉ học.",
                "Phụ huynh: Nếu sau khi đi bệnh viện, cháu có thể đến trường muộn thì phải làm gì?",
                "Nhân viên trường học: Hãy thông báo cho trường rằng cháu sẽ đến muộn và giờ dự kiến đến.",
                "Phụ huynh: Nếu muốn cho cháu về sớm vì việc gia đình, tôi cũng phải liên lạc trước phải không?",
                "Nhân viên trường học: Có. Để bảo đảm trẻ về an toàn, chúng tôi sẽ xác nhận trước thời gian và người đến đón."
            ]
        }
    ),

    // =====================================================
    // 008 学校からの連絡を理解して質問する
    // =====================================================

    makeB1SchoolLifeDialogue(
        "b1_schoollife_008",
        "学校からの連絡を理解して質問する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "学校からのお知らせに難しい日本語が多く、内容を正しく理解できないことがあります。",
                target: "がっこうからのおしらせにむずかしいにほんごがおおく ないようをただしくりかいできないことがあります",
                ruby: "<ruby>学校<rt>がっこう</rt></ruby>からのお<ruby>知<rt>し</rt></ruby>らせに<ruby>難<rt>むずか</rt></ruby>しい<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>多<rt>おお</rt></ruby>く、<ruby>内容<rt>ないよう</rt></ruby>を<ruby>正<rt>ただ</rt></ruby>しく<ruby>理解<rt>りかい</rt></ruby>できないことがあります。",
                romaji: "Gakkō kara no oshirase ni muzukashii Nihongo ga ōku, naiyō o tadashiku rikai dekinai koto ga arimasu."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "わからない部分があれば、そのままにせず学校へ質問してください。",
                target: "わからないぶぶんがあれば そのままにせずがっこうへしつもんしてください",
                ruby: "わからない<ruby>部分<rt>ぶぶん</rt></ruby>があれば、そのままにせず<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>質問<rt>しつもん</rt></ruby>してください。",
                romaji: "Wakaranai bubun ga areba, sono mama ni sezu gakkō e shitsumon shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "例えば、「これはいつまでに提出すればいいですか」と聞いてもいいでしょうか。",
                target: "たとえば これはいつまでにていしゅつすればいいですか ときいてもいいでしょうか",
                ruby: "<ruby>例<rt>たと</rt></ruby>えば、「これはいつまでに<ruby>提出<rt>ていしゅつ</rt></ruby>すればいいですか」と<ruby>聞<rt>き</rt></ruby>いてもいいでしょうか。",
                romaji: "Tatoeba, 'kore wa itsu made ni teishutsu sureba ii desu ka' to kiite mo ii deshō ka."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "もちろんです。期限や持ち物、参加の必要性など、大切な点は遠慮なく確認してください。",
                target: "もちろんです きげんやもちもの さんかのひつようせいなど たいせつなてんはえんりょなくかくにんしてください",
                ruby: "もちろんです。<ruby>期限<rt>きげん</rt></ruby>や<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>、<ruby>参加<rt>さんか</rt></ruby>の<ruby>必要性<rt>ひつようせい</rt></ruby>など、<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>点<rt>てん</rt></ruby>は<ruby>遠慮<rt>えんりょ</rt></ruby>なく<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Mochiron desu. Kigen ya mochimono, sanka no hitsuyōsei nado, taisetsu na ten wa enryo naku kakunin shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "電話でうまく説明できないときは、連絡帳に書いても大丈夫ですか。",
                target: "でんわでうまくせつめいできないときは れんらくちょうにかいてもだいじょうぶですか",
                ruby: "<ruby>電話<rt>でんわ</rt></ruby>でうまく<ruby>説明<rt>せつめい</rt></ruby>できないときは、<ruby>連絡帳<rt>れんらくちょう</rt></ruby>に<ruby>書<rt>か</rt></ruby>いても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Denwa de umaku setsumei dekinai toki wa, renrakuchō ni kaite mo daijōbu desu ka."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "はい。学校の連絡方法を確認し、自分が伝えやすい方法について相談してください。",
                target: "はい がっこうのれんらくほうほうをかくにんし じぶんがつたえやすいほうほうについてそうだんしてください",
                ruby: "はい。<ruby>学校<rt>がっこう</rt></ruby>の<ruby>連絡方法<rt>れんらくほうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>し、<ruby>自分<rt>じぶん</rt></ruby>が<ruby>伝<rt>つた</rt></ruby>えやすい<ruby>方法<rt>ほうほう</rt></ruby>について<ruby>相談<rt>そうだん</rt></ruby>してください。",
                romaji: "Hai. Gakkō no renraku hōhō o kakunin shi, jibun ga tsutaeyasui hōhō ni tsuite sōdan shite kudasai."
            }
        ],

        {
            ja: [
                "保護者：学校からのお知らせに難しい日本語が多く、内容を正しく理解できないことがあります。",
                "担任：わからない部分があれば、そのままにせず学校へ質問してください。",
                "保護者：例えば、「これはいつまでに提出すればいいですか」と聞いてもいいでしょうか。",
                "担任：もちろんです。期限や持ち物、参加の必要性など、大切な点は遠慮なく確認してください。",
                "保護者：電話でうまく説明できないときは、連絡帳に書いても大丈夫ですか。",
                "担任：はい。学校の連絡方法を確認し、自分が伝えやすい方法について相談してください。"
            ],

            en: [
                "Parent: School notices often contain difficult Japanese, and sometimes I cannot fully understand the content.",
                "Homeroom Teacher: If there is something you do not understand, please ask the school instead of leaving it unclear.",
                "Parent: For example, is it okay to ask, “By when do I need to submit this?”",
                "Homeroom Teacher: Of course. Please freely check important details such as deadlines, required items, and whether participation is necessary.",
                "Parent: If I cannot explain myself well by phone, is it okay to write in the communication notebook?",
                "Homeroom Teacher: Yes. Please check the school's communication methods and discuss which method is easiest for you to use."
            ],

            "zh-CN": [
                "家长：学校的通知里有很多难懂的日语，有时我不能正确理解内容。",
                "班主任：如果有不明白的部分，不要放着不管，请向学校询问。",
                "家长：例如，我可以问“这个最晚什么时候提交？”吗？",
                "班主任：当然可以。期限、携带物品、是否必须参加等重要事项，请不要客气地确认。",
                "家长：如果打电话时无法很好地说明，可以写在联系本上吗？",
                "班主任：可以。请确认学校的联系方法，并咨询适合您表达的方法。"
            ],

            "zh-TW": [
                "家長：學校的通知裡有很多難懂的日語，有時我不能正確理解內容。",
                "導師：如果有不明白的部分，不要放著不管，請向學校詢問。",
                "家長：例如，我可以問「這個最晚什麼時候提交？」嗎？",
                "導師：當然可以。期限、攜帶物品、是否必須參加等重要事項，請不要客氣地確認。",
                "家長：如果打電話時無法很好地說明，可以寫在聯絡簿上嗎？",
                "導師：可以。請確認學校的聯絡方法，並諮詢適合您表達的方法。"
            ],

            ko: [
                "보호자: 학교 안내문에 어려운 일본어가 많아서 내용을 정확히 이해하지 못할 때가 있습니다.",
                "담임교사: 모르는 부분이 있으면 그대로 두지 말고 학교에 질문해 주세요.",
                "보호자: 예를 들어 '이것은 언제까지 제출해야 하나요?'라고 물어봐도 될까요?",
                "담임교사: 물론입니다. 기한, 준비물, 참여 필요 여부 등 중요한 점은 부담 없이 확인해 주세요.",
                "보호자: 전화로 잘 설명하지 못할 때는 연락장에 써도 괜찮나요?",
                "담임교사: 네. 학교의 연락 방법을 확인하고 자신이 전달하기 쉬운 방법에 대해 상담해 주세요."
            ],

            vi: [
                "Phụ huynh: Thông báo của trường có nhiều tiếng Nhật khó, nên đôi khi tôi không thể hiểu chính xác nội dung.",
                "Giáo viên chủ nhiệm: Nếu có phần không hiểu, đừng để nguyên như vậy mà hãy hỏi nhà trường.",
                "Phụ huynh: Ví dụ, tôi có thể hỏi “Tôi phải nộp cái này trước khi nào?” không?",
                "Giáo viên chủ nhiệm: Tất nhiên. Hãy thoải mái xác nhận những điểm quan trọng như thời hạn, đồ cần mang và việc có cần tham gia hay không.",
                "Phụ huynh: Nếu tôi không thể giải thích tốt qua điện thoại, tôi có thể viết vào sổ liên lạc không?",
                "Giáo viên chủ nhiệm: Có. Hãy kiểm tra phương thức liên lạc của trường và trao đổi về cách nào thuận tiện nhất để bạn truyền đạt."
            ]
        }
    )

];