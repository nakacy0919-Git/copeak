// =====================================================
// Japeak B1 Level
// Scene: 引っ越し先を探そう
// File: data/japeak-b1-find-home.js
// Category Key: b1_find_home
// =====================================================

const b1FindHomeLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1FindHomeTranslations(translations) {
    const completed = {};

    b1FindHomeLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });

    return completed;
}

const b1FindHomeContext = {
    ja: "不動産会社で希望する家の条件を伝えたり、家賃、初期費用、駅からの距離、設備、周辺環境、契約条件などを確認したりしながら、引っ越し先を探すための日本語を練習します。",

    en: "Practice Japanese for finding a new home by explaining your housing preferences and asking about rent, initial costs, distance from the station, facilities, the surrounding area, and rental conditions.",

    "zh-CN": "练习在房地产公司说明希望的住房条件，并询问房租、初期费用、距离车站的距离、设备、周边环境和租赁条件时使用的日语。",

    "zh-TW": "練習在房地產公司說明希望的住房條件，並詢問房租、初期費用、距離車站的距離、設備、周邊環境和租賃條件時使用的日語。",

    ko: "부동산 회사에서 원하는 집의 조건을 설명하고 월세, 초기 비용, 역과의 거리, 시설, 주변 환경, 계약 조건 등을 확인하면서 이사할 집을 찾는 일본어를 연습합니다.",

    vi: "Luyện tiếng Nhật để tìm nhà mới bằng cách trình bày điều kiện mong muốn và hỏi về tiền thuê, chi phí ban đầu, khoảng cách đến ga, trang thiết bị, môi trường xung quanh và điều kiện hợp đồng.",

    tl: "Practice Japanese for finding a new home by discussing housing preferences, rent, initial costs, distance from the station, facilities, neighborhood conditions, and rental requirements.",

    id: "Latihan bahasa Jepang untuk mencari tempat tinggal baru dengan menyampaikan kondisi rumah yang diinginkan dan menanyakan sewa, biaya awal, jarak dari stasiun, fasilitas, lingkungan sekitar, dan persyaratan kontrak.",

    th: "ฝึกภาษาญี่ปุ่นสำหรับการหาที่อยู่ใหม่ โดยบอกเงื่อนไขของบ้านที่ต้องการ และถามเกี่ยวกับค่าเช่า ค่าใช้จ่ายเริ่มต้น ระยะทางจากสถานี สิ่งอำนวยความสะดวก สภาพแวดล้อมรอบบ้าน และเงื่อนไขสัญญา",

    my: "အိမ်ခြံမြေကုမ္ပဏီတွင် မိမိလိုချင်သော အိမ်၏အခြေအနေများကို ရှင်းပြပြီး အိမ်လခ၊ အစပိုင်းကုန်ကျစရိတ်၊ ဘူတာနှင့်အကွာအဝေး၊ အဆောက်အဦပစ္စည်းများ၊ ပတ်ဝန်းကျင်နှင့် စာချုပ်အခြေအနေများကို မေးမြန်းကာ အိမ်အသစ်ရှာဖွေရန် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",

    km: "ហាត់ភាសាជប៉ុនសម្រាប់ស្វែងរកទីលំនៅថ្មី ដោយពន្យល់លក្ខខណ្ឌផ្ទះដែលចង់បាន និងសួរអំពីថ្លៃជួល ថ្លៃដំបូង ចម្ងាយពីស្ថានីយ បរិក្ខារ បរិយាកាសជុំវិញ និងលក្ខខណ្ឌកិច្ចសន្យា។",

    ne: "आफूले चाहेको घरका सर्त बताउने र भाडा, सुरुको खर्च, स्टेशनको दूरी, सुविधा, वरपरको वातावरण र सम्झौताका सर्तबारे सोध्दै नयाँ घर खोज्न जापानी अभ्यास।",

    mn: "Үл хөдлөх хөрөнгийн компанид хүсэж буй байрны нөхцөлөө тайлбарлаж, түрээс, эхний зардал, өртөөнөөс зай, тоноглол, орчны нөхцөл, гэрээний шаардлагыг асууж шинэ байр хайх япон хэлний дадлага.",

    si: "නව නිවසක් සොයා ගැනීම සඳහා තමන්ට අවශ්‍ය නිවාස කොන්දේසි පැහැදිලි කිරීම සහ කුලිය, ආරම්භක වියදම්, දුම්රිය ස්ථානයට ඇති දුර, පහසුකම්, අවට පරිසරය සහ ගිවිසුම් කොන්දේසි ගැන විමසීමට ජපන් භාෂා පුහුණුව.",

    bn: "পছন্দের বাড়ির শর্ত জানানো এবং ভাড়া, প্রাথমিক খরচ, স্টেশন থেকে দূরত্ব, সুযোগ-সুবিধা, আশপাশের পরিবেশ ও চুক্তির শর্ত সম্পর্কে জিজ্ঞাসা করে নতুন বাসা খোঁজার জাপানি অনুশীলন।",

    pt: "Prática de japonês para procurar uma nova casa, explicando as preferências de moradia e perguntando sobre aluguel, custos iniciais, distância da estação, instalações, ambiente ao redor e condições do contrato.",

    es: "Práctica de japonés para buscar una nueva vivienda, explicando las preferencias y preguntando sobre alquiler, gastos iniciales, distancia desde la estación, instalaciones, entorno y condiciones del contrato.",

    fr: "Entraînement en japonais pour chercher un nouveau logement, expliquer ses préférences et demander des informations sur le loyer, les frais initiaux, la distance depuis la gare, les équipements, le quartier et les conditions du contrat.",

    ru: "Практика японского языка для поиска нового жилья: объяснение желаемых условий и вопросы об аренде, первоначальных расходах, расстоянии до станции, оборудовании, окружающем районе и условиях договора.",

    uk: "Практика японської мови для пошуку нового житла: пояснення бажаних умов і запитання про орендну плату, початкові витрати, відстань до станції, обладнання, район і умови договору."
};

const b1FindHomeSpeakerNames = {

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

    agent: {
        ja: "不動産会社の担当者",
        en: "Real Estate Agent",
        "zh-CN": "房地产公司工作人员",
        "zh-TW": "房地產公司工作人員",
        ko: "부동산 담당자",
        vi: "Nhân viên bất động sản",
        tl: "Real estate agent",
        id: "Agen properti",
        th: "เจ้าหน้าที่บริษัทอสังหาริมทรัพย์",
        my: "အိမ်ခြံမြေအကျိုးဆောင်",
        km: "ភ្នាក់ងារអចលនទ្រព្យ",
        ne: "घरजग्गा एजेन्ट",
        mn: "Үл хөдлөх хөрөнгийн ажилтан",
        si: "දේපළ නියෝජිතයා",
        bn: "রিয়েল এস্টেট এজেন্ট",
        pt: "Agente imobiliário",
        es: "Agente inmobiliario",
        fr: "Agent immobilier",
        ru: "Агент по недвижимости",
        uk: "Агент з нерухомості"
    },

    landlord: {
        ja: "大家",
        en: "Landlord",
        "zh-CN": "房东",
        "zh-TW": "房東",
        ko: "집주인",
        vi: "Chủ nhà",
        tl: "Landlord",
        id: "Pemilik rumah",
        th: "เจ้าของบ้าน",
        my: "အိမ်ရှင်",
        km: "ម្ចាស់ផ្ទះ",
        ne: "घरधनी",
        mn: "Байрны эзэн",
        si: "නිවාස හිමිකරු",
        bn: "বাড়িওয়ালা",
        pt: "Proprietário",
        es: "Propietario",
        fr: "Propriétaire",
        ru: "Арендодатель",
        uk: "Орендодавець"
    }
};

function makeB1FindHomeDialogue(id, title, dialogue, dialogueTranslations) {

    const fullDialogueTranslations =
        completeB1FindHomeTranslations(dialogueTranslations);

    const translations = {};

    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_find_home",

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
                b1FindHomeSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),

        context: b1FindHomeContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1FindHomeData = [

    // =====================================================
    // 001 希望する家の条件を伝える
    // =====================================================

    makeB1FindHomeDialogue(
        "b1_findhome_001",
        "希望する家の条件を伝える",

        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "来月引っ越す予定なので、条件に合う部屋を探しています。",
                target: "らいげつひっこすよていなので じょうけんにあうへやをさがしています",
                ruby: "<ruby>来月<rt>らいげつ</rt></ruby><ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>す<ruby>予定<rt>よてい</rt></ruby>なので、<ruby>条件<rt>じょうけん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>う<ruby>部屋<rt>へや</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しています。",
                romaji: "Raigetsu hikkosu yotei na node, jōken ni au heya o sagashite imasu."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "わかりました。家賃や広さなど、どのようなご希望がありますか。",
                target: "わかりました やちんやひろさなど どのようなごきぼうがありますか",
                ruby: "わかりました。<ruby>家賃<rt>やちん</rt></ruby>や<ruby>広<rt>ひろ</rt></ruby>さなど、どのようなご<ruby>希望<rt>きぼう</rt></ruby>がありますか。",
                romaji: "Wakarimashita. Yachin ya hirosa nado, dono yō na gokibō ga arimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "家賃は七万円以内で、できれば二部屋ある物件を希望しています。",
                target: "やちんはななまんえんいないで できればふたへやあるぶっけんをきぼうしています",
                ruby: "<ruby>家賃<rt>やちん</rt></ruby>は<ruby>七万円以内<rt>ななまんえんいない</rt></ruby>で、できれば<ruby>二部屋<rt>ふたへや</rt></ruby>ある<ruby>物件<rt>ぶっけん</rt></ruby>を<ruby>希望<rt>きぼう</rt></ruby>しています。",
                romaji: "Yachin wa nana man-en inai de, dekireba futaheya aru bukken o kibō shite imasu."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "駅からの距離や建物の新しさについては、何か希望がありますか。",
                target: "えきからのきょりやたてもののあたらしさについては なにかきぼうがありますか",
                ruby: "<ruby>駅<rt>えき</rt></ruby>からの<ruby>距離<rt>きょり</rt></ruby>や<ruby>建物<rt>たてもの</rt></ruby>の<ruby>新<rt>あたら</rt></ruby>しさについては、<ruby>何<rt>なに</rt></ruby>か<ruby>希望<rt>きぼう</rt></ruby>がありますか。",
                romaji: "Eki kara no kyori ya tatemono no atarashisa ni tsuite wa, nanika kibō ga arimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "駅から徒歩十五分以内なら、建物が少し古くても大丈夫です。",
                target: "えきからとほじゅうごふんいないなら たてものがすこしふるくてもだいじょうぶです",
                ruby: "<ruby>駅<rt>えき</rt></ruby>から<ruby>徒歩十五分以内<rt>とほじゅうごふんいない</rt></ruby>なら、<ruby>建物<rt>たてもの</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>し<ruby>古<rt>ふる</rt></ruby>くても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。",
                romaji: "Eki kara toho jūgofun inai nara, tatemono ga sukoshi furukute mo daijōbu desu."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "わかりました。その条件に近い物件をいくつか探してみます。",
                target: "わかりました そのじょうけんにちかいぶっけんをいくつかさがしてみます",
                ruby: "わかりました。その<ruby>条件<rt>じょうけん</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>い<ruby>物件<rt>ぶっけん</rt></ruby>をいくつか<ruby>探<rt>さが</rt></ruby>してみます。",
                romaji: "Wakarimashita. Sono jōken ni chikai bukken o ikutsuka sagashite mimasu."
            }
        ],

        {
            ja: [
                "利用者：来月引っ越す予定なので、条件に合う部屋を探しています。",
                "不動産会社の担当者：わかりました。家賃や広さなど、どのようなご希望がありますか。",
                "利用者：家賃は七万円以内で、できれば二部屋ある物件を希望しています。",
                "不動産会社の担当者：駅からの距離や建物の新しさについては、何か希望がありますか。",
                "利用者：駅から徒歩十五分以内なら、建物が少し古くても大丈夫です。",
                "不動産会社の担当者：わかりました。その条件に近い物件をいくつか探してみます。"
            ],

            en: [
                "Customer: I am planning to move next month, so I am looking for a room that meets my needs.",
                "Real Estate Agent: Understood. What preferences do you have regarding rent and size?",
                "Customer: I would like the rent to be no more than 70,000 yen, and preferably a place with two rooms.",
                "Real Estate Agent: Do you have any preferences regarding distance from the station or the age of the building?",
                "Customer: If it is within a fifteen-minute walk from the station, I do not mind if the building is a little old.",
                "Real Estate Agent: Understood. I will look for several properties close to those conditions."
            ],

            "zh-CN": [
                "顾客：我计划下个月搬家，所以正在寻找符合条件的房子。",
                "房地产公司工作人员：明白了。关于房租和面积，您有什么要求吗？",
                "顾客：希望房租在七万日元以内，如果可以的话，希望有两个房间。",
                "房地产公司工作人员：对于距离车站的远近和建筑的新旧，有什么要求吗？",
                "顾客：如果从车站步行十五分钟以内，建筑稍微旧一点也没关系。",
                "房地产公司工作人员：明白了。我来找几个接近这些条件的房源。"
            ],

            "zh-TW": [
                "顧客：我計畫下個月搬家，所以正在尋找符合條件的房子。",
                "房地產公司工作人員：明白了。關於房租和面積，您有什麼要求嗎？",
                "顧客：希望房租在七萬日圓以內，如果可以的話，希望有兩個房間。",
                "房地產公司工作人員：對於距離車站的遠近和建築的新舊，有什麼要求嗎？",
                "顧客：如果從車站步行十五分鐘以內，建築稍微舊一點也沒關係。",
                "房地產公司工作人員：明白了。我來找幾個接近這些條件的房源。"
            ],

            ko: [
                "이용자: 다음 달에 이사할 예정이라 조건에 맞는 방을 찾고 있습니다.",
                "부동산 담당자: 알겠습니다. 월세나 넓이 등에 어떤 희망 조건이 있나요?",
                "이용자: 월세는 7만 엔 이내이고 가능하면 방이 두 개 있는 집을 원합니다.",
                "부동산 담당자: 역과의 거리나 건물의 연식에 대해서는 희망 사항이 있나요?",
                "이용자: 역에서 도보 15분 이내라면 건물이 조금 오래되어도 괜찮습니다.",
                "부동산 담당자: 알겠습니다. 그 조건에 가까운 물건을 몇 개 찾아보겠습니다."
            ],

            vi: [
                "Khách hàng: Tôi dự định chuyển nhà vào tháng sau nên đang tìm phòng phù hợp với điều kiện của mình.",
                "Nhân viên bất động sản: Tôi hiểu rồi. Bạn có mong muốn gì về tiền thuê và diện tích không?",
                "Khách hàng: Tôi muốn tiền thuê không quá 70.000 yên và nếu có thể thì muốn nhà có hai phòng.",
                "Nhân viên bất động sản: Bạn có yêu cầu gì về khoảng cách từ ga hoặc độ mới của tòa nhà không?",
                "Khách hàng: Nếu trong vòng mười lăm phút đi bộ từ ga thì tòa nhà hơi cũ cũng không sao.",
                "Nhân viên bất động sản: Tôi hiểu rồi. Tôi sẽ tìm vài căn gần với những điều kiện đó."
            ]
        }
    ),

    // =====================================================
    // 002 家賃と初期費用を確認する
    // =====================================================

    makeB1FindHomeDialogue(
        "b1_findhome_002",
        "家賃と初期費用を確認する",

        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "この部屋は家賃が六万五千円と書いてありますが、ほかにも毎月かかる費用がありますか。",
                target: "このへやはやちんがろくまんごせんえんとかいてありますが ほかにもまいつきかかるひようがありますか",
                ruby: "この<ruby>部屋<rt>へや</rt></ruby>は<ruby>家賃<rt>やちん</rt></ruby>が<ruby>六万五千円<rt>ろくまんごせんえん</rt></ruby>と<ruby>書<rt>か</rt></ruby>いてありますが、ほかにも<ruby>毎月<rt>まいつき</rt></ruby>かかる<ruby>費用<rt>ひよう</rt></ruby>がありますか。",
                romaji: "Kono heya wa yachin ga roku man gosen-en to kaite arimasu ga, hoka ni mo maitsuki kakaru hiyō ga arimasu ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "はい。家賃のほかに、毎月五千円の管理費がかかります。",
                target: "はい やちんのほかに まいつきごせんえんのかんりひがかかります",
                ruby: "はい。<ruby>家賃<rt>やちん</rt></ruby>のほかに、<ruby>毎月五千円<rt>まいつきごせんえん</rt></ruby>の<ruby>管理費<rt>かんりひ</rt></ruby>がかかります。",
                romaji: "Hai. Yachin no hoka ni, maitsuki gosen-en no kanrihi ga kakarimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "契約するときには、全部でどのくらい必要でしょうか。",
                target: "けいやくするときには ぜんぶでどのくらいひつようでしょうか",
                ruby: "<ruby>契約<rt>けいやく</rt></ruby>するときには、<ruby>全部<rt>ぜんぶ</rt></ruby>でどのくらい<ruby>必要<rt>ひつよう</rt></ruby>でしょうか。",
                romaji: "Keiyaku suru toki ni wa, zenbu de dono kurai hitsuyō deshō ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "敷金や保険料などを含めて、二十五万円ほど必要になる予定です。",
                target: "しききんやほけんりょうなどをふくめて にじゅうごまんえんほどひつようになるよていです",
                ruby: "<ruby>敷金<rt>しききん</rt></ruby>や<ruby>保険料<rt>ほけんりょう</rt></ruby>などを<ruby>含<rt>ふく</rt></ruby>めて、<ruby>二十五万円<rt>にじゅうごまんえん</rt></ruby>ほど<ruby>必要<rt>ひつよう</rt></ruby>になる<ruby>予定<rt>よてい</rt></ruby>です。",
                romaji: "Shikikin ya hokenryō nado o fukumete, nijūgo man-en hodo hitsuyō ni naru yotei desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "思ったより高いので、それぞれの費用の内容を詳しく説明していただけますか。",
                target: "おもったよりたかいので それぞれのひようのないようをくわしくせつめいしていただけますか",
                ruby: "<ruby>思<rt>おも</rt></ruby>ったより<ruby>高<rt>たか</rt></ruby>いので、それぞれの<ruby>費用<rt>ひよう</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>を<ruby>詳<rt>くわ</rt></ruby>しく<ruby>説明<rt>せつめい</rt></ruby>していただけますか。",
                romaji: "Omotta yori takai node, sorezore no hiyō no naiyō o kuwashiku setsumei shite itadakemasu ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "もちろんです。費用の一覧を見ながら、一つずつ確認しましょう。",
                target: "もちろんです ひようのいちらんをみながら ひとつずつかくにんしましょう",
                ruby: "もちろんです。<ruby>費用<rt>ひよう</rt></ruby>の<ruby>一覧<rt>いちらん</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら、<ruby>一<rt>ひと</rt></ruby>つずつ<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Mochiron desu. Hiyō no ichiran o minagara, hitotsu zutsu kakunin shimashō."
            }
        ],

        {
            ja: [
                "利用者：この部屋は家賃が六万五千円と書いてありますが、ほかにも毎月かかる費用がありますか。",
                "不動産会社の担当者：はい。家賃のほかに、毎月五千円の管理費がかかります。",
                "利用者：契約するときには、全部でどのくらい必要でしょうか。",
                "不動産会社の担当者：敷金や保険料などを含めて、二十五万円ほど必要になる予定です。",
                "利用者：思ったより高いので、それぞれの費用の内容を詳しく説明していただけますか。",
                "不動産会社の担当者：もちろんです。費用の一覧を見ながら、一つずつ確認しましょう。"
            ],

            en: [
                "Customer: It says the rent for this room is 65,000 yen. Are there any other monthly costs?",
                "Real Estate Agent: Yes. In addition to the rent, there is a monthly management fee of 5,000 yen.",
                "Customer: About how much will I need in total when signing the contract?",
                "Real Estate Agent: Including the deposit, insurance, and other costs, you will need approximately 250,000 yen.",
                "Customer: That is more expensive than I expected. Could you explain each cost in detail?",
                "Real Estate Agent: Of course. Let us go through each item while looking at the list of costs."
            ],

            "zh-CN": [
                "顾客：这里写着这个房间的房租是六万五千日元，每个月还有其他费用吗？",
                "房地产公司工作人员：有。除了房租以外，每个月还有五千日元的管理费。",
                "顾客：签约时一共大约需要多少钱？",
                "房地产公司工作人员：包括押金和保险费等，预计需要大约二十五万日元。",
                "顾客：比我想象的贵，可以详细说明每项费用吗？",
                "房地产公司工作人员：当然可以。我们一边看费用清单，一边逐项确认吧。"
            ],

            "zh-TW": [
                "顧客：這裡寫著這個房間的房租是六萬五千日圓，每個月還有其他費用嗎？",
                "房地產公司工作人員：有。除了房租以外，每個月還有五千日圓的管理費。",
                "顧客：簽約時一共大約需要多少錢？",
                "房地產公司工作人員：包括押金和保險費等，預計需要大約二十五萬日圓。",
                "顧客：比我想像的貴，可以詳細說明每項費用嗎？",
                "房地產公司工作人員：當然可以。我們一邊看費用清單，一邊逐項確認吧。"
            ],

            ko: [
                "이용자: 이 방은 월세가 6만 5천 엔이라고 적혀 있는데 매달 드는 다른 비용도 있나요?",
                "부동산 담당자: 네. 월세 외에 매달 5천 엔의 관리비가 있습니다.",
                "이용자: 계약할 때는 전부 얼마 정도 필요할까요?",
                "부동산 담당자: 보증금과 보험료 등을 포함해서 약 25만 엔 정도 필요할 예정입니다.",
                "이용자: 생각보다 비싼데 각각의 비용을 자세히 설명해 주실 수 있나요?",
                "부동산 담당자: 물론입니다. 비용 목록을 보면서 하나씩 확인해 봅시다."
            ],

            vi: [
                "Khách hàng: Ở đây ghi tiền thuê phòng này là 65.000 yên. Ngoài ra còn có chi phí hằng tháng nào khác không?",
                "Nhân viên bất động sản: Có. Ngoài tiền thuê còn có phí quản lý 5.000 yên mỗi tháng.",
                "Khách hàng: Khi ký hợp đồng thì tổng cộng cần khoảng bao nhiêu tiền?",
                "Nhân viên bất động sản: Bao gồm tiền đặt cọc, bảo hiểm và các chi phí khác, dự kiến cần khoảng 250.000 yên.",
                "Khách hàng: Cao hơn tôi nghĩ. Bạn có thể giải thích chi tiết từng khoản không?",
                "Nhân viên bất động sản: Tất nhiên. Chúng ta hãy xem danh sách chi phí và xác nhận từng khoản."
            ]
        }
    ),

    // =====================================================
    // 003 通勤しやすい場所を探す
    // =====================================================

    makeB1FindHomeDialogue(
        "b1_findhome_003",
        "通勤しやすい場所を探す",

        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "職場まで電車で通うので、できるだけ通勤しやすい場所を探しています。",
                target: "しょくばまででんしゃでかようので できるだけつうきんしやすいばしょをさがしています",
                ruby: "<ruby>職場<rt>しょくば</rt></ruby>まで<ruby>電車<rt>でんしゃ</rt></ruby>で<ruby>通<rt>かよ</rt></ruby>うので、できるだけ<ruby>通勤<rt>つうきん</rt></ruby>しやすい<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しています。",
                romaji: "Shokuba made densha de kayou node, dekiru dake tsūkin shiyasui basho o sagashite imasu."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "職場の最寄り駅はどちらですか。",
                target: "しょくばのもよりえきはどちらですか",
                ruby: "<ruby>職場<rt>しょくば</rt></ruby>の<ruby>最寄<rt>もよ</rt></ruby>り<ruby>駅<rt>えき</rt></ruby>はどちらですか。",
                romaji: "Shokuba no moyori eki wa dochira desu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "名古屋駅です。できれば乗り換えは一回までにしたいです。",
                target: "なごやえきです できればのりかえはいっかいまでにしたいです",
                ruby: "<ruby>名古屋駅<rt>なごやえき</rt></ruby>です。できれば<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えは<ruby>一回<rt>いっかい</rt></ruby>までにしたいです。",
                romaji: "Nagoya-eki desu. Dekireba norikae wa ikkai made ni shitai desu."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "それでしたら、この駅の周辺なら三十分ほどで通勤できます。",
                target: "それでしたら このえきのしゅうへんならさんじゅっぷんほどでつうきんできます",
                ruby: "それでしたら、この<ruby>駅<rt>えき</rt></ruby>の<ruby>周辺<rt>しゅうへん</rt></ruby>なら<ruby>三十分<rt>さんじゅっぷん</rt></ruby>ほどで<ruby>通勤<rt>つうきん</rt></ruby>できます。",
                romaji: "Sore deshitara, kono eki no shūhen nara sanjuppun hodo de tsūkin dekimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "朝の電車はかなり混みますか。それも少し気になっています。",
                target: "あさのでんしゃはかなりこみますか それもすこしきになっています",
                ruby: "<ruby>朝<rt>あさ</rt></ruby>の<ruby>電車<rt>でんしゃ</rt></ruby>はかなり<ruby>混<rt>こ</rt></ruby>みますか。それも<ruby>少<rt>すこ</rt></ruby>し<ruby>気<rt>き</rt></ruby>になっています。",
                romaji: "Asa no densha wa kanari komimasu ka. Sore mo sukoshi ki ni natte imasu."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "時間帯によって混雑しますので、実際の通勤時間に一度利用してみるとよいと思います。",
                target: "じかんたいによってこんざつしますので じっさいのつうきんじかんにいちどりようしてみるとよいとおもいます",
                ruby: "<ruby>時間帯<rt>じかんたい</rt></ruby>によって<ruby>混雑<rt>こんざつ</rt></ruby>しますので、<ruby>実際<rt>じっさい</rt></ruby>の<ruby>通勤時間<rt>つうきんじかん</rt></ruby>に<ruby>一度<rt>いちど</rt></ruby><ruby>利用<rt>りよう</rt></ruby>してみるとよいと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Jikantai ni yotte konzatsu shimasu node, jissai no tsūkin jikan ni ichido riyō shite miru to yoi to omoimasu."
            }
        ],

        {
            ja: [
                "利用者：職場まで電車で通うので、できるだけ通勤しやすい場所を探しています。",
                "不動産会社の担当者：職場の最寄り駅はどちらですか。",
                "利用者：名古屋駅です。できれば乗り換えは一回までにしたいです。",
                "不動産会社の担当者：それでしたら、この駅の周辺なら三十分ほどで通勤できます。",
                "利用者：朝の電車はかなり混みますか。それも少し気になっています。",
                "不動産会社の担当者：時間帯によって混雑しますので、実際の通勤時間に一度利用してみるとよいと思います。"
            ],

            en: [
                "Customer: I commute to work by train, so I am looking for a place that makes commuting as easy as possible.",
                "Real Estate Agent: Which station is closest to your workplace?",
                "Customer: Nagoya Station. If possible, I would like to have no more than one transfer.",
                "Real Estate Agent: In that case, you can commute in about thirty minutes from around this station.",
                "Customer: Are the morning trains very crowded? I am also a little concerned about that.",
                "Real Estate Agent: It depends on the time, so I think it would be good to try the route once during your actual commuting hours."
            ],

            "zh-CN": [
                "顾客：我要坐电车上班，所以想找一个尽量方便通勤的地方。",
                "房地产公司工作人员：您工作地点最近的车站是哪里？",
                "顾客：名古屋站。如果可以的话，希望最多只换乘一次。",
                "房地产公司工作人员：这样的话，住在这个车站附近，大约三十分钟可以到公司。",
                "顾客：早上的电车很拥挤吗？这一点我也有些担心。",
                "房地产公司工作人员：根据时间段会有不同，建议您在实际通勤时间亲自坐一次看看。"
            ],

            "zh-TW": [
                "顧客：我要坐電車上班，所以想找一個盡量方便通勤的地方。",
                "房地產公司工作人員：您工作地點最近的車站是哪裡？",
                "顧客：名古屋站。如果可以的話，希望最多只轉乘一次。",
                "房地產公司工作人員：這樣的話，住在這個車站附近，大約三十分鐘可以到公司。",
                "顧客：早上的電車很擁擠嗎？這一點我也有些擔心。",
                "房地產公司工作人員：根據時間段會有不同，建議您在實際通勤時間親自坐一次看看。"
            ],

            ko: [
                "이용자: 직장까지 전철로 다녀서 가능한 한 통근하기 편한 곳을 찾고 있습니다.",
                "부동산 담당자: 직장의 가장 가까운 역은 어디인가요?",
                "이용자: 나고야역입니다. 가능하면 환승은 한 번까지만 하고 싶습니다.",
                "부동산 담당자: 그렇다면 이 역 주변에서는 약 30분 정도면 출근할 수 있습니다.",
                "이용자: 아침 전철은 많이 붐비나요? 그것도 조금 신경 쓰입니다.",
                "부동산 담당자: 시간대에 따라 혼잡하므로 실제 출근 시간에 한 번 이용해 보는 것이 좋다고 생각합니다."
            ],

            vi: [
                "Khách hàng: Tôi đi làm bằng tàu điện nên muốn tìm một nơi thuận tiện cho việc đi làm nhất có thể.",
                "Nhân viên bất động sản: Ga gần nơi làm việc của bạn nhất là ga nào?",
                "Khách hàng: Ga Nagoya. Nếu có thể, tôi muốn chỉ phải chuyển tàu tối đa một lần.",
                "Nhân viên bất động sản: Nếu vậy, từ khu vực quanh ga này bạn có thể đi làm trong khoảng ba mươi phút.",
                "Khách hàng: Tàu buổi sáng có đông lắm không? Tôi cũng hơi lo về điều đó.",
                "Nhân viên bất động sản: Tùy thời gian mà tàu sẽ đông, nên tôi nghĩ bạn nên thử đi một lần vào đúng giờ đi làm thực tế."
            ]
        }
    ),

    // =====================================================
    // 004 部屋を内見する
    // =====================================================

    makeB1FindHomeDialogue(
        "b1_findhome_004",
        "部屋を内見する",

        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "写真だけではわからないので、実際にこの部屋を見てみたいです。",
                target: "しゃしんだけではわからないので じっさいにこのへやをみてみたいです",
                ruby: "<ruby>写真<rt>しゃしん</rt></ruby>だけではわからないので、<ruby>実際<rt>じっさい</rt></ruby>にこの<ruby>部屋<rt>へや</rt></ruby>を<ruby>見<rt>み</rt></ruby>てみたいです。",
                romaji: "Shashin dake de wa wakaranai node, jissai ni kono heya o mite mitai desu."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "もちろんです。明日の午後でしたら内見できますが、ご都合はいかがですか。",
                target: "もちろんです あしたのごごでしたらないけんできますが ごつごうはいかがですか",
                ruby: "もちろんです。<ruby>明日<rt>あした</rt></ruby>の<ruby>午後<rt>ごご</rt></ruby>でしたら<ruby>内見<rt>ないけん</rt></ruby>できますが、ご<ruby>都合<rt>つごう</rt></ruby>はいかがですか。",
                romaji: "Mochiron desu. Ashita no gogo deshitara naiken dekimasu ga, gotsugō wa ikaga desu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "三時ごろなら大丈夫です。内見するときは、何を確認した方がいいですか。",
                target: "さんじごろならだいじょうぶです ないけんするときは なにをかくにんしたほうがいいですか",
                ruby: "<ruby>三時<rt>さんじ</rt></ruby>ごろなら<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。<ruby>内見<rt>ないけん</rt></ruby>するときは、<ruby>何<rt>なに</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Sanji goro nara daijōbu desu. Naiken suru toki wa, nani o kakunin shita hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "部屋の広さだけでなく、日当たりや収納、周りの音なども確認するといいですよ。",
                target: "へやのひろさだけでなく ひあたりやしゅうのう まわりのおとなどもかくにんするといいですよ",
                ruby: "<ruby>部屋<rt>へや</rt></ruby>の<ruby>広<rt>ひろ</rt></ruby>さだけでなく、<ruby>日当<rt>ひあ</rt></ruby>たりや<ruby>収納<rt>しゅうのう</rt></ruby>、<ruby>周<rt>まわ</rt></ruby>りの<ruby>音<rt>おと</rt></ruby>なども<ruby>確認<rt>かくにん</rt></ruby>するといいですよ。",
                romaji: "Heya no hirosa dake de naku, hiatari ya shūnō, mawari no oto nado mo kakunin suru to ii desu yo."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "家具を置けるか心配なので、部屋の長さも測っていいでしょうか。",
                target: "かぐをおけるかしんぱいなので へやのながさもはかっていいでしょうか",
                ruby: "<ruby>家具<rt>かぐ</rt></ruby>を<ruby>置<rt>お</rt></ruby>けるか<ruby>心配<rt>しんぱい</rt></ruby>なので、<ruby>部屋<rt>へや</rt></ruby>の<ruby>長<rt>なが</rt></ruby>さも<ruby>測<rt>はか</rt></ruby>っていいでしょうか。",
                romaji: "Kagu o okeru ka shinpai na node, heya no nagasa mo hakatte ii deshō ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "はい、大丈夫です。必要でしたら、メジャーもこちらで用意します。",
                target: "はい だいじょうぶです ひつようでしたら めじゃーもこちらでよういします",
                ruby: "はい、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。<ruby>必要<rt>ひつよう</rt></ruby>でしたら、メジャーもこちらで<ruby>用意<rt>ようい</rt></ruby>します。",
                romaji: "Hai, daijōbu desu. Hitsuyō deshitara, mejā mo kochira de yōi shimasu."
            }
        ],

        {
            ja: [
                "利用者：写真だけではわからないので、実際にこの部屋を見てみたいです。",
                "不動産会社の担当者：もちろんです。明日の午後でしたら内見できますが、ご都合はいかがですか。",
                "利用者：三時ごろなら大丈夫です。内見するときは、何を確認した方がいいですか。",
                "不動産会社の担当者：部屋の広さだけでなく、日当たりや収納、周りの音なども確認するといいですよ。",
                "利用者：家具を置けるか心配なので、部屋の長さも測っていいでしょうか。",
                "不動産会社の担当者：はい、大丈夫です。必要でしたら、メジャーもこちらで用意します。"
            ],

            en: [
                "Customer: I cannot tell everything from the photos, so I would like to see this room in person.",
                "Real Estate Agent: Of course. You can view it tomorrow afternoon. How is your schedule?",
                "Customer: Around three o'clock is fine. What should I check when viewing the room?",
                "Real Estate Agent: Besides the size, it is good to check the sunlight, storage space, and surrounding noise.",
                "Customer: I am worried about whether my furniture will fit. May I measure the room too?",
                "Real Estate Agent: Yes, of course. If necessary, we can provide a measuring tape."
            ],

            "zh-CN": [
                "顾客：只看照片无法完全了解，所以我想实际看看这个房间。",
                "房地产公司工作人员：当然可以。明天下午可以看房，您方便吗？",
                "顾客：三点左右可以。看房时应该确认什么？",
                "房地产公司工作人员：除了房间大小，也可以确认采光、收纳空间和周围的声音。",
                "顾客：我担心家具能不能放进去，可以测量房间的长度吗？",
                "房地产公司工作人员：可以。如果需要，我们也可以准备卷尺。"
            ],

            "zh-TW": [
                "顧客：只看照片無法完全了解，所以我想實際看看這個房間。",
                "房地產公司工作人員：當然可以。明天下午可以看房，您方便嗎？",
                "顧客：三點左右可以。看房時應該確認什麼？",
                "房地產公司工作人員：除了房間大小，也可以確認採光、收納空間和周圍的聲音。",
                "顧客：我擔心家具能不能放進去，可以測量房間的長度嗎？",
                "房地產公司工作人員：可以。如果需要，我們也可以準備捲尺。"
            ],

            ko: [
                "이용자: 사진만으로는 알 수 없어서 실제로 이 방을 보고 싶습니다.",
                "부동산 담당자: 물론입니다. 내일 오후라면 방을 볼 수 있는데 시간 괜찮으신가요?",
                "이용자: 세 시쯤이면 괜찮습니다. 방을 볼 때 무엇을 확인하는 편이 좋나요?",
                "부동산 담당자: 방 크기뿐 아니라 햇빛, 수납 공간, 주변 소음 등도 확인하면 좋습니다.",
                "이용자: 가구를 놓을 수 있을지 걱정되어서 방의 길이도 재도 될까요?",
                "부동산 담당자: 네, 괜찮습니다. 필요하시면 줄자도 저희가 준비하겠습니다."
            ],

            vi: [
                "Khách hàng: Chỉ nhìn ảnh thì không biết hết được, nên tôi muốn xem phòng này trực tiếp.",
                "Nhân viên bất động sản: Tất nhiên. Chiều mai có thể xem phòng, thời gian của bạn thế nào?",
                "Khách hàng: Khoảng ba giờ thì được. Khi xem phòng tôi nên kiểm tra những gì?",
                "Nhân viên bất động sản: Ngoài diện tích phòng, bạn nên kiểm tra ánh sáng, chỗ chứa đồ và tiếng ồn xung quanh.",
                "Khách hàng: Tôi lo không biết có đặt được đồ nội thất không. Tôi có thể đo chiều dài phòng không?",
                "Nhân viên bất động sản: Có, được. Nếu cần, chúng tôi cũng có thể chuẩn bị thước dây."
            ]
        }
    ),

    // =====================================================
    // 005 契約に必要な条件を確認する
    // =====================================================

    makeB1FindHomeDialogue(
        "b1_findhome_005",
        "契約に必要な条件を確認する",

        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "私は外国人ですが、この部屋を借りることはできますか。",
                target: "わたしはがいこくじんですが このへやをかりることはできますか",
                ruby: "<ruby>私<rt>わたし</rt></ruby>は<ruby>外国人<rt>がいこくじん</rt></ruby>ですが、この<ruby>部屋<rt>へや</rt></ruby>を<ruby>借<rt>か</rt></ruby>りることはできますか。",
                romaji: "Watashi wa gaikokujin desu ga, kono heya o kariru koto wa dekimasu ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "はい。ただし、契約の前に在留カードや収入に関する書類などを確認します。",
                target: "はい ただし けいやくのまえにざいりゅうかーどやしゅうにゅうにかんするしょるいなどをかくにんします",
                ruby: "はい。ただし、<ruby>契約<rt>けいやく</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>在留<rt>ざいりゅう</rt></ruby>カードや<ruby>収入<rt>しゅうにゅう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>書類<rt>しょるい</rt></ruby>などを<ruby>確認<rt>かくにん</rt></ruby>します。",
                romaji: "Hai. Tadashi, keiyaku no mae ni zairyū kādo ya shūnyū ni kansuru shorui nado o kakunin shimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "日本人の保証人がいないのですが、その場合はどうなりますか。",
                target: "にほんじんのほしょうにんがいないのですが そのばあいはどうなりますか",
                ruby: "<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>保証人<rt>ほしょうにん</rt></ruby>がいないのですが、その<ruby>場合<rt>ばあい</rt></ruby>はどうなりますか。",
                romaji: "Nihonjin no hoshōnin ga inai no desu ga, sono baai wa dō narimasu ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "この物件では、条件を満たせば保証会社を利用することができます。",
                target: "このぶっけんでは じょうけんをみたせばほしょうがいしゃをりようすることができます",
                ruby: "この<ruby>物件<rt>ぶっけん</rt></ruby>では、<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>満<rt>み</rt></ruby>たせば<ruby>保証会社<rt>ほしょうがいしゃ</rt></ruby>を<ruby>利用<rt>りよう</rt></ruby>することができます。",
                romaji: "Kono bukken de wa, jōken o mitaseba hoshō gaisha o riyō suru koto ga dekimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "必要な書類を先に準備したいので、一覧をいただけますか。",
                target: "ひつようなしょるいをさきにじゅんびしたいので いちらんをいただけますか",
                ruby: "<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>を<ruby>先<rt>さき</rt></ruby>に<ruby>準備<rt>じゅんび</rt></ruby>したいので、<ruby>一覧<rt>いちらん</rt></ruby>をいただけますか。",
                romaji: "Hitsuyō na shorui o saki ni junbi shitai node, ichiran o itadakemasu ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "もちろんです。物件によって条件が違うこともあるので、一緒に確認しましょう。",
                target: "もちろんです ぶっけんによってじょうけんがちがうこともあるので いっしょにかくにんしましょう",
                ruby: "もちろんです。<ruby>物件<rt>ぶっけん</rt></ruby>によって<ruby>条件<rt>じょうけん</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>うこともあるので、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Mochiron desu. Bukken ni yotte jōken ga chigau koto mo aru node, issho ni kakunin shimashō."
            }
        ],

        {
            ja: [
                "利用者：私は外国人ですが、この部屋を借りることはできますか。",
                "不動産会社の担当者：はい。ただし、契約の前に在留カードや収入に関する書類などを確認します。",
                "利用者：日本人の保証人がいないのですが、その場合はどうなりますか。",
                "不動産会社の担当者：この物件では、条件を満たせば保証会社を利用することができます。",
                "利用者：必要な書類を先に準備したいので、一覧をいただけますか。",
                "不動産会社の担当者：もちろんです。物件によって条件が違うこともあるので、一緒に確認しましょう。"
            ],

            en: [
                "Customer: I am a foreign resident. Can I rent this room?",
                "Real Estate Agent: Yes. However, before signing the contract, we will check documents such as your residence card and proof of income.",
                "Customer: I do not have a Japanese guarantor. What happens in that case?",
                "Real Estate Agent: For this property, you may use a guarantor company if you meet the required conditions.",
                "Customer: I would like to prepare the necessary documents in advance. Could I have a list?",
                "Real Estate Agent: Of course. Conditions may differ depending on the property, so let us check them together."
            ],

            "zh-CN": [
                "顾客：我是外国人，可以租这个房间吗？",
                "房地产公司工作人员：可以。不过签约前需要确认在留卡和收入相关资料等。",
                "顾客：我没有日本人保证人，这种情况下怎么办？",
                "房地产公司工作人员：这个房源如果符合条件，可以使用保证公司。",
                "顾客：我想提前准备必要资料，可以给我一份清单吗？",
                "房地产公司工作人员：当然可以。不同房源的条件可能不同，我们一起确认吧。"
            ],

            "zh-TW": [
                "顧客：我是外國人，可以租這個房間嗎？",
                "房地產公司工作人員：可以。不過簽約前需要確認在留卡和收入相關資料等。",
                "顧客：我沒有日本人保證人，這種情況下怎麼辦？",
                "房地產公司工作人員：這個房源如果符合條件，可以使用保證公司。",
                "顧客：我想提前準備必要資料，可以給我一份清單嗎？",
                "房地產公司工作人員：當然可以。不同房源的條件可能不同，我們一起確認吧。"
            ],

            ko: [
                "이용자: 저는 외국인인데 이 방을 빌릴 수 있나요?",
                "부동산 담당자: 네. 다만 계약 전에 재류 카드와 소득 관련 서류 등을 확인합니다.",
                "이용자: 일본인 보증인이 없는데 그 경우에는 어떻게 되나요?",
                "부동산 담당자: 이 물건에서는 조건을 충족하면 보증 회사를 이용할 수 있습니다.",
                "이용자: 필요한 서류를 미리 준비하고 싶으니 목록을 받을 수 있을까요?",
                "부동산 담당자: 물론입니다. 물건에 따라 조건이 다를 수도 있으니 함께 확인합시다."
            ],

            vi: [
                "Khách hàng: Tôi là người nước ngoài. Tôi có thể thuê phòng này không?",
                "Nhân viên bất động sản: Có. Tuy nhiên, trước khi ký hợp đồng chúng tôi sẽ kiểm tra thẻ cư trú và giấy tờ liên quan đến thu nhập.",
                "Khách hàng: Tôi không có người bảo lãnh là người Nhật. Trong trường hợp đó thì sao?",
                "Nhân viên bất động sản: Với căn này, nếu đáp ứng điều kiện, bạn có thể sử dụng công ty bảo lãnh.",
                "Khách hàng: Tôi muốn chuẩn bị trước các giấy tờ cần thiết. Tôi có thể nhận danh sách không?",
                "Nhân viên bất động sản: Tất nhiên. Điều kiện có thể khác nhau tùy từng căn, nên chúng ta hãy cùng xác nhận."
            ]
        }
    ),

    // =====================================================
    // 006 周辺の生活環境を確認する
    // =====================================================

    makeB1FindHomeDialogue(
        "b1_findhome_006",
        "周辺の生活環境を確認する",

        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "この部屋は気に入ったのですが、周辺の生活環境についても知りたいです。",
                target: "このへやはきにいったのですが しゅうへんのせいかつかんきょうについてもしりたいです",
                ruby: "この<ruby>部屋<rt>へや</rt></ruby>は<ruby>気<rt>き</rt></ruby>に<ruby>入<rt>い</rt></ruby>ったのですが、<ruby>周辺<rt>しゅうへん</rt></ruby>の<ruby>生活環境<rt>せいかつかんきょう</rt></ruby>についても<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Kono heya wa ki ni itta no desu ga, shūhen no seikatsu kankyō ni tsuite mo shiritai desu."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "近くにスーパーとコンビニがあり、病院も徒歩十分ほどの場所にあります。",
                target: "ちかくにすーぱーとこんびにがあり びょういんもとほじゅっぷんほどのばしょにあります",
                ruby: "<ruby>近<rt>ちか</rt></ruby>くにスーパーとコンビニがあり、<ruby>病院<rt>びょういん</rt></ruby>も<ruby>徒歩十分<rt>とほじゅっぷん</rt></ruby>ほどの<ruby>場所<rt>ばしょ</rt></ruby>にあります。",
                romaji: "Chikaku ni sūpā to konbini ga ari, byōin mo toho juppun hodo no basho ni arimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "子どもがいるので、公園や学校が近いかどうかも気になります。",
                target: "こどもがいるので こうえんやがっこうがちかいかどうかもきになります",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもがいるので、<ruby>公園<rt>こうえん</rt></ruby>や<ruby>学校<rt>がっこう</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>いかどうかも<ruby>気<rt>き</rt></ruby>になります。",
                romaji: "Kodomo ga iru node, kōen ya gakkō ga chikai ka dō ka mo ki ni narimasu."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "公園は近くにありますが、学校については通学区域も確認した方がいいですね。",
                target: "こうえんはちかくにありますが がっこうについてはつうがくくいきもかくにんしたほうがいいですね",
                ruby: "<ruby>公園<rt>こうえん</rt></ruby>は<ruby>近<rt>ちか</rt></ruby>くにありますが、<ruby>学校<rt>がっこう</rt></ruby>については<ruby>通学区域<rt>つうがくくいき</rt></ruby>も<ruby>確認<rt>かくにん</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいいですね。",
                romaji: "Kōen wa chikaku ni arimasu ga, gakkō ni tsuite wa tsūgaku kuiki mo kakunin shita hō ga ii desu ne."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "夜の明るさや人通りについても、実際に見ておいた方がよさそうですね。",
                target: "よるのあかるさやひとどおりについても じっさいにみておいたほうがよさそうですね",
                ruby: "<ruby>夜<rt>よる</rt></ruby>の<ruby>明<rt>あか</rt></ruby>るさや<ruby>人通<rt>ひとどお</rt></ruby>りについても、<ruby>実際<rt>じっさい</rt></ruby>に<ruby>見<rt>み</rt></ruby>ておいた<ruby>方<rt>ほう</rt></ruby>がよさそうですね。",
                romaji: "Yoru no akarusa ya hitodōri ni tsuite mo, jissai ni mite oita hō ga yosasō desu ne."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "はい。昼と夜では雰囲気が違うこともあるので、時間を変えて確認するのがおすすめです。",
                target: "はい ひるとよるではふんいきがちがうこともあるので じかんをかえてかくにんするのがおすすめです",
                ruby: "はい。<ruby>昼<rt>ひる</rt></ruby>と<ruby>夜<rt>よる</rt></ruby>では<ruby>雰囲気<rt>ふんいき</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>うこともあるので、<ruby>時間<rt>じかん</rt></ruby>を<ruby>変<rt>か</rt></ruby>えて<ruby>確認<rt>かくにん</rt></ruby>するのがおすすめです。",
                romaji: "Hai. Hiru to yoru de wa fun'iki ga chigau koto mo aru node, jikan o kaete kakunin suru no ga osusume desu."
            }
        ],

        {
            ja: [
                "利用者：この部屋は気に入ったのですが、周辺の生活環境についても知りたいです。",
                "不動産会社の担当者：近くにスーパーとコンビニがあり、病院も徒歩十分ほどの場所にあります。",
                "利用者：子どもがいるので、公園や学校が近いかどうかも気になります。",
                "不動産会社の担当者：公園は近くにありますが、学校については通学区域も確認した方がいいですね。",
                "利用者：夜の明るさや人通りについても、実際に見ておいた方がよさそうですね。",
                "不動産会社の担当者：はい。昼と夜では雰囲気が違うこともあるので、時間を変えて確認するのがおすすめです。"
            ],

            en: [
                "Customer: I like this room, but I would also like to know about the surrounding living environment.",
                "Real Estate Agent: There is a supermarket and convenience store nearby, and a hospital is about a ten-minute walk away.",
                "Customer: I have a child, so I am also concerned about whether parks and schools are nearby.",
                "Real Estate Agent: There is a park nearby, but regarding schools, you should also check the school district.",
                "Customer: It would probably be good to see how bright and busy the area is at night too.",
                "Real Estate Agent: Yes. The atmosphere may be different during the day and at night, so I recommend checking at different times."
            ],

            "zh-CN": [
                "顾客：我喜欢这个房间，不过也想了解周边的生活环境。",
                "房地产公司工作人员：附近有超市和便利店，医院步行大约十分钟。",
                "顾客：因为我有孩子，所以也很关心附近有没有公园和学校。",
                "房地产公司工作人员：附近有公园，不过学校方面最好也确认一下学区。",
                "顾客：晚上的亮度和人流情况也最好实际看看吧。",
                "房地产公司工作人员：是的。白天和晚上的氛围可能不同，建议换不同时间去确认。"
            ],

            "zh-TW": [
                "顧客：我喜歡這個房間，不過也想了解周邊的生活環境。",
                "房地產公司工作人員：附近有超市和便利商店，醫院步行大約十分鐘。",
                "顧客：因為我有孩子，所以也很關心附近有沒有公園和學校。",
                "房地產公司工作人員：附近有公園，不過學校方面最好也確認一下學區。",
                "顧客：晚上的亮度和人流情況也最好實際看看吧。",
                "房地產公司工作人員：是的。白天和晚上的氛圍可能不同，建議換不同時間去確認。"
            ],

            ko: [
                "이용자: 이 방은 마음에 들지만 주변 생활 환경에 대해서도 알고 싶습니다.",
                "부동산 담당자: 근처에 슈퍼와 편의점이 있고 병원도 도보 10분 정도 거리에 있습니다.",
                "이용자: 아이가 있어서 공원이나 학교가 가까운지도 신경 쓰입니다.",
                "부동산 담당자: 공원은 가까이 있지만 학교에 대해서는 통학 구역도 확인하는 편이 좋습니다.",
                "이용자: 밤의 밝기나 사람 통행에 대해서도 실제로 확인해 보는 편이 좋겠네요.",
                "부동산 담당자: 네. 낮과 밤의 분위기가 다를 수도 있으니 시간을 바꾸어 확인하는 것을 권합니다."
            ],

            vi: [
                "Khách hàng: Tôi thích căn phòng này, nhưng cũng muốn biết về môi trường sống xung quanh.",
                "Nhân viên bất động sản: Gần đây có siêu thị và cửa hàng tiện lợi, bệnh viện cũng cách khoảng mười phút đi bộ.",
                "Khách hàng: Tôi có con nên cũng quan tâm xem công viên và trường học có gần không.",
                "Nhân viên bất động sản: Có công viên gần đây, nhưng về trường học thì bạn cũng nên kiểm tra khu vực tuyển sinh.",
                "Khách hàng: Có lẽ tôi cũng nên trực tiếp kiểm tra độ sáng và lượng người qua lại vào buổi tối.",
                "Nhân viên bất động sản: Đúng vậy. Không khí ban ngày và ban đêm có thể khác nhau, nên tôi khuyên bạn kiểm tra vào những thời điểm khác nhau."
            ]
        }
    ),

    // =====================================================
    // 007 部屋の設備について確認する
    // =====================================================

    makeB1FindHomeDialogue(
        "b1_findhome_007",
        "部屋の設備について確認する",

        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "この部屋には、エアコンや照明は最初からついていますか。",
                target: "このへやには えあこんやしょうめいはさいしょからついていますか",
                ruby: "この<ruby>部屋<rt>へや</rt></ruby>には、エアコンや<ruby>照明<rt>しょうめい</rt></ruby>は<ruby>最初<rt>さいしょ</rt></ruby>からついていますか。",
                romaji: "Kono heya ni wa, eakon ya shōmei wa saisho kara tsuite imasu ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "エアコンは一台ありますが、照明はご自身で用意していただく必要があります。",
                target: "えあこんはいちだいありますが しょうめいはごじしんでよういしていただくひつようがあります",
                ruby: "エアコンは<ruby>一台<rt>いちだい</rt></ruby>ありますが、<ruby>照明<rt>しょうめい</rt></ruby>はご<ruby>自身<rt>じしん</rt></ruby>で<ruby>用意<rt>ようい</rt></ruby>していただく<ruby>必要<rt>ひつよう</rt></ruby>があります。",
                romaji: "Eakon wa ichidai arimasu ga, shōmei wa gojishin de yōi shite itadaku hitsuyō ga arimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "洗濯機を置く場所は、部屋の中にありますか。",
                target: "せんたくきをおくばしょは へやのなかにありますか",
                ruby: "<ruby>洗濯機<rt>せんたくき</rt></ruby>を<ruby>置<rt>お</rt></ruby>く<ruby>場所<rt>ばしょ</rt></ruby>は、<ruby>部屋<rt>へや</rt></ruby>の<ruby>中<rt>なか</rt></ruby>にありますか。",
                romaji: "Sentakuki o oku basho wa, heya no naka ni arimasu ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "はい。洗面所の横に洗濯機置き場があります。",
                target: "はい せんめんじょのよこにせんたくきおきばがあります",
                ruby: "はい。<ruby>洗面所<rt>せんめんじょ</rt></ruby>の<ruby>横<rt>よこ</rt></ruby>に<ruby>洗濯機置<rt>せんたくきお</rt></ruby>き<ruby>場<rt>ば</rt></ruby>があります。",
                romaji: "Hai. Senmenjo no yoko ni sentakuki okiba ga arimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "インターネットは、入居後すぐに使えるのでしょうか。",
                target: "いんたーねっとは にゅうきょごすぐにつかえるのでしょうか",
                ruby: "インターネットは、<ruby>入居後<rt>にゅうきょご</rt></ruby>すぐに<ruby>使<rt>つか</rt></ruby>えるのでしょうか。",
                romaji: "Intānetto wa, nyūkyogo sugu ni tsukaeru no deshō ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "建物にはインターネット設備がありますが、利用には別の申し込みが必要です。",
                target: "たてものにはいんたーねっとせつびがありますが りようにはべつのもうしこみがひつようです",
                ruby: "<ruby>建物<rt>たてもの</rt></ruby>にはインターネット<ruby>設備<rt>せつび</rt></ruby>がありますが、<ruby>利用<rt>りよう</rt></ruby>には<ruby>別<rt>べつ</rt></ruby>の<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みが<ruby>必要<rt>ひつよう</rt></ruby>です。",
                romaji: "Tatemono ni wa intānetto setsubi ga arimasu ga, riyō ni wa betsu no mōshikomi ga hitsuyō desu."
            }
        ],

        {
            ja: [
                "利用者：この部屋には、エアコンや照明は最初からついていますか。",
                "不動産会社の担当者：エアコンは一台ありますが、照明はご自身で用意していただく必要があります。",
                "利用者：洗濯機を置く場所は、部屋の中にありますか。",
                "不動産会社の担当者：はい。洗面所の横に洗濯機置き場があります。",
                "利用者：インターネットは、入居後すぐに使えるのでしょうか。",
                "不動産会社の担当者：建物にはインターネット設備がありますが、利用には別の申し込みが必要です。"
            ],

            en: [
                "Customer: Does this room already have air conditioning and lighting?",
                "Real Estate Agent: There is one air conditioner, but you need to provide your own lighting.",
                "Customer: Is there a place for a washing machine inside the apartment?",
                "Real Estate Agent: Yes. There is a washing machine space next to the washroom.",
                "Customer: Can I use the internet immediately after moving in?",
                "Real Estate Agent: The building has internet facilities, but a separate application is required to use the service."
            ],

            "zh-CN": [
                "顾客：这个房间一开始就配有空调和照明吗？",
                "房地产公司工作人员：有一台空调，不过照明需要您自己准备。",
                "顾客：房间里面有放洗衣机的地方吗？",
                "房地产公司工作人员：有。洗面所旁边有洗衣机放置处。",
                "顾客：入住后可以马上使用网络吗？",
                "房地产公司工作人员：建筑内有网络设备，不过使用时需要另外申请。"
            ],

            "zh-TW": [
                "顧客：這個房間一開始就配有空調和照明嗎？",
                "房地產公司工作人員：有一台空調，不過照明需要您自己準備。",
                "顧客：房間裡面有放洗衣機的地方嗎？",
                "房地產公司工作人員：有。洗面所旁邊有洗衣機放置處。",
                "顧客：入住後可以馬上使用網路嗎？",
                "房地產公司工作人員：建築內有網路設備，不過使用時需要另外申請。"
            ],

            ko: [
                "이용자: 이 방에는 에어컨과 조명이 처음부터 설치되어 있나요?",
                "부동산 담당자: 에어컨은 한 대 있지만 조명은 직접 준비하셔야 합니다.",
                "이용자: 세탁기를 놓는 곳은 방 안에 있나요?",
                "부동산 담당자: 네. 세면실 옆에 세탁기 놓는 공간이 있습니다.",
                "이용자: 인터넷은 입주 후 바로 사용할 수 있나요?",
                "부동산 담당자: 건물에 인터넷 설비는 있지만 이용하려면 별도로 신청해야 합니다."
            ],

            vi: [
                "Khách hàng: Phòng này có sẵn máy điều hòa và đèn chiếu sáng không?",
                "Nhân viên bất động sản: Có một máy điều hòa, nhưng đèn thì bạn cần tự chuẩn bị.",
                "Khách hàng: Có chỗ đặt máy giặt bên trong căn hộ không?",
                "Nhân viên bất động sản: Có. Có chỗ đặt máy giặt bên cạnh phòng rửa mặt.",
                "Khách hàng: Tôi có thể sử dụng internet ngay sau khi chuyển vào không?",
                "Nhân viên bất động sản: Tòa nhà có thiết bị internet, nhưng để sử dụng bạn cần đăng ký riêng."
            ]
        }
    ),

    // =====================================================
    // 008 入居を申し込む
    // =====================================================

    makeB1FindHomeDialogue(
        "b1_findhome_008",
        "入居を申し込む",

        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "いくつか部屋を見ましたが、この物件に申し込みたいと思います。",
                target: "いくつかへやをみましたが このぶっけんにもうしこみたいとおもいます",
                ruby: "いくつか<ruby>部屋<rt>へや</rt></ruby>を<ruby>見<rt>み</rt></ruby>ましたが、この<ruby>物件<rt>ぶっけん</rt></ruby>に<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みたいと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Ikutsuka heya o mimashita ga, kono bukken ni mōshikomitai to omoimasu."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "ありがとうございます。それでは、まず入居申込書に必要事項を記入してください。",
                target: "ありがとうございます それでは まずにゅうきょもうしこみしょにひつようじこうをきにゅうしてください",
                ruby: "ありがとうございます。それでは、まず<ruby>入居申込書<rt>にゅうきょもうしこみしょ</rt></ruby>に<ruby>必要事項<rt>ひつようじこう</rt></ruby>を<ruby>記入<rt>きにゅう</rt></ruby>してください。",
                romaji: "Arigatō gozaimasu. Sore de wa, mazu nyūkyo mōshikomisho ni hitsuyō jikō o kinyū shite kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "申し込んだら、すぐに契約が決まるのでしょうか。",
                target: "もうしこんだら すぐにけいやくがきまるのでしょうか",
                ruby: "<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>んだら、すぐに<ruby>契約<rt>けいやく</rt></ruby>が<ruby>決<rt>き</rt></ruby>まるのでしょうか。",
                romaji: "Mōshikondara, sugu ni keiyaku ga kimaru no deshō ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "いいえ。申し込みのあとに審査がありますので、結果が出るまで少し時間がかかります。",
                target: "いいえ もうしこみのあとにしんさがありますので けっかがでるまですこしじかんがかかります",
                ruby: "いいえ。<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みのあとに<ruby>審査<rt>しんさ</rt></ruby>がありますので、<ruby>結果<rt>けっか</rt></ruby>が<ruby>出<rt>で</rt></ruby>るまで<ruby>少<rt>すこ</rt></ruby>し<ruby>時間<rt>じかん</rt></ruby>がかかります。",
                romaji: "Iie. Mōshikomi no ato ni shinsa ga arimasu node, kekka ga deru made sukoshi jikan ga kakarimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "来月一日までに引っ越したいのですが、間に合いそうですか。",
                target: "らいげつついたちまでにひっこしたいのですが まにあいそうですか",
                ruby: "<ruby>来月一日<rt>らいげつついたち</rt></ruby>までに<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>したいのですが、<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>いそうですか。",
                romaji: "Raigetsu tsuitachi made ni hikkoshitai no desu ga, maniaisō desu ka."
            },
            {
                label: "話者A",
                key: "agent",
                name: "不動産会社の担当者",
                line: "順調に進めば可能ですが、必要な書類はできるだけ早く提出してください。",
                target: "じゅんちょうにすすめばかのうですが ひつようなしょるいはできるだけはやくていしゅつしてください",
                ruby: "<ruby>順調<rt>じゅんちょう</rt></ruby>に<ruby>進<rt>すす</rt></ruby>めば<ruby>可能<rt>かのう</rt></ruby>ですが、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>はできるだけ<ruby>早<rt>はや</rt></ruby>く<ruby>提出<rt>ていしゅつ</rt></ruby>してください。",
                romaji: "Junchō ni susumeba kanō desu ga, hitsuyō na shorui wa dekiru dake hayaku teishutsu shite kudasai."
            }
        ],

        {
            ja: [
                "利用者：いくつか部屋を見ましたが、この物件に申し込みたいと思います。",
                "不動産会社の担当者：ありがとうございます。それでは、まず入居申込書に必要事項を記入してください。",
                "利用者：申し込んだら、すぐに契約が決まるのでしょうか。",
                "不動産会社の担当者：いいえ。申し込みのあとに審査がありますので、結果が出るまで少し時間がかかります。",
                "利用者：来月一日までに引っ越したいのですが、間に合いそうですか。",
                "不動産会社の担当者：順調に進めば可能ですが、必要な書類はできるだけ早く提出してください。"
            ],

            en: [
                "Customer: I have viewed several rooms, and I would like to apply for this property.",
                "Real Estate Agent: Thank you. First, please fill in the required information on the rental application form.",
                "Customer: Once I apply, is the contract approved immediately?",
                "Real Estate Agent: No. There is a screening process after the application, so it takes some time before the result is available.",
                "Customer: I would like to move by the first of next month. Do you think that will be possible?",
                "Real Estate Agent: It may be possible if everything goes smoothly, but please submit the required documents as soon as possible."
            ],

            "zh-CN": [
                "顾客：我看了几个房间，想申请这个房源。",
                "房地产公司工作人员：谢谢。那么，请先在入住申请书上填写必要信息。",
                "顾客：申请后马上就能确定合同吗？",
                "房地产公司工作人员：不能。申请后需要审查，所以结果出来之前需要一些时间。",
                "顾客：我想在下个月一号之前搬家，来得及吗？",
                "房地产公司工作人员：如果顺利的话有可能，不过请尽快提交必要资料。"
            ],

            "zh-TW": [
                "顧客：我看了幾個房間，想申請這個房源。",
                "房地產公司工作人員：謝謝。那麼，請先在入住申請書上填寫必要資訊。",
                "顧客：申請後馬上就能確定合約嗎？",
                "房地產公司工作人員：不能。申請後需要審查，所以結果出來之前需要一些時間。",
                "顧客：我想在下個月一號之前搬家，來得及嗎？",
                "房地產公司工作人員：如果順利的話有可能，不過請儘快提交必要資料。"
            ],

            ko: [
                "이용자: 몇 개의 방을 봤는데 이 물건에 신청하고 싶습니다.",
                "부동산 담당자: 감사합니다. 그러면 먼저 입주 신청서에 필요한 사항을 기입해 주세요.",
                "이용자: 신청하면 바로 계약이 결정되나요?",
                "부동산 담당자: 아닙니다. 신청 후에 심사가 있어서 결과가 나올 때까지 조금 시간이 걸립니다.",
                "이용자: 다음 달 1일까지 이사하고 싶은데 가능할까요?",
                "부동산 담당자: 순조롭게 진행되면 가능하지만 필요한 서류는 가능한 한 빨리 제출해 주세요."
            ],

            vi: [
                "Khách hàng: Tôi đã xem vài phòng và muốn đăng ký thuê căn này.",
                "Nhân viên bất động sản: Cảm ơn bạn. Trước tiên, hãy điền các thông tin cần thiết vào đơn đăng ký thuê nhà.",
                "Khách hàng: Sau khi đăng ký thì hợp đồng sẽ được quyết định ngay sao?",
                "Nhân viên bất động sản: Không. Sau khi đăng ký còn có quá trình xét duyệt nên cần một khoảng thời gian để có kết quả.",
                "Khách hàng: Tôi muốn chuyển nhà trước ngày mùng một tháng sau. Có kịp không?",
                "Nhân viên bất động sản: Nếu mọi việc diễn ra thuận lợi thì có thể, nhưng hãy nộp các giấy tờ cần thiết càng sớm càng tốt."
            ]
        }
    )

];