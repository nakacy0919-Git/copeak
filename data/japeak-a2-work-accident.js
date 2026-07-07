// =====================================================
// Japeak A2 Level
// Scene: 職場での事故に対応しよう
// File: data/japeak-a2-work-accident.js
// Category Key: a2_work_accident
// =====================================================

const a2WorkAccidentLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeA2WorkAccidentTranslations(translations) {
    const completed = {};
    a2WorkAccidentLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const a2WorkAccidentContext = {
    ja: "職場で事故が起きたときに、けがの報告、救急車の要請、機械の停止、薬品のこぼれ、転倒、やけど、事故報告書について話す日本語を練習します。",
    en: "Practice Japanese for responding to workplace accidents, including reporting injuries, calling an ambulance, stopping machines, chemical spills, falls, burns, and accident reports.",
    "zh-CN": "练习在职场发生事故时使用的日语，包括报告受伤、叫救护车、停止机器、药品洒出、跌倒、烫伤和事故报告书。",
    "zh-TW": "練習在職場發生事故時使用的日語，包括報告受傷、叫救護車、停止機器、藥品灑出、跌倒、燙傷和事故報告書。",
    ko: "직장에서 사고가 났을 때 부상 보고, 구급차 요청, 기계 정지, 약품 유출, 넘어짐, 화상, 사고 보고서에 대해 말하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi xảy ra tai nạn ở nơi làm việc, gồm báo cáo chấn thương, gọi xe cấp cứu, dừng máy, hóa chất bị đổ, té ngã, bỏng và báo cáo tai nạn.",
    tl: "Practice ng Japanese para tumugon sa workplace accidents, tulad ng injury report, calling an ambulance, stopping machines, chemical spills, falls, burns, at accident reports.",
    id: "Latihan bahasa Jepang untuk menghadapi kecelakaan di tempat kerja, termasuk laporan cedera, memanggil ambulans, menghentikan mesin, tumpahan bahan kimia, jatuh, luka bakar, dan laporan kecelakaan.",
    th: "ฝึกภาษาญี่ปุ่นเมื่อเกิดอุบัติเหตุในที่ทำงาน เช่น รายงานการบาดเจ็บ เรียกรถพยาบาล หยุดเครื่องจักร สารเคมีหก การล้ม แผลไหม้ และรายงานอุบัติเหตุ",
    my: "အလုပ်ခွင်တွင် accident ဖြစ်သည့်အခါ injury report၊ ambulance ခေါ်ခြင်း၊ machine stop၊ chemical spill၊ fall၊ burn နှင့် accident report အကြောင်း ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនពេលមានគ្រោះថ្នាក់នៅកន្លែងធ្វើការ ដូចជា រាយការណ៍របួស ហៅរថយន្តសង្គ្រោះ បញ្ឈប់ម៉ាស៊ីន សារធាតុគីមីហូរ ដួល រលាក និងរបាយការណ៍គ្រោះថ្នាក់។",
    ne: "काममा दुर्घटना हुँदा injury report, ambulance बोलाउने, machine stop गर्ने, chemical spill, fall, burn र accident report बारे जापानी अभ्यास।",
    mn: "Ажлын байранд осол гарсан үед хэрэгтэй япон хэл: гэмтэл мэдээлэх, түргэн дуудах, машин зогсоох, химийн бодис асгарах, унах, түлэгдэх, ослын тайлан.",
    si: "වැඩ කරන ස්ථානයේ accident එකක් සිදු වූ විට injury report, ambulance call, machine stop, chemical spill, fall, burn සහ accident report ගැන ජපන් භාෂා පුහුණුව.",
    bn: "কর্মস্থলে accident হলে injury report, ambulance ডাকতে বলা, machine stop, chemical spill, fall, burn এবং accident report নিয়ে জাপানি অনুশীলন।",
    pt: "Prática de japonês para lidar com acidentes no trabalho: relatar ferimentos, chamar ambulância, parar máquinas, derramamento químico, quedas, queimaduras e relatório de acidente.",
    es: "Práctica de japonés para responder a accidentes laborales: reportar lesiones, llamar ambulancia, detener máquinas, derrames químicos, caídas, quemaduras e informe de accidente.",
    fr: "Entraînement en japonais pour réagir aux accidents au travail : signaler des blessures, appeler une ambulance, arrêter les machines, déversement chimique, chutes, brûlures et rapport d’accident.",
    ru: "Практика японского языка при несчастных случаях на работе: сообщение о травме, вызов скорой, остановка машины, разлив химикатов, падения, ожоги и отчёт об аварии.",
    uk: "Практика японської мови під час нещасних випадків на роботі: повідомлення про травму, виклик швидкої, зупинка машини, розлив хімікатів, падіння, опіки та звіт про аварію."
};

const a2WorkAccidentSpeakerNames = {
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
    },
    operator: {
        ja: "通信指令員",
        en: "Emergency Operator",
        "zh-CN": "急救接线员",
        "zh-TW": "急救接線員",
        ko: "긴급 신고 접수원",
        vi: "Nhân viên tổng đài khẩn cấp",
        tl: "Emergency operator",
        id: "Operator darurat",
        th: "เจ้าหน้าที่รับแจ้งเหตุฉุกเฉิน",
        my: "အရေးပေါ်ဖုန်းလက်ခံသူ",
        km: "អ្នកទទួលទូរសព្ទបន្ទាន់",
        ne: "आपतकालीन अपरेटर",
        mn: "Яаралтай дуудлагын оператор",
        si: "හදිසි ඇමතුම් නිලධාරියා",
        bn: "জরুরি অপারেটর",
        pt: "Operador de emergência",
        es: "Operador de emergencia",
        fr: "Opérateur d’urgence",
        ru: "Оператор экстренной службы",
        uk: "Оператор екстреної служби"
    }
};

function makeA2WorkAccidentDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeA2WorkAccidentTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_work_accident",
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
            speakerNames: a2WorkAccidentSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2WorkAccidentContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakA2WorkAccidentData = [

    makeA2WorkAccidentDialogue(
        "a2_workaccident_001",
        "小さなけがを報告する",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "すみません。作業中に指をはさんでしまいました。",
                target: "すみません さぎょうちゅうにゆびをはさんでしまいました",
                ruby: "すみません。<ruby>作業中<rt>さぎょうちゅう</rt></ruby>に<ruby>指<rt>ゆび</rt></ruby>をはさんでしまいました。",
                romaji: "Sumimasen. Sagyōchū ni yubi o hasande shimaimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "すぐに作業を止めてください。痛みは強いですか。",
                target: "すぐにさぎょうをとめてください いたみはつよいですか",
                ruby: "すぐに<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>止<rt>と</rt></ruby>めてください。<ruby>痛<rt>いた</rt></ruby>みは<ruby>強<rt>つよ</rt></ruby>いですか。",
                romaji: "Sugu ni sagyō o tomete kudasai. Itami wa tsuyoi desu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "少し腫れていますが、動かせます。",
                target: "すこしはれていますが うごかせます",
                ruby: "<ruby>少<rt>すこ</rt></ruby>し<ruby>腫<rt>は</rt></ruby>れていますが、<ruby>動<rt>うご</rt></ruby>かせます。",
                romaji: "Sukoshi harete imasu ga, ugokasemasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "念のため、冷やしてから責任者に報告しましょう。",
                target: "ねんのため ひやしてからせきにんしゃにほうこくしましょう",
                ruby: "<ruby>念<rt>ねん</rt></ruby>のため、<ruby>冷<rt>ひ</rt></ruby>やしてから<ruby>責任者<rt>せきにんしゃ</rt></ruby>に<ruby>報告<rt>ほうこく</rt></ruby>しましょう。",
                romaji: "Nen no tame, hiyashite kara sekininsha ni hōkoku shimashō."
            }
        ],
        {
            ja: [
                "社員：すみません。作業中に指をはさんでしまいました。",
                "先輩：すぐに作業を止めてください。痛みは強いですか。",
                "社員：少し腫れていますが、動かせます。",
                "先輩：念のため、冷やしてから責任者に報告しましょう。"
            ],
            en: [
                "Worker: Excuse me. I got my finger caught while working.",
                "Senior Worker: Stop working immediately. Is the pain strong?",
                "Worker: It is a little swollen, but I can move it.",
                "Senior Worker: Just in case, let’s cool it and then report it to the person in charge."
            ],
            "zh-CN": [
                "员工：不好意思。作业中夹到了手指。",
                "前辈：请马上停止作业。疼得厉害吗？",
                "员工：有点肿，但可以动。",
                "前辈：以防万一，先冷却一下，然后向负责人报告吧。"
            ],
            "zh-TW": [
                "員工：不好意思。作業中夾到了手指。",
                "前輩：請馬上停止作業。疼得厲害嗎？",
                "員工：有點腫，但可以動。",
                "前輩：以防萬一，先冷卻一下，然後向負責人報告吧。"
            ],
            ko: [
                "직원: 죄송합니다. 작업 중에 손가락을 끼었습니다.",
                "선배: 바로 작업을 멈춰 주세요. 통증이 심한가요?",
                "직원: 조금 부어 있지만 움직일 수 있습니다.",
                "선배: 혹시 모르니 식힌 후에 책임자에게 보고합시다."
            ],
            vi: [
                "Nhân viên: Xin lỗi. Trong lúc làm việc, tôi bị kẹp ngón tay.",
                "Người hướng dẫn: Hãy dừng làm việc ngay. Có đau nhiều không?",
                "Nhân viên: Hơi sưng, nhưng tôi vẫn cử động được.",
                "Người hướng dẫn: Để chắc chắn, hãy làm lạnh rồi báo cáo với người phụ trách."
            ]
        }
    ),

    makeA2WorkAccidentDialogue(
        "a2_workaccident_002",
        "転倒した人を見つける",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "田中さんが階段で転びました。",
                target: "たなかさんがかいだんでころびました",
                ruby: "<ruby>田中<rt>たなか</rt></ruby>さんが<ruby>階段<rt>かいだん</rt></ruby>で<ruby>転<rt>ころ</rt></ruby>びました。",
                romaji: "Tanaka-san ga kaidan de korobimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "意識はありますか。返事はできますか。",
                target: "いしきはありますか へんじはできますか",
                ruby: "<ruby>意識<rt>いしき</rt></ruby>はありますか。<ruby>返事<rt>へんじ</rt></ruby>はできますか。",
                romaji: "Ishiki wa arimasu ka. Henji wa dekimasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "はい、話はできますが、立てません。",
                target: "はい はなしはできますが たてません",
                ruby: "はい、<ruby>話<rt>はなし</rt></ruby>はできますが、<ruby>立<rt>た</rt></ruby>てません。",
                romaji: "Hai, hanashi wa dekimasu ga, tatemasen."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "無理に動かさないでください。救急車を呼びます。",
                target: "むりにうごかさないでください きゅうきゅうしゃをよびます",
                ruby: "<ruby>無理<rt>むり</rt></ruby>に<ruby>動<rt>うご</rt></ruby>かさないでください。<ruby>救急車<rt>きゅうきゅうしゃ</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>びます。",
                romaji: "Muri ni ugokasanaide kudasai. Kyūkyūsha o yobimasu."
            }
        ],
        {
            ja: [
                "社員：田中さんが階段で転びました。",
                "先輩：意識はありますか。返事はできますか。",
                "社員：はい、話はできますが、立てません。",
                "先輩：無理に動かさないでください。救急車を呼びます。"
            ],
            en: [
                "Worker: Mr. Tanaka fell on the stairs.",
                "Senior Worker: Is he conscious? Can he respond?",
                "Worker: Yes, he can talk, but he cannot stand up.",
                "Senior Worker: Do not move him by force. I will call an ambulance."
            ],
            "zh-CN": [
                "员工：田中先生在楼梯上摔倒了。",
                "前辈：有意识吗？能回答吗？",
                "员工：可以说话，但站不起来。",
                "前辈：请不要强行移动他。我会叫救护车。"
            ],
            "zh-TW": [
                "員工：田中先生在樓梯上摔倒了。",
                "前輩：有意識嗎？能回答嗎？",
                "員工：可以說話，但站不起來。",
                "前輩：請不要強行移動他。我會叫救護車。"
            ],
            ko: [
                "직원: 다나카 씨가 계단에서 넘어졌습니다.",
                "선배: 의식은 있나요? 대답할 수 있나요?",
                "직원: 네, 말은 할 수 있지만 일어설 수 없습니다.",
                "선배: 억지로 움직이지 마세요. 구급차를 부르겠습니다."
            ],
            vi: [
                "Nhân viên: Anh Tanaka bị ngã ở cầu thang.",
                "Người hướng dẫn: Anh ấy còn tỉnh không? Có trả lời được không?",
                "Nhân viên: Có, anh ấy nói chuyện được nhưng không đứng dậy được.",
                "Người hướng dẫn: Đừng cố di chuyển anh ấy. Tôi sẽ gọi xe cấp cứu."
            ]
        }
    ),

    makeA2WorkAccidentDialogue(
        "a2_workaccident_003",
        "やけどをしたとき",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "熱いお湯が手にかかってしまいました。",
                target: "あついおゆがてにかかってしまいました",
                ruby: "<ruby>熱<rt>あつ</rt></ruby>いお<ruby>湯<rt>ゆ</rt></ruby>が<ruby>手<rt>て</rt></ruby>にかかってしまいました。",
                romaji: "Atsui oyu ga te ni kakatte shimaimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "すぐに水で冷やしてください。",
                target: "すぐにみずでひやしてください",
                ruby: "すぐに<ruby>水<rt>みず</rt></ruby>で<ruby>冷<rt>ひ</rt></ruby>やしてください。",
                romaji: "Sugu ni mizu de hiyashite kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "まだヒリヒリします。",
                target: "まだひりひりします",
                ruby: "まだヒリヒリします。",
                romaji: "Mada hirihiri shimasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "痛みが続くので、病院に連絡しましょう。",
                target: "いたみがつづくので びょういんにれんらくしましょう",
                ruby: "<ruby>痛<rt>いた</rt></ruby>みが<ruby>続<rt>つづ</rt></ruby>くので、<ruby>病院<rt>びょういん</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>しましょう。",
                romaji: "Itami ga tsuzuku node, byōin ni renraku shimashō."
            }
        ],
        {
            ja: [
                "社員：熱いお湯が手にかかってしまいました。",
                "先輩：すぐに水で冷やしてください。",
                "社員：まだヒリヒリします。",
                "先輩：痛みが続くので、病院に連絡しましょう。"
            ],
            en: [
                "Worker: Hot water got on my hand.",
                "Senior Worker: Please cool it with water immediately.",
                "Worker: It still stings.",
                "Senior Worker: Since the pain continues, let’s contact a hospital."
            ],
            "zh-CN": [
                "员工：热水洒到手上了。",
                "前辈：请马上用水冷却。",
                "员工：还是火辣辣地疼。",
                "前辈：因为疼痛还在继续，我们联系医院吧。"
            ],
            "zh-TW": [
                "員工：熱水灑到手上了。",
                "前輩：請馬上用水冷卻。",
                "員工：還是火辣辣地疼。",
                "前輩：因為疼痛還在繼續，我們聯絡醫院吧。"
            ],
            ko: [
                "직원: 뜨거운 물이 손에 묻었습니다.",
                "선배: 바로 물로 식혀 주세요.",
                "직원: 아직 따끔거립니다.",
                "선배: 통증이 계속되니 병원에 연락합시다."
            ],
            vi: [
                "Nhân viên: Nước nóng bị đổ vào tay tôi.",
                "Người hướng dẫn: Hãy làm mát ngay bằng nước.",
                "Nhân viên: Vẫn còn rát.",
                "Người hướng dẫn: Vì vẫn đau, chúng ta hãy liên lạc với bệnh viện."
            ]
        }
    ),

    makeA2WorkAccidentDialogue(
        "a2_workaccident_004",
        "機械に物が挟まったとき",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "機械に布が挟まりました。",
                target: "きかいにぬのがはさまりました",
                ruby: "<ruby>機械<rt>きかい</rt></ruby>に<ruby>布<rt>ぬの</rt></ruby>が<ruby>挟<rt>はさ</rt></ruby>まりました。",
                romaji: "Kikai ni nuno ga hasamarimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "電源は止めましたか。",
                target: "でんげんはとめましたか",
                ruby: "<ruby>電源<rt>でんげん</rt></ruby>は<ruby>止<rt>と</rt></ruby>めましたか。",
                romaji: "Dengen wa tomemashita ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "はい、非常停止ボタンを押しました。",
                target: "はい ひじょうていしぼたんをおしました",
                ruby: "はい、<ruby>非常停止<rt>ひじょうていし</rt></ruby>ボタンを<ruby>押<rt>お</rt></ruby>しました。",
                romaji: "Hai, hijō teishi botan o oshimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "そのまま触らずに、担当者を呼びましょう。",
                target: "そのままさわらずに たんとうしゃをよびましょう",
                ruby: "そのまま<ruby>触<rt>さわ</rt></ruby>らずに、<ruby>担当者<rt>たんとうしゃ</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>びましょう。",
                romaji: "Sono mama sawarazu ni, tantōsha o yobimashō."
            }
        ],
        {
            ja: [
                "社員：機械に布が挟まりました。",
                "先輩：電源は止めましたか。",
                "社員：はい、非常停止ボタンを押しました。",
                "先輩：そのまま触らずに、担当者を呼びましょう。"
            ],
            en: [
                "Worker: A cloth got caught in the machine.",
                "Senior Worker: Did you stop the power?",
                "Worker: Yes, I pressed the emergency stop button.",
                "Senior Worker: Do not touch it as it is. Let’s call the person in charge."
            ],
            "zh-CN": [
                "员工：布被机器夹住了。",
                "前辈：电源停了吗？",
                "员工：是的，按了紧急停止按钮。",
                "前辈：请不要碰，叫负责人过来吧。"
            ],
            "zh-TW": [
                "員工：布被機器夾住了。",
                "前輩：電源停了嗎？",
                "員工：是的，按了緊急停止按鈕。",
                "前輩：請不要碰，叫負責人過來吧。"
            ],
            ko: [
                "직원: 기계에 천이 끼었습니다.",
                "선배: 전원은 멈췄나요?",
                "직원: 네, 비상 정지 버튼을 눌렀습니다.",
                "선배: 그대로 만지지 말고 담당자를 부릅시다."
            ],
            vi: [
                "Nhân viên: Vải bị kẹt vào máy.",
                "Người hướng dẫn: Bạn đã tắt nguồn chưa?",
                "Nhân viên: Rồi, tôi đã nhấn nút dừng khẩn cấp.",
                "Người hướng dẫn: Đừng chạm vào. Hãy gọi người phụ trách."
            ]
        }
    ),

    makeA2WorkAccidentDialogue(
        "a2_workaccident_005",
        "薬品がこぼれたとき",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "床に薬品がこぼれています。",
                target: "ゆかにやくひんがこぼれています",
                ruby: "<ruby>床<rt>ゆか</rt></ruby>に<ruby>薬品<rt>やくひん</rt></ruby>がこぼれています。",
                romaji: "Yuka ni yakuhin ga koborete imasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "近づかないでください。周りの人にも知らせてください。",
                target: "ちかづかないでください まわりのひとにもしらせてください",
                ruby: "<ruby>近<rt>ちか</rt></ruby>づかないでください。<ruby>周<rt>まわ</rt></ruby>りの<ruby>人<rt>ひと</rt></ruby>にも<ruby>知<rt>し</rt></ruby>らせてください。",
                romaji: "Chikazukanaide kudasai. Mawari no hito ni mo shirasete kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "換気も必要ですか。",
                target: "かんきもひつようですか",
                ruby: "<ruby>換気<rt>かんき</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>ですか。",
                romaji: "Kanki mo hitsuyō desu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい。窓を開けて、手袋をしてから対応します。",
                target: "はい まどをあけて てぶくろをしてからたいおうします",
                ruby: "はい。<ruby>窓<rt>まど</rt></ruby>を<ruby>開<rt>あ</rt></ruby>けて、<ruby>手袋<rt>てぶくろ</rt></ruby>をしてから<ruby>対応<rt>たいおう</rt></ruby>します。",
                romaji: "Hai. Mado o akete, tebukuro o shite kara taiō shimasu."
            }
        ],
        {
            ja: [
                "社員：床に薬品がこぼれています。",
                "先輩：近づかないでください。周りの人にも知らせてください。",
                "社員：換気も必要ですか。",
                "先輩：はい。窓を開けて、手袋をしてから対応します。"
            ],
            en: [
                "Worker: A chemical has spilled on the floor.",
                "Senior Worker: Do not go near it. Please tell the people around you too.",
                "Worker: Is ventilation also necessary?",
                "Senior Worker: Yes. We will open the window and wear gloves before handling it."
            ],
            "zh-CN": [
                "员工：药品洒在地板上了。",
                "前辈：请不要靠近。也请通知周围的人。",
                "员工：也需要通风吗？",
                "前辈：需要。打开窗户，戴上手套后再处理。"
            ],
            "zh-TW": [
                "員工：藥品灑在地板上了。",
                "前輩：請不要靠近。也請通知周圍的人。",
                "員工：也需要通風嗎？",
                "前輩：需要。打開窗戶，戴上手套後再處理。"
            ],
            ko: [
                "직원: 바닥에 약품이 쏟아져 있습니다.",
                "선배: 가까이 가지 마세요. 주변 사람들에게도 알려 주세요.",
                "직원: 환기도 필요한가요?",
                "선배: 네. 창문을 열고 장갑을 낀 후에 대응하겠습니다."
            ],
            vi: [
                "Nhân viên: Hóa chất bị đổ trên sàn.",
                "Người hướng dẫn: Đừng đến gần. Hãy báo cho những người xung quanh nữa.",
                "Nhân viên: Có cần thông gió không ạ?",
                "Người hướng dẫn: Có. Chúng ta sẽ mở cửa sổ và đeo găng tay trước khi xử lý."
            ]
        }
    ),

    makeA2WorkAccidentDialogue(
        "a2_workaccident_006",
        "上司に電話で報告する",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "すみません。作業中に事故がありました。",
                target: "すみません さぎょうちゅうにじこがありました",
                ruby: "すみません。<ruby>作業中<rt>さぎょうちゅう</rt></ruby>に<ruby>事故<rt>じこ</rt></ruby>がありました。",
                romaji: "Sumimasen. Sagyōchū ni jiko ga arimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "けがをした人はいますか。",
                target: "けがをしたひとはいますか",
                ruby: "けがをした<ruby>人<rt>ひと</rt></ruby>はいますか。",
                romaji: "Kega o shita hito wa imasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "一人が足を痛めています。",
                target: "ひとりがあしをいためています",
                ruby: "<ruby>一人<rt>ひとり</rt></ruby>が<ruby>足<rt>あし</rt></ruby>を<ruby>痛<rt>いた</rt></ruby>めています。",
                romaji: "Hitori ga ashi o itamete imasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "安全な場所で待ってください。すぐに向かいます。",
                target: "あんぜんなばしょでまってください すぐにむかいます",
                ruby: "<ruby>安全<rt>あんぜん</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>で<ruby>待<rt>ま</rt></ruby>ってください。すぐに<ruby>向<rt>む</rt></ruby>かいます。",
                romaji: "Anzen na basho de matte kudasai. Sugu ni mukaimasu."
            }
        ],
        {
            ja: [
                "社員：すみません。作業中に事故がありました。",
                "先輩：けがをした人はいますか。",
                "社員：一人が足を痛めています。",
                "先輩：安全な場所で待ってください。すぐに向かいます。"
            ],
            en: [
                "Worker: Excuse me. There was an accident during work.",
                "Senior Worker: Is anyone injured?",
                "Worker: One person has hurt their leg.",
                "Senior Worker: Please wait in a safe place. I will go there immediately."
            ],
            "zh-CN": [
                "员工：不好意思。作业中发生了事故。",
                "前辈：有人受伤吗？",
                "员工：有一个人脚受伤了。",
                "前辈：请在安全的地方等。我马上过去。"
            ],
            "zh-TW": [
                "員工：不好意思。作業中發生了事故。",
                "前輩：有人受傷嗎？",
                "員工：有一個人腳受傷了。",
                "前輩：請在安全的地方等。我馬上過去。"
            ],
            ko: [
                "직원: 죄송합니다. 작업 중에 사고가 있었습니다.",
                "선배: 다친 사람이 있나요?",
                "직원: 한 명이 다리를 다쳤습니다.",
                "선배: 안전한 장소에서 기다려 주세요. 바로 가겠습니다."
            ],
            vi: [
                "Nhân viên: Xin lỗi. Đã có tai nạn trong lúc làm việc.",
                "Người hướng dẫn: Có ai bị thương không?",
                "Nhân viên: Một người bị đau chân.",
                "Người hướng dẫn: Hãy chờ ở nơi an toàn. Tôi sẽ đến ngay."
            ]
        }
    ),

    makeA2WorkAccidentDialogue(
        "a2_workaccident_007",
        "119番に電話する",
        [
            {
                label: "話者A",
                key: "operator",
                name: "通信指令員",
                line: "火事ですか、救急ですか。",
                target: "かじですか きゅうきゅうですか",
                ruby: "<ruby>火事<rt>かじ</rt></ruby>ですか、<ruby>救急<rt>きゅうきゅう</rt></ruby>ですか。",
                romaji: "Kaji desu ka, kyūkyū desu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "救急です。職場でけが人がいます。",
                target: "きゅうきゅうです しょくばでけがにんがいます",
                ruby: "<ruby>救急<rt>きゅうきゅう</rt></ruby>です。<ruby>職場<rt>しょくば</rt></ruby>でけが<ruby>人<rt>にん</rt></ruby>がいます。",
                romaji: "Kyūkyū desu. Shokuba de keganin ga imasu."
            },
            {
                label: "話者A",
                key: "operator",
                name: "通信指令員",
                line: "住所とけが人の状態を教えてください。",
                target: "じゅうしょとけがにんのじょうたいをおしえてください",
                ruby: "<ruby>住所<rt>じゅうしょ</rt></ruby>とけが<ruby>人<rt>にん</rt></ruby>の<ruby>状態<rt>じょうたい</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Jūsho to keganin no jōtai o oshiete kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "住所はさくら町一丁目です。意識はあります。",
                target: "じゅうしょはさくらちょういっちょうめです いしきはあります",
                ruby: "<ruby>住所<rt>じゅうしょ</rt></ruby>はさくら<ruby>町一丁目<rt>ちょういっちょうめ</rt></ruby>です。<ruby>意識<rt>いしき</rt></ruby>はあります。",
                romaji: "Jūsho wa Sakura-chō itchōme desu. Ishiki wa arimasu."
            }
        ],
        {
            ja: [
                "通信指令員：火事ですか、救急ですか。",
                "社員：救急です。職場でけが人がいます。",
                "通信指令員：住所とけが人の状態を教えてください。",
                "社員：住所はさくら町一丁目です。意識はあります。"
            ],
            en: [
                "Emergency Operator: Is it a fire or a medical emergency?",
                "Worker: A medical emergency. There is an injured person at my workplace.",
                "Emergency Operator: Please tell me the address and the injured person’s condition.",
                "Worker: The address is Sakura Town 1-chome. The person is conscious."
            ],
            "zh-CN": [
                "急救接线员：是火灾还是急救？",
                "员工：急救。职场有人受伤。",
                "急救接线员：请告诉我地址和伤者的情况。",
                "员工：地址是樱町一丁目。伤者有意识。"
            ],
            "zh-TW": [
                "急救接線員：是火災還是急救？",
                "員工：急救。職場有人受傷。",
                "急救接線員：請告訴我地址和傷者的情況。",
                "員工：地址是櫻町一丁目。傷者有意識。"
            ],
            ko: [
                "긴급 신고 접수원: 화재입니까, 구급입니까?",
                "직원: 구급입니다. 직장에 다친 사람이 있습니다.",
                "긴급 신고 접수원: 주소와 다친 사람의 상태를 알려 주세요.",
                "직원: 주소는 사쿠라초 1초메입니다. 의식은 있습니다."
            ],
            vi: [
                "Nhân viên tổng đài khẩn cấp: Là cháy hay cấp cứu?",
                "Nhân viên: Cấp cứu. Có người bị thương ở nơi làm việc.",
                "Nhân viên tổng đài khẩn cấp: Xin hãy cho biết địa chỉ và tình trạng người bị thương.",
                "Nhân viên: Địa chỉ là Sakura-cho 1-chome. Người đó còn tỉnh."
            ]
        }
    ),

    makeA2WorkAccidentDialogue(
        "a2_workaccident_008",
        "事故報告書を書く",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "事故のあと、報告書を書く必要がありますか。",
                target: "じこのあと ほうこくしょをかくひつようがありますか",
                ruby: "<ruby>事故<rt>じこ</rt></ruby>のあと、<ruby>報告書<rt>ほうこくしょ</rt></ruby>を<ruby>書<rt>か</rt></ruby>く<ruby>必要<rt>ひつよう</rt></ruby>がありますか。",
                romaji: "Jiko no ato, hōkokusho o kaku hitsuyō ga arimasu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい。時間、場所、状況を書いてください。",
                target: "はい じかん ばしょ じょうきょうをかいてください",
                ruby: "はい。<ruby>時間<rt>じかん</rt></ruby>、<ruby>場所<rt>ばしょ</rt></ruby>、<ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Hai. Jikan, basho, jōkyō o kaite kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "現場の写真も添付しますか。",
                target: "げんばのしゃしんもてんぷしますか",
                ruby: "<ruby>現場<rt>げんば</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>も<ruby>添付<rt>てんぷ</rt></ruby>しますか。",
                romaji: "Genba no shashin mo tenpu shimasu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい。写真があれば、報告書と一緒に出してください。",
                target: "はい しゃしんがあれば ほうこくしょといっしょにだしてください",
                ruby: "はい。<ruby>写真<rt>しゃしん</rt></ruby>があれば、<ruby>報告書<rt>ほうこくしょ</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>出<rt>だ</rt></ruby>してください。",
                romaji: "Hai. Shashin ga areba, hōkokusho to issho ni dashite kudasai."
            }
        ],
        {
            ja: [
                "社員：事故のあと、報告書を書く必要がありますか。",
                "先輩：はい。時間、場所、状況を書いてください。",
                "社員：現場の写真も添付しますか。",
                "先輩：はい。写真があれば、報告書と一緒に出してください。"
            ],
            en: [
                "Worker: After the accident, do I need to write a report?",
                "Senior Worker: Yes. Please write the time, place, and situation.",
                "Worker: Should I attach photos of the site too?",
                "Senior Worker: Yes. If you have photos, please submit them with the report."
            ],
            "zh-CN": [
                "员工：事故之后，需要写报告书吗？",
                "前辈：需要。请写时间、地点和情况。",
                "员工：也要附上现场照片吗？",
                "前辈：是的。如果有照片，请和报告书一起提交。"
            ],
            "zh-TW": [
                "員工：事故之後，需要寫報告書嗎？",
                "前輩：需要。請寫時間、地點和情況。",
                "員工：也要附上現場照片嗎？",
                "前輩：是的。如果有照片，請和報告書一起提交。"
            ],
            ko: [
                "직원: 사고 후에 보고서를 써야 하나요?",
                "선배: 네. 시간, 장소, 상황을 써 주세요.",
                "직원: 현장 사진도 첨부하나요?",
                "선배: 네. 사진이 있으면 보고서와 함께 제출해 주세요."
            ],
            vi: [
                "Nhân viên: Sau tai nạn, tôi có cần viết báo cáo không ạ?",
                "Người hướng dẫn: Có. Hãy viết thời gian, địa điểm và tình huống.",
                "Nhân viên: Tôi có cần đính kèm ảnh hiện trường không ạ?",
                "Người hướng dẫn: Có. Nếu có ảnh, hãy nộp cùng với báo cáo."
            ]
        }
    )

];