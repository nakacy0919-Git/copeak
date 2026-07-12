// =====================================================
// Japeak B1 Level
// Scene: 学校生活でのトラブルに対処しよう
// File: data/japeak-b1-school-trouble.js
// Category Key: b1_school_trouble
// =====================================================

const b1SchoolTroubleLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1SchoolTroubleTranslations(translations) {
    const completed = {};

    b1SchoolTroubleLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1SchoolTroubleContext = {
    ja: "学校生活で困ったことが起きたときに、友達とのけんか、仲間に入れない悩み、からかいや嫌な言葉、紛失物、授業の困難、学校のルール、インターネット上のトラブル、深刻な悩みなどについて、状況を説明したり助けを求めたりする日本語を練習します。",

    en: "Practice Japanese for dealing with problems at school, including arguments with friends, feeling left out, teasing and hurtful words, lost belongings, difficulty understanding lessons, school rules, online problems, and serious concerns that require support.",

    "zh-CN": "练习在学校生活中遇到问题时使用的日语，包括与朋友争吵、无法融入集体、被取笑或听到伤人的话、丢失物品、听不懂课程、误解学校规定、网络问题以及需要帮助的严重烦恼。",

    "zh-TW": "練習在學校生活中遇到問題時使用的日語，包括與朋友爭吵、無法融入團體、被取笑或聽到傷人的話、遺失物品、聽不懂課程、誤解學校規定、網路問題以及需要幫助的嚴重煩惱。",

    ko: "학교생활에서 문제가 생겼을 때 친구와의 다툼, 소외감, 놀림이나 상처 주는 말, 분실물, 수업 이해의 어려움, 학교 규칙, 인터넷상의 문제, 심각한 고민 등에 대해 상황을 설명하고 도움을 요청하는 일본어를 연습합니다.",

    vi: "Luyện tiếng Nhật để xử lý những rắc rối trong đời sống trường học, bao gồm cãi nhau với bạn, cảm giác bị đứng ngoài nhóm, bị trêu chọc hoặc nói lời làm tổn thương, mất đồ, khó hiểu bài, hiểu nhầm quy định trường học, rắc rối trên mạng và những vấn đề nghiêm trọng cần được hỗ trợ.",

    tl: "Practice Japanese for dealing with problems at school, including arguments, feeling excluded, teasing, hurtful words, lost belongings, difficulty with lessons, school rules, online problems, and serious concerns.",

    id: "Latihan bahasa Jepang untuk menghadapi masalah di sekolah, termasuk pertengkaran dengan teman, merasa dikucilkan, ejekan atau kata-kata yang menyakitkan, kehilangan barang, kesulitan memahami pelajaran, aturan sekolah, masalah daring, dan masalah serius yang membutuhkan bantuan.",

    th: "ฝึกภาษาญี่ปุ่นสำหรับรับมือกับปัญหาในโรงเรียน เช่น การทะเลาะกับเพื่อน การรู้สึกถูกกันออกจากกลุ่ม การถูกล้อหรือพูดจาทำร้ายจิตใจ ของหาย การเรียนไม่เข้าใจ ความเข้าใจผิดเกี่ยวกับกฎของโรงเรียน ปัญหาออนไลน์ และปัญหาร้ายแรงที่ต้องขอความช่วยเหลือ",

    my: "ကျောင်းဘဝတွင် ပြဿနာဖြစ်သည့်အခါ သူငယ်ချင်းနှင့် ရန်ဖြစ်ခြင်း၊ အုပ်စုထဲ မဝင်နိုင်ခြင်း၊ လှောင်ပြောင်ခြင်း၊ စိတ်ထိခိုက်စေသောစကားများ၊ ပစ္စည်းပျောက်ဆုံးခြင်း၊ စာသင်ခန်းတွင် နားမလည်ခြင်း၊ ကျောင်းစည်းကမ်း၊ အွန်လိုင်းပြဿနာများနှင့် အရေးကြီးသောစိုးရိမ်မှုများကို ရှင်းပြပြီး အကူအညီတောင်းရန် ဂျပန်စကားကို လေ့ကျင့်ပါ။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់ដោះស្រាយបញ្ហានៅសាលា រួមមានការឈ្លោះជាមួយមិត្ត ការមានអារម្មណ៍ថាត្រូវបានដកចេញពីក្រុម ការត្រូវគេចំអក ឬនិយាយពាក្យធ្វើឱ្យឈឺចិត្ត ការបាត់របស់ ការលំបាកយល់មេរៀន ច្បាប់សាលា បញ្ហាតាមអ៊ីនធឺណិត និងបញ្ហាធ្ងន់ធ្ងរដែលត្រូវការជំនួយ។",

    ne: "विद्यालयमा समस्या हुँदा साथीहरूसँग झगडा, समूहबाट अलग भएको महसुस, जिस्क्याउने वा दुःख दिने शब्द, सामान हराउने, पाठ नबुझ्ने, विद्यालयका नियम, अनलाइन समस्या तथा गम्भीर चिन्ताबारे जापानीमा अवस्था बताउने र सहयोग माग्ने अभ्यास।",

    mn: "Сургуулийн амьдралд асуудал гарах үед найзтайгаа маргалдах, бүлгээс гадуурхагдсан мэт санагдах, шоолуулах эсвэл гомдоох үг сонсох, эд зүйлээ алдах, хичээл ойлгохгүй байх, сургуулийн дүрэм, онлайн асуудал болон ноцтой санаа зовнилын талаар япон хэлээр тайлбарлаж, тусламж хүсэх дадлага.",

    si: "පාසල් ජීවිතයේ ගැටලු ඇති වූ විට මිතුරන් සමඟ ගැටුම්, කණ්ඩායමෙන් වෙන්වී ඇති බව දැනීම, විහිළු කිරීම හෝ සිත් රිදවන වචන, භාණ්ඩ නැති වීම, පාඩම් තේරුම් ගැනීමේ අපහසුතා, පාසල් නීති, අන්තර්ජාල ගැටලු සහ බරපතළ කනස්සල්ල පිළිබඳ ජපන් භාෂාවෙන් පැහැදිලි කර උදව් ඉල්ලීමට පුහුණු වීම.",

    bn: "স্কুল জীবনে সমস্যা হলে বন্ধুদের সঙ্গে ঝগড়া, দল থেকে বাদ পড়ার অনুভূতি, ঠাট্টা বা কষ্টদায়ক কথা, জিনিস হারানো, পড়া বুঝতে অসুবিধা, স্কুলের নিয়ম, অনলাইন সমস্যা এবং গুরুতর উদ্বেগ সম্পর্কে জাপানিতে পরিস্থিতি ব্যাখ্যা ও সাহায্য চাওয়ার অনুশীলন।",

    pt: "Prática de japonês para lidar com problemas na escola, incluindo brigas com amigos, sensação de exclusão, provocações e palavras ofensivas, objetos perdidos, dificuldade para entender as aulas, regras escolares, problemas online e preocupações sérias que exigem apoio.",

    es: "Práctica de japonés para afrontar problemas en la escuela, incluyendo peleas con amigos, sensación de exclusión, burlas y palabras hirientes, objetos perdidos, dificultad para comprender las clases, reglas escolares, problemas en internet y preocupaciones serias que requieren apoyo.",

    fr: "Entraînement en japonais pour faire face aux problèmes à l'école, notamment les disputes avec des amis, le sentiment d'exclusion, les moqueries et paroles blessantes, les objets perdus, les difficultés à comprendre les cours, les règles scolaires, les problèmes en ligne et les préoccupations sérieuses nécessitant du soutien.",

    ru: "Практика японского языка для решения проблем в школе: ссоры с друзьями, чувство исключённости, насмешки и обидные слова, потерянные вещи, трудности с пониманием уроков, школьные правила, проблемы в интернете и серьёзные переживания, требующие помощи.",

    uk: "Практика японської мови для вирішення проблем у школі: сварки з друзями, відчуття виключеності, насмішки та образливі слова, загублені речі, труднощі з розумінням уроків, шкільні правила, проблеми в інтернеті та серйозні переживання, що потребують допомоги."
};

const b1SchoolTroubleSpeakerNames = {

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

    counselor: {
        ja: "相談員",
        en: "Counselor",
        "zh-CN": "咨询员",
        "zh-TW": "諮詢員",
        ko: "상담원",
        vi: "Nhân viên tư vấn",
        tl: "Counselor",
        id: "Konselor",
        th: "ที่ปรึกษา",
        my: "အကြံပေး",
        km: "អ្នកប្រឹក្សា",
        ne: "परामर्शदाता",
        mn: "Зөвлөх",
        si: "උපදේශකයා",
        bn: "পরামর্শদাতা",
        pt: "Conselheiro",
        es: "Orientador",
        fr: "Conseiller",
        ru: "Консультант",
        uk: "Консультант"
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
        ru: "Сотрудник школы",
        uk: "Працівник школи"
    }
};

function makeB1SchoolTroubleDialogue(
    id,
    title,
    dialogue,
    dialogueTranslations
) {
    const fullDialogueTranslations =
        completeB1SchoolTroubleTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_school_trouble",

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
                b1SchoolTroubleSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1SchoolTroubleContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1SchoolTroubleData = [

    // =====================================================
    // 001 友達とのけんかについて先生に話す
    // =====================================================

    makeB1SchoolTroubleDialogue(
        "b1_schooltrouble_001",
        "友達とのけんかについて先生に話す",

        [
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "昨日、友達とけんかをしてしまって、まだうまく話せていません。",
                target: "きのう ともだちとけんかをしてしまって まだうまくはなせていません",
                ruby: "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>とけんかをしてしまって、まだうまく<ruby>話<rt>はな</rt></ruby>せていません。",
                romaji: "Kinō, tomodachi to kenka o shite shimatte, mada umaku hanasete imasen."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "そうだったのですね。何があったのか、順番に話してもらえますか。",
                target: "そうだったのですね なにがあったのか じゅんばんにはなしてもらえますか",
                ruby: "そうだったのですね。<ruby>何<rt>なに</rt></ruby>があったのか、<ruby>順番<rt>じゅんばん</rt></ruby>に<ruby>話<rt>はな</rt></ruby>してもらえますか。",
                romaji: "Sō datta no desu ne. Nani ga atta no ka, junban ni hanashite moraemasu ka."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "休み時間に遊び方について意見が合わなくて、お互いに強い言い方をしてしまいました。",
                target: "やすみじかんにあそびかたについていけんがあわなくて おたがいにつよいいいかたをしてしまいました",
                ruby: "<ruby>休<rt>やす</rt></ruby>み<ruby>時間<rt>じかん</rt></ruby>に<ruby>遊<rt>あそ</rt></ruby>び<ruby>方<rt>かた</rt></ruby>について<ruby>意見<rt>いけん</rt></ruby>が<ruby>合<rt>あ</rt></ruby>わなくて、お<ruby>互<rt>たが</rt></ruby>いに<ruby>強<rt>つよ</rt></ruby>い<ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>をしてしまいました。",
                romaji: "Yasumi jikan ni asobikata ni tsuite iken ga awanakute, otagai ni tsuyoi iikata o shite shimaimashita."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "自分が言ったことと、相手から言われたことを分けて考えてみましょう。",
                target: "じぶんがいったことと あいてからいわれたことをわけてかんがえてみましょう",
                ruby: "<ruby>自分<rt>じぶん</rt></ruby>が<ruby>言<rt>い</rt></ruby>ったことと、<ruby>相手<rt>あいて</rt></ruby>から<ruby>言<rt>い</rt></ruby>われたことを<ruby>分<rt>わ</rt></ruby>けて<ruby>考<rt>かんが</rt></ruby>えてみましょう。",
                romaji: "Jibun ga itta koto to, aite kara iwareta koto o wakete kangaete mimashō."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "私も言いすぎたと思いますが、相手の言葉にも傷つきました。",
                target: "わたしもいいすぎたとおもいますが あいてのことばにもきずつきました",
                ruby: "<ruby>私<rt>わたし</rt></ruby>も<ruby>言<rt>い</rt></ruby>いすぎたと<ruby>思<rt>おも</rt></ruby>いますが、<ruby>相手<rt>あいて</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>にも<ruby>傷<rt>きず</rt></ruby>つきました。",
                romaji: "Watashi mo iisugita to omoimasu ga, aite no kotoba ni mo kizutsukimashita."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "では、自分の気持ちを落ち着いて伝える方法を一緒に考えましょう。",
                target: "では じぶんのきもちをおちついてつたえるほうほうをいっしょにかんがえましょう",
                ruby: "では、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ちを<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて<ruby>伝<rt>つた</rt></ruby>える<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Dewa, jibun no kimochi o ochitsuite tsutaeru hōhō o issho ni kangaemashō."
            }
        ],

        {
            ja: [
                "児童：昨日、友達とけんかをしてしまって、まだうまく話せていません。",
                "先生：そうだったのですね。何があったのか、順番に話してもらえますか。",
                "児童：休み時間に遊び方について意見が合わなくて、お互いに強い言い方をしてしまいました。",
                "先生：自分が言ったことと、相手から言われたことを分けて考えてみましょう。",
                "児童：私も言いすぎたと思いますが、相手の言葉にも傷つきました。",
                "先生：では、自分の気持ちを落ち着いて伝える方法を一緒に考えましょう。"
            ],

            en: [
                "Student: Yesterday, I had an argument with a friend, and we still have not been able to talk properly.",
                "Teacher: I see. Can you tell me what happened in order?",
                "Student: During break, we disagreed about how to play and both spoke too harshly.",
                "Teacher: Let us think separately about what you said and what the other person said to you.",
                "Student: I think I also said too much, but the other person's words hurt me too.",
                "Teacher: Then let us think together about how you can calmly express your feelings."
            ],

            "zh-CN": [
                "学生：昨天我和朋友吵架了，到现在还没能好好说话。",
                "老师：原来是这样。可以按顺序告诉我发生了什么吗？",
                "学生：休息时间我们对怎么玩意见不合，双方都说了比较重的话。",
                "老师：我们把你自己说的话和对方对你说的话分开想一想吧。",
                "学生：我觉得自己也说过头了，但是对方的话也让我受伤了。",
                "老师：那么，我们一起想想如何冷静地表达自己的感受吧。"
            ],

            "zh-TW": [
                "學生：昨天我和朋友吵架了，到現在還沒能好好說話。",
                "老師：原來是這樣。可以按順序告訴我發生了什麼嗎？",
                "學生：休息時間我們對怎麼玩意見不合，雙方都說了比較重的話。",
                "老師：我們把你自己說的話和對方對你說的話分開想一想吧。",
                "學生：我覺得自己也說過頭了，但是對方的話也讓我受傷了。",
                "老師：那麼，我們一起想想如何冷靜地表達自己的感受吧。"
            ],

            ko: [
                "학생: 어제 친구와 싸워서 아직 제대로 이야기하지 못하고 있습니다.",
                "교사: 그랬군요. 무슨 일이 있었는지 순서대로 이야기해 줄 수 있나요?",
                "학생: 쉬는 시간에 놀이 방법에 대해 의견이 맞지 않아 서로 강하게 말했습니다.",
                "교사: 자신이 한 말과 상대에게 들은 말을 나누어 생각해 봅시다.",
                "학생: 저도 너무 심하게 말했다고 생각하지만 상대의 말에도 상처받았습니다.",
                "교사: 그러면 자신의 마음을 차분하게 전달하는 방법을 함께 생각해 봅시다."
            ],

            vi: [
                "Học sinh: Hôm qua em cãi nhau với một người bạn và đến giờ vẫn chưa thể nói chuyện bình thường.",
                "Giáo viên: Vậy à. Em có thể kể theo thứ tự chuyện gì đã xảy ra không?",
                "Học sinh: Trong giờ nghỉ, chúng em không thống nhất về cách chơi và cả hai đều nói những lời khá nặng.",
                "Giáo viên: Chúng ta hãy tách riêng điều em đã nói và điều người kia đã nói với em.",
                "Học sinh: Em nghĩ mình cũng đã nói quá lời, nhưng lời của bạn ấy cũng làm em tổn thương.",
                "Giáo viên: Vậy chúng ta hãy cùng nghĩ cách để em bình tĩnh nói ra cảm xúc của mình."
            ]
        }
    ),

    // =====================================================
    // 002 友達の輪に入れない悩みを相談する
    // =====================================================

    makeB1SchoolTroubleDialogue(
        "b1_schooltrouble_002",
        "友達の輪に入れない悩みを相談する",

        [
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "最近、休み時間に一人でいることが多くて、少し寂しいです。",
                target: "さいきん やすみじかんにひとりでいることがおおくて すこしさびしいです",
                ruby: "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>休<rt>やす</rt></ruby>み<ruby>時間<rt>じかん</rt></ruby>に<ruby>一人<rt>ひとり</rt></ruby>でいることが<ruby>多<rt>おお</rt></ruby>くて、<ruby>少<rt>すこ</rt></ruby>し<ruby>寂<rt>さび</rt></ruby>しいです。",
                romaji: "Saikin, yasumi jikan ni hitori de iru koto ga ōkute, sukoshi sabishii desu."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "話してくれてありがとう。友達と一緒にいたいけれど、入りにくいと感じていますか。",
                target: "はなしてくれてありがとう ともだちといっしょにいたいけれど はいりにくいとかんじていますか",
                ruby: "<ruby>話<rt>はな</rt></ruby>してくれてありがとう。<ruby>友達<rt>ともだち</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>にいたいけれど、<ruby>入<rt>はい</rt></ruby>りにくいと<ruby>感<rt>かん</rt></ruby>じていますか。",
                romaji: "Hanashite kurete arigatō. Tomodachi to issho ni itai keredo, hairinikui to kanjite imasu ka."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "はい。みんなが速く日本語で話すので、いつ声をかければいいかわかりません。",
                target: "はい みんながはやくにほんごではなすので いつこえをかければいいかわかりません",
                ruby: "はい。みんなが<ruby>速<rt>はや</rt></ruby>く<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>話<rt>はな</rt></ruby>すので、いつ<ruby>声<rt>こえ</rt></ruby>をかければいいかわかりません。",
                romaji: "Hai. Minna ga hayaku Nihongo de hanasu node, itsu koe o kakereba ii ka wakarimasen."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "日本語の速さだけでなく、話しかけるタイミングも難しいのですね。",
                target: "にほんごのはやさだけでなく はなしかけるたいみんぐもむずかしいのですね",
                ruby: "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>速<rt>はや</rt></ruby>さだけでなく、<ruby>話<rt>はな</rt></ruby>しかけるタイミングも<ruby>難<rt>むずか</rt></ruby>しいのですね。",
                romaji: "Nihongo no hayasa dake de naku, hanashikakeru taimingu mo muzukashii no desu ne."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "一緒に遊びたい気持ちはありますが、断られるのが怖いです。",
                target: "いっしょにあそびたいきもちはありますが ことわられるのがこわいです",
                ruby: "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>遊<rt>あそ</rt></ruby>びたい<ruby>気持<rt>きも</rt></ruby>ちはありますが、<ruby>断<rt>ことわ</rt></ruby>られるのが<ruby>怖<rt>こわ</rt></ruby>いです。",
                romaji: "Issho ni asobitai kimochi wa arimasu ga, kotowarareru no ga kowai desu."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "では、言いやすい一言を考えたり、参加しやすい場面を一緒に探したりしましょう。",
                target: "では いいやすいひとことをかんがえたり さんかしやすいばめんをいっしょにさがしたりしましょう",
                ruby: "では、<ruby>言<rt>い</rt></ruby>いやすい<ruby>一言<rt>ひとこと</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えたり、<ruby>参加<rt>さんか</rt></ruby>しやすい<ruby>場面<rt>ばめん</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>探<rt>さが</rt></ruby>したりしましょう。",
                romaji: "Dewa, iiyasui hitokoto o kangaetari, sanka shiyasui bamen o issho ni sagashitari shimashō."
            }
        ],

        {
            ja: [
                "児童：最近、休み時間に一人でいることが多くて、少し寂しいです。",
                "担任：話してくれてありがとう。友達と一緒にいたいけれど、入りにくいと感じていますか。",
                "児童：はい。みんなが速く日本語で話すので、いつ声をかければいいかわかりません。",
                "担任：日本語の速さだけでなく、話しかけるタイミングも難しいのですね。",
                "児童：一緒に遊びたい気持ちはありますが、断られるのが怖いです。",
                "担任：では、言いやすい一言を考えたり、参加しやすい場面を一緒に探したりしましょう。"
            ],

            en: [
                "Student: Recently, I spend a lot of break time alone, and I feel a little lonely.",
                "Homeroom Teacher: Thank you for telling me. Do you want to be with your friends but find it hard to join them?",
                "Student: Yes. Everyone speaks Japanese quickly, so I do not know when to speak.",
                "Homeroom Teacher: So not only the speed of Japanese, but also the timing of joining the conversation is difficult.",
                "Student: I want to play together, but I am afraid they may say no.",
                "Homeroom Teacher: Then let us think of a simple phrase you can use and find situations where it may be easier to join."
            ],

            "zh-CN": [
                "学生：最近休息时间经常一个人待着，我觉得有点寂寞。",
                "班主任：谢谢你告诉我。你想和朋友在一起，但觉得很难加入他们吗？",
                "学生：是的。大家说日语很快，所以我不知道什么时候该开口。",
                "班主任：原来不只是日语的速度，找准开口的时机也很难。",
                "学生：我想和大家一起玩，但害怕被拒绝。",
                "班主任：那么，我们一起想一句容易说的话，也找找比较容易加入的场合吧。"
            ],

            "zh-TW": [
                "學生：最近休息時間經常一個人待著，我覺得有點寂寞。",
                "導師：謝謝你告訴我。你想和朋友在一起，但覺得很難加入他們嗎？",
                "學生：是的。大家說日語很快，所以我不知道什麼時候該開口。",
                "導師：原來不只是日語的速度，找準開口的時機也很難。",
                "學生：我想和大家一起玩，但害怕被拒絕。",
                "導師：那麼，我們一起想一句容易說的話，也找找比較容易加入的場合吧。"
            ],

            ko: [
                "학생: 최근 쉬는 시간에 혼자 있는 일이 많아서 조금 외롭습니다.",
                "담임교사: 이야기해 줘서 고마워요. 친구들과 함께 있고 싶지만 들어가기 어렵다고 느끼나요?",
                "학생: 네. 모두 일본어를 빨리 말해서 언제 말을 걸어야 할지 모르겠습니다.",
                "담임교사: 일본어 속도뿐 아니라 말을 거는 타이밍도 어렵군요.",
                "학생: 같이 놀고 싶은 마음은 있지만 거절당할까 봐 무섭습니다.",
                "담임교사: 그러면 말하기 쉬운 한마디를 생각하고 참여하기 쉬운 상황을 함께 찾아봅시다."
            ],

            vi: [
                "Học sinh: Gần đây trong giờ nghỉ em thường ở một mình nên cảm thấy hơi cô đơn.",
                "Giáo viên chủ nhiệm: Cảm ơn em đã nói với cô. Em muốn ở cùng các bạn nhưng cảm thấy khó tham gia đúng không?",
                "Học sinh: Vâng. Mọi người nói tiếng Nhật rất nhanh nên em không biết khi nào nên lên tiếng.",
                "Giáo viên chủ nhiệm: Vậy không chỉ tốc độ tiếng Nhật mà cả thời điểm bắt chuyện cũng khó.",
                "Học sinh: Em muốn chơi cùng nhưng sợ bị từ chối.",
                "Giáo viên chủ nhiệm: Vậy chúng ta hãy cùng nghĩ một câu dễ nói và tìm những tình huống em dễ tham gia hơn."
            ]
        }
    ),

    // =====================================================
    // 003 からかいや嫌な言葉について相談する
    // =====================================================

    makeB1SchoolTroubleDialogue(
        "b1_schooltrouble_003",
        "からかいや嫌な言葉について相談する",

        [
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "何人かの子に、私の話し方をまねされることがあって嫌です。",
                target: "なんにんかのこに わたしのはなしかたをまねされることがあっていやです",
                ruby: "<ruby>何人<rt>なんにん</rt></ruby>かの<ruby>子<rt>こ</rt></ruby>に、<ruby>私<rt>わたし</rt></ruby>の<ruby>話<rt>はな</rt></ruby>し<ruby>方<rt>かた</rt></ruby>をまねされることがあって<ruby>嫌<rt>いや</rt></ruby>です。",
                romaji: "Nannin ka no ko ni, watashi no hanashikata o mane sareru koto ga atte iya desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "それは嫌でしたね。いつごろから、どのような場面で起きていますか。",
                target: "それはいやでしたね いつごろから どのようなばめんでおきていますか",
                ruby: "それは<ruby>嫌<rt>いや</rt></ruby>でしたね。いつごろから、どのような<ruby>場面<rt>ばめん</rt></ruby>で<ruby>起<rt>お</rt></ruby>きていますか。",
                romaji: "Sore wa iya deshita ne. Itsu goro kara, dono yō na bamen de okite imasu ka."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "一週間くらい前からで、私が日本語を間違えたときによく笑われます。",
                target: "いっしゅうかんくらいまえからで わたしがにほんごをまちがえたときによくわらわれます",
                ruby: "<ruby>一週間<rt>いっしゅうかん</rt></ruby>くらい<ruby>前<rt>まえ</rt></ruby>からで、<ruby>私<rt>わたし</rt></ruby>が<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>間違<rt>まちが</rt></ruby>えたときによく<ruby>笑<rt>わら</rt></ruby>われます。",
                romaji: "Isshūkan kurai mae kara de, watashi ga Nihongo o machigaeta toki ni yoku warawaremasu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "あなたが嫌だと感じていることは大切なことです。ほかにも言われたことがありますか。",
                target: "あなたがいやだとかんじていることはたいせつなことです ほかにもいわれたことがありますか",
                ruby: "あなたが<ruby>嫌<rt>いや</rt></ruby>だと<ruby>感<rt>かん</rt></ruby>じていることは<ruby>大切<rt>たいせつ</rt></ruby>なことです。ほかにも<ruby>言<rt>い</rt></ruby>われたことがありますか。",
                romaji: "Anata ga iya da to kanjite iru koto wa taisetsu na koto desu. Hoka ni mo iwareta koto ga arimasu ka."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "外国人だから日本語が変だと言われたこともあります。",
                target: "がいこくじんだからにほんごがへんだといわれたこともあります",
                ruby: "<ruby>外国人<rt>がいこくじん</rt></ruby>だから<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>変<rt>へん</rt></ruby>だと<ruby>言<rt>い</rt></ruby>われたこともあります。",
                romaji: "Gaikokujin dakara Nihongo ga hen da to iwareta koto mo arimasu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "わかりました。一人で我慢せず、誰が、いつ、何を言ったのか、一緒に整理して対応を考えましょう。",
                target: "わかりました ひとりでがまんせず だれが いつ なにをいったのか いっしょにせいりしてたいおうをかんがえましょう",
                ruby: "わかりました。<ruby>一人<rt>ひとり</rt></ruby>で<ruby>我慢<rt>がまん</rt></ruby>せず、<ruby>誰<rt>だれ</rt></ruby>が、いつ、<ruby>何<rt>なに</rt></ruby>を<ruby>言<rt>い</rt></ruby>ったのか、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>整理<rt>せいり</rt></ruby>して<ruby>対応<rt>たいおう</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Wakarimashita. Hitori de gaman sezu, dare ga, itsu, nani o itta no ka, issho ni seiri shite taiō o kangaemashō."
            }
        ],

        {
            ja: [
                "児童：何人かの子に、私の話し方をまねされることがあって嫌です。",
                "先生：それは嫌でしたね。いつごろから、どのような場面で起きていますか。",
                "児童：一週間くらい前からで、私が日本語を間違えたときによく笑われます。",
                "先生：あなたが嫌だと感じていることは大切なことです。ほかにも言われたことがありますか。",
                "児童：外国人だから日本語が変だと言われたこともあります。",
                "先生：わかりました。一人で我慢せず、誰が、いつ、何を言ったのか、一緒に整理して対応を考えましょう。"
            ],

            en: [
                "Student: Some students imitate the way I speak, and I do not like it.",
                "Teacher: That must have been unpleasant. When did it start, and in what situations does it happen?",
                "Student: It started about a week ago, and they often laugh when I make a mistake in Japanese.",
                "Teacher: The fact that you feel uncomfortable is important. Have they said anything else to you?",
                "Student: Someone also said that my Japanese sounds strange because I am a foreigner.",
                "Teacher: I understand. Do not endure it alone. Let us organize who said what and when, and think about how to respond."
            ],

            "zh-CN": [
                "学生：有几个同学会模仿我说话的方式，我很不喜欢。",
                "老师：那一定让你很难受。大约从什么时候开始？在什么情况下会发生？",
                "学生：大约一周前开始的，我说错日语时他们经常笑我。",
                "老师：你觉得不舒服这件事很重要。他们还对你说过其他话吗？",
                "学生：还有人说，因为我是外国人，所以我的日语很奇怪。",
                "老师：明白了。不要一个人忍耐。我们一起整理是谁、什么时候、说了什么，再考虑如何处理。"
            ],

            "zh-TW": [
                "學生：有幾個同學會模仿我說話的方式，我很不喜歡。",
                "老師：那一定讓你很難受。大約從什麼時候開始？在什麼情況下會發生？",
                "學生：大約一週前開始的，我說錯日語時他們經常笑我。",
                "老師：你覺得不舒服這件事很重要。他們還對你說過其他話嗎？",
                "學生：還有人說，因為我是外國人，所以我的日語很奇怪。",
                "老師：明白了。不要一個人忍耐。我們一起整理是誰、什麼時候、說了什麼，再考慮如何處理。"
            ],

            ko: [
                "학생: 몇몇 아이들이 제 말투를 따라 해서 싫습니다.",
                "교사: 정말 싫었겠네요. 언제부터 어떤 상황에서 일어나고 있나요?",
                "학생: 일주일 정도 전부터이고 제가 일본어를 틀렸을 때 자주 웃습니다.",
                "교사: 네가 싫다고 느끼는 것은 중요한 일입니다. 다른 말을 들은 적도 있나요?",
                "학생: 외국인이라서 일본어가 이상하다는 말도 들었습니다.",
                "교사: 알겠습니다. 혼자 참지 말고 누가 언제 무엇을 말했는지 함께 정리해서 대응을 생각해 봅시다."
            ],

            vi: [
                "Học sinh: Có vài bạn bắt chước cách em nói và em rất không thích.",
                "Giáo viên: Điều đó chắc hẳn khiến em khó chịu. Chuyện này bắt đầu từ khi nào và xảy ra trong tình huống nào?",
                "Học sinh: Khoảng một tuần trước, và họ thường cười khi em nói sai tiếng Nhật.",
                "Giáo viên: Việc em cảm thấy khó chịu là điều quan trọng. Họ còn nói gì khác với em không?",
                "Học sinh: Có người còn nói tiếng Nhật của em kỳ lạ vì em là người nước ngoài.",
                "Giáo viên: Cô hiểu rồi. Đừng chịu đựng một mình. Chúng ta hãy cùng sắp xếp ai đã nói gì, khi nào, rồi nghĩ cách xử lý."
            ]
        }
    ),

    // =====================================================
    // 004 持ち物をなくしたときに相談する
    // =====================================================

    makeB1SchoolTroubleDialogue(
        "b1_schooltrouble_004",
        "持ち物をなくしたときに相談する",

        [
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "筆箱が見つからなくて、教室やかばんの中も探しました。",
                target: "ふでばこがみつからなくて きょうしつやかばんのなかもさがしました",
                ruby: "<ruby>筆箱<rt>ふでばこ</rt></ruby>が<ruby>見<rt>み</rt></ruby>つからなくて、<ruby>教室<rt>きょうしつ</rt></ruby>やかばんの<ruby>中<rt>なか</rt></ruby>も<ruby>探<rt>さが</rt></ruby>しました。",
                romaji: "Fudebako ga mitsukaranakute, kyōshitsu ya kaban no naka mo sagashimashita."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "最後に使った場所と時間を覚えていますか。",
                target: "さいごにつかったばしょとじかんをおぼえていますか",
                ruby: "<ruby>最後<rt>さいご</rt></ruby>に<ruby>使<rt>つか</rt></ruby>った<ruby>場所<rt>ばしょ</rt></ruby>と<ruby>時間<rt>じかん</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えていますか。",
                romaji: "Saigo ni tsukatta basho to jikan o oboete imasu ka."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "三時間目に教室で使ったのは覚えていますが、そのあとはわかりません。",
                target: "さんじかんめにきょうしつでつかったのはおぼえていますが そのあとはわかりません",
                ruby: "<ruby>三時間目<rt>さんじかんめ</rt></ruby>に<ruby>教室<rt>きょうしつ</rt></ruby>で<ruby>使<rt>つか</rt></ruby>ったのは<ruby>覚<rt>おぼ</rt></ruby>えていますが、そのあとはわかりません。",
                romaji: "Sanjikanme ni kyōshitsu de tsukatta no wa oboete imasu ga, sono ato wa wakarimasen."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "では、移動した教室や落とし物が集まる場所も確認してみましょう。",
                target: "では いどうしたきょうしつやおとしものがあつまるばしょもかくにんしてみましょう",
                ruby: "では、<ruby>移動<rt>いどう</rt></ruby>した<ruby>教室<rt>きょうしつ</rt></ruby>や<ruby>落<rt>お</rt></ruby>とし<ruby>物<rt>もの</rt></ruby>が<ruby>集<rt>あつ</rt></ruby>まる<ruby>場所<rt>ばしょ</rt></ruby>も<ruby>確認<rt>かくにん</rt></ruby>してみましょう。",
                romaji: "Dewa, idō shita kyōshitsu ya otoshimono ga atsumaru basho mo kakunin shite mimashō."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "もし見つからなかった場合は、どうしたらいいですか。",
                target: "もしみつからなかったばあいは どうしたらいいですか",
                ruby: "もし<ruby>見<rt>み</rt></ruby>つからなかった<ruby>場合<rt>ばあい</rt></ruby>は、どうしたらいいですか。",
                romaji: "Moshi mitsukaranakatta baai wa, dō shitara ii desu ka."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "担任にも伝えて、色や名前など特徴を説明しておくと探しやすくなります。",
                target: "たんにんにもつたえて いろやなまえなどとくちょうをせつめいしておくとさがしやすくなります",
                ruby: "<ruby>担任<rt>たんにん</rt></ruby>にも<ruby>伝<rt>つた</rt></ruby>えて、<ruby>色<rt>いろ</rt></ruby>や<ruby>名前<rt>なまえ</rt></ruby>など<ruby>特徴<rt>とくちょう</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>しておくと<ruby>探<rt>さが</rt></ruby>しやすくなります。",
                romaji: "Tannin ni mo tsutaete, iro ya namae nado tokuchō o setsumei shite oku to sagashiyasuku narimasu."
            }
        ],

        {
            ja: [
                "児童：筆箱が見つからなくて、教室やかばんの中も探しました。",
                "学校職員：最後に使った場所と時間を覚えていますか。",
                "児童：三時間目に教室で使ったのは覚えていますが、そのあとはわかりません。",
                "学校職員：では、移動した教室や落とし物が集まる場所も確認してみましょう。",
                "児童：もし見つからなかった場合は、どうしたらいいですか。",
                "学校職員：担任にも伝えて、色や名前など特徴を説明しておくと探しやすくなります。"
            ],

            en: [
                "Student: I cannot find my pencil case. I already looked in the classroom and in my bag.",
                "School Staff: Do you remember where and when you last used it?",
                "Student: I remember using it in the classroom during third period, but I do not know what happened after that.",
                "School Staff: Then let us also check the classrooms you visited and the place where lost items are collected.",
                "Student: What should I do if we still cannot find it?",
                "School Staff: Tell your homeroom teacher too, and explain details such as its color and name so it will be easier to look for."
            ],

            "zh-CN": [
                "学生：我的铅笔盒找不到了，我已经找过教室和书包里面。",
                "学校工作人员：你记得最后一次使用的地点和时间吗？",
                "学生：我记得第三节课在教室里用过，但之后就不知道了。",
                "学校工作人员：那么，我们也去确认你去过的教室和失物招领处吧。",
                "学生：如果还是找不到怎么办？",
                "学校工作人员：也告诉班主任，并说明颜色、名字等特征，会更容易寻找。"
            ],

            "zh-TW": [
                "學生：我的鉛筆盒找不到了，我已經找過教室和書包裡面。",
                "學校工作人員：你記得最後一次使用的地點和時間嗎？",
                "學生：我記得第三節課在教室裡用過，但之後就不知道了。",
                "學校工作人員：那麼，我們也去確認你去過的教室和失物招領處吧。",
                "學生：如果還是找不到怎麼辦？",
                "學校工作人員：也告訴導師，並說明顏色、名字等特徵，會更容易尋找。"
            ],

            ko: [
                "학생: 필통이 보이지 않아서 교실과 가방 안도 찾아봤습니다.",
                "학교 직원: 마지막으로 사용한 장소와 시간을 기억하나요?",
                "학생: 3교시에 교실에서 사용한 것은 기억하지만 그 이후는 모르겠습니다.",
                "학교 직원: 그러면 이동한 교실과 분실물이 모이는 장소도 확인해 봅시다.",
                "학생: 그래도 찾지 못하면 어떻게 해야 하나요?",
                "학교 직원: 담임교사에게도 알리고 색깔이나 이름 같은 특징을 설명해 두면 찾기 쉬워집니다."
            ],

            vi: [
                "Học sinh: Em không tìm thấy hộp bút, em đã tìm trong lớp và trong cặp rồi.",
                "Nhân viên trường học: Em có nhớ nơi và thời gian cuối cùng em sử dụng nó không?",
                "Học sinh: Em nhớ đã dùng trong lớp ở tiết ba, nhưng sau đó thì không biết.",
                "Nhân viên trường học: Vậy chúng ta hãy kiểm tra cả các phòng học em đã đi qua và nơi tập trung đồ thất lạc.",
                "Học sinh: Nếu vẫn không tìm thấy thì em nên làm gì?",
                "Nhân viên trường học: Hãy báo cho giáo viên chủ nhiệm và mô tả đặc điểm như màu sắc hoặc tên để dễ tìm hơn."
            ]
        }
    ),

    // =====================================================
    // 005 授業がわからないことを先生に相談する
    // =====================================================

    makeB1SchoolTroubleDialogue(
        "b1_schooltrouble_005",
        "授業がわからないことを先生に相談する",

        [
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "最近、算数の授業が難しくて、説明を聞いても途中からわからなくなります。",
                target: "さいきん さんすうのじゅぎょうがむずかしくて せつめいをきいてもとちゅうからわからなくなります",
                ruby: "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>算数<rt>さんすう</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>が<ruby>難<rt>むずか</rt></ruby>しくて、<ruby>説明<rt>せつめい</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いても<ruby>途中<rt>とちゅう</rt></ruby>からわからなくなります。",
                romaji: "Saikin, sansū no jugyō ga muzukashikute, setsumei o kiite mo tochū kara wakaranaku narimasu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "教えてくれてありがとう。どのあたりから難しいと感じますか。",
                target: "おしえてくれてありがとう どのあたりからむずかしいとかんじますか",
                ruby: "<ruby>教<rt>おし</rt></ruby>えてくれてありがとう。どのあたりから<ruby>難<rt>むずか</rt></ruby>しいと<ruby>感<rt>かん</rt></ruby>じますか。",
                romaji: "Oshiete kurete arigatō. Dono atari kara muzukashii to kanjimasu ka."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "計算はできるのですが、文章問題になると日本語の意味がよくわかりません。",
                target: "けいさんはできるのですが ぶんしょうもんだいになるとにほんごのいみがよくわかりません",
                ruby: "<ruby>計算<rt>けいさん</rt></ruby>はできるのですが、<ruby>文章問題<rt>ぶんしょうもんだい</rt></ruby>になると<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>がよくわかりません。",
                romaji: "Keisan wa dekiru no desu ga, bunshō mondai ni naru to Nihongo no imi ga yoku wakarimasen."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "なるほど。算数の考え方だけでなく、問題文の日本語も難しいのですね。",
                target: "なるほど さんすうのかんがえかただけでなく もんだいぶんのにほんごもむずかしいのですね",
                ruby: "なるほど。<ruby>算数<rt>さんすう</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>だけでなく、<ruby>問題文<rt>もんだいぶん</rt></ruby>の<ruby>日本語<rt>にほんご</rt></ruby>も<ruby>難<rt>むずか</rt></ruby>しいのですね。",
                romaji: "Naruhodo. Sansū no kangaekata dake de naku, mondaibun no Nihongo mo muzukashii no desu ne."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "授業中に何度も質問すると、ほかの人の邪魔になる気がして言えません。",
                target: "じゅぎょうちゅうになんどもしつもんすると ほかのひとのじゃまになるきがしていえません",
                ruby: "<ruby>授業中<rt>じゅぎょうちゅう</rt></ruby>に<ruby>何度<rt>なんど</rt></ruby>も<ruby>質問<rt>しつもん</rt></ruby>すると、ほかの<ruby>人<rt>ひと</rt></ruby>の<ruby>邪魔<rt>じゃま</rt></ruby>になる<ruby>気<rt>き</rt></ruby>がして<ruby>言<rt>い</rt></ruby>えません。",
                romaji: "Jugyōchū ni nando mo shitsumon suru to, hoka no hito no jama ni naru ki ga shite iemasen."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "先生",
                line: "授業後に質問する方法もあります。わからないままにせず、相談しやすい方法を一緒に考えましょう。",
                target: "じゅぎょうごにしつもんするほうほうもあります わからないままにせず そうだんしやすいほうほうをいっしょにかんがえましょう",
                ruby: "<ruby>授業後<rt>じゅぎょうご</rt></ruby>に<ruby>質問<rt>しつもん</rt></ruby>する<ruby>方法<rt>ほうほう</rt></ruby>もあります。わからないままにせず、<ruby>相談<rt>そうだん</rt></ruby>しやすい<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Jugyōgo ni shitsumon suru hōhō mo arimasu. Wakaranai mama ni sezu, sōdan shiyasui hōhō o issho ni kangaemashō."
            }
        ],

        {
            ja: [
                "児童：最近、算数の授業が難しくて、説明を聞いても途中からわからなくなります。",
                "先生：教えてくれてありがとう。どのあたりから難しいと感じますか。",
                "児童：計算はできるのですが、文章問題になると日本語の意味がよくわかりません。",
                "先生：なるほど。算数の考え方だけでなく、問題文の日本語も難しいのですね。",
                "児童：授業中に何度も質問すると、ほかの人の邪魔になる気がして言えません。",
                "先生：授業後に質問する方法もあります。わからないままにせず、相談しやすい方法を一緒に考えましょう。"
            ],

            en: [
                "Student: Recently, math lessons have become difficult, and even when I listen to the explanation, I lose track partway through.",
                "Teacher: Thank you for telling me. From which point does it start to feel difficult?",
                "Student: I can do calculations, but when there is a word problem, I do not fully understand the Japanese.",
                "Teacher: I see. So not only the math itself, but also the Japanese in the problem is difficult.",
                "Student: I am afraid that asking too many questions during class may disturb other students.",
                "Teacher: You can also ask after class. Let us find a way that makes it easier for you to ask for help instead of staying confused."
            ],

            "zh-CN": [
                "学生：最近数学课很难，就算听老师说明，中途也会听不懂。",
                "老师：谢谢你告诉我。你从哪一部分开始觉得困难？",
                "学生：计算我会做，但是遇到应用题时，我不太明白日语的意思。",
                "老师：原来如此。不只是数学思路，题目中的日语也很难。",
                "学生：我觉得上课时问很多次会打扰别人，所以不敢说。",
                "老师：也可以下课后提问。不要一直不懂，我们一起找一个容易咨询的方法吧。"
            ],

            "zh-TW": [
                "學生：最近數學課很難，就算聽老師說明，中途也會聽不懂。",
                "老師：謝謝你告訴我。你從哪一部分開始覺得困難？",
                "學生：計算我會做，但是遇到應用題時，我不太明白日語的意思。",
                "老師：原來如此。不只是數學思路，題目中的日語也很難。",
                "學生：我覺得上課時問很多次會打擾別人，所以不敢說。",
                "老師：也可以下課後提問。不要一直不懂，我們一起找一個容易諮詢的方法吧。"
            ],

            ko: [
                "학생: 최근 수학 수업이 어려워서 설명을 들어도 중간부터 이해하지 못합니다.",
                "교사: 알려 줘서 고마워요. 어느 부분부터 어렵다고 느끼나요?",
                "학생: 계산은 할 수 있지만 문장제가 나오면 일본어의 의미를 잘 모르겠습니다.",
                "교사: 그렇군요. 수학의 사고방식뿐 아니라 문제 문장의 일본어도 어렵군요.",
                "학생: 수업 중에 여러 번 질문하면 다른 사람에게 방해가 될 것 같아서 말하지 못합니다.",
                "교사: 수업 후에 질문할 수도 있습니다. 모르는 채로 두지 말고 상담하기 쉬운 방법을 함께 생각해 봅시다."
            ],

            vi: [
                "Học sinh: Gần đây tiết toán khó và dù nghe giải thích, em vẫn bị mất hiểu từ giữa chừng.",
                "Giáo viên: Cảm ơn em đã nói. Em bắt đầu cảm thấy khó từ phần nào?",
                "Học sinh: Em tính toán được, nhưng khi là bài toán có lời văn thì em không hiểu rõ tiếng Nhật.",
                "Giáo viên: Cô hiểu rồi. Không chỉ cách suy nghĩ toán học mà cả tiếng Nhật trong đề cũng khó.",
                "Học sinh: Em sợ nếu hỏi nhiều trong giờ sẽ làm phiền các bạn khác nên không dám nói.",
                "Giáo viên: Em cũng có thể hỏi sau giờ học. Đừng để nguyên điều chưa hiểu, chúng ta hãy cùng tìm cách em dễ hỏi hơn."
            ]
        }
    ),

    // =====================================================
    // 006 学校のルールを誤解したときに相談する
    // =====================================================

    makeB1SchoolTroubleDialogue(
        "b1_schooltrouble_006",
        "学校のルールを誤解したときに相談する",

        [
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "昨日、先生に注意されたのですが、なぜいけなかったのかよくわかりません。",
                target: "きのう せんせいにちゅういされたのですが なぜいけなかったのかよくわかりません",
                ruby: "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>先生<rt>せんせい</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>されたのですが、なぜいけなかったのかよくわかりません。",
                romaji: "Kinō, sensei ni chūi sareta no desu ga, naze ikenakatta no ka yoku wakarimasen."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "わからなかったのですね。どのような場面で注意されましたか。",
                target: "わからなかったのですね どのようなばめんでちゅういされましたか",
                ruby: "わからなかったのですね。どのような<ruby>場面<rt>ばめん</rt></ruby>で<ruby>注意<rt>ちゅうい</rt></ruby>されましたか。",
                romaji: "Wakaranakatta no desu ne. Dono yō na bamen de chūi saremashita ka."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "友達の物を借りて使ったのですが、先に聞かなければならなかったようです。",
                target: "ともだちのものをかりてつかったのですが さきにきかなければならなかったようです",
                ruby: "<ruby>友達<rt>ともだち</rt></ruby>の<ruby>物<rt>もの</rt></ruby>を<ruby>借<rt>か</rt></ruby>りて<ruby>使<rt>つか</rt></ruby>ったのですが、<ruby>先<rt>さき</rt></ruby>に<ruby>聞<rt>き</rt></ruby>かなければならなかったようです。",
                romaji: "Tomodachi no mono o karite tsukatta no desu ga, saki ni kikanakereba naranakatta yō desu."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "そうですね。自分の物ではない場合は、使う前に持ち主の許可をもらうことが大切です。",
                target: "そうですね じぶんのものではないばあいは つかうまえにもちぬしのきょかをもらうことがたいせつです",
                ruby: "そうですね。<ruby>自分<rt>じぶん</rt></ruby>の<ruby>物<rt>もの</rt></ruby>ではない<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>使<rt>つか</rt></ruby>う<ruby>前<rt>まえ</rt></ruby>に<ruby>持<rt>も</rt></ruby>ち<ruby>主<rt>ぬし</rt></ruby>の<ruby>許可<rt>きょか</rt></ruby>をもらうことが<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Sō desu ne. Jibun no mono de wa nai baai wa, tsukau mae ni mochinushi no kyoka o morau koto ga taisetsu desu."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "私の前の学校ではよく貸し借りしていたので、同じだと思っていました。",
                target: "わたしのまえのがっこうではよくかしかりしていたので おなじだとおもっていました",
                ruby: "<ruby>私<rt>わたし</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>の<ruby>学校<rt>がっこう</rt></ruby>ではよく<ruby>貸<rt>か</rt></ruby>し<ruby>借<rt>か</rt></ruby>りしていたので、<ruby>同<rt>おな</rt></ruby>じだと<ruby>思<rt>おも</rt></ruby>っていました。",
                romaji: "Watashi no mae no gakkō de wa yoku kashikari shite ita node, onaji da to omotte imashita."
            },
            {
                label: "話者A",
                key: "homeroomTeacher",
                name: "担任",
                line: "文化や学校によって違うこともあります。わからないルールは遠慮せず確認してください。",
                target: "ぶんかやがっこうによってちがうこともあります わからないるーるはえんりょせずかくにんしてください",
                ruby: "<ruby>文化<rt>ぶんか</rt></ruby>や<ruby>学校<rt>がっこう</rt></ruby>によって<ruby>違<rt>ちが</rt></ruby>うこともあります。わからないルールは<ruby>遠慮<rt>えんりょ</rt></ruby>せず<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Bunka ya gakkō ni yotte chigau koto mo arimasu. Wakaranai rūru wa enryo sezu kakunin shite kudasai."
            }
        ],

        {
            ja: [
                "児童：昨日、先生に注意されたのですが、なぜいけなかったのかよくわかりません。",
                "担任：わからなかったのですね。どのような場面で注意されましたか。",
                "児童：友達の物を借りて使ったのですが、先に聞かなければならなかったようです。",
                "担任：そうですね。自分の物ではない場合は、使う前に持ち主の許可をもらうことが大切です。",
                "児童：私の前の学校ではよく貸し借りしていたので、同じだと思っていました。",
                "担任：文化や学校によって違うこともあります。わからないルールは遠慮せず確認してください。"
            ],

            en: [
                "Student: Yesterday, a teacher corrected me, but I do not fully understand why what I did was wrong.",
                "Homeroom Teacher: So you did not understand. In what situation were you corrected?",
                "Student: I borrowed and used a friend's belongings, but apparently I should have asked first.",
                "Homeroom Teacher: Yes. When something does not belong to you, it is important to get permission from the owner before using it.",
                "Student: At my previous school, we often borrowed things from each other, so I thought it was the same here.",
                "Homeroom Teacher: Rules can differ depending on culture and school. Please ask freely when there is a rule you do not understand."
            ],

            "zh-CN": [
                "学生：昨天老师批评了我，但我不太明白为什么不可以。",
                "班主任：原来你不明白。当时是在什么情况下被提醒的？",
                "学生：我借用了朋友的东西，好像应该先问过他。",
                "班主任：是的。如果不是自己的东西，使用前得到物主的允许很重要。",
                "学生：我以前的学校经常互相借东西，所以我以为这里也一样。",
                "班主任：不同文化和学校可能有不同规定。不明白的规则，请不要客气，随时确认。"
            ],

            "zh-TW": [
                "學生：昨天老師提醒了我，但我不太明白為什麼不可以。",
                "導師：原來你不明白。當時是在什麼情況下被提醒的？",
                "學生：我借用了朋友的東西，好像應該先問過他。",
                "導師：是的。如果不是自己的東西，使用前得到物主的允許很重要。",
                "學生：我以前的學校經常互相借東西，所以我以為這裡也一樣。",
                "導師：不同文化和學校可能有不同規定。不明白的規則，請不要客氣，隨時確認。"
            ],

            ko: [
                "학생: 어제 선생님에게 주의를 받았는데 왜 안 되는지 잘 모르겠습니다.",
                "담임교사: 이해하지 못했군요. 어떤 상황에서 주의를 받았나요?",
                "학생: 친구 물건을 빌려서 사용했는데 먼저 물어봐야 했던 것 같습니다.",
                "담임교사: 그렇습니다. 자신의 물건이 아니라면 사용하기 전에 주인의 허락을 받는 것이 중요합니다.",
                "학생: 전에 다니던 학교에서는 자주 서로 빌려 썼기 때문에 여기서도 같은 줄 알았습니다.",
                "담임교사: 문화나 학교에 따라 다를 수 있습니다. 모르는 규칙은 부담 갖지 말고 확인해 주세요."
            ],

            vi: [
                "Học sinh: Hôm qua em bị giáo viên nhắc nhở nhưng em không hiểu rõ vì sao việc đó lại không được phép.",
                "Giáo viên chủ nhiệm: Vậy là em chưa hiểu. Em bị nhắc trong tình huống nào?",
                "Học sinh: Em mượn đồ của bạn để dùng, nhưng hình như em phải hỏi trước.",
                "Giáo viên chủ nhiệm: Đúng vậy. Nếu không phải đồ của mình, điều quan trọng là xin phép chủ nhân trước khi sử dụng.",
                "Học sinh: Ở trường cũ, chúng em thường cho nhau mượn đồ nên em nghĩ ở đây cũng vậy.",
                "Giáo viên chủ nhiệm: Văn hóa và trường học có thể khác nhau. Nếu không hiểu quy định nào, hãy hỏi mà không cần ngại."
            ]
        }
    ),

    // =====================================================
    // 007 インターネット上のトラブルを相談する
    // =====================================================

    makeB1SchoolTroubleDialogue(
        "b1_schooltrouble_007",
        "インターネット上のトラブルを相談する",

        [
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "クラスのグループチャットに、私の嫌な写真が送られていて困っています。",
                target: "くらすのぐるーぷちゃっとに わたしのいやなしゃしんがおくられていてこまっています",
                ruby: "クラスのグループチャットに、<ruby>私<rt>わたし</rt></ruby>の<ruby>嫌<rt>いや</rt></ruby>な<ruby>写真<rt>しゃしん</rt></ruby>が<ruby>送<rt>おく</rt></ruby>られていて<ruby>困<rt>こま</rt></ruby>っています。",
                romaji: "Kurasu no gurūpu chatto ni, watashi no iya na shashin ga okurarete ite komatte imasu."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "教えてくれてありがとう。その写真は、あなたの許可なく送られたのですか。",
                target: "おしえてくれてありがとう そのしゃしんは あなたのきょかなくおくられたのですか",
                ruby: "<ruby>教<rt>おし</rt></ruby>えてくれてありがとう。その<ruby>写真<rt>しゃしん</rt></ruby>は、あなたの<ruby>許可<rt>きょか</rt></ruby>なく<ruby>送<rt>おく</rt></ruby>られたのですか。",
                romaji: "Oshiete kurete arigatō. Sono shashin wa, anata no kyoka naku okurareta no desu ka."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "はい。消してほしいと伝えましたが、ほかの人も保存したかもしれません。",
                target: "はい けしてほしいとつたえましたが ほかのひともほぞんしたかもしれません",
                ruby: "はい。<ruby>消<rt>け</rt></ruby>してほしいと<ruby>伝<rt>つた</rt></ruby>えましたが、ほかの<ruby>人<rt>ひと</rt></ruby>も<ruby>保存<rt>ほぞん</rt></ruby>したかもしれません。",
                romaji: "Hai. Keshite hoshii to tsutaemashita ga, hoka no hito mo hozon shita kamo shiremasen."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "わかりました。まず、メッセージや写真が確認できる状態なら、記録を残しておきましょう。",
                target: "わかりました まず めっせーじやしゃしんがかくにんできるじょうたいなら きろくをのこしておきましょう",
                ruby: "わかりました。まず、メッセージや<ruby>写真<rt>しゃしん</rt></ruby>が<ruby>確認<rt>かくにん</rt></ruby>できる<ruby>状態<rt>じょうたい</rt></ruby>なら、<ruby>記録<rt>きろく</rt></ruby>を<ruby>残<rt>のこ</rt></ruby>しておきましょう。",
                romaji: "Wakarimashita. Mazu, messēji ya shashin ga kakunin dekiru jōtai nara, kiroku o nokoshite okimashō."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "自分だけで解決しようとして、相手に何度も連絡しない方がいいですか。",
                target: "じぶんだけでかいけつしようとして あいてになんどもれんらくしないほうがいいですか",
                ruby: "<ruby>自分<rt>じぶん</rt></ruby>だけで<ruby>解決<rt>かいけつ</rt></ruby>しようとして、<ruby>相手<rt>あいて</rt></ruby>に<ruby>何度<rt>なんど</rt></ruby>も<ruby>連絡<rt>れんらく</rt></ruby>しない<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Jibun dake de kaiketsu shiyō to shite, aite ni nando mo renraku shinai hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "はい。状況が悪化する可能性もあるので、一人で抱えず、保護者や学校の先生に相談しましょう。",
                target: "はい じょうきょうがあっかするかのうせいもあるので ひとりでかかえず ほごしゃやがっこうのせんせいにそうだんしましょう",
                ruby: "はい。<ruby>状況<rt>じょうきょう</rt></ruby>が<ruby>悪化<rt>あっか</rt></ruby>する<ruby>可能性<rt>かのうせい</rt></ruby>もあるので、<ruby>一人<rt>ひとり</rt></ruby>で<ruby>抱<rt>かか</rt></ruby>えず、<ruby>保護者<rt>ほごしゃ</rt></ruby>や<ruby>学校<rt>がっこう</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>しましょう。",
                romaji: "Hai. Jōkyō ga akka suru kanōsei mo aru node, hitori de kakaezu, hogosha ya gakkō no sensei ni sōdan shimashō."
            }
        ],

        {
            ja: [
                "児童：クラスのグループチャットに、私の嫌な写真が送られていて困っています。",
                "相談員：教えてくれてありがとう。その写真は、あなたの許可なく送られたのですか。",
                "児童：はい。消してほしいと伝えましたが、ほかの人も保存したかもしれません。",
                "相談員：わかりました。まず、メッセージや写真が確認できる状態なら、記録を残しておきましょう。",
                "児童：自分だけで解決しようとして、相手に何度も連絡しない方がいいですか。",
                "相談員：はい。状況が悪化する可能性もあるので、一人で抱えず、保護者や学校の先生に相談しましょう。"
            ],

            en: [
                "Student: An embarrassing photo of me was shared in our class group chat, and I do not know what to do.",
                "Counselor: Thank you for telling me. Was the photo shared without your permission?",
                "Student: Yes. I asked them to delete it, but other people may have saved it.",
                "Counselor: I understand. First, if you can still see the messages or photo, keep a record of them.",
                "Student: Should I avoid repeatedly contacting the person and trying to solve it entirely by myself?",
                "Counselor: Yes. The situation could become worse, so do not handle it alone. Talk to your parent or a teacher at school."
            ],

            "zh-CN": [
                "学生：班级群聊里有人发了我不喜欢的照片，我很困扰。",
                "咨询员：谢谢你告诉我。这张照片是在没有得到你允许的情况下发的吗？",
                "学生：是的。我已经要求删除，但其他人可能也保存了。",
                "咨询员：明白了。如果消息和照片还可以确认，先把记录保存下来。",
                "学生：我不应该自己解决，也不要反复联系对方，对吗？",
                "咨询员：是的。情况有可能恶化，所以不要一个人承担，要向家长或学校老师咨询。"
            ],

            "zh-TW": [
                "學生：班級群組聊天裡有人發了我不喜歡的照片，我很困擾。",
                "諮詢員：謝謝你告訴我。這張照片是在沒有得到你允許的情況下發的嗎？",
                "學生：是的。我已經要求刪除，但其他人可能也保存了。",
                "諮詢員：明白了。如果訊息和照片還可以確認，先把記錄保存下來。",
                "學生：我不應該自己解決，也不要反覆聯絡對方，對嗎？",
                "諮詢員：是的。情況有可能惡化，所以不要一個人承擔，要向家長或學校老師諮詢。"
            ],

            ko: [
                "학생: 반 단체 채팅방에 제가 싫어하는 사진이 올라와서 곤란합니다.",
                "상담원: 말해 줘서 고마워요. 그 사진은 네 허락 없이 보내졌나요?",
                "학생: 네. 지워 달라고 했지만 다른 사람들도 저장했을지 모릅니다.",
                "상담원: 알겠습니다. 우선 메시지나 사진을 확인할 수 있다면 기록을 남겨 둡시다.",
                "학생: 혼자 해결하려고 상대에게 여러 번 연락하지 않는 편이 좋나요?",
                "상담원: 네. 상황이 악화될 수도 있으므로 혼자 떠안지 말고 보호자나 학교 선생님에게 상담합시다."
            ],

            vi: [
                "Học sinh: Trong nhóm chat của lớp có người gửi một bức ảnh em không thích và em rất khó xử.",
                "Nhân viên tư vấn: Cảm ơn em đã nói. Bức ảnh đó được gửi mà không có sự cho phép của em phải không?",
                "Học sinh: Vâng. Em đã yêu cầu xóa nhưng có thể những người khác đã lưu lại.",
                "Nhân viên tư vấn: Cô hiểu. Nếu vẫn có thể xem tin nhắn hoặc ảnh, trước tiên hãy lưu lại bằng chứng.",
                "Học sinh: Em không nên cố tự giải quyết và liên lạc nhiều lần với người kia đúng không?",
                "Nhân viên tư vấn: Đúng vậy. Tình hình có thể xấu đi, nên đừng tự chịu đựng một mình. Hãy nói với phụ huynh hoặc giáo viên."
            ]
        }
    ),

    // =====================================================
    // 008 深刻な悩みを相談する
    // =====================================================

    makeB1SchoolTroubleDialogue(
        "b1_schooltrouble_008",
        "深刻な悩みを相談する",

        [
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "最近、学校へ来るのがとてもつらくて、朝になると行きたくないと思います。",
                target: "さいきん がっこうへくるのがとてもつらくて あさになるといきたくないとおもいます",
                ruby: "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>来<rt>く</rt></ruby>るのがとてもつらくて、<ruby>朝<rt>あさ</rt></ruby>になると<ruby>行<rt>い</rt></ruby>きたくないと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Saikin, gakkō e kuru no ga totemo tsurakute, asa ni naru to ikitakunai to omoimasu."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "話してくれてありがとう。今まで一人で抱えていたのですか。",
                target: "はなしてくれてありがとう いままでひとりでかかえていたのですか",
                ruby: "<ruby>話<rt>はな</rt></ruby>してくれてありがとう。<ruby>今<rt>いま</rt></ruby>まで<ruby>一人<rt>ひとり</rt></ruby>で<ruby>抱<rt>かか</rt></ruby>えていたのですか。",
                romaji: "Hanashite kurete arigatō. Ima made hitori de kakaete ita no desu ka."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "はい。友達や家族に心配をかけたくなくて、誰にも言えませんでした。",
                target: "はい ともだちやかぞくにしんぱいをかけたくなくて だれにもいえませんでした",
                ruby: "はい。<ruby>友達<rt>ともだち</rt></ruby>や<ruby>家族<rt>かぞく</rt></ruby>に<ruby>心配<rt>しんぱい</rt></ruby>をかけたくなくて、<ruby>誰<rt>だれ</rt></ruby>にも<ruby>言<rt>い</rt></ruby>えませんでした。",
                romaji: "Hai. Tomodachi ya kazoku ni shinpai o kaketakunakute, dare ni mo iemasen deshita."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "一人で抱え続けなくて大丈夫です。まず、何が一番つらいのか、ゆっくり教えてください。",
                target: "ひとりでかかえつづけなくてだいじょうぶです まず なにがいちばんつらいのか ゆっくりおしえてください",
                ruby: "<ruby>一人<rt>ひとり</rt></ruby>で<ruby>抱<rt>かか</rt></ruby>え<ruby>続<rt>つづ</rt></ruby>けなくて<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。まず、<ruby>何<rt>なに</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby>つらいのか、ゆっくり<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Hitori de kakaetsuzukenakute daijōbu desu. Mazu, nani ga ichiban tsurai no ka, yukkuri oshiete kudasai."
            },
            {
                label: "話者B",
                key: "student",
                name: "児童",
                line: "クラスにいると緊張して、失敗したらまた笑われるのではないかと怖くなります。",
                target: "くらすにいるときんちょうして しっぱいしたらまたわらわれるのではないかとこわくなります",
                ruby: "クラスにいると<ruby>緊張<rt>きんちょう</rt></ruby>して、<ruby>失敗<rt>しっぱい</rt></ruby>したらまた<ruby>笑<rt>わら</rt></ruby>われるのではないかと<ruby>怖<rt>こわ</rt></ruby>くなります。",
                romaji: "Kurasu ni iru to kinchō shite, shippai shitara mata warawareru no de wa nai ka to kowaku narimasu."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "わかりました。あなたが安心して学校生活を送れるように、誰とどのように支えるか一緒に考えましょう。",
                target: "わかりました あなたがあんしんしてがっこうせいかつをおくれるように だれとどのようにささえるかいっしょにかんがえましょう",
                ruby: "わかりました。あなたが<ruby>安心<rt>あんしん</rt></ruby>して<ruby>学校生活<rt>がっこうせいかつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>れるように、<ruby>誰<rt>だれ</rt></ruby>とどのように<ruby>支<rt>ささ</rt></ruby>えるか<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Wakarimashita. Anata ga anshin shite gakkō seikatsu o okureru yō ni, dare to dono yō ni sasaeru ka issho ni kangaemashō."
            }
        ],

        {
            ja: [
                "児童：最近、学校へ来るのがとてもつらくて、朝になると行きたくないと思います。",
                "相談員：話してくれてありがとう。今まで一人で抱えていたのですか。",
                "児童：はい。友達や家族に心配をかけたくなくて、誰にも言えませんでした。",
                "相談員：一人で抱え続けなくて大丈夫です。まず、何が一番つらいのか、ゆっくり教えてください。",
                "児童：クラスにいると緊張して、失敗したらまた笑われるのではないかと怖くなります。",
                "相談員：わかりました。あなたが安心して学校生活を送れるように、誰とどのように支えるか一緒に考えましょう。"
            ],

            en: [
                "Student: Recently, coming to school has been very hard, and every morning I feel that I do not want to go.",
                "Counselor: Thank you for telling me. Have you been carrying this alone until now?",
                "Student: Yes. I did not want to worry my friends or family, so I could not tell anyone.",
                "Counselor: You do not have to keep carrying this alone. First, please slowly tell me what feels the hardest.",
                "Student: I become nervous in class and feel afraid that people may laugh at me again if I make a mistake.",
                "Counselor: I understand. Let us think together about who can support you and how, so that you can feel safer at school."
            ],

            "zh-CN": [
                "学生：最近来学校让我觉得非常痛苦，每天早上都会不想来。",
                "咨询员：谢谢你告诉我。到现在为止你一直一个人承受吗？",
                "学生：是的。我不想让朋友和家人担心，所以一直没能告诉任何人。",
                "咨询员：你不需要一直一个人承受。先慢慢告诉我，什么事情最让你痛苦。",
                "学生：在班里我会很紧张，害怕自己一旦犯错又会被别人笑。",
                "咨询员：明白了。为了让你能够安心地生活在学校，我们一起考虑由谁、以什么方式支持你。"
            ],

            "zh-TW": [
                "學生：最近來學校讓我覺得非常痛苦，每天早上都會不想來。",
                "諮詢員：謝謝你告訴我。到現在為止你一直一個人承受嗎？",
                "學生：是的。我不想讓朋友和家人擔心，所以一直沒能告訴任何人。",
                "諮詢員：你不需要一直一個人承受。先慢慢告訴我，什麼事情最讓你痛苦。",
                "學生：在班裡我會很緊張，害怕自己一旦犯錯又會被別人笑。",
                "諮詢員：明白了。為了讓你能夠安心地生活在學校，我們一起考慮由誰、以什麼方式支持你。"
            ],

            ko: [
                "학생: 최근 학교에 오는 것이 너무 힘들어서 아침이 되면 가고 싶지 않다고 생각합니다.",
                "상담원: 이야기해 줘서 고마워요. 지금까지 혼자서 참아 왔나요?",
                "학생: 네. 친구나 가족을 걱정시키고 싶지 않아서 아무에게도 말하지 못했습니다.",
                "상담원: 혼자 계속 안고 있지 않아도 괜찮습니다. 우선 무엇이 가장 힘든지 천천히 말해 주세요.",
                "학생: 교실에 있으면 긴장되고 실수하면 또 웃음거리가 될까 봐 무섭습니다.",
                "상담원: 알겠습니다. 네가 안심하고 학교생활을 할 수 있도록 누가 어떻게 도울지 함께 생각해 봅시다."
            ],

            vi: [
                "Học sinh: Gần đây việc đến trường rất khó khăn đối với em, và mỗi sáng em đều nghĩ rằng mình không muốn đi.",
                "Nhân viên tư vấn: Cảm ơn em đã nói. Cho đến giờ em đã chịu đựng một mình sao?",
                "Học sinh: Vâng. Em không muốn làm bạn bè và gia đình lo nên không thể nói với ai.",
                "Nhân viên tư vấn: Em không cần tiếp tục chịu đựng một mình. Trước hết, hãy từ từ nói cho cô biết điều gì khiến em khó chịu nhất.",
                "Học sinh: Khi ở trong lớp em rất căng thẳng và sợ rằng nếu mắc lỗi thì sẽ lại bị cười.",
                "Nhân viên tư vấn: Cô hiểu. Chúng ta hãy cùng nghĩ xem ai có thể hỗ trợ em và bằng cách nào để em cảm thấy an toàn hơn ở trường."
            ]
        }
    )

];