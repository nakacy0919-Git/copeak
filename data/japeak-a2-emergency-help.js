// =====================================================
// Japeak A2 Level
// Scene: 緊急のときは、助けをもとめよう
// Category Key: a2_emergency_help
// =====================================================

const a2EmergencyHelpContext = {
    ja: "緊急のときに、近くの人、スタッフ、警察、119番の人に助けを求める日本語を練習します。",
    en: "Practice Japanese for asking nearby people, staff, police, or emergency operators for help in an emergency.",
    "zh-CN": "练习在紧急情况下向附近的人、工作人员、警察或急救电话人员求助的日语。",
    "zh-TW": "練習在緊急情況下向附近的人、工作人員、警察或急救電話人員求助的日語。",
    ko: "긴급한 상황에서 주변 사람, 직원, 경찰, 119 담당자에게 도움을 요청하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật để nhờ người xung quanh, nhân viên, cảnh sát hoặc tổng đài khẩn cấp giúp đỡ khi khẩn cấp.",
    tl: "Practice ng Japanese para humingi ng tulong sa malapit na tao, staff, police, o emergency operator kapag may emergency.",
    id: "Latihan bahasa Jepang untuk meminta bantuan kepada orang sekitar, staf, polisi, atau operator darurat saat keadaan darurat.",
    th: "ฝึกภาษาญี่ปุ่นเพื่อขอความช่วยเหลือจากคนใกล้ตัว เจ้าหน้าที่ ตำรวจ หรือเจ้าหน้าที่ฉุกเฉินเมื่อเกิดเหตุฉุกเฉิน",
    my: "အရေးပေါ်အခြေအနေတွင် အနီးရှိလူ၊ ဝန်ထမ်း၊ ရဲ၊ သို့မဟုတ် emergency operator ထံမှ အကူအညီတောင်းရန် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់សុំជំនួយពីមនុស្សនៅក្បែរ បុគ្គលិក ប៉ូលិស ឬអ្នកទទួលទូរសព្ទសង្គ្រោះបន្ទាន់ នៅពេលមានអាសន្ន។",
    ne: "आपतकालीन अवस्थामा नजिकका मानिस, कर्मचारी, प्रहरी वा emergency operator सँग मद्दत माग्ने जापानी अभ्यास।",
    mn: "Яаралтай үед ойр байгаа хүн, ажилтан, цагдаа эсвэл түргэн тусламжийн оператороос тусламж хүсэх япон хэлний дадлага.",
    si: "හදිසි අවස්ථාවකදී ළඟ සිටින අය, staff, police හෝ emergency operator කෙනෙකුගෙන් උදව් ඉල්ලීමට අවශ්‍ය ජපන් භාෂා පුහුණුව.",
    bn: "জরুরি অবস্থায় কাছের মানুষ, কর্মী, পুলিশ বা emergency operator-এর কাছে সাহায্য চাইতে জাপানি অনুশীলন।",
    pt: "Prática de japonês para pedir ajuda a pessoas próximas, funcionários, polícia ou operadores de emergência em uma situação de emergência.",
    es: "Práctica de japonés para pedir ayuda a personas cercanas, personal, policía u operadores de emergencia en una emergencia.",
    fr: "Entraînement en japonais pour demander de l’aide à des personnes proches, au personnel, à la police ou aux opérateurs d’urgence.",
    ru: "Практика японского языка для просьбы о помощи у окружающих, сотрудников, полиции или операторов экстренной службы.",
    uk: "Практика японської мови для звернення по допомогу до людей поруч, працівників, поліції або операторів екстреної служби."
};

const a2EmergencyHelpSpeakerNames = {
    caller: {
        ja: "助けを求める人", en: "Person Asking for Help", "zh-CN": "求助的人", "zh-TW": "求助的人", ko: "도움을 요청하는 사람",
        vi: "Người cần giúp đỡ", tl: "Taong humihingi ng tulong", id: "Orang yang meminta bantuan", th: "ผู้ขอความช่วยเหลือ",
        my: "အကူအညီတောင်းသူ", km: "អ្នកសុំជំនួយ", ne: "मद्दत माग्ने व्यक्ति", mn: "Тусламж хүсэж буй хүн",
        si: "උදව් ඉල්ලන පුද්ගලයා", bn: "সাহায্য চাইছে যে ব্যক্তি", pt: "Pessoa pedindo ajuda", es: "Persona que pide ayuda",
        fr: "Personne demandant de l’aide", ru: "Человек, просящий помощи", uk: "Людина, яка просить допомоги"
    },
    helper: {
        ja: "近くの人", en: "Nearby Person", "zh-CN": "附近的人", "zh-TW": "附近的人", ko: "주변 사람",
        vi: "Người ở gần", tl: "Taong malapit", id: "Orang sekitar", th: "คนใกล้ตัว",
        my: "အနီးရှိလူ", km: "មនុស្សនៅក្បែរ", ne: "नजिकको व्यक्ति", mn: "Ойр байгаа хүн",
        si: "ළඟ සිටින පුද්ගලයා", bn: "কাছের মানুষ", pt: "Pessoa próxima", es: "Persona cercana",
        fr: "Personne proche", ru: "Человек рядом", uk: "Людина поруч"
    },
    operator: {
        ja: "119番の人", en: "Emergency Operator", "zh-CN": "急救电话人员", "zh-TW": "急救電話人員", ko: "119 담당자",
        vi: "Tổng đài khẩn cấp", tl: "Emergency operator", id: "Operator darurat", th: "เจ้าหน้าที่ฉุกเฉิน",
        my: "emergency operator", km: "អ្នកទទួលទូរសព្ទសង្គ្រោះបន្ទាន់", ne: "emergency operator", mn: "Түргэн тусламжийн оператор",
        si: "emergency operator", bn: "emergency operator", pt: "Operador de emergência", es: "Operador de emergencia",
        fr: "Opérateur d’urgence", ru: "Оператор экстренной службы", uk: "Оператор екстреної служби"
    },
    staff: {
        ja: "スタッフ", en: "Staff", "zh-CN": "工作人员", "zh-TW": "工作人員", ko: "스태프",
        vi: "Nhân viên", tl: "Staff", id: "Staf", th: "เจ้าหน้าที่",
        my: "ဝန်ထမ်း", km: "បុគ្គលិក", ne: "कर्मचारी", mn: "Ажилтан",
        si: "කාර්ය මණ්ඩලය", bn: "কর্মী", pt: "Funcionário", es: "Personal",
        fr: "Personnel", ru: "Сотрудник", uk: "Працівник"
    },
    police: {
        ja: "警察官", en: "Police Officer", "zh-CN": "警察", "zh-TW": "警察", ko: "경찰관",
        vi: "Cảnh sát", tl: "Police officer", id: "Polisi", th: "ตำรวจ",
        my: "ရဲအရာရှိ", km: "ប៉ូលិស", ne: "प्रहरी", mn: "Цагдаа",
        si: "පොලිස් නිලධාරියා", bn: "পুলিশ কর্মকর্তা", pt: "Policial", es: "Policía",
        fr: "Policier", ru: "Полицейский", uk: "Поліцейський"
    }
};

function makeA2EmergencyHelpDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_emergency_help",
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
            speakerNames: a2EmergencyHelpSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2EmergencyHelpContext,
        translations,
        dialogueTranslations
    };
}

const japeakA2EmergencyHelpData = [

    makeA2EmergencyHelpDialogue(
        "a2_emergency_001",
        "救急車を呼ぶ",
        [
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "人が倒れています。救急車をお願いします。",
                target: "ひとがたおれています きゅうきゅうしゃをおねがいします",
                ruby: "<ruby>人<rt>ひと</rt></ruby>が<ruby>倒<rt>たお</rt></ruby>れています。<ruby>救急車<rt>きゅうきゅうしゃ</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hito ga taorete imasu. Kyūkyūsha o onegai shimasu."
            },
            {
                label: "話者A",
                key: "operator",
                name: "119番の人",
                line: "場所を教えてください。",
                target: "ばしょをおしえてください",
                ruby: "<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Basho o oshiete kudasai."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "駅前の公園の入口です。",
                target: "えきまえのこうえんのいりぐちです",
                ruby: "<ruby>駅前<rt>えきまえ</rt></ruby>の<ruby>公園<rt>こうえん</rt></ruby>の<ruby>入口<rt>いりぐち</rt></ruby>です。",
                romaji: "Ekimae no kōen no iriguchi desu."
            },
            {
                label: "話者A",
                key: "operator",
                name: "119番の人",
                line: "意識はありますか。返事をしますか。",
                target: "いしきはありますか へんじをしますか",
                ruby: "<ruby>意識<rt>いしき</rt></ruby>はありますか。<ruby>返事<rt>へんじ</rt></ruby>をしますか。",
                romaji: "Ishiki wa arimasu ka. Henji o shimasu ka."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "返事がありません。近くで見守ります。",
                target: "へんじがありません ちかくでみまもります",
                ruby: "<ruby>返事<rt>へんじ</rt></ruby>がありません。<ruby>近<rt>ちか</rt></ruby>くで<ruby>見守<rt>みまも</rt></ruby>ります。",
                romaji: "Henji ga arimasen. Chikaku de mimamorimasu."
            }
        ],
        {
            ja: ["助けを求める人：人が倒れています。救急車をお願いします。", "119番の人：場所を教えてください。", "助けを求める人：駅前の公園の入口です。", "119番の人：意識はありますか。返事をしますか。", "助けを求める人：返事がありません。近くで見守ります。"],
            en: ["Person Asking for Help: A person has collapsed. Please send an ambulance.", "Emergency Operator: Please tell me the location.", "Person Asking for Help: It is at the entrance of the park in front of the station.", "Emergency Operator: Are they conscious? Do they respond?", "Person Asking for Help: They do not respond. I will stay nearby and watch them."],
            "zh-CN": ["求助的人：有人倒下了。请派救护车。", "急救电话人员：请告诉我地点。", "求助的人：在车站前公园的入口。", "急救电话人员：有意识吗？会回答吗？", "求助的人：没有回答。我会在旁边看着。"],
            "zh-TW": ["求助的人：有人倒下了。請派救護車。", "急救電話人員：請告訴我地點。", "求助的人：在車站前公園的入口。", "急救電話人員：有意識嗎？會回答嗎？", "求助的人：沒有回答。我會在旁邊看著。"],
            ko: ["도움을 요청하는 사람: 사람이 쓰러져 있습니다. 구급차를 부탁드립니다.", "119 담당자: 장소를 알려 주세요.", "도움을 요청하는 사람: 역 앞 공원 입구입니다.", "119 담당자: 의식이 있나요? 대답을 하나요?", "도움을 요청하는 사람: 대답이 없습니다. 가까이에서 지켜보겠습니다."],
            vi: ["Người cần giúp đỡ: Có người bị ngã bất tỉnh. Xin hãy gửi xe cứu thương.", "Tổng đài khẩn cấp: Xin cho biết địa điểm.", "Người cần giúp đỡ: Ở lối vào công viên trước ga.", "Tổng đài khẩn cấp: Người đó có ý thức không? Có trả lời không?", "Người cần giúp đỡ: Không trả lời. Tôi sẽ ở gần và theo dõi."],
            tl: ["Taong humihingi ng tulong: May taong bumagsak. Kailangan po ng ambulansya.", "Emergency operator: Pakisabi po ang lugar.", "Taong humihingi ng tulong: Nasa entrance ng park sa harap ng station.", "Emergency operator: May malay po ba? Sumasagot po ba?", "Taong humihingi ng tulong: Hindi po sumasagot. Babantayan ko po siya sa malapit."],
            id: ["Orang yang meminta bantuan: Ada orang pingsan. Tolong kirim ambulans.", "Operator darurat: Tolong beri tahu lokasinya.", "Orang yang meminta bantuan: Di pintu masuk taman depan stasiun.", "Operator darurat: Apakah sadar? Apakah merespons?", "Orang yang meminta bantuan: Tidak merespons. Saya akan mengawasi dari dekat."],
            th: ["ผู้ขอความช่วยเหลือ: มีคนล้มลงค่ะ/ครับ ขอรถพยาบาลด้วยค่ะ/ครับ", "เจ้าหน้าที่ฉุกเฉิน: กรุณาบอกสถานที่ค่ะ/ครับ", "ผู้ขอความช่วยเหลือ: ที่ทางเข้าสวนสาธารณะหน้าสถานีค่ะ/ครับ", "เจ้าหน้าที่ฉุกเฉิน: มีสติไหมคะ/ครับ ตอบสนองไหมคะ/ครับ", "ผู้ขอความช่วยเหลือ: ไม่ตอบค่ะ/ครับ จะคอยดูอยู่ใกล้ ๆ ค่ะ/ครับ"],
            my: ["အကူအညီတောင်းသူ: လူတစ်ယောက် လဲကျနေပါတယ်။ ambulance ပို့ပေးပါ။", "emergency operator: နေရာကို ပြောပြပါ။", "အကူအညီတောင်းသူ: ဘူတာရှေ့ ပန်းခြံဝင်ပေါက်မှာပါ။", "emergency operator: သတိရှိပါသလား။ ပြန်ဖြေပါသလား။", "အကူအညီတောင်းသူ: ပြန်မဖြေပါဘူး။ အနီးမှာ စောင့်ကြည့်ပါမယ်။"],
            km: ["អ្នកសុំជំនួយ: មានមនុស្សម្នាក់ដួល។ សូមផ្ញើរថយន្តសង្គ្រោះបន្ទាន់។", "អ្នកទទួលទូរសព្ទសង្គ្រោះបន្ទាន់: សូមប្រាប់ទីតាំង។", "អ្នកសុំជំនួយ: នៅច្រកចូលសួនច្បារមុខស្ថានីយ៍។", "អ្នកទទួលទូរសព្ទសង្គ្រោះបន្ទាន់: តើគាត់មានស្មារតីទេ? តើគាត់ឆ្លើយតបទេ?", "អ្នកសុំជំនួយ: គាត់មិនឆ្លើយតបទេ។ ខ្ញុំនឹងមើលនៅក្បែរ។"],
            ne: ["मद्दत माग्ने व्यक्ति: एक जना ढलेको छ। कृपया ambulance पठाइदिनुहोस्।", "emergency operator: कृपया स्थान बताउनुहोस्।", "मद्दत माग्ने व्यक्ति: स्टेशन अगाडिको पार्कको प्रवेशद्वार हो।", "emergency operator: चेतना छ? जवाफ दिन्छ?", "मद्दत माग्ने व्यक्ति: जवाफ छैन। म नजिकै बसेर हेर्छु।"],
            mn: ["Тусламж хүсэж буй хүн: Нэг хүн унасан байна. Түргэн тусламж явуулна уу.", "Түргэн тусламжийн оператор: Байршлыг хэлнэ үү.", "Тусламж хүсэж буй хүн: Өртөөний өмнөх цэцэрлэгт хүрээлэнгийн入口 дээр байна.", "Түргэн тусламжийн оператор: Ухаантай байна уу? Хариу өгч байна уу?", "Тусламж хүсэж буй хүн: Хариу өгөхгүй байна. Ойрхон байж ажиглана."],
            si: ["උදව් ඉල්ලන පුද්ගලයා: කෙනෙක් වැටිලා ඉන්නවා. ambulance එකක් එවන්න.", "emergency operator: ස්ථානය කියන්න.", "උදව් ඉල්ලන පුද්ගලයා: station එක ඉදිරිපිට park entrance එකේ.", "emergency operator: conscious ද? ප්‍රතිචාර දක්වනවද?", "උදව් ඉල්ලන පුද්ගලයා: ප්‍රතිචාර නැහැ. මම ළඟින් බලන් ඉන්නම්."],
            bn: ["সাহায্য চাইছে যে ব্যক্তি: একজন মানুষ পড়ে গেছে। দয়া করে ambulance পাঠান।", "emergency operator: দয়া করে স্থান বলুন।", "সাহায্য চাইছে যে ব্যক্তি: স্টেশনের সামনে পার্কের প্রবেশপথে।", "emergency operator: চেতনা আছে? উত্তর দিচ্ছে?", "সাহায্য চাইছে যে ব্যক্তি: উত্তর দিচ্ছে না। আমি কাছে থেকে নজর রাখব।"],
            pt: ["Pessoa pedindo ajuda: Uma pessoa caiu. Por favor, envie uma ambulância.", "Operador de emergência: Por favor, diga o local.", "Pessoa pedindo ajuda: É na entrada do parque em frente à estação.", "Operador de emergência: A pessoa está consciente? Ela responde?", "Pessoa pedindo ajuda: Ela não responde. Vou ficar perto e observar."],
            es: ["Persona que pide ayuda: Una persona se ha desplomado. Por favor, envíen una ambulancia.", "Operador de emergencia: Dígame el lugar, por favor.", "Persona que pide ayuda: Es en la entrada del parque frente a la estación.", "Operador de emergencia: ¿Está consciente? ¿Responde?", "Persona que pide ayuda: No responde. Me quedaré cerca y la vigilaré."],
            fr: ["Personne demandant de l’aide : Une personne est tombée. Envoyez une ambulance, s’il vous plaît.", "Opérateur d’urgence : Veuillez me dire le lieu.", "Personne demandant de l’aide : C’est à l’entrée du parc devant la gare.", "Opérateur d’urgence : Est-elle consciente ? Répond-elle ?", "Personne demandant de l’aide : Elle ne répond pas. Je vais rester près d’elle et surveiller."],
            ru: ["Человек, просящий помощи: Человек упал. Пожалуйста, пришлите скорую.", "Оператор экстренной службы: Сообщите место.", "Человек, просящий помощи: У входа в парк перед станцией.", "Оператор экстренной службы: Он в сознании? Отвечает?", "Человек, просящий помощи: Не отвечает. Я буду рядом и прослежу."],
            uk: ["Людина, яка просить допомоги: Людина впала. Будь ласка, надішліть швидку.", "Оператор екстреної служби: Повідомте місце.", "Людина, яка просить допомоги: Біля входу до парку перед станцією.", "Оператор екстреної служби: Вона при свідомості? Відповідає?", "Людина, яка просить допомоги: Не відповідає. Я буду поруч і наглядатиму."]
        }
    ),

    makeA2EmergencyHelpDialogue(
        "a2_emergency_002",
        "火事を知らせる",
        [
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "台所から煙が出ています。",
                target: "だいどころからけむりがでています",
                ruby: "<ruby>台所<rt>だいどころ</rt></ruby>から<ruby>煙<rt>けむり</rt></ruby>が<ruby>出<rt>で</rt></ruby>ています。",
                romaji: "Daidokoro kara kemuri ga dete imasu."
            },
            {
                label: "話者A",
                key: "helper",
                name: "近くの人",
                line: "すぐに外へ出てください。火は見えますか。",
                target: "すぐにそとへでてください ひはみえますか",
                ruby: "すぐに<ruby>外<rt>そと</rt></ruby>へ<ruby>出<rt>で</rt></ruby>てください。<ruby>火<rt>ひ</rt></ruby>は<ruby>見<rt>み</rt></ruby>えますか。",
                romaji: "Sugu ni soto e dete kudasai. Hi wa miemasu ka."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "火は見えませんが、煙が増えています。",
                target: "ひはみえませんが けむりがふえています",
                ruby: "<ruby>火<rt>ひ</rt></ruby>は<ruby>見<rt>み</rt></ruby>えませんが、<ruby>煙<rt>けむり</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>えています。",
                romaji: "Hi wa miemasen ga, kemuri ga fuete imasu."
            },
            {
                label: "話者A",
                key: "helper",
                name: "近くの人",
                line: "119番に電話します。住所を言えますか。",
                target: "ひゃくじゅうきゅうばんにでんわします じゅうしょをいえますか",
                ruby: "119<ruby>番<rt>ばん</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>します。<ruby>住所<rt>じゅうしょ</rt></ruby>を<ruby>言<rt>い</rt></ruby>えますか。",
                romaji: "Hyakujūkyū-ban ni denwa shimasu. Jūsho o iemasu ka."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "はい、住所をメモしています。",
                target: "はい じゅうしょをめもしています",
                ruby: "はい、<ruby>住所<rt>じゅうしょ</rt></ruby>をメモしています。",
                romaji: "Hai, jūsho o memo shite imasu."
            }
        ],
        {
            ja: ["助けを求める人：台所から煙が出ています。", "近くの人：すぐに外へ出てください。火は見えますか。", "助けを求める人：火は見えませんが、煙が増えています。", "近くの人：119番に電話します。住所を言えますか。", "助けを求める人：はい、住所をメモしています。"],
            en: ["Person Asking for Help: Smoke is coming from the kitchen.", "Nearby Person: Please go outside right away. Can you see fire?", "Person Asking for Help: I cannot see fire, but the smoke is increasing.", "Nearby Person: I will call 119. Can you say the address?", "Person Asking for Help: Yes, I have the address written down."],
            "zh-CN": ["求助的人：厨房冒烟了。", "附近的人：请马上到外面。能看到火吗？", "求助的人：看不到火，但烟越来越多。", "附近的人：我打119。你能说地址吗？", "求助的人：可以，我把地址记下来了。"],
            "zh-TW": ["求助的人：廚房冒煙了。", "附近的人：請馬上到外面。能看到火嗎？", "求助的人：看不到火，但煙越來越多。", "附近的人：我打119。你能說地址嗎？", "求助的人：可以，我把地址記下來了。"],
            ko: ["도움을 요청하는 사람: 부엌에서 연기가 나고 있습니다.", "주변 사람: 바로 밖으로 나가 주세요. 불이 보이나요?", "도움을 요청하는 사람: 불은 보이지 않지만 연기가 늘고 있습니다.", "주변 사람: 119에 전화하겠습니다. 주소를 말할 수 있나요?", "도움을 요청하는 사람: 네, 주소를 메모해 두었습니다."],
            vi: ["Người cần giúp đỡ: Có khói bốc ra từ nhà bếp.", "Người ở gần: Hãy ra ngoài ngay. Bạn có thấy lửa không?", "Người cần giúp đỡ: Tôi không thấy lửa, nhưng khói đang tăng lên.", "Người ở gần: Tôi sẽ gọi 119. Bạn có thể nói địa chỉ không?", "Người cần giúp đỡ: Vâng, tôi đã ghi địa chỉ lại."],
            tl: ["Taong humihingi ng tulong: May usok na lumalabas mula sa kusina.", "Taong malapit: Lumabas po agad. Nakikita po ba ang apoy?", "Taong humihingi ng tulong: Hindi ko nakikita ang apoy, pero dumadami ang usok.", "Taong malapit: Tatawag ako sa 119. Masasabi po ba ninyo ang address?", "Taong humihingi ng tulong: Opo, nakasulat po ang address."],
            id: ["Orang yang meminta bantuan: Asap keluar dari dapur.", "Orang sekitar: Segera keluar. Apakah Anda melihat api?", "Orang yang meminta bantuan: Saya tidak melihat api, tetapi asapnya bertambah.", "Orang sekitar: Saya akan menelepon 119. Bisakah Anda menyebutkan alamatnya?", "Orang yang meminta bantuan: Ya, saya mencatat alamatnya."],
            th: ["ผู้ขอความช่วยเหลือ: มีควันออกมาจากห้องครัวค่ะ/ครับ", "คนใกล้ตัว: รีบออกไปข้างนอกค่ะ/ครับ เห็นไฟไหมคะ/ครับ", "ผู้ขอความช่วยเหลือ: ไม่เห็นไฟ แต่ควันเพิ่มขึ้นค่ะ/ครับ", "คนใกล้ตัว: จะโทร 119 ค่ะ/ครับ บอกที่อยู่ได้ไหมคะ/ครับ", "ผู้ขอความช่วยเหลือ: ได้ค่ะ/ครับ จดที่อยู่ไว้แล้วค่ะ/ครับ"],
            my: ["အကူအညီတောင်းသူ: မီးဖိုချောင်ကနေ မီးခိုးထွက်နေပါတယ်။", "အနီးရှိလူ: ချက်ချင်း အပြင်ထွက်ပါ။ မီးကိုမြင်ပါသလား။", "အကူအညီတောင်းသူ: မီးကို မမြင်ပါဘူး၊ ဒါပေမယ့် မီးခိုးတိုးလာပါတယ်။", "အနီးရှိလူ: 119 ကို ဖုန်းခေါ်ပါမယ်။ လိပ်စာပြောနိုင်ပါသလား။", "အကူအညီတောင်းသူ: ဟုတ်ကဲ့၊ လိပ်စာကို မှတ်ထားပါတယ်။"],
            km: ["អ្នកសុំជំនួយ: មានផ្សែងចេញពីផ្ទះបាយ។", "មនុស្សនៅក្បែរ: សូមចេញទៅក្រៅភ្លាមៗ។ តើឃើញភ្លើងទេ?", "អ្នកសុំជំនួយ: មិនឃើញភ្លើងទេ ប៉ុន្តែផ្សែងកំពុងកើនឡើង។", "មនុស្សនៅក្បែរ: ខ្ញុំនឹងទូរសព្ទទៅ 119។ តើអ្នកអាចប្រាប់អាសយដ្ឋានបានទេ?", "អ្នកសុំជំនួយ: បាន ខ្ញុំបានកត់អាសយដ្ឋានហើយ។"],
            ne: ["मद्दत माग्ने व्यक्ति: भान्साबाट धुवाँ आइरहेको छ।", "नजिकको व्यक्ति: तुरुन्तै बाहिर निस्कनुहोस्। आगो देखिन्छ?", "मद्दत माग्ने व्यक्ति: आगो देखिँदैन, तर धुवाँ बढ्दै छ।", "नजिकको व्यक्ति: म 119 मा फोन गर्छु। ठेगाना भन्न सक्नुहुन्छ?", "मद्दत माग्ने व्यक्ति: सक्छु, ठेगाना लेखेर राखेको छु।"],
            mn: ["Тусламж хүсэж буй хүн: Гал тогооноос утаа гарч байна.", "Ойр байгаа хүн: Шууд гадагш гарна уу. Гал харагдаж байна уу?", "Тусламж хүсэж буй хүн: Гал харагдахгүй байна, гэхдээ утаа нэмэгдэж байна.", "Ойр байгаа хүн: 119 рүү залгана. Хаягаа хэлж чадах уу?", "Тусламж хүсэж буй хүн: Тийм, хаягаа тэмдэглэсэн байгаа."],
            si: ["උදව් ඉල්ලන පුද්ගලයා: kitchen එකෙන් දුම එනවා.", "ළඟ සිටින පුද්ගලයා: ඉක්මනින් පිටතට යන්න. ගින්න පෙනෙනවද?", "උදව් ඉල්ලන පුද්ගලයා: ගින්න පේන්නේ නැහැ, නමුත් දුම වැඩි වෙනවා.", "ළඟ සිටින පුද්ගලයා: මම 119ට call කරන්නම්. address එක කියන්න පුළුවන්ද?", "උදව් ඉල්ලන පුද්ගලයා: ඔව්, address එක note කරලා තියෙනවා."],
            bn: ["সাহায্য চাইছে যে ব্যক্তি: রান্নাঘর থেকে ধোঁয়া বের হচ্ছে।", "কাছের মানুষ: এখনই বাইরে বের হন। আগুন দেখা যাচ্ছে?", "সাহায্য চাইছে যে ব্যক্তি: আগুন দেখা যাচ্ছে না, কিন্তু ধোঁয়া বাড়ছে।", "কাছের মানুষ: আমি 119-এ ফোন করব। ঠিকানা বলতে পারবেন?", "সাহায্য চাইছে যে ব্যক্তি: হ্যাঁ, ঠিকানা লিখে রেখেছি।"],
            pt: ["Pessoa pedindo ajuda: Está saindo fumaça da cozinha.", "Pessoa próxima: Saia imediatamente. Você consegue ver fogo?", "Pessoa pedindo ajuda: Não vejo fogo, mas a fumaça está aumentando.", "Pessoa próxima: Vou ligar para 119. Você consegue dizer o endereço?", "Pessoa pedindo ajuda: Sim, tenho o endereço anotado."],
            es: ["Persona que pide ayuda: Sale humo de la cocina.", "Persona cercana: Salga afuera de inmediato. ¿Puede ver fuego?", "Persona que pide ayuda: No veo fuego, pero el humo está aumentando.", "Persona cercana: Voy a llamar al 119. ¿Puede decir la dirección?", "Persona que pide ayuda: Sí, tengo la dirección anotada."],
            fr: ["Personne demandant de l’aide : De la fumée sort de la cuisine.", "Personne proche : Sortez immédiatement. Voyez-vous du feu ?", "Personne demandant de l’aide : Je ne vois pas de feu, mais la fumée augmente.", "Personne proche : Je vais appeler le 119. Pouvez-vous dire l’adresse ?", "Personne demandant de l’aide : Oui, j’ai noté l’adresse."],
            ru: ["Человек, просящий помощи: Из кухни идёт дым.", "Человек рядом: Немедленно выходите наружу. Видите огонь?", "Человек, просящий помощи: Огня не видно, но дыма становится больше.", "Человек рядом: Я позвоню 119. Вы можете сказать адрес?", "Человек, просящий помощи: Да, адрес у меня записан."],
            uk: ["Людина, яка просить допомоги: З кухні йде дим.", "Людина поруч: Негайно виходьте назовні. Ви бачите вогонь?", "Людина, яка просить допомоги: Вогню не видно, але диму стає більше.", "Людина поруч: Я зателефоную 119. Ви можете сказати адресу?", "Людина, яка просить допомоги: Так, адресу записано."]
        }
    ),

    makeA2EmergencyHelpDialogue(
        "a2_emergency_003",
        "けがをして助けを求める",
        [
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "自転車で転んで、足をけがしました。",
                target: "じてんしゃでころんで あしをけがしました",
                ruby: "<ruby>自転車<rt>じてんしゃ</rt></ruby>で<ruby>転<rt>ころ</rt></ruby>んで、<ruby>足<rt>あし</rt></ruby>をけがしました。",
                romaji: "Jitensha de koronde, ashi o kega shimashita."
            },
            {
                label: "話者A",
                key: "helper",
                name: "近くの人",
                line: "無理に動かないでください。血は出ていますか。",
                target: "むりにうごかないでください ちはでていますか",
                ruby: "<ruby>無理<rt>むり</rt></ruby>に<ruby>動<rt>うご</rt></ruby>かないでください。<ruby>血<rt>ち</rt></ruby>は<ruby>出<rt>で</rt></ruby>ていますか。",
                romaji: "Muri ni ugokanai de kudasai. Chi wa dete imasu ka."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "少し出ています。歩くと痛いです。",
                target: "すこしでています あるくといたいです",
                ruby: "<ruby>少<rt>すこ</rt></ruby>し<ruby>出<rt>で</rt></ruby>ています。<ruby>歩<rt>ある</rt></ruby>くと<ruby>痛<rt>いた</rt></ruby>いです。",
                romaji: "Sukoshi dete imasu. Aruku to itai desu."
            },
            {
                label: "話者A",
                key: "helper",
                name: "近くの人",
                line: "救急箱を持ってきます。家族に連絡しますか。",
                target: "きゅうきゅうばこをもってきます かぞくにれんらくしますか",
                ruby: "<ruby>救急箱<rt>きゅうきゅうばこ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ってきます。<ruby>家族<rt>かぞく</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>しますか。",
                romaji: "Kyūkyūbako o motte kimasu. Kazoku ni renraku shimasu ka."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "はい、電話をかけるのを手伝ってください。",
                target: "はい でんわをかけるのをてつだってください",
                ruby: "はい、<ruby>電話<rt>でんわ</rt></ruby>をかけるのを<ruby>手伝<rt>てつだ</rt></ruby>ってください。",
                romaji: "Hai, denwa o kakeru no o tetsudatte kudasai."
            }
        ],
        {
            ja: ["助けを求める人：自転車で転んで、足をけがしました。", "近くの人：無理に動かないでください。血は出ていますか。", "助けを求める人：少し出ています。歩くと痛いです。", "近くの人：救急箱を持ってきます。家族に連絡しますか。", "助けを求める人：はい、電話をかけるのを手伝ってください。"],
            en: ["Person Asking for Help: I fell off my bicycle and injured my leg.", "Nearby Person: Please do not move too much. Are you bleeding?", "Person Asking for Help: A little. It hurts when I walk.", "Nearby Person: I will bring a first-aid kit. Do you want to contact your family?", "Person Asking for Help: Yes, please help me make a phone call."],
            "zh-CN": ["求助的人：我骑自行车摔倒，脚受伤了。", "附近的人：请不要勉强移动。出血了吗？", "求助的人：有一点。走路会痛。", "附近的人：我去拿急救箱。要联系家人吗？", "求助的人：是的，请帮我打电话。"],
            "zh-TW": ["求助的人：我騎自行車摔倒，腳受傷了。", "附近的人：請不要勉強移動。出血了嗎？", "求助的人：有一點。走路會痛。", "附近的人：我去拿急救箱。要聯絡家人嗎？", "求助的人：是的，請幫我打電話。"],
            ko: ["도움을 요청하는 사람: 자전거를 타다가 넘어져서 다리를 다쳤습니다.", "주변 사람: 무리해서 움직이지 마세요. 피가 나고 있나요?", "도움을 요청하는 사람: 조금 나고 있습니다. 걸으면 아픕니다.", "주변 사람: 구급상자를 가져오겠습니다. 가족에게 연락할까요?", "도움을 요청하는 사람: 네, 전화 거는 것을 도와주세요."],
            vi: ["Người cần giúp đỡ: Tôi bị ngã xe đạp và bị thương ở chân.", "Người ở gần: Xin đừng cố di chuyển. Có chảy máu không?", "Người cần giúp đỡ: Có một chút. Đi bộ thì đau.", "Người ở gần: Tôi sẽ mang hộp sơ cứu. Bạn có muốn liên lạc với gia đình không?", "Người cần giúp đỡ: Vâng, xin hãy giúp tôi gọi điện."],
            tl: ["Taong humihingi ng tulong: Nahulog po ako sa bisikleta at nasugatan ang paa ko.", "Taong malapit: Huwag po kayong gumalaw nang pilit. Dumudugo po ba?", "Taong humihingi ng tulong: Kaunti po. Masakit kapag naglalakad.", "Taong malapit: Kukuha po ako ng first-aid kit. Tatawagan po ba ang pamilya ninyo?", "Taong humihingi ng tulong: Opo, tulungan po ninyo akong tumawag."],
            id: ["Orang yang meminta bantuan: Saya jatuh dari sepeda dan kaki saya terluka.", "Orang sekitar: Jangan bergerak secara paksa. Apakah berdarah?", "Orang yang meminta bantuan: Sedikit. Sakit kalau berjalan.", "Orang sekitar: Saya akan membawa kotak P3K. Apakah ingin menghubungi keluarga?", "Orang yang meminta bantuan: Ya, tolong bantu saya menelepon."],
            th: ["ผู้ขอความช่วยเหลือ: ล้มจากจักรยานและบาดเจ็บที่ขาค่ะ/ครับ", "คนใกล้ตัว: อย่าฝืนขยับค่ะ/ครับ มีเลือดออกไหมคะ/ครับ", "ผู้ขอความช่วยเหลือ: ออกนิดหน่อยค่ะ/ครับ เดินแล้วเจ็บค่ะ/ครับ", "คนใกล้ตัว: จะไปเอากล่องปฐมพยาบาลค่ะ/ครับ จะติดต่อครอบครัวไหมคะ/ครับ", "ผู้ขอความช่วยเหลือ: ค่ะ/ครับ ช่วยโทรให้หน่อยค่ะ/ครับ"],
            my: ["အကူအညီတောင်းသူ: စက်ဘီးနဲ့လဲပြီး ခြေထောက်ထိခိုက်သွားပါတယ်။", "အနီးရှိလူ: အတင်းမလှုပ်ပါနဲ့။ သွေးထွက်နေပါသလား။", "အကူအညီတောင်းသူ: နည်းနည်းထွက်နေပါတယ်။ လမ်းလျှောက်ရင် နာပါတယ်။", "အနီးရှိလူ: first-aid kit ယူလာပါမယ်။ မိသားစုကို ဆက်သွယ်မလား။", "အကူအညီတောင်းသူ: ဟုတ်ကဲ့၊ ဖုန်းခေါ်ဖို့ ကူညီပေးပါ။"],
            km: ["អ្នកសុំជំនួយ: ខ្ញុំដួលពីកង់ ហើយរបួសជើង។", "មនុស្សនៅក្បែរ: សូមកុំផ្លាស់ទីដោយបង្ខំ។ តើមានឈាមចេញទេ?", "អ្នកសុំជំនួយ: មានបន្តិច។ ពេលដើរឈឺ។", "មនុស្សនៅក្បែរ: ខ្ញុំនឹងយកប្រអប់សង្គ្រោះបឋម។ តើចង់ទាក់ទងគ្រួសារទេ?", "អ្នកសុំជំនួយ: បាទ/ចាស សូមជួយខ្ញុំទូរសព្ទ។"],
            ne: ["मद्दत माग्ने व्यक्ति: साइकलबाट लडेर खुट्टामा चोट लाग्यो।", "नजिकको व्यक्ति: जबरजस्ती नहिँड्नुहोस्। रगत आएको छ?", "मद्दत माग्ने व्यक्ति: अलि आएको छ। हिँड्दा दुख्छ।", "नजिकको व्यक्ति: म first-aid kit ल्याउँछु। परिवारलाई सम्पर्क गर्ने?", "मद्दत माग्ने व्यक्ति: हो, फोन गर्न मद्दत गर्नुहोस्।"],
            mn: ["Тусламж хүсэж буй хүн: Дугуйнаас унаад хөлөө гэмтээлээ.", "Ойр байгаа хүн: Хүчээр битгий хөдөл. Цус гарч байна уу?", "Тусламж хүсэж буй хүн: Жаахан гарч байна. Алхахаар өвдөж байна.", "Ойр байгаа хүн: Анхны тусламжийн хайрцаг авчиръя. Гэр бүлтэйгээ холбоо барих уу?", "Тусламж хүсэж буй хүн: Тийм, утсаар ярихад туслаарай."],
            si: ["උදව් ඉල්ලන පුද්ගලයා: බයිසිකලයෙන් වැටිලා කකුලට තුවාල වුණා.", "ළඟ සිටින පුද්ගලයා: බලෙන් චලනය වෙන්න එපා. ලේ එනවද?", "උදව් ඉල්ලන පුද්ගලයා: ටිකක් එනවා. ඇවිදිනකොට වේදනයි.", "ළඟ සිටින පුද්ගලයා: first-aid kit එකක් ගෙන එන්නම්. පවුලට contact කරන්නද?", "උදව් ඉල්ලන පුද්ගලයා: ඔව්, phone call එකක් කරන්න උදව් කරන්න."],
            bn: ["সাহায্য চাইছে যে ব্যক্তি: সাইকেল থেকে পড়ে পায়ে আঘাত পেয়েছি।", "কাছের মানুষ: জোর করে নড়বেন না। রক্ত বের হচ্ছে?", "সাহায্য চাইছে যে ব্যক্তি: একটু বের হচ্ছে। হাঁটলে ব্যথা করে।", "কাছের মানুষ: আমি first-aid kit আনছি। পরিবারের সঙ্গে যোগাযোগ করবেন?", "সাহায্য চাইছে যে ব্যক্তি: হ্যাঁ, ফোন করতে সাহায্য করুন।"],
            pt: ["Pessoa pedindo ajuda: Caí de bicicleta e machuquei a perna.", "Pessoa próxima: Por favor, não se mova à força. Está sangrando?", "Pessoa pedindo ajuda: Um pouco. Dói quando eu ando.", "Pessoa próxima: Vou trazer um kit de primeiros socorros. Quer contatar sua família?", "Pessoa pedindo ajuda: Sim, ajude-me a fazer uma ligação."],
            es: ["Persona que pide ayuda: Me caí de la bicicleta y me lastimé la pierna.", "Persona cercana: No se mueva a la fuerza. ¿Está sangrando?", "Persona que pide ayuda: Un poco. Me duele al caminar.", "Persona cercana: Traeré un botiquín de primeros auxilios. ¿Quiere contactar a su familia?", "Persona que pide ayuda: Sí, ayúdeme a hacer una llamada."],
            fr: ["Personne demandant de l’aide : Je suis tombé de vélo et je me suis blessé à la jambe.", "Personne proche : Ne bougez pas trop. Saignez-vous ?", "Personne demandant de l’aide : Un peu. J’ai mal quand je marche.", "Personne proche : Je vais apporter une trousse de premiers secours. Voulez-vous contacter votre famille ?", "Personne demandant de l’aide : Oui, aidez-moi à téléphoner, s’il vous plaît."],
            ru: ["Человек, просящий помощи: Я упал с велосипеда и повредил ногу.", "Человек рядом: Пожалуйста, не двигайтесь через силу. Есть кровь?", "Человек, просящий помощи: Немного. Больно ходить.", "Человек рядом: Я принесу аптечку. Связаться с семьёй?", "Человек, просящий помощи: Да, помогите мне позвонить."],
            uk: ["Людина, яка просить допомоги: Я впав з велосипеда і пошкодив ногу.", "Людина поруч: Будь ласка, не рухайтеся через силу. Є кров?", "Людина, яка просить допомоги: Трохи. Боляче ходити.", "Людина поруч: Я принесу аптечку. Зв’язатися з родиною?", "Людина, яка просить допомоги: Так, допоможіть мені зателефонувати."]
        }
    ),

    makeA2EmergencyHelpDialogue(
        "a2_emergency_004",
        "警察に相談する",
        [
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "財布が見つかりません。盗まれたかもしれません。",
                target: "さいふがみつかりません ぬすまれたかもしれません",
                ruby: "<ruby>財布<rt>さいふ</rt></ruby>が<ruby>見<rt>み</rt></ruby>つかりません。<ruby>盗<rt>ぬす</rt></ruby>まれたかもしれません。",
                romaji: "Saifu ga mitsukarimasen. Nusumareta kamoshiremasen."
            },
            {
                label: "話者A",
                key: "police",
                name: "警察官",
                line: "最後に見た場所はどこですか。",
                target: "さいごにみたばしょはどこですか",
                ruby: "<ruby>最後<rt>さいご</rt></ruby>に<ruby>見<rt>み</rt></ruby>た<ruby>場所<rt>ばしょ</rt></ruby>はどこですか。",
                romaji: "Saigo ni mita basho wa doko desu ka."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "駅の券売機の前で使いました。",
                target: "えきのけんばいきのまえでつかいました",
                ruby: "<ruby>駅<rt>えき</rt></ruby>の<ruby>券売機<rt>けんばいき</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>で<ruby>使<rt>つか</rt></ruby>いました。",
                romaji: "Eki no kenbaiki no mae de tsukaimashita."
            },
            {
                label: "話者A",
                key: "police",
                name: "警察官",
                line: "中に何が入っていましたか。",
                target: "なかになにがはいっていましたか",
                ruby: "<ruby>中<rt>なか</rt></ruby>に<ruby>何<rt>なに</rt></ruby>が<ruby>入<rt>はい</rt></ruby>っていましたか。",
                romaji: "Naka ni nani ga haitte imashita ka."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "在留カードと銀行のカードが入っています。",
                target: "ざいりゅうかーどとぎんこうのかーどがはいっています",
                ruby: "<ruby>在留<rt>ざいりゅう</rt></ruby>カードと<ruby>銀行<rt>ぎんこう</rt></ruby>のカードが<ruby>入<rt>はい</rt></ruby>っています。",
                romaji: "Zairyū kādo to ginkō no kādo ga haitte imasu."
            }
        ],
        {
            ja: ["助けを求める人：財布が見つかりません。盗まれたかもしれません。", "警察官：最後に見た場所はどこですか。", "助けを求める人：駅の券売機の前で使いました。", "警察官：中に何が入っていましたか。", "助けを求める人：在留カードと銀行のカードが入っています。"],
            en: ["Person Asking for Help: I cannot find my wallet. It may have been stolen.", "Police Officer: Where did you last see it?", "Person Asking for Help: I used it in front of the ticket machine at the station.", "Police Officer: What was inside?", "Person Asking for Help: My residence card and bank card are inside."],
            "zh-CN": ["求助的人：我的钱包找不到了。可能被偷了。", "警察：最后看到它的地方在哪里？", "求助的人：在车站的售票机前用过。", "警察：里面有什么？", "求助的人：里面有在留卡和银行卡。"],
            "zh-TW": ["求助的人：我的錢包找不到了。可能被偷了。", "警察：最後看到它的地方在哪裡？", "求助的人：在車站的售票機前用過。", "警察：裡面有什麼？", "求助的人：裡面有在留卡和銀行卡。"],
            ko: ["도움을 요청하는 사람: 지갑을 찾을 수 없습니다. 도난당했을지도 모릅니다.", "경찰관: 마지막으로 본 장소는 어디인가요?", "도움을 요청하는 사람: 역의 발권기 앞에서 사용했습니다.", "경찰관: 안에 무엇이 들어 있었나요?", "도움을 요청하는 사람: 재류카드와 은행 카드가 들어 있습니다."],
            vi: ["Người cần giúp đỡ: Tôi không tìm thấy ví. Có thể nó đã bị lấy cắp.", "Cảnh sát: Bạn thấy nó lần cuối ở đâu?", "Người cần giúp đỡ: Tôi đã dùng nó trước máy bán vé ở ga.", "Cảnh sát: Bên trong có gì?", "Người cần giúp đỡ: Có thẻ cư trú và thẻ ngân hàng."],
            tl: ["Taong humihingi ng tulong: Hindi ko po makita ang wallet ko. Baka ninakaw po.", "Police officer: Saan po ninyo huling nakita?", "Taong humihingi ng tulong: Ginamit ko po sa harap ng ticket machine sa station.", "Police officer: Ano po ang laman?", "Taong humihingi ng tulong: Nasa loob po ang residence card at bank card ko."],
            id: ["Orang yang meminta bantuan: Dompet saya tidak ditemukan. Mungkin dicuri.", "Polisi: Di mana terakhir kali Anda melihatnya?", "Orang yang meminta bantuan: Saya menggunakannya di depan mesin tiket di stasiun.", "Polisi: Apa saja yang ada di dalamnya?", "Orang yang meminta bantuan: Ada kartu penduduk dan kartu bank."],
            th: ["ผู้ขอความช่วยเหลือ: หากระเป๋าสตางค์ไม่เจอค่ะ/ครับ อาจถูกขโมยค่ะ/ครับ", "ตำรวจ: เห็นครั้งสุดท้ายที่ไหนคะ/ครับ", "ผู้ขอความช่วยเหลือ: ใช้ที่หน้าเครื่องขายตั๋วที่สถานีค่ะ/ครับ", "ตำรวจ: ข้างในมีอะไรบ้างคะ/ครับ", "ผู้ขอความช่วยเหลือ: มีบัตรไซริวและบัตรธนาคารค่ะ/ครับ"],
            my: ["အကူအညီတောင်းသူ: ပိုက်ဆံအိတ်ကို ရှာမတွေ့ပါဘူး။ ခိုးခံရတာ ဖြစ်နိုင်ပါတယ်။", "ရဲအရာရှိ: နောက်ဆုံး မြင်ခဲ့တဲ့နေရာက ဘယ်မှာပါလဲ။", "အကူအညီတောင်းသူ: ဘူတာက ticket machine ရှေ့မှာ သုံးခဲ့ပါတယ်။", "ရဲအရာရှိ: အထဲမှာ ဘာတွေပါလဲ။", "အကူအညီတောင်းသူ: residence card နဲ့ bank card ပါပါတယ်။"],
            km: ["អ្នកសុំជំនួយ: ខ្ញុំរកកាបូបលុយមិនឃើញ។ អាចត្រូវបានលួច។", "ប៉ូលិស: តើអ្នកឃើញវាចុងក្រោយនៅឯណា?", "អ្នកសុំជំនួយ: ខ្ញុំបានប្រើវានៅមុខម៉ាស៊ីនលក់សំបុត្រនៅស្ថានីយ៍។", "ប៉ូលិស: តើមានអ្វីនៅក្នុងនោះ?", "អ្នកសុំជំនួយ: មានប័ណ្ណស្នាក់នៅ និងកាតធនាគារ។"],
            ne: ["मद्दत माग्ने व्यक्ति: मेरो पर्स भेटिएन। चोरी भएको हुन सक्छ।", "प्रहरी: अन्तिम पटक कहाँ देख्नुभयो?", "मद्दत माग्ने व्यक्ति: स्टेशनको ticket machine अगाडि प्रयोग गरेको थिएँ।", "प्रहरी: भित्र के थियो?", "मद्दत माग्ने व्यक्ति: residence card र bank card छन्।"],
            mn: ["Тусламж хүсэж буй хүн: Түрийвчээ олж чадахгүй байна. Хулгайлагдсан байж магадгүй.", "Цагдаа: Хамгийн сүүлд хаана харсан бэ?", "Тусламж хүсэж буй хүн: Өртөөний тасалбарын машины өмнө хэрэглэсэн.", "Цагдаа: Дотор нь юу байсан бэ?", "Тусламж хүсэж буй хүн: Оршин суух карт болон банкны карт байгаа."],
            si: ["උදව් ඉල්ලන පුද්ගලයා: wallet එක හම්බවෙන්නේ නැහැ. හොරකම් කරලා ඇති.", "පොලිස් නිලධාරියා: අවසානයට දැක්කේ කොහෙද?", "උදව් ඉල්ලන පුද්ගලයා: station එකේ ticket machine ඉදිරියේ භාවිතා කළා.", "පොලිස් නිලධාරියා: ඇතුළේ මොනවා තිබුණද?", "උදව් ඉල්ලන පුද්ගලයා: residence card සහ bank card තියෙනවා."],
            bn: ["সাহায্য চাইছে যে ব্যক্তি: আমার মানিব্যাগ খুঁজে পাচ্ছি না। হয়তো চুরি হয়েছে।", "পুলিশ কর্মকর্তা: শেষবার কোথায় দেখেছিলেন?", "সাহায্য চাইছে যে ব্যক্তি: স্টেশনের ticket machine-এর সামনে ব্যবহার করেছিলাম।", "পুলিশ কর্মকর্তা: ভেতরে কী ছিল?", "সাহায্য চাইছে যে ব্যক্তি: residence card এবং bank card আছে।"],
            pt: ["Pessoa pedindo ajuda: Não encontro minha carteira. Pode ter sido roubada.", "Policial: Onde você a viu pela última vez?", "Pessoa pedindo ajuda: Usei em frente à máquina de bilhetes na estação.", "Policial: O que havia dentro?", "Pessoa pedindo ajuda: Meu cartão de residência e cartão bancário estão dentro."],
            es: ["Persona que pide ayuda: No encuentro mi cartera. Puede que haya sido robada.", "Policía: ¿Dónde la vio por última vez?", "Persona que pide ayuda: La usé frente a la máquina de boletos en la estación.", "Policía: ¿Qué había dentro?", "Persona que pide ayuda: Mi tarjeta de residencia y mi tarjeta bancaria están dentro."],
            fr: ["Personne demandant de l’aide : Je ne trouve pas mon portefeuille. Il a peut-être été volé.", "Policier : Où l’avez-vous vu pour la dernière fois ?", "Personne demandant de l’aide : Je l’ai utilisé devant le distributeur de billets à la gare.", "Policier : Qu’y avait-il dedans ?", "Personne demandant de l’aide : Ma carte de résidence et ma carte bancaire sont dedans."],
            ru: ["Человек, просящий помощи: Я не могу найти кошелёк. Возможно, его украли.", "Полицейский: Где вы видели его в последний раз?", "Человек, просящий помощи: Я пользовался им перед билетным автоматом на станции.", "Полицейский: Что было внутри?", "Человек, просящий помощи: Карта резидента и банковская карта."],
            uk: ["Людина, яка просить допомоги: Я не можу знайти гаманець. Можливо, його вкрали.", "Поліцейський: Де ви бачили його востаннє?", "Людина, яка просить допомоги: Я користувався ним біля квиткового автомата на станції.", "Поліцейський: Що було всередині?", "Людина, яка просить допомоги: Картка резидента та банківська картка."]
        }
    ),

    makeA2EmergencyHelpDialogue(
        "a2_emergency_005",
        "子どもが迷子になった",
        [
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "子どもが見つかりません。探すのを手伝ってください。",
                target: "こどもがみつかりません さがすのをてつだってください",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>見<rt>み</rt></ruby>つかりません。<ruby>探<rt>さが</rt></ruby>すのを<ruby>手伝<rt>てつだ</rt></ruby>ってください。",
                romaji: "Kodomo ga mitsukarimasen. Sagasu no o tetsudatte kudasai."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "落ち着いてください。最後に見た場所はどこですか。",
                target: "おちついてください さいごにみたばしょはどこですか",
                ruby: "<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いてください。<ruby>最後<rt>さいご</rt></ruby>に<ruby>見<rt>み</rt></ruby>た<ruby>場所<rt>ばしょ</rt></ruby>はどこですか。",
                romaji: "Ochitsuite kudasai. Saigo ni mita basho wa doko desu ka."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "イベント会場の入口の近くです。",
                target: "いべんとかいじょうのいりぐちのちかくです",
                ruby: "イベント<ruby>会場<rt>かいじょう</rt></ruby>の<ruby>入口<rt>いりぐち</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くです。",
                romaji: "Ibento kaijō no iriguchi no chikaku desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "服の色と年齢を教えてください。",
                target: "ふくのいろとねんれいをおしえてください",
                ruby: "<ruby>服<rt>ふく</rt></ruby>の<ruby>色<rt>いろ</rt></ruby>と<ruby>年齢<rt>ねんれい</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Fuku no iro to nenrei o oshiete kudasai."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "青い上着を着ています。六歳です。",
                target: "あおいうわぎをきています ろくさいです",
                ruby: "<ruby>青<rt>あお</rt></ruby>い<ruby>上着<rt>うわぎ</rt></ruby>を<ruby>着<rt>き</rt></ruby>ています。<ruby>六歳<rt>ろくさい</rt></ruby>です。",
                romaji: "Aoi uwagi o kite imasu. Rokusai desu."
            }
        ],
        {
            ja: ["助けを求める人：子どもが見つかりません。探すのを手伝ってください。", "スタッフ：落ち着いてください。最後に見た場所はどこですか。", "助けを求める人：イベント会場の入口の近くです。", "スタッフ：服の色と年齢を教えてください。", "助けを求める人：青い上着を着ています。六歳です。"],
            en: ["Person Asking for Help: I cannot find my child. Please help me look.", "Staff: Please stay calm. Where did you last see the child?", "Person Asking for Help: Near the entrance of the event venue.", "Staff: Please tell me the color of the clothes and the age.", "Person Asking for Help: The child is wearing a blue jacket. Six years old."],
            "zh-CN": ["求助的人：我找不到孩子了。请帮我找。", "工作人员：请冷静。最后看到孩子的地方在哪里？", "求助的人：在活动会场入口附近。", "工作人员：请告诉我衣服颜色和年龄。", "求助的人：穿着蓝色外套。六岁。"],
            "zh-TW": ["求助的人：我找不到孩子了。請幫我找。", "工作人員：請冷靜。最後看到孩子的地方在哪裡？", "求助的人：在活動會場入口附近。", "工作人員：請告訴我衣服顏色和年齡。", "求助的人：穿著藍色外套。六歲。"],
            ko: ["도움을 요청하는 사람: 아이를 찾을 수 없습니다. 찾는 것을 도와주세요.", "스태프: 침착해 주세요. 마지막으로 본 장소는 어디인가요?", "도움을 요청하는 사람: 이벤트장 입구 근처입니다.", "스태프: 옷 색깔과 나이를 알려 주세요.", "도움을 요청하는 사람: 파란색 겉옷을 입고 있습니다. 여섯 살입니다."],
            vi: ["Người cần giúp đỡ: Tôi không tìm thấy con tôi. Xin hãy giúp tôi tìm.", "Nhân viên: Xin hãy bình tĩnh. Bạn thấy bé lần cuối ở đâu?", "Người cần giúp đỡ: Gần lối vào địa điểm sự kiện.", "Nhân viên: Xin cho biết màu quần áo và tuổi.", "Người cần giúp đỡ: Bé mặc áo khoác màu xanh. Sáu tuổi."],
            tl: ["Taong humihingi ng tulong: Hindi ko po makita ang anak ko. Tulungan po ninyo akong maghanap.", "Staff: Kalma lang po. Saan po ninyo huling nakita?", "Taong humihingi ng tulong: Malapit po sa entrance ng event venue.", "Staff: Pakisabi po ang kulay ng damit at edad.", "Taong humihingi ng tulong: Nakasuot po ng blue jacket. Anim na taong gulang."],
            id: ["Orang yang meminta bantuan: Saya tidak bisa menemukan anak saya. Tolong bantu mencarinya.", "Staf: Harap tenang. Di mana terakhir kali Anda melihatnya?", "Orang yang meminta bantuan: Di dekat pintu masuk tempat acara.", "Staf: Tolong beri tahu warna pakaian dan usianya.", "Orang yang meminta bantuan: Memakai jaket biru. Usianya enam tahun."],
            th: ["ผู้ขอความช่วยเหลือ: หาลูกไม่เจอค่ะ/ครับ ช่วยตามหาด้วยค่ะ/ครับ", "เจ้าหน้าที่: ใจเย็น ๆ ค่ะ/ครับ เห็นครั้งสุดท้ายที่ไหนคะ/ครับ", "ผู้ขอความช่วยเหลือ: ใกล้ทางเข้าสถานที่จัดงานค่ะ/ครับ", "เจ้าหน้าที่: กรุณาบอกสีเสื้อผ้าและอายุค่ะ/ครับ", "ผู้ขอความช่วยเหลือ: ใส่เสื้อคลุมสีฟ้าค่ะ/ครับ อายุหกขวบค่ะ/ครับ"],
            my: ["အကူအညီတောင်းသူ: ကလေးကို ရှာမတွေ့ပါဘူး။ ရှာဖို့ ကူညီပေးပါ။", "ဝန်ထမ်း: စိတ်အေးအေးထားပါ။ နောက်ဆုံး မြင်ခဲ့တဲ့နေရာက ဘယ်မှာပါလဲ။", "အကူအညီတောင်းသူ: event venue ဝင်ပေါက်အနီးမှာပါ။", "ဝန်ထမ်း: အဝတ်အရောင်နဲ့ အသက်ကို ပြောပြပါ။", "အကူအညီတောင်းသူ: အပြာရောင် jacket ဝတ်ထားပါတယ်။ ၆ နှစ်ပါ။"],
            km: ["អ្នកសុំជំនួយ: ខ្ញុំរកកូនមិនឃើញ។ សូមជួយរក។", "បុគ្គលិក: សូមស្ងប់ចិត្ត។ តើឃើញចុងក្រោយនៅឯណា?", "អ្នកសុំជំនួយ: នៅជិតច្រកចូលកន្លែងកម្មវិធី។", "បុគ្គលិក: សូមប្រាប់ពណ៌សម្លៀកបំពាក់ និងអាយុ។", "អ្នកសុំជំនួយ: ពាក់អាវក្រៅពណ៌ខៀវ។ អាយុប្រាំមួយឆ្នាំ។"],
            ne: ["मद्दत माग्ने व्यक्ति: मेरो बच्चा भेटिएन। खोज्न मद्दत गर्नुहोस्।", "कर्मचारी: शान्त हुनुहोस्। अन्तिम पटक कहाँ देख्नुभयो?", "मद्दत माग्ने व्यक्ति: कार्यक्रमस्थलको प्रवेशद्वार नजिक।", "कर्मचारी: लुगाको रंग र उमेर बताउनुहोस्।", "मद्दत माग्ने व्यक्ति: निलो ज्याकेट लगाएको छ। छ वर्षको हो।"],
            mn: ["Тусламж хүсэж буй хүн: Хүүхдээ олж чадахгүй байна. Хайхад туслаарай.", "Ажилтан: Тайван байгаарай. Хамгийн сүүлд хаана харсан бэ?", "Тусламж хүсэж буй хүн: Арга хэмжээний газрын入口-ийн ойролцоо.", "Ажилтан: Хувцасны өнгө болон насыг хэлнэ үү.", "Тусламж хүсэж буй хүн: Цэнхэр хүрэм өмссөн. Зургаан настай."],
            si: ["උදව් ඉල්ලන පුද්ගලයා: මගේ ළමයා හම්බවෙන්නේ නැහැ. සොයන්න උදව් කරන්න.", "කාර්ය මණ්ඩලය: කරුණාකර සන්සුන් වෙන්න. අවසානයට දැක්කේ කොහෙද?", "උදව් ඉල්ලන පුද්ගලයා: event venue entrance එක ළඟ.", "කාර්ය මණ්ඩලය: ඇඳුමේ පාට සහ වයස කියන්න.", "උදව් ඉල්ලන පුද්ගලයා: blue jacket එකක් ඇඳලා ඉන්නවා. වයස හයයි."],
            bn: ["সাহায্য চাইছে যে ব্যক্তি: আমার শিশুকে খুঁজে পাচ্ছি না। খুঁজতে সাহায্য করুন।", "কর্মী: শান্ত থাকুন। শেষবার কোথায় দেখেছিলেন?", "সাহায্য চাইছে যে ব্যক্তি: অনুষ্ঠানস্থলের প্রবেশপথের কাছে।", "কর্মী: পোশাকের রং এবং বয়স বলুন।", "সাহায্য চাইছে যে ব্যক্তি: নীল জ্যাকেট পরেছে। বয়স ছয়।"],
            pt: ["Pessoa pedindo ajuda: Não encontro meu filho. Por favor, ajude-me a procurar.", "Funcionário: Mantenha a calma. Onde você o viu pela última vez?", "Pessoa pedindo ajuda: Perto da entrada do local do evento.", "Funcionário: Diga a cor da roupa e a idade.", "Pessoa pedindo ajuda: Está usando uma jaqueta azul. Tem seis anos."],
            es: ["Persona que pide ayuda: No encuentro a mi hijo. Por favor, ayúdeme a buscarlo.", "Personal: Mantenga la calma. ¿Dónde lo vio por última vez?", "Persona que pide ayuda: Cerca de la entrada del lugar del evento.", "Personal: Dígame el color de la ropa y la edad.", "Persona que pide ayuda: Lleva una chaqueta azul. Tiene seis años."],
            fr: ["Personne demandant de l’aide : Je ne trouve pas mon enfant. Aidez-moi à le chercher, s’il vous plaît.", "Personnel : Restez calme. Où l’avez-vous vu pour la dernière fois ?", "Personne demandant de l’aide : Près de l’entrée du lieu de l’événement.", "Personnel : Dites-moi la couleur des vêtements et l’âge.", "Personne demandant de l’aide : Il porte une veste bleue. Il a six ans."],
            ru: ["Человек, просящий помощи: Я не могу найти ребёнка. Помогите искать.", "Сотрудник: Успокойтесь. Где вы видели его в последний раз?", "Человек, просящий помощи: Рядом со входом на площадку мероприятия.", "Сотрудник: Назовите цвет одежды и возраст.", "Человек, просящий помощи: Он в синей куртке. Ему шесть лет."],
            uk: ["Людина, яка просить допомоги: Я не можу знайти дитину. Допоможіть шукати.", "Працівник: Заспокойтеся. Де ви бачили її востаннє?", "Людина, яка просить допомоги: Біля входу на місце заходу.", "Працівник: Назвіть колір одягу та вік.", "Людина, яка просить допомоги: Вона у синій куртці. Їй шість років."]
        }
    ),

    makeA2EmergencyHelpDialogue(
        "a2_emergency_006",
        "地震のときに避難する",
        [
            {
                label: "話者A",
                key: "helper",
                name: "近くの人",
                line: "地震です。まず机の下に入ってください。",
                target: "じしんです まずつくえのしたにはいってください",
                ruby: "<ruby>地震<rt>じしん</rt></ruby>です。まず<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ってください。",
                romaji: "Jishin desu. Mazu tsukue no shita ni haitte kudasai."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "外へ出た方がいいですか。",
                target: "そとへでたほうがいいですか",
                ruby: "<ruby>外<rt>そと</rt></ruby>へ<ruby>出<rt>で</rt></ruby>た<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Soto e deta hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "helper",
                name: "近くの人",
                line: "揺れがおさまるまで、ここで待ちましょう。",
                target: "ゆれがおさまるまで ここでまちましょう",
                ruby: "<ruby>揺<rt>ゆ</rt></ruby>れがおさまるまで、ここで<ruby>待<rt>ま</rt></ruby>ちましょう。",
                romaji: "Yure ga osamaru made, koko de machimashō."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "避難場所はどこですか。",
                target: "ひなんばしょはどこですか",
                ruby: "<ruby>避難場所<rt>ひなんばしょ</rt></ruby>はどこですか。",
                romaji: "Hinan basho wa doko desu ka."
            },
            {
                label: "話者A",
                key: "helper",
                name: "近くの人",
                line: "揺れがおさまったら、学校の運動場へ移動します。",
                target: "ゆれがおさまったら がっこうのうんどうじょうへいどうします",
                ruby: "<ruby>揺<rt>ゆ</rt></ruby>れがおさまったら、<ruby>学校<rt>がっこう</rt></ruby>の<ruby>運動場<rt>うんどうじょう</rt></ruby>へ<ruby>移動<rt>いどう</rt></ruby>します。",
                romaji: "Yure ga osamattara, gakkō no undōjō e idō shimasu."
            }
        ],
        {
            ja: ["近くの人：地震です。まず机の下に入ってください。", "助けを求める人：外へ出た方がいいですか。", "近くの人：揺れがおさまるまで、ここで待ちましょう。", "助けを求める人：避難場所はどこですか。", "近くの人：揺れがおさまったら、学校の運動場へ移動します。"],
            en: ["Nearby Person: It is an earthquake. First, get under the desk.", "Person Asking for Help: Should I go outside?", "Nearby Person: Let’s wait here until the shaking stops.", "Person Asking for Help: Where is the evacuation place?", "Nearby Person: After the shaking stops, we will move to the school playground."],
            "zh-CN": ["附近的人：地震了。请先躲到桌子下面。", "求助的人：我应该到外面去吗？", "附近的人：在摇晃停止之前，在这里等。", "求助的人：避难场所在哪里？", "附近的人：摇晃停止后，我们去学校操场。"],
            "zh-TW": ["附近的人：地震了。請先躲到桌子下面。", "求助的人：我應該到外面去嗎？", "附近的人：在搖晃停止之前，在這裡等。", "求助的人：避難場所在哪裡？", "附近的人：搖晃停止後，我們去學校操場。"],
            ko: ["주변 사람: 지진입니다. 먼저 책상 아래로 들어가 주세요.", "도움을 요청하는 사람: 밖으로 나가는 것이 좋나요?", "주변 사람: 흔들림이 멈출 때까지 여기서 기다립시다.", "도움을 요청하는 사람: 대피 장소는 어디인가요?", "주변 사람: 흔들림이 멈추면 학교 운동장으로 이동합니다."],
            vi: ["Người ở gần: Có động đất. Trước hết, hãy chui xuống dưới bàn.", "Người cần giúp đỡ: Tôi có nên ra ngoài không?", "Người ở gần: Hãy đợi ở đây cho đến khi hết rung.", "Người cần giúp đỡ: Nơi sơ tán ở đâu?", "Người ở gần: Khi hết rung, chúng ta sẽ di chuyển đến sân trường."],
            tl: ["Taong malapit: Lindol po. Pumasok muna po kayo sa ilalim ng mesa.", "Taong humihingi ng tulong: Dapat po ba akong lumabas?", "Taong malapit: Maghintay po tayo rito hanggang tumigil ang pagyanig.", "Taong humihingi ng tulong: Saan po ang evacuation place?", "Taong malapit: Kapag tumigil ang pagyanig, lilipat po tayo sa school playground."],
            id: ["Orang sekitar: Gempa. Pertama, masuklah ke bawah meja.", "Orang yang meminta bantuan: Apakah sebaiknya saya keluar?", "Orang sekitar: Mari menunggu di sini sampai guncangan berhenti.", "Orang yang meminta bantuan: Di mana tempat evakuasi?", "Orang sekitar: Setelah guncangan berhenti, kita akan pindah ke lapangan sekolah."],
            th: ["คนใกล้ตัว: แผ่นดินไหวค่ะ/ครับ ก่อนอื่นเข้าใต้โต๊ะค่ะ/ครับ", "ผู้ขอความช่วยเหลือ: ควรออกไปข้างนอกไหมคะ/ครับ", "คนใกล้ตัว: รอที่นี่จนกว่าแรงสั่นจะหยุดค่ะ/ครับ", "ผู้ขอความช่วยเหลือ: สถานที่避難อยู่ที่ไหนคะ/ครับ", "คนใกล้ตัว: หลังแรงสั่นหยุด จะย้ายไปสนามโรงเรียนค่ะ/ครับ"],
            my: ["အနီးရှိလူ: မြေငလျင်ပါ။ ပထမဆုံး စားပွဲအောက်ကို ဝင်ပါ။", "အကူအညီတောင်းသူ: အပြင်ထွက်သင့်ပါသလား။", "အနီးရှိလူ: လှုပ်တာရပ်တဲ့အထိ ဒီမှာ စောင့်ရအောင်။", "အကူအညီတောင်းသူ: ရှောင်တိမ်းရာနေရာက ဘယ်မှာပါလဲ။", "အနီးရှိလူ: လှုပ်တာရပ်ရင် ကျောင်းကစားကွင်းကို ရွှေ့ပါမယ်။"],
            km: ["មនុស្សនៅក្បែរ: មានរញ្ជួយដី។ ជាមុនសិន សូមចូលក្រោមតុ។", "អ្នកសុំជំនួយ: តើខ្ញុំគួរចេញទៅក្រៅទេ?", "មនុស្សនៅក្បែរ: សូមរង់ចាំនៅទីនេះរហូតដល់ការរញ្ជួយឈប់។", "អ្នកសុំជំនួយ: តើទីកន្លែងជ避難នៅឯណា?", "មនុស្សនៅក្បែរ: បន្ទាប់ពីការរញ្ជួយឈប់ យើងនឹងផ្លាស់ទៅទីលានកីឡារបស់សាលា។"],
            ne: ["नजिकको व्यक्ति: भूकम्प हो। पहिले टेबुलमुनि जानुहोस्।", "मद्दत माग्ने व्यक्ति: बाहिर जानु राम्रो हो?", "नजिकको व्यक्ति: हल्लिन रोकिएसम्म यहाँ पर्खौं।", "मद्दत माग्ने व्यक्ति:避難 स्थान कहाँ छ?", "नजिकको व्यक्ति: हल्लिन रोकिएपछि स्कूलको खेलमैदानतर्फ सर्छौं।"],
            mn: ["Ойр байгаа хүн: Газар хөдөлж байна. Эхлээд ширээн доор орно уу.", "Тусламж хүсэж буй хүн: Гадагш гарсан нь дээр үү?", "Ойр байгаа хүн: Чичиргээ зогстол энд хүлээе.", "Тусламж хүсэж буй хүн: Нүүлгэн шилжих газар хаана вэ?", "Ойр байгаа хүн: Чичиргээ зогсвол сургуулийн спортын талбай руу шилжинэ."],
            si: ["ළඟ සිටින පුද්ගලයා: භූමිකම්පාවක්. පළමුව මේසය යටට යන්න.", "උදව් ඉල්ලන පුද්ගලයා: පිටතට යන්න හොඳද?", "ළඟ සිටින පුද්ගලයා: කම්පනය නවතින තුරු මෙතැන ඉඳිමු.", "උදව් ඉල්ලන පුද්ගලයා: evacuation place එක කොහෙද?", "ළඟ සිටින පුද්ගලයා: කම්පනය නවතින විට school playground එකට යමු."],
            bn: ["কাছের মানুষ: ভূমিকম্প হচ্ছে। আগে টেবিলের নিচে যান।", "সাহায্য চাইছে যে ব্যক্তি: বাইরে যাওয়া কি ভালো?", "কাছের মানুষ: কাঁপুনি থামা পর্যন্ত এখানে অপেক্ষা করি।", "সাহায্য চাইছে যে ব্যক্তি: evacuation place কোথায়?", "কাছের মানুষ: কাঁপুনি থামলে স্কুলের মাঠে যাব।"],
            pt: ["Pessoa próxima: É um terremoto. Primeiro, entre debaixo da mesa.", "Pessoa pedindo ajuda: Devo sair?", "Pessoa próxima: Vamos esperar aqui até o tremor parar.", "Pessoa pedindo ajuda: Onde é o local de evacuação?", "Pessoa próxima: Depois que o tremor parar, iremos para o campo da escola."],
            es: ["Persona cercana: Es un terremoto. Primero, métase debajo del escritorio.", "Persona que pide ayuda: ¿Debería salir afuera?", "Persona cercana: Esperemos aquí hasta que pare el temblor.", "Persona que pide ayuda: ¿Dónde está el lugar de evacuación?", "Persona cercana: Cuando pare el temblor, iremos al patio de la escuela."],
            fr: ["Personne proche : C’est un tremblement de terre. Mettez-vous d’abord sous la table.", "Personne demandant de l’aide : Dois-je sortir dehors ?", "Personne proche : Attendons ici jusqu’à ce que les secousses s’arrêtent.", "Personne demandant de l’aide : Où est le lieu d’évacuation ?", "Personne proche : Quand les secousses s’arrêteront, nous irons au terrain de l’école."],
            ru: ["Человек рядом: Землетрясение. Сначала спрячьтесь под стол.", "Человек, просящий помощи: Лучше выйти наружу?", "Человек рядом: Подождём здесь, пока тряска не закончится.", "Человек, просящий помощи: Где место эвакуации?", "Человек рядом: Когда тряска закончится, перейдём на школьную площадку."],
            uk: ["Людина поруч: Землетрус. Спочатку сховайтеся під стіл.", "Людина, яка просить допомоги: Краще вийти назовні?", "Людина поруч: Почекаймо тут, доки трясіння не припиниться.", "Людина, яка просить допомоги: Де місце евакуації?", "Людина поруч: Коли трясіння припиниться, перейдемо на шкільний майданчик."]
        }
    ),

    makeA2EmergencyHelpDialogue(
        "a2_emergency_007",
        "急に気分が悪くなる",
        [
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "急に気分が悪くなりました。",
                target: "きゅうにきぶんがわるくなりました",
                ruby: "<ruby>急<rt>きゅう</rt></ruby>に<ruby>気分<rt>きぶん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くなりました。",
                romaji: "Kyū ni kibun ga waruku narimashita."
            },
            {
                label: "話者A",
                key: "helper",
                name: "近くの人",
                line: "こちらに座ってください。めまいがありますか。",
                target: "こちらにすわってください めまいがありますか",
                ruby: "こちらに<ruby>座<rt>すわ</rt></ruby>ってください。めまいがありますか。",
                romaji: "Kochira ni suwatte kudasai. Memai ga arimasu ka."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "はい、少しふらふらします。",
                target: "はい すこしふらふらします",
                ruby: "はい、<ruby>少<rt>すこ</rt></ruby>しふらふらします。",
                romaji: "Hai, sukoshi furafura shimasu."
            },
            {
                label: "話者A",
                key: "helper",
                name: "近くの人",
                line: "水は飲めますか。救急車を呼びますか。",
                target: "みずはのめますか きゅうきゅうしゃをよびますか",
                ruby: "<ruby>水<rt>みず</rt></ruby>は<ruby>飲<rt>の</rt></ruby>めますか。<ruby>救急車<rt>きゅうきゅうしゃ</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>びますか。",
                romaji: "Mizu wa nomemasu ka. Kyūkyūsha o yobimasu ka."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "少し休んでもよくならなければ、お願いします。",
                target: "すこしやすんでもよくならなければ おねがいします",
                ruby: "<ruby>少<rt>すこ</rt></ruby>し<ruby>休<rt>やす</rt></ruby>んでもよくならなければ、お<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Sukoshi yasunde mo yoku naranakereba, onegai shimasu."
            }
        ],
        {
            ja: ["助けを求める人：急に気分が悪くなりました。", "近くの人：こちらに座ってください。めまいがありますか。", "助けを求める人：はい、少しふらふらします。", "近くの人：水は飲めますか。救急車を呼びますか。", "助けを求める人：少し休んでもよくならなければ、お願いします。"],
            en: ["Person Asking for Help: I suddenly feel sick.", "Nearby Person: Please sit here. Do you feel dizzy?", "Person Asking for Help: Yes, I feel a little unsteady.", "Nearby Person: Can you drink water? Should I call an ambulance?", "Person Asking for Help: If I do not feel better after resting a little, please do."],
            "zh-CN": ["求助的人：我突然觉得不舒服。", "附近的人：请坐在这里。头晕吗？", "求助的人：是的，有点晕。", "附近的人：能喝水吗？要叫救护车吗？", "求助的人：如果休息一下还没有好转，就麻烦您。"],
            "zh-TW": ["求助的人：我突然覺得不舒服。", "附近的人：請坐在這裡。頭暈嗎？", "求助的人：是的，有點暈。", "附近的人：能喝水嗎？要叫救護車嗎？", "求助的人：如果休息一下還沒有好轉，就麻煩您。"],
            ko: ["도움을 요청하는 사람: 갑자기 기분이 나빠졌습니다.", "주변 사람: 여기에 앉아 주세요. 어지러움이 있나요?", "도움을 요청하는 사람: 네, 조금 어질어질합니다.", "주변 사람: 물은 마실 수 있나요? 구급차를 부를까요?", "도움을 요청하는 사람: 조금 쉬어도 나아지지 않으면 부탁드립니다."],
            vi: ["Người cần giúp đỡ: Tôi đột nhiên thấy không khỏe.", "Người ở gần: Hãy ngồi ở đây. Bạn có chóng mặt không?", "Người cần giúp đỡ: Vâng, tôi hơi choáng.", "Người ở gần: Bạn có uống nước được không? Tôi gọi xe cứu thương nhé?", "Người cần giúp đỡ: Nếu nghỉ một chút mà không đỡ, xin hãy gọi giúp."],
            tl: ["Taong humihingi ng tulong: Bigla po akong sumama ang pakiramdam.", "Taong malapit: Dito po kayo umupo. Nahihilo po ba kayo?", "Taong humihingi ng tulong: Opo, medyo nahihilo po.", "Taong malapit: Kaya po ba ninyong uminom ng tubig? Tatawag po ba ako ng ambulansya?", "Taong humihingi ng tulong: Kung hindi po bumuti pagkatapos magpahinga, pakiusap po."],
            id: ["Orang yang meminta bantuan: Tiba-tiba saya merasa tidak enak badan.", "Orang sekitar: Silakan duduk di sini. Apakah merasa pusing?", "Orang yang meminta bantuan: Ya, sedikit goyah.", "Orang sekitar: Bisa minum air? Haruskah saya memanggil ambulans?", "Orang yang meminta bantuan: Jika setelah istirahat sebentar tidak membaik, tolong panggilkan."],
            th: ["ผู้ขอความช่วยเหลือ: จู่ ๆ รู้สึกไม่สบายค่ะ/ครับ", "คนใกล้ตัว: กรุณานั่งตรงนี้ค่ะ/ครับ เวียนหัวไหมคะ/ครับ", "ผู้ขอความช่วยเหลือ: ค่ะ/ครับ รู้สึกมึน ๆ นิดหน่อยค่ะ/ครับ", "คนใกล้ตัว: ดื่มน้ำได้ไหมคะ/ครับ จะเรียกรถพยาบาลไหมคะ/ครับ", "ผู้ขอความช่วยเหลือ: ถ้าพักสักหน่อยแล้วยังไม่ดีขึ้น รบกวนด้วยค่ะ/ครับ"],
            my: ["အကူအညီတောင်းသူ: ရုတ်တရက် နေမကောင်းဖြစ်လာပါတယ်။", "အနီးရှိလူ: ဒီမှာ ထိုင်ပါ။ မူးဝေပါသလား။", "အကူအညီတောင်းသူ: ဟုတ်ကဲ့၊ နည်းနည်းမူးနေပါတယ်။", "အနီးရှိလူ: ရေသောက်နိုင်ပါသလား။ ambulance ခေါ်မလား။", "အကူအညီတောင်းသူ: နည်းနည်းနားပြီး မကောင်းသေးရင် ခေါ်ပေးပါ။"],
            km: ["អ្នកសុំជំនួយ: ខ្ញុំមានអារម្មណ៍មិនស្រួលភ្លាមៗ។", "មនុស្សនៅក្បែរ: សូមអង្គុយទីនេះ។ តើវិលមុខទេ?", "អ្នកសុំជំនួយ: បាទ/ចាស វិលមុខបន្តិច។", "មនុស្សនៅក្បែរ: តើផឹកទឹកបានទេ? តើត្រូវហៅរថយន្តសង្គ្រោះទេ?", "អ្នកសុំជំនួយ: បើសម្រាកបន្តិចហើយមិនប្រសើរឡើង សូមហៅជួយ។"],
            ne: ["मद्दत माग्ने व्यक्ति: अचानक अस्वस्थ भएँ।", "नजिकको व्यक्ति: यहाँ बस्नुहोस्। चक्कर लागेको छ?", "मद्दत माग्ने व्यक्ति: हो, अलि चक्कर जस्तो छ।", "नजिकको व्यक्ति: पानी पिउन सक्नुहुन्छ? ambulance बोलाउने?", "मद्दत माग्ने व्यक्ति: अलि आराम गर्दा पनि राम्रो भएन भने कृपया बोलाउनुहोस्।"],
            mn: ["Тусламж хүсэж буй хүн: Гэнэт бие эвгүй боллоо.", "Ойр байгаа хүн: Энд сууна уу. Толгой эргэж байна уу?", "Тусламж хүсэж буй хүн: Тийм, жаахан дайвалзаж байна.", "Ойр байгаа хүн: Ус ууж чадах уу? Түргэн тусламж дуудах уу?", "Тусламж хүсэж буй хүн: Жаахан амраад дээрдэхгүй бол дуудна уу."],
            si: ["උදව් ඉල්ලන පුද්ගලයා: හදිසියේම අසනීප වගේ දැනුණා.", "ළඟ සිටින පුද්ගලයා: මෙතැන වාඩි වෙන්න. dizziness තියෙනවද?", "උදව් ඉල්ලන පුද්ගලයා: ඔව්, ටිකක් මත් වගේ.", "ළඟ සිටින පුද්ගලයා: වතුර බොන්න පුළුවන්ද? ambulance එකක් call කරන්නද?", "උදව් ඉල්ලන පුද්ගලයා: ටිකක් විවේක ගත්තත් හොඳ නැත්නම්, කරුණාකර කරන්න."],
            bn: ["সাহায্য চাইছে যে ব্যক্তি: হঠাৎ অসুস্থ লাগছে।", "কাছের মানুষ: এখানে বসুন। মাথা ঘুরছে?", "সাহায্য চাইছে যে ব্যক্তি: হ্যাঁ, একটু টলমল লাগছে।", "কাছের মানুষ: পানি খেতে পারবেন? ambulance ডাকব?", "সাহায্য চাইছে যে ব্যক্তি: একটু বিশ্রাম নিয়েও ভালো না হলে, অনুগ্রহ করে ডাকুন।"],
            pt: ["Pessoa pedindo ajuda: De repente me senti mal.", "Pessoa próxima: Sente-se aqui. Está com tontura?", "Pessoa pedindo ajuda: Sim, estou um pouco tonto.", "Pessoa próxima: Consegue beber água? Devo chamar uma ambulância?", "Pessoa pedindo ajuda: Se eu não melhorar depois de descansar um pouco, por favor, chame."],
            es: ["Persona que pide ayuda: De repente me siento mal.", "Persona cercana: Siéntese aquí. ¿Tiene mareo?", "Persona que pide ayuda: Sí, me siento un poco inestable.", "Persona cercana: ¿Puede beber agua? ¿Llamo a una ambulancia?", "Persona que pide ayuda: Si no mejoro después de descansar un poco, por favor llámela."],
            fr: ["Personne demandant de l’aide : Je me sens mal soudainement.", "Personne proche : Asseyez-vous ici. Avez-vous des vertiges ?", "Personne demandant de l’aide : Oui, je me sens un peu étourdi.", "Personne proche : Pouvez-vous boire de l’eau ? Dois-je appeler une ambulance ?", "Personne demandant de l’aide : Si je ne vais pas mieux après un peu de repos, appelez-la, s’il vous plaît."],
            ru: ["Человек, просящий помощи: Мне внезапно стало плохо.", "Человек рядом: Сядьте здесь. У вас кружится голова?", "Человек, просящий помощи: Да, немного кружится.", "Человек рядом: Можете пить воду? Вызвать скорую?", "Человек, просящий помощи: Если после небольшого отдыха не станет лучше, пожалуйста, вызовите."],
            uk: ["Людина, яка просить допомоги: Мені раптом стало погано.", "Людина поруч: Сядьте тут. У вас паморочиться голова?", "Людина, яка просить допомоги: Так, трохи паморочиться.", "Людина поруч: Можете пити воду? Викликати швидку?", "Людина, яка просить допомоги: Якщо після невеликого відпочинку не стане краще, будь ласка, викличте."]
        }
    ),

    makeA2EmergencyHelpDialogue(
        "a2_emergency_008",
        "日本語で説明できないとき",
        [
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "日本語でうまく説明できません。",
                target: "にほんごでうまくせつめいできません",
                ruby: "<ruby>日本語<rt>にほんご</rt></ruby>でうまく<ruby>説明<rt>せつめい</rt></ruby>できません。",
                romaji: "Nihongo de umaku setsumei dekimasen."
            },
            {
                label: "話者A",
                key: "helper",
                name: "近くの人",
                line: "大丈夫です。ゆっくりでいいです。",
                target: "だいじょうぶです ゆっくりでいいです",
                ruby: "<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。ゆっくりでいいです。",
                romaji: "Daijōbu desu. Yukkuri de ii desu."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "翻訳アプリを使ってもいいですか。",
                target: "ほんやくあぷりをつかってもいいですか",
                ruby: "<ruby>翻訳<rt>ほんやく</rt></ruby>アプリを<ruby>使<rt>つか</rt></ruby>ってもいいですか。",
                romaji: "Hon'yaku apuri o tsukatte mo ii desu ka."
            },
            {
                label: "話者A",
                key: "helper",
                name: "近くの人",
                line: "もちろんです。緊急連絡先はありますか。",
                target: "もちろんです きんきゅうれんらくさきはありますか",
                ruby: "もちろんです。<ruby>緊急連絡先<rt>きんきゅうれんらくさき</rt></ruby>はありますか。",
                romaji: "Mochiron desu. Kinkyū renrakusaki wa arimasu ka."
            },
            {
                label: "話者B",
                key: "caller",
                name: "助けを求める人",
                line: "スマホに入っています。見せます。",
                target: "すまほにはいっています みせます",
                ruby: "スマホに<ruby>入<rt>はい</rt></ruby>っています。<ruby>見<rt>み</rt></ruby>せます。",
                romaji: "Sumaho ni haitte imasu. Misemasu."
            }
        ],
        {
            ja: ["助けを求める人：日本語でうまく説明できません。", "近くの人：大丈夫です。ゆっくりでいいです。", "助けを求める人：翻訳アプリを使ってもいいですか。", "近くの人：もちろんです。緊急連絡先はありますか。", "助けを求める人：スマホに入っています。見せます。"],
            en: ["Person Asking for Help: I cannot explain it well in Japanese.", "Nearby Person: It is okay. Slowly is fine.", "Person Asking for Help: May I use a translation app?", "Nearby Person: Of course. Do you have an emergency contact?", "Person Asking for Help: It is in my smartphone. I will show you."],
            "zh-CN": ["求助的人：我不能用日语很好地说明。", "附近的人：没关系。慢慢说就可以。", "求助的人：可以使用翻译软件吗？", "附近的人：当然。您有紧急联系人吗？", "求助的人：在手机里。我给您看。"],
            "zh-TW": ["求助的人：我不能用日語很好地說明。", "附近的人：沒關係。慢慢說就可以。", "求助的人：可以使用翻譯軟體嗎？", "附近的人：當然。您有緊急聯絡人嗎？", "求助的人：在手機裡。我給您看。"],
            ko: ["도움을 요청하는 사람: 일본어로 잘 설명할 수 없습니다.", "주변 사람: 괜찮습니다. 천천히 해도 됩니다.", "도움을 요청하는 사람: 번역 앱을 사용해도 되나요?", "주변 사람: 물론입니다. 긴급 연락처가 있나요?", "도움을 요청하는 사람: 스마트폰에 들어 있습니다. 보여 드리겠습니다."],
            vi: ["Người cần giúp đỡ: Tôi không thể giải thích tốt bằng tiếng Nhật.", "Người ở gần: Không sao. Nói chậm cũng được.", "Người cần giúp đỡ: Tôi có thể dùng ứng dụng dịch không?", "Người ở gần: Tất nhiên. Bạn có liên hệ khẩn cấp không?", "Người cần giúp đỡ: Có trong điện thoại. Tôi sẽ cho xem."],
            tl: ["Taong humihingi ng tulong: Hindi ko po maipaliwanag nang maayos sa Japanese.", "Taong malapit: Okay lang po. Dahan-dahan lang po.", "Taong humihingi ng tulong: Pwede po bang gumamit ng translation app?", "Taong malapit: Siyempre po. May emergency contact po ba kayo?", "Taong humihingi ng tulong: Nasa smartphone ko po. Ipapakita ko po."],
            id: ["Orang yang meminta bantuan: Saya tidak bisa menjelaskan dengan baik dalam bahasa Jepang.", "Orang sekitar: Tidak apa-apa. Pelan-pelan saja.", "Orang yang meminta bantuan: Bolehkah saya menggunakan aplikasi terjemahan?", "Orang sekitar: Tentu. Apakah ada kontak darurat?", "Orang yang meminta bantuan: Ada di smartphone saya. Saya akan menunjukkannya."],
            th: ["ผู้ขอความช่วยเหลือ: อธิบายเป็นภาษาญี่ปุ่นได้ไม่ดีค่ะ/ครับ", "คนใกล้ตัว: ไม่เป็นไรค่ะ/ครับ ช้า ๆ ก็ได้ค่ะ/ครับ", "ผู้ขอความช่วยเหลือ: ใช้แอปแปลภาษาได้ไหมคะ/ครับ", "คนใกล้ตัว: ได้แน่นอนค่ะ/ครับ มีเบอร์ติดต่อฉุกเฉินไหมคะ/ครับ", "ผู้ขอความช่วยเหลือ: อยู่ในสมาร์ตโฟนค่ะ/ครับ จะให้ดูค่ะ/ครับ"],
            my: ["အကူအညီတောင်းသူ: ဂျပန်စကားနဲ့ ကောင်းကောင်းမရှင်းပြနိုင်ပါဘူး။", "အနီးရှိလူ: ရပါတယ်။ ဖြည်းဖြည်းပြောလည်း ရပါတယ်။", "အကူအညီတောင်းသူ: translation app သုံးလို့ရပါသလား။", "အနီးရှိလူ: ရပါတယ်။ emergency contact ရှိပါသလား။", "အကူအညီတောင်းသူ: smartphone ထဲမှာ ရှိပါတယ်။ ပြပါမယ်။"],
            km: ["អ្នកសុំជំនួយ: ខ្ញុំមិនអាចពន្យល់ជាភាសាជប៉ុនបានល្អទេ។", "មនុស្សនៅក្បែរ: មិនអីទេ។ និយាយយឺតៗក៏បាន។", "អ្នកសុំជំនួយ: តើអាចប្រើកម្មវិធីបកប្រែបានទេ?", "មនុស្សនៅក្បែរ: បានជាក់ជាមិនខាន។ តើមានលេខទំនាក់ទំនងបន្ទាន់ទេ?", "អ្នកសុំជំនួយ: មាននៅក្នុងស្មាតហ្វូន។ ខ្ញុំនឹងបង្ហាញ។"],
            ne: ["मद्दत माग्ने व्यक्ति: जापानीमा राम्रोसँग説明 गर्न सक्दिनँ।", "नजिकको व्यक्ति: ठीक छ। बिस्तारै भए पनि हुन्छ।", "मद्दत माग्ने व्यक्ति: translation app प्रयोग गर्न मिल्छ?", "नजिकको व्यक्ति: अवश्य। emergency contact छ?", "मद्दत माग्ने व्यक्ति: smartphone मा छ। देखाउँछु।"],
            mn: ["Тусламж хүсэж буй хүн: Япон хэлээр сайн тайлбарлаж чадахгүй байна.", "Ойр байгаа хүн: Зүгээр. Удаан хэлсэн ч болно.", "Тусламж хүсэж буй хүн: Орчуулгын апп ашиглаж болох уу?", "Ойр байгаа хүн: Мэдээж. Яаралтай холбоо барих хүн байна уу?", "Тусламж хүсэж буй хүн: Утсанд байгаа. Харуулъя."],
            si: ["උදව් ඉල්ලන පුද්ගලයා: Japanese වලින් හොඳට පැහැදිලි කරන්න බැහැ.", "ළඟ සිටින පුද්ගලයා: කමක් නැහැ. හෙමින් කියන්න.", "උදව් ඉල්ලන පුද්ගලයා: translation app එකක් භාවිතා කරන්න පුළුවන්ද?", "ළඟ සිටින පුද්ගලයා: අනිවාර්යයෙන්. emergency contact එකක් තියෙනවද?", "උදව් ඉල්ලන පුද්ගලයා: smartphone එකේ තියෙනවා. පෙන්වන්නම්."],
            bn: ["সাহায্য চাইছে যে ব্যক্তি: জাপানিতে ভালোভাবে ব্যাখ্যা করতে পারছি না।", "কাছের মানুষ: সমস্যা নেই। ধীরে বললেই হবে।", "সাহায্য চাইছে যে ব্যক্তি: translation app ব্যবহার করতে পারি?", "কাছের মানুষ: অবশ্যই। emergency contact আছে?", "সাহায্য চাইছে যে ব্যক্তি: smartphone-এ আছে। দেখাচ্ছি।"],
            pt: ["Pessoa pedindo ajuda: Não consigo explicar bem em japonês.", "Pessoa próxima: Tudo bem. Pode falar devagar.", "Pessoa pedindo ajuda: Posso usar um aplicativo de tradução?", "Pessoa próxima: Claro. Você tem um contato de emergência?", "Pessoa pedindo ajuda: Está no meu smartphone. Vou mostrar."],
            es: ["Persona que pide ayuda: No puedo explicarlo bien en japonés.", "Persona cercana: Está bien. Puede hablar despacio.", "Persona que pide ayuda: ¿Puedo usar una aplicación de traducción?", "Persona cercana: Por supuesto. ¿Tiene un contacto de emergencia?", "Persona que pide ayuda: Está en mi smartphone. Se lo mostraré."],
            fr: ["Personne demandant de l’aide : Je ne peux pas bien expliquer en japonais.", "Personne proche : Ce n’est pas grave. Vous pouvez parler lentement.", "Personne demandant de l’aide : Puis-je utiliser une application de traduction ?", "Personne proche : Bien sûr. Avez-vous un contact d’urgence ?", "Personne demandant de l’aide : Il est dans mon smartphone. Je vais vous le montrer."],
            ru: ["Человек, просящий помощи: Я не могу хорошо объяснить по-японски.", "Человек рядом: Ничего страшного. Можно медленно.", "Человек, просящий помощи: Можно использовать приложение-переводчик?", "Человек рядом: Конечно. У вас есть экстренный контакт?", "Человек, просящий помощи: Он в смартфоне. Я покажу."],
            uk: ["Людина, яка просить допомоги: Я не можу добре пояснити японською.", "Людина поруч: Нічого страшного. Можна повільно.", "Людина, яка просить допомоги: Можна використати застосунок-перекладач?", "Людина поруч: Звичайно. У вас є екстрений контакт?", "Людина, яка просить допомоги: Він у смартфоні. Я покажу."]
        }
    )

];