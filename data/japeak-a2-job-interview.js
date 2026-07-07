// =====================================================
// Japeak A2 Level
// Scene: 面接を受けてみよう
// File: data/japeak-a2-job-interview.js
// Category Key: a2_job_interview
// =====================================================

const a2JobInterviewLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeA2JobInterviewTranslations(translations) {
    const completed = {};
    a2JobInterviewLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const a2JobInterviewContext = {
    ja: "仕事の面接で、受付、自己紹介、経験、志望理由、勤務条件、質問、結果の連絡について話す日本語を練習します。",
    en: "Practice Japanese for job interviews, including reception, self-introduction, work experience, reasons for applying, working conditions, questions, and result notification.",
    "zh-CN": "练习工作面试时使用的日语，包括接待、自我介绍、工作经验、应聘理由、工作条件、提问和结果通知。",
    "zh-TW": "練習工作面試時使用的日語，包括接待、自我介紹、工作經驗、應徵理由、工作條件、提問和結果通知。",
    ko: "구직 면접에서 접수, 자기소개, 경험, 지원 동기, 근무 조건, 질문, 결과 연락에 대해 말하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi phỏng vấn xin việc, gồm tiếp tân, tự giới thiệu, kinh nghiệm làm việc, lý do ứng tuyển, điều kiện làm việc, câu hỏi và thông báo kết quả.",
    tl: "Practice ng Japanese para sa job interview, tulad ng reception, self-introduction, work experience, reason for applying, working conditions, questions, at result notification.",
    id: "Latihan bahasa Jepang untuk wawancara kerja, termasuk resepsionis, perkenalan diri, pengalaman kerja, alasan melamar, kondisi kerja, pertanyaan, dan pemberitahuan hasil.",
    th: "ฝึกภาษาญี่ปุ่นสำหรับการสัมภาษณ์งาน เช่น การติดต่อที่受付 การแนะนำตัว ประสบการณ์ทำงาน เหตุผลที่สมัคร เงื่อนไขการทำงาน คำถาม และการแจ้งผล",
    my: "အလုပ်အင်တာဗျူးတွင် reception၊ self-introduction၊ work experience၊ reason for applying၊ working conditions၊ questions နှင့် result notification အကြောင်း ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់សម្ភាសន៍ការងារ ដូចជា ការទទួលភ្ញៀវ ការណែនាំខ្លួន បទពិសោធន៍ការងារ មូលហេតុដាក់ពាក្យ លក្ខខណ្ឌការងារ សំណួរ និងការជូនដំណឹងលទ្ធផល។",
    ne: "job interview मा reception, self-introduction, work experience, reason for applying, working conditions, questions र result notification बारे जापानी अभ्यास।",
    mn: "Ажлын ярилцлагад хэрэгтэй япон хэл: хүлээн авах, өөрийгөө танилцуулах, ажлын туршлага, өргөдөл гаргасан шалтгаан, ажлын нөхцөл, асуулт, үр дүнгийн мэдэгдэл.",
    si: "job interview එකකදී reception, self-introduction, work experience, reason for applying, working conditions, questions සහ result notification ගැන ජපන් භාෂා පුහුණුව.",
    bn: "job interview-তে reception, self-introduction, work experience, reason for applying, working conditions, questions এবং result notification নিয়ে জাপানি অনুশীলন।",
    pt: "Prática de japonês para entrevista de emprego: recepção, apresentação pessoal, experiência, motivo da candidatura, condições de trabalho, perguntas e aviso do resultado.",
    es: "Práctica de japonés para entrevistas de trabajo: recepción, presentación personal, experiencia, motivo de solicitud, condiciones laborales, preguntas y aviso del resultado.",
    fr: "Entraînement en japonais pour un entretien d’embauche : accueil, présentation, expérience, motivation, conditions de travail, questions et annonce du résultat.",
    ru: "Практика японского языка для собеседования: приём, самопрезентация, опыт работы, причина отклика, условия работы, вопросы и уведомление о результате.",
    uk: "Практика японської мови для співбесіди: прийом, самопрезентація, досвід роботи, причина заявки, умови роботи, запитання та повідомлення результату."
};

const a2JobInterviewSpeakerNames = {
    interviewer: {
        ja: "面接官",
        en: "Interviewer",
        "zh-CN": "面试官",
        "zh-TW": "面試官",
        ko: "면접관",
        vi: "Người phỏng vấn",
        tl: "Interviewer",
        id: "Pewawancara",
        th: "ผู้สัมภาษณ์",
        my: "အင်တာဗျူးမေးမြန်းသူ",
        km: "អ្នកសម្ភាសន៍",
        ne: "अन्तर्वार्ताकार",
        mn: "Ярилцлага авагч",
        si: "සම්මුඛ පරීක්ෂකයා",
        bn: "ইন্টারভিউয়ার",
        pt: "Entrevistador",
        es: "Entrevistador",
        fr: "Recruteur",
        ru: "Интервьюер",
        uk: "Інтерв’юер"
    },
    applicant: {
        ja: "応募者",
        en: "Applicant",
        "zh-CN": "应聘者",
        "zh-TW": "應徵者",
        ko: "지원자",
        vi: "Người ứng tuyển",
        tl: "Applicant",
        id: "Pelamar",
        th: "ผู้สมัคร",
        my: "လျှောက်ထားသူ",
        km: "អ្នកដាក់ពាក្យ",
        ne: "आवेदक",
        mn: "Ажил горилогч",
        si: "අයදුම්කරු",
        bn: "আবেদনকারী",
        pt: "Candidato",
        es: "Solicitante",
        fr: "Candidat",
        ru: "Соискатель",
        uk: "Кандидат"
    },
    reception: {
        ja: "受付の人",
        en: "Reception Staff",
        "zh-CN": "接待人员",
        "zh-TW": "接待人員",
        ko: "접수 직원",
        vi: "Nhân viên tiếp tân",
        tl: "Reception staff",
        id: "Staf resepsionis",
        th: "เจ้าหน้าที่受付",
        my: "reception ဝန်ထမ်း",
        km: "បុគ្គលិកទទួលភ្ញៀវ",
        ne: "reception कर्मचारी",
        mn: "Хүлээн авах ажилтан",
        si: "reception සේවකයා",
        bn: "reception কর্মী",
        pt: "Recepcionista",
        es: "Recepcionista",
        fr: "Personnel d’accueil",
        ru: "Сотрудник ресепшена",
        uk: "Працівник рецепції"
    }
};

function makeA2JobInterviewDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeA2JobInterviewTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_job_interview",
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
            speakerNames: a2JobInterviewSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2JobInterviewContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakA2JobInterviewData = [

    makeA2JobInterviewDialogue(
        "a2_jobinterview_001",
        "面接の受付をする",
        [
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "本日三時に面接の約束をしている者です。",
                target: "ほんじつさんじにめんせつのやくそくをしているものです",
                ruby: "<ruby>本日<rt>ほんじつ</rt></ruby><ruby>三時<rt>さんじ</rt></ruby>に<ruby>面接<rt>めんせつ</rt></ruby>の<ruby>約束<rt>やくそく</rt></ruby>をしている<ruby>者<rt>もの</rt></ruby>です。",
                romaji: "Honjitsu san-ji ni mensetsu no yakusoku o shite iru mono desu."
            },
            {
                label: "話者A",
                key: "reception",
                name: "受付の人",
                line: "お名前を教えてください。",
                target: "おなまえをおしえてください",
                ruby: "お<ruby>名前<rt>なまえ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Onamae o oshiete kudasai."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "山田マリアと申します。",
                target: "やまだまりあともうします",
                ruby: "<ruby>山田<rt>やまだ</rt></ruby>マリアと<ruby>申<rt>もう</rt></ruby>します。",
                romaji: "Yamada Maria to mōshimasu."
            },
            {
                label: "話者A",
                key: "reception",
                name: "受付の人",
                line: "確認しますので、少々お待ちください。",
                target: "かくにんしますので しょうしょうおまちください",
                ruby: "<ruby>確認<rt>かくにん</rt></ruby>しますので、<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。",
                romaji: "Kakunin shimasu node, shōshō omachi kudasai."
            }
        ],
        {
            ja: [
                "応募者：本日三時に面接の約束をしている者です。",
                "受付の人：お名前を教えてください。",
                "応募者：山田マリアと申します。",
                "受付の人：確認しますので、少々お待ちください。"
            ],
            en: [
                "Applicant: I have an interview appointment today at 3 p.m.",
                "Reception Staff: Please tell me your name.",
                "Applicant: My name is Maria Yamada.",
                "Reception Staff: I will check, so please wait a moment."
            ],
            "zh-CN": [
                "应聘者：我是今天三点预约面试的人。",
                "接待人员：请告诉我您的姓名。",
                "应聘者：我叫山田玛丽亚。",
                "接待人员：我确认一下，请稍等。"
            ],
            "zh-TW": [
                "應徵者：我是今天三點預約面試的人。",
                "接待人員：請告訴我您的姓名。",
                "應徵者：我叫山田瑪麗亞。",
                "接待人員：我確認一下，請稍等。"
            ],
            ko: [
                "지원자: 오늘 3시에 면접 약속이 있는 사람입니다.",
                "접수 직원: 성함을 알려 주세요.",
                "지원자: 야마다 마리아라고 합니다.",
                "접수 직원: 확인하겠습니다. 잠시만 기다려 주세요."
            ],
            vi: [
                "Người ứng tuyển: Tôi là người có lịch phỏng vấn lúc 3 giờ hôm nay.",
                "Nhân viên tiếp tân: Xin hãy cho biết tên của bạn.",
                "Người ứng tuyển: Tôi tên là Yamada Maria.",
                "Nhân viên tiếp tân: Tôi sẽ kiểm tra, xin hãy đợi một chút."
            ]
        }
    ),

    makeA2JobInterviewDialogue(
        "a2_jobinterview_002",
        "自己紹介をする",
        [
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "では、簡単に自己紹介をお願いします。",
                target: "では かんたんにじこしょうかいをおねがいします",
                ruby: "では、<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>自己紹介<rt>じこしょうかい</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Dewa, kantan ni jiko shōkai o onegai shimasu."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "はい。山田マリアと申します。",
                target: "はい やまだまりあともうします",
                ruby: "はい。<ruby>山田<rt>やまだ</rt></ruby>マリアと<ruby>申<rt>もう</rt></ruby>します。",
                romaji: "Hai. Yamada Maria to mōshimasu."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "日本に来て三年になります。",
                target: "にほんにきてさんねんになります",
                ruby: "<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>て<ruby>三年<rt>さんねん</rt></ruby>になります。",
                romaji: "Nihon ni kite san-nen ni narimasu."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "まじめに働くことを大切にしています。",
                target: "まじめにはたらくことをたいせつにしています",
                ruby: "まじめに<ruby>働<rt>はたら</rt></ruby>くことを<ruby>大切<rt>たいせつ</rt></ruby>にしています。",
                romaji: "Majime ni hataraku koto o taisetsu ni shite imasu."
            }
        ],
        {
            ja: [
                "面接官：では、簡単に自己紹介をお願いします。",
                "応募者：はい。山田マリアと申します。",
                "応募者：日本に来て三年になります。",
                "応募者：まじめに働くことを大切にしています。"
            ],
            en: [
                "Interviewer: Then, please briefly introduce yourself.",
                "Applicant: Yes. My name is Maria Yamada.",
                "Applicant: It has been three years since I came to Japan.",
                "Applicant: I value working seriously and responsibly."
            ],
            "zh-CN": [
                "面试官：那么，请简单做一下自我介绍。",
                "应聘者：好的。我叫山田玛丽亚。",
                "应聘者：我来日本已经三年了。",
                "应聘者：我很重视认真工作。"
            ],
            "zh-TW": [
                "面試官：那麼，請簡單做一下自我介紹。",
                "應徵者：好的。我叫山田瑪麗亞。",
                "應徵者：我來日本已經三年了。",
                "應徵者：我很重視認真工作。"
            ],
            ko: [
                "면접관: 그럼 간단히 자기소개를 부탁드립니다.",
                "지원자: 네. 야마다 마리아라고 합니다.",
                "지원자: 일본에 온 지 3년이 되었습니다.",
                "지원자: 성실하게 일하는 것을 중요하게 생각합니다."
            ],
            vi: [
                "Người phỏng vấn: Vậy, xin hãy giới thiệu bản thân ngắn gọn.",
                "Người ứng tuyển: Vâng. Tôi tên là Yamada Maria.",
                "Người ứng tuyển: Tôi đến Nhật được ba năm rồi.",
                "Người ứng tuyển: Tôi coi trọng việc làm việc nghiêm túc."
            ]
        }
    ),

    makeA2JobInterviewDialogue(
        "a2_jobinterview_003",
        "仕事の経験を話す",
        [
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "これまでにどんな仕事をしたことがありますか。",
                target: "これまでにどんなしごとをしたことがありますか",
                ruby: "これまでにどんな<ruby>仕事<rt>しごと</rt></ruby>をしたことがありますか。",
                romaji: "Kore made ni donna shigoto o shita koto ga arimasu ka."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "工場で部品を検査する仕事をしていました。",
                target: "こうじょうでぶひんをけんさするしごとをしていました",
                ruby: "<ruby>工場<rt>こうじょう</rt></ruby>で<ruby>部品<rt>ぶひん</rt></ruby>を<ruby>検査<rt>けんさ</rt></ruby>する<ruby>仕事<rt>しごと</rt></ruby>をしていました。",
                romaji: "Kōjō de buhin o kensa suru shigoto o shite imashita."
            },
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "その仕事で気をつけていたことは何ですか。",
                target: "そのしごとできをつけていたことはなんですか",
                ruby: "その<ruby>仕事<rt>しごと</rt></ruby>で<ruby>気<rt>き</rt></ruby>をつけていたことは<ruby>何<rt>なん</rt></ruby>ですか。",
                romaji: "Sono shigoto de ki o tsukete ita koto wa nan desu ka."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "ミスをしないように、毎回よく確認していました。",
                target: "みすをしないように まいかいよくかくにんしていました",
                ruby: "ミスをしないように、<ruby>毎回<rt>まいかい</rt></ruby>よく<ruby>確認<rt>かくにん</rt></ruby>していました。",
                romaji: "Misu o shinai yō ni, maikai yoku kakunin shite imashita."
            }
        ],
        {
            ja: [
                "面接官：これまでにどんな仕事をしたことがありますか。",
                "応募者：工場で部品を検査する仕事をしていました。",
                "面接官：その仕事で気をつけていたことは何ですか。",
                "応募者：ミスをしないように、毎回よく確認していました。"
            ],
            en: [
                "Interviewer: What kind of work have you done before?",
                "Applicant: I worked at a factory inspecting parts.",
                "Interviewer: What did you pay attention to in that job?",
                "Applicant: I checked carefully every time so that I would not make mistakes."
            ],
            "zh-CN": [
                "面试官：您以前做过什么样的工作？",
                "应聘者：我在工厂做过检查零件的工作。",
                "面试官：那份工作中您注意什么？",
                "应聘者：为了不出错，我每次都会仔细确认。"
            ],
            "zh-TW": [
                "面試官：您以前做過什麼樣的工作？",
                "應徵者：我在工廠做過檢查零件的工作。",
                "面試官：那份工作中您注意什麼？",
                "應徵者：為了不出錯，我每次都會仔細確認。"
            ],
            ko: [
                "면접관: 지금까지 어떤 일을 해 본 적이 있나요?",
                "지원자: 공장에서 부품을 검사하는 일을 했습니다.",
                "면접관: 그 일에서 주의했던 것은 무엇인가요?",
                "지원자: 실수하지 않도록 매번 잘 확인했습니다."
            ],
            vi: [
                "Người phỏng vấn: Trước đây bạn đã làm công việc gì?",
                "Người ứng tuyển: Tôi đã làm công việc kiểm tra linh kiện ở nhà máy.",
                "Người phỏng vấn: Bạn đã chú ý điều gì trong công việc đó?",
                "Người ứng tuyển: Tôi luôn kiểm tra kỹ để không mắc lỗi."
            ]
        }
    ),

    makeA2JobInterviewDialogue(
        "a2_jobinterview_004",
        "志望理由を話す",
        [
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "この仕事に応募した理由を教えてください。",
                target: "このしごとにおうぼしたりゆうをおしえてください",
                ruby: "この<ruby>仕事<rt>しごと</rt></ruby>に<ruby>応募<rt>おうぼ</rt></ruby>した<ruby>理由<rt>りゆう</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Kono shigoto ni ōbo shita riyū o oshiete kudasai."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "仕事内容に興味があり、経験も生かせると思いました。",
                target: "しごとないようにきょうみがあり けいけんもいかせるとおもいました",
                ruby: "<ruby>仕事内容<rt>しごとないよう</rt></ruby>に<ruby>興味<rt>きょうみ</rt></ruby>があり、<ruby>経験<rt>けいけん</rt></ruby>も<ruby>生<rt>い</rt></ruby>かせると<ruby>思<rt>おも</rt></ruby>いました。",
                romaji: "Shigoto naiyō ni kyōmi ga ari, keiken mo ikaseru to omoimashita."
            },
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "長く働くことはできますか。",
                target: "ながくはたらくことはできますか",
                ruby: "<ruby>長<rt>なが</rt></ruby>く<ruby>働<rt>はたら</rt></ruby>くことはできますか。",
                romaji: "Nagaku hataraku koto wa dekimasu ka."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "はい。できれば長く働きたいです。",
                target: "はい できればながくはたらきたいです",
                ruby: "はい。できれば<ruby>長<rt>なが</rt></ruby>く<ruby>働<rt>はたら</rt></ruby>きたいです。",
                romaji: "Hai. Dekireba nagaku hatarakitai desu."
            }
        ],
        {
            ja: [
                "面接官：この仕事に応募した理由を教えてください。",
                "応募者：仕事内容に興味があり、経験も生かせると思いました。",
                "面接官：長く働くことはできますか。",
                "応募者：はい。できれば長く働きたいです。"
            ],
            en: [
                "Interviewer: Please tell me why you applied for this job.",
                "Applicant: I am interested in the work, and I thought I could use my experience.",
                "Interviewer: Can you work here for a long time?",
                "Applicant: Yes. If possible, I would like to work for a long time."
            ],
            "zh-CN": [
                "面试官：请告诉我您申请这份工作的理由。",
                "应聘者：我对工作内容感兴趣，也觉得可以发挥自己的经验。",
                "面试官：您可以长期工作吗？",
                "应聘者：可以。如果可以的话，我想长期工作。"
            ],
            "zh-TW": [
                "面試官：請告訴我您申請這份工作的理由。",
                "應徵者：我對工作內容感興趣，也覺得可以發揮自己的經驗。",
                "面試官：您可以長期工作嗎？",
                "應徵者：可以。如果可以的話，我想長期工作。"
            ],
            ko: [
                "면접관: 이 일에 지원한 이유를 알려 주세요.",
                "지원자: 업무 내용에 관심이 있고 경험도 살릴 수 있다고 생각했습니다.",
                "면접관: 오래 일할 수 있나요?",
                "지원자: 네. 가능하면 오래 일하고 싶습니다."
            ],
            vi: [
                "Người phỏng vấn: Xin hãy cho biết lý do bạn ứng tuyển công việc này.",
                "Người ứng tuyển: Tôi quan tâm đến nội dung công việc và nghĩ rằng có thể sử dụng kinh nghiệm của mình.",
                "Người phỏng vấn: Bạn có thể làm việc lâu dài không?",
                "Người ứng tuyển: Vâng. Nếu có thể, tôi muốn làm việc lâu dài."
            ]
        }
    ),

    makeA2JobInterviewDialogue(
        "a2_jobinterview_005",
        "自分の長所を伝える",
        [
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "あなたの長所を教えてください。",
                target: "あなたのちょうしょをおしえてください",
                ruby: "あなたの<ruby>長所<rt>ちょうしょ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Anata no chōsho o oshiete kudasai."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "時間を守ることと、最後まで続けることが得意です。",
                target: "じかんをまもることと さいごまでつづけることがとくいです",
                ruby: "<ruby>時間<rt>じかん</rt></ruby>を<ruby>守<rt>まも</rt></ruby>ることと、<ruby>最後<rt>さいご</rt></ruby>まで<ruby>続<rt>つづ</rt></ruby>けることが<ruby>得意<rt>とくい</rt></ruby>です。",
                romaji: "Jikan o mamoru koto to, saigo made tsuzukeru koto ga tokui desu."
            },
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "チームで働くことは好きですか。",
                target: "ちーむではたらくことはすきですか",
                ruby: "チームで<ruby>働<rt>はたら</rt></ruby>くことは<ruby>好<rt>す</rt></ruby>きですか。",
                romaji: "Chīmu de hataraku koto wa suki desu ka."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "はい。わからないことは、すぐに相談します。",
                target: "はい わからないことは すぐにそうだんします",
                ruby: "はい。わからないことは、すぐに<ruby>相談<rt>そうだん</rt></ruby>します。",
                romaji: "Hai. Wakaranai koto wa, sugu ni sōdan shimasu."
            }
        ],
        {
            ja: [
                "面接官：あなたの長所を教えてください。",
                "応募者：時間を守ることと、最後まで続けることが得意です。",
                "面接官：チームで働くことは好きですか。",
                "応募者：はい。わからないことは、すぐに相談します。"
            ],
            en: [
                "Interviewer: Please tell me your strengths.",
                "Applicant: I am good at being on time and continuing work until the end.",
                "Interviewer: Do you like working in a team?",
                "Applicant: Yes. If I do not understand something, I ask for advice right away."
            ],
            "zh-CN": [
                "面试官：请告诉我您的优点。",
                "应聘者：我擅长守时，也能坚持到最后。",
                "面试官：您喜欢团队合作吗？",
                "应聘者：喜欢。有不明白的事情，我会马上请教。"
            ],
            "zh-TW": [
                "面試官：請告訴我您的優點。",
                "應徵者：我擅長守時，也能堅持到最後。",
                "面試官：您喜歡團隊合作嗎？",
                "應徵者：喜歡。有不明白的事情，我會馬上請教。"
            ],
            ko: [
                "면접관: 당신의 장점을 알려 주세요.",
                "지원자: 시간을 지키는 것과 끝까지 계속하는 것이 장점입니다.",
                "면접관: 팀에서 일하는 것을 좋아하나요?",
                "지원자: 네. 모르는 것은 바로 상담합니다."
            ],
            vi: [
                "Người phỏng vấn: Xin hãy cho biết điểm mạnh của bạn.",
                "Người ứng tuyển: Tôi giỏi giữ đúng giờ và làm đến cuối.",
                "Người phỏng vấn: Bạn có thích làm việc theo nhóm không?",
                "Người ứng tuyển: Có. Nếu không hiểu điều gì, tôi sẽ hỏi ngay."
            ]
        }
    ),

    makeA2JobInterviewDialogue(
        "a2_jobinterview_006",
        "勤務条件を確認する",
        [
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "いつから働くことができますか。",
                target: "いつからはたらくことができますか",
                ruby: "いつから<ruby>働<rt>はたら</rt></ruby>くことができますか。",
                romaji: "Itsu kara hataraku koto ga dekimasu ka."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "来月の一日から働けます。",
                target: "らいげつのついたちからはたらけます",
                ruby: "<ruby>来月<rt>らいげつ</rt></ruby>の<ruby>一日<rt>ついたち</rt></ruby>から<ruby>働<rt>はたら</rt></ruby>けます。",
                romaji: "Raigetsu no tsuitachi kara hatarakemasu."
            },
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "土曜日も勤務できますか。",
                target: "どようびもきんむできますか",
                ruby: "<ruby>土曜日<rt>どようび</rt></ruby>も<ruby>勤務<rt>きんむ</rt></ruby>できますか。",
                romaji: "Doyōbi mo kinmu dekimasu ka."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "はい。月に二回くらいなら大丈夫です。",
                target: "はい つきににかいくらいならだいじょうぶです",
                ruby: "はい。<ruby>月<rt>つき</rt></ruby>に<ruby>二回<rt>にかい</rt></ruby>くらいなら<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。",
                romaji: "Hai. Tsuki ni ni-kai kurai nara daijōbu desu."
            }
        ],
        {
            ja: [
                "面接官：いつから働くことができますか。",
                "応募者：来月の一日から働けます。",
                "面接官：土曜日も勤務できますか。",
                "応募者：はい。月に二回くらいなら大丈夫です。"
            ],
            en: [
                "Interviewer: When can you start working?",
                "Applicant: I can start working from the first day of next month.",
                "Interviewer: Can you also work on Saturdays?",
                "Applicant: Yes. About twice a month would be okay."
            ],
            "zh-CN": [
                "面试官：您什么时候可以开始工作？",
                "应聘者：我可以从下个月一号开始工作。",
                "面试官：星期六也可以上班吗？",
                "应聘者：可以。如果一个月两次左右的话没问题。"
            ],
            "zh-TW": [
                "面試官：您什麼時候可以開始工作？",
                "應徵者：我可以從下個月一號開始工作。",
                "面試官：星期六也可以上班嗎？",
                "應徵者：可以。如果一個月兩次左右的話沒問題。"
            ],
            ko: [
                "면접관: 언제부터 일할 수 있나요?",
                "지원자: 다음 달 1일부터 일할 수 있습니다.",
                "면접관: 토요일도 근무할 수 있나요?",
                "지원자: 네. 한 달에 두 번 정도라면 괜찮습니다."
            ],
            vi: [
                "Người phỏng vấn: Khi nào bạn có thể bắt đầu làm việc?",
                "Người ứng tuyển: Tôi có thể bắt đầu làm từ ngày mùng 1 tháng sau.",
                "Người phỏng vấn: Bạn có thể làm cả thứ Bảy không?",
                "Người ứng tuyển: Có. Khoảng hai lần một tháng thì được."
            ]
        }
    ),

    makeA2JobInterviewDialogue(
        "a2_jobinterview_007",
        "面接で質問する",
        [
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "最後に、何か質問はありますか。",
                target: "さいごに なにかしつもんはありますか",
                ruby: "<ruby>最後<rt>さいご</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>か<ruby>質問<rt>しつもん</rt></ruby>はありますか。",
                romaji: "Saigo ni, nanika shitsumon wa arimasu ka."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "はい。研修は何日くらいありますか。",
                target: "はい けんしゅうはなんにちくらいありますか",
                ruby: "はい。<ruby>研修<rt>けんしゅう</rt></ruby>は<ruby>何日<rt>なんにち</rt></ruby>くらいありますか。",
                romaji: "Hai. Kenshū wa nannichi kurai arimasu ka."
            },
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "最初の一週間は、先輩と一緒に仕事をします。",
                target: "さいしょのいっしゅうかんは せんぱいといっしょにしごとをします",
                ruby: "<ruby>最初<rt>さいしょ</rt></ruby>の<ruby>一週間<rt>いっしゅうかん</rt></ruby>は、<ruby>先輩<rt>せんぱい</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>仕事<rt>しごと</rt></ruby>をします。",
                romaji: "Saisho no isshūkan wa, senpai to issho ni shigoto o shimasu."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "わかりました。安心しました。",
                target: "わかりました あんしんしました",
                ruby: "わかりました。<ruby>安心<rt>あんしん</rt></ruby>しました。",
                romaji: "Wakarimashita. Anshin shimashita."
            }
        ],
        {
            ja: [
                "面接官：最後に、何か質問はありますか。",
                "応募者：はい。研修は何日くらいありますか。",
                "面接官：最初の一週間は、先輩と一緒に仕事をします。",
                "応募者：わかりました。安心しました。"
            ],
            en: [
                "Interviewer: Finally, do you have any questions?",
                "Applicant: Yes. About how many days is the training?",
                "Interviewer: For the first week, you will work together with a senior worker.",
                "Applicant: I understand. I feel relieved."
            ],
            "zh-CN": [
                "面试官：最后，您有什么问题吗？",
                "应聘者：有。培训大概有几天？",
                "面试官：最初一周会和前辈一起工作。",
                "应聘者：明白了。我放心了。"
            ],
            "zh-TW": [
                "面試官：最後，您有什麼問題嗎？",
                "應徵者：有。培訓大概有幾天？",
                "面試官：最初一週會和前輩一起工作。",
                "應徵者：明白了。我放心了。"
            ],
            ko: [
                "면접관: 마지막으로 질문이 있나요?",
                "지원자: 네. 연수는 며칠 정도 있나요?",
                "면접관: 처음 일주일은 선배와 함께 일합니다.",
                "지원자: 알겠습니다. 안심했습니다."
            ],
            vi: [
                "Người phỏng vấn: Cuối cùng, bạn có câu hỏi nào không?",
                "Người ứng tuyển: Có. Thời gian đào tạo khoảng mấy ngày ạ?",
                "Người phỏng vấn: Tuần đầu tiên, bạn sẽ làm việc cùng với người hướng dẫn.",
                "Người ứng tuyển: Tôi hiểu rồi. Tôi thấy yên tâm."
            ]
        }
    ),

    makeA2JobInterviewDialogue(
        "a2_jobinterview_008",
        "面接を終える",
        [
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "本日の面接は以上です。",
                target: "ほんじつのめんせつはいじょうです",
                ruby: "<ruby>本日<rt>ほんじつ</rt></ruby>の<ruby>面接<rt>めんせつ</rt></ruby>は<ruby>以上<rt>いじょう</rt></ruby>です。",
                romaji: "Honjitsu no mensetsu wa ijō desu."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "本日はお時間をいただき、ありがとうございました。",
                target: "ほんじつはおじかんをいただき ありがとうございました",
                ruby: "<ruby>本日<rt>ほんじつ</rt></ruby>はお<ruby>時間<rt>じかん</rt></ruby>をいただき、ありがとうございました。",
                romaji: "Honjitsu wa ojikan o itadaki, arigatō gozaimashita."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "結果はいつごろわかりますか。",
                target: "けっかはいつごろわかりますか",
                ruby: "<ruby>結果<rt>けっか</rt></ruby>はいつごろわかりますか。",
                romaji: "Kekka wa itsu goro wakarimasu ka."
            },
            {
                label: "話者A",
                key: "interviewer",
                name: "面接官",
                line: "一週間以内に電話で連絡します。",
                target: "いっしゅうかんいないにでんわでれんらくします",
                ruby: "<ruby>一週間以内<rt>いっしゅうかんいない</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>で<ruby>連絡<rt>れんらく</rt></ruby>します。",
                romaji: "Isshūkan inai ni denwa de renraku shimasu."
            }
        ],
        {
            ja: [
                "面接官：本日の面接は以上です。",
                "応募者：本日はお時間をいただき、ありがとうございました。",
                "応募者：結果はいつごろわかりますか。",
                "面接官：一週間以内に電話で連絡します。"
            ],
            en: [
                "Interviewer: That is all for today’s interview.",
                "Applicant: Thank you very much for your time today.",
                "Applicant: Around when will I know the result?",
                "Interviewer: We will contact you by phone within one week."
            ],
            "zh-CN": [
                "面试官：今天的面试到这里结束。",
                "应聘者：今天感谢您抽出时间。",
                "应聘者：结果大概什么时候知道？",
                "面试官：一周以内会用电话联系您。"
            ],
            "zh-TW": [
                "面試官：今天的面試到這裡結束。",
                "應徵者：今天感謝您抽出時間。",
                "應徵者：結果大概什麼時候知道？",
                "面試官：一週以內會用電話聯絡您。"
            ],
            ko: [
                "면접관: 오늘 면접은 이상입니다.",
                "지원자: 오늘 시간 내 주셔서 감사합니다.",
                "지원자: 결과는 언제쯤 알 수 있나요?",
                "면접관: 일주일 이내에 전화로 연락드리겠습니다."
            ],
            vi: [
                "Người phỏng vấn: Buổi phỏng vấn hôm nay đến đây là kết thúc.",
                "Người ứng tuyển: Cảm ơn ông/bà đã dành thời gian hôm nay.",
                "Người ứng tuyển: Khoảng khi nào tôi biết kết quả ạ?",
                "Người phỏng vấn: Chúng tôi sẽ liên lạc bằng điện thoại trong vòng một tuần."
            ]
        }
    )

];