// =====================================================
// Japeak A1 Level
// Scene: 銀行を利用しよう
// Category Key: a1_bank
// =====================================================

const a1BankContext = {
    ja: "銀行で口座、ATM、通帳、カード、住所変更、振り込みについて話す練習です。",
    en: "Practice Japanese for using a bank, including accounts, ATMs, bankbooks, cards, address changes, and transfers.",
    "zh-CN": "练习在银行办理账户、ATM、存折、银行卡、地址变更和汇款时使用的日语。",
    "zh-TW": "練習在銀行辦理帳戶、ATM、存摺、金融卡、地址變更和匯款時使用的日語。",
    ko: "은행에서 계좌, ATM, 통장, 카드, 주소 변경, 송금에 대해 말하는 연습입니다.",
    vi: "Luyện tiếng Nhật khi sử dụng ngân hàng: tài khoản, ATM, sổ ngân hàng, thẻ, đổi địa chỉ và chuyển khoản.",
    tl: "Practice ng Japanese sa bangko: account, ATM, bankbook, card, change of address, at bank transfer.",
    id: "Latihan bahasa Jepang di bank: rekening, ATM, buku tabungan, kartu, perubahan alamat, dan transfer.",
    th: "ฝึกภาษาญี่ปุ่นที่ใช้ในธนาคาร เช่น บัญชี ATM สมุดบัญชี บัตร การเปลี่ยนที่อยู่ และการโอนเงิน",
    my: "ဘဏ်တွင် အကောင့်၊ ATM၊ ဘဏ်စာအုပ်၊ ကတ်၊ လိပ်စာပြောင်းခြင်းနှင့် ငွေလွှဲခြင်းအကြောင်း ပြောရန် လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ប្រើធនាគារ ដូចជា គណនី ATM សៀវភៅធនាគារ កាត ការផ្លាស់ប្ដូរអាសយដ្ឋាន និងការផ្ទេរប្រាក់។",
    ne: "बैंकमा खाता, ATM, पासबुक, कार्ड, ठेगाना परिवर्तन र रकम ट्रान्सफरबारे बोल्ने जापानी अभ्यास।",
    mn: "Банканд данс, ATM, хадгаламжийн дэвтэр, карт, хаяг солих, шилжүүлгийн талаар ярих япон хэлний дадлага.",
    si: "බැංකුවේ ගිණුම, ATM, පාස්බුක්, කාඩ්පත, ලිපිනය වෙනස් කිරීම සහ මුදල් මාරු කිරීම පිළිබඳ ජපන් භාෂා පුහුණුවකි.",
    bn: "ব্যাংকে অ্যাকাউন্ট, ATM, পাসবুক, কার্ড, ঠিকানা পরিবর্তন এবং টাকা স্থানান্তর নিয়ে জাপানি ভাষার অনুশীলন।",
    pt: "Prática de japonês para usar o banco: conta, ATM, caderneta, cartão, mudança de endereço e transferência.",
    es: "Práctica de japonés para usar el banco: cuenta, ATM, libreta, tarjeta, cambio de dirección y transferencia.",
    fr: "Entraînement en japonais pour utiliser une banque : compte, distributeur, livret, carte, changement d’adresse et virement.",
    ru: "Практика японского языка для банка: счёт, банкомат, банковская книжка, карта, смена адреса и перевод.",
    uk: "Практика японської мови для банку: рахунок, банкомат, банківська книжка, картка, зміна адреси та переказ."
};

const a1BankSpeakerNames = {
    staff: {
        ja: "銀行員", en: "Bank Staff", "zh-CN": "银行职员", "zh-TW": "銀行職員", ko: "은행 직원",
        vi: "Nhân viên ngân hàng", tl: "Staff ng bangko", id: "Staf bank", th: "พนักงานธนาคาร",
        my: "ဘဏ်ဝန်ထမ်း", km: "បុគ្គលិកធនាគារ", ne: "बैंक कर्मचारी", mn: "Банкны ажилтан",
        si: "බැංකු සේවකයා", bn: "ব্যাংক কর্মী", pt: "Funcionário do banco", es: "Empleado del banco",
        fr: "Employé de banque", ru: "Сотрудник банка", uk: "Працівник банку"
    },
    customer: {
        ja: "利用者", en: "Customer", "zh-CN": "顾客", "zh-TW": "顧客", ko: "고객",
        vi: "Khách hàng", tl: "Customer", id: "Nasabah", th: "ลูกค้า",
        my: "ဖောက်သည်", km: "អតិថិជន", ne: "ग्राहक", mn: "Үйлчлүүлэгч",
        si: "පාරිභෝගිකයා", bn: "গ্রাহক", pt: "Cliente", es: "Cliente",
        fr: "Client", ru: "Клиент", uk: "Клієнт"
    }
};

function makeA1BankDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a1_bank",
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
            speakerNames: a1BankSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a1BankContext,
        translations,
        dialogueTranslations
    };
}

const japeakA1BankData = [

    makeA1BankDialogue(
        "a1_bank_001",
        "口座を作る",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "口座を作りたいです。",
                target: "こうざをつくりたいです",
                ruby: "<ruby>口座<rt>こうざ</rt></ruby>を<ruby>作<rt>つく</rt></ruby>りたいです。",
                romaji: "Kōza o tsukuritai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "在留カードはありますか。",
                target: "ざいりゅうかーどはありますか",
                ruby: "<ruby>在留<rt>ざいりゅう</rt></ruby>カードはありますか。",
                romaji: "Zairyū kādo wa arimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "はい、あります。",
                target: "はい あります",
                ruby: "はい、あります。",
                romaji: "Hai, arimasu."
            }
        ],
        {
            ja: ["利用者：口座を作りたいです。", "銀行員：在留カードはありますか。", "利用者：はい、あります。"],
            en: ["Customer: I would like to open a bank account.", "Bank Staff: Do you have a residence card?", "Customer: Yes, I do."],
            "zh-CN": ["顾客：我想开银行账户。", "银行职员：您有在留卡吗？", "顾客：有。"],
            "zh-TW": ["顧客：我想開銀行帳戶。", "銀行職員：您有在留卡嗎？", "顧客：有。"],
            ko: ["고객: 계좌를 만들고 싶습니다.", "은행 직원: 재류카드가 있으신가요?", "고객: 네, 있습니다."],
            vi: ["Khách hàng: Tôi muốn mở tài khoản ngân hàng.", "Nhân viên ngân hàng: Quý khách có thẻ cư trú không ạ?", "Khách hàng: Vâng, có ạ."],
            tl: ["Customer: Gusto kong gumawa ng bank account.", "Staff ng bangko: May residence card po ba kayo?", "Customer: Opo, meron."],
            id: ["Nasabah: Saya ingin membuka rekening.", "Staf bank: Apakah Anda memiliki kartu izin tinggal?", "Nasabah: Ya, ada."],
            th: ["ลูกค้า: อยากเปิดบัญชีค่ะ/ครับ", "พนักงานธนาคาร: มีบัตรไซริวไหมคะ/ครับ", "ลูกค้า: มีค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဘဏ်အကောင့်ဖွင့်ချင်ပါတယ်။", "ဘဏ်ဝန်ထမ်း: နေထိုင်ခွင့်ကတ်ရှိပါသလား။", "ဖောက်သည်: ဟုတ်ကဲ့၊ ရှိပါတယ်။"],
            km: ["អតិថិជន: ខ្ញុំចង់បើកគណនីធនាគារ។", "បុគ្គលិកធនាគារ: តើអ្នកមានកាតស្នាក់នៅទេ?", "អតិថិជន: បាទ/ចាស មាន។"],
            ne: ["ग्राहक: म बैंक खाता खोल्न चाहन्छु।", "बैंक कर्मचारी: के तपाईंसँग रेसिडेन्स कार्ड छ?", "ग्राहक: छ।"],
            mn: ["Үйлчлүүлэгч: Би банкны данс нээлгэмээр байна.", "Банкны ажилтан: Танд оршин суух карт байгаа юу?", "Үйлчлүүлэгч: Тийм, байгаа."],
            si: ["පාරිභෝගිකයා: මට බැංකු ගිණුමක් විවෘත කරන්න ඕනේ.", "බැංකු සේවකයා: ඔබට residence card එකක් තියෙනවද?", "පාරිභෝගිකයා: ඔව්, තියෙනවා."],
            bn: ["গ্রাহক: আমি ব্যাংক অ্যাকাউন্ট খুলতে চাই।", "ব্যাংক কর্মী: আপনার কি রেসিডেন্স কার্ড আছে?", "গ্রাহক: হ্যাঁ, আছে।"],
            pt: ["Cliente: Quero abrir uma conta bancária.", "Funcionário do banco: Você tem cartão de residência?", "Cliente: Sim, tenho."],
            es: ["Cliente: Quiero abrir una cuenta bancaria.", "Empleado del banco: ¿Tiene tarjeta de residencia?", "Cliente: Sí, tengo."],
            fr: ["Client : Je voudrais ouvrir un compte bancaire.", "Employé de banque : Avez-vous une carte de résident ?", "Client : Oui, j’en ai une."],
            ru: ["Клиент: Я хочу открыть банковский счёт.", "Сотрудник банка: У вас есть карта резидента?", "Клиент: Да, есть."],
            uk: ["Клієнт: Я хочу відкрити банківський рахунок.", "Працівник банку: У вас є картка резидента?", "Клієнт: Так, є."]
        }
    ),

    makeA1BankDialogue(
        "a1_bank_002",
        "番号札を取る",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "どの番号札を取りますか。",
                target: "どのばんごうふだをとりますか",
                ruby: "どの<ruby>番号札<rt>ばんごうふだ</rt></ruby>を<ruby>取<rt>と</rt></ruby>りますか。",
                romaji: "Dono bangō-fuda o torimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "新しい口座はこちらです。",
                target: "あたらしいこうざはこちらです",
                ruby: "<ruby>新<rt>あたら</rt></ruby>しい<ruby>口座<rt>こうざ</rt></ruby>はこちらです。",
                romaji: "Atarashii kōza wa kochira desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "ここを押しますか。",
                target: "ここをおしますか",
                ruby: "ここを<ruby>押<rt>お</rt></ruby>しますか。",
                romaji: "Koko o oshimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "はい、押してください。",
                target: "はい おしてください",
                ruby: "はい、<ruby>押<rt>お</rt></ruby>してください。",
                romaji: "Hai, oshite kudasai."
            }
        ],
        {
            ja: ["利用者：どの番号札を取りますか。", "銀行員：新しい口座はこちらです。", "利用者：ここを押しますか。", "銀行員：はい、押してください。"],
            en: ["Customer: Which number ticket should I take?", "Bank Staff: For a new account, press here.", "Customer: Do I press here?", "Bank Staff: Yes, please press it."],
            "zh-CN": ["顾客：我应该取哪个号码牌？", "银行职员：新开户请按这里。", "顾客：按这里吗？", "银行职员：是的，请按。"],
            "zh-TW": ["顧客：我應該取哪個號碼牌？", "銀行職員：新開戶請按這裡。", "顧客：按這裡嗎？", "銀行職員：是的，請按。"],
            ko: ["고객: 어떤 번호표를 뽑아야 하나요?", "은행 직원: 새 계좌는 여기입니다.", "고객: 여기를 누르면 되나요?", "은행 직원: 네, 눌러 주세요."],
            vi: ["Khách hàng: Tôi lấy phiếu số nào ạ?", "Nhân viên ngân hàng: Tài khoản mới thì ở đây ạ.", "Khách hàng: Tôi bấm vào đây phải không ạ?", "Nhân viên ngân hàng: Vâng, xin hãy bấm."],
            tl: ["Customer: Aling number ticket po ang kukunin ko?", "Staff ng bangko: Para sa bagong account, dito po.", "Customer: Pipindutin ko po ba ito?", "Staff ng bangko: Opo, pindutin po."],
            id: ["Nasabah: Nomor antrean yang mana yang saya ambil?", "Staf bank: Untuk rekening baru, di sini.", "Nasabah: Apakah saya tekan di sini?", "Staf bank: Ya, silakan tekan."],
            th: ["ลูกค้า: ต้องกดบัตรคิวอันไหนคะ/ครับ", "พนักงานธนาคาร: สำหรับบัญชีใหม่กดตรงนี้ค่ะ/ครับ", "ลูกค้า: กดตรงนี้ใช่ไหมคะ/ครับ", "พนักงานธนาคาร: ใช่ค่ะ/ครับ กรุณากดค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဘယ်နံပါတ်ကတ်ကို ယူရပါမလဲ။", "ဘဏ်ဝန်ထမ်း: အကောင့်အသစ်အတွက် ဒီမှာပါ။", "ဖောက်သည်: ဒီနေရာကို နှိပ်ရပါသလား။", "ဘဏ်ဝန်ထမ်း: ဟုတ်ကဲ့၊ နှိပ်ပေးပါ။"],
            km: ["អតិថិជន: តើខ្ញុំត្រូវយកលេខរង់ចាំមួយណា?", "បុគ្គលិកធនាគារ: សម្រាប់គណនីថ្មី គឺនៅទីនេះ។", "អតិថិជន: តើខ្ញុំចុចទីនេះទេ?", "បុគ្គលិកធនាគារ: បាទ/ចាស សូមចុច។"],
            ne: ["ग्राहक: कुन नम्बर टिकट लिने हो?", "बैंक कर्मचारी: नयाँ खाताका लागि यहाँ हो।", "ग्राहक: यहाँ थिच्ने हो?", "बैंक कर्मचारी: हो, थिच्नुहोस्।"],
            mn: ["Үйлчлүүлэгч: Аль дугаарын тасалбарыг авах вэ?", "Банкны ажилтан: Шинэ дансны хувьд энд дарна.", "Үйлчлүүлэгч: Энд дарах уу?", "Банкны ажилтан: Тийм, дарна уу."],
            si: ["පාරිභෝගිකයා: මම මොන අංක ටිකට් එක ගන්නද?", "බැංකු සේවකයා: නව ගිණුම සඳහා මෙතැනයි.", "පාරිභෝගිකයා: මෙතැන ඔබන්නද?", "බැංකු සේවකයා: ඔව්, ඔබන්න."],
            bn: ["গ্রাহক: কোন নম্বর টিকিট নেব?", "ব্যাংক কর্মী: নতুন অ্যাকাউন্টের জন্য এখানে।", "গ্রাহক: এখানে চাপব?", "ব্যাংক কর্মী: হ্যাঁ, চাপুন।"],
            pt: ["Cliente: Qual senha devo pegar?", "Funcionário do banco: Para uma nova conta, é aqui.", "Cliente: Devo apertar aqui?", "Funcionário do banco: Sim, aperte aqui, por favor."],
            es: ["Cliente: ¿Qué número debo tomar?", "Empleado del banco: Para una cuenta nueva, aquí.", "Cliente: ¿Presiono aquí?", "Empleado del banco: Sí, presiónelo, por favor."],
            fr: ["Client : Quel ticket dois-je prendre ?", "Employé de banque : Pour un nouveau compte, c’est ici.", "Client : J’appuie ici ?", "Employé de banque : Oui, appuyez, s’il vous plaît."],
            ru: ["Клиент: Какой талон мне взять?", "Сотрудник банка: Для нового счёта нажмите здесь.", "Клиент: Нажать здесь?", "Сотрудник банка: Да, нажмите, пожалуйста."],
            uk: ["Клієнт: Який талон мені взяти?", "Працівник банку: Для нового рахунку натисніть тут.", "Клієнт: Натиснути тут?", "Працівник банку: Так, натисніть, будь ласка."]
        }
    ),

    makeA1BankDialogue(
        "a1_bank_003",
        "ATMでお金を下ろす",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "ATMでお金を下ろしたいです。",
                target: "えーてぃーえむでおかねをおろしたいです",
                ruby: "ATMでお<ruby>金<rt>かね</rt></ruby>を<ruby>下<rt>お</rt></ruby>ろしたいです。",
                romaji: "Ētīemu de okane o oroshitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "カードを入れてください。",
                target: "かーどをいれてください",
                ruby: "カードを<ruby>入<rt>い</rt></ruby>れてください。",
                romaji: "Kādo o irete kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "暗証番号を入れますか。",
                target: "あんしょうばんごうをいれますか",
                ruby: "<ruby>暗証番号<rt>あんしょうばんごう</rt></ruby>を<ruby>入<rt>い</rt></ruby>れますか。",
                romaji: "Anshō bangō o iremasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "はい、四けたの番号です。",
                target: "はい よんけたのばんごうです",
                ruby: "はい、<ruby>四<rt>よん</rt></ruby>けたの<ruby>番号<rt>ばんごう</rt></ruby>です。",
                romaji: "Hai, yon-keta no bangō desu."
            }
        ],
        {
            ja: ["利用者：ATMでお金を下ろしたいです。", "銀行員：カードを入れてください。", "利用者：暗証番号を入れますか。", "銀行員：はい、四けたの番号です。"],
            en: ["Customer: I want to withdraw money from the ATM.", "Bank Staff: Please insert your card.", "Customer: Do I enter my PIN?", "Bank Staff: Yes, it is a four-digit number."],
            "zh-CN": ["顾客：我想在ATM取钱。", "银行职员：请插入银行卡。", "顾客：要输入密码吗？", "银行职员：是的，是四位数字。"],
            "zh-TW": ["顧客：我想在ATM領錢。", "銀行職員：請插入金融卡。", "顧客：要輸入密碼嗎？", "銀行職員：是的，是四位數字。"],
            ko: ["고객: ATM에서 돈을 찾고 싶습니다.", "은행 직원: 카드를 넣어 주세요.", "고객: 비밀번호를 입력하나요?", "은행 직원: 네, 네 자리 번호입니다."],
            vi: ["Khách hàng: Tôi muốn rút tiền ở ATM.", "Nhân viên ngân hàng: Xin hãy cho thẻ vào.", "Khách hàng: Tôi nhập mã PIN phải không ạ?", "Nhân viên ngân hàng: Vâng, là số có bốn chữ số."],
            tl: ["Customer: Gusto kong mag-withdraw ng pera sa ATM.", "Staff ng bangko: Ipasok po ang card.", "Customer: Ilalagay ko po ba ang PIN?", "Staff ng bangko: Opo, apat na digit po iyon."],
            id: ["Nasabah: Saya ingin menarik uang di ATM.", "Staf bank: Masukkan kartu, silakan.", "Nasabah: Apakah saya memasukkan PIN?", "Staf bank: Ya, nomor empat digit."],
            th: ["ลูกค้า: อยากถอนเงินที่ ATM ค่ะ/ครับ", "พนักงานธนาคาร: กรุณาใส่บัตรค่ะ/ครับ", "ลูกค้า: ใส่รหัสใช่ไหมคะ/ครับ", "พนักงานธนาคาร: ใช่ค่ะ/ครับ เป็นเลขสี่หลักค่ะ/ครับ"],
            my: ["ဖောက်သည်: ATM မှာ ငွေထုတ်ချင်ပါတယ်။", "ဘဏ်ဝန်ထမ်း: ကတ်ကို ထည့်ပေးပါ။", "ဖောက်သည်: PIN နံပါတ်ထည့်ရပါသလား။", "ဘဏ်ဝန်ထမ်း: ဟုတ်ကဲ့၊ ဂဏန်းလေးလုံးပါ။"],
            km: ["អតិថិជន: ខ្ញុំចង់ដកប្រាក់ពី ATM។", "បុគ្គលិកធនាគារ: សូមដាក់កាត។", "អតិថិជន: តើខ្ញុំបញ្ចូលលេខសម្ងាត់ទេ?", "បុគ្គលិកធនាគារ: បាទ/ចាស ជាលេខបួនខ្ទង់។"],
            ne: ["ग्राहक: म ATM बाट पैसा निकाल्न चाहन्छु।", "बैंक कर्मचारी: कार्ड हाल्नुहोस्।", "ग्राहक: PIN नम्बर हाल्ने हो?", "बैंक कर्मचारी: हो, चार अंकको नम्बर हो।"],
            mn: ["Үйлчлүүлэгч: Би ATM-ээс мөнгө авахыг хүсэж байна.", "Банкны ажилтан: Картаа хийнэ үү.", "Үйлчлүүлэгч: Нууц дугаараа оруулах уу?", "Банкны ажилтан: Тийм, дөрвөн оронтой дугаар."],
            si: ["පාරිභෝගිකයා: මට ATM එකෙන් මුදල් ගන්න ඕනේ.", "බැංකු සේවකයා: කාඩ්පත ඇතුල් කරන්න.", "පාරිභෝගිකයා: රහස් අංකය දාන්නද?", "බැංකු සේවකයා: ඔව්, අංක හතරක අංකයක්."],
            bn: ["গ্রাহক: আমি ATM থেকে টাকা তুলতে চাই।", "ব্যাংক কর্মী: কার্ড ঢোকান।", "গ্রাহক: PIN নম্বর দেব?", "ব্যাংক কর্মী: হ্যাঁ, চার অঙ্কের নম্বর।"],
            pt: ["Cliente: Quero sacar dinheiro no ATM.", "Funcionário do banco: Insira o cartão, por favor.", "Cliente: Digito a senha?", "Funcionário do banco: Sim, é um número de quatro dígitos."],
            es: ["Cliente: Quiero retirar dinero del ATM.", "Empleado del banco: Inserte la tarjeta, por favor.", "Cliente: ¿Ingreso el PIN?", "Empleado del banco: Sí, es un número de cuatro dígitos."],
            fr: ["Client : Je veux retirer de l’argent au distributeur.", "Employé de banque : Insérez votre carte, s’il vous plaît.", "Client : Dois-je entrer le code ?", "Employé de banque : Oui, c’est un numéro à quatre chiffres."],
            ru: ["Клиент: Я хочу снять деньги в банкомате.", "Сотрудник банка: Вставьте карту, пожалуйста.", "Клиент: Ввести PIN-код?", "Сотрудник банка: Да, это четырёхзначный номер."],
            uk: ["Клієнт: Я хочу зняти гроші в банкоматі.", "Працівник банку: Вставте картку, будь ласка.", "Клієнт: Ввести PIN-код?", "Працівник банку: Так, це чотиризначний номер."]
        }
    ),

    makeA1BankDialogue(
        "a1_bank_004",
        "通帳を記帳する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "通帳を記帳したいです。",
                target: "つうちょうをきちょうしたいです",
                ruby: "<ruby>通帳<rt>つうちょう</rt></ruby>を<ruby>記帳<rt>きちょう</rt></ruby>したいです。",
                romaji: "Tsūchō o kichō shitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "あちらの機械でできます。",
                target: "あちらのきかいでできます",
                ruby: "あちらの<ruby>機械<rt>きかい</rt></ruby>でできます。",
                romaji: "Achira no kikai de dekimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "向きはこれでいいですか。",
                target: "むきはこれでいいですか",
                ruby: "<ruby>向<rt>む</rt></ruby>きはこれでいいですか。",
                romaji: "Muki wa kore de ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "はい、その向きで入れてください。",
                target: "はい そのむきでいれてください",
                ruby: "はい、その<ruby>向<rt>む</rt></ruby>きで<ruby>入<rt>い</rt></ruby>れてください。",
                romaji: "Hai, sono muki de irete kudasai."
            }
        ],
        {
            ja: ["利用者：通帳を記帳したいです。", "銀行員：あちらの機械でできます。", "利用者：向きはこれでいいですか。", "銀行員：はい、その向きで入れてください。"],
            en: ["Customer: I want to update my bankbook.", "Bank Staff: You can do it with that machine.", "Customer: Is this the correct direction?", "Bank Staff: Yes, please insert it that way."],
            "zh-CN": ["顾客：我想补登存折。", "银行职员：可以用那边的机器办理。", "顾客：这个方向可以吗？", "银行职员：是的，请按这个方向放进去。"],
            "zh-TW": ["顧客：我想補登存摺。", "銀行職員：可以用那邊的機器辦理。", "顧客：這個方向可以嗎？", "銀行職員：是的，請按這個方向放進去。"],
            ko: ["고객: 통장을 정리하고 싶습니다.", "은행 직원: 저쪽 기계에서 할 수 있습니다.", "고객: 방향은 이대로 괜찮나요?", "은행 직원: 네, 그 방향으로 넣어 주세요."],
            vi: ["Khách hàng: Tôi muốn cập nhật sổ ngân hàng.", "Nhân viên ngân hàng: Có thể làm ở máy kia.", "Khách hàng: Hướng này đúng không ạ?", "Nhân viên ngân hàng: Vâng, xin hãy cho vào theo hướng đó."],
            tl: ["Customer: Gusto kong i-update ang bankbook.", "Staff ng bangko: Pwede po sa machine doon.", "Customer: Tama po ba ang direksyon nito?", "Staff ng bangko: Opo, ipasok po sa direksyong iyon."],
            id: ["Nasabah: Saya ingin memperbarui buku tabungan.", "Staf bank: Bisa dilakukan di mesin di sana.", "Nasabah: Apakah arah ini benar?", "Staf bank: Ya, masukkan dengan arah itu."],
            th: ["ลูกค้า: อยากอัปเดตสมุดบัญชีค่ะ/ครับ", "พนักงานธนาคาร: ทำได้ที่เครื่องตรงนั้นค่ะ/ครับ", "ลูกค้า: ใส่ทิศทางนี้ถูกไหมคะ/ครับ", "พนักงานธนาคาร: ใช่ค่ะ/ครับ ใส่ตามทิศทางนั้นค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဘဏ်စာအုပ်ကို အပ်ဒိတ်လုပ်ချင်ပါတယ်။", "ဘဏ်ဝန်ထမ်း: ဟိုဘက်က စက်မှာ လုပ်လို့ရပါတယ်။", "ဖောက်သည်: ဒီဦးတည်ချက်နဲ့ ရပါသလား။", "ဘဏ်ဝန်ထမ်း: ဟုတ်ကဲ့၊ အဲဒီဦးတည်ချက်နဲ့ ထည့်ပေးပါ။"],
            km: ["អតិថិជន: ខ្ញុំចង់ធ្វើបច្ចុប្បន្នភាពសៀវភៅធនាគារ។", "បុគ្គលិកធនាគារ: អាចធ្វើបាននៅម៉ាស៊ីនខាងនោះ។", "អតិថិជន: ទិសនេះត្រឹមត្រូវទេ?", "បុគ្គលិកធនាគារ: បាទ/ចាស សូមដាក់តាមទិសនោះ។"],
            ne: ["ग्राहक: म पासबुक अपडेट गर्न चाहन्छु।", "बैंक कर्मचारी: उता भएको मेसिनमा गर्न सकिन्छ।", "ग्राहक: यो दिशा ठीक छ?", "बैंक कर्मचारी: हो, त्यही दिशामा हाल्नुहोस्।"],
            mn: ["Үйлчлүүлэгч: Би хадгаламжийн дэвтрээ шинэчлэх гэсэн юм.", "Банкны ажилтан: Тэр машин дээр хийж болно.", "Үйлчлүүлэгч: Энэ чиглэл зөв үү?", "Банкны ажилтан: Тийм, тэр чиглэлээр нь хийнэ үү."],
            si: ["පාරිභෝගිකයා: මට පාස්බුක් එක update කරන්න ඕනේ.", "බැංකු සේවකයා: අතන තියෙන යන්ත්‍රයෙන් පුළුවන්.", "පාරිභෝගිකයා: මේ දිශාව හරිද?", "බැංකු සේවකයා: ඔව්, ඒ දිශාවෙන් ඇතුල් කරන්න."],
            bn: ["গ্রাহক: আমি পাসবুক আপডেট করতে চাই।", "ব্যাংক কর্মী: ওদিকের মেশিনে করা যাবে।", "গ্রাহক: এই দিকটা ঠিক আছে?", "ব্যাংক কর্মী: হ্যাঁ, ওই দিকেই ঢোকান।"],
            pt: ["Cliente: Quero atualizar minha caderneta bancária.", "Funcionário do banco: Você pode fazer naquela máquina.", "Cliente: Esta direção está certa?", "Funcionário do banco: Sim, insira desse jeito."],
            es: ["Cliente: Quiero actualizar mi libreta bancaria.", "Empleado del banco: Puede hacerlo en aquella máquina.", "Cliente: ¿Esta dirección está bien?", "Empleado del banco: Sí, insértela en esa dirección."],
            fr: ["Client : Je veux mettre à jour mon livret bancaire.", "Employé de banque : Vous pouvez le faire avec cette machine là-bas.", "Client : Ce sens est correct ?", "Employé de banque : Oui, insérez-le dans ce sens."],
            ru: ["Клиент: Я хочу обновить банковскую книжку.", "Сотрудник банка: Это можно сделать на том аппарате.", "Клиент: Вставлять вот так?", "Сотрудник банка: Да, вставьте в этом направлении."],
            uk: ["Клієнт: Я хочу оновити банківську книжку.", "Працівник банку: Це можна зробити на тому апараті.", "Клієнт: Вставляти ось так?", "Працівник банку: Так, вставте в цьому напрямку."]
        }
    ),

    makeA1BankDialogue(
        "a1_bank_005",
        "キャッシュカードをなくした",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "キャッシュカードをなくしました。",
                target: "きゃっしゅかーどをなくしました",
                ruby: "キャッシュカードをなくしました。",
                romaji: "Kyasshu kādo o nakushimashita."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "すぐにカードを止めます。",
                target: "すぐにかーどをとめます",
                ruby: "すぐにカードを<ruby>止<rt>と</rt></ruby>めます。",
                romaji: "Sugu ni kādo o tomemasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "お名前を教えてください。",
                target: "おなまえをおしえてください",
                ruby: "お<ruby>名前<rt>なまえ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "O-namae o oshiete kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "はい、こちらです。",
                target: "はい こちらです",
                ruby: "はい、こちらです。",
                romaji: "Hai, kochira desu."
            }
        ],
        {
            ja: ["利用者：キャッシュカードをなくしました。", "銀行員：すぐにカードを止めます。", "銀行員：お名前を教えてください。", "利用者：はい、こちらです。"],
            en: ["Customer: I lost my cash card.", "Bank Staff: We will stop the card immediately.", "Bank Staff: Please tell me your name.", "Customer: Yes, here it is."],
            "zh-CN": ["顾客：我把银行卡弄丢了。", "银行职员：我们马上停用卡片。", "银行职员：请告诉我您的名字。", "顾客：好的，在这里。"],
            "zh-TW": ["顧客：我把金融卡弄丟了。", "銀行職員：我們馬上停用卡片。", "銀行職員：請告訴我您的名字。", "顧客：好的，在這裡。"],
            ko: ["고객: 현금카드를 잃어버렸습니다.", "은행 직원: 바로 카드를 정지하겠습니다.", "은행 직원: 성함을 알려 주세요.", "고객: 네, 여기 있습니다."],
            vi: ["Khách hàng: Tôi làm mất thẻ tiền mặt.", "Nhân viên ngân hàng: Chúng tôi sẽ khóa thẻ ngay.", "Nhân viên ngân hàng: Xin cho biết tên của quý khách.", "Khách hàng: Vâng, đây ạ."],
            tl: ["Customer: Nawala po ang cash card ko.", "Staff ng bangko: Ihihinto po namin agad ang card.", "Staff ng bangko: Pakisabi po ang pangalan ninyo.", "Customer: Opo, ito po."],
            id: ["Nasabah: Saya kehilangan kartu ATM.", "Staf bank: Kami akan segera memblokir kartu.", "Staf bank: Tolong beri tahu nama Anda.", "Nasabah: Ya, ini."],
            th: ["ลูกค้า: ทำบัตรเงินสดหายค่ะ/ครับ", "พนักงานธนาคาร: จะระงับบัตรทันทีค่ะ/ครับ", "พนักงานธนาคาร: กรุณาบอกชื่อค่ะ/ครับ", "ลูกค้า: ค่ะ/ครับ นี่ค่ะ/ครับ"],
            my: ["ဖောက်သည်: ငွေထုတ်ကတ်ပျောက်သွားပါတယ်။", "ဘဏ်ဝန်ထမ်း: ကတ်ကို ချက်ချင်း ပိတ်ပါမယ်။", "ဘဏ်ဝန်ထမ်း: နာမည်ပြောပြပေးပါ။", "ဖောက်သည်: ဟုတ်ကဲ့၊ ဒီမှာပါ။"],
            km: ["អតិថិជន: ខ្ញុំបានបាត់កាតធនាគារ។", "បុគ្គលិកធនាគារ: យើងនឹងបិទកាតភ្លាមៗ។", "បុគ្គលិកធនាគារ: សូមប្រាប់ឈ្មោះរបស់អ្នក។", "អតិថិជន: បាទ/ចាស នេះ។"],
            ne: ["ग्राहक: मैले क्यास कार्ड हराएँ।", "बैंक कर्मचारी: हामी तुरुन्त कार्ड रोक्छौं।", "बैंक कर्मचारी: आफ्नो नाम भन्नुहोस्।", "ग्राहक: हुन्छ, यो हो।"],
            mn: ["Үйлчлүүлэгч: Би бэлэн мөнгөний картаа алдчихлаа.", "Банкны ажилтан: Бид картыг шууд зогсооно.", "Банкны ажилтан: Нэрээ хэлнэ үү.", "Үйлчлүүлэгч: Тийм, энд байна."],
            si: ["පාරිභෝගිකයා: මගේ cash card එක නැතිවුණා.", "බැංකු සේවකයා: අපි වහාම කාඩ්පත නවත්වනවා.", "බැංකු සේවකයා: ඔබේ නම කියන්න.", "පාරිභෝගිකයා: ඔව්, මෙන්න."],
            bn: ["গ্রাহক: আমি ক্যাশ কার্ড হারিয়েছি।", "ব্যাংক কর্মী: আমরা এখনই কার্ড বন্ধ করব।", "ব্যাংক কর্মী: আপনার নাম বলুন।", "গ্রাহক: হ্যাঁ, এই নিন।"],
            pt: ["Cliente: Perdi meu cartão bancário.", "Funcionário do banco: Vamos bloquear o cartão imediatamente.", "Funcionário do banco: Diga seu nome, por favor.", "Cliente: Sim, aqui está."],
            es: ["Cliente: Perdí mi tarjeta bancaria.", "Empleado del banco: Vamos a bloquear la tarjeta inmediatamente.", "Empleado del banco: Dígame su nombre, por favor.", "Cliente: Sí, aquí está."],
            fr: ["Client : J’ai perdu ma carte bancaire.", "Employé de banque : Nous allons bloquer la carte immédiatement.", "Employé de banque : Dites-moi votre nom, s’il vous plaît.", "Client : Oui, le voici."],
            ru: ["Клиент: Я потерял банковскую карту.", "Сотрудник банка: Мы сразу заблокируем карту.", "Сотрудник банка: Назовите ваше имя, пожалуйста.", "Клиент: Да, вот."],
            uk: ["Клієнт: Я загубив банківську картку.", "Працівник банку: Ми одразу заблокуємо картку.", "Працівник банку: Скажіть ваше ім’я, будь ласка.", "Клієнт: Так, ось."]
        }
    ),

    makeA1BankDialogue(
        "a1_bank_006",
        "住所を変更する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "住所を変えたいです。",
                target: "じゅうしょをかえたいです",
                ruby: "<ruby>住所<rt>じゅうしょ</rt></ruby>を<ruby>変<rt>か</rt></ruby>えたいです。",
                romaji: "Jūsho o kaetai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "新しい住所を書いてください。",
                target: "あたらしいじゅうしょをかいてください",
                ruby: "<ruby>新<rt>あたら</rt></ruby>しい<ruby>住所<rt>じゅうしょ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Atarashii jūsho o kaite kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "ここに書きますか。",
                target: "ここにかきますか",
                ruby: "ここに<ruby>書<rt>か</rt></ruby>きますか。",
                romaji: "Koko ni kakimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "はい、ここにお願いします。",
                target: "はい ここにおねがいします",
                ruby: "はい、ここにお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hai, koko ni onegai shimasu."
            }
        ],
        {
            ja: ["利用者：住所を変えたいです。", "銀行員：新しい住所を書いてください。", "利用者：ここに書きますか。", "銀行員：はい、ここにお願いします。"],
            en: ["Customer: I want to change my address.", "Bank Staff: Please write your new address.", "Customer: Do I write it here?", "Bank Staff: Yes, here please."],
            "zh-CN": ["顾客：我想更改地址。", "银行职员：请填写新的地址。", "顾客：写在这里吗？", "银行职员：是的，请写在这里。"],
            "zh-TW": ["顧客：我想更改地址。", "銀行職員：請填寫新的地址。", "顧客：寫在這裡嗎？", "銀行職員：是的，請寫在這裡。"],
            ko: ["고객: 주소를 변경하고 싶습니다.", "은행 직원: 새 주소를 써 주세요.", "고객: 여기에 쓰나요?", "은행 직원: 네, 여기에 부탁드립니다."],
            vi: ["Khách hàng: Tôi muốn đổi địa chỉ.", "Nhân viên ngân hàng: Xin hãy viết địa chỉ mới.", "Khách hàng: Tôi viết ở đây phải không ạ?", "Nhân viên ngân hàng: Vâng, ở đây ạ."],
            tl: ["Customer: Gusto kong palitan ang address ko.", "Staff ng bangko: Pakisulat po ang bagong address.", "Customer: Dito po ba isusulat?", "Staff ng bangko: Opo, dito po."],
            id: ["Nasabah: Saya ingin mengubah alamat.", "Staf bank: Tuliskan alamat baru Anda.", "Nasabah: Apakah saya menulis di sini?", "Staf bank: Ya, di sini."],
            th: ["ลูกค้า: อยากเปลี่ยนที่อยู่ค่ะ/ครับ", "พนักงานธนาคาร: กรุณาเขียนที่อยู่ใหม่ค่ะ/ครับ", "ลูกค้า: เขียนตรงนี้ใช่ไหมคะ/ครับ", "พนักงานธนาคาร: ใช่ค่ะ/ครับ ตรงนี้ค่ะ/ครับ"],
            my: ["ဖောက်သည်: လိပ်စာပြောင်းချင်ပါတယ်။", "ဘဏ်ဝန်ထမ်း: လိပ်စာအသစ်ကို ရေးပေးပါ။", "ဖောက်သည်: ဒီမှာရေးရပါသလား။", "ဘဏ်ဝန်ထမ်း: ဟုတ်ကဲ့၊ ဒီမှာお願いします။"],
            km: ["អតិថិជន: ខ្ញុំចង់ផ្លាស់ប្ដូរអាសយដ្ឋាន។", "បុគ្គលិកធនាគារ: សូមសរសេរអាសយដ្ឋានថ្មី។", "អតិថិជន: តើខ្ញុំសរសេរនៅទីនេះទេ?", "បុគ្គលិកធនាគារ: បាទ/ចាស សូមសរសេរនៅទីនេះ។"],
            ne: ["ग्राहक: म ठेगाना परिवर्तन गर्न चाहन्छु।", "बैंक कर्मचारी: नयाँ ठेगाना लेख्नुहोस्।", "ग्राहक: यहाँ लेख्ने हो?", "बैंक कर्मचारी: हो, यहाँ लेख्नुहोस्।"],
            mn: ["Үйлчлүүлэгч: Би хаягаа өөрчилмөөр байна.", "Банкны ажилтан: Шинэ хаягаа бичнэ үү.", "Үйлчлүүлэгч: Энд бичих үү?", "Банкны ажилтан: Тийм, энд бичнэ үү."],
            si: ["පාරිභෝගිකයා: මට ලිපිනය වෙනස් කරන්න ඕනේ.", "බැංකු සේවකයා: නව ලිපිනය ලියන්න.", "පාරිභෝගිකයා: මෙතැන ලියනවද?", "බැංකු සේවකයා: ඔව්, මෙතැන ලියන්න."],
            bn: ["গ্রাহক: আমি ঠিকানা পরিবর্তন করতে চাই।", "ব্যাংক কর্মী: নতুন ঠিকানা লিখুন।", "গ্রাহক: এখানে লিখব?", "ব্যাংক কর্মী: হ্যাঁ, এখানে লিখুন।"],
            pt: ["Cliente: Quero mudar meu endereço.", "Funcionário do banco: Escreva seu novo endereço, por favor.", "Cliente: Escrevo aqui?", "Funcionário do banco: Sim, aqui, por favor."],
            es: ["Cliente: Quiero cambiar mi dirección.", "Empleado del banco: Escriba su nueva dirección, por favor.", "Cliente: ¿La escribo aquí?", "Empleado del banco: Sí, aquí, por favor."],
            fr: ["Client : Je veux changer mon adresse.", "Employé de banque : Veuillez écrire votre nouvelle adresse.", "Client : Je l’écris ici ?", "Employé de banque : Oui, ici, s’il vous plaît."],
            ru: ["Клиент: Я хочу изменить адрес.", "Сотрудник банка: Напишите новый адрес, пожалуйста.", "Клиент: Писать здесь?", "Сотрудник банка: Да, здесь, пожалуйста."],
            uk: ["Клієнт: Я хочу змінити адресу.", "Працівник банку: Напишіть нову адресу, будь ласка.", "Клієнт: Писати тут?", "Працівник банку: Так, тут, будь ласка."]
        }
    ),

    makeA1BankDialogue(
        "a1_bank_007",
        "振り込みをする",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "振り込みをしたいです。",
                target: "ふりこみをしたいです",
                ruby: "<ruby>振<rt>ふ</rt></ruby>り<ruby>込<rt>こ</rt></ruby>みをしたいです。",
                romaji: "Furikomi o shitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "相手の口座番号はありますか。",
                target: "あいてのこうざばんごうはありますか",
                ruby: "<ruby>相手<rt>あいて</rt></ruby>の<ruby>口座番号<rt>こうざばんごう</rt></ruby>はありますか。",
                romaji: "Aite no kōza bangō wa arimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "はい、メモがあります。",
                target: "はい めもがあります",
                ruby: "はい、メモがあります。",
                romaji: "Hai, memo ga arimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "では、画面に入力してください。",
                target: "では がめんににゅうりょくしてください",
                ruby: "では、<ruby>画面<rt>がめん</rt></ruby>に<ruby>入力<rt>にゅうりょく</rt></ruby>してください。",
                romaji: "Dewa, gamen ni nyūryoku shite kudasai."
            }
        ],
        {
            ja: ["利用者：振り込みをしたいです。", "銀行員：相手の口座番号はありますか。", "利用者：はい、メモがあります。", "銀行員：では、画面に入力してください。"],
            en: ["Customer: I want to make a bank transfer.", "Bank Staff: Do you have the other person's account number?", "Customer: Yes, I have a note.", "Bank Staff: Then please enter it on the screen."],
            "zh-CN": ["顾客：我想转账。", "银行职员：您有对方的账号吗？", "顾客：有，我有备忘录。", "银行职员：那么，请在屏幕上输入。"],
            "zh-TW": ["顧客：我想轉帳。", "銀行職員：您有對方的帳號嗎？", "顧客：有，我有備忘錄。", "銀行職員：那麼，請在螢幕上輸入。"],
            ko: ["고객: 송금을 하고 싶습니다.", "은행 직원: 상대방 계좌번호가 있으신가요?", "고객: 네, 메모가 있습니다.", "은행 직원: 그럼 화면에 입력해 주세요."],
            vi: ["Khách hàng: Tôi muốn chuyển khoản.", "Nhân viên ngân hàng: Quý khách có số tài khoản của người nhận không ạ?", "Khách hàng: Vâng, tôi có ghi chú.", "Nhân viên ngân hàng: Vậy xin nhập vào màn hình."],
            tl: ["Customer: Gusto kong mag-bank transfer.", "Staff ng bangko: May account number po ba ng tatanggap?", "Customer: Opo, may note po ako.", "Staff ng bangko: Kung ganoon, ilagay po sa screen."],
            id: ["Nasabah: Saya ingin melakukan transfer.", "Staf bank: Apakah Anda memiliki nomor rekening penerima?", "Nasabah: Ya, saya punya catatan.", "Staf bank: Kalau begitu, masukkan di layar."],
            th: ["ลูกค้า: อยากโอนเงินค่ะ/ครับ", "พนักงานธนาคาร: มีเลขบัญชีของผู้รับไหมคะ/ครับ", "ลูกค้า: มีค่ะ/ครับ มีจดไว้ค่ะ/ครับ", "พนักงานธนาคาร: งั้นกรุณากรอกที่หน้าจอค่ะ/ครับ"],
            my: ["ဖောက်သည်: ငွေလွှဲချင်ပါတယ်။", "ဘဏ်ဝန်ထမ်း: လက်ခံသူရဲ့ အကောင့်နံပါတ်ရှိပါသလား။", "ဖောက်သည်: ဟုတ်ကဲ့၊ မှတ်စုရှိပါတယ်။", "ဘဏ်ဝန်ထမ်း: ဒါဆို စခရင်မှာ ထည့်ပေးပါ။"],
            km: ["អតិថិជន: ខ្ញុំចង់ផ្ទេរប្រាក់។", "បុគ្គលិកធនាគារ: តើអ្នកមានលេខគណនីរបស់អ្នកទទួលទេ?", "អតិថិជន: បាទ/ចាស ខ្ញុំមានកំណត់ត្រា។", "បុគ្គលិកធនាគារ: ដូច្នេះ សូមបញ្ចូលនៅលើអេក្រង់។"],
            ne: ["ग्राहक: म रकम ट्रान्सफर गर्न चाहन्छु।", "बैंक कर्मचारी: के तपाईंलाई अर्को व्यक्तिको खाता नम्बर छ?", "ग्राहक: छ, मैले नोट गरेको छु।", "बैंक कर्मचारी: त्यसो भए, स्क्रिनमा हाल्नुहोस्।"],
            mn: ["Үйлчлүүлэгч: Би шилжүүлэг хиймээр байна.", "Банкны ажилтан: Нөгөө хүний дансны дугаар байгаа юу?", "Үйлчлүүлэгч: Тийм, тэмдэглэл байна.", "Банкны ажилтан: Тэгвэл дэлгэц дээр оруулна уу."],
            si: ["පාරිභෝගිකයා: මට මුදල් මාරු කරන්න ඕනේ.", "බැංකු සේවකයා: අනෙක් පුද්ගලයාගේ ගිණුම් අංකය තියෙනවද?", "පාරිභෝගිකයා: ඔව්, සටහනක් තියෙනවා.", "බැංකු සේවකයා: එහෙනම් තිරයට ඇතුල් කරන්න."],
            bn: ["গ্রাহক: আমি টাকা ট্রান্সফার করতে চাই।", "ব্যাংক কর্মী: আপনার কাছে অন্য ব্যক্তির অ্যাকাউন্ট নম্বর আছে?", "গ্রাহক: হ্যাঁ, আমার নোট আছে।", "ব্যাংক কর্মী: তাহলে স্ক্রিনে লিখুন।"],
            pt: ["Cliente: Quero fazer uma transferência.", "Funcionário do banco: Você tem o número da conta da outra pessoa?", "Cliente: Sim, tenho uma anotação.", "Funcionário do banco: Então digite na tela, por favor."],
            es: ["Cliente: Quiero hacer una transferencia.", "Empleado del banco: ¿Tiene el número de cuenta de la otra persona?", "Cliente: Sí, tengo una nota.", "Empleado del banco: Entonces ingréselo en la pantalla, por favor."],
            fr: ["Client : Je veux faire un virement.", "Employé de banque : Avez-vous le numéro de compte de l’autre personne ?", "Client : Oui, j’ai une note.", "Employé de banque : Alors entrez-le sur l’écran, s’il vous plaît."],
            ru: ["Клиент: Я хочу сделать перевод.", "Сотрудник банка: У вас есть номер счёта получателя?", "Клиент: Да, у меня есть запись.", "Сотрудник банка: Тогда введите его на экране."],
            uk: ["Клієнт: Я хочу зробити переказ.", "Працівник банку: У вас є номер рахунку отримувача?", "Клієнт: Так, у мене є запис.", "Працівник банку: Тоді введіть його на екрані."]
        }
    ),

    makeA1BankDialogue(
        "a1_bank_008",
        "手数料を確認する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "手数料はかかりますか。",
                target: "てすうりょうはかかりますか",
                ruby: "<ruby>手数料<rt>てすうりょう</rt></ruby>はかかりますか。",
                romaji: "Tesūryō wa kakarimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "銀行員",
                line: "はい、220円かかります。",
                target: "はい にひゃくにじゅうえんかかります",
                ruby: "はい、220<ruby>円<rt>えん</rt></ruby>かかります。",
                romaji: "Hai, nihyaku nijū en kakarimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "わかりました。続けます。",
                target: "わかりました つづけます",
                ruby: "わかりました。<ruby>続<rt>つづ</rt></ruby>けます。",
                romaji: "Wakarimashita. Tsuzukemasu."
            }
        ],
        {
            ja: ["利用者：手数料はかかりますか。", "銀行員：はい、220円かかります。", "利用者：わかりました。続けます。"],
            en: ["Customer: Is there a fee?", "Bank Staff: Yes, there is a 220 yen fee.", "Customer: I understand. I will continue."],
            "zh-CN": ["顾客：需要手续费吗？", "银行职员：是的，需要220日元。", "顾客：明白了。继续办理。"],
            "zh-TW": ["顧客：需要手續費嗎？", "銀行職員：是的，需要220日圓。", "顧客：明白了。繼續辦理。"],
            ko: ["고객: 수수료가 있나요?", "은행 직원: 네, 220엔이 듭니다.", "고객: 알겠습니다. 계속하겠습니다."],
            vi: ["Khách hàng: Có mất phí không ạ?", "Nhân viên ngân hàng: Vâng, mất 220 yên.", "Khách hàng: Tôi hiểu rồi. Tôi sẽ tiếp tục."],
            tl: ["Customer: May fee po ba?", "Staff ng bangko: Opo, may fee na 220 yen.", "Customer: Naiintindihan ko po. Itutuloy ko po."],
            id: ["Nasabah: Apakah ada biaya administrasi?", "Staf bank: Ya, biayanya 220 yen.", "Nasabah: Saya mengerti. Saya lanjutkan."],
            th: ["ลูกค้า: มีค่าธรรมเนียมไหมคะ/ครับ", "พนักงานธนาคาร: มีค่ะ/ครับ 220 เยนค่ะ/ครับ", "ลูกค้า: เข้าใจแล้วค่ะ/ครับ ดำเนินการต่อค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဝန်ဆောင်ခကျပါသလား။", "ဘဏ်ဝန်ထမ်း: ဟုတ်ကဲ့၊ 220 ယန်းကျပါတယ်။", "ဖောက်သည်: နားလည်ပါပြီ။ ဆက်လုပ်ပါမယ်။"],
            km: ["អតិថិជន: តើមានថ្លៃសេវាទេ?", "បុគ្គលិកធនាគារ: មាន ថ្លៃ 220 យ៉េន។", "អតិថិជន: ខ្ញុំយល់ហើយ។ ខ្ញុំនឹងបន្ត។"],
            ne: ["ग्राहक: के शुल्क लाग्छ?", "बैंक कर्मचारी: हो, 220 येन लाग्छ।", "ग्राहक: बुझें। जारी राख्छु।"],
            mn: ["Үйлчлүүлэгч: Шимтгэл гарах уу?", "Банкны ажилтан: Тийм, 220 иен гарна.", "Үйлчлүүлэгч: Ойлголоо. Үргэлжлүүлье."],
            si: ["පාරිභෝගිකයා: ගාස්තුවක් තියෙනවද?", "බැංකු සේවකයා: ඔව්, යෙන් 220ක් ගෙවිය යුතුයි.", "පාරිභෝගිකයා: තේරුණා. දිගටම කරමු."],
            bn: ["গ্রাহক: কোনো ফি লাগবে?", "ব্যাংক কর্মী: হ্যাঁ, 220 ইয়েন ফি লাগবে।", "গ্রাহক: বুঝেছি। চালিয়ে যাব।"],
            pt: ["Cliente: Há taxa?", "Funcionário do banco: Sim, há uma taxa de 220 ienes.", "Cliente: Entendi. Vou continuar."],
            es: ["Cliente: ¿Hay comisión?", "Empleado del banco: Sí, hay una comisión de 220 yenes.", "Cliente: Entendido. Continuaré."],
            fr: ["Client : Y a-t-il des frais ?", "Employé de banque : Oui, il y a des frais de 220 yens.", "Client : J’ai compris. Je continue."],
            ru: ["Клиент: Есть комиссия?", "Сотрудник банка: Да, комиссия 220 иен.", "Клиент: Понял. Продолжаю."],
            uk: ["Клієнт: Є комісія?", "Працівник банку: Так, комісія 220 єн.", "Клієнт: Зрозуміло. Продовжую."]
        }
    )

];