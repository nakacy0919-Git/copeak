// =====================================================
// Japeak A2 Level
// Scene: 仕事を探してみよう
// File: data/japeak-a2-job-search.js
// Category Key: a2_job_search
// =====================================================

const a2JobSearchLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeA2JobSearchTranslations(translations) {
    const completed = {};
    a2JobSearchLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const a2JobSearchContext = {
    ja: "仕事を探すときに、希望条件、求人票、勤務時間、応募、履歴書、面接日程、結果の確認について話す日本語を練習します。",
    en: "Practice Japanese for looking for a job, including job preferences, job listings, working hours, applications, resumes, interview schedules, and checking results.",
    "zh-CN": "练习找工作时使用的日语，包括希望条件、招聘信息、工作时间、应聘、简历、面试日程和结果确认。",
    "zh-TW": "練習找工作時使用的日語，包括希望條件、求人資訊、工作時間、應徵、履歷、面試日程和結果確認。",
    ko: "일자리를 찾을 때 희망 조건, 구인표, 근무 시간, 지원, 이력서, 면접 일정, 결과 확인에 대해 말하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi tìm việc, gồm điều kiện mong muốn, thông tin tuyển dụng, giờ làm việc, ứng tuyển, sơ yếu lý lịch, lịch phỏng vấn và確認 kết quả.",
    tl: "Practice ng Japanese para maghanap ng trabaho, tulad ng job preferences, job listings, working hours, applications, resumes, interview schedules, at checking results.",
    id: "Latihan bahasa Jepang untuk mencari pekerjaan, termasuk syarat pekerjaan yang diinginkan, lowongan kerja, jam kerja, lamaran, resume, jadwal wawancara, dan pengecekan hasil.",
    th: "ฝึกภาษาญี่ปุ่นสำหรับการหางาน เช่น เงื่อนไขที่ต้องการ ข้อมูลรับสมัครงาน เวลาทำงาน การสมัคร เรซูเม่ ตารางสัมภาษณ์ และการ確認ผล",
    my: "အလုပ်ရှာရာတွင် job preference၊ job listing၊ working hours၊ application၊ resume၊ interview schedule နှင့် result check အကြောင်း ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ស្វែងរកការងារ ដូចជា លក្ខខណ្ឌដែលចង់បាន ព័ត៌មានជ្រើសរើសបុគ្គលិក ម៉ោងធ្វើការ ការដាក់ពាក្យ ប្រវត្តិរូប កាលវិភាគសម្ភាសន៍ និងការពិនិត្យលទ្ធផល។",
    ne: "काम खोज्दा job preference, job listing, working hours, application, resume, interview schedule र result check बारे जापानी अभ्यास।",
    mn: "Ажил хайхад хэрэгтэй япон хэл: хүссэн нөхцөл, ажлын зар, ажлын цаг, өргөдөл, анкет, ярилцлагын тов, үр дүн шалгах.",
    si: "job එකක් හොයන විට job preferences, job listings, working hours, applications, resumes, interview schedules සහ results check ගැන ජපන් භාෂා පුහුණුව.",
    bn: "কাজ খোঁজার সময় job preferences, job listings, working hours, applications, resumes, interview schedules এবং results check নিয়ে জাপানি অনুশীলন।",
    pt: "Prática de japonês para procurar trabalho: preferências, vagas, horário de trabalho, candidatura, currículo, entrevista e confirmação do resultado.",
    es: "Práctica de japonés para buscar trabajo: preferencias, ofertas de empleo, horario laboral, solicitud, currículum, entrevista y confirmación del resultado.",
    fr: "Entraînement en japonais pour chercher un emploi : préférences, offres, horaires, candidature, CV, entretien et vérification du résultat.",
    ru: "Практика японского языка для поиска работы: пожелания, вакансии, рабочие часы, отклик, резюме, собеседование и проверка результата.",
    uk: "Практика японської мови для пошуку роботи: побажання, вакансії, робочі години, заявка, резюме, співбесіда та перевірка результату."
};

const a2JobSearchSpeakerNames = {
    counselor: {
        ja: "相談員",
        en: "Job Counselor",
        "zh-CN": "咨询员",
        "zh-TW": "諮詢員",
        ko: "상담원",
        vi: "Nhân viên tư vấn",
        tl: "Job counselor",
        id: "Konselor kerja",
        th: "เจ้าหน้าที่ให้คำปรึกษา",
        my: "အလုပ်အကြံပေးသူ",
        km: "អ្នកប្រឹក្សាការងារ",
        ne: "रोजगार परामर्शदाता",
        mn: "Ажлын зөвлөх",
        si: "රැකියා උපදේශකයා",
        bn: "চাকরি পরামর্শদাতা",
        pt: "Consultor de emprego",
        es: "Orientador laboral",
        fr: "Conseiller emploi",
        ru: "Консультант по работе",
        uk: "Консультант з працевлаштування"
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
    company: {
        ja: "会社の人",
        en: "Company Staff",
        "zh-CN": "公司人员",
        "zh-TW": "公司人員",
        ko: "회사 직원",
        vi: "Nhân viên công ty",
        tl: "Company staff",
        id: "Staf perusahaan",
        th: "เจ้าหน้าที่บริษัท",
        my: "ကုမ္ပဏီဝန်ထမ်း",
        km: "បុគ្គលិកក្រុមហ៊ុន",
        ne: "कम्पनी कर्मचारी",
        mn: "Компанийн ажилтан",
        si: "සමාගම් සේවකයා",
        bn: "কোম্পানির কর্মী",
        pt: "Funcionário da empresa",
        es: "Personal de la empresa",
        fr: "Personnel de l’entreprise",
        ru: "Сотрудник компании",
        uk: "Працівник компанії"
    }
};

function makeA2JobSearchDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeA2JobSearchTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_job_search",
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
            speakerNames: a2JobSearchSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2JobSearchContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakA2JobSearchData = [

    makeA2JobSearchDialogue(
        "a2_jobsearch_001",
        "仕事探しを相談する",
        [
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "仕事を探しているのですが、相談できますか。",
                target: "しごとをさがしているのですが そうだんできますか",
                ruby: "<ruby>仕事<rt>しごと</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しているのですが、<ruby>相談<rt>そうだん</rt></ruby>できますか。",
                romaji: "Shigoto o sagashite iru no desu ga, sōdan dekimasu ka."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "はい。どんな仕事を希望していますか。",
                target: "はい どんなしごとをきぼうしていますか",
                ruby: "はい。どんな<ruby>仕事<rt>しごと</rt></ruby>を<ruby>希望<rt>きぼう</rt></ruby>していますか。",
                romaji: "Hai. Donna shigoto o kibō shite imasu ka."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "工場の仕事を探しています。",
                target: "こうじょうのしごとをさがしています",
                ruby: "<ruby>工場<rt>こうじょう</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しています。",
                romaji: "Kōjō no shigoto o sagashite imasu."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "経験があるかどうかも確認しましょう。",
                target: "けいけんがあるかどうかもかくにんしましょう",
                ruby: "<ruby>経験<rt>けいけん</rt></ruby>があるかどうかも<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Keiken ga aru ka dō ka mo kakunin shimashō."
            }
        ],
        {
            ja: [
                "応募者：仕事を探しているのですが、相談できますか。",
                "相談員：はい。どんな仕事を希望していますか。",
                "応募者：工場の仕事を探しています。",
                "相談員：経験があるかどうかも確認しましょう。"
            ],
            en: [
                "Applicant: I am looking for a job. Can I ask for advice?",
                "Job Counselor: Yes. What kind of job are you hoping for?",
                "Applicant: I am looking for factory work.",
                "Job Counselor: Let’s also check whether you have experience."
            ],
            "zh-CN": [
                "应聘者：我正在找工作，可以咨询吗？",
                "咨询员：可以。您希望找什么样的工作？",
                "应聘者：我在找工厂的工作。",
                "咨询员：我们也确认一下您有没有经验吧。"
            ],
            "zh-TW": [
                "應徵者：我正在找工作，可以諮詢嗎？",
                "諮詢員：可以。您希望找什麼樣的工作？",
                "應徵者：我在找工廠的工作。",
                "諮詢員：我們也確認一下您有沒有經驗吧。"
            ],
            ko: [
                "지원자: 일을 찾고 있는데 상담할 수 있나요?",
                "상담원: 네. 어떤 일을 희망하시나요?",
                "지원자: 공장 일을 찾고 있습니다.",
                "상담원: 경험이 있는지도 확인해 봅시다."
            ],
            vi: [
                "Người ứng tuyển: Tôi đang tìm việc, có thể相談 được không ạ?",
                "Nhân viên tư vấn: Vâng. Bạn muốn công việc như thế nào?",
                "Người ứng tuyển: Tôi đang tìm công việc ở nhà máy.",
                "Nhân viên tư vấn: Chúng ta cũng hãy kiểm tra xem bạn có kinh nghiệm không."
            ]
        }
    ),

    makeA2JobSearchDialogue(
        "a2_jobsearch_002",
        "求人票を見る",
        [
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "この求人票の見方を教えてください。",
                target: "このきゅうじんひょうのみかたをおしえてください",
                ruby: "この<ruby>求人票<rt>きゅうじんひょう</rt></ruby>の<ruby>見方<rt>みかた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Kono kyūjinhyō no mikata o oshiete kudasai."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "ここに仕事内容と勤務時間が書いてあります。",
                target: "ここにしごとないようときんむじかんがかいてあります",
                ruby: "ここに<ruby>仕事内容<rt>しごとないよう</rt></ruby>と<ruby>勤務時間<rt>きんむじかん</rt></ruby>が<ruby>書<rt>か</rt></ruby>いてあります。",
                romaji: "Koko ni shigoto naiyō to kinmu jikan ga kaite arimasu."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "時給はいくらですか。",
                target: "じきゅうはいくらですか",
                ruby: "<ruby>時給<rt>じきゅう</rt></ruby>はいくらですか。",
                romaji: "Jikyū wa ikura desu ka."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "時給は千二百円で、交通費も一部出ます。",
                target: "じきゅうはせんにひゃくえんで こうつうひもいちぶでます",
                ruby: "<ruby>時給<rt>じきゅう</rt></ruby>は<ruby>千二百円<rt>せんにひゃくえん</rt></ruby>で、<ruby>交通費<rt>こうつうひ</rt></ruby>も<ruby>一部<rt>いちぶ</rt></ruby><ruby>出<rt>で</rt></ruby>ます。",
                romaji: "Jikyū wa sen nihyaku-en de, kōtsūhi mo ichibu demasu."
            }
        ],
        {
            ja: [
                "応募者：この求人票の見方を教えてください。",
                "相談員：ここに仕事内容と勤務時間が書いてあります。",
                "応募者：時給はいくらですか。",
                "相談員：時給は千二百円で、交通費も一部出ます。"
            ],
            en: [
                "Applicant: Please tell me how to read this job listing.",
                "Job Counselor: The job description and working hours are written here.",
                "Applicant: How much is the hourly wage?",
                "Job Counselor: The hourly wage is 1,200 yen, and part of the transportation cost is also paid."
            ],
            "zh-CN": [
                "应聘者：请告诉我这张招聘信息怎么看。",
                "咨询员：这里写着工作内容和工作时间。",
                "应聘者：时薪是多少？",
                "咨询员：时薪是1200日元，交通费也会支付一部分。"
            ],
            "zh-TW": [
                "應徵者：請告訴我這張求人資訊怎麼看。",
                "諮詢員：這裡寫著工作內容和工作時間。",
                "應徵者：時薪是多少？",
                "諮詢員：時薪是1200日圓，交通費也會支付一部分。"
            ],
            ko: [
                "지원자: 이 구인표 보는 방법을 알려 주세요.",
                "상담원: 여기에 업무 내용과 근무 시간이 적혀 있습니다.",
                "지원자: 시급은 얼마인가요?",
                "상담원: 시급은 1,200엔이고 교통비도 일부 지급됩니다."
            ],
            vi: [
                "Người ứng tuyển: Xin hãy chỉ tôi cách xem thông tin tuyển dụng này.",
                "Nhân viên tư vấn: Ở đây có ghi nội dung công việc và giờ làm việc.",
                "Người ứng tuyển: Lương theo giờ là bao nhiêu ạ?",
                "Nhân viên tư vấn: Lương theo giờ là 1.200 yên, và có hỗ trợ một phần tiền đi lại."
            ]
        }
    ),

    makeA2JobSearchDialogue(
        "a2_jobsearch_003",
        "勤務時間を確認する",
        [
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "勤務時間について確認したいです。",
                target: "きんむじかんについてかくにんしたいです",
                ruby: "<ruby>勤務時間<rt>きんむじかん</rt></ruby>について<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Kinmu jikan ni tsuite kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "この仕事は朝九時から夕方五時までです。",
                target: "このしごとはあさくじからゆうがたごじまでです",
                ruby: "この<ruby>仕事<rt>しごと</rt></ruby>は<ruby>朝九時<rt>あさくじ</rt></ruby>から<ruby>夕方五時<rt>ゆうがたごじ</rt></ruby>までです。",
                romaji: "Kono shigoto wa asa ku-ji kara yūgata go-ji made desu."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "残業はありますか。",
                target: "ざんぎょうはありますか",
                ruby: "<ruby>残業<rt>ざんぎょう</rt></ruby>はありますか。",
                romaji: "Zangyō wa arimasu ka."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "忙しい時期は、一日一時間くらいある場合があります。",
                target: "いそがしいじきは いちにちいちじかんくらいあるばあいがあります",
                ruby: "<ruby>忙<rt>いそが</rt></ruby>しい<ruby>時期<rt>じき</rt></ruby>は、<ruby>一日一時間<rt>いちにちいちじかん</rt></ruby>くらいある<ruby>場合<rt>ばあい</rt></ruby>があります。",
                romaji: "Isogashii jiki wa, ichinichi ichi-jikan kurai aru baai ga arimasu."
            }
        ],
        {
            ja: [
                "応募者：勤務時間について確認したいです。",
                "相談員：この仕事は朝九時から夕方五時までです。",
                "応募者：残業はありますか。",
                "相談員：忙しい時期は、一日一時間くらいある場合があります。"
            ],
            en: [
                "Applicant: I would like to check the working hours.",
                "Job Counselor: This job is from 9 a.m. to 5 p.m.",
                "Applicant: Is there overtime?",
                "Job Counselor: During busy periods, there may be about one hour of overtime per day."
            ],
            "zh-CN": [
                "应聘者：我想确认工作时间。",
                "咨询员：这份工作是早上九点到下午五点。",
                "应聘者：有加班吗？",
                "咨询员：忙的时候，有时一天大约加班一小时。"
            ],
            "zh-TW": [
                "應徵者：我想確認工作時間。",
                "諮詢員：這份工作是早上九點到下午五點。",
                "應徵者：有加班嗎？",
                "諮詢員：忙的時候，有時一天大約加班一小時。"
            ],
            ko: [
                "지원자: 근무 시간에 대해 확인하고 싶습니다.",
                "상담원: 이 일은 오전 9시부터 오후 5시까지입니다.",
                "지원자: 잔업이 있나요?",
                "상담원: 바쁜 시기에는 하루에 한 시간 정도 있는 경우가 있습니다."
            ],
            vi: [
                "Người ứng tuyển: Tôi muốn確認 về giờ làm việc.",
                "Nhân viên tư vấn: Công việc này từ 9 giờ sáng đến 5 giờ chiều.",
                "Người ứng tuyển: Có làm thêm giờ không ạ?",
                "Nhân viên tư vấn: Vào thời điểm bận, có trường hợp làm thêm khoảng một giờ mỗi ngày."
            ]
        }
    ),

    makeA2JobSearchDialogue(
        "a2_jobsearch_004",
        "応募できるか確認する",
        [
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "この仕事に応募できますか。",
                target: "このしごとにおうぼできますか",
                ruby: "この<ruby>仕事<rt>しごと</rt></ruby>に<ruby>応募<rt>おうぼ</rt></ruby>できますか。",
                romaji: "Kono shigoto ni ōbo dekimasu ka."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "在留カードと働ける時間を確認します。",
                target: "ざいりゅうかーどとはたらけるじかんをかくにんします",
                ruby: "<ruby>在留<rt>ざいりゅう</rt></ruby>カードと<ruby>働<rt>はたら</rt></ruby>ける<ruby>時間<rt>じかん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。",
                romaji: "Zairyū kādo to hatarakeru jikan o kakunin shimasu."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "このカードで大丈夫ですか。",
                target: "このかーどでだいじょうぶですか",
                ruby: "このカードで<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Kono kādo de daijōbu desu ka."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "確認できました。応募の手続きを進めましょう。",
                target: "かくにんできました おうぼのてつづきをすすめましょう",
                ruby: "<ruby>確認<rt>かくにん</rt></ruby>できました。<ruby>応募<rt>おうぼ</rt></ruby>の<ruby>手続<rt>てつづ</rt></ruby>きを<ruby>進<rt>すす</rt></ruby>めましょう。",
                romaji: "Kakunin dekimashita. Ōbo no tetsuzuki o susumemashō."
            }
        ],
        {
            ja: [
                "応募者：この仕事に応募できますか。",
                "相談員：在留カードと働ける時間を確認します。",
                "応募者：このカードで大丈夫ですか。",
                "相談員：確認できました。応募の手続きを進めましょう。"
            ],
            en: [
                "Applicant: Can I apply for this job?",
                "Job Counselor: I will check your residence card and the hours you can work.",
                "Applicant: Is this card okay?",
                "Job Counselor: I was able to confirm it. Let’s proceed with the application."
            ],
            "zh-CN": [
                "应聘者：我可以申请这份工作吗？",
                "咨询员：我确认一下您的在留卡和可以工作的时间。",
                "应聘者：这张卡可以吗？",
                "咨询员：确认好了。我们继续办理应聘手续吧。"
            ],
            "zh-TW": [
                "應徵者：我可以申請這份工作嗎？",
                "諮詢員：我確認一下您的在留卡和可以工作的時間。",
                "應徵者：這張卡可以嗎？",
                "諮詢員：確認好了。我們繼續辦理應徵手續吧。"
            ],
            ko: [
                "지원자: 이 일에 지원할 수 있나요?",
                "상담원: 재류카드와 일할 수 있는 시간을 확인하겠습니다.",
                "지원자: 이 카드로 괜찮나요?",
                "상담원: 확인되었습니다. 지원 절차를 진행합시다."
            ],
            vi: [
                "Người ứng tuyển: Tôi có thể ứng tuyển công việc này không ạ?",
                "Nhân viên tư vấn: Tôi sẽ kiểm tra thẻ cư trú và thời gian bạn có thể làm việc.",
                "Người ứng tuyển: Thẻ này có được không ạ?",
                "Nhân viên tư vấn: Đã確認 được rồi. Chúng ta hãy tiến hành thủ tục ứng tuyển."
            ]
        }
    ),

    makeA2JobSearchDialogue(
        "a2_jobsearch_005",
        "履歴書を書く",
        [
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "履歴書の書き方を教えてください。",
                target: "りれきしょのかきかたをおしえてください",
                ruby: "<ruby>履歴書<rt>りれきしょ</rt></ruby>の<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Rirekisho no kakikata o oshiete kudasai."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "まず、名前、住所、電話番号を書いてください。",
                target: "まず なまえ じゅうしょ でんわばんごうをかいてください",
                ruby: "まず、<ruby>名前<rt>なまえ</rt></ruby>、<ruby>住所<rt>じゅうしょ</rt></ruby>、<ruby>電話番号<rt>でんわばんごう</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Mazu, namae, jūsho, denwa bangō o kaite kudasai."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "志望理由は長く書いた方がいいですか。",
                target: "しぼうりゆうはながくかいたほうがいいですか",
                ruby: "<ruby>志望理由<rt>しぼうりゆう</rt></ruby>は<ruby>長<rt>なが</rt></ruby>く<ruby>書<rt>か</rt></ruby>いた<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Shibō riyū wa nagaku kaita hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "counselor",
                name: "相談員",
                line: "短くてもいいので、働きたい理由を具体的に書きましょう。",
                target: "みじかくてもいいので はたらきたいりゆうをぐたいてきにかきましょう",
                ruby: "<ruby>短<rt>みじか</rt></ruby>くてもいいので、<ruby>働<rt>はたら</rt></ruby>きたい<ruby>理由<rt>りゆう</rt></ruby>を<ruby>具体的<rt>ぐたいてき</rt></ruby>に<ruby>書<rt>か</rt></ruby>きましょう。",
                romaji: "Mijikakute mo ii node, hatarakitai riyū o gutaiteki ni kakimashō."
            }
        ],
        {
            ja: [
                "応募者：履歴書の書き方を教えてください。",
                "相談員：まず、名前、住所、電話番号を書いてください。",
                "応募者：志望理由は長く書いた方がいいですか。",
                "相談員：短くてもいいので、働きたい理由を具体的に書きましょう。"
            ],
            en: [
                "Applicant: Please tell me how to write a resume.",
                "Job Counselor: First, write your name, address, and phone number.",
                "Applicant: Should I write a long reason for applying?",
                "Job Counselor: It can be short, but write clearly why you want to work there."
            ],
            "zh-CN": [
                "应聘者：请告诉我简历怎么写。",
                "咨询员：首先，请写姓名、地址和电话号码。",
                "应聘者：志愿理由写长一点比较好吗？",
                "咨询员：短也可以，请具体写出想工作的理由。"
            ],
            "zh-TW": [
                "應徵者：請告訴我履歷怎麼寫。",
                "諮詢員：首先，請寫姓名、地址和電話號碼。",
                "應徵者：志願理由寫長一點比較好嗎？",
                "諮詢員：短也可以，請具體寫出想工作的理由。"
            ],
            ko: [
                "지원자: 이력서 쓰는 방법을 알려 주세요.",
                "상담원: 먼저 이름, 주소, 전화번호를 써 주세요.",
                "지원자: 지원 동기는 길게 쓰는 것이 좋나요?",
                "상담원: 짧아도 괜찮으니 일하고 싶은 이유를 구체적으로 씁시다."
            ],
            vi: [
                "Người ứng tuyển: Xin hãy chỉ tôi cách viết sơ yếu lý lịch.",
                "Nhân viên tư vấn: Trước tiên, hãy viết tên, địa chỉ và số điện thoại.",
                "Người ứng tuyển: Lý do ứng tuyển nên viết dài thì tốt hơn không ạ?",
                "Nhân viên tư vấn: Ngắn cũng được, hãy viết cụ thể lý do bạn muốn làm việc."
            ]
        }
    ),

    makeA2JobSearchDialogue(
        "a2_jobsearch_006",
        "電話で応募する",
        [
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "求人を見てお電話しました。",
                target: "きゅうじんをみておでんわしました",
                ruby: "<ruby>求人<rt>きゅうじん</rt></ruby>を<ruby>見<rt>み</rt></ruby>てお<ruby>電話<rt>でんわ</rt></ruby>しました。",
                romaji: "Kyūjin o mite odenwa shimashita."
            },
            {
                label: "話者A",
                key: "company",
                name: "会社の人",
                line: "ありがとうございます。応募のご連絡ですね。",
                target: "ありがとうございます おうぼのごれんらくですね",
                ruby: "ありがとうございます。<ruby>応募<rt>おうぼ</rt></ruby>のご<ruby>連絡<rt>れんらく</rt></ruby>ですね。",
                romaji: "Arigatō gozaimasu. Ōbo no gorenraku desu ne."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "はい。まだ募集していますか。",
                target: "はい まだぼしゅうしていますか",
                ruby: "はい。まだ<ruby>募集<rt>ぼしゅう</rt></ruby>していますか。",
                romaji: "Hai. Mada boshū shite imasu ka."
            },
            {
                label: "話者A",
                key: "company",
                name: "会社の人",
                line: "はい。面接の日程を決めましょう。",
                target: "はい めんせつのにっていをきめましょう",
                ruby: "はい。<ruby>面接<rt>めんせつ</rt></ruby>の<ruby>日程<rt>にってい</rt></ruby>を<ruby>決<rt>き</rt></ruby>めましょう。",
                romaji: "Hai. Mensetsu no nittei o kimemashō."
            }
        ],
        {
            ja: [
                "応募者：求人を見てお電話しました。",
                "会社の人：ありがとうございます。応募のご連絡ですね。",
                "応募者：はい。まだ募集していますか。",
                "会社の人：はい。面接の日程を決めましょう。"
            ],
            en: [
                "Applicant: I saw the job listing and called.",
                "Company Staff: Thank you. You are calling about applying, right?",
                "Applicant: Yes. Are you still hiring?",
                "Company Staff: Yes. Let’s decide the interview schedule."
            ],
            "zh-CN": [
                "应聘者：我看到招聘信息后打电话来的。",
                "公司人员：谢谢。您是关于应聘的联系吧。",
                "应聘者：是的。现在还在招聘吗？",
                "公司人员：是的。我们来决定面试日程吧。"
            ],
            "zh-TW": [
                "應徵者：我看到求人資訊後打電話來的。",
                "公司人員：謝謝。您是關於應徵的聯絡吧。",
                "應徵者：是的。現在還在招募嗎？",
                "公司人員：是的。我們來決定面試日程吧。"
            ],
            ko: [
                "지원자: 구인 정보를 보고 전화드렸습니다.",
                "회사 직원: 감사합니다. 지원 연락이시군요.",
                "지원자: 네. 아직 모집하고 있나요?",
                "회사 직원: 네. 면접 일정을 정합시다."
            ],
            vi: [
                "Người ứng tuyển: Tôi thấy thông tin tuyển dụng nên gọi điện.",
                "Nhân viên công ty: Cảm ơn. Bạn gọi về việc ứng tuyển đúng không ạ?",
                "Người ứng tuyển: Vâng. Công ty còn tuyển không ạ?",
                "Nhân viên công ty: Có. Chúng ta hãy quyết định lịch phỏng vấn."
            ]
        }
    ),

    makeA2JobSearchDialogue(
        "a2_jobsearch_007",
        "面接日を決める",
        [
            {
                label: "話者A",
                key: "company",
                name: "会社の人",
                line: "面接は来週の水曜日でも大丈夫ですか。",
                target: "めんせつはらいしゅうのすいようびでもだいじょうぶですか",
                ruby: "<ruby>面接<rt>めんせつ</rt></ruby>は<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>水曜日<rt>すいようび</rt></ruby>でも<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Mensetsu wa raishū no suiyōbi demo daijōbu desu ka."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "水曜日の午後なら行けます。",
                target: "すいようびのごごならいけます",
                ruby: "<ruby>水曜日<rt>すいようび</rt></ruby>の<ruby>午後<rt>ごご</rt></ruby>なら<ruby>行<rt>い</rt></ruby>けます。",
                romaji: "Suiyōbi no gogo nara ikemasu."
            },
            {
                label: "話者A",
                key: "company",
                name: "会社の人",
                line: "では、午後二時に来てください。",
                target: "では ごごにじにきてください",
                ruby: "では、<ruby>午後二時<rt>ごごにじ</rt></ruby>に<ruby>来<rt>き</rt></ruby>てください。",
                romaji: "Dewa, gogo ni-ji ni kite kudasai."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "持ち物は履歴書だけでいいですか。",
                target: "もちものはりれきしょだけでいいですか",
                ruby: "<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>は<ruby>履歴書<rt>りれきしょ</rt></ruby>だけでいいですか。",
                romaji: "Mochimono wa rirekisho dake de ii desu ka."
            }
        ],
        {
            ja: [
                "会社の人：面接は来週の水曜日でも大丈夫ですか。",
                "応募者：水曜日の午後なら行けます。",
                "会社の人：では、午後二時に来てください。",
                "応募者：持ち物は履歴書だけでいいですか。"
            ],
            en: [
                "Company Staff: Would next Wednesday be okay for the interview?",
                "Applicant: I can go on Wednesday afternoon.",
                "Company Staff: Then please come at 2 p.m.",
                "Applicant: Is it okay if I bring only my resume?"
            ],
            "zh-CN": [
                "公司人员：面试安排在下周三可以吗？",
                "应聘者：星期三下午的话我可以去。",
                "公司人员：那么，请下午两点来。",
                "应聘者：需要带的东西只有简历可以吗？"
            ],
            "zh-TW": [
                "公司人員：面試安排在下週三可以嗎？",
                "應徵者：星期三下午的話我可以去。",
                "公司人員：那麼，請下午兩點來。",
                "應徵者：需要帶的東西只有履歷可以嗎？"
            ],
            ko: [
                "회사 직원: 면접은 다음 주 수요일도 괜찮으신가요?",
                "지원자: 수요일 오후라면 갈 수 있습니다.",
                "회사 직원: 그럼 오후 2시에 와 주세요.",
                "지원자: 준비물은 이력서만 있으면 되나요?"
            ],
            vi: [
                "Nhân viên công ty: Phỏng vấn vào thứ Tư tuần sau có được không ạ?",
                "Người ứng tuyển: Nếu là chiều thứ Tư thì tôi có thể đi.",
                "Nhân viên công ty: Vậy xin hãy đến lúc 2 giờ chiều.",
                "Người ứng tuyển: Tôi chỉ cần mang sơ yếu lý lịch thôi có được không ạ?"
            ]
        }
    ),

    makeA2JobSearchDialogue(
        "a2_jobsearch_008",
        "結果を確認する",
        [
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "面接の結果はいつごろわかりますか。",
                target: "めんせつのけっかはいつごろわかりますか",
                ruby: "<ruby>面接<rt>めんせつ</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>はいつごろわかりますか。",
                romaji: "Mensetsu no kekka wa itsu goro wakarimasu ka."
            },
            {
                label: "話者A",
                key: "company",
                name: "会社の人",
                line: "一週間以内に電話で連絡します。",
                target: "いっしゅうかんいないにでんわでれんらくします",
                ruby: "<ruby>一週間以内<rt>いっしゅうかんいない</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>で<ruby>連絡<rt>れんらく</rt></ruby>します。",
                romaji: "Isshūkan inai ni denwa de renraku shimasu."
            },
            {
                label: "話者B",
                key: "applicant",
                name: "応募者",
                line: "電話に出られない場合は、どうすればいいですか。",
                target: "でんわにでられないばあいは どうすればいいですか",
                ruby: "<ruby>電話<rt>でんわ</rt></ruby>に<ruby>出<rt>で</rt></ruby>られない<ruby>場合<rt>ばあい</rt></ruby>は、どうすればいいですか。",
                romaji: "Denwa ni derarenai baai wa, dō sureba ii desu ka."
            },
            {
                label: "話者A",
                key: "company",
                name: "会社の人",
                line: "留守番電話を残しますので、あとでかけ直してください。",
                target: "るすばんでんわをのこしますので あとでかけなおしてください",
                ruby: "<ruby>留守番電話<rt>るすばんでんわ</rt></ruby>を<ruby>残<rt>のこ</rt></ruby>しますので、あとでかけ<ruby>直<rt>なお</rt></ruby>してください。",
                romaji: "Rusuban denwa o nokoshimasu node, ato de kakenaoshite kudasai."
            }
        ],
        {
            ja: [
                "応募者：面接の結果はいつごろわかりますか。",
                "会社の人：一週間以内に電話で連絡します。",
                "応募者：電話に出られない場合は、どうすればいいですか。",
                "会社の人：留守番電話を残しますので、あとでかけ直してください。"
            ],
            en: [
                "Applicant: Around when will I know the interview result?",
                "Company Staff: We will contact you by phone within one week.",
                "Applicant: What should I do if I cannot answer the phone?",
                "Company Staff: We will leave a voicemail, so please call back later."
            ],
            "zh-CN": [
                "应聘者：面试结果大概什么时候知道？",
                "公司人员：一周以内会用电话联系您。",
                "应聘者：如果我不能接电话，应该怎么办？",
                "公司人员：我们会留下语音留言，请之后回电。"
            ],
            "zh-TW": [
                "應徵者：面試結果大概什麼時候知道？",
                "公司人員：一週以內會用電話聯絡您。",
                "應徵者：如果我不能接電話，應該怎麼辦？",
                "公司人員：我們會留下語音留言，請之後回電。"
            ],
            ko: [
                "지원자: 면접 결과는 언제쯤 알 수 있나요?",
                "회사 직원: 일주일 이내에 전화로 연락드리겠습니다.",
                "지원자: 전화를 받을 수 없는 경우에는 어떻게 하면 되나요?",
                "회사 직원: 음성 메시지를 남길 테니 나중에 다시 전화해 주세요."
            ],
            vi: [
                "Người ứng tuyển: Khoảng khi nào tôi biết kết quả phỏng vấn ạ?",
                "Nhân viên công ty: Chúng tôi sẽ liên lạc bằng điện thoại trong vòng một tuần.",
                "Người ứng tuyển: Nếu tôi không nghe điện thoại được thì nên làm gì ạ?",
                "Nhân viên công ty: Chúng tôi sẽ để lại lời nhắn, nên xin hãy gọi lại sau."
            ]
        }
    )

];