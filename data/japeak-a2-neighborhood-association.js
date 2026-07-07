// =====================================================
// Japeak A2 Level
// Scene: 自治会に入ってみよう
// Category Key: a2_neighborhood_association
// =====================================================

const a2NeighborhoodAssociationContext = {
    ja: "自治会に入るとき、会費、回覧板、ごみ当番、清掃活動、防災訓練、地域行事などについて話す日本語を練習します。",
    en: "Practice Japanese for joining a neighborhood association and talking about fees, circular notices, garbage duty, cleaning activities, disaster drills, and local events.",
    "zh-CN": "练习加入自治会时，以及谈论会费、传阅通知、垃圾值日、清扫活动、防灾训练和地区活动等内容的日语。",
    "zh-TW": "練習加入自治會時，以及談論會費、傳閱通知、垃圾值日、清掃活動、防災訓練和地區活動等內容的日語。",
    ko: "자치회에 가입할 때 회비, 회람판, 쓰레기 당번, 청소 활동, 방재 훈련, 지역 행사 등에 대해 말하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi tham gia hội khu phố và nói về phí hội, bảng thông báo chuyền tay, phiên trực rác, hoạt động dọn dẹp, diễn tập phòng disaster và sự kiện địa phương.",
    tl: "Practice ng Japanese sa pagsali sa neighborhood association at pag-usap tungkol sa membership fee, circular notices, garbage duty, cleaning activities, disaster drills, at local events.",
    id: "Latihan bahasa Jepang untuk bergabung dengan asosiasi lingkungan dan membicarakan iuran, edaran, tugas sampah, kegiatan bersih-bersih, latihan bencana, dan acara lingkungan.",
    th: "ฝึกภาษาญี่ปุ่นเมื่อเข้าร่วมสมาคมชุมชน และพูดคุยเรื่องค่าสมาชิก เอกสารเวียน เวรขยะ กิจกรรมทำความสะอาด การฝึกป้องกันภัย และงานชุมชน",
    my: "ရပ်ကွက်အသင်းဝင်ခြင်း၊ အသင်းကြေး၊ လှည့်ပို့စာ၊ အမှိုက်တာဝန်၊ သန့်ရှင်းရေးလုပ်ငန်း၊ ဘေးအန္တရာယ်လေ့ကျင့်မှုနှင့် ဒေသပွဲများအကြောင်း ပြောရာတွင် အသုံးပြုသော ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ចូលរួមសមាគមសហគមន៍ និងនិយាយអំពីថ្លៃសមាជិក សេចក្តីជូនដំណឹងបង្វិល វេនសំរាម សកម្មភាពសម្អាត ការហាត់ការពារគ្រោះមហន្តរាយ និងកម្មវិធីក្នុងតំបន់។",
    ne: "टोल/समुदाय संघमा सहभागी हुँदा शुल्क, घुम्ती सूचना, फोहोरको पालो, सरसफाइ गतिविधि, विपद् अभ्यास र स्थानीय कार्यक्रमबारे बोल्ने जापानी अभ्यास।",
    mn: "Орон нутгийн холбоонд нэгдэх үед гишүүний хураамж, эргэлтийн мэдэгдэл, хогийн ээлж, цэвэрлэгээ, гамшгийн сургуулилалт, орон нутгийн арга хэмжээний талаар ярих япон хэлний дадлага.",
    si: "පළාත් සංගමයට එකතු වීම, සාමාජික ගාස්තු, circular notices, garbage duty, cleaning activities, disaster drills සහ local events ගැන කතා කිරීමට අවශ්‍ය ජපන් භාෂා පුහුණුව.",
    bn: "স্থানীয় পাড়া সমিতিতে যোগ দেওয়া, ফি, ঘুরে-ঘুরে দেওয়া নোটিশ, আবর্জনা দায়িত্ব, পরিষ্কার কার্যক্রম, দুর্যোগ মহড়া এবং স্থানীয় অনুষ্ঠান নিয়ে জাপানি অনুশীলন।",
    pt: "Prática de japonês para entrar na associação de bairro e falar sobre taxas, avisos circulares, turno do lixo, atividades de limpeza, treinamento de prevenção de desastres e eventos locais.",
    es: "Práctica de japonés para unirse a la asociación vecinal y hablar sobre cuotas, avisos circulares, turnos de basura, actividades de limpieza, simulacros de desastre y eventos locales.",
    fr: "Entraînement en japonais pour rejoindre une association de quartier et parler des cotisations, avis circulaires, tours de poubelles, activités de nettoyage, exercices de prévention et événements locaux.",
    ru: "Практика японского языка для вступления в районное объединение и обсуждения взносов, круговых уведомлений, дежурства по мусору, уборки, учений по бедствиям и местных мероприятий.",
    uk: "Практика японської мови для вступу до районного об’єднання та розмов про внески, кругові повідомлення, чергування зі сміттям, прибирання, навчання з безпеки та місцеві заходи."
};

const a2NeighborhoodAssociationSpeakerNames = {
    officer: {
        ja: "自治会の人", en: "Association Member", "zh-CN": "自治会人员", "zh-TW": "自治會人員", ko: "자치회 사람",
        vi: "Người của hội khu phố", tl: "Association member", id: "Anggota asosiasi", th: "คนของสมาคมชุมชน",
        my: "ရပ်ကွက်အသင်းမှလူ", km: "សមាជិកសមាគមសហគមន៍", ne: "समुदाय संघका व्यक्ति", mn: "Холбооны гишүүн",
        si: "සංගමයේ සාමාජිකයා", bn: "সমিতির সদস্য", pt: "Membro da associação", es: "Miembro de la asociación",
        fr: "Membre de l’association", ru: "Член объединения", uk: "Член об’єднання"
    },
    resident: {
        ja: "住民", en: "Resident", "zh-CN": "居民", "zh-TW": "居民", ko: "주민",
        vi: "Cư dân", tl: "Resident", id: "Warga", th: "ผู้อยู่อาศัย",
        my: "နေထိုင်သူ", km: "អ្នករស់នៅ", ne: "बासिन्दा", mn: "Оршин суугч",
        si: "නිවැසියා", bn: "বাসিন্দা", pt: "Morador", es: "Residente",
        fr: "Habitant", ru: "Житель", uk: "Мешканець"
    }
};

function makeA2NeighborhoodAssociationDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_neighborhood_association",
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
            speakerNames: a2NeighborhoodAssociationSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2NeighborhoodAssociationContext,
        translations,
        dialogueTranslations
    };
}

const japeakA2NeighborhoodAssociationData = [

    makeA2NeighborhoodAssociationDialogue(
        "a2_jichikai_001",
        "引っ越し後に自治会について聞く",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "先月、この地区に引っ越してきました。",
                target: "せんげつ このちくにひっこしてきました",
                ruby: "<ruby>先月<rt>せんげつ</rt></ruby>、この<ruby>地区<rt>ちく</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>してきました。",
                romaji: "Sengetsu, kono chiku ni hikkoshite kimashita."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "そうでしたか。こちらの生活には慣れてきましたか。",
                target: "そうでしたか こちらのせいかつにはなれてきましたか",
                ruby: "そうでしたか。こちらの<ruby>生活<rt>せいかつ</rt></ruby>には<ruby>慣<rt>な</rt></ruby>れてきましたか。",
                romaji: "Sō deshita ka. Kochira no seikatsu ni wa narete kimashita ka."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "少しずつ慣れてきましたが、自治会のことをまだ知りません。",
                target: "すこしずつなれてきましたが じちかいのことをまだしりません",
                ruby: "<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>慣<rt>な</rt></ruby>れてきましたが、<ruby>自治会<rt>じちかい</rt></ruby>のことをまだ<ruby>知<rt>し</rt></ruby>りません。",
                romaji: "Sukoshi zutsu narete kimashita ga, jichikai no koto o mada shirimasen."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "ごみ出しや防災の連絡があるので、説明しますね。",
                target: "ごみだしやぼうさいのれんらくがあるので せつめいしますね",
                ruby: "ごみ<ruby>出<rt>だ</rt></ruby>しや<ruby>防災<rt>ぼうさい</rt></ruby>の<ruby>連絡<rt>れんらく</rt></ruby>があるので、<ruby>説明<rt>せつめい</rt></ruby>しますね。",
                romaji: "Gomidashi ya bōsai no renraku ga aru node, setsumei shimasu ne."
            }
        ],
        {
            ja: ["住民：先月、この地区に引っ越してきました。", "自治会の人：そうでしたか。こちらの生活には慣れてきましたか。", "住民：少しずつ慣れてきましたが、自治会のことをまだ知りません。", "自治会の人：ごみ出しや防災の連絡があるので、説明しますね。"],
            en: ["Resident: I moved to this district last month.", "Association Member: I see. Are you getting used to life here?", "Resident: I am gradually getting used to it, but I still do not know about the neighborhood association.", "Association Member: There are notices about garbage disposal and disaster prevention, so I will explain."],
            "zh-CN": ["居民：我上个月搬到这个地区。", "自治会人员：原来如此。您适应这里的生活了吗？", "居民：慢慢适应了，但我还不了解自治会。", "自治会人员：因为会有关于倒垃圾和防灾的通知，我来说明一下。"],
            "zh-TW": ["居民：我上個月搬到這個地區。", "自治會人員：原來如此。您適應這裡的生活了嗎？", "居民：慢慢適應了，但我還不了解自治會。", "自治會人員：因為會有關於倒垃圾和防災的通知，我來說明一下。"],
            ko: ["주민: 지난달에 이 지역으로 이사 왔습니다.", "자치회 사람: 그러셨군요. 이곳 생활에는 익숙해지셨나요?", "주민: 조금씩 익숙해지고 있지만 자치회에 대해서는 아직 잘 모릅니다.", "자치회 사람: 쓰레기 배출이나 방재 연락이 있으니 설명드릴게요."],
            vi: ["Cư dân: Tháng trước tôi đã chuyển đến khu này.", "Người của hội khu phố: Vậy à. Bạn đã quen với cuộc sống ở đây chưa?", "Cư dân: Tôi đã dần quen, nhưng vẫn chưa biết về hội khu phố.", "Người của hội khu phố: Vì có thông báo về đổ rác và phòng chống thiên tai, tôi sẽ giải thích nhé."],
            tl: ["Resident: Lumipat po ako sa lugar na ito noong nakaraang buwan.", "Association member: Ganoon po pala. Sanay na po ba kayo sa buhay dito?", "Resident: Unti-unti na po akong nasasanay, pero hindi ko pa alam ang tungkol sa neighborhood association.", "Association member: May mga notice tungkol sa garbage disposal at disaster prevention, kaya ipapaliwanag ko po."],
            id: ["Warga: Saya pindah ke daerah ini bulan lalu.", "Anggota asosiasi: Begitu ya. Apakah Anda sudah mulai terbiasa dengan kehidupan di sini?", "Warga: Saya mulai terbiasa sedikit demi sedikit, tetapi belum tahu tentang asosiasi lingkungan.", "Anggota asosiasi: Ada pemberitahuan tentang pembuangan sampah dan pencegahan bencana, jadi saya akan menjelaskan."],
            th: ["ผู้อยู่อาศัย: ฉัน/ผมย้ายมาที่เขตนี้เมื่อเดือนที่แล้วค่ะ/ครับ", "คนของสมาคมชุมชน: อย่างนั้นเอง เริ่มชินกับชีวิตที่นี่หรือยังคะ/ครับ", "ผู้อยู่อาศัย: ค่อย ๆ ชินแล้ว แต่ยังไม่รู้เรื่องสมาคมชุมชนค่ะ/ครับ", "คนของสมาคมชุมชน: มีการแจ้งเรื่องการทิ้งขยะและการป้องกันภัยพิบัติ เดี๋ยวจะอธิบายนะคะ/ครับ"],
            my: ["နေထိုင်သူ: ပြီးခဲ့တဲ့လက ဒီဒေသကို ပြောင်းလာပါတယ်။", "ရပ်ကွက်အသင်းမှလူ: အဲဒီလိုလား။ ဒီနေရာရဲ့ နေထိုင်မှုကို ကျင့်သားရလာပြီလား။", "နေထိုင်သူ: တဖြည်းဖြည်း ကျင့်သားရလာပေမယ့် ရပ်ကွက်အသင်းအကြောင်း မသိသေးပါဘူး။", "ရပ်ကွက်အသင်းမှလူ: အမှိုက်ထုတ်ခြင်းနဲ့ ဘေးအန္တရာယ်ကာကွယ်ရေး အကြောင်းကြားစာတွေ ရှိတာကြောင့် ရှင်းပြပါမယ်။"],
            km: ["អ្នករស់នៅ: ខ្ញុំបានផ្លាស់មកតំបន់នេះកាលពីខែមុន។", "សមាជិកសមាគមសហគមន៍: អ៊ីចឹងទេ។ តើអ្នកចាប់ផ្តើមស៊ាំនឹងជីវិតនៅទីនេះហើយឬនៅ?", "អ្នករស់នៅ: ខ្ញុំចាប់ផ្តើមស៊ាំបន្តិចម្តងៗហើយ ប៉ុន្តែមិនទាន់ដឹងអំពីសមាគមសហគមន៍ទេ។", "សមាជិកសមាគមសហគមន៍: ព្រោះមានការជូនដំណឹងអំពីការចោលសំរាម និងការពារគ្រោះមហន្តរាយ ខ្ញុំនឹងពន្យល់។"],
            ne: ["बासिन्दा: म गत महिना यो क्षेत्रमा सरेको हुँ।", "समुदाय संघका व्यक्ति: त्यसो रहेछ। यहाँको जीवनमा बानी पर्दै हुनुहुन्छ?", "बासिन्दा: बिस्तारै बानी पर्दै छु, तर समुदाय संघबारे अझै थाहा छैन।", "समुदाय संघका व्यक्ति: फोहोर फाल्ने र विपद् सम्बन्धी सूचना हुन्छ, त्यसैले म説明 गर्छु।"],
            mn: ["Оршин суугч: Би өнгөрсөн сард энэ дүүрэгт нүүж ирсэн.", "Холбооны гишүүн: Тийм үү. Эндхийн амьдралд дасаж байна уу?", "Оршин суугч: Бага багаар дасаж байгаа ч орон нутгийн холбооны талаар хараахан мэдэхгүй.", "Холбооны гишүүн: Хог гаргах болон гамшгаас хамгаалах тухай мэдээлэл байдаг тул тайлбарлая."],
            si: ["නිවැසියා: මම ගිය මාසේ මේ ප්‍රදේශයට පදිංචියට ආවා.", "සංගමයේ සාමාජිකයා: එහෙමද. මෙහි ජීවිතයට පුරුදු වෙලාද?", "නිවැසියා: ටිකෙන් ටික පුරුදු වෙලා තියෙනවා, නමුත්自治会 ගැන තවම දන්නේ නැහැ.", "සංගමයේ සාමාජිකයා: garbage disposal සහ disaster prevention ගැන notices තියෙන නිසා පැහැදිලි කරන්නම්."],
            bn: ["বাসিন্দা: আমি গত মাসে এই এলাকায় এসেছি।", "সমিতির সদস্য: তাই নাকি। এখানে জীবনে অভ্যস্ত হচ্ছেন?", "বাসিন্দা: ধীরে ধীরে অভ্যস্ত হচ্ছি, কিন্তু自治会 সম্পর্কে এখনও জানি না।", "সমিতির সদস্য: আবর্জনা ফেলা এবং দুর্যোগ প্রতিরোধের খবর থাকে, তাই আমি ব্যাখ্যা করব।"],
            pt: ["Morador: Mudei-me para este bairro no mês passado.", "Membro da associação: Entendi. Já está se acostumando à vida aqui?", "Morador: Estou me acostumando aos poucos, mas ainda não conheço a associação de bairro.", "Membro da associação: Há avisos sobre lixo e prevenção de desastres, então vou explicar."],
            es: ["Residente: Me mudé a este distrito el mes pasado.", "Miembro de la asociación: Entiendo. ¿Ya se está acostumbrando a la vida aquí?", "Residente: Me estoy acostumbrando poco a poco, pero todavía no conozco la asociación vecinal.", "Miembro de la asociación: Hay avisos sobre la basura y la prevención de desastres, así que se lo explicaré."],
            fr: ["Habitant : J’ai emménagé dans ce quartier le mois dernier.", "Membre de l’association : Je vois. Vous vous habituez à la vie ici ?", "Habitant : Je m’y habitue peu à peu, mais je ne connais pas encore l’association de quartier.", "Membre de l’association : Il y a des informations sur les déchets et la prévention des catastrophes, donc je vais vous expliquer."],
            ru: ["Житель: Я переехал в этот район в прошлом месяце.", "Член объединения: Понятно. Вы уже привыкаете к жизни здесь?", "Житель: Постепенно привыкаю, но ещё не знаю о районном объединении.", "Член объединения: Есть уведомления о выносе мусора и защите от бедствий, поэтому я объясню."],
            uk: ["Мешканець: Я переїхав у цей район минулого місяця.", "Член об’єднання: Зрозуміло. Ви вже звикаєте до життя тут?", "Мешканець: Поступово звикаю, але ще не знаю про районне об’єднання.", "Член об’єднання: Є повідомлення про винесення сміття та безпеку під час лих, тому я поясню."]
        }
    ),

    makeA2NeighborhoodAssociationDialogue(
        "a2_jichikai_002",
        "自治会費について聞く",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "自治会費は毎月いくらですか。",
                target: "じちかいひはまいつきいくらですか",
                ruby: "<ruby>自治会費<rt>じちかいひ</rt></ruby>は<ruby>毎月<rt>まいつき</rt></ruby>いくらですか。",
                romaji: "Jichikaihi wa maitsuki ikura desu ka."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "この地区では、一か月三百円です。",
                target: "このちくでは いっかげつさんびゃくえんです",
                ruby: "この<ruby>地区<rt>ちく</rt></ruby>では、<ruby>一<rt>いっ</rt></ruby>か<ruby>月<rt>げつ</rt></ruby><ruby>三百円<rt>さんびゃくえん</rt></ruby>です。",
                romaji: "Kono chiku de wa, ikkagetsu sanbyaku-en desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "支払いは現金だけでしょうか。",
                target: "しはらいはげんきんだけでしょうか",
                ruby: "<ruby>支払<rt>しはら</rt></ruby>いは<ruby>現金<rt>げんきん</rt></ruby>だけでしょうか。",
                romaji: "Shiharai wa genkin dake deshō ka."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "基本は現金ですが、半年分をまとめて払うこともできます。",
                target: "きほんはげんきんですが はんとしぶんをまとめてはらうこともできます",
                ruby: "<ruby>基本<rt>きほん</rt></ruby>は<ruby>現金<rt>げんきん</rt></ruby>ですが、<ruby>半年分<rt>はんとしぶん</rt></ruby>をまとめて<ruby>払<rt>はら</rt></ruby>うこともできます。",
                romaji: "Kihon wa genkin desu ga, hantoshi-bun o matomete harau koto mo dekimasu."
            }
        ],
        {
            ja: ["住民：自治会費は毎月いくらですか。", "自治会の人：この地区では、一か月三百円です。", "住民：支払いは現金だけでしょうか。", "自治会の人：基本は現金ですが、半年分をまとめて払うこともできます。"],
            en: ["Resident: How much is the neighborhood association fee each month?", "Association Member: In this district, it is 300 yen per month.", "Resident: Is payment only in cash?", "Association Member: Cash is the basic method, but you can also pay for six months together."],
            "zh-CN": ["居民：自治会费每月多少钱？", "自治会人员：这个地区是一个月三百日元。", "居民：只能用现金支付吗？", "自治会人员：基本上是现金，但也可以一次支付半年的费用。"],
            "zh-TW": ["居民：自治會費每月多少錢？", "自治會人員：這個地區是一個月三百日圓。", "居民：只能用現金支付嗎？", "自治會人員：基本上是現金，但也可以一次支付半年的費用。"],
            ko: ["주민: 자치회비는 매월 얼마인가요?", "자치회 사람: 이 지역에서는 한 달에 300엔입니다.", "주민: 지불은 현금만 가능한가요?", "자치회 사람: 기본은 현금이지만 반년 치를 한꺼번에 낼 수도 있습니다."],
            vi: ["Cư dân: Phí hội khu phố mỗi tháng là bao nhiêu ạ?", "Người của hội khu phố: Ở khu này là 300 yên một tháng.", "Cư dân: Chỉ có thể trả bằng tiền mặt thôi ạ?", "Người của hội khu phố: Cơ bản là tiền mặt, nhưng cũng có thể trả gộp nửa năm."],
            tl: ["Resident: Magkano po ang monthly fee ng neighborhood association?", "Association member: Sa district na ito, 300 yen po kada buwan.", "Resident: Cash lang po ba ang payment?", "Association member: Karaniwan ay cash, pero puwede ring bayaran nang sabay ang anim na buwan."],
            id: ["Warga: Berapa iuran asosiasi lingkungan setiap bulan?", "Anggota asosiasi: Di daerah ini, 300 yen per bulan.", "Warga: Apakah pembayarannya hanya tunai?", "Anggota asosiasi: Pada dasarnya tunai, tetapi bisa juga membayar sekaligus untuk enam bulan."],
            th: ["ผู้อยู่อาศัย: ค่าสมาคมชุมชนเดือนละเท่าไรคะ/ครับ", "คนของสมาคมชุมชน: เขตนี้เดือนละ 300 เยนค่ะ/ครับ", "ผู้อยู่อาศัย: ชำระด้วยเงินสดเท่านั้นหรือคะ/ครับ", "คนของสมาคมชุมชน: โดยพื้นฐานเป็นเงินสด แต่สามารถจ่ายรวมครึ่งปีได้ค่ะ/ครับ"],
            my: ["နေထိုင်သူ: ရပ်ကွက်အသင်းကြေးက တစ်လ ဘယ်လောက်ပါလဲ။", "ရပ်ကွက်အသင်းမှလူ: ဒီဒေသမှာ တစ်လ ၃၀၀ ယန်းပါ။", "နေထိုင်သူ: ငွေသားနဲ့ပဲ ပေးရပါသလား။", "ရပ်ကွက်အသင်းမှလူ: အခြေခံအားဖြင့် ငွေသားပါ၊ ဒါပေမယ့် ခြောက်လစာကို စုပြီး ပေးလည်းရပါတယ်။"],
            km: ["អ្នករស់នៅ: តើថ្លៃសមាជិកសមាគមសហគមន៍ក្នុងមួយខែប៉ុន្មាន?", "សមាជិកសមាគមសហគមន៍: នៅតំបន់នេះ មួយខែ 300 យ៉េន។", "អ្នករស់នៅ: តើបង់ប្រាក់ជាសាច់ប្រាក់តែមួយមុខទេ?", "សមាជិកសមាគមសហគមន៍: ជាទូទៅបង់សាច់ប្រាក់ ប៉ុន្តែអាចបង់រួមសម្រាប់កន្លះឆ្នាំបានដែរ។"],
            ne: ["बासिन्दा: समुदाय संघको शुल्क मासिक कति हो?", "समुदाय संघका व्यक्ति: यो क्षेत्रमा एक महिनाको ३०० येन हो।", "बासिन्दा: भुक्तानी नगदमात्र हो?", "समुदाय संघका व्यक्ति: आधारभूत रूपमा नगद हो, तर छ महिनाको एकैपटक तिर्न पनि सकिन्छ।"],
            mn: ["Оршин суугч: Орон нутгийн холбооны хураамж сар бүр хэд вэ?", "Холбооны гишүүн: Энэ дүүрэгт сард 300 иен.", "Оршин суугч: Зөвхөн бэлнээр төлөх үү?", "Холбооны гишүүн: Үндсэндээ бэлнээр, гэхдээ хагас жилийн төлбөрийг нэг дор төлж болно."],
            si: ["නිවැසියා:自治会 fee එක මාසයකට කීයද?", "සංගමයේ සාමාජිකයා: මේ ප්‍රදේශයේ මාසයකට yen 300යි.", "නිවැසියා: ගෙවීම cash විතරද?", "සංගමයේ සාමාජිකයා: මූලිකව cash නමුත් මාස හයක මුදල එකවර ගෙවිය හැක."],
            bn: ["বাসিন্দা: পাড়া সমিতির ফি মাসে কত?", "সমিতির সদস্য: এই এলাকায় মাসে ৩০০ ইয়েন।", "বাসিন্দা: পেমেন্ট কি শুধু নগদে?", "সমিতির সদস্য: সাধারণত নগদ, তবে ছয় মাসের টাকা একসঙ্গে দেওয়া যায়।"],
            pt: ["Morador: Quanto é a taxa da associação de bairro por mês?", "Membro da associação: Neste distrito, é 300 ienes por mês.", "Morador: O pagamento é apenas em dinheiro?", "Membro da associação: Basicamente é em dinheiro, mas também é possível pagar seis meses de uma vez."],
            es: ["Residente: ¿Cuánto cuesta la cuota de la asociación vecinal al mes?", "Miembro de la asociación: En este distrito son 300 yenes al mes.", "Residente: ¿El pago es solo en efectivo?", "Miembro de la asociación: Básicamente es en efectivo, pero también puede pagar seis meses juntos."],
            fr: ["Habitant : Combien coûte la cotisation de l’association de quartier par mois ?", "Membre de l’association : Dans ce quartier, c’est 300 yens par mois.", "Habitant : Le paiement se fait-il seulement en espèces ?", "Membre de l’association : En principe, c’est en espèces, mais vous pouvez aussi payer six mois en une fois."],
            ru: ["Житель: Сколько стоит взнос в районное объединение в месяц?", "Член объединения: В этом районе 300 иен в месяц.", "Житель: Оплата только наличными?", "Член объединения: Обычно наличными, но можно заплатить сразу за полгода."],
            uk: ["Мешканець: Скільки коштує внесок до районного об’єднання на місяць?", "Член об’єднання: У цьому районі 300 єн на місяць.", "Мешканець: Оплата лише готівкою?", "Член об’єднання: Зазвичай готівкою, але можна заплатити одразу за пів року."]
        }
    ),

    makeA2NeighborhoodAssociationDialogue(
        "a2_jichikai_003",
        "回覧板の回し方を聞く",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "回覧板が来たら、どうすればいいですか。",
                target: "かいらんばんがきたら どうすればいいですか",
                ruby: "<ruby>回覧板<rt>かいらんばん</rt></ruby>が<ruby>来<rt>き</rt></ruby>たら、どうすればいいですか。",
                romaji: "Kairanban ga kitara, dō sureba ii desu ka."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "中の紙を読んで、確認の印を付けてください。",
                target: "なかのかみをよんで かくにんのしるしをつけてください",
                ruby: "<ruby>中<rt>なか</rt></ruby>の<ruby>紙<rt>かみ</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んで、<ruby>確認<rt>かくにん</rt></ruby>の<ruby>印<rt>しるし</rt></ruby>を<ruby>付<rt>つ</rt></ruby>けてください。",
                romaji: "Naka no kami o yonde, kakunin no shirushi o tsukete kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "読んだあとは、隣の家に持って行きますか。",
                target: "よんだあとは となりのいえにもっていきますか",
                ruby: "<ruby>読<rt>よ</rt></ruby>んだあとは、<ruby>隣<rt>となり</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>に<ruby>持<rt>も</rt></ruby>って<ruby>行<rt>い</rt></ruby>きますか。",
                romaji: "Yonda ato wa, tonari no ie ni motte ikimasu ka."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "はい。留守なら、郵便受けに入れてもかまいません。",
                target: "はい るすなら ゆうびんうけにいれてもかまいません",
                ruby: "はい。<ruby>留守<rt>るす</rt></ruby>なら、<ruby>郵便受<rt>ゆうびんう</rt></ruby>けに<ruby>入<rt>い</rt></ruby>れてもかまいません。",
                romaji: "Hai. Rusu nara, yūbin-uke ni irete mo kamaimasen."
            }
        ],
        {
            ja: ["住民：回覧板が来たら、どうすればいいですか。", "自治会の人：中の紙を読んで、確認の印を付けてください。", "住民：読んだあとは、隣の家に持って行きますか。", "自治会の人：はい。留守なら、郵便受けに入れてもかまいません。"],
            en: ["Resident: What should I do when the circular notice board comes?", "Association Member: Please read the papers inside and put a mark to show you checked them.", "Resident: After reading it, should I take it to the next house?", "Association Member: Yes. If they are not home, you may put it in the mailbox."],
            "zh-CN": ["居民：传阅板来了以后，我该怎么做？", "自治会人员：请阅读里面的纸，然后做一个确认标记。", "居民：读完以后，要拿到邻居家吗？", "自治会人员：是的。如果对方不在家，可以放进信箱。"],
            "zh-TW": ["居民：傳閱板來了以後，我該怎麼做？", "自治會人員：請閱讀裡面的紙，然後做一個確認標記。", "居民：讀完以後，要拿到鄰居家嗎？", "自治會人員：是的。如果對方不在家，可以放進信箱。"],
            ko: ["주민: 회람판이 오면 어떻게 하면 되나요?", "자치회 사람: 안의 종이를 읽고 확인 표시를 해 주세요.", "주민: 읽은 후에는 옆집에 가져가나요?", "자치회 사람: 네. 부재중이면 우편함에 넣어도 괜찮습니다."],
            vi: ["Cư dân: Khi bảng thông báo chuyền tay đến thì tôi nên làm gì?", "Người của hội khu phố: Hãy đọc giấy bên trong và đánh dấu xác nhận.", "Cư dân: Sau khi đọc xong, tôi mang sang nhà bên cạnh phải không ạ?", "Người của hội khu phố: Vâng. Nếu họ vắng nhà, bạn có thể bỏ vào hòm thư."],
            tl: ["Resident: Ano po ang gagawin kapag dumating ang circular notice board?", "Association member: Basahin po ang papel sa loob at lagyan ng mark na nacheck na.", "Resident: Pagkatapos basahin, dadalhin ko po ba sa katabing bahay?", "Association member: Oo. Kung wala sila sa bahay, puwede pong ilagay sa mailbox."],
            id: ["Warga: Apa yang harus saya lakukan ketika papan edaran datang?", "Anggota asosiasi: Bacalah kertas di dalamnya dan beri tanda bahwa sudah diperiksa.", "Warga: Setelah membacanya, apakah saya membawanya ke rumah sebelah?", "Anggota asosiasi: Ya. Kalau tidak ada orang di rumah, boleh dimasukkan ke kotak pos."],
            th: ["ผู้อยู่อาศัย: ถ้าเอกสารเวียนมาถึง ควรทำอย่างไรคะ/ครับ", "คนของสมาคมชุมชน: อ่านเอกสารข้างในแล้วทำเครื่องหมายยืนยันค่ะ/ครับ", "ผู้อยู่อาศัย: หลังอ่านแล้ว เอาไปให้บ้านข้าง ๆ ใช่ไหมคะ/ครับ", "คนของสมาคมชุมชน: ใช่ค่ะ/ครับ ถ้าไม่อยู่บ้าน ใส่ไว้ในตู้ไปรษณีย์ก็ได้ค่ะ/ครับ"],
            my: ["နေထိုင်သူ: လှည့်ပို့စာရောက်လာရင် ဘာလုပ်ရမလဲ။", "ရပ်ကွက်အသင်းမှလူ: အထဲက စာရွက်ကို ဖတ်ပြီး စစ်ပြီးကြောင်း အမှတ်ပေးပါ။", "နေထိုင်သူ: ဖတ်ပြီးရင် ဘေးအိမ်ကို ယူသွားရပါသလား။", "ရပ်ကွက်အသင်းမှလူ: ဟုတ်ကဲ့။ မရှိဘူးဆိုရင် စာတိုက်ပုံးထဲ ထည့်လည်းရပါတယ်။"],
            km: ["អ្នករស់នៅ: ពេលសេចក្តីជូនដំណឹងបង្វិលមក តើខ្ញុំត្រូវធ្វើអ្វី?", "សមាជិកសមាគមសហគមន៍: សូមអានក្រដាសខាងក្នុង ហើយដាក់សញ្ញាបញ្ជាក់។", "អ្នករស់នៅ: បន្ទាប់ពីអានហើយ តើត្រូវយកទៅផ្ទះជាប់គ្នាទេ?", "សមាជិកសមាគមសហគមន៍: បាទ/ចាស។ ប្រសិនបើមិននៅផ្ទះ អាចដាក់ក្នុងប្រអប់សំបុត្របាន។"],
            ne: ["बासिन्दा: घुम्ती सूचना आएपछि के गर्ने?", "समुदाय संघका व्यक्ति: भित्रको कागज पढेर पुष्टि चिन्ह लगाउनुहोस्।", "बासिन्दा: पढेपछि छेउको घरमा लैजाने हो?", "समुदाय संघका व्यक्ति: हो। घरमा कोही नभए पोस्टबक्समा राखे पनि हुन्छ।"],
            mn: ["Оршин суугч: Эргэлтийн мэдэгдэл ирвэл яах вэ?", "Холбооны гишүүн: Доторх цаасыг уншаад шалгасан тэмдэг тавина уу.", "Оршин суугч: Уншсаны дараа хөрш айлд аваачих уу?", "Холбооны гишүүн: Тийм. Эзгүй бол шуудангийн хайрцагт хийж болно."],
            si: ["නිවැසියා: circular notice board එක ආවොත් මොකද කරන්නෙ?", "සංගමයේ සාමාජිකයා: ඇතුළේ කඩදාසි කියවලා check කළ බව mark එකක් දාන්න.", "නිවැසියා: කියවලා ඉවර වුණාම අසල්වැසි ගෙදරට ගෙනියන්නද?", "සංගමයේ සාමාජිකයා: ඔව්. ගෙදර නැත්නම් mailbox එකට දාන්න පුළුවන්."],
            bn: ["বাসিন্দা: ঘুরে-ঘুরে দেওয়া নোটিশ এলে কী করব?", "সমিতির সদস্য: ভেতরের কাগজ পড়ে নিশ্চিতকরণের চিহ্ন দিন।", "বাসিন্দা: পড়ার পর পাশের বাড়িতে নিয়ে যাব?", "সমিতির সদস্য: হ্যাঁ। তারা বাড়িতে না থাকলে মেইলবক্সে দিতে পারেন।"],
            pt: ["Morador: O que devo fazer quando chegar o aviso circular?", "Membro da associação: Leia os papéis dentro e marque que confirmou.", "Morador: Depois de ler, devo levar para a casa ao lado?", "Membro da associação: Sim. Se não houver ninguém, pode colocar na caixa de correio."],
            es: ["Residente: ¿Qué debo hacer cuando llegue el aviso circular?", "Miembro de la asociación: Lea los papeles de dentro y marque que los revisó.", "Residente: Después de leerlo, ¿lo llevo a la casa de al lado?", "Miembro de la asociación: Sí. Si no hay nadie en casa, puede ponerlo en el buzón."],
            fr: ["Habitant : Que dois-je faire quand l’avis circulaire arrive ?", "Membre de l’association : Lisez les papiers à l’intérieur et mettez une marque de confirmation.", "Habitant : Après l’avoir lu, dois-je l’apporter à la maison voisine ?", "Membre de l’association : Oui. S’ils ne sont pas là, vous pouvez le mettre dans la boîte aux lettres."],
            ru: ["Житель: Что делать, когда придёт круговое уведомление?", "Член объединения: Прочитайте бумаги внутри и поставьте отметку о подтверждении.", "Житель: После прочтения нужно отнести в соседний дом?", "Член объединения: Да. Если никого нет дома, можно положить в почтовый ящик."],
            uk: ["Мешканець: Що робити, коли прийде кругове повідомлення?", "Член об’єднання: Прочитайте папери всередині та поставте позначку про підтвердження.", "Мешканець: Після прочитання потрібно віднести до сусіднього будинку?", "Член об’єднання: Так. Якщо нікого немає вдома, можна покласти в поштову скриньку."]
        }
    ),

    makeA2NeighborhoodAssociationDialogue(
        "a2_jichikai_004",
        "ごみ当番を確認する",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "ごみ置き場の当番はありますか。",
                target: "ごみおきばのとうばんはありますか",
                ruby: "ごみ<ruby>置<rt>お</rt></ruby>き<ruby>場<rt>ば</rt></ruby>の<ruby>当番<rt>とうばん</rt></ruby>はありますか。",
                romaji: "Gomi okiba no tōban wa arimasu ka."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "はい。月に一度、ネットを片付ける当番があります。",
                target: "はい つきにいちど ねっとをかたづけるとうばんがあります",
                ruby: "はい。<ruby>月<rt>つき</rt></ruby>に<ruby>一度<rt>いちど</rt></ruby>、ネットを<ruby>片付<rt>かたづ</rt></ruby>ける<ruby>当番<rt>とうばん</rt></ruby>があります。",
                romaji: "Hai. Tsuki ni ichido, netto o katazukeru tōban ga arimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "仕事の日と重なった場合は、どうしたらいいですか。",
                target: "しごとのひとかさなったばあいは どうしたらいいですか",
                ruby: "<ruby>仕事<rt>しごと</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>と<ruby>重<rt>かさ</rt></ruby>なった<ruby>場合<rt>ばあい</rt></ruby>は、どうしたらいいですか。",
                romaji: "Shigoto no hi to kasanatta baai wa, dō shitara ii desu ka."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "早めに言ってもらえれば、順番を替えられます。",
                target: "はやめにいってもらえれば じゅんばんをかえられます",
                ruby: "<ruby>早<rt>はや</rt></ruby>めに<ruby>言<rt>い</rt></ruby>ってもらえれば、<ruby>順番<rt>じゅんばん</rt></ruby>を<ruby>替<rt>か</rt></ruby>えられます。",
                romaji: "Hayame ni itte moraereba, junban o kaeraremasu."
            }
        ],
        {
            ja: ["住民：ごみ置き場の当番はありますか。", "自治会の人：はい。月に一度、ネットを片付ける当番があります。", "住民：仕事の日と重なった場合は、どうしたらいいですか。", "自治会の人：早めに言ってもらえれば、順番を替えられます。"],
            en: ["Resident: Is there a duty for the garbage collection area?", "Association Member: Yes. Once a month, there is a duty to put away the net.", "Resident: What should I do if it falls on a workday?", "Association Member: If you tell us early, we can change the order."],
            "zh-CN": ["居民：垃圾放置处有值日吗？", "自治会人员：有。每月一次，需要负责收拾防鸟网。", "居民：如果和上班日重合，该怎么办？", "自治会人员：如果您提前告诉我们，可以调整顺序。"],
            "zh-TW": ["居民：垃圾放置處有值日嗎？", "自治會人員：有。每月一次，需要負責收拾防鳥網。", "居民：如果和上班日重合，該怎麼辦？", "自治會人員：如果您提前告訴我們，可以調整順序。"],
            ko: ["주민: 쓰레기장 당번이 있나요?", "자치회 사람: 네. 한 달에 한 번, 그물을 정리하는 당번이 있습니다.", "주민: 근무일과 겹친 경우에는 어떻게 하면 되나요?", "자치회 사람: 미리 말씀해 주시면 순서를 바꿀 수 있습니다."],
            vi: ["Cư dân: Có phiên trực ở điểm bỏ rác không ạ?", "Người của hội khu phố: Có. Mỗi tháng một lần có phiên dọn lưới che rác.", "Cư dân: Nếu trùng với ngày đi làm thì tôi nên làm thế nào?", "Người của hội khu phố: Nếu báo sớm, chúng tôi có thể đổi thứ tự."],
            tl: ["Resident: May duty po ba sa garbage collection area?", "Association member: Oo. Minsan sa isang buwan, may duty na magligpit ng net.", "Resident: Ano po ang gagawin kung natapat sa araw ng trabaho?", "Association member: Kung sasabihin po nang maaga, puwede naming palitan ang order."],
            id: ["Warga: Apakah ada jadwal tugas di tempat sampah?", "Anggota asosiasi: Ya. Sekali sebulan ada tugas membereskan jaring.", "Warga: Jika bertepatan dengan hari kerja, apa yang harus saya lakukan?", "Anggota asosiasi: Kalau memberi tahu lebih awal, urutannya bisa diganti."],
            th: ["ผู้อยู่อาศัย: มีเวรดูแลจุดทิ้งขยะไหมคะ/ครับ", "คนของสมาคมชุมชน: มีค่ะ/ครับ เดือนละครั้งมีเวรเก็บตาข่ายค่ะ/ครับ", "ผู้อยู่อาศัย: ถ้าตรงกับวันทำงานควรทำอย่างไรคะ/ครับ", "คนของสมาคมชุมชน: ถ้าแจ้งล่วงหน้า เราสามารถเปลี่ยนลำดับได้ค่ะ/ครับ"],
            my: ["နေထိုင်သူ: အမှိုက်ထားရာနေရာအတွက် တာဝန်ရှိပါသလား။", "ရပ်ကွက်အသင်းမှလူ: ရှိပါတယ်။ တစ်လတစ်ကြိမ် net ကို သိမ်းရတဲ့ တာဝန်ရှိပါတယ်။", "နေထိုင်သူ: အလုပ်နေ့နဲ့ တိုက်နေရင် ဘာလုပ်ရမလဲ။", "ရပ်ကွက်အသင်းမှလူ: ကြိုပြောပေးရင် အလှည့်ကို ပြောင်းလို့ရပါတယ်။"],
            km: ["អ្នករស់នៅ: តើមានវេននៅកន្លែងដាក់សំរាមទេ?", "សមាជិកសមាគមសហគមន៍: មាន។ មួយខែម្តង មានវេនរៀបចំបណ្តាញ។", "អ្នករស់នៅ: ប្រសិនបើវាត្រូវនឹងថ្ងៃធ្វើការ តើខ្ញុំត្រូវធ្វើដូចម្តេច?", "សមាជិកសមាគមសហគមន៍: ប្រសិនបើប្រាប់មុន យើងអាចប្តូរលំដាប់បាន។"],
            ne: ["बासिन्दा: फोहोर राख्ने ठाउँको पालो हुन्छ?", "समुदाय संघका व्यक्ति: हुन्छ। महिनामा एकपटक नेट मिलाउने पालो हुन्छ।", "बासिन्दा: कामको दिनसँग जुध्यो भने के गर्ने?", "समुदाय संघका व्यक्ति: छिट्टै भन्नुभयो भने पालो परिवर्तन गर्न सकिन्छ।"],
            mn: ["Оршин суугч: Хогийн цэгийн ээлж байдаг уу?", "Холбооны гишүүн: Тийм. Сард нэг удаа торыг хураах ээлж байдаг.", "Оршин суугч: Ажлын өдөртэй давхцвал яах вэ?", "Холбооны гишүүн: Эрт хэлбэл дарааллыг сольж болно."],
            si: ["නිවැසියා: garbage area එකේ duty එකක් තියෙනවද?", "සංගමයේ සාමාජිකයා: ඔව්. මාසයකට වරක් net එක සකස් කරන duty එකක් තියෙනවා.", "නිවැසියා: වැඩ කරන දවසකට වැටුණොත් මොකද කරන්නේ?", "සංගමයේ සාමාජිකයා: කලින් කියලා දුන්නොත් order එක වෙනස් කරන්න පුළුවන්."],
            bn: ["বাসিন্দা: আবর্জনা রাখার জায়গার দায়িত্ব আছে?", "সমিতির সদস্য: হ্যাঁ। মাসে একবার নেট গুছানোর দায়িত্ব আছে।", "বাসিন্দা: কাজের দিনের সঙ্গে মিলে গেলে কী করব?", "সমিতির সদস্য: আগে জানালে পালা বদলানো যায়।"],
            pt: ["Morador: Existe turno para o local de lixo?", "Membro da associação: Sim. Uma vez por mês há um turno para guardar a rede.", "Morador: O que devo fazer se coincidir com um dia de trabalho?", "Membro da associação: Se avisar com antecedência, podemos trocar a ordem."],
            es: ["Residente: ¿Hay turno para el área de basura?", "Miembro de la asociación: Sí. Una vez al mes hay un turno para guardar la red.", "Residente: ¿Qué debo hacer si coincide con un día de trabajo?", "Miembro de la asociación: Si nos avisa con tiempo, podemos cambiar el turno."],
            fr: ["Habitant : Y a-t-il un tour pour l’espace de collecte des déchets ?", "Membre de l’association : Oui. Une fois par mois, il y a un tour pour ranger le filet.", "Habitant : Que dois-je faire si cela tombe un jour de travail ?", "Membre de l’association : Si vous nous prévenez tôt, nous pouvons changer l’ordre."],
            ru: ["Житель: Есть ли дежурство у места сбора мусора?", "Член объединения: Да. Раз в месяц есть дежурство по уборке сетки.", "Житель: Что делать, если это совпадёт с рабочим днём?", "Член объединения: Если сообщите заранее, можно поменять очередь."],
            uk: ["Мешканець: Чи є чергування біля місця збору сміття?", "Член об’єднання: Так. Раз на місяць є чергування з прибирання сітки.", "Мешканець: Що робити, якщо це збігається з робочим днем?", "Член об’єднання: Якщо повідомите заздалегідь, можна змінити чергу."]
        }
    ),

    makeA2NeighborhoodAssociationDialogue(
        "a2_jichikai_005",
        "清掃活動に参加する",
        [
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "来週の日曜日に、町内の清掃があります。",
                target: "らいしゅうのにちようびに ちょうないのせいそうがあります",
                ruby: "<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>日曜日<rt>にちようび</rt></ruby>に、<ruby>町内<rt>ちょうない</rt></ruby>の<ruby>清掃<rt>せいそう</rt></ruby>があります。",
                romaji: "Raishū no nichiyōbi ni, chōnai no seisō ga arimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "何時から始まりますか。",
                target: "なんじからはじまりますか",
                ruby: "<ruby>何時<rt>なんじ</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>まりますか。",
                romaji: "Nanji kara hajimarimasu ka."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "朝八時に公園へ集まります。",
                target: "あさはちじにこうえんへあつまります",
                ruby: "<ruby>朝八時<rt>あさはちじ</rt></ruby>に<ruby>公園<rt>こうえん</rt></ruby>へ<ruby>集<rt>あつ</rt></ruby>まります。",
                romaji: "Asa hachi-ji ni kōen e atsumarimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "軍手やごみ袋は自分で用意した方がいいですか。",
                target: "ぐんてやごみぶくろはじぶんでよういしたほうがいいですか",
                ruby: "<ruby>軍手<rt>ぐんて</rt></ruby>やごみ<ruby>袋<rt>ぶくろ</rt></ruby>は<ruby>自分<rt>じぶん</rt></ruby>で<ruby>用意<rt>ようい</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Gunte ya gomi-bukuro wa jibun de yōi shita hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "ごみ袋はこちらで用意します。軍手だけお願いします。",
                target: "ごみぶくろはこちらでよういします ぐんてだけおねがいします",
                ruby: "ごみ<ruby>袋<rt>ぶくろ</rt></ruby>はこちらで<ruby>用意<rt>ようい</rt></ruby>します。<ruby>軍手<rt>ぐんて</rt></ruby>だけお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Gomi-bukuro wa kochira de yōi shimasu. Gunte dake onegai shimasu."
            }
        ],
        {
            ja: ["自治会の人：来週の日曜日に、町内の清掃があります。", "住民：何時から始まりますか。", "自治会の人：朝八時に公園へ集まります。", "住民：軍手やごみ袋は自分で用意した方がいいですか。", "自治会の人：ごみ袋はこちらで用意します。軍手だけお願いします。"],
            en: ["Association Member: Next Sunday, there will be a neighborhood cleaning activity.", "Resident: What time does it start?", "Association Member: We will gather at the park at 8 a.m.", "Resident: Should I prepare work gloves and garbage bags myself?", "Association Member: We will prepare the garbage bags. Please bring only work gloves."],
            "zh-CN": ["自治会人员：下周星期日有町内清扫活动。", "居民：几点开始？", "自治会人员：早上八点在公园集合。", "居民：工作手套和垃圾袋需要自己准备吗？", "自治会人员：垃圾袋由我们准备。只请您带工作手套。"],
            "zh-TW": ["自治會人員：下週星期日有町內清掃活動。", "居民：幾點開始？", "自治會人員：早上八點在公園集合。", "居民：工作手套和垃圾袋需要自己準備嗎？", "自治會人員：垃圾袋由我們準備。只請您帶工作手套。"],
            ko: ["자치회 사람: 다음 주 일요일에 마을 청소가 있습니다.", "주민: 몇 시부터 시작하나요?", "자치회 사람: 아침 8시에 공원에 모입니다.", "주민: 목장갑이나 쓰레기봉투는 제가 준비하는 것이 좋나요?", "자치회 사람: 쓰레기봉투는 저희가 준비합니다. 목장갑만 부탁드립니다."],
            vi: ["Người của hội khu phố: Chủ nhật tuần sau sẽ có hoạt động dọn dẹp trong khu.", "Cư dân: Mấy giờ bắt đầu ạ?", "Người của hội khu phố: Chúng ta tập trung ở công viên lúc 8 giờ sáng.", "Cư dân: Tôi nên tự chuẩn bị găng tay lao động và túi rác không ạ?", "Người của hội khu phố: Túi rác chúng tôi sẽ chuẩn bị. Chỉ cần mang găng tay thôi ạ."],
            tl: ["Association member: Sa susunod na Linggo, may neighborhood cleaning activity.", "Resident: Anong oras po magsisimula?", "Association member: Magtitipon po sa park ng 8 a.m.", "Resident: Ako po ba ang maghahanda ng work gloves at garbage bags?", "Association member: Kami po ang maghahanda ng garbage bags. Work gloves lang po ang pakidala."],
            id: ["Anggota asosiasi: Minggu depan akan ada kegiatan bersih-bersih lingkungan.", "Warga: Mulai jam berapa?", "Anggota asosiasi: Kita berkumpul di taman pukul 8 pagi.", "Warga: Apakah saya sebaiknya menyiapkan sarung tangan kerja dan kantong sampah sendiri?", "Anggota asosiasi: Kantong sampah kami siapkan. Tolong bawa sarung tangan kerja saja."],
            th: ["คนของสมาคมชุมชน: วันอาทิตย์หน้า มีการทำความสะอาดในชุมชนค่ะ/ครับ", "ผู้อยู่อาศัย: เริ่มกี่โมงคะ/ครับ", "คนของสมาคมชุมชน: รวมตัวกันที่สวนสาธารณะตอน 8 โมงเช้าค่ะ/ครับ", "ผู้อยู่อาศัย: ถุงมือทำงานและถุงขยะควรเตรียมเองไหมคะ/ครับ", "คนของสมาคมชุมชน: ถุงขยะทางเราจะเตรียมให้ค่ะ/ครับ กรุณานำถุงมือมาเท่านั้นค่ะ/ครับ"],
            my: ["ရပ်ကွက်အသင်းမှလူ: နောက်အပတ် တနင်္ဂနွေနေ့မှာ ရပ်ကွက်သန့်ရှင်းရေးရှိပါတယ်။", "နေထိုင်သူ: ဘယ်နှစ်နာရီက စပါသလဲ။", "ရပ်ကွက်အသင်းမှလူ: မနက် ၈ နာရီမှာ ပန်းခြံမှာ စုပါမယ်။", "နေထိုင်သူ: လက်အိတ်နဲ့ အမှိုက်အိတ်ကို ကိုယ်တိုင် ပြင်ဆင်ရပါသလား။", "ရပ်ကွက်အသင်းမှလူ: အမှိုက်အိတ်ကို ဒီဘက်က ပြင်ဆင်ပါမယ်။ လက်အိတ်ပဲ ယူလာပေးပါ။"],
            km: ["សមាជិកសមាគមសហគមន៍: ថ្ងៃអាទិត្យសប្តាហ៍ក្រោយ មានការសម្អាតក្នុងតំបន់។", "អ្នករស់នៅ: ចាប់ផ្តើមម៉ោងប៉ុន្មាន?", "សមាជិកសមាគមសហគមន៍: យើងនឹងជួបគ្នានៅសួនច្បារម៉ោង 8 ព្រឹក។", "អ្នករស់នៅ: តើខ្ញុំគួររៀបចំស្រោមដៃ និងថង់សំរាមដោយខ្លួនឯងទេ?", "សមាជិកសមាគមសហគមន៍: ថង់សំរាមយើងនឹងរៀបចំ។ សូមយកតែស្រោមដៃមក។"],
            ne: ["समुदाय संघका व्यक्ति: अर्को आइतबार टोल सरसफाइ छ।", "बासिन्दा: कति बजेदेखि सुरु हुन्छ?", "समुदाय संघका व्यक्ति: बिहान ८ बजे पार्कमा जम्मा हुन्छौं।", "बासिन्दा: काम गर्ने पन्जा र फोहोर झोला आफैं तयार गर्ने हो?", "समुदाय संघका व्यक्ति: फोहोर झोला हामी तयार गर्छौं। पन्जा मात्र ल्याउनुहोस्।"],
            mn: ["Холбооны гишүүн: Ирэх ням гарагт хорооны цэвэрлэгээ болно.", "Оршин суугч: Хэдэн цагаас эхлэх вэ?", "Холбооны гишүүн: Өглөө 8 цагт цэцэрлэгт хүрээлэнд цугларна.", "Оршин суугч: Ажлын бээлий, хогийн уутыг өөрөө бэлдэх үү?", "Холбооны гишүүн: Хогийн уутыг бид бэлдэнэ. Зөвхөн бээлий авчирна уу."],
            si: ["සංගමයේ සාමාජිකයා: ලබන ඉරිදා町内 cleaning activity එකක් තියෙනවා.", "නිවැසියා: කීයට පටන් ගන්නවද?", "සංගමයේ සාමාජිකයා: උදේ 8ට park එකට එකතු වෙනවා.", "නිවැසියා: work gloves සහ garbage bags මමම සූදානම් කරගන්නද?", "සංගමයේ සාමාජිකයා: garbage bags අපි සූදානම් කරනවා. work gloves විතරක් ගෙන එන්න."],
            bn: ["সমিতির সদস্য: আগামী রবিবার পাড়ায় পরিষ্কার কার্যক্রম আছে।", "বাসিন্দা: কয়টা থেকে শুরু হবে?", "সমিতির সদস্য: সকাল আটটায় পার্কে জড়ো হব।", "বাসিন্দা: কাজের গ্লাভস আর আবর্জনার ব্যাগ কি নিজে প্রস্তুত করব?", "সমিতির সদস্য: আবর্জনার ব্যাগ আমরা প্রস্তুত করব। শুধু গ্লাভস আনবেন।"],
            pt: ["Membro da associação: No próximo domingo haverá limpeza no bairro.", "Morador: A partir de que horas começa?", "Membro da associação: Vamos nos reunir no parque às 8h da manhã.", "Morador: Devo preparar luvas de trabalho e sacos de lixo por conta própria?", "Membro da associação: Nós prepararemos os sacos de lixo. Traga apenas luvas de trabalho."],
            es: ["Miembro de la asociación: El próximo domingo habrá limpieza del barrio.", "Residente: ¿A qué hora empieza?", "Miembro de la asociación: Nos reuniremos en el parque a las 8 de la mañana.", "Residente: ¿Debo preparar guantes de trabajo y bolsas de basura yo mismo?", "Miembro de la asociación: Nosotros prepararemos las bolsas de basura. Traiga solo guantes de trabajo."],
            fr: ["Membre de l’association : Dimanche prochain, il y aura un nettoyage du quartier.", "Habitant : À quelle heure cela commence-t-il ?", "Membre de l’association : Nous nous rassemblerons au parc à 8 heures du matin.", "Habitant : Dois-je préparer moi-même des gants de travail et des sacs-poubelle ?", "Membre de l’association : Nous préparons les sacs-poubelle. Apportez seulement des gants de travail."],
            ru: ["Член объединения: В следующее воскресенье будет уборка района.", "Житель: Во сколько начинается?", "Член объединения: Собираемся в парке в 8 утра.", "Житель: Рабочие перчатки и мешки для мусора нужно подготовить самому?", "Член объединения: Мешки для мусора подготовим мы. Принесите только перчатки."],
            uk: ["Член об’єднання: Наступної неділі буде прибирання району.", "Мешканець: О котрій починається?", "Член об’єднання: Збираємося в парку о 8 ранку.", "Мешканець: Робочі рукавички та пакети для сміття потрібно підготувати самому?", "Член об’єднання: Пакети для сміття підготуємо ми. Принесіть лише рукавички."]
        }
    ),

    makeA2NeighborhoodAssociationDialogue(
        "a2_jichikai_006",
        "防災訓練について聞く",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "防災訓練には参加した方がいいですか。",
                target: "ぼうさいくんれんにはさんかしたほうがいいですか",
                ruby: "<ruby>防災訓練<rt>ぼうさいくんれん</rt></ruby>には<ruby>参加<rt>さんか</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Bōsai kunren ni wa sanka shita hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "できれば参加してください。避難場所を確認できます。",
                target: "できればさんかしてください ひなんばしょをかくにんできます",
                ruby: "できれば<ruby>参加<rt>さんか</rt></ruby>してください。<ruby>避難場所<rt>ひなんばしょ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>できます。",
                romaji: "Dekireba sanka shite kudasai. Hinan basho o kakunin dekimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "日本語が全部わからなくても大丈夫でしょうか。",
                target: "にほんごがぜんぶわからなくてもだいじょうぶでしょうか",
                ruby: "<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>全部<rt>ぜんぶ</rt></ruby>わからなくても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>でしょうか。",
                romaji: "Nihongo ga zenbu wakaranakute mo daijōbu deshō ka."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "大丈夫です。大切な所は、ゆっくり説明します。",
                target: "だいじょうぶです たいせつなところは ゆっくりせつめいします",
                ruby: "<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>所<rt>ところ</rt></ruby>は、ゆっくり<ruby>説明<rt>せつめい</rt></ruby>します。",
                romaji: "Daijōbu desu. Taisetsu na tokoro wa, yukkuri setsumei shimasu."
            }
        ],
        {
            ja: ["住民：防災訓練には参加した方がいいですか。", "自治会の人：できれば参加してください。避難場所を確認できます。", "住民：日本語が全部わからなくても大丈夫でしょうか。", "自治会の人：大丈夫です。大切な所は、ゆっくり説明します。"],
            en: ["Resident: Is it better to join the disaster drill?", "Association Member: Please join if possible. You can check the evacuation place.", "Resident: Is it okay even if I do not understand all the Japanese?", "Association Member: It is okay. We will explain the important parts slowly."],
            "zh-CN": ["居民：我最好参加防灾训练吗？", "自治会人员：如果可以，请参加。可以确认避难场所。", "居民：即使我不能完全理解日语也可以吗？", "自治会人员：可以。重要的地方我们会慢慢说明。"],
            "zh-TW": ["居民：我最好參加防災訓練嗎？", "自治會人員：如果可以，請參加。可以確認避難場所。", "居民：即使我不能完全理解日語也可以嗎？", "自治會人員：可以。重要的地方我們會慢慢說明。"],
            ko: ["주민: 방재 훈련에는 참여하는 것이 좋나요?", "자치회 사람: 가능하면 참여해 주세요. 대피 장소를 확인할 수 있습니다.", "주민: 일본어를 전부 몰라도 괜찮을까요?", "자치회 사람: 괜찮습니다. 중요한 부분은 천천히 설명하겠습니다."],
            vi: ["Cư dân: Tôi có nên tham gia diễn tập phòng disaster không ạ?", "Người của hội khu phố: Nếu có thể, xin hãy tham gia. Bạn có thể xác nhận nơi sơ tán.", "Cư dân: Nếu tôi không hiểu hết tiếng Nhật thì có sao không ạ?", "Người của hội khu phố: Không sao. Những phần quan trọng chúng tôi sẽ giải thích chậm."],
            tl: ["Resident: Mas mabuti po bang sumali sa disaster drill?", "Association member: Kung maaari, sumali po kayo. Mache-check ninyo ang evacuation place.", "Resident: Okay lang po ba kahit hindi ko maintindihan lahat ng Japanese?", "Association member: Okay lang po. Ipapaliwanag namin nang dahan-dahan ang importanteng bahagi."],
            id: ["Warga: Apakah sebaiknya saya ikut latihan bencana?", "Anggota asosiasi: Jika bisa, silakan ikut. Anda bisa memastikan tempat evakuasi.", "Warga: Apakah tidak apa-apa meskipun saya tidak memahami semua bahasa Jepang?", "Anggota asosiasi: Tidak apa-apa. Bagian penting akan kami jelaskan perlahan."],
            th: ["ผู้อยู่อาศัย: ควรเข้าร่วมการฝึกป้องกันภัยไหมคะ/ครับ", "คนของสมาคมชุมชน: ถ้าเป็นไปได้ กรุณาเข้าร่วมค่ะ/ครับ จะได้確認สถานที่避難ค่ะ/ครับ", "ผู้อยู่อาศัย: ถ้าไม่เข้าใจภาษาญี่ปุ่นทั้งหมดก็ไม่เป็นไรไหมคะ/ครับ", "คนของสมาคมชุมชน: ไม่เป็นไรค่ะ/ครับ ส่วนสำคัญจะอธิบายช้า ๆ ค่ะ/ครับ"],
            my: ["နေထိုင်သူ: ဘေးအန္တရာယ်လေ့ကျင့်မှုမှာ ပါဝင်သင့်ပါသလား။", "ရပ်ကွက်အသင်းမှလူ: ဖြစ်နိုင်ရင် ပါဝင်ပေးပါ။ ရှောင်တိမ်းရာနေရာကို စစ်ဆေးလို့ရပါတယ်။", "နေထိုင်သူ: ဂျပန်စကားအားလုံး နားမလည်လည်း ရပါသလား။", "ရပ်ကွက်အသင်းမှလူ: ရပါတယ်။ အရေးကြီးတဲ့နေရာတွေကို ဖြည်းဖြည်းရှင်းပြပါမယ်။"],
            km: ["អ្នករស់នៅ: តើខ្ញុំគួរចូលរួមការហាត់ការពារគ្រោះមហន្តរាយទេ?", "សមាជិកសមាគមសហគមន៍: ប្រសិនបើអាច សូមចូលរួម។ អ្នកអាចពិនិត្យទីកន្លែងជ避難បាន។", "អ្នករស់នៅ: បើខ្ញុំមិនយល់ភាសាជប៉ុនទាំងអស់ ក៏បានទេ?", "សមាជិកសមាគមសហគមន៍: បាន។ ចំណុចសំខាន់ៗ យើងនឹងពន្យល់យឺតៗ។"],
            ne: ["बासिन्दा: विपद् अभ्यासमा सहभागी हुनु राम्रो हो?", "समुदाय संघका व्यक्ति: सकेसम्म सहभागी हुनुहोस्।避難 स्थान確認 गर्न सकिन्छ।", "बासिन्दा: जापानी सबै नबुझे पनि हुन्छ?", "समुदाय संघका व्यक्ति: हुन्छ। महत्वपूर्ण कुरा बिस्तारै説明 गर्छौं।"],
            mn: ["Оршин суугч: Гамшгийн сургуулилалтад оролцсон нь дээр үү?", "Холбооны гишүүн: Боломжтой бол оролцоорой. Нүүлгэн шилжих газрыг шалгаж болно.", "Оршин суугч: Япон хэлийг бүгдийг ойлгохгүй байсан ч болох уу?", "Холбооны гишүүн: Болно. Чухал хэсгийг удаанаар тайлбарлана."],
            si: ["නිවැසියා: disaster drill එකට සහභාගී වුණොත් හොඳද?", "සංගමයේ සාමාජිකයා: පුළුවන් නම් සහභාගී වෙන්න. evacuation place එක確認 කරන්න පුළුවන්.", "නිවැසියා: Japanese全部 තේරෙන්නේ නැති වුණත් හරිද?", "සංගමයේ සාමාජිකයා: හරි. වැදගත් තැන් slowly පැහැදිලි කරන්නම්."],
            bn: ["বাসিন্দা: দুর্যোগ মহড়ায় অংশ নেওয়া ভালো?", "সমিতির সদস্য: সম্ভব হলে অংশ নিন।避難 স্থান নিশ্চিত করা যাবে।", "বাসিন্দা: জাপানি সব না বুঝলেও হবে?", "সমিতির সদস্য: হবে। গুরুত্বপূর্ণ অংশ ধীরে ধীরে ব্যাখ্যা করব।"],
            pt: ["Morador: É melhor participar do treinamento de prevenção de desastres?", "Membro da associação: Se possível, participe. Você poderá confirmar o local de evacuação.", "Morador: Tudo bem se eu não entender todo o japonês?", "Membro da associação: Tudo bem. Vamos explicar devagar as partes importantes."],
            es: ["Residente: ¿Es mejor participar en el simulacro de desastre?", "Miembro de la asociación: Si puede, participe. Podrá confirmar el lugar de evacuación.", "Residente: ¿Está bien aunque no entienda todo el japonés?", "Miembro de la asociación: Está bien. Explicaremos despacio las partes importantes."],
            fr: ["Habitant : Vaut-il mieux participer à l’exercice de prévention des catastrophes ?", "Membre de l’association : Si possible, participez. Vous pourrez vérifier le lieu d’évacuation.", "Habitant : Est-ce que ça va même si je ne comprends pas tout le japonais ?", "Membre de l’association : Oui. Nous expliquerons lentement les points importants."],
            ru: ["Житель: Лучше участвовать в учениях по бедствиям?", "Член объединения: Если возможно, участвуйте. Вы сможете проверить место эвакуации.", "Житель: Ничего, если я не понимаю весь японский?", "Член объединения: Ничего страшного. Важные моменты объясним медленно."],
            uk: ["Мешканець: Краще брати участь у навчанні з безпеки?", "Член об’єднання: Якщо можливо, беріть участь. Ви зможете перевірити місце евакуації.", "Мешканець: Нічого, якщо я не розумію всю японську?", "Член об’єднання: Нічого страшного. Важливі моменти пояснимо повільно."]
        }
    ),

    makeA2NeighborhoodAssociationDialogue(
        "a2_jichikai_007",
        "地域行事の手伝いを相談する",
        [
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "来月、夏祭りの準備があります。",
                target: "らいげつ なつまつりのじゅんびがあります",
                ruby: "<ruby>来月<rt>らいげつ</rt></ruby>、<ruby>夏祭<rt>なつまつ</rt></ruby>りの<ruby>準備<rt>じゅんび</rt></ruby>があります。",
                romaji: "Raigetsu, natsumatsuri no junbi ga arimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "どんな手伝いがありますか。",
                target: "どんなてつだいがありますか",
                ruby: "どんな<ruby>手伝<rt>てつだ</rt></ruby>いがありますか。",
                romaji: "Donna tetsudai ga arimasu ka."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "会場の机を運んだり、案内の紙を配ったりします。",
                target: "かいじょうのつくえをはこんだり あんないのかみをくばったりします",
                ruby: "<ruby>会場<rt>かいじょう</rt></ruby>の<ruby>机<rt>つくえ</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>んだり、<ruby>案内<rt>あんない</rt></ruby>の<ruby>紙<rt>かみ</rt></ruby>を<ruby>配<rt>くば</rt></ruby>ったりします。",
                romaji: "Kaijō no tsukue o hakondari, annai no kami o kubattari shimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "重い物は難しいですが、紙を配ることならできます。",
                target: "おもいものはむずかしいですが かみをくばることならできます",
                ruby: "<ruby>重<rt>おも</rt></ruby>い<ruby>物<rt>もの</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しいですが、<ruby>紙<rt>かみ</rt></ruby>を<ruby>配<rt>くば</rt></ruby>ることならできます。",
                romaji: "Omoi mono wa muzukashii desu ga, kami o kubaru koto nara dekimasu."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "助かります。できる範囲で大丈夫です。",
                target: "たすかります できるはんいでだいじょうぶです",
                ruby: "<ruby>助<rt>たす</rt></ruby>かります。できる<ruby>範囲<rt>はんい</rt></ruby>で<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。",
                romaji: "Tasukarimasu. Dekiru han'i de daijōbu desu."
            }
        ],
        {
            ja: ["自治会の人：来月、夏祭りの準備があります。", "住民：どんな手伝いがありますか。", "自治会の人：会場の机を運んだり、案内の紙を配ったりします。", "住民：重い物は難しいですが、紙を配ることならできます。", "自治会の人：助かります。できる範囲で大丈夫です。"],
            en: ["Association Member: Next month, there will be preparations for the summer festival.", "Resident: What kind of help is needed?", "Association Member: We will carry tables at the venue and hand out information papers.", "Resident: Heavy things are difficult for me, but I can hand out papers.", "Association Member: That helps. It is okay to do what you can."],
            "zh-CN": ["自治会人员：下个月有夏祭的准备工作。", "居民：需要什么样的帮忙？", "自治会人员：要搬会场的桌子，也要发放通知纸。", "居民：重的东西我比较困难，但发纸的话可以。", "自治会人员：太好了。在能做的范围内就可以。"],
            "zh-TW": ["自治會人員：下個月有夏祭的準備工作。", "居民：需要什麼樣的幫忙？", "自治會人員：要搬會場的桌子，也要發放通知紙。", "居民：重的東西我比較困難，但發紙的話可以。", "自治會人員：太好了。在能做的範圍內就可以。"],
            ko: ["자치회 사람: 다음 달에 여름 축제 준비가 있습니다.", "주민: 어떤 도움이 필요하나요?", "자치회 사람: 행사장의 책상을 옮기거나 안내 종이를 나눠 줍니다.", "주민: 무거운 물건은 어렵지만 종이를 나눠 주는 일이라면 할 수 있습니다.", "자치회 사람: 도움이 됩니다. 가능한 범위에서 괜찮습니다."],
            vi: ["Người của hội khu phố: Tháng sau sẽ có chuẩn bị cho lễ hội mùa hè.", "Cư dân: Có những việc giúp đỡ nào ạ?", "Người của hội khu phố: Chúng tôi sẽ chuyển bàn ở địa điểm và phát giấy hướng dẫn.", "Cư dân: Đồ nặng thì khó, nhưng nếu là phát giấy thì tôi làm được.", "Người của hội khu phố: Như vậy giúp nhiều lắm. Làm trong phạm vi có thể là được."],
            tl: ["Association member: Sa susunod na buwan, may paghahanda para sa summer festival.", "Resident: Anong klaseng tulong po ang kailangan?", "Association member: Magbubuhat ng tables sa venue at mamimigay ng information papers.", "Resident: Mahirap po sa akin ang mabibigat, pero kaya kong mamigay ng papers.", "Association member: Malaking tulong po iyon. Okay lang po kung hanggang saan ang kaya ninyo."],
            id: ["Anggota asosiasi: Bulan depan ada persiapan festival musim panas.", "Warga: Bantuan seperti apa yang diperlukan?", "Anggota asosiasi: Kami akan membawa meja di tempat acara dan membagikan kertas informasi.", "Warga: Barang berat sulit bagi saya, tetapi saya bisa membagikan kertas.", "Anggota asosiasi: Itu sangat membantu. Sesuai kemampuan saja tidak apa-apa."],
            th: ["คนของสมาคมชุมชน: เดือนหน้ามีการเตรียมงานเทศกาลฤดูร้อนค่ะ/ครับ", "ผู้อยู่อาศัย: มีงานช่วยแบบไหนบ้างคะ/ครับ", "คนของสมาคมชุมชน: จะขนโต๊ะที่สถานที่จัดงาน และแจกเอกสาร 안내ค่ะ/ครับ", "ผู้อยู่อาศัย: ของหนักอาจยาก แต่ถ้าแจกเอกสารทำได้ค่ะ/ครับ", "คนของสมาคมชุมชน: ช่วยได้มากค่ะ/ครับ ทำเท่าที่ทำได้ก็พอค่ะ/ครับ"],
            my: ["ရပ်ကွက်အသင်းမှလူ: နောက်လမှာ နွေရာသီပွဲတော်အတွက် ပြင်ဆင်မှုရှိပါတယ်။", "နေထိုင်သူ: ဘယ်လိုအကူအညီတွေရှိပါသလဲ။", "ရပ်ကွက်အသင်းမှလူ: ပွဲနေရာက စားပွဲတွေကို သယ်တာ၊ အကြောင်းကြားစာရွက်တွေ ဝေတာတွေ လုပ်ပါတယ်။", "နေထိုင်သူ: လေးတဲ့ပစ္စည်းတွေက ခက်ပေမယ့် စာရွက်ဝေတာတော့ လုပ်နိုင်ပါတယ်။", "ရပ်ကွက်အသင်းမှလူ: အကူအညီဖြစ်ပါတယ်။ လုပ်နိုင်တဲ့အတိုင်းဆို ရပါတယ်။"],
            km: ["សមាជិកសមាគមសហគមន៍: ខែក្រោយ មានការរៀបចំពិធីបុណ្យរដូវក្តៅ។", "អ្នករស់នៅ: តើមានការជួយប្រភេទណាខ្លះ?", "សមាជិកសមាគមសហគមន៍: យើងនឹងដឹកតុនៅកន្លែងកម្មវិធី និងចែកក្រដាសណែនាំ។", "អ្នករស់នៅ: របស់ធ្ងន់ៗខ្ញុំពិបាក ប៉ុន្តែការចែកក្រដាស ខ្ញុំអាចធ្វើបាន។", "សមាជិកសមាគមសហគមន៍: វាជួយច្រើន។ ធ្វើតាមដែលអាចធ្វើបានគឺគ្រប់គ្រាន់។"],
            ne: ["समुदाय संघका व्यक्ति: अर्को महिना गर्मी महोत्सवको तयारी छ।", "बासिन्दा: कस्तो मद्दत चाहिन्छ?", "समुदाय संघका व्यक्ति: कार्यक्रमस्थलका टेबल बोक्ने र सूचना कागज बाँड्ने काम हुन्छ।", "बासिन्दा: भारी सामान गाह्रो हुन्छ, तर कागज बाँड्न सक्छु।", "समुदाय संघका व्यक्ति: धेरै सहयोग हुन्छ। सक्ने दायरामा भए हुन्छ।"],
            mn: ["Холбооны гишүүн: Ирэх сард зуны наадмын бэлтгэл байна.", "Оршин суугч: Ямар тусламж хэрэгтэй вэ?", "Холбооны гишүүн: Талбайн ширээ зөөх, мэдээллийн цаас тараах зэрэг ажил байна.", "Оршин суугч: Хүнд зүйл хэцүү ч цаас тараах бол хийж чадна.", "Холбооны гишүүн: Их тус болно. Боломжийнхоо хэмжээнд байхад хангалттай."],
            si: ["සංගමයේ සාමාජිකයා: ලබන මාසේ summer festival preparation එකක් තියෙනවා.", "නිවැසියා: මොන වගේ උදව්ද තියෙන්නේ?", "සංගමයේ සාමාජිකයා: venue එකේ tables ගෙනියනවා, 안내 papers බෙදනවා.", "නිවැසියා: බර දේවල් අපහසුයි, නමුත් papers බෙදන්න පුළුවන්.", "සංගමයේ සාමාජිකයා: ඒක ලොකු උදව්වක්. ඔබට පුළුවන්範囲で හරි."],
            bn: ["সমিতির সদস্য: আগামী মাসে গ্রীষ্ম উৎসবের প্রস্তুতি আছে।", "বাসিন্দা: কী ধরনের সাহায্য দরকার?", "সমিতির সদস্য: অনুষ্ঠানের জায়গায় টেবিল বহন করা এবং 안내 কাগজ বিলি করা হবে।", "বাসিন্দা: ভারী জিনিস কঠিন, কিন্তু কাগজ বিলি করা হলে পারব।", "সমিতির সদস্য: এতে সাহায্য হবে। যতটা পারেন ততটাই যথেষ্ট।"],
            pt: ["Membro da associação: No próximo mês haverá preparação para o festival de verão.", "Morador: Que tipo de ajuda será necessária?", "Membro da associação: Vamos carregar mesas no local e distribuir papéis de informação.", "Morador: Coisas pesadas são difíceis para mim, mas posso distribuir papéis.", "Membro da associação: Isso ajuda muito. Dentro do que você puder já está bom."],
            es: ["Miembro de la asociación: El próximo mes habrá preparación para el festival de verano.", "Residente: ¿Qué tipo de ayuda se necesita?", "Miembro de la asociación: Llevaremos mesas en el lugar y repartiremos hojas informativas.", "Residente: Las cosas pesadas son difíciles para mí, pero puedo repartir papeles.", "Miembro de la asociación: Eso ayuda mucho. Está bien dentro de lo que pueda hacer."],
            fr: ["Membre de l’association : Le mois prochain, il y aura les préparatifs du festival d’été.", "Habitant : Quel type d’aide faut-il ?", "Membre de l’association : Nous transporterons des tables sur le lieu et distribuerons des feuilles d’information.", "Habitant : Les choses lourdes sont difficiles pour moi, mais je peux distribuer des papiers.", "Membre de l’association : Cela nous aide. Faites dans la mesure de vos possibilités."],
            ru: ["Член объединения: В следующем месяце будет подготовка к летнему фестивалю.", "Житель: Какая помощь нужна?", "Член объединения: Будем переносить столы на площадке и раздавать информационные листы.", "Житель: Тяжёлые вещи мне трудно, но я могу раздавать листы.", "Член объединения: Это поможет. Делайте в пределах своих возможностей."],
            uk: ["Член об’єднання: Наступного місяця буде підготовка до літнього фестивалю.", "Мешканець: Яка допомога потрібна?", "Член об’єднання: Будемо переносити столи на місці та роздавати інформаційні аркуші.", "Мешканець: Важкі речі мені складно, але я можу роздавати папери.", "Член об’єднання: Це допоможе. Робіть у межах своїх можливостей."]
        }
    ),

    makeA2NeighborhoodAssociationDialogue(
        "a2_jichikai_008",
        "参加できない時に伝える",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "今週の集まりに参加できなくなりました。",
                target: "こんしゅうのあつまりにさんかできなくなりました",
                ruby: "<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>集<rt>あつ</rt></ruby>まりに<ruby>参加<rt>さんか</rt></ruby>できなくなりました。",
                romaji: "Konshū no atsumari ni sanka dekinaku narimashita."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "わかりました。何か急な用事ですか。",
                target: "わかりました なにかきゅうなようじですか",
                ruby: "わかりました。<ruby>何<rt>なに</rt></ruby>か<ruby>急<rt>きゅう</rt></ruby>な<ruby>用事<rt>ようじ</rt></ruby>ですか。",
                romaji: "Wakarimashita. Nanika kyū na yōji desu ka."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "仕事の予定が変わってしまいました。",
                target: "しごとのよていがかわってしまいました",
                ruby: "<ruby>仕事<rt>しごと</rt></ruby>の<ruby>予定<rt>よてい</rt></ruby>が<ruby>変<rt>か</rt></ruby>わってしまいました。",
                romaji: "Shigoto no yotei ga kawatte shimaimashita."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "次回は参加したいので、内容をあとで教えていただけますか。",
                target: "じかいはさんかしたいので ないようをあとでおしえていただけますか",
                ruby: "<ruby>次回<rt>じかい</rt></ruby>は<ruby>参加<rt>さんか</rt></ruby>したいので、<ruby>内容<rt>ないよう</rt></ruby>をあとで<ruby>教<rt>おし</rt></ruby>えていただけますか。",
                romaji: "Jikai wa sanka shitai node, naiyō o ato de oshiete itadakemasu ka."
            },
            {
                label: "話者A",
                key: "officer",
                name: "自治会の人",
                line: "もちろんです。資料をポストに入れておきます。",
                target: "もちろんです しりょうをぽすとにいれておきます",
                ruby: "もちろんです。<ruby>資料<rt>しりょう</rt></ruby>をポストに<ruby>入<rt>い</rt></ruby>れておきます。",
                romaji: "Mochiron desu. Shiryō o posuto ni irete okimasu."
            }
        ],
        {
            ja: ["住民：今週の集まりに参加できなくなりました。", "自治会の人：わかりました。何か急な用事ですか。", "住民：仕事の予定が変わってしまいました。", "住民：次回は参加したいので、内容をあとで教えていただけますか。", "自治会の人：もちろんです。資料をポストに入れておきます。"],
            en: ["Resident: I can no longer join this week’s meeting.", "Association Member: I understand. Did something urgent come up?", "Resident: My work schedule changed.", "Resident: I would like to join next time, so could you tell me the details later?", "Association Member: Of course. I will put the materials in your mailbox."],
            "zh-CN": ["居民：我不能参加这周的集会了。", "自治会人员：明白了。是有什么急事吗？", "居民：工作安排变了。", "居民：下次我想参加，所以之后可以告诉我内容吗？", "自治会人员：当然可以。我会把资料放进您的信箱。"],
            "zh-TW": ["居民：我不能參加這週的集會了。", "自治會人員：明白了。是有什麼急事嗎？", "居民：工作安排變了。", "居民：下次我想參加，所以之後可以告訴我內容嗎？", "自治會人員：當然可以。我會把資料放進您的信箱。"],
            ko: ["주민: 이번 주 모임에 참여할 수 없게 되었습니다.", "자치회 사람: 알겠습니다. 무슨 급한 일이 있으신가요?", "주민: 업무 일정이 바뀌어 버렸습니다.", "주민: 다음번에는 참여하고 싶으니 내용을 나중에 알려 주실 수 있나요?", "자치회 사람: 물론입니다. 자료를 우편함에 넣어 두겠습니다."],
            vi: ["Cư dân: Tôi không thể tham gia buổi họp tuần này nữa.", "Người của hội khu phố: Tôi hiểu rồi. Có việc gấp gì ạ?", "Cư dân: Lịch làm việc của tôi đã thay đổi.", "Cư dân: Lần sau tôi muốn tham gia, nên sau đó anh/chị có thể cho tôi biết nội dung không ạ?", "Người của hội khu phố: Tất nhiên rồi. Tôi sẽ bỏ tài liệu vào hòm thư."],
            tl: ["Resident: Hindi na po ako makakasali sa meeting ngayong linggo.", "Association member: Naiintindihan ko po. May bigla po bang nangyari?", "Resident: Nagbago po ang schedule ko sa trabaho.", "Resident: Gusto ko pong sumali sa susunod, kaya maaari po bang sabihin sa akin ang details mamaya?", "Association member: Siyempre po. Ilalagay ko po ang materials sa mailbox ninyo."],
            id: ["Warga: Saya jadi tidak bisa ikut pertemuan minggu ini.", "Anggota asosiasi: Baik, saya mengerti. Apakah ada urusan mendadak?", "Warga: Jadwal kerja saya berubah.", "Warga: Saya ingin ikut lain kali, jadi bisakah Anda memberi tahu saya isinya nanti?", "Anggota asosiasi: Tentu. Saya akan memasukkan materi ke kotak pos Anda."],
            th: ["ผู้อยู่อาศัย: เข้าร่วมการประชุมสัปดาห์นี้ไม่ได้แล้วค่ะ/ครับ", "คนของสมาคมชุมชน: เข้าใจแล้วค่ะ/ครับ มีธุระด่วนหรือคะ/ครับ", "ผู้อยู่อาศัย: ตารางงานเปลี่ยนไปค่ะ/ครับ", "ผู้อยู่อาศัย: ครั้งหน้าต้องการเข้าร่วม รบกวนแจ้งเนื้อหาให้ภายหลังได้ไหมคะ/ครับ", "คนของสมาคมชุมชน: ได้แน่นอนค่ะ/ครับ จะใส่เอกสารไว้ในกล่องจดหมายค่ะ/ครับ"],
            my: ["နေထိုင်သူ: ဒီအပတ် အစည်းအဝေးမှာ ပါဝင်လို့ မရတော့ပါဘူး။", "ရပ်ကွက်အသင်းမှလူ: နားလည်ပါပြီ။ အရေးပေါ်ကိစ္စရှိလား။", "နေထိုင်သူ: အလုပ်အချိန်ဇယား ပြောင်းသွားပါတယ်။", "နေထိုင်သူ: နောက်တစ်ခါတော့ ပါဝင်ချင်လို့ နောက်မှ အကြောင်းအရာကို ပြောပြပေးနိုင်ပါသလား။", "ရပ်ကွက်အသင်းမှလူ: ဟုတ်ပါတယ်။ စာရွက်စာတမ်းကို mailbox ထဲ ထည့်ထားပါမယ်။"],
            km: ["អ្នករស់នៅ: ខ្ញុំមិនអាចចូលរួមការប្រជុំសប្តាហ៍នេះបានទៀតទេ។", "សមាជិកសមាគមសហគមន៍: យល់ហើយ។ តើមានការងារបន្ទាន់ទេ?", "អ្នករស់នៅ: កាលវិភាគការងាររបស់ខ្ញុំបានផ្លាស់ប្តូរ។", "អ្នករស់នៅ: លើកក្រោយខ្ញុំចង់ចូលរួម ដូច្នេះអាចប្រាប់ខ្ញុំអំពីខ្លឹមសារនៅពេលក្រោយបានទេ?", "សមាជិកសមាគមសហគមន៍: បានជាក់ជាមិនខាន។ ខ្ញុំនឹងដាក់ឯកសារក្នុងប្រអប់សំបុត្រ។"],
            ne: ["बासिन्दा: म यो हप्ताको भेलामा सहभागी हुन नसक्ने भएँ।", "समुदाय संघका व्यक्ति: बुझें। केही आकस्मिक काम हो?", "बासिन्दा: कामको तालिका परिवर्तन भयो।", "बासिन्दा: अर्को पटक सहभागी हुन चाहन्छु, त्यसैले सामग्री पछि बताइदिन सक्नुहुन्छ?", "समुदाय संघका व्यक्ति: अवश्य। कागजात पोस्टबक्समा राखिदिन्छु।"],
            mn: ["Оршин суугч: Энэ долоо хоногийн цуглаанд оролцож чадахаа болилоо.", "Холбооны гишүүн: Ойлголоо. Яаралтай ажил гарсан уу?", "Оршин суугч: Ажлын хуваарь өөрчлөгдсөн.", "Оршин суугч: Дараагийн удаа оролцмоор байгаа тул агуулгыг дараа хэлж өгч болох уу?", "Холбооны гишүүн: Мэдээж. Материалыг шуудангийн хайрцагт хийж орхино."],
            si: ["නිවැසියා: මේ සතියේ meeting එකට සහභාගී වෙන්න බැරි වුණා.", "සංගමයේ සාමාජිකයා: තේරුණා. හදිසි කටයුත්තක්ද?", "නිවැසියා: වැඩ schedule එක වෙනස් වුණා.", "නිවැසියා: ඊළඟ වතාවට සහභාගී වෙන්න ඕනේ නිසා, content එක පසුව කියලා දෙන්න පුළුවන්ද?", "සංගමයේ සාමාජිකයා: අනිවාර්යයෙන්. materials mailbox එකට දාලා තියන්නම්."],
            bn: ["বাসিন্দা: এই সপ্তাহের সভায় আর অংশ নিতে পারব না।", "সমিতির সদস্য: বুঝেছি। কোনো জরুরি কাজ পড়েছে?", "বাসিন্দা: কাজের সময়সূচি বদলে গেছে।", "বাসিন্দা: পরেরবার অংশ নিতে চাই, তাই পরে বিষয়বস্তু জানাতে পারবেন?", "সমিতির সদস্য: অবশ্যই। কাগজপত্র মেইলবক্সে রেখে দেব।"],
            pt: ["Morador: Não poderei participar da reunião desta semana.", "Membro da associação: Entendi. Surgiu algum compromisso urgente?", "Morador: Minha agenda de trabalho mudou.", "Morador: Gostaria de participar da próxima vez, então poderia me informar o conteúdo depois?", "Membro da associação: Claro. Vou colocar os materiais na sua caixa de correio."],
            es: ["Residente: Ya no podré participar en la reunión de esta semana.", "Miembro de la asociación: Entiendo. ¿Surgió algo urgente?", "Residente: Cambió mi horario de trabajo.", "Residente: Me gustaría participar la próxima vez, así que ¿podría contarme el contenido después?", "Miembro de la asociación: Por supuesto. Pondré los materiales en su buzón."],
            fr: ["Habitant : Je ne pourrai plus participer à la réunion de cette semaine.", "Membre de l’association : Je comprends. Avez-vous une urgence ?", "Habitant : Mon planning de travail a changé.", "Habitant : J’aimerais participer la prochaine fois, pourriez-vous me communiquer le contenu plus tard ?", "Membre de l’association : Bien sûr. Je mettrai les documents dans votre boîte aux lettres."],
            ru: ["Житель: Я не смогу участвовать во встрече на этой неделе.", "Член объединения: Понял. Возникло что-то срочное?", "Житель: Мой рабочий график изменился.", "Житель: В следующий раз я хотел бы участвовать, поэтому не могли бы вы потом рассказать содержание?", "Член объединения: Конечно. Я положу материалы в ваш почтовый ящик."],
            uk: ["Мешканець: Я не зможу взяти участь у зустрічі цього тижня.", "Член об’єднання: Зрозумів. Сталося щось термінове?", "Мешканець: Мій робочий графік змінився.", "Мешканець: Наступного разу я хотів би взяти участь, тому чи могли б ви потім повідомити зміст?", "Член об’єднання: Звичайно. Я покладу матеріали у вашу поштову скриньку."]
        }
    )

];