// =====================================================
// Japeak A1 Level
// Scene: 電車に乗ってみよう
// Category Key: a1_train
// =====================================================

const a1TrainContext = {
    ja: "駅や電車で使う日本語を練習します。",
    en: "Practice Japanese for using trains and stations.",
    "zh-CN": "练习在车站和电车上使用的日语。",
    "zh-TW": "練習在車站和電車上使用的日語。",
    ko: "역과 전철에서 사용하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật dùng ở ga tàu và trên tàu điện.",
    tl: "Practice ng Japanese na ginagamit sa istasyon at tren.",
    id: "Latihan bahasa Jepang yang digunakan di stasiun dan kereta.",
    th: "ฝึกภาษาญี่ปุ่นที่ใช้ในสถานีและบนรถไฟ",
    my: "ဘူတာရုံနှင့် ရထားပေါ်တွင် အသုံးပြုသော ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនដែលប្រើនៅស្ថានីយ៍ និងលើរថភ្លើង។",
    ne: "स्टेशन र रेलमा प्रयोग हुने जापानी भाषा अभ्यास।",
    mn: "Галт тэрэг болон буудал дээр хэрэглэх япон хэлний дадлага.",
    si: "දුම්රිය ස්ථානයේ සහ දුම්රියේ භාවිතා කරන ජපන් භාෂාව පුහුණු කිරීම.",
    bn: "স্টেশন এবং ট্রেনে ব্যবহৃত জাপানি ভাষার অনুশীলন।",
    pt: "Prática de japonês para usar estações e trens.",
    es: "Práctica de japonés para usar estaciones y trenes.",
    fr: "Entraînement en japonais pour utiliser les gares et les trains.",
    ru: "Практика японского языка для использования поездов и станций.",
    uk: "Практика японської мови для користування потягами та станціями."
};

const a1TrainSpeakerNames = {
    staff: {
        ja: "駅員", en: "Station Staff", "zh-CN": "站员", "zh-TW": "站員", ko: "역무원",
        vi: "Nhân viên nhà ga", tl: "Staff sa istasyon", id: "Petugas stasiun", th: "เจ้าหน้าที่สถานี",
        my: "ဘူတာဝန်ထမ်း", km: "បុគ្គលិកស្ថានីយ៍", ne: "स्टेशन कर्मचारी", mn: "Буудлын ажилтан",
        si: "දුම්රිය ස්ථානයේ සේවකයා", bn: "স্টেশন কর্মী", pt: "Funcionário da estação", es: "Empleado de la estación",
        fr: "Employé de la gare", ru: "Сотрудник станции", uk: "Працівник станції"
    },
    passenger: {
        ja: "利用者", en: "Passenger", "zh-CN": "乘客", "zh-TW": "乘客", ko: "승객",
        vi: "Hành khách", tl: "Pasahero", id: "Penumpang", th: "ผู้โดยสาร",
        my: "ခရီးသည်", km: "អ្នកដំណើរ", ne: "यात्री", mn: "Зорчигч",
        si: "මගියා", bn: "যাত্রী", pt: "Passageiro", es: "Pasajero",
        fr: "Passager", ru: "Пассажир", uk: "Пасажир"
    }
};

function makeA1TrainDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a1_train",
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
            speakerNames: a1TrainSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a1TrainContext,
        translations,
        dialogueTranslations
    };
}

const japeakA1TrainData = [

    makeA1TrainDialogue(
        "a1_train_001",
        "ICカードで改札を通る",
        [
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "ICカードは使えますか。",
                target: "あいしーかーどはつかえますか",
                ruby: "ICカードは<ruby>使<rt>つか</rt></ruby>えますか。",
                romaji: "Ai shī kādo wa tsukaemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "駅員",
                line: "はい、改札にタッチしてください。",
                target: "はい かいさつにたっちしてください",
                ruby: "はい、<ruby>改札<rt>かいさつ</rt></ruby>にタッチしてください。",
                romaji: "Hai, kaisatsu ni tacchi shite kudasai."
            },
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "わかりました。",
                target: "わかりました",
                ruby: "わかりました。",
                romaji: "Wakarimashita."
            }
        ],
        {
            ja: ["利用者：ICカードは使えますか。", "駅員：はい、改札にタッチしてください。", "利用者：わかりました。"],
            en: ["Passenger: Can I use an IC card?", "Station Staff: Yes, please tap it at the ticket gate.", "Passenger: I understand."],
            "zh-CN": ["乘客：可以使用IC卡吗？", "站员：可以，请在检票口刷卡。", "乘客：明白了。"],
            "zh-TW": ["乘客：可以使用IC卡嗎？", "站員：可以，請在剪票口感應。", "乘客：明白了。"],
            ko: ["승객: IC 카드를 사용할 수 있나요?", "역무원: 네, 개찰구에 터치해 주세요.", "승객: 알겠습니다."],
            vi: ["Hành khách: Tôi có thể dùng thẻ IC không ạ?", "Nhân viên nhà ga: Vâng, xin hãy chạm thẻ ở cổng soát vé.", "Hành khách: Tôi hiểu rồi."],
            tl: ["Pasahero: Pwede po bang gamitin ang IC card?", "Staff sa istasyon: Oo, i-tap po sa ticket gate.", "Pasahero: Naiintindihan ko po."],
            id: ["Penumpang: Apakah saya bisa memakai kartu IC?", "Petugas stasiun: Ya, silakan tempelkan di gerbang tiket.", "Penumpang: Saya mengerti."],
            th: ["ผู้โดยสาร: ใช้บัตร IC ได้ไหมคะ/ครับ", "เจ้าหน้าที่สถานี: ได้ค่ะ/ครับ กรุณาแตะที่ประตูตรวจตั๋วค่ะ/ครับ", "ผู้โดยสาร: เข้าใจแล้วค่ะ/ครับ"],
            my: ["ခရီးသည်: IC ကတ်သုံးလို့ရပါသလား။", "ဘူတာဝန်ထမ်း: ရပါတယ်၊ လက်မှတ်တံခါးမှာ ထိပေးပါ။", "ခရီးသည်: နားလည်ပါပြီ။"],
            km: ["អ្នកដំណើរ: តើអាចប្រើកាត IC បានទេ?", "បុគ្គលិកស្ថានីយ៍: បាន សូមប៉ះនៅច្រកពិនិត្យសំបុត្រ។", "អ្នកដំណើរ: ខ្ញុំយល់ហើយ។"],
            ne: ["यात्री: के IC कार्ड प्रयोग गर्न सकिन्छ?", "स्टेशन कर्मचारी: हुन्छ, टिकट गेटमा टच गर्नुहोस्।", "यात्री: बुझें।"],
            mn: ["Зорчигч: IC карт ашиглаж болох уу?", "Буудлын ажилтан: Тийм, хаалган дээр хүргэнэ үү.", "Зорчигч: Ойлголоо."],
            si: ["මගියා: IC කාඩ් භාවිතා කළ හැකිද?", "දුම්රිය ස්ථානයේ සේවකයා: ඔව්, ටිකට් ගේට්ටුවට ටච් කරන්න.", "මගියා: තේරුණා."],
            bn: ["যাত্রী: IC কার্ড ব্যবহার করা যাবে?", "স্টেশন কর্মী: হ্যাঁ, টিকিট গেটে ট্যাপ করুন।", "যাত্রী: বুঝেছি।"],
            pt: ["Passageiro: Posso usar um cartão IC?", "Funcionário da estação: Sim, encoste no portão de entrada.", "Passageiro: Entendi."],
            es: ["Pasajero: ¿Puedo usar una tarjeta IC?", "Empleado de la estación: Sí, tóquela en la puerta de acceso.", "Pasajero: Entendido."],
            fr: ["Passager : Puis-je utiliser une carte IC ?", "Employé de la gare : Oui, touchez le portique avec la carte.", "Passager : J’ai compris."],
            ru: ["Пассажир: Можно использовать IC-карту?", "Сотрудник станции: Да, приложите её к турникету.", "Пассажир: Понял."],
            uk: ["Пасажир: Можна використати IC-картку?", "Працівник станції: Так, прикладіть її до турнікета.", "Пасажир: Зрозуміло."]
        }
    ),

    makeA1TrainDialogue(
        "a1_train_002",
        "ホームを確認する",
        [
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "三番線はどちらですか。",
                target: "さんばんせんはどちらですか",
                ruby: "<ruby>三番線<rt>さんばんせん</rt></ruby>はどちらですか。",
                romaji: "San-ban sen wa dochira desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "駅員",
                line: "右の階段を上がってください。",
                target: "みぎのかいだんをあがってください",
                ruby: "<ruby>右<rt>みぎ</rt></ruby>の<ruby>階段<rt>かいだん</rt></ruby>を<ruby>上<rt>あ</rt></ruby>がってください。",
                romaji: "Migi no kaidan o agatte kudasai."
            },
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "ありがとうございます。",
                target: "ありがとうございます",
                ruby: "ありがとうございます。",
                romaji: "Arigatō gozaimasu."
            }
        ],
        {
            ja: ["利用者：三番線はどちらですか。", "駅員：右の階段を上がってください。", "利用者：ありがとうございます。"],
            en: ["Passenger: Which way is platform three?", "Station Staff: Please go up the stairs on the right.", "Passenger: Thank you."],
            "zh-CN": ["乘客：三号站台在哪边？", "站员：请上右边的楼梯。", "乘客：谢谢。"],
            "zh-TW": ["乘客：三號月台在哪邊？", "站員：請上右邊的樓梯。", "乘客：謝謝。"],
            ko: ["승객: 3번 승강장은 어디인가요?", "역무원: 오른쪽 계단으로 올라가 주세요.", "승객: 감사합니다."],
            vi: ["Hành khách: Sân ga số 3 ở hướng nào ạ?", "Nhân viên nhà ga: Xin hãy đi lên cầu thang bên phải.", "Hành khách: Cảm ơn."],
            tl: ["Pasahero: Saan po ang platform number three?", "Staff sa istasyon: Umakyat po kayo sa hagdan sa kanan.", "Pasahero: Salamat po."],
            id: ["Penumpang: Peron nomor tiga di mana?", "Petugas stasiun: Silakan naik tangga di sebelah kanan.", "Penumpang: Terima kasih."],
            th: ["ผู้โดยสาร: ชานชาลาหมายเลขสามไปทางไหนคะ/ครับ", "เจ้าหน้าที่สถานี: กรุณาขึ้นบันไดด้านขวาค่ะ/ครับ", "ผู้โดยสาร: ขอบคุณค่ะ/ครับ"],
            my: ["ခရီးသည်: ပလက်ဖောင်း ၃ က ဘယ်ဘက်ပါလဲ။", "ဘူတာဝန်ထမ်း: ညာဘက်က လှေကားကို တက်ပေးပါ။", "ခရီးသည်: ကျေးဇူးတင်ပါတယ်။"],
            km: ["អ្នកដំណើរ: ផ្លូវលេខបីនៅឯណា?", "បុគ្គលិកស្ថានីយ៍: សូមឡើងជណ្តើរខាងស្តាំ។", "អ្នកដំណើរ: អរគុណ។"],
            ne: ["यात्री: तीन नम्बर प्लेटफर्म कता हो?", "स्टेशन कर्मचारी: दायाँपट्टिको सिँढी चढ्नुहोस्।", "यात्री: धन्यवाद।"],
            mn: ["Зорчигч: Гуравдугаар тавцан аль зүгт вэ?", "Буудлын ажилтан: Баруун талын шатаар өгсөөрэй.", "Зорчигч: Баярлалаа."],
            si: ["මගියා: තුන්වන වේදිකාව කොහේද?", "දුම්රිය ස්ථානයේ සේවකයා: දකුණු පැත්තේ පඩිපෙළෙන් උඩට යන්න.", "මගියා: ස්තුතියි."],
            bn: ["যাত্রী: তিন নম্বর প্ল্যাটফর্ম কোন দিকে?", "স্টেশন কর্মী: ডান দিকের সিঁড়ি দিয়ে উঠুন।", "যাত্রী: ধন্যবাদ।"],
            pt: ["Passageiro: Para onde fica a plataforma três?", "Funcionário da estação: Suba as escadas à direita, por favor.", "Passageiro: Obrigado."],
            es: ["Pasajero: ¿Por dónde está el andén tres?", "Empleado de la estación: Suba las escaleras de la derecha, por favor.", "Pasajero: Gracias."],
            fr: ["Passager : Où se trouve la voie trois ?", "Employé de la gare : Montez les escaliers à droite, s’il vous plaît.", "Passager : Merci."],
            ru: ["Пассажир: Где третья платформа?", "Сотрудник станции: Поднимитесь по лестнице справа.", "Пассажир: Спасибо."],
            uk: ["Пасажир: Де третя платформа?", "Працівник станції: Підніміться сходами праворуч.", "Пасажир: Дякую."]
        }
    ),

    makeA1TrainDialogue(
        "a1_train_003",
        "行き先を確認する",
        [
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "この電車は名古屋に行きますか。",
                target: "このでんしゃはなごやにいきますか",
                ruby: "この<ruby>電車<rt>でんしゃ</rt></ruby>は<ruby>名古屋<rt>なごや</rt></ruby>に<ruby>行<rt>い</rt></ruby>きますか。",
                romaji: "Kono densha wa Nagoya ni ikimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "駅員",
                line: "はい、名古屋に行きます。",
                target: "はい なごやにいきます",
                ruby: "はい、<ruby>名古屋<rt>なごや</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。",
                romaji: "Hai, Nagoya ni ikimasu."
            },
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "この電車に乗ります。",
                target: "このでんしゃにのります",
                ruby: "この<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ります。",
                romaji: "Kono densha ni norimasu."
            }
        ],
        {
            ja: ["利用者：この電車は名古屋に行きますか。", "駅員：はい、名古屋に行きます。", "利用者：この電車に乗ります。"],
            en: ["Passenger: Does this train go to Nagoya?", "Station Staff: Yes, it goes to Nagoya.", "Passenger: I will take this train."],
            "zh-CN": ["乘客：这班电车去名古屋吗？", "站员：是的，去名古屋。", "乘客：我坐这班车。"],
            "zh-TW": ["乘客：這班電車去名古屋嗎？", "站員：是的，去名古屋。", "乘客：我搭這班車。"],
            ko: ["승객: 이 전철은 나고야에 가나요?", "역무원: 네, 나고야에 갑니다.", "승객: 이 전철을 타겠습니다."],
            vi: ["Hành khách: Tàu này có đi Nagoya không ạ?", "Nhân viên nhà ga: Vâng, tàu này đi Nagoya.", "Hành khách: Tôi sẽ lên tàu này."],
            tl: ["Pasahero: Pupunta po ba sa Nagoya ang tren na ito?", "Staff sa istasyon: Oo, pupunta ito sa Nagoya.", "Pasahero: Sasakay po ako sa tren na ito."],
            id: ["Penumpang: Apakah kereta ini pergi ke Nagoya?", "Petugas stasiun: Ya, pergi ke Nagoya.", "Penumpang: Saya akan naik kereta ini."],
            th: ["ผู้โดยสาร: รถไฟขบวนนี้ไปนาโกย่าไหมคะ/ครับ", "เจ้าหน้าที่สถานี: ใช่ค่ะ/ครับ ไปนาโกย่าค่ะ/ครับ", "ผู้โดยสาร: จะขึ้นขบวนนี้ค่ะ/ครับ"],
            my: ["ခရီးသည်: ဒီရထားက နာဂိုယာကို သွားပါသလား။", "ဘူတာဝန်ထမ်း: ဟုတ်ကဲ့၊ နာဂိုယာကို သွားပါတယ်။", "ခရီးသည်: ဒီရထားကို စီးပါမယ်။"],
            km: ["អ្នកដំណើរ: តើរថភ្លើងនេះទៅ Nagoya ទេ?", "បុគ្គលិកស្ថានីយ៍: បាទ/ចាស ទៅ Nagoya។", "អ្នកដំណើរ: ខ្ញុំនឹងជិះរថភ្លើងនេះ។"],
            ne: ["यात्री: के यो रेल नागोया जान्छ?", "स्टेशन कर्मचारी: हो, नागोया जान्छ।", "यात्री: म यो रेल चढ्छु।"],
            mn: ["Зорчигч: Энэ галт тэрэг Нагоя руу явах уу?", "Буудлын ажилтан: Тийм, Нагоя руу явна.", "Зорчигч: Би энэ галт тэргэнд сууна."],
            si: ["මගියා: මේ දුම්රිය නගෝයාට යනවද?", "දුම්රිය ස්ථානයේ සේවකයා: ඔව්, නගෝයාට යනවා.", "මගියා: මම මේ දුම්රියට නගිනවා."],
            bn: ["যাত্রী: এই ট্রেন কি নাগোয়া যায়?", "স্টেশন কর্মী: হ্যাঁ, নাগোয়া যায়।", "যাত্রী: আমি এই ট্রেনে উঠব।"],
            pt: ["Passageiro: Este trem vai para Nagoya?", "Funcionário da estação: Sim, vai para Nagoya.", "Passageiro: Vou pegar este trem."],
            es: ["Pasajero: ¿Este tren va a Nagoya?", "Empleado de la estación: Sí, va a Nagoya.", "Pasajero: Tomaré este tren."],
            fr: ["Passager : Ce train va-t-il à Nagoya ?", "Employé de la gare : Oui, il va à Nagoya.", "Passager : Je vais prendre ce train."],
            ru: ["Пассажир: Этот поезд идёт в Нагою?", "Сотрудник станции: Да, он идёт в Нагою.", "Пассажир: Я сяду на этот поезд."],
            uk: ["Пасажир: Цей потяг їде до Нагої?", "Працівник станції: Так, він їде до Нагої.", "Пасажир: Я сяду на цей потяг."]
        }
    ),

    makeA1TrainDialogue(
        "a1_train_004",
        "乗り換えを確認する",
        [
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "乗り換えはありますか。",
                target: "のりかえはありますか",
                ruby: "<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えはありますか。",
                romaji: "Norikae wa arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "駅員",
                line: "はい、金山で乗り換えてください。",
                target: "はい かなやまでのりかえてください",
                ruby: "はい、<ruby>金山<rt>かなやま</rt></ruby>で<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えてください。",
                romaji: "Hai, Kanayama de norikaete kudasai."
            },
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "金山ですね。",
                target: "かなやまですね",
                ruby: "<ruby>金山<rt>かなやま</rt></ruby>ですね。",
                romaji: "Kanayama desu ne."
            }
        ],
        {
            ja: ["利用者：乗り換えはありますか。", "駅員：はい、金山で乗り換えてください。", "利用者：金山ですね。"],
            en: ["Passenger: Do I need to transfer?", "Station Staff: Yes, please transfer at Kanayama.", "Passenger: Kanayama, right?"],
            "zh-CN": ["乘客：需要换乘吗？", "站员：是的，请在金山换乘。", "乘客：金山，对吗？"],
            "zh-TW": ["乘客：需要轉乘嗎？", "站員：是的，請在金山轉乘。", "乘客：金山，對嗎？"],
            ko: ["승객: 갈아타야 하나요?", "역무원: 네, 가나야마에서 갈아타 주세요.", "승객: 가나야마죠?"],
            vi: ["Hành khách: Tôi có cần đổi tàu không ạ?", "Nhân viên nhà ga: Có, xin hãy đổi tàu ở Kanayama.", "Hành khách: Kanayama đúng không ạ?"],
            tl: ["Pasahero: Kailangan po bang lumipat ng tren?", "Staff sa istasyon: Oo, lumipat po kayo sa Kanayama.", "Pasahero: Kanayama po, tama?"],
            id: ["Penumpang: Apakah perlu pindah kereta?", "Petugas stasiun: Ya, silakan pindah di Kanayama.", "Penumpang: Kanayama ya?"],
            th: ["ผู้โดยสาร: ต้องเปลี่ยนรถไฟไหมคะ/ครับ", "เจ้าหน้าที่สถานี: ใช่ค่ะ/ครับ กรุณาเปลี่ยนที่คานายามะค่ะ/ครับ", "ผู้โดยสาร: คานายามะนะคะ/ครับ"],
            my: ["ခရီးသည်: ရထားပြောင်းရပါသလား။", "ဘူတာဝန်ထမ်း: ဟုတ်ကဲ့၊ ကနာယာမမှာ ပြောင်းစီးပေးပါ။", "ခရီးသည်: ကနာယာမနော်။"],
            km: ["អ្នកដំណើរ: តើខ្ញុំត្រូវប្ដូររថភ្លើងទេ?", "បុគ្គលិកស្ថានីយ៍: បាទ/ចាស សូមប្ដូរនៅ Kanayama។", "អ្នកដំណើរ: Kanayama មែនទេ។"],
            ne: ["यात्री: के रेल बदल्नुपर्छ?", "स्टेशन कर्मचारी: हो, कानायामामा परिवर्तन गर्नुहोस्।", "यात्री: कानायामा है?"],
            mn: ["Зорчигч: Солих хэрэгтэй юу?", "Буудлын ажилтан: Тийм, Канаяма дээр солино уу.", "Зорчигч: Канаяма биз дээ?"],
            si: ["මගියා: මට මාරු වෙන්න තියෙනවද?", "දුම්රිය ස්ථානයේ සේවකයා: ඔව්, කනයාමාහිදී මාරු වෙන්න.", "මගියා: කනයාමා නේද?"],
            bn: ["যাত্রী: ট্রেন বদলাতে হবে?", "স্টেশন কর্মী: হ্যাঁ, কানায়ামায় বদলান।", "যাত্রী: কানায়ামা, তাই তো?"],
            pt: ["Passageiro: Preciso fazer baldeação?", "Funcionário da estação: Sim, faça baldeação em Kanayama.", "Passageiro: Kanayama, certo?"],
            es: ["Pasajero: ¿Tengo que hacer transbordo?", "Empleado de la estación: Sí, haga transbordo en Kanayama.", "Pasajero: Kanayama, ¿verdad?"],
            fr: ["Passager : Dois-je changer de train ?", "Employé de la gare : Oui, changez à Kanayama.", "Passager : Kanayama, c’est bien ça ?"],
            ru: ["Пассажир: Нужно пересаживаться?", "Сотрудник станции: Да, пересядьте на станции Канаяма.", "Пассажир: Канаяма, верно?"],
            uk: ["Пасажир: Потрібно пересідати?", "Працівник станції: Так, пересядьте на станції Канаяма.", "Пасажир: Канаяма, так?"]
        }
    ),

    makeA1TrainDialogue(
        "a1_train_005",
        "普通電車を確認する",
        [
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "これは普通電車ですか。",
                target: "これはふつうでんしゃですか",
                ruby: "これは<ruby>普通電車<rt>ふつうでんしゃ</rt></ruby>ですか。",
                romaji: "Kore wa futsū densha desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "駅員",
                line: "いいえ、快速です。",
                target: "いいえ かいそくです",
                ruby: "いいえ、<ruby>快速<rt>かいそく</rt></ruby>です。",
                romaji: "Iie, kaisoku desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "駅員",
                line: "普通電車は次です。",
                target: "ふつうでんしゃはつぎです",
                ruby: "<ruby>普通電車<rt>ふつうでんしゃ</rt></ruby>は<ruby>次<rt>つぎ</rt></ruby>です。",
                romaji: "Futsū densha wa tsugi desu."
            }
        ],
        {
            ja: ["利用者：これは普通電車ですか。", "駅員：いいえ、快速です。", "駅員：普通電車は次です。"],
            en: ["Passenger: Is this a local train?", "Station Staff: No, it is a rapid train.", "Station Staff: The local train is next."],
            "zh-CN": ["乘客：这是普通列车吗？", "站员：不是，是快速列车。", "站员：普通列车是下一班。"],
            "zh-TW": ["乘客：這是普通列車嗎？", "站員：不是，是快速列車。", "站員：普通列車是下一班。"],
            ko: ["승객: 이것은 보통 열차인가요?", "역무원: 아니요, 쾌속입니다.", "역무원: 보통 열차는 다음입니다."],
            vi: ["Hành khách: Đây là tàu thường phải không ạ?", "Nhân viên nhà ga: Không, đây là tàu nhanh.", "Nhân viên nhà ga: Tàu thường là chuyến tiếp theo."],
            tl: ["Pasahero: Local train po ba ito?", "Staff sa istasyon: Hindi po, rapid train ito.", "Staff sa istasyon: Ang local train ay susunod po."],
            id: ["Penumpang: Apakah ini kereta lokal?", "Petugas stasiun: Tidak, ini kereta cepat.", "Petugas stasiun: Kereta lokal berikutnya."],
            th: ["ผู้โดยสาร: นี่คือรถไฟธรรมดาไหมคะ/ครับ", "เจ้าหน้าที่สถานี: ไม่ใช่ค่ะ/ครับ เป็นรถไฟเร็วค่ะ/ครับ", "เจ้าหน้าที่สถานี: รถไฟธรรมดาเป็นขบวนถัดไปค่ะ/ครับ"],
            my: ["ခရီးသည်: ဒီဟာက ပုံမှန်ရထားပါလား။", "ဘူတာဝန်ထမ်း: မဟုတ်ပါ၊ အမြန်ရထားပါ။", "ဘူတာဝန်ထမ်း: ပုံမှန်ရထားက နောက်တစ်စီးပါ။"],
            km: ["អ្នកដំណើរ: តើនេះជារថភ្លើងធម្មតាទេ?", "បុគ្គលិកស្ថានីយ៍: ទេ វាជារថភ្លើងរហ័ស។", "បុគ្គលិកស្ថានីយ៍: រថភ្លើងធម្មតាគឺជើងបន្ទាប់។"],
            ne: ["यात्री: के यो साधारण रेल हो?", "स्टेशन कर्मचारी: होइन, यो र्यापिड रेल हो।", "स्टेशन कर्मचारी: साधारण रेल अर्को हो।"],
            mn: ["Зорчигч: Энэ энгийн галт тэрэг үү?", "Буудлын ажилтан: Үгүй, хурдан галт тэрэг.", "Буудлын ажилтан: Энгийн галт тэрэг дараагийнх."],
            si: ["මගියා: මේක සාමාන්‍ය දුම්රියද?", "දුම්රිය ස්ථානයේ සේවකයා: නැහැ, වේගවත් දුම්රියක්.", "දුම්රිය ස්ථානයේ සේවකයා: සාමාන්‍ය දුම්රිය ඊළඟ එකයි."],
            bn: ["যাত্রী: এটা কি লোকাল ট্রেন?", "স্টেশন কর্মী: না, এটা দ্রুতগামী ট্রেন।", "স্টেশন কর্মী: লোকাল ট্রেন পরেরটা।"],
            pt: ["Passageiro: Este é um trem local?", "Funcionário da estação: Não, é um trem rápido.", "Funcionário da estação: O trem local é o próximo."],
            es: ["Pasajero: ¿Este es un tren local?", "Empleado de la estación: No, es un tren rápido.", "Empleado de la estación: El tren local es el siguiente."],
            fr: ["Passager : Est-ce un train local ?", "Employé de la gare : Non, c’est un train rapide.", "Employé de la gare : Le train local est le prochain."],
            ru: ["Пассажир: Это обычный поезд?", "Сотрудник станции: Нет, это скорый поезд.", "Сотрудник станции: Обычный поезд будет следующим."],
            uk: ["Пасажир: Це звичайний потяг?", "Працівник станції: Ні, це швидкий потяг.", "Працівник станції: Звичайний потяг буде наступним."]
        }
    ),

    makeA1TrainDialogue(
        "a1_train_006",
        "切符をなくした",
        [
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "切符をなくしました。",
                target: "きっぷをなくしました",
                ruby: "<ruby>切符<rt>きっぷ</rt></ruby>をなくしました。",
                romaji: "Kippu o nakushimashita."
            },
            {
                label: "話者A",
                key: "staff",
                name: "駅員",
                line: "どこから乗りましたか。",
                target: "どこからのりましたか",
                ruby: "どこから<ruby>乗<rt>の</rt></ruby>りましたか。",
                romaji: "Doko kara norimashita ka."
            },
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "安城から乗りました。",
                target: "あんじょうからのりました",
                ruby: "<ruby>安城<rt>あんじょう</rt></ruby>から<ruby>乗<rt>の</rt></ruby>りました。",
                romaji: "Anjō kara norimashita."
            }
        ],
        {
            ja: ["利用者：切符をなくしました。", "駅員：どこから乗りましたか。", "利用者：安城から乗りました。"],
            en: ["Passenger: I lost my ticket.", "Station Staff: Where did you get on?", "Passenger: I got on at Anjo."],
            "zh-CN": ["乘客：我把车票弄丢了。", "站员：您从哪里上车的？", "乘客：我从安城上的车。"],
            "zh-TW": ["乘客：我把車票弄丟了。", "站員：您從哪裡上車的？", "乘客：我從安城上的車。"],
            ko: ["승객: 표를 잃어버렸습니다.", "역무원: 어디에서 타셨나요?", "승객: 안조에서 탔습니다."],
            vi: ["Hành khách: Tôi làm mất vé rồi.", "Nhân viên nhà ga: Quý khách đã lên từ đâu ạ?", "Hành khách: Tôi lên từ Anjo."],
            tl: ["Pasahero: Nawala po ang ticket ko.", "Staff sa istasyon: Saan po kayo sumakay?", "Pasahero: Sumakay po ako mula Anjo."],
            id: ["Penumpang: Saya kehilangan tiket.", "Petugas stasiun: Dari mana Anda naik?", "Penumpang: Saya naik dari Anjo."],
            th: ["ผู้โดยสาร: ทำตั๋วหายค่ะ/ครับ", "เจ้าหน้าที่สถานี: ขึ้นมาจากที่ไหนคะ/ครับ", "ผู้โดยสาร: ขึ้นมาจากอันโจค่ะ/ครับ"],
            my: ["ခရီးသည်: လက်မှတ်ပျောက်သွားပါတယ်။", "ဘူတာဝန်ထမ်း: ဘယ်နေရာက စီးလာပါသလဲ။", "ခရီးသည်: အန်โจက စီးလာပါတယ်။"],
            km: ["អ្នកដំណើរ: ខ្ញុំបានបាត់សំបុត្រ។", "បុគ្គលិកស្ថានីយ៍: អ្នកឡើងពីណា?", "អ្នកដំណើរ: ខ្ញុំឡើងពី Anjo។"],
            ne: ["यात्री: मैले टिकट हराएँ।", "स्टेशन कर्मचारी: कहाँबाट चढ्नुभएको हो?", "यात्री: अन्जोबाट चढेको हुँ।"],
            mn: ["Зорчигч: Би тасалбараа алдчихлаа.", "Буудлын ажилтан: Та хаанаас суусан бэ?", "Зорчигч: Анжогоос суусан."],
            si: ["මගියා: මගේ ටිකට් එක නැතිවුණා.", "දුම්රිය ස්ථානයේ සේවකයා: ඔබ කොහෙන්ද නැග්ගේ?", "මගියා: මම අන්ජෝවලින් නැග්ගා."],
            bn: ["যাত্রী: আমি টিকিট হারিয়েছি।", "স্টেশন কর্মী: কোথা থেকে উঠেছিলেন?", "যাত্রী: আমি আনজো থেকে উঠেছিলাম।"],
            pt: ["Passageiro: Perdi meu bilhete.", "Funcionário da estação: De onde você embarcou?", "Passageiro: Embarquei em Anjo."],
            es: ["Pasajero: Perdí mi boleto.", "Empleado de la estación: ¿Dónde subió?", "Pasajero: Subí en Anjo."],
            fr: ["Passager : J’ai perdu mon billet.", "Employé de la gare : Où êtes-vous monté ?", "Passager : Je suis monté à Anjo."],
            ru: ["Пассажир: Я потерял билет.", "Сотрудник станции: Где вы сели?", "Пассажир: Я сел в Андзё."],
            uk: ["Пасажир: Я загубив квиток.", "Працівник станції: Де ви сіли?", "Пасажир: Я сів в Андзьо."]
        }
    ),

    makeA1TrainDialogue(
        "a1_train_007",
        "電車の遅れを確認する",
        [
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "電車は遅れていますか。",
                target: "でんしゃはおくれていますか",
                ruby: "<ruby>電車<rt>でんしゃ</rt></ruby>は<ruby>遅<rt>おく</rt></ruby>れていますか。",
                romaji: "Densha wa okurete imasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "駅員",
                line: "はい、十分ほど遅れています。",
                target: "はい じゅっぷんほどおくれています",
                ruby: "はい、<ruby>十分<rt>じゅっぷん</rt></ruby>ほど<ruby>遅<rt>おく</rt></ruby>れています。",
                romaji: "Hai, juppun hodo okurete imasu."
            },
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "わかりました。待ちます。",
                target: "わかりました まちます",
                ruby: "わかりました。<ruby>待<rt>ま</rt></ruby>ちます。",
                romaji: "Wakarimashita. Machimasu."
            }
        ],
        {
            ja: ["利用者：電車は遅れていますか。", "駅員：はい、十分ほど遅れています。", "利用者：わかりました。待ちます。"],
            en: ["Passenger: Is the train delayed?", "Station Staff: Yes, it is delayed by about ten minutes.", "Passenger: I understand. I will wait."],
            "zh-CN": ["乘客：电车晚点了吗？", "站员：是的，大约晚点十分钟。", "乘客：明白了。我等。"],
            "zh-TW": ["乘客：電車誤點了嗎？", "站員：是的，大約誤點十分鐘。", "乘客：明白了。我等。"],
            ko: ["승객: 전철이 지연되고 있나요?", "역무원: 네, 약 10분 정도 지연되고 있습니다.", "승객: 알겠습니다. 기다리겠습니다."],
            vi: ["Hành khách: Tàu có bị trễ không ạ?", "Nhân viên nhà ga: Vâng, trễ khoảng mười phút.", "Hành khách: Tôi hiểu rồi. Tôi sẽ đợi."],
            tl: ["Pasahero: Delayed po ba ang tren?", "Staff sa istasyon: Oo, delayed po nang mga sampung minuto.", "Pasahero: Sige po. Maghihintay po ako."],
            id: ["Penumpang: Apakah keretanya terlambat?", "Petugas stasiun: Ya, terlambat sekitar sepuluh menit.", "Penumpang: Saya mengerti. Saya akan menunggu."],
            th: ["ผู้โดยสาร: รถไฟล่าช้าไหมคะ/ครับ", "เจ้าหน้าที่สถานี: ใช่ค่ะ/ครับ ล่าช้าประมาณสิบนาทีค่ะ/ครับ", "ผู้โดยสาร: เข้าใจแล้วค่ะ/ครับ จะรอค่ะ/ครับ"],
            my: ["ခရီးသည်: ရထားနောက်ကျနေပါသလား။", "ဘူတာဝန်ထမ်း: ဟုတ်ကဲ့၊ ဆယ်မိနစ်လောက် နောက်ကျနေပါတယ်။", "ခရီးသည်: နားလည်ပါပြီ။ စောင့်ပါမယ်။"],
            km: ["អ្នកដំណើរ: តើរថភ្លើងយឺតទេ?", "បុគ្គលិកស្ថានីយ៍: បាទ/ចាស យឺតប្រហែលដប់នាទី។", "អ្នកដំណើរ: ខ្ញុំយល់ហើយ។ ខ្ញុំនឹងរង់ចាំ។"],
            ne: ["यात्री: रेल ढिलो भएको छ?", "स्टेशन कर्मचारी: हो, करिब दस मिनेट ढिलो छ।", "यात्री: बुझें। म पर्खन्छु।"],
            mn: ["Зорчигч: Галт тэрэг хоцорч байна уу?", "Буудлын ажилтан: Тийм, ойролцоогоор арван минут хоцорч байна.", "Зорчигч: Ойлголоо. Хүлээнэ."],
            si: ["මගියා: දුම්රිය ප්‍රමාදද?", "දුම්රිය ස්ථානයේ සේවකයා: ඔව්, විනාඩි දහයක් පමණ ප්‍රමාදයි.", "මගියා: තේරුණා. මම බලාගෙන ඉන්නම්."],
            bn: ["যাত্রী: ট্রেন কি দেরি করছে?", "স্টেশন কর্মী: হ্যাঁ, প্রায় দশ মিনিট দেরি হচ্ছে।", "যাত্রী: বুঝেছি। আমি অপেক্ষা করব।"],
            pt: ["Passageiro: O trem está atrasado?", "Funcionário da estação: Sim, está atrasado cerca de dez minutos.", "Passageiro: Entendi. Vou esperar."],
            es: ["Pasajero: ¿El tren está retrasado?", "Empleado de la estación: Sí, está retrasado unos diez minutos.", "Pasajero: Entendido. Esperaré."],
            fr: ["Passager : Le train est-il en retard ?", "Employé de la gare : Oui, il a environ dix minutes de retard.", "Passager : J’ai compris. Je vais attendre."],
            ru: ["Пассажир: Поезд задерживается?", "Сотрудник станции: Да, примерно на десять минут.", "Пассажир: Понял. Я подожду."],
            uk: ["Пасажир: Потяг запізнюється?", "Працівник станції: Так, приблизно на десять хвилин.", "Пасажир: Зрозуміло. Я почекаю."]
        }
    ),

    makeA1TrainDialogue(
        "a1_train_008",
        "出口を確認する",
        [
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "東口に出たいです。",
                target: "ひがしぐちにでたいです",
                ruby: "<ruby>東口<rt>ひがしぐち</rt></ruby>に<ruby>出<rt>で</rt></ruby>たいです。",
                romaji: "Higashi-guchi ni detai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "駅員",
                line: "まっすぐ行って、左です。",
                target: "まっすぐいって ひだりです",
                ruby: "まっすぐ<ruby>行<rt>い</rt></ruby>って、<ruby>左<rt>ひだり</rt></ruby>です。",
                romaji: "Massugu itte, hidari desu."
            },
            {
                label: "話者B",
                key: "passenger",
                name: "利用者",
                line: "助かります。",
                target: "たすかります",
                ruby: "<ruby>助<rt>たす</rt></ruby>かります。",
                romaji: "Tasukarimasu."
            }
        ],
        {
            ja: ["利用者：東口に出たいです。", "駅員：まっすぐ行って、左です。", "利用者：助かります。"],
            en: ["Passenger: I want to go out the east exit.", "Station Staff: Go straight, then left.", "Passenger: That helps."],
            "zh-CN": ["乘客：我想从东口出去。", "站员：直走，然后向左。", "乘客：帮大忙了。"],
            "zh-TW": ["乘客：我想從東口出去。", "站員：直走，然後向左。", "乘客：幫大忙了。"],
            ko: ["승객: 동쪽 출구로 나가고 싶습니다.", "역무원: 똑바로 가서 왼쪽입니다.", "승객: 도움이 됩니다."],
            vi: ["Hành khách: Tôi muốn ra cửa đông.", "Nhân viên nhà ga: Đi thẳng rồi rẽ trái.", "Hành khách: Thật tốt quá."],
            tl: ["Pasahero: Gusto ko pong lumabas sa east exit.", "Staff sa istasyon: Diretso po, tapos kaliwa.", "Pasahero: Malaking tulong po."],
            id: ["Penumpang: Saya ingin keluar dari pintu timur.", "Petugas stasiun: Lurus, lalu kiri.", "Penumpang: Itu membantu."],
            th: ["ผู้โดยสาร: อยากออกทางประตูตะวันออกค่ะ/ครับ", "เจ้าหน้าที่สถานี: ตรงไปแล้วเลี้ยวซ้ายค่ะ/ครับ", "ผู้โดยสาร: ช่วยได้มากค่ะ/ครับ"],
            my: ["ခရီးသည်: အရှေ့ထွက်ပေါက်ကနေ ထွက်ချင်ပါတယ်။", "ဘူတာဝန်ထမ်း: တည့်တည့်သွားပြီး ဘယ်ဘက်ပါ။", "ခရီးသည်: အကူအညီဖြစ်ပါတယ်။"],
            km: ["អ្នកដំណើរ: ខ្ញុំចង់ចេញតាមច្រកខាងកើត។", "បុគ្គលិកស្ថានីយ៍: ទៅត្រង់ រួចបត់ឆ្វេង។", "អ្នកដំណើរ: ជួយខ្ញុំបានច្រើន។"],
            ne: ["यात्री: म पूर्वी निकासबाट निस्कन चाहन्छु।", "स्टेशन कर्मचारी: सिधा जानुहोस्, त्यसपछि बाँया।", "यात्री: सहयोग भयो।"],
            mn: ["Зорчигч: Зүүн гарцаар гармаар байна.", "Буудлын ажилтан: Чигээрээ яваад зүүн тийш.", "Зорчигч: Тус боллоо."],
            si: ["මගියා: මට නැගෙනහිර පිටවීමෙන් යන්න ඕනේ.", "දුම්රිය ස්ථානයේ සේවකයා: කෙළින්ම ගිහින් වමට.", "මගියා: ඒක උදව්වක්."],
            bn: ["যাত্রী: আমি পূর্ব দিকের বেরোনোর পথ দিয়ে বের হতে চাই।", "স্টেশন কর্মী: সোজা যান, তারপর বাঁ দিকে।", "যাত্রী: এতে সাহায্য হলো।"],
            pt: ["Passageiro: Quero sair pela saída leste.", "Funcionário da estação: Siga em frente e vire à esquerda.", "Passageiro: Isso ajuda."],
            es: ["Pasajero: Quiero salir por la salida este.", "Empleado de la estación: Siga recto y luego a la izquierda.", "Pasajero: Eso me ayuda."],
            fr: ["Passager : Je veux sortir par la sortie est.", "Employé de la gare : Allez tout droit, puis à gauche.", "Passager : Cela m’aide."],
            ru: ["Пассажир: Я хочу выйти через восточный выход.", "Сотрудник станции: Идите прямо, затем налево.", "Пассажир: Это очень поможет."],
            uk: ["Пасажир: Я хочу вийти через східний вихід.", "Працівник станції: Ідіть прямо, потім ліворуч.", "Пасажир: Це дуже допоможе."]
        }
    )

];