// =====================================================
// Japeak A2 Level
// Scene: 職場で早退や休暇を申請してみよう
// File: data/japeak-a2-work-leave-request.js
// Category Key: a2_work_leave_request
// =====================================================

const a2WorkLeaveRequestLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeA2WorkLeaveRequestTranslations(translations) {
    const completed = {};
    a2WorkLeaveRequestLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const a2WorkLeaveRequestContext = {
    ja: "職場で、早退、休暇、有給休暇、欠勤、シフト変更、家族の用事、体調不良について上司や同僚に伝える日本語を練習します。",
    en: "Practice Japanese for telling your supervisor or coworkers about leaving work early, taking leave, paid leave, absence, shift changes, family matters, and feeling unwell.",
    "zh-CN": "练习在职场向上司或同事说明早退、休假、带薪休假、缺勤、换班、家庭事情和身体不适时使用的日语。",
    "zh-TW": "練習在職場向上司或同事說明早退、休假、特休、缺勤、換班、家庭事情和身體不適時使用的日語。",
    ko: "직장에서 조퇴, 휴가, 유급 휴가, 결근, 시프트 변경, 가족 일, 몸 상태에 대해 상사나 동료에게 말하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật để nói với cấp trên hoặc đồng nghiệp về việc về sớm, nghỉ phép, nghỉ có lương, vắng mặt, đổi ca, việc gia đình và tình trạng sức khỏe.",
    tl: "Practice Japanese for talking about early leave, leave, paid leave, absence, shift changes, family matters, and health conditions at work.",
    id: "Latihan bahasa Jepang untuk menyampaikan pulang lebih awal, cuti, cuti berbayar, absen, perubahan shift, urusan keluarga, dan kondisi badan di tempat kerja.",
    th: "ฝึกภาษาญี่ปุ่นเพื่อบอกหัวหน้าหรือเพื่อนร่วมงานเกี่ยวกับการกลับก่อนเวลา การลา การลาพักร้อนแบบได้รับค่าจ้าง การขาดงาน การเปลี่ยนกะ เรื่องครอบครัว และอาการไม่สบาย",
    my: "အလုပ်ခွင်တွင် စောစောပြန်ခြင်း၊ ခွင့်ယူခြင်း၊ လစာရခွင့်၊ အလုပ်ပျက်ခြင်း၊ shift ပြောင်းခြင်း၊ မိသားစုကိစ္စနှင့် ကျန်းမာရေးအခြေအနေအကြောင်း ပြောရန် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ប្រាប់ប្រធាន ឬមិត្តរួមការងារ អំពីការចេញមុនម៉ោង ការឈប់សម្រាក ការឈប់សម្រាកមានប្រាក់ខែ ការអវត្តមាន ការផ្លាស់ប្តូរវេន កិច្ចការគ្រួសារ និងសុខភាពមិនល្អ។",
    ne: "काममा छिट्टै फर्किने, बिदा लिने, तलबसहितको बिदा, अनुपस्थिति, shift परिवर्तन, परिवारको काम र स्वास्थ्य अवस्थाबारे supervisor वा coworker लाई भन्न जापानी अभ्यास।",
    mn: "Ажлын байранд эрт харих, чөлөө авах, цалинтай чөлөө, ажил таслах, ээлж солих, гэр бүлийн асуудал, биеийн байдал муу байх талаар дарга эсвэл хамт ажиллагсадтай ярих япон хэлний дадлага.",
    si: "වැඩ කරන ස්ථානයේ ඉක්මනින් යාම, නිවාඩු ගැනීම, වැටුප් සහිත නිවාඩු, නොපැමිණීම, shift වෙනස් කිරීම, පවුලේ කාරණා සහ සෞඛ්‍ය තත්ත්වය ගැන ජපන් භාෂා පුහුණුව.",
    bn: "কর্মস্থলে তাড়াতাড়ি চলে যাওয়া, ছুটি নেওয়া, বেতনসহ ছুটি, অনুপস্থিতি, shift পরিবর্তন, পারিবারিক বিষয় এবং শারীরিক অবস্থার কথা বলার জাপানি অনুশীলন।",
    pt: "Prática de japonês para falar com o supervisor ou colegas sobre sair mais cedo, tirar folga, férias remuneradas, ausência, troca de turno, assuntos familiares e mal-estar.",
    es: "Práctica de japonés para hablar con el supervisor o compañeros sobre salir temprano, tomar permiso, permiso pagado, ausencia, cambio de turno, asuntos familiares y malestar.",
    fr: "Entraînement en japonais pour parler à un supérieur ou à des collègues d’un départ anticipé, d’un congé, d’un congé payé, d’une absence, d’un changement de poste, d’un problème familial et d’un malaise.",
    ru: "Практика японского языка для общения с начальником или коллегами о раннем уходе, отпуске, оплачиваемом отпуске, отсутствии, смене графика, семейных делах и плохом самочувствии.",
    uk: "Практика японської мови для спілкування з керівником або колегами про ранній вихід, відпустку, оплачувану відпустку, відсутність, зміну зміни, сімейні справи та погане самопочуття."
};

const a2WorkLeaveRequestSpeakerNames = {
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

function makeA2WorkLeaveRequestDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeA2WorkLeaveRequestTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_work_leave_request",
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
            speakerNames: a2WorkLeaveRequestSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2WorkLeaveRequestContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakA2WorkLeaveRequestData = [

    makeA2WorkLeaveRequestDialogue(
        "a2_workleave_001",
        "体調不良で早退する",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "すみません。少し熱があるので、早退してもいいですか。",
                target: "すみません すこしねつがあるので そうたいしてもいいですか",
                ruby: "すみません。<ruby>少<rt>すこ</rt></ruby>し<ruby>熱<rt>ねつ</rt></ruby>があるので、<ruby>早退<rt>そうたい</rt></ruby>してもいいですか。",
                romaji: "Sumimasen. Sukoshi netsu ga aru node, sōtai shite mo ii desu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "大丈夫ですか。無理をしないでください。",
                target: "だいじょうぶですか むりをしないでください",
                ruby: "<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。<ruby>無理<rt>むり</rt></ruby>をしないでください。",
                romaji: "Daijōbu desu ka. Muri o shinaide kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "病院に行って、あとで連絡します。",
                target: "びょういんにいって あとでれんらくします",
                ruby: "<ruby>病院<rt>びょういん</rt></ruby>に<ruby>行<rt>い</rt></ruby>って、あとで<ruby>連絡<rt>れんらく</rt></ruby>します。",
                romaji: "Byōin ni itte, ato de renraku shimasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "わかりました。帰る前に作業の状況を教えてください。",
                target: "わかりました かえるまえにさぎょうのじょうきょうをおしえてください",
                ruby: "わかりました。<ruby>帰<rt>かえ</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に<ruby>作業<rt>さぎょう</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Wakarimashita. Kaeru mae ni sagyō no jōkyō o oshiete kudasai."
            }
        ],
        {
            ja: [
                "社員：すみません。少し熱があるので、早退してもいいですか。",
                "上司：大丈夫ですか。無理をしないでください。",
                "社員：病院に行って、あとで連絡します。",
                "上司：わかりました。帰る前に作業の状況を教えてください。"
            ],
            en: [
                "Worker: Excuse me. I have a slight fever, so may I leave work early?",
                "Supervisor: Are you okay? Please do not push yourself.",
                "Worker: I will go to the hospital and contact you later.",
                "Supervisor: Understood. Before you leave, please tell me the status of your work."
            ],
            "zh-CN": [
                "员工：不好意思。我有点发烧，可以早退吗？",
                "上司：你还好吗？请不要勉强。",
                "员工：我去医院，之后再联系您。",
                "上司：明白了。回去之前，请告诉我工作的进展情况。"
            ],
            "zh-TW": [
                "員工：不好意思。我有點發燒，可以早退嗎？",
                "上司：你還好嗎？請不要勉強。",
                "員工：我去醫院，之後再聯絡您。",
                "上司：明白了。回去之前，請告訴我工作的進展情況。"
            ],
            ko: [
                "직원: 죄송합니다. 조금 열이 있어서 조퇴해도 될까요?",
                "상사: 괜찮아요? 무리하지 마세요.",
                "직원: 병원에 가고 나중에 연락하겠습니다.",
                "상사: 알겠습니다. 돌아가기 전에 작업 상황을 알려 주세요."
            ],
            vi: [
                "Nhân viên: Xin lỗi. Tôi hơi sốt, nên tôi có thể về sớm không ạ?",
                "Cấp trên: Bạn có ổn không? Đừng cố quá.",
                "Nhân viên: Tôi sẽ đi bệnh viện và liên lạc sau.",
                "Cấp trên: Tôi hiểu rồi. Trước khi về, hãy cho tôi biết tình hình công việc."
            ]
        }
    ),

    makeA2WorkLeaveRequestDialogue(
        "a2_workleave_002",
        "子どもの用事で早退する",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "子どもの学校から連絡がありました。",
                target: "こどものがっこうかられんらくがありました",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもの<ruby>学校<rt>がっこう</rt></ruby>から<ruby>連絡<rt>れんらく</rt></ruby>がありました。",
                romaji: "Kodomo no gakkō kara renraku ga arimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "どうしましたか。",
                target: "どうしましたか",
                ruby: "どうしましたか。",
                romaji: "Dō shimashita ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "体調が悪いそうなので、迎えに行きたいです。",
                target: "たいちょうがわるいそうなので むかえにいきたいです",
                ruby: "<ruby>体調<rt>たいちょう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いそうなので、<ruby>迎<rt>むか</rt></ruby>えに<ruby>行<rt>い</rt></ruby>きたいです。",
                romaji: "Taichō ga warui sō na node, mukae ni ikitai desu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "わかりました。必要なら今日は早退してください。",
                target: "わかりました ひつようならきょうはそうたいしてください",
                ruby: "わかりました。<ruby>必要<rt>ひつよう</rt></ruby>なら<ruby>今日<rt>きょう</rt></ruby>は<ruby>早退<rt>そうたい</rt></ruby>してください。",
                romaji: "Wakarimashita. Hitsuyō nara kyō wa sōtai shite kudasai."
            }
        ],
        {
            ja: [
                "社員：子どもの学校から連絡がありました。",
                "上司：どうしましたか。",
                "社員：体調が悪いそうなので、迎えに行きたいです。",
                "上司：わかりました。必要なら今日は早退してください。"
            ],
            en: [
                "Worker: I received a call from my child’s school.",
                "Supervisor: What happened?",
                "Worker: It seems my child is not feeling well, so I would like to go pick them up.",
                "Supervisor: Understood. If necessary, please leave early today."
            ],
            "zh-CN": [
                "员工：孩子的学校联系我了。",
                "上司：怎么了？",
                "员工：听说孩子身体不舒服，所以我想去接他。",
                "上司：明白了。如果需要，今天请早退。"
            ],
            "zh-TW": [
                "員工：孩子的學校聯絡我了。",
                "上司：怎麼了？",
                "員工：聽說孩子身體不舒服，所以我想去接他。",
                "上司：明白了。如果需要，今天請早退。"
            ],
            ko: [
                "직원: 아이 학교에서 연락이 왔습니다.",
                "상사: 무슨 일인가요?",
                "직원: 몸이 안 좋다고 해서 데리러 가고 싶습니다.",
                "상사: 알겠습니다. 필요하면 오늘은 조퇴하세요."
            ],
            vi: [
                "Nhân viên: Tôi nhận được liên lạc từ trường của con tôi.",
                "Cấp trên: Có chuyện gì vậy?",
                "Nhân viên: Nghe nói con tôi không khỏe, nên tôi muốn đi đón.",
                "Cấp trên: Tôi hiểu rồi. Nếu cần, hôm nay hãy về sớm."
            ]
        }
    ),

    makeA2WorkLeaveRequestDialogue(
        "a2_workleave_003",
        "病院の予約で休暇を申請する",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "来週の月曜日に、病院の予約があります。",
                target: "らいしゅうのげつようびに びょういんのよやくがあります",
                ruby: "<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>月曜日<rt>げつようび</rt></ruby>に、<ruby>病院<rt>びょういん</rt></ruby>の<ruby>予約<rt>よやく</rt></ruby>があります。",
                romaji: "Raishū no getsuyōbi ni, byōin no yoyaku ga arimasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "何時ごろの予約ですか。",
                target: "なんじごろのよやくですか",
                ruby: "<ruby>何時<rt>なんじ</rt></ruby>ごろの<ruby>予約<rt>よやく</rt></ruby>ですか。",
                romaji: "Nanji goro no yoyaku desu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "午前十時なので、午前中だけ休みたいです。",
                target: "ごぜんじゅうじなので ごぜんちゅうだけやすみたいです",
                ruby: "<ruby>午前十時<rt>ごぜんじゅうじ</rt></ruby>なので、<ruby>午前中<rt>ごぜんちゅう</rt></ruby>だけ<ruby>休<rt>やす</rt></ruby>みたいです。",
                romaji: "Gozen jū-ji na node, gozenchū dake yasumitai desu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "では、半休の申請を出してください。",
                target: "では はんきゅうのしんせいをだしてください",
                ruby: "では、<ruby>半休<rt>はんきゅう</rt></ruby>の<ruby>申請<rt>しんせい</rt></ruby>を<ruby>出<rt>だ</rt></ruby>してください。",
                romaji: "Dewa, hankyū no shinsei o dashite kudasai."
            }
        ],
        {
            ja: [
                "社員：来週の月曜日に、病院の予約があります。",
                "上司：何時ごろの予約ですか。",
                "社員：午前十時なので、午前中だけ休みたいです。",
                "上司：では、半休の申請を出してください。"
            ],
            en: [
                "Worker: I have a hospital appointment next Monday.",
                "Supervisor: About what time is the appointment?",
                "Worker: It is at 10 a.m., so I would like to take only the morning off.",
                "Supervisor: Then please submit an application for a half-day leave."
            ],
            "zh-CN": [
                "员工：下周一我有医院预约。",
                "上司：大概几点的预约？",
                "员工：上午十点，所以我只想上午休息。",
                "上司：那么，请提交半天休假的申请。"
            ],
            "zh-TW": [
                "員工：下週一我有醫院預約。",
                "上司：大概幾點的預約？",
                "員工：上午十點，所以我只想上午休息。",
                "上司：那麼，請提交半天休假的申請。"
            ],
            ko: [
                "직원: 다음 주 월요일에 병원 예약이 있습니다.",
                "상사: 몇 시쯤 예약인가요?",
                "직원: 오전 10시라서 오전만 쉬고 싶습니다.",
                "상사: 그럼 반차 신청을 내 주세요."
            ],
            vi: [
                "Nhân viên: Thứ Hai tuần sau tôi có lịch hẹn ở bệnh viện.",
                "Cấp trên: Lịch hẹn khoảng mấy giờ?",
                "Nhân viên: Lúc 10 giờ sáng, nên tôi muốn nghỉ buổi sáng thôi.",
                "Cấp trên: Vậy hãy nộp đơn xin nghỉ nửa ngày."
            ]
        }
    ),

    makeA2WorkLeaveRequestDialogue(
        "a2_workleave_004",
        "有給休暇を申請する",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "来月の五日に、有給休暇を取りたいです。",
                target: "らいげつのいつかに ゆうきゅうきゅうかをとりたいです",
                ruby: "<ruby>来月<rt>らいげつ</rt></ruby>の<ruby>五日<rt>いつか</rt></ruby>に、<ruby>有給休暇<rt>ゆうきゅうきゅうか</rt></ruby>を<ruby>取<rt>と</rt></ruby>りたいです。",
                romaji: "Raigetsu no itsuka ni, yūkyū kyūka o toritai desu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "その日は予定がありますか。",
                target: "そのひはよていがありますか",
                ruby: "その<ruby>日<rt>ひ</rt></ruby>は<ruby>予定<rt>よてい</rt></ruby>がありますか。",
                romaji: "Sono hi wa yotei ga arimasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "家族の用事で、一日休みたいです。",
                target: "かぞくのようじで いちにちやすみたいです",
                ruby: "<ruby>家族<rt>かぞく</rt></ruby>の<ruby>用事<rt>ようじ</rt></ruby>で、<ruby>一日<rt>いちにち</rt></ruby><ruby>休<rt>やす</rt></ruby>みたいです。",
                romaji: "Kazoku no yōji de, ichinichi yasumitai desu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "わかりました。申請フォームに入力してください。",
                target: "わかりました しんせいふぉーむににゅうりょくしてください",
                ruby: "わかりました。<ruby>申請<rt>しんせい</rt></ruby>フォームに<ruby>入力<rt>にゅうりょく</rt></ruby>してください。",
                romaji: "Wakarimashita. Shinsei fōmu ni nyūryoku shite kudasai."
            }
        ],
        {
            ja: [
                "社員：来月の五日に、有給休暇を取りたいです。",
                "上司：その日は予定がありますか。",
                "社員：家族の用事で、一日休みたいです。",
                "上司：わかりました。申請フォームに入力してください。"
            ],
            en: [
                "Worker: I would like to take paid leave on the fifth of next month.",
                "Supervisor: Do you have plans that day?",
                "Worker: I have a family matter, so I would like to take the whole day off.",
                "Supervisor: Understood. Please enter it in the application form."
            ],
            "zh-CN": [
                "员工：我想在下个月五号请带薪休假。",
                "上司：那天有什么安排吗？",
                "员工：因为有家庭事情，我想休一天。",
                "上司：明白了。请在申请表里输入。"
            ],
            "zh-TW": [
                "員工：我想在下個月五號請特休。",
                "上司：那天有什麼安排嗎？",
                "員工：因為有家庭事情，我想休一天。",
                "上司：明白了。請在申請表裡輸入。"
            ],
            ko: [
                "직원: 다음 달 5일에 유급 휴가를 쓰고 싶습니다.",
                "상사: 그날은 예정이 있나요?",
                "직원: 가족 일이 있어서 하루 쉬고 싶습니다.",
                "상사: 알겠습니다. 신청 양식에 입력해 주세요."
            ],
            vi: [
                "Nhân viên: Tôi muốn nghỉ phép có lương vào ngày 5 tháng sau.",
                "Cấp trên: Ngày đó bạn có việc gì không?",
                "Nhân viên: Tôi có việc gia đình, nên muốn nghỉ cả ngày.",
                "Cấp trên: Tôi hiểu rồi. Hãy nhập vào mẫu đơn xin nghỉ."
            ]
        }
    ),

    makeA2WorkLeaveRequestDialogue(
        "a2_workleave_005",
        "急な欠勤を連絡する",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "おはようございます。急に熱が出てしまいました。",
                target: "おはようございます きゅうにねつがでてしまいました",
                ruby: "おはようございます。<ruby>急<rt>きゅう</rt></ruby>に<ruby>熱<rt>ねつ</rt></ruby>が<ruby>出<rt>で</rt></ruby>てしまいました。",
                romaji: "Ohayō gozaimasu. Kyū ni netsu ga dete shimaimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "今日は出勤できそうですか。",
                target: "きょうはしゅっきんできそうですか",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>出勤<rt>しゅっきん</rt></ruby>できそうですか。",
                romaji: "Kyō wa shukkin dekisō desu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "すみません。今日は休ませてください。",
                target: "すみません きょうはやすませてください",
                ruby: "すみません。<ruby>今日<rt>きょう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>ませてください。",
                romaji: "Sumimasen. Kyō wa yasumasete kudasai."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "わかりました。病院に行ったら、結果を連絡してください。",
                target: "わかりました びょういんにいったら けっかをれんらくしてください",
                ruby: "わかりました。<ruby>病院<rt>びょういん</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったら、<ruby>結果<rt>けっか</rt></ruby>を<ruby>連絡<rt>れんらく</rt></ruby>してください。",
                romaji: "Wakarimashita. Byōin ni ittara, kekka o renraku shite kudasai."
            }
        ],
        {
            ja: [
                "社員：おはようございます。急に熱が出てしまいました。",
                "上司：今日は出勤できそうですか。",
                "社員：すみません。今日は休ませてください。",
                "上司：わかりました。病院に行ったら、結果を連絡してください。"
            ],
            en: [
                "Worker: Good morning. I suddenly got a fever.",
                "Supervisor: Do you think you can come to work today?",
                "Worker: I am sorry. Please allow me to take the day off today.",
                "Supervisor: Understood. After you go to the hospital, please tell me the result."
            ],
            "zh-CN": [
                "员工：早上好。我突然发烧了。",
                "上司：今天看起来能来上班吗？",
                "员工：不好意思。今天请让我休息。",
                "上司：明白了。去医院后，请告诉我结果。"
            ],
            "zh-TW": [
                "員工：早安。我突然發燒了。",
                "上司：今天看起來能來上班嗎？",
                "員工：不好意思。今天請讓我休息。",
                "上司：明白了。去醫院後，請告訴我結果。"
            ],
            ko: [
                "직원: 안녕하세요. 갑자기 열이 났습니다.",
                "상사: 오늘 출근할 수 있을 것 같나요?",
                "직원: 죄송합니다. 오늘은 쉬게 해 주세요.",
                "상사: 알겠습니다. 병원에 가면 결과를 연락해 주세요."
            ],
            vi: [
                "Nhân viên: Chào buổi sáng. Tôi đột nhiên bị sốt.",
                "Cấp trên: Hôm nay bạn có thể đi làm không?",
                "Nhân viên: Xin lỗi. Hôm nay cho tôi nghỉ.",
                "Cấp trên: Tôi hiểu rồi. Sau khi đi bệnh viện, hãy liên lạc kết quả cho tôi."
            ]
        }
    ),

    makeA2WorkLeaveRequestDialogue(
        "a2_workleave_006",
        "シフト変更をお願いする",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "すみません。来週のシフトについて相談があります。",
                target: "すみません らいしゅうのしふとについてそうだんがあります",
                ruby: "すみません。<ruby>来週<rt>らいしゅう</rt></ruby>のシフトについて<ruby>相談<rt>そうだん</rt></ruby>があります。",
                romaji: "Sumimasen. Raishū no shifuto ni tsuite sōdan ga arimasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "どうしましたか。",
                target: "どうしましたか",
                ruby: "どうしましたか。",
                romaji: "Dō shimashita ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "水曜日に家族の用事が入ってしまいました。",
                target: "すいようびにかぞくのようじがはいってしまいました",
                ruby: "<ruby>水曜日<rt>すいようび</rt></ruby>に<ruby>家族<rt>かぞく</rt></ruby>の<ruby>用事<rt>ようじ</rt></ruby>が<ruby>入<rt>はい</rt></ruby>ってしまいました。",
                romaji: "Suiyōbi ni kazoku no yōji ga haitte shimaimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "代わりに働ける日はありますか。",
                target: "かわりにはたらけるひはありますか",
                ruby: "<ruby>代<rt>か</rt></ruby>わりに<ruby>働<rt>はたら</rt></ruby>ける<ruby>日<rt>ひ</rt></ruby>はありますか。",
                romaji: "Kawari ni hatarakeru hi wa arimasu ka."
            }
        ],
        {
            ja: [
                "社員：すみません。来週のシフトについて相談があります。",
                "上司：どうしましたか。",
                "社員：水曜日に家族の用事が入ってしまいました。",
                "上司：代わりに働ける日はありますか。"
            ],
            en: [
                "Worker: Excuse me. I would like to talk about next week’s shift.",
                "Supervisor: What happened?",
                "Worker: A family matter came up on Wednesday.",
                "Supervisor: Is there another day you can work instead?"
            ],
            "zh-CN": [
                "员工：不好意思。我想商量下周的班表。",
                "上司：怎么了？",
                "员工：星期三突然有家庭事情。",
                "上司：有没有可以代替上班的日子？"
            ],
            "zh-TW": [
                "員工：不好意思。我想商量下週的班表。",
                "上司：怎麼了？",
                "員工：星期三突然有家庭事情。",
                "上司：有沒有可以代替上班的日子？"
            ],
            ko: [
                "직원: 죄송합니다. 다음 주 시프트에 대해 상담이 있습니다.",
                "상사: 무슨 일인가요?",
                "직원: 수요일에 가족 일이 생겼습니다.",
                "상사: 대신 일할 수 있는 날이 있나요?"
            ],
            vi: [
                "Nhân viên: Xin lỗi. Tôi muốn trao đổi về ca làm tuần sau.",
                "Cấp trên: Có chuyện gì vậy?",
                "Nhân viên: Thứ Tư tôi có việc gia đình đột xuất.",
                "Cấp trên: Có ngày nào bạn có thể làm thay không?"
            ]
        }
    ),

    makeA2WorkLeaveRequestDialogue(
        "a2_workleave_007",
        "同僚に引き継ぎをお願いする",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "今日、早退することになりました。",
                target: "きょう そうたいすることになりました",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>、<ruby>早退<rt>そうたい</rt></ruby>することになりました。",
                romaji: "Kyō, sōtai suru koto ni narimashita."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "大丈夫ですか。何を引き継ぎますか。",
                target: "だいじょうぶですか なにをひきつぎますか",
                ruby: "<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。<ruby>何<rt>なに</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>継<rt>つ</rt></ruby>ぎますか。",
                romaji: "Daijōbu desu ka. Nani o hikitsugimasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "このリストの四番からお願いします。",
                target: "このりすとのよんばんからおねがいします",
                ruby: "このリストの<ruby>四番<rt>よんばん</rt></ruby>からお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Kono risuto no yonban kara onegai shimasu."
            },
            {
                label: "話者A",
                key: "colleague",
                name: "同僚",
                line: "わかりました。必要なメモはありますか。",
                target: "わかりました ひつようなめもはありますか",
                ruby: "わかりました。<ruby>必要<rt>ひつよう</rt></ruby>なメモはありますか。",
                romaji: "Wakarimashita. Hitsuyō na memo wa arimasu ka."
            }
        ],
        {
            ja: [
                "社員：今日、早退することになりました。",
                "同僚：大丈夫ですか。何を引き継ぎますか。",
                "社員：このリストの四番からお願いします。",
                "同僚：わかりました。必要なメモはありますか。"
            ],
            en: [
                "Worker: I need to leave work early today.",
                "Coworker: Are you okay? What should I take over?",
                "Worker: Please start from number four on this list.",
                "Coworker: Understood. Are there any notes I need?"
            ],
            "zh-CN": [
                "员工：我今天要早退了。",
                "同事：你还好吗？需要交接什么？",
                "员工：请从这个清单的第四项开始。",
                "同事：明白了。有没有需要的备注？"
            ],
            "zh-TW": [
                "員工：我今天要早退了。",
                "同事：你還好嗎？需要交接什麼？",
                "員工：請從這個清單的第四項開始。",
                "同事：明白了。有沒有需要的備註？"
            ],
            ko: [
                "직원: 오늘 조퇴하게 되었습니다.",
                "동료: 괜찮아요? 무엇을 인수인계하나요?",
                "직원: 이 리스트의 4번부터 부탁드립니다.",
                "동료: 알겠습니다. 필요한 메모가 있나요?"
            ],
            vi: [
                "Nhân viên: Hôm nay tôi phải về sớm.",
                "Đồng nghiệp: Bạn có ổn không? Tôi cần bàn giao việc gì?",
                "Nhân viên: Xin hãy bắt đầu từ số 4 trong danh sách này.",
                "Đồng nghiệp: Tôi hiểu rồi. Có ghi chú nào cần thiết không?"
            ]
        }
    ),

    makeA2WorkLeaveRequestDialogue(
        "a2_workleave_008",
        "休み明けに報告する",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "昨日は急に休んでしまい、すみませんでした。",
                target: "きのうはきゅうにやすんでしまい すみませんでした",
                ruby: "<ruby>昨日<rt>きのう</rt></ruby>は<ruby>急<rt>きゅう</rt></ruby>に<ruby>休<rt>やす</rt></ruby>んでしまい、すみませんでした。",
                romaji: "Kinō wa kyū ni yasunde shimai, sumimasen deshita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "もう体調は大丈夫ですか。",
                target: "もうたいちょうはだいじょうぶですか",
                ruby: "もう<ruby>体調<rt>たいちょう</rt></ruby>は<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Mō taichō wa daijōbu desu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "はい。病院で薬をもらって、よくなりました。",
                target: "はい びょういんでくすりをもらって よくなりました",
                ruby: "はい。<ruby>病院<rt>びょういん</rt></ruby>で<ruby>薬<rt>くすり</rt></ruby>をもらって、よくなりました。",
                romaji: "Hai. Byōin de kusuri o moratte, yoku narimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "上司",
                line: "よかったです。無理せず、今日の作業を始めましょう。",
                target: "よかったです むりせず きょうのさぎょうをはじめましょう",
                ruby: "よかったです。<ruby>無理<rt>むり</rt></ruby>せず、<ruby>今日<rt>きょう</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めましょう。",
                romaji: "Yokatta desu. Muri sezu, kyō no sagyō o hajimemashō."
            }
        ],
        {
            ja: [
                "社員：昨日は急に休んでしまい、すみませんでした。",
                "上司：もう体調は大丈夫ですか。",
                "社員：はい。病院で薬をもらって、よくなりました。",
                "上司：よかったです。無理せず、今日の作業を始めましょう。"
            ],
            en: [
                "Worker: I am sorry for taking a sudden day off yesterday.",
                "Supervisor: Are you feeling okay now?",
                "Worker: Yes. I got medicine at the hospital and feel better.",
                "Supervisor: That is good. Do not push yourself, and let’s start today’s work."
            ],
            "zh-CN": [
                "员工：昨天突然休息了，真的不好意思。",
                "上司：现在身体还好吗？",
                "员工：是的。我在医院拿了药，已经好多了。",
                "上司：那太好了。不要勉强，开始今天的工作吧。"
            ],
            "zh-TW": [
                "員工：昨天突然休息了，真的不好意思。",
                "上司：現在身體還好嗎？",
                "員工：是的。我在醫院拿了藥，已經好多了。",
                "上司：那太好了。不要勉強，開始今天的工作吧。"
            ],
            ko: [
                "직원: 어제 갑자기 쉬게 되어 죄송했습니다.",
                "상사: 이제 몸 상태는 괜찮나요?",
                "직원: 네. 병원에서 약을 받고 좋아졌습니다.",
                "상사: 다행입니다. 무리하지 말고 오늘 작업을 시작합시다."
            ],
            vi: [
                "Nhân viên: Tôi xin lỗi vì hôm qua đã nghỉ đột xuất.",
                "Cấp trên: Bây giờ sức khỏe của bạn ổn chưa?",
                "Nhân viên: Vâng. Tôi đã nhận thuốc ở bệnh viện và đã khá hơn.",
                "Cấp trên: Tốt quá. Đừng cố quá, chúng ta hãy bắt đầu công việc hôm nay."
            ]
        }
    )

];