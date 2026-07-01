// =====================================================
// Japeak A1 Level
// Scene: 宅急便を利用しよう
// Category Key: a1_delivery
// =====================================================

const a1DeliveryContext = {
    ja: "宅急便で荷物を送るときに使う日本語を練習します。",
    en: "Practice Japanese for sending a package by delivery service.",
    "zh-CN": "练习使用宅急便寄包裹时的日语。",
    "zh-TW": "練習使用宅急便寄包裹時的日語。",
    ko: "택배로 짐을 보낼 때 사용하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi gửi đồ bằng dịch vụ chuyển phát.",
    tl: "Practice ng Japanese kapag magpapadala ng package gamit ang delivery service.",
    id: "Latihan bahasa Jepang saat mengirim paket dengan layanan pengiriman.",
    th: "ฝึกภาษาญี่ปุ่นเมื่อส่งพัสดุด้วยบริการจัดส่ง",
    my: "ပို့ဆောင်ရေးဝန်ဆောင်မှုဖြင့် ပစ္စည်းပို့ရာတွင် အသုံးပြုသော ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ការផ្ញើឥវ៉ាន់តាមសេវាដឹកជញ្ជូន។",
    ne: "डेलिभरी सेवाबाट सामान पठाउँदा प्रयोग गर्ने जापानी भाषा अभ्यास।",
    mn: "Хүргэлтийн үйлчилгээгээр илгээмж явуулах үед хэрэглэх япон хэлний дадлага.",
    si: "බෙදාහැරීමේ සේවාවකින් පාර්සලයක් යැවීමේදී භාවිතා කරන ජපන් භාෂාව පුහුණු කිරීම.",
    bn: "ডেলিভারি সার্ভিসে পার্সেল পাঠানোর সময় ব্যবহৃত জাপানি ভাষার অনুশীলন।",
    pt: "Prática de japonês para enviar um pacote por serviço de entrega.",
    es: "Práctica de japonés para enviar un paquete por servicio de entrega.",
    fr: "Entraînement en japonais pour envoyer un colis par service de livraison.",
    ru: "Практика японского языка для отправки посылки службой доставки.",
    uk: "Практика японської мови для відправлення посилки службою доставки."
};

const a1DeliverySpeakerNames = {
    staff: {
        ja: "店員", en: "Staff", "zh-CN": "店员", "zh-TW": "店員", ko: "직원",
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
        fr: "Client", ru: "Клиент", uk: "Клієнт"
    }
};

function makeA1DeliveryDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a1_delivery",
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
            speakerNames: a1DeliverySpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a1DeliveryContext,
        translations,
        dialogueTranslations
    };
}

const japeakA1DeliveryData = [

    makeA1DeliveryDialogue(
        "a1_delivery_001",
        "荷物を送りたいです",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "荷物を送りたいです。",
                target: "にもつをおくりたいです",
                ruby: "<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>りたいです。",
                romaji: "Nimotsu o okuritai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、こちらで受け付けます。",
                target: "はい こちらでうけつけます",
                ruby: "はい、こちらで<ruby>受<rt>う</rt></ruby>け<ruby>付<rt>つ</rt></ruby>けます。",
                romaji: "Hai, kochira de uketsukemasu."
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
            ja: ["客：荷物を送りたいです。", "店員：はい、こちらで受け付けます。", "客：お願いします。"],
            en: ["Customer: I would like to send a package.", "Staff: Yes, we can accept it here.", "Customer: Please."],
            "zh-CN": ["顾客：我想寄包裹。", "店员：好的，这里可以受理。", "顾客：麻烦您。"],
            "zh-TW": ["顧客：我想寄包裹。", "店員：好的，這裡可以受理。", "顧客：麻煩你。"],
            ko: ["손님: 짐을 보내고 싶습니다.", "직원: 네, 여기서 접수합니다.", "손님: 부탁합니다."],
            vi: ["Khách: Tôi muốn gửi một kiện hàng.", "Nhân viên: Vâng, chúng tôi nhận ở đây.", "Khách: Làm ơn."],
            tl: ["Customer: Gusto kong magpadala ng package.", "Staff: Oo, maaari naming tanggapin dito.", "Customer: Please."],
            id: ["Pelanggan: Saya ingin mengirim paket.", "Staf: Ya, kami bisa menerimanya di sini.", "Pelanggan: Tolong."],
            th: ["ลูกค้า: อยากส่งพัสดุค่ะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ รับที่นี่ได้ค่ะ/ครับ", "ลูกค้า: รบกวนด้วยค่ะ/ครับ"],
            my: ["ဖောက်သည်: ပစ္စည်းပို့ချင်ပါတယ်။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ ဒီမှာ လက်ခံပါတယ်။", "ဖောက်သည်: ကျေးဇူးပြု၍။"],
            km: ["អតិថិជន: ខ្ញុំចង់ផ្ញើឥវ៉ាន់។", "បុគ្គលិក: បាន យើងទទួលនៅទីនេះ។", "អតិថិជន: សូម។"],
            ne: ["ग्राहक: म सामान पठाउन चाहन्छु।", "कर्मचारी: हुन्छ, यहाँबाट स्वीकार गर्छौं।", "ग्राहक: कृपया।"],
            mn: ["Үйлчлүүлэгч: Би илгээмж явуулмаар байна.", "Ажилтан: Тийм, энд хүлээн авна.", "Үйлчлүүлэгч: Тэгээрэй."],
            si: ["පාරිභෝගිකයා: මට පාර්සලයක් යවන්න ඕනේ.", "සේවකයා: ඔව්, මෙතැනින් භාරගන්නවා.", "පාරිභෝගිකයා: කරුණාකර."],
            bn: ["গ্রাহক: আমি একটি পার্সেল পাঠাতে চাই।", "কর্মী: হ্যাঁ, এখানে গ্রহণ করা যায়।", "গ্রাহক: অনুগ্রহ করে।"],
            pt: ["Cliente: Quero enviar um pacote.", "Funcionário: Sim, podemos receber aqui.", "Cliente: Por favor."],
            es: ["Cliente: Quiero enviar un paquete.", "Empleado: Sí, podemos recibirlo aquí.", "Cliente: Por favor."],
            fr: ["Client : Je voudrais envoyer un colis.", "Employé : Oui, nous pouvons le prendre ici.", "Client : S’il vous plaît."],
            ru: ["Клиент: Я хочу отправить посылку.", "Сотрудник: Да, мы можем принять её здесь.", "Клиент: Пожалуйста."],
            uk: ["Клієнт: Я хочу відправити посилку.", "Працівник: Так, ми можемо прийняти її тут.", "Клієнт: Будь ласка."]
        }
    ),

    makeA1DeliveryDialogue(
        "a1_delivery_002",
        "伝票を書く",
        [
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "この伝票に書いてください。",
                target: "このでんぴょうにかいてください",
                ruby: "この<ruby>伝票<rt>でんぴょう</rt></ruby>に<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Kono denpyō ni kaite kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "ここに名前を書きますか。",
                target: "ここになまえをかきますか",
                ruby: "ここに<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書<rt>か</rt></ruby>きますか。",
                romaji: "Koko ni namae o kakimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、お名前を書いてください。",
                target: "はい おなまえをかいてください",
                ruby: "はい、お<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Hai, o-namae o kaite kudasai."
            }
        ],
        {
            ja: ["店員：この伝票に書いてください。", "客：ここに名前を書きますか。", "店員：はい、お名前を書いてください。"],
            en: ["Staff: Please fill out this form.", "Customer: Do I write my name here?", "Staff: Yes, please write your name."],
            "zh-CN": ["店员：请填写这张单子。", "顾客：名字写在这里吗？", "店员：是的，请写您的名字。"],
            "zh-TW": ["店員：請填寫這張單子。", "顧客：名字寫在這裡嗎？", "店員：是的，請寫您的名字。"],
            ko: ["직원: 이 송장에 써 주세요.", "손님: 여기에 이름을 쓰나요?", "직원: 네, 성함을 써 주세요."],
            vi: ["Nhân viên: Xin hãy điền vào phiếu này.", "Khách: Tôi viết tên ở đây phải không ạ?", "Nhân viên: Vâng, xin viết tên của quý khách."],
            tl: ["Staff: Pakisulat po sa form na ito.", "Customer: Dito po ba isusulat ang pangalan?", "Staff: Oo, pakisulat po ang pangalan ninyo."],
            id: ["Staf: Silakan isi formulir ini.", "Pelanggan: Apakah saya menulis nama di sini?", "Staf: Ya, tuliskan nama Anda."],
            th: ["พนักงาน: กรุณากรอกใบนี้ค่ะ/ครับ", "ลูกค้า: เขียนชื่อที่นี่ใช่ไหมคะ/ครับ", "พนักงาน: ใช่ค่ะ/ครับ กรุณาเขียนชื่อค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ဒီစာရွက်မှာ ဖြည့်ပေးပါ။", "ဖောက်သည်: ဒီမှာ နာမည်ရေးရပါသလား။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ နာမည်ရေးပေးပါ။"],
            km: ["បុគ្គលិក: សូមសរសេរលើបែបបទនេះ។", "អតិថិជន: តើខ្ញុំសរសេរឈ្មោះនៅទីនេះទេ?", "បុគ្គលិក: បាទ/ចាស សូមសរសេរឈ្មោះរបស់អ្នក។"],
            ne: ["कर्मचारी: कृपया यो फारममा लेख्नुहोस्।", "ग्राहक: यहाँ नाम लेख्ने हो?", "कर्मचारी: हो, आफ्नो नाम लेख्नुहोस्।"],
            mn: ["Ажилтан: Энэ хуудсан дээр бичнэ үү.", "Үйлчлүүлэгч: Энд нэрээ бичих үү?", "Ажилтан: Тийм, нэрээ бичнэ үү."],
            si: ["සේවකයා: කරුණාකර මේ පෝරමය පුරවන්න.", "පාරිභෝගිකයා: මෙතැන නම ලියනවද?", "සේවකයා: ඔව්, ඔබේ නම ලියන්න."],
            bn: ["কর্মী: এই ফর্মে লিখুন।", "গ্রাহক: এখানে কি নাম লিখব?", "কর্মী: হ্যাঁ, আপনার নাম লিখুন।"],
            pt: ["Funcionário: Por favor, preencha este formulário.", "Cliente: Escrevo meu nome aqui?", "Funcionário: Sim, escreva seu nome, por favor."],
            es: ["Empleado: Por favor, complete este formulario.", "Cliente: ¿Escribo mi nombre aquí?", "Empleado: Sí, escriba su nombre, por favor."],
            fr: ["Employé : Veuillez remplir ce formulaire.", "Client : J’écris mon nom ici ?", "Employé : Oui, veuillez écrire votre nom."],
            ru: ["Сотрудник: Пожалуйста, заполните этот бланк.", "Клиент: Здесь написать имя?", "Сотрудник: Да, напишите ваше имя."],
            uk: ["Працівник: Будь ласка, заповніть цей бланк.", "Клієнт: Тут написати ім’я?", "Працівник: Так, напишіть ваше ім’я."]
        }
    ),

    makeA1DeliveryDialogue(
        "a1_delivery_003",
        "届け先を書く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "届け先はここですか。",
                target: "とどけさきはここですか",
                ruby: "<ruby>届<rt>とど</rt></ruby>け<ruby>先<rt>さき</rt></ruby>はここですか。",
                romaji: "Todokesaki wa koko desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、相手の住所を書いてください。",
                target: "はい あいてのじゅうしょをかいてください",
                ruby: "はい、<ruby>相手<rt>あいて</rt></ruby>の<ruby>住所<rt>じゅうしょ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Hai, aite no jūsho o kaite kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "わかりました。",
                target: "わかりました",
                ruby: "わかりました。",
                romaji: "Wakarimashita."
            }
        ],
        {
            ja: ["客：届け先はここですか。", "店員：はい、相手の住所を書いてください。", "客：わかりました。"],
            en: ["Customer: Is this where I write the delivery address?", "Staff: Yes, please write the recipient's address.", "Customer: I understand."],
            "zh-CN": ["顾客：收件地址写在这里吗？", "店员：是的，请写对方的地址。", "顾客：明白了。"],
            "zh-TW": ["顧客：收件地址寫在這裡嗎？", "店員：是的，請寫對方的地址。", "顧客：明白了。"],
            ko: ["손님: 받는 곳은 여기인가요?", "직원: 네, 상대방 주소를 써 주세요.", "손님: 알겠습니다."],
            vi: ["Khách: Tôi viết địa chỉ nhận hàng ở đây phải không ạ?", "Nhân viên: Vâng, xin viết địa chỉ của người nhận.", "Khách: Tôi hiểu rồi."],
            tl: ["Customer: Dito po ba ang delivery address?", "Staff: Oo, pakisulat po ang address ng tatanggap.", "Customer: Naiintindihan ko po."],
            id: ["Pelanggan: Apakah alamat tujuan ditulis di sini?", "Staf: Ya, tuliskan alamat penerima.", "Pelanggan: Saya mengerti."],
            th: ["ลูกค้า: ที่อยู่ผู้รับเขียนตรงนี้ใช่ไหมคะ/ครับ", "พนักงาน: ใช่ค่ะ/ครับ กรุณาเขียนที่อยู่ของผู้รับค่ะ/ครับ", "ลูกค้า: เข้าใจแล้วค่ะ/ครับ"],
            my: ["ဖောက်သည်: ပို့မယ့်လိပ်စာက ဒီနေရာပါလား။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ လက်ခံသူရဲ့လိပ်စာကို ရေးပေးပါ။", "ဖောက်သည်: နားလည်ပါပြီ။"],
            km: ["អតិថិជន: តើអាសយដ្ឋានអ្នកទទួលសរសេរនៅទីនេះទេ?", "បុគ្គលិក: បាទ/ចាស សូមសរសេរអាសយដ្ឋានរបស់អ្នកទទួល។", "អតិថិជន: ខ្ញុំយល់ហើយ។"],
            ne: ["ग्राहक: पाउने व्यक्तिको ठेगाना यहाँ हो?", "कर्मचारी: हो, प्राप्तकर्ताको ठेगाना लेख्नुहोस्।", "ग्राहक: बुझें।"],
            mn: ["Үйлчлүүлэгч: Хүргэх хаягийг энд бичих үү?", "Ажилтан: Тийм, хүлээн авагчийн хаягийг бичнэ үү.", "Үйлчлүүлэгч: Ойлголоо."],
            si: ["පාරිභෝගිකයා: භාරදෙන ලිපිනය මෙතැනද?", "සේවකයා: ඔව්, ලබන්නාගේ ලිපිනය ලියන්න.", "පාරිභෝගිකයා: තේරුණා."],
            bn: ["গ্রাহক: প্রাপকের ঠিকানা কি এখানে লিখব?", "কর্মী: হ্যাঁ, প্রাপকের ঠিকানা লিখুন।", "গ্রাহক: বুঝেছি।"],
            pt: ["Cliente: O endereço de entrega é aqui?", "Funcionário: Sim, escreva o endereço do destinatário.", "Cliente: Entendi."],
            es: ["Cliente: ¿La dirección de entrega va aquí?", "Empleado: Sí, escriba la dirección del destinatario.", "Cliente: Entendido."],
            fr: ["Client : L’adresse de livraison va ici ?", "Employé : Oui, veuillez écrire l’adresse du destinataire.", "Client : J’ai compris."],
            ru: ["Клиент: Адрес доставки писать здесь?", "Сотрудник: Да, напишите адрес получателя.", "Клиент: Понял."],
            uk: ["Клієнт: Адресу доставки писати тут?", "Працівник: Так, напишіть адресу отримувача.", "Клієнт: Зрозуміло."]
        }
    ),

    makeA1DeliveryDialogue(
        "a1_delivery_004",
        "品名を書く",
        [
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "中身は何ですか。",
                target: "なかみはなんですか",
                ruby: "<ruby>中身<rt>なかみ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。",
                romaji: "Nakami wa nan desu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "服です。",
                target: "ふくです",
                ruby: "<ruby>服<rt>ふく</rt></ruby>です。",
                romaji: "Fuku desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "では、品名に服と書いてください。",
                target: "では ひんめいにふくとかいてください",
                ruby: "では、<ruby>品名<rt>ひんめい</rt></ruby>に<ruby>服<rt>ふく</rt></ruby>と<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Dewa, hinmei ni fuku to kaite kudasai."
            }
        ],
        {
            ja: ["店員：中身は何ですか。", "客：服です。", "店員：では、品名に服と書いてください。"],
            en: ["Staff: What is inside?", "Customer: Clothes.", "Staff: Then please write clothes as the item name."],
            "zh-CN": ["店员：里面是什么？", "顾客：衣服。", "店员：那么，请在品名处写衣服。"],
            "zh-TW": ["店員：裡面是什麼？", "顧客：衣服。", "店員：那麼，請在品名處寫衣服。"],
            ko: ["직원: 안에는 무엇이 들어 있나요?", "손님: 옷입니다.", "직원: 그럼 품명에 옷이라고 써 주세요."],
            vi: ["Nhân viên: Bên trong là gì ạ?", "Khách: Quần áo.", "Nhân viên: Vậy xin viết quần áo vào tên hàng."],
            tl: ["Staff: Ano po ang laman?", "Customer: Damit po.", "Staff: Kung ganoon, pakisulat po damit sa item name."],
            id: ["Staf: Apa isinya?", "Pelanggan: Pakaian.", "Staf: Kalau begitu, tuliskan pakaian pada nama barang."],
            th: ["พนักงาน: ข้างในคืออะไรคะ/ครับ", "ลูกค้า: เสื้อผ้าค่ะ/ครับ", "พนักงาน: งั้นกรุณาเขียนว่าเสื้อผ้าในช่องชื่อสินค้าค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: အထဲမှာ ဘာပါသလဲ။", "ဖောက်သည်: အဝတ်အစားပါ။", "ဝန်ထမ်း: ဒါဆို ပစ္စည်းအမည်မှာ အဝတ်အစားလို့ ရေးပေးပါ။"],
            km: ["បុគ្គលិក: ខាងក្នុងជាអ្វី?", "អតិថិជន: សម្លៀកបំពាក់។", "បុគ្គលិក: ដូច្នេះ សូមសរសេរថាសម្លៀកបំពាក់នៅក្នុងឈ្មោះទំនិញ។"],
            ne: ["कर्मचारी: भित्र के छ?", "ग्राहक: कपडा हो।", "कर्मचारी: त्यसो भए, सामानको नाममा कपडा लेख्नुहोस्।"],
            mn: ["Ажилтан: Дотор нь юу байгаа вэ?", "Үйлчлүүлэгч: Хувцас.", "Ажилтан: Тэгвэл барааны нэр дээр хувцас гэж бичнэ үү."],
            si: ["සේවකයා: ඇතුළේ මොනවාද?", "පාරිභෝගිකයා: ඇඳුම්.", "සේවකයා: එහෙනම් භාණ්ඩ නාමයට ඇඳුම් කියලා ලියන්න."],
            bn: ["কর্মী: ভেতরে কী আছে?", "গ্রাহক: কাপড়।", "কর্মী: তাহলে পণ্যের নামে কাপড় লিখুন।"],
            pt: ["Funcionário: O que tem dentro?", "Cliente: Roupas.", "Funcionário: Então escreva roupas no nome do item."],
            es: ["Empleado: ¿Qué hay dentro?", "Cliente: Ropa.", "Empleado: Entonces escriba ropa como nombre del artículo."],
            fr: ["Employé : Qu’y a-t-il à l’intérieur ?", "Client : Des vêtements.", "Employé : Alors écrivez vêtements comme nom de l’article."],
            ru: ["Сотрудник: Что внутри?", "Клиент: Одежда.", "Сотрудник: Тогда напишите одежда в графе наименование."],
            uk: ["Працівник: Що всередині?", "Клієнт: Одяг.", "Працівник: Тоді напишіть одяг у графі найменування."]
        }
    ),

    makeA1DeliveryDialogue(
        "a1_delivery_005",
        "時間指定をする",
        [
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "お届け時間を選べます。",
                target: "おとどけじかんをえらべます",
                ruby: "お<ruby>届<rt>とど</rt></ruby>け<ruby>時間<rt>じかん</rt></ruby>を<ruby>選<rt>えら</rt></ruby>べます。",
                romaji: "O-todoke jikan o erabemasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "午前中でお願いします。",
                target: "ごぜんちゅうでおねがいします",
                ruby: "<ruby>午前中<rt>ごぜんちゅう</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Gozenchū de onegai shimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、午前中ですね。",
                target: "はい ごぜんちゅうですね",
                ruby: "はい、<ruby>午前中<rt>ごぜんちゅう</rt></ruby>ですね。",
                romaji: "Hai, gozenchū desu ne."
            }
        ],
        {
            ja: ["店員：お届け時間を選べます。", "客：午前中でお願いします。", "店員：はい、午前中ですね。"],
            en: ["Staff: You can choose the delivery time.", "Customer: Morning, please.", "Staff: Yes, morning, right?"],
            "zh-CN": ["店员：可以选择送达时间。", "顾客：请安排上午。", "店员：好的，上午对吗？"],
            "zh-TW": ["店員：可以選擇送達時間。", "顧客：請安排上午。", "店員：好的，上午對嗎？"],
            ko: ["직원: 배송 시간을 선택할 수 있습니다.", "손님: 오전으로 부탁합니다.", "직원: 네, 오전이시죠."],
            vi: ["Nhân viên: Quý khách có thể chọn thời gian giao hàng.", "Khách: Buổi sáng giúp tôi.", "Nhân viên: Vâng, buổi sáng ạ."],
            tl: ["Staff: Maaari po kayong pumili ng delivery time.", "Customer: Sa umaga po, please.", "Staff: Sige po, sa umaga po."],
            id: ["Staf: Anda bisa memilih waktu pengiriman.", "Pelanggan: Pagi, tolong.", "Staf: Baik, pagi ya."],
            th: ["พนักงาน: สามารถเลือกเวลาส่งได้ค่ะ/ครับ", "ลูกค้า: ขอช่วงเช้าค่ะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ ช่วงเช้านะคะ/ครับ"],
            my: ["ဝန်ထမ်း: ပို့ဆောင်ချိန်ကို ရွေးလို့ရပါတယ်။", "ဖောက်သည်: မနက်ပိုင်းနဲ့お願いします။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ မနက်ပိုင်းနော်။"],
            km: ["បុគ្គលិក: អ្នកអាចជ្រើសរើសពេលវេលាដឹកជញ្ជូនបាន។", "អតិថិជន: សូមពេលព្រឹក។", "បុគ្គលិក: បាទ/ចាស ពេលព្រឹកមែនទេ។"],
            ne: ["कर्मचारी: डेलिभरी समय छान्न सकिन्छ।", "ग्राहक: बिहान, कृपया।", "कर्मचारी: हुन्छ, बिहान है।"],
            mn: ["Ажилтан: Хүргэх цагийг сонгож болно.", "Үйлчлүүлэгч: Өглөөгөөрお願いします.", "Ажилтан: За, өглөөгөөр."],
            si: ["සේවකයා: භාරදෙන වේලාව තෝරා ගන්න පුළුවන්.", "පාරිභෝගිකයා: උදේ කාලයට කරුණාකර.", "සේවකයා: හරි, උදේ කාලය නේද."],
            bn: ["কর্মী: ডেলিভারির সময় বেছে নিতে পারবেন।", "গ্রাহক: সকালে, দয়া করে।", "কর্মী: ঠিক আছে, সকালে তো?"],
            pt: ["Funcionário: Você pode escolher o horário de entrega.", "Cliente: De manhã, por favor.", "Funcionário: Certo, de manhã."],
            es: ["Empleado: Puede elegir la hora de entrega.", "Cliente: Por la mañana, por favor.", "Empleado: De acuerdo, por la mañana."],
            fr: ["Employé : Vous pouvez choisir l’heure de livraison.", "Client : Le matin, s’il vous plaît.", "Employé : D’accord, le matin."],
            ru: ["Сотрудник: Можно выбрать время доставки.", "Клиент: Утром, пожалуйста.", "Сотрудник: Хорошо, утром."],
            uk: ["Працівник: Можна вибрати час доставки.", "Клієнт: Вранці, будь ласка.", "Працівник: Добре, вранці."]
        }
    ),

    makeA1DeliveryDialogue(
        "a1_delivery_006",
        "割れ物を送る",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "中に割れ物があります。",
                target: "なかにわれものがあります",
                ruby: "<ruby>中<rt>なか</rt></ruby>に<ruby>割<rt>わ</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>があります。",
                romaji: "Naka ni waremono ga arimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "割れ物シールを貼ります。",
                target: "われものしーるをはります",
                ruby: "<ruby>割<rt>わ</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>シールを<ruby>貼<rt>は</rt></ruby>ります。",
                romaji: "Waremono shīru o harimasu."
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
            ja: ["客：中に割れ物があります。", "店員：割れ物シールを貼ります。", "客：ありがとうございます。"],
            en: ["Customer: There is something fragile inside.", "Staff: I will put a fragile sticker on it.", "Customer: Thank you."],
            "zh-CN": ["顾客：里面有易碎物品。", "店员：我会贴易碎标签。", "顾客：谢谢。"],
            "zh-TW": ["顧客：裡面有易碎物品。", "店員：我會貼易碎標籤。", "顧客：謝謝。"],
            ko: ["손님: 안에 깨지는 물건이 있습니다.", "직원: 깨짐 주의 스티커를 붙이겠습니다.", "손님: 감사합니다."],
            vi: ["Khách: Bên trong có đồ dễ vỡ.", "Nhân viên: Tôi sẽ dán nhãn đồ dễ vỡ.", "Khách: Cảm ơn."],
            tl: ["Customer: May fragile item po sa loob.", "Staff: Lalagyan ko po ng fragile sticker.", "Customer: Salamat po."],
            id: ["Pelanggan: Di dalam ada barang pecah belah.", "Staf: Saya akan menempelkan stiker fragile.", "Pelanggan: Terima kasih."],
            th: ["ลูกค้า: ข้างในมีของแตกง่ายค่ะ/ครับ", "พนักงาน: จะติดสติกเกอร์ของแตกง่ายให้นะคะ/ครับ", "ลูกค้า: ขอบคุณค่ะ/ครับ"],
            my: ["ဖောက်သည်: အထဲမှာ ကွဲလွယ်တဲ့ပစ္စည်းရှိပါတယ်။", "ဝန်ထမ်း: ကွဲလွယ်တဲ့ပစ္စည်းစတစ်ကာ ကပ်ပေးပါမယ်။", "ဖောက်သည်: ကျေးဇူးတင်ပါတယ်။"],
            km: ["អតិថិជន: ខាងក្នុងមានរបស់ងាយបែក។", "បុគ្គលិក: ខ្ញុំនឹងបិទស្លាករបស់ងាយបែក។", "អតិថិជន: អរគុណ។"],
            ne: ["ग्राहक: भित्र फुट्ने सामान छ।", "कर्मचारी: फुट्ने सामानको स्टिकर टाँस्छु।", "ग्राहक: धन्यवाद।"],
            mn: ["Үйлчлүүлэгч: Дотор нь хагарах зүйл байгаа.", "Ажилтан: Хагарах зүйл гэсэн наалт наана.", "Үйлчлүүлэгч: Баярлалаа."],
            si: ["පාරිභෝගිකයා: ඇතුළේ බිඳෙන භාණ්ඩයක් තියෙනවා.", "සේවකයා: බිඳෙන භාණ්ඩ ස්ටිකරයක් අලවන්නම්.", "පාරිභෝගිකයා: ස්තුතියි."],
            bn: ["গ্রাহক: ভেতরে ভাঙার মতো জিনিস আছে।", "কর্মী: আমি ভঙ্গুর স্টিকার লাগিয়ে দেব।", "গ্রাহক: ধন্যবাদ।"],
            pt: ["Cliente: Há algo frágil dentro.", "Funcionário: Vou colocar um adesivo de frágil.", "Cliente: Obrigado."],
            es: ["Cliente: Hay algo frágil dentro.", "Empleado: Pondré una etiqueta de frágil.", "Cliente: Gracias."],
            fr: ["Client : Il y a quelque chose de fragile à l’intérieur.", "Employé : Je vais mettre une étiquette fragile.", "Client : Merci."],
            ru: ["Клиент: Внутри есть хрупкая вещь.", "Сотрудник: Я наклею стикер хрупкое.", "Клиент: Спасибо."],
            uk: ["Клієнт: Усередині є крихка річ.", "Працівник: Я наклею наліпку крихке.", "Клієнт: Дякую."]
        }
    ),

    makeA1DeliveryDialogue(
        "a1_delivery_007",
        "クール便を使う",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "冷たいまま送りたいです。",
                target: "つめたいままおくりたいです",
                ruby: "<ruby>冷<rt>つめ</rt></ruby>たいまま<ruby>送<rt>おく</rt></ruby>りたいです。",
                romaji: "Tsumetai mama okuritai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "クール便を使いますか。",
                target: "くーるびんをつかいますか",
                ruby: "クール<ruby>便<rt>びん</rt></ruby>を<ruby>使<rt>つか</rt></ruby>いますか。",
                romaji: "Kūru-bin o tsukaimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "はい、クール便でお願いします。",
                target: "はい くーるびんでおねがいします",
                ruby: "はい、クール<ruby>便<rt>びん</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hai, kūru-bin de onegai shimasu."
            }
        ],
        {
            ja: ["客：冷たいまま送りたいです。", "店員：クール便を使いますか。", "客：はい、クール便でお願いします。"],
            en: ["Customer: I want to send it while keeping it cold.", "Staff: Would you like to use refrigerated delivery?", "Customer: Yes, refrigerated delivery, please."],
            "zh-CN": ["顾客：我想保持冷藏寄送。", "店员：使用冷藏配送吗？", "顾客：是的，请用冷藏配送。"],
            "zh-TW": ["顧客：我想保持冷藏寄送。", "店員：使用冷藏配送嗎？", "顧客：是的，請用冷藏配送。"],
            ko: ["손님: 차가운 상태로 보내고 싶습니다.", "직원: 쿨 배송을 이용하시겠습니까?", "손님: 네, 쿨 배송으로 부탁합니다."],
            vi: ["Khách: Tôi muốn gửi trong tình trạng lạnh.", "Nhân viên: Quý khách muốn dùng dịch vụ giao lạnh không ạ?", "Khách: Vâng, giao lạnh giúp tôi."],
            tl: ["Customer: Gusto ko pong ipadala ito nang malamig pa rin.", "Staff: Gagamit po ba kayo ng refrigerated delivery?", "Customer: Oo, refrigerated delivery po, please."],
            id: ["Pelanggan: Saya ingin mengirimnya tetap dingin.", "Staf: Apakah Anda ingin menggunakan pengiriman dingin?", "Pelanggan: Ya, pengiriman dingin, tolong."],
            th: ["ลูกค้า: อยากส่งแบบคงความเย็นค่ะ/ครับ", "พนักงาน: ใช้บริการคูลบินไหมคะ/ครับ", "ลูกค้า: ใช่ค่ะ/ครับ ขอคูลบินค่ะ/ครับ"],
            my: ["ဖောက်သည်: အေးတဲ့အတိုင်း ပို့ချင်ပါတယ်။", "ဝန်ထမ်း: အအေးပို့ဆောင်ရေးသုံးပါမလား။", "ဖောက်သည်: ဟုတ်ကဲ့၊ အအေးပို့ဆောင်ရေးနဲ့お願いします။"],
            km: ["អតិថិជន: ខ្ញុំចង់ផ្ញើឲ្យនៅត្រជាក់។", "បុគ្គលិក: តើប្រើសេវាដឹកជញ្ជូនត្រជាក់ទេ?", "អតិថិជន: បាទ/ចាស សូមប្រើសេវាត្រជាក់។"],
            ne: ["ग्राहक: म चिसै राखेर पठाउन चाहन्छु।", "कर्मचारी: कूल डेलिभरी प्रयोग गर्नुहुन्छ?", "ग्राहक: हो, कूल डेलिभरी, कृपया।"],
            mn: ["Үйлчлүүлэгч: Хүйтэн хэвээр нь явуулмаар байна.", "Ажилтан: Хөргүүртэй хүргэлт ашиглах уу?", "Үйлчлүүлэгч: Тийм, хөргүүртэй хүргэлтээрお願いします."],
            si: ["පාරිභෝගිකයා: සිසිල්ව තබාගෙන යවන්න ඕනේ.", "සේවකයා: සිසිල් බෙදාහැරීම භාවිතා කරනවාද?", "පාරිභෝගිකයා: ඔව්, සිසිල් බෙදාහැරීමෙන් කරුණාකර."],
            bn: ["গ্রাহক: আমি ঠান্ডা অবস্থায় পাঠাতে চাই।", "কর্মী: কুল ডেলিভারি ব্যবহার করবেন?", "গ্রাহক: হ্যাঁ, কুল ডেলিভারি, দয়া করে।"],
            pt: ["Cliente: Quero enviar mantendo frio.", "Funcionário: Gostaria de usar entrega refrigerada?", "Cliente: Sim, entrega refrigerada, por favor."],
            es: ["Cliente: Quiero enviarlo manteniéndolo frío.", "Empleado: ¿Quiere usar entrega refrigerada?", "Cliente: Sí, entrega refrigerada, por favor."],
            fr: ["Client : Je veux l’envoyer en le gardant au froid.", "Employé : Voulez-vous utiliser la livraison réfrigérée ?", "Client : Oui, livraison réfrigérée, s’il vous plaît."],
            ru: ["Клиент: Я хочу отправить это охлаждённым.", "Сотрудник: Хотите использовать охлаждённую доставку?", "Клиент: Да, охлаждённой доставкой, пожалуйста."],
            uk: ["Клієнт: Я хочу відправити це охолодженим.", "Працівник: Хочете використати охолоджену доставку?", "Клієнт: Так, охолодженою доставкою, будь ласка."]
        }
    ),

    makeA1DeliveryDialogue(
        "a1_delivery_008",
        "控えを受け取る",
        [
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "こちらがお客様控えです。",
                target: "こちらがおきゃくさまひかえです",
                ruby: "こちらがお<ruby>客様控<rt>きゃくさまひか</rt></ruby>えです。",
                romaji: "Kochira ga o-kyakusama hikae desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "これは持って帰りますか。",
                target: "これはもってかえりますか",
                ruby: "これは<ruby>持<rt>も</rt></ruby>って<ruby>帰<rt>かえ</rt></ruby>りますか。",
                romaji: "Kore wa motte kaerimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、大切に保管してください。",
                target: "はい たいせつにほかんしてください",
                ruby: "はい、<ruby>大切<rt>たいせつ</rt></ruby>に<ruby>保管<rt>ほかん</rt></ruby>してください。",
                romaji: "Hai, taisetsu ni hokan shite kudasai."
            }
        ],
        {
            ja: ["店員：こちらがお客様控えです。", "客：これは持って帰りますか。", "店員：はい、大切に保管してください。"],
            en: ["Staff: This is your customer copy.", "Customer: Do I take this with me?", "Staff: Yes, please keep it safe."],
            "zh-CN": ["店员：这是您的顾客联。", "顾客：这个要带回去吗？", "店员：是的，请妥善保管。"],
            "zh-TW": ["店員：這是您的顧客聯。", "顧客：這個要帶回去嗎？", "店員：是的，請妥善保管。"],
            ko: ["직원: 이것이 고객 보관용입니다.", "손님: 이것은 가져가나요?", "직원: 네, 잘 보관해 주세요."],
            vi: ["Nhân viên: Đây là bản lưu của quý khách.", "Khách: Tôi mang cái này về phải không ạ?", "Nhân viên: Vâng, xin hãy giữ cẩn thận."],
            tl: ["Staff: Ito po ang customer copy ninyo.", "Customer: Dadalhin ko po ba ito?", "Staff: Oo, pakitago po nang mabuti."],
            id: ["Staf: Ini adalah salinan untuk pelanggan.", "Pelanggan: Apakah saya membawa ini pulang?", "Staf: Ya, simpan baik-baik."],
            th: ["พนักงาน: นี่คือสำเนาสำหรับลูกค้าค่ะ/ครับ", "ลูกค้า: ต้องเอากลับไปใช่ไหมคะ/ครับ", "พนักงาน: ใช่ค่ะ/ครับ กรุณาเก็บไว้ให้ดีค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ဒီဟာက ဖောက်သည်အတွက် မိတ္တူပါ။", "ဖောက်သည်: ဒီဟာကို ယူသွားရပါသလား။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ သေချာသိမ်းထားပေးပါ။"],
            km: ["បុគ្គលិក: នេះជាច្បាប់ចម្លងសម្រាប់អតិថិជន។", "អតិថិជន: តើខ្ញុំយកនេះទៅផ្ទះទេ?", "បុគ្គលិក: បាទ/ចាស សូមរក្សាទុកឲ្យបានល្អ។"],
            ne: ["कर्मचारी: यो ग्राहकको प्रति हो।", "ग्राहक: यो मैले लिएर जान्छु?", "कर्मचारी: हो, राम्रोसँग सुरक्षित राख्नुहोस्।"],
            mn: ["Ажилтан: Энэ бол таны хувь.", "Үйлчлүүлэгч: Үүнийг авч явах уу?", "Ажилтан: Тийм, сайн хадгалаарай."],
            si: ["සේවකයා: මේක ඔබේ පිටපතයි.", "පාරිභෝගිකයා: මේක ගෙන යනවද?", "සේවකයා: ඔව්, හොඳින් සුරකින්න."],
            bn: ["কর্মী: এটি আপনার কাস্টমার কপি।", "গ্রাহক: এটা কি সঙ্গে নিয়ে যাব?", "কর্মী: হ্যাঁ, ভালোভাবে সংরক্ষণ করুন।"],
            pt: ["Funcionário: Esta é a sua via do cliente.", "Cliente: Eu levo isto comigo?", "Funcionário: Sim, guarde com cuidado."],
            es: ["Empleado: Esta es su copia del cliente.", "Cliente: ¿Me llevo esto?", "Empleado: Sí, guárdelo con cuidado."],
            fr: ["Employé : Ceci est votre exemplaire client.", "Client : Je l’emporte avec moi ?", "Employé : Oui, veuillez le garder précieusement."],
            ru: ["Сотрудник: Это ваш экземпляр.", "Клиент: Мне забрать это с собой?", "Сотрудник: Да, храните его, пожалуйста."],
            uk: ["Працівник: Це ваш примірник.", "Клієнт: Мені забрати це з собою?", "Працівник: Так, зберігайте його, будь ласка."]
        }
    )

];