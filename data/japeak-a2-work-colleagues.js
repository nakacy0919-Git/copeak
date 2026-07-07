// =====================================================
// Japeak A2 Level
// Scene: 職場の同僚とやりとりしよう
// File: data/japeak-a2-work-colleagues.js
// Category Key: a2_work_colleagues
// =====================================================

const a2WorkColleaguesLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeA2WorkColleaguesTranslations(translations) {
    const completed = {};
    a2WorkColleaguesLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const a2WorkColleaguesContext = {
    ja: "職場で同僚とやりとりするときに、あいさつ、作業の確認、手伝いのお願い、道具の貸し借り、休憩、引き継ぎ、予定の確認、お礼について話す日本語を練習します。",
    en: "Practice Japanese for communicating with coworkers at work, including greetings, checking tasks, asking for help, borrowing tools, taking breaks, handovers, checking schedules, and saying thanks.",
    "zh-CN": "练习在职场和同事交流时使用的日语，包括打招呼、确认工作、请求帮忙、借工具、休息、交接、确认安排和表达感谢。",
    "zh-TW": "練習在職場和同事交流時使用的日語，包括打招呼、確認工作、請求幫忙、借工具、休息、交接、確認安排和表達感謝。",
    ko: "직장에서 동료와 대화할 때 필요한 일본어를 연습합니다. 인사, 작업 확인, 도움 요청, 도구 빌리기, 휴식, 인수인계, 일정 확인, 감사 표현을 다룹니다.",
    vi: "Luyện tiếng Nhật khi giao tiếp với đồng nghiệp tại nơi làm việc, gồm chào hỏi, kiểm tra công việc, nhờ giúp đỡ, mượn dụng cụ, nghỉ giải lao, bàn giao,確認 lịch và cảm ơn.",
    tl: "Practice ng Japanese para makipag-usap sa coworkers sa trabaho, tulad ng greetings, checking tasks, asking for help, borrowing tools, breaks, handovers, checking schedules, at saying thanks.",
    id: "Latihan bahasa Jepang untuk berkomunikasi dengan rekan kerja, termasuk salam, mengecek pekerjaan, meminta bantuan, meminjam alat, istirahat, serah terima, mengecek jadwal, dan mengucapkan terima kasih.",
    th: "ฝึกภาษาญี่ปุ่นสำหรับการสื่อสารกับเพื่อนร่วมงาน เช่น การทักทาย ตรวจงาน ขอความช่วยเหลือ ยืมอุปกรณ์ พักเบรก ส่งต่องาน ตรวจตาราง และกล่าวขอบคุณ",
    my: "အလုပ်ခွင်တွင် coworker နှင့် ဆက်သွယ်ရန် greetings၊ task check၊ asking for help၊ borrowing tools၊ breaks၊ handover၊ schedule check နှင့် thanks အကြောင်း ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ទំនាក់ទំនងជាមួយមិត្តរួមការងារ ដូចជា ស្វាគមន៍ ពិនិត្យការងារ សុំជំនួយ ខ្ចីឧបករណ៍ សម្រាក ផ្ទេរការងារ ពិនិត្យកាលវិភាគ និងអរគុណ។",
    ne: "काममा सहकर्मीसँग कुराकानी गर्दा greeting, task check, asking for help, borrowing tools, breaks, handover, schedule check र thanks बारे जापानी अभ्यास।",
    mn: "Ажлын байранд хамт ажиллагсадтай харилцах япон хэл: мэндлэх, ажил шалгах, тусламж хүсэх, багаж зээлэх, амрах, ажлаа хүлээлцэх, хуваарь шалгах, талархах.",
    si: "වැඩ කරන ස්ථානයේ coworkers සමඟ කතා කිරීමට greetings, task check, asking for help, borrowing tools, breaks, handover, schedule check සහ thanks ගැන ජපන් භාෂා පුහුණුව.",
    bn: "কর্মস্থলে coworkers-এর সঙ্গে কথা বলার জন্য greetings, task check, asking for help, borrowing tools, breaks, handover, schedule check এবং thanks নিয়ে জাপানি অনুশীলন।",
    pt: "Prática de japonês para conversar com colegas de trabalho: cumprimentos, confirmação de tarefas, pedir ajuda, emprestar ferramentas, pausas, passagem de serviço, horários e agradecimentos.",
    es: "Práctica de japonés para comunicarse con compañeros de trabajo: saludos, confirmar tareas, pedir ayuda, pedir herramientas, descansos, traspaso de trabajo, horarios y agradecimientos.",
    fr: "Entraînement en japonais pour communiquer avec des collègues : salutations, vérification des tâches, demander de l’aide, emprunter des outils, pause, transmission, horaires et remerciements.",
    ru: "Практика японского языка для общения с коллегами: приветствия, проверка задач, просьба о помощи, заём инструментов, перерывы, передача смены, расписание и благодарность.",
    uk: "Практика японської мови для спілкування з колегами: вітання, перевірка завдань, прохання про допомогу, позичання інструментів, перерви, передача зміни, розклад і подяка."
};

const a2WorkColleaguesSpeakerNames = {
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

function makeA2WorkColleaguesDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeA2WorkColleaguesTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_work_colleagues",
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
            speakerNames: a2WorkColleaguesSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2WorkColleaguesContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakA2WorkColleaguesData = [

    makeA2WorkColleaguesDialogue(
        "a2_workcolleague_001",
        "朝のあいさつをする",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "おはようございます。今日もよろしくお願いします。",
                target: "おはようございます きょうもよろしくおねがいします",
                ruby: "おはようございます。<ruby>今日<rt>きょう</rt></ruby>もよろしくお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Ohayō gozaimasu. Kyō mo yoroshiku onegai shimasu."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "おはようございます。今日はどの作業から始めますか。",
                target: "おはようございます きょうはどのさぎょうからはじめますか",
                ruby: "おはようございます。<ruby>今日<rt>きょう</rt></ruby>はどの<ruby>作業<rt>さぎょう</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>めますか。",
                romaji: "Ohayō gozaimasu. Kyō wa dono sagyō kara hajimemasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "まず、昨日の続きから始めます。",
                target: "まず きのうのつづきからはじめます",
                ruby: "まず、<ruby>昨日<rt>きのう</rt></ruby>の<ruby>続<rt>つづ</rt></ruby>きから<ruby>始<rt>はじ</rt></ruby>めます。",
                romaji: "Mazu, kinō no tsuzuki kara hajimemasu."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "わかりました。準備ができたら声をかけてください。",
                target: "わかりました じゅんびができたらこえをかけてください",
                ruby: "わかりました。<ruby>準備<rt>じゅんび</rt></ruby>ができたら<ruby>声<rt>こえ</rt></ruby>をかけてください。",
                romaji: "Wakarimashita. Junbi ga dekitara koe o kakete kudasai."
            }
        ],
        {
            ja: [
                "社員：おはようございます。今日もよろしくお願いします。",
                "同僚：おはようございます。今日はどの作業から始めますか。",
                "社員：まず、昨日の続きから始めます。",
                "同僚：わかりました。準備ができたら声をかけてください。"
            ],
            en: [
                "Worker: Good morning. I look forward to working with you today.",
                "Coworker: Good morning. Which task will you start with today?",
                "Worker: First, I will start with yesterday’s continuation.",
                "Coworker: Understood. Please let me know when you are ready."
            ],
            "zh-CN": [
                "员工：早上好。今天也请多关照。",
                "同事：早上好。今天从哪项工作开始？",
                "员工：首先从昨天的后续工作开始。",
                "同事：明白了。准备好之后请叫我。"
            ],
            "zh-TW": [
                "員工：早安。今天也請多關照。",
                "同事：早安。今天從哪項工作開始？",
                "員工：首先從昨天的後續工作開始。",
                "同事：明白了。準備好之後請叫我。"
            ],
            ko: [
                "직원: 안녕하세요. 오늘도 잘 부탁드립니다.",
                "동료: 안녕하세요. 오늘은 어떤 작업부터 시작하나요?",
                "직원: 먼저 어제 하던 것부터 시작하겠습니다.",
                "동료: 알겠습니다. 준비가 되면 불러 주세요."
            ],
            vi: [
                "Nhân viên: Chào buổi sáng. Hôm nay cũng mong được giúp đỡ.",
                "Đồng nghiệp: Chào buổi sáng. Hôm nay bạn bắt đầu từ công việc nào?",
                "Nhân viên: Trước tiên, tôi sẽ bắt đầu từ phần tiếp theo của hôm qua.",
                "Đồng nghiệp: Tôi hiểu rồi. Khi chuẩn bị xong, hãy gọi tôi."
            ]
        }
    ),

    makeA2WorkColleaguesDialogue(
        "a2_workcolleague_002",
        "手伝いをお願いする",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "すみません。この箱を一緒に運んでもらえますか。",
                target: "すみません このはこをいっしょにはこんでもらえますか",
                ruby: "すみません。この<ruby>箱<rt>はこ</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>運<rt>はこ</rt></ruby>んでもらえますか。",
                romaji: "Sumimasen. Kono hako o issho ni hakonde moraemasu ka."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "もちろんです。どこまで運びますか。",
                target: "もちろんです どこまではこびますか",
                ruby: "もちろんです。どこまで<ruby>運<rt>はこ</rt></ruby>びますか。",
                romaji: "Mochiron desu. Doko made hakobimasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "奥の棚までお願いします。",
                target: "おくのたなまでおねがいします",
                ruby: "<ruby>奥<rt>おく</rt></ruby>の<ruby>棚<rt>たな</rt></ruby>までお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Oku no tana made onegai shimasu."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "わかりました。足元に気をつけましょう。",
                target: "わかりました あしもとにきをつけましょう",
                ruby: "わかりました。<ruby>足元<rt>あしもと</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつけましょう。",
                romaji: "Wakarimashita. Ashimoto ni ki o tsukemashō."
            }
        ],
        {
            ja: [
                "社員：すみません。この箱を一緒に運んでもらえますか。",
                "同僚：もちろんです。どこまで運びますか。",
                "社員：奥の棚までお願いします。",
                "同僚：わかりました。足元に気をつけましょう。"
            ],
            en: [
                "Worker: Excuse me. Could you help me carry this box?",
                "Coworker: Of course. Where should we carry it?",
                "Worker: To the shelf in the back, please.",
                "Coworker: Understood. Let’s watch our step."
            ],
            "zh-CN": [
                "员工：不好意思。可以一起帮我搬这个箱子吗？",
                "同事：当然可以。要搬到哪里？",
                "员工：请搬到里面的架子那里。",
                "同事：明白了。我们注意脚下吧。"
            ],
            "zh-TW": [
                "員工：不好意思。可以一起幫我搬這個箱子嗎？",
                "同事：當然可以。要搬到哪裡？",
                "員工：請搬到裡面的架子那裡。",
                "同事：明白了。我們注意腳下吧。"
            ],
            ko: [
                "직원: 죄송합니다. 이 상자를 같이 옮겨 주실 수 있나요?",
                "동료: 물론입니다. 어디까지 옮기나요?",
                "직원: 안쪽 선반까지 부탁드립니다.",
                "동료: 알겠습니다. 발밑을 조심합시다."
            ],
            vi: [
                "Nhân viên: Xin lỗi. Bạn có thể cùng tôi mang cái hộp này không?",
                "Đồng nghiệp: Tất nhiên. Chúng ta mang đến đâu?",
                "Nhân viên: Đến kệ phía trong, làm ơn.",
                "Đồng nghiệp: Tôi hiểu rồi. Hãy chú ý dưới chân."
            ]
        }
    ),

    makeA2WorkColleaguesDialogue(
        "a2_workcolleague_003",
        "わからないことを聞く",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "すみません。この作業のやり方をもう一度教えてください。",
                target: "すみません このさぎょうのやりかたをもういちどおしえてください",
                ruby: "すみません。この<ruby>作業<rt>さぎょう</rt></ruby>のやり<ruby>方<rt>かた</rt></ruby>をもう<ruby>一度<rt>いちど</rt></ruby><ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Sumimasen. Kono sagyō no yarikata o mō ichido oshiete kudasai."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "いいですよ。まず、このボタンを押します。",
                target: "いいですよ まず このぼたんをおします",
                ruby: "いいですよ。まず、このボタンを<ruby>押<rt>お</rt></ruby>します。",
                romaji: "Ii desu yo. Mazu, kono botan o oshimasu."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "そのあと、ここを確認すればいいですか。",
                target: "そのあと ここをかくにんすればいいですか",
                ruby: "そのあと、ここを<ruby>確認<rt>かくにん</rt></ruby>すればいいですか。",
                romaji: "Sono ato, koko o kakunin sureba ii desu ka."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "はい。数字が変わったら、次の作業に進みます。",
                target: "はい すうじがかわったら つぎのさぎょうにすすみます",
                ruby: "はい。<ruby>数字<rt>すうじ</rt></ruby>が<ruby>変<rt>か</rt></ruby>わったら、<ruby>次<rt>つぎ</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>に<ruby>進<rt>すす</rt></ruby>みます。",
                romaji: "Hai. Sūji ga kawattara, tsugi no sagyō ni susumimasu."
            }
        ],
        {
            ja: [
                "社員：すみません。この作業のやり方をもう一度教えてください。",
                "同僚：いいですよ。まず、このボタンを押します。",
                "社員：そのあと、ここを確認すればいいですか。",
                "同僚：はい。数字が変わったら、次の作業に進みます。"
            ],
            en: [
                "Worker: Excuse me. Please teach me how to do this task one more time.",
                "Coworker: Sure. First, press this button.",
                "Worker: After that, should I check here?",
                "Coworker: Yes. When the number changes, move on to the next task."
            ],
            "zh-CN": [
                "员工：不好意思。请再教我一次这个工作的做法。",
                "同事：可以。首先，按这个按钮。",
                "员工：然后确认这里就可以了吗？",
                "同事：是的。数字变化后，就进入下一项工作。"
            ],
            "zh-TW": [
                "員工：不好意思。請再教我一次這個工作的做法。",
                "同事：可以。首先，按這個按鈕。",
                "員工：然後確認這裡就可以了嗎？",
                "同事：是的。數字變化後，就進入下一項工作。"
            ],
            ko: [
                "직원: 죄송합니다. 이 작업 방법을 한 번 더 알려 주세요.",
                "동료: 괜찮아요. 먼저 이 버튼을 누릅니다.",
                "직원: 그다음에 여기를 확인하면 되나요?",
                "동료: 네. 숫자가 바뀌면 다음 작업으로 진행합니다."
            ],
            vi: [
                "Nhân viên: Xin lỗi. Xin hãy chỉ lại cho tôi cách làm công việc này một lần nữa.",
                "Đồng nghiệp: Được chứ. Trước tiên, bấm nút này.",
                "Nhân viên: Sau đó, tôi kiểm tra chỗ này là được phải không?",
                "Đồng nghiệp: Đúng. Khi con số thay đổi, hãy chuyển sang công việc tiếp theo."
            ]
        }
    ),

    makeA2WorkColleaguesDialogue(
        "a2_workcolleague_004",
        "道具を借りる",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "すみません。ドライバーを借りてもいいですか。",
                target: "すみません どらいばーをかりてもいいですか",
                ruby: "すみません。ドライバーを<ruby>借<rt>か</rt></ruby>りてもいいですか。",
                romaji: "Sumimasen. Doraibā o karite mo ii desu ka."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "いいですよ。使ったあと、元の場所に戻してください。",
                target: "いいですよ つかったあと もとのばしょにもどしてください",
                ruby: "いいですよ。<ruby>使<rt>つか</rt></ruby>ったあと、<ruby>元<rt>もと</rt></ruby>の<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>してください。",
                romaji: "Ii desu yo. Tsukatta ato, moto no basho ni modoshite kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "ありがとうございます。十分くらいで返します。",
                target: "ありがとうございます じゅっぷんくらいでかえします",
                ruby: "ありがとうございます。<ruby>十分<rt>じゅっぷん</rt></ruby>くらいで<ruby>返<rt>かえ</rt></ruby>します。",
                romaji: "Arigatō gozaimasu. Juppun kurai de kaeshimasu."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "わかりました。必要なら他の道具も使ってください。",
                target: "わかりました ひつようならほかのどうぐもつかってください",
                ruby: "わかりました。<ruby>必要<rt>ひつよう</rt></ruby>なら<ruby>他<rt>ほか</rt></ruby>の<ruby>道具<rt>どうぐ</rt></ruby>も<ruby>使<rt>つか</rt></ruby>ってください。",
                romaji: "Wakarimashita. Hitsuyō nara hoka no dōgu mo tsukatte kudasai."
            }
        ],
        {
            ja: [
                "社員：すみません。ドライバーを借りてもいいですか。",
                "同僚：いいですよ。使ったあと、元の場所に戻してください。",
                "社員：ありがとうございます。十分くらいで返します。",
                "同僚：わかりました。必要なら他の道具も使ってください。"
            ],
            en: [
                "Worker: Excuse me. May I borrow a screwdriver?",
                "Coworker: Sure. After using it, please return it to its original place.",
                "Worker: Thank you. I will return it in about ten minutes.",
                "Coworker: Understood. If necessary, please use other tools too."
            ],
            "zh-CN": [
                "员工：不好意思。可以借一下螺丝刀吗？",
                "同事：可以。用完后，请放回原来的地方。",
                "员工：谢谢。大约十分钟后还给你。",
                "同事：明白了。如果需要，也可以使用其他工具。"
            ],
            "zh-TW": [
                "員工：不好意思。可以借一下螺絲起子嗎？",
                "同事：可以。用完後，請放回原來的地方。",
                "員工：謝謝。大約十分鐘後還給你。",
                "同事：明白了。如果需要，也可以使用其他工具。"
            ],
            ko: [
                "직원: 죄송합니다. 드라이버를 빌려도 될까요?",
                "동료: 괜찮아요. 사용한 뒤에는 원래 장소에 돌려놔 주세요.",
                "직원: 감사합니다. 10분 정도 후에 돌려드리겠습니다.",
                "동료: 알겠습니다. 필요하면 다른 도구도 사용해 주세요."
            ],
            vi: [
                "Nhân viên: Xin lỗi. Tôi có thể mượn tua vít không?",
                "Đồng nghiệp: Được. Sau khi dùng, hãy trả lại chỗ cũ.",
                "Nhân viên: Cảm ơn. Tôi sẽ trả lại trong khoảng mười phút.",
                "Đồng nghiệp: Tôi hiểu rồi. Nếu cần, hãy dùng cả dụng cụ khác."
            ]
        }
    ),

    makeA2WorkColleaguesDialogue(
        "a2_workcolleague_005",
        "休憩に誘う",
        [
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "そろそろ休憩に行きませんか。",
                target: "そろそろきゅうけいにいきませんか",
                ruby: "そろそろ<ruby>休憩<rt>きゅうけい</rt></ruby>に<ruby>行<rt>い</rt></ruby>きませんか。",
                romaji: "Sorosoro kyūkei ni ikimasen ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "はい。あと五分で終わるので、少し待ってください。",
                target: "はい あとごふんでおわるので すこしまってください",
                ruby: "はい。あと<ruby>五分<rt>ごふん</rt></ruby>で<ruby>終<rt>お</rt></ruby>わるので、<ruby>少<rt>すこ</rt></ruby>し<ruby>待<rt>ま</rt></ruby>ってください。",
                romaji: "Hai. Ato go-fun de owaru node, sukoshi matte kudasai."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "わかりました。休憩室で待っています。",
                target: "わかりました きゅうけいしつでまっています",
                ruby: "わかりました。<ruby>休憩室<rt>きゅうけいしつ</rt></ruby>で<ruby>待<rt>ま</rt></ruby>っています。",
                romaji: "Wakarimashita. Kyūkeishitsu de matte imasu."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "終わったら、すぐに行きます。",
                target: "おわったら すぐにいきます",
                ruby: "<ruby>終<rt>お</rt></ruby>わったら、すぐに<ruby>行<rt>い</rt></ruby>きます。",
                romaji: "Owattara, sugu ni ikimasu."
            }
        ],
        {
            ja: [
                "同僚：そろそろ休憩に行きませんか。",
                "社員：はい。あと五分で終わるので、少し待ってください。",
                "同僚：わかりました。休憩室で待っています。",
                "社員：終わったら、すぐに行きます。"
            ],
            en: [
                "Coworker: Shall we go take a break soon?",
                "Worker: Yes. I will finish in five minutes, so please wait a little.",
                "Coworker: Understood. I will wait in the break room.",
                "Worker: When I finish, I will go right away."
            ],
            "zh-CN": [
                "同事：差不多去休息一下吧？",
                "员工：好的。我还有五分钟就结束，请稍等一下。",
                "同事：明白了。我在休息室等你。",
                "员工：结束后我马上过去。"
            ],
            "zh-TW": [
                "同事：差不多去休息一下吧？",
                "員工：好的。我還有五分鐘就結束，請稍等一下。",
                "同事：明白了。我在休息室等你。",
                "員工：結束後我馬上過去。"
            ],
            ko: [
                "동료: 슬슬 휴식하러 가지 않을래요?",
                "직원: 네. 5분 후에 끝나니까 조금 기다려 주세요.",
                "동료: 알겠습니다. 휴게실에서 기다리고 있겠습니다.",
                "직원: 끝나면 바로 가겠습니다."
            ],
            vi: [
                "Đồng nghiệp: Chúng ta sắp đi nghỉ một chút nhé?",
                "Nhân viên: Vâng. Tôi sẽ xong trong năm phút nữa, xin hãy chờ một chút.",
                "Đồng nghiệp: Tôi hiểu rồi. Tôi sẽ đợi ở phòng nghỉ.",
                "Nhân viên: Khi xong, tôi sẽ đi ngay."
            ]
        }
    ),

    makeA2WorkColleaguesDialogue(
        "a2_workcolleague_006",
        "作業の進み具合を伝える",
        [
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "作業はどのくらい進みましたか。",
                target: "さぎょうはどのくらいすすみましたか",
                ruby: "<ruby>作業<rt>さぎょう</rt></ruby>はどのくらい<ruby>進<rt>すす</rt></ruby>みましたか。",
                romaji: "Sagyō wa dono kurai susumimashita ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "半分くらい終わりました。",
                target: "はんぶんくらいおわりました",
                ruby: "<ruby>半分<rt>はんぶん</rt></ruby>くらい<ruby>終<rt>お</rt></ruby>わりました。",
                romaji: "Hanbun kurai owarimashita."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "予定より少し遅れていますか。",
                target: "よていよりすこしおくれていますか",
                ruby: "<ruby>予定<rt>よてい</rt></ruby>より<ruby>少<rt>すこ</rt></ruby>し<ruby>遅<rt>おく</rt></ruby>れていますか。",
                romaji: "Yotei yori sukoshi okurete imasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "はい。でも、三時までには終わると思います。",
                target: "はい でも さんじまでにはおわるとおもいます",
                ruby: "はい。でも、<ruby>三時<rt>さんじ</rt></ruby>までには<ruby>終<rt>お</rt></ruby>わると<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Hai. Demo, san-ji made ni wa owaru to omoimasu."
            }
        ],
        {
            ja: [
                "同僚：作業はどのくらい進みましたか。",
                "社員：半分くらい終わりました。",
                "同僚：予定より少し遅れていますか。",
                "社員：はい。でも、三時までには終わると思います。"
            ],
            en: [
                "Coworker: How much progress have you made on the task?",
                "Worker: I have finished about half.",
                "Coworker: Are you a little behind schedule?",
                "Worker: Yes. But I think I will finish by 3 p.m."
            ],
            "zh-CN": [
                "同事：工作进展到什么程度了？",
                "员工：大约完成了一半。",
                "同事：比预定稍微晚一点吗？",
                "员工：是的。不过我觉得三点前能完成。"
            ],
            "zh-TW": [
                "同事：工作進展到什麼程度了？",
                "員工：大約完成了一半。",
                "同事：比預定稍微晚一點嗎？",
                "員工：是的。不過我覺得三點前能完成。"
            ],
            ko: [
                "동료: 작업은 어느 정도 진행됐나요?",
                "직원: 절반 정도 끝났습니다.",
                "동료: 예정보다 조금 늦어지고 있나요?",
                "직원: 네. 하지만 3시까지는 끝날 것 같습니다."
            ],
            vi: [
                "Đồng nghiệp: Công việc đã tiến triển được bao nhiêu rồi?",
                "Nhân viên: Tôi đã xong khoảng một nửa.",
                "Đồng nghiệp: Có chậm hơn kế hoạch một chút không?",
                "Nhân viên: Có. Nhưng tôi nghĩ sẽ xong trước 3 giờ."
            ]
        }
    ),

    makeA2WorkColleaguesDialogue(
        "a2_workcolleague_007",
        "引き継ぎをする",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "すみません。先に帰るので、引き継ぎをしてもいいですか。",
                target: "すみません さきにかえるので ひきつぎをしてもいいですか",
                ruby: "すみません。<ruby>先<rt>さき</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>るので、<ruby>引<rt>ひ</rt></ruby>き<ruby>継<rt>つ</rt></ruby>ぎをしてもいいですか。",
                romaji: "Sumimasen. Saki ni kaeru node, hikitsugi o shite mo ii desu ka."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "はい。どこまで終わっていますか。",
                target: "はい どこまでおわっていますか",
                ruby: "はい。どこまで<ruby>終<rt>お</rt></ruby>わっていますか。",
                romaji: "Hai. Doko made owatte imasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "このリストの三番まで終わっています。",
                target: "このりすとのさんばんまでおわっています",
                ruby: "このリストの<ruby>三番<rt>さんばん</rt></ruby>まで<ruby>終<rt>お</rt></ruby>わっています。",
                romaji: "Kono risuto no sanban made owatte imasu."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "わかりました。四番から続けます。",
                target: "わかりました よんばんからつづけます",
                ruby: "わかりました。<ruby>四番<rt>よんばん</rt></ruby>から<ruby>続<rt>つづ</rt></ruby>けます。",
                romaji: "Wakarimashita. Yonban kara tsuzukemasu."
            }
        ],
        {
            ja: [
                "社員：すみません。先に帰るので、引き継ぎをしてもいいですか。",
                "同僚：はい。どこまで終わっていますか。",
                "社員：このリストの三番まで終わっています。",
                "同僚：わかりました。四番から続けます。"
            ],
            en: [
                "Worker: Excuse me. I will leave first, so may I hand this over to you?",
                "Coworker: Yes. How far have you finished?",
                "Worker: I have finished up to number three on this list.",
                "Coworker: Understood. I will continue from number four."
            ],
            "zh-CN": [
                "员工：不好意思。我先下班，可以交接一下吗？",
                "同事：可以。做到哪里了？",
                "员工：这个清单做到第三项了。",
                "同事：明白了。我从第四项继续。"
            ],
            "zh-TW": [
                "員工：不好意思。我先下班，可以交接一下嗎？",
                "同事：可以。做到哪裡了？",
                "員工：這個清單做到第三項了。",
                "同事：明白了。我從第四項繼續。"
            ],
            ko: [
                "직원: 죄송합니다. 먼저 퇴근해야 해서 인수인계를 해도 될까요?",
                "동료: 네. 어디까지 끝났나요?",
                "직원: 이 리스트의 3번까지 끝났습니다.",
                "동료: 알겠습니다. 4번부터 계속하겠습니다."
            ],
            vi: [
                "Nhân viên: Xin lỗi. Tôi sẽ về trước, nên tôi có thể bàn giao không?",
                "Đồng nghiệp: Được. Bạn đã làm xong đến đâu rồi?",
                "Nhân viên: Tôi đã xong đến số 3 trong danh sách này.",
                "Đồng nghiệp: Tôi hiểu rồi. Tôi sẽ tiếp tục từ số 4."
            ]
        }
    ),

    makeA2WorkColleaguesDialogue(
        "a2_workcolleague_008",
        "お礼を伝える",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "今日は手伝ってくれて、ありがとうございました。",
                target: "きょうはてつだってくれて ありがとうございました",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>手伝<rt>てつだ</rt></ruby>ってくれて、ありがとうございました。",
                romaji: "Kyō wa tetsudatte kurete, arigatō gozaimashita."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "いいえ。困ったときはお互いさまです。",
                target: "いいえ こまったときはおたがいさまです",
                ruby: "いいえ。<ruby>困<rt>こま</rt></ruby>ったときはお<ruby>互<rt>たが</rt></ruby>いさまです。",
                romaji: "Iie. Komatta toki wa otagaisama desu."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "次は私も手伝います。",
                target: "つぎはわたしもてつだいます",
                ruby: "<ruby>次<rt>つぎ</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>も<ruby>手伝<rt>てつだ</rt></ruby>います。",
                romaji: "Tsugi wa watashi mo tetsudaimasu."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "ありがとうございます。これからもよろしくお願いします。",
                target: "ありがとうございます これからもよろしくおねがいします",
                ruby: "ありがとうございます。これからもよろしくお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Arigatō gozaimasu. Kore kara mo yoroshiku onegai shimasu."
            }
        ],
        {
            ja: [
                "社員：今日は手伝ってくれて、ありがとうございました。",
                "同僚：いいえ。困ったときはお互いさまです。",
                "社員：次は私も手伝います。",
                "同僚：ありがとうございます。これからもよろしくお願いします。"
            ],
            en: [
                "Worker: Thank you for helping me today.",
                "Coworker: No problem. We help each other when someone has trouble.",
                "Worker: Next time, I will help you too.",
                "Coworker: Thank you. I look forward to working with you."
            ],
            "zh-CN": [
                "员工：今天谢谢你帮忙。",
                "同事：不用谢。有困难的时候互相帮助嘛。",
                "员工：下次我也会帮你。",
                "同事：谢谢。今后也请多关照。"
            ],
            "zh-TW": [
                "員工：今天謝謝你幫忙。",
                "同事：不用謝。有困難的時候互相幫助嘛。",
                "員工：下次我也會幫你。",
                "同事：謝謝。今後也請多關照。"
            ],
            ko: [
                "직원: 오늘 도와주셔서 감사합니다.",
                "동료: 아니에요. 어려울 때는 서로 돕는 거죠.",
                "직원: 다음에는 저도 돕겠습니다.",
                "동료: 감사합니다. 앞으로도 잘 부탁드립니다."
            ],
            vi: [
                "Nhân viên: Cảm ơn bạn đã giúp tôi hôm nay.",
                "Đồng nghiệp: Không có gì. Khi gặp khó khăn thì chúng ta giúp nhau.",
                "Nhân viên: Lần sau tôi cũng sẽ giúp bạn.",
                "Đồng nghiệp: Cảm ơn. Từ nay cũng mong được hợp tác."
            ]
        }
    )

];