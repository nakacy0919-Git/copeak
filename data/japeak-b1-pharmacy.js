// =====================================================
// Japeak B1 Level
// Scene: 薬局を利用しよう
// File: data/japeak-b1-pharmacy.js
// Category Key: b1_pharmacy
// =====================================================

const b1PharmacyLangs = [
    "ja", "en", "zh-CN", "zh-TW", "ko", "vi", "tl", "id", "th", "my",
    "km", "ne", "mn", "si", "bn", "pt", "es", "fr", "ru", "uk"
];

function completeB1PharmacyTranslations(translations) {
    const completed = {};
    b1PharmacyLangs.forEach(lang => {
        completed[lang] = translations[lang] || translations.en || translations.ja;
    });
    return completed;
}

const b1PharmacyContext = {
    ja: "薬局で、自分の症状を説明したり、薬の選び方、飲み方、注意点、副作用、他の薬との飲み合わせ、子どもの薬などについて薬剤師に相談する日本語を練習します。",
    en: "Practice Japanese for explaining symptoms at a pharmacy and asking a pharmacist about choosing medicine, how to take it, precautions, side effects, combining medicines, and medicine for children.",
    "zh-CN": "练习在药局说明自己的症状，并向药剂师咨询药物选择、服用方法、注意事项、副作用、药物相互作用以及儿童用药时使用的日语。",
    "zh-TW": "練習在藥局說明自己的症狀，並向藥師諮詢藥物選擇、服用方法、注意事項、副作用、藥物交互作用以及兒童用藥時使用的日語。",
    ko: "약국에서 자신의 증상을 설명하고 약 선택, 복용 방법, 주의사항, 부작용, 다른 약과의 병용, 어린이 약에 대해 약사와 상담하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật để giải thích triệu chứng tại nhà thuốc và hỏi dược sĩ về cách chọn thuốc, cách uống, lưu ý, tác dụng phụ, dùng chung với thuốc khác và thuốc cho trẻ em.",
    tl: "Practice Japanese for explaining symptoms and asking a pharmacist about medicine, dosage, precautions, side effects, interactions, and medicine for children.",
    id: "Latihan bahasa Jepang untuk menjelaskan gejala dan berkonsultasi dengan apoteker tentang pemilihan obat, cara minum, perhatian, efek samping, interaksi obat, dan obat untuk anak.",
    th: "ฝึกภาษาญี่ปุ่นเพื่ออธิบายอาการที่ร้านขายยา และปรึกษาเภสัชกรเกี่ยวกับการเลือกยา วิธีรับประทาน ข้อควรระวัง ผลข้างเคียง การใช้ร่วมกับยาอื่น และยาสำหรับเด็ก",
    my: "ဆေးဆိုင်တွင် မိမိ၏လက္ခဏာများကိုရှင်းပြပြီး ဆေးရွေးချယ်မှု၊ သောက်နည်း၊ သတိထားရမည့်အချက်များ၊ ဘေးထွက်ဆိုးကျိုး၊ အခြားဆေးများနှင့် တွဲသောက်ခြင်းနှင့် ကလေးဆေးများအကြောင်း ဆေးဝါးကျွမ်းကျင်သူနှင့် ဆွေးနွေးရန် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ពន្យល់អាការៈនៅឱសថស្ថាន និងសួរឱសថការីអំពីការជ្រើសរើសថ្នាំ វិធីប្រើ ការប្រុងប្រយ័ត្ន ផលរំខាន ការប្រើជាមួយថ្នាំផ្សេង និងថ្នាំសម្រាប់កុមារ។",
    ne: "औषधि पसलमा आफ्नो लक्षण बताउने र औषधि छनोट, खाने तरिका, सावधानी, side effects, अन्य औषधिसँग मिलाएर खाने र बच्चाको औषधिबारे pharmacist सँग सोध्ने जापानी अभ्यास।",
    mn: "Эмийн санд шинж тэмдгээ тайлбарлаж, эм сонгох, хэрэглэх арга, анхаарах зүйл, гаж нөлөө, бусад эмтэй хамт хэрэглэх болон хүүхдийн эмийн талаар эм зүйчтэй ярилцах япон хэлний дадлага.",
    si: "ෆාමසියකදී රෝග ලක්ෂණ පැහැදිලි කිරීම, ඖෂධ තෝරා ගැනීම, භාවිතය, අවධානය, අතුරු ආබාධ, වෙනත් ඖෂධ සමඟ භාවිතය සහ ළමා ඖෂධ ගැන ඖෂධවේදියෙකු සමඟ කතා කිරීමට ජපන් භාෂා පුහුණුව.",
    bn: "ফার্মেসিতে নিজের উপসর্গ ব্যাখ্যা করা এবং ওষুধ নির্বাচন, খাওয়ার নিয়ম, সতর্কতা, পার্শ্বপ্রতিক্রিয়া, অন্য ওষুধের সঙ্গে ব্যবহার এবং শিশুদের ওষুধ নিয়ে ফার্মাসিস্টের সঙ্গে কথা বলার জাপানি অনুশীলন।",
    pt: "Prática de japonês para explicar sintomas numa farmácia e consultar o farmacêutico sobre escolha de medicamentos, modo de uso, precauções, efeitos colaterais, combinações e medicamentos infantis.",
    es: "Práctica de japonés para explicar síntomas en una farmacia y consultar al farmacéutico sobre elección de medicamentos, modo de uso, precauciones, efectos secundarios, interacciones y medicamentos infantiles.",
    fr: "Entraînement en japonais pour expliquer ses symptômes à la pharmacie et consulter le pharmacien sur le choix du médicament, la prise, les précautions, les effets secondaires, les interactions et les médicaments pour enfants.",
    ru: "Практика японского языка для объяснения симптомов в аптеке и консультации с фармацевтом о выборе лекарств, способе приема, мерах предосторожности, побочных эффектах, сочетании препаратов и лекарствах для детей.",
    uk: "Практика японської мови для пояснення симптомів в аптеці та консультації з фармацевтом щодо вибору ліків, способу прийому, застережень, побічних ефектів, взаємодії препаратів і дитячих ліків."
};

const b1PharmacySpeakerNames = {
    customer: {
        ja: "利用者",
        en: "Customer",
        "zh-CN": "顾客",
        "zh-TW": "顧客",
        ko: "이용자",
        vi: "Khách hàng",
        tl: "Customer",
        id: "Pelanggan",
        th: "ลูกค้า",
        my: "ဖောက်သည်",
        km: "អតិថិជន",
        ne: "ग्राहक",
        mn: "Үйлчлүүлэгч",
        si: "පාරිභෝගිකයා",
        bn: "গ্রাহক",
        pt: "Cliente",
        es: "Cliente",
        fr: "Client",
        ru: "Покупатель",
        uk: "Клієнт"
    },
    pharmacist: {
        ja: "薬剤師",
        en: "Pharmacist",
        "zh-CN": "药剂师",
        "zh-TW": "藥師",
        ko: "약사",
        vi: "Dược sĩ",
        tl: "Pharmacist",
        id: "Apoteker",
        th: "เภสัชกร",
        my: "ဆေးဝါးကျွမ်းကျင်သူ",
        km: "ឱសថការី",
        ne: "फार्मासिस्ट",
        mn: "Эм зүйч",
        si: "ඖෂධවේදියා",
        bn: "ফার্মাসিস্ট",
        pt: "Farmacêutico",
        es: "Farmacéutico",
        fr: "Pharmacien",
        ru: "Фармацевт",
        uk: "Фармацевт"
    }
};

function makeB1PharmacyDialogue(id, title, dialogue, dialogueTranslations) {
    const fullDialogueTranslations = completeB1PharmacyTranslations(dialogueTranslations);

    const translations = {};
    Object.keys(fullDialogueTranslations).forEach(lang => {
        translations[lang] = fullDialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "b1_pharmacy",
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
            speakerNames: b1PharmacySpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: b1PharmacyContext,
        translations,
        dialogueTranslations: fullDialogueTranslations
    };
}

const japeakB1PharmacyData = [

    makeB1PharmacyDialogue(
        "b1_pharmacy_001",
        "頭痛と熱について相談する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "すみません。昨日から頭が痛くて、少し熱もあります。",
                target: "すみません きのうからあたまがいたくて すこしねつもあります",
                ruby: "すみません。<ruby>昨日<rt>きのう</rt></ruby>から<ruby>頭<rt>あたま</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くて、<ruby>少<rt>すこ</rt></ruby>し<ruby>熱<rt>ねつ</rt></ruby>もあります。",
                romaji: "Sumimasen. Kinō kara atama ga itakute, sukoshi netsu mo arimasu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "熱は何度くらいありますか。",
                target: "ねつはなんどくらいありますか",
                ruby: "<ruby>熱<rt>ねつ</rt></ruby>は<ruby>何度<rt>なんど</rt></ruby>くらいありますか。",
                romaji: "Netsu wa nando kurai arimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "今朝は三十七度八分でした。",
                target: "けさはさんじゅうななどはちぶでした",
                ruby: "<ruby>今朝<rt>けさ</rt></ruby>は<ruby>三十七度八分<rt>さんじゅうななどはちぶ</rt></ruby>でした。",
                romaji: "Kesa wa sanjūnana-do hachibu deshita."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "ほかに、せきやのどの痛みなどはありますか。",
                target: "ほかに せきやのどのいたみなどはありますか",
                ruby: "ほかに、せきやのどの<ruby>痛<rt>いた</rt></ruby>みなどはありますか。",
                romaji: "Hoka ni, seki ya nodo no itami nado wa arimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "せきはありませんが、少し体がだるいです。",
                target: "せきはありませんが すこしからだがだるいです",
                ruby: "せきはありませんが、<ruby>少<rt>すこ</rt></ruby>し<ruby>体<rt>からだ</rt></ruby>がだるいです。",
                romaji: "Seki wa arimasen ga, sukoshi karada ga darui desu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "わかりました。現在飲んでいる薬や、薬のアレルギーがあるかも確認させてください。",
                target: "わかりました げんざいのんでいるくすりや くすりのあれるぎーがあるかもかくにんさせてください",
                ruby: "わかりました。<ruby>現在<rt>げんざい</rt></ruby><ruby>飲<rt>の</rt></ruby>んでいる<ruby>薬<rt>くすり</rt></ruby>や、<ruby>薬<rt>くすり</rt></ruby>のアレルギーがあるかも<ruby>確認<rt>かくにん</rt></ruby>させてください。",
                romaji: "Wakarimashita. Genzai nonde iru kusuri ya, kusuri no arerugī ga aru ka mo kakunin sasete kudasai."
            }
        ],
        {
            ja: [
                "利用者：すみません。昨日から頭が痛くて、少し熱もあります。",
                "薬剤師：熱は何度くらいありますか。",
                "利用者：今朝は三十七度八分でした。",
                "薬剤師：ほかに、せきやのどの痛みなどはありますか。",
                "利用者：せきはありませんが、少し体がだるいです。",
                "薬剤師：わかりました。現在飲んでいる薬や、薬のアレルギーがあるかも確認させてください。"
            ],
            en: [
                "Customer: Excuse me. I have had a headache since yesterday and also have a slight fever.",
                "Pharmacist: About how high is your temperature?",
                "Customer: It was 37.8 degrees this morning.",
                "Pharmacist: Do you also have a cough or sore throat?",
                "Customer: I do not have a cough, but I feel a little tired.",
                "Pharmacist: Understood. Let me also check whether you are taking any medicines now or have any medicine allergies."
            ],
            "zh-CN": [
                "顾客：不好意思。我从昨天开始头痛，还有一点发烧。",
                "药剂师：体温大概多少度？",
                "顾客：今天早上是三十七点八度。",
                "药剂师：还有咳嗽或喉咙痛吗？",
                "顾客：没有咳嗽，不过身体有点乏力。",
                "药剂师：明白了。还请让我确认一下您目前正在服用的药物以及是否有药物过敏。"
            ],
            "zh-TW": [
                "顧客：不好意思。我從昨天開始頭痛，還有一點發燒。",
                "藥師：體溫大概多少度？",
                "顧客：今天早上是三十七點八度。",
                "藥師：還有咳嗽或喉嚨痛嗎？",
                "顧客：沒有咳嗽，不過身體有點疲倦。",
                "藥師：明白了。還請讓我確認一下您目前正在服用的藥物以及是否有藥物過敏。"
            ],
            ko: [
                "이용자: 죄송합니다. 어제부터 머리가 아프고 열도 조금 있습니다.",
                "약사: 열은 몇 도 정도인가요?",
                "이용자: 오늘 아침에는 37.8도였습니다.",
                "약사: 그 밖에 기침이나 목 통증도 있나요?",
                "이용자: 기침은 없지만 몸이 조금 나른합니다.",
                "약사: 알겠습니다. 현재 복용하고 있는 약이나 약 알레르기가 있는지도 확인하겠습니다."
            ],
            vi: [
                "Khách hàng: Xin lỗi. Từ hôm qua tôi bị đau đầu và hơi sốt.",
                "Dược sĩ: Nhiệt độ khoảng bao nhiêu?",
                "Khách hàng: Sáng nay là 37,8 độ.",
                "Dược sĩ: Ngoài ra bạn có ho hoặc đau họng không?",
                "Khách hàng: Tôi không ho, nhưng cơ thể hơi mệt.",
                "Dược sĩ: Tôi hiểu rồi. Tôi cũng xin kiểm tra xem bạn hiện đang uống thuốc gì và có dị ứng với thuốc không."
            ]
        }
    ),

    makeB1PharmacyDialogue(
        "b1_pharmacy_002",
        "せきとのどの痛みに合う薬を相談する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "三日ほど前から、せきとのどの痛みが続いています。",
                target: "みっかほどまえから せきとのどのいたみがつづいています",
                ruby: "<ruby>三日<rt>みっか</rt></ruby>ほど<ruby>前<rt>まえ</rt></ruby>から、せきとのどの<ruby>痛<rt>いた</rt></ruby>みが<ruby>続<rt>つづ</rt></ruby>いています。",
                romaji: "Mikka hodo mae kara, seki to nodo no itami ga tsuzuite imasu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "熱や息苦しさはありますか。",
                target: "ねつやいきぐるしさはありますか",
                ruby: "<ruby>熱<rt>ねつ</rt></ruby>や<ruby>息苦<rt>いきぐる</rt></ruby>しさはありますか。",
                romaji: "Netsu ya ikigurushisa wa arimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "熱はありません。夜になると、せきが少しひどくなります。",
                target: "ねつはありません よるになると せきがすこしひどくなります",
                ruby: "<ruby>熱<rt>ねつ</rt></ruby>はありません。<ruby>夜<rt>よる</rt></ruby>になると、せきが<ruby>少<rt>すこ</rt></ruby>しひどくなります。",
                romaji: "Netsu wa arimasen. Yoru ni naru to, seki ga sukoshi hidoku narimasu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "車の運転をする予定はありますか。",
                target: "くるまのうんてんをするよていはありますか",
                ruby: "<ruby>車<rt>くるま</rt></ruby>の<ruby>運転<rt>うんてん</rt></ruby>をする<ruby>予定<rt>よてい</rt></ruby>はありますか。",
                romaji: "Kuruma no unten o suru yotei wa arimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "はい。毎日、仕事で車を運転します。",
                target: "はい まいにち しごとでくるまをうんてんします",
                ruby: "はい。<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>仕事<rt>しごと</rt></ruby>で<ruby>車<rt>くるま</rt></ruby>を<ruby>運転<rt>うんてん</rt></ruby>します。",
                romaji: "Hai. Mainichi, shigoto de kuruma o unten shimasu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "では、眠気について注意が必要な薬もあるので、運転することを伝えた上で薬を選びましょう。",
                target: "では ねむけについてちゅういがひつようなくすりもあるので うんてんすることをつたえたうえでくすりをえらびましょう",
                ruby: "では、<ruby>眠気<rt>ねむけ</rt></ruby>について<ruby>注意<rt>ちゅうい</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>薬<rt>くすり</rt></ruby>もあるので、<ruby>運転<rt>うんてん</rt></ruby>することを<ruby>伝<rt>つた</rt></ruby>えた<ruby>上<rt>うえ</rt></ruby>で<ruby>薬<rt>くすり</rt></ruby>を<ruby>選<rt>えら</rt></ruby>びましょう。",
                romaji: "Dewa, nemuke ni tsuite chūi ga hitsuyō na kusuri mo aru node, unten suru koto o tsutaeta ue de kusuri o erabimashō."
            }
        ],
        {
            ja: [
                "利用者：三日ほど前から、せきとのどの痛みが続いています。",
                "薬剤師：熱や息苦しさはありますか。",
                "利用者：熱はありません。夜になると、せきが少しひどくなります。",
                "薬剤師：車の運転をする予定はありますか。",
                "利用者：はい。毎日、仕事で車を運転します。",
                "薬剤師：では、眠気について注意が必要な薬もあるので、運転することを伝えた上で薬を選びましょう。"
            ],
            en: [
                "Customer: I have had a cough and sore throat for about three days.",
                "Pharmacist: Do you have a fever or difficulty breathing?",
                "Customer: I do not have a fever. My cough gets a little worse at night.",
                "Pharmacist: Are you planning to drive a car?",
                "Customer: Yes. I drive for work every day.",
                "Pharmacist: In that case, some medicines require caution regarding drowsiness, so let us choose a medicine while keeping your driving in mind."
            ],
            "zh-CN": [
                "顾客：大约三天前开始，我一直咳嗽并且喉咙痛。",
                "药剂师：有发烧或呼吸困难吗？",
                "顾客：没有发烧。到了晚上咳嗽会稍微严重一些。",
                "药剂师：您有开车的计划吗？",
                "顾客：有。我每天工作都需要开车。",
                "药剂师：那么，有些药需要注意困倦的问题，我们在考虑您需要开车的情况下选择药物吧。"
            ],
            "zh-TW": [
                "顧客：大約三天前開始，我一直咳嗽並且喉嚨痛。",
                "藥師：有發燒或呼吸困難嗎？",
                "顧客：沒有發燒。到了晚上咳嗽會稍微嚴重一些。",
                "藥師：您有開車的計畫嗎？",
                "顧客：有。我每天工作都需要開車。",
                "藥師：那麼，有些藥需要注意嗜睡的問題，我們在考慮您需要開車的情況下選擇藥物吧。"
            ],
            ko: [
                "이용자: 3일 전부터 기침과 목 통증이 계속되고 있습니다.",
                "약사: 열이나 숨쉬기 어려운 증상이 있나요?",
                "이용자: 열은 없습니다. 밤이 되면 기침이 조금 심해집니다.",
                "약사: 자동차를 운전할 예정이 있나요?",
                "이용자: 네. 매일 일 때문에 운전합니다.",
                "약사: 그렇다면 졸음에 주의가 필요한 약도 있으니 운전한다는 점을 고려해서 약을 선택합시다."
            ],
            vi: [
                "Khách hàng: Khoảng ba ngày nay tôi bị ho và đau họng liên tục.",
                "Dược sĩ: Bạn có sốt hoặc khó thở không?",
                "Khách hàng: Tôi không sốt. Ban đêm thì ho nặng hơn một chút.",
                "Dược sĩ: Bạn có dự định lái xe không?",
                "Khách hàng: Có. Hằng ngày tôi lái xe vì công việc.",
                "Dược sĩ: Vậy thì có một số thuốc cần chú ý vì có thể gây buồn ngủ, nên chúng ta hãy chọn thuốc sau khi lưu ý việc bạn phải lái xe."
            ]
        }
    ),

    makeB1PharmacyDialogue(
        "b1_pharmacy_003",
        "ほかの薬との飲み合わせを確認する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "風邪薬を買いたいのですが、今ほかの薬も飲んでいます。",
                target: "かぜぐすりをかいたいのですが いまほかのくすりものんでいます",
                ruby: "<ruby>風邪薬<rt>かぜぐすり</rt></ruby>を<ruby>買<rt>か</rt></ruby>いたいのですが、<ruby>今<rt>いま</rt></ruby>ほかの<ruby>薬<rt>くすり</rt></ruby>も<ruby>飲<rt>の</rt></ruby>んでいます。",
                romaji: "Kazegusuri o kaitai no desu ga, ima hoka no kusuri mo nonde imasu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "どのような薬を飲んでいますか。お薬手帳はお持ちですか。",
                target: "どのようなくすりをのんでいますか おくすりてちょうはおもちですか",
                ruby: "どのような<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んでいますか。お<ruby>薬手帳<rt>くすりてちょう</rt></ruby>はお<ruby>持<rt>も</rt></ruby>ちですか。",
                romaji: "Dono yō na kusuri o nonde imasu ka. Okusuri techō wa omochi desu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "はい、持っています。この二種類の薬を毎日飲んでいます。",
                target: "はい もっています このにしゅるいのくすりをまいにちのんでいます",
                ruby: "はい、<ruby>持<rt>も</rt></ruby>っています。この<ruby>二種類<rt>にしゅるい</rt></ruby>の<ruby>薬<rt>くすり</rt></ruby>を<ruby>毎日<rt>まいにち</rt></ruby><ruby>飲<rt>の</rt></ruby>んでいます。",
                romaji: "Hai, motte imasu. Kono nishurui no kusuri o mainichi nonde imasu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "ありがとうございます。飲み合わせを確認しますので、少々お待ちください。",
                target: "ありがとうございます のみあわせをかくにんしますので しょうしょうおまちください",
                ruby: "ありがとうございます。<ruby>飲<rt>の</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせを<ruby>確認<rt>かくにん</rt></ruby>しますので、<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。",
                romaji: "Arigatō gozaimasu. Nomiawase o kakunin shimasu node, shōshō omachi kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "同じ時間に飲んでも問題がないかも知りたいです。",
                target: "おなじじかんにのんでももんだいがないかもしりたいです",
                ruby: "<ruby>同<rt>おな</rt></ruby>じ<ruby>時間<rt>じかん</rt></ruby>に<ruby>飲<rt>の</rt></ruby>んでも<ruby>問題<rt>もんだい</rt></ruby>がないかも<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Onaji jikan ni nonde mo mondai ga nai ka mo shiritai desu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "わかりました。薬の種類だけでなく、飲む時間についても一緒に確認しましょう。",
                target: "わかりました くすりのしゅるいだけでなく のむじかんについてもいっしょにかくにんしましょう",
                ruby: "わかりました。<ruby>薬<rt>くすり</rt></ruby>の<ruby>種類<rt>しゅるい</rt></ruby>だけでなく、<ruby>飲<rt>の</rt></ruby>む<ruby>時間<rt>じかん</rt></ruby>についても<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しましょう。",
                romaji: "Wakarimashita. Kusuri no shurui dake de naku, nomu jikan ni tsuite mo issho ni kakunin shimashō."
            }
        ],
        {
            ja: [
                "利用者：風邪薬を買いたいのですが、今ほかの薬も飲んでいます。",
                "薬剤師：どのような薬を飲んでいますか。お薬手帳はお持ちですか。",
                "利用者：はい、持っています。この二種類の薬を毎日飲んでいます。",
                "薬剤師：ありがとうございます。飲み合わせを確認しますので、少々お待ちください。",
                "利用者：同じ時間に飲んでも問題がないかも知りたいです。",
                "薬剤師：わかりました。薬の種類だけでなく、飲む時間についても一緒に確認しましょう。"
            ],
            en: [
                "Customer: I would like to buy cold medicine, but I am currently taking other medicines too.",
                "Pharmacist: What kind of medicines are you taking? Do you have your medication notebook?",
                "Customer: Yes, I do. I take these two kinds of medicine every day.",
                "Pharmacist: Thank you. I will check the combination, so please wait a moment.",
                "Customer: I would also like to know whether it is okay to take them at the same time.",
                "Pharmacist: Understood. Let us check not only the kinds of medicine but also when you should take them."
            ],
            "zh-CN": [
                "顾客：我想买感冒药，不过我现在还在服用其他药。",
                "药剂师：您在服用什么药？有带用药手册吗？",
                "顾客：有。我每天都服用这两种药。",
                "药剂师：谢谢。我来确认一下药物之间的搭配，请稍等。",
                "顾客：我还想知道是否可以在同一时间服用。",
                "药剂师：明白了。我们不仅确认药物种类，也一起确认服药时间吧。"
            ],
            "zh-TW": [
                "顧客：我想買感冒藥，不過我現在還在服用其他藥。",
                "藥師：您在服用什麼藥？有帶用藥手冊嗎？",
                "顧客：有。我每天都服用這兩種藥。",
                "藥師：謝謝。我來確認一下藥物之間的搭配，請稍等。",
                "顧客：我還想知道是否可以在同一時間服用。",
                "藥師：明白了。我們不僅確認藥物種類，也一起確認服藥時間吧。"
            ],
            ko: [
                "이용자: 감기약을 사고 싶은데 지금 다른 약도 복용하고 있습니다.",
                "약사: 어떤 약을 복용하고 있나요? 약 수첩을 가지고 계신가요?",
                "이용자: 네, 가지고 있습니다. 이 두 종류의 약을 매일 먹고 있습니다.",
                "약사: 감사합니다. 함께 복용해도 되는지 확인할 테니 잠시 기다려 주세요.",
                "이용자: 같은 시간에 먹어도 문제가 없는지도 알고 싶습니다.",
                "약사: 알겠습니다. 약의 종류뿐 아니라 복용 시간에 대해서도 함께 확인합시다."
            ],
            vi: [
                "Khách hàng: Tôi muốn mua thuốc cảm, nhưng hiện tại tôi cũng đang uống thuốc khác.",
                "Dược sĩ: Bạn đang uống thuốc gì? Bạn có sổ thuốc không?",
                "Khách hàng: Có. Tôi uống hai loại thuốc này mỗi ngày.",
                "Dược sĩ: Cảm ơn. Tôi sẽ kiểm tra việc dùng chung, xin hãy chờ một chút.",
                "Khách hàng: Tôi cũng muốn biết có thể uống cùng một thời điểm hay không.",
                "Dược sĩ: Tôi hiểu rồi. Chúng ta sẽ kiểm tra cả loại thuốc và thời điểm uống."
            ]
        }
    ),

    makeB1PharmacyDialogue(
        "b1_pharmacy_004",
        "薬のアレルギーについて伝える",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "薬を選ぶ前に、アレルギーについて相談したいです。",
                target: "くすりをえらぶまえに あれるぎーについてそうだんしたいです",
                ruby: "<ruby>薬<rt>くすり</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶ<ruby>前<rt>まえ</rt></ruby>に、アレルギーについて<ruby>相談<rt>そうだん</rt></ruby>したいです。",
                romaji: "Kusuri o erabu mae ni, arerugī ni tsuite sōdan shitai desu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "はい。以前、薬を飲んで何か症状が出たことがありますか。",
                target: "はい いぜん くすりをのんでなにかしょうじょうがでたことがありますか",
                ruby: "はい。<ruby>以前<rt>いぜん</rt></ruby>、<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んで<ruby>何<rt>なに</rt></ruby>か<ruby>症状<rt>しょうじょう</rt></ruby>が<ruby>出<rt>で</rt></ruby>たことがありますか。",
                romaji: "Hai. Izen, kusuri o nonde nanika shōjō ga deta koto ga arimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "はい。以前ある薬を飲んだあと、体に赤い発疹が出ました。",
                target: "はい いぜんあるくすりをのんだあと からだにあかいほっしんがでました",
                ruby: "はい。<ruby>以前<rt>いぜん</rt></ruby>ある<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだあと、<ruby>体<rt>からだ</rt></ruby>に<ruby>赤<rt>あか</rt></ruby>い<ruby>発疹<rt>ほっしん</rt></ruby>が<ruby>出<rt>で</rt></ruby>ました。",
                romaji: "Hai. Izen aru kusuri o nonda ato, karada ni akai hosshin ga demashita."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "その薬の名前はわかりますか。",
                target: "そのくすりのなまえはわかりますか",
                ruby: "その<ruby>薬<rt>くすり</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はわかりますか。",
                romaji: "Sono kusuri no namae wa wakarimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "正確な名前は覚えていませんが、病院でもらった薬でした。",
                target: "せいかくななまえはおぼえていませんが びょういんでもらったくすりでした",
                ruby: "<ruby>正確<rt>せいかく</rt></ruby>な<ruby>名前<rt>なまえ</rt></ruby>は<ruby>覚<rt>おぼ</rt></ruby>えていませんが、<ruby>病院<rt>びょういん</rt></ruby>でもらった<ruby>薬<rt>くすり</rt></ruby>でした。",
                romaji: "Seikaku na namae wa oboete imasen ga, byōin de moratta kusuri deshita."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "わかりました。安全のため、わかる範囲で薬の記録を確認してから選びましょう。",
                target: "わかりました あんぜんのため わかるはんいでくすりのきろくをかくにんしてからえらびましょう",
                ruby: "わかりました。<ruby>安全<rt>あんぜん</rt></ruby>のため、わかる<ruby>範囲<rt>はんい</rt></ruby>で<ruby>薬<rt>くすり</rt></ruby>の<ruby>記録<rt>きろく</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してから<ruby>選<rt>えら</rt></ruby>びましょう。",
                romaji: "Wakarimashita. Anzen no tame, wakaru han'i de kusuri no kiroku o kakunin shite kara erabimashō."
            }
        ],
        {
            ja: [
                "利用者：薬を選ぶ前に、アレルギーについて相談したいです。",
                "薬剤師：はい。以前、薬を飲んで何か症状が出たことがありますか。",
                "利用者：はい。以前ある薬を飲んだあと、体に赤い発疹が出ました。",
                "薬剤師：その薬の名前はわかりますか。",
                "利用者：正確な名前は覚えていませんが、病院でもらった薬でした。",
                "薬剤師：わかりました。安全のため、わかる範囲で薬の記録を確認してから選びましょう。"
            ],
            en: [
                "Customer: Before choosing a medicine, I would like to ask about an allergy.",
                "Pharmacist: Certainly. Have you ever had any symptoms after taking medicine before?",
                "Customer: Yes. Once, after taking a medicine, I developed a red rash on my body.",
                "Pharmacist: Do you know the name of that medicine?",
                "Customer: I do not remember the exact name, but it was medicine I received from a hospital.",
                "Pharmacist: Understood. For safety, let us check whatever medication records are available before choosing a medicine."
            ],
            "zh-CN": [
                "顾客：选药之前，我想咨询一下药物过敏的问题。",
                "药剂师：好的。以前服药后出现过什么症状吗？",
                "顾客：有。以前吃过一种药后，身体出现了红色皮疹。",
                "药剂师：您知道那种药的名字吗？",
                "顾客：我不记得准确的名字，但那是医院给我的药。",
                "药剂师：明白了。为了安全起见，我们先在能够确认的范围内检查用药记录后再选择药物吧。"
            ],
            "zh-TW": [
                "顧客：選藥之前，我想諮詢一下藥物過敏的問題。",
                "藥師：好的。以前服藥後出現過什麼症狀嗎？",
                "顧客：有。以前吃過一種藥後，身體出現了紅色皮疹。",
                "藥師：您知道那種藥的名字嗎？",
                "顧客：我不記得準確的名字，但那是醫院給我的藥。",
                "藥師：明白了。為了安全起見，我們先在能夠確認的範圍內檢查用藥紀錄後再選擇藥物吧。"
            ],
            ko: [
                "이용자: 약을 선택하기 전에 알레르기에 대해 상담하고 싶습니다.",
                "약사: 네. 이전에 약을 먹고 어떤 증상이 나타난 적이 있나요?",
                "이용자: 네. 예전에 어떤 약을 먹은 후 몸에 붉은 발진이 생겼습니다.",
                "약사: 그 약의 이름을 알고 있나요?",
                "이용자: 정확한 이름은 기억나지 않지만 병원에서 받은 약이었습니다.",
                "약사: 알겠습니다. 안전을 위해 확인할 수 있는 범위에서 약 기록을 확인한 후 선택합시다."
            ],
            vi: [
                "Khách hàng: Trước khi chọn thuốc, tôi muốn hỏi về dị ứng.",
                "Dược sĩ: Vâng. Trước đây bạn đã từng có triệu chứng gì sau khi uống thuốc chưa?",
                "Khách hàng: Có. Trước đây sau khi uống một loại thuốc, tôi bị phát ban đỏ trên cơ thể.",
                "Dược sĩ: Bạn có biết tên của thuốc đó không?",
                "Khách hàng: Tôi không nhớ chính xác tên, nhưng đó là thuốc tôi nhận ở bệnh viện.",
                "Dược sĩ: Tôi hiểu rồi. Vì an toàn, chúng ta hãy kiểm tra hồ sơ thuốc trong phạm vi có thể trước khi chọn thuốc."
            ]
        }
    ),

    makeB1PharmacyDialogue(
        "b1_pharmacy_005",
        "薬の飲み方と時間を確認する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "この薬は、一日に何回飲めばいいですか。",
                target: "このくすりは いちにちになんかいのめばいいですか",
                ruby: "この<ruby>薬<rt>くすり</rt></ruby>は、<ruby>一日<rt>いちにち</rt></ruby>に<ruby>何回<rt>なんかい</rt></ruby><ruby>飲<rt>の</rt></ruby>めばいいですか。",
                romaji: "Kono kusuri wa, ichinichi ni nankai nomeba ii desu ka."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "一日三回、食後に一錠ずつ飲んでください。",
                target: "いちにちさんかい しょくごにいちじょうずつのんでください",
                ruby: "<ruby>一日三回<rt>いちにちさんかい</rt></ruby>、<ruby>食後<rt>しょくご</rt></ruby>に<ruby>一錠<rt>いちじょう</rt></ruby>ずつ<ruby>飲<rt>の</rt></ruby>んでください。",
                romaji: "Ichinichi sankai, shokugo ni ichijō zutsu nonde kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "朝ご飯を食べない日は、朝の薬をどうすればいいですか。",
                target: "あさごはんをたべないひは あさのくすりをどうすればいいですか",
                ruby: "<ruby>朝<rt>あさ</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べない<ruby>日<rt>ひ</rt></ruby>は、<ruby>朝<rt>あさ</rt></ruby>の<ruby>薬<rt>くすり</rt></ruby>をどうすればいいですか。",
                romaji: "Asagohan o tabenai hi wa, asa no kusuri o dō sureba ii desu ka."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "薬によって違いますので、この薬については説明書の指示を確認してください。",
                target: "くすりによってちがいますので このくすりについてはせつめいしょのしじをかくにんしてください",
                ruby: "<ruby>薬<rt>くすり</rt></ruby>によって<ruby>違<rt>ちが</rt></ruby>いますので、この<ruby>薬<rt>くすり</rt></ruby>については<ruby>説明書<rt>せつめいしょ</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Kusuri ni yotte chigaimasu node, kono kusuri ni tsuite wa setsumeisho no shiji o kakunin shite kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "もし飲み忘れた場合は、次に二回分を飲んでもいいですか。",
                target: "もしのみわすれたばあいは つぎににかいぶんをのんでもいいですか",
                ruby: "もし<ruby>飲<rt>の</rt></ruby>み<ruby>忘<rt>わす</rt></ruby>れた<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>次<rt>つぎ</rt></ruby>に<ruby>二回分<rt>にかいぶん</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んでもいいですか。",
                romaji: "Moshi nomiwasureta baai wa, tsugi ni nikaibun o nonde mo ii desu ka."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "自己判断で二回分をまとめて飲まず、薬ごとの説明を確認してください。",
                target: "じこはんだんでにかいぶんをまとめてのまず くすりごとのせつめいをかくにんしてください",
                ruby: "<ruby>自己判断<rt>じこはんだん</rt></ruby>で<ruby>二回分<rt>にかいぶん</rt></ruby>をまとめて<ruby>飲<rt>の</rt></ruby>まず、<ruby>薬<rt>くすり</rt></ruby>ごとの<ruby>説明<rt>せつめい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Jiko handan de nikaibun o matomete nomazu, kusuri goto no setsumei o kakunin shite kudasai."
            }
        ],
        {
            ja: [
                "利用者：この薬は、一日に何回飲めばいいですか。",
                "薬剤師：一日三回、食後に一錠ずつ飲んでください。",
                "利用者：朝ご飯を食べない日は、朝の薬をどうすればいいですか。",
                "薬剤師：薬によって違いますので、この薬については説明書の指示を確認してください。",
                "利用者：もし飲み忘れた場合は、次に二回分を飲んでもいいですか。",
                "薬剤師：自己判断で二回分をまとめて飲まず、薬ごとの説明を確認してください。"
            ],
            en: [
                "Customer: How many times a day should I take this medicine?",
                "Pharmacist: Take one tablet three times a day after meals.",
                "Customer: What should I do with the morning dose on days when I do not eat breakfast?",
                "Pharmacist: It differs depending on the medicine, so for this medicine please check the instructions.",
                "Customer: If I forget a dose, may I take two doses together next time?",
                "Pharmacist: Do not take two doses together on your own judgment. Please check the instructions for the specific medicine."
            ],
            "zh-CN": [
                "顾客：这个药一天应该吃几次？",
                "药剂师：一天三次，每次饭后一片。",
                "顾客：不吃早饭的日子，早上的药应该怎么办？",
                "药剂师：不同药物情况不同。关于这个药，请确认说明书上的指示。",
                "顾客：如果忘记服药，下次可以一次吃两次的量吗？",
                "药剂师：请不要自行一次服用两次的量，请确认每种药物的具体说明。"
            ],
            "zh-TW": [
                "顧客：這個藥一天應該吃幾次？",
                "藥師：一天三次，每次飯後一錠。",
                "顧客：不吃早餐的日子，早上的藥應該怎麼辦？",
                "藥師：不同藥物情況不同。關於這個藥，請確認說明書上的指示。",
                "顧客：如果忘記服藥，下次可以一次吃兩次的量嗎？",
                "藥師：請不要自行一次服用兩次的量，請確認每種藥物的具體說明。"
            ],
            ko: [
                "이용자: 이 약은 하루에 몇 번 먹으면 되나요?",
                "약사: 하루 세 번, 식후에 한 알씩 드세요.",
                "이용자: 아침밥을 먹지 않는 날에는 아침 약을 어떻게 해야 하나요?",
                "약사: 약에 따라 다르므로 이 약에 대해서는 설명서의 지시를 확인해 주세요.",
                "이용자: 만약 약 먹는 것을 잊었으면 다음에 두 번 분량을 먹어도 되나요?",
                "약사: 임의로 두 번 분량을 한꺼번에 먹지 말고 약마다 설명을 확인해 주세요."
            ],
            vi: [
                "Khách hàng: Thuốc này tôi nên uống mấy lần một ngày?",
                "Dược sĩ: Uống một viên, ba lần mỗi ngày sau bữa ăn.",
                "Khách hàng: Vào những ngày tôi không ăn sáng thì nên làm gì với liều buổi sáng?",
                "Dược sĩ: Tùy từng loại thuốc nên khác nhau. Với thuốc này, hãy kiểm tra hướng dẫn.",
                "Khách hàng: Nếu quên uống, lần sau tôi có thể uống hai liều cùng lúc không?",
                "Dược sĩ: Đừng tự ý uống hai liều cùng lúc. Hãy kiểm tra hướng dẫn riêng của từng loại thuốc."
            ]
        }
    ),

    makeB1PharmacyDialogue(
        "b1_pharmacy_006",
        "子どもの薬について相談する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "子どもが昨日から鼻水とせきが出ています。",
                target: "こどもがきのうからはなみずとせきがでています",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>昨日<rt>きのう</rt></ruby>から<ruby>鼻水<rt>はなみず</rt></ruby>とせきが<ruby>出<rt>で</rt></ruby>ています。",
                romaji: "Kodomo ga kinō kara hanamizu to seki ga dete imasu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "お子さんは何歳で、体重は何キロくらいですか。",
                target: "おこさんはなんさいで たいじゅうはなんきろくらいですか",
                ruby: "お<ruby>子<rt>こ</rt></ruby>さんは<ruby>何歳<rt>なんさい</rt></ruby>で、<ruby>体重<rt>たいじゅう</rt></ruby>は<ruby>何<rt>なん</rt></ruby>キロくらいですか。",
                romaji: "Okosan wa nansai de, taijū wa nankiro kurai desu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "六歳で、体重は二十キロくらいです。",
                target: "ろくさいで たいじゅうはにじゅっきろくらいです",
                ruby: "<ruby>六歳<rt>ろくさい</rt></ruby>で、<ruby>体重<rt>たいじゅう</rt></ruby>は<ruby>二十<rt>にじゅっ</rt></ruby>キロくらいです。",
                romaji: "Rokusai de, taijū wa nijukkiro kurai desu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "熱はありますか。また、食事や水分は取れていますか。",
                target: "ねつはありますか また しょくじやすいぶんはとれていますか",
                ruby: "<ruby>熱<rt>ねつ</rt></ruby>はありますか。また、<ruby>食事<rt>しょくじ</rt></ruby>や<ruby>水分<rt>すいぶん</rt></ruby>は<ruby>取<rt>と</rt></ruby>れていますか。",
                romaji: "Netsu wa arimasu ka. Mata, shokuji ya suibun wa torete imasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "熱はありません。食事も水分も、いつも通り取れています。",
                target: "ねつはありません しょくじもすいぶんも いつもどおりとれています",
                ruby: "<ruby>熱<rt>ねつ</rt></ruby>はありません。<ruby>食事<rt>しょくじ</rt></ruby>も<ruby>水分<rt>すいぶん</rt></ruby>も、いつも<ruby>通<rt>どお</rt></ruby>り<ruby>取<rt>と</rt></ruby>れています。",
                romaji: "Netsu wa arimasen. Shokuji mo suibun mo, itsumo dōri torete imasu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "わかりました。年齢や体重に合った薬かどうか確認してから選びましょう。",
                target: "わかりました ねんれいやたいじゅうにあったくすりかどうかかくにんしてからえらびましょう",
                ruby: "わかりました。<ruby>年齢<rt>ねんれい</rt></ruby>や<ruby>体重<rt>たいじゅう</rt></ruby>に<ruby>合<rt>あ</rt></ruby>った<ruby>薬<rt>くすり</rt></ruby>かどうか<ruby>確認<rt>かくにん</rt></ruby>してから<ruby>選<rt>えら</rt></ruby>びましょう。",
                romaji: "Wakarimashita. Nenrei ya taijū ni atta kusuri ka dō ka kakunin shite kara erabimashō."
            }
        ],
        {
            ja: [
                "利用者：子どもが昨日から鼻水とせきが出ています。",
                "薬剤師：お子さんは何歳で、体重は何キロくらいですか。",
                "利用者：六歳で、体重は二十キロくらいです。",
                "薬剤師：熱はありますか。また、食事や水分は取れていますか。",
                "利用者：熱はありません。食事も水分も、いつも通り取れています。",
                "薬剤師：わかりました。年齢や体重に合った薬かどうか確認してから選びましょう。"
            ],
            en: [
                "Customer: My child has had a runny nose and cough since yesterday.",
                "Pharmacist: How old is your child, and about how much do they weigh?",
                "Customer: Six years old and about twenty kilograms.",
                "Pharmacist: Do they have a fever? Are they able to eat and drink normally?",
                "Customer: There is no fever. They can eat and drink as usual.",
                "Pharmacist: Understood. Let us first check whether the medicine is suitable for the child's age and weight."
            ],
            "zh-CN": [
                "顾客：我的孩子从昨天开始流鼻涕和咳嗽。",
                "药剂师：您的孩子几岁，体重大约多少公斤？",
                "顾客：六岁，体重大约二十公斤。",
                "药剂师：有发烧吗？吃饭和喝水正常吗？",
                "顾客：没有发烧。吃饭和喝水都和平时一样。",
                "药剂师：明白了。我们先确认药物是否适合孩子的年龄和体重后再选择吧。"
            ],
            "zh-TW": [
                "顧客：我的孩子從昨天開始流鼻水和咳嗽。",
                "藥師：您的孩子幾歲，體重大約多少公斤？",
                "顧客：六歲，體重大約二十公斤。",
                "藥師：有發燒嗎？吃飯和喝水正常嗎？",
                "顧客：沒有發燒。吃飯和喝水都和平時一樣。",
                "藥師：明白了。我們先確認藥物是否適合孩子的年齡和體重後再選擇吧。"
            ],
            ko: [
                "이용자: 아이가 어제부터 콧물과 기침이 있습니다.",
                "약사: 아이는 몇 살이고 체중은 몇 킬로그램 정도인가요?",
                "이용자: 여섯 살이고 체중은 약 20킬로그램입니다.",
                "약사: 열이 있나요? 또 식사와 수분 섭취는 가능한가요?",
                "이용자: 열은 없습니다. 식사와 수분도 평소대로 가능합니다.",
                "약사: 알겠습니다. 나이와 체중에 맞는 약인지 확인한 후 선택합시다."
            ],
            vi: [
                "Khách hàng: Con tôi từ hôm qua bị chảy nước mũi và ho.",
                "Dược sĩ: Con bạn bao nhiêu tuổi và nặng khoảng bao nhiêu kilogram?",
                "Khách hàng: Sáu tuổi và nặng khoảng 20 kilogram.",
                "Dược sĩ: Có sốt không? Bé có ăn uống được bình thường không?",
                "Khách hàng: Không sốt. Ăn uống vẫn như bình thường.",
                "Dược sĩ: Tôi hiểu rồi. Hãy kiểm tra xem thuốc có phù hợp với tuổi và cân nặng trước khi chọn."
            ]
        }
    ),

    makeB1PharmacyDialogue(
        "b1_pharmacy_007",
        "目薬について相談する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "目が乾いて疲れやすいので、目薬を探しています。",
                target: "めがかわいてつかれやすいので めぐすりをさがしています",
                ruby: "<ruby>目<rt>め</rt></ruby>が<ruby>乾<rt>かわ</rt></ruby>いて<ruby>疲<rt>つか</rt></ruby>れやすいので、<ruby>目薬<rt>めぐすり</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しています。",
                romaji: "Me ga kawaite tsukareyasui node, megusuri o sagashite imasu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "普段、コンタクトレンズを使っていますか。",
                target: "ふだん こんたくとれんずをつかっていますか",
                ruby: "<ruby>普段<rt>ふだん</rt></ruby>、コンタクトレンズを<ruby>使<rt>つか</rt></ruby>っていますか。",
                romaji: "Fudan, kontakuto renzu o tsukatte imasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "はい。仕事中はほとんど一日中つけています。",
                target: "はい しごとちゅうはほとんどいちにちじゅうつけています",
                ruby: "はい。<ruby>仕事中<rt>しごとちゅう</rt></ruby>はほとんど<ruby>一日中<rt>いちにちじゅう</rt></ruby>つけています。",
                romaji: "Hai. Shigotochū wa hotondo ichinichijū tsukete imasu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "では、コンタクトレンズをつけたまま使える目薬かどうか確認する必要があります。",
                target: "では こんたくとれんずをつけたままつかえるめぐすりかどうかかくにんするひつようがあります",
                ruby: "では、コンタクトレンズをつけたまま<ruby>使<rt>つか</rt></ruby>える<ruby>目薬<rt>めぐすり</rt></ruby>かどうか<ruby>確認<rt>かくにん</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>があります。",
                romaji: "Dewa, kontakuto renzu o tsuketa mama tsukaeru megusuri ka dō ka kakunin suru hitsuyō ga arimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "パッケージのどこを見れば確認できますか。",
                target: "ぱっけーじのどこをみればかくにんできますか",
                ruby: "パッケージのどこを<ruby>見<rt>み</rt></ruby>れば<ruby>確認<rt>かくにん</rt></ruby>できますか。",
                romaji: "Pakkēji no doko o mireba kakunin dekimasu ka."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "使用上の注意に書かれています。わからない場合は、購入前に薬剤師に確認してください。",
                target: "しようじょうのちゅういにかかれています わからないばあいは こうにゅうまえにやくざいしにかくにんしてください",
                ruby: "<ruby>使用上<rt>しようじょう</rt></ruby>の<ruby>注意<rt>ちゅうい</rt></ruby>に<ruby>書<rt>か</rt></ruby>かれています。わからない<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>購入前<rt>こうにゅうまえ</rt></ruby>に<ruby>薬剤師<rt>やくざいし</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Shiyōjō no chūi ni kakarete imasu. Wakaranai baai wa, kōnyū mae ni yakuzaishi ni kakunin shite kudasai."
            }
        ],
        {
            ja: [
                "利用者：目が乾いて疲れやすいので、目薬を探しています。",
                "薬剤師：普段、コンタクトレンズを使っていますか。",
                "利用者：はい。仕事中はほとんど一日中つけています。",
                "薬剤師：では、コンタクトレンズをつけたまま使える目薬かどうか確認する必要があります。",
                "利用者：パッケージのどこを見れば確認できますか。",
                "薬剤師：使用上の注意に書かれています。わからない場合は、購入前に薬剤師に確認してください。"
            ],
            en: [
                "Customer: My eyes feel dry and easily tired, so I am looking for eye drops.",
                "Pharmacist: Do you usually wear contact lenses?",
                "Customer: Yes. I wear them almost all day while working.",
                "Pharmacist: Then you need to check whether the eye drops can be used while wearing contact lenses.",
                "Customer: Where on the package can I check that?",
                "Pharmacist: It is written in the usage precautions. If you are unsure, please check with a pharmacist before purchasing."
            ],
            "zh-CN": [
                "顾客：我的眼睛容易干涩和疲劳，所以在找眼药水。",
                "药剂师：您平时戴隐形眼镜吗？",
                "顾客：戴。工作时几乎一整天都戴着。",
                "药剂师：那么，需要确认眼药水是否可以在戴着隐形眼镜时使用。",
                "顾客：看包装的哪里可以确认？",
                "药剂师：写在使用注意事项中。如果不清楚，请在购买前向药剂师确认。"
            ],
            "zh-TW": [
                "顧客：我的眼睛容易乾澀和疲勞，所以在找眼藥水。",
                "藥師：您平時戴隱形眼鏡嗎？",
                "顧客：戴。工作時幾乎一整天都戴著。",
                "藥師：那麼，需要確認眼藥水是否可以在戴著隱形眼鏡時使用。",
                "顧客：看包裝的哪裡可以確認？",
                "藥師：寫在使用注意事項中。如果不清楚，請在購買前向藥師確認。"
            ],
            ko: [
                "이용자: 눈이 건조하고 쉽게 피로해져서 안약을 찾고 있습니다.",
                "약사: 평소 콘택트렌즈를 사용하나요?",
                "이용자: 네. 일하는 동안 거의 하루 종일 착용합니다.",
                "약사: 그렇다면 콘택트렌즈를 착용한 채 사용할 수 있는 안약인지 확인해야 합니다.",
                "이용자: 포장의 어디를 보면 확인할 수 있나요?",
                "약사: 사용상의 주의사항에 적혀 있습니다. 모를 경우에는 구입 전에 약사에게 확인해 주세요."
            ],
            vi: [
                "Khách hàng: Mắt tôi bị khô và dễ mỏi nên tôi đang tìm thuốc nhỏ mắt.",
                "Dược sĩ: Bình thường bạn có dùng kính áp tròng không?",
                "Khách hàng: Có. Trong giờ làm việc tôi đeo gần như cả ngày.",
                "Dược sĩ: Vậy thì cần kiểm tra xem thuốc nhỏ mắt có thể dùng khi vẫn đang đeo kính áp tròng hay không.",
                "Khách hàng: Tôi nên xem ở đâu trên bao bì?",
                "Dược sĩ: Nội dung đó được ghi trong phần lưu ý khi sử dụng. Nếu không rõ, hãy hỏi dược sĩ trước khi mua."
            ]
        }
    ),

    makeB1PharmacyDialogue(
        "b1_pharmacy_008",
        "症状が改善しないときに相談する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "三日前にこちらで薬を買ったのですが、あまり症状がよくなりません。",
                target: "みっかまえにこちらでくすりをかったのですが あまりしょうじょうがよくなりません",
                ruby: "<ruby>三日前<rt>みっかまえ</rt></ruby>にこちらで<ruby>薬<rt>くすり</rt></ruby>を<ruby>買<rt>か</rt></ruby>ったのですが、あまり<ruby>症状<rt>しょうじょう</rt></ruby>がよくなりません。",
                romaji: "Mikka mae ni kochira de kusuri o katta no desu ga, amari shōjō ga yoku narimasen."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "どのような症状が続いていますか。",
                target: "どのようなしょうじょうがつづいていますか",
                ruby: "どのような<ruby>症状<rt>しょうじょう</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いていますか。",
                romaji: "Dono yō na shōjō ga tsuzuite imasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "せきが続いていて、昨日から少し息苦しさもあります。",
                target: "せきがつづいていて きのうからすこしいきぐるしさもあります",
                ruby: "せきが<ruby>続<rt>つづ</rt></ruby>いていて、<ruby>昨日<rt>きのう</rt></ruby>から<ruby>少<rt>すこ</rt></ruby>し<ruby>息苦<rt>いきぐる</rt></ruby>しさもあります。",
                romaji: "Seki ga tsuzuite ite, kinō kara sukoshi ikigurushisa mo arimasu."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "その場合は、薬局の薬だけで様子を見続けず、医療機関に相談した方がよいです。",
                target: "そのばあいは やっきょくのくすりだけでようすをみつづけず いりょうきかんにそうだんしたほうがよいです",
                ruby: "その<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>薬局<rt>やっきょく</rt></ruby>の<ruby>薬<rt>くすり</rt></ruby>だけで<ruby>様子<rt>ようす</rt></ruby>を<ruby>見続<rt>みつづ</rt></ruby>けず、<ruby>医療機関<rt>いりょうきかん</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>した<ruby>方<rt>ほう</rt></ruby>がよいです。",
                romaji: "Sono baai wa, yakkyoku no kusuri dake de yōsu o mitsuzukezu, iryō kikan ni sōdan shita hō ga yoi desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "利用者",
                line: "わかりました。今日中に病院へ行った方がいいですか。",
                target: "わかりました きょうじゅうにびょういんへいったほうがいいですか",
                ruby: "わかりました。<ruby>今日中<rt>きょうじゅう</rt></ruby>に<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>った<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Wakarimashita. Kyōjū ni byōin e itta hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "息苦しさがあるとのことなので、早めに医療機関へ相談してください。",
                target: "いきぐるしさがあるとのことなので はやめにいりょうきかんへそうだんしてください",
                ruby: "<ruby>息苦<rt>いきぐる</rt></ruby>しさがあるとのことなので、<ruby>早<rt>はや</rt></ruby>めに<ruby>医療機関<rt>いりょうきかん</rt></ruby>へ<ruby>相談<rt>そうだん</rt></ruby>してください。",
                romaji: "Ikigurushisa ga aru to no koto na node, hayame ni iryō kikan e sōdan shite kudasai."
            }
        ],
        {
            ja: [
                "利用者：三日前にこちらで薬を買ったのですが、あまり症状がよくなりません。",
                "薬剤師：どのような症状が続いていますか。",
                "利用者：せきが続いていて、昨日から少し息苦しさもあります。",
                "薬剤師：その場合は、薬局の薬だけで様子を見続けず、医療機関に相談した方がよいです。",
                "利用者：わかりました。今日中に病院へ行った方がいいですか。",
                "薬剤師：息苦しさがあるとのことなので、早めに医療機関へ相談してください。"
            ],
            en: [
                "Customer: I bought medicine here three days ago, but my symptoms have not improved much.",
                "Pharmacist: What symptoms are continuing?",
                "Customer: I still have a cough, and since yesterday I have also had some difficulty breathing.",
                "Pharmacist: In that case, rather than continuing to wait using only pharmacy medicine, you should consult a medical institution.",
                "Customer: Understood. Should I go to a hospital today?",
                "Pharmacist: Since you have difficulty breathing, please seek medical advice promptly."
            ],
            "zh-CN": [
                "顾客：三天前我在这里买了药，但症状没有明显好转。",
                "药剂师：什么症状还在持续？",
                "顾客：一直咳嗽，而且从昨天开始还有一点呼吸困难。",
                "药剂师：这种情况下，不要只靠药局的药继续观察，最好向医疗机构咨询。",
                "顾客：明白了。我应该今天就去医院吗？",
                "药剂师：因为有呼吸困难，请尽早向医疗机构咨询。"
            ],
            "zh-TW": [
                "顧客：三天前我在這裡買了藥，但症狀沒有明顯好轉。",
                "藥師：什麼症狀還在持續？",
                "顧客：一直咳嗽，而且從昨天開始還有一點呼吸困難。",
                "藥師：這種情況下，不要只靠藥局的藥繼續觀察，最好向醫療機構諮詢。",
                "顧客：明白了。我應該今天就去醫院嗎？",
                "藥師：因為有呼吸困難，請儘早向醫療機構諮詢。"
            ],
            ko: [
                "이용자: 3일 전에 여기에서 약을 샀는데 증상이 별로 좋아지지 않습니다.",
                "약사: 어떤 증상이 계속되고 있나요?",
                "이용자: 기침이 계속되고 있고 어제부터 약간 숨쉬기 어려운 증상도 있습니다.",
                "약사: 그런 경우에는 약국 약만으로 계속 지켜보지 말고 의료기관에 상담하는 편이 좋습니다.",
                "이용자: 알겠습니다. 오늘 안에 병원에 가는 편이 좋을까요?",
                "약사: 숨쉬기 어려운 증상이 있다고 하셨으므로 가능한 한 빨리 의료기관에 상담해 주세요."
            ],
            vi: [
                "Khách hàng: Ba ngày trước tôi đã mua thuốc ở đây, nhưng triệu chứng không cải thiện nhiều.",
                "Dược sĩ: Những triệu chứng nào vẫn tiếp tục?",
                "Khách hàng: Tôi vẫn ho và từ hôm qua còn hơi khó thở.",
                "Dược sĩ: Trong trường hợp đó, thay vì chỉ tiếp tục theo dõi bằng thuốc mua ở nhà thuốc, bạn nên hỏi ý kiến cơ sở y tế.",
                "Khách hàng: Tôi hiểu rồi. Tôi có nên đi bệnh viện trong hôm nay không?",
                "Dược sĩ: Vì bạn có triệu chứng khó thở, hãy sớm liên hệ với cơ sở y tế."
            ]
        }
    )

];