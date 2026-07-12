// =====================================================
// Japeak B1 Level
// Scene: 育児に関するサービスを利用しよう
// File: data/japeak-b1-childcare-services.js
// Category Key: b1_childcare_services
// =====================================================

const b1ChildcareServicesLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1ChildcareServicesTranslations(translations) {
    const completed = {};

    b1ChildcareServicesLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1ChildcareServicesContext = {
    ja: "子育て中に利用できる相談窓口、子育て支援センター、一時保育、家庭訪問、親子イベント、地域の支援サービス、多言語相談などについて質問し、自分や家族に合ったサービスを利用するための日本語を練習します。",

    en: "Practice Japanese for asking about and using childcare services, including consultation desks, childcare support centers, temporary childcare, home visits, parent-child events, community support services, and multilingual consultation.",

    "zh-CN": "练习询问和使用育儿服务时需要的日语，包括咨询窗口、育儿支援中心、临时托儿、家庭访问、亲子活动、社区支援服务以及多语言咨询。",

    "zh-TW": "練習詢問和使用育兒服務時需要的日語，包括諮詢窗口、育兒支援中心、臨時托育、家庭訪問、親子活動、社區支援服務以及多語言諮詢。",

    ko: "육아 상담 창구, 육아 지원 센터, 일시 보육, 가정 방문, 부모와 아이를 위한 행사, 지역 지원 서비스, 다국어 상담 등에 대해 질문하고 자신과 가족에게 맞는 서비스를 이용하는 일본어를 연습합니다.",

    vi: "Luyện tiếng Nhật để hỏi và sử dụng các dịch vụ nuôi dạy trẻ, bao gồm nơi tư vấn, trung tâm hỗ trợ nuôi dạy trẻ, giữ trẻ tạm thời, thăm gia đình, sự kiện cho cha mẹ và trẻ em, dịch vụ hỗ trợ cộng đồng và tư vấn đa ngôn ngữ.",

    tl: "Practice Japanese for asking about and using childcare services such as consultation desks, childcare support centers, temporary childcare, home visits, parent-child events, community support services, and multilingual consultation.",

    id: "Latihan bahasa Jepang untuk menanyakan dan menggunakan layanan pengasuhan anak, termasuk tempat konsultasi, pusat dukungan pengasuhan anak, penitipan sementara, kunjungan rumah, acara orang tua dan anak, layanan dukungan masyarakat, dan konsultasi multibahasa.",

    th: "ฝึกภาษาญี่ปุ่นสำหรับการสอบถามและใช้บริการด้านการเลี้ยงดูเด็ก เช่น จุดให้คำปรึกษา ศูนย์สนับสนุนการเลี้ยงดูเด็ก บริการดูแลเด็กชั่วคราว การเยี่ยมบ้าน กิจกรรมสำหรับผู้ปกครองและเด็ก บริการสนับสนุนในชุมชน และการปรึกษาหลายภาษา",

    my: "ကလေးပြုစုပျိုးထောင်ရေး အကြံပေးဌာနများ၊ ကလေးပြုစုရေး အထောက်အပံ့စင်တာများ၊ ယာယီကလေးစောင့်ရှောက်မှု၊ အိမ်သို့လာရောက်ကူညီမှု၊ မိဘနှင့်ကလေးအစီအစဉ်များ၊ ရပ်ရွာအထောက်အပံ့ဝန်ဆောင်မှုများနှင့် ဘာသာစကားမျိုးစုံဖြင့် အကြံပေးခြင်းတို့ကို မေးမြန်းအသုံးပြုရန် ဂျပန်စကားကို လေ့ကျင့်ပါ။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់សួរ និងប្រើប្រាស់សេវាថែទាំកុមារ រួមមានកន្លែងពិគ្រោះយោបល់ មជ្ឈមណ្ឌលគាំទ្រការចិញ្ចឹមកូន សេវាថែទាំបណ្ដោះអាសន្ន ការទៅសួរសុខទុក្ខតាមផ្ទះ កម្មវិធីសម្រាប់ឪពុកម្តាយនិងកុមារ សេវាគាំទ្រសហគមន៍ និងការពិគ្រោះជាច្រើនភាសា។",

    ne: "बालबालिका पालनसम्बन्धी परामर्श केन्द्र, बाल हेरचाह सहायता केन्द्र, अस्थायी बाल हेरचाह, घर भ्रमण, अभिभावक र बालबालिकाका कार्यक्रम, सामुदायिक सहायता सेवा तथा बहुभाषिक परामर्शबारे सोध्न र प्रयोग गर्न जापानी अभ्यास।",

    mn: "Хүүхэд асрах зөвлөгөөний цэг, хүүхэд асрах дэмжлэгийн төв, түр асаргаа, гэрээр очих үйлчилгээ, эцэг эх хүүхдийн арга хэмжээ, орон нутгийн дэмжлэг, олон хэлний зөвлөгөөний талаар асууж, ашиглах япон хэлний дадлага.",

    si: "ළමා සුරැකුම් උපදේශන මධ්‍යස්ථාන, ළමා සුරැකුම් සහාය මධ්‍යස්ථාන, තාවකාලික ළමා රැකවරණය, නිවෙස් සංචාර, දෙමාපිය-ළමා වැඩසටහන්, ප්‍රජා සහාය සේවා සහ බහුභාෂා උපදේශන පිළිබඳව විමසීමට සහ භාවිතා කිරීමට ජපන් භාෂා පුහුණුව.",

    bn: "শিশু লালনপালন পরামর্শ কেন্দ্র, শিশু সহায়তা কেন্দ্র, অস্থায়ী শিশু পরিচর্যা, বাড়িতে পরিদর্শন, অভিভাবক-শিশু অনুষ্ঠান, কমিউনিটি সহায়তা পরিষেবা এবং বহুভাষিক পরামর্শ সম্পর্কে জিজ্ঞাসা ও ব্যবহার করার জন্য জাপানি অনুশীলন।",

    pt: "Prática de japonês para perguntar sobre e utilizar serviços de apoio à criação de filhos, incluindo centros de consulta, centros de apoio familiar, cuidados infantis temporários, visitas domiciliares, eventos para pais e filhos, serviços comunitários e consultas multilíngues.",

    es: "Práctica de japonés para preguntar sobre y utilizar servicios de apoyo a la crianza, incluidos centros de consulta, centros de apoyo familiar, cuidado infantil temporal, visitas domiciliarias, eventos para padres e hijos, servicios comunitarios y consultas multilingües.",

    fr: "Entraînement en japonais pour demander des renseignements et utiliser les services de soutien à la parentalité, notamment les bureaux de consultation, les centres de soutien, la garde temporaire, les visites à domicile, les activités parents-enfants, les services communautaires et les consultations multilingues.",

    ru: "Практика японского языка для получения информации и использования услуг по уходу за детьми: консультационные службы, центры поддержки родителей, временный присмотр за детьми, посещения на дому, мероприятия для родителей и детей, общественные службы и многоязычные консультации.",

    uk: "Практика японської мови для отримання інформації та користування послугами з догляду за дітьми: консультаційні служби, центри підтримки батьків, тимчасовий догляд, відвідування вдома, заходи для батьків і дітей, громадські послуги та багатомовні консультації."
};

const b1ChildcareServicesSpeakerNames = {

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

    centerStaff: {
        ja: "支援センター職員",
        en: "Support Center Staff",
        "zh-CN": "支援中心工作人员",
        "zh-TW": "支援中心工作人員",
        ko: "지원 센터 직원",
        vi: "Nhân viên trung tâm hỗ trợ",
        tl: "Support center staff",
        id: "Petugas pusat dukungan",
        th: "เจ้าหน้าที่ศูนย์สนับสนุน",
        my: "အထောက်အပံ့စင်တာဝန်ထမ်း",
        km: "បុគ្គលិកមជ្ឈមណ្ឌលគាំទ្រ",
        ne: "सहायता केन्द्र कर्मचारी",
        mn: "Дэмжлэгийн төвийн ажилтан",
        si: "සහාය මධ්‍යස්ථාන නිලධාරියා",
        bn: "সহায়তা কেন্দ্রের কর্মী",
        pt: "Funcionário do centro de apoio",
        es: "Personal del centro de apoyo",
        fr: "Personnel du centre de soutien",
        ru: "Сотрудник центра поддержки",
        uk: "Працівник центру підтримки"
    },

    childcareStaff: {
        ja: "保育職員",
        en: "Childcare Staff",
        "zh-CN": "保育工作人员",
        "zh-TW": "托育工作人員",
        ko: "보육 직원",
        vi: "Nhân viên giữ trẻ",
        tl: "Childcare staff",
        id: "Petugas penitipan anak",
        th: "เจ้าหน้าที่ดูแลเด็ก",
        my: "ကလေးစောင့်ရှောက်ရေးဝန်ထမ်း",
        km: "បុគ្គលិកថែទាំកុមារ",
        ne: "बाल हेरचाह कर्मचारी",
        mn: "Хүүхэд асрах ажилтан",
        si: "ළමා රැකවරණ සේවකයා",
        bn: "শিশু পরিচর্যা কর্মী",
        pt: "Profissional de cuidados infantis",
        es: "Personal de cuidado infantil",
        fr: "Personnel de garde d'enfants",
        ru: "Сотрудник службы ухода за детьми",
        uk: "Працівник служби догляду за дітьми"
    },

    visitor: {
        ja: "訪問スタッフ",
        en: "Home-Visit Staff",
        "zh-CN": "家访工作人员",
        "zh-TW": "家訪工作人員",
        ko: "방문 지원 직원",
        vi: "Nhân viên thăm gia đình",
        tl: "Home-visit staff",
        id: "Petugas kunjungan rumah",
        th: "เจ้าหน้าที่เยี่ยมบ้าน",
        my: "အိမ်သို့လာရောက်ကူညီသူ",
        km: "បុគ្គលិកចុះសួរសុខទុក្ខតាមផ្ទះ",
        ne: "घर भ्रमण कर्मचारी",
        mn: "Гэрээр очих ажилтан",
        si: "නිවෙස් සංචාරක නිලධාරියා",
        bn: "বাড়ি পরিদর্শন কর্মী",
        pt: "Profissional de visita domiciliar",
        es: "Personal de visita domiciliaria",
        fr: "Intervenant à domicile",
        ru: "Специалист по посещению на дому",
        uk: "Працівник служби домашніх візитів"
    },

    coordinator: {
        ja: "コーディネーター",
        en: "Coordinator",
        "zh-CN": "协调员",
        "zh-TW": "協調員",
        ko: "코디네이터",
        vi: "Điều phối viên",
        tl: "Coordinator",
        id: "Koordinator",
        th: "ผู้ประสานงาน",
        my: "ညှိနှိုင်းရေးမှူး",
        km: "អ្នកសម្របសម្រួល",
        ne: "समन्वयकर्ता",
        mn: "Зохицуулагч",
        si: "සම්බන්ධීකාරක",
        bn: "সমন্বয়কারী",
        pt: "Coordenador",
        es: "Coordinador",
        fr: "Coordinateur",
        ru: "Координатор",
        uk: "Координатор"
    }
};

function makeB1ChildcareServicesDialogue(
    id,
    title,
    dialogue,
    dialogueTranslations
) {
    const fullDialogueTranslations =
        completeB1ChildcareServicesTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_childcare_services",

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
                b1ChildcareServicesSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1ChildcareServicesContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1ChildcareServicesData = [

    // =====================================================
    // 001 利用できる育児サービスについて相談する
    // =====================================================

    makeB1ChildcareServicesDialogue(
        "b1_childcareservice_001",
        "利用できる育児サービスについて相談する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもを育てながら利用できるサービスについて、教えていただきたいです。",
                target: "こどもをそだてながらりようできるさーびすについて おしえていただきたいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもを<ruby>育<rt>そだ</rt></ruby>てながら<ruby>利用<rt>りよう</rt></ruby>できるサービスについて、<ruby>教<rt>おし</rt></ruby>えていただきたいです。",
                romaji: "Kodomo o sodatenagara riyō dekiru sābisu ni tsuite, oshiete itadakitai desu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "はい。お子さんの年齢や、ご家庭で困っていることについて教えていただけますか。",
                target: "はい おこさんのねんれいや ごかていでこまっていることについておしえていただけますか",
                ruby: "はい。お<ruby>子<rt>こ</rt></ruby>さんの<ruby>年齢<rt>ねんれい</rt></ruby>や、ご<ruby>家庭<rt>かてい</rt></ruby>で<ruby>困<rt>こま</rt></ruby>っていることについて<ruby>教<rt>おし</rt></ruby>えていただけますか。",
                romaji: "Hai. Okosan no nenrei ya, gokatei de komatte iru koto ni tsuite oshiete itadakemasu ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもは一歳です。近くに家族がいないので、一人で育児をする時間が長いです。",
                target: "こどもはいっさいです ちかくにかぞくがいないので ひとりでいくじをするじかんがながいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもは<ruby>一歳<rt>いっさい</rt></ruby>です。<ruby>近<rt>ちか</rt></ruby>くに<ruby>家族<rt>かぞく</rt></ruby>がいないので、<ruby>一人<rt>ひとり</rt></ruby>で<ruby>育児<rt>いくじ</rt></ruby>をする<ruby>時間<rt>じかん</rt></ruby>が<ruby>長<rt>なが</rt></ruby>いです。",
                romaji: "Kodomo wa issai desu. Chikaku ni kazoku ga inai node, hitori de ikuji o suru jikan ga nagai desu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "それでしたら、子育て支援センターや一時保育などが役立つかもしれません。",
                target: "それでしたら こそだてしえんせんたーやいちじほいくなどがやくだつかもしれません",
                ruby: "それでしたら、<ruby>子育<rt>こそだ</rt></ruby>て<ruby>支援<rt>しえん</rt></ruby>センターや<ruby>一時保育<rt>いちじほいく</rt></ruby>などが<ruby>役立<rt>やくだ</rt></ruby>つかもしれません。",
                romaji: "Sore deshitara, kosodate shien sentā ya ichiji hoiku nado ga yakudatsu kamo shiremasen."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "それぞれどのようなサービスなのか、違いを説明していただけますか。",
                target: "それぞれどのようなさーびすなのか ちがいをせつめいしていただけますか",
                ruby: "それぞれどのようなサービスなのか、<ruby>違<rt>ちが</rt></ruby>いを<ruby>説明<rt>せつめい</rt></ruby>していただけますか。",
                romaji: "Sorezore dono yō na sābisu na no ka, chigai o setsumei shite itadakemasu ka."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "もちろんです。利用する目的や必要な手続きも含めて、一つずつ確認しましょう。",
                target: "もちろんです りようするもくてきやひつようなてつづきもふくめて ひとつずつかくにんしましょう",
                ruby: "もちろんです。<ruby>利用<rt>りよう</rt></ruby>する<ruby>目的<rt>もくてき</rt></ruby>や<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>手続<rt>てつづ</rt></ruby>きも<ruby>含<rt>ふく</rt></ruby>めて、<ruby>一<rt>ひと</rt></ruby>つずつ<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Mochiron desu. Riyō suru mokuteki ya hitsuyō na tetsuzuki mo fukumete, hitotsu zutsu kakunin shimashō."
            }
        ],

        {
            ja: [
                "保護者：子どもを育てながら利用できるサービスについて、教えていただきたいです。",
                "市職員：はい。お子さんの年齢や、ご家庭で困っていることについて教えていただけますか。",
                "保護者：子どもは一歳です。近くに家族がいないので、一人で育児をする時間が長いです。",
                "市職員：それでしたら、子育て支援センターや一時保育などが役立つかもしれません。",
                "保護者：それぞれどのようなサービスなのか、違いを説明していただけますか。",
                "市職員：もちろんです。利用する目的や必要な手続きも含めて、一つずつ確認しましょう。"
            ],

            en: [
                "Parent: I would like to know about services I can use while raising my child.",
                "City Official: Certainly. Could you tell me your child's age and what difficulties you are experiencing at home?",
                "Parent: My child is one year old. I do not have family nearby, so I spend long periods caring for my child alone.",
                "City Official: In that case, a childcare support center or temporary childcare may be helpful.",
                "Parent: Could you explain what each service provides and how they are different?",
                "City Official: Of course. Let us review them one by one, including their purposes and the procedures required."
            ],

            "zh-CN": [
                "家长：我想了解一下在养育孩子期间可以利用的服务。",
                "市政府工作人员：好的。可以告诉我孩子的年龄，以及您在家庭生活中遇到的困难吗？",
                "家长：孩子一岁。因为附近没有家人，所以我长时间都是一个人照顾孩子。",
                "市政府工作人员：这样的话，育儿支援中心或临时托儿服务可能会对您有帮助。",
                "家长：可以说明一下每种服务的内容和区别吗？",
                "市政府工作人员：当然可以。我们把使用目的和必要手续也包括在内，一项一项确认吧。"
            ],

            "zh-TW": [
                "家長：我想了解一下在養育孩子期間可以利用的服務。",
                "市政府工作人員：好的。可以告訴我孩子的年齡，以及您在家庭生活中遇到的困難嗎？",
                "家長：孩子一歲。因為附近沒有家人，所以我長時間都是一個人照顧孩子。",
                "市政府工作人員：這樣的話，育兒支援中心或臨時托育服務可能會對您有幫助。",
                "家長：可以說明一下每種服務的內容和區別嗎？",
                "市政府工作人員：當然可以。我們把使用目的和必要手續也包括在內，一項一項確認吧。"
            ],

            ko: [
                "보호자: 아이를 키우면서 이용할 수 있는 서비스에 대해 알고 싶습니다.",
                "시청 직원: 네. 아이의 나이와 가정에서 어려움을 겪고 있는 점을 알려 주실 수 있나요?",
                "보호자: 아이는 한 살입니다. 가까이에 가족이 없어서 혼자 육아하는 시간이 깁니다.",
                "시청 직원: 그렇다면 육아 지원 센터나 일시 보육 등이 도움이 될 수 있습니다.",
                "보호자: 각각 어떤 서비스인지 차이를 설명해 주실 수 있나요?",
                "시청 직원: 물론입니다. 이용 목적과 필요한 절차도 포함해서 하나씩 확인해 봅시다."
            ],

            vi: [
                "Phụ huynh: Tôi muốn biết về những dịch vụ có thể sử dụng trong quá trình nuôi con.",
                "Nhân viên thành phố: Vâng. Bạn có thể cho tôi biết tuổi của con và những khó khăn mà gia đình đang gặp phải không?",
                "Phụ huynh: Con tôi một tuổi. Vì không có gia đình ở gần nên tôi phải chăm con một mình trong thời gian dài.",
                "Nhân viên thành phố: Nếu vậy, trung tâm hỗ trợ nuôi dạy trẻ hoặc dịch vụ giữ trẻ tạm thời có thể hữu ích.",
                "Phụ huynh: Bạn có thể giải thích từng dịch vụ và sự khác nhau giữa chúng không?",
                "Nhân viên thành phố: Tất nhiên. Chúng ta hãy xác nhận từng dịch vụ, bao gồm mục đích sử dụng và các thủ tục cần thiết."
            ]
        }
    ),

    // =====================================================
    // 002 子育て支援センターを利用する
    // =====================================================

    makeB1ChildcareServicesDialogue(
        "b1_childcareservice_002",
        "子育て支援センターを利用する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子育て支援センターを初めて利用したいのですが、予約は必要ですか。",
                target: "こそだてしえんせんたーをはじめてりようしたいのですが よやくはひつようですか",
                ruby: "<ruby>子育<rt>こそだ</rt></ruby>て<ruby>支援<rt>しえん</rt></ruby>センターを<ruby>初<rt>はじ</rt></ruby>めて<ruby>利用<rt>りよう</rt></ruby>したいのですが、<ruby>予約<rt>よやく</rt></ruby>は<ruby>必要<rt>ひつよう</rt></ruby>ですか。",
                romaji: "Kosodate shien sentā o hajimete riyō shitai no desu ga, yoyaku wa hitsuyō desu ka."
            },
            {
                label: "話者A",
                key: "centerStaff",
                name: "支援センター職員",
                line: "通常の利用は予約なしで大丈夫ですが、イベントによっては事前予約が必要です。",
                target: "つうじょうのりようはよやくなしでだいじょうぶですが いべんとによってはじぜんよやくがひつようです",
                ruby: "<ruby>通常<rt>つうじょう</rt></ruby>の<ruby>利用<rt>りよう</rt></ruby>は<ruby>予約<rt>よやく</rt></ruby>なしで<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですが、イベントによっては<ruby>事前予約<rt>じぜんよやく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。",
                romaji: "Tsūjō no riyō wa yoyaku nashi de daijōbu desu ga, ibento ni yotte wa jizen yoyaku ga hitsuyō desu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもを遊ばせるだけでなく、育児について相談することもできますか。",
                target: "こどもをあそばせるだけでなく いくじについてそうだんすることもできますか",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもを<ruby>遊<rt>あそ</rt></ruby>ばせるだけでなく、<ruby>育児<rt>いくじ</rt></ruby>について<ruby>相談<rt>そうだん</rt></ruby>することもできますか。",
                romaji: "Kodomo o asobaseru dake de naku, ikuji ni tsuite sōdan suru koto mo dekimasu ka."
            },
            {
                label: "話者A",
                key: "centerStaff",
                name: "支援センター職員",
                line: "はい。日頃困っていることや気になっていることを、スタッフに相談できます。",
                target: "はい ひごろこまっていることやきになっていることを すたっふにそうだんできます",
                ruby: "はい。<ruby>日頃<rt>ひごろ</rt></ruby><ruby>困<rt>こま</rt></ruby>っていることや<ruby>気<rt>き</rt></ruby>になっていることを、スタッフに<ruby>相談<rt>そうだん</rt></ruby>できます。",
                romaji: "Hai. Higoro komatte iru koto ya ki ni natte iru koto o, sutaffu ni sōdan dekimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "家にいる時間が長いので、ほかの保護者と話せる機会があるのも嬉しいです。",
                target: "いえにいるじかんがながいので ほかのほごしゃとはなせるきかいがあるのもうれしいです",
                ruby: "<ruby>家<rt>いえ</rt></ruby>にいる<ruby>時間<rt>じかん</rt></ruby>が<ruby>長<rt>なが</rt></ruby>いので、ほかの<ruby>保護者<rt>ほごしゃ</rt></ruby>と<ruby>話<rt>はな</rt></ruby>せる<ruby>機会<rt>きかい</rt></ruby>があるのも<ruby>嬉<rt>うれ</rt></ruby>しいです。",
                romaji: "Ie ni iru jikan ga nagai node, hoka no hogosha to hanaseru kikai ga aru no mo ureshii desu."
            },
            {
                label: "話者A",
                key: "centerStaff",
                name: "支援センター職員",
                line: "ぜひ気軽に来てください。初めての方でも利用しやすいようにご案内します。",
                target: "ぜひきがるにきてください はじめてのかたでもりようしやすいようにごあんないします",
                ruby: "ぜひ<ruby>気軽<rt>きがる</rt></ruby>に<ruby>来<rt>き</rt></ruby>てください。<ruby>初<rt>はじ</rt></ruby>めての<ruby>方<rt>かた</rt></ruby>でも<ruby>利用<rt>りよう</rt></ruby>しやすいようにご<ruby>案内<rt>あんない</rt></ruby>します。",
                romaji: "Zehi kigaru ni kite kudasai. Hajimete no kata demo riyō shiyasui yō ni go-annai shimasu."
            }
        ],

        {
            ja: [
                "保護者：子育て支援センターを初めて利用したいのですが、予約は必要ですか。",
                "支援センター職員：通常の利用は予約なしで大丈夫ですが、イベントによっては事前予約が必要です。",
                "保護者：子どもを遊ばせるだけでなく、育児について相談することもできますか。",
                "支援センター職員：はい。日頃困っていることや気になっていることを、スタッフに相談できます。",
                "保護者：家にいる時間が長いので、ほかの保護者と話せる機会があるのも嬉しいです。",
                "支援センター職員：ぜひ気軽に来てください。初めての方でも利用しやすいようにご案内します。"
            ],

            en: [
                "Parent: I would like to use the childcare support center for the first time. Do I need a reservation?",
                "Support Center Staff: Regular visits do not require a reservation, but some events require advance booking.",
                "Parent: Besides letting my child play, can I also ask for advice about childcare?",
                "Support Center Staff: Yes. You can talk with our staff about everyday difficulties and concerns.",
                "Parent: I spend a lot of time at home, so I am also happy to have opportunities to talk with other parents.",
                "Support Center Staff: Please feel free to visit. We will help make the center easy to use even for first-time visitors."
            ],

            "zh-CN": [
                "家长：我第一次想使用育儿支援中心，需要预约吗？",
                "支援中心工作人员：一般使用不需要预约，不过有些活动需要提前预约。",
                "家长：除了让孩子玩以外，也可以咨询育儿问题吗？",
                "支援中心工作人员：可以。您可以向工作人员咨询平时遇到的困难和担心的事情。",
                "家长：我长时间待在家里，所以有机会和其他家长交流也让我很开心。",
                "支援中心工作人员：请轻松地来参加。即使是第一次使用，我们也会为您提供说明。"
            ],

            "zh-TW": [
                "家長：我第一次想使用育兒支援中心，需要預約嗎？",
                "支援中心工作人員：一般使用不需要預約，不過有些活動需要提前預約。",
                "家長：除了讓孩子玩以外，也可以諮詢育兒問題嗎？",
                "支援中心工作人員：可以。您可以向工作人員諮詢平時遇到的困難和擔心的事情。",
                "家長：我長時間待在家裡，所以有機會和其他家長交流也讓我很開心。",
                "支援中心工作人員：請輕鬆地來參加。即使是第一次使用，我們也會為您提供說明。"
            ],

            ko: [
                "보호자: 육아 지원 센터를 처음 이용하고 싶은데 예약이 필요한가요?",
                "지원 센터 직원: 일반 이용은 예약 없이 가능하지만 행사에 따라 사전 예약이 필요합니다.",
                "보호자: 아이를 놀게 하는 것뿐 아니라 육아 상담도 할 수 있나요?",
                "지원 센터 직원: 네. 평소 어려운 점이나 걱정되는 점을 직원과 상담할 수 있습니다.",
                "보호자: 집에 있는 시간이 길어서 다른 보호자와 이야기할 기회가 있는 것도 기쁩니다.",
                "지원 센터 직원: 부담 없이 방문해 주세요. 처음 오시는 분도 이용하기 쉽도록 안내해 드리겠습니다."
            ],

            vi: [
                "Phụ huynh: Tôi muốn sử dụng trung tâm hỗ trợ nuôi dạy trẻ lần đầu. Có cần đặt trước không?",
                "Nhân viên trung tâm hỗ trợ: Việc sử dụng thông thường không cần đặt trước, nhưng một số sự kiện cần đăng ký trước.",
                "Phụ huynh: Ngoài việc cho trẻ chơi, tôi có thể tư vấn về việc nuôi con không?",
                "Nhân viên trung tâm hỗ trợ: Có. Bạn có thể trao đổi với nhân viên về những khó khăn hoặc điều khiến bạn lo lắng hằng ngày.",
                "Phụ huynh: Tôi ở nhà nhiều nên cũng rất vui vì có cơ hội nói chuyện với những phụ huynh khác.",
                "Nhân viên trung tâm hỗ trợ: Hãy thoải mái đến đây. Chúng tôi sẽ hướng dẫn để cả người lần đầu cũng dễ sử dụng."
            ]
        }
    ),

    // =====================================================
    // 003 一時保育について申し込む
    // =====================================================

    makeB1ChildcareServicesDialogue(
        "b1_childcareservice_003",
        "一時保育について申し込む",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "用事がある日に、数時間だけ子どもを預かってもらえるサービスはありますか。",
                target: "ようじがあるひに すうじかんだけこどもをあずかってもらえるさーびすはありますか",
                ruby: "<ruby>用事<rt>ようじ</rt></ruby>がある<ruby>日<rt>ひ</rt></ruby>に、<ruby>数時間<rt>すうじかん</rt></ruby>だけ<ruby>子<rt>こ</rt></ruby>どもを<ruby>預<rt>あず</rt></ruby>かってもらえるサービスはありますか。",
                romaji: "Yōji ga aru hi ni, sūjikan dake kodomo o azukatte moraeru sābisu wa arimasu ka."
            },
            {
                label: "話者A",
                key: "childcareStaff",
                name: "保育職員",
                line: "一時保育を利用できる場合がありますが、対象年齢や利用条件を確認する必要があります。",
                target: "いちじほいくをりようできるばあいがありますが たいしょうねんれいやりようじょうけんをかくにんするひつようがあります",
                ruby: "<ruby>一時保育<rt>いちじほいく</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>できる<ruby>場合<rt>ばあい</rt></ruby>がありますが、<ruby>対象年齢<rt>たいしょうねんれい</rt></ruby>や<ruby>利用条件<rt>りようじょうけん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>があります。",
                romaji: "Ichiji hoiku o riyō dekiru baai ga arimasu ga, taishō nenrei ya riyō jōken o kakunin suru hitsuyō ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "初めて利用するときは、事前に登録しなければなりませんか。",
                target: "はじめてりようするときは じぜんにとうろくしなければなりませんか",
                ruby: "<ruby>初<rt>はじ</rt></ruby>めて<ruby>利用<rt>りよう</rt></ruby>するときは、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>登録<rt>とうろく</rt></ruby>しなければなりませんか。",
                romaji: "Hajimete riyō suru toki wa, jizen ni tōroku shinakereba narimasen ka."
            },
            {
                label: "話者A",
                key: "childcareStaff",
                name: "保育職員",
                line: "施設によって異なりますが、事前登録や面談が必要な場合があります。",
                target: "しせつによってことなりますが じぜんとうろくやめんだんがひつようなばあいがあります",
                ruby: "<ruby>施設<rt>しせつ</rt></ruby>によって<ruby>異<rt>こと</rt></ruby>なりますが、<ruby>事前登録<rt>じぜんとうろく</rt></ruby>や<ruby>面談<rt>めんだん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>があります。",
                romaji: "Shisetsu ni yotte kotonarimasu ga, jizen tōroku ya mendan ga hitsuyō na baai ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "急に必要になることもあるので、今のうちに登録だけしておきたいです。",
                target: "きゅうにひつようになることもあるので いまのうちにとうろくだけしておきたいです",
                ruby: "<ruby>急<rt>きゅう</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>になることもあるので、<ruby>今<rt>いま</rt></ruby>のうちに<ruby>登録<rt>とうろく</rt></ruby>だけしておきたいです。",
                romaji: "Kyū ni hitsuyō ni naru koto mo aru node, ima no uchi ni tōroku dake shite okitai desu."
            },
            {
                label: "話者A",
                key: "childcareStaff",
                name: "保育職員",
                line: "それはいいと思います。必要書類や予約方法について、こちらの案内を確認しましょう。",
                target: "それはいいとおもいます ひつようしょるいやよやくほうほうについて こちらのあんないをかくにんしましょう",
                ruby: "それはいいと<ruby>思<rt>おも</rt></ruby>います。<ruby>必要書類<rt>ひつようしょるい</rt></ruby>や<ruby>予約方法<rt>よやくほうほう</rt></ruby>について、こちらの<ruby>案内<rt>あんない</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Sore wa ii to omoimasu. Hitsuyō shorui ya yoyaku hōhō ni tsuite, kochira no annai o kakunin shimashō."
            }
        ],

        {
            ja: [
                "保護者：用事がある日に、数時間だけ子どもを預かってもらえるサービスはありますか。",
                "保育職員：一時保育を利用できる場合がありますが、対象年齢や利用条件を確認する必要があります。",
                "保護者：初めて利用するときは、事前に登録しなければなりませんか。",
                "保育職員：施設によって異なりますが、事前登録や面談が必要な場合があります。",
                "保護者：急に必要になることもあるので、今のうちに登録だけしておきたいです。",
                "保育職員：それはいいと思います。必要書類や予約方法について、こちらの案内を確認しましょう。"
            ],

            en: [
                "Parent: Is there a service that can look after my child for just a few hours when I have something to do?",
                "Childcare Staff: Temporary childcare may be available, but you need to check the eligible ages and conditions of use.",
                "Parent: Do I have to register in advance when using it for the first time?",
                "Childcare Staff: It depends on the facility, but advance registration or an interview may be required.",
                "Parent: I may need it unexpectedly, so I would like to register in advance.",
                "Childcare Staff: I think that is a good idea. Let us check this information about the required documents and reservation process."
            ],

            "zh-CN": [
                "家长：有事情的时候，有没有只照顾孩子几个小时的服务？",
                "保育工作人员：有时可以使用临时托儿服务，不过需要确认适用年龄和使用条件。",
                "家长：第一次使用时必须提前登记吗？",
                "保育工作人员：根据设施不同，可能需要提前登记或面谈。",
                "家长：因为有时会突然需要，所以我想现在先完成登记。",
                "保育工作人员：我觉得这样很好。我们来确认一下必要文件和预约方法。"
            ],

            "zh-TW": [
                "家長：有事情的時候，有沒有只照顧孩子幾個小時的服務？",
                "托育工作人員：有時可以使用臨時托育服務，不過需要確認適用年齡和使用條件。",
                "家長：第一次使用時必須提前登記嗎？",
                "托育工作人員：根據設施不同，可能需要提前登記或面談。",
                "家長：因為有時會突然需要，所以我想現在先完成登記。",
                "托育工作人員：我覺得這樣很好。我們來確認一下必要文件和預約方法。"
            ],

            ko: [
                "보호자: 볼일이 있는 날 몇 시간만 아이를 맡길 수 있는 서비스가 있나요?",
                "보육 직원: 일시 보육을 이용할 수 있는 경우가 있지만 대상 연령과 이용 조건을 확인해야 합니다.",
                "보호자: 처음 이용할 때는 미리 등록해야 하나요?",
                "보육 직원: 시설에 따라 다르지만 사전 등록이나 면담이 필요한 경우가 있습니다.",
                "보호자: 갑자기 필요할 수도 있어서 지금 미리 등록해 두고 싶습니다.",
                "보육 직원: 좋은 생각입니다. 필요한 서류와 예약 방법에 대해 이 안내를 확인해 봅시다."
            ],

            vi: [
                "Phụ huynh: Có dịch vụ nào có thể trông con tôi chỉ vài giờ vào ngày tôi có việc không?",
                "Nhân viên giữ trẻ: Có thể có dịch vụ giữ trẻ tạm thời, nhưng cần kiểm tra độ tuổi áp dụng và điều kiện sử dụng.",
                "Phụ huynh: Khi sử dụng lần đầu, tôi có phải đăng ký trước không?",
                "Nhân viên giữ trẻ: Tùy cơ sở, có thể cần đăng ký hoặc phỏng vấn trước.",
                "Phụ huynh: Vì có thể đột nhiên cần dùng nên tôi muốn đăng ký sẵn từ bây giờ.",
                "Nhân viên giữ trẻ: Tôi nghĩ đó là một ý hay. Chúng ta hãy kiểm tra hướng dẫn về giấy tờ cần thiết và cách đặt chỗ."
            ]
        }
    ),

    // =====================================================
    // 004 家庭訪問や育児相談を利用する
    // =====================================================

    makeB1ChildcareServicesDialogue(
        "b1_childcareservice_004",
        "家庭訪問や育児相談を利用する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "外出が難しいので、自宅で育児について相談できるサービスがあるか知りたいです。",
                target: "がいしゅつがむずかしいので じたくでいくじについてそうだんできるさーびすがあるかしりたいです",
                ruby: "<ruby>外出<rt>がいしゅつ</rt></ruby>が<ruby>難<rt>むずか</rt></ruby>しいので、<ruby>自宅<rt>じたく</rt></ruby>で<ruby>育児<rt>いくじ</rt></ruby>について<ruby>相談<rt>そうだん</rt></ruby>できるサービスがあるか<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Gaishutsu ga muzukashii node, jitaku de ikuji ni tsuite sōdan dekiru sābisu ga aru ka shiritai desu."
            },
            {
                label: "話者A",
                key: "visitor",
                name: "訪問スタッフ",
                line: "地域によっては、スタッフがご家庭を訪問して相談を受けるサービスがあります。",
                target: "ちいきによっては すたっふがごかていをほうもんしてそうだんをうけるさーびすがあります",
                ruby: "<ruby>地域<rt>ちいき</rt></ruby>によっては、スタッフがご<ruby>家庭<rt>かてい</rt></ruby>を<ruby>訪問<rt>ほうもん</rt></ruby>して<ruby>相談<rt>そうだん</rt></ruby>を<ruby>受<rt>う</rt></ruby>けるサービスがあります。",
                romaji: "Chiiki ni yotte wa, sutaffu ga gokatei o hōmon shite sōdan o ukeru sābisu ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもの生活リズムや食事についても相談できますか。",
                target: "こどものせいかつりずむやしょくじについてもそうだんできますか",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもの<ruby>生活<rt>せいかつ</rt></ruby>リズムや<ruby>食事<rt>しょくじ</rt></ruby>についても<ruby>相談<rt>そうだん</rt></ruby>できますか。",
                romaji: "Kodomo no seikatsu rizumu ya shokuji ni tsuite mo sōdan dekimasu ka."
            },
            {
                label: "話者A",
                key: "visitor",
                name: "訪問スタッフ",
                line: "はい。心配していることを伺い、必要に応じてほかの相談先をご案内することもあります。",
                target: "はい しんぱいしていることをうかがい ひつようにおうじてほかのそうだんさきをごあんないすることもあります",
                ruby: "はい。<ruby>心配<rt>しんぱい</rt></ruby>していることを<ruby>伺<rt>うかが</rt></ruby>い、<ruby>必要<rt>ひつよう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じてほかの<ruby>相談先<rt>そうだんさき</rt></ruby>をご<ruby>案内<rt>あんない</rt></ruby>することもあります。",
                romaji: "Hai. Shinpai shite iru koto o ukagai, hitsuyō ni ōjite hoka no sōdansaki o go-annai suru koto mo arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "一人で悩んでいたので、自宅で話を聞いてもらえるだけでも安心できそうです。",
                target: "ひとりでなやんでいたので じたくではなしをきいてもらえるだけでもあんしんできそうです",
                ruby: "<ruby>一人<rt>ひとり</rt></ruby>で<ruby>悩<rt>なや</rt></ruby>んでいたので、<ruby>自宅<rt>じたく</rt></ruby>で<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてもらえるだけでも<ruby>安心<rt>あんしん</rt></ruby>できそうです。",
                romaji: "Hitori de nayande ita node, jitaku de hanashi o kiite moraeru dake demo anshin dekisō desu."
            },
            {
                label: "話者A",
                key: "visitor",
                name: "訪問スタッフ",
                line: "遠慮せず相談してください。困りごとを一緒に整理しながら、必要な支援を考えましょう。",
                target: "えんりょせずそうだんしてください こまりごとをいっしょにせいりしながら ひつようなしえんをかんがえましょう",
                ruby: "<ruby>遠慮<rt>えんりょ</rt></ruby>せず<ruby>相談<rt>そうだん</rt></ruby>してください。<ruby>困<rt>こま</rt></ruby>りごとを<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>整理<rt>せいり</rt></ruby>しながら、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>支援<rt>しえん</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えましょう。",
                romaji: "Enryo sezu sōdan shite kudasai. Komarigoto o issho ni seiri shinagara, hitsuyō na shien o kangaemashō."
            }
        ],

        {
            ja: [
                "保護者：外出が難しいので、自宅で育児について相談できるサービスがあるか知りたいです。",
                "訪問スタッフ：地域によっては、スタッフがご家庭を訪問して相談を受けるサービスがあります。",
                "保護者：子どもの生活リズムや食事についても相談できますか。",
                "訪問スタッフ：はい。心配していることを伺い、必要に応じてほかの相談先をご案内することもあります。",
                "保護者：一人で悩んでいたので、自宅で話を聞いてもらえるだけでも安心できそうです。",
                "訪問スタッフ：遠慮せず相談してください。困りごとを一緒に整理しながら、必要な支援を考えましょう。"
            ],

            en: [
                "Parent: Going out is difficult for me, so I would like to know whether there is a service where I can ask for childcare advice at home.",
                "Home-Visit Staff: Depending on the area, there may be a service where staff visit families at home to provide consultation.",
                "Parent: Can I also ask about my child's daily routine and meals?",
                "Home-Visit Staff: Yes. We listen to your concerns and, when necessary, may introduce you to other appropriate consultation services.",
                "Parent: I have been worrying alone, so I think even having someone listen to me at home would be reassuring.",
                "Home-Visit Staff: Please do not hesitate to talk with us. Let us organize your concerns together and consider what support you may need."
            ],

            "zh-CN": [
                "家长：我外出比较困难，所以想知道有没有可以在家里咨询育儿问题的服务。",
                "家访工作人员：根据地区不同，可能有工作人员上门接受咨询的服务。",
                "家长：孩子的生活规律和饮食问题也可以咨询吗？",
                "家访工作人员：可以。我们会听取您的担忧，必要时也可能为您介绍其他合适的咨询机构。",
                "家长：我一直一个人烦恼，所以即使只是在家里有人听我说说话，也会觉得安心。",
                "家访工作人员：请不要客气，随时咨询。我们一起整理您的困难，并考虑需要什么样的支援。"
            ],

            "zh-TW": [
                "家長：我外出比較困難，所以想知道有沒有可以在家裡諮詢育兒問題的服務。",
                "家訪工作人員：根據地區不同，可能有工作人員到府接受諮詢的服務。",
                "家長：孩子的生活規律和飲食問題也可以諮詢嗎？",
                "家訪工作人員：可以。我們會聽取您的擔憂，必要時也可能為您介紹其他合適的諮詢機構。",
                "家長：我一直一個人煩惱，所以即使只是在家裡有人聽我說說話，也會覺得安心。",
                "家訪工作人員：請不要客氣，隨時諮詢。我們一起整理您的困難，並考慮需要什麼樣的支援。"
            ],

            ko: [
                "보호자: 외출하기가 어려워서 집에서 육아에 대해 상담할 수 있는 서비스가 있는지 알고 싶습니다.",
                "방문 지원 직원: 지역에 따라 직원이 가정을 방문하여 상담을 제공하는 서비스가 있습니다.",
                "보호자: 아이의 생활 리듬이나 식사에 대해서도 상담할 수 있나요?",
                "방문 지원 직원: 네. 걱정되는 점을 듣고 필요에 따라 다른 상담 기관을 안내하기도 합니다.",
                "보호자: 혼자 고민하고 있었기 때문에 집에서 이야기를 들어 주는 것만으로도 안심할 수 있을 것 같습니다.",
                "방문 지원 직원: 부담 갖지 말고 상담해 주세요. 어려움을 함께 정리하면서 필요한 지원을 생각해 봅시다."
            ],

            vi: [
                "Phụ huynh: Tôi khó ra ngoài nên muốn biết có dịch vụ nào có thể tư vấn về nuôi con tại nhà không.",
                "Nhân viên thăm gia đình: Tùy khu vực, có dịch vụ nhân viên đến nhà để lắng nghe và tư vấn.",
                "Phụ huynh: Tôi có thể hỏi cả về nhịp sinh hoạt và việc ăn uống của con không?",
                "Nhân viên thăm gia đình: Có. Chúng tôi sẽ lắng nghe những điều bạn lo lắng và khi cần có thể giới thiệu nơi tư vấn phù hợp khác.",
                "Phụ huynh: Tôi đã lo lắng một mình nên chỉ cần có người đến nhà nghe tôi nói cũng khiến tôi yên tâm hơn.",
                "Nhân viên thăm gia đình: Đừng ngại trao đổi. Chúng ta hãy cùng sắp xếp những khó khăn và xem bạn cần sự hỗ trợ nào."
            ]
        }
    ),

    // =====================================================
    // 005 親子イベントに参加する
    // =====================================================

    makeB1ChildcareServicesDialogue(
        "b1_childcareservice_005",
        "親子イベントに参加する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもと一緒に参加できるイベントがあると聞いたのですが、どのような内容ですか。",
                target: "こどもといっしょにさんかできるいべんとがあるときいたのですが どのようなないようですか",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもと<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>参加<rt>さんか</rt></ruby>できるイベントがあると<ruby>聞<rt>き</rt></ruby>いたのですが、どのような<ruby>内容<rt>ないよう</rt></ruby>ですか。",
                romaji: "Kodomo to issho ni sanka dekiru ibento ga aru to kiita no desu ga, dono yō na naiyō desu ka."
            },
            {
                label: "話者A",
                key: "centerStaff",
                name: "支援センター職員",
                line: "親子で遊んだり、歌を歌ったりしながら、ほかの家族とも交流できるイベントです。",
                target: "おやこであそんだり うたをうたったりしながら ほかのかぞくともこうりゅうできるいべんとです",
                ruby: "<ruby>親子<rt>おやこ</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>んだり、<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>ったりしながら、ほかの<ruby>家族<rt>かぞく</rt></ruby>とも<ruby>交流<rt>こうりゅう</rt></ruby>できるイベントです。",
                romaji: "Oyako de asondari, uta o utattari shinagara, hoka no kazoku to mo kōryū dekiru ibento desu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "子どもがまだ人の多い場所に慣れていないのですが、途中で帰っても大丈夫ですか。",
                target: "こどもがまだひとのおおいばしょになれていないのですが とちゅうでかえってもだいじょうぶですか",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもがまだ<ruby>人<rt>ひと</rt></ruby>の<ruby>多<rt>おお</rt></ruby>い<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れていないのですが、<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>帰<rt>かえ</rt></ruby>っても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Kodomo ga mada hito no ōi basho ni narete inai no desu ga, tochū de kaette mo daijōbu desu ka."
            },
            {
                label: "話者A",
                key: "centerStaff",
                name: "支援センター職員",
                line: "はい。お子さんの様子に合わせて、無理のない範囲で参加してください。",
                target: "はい おこさんのようすにあわせて むりのないはんいでさんかしてください",
                ruby: "はい。お<ruby>子<rt>こ</rt></ruby>さんの<ruby>様子<rt>ようす</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせて、<ruby>無理<rt>むり</rt></ruby>のない<ruby>範囲<rt>はんい</rt></ruby>で<ruby>参加<rt>さんか</rt></ruby>してください。",
                romaji: "Hai. Okosan no yōsu ni awasete, muri no nai han'i de sanka shite kudasai."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "それなら安心です。ほかの保護者とも少し話してみたいと思っています。",
                target: "それならあんしんです ほかのほごしゃともすこしはなしてみたいとおもっています",
                ruby: "それなら<ruby>安心<rt>あんしん</rt></ruby>です。ほかの<ruby>保護者<rt>ほごしゃ</rt></ruby>とも<ruby>少<rt>すこ</rt></ruby>し<ruby>話<rt>はな</rt></ruby>してみたいと<ruby>思<rt>おも</rt></ruby>っています。",
                romaji: "Sore nara anshin desu. Hoka no hogosha to mo sukoshi hanashite mitai to omotte imasu."
            },
            {
                label: "話者A",
                key: "centerStaff",
                name: "支援センター職員",
                line: "ぜひ参加してみてください。最初は見るだけでも大丈夫ですよ。",
                target: "ぜひさんかしてみてください さいしょはみるだけでもだいじょうぶですよ",
                ruby: "ぜひ<ruby>参加<rt>さんか</rt></ruby>してみてください。<ruby>最初<rt>さいしょ</rt></ruby>は<ruby>見<rt>み</rt></ruby>るだけでも<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですよ。",
                romaji: "Zehi sanka shite mite kudasai. Saisho wa miru dake demo daijōbu desu yo."
            }
        ],

        {
            ja: [
                "保護者：子どもと一緒に参加できるイベントがあると聞いたのですが、どのような内容ですか。",
                "支援センター職員：親子で遊んだり、歌を歌ったりしながら、ほかの家族とも交流できるイベントです。",
                "保護者：子どもがまだ人の多い場所に慣れていないのですが、途中で帰っても大丈夫ですか。",
                "支援センター職員：はい。お子さんの様子に合わせて、無理のない範囲で参加してください。",
                "保護者：それなら安心です。ほかの保護者とも少し話してみたいと思っています。",
                "支援センター職員：ぜひ参加してみてください。最初は見るだけでも大丈夫ですよ。"
            ],

            en: [
                "Parent: I heard there is an event that I can attend with my child. What kind of activities does it have?",
                "Support Center Staff: Parents and children can play and sing together while also meeting other families.",
                "Parent: My child is not yet used to crowded places. Is it okay if we leave partway through?",
                "Support Center Staff: Yes. Please participate only as much as is comfortable for your child.",
                "Parent: That is reassuring. I would also like to try talking with other parents.",
                "Support Center Staff: Please come and give it a try. It is also fine just to watch at first."
            ],

            "zh-CN": [
                "家长：我听说有可以和孩子一起参加的活动，请问是什么内容？",
                "支援中心工作人员：这是家长和孩子可以一起玩、唱歌，并和其他家庭交流的活动。",
                "家长：孩子还不习惯人多的地方，中途离开也可以吗？",
                "支援中心工作人员：可以。请根据孩子的情况，在不勉强的范围内参加。",
                "家长：那我就放心了。我也想试着和其他家长聊一聊。",
                "支援中心工作人员：请来参加看看。刚开始只是看看也没关系。"
            ],

            "zh-TW": [
                "家長：我聽說有可以和孩子一起參加的活動，請問是什麼內容？",
                "支援中心工作人員：這是家長和孩子可以一起玩、唱歌，並和其他家庭交流的活動。",
                "家長：孩子還不習慣人多的地方，中途離開也可以嗎？",
                "支援中心工作人員：可以。請根據孩子的情況，在不勉強的範圍內參加。",
                "家長：那我就放心了。我也想試著和其他家長聊一聊。",
                "支援中心工作人員：請來參加看看。剛開始只是看看也沒關係。"
            ],

            ko: [
                "보호자: 아이와 함께 참여할 수 있는 행사가 있다고 들었는데 어떤 내용인가요?",
                "지원 센터 직원: 부모와 아이가 함께 놀고 노래하면서 다른 가족과도 교류할 수 있는 행사입니다.",
                "보호자: 아이가 아직 사람이 많은 곳에 익숙하지 않은데 중간에 돌아가도 괜찮나요?",
                "지원 센터 직원: 네. 아이의 상태에 맞추어 무리하지 않는 범위에서 참여해 주세요.",
                "보호자: 그렇다면 안심입니다. 다른 보호자와도 조금 이야기해 보고 싶습니다.",
                "지원 센터 직원: 꼭 참여해 보세요. 처음에는 보기만 해도 괜찮습니다."
            ],

            vi: [
                "Phụ huynh: Tôi nghe nói có sự kiện có thể tham gia cùng con. Nội dung là gì?",
                "Nhân viên trung tâm hỗ trợ: Đây là sự kiện cha mẹ và trẻ có thể cùng chơi, hát và giao lưu với các gia đình khác.",
                "Phụ huynh: Con tôi chưa quen nơi đông người. Chúng tôi có thể về giữa chừng không?",
                "Nhân viên trung tâm hỗ trợ: Có. Hãy tham gia trong phạm vi phù hợp với tình trạng của con.",
                "Phụ huynh: Vậy thì tôi yên tâm rồi. Tôi cũng muốn thử nói chuyện với những phụ huynh khác.",
                "Nhân viên trung tâm hỗ trợ: Hãy thử tham gia nhé. Ban đầu chỉ đứng xem cũng không sao."
            ]
        }
    ),

    // =====================================================
    // 006 地域の子育て支援を利用する
    // =====================================================

    makeB1ChildcareServicesDialogue(
        "b1_childcareservice_006",
        "地域の子育て支援を利用する",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "仕事や通院のときに、子どもの送迎などを頼める地域のサービスはありますか。",
                target: "しごとやつういんのときに こどものそうげいなどをたのめるちいきのさーびすはありますか",
                ruby: "<ruby>仕事<rt>しごと</rt></ruby>や<ruby>通院<rt>つういん</rt></ruby>のときに、<ruby>子<rt>こ</rt></ruby>どもの<ruby>送迎<rt>そうげい</rt></ruby>などを<ruby>頼<rt>たの</rt></ruby>める<ruby>地域<rt>ちいき</rt></ruby>のサービスはありますか。",
                romaji: "Shigoto ya tsūin no toki ni, kodomo no sōgei nado o tanomeru chiiki no sābisu wa arimasu ka."
            },
            {
                label: "話者A",
                key: "coordinator",
                name: "コーディネーター",
                line: "地域によっては、子育てを手伝ってほしい人と支援できる人をつなぐサービスがあります。",
                target: "ちいきによっては こそだてをてつだってほしいひととしえんできるひとをつなぐさーびすがあります",
                ruby: "<ruby>地域<rt>ちいき</rt></ruby>によっては、<ruby>子育<rt>こそだ</rt></ruby>てを<ruby>手伝<rt>てつだ</rt></ruby>ってほしい<ruby>人<rt>ひと</rt></ruby>と<ruby>支援<rt>しえん</rt></ruby>できる<ruby>人<rt>ひと</rt></ruby>をつなぐサービスがあります。",
                romaji: "Chiiki ni yotte wa, kosodate o tetsudatte hoshii hito to shien dekiru hito o tsunagu sābisu ga arimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "利用する前に、相手の方と会って話すことはできますか。",
                target: "りようするまえに あいてのかたとあってはなすことはできますか",
                ruby: "<ruby>利用<rt>りよう</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>に、<ruby>相手<rt>あいて</rt></ruby>の<ruby>方<rt>かた</rt></ruby>と<ruby>会<rt>あ</rt></ruby>って<ruby>話<rt>はな</rt></ruby>すことはできますか。",
                romaji: "Riyō suru mae ni, aite no kata to atte hanasu koto wa dekimasu ka."
            },
            {
                label: "話者A",
                key: "coordinator",
                name: "コーディネーター",
                line: "はい。事前に顔合わせをして、お願いしたい内容や注意点を確認します。",
                target: "はい じぜんにかおあわせをして おねがいしたいないようやちゅういてんをかくにんします",
                ruby: "はい。<ruby>事前<rt>じぜん</rt></ruby>に<ruby>顔合<rt>かおあ</rt></ruby>わせをして、お<ruby>願<rt>ねが</rt></ruby>いしたい<ruby>内容<rt>ないよう</rt></ruby>や<ruby>注意点<rt>ちゅういてん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。",
                romaji: "Hai. Jizen ni kaoawase o shite, onegai shitai naiyō ya chūiten o kakunin shimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "初めて人に子どもをお願いするので、事前に話せるなら安心です。",
                target: "はじめてひとにこどもをおねがいするので じぜんにはなせるならあんしんです",
                ruby: "<ruby>初<rt>はじ</rt></ruby>めて<ruby>人<rt>ひと</rt></ruby>に<ruby>子<rt>こ</rt></ruby>どもをお<ruby>願<rt>ねが</rt></ruby>いするので、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>話<rt>はな</rt></ruby>せるなら<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Hajimete hito ni kodomo o onegai suru node, jizen ni hanaseru nara anshin desu."
            },
            {
                label: "話者A",
                key: "coordinator",
                name: "コーディネーター",
                line: "不安な点は遠慮なく聞いてください。利用できる内容や料金も一緒に確認しましょう。",
                target: "ふあんなてんはえんりょなくきいてください りようできるないようやりょうきんもいっしょにかくにんしましょう",
                ruby: "<ruby>不安<rt>ふあん</rt></ruby>な<ruby>点<rt>てん</rt></ruby>は<ruby>遠慮<rt>えんりょ</rt></ruby>なく<ruby>聞<rt>き</rt></ruby>いてください。<ruby>利用<rt>りよう</rt></ruby>できる<ruby>内容<rt>ないよう</rt></ruby>や<ruby>料金<rt>りょうきん</rt></ruby>も<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Fuan na ten wa enryo naku kiite kudasai. Riyō dekiru naiyō ya ryōkin mo issho ni kakunin shimashō."
            }
        ],

        {
            ja: [
                "保護者：仕事や通院のときに、子どもの送迎などを頼める地域のサービスはありますか。",
                "コーディネーター：地域によっては、子育てを手伝ってほしい人と支援できる人をつなぐサービスがあります。",
                "保護者：利用する前に、相手の方と会って話すことはできますか。",
                "コーディネーター：はい。事前に顔合わせをして、お願いしたい内容や注意点を確認します。",
                "保護者：初めて人に子どもをお願いするので、事前に話せるなら安心です。",
                "コーディネーター：不安な点は遠慮なく聞いてください。利用できる内容や料金も一緒に確認しましょう。"
            ],

            en: [
                "Parent: Is there a local service that can help with things such as taking my child somewhere when I have work or a medical appointment?",
                "Coordinator: Depending on the area, there may be a service that connects people who need childcare help with people who can provide support.",
                "Parent: Can I meet and talk with the person before using the service?",
                "Coordinator: Yes. We arrange a meeting in advance to discuss what help you need and any important points.",
                "Parent: This is my first time asking someone else to care for my child, so being able to talk beforehand would reassure me.",
                "Coordinator: Please ask about anything that concerns you. Let us also check the available support and fees together."
            ],

            "zh-CN": [
                "家长：工作或去医院的时候，有没有可以帮忙接送孩子等的社区服务？",
                "协调员：根据地区不同，可能有把需要育儿帮助的人和能够提供支援的人联系起来的服务。",
                "家长：使用之前，可以和对方见面交流吗？",
                "协调员：可以。我们会事先安排见面，确认您希望得到的帮助内容和注意事项。",
                "家长：这是我第一次把孩子托付给别人，如果能事先交流，我会比较安心。",
                "协调员：有任何不安请不要客气地询问。我们也一起确认可以利用的内容和费用吧。"
            ],

            "zh-TW": [
                "家長：工作或去醫院的時候，有沒有可以幫忙接送孩子等的社區服務？",
                "協調員：根據地區不同，可能有把需要育兒幫助的人和能夠提供支援的人聯繫起來的服務。",
                "家長：使用之前，可以和對方見面交流嗎？",
                "協調員：可以。我們會事先安排見面，確認您希望得到的幫助內容和注意事項。",
                "家長：這是我第一次把孩子託付給別人，如果能事先交流，我會比較安心。",
                "協調員：有任何不安請不要客氣地詢問。我們也一起確認可以利用的內容和費用吧。"
            ],

            ko: [
                "보호자: 일이나 병원 진료 때 아이의 이동 등을 부탁할 수 있는 지역 서비스가 있나요?",
                "코디네이터: 지역에 따라 육아 도움을 원하는 사람과 지원할 수 있는 사람을 연결하는 서비스가 있습니다.",
                "보호자: 이용하기 전에 상대방과 만나서 이야기할 수 있나요?",
                "코디네이터: 네. 미리 만나서 부탁하고 싶은 내용과 주의 사항을 확인합니다.",
                "보호자: 처음으로 다른 사람에게 아이를 맡기는 것이라 미리 이야기할 수 있다면 안심됩니다.",
                "코디네이터: 불안한 점은 부담 없이 물어보세요. 이용 가능한 내용과 요금도 함께 확인합시다."
            ],

            vi: [
                "Phụ huynh: Có dịch vụ địa phương nào có thể giúp đưa đón con khi tôi đi làm hoặc đi khám bệnh không?",
                "Điều phối viên: Tùy khu vực, có dịch vụ kết nối người cần hỗ trợ nuôi con với người có thể giúp đỡ.",
                "Phụ huynh: Trước khi sử dụng, tôi có thể gặp và nói chuyện với người đó không?",
                "Điều phối viên: Có. Chúng tôi sẽ sắp xếp gặp trước để xác nhận nội dung cần hỗ trợ và những điểm cần chú ý.",
                "Phụ huynh: Đây là lần đầu tôi nhờ người khác chăm con, nên nếu có thể nói chuyện trước thì tôi sẽ yên tâm hơn.",
                "Điều phối viên: Hãy hỏi bất cứ điều gì khiến bạn lo lắng. Chúng ta cũng sẽ cùng xác nhận nội dung có thể sử dụng và chi phí."
            ]
        }
    ),

    // =====================================================
    // 007 多言語で育児相談をする
    // =====================================================

    makeB1ChildcareServicesDialogue(
        "b1_childcareservice_007",
        "多言語で育児相談をする",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "日常会話はできますが、育児に関する難しい日本語にはあまり自信がありません。",
                target: "にちじょうかいわはできますが いくじにかんするむずかしいにほんごにはあまりじしんがありません",
                ruby: "<ruby>日常会話<rt>にちじょうかいわ</rt></ruby>はできますが、<ruby>育児<rt>いくじ</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>難<rt>むずか</rt></ruby>しい<ruby>日本語<rt>にほんご</rt></ruby>にはあまり<ruby>自信<rt>じしん</rt></ruby>がありません。",
                romaji: "Nichijō kaiwa wa dekimasu ga, ikuji ni kansuru muzukashii Nihongo ni wa amari jishin ga arimasen."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "わかりました。どの言語での相談を希望していますか。",
                target: "わかりました どのげんごでのそうだんをきぼうしていますか",
                ruby: "わかりました。どの<ruby>言語<rt>げんご</rt></ruby>での<ruby>相談<rt>そうだん</rt></ruby>を<ruby>希望<rt>きぼう</rt></ruby>していますか。",
                romaji: "Wakarimashita. Dono gengo de no sōdan o kibō shite imasu ka."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "できればポルトガル語で相談したいですが、利用できるサービスはありますか。",
                target: "できればぽるとがるごでそうだんしたいですが りようできるさーびすはありますか",
                ruby: "できればポルトガル<ruby>語<rt>ご</rt></ruby>で<ruby>相談<rt>そうだん</rt></ruby>したいですが、<ruby>利用<rt>りよう</rt></ruby>できるサービスはありますか。",
                romaji: "Dekireba Porutogaru-go de sōdan shitai desu ga, riyō dekiru sābisu wa arimasu ka."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "多言語対応は窓口や日時によって異なるので、利用できる方法を確認します。",
                target: "たげんごたいおうはまどぐちやにちじによってことなるので りようできるほうほうをかくにんします",
                ruby: "<ruby>多言語対応<rt>たげんごたいおう</rt></ruby>は<ruby>窓口<rt>まどぐち</rt></ruby>や<ruby>日時<rt>にちじ</rt></ruby>によって<ruby>異<rt>こと</rt></ruby>なるので、<ruby>利用<rt>りよう</rt></ruby>できる<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。",
                romaji: "Tagengo taiō wa madoguchi ya nichiji ni yotte kotonaru node, riyō dekiru hōhō o kakunin shimasu."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "大切な説明を正しく理解したいので、事前に予約が必要なら教えてください。",
                target: "たいせつなせつめいをただしくりかいしたいので じぜんによやくがひつようならおしえてください",
                ruby: "<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>説明<rt>せつめい</rt></ruby>を<ruby>正<rt>ただ</rt></ruby>しく<ruby>理解<rt>りかい</rt></ruby>したいので、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>予約<rt>よやく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>なら<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Taisetsu na setsumei o tadashiku rikai shitai node, jizen ni yoyaku ga hitsuyō nara oshiete kudasai."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "もちろんです。利用できる日時や予約方法を確認して、わかりやすくご案内します。",
                target: "もちろんです りようできるにちじやよやくほうほうをかくにんして わかりやすくごあんないします",
                ruby: "もちろんです。<ruby>利用<rt>りよう</rt></ruby>できる<ruby>日時<rt>にちじ</rt></ruby>や<ruby>予約方法<rt>よやくほうほう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>して、わかりやすくご<ruby>案内<rt>あんない</rt></ruby>します。",
                romaji: "Mochiron desu. Riyō dekiru nichiji ya yoyaku hōhō o kakunin shite, wakariyasuku go-annai shimasu."
            }
        ],

        {
            ja: [
                "保護者：日常会話はできますが、育児に関する難しい日本語にはあまり自信がありません。",
                "市職員：わかりました。どの言語での相談を希望していますか。",
                "保護者：できればポルトガル語で相談したいですが、利用できるサービスはありますか。",
                "市職員：多言語対応は窓口や日時によって異なるので、利用できる方法を確認します。",
                "保護者：大切な説明を正しく理解したいので、事前に予約が必要なら教えてください。",
                "市職員：もちろんです。利用できる日時や予約方法を確認して、わかりやすくご案内します。"
            ],

            en: [
                "Parent: I can manage everyday conversations, but I am not very confident with difficult Japanese related to childcare.",
                "City Official: I understand. Which language would you prefer to use for consultation?",
                "Parent: If possible, I would like to consult in Portuguese. Is there a service I can use?",
                "City Official: Multilingual support differs depending on the office and time, so I will check what options are available.",
                "Parent: I want to understand important explanations correctly, so please tell me if I need to make a reservation in advance.",
                "City Official: Of course. I will check the available times and reservation process and explain them clearly."
            ],

            "zh-CN": [
                "家长：日常会话没有问题，但是我对育儿方面的复杂日语没有太大信心。",
                "市政府工作人员：明白了。您希望使用哪种语言进行咨询？",
                "家长：如果可以的话，我想用葡萄牙语咨询。有可以利用的服务吗？",
                "市政府工作人员：多语言服务根据窗口和日期时间不同而有所不同，我来确认可以使用的方法。",
                "家长：我想正确理解重要说明，如果需要提前预约，请告诉我。",
                "市政府工作人员：当然可以。我会确认可以利用的日期时间和预约方法，并清楚地向您说明。"
            ],

            "zh-TW": [
                "家長：日常會話沒有問題，但是我對育兒方面的複雜日語沒有太大信心。",
                "市政府工作人員：明白了。您希望使用哪種語言進行諮詢？",
                "家長：如果可以的話，我想用葡萄牙語諮詢。有可以利用的服務嗎？",
                "市政府工作人員：多語言服務根據窗口和日期時間不同而有所不同，我來確認可以使用的方法。",
                "家長：我想正確理解重要說明，如果需要提前預約，請告訴我。",
                "市政府工作人員：當然可以。我會確認可以利用的日期時間和預約方法，並清楚地向您說明。"
            ],

            ko: [
                "보호자: 일상 대화는 할 수 있지만 육아와 관련된 어려운 일본어에는 자신이 별로 없습니다.",
                "시청 직원: 알겠습니다. 어떤 언어로 상담하기를 원하시나요?",
                "보호자: 가능하면 포르투갈어로 상담하고 싶은데 이용할 수 있는 서비스가 있나요?",
                "시청 직원: 다국어 지원은 창구나 날짜와 시간에 따라 다르므로 이용 가능한 방법을 확인하겠습니다.",
                "보호자: 중요한 설명을 정확히 이해하고 싶어서 사전 예약이 필요하다면 알려 주세요.",
                "시청 직원: 물론입니다. 이용 가능한 날짜와 예약 방법을 확인해서 알기 쉽게 안내해 드리겠습니다."
            ],

            vi: [
                "Phụ huynh: Tôi có thể giao tiếp hằng ngày, nhưng không tự tin lắm với tiếng Nhật khó liên quan đến nuôi dạy trẻ.",
                "Nhân viên thành phố: Tôi hiểu. Bạn muốn tư vấn bằng ngôn ngữ nào?",
                "Phụ huynh: Nếu có thể, tôi muốn tư vấn bằng tiếng Bồ Đào Nha. Có dịch vụ nào tôi có thể sử dụng không?",
                "Nhân viên thành phố: Hỗ trợ đa ngôn ngữ khác nhau tùy quầy và thời gian, nên tôi sẽ kiểm tra những phương thức có thể sử dụng.",
                "Phụ huynh: Tôi muốn hiểu chính xác các giải thích quan trọng, nên nếu cần đặt trước hãy cho tôi biết.",
                "Nhân viên thành phố: Tất nhiên. Tôi sẽ kiểm tra thời gian có thể sử dụng và cách đặt trước rồi hướng dẫn rõ ràng."
            ]
        }
    ),

    // =====================================================
    // 008 自分に合うサービスを選ぶ
    // =====================================================

    makeB1ChildcareServicesDialogue(
        "b1_childcareservice_008",
        "自分に合うサービスを選ぶ",

        [
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "いくつかサービスを紹介してもらいましたが、どれを利用すればいいか迷っています。",
                target: "いくつかさーびすをしょうかいしてもらいましたが どれをりようすればいいかまよっています",
                ruby: "いくつかサービスを<ruby>紹介<rt>しょうかい</rt></ruby>してもらいましたが、どれを<ruby>利用<rt>りよう</rt></ruby>すればいいか<ruby>迷<rt>まよ</rt></ruby>っています。",
                romaji: "Ikutsuka sābisu o shōkai shite moraimashita ga, dore o riyō sureba ii ka mayotte imasu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "では、今一番困っていることと、どのような支援を希望しているか整理してみましょう。",
                target: "では いまいちばんこまっていることと どのようなしえんをきぼうしているかせいりしてみましょう",
                ruby: "では、<ruby>今<rt>いま</rt></ruby><ruby>一番<rt>いちばん</rt></ruby><ruby>困<rt>こま</rt></ruby>っていることと、どのような<ruby>支援<rt>しえん</rt></ruby>を<ruby>希望<rt>きぼう</rt></ruby>しているか<ruby>整理<rt>せいり</rt></ruby>してみましょう。",
                romaji: "Dewa, ima ichiban komatte iru koto to, dono yō na shien o kibō shite iru ka seiri shite mimashō."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "一人になる時間がほとんどなく、少し休む時間が必要だと感じています。",
                target: "ひとりになるじかんがほとんどなく すこしやすむじかんがひつようだとかんじています",
                ruby: "<ruby>一人<rt>ひとり</rt></ruby>になる<ruby>時間<rt>じかん</rt></ruby>がほとんどなく、<ruby>少<rt>すこ</rt></ruby>し<ruby>休<rt>やす</rt></ruby>む<ruby>時間<rt>じかん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だと<ruby>感<rt>かん</rt></ruby>じています。",
                romaji: "Hitori ni naru jikan ga hotondo naku, sukoshi yasumu jikan ga hitsuyō da to kanjite imasu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "それでしたら、一時保育などの利用条件を確認してみるとよいかもしれません。",
                target: "それでしたら いちじほいくなどのりようじょうけんをかくにんしてみるとよいかもしれません",
                ruby: "それでしたら、<ruby>一時保育<rt>いちじほいく</rt></ruby>などの<ruby>利用条件<rt>りようじょうけん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してみるとよいかもしれません。",
                romaji: "Sore deshitara, ichiji hoiku nado no riyō jōken o kakunin shite miru to yoi kamo shiremasen."
            },
            {
                label: "話者B",
                key: "parent",
                name: "保護者",
                line: "料金や予約の取りやすさも比べてから決めたいです。",
                target: "りょうきんやよやくのとりやすさもくらべてからきめたいです",
                ruby: "<ruby>料金<rt>りょうきん</rt></ruby>や<ruby>予約<rt>よやく</rt></ruby>の<ruby>取<rt>と</rt></ruby>りやすさも<ruby>比<rt>くら</rt></ruby>べてから<ruby>決<rt>き</rt></ruby>めたいです。",
                romaji: "Ryōkin ya yoyaku no toriyasusa mo kurabete kara kimetai desu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "いいですね。無理に一つに決めず、必要に応じて複数のサービスを使い分ける方法もあります。",
                target: "いいですね むりにひとつにきめず ひつようにおうじてふくすうのさーびすをつかいわけるほうほうもあります",
                ruby: "いいですね。<ruby>無理<rt>むり</rt></ruby>に<ruby>一<rt>ひと</rt></ruby>つに<ruby>決<rt>き</rt></ruby>めず、<ruby>必要<rt>ひつよう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>複数<rt>ふくすう</rt></ruby>のサービスを<ruby>使<rt>つか</rt></ruby>い<ruby>分<rt>わ</rt></ruby>ける<ruby>方法<rt>ほうほう</rt></ruby>もあります。",
                romaji: "Ii desu ne. Muri ni hitotsu ni kimezu, hitsuyō ni ōjite fukusū no sābisu o tsukaiwakeru hōhō mo arimasu."
            }
        ],

        {
            ja: [
                "保護者：いくつかサービスを紹介してもらいましたが、どれを利用すればいいか迷っています。",
                "市職員：では、今一番困っていることと、どのような支援を希望しているか整理してみましょう。",
                "保護者：一人になる時間がほとんどなく、少し休む時間が必要だと感じています。",
                "市職員：それでしたら、一時保育などの利用条件を確認してみるとよいかもしれません。",
                "保護者：料金や予約の取りやすさも比べてから決めたいです。",
                "市職員：いいですね。無理に一つに決めず、必要に応じて複数のサービスを使い分ける方法もあります。"
            ],

            en: [
                "Parent: I have been introduced to several services, but I am not sure which one I should use.",
                "City Official: Then let us organize what is most difficult for you now and what kind of support you hope to receive.",
                "Parent: I hardly have any time alone, and I feel that I need some time to rest.",
                "City Official: In that case, it may be useful to check the conditions for services such as temporary childcare.",
                "Parent: I would like to compare the fees and how easy it is to make reservations before deciding.",
                "City Official: Good. You do not have to choose only one service. You can also use different services depending on your needs."
            ],

            "zh-CN": [
                "家长：我已经听介绍了几种服务，但是不知道应该使用哪一种。",
                "市政府工作人员：那么，我们先整理一下您现在最困难的事情，以及希望得到什么样的支援。",
                "家长：我几乎没有独处的时间，觉得自己需要一点休息时间。",
                "市政府工作人员：这样的话，可以考虑确认一下临时托儿等服务的使用条件。",
                "家长：我想比较费用和预约是否方便以后再决定。",
                "市政府工作人员：很好。不必勉强只选择一种服务，也可以根据需要组合使用多种服务。"
            ],

            "zh-TW": [
                "家長：我已經聽介紹了幾種服務，但是不知道應該使用哪一種。",
                "市政府工作人員：那麼，我們先整理一下您現在最困難的事情，以及希望得到什麼樣的支援。",
                "家長：我幾乎沒有獨處的時間，覺得自己需要一點休息時間。",
                "市政府工作人員：這樣的話，可以考慮確認一下臨時托育等服務的使用條件。",
                "家長：我想比較費用和預約是否方便以後再決定。",
                "市政府工作人員：很好。不必勉強只選擇一種服務，也可以根據需要組合使用多種服務。"
            ],

            ko: [
                "보호자: 여러 서비스를 소개받았는데 어떤 것을 이용해야 할지 고민됩니다.",
                "시청 직원: 그러면 지금 가장 어려운 점과 어떤 지원을 원하는지 정리해 봅시다.",
                "보호자: 혼자 있는 시간이 거의 없어서 조금 쉴 시간이 필요하다고 느끼고 있습니다.",
                "시청 직원: 그렇다면 일시 보육 등의 이용 조건을 확인해 보는 것이 좋을 수 있습니다.",
                "보호자: 요금과 예약하기 쉬운지도 비교한 뒤 결정하고 싶습니다.",
                "시청 직원: 좋습니다. 무리해서 하나만 고르지 않고 필요에 따라 여러 서비스를 나누어 이용하는 방법도 있습니다."
            ],

            vi: [
                "Phụ huynh: Tôi đã được giới thiệu một số dịch vụ nhưng đang phân vân không biết nên sử dụng dịch vụ nào.",
                "Nhân viên thành phố: Vậy chúng ta hãy sắp xếp xem hiện tại điều gì khiến bạn khó khăn nhất và bạn mong muốn loại hỗ trợ nào.",
                "Phụ huynh: Tôi hầu như không có thời gian ở một mình và cảm thấy mình cần một chút thời gian để nghỉ ngơi.",
                "Nhân viên thành phố: Nếu vậy, có lẽ bạn nên kiểm tra điều kiện sử dụng các dịch vụ như giữ trẻ tạm thời.",
                "Phụ huynh: Tôi muốn so sánh cả chi phí và mức độ dễ đặt chỗ rồi mới quyết định.",
                "Nhân viên thành phố: Tốt. Bạn không cần phải cố chọn chỉ một dịch vụ mà có thể sử dụng nhiều dịch vụ khác nhau tùy nhu cầu."
            ]
        }
    )

];