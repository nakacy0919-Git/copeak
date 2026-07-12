// =====================================================
// Japeak B1 Level
// Scene: 子どもを病院に連れていこう
// File: data/japeak-b1-child-hospital.js
// Category Key: b1_child_hospital
// =====================================================

const b1ChildHospitalLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1ChildHospitalTranslations(translations) {
    const completed = {};

    b1ChildHospitalLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1ChildHospitalContext = {
    ja: "子どもを病院に連れて行くときに、受付で症状を説明したり、発熱や症状の変化、アレルギー、服用中の薬について伝えたり、診察、検査、薬、帰宅後の注意点について確認したりするための日本語を練習します。",

    en: "Practice Japanese for taking a child to the hospital, including explaining symptoms at reception, describing fever and changes in the child's condition, reporting allergies and medicines, and asking about examinations, tests, medication, and what to watch for after returning home.",

    "zh-CN": "练习带孩子去医院时使用的日语，包括在接待处说明症状、描述发烧和症状变化、告知过敏和正在使用的药物，以及确认诊察、检查、用药和回家后的注意事项。",

    "zh-TW": "練習帶孩子去醫院時使用的日語，包括在接待處說明症狀、描述發燒和症狀變化、告知過敏和正在使用的藥物，以及確認診察、檢查、用藥和回家後的注意事項。",

    ko: "아이를 병원에 데려갈 때 접수처에서 증상을 설명하고, 발열과 증상의 변화, 알레르기, 복용 중인 약을 알리며, 진찰, 검사, 약, 귀가 후 주의 사항을 확인하는 일본어를 연습합니다.",

    vi: "Luyện tiếng Nhật để đưa trẻ đến bệnh viện, bao gồm trình bày triệu chứng tại quầy tiếp nhận, mô tả sốt và sự thay đổi của triệu chứng, thông báo về dị ứng và thuốc đang dùng, đồng thời hỏi về khám bệnh, xét nghiệm, thuốc và những điều cần chú ý sau khi về nhà.",

    tl: "Practice Japanese for taking a child to the hospital, including explaining symptoms, describing fever and changes in condition, reporting allergies and current medicines, and asking about examinations, tests, medication, and what to watch for at home.",

    id: "Latihan bahasa Jepang untuk membawa anak ke rumah sakit, termasuk menjelaskan gejala di bagian penerimaan, menyampaikan demam dan perubahan kondisi, memberi tahu tentang alergi dan obat yang sedang digunakan, serta menanyakan pemeriksaan, tes, obat, dan hal-hal yang perlu diperhatikan setelah pulang.",

    th: "ฝึกภาษาญี่ปุ่นสำหรับการพาเด็กไปโรงพยาบาล เช่น การอธิบายอาการที่จุดรับผู้ป่วย การบอกเรื่องไข้และการเปลี่ยนแปลงของอาการ การแจ้งอาการแพ้และยาที่ใช้อยู่ รวมถึงการสอบถามเรื่องการตรวจ การทดสอบ ยา และสิ่งที่ต้องระวังหลังกลับบ้าน",

    my: "ကလေးကို ဆေးရုံခေါ်သွားသည့်အခါ ဧည့်ခံဌာနတွင် ရောဂါလက္ခဏာများကို ရှင်းပြခြင်း၊ အဖျားနှင့် အခြေအနေပြောင်းလဲမှုကို ပြောပြခြင်း၊ ဓာတ်မတည့်မှုနှင့် သောက်နေသောဆေးများကို အသိပေးခြင်း၊ စစ်ဆေးမှု၊ ဆေးဝါးနှင့် အိမ်ပြန်ပြီးနောက် သတိထားရမည့်အချက်များကို မေးမြန်းရန် ဂျပန်စကားကို လေ့ကျင့်ပါ။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់នាំកុមារទៅមន្ទីរពេទ្យ រួមមានការពន្យល់រោគសញ្ញានៅកន្លែងទទួលអ្នកជំងឺ ការរៀបរាប់អំពីគ្រុនក្តៅ និងការប្រែប្រួលស្ថានភាព ការប្រាប់អំពីអាឡែស៊ី និងថ្នាំដែលកំពុងប្រើ ព្រមទាំងសួរអំពីការពិនិត្យ តេស្ត ថ្នាំ និងអ្វីដែលត្រូវប្រុងប្រយ័ត្នបន្ទាប់ពីត្រឡប់ទៅផ្ទះ។",

    ne: "बालबालिकालाई अस्पताल लैजाँदा受付मा लक्षण बताउने, ज्वरो र अवस्थाको परिवर्तन वर्णन गर्ने, एलर्जी र खाइरहेको औषधिबारे जानकारी दिने, तथा जाँच, परीक्षण, औषधि र घर फर्केपछि ध्यान दिनुपर्ने कुराबारे सोध्ने जापानी अभ्यास।",

    mn: "Хүүхдийг эмнэлэгт авч явахдаа хүлээн авах хэсэгт шинж тэмдгийг тайлбарлах, халууралт болон биеийн байдлын өөрчлөлтийг хэлэх, харшил болон хэрэглэж буй эмийн талаар мэдээлэх, үзлэг, шинжилгээ, эм, гэртээ харьсны дараах анхаарах зүйлсийг асуух япон хэлний дадлага.",

    si: "දරුවෙකු රෝහලට ගෙන යන විට පිළිගැනීමේ ස්ථානයේ රෝග ලක්ෂණ පැහැදිලි කිරීම, උණ සහ තත්ත්වයේ වෙනස්කම් විස්තර කිරීම, අසාත්මිකතා සහ භාවිත කරන ඖෂධ ගැන දැනුම් දීම, පරීක්ෂණ, ඖෂධ සහ නිවසට ගිය පසු අවධානය යොමු කළ යුතු කරුණු ගැන විමසීමට ජපන් භාෂා පුහුණුව.",

    bn: "শিশুকে হাসপাতালে নিয়ে যাওয়ার সময়受付ে উপসর্গ ব্যাখ্যা করা, জ্বর ও অবস্থার পরিবর্তন জানানো, অ্যালার্জি ও চলমান ওষুধ সম্পর্কে তথ্য দেওয়া এবং পরীক্ষা, ওষুধ ও বাড়ি ফেরার পর কী কী খেয়াল রাখতে হবে তা জিজ্ঞাসা করার জন্য জাপানি অনুশীলন।",

    pt: "Prática de japonês para levar uma criança ao hospital, incluindo explicar sintomas na recepção, descrever febre e mudanças no estado da criança, informar alergias e medicamentos em uso e perguntar sobre consultas, exames, medicamentos e cuidados após voltar para casa.",

    es: "Práctica de japonés para llevar a un niño al hospital, incluyendo explicar los síntomas en recepción, describir la fiebre y los cambios en su estado, informar sobre alergias y medicamentos actuales y preguntar sobre consultas, pruebas, medicación y cuidados después de volver a casa.",

    fr: "Entraînement en japonais pour emmener un enfant à l'hôpital, notamment expliquer les symptômes à l'accueil, décrire la fièvre et les changements de son état, signaler les allergies et les médicaments pris, et poser des questions sur l'examen, les tests, les médicaments et les précautions à prendre après le retour à la maison.",

    ru: "Практика японского языка для посещения больницы с ребёнком: описание симптомов в регистратуре, температуры и изменений состояния, сообщение об аллергиях и принимаемых лекарствах, а также вопросы об осмотре, анализах, лекарствах и мерах предосторожности после возвращения домой.",

    uk: "Практика японської мови для відвідування лікарні з дитиною: пояснення симптомів у реєстратурі, температури та змін стану, повідомлення про алергії й ліки, а також запитання про огляд, обстеження, ліки та заходи після повернення додому."
};

const b1ChildHospitalSpeakerNames = {

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

    receptionist: {
        ja: "受付職員",
        en: "Receptionist",
        "zh-CN": "接待人员",
        "zh-TW": "接待人員",
        ko: "접수 직원",
        vi: "Nhân viên tiếp nhận",
        tl: "Receptionist",
        id: "Petugas penerimaan",
        th: "เจ้าหน้าที่รับผู้ป่วย",
        my: "ဧည့်ခံဝန်ထမ်း",
        km: "បុគ្គលិកទទួលអ្នកជំងឺ",
        ne: "स्वागत कर्मचारी",
        mn: "Хүлээн авах ажилтан",
        si: "පිළිගැනීමේ නිලධාරියා",
        bn: "অভ্যর্থনা কর্মী",
        pt: "Recepcionista",
        es: "Recepcionista",
        fr: "Réceptionniste",
        ru: "Регистратор",
        uk: "Працівник реєстратури"
    },

    doctor: {
        ja: "医師",
        en: "Doctor",
        "zh-CN": "医生",
        "zh-TW": "醫師",
        ko: "의사",
        vi: "Bác sĩ",
        tl: "Doctor",
        id: "Dokter",
        th: "แพทย์",
        my: "ဆရာဝန်",
        km: "វេជ្ជបណ្ឌិត",
        ne: "डाक्टर",
        mn: "Эмч",
        si: "වෛද්‍යවරයා",
        bn: "ডাক্তার",
        pt: "Médico",
        es: "Médico",
        fr: "Médecin",
        ru: "Врач",
        uk: "Лікар"
    },

    nurse: {
        ja: "看護師",
        en: "Nurse",
        "zh-CN": "护士",
        "zh-TW": "護理師",
        ko: "간호사",
        vi: "Y tá",
        tl: "Nurse",
        id: "Perawat",
        th: "พยาบาล",
        my: "သူနာပြု",
        km: "គិលានុបដ្ឋាក",
        ne: "नर्स",
        mn: "Сувилагч",
        si: "හෙද නිලධාරියා",
        bn: "নার্স",
        pt: "Enfermeiro",
        es: "Enfermero",
        fr: "Infirmier",
        ru: "Медсестра",
        uk: "Медсестра"
    },

    pharmacist: {
        ja: "薬剤師",
        en: "Pharmacist",
        "zh-CN": "药剂师",
        "zh-TW": "藥師",
        ko: "약사",
        vi: "Dược sĩ",
        tl: "Pharmacist",
        id: "Apoteker",
        th: "เภสัชกร",
        my: "ဆေးဝါးပညာရှင်",
        km: "ឱសថការី",
        ne: "औषधि विशेषज्ञ",
        mn: "Эм зүйч",
        si: "ඖෂධවේදියා",
        bn: "ফার্মাসিস্ট",
        pt: "Farmacêutico",
        es: "Farmacéutico",
        fr: "Pharmacien",
        ru: "Фармацевт",
        uk: "Фармацевт"
    },

    advisor: {
        ja: "相談員",
        en: "Advisor",
        "zh-CN": "咨询员",
        "zh-TW": "諮詢員",
        ko: "상담원",
        vi: "Nhân viên tư vấn",
        tl: "Advisor",
        id: "Petugas konsultasi",
        th: "เจ้าหน้าที่ให้คำปรึกษา",
        my: "အကြံပေးဝန်ထမ်း",
        km: "អ្នកប្រឹក្សា",
        ne: "परामर्शदाता",
        mn: "Зөвлөх",
        si: "උපදේශකයා",
        bn: "পরামর্শদাতা",
        pt: "Consultor",
        es: "Asesor",
        fr: "Conseiller",
        ru: "Консультант",
        uk: "Консультант"
    }
};

function makeB1ChildHospitalDialogue(
    id,
    title,
    dialogue,
    dialogueTranslations
) {
    const fullDialogueTranslations =
        completeB1ChildHospitalTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_child_hospital",

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
                b1ChildHospitalSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1ChildHospitalContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1ChildHospitalData = [

    // =====================================================
    // 001 受付で子どもの症状を説明する
    // =====================================================

    makeB1ChildHospitalDialogue(
        "b1_childhospital_001",
        "受付で子どもの症状を説明する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが昨日の夜から熱を出しているので、診察をお願いしたいです。",
                target: "こどもがきのうのよるからねつをだしているので しんさつをおねがいしたいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>昨日<rt>きのう</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>から<ruby>熱<rt>ねつ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>しているので、<ruby>診察<rt>しんさつ</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いしたいです。",
                romaji: "Kodomo ga kinō no yoru kara netsu o dashite iru node, shinsatsu o onegai shitai desu."
            },
            {
                label: "話者A",
                key: "receptionist",
                name: "受付職員",
                line: "わかりました。現在の体温と、ほかに気になる症状があれば教えてください。",
                target: "わかりました げんざいのたいおんと ほかにきになるしょうじょうがあればおしえてください",
                ruby: "わかりました。<ruby>現在<rt>げんざい</rt></ruby>の<ruby>体温<rt>たいおん</rt></ruby>と、ほかに<ruby>気<rt>き</rt></ruby>になる<ruby>症状<rt>しょうじょう</rt></ruby>があれば<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Wakarimashita. Genzai no taion to, hoka ni ki ni naru shōjō ga areba oshiete kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "今朝は三十八度五分でした。せきも出ていて、いつもより元気がありません。",
                target: "けさはさんじゅうはちどごぶでした せきもでていて いつもよりげんきがありません",
                ruby: "<ruby>今朝<rt>けさ</rt></ruby>は<ruby>三十八度五分<rt>さんじゅうはちどごぶ</rt></ruby>でした。せきも<ruby>出<rt>で</rt></ruby>ていて、いつもより<ruby>元気<rt>げんき</rt></ruby>がありません。",
                romaji: "Kesa wa sanjūhachi-do gobu deshita. Seki mo dete ite, itsumo yori genki ga arimasen."
            },
            {
                label: "話者A",
                key: "receptionist",
                name: "受付職員",
                line: "水分や食事は取れていますか。また、呼吸が苦しそうな様子はありますか。",
                target: "すいぶんやしょくじはとれていますか また こきゅうがくるしそうなようすはありますか",
                ruby: "<ruby>水分<rt>すいぶん</rt></ruby>や<ruby>食事<rt>しょくじ</rt></ruby>は<ruby>取<rt>と</rt></ruby>れていますか。また、<ruby>呼吸<rt>こきゅう</rt></ruby>が<ruby>苦<rt>くる</rt></ruby>しそうな<ruby>様子<rt>ようす</rt></ruby>はありますか。",
                romaji: "Suibun ya shokuji wa torete imasu ka. Mata, kokyū ga kurushisō na yōsu wa arimasu ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "水は少し飲めていますが、朝ごはんはほとんど食べませんでした。",
                target: "みずはすこしのめていますが あさごはんはほとんどたべませんでした",
                ruby: "<ruby>水<rt>みず</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>飲<rt>の</rt></ruby>めていますが、<ruby>朝<rt>あさ</rt></ruby>ごはんはほとんど<ruby>食<rt>た</rt></ruby>べませんでした。",
                romaji: "Mizu wa sukoshi nomete imasu ga, asagohan wa hotondo tabemasen deshita."
            },
            {
                label: "話者A",
                key: "receptionist",
                name: "受付職員",
                line: "わかりました。診察の前に、もう少し詳しい様子を確認させてください。",
                target: "わかりました しんさつのまえに もうすこしくわしいようすをかくにんさせてください",
                ruby: "わかりました。<ruby>診察<rt>しんさつ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に、もう<ruby>少<rt>すこ</rt></ruby>し<ruby>詳<rt>くわ</rt></ruby>しい<ruby>様子<rt>ようす</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>させてください。",
                romaji: "Wakarimashita. Shinsatsu no mae ni, mō sukoshi kuwashii yōsu o kakunin sasete kudasai."
            }
        ],

        {
            ja: [
                "保護者：子どもが昨日の夜から熱を出しているので、診察をお願いしたいです。",
                "受付職員：わかりました。現在の体温と、ほかに気になる症状があれば教えてください。",
                "保護者：今朝は三十八度五分でした。せきも出ていて、いつもより元気がありません。",
                "受付職員：水分や食事は取れていますか。また、呼吸が苦しそうな様子はありますか。",
                "保護者：水は少し飲めていますが、朝ごはんはほとんど食べませんでした。",
                "受付職員：わかりました。診察の前に、もう少し詳しい様子を確認させてください。"
            ],

            en: [
                "Parent: My child has had a fever since last night, so I would like to have my child examined.",
                "Receptionist: I understand. Please tell me the current temperature and any other symptoms that concern you.",
                "Parent: It was 38.5 degrees this morning. My child is also coughing and has less energy than usual.",
                "Receptionist: Is your child able to drink fluids or eat? Does your child seem to be having difficulty breathing?",
                "Parent: My child can drink a little water but ate almost no breakfast.",
                "Receptionist: I understand. Before the examination, let me ask you a few more questions about your child's condition."
            ],

            "zh-CN": [
                "家长：孩子从昨天晚上开始发烧，所以想请医生看一下。",
                "接待人员：明白了。请告诉我现在的体温，以及有没有其他让您担心的症状。",
                "家长：今天早上是三十八点五度。还有咳嗽，而且比平时没有精神。",
                "接待人员：孩子能喝水或吃东西吗？有没有呼吸困难的样子？",
                "家长：能喝一点水，但是早餐几乎没有吃。",
                "接待人员：明白了。在诊察之前，请让我再详细确认一下孩子的情况。"
            ],

            "zh-TW": [
                "家長：孩子從昨天晚上開始發燒，所以想請醫師看一下。",
                "接待人員：明白了。請告訴我現在的體溫，以及有沒有其他讓您擔心的症狀。",
                "家長：今天早上是三十八點五度。還有咳嗽，而且比平時沒有精神。",
                "接待人員：孩子能喝水或吃東西嗎？有沒有呼吸困難的樣子？",
                "家長：能喝一點水，但是早餐幾乎沒有吃。",
                "接待人員：明白了。在診察之前，請讓我再詳細確認一下孩子的情況。"
            ],

            ko: [
                "보호자: 아이가 어젯밤부터 열이 나서 진찰을 받고 싶습니다.",
                "접수 직원: 알겠습니다. 현재 체온과 그 밖에 걱정되는 증상이 있으면 알려 주세요.",
                "보호자: 오늘 아침에는 38.5도였습니다. 기침도 하고 평소보다 기운이 없습니다.",
                "접수 직원: 물이나 음식을 먹을 수 있나요? 또 숨쉬기 힘들어 보이는 모습은 있나요?",
                "보호자: 물은 조금 마실 수 있지만 아침밥은 거의 먹지 않았습니다.",
                "접수 직원: 알겠습니다. 진찰 전에 조금 더 자세한 상태를 확인하겠습니다."
            ],

            vi: [
                "Phụ huynh: Con tôi bị sốt từ tối qua nên tôi muốn cho cháu được khám.",
                "Nhân viên tiếp nhận: Tôi hiểu. Xin hãy cho biết nhiệt độ hiện tại và những triệu chứng khác khiến bạn lo lắng.",
                "Phụ huynh: Sáng nay là 38,5 độ. Cháu cũng ho và ít khỏe hơn bình thường.",
                "Nhân viên tiếp nhận: Cháu có uống được nước hoặc ăn được không? Cháu có vẻ khó thở không?",
                "Phụ huynh: Cháu uống được một ít nước nhưng hầu như không ăn sáng.",
                "Nhân viên tiếp nhận: Tôi hiểu. Trước khi khám, xin phép hỏi thêm một số chi tiết về tình trạng của cháu."
            ]
        }
    ),

    // =====================================================
    // 002 発熱と子どもの様子を医師に伝える
    // =====================================================

    makeB1ChildHospitalDialogue(
        "b1_childhospital_002",
        "発熱と子どもの様子を医師に伝える",

        [
            {
                label: "話者B",
                key: "doctor",
                name: "医師",
                line: "今日はどのような症状があって来院されましたか。",
                target: "きょうはどのようなしょうじょうがあってらいいんされましたか",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>はどのような<ruby>症状<rt>しょうじょう</rt></ruby>があって<ruby>来院<rt>らいいん</rt></ruby>されましたか。",
                romaji: "Kyō wa dono yō na shōjō ga atte raiin saremashita ka."
            },
            {
                label: "話者A",
                key: "parent",
                name: "保護者",
                line: "昨日の夜から熱があり、今日は朝からずっと横になっています。",
                target: "きのうのよるからねつがあり きょうはあさからずっとよこになっています",
                ruby: "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>から<ruby>熱<rt>ねつ</rt></ruby>があり、<ruby>今日<rt>きょう</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>からずっと<ruby>横<rt>よこ</rt></ruby>になっています。",
                romaji: "Kinō no yoru kara netsu ga ari, kyō wa asa kara zutto yoko ni natte imasu."
            },
            {
                label: "話者B",
                key: "doctor",
                name: "医師",
                line: "一番高かったときの体温は何度でしたか。水分は取れていますか。",
                target: "いちばんたかかったときのたいおんはなんどでしたか すいぶんはとれていますか",
                ruby: "<ruby>一番<rt>いちばん</rt></ruby><ruby>高<rt>たか</rt></ruby>かったときの<ruby>体温<rt>たいおん</rt></ruby>は<ruby>何度<rt>なんど</rt></ruby>でしたか。<ruby>水分<rt>すいぶん</rt></ruby>は<ruby>取<rt>と</rt></ruby>れていますか。",
                romaji: "Ichiban takakatta toki no taion wa nando deshita ka. Suibun wa torete imasu ka."
            },
            {
                label: "話者A",
                key: "parent",
                name: "保護者",
                line: "一番高いときは三十九度くらいでした。少しずつですが、水は飲んでいます。",
                target: "いちばんたかいときはさんじゅうきゅうどくらいでした すこしずつですが みずはのんでいます",
                ruby: "<ruby>一番<rt>いちばん</rt></ruby><ruby>高<rt>たか</rt></ruby>いときは<ruby>三十九度<rt>さんじゅうきゅうど</rt></ruby>くらいでした。<ruby>少<rt>すこ</rt></ruby>しずつですが、<ruby>水<rt>みず</rt></ruby>は<ruby>飲<rt>の</rt></ruby>んでいます。",
                romaji: "Ichiban takai toki wa sanjūkyū-do kurai deshita. Sukoshizutsu desu ga, mizu wa nonde imasu."
            },
            {
                label: "話者B",
                key: "doctor",
                name: "医師",
                line: "呼びかけたときの反応や、おしっこの回数に変化はありますか。",
                target: "よびかけたときのはんのうや おしっこのかいすうにへんかはありますか",
                ruby: "<ruby>呼<rt>よ</rt></ruby>びかけたときの<ruby>反応<rt>はんのう</rt></ruby>や、おしっこの<ruby>回数<rt>かいすう</rt></ruby>に<ruby>変化<rt>へんか</rt></ruby>はありますか。",
                romaji: "Yobikaketa toki no hannō ya, oshikko no kaisū ni henka wa arimasu ka."
            },
            {
                label: "話者A",
                key: "parent",
                name: "保護者",
                line: "呼べば返事はしますが、いつもより眠そうです。おしっこも少ない気がします。",
                target: "よべばへんじはしますが いつもよりねむそうです おしっこもすくないきがします",
                ruby: "<ruby>呼<rt>よ</rt></ruby>べば<ruby>返事<rt>へんじ</rt></ruby>はしますが、いつもより<ruby>眠<rt>ねむ</rt></ruby>そうです。おしっこも<ruby>少<rt>すく</rt></ruby>ない<ruby>気<rt>き</rt></ruby>がします。",
                romaji: "Yobeba henji wa shimasu ga, itsumo yori nemusō desu. Oshikko mo sukunai ki ga shimasu."
            }
        ],

        {
            ja: [
                "医師：今日はどのような症状があって来院されましたか。",
                "保護者：昨日の夜から熱があり、今日は朝からずっと横になっています。",
                "医師：一番高かったときの体温は何度でしたか。水分は取れていますか。",
                "保護者：一番高いときは三十九度くらいでした。少しずつですが、水は飲んでいます。",
                "医師：呼びかけたときの反応や、おしっこの回数に変化はありますか。",
                "保護者：呼べば返事はしますが、いつもより眠そうです。おしっこも少ない気がします。"
            ],

            en: [
                "Doctor: What symptoms brought you to the hospital today?",
                "Parent: My child has had a fever since last night and has been lying down all morning.",
                "Doctor: What was the highest temperature? Is your child able to drink fluids?",
                "Parent: The highest was about 39 degrees. My child is drinking water little by little.",
                "Doctor: Have you noticed any changes in how your child responds when called or in how often your child urinates?",
                "Parent: My child responds when called but seems sleepier than usual. I also think there has been less urination."
            ],

            "zh-CN": [
                "医生：今天因为什么症状来医院？",
                "家长：孩子从昨天晚上开始发烧，今天从早上一直躺着。",
                "医生：最高体温是多少？能喝水吗？",
                "家长：最高大约三十九度。虽然不多，但在一点一点喝水。",
                "医生：叫孩子时的反应，或者小便次数有没有变化？",
                "家长：叫他会回答，但是比平时更困。我觉得小便也少了一些。"
            ],

            "zh-TW": [
                "醫師：今天因為什麼症狀來醫院？",
                "家長：孩子從昨天晚上開始發燒，今天從早上一直躺著。",
                "醫師：最高體溫是多少？能喝水嗎？",
                "家長：最高大約三十九度。雖然不多，但在一點一點喝水。",
                "醫師：叫孩子時的反應，或者小便次數有沒有變化？",
                "家長：叫他會回答，但是比平時更睏。我覺得小便也少了一些。"
            ],

            ko: [
                "의사: 오늘 어떤 증상으로 병원에 오셨나요?",
                "보호자: 어젯밤부터 열이 있고 오늘은 아침부터 계속 누워 있습니다.",
                "의사: 가장 높았을 때 체온은 몇 도였나요? 물은 마실 수 있나요?",
                "보호자: 가장 높을 때는 약 39도였습니다. 조금씩이지만 물은 마시고 있습니다.",
                "의사: 불렀을 때 반응이나 소변 횟수에 변화가 있나요?",
                "보호자: 부르면 대답은 하지만 평소보다 졸려 보입니다. 소변도 적은 것 같습니다."
            ],

            vi: [
                "Bác sĩ: Hôm nay cháu có triệu chứng gì nên đến bệnh viện?",
                "Phụ huynh: Cháu bị sốt từ tối qua và hôm nay nằm suốt từ sáng.",
                "Bác sĩ: Nhiệt độ cao nhất là bao nhiêu? Cháu có uống được nước không?",
                "Phụ huynh: Cao nhất khoảng 39 độ. Cháu vẫn uống nước từng ít một.",
                "Bác sĩ: Khi gọi cháu, phản ứng của cháu hoặc số lần đi tiểu có thay đổi không?",
                "Phụ huynh: Khi gọi thì cháu vẫn trả lời nhưng có vẻ buồn ngủ hơn bình thường. Tôi cũng cảm thấy cháu đi tiểu ít hơn."
            ]
        }
    ),

    // =====================================================
    // 003 症状がどのように変化したか伝える
    // =====================================================

    makeB1ChildHospitalDialogue(
        "b1_childhospital_003",
        "症状がどのように変化したか伝える",

        [
            {
                label: "話者B",
                key: "doctor",
                name: "医師",
                line: "症状はいつごろ始まり、その後どのように変わりましたか。",
                target: "しょうじょうはいつごろはじまり そのごどのようにかわりましたか",
                ruby: "<ruby>症状<rt>しょうじょう</rt></ruby>はいつごろ<ruby>始<rt>はじ</rt></ruby>まり、その<ruby>後<rt>ご</rt></ruby>どのように<ruby>変<rt>か</rt></ruby>わりましたか。",
                romaji: "Shōjō wa itsu goro hajimari, sono go dono yō ni kawarimashita ka."
            },
            {
                label: "話者A",
                key: "parent",
                name: "保護者",
                line: "三日前に鼻水が出始めて、昨日からせきが増えてきました。",
                target: "みっかまえにはなみずがではじめて きのうからせきがふえてきました",
                ruby: "<ruby>三日前<rt>みっかまえ</rt></ruby>に<ruby>鼻水<rt>はなみず</rt></ruby>が<ruby>出始<rt>ではじ</rt></ruby>めて、<ruby>昨日<rt>きのう</rt></ruby>からせきが<ruby>増<rt>ふ</rt></ruby>えてきました。",
                romaji: "Mikka mae ni hanamizu ga dehajimete, kinō kara seki ga fuete kimashita."
            },
            {
                label: "話者B",
                key: "doctor",
                name: "医師",
                line: "せきは昼と夜で違いがありますか。眠れているでしょうか。",
                target: "せきはひるとよるでちがいがありますか ねむれているでしょうか",
                ruby: "せきは<ruby>昼<rt>ひる</rt></ruby>と<ruby>夜<rt>よる</rt></ruby>で<ruby>違<rt>ちが</rt></ruby>いがありますか。<ruby>眠<rt>ねむ</rt></ruby>れているでしょうか。",
                romaji: "Seki wa hiru to yoru de chigai ga arimasu ka. Nemurete iru deshō ka."
            },
            {
                label: "話者A",
                key: "parent",
                name: "保護者",
                line: "夜になるとせきが増えて、昨夜は何度か目を覚ましました。",
                target: "よるになるとせきがふえて さくやはなんどかめをさましました",
                ruby: "<ruby>夜<rt>よる</rt></ruby>になるとせきが<ruby>増<rt>ふ</rt></ruby>えて、<ruby>昨夜<rt>さくや</rt></ruby>は<ruby>何度<rt>なんど</rt></ruby>か<ruby>目<rt>め</rt></ruby>を<ruby>覚<rt>さ</rt></ruby>ましました。",
                romaji: "Yoru ni naru to seki ga fuete, sakuya wa nando ka me o samashimashita."
            },
            {
                label: "話者B",
                key: "doctor",
                name: "医師",
                line: "食欲や元気については、普段と比べてどうですか。",
                target: "しょくよくやげんきについては ふだんとくらべてどうですか",
                ruby: "<ruby>食欲<rt>しょくよく</rt></ruby>や<ruby>元気<rt>げんき</rt></ruby>については、<ruby>普段<rt>ふだん</rt></ruby>と<ruby>比<rt>くら</rt></ruby>べてどうですか。",
                romaji: "Shokuyoku ya genki ni tsuite wa, fudan to kurabete dō desu ka."
            },
            {
                label: "話者A",
                key: "parent",
                name: "保護者",
                line: "食べる量は少し減りましたが、昼間は少し遊ぶこともできています。",
                target: "たべるりょうはすこしへりましたが ひるまはすこしあそぶこともできています",
                ruby: "<ruby>食<rt>た</rt></ruby>べる<ruby>量<rt>りょう</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>減<rt>へ</rt></ruby>りましたが、<ruby>昼間<rt>ひるま</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>遊<rt>あそ</rt></ruby>ぶこともできています。",
                romaji: "Taberu ryō wa sukoshi herimashita ga, hiruma wa sukoshi asobu koto mo dekite imasu."
            }
        ],

        {
            ja: [
                "医師：症状はいつごろ始まり、その後どのように変わりましたか。",
                "保護者：三日前に鼻水が出始めて、昨日からせきが増えてきました。",
                "医師：せきは昼と夜で違いがありますか。眠れているでしょうか。",
                "保護者：夜になるとせきが増えて、昨夜は何度か目を覚ましました。",
                "医師：食欲や元気については、普段と比べてどうですか。",
                "保護者：食べる量は少し減りましたが、昼間は少し遊ぶこともできています。"
            ],

            en: [
                "Doctor: When did the symptoms begin, and how have they changed since then?",
                "Parent: My child started having a runny nose three days ago, and the coughing has increased since yesterday.",
                "Doctor: Is the cough different during the day and at night? Is your child able to sleep?",
                "Parent: The coughing gets worse at night, and my child woke up several times last night.",
                "Doctor: How are your child's appetite and energy compared with usual?",
                "Parent: My child is eating a little less but can still play a little during the day."
            ],

            "zh-CN": [
                "医生：症状是什么时候开始的？之后有什么变化？",
                "家长：三天前开始流鼻涕，从昨天开始咳嗽变多了。",
                "医生：白天和晚上的咳嗽有区别吗？能睡觉吗？",
                "家长：到了晚上咳嗽会增加，昨天晚上醒了好几次。",
                "医生：和往常相比，食欲和精神怎么样？",
                "家长：吃的量稍微少了一些，但是白天还能玩一会儿。"
            ],

            "zh-TW": [
                "醫師：症狀是什麼時候開始的？之後有什麼變化？",
                "家長：三天前開始流鼻水，從昨天開始咳嗽變多了。",
                "醫師：白天和晚上的咳嗽有區別嗎？能睡覺嗎？",
                "家長：到了晚上咳嗽會增加，昨天晚上醒了好幾次。",
                "醫師：和往常相比，食慾和精神怎麼樣？",
                "家長：吃的量稍微少了一些，但是白天還能玩一會兒。"
            ],

            ko: [
                "의사: 증상은 언제쯤 시작되었고 그 후 어떻게 변했나요?",
                "보호자: 사흘 전에 콧물이 나기 시작했고 어제부터 기침이 늘었습니다.",
                "의사: 기침은 낮과 밤에 차이가 있나요? 잠은 잘 수 있나요?",
                "보호자: 밤이 되면 기침이 늘고 어젯밤에는 몇 번 잠에서 깼습니다.",
                "의사: 식욕과 기운은 평소와 비교해서 어떤가요?",
                "보호자: 먹는 양은 조금 줄었지만 낮에는 조금 놀기도 합니다."
            ],

            vi: [
                "Bác sĩ: Các triệu chứng bắt đầu từ khi nào và sau đó thay đổi như thế nào?",
                "Phụ huynh: Ba ngày trước cháu bắt đầu chảy nước mũi và từ hôm qua ho nhiều hơn.",
                "Bác sĩ: Ho ban ngày và ban đêm có khác nhau không? Cháu có ngủ được không?",
                "Phụ huynh: Ban đêm ho nhiều hơn và tối qua cháu thức giấc vài lần.",
                "Bác sĩ: So với bình thường, sự thèm ăn và mức độ khỏe mạnh của cháu thế nào?",
                "Phụ huynh: Cháu ăn ít hơn một chút nhưng ban ngày vẫn có thể chơi một lúc."
            ]
        }
    ),

    // =====================================================
    // 004 アレルギーや服用中の薬について伝える
    // =====================================================

    makeB1ChildHospitalDialogue(
        "b1_childhospital_004",
        "アレルギーや服用中の薬について伝える",

        [
            {
                label: "話者B",
                key: "doctor",
                name: "医師",
                line: "お子さんにアレルギーや持病はありますか。",
                target: "おこさんにあれるぎーやじびょうはありますか",
                ruby: "お<ruby>子<rt>こ</rt></ruby>さんにアレルギーや<ruby>持病<rt>じびょう</rt></ruby>はありますか。",
                romaji: "Okosan ni arerugī ya jibyō wa arimasu ka."
            },
            {
                label: "話者A",
                key: "parent",
                name: "保護者",
                line: "卵のアレルギーがあります。それから、ぜんそくで定期的に薬を使っています。",
                target: "たまごのあれるぎーがあります それから ぜんそくでていきてきにくすりをつかっています",
                ruby: "<ruby>卵<rt>たまご</rt></ruby>のアレルギーがあります。それから、ぜんそくで<ruby>定期的<rt>ていきてき</rt></ruby>に<ruby>薬<rt>くすり</rt></ruby>を<ruby>使<rt>つか</rt></ruby>っています。",
                romaji: "Tamago no arerugī ga arimasu. Sorekara, zensoku de teikiteki ni kusuri o tsukatte imasu."
            },
            {
                label: "話者B",
                key: "doctor",
                name: "医師",
                line: "今使っている薬の名前や量はわかりますか。",
                target: "いまつかっているくすりのなまえやりょうはわかりますか",
                ruby: "<ruby>今<rt>いま</rt></ruby><ruby>使<rt>つか</rt></ruby>っている<ruby>薬<rt>くすり</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>や<ruby>量<rt>りょう</rt></ruby>はわかりますか。",
                romaji: "Ima tsukatte iru kusuri no namae ya ryō wa wakarimasu ka."
            },
            {
                label: "話者A",
                key: "parent",
                name: "保護者",
                line: "お薬手帳を持ってきました。ここに薬の名前と使い方が書いてあります。",
                target: "おくすりてちょうをもってきました ここにくすりのなまえとつかいかたがかいてあります",
                ruby: "お<ruby>薬手帳<rt>くすりてちょう</rt></ruby>を<ruby>持<rt>も</rt></ruby>ってきました。ここに<ruby>薬<rt>くすり</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>と<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>が<ruby>書<rt>か</rt></ruby>いてあります。",
                romaji: "Okusuri techō o motte kimashita. Koko ni kusuri no namae to tsukaikata ga kaite arimasu."
            },
            {
                label: "話者B",
                key: "doctor",
                name: "医師",
                line: "ありがとうございます。以前、薬を飲んで体に異常が出たことはありますか。",
                target: "ありがとうございます いぜん くすりをのんでからだにいじょうがでたことはありますか",
                ruby: "ありがとうございます。<ruby>以前<rt>いぜん</rt></ruby>、<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んで<ruby>体<rt>からだ</rt></ruby>に<ruby>異常<rt>いじょう</rt></ruby>が<ruby>出<rt>で</rt></ruby>たことはありますか。",
                romaji: "Arigatō gozaimasu. Izen, kusuri o nonde karada ni ijō ga deta koto wa arimasu ka."
            },
            {
                label: "話者A",
                key: "parent",
                name: "保護者",
                line: "今まで薬で問題が出たことはありませんが、念のため確認してほしいです。",
                target: "いままでくすりでもんだいがでたことはありませんが ねんのためかくにんしてほしいです",
                ruby: "<ruby>今<rt>いま</rt></ruby>まで<ruby>薬<rt>くすり</rt></ruby>で<ruby>問題<rt>もんだい</rt></ruby>が<ruby>出<rt>で</rt></ruby>たことはありませんが、<ruby>念<rt>ねん</rt></ruby>のため<ruby>確認<rt>かくにん</rt></ruby>してほしいです。",
                romaji: "Ima made kusuri de mondai ga deta koto wa arimasen ga, nen no tame kakunin shite hoshii desu."
            }
        ],

        {
            ja: [
                "医師：お子さんにアレルギーや持病はありますか。",
                "保護者：卵のアレルギーがあります。それから、ぜんそくで定期的に薬を使っています。",
                "医師：今使っている薬の名前や量はわかりますか。",
                "保護者：お薬手帳を持ってきました。ここに薬の名前と使い方が書いてあります。",
                "医師：ありがとうございます。以前、薬を飲んで体に異常が出たことはありますか。",
                "保護者：今まで薬で問題が出たことはありませんが、念のため確認してほしいです。"
            ],

            en: [
                "Doctor: Does your child have any allergies or chronic medical conditions?",
                "Parent: My child has an egg allergy. My child also has asthma and regularly uses medication.",
                "Doctor: Do you know the names and doses of the medicines currently being used?",
                "Parent: I brought the medication notebook. The names and instructions are written here.",
                "Doctor: Thank you. Has your child ever had an unusual reaction after taking medicine?",
                "Parent: There have been no problems with medicine so far, but I would like you to check just to be safe."
            ],

            "zh-CN": [
                "医生：孩子有过敏或慢性疾病吗？",
                "家长：有鸡蛋过敏。另外，因为有哮喘，所以定期使用药物。",
                "医生：知道现在使用的药物名称和剂量吗？",
                "家长：我带来了用药手册。这里写着药物名称和使用方法。",
                "医生：谢谢。以前吃药以后出现过身体异常吗？",
                "家长：到目前为止没有因为药物出现问题，不过为了保险起见，希望您确认一下。"
            ],

            "zh-TW": [
                "醫師：孩子有過敏或慢性疾病嗎？",
                "家長：有雞蛋過敏。另外，因為有氣喘，所以定期使用藥物。",
                "醫師：知道現在使用的藥物名稱和劑量嗎？",
                "家長：我帶來了用藥手冊。這裡寫著藥物名稱和使用方法。",
                "醫師：謝謝。以前吃藥以後出現過身體異常嗎？",
                "家長：到目前為止沒有因為藥物出現問題，不過為了保險起見，希望您確認一下。"
            ],

            ko: [
                "의사: 아이에게 알레르기나 지병이 있나요?",
                "보호자: 계란 알레르기가 있습니다. 그리고 천식 때문에 정기적으로 약을 사용하고 있습니다.",
                "의사: 현재 사용하는 약의 이름과 양을 알고 있나요?",
                "보호자: 약 수첩을 가져왔습니다. 여기에 약 이름과 사용 방법이 적혀 있습니다.",
                "의사: 감사합니다. 이전에 약을 먹고 몸에 이상이 생긴 적이 있나요?",
                "보호자: 지금까지 약으로 문제가 생긴 적은 없지만 혹시 모르니 확인해 주셨으면 합니다."
            ],

            vi: [
                "Bác sĩ: Cháu có dị ứng hoặc bệnh nền nào không?",
                "Phụ huynh: Cháu dị ứng với trứng. Ngoài ra, cháu bị hen và thường xuyên dùng thuốc.",
                "Bác sĩ: Bạn có biết tên và liều lượng thuốc cháu đang dùng không?",
                "Phụ huynh: Tôi đã mang theo sổ thuốc. Tên thuốc và cách sử dụng được ghi ở đây.",
                "Bác sĩ: Cảm ơn. Trước đây cháu có từng có phản ứng bất thường sau khi dùng thuốc không?",
                "Phụ huynh: Cho đến nay chưa từng có vấn đề do thuốc, nhưng tôi muốn bác sĩ kiểm tra để chắc chắn."
            ]
        }
    ),

    // =====================================================
    // 005 診察や検査の説明を確認する
    // =====================================================

    makeB1ChildHospitalDialogue(
        "b1_childhospital_005",
        "診察や検査の説明を確認する",

        [
            {
                label: "話者B",
                key: "doctor",
                name: "医師",
                line: "これから喉や胸の状態を確認して、必要に応じて検査を考えます。",
                target: "これからのどやむねのじょうたいをかくにんして ひつようにおうじてけんさをかんがえます",
                ruby: "これから<ruby>喉<rt>のど</rt></ruby>や<ruby>胸<rt>むね</rt></ruby>の<ruby>状態<rt>じょうたい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>して、<ruby>必要<rt>ひつよう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>検査<rt>けんさ</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えます。",
                romaji: "Kore kara nodo ya mune no jōtai o kakunin shite, hitsuyō ni ōjite kensa o kangaemasu."
            },
            {
                label: "話者A",
                key: "parent",
                name: "保護者",
                line: "検査が必要になった場合は、どのようなことをするのか説明していただけますか。",
                target: "けんさがひつようになったばあいは どのようなことをするのかせつめいしていただけますか",
                ruby: "<ruby>検査<rt>けんさ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>になった<ruby>場合<rt>ばあい</rt></ruby>は、どのようなことをするのか<ruby>説明<rt>せつめい</rt></ruby>していただけますか。",
                romaji: "Kensa ga hitsuyō ni natta baai wa, dono yō na koto o suru no ka setsumei shite itadakemasu ka."
            },
            {
                label: "話者B",
                key: "doctor",
                name: "医師",
                line: "もちろんです。検査の目的や方法について、必要になった時点で説明します。",
                target: "もちろんです けんさのもくてきやほうほうについて ひつようになったじてんでせつめいします",
                ruby: "もちろんです。<ruby>検査<rt>けんさ</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>や<ruby>方法<rt>ほうほう</rt></ruby>について、<ruby>必要<rt>ひつよう</rt></ruby>になった<ruby>時点<rt>じてん</rt></ruby>で<ruby>説明<rt>せつめい</rt></ruby>します。",
                romaji: "Mochiron desu. Kensa no mokuteki ya hōhō ni tsuite, hitsuyō ni natta jiten de setsumei shimasu."
            },
            {
                label: "話者A",
                key: "parent",
                name: "保護者",
                line: "子どもが病院を怖がっているので、できるだけ事前に話しておきたいです。",
                target: "こどもがびょういんをこわがっているので できるだけじぜんにはなしておきたいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>病院<rt>びょういん</rt></ruby>を<ruby>怖<rt>こわ</rt></ruby>がっているので、できるだけ<ruby>事前<rt>じぜん</rt></ruby>に<ruby>話<rt>はな</rt></ruby>しておきたいです。",
                romaji: "Kodomo ga byōin o kowagatte iru node, dekiru dake jizen ni hanashite okitai desu."
            },
            {
                label: "話者B",
                key: "doctor",
                name: "医師",
                line: "わかりました。お子さんにも理解しやすい言葉で説明しながら進めます。",
                target: "わかりました おこさんにもりかいしやすいことばでせつめいしながらすすめます",
                ruby: "わかりました。お<ruby>子<rt>こ</rt></ruby>さんにも<ruby>理解<rt>りかい</rt></ruby>しやすい<ruby>言葉<rt>ことば</rt></ruby>で<ruby>説明<rt>せつめい</rt></ruby>しながら<ruby>進<rt>すす</rt></ruby>めます。",
                romaji: "Wakarimashita. Okosan ni mo rikai shiyasui kotoba de setsumei shinagara susumemasu."
            },
            {
                label: "話者A",
                key: "parent",
                name: "保護者",
                line: "ありがとうございます。わからないことがあれば、その場で確認してもいいですか。",
                target: "ありがとうございます わからないことがあれば そのばでかくにんしてもいいですか",
                ruby: "ありがとうございます。わからないことがあれば、その<ruby>場<rt>ば</rt></ruby>で<ruby>確認<rt>かくにん</rt></ruby>してもいいですか。",
                romaji: "Arigatō gozaimasu. Wakaranai koto ga areba, sono ba de kakunin shite mo ii desu ka."
            }
        ],

        {
            ja: [
                "医師：これから喉や胸の状態を確認して、必要に応じて検査を考えます。",
                "保護者：検査が必要になった場合は、どのようなことをするのか説明していただけますか。",
                "医師：もちろんです。検査の目的や方法について、必要になった時点で説明します。",
                "保護者：子どもが病院を怖がっているので、できるだけ事前に話しておきたいです。",
                "医師：わかりました。お子さんにも理解しやすい言葉で説明しながら進めます。",
                "保護者：ありがとうございます。わからないことがあれば、その場で確認してもいいですか。"
            ],

            en: [
                "Doctor: I will check your child's throat and chest, and we will consider tests if necessary.",
                "Parent: If a test is needed, could you explain what will be done?",
                "Doctor: Of course. If a test becomes necessary, I will explain its purpose and how it will be performed.",
                "Parent: My child is afraid of hospitals, so I would like to explain things beforehand as much as possible.",
                "Doctor: I understand. We will proceed while explaining things in words your child can understand.",
                "Parent: Thank you. If there is something I do not understand, may I ask about it at the time?"
            ],

            "zh-CN": [
                "医生：接下来我会检查孩子的喉咙和胸部，根据需要考虑是否进行检查。",
                "家长：如果需要检查，可以说明一下要做什么吗？",
                "医生：当然可以。如果需要检查，我会说明检查的目的和方法。",
                "家长：孩子很害怕医院，所以我想尽量提前告诉他。",
                "医生：明白了。我们会一边用孩子容易理解的语言说明，一边进行。",
                "家长：谢谢。有不明白的事情，可以当场确认吗？"
            ],

            "zh-TW": [
                "醫師：接下來我會檢查孩子的喉嚨和胸部，根據需要考慮是否進行檢查。",
                "家長：如果需要檢查，可以說明一下要做什麼嗎？",
                "醫師：當然可以。如果需要檢查，我會說明檢查的目的和方法。",
                "家長：孩子很害怕醫院，所以我想盡量提前告訴他。",
                "醫師：明白了。我們會一邊用孩子容易理解的語言說明，一邊進行。",
                "家長：謝謝。有不明白的事情，可以當場確認嗎？"
            ],

            ko: [
                "의사: 이제 아이의 목과 가슴 상태를 확인하고 필요에 따라 검사를 고려하겠습니다.",
                "보호자: 검사가 필요하면 어떤 것을 하는지 설명해 주실 수 있나요?",
                "의사: 물론입니다. 검사가 필요해지면 목적과 방법을 설명하겠습니다.",
                "보호자: 아이가 병원을 무서워해서 가능한 한 미리 이야기해 주고 싶습니다.",
                "의사: 알겠습니다. 아이도 이해하기 쉬운 말로 설명하면서 진행하겠습니다.",
                "보호자: 감사합니다. 모르는 것이 있으면 그 자리에서 확인해도 될까요?"
            ],

            vi: [
                "Bác sĩ: Bây giờ tôi sẽ kiểm tra cổ họng và ngực của cháu, sau đó cân nhắc xét nghiệm nếu cần.",
                "Phụ huynh: Nếu cần xét nghiệm, bác sĩ có thể giải thích sẽ làm gì không?",
                "Bác sĩ: Tất nhiên. Khi cần xét nghiệm, tôi sẽ giải thích mục đích và cách thực hiện.",
                "Phụ huynh: Con tôi sợ bệnh viện nên tôi muốn giải thích trước cho cháu càng nhiều càng tốt.",
                "Bác sĩ: Tôi hiểu. Chúng tôi sẽ tiến hành trong khi giải thích bằng những từ cháu dễ hiểu.",
                "Phụ huynh: Cảm ơn. Nếu có điều gì không hiểu, tôi có thể hỏi ngay lúc đó không?"
            ]
        }
    ),

    // =====================================================
    // 006 薬の飲ませ方を薬剤師に確認する
    // =====================================================

    makeB1ChildHospitalDialogue(
        "b1_childhospital_006",
        "薬の飲ませ方を薬剤師に確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもの薬を受け取りましたが、飲ませ方をもう一度確認したいです。",
                target: "こどものくすりをうけとりましたが のませかたをもういちどかくにんしたいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもの<ruby>薬<rt>くすり</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>りましたが、<ruby>飲<rt>の</rt></ruby>ませ<ruby>方<rt>かた</rt></ruby>をもう<ruby>一度<rt>いちど</rt></ruby><ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Kodomo no kusuri o uketorimashita ga, nomasekata o mō ichido kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "はい。こちらの薬は、処方された回数と量を守って飲ませてください。",
                target: "はい こちらのくすりは しょほうされたかいすうとりょうをまもってのませてください",
                ruby: "はい。こちらの<ruby>薬<rt>くすり</rt></ruby>は、<ruby>処方<rt>しょほう</rt></ruby>された<ruby>回数<rt>かいすう</rt></ruby>と<ruby>量<rt>りょう</rt></ruby>を<ruby>守<rt>まも</rt></ruby>って<ruby>飲<rt>の</rt></ruby>ませてください。",
                romaji: "Hai. Kochira no kusuri wa, shohō sareta kaisū to ryō o mamotte nomasete kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが薬を嫌がって飲まない場合は、どうしたらいいでしょうか。",
                target: "こどもがくすりをいやがってのまないばあいは どうしたらいいでしょうか",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>薬<rt>くすり</rt></ruby>を<ruby>嫌<rt>いや</rt></ruby>がって<ruby>飲<rt>の</rt></ruby>まない<ruby>場合<rt>ばあい</rt></ruby>は、どうしたらいいでしょうか。",
                romaji: "Kodomo ga kusuri o iyagatte nomanai baai wa, dō shitara ii deshō ka."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "薬によって注意点が違うので、自己判断で何かに混ぜる前に確認してください。",
                target: "くすりによってちゅういてんがちがうので じこはんだんでなにかにまぜるまえにかくにんしてください",
                ruby: "<ruby>薬<rt>くすり</rt></ruby>によって<ruby>注意点<rt>ちゅういてん</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>うので、<ruby>自己判断<rt>じこはんだん</rt></ruby>で<ruby>何<rt>なに</rt></ruby>かに<ruby>混<rt>ま</rt></ruby>ぜる<ruby>前<rt>まえ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Kusuri ni yotte chūiten ga chigau node, jikohandan de nanika ni mazeru mae ni kakunin shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "もし飲ませるのを忘れた場合も、自分で量を変えない方がいいですか。",
                target: "もしのませるのをわすれたばあいも じぶんでりょうをかえないほうがいいですか",
                ruby: "もし<ruby>飲<rt>の</rt></ruby>ませるのを<ruby>忘<rt>わす</rt></ruby>れた<ruby>場合<rt>ばあい</rt></ruby>も、<ruby>自分<rt>じぶん</rt></ruby>で<ruby>量<rt>りょう</rt></ruby>を<ruby>変<rt>か</rt></ruby>えない<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Moshi nomaseru no o wasureta baai mo, jibun de ryō o kaenai hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "はい。飲み忘れたときの対応は薬によって異なるので、わからない場合は薬局や医療機関に確認してください。",
                target: "はい のみわすれたときのたいおうはくすりによってことなるので わからないばあいはやっきょくやいりょうきかんにかくにんしてください",
                ruby: "はい。<ruby>飲<rt>の</rt></ruby>み<ruby>忘<rt>わす</rt></ruby>れたときの<ruby>対応<rt>たいおう</rt></ruby>は<ruby>薬<rt>くすり</rt></ruby>によって<ruby>異<rt>こと</rt></ruby>なるので、わからない<ruby>場合<rt>ばあい</rt></ruby>は<ruby>薬局<rt>やっきょく</rt></ruby>や<ruby>医療機関<rt>いりょうきかん</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Hai. Nomiwasureta toki no taiō wa kusuri ni yotte kotonaru node, wakaranai baai wa yakkyoku ya iryō kikan ni kakunin shite kudasai."
            }
        ],

        {
            ja: [
                "保護者：子どもの薬を受け取りましたが、飲ませ方をもう一度確認したいです。",
                "薬剤師：はい。こちらの薬は、処方された回数と量を守って飲ませてください。",
                "保護者：子どもが薬を嫌がって飲まない場合は、どうしたらいいでしょうか。",
                "薬剤師：薬によって注意点が違うので、自己判断で何かに混ぜる前に確認してください。",
                "保護者：もし飲ませるのを忘れた場合も、自分で量を変えない方がいいですか。",
                "薬剤師：はい。飲み忘れたときの対応は薬によって異なるので、わからない場合は薬局や医療機関に確認してください。"
            ],

            en: [
                "Parent: I received my child's medicine, but I would like to check once again how to give it.",
                "Pharmacist: Certainly. Please follow the prescribed number of doses and amount.",
                "Parent: What should I do if my child dislikes the medicine and refuses to take it?",
                "Pharmacist: Precautions differ depending on the medicine, so please check before mixing it with anything on your own.",
                "Parent: If I forget to give a dose, should I avoid changing the amount by myself?",
                "Pharmacist: Yes. What to do after a missed dose differs by medicine, so if you are unsure, please check with the pharmacy or medical institution."
            ],

            "zh-CN": [
                "家长：我拿到了孩子的药，但是想再次确认一下服药方法。",
                "药剂师：好的。请按照处方规定的次数和剂量给孩子服用。",
                "家长：如果孩子不喜欢药、不肯吃，怎么办？",
                "药剂师：不同药物的注意事项不同，所以在自行混入其他东西之前请先确认。",
                "家长：如果忘记给孩子吃药，也不要自己改变剂量比较好吗？",
                "药剂师：是的。漏服后的处理方法因药物而异，如果不清楚，请向药房或医疗机构确认。"
            ],

            "zh-TW": [
                "家長：我拿到了孩子的藥，但是想再次確認一下服藥方法。",
                "藥師：好的。請按照處方規定的次數和劑量給孩子服用。",
                "家長：如果孩子不喜歡藥、不肯吃，怎麼辦？",
                "藥師：不同藥物的注意事項不同，所以在自行混入其他東西之前請先確認。",
                "家長：如果忘記給孩子吃藥，也不要自己改變劑量比較好嗎？",
                "藥師：是的。漏服後的處理方法因藥物而異，如果不清楚，請向藥局或醫療機構確認。"
            ],

            ko: [
                "보호자: 아이의 약을 받았는데 먹이는 방법을 다시 한번 확인하고 싶습니다.",
                "약사: 네. 처방된 횟수와 양을 지켜서 먹여 주세요.",
                "보호자: 아이가 약을 싫어해서 먹지 않을 때는 어떻게 해야 하나요?",
                "약사: 약에 따라 주의할 점이 다르므로 스스로 판단해서 다른 것에 섞기 전에 확인해 주세요.",
                "보호자: 약을 먹이는 것을 잊었을 때도 제가 양을 바꾸지 않는 편이 좋나요?",
                "약사: 네. 복용을 잊었을 때의 대응은 약마다 다르므로 잘 모르겠으면 약국이나 의료기관에 확인해 주세요."
            ],

            vi: [
                "Phụ huynh: Tôi đã nhận thuốc cho con nhưng muốn xác nhận lại cách cho cháu uống.",
                "Dược sĩ: Vâng. Hãy cho cháu dùng đúng số lần và liều lượng được kê đơn.",
                "Phụ huynh: Nếu cháu ghét thuốc và không chịu uống thì tôi nên làm gì?",
                "Dược sĩ: Mỗi loại thuốc có những điều cần chú ý khác nhau, nên hãy xác nhận trước khi tự ý trộn thuốc với thứ gì đó.",
                "Phụ huynh: Nếu tôi quên cho cháu uống thuốc, tôi cũng không nên tự thay đổi liều lượng phải không?",
                "Dược sĩ: Đúng vậy. Cách xử lý khi quên một liều khác nhau tùy thuốc, nên nếu không chắc chắn, hãy hỏi nhà thuốc hoặc cơ sở y tế."
            ]
        }
    ),

    // =====================================================
    // 007 帰宅後に注意することを確認する
    // =====================================================

    makeB1ChildHospitalDialogue(
        "b1_childhospital_007",
        "帰宅後に注意することを確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "家に帰ったあと、どのようなことに注意して子どもの様子を見ればいいですか。",
                target: "いえにかえったあと どのようなことにちゅういしてこどものようすをみればいいですか",
                ruby: "<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ったあと、どのようなことに<ruby>注意<rt>ちゅうい</rt></ruby>して<ruby>子<rt>こ</rt></ruby>どもの<ruby>様子<rt>ようす</rt></ruby>を<ruby>見<rt>み</rt></ruby>ればいいですか。",
                romaji: "Ie ni kaetta ato, dono yō na koto ni chūi shite kodomo no yōsu o mireba ii desu ka."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "水分が取れているか、呼吸や顔色に変化がないか、普段との違いを見てください。",
                target: "すいぶんがとれているか こきゅうやかおいろにへんかがないか ふだんとのちがいをみてください",
                ruby: "<ruby>水分<rt>すいぶん</rt></ruby>が<ruby>取<rt>と</rt></ruby>れているか、<ruby>呼吸<rt>こきゅう</rt></ruby>や<ruby>顔色<rt>かおいろ</rt></ruby>に<ruby>変化<rt>へんか</rt></ruby>がないか、<ruby>普段<rt>ふだん</rt></ruby>との<ruby>違<rt>ちが</rt></ruby>いを<ruby>見<rt>み</rt></ruby>てください。",
                romaji: "Suibun ga torete iru ka, kokyū ya kaoiro ni henka ga nai ka, fudan to no chigai o mite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "熱の高さだけでなく、子どもの全体の様子を見ることが大切なのですね。",
                target: "ねつのたかさだけでなく こどものぜんたいのようすをみることがたいせつなのですね",
                ruby: "<ruby>熱<rt>ねつ</rt></ruby>の<ruby>高<rt>たか</rt></ruby>さだけでなく、<ruby>子<rt>こ</rt></ruby>どもの<ruby>全体<rt>ぜんたい</rt></ruby>の<ruby>様子<rt>ようす</rt></ruby>を<ruby>見<rt>み</rt></ruby>ることが<ruby>大切<rt>たいせつ</rt></ruby>なのですね。",
                romaji: "Netsu no takasa dake de naku, kodomo no zentai no yōsu o miru koto ga taisetsu na no desu ne."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "はい。いつもと明らかに違う様子や気になる変化があれば、医療機関に相談してください。",
                target: "はい いつもとあきらかにちがうようすやきになるへんかがあれば いりょうきかんにそうだんしてください",
                ruby: "はい。いつもと<ruby>明<rt>あき</rt></ruby>らかに<ruby>違<rt>ちが</rt></ruby>う<ruby>様子<rt>ようす</rt></ruby>や<ruby>気<rt>き</rt></ruby>になる<ruby>変化<rt>へんか</rt></ruby>があれば、<ruby>医療機関<rt>いりょうきかん</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>してください。",
                romaji: "Hai. Itsumo to akiraka ni chigau yōsu ya ki ni naru henka ga areba, iryō kikan ni sōdan shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "もう一度受診した方がいい場合についても、教えていただけますか。",
                target: "もういちどじゅしんしたほうがいいばあいについても おしえていただけますか",
                ruby: "もう<ruby>一度<rt>いちど</rt></ruby><ruby>受診<rt>じゅしん</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいい<ruby>場合<rt>ばあい</rt></ruby>についても、<ruby>教<rt>おし</rt></ruby>えていただけますか。",
                romaji: "Mō ichido jushin shita hō ga ii baai ni tsuite mo, oshiete itadakemasu ka."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "もちろんです。今回のお子さんの状態に合わせて、受診の目安を説明します。",
                target: "もちろんです こんかいのおこさんのじょうたいにあわせて じゅしんのめやすをせつめいします",
                ruby: "もちろんです。<ruby>今回<rt>こんかい</rt></ruby>のお<ruby>子<rt>こ</rt></ruby>さんの<ruby>状態<rt>じょうたい</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせて、<ruby>受診<rt>じゅしん</rt></ruby>の<ruby>目安<rt>めやす</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>します。",
                romaji: "Mochiron desu. Konkai no okosan no jōtai ni awasete, jushin no meyasu o setsumei shimasu."
            }
        ],

        {
            ja: [
                "保護者：家に帰ったあと、どのようなことに注意して子どもの様子を見ればいいですか。",
                "医師：水分が取れているか、呼吸や顔色に変化がないか、普段との違いを見てください。",
                "保護者：熱の高さだけでなく、子どもの全体の様子を見ることが大切なのですね。",
                "医師：はい。いつもと明らかに違う様子や気になる変化があれば、医療機関に相談してください。",
                "保護者：もう一度受診した方がいい場合についても、教えていただけますか。",
                "医師：もちろんです。今回のお子さんの状態に合わせて、受診の目安を説明します。"
            ],

            en: [
                "Parent: After we return home, what should I pay attention to while watching my child's condition?",
                "Doctor: Check whether your child can drink fluids and whether there are changes in breathing, facial color, or anything else compared with usual.",
                "Parent: So it is important to look at my child's overall condition, not just how high the fever is.",
                "Doctor: Yes. If you notice something clearly different from usual or another concerning change, please consult a medical institution.",
                "Parent: Could you also tell me when I should bring my child back for another examination?",
                "Doctor: Of course. I will explain when to seek further medical care based on your child's current condition."
            ],

            "zh-CN": [
                "家长：回家以后，观察孩子时应该注意哪些事情？",
                "医生：请观察孩子能不能喝水、呼吸和脸色有没有变化，以及与平时有什么不同。",
                "家长：也就是说，不能只看体温高低，观察孩子的整体状态也很重要。",
                "医生：是的。如果出现明显与平时不同的情况或让您担心的变化，请咨询医疗机构。",
                "家长：也可以告诉我什么情况下应该再次就诊吗？",
                "医生：当然可以。我会根据这次孩子的状态，说明再次就诊的参考标准。"
            ],

            "zh-TW": [
                "家長：回家以後，觀察孩子時應該注意哪些事情？",
                "醫師：請觀察孩子能不能喝水、呼吸和臉色有沒有變化，以及與平時有什麼不同。",
                "家長：也就是說，不能只看體溫高低，觀察孩子的整體狀態也很重要。",
                "醫師：是的。如果出現明顯與平時不同的情況或讓您擔心的變化，請諮詢醫療機構。",
                "家長：也可以告訴我什麼情況下應該再次就診嗎？",
                "醫師：當然可以。我會根據這次孩子的狀態，說明再次就診的參考標準。"
            ],

            ko: [
                "보호자: 집에 돌아간 후 어떤 점에 주의해서 아이의 상태를 살펴봐야 하나요?",
                "의사: 물을 마실 수 있는지, 호흡이나 얼굴색에 변화가 없는지, 평소와 다른 점을 살펴봐 주세요.",
                "보호자: 열의 높이뿐 아니라 아이의 전체적인 상태를 보는 것이 중요하군요.",
                "의사: 네. 평소와 분명히 다른 모습이나 걱정되는 변화가 있으면 의료기관에 상담해 주세요.",
                "보호자: 다시 진찰을 받아야 하는 경우도 알려 주실 수 있나요?",
                "의사: 물론입니다. 이번 아이의 상태에 맞추어 다시 진료를 받아야 할 기준을 설명하겠습니다."
            ],

            vi: [
                "Phụ huynh: Sau khi về nhà, tôi nên chú ý những gì khi theo dõi tình trạng của con?",
                "Bác sĩ: Hãy xem cháu có uống được nước không, hơi thở hoặc sắc mặt có thay đổi không và có gì khác với bình thường không.",
                "Phụ huynh: Vậy không chỉ độ cao của cơn sốt mà việc quan sát toàn bộ tình trạng của trẻ cũng rất quan trọng.",
                "Bác sĩ: Đúng vậy. Nếu có biểu hiện rõ ràng khác bình thường hoặc thay đổi khiến bạn lo lắng, hãy liên lạc với cơ sở y tế.",
                "Phụ huynh: Bác sĩ có thể cho tôi biết khi nào nên đưa cháu đi khám lại không?",
                "Bác sĩ: Tất nhiên. Tôi sẽ giải thích thời điểm nên đi khám lại dựa trên tình trạng hiện tại của cháu."
            ]
        }
    ),

    // =====================================================
    // 008 夜間や休日に受診を迷ったときに相談する
    // =====================================================

    makeB1ChildHospitalDialogue(
        "b1_childhospital_008",
        "夜間や休日に受診を迷ったときに相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが夜になって急に熱を出しました。今すぐ病院へ行くべきか迷っています。",
                target: "こどもがよるになってきゅうにねつをだしました いますぐびょういんへいくべきかまよっています",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>夜<rt>よる</rt></ruby>になって<ruby>急<rt>きゅう</rt></ruby>に<ruby>熱<rt>ねつ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>しました。<ruby>今<rt>いま</rt></ruby>すぐ<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くべきか<ruby>迷<rt>まよ</rt></ruby>っています。",
                romaji: "Kodomo ga yoru ni natte kyū ni netsu o dashimashita. Ima sugu byōin e iku beki ka mayotte imasu."
            },
            {
                label: "話者A",
                key: "advisor",
                name: "相談員",
                line: "わかりました。まず、お子さんの年齢と現在の体温、全体の様子を教えてください。",
                target: "わかりました まず おこさんのねんれいとげんざいのたいおん ぜんたいのようすをおしえてください",
                ruby: "わかりました。まず、お<ruby>子<rt>こ</rt></ruby>さんの<ruby>年齢<rt>ねんれい</rt></ruby>と<ruby>現在<rt>げんざい</rt></ruby>の<ruby>体温<rt>たいおん</rt></ruby>、<ruby>全体<rt>ぜんたい</rt></ruby>の<ruby>様子<rt>ようす</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Wakarimashita. Mazu, okosan no nenrei to genzai no taion, zentai no yōsu o oshiete kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "三歳です。熱はありますが、呼びかけには答えていて、水も少し飲めています。",
                target: "さんさいです ねつはありますが よびかけにはこたえていて みずもすこしのめています",
                ruby: "<ruby>三歳<rt>さんさい</rt></ruby>です。<ruby>熱<rt>ねつ</rt></ruby>はありますが、<ruby>呼<rt>よ</rt></ruby>びかけには<ruby>答<rt>こた</rt></ruby>えていて、<ruby>水<rt>みず</rt></ruby>も<ruby>少<rt>すこ</rt></ruby>し<ruby>飲<rt>の</rt></ruby>めています。",
                romaji: "Sansai desu. Netsu wa arimasu ga, yobikake ni wa kotaete ite, mizu mo sukoshi nomete imasu."
            },
            {
                label: "話者A",
                key: "advisor",
                name: "相談員",
                line: "ほかに、呼吸が苦しそう、顔色が悪い、ぐったりしているなどの変化はありますか。",
                target: "ほかに こきゅうがくるしそう かおいろがわるい ぐったりしているなどのへんかはありますか",
                ruby: "ほかに、<ruby>呼吸<rt>こきゅう</rt></ruby>が<ruby>苦<rt>くる</rt></ruby>しそう、<ruby>顔色<rt>かおいろ</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い、ぐったりしているなどの<ruby>変化<rt>へんか</rt></ruby>はありますか。",
                romaji: "Hoka ni, kokyū ga kurushisō, kaoiro ga warui, guttari shite iru nado no henka wa arimasu ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "今のところ、そのような様子はありません。ただ、夜なので不安です。",
                target: "いまのところ そのようなようすはありません ただ よるなのでふあんです",
                ruby: "<ruby>今<rt>いま</rt></ruby>のところ、そのような<ruby>様子<rt>ようす</rt></ruby>はありません。ただ、<ruby>夜<rt>よる</rt></ruby>なので<ruby>不安<rt>ふあん</rt></ruby>です。",
                romaji: "Ima no tokoro, sono yō na yōsu wa arimasen. Tada, yoru na node fuan desu."
            },
            {
                label: "話者A",
                key: "advisor",
                name: "相談員",
                line: "心配なときは一人で判断せず、子どもの医療相談窓口や医療機関に相談してください。",
                target: "しんぱいなときはひとりではんだんせず こどものいりょうそうだんまどぐちやいりょうきかんにそうだんしてください",
                ruby: "<ruby>心配<rt>しんぱい</rt></ruby>なときは<ruby>一人<rt>ひとり</rt></ruby>で<ruby>判断<rt>はんだん</rt></ruby>せず、<ruby>子<rt>こ</rt></ruby>どもの<ruby>医療相談窓口<rt>いりょうそうだんまどぐち</rt></ruby>や<ruby>医療機関<rt>いりょうきかん</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>してください。",
                romaji: "Shinpai na toki wa hitori de handan sezu, kodomo no iryō sōdan madoguchi ya iryō kikan ni sōdan shite kudasai."
            }
        ],

        {
            ja: [
                "保護者：子どもが夜になって急に熱を出しました。今すぐ病院へ行くべきか迷っています。",
                "相談員：わかりました。まず、お子さんの年齢と現在の体温、全体の様子を教えてください。",
                "保護者：三歳です。熱はありますが、呼びかけには答えていて、水も少し飲めています。",
                "相談員：ほかに、呼吸が苦しそう、顔色が悪い、ぐったりしているなどの変化はありますか。",
                "保護者：今のところ、そのような様子はありません。ただ、夜なので不安です。",
                "相談員：心配なときは一人で判断せず、子どもの医療相談窓口や医療機関に相談してください。"
            ],

            en: [
                "Parent: My child suddenly developed a fever at night. I am not sure whether we should go to the hospital immediately.",
                "Advisor: I understand. First, please tell me your child's age, current temperature, and overall condition.",
                "Parent: My child is three years old. There is a fever, but my child responds when called and can drink a little water.",
                "Advisor: Have you noticed any other changes, such as difficulty breathing, poor facial color, or unusual weakness?",
                "Parent: I have not noticed anything like that so far. However, I am worried because it is nighttime.",
                "Advisor: When you are concerned, do not make the decision alone. Please consult a children's medical advice service or a medical institution."
            ],

            "zh-CN": [
                "家长：孩子到了晚上突然发烧了。我不知道是否应该马上去医院。",
                "咨询员：明白了。首先，请告诉我孩子的年龄、现在的体温和整体状态。",
                "家长：三岁。虽然发烧，但是叫他时会回答，也能喝一点水。",
                "咨询员：还有没有呼吸困难、脸色不好、明显没精神等变化？",
                "家长：目前没有这种情况。但是因为是晚上，所以很不安。",
                "咨询员：感到担心时不要一个人判断，请咨询儿童医疗咨询窗口或医疗机构。"
            ],

            "zh-TW": [
                "家長：孩子到了晚上突然發燒了。我不知道是否應該馬上去醫院。",
                "諮詢員：明白了。首先，請告訴我孩子的年齡、現在的體溫和整體狀態。",
                "家長：三歲。雖然發燒，但是叫他時會回答，也能喝一點水。",
                "諮詢員：還有沒有呼吸困難、臉色不好、明顯沒精神等變化？",
                "家長：目前沒有這種情況。但是因為是晚上，所以很不安。",
                "諮詢員：感到擔心時不要一個人判斷，請諮詢兒童醫療諮詢窗口或醫療機構。"
            ],

            ko: [
                "보호자: 아이가 밤이 되어 갑자기 열이 났습니다. 지금 바로 병원에 가야 할지 고민됩니다.",
                "상담원: 알겠습니다. 먼저 아이의 나이와 현재 체온, 전체적인 상태를 알려 주세요.",
                "보호자: 세 살입니다. 열은 있지만 부르면 대답하고 물도 조금 마실 수 있습니다.",
                "상담원: 그 밖에 숨쉬기 힘들어 보이거나 얼굴색이 나쁘거나 축 처지는 등의 변화가 있나요?",
                "보호자: 지금까지는 그런 모습이 없습니다. 하지만 밤이라서 불안합니다.",
                "상담원: 걱정될 때는 혼자 판단하지 말고 어린이 의료 상담 창구나 의료기관에 상담해 주세요."
            ],

            vi: [
                "Phụ huynh: Buổi tối con tôi đột nhiên bị sốt. Tôi không biết có nên đưa cháu đến bệnh viện ngay không.",
                "Nhân viên tư vấn: Tôi hiểu. Trước tiên, hãy cho tôi biết tuổi, nhiệt độ hiện tại và tình trạng tổng thể của cháu.",
                "Phụ huynh: Cháu ba tuổi. Cháu bị sốt nhưng vẫn trả lời khi được gọi và có thể uống một ít nước.",
                "Nhân viên tư vấn: Có thay đổi nào khác như khó thở, sắc mặt xấu hoặc mệt lả bất thường không?",
                "Phụ huynh: Hiện tại chưa có những biểu hiện như vậy. Tuy nhiên, vì đang là ban đêm nên tôi lo lắng.",
                "Nhân viên tư vấn: Khi lo lắng, đừng tự quyết định một mình. Hãy liên hệ với dịch vụ tư vấn y tế cho trẻ em hoặc cơ sở y tế."
            ]
        }
    )

];