// =====================================================
// Japeak A2 Level
// Scene: お店を選んでみよう
// Category Key: a2_choose_store
// =====================================================

const a2ChooseStoreContext = {
    ja: "目的、予算、混み具合、支払い方法、予約、口コミ、テイクアウト、営業時間などを考えながら、お店を選ぶ日本語を練習します。",
    en: "Practice Japanese for choosing a store or restaurant based on purpose, budget, crowd level, payment methods, reservations, reviews, takeout, and opening hours.",
    "zh-CN": "练习根据目的、预算、拥挤程度、付款方式、预约、评价、外带和营业时间等选择店铺或餐厅时使用的日语。",
    "zh-TW": "練習根據目的、預算、擁擠程度、付款方式、預約、評價、外帶和營業時間等選擇店家或餐廳時使用的日語。",
    ko: "목적, 예산, 혼잡도, 결제 방법, 예약, 후기, 포장, 영업시간 등을 고려하여 가게나 식당을 선택할 때의 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi chọn cửa hàng hoặc nhà hàng dựa trên mục đích, ngân sách, mức độ đông, cách thanh toán, đặt chỗ, đánh giá, mang về và giờ mở cửa.",
    tl: "Practice ng Japanese sa pagpili ng store o restaurant batay sa layunin, budget, dami ng tao, payment method, reservation, reviews, takeout, at opening hours.",
    id: "Latihan bahasa Jepang untuk memilih toko atau restoran berdasarkan tujuan, anggaran, tingkat keramaian, metode pembayaran, reservasi, ulasan, takeout, dan jam buka.",
    th: "ฝึกภาษาญี่ปุ่นในการเลือกร้านค้าหรือร้านอาหาร โดยดูจากจุดประสงค์ งบประมาณ ความแออัด วิธีชำระเงิน การจอง รีวิว อาหารกลับบ้าน และเวลาเปิดปิด",
    my: "ရည်ရွယ်ချက်၊ ဘတ်ဂျက်၊ လူစည်ကားမှု၊ ငွေပေးချေမှုနည်းလမ်း၊ ကြိုတင်မှာယူခြင်း၊ review၊ takeout နှင့် ဖွင့်ချိန်တို့အပေါ်မူတည်၍ ဆိုင် သို့မဟုတ် စားသောက်ဆိုင်ရွေးချယ်ရာတွင် အသုံးဝင်သော ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ជ្រើសរើសហាង ឬភោជនីយដ្ឋាន ដោយផ្អែកលើគោលបំណង ថវិកា ភាពកកកុញ វិធីបង់ប្រាក់ ការកក់ ការវាយតម្លៃ ការយកទៅញ៉ាំក្រៅ និងម៉ោងបើក។",
    ne: "उद्देश्य, बजेट, भीड, भुक्तानी तरिका, बुकिङ, समीक्षा, टेकआउट र खुल्ने समयका आधारमा पसल वा रेस्टुरेन्ट छान्दा प्रयोग गर्ने जापानी अभ्यास।",
    mn: "Зорилго, төсөв, хүн ихтэй эсэх, төлбөрийн арга, захиалга, үнэлгээ, авч явах үйлчилгээ, ажиллах цаг зэргийг харгалзан дэлгүүр эсвэл ресторан сонгох япон хэлний дадлага.",
    si: "අරමුණ, වියදම් සීමාව, ජනගහනය, ගෙවීම් ක්‍රම, වෙන්කරවා ගැනීම, reviews, takeout සහ විවෘත වේලාවන් අනුව වෙළඳසැලක් හෝ අවන්හලක් තෝරා ගැනීමේ ජපන් භාෂා පුහුණුව.",
    bn: "উদ্দেশ্য, বাজেট, ভিড়, পেমেন্ট পদ্ধতি, রিজার্ভেশন, রিভিউ, টেকআউট এবং খোলার সময় দেখে দোকান বা রেস্টুরেন্ট বেছে নেওয়ার জাপানি অনুশীলন।",
    pt: "Prática de japonês para escolher uma loja ou restaurante considerando objetivo, orçamento, movimento, forma de pagamento, reserva, avaliações, retirada e horário de funcionamento.",
    es: "Práctica de japonés para elegir una tienda o restaurante según el propósito, presupuesto, nivel de gente, forma de pago, reserva, reseñas, comida para llevar y horario.",
    fr: "Entraînement en japonais pour choisir un magasin ou un restaurant selon l’objectif, le budget, l’affluence, le mode de paiement, la réservation, les avis, les plats à emporter et les horaires.",
    ru: "Практика японского языка для выбора магазина или ресторана с учётом цели, бюджета, загруженности, способа оплаты, бронирования, отзывов, еды навынос и часов работы.",
    uk: "Практика японської мови для вибору магазину або ресторану з урахуванням мети, бюджету, завантаженості, способу оплати, бронювання, відгуків, їжі на виніс і годин роботи."
};

const a2ChooseStoreSpeakerNames = {
    personA: {
        ja: "自分", en: "Me", "zh-CN": "自己", "zh-TW": "自己", ko: "나",
        vi: "Tôi", tl: "Ako", id: "Saya", th: "ฉัน/ผม",
        my: "မိမိ", km: "ខ្ញុំ", ne: "म", mn: "Би",
        si: "මම", bn: "আমি", pt: "Eu", es: "Yo",
        fr: "Moi", ru: "Я", uk: "Я"
    },
    personB: {
        ja: "相手", en: "Other Person", "zh-CN": "对方", "zh-TW": "對方", ko: "상대방",
        vi: "Người kia", tl: "Kausap", id: "Lawan bicara", th: "อีกฝ่าย",
        my: "တစ်ဖက်လူ", km: "អ្នកម្ខាងទៀត", ne: "अर्को व्यक्ति", mn: "Нөгөө хүн",
        si: "අනෙක් පුද්ගලයා", bn: "অন্য ব্যক্তি", pt: "Outra pessoa", es: "Otra persona",
        fr: "Autre personne", ru: "Другой человек", uk: "Інша людина"
    }
};

function makeA2ChooseStoreDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_choose_store",
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
            speakerNames: a2ChooseStoreSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2ChooseStoreContext,
        translations,
        dialogueTranslations
    };
}

const japeakA2ChooseStoreData = [

    makeA2ChooseStoreDialogue(
        "a2_choose_store_001",
        "予算に合う店を選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "今日はあまり高くない店にしたいです。",
                target: "きょうはあまりたかくないみせにしたいです",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>はあまり<ruby>高<rt>たか</rt></ruby>くない<ruby>店<rt>みせ</rt></ruby>にしたいです。",
                romaji: "Kyō wa amari takakunai mise ni shitai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "では、駅前の定食屋はどうですか。",
                target: "では えきまえのていしょくやはどうですか",
                ruby: "では、<ruby>駅前<rt>えきまえ</rt></ruby>の<ruby>定食屋<rt>ていしょくや</rt></ruby>はどうですか。",
                romaji: "Dewa, ekimae no teishokuya wa dō desu ka."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "一人千円くらいで食べられますか。",
                target: "ひとりせんえんくらいでたべられますか",
                ruby: "<ruby>一人<rt>ひとり</rt></ruby><ruby>千円<rt>せんえん</rt></ruby>くらいで<ruby>食<rt>た</rt></ruby>べられますか。",
                romaji: "Hitori sen-en kurai de taberaremasu ka."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "はい、ランチなら十分足ります。",
                target: "はい らんちならじゅうぶんたります",
                ruby: "はい、ランチなら<ruby>十分<rt>じゅうぶん</rt></ruby><ruby>足<rt>た</rt></ruby>ります。",
                romaji: "Hai, ranchi nara jūbun tarimasu."
            }
        ],
        {
            ja: ["自分：今日はあまり高くない店にしたいです。", "相手：では、駅前の定食屋はどうですか。", "自分：一人千円くらいで食べられますか。", "相手：はい、ランチなら十分足ります。"],
            en: ["Me: Today, I want to choose a place that is not too expensive.", "Other Person: Then how about the set-meal restaurant in front of the station?", "Me: Can we eat there for about 1,000 yen per person?", "Other Person: Yes, that is enough for lunch."],
            "zh-CN": ["自己：今天我想选一家不太贵的店。", "对方：那么，车站前的定食店怎么样？", "自己：一个人大约一千日元可以吃吗？", "对方：可以，午餐的话足够了。"],
            "zh-TW": ["自己：今天我想選一家不太貴的店。", "對方：那麼，車站前的定食店怎麼樣？", "自己：一個人大約一千日圓可以吃嗎？", "對方：可以，午餐的話足夠了。"],
            ko: ["나: 오늘은 너무 비싸지 않은 가게로 하고 싶어요.", "상대방: 그럼 역 앞의 정식집은 어때요?", "나: 한 사람에 천 엔 정도로 먹을 수 있나요?", "상대방: 네, 점심이라면 충분합니다."],
            vi: ["Tôi: Hôm nay tôi muốn chọn quán không quá đắt.", "Người kia: Vậy quán cơm phần trước ga thì sao?", "Tôi: Một người khoảng 1,000 yên có ăn được không?", "Người kia: Vâng, nếu là bữa trưa thì đủ."],
            tl: ["Ako: Ngayon gusto ko ng lugar na hindi masyadong mahal.", "Kausap: Kung ganoon, paano ang set-meal restaurant sa harap ng station?", "Ako: Makakakain ba tayo doon sa mga 1,000 yen bawat tao?", "Kausap: Oo, sapat iyon kung lunch."],
            id: ["Saya: Hari ini saya ingin memilih tempat yang tidak terlalu mahal.", "Lawan bicara: Kalau begitu, bagaimana dengan restoran set meal di depan stasiun?", "Saya: Apakah bisa makan sekitar 1.000 yen per orang?", "Lawan bicara: Ya, kalau makan siang itu cukup."],
            th: ["ฉัน/ผม: วันนี้อยากเลือกร้านที่ไม่แพงมากค่ะ/ครับ", "อีกฝ่าย: ถ้าอย่างนั้น ร้านอาหารชุดหน้าสถานีเป็นอย่างไรคะ/ครับ", "ฉัน/ผม: คนละประมาณ 1,000 เยนกินได้ไหมคะ/ครับ", "อีกฝ่าย: ได้ค่ะ/ครับ ถ้าเป็นมื้อกลางวันก็พอค่ะ/ครับ"],
            my: ["မိမိ: ဒီနေ့တော့ အရမ်းမစျေးကြီးတဲ့ဆိုင်ကို ရွေးချင်ပါတယ်။", "တစ်ဖက်လူ: ဒါဆို ဘူတာရှေ့က set meal ဆိုင်က ဘယ်လိုလဲ။", "မိမိ: တစ်ယောက်ကို ယန်း ၁၀၀၀ လောက်နဲ့ စားလို့ရပါသလား။", "တစ်ဖက်လူ: ရပါတယ်၊ lunch ဆိုရင် လုံလောက်ပါတယ်။"],
            km: ["ខ្ញុំ: ថ្ងៃនេះ ខ្ញុំចង់ជ្រើសហាងដែលមិនថ្លៃពេក។", "អ្នកម្ខាងទៀត: ដូច្នេះ ភោជនីយដ្ឋានឈុតអាហារមុខស្ថានីយ៍យ៉ាងម៉េចដែរ?", "ខ្ញុំ: តើអាចញ៉ាំបានប្រហែល 1,000 យ៉េនក្នុងម្នាក់ទេ?", "អ្នកម្ខាងទៀត: បាន បើជាអាហារថ្ងៃត្រង់ វាគ្រប់គ្រាន់។"],
            ne: ["म: आज धेरै महँगो नभएको ठाउँ रोज्न चाहन्छु।", "अर्को व्यक्ति: त्यसो भए स्टेशन अगाडिको सेट-मिल रेस्टुरेन्ट कस्तो छ?", "म: एक जनाले करिब १,००० येनमा खान सकिन्छ?", "अर्को व्यक्ति: हुन्छ, लन्च भए पर्याप्त हुन्छ।"],
            mn: ["Би: Өнөөдөр тийм ч үнэтэй биш газар сонгомоор байна.", "Нөгөө хүн: Тэгвэл буудлын өмнөх иж бүрдэл хоолны газар ямар вэ?", "Би: Нэг хүн 1,000 иен орчимд идэж болох уу?", "Нөгөө хүн: Тийм, өдрийн хоол бол хангалттай."],
            si: ["මම: අද වැඩිය මිල අධික නොවන තැනක් තෝරගන්න ඕනේ.", "අනෙක් පුද්ගලයා: එහෙනම් ස්ටේෂන් එක ඉදිරිපස set meal කඩය කොහොමද?", "මම: එක් අයෙකුට යෙන් 1,000ක් විතරෙන් කන්න පුළුවන්ද?", "අනෙක් පුද්ගලයා: ඔව්, lunch නම් ඒක ප්‍රමාණවත්."],
            bn: ["আমি: আজ খুব বেশি দামি নয় এমন দোকান বেছে নিতে চাই।", "অন্য ব্যক্তি: তাহলে স্টেশনের সামনে সেট-মিলের দোকান কেমন?", "আমি: একজন প্রায় ১,০০০ ইয়েনে খেতে পারবে?", "অন্য ব্যক্তি: হ্যাঁ, লাঞ্চ হলে যথেষ্ট।"],
            pt: ["Eu: Hoje quero escolher um lugar que não seja muito caro.", "Outra pessoa: Então, que tal o restaurante de refeição completa em frente à estação?", "Eu: Dá para comer por cerca de 1.000 ienes por pessoa?", "Outra pessoa: Sim, para o almoço é suficiente."],
            es: ["Yo: Hoy quiero elegir un lugar que no sea muy caro.", "Otra persona: Entonces, ¿qué tal el restaurante de menú frente a la estación?", "Yo: ¿Se puede comer por unos 1.000 yenes por persona?", "Otra persona: Sí, para el almuerzo es suficiente."],
            fr: ["Moi : Aujourd’hui, je voudrais choisir un endroit pas trop cher.", "Autre personne : Alors, que pensez-vous du restaurant de menus près de la gare ?", "Moi : Peut-on manger pour environ 1 000 yens par personne ?", "Autre personne : Oui, pour le déjeuner, c’est suffisant."],
            ru: ["Я: Сегодня я хочу выбрать место не слишком дорогое.", "Другой человек: Тогда как насчёт ресторана с комплексными обедами перед станцией?", "Я: Можно поесть примерно за 1 000 иен на человека?", "Другой человек: Да, на обед этого достаточно."],
            uk: ["Я: Сьогодні я хочу вибрати місце не надто дороге.", "Інша людина: Тоді як щодо ресторану з комплексними обідами біля станції?", "Я: Можна поїсти приблизно за 1 000 єн на людину?", "Інша людина: Так, для обіду цього достатньо."]
        }
    ),

    makeA2ChooseStoreDialogue(
        "a2_choose_store_002",
        "混んでいない店を探す",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "今日はゆっくり話せる店がいいです。",
                target: "きょうはゆっくりはなせるみせがいいです",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>はゆっくり<ruby>話<rt>はな</rt></ruby>せる<ruby>店<rt>みせ</rt></ruby>がいいです。",
                romaji: "Kyō wa yukkuri hanaseru mise ga ii desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "駅の中の店は混んでいるかもしれません。",
                target: "えきのなかのみせはこんでいるかもしれません",
                ruby: "<ruby>駅<rt>えき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>の<ruby>店<rt>みせ</rt></ruby>は<ruby>混<rt>こ</rt></ruby>んでいるかもしれません。",
                romaji: "Eki no naka no mise wa konde iru kamoshiremasen."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "少し歩いてもいいので、静かな所にしましょう。",
                target: "すこしあるいてもいいので しずかなところにしましょう",
                ruby: "<ruby>少<rt>すこ</rt></ruby>し<ruby>歩<rt>ある</rt></ruby>いてもいいので、<ruby>静<rt>しず</rt></ruby>かな<ruby>所<rt>ところ</rt></ruby>にしましょう。",
                romaji: "Sukoshi aruite mo ii node, shizuka na tokoro ni shimashō."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "では、一本裏の通りにあるカフェにしますか。",
                target: "では いっぽんうらのとおりにあるかふぇにしますか",
                ruby: "では、<ruby>一本裏<rt>いっぽんうら</rt></ruby>の<ruby>通<rt>とお</rt></ruby>りにあるカフェにしますか。",
                romaji: "Dewa, ippon ura no tōri ni aru kafe ni shimasu ka."
            }
        ],
        {
            ja: ["自分：今日はゆっくり話せる店がいいです。", "相手：駅の中の店は混んでいるかもしれません。", "自分：少し歩いてもいいので、静かな所にしましょう。", "相手：では、一本裏の通りにあるカフェにしますか。"],
            en: ["Me: Today, I want a place where we can talk slowly.", "Other Person: The shops inside the station may be crowded.", "Me: I do not mind walking a little, so let’s choose a quiet place.", "Other Person: Then shall we go to the café on the back street?"],
            "zh-CN": ["自己：今天我想去可以慢慢聊天的店。", "对方：车站里的店可能会很拥挤。", "自己：走一点也没关系，我们选安静一点的地方吧。", "对方：那去后面一条街上的咖啡店怎么样？"],
            "zh-TW": ["自己：今天我想去可以慢慢聊天的店。", "對方：車站裡的店可能會很擁擠。", "自己：走一點也沒關係，我們選安靜一點的地方吧。", "對方：那去後面一條街上的咖啡店怎麼樣？"],
            ko: ["나: 오늘은 천천히 이야기할 수 있는 가게가 좋아요.", "상대방: 역 안의 가게는 붐빌지도 모릅니다.", "나: 조금 걸어도 괜찮으니 조용한 곳으로 합시다.", "상대방: 그럼 한 블록 뒤쪽 거리에 있는 카페로 할까요?"],
            vi: ["Tôi: Hôm nay tôi muốn quán có thể nói chuyện thong thả.", "Người kia: Các quán trong ga có thể đông.", "Tôi: Đi bộ một chút cũng được, nên hãy chọn nơi yên tĩnh.", "Người kia: Vậy mình chọn quán cà phê ở con đường phía sau nhé?"],
            tl: ["Ako: Ngayon gusto ko ng lugar na makakapag-usap tayo nang mahinahon.", "Kausap: Baka matao ang mga tindahan sa loob ng station.", "Ako: Okay lang kahit maglakad nang kaunti, kaya pumili tayo ng tahimik na lugar.", "Kausap: Kung ganoon, sa café sa likod na street tayo?"],
            id: ["Saya: Hari ini saya ingin tempat yang bisa dipakai berbicara dengan santai.", "Lawan bicara: Toko di dalam stasiun mungkin ramai.", "Saya: Tidak apa-apa berjalan sedikit, jadi mari pilih tempat yang tenang.", "Lawan bicara: Kalau begitu, bagaimana dengan kafe di jalan belakang?"],
            th: ["ฉัน/ผม: วันนี้อยากไปร้านที่คุยกันได้สบาย ๆ ค่ะ/ครับ", "อีกฝ่าย: ร้านในสถานีอาจจะคนเยอะค่ะ/ครับ", "ฉัน/ผม: เดินนิดหน่อยก็ได้ เลือกที่เงียบ ๆ กันเถอะค่ะ/ครับ", "อีกฝ่าย: งั้นไปร้านคาเฟ่ที่ถนนด้านหลังอีกเส้นไหมคะ/ครับ"],
            my: ["မိမိ: ဒီနေ့တော့ ဖြည်းဖြည်းစကားပြောလို့ရတဲ့ဆိုင်ကောင်းပါတယ်။", "တစ်ဖက်လူ: ဘူတာထဲကဆိုင်တွေက လူများနေနိုင်ပါတယ်။", "မိမိ: နည်းနည်းလမ်းလျှောက်ရလည်း ရပါတယ်၊ တိတ်ဆိတ်တဲ့နေရာကို ရွေးကြရအောင်။", "တစ်ဖက်လူ: ဒါဆို နောက်ဘက်လမ်းက cafe ကို သွားမလား။"],
            km: ["ខ្ញុំ: ថ្ងៃនេះ ខ្ញុំចង់បានហាងដែលអាចនិយាយបានយឺតៗ។", "អ្នកម្ខាងទៀត: ហាងនៅក្នុងស្ថានីយ៍អាចកកកុញ។", "ខ្ញុំ: ដើរបន្តិចក៏បាន ដូច្នេះជ្រើសកន្លែងស្ងាត់ទៅ។", "អ្នកម្ខាងទៀត: ដូច្នេះ យើងទៅកាហ្វេនៅផ្លូវខាងក្រោយមួយខ្សែទេ?"],
            ne: ["म: आज आरामसँग कुरा गर्न मिल्ने ठाउँ चाहिन्छ।", "अर्को व्यक्ति: स्टेशनभित्रका पसलहरू भीड हुन सक्छन्।", "म: अलि हिँडे पनि हुन्छ, त्यसैले शान्त ठाउँ रोजौं।", "अर्को व्यक्ति: त्यसो भए पछाडिको सडकमा भएको क्याफेमा जाने?"],
            mn: ["Би: Өнөөдөр тайван ярилцаж болох газар байвал сайн.", "Нөгөө хүн: Буудлын доторх газрууд хүн ихтэй байж магадгүй.", "Би: Жаахан алхсан ч болно, тиймээс нам гүм газар сонгоё.", "Нөгөө хүн: Тэгвэл нэг гудамжны цаадах кафед орох уу?"],
            si: ["මම: අද සෙමින් කතා කරන්න පුළුවන් තැනක් හොඳයි.", "අනෙක් පුද්ගලයා: ස්ටේෂන් එක තුළ ඇති කඩවල් ජනගහනයෙන් වැඩි විය හැක.", "මම: ටිකක් ඇවිදින්න වුණත් කමක් නැහැ, නිහඬ තැනක් තෝරමු.", "අනෙක් පුද්ගලයා: එහෙනම් පසුපස මාර්ගයේ ඇති cafe එකට යමුද?"],
            bn: ["আমি: আজ এমন দোকান চাই যেখানে ধীরে ধীরে কথা বলা যায়।", "অন্য ব্যক্তি: স্টেশনের ভেতরের দোকানগুলো ভিড় হতে পারে।", "আমি: একটু হাঁটলেও সমস্যা নেই, তাই শান্ত জায়গা বেছে নিই।", "অন্য ব্যক্তি: তাহলে পেছনের রাস্তার ক্যাফেতে যাব?"],
            pt: ["Eu: Hoje quero um lugar onde possamos conversar com calma.", "Outra pessoa: As lojas dentro da estação podem estar cheias.", "Eu: Não me importo de andar um pouco, então vamos escolher um lugar tranquilo.", "Outra pessoa: Então vamos ao café da rua de trás?"],
            es: ["Yo: Hoy quiero un lugar donde podamos hablar con calma.", "Otra persona: Las tiendas dentro de la estación pueden estar llenas.", "Yo: No me importa caminar un poco, así que elijamos un lugar tranquilo.", "Otra persona: Entonces, ¿vamos al café de la calle de atrás?"],
            fr: ["Moi : Aujourd’hui, je veux un endroit où nous pouvons parler tranquillement.", "Autre personne : Les magasins dans la gare risquent d’être bondés.", "Moi : Cela ne me dérange pas de marcher un peu, alors choisissons un endroit calme.", "Autre personne : Alors, allons au café dans la rue derrière ?"],
            ru: ["Я: Сегодня хочу место, где можно спокойно поговорить.", "Другой человек: Заведения внутри станции могут быть переполнены.", "Я: Я не против немного пройтись, давайте выберем тихое место.", "Другой человек: Тогда пойдём в кафе на соседней задней улице?"],
            uk: ["Я: Сьогодні хочу місце, де можна спокійно поговорити.", "Інша людина: Заклади всередині станції можуть бути переповнені.", "Я: Я не проти трохи пройтися, тож виберімо тихе місце.", "Інша людина: Тоді підемо в кафе на вулиці позаду?"]
        }
    ),

    makeA2ChooseStoreDialogue(
        "a2_choose_store_003",
        "支払い方法で選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "今日は現金をあまり持っていません。",
                target: "きょうはげんきんをあまりもっていません",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>現金<rt>げんきん</rt></ruby>をあまり<ruby>持<rt>も</rt></ruby>っていません。",
                romaji: "Kyō wa genkin o amari motte imasen."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "それなら、電子マネーが使える店にしましょう。",
                target: "それなら でんしまねーがつかえるみせにしましょう",
                ruby: "それなら、<ruby>電子<rt>でんし</rt></ruby>マネーが<ruby>使<rt>つか</rt></ruby>える<ruby>店<rt>みせ</rt></ruby>にしましょう。",
                romaji: "Sore nara, denshi manē ga tsukaeru mise ni shimashō."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "カードだけで払えるか、先に確認したいです。",
                target: "かーどだけではらえるか さきにかくにんしたいです",
                ruby: "カードだけで<ruby>払<rt>はら</rt></ruby>えるか、<ruby>先<rt>さき</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Kādo dake de haraeru ka, saki ni kakunin shitai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "入口に使える支払い方法が書いてあります。",
                target: "いりぐちにつかえるしはらいほうほうがかいてあります",
                ruby: "<ruby>入口<rt>いりぐち</rt></ruby>に<ruby>使<rt>つか</rt></ruby>える<ruby>支払<rt>しはら</rt></ruby>い<ruby>方法<rt>ほうほう</rt></ruby>が<ruby>書<rt>か</rt></ruby>いてあります。",
                romaji: "Iriguchi ni tsukaeru shiharai hōhō ga kaite arimasu."
            }
        ],
        {
            ja: ["自分：今日は現金をあまり持っていません。", "相手：それなら、電子マネーが使える店にしましょう。", "自分：カードだけで払えるか、先に確認したいです。", "相手：入口に使える支払い方法が書いてあります。"],
            en: ["Me: I do not have much cash today.", "Other Person: In that case, let’s choose a place that accepts electronic money.", "Me: I want to check first whether I can pay only by card.", "Other Person: The accepted payment methods are written at the entrance."],
            "zh-CN": ["自己：今天我没有带太多现金。", "对方：那我们选可以使用电子钱包的店吧。", "自己：我想先确认能不能只用卡付款。", "对方：入口处写着可以使用的付款方式。"],
            "zh-TW": ["自己：今天我沒有帶太多現金。", "對方：那我們選可以使用電子錢包的店吧。", "自己：我想先確認能不能只用卡付款。", "對方：入口處寫著可以使用的付款方式。"],
            ko: ["나: 오늘은 현금을 별로 가지고 있지 않습니다.", "상대방: 그렇다면 전자머니를 사용할 수 있는 가게로 합시다.", "나: 카드만으로 결제할 수 있는지 먼저 확인하고 싶어요.", "상대방: 입구에 사용할 수 있는 결제 방법이 적혀 있습니다."],
            vi: ["Tôi: Hôm nay tôi không mang nhiều tiền mặt.", "Người kia: Vậy hãy chọn quán dùng được tiền điện tử.", "Tôi: Tôi muốn kiểm tra trước xem có thể trả chỉ bằng thẻ không.", "Người kia: Các cách thanh toán có thể dùng được ghi ở lối vào."],
            tl: ["Ako: Wala akong masyadong cash ngayon.", "Kausap: Kung ganoon, pumili tayo ng tindahan na tumatanggap ng electronic money.", "Ako: Gusto kong i-check muna kung puwedeng card lang ang bayad.", "Kausap: Nakasulat sa entrance ang mga payment method na puwede."],
            id: ["Saya: Hari ini saya tidak membawa banyak uang tunai.", "Lawan bicara: Kalau begitu, mari pilih tempat yang bisa memakai uang elektronik.", "Saya: Saya ingin memastikan dulu apakah bisa bayar hanya dengan kartu.", "Lawan bicara: Metode pembayaran yang bisa digunakan tertulis di pintu masuk."],
            th: ["ฉัน/ผม: วันนี้ไม่ได้พกเงินสดมากค่ะ/ครับ", "อีกฝ่าย: ถ้าอย่างนั้นเลือกร้านที่ใช้เงินอิเล็กทรอนิกส์ได้กันค่ะ/ครับ", "ฉัน/ผม: อยากเช็กก่อนว่าจ่ายด้วยบัตรอย่างเดียวได้ไหมค่ะ/ครับ", "อีกฝ่าย: วิธีชำระเงินที่ใช้ได้เขียนไว้ที่ทางเข้าค่ะ/ครับ"],
            my: ["မိမိ: ဒီနေ့ ငွေသား သိပ်မပါဘူး။", "တစ်ဖက်လူ: ဒါဆို electronic money သုံးလို့ရတဲ့ဆိုင်ကို ရွေးကြရအောင်။", "မိမိ: card ပဲနဲ့ ပေးချေလို့ရမရ အရင်စစ်ချင်ပါတယ်။", "တစ်ဖက်လူ: ဝင်ပေါက်မှာ သုံးလို့ရတဲ့ ငွေပေးချေမှုနည်းလမ်းတွေ ရေးထားပါတယ်။"],
            km: ["ខ្ញុំ: ថ្ងៃនេះខ្ញុំមិនមានសាច់ប្រាក់ច្រើនទេ។", "អ្នកម្ខាងទៀត: បើដូច្នោះ ជ្រើសហាងដែលអាចប្រើប្រាក់អេឡិចត្រូនិកបាន។", "ខ្ញុំ: ខ្ញុំចង់ពិនិត្យមុនថាអាចបង់ដោយកាតតែមួយបានទេ។", "អ្នកម្ខាងទៀត: វិធីបង់ប្រាក់ដែលអាចប្រើបានត្រូវបានសរសេរនៅច្រកចូល។"],
            ne: ["म: आज मसँग धेरै नगद छैन।", "अर्को व्यक्ति: त्यसो भए इलेक्ट्रोनिक मनी चल्ने ठाउँ रोजौं।", "म: कार्डले मात्र तिर्न मिल्छ कि पहिले पुष्टि गर्न चाहन्छु।", "अर्को व्यक्ति: प्रवेशद्वारमा प्रयोग गर्न मिल्ने भुक्तानी तरिका लेखिएको छ।"],
            mn: ["Би: Өнөөдөр надад бэлэн мөнгө их алга.", "Нөгөө хүн: Тэгвэл цахим мөнгө ашиглаж болох газар сонгоё.", "Би: Зөвхөн картаар төлж болох эсэхийг эхлээд шалгамаар байна.", "Нөгөө хүн: Орцон дээр ашиглаж болох төлбөрийн аргууд бичигдсэн байгаа."],
            si: ["මම: අද මට වැඩි මුදල් නැහැ.", "අනෙක් පුද්ගලයා: එහෙනම් electronic money භාවිතා කළ හැකි කඩයක් තෝරමු.", "මම: card එකෙන් විතරක් ගෙවිය හැකිද කියලා මුලින්ම පරීක්ෂා කරන්න ඕනේ.", "අනෙක් පුද්ගලයා: ඇතුල්වීමේ දොරකඩ භාවිතා කළ හැකි ගෙවීම් ක්‍රම ලියා තිබෙනවා."],
            bn: ["আমি: আজ আমার কাছে বেশি নগদ নেই।", "অন্য ব্যক্তি: তাহলে ইলেকট্রনিক মানি ব্যবহার করা যায় এমন দোকান বেছে নিই।", "আমি: শুধু কার্ড দিয়ে পেমেন্ট করা যায় কি না আগে নিশ্চিত করতে চাই।", "অন্য ব্যক্তি: প্রবেশদ্বারে ব্যবহারযোগ্য পেমেন্ট পদ্ধতি লেখা আছে।"],
            pt: ["Eu: Hoje não tenho muito dinheiro em espécie.", "Outra pessoa: Nesse caso, vamos escolher um lugar que aceite dinheiro eletrônico.", "Eu: Quero confirmar antes se posso pagar apenas com cartão.", "Outra pessoa: As formas de pagamento aceitas estão escritas na entrada."],
            es: ["Yo: Hoy no tengo mucho efectivo.", "Otra persona: Entonces elijamos un lugar que acepte dinero electrónico.", "Yo: Quiero confirmar antes si puedo pagar solo con tarjeta.", "Otra persona: Los métodos de pago aceptados están escritos en la entrada."],
            fr: ["Moi : Aujourd’hui, je n’ai pas beaucoup d’argent liquide.", "Autre personne : Dans ce cas, choisissons un endroit qui accepte la monnaie électronique.", "Moi : Je veux vérifier d’abord si je peux payer seulement par carte.", "Autre personne : Les moyens de paiement acceptés sont indiqués à l’entrée."],
            ru: ["Я: Сегодня у меня мало наличных.", "Другой человек: Тогда выберем место, где принимают электронные деньги.", "Я: Я хочу сначала проверить, можно ли оплатить только картой.", "Другой человек: На входе написаны доступные способы оплаты."],
            uk: ["Я: Сьогодні в мене мало готівки.", "Інша людина: Тоді виберімо місце, де приймають електронні гроші.", "Я: Я хочу спочатку перевірити, чи можна оплатити лише карткою.", "Інша людина: На вході написані доступні способи оплати."]
        }
    ),

    makeA2ChooseStoreDialogue(
        "a2_choose_store_004",
        "口コミを見て選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "初めて行く店なので、口コミを見てから決めたいです。",
                target: "はじめていくみせなので くちこみをみてからきめたいです",
                ruby: "<ruby>初<rt>はじ</rt></ruby>めて<ruby>行<rt>い</rt></ruby>く<ruby>店<rt>みせ</rt></ruby>なので、<ruby>口<rt>くち</rt></ruby>コミを<ruby>見<rt>み</rt></ruby>てから<ruby>決<rt>き</rt></ruby>めたいです。",
                romaji: "Hajimete iku mise na node, kuchikomi o mite kara kimetai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "評価だけでなく、写真も見ると分かりやすいですよ。",
                target: "ひょうかだけでなく しゃしんもみるとわかりやすいですよ",
                ruby: "<ruby>評価<rt>ひょうか</rt></ruby>だけでなく、<ruby>写真<rt>しゃしん</rt></ruby>も<ruby>見<rt>み</rt></ruby>ると<ruby>分<rt>わ</rt></ruby>かりやすいですよ。",
                romaji: "Hyōka dake de naku, shashin mo miru to wakariyasui desu yo."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "この店は料理の写真が多くて安心です。",
                target: "このみせはりょうりのしゃしんがおおくてあんしんです",
                ruby: "この<ruby>店<rt>みせ</rt></ruby>は<ruby>料理<rt>りょうり</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>が<ruby>多<rt>おお</rt></ruby>くて<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Kono mise wa ryōri no shashin ga ōkute anshin desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "最近の口コミも良いので、ここにしてみましょう。",
                target: "さいきんのくちこみもいいので ここにしてみましょう",
                ruby: "<ruby>最近<rt>さいきん</rt></ruby>の<ruby>口<rt>くち</rt></ruby>コミも<ruby>良<rt>い</rt></ruby>いので、ここにしてみましょう。",
                romaji: "Saikin no kuchikomi mo ii node, koko ni shite mimashō."
            }
        ],
        {
            ja: ["自分：初めて行く店なので、口コミを見てから決めたいです。", "相手：評価だけでなく、写真も見ると分かりやすいですよ。", "自分：この店は料理の写真が多くて安心です。", "相手：最近の口コミも良いので、ここにしてみましょう。"],
            en: ["Me: Since it is my first time going to this place, I want to check reviews before deciding.", "Other Person: It is easier to understand if you look not only at ratings but also at photos.", "Me: This place has many food photos, so I feel comfortable.", "Other Person: The recent reviews are also good, so let’s try this place."],
            "zh-CN": ["自己：因为是第一次去的店，所以我想先看评价再决定。", "对方：不仅看评分，也看照片会更容易了解。", "自己：这家店有很多料理照片，让人放心。", "对方：最近的评价也不错，我们就选这里吧。"],
            "zh-TW": ["自己：因為是第一次去的店，所以我想先看評價再決定。", "對方：不只看評分，也看照片會更容易了解。", "自己：這家店有很多料理照片，讓人放心。", "對方：最近的評價也不錯，我們就選這裡吧。"],
            ko: ["나: 처음 가는 가게라서 후기를 보고 결정하고 싶어요.", "상대방: 평가뿐만 아니라 사진도 보면 알기 쉬워요.", "나: 이 가게는 음식 사진이 많아서 안심이 됩니다.", "상대방: 최근 후기도 좋으니 여기로 해 봅시다."],
            vi: ["Tôi: Vì đây là quán tôi đi lần đầu, tôi muốn xem đánh giá rồi quyết định.", "Người kia: Không chỉ điểm đánh giá, xem cả ảnh thì dễ hiểu hơn.", "Tôi: Quán này có nhiều ảnh món ăn nên tôi thấy yên tâm.", "Người kia: Đánh giá gần đây cũng tốt, nên thử chỗ này nhé."],
            tl: ["Ako: First time kong pupunta sa tindahang ito, kaya gusto kong tingnan muna ang reviews.", "Kausap: Mas madaling maintindihan kung titingnan hindi lang rating kundi pati photos.", "Ako: Maraming food photos ang lugar na ito, kaya kampante ako.", "Kausap: Maganda rin ang recent reviews, kaya subukan natin ito."],
            id: ["Saya: Karena ini tempat yang pertama kali saya kunjungi, saya ingin melihat ulasan dulu sebelum memutuskan.", "Lawan bicara: Lebih mudah dipahami jika melihat bukan hanya rating, tetapi juga foto.", "Saya: Tempat ini punya banyak foto makanan, jadi saya merasa tenang.", "Lawan bicara: Ulasan terbaru juga bagus, jadi mari coba tempat ini."],
            th: ["ฉัน/ผม: เป็นร้านที่ไปครั้งแรก เลยอยากดูรีวิวก่อนตัดสินใจค่ะ/ครับ", "อีกฝ่าย: ถ้าดูไม่ใช่แค่คะแนน แต่ดูรูปด้วย จะเข้าใจง่ายขึ้นค่ะ/ครับ", "ฉัน/ผม: ร้านนี้มีรูปอาหารเยอะ เลยรู้สึกสบายใจค่ะ/ครับ", "อีกฝ่าย: รีวิวล่าสุดก็ดี งั้นลองร้านนี้กันค่ะ/ครับ"],
            my: ["မိမိ: ပထမဆုံးသွားမယ့်ဆိုင်ဖြစ်လို့ review ကြည့်ပြီးမှ ဆုံးဖြတ်ချင်ပါတယ်။", "တစ်ဖက်လူ: rating သာမက ဓာတ်ပုံတွေလည်း ကြည့်ရင် ပိုနားလည်လွယ်ပါတယ်။", "မိမိ: ဒီဆိုင်က အစားအစာဓာတ်ပုံတွေများလို့ စိတ်ချရပါတယ်။", "တစ်ဖက်လူ: မကြာသေးခင်က review တွေလည်း ကောင်းတော့ ဒီဆိုင်ကို စမ်းကြည့်ကြရအောင်။"],
            km: ["ខ្ញុំ: ព្រោះជាហាងដែលខ្ញុំទៅលើកដំបូង ខ្ញុំចង់មើលការវាយតម្លៃមុនសម្រេច។", "អ្នកម្ខាងទៀត: មើលមិនត្រឹមតែពិន្ទុទេ បើមើលរូបថតផង នឹងយល់ងាយជាង។", "ខ្ញុំ: ហាងនេះមានរូបម្ហូបច្រើន ដូច្នេះខ្ញុំមានអារម្មណ៍ទុកចិត្ត។", "អ្នកម្ខាងទៀត: ការវាយតម្លៃថ្មីៗក៏ល្អ ដូច្នេះសាកល្បងទីនេះទៅ។"],
            ne: ["म: पहिलो पटक जाने ठाउँ भएकाले समीक्षा हेरेर निर्णय गर्न चाहन्छु।", "अर्को व्यक्ति: मूल्याङ्कन मात्र होइन, फोटो पनि हेर्दा बुझ्न सजिलो हुन्छ।", "म: यो ठाउँमा खानाको फोटो धेरै छन्, त्यसैले ढुक्क लाग्छ।", "अर्को व्यक्ति: पछिल्ला समीक्षा पनि राम्रा छन्, त्यसैले यहाँ प्रयास गरौं।"],
            mn: ["Би: Анх удаа очих газар болохоор сэтгэгдлийг нь үзээд шийдмээр байна.", "Нөгөө хүн: Зөвхөн үнэлгээ биш, зураг ч бас харвал ойлгоход амар.", "Би: Энэ газар хоолны зураг ихтэй болохоор санаа амар байна.", "Нөгөө хүн: Сүүлийн үеийн сэтгэгдэл ч сайн байна, энд орж үзье."],
            si: ["මම: පළමුවරට යන තැනක් නිසා reviews බලලා තීරණය කරන්න ඕනේ.", "අනෙක් පුද්ගලයා: rating විතරක් නොව photos බලද්දී තේරුම් ගන්න පහසුයි.", "මම: මේ තැනේ කෑම photos ගොඩක් තියෙන නිසා මට විශ්වාසයි.", "අනෙක් පුද්ගලයා: අලුත් reviewsත් හොඳයි, එහෙනම් මේ තැන try කරමු."],
            bn: ["আমি: প্রথমবার যাচ্ছি, তাই রিভিউ দেখে সিদ্ধান্ত নিতে চাই।", "অন্য ব্যক্তি: শুধু রেটিং নয়, ছবি দেখলেও বোঝা সহজ হয়।", "আমি: এই দোকানে খাবারের ছবি অনেক, তাই ভরসা পাচ্ছি।", "অন্য ব্যক্তি: সাম্প্রতিক রিভিউও ভালো, তাই এখানে চেষ্টা করি।"],
            pt: ["Eu: Como é a primeira vez que vou a esse lugar, quero ver as avaliações antes de decidir.", "Outra pessoa: É mais fácil entender se você olhar não só a nota, mas também as fotos.", "Eu: Este lugar tem muitas fotos dos pratos, então fico mais tranquilo.", "Outra pessoa: As avaliações recentes também são boas, então vamos tentar este lugar."],
            es: ["Yo: Como es la primera vez que voy a este lugar, quiero ver las reseñas antes de decidir.", "Otra persona: Es más fácil entender si mira no solo la calificación, sino también las fotos.", "Yo: Este lugar tiene muchas fotos de comida, así que me da confianza.", "Otra persona: Las reseñas recientes también son buenas, así que probemos este lugar."],
            fr: ["Moi : Comme c’est la première fois que j’y vais, je veux regarder les avis avant de décider.", "Autre personne : C’est plus facile à comprendre si vous regardez non seulement les notes, mais aussi les photos.", "Moi : Ce lieu a beaucoup de photos des plats, donc je suis rassuré.", "Autre personne : Les avis récents sont aussi bons, alors essayons cet endroit."],
            ru: ["Я: Так как я иду туда впервые, хочу сначала посмотреть отзывы.", "Другой человек: Понятнее, если смотреть не только оценки, но и фотографии.", "Я: У этого места много фото блюд, поэтому мне спокойнее.", "Другой человек: Недавние отзывы тоже хорошие, давайте попробуем это место."],
            uk: ["Я: Оскільки я йду туди вперше, хочу спочатку подивитися відгуки.", "Інша людина: Зрозуміліше, якщо дивитися не лише оцінки, а й фотографії.", "Я: У цього місця багато фото страв, тому мені спокійніше.", "Інша людина: Останні відгуки теж хороші, тож спробуймо це місце."]
        }
    ),

    makeA2ChooseStoreDialogue(
        "a2_choose_store_005",
        "予約できる店を選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "金曜日の夜なので、予約できる店が安心です。",
                target: "きんようびのよるなので よやくできるみせがあんしんです",
                ruby: "<ruby>金曜日<rt>きんようび</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>なので、<ruby>予約<rt>よやく</rt></ruby>できる<ruby>店<rt>みせ</rt></ruby>が<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Kin-yōbi no yoru na node, yoyaku dekiru mise ga anshin desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "この店はネットで席を取れるようです。",
                target: "このみせはねっとでせきをとれるようです",
                ruby: "この<ruby>店<rt>みせ</rt></ruby>はネットで<ruby>席<rt>せき</rt></ruby>を<ruby>取<rt>と</rt></ruby>れるようです。",
                romaji: "Kono mise wa netto de seki o toreru yō desu."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "人数を入れると、空いている時間が出ますね。",
                target: "にんずうをいれると あいているじかんがでますね",
                ruby: "<ruby>人数<rt>にんずう</rt></ruby>を<ruby>入<rt>い</rt></ruby>れると、<ruby>空<rt>あ</rt></ruby>いている<ruby>時間<rt>じかん</rt></ruby>が<ruby>出<rt>で</rt></ruby>ますね。",
                romaji: "Ninzū o ireru to, aite iru jikan ga demasu ne."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "十九時は満席なので、十九時半にしましょう。",
                target: "じゅうくじはまんせきなので じゅうくじはんにしましょう",
                ruby: "<ruby>十九時<rt>じゅうくじ</rt></ruby>は<ruby>満席<rt>まんせき</rt></ruby>なので、<ruby>十九時半<rt>じゅうくじはん</rt></ruby>にしましょう。",
                romaji: "Jūku-ji wa manseki na node, jūku-ji han ni shimashō."
            }
        ],
        {
            ja: ["自分：金曜日の夜なので、予約できる店が安心です。", "相手：この店はネットで席を取れるようです。", "自分：人数を入れると、空いている時間が出ますね。", "相手：十九時は満席なので、十九時半にしましょう。"],
            en: ["Me: Since it is Friday night, I feel safer choosing a place where we can make a reservation.", "Other Person: It seems that we can reserve seats online at this place.", "Me: When we enter the number of people, available times appear.", "Other Person: 7 p.m. is fully booked, so let’s choose 7:30 p.m."],
            "zh-CN": ["自己：因为是星期五晚上，能预约的店比较安心。", "对方：这家店好像可以在网上订座。", "自己：输入人数后，会显示空位时间呢。", "对方：十九点满座，所以选十九点半吧。"],
            "zh-TW": ["自己：因為是星期五晚上，能預約的店比較安心。", "對方：這家店好像可以在網路上訂位。", "自己：輸入人數後，會顯示空位時間呢。", "對方：十九點滿座，所以選十九點半吧。"],
            ko: ["나: 금요일 밤이라서 예약할 수 있는 가게가 안심됩니다.", "상대방: 이 가게는 인터넷으로 자리를 예약할 수 있는 것 같아요.", "나: 인원수를 넣으면 가능한 시간이 나오네요.", "상대방: 19시는 만석이니 19시 30분으로 합시다."],
            vi: ["Tôi: Vì là tối thứ Sáu, chọn quán có thể đặt chỗ sẽ yên tâm hơn.", "Người kia: Quán này có vẻ đặt chỗ online được.", "Tôi: Khi nhập số người, thời gian còn chỗ hiện ra nhỉ.", "Người kia: 19 giờ đã kín chỗ, nên chọn 19 giờ 30 nhé."],
            tl: ["Ako: Dahil Friday night, mas kampante kung restaurant na puwedeng mag-reserve.", "Kausap: Mukhang puwedeng kumuha ng seat online sa lugar na ito.", "Ako: Kapag nilagay ang bilang ng tao, lumalabas ang available time.", "Kausap: Full na ang 7 p.m., kaya 7:30 p.m. na lang."],
            id: ["Saya: Karena Jumat malam, lebih aman memilih tempat yang bisa dipesan.", "Lawan bicara: Sepertinya tempat ini bisa reservasi kursi lewat internet.", "Saya: Kalau memasukkan jumlah orang, waktu yang kosong muncul ya.", "Lawan bicara: Pukul 19.00 sudah penuh, jadi pilih pukul 19.30."],
            th: ["ฉัน/ผม: เพราะเป็นคืนวันศุกร์ เลือกร้านที่จองได้จะสบายใจกว่าค่ะ/ครับ", "อีกฝ่าย: ร้านนี้ดูเหมือนจองที่นั่งทางเน็ตได้ค่ะ/ครับ", "ฉัน/ผม: พอใส่จำนวนคน เวลาที่ว่างก็ขึ้นมานะคะ/ครับ", "อีกฝ่าย: 19.00 น. เต็มแล้ว งั้นเป็น 19.30 น. ค่ะ/ครับ"],
            my: ["မိမိ: သောကြာညဖြစ်လို့ ကြိုတင်မှာလို့ရတဲ့ဆိုင်ကို ရွေးရင် စိတ်ချရပါတယ်။", "တစ်ဖက်လူ: ဒီဆိုင်က online နဲ့ ထိုင်ခုံ reserve လုပ်လို့ရပုံရပါတယ်။", "မိမိ: လူဦးရေထည့်လိုက်ရင် အချိန်လွတ်တွေ ပေါ်လာတယ်နော်။", "တစ်ဖက်လူ: ၇ နာရီက ပြည့်နေတော့ ၇ နာရီခွဲလုပ်ကြရအောင်။"],
            km: ["ខ្ញុំ: ព្រោះជាយប់ថ្ងៃសុក្រ ហាងដែលអាចកក់បានធ្វើឱ្យមានអារម្មណ៍ទុកចិត្ត។", "អ្នកម្ខាងទៀត: ហាងនេះហាក់ដូចជាអាចកក់កន្លែងតាមអ៊ីនធឺណិតបាន។", "ខ្ញុំ: ពេលបញ្ចូលចំនួនមនុស្ស វាបង្ហាញម៉ោងដែលទំនេរ។", "អ្នកម្ខាងទៀត: ម៉ោង 19 ពេញហើយ ដូច្នេះយកម៉ោង 19:30។"],
            ne: ["म: शुक्रबारको रात भएकाले बुकिङ गर्न मिल्ने ठाउँ सुरक्षित लाग्छ।", "अर्को व्यक्ति: यो ठाउँमा इन्टरनेटबाट सिट बुक गर्न मिल्ने जस्तो छ।", "म: मानिसको संख्या राख्दा खाली समय देखिन्छ।", "अर्को व्यक्ति: १९ बजे भरिएको छ, त्यसैले १९:३० गरौं।"],
            mn: ["Би: Баасан гарагийн орой болохоор захиалга авч болдог газар сонговол санаа амар.", "Нөгөө хүн: Энэ газар онлайнаар суудал захиалж болдог бололтой.", "Би: Хүний тоог оруулбал сул цаг гарч ирж байна.", "Нөгөө хүн: 19:00 дүүрсэн тул 19:30 болгоё."],
            si: ["මම: සිකුරාදා රාත්‍රියක් නිසා වෙන්කරවා ගත හැකි තැනක් නම් ආරක්ෂිතයි.", "අනෙක් පුද්ගලයා: මේ තැන online seat reserve කරන්න පුළුවන් වගේ.", "මම: මිනිසුන් ගණන ඇතුල් කළාම හිස් වේලාවන් පෙන්වනවා.", "අනෙක් පුද්ගලයා: 19:00 පිරී ඇති නිසා 19:30 කරමු."],
            bn: ["আমি: শুক্রবার রাত, তাই রিজার্ভেশন করা যায় এমন দোকান হলে নিশ্চিন্ত।", "অন্য ব্যক্তি: এই দোকানে অনলাইনে সিট নেওয়া যায় মনে হচ্ছে।", "আমি: লোকসংখ্যা দিলে খালি সময় দেখাচ্ছে।", "অন্য ব্যক্তি: ১৯টা পূর্ণ, তাই ১৯টা ৩০ করি।"],
            pt: ["Eu: Como é sexta à noite, fico mais tranquilo escolhendo um lugar com reserva.", "Outra pessoa: Parece que este lugar permite reservar assentos pela internet.", "Eu: Quando colocamos o número de pessoas, aparecem os horários disponíveis.", "Outra pessoa: Às 19h está cheio, então vamos escolher 19h30."],
            es: ["Yo: Como es viernes por la noche, me siento más tranquilo eligiendo un lugar con reserva.", "Otra persona: Parece que este lugar permite reservar asientos por internet.", "Yo: Al poner el número de personas, aparecen los horarios disponibles.", "Otra persona: A las 19:00 está lleno, así que elijamos las 19:30."],
            fr: ["Moi : Comme c’est vendredi soir, je suis plus rassuré de choisir un endroit où l’on peut réserver.", "Autre personne : Il semble qu’on puisse réserver une table en ligne dans cet endroit.", "Moi : Quand on entre le nombre de personnes, les horaires disponibles apparaissent.", "Autre personne : 19 heures est complet, alors choisissons 19 h 30."],
            ru: ["Я: Так как это вечер пятницы, спокойнее выбрать место, где можно забронировать.", "Другой человек: Кажется, здесь можно забронировать места онлайн.", "Я: Если ввести количество людей, появляются свободные часы.", "Другой человек: В 19:00 всё занято, давайте выберем 19:30."],
            uk: ["Я: Оскільки це вечір п’ятниці, спокійніше вибрати місце, де можна забронювати.", "Інша людина: Здається, тут можна забронювати місця онлайн.", "Я: Якщо ввести кількість людей, з’являються вільні години.", "Інша людина: О 19:00 усе зайнято, тож виберімо 19:30."]
        }
    ),

    makeA2ChooseStoreDialogue(
        "a2_choose_store_006",
        "テイクアウトできる店を選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "今日は家で食べたいので、持ち帰りにしたいです。",
                target: "きょうはいえでたべたいので もちかえりにしたいです",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>家<rt>いえ</rt></ruby>で<ruby>食<rt>た</rt></ruby>べたいので、<ruby>持<rt>も</rt></ruby>ち<ruby>帰<rt>かえ</rt></ruby>りにしたいです。",
                romaji: "Kyō wa ie de tabetai node, mochikaeri ni shitai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "この店は弁当だけでなく、単品も持ち帰れます。",
                target: "このみせはべんとうだけでなく たんぴんももちかえれます",
                ruby: "この<ruby>店<rt>みせ</rt></ruby>は<ruby>弁当<rt>べんとう</rt></ruby>だけでなく、<ruby>単品<rt>たんぴん</rt></ruby>も<ruby>持<rt>も</rt></ruby>ち<ruby>帰<rt>かえ</rt></ruby>れます。",
                romaji: "Kono mise wa bentō dake de naku, tanpin mo mochikaeremasu."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "待ち時間はどのくらいですか。",
                target: "まちじかんはどのくらいですか",
                ruby: "<ruby>待<rt>ま</rt></ruby>ち<ruby>時間<rt>じかん</rt></ruby>はどのくらいですか。",
                romaji: "Machijikan wa dono kurai desu ka."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "電話で先に注文すれば、すぐ受け取れます。",
                target: "でんわでさきにちゅうもんすれば すぐうけとれます",
                ruby: "<ruby>電話<rt>でんわ</rt></ruby>で<ruby>先<rt>さき</rt></ruby>に<ruby>注文<rt>ちゅうもん</rt></ruby>すれば、すぐ<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>れます。",
                romaji: "Denwa de saki ni chūmon sureba, sugu uketoremasu."
            }
        ],
        {
            ja: ["自分：今日は家で食べたいので、持ち帰りにしたいです。", "相手：この店は弁当だけでなく、単品も持ち帰れます。", "自分：待ち時間はどのくらいですか。", "相手：電話で先に注文すれば、すぐ受け取れます。"],
            en: ["Me: Today, I want to eat at home, so I want takeout.", "Other Person: This place offers not only lunch boxes but also individual dishes for takeout.", "Me: How long is the waiting time?", "Other Person: If you order by phone first, you can pick it up quickly."],
            "zh-CN": ["自己：今天我想在家吃，所以想外带。", "对方：这家店不仅可以外带便当，也可以外带单品。", "自己：等待时间大约多久？", "对方：如果先用电话点餐，就能很快取餐。"],
            "zh-TW": ["自己：今天我想在家吃，所以想外帶。", "對方：這家店不只可以外帶便當，也可以外帶單品。", "自己：等待時間大約多久？", "對方：如果先用電話點餐，就能很快取餐。"],
            ko: ["나: 오늘은 집에서 먹고 싶어서 포장으로 하고 싶어요.", "상대방: 이 가게는 도시락뿐만 아니라 단품도 포장할 수 있습니다.", "나: 대기 시간은 어느 정도인가요?", "상대방: 전화로 먼저 주문하면 바로 받을 수 있습니다."],
            vi: ["Tôi: Hôm nay tôi muốn ăn ở nhà nên muốn mua mang về.", "Người kia: Quán này không chỉ có cơm hộp mà cả món lẻ cũng mang về được.", "Tôi: Thời gian chờ khoảng bao lâu?", "Người kia: Nếu gọi điện đặt trước, có thể nhận ngay."],
            tl: ["Ako: Gusto kong kumain sa bahay ngayon, kaya takeout ang gusto ko.", "Kausap: Sa lugar na ito, hindi lang bento kundi pati individual dishes ay puwedeng i-takeout.", "Ako: Gaano katagal ang waiting time?", "Kausap: Kung tatawag at oorder muna, makukuha agad."],
            id: ["Saya: Hari ini saya ingin makan di rumah, jadi saya ingin takeout.", "Lawan bicara: Tempat ini tidak hanya menyediakan bento, tetapi juga menu satuan untuk dibawa pulang.", "Saya: Berapa lama waktu tunggunya?", "Lawan bicara: Jika memesan lewat telepon terlebih dahulu, bisa langsung diambil."],
            th: ["ฉัน/ผม: วันนี้อยากกินที่บ้าน เลยอยากซื้อกลับค่ะ/ครับ", "อีกฝ่าย: ร้านนี้ไม่ใช่แค่ข้าวกล่อง แต่เมนูเดี่ยวก็ซื้อกลับได้ค่ะ/ครับ", "ฉัน/ผม: เวลารอนานแค่ไหนคะ/ครับ", "อีกฝ่าย: ถ้าโทรสั่งล่วงหน้า ก็รับได้ทันทีค่ะ/ครับ"],
            my: ["မိမိ: ဒီနေ့ အိမ်မှာစားချင်လို့ takeout လုပ်ချင်ပါတယ်။", "တစ်ဖက်လူ: ဒီဆိုင်က bentō သာမက single item တွေလည်း takeout လုပ်လို့ရပါတယ်။", "မိမိ: စောင့်ရမယ့်အချိန် ဘယ်လောက်လဲ။", "တစ်ဖက်လူ: ဖုန်းနဲ့ အရင်မှာထားရင် ချက်ချင်းယူလို့ရပါတယ်။"],
            km: ["ខ្ញុំ: ថ្ងៃនេះខ្ញុំចង់ញ៉ាំនៅផ្ទះ ដូច្នេះចង់យកទៅញ៉ាំក្រៅ។", "អ្នកម្ខាងទៀត: ហាងនេះមិនត្រឹមតែបាយប្រអប់ទេ ម្ហូបដាច់ដោយឡែកក៏អាចយកទៅញ៉ាំក្រៅបាន។", "ខ្ញុំ: តើពេលរង់ចាំប៉ុន្មាន?", "អ្នកម្ខាងទៀត: ប្រសិនបើកុម្ម៉ង់តាមទូរស័ព្ទមុន អាចទទួលបានភ្លាមៗ។"],
            ne: ["म: आज घरमा खान चाहन्छु, त्यसैले टेकआउट गर्न चाहन्छु।", "अर्को व्यक्ति: यो ठाउँमा बेन्तो मात्र होइन, छुट्टै परिकार पनि लैजान मिल्छ।", "म: कति समय पर्खिनुपर्छ?", "अर्को व्यक्ति: फोनबाट पहिले अर्डर गरे तुरुन्त लिन सकिन्छ।"],
            mn: ["Би: Өнөөдөр гэртээ идмээр байгаа тул авч явмаар байна.", "Нөгөө хүн: Энэ газар бэнто төдийгүй дан хоолыг ч авч явж болно.", "Би: Хүлээх хугацаа хэр удаан вэ?", "Нөгөө хүн: Утсаар урьдчилж захиалбал шууд авч болно."],
            si: ["මම: අද ගෙදර කන්න ඕනේ, ඒ නිසා takeout කරන්න ඕනේ.", "අනෙක් පුද්ගලයා: මේ තැනේ bento විතරක් නොව තනි itemsත් takeout කරන්න පුළුවන්.", "මම: කොච්චර වෙලා බලාගෙන ඉන්න වෙයිද?", "අනෙක් පුද්ගලයා: දුරකථනයෙන් කලින් order කළොත් ඉක්මනින් ගන්න පුළුවන්."],
            bn: ["আমি: আজ বাড়িতে খেতে চাই, তাই টেকআউট করতে চাই।", "অন্য ব্যক্তি: এই দোকানে শুধু বেন্তো নয়, আলাদা আইটেমও টেকআউট করা যায়।", "আমি: অপেক্ষার সময় কতক্ষণ?", "অন্য ব্যক্তি: ফোনে আগে অর্ডার করলে দ্রুত নিতে পারবেন।"],
            pt: ["Eu: Hoje quero comer em casa, então quero comida para levar.", "Outra pessoa: Este lugar oferece não só bentô, mas também pratos individuais para levar.", "Eu: Quanto tempo é a espera?", "Outra pessoa: Se você pedir antes por telefone, pode retirar rapidamente."],
            es: ["Yo: Hoy quiero comer en casa, así que quiero comida para llevar.", "Otra persona: Este lugar ofrece no solo bentos, sino también platos individuales para llevar.", "Yo: ¿Cuánto tiempo hay que esperar?", "Otra persona: Si pide primero por teléfono, puede recogerlo rápidamente."],
            fr: ["Moi : Aujourd’hui, je veux manger à la maison, donc je voudrais à emporter.", "Autre personne : Cet endroit propose non seulement des bentos, mais aussi des plats séparés à emporter.", "Moi : Combien de temps faut-il attendre ?", "Autre personne : Si vous commandez d’abord par téléphone, vous pouvez le récupérer rapidement."],
            ru: ["Я: Сегодня хочу поесть дома, поэтому хочу взять навынос.", "Другой человек: Здесь можно взять не только бэнто, но и отдельные блюда навынос.", "Я: Сколько ждать?", "Другой человек: Если заказать заранее по телефону, можно быстро забрать."],
            uk: ["Я: Сьогодні хочу поїсти вдома, тому хочу взяти їжу з собою.", "Інша людина: Тут можна взяти не лише бенто, а й окремі страви з собою.", "Я: Скільки чекати?", "Інша людина: Якщо замовити заздалегідь телефоном, можна швидко забрати."]
        }
    ),

    makeA2ChooseStoreDialogue(
        "a2_choose_store_007",
        "目的に合う店を選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "今日は友だちの誕生日なので、少し特別な店にしたいです。",
                target: "きょうはともだちのたんじょうびなので すこしとくべつなみせにしたいです",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>友<rt>とも</rt></ruby>だちの<ruby>誕生日<rt>たんじょうび</rt></ruby>なので、<ruby>少<rt>すこ</rt></ruby>し<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>店<rt>みせ</rt></ruby>にしたいです。",
                romaji: "Kyō wa tomodachi no tanjōbi na node, sukoshi tokubetsu na mise ni shitai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "それなら、デザートが有名な店がいいと思います。",
                target: "それなら でざーとがゆうめいなみせがいいとおもいます",
                ruby: "それなら、デザートが<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>店<rt>みせ</rt></ruby>がいいと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Sore nara, dezāto ga yūmei na mise ga ii to omoimasu."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "写真を撮りやすい雰囲気だと助かります。",
                target: "しゃしんをとりやすいふんいきだとたすかります",
                ruby: "<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>りやすい<ruby>雰囲気<rt>ふんいき</rt></ruby>だと<ruby>助<rt>たす</rt></ruby>かります。",
                romaji: "Shashin o toriyasui fun'iki da to tasukarimasu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "この店は明るくて、記念日にもよく使われています。",
                target: "このみせはあかるくて きねんびにもよくつかわれています",
                ruby: "この<ruby>店<rt>みせ</rt></ruby>は<ruby>明<rt>あか</rt></ruby>るくて、<ruby>記念日<rt>きねんび</rt></ruby>にもよく<ruby>使<rt>つか</rt></ruby>われています。",
                romaji: "Kono mise wa akarukute, kinenbi ni mo yoku tsukawarete imasu."
            }
        ],
        {
            ja: ["自分：今日は友だちの誕生日なので、少し特別な店にしたいです。", "相手：それなら、デザートが有名な店がいいと思います。", "自分：写真を撮りやすい雰囲気だと助かります。", "相手：この店は明るくて、記念日にもよく使われています。"],
            en: ["Me: Today is my friend’s birthday, so I want to choose a slightly special place.", "Other Person: In that case, I think a place famous for desserts would be good.", "Me: It would help if the atmosphere is good for taking photos.", "Other Person: This place is bright and is often used for anniversaries."],
            "zh-CN": ["自己：今天是朋友的生日，所以我想选一家稍微特别的店。", "对方：那样的话，我觉得甜点有名的店不错。", "自己：如果是容易拍照的氛围就好了。", "对方：这家店很明亮，也常用于纪念日。"],
            "zh-TW": ["自己：今天是朋友的生日，所以我想選一家稍微特別的店。", "對方：那樣的話，我覺得甜點有名的店不錯。", "自己：如果是容易拍照的氛圍就好了。", "對方：這家店很明亮，也常用於紀念日。"],
            ko: ["나: 오늘은 친구 생일이라서 조금 특별한 가게로 하고 싶어요.", "상대방: 그렇다면 디저트가 유명한 가게가 좋다고 생각합니다.", "나: 사진을 찍기 쉬운 분위기라면 좋겠습니다.", "상대방: 이 가게는 밝고 기념일에도 자주 이용됩니다."],
            vi: ["Tôi: Hôm nay là sinh nhật bạn tôi nên tôi muốn chọn quán hơi đặc biệt.", "Người kia: Nếu vậy, tôi nghĩ quán nổi tiếng về món tráng miệng sẽ tốt.", "Tôi: Nếu không khí dễ chụp ảnh thì tốt quá.", "Người kia: Quán này sáng sủa và thường được dùng cho ngày kỷ niệm."],
            tl: ["Ako: Birthday ng kaibigan ko ngayon, kaya gusto ko ng medyo special na lugar.", "Kausap: Kung ganoon, sa tingin ko magandang pumili ng lugar na sikat sa desserts.", "Ako: Malaking tulong kung maganda ang atmosphere para kumuha ng photos.", "Kausap: Maliwanag ang lugar na ito at madalas gamitin para sa anniversaries."],
            id: ["Saya: Hari ini ulang tahun teman saya, jadi saya ingin memilih tempat yang agak spesial.", "Lawan bicara: Kalau begitu, saya pikir tempat yang terkenal dengan dessert bagus.", "Saya: Akan membantu jika suasananya mudah untuk mengambil foto.", "Lawan bicara: Tempat ini terang dan sering digunakan untuk hari peringatan."],
            th: ["ฉัน/ผม: วันนี้เป็นวันเกิดของเพื่อน เลยอยากเลือกร้านที่พิเศษนิดหน่อยค่ะ/ครับ", "อีกฝ่าย: ถ้าอย่างนั้น ร้านที่ขนมหวานมีชื่อเสียงน่าจะดีค่ะ/ครับ", "ฉัน/ผม: ถ้าบรรยากาศถ่ายรูปง่ายก็จะดีมากค่ะ/ครับ", "อีกฝ่าย: ร้านนี้สว่าง และมักใช้ในวันครบรอบค่ะ/ครับ"],
            my: ["မိမိ: ဒီနေ့ သူငယ်ချင်းရဲ့မွေးနေ့ဖြစ်လို့ နည်းနည်းထူးခြားတဲ့ဆိုင်ကို ရွေးချင်ပါတယ်။", "တစ်ဖက်လူ: ဒါဆို dessert နာမည်ကြီးတဲ့ဆိုင်က ကောင်းမယ်ထင်ပါတယ်။", "မိမိ: ဓာတ်ပုံရိုက်လို့ကောင်းတဲ့ atmosphere ဆိုရင် အကူအညီဖြစ်ပါတယ်။", "တစ်ဖက်လူ: ဒီဆိုင်က တောက်ပပြီး အထိမ်းအမှတ်နေ့တွေမှာလည်း မကြာခဏအသုံးပြုကြပါတယ်။"],
            km: ["ខ្ញុំ: ថ្ងៃនេះជាថ្ងៃខួបកំណើតមិត្តភក្តិ ដូច្នេះខ្ញុំចង់ជ្រើសហាងពិសេសបន្តិច។", "អ្នកម្ខាងទៀត: បើដូច្នោះ ខ្ញុំគិតថាហាងដែលល្បីខាងបង្អែមល្អ។", "ខ្ញុំ: ប្រសិនបើបរិយាកាសងាយថតរូប នឹងជួយបានច្រើន។", "អ្នកម្ខាងទៀត: ហាងនេះភ្លឺ ហើយត្រូវបានប្រើជាញឹកញាប់សម្រាប់ថ្ងៃអនុស្សាវរីយ៍។"],
            ne: ["म: आज मेरो साथीको जन्मदिन हो, त्यसैले अलि विशेष ठाउँ रोज्न चाहन्छु।", "अर्को व्यक्ति: त्यसो भए, डेजर्टका लागि प्रसिद्ध ठाउँ राम्रो लाग्छ।", "म: फोटो खिच्न सजिलो वातावरण भए राम्रो हुन्छ।", "अर्को व्यक्ति: यो ठाउँ उज्यालो छ र विशेष दिनमा पनि धेरै प्रयोग हुन्छ।"],
            mn: ["Би: Өнөөдөр найзын маань төрсөн өдөр тул жаахан онцгой газар сонгомоор байна.", "Нөгөө хүн: Тэгвэл амттангаараа алдартай газар сайн байх гэж бодож байна.", "Би: Зураг авахад тохиромжтой уур амьсгалтай бол тустай.", "Нөгөө хүн: Энэ газар гэрэлтэй бөгөөд тэмдэглэлт өдрүүдэд их ашиглагддаг."],
            si: ["මම: අද මගේ මිතුරාගේ උපන්දිනය නිසා ටිකක් විශේෂ තැනක් තෝරගන්න ඕනේ.", "අනෙක් පුද්ගලයා: එහෙනම් dessert සඳහා ප්‍රසිද්ධ තැනක් හොඳයි කියලා හිතනවා.", "මම: photos ගන්න පහසු atmosphere එකක් නම් හොඳයි.", "අනෙක් පුද්ගලයා: මේ තැන ආලෝකමත් අතර anniversary දිනවලත් බොහෝවිට භාවිතා කරනවා."],
            bn: ["আমি: আজ আমার বন্ধুর জন্মদিন, তাই একটু বিশেষ জায়গা বেছে নিতে চাই।", "অন্য ব্যক্তি: তাহলে ডেজার্টের জন্য বিখ্যাত জায়গা ভালো হবে মনে করি।", "আমি: ছবি তুলতে সুবিধাজনক পরিবেশ হলে ভালো হয়।", "অন্য ব্যক্তি: এই দোকানটি উজ্জ্বল এবং বিশেষ দিনেও প্রায়ই ব্যবহৃত হয়।"],
            pt: ["Eu: Hoje é aniversário do meu amigo, então quero escolher um lugar um pouco especial.", "Outra pessoa: Nesse caso, acho que um lugar famoso pelas sobremesas seria bom.", "Eu: Seria bom se o ambiente fosse fácil para tirar fotos.", "Outra pessoa: Este lugar é claro e também é muito usado para datas comemorativas."],
            es: ["Yo: Hoy es el cumpleaños de mi amigo, así que quiero elegir un lugar un poco especial.", "Otra persona: En ese caso, creo que un lugar famoso por los postres sería bueno.", "Yo: Sería útil si el ambiente fuera bueno para tomar fotos.", "Otra persona: Este lugar es luminoso y se usa mucho para aniversarios."],
            fr: ["Moi : Aujourd’hui, c’est l’anniversaire de mon ami, donc je veux choisir un endroit un peu spécial.", "Autre personne : Dans ce cas, je pense qu’un endroit célèbre pour les desserts serait bien.", "Moi : Ce serait utile si l’ambiance permettait de prendre facilement des photos.", "Autre personne : Cet endroit est lumineux et souvent utilisé pour les anniversaires."],
            ru: ["Я: Сегодня день рождения моего друга, поэтому хочу выбрать немного особенное место.", "Другой человек: Тогда, думаю, подойдёт место, известное десертами.", "Я: Было бы хорошо, если атмосфера подходит для фотографий.", "Другой человек: Это место светлое и часто используется для памятных дат."],
            uk: ["Я: Сьогодні день народження мого друга, тому хочу вибрати трохи особливе місце.", "Інша людина: Тоді, думаю, підійде місце, відоме десертами.", "Я: Було б добре, якби атмосфера підходила для фотографій.", "Інша людина: Це місце світле і часто використовується для пам’ятних дат."]
        }
    ),

    makeA2ChooseStoreDialogue(
        "a2_choose_store_008",
        "営業時間で選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "仕事のあとに行くので、遅くまで開いている店がいいです。",
                target: "しごとのあとにいくので おそくまであいているみせがいいです",
                ruby: "<ruby>仕事<rt>しごと</rt></ruby>のあとに<ruby>行<rt>い</rt></ruby>くので、<ruby>遅<rt>おそ</rt></ruby>くまで<ruby>開<rt>あ</rt></ruby>いている<ruby>店<rt>みせ</rt></ruby>がいいです。",
                romaji: "Shigoto no ato ni iku node, osoku made aite iru mise ga ii desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "この店は二十三時まで営業しています。",
                target: "このみせはにじゅうさんじまでえいぎょうしています",
                ruby: "この<ruby>店<rt>みせ</rt></ruby>は<ruby>二十三時<rt>にじゅうさんじ</rt></ruby>まで<ruby>営業<rt>えいぎょう</rt></ruby>しています。",
                romaji: "Kono mise wa nijūsan-ji made eigyō shite imasu."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "ラストオーダーの時間も確認したいです。",
                target: "らすとおーだーのじかんもかくにんしたいです",
                ruby: "ラストオーダーの<ruby>時間<rt>じかん</rt></ruby>も<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Rasuto ōdā no jikan mo kakunin shitai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "料理は二十二時半まで注文できるそうです。",
                target: "りょうりはにじゅうにじはんまでちゅうもんできるそうです",
                ruby: "<ruby>料理<rt>りょうり</rt></ruby>は<ruby>二十二時半<rt>にじゅうにじはん</rt></ruby>まで<ruby>注文<rt>ちゅうもん</rt></ruby>できるそうです。",
                romaji: "Ryōri wa nijūni-ji han made chūmon dekiru sō desu."
            }
        ],
        {
            ja: ["自分：仕事のあとに行くので、遅くまで開いている店がいいです。", "相手：この店は二十三時まで営業しています。", "自分：ラストオーダーの時間も確認したいです。", "相手：料理は二十二時半まで注文できるそうです。"],
            en: ["Me: Since I will go after work, I want a place that stays open late.", "Other Person: This place is open until 11 p.m.", "Me: I also want to check the last order time.", "Other Person: It says food can be ordered until 10:30 p.m."],
            "zh-CN": ["自己：因为下班后去，所以想选营业到比较晚的店。", "对方：这家店营业到二十三点。", "自己：我也想确认最后点餐时间。", "对方：听说料理可以点到二十二点半。"],
            "zh-TW": ["自己：因為下班後去，所以想選營業到比較晚的店。", "對方：這家店營業到二十三點。", "自己：我也想確認最後點餐時間。", "對方：聽說料理可以點到二十二點半。"],
            ko: ["나: 퇴근 후에 갈 거라서 늦게까지 여는 가게가 좋아요.", "상대방: 이 가게는 23시까지 영업합니다.", "나: 라스트 오더 시간도 확인하고 싶어요.", "상대방: 음식은 22시 30분까지 주문할 수 있다고 합니다."],
            vi: ["Tôi: Vì tôi sẽ đi sau giờ làm, tôi muốn quán mở cửa muộn.", "Người kia: Quán này mở cửa đến 23 giờ.", "Tôi: Tôi cũng muốn xác nhận giờ gọi món cuối.", "Người kia: Có vẻ có thể gọi món đến 22 giờ 30."],
            tl: ["Ako: Pupunta ako pagkatapos ng trabaho, kaya gusto ko ng lugar na bukas hanggang gabi.", "Kausap: Bukas ang lugar na ito hanggang 11 p.m.", "Ako: Gusto ko ring i-check ang last order time.", "Kausap: Sabi rito, puwedeng umorder ng pagkain hanggang 10:30 p.m."],
            id: ["Saya: Karena saya pergi setelah kerja, saya ingin tempat yang buka sampai malam.", "Lawan bicara: Tempat ini buka sampai pukul 23.00.", "Saya: Saya juga ingin memastikan waktu last order.", "Lawan bicara: Katanya makanan bisa dipesan sampai pukul 22.30."],
            th: ["ฉัน/ผม: เพราะจะไปหลังเลิกงาน เลยอยากได้ร้านที่เปิดถึงดึกค่ะ/ครับ", "อีกฝ่าย: ร้านนี้เปิดถึง 23.00 น. ค่ะ/ครับ", "ฉัน/ผม: อยากเช็กเวลา last order ด้วยค่ะ/ครับ", "อีกฝ่าย: ดูเหมือนสั่งอาหารได้ถึง 22.30 น. ค่ะ/ครับ"],
            my: ["မိမိ: အလုပ်ပြီးမှ သွားမှာဖြစ်လို့ နောက်ကျတဲ့အချိန်ထိ ဖွင့်တဲ့ဆိုင်ကောင်းပါတယ်။", "တစ်ဖက်လူ: ဒီဆိုင်က ၂၃ နာရီအထိ ဖွင့်ပါတယ်။", "မိမိ: last order အချိန်လည်း စစ်ချင်ပါတယ်။", "တစ်ဖက်လူ: အစားအစာကို ၂၂ နာရီခွဲအထိ မှာလို့ရတယ်လို့ ရေးထားပါတယ်။"],
            km: ["ខ្ញុំ: ព្រោះខ្ញុំនឹងទៅក្រោយធ្វើការ ខ្ញុំចង់បានហាងដែលបើកយឺត។", "អ្នកម្ខាងទៀត: ហាងនេះបើកដល់ម៉ោង 23។", "ខ្ញុំ: ខ្ញុំក៏ចង់ពិនិត្យម៉ោងបញ្ជាទិញចុងក្រោយ។", "អ្នកម្ខាងទៀត: គេថាអាចកុម្ម៉ង់ម្ហូបបានដល់ម៉ោង 22:30។"],
            ne: ["म: कामपछि जाने भएकाले ढिलासम्म खुल्ने ठाउँ चाहिन्छ।", "अर्को व्यक्ति: यो ठाउँ २३ बजेसम्म खुल्छ।", "म: लास्ट अर्डरको समय पनि पुष्टि गर्न चाहन्छु।", "अर्को व्यक्ति: खाना २२:३० सम्म अर्डर गर्न मिल्ने रहेछ।"],
            mn: ["Би: Ажлын дараа очих болохоор орой хүртэл нээлттэй газар байвал сайн.", "Нөгөө хүн: Энэ газар 23 цаг хүртэл ажилладаг.", "Би: Сүүлчийн захиалгын цагийг ч шалгамаар байна.", "Нөгөө хүн: Хоолыг 22:30 хүртэл захиалж болдог юм байна."],
            si: ["මම: වැඩ අවසන් වූ පසු යන නිසා, රාත්‍රී දක්වා විවෘත තැනක් හොඳයි.", "අනෙක් පුද්ගලයා: මේ තැන 23:00 දක්වා විවෘතයි.", "මම: last order වේලාවත් තහවුරු කරන්න ඕනේ.", "අනෙක් පුද්ගලයා: කෑම 22:30 දක්වා order කරන්න පුළුවන් කියලා තියෙනවා."],
            bn: ["আমি: কাজের পরে যাব, তাই দেরি পর্যন্ত খোলা থাকে এমন দোকান চাই।", "অন্য ব্যক্তি: এই দোকান ২৩টা পর্যন্ত খোলা থাকে।", "আমি: লাস্ট অর্ডারের সময়ও নিশ্চিত করতে চাই।", "অন্য ব্যক্তি: খাবার ২২টা ৩০ পর্যন্ত অর্ডার করা যায় বলে লেখা আছে।"],
            pt: ["Eu: Como vou depois do trabalho, quero um lugar que fique aberto até tarde.", "Outra pessoa: Este lugar fica aberto até 23h.", "Eu: Também quero verificar o horário do último pedido.", "Outra pessoa: Parece que a comida pode ser pedida até 22h30."],
            es: ["Yo: Como iré después del trabajo, quiero un lugar que esté abierto hasta tarde.", "Otra persona: Este lugar abre hasta las 23:00.", "Yo: También quiero confirmar la hora del último pedido.", "Otra persona: Parece que se puede pedir comida hasta las 22:30."],
            fr: ["Moi : Comme j’irai après le travail, je veux un endroit ouvert tard.", "Autre personne : Cet endroit est ouvert jusqu’à 23 heures.", "Moi : Je veux aussi vérifier l’heure de la dernière commande.", "Autre personne : Il semble qu’on puisse commander des plats jusqu’à 22 h 30."],
            ru: ["Я: Так как пойду после работы, хочу место, открытое допоздна.", "Другой человек: Это место работает до 23:00.", "Я: Я также хочу проверить время последнего заказа.", "Другой человек: Похоже, еду можно заказать до 22:30."],
            uk: ["Я: Оскільки піду після роботи, хочу місце, відкрите допізна.", "Інша людина: Це місце працює до 23:00.", "Я: Я також хочу перевірити час останнього замовлення.", "Інша людина: Схоже, їжу можна замовити до 22:30."]
        }
    )

];