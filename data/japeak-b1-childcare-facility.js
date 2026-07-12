// =====================================================
// Japeak B1 Level
// Scene: 保育施設を利用しよう
// File: data/japeak-b1-childcare-facility.js
// Category Key: b1_childcare_facility
// =====================================================

const b1ChildcareFacilityLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1ChildcareFacilityTranslations(translations) {
    const completed = {};

    b1ChildcareFacilityLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1ChildcareFacilityContext = {
    ja: "保育施設を利用するために、施設の種類、見学、申し込み、保育時間や料金、アレルギーや健康状態、慣らし保育、毎日の持ち物、欠席や送迎変更などについて質問したり伝えたりする日本語を練習します。",

    en: "Practice Japanese for using childcare facilities, including asking about types of facilities, tours, applications, childcare hours and fees, allergies and health conditions, gradual adjustment periods, daily items to bring, absences, and changes to pickup arrangements.",

    "zh-CN": "练习使用保育设施时需要的日语，包括询问设施种类、参观、申请、保育时间和费用，说明过敏和健康状况，了解适应期、每日携带物品、请假以及接送变更。",

    "zh-TW": "練習使用保育設施時需要的日語，包括詢問設施種類、參觀、申請、保育時間和費用，說明過敏和健康狀況，了解適應期、每日攜帶物品、請假以及接送變更。",

    ko: "보육 시설을 이용하기 위해 시설의 종류, 견학, 신청, 보육 시간과 요금, 알레르기와 건강 상태, 적응 보육, 매일 준비할 물건, 결석과 등하원 변경 등에 대해 질문하고 전달하는 일본어를 연습합니다.",

    vi: "Luyện tiếng Nhật để sử dụng cơ sở giữ trẻ, bao gồm hỏi về các loại cơ sở, tham quan, đăng ký, giờ giữ trẻ và chi phí, thông báo về dị ứng và tình trạng sức khỏe, thời gian làm quen, đồ cần mang hằng ngày, nghỉ học và thay đổi người đưa đón.",

    tl: "Practice Japanese for using childcare facilities, including asking about facility types, tours, applications, childcare hours and fees, allergies, health conditions, adjustment periods, daily items, absences, and pickup changes.",

    id: "Latihan bahasa Jepang untuk menggunakan fasilitas penitipan anak, termasuk bertanya tentang jenis fasilitas, kunjungan, pendaftaran, jam dan biaya penitipan, alergi dan kondisi kesehatan, masa penyesuaian, barang yang dibawa setiap hari, ketidakhadiran, dan perubahan penjemputan.",

    th: "ฝึกภาษาญี่ปุ่นสำหรับการใช้สถานรับเลี้ยงเด็ก เช่น การสอบถามประเภทของสถานที่ การเยี่ยมชม การสมัคร เวลาและค่าใช้จ่ายในการดูแลเด็ก การแจ้งอาการแพ้และสุขภาพ ช่วงปรับตัว ของที่ต้องนำมาในแต่ละวัน การหยุดเรียน และการเปลี่ยนผู้มารับเด็ก",

    my: "ကလေးထိန်းကျောင်းများကို အသုံးပြုရန် ကျောင်းအမျိုးအစား၊ လေ့လာကြည့်ရှုခြင်း၊ လျှောက်ထားခြင်း၊ စောင့်ရှောက်ချိန်နှင့် ကုန်ကျစရိတ်၊ ဓာတ်မတည့်မှုနှင့် ကျန်းမာရေးအခြေအနေ၊ အလေ့အကျင့်ကာလ၊ နေ့စဉ်ယူလာရမည့်ပစ္စည်းများ၊ ပျက်ကွက်ခြင်းနှင့် လာကြိုသူ ပြောင်းလဲခြင်းတို့အကြောင်း ဂျပန်စကားကို လေ့ကျင့်ပါ။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់ប្រើប្រាស់កន្លែងថែទាំកុមារ រួមមានការសួរអំពីប្រភេទកន្លែង ការទៅមើល ការដាក់ពាក្យ ម៉ោងនិងថ្លៃថែទាំ អាឡែស៊ីនិងសុខភាព រយៈពេលសម្របខ្លួន សម្ភារៈដែលត្រូវយករាល់ថ្ងៃ ការអវត្តមាន និងការផ្លាស់ប្តូរអ្នកមកទទួលកុមារ។",

    ne: "बाल हेरचाह केन्द्र प्रयोग गर्न केन्द्रका प्रकार, भ्रमण, आवेदन, हेरचाह समय र शुल्क, एलर्जी र स्वास्थ्य अवस्था, बिस्तारै बानी बसाल्ने अवधि, दैनिक ल्याउनुपर्ने सामान, अनुपस्थिति र बच्चा लिन आउने व्यक्तिको परिवर्तनबारे जापानीमा प्रश्न गर्ने र जानकारी दिने अभ्यास।",

    mn: "Хүүхэд асрах байгууллага ашиглахтай холбоотой байгууллагын төрөл, танилцах аялал, өргөдөл, асрах цаг ба төлбөр, харшил болон эрүүл мэндийн байдал, дасгах хугацаа, өдөр бүр авчрах зүйлс, таслалт болон хүүхэд авах хүн өөрчлөгдөх талаар япон хэлээр асууж, мэдээлэх дадлага.",

    si: "ළමා සුරැකුම් ආයතන භාවිතා කිරීම සඳහා ආයතන වර්ග, නිරීක්ෂණ චාරිකා, අයදුම්පත්, සුරැකුම් වේලාව සහ ගාස්තු, අසාත්මිකතා සහ සෞඛ්‍ය තත්ත්වය, හුරු වීමේ කාලය, දිනපතා ගෙන ආ යුතු දේ, නොපැමිණීම සහ දරුවා රැගෙන යන පුද්ගලයා වෙනස් කිරීම ගැන ජපන් භාෂාවෙන් විමසීමට සහ දැනුම් දීමට පුහුණු වීම.",

    bn: "শিশু পরিচর্যা প্রতিষ্ঠান ব্যবহারের জন্য প্রতিষ্ঠানের ধরন, পরিদর্শন, আবেদন, পরিচর্যার সময় ও খরচ, অ্যালার্জি ও স্বাস্থ্য অবস্থা, ধীরে ধীরে মানিয়ে নেওয়ার সময়, প্রতিদিন আনার জিনিস, অনুপস্থিতি এবং শিশুকে নিতে আসা ব্যক্তির পরিবর্তন সম্পর্কে জাপানিতে প্রশ্ন ও তথ্য দেওয়ার অনুশীলন।",

    pt: "Prática de japonês para utilizar instituições de cuidado infantil, incluindo perguntas sobre tipos de instalações, visitas, inscrições, horários e taxas, alergias e condições de saúde, período de adaptação, itens diários, ausências e mudanças na pessoa responsável por buscar a criança.",

    es: "Práctica de japonés para utilizar centros de cuidado infantil, incluyendo preguntas sobre tipos de centros, visitas, solicitudes, horarios y tarifas, alergias y estado de salud, período de adaptación, objetos diarios, ausencias y cambios en la persona que recoge al niño.",

    fr: "Entraînement en japonais pour utiliser une structure d'accueil pour enfants, notamment poser des questions sur les types d'établissements, les visites, les inscriptions, les horaires et les frais, signaler les allergies et l'état de santé, comprendre la période d'adaptation, les affaires à apporter, les absences et les changements de personne venant chercher l'enfant.",

    ru: "Практика японского языка для пользования детскими учреждениями: виды учреждений, посещение перед поступлением, подача заявления, часы работы и оплата, аллергии и состояние здоровья, период адаптации, ежедневные вещи, отсутствие и изменение человека, забирающего ребёнка.",

    uk: "Практика японської мови для користування дитячими закладами: види закладів, ознайомчі відвідування, подання заяви, години роботи та оплата, алергії й стан здоров'я, період адаптації, щоденні речі, відсутність і зміна людини, яка забирає дитину."
};

const b1ChildcareFacilitySpeakerNames = {

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

    cityStaff: {
        ja: "市職員",
        en: "City Official",
        "zh-CN": "市政府工作人员",
        "zh-TW": "市政府工作人員",
        ko: "시청 직원",
        vi: "Nhân viên thành phố",
        tl: "City official",
        id: "Petugas kota",
        th: "เจ้าหน้าที่เมือง",
        my: "မြို့ဝန်ထမ်း",
        km: "មន្ត្រីក្រុង",
        ne: "नगर कर्मचारी",
        mn: "Хотын ажилтан",
        si: "නගර නිලධාරියා",
        bn: "সিটি কর্মকর্তা",
        pt: "Funcionário municipal",
        es: "Funcionario municipal",
        fr: "Agent municipal",
        ru: "Сотрудник муниципалитета",
        uk: "Міський працівник"
    },

    facilityStaff: {
        ja: "施設職員",
        en: "Facility Staff",
        "zh-CN": "设施工作人员",
        "zh-TW": "設施工作人員",
        ko: "시설 직원",
        vi: "Nhân viên cơ sở",
        tl: "Facility staff",
        id: "Petugas fasilitas",
        th: "เจ้าหน้าที่สถานรับเลี้ยงเด็ก",
        my: "ကလေးထိန်းဌာနဝန်ထမ်း",
        km: "បុគ្គលិកមណ្ឌលថែទាំកុមារ",
        ne: "बाल हेरचाह केन्द्र कर्मचारी",
        mn: "Хүүхэд асрах байгууллагын ажилтан",
        si: "ළමා සුරැකුම් ආයතන නිලධාරියා",
        bn: "শিশু পরিচর্যা প্রতিষ্ঠানের কর্মী",
        pt: "Funcionário da instituição",
        es: "Personal del centro",
        fr: "Personnel de l'établissement",
        ru: "Сотрудник детского учреждения",
        uk: "Працівник дитячого закладу"
    },

    teacher: {
        ja: "保育士",
        en: "Childcare Teacher",
        "zh-CN": "保育员",
        "zh-TW": "保育人員",
        ko: "보육교사",
        vi: "Giáo viên giữ trẻ",
        tl: "Childcare teacher",
        id: "Guru penitipan anak",
        th: "ครูผู้ดูแลเด็ก",
        my: "ကလေးထိန်းဆရာမ",
        km: "គ្រូថែទាំកុមារ",
        ne: "बाल हेरचाह शिक्षक",
        mn: "Хүүхэд асрах багш",
        si: "ළමා සුරැකුම් ගුරුවරයා",
        bn: "শিশু পরিচর্যা শিক্ষক",
        pt: "Educador infantil",
        es: "Educador infantil",
        fr: "Éducateur de jeunes enfants",
        ru: "Воспитатель",
        uk: "Вихователь"
    }
};

function makeB1ChildcareFacilityDialogue(
    id,
    title,
    dialogue,
    dialogueTranslations
) {
    const fullDialogueTranslations =
        completeB1ChildcareFacilityTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_childcare_facility",

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
                b1ChildcareFacilitySpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1ChildcareFacilityContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1ChildcareFacilityData = [

    // =====================================================
    // 001 利用できる保育施設について相談する
    // =====================================================

    makeB1ChildcareFacilityDialogue(
        "b1_childcarefacility_001",
        "利用できる保育施設について相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "仕事を始める予定なので、子どもが利用できる保育施設について相談したいです。",
                target: "しごとをはじめるよていなので こどもがりようできるほいくしせつについてそうだんしたいです",
                ruby: "<ruby>仕事<rt>しごと</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>める<ruby>予定<rt>よてい</rt></ruby>なので、<ruby>子<rt>こ</rt></ruby>どもが<ruby>利用<rt>りよう</rt></ruby>できる<ruby>保育施設<rt>ほいくしせつ</rt></ruby>について<ruby>相談<rt>そうだん</rt></ruby>したいです。",
                romaji: "Shigoto o hajimeru yotei na node, kodomo ga riyō dekiru hoiku shisetsu ni tsuite sōdan shitai desu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "はい。お子さんの年齢と、いつごろから利用したいか教えていただけますか。",
                target: "はい おこさんのねんれいと いつごろからりようしたいかおしえていただけますか",
                ruby: "はい。お<ruby>子<rt>こ</rt></ruby>さんの<ruby>年齢<rt>ねんれい</rt></ruby>と、いつごろから<ruby>利用<rt>りよう</rt></ruby>したいか<ruby>教<rt>おし</rt></ruby>えていただけますか。",
                romaji: "Hai. Okosan no nenrei to, itsu goro kara riyō shitai ka oshiete itadakemasu ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもは二歳で、できれば四月から利用したいと思っています。",
                target: "こどもはにさいで できればしがつからりようしたいとおもっています",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもは<ruby>二歳<rt>にさい</rt></ruby>で、できれば<ruby>四月<rt>しがつ</rt></ruby>から<ruby>利用<rt>りよう</rt></ruby>したいと<ruby>思<rt>おも</rt></ruby>っています。",
                romaji: "Kodomo wa nisai de, dekireba shigatsu kara riyō shitai to omotte imasu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "わかりました。ご家庭の状況や希望する保育時間によって、選べる施設が異なる場合があります。",
                target: "わかりました ごかていのじょうきょうやきぼうするほいくじかんによって えらべるしせつがことなるばあいがあります",
                ruby: "わかりました。ご<ruby>家庭<rt>かてい</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>や<ruby>希望<rt>きぼう</rt></ruby>する<ruby>保育時間<rt>ほいくじかん</rt></ruby>によって、<ruby>選<rt>えら</rt></ruby>べる<ruby>施設<rt>しせつ</rt></ruby>が<ruby>異<rt>こと</rt></ruby>なる<ruby>場合<rt>ばあい</rt></ruby>があります。",
                romaji: "Wakarimashita. Gokatei no jōkyō ya kibō suru hoiku jikan ni yotte, eraberu shisetsu ga kotonaru baai ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "保育園や認定こども園などの違いも、まだよくわかっていません。",
                target: "ほいくえんやにんていこどもえんなどのちがいも まだよくわかっていません",
                ruby: "<ruby>保育園<rt>ほいくえん</rt></ruby>や<ruby>認定<rt>にんてい</rt></ruby>こども<ruby>園<rt>えん</rt></ruby>などの<ruby>違<rt>ちが</rt></ruby>いも、まだよくわかっていません。",
                romaji: "Hoikuen ya nintei kodomoen nado no chigai mo, mada yoku wakatte imasen."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "では、それぞれの特徴と申し込み方法を確認しながら、ご家庭に合う施設を一緒に考えましょう。",
                target: "では それぞれのとくちょうともうしこみほうほうをかくにんしながら ごかていにあうしせつをいっしょにかんがえましょう",
                ruby: "では、それぞれの<ruby>特徴<rt>とくちょう</rt></ruby>と<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>み<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しながら、ご<ruby>家庭<rt>かてい</rt></ruby>に<ruby>合<rt>あ</rt></ruby>う<ruby>施設<rt>しせつ</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Dewa, sorezore no tokuchō to mōshikomi hōhō o kakunin shinagara, gokatei ni au shisetsu o issho ni kangaemashō."
            }
        ],

        {
            ja: [
                "保護者：仕事を始める予定なので、子どもが利用できる保育施設について相談したいです。",
                "市職員：はい。お子さんの年齢と、いつごろから利用したいか教えていただけますか。",
                "保護者：子どもは二歳で、できれば四月から利用したいと思っています。",
                "市職員：わかりました。ご家庭の状況や希望する保育時間によって、選べる施設が異なる場合があります。",
                "保護者：保育園や認定こども園などの違いも、まだよくわかっていません。",
                "市職員：では、それぞれの特徴と申し込み方法を確認しながら、ご家庭に合う施設を一緒に考えましょう。"
            ],

            en: [
                "Parent: I am planning to start working, so I would like to ask about childcare facilities my child can use.",
                "City Official: Certainly. Could you tell me your child's age and when you would like to start using childcare?",
                "Parent: My child is two years old, and if possible, I would like to start in April.",
                "City Official: I understand. The facilities available may differ depending on your family's circumstances and the childcare hours you need.",
                "Parent: I still do not clearly understand the differences between nursery schools and certified childcare centers.",
                "City Official: Then let us review the features and application methods of each option and think together about what suits your family."
            ],

            "zh-CN": [
                "家长：我准备开始工作，所以想咨询一下孩子可以利用的保育设施。",
                "市政府工作人员：好的。可以告诉我孩子的年龄，以及希望什么时候开始使用吗？",
                "家长：孩子两岁，如果可以的话，我希望从四月开始使用。",
                "市政府工作人员：明白了。根据家庭情况和希望的保育时间，可选择的设施可能不同。",
                "家长：我还不太清楚保育园和认定儿童园等设施之间的区别。",
                "市政府工作人员：那么，我们一边确认各自的特点和申请方法，一边一起考虑适合您家庭的设施吧。"
            ],

            "zh-TW": [
                "家長：我準備開始工作，所以想諮詢一下孩子可以利用的保育設施。",
                "市政府工作人員：好的。可以告訴我孩子的年齡，以及希望什麼時候開始使用嗎？",
                "家長：孩子兩歲，如果可以的話，我希望從四月開始使用。",
                "市政府工作人員：明白了。根據家庭情況和希望的保育時間，可選擇的設施可能不同。",
                "家長：我還不太清楚保育園和認定兒童園等設施之間的區別。",
                "市政府工作人員：那麼，我們一邊確認各自的特點和申請方法，一邊一起考慮適合您家庭的設施吧。"
            ],

            ko: [
                "보호자: 일을 시작할 예정이라 아이가 이용할 수 있는 보육 시설에 대해 상담하고 싶습니다.",
                "시청 직원: 네. 아이의 나이와 언제부터 이용하고 싶은지 알려 주실 수 있나요?",
                "보호자: 아이는 두 살이고 가능하면 4월부터 이용하고 싶습니다.",
                "시청 직원: 알겠습니다. 가정 상황과 원하는 보육 시간에 따라 선택 가능한 시설이 다를 수 있습니다.",
                "보호자: 어린이집이나 인정 어린이원 등의 차이도 아직 잘 모르겠습니다.",
                "시청 직원: 그러면 각각의 특징과 신청 방법을 확인하면서 가정에 맞는 시설을 함께 생각해 봅시다."
            ],

            vi: [
                "Phụ huynh: Tôi dự định bắt đầu đi làm nên muốn hỏi về các cơ sở giữ trẻ mà con tôi có thể sử dụng.",
                "Nhân viên thành phố: Vâng. Bạn có thể cho tôi biết tuổi của con và muốn bắt đầu sử dụng từ khoảng thời gian nào không?",
                "Phụ huynh: Con tôi hai tuổi và nếu có thể, tôi muốn bắt đầu từ tháng Tư.",
                "Nhân viên thành phố: Tôi hiểu. Các cơ sở có thể lựa chọn có thể khác nhau tùy tình hình gia đình và thời gian giữ trẻ mà bạn mong muốn.",
                "Phụ huynh: Tôi vẫn chưa hiểu rõ sự khác nhau giữa nhà trẻ và các trung tâm chăm sóc trẻ được chứng nhận.",
                "Nhân viên thành phố: Vậy chúng ta hãy cùng xem đặc điểm và cách đăng ký của từng loại rồi tìm cơ sở phù hợp với gia đình bạn."
            ]
        }
    ),

    // =====================================================
    // 002 保育施設を見学する
    // =====================================================

    makeB1ChildcareFacilityDialogue(
        "b1_childcarefacility_002",
        "保育施設を見学する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "申し込みをする前に、施設を見学することはできますか。",
                target: "もうしこみをするまえに しせつをけんがくすることはできますか",
                ruby: "<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みをする<ruby>前<rt>まえ</rt></ruby>に、<ruby>施設<rt>しせつ</rt></ruby>を<ruby>見学<rt>けんがく</rt></ruby>することはできますか。",
                romaji: "Mōshikomi o suru mae ni, shisetsu o kengaku suru koto wa dekimasu ka."
            },
            {
                label: "話者A",
                key: "facilityStaff",
                name: "施設職員",
                line: "はい。見学できる日時が決まっていますので、事前に予約をお願いします。",
                target: "はい けんがくできるにちじがきまっていますので じぜんによやくをおねがいします",
                ruby: "はい。<ruby>見学<rt>けんがく</rt></ruby>できる<ruby>日時<rt>にちじ</rt></ruby>が<ruby>決<rt>き</rt></ruby>まっていますので、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>予約<rt>よやく</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hai. Kengaku dekiru nichiji ga kimatte imasu node, jizen ni yoyaku o onegai shimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "見学のときに、子どもと一緒に行っても大丈夫でしょうか。",
                target: "けんがくのときに こどもといっしょにいってもだいじょうぶでしょうか",
                ruby: "<ruby>見学<rt>けんがく</rt></ruby>のときに、<ruby>子<rt>こ</rt></ruby>どもと<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>っても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>でしょうか。",
                romaji: "Kengaku no toki ni, kodomo to issho ni itte mo daijōbu deshō ka."
            },
            {
                label: "話者A",
                key: "facilityStaff",
                name: "施設職員",
                line: "もちろんです。実際の保育室や園庭を見ながら、施設での生活についてご説明します。",
                target: "もちろんです じっさいのほいくしつやえんていをみながら しせつでのせいかつについてごせつめいします",
                ruby: "もちろんです。<ruby>実際<rt>じっさい</rt></ruby>の<ruby>保育室<rt>ほいくしつ</rt></ruby>や<ruby>園庭<rt>えんてい</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら、<ruby>施設<rt>しせつ</rt></ruby>での<ruby>生活<rt>せいかつ</rt></ruby>についてご<ruby>説明<rt>せつめい</rt></ruby>します。",
                romaji: "Mochiron desu. Jissai no hoikushitsu ya ente i o minagara, shisetsu de no seikatsu ni tsuite go-setsumei shimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "一日の流れや、子どもたちがどのように過ごしているかも知りたいです。",
                target: "いちにちのながれや こどもたちがどのようにすごしているかもしりたいです",
                ruby: "<ruby>一日<rt>いちにち</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れや、<ruby>子<rt>こ</rt></ruby>どもたちがどのように<ruby>過<rt>す</rt></ruby>ごしているかも<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Ichinichi no nagare ya, kodomotachi ga dono yō ni sugoshite iru ka mo shiritai desu."
            },
            {
                label: "話者A",
                key: "facilityStaff",
                name: "施設職員",
                line: "わかりました。食事や昼寝、遊びの時間も含めて、詳しくご案内します。",
                target: "わかりました しょくじやひるね あそびのじかんもふくめて くわしくごあんないします",
                ruby: "わかりました。<ruby>食事<rt>しょくじ</rt></ruby>や<ruby>昼寝<rt>ひるね</rt></ruby>、<ruby>遊<rt>あそ</rt></ruby>びの<ruby>時間<rt>じかん</rt></ruby>も<ruby>含<rt>ふく</rt></ruby>めて、<ruby>詳<rt>くわ</rt></ruby>しくご<ruby>案内<rt>あんない</rt></ruby>します。",
                romaji: "Wakarimashita. Shokuji ya hirune, asobi no jikan mo fukumete, kuwashiku go-annai shimasu."
            }
        ],

        {
            ja: [
                "保護者：申し込みをする前に、施設を見学することはできますか。",
                "施設職員：はい。見学できる日時が決まっていますので、事前に予約をお願いします。",
                "保護者：見学のときに、子どもと一緒に行っても大丈夫でしょうか。",
                "施設職員：もちろんです。実際の保育室や園庭を見ながら、施設での生活についてご説明します。",
                "保護者：一日の流れや、子どもたちがどのように過ごしているかも知りたいです。",
                "施設職員：わかりました。食事や昼寝、遊びの時間も含めて、詳しくご案内します。"
            ],

            en: [
                "Parent: Can I visit the facility before applying?",
                "Facility Staff: Yes. Tours are available on specific dates and times, so please make a reservation in advance.",
                "Parent: Is it okay to bring my child with me for the tour?",
                "Facility Staff: Of course. We will explain daily life at the facility while showing you the actual childcare rooms and playground.",
                "Parent: I would also like to know about the daily schedule and how the children spend their time.",
                "Facility Staff: Certainly. We will explain in detail, including meals, naps, and playtime."
            ],

            "zh-CN": [
                "家长：申请之前可以参观设施吗？",
                "设施工作人员：可以。参观时间是固定的，所以请提前预约。",
                "家长：参观的时候可以带孩子一起去吗？",
                "设施工作人员：当然可以。我们会一边带您看实际的保育室和园庭，一边说明设施里的生活。",
                "家长：我也想了解一天的流程，以及孩子们是怎样度过一天的。",
                "设施工作人员：好的。我们会详细说明，包括吃饭、午睡和游戏时间。"
            ],

            "zh-TW": [
                "家長：申請之前可以參觀設施嗎？",
                "設施工作人員：可以。參觀時間是固定的，所以請提前預約。",
                "家長：參觀的時候可以帶孩子一起去嗎？",
                "設施工作人員：當然可以。我們會一邊帶您看實際的保育室和園庭，一邊說明設施裡的生活。",
                "家長：我也想了解一天的流程，以及孩子們是怎樣度過一天的。",
                "設施工作人員：好的。我們會詳細說明，包括吃飯、午睡和遊戲時間。"
            ],

            ko: [
                "보호자: 신청하기 전에 시설을 견학할 수 있나요?",
                "시설 직원: 네. 견학 가능한 날짜와 시간이 정해져 있으니 미리 예약해 주세요.",
                "보호자: 견학할 때 아이와 함께 가도 괜찮을까요?",
                "시설 직원: 물론입니다. 실제 보육실과 놀이터를 보면서 시설 생활에 대해 설명해 드리겠습니다.",
                "보호자: 하루 일정과 아이들이 어떻게 지내는지도 알고 싶습니다.",
                "시설 직원: 알겠습니다. 식사와 낮잠, 놀이 시간도 포함해서 자세히 안내해 드리겠습니다."
            ],

            vi: [
                "Phụ huynh: Tôi có thể tham quan cơ sở trước khi đăng ký không?",
                "Nhân viên cơ sở: Có. Thời gian tham quan đã được quy định, nên xin hãy đặt trước.",
                "Phụ huynh: Khi tham quan, tôi có thể đưa con đi cùng không?",
                "Nhân viên cơ sở: Tất nhiên. Chúng tôi sẽ vừa cho bạn xem phòng giữ trẻ và sân chơi thực tế, vừa giải thích về cuộc sống tại cơ sở.",
                "Phụ huynh: Tôi cũng muốn biết lịch trình một ngày và các trẻ thường sinh hoạt như thế nào.",
                "Nhân viên cơ sở: Vâng. Chúng tôi sẽ hướng dẫn chi tiết, bao gồm bữa ăn, giấc ngủ trưa và thời gian vui chơi."
            ]
        }
    ),

    // =====================================================
    // 003 申し込み方法を確認する
    // =====================================================

    makeB1ChildcareFacilityDialogue(
        "b1_childcarefacility_003",
        "申し込み方法を確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "この施設を利用したい場合は、どこで申し込みをすればいいですか。",
                target: "このしせつをりようしたいばあいは どこでもうしこみをすればいいですか",
                ruby: "この<ruby>施設<rt>しせつ</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>したい<ruby>場合<rt>ばあい</rt></ruby>は、どこで<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みをすればいいですか。",
                romaji: "Kono shisetsu o riyō shitai baai wa, doko de mōshikomi o sureba ii desu ka."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "施設の種類によって、自治体に申し込む場合と施設へ直接申し込む場合があります。",
                target: "しせつのしゅるいによって じちたいにもうしこむばあいとしせつへちょくせつもうしこむばあいがあります",
                ruby: "<ruby>施設<rt>しせつ</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>によって、<ruby>自治体<rt>じちたい</rt></ruby>に<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>む<ruby>場合<rt>ばあい</rt></ruby>と<ruby>施設<rt>しせつ</rt></ruby>へ<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>む<ruby>場合<rt>ばあい</rt></ruby>があります。",
                romaji: "Shisetsu no shurui ni yotte, jichitai ni mōshikomu baai to shisetsu e chokusetsu mōshikomu baai ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "必要な書類が多そうなので、何を準備すればいいか確認したいです。",
                target: "ひつようなしょるいがおおそうなので なにをじゅんびすればいいかかくにんしたいです",
                ruby: "<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>が<ruby>多<rt>おお</rt></ruby>そうなので、<ruby>何<rt>なに</rt></ruby>を<ruby>準備<rt>じゅんび</rt></ruby>すればいいか<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Hitsuyō na shorui ga ōsō na node, nani o junbi sureba ii ka kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "ご家庭の状況によって必要書類が異なるため、こちらの一覧を一緒に確認しましょう。",
                target: "ごかていのじょうきょうによってひつようしょるいがことなるため こちらのいちらんをいっしょにかくにんしましょう",
                ruby: "ご<ruby>家庭<rt>かてい</rt></ruby>の<ruby>状況<rt>じょうきょう</rt></ruby>によって<ruby>必要書類<rt>ひつようしょるい</rt></ruby>が<ruby>異<rt>こと</rt></ruby>なるため、こちらの<ruby>一覧<rt>いちらん</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Gokatei no jōkyō ni yotte hitsuyō shorui ga kotonaru tame, kochira no ichiran o issho ni kakunin shimashō."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "申し込みには期限がありますか。遅れないように準備したいです。",
                target: "もうしこみにはきげんがありますか おくれないようにじゅんびしたいです",
                ruby: "<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みには<ruby>期限<rt>きげん</rt></ruby>がありますか。<ruby>遅<rt>おく</rt></ruby>れないように<ruby>準備<rt>じゅんび</rt></ruby>したいです。",
                romaji: "Mōshikomi ni wa kigen ga arimasu ka. Okurenai yō ni junbi shitai desu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "はい。希望する利用開始時期によって違うので、日程を早めに確認しておくと安心です。",
                target: "はい きぼうするりようかいしじきによってちがうので にっていをはやめにかくにんしておくとあんしんです",
                ruby: "はい。<ruby>希望<rt>きぼう</rt></ruby>する<ruby>利用開始時期<rt>りようかいしじき</rt></ruby>によって<ruby>違<rt>ちが</rt></ruby>うので、<ruby>日程<rt>にってい</rt></ruby>を<ruby>早<rt>はや</rt></ruby>めに<ruby>確認<rt>かくにん</rt></ruby>しておくと<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Hai. Kibō suru riyō kaishi jiki ni yotte chigau node, nittei o hayame ni kakunin shite oku to anshin desu."
            }
        ],

        {
            ja: [
                "保護者：この施設を利用したい場合は、どこで申し込みをすればいいですか。",
                "市職員：施設の種類によって、自治体に申し込む場合と施設へ直接申し込む場合があります。",
                "保護者：必要な書類が多そうなので、何を準備すればいいか確認したいです。",
                "市職員：ご家庭の状況によって必要書類が異なるため、こちらの一覧を一緒に確認しましょう。",
                "保護者：申し込みには期限がありますか。遅れないように準備したいです。",
                "市職員：はい。希望する利用開始時期によって違うので、日程を早めに確認しておくと安心です。"
            ],

            en: [
                "Parent: If I want to use this facility, where should I apply?",
                "City Official: Depending on the type of facility, you may need to apply through the local government or directly to the facility.",
                "Parent: It seems there are many required documents, so I would like to check what I need to prepare.",
                "City Official: The required documents differ depending on your family's circumstances, so let us check this list together.",
                "Parent: Is there an application deadline? I want to prepare so I do not miss it.",
                "City Official: Yes. The schedule differs depending on when you want to begin using the service, so it is reassuring to check early."
            ],

            "zh-CN": [
                "家长：如果想使用这个设施，应该在哪里申请？",
                "市政府工作人员：根据设施种类不同，有时需要向自治体申请，有时需要直接向设施申请。",
                "家长：看起来需要很多文件，所以我想确认应该准备什么。",
                "市政府工作人员：根据家庭情况不同，所需文件也不同，我们一起确认这份清单吧。",
                "家长：申请有截止日期吗？我想提前准备，避免错过。",
                "市政府工作人员：有。根据希望开始使用的时期不同，日程也不同，所以最好尽早确认。"
            ],

            "zh-TW": [
                "家長：如果想使用這個設施，應該在哪裡申請？",
                "市政府工作人員：根據設施種類不同，有時需要向自治體申請，有時需要直接向設施申請。",
                "家長：看起來需要很多文件，所以我想確認應該準備什麼。",
                "市政府工作人員：根據家庭情況不同，所需文件也不同，我們一起確認這份清單吧。",
                "家長：申請有截止日期嗎？我想提前準備，避免錯過。",
                "市政府工作人員：有。根據希望開始使用的時期不同，日程也不同，所以最好儘早確認。"
            ],

            ko: [
                "보호자: 이 시설을 이용하고 싶다면 어디에 신청해야 하나요?",
                "시청 직원: 시설 종류에 따라 지자체에 신청하는 경우와 시설에 직접 신청하는 경우가 있습니다.",
                "보호자: 필요한 서류가 많을 것 같아서 무엇을 준비해야 하는지 확인하고 싶습니다.",
                "시청 직원: 가정 상황에 따라 필요한 서류가 다르므로 이 목록을 함께 확인해 봅시다.",
                "보호자: 신청 기한이 있나요? 늦지 않도록 준비하고 싶습니다.",
                "시청 직원: 네. 원하는 이용 시작 시기에 따라 다르므로 일정을 일찍 확인해 두면 안심됩니다."
            ],

            vi: [
                "Phụ huynh: Nếu muốn sử dụng cơ sở này, tôi phải đăng ký ở đâu?",
                "Nhân viên thành phố: Tùy loại cơ sở, có trường hợp đăng ký với chính quyền địa phương và có trường hợp đăng ký trực tiếp với cơ sở.",
                "Phụ huynh: Có vẻ cần nhiều giấy tờ nên tôi muốn kiểm tra mình phải chuẩn bị những gì.",
                "Nhân viên thành phố: Giấy tờ cần thiết khác nhau tùy hoàn cảnh gia đình, nên chúng ta hãy cùng kiểm tra danh sách này.",
                "Phụ huynh: Có thời hạn đăng ký không? Tôi muốn chuẩn bị để không bị trễ.",
                "Nhân viên thành phố: Có. Lịch khác nhau tùy thời điểm bạn muốn bắt đầu sử dụng, nên kiểm tra sớm sẽ yên tâm hơn."
            ]
        }
    ),

    // =====================================================
    // 004 保育時間と料金について確認する
    // =====================================================

    makeB1ChildcareFacilityDialogue(
        "b1_childcarefacility_004",
        "保育時間と料金について確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "仕事が夕方まであるので、何時まで子どもを預かってもらえるか知りたいです。",
                target: "しごとがゆうがたまであるので なんじまでこどもをあずかってもらえるかしりたいです",
                ruby: "<ruby>仕事<rt>しごと</rt></ruby>が<ruby>夕方<rt>ゆうがた</rt></ruby>まであるので、<ruby>何時<rt>なんじ</rt></ruby>まで<ruby>子<rt>こ</rt></ruby>どもを<ruby>預<rt>あず</rt></ruby>かってもらえるか<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Shigoto ga yūgata made aru node, nanji made kodomo o azukatte moraeru ka shiritai desu."
            },
            {
                label: "話者A",
                key: "facilityStaff",
                name: "施設職員",
                line: "通常の保育時間と、必要に応じて利用できる延長保育があります。",
                target: "つうじょうのほいくじかんと ひつようにおうじてりようできるえんちょうほいくがあります",
                ruby: "<ruby>通常<rt>つうじょう</rt></ruby>の<ruby>保育時間<rt>ほいくじかん</rt></ruby>と、<ruby>必要<rt>ひつよう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>利用<rt>りよう</rt></ruby>できる<ruby>延長保育<rt>えんちょうほいく</rt></ruby>があります。",
                romaji: "Tsūjō no hoiku jikan to, hitsuyō ni ōjite riyō dekiru enchō hoiku ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "延長保育を利用する場合は、毎回予約する必要がありますか。",
                target: "えんちょうほいくをりようするばあいは まいかいよやくするひつようがありますか",
                ruby: "<ruby>延長保育<rt>えんちょうほいく</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>毎回<rt>まいかい</rt></ruby><ruby>予約<rt>よやく</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がありますか。",
                romaji: "Enchō hoiku o riyō suru baai wa, maikai yoyaku suru hitsuyō ga arimasu ka."
            },
            {
                label: "話者A",
                key: "facilityStaff",
                name: "施設職員",
                line: "利用方法は施設によって異なりますので、事前の申し込み方法を確認してください。",
                target: "りようほうほうはしせつによってことなりますので じぜんのもうしこみほうほうをかくにんしてください",
                ruby: "<ruby>利用方法<rt>りようほうほう</rt></ruby>は<ruby>施設<rt>しせつ</rt></ruby>によって<ruby>異<rt>こと</rt></ruby>なりますので、<ruby>事前<rt>じぜん</rt></ruby>の<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>み<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Riyō hōhō wa shisetsu ni yotte kotonarimasu node, jizen no mōshikomi hōhō o kakunin shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "保育料のほかに、追加で必要になる費用についても教えていただけますか。",
                target: "ほいくりょうのほかに ついかでひつようになるひようについてもおしえていただけますか",
                ruby: "<ruby>保育料<rt>ほいくりょう</rt></ruby>のほかに、<ruby>追加<rt>ついか</rt></ruby>で<ruby>必要<rt>ひつよう</rt></ruby>になる<ruby>費用<rt>ひよう</rt></ruby>についても<ruby>教<rt>おし</rt></ruby>えていただけますか。",
                romaji: "Hoikuryō no hoka ni, tsuika de hitsuyō ni naru hiyō ni tsuite mo oshiete itadakemasu ka."
            },
            {
                label: "話者A",
                key: "facilityStaff",
                name: "施設職員",
                line: "もちろんです。食事や用品なども含め、必要になる費用を一覧でご説明します。",
                target: "もちろんです しょくじやようひんなどもふくめ ひつようになるひようをいちらんでごせつめいします",
                ruby: "もちろんです。<ruby>食事<rt>しょくじ</rt></ruby>や<ruby>用品<rt>ようひん</rt></ruby>なども<ruby>含<rt>ふく</rt></ruby>め、<ruby>必要<rt>ひつよう</rt></ruby>になる<ruby>費用<rt>ひよう</rt></ruby>を<ruby>一覧<rt>いちらん</rt></ruby>でご<ruby>説明<rt>せつめい</rt></ruby>します。",
                romaji: "Mochiron desu. Shokuji ya yōhin nado mo fukume, hitsuyō ni naru hiyō o ichiran de go-setsumei shimasu."
            }
        ],

        {
            ja: [
                "保護者：仕事が夕方まであるので、何時まで子どもを預かってもらえるか知りたいです。",
                "施設職員：通常の保育時間と、必要に応じて利用できる延長保育があります。",
                "保護者：延長保育を利用する場合は、毎回予約する必要がありますか。",
                "施設職員：利用方法は施設によって異なりますので、事前の申し込み方法を確認してください。",
                "保護者：保育料のほかに、追加で必要になる費用についても教えていただけますか。",
                "施設職員：もちろんです。食事や用品なども含め、必要になる費用を一覧でご説明します。"
            ],

            en: [
                "Parent: I work until the evening, so I would like to know how late my child can stay.",
                "Facility Staff: There are regular childcare hours and extended childcare that may be available when necessary.",
                "Parent: If I use extended childcare, do I need to make a reservation every time?",
                "Facility Staff: The procedure differs by facility, so please check how to apply in advance.",
                "Parent: Could you also tell me about any additional costs besides the regular childcare fee?",
                "Facility Staff: Of course. We will explain all necessary costs in a list, including meals and supplies."
            ],

            "zh-CN": [
                "家长：我的工作到傍晚，所以想知道孩子最晚可以托管到几点。",
                "设施工作人员：有正常保育时间，也有根据需要可以使用的延长保育。",
                "家长：使用延长保育时，每次都需要预约吗？",
                "设施工作人员：使用方法因设施而异，请确认提前申请的方法。",
                "家长：除了保育费以外，还可以告诉我其他可能需要支付的费用吗？",
                "设施工作人员：当然可以。包括餐费和用品费等，我们会用清单说明所有需要的费用。"
            ],

            "zh-TW": [
                "家長：我的工作到傍晚，所以想知道孩子最晚可以托管到幾點。",
                "設施工作人員：有正常保育時間，也有根據需要可以使用的延長保育。",
                "家長：使用延長保育時，每次都需要預約嗎？",
                "設施工作人員：使用方法因設施而異，請確認提前申請的方法。",
                "家長：除了保育費以外，還可以告訴我其他可能需要支付的費用嗎？",
                "設施工作人員：當然可以。包括餐費和用品費等，我們會用清單說明所有需要的費用。"
            ],

            ko: [
                "보호자: 일이 저녁까지 있어서 몇 시까지 아이를 맡길 수 있는지 알고 싶습니다.",
                "시설 직원: 일반 보육 시간과 필요할 때 이용할 수 있는 연장 보육이 있습니다.",
                "보호자: 연장 보육을 이용할 때는 매번 예약해야 하나요?",
                "시설 직원: 이용 방법은 시설마다 다르므로 사전 신청 방법을 확인해 주세요.",
                "보호자: 보육료 외에 추가로 필요한 비용도 알려 주실 수 있나요?",
                "시설 직원: 물론입니다. 식사나 용품 등을 포함해 필요한 비용을 목록으로 설명해 드리겠습니다."
            ],

            vi: [
                "Phụ huynh: Tôi làm việc đến chiều tối nên muốn biết có thể gửi con đến mấy giờ.",
                "Nhân viên cơ sở: Có giờ giữ trẻ thông thường và dịch vụ kéo dài thời gian khi cần.",
                "Phụ huynh: Khi sử dụng dịch vụ kéo dài thời gian, tôi có cần đặt trước mỗi lần không?",
                "Nhân viên cơ sở: Cách sử dụng khác nhau tùy cơ sở, nên hãy kiểm tra cách đăng ký trước.",
                "Phụ huynh: Ngoài phí giữ trẻ, bạn có thể cho tôi biết những chi phí bổ sung khác không?",
                "Nhân viên cơ sở: Tất nhiên. Chúng tôi sẽ giải thích bằng danh sách tất cả chi phí cần thiết, bao gồm bữa ăn và đồ dùng."
            ]
        }
    ),

    // =====================================================
    // 005 アレルギーや健康状態を伝える
    // =====================================================

    makeB1ChildcareFacilityDialogue(
        "b1_childcarefacility_005",
        "アレルギーや健康状態を伝える",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもには食物アレルギーがあるので、入園前に相談しておきたいです。",
                target: "こどもにはしょくもつあれるぎーがあるので にゅうえんまえにそうだんしておきたいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもには<ruby>食物<rt>しょくもつ</rt></ruby>アレルギーがあるので、<ruby>入園前<rt>にゅうえんまえ</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>しておきたいです。",
                romaji: "Kodomo ni wa shokumotsu arerugī ga aru node, nyūen mae ni sōdan shite okitai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "保育士",
                line: "わかりました。どの食べ物にアレルギーがあり、これまでどのような症状が出ましたか。",
                target: "わかりました どのたべものにあれるぎーがあり これまでどのようなしょうじょうがでましたか",
                ruby: "わかりました。どの<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>にアレルギーがあり、これまでどのような<ruby>症状<rt>しょうじょう</rt></ruby>が<ruby>出<rt>で</rt></ruby>ましたか。",
                romaji: "Wakarimashita. Dono tabemono ni arerugī ga ari, kore made dono yō na shōjō ga demashita ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "卵にアレルギーがあり、以前食べたときに顔が赤くなりました。",
                target: "たまごにあれるぎーがあり いぜんたべたときにかおがあかくなりました",
                ruby: "<ruby>卵<rt>たまご</rt></ruby>にアレルギーがあり、<ruby>以前<rt>いぜん</rt></ruby><ruby>食<rt>た</rt></ruby>べたときに<ruby>顔<rt>かお</rt></ruby>が<ruby>赤<rt>あか</rt></ruby>くなりました。",
                romaji: "Tamago ni arerugī ga ari, izen tabeta toki ni kao ga akaku narimashita."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "保育士",
                line: "医師からの指示や必要な書類がある場合は、事前に提出してください。",
                target: "いしからのしじやひつようなしょるいがあるばあいは じぜんにていしゅつしてください",
                ruby: "<ruby>医師<rt>いし</rt></ruby>からの<ruby>指示<rt>しじ</rt></ruby>や<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>がある<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>提出<rt>ていしゅつ</rt></ruby>してください。",
                romaji: "Ishi kara no shiji ya hitsuyō na shorui ga aru baai wa, jizen ni teishutsu shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "ぜんそくもあるので、体調が悪くなったときの対応についても確認したいです。",
                target: "ぜんそくもあるので たいちょうがわるくなったときのたいおうについてもかくにんしたいです",
                ruby: "ぜんそくもあるので、<ruby>体調<rt>たいちょう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くなったときの<ruby>対応<rt>たいおう</rt></ruby>についても<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Zensoku mo aru node, taichō ga waruku natta toki no taiō ni tsuite mo kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "保育士",
                line: "大切なことなので、緊急連絡先や医師の指示も含めて、詳しく情報を共有しましょう。",
                target: "たいせつなことなので きんきゅうれんらくさきやいしのしじもふくめて くわしくじょうほうをきょうゆうしましょう",
                ruby: "<ruby>大切<rt>たいせつ</rt></ruby>なことなので、<ruby>緊急連絡先<rt>きんきゅうれんらくさき</rt></ruby>や<ruby>医師<rt>いし</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>も<ruby>含<rt>ふく</rt></ruby>めて、<ruby>詳<rt>くわ</rt></ruby>しく<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>共有<rt>きょうゆう</rt></ruby>しましょう。",
                romaji: "Taisetsu na koto na node, kinkyū renrakusaki ya ishi no shiji mo fukumete, kuwashiku jōhō o kyōyū shimashō."
            }
        ],

        {
            ja: [
                "保護者：子どもには食物アレルギーがあるので、入園前に相談しておきたいです。",
                "保育士：わかりました。どの食べ物にアレルギーがあり、これまでどのような症状が出ましたか。",
                "保護者：卵にアレルギーがあり、以前食べたときに顔が赤くなりました。",
                "保育士：医師からの指示や必要な書類がある場合は、事前に提出してください。",
                "保護者：ぜんそくもあるので、体調が悪くなったときの対応についても確認したいです。",
                "保育士：大切なことなので、緊急連絡先や医師の指示も含めて、詳しく情報を共有しましょう。"
            ],

            en: [
                "Parent: My child has a food allergy, so I would like to discuss it before enrollment.",
                "Childcare Teacher: I understand. Which foods is your child allergic to, and what symptoms have occurred in the past?",
                "Parent: My child is allergic to eggs, and once developed facial redness after eating them.",
                "Childcare Teacher: If you have instructions from a doctor or required documents, please submit them in advance.",
                "Parent: My child also has asthma, so I would like to confirm what happens if my child's condition gets worse.",
                "Childcare Teacher: This is important, so let us share detailed information, including emergency contacts and any instructions from your doctor."
            ],

            "zh-CN": [
                "家长：孩子有食物过敏，所以我想在入园前先咨询一下。",
                "保育员：明白了。孩子对什么食物过敏？以前出现过什么症状？",
                "家长：孩子对鸡蛋过敏，以前吃了以后脸变红过。",
                "保育员：如果有医生的指示或必要文件，请提前提交。",
                "家长：孩子还有哮喘，所以我也想确认身体不舒服时如何处理。",
                "保育员：这是很重要的事情，我们一起详细共享信息，包括紧急联系方式和医生的指示。"
            ],

            "zh-TW": [
                "家長：孩子有食物過敏，所以我想在入園前先諮詢一下。",
                "保育人員：明白了。孩子對什麼食物過敏？以前出現過什麼症狀？",
                "家長：孩子對雞蛋過敏，以前吃了以後臉變紅過。",
                "保育人員：如果有醫師的指示或必要文件，請提前提交。",
                "家長：孩子還有氣喘，所以我也想確認身體不舒服時如何處理。",
                "保育人員：這是很重要的事情，我們一起詳細共享資訊，包括緊急聯絡方式和醫師的指示。"
            ],

            ko: [
                "보호자: 아이에게 음식 알레르기가 있어서 입소 전에 상담해 두고 싶습니다.",
                "보육교사: 알겠습니다. 어떤 음식에 알레르기가 있고 지금까지 어떤 증상이 있었나요?",
                "보호자: 계란 알레르기가 있고 예전에 먹었을 때 얼굴이 빨개졌습니다.",
                "보육교사: 의사의 지시나 필요한 서류가 있다면 미리 제출해 주세요.",
                "보호자: 천식도 있어서 몸 상태가 나빠졌을 때의 대응도 확인하고 싶습니다.",
                "보육교사: 중요한 일이므로 긴급 연락처와 의사의 지시도 포함해서 자세한 정보를 공유합시다."
            ],

            vi: [
                "Phụ huynh: Con tôi bị dị ứng thực phẩm nên tôi muốn trao đổi trước khi nhập học.",
                "Giáo viên giữ trẻ: Tôi hiểu. Cháu dị ứng với thực phẩm nào và trước đây đã có triệu chứng gì?",
                "Phụ huynh: Cháu dị ứng với trứng và trước đây sau khi ăn thì mặt bị đỏ.",
                "Giáo viên giữ trẻ: Nếu có hướng dẫn của bác sĩ hoặc giấy tờ cần thiết, xin hãy nộp trước.",
                "Phụ huynh: Cháu cũng bị hen nên tôi muốn xác nhận cách xử lý khi tình trạng sức khỏe xấu đi.",
                "Giáo viên giữ trẻ: Đây là điều quan trọng, nên chúng ta hãy chia sẻ thông tin chi tiết, bao gồm liên lạc khẩn cấp và hướng dẫn của bác sĩ."
            ]
        }
    ),

    // =====================================================
    // 006 慣らし保育について相談する
    // =====================================================

    makeB1ChildcareFacilityDialogue(
        "b1_childcarefacility_006",
        "慣らし保育について相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが初めて家族と離れるので、施設に慣れるまでが少し心配です。",
                target: "こどもがはじめてかぞくとはなれるので しせつになれるまでがすこししんぱいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>初<rt>はじ</rt></ruby>めて<ruby>家族<rt>かぞく</rt></ruby>と<ruby>離<rt>はな</rt></ruby>れるので、<ruby>施設<rt>しせつ</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れるまでが<ruby>少<rt>すこ</rt></ruby>し<ruby>心配<rt>しんぱい</rt></ruby>です。",
                romaji: "Kodomo ga hajimete kazoku to hanareru node, shisetsu ni nareru made ga sukoshi shinpai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "保育士",
                line: "最初は短い時間から始めて、少しずつ保育時間を長くする場合があります。",
                target: "さいしょはみじかいじかんからはじめて すこしずつほいくじかんをながくするばあいがあります",
                ruby: "<ruby>最初<rt>さいしょ</rt></ruby>は<ruby>短<rt>みじか</rt></ruby>い<ruby>時間<rt>じかん</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>めて、<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>保育時間<rt>ほいくじかん</rt></ruby>を<ruby>長<rt>なが</rt></ruby>くする<ruby>場合<rt>ばあい</rt></ruby>があります。",
                romaji: "Saisho wa mijikai jikan kara hajimete, sukoshizutsu hoiku jikan o nagaku suru baai ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "慣れるまでにどのくらいかかるかは、子どもによって違いますよね。",
                target: "なれるまでにどのくらいかかるかは こどもによってちがいますよね",
                ruby: "<ruby>慣<rt>な</rt></ruby>れるまでにどのくらいかかるかは、<ruby>子<rt>こ</rt></ruby>どもによって<ruby>違<rt>ちが</rt></ruby>いますよね。",
                romaji: "Nareru made ni dono kurai kakaru ka wa, kodomo ni yotte chigaimasu yo ne."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "保育士",
                line: "はい。お子さんの様子を見ながら、ご家庭と相談して進めていきます。",
                target: "はい おこさんのようすをみながら ごかていとそうだんしてすすめていきます",
                ruby: "はい。お<ruby>子<rt>こ</rt></ruby>さんの<ruby>様子<rt>ようす</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら、ご<ruby>家庭<rt>かてい</rt></ruby>と<ruby>相談<rt>そうだん</rt></ruby>して<ruby>進<rt>すす</rt></ruby>めていきます。",
                romaji: "Hai. Okosan no yōsu o minagara, gokatei to sōdan shite susumete ikimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "仕事を始める日もあるので、予定について早めに相談しておきたいです。",
                target: "しごとをはじめるひもあるので よていについてはやめにそうだんしておきたいです",
                ruby: "<ruby>仕事<rt>しごと</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>める<ruby>日<rt>ひ</rt></ruby>もあるので、<ruby>予定<rt>よてい</rt></ruby>について<ruby>早<rt>はや</rt></ruby>めに<ruby>相談<rt>そうだん</rt></ruby>しておきたいです。",
                romaji: "Shigoto o hajimeru hi mo aru node, yotei ni tsuite hayame ni sōdan shite okitai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "保育士",
                line: "わかりました。お仕事の予定も伺いながら、無理のない方法を一緒に考えましょう。",
                target: "わかりました おしごとのよていもうかがいながら むりのないほうほうをいっしょにかんがえましょう",
                ruby: "わかりました。お<ruby>仕事<rt>しごと</rt></ruby>の<ruby>予定<rt>よてい</rt></ruby>も<ruby>伺<rt>うかが</rt></ruby>いながら、<ruby>無理<rt>むり</rt></ruby>のない<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Wakarimashita. Oshigoto no yotei mo ukagai nagara, muri no nai hōhō o issho ni kangaemashō."
            }
        ],

        {
            ja: [
                "保護者：子どもが初めて家族と離れるので、施設に慣れるまでが少し心配です。",
                "保育士：最初は短い時間から始めて、少しずつ保育時間を長くする場合があります。",
                "保護者：慣れるまでにどのくらいかかるかは、子どもによって違いますよね。",
                "保育士：はい。お子さんの様子を見ながら、ご家庭と相談して進めていきます。",
                "保護者：仕事を始める日もあるので、予定について早めに相談しておきたいです。",
                "保育士：わかりました。お仕事の予定も伺いながら、無理のない方法を一緒に考えましょう。"
            ],

            en: [
                "Parent: This will be my child's first time being away from family, so I am a little worried about the adjustment period.",
                "Childcare Teacher: In some cases, children start with shorter hours and gradually stay longer.",
                "Parent: The time needed to adjust differs from child to child, right?",
                "Childcare Teacher: Yes. We will watch your child's condition and proceed while discussing it with your family.",
                "Parent: I also have a date when I will start working, so I would like to discuss the schedule early.",
                "Childcare Teacher: I understand. Let us consider a manageable plan together while also taking your work schedule into account."
            ],

            "zh-CN": [
                "家长：这是孩子第一次离开家人，所以我有些担心他需要多久才能适应设施。",
                "保育员：有时会先从短时间开始，再逐渐延长保育时间。",
                "家长：适应需要多长时间，每个孩子都不一样吧？",
                "保育员：是的。我们会观察孩子的情况，并和家庭商量着进行。",
                "家长：我也有开始工作的日期，所以想尽早商量日程。",
                "保育员：明白了。我们也会考虑您的工作安排，一起想一个不会太勉强的方法。"
            ],

            "zh-TW": [
                "家長：這是孩子第一次離開家人，所以我有些擔心他需要多久才能適應設施。",
                "保育人員：有時會先從短時間開始，再逐漸延長保育時間。",
                "家長：適應需要多長時間，每個孩子都不一樣吧？",
                "保育人員：是的。我們會觀察孩子的情況，並和家庭商量著進行。",
                "家長：我也有開始工作的日期，所以想儘早商量日程。",
                "保育人員：明白了。我們也會考慮您的工作安排，一起想一個不會太勉強的方法。"
            ],

            ko: [
                "보호자: 아이가 처음으로 가족과 떨어지는 것이라 시설에 적응할 때까지 조금 걱정됩니다.",
                "보육교사: 처음에는 짧은 시간부터 시작하고 조금씩 보육 시간을 늘리는 경우가 있습니다.",
                "보호자: 적응하는 데 걸리는 시간은 아이마다 다르겠지요?",
                "보육교사: 네. 아이의 상태를 보면서 가정과 상담하여 진행합니다.",
                "보호자: 일을 시작하는 날짜도 있어서 일정에 대해 일찍 상담해 두고 싶습니다.",
                "보육교사: 알겠습니다. 근무 일정도 들으면서 무리 없는 방법을 함께 생각해 봅시다."
            ],

            vi: [
                "Phụ huynh: Đây là lần đầu con tôi xa gia đình nên tôi hơi lo về thời gian để cháu quen với cơ sở.",
                "Giáo viên giữ trẻ: Trong một số trường hợp, trẻ bắt đầu với thời gian ngắn rồi tăng dần thời gian ở lại.",
                "Phụ huynh: Thời gian để quen khác nhau tùy từng trẻ, đúng không?",
                "Giáo viên giữ trẻ: Đúng vậy. Chúng tôi sẽ theo dõi tình trạng của trẻ và trao đổi với gia đình trong quá trình thực hiện.",
                "Phụ huynh: Tôi cũng có ngày bắt đầu đi làm nên muốn trao đổi sớm về lịch trình.",
                "Giáo viên giữ trẻ: Tôi hiểu. Chúng ta hãy cùng tìm phương án phù hợp, đồng thời xem xét lịch làm việc của bạn."
            ]
        }
    ),

    // =====================================================
    // 007 毎日の持ち物を確認する
    // =====================================================

    makeB1ChildcareFacilityDialogue(
        "b1_childcarefacility_007",
        "毎日の持ち物を確認する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "入園が近づいてきたので、毎日持っていく物を確認したいです。",
                target: "にゅうえんがちかづいてきたので まいにちもっていくものをかくにんしたいです",
                ruby: "<ruby>入園<rt>にゅうえん</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づいてきたので、<ruby>毎日<rt>まいにち</rt></ruby><ruby>持<rt>も</rt></ruby>っていく<ruby>物<rt>もの</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Nyūen ga chikazuite kita node, mainichi motte iku mono o kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "保育士",
                line: "着替えやタオルなどがありますが、年齢や施設によって必要な物が違います。",
                target: "きがえやたおるなどがありますが ねんれいやしせつによってひつようなものがちがいます",
                ruby: "<ruby>着替<rt>きが</rt></ruby>えやタオルなどがありますが、<ruby>年齢<rt>ねんれい</rt></ruby>や<ruby>施設<rt>しせつ</rt></ruby>によって<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>物<rt>もの</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>います。",
                romaji: "Kigae ya taoru nado ga arimasu ga, nenrei ya shisetsu ni yotte hitsuyō na mono ga chigaimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "すべての持ち物に名前を書いた方がいいですか。",
                target: "すべてのもちものになまえをかいたほうがいいですか",
                ruby: "すべての<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>に<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いた<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Subete no mochimono ni namae o kaita hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "保育士",
                line: "はい。ほかのお子さんの物と間違えないように、わかりやすく名前を書いてください。",
                target: "はい ほかのおこさんのものとまちがえないように わかりやすくなまえをかいてください",
                ruby: "はい。ほかのお<ruby>子<rt>こ</rt></ruby>さんの<ruby>物<rt>もの</rt></ruby>と<ruby>間違<rt>まちが</rt></ruby>えないように、わかりやすく<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Hai. Hoka no okosan no mono to machigaenai yō ni, wakariyasuku namae o kaite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "季節によって追加で必要になる物についても知りたいです。",
                target: "きせつによってついかでひつようになるものについてもしりたいです",
                ruby: "<ruby>季節<rt>きせつ</rt></ruby>によって<ruby>追加<rt>ついか</rt></ruby>で<ruby>必要<rt>ひつよう</rt></ruby>になる<ruby>物<rt>もの</rt></ruby>についても<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Kisetsu ni yotte tsuika de hitsuyō ni naru mono ni tsuite mo shiritai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "保育士",
                line: "わかりました。季節や行事ごとに必要な物は、早めに連絡するようにしています。",
                target: "わかりました きせつやぎょうじごとにひつようなものは はやめにれんらくするようにしています",
                ruby: "わかりました。<ruby>季節<rt>きせつ</rt></ruby>や<ruby>行事<rt>ぎょうじ</rt></ruby>ごとに<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>物<rt>もの</rt></ruby>は、<ruby>早<rt>はや</rt></ruby>めに<ruby>連絡<rt>れんらく</rt></ruby>するようにしています。",
                romaji: "Wakarimashita. Kisetsu ya gyōji goto ni hitsuyō na mono wa, hayame ni renraku suru yō ni shite imasu."
            }
        ],

        {
            ja: [
                "保護者：入園が近づいてきたので、毎日持っていく物を確認したいです。",
                "保育士：着替えやタオルなどがありますが、年齢や施設によって必要な物が違います。",
                "保護者：すべての持ち物に名前を書いた方がいいですか。",
                "保育士：はい。ほかのお子さんの物と間違えないように、わかりやすく名前を書いてください。",
                "保護者：季節によって追加で必要になる物についても知りたいです。",
                "保育士：わかりました。季節や行事ごとに必要な物は、早めに連絡するようにしています。"
            ],

            en: [
                "Parent: Enrollment is getting closer, so I would like to check what my child needs to bring every day.",
                "Childcare Teacher: Items may include spare clothes and towels, but what is required differs by age and facility.",
                "Parent: Should I write my child's name on every item?",
                "Childcare Teacher: Yes. Please label items clearly so they are not confused with another child's belongings.",
                "Parent: I would also like to know about additional items needed depending on the season.",
                "Childcare Teacher: Certainly. We try to inform families early about items needed for each season or event."
            ],

            "zh-CN": [
                "家长：入园快到了，所以我想确认每天需要带什么。",
                "保育员：需要准备换洗衣物和毛巾等，不过根据年龄和设施不同，所需物品也不同。",
                "家长：所有物品都最好写上孩子的名字吗？",
                "保育员：是的。为了避免和其他孩子的物品弄错，请清楚地写上名字。",
                "家长：我也想知道不同季节还需要追加准备什么。",
                "保育员：好的。根据季节和活动需要的物品，我们会尽早通知。"
            ],

            "zh-TW": [
                "家長：入園快到了，所以我想確認每天需要帶什麼。",
                "保育人員：需要準備換洗衣物和毛巾等，不過根據年齡和設施不同，所需物品也不同。",
                "家長：所有物品都最好寫上孩子的名字嗎？",
                "保育人員：是的。為了避免和其他孩子的物品弄錯，請清楚地寫上名字。",
                "家長：我也想知道不同季節還需要追加準備什麼。",
                "保育人員：好的。根據季節和活動需要的物品，我們會儘早通知。"
            ],

            ko: [
                "보호자: 입소가 가까워져서 매일 가져갈 물건을 확인하고 싶습니다.",
                "보육교사: 갈아입을 옷이나 수건 등이 있지만 나이와 시설에 따라 필요한 물건이 다릅니다.",
                "보호자: 모든 물건에 이름을 쓰는 편이 좋나요?",
                "보육교사: 네. 다른 아이의 물건과 헷갈리지 않도록 알아보기 쉽게 이름을 써 주세요.",
                "보호자: 계절에 따라 추가로 필요한 물건도 알고 싶습니다.",
                "보육교사: 알겠습니다. 계절이나 행사별로 필요한 물건은 미리 연락드리고 있습니다."
            ],

            vi: [
                "Phụ huynh: Ngày nhập học đang đến gần nên tôi muốn xác nhận những đồ cần mang hằng ngày.",
                "Giáo viên giữ trẻ: Có quần áo thay và khăn, nhưng đồ cần thiết khác nhau tùy độ tuổi và cơ sở.",
                "Phụ huynh: Tôi có nên ghi tên lên tất cả đồ dùng không?",
                "Giáo viên giữ trẻ: Có. Xin hãy ghi tên rõ ràng để không bị nhầm với đồ của trẻ khác.",
                "Phụ huynh: Tôi cũng muốn biết những đồ bổ sung cần thiết tùy theo mùa.",
                "Giáo viên giữ trẻ: Vâng. Chúng tôi sẽ thông báo sớm về những đồ cần thiết cho từng mùa hoặc sự kiện."
            ]
        }
    ),

    // =====================================================
    // 008 欠席や送迎の変更を連絡する
    // =====================================================

    makeB1ChildcareFacilityDialogue(
        "b1_childcarefacility_008",
        "欠席や送迎の変更を連絡する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもが朝から熱を出しているので、今日は休ませたいです。",
                target: "こどもがあさからねつをだしているので きょうはやすませたいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>朝<rt>あさ</rt></ruby>から<ruby>熱<rt>ねつ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>しているので、<ruby>今日<rt>きょう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>ませたいです。",
                romaji: "Kodomo ga asa kara netsu o dashite iru node, kyō wa yasumasetai desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "保育士",
                line: "わかりました。現在の体温や、ほかに気になる症状はありますか。",
                target: "わかりました げんざいのたいおんや ほかにきになるしょうじょうはありますか",
                ruby: "わかりました。<ruby>現在<rt>げんざい</rt></ruby>の<ruby>体温<rt>たいおん</rt></ruby>や、ほかに<ruby>気<rt>き</rt></ruby>になる<ruby>症状<rt>しょうじょう</rt></ruby>はありますか。",
                romaji: "Wakarimashita. Genzai no taion ya, hoka ni ki ni naru shōjō wa arimasu ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "三十八度くらいで、少しせきも出ています。今日は家で様子を見ます。",
                target: "さんじゅうはちどくらいで すこしせきもでています きょうはいえでようすをみます",
                ruby: "<ruby>三十八度<rt>さんじゅうはちど</rt></ruby>くらいで、<ruby>少<rt>すこ</rt></ruby>しせきも<ruby>出<rt>で</rt></ruby>ています。<ruby>今日<rt>きょう</rt></ruby>は<ruby>家<rt>いえ</rt></ruby>で<ruby>様子<rt>ようす</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。",
                romaji: "Sanjūhachi-do kurai de, sukoshi seki mo dete imasu. Kyō wa ie de yōsu o mimasu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "保育士",
                line: "わかりました。次に登園するときに、体調について教えてください。",
                target: "わかりました つぎにとうえんするときに たいちょうについておしえてください",
                ruby: "わかりました。<ruby>次<rt>つぎ</rt></ruby>に<ruby>登園<rt>とうえん</rt></ruby>するときに、<ruby>体調<rt>たいちょう</rt></ruby>について<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Wakarimashita. Tsugi ni tōen suru toki ni, taichō ni tsuite oshiete kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "もう一つ相談があります。明日は私ではなく、祖母が迎えに行く予定です。",
                target: "もうひとつそうだんがあります あしたはわたしではなく そぼがむかえにいくよていです",
                ruby: "もう<ruby>一<rt>ひと</rt></ruby>つ<ruby>相談<rt>そうだん</rt></ruby>があります。<ruby>明日<rt>あした</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>ではなく、<ruby>祖母<rt>そぼ</rt></ruby>が<ruby>迎<rt>むか</rt></ruby>えに<ruby>行<rt>い</rt></ruby>く<ruby>予定<rt>よてい</rt></ruby>です。",
                romaji: "Mō hitotsu sōdan ga arimasu. Ashita wa watashi de wa naku, sobo ga mukae ni iku yotei desu."
            },
            {
                label: "話者A",
                key: "teacher",
                name: "保育士",
                line: "承知しました。送迎する人が変わる場合は、安全のため事前に連絡してください。",
                target: "しょうちしました そうげいするひとがかわるばあいは あんぜんのためじぜんにれんらくしてください",
                ruby: "<ruby>承知<rt>しょうち</rt></ruby>しました。<ruby>送迎<rt>そうげい</rt></ruby>する<ruby>人<rt>ひと</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>安全<rt>あんぜん</rt></ruby>のため<ruby>事前<rt>じぜん</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>してください。",
                romaji: "Shōchi shimashita. Sōgei suru hito ga kawaru baai wa, anzen no tame jizen ni renraku shite kudasai."
            }
        ],

        {
            ja: [
                "保護者：子どもが朝から熱を出しているので、今日は休ませたいです。",
                "保育士：わかりました。現在の体温や、ほかに気になる症状はありますか。",
                "保護者：三十八度くらいで、少しせきも出ています。今日は家で様子を見ます。",
                "保育士：わかりました。次に登園するときに、体調について教えてください。",
                "保護者：もう一つ相談があります。明日は私ではなく、祖母が迎えに行く予定です。",
                "保育士：承知しました。送迎する人が変わる場合は、安全のため事前に連絡してください。"
            ],

            en: [
                "Parent: My child has had a fever since this morning, so I would like my child to stay home today.",
                "Childcare Teacher: I understand. What is the current temperature, and are there any other symptoms that concern you?",
                "Parent: It is around 38 degrees, and there is also a slight cough. I will monitor my child at home today.",
                "Childcare Teacher: I understand. Please tell us about your child's condition the next time your child comes to the facility.",
                "Parent: I have one more question. Tomorrow, my child's grandmother will pick up my child instead of me.",
                "Childcare Teacher: Understood. If the person picking up your child changes, please inform us in advance for safety reasons."
            ],

            "zh-CN": [
                "家长：孩子从早上开始发烧，所以今天想让孩子休息。",
                "保育员：明白了。现在体温是多少？还有其他让您担心的症状吗？",
                "家长：大约三十八度，还有一点咳嗽。今天我会让孩子在家观察。",
                "保育员：明白了。下次来园时，请告诉我们孩子的身体状况。",
                "家长：我还有一件事想商量。明天不是我，而是孩子的祖母来接。",
                "保育员：知道了。如果接送的人发生变化，为了安全，请提前联系我们。"
            ],

            "zh-TW": [
                "家長：孩子從早上開始發燒，所以今天想讓孩子休息。",
                "保育人員：明白了。現在體溫是多少？還有其他讓您擔心的症狀嗎？",
                "家長：大約三十八度，還有一點咳嗽。今天我會讓孩子在家觀察。",
                "保育人員：明白了。下次來園時，請告訴我們孩子的身體狀況。",
                "家長：我還有一件事想商量。明天不是我，而是孩子的祖母來接。",
                "保育人員：知道了。如果接送的人發生變化，為了安全，請提前聯絡我們。"
            ],

            ko: [
                "보호자: 아이가 아침부터 열이 나서 오늘은 쉬게 하고 싶습니다.",
                "보육교사: 알겠습니다. 현재 체온과 그 밖에 걱정되는 증상이 있나요?",
                "보호자: 약 38도이고 기침도 조금 합니다. 오늘은 집에서 상태를 지켜보겠습니다.",
                "보육교사: 알겠습니다. 다음에 등원할 때 아이의 몸 상태를 알려 주세요.",
                "보호자: 한 가지 더 상담할 일이 있습니다. 내일은 제가 아니라 할머니가 데리러 갈 예정입니다.",
                "보육교사: 알겠습니다. 아이를 데리러 오는 사람이 바뀌는 경우에는 안전을 위해 미리 연락해 주세요."
            ],

            vi: [
                "Phụ huynh: Con tôi bị sốt từ sáng nên hôm nay tôi muốn cho cháu nghỉ.",
                "Giáo viên giữ trẻ: Tôi hiểu. Nhiệt độ hiện tại là bao nhiêu và có triệu chứng nào khác khiến bạn lo lắng không?",
                "Phụ huynh: Khoảng 38 độ và cháu cũng hơi ho. Hôm nay tôi sẽ theo dõi cháu ở nhà.",
                "Giáo viên giữ trẻ: Tôi hiểu. Lần tới khi cháu đến cơ sở, xin hãy cho chúng tôi biết tình trạng sức khỏe của cháu.",
                "Phụ huynh: Tôi còn một việc muốn trao đổi. Ngày mai không phải tôi mà bà của cháu sẽ đến đón.",
                "Giáo viên giữ trẻ: Tôi hiểu. Khi người đón trẻ thay đổi, xin hãy báo trước vì lý do an toàn."
            ]
        }
    )

];