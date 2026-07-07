// =====================================================
// Japeak A2 Level
// Scene: 安全に注意して働こう
// File: data/japeak-a2-work-safety.js
// Category Key: a2_work_safety
// =====================================================

const a2WorkSafetyLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeA2WorkSafetyTranslations(translations) {
    const completed = {};
    a2WorkSafetyLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const a2WorkSafetyContext = {
    ja: "職場で安全に働くために、保護具、機械の確認、けがの報告、危険な場所、重い物の持ち方、体調不良などについて話す日本語を練習します。",
    en: "Practice Japanese for working safely, including protective equipment, checking machines, reporting injuries, dangerous places, lifting heavy items, and physical condition.",
    "zh-CN": "练习在职场安全工作时使用的日语，包括防护用品、机器确认、受伤报告、危险场所、搬重物的方法和身体状况。",
    "zh-TW": "練習在職場安全工作時使用的日語，包括防護用品、機器確認、受傷報告、危險場所、搬重物的方法和身體狀況。",
    ko: "직장에서 안전하게 일하기 위해 보호 장비, 기계 확인, 부상 보고, 위험한 장소, 무거운 물건 드는 방법, 몸 상태에 대해 말하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật để làm việc an toàn, gồm đồ bảo hộ, kiểm tra máy móc, báo cáo chấn thương, nơi nguy hiểm, cách nâng đồ nặng và tình trạng sức khỏe.",
    tl: "Practice ng Japanese para ligtas na magtrabaho, tulad ng protective equipment, machine check, injury report, dangerous places, lifting heavy items, at physical condition.",
    id: "Latihan bahasa Jepang untuk bekerja dengan aman, termasuk alat pelindung, pengecekan mesin, laporan cedera, tempat berbahaya, cara mengangkat barang berat, dan kondisi tubuh.",
    th: "ฝึกภาษาญี่ปุ่นเพื่อทำงานอย่างปลอดภัย เช่น อุปกรณ์ป้องกัน การตรวจเครื่องจักร การรายงานการบาดเจ็บ พื้นที่อันตราย วิธีถือของหนัก และสภาพร่างกาย",
    my: "အလုပ်ခွင်တွင် လုံခြုံစွာလုပ်ကိုင်ရန် protective equipment၊ machine check၊ injury report၊ dangerous place၊ heavy item lifting နှင့် health condition အကြောင်း ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ធ្វើការដោយសុវត្ថិភាព ដូចជា ឧបករណ៍ការពារ ការត្រួតពិនិត្យម៉ាស៊ីន ការរាយការណ៍របួស កន្លែងគ្រោះថ្នាក់ វិធីលើករបស់ធ្ងន់ និងសុខភាព។",
    ne: "काममा सुरक्षित रूपमा काम गर्न protective equipment, machine check, injury report, dangerous place, heavy item lifting र physical condition बारे जापानी अभ्यास।",
    mn: "Ажлын байранд аюулгүй ажиллахад хэрэгтэй япон хэл: хамгаалах хэрэгсэл, машин шалгах, гэмтэл мэдээлэх, аюултай газар, хүнд зүйл өргөх, биеийн байдал.",
    si: "වැඩ කරන ස්ථානයේ ආරක්ෂිතව වැඩ කිරීමට protective equipment, machine check, injury report, dangerous place, heavy item lifting සහ physical condition ගැන ජපන් භාෂා පුහුණුව.",
    bn: "কর্মস্থলে নিরাপদে কাজ করার জন্য protective equipment, machine check, injury report, dangerous place, heavy item lifting এবং physical condition নিয়ে জাপানি অনুশীলন।",
    pt: "Prática de japonês para trabalhar com segurança: equipamentos de proteção, verificação de máquinas, relato de ferimentos, lugares perigosos, levantamento de objetos pesados e condição física.",
    es: "Práctica de japonés para trabajar con seguridad: equipo de protección, revisión de máquinas, reporte de lesiones, lugares peligrosos, levantar objetos pesados y condición física.",
    fr: "Entraînement en japonais pour travailler en sécurité : équipement de protection, vérification des machines, signalement des blessures, lieux dangereux, objets lourds et état physique.",
    ru: "Практика японского языка для безопасной работы: защитное снаряжение, проверка машин, сообщение о травмах, опасные места, подъём тяжёлых предметов и самочувствие.",
    uk: "Практика японської мови для безпечної роботи: захисне спорядження, перевірка машин, повідомлення про травми, небезпечні місця, піднімання важких речей і самопочуття."
};

const a2WorkSafetySpeakerNames = {
    supervisor: {
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
    }
};

function makeA2WorkSafetyDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeA2WorkSafetyTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_work_safety",
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
            speakerNames: a2WorkSafetySpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2WorkSafetyContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakA2WorkSafetyData = [

    makeA2WorkSafetyDialogue(
        "a2_worksafety_001",
        "保護具を確認する",
        [
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "作業を始める前に、ヘルメットをかぶってください。",
                target: "さぎょうをはじめるまえに へるめっとをかぶってください",
                ruby: "<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>める<ruby>前<rt>まえ</rt></ruby>に、ヘルメットをかぶってください。",
                romaji: "Sagyō o hajimeru mae ni, herumetto o kabutte kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "安全靴も必要ですか。",
                target: "あんぜんぐつもひつようですか",
                ruby: "<ruby>安全靴<rt>あんぜんぐつ</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>ですか。",
                romaji: "Anzengutsu mo hitsuyō desu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい。重い物を運ぶので、必ず履いてください。",
                target: "はい おもいものをはこぶので かならずはいてください",
                ruby: "はい。<ruby>重<rt>おも</rt></ruby>い<ruby>物<rt>もの</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>ぶので、<ruby>必<rt>かなら</rt></ruby>ず<ruby>履<rt>は</rt></ruby>いてください。",
                romaji: "Hai. Omoi mono o hakobu node, kanarazu haite kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "わかりました。作業前に確認します。",
                target: "わかりました さぎょうまえにかくにんします",
                ruby: "わかりました。<ruby>作業前<rt>さぎょうまえ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>します。",
                romaji: "Wakarimashita. Sagyō mae ni kakunin shimasu."
            }
        ],
        {
            ja: [
                "先輩：作業を始める前に、ヘルメットをかぶってください。",
                "社員：安全靴も必要ですか。",
                "先輩：はい。重い物を運ぶので、必ず履いてください。",
                "社員：わかりました。作業前に確認します。"
            ],
            en: [
                "Senior Worker: Before starting work, please wear a helmet.",
                "Worker: Are safety shoes also necessary?",
                "Senior Worker: Yes. Since you will carry heavy items, please be sure to wear them.",
                "Worker: Understood. I will check before starting work."
            ],
            "zh-CN": [
                "前辈：开始作业前，请戴好安全帽。",
                "员工：也需要穿安全鞋吗？",
                "前辈：需要。因为要搬重物，请一定要穿。",
                "员工：明白了。我会在作业前确认。"
            ],
            "zh-TW": [
                "前輩：開始作業前，請戴好安全帽。",
                "員工：也需要穿安全鞋嗎？",
                "前輩：需要。因為要搬重物，請一定要穿。",
                "員工：明白了。我會在作業前確認。"
            ],
            ko: [
                "선배: 작업을 시작하기 전에 헬멧을 써 주세요.",
                "직원: 안전화도 필요한가요?",
                "선배: 네. 무거운 물건을 옮기기 때문에 반드시 신어 주세요.",
                "직원: 알겠습니다. 작업 전에 확인하겠습니다."
            ],
            vi: [
                "Người hướng dẫn: Trước khi bắt đầu làm việc, hãy đội mũ bảo hộ.",
                "Nhân viên: Giày bảo hộ cũng cần thiết không ạ?",
                "Người hướng dẫn: Có. Vì sẽ mang đồ nặng, nên nhất định hãy mang giày.",
                "Nhân viên: Tôi hiểu rồi. Tôi sẽ kiểm tra trước khi làm việc."
            ]
        }
    ),

    makeA2WorkSafetyDialogue(
        "a2_worksafety_002",
        "機械を使う前に確認する",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "この機械を使う前に、何を確認すればいいですか。",
                target: "このきかいをつかうまえに なにをかくにんすればいいですか",
                ruby: "この<ruby>機械<rt>きかい</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う<ruby>前<rt>まえ</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>すればいいですか。",
                romaji: "Kono kikai o tsukau mae ni, nani o kakunin sureba ii desu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "まず、カバーが閉まっているか確認してください。",
                target: "まず かばーがしまっているかかくにんしてください",
                ruby: "まず、カバーが<ruby>閉<rt>し</rt></ruby>まっているか<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Mazu, kabā ga shimatte iru ka kakunin shite kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "赤いランプがついている場合は、使わない方がいいですか。",
                target: "あかいらんぷがついているばあいは つかわないほうがいいですか",
                ruby: "<ruby>赤<rt>あか</rt></ruby>いランプがついている<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>使<rt>つか</rt></ruby>わない<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Akai ranpu ga tsuite iru baai wa, tsukawanai hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい。すぐに止めて、担当者に知らせてください。",
                target: "はい すぐにとめて たんとうしゃにしらせてください",
                ruby: "はい。すぐに<ruby>止<rt>と</rt></ruby>めて、<ruby>担当者<rt>たんとうしゃ</rt></ruby>に<ruby>知<rt>し</rt></ruby>らせてください。",
                romaji: "Hai. Sugu ni tomete, tantōsha ni shirasete kudasai."
            }
        ],
        {
            ja: [
                "社員：この機械を使う前に、何を確認すればいいですか。",
                "先輩：まず、カバーが閉まっているか確認してください。",
                "社員：赤いランプがついている場合は、使わない方がいいですか。",
                "先輩：はい。すぐに止めて、担当者に知らせてください。"
            ],
            en: [
                "Worker: Before using this machine, what should I check?",
                "Senior Worker: First, please check whether the cover is closed.",
                "Worker: If the red light is on, is it better not to use it?",
                "Senior Worker: Yes. Stop it immediately and tell the person in charge."
            ],
            "zh-CN": [
                "员工：使用这台机器前，应该确认什么？",
                "前辈：首先，请确认盖子是否关好。",
                "员工：如果红灯亮着，最好不要使用吗？",
                "前辈：是的。请马上停止，并通知负责人。"
            ],
            "zh-TW": [
                "員工：使用這台機器前，應該確認什麼？",
                "前輩：首先，請確認蓋子是否關好。",
                "員工：如果紅燈亮著，最好不要使用嗎？",
                "前輩：是的。請馬上停止，並通知負責人。"
            ],
            ko: [
                "직원: 이 기계를 사용하기 전에 무엇을 확인하면 되나요?",
                "선배: 먼저 커버가 닫혀 있는지 확인해 주세요.",
                "직원: 빨간 램프가 켜져 있는 경우에는 사용하지 않는 것이 좋나요?",
                "선배: 네. 바로 멈추고 담당자에게 알려 주세요."
            ],
            vi: [
                "Nhân viên: Trước khi dùng máy này, tôi nên kiểm tra gì ạ?",
                "Người hướng dẫn: Trước hết, hãy kiểm tra xem nắp đã đóng chưa.",
                "Nhân viên: Nếu đèn đỏ đang sáng thì không nên dùng đúng không ạ?",
                "Người hướng dẫn: Đúng. Hãy dừng ngay và báo cho người phụ trách."
            ]
        }
    ),

    makeA2WorkSafetyDialogue(
        "a2_worksafety_003",
        "床がぬれているとき",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "床がぬれていて、少しすべりやすいです。",
                target: "ゆかがぬれていて すこしすべりやすいです",
                ruby: "<ruby>床<rt>ゆか</rt></ruby>がぬれていて、<ruby>少<rt>すこ</rt></ruby>しすべりやすいです。",
                romaji: "Yuka ga nurete ite, sukoshi suberiyasui desu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "気づいてくれてありがとうございます。",
                target: "きづいてくれてありがとうございます",
                ruby: "<ruby>気<rt>き</rt></ruby>づいてくれてありがとうございます。",
                romaji: "Kizuite kurete arigatō gozaimasu."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "先に拭いた方がいいですか。",
                target: "さきにふいたほうがいいですか",
                ruby: "<ruby>先<rt>さき</rt></ruby>に<ruby>拭<rt>ふ</rt></ruby>いた<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Saki ni fuitā hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい。注意の表示を置いてから、拭いてください。",
                target: "はい ちゅういのひょうじをおいてから ふいてください",
                ruby: "はい。<ruby>注意<rt>ちゅうい</rt></ruby>の<ruby>表示<rt>ひょうじ</rt></ruby>を<ruby>置<rt>お</rt></ruby>いてから、<ruby>拭<rt>ふ</rt></ruby>いてください。",
                romaji: "Hai. Chūi no hyōji o oite kara, fuite kudasai."
            }
        ],
        {
            ja: [
                "社員：床がぬれていて、少しすべりやすいです。",
                "先輩：気づいてくれてありがとうございます。",
                "社員：先に拭いた方がいいですか。",
                "先輩：はい。注意の表示を置いてから、拭いてください。"
            ],
            en: [
                "Worker: The floor is wet and a little slippery.",
                "Senior Worker: Thank you for noticing.",
                "Worker: Should I wipe it first?",
                "Senior Worker: Yes. Please put up a warning sign first, then wipe it."
            ],
            "zh-CN": [
                "员工：地板湿了，有点容易滑。",
                "前辈：谢谢你注意到。",
                "员工：我先擦一下比较好吗？",
                "前辈：是的。请先放上提醒标志，然后再擦。"
            ],
            "zh-TW": [
                "員工：地板濕了，有點容易滑。",
                "前輩：謝謝你注意到。",
                "員工：我先擦一下比較好嗎？",
                "前輩：是的。請先放上提醒標誌，然後再擦。"
            ],
            ko: [
                "직원: 바닥이 젖어 있어서 조금 미끄럽습니다.",
                "선배: 알아차려 줘서 감사합니다.",
                "직원: 먼저 닦는 것이 좋을까요?",
                "선배: 네. 주의 표시를 놓은 뒤에 닦아 주세요."
            ],
            vi: [
                "Nhân viên: Sàn bị ướt và hơi trơn.",
                "Người hướng dẫn: Cảm ơn bạn đã để ý.",
                "Nhân viên: Tôi nên lau trước không ạ?",
                "Người hướng dẫn: Có. Trước tiên hãy đặt biển cảnh báo, rồi lau."
            ]
        }
    ),

    makeA2WorkSafetyDialogue(
        "a2_worksafety_004",
        "重い物を運ぶ",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "この箱は一人で運んでも大丈夫ですか。",
                target: "このはこはひとりではこんでもだいじょうぶですか",
                ruby: "この<ruby>箱<rt>はこ</rt></ruby>は<ruby>一人<rt>ひとり</rt></ruby>で<ruby>運<rt>はこ</rt></ruby>んでも<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Kono hako wa hitori de hakonde mo daijōbu desu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "かなり重いので、二人で運びましょう。",
                target: "かなりおもいので ふたりではこびましょう",
                ruby: "かなり<ruby>重<rt>おも</rt></ruby>いので、<ruby>二人<rt>ふたり</rt></ruby>で<ruby>運<rt>はこ</rt></ruby>びましょう。",
                romaji: "Kanari omoi node, futari de hakobimashō."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "腰を痛めない持ち方はありますか。",
                target: "こしをいためないもちかたはありますか",
                ruby: "<ruby>腰<rt>こし</rt></ruby>を<ruby>痛<rt>いた</rt></ruby>めない<ruby>持<rt>も</rt></ruby>ち<ruby>方<rt>かた</rt></ruby>はありますか。",
                romaji: "Koshi o itamenai mochikata wa arimasu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "ひざを曲げて、体に近づけて持ってください。",
                target: "ひざをまげて からだにちかづけてもってください",
                ruby: "ひざを<ruby>曲<rt>ま</rt></ruby>げて、<ruby>体<rt>からだ</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>づけて<ruby>持<rt>も</rt></ruby>ってください。",
                romaji: "Hiza o magete, karada ni chikazukete motte kudasai."
            }
        ],
        {
            ja: [
                "社員：この箱は一人で運んでも大丈夫ですか。",
                "先輩：かなり重いので、二人で運びましょう。",
                "社員：腰を痛めない持ち方はありますか。",
                "先輩：ひざを曲げて、体に近づけて持ってください。"
            ],
            en: [
                "Worker: Is it okay to carry this box by myself?",
                "Senior Worker: It is quite heavy, so let’s carry it together.",
                "Worker: Is there a way to carry it without hurting my back?",
                "Senior Worker: Bend your knees and hold it close to your body."
            ],
            "zh-CN": [
                "员工：这个箱子一个人搬可以吗？",
                "前辈：相当重，所以两个人一起搬吧。",
                "员工：有没有不伤腰的搬法？",
                "前辈：请弯曲膝盖，靠近身体拿。"
            ],
            "zh-TW": [
                "員工：這個箱子一個人搬可以嗎？",
                "前輩：相當重，所以兩個人一起搬吧。",
                "員工：有沒有不傷腰的搬法？",
                "前輩：請彎曲膝蓋，靠近身體拿。"
            ],
            ko: [
                "직원: 이 상자는 혼자 옮겨도 괜찮나요?",
                "선배: 꽤 무거우니까 둘이서 옮깁시다.",
                "직원: 허리를 다치지 않는 드는 방법이 있나요?",
                "선배: 무릎을 굽히고 몸에 가깝게 잡아 주세요."
            ],
            vi: [
                "Nhân viên: Tôi mang hộp này một mình có được không ạ?",
                "Người hướng dẫn: Nó khá nặng, nên chúng ta hãy mang hai người.",
                "Nhân viên: Có cách nào mang mà không đau lưng không ạ?",
                "Người hướng dẫn: Hãy gập đầu gối và giữ sát vào người."
            ]
        }
    ),

    makeA2WorkSafetyDialogue(
        "a2_worksafety_005",
        "非常停止ボタンを確認する",
        [
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "この機械で異常があったら、非常停止ボタンを押してください。",
                target: "このきかいでいじょうがあったら ひじょうていしぼたんをおしてください",
                ruby: "この<ruby>機械<rt>きかい</rt></ruby>で<ruby>異常<rt>いじょう</rt></ruby>があったら、<ruby>非常停止<rt>ひじょうていし</rt></ruby>ボタンを<ruby>押<rt>お</rt></ruby>してください。",
                romaji: "Kono kikai de ijō ga attara, hijō teishi botan o oshite kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "非常停止ボタンはどこにありますか。",
                target: "ひじょうていしぼたんはどこにありますか",
                ruby: "<ruby>非常停止<rt>ひじょうていし</rt></ruby>ボタンはどこにありますか。",
                romaji: "Hijō teishi botan wa doko ni arimasu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "右側の赤いボタンです。",
                target: "みぎがわのあかいぼたんです",
                ruby: "<ruby>右側<rt>みぎがわ</rt></ruby>の<ruby>赤<rt>あか</rt></ruby>いボタンです。",
                romaji: "Migi-gawa no akai botan desu."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "押したあとは、すぐに報告します。",
                target: "おしたあとは すぐにほうこくします",
                ruby: "<ruby>押<rt>お</rt></ruby>したあとは、すぐに<ruby>報告<rt>ほうこく</rt></ruby>します。",
                romaji: "Oshita ato wa, sugu ni hōkoku shimasu."
            }
        ],
        {
            ja: [
                "先輩：この機械で異常があったら、非常停止ボタンを押してください。",
                "社員：非常停止ボタンはどこにありますか。",
                "先輩：右側の赤いボタンです。",
                "社員：押したあとは、すぐに報告します。"
            ],
            en: [
                "Senior Worker: If there is a problem with this machine, press the emergency stop button.",
                "Worker: Where is the emergency stop button?",
                "Senior Worker: It is the red button on the right side.",
                "Worker: After pressing it, I will report it immediately."
            ],
            "zh-CN": [
                "前辈：这台机器如果出现异常，请按紧急停止按钮。",
                "员工：紧急停止按钮在哪里？",
                "前辈：是右边的红色按钮。",
                "员工：按下之后，我会马上报告。"
            ],
            "zh-TW": [
                "前輩：這台機器如果出現異常，請按緊急停止按鈕。",
                "員工：緊急停止按鈕在哪裡？",
                "前輩：是右邊的紅色按鈕。",
                "員工：按下之後，我會馬上報告。"
            ],
            ko: [
                "선배: 이 기계에 이상이 있으면 비상 정지 버튼을 눌러 주세요.",
                "직원: 비상 정지 버튼은 어디에 있나요?",
                "선배: 오른쪽의 빨간 버튼입니다.",
                "직원: 누른 후에는 바로 보고하겠습니다."
            ],
            vi: [
                "Người hướng dẫn: Nếu máy này có bất thường, hãy nhấn nút dừng khẩn cấp.",
                "Nhân viên: Nút dừng khẩn cấp ở đâu ạ?",
                "Người hướng dẫn: Là nút màu đỏ bên phải.",
                "Nhân viên: Sau khi nhấn, tôi sẽ báo cáo ngay."
            ]
        }
    ),

    makeA2WorkSafetyDialogue(
        "a2_worksafety_006",
        "けがを報告する",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "すみません。指を少し切ってしまいました。",
                target: "すみません ゆびをすこしきってしまいました",
                ruby: "すみません。<ruby>指<rt>ゆび</rt></ruby>を<ruby>少<rt>すこ</rt></ruby>し<ruby>切<rt>き</rt></ruby>ってしまいました。",
                romaji: "Sumimasen. Yubi o sukoshi kitte shimaimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "すぐに作業を止めてください。血は出ていますか。",
                target: "すぐにさぎょうをとめてください ちはでていますか",
                ruby: "すぐに<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>止<rt>と</rt></ruby>めてください。<ruby>血<rt>ち</rt></ruby>は<ruby>出<rt>で</rt></ruby>ていますか。",
                romaji: "Sugu ni sagyō o tomete kudasai. Chi wa dete imasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "少し出ていますが、動かせます。",
                target: "すこしでていますが うごかせます",
                ruby: "<ruby>少<rt>すこ</rt></ruby>し<ruby>出<rt>で</rt></ruby>ていますが、<ruby>動<rt>うご</rt></ruby>かせます。",
                romaji: "Sukoshi dete imasu ga, ugokasemasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "念のため、手当てをしてから報告書を書きましょう。",
                target: "ねんのため てあてをしてからほうこくしょをかきましょう",
                ruby: "<ruby>念<rt>ねん</rt></ruby>のため、<ruby>手当<rt>てあ</rt></ruby>てをしてから<ruby>報告書<rt>ほうこくしょ</rt></ruby>を<ruby>書<rt>か</rt></ruby>きましょう。",
                romaji: "Nen no tame, teate o shite kara hōkokusho o kakimashō."
            }
        ],
        {
            ja: [
                "社員：すみません。指を少し切ってしまいました。",
                "先輩：すぐに作業を止めてください。血は出ていますか。",
                "社員：少し出ていますが、動かせます。",
                "先輩：念のため、手当てをしてから報告書を書きましょう。"
            ],
            en: [
                "Worker: Excuse me. I cut my finger a little.",
                "Senior Worker: Stop working immediately. Are you bleeding?",
                "Worker: A little, but I can move it.",
                "Senior Worker: Just in case, let’s treat it first and then write a report."
            ],
            "zh-CN": [
                "员工：不好意思。我把手指割伤了一点。",
                "前辈：请马上停止作业。有出血吗？",
                "员工：有一点出血，但可以动。",
                "前辈：以防万一，先处理伤口，然后写报告吧。"
            ],
            "zh-TW": [
                "員工：不好意思。我把手指割傷了一點。",
                "前輩：請馬上停止作業。有出血嗎？",
                "員工：有一點出血，但可以動。",
                "前輩：以防萬一，先處理傷口，然後寫報告吧。"
            ],
            ko: [
                "직원: 죄송합니다. 손가락을 조금 베었습니다.",
                "선배: 바로 작업을 멈춰 주세요. 피가 나고 있나요?",
                "직원: 조금 나고 있지만 움직일 수 있습니다.",
                "선배: 혹시 모르니 처치한 후에 보고서를 씁시다."
            ],
            vi: [
                "Nhân viên: Xin lỗi. Tôi bị đứt tay một chút.",
                "Người hướng dẫn: Hãy dừng làm việc ngay. Có chảy máu không?",
                "Nhân viên: Có một chút, nhưng tôi vẫn cử động được.",
                "Người hướng dẫn: Để chắc chắn, hãy sơ cứu trước rồi viết báo cáo."
            ]
        }
    ),

    makeA2WorkSafetyDialogue(
        "a2_worksafety_007",
        "薬品を扱う",
        [
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "この薬品を使うときは、手袋をしてください。",
                target: "このやくひんをつかうときは てぶくろをしてください",
                ruby: "この<ruby>薬品<rt>やくひん</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うときは、<ruby>手袋<rt>てぶくろ</rt></ruby>をしてください。",
                romaji: "Kono yakuhin o tsukau toki wa, tebukuro o shite kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "においが強い場合は、どうすればいいですか。",
                target: "においがつよいばあいは どうすればいいですか",
                ruby: "においが<ruby>強<rt>つよ</rt></ruby>い<ruby>場合<rt>ばあい</rt></ruby>は、どうすればいいですか。",
                romaji: "Nioi ga tsuyoi baai wa, dō sureba ii desu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "窓を開けて、換気をしてください。",
                target: "まどをあけて かんきをしてください",
                ruby: "<ruby>窓<rt>まど</rt></ruby>を<ruby>開<rt>あ</rt></ruby>けて、<ruby>換気<rt>かんき</rt></ruby>をしてください。",
                romaji: "Mado o akete, kanki o shite kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "気分が悪くなったら、すぐに伝えます。",
                target: "きぶんがわるくなったら すぐにつたえます",
                ruby: "<ruby>気分<rt>きぶん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くなったら、すぐに<ruby>伝<rt>つた</rt></ruby>えます。",
                romaji: "Kibun ga waruku nattara, sugu ni tsutaemasu."
            }
        ],
        {
            ja: [
                "先輩：この薬品を使うときは、手袋をしてください。",
                "社員：においが強い場合は、どうすればいいですか。",
                "先輩：窓を開けて、換気をしてください。",
                "社員：気分が悪くなったら、すぐに伝えます。"
            ],
            en: [
                "Senior Worker: When using this chemical, please wear gloves.",
                "Worker: What should I do if the smell is strong?",
                "Senior Worker: Open the window and ventilate the room.",
                "Worker: If I feel sick, I will tell you immediately."
            ],
            "zh-CN": [
                "前辈：使用这种药品时，请戴手套。",
                "员工：如果气味很强，应该怎么办？",
                "前辈：请打开窗户，进行通风。",
                "员工：如果觉得不舒服，我会马上告诉您。"
            ],
            "zh-TW": [
                "前輩：使用這種藥品時，請戴手套。",
                "員工：如果氣味很強，應該怎麼辦？",
                "前輩：請打開窗戶，進行通風。",
                "員工：如果覺得不舒服，我會馬上告訴您。"
            ],
            ko: [
                "선배: 이 약품을 사용할 때는 장갑을 껴 주세요.",
                "직원: 냄새가 강한 경우에는 어떻게 하면 되나요?",
                "선배: 창문을 열고 환기를 해 주세요.",
                "직원: 몸이 안 좋아지면 바로 말씀드리겠습니다."
            ],
            vi: [
                "Người hướng dẫn: Khi dùng hóa chất này, hãy đeo găng tay.",
                "Nhân viên: Nếu mùi mạnh thì tôi nên làm gì ạ?",
                "Người hướng dẫn: Hãy mở cửa sổ và thông gió.",
                "Nhân viên: Nếu tôi thấy không khỏe, tôi sẽ báo ngay."
            ]
        }
    ),

    makeA2WorkSafetyDialogue(
        "a2_worksafety_008",
        "体調が悪いときに伝える",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "少しめまいがします。休んでもいいですか。",
                target: "すこしめまいがします やすんでもいいですか",
                ruby: "<ruby>少<rt>すこ</rt></ruby>しめまいがします。<ruby>休<rt>やす</rt></ruby>んでもいいですか。",
                romaji: "Sukoshi memai ga shimasu. Yasunde mo ii desu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "もちろんです。涼しい場所で休んでください。",
                target: "もちろんです すずしいばしょでやすんでください",
                ruby: "もちろんです。<ruby>涼<rt>すず</rt></ruby>しい<ruby>場所<rt>ばしょ</rt></ruby>で<ruby>休<rt>やす</rt></ruby>んでください。",
                romaji: "Mochiron desu. Suzushii basho de yasunde kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "水を飲んで、少し様子を見ます。",
                target: "みずをのんで すこしようすをみます",
                ruby: "<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んで、<ruby>少<rt>すこ</rt></ruby>し<ruby>様子<rt>ようす</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。",
                romaji: "Mizu o nonde, sukoshi yōsu o mimasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "よくならなければ、すぐに教えてください。",
                target: "よくならなければ すぐにおしえてください",
                ruby: "よくならなければ、すぐに<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Yoku naranakereba, sugu ni oshiete kudasai."
            }
        ],
        {
            ja: [
                "社員：少しめまいがします。休んでもいいですか。",
                "先輩：もちろんです。涼しい場所で休んでください。",
                "社員：水を飲んで、少し様子を見ます。",
                "先輩：よくならなければ、すぐに教えてください。"
            ],
            en: [
                "Worker: I feel a little dizzy. May I take a rest?",
                "Senior Worker: Of course. Please rest in a cool place.",
                "Worker: I will drink water and see how I feel for a while.",
                "Senior Worker: If you do not feel better, tell me immediately."
            ],
            "zh-CN": [
                "员工：我有点头晕。可以休息一下吗？",
                "前辈：当然可以。请在凉快的地方休息。",
                "员工：我喝点水，先观察一下情况。",
                "前辈：如果没有好转，请马上告诉我。"
            ],
            "zh-TW": [
                "員工：我有點頭暈。可以休息一下嗎？",
                "前輩：當然可以。請在涼快的地方休息。",
                "員工：我喝點水，先觀察一下情況。",
                "前輩：如果沒有好轉，請馬上告訴我。"
            ],
            ko: [
                "직원: 조금 어지럽습니다. 쉬어도 될까요?",
                "선배: 물론입니다. 시원한 곳에서 쉬어 주세요.",
                "직원: 물을 마시고 조금 상태를 보겠습니다.",
                "선배: 좋아지지 않으면 바로 알려 주세요."
            ],
            vi: [
                "Nhân viên: Tôi hơi chóng mặt. Tôi có thể nghỉ một chút không ạ?",
                "Người hướng dẫn: Tất nhiên. Hãy nghỉ ở nơi mát.",
                "Nhân viên: Tôi sẽ uống nước và theo dõi tình trạng một chút.",
                "Người hướng dẫn: Nếu không khá hơn, hãy báo ngay cho tôi."
            ]
        }
    )

];