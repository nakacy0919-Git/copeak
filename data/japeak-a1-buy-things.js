// ==========================================
// Japeak A1 会話データ
// 身近なモノを買ってみよう
// category: a1_buy_things
// ==========================================

const a1BuyThingsContext = {
    ja: "コンビニやお店で、身近なものを買うときの短い会話です。",
    en: "A short dialogue for buying everyday things at a convenience store or shop.",
    "zh-CN": "在便利店或商店购买日常用品时使用的简短对话。",
    "zh-TW": "在便利商店或商店購買日常用品時使用的簡短對話。",
    ko: "편의점이나 가게에서 일상적인 물건을 살 때 사용하는 짧은 대화입니다.",
    vi: "Đoạn hội thoại ngắn khi mua những đồ dùng quen thuộc ở cửa hàng hoặc cửa hàng tiện lợi.",
    tl: "Maikling usapan kapag bumibili ng pang-araw-araw na gamit sa tindahan o convenience store.",
    id: "Dialog pendek saat membeli barang sehari-hari di toko atau minimarket.",
    th: "บทสนทนาสั้น ๆ สำหรับซื้อของใกล้ตัวที่ร้านค้าหรือร้านสะดวกซื้อ",
    my: "ဆိုင် သို့မဟုတ် ကွန်ဗီနီယန်စတိုးတွင် နေ့စဉ်သုံးပစ္စည်းများဝယ်သောအခါ သုံးသော စကားပြောတိုဖြစ်သည်။",
    km: "សន្ទនាខ្លីសម្រាប់ទិញរបស់ប្រើប្រាស់ប្រចាំថ្ងៃនៅហាង ឬហាងងាយស្រួល។",
    ne: "पसल वा convenience store मा दैनिक प्रयोग हुने सामान किन्दा प्रयोग हुने छोटो संवाद हो।",
    mn: "Дэлгүүр эсвэл convenience store-д өдөр тутмын зүйл худалдаж авах богино яриа.",
    si: "කඩයක හෝ convenience store එකක දෛනික භාණ්ඩ මිලදී ගැනීමේ කෙටි සංවාදයකි.",
    bn: "দোকান বা convenience store-এ দৈনন্দিন জিনিস কেনার জন্য ছোট সংলাপ।",
    pt: "Um diálogo curto para comprar coisas do dia a dia em uma loja ou loja de conveniência.",
    es: "Un diálogo corto para comprar cosas cotidianas en una tienda o tienda de conveniencia.",
    fr: "Un court dialogue pour acheter des objets du quotidien dans un magasin ou une supérette.",
    ru: "Короткий диалог для покупки повседневных вещей в магазине или мини-маркете.",
    uk: "Короткий діалог для купівлі повсякденних речей у магазині або мінімаркеті."
};

function makeA1BuyDialogue(id, title, dialogue, dialogueTranslations) {
    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a1_buy_things",
        japanese: dialogue.map(t => `${t.name}：${t.line}`).join("\n"),
        target_speech: dialogue.map(t => t.target || t.line).join(" "),
        ruby: {
            hiragana: dialogue.map(t => t.ruby || t.line).join("<br>"),
            romaji: dialogue.map(t => t.romaji || "").join("<br>")
        },
        dialogue: dialogue.map(t => ({
            speakerLabel: t.label,
            speakerName: t.name,
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a1BuyThingsContext,
        translations: Object.fromEntries(
            Object.entries(dialogueTranslations).map(([lang, lines]) => [lang, lines.join("\n")])
        ),
        dialogueTranslations
    };
}

const japeakA1BuyThingsData = [
    makeA1BuyDialogue(
        "a1_buy_001",
        "水を買う (Buying Water)",
        [
            {
                label: "話者A",
                name: "店員",
                line: "いらっしゃいませ。",
                target: "いらっしゃいませ",
                ruby: "いらっしゃいませ。",
                romaji: "Irasshaimase."
            },
            {
                label: "話者B",
                name: "客",
                line: "水をください。",
                target: "みずをください",
                ruby: "<ruby>水<rt>みず</rt></ruby>をください。",
                romaji: "Mizu o kudasai."
            },
            {
                label: "話者A",
                name: "店員",
                line: "はい、120円です。",
                target: "はいひゃくにじゅうえんです",
                ruby: "はい、120<ruby>円<rt>えん</rt></ruby>です。",
                romaji: "Hai, hyaku nijuu en desu."
            }
        ],
        {
            en: ["Staff: Welcome.", "Customer: Water, please.", "Staff: Yes, that will be 120 yen."],
            "zh-CN": ["店员：欢迎光临。", "顾客：请给我水。", "店员：好的，120日元。"],
            "zh-TW": ["店員：歡迎光臨。", "顧客：請給我水。", "店員：好的，120日圓。"],
            ko: ["점원: 어서 오세요.", "손님: 물 주세요.", "점원: 네, 120엔입니다."],
            vi: ["Nhân viên: Xin chào quý khách.", "Khách: Cho tôi nước.", "Nhân viên: Vâng, 120 yên ạ."],
            tl: ["Staff: Maligayang pagdating po.", "Customer: Tubig po.", "Staff: Opo, 120 yen po."],
            id: ["Staf: Selamat datang.", "Pelanggan: Minta air.", "Staf: Baik, 120 yen."],
            th: ["พนักงาน: ยินดีต้อนรับค่ะ/ครับ", "ลูกค้า: ขอน้ำค่ะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ 120 เยน"],
            my: ["ဝန်ထမ်း: ကြိုဆိုပါတယ်။", "ဖောက်သည်: ရေ ပေးပါ။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ ၁၂၀ ယန်းပါ။"],
            km: ["បុគ្គលិក៖ សូមស្វាគមន៍។", "អតិថិជន៖ សូមទឹកមួយ។", "បុគ្គលិក៖ បានហើយ ១២០ យ៉េន។"],
            ne: ["कर्मचारी: स्वागत छ।", "ग्राहक: पानी दिनुहोस्।", "कर्मचारी: हुन्छ, 120 येन हो।"],
            mn: ["Ажилтан: Тавтай морилно уу.", "Үйлчлүүлэгч: Ус өгөөч.", "Ажилтан: За, 120 иен болно."],
            si: ["සේවකයා: ආයුබෝවන්.", "පාරිභෝගිකයා: වතුර දෙන්න.", "සේවකයා: හරි, යෙන් 120යි."],
            bn: ["কর্মী: স্বাগতম।", "গ্রাহক: পানি দিন।", "কর্মী: ঠিক আছে, ১২০ ইয়েন।"],
            pt: ["Funcionário: Bem-vindo.", "Cliente: Água, por favor.", "Funcionário: Sim, são 120 ienes."],
            es: ["Empleado: Bienvenido.", "Cliente: Agua, por favor.", "Empleado: Sí, son 120 yenes."],
            fr: ["Employé : Bienvenue.", "Client : De l'eau, s'il vous plaît.", "Employé : Oui, cela fait 120 yens."],
            ru: ["Сотрудник: Добро пожаловать.", "Покупатель: Воду, пожалуйста.", "Сотрудник: Да, 120 иен."],
            uk: ["Працівник: Ласкаво просимо.", "Покупець: Воду, будь ласка.", "Працівник: Так, 120 єн."]
        }
    ),

    makeA1BuyDialogue(
        "a1_buy_002",
        "おにぎりを買う (Buying a Rice Ball)",
        [
            {
                label: "話者A",
                name: "店員",
                line: "いらっしゃいませ。",
                target: "いらっしゃいませ",
                ruby: "いらっしゃいませ。",
                romaji: "Irasshaimase."
            },
            {
                label: "話者B",
                name: "客",
                line: "このおにぎりをください。",
                target: "このおにぎりをください",
                ruby: "このおにぎりをください。",
                romaji: "Kono onigiri o kudasai."
            },
            {
                label: "話者A",
                name: "店員",
                line: "はい、温めますか。",
                target: "はいあたためますか",
                ruby: "はい、<ruby>温<rt>あたた</rt></ruby>めますか。",
                romaji: "Hai, atatamemasu ka."
            }
        ],
        {
            en: ["Staff: Welcome.", "Customer: This rice ball, please.", "Staff: Sure. Would you like it heated?"],
            "zh-CN": ["店员：欢迎光临。", "顾客：请给我这个饭团。", "店员：好的，需要加热吗？"],
            "zh-TW": ["店員：歡迎光臨。", "顧客：請給我這個飯糰。", "店員：好的，需要加熱嗎？"],
            ko: ["점원: 어서 오세요.", "손님: 이 주먹밥 주세요.", "점원: 네, 데워 드릴까요?"],
            vi: ["Nhân viên: Xin chào quý khách.", "Khách: Cho tôi cơm nắm này.", "Nhân viên: Vâng, có hâm nóng không ạ?"],
            tl: ["Staff: Maligayang pagdating po.", "Customer: Itong onigiri po.", "Staff: Opo, painitin po ba?"],
            id: ["Staf: Selamat datang.", "Pelanggan: Minta onigiri ini.", "Staf: Baik, mau dipanaskan?"],
            th: ["พนักงาน: ยินดีต้อนรับค่ะ/ครับ", "ลูกค้า: ขอข้าวปั้นอันนี้ค่ะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ อุ่นไหมคะ/ครับ"],
            my: ["ဝန်ထမ်း: ကြိုဆိုပါတယ်။", "ဖောက်သည်: ဒီအိုနီဂီရီ ပေးပါ။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ အပူပေးမလား။"],
            km: ["បុគ្គលិក៖ សូមស្វាគមន៍។", "អតិថិជន៖ សូមអូនីហ្គីរីនេះ។", "បុគ្គលិក៖ បានហើយ តើចង់ឱ្យកម្ដៅទេ?"],
            ne: ["कर्मचारी: स्वागत छ।", "ग्राहक: यो ओनिगिरी दिनुहोस्।", "कर्मचारी: हुन्छ, तातो बनाइदिऊँ?"],
            mn: ["Ажилтан: Тавтай морилно уу.", "Үйлчлүүлэгч: Энэ онигириг өгөөч.", "Ажилтан: За, халаах уу?"],
            si: ["සේවකයා: ආයුබෝවන්.", "පාරිභෝගිකයා: මේ ඔනිගිරි එක දෙන්න.", "සේවකයා: හරි, උණු කර දෙන්නද?"],
            bn: ["কর্মী: স্বাগতম।", "গ্রাহক: এই ওনিগিরি দিন।", "কর্মী: ঠিক আছে, গরম করে দেব?"],
            pt: ["Funcionário: Bem-vindo.", "Cliente: Este onigiri, por favor.", "Funcionário: Claro. Quer que eu aqueça?"],
            es: ["Empleado: Bienvenido.", "Cliente: Este onigiri, por favor.", "Empleado: Claro. ¿Quiere que lo caliente?"],
            fr: ["Employé : Bienvenue.", "Client : Cet onigiri, s'il vous plaît.", "Employé : Bien sûr. Voulez-vous le faire chauffer ?"],
            ru: ["Сотрудник: Добро пожаловать.", "Покупатель: Этот онигири, пожалуйста.", "Сотрудник: Хорошо. Подогреть?"],
            uk: ["Працівник: Ласкаво просимо.", "Покупець: Цей оніґірі, будь ласка.", "Працівник: Добре. Підігріти?"]
        }
    ),

    makeA1BuyDialogue(
        "a1_buy_003",
        "パンを買う (Buying Bread)",
        [
            {
                label: "話者B",
                name: "客",
                line: "このパンはいくらですか。",
                target: "このぱんはいくらですか",
                ruby: "このパンはいくらですか。",
                romaji: "Kono pan wa ikura desu ka."
            },
            {
                label: "話者A",
                name: "店員",
                line: "180円です。",
                target: "ひゃくはちじゅうえんです",
                ruby: "180<ruby>円<rt>えん</rt></ruby>です。",
                romaji: "Hyaku hachijuu en desu."
            },
            {
                label: "話者B",
                name: "客",
                line: "これをください。",
                target: "これをください",
                ruby: "これをください。",
                romaji: "Kore o kudasai."
            }
        ],
        {
            en: ["Customer: How much is this bread?", "Staff: It is 180 yen.", "Customer: I will take this."],
            "zh-CN": ["顾客：这个面包多少钱？", "店员：180日元。", "顾客：请给我这个。"],
            "zh-TW": ["顧客：這個麵包多少錢？", "店員：180日圓。", "顧客：請給我這個。"],
            ko: ["손님: 이 빵은 얼마인가요?", "점원: 180엔입니다.", "손님: 이걸로 주세요."],
            vi: ["Khách: Bánh mì này bao nhiêu tiền?", "Nhân viên: 180 yên ạ.", "Khách: Cho tôi cái này."],
            tl: ["Customer: Magkano po ang tinapay na ito?", "Staff: 180 yen po.", "Customer: Ito po ang kukunin ko."],
            id: ["Pelanggan: Roti ini berapa?", "Staf: 180 yen.", "Pelanggan: Saya ambil ini."],
            th: ["ลูกค้า: ขนมปังอันนี้ราคาเท่าไหร่คะ/ครับ", "พนักงาน: 180 เยนค่ะ/ครับ", "ลูกค้า: เอาอันนี้ค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီပေါင်မုန့် ဘယ်လောက်ပါလဲ။", "ဝန်ထမ်း: ၁၈၀ ယန်းပါ။", "ဖောက်သည်: ဒါကိုယူပါမယ်။"],
            km: ["អតិថិជន៖ នំប៉័ងនេះថ្លៃប៉ុន្មាន?", "បុគ្គលិក៖ ១៨០ យ៉េន។", "អតិថិជន៖ សូមយកមួយនេះ។"],
            ne: ["ग्राहक: यो पाउरोटी कति हो?", "कर्मचारी: 180 येन हो।", "ग्राहक: यो दिनुहोस्।"],
            mn: ["Үйлчлүүлэгч: Энэ талх хэд вэ?", "Ажилтан: 180 иен.", "Үйлчлүүлэгч: Үүнийг авъя."],
            si: ["පාරිභෝගිකයා: මේ පාන් එක කීයද?", "සේවකයා: යෙන් 180යි.", "පාරිභෝගිකයා: මේක දෙන්න."],
            bn: ["গ্রাহক: এই পাউরুটির দাম কত?", "কর্মী: ১৮০ ইয়েন।", "গ্রাহক: এটা দিন।"],
            pt: ["Cliente: Quanto custa este pão?", "Funcionário: São 180 ienes.", "Cliente: Vou levar este."],
            es: ["Cliente: ¿Cuánto cuesta este pan?", "Empleado: Son 180 yenes.", "Cliente: Me llevo este."],
            fr: ["Client : Combien coûte ce pain ?", "Employé : 180 yens.", "Client : Je prends celui-ci."],
            ru: ["Покупатель: Сколько стоит этот хлеб?", "Сотрудник: 180 иен.", "Покупатель: Я возьму это."],
            uk: ["Покупець: Скільки коштує цей хліб?", "Працівник: 180 єн.", "Покупець: Візьму це."]
        }
    ),

    makeA1BuyDialogue(
        "a1_buy_004",
        "ノートを買う (Buying a Notebook)",
        [
            {
                label: "話者B",
                name: "客",
                line: "ノートはありますか。",
                target: "のーとはありますか",
                ruby: "ノートはありますか。",
                romaji: "Nooto wa arimasu ka."
            },
            {
                label: "話者A",
                name: "店員",
                line: "はい、こちらです。",
                target: "はいこちらです",
                ruby: "はい、こちらです。",
                romaji: "Hai, kochira desu."
            },
            {
                label: "話者B",
                name: "客",
                line: "ありがとうございます。",
                target: "ありがとうございます",
                ruby: "ありがとうございます。",
                romaji: "Arigatou gozaimasu."
            }
        ],
        {
            en: ["Customer: Do you have notebooks?", "Staff: Yes, they are here.", "Customer: Thank you."],
            "zh-CN": ["顾客：有笔记本吗？", "店员：有，在这里。", "顾客：谢谢。"],
            "zh-TW": ["顧客：有筆記本嗎？", "店員：有，在這裡。", "顧客：謝謝。"],
            ko: ["손님: 노트가 있나요?", "점원: 네, 여기 있습니다.", "손님: 감사합니다."],
            vi: ["Khách: Có vở không ạ?", "Nhân viên: Có, ở đây ạ.", "Khách: Cảm ơn."],
            tl: ["Customer: May notebook po ba?", "Staff: Opo, narito po.", "Customer: Salamat po."],
            id: ["Pelanggan: Ada buku catatan?", "Staf: Ya, di sini.", "Pelanggan: Terima kasih."],
            th: ["ลูกค้า: มีสมุดไหมคะ/ครับ", "พนักงาน: มีค่ะ/ครับ ทางนี้ค่ะ/ครับ", "ลูกค้า: ขอบคุณค่ะ/ครับ"],
            my: ["ဖောက်သည်: မှတ်စုစာအုပ်ရှိပါသလား။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ ဒီမှာပါ။", "ဖောက်သည်: ကျေးဇူးတင်ပါတယ်။"],
            km: ["អតិថិជន៖ មានសៀវភៅកត់ត្រាទេ?", "បុគ្គលិក៖ មាន នៅទីនេះ។", "អតិថិជន៖ អរគុណ។"],
            ne: ["ग्राहक: नोटबुक छ?", "कर्मचारी: छ, यहाँ हो।", "ग्राहक: धन्यवाद।"],
            mn: ["Үйлчлүүлэгч: Дэвтэр байгаа юу?", "Ажилтан: Тийм, энд байна.", "Үйлчлүүлэгч: Баярлалаа."],
            si: ["පාරිභෝගිකයා: නෝට් පොත් තියෙනවද?", "සේවකයා: ඔව්, මෙතනයි.", "පාරිභෝගිකයා: ස්තුතියි."],
            bn: ["গ্রাহক: নোটবুক আছে?", "কর্মী: হ্যাঁ, এখানে।", "গ্রাহক: ধন্যবাদ।"],
            pt: ["Cliente: Vocês têm cadernos?", "Funcionário: Sim, estão aqui.", "Cliente: Obrigado(a)."],
            es: ["Cliente: ¿Tienen cuadernos?", "Empleado: Sí, están aquí.", "Cliente: Gracias."],
            fr: ["Client : Avez-vous des cahiers ?", "Employé : Oui, ils sont ici.", "Client : Merci."],
            ru: ["Покупатель: У вас есть тетради?", "Сотрудник: Да, вот здесь.", "Покупатель: Спасибо."],
            uk: ["Покупець: У вас є зошити?", "Працівник: Так, ось тут.", "Покупець: Дякую."]
        }
    ),

    makeA1BuyDialogue(
        "a1_buy_005",
        "ペンを買う (Buying a Pen)",
        [
            {
                label: "話者B",
                name: "客",
                line: "黒いペンをください。",
                target: "くろいぺんをください",
                ruby: "<ruby>黒<rt>くろ</rt></ruby>いペンをください。",
                romaji: "Kuroi pen o kudasai."
            },
            {
                label: "話者A",
                name: "店員",
                line: "こちらでよろしいですか。",
                target: "こちらでよろしいですか",
                ruby: "こちらでよろしいですか。",
                romaji: "Kochira de yoroshii desu ka."
            },
            {
                label: "話者B",
                name: "客",
                line: "はい、お願いします。",
                target: "はいおねがいします",
                ruby: "はい、お<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hai, onegai shimasu."
            }
        ],
        {
            en: ["Customer: A black pen, please.", "Staff: Is this one okay?", "Customer: Yes, please."],
            "zh-CN": ["顾客：请给我一支黑色的笔。", "店员：这个可以吗？", "顾客：好的，麻烦你。"],
            "zh-TW": ["顧客：請給我一支黑色的筆。", "店員：這個可以嗎？", "顧客：好的，麻煩你。"],
            ko: ["손님: 검은색 펜 주세요.", "점원: 이걸로 괜찮으신가요?", "손님: 네, 부탁합니다."],
            vi: ["Khách: Cho tôi bút màu đen.", "Nhân viên: Cái này được không ạ?", "Khách: Vâng, làm ơn."],
            tl: ["Customer: Itim na pen po.", "Staff: Ito po ba ay okay?", "Customer: Opo, pakiusap."],
            id: ["Pelanggan: Minta pena hitam.", "Staf: Yang ini boleh?", "Pelanggan: Ya, tolong."],
            th: ["ลูกค้า: ขอปากกาสีดำค่ะ/ครับ", "พนักงาน: อันนี้ได้ไหมคะ/ครับ", "ลูกค้า: ได้ค่ะ/ครับ"],
            my: ["ဖောက်သည်: အနက်ရောင်ပင် ပေးပါ။", "ဝန်ထမ်း: ဒီဟာရပါသလား။", "ဖောက်သည်: ဟုတ်ကဲ့၊ ပေးပါ။"],
            km: ["អតិថិជន៖ សូមប៊ិចពណ៌ខ្មៅមួយ។", "បុគ្គលិក៖ មួយនេះបានទេ?", "អតិថិជន៖ បាន សូម។"],
            ne: ["ग्राहक: कालो पेन दिनुहोस्।", "कर्मचारी: यो ठीक छ?", "ग्राहक: हुन्छ, दिनुहोस्।"],
            mn: ["Үйлчлүүлэгч: Хар үзэг өгөөч.", "Ажилтан: Энэ зүгээр үү?", "Үйлчлүүлэгч: Тийм, өгөөч."],
            si: ["පාරිභෝගිකයා: කළු පෑනක් දෙන්න.", "සේවකයා: මේක හරිද?", "පාරිභෝගිකයා: ඔව්, දෙන්න."],
            bn: ["গ্রাহক: একটি কালো কলম দিন।", "কর্মী: এটা ঠিক আছে?", "গ্রাহক: হ্যাঁ, দিন।"],
            pt: ["Cliente: Uma caneta preta, por favor.", "Funcionário: Esta serve?", "Cliente: Sim, por favor."],
            es: ["Cliente: Un bolígrafo negro, por favor.", "Empleado: ¿Este está bien?", "Cliente: Sí, por favor."],
            fr: ["Client : Un stylo noir, s'il vous plaît.", "Employé : Celui-ci vous convient ?", "Client : Oui, s'il vous plaît."],
            ru: ["Покупатель: Черную ручку, пожалуйста.", "Сотрудник: Эта подойдет?", "Покупатель: Да, пожалуйста."],
            uk: ["Покупець: Чорну ручку, будь ласка.", "Працівник: Ця підійде?", "Покупець: Так, будь ласка."]
        }
    ),

    makeA1BuyDialogue(
        "a1_buy_006",
        "傘を買う (Buying an Umbrella)",
        [
            {
                label: "話者B",
                name: "客",
                line: "傘はありますか。",
                target: "かさはありますか",
                ruby: "<ruby>傘<rt>かさ</rt></ruby>はありますか。",
                romaji: "Kasa wa arimasu ka."
            },
            {
                label: "話者A",
                name: "店員",
                line: "はい、入り口の近くです。",
                target: "はい入り口の近くです",
                ruby: "はい、<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くです。",
                romaji: "Hai, iriguchi no chikaku desu."
            },
            {
                label: "話者B",
                name: "客",
                line: "ありがとうございます。",
                target: "ありがとうございます",
                ruby: "ありがとうございます。",
                romaji: "Arigatou gozaimasu."
            }
        ],
        {
            en: ["Customer: Do you have umbrellas?", "Staff: Yes, they are near the entrance.", "Customer: Thank you."],
            "zh-CN": ["顾客：有伞吗？", "店员：有，在入口附近。", "顾客：谢谢。"],
            "zh-TW": ["顧客：有傘嗎？", "店員：有，在入口附近。", "顧客：謝謝。"],
            ko: ["손님: 우산이 있나요?", "점원: 네, 입구 근처에 있습니다.", "손님: 감사합니다."],
            vi: ["Khách: Có ô không ạ?", "Nhân viên: Có, ở gần lối vào ạ.", "Khách: Cảm ơn."],
            tl: ["Customer: May payong po ba?", "Staff: Opo, malapit po sa pasukan.", "Customer: Salamat po."],
            id: ["Pelanggan: Ada payung?", "Staf: Ya, dekat pintu masuk.", "Pelanggan: Terima kasih."],
            th: ["ลูกค้า: มีร่มไหมคะ/ครับ", "พนักงาน: มีค่ะ/ครับ อยู่ใกล้ทางเข้า", "ลูกค้า: ขอบคุณค่ะ/ครับ"],
            my: ["ဖောက်သည်: ထီးရှိပါသလား။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ ဝင်ပေါက်နားမှာပါ။", "ဖောက်သည်: ကျေးဇူးတင်ပါတယ်။"],
            km: ["អតិថិជន៖ មានឆត្រទេ?", "បុគ្គលិក៖ មាន នៅជិតច្រកចូល។", "អតិថិជន៖ អរគុណ។"],
            ne: ["ग्राहक: छाता छ?", "कर्मचारी: छ, प्रवेशद्वार नजिकै हो।", "ग्राहक: धन्यवाद।"],
            mn: ["Үйлчлүүлэгч: Шүхэр байгаа юу?", "Ажилтан: Тийм, үүдний ойролцоо байна.", "Үйлчлүүлэгч: Баярлалаа."],
            si: ["පාරිභෝගිකයා: කුඩ තියෙනවද?", "සේවකයා: ඔව්, ඇතුල්වීම අසලයි.", "පාරිභෝගිකයා: ස්තුතියි."],
            bn: ["গ্রাহক: ছাতা আছে?", "কর্মী: হ্যাঁ, প্রবেশদ্বারের কাছে।", "গ্রাহক: ধন্যবাদ।"],
            pt: ["Cliente: Vocês têm guarda-chuvas?", "Funcionário: Sim, perto da entrada.", "Cliente: Obrigado(a)."],
            es: ["Cliente: ¿Tienen paraguas?", "Empleado: Sí, cerca de la entrada.", "Cliente: Gracias."],
            fr: ["Client : Avez-vous des parapluies ?", "Employé : Oui, près de l'entrée.", "Client : Merci."],
            ru: ["Покупатель: У вас есть зонты?", "Сотрудник: Да, возле входа.", "Покупатель: Спасибо."],
            uk: ["Покупець: У вас є парасолі?", "Працівник: Так, біля входу.", "Покупець: Дякую."]
        }
    ),

    makeA1BuyDialogue(
        "a1_buy_007",
        "袋をもらう (Asking for a Bag)",
        [
            {
                label: "話者A",
                name: "店員",
                line: "袋は必要ですか。",
                target: "ふくろはひつようですか",
                ruby: "<ruby>袋<rt>ふくろ</rt></ruby>は<ruby>必要<rt>ひつよう</rt></ruby>ですか。",
                romaji: "Fukuro wa hitsuyou desu ka."
            },
            {
                label: "話者B",
                name: "客",
                line: "はい、お願いします。",
                target: "はいおねがいします",
                ruby: "はい、お<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hai, onegai shimasu."
            },
            {
                label: "話者A",
                name: "店員",
                line: "かしこまりました。",
                target: "かしこまりました",
                ruby: "かしこまりました。",
                romaji: "Kashikomarimashita."
            }
        ],
        {
            en: ["Staff: Do you need a bag?", "Customer: Yes, please.", "Staff: Certainly."],
            "zh-CN": ["店员：需要袋子吗？", "顾客：是的，麻烦你。", "店员：好的。"],
            "zh-TW": ["店員：需要袋子嗎？", "顧客：是的，麻煩你。", "店員：好的。"],
            ko: ["점원: 봉투가 필요하세요?", "손님: 네, 부탁합니다.", "점원: 알겠습니다."],
            vi: ["Nhân viên: Anh/chị có cần túi không ạ?", "Khách: Vâng, làm ơn.", "Nhân viên: Vâng ạ."],
            tl: ["Staff: Kailangan po ba ng bag?", "Customer: Opo, pakiusap.", "Staff: Sige po."],
            id: ["Staf: Perlu kantong?", "Pelanggan: Ya, tolong.", "Staf: Baik."],
            th: ["พนักงาน: ต้องการถุงไหมคะ/ครับ", "ลูกค้า: ค่ะ/ครับ ขอด้วยค่ะ/ครับ", "พนักงาน: รับทราบค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: အိတ်လိုပါသလား။", "ဖောက်သည်: ဟုတ်ကဲ့၊ ပေးပါ။", "ဝန်ထမ်း: သိပါပြီ။"],
            km: ["បុគ្គលិក៖ ត្រូវការថង់ទេ?", "អតិថិជន៖ បាទ/ចាស សូម។", "បុគ្គលិក៖ បានហើយ។"],
            ne: ["कर्मचारी: झोला चाहिन्छ?", "ग्राहक: हुन्छ, दिनुहोस्।", "कर्मचारी: अवश्य।"],
            mn: ["Ажилтан: Уут хэрэгтэй юу?", "Үйлчлүүлэгч: Тийм, өгөөч.", "Ажилтан: За, ойлголоо."],
            si: ["සේවකයා: බෑගයක් අවශ්‍යද?", "පාරිභෝගිකයා: ඔව්, දෙන්න.", "සේවකයා: හරි."],
            bn: ["কর্মী: ব্যাগ লাগবে?", "গ্রাহক: হ্যাঁ, দিন।", "কর্মী: ঠিক আছে।"],
            pt: ["Funcionário: Precisa de uma sacola?", "Cliente: Sim, por favor.", "Funcionário: Certamente."],
            es: ["Empleado: ¿Necesita una bolsa?", "Cliente: Sí, por favor.", "Empleado: Claro."],
            fr: ["Employé : Avez-vous besoin d'un sac ?", "Client : Oui, s'il vous plaît.", "Employé : Bien sûr."],
            ru: ["Сотрудник: Вам нужен пакет?", "Покупатель: Да, пожалуйста.", "Сотрудник: Хорошо."],
            uk: ["Працівник: Вам потрібен пакет?", "Покупець: Так, будь ласка.", "Працівник: Добре."]
        }
    ),

    makeA1BuyDialogue(
        "a1_buy_008",
        "カードで払う (Paying by Card)",
        [
            {
                label: "話者A",
                name: "店員",
                line: "お支払いはどうしますか。",
                target: "おしはらいはどうしますか",
                ruby: "お<ruby>支払<rt>しはら</rt></ruby>いはどうしますか。",
                romaji: "Oshiharai wa dou shimasu ka."
            },
            {
                label: "話者B",
                name: "客",
                line: "カードでお願いします。",
                target: "かーどでおねがいします",
                ruby: "カードでお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Kaado de onegai shimasu."
            },
            {
                label: "話者A",
                name: "店員",
                line: "はい、どうぞ。",
                target: "はいどうぞ",
                ruby: "はい、どうぞ。",
                romaji: "Hai, douzo."
            }
        ],
        {
            en: ["Staff: How would you like to pay?", "Customer: By card, please.", "Staff: Sure, go ahead."],
            "zh-CN": ["店员：您怎么付款？", "顾客：请刷卡。", "店员：好的，请。"],
            "zh-TW": ["店員：您怎麼付款？", "顧客：請刷卡。", "店員：好的，請。"],
            ko: ["점원: 결제는 어떻게 하시겠어요?", "손님: 카드로 부탁합니다.", "점원: 네, 해 주세요."],
            vi: ["Nhân viên: Anh/chị thanh toán bằng gì ạ?", "Khách: Cho tôi trả bằng thẻ.", "Nhân viên: Vâng, xin mời."],
            tl: ["Staff: Paano po ang bayad?", "Customer: Card po.", "Staff: Sige po, pakiusap."],
            id: ["Staf: Mau bayar dengan apa?", "Pelanggan: Dengan kartu.", "Staf: Baik, silakan."],
            th: ["พนักงาน: ชำระเงินอย่างไรคะ/ครับ", "ลูกค้า: จ่ายด้วยบัตรค่ะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ เชิญค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ငွေဘယ်လိုပေးမလဲ။", "ဖောက်သည်: ကတ်နဲ့ပေးပါမယ်။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ လုပ်ပါ။"],
            km: ["បុគ្គលិក៖ តើចង់បង់ប្រាក់ដោយរបៀបណា?", "អតិថិជន៖ សូមបង់ដោយកាត។", "បុគ្គលិក៖ បាន សូម។"],
            ne: ["कर्मचारी: कसरी तिर्नुहुन्छ?", "ग्राहक: कार्डबाटお願いします।", "कर्मचारी: हुन्छ, गर्नुहोस्।"],
            mn: ["Ажилтан: Төлбөрөө яаж хийх вэ?", "Үйлчлүүлэгч: Картаар төлнө.", "Ажилтан: За, болно."],
            si: ["සේවකයා: ගෙවීම කොහොමද?", "පාරිභෝගිකයා: කාඩ් එකෙන්お願いします.", "සේවකයා: හරි, කරන්න."],
            bn: ["কর্মী: কীভাবে পেমেন্ট করবেন?", "গ্রাহক: কার্ডে, অনুগ্রহ করে।", "কর্মী: ঠিক আছে, করুন।"],
            pt: ["Funcionário: Como gostaria de pagar?", "Cliente: Com cartão, por favor.", "Funcionário: Claro, pode inserir."],
            es: ["Empleado: ¿Cómo desea pagar?", "Cliente: Con tarjeta, por favor.", "Empleado: Claro, adelante."],
            fr: ["Employé : Comment souhaitez-vous payer ?", "Client : Par carte, s'il vous plaît.", "Employé : Bien sûr, allez-y."],
            ru: ["Сотрудник: Как вы хотите оплатить?", "Покупатель: Картой, пожалуйста.", "Сотрудник: Хорошо, пожалуйста."],
            uk: ["Працівник: Як ви хочете оплатити?", "Покупець: Карткою, будь ласка.", "Працівник: Добре, будь ласка."]
        }
    ),

    makeA1BuyDialogue(
        "a1_buy_009",
        "レシートをもらう (Getting a Receipt)",
        [
            {
                label: "話者A",
                name: "店員",
                line: "レシートは必要ですか。",
                target: "れしーとはひつようですか",
                ruby: "レシートは<ruby>必要<rt>ひつよう</rt></ruby>ですか。",
                romaji: "Reshiito wa hitsuyou desu ka."
            },
            {
                label: "話者B",
                name: "客",
                line: "はい、ください。",
                target: "はいください",
                ruby: "はい、ください。",
                romaji: "Hai, kudasai."
            },
            {
                label: "話者A",
                name: "店員",
                line: "ありがとうございます。",
                target: "ありがとうございます",
                ruby: "ありがとうございます。",
                romaji: "Arigatou gozaimasu."
            }
        ],
        {
            en: ["Staff: Do you need a receipt?", "Customer: Yes, please.", "Staff: Thank you."],
            "zh-CN": ["店员：需要收据吗？", "顾客：是的，请给我。", "店员：谢谢。"],
            "zh-TW": ["店員：需要收據嗎？", "顧客：是的，請給我。", "店員：謝謝。"],
            ko: ["점원: 영수증이 필요하세요?", "손님: 네, 주세요.", "점원: 감사합니다."],
            vi: ["Nhân viên: Anh/chị có cần hóa đơn không ạ?", "Khách: Vâng, cho tôi.", "Nhân viên: Cảm ơn."],
            tl: ["Staff: Kailangan po ba ng resibo?", "Customer: Opo, pakiabot po.", "Staff: Salamat po."],
            id: ["Staf: Perlu struk?", "Pelanggan: Ya, tolong.", "Staf: Terima kasih."],
            th: ["พนักงาน: ต้องการใบเสร็จไหมคะ/ครับ", "ลูกค้า: ค่ะ/ครับ ขอด้วยค่ะ/ครับ", "พนักงาน: ขอบคุณค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ပြေစာလိုပါသလား။", "ဖောက်သည်: ဟုတ်ကဲ့၊ ပေးပါ။", "ဝန်ထမ်း: ကျေးဇူးတင်ပါတယ်။"],
            km: ["បុគ្គលិក៖ ត្រូវការវិក្កយបត្រទេ?", "អតិថិជន៖ បាទ/ចាស សូម។", "បុគ្គលិក៖ អរគុណ។"],
            ne: ["कर्मचारी: रसिद चाहिन्छ?", "ग्राहक: हुन्छ, दिनुहोस्।", "कर्मचारी: धन्यवाद।"],
            mn: ["Ажилтан: Баримт хэрэгтэй юу?", "Үйлчлүүлэгч: Тийм, өгөөч.", "Ажилтан: Баярлалаа."],
            si: ["සේවකයා: රිසිට් එක අවශ්‍යද?", "පාරිභෝගිකයා: ඔව්, දෙන්න.", "සේවකයා: ස්තුතියි."],
            bn: ["কর্মী: রসিদ লাগবে?", "গ্রাহক: হ্যাঁ, দিন।", "কর্মী: ধন্যবাদ।"],
            pt: ["Funcionário: Precisa do recibo?", "Cliente: Sim, por favor.", "Funcionário: Obrigado."],
            es: ["Empleado: ¿Necesita el recibo?", "Cliente: Sí, por favor.", "Empleado: Gracias."],
            fr: ["Employé : Avez-vous besoin du reçu ?", "Client : Oui, s'il vous plaît.", "Employé : Merci."],
            ru: ["Сотрудник: Вам нужен чек?", "Покупатель: Да, пожалуйста.", "Сотрудник: Спасибо."],
            uk: ["Працівник: Вам потрібен чек?", "Покупець: Так, будь ласка.", "Працівник: Дякую."]
        }
    ),

    makeA1BuyDialogue(
        "a1_buy_010",
        "温かいお茶を買う (Buying Hot Tea)",
        [
            {
                label: "話者B",
                name: "客",
                line: "温かいお茶をください。",
                target: "あたたかいおちゃをください",
                ruby: "<ruby>温<rt>あたた</rt></ruby>かいお<ruby>茶<rt>ちゃ</rt></ruby>をください。",
                romaji: "Atatakai ocha o kudasai."
            },
            {
                label: "話者A",
                name: "店員",
                line: "はい、150円です。",
                target: "はいひゃくごじゅうえんです",
                ruby: "はい、150<ruby>円<rt>えん</rt></ruby>です。",
                romaji: "Hai, hyaku gojuu en desu."
            },
            {
                label: "話者B",
                name: "客",
                line: "これでお願いします。",
                target: "これでおねがいします",
                ruby: "これでお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Kore de onegai shimasu."
            }
        ],
        {
            en: ["Customer: Hot tea, please.", "Staff: Yes, that will be 150 yen.", "Customer: Here you are."],
            "zh-CN": ["顾客：请给我热茶。", "店员：好的，150日元。", "顾客：用这个付款。"],
            "zh-TW": ["顧客：請給我熱茶。", "店員：好的，150日圓。", "顧客：用這個付款。"],
            ko: ["손님: 따뜻한 차 주세요.", "점원: 네, 150엔입니다.", "손님: 이걸로 부탁합니다."],
            vi: ["Khách: Cho tôi trà nóng.", "Nhân viên: Vâng, 150 yên ạ.", "Khách: Tôi trả bằng cái này."],
            tl: ["Customer: Mainit na tsaa po.", "Staff: Opo, 150 yen po.", "Customer: Ito po ang bayad."],
            id: ["Pelanggan: Minta teh hangat.", "Staf: Baik, 150 yen.", "Pelanggan: Saya bayar dengan ini."],
            th: ["ลูกค้า: ขอชาอุ่นค่ะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ 150 เยน", "ลูกค้า: จ่ายด้วยอันนี้ค่ะ/ครับ"],
            my: ["ဖောက်သည်: ပူနွေးတဲ့လက်ဖက်ရည် ပေးပါ။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ ၁၅၀ ယန်းပါ။", "ဖောက်သည်: ဒါနဲ့ပေးပါမယ်။"],
            km: ["អតិថិជន៖ សូមតែក្តៅមួយ។", "បុគ្គលិក៖ បានហើយ ១៥០ យ៉េន។", "អតិថិជន៖ សូមបង់ដោយនេះ។"],
            ne: ["ग्राहक: तातो चिया दिनुहोस्।", "कर्मचारी: हुन्छ, 150 येन हो।", "ग्राहक: यसबाट तिर्छु।"],
            mn: ["Үйлчлүүлэгч: Халуун цай өгөөч.", "Ажилтан: За, 150 иен болно.", "Үйлчлүүлэгч: Үүгээр төлнө."],
            si: ["පාරිභෝගිකයා: උණු තේ දෙන්න.", "සේවකයා: හරි, යෙන් 150යි.", "පාරිභෝගිකයා: මේකෙන් ගෙවන්නම්."],
            bn: ["গ্রাহক: গরম চা দিন।", "কর্মী: ঠিক আছে, ১৫০ ইয়েন।", "গ্রাহক: এটা দিয়ে দেব।"],
            pt: ["Cliente: Chá quente, por favor.", "Funcionário: Sim, são 150 ienes.", "Cliente: Pago com isto."],
            es: ["Cliente: Té caliente, por favor.", "Empleado: Sí, son 150 yenes.", "Cliente: Pago con esto."],
            fr: ["Client : Du thé chaud, s'il vous plaît.", "Employé : Oui, cela fait 150 yens.", "Client : Je paie avec ceci."],
            ru: ["Покупатель: Горячий чай, пожалуйста.", "Сотрудник: Да, 150 иен.", "Покупатель: Оплачу этим."],
            uk: ["Покупець: Гарячий чай, будь ласка.", "Працівник: Так, 150 єн.", "Покупець: Оплачу цим."]
        }
    )
];