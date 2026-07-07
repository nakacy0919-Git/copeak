// =====================================================
// Japeak A2 Level
// Scene: ハガキを送ってみよう
// File: data/japeak-a2-postcard.js
// Category Key: a2_postcard
// =====================================================

const a2PostcardLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeA2PostcardTranslations(translations) {
    const completed = {};
    a2PostcardLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const a2PostcardContext = {
    ja: "郵便局やコンビニで、ハガキを買う、切手を買う、住所を書く、料金を確認する、ポストに入れるなど、ハガキを送るための日本語を練習します。",
    en: "Practice Japanese for sending a postcard, including buying a postcard, buying stamps, writing an address, checking postage, and putting it in a mailbox.",
    "zh-CN": "练习寄明信片时使用的日语，包括购买明信片、购买邮票、写地址、确认邮费、投进邮筒等。",
    "zh-TW": "練習寄明信片時使用的日語，包括購買明信片、購買郵票、寫地址、確認郵資、投進郵筒等。",
    ko: "우체국이나 편의점에서 엽서를 사고, 우표를 사고, 주소를 쓰고, 요금을 확인하고, 우체통에 넣는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật để gửi bưu thiếp, gồm mua bưu thiếp, mua tem, viết địa chỉ, kiểm tra cước phí và bỏ vào hộp thư.",
    tl: "Practice ng Japanese para magpadala ng postcard, tulad ng pagbili ng postcard, stamp, pagsusulat ng address, pag-check ng postage, at paghulog sa mailbox.",
    id: "Latihan bahasa Jepang untuk mengirim kartu pos, termasuk membeli kartu pos, membeli perangko, menulis alamat, mengecek ongkos kirim, dan memasukkannya ke kotak pos.",
    th: "ฝึกภาษาญี่ปุ่นสำหรับส่งโปสต์การ์ด เช่น ซื้อโปสต์การ์ด ซื้อแสตมป์ เขียนที่อยู่ ตรวจสอบค่าส่ง และหย่อนลงตู้ไปรษณีย์",
    my: "postcard ပို့ရန် postcard ဝယ်ခြင်း၊ stamp ဝယ်ခြင်း၊ လိပ်စာရေးခြင်း၊ ပို့ခစစ်ခြင်း၊ mailbox ထဲထည့်ခြင်းတို့အတွက် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ផ្ញើកាតប៉ុស្តាល់ ដូចជា ទិញកាតប៉ុស្តាល់ ទិញតែម សរសេរអាសយដ្ឋាន ពិនិត្យថ្លៃផ្ញើ និងដាក់ក្នុងប្រអប់សំបុត្រ។",
    ne: "postcard पठाउन postcard किन्ने, stamp किन्ने, ठेगाना लेख्ने, postage जाँच गर्ने र mailbox मा हाल्ने जापानी अभ्यास।",
    mn: "Ил захидал илгээхэд хэрэгтэй япон хэл: postcard, stamp авах, хаяг бичих, төлбөр шалгах, шуудангийн хайрцагт хийх.",
    si: "postcard එකක් යැවීමට postcard එකක් මිලදී ගැනීම, stamp එකක් ගැනීම, address ලිවීම, postage check කිරීම සහ mailbox එකට දැමීම සඳහා ජපන් භාෂා පුහුණුව.",
    bn: "postcard পাঠানোর জন্য postcard কেনা, stamp কেনা, ঠিকানা লেখা, postage check করা এবং mailbox-এ ফেলার জাপানি অনুশীলন।",
    pt: "Prática de japonês para enviar um cartão-postal: comprar cartão-postal, selo, escrever endereço, verificar a taxa e colocar na caixa de correio.",
    es: "Práctica de japonés para enviar una postal: comprar una postal, comprar sello, escribir la dirección, confirmar el franqueo y echarla al buzón.",
    fr: "Entraînement en japonais pour envoyer une carte postale : acheter une carte, un timbre, écrire l’adresse, vérifier le tarif et la mettre dans une boîte aux lettres.",
    ru: "Практика японского языка для отправки открытки: купить открытку, марку, написать адрес, проверить оплату и опустить в почтовый ящик.",
    uk: "Практика японської мови для надсилання листівки: купити листівку, марку, написати адресу, перевірити оплату й покласти в поштову скриньку."
};

const a2PostcardSpeakerNames = {
    staff: {
        ja: "郵便局の人",
        en: "Post Office Staff",
        "zh-CN": "邮局工作人员",
        "zh-TW": "郵局工作人員",
        ko: "우체국 직원",
        vi: "Nhân viên bưu điện",
        tl: "Post office staff",
        id: "Staf kantor pos",
        th: "เจ้าหน้าที่ไปรษณีย์",
        my: "စာတိုက်ဝန်ထမ်း",
        km: "បុគ្គលិកប្រៃសណីយ៍",
        ne: "हुलाक कर्मचारी",
        mn: "Шуудангийн ажилтан",
        si: "තැපැල් කාර්යාල සේවකයා",
        bn: "ডাকঘর কর্মী",
        pt: "Funcionário dos correios",
        es: "Personal de correos",
        fr: "Employé de la poste",
        ru: "Сотрудник почты",
        uk: "Працівник пошти"
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

function makeA2PostcardDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeA2PostcardTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_postcard",
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
            speakerNames: a2PostcardSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2PostcardContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakA2PostcardData = [

    makeA2PostcardDialogue(
        "a2_postcard_001",
        "ハガキを買う",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "ハガキを三枚買いたいです。",
                target: "はがきをさんまいかいたいです",
                ruby: "ハガキを<ruby>三枚<rt>さんまい</rt></ruby><ruby>買<rt>か</rt></ruby>いたいです。",
                romaji: "Hagaki o sanmai kaitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "普通のハガキでよろしいですか。",
                target: "ふつうのはがきでよろしいですか",
                ruby: "<ruby>普通<rt>ふつう</rt></ruby>のハガキでよろしいですか。",
                romaji: "Futsū no hagaki de yoroshii desu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "はい、普通のハガキでお願いします。",
                target: "はい ふつうのはがきでおねがいします",
                ruby: "はい、<ruby>普通<rt>ふつう</rt></ruby>のハガキでお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hai, futsū no hagaki de onegai shimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "三枚で255円です。",
                target: "さんまいでにひゃくごじゅうごえんです",
                ruby: "<ruby>三枚<rt>さんまい</rt></ruby>で255<ruby>円<rt>えん</rt></ruby>です。",
                romaji: "Sanmai de nihyaku gojūgo-en desu."
            }
        ],
        {
            ja: [
                "利用者：ハガキを三枚買いたいです。",
                "郵便局の人：普通のハガキでよろしいですか。",
                "利用者：はい、普通のハガキでお願いします。",
                "郵便局の人：三枚で255円です。"
            ],
            en: [
                "Customer: I would like to buy three postcards.",
                "Post Office Staff: Would regular postcards be okay?",
                "Customer: Yes, regular postcards, please.",
                "Post Office Staff: Three postcards are 255 yen."
            ],
            "zh-CN": [
                "顾客：我想买三张明信片。",
                "邮局工作人员：普通明信片可以吗？",
                "顾客：可以，请给我普通明信片。",
                "邮局工作人员：三张255日元。"
            ],
            "zh-TW": [
                "顧客：我想買三張明信片。",
                "郵局工作人員：普通明信片可以嗎？",
                "顧客：可以，請給我普通明信片。",
                "郵局工作人員：三張255日圓。"
            ],
            ko: [
                "이용자: 엽서 세 장을 사고 싶습니다.",
                "우체국 직원: 보통 엽서로 괜찮으신가요?",
                "이용자: 네, 보통 엽서로 부탁드립니다.",
                "우체국 직원: 세 장에 255엔입니다."
            ],
            vi: [
                "Khách hàng: Tôi muốn mua ba tấm bưu thiếp.",
                "Nhân viên bưu điện: Bưu thiếp thường được không ạ?",
                "Khách hàng: Vâng, cho tôi bưu thiếp thường.",
                "Nhân viên bưu điện: Ba tấm là 255 yên."
            ]
        }
    ),

    makeA2PostcardDialogue(
        "a2_postcard_002",
        "切手を買う",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "このハガキを送りたいのですが、切手はいくらですか。",
                target: "このはがきをおくりたいのですが きってはいくらですか",
                ruby: "このハガキを<ruby>送<rt>おく</rt></ruby>りたいのですが、<ruby>切手<rt>きって</rt></ruby>はいくらですか。",
                romaji: "Kono hagaki o okuritai no desu ga, kitte wa ikura desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "国内あてなら、85円です。",
                target: "こくないあてなら はちじゅうごえんです",
                ruby: "<ruby>国内<rt>こくない</rt></ruby>あてなら、85<ruby>円<rt>えん</rt></ruby>です。",
                romaji: "Kokunai ate nara, hachijūgo-en desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "では、85円切手を一枚ください。",
                target: "では はちじゅうごえんきってをいちまいください",
                ruby: "では、85<ruby>円切手<rt>えんきって</rt></ruby>を<ruby>一枚<rt>いちまい</rt></ruby>ください。",
                romaji: "Dewa, hachijūgo-en kitte o ichimai kudasai."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "はい。こちらに貼ってください。",
                target: "はい こちらにはってください",
                ruby: "はい。こちらに<ruby>貼<rt>は</rt></ruby>ってください。",
                romaji: "Hai. Kochira ni hatte kudasai."
            }
        ],
        {
            ja: [
                "利用者：このハガキを送りたいのですが、切手はいくらですか。",
                "郵便局の人：国内あてなら、85円です。",
                "利用者：では、85円切手を一枚ください。",
                "郵便局の人：はい。こちらに貼ってください。"
            ],
            en: [
                "Customer: I would like to send this postcard. How much is the stamp?",
                "Post Office Staff: If it is domestic, it is 85 yen.",
                "Customer: Then please give me one 85-yen stamp.",
                "Post Office Staff: Sure. Please put it here."
            ],
            "zh-CN": [
                "顾客：我想寄这张明信片，邮票多少钱？",
                "邮局工作人员：如果是寄国内，是85日元。",
                "顾客：那么，请给我一张85日元的邮票。",
                "邮局工作人员：好的。请贴在这里。"
            ],
            "zh-TW": [
                "顧客：我想寄這張明信片，郵票多少錢？",
                "郵局工作人員：如果是寄國內，是85日圓。",
                "顧客：那麼，請給我一張85日圓的郵票。",
                "郵局工作人員：好的。請貼在這裡。"
            ],
            ko: [
                "이용자: 이 엽서를 보내고 싶은데 우표는 얼마인가요?",
                "우체국 직원: 국내로 보내는 경우 85엔입니다.",
                "이용자: 그럼 85엔 우표 한 장 주세요.",
                "우체국 직원: 네. 여기에 붙여 주세요."
            ],
            vi: [
                "Khách hàng: Tôi muốn gửi bưu thiếp này. Tem là bao nhiêu tiền ạ?",
                "Nhân viên bưu điện: Nếu gửi trong nước thì 85 yên.",
                "Khách hàng: Vậy cho tôi một con tem 85 yên.",
                "Nhân viên bưu điện: Vâng. Xin hãy dán vào đây."
            ]
        }
    ),

    makeA2PostcardDialogue(
        "a2_postcard_003",
        "住所の書き方を聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "住所はどちら側に書けばいいですか。",
                target: "じゅうしょはどちらがわにかけばいいですか",
                ruby: "<ruby>住所<rt>じゅうしょ</rt></ruby>はどちら<ruby>側<rt>がわ</rt></ruby>に<ruby>書<rt>か</rt></ruby>けばいいですか。",
                romaji: "Jūsho wa dochira-gawa ni kakeba ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "こちらの表側に、相手の住所と名前を書いてください。",
                target: "こちらのおもてがわに あいてのじゅうしょとなまえをかいてください",
                ruby: "こちらの<ruby>表側<rt>おもてがわ</rt></ruby>に、<ruby>相手<rt>あいて</rt></ruby>の<ruby>住所<rt>じゅうしょ</rt></ruby>と<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Kochira no omote-gawa ni, aite no jūsho to namae o kaite kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "自分の住所も必要ですか。",
                target: "じぶんのじゅうしょもひつようですか",
                ruby: "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>住所<rt>じゅうしょ</rt></ruby>も<ruby>必要<rt>ひつよう</rt></ruby>ですか。",
                romaji: "Jibun no jūsho mo hitsuyō desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "はい。左下に小さく書いておくと安心です。",
                target: "はい ひだりしたにちいさくかいておくとあんしんです",
                ruby: "はい。<ruby>左下<rt>ひだりした</rt></ruby>に<ruby>小<rt>ちい</rt></ruby>さく<ruby>書<rt>か</rt></ruby>いておくと<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Hai. Hidari-shita ni chiisaku kaite oku to anshin desu."
            }
        ],
        {
            ja: [
                "利用者：住所はどちら側に書けばいいですか。",
                "郵便局の人：こちらの表側に、相手の住所と名前を書いてください。",
                "利用者：自分の住所も必要ですか。",
                "郵便局の人：はい。左下に小さく書いておくと安心です。"
            ],
            en: [
                "Customer: Which side should I write the address on?",
                "Post Office Staff: Please write the recipient’s address and name on this front side.",
                "Customer: Do I also need my own address?",
                "Post Office Staff: Yes. It is safer to write it small in the lower left."
            ],
            "zh-CN": [
                "顾客：地址应该写在哪一面？",
                "邮局工作人员：请在这一面的正面写收件人的地址和姓名。",
                "顾客：也需要写自己的地址吗？",
                "邮局工作人员：需要。写在左下角小一点会比较安心。"
            ],
            "zh-TW": [
                "顧客：地址應該寫在哪一面？",
                "郵局工作人員：請在這一面的正面寫收件人的地址和姓名。",
                "顧客：也需要寫自己的地址嗎？",
                "郵局工作人員：需要。寫在左下角小一點會比較安心。"
            ],
            ko: [
                "이용자: 주소는 어느 쪽에 쓰면 되나요?",
                "우체국 직원: 이 앞면에 상대방의 주소와 이름을 써 주세요.",
                "이용자: 제 주소도 필요한가요?",
                "우체국 직원: 네. 왼쪽 아래에 작게 써 두면 안심입니다."
            ],
            vi: [
                "Khách hàng: Tôi nên viết địa chỉ ở mặt nào ạ?",
                "Nhân viên bưu điện: Xin hãy viết địa chỉ và tên người nhận ở mặt trước này.",
                "Khách hàng: Có cần địa chỉ của tôi không ạ?",
                "Nhân viên bưu điện: Có. Viết nhỏ ở phía dưới bên trái thì sẽ yên tâm hơn."
            ]
        }
    ),

    makeA2PostcardDialogue(
        "a2_postcard_004",
        "海外に送れるか聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "このハガキを海外に送ることはできますか。",
                target: "このはがきをかいがいにおくることはできますか",
                ruby: "このハガキを<ruby>海外<rt>かいがい</rt></ruby>に<ruby>送<rt>おく</rt></ruby>ることはできますか。",
                romaji: "Kono hagaki o kaigai ni okuru koto wa dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "はい。送る国によって料金が変わります。",
                target: "はい おくるくにによってりょうきんがかわります",
                ruby: "はい。<ruby>送<rt>おく</rt></ruby>る<ruby>国<rt>くに</rt></ruby>によって<ruby>料金<rt>りょうきん</rt></ruby>が<ruby>変<rt>か</rt></ruby>わります。",
                romaji: "Hai. Okuru kuni ni yotte ryōkin ga kawarimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "フィリピンに送りたいです。",
                target: "ふぃりぴんにおくりたいです",
                ruby: "フィリピンに<ruby>送<rt>おく</rt></ruby>りたいです。",
                romaji: "Firipin ni okuritai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "では、料金を確認しますので、少々お待ちください。",
                target: "では りょうきんをかくにんしますので しょうしょうおまちください",
                ruby: "では、<ruby>料金<rt>りょうきん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しますので、<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。",
                romaji: "Dewa, ryōkin o kakunin shimasu node, shōshō omachi kudasai."
            }
        ],
        {
            ja: [
                "利用者：このハガキを海外に送ることはできますか。",
                "郵便局の人：はい。送る国によって料金が変わります。",
                "利用者：フィリピンに送りたいです。",
                "郵便局の人：では、料金を確認しますので、少々お待ちください。"
            ],
            en: [
                "Customer: Can I send this postcard overseas?",
                "Post Office Staff: Yes. The fee changes depending on the country.",
                "Customer: I would like to send it to the Philippines.",
                "Post Office Staff: Then I will check the fee. Please wait a moment."
            ],
            "zh-CN": [
                "顾客：这张明信片可以寄到海外吗？",
                "邮局工作人员：可以。费用会根据寄送国家而不同。",
                "顾客：我想寄到菲律宾。",
                "邮局工作人员：那么我确认一下费用，请稍等。"
            ],
            "zh-TW": [
                "顧客：這張明信片可以寄到海外嗎？",
                "郵局工作人員：可以。費用會根據寄送國家而不同。",
                "顧客：我想寄到菲律賓。",
                "郵局工作人員：那麼我確認一下費用，請稍等。"
            ],
            ko: [
                "이용자: 이 엽서를 해외로 보낼 수 있나요?",
                "우체국 직원: 네. 보내는 나라에 따라 요금이 달라집니다.",
                "이용자: 필리핀으로 보내고 싶습니다.",
                "우체국 직원: 그럼 요금을 확인하겠습니다. 잠시만 기다려 주세요."
            ],
            vi: [
                "Khách hàng: Tôi có thể gửi bưu thiếp này ra nước ngoài không ạ?",
                "Nhân viên bưu điện: Có. Phí thay đổi tùy theo quốc gia gửi đến.",
                "Khách hàng: Tôi muốn gửi đến Philippines.",
                "Nhân viên bưu điện: Vậy tôi sẽ kiểm tra phí. Xin hãy đợi một chút."
            ]
        }
    ),

    makeA2PostcardDialogue(
        "a2_postcard_005",
        "ポストの場所を聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "この近くにポストはありますか。",
                target: "このちかくにぽすとはありますか",
                ruby: "この<ruby>近<rt>ちか</rt></ruby>くにポストはありますか。",
                romaji: "Kono chikaku ni posuto wa arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "入口を出て、右側に赤いポストがあります。",
                target: "いりぐちをでて みぎがわにあかいぽすとがあります",
                ruby: "<ruby>入口<rt>いりぐち</rt></ruby>を<ruby>出<rt>で</rt></ruby>て、<ruby>右側<rt>みぎがわ</rt></ruby>に<ruby>赤<rt>あか</rt></ruby>いポストがあります。",
                romaji: "Iriguchi o dete, migi-gawa ni akai posuto ga arimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "ハガキはどちらの口に入れますか。",
                target: "はがきはどちらのくちにいれますか",
                ruby: "ハガキはどちらの<ruby>口<rt>くち</rt></ruby>に<ruby>入<rt>い</rt></ruby>れますか。",
                romaji: "Hagaki wa dochira no kuchi ni iremasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "手紙・ハガキと書いてある方に入れてください。",
                target: "てがみ はがきとかいてあるほうにいれてください",
                ruby: "<ruby>手紙<rt>てがみ</rt></ruby>・ハガキと<ruby>書<rt>か</rt></ruby>いてある<ruby>方<rt>ほう</rt></ruby>に<ruby>入<rt>い</rt></ruby>れてください。",
                romaji: "Tegami, hagaki to kaite aru hō ni irete kudasai."
            }
        ],
        {
            ja: [
                "利用者：この近くにポストはありますか。",
                "郵便局の人：入口を出て、右側に赤いポストがあります。",
                "利用者：ハガキはどちらの口に入れますか。",
                "郵便局の人：手紙・ハガキと書いてある方に入れてください。"
            ],
            en: [
                "Customer: Is there a mailbox near here?",
                "Post Office Staff: Go out the entrance, and there is a red mailbox on the right.",
                "Customer: Which slot should I put the postcard into?",
                "Post Office Staff: Please put it into the side that says letters and postcards."
            ],
            "zh-CN": [
                "顾客：这附近有邮筒吗？",
                "邮局工作人员：从入口出去，右边有一个红色邮筒。",
                "顾客：明信片应该放进哪个投入口？",
                "邮局工作人员：请放进写着信件・明信片的那一边。"
            ],
            "zh-TW": [
                "顧客：這附近有郵筒嗎？",
                "郵局工作人員：從入口出去，右邊有一個紅色郵筒。",
                "顧客：明信片應該放進哪個投入口？",
                "郵局工作人員：請放進寫著信件・明信片的那一邊。"
            ],
            ko: [
                "이용자: 이 근처에 우체통이 있나요?",
                "우체국 직원: 입구를 나가서 오른쪽에 빨간 우체통이 있습니다.",
                "이용자: 엽서는 어느 투입구에 넣나요?",
                "우체국 직원: 편지・엽서라고 쓰여 있는 쪽에 넣어 주세요."
            ],
            vi: [
                "Khách hàng: Gần đây có hộp thư không ạ?",
                "Nhân viên bưu điện: Ra khỏi lối vào, bên phải có hộp thư màu đỏ.",
                "Khách hàng: Tôi nên bỏ bưu thiếp vào khe nào?",
                "Nhân viên bưu điện: Xin hãy bỏ vào phía có ghi thư và bưu thiếp."
            ]
        }
    ),

    makeA2PostcardDialogue(
        "a2_postcard_006",
        "集荷時間を確認する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "今日中に集めてもらえますか。",
                target: "きょうじゅうにあつめてもらえますか",
                ruby: "<ruby>今日中<rt>きょうじゅう</rt></ruby>に<ruby>集<rt>あつ</rt></ruby>めてもらえますか。",
                romaji: "Kyōjū ni atsumete moraemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "このポストの最終集荷は午後五時です。",
                target: "このぽすとのさいしゅうしゅうかはごごごじです",
                ruby: "このポストの<ruby>最終集荷<rt>さいしゅうしゅうか</rt></ruby>は<ruby>午後五時<rt>ごごごじ</rt></ruby>です。",
                romaji: "Kono posuto no saishū shūka wa gogo go-ji desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "今出せば、今日の便に間に合いますか。",
                target: "いまだせば きょうのびんにまにあいますか",
                ruby: "<ruby>今<rt>いま</rt></ruby><ruby>出<rt>だ</rt></ruby>せば、<ruby>今日<rt>きょう</rt></ruby>の<ruby>便<rt>びん</rt></ruby>に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>いますか。",
                romaji: "Ima daseba, kyō no bin ni maniaimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "はい。五時前なら今日の集荷に間に合います。",
                target: "はい ごじまえならきょうのしゅうかにまにあいます",
                ruby: "はい。<ruby>五時前<rt>ごじまえ</rt></ruby>なら<ruby>今日<rt>きょう</rt></ruby>の<ruby>集荷<rt>しゅうか</rt></ruby>に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>います。",
                romaji: "Hai. Go-ji mae nara kyō no shūka ni maniaimasu."
            }
        ],
        {
            ja: [
                "利用者：今日中に集めてもらえますか。",
                "郵便局の人：このポストの最終集荷は午後五時です。",
                "利用者：今出せば、今日の便に間に合いますか。",
                "郵便局の人：はい。五時前なら今日の集荷に間に合います。"
            ],
            en: [
                "Customer: Will it be collected today?",
                "Post Office Staff: The final collection for this mailbox is 5 p.m.",
                "Customer: If I send it now, will it make today’s collection?",
                "Post Office Staff: Yes. If it is before five, it will make today’s collection."
            ],
            "zh-CN": [
                "顾客：今天会被收走吗？",
                "邮局工作人员：这个邮筒的最后收取时间是下午五点。",
                "顾客：现在投的话，赶得上今天的邮件吗？",
                "邮局工作人员：可以。五点前的话赶得上今天的收取。"
            ],
            "zh-TW": [
                "顧客：今天會被收走嗎？",
                "郵局工作人員：這個郵筒的最後收取時間是下午五點。",
                "顧客：現在投的話，趕得上今天的郵件嗎？",
                "郵局工作人員：可以。五點前的話趕得上今天的收取。"
            ],
            ko: [
                "이용자: 오늘 안에 수거되나요?",
                "우체국 직원: 이 우체통의 마지막 수거는 오후 5시입니다.",
                "이용자: 지금 넣으면 오늘 우편편에 맞출 수 있나요?",
                "우체국 직원: 네. 5시 전이면 오늘 수거에 맞출 수 있습니다."
            ],
            vi: [
                "Khách hàng: Hôm nay có được thu không ạ?",
                "Nhân viên bưu điện: Lần thu cuối của hộp thư này là 5 giờ chiều.",
                "Khách hàng: Nếu tôi bỏ bây giờ thì có kịp chuyến hôm nay không ạ?",
                "Nhân viên bưu điện: Có. Nếu trước 5 giờ thì kịp lần thu hôm nay."
            ]
        }
    ),

    makeA2PostcardDialogue(
        "a2_postcard_007",
        "届く日数を聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "このハガキは、何日くらいで届きますか。",
                target: "このはがきは なんにちくらいでとどきますか",
                ruby: "このハガキは、<ruby>何日<rt>なんにち</rt></ruby>くらいで<ruby>届<rt>とど</rt></ruby>きますか。",
                romaji: "Kono hagaki wa, nannichi kurai de todokimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "近い地域なら、二日から三日くらいです。",
                target: "ちかいちいきなら ふつかからみっかくらいです",
                ruby: "<ruby>近<rt>ちか</rt></ruby>い<ruby>地域<rt>ちいき</rt></ruby>なら、<ruby>二日<rt>ふつか</rt></ruby>から<ruby>三日<rt>みっか</rt></ruby>くらいです。",
                romaji: "Chikai chiiki nara, futsuka kara mikka kurai desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "土日をはさむと、遅くなりますか。",
                target: "どにちをはさむと おそくなりますか",
                ruby: "<ruby>土日<rt>どにち</rt></ruby>をはさむと、<ruby>遅<rt>おそ</rt></ruby>くなりますか。",
                romaji: "Donichi o hasamu to, osoku narimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "はい。少し遅くなる場合があります。",
                target: "はい すこしおそくなるばあいがあります",
                ruby: "はい。<ruby>少<rt>すこ</rt></ruby>し<ruby>遅<rt>おそ</rt></ruby>くなる<ruby>場合<rt>ばあい</rt></ruby>があります。",
                romaji: "Hai. Sukoshi osoku naru baai ga arimasu."
            }
        ],
        {
            ja: [
                "利用者：このハガキは、何日くらいで届きますか。",
                "郵便局の人：近い地域なら、二日から三日くらいです。",
                "利用者：土日をはさむと、遅くなりますか。",
                "郵便局の人：はい。少し遅くなる場合があります。"
            ],
            en: [
                "Customer: About how many days will this postcard take to arrive?",
                "Post Office Staff: If it is a nearby area, about two to three days.",
                "Customer: If it includes a weekend, will it be delayed?",
                "Post Office Staff: Yes. It may be a little delayed."
            ],
            "zh-CN": [
                "顾客：这张明信片大概几天能到？",
                "邮局工作人员：如果是附近地区，大约两到三天。",
                "顾客：如果中间有周末，会变慢吗？",
                "邮局工作人员：会。有时候会稍微晚一点。"
            ],
            "zh-TW": [
                "顧客：這張明信片大概幾天能到？",
                "郵局工作人員：如果是附近地區，大約兩到三天。",
                "顧客：如果中間有週末，會變慢嗎？",
                "郵局工作人員：會。有時候會稍微晚一點。"
            ],
            ko: [
                "이용자: 이 엽서는 며칠 정도 걸려서 도착하나요?",
                "우체국 직원: 가까운 지역이라면 2일에서 3일 정도입니다.",
                "이용자: 주말이 끼면 늦어지나요?",
                "우체국 직원: 네. 조금 늦어지는 경우가 있습니다."
            ],
            vi: [
                "Khách hàng: Bưu thiếp này mất khoảng mấy ngày để đến nơi ạ?",
                "Nhân viên bưu điện: Nếu là khu vực gần thì khoảng hai đến ba ngày.",
                "Khách hàng: Nếu có cuối tuần ở giữa thì có chậm hơn không ạ?",
                "Nhân viên bưu điện: Có. Có trường hợp sẽ chậm hơn một chút."
            ]
        }
    ),

    makeA2PostcardDialogue(
        "a2_postcard_008",
        "書き間違えたとき",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "住所を書き間違えてしまいました。",
                target: "じゅうしょをかきまちがえてしまいました",
                ruby: "<ruby>住所<rt>じゅうしょ</rt></ruby>を<ruby>書<rt>か</rt></ruby>き<ruby>間違<rt>まちが</rt></ruby>えてしまいました。",
                romaji: "Jūsho o kakimachigaete shimaimashita."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "まだ出していなければ、書き直して大丈夫です。",
                target: "まだだしていなければ かきなおしてだいじょうぶです",
                ruby: "まだ<ruby>出<rt>だ</rt></ruby>していなければ、<ruby>書<rt>か</rt></ruby>き<ruby>直<rt>なお</rt></ruby>して<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。",
                romaji: "Mada dashite inakereba, kakinaoshite daijōbu desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "修正テープを使ってもいいですか。",
                target: "しゅうせいてーぷをつかってもいいですか",
                ruby: "<ruby>修正<rt>しゅうせい</rt></ruby>テープを<ruby>使<rt>つか</rt></ruby>ってもいいですか。",
                romaji: "Shūsei tēpu o tsukatte mo ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "郵便局の人",
                line: "読みにくい場合は、新しいハガキに書く方が安心です。",
                target: "よみにくいばあいは あたらしいはがきにかくほうがあんしんです",
                ruby: "<ruby>読<rt>よ</rt></ruby>みにくい<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>新<rt>あたら</rt></ruby>しいハガキに<ruby>書<rt>か</rt></ruby>く<ruby>方<rt>ほう</rt></ruby>が<ruby>安心<rt>あんしん</rt></ruby>です。",
                romaji: "Yominikui baai wa, atarashii hagaki ni kaku hō ga anshin desu."
            }
        ],
        {
            ja: [
                "利用者：住所を書き間違えてしまいました。",
                "郵便局の人：まだ出していなければ、書き直して大丈夫です。",
                "利用者：修正テープを使ってもいいですか。",
                "郵便局の人：読みにくい場合は、新しいハガキに書く方が安心です。"
            ],
            en: [
                "Customer: I made a mistake writing the address.",
                "Post Office Staff: If you have not sent it yet, you can rewrite it.",
                "Customer: May I use correction tape?",
                "Post Office Staff: If it is hard to read, it is safer to write it on a new postcard."
            ],
            "zh-CN": [
                "顾客：我把地址写错了。",
                "邮局工作人员：如果还没有寄出，可以重新写。",
                "顾客：可以用修正带吗？",
                "邮局工作人员：如果不好读，写在新的明信片上会比较安心。"
            ],
            "zh-TW": [
                "顧客：我把地址寫錯了。",
                "郵局工作人員：如果還沒有寄出，可以重新寫。",
                "顧客：可以用修正帶嗎？",
                "郵局工作人員：如果不好讀，寫在新的明信片上會比較安心。"
            ],
            ko: [
                "이용자: 주소를 잘못 써 버렸습니다.",
                "우체국 직원: 아직 보내지 않았다면 다시 써도 괜찮습니다.",
                "이용자: 수정 테이프를 사용해도 되나요?",
                "우체국 직원: 읽기 어려운 경우에는 새 엽서에 쓰는 것이 더 안심입니다."
            ],
            vi: [
                "Khách hàng: Tôi đã viết nhầm địa chỉ.",
                "Nhân viên bưu điện: Nếu chưa gửi thì bạn có thể viết lại.",
                "Khách hàng: Tôi có thể dùng băng xóa không ạ?",
                "Nhân viên bưu điện: Nếu khó đọc, viết lại trên bưu thiếp mới sẽ yên tâm hơn."
            ]
        }
    )

];