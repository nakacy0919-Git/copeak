// =====================================================
// Japeak A2 Level
// Scene: 色んなお店を選んでみよう
// Category Key: a2_choose_various_stores
// =====================================================

const a2ChooseVariousStoresContext = {
    ja: "薬局、家電量販店、百円ショップ、輸入食品店、服屋、美容院、コインランドリー、文房具店など、目的に合わせて色々なお店を選ぶ日本語を練習します。",
    en: "Practice Japanese for choosing different kinds of stores, such as pharmacies, electronics stores, 100-yen shops, imported food stores, clothing stores, hair salons, laundromats, and stationery stores.",
    "zh-CN": "练习根据目的选择不同店铺时使用的日语，例如药妆店、家电量贩店、百元店、进口食品店、服装店、美容院、自助洗衣店和文具店等。",
    "zh-TW": "練習根據目的選擇不同店家時使用的日語，例如藥妝店、家電量販店、百元店、進口食品店、服飾店、美容院、自助洗衣店和文具店等。",
    ko: "약국, 가전제품점, 100엔 숍, 수입 식품점, 옷 가게, 미용실, 코인 세탁소, 문구점 등 목적에 맞게 다양한 가게를 고르는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi chọn nhiều loại cửa hàng khác nhau theo mục đích, như hiệu thuốc, cửa hàng điện máy, cửa hàng 100 yên, cửa hàng thực phẩm nhập khẩu, cửa hàng quần áo, tiệm làm tóc, tiệm giặt tự động và cửa hàng văn phòng phẩm.",
    tl: "Practice ng Japanese sa pagpili ng iba’t ibang uri ng tindahan ayon sa layunin, tulad ng pharmacy, electronics store, 100-yen shop, imported food store, clothing store, hair salon, laundromat, at stationery store.",
    id: "Latihan bahasa Jepang untuk memilih berbagai jenis toko sesuai tujuan, seperti apotek, toko elektronik, toko 100 yen, toko makanan impor, toko pakaian, salon rambut, laundromat, dan toko alat tulis.",
    th: "ฝึกภาษาญี่ปุ่นในการเลือกร้านหลายประเภทตามจุดประสงค์ เช่น ร้านขายยา ร้านเครื่องใช้ไฟฟ้า ร้านร้อยเยน ร้านอาหารนำเข้า ร้านเสื้อผ้า ร้านทำผม ร้านซักผ้าหยอดเหรียญ และร้านเครื่องเขียน",
    my: "ရည်ရွယ်ချက်အလိုက် ဆေးဆိုင်၊ လျှပ်စစ်ပစ္စည်းဆိုင်၊ ၁၀၀ ယန်းဆိုင်၊ နိုင်ငံခြားအစားအစာဆိုင်၊ အဝတ်အစားဆိုင်၊ ဆံပင်ဆိုင်၊ coin laundry နှင့် စာရေးကိရိယာဆိုင်များကို ရွေးချယ်ရာတွင် အသုံးပြုသော ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ជ្រើសរើសហាងប្រភេទផ្សេងៗតាមគោលបំណង ដូចជា ឱសថស្ថាន ហាងអេឡិចត្រូនិក ហាង 100 យ៉េន ហាងអាហារនាំចូល ហាងសម្លៀកបំពាក់ ហាងកាត់សក់ កន្លែងបោកគក់ និងហាងសម្ភារៈការិយាល័យ។",
    ne: "उद्देश्यअनुसार फार्मेसी, इलेक्ट्रोनिक्स पसल, १०० येन पसल, आयातित खाद्य पसल, कपडा पसल, हेयर सैलुन, लन्ड्री र स्टेशनरी पसल जस्ता विभिन्न पसल छान्ने जापानी अभ्यास।",
    mn: "Зорилгодоо тохируулан эмийн сан, цахилгаан барааны дэлгүүр, 100 иений дэлгүүр, импортын хүнсний дэлгүүр, хувцасны дэлгүүр, үсчин, coin laundry, бичиг хэргийн дэлгүүр зэрэг төрөл бүрийн дэлгүүр сонгох япон хэлний дадлага.",
    si: "අරමුණට අනුව pharmacy, electronics store, 100-yen shop, imported food store, clothing store, hair salon, laundromat සහ stationery store වැනි විවිධ වෙළඳසැල් තෝරා ගැනීමේ ජපන් භාෂා පුහුණුව.",
    bn: "উদ্দেশ্য অনুযায়ী ফার্মেসি, ইলেকট্রনিক্স দোকান, ১০০ ইয়েন দোকান, আমদানি খাবারের দোকান, পোশাকের দোকান, হেয়ার সেলুন, লন্ড্রোম্যাট এবং স্টেশনারি দোকান বেছে নেওয়ার জাপানি অনুশীলন।",
    pt: "Prática de japonês para escolher diferentes tipos de lojas conforme o objetivo, como farmácias, lojas de eletrônicos, lojas de 100 ienes, lojas de alimentos importados, lojas de roupas, salões de beleza, lavanderias automáticas e papelarias.",
    es: "Práctica de japonés para elegir diferentes tipos de tiendas según el propósito, como farmacias, tiendas de electrónica, tiendas de 100 yenes, tiendas de comida importada, tiendas de ropa, peluquerías, lavanderías automáticas y papelerías.",
    fr: "Entraînement en japonais pour choisir différents types de magasins selon l’objectif : pharmacies, magasins d’électronique, magasins à 100 yens, magasins d’aliments importés, magasins de vêtements, salons de coiffure, laveries automatiques et papeteries.",
    ru: "Практика японского языка для выбора разных видов магазинов по цели: аптека, магазин электроники, магазин за 100 иен, магазин импортных продуктов, магазин одежды, парикмахерская, прачечная самообслуживания и магазин канцтоваров.",
    uk: "Практика японської мови для вибору різних видів магазинів залежно від мети: аптека, магазин електроніки, магазин за 100 єн, магазин імпортних продуктів, магазин одягу, перукарня, пральня самообслуговування та магазин канцтоварів."
};

const a2ChooseVariousStoresSpeakerNames = {
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

function makeA2ChooseVariousStoresDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_choose_various_stores",
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
            speakerNames: a2ChooseVariousStoresSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2ChooseVariousStoresContext,
        translations,
        dialogueTranslations
    };
}

const japeakA2ChooseVariousStoresData = [

    makeA2ChooseVariousStoresDialogue(
        "a2_various_store_001",
        "薬局を選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "頭痛薬を買いたいので、薬局に寄りたいです。",
                target: "ずつうやくをかいたいので やっきょくによりたいです",
                ruby: "<ruby>頭痛薬<rt>ずつうやく</rt></ruby>を<ruby>買<rt>か</rt></ruby>いたいので、<ruby>薬局<rt>やっきょく</rt></ruby>に<ruby>寄<rt>よ</rt></ruby>りたいです。",
                romaji: "Zutsū-yaku o kaitai node, yakkyoku ni yoritai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "コンビニにもありますが、薬剤師さんに相談できる店が安心です。",
                target: "こんびににもありますが やくざいしさんにそうだんできるみせがあんしんです",
                ruby: "コンビニにもありますが、<ruby>薬剤師<rt>やくざいし</rt></ruby>さんに<ruby>相談<rt>そうだん</rt></ruby>できる<ruby>店<rt>みせ</rt></ruby>が<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Konbini ni mo arimasu ga, yakuzaishi-san ni sōdan dekiru mise ga anshin desu."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "では、駅前のドラッグストアに行きましょう。",
                target: "では えきまえのどらっぐすとあにいきましょう",
                ruby: "では、<ruby>駅前<rt>えきまえ</rt></ruby>のドラッグストアに<ruby>行<rt>い</rt></ruby>きましょう。",
                romaji: "Dewa, ekimae no doraggu sutoa ni ikimashō."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "夜まで開いているか、調べてみます。",
                target: "よるまであいているか しらべてみます",
                ruby: "<ruby>夜<rt>よる</rt></ruby>まで<ruby>開<rt>あ</rt></ruby>いているか、<ruby>調<rt>しら</rt></ruby>べてみます。",
                romaji: "Yoru made aite iru ka, shirabete mimasu."
            }
        ],
        {
            ja: ["自分：頭痛薬を買いたいので、薬局に寄りたいです。", "相手：コンビニにもありますが、薬剤師さんに相談できる店が安心です。", "自分：では、駅前のドラッグストアに行きましょう。", "相手：夜まで開いているか、調べてみます。"],
            en: ["Me: I want to buy medicine for a headache, so I would like to stop by a pharmacy.", "Other Person: Convenience stores may have it too, but a store where you can ask a pharmacist is safer.", "Me: Then let’s go to the drugstore in front of the station.", "Other Person: I will check whether it is open until night."],
            "zh-CN": ["自己：我想买头痛药，所以想顺路去药局。", "对方：便利店也可能有，但能向药剂师咨询的店更安心。", "自己：那么，我们去车站前的药妆店吧。", "对方：我查一下它晚上是否还营业。"],
            "zh-TW": ["自己：我想買頭痛藥，所以想順路去藥局。", "對方：便利商店也可能有，但能向藥師諮詢的店更安心。", "自己：那麼，我們去車站前的藥妝店吧。", "對方：我查一下它晚上是否還營業。"],
            ko: ["나: 두통약을 사고 싶어서 약국에 들르고 싶어요.", "상대방: 편의점에도 있지만 약사님에게 상담할 수 있는 가게가 안심됩니다.", "나: 그럼 역 앞 드러그스토어에 갑시다.", "상대방: 밤까지 열려 있는지 알아볼게요."],
            vi: ["Tôi: Tôi muốn mua thuốc đau đầu nên muốn ghé hiệu thuốc.", "Người kia: Cửa hàng tiện lợi cũng có thể có, nhưng cửa hàng có thể hỏi dược sĩ thì yên tâm hơn.", "Tôi: Vậy hãy đến cửa hàng thuốc trước ga.", "Người kia: Tôi sẽ kiểm tra xem có mở đến tối không."],
            tl: ["Ako: Gusto kong bumili ng gamot sa sakit ng ulo, kaya gusto kong dumaan sa pharmacy.", "Kausap: Meron din siguro sa convenience store, pero mas kampante sa tindahang puwedeng magtanong sa pharmacist.", "Ako: Kung ganoon, pumunta tayo sa drugstore sa harap ng station.", "Kausap: Titingnan ko kung bukas hanggang gabi."],
            id: ["Saya: Saya ingin membeli obat sakit kepala, jadi ingin mampir ke apotek.", "Lawan bicara: Di minimarket mungkin ada, tetapi lebih aman di toko yang bisa bertanya kepada apoteker.", "Saya: Kalau begitu, mari pergi ke drugstore di depan stasiun.", "Lawan bicara: Saya akan mengecek apakah buka sampai malam."],
            th: ["ฉัน/ผม: อยากซื้อยาแก้ปวดหัว เลยอยากแวะร้านขายยาค่ะ/ครับ", "อีกฝ่าย: ที่ร้านสะดวกซื้อก็อาจมี แต่ร้านที่ปรึกษาเภสัชกรได้จะสบายใจกว่าค่ะ/ครับ", "ฉัน/ผม: ถ้าอย่างนั้นไป drugstore หน้าสถานีกันค่ะ/ครับ", "อีกฝ่าย: จะลองเช็กว่าร้านเปิดถึงกลางคืนไหมค่ะ/ครับ"],
            my: ["မိမိ: ခေါင်းကိုက်ဆေး ဝယ်ချင်လို့ ဆေးဆိုင်ကို ဝင်ချင်ပါတယ်။", "တစ်ဖက်လူ: convenience store မှာလည်း ရှိနိုင်ပေမယ့် pharmacist ကို မေးလို့ရတဲ့ဆိုင်က ပိုစိတ်ချရပါတယ်။", "မိမိ: ဒါဆို ဘူတာရှေ့က drugstore ကို သွားကြရအောင်။", "တစ်ဖက်လူ: ညအထိ ဖွင့်မဖွင့် စစ်ကြည့်ပါမယ်။"],
            km: ["ខ្ញុំ: ខ្ញុំចង់ទិញថ្នាំឈឺក្បាល ដូច្នេះចង់ឈប់នៅឱសថស្ថាន។", "អ្នកម្ខាងទៀត: នៅហាងងាយស្រួលក៏អាចមាន ប៉ុន្តែហាងដែលអាចសួរឱសថការីបាន គឺទុកចិត្តជាង។", "ខ្ញុំ: ដូច្នេះ ទៅ drugstore មុខស្ថានីយ៍吧។", "អ្នកម្ខាងទៀត: ខ្ញុំនឹងពិនិត្យថាតើបើកដល់យប់ទេ។"],
            ne: ["म: टाउको दुख्ने औषधि किन्न चाहन्छु, त्यसैले फार्मेसीमा पस्न चाहन्छु।", "अर्को व्यक्ति: कन्भिनियन्स स्टोरमा पनि हुन सक्छ, तर फार्मासिस्टसँग सल्लाह गर्न मिल्ने पसल सुरक्षित हुन्छ।", "म: त्यसो भए, स्टेशन अगाडिको ड्रगस्टोर जाऔं।", "अर्को व्यक्ति: रातिसम्म खुल्छ कि हेर्छु।"],
            mn: ["Би: Толгой өвдөх эм авмаар байгаа тул эмийн сангаар ормоор байна.", "Нөгөө хүн: Конбинид ч байж магадгүй, гэхдээ эм зүйчээс зөвлөгөө авч болох газар илүү найдвартай.", "Би: Тэгвэл буудлын өмнөх drugstore руу явъя.", "Нөгөө хүн: Орой хүртэл нээлттэй эсэхийг шалгая."],
            si: ["මම: හිසරදයට ඖෂධයක් ගන්න ඕනේ, ඒ නිසා pharmacy එකකට යන්න ඕනේ.", "අනෙක් පුද්ගලයා: convenience store එකෙත් තියෙන්න පුළුවන්, නමුත් pharmacist කෙනෙකුගෙන් අහන්න පුළුවන් තැනක් වඩා ආරක්ෂිතයි.", "මම: එහෙනම් station එක ඉදිරිපස drugstore එකට යමු.", "අනෙක් පුද්ගලයා: රාත්‍රිය දක්වා විවෘතද කියලා බලන්නම්."],
            bn: ["আমি: মাথাব্যথার ওষুধ কিনতে চাই, তাই ফার্মেসিতে যেতে চাই।", "অন্য ব্যক্তি: কনভিনিয়েন্স স্টোরেও থাকতে পারে, কিন্তু ফার্মাসিস্টের সঙ্গে পরামর্শ করা যায় এমন দোকান বেশি নিশ্চিন্ত।", "আমি: তাহলে স্টেশনের সামনে ড্রাগস্টোরে যাই।", "অন্য ব্যক্তি: রাত পর্যন্ত খোলা থাকে কি না দেখে নিই।"],
            pt: ["Eu: Quero comprar remédio para dor de cabeça, então gostaria de passar em uma farmácia.", "Outra pessoa: Pode ter também em lojas de conveniência, mas é mais seguro ir a uma loja onde se pode consultar um farmacêutico.", "Eu: Então vamos à drugstore em frente à estação.", "Outra pessoa: Vou verificar se fica aberta até a noite."],
            es: ["Yo: Quiero comprar medicina para el dolor de cabeza, así que quiero pasar por una farmacia.", "Otra persona: También puede haber en una tienda de conveniencia, pero es más seguro ir a una tienda donde pueda consultar a un farmacéutico.", "Yo: Entonces vayamos a la drugstore frente a la estación.", "Otra persona: Voy a revisar si está abierta hasta la noche."],
            fr: ["Moi : Je veux acheter un médicament contre le mal de tête, donc je voudrais passer à la pharmacie.", "Autre personne : Il peut aussi y en avoir dans une supérette, mais c’est plus rassurant dans un magasin où l’on peut demander à un pharmacien.", "Moi : Alors allons au drugstore devant la gare.", "Autre personne : Je vais vérifier s’il est ouvert jusqu’au soir."],
            ru: ["Я: Хочу купить лекарство от головной боли, поэтому хочу зайти в аптеку.", "Другой человек: В комбини тоже может быть, но надёжнее магазин, где можно спросить фармацевта.", "Я: Тогда пойдём в drugstore перед станцией.", "Другой человек: Я проверю, открыт ли он до вечера."],
            uk: ["Я: Хочу купити ліки від головного болю, тому хочу зайти в аптеку.", "Інша людина: У комбіні теж може бути, але надійніше в магазині, де можна запитати фармацевта.", "Я: Тоді підемо в drugstore біля станції.", "Інша людина: Я перевірю, чи він відкритий до вечора."]
        }
    ),

    makeA2ChooseVariousStoresDialogue(
        "a2_various_store_002",
        "家電量販店を選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "スマホの充電器を買い替えたいです。",
                target: "すまほのじゅうでんきをかいかえたいです",
                ruby: "スマホの<ruby>充電器<rt>じゅうでんき</rt></ruby>を<ruby>買<rt>か</rt></ruby>い<ruby>替<rt>か</rt></ruby>えたいです。",
                romaji: "Sumaho no jūdenki o kaikaetai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "種類が多いので、家電量販店の方が選びやすいです。",
                target: "しゅるいがおおいので かでんりょうはんてんのほうがえらびやすいです",
                ruby: "<ruby>種類<rt>しゅるい</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いので、<ruby>家電量販店<rt>かでんりょうはんてん</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>が<ruby>選<rt>えら</rt></ruby>びやすいです。",
                romaji: "Shurui ga ōi node, kaden ryōhanten no hō ga erabiyasui desu."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "自分のスマホに合うタイプを聞けますか。",
                target: "じぶんのすまほにあうたいぷをきけますか",
                ruby: "<ruby>自分<rt>じぶん</rt></ruby>のスマホに<ruby>合<rt>あ</rt></ruby>うタイプを<ruby>聞<rt>き</rt></ruby>けますか。",
                romaji: "Jibun no sumaho ni au taipu o kikemasu ka."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "機種名を見せると、店員さんに伝わりやすいです。",
                target: "きしゅめいをみせると てんいんさんにつたわりやすいです",
                ruby: "<ruby>機種名<rt>きしゅめい</rt></ruby>を<ruby>見<rt>み</rt></ruby>せると、<ruby>店員<rt>てんいん</rt></ruby>さんに<ruby>伝<rt>つた</rt></ruby>わりやすいです。",
                romaji: "Kishu-mei o miseru to, ten'in-san ni tsutawariyasui desu."
            }
        ],
        {
            ja: ["自分：スマホの充電器を買い替えたいです。", "相手：種類が多いので、家電量販店の方が選びやすいです。", "自分：自分のスマホに合うタイプを聞けますか。", "相手：機種名を見せると、店員さんに伝わりやすいです。"],
            en: ["Me: I want to replace my smartphone charger.", "Other Person: Since there are many types, it is easier to choose at an electronics store.", "Me: Can I ask which type fits my phone?", "Other Person: If you show the model name, it will be easier for the store staff to understand."],
            "zh-CN": ["自己：我想换一个手机充电器。", "对方：种类很多，所以在家电量贩店更容易选择。", "自己：可以问哪种适合我的手机吗？", "对方：如果给店员看机型名称，会更容易说明。"],
            "zh-TW": ["自己：我想換一個手機充電器。", "對方：種類很多，所以在家電量販店更容易選擇。", "自己：可以問哪種適合我的手機嗎？", "對方：如果給店員看機型名稱，會更容易說明。"],
            ko: ["나: 스마트폰 충전기를 새로 사고 싶어요.", "상대방: 종류가 많으니 가전제품점이 더 고르기 쉬워요.", "나: 제 스마트폰에 맞는 타입을 물어볼 수 있나요?", "상대방: 기종명을 보여 주면 점원에게 전달하기 쉬워요."],
            vi: ["Tôi: Tôi muốn mua thay sạc điện thoại.", "Người kia: Vì có nhiều loại nên chọn ở cửa hàng điện máy sẽ dễ hơn.", "Tôi: Tôi có thể hỏi loại nào hợp với điện thoại của mình không?", "Người kia: Nếu cho nhân viên xem tên mẫu máy thì sẽ dễ hiểu hơn."],
            tl: ["Ako: Gusto kong palitan ang charger ng smartphone ko.", "Kausap: Mas madaling pumili sa electronics store dahil maraming uri.", "Ako: Pwede ko bang itanong kung anong type ang bagay sa phone ko?", "Kausap: Mas madaling maintindihan ng staff kung ipapakita mo ang model name."],
            id: ["Saya: Saya ingin mengganti charger smartphone saya.", "Lawan bicara: Karena jenisnya banyak, lebih mudah memilih di toko elektronik.", "Saya: Bisakah saya bertanya tipe mana yang cocok untuk ponsel saya?", "Lawan bicara: Jika Anda menunjukkan nama model, staf toko akan lebih mudah memahami."],
            th: ["ฉัน/ผม: อยากซื้อที่ชาร์จมือถือใหม่ค่ะ/ครับ", "อีกฝ่าย: เพราะมีหลายชนิด ร้านเครื่องใช้ไฟฟ้าจะเลือกง่ายกว่าค่ะ/ครับ", "ฉัน/ผม: ถามได้ไหมคะ/ครับว่าแบบไหนเหมาะกับมือถือของฉัน/ผม", "อีกฝ่าย: ถ้าให้พนักงานดูชื่อรุ่น จะสื่อสารได้ง่ายขึ้นค่ะ/ครับ"],
            my: ["မိမိ: smartphone charger ကို အသစ်ဝယ်ချင်ပါတယ်။", "တစ်ဖက်လူ: အမျိုးအစားများလို့ electronics store မှာ ရွေးရတာ ပိုလွယ်ပါတယ်။", "မိမိ: ကိုယ့်ဖုန်းနဲ့ ကိုက်တဲ့ type ကို မေးလို့ရပါသလား။", "တစ်ဖက်လူ: model name ကို ပြရင် ဆိုင်ဝန်ထမ်းက နားလည်လွယ်ပါတယ်။"],
            km: ["ខ្ញុំ: ខ្ញុំចង់ទិញឆ្នាំងសាកទូរស័ព្ទថ្មី។", "អ្នកម្ខាងទៀត: ព្រោះមានប្រភេទច្រើន ហាងអេឡិចត្រូនិកជ្រើសរើសងាយជាង។", "ខ្ញុំ: តើខ្ញុំអាចសួរថាប្រភេទណាសមនឹងទូរស័ព្ទខ្ញុំបានទេ?", "អ្នកម្ខាងទៀត: បើបង្ហាញឈ្មោះម៉ូដែល នឹងងាយប្រាប់បុគ្គលិកហាង។"],
            ne: ["म: स्मार्टफोनको चार्जर फेर्न चाहन्छु।", "अर्को व्यक्ति: प्रकार धेरै भएकाले इलेक्ट्रोनिक्स पसलमा छान्न सजिलो हुन्छ।", "म: मेरो फोनसँग मिल्ने प्रकार सोध्न मिल्छ?", "अर्को व्यक्ति: मोडेलको नाम देखाउँदा पसलका कर्मचारीलाई बुझ्न सजिलो हुन्छ।"],
            mn: ["Би: Утасны цэнэглэгчээ сольж авмаар байна.", "Нөгөө хүн: Төрөл олон тул цахилгаан барааны дэлгүүрт сонгоход амар.", "Би: Миний утсанд тохирох төрлийг асууж болох уу?", "Нөгөө хүн: Загварын нэрийг үзүүлбэл дэлгүүрийн ажилтанд ойлгуулахад амар."],
            si: ["මම: smartphone charger එක අලුත් එකකට මාරු කරගන්න ඕනේ.", "අනෙක් පුද්ගලයා: වර්ග ගොඩක් තියෙන නිසා electronics store එකේ තෝරගන්න පහසුයි.", "මම: මගේ phone එකට ගැළපෙන type එක අහන්න පුළුවන්ද?", "අනෙක් පුද්ගලයා: model name එක පෙන්වුවොත් staff එකට තේරුම් ගන්න පහසුයි."],
            bn: ["আমি: স্মার্টফোনের চার্জার বদলে কিনতে চাই।", "অন্য ব্যক্তি: ধরন অনেক, তাই ইলেকট্রনিক্স দোকানে বেছে নেওয়া সহজ।", "আমি: আমার ফোনের সঙ্গে কোন টাইপ মেলে তা জিজ্ঞেস করতে পারি?", "অন্য ব্যক্তি: মডেলের নাম দেখালে দোকানের কর্মী সহজে বুঝবেন।"],
            pt: ["Eu: Quero trocar o carregador do meu smartphone.", "Outra pessoa: Como há muitos tipos, é mais fácil escolher em uma loja de eletrônicos.", "Eu: Posso perguntar qual tipo combina com meu celular?", "Outra pessoa: Se você mostrar o nome do modelo, será mais fácil para o funcionário entender."],
            es: ["Yo: Quiero cambiar el cargador de mi smartphone.", "Otra persona: Como hay muchos tipos, es más fácil elegir en una tienda de electrónica.", "Yo: ¿Puedo preguntar qué tipo sirve para mi teléfono?", "Otra persona: Si muestra el nombre del modelo, será más fácil que el empleado entienda."],
            fr: ["Moi : Je veux remplacer le chargeur de mon smartphone.", "Autre personne : Comme il y a beaucoup de types, c’est plus facile de choisir dans un magasin d’électronique.", "Moi : Puis-je demander quel type convient à mon téléphone ?", "Autre personne : Si vous montrez le nom du modèle, ce sera plus facile à comprendre pour le vendeur."],
            ru: ["Я: Хочу заменить зарядное устройство для смартфона.", "Другой человек: Так как видов много, в магазине электроники выбрать проще.", "Я: Можно спросить, какой тип подходит моему телефону?", "Другой человек: Если показать название модели, продавцу будет легче понять."],
            uk: ["Я: Хочу замінити зарядний пристрій для смартфона.", "Інша людина: Оскільки видів багато, у магазині електроніки вибрати легше.", "Я: Можна запитати, який тип підходить моєму телефону?", "Інша людина: Якщо показати назву моделі, працівнику магазину буде легше зрозуміти."]
        }
    ),

    makeA2ChooseVariousStoresDialogue(
        "a2_various_store_003",
        "百円ショップを選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "洗濯用品と収納ケースを買いたいです。",
                target: "せんたくようひんとしゅうのうけーすをかいたいです",
                ruby: "<ruby>洗濯用品<rt>せんたくようひん</rt></ruby>と<ruby>収納<rt>しゅうのう</rt></ruby>ケースを<ruby>買<rt>か</rt></ruby>いたいです。",
                romaji: "Sentaku yōhin to shūnō kēsu o kaitai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "小さい物なら百円ショップ、大きい物ならホームセンターが便利です。",
                target: "ちいさいものならひゃくえんしょっぷ おおきいものならほーむせんたーがべんりです",
                ruby: "<ruby>小<rt>ちい</rt></ruby>さい<ruby>物<rt>もの</rt></ruby>なら<ruby>百円<rt>ひゃくえん</rt></ruby>ショップ、<ruby>大<rt>おお</rt></ruby>きい<ruby>物<rt>もの</rt></ruby>ならホームセンターが<ruby>便利<rt>べんり</rt></ruby>です。",
                romaji: "Chīsai mono nara hyakuen shoppu, ōkii mono nara hōmu sentā ga benri desu."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "今日は持って帰れる物だけにします。",
                target: "きょうはもってかえれるものだけにします",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>持<rt>も</rt></ruby>って<ruby>帰<rt>かえ</rt></ruby>れる<ruby>物<rt>もの</rt></ruby>だけにします。",
                romaji: "Kyō wa motte kaereru mono dake ni shimasu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "それなら、まず百円ショップを見てみましょう。",
                target: "それなら まずひゃくえんしょっぷをみてみましょう",
                ruby: "それなら、まず<ruby>百円<rt>ひゃくえん</rt></ruby>ショップを<ruby>見<rt>み</rt></ruby>てみましょう。",
                romaji: "Sore nara, mazu hyakuen shoppu o mite mimashō."
            }
        ],
        {
            ja: ["自分：洗濯用品と収納ケースを買いたいです。", "相手：小さい物なら百円ショップ、大きい物ならホームセンターが便利です。", "自分：今日は持って帰れる物だけにします。", "相手：それなら、まず百円ショップを見てみましょう。"],
            en: ["Me: I want to buy laundry items and storage cases.", "Other Person: For small items, a 100-yen shop is useful; for large items, a home center is useful.", "Me: Today, I will buy only things I can carry home.", "Other Person: In that case, let’s first look at a 100-yen shop."],
            "zh-CN": ["自己：我想买洗衣用品和收纳盒。", "对方：小东西去百元店方便，大东西去家居中心方便。", "自己：今天我只买能带回家的东西。", "对方：那我们先去看看百元店吧。"],
            "zh-TW": ["自己：我想買洗衣用品和收納盒。", "對方：小東西去百元店方便，大東西去家居中心方便。", "自己：今天我只買能帶回家的東西。", "對方：那我們先去看看百元店吧。"],
            ko: ["나: 세탁용품과 수납 케이스를 사고 싶어요.", "상대방: 작은 물건은 100엔 숍, 큰 물건은 홈센터가 편리합니다.", "나: 오늘은 가지고 돌아갈 수 있는 물건만 살게요.", "상대방: 그렇다면 먼저 100엔 숍을 봐 봅시다."],
            vi: ["Tôi: Tôi muốn mua đồ giặt và hộp đựng đồ.", "Người kia: Nếu là đồ nhỏ thì cửa hàng 100 yên tiện, còn đồ lớn thì home center tiện.", "Tôi: Hôm nay tôi chỉ mua đồ có thể mang về.", "Người kia: Vậy trước tiên hãy xem cửa hàng 100 yên."],
            tl: ["Ako: Gusto kong bumili ng laundry items at storage cases.", "Kausap: Kung maliliit na bagay, convenient ang 100-yen shop; kung malalaki, home center ang mas convenient.", "Ako: Ngayon, bibilhin ko lang ang mga kayang dalhin pauwi.", "Kausap: Kung ganoon, tingnan muna natin ang 100-yen shop."],
            id: ["Saya: Saya ingin membeli perlengkapan cuci dan kotak penyimpanan.", "Lawan bicara: Untuk barang kecil, toko 100 yen praktis; untuk barang besar, home center lebih praktis.", "Saya: Hari ini saya hanya membeli barang yang bisa saya bawa pulang.", "Lawan bicara: Kalau begitu, mari lihat toko 100 yen dulu."],
            th: ["ฉัน/ผม: อยากซื้ออุปกรณ์ซักผ้าและกล่องเก็บของค่ะ/ครับ", "อีกฝ่าย: ถ้าของเล็ก ๆ ร้านร้อยเยนสะดวก ถ้าของใหญ่ home center สะดวกค่ะ/ครับ", "ฉัน/ผม: วันนี้จะซื้อเฉพาะของที่ถือกลับได้ค่ะ/ครับ", "อีกฝ่าย: ถ้าอย่างนั้นลองดูร้านร้อยเยนก่อนค่ะ/ครับ"],
            my: ["မိမိ: အဝတ်လျှော်ပစ္စည်းနဲ့ storage case ဝယ်ချင်ပါတယ်။", "တစ်ဖက်လူ: ပစ္စည်းသေးသေးဆို ၁၀၀ ယန်းဆိုင်၊ ပစ္စည်းကြီးကြီးဆို home center က အဆင်ပြေပါတယ်။", "မိမိ: ဒီနေ့တော့ ကိုယ်တိုင်ယူပြန်လို့ရတဲ့ပစ္စည်းပဲ ဝယ်ပါမယ်။", "တစ်ဖက်လူ: ဒါဆို ပထမဆုံး ၁၀၀ ယန်းဆိုင်ကို ကြည့်ကြရအောင်။"],
            km: ["ខ្ញុំ: ខ្ញុំចង់ទិញសម្ភារៈបោកគក់ និងប្រអប់ផ្ទុក។", "អ្នកម្ខាងទៀត: របស់តូចៗទៅហាង 100 យ៉េន ងាយស្រួល ហើយរបស់ធំទៅ home center ងាយស្រួល។", "ខ្ញុំ: ថ្ងៃនេះ ខ្ញុំនឹងទិញតែរបស់ដែលអាចយកត្រឡប់ទៅផ្ទះបាន។", "អ្នកម្ខាងទៀត: បើដូច្នោះ មើលហាង 100 យ៉េនមុន吧។"],
            ne: ["म: लुगा धुने सामान र स्टोरेज केस किन्न चाहन्छु।", "अर्को व्यक्ति: साना सामान भए १०० येन पसल, ठूला सामान भए home center सुविधाजनक हुन्छ।", "म: आज घरमा बोकेर लैजान सक्ने सामान मात्र किन्छु।", "अर्को व्यक्ति: त्यसो भए पहिले १०० येन पसल हेरौं।"],
            mn: ["Би: Угаалгын хэрэгсэл, хадгалах хайрцаг авмаар байна.", "Нөгөө хүн: Жижиг зүйл бол 100 иений дэлгүүр, том зүйл бол home center тохиромжтой.", "Би: Өнөөдөр зөвхөн бариад харьж болох зүйл авна.", "Нөгөө хүн: Тэгвэл эхлээд 100 иений дэлгүүр үзье."],
            si: ["මම: මට laundry items සහ storage cases ගන්න ඕනේ.", "අනෙක් පුද්ගලයා: කුඩා දේවල් නම් 100-yen shop එක, විශාල දේවල් නම් home center එක පහසුයි.", "මම: අද ගෙදරට අරගෙන යන්න පුළුවන් දේවල් විතරක් ගන්නම්.", "අනෙක් පුද්ගලයා: එහෙනම් පළමුව 100-yen shop එක බලමු."],
            bn: ["আমি: লন্ড্রির জিনিস এবং স্টোরেজ কেস কিনতে চাই।", "অন্য ব্যক্তি: ছোট জিনিস হলে ১০০ ইয়েন দোকান, বড় জিনিস হলে হোম সেন্টার সুবিধাজনক।", "আমি: আজ শুধু যেগুলো বহন করে বাড়ি নিতে পারি সেগুলোই কিনব।", "অন্য ব্যক্তি: তাহলে আগে ১০০ ইয়েন দোকান দেখি।"],
            pt: ["Eu: Quero comprar itens de lavanderia e caixas de armazenamento.", "Outra pessoa: Para coisas pequenas, uma loja de 100 ienes é útil; para coisas grandes, um home center é útil.", "Eu: Hoje vou comprar apenas coisas que posso levar para casa.", "Outra pessoa: Nesse caso, vamos ver primeiro a loja de 100 ienes."],
            es: ["Yo: Quiero comprar artículos de lavandería y cajas de almacenamiento.", "Otra persona: Para cosas pequeñas, una tienda de 100 yenes es conveniente; para cosas grandes, un home center es conveniente.", "Yo: Hoy compraré solo cosas que pueda llevar a casa.", "Otra persona: En ese caso, veamos primero la tienda de 100 yenes."],
            fr: ["Moi : Je veux acheter des articles de lessive et des boîtes de rangement.", "Autre personne : Pour les petits objets, un magasin à 100 yens est pratique ; pour les grands objets, un home center est pratique.", "Moi : Aujourd’hui, je n’achèterai que des choses que je peux rapporter.", "Autre personne : Dans ce cas, regardons d’abord le magasin à 100 yens."],
            ru: ["Я: Хочу купить товары для стирки и контейнеры для хранения.", "Другой человек: Для мелких вещей удобен магазин за 100 иен, для крупных — home center.", "Я: Сегодня куплю только то, что смогу унести домой.", "Другой человек: Тогда сначала посмотрим магазин за 100 иен."],
            uk: ["Я: Хочу купити товари для прання та контейнери для зберігання.", "Інша людина: Для дрібних речей зручний магазин за 100 єн, для великих — home center.", "Я: Сьогодні куплю лише те, що зможу віднести додому.", "Інша людина: Тоді спочатку подивімося магазин за 100 єн."]
        }
    ),

    makeA2ChooseVariousStoresDialogue(
        "a2_various_store_004",
        "輸入食品店を選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "今夜、国の料理を作りたいです。",
                target: "こんや くにのりょうりをつくりたいです",
                ruby: "<ruby>今夜<rt>こんや</rt></ruby>、<ruby>国<rt>くに</rt></ruby>の<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>りたいです。",
                romaji: "Kon'ya, kuni no ryōri o tsukuritai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "普通のスーパーより、輸入食品店の方が材料を探しやすいです。",
                target: "ふつうのすーぱーより ゆにゅうしょくひんてんのほうがざいりょうをさがしやすいです",
                ruby: "<ruby>普通<rt>ふつう</rt></ruby>のスーパーより、<ruby>輸入食品店<rt>ゆにゅうしょくひんてん</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>が<ruby>材料<rt>ざいりょう</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しやすいです。",
                romaji: "Futsū no sūpā yori, yunyū shokuhin-ten no hō ga zairyō o sagashiyasui desu."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "辛いソースと豆を買えたら助かります。",
                target: "からいそーすとまめをかえたらたすかります",
                ruby: "<ruby>辛<rt>から</rt></ruby>いソースと<ruby>豆<rt>まめ</rt></ruby>を<ruby>買<rt>か</rt></ruby>えたら<ruby>助<rt>たす</rt></ruby>かります。",
                romaji: "Karai sōsu to mame o kaetara tasukarimasu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "駅ビルの地下に、海外の食材を扱う店があります。",
                target: "えきびるのちかに かいがいのしょくざいをあつかうみせがあります",
                ruby: "<ruby>駅<rt>えき</rt></ruby>ビルの<ruby>地下<rt>ちか</rt></ruby>に、<ruby>海外<rt>かいがい</rt></ruby>の<ruby>食材<rt>しょくざい</rt></ruby>を<ruby>扱<rt>あつか</rt></ruby>う<ruby>店<rt>みせ</rt></ruby>があります。",
                romaji: "Eki biru no chika ni, kaigai no shokuzai o atsukau mise ga arimasu."
            }
        ],
        {
            ja: ["自分：今夜、国の料理を作りたいです。", "相手：普通のスーパーより、輸入食品店の方が材料を探しやすいです。", "自分：辛いソースと豆を買えたら助かります。", "相手：駅ビルの地下に、海外の食材を扱う店があります。"],
            en: ["Me: Tonight, I want to cook food from my country.", "Other Person: Compared with a regular supermarket, an imported food store is easier for finding ingredients.", "Me: It would help if I could buy spicy sauce and beans.", "Other Person: There is a store in the basement of the station building that sells ingredients from other countries."],
            "zh-CN": ["自己：今晚我想做自己国家的料理。", "对方：比起普通超市，进口食品店更容易找到材料。", "自己：如果能买到辣酱和豆子就太好了。", "对方：车站大楼的地下有一家卖海外食材的店。"],
            "zh-TW": ["自己：今晚我想做自己國家的料理。", "對方：比起一般超市，進口食品店更容易找到材料。", "自己：如果能買到辣醬和豆子就太好了。", "對方：車站大樓的地下有一家賣海外食材的店。"],
            ko: ["나: 오늘 밤에 제 나라 음식을 만들고 싶어요.", "상대방: 일반 슈퍼보다 수입 식품점이 재료를 찾기 쉬워요.", "나: 매운 소스와 콩을 살 수 있으면 도움이 됩니다.", "상대방: 역 건물 지하에 해외 식재료를 취급하는 가게가 있습니다."],
            vi: ["Tôi: Tối nay tôi muốn nấu món ăn của nước tôi.", "Người kia: So với siêu thị bình thường, cửa hàng thực phẩm nhập khẩu dễ tìm nguyên liệu hơn.", "Tôi: Nếu mua được sốt cay và đậu thì tốt quá.", "Người kia: Ở tầng hầm tòa nhà ga có cửa hàng bán nguyên liệu nước ngoài."],
            tl: ["Ako: Gusto kong magluto ng pagkain mula sa bansa ko ngayong gabi.", "Kausap: Mas madaling maghanap ng ingredients sa imported food store kaysa sa ordinaryong supermarket.", "Ako: Malaking tulong kung makakabili ako ng spicy sauce at beans.", "Kausap: May tindahan sa basement ng station building na nagbebenta ng ingredients mula sa ibang bansa."],
            id: ["Saya: Malam ini saya ingin memasak makanan dari negara saya.", "Lawan bicara: Dibanding supermarket biasa, lebih mudah mencari bahan di toko makanan impor.", "Saya: Akan sangat membantu jika bisa membeli saus pedas dan kacang.", "Lawan bicara: Di basement gedung stasiun ada toko yang menjual bahan makanan dari luar negeri."],
            th: ["ฉัน/ผม: คืนนี้อยากทำอาหารของประเทศตัวเองค่ะ/ครับ", "อีกฝ่าย: ร้านอาหารนำเข้าน่าจะหาวัตถุดิบง่ายกว่าซูเปอร์ทั่วไปค่ะ/ครับ", "ฉัน/ผม: ถ้าซื้อซอสเผ็ดกับถั่วได้จะช่วยมากค่ะ/ครับ", "อีกฝ่าย: ที่ชั้นใต้ดินของอาคารสถานีมีร้านที่ขายวัตถุดิบต่างประเทศค่ะ/ครับ"],
            my: ["မိမိ: ဒီည ကိုယ့်နိုင်ငံရဲ့ ဟင်းလျာချက်ချင်ပါတယ်။", "တစ်ဖက်လူ: ပုံမှန် supermarket ထက် imported food store မှာ ပစ္စည်းရှာရတာ ပိုလွယ်ပါတယ်။", "မိမိ: spicy sauce နဲ့ bean ဝယ်လို့ရရင် အကူအညီဖြစ်ပါတယ်။", "တစ်ဖက်လူ: ဘူတာအဆောက်အအုံ basement မှာ နိုင်ငံခြားအစားအစာပစ္စည်းတွေ ရောင်းတဲ့ဆိုင်ရှိပါတယ်။"],
            km: ["ខ្ញុំ: យប់នេះ ខ្ញុំចង់ធ្វើម្ហូបប្រទេសរបស់ខ្ញុំ។", "អ្នកម្ខាងទៀត: បើប្រៀបធៀបនឹងផ្សារទំនើបធម្មតា ហាងអាហារនាំចូលងាយរកគ្រឿងផ្សំជាង។", "ខ្ញុំ: ប្រសិនបើអាចទិញទឹកជ្រលក់ហឹរ និងសណ្តែកបាន នឹងជួយខ្លាំង។", "អ្នកម្ខាងទៀត: នៅជាន់ក្រោមអគារស្ថានីយ៍ មានហាងដែលលក់គ្រឿងផ្សំពីបរទេស។"],
            ne: ["म: आज राति आफ्नो देशको खाना बनाउन चाहन्छु।", "अर्को व्यक्ति: सामान्य सुपरमार्केटभन्दा आयातित खाद्य पसलमा सामग्री खोज्न सजिलो हुन्छ।", "म: पिरो सस र सिमी किन्न पाए राम्रो हुन्थ्यो।", "अर्को व्यक्ति: स्टेशन भवनको बेसमेन्टमा विदेशी सामग्री बेच्ने पसल छ।"],
            mn: ["Би: Өнөө орой өөрийн орны хоол хиймээр байна.", "Нөгөө хүн: Энгийн супермаркетаас илүү импортын хүнсний дэлгүүрт орц хайхад амар.", "Би: Халуун соус, шош авч чадвал их тус болно.", "Нөгөө хүн: Буудлын барилгын доод давхарт гадаад хүнсний орц зардаг дэлгүүр бий."],
            si: ["මම: අද රාත්‍රියේ මගේ රටේ කෑමක් හදන්න ඕනේ.", "අනෙක් පුද්ගලයා: සාමාන්‍ය supermarket එකකට වඩා imported food store එකේ ingredients හොයාගන්න පහසුයි.", "මම: spicy sauce සහ beans ගන්න පුළුවන්නම් ලොකු උදව්වක්.", "අනෙක් පුද්ගලයා: station building එකේ basement එකේ foreign ingredients විකුණන කඩයක් තියෙනවා."],
            bn: ["আমি: আজ রাতে নিজের দেশের খাবার রান্না করতে চাই।", "অন্য ব্যক্তি: সাধারণ সুপারমার্কেটের চেয়ে আমদানি খাবারের দোকানে উপকরণ খুঁজে পাওয়া সহজ।", "আমি: ঝাল সস এবং বিনস কিনতে পারলে উপকার হবে।", "অন্য ব্যক্তি: স্টেশন বিল্ডিংয়ের বেসমেন্টে বিদেশি উপকরণ বিক্রি করে এমন দোকান আছে।"],
            pt: ["Eu: Hoje à noite quero cozinhar comida do meu país.", "Outra pessoa: Em uma loja de alimentos importados é mais fácil encontrar ingredientes do que em um supermercado comum.", "Eu: Seria ótimo se eu pudesse comprar molho apimentado e feijão.", "Outra pessoa: No subsolo do prédio da estação há uma loja que vende ingredientes estrangeiros."],
            es: ["Yo: Esta noche quiero cocinar comida de mi país.", "Otra persona: En una tienda de comida importada es más fácil encontrar ingredientes que en un supermercado normal.", "Yo: Sería de mucha ayuda si pudiera comprar salsa picante y frijoles.", "Otra persona: En el sótano del edificio de la estación hay una tienda que vende ingredientes extranjeros."],
            fr: ["Moi : Ce soir, je veux cuisiner un plat de mon pays.", "Autre personne : Dans un magasin d’aliments importés, il est plus facile de trouver des ingrédients que dans un supermarché ordinaire.", "Moi : Ce serait utile si je pouvais acheter une sauce piquante et des haricots.", "Autre personne : Au sous-sol du bâtiment de la gare, il y a un magasin qui vend des ingrédients étrangers."],
            ru: ["Я: Сегодня вечером хочу приготовить блюдо своей страны.", "Другой человек: В магазине импортных продуктов ингредиенты найти проще, чем в обычном супермаркете.", "Я: Было бы хорошо, если бы я смог купить острый соус и бобы.", "Другой человек: В подвале здания станции есть магазин с иностранными ингредиентами."],
            uk: ["Я: Сьогодні ввечері хочу приготувати страву своєї країни.", "Інша людина: У магазині імпортних продуктів легше знайти інгредієнти, ніж у звичайному супермаркеті.", "Я: Було б добре, якби я зміг купити гострий соус і боби.", "Інша людина: У підвалі будівлі станції є магазин із закордонними інгредієнтами."]
        }
    ),

    makeA2ChooseVariousStoresDialogue(
        "a2_various_store_005",
        "服屋を選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "面接用のシャツを探しています。",
                target: "めんせつようのしゃつをさがしています",
                ruby: "<ruby>面接用<rt>めんせつよう</rt></ruby>のシャツを<ruby>探<rt>さが</rt></ruby>しています。",
                romaji: "Mensetsu-yō no shatsu o sagashite imasu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "カジュアルな店より、仕事用の服が多い店が良さそうです。",
                target: "かじゅあるなみせより しごとようのふくがおおいみせがよさそうです",
                ruby: "カジュアルな<ruby>店<rt>みせ</rt></ruby>より、<ruby>仕事用<rt>しごとよう</rt></ruby>の<ruby>服<rt>ふく</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い<ruby>店<rt>みせ</rt></ruby>が<ruby>良<rt>よ</rt></ruby>さそうです。",
                romaji: "Kajuaru na mise yori, shigoto-yō no fuku ga ōi mise ga yosasō desu."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "試着できるかも大事ですね。",
                target: "しちゃくできるかもだいじですね",
                ruby: "<ruby>試着<rt>しちゃく</rt></ruby>できるかも<ruby>大事<rt>だいじ</rt></ruby>ですね。",
                romaji: "Shichaku dekiru ka mo daiji desu ne."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "サイズ展開が多い店を選びましょう。",
                target: "さいずてんかいがおおいみせをえらびましょう",
                ruby: "サイズ<ruby>展開<rt>てんかい</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い<ruby>店<rt>みせ</rt></ruby>を<ruby>選<rt>えら</rt></ruby>びましょう。",
                romaji: "Saizu tenkai ga ōi mise o erabimashō."
            }
        ],
        {
            ja: ["自分：面接用のシャツを探しています。", "相手：カジュアルな店より、仕事用の服が多い店が良さそうです。", "自分：試着できるかも大事ですね。", "相手：サイズ展開が多い店を選びましょう。"],
            en: ["Me: I am looking for a shirt for an interview.", "Other Person: Rather than a casual shop, a store with many work clothes seems better.", "Me: It is also important whether I can try it on.", "Other Person: Let’s choose a store with many size options."],
            "zh-CN": ["自己：我在找面试用的衬衫。", "对方：比起休闲店，有很多工作服的店似乎更好。", "自己：能不能试穿也很重要呢。", "对方：我们选尺码比较多的店吧。"],
            "zh-TW": ["自己：我在找面試用的襯衫。", "對方：比起休閒店，有很多工作服的店似乎更好。", "自己：能不能試穿也很重要呢。", "對方：我們選尺寸比較多的店吧。"],
            ko: ["나: 면접용 셔츠를 찾고 있어요.", "상대방: 캐주얼한 가게보다 업무용 옷이 많은 가게가 좋을 것 같아요.", "나: 입어 볼 수 있는지도 중요하네요.", "상대방: 사이즈 종류가 많은 가게를 고릅시다."],
            vi: ["Tôi: Tôi đang tìm áo sơ mi dùng cho phỏng vấn.", "Người kia: Có vẻ nên chọn cửa hàng có nhiều quần áo công sở hơn là cửa hàng đồ casual.", "Tôi: Việc có thể thử đồ cũng quan trọng nhỉ.", "Người kia: Hãy chọn cửa hàng có nhiều cỡ."],
            tl: ["Ako: Naghahanap ako ng shirt para sa interview.", "Kausap: Mukhang mas mabuti ang tindahang maraming work clothes kaysa casual shop.", "Ako: Mahalaga rin kung puwedeng mag-try on.", "Kausap: Pumili tayo ng tindahang maraming size options."],
            id: ["Saya: Saya sedang mencari kemeja untuk wawancara.", "Lawan bicara: Daripada toko kasual, sepertinya lebih baik toko yang banyak pakaian kerja.", "Saya: Apakah bisa dicoba juga penting ya.", "Lawan bicara: Mari pilih toko dengan banyak pilihan ukuran."],
            th: ["ฉัน/ผม: กำลังหาเสื้อเชิ้ตสำหรับสัมภาษณ์งานค่ะ/ครับ", "อีกฝ่าย: ร้านที่มีเสื้อผ้าสำหรับทำงานเยอะน่าจะดีกว่าร้าน casual ค่ะ/ครับ", "ฉัน/ผม: การลองใส่ได้ก็สำคัญนะคะ/ครับ", "อีกฝ่าย: เลือกร้านที่มีไซซ์หลายแบบกันค่ะ/ครับ"],
            my: ["မိမိ: interview အတွက် shirt ကို ရှာနေပါတယ်။", "တစ်ဖက်လူ: casual ဆိုင်ထက် work clothes များတဲ့ဆိုင်က ပိုကောင်းမယ်ထင်ပါတယ်။", "မိမိ: ဝတ်ကြည့်လို့ရမရလည်း အရေးကြီးですね။", "တစ်ဖက်လူ: size မျိုးစုံရှိတဲ့ဆိုင်ကို ရွေးကြရအောင်။"],
            km: ["ខ្ញុំ: ខ្ញុំកំពុងរកអាវសម្រាប់សម្ភាសន៍ការងារ។", "អ្នកម្ខាងទៀត: ជាងហាង casual ហាងដែលមានសម្លៀកបំពាក់សម្រាប់ការងារច្រើនហាក់ដូចជាល្អជាង។", "ខ្ញុំ: អាចសាកពាក់បានឬអត់ ក៏សំខាន់ដែរ។", "អ្នកម្ខាងទៀត: ជ្រើសហាងដែលមានទំហំច្រើន吧។"],
            ne: ["म: अन्तर्वार्ताका लागि सर्ट खोज्दै छु।", "अर्को व्यक्ति: क्याजुअल पसलभन्दा कामका कपडा धेरै भएको पसल राम्रो देखिन्छ।", "म: लगाएर हेर्न मिल्छ कि मिल्दैन पनि महत्त्वपूर्ण छ।", "अर्को व्यक्ति: धेरै साइज भएको पसल छानौं।"],
            mn: ["Би: Ярилцлагад өмсөх цамц хайж байна.", "Нөгөө хүн: Casual дэлгүүрээс илүү ажлын хувцас ихтэй дэлгүүр дээр байх.", "Би: Өмсөж үзэж болох эсэх нь ч чухал юм байна.", "Нөгөө хүн: Хэмжээний сонголт ихтэй дэлгүүр сонгоё."],
            si: ["මම: interview එකට shirt එකක් හොයනවා.", "අනෙක් පුද්ගලයා: casual shop එකකට වඩා work clothes වැඩි තැනක් හොඳ වගේ.", "මම: try on කරන්න පුළුවන්ද කියන එකත් වැදගත් නේ.", "අනෙක් පුද්ගලයා: size options වැඩි කඩයක් තෝරමු."],
            bn: ["আমি: ইন্টারভিউয়ের জন্য শার্ট খুঁজছি।", "অন্য ব্যক্তি: ক্যাজুয়াল দোকানের চেয়ে কাজের পোশাক বেশি আছে এমন দোকান ভালো মনে হচ্ছে।", "আমি: ট্রাই করা যায় কি না, সেটাও গুরুত্বপূর্ণ।", "অন্য ব্যক্তি: সাইজের অপশন বেশি আছে এমন দোকান বেছে নিই।"],
            pt: ["Eu: Estou procurando uma camisa para entrevista.", "Outra pessoa: Em vez de uma loja casual, parece melhor uma loja com muitas roupas de trabalho.", "Eu: Também é importante poder experimentar.", "Outra pessoa: Vamos escolher uma loja com muitas opções de tamanho."],
            es: ["Yo: Estoy buscando una camisa para una entrevista.", "Otra persona: En vez de una tienda casual, parece mejor una tienda con mucha ropa de trabajo.", "Yo: También es importante poder probársela.", "Otra persona: Elijamos una tienda con muchas opciones de talla."],
            fr: ["Moi : Je cherche une chemise pour un entretien.", "Autre personne : Plutôt qu’un magasin casual, un magasin avec beaucoup de vêtements de travail semble mieux.", "Moi : Il est aussi important de pouvoir l’essayer.", "Autre personne : Choisissons un magasin avec beaucoup de tailles."],
            ru: ["Я: Я ищу рубашку для собеседования.", "Другой человек: Лучше магазин с большим выбором рабочей одежды, чем casual-магазин.", "Я: Важно и то, можно ли примерить.", "Другой человек: Давайте выберем магазин с большим выбором размеров."],
            uk: ["Я: Я шукаю сорочку для співбесіди.", "Інша людина: Краще магазин із великим вибором робочого одягу, ніж casual-магазин.", "Я: Важливо й те, чи можна приміряти.", "Інша людина: Виберімо магазин із великим вибором розмірів."]
        }
    ),

    makeA2ChooseVariousStoresDialogue(
        "a2_various_store_006",
        "美容院を選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "髪を少し整えたいです。",
                target: "かみをすこしととのえたいです",
                ruby: "<ruby>髪<rt>かみ</rt></ruby>を<ruby>少<rt>すこ</rt></ruby>し<ruby>整<rt>ととの</rt></ruby>えたいです。",
                romaji: "Kami o sukoshi totonoetai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "短時間ならカット専門店、相談したいなら美容院が向いています。",
                target: "たんじかんならかっとせんもんてん そうだんしたいならびよういんがむいています",
                ruby: "<ruby>短時間<rt>たんじかん</rt></ruby>ならカット<ruby>専門店<rt>せんもんてん</rt></ruby>、<ruby>相談<rt>そうだん</rt></ruby>したいなら<ruby>美容院<rt>びよういん</rt></ruby>が<ruby>向<rt>む</rt></ruby>いています。",
                romaji: "Tanjikan nara katto senmonten, sōdan shitai nara biyōin ga muite imasu."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "今日は写真を見せて相談したいです。",
                target: "きょうはしゃしんをみせてそうだんしたいです",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>せて<ruby>相談<rt>そうだん</rt></ruby>したいです。",
                romaji: "Kyō wa shashin o misete sōdan shitai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "それなら、予約できる美容院を選びましょう。",
                target: "それなら よやくできるびよういんをえらびましょう",
                ruby: "それなら、<ruby>予約<rt>よやく</rt></ruby>できる<ruby>美容院<rt>びよういん</rt></ruby>を<ruby>選<rt>えら</rt></ruby>びましょう。",
                romaji: "Sore nara, yoyaku dekiru biyōin o erabimashō."
            }
        ],
        {
            ja: ["自分：髪を少し整えたいです。", "相手：短時間ならカット専門店、相談したいなら美容院が向いています。", "自分：今日は写真を見せて相談したいです。", "相手：それなら、予約できる美容院を選びましょう。"],
            en: ["Me: I want to tidy up my hair a little.", "Other Person: If you want it done quickly, a haircut-only shop is good; if you want to consult, a hair salon is better.", "Me: Today, I want to show a photo and consult.", "Other Person: In that case, let’s choose a hair salon where you can make a reservation."],
            "zh-CN": ["自己：我想稍微整理一下头发。", "对方：如果想快一点，剪发专门店合适；如果想咨询，美容院更适合。", "自己：今天我想给对方看照片后再咨询。", "对方：那我们选可以预约的美容院吧。"],
            "zh-TW": ["自己：我想稍微整理一下頭髮。", "對方：如果想快一點，剪髮專門店合適；如果想諮詢，美容院更適合。", "自己：今天我想給對方看照片後再諮詢。", "對方：那我們選可以預約的美容院吧。"],
            ko: ["나: 머리를 조금 다듬고 싶어요.", "상대방: 짧은 시간이면 커트 전문점, 상담하고 싶다면 미용실이 맞습니다.", "나: 오늘은 사진을 보여 주고 상담하고 싶어요.", "상대방: 그렇다면 예약할 수 있는 미용실을 고릅시다."],
            vi: ["Tôi: Tôi muốn chỉnh tóc một chút.", "Người kia: Nếu muốn nhanh thì tiệm chuyên cắt tóc phù hợp, còn nếu muốn tư vấn thì tiệm làm tóc tốt hơn.", "Tôi: Hôm nay tôi muốn cho xem ảnh rồi tư vấn.", "Người kia: Vậy hãy chọn tiệm làm tóc có thể đặt lịch."],
            tl: ["Ako: Gusto kong ayusin nang kaunti ang buhok ko.", "Kausap: Kung mabilis lang, bagay ang haircut-only shop; kung gusto mong mag-consult, mas bagay ang hair salon.", "Ako: Ngayon gusto kong magpakita ng photo at mag-consult.", "Kausap: Kung ganoon, pumili tayo ng hair salon na puwedeng mag-reserve."],
            id: ["Saya: Saya ingin merapikan rambut sedikit.", "Lawan bicara: Kalau ingin cepat, toko khusus potong rambut cocok; kalau ingin konsultasi, salon rambut lebih cocok.", "Saya: Hari ini saya ingin menunjukkan foto dan berkonsultasi.", "Lawan bicara: Kalau begitu, mari pilih salon rambut yang bisa dipesan."],
            th: ["ฉัน/ผม: อยากจัดทรงผมเล็กน้อยค่ะ/ครับ", "อีกฝ่าย: ถ้าต้องการใช้เวลาสั้น ๆ ร้านตัดผมเฉพาะทางเหมาะ แต่ถ้าอยากปรึกษา ร้านทำผมเหมาะกว่าค่ะ/ครับ", "ฉัน/ผม: วันนี้อยากให้ดูรูปแล้วปรึกษาค่ะ/ครับ", "อีกฝ่าย: ถ้าอย่างนั้นเลือกร้านทำผมที่จองได้กันค่ะ/ครับ"],
            my: ["မိမိ: ဆံပင်ကို နည်းနည်းညှိချင်ပါတယ်။", "တစ်ဖက်လူ: အချိန်တိုတိုဆို cut specialist ဆိုင်၊ တိုင်ပင်ချင်ရင် hair salon က ပိုသင့်ပါတယ်။", "မိမိ: ဒီနေ့ ဓာတ်ပုံပြပြီး တိုင်ပင်ချင်ပါတယ်။", "တစ်ဖက်လူ: ဒါဆို ကြိုတင် booking လုပ်လို့ရတဲ့ hair salon ကို ရွေးကြရအောင်။"],
            km: ["ខ្ញុំ: ខ្ញុំចង់រៀបចំសក់បន្តិច។", "អ្នកម្ខាងទៀត: បើចង់រហ័ស ហាងកាត់សក់ឯកទេសល្អ ប៉ុន្តែបើចង់ពិគ្រោះយោបល់ ហាងសម្អាងសក់សមជាង។", "ខ្ញុំ: ថ្ងៃនេះ ខ្ញុំចង់បង្ហាញរូបថត ហើយពិគ្រោះ។", "អ្នកម្ខាងទៀត: បើដូច្នោះ ជ្រើសហាងសម្អាងសក់ដែលអាចកក់បាន吧។"],
            ne: ["म: कपाल अलि मिलाउन चाहन्छु।", "अर्को व्यक्ति: छोटो समयमा चाहिने भए कट-विशेष पसल, सल्लाह गर्न चाहिने भए हेयर सैलुन उपयुक्त हुन्छ।", "म: आज फोटो देखाएर सल्लाह गर्न चाहन्छु।", "अर्को व्यक्ति: त्यसो भए बुकिङ गर्न मिल्ने हेयर सैलुन छानौं।"],
            mn: ["Би: Үсээ жаахан янзлуулмаар байна.", "Нөгөө хүн: Богино хугацаанд бол зөвхөн засдаг газар, зөвлөгөө авах бол үсчин тохиромжтой.", "Би: Өнөөдөр зураг үзүүлээд зөвлөлдмөөр байна.", "Нөгөө хүн: Тэгвэл захиалга авч болдог үсчин сонгоё."],
            si: ["මම: කොණ්ඩය ටිකක් සකස් කරගන්න ඕනේ.", "අනෙක් පුද්ගලයා: කෙටි වේලාවක් නම් cut specialist shop එක, consult කරන්න ඕනේ නම් hair salon එක සුදුසුයි.", "මම: අද photo එකක් පෙන්වලා consult කරන්න ඕනේ.", "අනෙක් පුද්ගලයා: එහෙනම් reservation කළ හැකි hair salon එකක් තෝරමු."],
            bn: ["আমি: চুল একটু ঠিক করতে চাই।", "অন্য ব্যক্তি: দ্রুত হলে কাট-স্পেশালিটি দোকান ভালো, পরামর্শ চাইলে হেয়ার সেলুন উপযুক্ত।", "আমি: আজ ছবি দেখিয়ে পরামর্শ করতে চাই।", "অন্য ব্যক্তি: তাহলে রিজার্ভেশন করা যায় এমন হেয়ার সেলুন বেছে নিই।"],
            pt: ["Eu: Quero arrumar um pouco o cabelo.", "Outra pessoa: Se quiser algo rápido, uma loja especializada em corte é boa; se quiser consultar, um salão é melhor.", "Eu: Hoje quero mostrar uma foto e consultar.", "Outra pessoa: Então vamos escolher um salão onde seja possível reservar."],
            es: ["Yo: Quiero arreglarme un poco el pelo.", "Otra persona: Si quiere algo rápido, una peluquería solo de corte sirve; si quiere consultar, es mejor un salón.", "Yo: Hoy quiero mostrar una foto y consultar.", "Otra persona: Entonces elijamos un salón donde se pueda reservar."],
            fr: ["Moi : Je veux arranger un peu mes cheveux.", "Autre personne : Si vous voulez quelque chose de rapide, un salon de coupe rapide convient ; si vous voulez consulter, un salon de coiffure est mieux.", "Moi : Aujourd’hui, je veux montrer une photo et demander conseil.", "Autre personne : Alors choisissons un salon de coiffure où l’on peut réserver."],
            ru: ["Я: Хочу немного привести волосы в порядок.", "Другой человек: Если быстро, подойдёт салон только для стрижки; если хотите совет, лучше парикмахерская.", "Я: Сегодня хочу показать фото и посоветоваться.", "Другой человек: Тогда выберем парикмахерскую, где можно записаться."],
            uk: ["Я: Хочу трохи привести волосся до ладу.", "Інша людина: Якщо швидко, підійде салон лише для стрижки; якщо хочете порадитися, краще перукарня.", "Я: Сьогодні хочу показати фото й порадитися.", "Інша людина: Тоді виберімо перукарню, де можна записатися."]
        }
    ),

    makeA2ChooseVariousStoresDialogue(
        "a2_various_store_007",
        "コインランドリーを選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "毛布を洗いたいですが、家の洗濯機には入りません。",
                target: "もうふをあらいたいですが いえのせんたくきにははいりません",
                ruby: "<ruby>毛布<rt>もうふ</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>いたいですが、<ruby>家<rt>いえ</rt></ruby>の<ruby>洗濯機<rt>せんたくき</rt></ruby>には<ruby>入<rt>はい</rt></ruby>りません。",
                romaji: "Mōfu o araitai desu ga, ie no sentakuki ni wa hairimasen."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "大型洗濯機があるコインランドリーを探しましょう。",
                target: "おおがたせんたくきがあるこいんらんどりーをさがしましょう",
                ruby: "<ruby>大型洗濯機<rt>おおがたせんたくき</rt></ruby>があるコインランドリーを<ruby>探<rt>さが</rt></ruby>しましょう。",
                romaji: "Ōgata sentakuki ga aru koin randorī o sagashimashō."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "乾燥までできる所だと助かります。",
                target: "かんそうまでできるところだとたすかります",
                ruby: "<ruby>乾燥<rt>かんそう</rt></ruby>までできる<ruby>所<rt>ところ</rt></ruby>だと<ruby>助<rt>たす</rt></ruby>かります。",
                romaji: "Kansō made dekiru tokoro da to tasukarimasu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "この近くに、空き状況をスマホで見られる店があります。",
                target: "このちかくに あきじょうきょうをすまほでみられるみせがあります",
                ruby: "この<ruby>近<rt>ちか</rt></ruby>くに、<ruby>空<rt>あ</rt></ruby>き<ruby>状況<rt>じょうきょう</rt></ruby>をスマホで<ruby>見<rt>み</rt></ruby>られる<ruby>店<rt>みせ</rt></ruby>があります。",
                romaji: "Kono chikaku ni, aki jōkyō o sumaho de mirareru mise ga arimasu."
            }
        ],
        {
            ja: ["自分：毛布を洗いたいですが、家の洗濯機には入りません。", "相手：大型洗濯機があるコインランドリーを探しましょう。", "自分：乾燥までできる所だと助かります。", "相手：この近くに、空き状況をスマホで見られる店があります。"],
            en: ["Me: I want to wash a blanket, but it will not fit in my washing machine at home.", "Other Person: Let’s look for a laundromat with large washing machines.", "Me: It would help if I could dry it there too.", "Other Person: There is a place near here where you can check machine availability on your phone."],
            "zh-CN": ["自己：我想洗毛毯，但家里的洗衣机放不下。", "对方：我们找有大型洗衣机的自助洗衣店吧。", "自己：如果还能烘干就太好了。", "对方：这附近有一家可以用手机查看空机情况的店。"],
            "zh-TW": ["自己：我想洗毛毯，但家裡的洗衣機放不下。", "對方：我們找有大型洗衣機的自助洗衣店吧。", "自己：如果還能烘乾就太好了。", "對方：這附近有一家可以用手機查看空機情況的店。"],
            ko: ["나: 담요를 빨고 싶지만 집 세탁기에는 들어가지 않습니다.", "상대방: 대형 세탁기가 있는 코인 세탁소를 찾아봅시다.", "나: 건조까지 할 수 있는 곳이면 도움이 됩니다.", "상대방: 이 근처에 빈 기계 상황을 스마트폰으로 볼 수 있는 가게가 있습니다."],
            vi: ["Tôi: Tôi muốn giặt chăn nhưng máy giặt ở nhà không bỏ vừa.", "Người kia: Hãy tìm tiệm giặt tự động có máy giặt cỡ lớn.", "Tôi: Nếu có thể sấy luôn thì tốt quá.", "Người kia: Gần đây có tiệm có thể xem tình trạng máy trống bằng điện thoại."],
            tl: ["Ako: Gusto kong labhan ang blanket, pero hindi kasya sa washing machine sa bahay.", "Kausap: Maghanap tayo ng laundromat na may malaking washing machine.", "Ako: Makakatulong kung puwede ring patuyuin doon.", "Kausap: May lugar malapit dito kung saan makikita sa smartphone kung may available na machine."],
            id: ["Saya: Saya ingin mencuci selimut, tetapi tidak muat di mesin cuci rumah.", "Lawan bicara: Mari cari laundromat yang memiliki mesin cuci besar.", "Saya: Akan membantu jika bisa mengeringkannya juga.", "Lawan bicara: Di dekat sini ada tempat yang bisa melihat ketersediaan mesin lewat smartphone."],
            th: ["ฉัน/ผม: อยากซักผ้าห่ม แต่ใส่เครื่องซักผ้าที่บ้านไม่ได้ค่ะ/ครับ", "อีกฝ่าย: หาร้านซักผ้าหยอดเหรียญที่มีเครื่องซักผ้าขนาดใหญ่กันค่ะ/ครับ", "ฉัน/ผม: ถ้าอบแห้งได้ด้วยจะช่วยมากค่ะ/ครับ", "อีกฝ่าย: แถวนี้มีร้านที่ดูสถานะเครื่องว่างทางมือถือได้ค่ะ/ครับ"],
            my: ["မိမိ: စောင်ကို လျှော်ချင်ပေမယ့် အိမ်က washing machine ထဲ မဝင်ပါဘူး။", "တစ်ဖက်လူ: large washing machine ရှိတဲ့ coin laundry ကို ရှာကြရအောင်။", "မိမိ: drying လည်း လုပ်လို့ရတဲ့နေရာဆို အကူအညီဖြစ်ပါတယ်။", "တစ်ဖက်လူ: ဒီနားမှာ machine လွတ်မလွတ်ကို smartphone နဲ့ ကြည့်လို့ရတဲ့ဆိုင်ရှိပါတယ်။"],
            km: ["ខ្ញុំ: ខ្ញុំចង់បោកភួយ ប៉ុន្តែមិនចូលម៉ាស៊ីនបោកគក់នៅផ្ទះទេ។", "អ្នកម្ខាងទៀត: រកកន្លែងបោកគក់ដែលមានម៉ាស៊ីនបោកធំ吧។", "ខ្ញុំ: ប្រសិនបើអាចសម្ងួតបានផង នឹងជួយខ្លាំង។", "អ្នកម្ខាងទៀត: នៅជិតនេះ មានកន្លែងដែលអាចមើលស្ថានភាពម៉ាស៊ីនទំនេរតាមស្មាតហ្វូនបាន។"],
            ne: ["म: कम्बल धुन चाहन्छु, तर घरको washing machine मा अट्दैन।", "अर्को व्यक्ति: ठूलो washing machine भएको laundromat खोजौं।", "म: सुकाउन पनि मिल्ने ठाउँ भए राम्रो हुन्छ।", "अर्को व्यक्ति: यहाँ नजिकै smartphone बाट खाली अवस्था हेर्न मिल्ने ठाउँ छ।"],
            mn: ["Би: Хөнжил угаамаар байна, гэхдээ гэрийн угаалгын машинд багтахгүй.", "Нөгөө хүн: Том угаалгын машинтай coin laundry хайя.", "Би: Хатаах хүртэл хийж болдог газар бол тустай.", "Нөгөө хүн: Энэ ойрхон утсаараа сул эсэхийг харж болдог газар байна."],
            si: ["මම: blanket එකක් සෝදන්න ඕනේ, නමුත් ගෙදර washing machine එකට ඇතුල් වෙන්නේ නැහැ.", "අනෙක් පුද්ගලයා: large washing machine තියෙන laundromat එකක් හොයමු.", "මම: drying දක්වා කරන්න පුළුවන් තැනක් නම් ලොකු උදව්වක්.", "අනෙක් පුද්ගලයා: මේ ළඟ smartphone එකෙන් machine availability බලන්න පුළුවන් තැනක් තියෙනවා."],
            bn: ["আমি: কম্বল ধুতে চাই, কিন্তু বাড়ির washing machine-এ ঢুকবে না।", "অন্য ব্যক্তি: বড় washing machine আছে এমন laundromat খুঁজি।", "আমি: শুকানো পর্যন্ত করা যায় এমন জায়গা হলে উপকার হবে।", "অন্য ব্যক্তি: এই কাছাকাছি এমন দোকান আছে যেখানে ফোনে মেশিন ফাঁকা আছে কি না দেখা যায়।"],
            pt: ["Eu: Quero lavar um cobertor, mas ele não cabe na máquina de lavar de casa.", "Outra pessoa: Vamos procurar uma lavanderia automática com máquinas grandes.", "Eu: Seria útil se também desse para secar lá.", "Outra pessoa: Perto daqui há uma loja onde dá para ver pelo smartphone se há máquinas disponíveis."],
            es: ["Yo: Quiero lavar una manta, pero no cabe en la lavadora de casa.", "Otra persona: Busquemos una lavandería automática con lavadoras grandes.", "Yo: Sería útil si también pudiera secarla allí.", "Otra persona: Cerca de aquí hay un lugar donde se puede ver en el smartphone si hay máquinas libres."],
            fr: ["Moi : Je veux laver une couverture, mais elle ne rentre pas dans ma machine à laver à la maison.", "Autre personne : Cherchons une laverie automatique avec de grandes machines.", "Moi : Ce serait utile si je pouvais aussi la sécher là-bas.", "Autre personne : Près d’ici, il y a un endroit où l’on peut voir sur smartphone les machines disponibles."],
            ru: ["Я: Хочу постирать одеяло, но оно не помещается в домашнюю стиральную машину.", "Другой человек: Давайте найдём прачечную самообслуживания с большими машинами.", "Я: Было бы удобно, если там можно и высушить.", "Другой человек: Рядом есть место, где можно посмотреть свободные машины на смартфоне."],
            uk: ["Я: Хочу випрати ковдру, але вона не поміщається в домашню пральну машину.", "Інша людина: Давайте знайдемо пральню самообслуговування з великими машинами.", "Я: Було б зручно, якби там можна було й висушити.", "Інша людина: Поруч є місце, де можна подивитися вільні машини на смартфоні."]
        }
    ),

    makeA2ChooseVariousStoresDialogue(
        "a2_various_store_008",
        "文房具店を選ぶ",
        [
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "履歴書と封筒を買いたいです。",
                target: "りれきしょとふうとうをかいたいです",
                ruby: "<ruby>履歴書<rt>りれきしょ</rt></ruby>と<ruby>封筒<rt>ふうとう</rt></ruby>を<ruby>買<rt>か</rt></ruby>いたいです。",
                romaji: "Rirekisho to fūtō o kaitai desu."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "コンビニにもありますが、文房具店の方が種類があります。",
                target: "こんびににもありますが ぶんぼうぐてんのほうがしゅるいがあります",
                ruby: "コンビニにもありますが、<ruby>文房具店<rt>ぶんぼうぐてん</rt></ruby>の<ruby>方<rt>ほう</rt></ruby>が<ruby>種類<rt>しゅるい</rt></ruby>があります。",
                romaji: "Konbini ni mo arimasu ga, bunbōgu-ten no hō ga shurui ga arimasu."
            },
            {
                label: "話者A",
                key: "personA",
                name: "自分",
                line: "書き方の見本も置いてありますか。",
                target: "かきかたのみほんもおいてありますか",
                ruby: "<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>の<ruby>見本<rt>みほん</rt></ruby>も<ruby>置<rt>お</rt></ruby>いてありますか。",
                romaji: "Kakikata no mihon mo oite arimasu ka."
            },
            {
                label: "話者B",
                key: "personB",
                name: "相手",
                line: "大きい文房具店なら、見つかると思います。",
                target: "おおきいぶんぼうぐてんなら みつかるとおもいます",
                ruby: "<ruby>大<rt>おお</rt></ruby>きい<ruby>文房具店<rt>ぶんぼうぐてん</rt></ruby>なら、<ruby>見<rt>み</rt></ruby>つかると<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Ōkii bunbōgu-ten nara, mitsukaru to omoimasu."
            }
        ],
        {
            ja: ["自分：履歴書と封筒を買いたいです。", "相手：コンビニにもありますが、文房具店の方が種類があります。", "自分：書き方の見本も置いてありますか。", "相手：大きい文房具店なら、見つかると思います。"],
            en: ["Me: I want to buy a resume form and envelopes.", "Other Person: Convenience stores have them too, but stationery stores have more types.", "Me: Do they also have writing examples?", "Other Person: I think you can find them at a large stationery store."],
            "zh-CN": ["自己：我想买履历书和信封。", "对方：便利店也有，但文具店种类更多。", "自己：也有填写示例吗？", "对方：如果是大的文具店，我觉得能找到。"],
            "zh-TW": ["自己：我想買履歷表和信封。", "對方：便利商店也有，但文具店種類更多。", "自己：也有填寫範例嗎？", "對方：如果是大的文具店，我覺得能找到。"],
            ko: ["나: 이력서와 봉투를 사고 싶어요.", "상대방: 편의점에도 있지만 문구점이 종류가 더 많아요.", "나: 쓰는 방법의 예시도 놓여 있나요?", "상대방: 큰 문구점이라면 찾을 수 있을 것 같아요."],
            vi: ["Tôi: Tôi muốn mua hồ sơ xin việc và phong bì.", "Người kia: Cửa hàng tiện lợi cũng có, nhưng cửa hàng văn phòng phẩm có nhiều loại hơn.", "Tôi: Có mẫu cách viết không ạ?", "Người kia: Nếu là cửa hàng văn phòng phẩm lớn thì tôi nghĩ sẽ tìm thấy."],
            tl: ["Ako: Gusto kong bumili ng resume form at envelopes.", "Kausap: Mayroon din sa convenience store, pero mas maraming uri sa stationery store.", "Ako: May sample din ba kung paano sulatan?", "Kausap: Sa malaking stationery store, sa tingin ko makakahanap ka."],
            id: ["Saya: Saya ingin membeli formulir riwayat hidup dan amplop.", "Lawan bicara: Di minimarket juga ada, tetapi toko alat tulis memiliki lebih banyak jenis.", "Saya: Apakah ada contoh cara menulis juga?", "Lawan bicara: Kalau toko alat tulis besar, saya pikir bisa ditemukan."],
            th: ["ฉัน/ผม: อยากซื้อใบประวัติและซองจดหมายค่ะ/ครับ", "อีกฝ่าย: ที่ร้านสะดวกซื้อก็มี แต่ร้านเครื่องเขียนมีหลายแบบกว่าค่ะ/ครับ", "ฉัน/ผม: มีตัวอย่างวิธีเขียนด้วยไหมคะ/ครับ", "อีกฝ่าย: ถ้าเป็นร้านเครื่องเขียนใหญ่ น่าจะหาเจอค่ะ/ครับ"],
            my: ["မိမိ: resume form နဲ့ စာအိတ် ဝယ်ချင်ပါတယ်။", "တစ်ဖက်လူ: convenience store မှာလည်း ရှိပေမယ့် stationery store မှာ အမျိုးအစားပိုများပါတယ်။", "မိမိ: ရေးနည်း sample လည်း ထားထားပါသလား။", "တစ်ဖက်လူ: ကြီးတဲ့ stationery store ဆိုရင် ရှာတွေ့မယ်ထင်ပါတယ်။"],
            km: ["ខ្ញុំ: ខ្ញុំចង់ទិញប្រវត្តិរូបសង្ខេប និងស្រោមសំបុត្រ។", "អ្នកម្ខាងទៀត: នៅហាងងាយស្រួលក៏មាន ប៉ុន្តែហាងសម្ភារៈការិយាល័យមានប្រភេទច្រើនជាង។", "ខ្ញុំ: តើមានគំរូរបៀបសរសេរផងដែរទេ?", "អ្នកម្ខាងទៀត: បើជាហាងសម្ភារៈការិយាល័យធំ ខ្ញុំគិតថាអាចរកឃើញ។"],
            ne: ["म: रिजुमे फारम र खाम किन्न चाहन्छु।", "अर्को व्यक्ति: कन्भिनियन्स स्टोरमा पनि हुन्छ, तर स्टेशनरी पसलमा धेरै प्रकार हुन्छ।", "म: लेख्ने तरिकाको नमुना पनि राखिएको हुन्छ?", "अर्को व्यक्ति: ठूलो स्टेशनरी पसल भए भेटिन्छ जस्तो लाग्छ।"],
            mn: ["Би: Анкет, дугтуй авмаар байна.", "Нөгөө хүн: Конбинид ч байдаг, гэхдээ бичиг хэргийн дэлгүүрт төрөл илүү олон.", "Би: Бичих загвар ч байдаг уу?", "Нөгөө хүн: Том бичиг хэргийн дэлгүүр бол олдоно гэж бодож байна."],
            si: ["මම: resume form එකක් සහ envelopes ගන්න ඕනේ.", "අනෙක් පුද්ගලයා: convenience store එකෙත් තියෙනවා, නමුත් stationery store එකේ වර්ග වැඩියි.", "මම: ලියන ආකාරයේ sample එකකුත් තියෙනවද?", "අනෙක් පුද්ගලයා: ලොකු stationery store එකක් නම් හමුවෙයි කියලා හිතනවා."],
            bn: ["আমি: রিজিউমে ফর্ম এবং খাম কিনতে চাই।", "অন্য ব্যক্তি: কনভিনিয়েন্স স্টোরেও আছে, কিন্তু স্টেশনারি দোকানে ধরন বেশি।", "আমি: লেখার নমুনাও রাখা থাকে?", "অন্য ব্যক্তি: বড় স্টেশনারি দোকান হলে পাওয়া যাবে মনে করি।"],
            pt: ["Eu: Quero comprar um formulário de currículo e envelopes.", "Outra pessoa: Também há em lojas de conveniência, mas papelarias têm mais tipos.", "Eu: Há também exemplos de como preencher?", "Outra pessoa: Acho que você encontrará em uma papelaria grande."],
            es: ["Yo: Quiero comprar un formulario de currículum y sobres.", "Otra persona: También hay en tiendas de conveniencia, pero las papelerías tienen más tipos.", "Yo: ¿También tienen ejemplos de cómo escribirlo?", "Otra persona: Creo que los encontrará en una papelería grande."],
            fr: ["Moi : Je veux acheter un formulaire de CV et des enveloppes.", "Autre personne : Il y en a aussi dans les supérettes, mais les papeteries ont plus de choix.", "Moi : Y a-t-il aussi des exemples de rédaction ?", "Autre personne : Je pense que vous en trouverez dans une grande papeterie."],
            ru: ["Я: Хочу купить бланк резюме и конверты.", "Другой человек: В комбини тоже есть, но в магазине канцтоваров больше видов.", "Я: Там есть и образцы заполнения?", "Другой человек: Думаю, в большом магазине канцтоваров найдёте."],
            uk: ["Я: Хочу купити бланк резюме та конверти.", "Інша людина: У комбіні теж є, але в магазині канцтоварів більше видів.", "Я: Там є й зразки заповнення?", "Інша людина: Думаю, у великому магазині канцтоварів знайдете."]
        }
    )

];