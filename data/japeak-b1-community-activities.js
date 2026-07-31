// =====================================================
// Japeak B1 Level
// Scene: 住民として地域の活動に参加しよう
// File: data/japeak-b1-community-activities.js
// Category Key: b1_community_activities
// =====================================================

const b1CommunityActivitiesLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1CommunityActivitiesTranslations(translations) {
    const completed = {};

    b1CommunityActivitiesLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1CommunityActivitiesContext = {
    ja: "自治会、地域清掃、お祭り、防災訓練、高齢者の見守り、子ども向けイベント、外国人住民の地域参加、地域会議など、住民として地域の活動に参加するための日本語を練習します。",

    en: "Practice Japanese for participating in community activities as a local resident, including neighborhood associations, community cleanups, festivals, disaster drills, support for elderly residents, children's events, participation by foreign residents, and community meetings.",

    "zh-CN": "练习作为居民参加社区活动时使用的日语，包括自治会、社区清扫、节日活动、防灾训练、老年人守望活动、儿童活动、外国居民的社区参与以及社区会议。",

    "zh-TW": "練習作為居民參加社區活動時使用的日語，包括自治會、社區清掃、節慶活動、防災訓練、高齡者關懷活動、兒童活動、外國居民的社區參與以及社區會議。",

    ko: "자치회, 지역 청소, 축제, 방재 훈련, 고령자 돌봄, 어린이 행사, 외국인 주민의 지역 참여, 지역 회의 등 주민으로서 지역 활동에 참여하기 위한 일본어를 연습합니다.",

    vi: "Luyện tiếng Nhật để tham gia các hoạt động cộng đồng với tư cách cư dân địa phương, bao gồm hội khu phố, dọn vệ sinh khu vực, lễ hội, diễn tập phòng chống thiên tai, hỗ trợ người cao tuổi, sự kiện cho trẻ em, sự tham gia của người nước ngoài và các cuộc họp cộng đồng.",

    tl: "Practice Japanese for participating in community activities such as neighborhood associations, cleanups, festivals, disaster drills, support for elderly residents, children's events, foreign resident participation, and community meetings.",

    id: "Latihan bahasa Jepang untuk berpartisipasi dalam kegiatan masyarakat sebagai warga, termasuk perkumpulan lingkungan, kegiatan bersih-bersih, festival, latihan bencana, dukungan bagi lansia, acara anak-anak, partisipasi warga asing, dan rapat masyarakat.",

    th: "ฝึกภาษาญี่ปุ่นเพื่อเข้าร่วมกิจกรรมของชุมชนในฐานะผู้อยู่อาศัย เช่น สมาคมชุมชน การทำความสะอาดพื้นที่ งานเทศกาล การฝึกซ้อมภัยพิบัติ การดูแลผู้สูงอายุ กิจกรรมสำหรับเด็ก การมีส่วนร่วมของชาวต่างชาติ และการประชุมชุมชน",

    my: "ရပ်ကွက်အသင်း၊ ရပ်ရွာသန့်ရှင်းရေး၊ ပွဲတော်များ၊ ဘေးအန္တရာယ်လေ့ကျင့်မှု၊ သက်ကြီးရွယ်အိုများကို စောင့်ရှောက်ကူညီခြင်း၊ ကလေးများအတွက်ပွဲများ၊ နိုင်ငံခြားသားနေထိုင်သူများ၏ ရပ်ရွာပါဝင်မှုနှင့် ရပ်ရွာအစည်းအဝေးများအပါအဝင် ဒေသခံတစ်ဦးအဖြစ် ရပ်ရွာလှုပ်ရှားမှုများတွင် ပါဝင်ရန် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់ចូលរួមសកម្មភាពសហគមន៍ក្នុងនាមជាអ្នករស់នៅ រួមមានសមាគមអ្នកជិតខាង ការសម្អាតសហគមន៍ ពិធីបុណ្យ ការហ្វឹកហាត់ការពារគ្រោះមហន្តរាយ ការគាំទ្រមនុស្សចាស់ កម្មវិធីកុមារ ការចូលរួមរបស់ជនបរទេស និងកិច្ចប្រជុំសហគមន៍។",

    ne: "टोल संस्था, सामुदायिक सरसफाइ, चाडपर्व, विपद् अभ्यास, वृद्धवृद्धाको हेरचाह, बालबालिकाका कार्यक्रम, विदेशी बासिन्दाको सहभागिता र सामुदायिक बैठकहरूमा स्थानीय बासिन्दाको रूपमा भाग लिन जापानी अभ्यास।",

    mn: "Хөршийн холбоо, орчны цэвэрлэгээ, баяр наадам, гамшгийн дадлага, ахмад настнуудад дэмжлэг үзүүлэх, хүүхдийн арга хэмжээ, гадаадын оршин суугчдын оролцоо, орон нутгийн уулзалт зэрэгт оршин суугчийн хувиар оролцох япон хэлний дадлага.",

    si: "අසල්වැසි සංගම්, ප්‍රජා පිරිසිදු කිරීම, උත්සව, ආපදා පුහුණු, වැඩිහිටියන්ට සහාය, ළමා වැඩසටහන්, විදේශික පදිංචිකරුවන්ගේ සහභාගීත්වය සහ ප්‍රජා රැස්වීම් ඇතුළුව ප්‍රජා ක්‍රියාකාරකම්වල පදිංචිකරුවෙකු ලෙස සහභාගී වීමට ජපන් භාෂා පුහුණුව.",

    bn: "পাড়া সমিতি, কমিউনিটি পরিষ্কার-পরিচ্ছন্নতা, উৎসব, দুর্যোগ মহড়া, প্রবীণদের সহায়তা, শিশুদের অনুষ্ঠান, বিদেশি বাসিন্দাদের অংশগ্রহণ এবং কমিউনিটি সভাসহ স্থানীয় বাসিন্দা হিসেবে কমিউনিটি কার্যক্রমে অংশ নেওয়ার জন্য জাপানি অনুশীলন।",

    pt: "Prática de japonês para participar de atividades comunitárias como morador, incluindo associação de bairro, limpeza comunitária, festivais, simulados de desastre, apoio a idosos, eventos infantis, participação de residentes estrangeiros e reuniões comunitárias.",

    es: "Práctica de japonés para participar en actividades comunitarias como residente, incluyendo asociaciones vecinales, limpieza comunitaria, festivales, simulacros de desastre, apoyo a personas mayores, eventos infantiles, participación de residentes extranjeros y reuniones comunitarias.",

    fr: "Entraînement en japonais pour participer aux activités de la communauté en tant que résident, notamment les associations de quartier, le nettoyage communautaire, les festivals, les exercices de prévention des catastrophes, l'aide aux personnes âgées, les événements pour enfants, la participation des résidents étrangers et les réunions communautaires.",

    ru: "Практика японского языка для участия в общественной жизни в качестве местного жителя, включая соседские ассоциации, уборку района, фестивали, учения по чрезвычайным ситуациям, помощь пожилым людям, детские мероприятия, участие иностранных жителей и общественные собрания.",

    uk: "Практика японської мови для участі в житті громади як місцевого мешканця, включаючи сусідські асоціації, прибирання району, фестивалі, навчання з надзвичайних ситуацій, підтримку літніх людей, дитячі заходи, участь іноземних мешканців і громадські збори."
};

const b1CommunityActivitiesSpeakerNames = {

    resident: {
        ja: "住民",
        en: "Resident",
        "zh-CN": "居民",
        "zh-TW": "居民",
        ko: "주민",
        vi: "Cư dân",
        tl: "Resident",
        id: "Warga",
        th: "ผู้อยู่อาศัย",
        my: "နေထိုင်သူ",
        km: "អ្នករស់នៅ",
        ne: "बासिन्दा",
        mn: "Оршин суугч",
        si: "පදිංචිකරු",
        bn: "বাসিন্দা",
        pt: "Morador",
        es: "Residente",
        fr: "Résident",
        ru: "Житель",
        uk: "Мешканець"
    },

    associationMember: {
        ja: "自治会役員",
        en: "Neighborhood Association Member",
        "zh-CN": "自治会负责人",
        "zh-TW": "自治會幹部",
        ko: "자치회 임원",
        vi: "Thành viên hội khu phố",
        tl: "Neighborhood association member",
        id: "Pengurus lingkungan",
        th: "กรรมการชุมชน",
        my: "ရပ်ကွက်အသင်းတာဝန်ရှိသူ",
        km: "សមាជិកគណៈកម្មការសហគមន៍",
        ne: "टोल समिति सदस्य",
        mn: "Хөршийн холбооны гишүүн",
        si: "ප්‍රජා සංගම් සාමාජිකයා",
        bn: "পাড়া সমিতির সদস্য",
        pt: "Membro da associação de bairro",
        es: "Miembro de la asociación vecinal",
        fr: "Membre de l'association de quartier",
        ru: "Член соседской ассоциации",
        uk: "Член сусідської асоціації"
    },

    neighbor: {
        ja: "近所の人",
        en: "Neighbor",
        "zh-CN": "邻居",
        "zh-TW": "鄰居",
        ko: "이웃",
        vi: "Hàng xóm",
        tl: "Neighbor",
        id: "Tetangga",
        th: "เพื่อนบ้าน",
        my: "အိမ်နီးချင်း",
        km: "អ្នកជិតខាង",
        ne: "छिमेकी",
        mn: "Хөрш",
        si: "අසල්වැසියා",
        bn: "প্রতিবেশী",
        pt: "Vizinho",
        es: "Vecino",
        fr: "Voisin",
        ru: "Сосед",
        uk: "Сусід"
    },

    organizer: {
        ja: "担当者",
        en: "Organizer",
        "zh-CN": "负责人",
        "zh-TW": "負責人",
        ko: "담당자",
        vi: "Người phụ trách",
        tl: "Organizer",
        id: "Penanggung jawab",
        th: "ผู้รับผิดชอบ",
        my: "တာဝန်ခံ",
        km: "អ្នកទទួលបន្ទុក",
        ne: "जिम्मेवार व्यक्ति",
        mn: "Хариуцсан ажилтан",
        si: "භාරකරු",
        bn: "দায়িত্বপ্রাপ্ত ব্যক্তি",
        pt: "Responsável",
        es: "Responsable",
        fr: "Responsable",
        ru: "Организатор",
        uk: "Організатор"
    },

    volunteer: {
        ja: "ボランティア",
        en: "Volunteer",
        "zh-CN": "志愿者",
        "zh-TW": "志工",
        ko: "자원봉사자",
        vi: "Tình nguyện viên",
        tl: "Volunteer",
        id: "Relawan",
        th: "อาสาสมัคร",
        my: "စေတနာ့ဝန်ထမ်း",
        km: "អ្នកស្ម័គ្រចិត្ត",
        ne: "स्वयंसेवक",
        mn: "Сайн дурын ажилтан",
        si: "ස්වේච්ඡා සේවකයා",
        bn: "স্বেচ্ছাসেবক",
        pt: "Voluntário",
        es: "Voluntario",
        fr: "Bénévole",
        ru: "Волонтёр",
        uk: "Волонтер"
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
    }
};

function makeB1CommunityActivitiesDialogue(id, title, dialogue, dialogueTranslations) {

    const fullDialogueTranslations =
        completeB1CommunityActivitiesTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_community_activities",

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
                b1CommunityActivitiesSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1CommunityActivitiesContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1CommunityActivitiesData = [

    // =====================================================
    // 001 自治会について聞いてみる
    // =====================================================

    makeB1CommunityActivitiesDialogue(
        "b1_community_001",
        "自治会について聞いてみる",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "最近この地域に引っ越してきたのですが、自治会について教えていただけますか。",
                target: "さいきんこのちいきにひっこしてきたのですが じちかいについておしえていただけますか",
                ruby: "<ruby>最近<rt>さいきん</rt></ruby>この<ruby>地域<rt>ちいき</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>してきたのですが、<ruby>自治会<rt>じちかい</rt></ruby>について<ruby>教<rt>おし</rt></ruby>えていただけますか。",
                romaji: "Saikin kono chiiki ni hikkoshite kita no desu ga, jichikai ni tsuite oshiete itadakemasu ka."
            },
            {
                label: "話者A",
                key: "associationMember",
                name: "自治会役員",
                line: "はい。地域の清掃や防災訓練、お祭りなど、さまざまな活動をしています。",
                target: "はい ちいきのせいそうやぼうさいくんれん おまつりなど さまざまなかつどうをしています",
                ruby: "はい。<ruby>地域<rt>ちいき</rt></ruby>の<ruby>清掃<rt>せいそう</rt></ruby>や<ruby>防災訓練<rt>ぼうさいくんれん</rt></ruby>、お<ruby>祭<rt>まつ</rt></ruby>りなど、さまざまな<ruby>活動<rt>かつどう</rt></ruby>をしています。",
                romaji: "Hai. Chiiki no seisō ya bōsai kunren, omatsuri nado, samazama na katsudō o shite imasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "必ずすべての活動に参加しなければならないのでしょうか。",
                target: "かならずすべてのかつどうにさんかしなければならないのでしょうか",
                ruby: "<ruby>必<rt>かなら</rt></ruby>ずすべての<ruby>活動<rt>かつどう</rt></ruby>に<ruby>参加<rt>さんか</rt></ruby>しなければならないのでしょうか。",
                romaji: "Kanarazu subete no katsudō ni sanka shinakereba naranai no deshō ka."
            },
            {
                label: "話者A",
                key: "associationMember",
                name: "自治会役員",
                line: "いいえ。仕事や家庭の都合もありますので、参加できる活動から始めてください。",
                target: "いいえ しごとやかていのつごうもありますので さんかできるかつどうからはじめてください",
                ruby: "いいえ。<ruby>仕事<rt>しごと</rt></ruby>や<ruby>家庭<rt>かてい</rt></ruby>の<ruby>都合<rt>つごう</rt></ruby>もありますので、<ruby>参加<rt>さんか</rt></ruby>できる<ruby>活動<rt>かつどう</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>めてください。",
                romaji: "Iie. Shigoto ya katei no tsugō mo arimasu node, sanka dekiru katsudō kara hajimete kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "それなら安心しました。まず、次の活動について詳しく知りたいです。",
                target: "それならあんしんしました まず つぎのかつどうについてくわしくしりたいです",
                ruby: "それなら<ruby>安心<rt>あんしん</rt></ruby>しました。まず、<ruby>次<rt>つぎ</rt></ruby>の<ruby>活動<rt>かつどう</rt></ruby>について<ruby>詳<rt>くわ</rt></ruby>しく<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Sore nara anshin shimashita. Mazu, tsugi no katsudō ni tsuite kuwashiku shiritai desu."
            },
            {
                label: "話者A",
                key: "associationMember",
                name: "自治会役員",
                line: "来週の日曜日に地域清掃がありますので、よければそこから参加してみてください。",
                target: "らいしゅうのにちようびにちいきせいそうがありますので よければそこからさんかしてみてください",
                ruby: "<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>日曜日<rt>にちようび</rt></ruby>に<ruby>地域清掃<rt>ちいきせいそう</rt></ruby>がありますので、よければそこから<ruby>参加<rt>さんか</rt></ruby>してみてください。",
                romaji: "Raishū no nichiyōbi ni chiiki seisō ga arimasu node, yokereba soko kara sanka shite mite kudasai."
            }
        ],

        {
            ja: [
                "住民：最近この地域に引っ越してきたのですが、自治会について教えていただけますか。",
                "自治会役員：はい。地域の清掃や防災訓練、お祭りなど、さまざまな活動をしています。",
                "住民：必ずすべての活動に参加しなければならないのでしょうか。",
                "自治会役員：いいえ。仕事や家庭の都合もありますので、参加できる活動から始めてください。",
                "住民：それなら安心しました。まず、次の活動について詳しく知りたいです。",
                "自治会役員：来週の日曜日に地域清掃がありますので、よければそこから参加してみてください。"
            ],

            en: [
                "Resident: I recently moved to this area. Could you tell me about the neighborhood association?",
                "Neighborhood Association Member: Yes. We organize various activities such as community cleanups, disaster drills, and festivals.",
                "Resident: Do I have to participate in every activity?",
                "Neighborhood Association Member: No. Everyone has work and family responsibilities, so please start with activities you can join.",
                "Resident: That is a relief. First, I would like to know more about the next activity.",
                "Neighborhood Association Member: We have a community cleanup next Sunday, so you could start by joining that."
            ],

            "zh-CN": [
                "居民：我最近搬到这个地区，可以告诉我有关自治会的事情吗？",
                "自治会负责人：可以。我们开展社区清扫、防灾训练和节日等各种活动。",
                "居民：必须参加所有活动吗？",
                "自治会负责人：不需要。每个人都有工作和家庭上的安排，请从能够参加的活动开始。",
                "居民：那我就放心了。首先，我想详细了解下一次活动。",
                "自治会负责人：下周日有社区清扫活动，可以从那里开始参加。"
            ],

            "zh-TW": [
                "居民：我最近搬到這個地區，可以告訴我有關自治會的事情嗎？",
                "自治會幹部：可以。我們舉辦社區清掃、防災訓練和節慶等各種活動。",
                "居民：必須參加所有活動嗎？",
                "自治會幹部：不需要。每個人都有工作和家庭上的安排，請從能夠參加的活動開始。",
                "居民：那我就放心了。首先，我想詳細了解下一次活動。",
                "自治會幹部：下週日有社區清掃活動，可以從那裡開始參加。"
            ],

            ko: [
                "주민: 최근 이 지역으로 이사 왔는데 자치회에 대해 알려 주실 수 있나요?",
                "자치회 임원: 네. 지역 청소, 방재 훈련, 축제 등 다양한 활동을 하고 있습니다.",
                "주민: 반드시 모든 활동에 참여해야 하나요?",
                "자치회 임원: 아닙니다. 일이나 가정 사정도 있으므로 참여할 수 있는 활동부터 시작해 주세요.",
                "주민: 그렇다면 안심이 됩니다. 우선 다음 활동에 대해 자세히 알고 싶습니다.",
                "자치회 임원: 다음 주 일요일에 지역 청소가 있으니 괜찮으시면 거기부터 참여해 보세요."
            ],

            vi: [
                "Cư dân: Gần đây tôi mới chuyển đến khu vực này. Bạn có thể cho tôi biết về hội khu phố không?",
                "Thành viên hội khu phố: Có. Chúng tôi tổ chức nhiều hoạt động như dọn vệ sinh khu vực, diễn tập phòng chống thiên tai và lễ hội.",
                "Cư dân: Tôi có phải tham gia tất cả các hoạt động không?",
                "Thành viên hội khu phố: Không. Mọi người đều có công việc và việc gia đình, nên hãy bắt đầu từ những hoạt động bạn có thể tham gia.",
                "Cư dân: Vậy thì tôi yên tâm rồi. Trước tiên, tôi muốn biết thêm về hoạt động tiếp theo.",
                "Thành viên hội khu phố: Chủ nhật tuần sau có hoạt động dọn vệ sinh khu vực, bạn có thể bắt đầu bằng việc tham gia hoạt động đó."
            ]
        }
    ),

    // =====================================================
    // 002 地域清掃に参加する
    // =====================================================

    makeB1CommunityActivitiesDialogue(
        "b1_community_002",
        "地域清掃に参加する",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "今日初めて地域清掃に参加するのですが、何をすればいいですか。",
                target: "きょうはじめてちいきせいそうにさんかするのですが なにをすればいいですか",
                ruby: "<ruby>今日<rt>きょう</rt></ruby><ruby>初<rt>はじ</rt></ruby>めて<ruby>地域清掃<rt>ちいきせいそう</rt></ruby>に<ruby>参加<rt>さんか</rt></ruby>するのですが、<ruby>何<rt>なに</rt></ruby>をすればいいですか。",
                romaji: "Kyō hajimete chiiki seisō ni sanka suru no desu ga, nani o sureba ii desu ka."
            },
            {
                label: "話者A",
                key: "organizer",
                name: "担当者",
                line: "ありがとうございます。この道のごみを拾いながら、公園まで進んでください。",
                target: "ありがとうございます このみちのごみをひろいながら こうえんまですすんでください",
                ruby: "ありがとうございます。この<ruby>道<rt>みち</rt></ruby>のごみを<ruby>拾<rt>ひろ</rt></ruby>いながら、<ruby>公園<rt>こうえん</rt></ruby>まで<ruby>進<rt>すす</rt></ruby>んでください。",
                romaji: "Arigatō gozaimasu. Kono michi no gomi o hiroinagara, kōen made susunde kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "燃えるごみと缶やびんは、分けて集めた方がいいですか。",
                target: "もえるごみとかんやびんは わけてあつめたほうがいいですか",
                ruby: "<ruby>燃<rt>も</rt></ruby>えるごみと<ruby>缶<rt>かん</rt></ruby>やびんは、<ruby>分<rt>わ</rt></ruby>けて<ruby>集<rt>あつ</rt></ruby>めた<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Moeru gomi to kan ya bin wa, wakete atsumeta hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "organizer",
                name: "担当者",
                line: "はい。袋が分かれていますので、ごみの種類を確認して入れてください。",
                target: "はい ふくろがわかれていますので ごみのしゅるいをかくにんしていれてください",
                ruby: "はい。<ruby>袋<rt>ふくろ</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かれていますので、ごみの<ruby>種類<rt>しゅるい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>して<ruby>入<rt>い</rt></ruby>れてください。",
                romaji: "Hai. Fukuro ga wakarete imasu node, gomi no shurui o kakunin shite irete kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "危険な物を見つけた場合は、自分で拾わない方がいいですね。",
                target: "きけんなものをみつけたばあいは じぶんでひろわないほうがいいですね",
                ruby: "<ruby>危険<rt>きけん</rt></ruby>な<ruby>物<rt>もの</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけた<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>自分<rt>じぶん</rt></ruby>で<ruby>拾<rt>ひろ</rt></ruby>わない<ruby>方<rt>ほう</rt></ruby>がいいですね。",
                romaji: "Kiken na mono o mitsuketa baai wa, jibun de hirowanai hō ga ii desu ne."
            },
            {
                label: "話者A",
                key: "organizer",
                name: "担当者",
                line: "その通りです。ガラスの破片などを見つけたら、近くの担当者に知らせてください。",
                target: "そのとおりです がらすのはへんなどをみつけたら ちかくのたんとうしゃにしらせてください",
                ruby: "その<ruby>通<rt>とお</rt></ruby>りです。ガラスの<ruby>破片<rt>はへん</rt></ruby>などを<ruby>見<rt>み</rt></ruby>つけたら、<ruby>近<rt>ちか</rt></ruby>くの<ruby>担当者<rt>たんとうしゃ</rt></ruby>に<ruby>知<rt>し</rt></ruby>らせてください。",
                romaji: "Sono tōri desu. Garasu no hahen nado o mitsuketara, chikaku no tantōsha ni shirasete kudasai."
            }
        ],

        {
            ja: [
                "住民：今日初めて地域清掃に参加するのですが、何をすればいいですか。",
                "担当者：ありがとうございます。この道のごみを拾いながら、公園まで進んでください。",
                "住民：燃えるごみと缶やびんは、分けて集めた方がいいですか。",
                "担当者：はい。袋が分かれていますので、ごみの種類を確認して入れてください。",
                "住民：危険な物を見つけた場合は、自分で拾わない方がいいですね。",
                "担当者：その通りです。ガラスの破片などを見つけたら、近くの担当者に知らせてください。"
            ],

            en: [
                "Resident: This is my first time joining the community cleanup. What should I do?",
                "Organizer: Thank you for joining. Please pick up litter along this road as you move toward the park.",
                "Resident: Should I separate burnable waste from cans and bottles?",
                "Organizer: Yes. We have separate bags, so please check the type of waste before putting it in.",
                "Resident: If I find something dangerous, I should not pick it up by myself, right?",
                "Organizer: Exactly. If you find broken glass or something similar, please inform a nearby organizer."
            ],

            "zh-CN": [
                "居民：今天是我第一次参加社区清扫，我应该做什么？",
                "负责人：谢谢您的参加。请一边捡这条路上的垃圾，一边走到公园。",
                "居民：可燃垃圾和罐子、瓶子应该分类收集吗？",
                "负责人：是的。袋子是分开的，请确认垃圾种类后再放进去。",
                "居民：如果发现危险物品，最好不要自己捡，对吧？",
                "负责人：对。如果发现玻璃碎片等，请告诉附近的负责人。"
            ],

            "zh-TW": [
                "居民：今天是我第一次參加社區清掃，我應該做什麼？",
                "負責人：謝謝您的參加。請一邊撿這條路上的垃圾，一邊走到公園。",
                "居民：可燃垃圾和罐子、瓶子應該分類收集嗎？",
                "負責人：是的。袋子是分開的，請確認垃圾種類後再放進去。",
                "居民：如果發現危險物品，最好不要自己撿，對吧？",
                "負責人：對。如果發現玻璃碎片等，請告訴附近的負責人。"
            ],

            ko: [
                "주민: 오늘 처음 지역 청소에 참여하는데 무엇을 하면 되나요?",
                "담당자: 참여해 주셔서 감사합니다. 이 길의 쓰레기를 주우면서 공원까지 가 주세요.",
                "주민: 타는 쓰레기와 캔이나 병은 나누어 모으는 편이 좋나요?",
                "담당자: 네. 봉투가 나뉘어 있으니 쓰레기 종류를 확인해서 넣어 주세요.",
                "주민: 위험한 물건을 발견한 경우에는 제가 직접 줍지 않는 편이 좋겠네요.",
                "담당자: 맞습니다. 유리 조각 등을 발견하면 가까운 담당자에게 알려 주세요."
            ],

            vi: [
                "Cư dân: Hôm nay là lần đầu tôi tham gia dọn vệ sinh khu vực. Tôi nên làm gì?",
                "Người phụ trách: Cảm ơn bạn đã tham gia. Hãy vừa nhặt rác trên con đường này vừa đi đến công viên.",
                "Cư dân: Rác cháy được và lon, chai có nên thu gom riêng không?",
                "Người phụ trách: Có. Túi đã được phân loại, nên hãy kiểm tra loại rác trước khi bỏ vào.",
                "Cư dân: Nếu tìm thấy vật nguy hiểm, tôi không nên tự nhặt đúng không?",
                "Người phụ trách: Đúng vậy. Nếu thấy mảnh kính hoặc vật tương tự, hãy báo cho người phụ trách gần đó."
            ]
        }
    ),

    // =====================================================
    // 003 地域のお祭りを手伝う
    // =====================================================

    makeB1CommunityActivitiesDialogue(
        "b1_community_003",
        "地域のお祭りを手伝う",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "来月のお祭りでボランティアを募集していると聞きました。",
                target: "らいげつのおまつりでぼらんてぃあをぼしゅうしているとききました",
                ruby: "<ruby>来月<rt>らいげつ</rt></ruby>のお<ruby>祭<rt>まつ</rt></ruby>りでボランティアを<ruby>募集<rt>ぼしゅう</rt></ruby>していると<ruby>聞<rt>き</rt></ruby>きました。",
                romaji: "Raigetsu no omatsuri de borantia o boshū shite iru to kikimashita."
            },
            {
                label: "話者A",
                key: "organizer",
                name: "担当者",
                line: "はい。会場の準備や受付、片付けなどを手伝ってくださる方を募集しています。",
                target: "はい かいじょうのじゅんびやうけつけ かたづけなどをてつだってくださるかたをぼしゅうしています",
                ruby: "はい。<ruby>会場<rt>かいじょう</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>や<ruby>受付<rt>うけつけ</rt></ruby>、<ruby>片付<rt>かたづ</rt></ruby>けなどを<ruby>手伝<rt>てつだ</rt></ruby>ってくださる<ruby>方<rt>かた</rt></ruby>を<ruby>募集<rt>ぼしゅう</rt></ruby>しています。",
                romaji: "Hai. Kaijō no junbi ya uketsuke, katazuke nado o tetsudatte kudasaru kata o boshū shite imasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "日本語にまだ自信がないのですが、それでも参加できますか。",
                target: "にほんごにまだじしんがないのですが それでもさんかできますか",
                ruby: "<ruby>日本語<rt>にほんご</rt></ruby>にまだ<ruby>自信<rt>じしん</rt></ruby>がないのですが、それでも<ruby>参加<rt>さんか</rt></ruby>できますか。",
                romaji: "Nihongo ni mada jishin ga nai no desu ga, sore demo sanka dekimasu ka."
            },
            {
                label: "話者A",
                key: "organizer",
                name: "担当者",
                line: "もちろんです。仕事内容を説明しますので、できそうな担当を一緒に決めましょう。",
                target: "もちろんです しごとないようをせつめいしますので できそうなたんとうをいっしょにきめましょう",
                ruby: "もちろんです。<ruby>仕事内容<rt>しごとないよう</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>しますので、できそうな<ruby>担当<rt>たんとう</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>決<rt>き</rt></ruby>めましょう。",
                romaji: "Mochiron desu. Shigoto naiyō o setsumei shimasu node, dekisō na tantō o issho ni kimemashō."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "人と話す練習もしたいので、受付をやってみたいです。",
                target: "ひととはなすれんしゅうもしたいので うけつけをやってみたいです",
                ruby: "<ruby>人<rt>ひと</rt></ruby>と<ruby>話<rt>はな</rt></ruby>す<ruby>練習<rt>れんしゅう</rt></ruby>もしたいので、<ruby>受付<rt>うけつけ</rt></ruby>をやってみたいです。",
                romaji: "Hito to hanasu renshū mo shitai node, uketsuke o yatte mitai desu."
            },
            {
                label: "話者A",
                key: "organizer",
                name: "担当者",
                line: "いいですね。当日はほかのスタッフも一緒にいますので、困ったときはすぐに聞いてください。",
                target: "いいですね とうじつはほかのすたっふもいっしょにいますので こまったときはすぐにきいてください",
                ruby: "いいですね。<ruby>当日<rt>とうじつ</rt></ruby>はほかのスタッフも<ruby>一緒<rt>いっしょ</rt></ruby>にいますので、<ruby>困<rt>こま</rt></ruby>ったときはすぐに<ruby>聞<rt>き</rt></ruby>いてください。",
                romaji: "Ii desu ne. Tōjitsu wa hoka no sutaffu mo issho ni imasu node, komatta toki wa sugu ni kiite kudasai."
            }
        ],

        {
            ja: [
                "住民：来月のお祭りでボランティアを募集していると聞きました。",
                "担当者：はい。会場の準備や受付、片付けなどを手伝ってくださる方を募集しています。",
                "住民：日本語にまだ自信がないのですが、それでも参加できますか。",
                "担当者：もちろんです。仕事内容を説明しますので、できそうな担当を一緒に決めましょう。",
                "住民：人と話す練習もしたいので、受付をやってみたいです。",
                "担当者：いいですね。当日はほかのスタッフも一緒にいますので、困ったときはすぐに聞いてください。"
            ],

            en: [
                "Resident: I heard that volunteers are being recruited for next month's festival.",
                "Organizer: Yes. We are looking for people to help with preparing the venue, reception, cleanup, and other tasks.",
                "Resident: I am still not confident in my Japanese. Can I still participate?",
                "Organizer: Of course. We will explain the tasks and decide together which role you feel comfortable doing.",
                "Resident: I also want to practice talking with people, so I would like to try working at reception.",
                "Organizer: That sounds good. Other staff members will be there too, so please ask immediately if you have any trouble."
            ],

            "zh-CN": [
                "居民：我听说下个月的节日活动正在招募志愿者。",
                "负责人：是的。我们正在招募帮助准备会场、接待和收拾整理的人。",
                "居民：我对自己的日语还没有信心，这样也能参加吗？",
                "负责人：当然可以。我们会说明工作内容，然后一起决定您适合负责什么。",
                "居民：我也想练习和别人说话，所以想试试接待工作。",
                "负责人：很好。当天还有其他工作人员，如果遇到困难请马上询问。"
            ],

            "zh-TW": [
                "居民：我聽說下個月的節慶活動正在招募志工。",
                "負責人：是的。我們正在招募協助準備會場、接待和整理的人。",
                "居民：我對自己的日語還沒有信心，這樣也能參加嗎？",
                "負責人：當然可以。我們會說明工作內容，然後一起決定您適合負責什麼。",
                "居民：我也想練習和別人說話，所以想試試接待工作。",
                "負責人：很好。當天還有其他工作人員，如果遇到困難請馬上詢問。"
            ],

            ko: [
                "주민: 다음 달 축제에서 자원봉사자를 모집하고 있다고 들었습니다.",
                "담당자: 네. 행사장 준비, 접수, 정리 등을 도와주실 분을 모집하고 있습니다.",
                "주민: 아직 일본어에 자신이 없는데 그래도 참여할 수 있나요?",
                "담당자: 물론입니다. 업무 내용을 설명해 드릴 테니 할 수 있을 것 같은 역할을 함께 정합시다.",
                "주민: 사람들과 이야기하는 연습도 하고 싶어서 접수를 해 보고 싶습니다.",
                "담당자: 좋습니다. 당일에는 다른 직원도 함께 있으니 곤란할 때는 바로 물어보세요."
            ],

            vi: [
                "Cư dân: Tôi nghe nói lễ hội tháng sau đang tuyển tình nguyện viên.",
                "Người phụ trách: Đúng vậy. Chúng tôi đang tìm người hỗ trợ chuẩn bị địa điểm, tiếp đón, dọn dẹp và các công việc khác.",
                "Cư dân: Tôi vẫn chưa tự tin về tiếng Nhật. Tôi vẫn có thể tham gia không?",
                "Người phụ trách: Tất nhiên. Chúng tôi sẽ giải thích công việc và cùng bạn quyết định nhiệm vụ phù hợp.",
                "Cư dân: Tôi cũng muốn luyện nói chuyện với mọi người, nên muốn thử làm ở quầy tiếp đón.",
                "Người phụ trách: Tốt đấy. Hôm đó cũng có các nhân viên khác, nên nếu gặp khó khăn hãy hỏi ngay."
            ]
        }
    ),

    // =====================================================
    // 004 防災訓練に参加する
    // =====================================================

    makeB1CommunityActivitiesDialogue(
        "b1_community_004",
        "防災訓練に参加する",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "今度の防災訓練には、どのような内容が予定されていますか。",
                target: "こんどのぼうさいくんれんには どのようなないようがよていされていますか",
                ruby: "<ruby>今度<rt>こんど</rt></ruby>の<ruby>防災訓練<rt>ぼうさいくんれん</rt></ruby>には、どのような<ruby>内容<rt>ないよう</rt></ruby>が<ruby>予定<rt>よてい</rt></ruby>されていますか。",
                romaji: "Kondo no bōsai kunren ni wa, dono yō na naiyō ga yotei sarete imasu ka."
            },
            {
                label: "話者A",
                key: "associationMember",
                name: "自治会役員",
                line: "避難場所までの移動や消火器の使い方、応急手当などを体験する予定です。",
                target: "ひなんばしょまでのいどうやしょうかきのつかいかた おうきゅうてあてなどをたいけんするよていです",
                ruby: "<ruby>避難場所<rt>ひなんばしょ</rt></ruby>までの<ruby>移動<rt>いどう</rt></ruby>や<ruby>消火器<rt>しょうかき</rt></ruby>の<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>、<ruby>応急手当<rt>おうきゅうてあて</rt></ruby>などを<ruby>体験<rt>たいけん</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>です。",
                romaji: "Hinan basho made no idō ya shōkaki no tsukaikata, ōkyū teate nado o taiken suru yotei desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "子どもと一緒に参加しても大丈夫でしょうか。",
                target: "こどもといっしょにさんかしてもだいじょうぶでしょうか",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもと<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>参加<rt>さんか</rt></ruby>しても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>でしょうか。",
                romaji: "Kodomo to issho ni sanka shite mo daijōbu deshō ka."
            },
            {
                label: "話者A",
                key: "associationMember",
                name: "自治会役員",
                line: "はい。家族で参加すると、災害時の行動について一緒に確認できます。",
                target: "はい かぞくでさんかすると さいがいじのこうどうについていっしょにかくにんできます",
                ruby: "はい。<ruby>家族<rt>かぞく</rt></ruby>で<ruby>参加<rt>さんか</rt></ruby>すると、<ruby>災害時<rt>さいがいじ</rt></ruby>の<ruby>行動<rt>こうどう</rt></ruby>について<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>できます。",
                romaji: "Hai. Kazoku de sanka suru to, saigaiji no kōdō ni tsuite issho ni kakunin dekimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "普段から知っておけば、実際の災害でも少し落ち着いて行動できそうですね。",
                target: "ふだんからしっておけば じっさいのさいがいでもすこしおちついてこうどうできそうですね",
                ruby: "<ruby>普段<rt>ふだん</rt></ruby>から<ruby>知<rt>し</rt></ruby>っておけば、<ruby>実際<rt>じっさい</rt></ruby>の<ruby>災害<rt>さいがい</rt></ruby>でも<ruby>少<rt>すこ</rt></ruby>し<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて<ruby>行動<rt>こうどう</rt></ruby>できそうですね。",
                romaji: "Fudan kara shitte okeba, jissai no saigai demo sukoshi ochitsuite kōdō dekisō desu ne."
            },
            {
                label: "話者A",
                key: "associationMember",
                name: "自治会役員",
                line: "そうですね。それに、地域の人と顔を合わせておくことも、いざというときに役立ちます。",
                target: "そうですね それに ちいきのひととかおをあわせておくことも いざというときにやくだちます",
                ruby: "そうですね。それに、<ruby>地域<rt>ちいき</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>顔<rt>かお</rt></ruby>を<ruby>合<rt>あ</rt></ruby>わせておくことも、いざというときに<ruby>役立<rt>やくだ</rt></ruby>ちます。",
                romaji: "Sō desu ne. Sore ni, chiiki no hito to kao o awasete oku koto mo, iza to iu toki ni yakudachimasu."
            }
        ],

        {
            ja: [
                "住民：今度の防災訓練には、どのような内容が予定されていますか。",
                "自治会役員：避難場所までの移動や消火器の使い方、応急手当などを体験する予定です。",
                "住民：子どもと一緒に参加しても大丈夫でしょうか。",
                "自治会役員：はい。家族で参加すると、災害時の行動について一緒に確認できます。",
                "住民：普段から知っておけば、実際の災害でも少し落ち着いて行動できそうですね。",
                "自治会役員：そうですね。それに、地域の人と顔を合わせておくことも、いざというときに役立ちます。"
            ],

            en: [
                "Resident: What activities are planned for the upcoming disaster drill?",
                "Neighborhood Association Member: We plan to practice moving to an evacuation site, using a fire extinguisher, giving first aid, and other activities.",
                "Resident: Is it okay to participate with my child?",
                "Neighborhood Association Member: Yes. Participating as a family allows you to review together what to do during a disaster.",
                "Resident: If we learn these things in advance, we may be able to act more calmly during a real disaster.",
                "Neighborhood Association Member: Exactly. Also, knowing people in your community can be useful in an emergency."
            ],

            "zh-CN": [
                "居民：这次防灾训练计划有哪些内容？",
                "自治会负责人：计划体验前往避难场所、使用灭火器、急救等活动。",
                "居民：可以带孩子一起参加吗？",
                "自治会负责人：可以。全家一起参加，可以共同确认灾害发生时应该如何行动。",
                "居民：如果平时就了解这些，实际发生灾害时也许能更冷静地行动。",
                "自治会负责人：是的。而且，平时认识社区里的人，在紧急时刻也会有帮助。"
            ],

            "zh-TW": [
                "居民：這次防災訓練計畫有哪些內容？",
                "自治會幹部：計畫體驗前往避難場所、使用滅火器、急救等活動。",
                "居民：可以帶孩子一起參加嗎？",
                "自治會幹部：可以。全家一起參加，可以共同確認災害發生時應該如何行動。",
                "居民：如果平時就了解這些，實際發生災害時也許能更冷靜地行動。",
                "自治會幹部：是的。而且，平時認識社區裡的人，在緊急時刻也會有幫助。"
            ],

            ko: [
                "주민: 이번 방재 훈련에는 어떤 내용이 예정되어 있나요?",
                "자치회 임원: 대피 장소까지 이동하기, 소화기 사용법, 응급 처치 등을 체험할 예정입니다.",
                "주민: 아이와 함께 참여해도 괜찮을까요?",
                "자치회 임원: 네. 가족이 함께 참여하면 재해 시 행동에 대해 함께 확인할 수 있습니다.",
                "주민: 평소에 알아 두면 실제 재해 때도 조금 더 침착하게 행동할 수 있을 것 같네요.",
                "자치회 임원: 그렇습니다. 그리고 지역 사람들과 미리 얼굴을 익혀 두는 것도 비상시에 도움이 됩니다."
            ],

            vi: [
                "Cư dân: Buổi diễn tập phòng chống thiên tai sắp tới dự kiến có những nội dung gì?",
                "Thành viên hội khu phố: Dự kiến sẽ thực hành di chuyển đến nơi sơ tán, sử dụng bình chữa cháy, sơ cứu và các hoạt động khác.",
                "Cư dân: Tôi có thể tham gia cùng con không?",
                "Thành viên hội khu phố: Có. Khi cả gia đình tham gia, mọi người có thể cùng xác nhận cách hành động khi có thiên tai.",
                "Cư dân: Nếu biết trước những điều này, khi có thiên tai thật chúng ta có thể hành động bình tĩnh hơn.",
                "Thành viên hội khu phố: Đúng vậy. Ngoài ra, quen biết những người trong khu vực từ trước cũng có ích khi có tình huống khẩn cấp."
            ]
        }
    ),

    // =====================================================
    // 005 高齢者の見守り活動について聞く
    // =====================================================

    makeB1CommunityActivitiesDialogue(
        "b1_community_005",
        "高齢者の見守り活動について聞く",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "地域で高齢者の見守り活動をしていると聞いたのですが、どのような活動ですか。",
                target: "ちいきでこうれいしゃのみまもりかつどうをしているときいたのですが どのようなかつどうですか",
                ruby: "<ruby>地域<rt>ちいき</rt></ruby>で<ruby>高齢者<rt>こうれいしゃ</rt></ruby>の<ruby>見守<rt>みまも</rt></ruby>り<ruby>活動<rt>かつどう</rt></ruby>をしていると<ruby>聞<rt>き</rt></ruby>いたのですが、どのような<ruby>活動<rt>かつどう</rt></ruby>ですか。",
                romaji: "Chiiki de kōreisha no mimamori katsudō o shite iru to kiita no desu ga, dono yō na katsudō desu ka."
            },
            {
                label: "話者A",
                key: "volunteer",
                name: "ボランティア",
                line: "普段の生活の中で声をかけたり、困っている様子がないか気にかけたりする活動です。",
                target: "ふだんのせいかつのなかでこえをかけたり こまっているようすがないかきにかけたりするかつどうです",
                ruby: "<ruby>普段<rt>ふだん</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>声<rt>こえ</rt></ruby>をかけたり、<ruby>困<rt>こま</rt></ruby>っている<ruby>様子<rt>ようす</rt></ruby>がないか<ruby>気<rt>き</rt></ruby>にかけたりする<ruby>活動<rt>かつどう</rt></ruby>です。",
                romaji: "Fudan no seikatsu no naka de koe o kaketari, komatte iru yōsu ga nai ka ki ni kaketari suru katsudō desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "特別な資格がなくても参加することができますか。",
                target: "とくべつなしかくがなくてもさんかすることができますか",
                ruby: "<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>資格<rt>しかく</rt></ruby>がなくても<ruby>参加<rt>さんか</rt></ruby>することができますか。",
                romaji: "Tokubetsu na shikaku ga nakute mo sanka suru koto ga dekimasu ka."
            },
            {
                label: "話者A",
                key: "volunteer",
                name: "ボランティア",
                line: "はい。ただし、無理に個人の生活へ入らず、必要な場合は専門の窓口につなぐことが大切です。",
                target: "はい ただし むりにこじんのせいかつへはいらず ひつようなばあいはせんもんのまどぐちにつなぐことがたいせつです",
                ruby: "はい。ただし、<ruby>無理<rt>むり</rt></ruby>に<ruby>個人<rt>こじん</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>へ<ruby>入<rt>はい</rt></ruby>らず、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>は<ruby>専門<rt>せんもん</rt></ruby>の<ruby>窓口<rt>まどぐち</rt></ruby>につなぐことが<ruby>大切<rt>たいせつ</rt></ruby>です。",
                romaji: "Hai. Tadashi, muri ni kojin no seikatsu e hairazu, hitsuyō na baai wa senmon no madoguchi ni tsunagu koto ga taisetsu desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "助けようとしすぎず、できる範囲で気にかけるということですね。",
                target: "たすけようとしすぎず できるはんいできにかけるということですね",
                ruby: "<ruby>助<rt>たす</rt></ruby>けようとしすぎず、できる<ruby>範囲<rt>はんい</rt></ruby>で<ruby>気<rt>き</rt></ruby>にかけるということですね。",
                romaji: "Tasuke yō to shisugizu, dekiru han'i de ki ni kakeru to iu koto desu ne."
            },
            {
                label: "話者A",
                key: "volunteer",
                name: "ボランティア",
                line: "そうです。普段からあいさつを交わすだけでも、地域のつながりを作る第一歩になります。",
                target: "そうです ふだんからあいさつをかわすだけでも ちいきのつながりをつくるだいいっぽになります",
                ruby: "そうです。<ruby>普段<rt>ふだん</rt></ruby>からあいさつを<ruby>交<rt>か</rt></ruby>わすだけでも、<ruby>地域<rt>ちいき</rt></ruby>のつながりを<ruby>作<rt>つく</rt></ruby>る<ruby>第一歩<rt>だいいっぽ</rt></ruby>になります。",
                romaji: "Sō desu. Fudan kara aisatsu o kawasu dake demo, chiiki no tsunagari o tsukuru daiippo ni narimasu."
            }
        ],

        {
            ja: [
                "住民：地域で高齢者の見守り活動をしていると聞いたのですが、どのような活動ですか。",
                "ボランティア：普段の生活の中で声をかけたり、困っている様子がないか気にかけたりする活動です。",
                "住民：特別な資格がなくても参加することができますか。",
                "ボランティア：はい。ただし、無理に個人の生活へ入らず、必要な場合は専門の窓口につなぐことが大切です。",
                "住民：助けようとしすぎず、できる範囲で気にかけるということですね。",
                "ボランティア：そうです。普段からあいさつを交わすだけでも、地域のつながりを作る第一歩になります。"
            ],

            en: [
                "Resident: I heard that there is a community activity to look out for elderly residents. What kind of activity is it?",
                "Volunteer: It involves greeting people in everyday life and paying attention to whether someone seems to be having difficulty.",
                "Resident: Can I participate even without special qualifications?",
                "Volunteer: Yes. However, it is important not to enter someone's private life unnecessarily and to connect them with professional services when needed.",
                "Resident: So rather than trying to do too much, we should care about people within what we can reasonably do.",
                "Volunteer: Exactly. Even simply exchanging greetings regularly can be the first step toward building community connections."
            ],

            "zh-CN": [
                "居民：听说社区里有老年人守望活动，这是什么样的活动？",
                "志愿者：是在日常生活中主动打招呼，关心他们是否有困难的活动。",
                "居民：没有特别的资格也能参加吗？",
                "志愿者：可以。不过不要勉强进入个人生活，如果有需要，应联系专业窗口。",
                "居民：也就是说，不要过度帮助，而是在自己能力范围内关心他们。",
                "志愿者：对。即使平时只是互相打招呼，也是建立社区联系的第一步。"
            ],

            "zh-TW": [
                "居民：聽說社區裡有高齡者關懷活動，這是什麼樣的活動？",
                "志工：是在日常生活中主動打招呼，關心他們是否有困難的活動。",
                "居民：沒有特別的資格也能參加嗎？",
                "志工：可以。不過不要勉強進入個人生活，如果有需要，應聯絡專業窗口。",
                "居民：也就是說，不要過度幫助，而是在自己能力範圍內關心他們。",
                "志工：對。即使平時只是互相打招呼，也是建立社區聯繫的第一步。"
            ],

            ko: [
                "주민: 지역에서 고령자 돌봄 활동을 하고 있다고 들었는데 어떤 활동인가요?",
                "자원봉사자: 평소 생활 속에서 말을 걸거나 어려움을 겪는 모습이 없는지 관심을 갖는 활동입니다.",
                "주민: 특별한 자격이 없어도 참여할 수 있나요?",
                "자원봉사자: 네. 다만 개인 생활에 무리하게 들어가지 않고 필요할 경우 전문 기관에 연결하는 것이 중요합니다.",
                "주민: 너무 많이 도우려고 하기보다 할 수 있는 범위에서 관심을 갖는다는 뜻이군요.",
                "자원봉사자: 그렇습니다. 평소에 인사를 나누는 것만으로도 지역 관계를 만드는 첫걸음이 됩니다."
            ],

            vi: [
                "Cư dân: Tôi nghe nói trong khu vực có hoạt động quan tâm đến người cao tuổi. Đó là hoạt động như thế nào?",
                "Tình nguyện viên: Đó là việc chào hỏi trong cuộc sống hằng ngày và chú ý xem họ có gặp khó khăn hay không.",
                "Cư dân: Không có bằng cấp đặc biệt thì vẫn tham gia được không?",
                "Tình nguyện viên: Có. Tuy nhiên, không nên can thiệp quá sâu vào đời sống riêng tư và khi cần thì nên kết nối họ với nơi tư vấn chuyên môn.",
                "Cư dân: Nghĩa là không cố giúp quá mức mà quan tâm trong phạm vi mình có thể làm.",
                "Tình nguyện viên: Đúng vậy. Chỉ cần thường xuyên chào hỏi nhau cũng là bước đầu xây dựng mối liên kết trong cộng đồng."
            ]
        }
    ),

    // =====================================================
    // 006 子ども向けイベントを手伝う
    // =====================================================

    makeB1CommunityActivitiesDialogue(
        "b1_community_006",
        "子ども向けイベントを手伝う",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "地域の子ども向けイベントを手伝ってみたいのですが、まだ募集していますか。",
                target: "ちいきのこどもむけいべんとをてつだってみたいのですが まだぼしゅうしていますか",
                ruby: "<ruby>地域<rt>ちいき</rt></ruby>の<ruby>子<rt>こ</rt></ruby>ども<ruby>向<rt>む</rt></ruby>けイベントを<ruby>手伝<rt>てつだ</rt></ruby>ってみたいのですが、まだ<ruby>募集<rt>ぼしゅう</rt></ruby>していますか。",
                romaji: "Chiiki no kodomo-muke ibento o tetsudatte mitai no desu ga, mada boshū shite imasu ka."
            },
            {
                label: "話者A",
                key: "organizer",
                name: "担当者",
                line: "はい。遊びのコーナーや受付、会場の案内を手伝ってくださる方を探しています。",
                target: "はい あそびのこーなーやうけつけ かいじょうのあんないをてつだってくださるかたをさがしています",
                ruby: "はい。<ruby>遊<rt>あそ</rt></ruby>びのコーナーや<ruby>受付<rt>うけつけ</rt></ruby>、<ruby>会場<rt>かいじょう</rt></ruby>の<ruby>案内<rt>あんない</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>ってくださる<ruby>方<rt>かた</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しています。",
                romaji: "Hai. Asobi no kōnā ya uketsuke, kaijō no annai o tetsudatte kudasaru kata o sagashite imasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "子どもと接する経験があまりないので、少し不安です。",
                target: "こどもとせっするけいけんがあまりないので すこしふあんです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもと<ruby>接<rt>せっ</rt></ruby>する<ruby>経験<rt>けいけん</rt></ruby>があまりないので、<ruby>少<rt>すこ</rt></ruby>し<ruby>不安<rt>ふあん</rt></ruby>です。",
                romaji: "Kodomo to sessuru keiken ga amari nai node, sukoshi fuan desu."
            },
            {
                label: "話者A",
                key: "organizer",
                name: "担当者",
                line: "最初に仕事内容を説明しますし、経験のあるスタッフと一緒に担当できます。",
                target: "さいしょにしごとないようをせつめいしますし けいけんのあるすたっふといっしょにたんとうできます",
                ruby: "<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>仕事内容<rt>しごとないよう</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>しますし、<ruby>経験<rt>けいけん</rt></ruby>のあるスタッフと<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>担当<rt>たんとう</rt></ruby>できます。",
                romaji: "Saisho ni shigoto naiyō o setsumei shimasu shi, keiken no aru sutaffu to issho ni tantō dekimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "それなら、子どもたちの遊びを手伝う係に挑戦してみたいです。",
                target: "それなら こどもたちのあそびをてつだうかかりにちょうせんしてみたいです",
                ruby: "それなら、<ruby>子<rt>こ</rt></ruby>どもたちの<ruby>遊<rt>あそ</rt></ruby>びを<ruby>手伝<rt>てつだ</rt></ruby>う<ruby>係<rt>かかり</rt></ruby>に<ruby>挑戦<rt>ちょうせん</rt></ruby>してみたいです。",
                romaji: "Sore nara, kodomotachi no asobi o tetsudau kakari ni chōsen shite mitai desu."
            },
            {
                label: "話者A",
                key: "organizer",
                name: "担当者",
                line: "ありがとうございます。安全に気をつけながら、一緒に楽しいイベントを作りましょう。",
                target: "ありがとうございます あんぜんにきをつけながら いっしょにたのしいいべんとをつくりましょう",
                ruby: "ありがとうございます。<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつけながら、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しいイベントを<ruby>作<rt>つく</rt></ruby>りましょう。",
                romaji: "Arigatō gozaimasu. Anzen ni ki o tsukenagara, issho ni tanoshii ibento o tsukurimashō."
            }
        ],

        {
            ja: [
                "住民：地域の子ども向けイベントを手伝ってみたいのですが、まだ募集していますか。",
                "担当者：はい。遊びのコーナーや受付、会場の案内を手伝ってくださる方を探しています。",
                "住民：子どもと接する経験があまりないので、少し不安です。",
                "担当者：最初に仕事内容を説明しますし、経験のあるスタッフと一緒に担当できます。",
                "住民：それなら、子どもたちの遊びを手伝う係に挑戦してみたいです。",
                "担当者：ありがとうございます。安全に気をつけながら、一緒に楽しいイベントを作りましょう。"
            ],

            en: [
                "Resident: I would like to help with the community event for children. Are you still looking for volunteers?",
                "Organizer: Yes. We are looking for people to help with activity booths, reception, and guiding visitors around the venue.",
                "Resident: I do not have much experience working with children, so I feel a little nervous.",
                "Organizer: We will explain the tasks first, and you can work together with an experienced staff member.",
                "Resident: In that case, I would like to try helping with the children's activities.",
                "Organizer: Thank you. Let us create an enjoyable event together while paying attention to safety."
            ],

            "zh-CN": [
                "居民：我想帮助社区的儿童活动，现在还在招募吗？",
                "负责人：是的。我们正在寻找帮助游戏区、接待和会场引导的人。",
                "居民：我没有太多和孩子接触的经验，所以有点不安。",
                "负责人：我们会先说明工作内容，而且可以和有经验的工作人员一起负责。",
                "居民：那样的话，我想挑战一下帮助孩子们游戏的工作。",
                "负责人：谢谢。让我们一边注意安全，一边一起办一个开心的活动吧。"
            ],

            "zh-TW": [
                "居民：我想幫助社區的兒童活動，現在還在招募嗎？",
                "負責人：是的。我們正在尋找協助遊戲區、接待和會場引導的人。",
                "居民：我沒有太多和孩子接觸的經驗，所以有點不安。",
                "負責人：我們會先說明工作內容，而且可以和有經驗的工作人員一起負責。",
                "居民：那樣的話，我想挑戰一下幫助孩子們遊戲的工作。",
                "負責人：謝謝。讓我們一邊注意安全，一邊一起辦一個開心的活動吧。"
            ],

            ko: [
                "주민: 지역 어린이 행사를 도와보고 싶은데 아직 모집하고 있나요?",
                "담당자: 네. 놀이 코너, 접수, 행사장 안내를 도와주실 분을 찾고 있습니다.",
                "주민: 아이들과 접한 경험이 별로 없어서 조금 불안합니다.",
                "담당자: 처음에 업무 내용을 설명해 드리고 경험 있는 직원과 함께 담당할 수 있습니다.",
                "주민: 그렇다면 아이들의 놀이를 돕는 역할에 도전해 보고 싶습니다.",
                "담당자: 감사합니다. 안전에 주의하면서 함께 즐거운 행사를 만들어 봅시다."
            ],

            vi: [
                "Cư dân: Tôi muốn giúp sự kiện dành cho trẻ em trong khu vực. Hiện vẫn còn tuyển người không?",
                "Người phụ trách: Có. Chúng tôi đang tìm người hỗ trợ khu trò chơi, tiếp đón và hướng dẫn trong địa điểm.",
                "Cư dân: Tôi không có nhiều kinh nghiệm tiếp xúc với trẻ em nên hơi lo.",
                "Người phụ trách: Chúng tôi sẽ giải thích công việc trước và bạn có thể làm cùng nhân viên có kinh nghiệm.",
                "Cư dân: Vậy thì tôi muốn thử nhiệm vụ hỗ trợ trẻ em vui chơi.",
                "Người phụ trách: Cảm ơn bạn. Hãy cùng tạo nên một sự kiện vui vẻ và luôn chú ý đến an toàn."
            ]
        }
    ),

    // =====================================================
    // 007 外国人住民として地域活動に参加する
    // =====================================================

    makeB1CommunityActivitiesDialogue(
        "b1_community_007",
        "外国人住民として地域活動に参加する",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "地域の活動に参加したいのですが、日本語が難しくて内容を理解できないことがあります。",
                target: "ちいきのかつどうにさんかしたいのですが にほんごがむずかしくてないようをりかいできないことがあります",
                ruby: "<ruby>地域<rt>ちいき</rt></ruby>の<ruby>活動<rt>かつどう</rt></ruby>に<ruby>参加<rt>さんか</rt></ruby>したいのですが、<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>難<rt>むずか</rt></ruby>しくて<ruby>内容<rt>ないよう</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>できないことがあります。",
                romaji: "Chiiki no katsudō ni sanka shitai no desu ga, Nihongo ga muzukashikute naiyō o rikai dekinai koto ga arimasu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "どのような情報が特にわかりにくいと感じますか。",
                target: "どのようなじょうほうがとくにわかりにくいとかんじますか",
                ruby: "どのような<ruby>情報<rt>じょうほう</rt></ruby>が<ruby>特<rt>とく</rt></ruby>にわかりにくいと<ruby>感<rt>かん</rt></ruby>じますか。",
                romaji: "Dono yō na jōhō ga toku ni wakarinikui to kanjimasu ka."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "回覧板には知らない言葉が多くて、日時や集合場所を間違えそうになります。",
                target: "かいらんばんにはしらないことばがおおくて にちじやしゅうごうばしょをまちがえそうになります",
                ruby: "<ruby>回覧板<rt>かいらんばん</rt></ruby>には<ruby>知<rt>し</rt></ruby>らない<ruby>言葉<rt>ことば</rt></ruby>が<ruby>多<rt>おお</rt></ruby>くて、<ruby>日時<rt>にちじ</rt></ruby>や<ruby>集合場所<rt>しゅうごうばしょ</rt></ruby>を<ruby>間違<rt>まちが</rt></ruby>えそうになります。",
                romaji: "Kairanban ni wa shiranai kotoba ga ōkute, nichiji ya shūgō basho o machigaesō ni narimasu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "それは改善が必要ですね。やさしい日本語や多言語で案内できる方法を考えてみます。",
                target: "それはかいぜんがひつようですね やさしいにほんごやたげんごであんないできるほうほうをかんがえてみます",
                ruby: "それは<ruby>改善<rt>かいぜん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>ですね。やさしい<ruby>日本語<rt>にほんご</rt></ruby>や<ruby>多言語<rt>たげんご</rt></ruby>で<ruby>案内<rt>あんない</rt></ruby>できる<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えてみます。",
                romaji: "Sore wa kaizen ga hitsuyō desu ne. Yasashii Nihongo ya tagengo de annai dekiru hōhō o kangaete mimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "ありがとうございます。外国人も情報を受け取るだけでなく、活動を手伝えると思います。",
                target: "ありがとうございます がいこくじんもじょうほうをうけとるだけでなく かつどうをてつだえるとおもいます",
                ruby: "ありがとうございます。<ruby>外国人<rt>がいこくじん</rt></ruby>も<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>るだけでなく、<ruby>活動<rt>かつどう</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>えると<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Arigatō gozaimasu. Gaikokujin mo jōhō o uketoru dake de naku, katsudō o tetsudaeru to omoimasu."
            },
            {
                label: "話者A",
                key: "cityStaff",
                name: "市職員",
                line: "その通りです。さまざまな住民が参加できる地域を、一緒に作っていくことが大切ですね。",
                target: "そのとおりです さまざまなじゅうみんがさんかできるちいきを いっしょにつくっていくことがたいせつですね",
                ruby: "その<ruby>通<rt>とお</rt></ruby>りです。さまざまな<ruby>住民<rt>じゅうみん</rt></ruby>が<ruby>参加<rt>さんか</rt></ruby>できる<ruby>地域<rt>ちいき</rt></ruby>を、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>作<rt>つく</rt></ruby>っていくことが<ruby>大切<rt>たいせつ</rt></ruby>ですね。",
                romaji: "Sono tōri desu. Samazama na jūmin ga sanka dekiru chiiki o, issho ni tsukutte iku koto ga taisetsu desu ne."
            }
        ],

        {
            ja: [
                "住民：地域の活動に参加したいのですが、日本語が難しくて内容を理解できないことがあります。",
                "市職員：どのような情報が特にわかりにくいと感じますか。",
                "住民：回覧板には知らない言葉が多くて、日時や集合場所を間違えそうになります。",
                "市職員：それは改善が必要ですね。やさしい日本語や多言語で案内できる方法を考えてみます。",
                "住民：ありがとうございます。外国人も情報を受け取るだけでなく、活動を手伝えると思います。",
                "市職員：その通りです。さまざまな住民が参加できる地域を、一緒に作っていくことが大切ですね。"
            ],

            en: [
                "Resident: I want to participate in community activities, but sometimes the Japanese is difficult and I cannot understand the information.",
                "City Official: What kind of information do you find especially difficult to understand?",
                "Resident: Community notices contain many words I do not know, so I worry that I might misunderstand the date, time, or meeting place.",
                "City Official: That needs improvement. We will consider ways to provide information in easy Japanese and multiple languages.",
                "Resident: Thank you. I think foreign residents can do more than just receive information; we can also help with community activities.",
                "City Official: Exactly. It is important for us to work together to create a community where many different residents can participate."
            ],

            "zh-CN": [
                "居民：我想参加社区活动，但有时日语很难，我无法理解内容。",
                "市政府工作人员：您觉得哪些信息特别难懂？",
                "居民：社区传阅通知中有很多我不认识的词，所以我担心会弄错日期、时间或集合地点。",
                "市政府工作人员：这一点确实需要改善。我们会考虑使用简明日语和多语言提供信息的方法。",
                "居民：谢谢。我认为外国居民不仅可以接收信息，也可以帮助社区活动。",
                "市政府工作人员：正是如此。大家一起建设一个各种居民都能参与的社区很重要。"
            ],

            "zh-TW": [
                "居民：我想參加社區活動，但有時日語很難，我無法理解內容。",
                "市政府工作人員：您覺得哪些資訊特別難懂？",
                "居民：社區傳閱通知中有很多我不認識的詞，所以我擔心會弄錯日期、時間或集合地點。",
                "市政府工作人員：這一點確實需要改善。我們會考慮使用簡明日語和多語言提供資訊的方法。",
                "居民：謝謝。我認為外國居民不僅可以接收資訊，也可以幫助社區活動。",
                "市政府工作人員：正是如此。大家一起建設一個各種居民都能參與的社區很重要。"
            ],

            ko: [
                "주민: 지역 활동에 참여하고 싶지만 일본어가 어려워서 내용을 이해하지 못할 때가 있습니다.",
                "시청 직원: 어떤 정보가 특히 이해하기 어렵다고 느끼나요?",
                "주민: 회람판에는 모르는 단어가 많아서 날짜나 시간, 집합 장소를 잘못 이해할 것 같습니다.",
                "시청 직원: 그 점은 개선이 필요하네요. 쉬운 일본어와 여러 언어로 안내할 수 있는 방법을 생각해 보겠습니다.",
                "주민: 감사합니다. 외국인도 정보를 받기만 하는 것이 아니라 활동을 도울 수 있다고 생각합니다.",
                "시청 직원: 맞습니다. 다양한 주민이 참여할 수 있는 지역을 함께 만들어 가는 것이 중요하네요."
            ],

            vi: [
                "Cư dân: Tôi muốn tham gia hoạt động cộng đồng, nhưng đôi khi tiếng Nhật khó nên tôi không hiểu được nội dung.",
                "Nhân viên thành phố: Bạn cảm thấy loại thông tin nào đặc biệt khó hiểu?",
                "Cư dân: Bảng thông báo cộng đồng có nhiều từ tôi không biết nên tôi lo mình sẽ nhầm ngày, giờ hoặc nơi tập trung.",
                "Nhân viên thành phố: Điều đó cần được cải thiện. Chúng tôi sẽ nghĩ cách cung cấp thông tin bằng tiếng Nhật dễ hiểu và nhiều ngôn ngữ.",
                "Cư dân: Cảm ơn. Tôi nghĩ người nước ngoài không chỉ nhận thông tin mà còn có thể giúp đỡ các hoạt động cộng đồng.",
                "Nhân viên thành phố: Chính xác. Điều quan trọng là cùng nhau xây dựng một cộng đồng nơi nhiều cư dân khác nhau đều có thể tham gia."
            ]
        }
    ),

    // =====================================================
    // 008 地域会議で意見を伝える
    // =====================================================

    makeB1CommunityActivitiesDialogue(
        "b1_community_008",
        "地域会議で意見を伝える",

        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "地域会議に初めて参加するのですが、自分の意見を言ってもいいのでしょうか。",
                target: "ちいきかいぎにはじめてさんかするのですが じぶんのいけんをいってもいいのでしょうか",
                ruby: "<ruby>地域会議<rt>ちいきかいぎ</rt></ruby>に<ruby>初<rt>はじ</rt></ruby>めて<ruby>参加<rt>さんか</rt></ruby>するのですが、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>意見<rt>いけん</rt></ruby>を<ruby>言<rt>い</rt></ruby>ってもいいのでしょうか。",
                romaji: "Chiiki kaigi ni hajimete sanka suru no desu ga, jibun no iken o itte mo ii no deshō ka."
            },
            {
                label: "話者A",
                key: "associationMember",
                name: "自治会役員",
                line: "もちろんです。気になっていることや改善してほしいことがあれば、ぜひ話してください。",
                target: "もちろんです きになっていることやかいぜんしてほしいことがあれば ぜひはなしてください",
                ruby: "もちろんです。<ruby>気<rt>き</rt></ruby>になっていることや<ruby>改善<rt>かいぜん</rt></ruby>してほしいことがあれば、ぜひ<ruby>話<rt>はな</rt></ruby>してください。",
                romaji: "Mochiron desu. Ki ni natte iru koto ya kaizen shite hoshii koto ga areba, zehi hanashite kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "公園にごみが増えているので、何か対策が必要だと思っています。",
                target: "こうえんにごみがふえているので なにかたいさくがひつようだとおもっています",
                ruby: "<ruby>公園<rt>こうえん</rt></ruby>にごみが<ruby>増<rt>ふ</rt></ruby>えているので、<ruby>何<rt>なに</rt></ruby>か<ruby>対策<rt>たいさく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>っています。",
                romaji: "Kōen ni gomi ga fuete iru node, nanika taisaku ga hitsuyō da to omotte imasu."
            },
            {
                label: "話者A",
                key: "associationMember",
                name: "自治会役員",
                line: "なるほど。具体的には、どのような方法が考えられると思いますか。",
                target: "なるほど ぐたいてきには どのようなほうほうがかんがえられるとおもいますか",
                ruby: "なるほど。<ruby>具体的<rt>ぐたいてき</rt></ruby>には、どのような<ruby>方法<rt>ほうほう</rt></ruby>が<ruby>考<rt>かんが</rt></ruby>えられると<ruby>思<rt>おも</rt></ruby>いますか。",
                romaji: "Naruhodo. Gutaiteki ni wa, dono yō na hōhō ga kangaerareru to omoimasu ka."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "注意を呼びかけるだけでなく、住民と一緒に原因を考えることも必要だと思います。",
                target: "ちゅういをよびかけるだけでなく じゅうみんといっしょにげんいんをかんがえることもひつようだとおもいます",
                ruby: "<ruby>注意<rt>ちゅうい</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>びかけるだけでなく、<ruby>住民<rt>じゅうみん</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>原因<rt>げんいん</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えることも<ruby>必要<rt>ひつよう</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Chūi o yobikakeru dake de naku, jūmin to issho ni gen'in o kangaeru koto mo hitsuyō da to omoimasu."
            },
            {
                label: "話者A",
                key: "associationMember",
                name: "自治会役員",
                line: "いい意見ですね。次回の清掃活動のあとに、参加者から意見を聞く時間を作ってみましょう。",
                target: "いいいけんですね じかいのせいそうかつどうのあとに さんかしゃからいけんをきくじかんをつくってみましょう",
                ruby: "いい<ruby>意見<rt>いけん</rt></ruby>ですね。<ruby>次回<rt>じかい</rt></ruby>の<ruby>清掃活動<rt>せいそうかつどう</rt></ruby>のあとに、<ruby>参加者<rt>さんかしゃ</rt></ruby>から<ruby>意見<rt>いけん</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く<ruby>時間<rt>じかん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ってみましょう。",
                romaji: "Ii iken desu ne. Jikai no seisō katsudō no ato ni, sankasha kara iken o kiku jikan o tsukutte mimashō."
            }
        ],

        {
            ja: [
                "住民：地域会議に初めて参加するのですが、自分の意見を言ってもいいのでしょうか。",
                "自治会役員：もちろんです。気になっていることや改善してほしいことがあれば、ぜひ話してください。",
                "住民：公園にごみが増えているので、何か対策が必要だと思っています。",
                "自治会役員：なるほど。具体的には、どのような方法が考えられると思いますか。",
                "住民：注意を呼びかけるだけでなく、住民と一緒に原因を考えることも必要だと思います。",
                "自治会役員：いい意見ですね。次回の清掃活動のあとに、参加者から意見を聞く時間を作ってみましょう。"
            ],

            en: [
                "Resident: This is my first time attending a community meeting. Is it okay for me to express my opinion?",
                "Neighborhood Association Member: Of course. Please speak up if there is something that concerns you or something you would like to improve.",
                "Resident: There has been more litter in the park, so I think some action is necessary.",
                "Neighborhood Association Member: I see. Specifically, what kind of solution do you think could work?",
                "Resident: I think we need not only to warn people but also to think about the causes together with local residents.",
                "Neighborhood Association Member: That is a good idea. After the next cleanup activity, let us create some time to hear opinions from participants."
            ],

            "zh-CN": [
                "居民：这是我第一次参加社区会议，我可以表达自己的意见吗？",
                "自治会负责人：当然可以。如果有在意的事情或希望改善的地方，请一定说出来。",
                "居民：公园里的垃圾增加了，所以我认为需要采取一些措施。",
                "自治会负责人：原来如此。具体来说，您觉得可以采取什么方法？",
                "居民：我认为不仅要提醒注意，也需要和居民一起思考原因。",
                "自治会负责人：这是个好意见。下次清扫活动后，我们安排时间听取参加者的意见吧。"
            ],

            "zh-TW": [
                "居民：這是我第一次參加社區會議，我可以表達自己的意見嗎？",
                "自治會幹部：當然可以。如果有在意的事情或希望改善的地方，請一定說出來。",
                "居民：公園裡的垃圾增加了，所以我認為需要採取一些措施。",
                "自治會幹部：原來如此。具體來說，您覺得可以採取什麼方法？",
                "居民：我認為不僅要提醒注意，也需要和居民一起思考原因。",
                "自治會幹部：這是個好意見。下次清掃活動後，我們安排時間聽取參加者的意見吧。"
            ],

            ko: [
                "주민: 지역 회의에 처음 참여하는데 제 의견을 말해도 되나요?",
                "자치회 임원: 물론입니다. 신경 쓰이는 일이나 개선했으면 하는 일이 있다면 꼭 이야기해 주세요.",
                "주민: 공원에 쓰레기가 늘고 있어서 어떤 대책이 필요하다고 생각합니다.",
                "자치회 임원: 그렇군요. 구체적으로 어떤 방법을 생각할 수 있다고 보나요?",
                "주민: 주의를 주는 것뿐 아니라 주민과 함께 원인을 생각하는 것도 필요하다고 생각합니다.",
                "자치회 임원: 좋은 의견이네요. 다음 청소 활동 후에 참가자들의 의견을 듣는 시간을 만들어 봅시다."
            ],

            vi: [
                "Cư dân: Đây là lần đầu tôi tham gia cuộc họp cộng đồng. Tôi có thể nói ý kiến của mình không?",
                "Thành viên hội khu phố: Tất nhiên. Nếu có điều gì bạn quan tâm hoặc muốn cải thiện, hãy chia sẻ.",
                "Cư dân: Rác trong công viên đang tăng lên, nên tôi nghĩ cần có biện pháp.",
                "Thành viên hội khu phố: Tôi hiểu. Cụ thể, bạn nghĩ có thể áp dụng phương pháp nào?",
                "Cư dân: Tôi nghĩ không chỉ nhắc nhở mọi người mà còn cần cùng cư dân tìm hiểu nguyên nhân.",
                "Thành viên hội khu phố: Đó là một ý kiến hay. Sau buổi dọn vệ sinh tiếp theo, chúng ta hãy dành thời gian nghe ý kiến của những người tham gia."
            ]
        }
    )

];