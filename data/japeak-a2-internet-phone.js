// =====================================================
// Japeak A2 Level
// Scene: インターネットや電話を利用しよう
// File: data/japeak-a2-internet-phone.js
// Category Key: a2_internet_phone
// =====================================================

const a2InternetPhoneLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeA2InternetPhoneTranslations(translations) {
    const completed = {};
    a2InternetPhoneLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const a2InternetPhoneContext = {
    ja: "インターネットや電話を使うときに、Wi-Fi、スマホの契約、通信量、電話番号、ネットの不具合、オンライン手続きについて話す日本語を練習します。",
    en: "Practice Japanese for using the internet and phone, including Wi-Fi, smartphone contracts, data usage, phone numbers, internet problems, and online procedures.",
    "zh-CN": "练习使用网络和电话时的日语，包括Wi-Fi、手机合约、流量、电话号码、网络问题和网上手续。",
    "zh-TW": "練習使用網路和電話時的日語，包括Wi-Fi、手機合約、流量、電話號碼、網路問題和線上手續。",
    ko: "인터넷과 전화를 사용할 때 필요한 일본어를 연습합니다. Wi-Fi, 휴대폰 계약, 데이터 사용량, 전화번호, 인터넷 문제, 온라인 절차를 다룹니다.",
    vi: "Luyện tiếng Nhật khi sử dụng internet và điện thoại, gồm Wi-Fi, hợp đồng điện thoại, dung lượng dữ liệu, số điện thoại, sự cố mạng và thủ tục trực tuyến.",
    tl: "Practice ng Japanese para gumamit ng internet at phone, tulad ng Wi-Fi, smartphone contract, data usage, phone number, internet problems, at online procedures.",
    id: "Latihan bahasa Jepang untuk menggunakan internet dan telepon, termasuk Wi-Fi, kontrak smartphone, penggunaan data, nomor telepon, masalah internet, dan prosedur online.",
    th: "ฝึกภาษาญี่ปุ่นสำหรับการใช้อินเทอร์เน็ตและโทรศัพท์ เช่น Wi-Fi สัญญามือถือ ปริมาณข้อมูล หมายเลขโทรศัพท์ ปัญหาอินเทอร์เน็ต และขั้นตอนออนไลน์",
    my: "အင်တာနက်နှင့် ဖုန်းအသုံးပြုရာတွင် Wi-Fi၊ smartphone contract၊ data usage၊ phone number၊ internet problem နှင့် online procedure အကြောင်း ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ប្រើអ៊ីនធឺណិត និងទូរសព្ទ ដូចជា Wi-Fi កិច្ចសន្យាទូរសព្ទ បរិមាណទិន្នន័យ លេខទូរសព្ទ បញ្ហាអ៊ីនធឺណិត និងនីតិវិធីអនឡាញ។",
    ne: "internet र phone प्रयोग गर्दा Wi-Fi, smartphone contract, data usage, phone number, internet problem र online procedure बारे जापानी अभ्यास।",
    mn: "Интернет болон утас ашиглах үед хэрэгтэй япон хэл: Wi-Fi, ухаалаг утасны гэрээ, дата хэрэглээ, утасны дугаар, интернетийн асуудал, онлайн бүртгэл.",
    si: "internet සහ phone භාවිතා කරන විට Wi-Fi, smartphone contract, data usage, phone number, internet problem සහ online procedure ගැන ජපන් භාෂා පුහුණුව.",
    bn: "internet ও phone ব্যবহার করার সময় Wi-Fi, smartphone contract, data usage, phone number, internet problem এবং online procedure নিয়ে জাপানি অনুশীলন।",
    pt: "Prática de japonês para usar internet e telefone: Wi-Fi, contrato de celular, uso de dados, número de telefone, problemas de internet e procedimentos online.",
    es: "Práctica de japonés para usar internet y teléfono: Wi-Fi, contrato de celular, uso de datos, número de teléfono, problemas de internet y trámites en línea.",
    fr: "Entraînement en japonais pour utiliser Internet et le téléphone : Wi-Fi, contrat de téléphone, données, numéro de téléphone, problèmes de connexion et démarches en ligne.",
    ru: "Практика японского языка для использования интернета и телефона: Wi-Fi, договор на смартфон, трафик, номер телефона, проблемы с интернетом и онлайн-процедуры.",
    uk: "Практика японської мови для користування інтернетом і телефоном: Wi-Fi, контракт на смартфон, трафік, номер телефону, проблеми з інтернетом та онлайн-процедури."
};

const a2InternetPhoneSpeakerNames = {
    staff: {
        ja: "スタッフ",
        en: "Staff",
        "zh-CN": "工作人员",
        "zh-TW": "工作人員",
        ko: "직원",
        vi: "Nhân viên",
        tl: "Staff",
        id: "Staf",
        th: "เจ้าหน้าที่",
        my: "ဝန်ထမ်း",
        km: "បុគ្គលិក",
        ne: "कर्मचारी",
        mn: "Ажилтан",
        si: "සේවකයා",
        bn: "কর্মী",
        pt: "Funcionário",
        es: "Personal",
        fr: "Personnel",
        ru: "Сотрудник",
        uk: "Працівник"
    },
    customer: {
        ja: "利用者",
        en: "Customer",
        "zh-CN": "顾客",
        "zh-TW": "顧客",
        ko: "이용자",
        vi: "Khách hàng",
        tl: "Customer",
        id: "Pelanggan",
        th: "ผู้ใช้บริการ",
        my: "အသုံးပြုသူ",
        km: "អតិថិជន",
        ne: "ग्राहक",
        mn: "Үйлчлүүлэгч",
        si: "පාරිභෝගිකයා",
        bn: "গ্রাহক",
        pt: "Cliente",
        es: "Cliente",
        fr: "Client",
        ru: "Клиент",
        uk: "Клієнт"
    }
};

function makeA2InternetPhoneDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeA2InternetPhoneTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_internet_phone",
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
            speakerNames: a2InternetPhoneSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2InternetPhoneContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakA2InternetPhoneData = [

    makeA2InternetPhoneDialogue(
        "a2_netphone_001",
        "Wi-Fiのパスワードを聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "店内でWi-Fiを使ってもいいですか。",
                target: "てんないでわいふぁいをつかってもいいですか",
                ruby: "<ruby>店内<rt>てんない</rt></ruby>でWi-Fiを<ruby>使<rt>つか</rt></ruby>ってもいいですか。",
                romaji: "Tennai de waifai o tsukatte mo ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "はい。こちらのQRコードを読み取ってください。",
                target: "はい こちらのきゅーあーるこーどをよみとってください",
                ruby: "はい。こちらのQRコードを<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>ってください。",
                romaji: "Hai. Kochira no kyūāru kōdo o yomitotte kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "パスワードも必要ですか。",
                target: "ぱすわーどもひつようですか",
                ruby: "パスワードも<ruby>必要<rt>ひつよう</rt></ruby>ですか。",
                romaji: "Pasuwādo mo hitsuyō desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "はい。レシートの下に書いてあります。",
                target: "はい れしーとのしたにかいてあります",
                ruby: "はい。レシートの<ruby>下<rt>した</rt></ruby>に<ruby>書<rt>か</rt></ruby>いてあります。",
                romaji: "Hai. Reshīto no shita ni kaite arimasu."
            }
        ],
        {
            ja: [
                "利用者：店内でWi-Fiを使ってもいいですか。",
                "スタッフ：はい。こちらのQRコードを読み取ってください。",
                "利用者：パスワードも必要ですか。",
                "スタッフ：はい。レシートの下に書いてあります。"
            ],
            en: [
                "Customer: May I use Wi-Fi inside the store?",
                "Staff: Yes. Please scan this QR code.",
                "Customer: Do I also need a password?",
                "Staff: Yes. It is written at the bottom of the receipt."
            ],
            "zh-CN": [
                "顾客：店内可以使用Wi-Fi吗？",
                "工作人员：可以。请扫描这个二维码。",
                "顾客：也需要密码吗？",
                "工作人员：需要。写在收据的下方。"
            ],
            "zh-TW": [
                "顧客：店內可以使用Wi-Fi嗎？",
                "工作人員：可以。請掃描這個QR碼。",
                "顧客：也需要密碼嗎？",
                "工作人員：需要。寫在收據的下方。"
            ],
            ko: [
                "이용자: 매장 안에서 Wi-Fi를 사용해도 되나요?",
                "직원: 네. 이 QR 코드를 스캔해 주세요.",
                "이용자: 비밀번호도 필요한가요?",
                "직원: 네. 영수증 아래에 적혀 있습니다."
            ],
            vi: [
                "Khách hàng: Tôi có thể dùng Wi-Fi trong cửa hàng không ạ?",
                "Nhân viên: Vâng. Xin hãy quét mã QR này.",
                "Khách hàng: Có cần mật khẩu không ạ?",
                "Nhân viên: Có. Nó được viết ở dưới hóa đơn."
            ]
        }
    ),

    makeA2InternetPhoneDialogue(
        "a2_netphone_002",
        "スマホの契約について聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "スマホの契約について相談したいです。",
                target: "すまほのけいやくについてそうだんしたいです",
                ruby: "スマホの<ruby>契約<rt>けいやく</rt></ruby>について<ruby>相談<rt>そうだん</rt></ruby>したいです。",
                romaji: "Sumaho no keiyaku ni tsuite sōdan shitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "毎月どのくらいデータを使いますか。",
                target: "まいつきどのくらいでーたをつかいますか",
                ruby: "<ruby>毎月<rt>まいつき</rt></ruby>どのくらいデータを<ruby>使<rt>つか</rt></ruby>いますか。",
                romaji: "Maitsuki dono kurai dēta o tsukaimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "動画を見るので、少し多めに使います。",
                target: "どうがをみるので すこしおおめにつかいます",
                ruby: "<ruby>動画<rt>どうが</rt></ruby>を<ruby>見<rt>み</rt></ruby>るので、<ruby>少<rt>すこ</rt></ruby>し<ruby>多<rt>おお</rt></ruby>めに<ruby>使<rt>つか</rt></ruby>います。",
                romaji: "Dōga o miru node, sukoshi ōme ni tsukaimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "それなら、二十ギガのプランがおすすめです。",
                target: "それなら にじゅうぎがのぷらんがおすすめです",
                ruby: "それなら、20ギガのプランがおすすめです。",
                romaji: "Sore nara, nijū giga no puran ga osusume desu."
            }
        ],
        {
            ja: [
                "利用者：スマホの契約について相談したいです。",
                "スタッフ：毎月どのくらいデータを使いますか。",
                "利用者：動画を見るので、少し多めに使います。",
                "スタッフ：それなら、二十ギガのプランがおすすめです。"
            ],
            en: [
                "Customer: I would like to ask about a smartphone contract.",
                "Staff: About how much data do you use each month?",
                "Customer: I watch videos, so I use a little more data.",
                "Staff: In that case, the 20GB plan is recommended."
            ],
            "zh-CN": [
                "顾客：我想咨询手机合约。",
                "工作人员：您每个月大概使用多少流量？",
                "顾客：因为会看视频，所以用得稍微多一些。",
                "工作人员：那样的话，推荐20GB的套餐。"
            ],
            "zh-TW": [
                "顧客：我想諮詢手機合約。",
                "工作人員：您每個月大概使用多少流量？",
                "顧客：因為會看影片，所以用得稍微多一些。",
                "工作人員：那樣的話，推薦20GB的方案。"
            ],
            ko: [
                "이용자: 스마트폰 계약에 대해 상담하고 싶습니다.",
                "직원: 매달 데이터를 어느 정도 사용하시나요?",
                "이용자: 동영상을 보기 때문에 조금 많이 사용합니다.",
                "직원: 그렇다면 20기가 플랜을 추천합니다."
            ],
            vi: [
                "Khách hàng: Tôi muốn相談 về hợp đồng điện thoại.",
                "Nhân viên: Mỗi tháng bạn dùng khoảng bao nhiêu dữ liệu?",
                "Khách hàng: Tôi xem video nên dùng hơi nhiều dữ liệu.",
                "Nhân viên: Vậy thì gói 20GB là phù hợp."
            ]
        }
    ),

    makeA2InternetPhoneDialogue(
        "a2_netphone_003",
        "通信量を確認する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "今月の通信量を確認したいです。",
                target: "こんげつのつうしんりょうをかくにんしたいです",
                ruby: "<ruby>今月<rt>こんげつ</rt></ruby>の<ruby>通信量<rt>つうしんりょう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Kongetsu no tsūshinryō o kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "アプリを開くと、残りのデータ量が見られます。",
                target: "あぷりをひらくと のこりのでーたりょうがみられます",
                ruby: "アプリを<ruby>開<rt>ひら</rt></ruby>くと、<ruby>残<rt>のこ</rt></ruby>りのデータ<ruby>量<rt>りょう</rt></ruby>が<ruby>見<rt>み</rt></ruby>られます。",
                romaji: "Apuri o hiraku to, nokori no dēta-ryō ga miraremasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "ログインの方法がわかりません。",
                target: "ろぐいんのほうほうがわかりません",
                ruby: "ログインの<ruby>方法<rt>ほうほう</rt></ruby>がわかりません。",
                romaji: "Roguin no hōhō ga wakarimasen."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "電話番号と暗証番号を入力してください。",
                target: "でんわばんごうとあんしょうばんごうをにゅうりょくしてください",
                ruby: "<ruby>電話番号<rt>でんわばんごう</rt></ruby>と<ruby>暗証番号<rt>あんしょうばんごう</rt></ruby>を<ruby>入力<rt>にゅうりょく</rt></ruby>してください。",
                romaji: "Denwa bangō to anshō bangō o nyūryoku shite kudasai."
            }
        ],
        {
            ja: [
                "利用者：今月の通信量を確認したいです。",
                "スタッフ：アプリを開くと、残りのデータ量が見られます。",
                "利用者：ログインの方法がわかりません。",
                "スタッフ：電話番号と暗証番号を入力してください。"
            ],
            en: [
                "Customer: I would like to check this month’s data usage.",
                "Staff: If you open the app, you can see the remaining data amount.",
                "Customer: I do not know how to log in.",
                "Staff: Please enter your phone number and PIN."
            ],
            "zh-CN": [
                "顾客：我想确认这个月的流量。",
                "工作人员：打开应用程序后，可以看到剩余流量。",
                "顾客：我不知道怎么登录。",
                "工作人员：请输入电话号码和密码。"
            ],
            "zh-TW": [
                "顧客：我想確認這個月的流量。",
                "工作人員：打開應用程式後，可以看到剩餘流量。",
                "顧客：我不知道怎麼登入。",
                "工作人員：請輸入電話號碼和密碼。"
            ],
            ko: [
                "이용자: 이번 달 데이터 사용량을 확인하고 싶습니다.",
                "직원: 앱을 열면 남은 데이터 양을 볼 수 있습니다.",
                "이용자: 로그인 방법을 모르겠습니다.",
                "직원: 전화번호와 비밀번호를 입력해 주세요."
            ],
            vi: [
                "Khách hàng: Tôi muốn kiểm tra dung lượng dữ liệu tháng này.",
                "Nhân viên: Nếu mở ứng dụng, bạn có thể xem lượng dữ liệu còn lại.",
                "Khách hàng: Tôi không biết cách đăng nhập.",
                "Nhân viên: Xin hãy nhập số điện thoại và mã PIN."
            ]
        }
    ),

    makeA2InternetPhoneDialogue(
        "a2_netphone_004",
        "電話番号を伝える",
        [
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "連絡先の電話番号を教えてください。",
                target: "れんらくさきのでんわばんごうをおしえてください",
                ruby: "<ruby>連絡先<rt>れんらくさき</rt></ruby>の<ruby>電話番号<rt>でんわばんごう</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Renrakusaki no denwa bangō o oshiete kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "はい、090から始まります。",
                target: "はい ぜろきゅうぜろからはじまります",
                ruby: "はい、090から<ruby>始<rt>はじ</rt></ruby>まります。",
                romaji: "Hai, zero kyū zero kara hajimarimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "確認のため、もう一度お願いします。",
                target: "かくにんのため もういちどおねがいします",
                ruby: "<ruby>確認<rt>かくにん</rt></ruby>のため、もう<ruby>一度<rt>いちど</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Kakunin no tame, mō ichido onegai shimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "わかりました。ゆっくり言います。",
                target: "わかりました ゆっくりいいます",
                ruby: "わかりました。ゆっくり<ruby>言<rt>い</rt></ruby>います。",
                romaji: "Wakarimashita. Yukkuri iimasu."
            }
        ],
        {
            ja: [
                "スタッフ：連絡先の電話番号を教えてください。",
                "利用者：はい、090から始まります。",
                "スタッフ：確認のため、もう一度お願いします。",
                "利用者：わかりました。ゆっくり言います。"
            ],
            en: [
                "Staff: Please tell me your contact phone number.",
                "Customer: Yes, it starts with 090.",
                "Staff: To confirm, please say it one more time.",
                "Customer: Okay. I will say it slowly."
            ],
            "zh-CN": [
                "工作人员：请告诉我联系用的电话号码。",
                "顾客：好的，是从090开始。",
                "工作人员：为了确认，请再说一遍。",
                "顾客：好的。我慢慢说。"
            ],
            "zh-TW": [
                "工作人員：請告訴我聯絡用的電話號碼。",
                "顧客：好的，是從090開始。",
                "工作人員：為了確認，請再說一遍。",
                "顧客：好的。我慢慢說。"
            ],
            ko: [
                "직원: 연락처 전화번호를 알려 주세요.",
                "이용자: 네, 090으로 시작합니다.",
                "직원: 확인을 위해 한 번 더 부탁드립니다.",
                "이용자: 알겠습니다. 천천히 말하겠습니다."
            ],
            vi: [
                "Nhân viên: Xin hãy cho biết số điện thoại liên lạc.",
                "Khách hàng: Vâng, bắt đầu bằng 090.",
                "Nhân viên: Để xác nhận, xin hãy nói lại một lần nữa.",
                "Khách hàng: Vâng. Tôi sẽ nói chậm."
            ]
        }
    ),

    makeA2InternetPhoneDialogue(
        "a2_netphone_005",
        "インターネットがつながらない",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "家のインターネットがつながりません。",
                target: "いえのいんたーねっとがつながりません",
                ruby: "<ruby>家<rt>いえ</rt></ruby>のインターネットがつながりません。",
                romaji: "Ie no intānetto ga tsunagarimasen."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "ルーターの電源は入っていますか。",
                target: "るーたーのでんげんははいっていますか",
                ruby: "ルーターの<ruby>電源<rt>でんげん</rt></ruby>は<ruby>入<rt>はい</rt></ruby>っていますか。",
                romaji: "Rūtā no dengen wa haitte imasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "はい、ランプはついています。",
                target: "はい らんぷはついています",
                ruby: "はい、ランプはついています。",
                romaji: "Hai, ranpu wa tsuite imasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "一度、電源を切ってから入れ直してください。",
                target: "いちど でんげんをきってからいれなおしてください",
                ruby: "<ruby>一度<rt>いちど</rt></ruby>、<ruby>電源<rt>でんげん</rt></ruby>を<ruby>切<rt>き</rt></ruby>ってから<ruby>入<rt>い</rt></ruby>れ<ruby>直<rt>なお</rt></ruby>してください。",
                romaji: "Ichido, dengen o kitte kara irenaoshite kudasai."
            }
        ],
        {
            ja: [
                "利用者：家のインターネットがつながりません。",
                "スタッフ：ルーターの電源は入っていますか。",
                "利用者：はい、ランプはついています。",
                "スタッフ：一度、電源を切ってから入れ直してください。"
            ],
            en: [
                "Customer: The internet at my home is not connecting.",
                "Staff: Is the router turned on?",
                "Customer: Yes, the light is on.",
                "Staff: Please turn the power off once and then turn it on again."
            ],
            "zh-CN": [
                "顾客：我家的网络连不上。",
                "工作人员：路由器的电源开着吗？",
                "顾客：是的，指示灯亮着。",
                "工作人员：请先关一次电源，再重新打开。"
            ],
            "zh-TW": [
                "顧客：我家的網路連不上。",
                "工作人員：路由器的電源開著嗎？",
                "顧客：是的，指示燈亮著。",
                "工作人員：請先關一次電源，再重新打開。"
            ],
            ko: [
                "이용자: 집 인터넷이 연결되지 않습니다.",
                "직원: 라우터 전원은 켜져 있나요?",
                "이용자: 네, 램프는 켜져 있습니다.",
                "직원: 한 번 전원을 껐다가 다시 켜 주세요."
            ],
            vi: [
                "Khách hàng: Internet ở nhà tôi không kết nối được.",
                "Nhân viên: Router đã bật nguồn chưa ạ?",
                "Khách hàng: Rồi, đèn đang sáng.",
                "Nhân viên: Xin hãy tắt nguồn một lần rồi bật lại."
            ]
        }
    ),

    makeA2InternetPhoneDialogue(
        "a2_netphone_006",
        "電話をかけ直してもらう",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "今、電話に出られません。",
                target: "いま でんわにでられません",
                ruby: "<ruby>今<rt>いま</rt></ruby>、<ruby>電話<rt>でんわ</rt></ruby>に<ruby>出<rt>で</rt></ruby>られません。",
                romaji: "Ima, denwa ni deraremasen."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "では、あとでかけ直しましょうか。",
                target: "では あとでかけなおしましょうか",
                ruby: "では、あとでかけ<ruby>直<rt>なお</rt></ruby>しましょうか。",
                romaji: "Dewa, ato de kakenaoshimashō ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "はい。午後三時以降にお願いします。",
                target: "はい ごごさんじいこうにおねがいします",
                ruby: "はい。<ruby>午後三時以降<rt>ごごさんじいこう</rt></ruby>にお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hai. Gogo san-ji ikō ni onegai shimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "承知しました。午後三時以降にお電話します。",
                target: "しょうちしました ごごさんじいこうにおでんわします",
                ruby: "<ruby>承知<rt>しょうち</rt></ruby>しました。<ruby>午後三時以降<rt>ごごさんじいこう</rt></ruby>にお<ruby>電話<rt>でんわ</rt></ruby>します。",
                romaji: "Shōchi shimashita. Gogo san-ji ikō ni odenwa shimasu."
            }
        ],
        {
            ja: [
                "利用者：今、電話に出られません。",
                "スタッフ：では、あとでかけ直しましょうか。",
                "利用者：はい。午後三時以降にお願いします。",
                "スタッフ：承知しました。午後三時以降にお電話します。"
            ],
            en: [
                "Customer: I cannot answer the phone now.",
                "Staff: Then shall I call you back later?",
                "Customer: Yes. Please call after 3 p.m.",
                "Staff: Certainly. I will call after 3 p.m."
            ],
            "zh-CN": [
                "顾客：我现在不能接电话。",
                "工作人员：那么，之后再打给您好吗？",
                "顾客：好的。请在下午三点以后打。",
                "工作人员：知道了。下午三点以后给您打电话。"
            ],
            "zh-TW": [
                "顧客：我現在不能接電話。",
                "工作人員：那麼，之後再打給您可以嗎？",
                "顧客：好的。請在下午三點以後打。",
                "工作人員：知道了。下午三點以後給您打電話。"
            ],
            ko: [
                "이용자: 지금 전화를 받을 수 없습니다.",
                "직원: 그럼 나중에 다시 전화드릴까요?",
                "이용자: 네. 오후 3시 이후에 부탁드립니다.",
                "직원: 알겠습니다. 오후 3시 이후에 전화드리겠습니다."
            ],
            vi: [
                "Khách hàng: Bây giờ tôi không thể nghe điện thoại.",
                "Nhân viên: Vậy tôi gọi lại sau nhé?",
                "Khách hàng: Vâng. Xin hãy gọi sau 3 giờ chiều.",
                "Nhân viên: Tôi hiểu rồi. Tôi sẽ gọi sau 3 giờ chiều."
            ]
        }
    ),

    makeA2InternetPhoneDialogue(
        "a2_netphone_007",
        "オンライン手続きをする",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "この手続きはインターネットでできますか。",
                target: "このてつづきはいんたーねっとでできますか",
                ruby: "この<ruby>手続<rt>てつづ</rt></ruby>きはインターネットでできますか。",
                romaji: "Kono tetsuzuki wa intānetto de dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "はい。公式サイトから申し込みできます。",
                target: "はい こうしきさいとからもうしこみできます",
                ruby: "はい。<ruby>公式<rt>こうしき</rt></ruby>サイトから<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みできます。",
                romaji: "Hai. Kōshiki saito kara mōshikomi dekimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "必要なものを教えてください。",
                target: "ひつようなものをおしえてください",
                ruby: "<ruby>必要<rt>ひつよう</rt></ruby>なものを<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Hitsuyō na mono o oshiete kudasai."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "メールアドレスと本人確認書類が必要です。",
                target: "めーるあどれすとほんにんかくにんしょるいがひつようです",
                ruby: "メールアドレスと<ruby>本人確認書類<rt>ほんにんかくにんしょるい</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。",
                romaji: "Mēru adoresu to honnin kakunin shorui ga hitsuyō desu."
            }
        ],
        {
            ja: [
                "利用者：この手続きはインターネットでできますか。",
                "スタッフ：はい。公式サイトから申し込みできます。",
                "利用者：必要なものを教えてください。",
                "スタッフ：メールアドレスと本人確認書類が必要です。"
            ],
            en: [
                "Customer: Can I complete this procedure on the internet?",
                "Staff: Yes. You can apply through the official website.",
                "Customer: Please tell me what I need.",
                "Staff: You need an email address and an identity verification document."
            ],
            "zh-CN": [
                "顾客：这个手续可以在网上办理吗？",
                "工作人员：可以。可以从官方网站申请。",
                "顾客：请告诉我需要什么。",
                "工作人员：需要电子邮件地址和本人确认文件。"
            ],
            "zh-TW": [
                "顧客：這個手續可以在線上辦理嗎？",
                "工作人員：可以。可以從官方網站申請。",
                "顧客：請告訴我需要什麼。",
                "工作人員：需要電子郵件地址和本人確認文件。"
            ],
            ko: [
                "이용자: 이 절차는 인터넷으로 할 수 있나요?",
                "직원: 네. 공식 사이트에서 신청할 수 있습니다.",
                "이용자: 필요한 것을 알려 주세요.",
                "직원: 이메일 주소와 본인 확인 서류가 필요합니다."
            ],
            vi: [
                "Khách hàng: Thủ tục này có thể làm trên internet không ạ?",
                "Nhân viên: Có. Bạn có thể đăng ký từ trang web chính thức.",
                "Khách hàng: Xin hãy cho tôi biết cần những gì.",
                "Nhân viên: Cần địa chỉ email và giấy tờ xác nhận danh tính."
            ]
        }
    ),

    makeA2InternetPhoneDialogue(
        "a2_netphone_008",
        "迷惑電話について相談する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "知らない番号から何度も電話が来ます。",
                target: "しらないばんごうからなんどもでんわがきます",
                ruby: "<ruby>知<rt>し</rt></ruby>らない<ruby>番号<rt>ばんごう</rt></ruby>から<ruby>何度<rt>なんど</rt></ruby>も<ruby>電話<rt>でんわ</rt></ruby>が<ruby>来<rt>き</rt></ruby>ます。",
                romaji: "Shiranai bangō kara nando mo denwa ga kimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "心配な場合は、電話に出ない方がいいです。",
                target: "しんぱいなばあいは でんわにでないほうがいいです",
                ruby: "<ruby>心配<rt>しんぱい</rt></ruby>な<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>電話<rt>でんわ</rt></ruby>に<ruby>出<rt>で</rt></ruby>ない<ruby>方<rt>ほう</rt></ruby>がいいです。",
                romaji: "Shinpai na baai wa, denwa ni denai hō ga ii desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "着信拒否にできますか。",
                target: "ちゃくしんきょひにできますか",
                ruby: "<ruby>着信拒否<rt>ちゃくしんきょひ</rt></ruby>にできますか。",
                romaji: "Chakushin kyohi ni dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "はい。設定画面から、その番号をブロックできます。",
                target: "はい せっていがめんから そのばんごうをぶろっくできます",
                ruby: "はい。<ruby>設定画面<rt>せっていがめん</rt></ruby>から、その<ruby>番号<rt>ばんごう</rt></ruby>をブロックできます。",
                romaji: "Hai. Settei gamen kara, sono bangō o burokku dekimasu."
            }
        ],
        {
            ja: [
                "利用者：知らない番号から何度も電話が来ます。",
                "スタッフ：心配な場合は、電話に出ない方がいいです。",
                "利用者：着信拒否にできますか。",
                "スタッフ：はい。設定画面から、その番号をブロックできます。"
            ],
            en: [
                "Customer: I keep getting calls from an unknown number.",
                "Staff: If you are worried, it is better not to answer.",
                "Customer: Can I block incoming calls from that number?",
                "Staff: Yes. You can block that number from the settings screen."
            ],
            "zh-CN": [
                "顾客：我一直收到陌生号码打来的电话。",
                "工作人员：如果担心的话，最好不要接电话。",
                "顾客：可以设置拒接吗？",
                "工作人员：可以。可以从设置画面屏蔽那个号码。"
            ],
            "zh-TW": [
                "顧客：我一直收到陌生號碼打來的電話。",
                "工作人員：如果擔心的話，最好不要接電話。",
                "顧客：可以設定拒接嗎？",
                "工作人員：可以。可以從設定畫面封鎖那個號碼。"
            ],
            ko: [
                "이용자: 모르는 번호에서 여러 번 전화가 옵니다.",
                "직원: 걱정되는 경우에는 전화를 받지 않는 것이 좋습니다.",
                "이용자: 수신 거부로 설정할 수 있나요?",
                "직원: 네. 설정 화면에서 그 번호를 차단할 수 있습니다."
            ],
            vi: [
                "Khách hàng: Tôi nhận được nhiều cuộc gọi từ số lạ.",
                "Nhân viên: Nếu lo lắng thì tốt hơn là không nghe máy.",
                "Khách hàng: Có thể chặn cuộc gọi không ạ?",
                "Nhân viên: Có. Bạn có thể chặn số đó từ màn hình cài đặt."
            ]
        }
    )

];