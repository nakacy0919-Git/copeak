// =====================================================
// Japeak B1 Level
// Scene: 引越しの準備をしよう
// File: data/japeak-b1-moving-preparation.js
// Category Key: b1_moving_preparation
// =====================================================

const b1MovingPreparationLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1MovingPreparationTranslations(translations) {
    const completed = {};
    b1MovingPreparationLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const b1MovingPreparationContext = {
    ja: "引越しの準備を進めるために、日程の相談、見積もり、荷造り、不用品の整理、電気・ガス・水道の手続き、住所変更、学校や職場への連絡、引越し当日の確認などに関する日本語を練習します。",
    en: "Practice Japanese for preparing for a move, including discussing the moving date, requesting estimates, packing, sorting unnecessary items, arranging electricity, gas, and water, changing your address, informing school or work, and confirming plans for moving day.",
    "zh-CN": "练习与搬家准备有关的日语，包括商量搬家日期、申请报价、打包、整理不需要的物品、办理水电煤手续、变更住址、联系学校或工作单位，以及确认搬家当天的安排。",
    "zh-TW": "練習與搬家準備有關的日語，包括商量搬家日期、申請估價、打包、整理不需要的物品、辦理水電瓦斯手續、變更住址、聯絡學校或工作單位，以及確認搬家當天的安排。",
    ko: "이사 준비를 진행하기 위해 일정 상담, 견적, 짐 싸기, 불필요한 물건 정리, 전기·가스·수도 절차, 주소 변경, 학교나 직장에 연락, 이삿날 확인 등에 관한 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật để chuẩn bị chuyển nhà, bao gồm trao đổi về ngày chuyển nhà, xin báo giá, đóng gói hành lý, sắp xếp đồ không cần thiết, làm thủ tục điện, ga, nước, đổi địa chỉ, liên lạc với trường học hoặc nơi làm việc và xác nhận kế hoạch cho ngày chuyển nhà.",
    tl: "Practice Japanese for preparing for a move, such as discussing the moving date, requesting an estimate, packing, organizing unnecessary items, arranging utilities, changing your address, contacting school or work, and checking the moving-day schedule.",
    id: "Latihan bahasa Jepang untuk mempersiapkan kepindahan, termasuk membicarakan jadwal pindahan, meminta estimasi biaya, mengepak barang, memilah barang yang tidak diperlukan, mengurus listrik, gas, dan air, mengganti alamat, menghubungi sekolah atau tempat kerja, serta memastikan rencana pada hari pindahan.",
    th: "ฝึกภาษาญี่ปุ่นสำหรับการเตรียมย้ายบ้าน เช่น การปรึกษาเรื่องวันย้าย การขอประเมินราคา การจัดของ การคัดแยกของที่ไม่จำเป็น การจัดการเรื่องไฟฟ้า แก๊ส และน้ำ การเปลี่ยนที่อยู่ การแจ้งโรงเรียนหรือที่ทำงาน และการตรวจสอบแผนในวันย้าย",
    my: "အိမ်ပြောင်းရန် ပြင်ဆင်ရာတွင် ရက်ချိန်းဆွေးနွေးခြင်း၊ ခန့်မှန်းစရိတ်တောင်းခြင်း၊ ပစ္စည်းထုပ်ပိုးခြင်း၊ မလိုအပ်သောပစ္စည်းများကို စီခြင်း၊ လျှပ်စစ်၊ ဂက်စ်၊ ရေ အစီအစဉ်များ၊ လိပ်စာပြောင်းခြင်း၊ ကျောင်း သို့မဟုတ် အလုပ်နေရာသို့ အကြောင်းကြားခြင်းနှင့် အိမ်ပြောင်းနေ့ အတည်ပြုခြင်းဆိုင်ရာ ဂျပန်စကားကို လေ့ကျင့်ပါသည်။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ការរៀបចំផ្លាស់ប្តូរទីលំនៅ ដូចជា ការពិភាក្សាអំពីកាលបរិច្ឆេទផ្លាស់ទី ការស្នើសុំតម្លៃប៉ាន់ស្មាន ការវេចខ្ចប់សម្ភារៈ ការរៀបចំសម្ភារៈមិនចាំបាច់ ការរៀបចំអគ្គិសនី ឧស្ម័ន ទឹក ការផ្លាស់ប្តូរអាសយដ្ឋាន ការទាក់ទងទៅសាលារៀន ឬកន្លែងធ្វើការ និងការបញ្ជាក់ផែនការនៅថ្ងៃផ្លាស់ទី។",
    ne: "सराइँको तयारी गर्न, मिति तय गर्ने, अनुमानित खर्च सोध्ने, सामान प्याक गर्ने, नचाहिने सामान छुट्याउने, बिजुली, ग्यास र पानीको प्रक्रिया, ठेगाना परिवर्तन, विद्यालय वा कार्यस्थललाई जानकारी दिने, र सराइँको दिनको योजना जाँच गर्ने जापानी अभ्यास।",
    mn: "Нүүх бэлтгэл хийхтэй холбоотой өдөр товлох, үнийн санал авах, ачаа баглах, хэрэггүй зүйлсээ цэгцлэх, цахилгаан, газ, усны үйлчилгээ зохицуулах, хаяг өөрчлөх, сургууль эсвэл ажилдаа мэдэгдэх, нүүх өдрийн төлөвлөгөөг баталгаажуулах япон хэлний дадлага.",
    si: "නිවස මාරු කිරීම සඳහා සූදානම් වීමේදී දින නියම කිරීම, වියදම් ඇස්තමේන්තු ගැනීම, බඩු ඇසුරුම් කිරීම, අවශ්‍ය නොවන දේ වෙන් කිරීම, විදුලිය, ගෑස් සහ ජලය සම්බන්ධ කටයුතු, ලිපිනය වෙනස් කිරීම, පාසලට හෝ සේවා ස්ථානයට දැනුම් දීම සහ මාරු වන දින සැලසුම් තහවුරු කිරීම සඳහා ජපන් භාෂා පුහුණුව.",
    bn: "বাড়ি বদলের প্রস্তুতির জন্য জাপানি অনুশীলন—যেমন তারিখ ঠিক করা, খরচের হিসাব নেওয়া, জিনিসপত্র গুছানো, অপ্রয়োজনীয় জিনিস আলাদা করা, বিদ্যুৎ-গ্যাস-পানির ব্যবস্থা, ঠিকানা পরিবর্তন, স্কুল বা কর্মস্থলে জানানো এবং স্থানান্তরের দিনের পরিকল্পনা নিশ্চিত করা।",
    pt: "Prática de japonês para preparar uma mudança, incluindo conversar sobre a data da mudança, pedir orçamento, fazer as malas, organizar itens desnecessários, providenciar eletricidade, gás e água, alterar o endereço, avisar a escola ou o trabalho e confirmar os planos para o dia da mudança.",
    es: "Práctica de japonés para prepararse para una mudanza, incluyendo hablar sobre la fecha, pedir presupuestos, empacar, organizar objetos innecesarios, gestionar electricidad, gas y agua, cambiar la dirección, informar a la escuela o al trabajo y confirmar el plan para el día de la mudanza.",
    fr: "Entraînement en japonais pour préparer un déménagement, notamment discuter de la date, demander un devis, faire les cartons, trier les objets inutiles, organiser l’électricité, le gaz et l’eau, changer d’adresse, prévenir l’école ou le travail et confirmer le programme du jour du déménagement.",
    ru: "Практика японского языка для подготовки к переезду: обсуждение даты, запрос сметы, упаковка вещей, разбор ненужных предметов, оформление электричества, газа и воды, смена адреса, уведомление школы или работы и подтверждение плана на день переезда.",
    uk: "Практика японської мови для підготовки до переїзду: обговорення дати, запит кошторису, пакування речей, сортування непотрібних предметів, оформлення електрики, газу та води, зміна адреси, повідомлення школи чи роботи та підтвердження плану на день переїзду."
};

const b1MovingPreparationSpeakerNames = {
    customer: {
        ja: "利用者",
        en: "Customer",
        "zh-CN": "顾客",
        "zh-TW": "顧客",
        ko: "이용자",
        vi: "Khách hàng",
        tl: "Customer",
        id: "Pelanggan",
        th: "ลูกค้า",
        my: "ဖောက်သည်",
        km: "អតិថិជន",
        ne: "ग्राहक",
        mn: "Үйлчлүүлэгч",
        si: "පාරිභෝගිකයා",
        bn: "গ্রাহক",
        pt: "Cliente",
        es: "Cliente",
        fr: "Client",
        ru: "Клиент",
        uk: "Клієнт"
    },
    staff: {
        ja: "担当者",
        en: "Staff",
        "zh-CN": "工作人员",
        "zh-TW": "工作人員",
        ko: "담당자",
        vi: "Người phụ trách",
        tl: "Staff",
        id: "Petugas",
        th: "เจ้าหน้าที่",
        my: "တာဝန်ခံ",
        km: "បុគ្គលិកទទួលបន្ទុក",
        ne: "जिम्मेवार व्यक्ति",
        mn: "Хариуцсан ажилтан",
        si: "භාරකරු",
        bn: "দায়িত্বপ্রাপ্ত ব্যক্তি",
        pt: "Responsável",
        es: "Responsable",
        fr: "Responsable",
        ru: "Сотрудник",
        uk: "Працівник"
    },
    mover: {
        ja: "引越し業者",
        en: "Moving Company Staff",
        "zh-CN": "搬家公司工作人员",
        "zh-TW": "搬家公司工作人員",
        ko: "이삿짐 업체 직원",
        vi: "Nhân viên công ty chuyển nhà",
        tl: "Moving company staff",
        id: "Petugas perusahaan pindahan",
        th: "พนักงานบริษัทขนย้าย",
        my: "အိမ်ပြောင်းကုမ္ပဏီဝန်ထမ်း",
        km: "បុគ្គលិកក្រុមហ៊ុនដឹកជញ្ជូនផ្ទះ",
        ne: "सराइँ कम्पनी कर्मचारी",
        mn: "Нүүлгэлтийн компанийн ажилтан",
        si: "නිවස මාරු සමාගම් සේවකයා",
        bn: "মুভিং কোম্পানির কর্মী",
        pt: "Funcionário da empresa de mudança",
        es: "Empleado de la empresa de mudanzas",
        fr: "Employé de l'entreprise de déménagement",
        ru: "Сотрудник компании по переезду",
        uk: "Працівник компанії з переїзду"
    },
    schoolStaff: {
        ja: "学校職員",
        en: "School Staff",
        "zh-CN": "学校工作人员",
        "zh-TW": "學校工作人員",
        ko: "학교 직원",
        vi: "Nhân viên nhà trường",
        tl: "School staff",
        id: "Staf sekolah",
        th: "เจ้าหน้าที่โรงเรียน",
        my: "ကျောင်းဝန်ထမ်း",
        km: "បុគ្គលិកសាលា",
        ne: "विद्यालय कर्मचारी",
        mn: "Сургуулийн ажилтан",
        si: "පාසල් කාර්ය මණ්ඩලය",
        bn: "স্কুল কর্মী",
        pt: "Funcionário da escola",
        es: "Personal de la escuela",
        fr: "Personnel de l'école",
        ru: "Сотрудник школы",
        uk: "Працівник школи"
    },
    coworker: {
        ja: "職場の人",
        en: "Coworker",
        "zh-CN": "同事",
        "zh-TW": "同事",
        ko: "직장 동료",
        vi: "Đồng nghiệp",
        tl: "Coworker",
        id: "Rekan kerja",
        th: "เพื่อนร่วมงาน",
        my: "အလုပ်ဖော်",
        km: "មិត្តរួមការងារ",
        ne: "सहकर्मी",
        mn: "Хамтран ажиллагч",
        si: "সহকর্মী",
        bn: "সহকর্মী",
        pt: "Colega de trabalho",
        es: "Compañero de trabajo",
        fr: "Collègue",
        ru: "Коллега",
        uk: "Колега"
    }
};

function makeB1MovingPreparationDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeB1MovingPreparationTranslations(dialogueTranslations);
    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_moving_preparation",

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
            speakerNames: b1MovingPreparationSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1MovingPreparationContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1MovingPreparationData = [

    // =====================================================
    // 001 引越しの日程を決める
    // =====================================================
    makeB1MovingPreparationDialogue(
        "b1_movingprep_001",
        "引越しの日程を決める",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "来月中に引っ越したいのですが、準備はいつごろ始めた方がいいでしょうか。",
                target: "らいげつちゅうにひっこしたいのですが じゅんびはいつごろはじめたほうがいいでしょうか",
                ruby: "<ruby>来月中<rt>らいげつちゅう</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>したいのですが、<ruby>準備<rt>じゅんび</rt></ruby>はいつごろ<ruby>始<rt>はじ</rt></ruby>めた<ruby>方<rt>ほう</rt></ruby>がいいでしょうか。",
                romaji: "Raigetsu-chū ni hikkoshitai no desu ga, junbi wa itsu goro hajimeta hō ga ii deshō ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "少なくとも二、三週間前には、日程を決めて少しずつ準備を始めるのがおすすめです。",
                target: "すくなくともにさんしゅうかんまえには にっていをきめてすこしずつじゅんびをはじめるのがおすすめです",
                ruby: "<ruby>少<rt>すく</rt></ruby>なくとも<ruby>二<rt>に</rt></ruby>、<ruby>三週間前<rt>さんしゅうかんまえ</rt></ruby>には、<ruby>日程<rt>にってい</rt></ruby>を<ruby>決<rt>き</rt></ruby>めて<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>準備<rt>じゅんび</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めるのがおすすめです。",
                romaji: "Sukunakutomo ni, san-shūkan mae ni wa, nittei o kimete sukoshizutsu junbi o hajimeru no ga osusume desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "仕事の都合で平日は難しいので、できれば土日に引っ越したいです。",
                target: "しごとのつごうでへいじつはむずかしいので できればどにちにひっこしたいです",
                ruby: "<ruby>仕事<rt>しごと</rt></ruby>の<ruby>都合<rt>つごう</rt></ruby>で<ruby>平日<rt>へいじつ</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しいので、できれば<ruby>土日<rt>どにち</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>したいです。",
                romaji: "Shigoto no tsugō de heijitsu wa muzukashii node, dekireba donichi ni hikkoshitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "土日は予約が多いので、早めに業者へ相談した方がいいですね。",
                target: "どにちはよやくがおおいので はやめにぎょうしゃへそうだんしたほうがいいですね",
                ruby: "<ruby>土日<rt>どにち</rt></ruby>は<ruby>予約<rt>よやく</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いので、<ruby>早<rt>はや</rt></ruby>めに<ruby>業者<rt>ぎょうしゃ</rt></ruby>へ<ruby>相談<rt>そうだん</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいいですね。",
                romaji: "Donichi wa yoyaku ga ōi node, hayame ni gyōsha e sōdan shita hō ga ii desu ne."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "引越しの日が決まったら、ほかの手続きも順番に進めた方がよさそうですね。",
                target: "ひっこしのひがきまったら ほかのてつづきもじゅんばんにすすめたほうがよさそうですね",
                ruby: "<ruby>引越<rt>ひっこ</rt></ruby>しの<ruby>日<rt>ひ</rt></ruby>が<ruby>決<rt>き</rt></ruby>まったら、ほかの<ruby>手続<rt>てつづ</rt></ruby>きも<ruby>順番<rt>じゅんばん</rt></ruby>に<ruby>進<rt>すす</rt></ruby>めた<ruby>方<rt>ほう</rt></ruby>がよさそうですね。",
                romaji: "Hikkoshi no hi ga kimattara, hoka no tetsuzuki mo junban ni susumeta hō ga yosasō desu ne."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "はい。引越し日を基準にすると、全体の準備が進めやすくなります。",
                target: "はい ひっこしびをきじゅんにすると ぜんたいのじゅんびがすすめやすくなります",
                ruby: "はい。<ruby>引越<rt>ひっこ</rt></ruby>し<ruby>日<rt>び</rt></ruby>を<ruby>基準<rt>きじゅん</rt></ruby>にすると、<ruby>全体<rt>ぜんたい</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>が<ruby>進<rt>すす</rt></ruby>めやすくなります。",
                romaji: "Hai. Hikkoshibi o kijun ni suru to, zentai no junbi ga susumeyasuku narimasu."
            }
        ],
        {
            ja: [
                "利用者：来月中に引っ越したいのですが、準備はいつごろ始めた方がいいでしょうか。",
                "担当者：少なくとも二、三週間前には、日程を決めて少しずつ準備を始めるのがおすすめです。",
                "利用者：仕事の都合で平日は難しいので、できれば土日に引っ越したいです。",
                "担当者：土日は予約が多いので、早めに業者へ相談した方がいいですね。",
                "利用者：引越しの日が決まったら、ほかの手続きも順番に進めた方がよさそうですね。",
                "担当者：はい。引越し日を基準にすると、全体の準備が進めやすくなります。"
            ],
            en: [
                "Customer: I would like to move sometime next month. When do you think I should start preparing?",
                "Staff: It is best to decide the date and start preparing little by little at least two or three weeks in advance.",
                "Customer: Because of work, weekdays are difficult for me, so I would prefer to move on a weekend if possible.",
                "Staff: Weekends are often busy, so it would be better to contact a moving company early.",
                "Customer: Once the moving day is decided, it seems better to proceed with the other procedures in order as well.",
                "Staff: Yes. If you use the moving day as a reference, it becomes easier to manage the whole preparation process."
            ],
            "zh-CN": [
                "顾客：我想在下个月内搬家，您觉得我应该什么时候开始准备呢？",
                "工作人员：最好至少提前两三周决定日期，并一点一点开始准备。",
                "顾客：因为工作的关系，平日不方便，所以如果可以的话，我想在周末搬家。",
                "工作人员：周末预约很多，所以最好尽早和搬家公司联系。",
                "顾客：搬家日期决定以后，其他手续似乎也应该按顺序进行。",
                "工作人员：是的。以搬家日为基准的话，会更容易安排整体准备工作。"
            ],
            "zh-TW": [
                "顧客：我想在下個月內搬家，您覺得我應該什麼時候開始準備呢？",
                "工作人員：最好至少提前兩三週決定日期，並一點一點開始準備。",
                "顧客：因為工作的關係，平日不方便，所以如果可以的話，我想在週末搬家。",
                "工作人員：週末預約很多，所以最好盡早和搬家公司聯絡。",
                "顧客：搬家日期決定以後，其他手續似乎也應該按順序進行。",
                "工作人員：是的。以搬家日為基準的話，會更容易安排整體準備工作。"
            ],
            ko: [
                "이용자: 다음 달 안에 이사하고 싶은데 준비는 언제쯤 시작하는 것이 좋을까요?",
                "담당자: 적어도 2~3주 전에는 날짜를 정하고 조금씩 준비를 시작하는 것이 좋습니다.",
                "이용자: 일 때문에 평일은 어려워서 가능하면 주말에 이사하고 싶습니다.",
                "담당자: 주말은 예약이 많으니 일찍 업체에 상담하는 것이 좋겠네요.",
                "이용자: 이사 날짜가 정해지면 다른 절차도 순서대로 진행하는 편이 좋겠네요.",
                "담당자: 네. 이사 날짜를 기준으로 하면 전체 준비를 진행하기가 쉬워집니다."
            ],
            vi: [
                "Khách hàng: Tôi muốn chuyển nhà trong tháng tới, vậy nên bắt đầu chuẩn bị từ lúc nào thì tốt?",
                "Người phụ trách: Tốt nhất là ít nhất trước hai hoặc ba tuần, bạn nên quyết định ngày chuyển nhà và bắt đầu chuẩn bị từng chút một.",
                "Khách hàng: Vì công việc nên ngày thường khó sắp xếp, nếu có thể tôi muốn chuyển nhà vào cuối tuần.",
                "Người phụ trách: Cuối tuần thường có nhiều đặt chỗ nên bạn nên liên hệ với công ty chuyển nhà sớm.",
                "Khách hàng: Khi đã quyết định ngày chuyển nhà, có lẽ tôi cũng nên tiến hành các thủ tục khác theo thứ tự.",
                "Người phụ trách: Vâng. Nếu lấy ngày chuyển nhà làm mốc thì sẽ dễ chuẩn bị toàn bộ hơn."
            ]
        }
    ),

    // =====================================================
    // 002 引越し業者に見積もりを依頼する
    // =====================================================
    makeB1MovingPreparationDialogue(
        "b1_movingprep_002",
        "引越し業者に見積もりを依頼する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "引越しの見積もりをお願いしたいのですが、何を伝えればいいですか。",
                target: "ひっこしのみつもりをおねがいしたいのですが なにをつたえればいいですか",
                ruby: "<ruby>引越<rt>ひっこ</rt></ruby>しの<ruby>見積<rt>みつも</rt></ruby>りをお<ruby>願<rt>ねが</rt></ruby>いしたいのですが、<ruby>何<rt>なに</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えればいいですか。",
                romaji: "Hikkoshi no mitsumori o onegai shitai no desu ga, nani o tsutaereba ii desu ka."
            },
            {
                label: "話者A",
                key: "mover",
                name: "引越し業者",
                line: "現在の住所と新しい住所、それから荷物のおおよその量を教えてください。",
                target: "げんざいのじゅうしょとあたらしいじゅうしょ それからにもつのおおよそのりょうをおしえてください",
                ruby: "<ruby>現在<rt>げんざい</rt></ruby>の<ruby>住所<rt>じゅうしょ</rt></ruby>と<ruby>新<rt>あたら</rt></ruby>しい<ruby>住所<rt>じゅうしょ</rt></ruby>、それから<ruby>荷物<rt>にもつ</rt></ruby>のおおよその<ruby>量<rt>りょう</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Genzai no jūsho to atarashii jūsho, sorekara nimotsu no ōyoso no ryō o oshiete kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "大きな荷物は冷蔵庫と洗濯機とベッドがありますが、段ボールの数はまだはっきりしていません。",
                target: "おおきなにもつはれいぞうことせんたくきとべっどがありますが だんぼーるのかずはまだはっきりしていません",
                ruby: "<ruby>大<rt>おお</rt></ruby>きな<ruby>荷物<rt>にもつ</rt></ruby>は<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>と<ruby>洗濯機<rt>せんたくき</rt></ruby>とベッドがありますが、<ruby>段<rt>だん</rt></ruby>ボールの<ruby>数<rt>かず</rt></ruby>はまだはっきりしていません。",
                romaji: "Ōkina nimotsu wa reizōko to sentakuki to beddo ga arimasu ga, danbōru no kazu wa mada hakkiri shite imasen."
            },
            {
                label: "話者A",
                key: "mover",
                name: "引越し業者",
                line: "それなら、訪問見積もりかオンライン見積もりで確認することもできます。",
                target: "それなら ほうもんみつもりかおんらいんみつもりでかくにんすることもできます",
                ruby: "それなら、<ruby>訪問見積<rt>ほうもんみつも</rt></ruby>りかオンライン<ruby>見積<rt>みつも</rt></ruby>りで<ruby>確認<rt>かくにん</rt></ruby>することもできます。",
                romaji: "Sore nara, hōmon mitsumori ka onrain mitsumori de kakunin suru koto mo dekimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "料金だけでなく、段ボールのサービスがあるかどうかも知りたいです。",
                target: "りょうきんだけでなく だんぼーるのさーびすがあるかどうかもしりたいです",
                ruby: "<ruby>料金<rt>りょうきん</rt></ruby>だけでなく、<ruby>段<rt>だん</rt></ruby>ボールのサービスがあるかどうかも<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Ryōkin dake de naku, danbōru no sābisu ga aru ka dō ka mo shiritai desu."
            },
            {
                label: "話者A",
                key: "mover",
                name: "引越し業者",
                line: "わかりました。見積書と一緒に、サービス内容についても詳しくご案内します。",
                target: "わかりました みつもりしょといっしょに さーびすないようについてもくわしくごあんないします",
                ruby: "わかりました。<ruby>見積書<rt>みつもりしょ</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に、サービス<ruby>内容<rt>ないよう</rt></ruby>についても<ruby>詳<rt>くわ</rt></ruby>しくご<ruby>案内<rt>あんない</rt></ruby>します。",
                romaji: "Wakarimashita. Mitsumorisho to issho ni, sābisu naiyō ni tsuite mo kuwashiku go-annai shimasu."
            }
        ],
        {
            ja: [
                "利用者：引越しの見積もりをお願いしたいのですが、何を伝えればいいですか。",
                "引越し業者：現在の住所と新しい住所、それから荷物のおおよその量を教えてください。",
                "利用者：大きな荷物は冷蔵庫と洗濯機とベッドがありますが、段ボールの数はまだはっきりしていません。",
                "引越し業者：それなら、訪問見積もりかオンライン見積もりで確認することもできます。",
                "利用者：料金だけでなく、段ボールのサービスがあるかどうかも知りたいです。",
                "引越し業者：わかりました。見積書と一緒に、サービス内容についても詳しくご案内します。"
            ],
            en: [
                "Customer: I would like to request an estimate for my move. What information should I give you?",
                "Moving Company Staff: Please tell us your current address, your new address, and the approximate amount of luggage.",
                "Customer: My large items are a refrigerator, a washing machine, and a bed, but I am not yet sure how many boxes I will have.",
                "Moving Company Staff: In that case, we can check by an in-home estimate or an online estimate.",
                "Customer: I would also like to know not only the price, but whether you provide cardboard boxes as a service.",
                "Moving Company Staff: Certainly. Along with the estimate, we will also explain the service details in full."
            ],
            "zh-CN": [
                "顾客：我想申请搬家的报价，请问我需要告知哪些信息？",
                "搬家公司工作人员：请告诉我们现在的地址、新地址，以及行李的大致数量。",
                "顾客：大件行李有冰箱、洗衣机和床，不过纸箱的数量我现在还不太确定。",
                "搬家公司工作人员：如果这样的话，也可以通过上门估价或在线估价来确认。",
                "顾客：我不仅想知道费用，也想了解是否提供纸箱服务。",
                "搬家公司工作人员：明白了。我们会连同报价单一起，详细说明服务内容。"
            ],
            "zh-TW": [
                "顧客：我想申請搬家的估價，請問我需要告知哪些資訊？",
                "搬家公司工作人員：請告訴我們目前的地址、新地址，以及行李的大致數量。",
                "顧客：大型行李有冰箱、洗衣機和床，不過紙箱的數量我現在還不太確定。",
                "搬家公司工作人員：如果這樣的話，也可以透過到府估價或線上估價來確認。",
                "顧客：我不只想知道費用，也想了解是否提供紙箱服務。",
                "搬家公司工作人員：明白了。我們會連同估價單一起，詳細說明服務內容。"
            ],
            ko: [
                "이용자: 이사 견적을 부탁하고 싶은데 무엇을 알려 드리면 될까요?",
                "이삿짐 업체 직원: 현재 주소와 새 주소, 그리고 짐의 대략적인 양을 알려 주세요.",
                "이용자: 큰 짐은 냉장고와 세탁기, 침대가 있는데 박스 수는 아직 확실하지 않습니다.",
                "이삿짐 업체 직원: 그렇다면 방문 견적이나 온라인 견적으로 확인할 수도 있습니다.",
                "이용자: 요금뿐 아니라 박스 서비스가 있는지도 알고 싶습니다.",
                "이삿짐 업체 직원: 알겠습니다. 견적서와 함께 서비스 내용도 자세히 안내해 드리겠습니다."
            ],
            vi: [
                "Khách hàng: Tôi muốn yêu cầu báo giá chuyển nhà, vậy tôi cần cung cấp thông tin gì?",
                "Nhân viên công ty chuyển nhà: Xin hãy cho chúng tôi biết địa chỉ hiện tại, địa chỉ mới và số lượng hành lý ước tính.",
                "Khách hàng: Đồ đạc lớn của tôi là tủ lạnh, máy giặt và giường, nhưng số thùng carton thì tôi עדיין chưa biết rõ.",
                "Nhân viên công ty chuyển nhà: Nếu vậy, chúng tôi cũng có thể xác nhận bằng hình thức khảo sát tại nhà hoặc báo giá trực tuyến.",
                "Khách hàng: Tôi muốn biết không chỉ giá tiền mà còn liệu có dịch vụ cung cấp thùng carton hay không.",
                "Nhân viên công ty chuyển nhà: Vâng, tôi hiểu rồi. Cùng với bản báo giá, chúng tôi cũng sẽ hướng dẫn chi tiết về nội dung dịch vụ."
            ]
        }
    ),

    // =====================================================
    // 003 荷造りの計画を立てる
    // =====================================================
    makeB1MovingPreparationDialogue(
        "b1_movingprep_003",
        "荷造りの計画を立てる",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "荷物が多いので、何から荷造りを始めればいいか迷っています。",
                target: "にもつがおおいので なにからにづくりをはじめればいいかまよっています",
                ruby: "<ruby>荷物<rt>にもつ</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いので、<ruby>何<rt>なに</rt></ruby>から<ruby>荷造<rt>にづく</rt></ruby>りを<ruby>始<rt>はじ</rt></ruby>めればいいか<ruby>迷<rt>まよ</rt></ruby>っています。",
                romaji: "Nimotsu ga ōi node, nani kara nizukuri o hajimereba ii ka mayotte imasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "毎日使わない物から先に箱に入れて、最後に必要な物を残すと整理しやすいですよ。",
                target: "まいにちつかわないものからさきにはこにいれて さいごにひつようなものをのこすとせいりしやすいですよ",
                ruby: "<ruby>毎日<rt>まいにち</rt></ruby><ruby>使<rt>つか</rt></ruby>わない<ruby>物<rt>もの</rt></ruby>から<ruby>先<rt>さき</rt></ruby>に<ruby>箱<rt>はこ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れて、<ruby>最後<rt>さいご</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>物<rt>もの</rt></ruby>を<ruby>残<rt>のこ</rt></ruby>すと<ruby>整理<rt>せいり</rt></ruby>しやすいですよ。",
                romaji: "Mainichi tsukawanai mono kara saki ni hako ni irete, saigo ni hitsuyō na mono o nokosu to seiri shiyasui desu yo."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "食器や本など、種類ごとに分けて箱に入れた方がいいでしょうか。",
                target: "しょっきやほんなど しゅるいごとにわけてはこにいれたほうがいいでしょうか",
                ruby: "<ruby>食器<rt>しょっき</rt></ruby>や<ruby>本<rt>ほん</rt></ruby>など、<ruby>種類<rt>しゅるい</rt></ruby>ごとに<ruby>分<rt>わ</rt></ruby>けて<ruby>箱<rt>はこ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れた<ruby>方<rt>ほう</rt></ruby>がいいでしょうか。",
                romaji: "Shokki ya hon nado, shurui goto ni wakete hako ni ireta hō ga ii deshō ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "はい。その方が新しい家で荷ほどきするときにも、どこに何があるかわかりやすいです。",
                target: "はい そのほうがあたらしいいえでにほどきするときにも どこになにがあるかわかりやすいです",
                ruby: "はい。その<ruby>方<rt>ほう</rt></ruby>が<ruby>新<rt>あたら</rt></ruby>しい<ruby>家<rt>いえ</rt></ruby>で<ruby>荷<rt>に</rt></ruby>ほどきするときにも、どこに<ruby>何<rt>なに</rt></ruby>があるかわかりやすいです。",
                romaji: "Hai. Sono hō ga atarashii ie de nihodoki suru toki ni mo, doko ni nani ga aru ka wakariyasui desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "段ボールに中身と置く部屋を書いておけば、当日も困りにくそうですね。",
                target: "だんぼーるになかみとおくへやをかいておけば とうじつもこまりにくそうですね",
                ruby: "<ruby>段<rt>だん</rt></ruby>ボールに<ruby>中身<rt>なかみ</rt></ruby>と<ruby>置<rt>お</rt></ruby>く<ruby>部屋<rt>へや</rt></ruby>を<ruby>書<rt>か</rt></ruby>いておけば、<ruby>当日<rt>とうじつ</rt></ruby>も<ruby>困<rt>こま</rt></ruby>りにくそうですね。",
                romaji: "Danbōru ni nakami to oku heya o kaite okeba, tōjitsu mo komarinikusō desu ne."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "その通りです。割れやすい物には注意の表示もしておくと安心です。",
                target: "そのとおりです われやすいものにはちゅういのひょうじもしておくとあんしんです",
                ruby: "その<ruby>通<rt>とお</rt></ruby>りです。<ruby>割<rt>わ</rt></ruby>れやすい<ruby>物<rt>もの</rt></ruby>には<ruby>注意<rt>ちゅうい</rt></ruby>の<ruby>表示<rt>ひょうじ</rt></ruby>もしておくと<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Sono tōri desu. Wareyasui mono ni wa chūi no hyōji mo shite oku to anshin desu."
            }
        ],
        {
            ja: [
                "利用者：荷物が多いので、何から荷造りを始めればいいか迷っています。",
                "担当者：毎日使わない物から先に箱に入れて、最後に必要な物を残すと整理しやすいですよ。",
                "利用者：食器や本など、種類ごとに分けて箱に入れた方がいいでしょうか。",
                "担当者：はい。その方が新しい家で荷ほどきするときにも、どこに何があるかわかりやすいです。",
                "利用者：段ボールに中身と置く部屋を書いておけば、当日も困りにくそうですね。",
                "担当者：その通りです。割れやすい物には注意の表示もしておくと安心です。"
            ],
            en: [
                "Customer: I have a lot of things, so I am not sure what I should start packing first.",
                "Staff: It is easier if you first pack things you do not use every day, and leave only what you still need until the end.",
                "Customer: Should I pack things like dishes and books separately by category?",
                "Staff: Yes. That makes it easier to know what is where when you unpack in your new home.",
                "Customer: If I write the contents and the room where each box should go, it seems I will have fewer problems on moving day.",
                "Staff: Exactly. It is also reassuring to mark fragile items with a warning label."
            ],
            "zh-CN": [
                "顾客：因为行李很多，我不知道应该先从什么开始打包。",
                "工作人员：先把每天不用的东西装箱，最后再留下需要用的东西，会比较容易整理。",
                "顾客：像餐具和书之类的东西，最好按种类分别装箱吗？",
                "工作人员：是的。这样在新家拆箱的时候，也会更容易知道什么东西放在哪里。",
                "顾客：如果在纸箱上写上内容和要放的房间，搬家当天应该也不容易出问题。",
                "工作人员：正是这样。对易碎物品也标注注意事项的话，会更安心。"
            ],
            "zh-TW": [
                "顧客：因為行李很多，我不知道應該先從什麼開始打包。",
                "工作人員：先把每天不用的東西裝箱，最後再留下需要用的東西，會比較容易整理。",
                "顧客：像餐具和書之類的東西，最好按種類分別裝箱嗎？",
                "工作人員：是的。這樣在新家拆箱的時候，也會更容易知道什麼東西放在哪裡。",
                "顧客：如果在紙箱上寫上內容和要放的房間，搬家當天應該也不容易出問題。",
                "工作人員：正是這樣。對易碎物品也標註注意事項的話，會更安心。"
            ],
            ko: [
                "이용자: 짐이 많아서 무엇부터 짐을 싸야 할지 고민하고 있습니다.",
                "담당자: 매일 쓰지 않는 물건부터 먼저 상자에 넣고, 마지막에 필요한 물건을 남기면 정리하기 쉽습니다.",
                "이용자: 식기나 책처럼 종류별로 나누어 상자에 넣는 편이 좋을까요?",
                "담당자: 네. 그래야 새 집에서 짐을 풀 때도 어디에 무엇이 있는지 알기 쉽습니다.",
                "이용자: 박스에 내용물과 둘 방을 써 두면 당일에도 덜 곤란하겠네요.",
                "담당자: 맞습니다. 깨지기 쉬운 물건에는 주의 표시도 해 두면 안심할 수 있습니다."
            ],
            vi: [
                "Khách hàng: Tôi có nhiều đồ nên đang phân vân không biết nên bắt đầu đóng gói từ đâu.",
                "Người phụ trách: Sẽ dễ sắp xếp hơn nếu bạn cho những đồ không dùng hằng ngày vào thùng trước và để lại những thứ cần dùng đến cuối cùng.",
                "Khách hàng: Những thứ như bát đĩa và sách thì tôi nên chia theo từng loại rồi cho vào thùng phải không?",
                "Người phụ trách: Vâng. Làm như vậy thì khi mở đồ ở nhà mới cũng dễ biết thứ gì ở đâu hơn.",
                "Khách hàng: Nếu viết nội dung và phòng đặt lên thùng carton thì có vẻ ngày chuyển nhà cũng sẽ ít gặp rắc rối hơn.",
                "Người phụ trách: Đúng vậy. Với đồ dễ vỡ, nếu ghi thêm cảnh báo thì sẽ yên tâm hơn."
            ]
        }
    ),

    // =====================================================
    // 004 不要な物を整理する
    // =====================================================
    makeB1MovingPreparationDialogue(
        "b1_movingprep_004",
        "不要な物を整理する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "引越しの前に、使わない物を減らしたいのですが、何から整理するといいでしょうか。",
                target: "ひっこしのまえに つかわないものをへらしたいのですが なにからせいりするといいでしょうか",
                ruby: "<ruby>引越<rt>ひっこ</rt></ruby>しの<ruby>前<rt>まえ</rt></ruby>に、<ruby>使<rt>つか</rt></ruby>わない<ruby>物<rt>もの</rt></ruby>を<ruby>減<rt>へ</rt></ruby>らしたいのですが、<ruby>何<rt>なに</rt></ruby>から<ruby>整理<rt>せいり</rt></ruby>するといいでしょうか。",
                romaji: "Hikkoshi no mae ni, tsukawanai mono o herashitai no desu ga, nani kara seiri suru to ii deshō ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "まず、長い間使っていない服や古い書類などから見直すと判断しやすいです。",
                target: "まず ながいあいつかっていないふくやふるいしょるいなどからみなおすとはんだんしやすいです",
                ruby: "まず、<ruby>長<rt>なが</rt></ruby>い<ruby>間<rt>あいだ</rt></ruby><ruby>使<rt>つか</rt></ruby>っていない<ruby>服<rt>ふく</rt></ruby>や<ruby>古<rt>ふる</rt></ruby>い<ruby>書類<rt>しょるい</rt></ruby>などから<ruby>見直<rt>みなお</rt></ruby>すと<ruby>判断<rt>はんだん</rt></ruby>しやすいです。",
                romaji: "Mazu, nagai aida tsukatte inai fuku ya furui shorui nado kara minaosu to handan shiyasui desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "まだ使える物は、捨てるよりもほかの方法を考えた方がいいですよね。",
                target: "まだつかえるものは すてるよりもほかのほうほうをかんがえたほうがいいですよね",
                ruby: "まだ<ruby>使<rt>つか</rt></ruby>える<ruby>物<rt>もの</rt></ruby>は、<ruby>捨<rt>す</rt></ruby>てるよりもほかの<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えた<ruby>方<rt>ほう</rt></ruby>がいいですよね。",
                romaji: "Mada tsukaeru mono wa, suteru yori mo hoka no hōhō o kangaeta hō ga ii desu yo ne."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "そうですね。人にあげたり、リサイクルショップに持って行ったりする方法もあります。",
                target: "そうですね ひとにあげたり りさいくるしょっぷにもっていったりするほうほうもあります",
                ruby: "そうですね。<ruby>人<rt>ひと</rt></ruby>にあげたり、リサイクルショップに<ruby>持<rt>も</rt></ruby>って<ruby>行<rt>い</rt></ruby>ったりする<ruby>方法<rt>ほうほう</rt></ruby>もあります。",
                romaji: "Sō desu ne. Hito ni agetari, risaikuru shoppu ni motte ittarisuru hōhō mo arimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "粗大ごみとして出す物もあるので、回収の日を確認しておきたいです。",
                target: "そだいごみとしてだすものもあるので かいしゅうのひをかくにんしておきたいです",
                ruby: "<ruby>粗大<rt>そだい</rt></ruby>ごみとして<ruby>出<rt>だ</rt></ruby>す<ruby>物<rt>もの</rt></ruby>もあるので、<ruby>回収<rt>かいしゅう</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しておきたいです。",
                romaji: "Sodai gomi to shite dasu mono mo aru node, kaishū no hi o kakunin shite okitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "自治体によって手続きが違うので、早めに市役所や案内を確認しておくと安心です。",
                target: "じちたいによっててつづきがちがうので はやめにしやくしょやあんないをかくにんしておくとあんしんです",
                ruby: "<ruby>自治体<rt>じちたい</rt></ruby>によって<ruby>手続<rt>てつづ</rt></ruby>きが<ruby>違<rt>ちが</rt></ruby>うので、<ruby>早<rt>はや</rt></ruby>めに<ruby>市役所<rt>しやくしょ</rt></ruby>や<ruby>案内<rt>あんない</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しておくと<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Jichitai ni yotte tetsuzuki ga chigau node, hayame ni shiyakusho ya annai o kakunin shite oku to anshin desu."
            }
        ],
        {
            ja: [
                "利用者：引越しの前に、使わない物を減らしたいのですが、何から整理するといいでしょうか。",
                "担当者：まず、長い間使っていない服や古い書類などから見直すと判断しやすいです。",
                "利用者：まだ使える物は、捨てるよりもほかの方法を考えた方がいいですよね。",
                "担当者：そうですね。人にあげたり、リサイクルショップに持って行ったりする方法もあります。",
                "利用者：粗大ごみとして出す物もあるので、回収の日を確認しておきたいです。",
                "担当者：自治体によって手続きが違うので、早めに市役所や案内を確認しておくと安心です。"
            ],
            en: [
                "Customer: Before moving, I want to reduce the things I do not use. What should I start organizing first?",
                "Staff: It is easier to decide if you start by reviewing things like clothes you have not worn for a long time and old documents.",
                "Customer: For things that can still be used, it is probably better to think of another method rather than simply throwing them away, right?",
                "Staff: Yes. You can give them to someone or take them to a recycle shop.",
                "Customer: Some things need to be thrown away as oversized garbage, so I would like to check the collection day.",
                "Staff: Procedures differ depending on the local government, so it is reassuring to check the city office or guidance information early."
            ],
            "zh-CN": [
                "顾客：搬家之前，我想减少不用的东西，您觉得我先整理什么比较好？",
                "工作人员：首先从很久没穿的衣服和旧文件之类的东西开始重新检查，会比较容易判断。",
                "顾客：对于还能用的东西，比起扔掉，还是考虑其他处理方式比较好吧？",
                "工作人员：是的。也可以送给别人，或者拿去二手回收店。",
                "顾客：有些东西要作为大件垃圾处理，所以我想确认一下回收日期。",
                "工作人员：不同的自治体手续不一样，所以最好尽早查看市政府或相关说明。"
            ],
            "zh-TW": [
                "顧客：搬家之前，我想減少不用的東西，您覺得我先整理什麼比較好？",
                "工作人員：首先從很久沒穿的衣服和舊文件之類的東西開始重新檢查，會比較容易判斷。",
                "顧客：對於還能用的東西，比起扔掉，還是考慮其他處理方式比較好吧？",
                "工作人員：是的。也可以送給別人，或者拿去二手回收店。",
                "顧客：有些東西要作為大型垃圾處理，所以我想確認一下回收日期。",
                "工作人員：不同的自治體手續不一樣，所以最好盡早查看市政府或相關說明。"
            ],
            ko: [
                "이용자: 이사 전에 쓰지 않는 물건을 줄이고 싶은데 무엇부터 정리하면 좋을까요?",
                "담당자: 우선 오랫동안 사용하지 않은 옷이나 오래된 서류부터 다시 보면 판단하기 쉽습니다.",
                "이용자: 아직 사용할 수 있는 물건은 버리기보다 다른 방법을 생각하는 편이 좋겠지요?",
                "담당자: 그렇습니다. 다른 사람에게 주거나 재활용 가게에 가져가는 방법도 있습니다.",
                "이용자: 대형 쓰레기로 버릴 물건도 있어서 수거 날짜를 확인해 두고 싶습니다.",
                "담당자: 지자체마다 절차가 다르니 시청 안내를 빨리 확인해 두는 것이 안심됩니다."
            ],
            vi: [
                "Khách hàng: Trước khi chuyển nhà, tôi muốn giảm bớt những đồ không dùng đến. Tôi nên bắt đầu sắp xếp từ đâu?",
                "Người phụ trách: Trước tiên, nếu bạn xem lại những thứ như quần áo lâu không mặc hoặc giấy tờ cũ thì sẽ dễ quyết định hơn.",
                "Khách hàng: Với những đồ còn dùng được, có lẽ tốt hơn là nên nghĩ đến cách xử lý khác thay vì vứt đi, đúng không?",
                "Người phụ trách: Đúng vậy. Bạn có thể cho người khác hoặc mang đến cửa hàng tái chế.",
                "Khách hàng: Có những món phải bỏ dưới dạng rác cỡ lớn nên tôi muốn kiểm tra ngày thu gom.",
                "Người phụ trách: Thủ tục khác nhau tùy từng địa phương, nên bạn nên kiểm tra thông tin từ tòa thị chính hoặc hướng dẫn liên quan từ sớm."
            ]
        }
    ),

    // =====================================================
    // 005 電気・ガス・水道の手続きをする
    // =====================================================
    makeB1MovingPreparationDialogue(
        "b1_movingprep_005",
        "電気・ガス・水道の手続きをする",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "引越しの前に、電気やガスや水道の手続きもしておきたいです。",
                target: "ひっこしのまえに でんきやがすやすいどうのてつづきもしておきたいです",
                ruby: "<ruby>引越<rt>ひっこ</rt></ruby>しの<ruby>前<rt>まえ</rt></ruby>に、<ruby>電気<rt>でんき</rt></ruby>やガスや<ruby>水道<rt>すいどう</rt></ruby>の<ruby>手続<rt>てつづ</rt></ruby>きもしておきたいです。",
                romaji: "Hikkoshi no mae ni, denki ya gasu ya suidō no tetsuzuki mo shite okitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "旧住所で止める連絡と、新住所で使い始める連絡の両方が必要になります。",
                target: "きゅうじゅうしょでとめるれんらくと しんじゅうしょでつかいはじめるれんらくのりょうほうがひつようになります",
                ruby: "<ruby>旧住所<rt>きゅうじゅうしょ</rt></ruby>で<ruby>止<rt>と</rt></ruby>める<ruby>連絡<rt>れんらく</rt></ruby>と、<ruby>新住所<rt>しんじゅうしょ</rt></ruby>で<ruby>使<rt>つか</rt></ruby>い<ruby>始<rt>はじ</rt></ruby>める<ruby>連絡<rt>れんらく</rt></ruby>の<ruby>両方<rt>りょうほう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>になります。",
                romaji: "Kyūjūsho de tomeru renraku to, shinjūsho de tsukaihajimeru renraku no ryōhō ga hitsuyō ni narimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "ガスは立ち会いが必要だと聞いたのですが、本当ですか。",
                target: "がすはたちあいがひつようだときいたのですが ほんとうですか",
                ruby: "ガスは<ruby>立<rt>た</rt></ruby>ち<ruby>会<rt>あ</rt></ruby>いが<ruby>必要<rt>ひつよう</rt></ruby>だと<ruby>聞<rt>き</rt></ruby>いたのですが、<ruby>本当<rt>ほんとう</rt></ruby>ですか。",
                romaji: "Gasu wa tachiai ga hitsuyō da to kiita no desu ga, hontō desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "はい。新しい家でガスを使えるようにするときは、立ち会いが必要な場合が多いです。",
                target: "はい あたらしいいえでがすをつかえるようにするときは たちあいがひつようなばあいがおおいです",
                ruby: "はい。<ruby>新<rt>あたら</rt></ruby>しい<ruby>家<rt>いえ</rt></ruby>でガスを<ruby>使<rt>つか</rt></ruby>えるようにするときは、<ruby>立<rt>た</rt></ruby>ち<ruby>会<rt>あ</rt></ruby>いが<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いです。",
                romaji: "Hai. Atarashii ie de gasu o tsukaeru yō ni suru toki wa, tachiai ga hitsuyō na baai ga ōi desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "引越し当日から使えるようにしたいので、早めに予約した方がよさそうですね。",
                target: "ひっこしとうじつからつかえるようにしたいので はやめによやくしたほうがよさそうですね",
                ruby: "<ruby>引越<rt>ひっこ</rt></ruby>し<ruby>当日<rt>とうじつ</rt></ruby>から<ruby>使<rt>つか</rt></ruby>えるようにしたいので、<ruby>早<rt>はや</rt></ruby>めに<ruby>予約<rt>よやく</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がよさそうですね。",
                romaji: "Hikkoshi tōjitsu kara tsukaeru yō ni shitai node, hayame ni yoyaku shita hō ga yosasō desu ne."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "その方が安心です。手続きの予定を一覧にしておくと忘れにくいですよ。",
                target: "そのほうがあんしんです てつづきのよていをいちらんにしておくとわすれにくいですよ",
                ruby: "その<ruby>方<rt>ほう</rt></ruby>が<ruby>安心<rt>あんしん</rt></ruby>です。<ruby>手続<rt>てつづ</rt></ruby>きの<ruby>予定<rt>よてい</rt></ruby>を<ruby>一覧<rt>いちらん</rt></ruby>にしておくと<ruby>忘<rt>わす</rt></ruby>れにくいですよ。",
                romaji: "Sono hō ga anshin desu. Tetsuzuki no yotei o ichiran ni shite oku to wasurenikui desu yo."
            }
        ],
        {
            ja: [
                "利用者：引越しの前に、電気やガスや水道の手続きもしておきたいです。",
                "担当者：旧住所で止める連絡と、新住所で使い始める連絡の両方が必要になります。",
                "利用者：ガスは立ち会いが必要だと聞いたのですが、本当ですか。",
                "担当者：はい。新しい家でガスを使えるようにするときは、立ち会いが必要な場合が多いです。",
                "利用者：引越し当日から使えるようにしたいので、早めに予約した方がよさそうですね。",
                "担当者：その方が安心です。手続きの予定を一覧にしておくと忘れにくいですよ。"
            ],
            en: [
                "Customer: Before moving, I would also like to complete the procedures for electricity, gas, and water.",
                "Staff: You will need both the notice to stop service at your old address and the notice to start service at your new address.",
                "Customer: I heard that gas requires someone to be present. Is that true?",
                "Staff: Yes. In many cases, someone needs to be there when gas service is started at the new home.",
                "Customer: I want to be able to use everything from the day I move, so it seems better to make the reservations early.",
                "Staff: That is safer. It is also less likely you will forget if you make a list of the procedures and their dates."
            ],
            "zh-CN": [
                "顾客：搬家前，我也想把电、煤气和自来水的手续办好。",
                "工作人员：需要同时办理在旧地址停止使用的联系，以及在新地址开始使用的联系。",
                "顾客：我听说煤气需要本人到场，这是真的吗？",
                "工作人员：是的。在新家开通煤气时，很多情况下都需要有人在场。",
                "顾客：我想从搬家当天就能使用，所以看起来最好尽早预约。",
                "工作人员：这样会比较安心。把手续和时间整理成清单的话，也不容易忘记。"
            ],
            "zh-TW": [
                "顧客：搬家前，我也想把電、瓦斯和自來水的手續辦好。",
                "工作人員：需要同時辦理在舊地址停止使用的聯絡，以及在新地址開始使用的聯絡。",
                "顧客：我聽說瓦斯需要本人到場，這是真的嗎？",
                "工作人員：是的。在新家開通瓦斯時，很多情況下都需要有人在場。",
                "顧客：我想從搬家當天就能使用，所以看起來最好盡早預約。",
                "工作人員：這樣會比較安心。把手續和時間整理成清單的話，也不容易忘記。"
            ],
            ko: [
                "이용자: 이사 전에 전기, 가스, 수도 절차도 해 두고 싶습니다.",
                "담당자: 기존 주소에서 끊는 연락과 새 주소에서 시작하는 연락 둘 다 필요합니다.",
                "이용자: 가스는 입회가 필요하다고 들었는데 사실인가요?",
                "담당자: 네. 새 집에서 가스를 사용할 수 있게 할 때는 입회가 필요한 경우가 많습니다.",
                "이용자: 이사 당일부터 사용할 수 있게 하고 싶어서 빨리 예약하는 편이 좋겠네요.",
                "담당자: 그 편이 안심됩니다. 절차 일정을 목록으로 만들어 두면 잊기 어렵습니다."
            ],
            vi: [
                "Khách hàng: Trước khi chuyển nhà, tôi cũng muốn làm xong các thủ tục điện, gas và nước.",
                "Người phụ trách: Bạn cần cả việc báo dừng sử dụng ở địa chỉ cũ và báo bắt đầu sử dụng ở địa chỉ mới.",
                "Khách hàng: Tôi nghe nói gas cần có người đứng ra chứng kiến, điều đó có đúng không?",
                "Người phụ trách: Vâng. Khi mở gas ở nhà mới thì trong nhiều trường hợp cần có người có mặt.",
                "Khách hàng: Tôi muốn có thể sử dụng từ ngay ngày chuyển nhà, nên có lẽ nên đặt lịch sớm.",
                "Người phụ trách: Làm vậy sẽ yên tâm hơn. Nếu bạn lập danh sách các thủ tục và thời gian thì cũng sẽ ít quên hơn."
            ]
        }
    ),

    // =====================================================
    // 006 住所変更の手続きを確認する
    // =====================================================
    makeB1MovingPreparationDialogue(
        "b1_movingprep_006",
        "住所変更の手続きを確認する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "引越したあとに、住所変更の手続きはどこでしなければなりませんか。",
                target: "ひっこしたあとに じゅうしょへんこうのてつづきはどこでしなければなりませんか",
                ruby: "<ruby>引越<rt>ひっこ</rt></ruby>したあとに、<ruby>住所変更<rt>じゅうしょへんこう</rt></ruby>の<ruby>手続<rt>てつづ</rt></ruby>きはどこでしなければなりませんか。",
                romaji: "Hikkoshita ato ni, jūsho henkō no tetsuzuki wa doko de shinakereba narimasen ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "市役所で転入や転居の届出をする必要があります。期限も確認しておきましょう。",
                target: "しやくしょでてんにゅうやてんきょのとどけでをするひつようがあります きげんもかくにんしておきましょう",
                ruby: "<ruby>市役所<rt>しやくしょ</rt></ruby>で<ruby>転入<rt>てんにゅう</rt></ruby>や<ruby>転居<rt>てんきょ</rt></ruby>の<ruby>届出<rt>とどけで</rt></ruby>をする<ruby>必要<rt>ひつよう</rt></ruby>があります。<ruby>期限<rt>きげん</rt></ruby>も<ruby>確認<rt>かくにん</rt></ruby>しておきましょう。",
                romaji: "Shiyakusho de tennyū ya tenkyo no todokede o suru hitsuyō ga arimasu. Kigen mo kakunin shite okimashō."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "在留カードやマイナンバーの住所も変更しなければならないですよね。",
                target: "ざいりゅうかーどやまいなんばーのじゅうしょもへんこうしなければならないですよね",
                ruby: "<ruby>在留<rt>ざいりゅう</rt></ruby>カードやマイナンバーの<ruby>住所<rt>じゅうしょ</rt></ruby>も<ruby>変更<rt>へんこう</rt></ruby>しなければならないですよね。",
                romaji: "Zairyū kādo ya mainanbā no jūsho mo henkō shinakereba naranai desu yo ne."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "はい。必要な書類を持って行けば、一度の来庁で手続きできることもあります。",
                target: "はい ひつようなしょるいをもっていけば いちどのらいちょうでてつづきできることもあります",
                ruby: "はい。<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>を<ruby>持<rt>も</rt></ruby>って<ruby>行<rt>い</rt></ruby>けば、<ruby>一度<rt>いちど</rt></ruby>の<ruby>来庁<rt>らいちょう</rt></ruby>で<ruby>手続<rt>てつづ</rt></ruby>きできることもあります。",
                romaji: "Hai. Hitsuyō na shorui o motte ikeba, ichido no raichō de tetsuzuki dekiru koto mo arimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "銀行や学校などにも新しい住所を伝える必要がありますね。",
                target: "ぎんこうやがっこうなどにもあたらしいじゅうしょをつたえるひつようがありますね",
                ruby: "<ruby>銀行<rt>ぎんこう</rt></ruby>や<ruby>学校<rt>がっこう</rt></ruby>などにも<ruby>新<rt>あたら</rt></ruby>しい<ruby>住所<rt>じゅうしょ</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>える<ruby>必要<rt>ひつよう</rt></ruby>がありますね。",
                romaji: "Ginkō ya gakkō nado ni mo atarashii jūsho o tsutaeru hitsuyō ga arimasu ne."
            },
            {
                label: "話者A",
                key: "staff",
                name: "担当者",
                line: "そうです。あとから困らないように、変更が必要な場所を一覧にしておくと便利です。",
                target: "そうです あとからこまらないように へんこうがひつようなばしょをいちらんにしておくとべんりです",
                ruby: "そうです。あとから<ruby>困<rt>こま</rt></ruby>らないように、<ruby>変更<rt>へんこう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>一覧<rt>いちらん</rt></ruby>にしておくと<ruby>便利<rt>べんり</rt></ruby>です。",
                romaji: "Sō desu. Atokara komaranai yō ni, henkō ga hitsuyō na basho o ichiran ni shite oku to benri desu."
            }
        ],
        {
            ja: [
                "利用者：引越したあとに、住所変更の手続きはどこでしなければなりませんか。",
                "担当者：市役所で転入や転居の届出をする必要があります。期限も確認しておきましょう。",
                "利用者：在留カードやマイナンバーの住所も変更しなければならないですよね。",
                "担当者：はい。必要な書類を持って行けば、一度の来庁で手続きできることもあります。",
                "利用者：銀行や学校などにも新しい住所を伝える必要がありますね。",
                "担当者：そうです。あとから困らないように、変更が必要な場所を一覧にしておくと便利です。"
            ],
            en: [
                "Customer: After moving, where do I need to complete the address change procedures?",
                "Staff: You need to submit a moving-in or change-of-address notification at city hall. You should also check the deadline.",
                "Customer: I also need to change the address on my residence card and My Number records, right?",
                "Staff: Yes. If you bring the necessary documents, in some cases you can complete the procedures in a single visit.",
                "Customer: I also need to inform places like my bank and my school of my new address.",
                "Staff: Exactly. It is useful to make a list of the places where changes are needed so you will not have trouble later."
            ],
            "zh-CN": [
                "顾客：搬家以后，我必须在哪里办理地址变更手续？",
                "工作人员：需要在市政府办理迁入或住址变更申报，也要确认期限。",
                "顾客：在留卡和个人编号的地址也必须变更，对吧？",
                "工作人员：是的。如果带上必要文件，有时一次去市政府就可以办完手续。",
                "顾客：我也需要把新地址告诉银行和学校等机构。",
                "工作人员：没错。为了避免之后出问题，把需要变更的地方整理成清单会很方便。"
            ],
            "zh-TW": [
                "顧客：搬家以後，我必須在哪裡辦理地址變更手續？",
                "工作人員：需要在市政府辦理遷入或住址變更申報，也要確認期限。",
                "顧客：在留卡和個人編號的地址也必須變更，對吧？",
                "工作人員：是的。如果帶上必要文件，有時一次去市政府就可以辦完手續。",
                "顧客：我也需要把新地址告訴銀行和學校等機構。",
                "工作人員：沒錯。為了避免之後出問題，把需要變更的地方整理成清單會很方便。"
            ],
            ko: [
                "이용자: 이사한 후에 주소 변경 절차는 어디에서 해야 하나요?",
                "담당자: 시청에서 전입이나 전거 신고를 해야 합니다. 기한도 확인해 둡시다.",
                "이용자: 재류 카드와 마이넘버의 주소도 바꿔야 하지요?",
                "담당자: 네. 필요한 서류를 가져가면 한 번 방문으로 처리할 수 있는 경우도 있습니다.",
                "이용자: 은행이나 학교 등에도 새 주소를 알려야 하겠네요.",
                "담당자: 그렇습니다. 나중에 곤란하지 않도록 변경이 필요한 곳을 목록으로 만들어 두면 편리합니다."
            ],
            vi: [
                "Khách hàng: Sau khi chuyển nhà, tôi phải làm thủ tục đổi địa chỉ ở đâu?",
                "Người phụ trách: Bạn cần nộp thông báo chuyển đến hoặc thay đổi nơi ở tại tòa thị chính. Cũng nên kiểm tra thời hạn.",
                "Khách hàng: Tôi cũng phải thay đổi địa chỉ trên thẻ cư trú và thông tin My Number, đúng không?",
                "Người phụ trách: Vâng. Nếu mang theo giấy tờ cần thiết, trong một số trường hợp bạn có thể hoàn tất trong một lần đến cơ quan.",
                "Khách hàng: Tôi cũng cần thông báo địa chỉ mới cho ngân hàng và trường học.",
                "Người phụ trách: Đúng vậy. Để tránh rắc rối về sau, sẽ tiện hơn nếu bạn lập danh sách những nơi cần thay đổi thông tin."
            ]
        }
    ),

    // =====================================================
    // 007 学校や職場への連絡をする
    // =====================================================
    makeB1MovingPreparationDialogue(
        "b1_movingprep_007",
        "学校や職場への連絡をする",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "引越しをするので、学校にも早めに知らせておいた方がいいでしょうか。",
                target: "ひっこしをするので がっこうにもはやめにしらせておいたほうがいいでしょうか",
                ruby: "<ruby>引越<rt>ひっこ</rt></ruby>しをするので、<ruby>学校<rt>がっこう</rt></ruby>にも<ruby>早<rt>はや</rt></ruby>めに<ruby>知<rt>し</rt></ruby>らせておいた<ruby>方<rt>ほう</rt></ruby>がいいでしょうか。",
                romaji: "Hikkoshi o suru node, gakkō ni mo hayame ni shirasete oita hō ga ii deshō ka."
            },
            {
                label: "話者A",
                key: "schoolStaff",
                name: "学校職員",
                line: "はい。通学方法や書類の手続きに関わることがありますので、できるだけ早くご連絡ください。",
                target: "はい つうがくほうほうやしょるいのてつづきにかかわることがありますので できるだけはやくごれんらくください",
                ruby: "はい。<ruby>通学方法<rt>つうがくほうほう</rt></ruby>や<ruby>書類<rt>しょるい</rt></ruby>の<ruby>手続<rt>てつづ</rt></ruby>きに<ruby>関<rt>かか</rt></ruby>わることがありますので、できるだけ<ruby>早<rt>はや</rt></ruby>くご<ruby>連絡<rt>れんらく</rt></ruby>ください。",
                romaji: "Hai. Tsūgaku hōhō ya shorui no tetsuzuki ni kakawaru koto ga arimasu node, dekiru dake hayaku go-renraku kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "職場にも新しい住所を伝える必要がありますし、引越しの日に休みを取る相談もしたいです。",
                target: "しょくばにもあたらしいじゅうしょをつたえるひつようがありますし ひっこしのひにやすみをとるそうだんもしたいです",
                ruby: "<ruby>職場<rt>しょくば</rt></ruby>にも<ruby>新<rt>あたら</rt></ruby>しい<ruby>住所<rt>じゅうしょ</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>える<ruby>必要<rt>ひつよう</rt></ruby>がありますし、<ruby>引越<rt>ひっこ</rt></ruby>しの<ruby>日<rt>ひ</rt></ruby>に<ruby>休<rt>やす</rt></ruby>みを<ruby>取<rt>と</rt></ruby>る<ruby>相談<rt>そうだん</rt></ruby>もしたいです。",
                romaji: "Shokuba ni mo atarashii jūsho o tsutaeru hitsuyō ga arimasu shi, hikkoshi no hi ni yasumi o toru sōdan mo shitai desu."
            },
            {
                label: "話者A",
                key: "coworker",
                name: "職場の人",
                line: "それなら、予定が決まった時点で上司に相談しておくと安心ですね。",
                target: "それなら よていがきまったじてんでじょうしにそうだんしておくとあんしんですね",
                ruby: "それなら、<ruby>予定<rt>よてい</rt></ruby>が<ruby>決<rt>き</rt></ruby>まった<ruby>時点<rt>じてん</rt></ruby>で<ruby>上司<rt>じょうし</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>しておくと<ruby>安心<rt>あんしん</rt></ruby>ですね。",
                romaji: "Sore nara, yotei ga kimatta jiten de jōshi ni sōdan shite oku to anshin desu ne."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "急に伝えると迷惑をかけるかもしれないので、早めに相談するようにします。",
                target: "きゅうにつたえるとめいわくをかけるかもしれないので はやめにそうだんするようにします",
                ruby: "<ruby>急<rt>きゅう</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>えると<ruby>迷惑<rt>めいわく</rt></ruby>をかけるかもしれないので、<ruby>早<rt>はや</rt></ruby>めに<ruby>相談<rt>そうだん</rt></ruby>するようにします。",
                romaji: "Kyū ni tsutaeru to meiwaku o kakeru kamo shirenai node, hayame ni sōdan suru yō ni shimasu."
            },
            {
                label: "話者A",
                key: "coworker",
                name: "職場の人",
                line: "その方がいいと思います。必要なら、引継ぎについても一緒に考えましょう。",
                target: "そのほうがいいとおもいます ひつようなら ひきつぎについてもいっしょにかんがえましょう",
                ruby: "その<ruby>方<rt>ほう</rt></ruby>がいいと<ruby>思<rt>おも</rt></ruby>います。<ruby>必要<rt>ひつよう</rt></ruby>なら、<ruby>引継<rt>ひきつ</rt></ruby>ぎについても<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Sono hō ga ii to omoimasu. Hitsuyō nara, hikitsugi ni tsuite mo issho ni kangaemashō."
            }
        ],
        {
            ja: [
                "利用者：引越しをするので、学校にも早めに知らせておいた方がいいでしょうか。",
                "学校職員：はい。通学方法や書類の手続きに関わることがありますので、できるだけ早くご連絡ください。",
                "利用者：職場にも新しい住所を伝える必要がありますし、引越しの日に休みを取る相談もしたいです。",
                "職場の人：それなら、予定が決まった時点で上司に相談しておくと安心ですね。",
                "利用者：急に伝えると迷惑をかけるかもしれないので、早めに相談するようにします。",
                "職場の人：その方がいいと思います。必要なら、引継ぎについても一緒に考えましょう。"
            ],
            en: [
                "Customer: Since I am moving, do you think I should inform the school early as well?",
                "School Staff: Yes. It may affect commuting methods and document procedures, so please contact us as early as possible.",
                "Customer: I also need to tell my workplace my new address, and I would like to talk about taking a day off on the moving day.",
                "Coworker: In that case, it would be reassuring to discuss it with your supervisor as soon as the plan is decided.",
                "Customer: If I tell them suddenly, it might cause inconvenience, so I will make sure to consult them early.",
                "Coworker: I think that is best. If necessary, we can also think together about the handover of your work."
            ],
            "zh-CN": [
                "顾客：因为我要搬家，您觉得我也应该尽早通知学校吗？",
                "学校工作人员：是的。这可能会关系到上学方式和文件手续，所以请尽早联系我们。",
                "顾客：我也需要把新地址告诉工作单位，还想商量一下搬家那天请假的事情。",
                "同事：那样的话，计划一确定，就先和上司商量会比较安心。",
                "顾客：如果突然通知的话，可能会给别人添麻烦，所以我会尽早去商量。",
                "同事：我觉得这样比较好。如果需要的话，我们也可以一起考虑工作交接。"
            ],
            "zh-TW": [
                "顧客：因為我要搬家，您覺得我也應該盡早通知學校嗎？",
                "學校工作人員：是的。這可能會關係到上學方式和文件手續，所以請盡早聯絡我們。",
                "顧客：我也需要把新地址告訴工作單位，還想商量一下搬家那天請假的事情。",
                "同事：那樣的話，計畫一確定，就先和上司商量會比較安心。",
                "顧客：如果突然通知的話，可能會給別人添麻煩，所以我會盡早去商量。",
                "同事：我覺得這樣比較好。如果需要的話，我們也可以一起考慮工作交接。"
            ],
            ko: [
                "이용자: 이사를 하게 되어 학교에도 빨리 알려 두는 편이 좋을까요?",
                "학교 직원: 네. 통학 방법이나 서류 절차와 관련될 수 있으니 가능한 한 빨리 연락해 주세요.",
                "이용자: 직장에도 새 주소를 알려야 하고, 이사하는 날 휴가를 내는 상담도 하고 싶습니다.",
                "직장 동료: 그렇다면 일정이 정해진 시점에 상사와 상담해 두면 안심되겠네요.",
                "이용자: 갑자기 말하면 폐를 끼칠 수도 있으니 빨리 상담하도록 하겠습니다.",
                "직장 동료: 그 편이 좋다고 생각합니다. 필요하면 인수인계에 대해서도 함께 생각해 봅시다."
            ],
            vi: [
                "Khách hàng: Vì tôi sắp chuyển nhà, liệu tôi cũng nên báo sớm cho nhà trường không?",
                "Nhân viên nhà trường: Vâng. Việc này có thể liên quan đến cách đi học và thủ tục giấy tờ, nên xin hãy liên lạc với chúng tôi càng sớm càng tốt.",
                "Khách hàng: Tôi cũng cần báo địa chỉ mới cho nơi làm việc và muốn trao đổi về việc xin nghỉ vào ngày chuyển nhà.",
                "Đồng nghiệp: Nếu vậy, khi kế hoạch đã được quyết định, bạn nên trao đổi trước với cấp trên để yên tâm hơn.",
                "Khách hàng: Nếu báo đột ngột thì có thể sẽ làm phiền mọi người, nên tôi sẽ cố gắng trao đổi sớm.",
                "Đồng nghiệp: Tôi nghĩ như vậy là tốt. Nếu cần, chúng ta cũng có thể cùng nghĩ về việc bàn giao công việc."
            ]
        }
    ),

    // =====================================================
    // 008 引越し当日の確認をする
    // =====================================================
    makeB1MovingPreparationDialogue(
        "b1_movingprep_008",
        "引越し当日の確認をする",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "引越し当日は何か忘れやすいことがありますか。",
                target: "ひっこしとうじつはなにかわすれやすいことがありますか",
                ruby: "<ruby>引越<rt>ひっこ</rt></ruby>し<ruby>当日<rt>とうじつ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>か<ruby>忘<rt>わす</rt></ruby>れやすいことがありますか。",
                romaji: "Hikkoshi tōjitsu wa nanika wasureyasui koto ga arimasu ka."
            },
            {
                label: "話者A",
                key: "mover",
                name: "引越し業者",
                line: "貴重品や大事な書類を荷物と一緒にしてしまわないように気をつけてください。",
                target: "きちょうひんやだいじなしょるいをにもつといっしょにしてしまわないようにきをつけてください",
                ruby: "<ruby>貴重品<rt>きちょうひん</rt></ruby>や<ruby>大事<rt>だいじ</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>を<ruby>荷物<rt>にもつ</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>にしてしまわないように<ruby>気<rt>き</rt></ruby>をつけてください。",
                romaji: "Kichōhin ya daiji na shorui o nimotsu to issho ni shite shimawanai yō ni ki o tsukete kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "すぐに使う物は別のバッグにまとめておいた方がよさそうですね。",
                target: "すぐにつかうものはべつのばっぐにまとめておいたほうがよさそうですね",
                ruby: "すぐに<ruby>使<rt>つか</rt></ruby>う<ruby>物<rt>もの</rt></ruby>は<ruby>別<rt>べつ</rt></ruby>のバッグにまとめておいた<ruby>方<rt>ほう</rt></ruby>がよさそうですね。",
                romaji: "Sugu ni tsukau mono wa betsu no baggu ni matomete oita hō ga yosasō desu ne."
            },
            {
                label: "話者A",
                key: "mover",
                name: "引越し業者",
                line: "はい。携帯電話の充電器や着替え、薬などは手元にあると安心です。",
                target: "はい けいたいでんわのじゅうでんきやきがえ くすりなどはてもとにあるとあんしんです",
                ruby: "はい。<ruby>携帯電話<rt>けいたいでんわ</rt></ruby>の<ruby>充電器<rt>じゅうでんき</rt></ruby>や<ruby>着替<rt>きが</rt></ruby>え、<ruby>薬<rt>くすり</rt></ruby>などは<ruby>手元<rt>てもと</rt></ruby>にあると<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Hai. Keitai denwa no jūdenki ya kigae, kusuri nado wa temoto ni aru to anshin desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "旧居を出る前に、部屋の中や忘れ物を最後に確認しておきます。",
                target: "きゅうきょをでるまえに へやのなかやわすれものをさいごにかくにんしておきます",
                ruby: "<ruby>旧居<rt>きゅうきょ</rt></ruby>を<ruby>出<rt>で</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に、<ruby>部屋<rt>へや</rt></ruby>の<ruby>中<rt>なか</rt></ruby>や<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>を<ruby>最後<rt>さいご</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しておきます。",
                romaji: "Kyūkyo o deru mae ni, heya no naka ya wasuremono o saigo ni kakunin shite okimasu."
            },
            {
                label: "話者A",
                key: "mover",
                name: "引越し業者",
                line: "それが大切です。新居に着いたあとも、荷物の数を確認してから作業を終えるようにしましょう。",
                target: "それがたいせつです しんきょについたあとも にもつのかずをかくにんしてからさぎょうをおえるようにしましょう",
                ruby: "それが<ruby>大切<rt>たいせつ</rt></ruby>です。<ruby>新居<rt>しんきょ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いたあとも、<ruby>荷物<rt>にもつ</rt></ruby>の<ruby>数<rt>かず</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してから<ruby>作業<rt>さぎょう</rt></ruby>を<ruby>終<rt>お</rt></ruby>えるようにしましょう。",
                romaji: "Sore ga taisetsu desu. Shinkyo ni tsuita ato mo, nimotsu no kazu o kakunin shite kara sagyō o oeru yō ni shimashō."
            }
        ],
        {
            ja: [
                "利用者：引越し当日は何か忘れやすいことがありますか。",
                "引越し業者：貴重品や大事な書類を荷物と一緒にしてしまわないように気をつけてください。",
                "利用者：すぐに使う物は別のバッグにまとめておいた方がよさそうですね。",
                "引越し業者：はい。携帯電話の充電器や着替え、薬などは手元にあると安心です。",
                "利用者：旧居を出る前に、部屋の中や忘れ物を最後に確認しておきます。",
                "引越し業者：それが大切です。新居に着いたあとも、荷物の数を確認してから作業を終えるようにしましょう。"
            ],
            en: [
                "Customer: On moving day, is there anything people often forget?",
                "Moving Company Staff: Please be careful not to pack valuables or important documents together with your regular luggage.",
                "Customer: It seems better to keep things I need right away together in a separate bag.",
                "Moving Company Staff: Yes. It is reassuring to keep items like your phone charger, a change of clothes, and medicine close at hand.",
                "Customer: Before leaving the old home, I will do one last check of the room and make sure I have not forgotten anything.",
                "Moving Company Staff: That is important. After arriving at the new home, you should also check the number of items before finishing the work."
            ],
            "zh-CN": [
                "顾客：搬家当天，有什么事情是比较容易忘记的吗？",
                "搬家公司工作人员：请注意不要把贵重物品和重要文件一起装进普通行李里。",
                "顾客：马上要用的东西，似乎最好放在另一个包里单独整理好。",
                "搬家公司工作人员：是的。像手机充电器、换洗衣物和药品等放在手边会更安心。",
                "顾客：离开旧家之前，我会最后再确认一下房间里面和有没有忘记带东西。",
                "搬家公司工作人员：那很重要。到新家以后，也请确认行李数量后再结束作业。"
            ],
            "zh-TW": [
                "顧客：搬家當天，有什麼事情是比較容易忘記的嗎？",
                "搬家公司工作人員：請注意不要把貴重物品和重要文件一起裝進普通行李裡。",
                "顧客：馬上要用的東西，似乎最好放在另一個包裡單獨整理好。",
                "搬家公司工作人員：是的。像手機充電器、換洗衣物和藥品等放在手邊會更安心。",
                "顧客：離開舊家之前，我會最後再確認一下房間裡面和有沒有忘記帶東西。",
                "搬家公司工作人員：那很重要。到新家以後，也請確認行李數量後再結束作業。"
            ],
            ko: [
                "이용자: 이사 당일에는 무엇을 잊기 쉬운가요?",
                "이삿짐 업체 직원: 귀중품이나 중요한 서류를 일반 짐과 함께 넣어 버리지 않도록 주의해 주세요.",
                "이용자: 바로 쓸 물건은 따로 가방에 모아 두는 편이 좋겠네요.",
                "이삿짐 업체 직원: 네. 휴대전화 충전기나 갈아입을 옷, 약 등은 손에 닿는 곳에 있으면 안심됩니다.",
                "이용자: 옛집을 나가기 전에 방 안과 두고 가는 물건이 없는지 마지막으로 확인하겠습니다.",
                "이삿짐 업체 직원: 그것이 중요합니다. 새 집에 도착한 뒤에도 짐의 수를 확인한 후 작업을 마치도록 합시다."
            ],
            vi: [
                "Khách hàng: Vào ngày chuyển nhà, có điều gì mọi người thường dễ quên không?",
                "Nhân viên công ty chuyển nhà: Xin hãy cẩn thận đừng để đồ có giá trị và giấy tờ quan trọng lẫn vào hành lý thông thường.",
                "Khách hàng: Có vẻ tốt hơn là tôi nên để những thứ cần dùng ngay vào một túi riêng.",
                "Nhân viên công ty chuyển nhà: Vâng. Sẽ yên tâm hơn nếu những thứ như bộ sạc điện thoại, quần áo thay và thuốc được để trong tầm tay.",
                "Khách hàng: Trước khi rời nhà cũ, tôi sẽ kiểm tra lần cuối trong phòng và xem có quên thứ gì không.",
                "Nhân viên công ty chuyển nhà: Điều đó rất quan trọng. Sau khi đến nhà mới, bạn cũng nên kiểm tra số lượng hành lý rồi mới kết thúc công việc."
            ]
        }
    )
];