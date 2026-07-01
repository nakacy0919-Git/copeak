// =====================================================
// Japeak A1 Level
// Scene: 欲しいものを買ってみよう
// Category Key: a1_want_to_buy
// =====================================================

const a1WantToBuyContext = {
    ja: "お店で自分の欲しいものを伝えて買う練習です。",
    en: "Practice telling store staff what you want to buy.",
    "zh-CN": "练习在商店表达自己想买的东西。",
    "zh-TW": "練習在商店表達自己想買的東西。",
    ko: "가게에서 사고 싶은 것을 말하는 연습입니다.",
    vi: "Luyện nói món đồ mình muốn mua trong cửa hàng.",
    tl: "Practice sa pagsasabi ng gusto mong bilhin sa tindahan.",
    id: "Latihan mengatakan barang yang ingin dibeli di toko.",
    th: "ฝึกบอกสิ่งที่ต้องการซื้อในร้านค้า",
    my: "ဆိုင်တွင် ဝယ်ချင်သောပစ္စည်းကို ပြောရန် လေ့ကျင့်ခြင်း။",
    km: "ហាត់ប្រាប់របស់ដែលចង់ទិញនៅក្នុងហាង។",
    ne: "पसलमा आफूले किन्न चाहेको कुरा बताउने अभ्यास।",
    mn: "Дэлгүүрт авахыг хүссэн зүйлээ хэлэх дадлага.",
    si: "වෙළඳසැලක තමන්ට අවශ්‍ය දේ කියා මිලදී ගැනීමේ පුහුණුවකි.",
    bn: "দোকানে আপনি কী কিনতে চান তা বলার অনুশীলন।",
    pt: "Prática para dizer o que você quer comprar em uma loja.",
    es: "Práctica para decir lo que quieres comprar en una tienda.",
    fr: "Entraînement pour dire ce que vous voulez acheter dans un magasin.",
    ru: "Практика того, как сказать в магазине, что вы хотите купить.",
    uk: "Практика того, як сказати в магазині, що ви хочете купити."
};

const a1WantToBuySpeakerNames = {
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

function makeA1WantToBuyDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a1_want_to_buy",
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
            speakerNames: a1WantToBuySpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a1WantToBuyContext,
        translations,
        dialogueTranslations
    };
}

const japeakA1WantToBuyData = [

    makeA1WantToBuyDialogue(
        "a1_want_001",
        "これがほしいです",
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
                line: "これがほしいです。",
                target: "これがほしいです",
                ruby: "これがほしいです。",
                romaji: "Kore ga hoshii desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、かしこまりました。",
                target: "はい かしこまりました",
                ruby: "はい、かしこまりました。",
                romaji: "Hai, kashikomarimashita."
            }
        ],
        {
            ja: ["店員：いらっしゃいませ。", "客：これがほしいです。", "店員：はい、かしこまりました。"],
            en: ["Staff: Welcome.", "Customer: I want this one.", "Staff: Certainly."],
            "zh-CN": ["店员：欢迎光临。", "顾客：我想要这个。", "店员：好的，明白了。"],
            "zh-TW": ["店員：歡迎光臨。", "顧客：我想要這個。", "店員：好的，明白了。"],
            ko: ["점원: 어서 오세요.", "손님: 이것을 원해요.", "점원: 네, 알겠습니다."],
            vi: ["Nhân viên: Xin chào quý khách.", "Khách: Tôi muốn cái này.", "Nhân viên: Vâng, tôi hiểu rồi."],
            tl: ["Staff: Welcome.", "Customer: I want this one.", "Staff: Certainly."],
            id: ["Staf: Selamat datang.", "Pelanggan: Saya mau yang ini.", "Staf: Baik, saya mengerti."],
            th: ["พนักงาน: ยินดีต้อนรับค่ะ/ครับ", "ลูกค้า: อยากได้อันนี้ค่ะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ကြိုဆိုပါတယ်။", "ဖောက်သည်: ဒီဟာကို လိုချင်ပါတယ်။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ နားလည်ပါပြီ။"],
            km: ["បុគ្គលិក: សូមស្វាគមន៍។", "អតិថិជន: ខ្ញុំចង់បាននេះ។", "បុគ្គលិក: ចាស/បាទ បានហើយ។"],
            ne: ["कर्मचारी: स्वागत छ।", "ग्राहक: मलाई यो चाहिन्छ।", "कर्मचारी: हुन्छ, बुझें।"],
            mn: ["Ажилтан: Тавтай морилно уу.", "Үйлчлүүлэгч: Би үүнийг авмаар байна.", "Ажилтан: За, ойлголоо."],
            si: ["සේවකයා: සාදරයෙන් පිළිගනිමු.", "පාරිභෝගිකයා: මට මේක ඕනේ.", "සේවකයා: හරි, තේරුණා."],
            bn: ["কর্মী: স্বাগতম।", "গ্রাহক: আমি এটা চাই।", "কর্মী: ঠিক আছে, বুঝেছি।"],
            pt: ["Funcionário: Bem-vindo.", "Cliente: Eu quero este.", "Funcionário: Certo, entendido."],
            es: ["Empleado: Bienvenido.", "Cliente: Quiero este.", "Empleado: Sí, entendido."],
            fr: ["Employé : Bienvenue.", "Client : Je voudrais celui-ci.", "Employé : Bien, compris."],
            ru: ["Сотрудник: Добро пожаловать.", "Покупатель: Я хочу это.", "Сотрудник: Хорошо, понял."],
            uk: ["Працівник: Ласкаво просимо.", "Покупець: Я хочу це.", "Працівник: Добре, зрозуміло."]
        }
    ),

    makeA1WantToBuyDialogue(
        "a1_want_002",
        "赤いものがほしいです",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "赤いものがほしいです。",
                target: "あかいものがほしいです",
                ruby: "<ruby>赤<rt>あか</rt></ruby>いものがほしいです。",
                romaji: "Akai mono ga hoshii desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "こちらはいかがですか。",
                target: "こちらはいかがですか",
                ruby: "こちらはいかがですか。",
                romaji: "Kochira wa ikaga desu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "それがいいです。",
                target: "それがいいです",
                ruby: "それがいいです。",
                romaji: "Sore ga ii desu."
            }
        ],
        {
            ja: ["客：赤いものがほしいです。", "店員：こちらはいかがですか。", "客：それがいいです。"],
            en: ["Customer: I want a red one.", "Staff: How about this one?", "Customer: That one is good."],
            "zh-CN": ["顾客：我想要红色的。", "店员：这个怎么样？", "顾客：那个很好。"],
            "zh-TW": ["顧客：我想要紅色的。", "店員：這個怎麼樣？", "顧客：那個很好。"],
            ko: ["손님: 빨간 것이 갖고 싶어요.", "점원: 이것은 어떠세요?", "손님: 그게 좋아요."],
            vi: ["Khách: Tôi muốn cái màu đỏ.", "Nhân viên: Cái này thì sao ạ?", "Khách: Cái đó được ạ."],
            tl: ["Customer: I want a red one.", "Staff: How about this one?", "Customer: That one is good."],
            id: ["Pelanggan: Saya mau yang merah.", "Staf: Bagaimana dengan yang ini?", "Pelanggan: Yang itu bagus."],
            th: ["ลูกค้า: อยากได้สีแดงค่ะ/ครับ", "พนักงาน: อันนี้เป็นอย่างไรคะ/ครับ", "ลูกค้า: อันนั้นดีค่ะ/ครับ"],
            my: ["ဖောက်သည်: အနီရောင်ဟာ လိုချင်ပါတယ်။", "ဝန်ထမ်း: ဒီဟာက ဘယ်လိုပါလဲ။", "ဖောက်သည်: အဲဒါကောင်းပါတယ်။"],
            km: ["អតិថិជន: ខ្ញុំចង់បានពណ៌ក្រហម។", "បុគ្គលិក: នេះយ៉ាងម៉េចដែរ?", "អតិថិជន: នោះល្អ។"],
            ne: ["ग्राहक: मलाई रातो चाहिन्छ।", "कर्मचारी: यो कस्तो छ?", "ग्राहक: त्यो राम्रो छ।"],
            mn: ["Үйлчлүүлэгч: Би улаан өнгөтэйг авмаар байна.", "Ажилтан: Энэ ямар байна вэ?", "Үйлчлүүлэгч: Тэр нь сайн байна."],
            si: ["පාරිභෝගිකයා: මට රතු එකක් ඕනේ.", "සේවකයා: මේක කොහොමද?", "පාරිභෝගිකයා: ඒක හොඳයි."],
            bn: ["গ্রাহক: আমি লালটা চাই।", "কর্মী: এটা কেমন?", "গ্রাহক: ওটাই ভালো।"],
            pt: ["Cliente: Eu quero um vermelho.", "Funcionário: Que tal este?", "Cliente: Esse está bom."],
            es: ["Cliente: Quiero uno rojo.", "Empleado: ¿Qué le parece este?", "Cliente: Ese está bien."],
            fr: ["Client : Je voudrais un rouge.", "Employé : Que pensez-vous de celui-ci ?", "Client : Celui-là me va."],
            ru: ["Покупатель: Я хочу красный.", "Сотрудник: Как насчёт этого?", "Покупатель: Этот подойдёт."],
            uk: ["Покупець: Я хочу червоний.", "Працівник: Як щодо цього?", "Покупець: Це добре."]
        }
    ),

    makeA1WantToBuyDialogue(
        "a1_want_003",
        "大きいサイズがほしいです",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "大きいサイズがほしいです。",
                target: "おおきいさいずがほしいです",
                ruby: "<ruby>大<rt>おお</rt></ruby>きいサイズがほしいです。",
                romaji: "Ōkii saizu ga hoshii desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、こちらです。",
                target: "はい こちらです",
                ruby: "はい、こちらです。",
                romaji: "Hai, kochira desu."
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
            ja: ["客：大きいサイズがほしいです。", "店員：はい、こちらです。", "客：ありがとうございます。"],
            en: ["Customer: I want a large size.", "Staff: Yes, here it is.", "Customer: Thank you."],
            "zh-CN": ["顾客：我想要大号。", "店员：好的，这边。", "顾客：谢谢。"],
            "zh-TW": ["顧客：我想要大尺寸。", "店員：好的，這邊。", "顧客：謝謝。"],
            ko: ["손님: 큰 사이즈가 필요해요.", "점원: 네, 여기 있습니다.", "손님: 감사합니다."],
            vi: ["Khách: Tôi muốn cỡ lớn.", "Nhân viên: Vâng, đây ạ.", "Khách: Cảm ơn."],
            tl: ["Customer: I want a large size.", "Staff: Yes, here it is.", "Customer: Thank you."],
            id: ["Pelanggan: Saya mau ukuran besar.", "Staf: Ya, ini dia.", "Pelanggan: Terima kasih."],
            th: ["ลูกค้า: อยากได้ไซซ์ใหญ่ค่ะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ นี่ค่ะ/ครับ", "ลูกค้า: ขอบคุณค่ะ/ครับ"],
            my: ["ဖောက်သည်: အကြီးဆိုဒ် လိုချင်ပါတယ်။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ ဒီမှာပါ။", "ဖောက်သည်: ကျေးဇူးတင်ပါတယ်။"],
            km: ["អតិថិជន: ខ្ញុំចង់បានទំហំធំ។", "បុគ្គលិក: ចាស/បាទ នេះហើយ។", "អតិថិជន: អរគុណ។"],
            ne: ["ग्राहक: मलाई ठूलो साइज चाहिन्छ।", "कर्मचारी: हुन्छ, यो हो।", "ग्राहक: धन्यवाद।"],
            mn: ["Үйлчлүүлэгч: Би том размер авмаар байна.", "Ажилтан: За, энд байна.", "Үйлчлүүлэгч: Баярлалаа."],
            si: ["පාරිභෝගිකයා: මට ලොකු සයිස් එකක් ඕනේ.", "සේවකයා: හරි, මෙන්න.", "පාරිභෝගිකයා: ස්තුතියි."],
            bn: ["গ্রাহক: আমি বড় সাইজ চাই।", "কর্মী: ঠিক আছে, এই নিন।", "গ্রাহক: ধন্যবাদ।"],
            pt: ["Cliente: Eu quero um tamanho grande.", "Funcionário: Sim, aqui está.", "Cliente: Obrigado."],
            es: ["Cliente: Quiero una talla grande.", "Empleado: Sí, aquí tiene.", "Cliente: Gracias."],
            fr: ["Client : Je voudrais une grande taille.", "Employé : Oui, voici.", "Client : Merci."],
            ru: ["Покупатель: Я хочу большой размер.", "Сотрудник: Да, вот.", "Покупатель: Спасибо."],
            uk: ["Покупець: Я хочу великий розмір.", "Працівник: Так, ось.", "Покупець: Дякую."]
        }
    ),

    makeA1WantToBuyDialogue(
        "a1_want_004",
        "小さいサイズがほしいです",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "小さいサイズはありますか。",
                target: "ちいさいさいずはありますか",
                ruby: "<ruby>小<rt>ちい</rt></ruby>さいサイズはありますか。",
                romaji: "Chīsai saizu wa arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、あります。",
                target: "はい あります",
                ruby: "はい、あります。",
                romaji: "Hai, arimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "それをください。",
                target: "それをください",
                ruby: "それをください。",
                romaji: "Sore o kudasai."
            }
        ],
        {
            ja: ["客：小さいサイズはありますか。", "店員：はい、あります。", "客：それをください。"],
            en: ["Customer: Do you have a small size?", "Staff: Yes, we do.", "Customer: I’ll take that one."],
            "zh-CN": ["顾客：有小号吗？", "店员：有的。", "顾客：我要那个。"],
            "zh-TW": ["顧客：有小尺寸嗎？", "店員：有的。", "顧客：我要那個。"],
            ko: ["손님: 작은 사이즈가 있나요?", "점원: 네, 있습니다.", "손님: 그것을 주세요."],
            vi: ["Khách: Có cỡ nhỏ không ạ?", "Nhân viên: Vâng, có ạ.", "Khách: Cho tôi cái đó."],
            tl: ["Customer: Do you have a small size?", "Staff: Yes, we do.", "Customer: I’ll take that one."],
            id: ["Pelanggan: Ada ukuran kecil?", "Staf: Ya, ada.", "Pelanggan: Saya ambil yang itu."],
            th: ["ลูกค้า: มีไซซ์เล็กไหมคะ/ครับ", "พนักงาน: มีค่ะ/ครับ", "ลูกค้า: เอาอันนั้นค่ะ/ครับ"],
            my: ["ဖောက်သည်: အသေးဆိုဒ် ရှိပါသလား။", "ဝန်ထမ်း: ရှိပါတယ်။", "ဖောက်သည်: အဲဒါကို ပေးပါ။"],
            km: ["អតិថិជន: មានទំហំតូចទេ?", "បុគ្គលិក: មាន។", "អតិថិជន: ខ្ញុំយកនោះ។"],
            ne: ["ग्राहक: सानो साइज छ?", "कर्मचारी: छ।", "ग्राहक: मलाई त्यो दिनुहोस्।"],
            mn: ["Үйлчлүүлэгч: Жижиг размер байна уу?", "Ажилтан: Тийм, байна.", "Үйлчлүүлэгч: Тэрийг авъя."],
            si: ["පාරිභෝගිකයා: පොඩි සයිස් එකක් තියෙනවද?", "සේවකයා: ඔව්, තියෙනවා.", "පාරිභෝගිකයා: ඒක දෙන්න."],
            bn: ["গ্রাহক: ছোট সাইজ আছে?", "কর্মী: হ্যাঁ, আছে।", "গ্রাহক: ওটা দিন।"],
            pt: ["Cliente: Tem tamanho pequeno?", "Funcionário: Sim, temos.", "Cliente: Vou levar esse."],
            es: ["Cliente: ¿Tiene talla pequeña?", "Empleado: Sí, tenemos.", "Cliente: Me llevo esa."],
            fr: ["Client : Avez-vous une petite taille ?", "Employé : Oui, nous en avons.", "Client : Je prends celui-là."],
            ru: ["Покупатель: Есть маленький размер?", "Сотрудник: Да, есть.", "Покупатель: Дайте мне его."],
            uk: ["Покупець: Є маленький розмір?", "Працівник: Так, є.", "Покупець: Дайте мені його."]
        }
    ),

    makeA1WantToBuyDialogue(
        "a1_want_005",
        "同じものがほしいです",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "これと同じものがほしいです。",
                target: "これとおなじものがほしいです",
                ruby: "これと<ruby>同<rt>おな</rt></ruby>じものがほしいです。",
                romaji: "Kore to onaji mono ga hoshii desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "少々お待ちください。",
                target: "しょうしょうおまちください",
                ruby: "<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。",
                romaji: "Shōshō omachi kudasai."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "こちらです。",
                target: "こちらです",
                ruby: "こちらです。",
                romaji: "Kochira desu."
            }
        ],
        {
            ja: ["客：これと同じものがほしいです。", "店員：少々お待ちください。", "店員：こちらです。"],
            en: ["Customer: I want the same one as this.", "Staff: Please wait a moment.", "Staff: Here it is."],
            "zh-CN": ["顾客：我想要和这个一样的。", "店员：请稍等。", "店员：给您。"],
            "zh-TW": ["顧客：我想要和這個一樣的。", "店員：請稍等。", "店員：給您。"],
            ko: ["손님: 이것과 같은 것을 원해요.", "점원: 잠시만 기다려 주세요.", "점원: 여기 있습니다."],
            vi: ["Khách: Tôi muốn cái giống cái này.", "Nhân viên: Xin chờ một chút.", "Nhân viên: Đây ạ."],
            tl: ["Customer: I want the same one as this.", "Staff: Please wait a moment.", "Staff: Here it is."],
            id: ["Pelanggan: Saya mau yang sama dengan ini.", "Staf: Mohon tunggu sebentar.", "Staf: Ini dia."],
            th: ["ลูกค้า: อยากได้อันที่เหมือนอันนี้ค่ะ/ครับ", "พนักงาน: กรุณารอสักครู่ค่ะ/ครับ", "พนักงาน: นี่ค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီဟာနဲ့တူတာ လိုချင်ပါတယ်။", "ဝန်ထမ်း: ခဏစောင့်ပေးပါ။", "ဝန်ထမ်း: ဒီမှာပါ။"],
            km: ["អតិថិជន: ខ្ញុំចង់បានដូចនេះ។", "បុគ្គលិក: សូមរង់ចាំបន្តិច។", "បុគ្គលិក: នេះហើយ។"],
            ne: ["ग्राहक: मलाई यो जस्तै चाहिन्छ।", "कर्मचारी: एकछिन पर्खनुहोस्।", "कर्मचारी: यो हो।"],
            mn: ["Үйлчлүүлэгч: Би үүнтэй адилхан зүйл авмаар байна.", "Ажилтан: Түр хүлээнэ үү.", "Ажилтан: Энд байна."],
            si: ["පාරිභෝගිකයා: මට මේක වගේ එකක් ඕනේ.", "සේවකයා: පොඩ්ඩක් රැඳී සිටින්න.", "සේවකයා: මෙන්න."],
            bn: ["গ্রাহক: আমি এর মতো একইটা চাই।", "কর্মী: একটু অপেক্ষা করুন।", "কর্মী: এই নিন।"],
            pt: ["Cliente: Eu quero um igual a este.", "Funcionário: Aguarde um momento, por favor.", "Funcionário: Aqui está."],
            es: ["Cliente: Quiero uno igual a este.", "Empleado: Espere un momento, por favor.", "Empleado: Aquí tiene."],
            fr: ["Client : Je voudrais le même que celui-ci.", "Employé : Un instant, s’il vous plaît.", "Employé : Voici."],
            ru: ["Покупатель: Я хочу такой же, как этот.", "Сотрудник: Подождите немного, пожалуйста.", "Сотрудник: Вот."],
            uk: ["Покупець: Я хочу такий самий, як цей.", "Працівник: Зачекайте трохи, будь ласка.", "Працівник: Ось."]
        }
    ),

    makeA1WantToBuyDialogue(
        "a1_want_006",
        "二つほしいです",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "これを二つください。",
                target: "これをふたつください",
                ruby: "これを<ruby>二<rt>ふた</rt></ruby>つください。",
                romaji: "Kore o futatsu kudasai."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、二つですね。",
                target: "はい ふたつですね",
                ruby: "はい、<ruby>二<rt>ふた</rt></ruby>つですね。",
                romaji: "Hai, futatsu desu ne."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "はい、お願いします。",
                target: "はい おねがいします",
                ruby: "はい、お<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hai, onegai shimasu."
            }
        ],
        {
            ja: ["客：これを二つください。", "店員：はい、二つですね。", "客：はい、お願いします。"],
            en: ["Customer: Two of these, please.", "Staff: Yes, two, right?", "Customer: Yes, please."],
            "zh-CN": ["顾客：请给我两个这个。", "店员：好的，两个对吗？", "顾客：是的，拜托了。"],
            "zh-TW": ["顧客：請給我兩個這個。", "店員：好的，兩個對嗎？", "顧客：是的，麻煩你了。"],
            ko: ["손님: 이것을 두 개 주세요.", "점원: 네, 두 개 맞으시죠?", "손님: 네, 부탁합니다."],
            vi: ["Khách: Cho tôi hai cái này.", "Nhân viên: Vâng, hai cái đúng không ạ?", "Khách: Vâng, làm ơn."],
            tl: ["Customer: Two of these, please.", "Staff: Yes, two, right?", "Customer: Yes, please."],
            id: ["Pelanggan: Tolong dua yang ini.", "Staf: Baik, dua ya?", "Pelanggan: Ya, tolong."],
            th: ["ลูกค้า: ขออันนี้สองอันค่ะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ สองอันนะคะ/ครับ", "ลูกค้า: ใช่ค่ะ/ครับ รบกวนด้วยค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီဟာကို နှစ်ခု ပေးပါ။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ နှစ်ခုနော်။", "ဖောက်သည်: ဟုတ်ကဲ့၊ ကျေးဇူးပြု၍။"],
            km: ["អតិថិជន: សូមយកនេះពីរ។", "បុគ្គលិក: ចាស/បាទ ពីរមែនទេ?", "អតិថិជន: ចាស/បាទ សូម។"],
            ne: ["ग्राहक: यो दुईवटा दिनुहोस्।", "कर्मचारी: हुन्छ, दुईवटा है?", "ग्राहक: हो, कृपया।"],
            mn: ["Үйлчлүүлэгч: Үүнээс хоёрыг өгнө үү.", "Ажилтан: За, хоёр ширхэг үү?", "Үйлчлүүлэгч: Тийм ээ,お願いします."],
            si: ["පාරිභෝගිකයා: මේකෙන් දෙකක් දෙන්න.", "සේවකයා: හරි, දෙකක් නේද?", "පාරිභෝගිකයා: ඔව්, කරුණාකර."],
            bn: ["গ্রাহক: এটা দুটো দিন।", "কর্মী: ঠিক আছে, দুটো তো?", "গ্রাহক: হ্যাঁ, দয়া করে।"],
            pt: ["Cliente: Dois destes, por favor.", "Funcionário: Certo, dois, não é?", "Cliente: Sim, por favor."],
            es: ["Cliente: Dos de estos, por favor.", "Empleado: Sí, dos, ¿verdad?", "Cliente: Sí, por favor."],
            fr: ["Client : Deux comme celui-ci, s’il vous plaît.", "Employé : Oui, deux, c’est bien cela ?", "Client : Oui, s’il vous plaît."],
            ru: ["Покупатель: Дайте два таких, пожалуйста.", "Сотрудник: Хорошо, два, верно?", "Покупатель: Да, пожалуйста."],
            uk: ["Покупець: Дайте два таких, будь ласка.", "Працівник: Добре, два, так?", "Покупець: Так, будь ласка."]
        }
    ),

    makeA1WantToBuyDialogue(
        "a1_want_007",
        "プレゼント用がほしいです",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "プレゼント用がほしいです。",
                target: "ぷれぜんとようがほしいです",
                ruby: "プレゼント<ruby>用<rt>よう</rt></ruby>がほしいです。",
                romaji: "Purezento-yō ga hoshii desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "こちらがおすすめです。",
                target: "こちらがおすすめです",
                ruby: "こちらがおすすめです。",
                romaji: "Kochira ga osusume desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "では、これをください。",
                target: "では これをください",
                ruby: "では、これをください。",
                romaji: "Dewa, kore o kudasai."
            }
        ],
        {
            ja: ["客：プレゼント用がほしいです。", "店員：こちらがおすすめです。", "客：では、これをください。"],
            en: ["Customer: I want something for a gift.", "Staff: I recommend this one.", "Customer: Then I’ll take this."],
            "zh-CN": ["顾客：我想要送礼用的。", "店员：推荐这个。", "顾客：那我要这个。"],
            "zh-TW": ["顧客：我想要送禮用的。", "店員：推薦這個。", "顧客：那我要這個。"],
            ko: ["손님: 선물용을 원해요.", "점원: 이것을 추천합니다.", "손님: 그럼 이것을 주세요."],
            vi: ["Khách: Tôi muốn một món để làm quà.", "Nhân viên: Tôi gợi ý cái này.", "Khách: Vậy cho tôi cái này."],
            tl: ["Customer: I want something for a gift.", "Staff: I recommend this one.", "Customer: Then I’ll take this."],
            id: ["Pelanggan: Saya mau sesuatu untuk hadiah.", "Staf: Saya merekomendasikan yang ini.", "Pelanggan: Kalau begitu, saya ambil ini."],
            th: ["ลูกค้า: อยากได้ของสำหรับเป็นของขวัญค่ะ/ครับ", "พนักงาน: ขอแนะนำอันนี้ค่ะ/ครับ", "ลูกค้า: งั้นเอาอันนี้ค่ะ/ครับ"],
            my: ["ဖောက်သည်: လက်ဆောင်အတွက် တစ်ခုခု လိုချင်ပါတယ်။", "ဝန်ထမ်း: ဒီဟာကို အကြံပြုပါတယ်။", "ဖောက်သည်: ဒါဆို ဒီဟာကို ပေးပါ။"],
            km: ["អតិថិជន: ខ្ញុំចង់បានអ្វីមួយសម្រាប់ជាអំណោយ។", "បុគ្គលិក: ខ្ញុំណែនាំនេះ។", "អតិថិជន: ដូច្នេះ ខ្ញុំយកនេះ។"],
            ne: ["ग्राहक: मलाई उपहारका लागि केही चाहिन्छ।", "कर्मचारी: म यो सिफारिस गर्छु।", "ग्राहक: त्यसो भए, यो दिनुहोस्।"],
            mn: ["Үйлчлүүлэгч: Бэлэгт зориулсан зүйл авмаар байна.", "Ажилтан: Үүнийг санал болгож байна.", "Үйлчлүүлэгч: Тэгвэл үүнийг авъя."],
            si: ["පාරිභෝගිකයා: මට තෑග්ගකට දෙයක් ඕනේ.", "සේවකයා: මේක නිර්දේශ කරනවා.", "පාරිභෝගිකයා: එහෙනම් මේක දෙන්න."],
            bn: ["গ্রাহক: আমি উপহারের জন্য কিছু চাই।", "কর্মী: আমি এটা সুপারিশ করি।", "গ্রাহক: তাহলে এটা দিন।"],
            pt: ["Cliente: Eu quero algo para presente.", "Funcionário: Recomendo este.", "Cliente: Então vou levar este."],
            es: ["Cliente: Quiero algo para regalo.", "Empleado: Recomiendo este.", "Cliente: Entonces me llevo este."],
            fr: ["Client : Je voudrais quelque chose pour un cadeau.", "Employé : Je vous recommande celui-ci.", "Client : Alors je prends celui-ci."],
            ru: ["Покупатель: Я хочу что-нибудь для подарка.", "Сотрудник: Рекомендую это.", "Покупатель: Тогда я возьму это."],
            uk: ["Покупець: Я хочу щось для подарунка.", "Працівник: Рекомендую це.", "Покупець: Тоді я візьму це."]
        }
    ),

    makeA1WantToBuyDialogue(
        "a1_want_008",
        "おすすめがほしいです",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "おすすめがほしいです。",
                target: "おすすめがほしいです",
                ruby: "おすすめがほしいです。",
                romaji: "Osusume ga hoshii desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "こちらが人気です。",
                target: "こちらがにんきです",
                ruby: "こちらが<ruby>人気<rt>にんき</rt></ruby>です。",
                romaji: "Kochira ga ninki desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "それにします。",
                target: "それにします",
                ruby: "それにします。",
                romaji: "Sore ni shimasu."
            }
        ],
        {
            ja: ["客：おすすめがほしいです。", "店員：こちらが人気です。", "客：それにします。"],
            en: ["Customer: I want your recommendation.", "Staff: This one is popular.", "Customer: I’ll choose that."],
            "zh-CN": ["顾客：我想要推荐的商品。", "店员：这个很受欢迎。", "顾客：我选那个。"],
            "zh-TW": ["顧客：我想要推薦的商品。", "店員：這個很受歡迎。", "顧客：我選那個。"],
            ko: ["손님: 추천 상품을 원해요.", "점원: 이것이 인기 있습니다.", "손님: 그걸로 할게요."],
            vi: ["Khách: Tôi muốn món được gợi ý.", "Nhân viên: Cái này được ưa chuộng.", "Khách: Tôi chọn cái đó."],
            tl: ["Customer: I want your recommendation.", "Staff: This one is popular.", "Customer: I’ll choose that."],
            id: ["Pelanggan: Saya mau rekomendasi.", "Staf: Yang ini populer.", "Pelanggan: Saya pilih itu."],
            th: ["ลูกค้า: อยากได้ของแนะนำค่ะ/ครับ", "พนักงาน: อันนี้เป็นที่นิยมค่ะ/ครับ", "ลูกค้า: เอาอันนั้นค่ะ/ครับ"],
            my: ["ဖောက်သည်: အကြံပြုထားတာ လိုချင်ပါတယ်။", "ဝန်ထမ်း: ဒီဟာက လူကြိုက်များပါတယ်။", "ဖောက်သည်: အဲဒါကို ယူပါမယ်။"],
            km: ["អតិថិជន: ខ្ញុំចង់បានអ្វីដែលណែនាំ។", "បុគ្គលិក: នេះពេញនិយម។", "អតិថិជន: ខ្ញុំយកនោះ។"],
            ne: ["ग्राहक: मलाई सिफारिस गरिएको चीज चाहिन्छ।", "कर्मचारी: यो लोकप्रिय छ।", "ग्राहक: म त्यो छान्छु।"],
            mn: ["Үйлчлүүлэгч: Би таны санал болгосон зүйлийг авмаар байна.", "Ажилтан: Энэ их алдартай.", "Үйлчлүүлэгч: Тэрийг сонгоё."],
            si: ["පාරිභෝගිකයා: මට ඔබ නිර්දේශ කරන එකක් ඕනේ.", "සේවකයා: මේක ජනප්‍රියයි.", "පාරිභෝගිකයා: මම ඒක තෝරනවා."],
            bn: ["গ্রাহক: আমি আপনার সুপারিশ চাই।", "কর্মী: এটা জনপ্রিয়।", "গ্রাহক: আমি ওটাই নেব।"],
            pt: ["Cliente: Eu quero uma recomendação.", "Funcionário: Este é popular.", "Cliente: Vou escolher esse."],
            es: ["Cliente: Quiero una recomendación.", "Empleado: Este es popular.", "Cliente: Elijo ese."],
            fr: ["Client : Je voudrais une recommandation.", "Employé : Celui-ci est populaire.", "Client : Je vais prendre celui-là."],
            ru: ["Покупатель: Я хочу вашу рекомендацию.", "Сотрудник: Это популярно.", "Покупатель: Я выберу это."],
            uk: ["Покупець: Я хочу вашу рекомендацію.", "Працівник: Це популярне.", "Покупець: Я оберу це."]
        }
    )

];