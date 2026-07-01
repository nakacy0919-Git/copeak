// =====================================================
// Japeak A1 Level
// Scene: お店の人に希望をつたえてみよう
// Category Key: a1_tell_preferences
// =====================================================

const a1TellPreferencesContext = {
    ja: "お店で自分の希望や条件を店員に伝える練習です。",
    en: "Practice telling store staff your preferences and needs.",
    "zh-CN": "练习在商店向店员表达自己的需求和条件。",
    "zh-TW": "練習在商店向店員表達自己的需求和條件。",
    ko: "가게에서 원하는 조건을 점원에게 말하는 연습입니다.",
    vi: "Luyện nói với nhân viên cửa hàng về mong muốn và điều kiện của mình.",
    tl: "Practice sa pagsasabi ng gusto at kailangan mo sa staff ng tindahan.",
    id: "Latihan menyampaikan keinginan dan kebutuhan kepada staf toko.",
    th: "ฝึกบอกความต้องการและเงื่อนไขของตนเองกับพนักงานร้าน",
    my: "ဆိုင်ဝန်ထမ်းအား မိမိလိုချင်သောအရာနှင့် အခြေအနေများကို ပြောရန် လေ့ကျင့်ခြင်း။",
    km: "ហាត់ប្រាប់បុគ្គលិកហាងអំពីអ្វីដែលអ្នកចង់បាន និងលក្ខខណ្ឌរបស់អ្នក។",
    ne: "पसलका कर्मचारीलाई आफ्नो चाहना र सर्त बताउने अभ्यास।",
    mn: "Дэлгүүрийн ажилтанд өөрийн хүсэл, хэрэгцээг хэлэх дадлага.",
    si: "වෙළඳසැලේ සේවකයාට තම අවශ්‍යතා සහ කැමැත්ත කියන පුහුණුවකි.",
    bn: "দোকানের কর্মীকে নিজের পছন্দ ও প্রয়োজন জানানোর অনুশীলন।",
    pt: "Prática para dizer suas preferências e necessidades ao funcionário da loja.",
    es: "Práctica para decir tus preferencias y necesidades al empleado de la tienda.",
    fr: "Entraînement pour dire vos préférences et besoins au vendeur.",
    ru: "Практика того, как сказать сотруднику магазина о своих пожеланиях и потребностях.",
    uk: "Практика того, як сказати працівнику магазину про свої побажання та потреби."
};

const a1TellPreferencesSpeakerNames = {
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

function makeA1TellPreferencesDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a1_tell_preferences",
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
            speakerNames: a1TellPreferencesSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a1TellPreferencesContext,
        translations,
        dialogueTranslations
    };
}

const japeakA1TellPreferencesData = [

    makeA1TellPreferencesDialogue(
        "a1_prefer_001",
        "軽いものがいいです",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "軽いものがいいです。",
                target: "かるいものがいいです",
                ruby: "<ruby>軽<rt>かる</rt></ruby>いものがいいです。",
                romaji: "Karui mono ga ii desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "この商品は軽いです。",
                target: "このしょうひんはかるいです",
                ruby: "この<ruby>商品<rt>しょうひん</rt></ruby>は<ruby>軽<rt>かる</rt></ruby>いです。",
                romaji: "Kono shōhin wa karui desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "これでお願いします。",
                target: "これでおねがいします",
                ruby: "これでお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Kore de onegai shimasu."
            }
        ],
        {
            ja: ["客：軽いものがいいです。", "店員：この商品は軽いです。", "客：これでお願いします。"],
            en: ["Customer: I prefer something light.", "Staff: This item is light.", "Customer: I’ll take this, please."],
            "zh-CN": ["顾客：我想要轻一点的。", "店员：这个商品很轻。", "顾客：就这个，麻烦您。"],
            "zh-TW": ["顧客：我想要輕一點的。", "店員：這個商品很輕。", "顧客：就這個，麻煩你。"],
            ko: ["손님: 가벼운 것이 좋아요.", "점원: 이 상품은 가볍습니다.", "손님: 이걸로 부탁합니다."],
            vi: ["Khách: Tôi muốn thứ nhẹ.", "Nhân viên: Sản phẩm này nhẹ ạ.", "Khách: Cho tôi cái này."],
            tl: ["Customer: I prefer something light.", "Staff: This item is light.", "Customer: I’ll take this, please."],
            id: ["Pelanggan: Saya ingin yang ringan.", "Staf: Barang ini ringan.", "Pelanggan: Saya pilih ini, tolong."],
            th: ["ลูกค้า: อยากได้ของที่เบาค่ะ/ครับ", "พนักงาน: สินค้านี้เบาค่ะ/ครับ", "ลูกค้า: เอาอันนี้ค่ะ/ครับ"],
            my: ["ဖောက်သည်: ပေါ့တဲ့ပစ္စည်းကောင်းပါတယ်။", "ဝန်ထမ်း: ဒီပစ္စည်းက ပေါ့ပါတယ်။", "ဖောက်သည်: ဒီဟာနဲ့ အဆင်ပြေပါတယ်။"],
            km: ["អតិថិជន: ខ្ញុំចង់បានរបស់ស្រាល។", "បុគ្គលិក: ទំនិញនេះស្រាល។", "អតិថិជន: ខ្ញុំយកនេះ។"],
            ne: ["ग्राहक: मलाई हलुका सामान राम्रो लाग्छ।", "कर्मचारी: यो सामान हलुका छ।", "ग्राहक: यही ठीक छ, कृपया।"],
            mn: ["Үйлчлүүлэгч: Хөнгөн зүйл байвал сайн.", "Ажилтан: Энэ бараа хөнгөн.", "Үйлчлүүлэгч: Үүнийг авъя."],
            si: ["පාරිභෝගිකයා: මට සැහැල්ලු දෙයක් හොඳයි.", "සේවකයා: මේ භාණ්ඩය සැහැල්ලුයි.", "පාරිභෝගිකයා: මේකෙන්お願いします."],
            bn: ["গ্রাহক: আমি হালকা কিছু চাই।", "কর্মী: এই পণ্যটি হালকা।", "গ্রাহক: এটা নেব, দয়া করে।"],
            pt: ["Cliente: Prefiro algo leve.", "Funcionário: Este produto é leve.", "Cliente: Vou levar este, por favor."],
            es: ["Cliente: Prefiero algo ligero.", "Empleado: Este producto es ligero.", "Cliente: Me llevo este, por favor."],
            fr: ["Client : Je préfère quelque chose de léger.", "Employé : Cet article est léger.", "Client : Je prends celui-ci, s’il vous plaît."],
            ru: ["Покупатель: Я предпочитаю что-нибудь лёгкое.", "Сотрудник: Этот товар лёгкий.", "Покупатель: Возьму это, пожалуйста."],
            uk: ["Покупець: Я хочу щось легке.", "Працівник: Цей товар легкий.", "Покупець: Візьму це, будь ласка."]
        }
    ),

    makeA1TellPreferencesDialogue(
        "a1_prefer_002",
        "丈夫なものがいいです",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "丈夫なものがいいです。",
                target: "じょうぶなものがいいです",
                ruby: "<ruby>丈夫<rt>じょうぶ</rt></ruby>なものがいいです。",
                romaji: "Jōbu na mono ga ii desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "これは長く使えます。",
                target: "これはながくつかえます",
                ruby: "これは<ruby>長<rt>なが</rt></ruby>く<ruby>使<rt>つか</rt></ruby>えます。",
                romaji: "Kore wa nagaku tsukaemasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "それなら安心です。",
                target: "それならあんしんです",
                ruby: "それなら<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Sore nara anshin desu."
            }
        ],
        {
            ja: ["客：丈夫なものがいいです。", "店員：これは長く使えます。", "客：それなら安心です。"],
            en: ["Customer: I prefer something strong.", "Staff: You can use this for a long time.", "Customer: Then I feel安心.",],
            "zh-CN": ["顾客：我想要结实的。", "店员：这个可以用很久。", "顾客：那我就放心了。"],
            "zh-TW": ["顧客：我想要耐用的。", "店員：這個可以用很久。", "顧客：那我就放心了。"],
            ko: ["손님: 튼튼한 것이 좋아요.", "점원: 이것은 오래 사용할 수 있습니다.", "손님: 그렇다면 안심입니다."],
            vi: ["Khách: Tôi muốn thứ bền.", "Nhân viên: Cái này có thể dùng lâu.", "Khách: Vậy thì tôi yên tâm."],
            tl: ["Customer: I prefer something durable.", "Staff: You can use this for a long time.", "Customer: Then I feel安心."],
            id: ["Pelanggan: Saya ingin yang kuat.", "Staf: Ini bisa dipakai lama.", "Pelanggan: Kalau begitu saya merasa tenang."],
            th: ["ลูกค้า: อยากได้ของที่ทนทานค่ะ/ครับ", "พนักงาน: อันนี้ใช้ได้นานค่ะ/ครับ", "ลูกค้า: ถ้าอย่างนั้นก็สบายใจค่ะ/ครับ"],
            my: ["ဖောက်သည်: ခိုင်ခံ့တဲ့ဟာကောင်းပါတယ်။", "ဝန်ထမ်း: ဒီဟာက ကြာကြာသုံးလို့ရပါတယ်။", "ဖောက်သည်: ဒါဆို စိတ်ချရပါတယ်။"],
            km: ["អតិថិជន: ខ្ញុំចង់បានរបស់រឹងមាំ។", "បុគ្គលិក: នេះអាចប្រើបានយូរ។", "អតិថិជន: បើដូច្នោះ ខ្ញុំមានទំនុកចិត្ត។"],
            ne: ["ग्राहक: मलाई बलियो सामान चाहिन्छ।", "कर्मचारी: यो लामो समय प्रयोग गर्न सकिन्छ।", "ग्राहक: त्यसो भए ढुक्क हुन्छ।"],
            mn: ["Үйлчлүүлэгч: Бат бөх зүйл байвал сайн.", "Ажилтан: Үүнийг удаан хэрэглэж болно.", "Үйлчлүүлэгч: Тэгвэл санаа амар байна."],
            si: ["පාරිභෝගිකයා: මට දෘඪ දෙයක් හොඳයි.", "සේවකයා: මේක දිගු කාලයක් භාවිතා කළ හැකියි.", "පාරිභෝගිකයා: එහෙනම් මට විශ්වාසයි."],
            bn: ["গ্রাহক: আমি মজবুত কিছু চাই।", "কর্মী: এটা অনেক দিন ব্যবহার করা যাবে।", "গ্রাহক: তাহলে নিশ্চিন্ত।"],
            pt: ["Cliente: Prefiro algo resistente.", "Funcionário: Este pode ser usado por muito tempo.", "Cliente: Então fico tranquilo."],
            es: ["Cliente: Prefiero algo resistente.", "Empleado: Esto se puede usar durante mucho tiempo.", "Cliente: Entonces me quedo tranquilo."],
            fr: ["Client : Je préfère quelque chose de solide.", "Employé : Vous pouvez l’utiliser longtemps.", "Client : Alors je suis rassuré."],
            ru: ["Покупатель: Я хочу что-нибудь прочное.", "Сотрудник: Это можно использовать долго.", "Покупатель: Тогда я спокоен."],
            uk: ["Покупець: Я хочу щось міцне.", "Працівник: Це можна використовувати довго.", "Покупець: Тоді я спокійний."]
        }
    ),

    makeA1TellPreferencesDialogue(
        "a1_prefer_003",
        "甘くないものがいいです",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "あまり甘くないものはありますか。",
                target: "あまりあまくないものはありますか",
                ruby: "あまり<ruby>甘<rt>あま</rt></ruby>くないものはありますか。",
                romaji: "Amari amakunai mono wa arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "これは甘さひかえめです。",
                target: "これはあまさひかえめです",
                ruby: "これは<ruby>甘<rt>あま</rt></ruby>さひかえめです。",
                romaji: "Kore wa amasa hikaeme desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "それでお願いします。",
                target: "それでおねがいします",
                ruby: "それでお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Sore de onegai shimasu."
            }
        ],
        {
            ja: ["客：あまり甘くないものはありますか。", "店員：これは甘さひかえめです。", "客：それでお願いします。"],
            en: ["Customer: Do you have something that is not too sweet?", "Staff: This is mildly sweet.", "Customer: I’ll take that, please."],
            "zh-CN": ["顾客：有不太甜的吗？", "店员：这个甜度比较低。", "顾客：就那个，麻烦您。"],
            "zh-TW": ["顧客：有不太甜的嗎？", "店員：這個甜度比較低。", "顧客：就那個，麻煩你。"],
            ko: ["손님: 너무 달지 않은 것이 있나요?", "점원: 이것은 단맛이 약합니다.", "손님: 그걸로 부탁합니다."],
            vi: ["Khách: Có loại không quá ngọt không ạ?", "Nhân viên: Cái này ít ngọt ạ.", "Khách: Cho tôi cái đó."],
            tl: ["Customer: Do you have something not too sweet?", "Staff: This one is mildly sweet.", "Customer: I’ll take that, please."],
            id: ["Pelanggan: Ada yang tidak terlalu manis?", "Staf: Yang ini tidak terlalu manis.", "Pelanggan: Saya pilih itu, tolong."],
            th: ["ลูกค้า: มีแบบที่ไม่หวานมากไหมคะ/ครับ", "พนักงาน: อันนี้หวานน้อยค่ะ/ครับ", "ลูกค้า: เอาอันนั้นค่ะ/ครับ"],
            my: ["ဖောက်သည်: အရမ်းမချိုတာ ရှိပါသလား။", "ဝန်ထမ်း: ဒီဟာက ချိုတာနည်းပါတယ်။", "ဖောက်သည်: အဲဒါနဲ့ အဆင်ပြေပါတယ်။"],
            km: ["អតិថិជន: មានអ្វីដែលមិនផ្អែមពេកទេ?", "បុគ្គលិក: នេះផ្អែមតិច។", "អតិថិជន: ខ្ញុំយកនោះ។"],
            ne: ["ग्राहक: धेरै गुलियो नभएको छ?", "कर्मचारी: यो कम गुलियो छ।", "ग्राहक: त्यो नै दिनुहोस्।"],
            mn: ["Үйлчлүүлэгч: Хэт чихэрлэг биш зүйл байна уу?", "Ажилтан: Энэ бага зэрэг чихэрлэг.", "Үйлчлүүлэгч: Тэрийг авъя."],
            si: ["පාරිභෝගිකයා: වැඩි පැණි නැති දෙයක් තියෙනවද?", "සේවකයා: මේක පැණි අඩුයි.", "පාරිභෝගිකයා: ඒකෙන්お願いします."],
            bn: ["গ্রাহক: খুব মিষ্টি নয় এমন কিছু আছে?", "কর্মী: এটা কম মিষ্টি।", "গ্রাহক: ওটা নেব, দয়া করে।"],
            pt: ["Cliente: Tem algo que não seja muito doce?", "Funcionário: Este é pouco doce.", "Cliente: Vou levar esse, por favor."],
            es: ["Cliente: ¿Tiene algo que no sea muy dulce?", "Empleado: Este es poco dulce.", "Cliente: Me llevo ese, por favor."],
            fr: ["Client : Avez-vous quelque chose de pas trop sucré ?", "Employé : Celui-ci est peu sucré.", "Client : Je prends celui-là, s’il vous plaît."],
            ru: ["Покупатель: Есть что-нибудь не слишком сладкое?", "Сотрудник: Это не очень сладкое.", "Покупатель: Возьму это, пожалуйста."],
            uk: ["Покупець: Є щось не дуже солодке?", "Працівник: Це не дуже солодке.", "Покупець: Візьму це, будь ласка."]
        }
    ),

    makeA1TellPreferencesDialogue(
        "a1_prefer_004",
        "黒ではない色がいいです",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "黒ではない色がいいです。",
                target: "くろではないいろがいいです",
                ruby: "<ruby>黒<rt>くろ</rt></ruby>ではない<ruby>色<rt>いろ</rt></ruby>がいいです。",
                romaji: "Kuro dewa nai iro ga ii desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "青と白があります。",
                target: "あおとしろがあります",
                ruby: "<ruby>青<rt>あお</rt></ruby>と<ruby>白<rt>しろ</rt></ruby>があります。",
                romaji: "Ao to shiro ga arimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "白でお願いします。",
                target: "しろでおねがいします",
                ruby: "<ruby>白<rt>しろ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Shiro de onegai shimasu."
            }
        ],
        {
            ja: ["客：黒ではない色がいいです。", "店員：青と白があります。", "客：白でお願いします。"],
            en: ["Customer: I prefer a color other than black.", "Staff: We have blue and white.", "Customer: White, please."],
            "zh-CN": ["顾客：我想要不是黑色的颜色。", "店员：有蓝色和白色。", "顾客：请给我白色的。"],
            "zh-TW": ["顧客：我想要不是黑色的顏色。", "店員：有藍色和白色。", "顧客：請給我白色的。"],
            ko: ["손님: 검은색이 아닌 색이 좋아요.", "점원: 파란색과 흰색이 있습니다.", "손님: 흰색으로 부탁합니다."],
            vi: ["Khách: Tôi muốn màu không phải màu đen.", "Nhân viên: Có màu xanh và màu trắng.", "Khách: Cho tôi màu trắng."],
            tl: ["Customer: I prefer a color other than black.", "Staff: We have blue and white.", "Customer: White, please."],
            id: ["Pelanggan: Saya ingin warna selain hitam.", "Staf: Ada biru dan putih.", "Pelanggan: Putih, tolong."],
            th: ["ลูกค้า: อยากได้สีที่ไม่ใช่สีดำค่ะ/ครับ", "พนักงาน: มีสีน้ำเงินกับสีขาวค่ะ/ครับ", "ลูกค้า: ขอสีขาวค่ะ/ครับ"],
            my: ["ဖောက်သည်: အမည်းမဟုတ်တဲ့အရောင်ကောင်းပါတယ်။", "ဝန်ထမ်း: အပြာနဲ့အဖြူ ရှိပါတယ်။", "ဖောက်သည်: အဖြူနဲ့お願いします။"],
            km: ["អតិថិជន: ខ្ញុំចង់បានពណ៌ដែលមិនមែនខ្មៅ។", "បុគ្គលិក: មានពណ៌ខៀវ និងពណ៌ស។", "អតិថិជន: សូមយកពណ៌ស។"],
            ne: ["ग्राहक: कालो नभएको रङ राम्रो हुन्छ।", "कर्मचारी: निलो र सेतो छ।", "ग्राहक: सेतो दिनुहोस्।"],
            mn: ["Үйлчлүүлэгч: Хар биш өнгө байвал сайн.", "Ажилтан: Цэнхэр, цагаан байна.", "Үйлчлүүлэгч: Цагааныг өгнө үү."],
            si: ["පාරිභෝගිකයා: කළු නොවන වර්ණයක් හොඳයි.", "සේවකයා: නිල් සහ සුදු තියෙනවා.", "පාරිභෝගිකයා: සුදු එක දෙන්න."],
            bn: ["গ্রাহক: কালো নয় এমন রঙ চাই।", "কর্মী: নীল আর সাদা আছে।", "গ্রাহক: সাদা দিন।"],
            pt: ["Cliente: Prefiro uma cor que não seja preta.", "Funcionário: Temos azul e branco.", "Cliente: Branco, por favor."],
            es: ["Cliente: Prefiero un color que no sea negro.", "Empleado: Tenemos azul y blanco.", "Cliente: Blanco, por favor."],
            fr: ["Client : Je préfère une couleur autre que le noir.", "Employé : Nous avons du bleu et du blanc.", "Client : Blanc, s’il vous plaît."],
            ru: ["Покупатель: Я хочу цвет не чёрный.", "Сотрудник: Есть синий и белый.", "Покупатель: Белый, пожалуйста."],
            uk: ["Покупець: Я хочу колір не чорний.", "Працівник: Є синій і білий.", "Покупець: Білий, будь ласка."]
        }
    ),

    makeA1TellPreferencesDialogue(
        "a1_prefer_005",
        "家で使うものを探しています",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "家で使うものを探しています。",
                target: "いえでつかうものをさがしています",
                ruby: "<ruby>家<rt>いえ</rt></ruby>で<ruby>使<rt>つか</rt></ruby>うものを<ruby>探<rt>さが</rt></ruby>しています。",
                romaji: "Ie de tsukau mono o sagashite imasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "このタイプは便利です。",
                target: "このたいぷはべんりです",
                ruby: "このタイプは<ruby>便利<rt>べんり</rt></ruby>です。",
                romaji: "Kono taipu wa benri desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "見せてください。",
                target: "みせてください",
                ruby: "<ruby>見<rt>み</rt></ruby>せてください。",
                romaji: "Misete kudasai."
            }
        ],
        {
            ja: ["客：家で使うものを探しています。", "店員：このタイプは便利です。", "客：見せてください。"],
            en: ["Customer: I am looking for something to use at home.", "Staff: This type is useful.", "Customer: Please show me."],
            "zh-CN": ["顾客：我在找家里用的东西。", "店员：这种类型很方便。", "顾客：请给我看一下。"],
            "zh-TW": ["顧客：我在找家裡用的東西。", "店員：這種類型很方便。", "顧客：請給我看一下。"],
            ko: ["손님: 집에서 사용할 물건을 찾고 있어요.", "점원: 이 타입은 편리합니다.", "손님: 보여 주세요."],
            vi: ["Khách: Tôi đang tìm đồ dùng ở nhà.", "Nhân viên: Loại này tiện lợi ạ.", "Khách: Cho tôi xem với ạ."],
            tl: ["Customer: I am looking for something to use at home.", "Staff: This type is useful.", "Customer: Please show me."],
            id: ["Pelanggan: Saya sedang mencari barang untuk dipakai di rumah.", "Staf: Tipe ini praktis.", "Pelanggan: Tolong tunjukkan kepada saya."],
            th: ["ลูกค้า: กำลังหาของที่ใช้ที่บ้านค่ะ/ครับ", "พนักงาน: แบบนี้สะดวกค่ะ/ครับ", "ลูกค้า: ขอดูหน่อยค่ะ/ครับ"],
            my: ["ဖောက်သည်: အိမ်မှာသုံးမယ့်ပစ္စည်းကို ရှာနေပါတယ်။", "ဝန်ထမ်း: ဒီအမျိုးအစားက အသုံးဝင်ပါတယ်။", "ဖောက်သည်: ပြပေးပါ။"],
            km: ["អតិថិជន: ខ្ញុំកំពុងរករបស់ប្រើនៅផ្ទះ។", "បុគ្គលិក: ប្រភេទនេះងាយស្រួលប្រើ។", "អតិថិជន: សូមបង្ហាញខ្ញុំមើល។"],
            ne: ["ग्राहक: म घरमा प्रयोग गर्ने सामान खोज्दै छु।", "कर्मचारी: यो प्रकार उपयोगी छ।", "ग्राहक: देखाउनुहोस्।"],
            mn: ["Үйлчлүүлэгч: Би гэртээ хэрэглэх зүйл хайж байна.", "Ажилтан: Энэ төрөл нь хэрэгтэй.", "Үйлчлүүлэгч: Үзүүлнэ үү."],
            si: ["පාරිභෝගිකයා: මම ගෙදර භාවිතා කරන දෙයක් සොයනවා.", "සේවකයා: මේ වර්ගය පහසුයි.", "පාරිභෝගිකයා: පෙන්වන්න."],
            bn: ["গ্রাহক: আমি বাড়িতে ব্যবহার করার জিনিস খুঁজছি।", "কর্মী: এই ধরনের জিনিস সুবিধাজনক।", "গ্রাহক: দেখান, দয়া করে।"],
            pt: ["Cliente: Estou procurando algo para usar em casa.", "Funcionário: Este tipo é prático.", "Cliente: Pode me mostrar, por favor."],
            es: ["Cliente: Estoy buscando algo para usar en casa.", "Empleado: Este tipo es práctico.", "Cliente: Muéstremelo, por favor."],
            fr: ["Client : Je cherche quelque chose à utiliser à la maison.", "Employé : Ce type est pratique.", "Client : Montrez-moi, s’il vous plaît."],
            ru: ["Покупатель: Я ищу что-нибудь для дома.", "Сотрудник: Этот тип удобный.", "Покупатель: Покажите, пожалуйста."],
            uk: ["Покупець: Я шукаю щось для дому.", "Працівник: Цей тип зручний.", "Покупець: Покажіть, будь ласка."]
        }
    ),

    makeA1TellPreferencesDialogue(
        "a1_prefer_006",
        "子ども用はありますか",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "子ども用はありますか。",
                target: "こどもようはありますか",
                ruby: "<ruby>子<rt>こ</rt></ruby>ども<ruby>用<rt>よう</rt></ruby>はありますか。",
                romaji: "Kodomo-yō wa arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、このサイズです。",
                target: "はい このさいずです",
                ruby: "はい、このサイズです。",
                romaji: "Hai, kono saizu desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "一つお願いします。",
                target: "ひとつおねがいします",
                ruby: "<ruby>一<rt>ひと</rt></ruby>つお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hitotsu onegai shimasu."
            }
        ],
        {
            ja: ["客：子ども用はありますか。", "店員：はい、このサイズです。", "客：一つお願いします。"],
            en: ["Customer: Do you have one for children?", "Staff: Yes, this size is for children.", "Customer: One, please."],
            "zh-CN": ["顾客：有儿童用的吗？", "店员：有，是这个尺寸。", "顾客：请给我一个。"],
            "zh-TW": ["顧客：有兒童用的嗎？", "店員：有，是這個尺寸。", "顧客：請給我一個。"],
            ko: ["손님: 어린이용이 있나요?", "점원: 네, 이 사이즈입니다.", "손님: 하나 부탁합니다."],
            vi: ["Khách: Có loại dành cho trẻ em không ạ?", "Nhân viên: Vâng, là cỡ này ạ.", "Khách: Cho tôi một cái."],
            tl: ["Customer: Do you have one for children?", "Staff: Yes, this size is for children.", "Customer: One, please."],
            id: ["Pelanggan: Ada untuk anak-anak?", "Staf: Ya, ukuran ini.", "Pelanggan: Satu, tolong."],
            th: ["ลูกค้า: มีสำหรับเด็กไหมคะ/ครับ", "พนักงาน: มีค่ะ/ครับ ไซซ์นี้ค่ะ/ครับ", "ลูกค้า: ขอหนึ่งอันค่ะ/ครับ"],
            my: ["ဖောက်သည်: ကလေးသုံး ရှိပါသလား။", "ဝန်ထမ်း: ရှိပါတယ်၊ ဒီဆိုဒ်ပါ။", "ဖောက်သည်: တစ်ခုお願いします။"],
            km: ["អតិថិជន: មានសម្រាប់កុមារទេ?", "បុគ្គលិក: មាន។ ទំហំនេះ។", "អតិថិជន: សូមយកមួយ។"],
            ne: ["ग्राहक: बच्चाका लागि छ?", "कर्मचारी: छ, यो साइज हो।", "ग्राहक: एउटा दिनुहोस्।"],
            mn: ["Үйлчлүүлэгч: Хүүхдийнх байна уу?", "Ажилтан: Тийм, энэ размер.", "Үйлчлүүлэгч: Нэгийг өгнө үү."],
            si: ["පාරිභෝගිකයා: ළමයින්ට භාවිතා කරන එකක් තියෙනවද?", "සේවකයා: ඔව්, මේ සයිස් එකයි.", "පාරිභෝගිකයා: එකක් දෙන්න."],
            bn: ["গ্রাহক: শিশুদের জন্য আছে?", "কর্মী: আছে, এই সাইজ।", "গ্রাহক: একটা দিন।"],
            pt: ["Cliente: Tem para crianças?", "Funcionário: Sim, é este tamanho.", "Cliente: Um, por favor."],
            es: ["Cliente: ¿Tiene para niños?", "Empleado: Sí, es este tamaño.", "Cliente: Uno, por favor."],
            fr: ["Client : En avez-vous pour les enfants ?", "Employé : Oui, c’est cette taille.", "Client : Un, s’il vous plaît."],
            ru: ["Покупатель: Есть для детей?", "Сотрудник: Да, вот этот размер.", "Покупатель: Один, пожалуйста."],
            uk: ["Покупець: Є для дітей?", "Працівник: Так, ось цей розмір.", "Покупець: Один, будь ласка."]
        }
    ),

    makeA1TellPreferencesDialogue(
        "a1_prefer_007",
        "すぐ使えますか",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "すぐ使えますか。",
                target: "すぐつかえますか",
                ruby: "すぐ<ruby>使<rt>つか</rt></ruby>えますか。",
                romaji: "Sugu tsukaemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、すぐ使えます。",
                target: "はい すぐつかえます",
                ruby: "はい、すぐ<ruby>使<rt>つか</rt></ruby>えます。",
                romaji: "Hai, sugu tsukaemasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "助かります。",
                target: "たすかります",
                ruby: "<ruby>助<rt>たす</rt></ruby>かります。",
                romaji: "Tasukarimasu."
            }
        ],
        {
            ja: ["客：すぐ使えますか。", "店員：はい、すぐ使えます。", "客：助かります。"],
            en: ["Customer: Can I use it right away?", "Staff: Yes, you can use it right away.", "Customer: That helps."],
            "zh-CN": ["顾客：可以马上使用吗？", "店员：可以，马上可以使用。", "顾客：太好了。"],
            "zh-TW": ["顧客：可以馬上使用嗎？", "店員：可以，馬上可以使用。", "顧客：太好了。"],
            ko: ["손님: 바로 사용할 수 있나요?", "점원: 네, 바로 사용할 수 있습니다.", "손님: 도움이 됩니다."],
            vi: ["Khách: Có thể dùng ngay không ạ?", "Nhân viên: Vâng, có thể dùng ngay.", "Khách: Vậy thì tốt quá."],
            tl: ["Customer: Can I use it right away?", "Staff: Yes, you can use it right away.", "Customer: That helps."],
            id: ["Pelanggan: Bisa langsung dipakai?", "Staf: Ya, bisa langsung dipakai.", "Pelanggan: Itu membantu."],
            th: ["ลูกค้า: ใช้ได้ทันทีไหมคะ/ครับ", "พนักงาน: ใช่ค่ะ/ครับ ใช้ได้ทันทีค่ะ/ครับ", "ลูกค้า: ช่วยได้มากค่ะ/ครับ"],
            my: ["ဖောက်သည်: ချက်ချင်းသုံးလို့ရပါသလား။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ ချက်ချင်းသုံးလို့ရပါတယ်။", "ဖောက်သည်: အကူအညီဖြစ်ပါတယ်။"],
            km: ["អតិថិជន: អាចប្រើភ្លាមៗបានទេ?", "បុគ្គលិក: បាន អាចប្រើភ្លាមៗបាន។", "អតិថិជន: ជួយខ្ញុំបានច្រើន។"],
            ne: ["ग्राहक: तुरुन्तै प्रयोग गर्न सकिन्छ?", "कर्मचारी: हो, तुरुन्तै प्रयोग गर्न सकिन्छ।", "ग्राहक: सहयोग भयो।"],
            mn: ["Үйлчлүүлэгч: Шууд хэрэглэж болох уу?", "Ажилтан: Тийм, шууд хэрэглэж болно.", "Үйлчлүүлэгч: Тус боллоо."],
            si: ["පාරිභෝගිකයා: දැන්ම භාවිතා කළ හැකිද?", "සේවකයා: ඔව්, දැන්ම භාවිතා කළ හැකියි.", "පාරිභෝගිකයා: ඒක උදව්වක්."],
            bn: ["গ্রাহক: এটা কি এখনই ব্যবহার করা যাবে?", "কর্মী: হ্যাঁ, এখনই ব্যবহার করা যাবে।", "গ্রাহক: এতে সুবিধা হবে।"],
            pt: ["Cliente: Posso usar imediatamente?", "Funcionário: Sim, pode usar imediatamente.", "Cliente: Isso ajuda muito."],
            es: ["Cliente: ¿Puedo usarlo enseguida?", "Empleado: Sí, puede usarlo enseguida.", "Cliente: Eso me ayuda."],
            fr: ["Client : Puis-je l’utiliser tout de suite ?", "Employé : Oui, vous pouvez l’utiliser tout de suite.", "Client : Cela m’aide beaucoup."],
            ru: ["Покупатель: Можно использовать сразу?", "Сотрудник: Да, можно использовать сразу.", "Покупатель: Это очень помогает."],
            uk: ["Покупець: Можна використовувати одразу?", "Працівник: Так, можна використовувати одразу.", "Покупець: Це дуже допомагає."]
        }
    ),

    makeA1TellPreferencesDialogue(
        "a1_prefer_008",
        "袋に入れてもらえますか",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "袋に入れてもらえますか。",
                target: "ふくろにいれてもらえますか",
                ruby: "<ruby>袋<rt>ふくろ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れてもらえますか。",
                romaji: "Fukuro ni irete moraemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、お入れします。",
                target: "はい おいれします",
                ruby: "はい、お<ruby>入<rt>い</rt></ruby>れします。",
                romaji: "Hai, o-ire shimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "お願いします。",
                target: "おねがいします",
                ruby: "お<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Onegai shimasu."
            }
        ],
        {
            ja: ["客：袋に入れてもらえますか。", "店員：はい、お入れします。", "客：お願いします。"],
            en: ["Customer: Could you put it in a bag?", "Staff: Yes, I will put it in a bag.", "Customer: Please."],
            "zh-CN": ["顾客：可以帮我放进袋子里吗？", "店员：好的，我帮您放进去。", "顾客：麻烦您。"],
            "zh-TW": ["顧客：可以幫我放進袋子裡嗎？", "店員：好的，我幫您放進去。", "顧客：麻煩你。"],
            ko: ["손님: 봉투에 넣어 주실 수 있나요?", "점원: 네, 넣어 드리겠습니다.", "손님: 부탁합니다."],
            vi: ["Khách: Anh/chị có thể cho vào túi giúp tôi không?", "Nhân viên: Vâng, tôi sẽ cho vào túi.", "Khách: Làm ơn."],
            tl: ["Customer: Could you put it in a bag?", "Staff: Yes, I will put it in a bag.", "Customer: Please."],
            id: ["Pelanggan: Bisa dimasukkan ke dalam kantong?", "Staf: Ya, saya masukkan.", "Pelanggan: Tolong."],
            th: ["ลูกค้า: ใส่ถุงให้ได้ไหมคะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ จะใส่ถุงให้นะคะ/ครับ", "ลูกค้า: รบกวนด้วยค่ะ/ครับ"],
            my: ["ဖောက်သည်: အိတ်ထဲထည့်ပေးလို့ရပါသလား။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ ထည့်ပေးပါမယ်။", "ဖောက်သည်: ကျေးဇူးပြု၍။"],
            km: ["អតិថិជន: អាចដាក់ក្នុងថង់ឲ្យខ្ញុំបានទេ?", "បុគ្គលិក: បាន ខ្ញុំនឹងដាក់ឲ្យ។", "អតិថិជន: សូមអរគុណ។"],
            ne: ["ग्राहक: झोलामा राखिदिन सक्नुहुन्छ?", "कर्मचारी: हुन्छ, राखिदिन्छु।", "ग्राहक: कृपया।"],
            mn: ["Үйлчлүүлэгч: Уутанд хийж өгч болох уу?", "Ажилтан: Тийм, хийж өгнө.", "Үйлчлүүлэгч: Тэгээрэй."],
            si: ["පාරිභෝගිකයා: බෑගයකට දාලා දෙන්න පුළුවන්ද?", "සේවකයා: ඔව්, දාලා දෙන්නම්.", "පාරිභෝගිකයා: කරුණාකර."],
            bn: ["গ্রাহক: এটা কি ব্যাগে 넣ে দিতে পারবেন?", "কর্মী: হ্যাঁ, ব্যাগে 넣ে দিচ্ছি।", "গ্রাহক: অনুগ্রহ করে।"],
            pt: ["Cliente: Pode colocar em uma sacola?", "Funcionário: Sim, vou colocar.", "Cliente: Por favor."],
            es: ["Cliente: ¿Podría ponerlo en una bolsa?", "Empleado: Sí, lo pondré en una bolsa.", "Cliente: Por favor."],
            fr: ["Client : Pourriez-vous le mettre dans un sac ?", "Employé : Oui, je vais le mettre dans un sac.", "Client : S’il vous plaît."],
            ru: ["Покупатель: Можете положить это в пакет?", "Сотрудник: Да, положу.", "Покупатель: Пожалуйста."],
            uk: ["Покупець: Можете покласти це в пакет?", "Працівник: Так, покладу.", "Покупець: Будь ласка."]
        }
    )

];