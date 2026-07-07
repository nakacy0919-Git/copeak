// =====================================================
// Japeak A2 Level
// Scene: 図書館に行ってみよう
// File: data/japeak-a2-library.js
// Category Key: a2_library
// =====================================================

const a2LibraryLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeA2LibraryTranslations(translations) {
    const completed = {};
    a2LibraryLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const a2LibraryContext = {
    ja: "図書館で、利用カードの作成、本の探し方、貸し出し、返却、延長、予約、自習席、コピー機、イベントについて話す日本語を練習します。",
    en: "Practice Japanese for using a library, including making a library card, finding books, borrowing, returning, renewing, reserving, using study seats, copy machines, and joining events.",
    "zh-CN": "练习在图书馆使用的日语，包括办理借书卡、找书、借书、还书、延长、预约、自习座位、复印机和参加活动。",
    "zh-TW": "練習在圖書館使用的日語，包括辦理借書卡、找書、借書、還書、延長、預約、自習座位、影印機和參加活動。",
    ko: "도서관에서 이용 카드 만들기, 책 찾기, 대출, 반납, 연장, 예약, 자습석, 복사기, 이벤트에 대해 말하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi sử dụng thư viện, gồm làm thẻ thư viện, tìm sách, mượn sách, trả sách, gia hạn, đặt trước, dùng chỗ tự học, máy photocopy và tham gia sự kiện.",
    tl: "Practice ng Japanese sa library, tulad ng paggawa ng library card, paghahanap ng libro, borrowing, returning, renewal, reservation, study seats, copy machine, at events.",
    id: "Latihan bahasa Jepang di perpustakaan, termasuk membuat kartu perpustakaan, mencari buku, meminjam, mengembalikan, memperpanjang, memesan, menggunakan tempat belajar, mesin fotokopi, dan mengikuti acara.",
    th: "ฝึกภาษาญี่ปุ่นเมื่อใช้ห้องสมุด เช่น การทำบัตรห้องสมุด การหาหนังสือ การยืม การคืน การต่ออายุ การจอง ที่นั่งอ่านหนังสือ เครื่องถ่ายเอกสาร และกิจกรรม",
    my: "စာကြည့်တိုက်တွင် library card ပြုလုပ်ခြင်း၊ စာအုပ်ရှာခြင်း၊ ငှားခြင်း၊ ပြန်ပေးခြင်း၊ သက်တမ်းတိုးခြင်း၊ ကြိုတင်မှာယူခြင်း၊ study seat၊ copy machine နှင့် event အကြောင်း ပြောရန် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុននៅបណ្ណាល័យ ដូចជា ធ្វើប័ណ្ណបណ្ណាល័យ ស្វែងរកសៀវភៅ ខ្ចីសៀវភៅ សងសៀវភៅ បន្តរយៈពេល កក់សៀវភៅ កន្លែងអានសៀវភៅ ម៉ាស៊ីនថតចម្លង និងកម្មវិធី។",
    ne: "पुस्तकालयमा library card बनाउने, किताब खोज्ने, सापटी लिने, फिर्ता गर्ने, म्याद थप्ने, reserve गर्ने, study seat, copy machine र event बारे बोल्ने जापानी अभ्यास।",
    mn: "Номын санд карт хийх, ном хайх, зээлэх, буцаах, сунгах, захиалах, хичээлийн суудал, хувилагч машин, арга хэмжээний талаар ярих япон хэлний дадлага.",
    si: "library එකේ library card එකක් හදන එක, පොත් හොයන එක, borrow, return, renew, reserve, study seats, copy machine සහ events ගැන කතා කිරීමට අවශ්‍ය ජපන් භාෂා පුහුණුව.",
    bn: "লাইব্রেরিতে library card তৈরি, বই খোঁজা, ধার নেওয়া, ফেরত দেওয়া, মেয়াদ বাড়ানো, reserve করা, study seat, copy machine এবং event নিয়ে জাপানি অনুশীলন।",
    pt: "Prática de japonês para usar a biblioteca: fazer cartão, procurar livros, emprestar, devolver, renovar, reservar, usar assentos de estudo, copiadora e participar de eventos.",
    es: "Práctica de japonés para usar la biblioteca: hacer tarjeta, buscar libros, pedir prestado, devolver, renovar, reservar, usar asientos de estudio, copiadora y participar en eventos.",
    fr: "Entraînement en japonais pour utiliser la bibliothèque : faire une carte, chercher des livres, emprunter, rendre, prolonger, réserver, utiliser les places d’étude, la photocopieuse et participer aux événements.",
    ru: "Практика японского языка для использования библиотеки: оформление карты, поиск книг, выдача, возврат, продление, бронирование, учебные места, копировальный аппарат и мероприятия.",
    uk: "Практика японської мови для користування бібліотекою: оформлення картки, пошук книжок, позичання, повернення, продовження, бронювання, навчальні місця, копіювальний апарат і заходи."
};

const a2LibrarySpeakerNames = {
    staff: {
        ja: "図書館の人",
        en: "Library Staff",
        "zh-CN": "图书馆工作人员",
        "zh-TW": "圖書館工作人員",
        ko: "도서관 직원",
        vi: "Nhân viên thư viện",
        tl: "Library staff",
        id: "Staf perpustakaan",
        th: "เจ้าหน้าที่ห้องสมุด",
        my: "စာကြည့်တိုက်ဝန်ထမ်း",
        km: "បុគ្គលិកបណ្ណាល័យ",
        ne: "पुस्तकालय कर्मचारी",
        mn: "Номын сангийн ажилтан",
        si: "පුස්තකාල සේවකයා",
        bn: "লাইব্রেরি কর্মী",
        pt: "Funcionário da biblioteca",
        es: "Personal de la biblioteca",
        fr: "Personnel de la bibliothèque",
        ru: "Сотрудник библиотеки",
        uk: "Працівник бібліотеки"
    },
    visitor: {
        ja: "利用者",
        en: "Library User",
        "zh-CN": "使用者",
        "zh-TW": "使用者",
        ko: "이용자",
        vi: "Người sử dụng",
        tl: "User",
        id: "Pengguna",
        th: "ผู้ใช้บริการ",
        my: "အသုံးပြုသူ",
        km: "អ្នកប្រើប្រាស់",
        ne: "प्रयोगकर्ता",
        mn: "Үйлчлүүлэгч",
        si: "භාවිතා කරන පුද්ගලයා",
        bn: "ব্যবহারকারী",
        pt: "Usuário",
        es: "Usuario",
        fr: "Usager",
        ru: "Пользователь",
        uk: "Користувач"
    }
};

function makeA2LibraryDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeA2LibraryTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_library",
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
            speakerNames: a2LibrarySpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2LibraryContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakA2LibraryData = [

    makeA2LibraryDialogue(
        "a2_library_001",
        "利用カードを作る",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "初めて利用したいのですが、カードを作れますか。",
                target: "はじめてりようしたいのですが かーどをつくれますか",
                ruby: "<ruby>初<rt>はじ</rt></ruby>めて<ruby>利用<rt>りよう</rt></ruby>したいのですが、カードを<ruby>作<rt>つく</rt></ruby>れますか。",
                romaji: "Hajimete riyō shitai no desu ga, kādo o tsukuremasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "はい。住所が確認できるものはありますか。",
                target: "はい じゅうしょがかくにんできるものはありますか",
                ruby: "はい。<ruby>住所<rt>じゅうしょ</rt></ruby>が<ruby>確認<rt>かくにん</rt></ruby>できるものはありますか。",
                romaji: "Hai. Jūsho ga kakunin dekiru mono wa arimasu ka."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "在留カードで大丈夫ですか。",
                target: "ざいりゅうかーどでだいじょうぶですか",
                ruby: "<ruby>在留<rt>ざいりゅう</rt></ruby>カードで<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Zairyū kādo de daijōbu desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "はい。こちらの申込書に名前と住所を書いてください。",
                target: "はい こちらのもうしこみしょになまえとじゅうしょをかいてください",
                ruby: "はい。こちらの<ruby>申込書<rt>もうしこみしょ</rt></ruby>に<ruby>名前<rt>なまえ</rt></ruby>と<ruby>住所<rt>じゅうしょ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Hai. Kochira no mōshikomisho ni namae to jūsho o kaite kudasai."
            }
        ],
        {
            ja: [
                "利用者：初めて利用したいのですが、カードを作れますか。",
                "図書館の人：はい。住所が確認できるものはありますか。",
                "利用者：在留カードで大丈夫ですか。",
                "図書館の人：はい。こちらの申込書に名前と住所を書いてください。"
            ],
            en: [
                "Library User: I would like to use the library for the first time. Can I make a card?",
                "Library Staff: Yes. Do you have something that can confirm your address?",
                "Library User: Is my residence card okay?",
                "Library Staff: Yes. Please write your name and address on this application form."
            ],
            "zh-CN": [
                "使用者：我想第一次使用图书馆，可以办理卡吗？",
                "图书馆工作人员：可以。您有能确认地址的证件吗？",
                "使用者：在留卡可以吗？",
                "图书馆工作人员：可以。请在这张申请书上写姓名和地址。"
            ],
            "zh-TW": [
                "使用者：我想第一次使用圖書館，可以辦理卡嗎？",
                "圖書館工作人員：可以。您有能確認地址的證件嗎？",
                "使用者：在留卡可以嗎？",
                "圖書館工作人員：可以。請在這張申請書上寫姓名和地址。"
            ],
            ko: [
                "이용자: 처음 이용하고 싶은데 카드를 만들 수 있나요?",
                "도서관 직원: 네. 주소를 확인할 수 있는 것이 있나요?",
                "이용자: 재류카드로 괜찮나요?",
                "도서관 직원: 네. 이 신청서에 이름과 주소를 적어 주세요."
            ],
            vi: [
                "Người sử dụng: Tôi muốn sử dụng lần đầu, có thể làm thẻ không ạ?",
                "Nhân viên thư viện: Vâng. Bạn có giấy tờ xác nhận địa chỉ không?",
                "Người sử dụng: Thẻ cư trú có được không ạ?",
                "Nhân viên thư viện: Vâng. Xin hãy viết tên và địa chỉ vào đơn này."
            ]
        }
    ),

    makeA2LibraryDialogue(
        "a2_library_002",
        "本を探す",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "日本語を勉強する本を探しています。",
                target: "にほんごをべんきょうするほんをさがしています",
                ruby: "<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>する<ruby>本<rt>ほん</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しています。",
                romaji: "Nihongo o benkyō suru hon o sagashite imasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "日本語学習の本は、二階の外国語コーナーにあります。",
                target: "にほんごがくしゅうのほんは にかいのがいこくごこーなーにあります",
                ruby: "<ruby>日本語学習<rt>にほんごがくしゅう</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>は、<ruby>二階<rt>にかい</rt></ruby>の<ruby>外国語<rt>がいこくご</rt></ruby>コーナーにあります。",
                romaji: "Nihongo gakushū no hon wa, nikai no gaikokugo kōnā ni arimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "初心者向けの本もありますか。",
                target: "しょしんしゃむけのほんもありますか",
                ruby: "<ruby>初心者向<rt>しょしんしゃむ</rt></ruby>けの<ruby>本<rt>ほん</rt></ruby>もありますか。",
                romaji: "Shoshinsha-muke no hon mo arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "はい。やさしい日本語の本を一緒に探しましょう。",
                target: "はい やさしいにほんごのほんをいっしょにさがしましょう",
                ruby: "はい。やさしい<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>探<rt>さが</rt></ruby>しましょう。",
                romaji: "Hai. Yasashii nihongo no hon o issho ni sagashimashō."
            }
        ],
        {
            ja: [
                "利用者：日本語を勉強する本を探しています。",
                "図書館の人：日本語学習の本は、二階の外国語コーナーにあります。",
                "利用者：初心者向けの本もありますか。",
                "図書館の人：はい。やさしい日本語の本を一緒に探しましょう。"
            ],
            en: [
                "Library User: I am looking for books to study Japanese.",
                "Library Staff: Japanese learning books are in the foreign language corner on the second floor.",
                "Library User: Are there books for beginners too?",
                "Library Staff: Yes. Let’s look for easy Japanese books together."
            ],
            "zh-CN": [
                "使用者：我在找学习日语的书。",
                "图书馆工作人员：日语学习书在二楼的外语角。",
                "使用者：也有适合初学者的书吗？",
                "图书馆工作人员：有。我们一起找简单日语的书吧。"
            ],
            "zh-TW": [
                "使用者：我在找學習日語的書。",
                "圖書館工作人員：日語學習書在二樓的外語區。",
                "使用者：也有適合初學者的書嗎？",
                "圖書館工作人員：有。我們一起找簡單日語的書吧。"
            ],
            ko: [
                "이용자: 일본어를 공부하는 책을 찾고 있습니다.",
                "도서관 직원: 일본어 학습 책은 2층 외국어 코너에 있습니다.",
                "이용자: 초보자용 책도 있나요?",
                "도서관 직원: 네. 쉬운 일본어 책을 함께 찾아봅시다."
            ],
            vi: [
                "Người sử dụng: Tôi đang tìm sách học tiếng Nhật.",
                "Nhân viên thư viện: Sách học tiếng Nhật ở góc ngoại ngữ tầng hai.",
                "Người sử dụng: Có sách dành cho người mới bắt đầu không ạ?",
                "Nhân viên thư viện: Có. Chúng ta cùng tìm sách tiếng Nhật dễ nhé."
            ]
        }
    ),

    makeA2LibraryDialogue(
        "a2_library_003",
        "本を借りる",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "この本を借りたいです。",
                target: "このほんをかりたいです",
                ruby: "この<ruby>本<rt>ほん</rt></ruby>を<ruby>借<rt>か</rt></ruby>りたいです。",
                romaji: "Kono hon o karitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "利用カードを出してください。",
                target: "りようかーどをだしてください",
                ruby: "<ruby>利用<rt>りよう</rt></ruby>カードを<ruby>出<rt>だ</rt></ruby>してください。",
                romaji: "Riyō kādo o dashite kudasai."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "何冊まで借りることができますか。",
                target: "なんさつまでかりることができますか",
                ruby: "<ruby>何冊<rt>なんさつ</rt></ruby>まで<ruby>借<rt>か</rt></ruby>りることができますか。",
                romaji: "Nan-satsu made kariru koto ga dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "本は十冊まで、二週間借りられます。",
                target: "ほんはじゅっさつまで にしゅうかんかりられます",
                ruby: "<ruby>本<rt>ほん</rt></ruby>は<ruby>十冊<rt>じゅっさつ</rt></ruby>まで、<ruby>二週間<rt>にしゅうかん</rt></ruby><ruby>借<rt>か</rt></ruby>りられます。",
                romaji: "Hon wa jussatsu made, nishūkan kariraremasu."
            }
        ],
        {
            ja: [
                "利用者：この本を借りたいです。",
                "図書館の人：利用カードを出してください。",
                "利用者：何冊まで借りることができますか。",
                "図書館の人：本は十冊まで、二週間借りられます。"
            ],
            en: [
                "Library User: I would like to borrow this book.",
                "Library Staff: Please show your library card.",
                "Library User: How many books can I borrow?",
                "Library Staff: You can borrow up to ten books for two weeks."
            ],
            "zh-CN": [
                "使用者：我想借这本书。",
                "图书馆工作人员：请出示借书卡。",
                "使用者：最多可以借几本？",
                "图书馆工作人员：书最多可以借十本，借两周。"
            ],
            "zh-TW": [
                "使用者：我想借這本書。",
                "圖書館工作人員：請出示借書卡。",
                "使用者：最多可以借幾本？",
                "圖書館工作人員：書最多可以借十本，借兩週。"
            ],
            ko: [
                "이용자: 이 책을 빌리고 싶습니다.",
                "도서관 직원: 이용 카드를 내 주세요.",
                "이용자: 몇 권까지 빌릴 수 있나요?",
                "도서관 직원: 책은 열 권까지, 2주 동안 빌릴 수 있습니다."
            ],
            vi: [
                "Người sử dụng: Tôi muốn mượn cuốn sách này.",
                "Nhân viên thư viện: Xin hãy đưa thẻ thư viện.",
                "Người sử dụng: Tôi có thể mượn tối đa bao nhiêu cuốn?",
                "Nhân viên thư viện: Có thể mượn tối đa mười cuốn trong hai tuần."
            ]
        }
    ),

    makeA2LibraryDialogue(
        "a2_library_004",
        "返却期限と延長を確認する",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "この本の返却期限を確認したいです。",
                target: "このほんのへんきゃくきげんをかくにんしたいです",
                ruby: "この<ruby>本<rt>ほん</rt></ruby>の<ruby>返却期限<rt>へんきゃくきげん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>したいです。",
                romaji: "Kono hon no henkyaku kigen o kakunin shitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "返却期限は来週の水曜日です。",
                target: "へんきゃくきげんはらいしゅうのすいようびです",
                ruby: "<ruby>返却期限<rt>へんきゃくきげん</rt></ruby>は<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>水曜日<rt>すいようび</rt></ruby>です。",
                romaji: "Henkyaku kigen wa raishū no suiyōbi desu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "まだ読み終わっていないので、延長できますか。",
                target: "まだよみおわっていないので えんちょうできますか",
                ruby: "まだ<ruby>読<rt>よ</rt></ruby>み<ruby>終<rt>お</rt></ruby>わっていないので、<ruby>延長<rt>えんちょう</rt></ruby>できますか。",
                romaji: "Mada yomiowatte inai node, enchō dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "次に予約している人がいなければ、一回だけ延長できます。",
                target: "つぎによやくしているひとがいなければ いっかいだけえんちょうできます",
                ruby: "<ruby>次<rt>つぎ</rt></ruby>に<ruby>予約<rt>よやく</rt></ruby>している<ruby>人<rt>ひと</rt></ruby>がいなければ、<ruby>一回<rt>いっかい</rt></ruby>だけ<ruby>延長<rt>えんちょう</rt></ruby>できます。",
                romaji: "Tsugi ni yoyaku shite iru hito ga inakereba, ikkai dake enchō dekimasu."
            }
        ],
        {
            ja: [
                "利用者：この本の返却期限を確認したいです。",
                "図書館の人：返却期限は来週の水曜日です。",
                "利用者：まだ読み終わっていないので、延長できますか。",
                "図書館の人：次に予約している人がいなければ、一回だけ延長できます。"
            ],
            en: [
                "Library User: I would like to check the return deadline for this book.",
                "Library Staff: The return deadline is next Wednesday.",
                "Library User: I have not finished reading it yet. Can I renew it?",
                "Library Staff: If no one has reserved it next, you can renew it once."
            ],
            "zh-CN": [
                "使用者：我想确认这本书的归还期限。",
                "图书馆工作人员：归还期限是下周三。",
                "使用者：我还没读完，可以延长吗？",
                "图书馆工作人员：如果没有下一个预约的人，可以延长一次。"
            ],
            "zh-TW": [
                "使用者：我想確認這本書的歸還期限。",
                "圖書館工作人員：歸還期限是下週三。",
                "使用者：我還沒讀完，可以延長嗎？",
                "圖書館工作人員：如果沒有下一個預約的人，可以延長一次。"
            ],
            ko: [
                "이용자: 이 책의 반납 기한을 확인하고 싶습니다.",
                "도서관 직원: 반납 기한은 다음 주 수요일입니다.",
                "이용자: 아직 다 읽지 못해서 연장할 수 있나요?",
                "도서관 직원: 다음 예약자가 없으면 한 번만 연장할 수 있습니다."
            ],
            vi: [
                "Người sử dụng: Tôi muốn kiểm tra hạn trả của cuốn sách này.",
                "Nhân viên thư viện: Hạn trả là thứ Tư tuần sau.",
                "Người sử dụng: Tôi chưa đọc xong, có thể gia hạn không ạ?",
                "Nhân viên thư viện: Nếu không có người đặt trước tiếp theo, bạn có thể gia hạn một lần."
            ]
        }
    ),

    makeA2LibraryDialogue(
        "a2_library_005",
        "本を予約する",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "探している本が棚にありませんでした。",
                target: "さがしているほんがたなにありませんでした",
                ruby: "<ruby>探<rt>さが</rt></ruby>している<ruby>本<rt>ほん</rt></ruby>が<ruby>棚<rt>たな</rt></ruby>にありませんでした。",
                romaji: "Sagashite iru hon ga tana ni arimasen deshita."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "貸し出し中かもしれません。タイトルはわかりますか。",
                target: "かしだしちゅうかもしれません たいとるはわかりますか",
                ruby: "<ruby>貸<rt>か</rt></ruby>し<ruby>出<rt>だ</rt></ruby>し<ruby>中<rt>ちゅう</rt></ruby>かもしれません。タイトルはわかりますか。",
                romaji: "Kashidashi-chū kamoshiremasen. Taitoru wa wakarimasu ka."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "はい、このメモに書いてあります。",
                target: "はい このめもにかいてあります",
                ruby: "はい、このメモに<ruby>書<rt>か</rt></ruby>いてあります。",
                romaji: "Hai, kono memo ni kaite arimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "確認します。必要であれば予約できます。",
                target: "かくにんします ひつようであればよやくできます",
                ruby: "<ruby>確認<rt>かくにん</rt></ruby>します。<ruby>必要<rt>ひつよう</rt></ruby>であれば<ruby>予約<rt>よやく</rt></ruby>できます。",
                romaji: "Kakunin shimasu. Hitsuyō de areba yoyaku dekimasu."
            }
        ],
        {
            ja: [
                "利用者：探している本が棚にありませんでした。",
                "図書館の人：貸し出し中かもしれません。タイトルはわかりますか。",
                "利用者：はい、このメモに書いてあります。",
                "図書館の人：確認します。必要であれば予約できます。"
            ],
            en: [
                "Library User: The book I am looking for was not on the shelf.",
                "Library Staff: It may be checked out. Do you know the title?",
                "Library User: Yes, it is written on this note.",
                "Library Staff: I will check. If necessary, you can reserve it."
            ],
            "zh-CN": [
                "使用者：我找的书不在书架上。",
                "图书馆工作人员：可能已经借出了。您知道书名吗？",
                "使用者：知道，写在这个备忘录上。",
                "图书馆工作人员：我确认一下。如果需要，可以预约。"
            ],
            "zh-TW": [
                "使用者：我找的書不在書架上。",
                "圖書館工作人員：可能已經借出了。您知道書名嗎？",
                "使用者：知道，寫在這個備忘錄上。",
                "圖書館工作人員：我確認一下。如果需要，可以預約。"
            ],
            ko: [
                "이용자: 찾고 있는 책이 서가에 없었습니다.",
                "도서관 직원: 대출 중일지도 모릅니다. 제목을 아시나요?",
                "이용자: 네, 이 메모에 적혀 있습니다.",
                "도서관 직원: 확인하겠습니다. 필요하면 예약할 수 있습니다."
            ],
            vi: [
                "Người sử dụng: Cuốn sách tôi đang tìm không có trên kệ.",
                "Nhân viên thư viện: Có thể đang được mượn. Bạn có biết tên sách không?",
                "Người sử dụng: Có, nó được viết trong ghi chú này.",
                "Nhân viên thư viện: Tôi sẽ kiểm tra. Nếu cần, bạn có thể đặt trước."
            ]
        }
    ),

    makeA2LibraryDialogue(
        "a2_library_006",
        "自習席を使う",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "自習できる席を使いたいです。",
                target: "じしゅうできるせきをつかいたいです",
                ruby: "<ruby>自習<rt>じしゅう</rt></ruby>できる<ruby>席<rt>せき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>いたいです。",
                romaji: "Jishū dekiru seki o tsukaitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "三階に学習室があります。先に受付で申し込んでください。",
                target: "さんかいにがくしゅうしつがあります さきにうけつけでもうしこんでください",
                ruby: "<ruby>三階<rt>さんかい</rt></ruby>に<ruby>学習室<rt>がくしゅうしつ</rt></ruby>があります。<ruby>先<rt>さき</rt></ruby>に<ruby>受付<rt>うけつけ</rt></ruby>で<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>んでください。",
                romaji: "Sankai ni gakushūshitsu ga arimasu. Saki ni uketsuke de mōshikonde kudasai."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "飲み物を持ち込んでもいいですか。",
                target: "のみものをもちこんでもいいですか",
                ruby: "<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>んでもいいですか。",
                romaji: "Nomimono o mochikonde mo ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "ふた付きの飲み物なら大丈夫ですが、食事はできません。",
                target: "ふたつきののみものならだいじょうぶですが しょくじはできません",
                ruby: "ふた<ruby>付<rt>つ</rt></ruby>きの<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>なら<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですが、<ruby>食事<rt>しょくじ</rt></ruby>はできません。",
                romaji: "Futa-tsuki no nomimono nara daijōbu desu ga, shokuji wa dekimasen."
            }
        ],
        {
            ja: [
                "利用者：自習できる席を使いたいです。",
                "図書館の人：三階に学習室があります。先に受付で申し込んでください。",
                "利用者：飲み物を持ち込んでもいいですか。",
                "図書館の人：ふた付きの飲み物なら大丈夫ですが、食事はできません。"
            ],
            en: [
                "Library User: I would like to use a seat where I can study.",
                "Library Staff: There is a study room on the third floor. Please apply at the reception desk first.",
                "Library User: May I bring in a drink?",
                "Library Staff: Drinks with lids are okay, but eating is not allowed."
            ],
            "zh-CN": [
                "使用者：我想使用可以自习的座位。",
                "图书馆工作人员：三楼有学习室。请先在前台申请。",
                "使用者：可以带饮料进去吗？",
                "图书馆工作人员：有盖子的饮料可以，但不能吃东西。"
            ],
            "zh-TW": [
                "使用者：我想使用可以自習的座位。",
                "圖書館工作人員：三樓有學習室。請先在櫃台申請。",
                "使用者：可以帶飲料進去嗎？",
                "圖書館工作人員：有蓋子的飲料可以，但不能吃東西。"
            ],
            ko: [
                "이용자: 자습할 수 있는 자리를 사용하고 싶습니다.",
                "도서관 직원: 3층에 학습실이 있습니다. 먼저 접수에서 신청해 주세요.",
                "이용자: 음료를 가지고 들어가도 되나요?",
                "도서관 직원: 뚜껑이 있는 음료라면 괜찮지만 식사는 할 수 없습니다."
            ],
            vi: [
                "Người sử dụng: Tôi muốn dùng chỗ có thể tự học.",
                "Nhân viên thư viện: Có phòng học ở tầng ba. Trước tiên hãy đăng ký tại quầy tiếp tân.",
                "Người sử dụng: Tôi có thể mang đồ uống vào không ạ?",
                "Nhân viên thư viện: Nếu là đồ uống có nắp thì được, nhưng không được ăn."
            ]
        }
    ),

    makeA2LibraryDialogue(
        "a2_library_007",
        "コピー機を使う",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "このページをコピーしたいです。",
                target: "このぺーじをこぴーしたいです",
                ruby: "このページをコピーしたいです。",
                romaji: "Kono pēji o kopī shitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "図書館の資料なら、決められた範囲でコピーできます。",
                target: "としょかんのしりょうなら きめられたはんいでこぴーできます",
                ruby: "<ruby>図書館<rt>としょかん</rt></ruby>の<ruby>資料<rt>しりょう</rt></ruby>なら、<ruby>決<rt>き</rt></ruby>められた<ruby>範囲<rt>はんい</rt></ruby>でコピーできます。",
                romaji: "Toshokan no shiryō nara, kimerareta han'i de kopī dekimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "申込書を書く必要がありますか。",
                target: "もうしこみしょをかくひつようがありますか",
                ruby: "<ruby>申込書<rt>もうしこみしょ</rt></ruby>を<ruby>書<rt>か</rt></ruby>く<ruby>必要<rt>ひつよう</rt></ruby>がありますか。",
                romaji: "Mōshikomisho o kaku hitsuyō ga arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "はい。コピーする前に、こちらに記入してください。",
                target: "はい こぴーするまえに こちらにきにゅうしてください",
                ruby: "はい。コピーする<ruby>前<rt>まえ</rt></ruby>に、こちらに<ruby>記入<rt>きにゅう</rt></ruby>してください。",
                romaji: "Hai. Kopī suru mae ni, kochira ni kinyū shite kudasai."
            }
        ],
        {
            ja: [
                "利用者：このページをコピーしたいです。",
                "図書館の人：図書館の資料なら、決められた範囲でコピーできます。",
                "利用者：申込書を書く必要がありますか。",
                "図書館の人：はい。コピーする前に、こちらに記入してください。"
            ],
            en: [
                "Library User: I would like to copy this page.",
                "Library Staff: If it is library material, you can copy it within the permitted range.",
                "Library User: Do I need to fill out an application form?",
                "Library Staff: Yes. Please fill this in before copying."
            ],
            "zh-CN": [
                "使用者：我想复印这一页。",
                "图书馆工作人员：如果是图书馆资料，可以在规定范围内复印。",
                "使用者：需要填写申请书吗？",
                "图书馆工作人员：需要。复印前请在这里填写。"
            ],
            "zh-TW": [
                "使用者：我想影印這一頁。",
                "圖書館工作人員：如果是圖書館資料，可以在規定範圍內影印。",
                "使用者：需要填寫申請書嗎？",
                "圖書館工作人員：需要。影印前請在這裡填寫。"
            ],
            ko: [
                "이용자: 이 페이지를 복사하고 싶습니다.",
                "도서관 직원: 도서관 자료라면 정해진 범위 안에서 복사할 수 있습니다.",
                "이용자: 신청서를 써야 하나요?",
                "도서관 직원: 네. 복사하기 전에 여기에 기입해 주세요."
            ],
            vi: [
                "Người sử dụng: Tôi muốn photocopy trang này.",
                "Nhân viên thư viện: Nếu là tài liệu của thư viện, bạn có thể photocopy trong phạm vi quy định.",
                "Người sử dụng: Tôi có cần viết đơn không ạ?",
                "Nhân viên thư viện: Vâng. Trước khi photocopy, xin hãy điền vào đây."
            ]
        }
    ),

    makeA2LibraryDialogue(
        "a2_library_008",
        "イベントについて聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "今月、子ども向けのイベントはありますか。",
                target: "こんげつ こどもむけのいべんとはありますか",
                ruby: "<ruby>今月<rt>こんげつ</rt></ruby>、<ruby>子<rt>こ</rt></ruby>ども<ruby>向<rt>む</rt></ruby>けのイベントはありますか。",
                romaji: "Kongetsu, kodomo-muke no ibento wa arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "土曜日に絵本の読み聞かせがあります。",
                target: "どようびにえほんのよみきかせがあります",
                ruby: "<ruby>土曜日<rt>どようび</rt></ruby>に<ruby>絵本<rt>えほん</rt></ruby>の<ruby>読<rt>よ</rt></ruby>み<ruby>聞<rt>き</rt></ruby>かせがあります。",
                romaji: "Doyōbi ni ehon no yomikikase ga arimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "予約が必要かどうか教えてください。",
                target: "よやくがひつようかどうかおしえてください",
                ruby: "<ruby>予約<rt>よやく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>かどうか<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Yoyaku ga hitsuyō ka dō ka oshiete kudasai."
            },
            {
                label: "話者A",
                key: "staff",
                name: "図書館の人",
                line: "予約は不要ですが、開始時間までに来てください。",
                target: "よやくはふようですが かいしじかんまでにきてください",
                ruby: "<ruby>予約<rt>よやく</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>ですが、<ruby>開始時間<rt>かいしじかん</rt></ruby>までに<ruby>来<rt>き</rt></ruby>てください。",
                romaji: "Yoyaku wa fuyō desu ga, kaishi jikan made ni kite kudasai."
            }
        ],
        {
            ja: [
                "利用者：今月、子ども向けのイベントはありますか。",
                "図書館の人：土曜日に絵本の読み聞かせがあります。",
                "利用者：予約が必要かどうか教えてください。",
                "図書館の人：予約は不要ですが、開始時間までに来てください。"
            ],
            en: [
                "Library User: Are there any events for children this month?",
                "Library Staff: There is a picture book reading event on Saturday.",
                "Library User: Please tell me whether a reservation is necessary.",
                "Library Staff: No reservation is needed, but please come by the starting time."
            ],
            "zh-CN": [
                "使用者：这个月有面向孩子的活动吗？",
                "图书馆工作人员：星期六有绘本朗读活动。",
                "使用者：请告诉我是否需要预约。",
                "图书馆工作人员：不需要预约，但请在开始时间前来。"
            ],
            "zh-TW": [
                "使用者：這個月有面向孩子的活動嗎？",
                "圖書館工作人員：星期六有繪本朗讀活動。",
                "使用者：請告訴我是否需要預約。",
                "圖書館工作人員：不需要預約，但請在開始時間前來。"
            ],
            ko: [
                "이용자: 이번 달에 어린이 대상 이벤트가 있나요?",
                "도서관 직원: 토요일에 그림책 읽어 주기 행사가 있습니다.",
                "이용자: 예약이 필요한지 알려 주세요.",
                "도서관 직원: 예약은 필요 없지만 시작 시간까지 와 주세요."
            ],
            vi: [
                "Người sử dụng: Tháng này có sự kiện dành cho trẻ em không ạ?",
                "Nhân viên thư viện: Thứ Bảy có buổi đọc truyện tranh cho trẻ em.",
                "Người sử dụng: Xin hãy cho tôi biết có cần đặt trước không.",
                "Nhân viên thư viện: Không cần đặt trước, nhưng hãy đến trước giờ bắt đầu."
            ]
        }
    )

];