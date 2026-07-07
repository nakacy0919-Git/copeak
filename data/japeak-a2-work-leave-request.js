// =====================================================
// Japeak B1 Level
// Scene: 職場であいさつをしよう
// File: data/japeak-b1-work-greetings.js
// Category Key: b1_work_greetings
// =====================================================

const b1WorkGreetingsLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1WorkGreetingsTranslations(translations) {
    const completed = {};
    b1WorkGreetingsLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const b1WorkGreetingsContext = {
    ja: "職場で、朝のあいさつ、初対面のあいさつ、久しぶりに会った人への声かけ、外出や退勤時のあいさつ、相手を気づかう表現など、場面に応じた自然な日本語を練習します。",
    en: "Practice natural Japanese greetings at work, including morning greetings, first meetings, speaking to someone after a long time, greetings when going out or leaving work, and polite expressions that show care for others.",
    "zh-CN": "练习职场中自然的日语问候，包括早上的问候、初次见面、久别重逢、外出和下班时的问候，以及关心对方的表达。",
    "zh-TW": "練習職場中自然的日語問候，包括早上的問候、初次見面、久別重逢、外出和下班時的問候，以及關心對方的表達。",
    ko: "직장에서 아침 인사, 첫 만남의 인사, 오랜만에 만난 사람에게 하는 말, 외출이나 퇴근할 때의 인사, 상대를 배려하는 표현을 연습합니다.",
    vi: "Luyện tiếng Nhật tự nhiên tại nơi làm việc, gồm chào buổi sáng, chào lần đầu gặp, nói chuyện với người lâu ngày gặp lại, chào khi ra ngoài hoặc tan làm, và cách thể hiện sự quan tâm.",
    tl: "Practice natural Japanese greetings at work.",
    id: "Latihan salam bahasa Jepang yang alami di tempat kerja.",
    th: "ฝึกคำทักทายภาษาญี่ปุ่นที่เป็นธรรมชาติในที่ทำงาน",
    my: "အလုပ်ခွင်တွင် သဘာဝကျသော ဂျပန်နှုတ်ဆက်စကားများကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ការស្វាគមន៍នៅកន្លែងធ្វើការ។",
    ne: "काममा प्रयोग हुने प्राकृतिक जापानी अभिवादन अभ्यास।",
    mn: "Ажлын байранд хэрэглэдэг байгалийн япон мэндчилгээний дадлага.",
    si: "වැඩ කරන ස්ථානයේ ස්වාභාවික ජපන් ආචාර ප්‍රකාශ පුහුණු කිරීම.",
    bn: "কর্মস্থলে স্বাভাবিক জাপানি শুভেচ্ছা অনুশীলন।",
    pt: "Prática de cumprimentos naturais em japonês no trabalho.",
    es: "Práctica de saludos naturales en japonés en el trabajo.",
    fr: "Entraînement aux salutations naturelles en japonais au travail.",
    ru: "Практика естественных японских приветствий на работе.",
    uk: "Практика природних японських привітань на роботі."
};

const b1WorkGreetingsSpeakerNames = {
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
        fr: "Travailleur",
        ru: "Работник",
        uk: "Працівник"
    },
    senior: {
        ja: "先輩",
        en: "Senior Worker",
        "zh-CN": "前辈",
        "zh-TW": "前輩",
        ko: "선배",
        vi: "Người hướng dẫn",
        tl: "Senior worker",
        id: "Senior",
        th: "รุ่นพี่",
        my: "အတွေ့အကြုံရှိသူ",
        km: "អ្នកមានបទពិសោធន៍",
        ne: "वरिष्ठ कर्मचारी",
        mn: "Ахлах ажилтан",
        si: "ජ්‍යෙෂ්ඨ සේවකයා",
        bn: "সিনিয়র কর্মী",
        pt: "Funcionário experiente",
        es: "Trabajador con experiencia",
        fr: "Collègue expérimenté",
        ru: "Старший сотрудник",
        uk: "Старший працівник"
    },
    supervisor: {
        ja: "上司",
        en: "Supervisor",
        "zh-CN": "上司",
        "zh-TW": "上司",
        ko: "상사",
        vi: "Cấp trên",
        tl: "Supervisor",
        id: "Atasan",
        th: "หัวหน้า",
        my: "အထက်လူကြီး",
        km: "ប្រធាន",
        ne: "सुपरभाइजर",
        mn: "Дарга",
        si: "අධීක්ෂක",
        bn: "সুপারভাইজার",
        pt: "Supervisor",
        es: "Supervisor",
        fr: "Supérieur",
        ru: "Начальник",
        uk: "Керівник"
    },
    colleague: {
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
        si: "සහෝදර සේවකයා",
        bn: "সহকর্মী",
        pt: "Colega de trabalho",
        es: "Compañero de trabajo",
        fr: "Collègue",
        ru: "Коллега",
        uk: "Колега"
    }
};

function makeB1WorkGreetingsDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeB1WorkGreetingsTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_work_greetings",
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
            speakerNames: b1WorkGreetingsSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: b1WorkGreetingsContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1WorkGreetingsData = [

    makeB1WorkGreetingsDialogue(
        "b1_workgreeting_001",
        "朝、職場であいさつする",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "おはようございます。本日もよろしくお願いします。",
                target: "おはようございます ほんじつもよろしくおねがいします",
                ruby: "おはようございます。<ruby>本日<rt>ほんじつ</rt></ruby>もよろしくお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Ohayō gozaimasu. Honjitsu mo yoroshiku onegai shimasu."
            },
            {
                label: "話者A",
                key: "senior",
                name: "先輩",
                line: "おはようございます。昨日の作業は順調でしたか。",
                target: "おはようございます きのうのさぎょうはじゅんちょうでしたか",
                ruby: "おはようございます。<ruby>昨日<rt>きのう</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>は<ruby>順調<rt>じゅんちょう</rt></ruby>でしたか。",
                romaji: "Ohayō gozaimasu. Kinō no sagyō wa junchō deshita ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "はい、大きな問題はありませんでした。ただ、最後の確認に少し時間がかかりました。",
                target: "はい おおきなもんだいはありませんでした ただ さいごのかくにんにすこしじかんがかかりました",
                ruby: "はい、<ruby>大<rt>おお</rt></ruby>きな<ruby>問題<rt>もんだい</rt></ruby>はありませんでした。ただ、<ruby>最後<rt>さいご</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>に<ruby>少<rt>すこ</rt></ruby>し<ruby>時間<rt>じかん</rt></ruby>がかかりました。",
                romaji: "Hai, ōkina mondai wa arimasen deshita. Tada, saigo no kakunin ni sukoshi jikan ga kakarimashita."
            },
            {
                label: "話者A",
                key: "senior",
                name: "先輩",
                line: "そうでしたか。確認に時間がかかった理由はありますか。",
                target: "そうでしたか かくにんにじかんがかかったりゆうはありますか",
                ruby: "そうでしたか。<ruby>確認<rt>かくにん</rt></ruby>に<ruby>時間<rt>じかん</rt></ruby>がかかった<ruby>理由<rt>りゆう</rt></ruby>はありますか。",
                romaji: "Sō deshita ka. Kakunin ni jikan ga kakatta riyū wa arimasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "部品の数が合っているか不安だったので、もう一度確認しました。",
                target: "ぶひんのかずがあっているかふあんだったので もういちどかくにんしました",
                ruby: "<ruby>部品<rt>ぶひん</rt></ruby>の<ruby>数<rt>かず</rt></ruby>が<ruby>合<rt>あ</rt></ruby>っているか<ruby>不安<rt>ふあん</rt></ruby>だったので、もう<ruby>一度<rt>いちど</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>しました。",
                romaji: "Buhin no kazu ga atte iru ka fuan datta node, mō ichido kakunin shimashita."
            },
            {
                label: "話者A",
                key: "senior",
                name: "先輩",
                line: "それは大切ですね。今日も安全に、落ち着いて進めましょう。",
                target: "それはたいせつですね きょうもあんぜんに おちついてすすめましょう",
                ruby: "それは<ruby>大切<rt>たいせつ</rt></ruby>ですね。<ruby>今日<rt>きょう</rt></ruby>も<ruby>安全<rt>あんぜん</rt></ruby>に、<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて<ruby>進<rt>すす</rt></ruby>めましょう。",
                romaji: "Sore wa taisetsu desu ne. Kyō mo anzen ni, ochitsuite susumemashō."
            }
        ],
        {
            ja: [
                "社員：おはようございます。本日もよろしくお願いします。",
                "先輩：おはようございます。昨日の作業は順調でしたか。",
                "社員：はい、大きな問題はありませんでした。ただ、最後の確認に少し時間がかかりました。",
                "先輩：そうでしたか。確認に時間がかかった理由はありますか。",
                "社員：部品の数が合っているか不安だったので、もう一度確認しました。",
                "先輩：それは大切ですね。今日も安全に、落ち着いて進めましょう。"
            ],
            en: [
                "Worker: Good morning. I look forward to working with you today.",
                "Senior Worker: Good morning. Did yesterday’s work go smoothly?",
                "Worker: Yes, there were no major problems. However, the final check took a little time.",
                "Senior Worker: I see. Was there a reason the check took time?",
                "Worker: I was not sure whether the number of parts was correct, so I checked again.",
                "Senior Worker: That is important. Let’s work safely and calmly today too."
            ],
            "zh-CN": [
                "员工：早上好。今天也请多关照。",
                "前辈：早上好。昨天的工作顺利吗？",
                "员工：是的，没有大的问题。不过，最后的确认花了一点时间。",
                "前辈：这样啊。确认花时间有什么原因吗？",
                "员工：我不确定零件数量是否正确，所以又确认了一次。",
                "前辈：这很重要。今天也安全、冷静地进行吧。"
            ],
            "zh-TW": [
                "員工：早安。今天也請多關照。",
                "前輩：早安。昨天的工作順利嗎？",
                "員工：是的，沒有大的問題。不過，最後的確認花了一點時間。",
                "前輩：這樣啊。確認花時間有什麼原因嗎？",
                "員工：我不確定零件數量是否正確，所以又確認了一次。",
                "前輩：這很重要。今天也安全、冷靜地進行吧。"
            ],
            ko: [
                "직원: 안녕하세요. 오늘도 잘 부탁드립니다.",
                "선배: 안녕하세요. 어제 작업은 순조로웠나요?",
                "직원: 네, 큰 문제는 없었습니다. 다만 마지막 확인에 시간이 조금 걸렸습니다.",
                "선배: 그랬군요. 확인에 시간이 걸린 이유가 있나요?",
                "직원: 부품 수가 맞는지 불안해서 한 번 더 확인했습니다.",
                "선배: 그것은 중요하네요. 오늘도 안전하고 차분하게 진행합시다."
            ],
            vi: [
                "Nhân viên: Chào buổi sáng. Hôm nay cũng mong được giúp đỡ.",
                "Người hướng dẫn: Chào buổi sáng. Công việc hôm qua có thuận lợi không?",
                "Nhân viên: Vâng, không có vấn đề lớn. Tuy nhiên, phần kiểm tra cuối mất hơi nhiều thời gian.",
                "Người hướng dẫn: Vậy à. Có lý do gì khiến việc kiểm tra mất thời gian không?",
                "Nhân viên: Tôi không chắc số lượng linh kiện có đúng không, nên đã kiểm tra lại một lần nữa.",
                "Người hướng dẫn: Điều đó rất quan trọng. Hôm nay cũng hãy làm việc an toàn và bình tĩnh."
            ]
        }
    ),

    makeB1WorkGreetingsDialogue(
        "b1_workgreeting_002",
        "初めて会う人にあいさつする",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "はじめまして。本日からこちらで働くことになりました。",
                target: "はじめまして ほんじつからこちらではたらくことになりました",
                ruby: "はじめまして。<ruby>本日<rt>ほんじつ</rt></ruby>からこちらで<ruby>働<rt>はたら</rt></ruby>くことになりました。",
                romaji: "Hajimemashite. Honjitsu kara kochira de hataraku koto ni narimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "はじめまして。お名前を教えていただけますか。",
                target: "はじめまして おなまえをおしえていただけますか",
                ruby: "はじめまして。お<ruby>名前<rt>なまえ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えていただけますか。",
                romaji: "Hajimemashite. Onamae o oshiete itadakemasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "山田マリアと申します。どうぞよろしくお願いいたします。",
                target: "やまだまりあともうします どうぞよろしくおねがいいたします",
                ruby: "<ruby>山田<rt>やまだ</rt></ruby>マリアと<ruby>申<rt>もう</rt></ruby>します。どうぞよろしくお<ruby>願<rt>ねが</rt></ruby>いいたします。",
                romaji: "Yamada Maria to mōshimasu. Dōzo yoroshiku onegai itashimasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "こちらこそ、よろしくお願いします。前の職場ではどんな仕事をしていましたか。",
                target: "こちらこそ よろしくおねがいします まえのしょくばではどんなしごとをしていましたか",
                ruby: "こちらこそ、よろしくお<ruby>願<rt>ねが</rt></ruby>いします。<ruby>前<rt>まえ</rt></ruby>の<ruby>職場<rt>しょくば</rt></ruby>ではどんな<ruby>仕事<rt>しごと</rt></ruby>をしていましたか。",
                romaji: "Kochira koso, yoroshiku onegai shimasu. Mae no shokuba de wa donna shigoto o shite imashita ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "工場で商品の検査をしていました。細かい確認作業には慣れています。",
                target: "こうじょうでしょうひんのけんさをしていました こまかいかくにんさぎょうにはなれています",
                ruby: "<ruby>工場<rt>こうじょう</rt></ruby>で<ruby>商品<rt>しょうひん</rt></ruby>の<ruby>検査<rt>けんさ</rt></ruby>をしていました。<ruby>細<rt>こま</rt></ruby>かい<ruby>確認作業<rt>かくにんさぎょう</rt></ruby>には<ruby>慣<rt>な</rt></ruby>れています。",
                romaji: "Kōjō de shōhin no kensa o shite imashita. Komakai kakunin sagyō ni wa narete imasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "わかりました。最初は先輩と一緒に作業するので、安心してください。",
                target: "わかりました さいしょはせんぱいといっしょにさぎょうするので あんしんしてください",
                ruby: "わかりました。<ruby>最初<rt>さいしょ</rt></ruby>は<ruby>先輩<rt>せんぱい</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>作業<rt>さぎょう</rt></ruby>するので、<ruby>安心<rt>あんしん</rt></ruby>してください。",
                romaji: "Wakarimashita. Saisho wa senpai to issho ni sagyō suru node, anshin shite kudasai."
            }
        ],
        {
            ja: [
                "社員：はじめまして。本日からこちらで働くことになりました。",
                "上司：はじめまして。お名前を教えていただけますか。",
                "社員：山田マリアと申します。どうぞよろしくお願いいたします。",
                "上司：こちらこそ、よろしくお願いします。前の職場ではどんな仕事をしていましたか。",
                "社員：工場で商品の検査をしていました。細かい確認作業には慣れています。",
                "上司：わかりました。最初は先輩と一緒に作業するので、安心してください。"
            ],
            en: [
                "Worker: Nice to meet you. I will be working here starting today.",
                "Supervisor: Nice to meet you. Could you tell me your name?",
                "Worker: My name is Maria Yamada. I look forward to working with you.",
                "Supervisor: Likewise. What kind of work did you do at your previous workplace?",
                "Worker: I inspected products at a factory. I am used to detailed checking work.",
                "Supervisor: Understood. At first, you will work together with a senior worker, so please do not worry."
            ],
            "zh-CN": [
                "员工：初次见面。我从今天开始在这里工作。",
                "上司：初次见面。可以请您告诉我姓名吗？",
                "员工：我叫山田玛丽亚。请多关照。",
                "上司：我也请您多关照。您以前的职场做什么工作？",
                "员工：我在工厂做商品检查。已经习惯细致的确认工作。",
                "上司：明白了。最开始会和前辈一起工作，请放心。"
            ],
            "zh-TW": [
                "員工：初次見面。我從今天開始在這裡工作。",
                "上司：初次見面。可以請您告訴我姓名嗎？",
                "員工：我叫山田瑪麗亞。請多關照。",
                "上司：我也請您多關照。您以前的職場做什麼工作？",
                "員工：我在工廠做商品檢查。已經習慣細緻的確認工作。",
                "上司：明白了。最開始會和前輩一起工作，請放心。"
            ],
            ko: [
                "직원: 처음 뵙겠습니다. 오늘부터 이곳에서 일하게 되었습니다.",
                "상사: 처음 뵙겠습니다. 성함을 알려 주시겠습니까?",
                "직원: 야마다 마리아라고 합니다. 잘 부탁드립니다.",
                "상사: 저야말로 잘 부탁드립니다. 이전 직장에서는 어떤 일을 하셨나요?",
                "직원: 공장에서 상품 검사를 했습니다. 세밀한 확인 작업에는 익숙합니다.",
                "상사: 알겠습니다. 처음에는 선배와 함께 작업하니 안심하세요."
            ],
            vi: [
                "Nhân viên: Rất hân hạnh được gặp. Từ hôm nay tôi sẽ làm việc tại đây.",
                "Cấp trên: Rất hân hạnh được gặp. Bạn có thể cho biết tên không?",
                "Nhân viên: Tôi tên là Yamada Maria. Rất mong được giúp đỡ.",
                "Cấp trên: Tôi cũng mong được hợp tác. Ở nơi làm việc trước đây, bạn đã làm công việc gì?",
                "Nhân viên: Tôi đã kiểm tra sản phẩm ở nhà máy. Tôi quen với công việc kiểm tra chi tiết.",
                "Cấp trên: Tôi hiểu rồi. Ban đầu bạn sẽ làm việc cùng người hướng dẫn, nên hãy yên tâm."
            ]
        }
    ),

    makeB1WorkGreetingsDialogue(
        "b1_workgreeting_003",
        "久しぶりに会った同僚に声をかける",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "お久しぶりです。しばらく別の部署にいらっしゃいましたよね。",
                target: "おひさしぶりです しばらくべつのぶしょにいらっしゃいましたよね",
                ruby: "お<ruby>久<rt>ひさ</rt></ruby>しぶりです。しばらく<ruby>別<rt>べつ</rt></ruby>の<ruby>部署<rt>ぶしょ</rt></ruby>にいらっしゃいましたよね。",
                romaji: "Ohisashiburi desu. Shibaraku betsu no busho ni irasshaimashita yo ne."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "はい、先週まで応援に行っていました。",
                target: "はい せんしゅうまでおうえんにいっていました",
                ruby: "はい、<ruby>先週<rt>せんしゅう</rt></ruby>まで<ruby>応援<rt>おうえん</rt></ruby>に<ruby>行<rt>い</rt></ruby>っていました。",
                romaji: "Hai, senshū made ōen ni itte imashita."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "お疲れさまでした。向こうの仕事は大変でしたか。",
                target: "おつかれさまでした むこうのしごとはたいへんでしたか",
                ruby: "お<ruby>疲<rt>つか</rt></ruby>れさまでした。<ruby>向<rt>む</rt></ruby>こうの<ruby>仕事<rt>しごと</rt></ruby>は<ruby>大変<rt>たいへん</rt></ruby>でしたか。",
                romaji: "Otsukaresama deshita. Mukō no shigoto wa taihen deshita ka."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "少し忙しかったですが、仕事の流れを学ぶいい機会になりました。",
                target: "すこしいそがしかったですが しごとのながれをまなぶいいきかいになりました",
                ruby: "<ruby>少<rt>すこ</rt></ruby>し<ruby>忙<rt>いそが</rt></ruby>しかったですが、<ruby>仕事<rt>しごと</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れを<ruby>学<rt>まな</rt></ruby>ぶいい<ruby>機会<rt>きかい</rt></ruby>になりました。",
                romaji: "Sukoshi isogashikatta desu ga, shigoto no nagare o manabu ii kikai ni narimashita."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "それはよかったですね。こちらでも何か変わったことがあれば共有します。",
                target: "それはよかったですね こちらでもなにかかわったことがあればきょうゆうします",
                ruby: "それはよかったですね。こちらでも<ruby>何<rt>なに</rt></ruby>か<ruby>変<rt>か</rt></ruby>わったことがあれば<ruby>共有<rt>きょうゆう</rt></ruby>します。",
                romaji: "Sore wa yokatta desu ne. Kochira demo nanika kawatta koto ga areba kyōyū shimasu."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "ありがとうございます。久しぶりなので、あとで少し教えてください。",
                target: "ありがとうございます ひさしぶりなので あとですこしおしえてください",
                ruby: "ありがとうございます。<ruby>久<rt>ひさ</rt></ruby>しぶりなので、あとで<ruby>少<rt>すこ</rt></ruby>し<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Arigatō gozaimasu. Hisashiburi na node, ato de sukoshi oshiete kudasai."
            }
        ],
        {
            ja: [
                "社員：お久しぶりです。しばらく別の部署にいらっしゃいましたよね。",
                "同僚：はい、先週まで応援に行っていました。",
                "社員：お疲れさまでした。向こうの仕事は大変でしたか。",
                "同僚：少し忙しかったですが、仕事の流れを学ぶいい機会になりました。",
                "社員：それはよかったですね。こちらでも何か変わったことがあれば共有します。",
                "同僚：ありがとうございます。久しぶりなので、あとで少し教えてください。"
            ],
            en: [
                "Worker: Long time no see. You were in another department for a while, right?",
                "Coworker: Yes, I was helping there until last week.",
                "Worker: Thank you for your hard work. Was the work there difficult?",
                "Coworker: It was a little busy, but it was a good chance to learn the work process.",
                "Worker: That is good. If anything has changed here, I will share it with you.",
                "Coworker: Thank you. It has been a while, so please tell me a little later."
            ],
            "zh-CN": [
                "员工：好久不见。您这段时间在别的部门吧？",
                "同事：是的，到上周为止我去那边支援了。",
                "员工：辛苦了。那边的工作辛苦吗？",
                "同事：有点忙，不过是学习工作流程的好机会。",
                "员工：那很好。这里如果有什么变化，我会和您分享。",
                "同事：谢谢。因为好久没回来，之后请稍微告诉我一下。"
            ],
            "zh-TW": [
                "員工：好久不見。您這段時間在別的部門吧？",
                "同事：是的，到上週為止我去那邊支援了。",
                "員工：辛苦了。那邊的工作辛苦嗎？",
                "同事：有點忙，不過是學習工作流程的好機會。",
                "員工：那很好。這裡如果有什麼變化，我會和您分享。",
                "同事：謝謝。因為好久沒回來，之後請稍微告訴我一下。"
            ],
            ko: [
                "직원: 오랜만입니다. 한동안 다른 부서에 계셨죠?",
                "동료: 네, 지난주까지 지원을 갔었습니다.",
                "직원: 수고 많으셨습니다. 그쪽 일은 힘들었나요?",
                "동료: 조금 바빴지만 일의 흐름을 배우는 좋은 기회가 되었습니다.",
                "직원: 그건 좋네요. 이쪽에서도 달라진 것이 있으면 공유하겠습니다.",
                "동료: 감사합니다. 오랜만이니 나중에 조금 알려 주세요."
            ],
            vi: [
                "Nhân viên: Lâu rồi không gặp. Anh/chị đã ở bộ phận khác một thời gian đúng không?",
                "Đồng nghiệp: Vâng, tôi đã đi hỗ trợ ở đó đến tuần trước.",
                "Nhân viên: Anh/chị vất vả rồi. Công việc bên đó có khó không?",
                "Đồng nghiệp: Hơi bận, nhưng đó là cơ hội tốt để học quy trình công việc.",
                "Nhân viên: Vậy thì tốt. Nếu ở đây có điều gì thay đổi, tôi sẽ chia sẻ.",
                "Đồng nghiệp: Cảm ơn. Vì lâu rồi tôi mới quay lại, lát nữa hãy chỉ cho tôi một chút."
            ]
        }
    ),

    makeB1WorkGreetingsDialogue(
        "b1_workgreeting_004",
        "体調を気づかう",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "昨日は体調が悪いと聞きました。もう大丈夫ですか。",
                target: "きのうはたいちょうがわるいとききました もうだいじょうぶですか",
                ruby: "<ruby>昨日<rt>きのう</rt></ruby>は<ruby>体調<rt>たいちょう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いと<ruby>聞<rt>き</rt></ruby>きました。もう<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Kinō wa taichō ga warui to kikimashita. Mō daijōbu desu ka."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "ありがとうございます。薬を飲んで、だいぶよくなりました。",
                target: "ありがとうございます くすりをのんで だいぶよくなりました",
                ruby: "ありがとうございます。<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んで、だいぶよくなりました。",
                romaji: "Arigatō gozaimasu. Kusuri o nonde, daibu yoku narimashita."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "それなら安心しました。でも、無理しすぎないでくださいね。",
                target: "それならあんしんしました でも むりしすぎないでくださいね",
                ruby: "それなら<ruby>安心<rt>あんしん</rt></ruby>しました。でも、<ruby>無理<rt>むり</rt></ruby>しすぎないでくださいね。",
                romaji: "Sore nara anshin shimashita. Demo, muri shisuginaide kudasai ne."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "はい。今日は様子を見ながら、ゆっくり作業します。",
                target: "はい きょうはようすをみながら ゆっくりさぎょうします",
                ruby: "はい。<ruby>今日<rt>きょう</rt></ruby>は<ruby>様子<rt>ようす</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら、ゆっくり<ruby>作業<rt>さぎょう</rt></ruby>します。",
                romaji: "Hai. Kyō wa yōsu o minagara, yukkuri sagyō shimasu."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "重い物を運ぶ作業があれば、私も手伝います。",
                target: "おもいものをはこぶさぎょうがあれば わたしもてつだいます",
                ruby: "<ruby>重<rt>おも</rt></ruby>い<ruby>物<rt>もの</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>ぶ<ruby>作業<rt>さぎょう</rt></ruby>があれば、<ruby>私<rt>わたし</rt></ruby>も<ruby>手伝<rt>てつだ</rt></ruby>います。",
                romaji: "Omoi mono o hakobu sagyō ga areba, watashi mo tetsudaimasu."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "助かります。必要なときは遠慮なく声をかけます。",
                target: "たすかります ひつようなときはえんりょなくこえをかけます",
                ruby: "<ruby>助<rt>たす</rt></ruby>かります。<ruby>必要<rt>ひつよう</rt></ruby>なときは<ruby>遠慮<rt>えんりょ</rt></ruby>なく<ruby>声<rt>こえ</rt></ruby>をかけます。",
                romaji: "Tasukarimasu. Hitsuyō na toki wa enryo naku koe o kakemasu."
            }
        ],
        {
            ja: [
                "社員：昨日は体調が悪いと聞きました。もう大丈夫ですか。",
                "同僚：ありがとうございます。薬を飲んで、だいぶよくなりました。",
                "社員：それなら安心しました。でも、無理しすぎないでくださいね。",
                "同僚：はい。今日は様子を見ながら、ゆっくり作業します。",
                "社員：重い物を運ぶ作業があれば、私も手伝います。",
                "同僚：助かります。必要なときは遠慮なく声をかけます。"
            ],
            en: [
                "Worker: I heard you were not feeling well yesterday. Are you okay now?",
                "Coworker: Thank you. I took medicine, and I feel much better.",
                "Worker: I am relieved to hear that. But please do not push yourself too hard.",
                "Coworker: Yes. Today I will work slowly while checking how I feel.",
                "Worker: If there is any work that involves carrying heavy things, I will help too.",
                "Coworker: That helps. When I need help, I will not hesitate to ask."
            ],
            "zh-CN": [
                "员工：听说您昨天身体不舒服。现在好了吗？",
                "同事：谢谢。我吃了药，已经好多了。",
                "员工：那我就放心了。不过，请不要太勉强。",
                "同事：好的。今天我会一边观察身体情况一边慢慢工作。",
                "员工：如果有搬重物的工作，我也会帮忙。",
                "同事：那太好了。需要的时候我会不客气地请您帮忙。"
            ],
            "zh-TW": [
                "員工：聽說您昨天身體不舒服。現在好了嗎？",
                "同事：謝謝。我吃了藥，已經好多了。",
                "員工：那我就放心了。不過，請不要太勉強。",
                "同事：好的。今天我會一邊觀察身體情況一邊慢慢工作。",
                "員工：如果有搬重物的工作，我也會幫忙。",
                "同事：那太好了。需要的時候我會不客氣地請您幫忙。"
            ],
            ko: [
                "직원: 어제 몸이 안 좋다고 들었습니다. 이제 괜찮으신가요?",
                "동료: 감사합니다. 약을 먹고 많이 좋아졌습니다.",
                "직원: 그렇다면 다행입니다. 하지만 너무 무리하지 마세요.",
                "동료: 네. 오늘은 상태를 보면서 천천히 작업하겠습니다.",
                "직원: 무거운 물건을 옮기는 작업이 있으면 저도 돕겠습니다.",
                "동료: 도움이 됩니다. 필요할 때는 사양하지 않고 말씀드리겠습니다."
            ],
            vi: [
                "Nhân viên: Tôi nghe nói hôm qua anh/chị không khỏe. Bây giờ ổn chưa?",
                "Đồng nghiệp: Cảm ơn. Tôi uống thuốc rồi và đã khá hơn nhiều.",
                "Nhân viên: Vậy thì tôi yên tâm rồi. Nhưng đừng cố quá nhé.",
                "Đồng nghiệp: Vâng. Hôm nay tôi sẽ làm chậm rãi và theo dõi tình trạng của mình.",
                "Nhân viên: Nếu có việc phải mang đồ nặng, tôi cũng sẽ giúp.",
                "Đồng nghiệp: Như vậy thì tốt quá. Khi cần, tôi sẽ không ngại nhờ giúp."
            ]
        }
    ),

    makeB1WorkGreetingsDialogue(
        "b1_workgreeting_005",
        "外出するときのあいさつ",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "すみません。これから取引先へ行ってまいります。",
                target: "すみません これからとりひきさきへいってまいります",
                ruby: "すみません。これから<ruby>取引先<rt>とりひきさき</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってまいります。",
                romaji: "Sumimasen. Kore kara torihikisaki e itte mairimasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "わかりました。今日はどのような用件ですか。",
                target: "わかりました きょうはどのようなようけんですか",
                ruby: "わかりました。<ruby>今日<rt>きょう</rt></ruby>はどのような<ruby>用件<rt>ようけん</rt></ruby>ですか。",
                romaji: "Wakarimashita. Kyō wa dono yō na yōken desu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "新しい資料を渡して、次回の打ち合わせ日を確認する予定です。",
                target: "あたらしいしりょうをわたして じかいのうちあわせびをかくにんするよていです",
                ruby: "<ruby>新<rt>あたら</rt></ruby>しい<ruby>資料<rt>しりょう</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>して、<ruby>次回<rt>じかい</rt></ruby>の<ruby>打<rt>う</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせ<ruby>日<rt>び</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>です。",
                romaji: "Atarashii shiryō o watashite, jikai no uchiawasebi o kakunin suru yotei desu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "戻る時間は何時ごろになりそうですか。",
                target: "もどるじかんはなんじごろになりそうですか",
                ruby: "<ruby>戻<rt>もど</rt></ruby>る<ruby>時間<rt>じかん</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>ごろになりそうですか。",
                romaji: "Modoru jikan wa nanji goro ni narisō desu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "三時半ごろには戻れると思いますが、遅れる場合は連絡します。",
                target: "さんじはんごろにはもどれるとおもいますが おくれるばあいはれんらくします",
                ruby: "<ruby>三時半<rt>さんじはん</rt></ruby>ごろには<ruby>戻<rt>もど</rt></ruby>れると<ruby>思<rt>おも</rt></ruby>いますが、<ruby>遅<rt>おく</rt></ruby>れる<ruby>場合<rt>ばあい</rt></ruby>は<ruby>連絡<rt>れんらく</rt></ruby>します。",
                romaji: "San-ji han goro ni wa modoreru to omoimasu ga, okureru baai wa renraku shimasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "お願いします。気をつけて行ってきてください。",
                target: "おねがいします きをつけていってきてください",
                ruby: "お<ruby>願<rt>ねが</rt></ruby>いします。<ruby>気<rt>き</rt></ruby>をつけて<ruby>行<rt>い</rt></ruby>ってきてください。",
                romaji: "Onegai shimasu. Ki o tsukete itte kite kudasai."
            }
        ],
        {
            ja: [
                "社員：すみません。これから取引先へ行ってまいります。",
                "上司：わかりました。今日はどのような用件ですか。",
                "社員：新しい資料を渡して、次回の打ち合わせ日を確認する予定です。",
                "上司：戻る時間は何時ごろになりそうですか。",
                "社員：三時半ごろには戻れると思いますが、遅れる場合は連絡します。",
                "上司：お願いします。気をつけて行ってきてください。"
            ],
            en: [
                "Worker: Excuse me. I am going to visit a client now.",
                "Supervisor: Understood. What is the purpose of today’s visit?",
                "Worker: I plan to give them new documents and confirm the next meeting date.",
                "Supervisor: About what time do you think you will return?",
                "Worker: I think I can return around 3:30, but I will contact you if I am delayed.",
                "Supervisor: Please do. Take care on your way."
            ],
            "zh-CN": [
                "员工：不好意思。我现在要去客户那里。",
                "上司：明白了。今天是什么事情？",
                "员工：我打算交给他们新资料，并确认下次开会的日期。",
                "上司：预计几点左右回来？",
                "员工：我想大约三点半能回来，如果晚了会联系您。",
                "上司：拜托了。路上小心。"
            ],
            "zh-TW": [
                "員工：不好意思。我現在要去客戶那裡。",
                "上司：明白了。今天是什麼事情？",
                "員工：我打算交給他們新資料，並確認下次開會的日期。",
                "上司：預計幾點左右回來？",
                "員工：我想大約三點半能回來，如果晚了會聯絡您。",
                "上司：拜託了。路上小心。"
            ],
            ko: [
                "직원: 죄송합니다. 지금부터 거래처에 다녀오겠습니다.",
                "상사: 알겠습니다. 오늘은 어떤 용건인가요?",
                "직원: 새로운 자료를 전달하고 다음 회의 날짜를 확인할 예정입니다.",
                "상사: 돌아오는 시간은 몇 시쯤이 될 것 같나요?",
                "직원: 3시 반쯤에는 돌아올 수 있을 것 같지만, 늦어질 경우 연락하겠습니다.",
                "상사: 부탁합니다. 조심해서 다녀오세요."
            ],
            vi: [
                "Nhân viên: Xin lỗi. Bây giờ tôi sẽ đi đến công ty khách hàng.",
                "Cấp trên: Tôi hiểu rồi. Hôm nay là việc gì?",
                "Nhân viên: Tôi dự định đưa tài liệu mới và xác nhận ngày họp lần sau.",
                "Cấp trên: Khoảng mấy giờ bạn có thể quay lại?",
                "Nhân viên: Tôi nghĩ khoảng 3 giờ rưỡi có thể quay lại, nhưng nếu trễ tôi sẽ liên lạc.",
                "Cấp trên: Nhờ bạn nhé. Hãy đi cẩn thận."
            ]
        }
    ),

    makeB1WorkGreetingsDialogue(
        "b1_workgreeting_006",
        "戻ってきたときのあいさつ",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "ただいま戻りました。",
                target: "ただいまもどりました",
                ruby: "ただいま<ruby>戻<rt>もど</rt></ruby>りました。",
                romaji: "Tadaima modorimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "お疲れさまでした。先方との話はどうでしたか。",
                target: "おつかれさまでした せんぽうとのはなしはどうでしたか",
                ruby: "お<ruby>疲<rt>つか</rt></ruby>れさまでした。<ruby>先方<rt>せんぽう</rt></ruby>との<ruby>話<rt>はなし</rt></ruby>はどうでしたか。",
                romaji: "Otsukaresama deshita. Senpō to no hanashi wa dō deshita ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "大きな問題はなく、次回の予定も決まりました。",
                target: "おおきなもんだいはなく じかいのよていもきまりました",
                ruby: "<ruby>大<rt>おお</rt></ruby>きな<ruby>問題<rt>もんだい</rt></ruby>はなく、<ruby>次回<rt>じかい</rt></ruby>の<ruby>予定<rt>よてい</rt></ruby>も<ruby>決<rt>き</rt></ruby>まりました。",
                romaji: "Ōkina mondai wa naku, jikai no yotei mo kimarimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "それはよかったです。何か追加で確認することはありますか。",
                target: "それはよかったです なにかついかでかくにんすることはありますか",
                ruby: "それはよかったです。<ruby>何<rt>なに</rt></ruby>か<ruby>追加<rt>ついか</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>することはありますか。",
                romaji: "Sore wa yokatta desu. Nanika tsuika de kakunin suru koto wa arimasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "資料の一部を修正してほしいと言われました。あとで内容をまとめます。",
                target: "しりょうのいちぶをしゅうせいしてほしいといわれました あとでないようをまとめます",
                ruby: "<ruby>資料<rt>しりょう</rt></ruby>の<ruby>一部<rt>いちぶ</rt></ruby>を<ruby>修正<rt>しゅうせい</rt></ruby>してほしいと<ruby>言<rt>い</rt></ruby>われました。あとで<ruby>内容<rt>ないよう</rt></ruby>をまとめます。",
                romaji: "Shiryō no ichibu o shūsei shite hoshii to iwaremashita. Ato de naiyō o matomemasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "お願いします。共有してもらえれば、こちらでも確認します。",
                target: "おねがいします きょうゆうしてもらえれば こちらでもかくにんします",
                ruby: "お<ruby>願<rt>ねが</rt></ruby>いします。<ruby>共有<rt>きょうゆう</rt></ruby>してもらえれば、こちらでも<ruby>確認<rt>かくにん</rt></ruby>します。",
                romaji: "Onegai shimasu. Kyōyū shite moraereba, kochira demo kakunin shimasu."
            }
        ],
        {
            ja: [
                "社員：ただいま戻りました。",
                "上司：お疲れさまでした。先方との話はどうでしたか。",
                "社員：大きな問題はなく、次回の予定も決まりました。",
                "上司：それはよかったです。何か追加で確認することはありますか。",
                "社員：資料の一部を修正してほしいと言われました。あとで内容をまとめます。",
                "上司：お願いします。共有してもらえれば、こちらでも確認します。"
            ],
            en: [
                "Worker: I have returned.",
                "Supervisor: Thank you for your work. How was the discussion with the client?",
                "Worker: There were no major problems, and the next schedule was decided.",
                "Supervisor: That is good. Is there anything else we need to check?",
                "Worker: They asked us to revise part of the materials. I will summarize the details later.",
                "Supervisor: Please do. If you share them with me, I will check them too."
            ],
            "zh-CN": [
                "员工：我回来了。",
                "上司：辛苦了。和对方的谈话怎么样？",
                "员工：没有大的问题，下次的安排也定下来了。",
                "上司：那很好。还有什么需要追加确认的吗？",
                "员工：他们说希望修改资料的一部分。我之后整理内容。",
                "上司：拜托了。分享给我后，我这边也会确认。"
            ],
            "zh-TW": [
                "員工：我回來了。",
                "上司：辛苦了。和對方的談話怎麼樣？",
                "員工：沒有大的問題，下次的安排也定下來了。",
                "上司：那很好。還有什麼需要追加確認的嗎？",
                "員工：他們說希望修改資料的一部分。我之後整理內容。",
                "上司：拜託了。分享給我後，我這邊也會確認。"
            ],
            ko: [
                "직원: 다녀왔습니다.",
                "상사: 수고하셨습니다. 상대방과의 이야기는 어땠나요?",
                "직원: 큰 문제는 없었고 다음 일정도 정해졌습니다.",
                "상사: 그것은 다행입니다. 추가로 확인할 것이 있나요?",
                "직원: 자료 일부를 수정해 달라고 들었습니다. 나중에 내용을 정리하겠습니다.",
                "상사: 부탁합니다. 공유해 주면 저도 확인하겠습니다."
            ],
            vi: [
                "Nhân viên: Tôi đã quay lại.",
                "Cấp trên: Bạn vất vả rồi. Cuộc trao đổi với bên đối tác thế nào?",
                "Nhân viên: Không có vấn đề lớn, và lịch lần sau cũng đã được quyết định.",
                "Cấp trên: Vậy thì tốt. Có điều gì cần kiểm tra thêm không?",
                "Nhân viên: Họ nói muốn chúng ta sửa một phần tài liệu. Lát nữa tôi sẽ tổng hợp nội dung.",
                "Cấp trên: Nhờ bạn nhé. Nếu bạn chia sẻ, tôi cũng sẽ kiểm tra."
            ]
        }
    ),

    makeB1WorkGreetingsDialogue(
        "b1_workgreeting_007",
        "先に退勤するときのあいさつ",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "お先に失礼します。本日もありがとうございました。",
                target: "おさきにしつれいします ほんじつもありがとうございました",
                ruby: "お<ruby>先<rt>さき</rt></ruby>に<ruby>失礼<rt>しつれい</rt></ruby>します。<ruby>本日<rt>ほんじつ</rt></ruby>もありがとうございました。",
                romaji: "Osaki ni shitsurei shimasu. Honjitsu mo arigatō gozaimashita."
            },
            {
                label: "話者A",
                key: "senior",
                name: "先輩",
                line: "お疲れさまでした。今日の作業は全部終わりましたか。",
                target: "おつかれさまでした きょうのさぎょうはぜんぶおわりましたか",
                ruby: "お<ruby>疲<rt>つか</rt></ruby>れさまでした。<ruby>今日<rt>きょう</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>は<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>終<rt>お</rt></ruby>わりましたか。",
                romaji: "Otsukaresama deshita. Kyō no sagyō wa zenbu owarimashita ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "はい、予定していた作業は終わりました。引き継ぎのメモも残してあります。",
                target: "はい よていしていたさぎょうはおわりました ひきつぎのめもものこしてあります",
                ruby: "はい、<ruby>予定<rt>よてい</rt></ruby>していた<ruby>作業<rt>さぎょう</rt></ruby>は<ruby>終<rt>お</rt></ruby>わりました。<ruby>引<rt>ひ</rt></ruby>き<ruby>継<rt>つ</rt></ruby>ぎのメモも<ruby>残<rt>のこ</rt></ruby>してあります。",
                romaji: "Hai, yotei shite ita sagyō wa owarimashita. Hikitsugi no memo mo nokoshite arimasu."
            },
            {
                label: "話者A",
                key: "senior",
                name: "先輩",
                line: "ありがとうございます。明日の準備で気になることはありますか。",
                target: "ありがとうございます あしたのじゅんびできになることはありますか",
                ruby: "ありがとうございます。<ruby>明日<rt>あした</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>で<ruby>気<rt>き</rt></ruby>になることはありますか。",
                romaji: "Arigatō gozaimasu. Ashita no junbi de ki ni naru koto wa arimasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "材料が少なくなっていたので、発注が必要かもしれません。",
                target: "ざいりょうがすくなくなっていたので はっちゅうがひつようかもしれません",
                ruby: "<ruby>材料<rt>ざいりょう</rt></ruby>が<ruby>少<rt>すく</rt></ruby>なくなっていたので、<ruby>発注<rt>はっちゅう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>かもしれません。",
                romaji: "Zairyō ga sukunaku natte ita node, hatchū ga hitsuyō kamoshiremasen."
            },
            {
                label: "話者A",
                key: "senior",
                name: "先輩",
                line: "わかりました。こちらで確認しておきます。気をつけて帰ってください。",
                target: "わかりました こちらでかくにんしておきます きをつけてかえってください",
                ruby: "わかりました。こちらで<ruby>確認<rt>かくにん</rt></ruby>しておきます。<ruby>気<rt>き</rt></ruby>をつけて<ruby>帰<rt>かえ</rt></ruby>ってください。",
                romaji: "Wakarimashita. Kochira de kakunin shite okimasu. Ki o tsukete kaette kudasai."
            }
        ],
        {
            ja: [
                "社員：お先に失礼します。本日もありがとうございました。",
                "先輩：お疲れさまでした。今日の作業は全部終わりましたか。",
                "社員：はい、予定していた作業は終わりました。引き継ぎのメモも残してあります。",
                "先輩：ありがとうございます。明日の準備で気になることはありますか。",
                "社員：材料が少なくなっていたので、発注が必要かもしれません。",
                "先輩：わかりました。こちらで確認しておきます。気をつけて帰ってください。"
            ],
            en: [
                "Worker: I will leave before you. Thank you for today.",
                "Senior Worker: Thank you for your work. Did you finish all of today’s tasks?",
                "Worker: Yes, I finished the planned tasks. I also left handover notes.",
                "Senior Worker: Thank you. Is there anything concerning about tomorrow’s preparation?",
                "Worker: Some materials were running low, so we may need to place an order.",
                "Senior Worker: Understood. I will check it here. Please get home safely."
            ],
            "zh-CN": [
                "员工：我先走了。今天也谢谢您。",
                "前辈：辛苦了。今天的工作都完成了吗？",
                "员工：是的，计划的工作已经完成了。也留下了交接备注。",
                "前辈：谢谢。明天的准备有什么需要注意的吗？",
                "员工：材料变少了，可能需要订购。",
                "前辈：明白了。我这边会确认。回家路上小心。"
            ],
            "zh-TW": [
                "員工：我先走了。今天也謝謝您。",
                "前輩：辛苦了。今天的工作都完成了嗎？",
                "員工：是的，計畫的工作已經完成了。也留下了交接備註。",
                "前輩：謝謝。明天的準備有什麼需要注意的嗎？",
                "員工：材料變少了，可能需要訂購。",
                "前輩：明白了。我這邊會確認。回家路上小心。"
            ],
            ko: [
                "직원: 먼저 실례하겠습니다. 오늘도 감사했습니다.",
                "선배: 수고하셨습니다. 오늘 작업은 모두 끝났나요?",
                "직원: 네, 예정했던 작업은 끝났습니다. 인수인계 메모도 남겨 두었습니다.",
                "선배: 감사합니다. 내일 준비에서 신경 쓰이는 것이 있나요?",
                "직원: 재료가 적어져 있어서 발주가 필요할지도 모릅니다.",
                "선배: 알겠습니다. 제가 확인해 두겠습니다. 조심해서 돌아가세요."
            ],
            vi: [
                "Nhân viên: Tôi xin phép về trước. Cảm ơn anh/chị vì hôm nay.",
                "Người hướng dẫn: Bạn vất vả rồi. Công việc hôm nay đã xong hết chưa?",
                "Nhân viên: Vâng, công việc đã dự định đã xong. Tôi cũng đã để lại ghi chú bàn giao.",
                "Người hướng dẫn: Cảm ơn. Có điều gì cần chú ý cho việc chuẩn bị ngày mai không?",
                "Nhân viên: Vật liệu đã ít đi, nên có thể cần đặt hàng.",
                "Người hướng dẫn: Tôi hiểu rồi. Tôi sẽ kiểm tra. Hãy về cẩn thận nhé."
            ]
        }
    ),

    makeB1WorkGreetingsDialogue(
        "b1_workgreeting_008",
        "一日の終わりに感謝を伝える",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "今日は作業を教えていただき、ありがとうございました。",
                target: "きょうはさぎょうをおしえていただき ありがとうございました",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えていただき、ありがとうございました。",
                romaji: "Kyō wa sagyō o oshiete itadaki, arigatō gozaimashita."
            },
            {
                label: "話者A",
                key: "senior",
                name: "先輩",
                line: "どういたしまして。少しずつ慣れていけば大丈夫です。",
                target: "どういたしまして すこしずつなれていけばだいじょうぶです",
                ruby: "どういたしまして。<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>慣<rt>な</rt></ruby>れていけば<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。",
                romaji: "Dō itashimashite. Sukoshi zutsu narete ikeba daijōbu desu."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "まだスピードは遅いですが、確認しながら進めたいと思います。",
                target: "まだすぴーどはおそいですが かくにんしながらすすめたいとおもいます",
                ruby: "まだスピードは<ruby>遅<rt>おそ</rt></ruby>いですが、<ruby>確認<rt>かくにん</rt></ruby>しながら<ruby>進<rt>すす</rt></ruby>めたいと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Mada supīdo wa osoi desu ga, kakunin shinagara susumetai to omoimasu."
            },
            {
                label: "話者A",
                key: "senior",
                name: "先輩",
                line: "最初は正確さの方が大切です。急がなくても大丈夫ですよ。",
                target: "さいしょはせいかくさのほうがたいせつです いそがなくてもだいじょうぶですよ",
                ruby: "<ruby>最初<rt>さいしょ</rt></ruby>は<ruby>正確<rt>せいかく</rt></ruby>さの<ruby>方<rt>ほう</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>です。<ruby>急<rt>いそ</rt></ruby>がなくても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですよ。",
                romaji: "Saisho wa seikakusa no hō ga taisetsu desu. Isoganakute mo daijōbu desu yo."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "ありがとうございます。明日もわからないことがあれば質問します。",
                target: "ありがとうございます あしたもわからないことがあればしつもんします",
                ruby: "ありがとうございます。<ruby>明日<rt>あした</rt></ruby>もわからないことがあれば<ruby>質問<rt>しつもん</rt></ruby>します。",
                romaji: "Arigatō gozaimasu. Ashita mo wakaranai koto ga areba shitsumon shimasu."
            },
            {
                label: "話者A",
                key: "senior",
                name: "先輩",
                line: "はい、遠慮なく聞いてください。明日もよろしくお願いします。",
                target: "はい えんりょなくきいてください あしたもよろしくおねがいします",
                ruby: "はい、<ruby>遠慮<rt>えんりょ</rt></ruby>なく<ruby>聞<rt>き</rt></ruby>いてください。<ruby>明日<rt>あした</rt></ruby>もよろしくお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hai, enryo naku kiite kudasai. Ashita mo yoroshiku onegai shimasu."
            }
        ],
        {
            ja: [
                "社員：今日は作業を教えていただき、ありがとうございました。",
                "先輩：どういたしまして。少しずつ慣れていけば大丈夫です。",
                "社員：まだスピードは遅いですが、確認しながら進めたいと思います。",
                "先輩：最初は正確さの方が大切です。急がなくても大丈夫ですよ。",
                "社員：ありがとうございます。明日もわからないことがあれば質問します。",
                "先輩：はい、遠慮なく聞いてください。明日もよろしくお願いします。"
            ],
            en: [
                "Worker: Thank you for teaching me the work today.",
                "Senior Worker: You are welcome. It is okay if you get used to it little by little.",
                "Worker: I am still slow, but I would like to continue while checking carefully.",
                "Senior Worker: At first, accuracy is more important. You do not have to rush.",
                "Worker: Thank you. If I do not understand something tomorrow, I will ask.",
                "Senior Worker: Yes, please feel free to ask. I look forward to working with you tomorrow too."
            ],
            "zh-CN": [
                "员工：今天谢谢您教我工作。",
                "前辈：不用谢。慢慢习惯就可以了。",
                "员工：我速度还慢，但想一边确认一边进行。",
                "前辈：刚开始准确更重要。不用着急。",
                "员工：谢谢。明天如果有不懂的地方，我会提问。",
                "前辈：好的，请不要客气地问。明天也请多关照。"
            ],
            "zh-TW": [
                "員工：今天謝謝您教我工作。",
                "前輩：不用謝。慢慢習慣就可以了。",
                "員工：我速度還慢，但想一邊確認一邊進行。",
                "前輩：剛開始準確更重要。不用著急。",
                "員工：謝謝。明天如果有不懂的地方，我會提問。",
                "前輩：好的，請不要客氣地問。明天也請多關照。"
            ],
            ko: [
                "직원: 오늘 작업을 알려 주셔서 감사했습니다.",
                "선배: 천만에요. 조금씩 익숙해지면 괜찮습니다.",
                "직원: 아직 속도는 느리지만 확인하면서 진행하고 싶습니다.",
                "선배: 처음에는 정확성이 더 중요합니다. 서두르지 않아도 괜찮아요.",
                "직원: 감사합니다. 내일도 모르는 것이 있으면 질문하겠습니다.",
                "선배: 네, 사양하지 말고 물어보세요. 내일도 잘 부탁드립니다."
            ],
            vi: [
                "Nhân viên: Cảm ơn anh/chị đã chỉ công việc cho tôi hôm nay.",
                "Người hướng dẫn: Không có gì. Bạn cứ quen dần từng chút một là được.",
                "Nhân viên: Tôi vẫn còn chậm, nhưng muốn làm vừa kiểm tra cẩn thận.",
                "Người hướng dẫn: Ban đầu, sự chính xác quan trọng hơn. Bạn không cần vội.",
                "Nhân viên: Cảm ơn. Ngày mai nếu có điều gì không hiểu, tôi sẽ hỏi.",
                "Người hướng dẫn: Vâng, hãy hỏi thoải mái. Ngày mai cũng mong được hợp tác."
            ]
        }
    )

];