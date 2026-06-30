// =====================================================
// Japeak A1 Level
// Scene: 売り場や値段を聞いてみよう
// Category Key: a1_ask_place_price
// =====================================================

const a1AskPlacePriceContext = {
    ja: "お店で売り場や値段を聞く練習です。",
    en: "Practice asking about where items are and how much they cost in a store.",
    "zh-CN": "练习在商店询问商品在哪里以及价格。",
    "zh-TW": "練習在商店詢問商品在哪裡以及價格。",
    ko: "가게에서 물건 위치와 가격을 묻는 연습입니다.",
    vi: "Luyện hỏi vị trí hàng hóa và giá cả trong cửa hàng.",
    tl: "Practice sa pagtatanong kung nasaan ang mga bagay at magkano ang presyo sa tindahan.",
    id: "Latihan bertanya lokasi barang dan harga di toko.",
    th: "ฝึกถามที่ตั้งของสินค้าและราคาในร้านค้า",
    my: "ဆိုင်တွင် ပစ္စည်းရှိရာနေရာနှင့် ဈေးနှုန်းကို မေးရန် လေ့ကျင့်ခြင်း။",
    km: "ហាត់សួរទីតាំងទំនិញ និងតម្លៃនៅក្នុងហាង។",
    ne: "पसलमा सामान कहाँ छ र कति पर्छ भनेर सोध्ने अभ्यास।",
    mn: "Дэлгүүрт бараа хаана байгаа болон үнэ асуух дадлага.",
    si: "වෙළඳසැලක භාණ්ඩ තිබෙන තැන සහ මිල අසන පුහුණුවකි.",
    bn: "দোকানে জিনিস কোথায় আছে এবং দাম কত তা জিজ্ঞেস করার অনুশীলন।",
    pt: "Prática para perguntar onde estão os produtos e quanto custam em uma loja.",
    es: "Práctica para preguntar dónde están los productos y cuánto cuestan en una tienda.",
    fr: "Entraînement pour demander où se trouvent les produits et combien ils coûtent dans un magasin.",
    ru: "Практика вопросов о том, где находятся товары и сколько они стоят в магазине.",
    uk: "Практика запитань про те, де знаходяться товари і скільки вони коштують у магазині."
};

const a1AskPlacePriceSpeakerNames = {
    staff: {
        ja: "店員", en: "Staff", "zh-CN": "店员", "zh-TW": "店員", ko: "점원",
        vi: "Nhân viên", tl: "Staff", id: "Staf", th: "พนักงาน",
        my: "ဝန်ထမ်း", km: "បុគ្គលិក", ne: "कर्मचारी", mn: "Ажилтан",
        si: "සේවකයා", bn: "কর্মী", pt: "Funcionário", es: "Empleado",
        fr: "Employé", ru: "Сотрудник", uk: "Працівник"
    },
    customer: {
        ja: "客", en: "Customer", "zh-CN": "顾客", "zh-TW": "顧客", ko: "손님",
        vi: "Khách", tl: "Customer", id: "Pelanggan", th: "ลูกค้า",
        my: "ဖောက်သည်", km: "អតិថិជន", ne: "ग्राहक", mn: "Үйлчлүүлэгч",
        si: "පාරිභෝගිකයා", bn: "গ্রাহক", pt: "Cliente", es: "Cliente",
        fr: "Client", ru: "Покупатель", uk: "Покупець"
    }
};

function makeA1AskPlacePriceDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a1_ask_place_price",
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
            speakerNames: a1AskPlacePriceSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a1AskPlacePriceContext,
        translations,
        dialogueTranslations
    };
}

const japeakA1AskPlacePriceData = [

    makeA1AskPlacePriceDialogue(
        "a1_price_001",
        "牛乳の売り場を聞く",
        [
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "いらっしゃいませ。",
                target: "いらっしゃいませ",
                ruby: "いらっしゃいませ。",
                romaji: "Irasshaimase."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "すみません。牛乳はどこですか。",
                target: "すみません ぎゅうにゅうはどこですか",
                ruby: "すみません。<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>はどこですか。",
                romaji: "Sumimasen. Gyūnyū wa doko desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "牛乳は奥の冷蔵コーナーです。",
                target: "ぎゅうにゅうはおくのれいぞうこーなーです",
                ruby: "<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>は<ruby>奥<rt>おく</rt></ruby>の<ruby>冷蔵<rt>れいぞう</rt></ruby>コーナーです。",
                romaji: "Gyūnyū wa oku no reizō kōnā desu."
            }
        ],
        {
            ja: ["店員：いらっしゃいませ。", "客：すみません。牛乳はどこですか。", "店員：牛乳は奥の冷蔵コーナーです。"],
            en: ["Staff: Welcome.", "Customer: Excuse me. Where is the milk?", "Staff: The milk is in the refrigerator section at the back."],
            "zh-CN": ["店员：欢迎光临。", "顾客：不好意思。牛奶在哪里？", "店员：牛奶在里面的冷藏区。"],
            "zh-TW": ["店員：歡迎光臨。", "顧客：不好意思。牛奶在哪裡？", "店員：牛奶在裡面的冷藏區。"],
            ko: ["점원: 어서 오세요.", "손님: 실례합니다. 우유는 어디에 있나요?", "점원: 우유는 안쪽 냉장 코너에 있습니다."],
            vi: ["Nhân viên: Xin chào quý khách.", "Khách: Xin lỗi. Sữa ở đâu ạ?", "Nhân viên: Sữa ở khu đồ lạnh phía trong."],
            tl: ["Staff: Welcome.", "Customer: Excuse me. Where is the milk?", "Staff: The milk is in the refrigerated section at the back."],
            id: ["Staf: Selamat datang.", "Pelanggan: Permisi. Susu ada di mana?", "Staf: Susu ada di bagian pendingin di belakang."],
            th: ["พนักงาน: ยินดีต้อนรับค่ะ/ครับ", "ลูกค้า: ขอโทษค่ะ/ครับ นมอยู่ที่ไหนคะ/ครับ", "พนักงาน: นมอยู่ที่มุมแช่เย็นด้านในค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ကြိုဆိုပါတယ်။", "ဖောက်သည်: တဆိတ်လောက်ပါ။ နို့က ဘယ်မှာရှိပါသလဲ။", "ဝန်ထမ်း: နို့က အတွင်းဘက် အအေးခန်းကဏ္ဍမှာ ရှိပါတယ်။"],
            km: ["បុគ្គលិក: សូមស្វាគមន៍។", "អតិថិជន: សុំទោស។ ទឹកដោះគោនៅឯណា?", "បុគ្គលិក: ទឹកដោះគោនៅផ្នែកទូរទឹកកកខាងក្នុង។"],
            ne: ["कर्मचारी: स्वागत छ।", "ग्राहक: माफ गर्नुहोस्। दूध कहाँ छ?", "कर्मचारी: दूध भित्रको फ्रिज क्षेत्रमा छ।"],
            mn: ["Ажилтан: Тавтай морилно уу.", "Үйлчлүүлэгч: Уучлаарай. Сүү хаана байна вэ?", "Ажилтан: Сүү дотор талын хөргөгчний хэсэгт байна."],
            si: ["සේවකයා: සාදරයෙන් පිළිගනිමු.", "පාරිභෝගිකයා: සමාවෙන්න. කිරි කොහෙද?", "සේවකයා: කිරි ඇතුළත ශීතකරණ කොටසේ තියෙනවා."],
            bn: ["কর্মী: স্বাগতম।", "গ্রাহক: মাফ করবেন। দুধ কোথায়?", "কর্মী: দুধ ভেতরের ঠান্ডা রাখার অংশে আছে।"],
            pt: ["Funcionário: Bem-vindo.", "Cliente: Com licença. Onde fica o leite?", "Funcionário: O leite fica na seção refrigerada, ao fundo."],
            es: ["Empleado: Bienvenido.", "Cliente: Disculpe. ¿Dónde está la leche?", "Empleado: La leche está en la sección refrigerada al fondo."],
            fr: ["Employé : Bienvenue.", "Client : Excusez-moi. Où est le lait ?", "Employé : Le lait est dans le rayon réfrigéré au fond."],
            ru: ["Сотрудник: Добро пожаловать.", "Покупатель: Извините. Где молоко?", "Сотрудник: Молоко находится в холодильном отделе в глубине магазина."],
            uk: ["Працівник: Ласкаво просимо.", "Покупець: Вибачте. Де молоко?", "Працівник: Молоко у холодильному відділі в глибині магазину."]
        }
    ),

    makeA1AskPlacePriceDialogue(
        "a1_price_002",
        "値段を聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "すみません。これはいくらですか。",
                target: "すみません これはいくらですか",
                ruby: "すみません。これはいくらですか。",
                romaji: "Sumimasen. Kore wa ikura desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "税込みで300円です。",
                target: "ぜいこみでさんびゃくえんです",
                ruby: "<ruby>税込<rt>ぜいこ</rt></ruby>みで300<ruby>円<rt>えん</rt></ruby>です。",
                romaji: "Zeikomi de sanbyaku en desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "ありがとうございます。",
                target: "ありがとうございます",
                ruby: "ありがとうございます。",
                romaji: "Arigatō gozaimasu."
            }
        ],
        {
            ja: ["客：すみません。これはいくらですか。", "店員：税込みで300円です。", "客：ありがとうございます。"],
            en: ["Customer: Excuse me. How much is this?", "Staff: It is 300 yen including tax.", "Customer: Thank you."],
            "zh-CN": ["顾客：不好意思。这个多少钱？", "店员：含税300日元。", "顾客：谢谢。"],
            "zh-TW": ["顧客：不好意思。這個多少錢？", "店員：含稅300日圓。", "顧客：謝謝。"],
            ko: ["손님: 실례합니다. 이것은 얼마인가요?", "점원: 세금 포함 300엔입니다.", "손님: 감사합니다."],
            vi: ["Khách: Xin lỗi. Cái này bao nhiêu tiền ạ?", "Nhân viên: 300 yên, đã bao gồm thuế.", "Khách: Cảm ơn."],
            tl: ["Customer: Excuse me. How much is this?", "Staff: It is 300 yen including tax.", "Customer: Thank you."],
            id: ["Pelanggan: Permisi. Ini berapa harganya?", "Staf: 300 yen termasuk pajak.", "Pelanggan: Terima kasih."],
            th: ["ลูกค้า: ขอโทษค่ะ/ครับ อันนี้ราคาเท่าไหร่คะ/ครับ", "พนักงาน: 300 เยนรวมภาษีค่ะ/ครับ", "ลูกค้า: ขอบคุณค่ะ/ครับ"],
            my: ["ဖောက်သည်: တဆိတ်လောက်ပါ။ ဒါ ဘယ်လောက်ပါလဲ။", "ဝန်ထမ်း: အခွန်ပါပြီး 300 ယန်းပါ။", "ဖောက်သည်: ကျေးဇူးတင်ပါတယ်။"],
            km: ["អតិថិជន: សុំទោស។ នេះតម្លៃប៉ុន្មាន?", "បុគ្គលិក: 300 យ៉េន រួមពន្ធ។", "អតិថិជន: អរគុណ។"],
            ne: ["ग्राहक: माफ गर्नुहोस्। यो कति हो?", "कर्मचारी: कर सहित 300 येन हो।", "ग्राहक: धन्यवाद।"],
            mn: ["Үйлчлүүлэгч: Уучлаарай. Энэ хэд вэ?", "Ажилтан: Татвартайгаа 300 иен.", "Үйлчлүүлэгч: Баярлалаа."],
            si: ["පාරිභෝගිකයා: සමාවෙන්න. මේක කීයද?", "සේවකයා: බදු ඇතුළුව යෙන් 300යි.", "පාරිභෝගිකයා: ස්තුතියි."],
            bn: ["গ্রাহক: মাফ করবেন। এটা কত?", "কর্মী: করসহ 300 ইয়েন।", "গ্রাহক: ধন্যবাদ।"],
            pt: ["Cliente: Com licença. Quanto custa isto?", "Funcionário: São 300 ienes com imposto.", "Cliente: Obrigado."],
            es: ["Cliente: Disculpe. ¿Cuánto cuesta esto?", "Empleado: Son 300 yenes con impuestos.", "Cliente: Gracias."],
            fr: ["Client : Excusez-moi. Combien coûte ceci ?", "Employé : C’est 300 yens, taxes comprises.", "Client : Merci."],
            ru: ["Покупатель: Извините. Сколько это стоит?", "Сотрудник: 300 иен с налогом.", "Покупатель: Спасибо."],
            uk: ["Покупець: Вибачте. Скільки це коштує?", "Працівник: 300 єн з податком.", "Покупець: Дякую."]
        }
    ),

    makeA1AskPlacePriceDialogue(
        "a1_price_003",
        "ノートの売り場を聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "ノートはどこにありますか。",
                target: "のーとはどこにありますか",
                ruby: "ノートはどこにありますか。",
                romaji: "Nōto wa doko ni arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "二階の文房具売り場です。",
                target: "にかいのぶんぼうぐうりばです",
                ruby: "<ruby>二階<rt>にかい</rt></ruby>の<ruby>文房具<rt>ぶんぼうぐ</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>です。",
                romaji: "Nikai no bunbōgu uriba desu."
            }
        ],
        {
            ja: ["客：ノートはどこにありますか。", "店員：二階の文房具売り場です。"],
            en: ["Customer: Where are the notebooks?", "Staff: They are in the stationery section on the second floor."],
            "zh-CN": ["顾客：笔记本在哪里？", "店员：在二楼的文具卖场。"],
            "zh-TW": ["顧客：筆記本在哪裡？", "店員：在二樓的文具賣場。"],
            ko: ["손님: 공책은 어디에 있나요?", "점원: 2층 문구 코너에 있습니다."],
            vi: ["Khách: Vở ở đâu ạ?", "Nhân viên: Ở khu văn phòng phẩm tầng hai."],
            tl: ["Customer: Where are the notebooks?", "Staff: They are in the stationery section on the second floor."],
            id: ["Pelanggan: Buku catatan ada di mana?", "Staf: Ada di bagian alat tulis di lantai dua."],
            th: ["ลูกค้า: สมุดอยู่ที่ไหนคะ/ครับ", "พนักงาน: อยู่ที่แผนกเครื่องเขียนชั้นสองค่ะ/ครับ"],
            my: ["ဖောက်သည်: မှတ်စုစာအုပ်တွေ ဘယ်မှာရှိပါသလဲ။", "ဝန်ထမ်း: ဒုတိယထပ် စာရေးကိရိယာဌာနမှာ ရှိပါတယ်။"],
            km: ["អតិថិជន: សៀវភៅកត់ត្រានៅឯណា?", "បុគ្គលិក: នៅផ្នែកសម្ភារៈការិយាល័យជាន់ទីពីរ។"],
            ne: ["ग्राहक: कापी कहाँ छ?", "कर्मचारी: दोस्रो तलाको स्टेशनरी क्षेत्रमा छ।"],
            mn: ["Үйлчлүүлэгч: Дэвтэр хаана байна вэ?", "Ажилтан: Хоёрдугаар давхрын бичгийн хэрэгслийн хэсэгт байна."],
            si: ["පාරිභෝගිකයා: නෝට් පොත් කොහෙද?", "සේවකයා: දෙවන මහලේ ලිපිද්‍රව්‍ය කොටසේ තියෙනවා."],
            bn: ["গ্রাহক: খাতা কোথায়?", "কর্মী: দ্বিতীয় তলার স্টেশনারি অংশে আছে।"],
            pt: ["Cliente: Onde ficam os cadernos?", "Funcionário: Ficam na seção de papelaria no segundo andar."],
            es: ["Cliente: ¿Dónde están los cuadernos?", "Empleado: Están en la sección de papelería del segundo piso."],
            fr: ["Client : Où sont les cahiers ?", "Employé : Ils sont au rayon papeterie au deuxième étage."],
            ru: ["Покупатель: Где тетради?", "Сотрудник: Они в отделе канцтоваров на втором этаже."],
            uk: ["Покупець: Де зошити?", "Працівник: Вони у відділі канцтоварів на другому поверсі."]
        }
    ),

    makeA1AskPlacePriceDialogue(
        "a1_price_004",
        "野菜の値段を聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "このトマトはいくらですか。",
                target: "このとまとはいくらですか",
                ruby: "このトマトはいくらですか。",
                romaji: "Kono tomato wa ikura desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "一つ120円です。",
                target: "ひとつひゃくにじゅうえんです",
                ruby: "<ruby>一<rt>ひと</rt></ruby>つ120<ruby>円<rt>えん</rt></ruby>です。",
                romaji: "Hitotsu hyaku nijū en desu."
            }
        ],
        {
            ja: ["客：このトマトはいくらですか。", "店員：一つ120円です。"],
            en: ["Customer: How much is this tomato?", "Staff: It is 120 yen each."],
            "zh-CN": ["顾客：这个西红柿多少钱？", "店员：一个120日元。"],
            "zh-TW": ["顧客：這個番茄多少錢？", "店員：一個120日圓。"],
            ko: ["손님: 이 토마토는 얼마인가요?", "점원: 하나에 120엔입니다."],
            vi: ["Khách: Quả cà chua này bao nhiêu tiền ạ?", "Nhân viên: Một quả 120 yên."],
            tl: ["Customer: How much is this tomato?", "Staff: It is 120 yen each."],
            id: ["Pelanggan: Tomat ini berapa harganya?", "Staf: Satu buah 120 yen."],
            th: ["ลูกค้า: มะเขือเทศนี้ราคาเท่าไหร่คะ/ครับ", "พนักงาน: ลูกละ 120 เยนค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီခရမ်းချဉ်သီး ဘယ်လောက်ပါလဲ။", "ဝန်ထမ်း: တစ်လုံး 120 ယန်းပါ။"],
            km: ["អតិថិជន: ប៉េងប៉ោះនេះតម្លៃប៉ុន្មាន?", "បុគ្គលិក: មួយផ្លែ 120 យ៉េន។"],
            ne: ["ग्राहक: यो गोलभेडा कति हो?", "कर्मचारी: एउटा 120 येन हो।"],
            mn: ["Үйлчлүүлэгч: Энэ улаан лооль хэд вэ?", "Ажилтан: Нэг нь 120 иен."],
            si: ["පාරිභෝගිකයා: මේ තක්කාලි එක කීයද?", "සේවකයා: එකක් යෙන් 120යි."],
            bn: ["গ্রাহক: এই টমেটো কত?", "কর্মী: একটি 120 ইয়েন।"],
            pt: ["Cliente: Quanto custa este tomate?", "Funcionário: Custa 120 ienes cada."],
            es: ["Cliente: ¿Cuánto cuesta este tomate?", "Empleado: Cuesta 120 yenes cada uno."],
            fr: ["Client : Combien coûte cette tomate ?", "Employé : C’est 120 yens l’unité."],
            ru: ["Покупатель: Сколько стоит этот помидор?", "Сотрудник: 120 иен за штуку."],
            uk: ["Покупець: Скільки коштує цей помідор?", "Працівник: 120 єн за штуку."]
        }
    ),

    makeA1AskPlacePriceDialogue(
        "a1_price_005",
        "安いものを聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "もう少し安いものはありますか。",
                target: "もうすこしやすいものはありますか",
                ruby: "もう<ruby>少<rt>すこ</rt></ruby>し<ruby>安<rt>やす</rt></ruby>いものはありますか。",
                romaji: "Mō sukoshi yasui mono wa arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、こちらは200円です。",
                target: "はい こちらはにひゃくえんです",
                ruby: "はい、こちらは200<ruby>円<rt>えん</rt></ruby>です。",
                romaji: "Hai, kochira wa nihyaku en desu."
            }
        ],
        {
            ja: ["客：もう少し安いものはありますか。", "店員：はい、こちらは200円です。"],
            en: ["Customer: Do you have something a little cheaper?", "Staff: Yes, this one is 200 yen."],
            "zh-CN": ["顾客：有稍微便宜一点的吗？", "店员：有的，这个是200日元。"],
            "zh-TW": ["顧客：有稍微便宜一點的嗎？", "店員：有的，這個是200日圓。"],
            ko: ["손님: 조금 더 싼 것은 있나요?", "점원: 네, 이것은 200엔입니다."],
            vi: ["Khách: Có cái nào rẻ hơn một chút không ạ?", "Nhân viên: Có, cái này 200 yên."],
            tl: ["Customer: Do you have something a little cheaper?", "Staff: Yes, this one is 200 yen."],
            id: ["Pelanggan: Ada yang sedikit lebih murah?", "Staf: Ya, yang ini 200 yen."],
            th: ["ลูกค้า: มีอันที่ถูกกว่านี้หน่อยไหมคะ/ครับ", "พนักงาน: มีค่ะ/ครับ อันนี้ 200 เยนค่ะ/ครับ"],
            my: ["ဖောက်သည်: နည်းနည်း ပိုစျေးချိုတာ ရှိပါသလား။", "ဝန်ထမ်း: ရှိပါတယ်။ ဒီဟာက 200 ယန်းပါ။"],
            km: ["អតិថិជន: មានអ្វីដែលថោកជាងនេះបន្តិចទេ?", "បុគ្គលិក: មាន។ នេះ 200 យ៉េន។"],
            ne: ["ग्राहक: अलि सस्तो सामान छ?", "कर्मचारी: छ, यो 200 येन हो।"],
            mn: ["Үйлчлүүлэгч: Жаахан хямд зүйл байна уу?", "Ажилтан: Тийм ээ, энэ 200 иен."],
            si: ["පාරිභෝගිකයා: තව ටිකක් ලාභ එකක් තියෙනවද?", "සේවකයා: ඔව්, මේක යෙන් 200යි."],
            bn: ["গ্রাহক: একটু সস্তা কিছু আছে?", "কর্মী: আছে, এটা 200 ইয়েন।"],
            pt: ["Cliente: Tem algo um pouco mais barato?", "Funcionário: Sim, este custa 200 ienes."],
            es: ["Cliente: ¿Tiene algo un poco más barato?", "Empleado: Sí, este cuesta 200 yenes."],
            fr: ["Client : Avez-vous quelque chose d’un peu moins cher ?", "Employé : Oui, celui-ci coûte 200 yens."],
            ru: ["Покупатель: Есть что-нибудь немного дешевле?", "Сотрудник: Да, вот это стоит 200 иен."],
            uk: ["Покупець: Є щось трохи дешевше?", "Працівник: Так, ось це коштує 200 єн."]
        }
    ),

    makeA1AskPlacePriceDialogue(
        "a1_price_006",
        "セールかどうか聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "このシャツはセールですか。",
                target: "このしゃつはせーるですか",
                ruby: "このシャツはセールですか。",
                romaji: "Kono shatsu wa sēru desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、30％引きです。",
                target: "はい さんじゅっぱーせんとびきです",
                ruby: "はい、30％<ruby>引<rt>び</rt></ruby>きです。",
                romaji: "Hai, sanjuppāsento biki desu."
            }
        ],
        {
            ja: ["客：このシャツはセールですか。", "店員：はい、30％引きです。"],
            en: ["Customer: Is this shirt on sale?", "Staff: Yes, it is 30% off."],
            "zh-CN": ["顾客：这件衬衫在打折吗？", "店员：是的，打七折。"],
            "zh-TW": ["顧客：這件襯衫在打折嗎？", "店員：是的，打七折。"],
            ko: ["손님: 이 셔츠는 세일인가요?", "점원: 네, 30% 할인입니다."],
            vi: ["Khách: Áo sơ mi này đang giảm giá phải không ạ?", "Nhân viên: Vâng, giảm 30%."],
            tl: ["Customer: Is this shirt on sale?", "Staff: Yes, it is 30% off."],
            id: ["Pelanggan: Kemeja ini sedang diskon?", "Staf: Ya, diskon 30%."],
            th: ["ลูกค้า: เสื้อเชิ้ตตัวนี้ลดราคาไหมคะ/ครับ", "พนักงาน: ใช่ค่ะ/ครับ ลด 30% ค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီရှပ်အင်္ကျီက လျှော့စျေးပါလား။", "ဝန်ထမ်း: ဟုတ်ပါတယ်။ 30% လျှော့ထားပါတယ်။"],
            km: ["អតិថិជន: អាវនេះមានបញ្ចុះតម្លៃទេ?", "បុគ្គលិក: មាន។ បញ្ចុះ 30%។"],
            ne: ["ग्राहक: यो सर्ट सेलमा छ?", "कर्मचारी: छ, 30% छुट छ।"],
            mn: ["Үйлчлүүлэгч: Энэ цамц хямдарсан уу?", "Ажилтан: Тийм ээ, 30% хямдарсан."],
            si: ["පාරිභෝගිකයා: මේ කමිසය සේල්ද?", "සේවකයා: ඔව්, 30% වට්ටමක් තියෙනවා."],
            bn: ["গ্রাহক: এই শার্টটি কি সেলে আছে?", "কর্মী: হ্যাঁ, 30% ছাড়।"],
            pt: ["Cliente: Esta camisa está em promoção?", "Funcionário: Sim, está com 30% de desconto."],
            es: ["Cliente: ¿Esta camisa está en oferta?", "Empleado: Sí, tiene 30% de descuento."],
            fr: ["Client : Cette chemise est-elle en promotion ?", "Employé : Oui, elle est à moins 30%."],
            ru: ["Покупатель: Эта рубашка со скидкой?", "Сотрудник: Да, скидка 30%."],
            uk: ["Покупець: Ця сорочка зі знижкою?", "Працівник: Так, знижка 30%."]
        }
    ),

    makeA1AskPlacePriceDialogue(
        "a1_price_007",
        "税込みか聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "この値段は税込みですか。",
                target: "このねだんはぜいこみですか",
                ruby: "この<ruby>値段<rt>ねだん</rt></ruby>は<ruby>税込<rt>ぜいこ</rt></ruby>みですか。",
                romaji: "Kono nedan wa zeikomi desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、税込みです。",
                target: "はい ぜいこみです",
                ruby: "はい、<ruby>税込<rt>ぜいこ</rt></ruby>みです。",
                romaji: "Hai, zeikomi desu."
            }
        ],
        {
            ja: ["客：この値段は税込みですか。", "店員：はい、税込みです。"],
            en: ["Customer: Does this price include tax?", "Staff: Yes, it includes tax."],
            "zh-CN": ["顾客：这个价格含税吗？", "店员：是的，含税。"],
            "zh-TW": ["顧客：這個價格含稅嗎？", "店員：是的，含稅。"],
            ko: ["손님: 이 가격은 세금 포함인가요?", "점원: 네, 세금 포함입니다."],
            vi: ["Khách: Giá này đã bao gồm thuế chưa ạ?", "Nhân viên: Vâng, đã bao gồm thuế."],
            tl: ["Customer: Does this price include tax?", "Staff: Yes, it includes tax."],
            id: ["Pelanggan: Harga ini sudah termasuk pajak?", "Staf: Ya, sudah termasuk pajak."],
            th: ["ลูกค้า: ราคานี้รวมภาษีแล้วไหมคะ/ครับ", "พนักงาน: ใช่ค่ะ/ครับ รวมภาษีแล้วค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီဈေးနှုန်းက အခွန်ပါပြီးသားလား။", "ဝန်ထမ်း: ဟုတ်ပါတယ်။ အခွန်ပါပြီးသားပါ။"],
            km: ["អតិថិជន: តម្លៃនេះរួមពន្ធហើយឬ?", "បុគ្គលិក: បាទ/ចាស រួមពន្ធហើយ។"],
            ne: ["ग्राहक: यो मूल्य कर सहित हो?", "कर्मचारी: हो, कर सहित हो।"],
            mn: ["Үйлчлүүлэгч: Энэ үнэ татвартайгаа юу?", "Ажилтан: Тийм ээ, татвартайгаа."],
            si: ["පාරිභෝගිකයා: මේ මිලට බදු ඇතුළත්ද?", "සේවකයා: ඔව්, බදු ඇතුළත්යි."],
            bn: ["গ্রাহক: এই দামে কি কর অন্তর্ভুক্ত?", "কর্মী: হ্যাঁ, কর অন্তর্ভুক্ত।"],
            pt: ["Cliente: Este preço inclui imposto?", "Funcionário: Sim, inclui imposto."],
            es: ["Cliente: ¿Este precio incluye impuestos?", "Empleado: Sí, incluye impuestos."],
            fr: ["Client : Ce prix inclut-il les taxes ?", "Employé : Oui, les taxes sont incluses."],
            ru: ["Покупатель: Эта цена включает налог?", "Сотрудник: Да, налог включён."],
            uk: ["Покупець: Ця ціна включає податок?", "Працівник: Так, податок включено."]
        }
    ),

    makeA1AskPlacePriceDialogue(
        "a1_price_008",
        "レジの場所を聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "レジはどこですか。",
                target: "れじはどこですか",
                ruby: "レジはどこですか。",
                romaji: "Reji wa doko desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "あちらです。",
                target: "あちらです",
                ruby: "あちらです。",
                romaji: "Achira desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "ありがとうございます。",
                target: "ありがとうございます",
                ruby: "ありがとうございます。",
                romaji: "Arigatō gozaimasu."
            }
        ],
        {
            ja: ["客：レジはどこですか。", "店員：あちらです。", "客：ありがとうございます。"],
            en: ["Customer: Where is the checkout counter?", "Staff: It is over there.", "Customer: Thank you."],
            "zh-CN": ["顾客：收银台在哪里？", "店员：在那边。", "顾客：谢谢。"],
            "zh-TW": ["顧客：收銀台在哪裡？", "店員：在那邊。", "顧客：謝謝。"],
            ko: ["손님: 계산대는 어디인가요?", "점원: 저쪽입니다.", "손님: 감사합니다."],
            vi: ["Khách: Quầy tính tiền ở đâu ạ?", "Nhân viên: Ở đằng kia ạ.", "Khách: Cảm ơn."],
            tl: ["Customer: Where is the checkout counter?", "Staff: It is over there.", "Customer: Thank you."],
            id: ["Pelanggan: Kasir ada di mana?", "Staf: Di sana.", "Pelanggan: Terima kasih."],
            th: ["ลูกค้า: แคชเชียร์อยู่ที่ไหนคะ/ครับ", "พนักงาน: อยู่ทางโน้นค่ะ/ครับ", "ลูกค้า: ขอบคุณค่ะ/ครับ"],
            my: ["ဖောက်သည်: ငွေရှင်းကောင်တာ ဘယ်မှာရှိပါသလဲ။", "ဝန်ထမ်း: ဟိုဘက်မှာပါ။", "ဖောက်သည်: ကျေးဇူးတင်ပါတယ်။"],
            km: ["អតិថិជន: កន្លែងគិតលុយនៅឯណា?", "បុគ្គលិក: នៅទីនោះ។", "អតិថិជន: អរគុណ។"],
            ne: ["ग्राहक: क्यास काउन्टर कहाँ छ?", "कर्मचारी: उता छ।", "ग्राहक: धन्यवाद।"],
            mn: ["Үйлчлүүлэгч: Касс хаана байна вэ?", "Ажилтан: Тэнд байна.", "Үйлчлүүлэгч: Баярлалаа."],
            si: ["පාරිභෝගිකයා: කැෂියර් කොහෙද?", "සේවකයා: අතනයි.", "පාරිභෝගිකයා: ස්තුතියි."],
            bn: ["গ্রাহক: ক্যাশ কাউন্টার কোথায়?", "কর্মী: ওদিকে।", "গ্রাহক: ধন্যবাদ।"],
            pt: ["Cliente: Onde fica o caixa?", "Funcionário: Fica ali.", "Cliente: Obrigado."],
            es: ["Cliente: ¿Dónde está la caja?", "Empleado: Está allí.", "Cliente: Gracias."],
            fr: ["Client : Où est la caisse ?", "Employé : Elle est là-bas.", "Client : Merci."],
            ru: ["Покупатель: Где касса?", "Сотрудник: Вон там.", "Покупатель: Спасибо."],
            uk: ["Покупець: Де каса?", "Працівник: Он там.", "Покупець: Дякую."]
        }
    )
];