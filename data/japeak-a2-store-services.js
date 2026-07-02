// =====================================================
// Japeak A2 Level
// Scene: お店のサービスを利用しよう
// Category Key: a2_store_services
// =====================================================

const a2StoreServicesContext = {
    ja: "お店でポイントカード、取り置き、ギフト包装、裾上げ、配送、交換、修理、領収書などのサービスを利用するときの日本語を練習します。",
    en: "Practice Japanese for using store services such as point cards, item holds, gift wrapping, hemming, delivery, exchanges, repairs, and receipts.",
    "zh-CN": "练习在商店使用积分卡、商品保留、礼品包装、改裤脚、配送、换货、维修和发票等服务时的日语。",
    "zh-TW": "練習在商店使用集點卡、商品保留、禮品包裝、修改褲長、配送、換貨、維修和收據等服務時的日語。",
    ko: "가게에서 포인트 카드, 상품 보관, 선물 포장, 수선, 배송, 교환, 수리, 영수증 등의 서비스를 이용할 때의 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi sử dụng dịch vụ tại cửa hàng như thẻ tích điểm, giữ hàng, gói quà, sửa gấu quần, giao hàng, đổi hàng, sửa chữa và hóa đơn.",
    tl: "Practice ng Japanese sa paggamit ng store services tulad ng point card, item hold, gift wrapping, hemming, delivery, exchange, repair, at receipt.",
    id: "Latihan bahasa Jepang untuk menggunakan layanan toko seperti kartu poin, penyimpanan barang, bungkus hadiah, permak celana, pengiriman, penukaran, perbaikan, dan kuitansi.",
    th: "ฝึกภาษาญี่ปุ่นเมื่อใช้บริการในร้าน เช่น บัตรสะสมแต้ม การจองสินค้า การห่อของขวัญ การตัดขากางเกง การจัดส่ง การเปลี่ยนสินค้า การซ่อม และใบเสร็จ",
    my: "ဆိုင်တွင် point card၊ ပစ္စည်းသိမ်းပေးခြင်း၊ လက်ဆောင်ထုပ်ပိုးခြင်း၊ အဝတ်ပြင်ခြင်း၊ ပို့ဆောင်ခြင်း၊ လဲလှယ်ခြင်း၊ ပြင်ဆင်ခြင်းနှင့် ပြေစာထုတ်ပေးခြင်းတို့ကို အသုံးပြုရာတွင် လိုအပ်သော ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ប្រើសេវាកម្មនៅហាង ដូចជា កាតពិន្ទុ ការរក្សាទំនិញ ការខ្ចប់ជាអំណោយ ការកែសម្លៀកបំពាក់ ការដឹកជញ្ជូន ការប្តូរទំនិញ ការជួសជុល និងវិក្កយបត្រ។",
    ne: "पसलमा पोइन्ट कार्ड, सामान राखिदिने सेवा, उपहार प्याकिङ, कपडा छोट्याउने, डेलिभरी, साट्ने, मर्मत र रसिदसम्बन्धी जापानी अभ्यास।",
    mn: "Дэлгүүрт онооны карт, бараа хадгалуулах, бэлгийн боодол, өмдний урт засах, хүргэлт, солих, засвар, баримт зэрэг үйлчилгээ ашиглах япон хэлний дадлага.",
    si: "වෙළඳසැලක point card, භාණ්ඩ වෙන්කර තැබීම, තෑගි ඇසුරුම්, ඇඳුම් සකස් කිරීම, බෙදාහැරීම, මාරු කිරීම, අලුත්වැඩියා කිරීම සහ රිසිට් පත් භාවිතා කරන විට අවශ්‍ය ජපන් භාෂාව පුහුණු කිරීම.",
    bn: "দোকানে পয়েন্ট কার্ড, পণ্য ধরে রাখা, উপহার মোড়ানো, কাপড় ঠিক করা, ডেলিভারি, বদল, মেরামত এবং রসিদ ব্যবহারের জন্য জাপানি ভাষার অনুশীলন।",
    pt: "Prática de japonês para usar serviços de loja, como cartão de pontos, reserva de produto, embalagem para presente, ajuste de roupa, entrega, troca, conserto e recibo.",
    es: "Práctica de japonés para usar servicios de tienda, como tarjeta de puntos, reserva de productos, envoltorio para regalo, arreglo de ropa, entrega, cambio, reparación y recibo.",
    fr: "Entraînement en japonais pour utiliser les services d’un magasin : carte de points, réservation d’article, emballage cadeau, retouche, livraison, échange, réparation et reçu.",
    ru: "Практика японского языка для использования услуг магазина: карта баллов, резерв товара, подарочная упаковка, подшивка, доставка, обмен, ремонт и квитанция.",
    uk: "Практика японської мови для використання послуг магазину: картка балів, резерв товару, подарункове пакування, підшивання, доставка, обмін, ремонт і квитанція."
};

const a2StoreServicesSpeakerNames = {
    staff: {
        ja: "店員", en: "Store Staff", "zh-CN": "店员", "zh-TW": "店員", ko: "점원",
        vi: "Nhân viên cửa hàng", tl: "Staff ng tindahan", id: "Staf toko", th: "พนักงานร้าน",
        my: "ဆိုင်ဝန်ထမ်း", km: "បុគ្គលិកហាង", ne: "पसलका कर्मचारी", mn: "Дэлгүүрийн ажилтан",
        si: "වෙළඳසැලේ සේවකයා", bn: "দোকানের কর্মী", pt: "Funcionário da loja", es: "Empleado de la tienda",
        fr: "Employé du magasin", ru: "Сотрудник магазина", uk: "Працівник магазину"
    },
    customer: {
        ja: "客", en: "Customer", "zh-CN": "顾客", "zh-TW": "顧客", ko: "손님",
        vi: "Khách hàng", tl: "Customer", id: "Pelanggan", th: "ลูกค้า",
        my: "ဖောက်သည်", km: "អតិថិជន", ne: "ग्राहक", mn: "Үйлчлүүлэгч",
        si: "පාරිභෝගිකයා", bn: "গ্রাহক", pt: "Cliente", es: "Cliente",
        fr: "Client", ru: "Клиент", uk: "Клієнт"
    }
};

function makeA2StoreServicesDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_store_services",
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
            speakerNames: a2StoreServicesSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2StoreServicesContext,
        translations,
        dialogueTranslations
    };
}

const japeakA2StoreServicesData = [

    makeA2StoreServicesDialogue(
        "a2_store_service_001",
        "ポイントサービスを確認する",
        [
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "アプリ会員に登録すると、ポイントが付きます。",
                target: "あぷりかいいんにとうろくすると ぽいんとがつきます",
                ruby: "アプリ<ruby>会員<rt>かいいん</rt></ruby>に<ruby>登録<rt>とうろく</rt></ruby>すると、ポイントが<ruby>付<rt>つ</rt></ruby>きます。",
                romaji: "Apuri kaiin ni tōroku suru to, pointo ga tsukimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "登録は店内でできますか。",
                target: "とうろくはてんないでできますか",
                ruby: "<ruby>登録<rt>とうろく</rt></ruby>は<ruby>店内<rt>てんない</rt></ruby>でできますか。",
                romaji: "Tōroku wa tennai de dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、このQRコードから登録できます。",
                target: "はい このきゅーあーるこーどからとうろくできます",
                ruby: "はい、このQRコードから<ruby>登録<rt>とうろく</rt></ruby>できます。",
                romaji: "Hai, kono kyū-āru kōdo kara tōroku dekimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "今日は登録だけでも大丈夫ですか。",
                target: "きょうはとうろくだけでもだいじょうぶですか",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>登録<rt>とうろく</rt></ruby>だけでも<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Kyō wa tōroku dake demo daijōbu desu ka."
            }
        ],
        {
            ja: ["店員：アプリ会員に登録すると、ポイントが付きます。", "客：登録は店内でできますか。", "店員：はい、このQRコードから登録できます。", "客：今日は登録だけでも大丈夫ですか。"],
            en: ["Store Staff: If you register as an app member, you will earn points.", "Customer: Can I register inside the store?", "Store Staff: Yes, you can register from this QR code.", "Customer: Is it okay if I only register today?"],
            "zh-CN": ["店员：注册成为APP会员后，会获得积分。", "顾客：可以在店内注册吗？", "店员：可以，请通过这个二维码注册。", "顾客：今天只注册也可以吗？"],
            "zh-TW": ["店員：註冊成為APP會員後，會獲得點數。", "顧客：可以在店內註冊嗎？", "店員：可以，請透過這個QR碼註冊。", "顧客：今天只註冊也可以嗎？"],
            ko: ["점원: 앱 회원으로 등록하면 포인트가 적립됩니다.", "손님: 등록은 매장에서 할 수 있나요?", "점원: 네, 이 QR 코드로 등록할 수 있습니다.", "손님: 오늘은 등록만 해도 괜찮나요?"],
            vi: ["Nhân viên cửa hàng: Nếu đăng ký thành viên ứng dụng, quý khách sẽ được tích điểm.", "Khách hàng: Tôi có thể đăng ký trong cửa hàng không ạ?", "Nhân viên cửa hàng: Vâng, có thể đăng ký bằng mã QR này.", "Khách hàng: Hôm nay chỉ đăng ký thôi có được không ạ?"],
            tl: ["Staff ng tindahan: Kapag nag-register bilang app member, magkakaroon po kayo ng points.", "Customer: Pwede po bang mag-register sa loob ng store?", "Staff ng tindahan: Oo, pwede po mula sa QR code na ito.", "Customer: Okay lang po ba kung registration lang muna ngayon?"],
            id: ["Staf toko: Jika mendaftar sebagai anggota aplikasi, Anda akan mendapatkan poin.", "Pelanggan: Apakah bisa mendaftar di dalam toko?", "Staf toko: Ya, bisa mendaftar melalui kode QR ini.", "Pelanggan: Apakah tidak apa-apa jika hari ini hanya mendaftar saja?"],
            th: ["พนักงานร้าน: หากลงทะเบียนเป็นสมาชิกแอป จะได้รับคะแนนค่ะ/ครับ", "ลูกค้า: ลงทะเบียนในร้านได้ไหมคะ/ครับ", "พนักงานร้าน: ได้ค่ะ/ครับ ลงทะเบียนจาก QR code นี้ได้ค่ะ/ครับ", "ลูกค้า: วันนี้ลงทะเบียนอย่างเดียวได้ไหมคะ/ครับ"],
            my: ["ဆိုင်ဝန်ထမ်း: အက်ပ်အသင်းဝင်အဖြစ် မှတ်ပုံတင်လျှင် point ရပါမယ်။", "ဖောက်သည်: ဆိုင်ထဲမှာ မှတ်ပုံတင်လို့ရပါသလား။", "ဆိုင်ဝန်ထမ်း: ရပါတယ်၊ ဒီ QR code ကနေ မှတ်ပုံတင်လို့ရပါတယ်။", "ဖောက်သည်: ဒီနေ့ မှတ်ပုံတင်ပဲ လုပ်လို့ရပါသလား။"],
            km: ["បុគ្គលិកហាង: ប្រសិនបើចុះឈ្មោះជាសមាជិកកម្មវិធី អ្នកនឹងទទួលបានពិន្ទុ។", "អតិថិជន: តើអាចចុះឈ្មោះនៅក្នុងហាងបានទេ?", "បុគ្គលិកហាង: បាន អាចចុះឈ្មោះតាម QR code នេះ។", "អតិថិជន: ថ្ងៃនេះចុះឈ្មោះតែមួយមុខបានទេ?"],
            ne: ["पसलका कर्मचारी: एप सदस्यको रूपमा दर्ता गरेपछि पोइन्ट पाइन्छ।", "ग्राहक: के पसलभित्रै दर्ता गर्न सकिन्छ?", "पसलका कर्मचारी: हुन्छ, यो QR कोडबाट दर्ता गर्न सकिन्छ।", "ग्राहक: आज दर्ता मात्र गरे पनि हुन्छ?"],
            mn: ["Дэлгүүрийн ажилтан: Аппын гишүүнээр бүртгүүлбэл оноо нэмэгдэнэ.", "Үйлчлүүлэгч: Дэлгүүр дотор бүртгүүлж болох уу?", "Дэлгүүрийн ажилтан: Тийм, энэ QR кодоор бүртгүүлж болно.", "Үйлчлүүлэгч: Өнөөдөр зөвхөн бүртгүүлээд байж болох уу?"],
            si: ["වෙළඳසැලේ සේවකයා: app member ලෙස ලියාපදිංචි වුණොත් points ලැබෙනවා.", "පාරිභෝගිකයා: ලියාපදිංචිය වෙළඳසැල තුළ කළ හැකිද?", "වෙළඳසැලේ සේවකයා: ඔව්, මේ QR code එකෙන් ලියාපදිංචි විය හැක.", "පාරිභෝගිකයා: අද ලියාපදිංචිය විතරක් කළත් හරිද?"],
            bn: ["দোকানের কর্মী: অ্যাপ সদস্য হিসেবে নিবন্ধন করলে পয়েন্ট পাবেন।", "গ্রাহক: দোকানের ভেতরে নিবন্ধন করা যাবে?", "দোকানের কর্মী: হ্যাঁ, এই QR কোড থেকে নিবন্ধন করা যাবে।", "গ্রাহক: আজ শুধু নিবন্ধন করলেও হবে?"],
            pt: ["Funcionário da loja: Se você se cadastrar como membro do aplicativo, ganhará pontos.", "Cliente: Posso fazer o cadastro dentro da loja?", "Funcionário da loja: Sim, você pode se cadastrar por este QR code.", "Cliente: Tudo bem se hoje eu fizer apenas o cadastro?"],
            es: ["Empleado de la tienda: Si se registra como miembro de la aplicación, ganará puntos.", "Cliente: ¿Puedo registrarme dentro de la tienda?", "Empleado de la tienda: Sí, puede registrarse con este código QR.", "Cliente: ¿Está bien si hoy solo me registro?"],
            fr: ["Employé du magasin : Si vous vous inscrivez comme membre de l’application, vous gagnerez des points.", "Client : Puis-je m’inscrire dans le magasin ?", "Employé du magasin : Oui, vous pouvez vous inscrire avec ce QR code.", "Client : Est-ce possible de faire seulement l’inscription aujourd’hui ?"],
            ru: ["Сотрудник магазина: Если зарегистрироваться в приложении, будут начисляться баллы.", "Клиент: Можно зарегистрироваться в магазине?", "Сотрудник магазина: Да, можно зарегистрироваться по этому QR-коду.", "Клиент: Можно сегодня только зарегистрироваться?"],
            uk: ["Працівник магазину: Якщо зареєструватися в застосунку, нараховуватимуться бали.", "Клієнт: Можна зареєструватися в магазині?", "Працівник магазину: Так, можна зареєструватися через цей QR-код.", "Клієнт: Можна сьогодні лише зареєструватися?"]
        }
    ),

    makeA2StoreServicesDialogue(
        "a2_store_service_002",
        "商品を取り置きしてもらう",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "この靴の二十五センチを取り置きできますか。",
                target: "このくつのにじゅうごせんちをとりおきできますか",
                ruby: "この<ruby>靴<rt>くつ</rt></ruby>の<ruby>二十五<rt>にじゅうご</rt></ruby>センチを<ruby>取<rt>と</rt></ruby>り<ruby>置<rt>お</rt></ruby>きできますか。",
                romaji: "Kono kutsu no nijūgo senchi o torioki dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、本日中でしたら可能です。",
                target: "はい ほんじつちゅうでしたらかのうです",
                ruby: "はい、<ruby>本日中<rt>ほんじつちゅう</rt></ruby>でしたら<ruby>可能<rt>かのう</rt></ruby>です。",
                romaji: "Hai, honjitsu-chū deshitara kanō desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "お名前と電話番号を伺ってもよろしいですか。",
                target: "おなまえとでんわばんごうをうかがってもよろしいですか",
                ruby: "お<ruby>名前<rt>なまえ</rt></ruby>と<ruby>電話番号<rt>でんわばんごう</rt></ruby>を<ruby>伺<rt>うかが</rt></ruby>ってもよろしいですか。",
                romaji: "O-namae to denwa bangō o ukagatte mo yoroshii desu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "山田です。電話番号はこちらです。",
                target: "やまだです でんわばんごうはこちらです",
                ruby: "<ruby>山田<rt>やまだ</rt></ruby>です。<ruby>電話番号<rt>でんわばんごう</rt></ruby>はこちらです。",
                romaji: "Yamada desu. Denwa bangō wa kochira desu."
            }
        ],
        {
            ja: ["客：この靴の二十五センチを取り置きできますか。", "店員：はい、本日中でしたら可能です。", "店員：お名前と電話番号を伺ってもよろしいですか。", "客：山田です。電話番号はこちらです。"],
            en: ["Customer: Can you hold this shoe in size 25 centimeters?", "Store Staff: Yes, we can hold it until the end of today.", "Store Staff: May I have your name and phone number?", "Customer: I am Yamada. Here is my phone number."],
            "zh-CN": ["顾客：这双鞋二十五厘米的可以帮我保留吗？", "店员：可以，如果是今天之内的话可以。", "店员：可以请问您的姓名和电话号码吗？", "顾客：我是山田。电话号码在这里。"],
            "zh-TW": ["顧客：這雙鞋二十五公分的可以幫我保留嗎？", "店員：可以，如果是今天之內的話可以。", "店員：可以請問您的姓名和電話號碼嗎？", "顧客：我是山田。電話號碼在這裡。"],
            ko: ["손님: 이 신발 25센티미터 사이즈를 맡아 둘 수 있나요?", "점원: 네, 오늘 중이라면 가능합니다.", "점원: 성함과 전화번호를 여쭤봐도 될까요?", "손님: 야마다입니다. 전화번호는 여기 있습니다."],
            vi: ["Khách hàng: Cửa hàng có thể giữ giúp tôi đôi giày này cỡ 25 cm không ạ?", "Nhân viên cửa hàng: Vâng, nếu trong hôm nay thì có thể.", "Nhân viên cửa hàng: Cho tôi xin tên và số điện thoại được không ạ?", "Khách hàng: Tôi là Yamada. Số điện thoại ở đây ạ."],
            tl: ["Customer: Pwede po bang i-hold ang sapatos na ito na size 25 cm?", "Staff ng tindahan: Oo, kung hanggang ngayong araw po ay pwede.", "Staff ng tindahan: Maaari po bang hingin ang pangalan at phone number ninyo?", "Customer: Yamada po. Ito po ang phone number ko."],
            id: ["Pelanggan: Apakah sepatu ini ukuran 25 cm bisa ditahan dulu?", "Staf toko: Ya, bisa jika diambil hari ini.", "Staf toko: Boleh saya minta nama dan nomor telepon Anda?", "Pelanggan: Saya Yamada. Nomor telepon saya di sini."],
            th: ["ลูกค้า: รองเท้าคู่นี้ขนาด 25 เซนติเมตร ช่วยเก็บไว้ให้ได้ไหมคะ/ครับ", "พนักงานร้าน: ได้ค่ะ/ครับ ถ้าภายในวันนี้สามารถทำได้ค่ะ/ครับ", "พนักงานร้าน: ขอทราบชื่อและเบอร์โทรศัพท์ได้ไหมคะ/ครับ", "ลูกค้า: ชื่อยามาดะค่ะ/ครับ เบอร์โทรศัพท์อยู่ตรงนี้ค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီဖိနပ် ၂၅ စင်တီမီတာ size ကို သိမ်းထားပေးလို့ရပါသလား။", "ဆိုင်ဝန်ထမ်း: ရပါတယ်၊ ဒီနေ့အတွင်းဆို ရနိုင်ပါတယ်။", "ဆိုင်ဝန်ထမ်း: နာမည်နဲ့ ဖုန်းနံပါတ် မေးလို့ရပါသလား။", "ဖောက်သည်: ယာမဒါပါ။ ဖုန်းနံပါတ်က ဒီမှာပါ။"],
            km: ["អតិថិជន: តើអាចរក្សាទុកស្បែកជើងនេះទំហំ 25 សង់ទីម៉ែត្របានទេ?", "បុគ្គលិកហាង: បាន ប្រសិនបើក្នុងថ្ងៃនេះ។", "បុគ្គលិកហាង: តើអាចសុំឈ្មោះ និងលេខទូរស័ព្ទបានទេ?", "អតិថិជន: ខ្ញុំឈ្មោះ Yamada។ លេខទូរស័ព្ទនៅទីនេះ។"],
            ne: ["ग्राहक: यो जुत्ताको २५ सेन्टिमिटर साइज राखिदिन सक्नुहुन्छ?", "पसलका कर्मचारी: हुन्छ, आजभित्र भए सम्भव छ।", "पसलका कर्मचारी: तपाईंको नाम र फोन नम्बर सोध्न मिल्छ?", "ग्राहक: म यामादा हुँ। फोन नम्बर यहाँ छ।"],
            mn: ["Үйлчлүүлэгч: Энэ гутлын 25 см хэмжээг хадгалж өгч болох уу?", "Дэлгүүрийн ажилтан: Тийм, өнөөдөртөө бол боломжтой.", "Дэлгүүрийн ажилтан: Нэр, утасны дугаараа хэлж болох уу?", "Үйлчлүүлэгч: Би Ямада. Утасны дугаар энд байна."],
            si: ["පාරිභෝගිකයා: මේ සපත්තුවේ 25 cm size එක වෙන්කර තබා ගන්න පුළුවන්ද?", "වෙළඳසැලේ සේවකයා: ඔව්, අද දිනය තුළ නම් පුළුවන්.", "වෙළඳසැලේ සේවකයා: ඔබේ නම සහ දුරකථන අංකය ලබාගන්න පුළුවන්ද?", "පාරිභෝගිකයා: මම යමඩා. දුරකථන අංකය මෙන්න."],
            bn: ["গ্রাহক: এই জুতার ২৫ সেন্টিমিটার সাইজটি কি ধরে রাখা যাবে?", "দোকানের কর্মী: হ্যাঁ, আজকের মধ্যে হলে সম্ভব।", "দোকানের কর্মী: আপনার নাম এবং ফোন নম্বর জানতে পারি?", "গ্রাহক: আমি ইয়ামাদা। ফোন নম্বর এখানে।"],
            pt: ["Cliente: Você pode reservar este sapato no tamanho 25 cm?", "Funcionário da loja: Sim, se for até o fim do dia de hoje.", "Funcionário da loja: Posso perguntar seu nome e número de telefone?", "Cliente: Sou Yamada. Meu número está aqui."],
            es: ["Cliente: ¿Puede reservar estos zapatos en talla 25 cm?", "Empleado de la tienda: Sí, si es durante el día de hoy, es posible.", "Empleado de la tienda: ¿Me permite su nombre y número de teléfono?", "Cliente: Soy Yamada. Mi número está aquí."],
            fr: ["Client : Pouvez-vous réserver ces chaussures en 25 cm ?", "Employé du magasin : Oui, si c’est pour aujourd’hui, c’est possible.", "Employé du magasin : Puis-je avoir votre nom et votre numéro de téléphone ?", "Client : Je suis Yamada. Mon numéro est ici."],
            ru: ["Клиент: Можно отложить эти туфли размера 25 см?", "Сотрудник магазина: Да, если заберёте сегодня.", "Сотрудник магазина: Можно узнать ваше имя и номер телефона?", "Клиент: Я Ямада. Номер телефона вот здесь."],
            uk: ["Клієнт: Можна відкласти це взуття розміру 25 см?", "Працівник магазину: Так, якщо заберете сьогодні.", "Працівник магазину: Можна дізнатися ваше ім’я та номер телефону?", "Клієнт: Я Ямада. Номер телефону ось тут."]
        }
    ),

    makeA2StoreServicesDialogue(
        "a2_store_service_003",
        "ギフト包装を頼む",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "こちらをプレゼント用に包んでいただけますか。",
                target: "こちらをぷれぜんとようにつつんでいただけますか",
                ruby: "こちらをプレゼント<ruby>用<rt>よう</rt></ruby>に<ruby>包<rt>つつ</rt></ruby>んでいただけますか。",
                romaji: "Kochira o purezento-yō ni tsutsunde itadakemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "有料の箱と無料の袋がございます。",
                target: "ゆうりょうのはことむりょうのふくろがございます",
                ruby: "<ruby>有料<rt>ゆうりょう</rt></ruby>の<ruby>箱<rt>はこ</rt></ruby>と<ruby>無料<rt>むりょう</rt></ruby>の<ruby>袋<rt>ふくろ</rt></ruby>がございます。",
                romaji: "Yūryō no hako to muryō no fukuro ga gozaimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "無料の袋で大丈夫です。",
                target: "むりょうのふくろでだいじょうぶです",
                ruby: "<ruby>無料<rt>むりょう</rt></ruby>の<ruby>袋<rt>ふくろ</rt></ruby>で<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。",
                romaji: "Muryō no fukuro de daijōbu desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "リボンもお付けしますか。",
                target: "りぼんもおつけしますか",
                ruby: "リボンもお<ruby>付<rt>つ</rt></ruby>けしますか。",
                romaji: "Ribon mo o-tsuke shimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "はい、落ち着いた色でお願いします。",
                target: "はい おちついたいろでおねがいします",
                ruby: "はい、<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いた<ruby>色<rt>いろ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hai, ochitsuita iro de onegai shimasu."
            }
        ],
        {
            ja: ["客：こちらをプレゼント用に包んでいただけますか。", "店員：有料の箱と無料の袋がございます。", "客：無料の袋で大丈夫です。", "店員：リボンもお付けしますか。", "客：はい、落ち着いた色でお願いします。"],
            en: ["Customer: Could you wrap this as a gift?", "Store Staff: We have paid boxes and free bags.", "Customer: A free bag is fine.", "Store Staff: Would you like a ribbon as well?", "Customer: Yes, please use a calm color."],
            "zh-CN": ["顾客：可以把这个包装成礼物吗？", "店员：有收费的盒子和免费的袋子。", "顾客：免费的袋子就可以。", "店员：也需要丝带吗？", "顾客：是的，请用沉稳一点的颜色。"],
            "zh-TW": ["顧客：可以把這個包裝成禮物嗎？", "店員：有收費的盒子和免費的袋子。", "顧客：免費的袋子就可以。", "店員：也需要緞帶嗎？", "顧客：是的，請用沉穩一點的顏色。"],
            ko: ["손님: 이것을 선물용으로 포장해 주실 수 있나요?", "점원: 유료 상자와 무료 봉투가 있습니다.", "손님: 무료 봉투로 괜찮습니다.", "점원: 리본도 달아 드릴까요?", "손님: 네, 차분한 색으로 부탁합니다."],
            vi: ["Khách hàng: Có thể gói cái này làm quà được không ạ?", "Nhân viên cửa hàng: Có hộp mất phí và túi miễn phí.", "Khách hàng: Túi miễn phí là được ạ.", "Nhân viên cửa hàng: Quý khách có muốn thêm ruy băng không ạ?", "Khách hàng: Vâng, xin chọn màu nhẹ nhàng."],
            tl: ["Customer: Pwede po bang i-wrap ito para sa regalo?", "Staff ng tindahan: May bayad na box at libreng bag po kami.", "Customer: Okay na po ang libreng bag.", "Staff ng tindahan: Lalagyan din po ba ng ribbon?", "Customer: Oo, sa kalmadong kulay po, please."],
            id: ["Pelanggan: Bisakah ini dibungkus untuk hadiah?", "Staf toko: Ada kotak berbayar dan kantong gratis.", "Pelanggan: Kantong gratis sudah cukup.", "Staf toko: Apakah ingin ditambah pita juga?", "Pelanggan: Ya, tolong dengan warna yang tenang."],
            th: ["ลูกค้า: ช่วยห่ออันนี้เป็นของขวัญได้ไหมคะ/ครับ", "พนักงานร้าน: มี箱แบบเสียเงินและถุงฟรีค่ะ/ครับ", "ลูกค้า: ถุงฟรีก็ได้ค่ะ/ครับ", "พนักงานร้าน: ต้องการติดริบบิ้นด้วยไหมคะ/ครับ", "ลูกค้า: ค่ะ/ครับ ขอสีสุภาพ ๆ ค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီဟာကို လက်ဆောင်အဖြစ် ထုပ်ပိုးပေးနိုင်ပါသလား။", "ဆိုင်ဝန်ထမ်း: ငွေပေးရတဲ့ box နဲ့ အခမဲ့အိတ် ရှိပါတယ်။", "ဖောက်သည်: အခမဲ့အိတ်နဲ့ ရပါတယ်။", "ဆိုင်ဝန်ထမ်း: ribbon လည်း တပ်ပေးရမလား။", "ဖောက်သည်: ဟုတ်ကဲ့၊ ငြိမ်သက်တဲ့အရောင်နဲ့ လုပ်ပေးပါ။"],
            km: ["អតិថិជន: តើអាចខ្ចប់នេះជាអំណោយបានទេ?", "បុគ្គលិកហាង: មានប្រអប់បង់ប្រាក់ និងថង់ឥតគិតថ្លៃ។", "អតិថិជន: ថង់ឥតគិតថ្លៃបានហើយ។", "បុគ្គលិកហាង: តើចង់បន្ថែមខ្សែបូដែរទេ?", "អតិថិជន: បាទ/ចាស សូមប្រើពណ៌ស្ងប់ស្ងាត់។"],
            ne: ["ग्राहक: यसलाई उपहारका लागि प्याक गरिदिन सक्नुहुन्छ?", "पसलका कर्मचारी: शुल्क लाग्ने बाकस र निःशुल्क झोला छन्।", "ग्राहक: निःशुल्क झोला भए पुग्छ।", "पसलका कर्मचारी: रिबन पनि लगाइदिऊँ?", "ग्राहक: हुन्छ, शान्त देखिने रङमाお願いします।"],
            mn: ["Үйлчлүүлэгч: Үүнийг бэлэгний зориулалтаар боож өгөх үү?", "Дэлгүүрийн ажилтан: Төлбөртэй хайрцаг, үнэгүй уут байна.", "Үйлчлүүлэгч: Үнэгүй уут байхад болно.", "Дэлгүүрийн ажилтан: Тууз бас хийж өгөх үү?", "Үйлчлүүлэгч: Тийм, даруухан өнгөөрお願いします."],
            si: ["පාරිභෝගිකයා: මෙය තෑගි සඳහා ඇසුරුම් කර දෙන්න පුළුවන්ද?", "වෙළඳසැලේ සේවකයා: මුදල් ගෙවිය යුතු පෙට්ටියක් සහ නොමිලේ බෑගයක් තියෙනවා.", "පාරිභෝගිකයා: නොමිලේ බෑගය හොඳයි.", "වෙළඳසැලේ සේවකයා: ribbon එකත් දාන්නද?", "පාරිභෝගිකයා: ඔව්, සන්සුන් පාටකින්お願いします."],
            bn: ["গ্রাহক: এটিকে কি উপহার হিসেবে মোড়ানো যাবে?", "দোকানের কর্মী: পেইড বাক্স এবং ফ্রি ব্যাগ আছে।", "গ্রাহক: ফ্রি ব্যাগই ঠিক আছে।", "দোকানের কর্মী: রিবনও লাগাব?", "গ্রাহক: হ্যাঁ, শান্ত রঙেお願いします."],
            pt: ["Cliente: Você poderia embrulhar isto para presente?", "Funcionário da loja: Temos caixas pagas e sacolas gratuitas.", "Cliente: A sacola gratuita está bem.", "Funcionário da loja: Gostaria de colocar uma fita também?", "Cliente: Sim, por favor, em uma cor discreta."],
            es: ["Cliente: ¿Podría envolver esto para regalo?", "Empleado de la tienda: Tenemos cajas de pago y bolsas gratuitas.", "Cliente: La bolsa gratuita está bien.", "Empleado de la tienda: ¿También le ponemos un lazo?", "Cliente: Sí, por favor, en un color discreto."],
            fr: ["Client : Pourriez-vous emballer ceci comme cadeau ?", "Employé du magasin : Nous avons des boîtes payantes et des sacs gratuits.", "Client : Le sac gratuit ira bien.", "Employé du magasin : Voulez-vous aussi un ruban ?", "Client : Oui, dans une couleur sobre, s’il vous plaît."],
            ru: ["Клиент: Можете упаковать это как подарок?", "Сотрудник магазина: Есть платные коробки и бесплатные пакеты.", "Клиент: Бесплатного пакета достаточно.", "Сотрудник магазина: Ленту тоже добавить?", "Клиент: Да, пожалуйста, спокойного цвета."],
            uk: ["Клієнт: Можете запакувати це як подарунок?", "Працівник магазину: Є платні коробки та безкоштовні пакети.", "Клієнт: Безкоштовного пакета достатньо.", "Працівник магазину: Стрічку теж додати?", "Клієнт: Так, будь ласка, спокійного кольору."]
        }
    ),

    makeA2StoreServicesDialogue(
        "a2_store_service_004",
        "裾上げをお願いする",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "このズボンの裾上げはできますか。",
                target: "このずぼんのすそあげはできますか",
                ruby: "このズボンの<ruby>裾上<rt>すそあ</rt></ruby>げはできますか。",
                romaji: "Kono zubon no susoage wa dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、仕上がりは明日の夕方です。",
                target: "はい しあがりはあしたのゆうがたです",
                ruby: "はい、<ruby>仕上<rt>しあ</rt></ruby>がりは<ruby>明日<rt>あした</rt></ruby>の<ruby>夕方<rt>ゆうがた</rt></ruby>です。",
                romaji: "Hai, shiagari wa ashita no yūgata desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "仕事帰りに受け取りに来てもいいですか。",
                target: "しごとがえりにうけとりにきてもいいですか",
                ruby: "<ruby>仕事帰<rt>しごとがえ</rt></ruby>りに<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>りに<ruby>来<rt>き</rt></ruby>てもいいですか。",
                romaji: "Shigoto-gaeri ni uketori ni kite mo ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、閉店は二十時です。",
                target: "はい へいてんはにじゅうじです",
                ruby: "はい、<ruby>閉店<rt>へいてん</rt></ruby>は<ruby>二十時<rt>にじゅうじ</rt></ruby>です。",
                romaji: "Hai, heiten wa nijū-ji desu."
            }
        ],
        {
            ja: ["客：このズボンの裾上げはできますか。", "店員：はい、仕上がりは明日の夕方です。", "客：仕事帰りに受け取りに来てもいいですか。", "店員：はい、閉店は二十時です。"],
            en: ["Customer: Can you hem these pants?", "Store Staff: Yes, they will be ready tomorrow evening.", "Customer: May I come to pick them up after work?", "Store Staff: Yes, we close at 8 p.m."],
            "zh-CN": ["顾客：这条裤子可以改裤脚吗？", "店员：可以，明天傍晚可以完成。", "顾客：我下班后可以来取吗？", "店员：可以，本店二十点关门。"],
            "zh-TW": ["顧客：這條褲子可以修改褲長嗎？", "店員：可以，明天傍晚可以完成。", "顧客：我下班後可以來取嗎？", "店員：可以，本店二十點關門。"],
            ko: ["손님: 이 바지 밑단 수선이 가능한가요?", "점원: 네, 완성은 내일 저녁입니다.", "손님: 퇴근길에 받으러 와도 될까요?", "점원: 네, 폐점은 20시입니다."],
            vi: ["Khách hàng: Quần này có thể sửa gấu không ạ?", "Nhân viên cửa hàng: Vâng, sẽ xong vào chiều tối ngày mai.", "Khách hàng: Tôi đến lấy sau giờ làm được không ạ?", "Nhân viên cửa hàng: Vâng, cửa hàng đóng lúc 20 giờ."],
            tl: ["Customer: Pwede po bang ipa-hem ang pantalon na ito?", "Staff ng tindahan: Oo, matatapos po bukas ng hapon.", "Customer: Pwede po bang kunin pagkatapos ng trabaho?", "Staff ng tindahan: Oo, nagsasara po kami ng 8 p.m."],
            id: ["Pelanggan: Apakah celana ini bisa dipermak bagian bawahnya?", "Staf toko: Ya, selesai besok sore.", "Pelanggan: Boleh saya ambil setelah pulang kerja?", "Staf toko: Ya, toko tutup pukul 20.00."],
            th: ["ลูกค้า: กางเกงตัวนี้ตัดขาได้ไหมคะ/ครับ", "พนักงานร้าน: ได้ค่ะ/ครับ เสร็จพรุ่งนี้ช่วงเย็นค่ะ/ครับ", "ลูกค้า: หลังเลิกงานมารับได้ไหมคะ/ครับ", "พนักงานร้าน: ได้ค่ะ/ครับ ร้านปิดเวลา 20.00 น. ค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီဘောင်းဘီကို အောက်ခြေတိုအောင် ပြင်လို့ရပါသလား။", "ဆိုင်ဝန်ထမ်း: ရပါတယ်၊ မနက်ဖြန်ညနေမှာ ပြီးပါမယ်။", "ဖောက်သည်: အလုပ်ဆင်းပြီး လာယူလို့ရပါသလား။", "ဆိုင်ဝန်ထမ်း: ရပါတယ်၊ ဆိုင်ပိတ်ချိန်က ည ၈ နာရီပါ။"],
            km: ["អតិថិជន: តើអាចកែជើងខោនេះបានទេ?", "បុគ្គលិកហាង: បាន រួចរាល់ល្ងាចស្អែក។", "អតិថិជន: តើខ្ញុំអាចមកយកបន្ទាប់ពីចេញពីធ្វើការបានទេ?", "បុគ្គលិកហាង: បាន ហាងបិទម៉ោង ២០។"],
            ne: ["ग्राहक: यो पाइन्टको तल छोट्याउन सकिन्छ?", "पसलका कर्मचारी: हुन्छ, भोलि साँझसम्म तयार हुन्छ।", "ग्राहक: काम सकेपछि लिन आउन मिल्छ?", "पसलका कर्मचारी: हुन्छ, पसल २० बजे बन्द हुन्छ।"],
            mn: ["Үйлчлүүлэгч: Энэ өмдний шуумгийг засаж болох уу?", "Дэлгүүрийн ажилтан: Тийм, маргааш орой бэлэн болно.", "Үйлчлүүлэгч: Ажлын дараа ирж авч болох уу?", "Дэлгүүрийн ажилтан: Тийм, дэлгүүр 20 цагт хаана."],
            si: ["පාරිභෝගිකයා: මේ කලිසම short කරලා හදාගන්න පුළුවන්ද?", "වෙළඳසැලේ සේවකයා: ඔව්, හෙට සවසට සූදානම් වේ.", "පාරිභෝගිකයා: වැඩ අවසන් වෙලා ගන්න එන්න පුළුවන්ද?", "වෙළඳසැලේ සේවකයා: ඔව්, වෙළඳසැල 20ට වැසෙනවා."],
            bn: ["গ্রাহক: এই প্যান্টের নিচটা ছোট করা যাবে?", "দোকানের কর্মী: হ্যাঁ, আগামীকাল সন্ধ্যায় প্রস্তুত হবে।", "গ্রাহক: কাজের পর নিতে আসতে পারি?", "দোকানের কর্মী: হ্যাঁ, দোকান ২০টায় বন্ধ হয়।"],
            pt: ["Cliente: É possível fazer a barra desta calça?", "Funcionário da loja: Sim, ficará pronta amanhã à tarde.", "Cliente: Posso vir buscar depois do trabalho?", "Funcionário da loja: Sim, fechamos às 20h."],
            es: ["Cliente: ¿Se puede hacer el dobladillo de estos pantalones?", "Empleado de la tienda: Sí, estarán listos mañana por la tarde.", "Cliente: ¿Puedo venir a recogerlos después del trabajo?", "Empleado de la tienda: Sí, cerramos a las 20:00."],
            fr: ["Client : Pouvez-vous faire l’ourlet de ce pantalon ?", "Employé du magasin : Oui, ce sera prêt demain soir.", "Client : Puis-je venir le récupérer après le travail ?", "Employé du magasin : Oui, nous fermons à 20 heures."],
            ru: ["Клиент: Можно подшить эти брюки?", "Сотрудник магазина: Да, будут готовы завтра вечером.", "Клиент: Можно прийти забрать после работы?", "Сотрудник магазина: Да, мы закрываемся в 20:00."],
            uk: ["Клієнт: Можна підшити ці штани?", "Працівник магазину: Так, будуть готові завтра ввечері.", "Клієнт: Можна прийти забрати після роботи?", "Працівник магазину: Так, ми зачиняємося о 20:00."]
        }
    ),

    makeA2StoreServicesDialogue(
        "a2_store_service_005",
        "配送サービスを利用する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "この商品を自宅に送ることはできますか。",
                target: "このしょうひんをじたくにおくることはできますか",
                ruby: "この<ruby>商品<rt>しょうひん</rt></ruby>を<ruby>自宅<rt>じたく</rt></ruby>に<ruby>送<rt>おく</rt></ruby>ることはできますか。",
                romaji: "Kono shōhin o jitaku ni okuru koto wa dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、配送サービスがございます。",
                target: "はい はいそうさーびすがございます",
                ruby: "はい、<ruby>配送<rt>はいそう</rt></ruby>サービスがございます。",
                romaji: "Hai, haisō sābisu ga gozaimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "送料はいくらかかりますか。",
                target: "そうりょうはいくらかかりますか",
                ruby: "<ruby>送料<rt>そうりょう</rt></ruby>はいくらかかりますか。",
                romaji: "Sōryō wa ikura kakarimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "この地域なら八百八十円です。",
                target: "このちいきならはっぴゃくはちじゅうえんです",
                ruby: "この<ruby>地域<rt>ちいき</rt></ruby>なら<ruby>八百八十円<rt>はっぴゃくはちじゅうえん</rt></ruby>です。",
                romaji: "Kono chiiki nara happyaku hachijū-en desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "では、配送で手続きをお願いします。",
                target: "では はいそうでてつづきをおねがいします",
                ruby: "では、<ruby>配送<rt>はいそう</rt></ruby>で<ruby>手続<rt>てつづ</rt></ruby>きをお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Dewa, haisō de tetsuzuki o onegai shimasu."
            }
        ],
        {
            ja: ["客：この商品を自宅に送ることはできますか。", "店員：はい、配送サービスがございます。", "客：送料はいくらかかりますか。", "店員：この地域なら八百八十円です。", "客：では、配送で手続きをお願いします。"],
            en: ["Customer: Can this item be sent to my home?", "Store Staff: Yes, we have a delivery service.", "Customer: How much is the shipping fee?", "Store Staff: For this area, it is 880 yen.", "Customer: Then please process it for delivery."],
            "zh-CN": ["顾客：这个商品可以送到我家吗？", "店员：可以，我们有配送服务。", "顾客：运费是多少？", "店员：这个地区是880日元。", "顾客：那么，请帮我办理配送。"],
            "zh-TW": ["顧客：這個商品可以送到我家嗎？", "店員：可以，我們有配送服務。", "顧客：運費是多少？", "店員：這個地區是880日圓。", "顧客：那麼，請幫我辦理配送。"],
            ko: ["손님: 이 상품을 집으로 보낼 수 있나요?", "점원: 네, 배송 서비스가 있습니다.", "손님: 배송료는 얼마인가요?", "점원: 이 지역이라면 880엔입니다.", "손님: 그럼 배송으로 진행해 주세요."],
            vi: ["Khách hàng: Có thể gửi sản phẩm này về nhà tôi không ạ?", "Nhân viên cửa hàng: Vâng, chúng tôi có dịch vụ giao hàng.", "Khách hàng: Phí giao hàng là bao nhiêu ạ?", "Nhân viên cửa hàng: Nếu khu vực này thì 880 yên.", "Khách hàng: Vậy xin làm thủ tục giao hàng giúp tôi."],
            tl: ["Customer: Pwede po bang ipadala ang item na ito sa bahay ko?", "Staff ng tindahan: Oo, may delivery service po kami.", "Customer: Magkano po ang delivery fee?", "Staff ng tindahan: Para sa lugar na ito, 880 yen po.", "Customer: Kung ganoon, paki-process po para sa delivery."],
            id: ["Pelanggan: Apakah barang ini bisa dikirim ke rumah saya?", "Staf toko: Ya, ada layanan pengiriman.", "Pelanggan: Berapa biaya kirimnya?", "Staf toko: Untuk area ini, 880 yen.", "Pelanggan: Kalau begitu, tolong proses dengan pengiriman."],
            th: ["ลูกค้า: สินค้านี้ส่งไปที่บ้านได้ไหมคะ/ครับ", "พนักงานร้าน: ได้ค่ะ/ครับ มีบริการจัดส่งค่ะ/ครับ", "ลูกค้า: ค่าส่งเท่าไรคะ/ครับ", "พนักงานร้าน: ถ้าเป็นพื้นที่นี้ 880 เยนค่ะ/ครับ", "ลูกค้า: งั้นขอดำเนินการจัดส่งค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီပစ္စည်းကို အိမ်ကို ပို့လို့ရပါသလား။", "ဆိုင်ဝန်ထမ်း: ရပါတယ်၊ ပို့ဆောင်ရေးဝန်ဆောင်မှုရှိပါတယ်။", "ဖောက်သည်: ပို့ခ ဘယ်လောက်ကျပါသလဲ။", "ဆိုင်ဝန်ထမ်း: ဒီဒေသဆိုရင် ၈၈၀ ယန်းပါ။", "ဖောက်သည်: ဒါဆို ပို့ဆောင်ရေးနဲ့ စီစဉ်ပေးပါ။"],
            km: ["អតិថិជន: តើអាចផ្ញើទំនិញនេះទៅផ្ទះខ្ញុំបានទេ?", "បុគ្គលិកហាង: បាន យើងមានសេវាដឹកជញ្ជូន។", "អតិថិជន: តើថ្លៃដឹកជញ្ជូនប៉ុន្មាន?", "បុគ្គលិកហាង: សម្រាប់តំបន់នេះ គឺ 880 យ៉េន។", "អតិថិជន: ដូច្នេះ សូមធ្វើនីតិវិធីដឹកជញ្ជូន។"],
            ne: ["ग्राहक: यो सामान मेरो घरमा पठाउन सकिन्छ?", "पसलका कर्मचारी: हुन्छ, डेलिभरी सेवा छ।", "ग्राहक: डेलिभरी शुल्क कति लाग्छ?", "पसलका कर्मचारी: यो क्षेत्र भए ८८० येन हो।", "ग्राहक: त्यसो भए डेलिभरीको प्रक्रियाお願いします。"],
            mn: ["Үйлчлүүлэгч: Энэ барааг гэр рүү илгээж болох уу?", "Дэлгүүрийн ажилтан: Тийм, хүргэлтийн үйлчилгээ бий.", "Үйлчлүүлэгч: Хүргэлтийн төлбөр хэд вэ?", "Дэлгүүрийн ажилтан: Энэ бүсэд 880 иен.", "Үйлчлүүлэгч: Тэгвэл хүргэлтээр бүртгэж өгнө үү."],
            si: ["පාරිභෝගිකයා: මේ භාණ්ඩය මගේ ගෙදරට යවන්න පුළුවන්ද?", "වෙළඳසැලේ සේවකයා: ඔව්, බෙදාහැරීමේ සේවාව තියෙනවා.", "පාරිභෝගිකයා: බෙදාහැරීමේ ගාස්තුව කීයද?", "වෙළඳසැලේ සේවකයා: මේ ප්‍රදේශයට යෙන් 880යි.", "පාරිභෝගිකයා: එහෙනම් බෙදාහැරීමෙන් ක්‍රියාමාර්ග කරලා දෙන්න."],
            bn: ["গ্রাহক: এই পণ্যটি কি আমার বাড়িতে পাঠানো যাবে?", "দোকানের কর্মী: হ্যাঁ, আমাদের ডেলিভারি সার্ভিস আছে।", "গ্রাহক: ডেলিভারি ফি কত?", "দোকানের কর্মী: এই এলাকায় ৮৮০ ইয়েন।", "গ্রাহক: তাহলে ডেলিভারির প্রক্রিয়া করে দিন।"],
            pt: ["Cliente: Este produto pode ser enviado para minha casa?", "Funcionário da loja: Sim, temos serviço de entrega.", "Cliente: Quanto custa o frete?", "Funcionário da loja: Para esta região, custa 880 ienes.", "Cliente: Então, por favor, faça o procedimento de entrega."],
            es: ["Cliente: ¿Se puede enviar este producto a mi casa?", "Empleado de la tienda: Sí, tenemos servicio de entrega.", "Cliente: ¿Cuánto cuesta el envío?", "Empleado de la tienda: Para esta zona, son 880 yenes.", "Cliente: Entonces, por favor, haga el trámite de entrega."],
            fr: ["Client : Ce produit peut-il être envoyé à mon domicile ?", "Employé du magasin : Oui, nous avons un service de livraison.", "Client : Combien coûtent les frais de livraison ?", "Employé du magasin : Pour cette région, c’est 880 yens.", "Client : Alors, veuillez faire la procédure de livraison."],
            ru: ["Клиент: Можно отправить этот товар ко мне домой?", "Сотрудник магазина: Да, у нас есть доставка.", "Клиент: Сколько стоит доставка?", "Сотрудник магазина: Для этого района 880 иен.", "Клиент: Тогда оформите доставку, пожалуйста."],
            uk: ["Клієнт: Можна відправити цей товар мені додому?", "Працівник магазину: Так, у нас є доставка.", "Клієнт: Скільки коштує доставка?", "Працівник магазину: Для цього району 880 єн.", "Клієнт: Тоді оформіть доставку, будь ласка."]
        }
    ),

    makeA2StoreServicesDialogue(
        "a2_store_service_006",
        "サイズ交換を相談する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "サイズが合わなかったので、交換したいです。",
                target: "さいずがあわなかったので こうかんしたいです",
                ruby: "サイズが<ruby>合<rt>あ</rt></ruby>わなかったので、<ruby>交換<rt>こうかん</rt></ruby>したいです。",
                romaji: "Saizu ga awanakatta node, kōkan shitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "レシートはお持ちでしょうか。",
                target: "れしーとはおもちでしょうか",
                ruby: "レシートはお<ruby>持<rt>も</rt></ruby>ちでしょうか。",
                romaji: "Reshīto wa o-mochi deshō ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "はい、こちらにあります。",
                target: "はい こちらにあります",
                ruby: "はい、こちらにあります。",
                romaji: "Hai, kochira ni arimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "未使用でしたら交換できます。",
                target: "みしようでしたらこうかんできます",
                ruby: "<ruby>未使用<rt>みしよう</rt></ruby>でしたら<ruby>交換<rt>こうかん</rt></ruby>できます。",
                romaji: "Mishiyō deshitara kōkan dekimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "同じ商品のMサイズはありますか。",
                target: "おなじしょうひんのえむさいずはありますか",
                ruby: "<ruby>同<rt>おな</rt></ruby>じ<ruby>商品<rt>しょうひん</rt></ruby>のMサイズはありますか。",
                romaji: "Onaji shōhin no emu saizu wa arimasu ka."
            }
        ],
        {
            ja: ["客：サイズが合わなかったので、交換したいです。", "店員：レシートはお持ちでしょうか。", "客：はい、こちらにあります。", "店員：未使用でしたら交換できます。", "客：同じ商品のMサイズはありますか。"],
            en: ["Customer: The size did not fit, so I would like to exchange it.", "Store Staff: Do you have the receipt?", "Customer: Yes, I have it here.", "Store Staff: If it has not been used, we can exchange it.", "Customer: Do you have the same item in size M?"],
            "zh-CN": ["顾客：尺寸不合适，所以我想换货。", "店员：您有收据吗？", "顾客：有，在这里。", "店员：如果未使用，可以换货。", "顾客：同一商品有M码吗？"],
            "zh-TW": ["顧客：尺寸不合適，所以我想換貨。", "店員：您有收據嗎？", "顧客：有，在這裡。", "店員：如果未使用，可以換貨。", "顧客：同一商品有M號嗎？"],
            ko: ["손님: 사이즈가 맞지 않아서 교환하고 싶습니다.", "점원: 영수증을 가지고 계신가요?", "손님: 네, 여기 있습니다.", "점원: 사용하지 않은 상품이면 교환할 수 있습니다.", "손님: 같은 상품의 M 사이즈가 있나요?"],
            vi: ["Khách hàng: Kích cỡ không vừa nên tôi muốn đổi.", "Nhân viên cửa hàng: Quý khách có mang hóa đơn không ạ?", "Khách hàng: Vâng, ở đây ạ.", "Nhân viên cửa hàng: Nếu chưa sử dụng thì có thể đổi.", "Khách hàng: Có cùng sản phẩm cỡ M không ạ?"],
            tl: ["Customer: Hindi po kasya ang size kaya gusto ko pong ipapalit.", "Staff ng tindahan: May receipt po ba kayo?", "Customer: Opo, nandito po.", "Staff ng tindahan: Kung hindi pa po nagamit, pwede pong palitan.", "Customer: May M size po ba ng parehong item?"],
            id: ["Pelanggan: Ukurannya tidak cocok, jadi saya ingin menukarnya.", "Staf toko: Apakah Anda membawa struk?", "Pelanggan: Ya, ada di sini.", "Staf toko: Jika belum digunakan, bisa ditukar.", "Pelanggan: Apakah ada ukuran M untuk barang yang sama?"],
            th: ["ลูกค้า: ขนาดไม่พอดี เลยอยากเปลี่ยนค่ะ/ครับ", "พนักงานร้าน: มีใบเสร็จไหมคะ/ครับ", "ลูกค้า: มีค่ะ/ครับ อยู่ตรงนี้ค่ะ/ครับ", "พนักงานร้าน: ถ้ายังไม่ได้ใช้ สามารถเปลี่ยนได้ค่ะ/ครับ", "ลูกค้า: มีสินค้าแบบเดียวกันไซซ์ M ไหมคะ/ครับ"],
            my: ["ဖောက်သည်: size မကိုက်လို့ လဲချင်ပါတယ်။", "ဆိုင်ဝန်ထမ်း: ပြေစာပါလာပါသလား။", "ဖောက်သည်: ဟုတ်ကဲ့၊ ဒီမှာရှိပါတယ်။", "ဆိုင်ဝန်ထမ်း: မသုံးရသေးဘူးဆိုရင် လဲလို့ရပါတယ်။", "ဖောက်သည်: ဒီပစ္စည်းအတူတူရဲ့ M size ရှိပါသလား။"],
            km: ["អតិថិជន: ទំហំមិនត្រូវ ដូច្នេះខ្ញុំចង់ប្តូរ។", "បុគ្គលិកហាង: តើអ្នកមានវិក្កយបត្រទេ?", "អតិថិជន: បាទ/ចាស នៅទីនេះ។", "បុគ្គលិកហាង: ប្រសិនបើមិនទាន់ប្រើ អាចប្តូរបាន។", "អតិថិជន: តើមានទំហំ M នៃទំនិញដូចគ្នាទេ?"],
            ne: ["ग्राहक: साइज मिलेन, त्यसैले साट्न चाहन्छु।", "पसलका कर्मचारी: तपाईंको रसिद छ?", "ग्राहक: छ, यहाँ छ।", "पसलका कर्मचारी: प्रयोग नगरेको भए साट्न सकिन्छ।", "ग्राहक: यही सामानको M साइज छ?"],
            mn: ["Үйлчлүүлэгч: Хэмжээ таараагүй тул сольмоор байна.", "Дэлгүүрийн ажилтан: Танд баримт байгаа юу?", "Үйлчлүүлэгч: Тийм, энд байна.", "Дэлгүүрийн ажилтан: Ашиглаагүй бол сольж болно.", "Үйлчлүүлэгч: Ижил барааны M хэмжээ байгаа юу?"],
            si: ["පාරිභෝගිකයා: size එක නොගැලපුණා, ඒ නිසා මාරු කරන්න ඕනේ.", "වෙළඳසැලේ සේවකයා: රිසිට් එක තියෙනවද?", "පාරිභෝගිකයා: ඔව්, මෙන්න තියෙනවා.", "වෙළඳසැලේ සේවකයා: භාවිතා කරලා නැත්නම් මාරු කරන්න පුළුවන්.", "පාරිභෝගිකයා: ඒම භාණ්ඩයේ M size එක තියෙනවද?"],
            bn: ["গ্রাহক: সাইজ মেলেনি, তাই বদলাতে চাই।", "দোকানের কর্মী: আপনার কাছে রসিদ আছে?", "গ্রাহক: হ্যাঁ, এখানে আছে।", "দোকানের কর্মী: ব্যবহার না করা হলে বদলানো যাবে।", "গ্রাহক: একই পণ্যের M সাইজ আছে?"],
            pt: ["Cliente: O tamanho não serviu, então quero trocar.", "Funcionário da loja: Você tem o recibo?", "Cliente: Sim, está aqui.", "Funcionário da loja: Se não foi usado, podemos trocar.", "Cliente: Tem o mesmo produto no tamanho M?"],
            es: ["Cliente: La talla no me quedó bien, así que quiero cambiarlo.", "Empleado de la tienda: ¿Tiene el recibo?", "Cliente: Sí, aquí está.", "Empleado de la tienda: Si no se ha usado, se puede cambiar.", "Cliente: ¿Tiene el mismo producto en talla M?"],
            fr: ["Client : La taille ne convenait pas, donc je voudrais l’échanger.", "Employé du magasin : Avez-vous le reçu ?", "Client : Oui, il est ici.", "Employé du magasin : S’il n’a pas été utilisé, nous pouvons l’échanger.", "Client : Avez-vous le même article en taille M ?"],
            ru: ["Клиент: Размер не подошёл, поэтому я хочу обменять.", "Сотрудник магазина: У вас есть чек?", "Клиент: Да, вот он.", "Сотрудник магазина: Если товар не использовался, можно обменять.", "Клиент: Есть такой же товар размера M?"],
            uk: ["Клієнт: Розмір не підійшов, тому я хочу обміняти.", "Працівник магазину: У вас є чек?", "Клієнт: Так, ось він.", "Працівник магазину: Якщо товар не використовувався, можна обміняти.", "Клієнт: Є такий самий товар розміру M?"]
        }
    ),

    makeA2StoreServicesDialogue(
        "a2_store_service_007",
        "修理を相談する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "購入したかばんの金具が外れました。",
                target: "こうにゅうしたかばんのかなぐがはずれました",
                ruby: "<ruby>購入<rt>こうにゅう</rt></ruby>したかばんの<ruby>金具<rt>かなぐ</rt></ruby>が<ruby>外<rt>はず</rt></ruby>れました。",
                romaji: "Kōnyū shita kaban no kanagu ga hazuremashita."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "保証書はございますか。",
                target: "ほしょうしょはございますか",
                ruby: "<ruby>保証書<rt>ほしょうしょ</rt></ruby>はございますか。",
                romaji: "Hoshōsho wa gozaimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "はい、箱の中に入っていました。",
                target: "はい はこのなかにはいっていました",
                ruby: "はい、<ruby>箱<rt>はこ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っていました。",
                romaji: "Hai, hako no naka ni haitte imashita."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "確認しますので、少々お時間をいただきます。",
                target: "かくにんしますので しょうしょうおじかんをいただきます",
                ruby: "<ruby>確認<rt>かくにん</rt></ruby>しますので、<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>時間<rt>じかん</rt></ruby>をいただきます。",
                romaji: "Kakunin shimasu node, shōshō o-jikan o itadakimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "店内で待っていればよろしいですか。",
                target: "てんないでまっていればよろしいですか",
                ruby: "<ruby>店内<rt>てんない</rt></ruby>で<ruby>待<rt>ま</rt></ruby>っていればよろしいですか。",
                romaji: "Tennai de matte ireba yoroshii desu ka."
            }
        ],
        {
            ja: ["客：購入したかばんの金具が外れました。", "店員：保証書はございますか。", "客：はい、箱の中に入っていました。", "店員：確認しますので、少々お時間をいただきます。", "客：店内で待っていればよろしいですか。"],
            en: ["Customer: The metal fitting on the bag I bought came off.", "Store Staff: Do you have the warranty card?", "Customer: Yes, it was inside the box.", "Store Staff: We will check it, so it will take a little time.", "Customer: Should I wait inside the store?"],
            "zh-CN": ["顾客：我购买的包上的金属配件掉了。", "店员：您有保修卡吗？", "顾客：有，在盒子里面。", "店员：我们需要确认，请稍等一下。", "顾客：我在店内等就可以吗？"],
            "zh-TW": ["顧客：我購買的包包上的金屬配件掉了。", "店員：您有保固書嗎？", "顧客：有，在盒子裡面。", "店員：我們需要確認，請稍等一下。", "顧客：我在店內等就可以嗎？"],
            ko: ["손님: 구입한 가방의 금속 부품이 떨어졌습니다.", "점원: 보증서가 있으신가요?", "손님: 네, 상자 안에 들어 있었습니다.", "점원: 확인하겠습니다. 잠시 시간이 걸립니다.", "손님: 매장에서 기다리면 될까요?"],
            vi: ["Khách hàng: Phần kim loại của chiếc túi tôi đã mua bị rơi ra.", "Nhân viên cửa hàng: Quý khách có phiếu bảo hành không ạ?", "Khách hàng: Vâng, nó ở trong hộp.", "Nhân viên cửa hàng: Chúng tôi sẽ kiểm tra nên xin quý khách chờ một chút.", "Khách hàng: Tôi đợi trong cửa hàng là được phải không ạ?"],
            tl: ["Customer: Natanggal po ang metal part ng bag na binili ko.", "Staff ng tindahan: May warranty card po ba kayo?", "Customer: Opo, nasa loob po ng box.", "Staff ng tindahan: Titingnan po namin, kaya kailangan po ng kaunting oras.", "Customer: Maghihintay po ba ako sa loob ng store?"],
            id: ["Pelanggan: Bagian logam tas yang saya beli lepas.", "Staf toko: Apakah Anda memiliki kartu garansi?", "Pelanggan: Ya, ada di dalam kotak.", "Staf toko: Kami akan memeriksanya, jadi mohon tunggu sebentar.", "Pelanggan: Apakah saya cukup menunggu di dalam toko?"],
            th: ["ลูกค้า: อะไหล่โลหะของกระเป๋าที่ซื้อหลุดค่ะ/ครับ", "พนักงานร้าน: มีใบรับประกันไหมคะ/ครับ", "ลูกค้า: มีค่ะ/ครับ อยู่ในกล่องค่ะ/ครับ", "พนักงานร้าน: ขอเวลาตรวจสอบสักครู่ค่ะ/ครับ", "ลูกค้า: รอในร้านได้ใช่ไหมคะ/ครับ"],
            my: ["ဖောက်သည်: ဝယ်ထားတဲ့အိတ်ရဲ့ သတ္တုပစ္စည်းက ပြုတ်သွားပါတယ်။", "ဆိုင်ဝန်ထမ်း: အာမခံစာရွက်ရှိပါသလား။", "ဖောက်သည်: ဟုတ်ကဲ့၊ box ထဲမှာ ပါပါတယ်။", "ဆိုင်ဝန်ထမ်း: စစ်ဆေးပါမယ်၊ အချိန်နည်းနည်းယူပါမယ်။", "ဖောက်သည်: ဆိုင်ထဲမှာ စောင့်နေရင် ရပါသလား။"],
            km: ["អតិថិជន: ផ្នែកដែកនៃកាបូបដែលខ្ញុំបានទិញបានរបូត។", "បុគ្គលិកហាង: តើអ្នកមានលិខិតធានាទេ?", "អតិថិជន: បាទ/ចាស វានៅក្នុងប្រអប់។", "បុគ្គលិកហាង: យើងនឹងពិនិត្យ ដូច្នេះសូមរង់ចាំបន្តិច។", "អតិថិជន: តើខ្ញុំរង់ចាំក្នុងហាងបានទេ?"],
            ne: ["ग्राहक: मैले किनेको झोलाको धातुको भाग छुट्टियो।", "पसलका कर्मचारी: तपाईंको वारंटी कार्ड छ?", "ग्राहक: छ, बाकसभित्र थियो।", "पसलका कर्मचारी: हामी जाँच गर्छौं, त्यसैले केही समय लाग्छ।", "ग्राहक: के म पसलभित्र पर्खिनु ठीक हुन्छ?"],
            mn: ["Үйлчлүүлэгч: Миний авсан цүнхний төмөр хэсэг салчихлаа.", "Дэлгүүрийн ажилтан: Баталгааны бичиг байгаа юу?", "Үйлчлүүлэгч: Тийм, хайрцаг дотор байсан.", "Дэлгүүрийн ажилтан: Шалгах тул бага зэрэг хугацаа авна.", "Үйлчлүүлэгч: Дэлгүүр дотор хүлээж байвал болох уу?"],
            si: ["පාරිභෝගිකයා: මම මිලදී ගත් බෑගයේ ලෝහ කොටස ගැලවුණා.", "වෙළඳසැලේ සේවකයා: warranty card එක තියෙනවද?", "පාරිභෝගිකයා: ඔව්, box එක තුළ තිබුණා.", "වෙළඳසැලේ සේවකයා: පරීක්ෂා කරන්නම්, ටිකක් වෙලා ගන්නවා.", "පාරිභෝගිකයා: වෙළඳසැල තුළ ඉඳලා බලාගෙන ඉන්නද?"],
            bn: ["গ্রাহক: আমি যে ব্যাগটি কিনেছিলাম তার ধাতব অংশ খুলে গেছে।", "দোকানের কর্মী: আপনার কাছে ওয়ারেন্টি কার্ড আছে?", "গ্রাহক: হ্যাঁ, বাক্সের ভেতরে ছিল।", "দোকানের কর্মী: আমরা পরীক্ষা করব, তাই একটু সময় লাগবে।", "গ্রাহক: আমি কি দোকানের ভেতরে অপেক্ষা করব?"],
            pt: ["Cliente: A peça de metal da bolsa que comprei soltou.", "Funcionário da loja: Você tem o certificado de garantia?", "Cliente: Sim, estava dentro da caixa.", "Funcionário da loja: Vamos verificar, então levará um pouco de tempo.", "Cliente: Devo esperar dentro da loja?"],
            es: ["Cliente: Se soltó la pieza metálica del bolso que compré.", "Empleado de la tienda: ¿Tiene la garantía?", "Cliente: Sí, estaba dentro de la caja.", "Empleado de la tienda: Vamos a revisarlo, así que tardaremos un poco.", "Cliente: ¿Debo esperar dentro de la tienda?"],
            fr: ["Client : La pièce métallique du sac que j’ai acheté s’est détachée.", "Employé du magasin : Avez-vous la garantie ?", "Client : Oui, elle était dans la boîte.", "Employé du magasin : Nous allons vérifier, cela prendra un peu de temps.", "Client : Dois-je attendre dans le magasin ?"],
            ru: ["Клиент: У купленной сумки отвалилась металлическая деталь.", "Сотрудник магазина: У вас есть гарантийный талон?", "Клиент: Да, он был в коробке.", "Сотрудник магазина: Мы проверим, это займёт немного времени.", "Клиент: Мне подождать в магазине?"],
            uk: ["Клієнт: У купленої сумки відпала металева деталь.", "Працівник магазину: У вас є гарантійний талон?", "Клієнт: Так, він був у коробці.", "Працівник магазину: Ми перевіримо, це займе трохи часу.", "Клієнт: Мені почекати в магазині?"]
        }
    ),

    makeA2StoreServicesDialogue(
        "a2_store_service_008",
        "領収書を発行してもらう",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "領収書を発行していただけますか。",
                target: "りょうしゅうしょをはっこうしていただけますか",
                ruby: "<ruby>領収書<rt>りょうしゅうしょ</rt></ruby>を<ruby>発行<rt>はっこう</rt></ruby>していただけますか。",
                romaji: "Ryōshūsho o hakkō shite itadakemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "宛名はどうされますか。",
                target: "あてなはどうされますか",
                ruby: "<ruby>宛名<rt>あてな</rt></ruby>はどうされますか。",
                romaji: "Atena wa dō saremasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "会社名でお願いします。",
                target: "かいしゃめいでおねがいします",
                ruby: "<ruby>会社名<rt>かいしゃめい</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Kaisha-mei de onegai shimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "但し書きは文房具代でよろしいですか。",
                target: "ただしがきはぶんぼうぐだいでよろしいですか",
                ruby: "<ruby>但<rt>ただ</rt></ruby>し<ruby>書<rt>が</rt></ruby>きは<ruby>文房具代<rt>ぶんぼうぐだい</rt></ruby>でよろしいですか。",
                romaji: "Tadashigaki wa bunbōgu-dai de yoroshii desu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "はい、それでお願いいたします。",
                target: "はい それでおねがいいたします",
                ruby: "はい、それでお<ruby>願<rt>ねが</rt></ruby>いいたします。",
                romaji: "Hai, sore de onegai itashimasu."
            }
        ],
        {
            ja: ["客：領収書を発行していただけますか。", "店員：宛名はどうされますか。", "客：会社名でお願いします。", "店員：但し書きは文房具代でよろしいですか。", "客：はい、それでお願いいたします。"],
            en: ["Customer: Could you issue a receipt?", "Store Staff: What name should it be addressed to?", "Customer: Please use the company name.", "Store Staff: Is stationery expense okay for the description?", "Customer: Yes, that would be fine."],
            "zh-CN": ["顾客：可以开具收据吗？", "店员：抬头写什么？", "顾客：请写公司名。", "店员：但书写文具费可以吗？", "顾客：是的，就那样麻烦您。"],
            "zh-TW": ["顧客：可以開立收據嗎？", "店員：抬頭寫什麼？", "顧客：請寫公司名。", "店員：但書寫文具費可以嗎？", "顧客：是的，就那樣麻煩您。"],
            ko: ["손님: 영수증을 발행해 주실 수 있나요?", "점원: 수신인은 어떻게 하시겠습니까?", "손님: 회사명으로 부탁합니다.", "점원: 내역은 문구류 비용으로 괜찮으신가요?", "손님: 네, 그렇게 부탁드립니다."],
            vi: ["Khách hàng: Có thể xuất hóa đơn cho tôi không ạ?", "Nhân viên cửa hàng: Tên người nhận ghi như thế nào ạ?", "Khách hàng: Xin ghi tên công ty.", "Nhân viên cửa hàng: Nội dung ghi là chi phí văn phòng phẩm được không ạ?", "Khách hàng: Vâng, xin làm như vậy."],
            tl: ["Customer: Pwede po bang mag-issue ng receipt?", "Staff ng tindahan: Ano po ang ilalagay na pangalan?", "Customer: Company name po, please.", "Staff ng tindahan: Okay po ba ang description na stationery expense?", "Customer: Opo, ganoon po, please."],
            id: ["Pelanggan: Bisakah Anda menerbitkan kuitansi?", "Staf toko: Atas nama siapa?", "Pelanggan: Tolong pakai nama perusahaan.", "Staf toko: Apakah keterangan biaya alat tulis tidak apa-apa?", "Pelanggan: Ya, seperti itu saja."],
            th: ["ลูกค้า: ช่วยออกใบเสร็จให้ได้ไหมคะ/ครับ", "พนักงานร้าน: ชื่อผู้รับจะให้เขียนว่าอะไรคะ/ครับ", "ลูกค้า: ขอเป็นชื่อบริษัทค่ะ/ครับ", "พนักงานร้าน: รายการเขียนว่า ค่าเครื่องเขียน ได้ไหมคะ/ครับ", "ลูกค้า: ได้ค่ะ/ครับ ตามนั้นค่ะ/ครับ"],
            my: ["ဖောက်သည်: ပြေစာထုတ်ပေးနိုင်ပါသလား။", "ဆိုင်ဝန်ထမ်း: နာမည်ကို ဘယ်လိုရေးပေးရမလဲ။", "ဖောက်သည်: ကုမ္ပဏီနာမည်နဲ့ လုပ်ပေးပါ။", "ဆိုင်ဝန်ထမ်း: အကြောင်းအရာကို stationery expense လို့ရေးလို့ရပါသလား။", "ဖောက်သည်: ဟုတ်ကဲ့၊ အဲဒီလိုလုပ်ပေးပါ။"],
            km: ["អតិថិជន: តើអាចចេញវិក្កយបត្រឱ្យបានទេ?", "បុគ្គលិកហាង: តើឈ្មោះលើវិក្កយបត្រត្រូវធ្វើដូចម្តេច?", "អតិថិជន: សូមប្រើឈ្មោះក្រុមហ៊ុន។", "បុគ្គលិកហាង: តើសេចក្តីពិពណ៌នាជាថ្លៃសម្ភារៈការិយាល័យបានទេ?", "អតិថិជន: បាទ/ចាស សូមធ្វើដូច្នោះ។"],
            ne: ["ग्राहक: रसिद जारी गरिदिन सक्नुहुन्छ?", "पसलका कर्मचारी: नाम कसरी राख्ने?", "ग्राहक: कम्पनीको नाममाお願いします।", "पसलका कर्मचारी: विवरणमा स्टेशनरी खर्च ठीक हुन्छ?", "ग्राहक: हो, त्यसैगरीお願いします।"],
            mn: ["Үйлчлүүлэгч: Баримт гаргаж өгч болох уу?", "Дэлгүүрийн ажилтан: Хэнд гэж бичих вэ?", "Үйлчлүүлэгч: Компанийн нэрээрお願いします.", "Дэлгүүрийн ажилтан: Тайлбар дээр бичгийн хэрэгслийн зардал гэж бичвэл болох уу?", "Үйлчлүүлэгч: Тийм, тэгж өгнө үү."],
            si: ["පාරිභෝගිකයා: රිසිට් පතක් නිකුත් කර දෙන්න පුළුවන්ද?", "වෙළඳසැලේ සේවකයා: නම කෙසේ ලියන්නද?", "පාරිභෝගිකයා: සමාගමේ නමින්お願いします.", "වෙළඳසැලේ සේවකයා: විස්තරයට stationery expense කියලා ලියන්න හරිද?", "පාරිභෝගිකයා: ඔව්, එහෙමお願いします."],
            bn: ["গ্রাহক: একটি রসিদ ইস্যু করে দিতে পারবেন?", "দোকানের কর্মী: নাম কীভাবে লিখব?", "গ্রাহক: কোম্পানির নামেお願いします.", "দোকানের কর্মী: বিবরণে স্টেশনারি খরচ লিখলে হবে?", "গ্রাহক: হ্যাঁ, সেভাবেইお願いします."],
            pt: ["Cliente: Poderia emitir um recibo?", "Funcionário da loja: Em nome de quem?", "Cliente: No nome da empresa, por favor.", "Funcionário da loja: A descrição pode ser despesas com papelaria?", "Cliente: Sim, por favor, assim está bem."],
            es: ["Cliente: ¿Podría emitir un recibo?", "Empleado de la tienda: ¿A nombre de quién?", "Cliente: A nombre de la empresa, por favor.", "Empleado de la tienda: ¿Está bien escribir gastos de papelería como descripción?", "Cliente: Sí, así está bien, por favor."],
            fr: ["Client : Pourriez-vous émettre un reçu ?", "Employé du magasin : À quel nom ?", "Client : Au nom de l’entreprise, s’il vous plaît.", "Employé du magasin : La description « frais de papeterie » convient-elle ?", "Client : Oui, comme cela, s’il vous plaît."],
            ru: ["Клиент: Можете выписать квитанцию?", "Сотрудник магазина: На чьё имя оформить?", "Клиент: На название компании, пожалуйста.", "Сотрудник магазина: В назначении написать расходы на канцтовары?", "Клиент: Да, так и оформите, пожалуйста."],
            uk: ["Клієнт: Можете видати квитанцію?", "Працівник магазину: На чиє ім’я оформити?", "Клієнт: На назву компанії, будь ласка.", "Працівник магазину: В описі написати витрати на канцелярію?", "Клієнт: Так, оформіть так, будь ласка."]
        }
    )

];