// =====================================================
// Japeak A2 Level
// Scene: 場面に応じたあいさつをしよう
// Category Key: a2_greetings_by_situation
// =====================================================

const a2GreetingsBySituationContext = {
    ja: "職場、近所、電話、休み明け、退勤時など、場面に応じた自然なあいさつを練習します。",
    en: "Practice natural greetings for different situations, such as the workplace, neighbors, phone calls, returning after absence, and leaving work.",
    "zh-CN": "练习在职场、邻里、电话、休假后和下班时等不同场合使用的自然问候语。",
    "zh-TW": "練習在職場、鄰里、電話、休假後和下班時等不同場合使用的自然問候語。",
    ko: "직장, 이웃, 전화, 결근 후, 퇴근할 때 등 상황에 맞는 자연스러운 인사를 연습합니다.",
    vi: "Luyện các câu chào hỏi tự nhiên theo tình huống như nơi làm việc, hàng xóm, điện thoại, sau khi nghỉ và khi tan làm.",
    tl: "Practice ng natural greetings para sa iba’t ibang sitwasyon tulad ng trabaho, kapitbahay, tawag sa telepono, pagkatapos lumiban, at pag-uwi mula sa trabaho.",
    id: "Latihan salam alami sesuai situasi, seperti di tempat kerja, dengan tetangga, telepon, setelah absen, dan saat pulang kerja.",
    th: "ฝึกการทักทายอย่างเป็นธรรมชาติตามสถานการณ์ เช่น ที่ทำงาน เพื่อนบ้าน โทรศัพท์ หลังจากหยุดงาน และตอนเลิกงาน",
    my: "အလုပ်ခွင်၊ အိမ်နီးချင်း၊ ဖုန်းပြောခြင်း၊ အနားယူပြီး ပြန်လာခြင်းနှင့် အလုပ်ဆင်းချိန်တို့တွင် သင့်လျော်သော နှုတ်ဆက်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ការសួរសុខទុក្ខតាមស្ថានការណ៍ ដូចជា កន្លែងធ្វើការ អ្នកជិតខាង ទូរស័ព្ទ ក្រោយពេលអវត្តមាន និងពេលចេញពីធ្វើការ។",
    ne: "कार्यस्थल, छिमेकी, फोन, अनुपस्थितिपछि फर्कँदा र कामबाट निस्कँदा जस्ता अवस्थामा स्वाभाविक अभिवादन अभ्यास।",
    mn: "Ажлын байр, хөрш, утасны яриа, амарсны дараа буцаж ирэх, ажлаас тарах зэрэг нөхцөлд тохирсон мэндчилгээний дадлага.",
    si: "රැකියා ස්ථානය, අසල්වැසියන්, දුරකථන ඇමතුම්, නොපැමිණීමෙන් පසු සහ වැඩ අවසන් වන විට භාවිතා කරන ස්වාභාවික ආචාර පුහුණුවකි.",
    bn: "কর্মস্থল, প্রতিবেশী, ফোন কল, অনুপস্থিতির পর ফিরে আসা এবং কাজ শেষে বিদায় নেওয়ার মতো পরিস্থিতিতে স্বাভাবিক সম্ভাষণ অনুশীলন।",
    pt: "Prática de cumprimentos naturais para diferentes situações, como trabalho, vizinhos, telefonemas, retorno após ausência e saída do trabalho.",
    es: "Práctica de saludos naturales para diferentes situaciones, como el trabajo, vecinos, llamadas telefónicas, regreso tras una ausencia y salida del trabajo.",
    fr: "Entraînement aux salutations naturelles selon les situations : travail, voisins, téléphone, retour après absence et départ du travail.",
    ru: "Практика естественных приветствий в разных ситуациях: на работе, с соседями, по телефону, после отсутствия и при уходе с работы.",
    uk: "Практика природних привітань у різних ситуаціях: на роботі, із сусідами, телефоном, після відсутності та під час виходу з роботи."
};

const a2GreetingsBySituationSpeakerNames = {
    self: {
        ja: "自分", en: "Me", "zh-CN": "自己", "zh-TW": "自己", ko: "나",
        vi: "Tôi", tl: "Ako", id: "Saya", th: "ฉัน/ผม",
        my: "မိမိ", km: "ខ្ញុំ", ne: "म", mn: "Би",
        si: "මම", bn: "আমি", pt: "Eu", es: "Yo",
        fr: "Moi", ru: "Я", uk: "Я"
    },
    other: {
        ja: "相手", en: "Other Person", "zh-CN": "对方", "zh-TW": "對方", ko: "상대방",
        vi: "Người kia", tl: "Kausap", id: "Lawan bicara", th: "อีกฝ่าย",
        my: "တစ်ဖက်လူ", km: "អ្នកម្ខាងទៀត", ne: "अर्को व्यक्ति", mn: "Нөгөө хүн",
        si: "අනෙක් පුද්ගලයා", bn: "অন্য ব্যক্তি", pt: "Outra pessoa", es: "Otra persona",
        fr: "Autre personne", ru: "Другой человек", uk: "Інша людина"
    }
};

function makeA2GreetingsBySituationDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_greetings_by_situation",
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
            speakerNames: a2GreetingsBySituationSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2GreetingsBySituationContext,
        translations,
        dialogueTranslations
    };
}

const japeakA2GreetingsBySituationData = [

    makeA2GreetingsBySituationDialogue(
        "a2_greeting_001",
        "初めて職場であいさつする",
        [
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "本日からこちらで働く中村です。",
                target: "ほんじつからこちらではたらくなかむらです",
                ruby: "<ruby>本日<rt>ほんじつ</rt></ruby>からこちらで<ruby>働<rt>はたら</rt></ruby>く<ruby>中村<rt>なかむら</rt></ruby>です。",
                romaji: "Honjitsu kara kochira de hataraku Nakamura desu."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "佐藤です。これから一緒に働きますね。",
                target: "さとうです これからいっしょにはたらきますね",
                ruby: "<ruby>佐藤<rt>さとう</rt></ruby>です。これから<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>働<rt>はたら</rt></ruby>きますね。",
                romaji: "Satō desu. Kore kara issho ni hatarakimasu ne."
            },
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "まだ慣れないことが多いですが、よろしくお願いいたします。",
                target: "まだなれないことがおおいですが よろしくおねがいいたします",
                ruby: "まだ<ruby>慣<rt>な</rt></ruby>れないことが<ruby>多<rt>おお</rt></ruby>いですが、よろしくお<ruby>願<rt>ねが</rt></ruby>いいたします。",
                romaji: "Mada narenai koto ga ōi desu ga, yoroshiku onegai itashimasu."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "困ったときは遠慮なく声をかけてください。",
                target: "こまったときはえんりょなくこえをかけてください",
                ruby: "<ruby>困<rt>こま</rt></ruby>ったときは<ruby>遠慮<rt>えんりょ</rt></ruby>なく<ruby>声<rt>こえ</rt></ruby>をかけてください。",
                romaji: "Komatta toki wa enryo naku koe o kakete kudasai."
            }
        ],
        {
            ja: ["自分：本日からこちらで働く中村です。", "相手：佐藤です。これから一緒に働きますね。", "自分：まだ慣れないことが多いですが、よろしくお願いいたします。", "相手：困ったときは遠慮なく声をかけてください。"],
            en: ["Me: I am Nakamura, and I will start working here today.", "Other Person: I am Sato. We will be working together from now on.", "Me: There are still many things I am not used to, but I look forward to working with you.", "Other Person: If you have any trouble, please feel free to ask me."],
            "zh-CN": ["自己：我是中村，从今天开始在这里工作。", "对方：我是佐藤。今后我们一起工作。", "自己：还有很多不习惯的地方，请多多关照。", "对方：遇到困难时，请不要客气，随时问我。"],
            "zh-TW": ["自己：我是中村，從今天開始在這裡工作。", "對方：我是佐藤。今後我們一起工作。", "自己：還有很多不習慣的地方，請多多關照。", "對方：遇到困難時，請不要客氣，隨時問我。"],
            ko: ["나: 오늘부터 이곳에서 일하게 된 나카무라입니다.", "상대방: 사토입니다. 앞으로 함께 일하게 되겠네요.", "나: 아직 익숙하지 않은 것이 많지만 잘 부탁드립니다.", "상대방: 어려운 일이 있으면 부담 갖지 말고 말씀해 주세요."],
            vi: ["Tôi: Tôi là Nakamura, bắt đầu làm việc ở đây từ hôm nay.", "Người kia: Tôi là Sato. Từ nay chúng ta sẽ làm việc cùng nhau.", "Tôi: Tôi còn nhiều điều chưa quen, rất mong được giúp đỡ.", "Người kia: Nếu gặp khó khăn, hãy cứ hỏi tôi nhé."],
            tl: ["Ako: Ako po si Nakamura, magsisimula po akong magtrabaho dito ngayong araw.", "Kausap: Ako si Sato. Magtatrabaho tayo nang magkasama mula ngayon.", "Ako: Marami pa po akong hindi sanay, pero ikinalulugod ko pong makatrabaho kayo.", "Kausap: Kapag may problema, huwag pong mahiyang magtanong."],
            id: ["Saya: Saya Nakamura, mulai hari ini bekerja di sini.", "Lawan bicara: Saya Sato. Mulai sekarang kita akan bekerja bersama.", "Saya: Masih banyak hal yang belum saya terbiasa, mohon bantuannya.", "Lawan bicara: Kalau ada masalah, jangan sungkan untuk bertanya."],
            th: ["ฉัน/ผม: ฉัน/ผมชื่อนากามูระ เริ่มทำงานที่นี่ตั้งแต่วันนี้ค่ะ/ครับ", "อีกฝ่าย: ฉัน/ผมชื่อซาโต ต่อจากนี้เราจะทำงานด้วยกันนะคะ/ครับ", "ฉัน/ผม: ยังมีหลายอย่างที่ไม่คุ้นเคย ฝากเนื้อฝากตัวด้วยค่ะ/ครับ", "อีกฝ่าย: ถ้ามีปัญหา อย่าเกรงใจ ถามได้เลยค่ะ/ครับ"],
            my: ["မိမိ: ကျွန်တော်/ကျွန်မက နာကာမူရာပါ။ ဒီနေ့ကစပြီး ဒီမှာ အလုပ်လုပ်ပါမယ်။", "တစ်ဖက်လူ: ကျွန်တော်/ကျွန်မက ဆာတိုပါ။ ဒီနေ့ကစပြီး အတူတူ အလုပ်လုပ်ကြမယ်နော်။", "မိမိ: မကျွမ်းကျင်သေးတဲ့အရာတွေများပေမယ့် ကူညီပေးပါဦး။", "တစ်ဖက်လူ: အခက်အခဲရှိရင် မစိုးရိမ်ဘဲ ပြောပါ။"],
            km: ["ខ្ញុំ: ខ្ញុំឈ្មោះ Nakamura ហើយចាប់ពីថ្ងៃនេះខ្ញុំនឹងធ្វើការនៅទីនេះ។", "អ្នកម្ខាងទៀត: ខ្ញុំឈ្មោះ Sato។ ចាប់ពីពេលនេះ យើងនឹងធ្វើការជាមួយគ្នា។", "ខ្ញុំ: ខ្ញុំនៅមិនទាន់ស៊ាំនឹងរឿងជាច្រើនទេ សូមជួយណែនាំផង។", "អ្នកម្ខាងទៀត: បើមានការលំបាក សូមសួរដោយមិនបាច់ខ្មាស។"],
            ne: ["म: म नाकामुरा हुँ, आजदेखि यहाँ काम गर्छु।", "अर्को व्यक्ति: म सातो हुँ। अबदेखि हामी सँगै काम गर्नेछौं।", "म: अझै धेरै कुरा बानी परेको छैन, कृपया सहयोग गर्नुहोस्।", "अर्को व्यक्ति: समस्या भए नहिचकिचाई बोलाउनुहोस्।"],
            mn: ["Би: Би Накамура. Өнөөдрөөс энд ажиллаж эхэлнэ.", "Нөгөө хүн: Би Сато. Одооноос хамт ажиллана.", "Би: Дасаагүй зүйл олон байгаа ч та бүхэнтэй хамтран ажиллахдаа баяртай байна.", "Нөгөө хүн: Асуудал гарвал санаа зоволгүй хэлээрэй."],
            si: ["මම: මම නකමුරා. අද සිට මෙහි වැඩ කරන්න පටන් ගන්නවා.", "අනෙක් පුද්ගලයා: මම සතෝ. අද සිට අපි එකට වැඩ කරනවා.", "මම: තවම පුරුදු නැති දේවල් ගොඩක් තියෙනවා, කරුණාකර මට සහය දෙන්න.", "අනෙක් පුද්ගලයා: ගැටලුවක් තිබුණොත් බය නැතුව අහන්න."],
            bn: ["আমি: আমি নাকামুরা। আজ থেকে এখানে কাজ শুরু করছি।", "অন্য ব্যক্তি: আমি সাতো। এখন থেকে আমরা একসঙ্গে কাজ করব।", "আমি: এখনও অনেক কিছুতে অভ্যস্ত নই, দয়া করে সহযোগিতা করবেন।", "অন্য ব্যক্তি: কোনো সমস্যা হলে নির্দ্বিধায় বলবেন।"],
            pt: ["Eu: Sou Nakamura e começo a trabalhar aqui hoje.", "Outra pessoa: Sou Sato. Vamos trabalhar juntos a partir de agora.", "Eu: Ainda há muitas coisas com as quais não estou acostumado, mas conto com sua ajuda.", "Outra pessoa: Se tiver algum problema, fique à vontade para me chamar."],
            es: ["Yo: Soy Nakamura y empezaré a trabajar aquí desde hoy.", "Otra persona: Soy Sato. A partir de ahora trabajaremos juntos.", "Yo: Todavía hay muchas cosas a las que no estoy acostumbrado, pero espero contar con su apoyo.", "Otra persona: Si tiene algún problema, no dude en preguntarme."],
            fr: ["Moi : Je suis Nakamura et je commence à travailler ici aujourd’hui.", "Autre personne : Je suis Sato. Nous allons travailler ensemble à partir de maintenant.", "Moi : Il y a encore beaucoup de choses auxquelles je ne suis pas habitué, mais je compte sur votre aide.", "Autre personne : Si vous avez un problème, n’hésitez pas à me demander."],
            ru: ["Я: Я Накамура, с сегодняшнего дня работаю здесь.", "Другой человек: Я Сато. Теперь мы будем работать вместе.", "Я: Я ещё ко многому не привык, но буду рад вашей помощи.", "Другой человек: Если возникнут трудности, не стесняйтесь обращаться."],
            uk: ["Я: Я Накамура, від сьогодні працюю тут.", "Інша людина: Я Сато. Відтепер ми працюватимемо разом.", "Я: Я ще до багато чого не звик, але буду радий вашій допомозі.", "Інша людина: Якщо виникнуть труднощі, не соромтеся звертатися."]
        }
    ),

    makeA2GreetingsBySituationDialogue(
        "a2_greeting_002",
        "到着が遅れたとき",
        [
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "到着が遅くなり、申し訳ありません。",
                target: "とうちゃくがおそくなり もうしわけありません",
                ruby: "<ruby>到着<rt>とうちゃく</rt></ruby>が<ruby>遅<rt>おそ</rt></ruby>くなり、<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありません。",
                romaji: "Tōchaku ga osoku nari, mōshiwake arimasen."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "連絡は確認しました。落ち着いてください。",
                target: "れんらくはかくにんしました おちついてください",
                ruby: "<ruby>連絡<rt>れんらく</rt></ruby>は<ruby>確認<rt>かくにん</rt></ruby>しました。<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いてください。",
                romaji: "Renraku wa kakunin shimashita. Ochitsuite kudasai."
            },
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "すぐに作業に入ります。",
                target: "すぐにさぎょうにはいります",
                ruby: "すぐに<ruby>作業<rt>さぎょう</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ります。",
                romaji: "Sugu ni sagyō ni hairimasu."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "急がなくて大丈夫です。まず準備をしてください。",
                target: "いそがなくてだいじょうぶです まずじゅんびをしてください",
                ruby: "<ruby>急<rt>いそ</rt></ruby>がなくて<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。まず<ruby>準備<rt>じゅんび</rt></ruby>をしてください。",
                romaji: "Isoganakute daijōbu desu. Mazu junbi o shite kudasai."
            }
        ],
        {
            ja: ["自分：到着が遅くなり、申し訳ありません。", "相手：連絡は確認しました。落ち着いてください。", "自分：すぐに作業に入ります。", "相手：急がなくて大丈夫です。まず準備をしてください。"],
            en: ["Me: I am sorry for arriving late.", "Other Person: I checked your message. Please stay calm.", "Me: I will start working right away.", "Other Person: You do not need to rush. Please prepare first."],
            "zh-CN": ["自己：到达晚了，非常抱歉。", "对方：我已经确认了你的联系。请先冷静。", "自己：我马上开始工作。", "对方：不用着急。请先做好准备。"],
            "zh-TW": ["自己：到達晚了，非常抱歉。", "對方：我已經確認了你的聯絡。請先冷靜。", "自己：我馬上開始工作。", "對方：不用著急。請先做好準備。"],
            ko: ["나: 도착이 늦어져서 죄송합니다.", "상대방: 연락은 확인했습니다. 진정하세요.", "나: 바로 작업을 시작하겠습니다.", "상대방: 서두르지 않아도 괜찮습니다. 먼저 준비해 주세요."],
            vi: ["Tôi: Tôi xin lỗi vì đến muộn.", "Người kia: Tôi đã xem tin nhắn của bạn. Hãy bình tĩnh.", "Tôi: Tôi sẽ bắt đầu công việc ngay.", "Người kia: Không cần vội. Trước hết hãy chuẩn bị."],
            tl: ["Ako: Pasensya na po at nahuli ang dating ko.", "Kausap: Nakita ko po ang message ninyo. Kalma lang po.", "Ako: Magsisimula po agad ako sa trabaho.", "Kausap: Hindi kailangan magmadali. Maghanda muna po kayo."],
            id: ["Saya: Mohon maaf karena saya datang terlambat.", "Lawan bicara: Saya sudah memeriksa pesan Anda. Tenang dulu.", "Saya: Saya akan segera mulai bekerja.", "Lawan bicara: Tidak perlu terburu-buru. Silakan bersiap dulu."],
            th: ["ฉัน/ผม: ขออภัยที่มาถึงช้าค่ะ/ครับ", "อีกฝ่าย: ตรวจสอบข้อความแล้วค่ะ/ครับ ใจเย็น ๆ ก่อนนะคะ/ครับ", "ฉัน/ผม: จะเริ่มงานทันทีค่ะ/ครับ", "อีกฝ่าย: ไม่ต้องรีบค่ะ/ครับ เตรียมตัวก่อนนะคะ/ครับ"],
            my: ["မိမိ: နောက်ကျပြီး ရောက်လာလို့ တောင်းပန်ပါတယ်။", "တစ်ဖက်လူ: ဆက်သွယ်ထားတာကို ကြည့်ပြီးပါပြီ။ စိတ်အေးအေးထားပါ။", "မိမိ: ချက်ချင်း အလုပ်စပါမယ်။", "တစ်ဖက်လူ: မလောပါနဲ့။ အရင်ပြင်ဆင်ပါ။"],
            km: ["ខ្ញុំ: សូមទោសដែលមកយឺត។", "អ្នកម្ខាងទៀត: ខ្ញុំបានពិនិត្យសារ រួចហើយ។ សូមស្ងប់ស្ងាត់។", "ខ្ញុំ: ខ្ញុំនឹងចាប់ផ្តើមការងារភ្លាមៗ។", "អ្នកម្ខាងទៀត: មិនចាំបាច់ប្រញាប់ទេ។ សូមរៀបចំមុន។"],
            ne: ["म: ढिलो आइपुगेकोमा माफी चाहन्छु।", "अर्को व्यक्ति: तपाईंको खबर हेरेँ। शान्त हुनुहोस्।", "म: म तुरुन्त काम सुरु गर्छु।", "अर्को व्यक्ति: हतार गर्नु पर्दैन। पहिले तयारी गर्नुहोस्।"],
            mn: ["Би: Оройтож ирсэнд уучлаарай.", "Нөгөө хүн: Мэдэгдлийг чинь харсан. Тайван байгаарай.", "Би: Би шууд ажилдаа оръё.", "Нөгөө хүн: Яарах хэрэггүй. Эхлээд бэлдээрэй."],
            si: ["මම: පැමිණීම ප්‍රමාද වුණා, සමාවන්න.", "අනෙක් පුද්ගලයා: ඔබේ පණිවිඩය බලලා තියෙනවා. සන්සුන් වෙන්න.", "මම: මම වහාම වැඩ පටන් ගන්නම්.", "අනෙක් පුද්ගලයා: ඉක්මන් වීමට අවශ්‍ය නැහැ. පළමුව සූදානම් වෙන්න."],
            bn: ["আমি: দেরিতে পৌঁছেছি, দুঃখিত।", "অন্য ব্যক্তি: আপনার বার্তা দেখেছি। শান্ত থাকুন।", "আমি: আমি এখনই কাজ শুরু করব।", "অন্য ব্যক্তি: তাড়াহুড়ো করার দরকার নেই। আগে প্রস্তুতি নিন।"],
            pt: ["Eu: Desculpe por chegar atrasado.", "Outra pessoa: Eu confirmei sua mensagem. Fique calmo.", "Eu: Vou começar o trabalho imediatamente.", "Outra pessoa: Não precisa correr. Prepare-se primeiro."],
            es: ["Yo: Lamento haber llegado tarde.", "Otra persona: Revisé su mensaje. Mantenga la calma.", "Yo: Empezaré a trabajar enseguida.", "Otra persona: No necesita apurarse. Primero prepárese."],
            fr: ["Moi : Je suis désolé d’être arrivé en retard.", "Autre personne : J’ai vérifié votre message. Restez calme.", "Moi : Je vais commencer le travail tout de suite.", "Autre personne : Ce n’est pas la peine de vous dépêcher. Préparez-vous d’abord."],
            ru: ["Я: Извините, что опоздал.", "Другой человек: Я проверил ваше сообщение. Успокойтесь.", "Я: Я сразу начну работу.", "Другой человек: Не нужно торопиться. Сначала подготовьтесь."],
            uk: ["Я: Вибачте, що запізнився.", "Інша людина: Я перевірив ваше повідомлення. Заспокойтеся.", "Я: Я одразу почну роботу.", "Інша людина: Не треба поспішати. Спочатку підготуйтеся."]
        }
    ),

    makeA2GreetingsBySituationDialogue(
        "a2_greeting_003",
        "休憩に入るとき",
        [
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "これから休憩に入らせていただきます。",
                target: "これからきゅうけいにはいらせていただきます",
                ruby: "これから<ruby>休憩<rt>きゅうけい</rt></ruby>に<ruby>入<rt>はい</rt></ruby>らせていただきます。",
                romaji: "Kore kara kyūkei ni hairasete itadakimasu."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "戻る時間だけ確認しておきましょう。",
                target: "もどるじかんだけかくにんしておきましょう",
                ruby: "<ruby>戻<rt>もど</rt></ruby>る<ruby>時間<rt>じかん</rt></ruby>だけ<ruby>確認<rt>かくにん</rt></ruby>しておきましょう。",
                romaji: "Modoru jikan dake kakunin shite okimashō."
            },
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "十三時までに戻ります。",
                target: "じゅうさんじまでにもどります",
                ruby: "<ruby>十三時<rt>じゅうさんじ</rt></ruby>までに<ruby>戻<rt>もど</rt></ruby>ります。",
                romaji: "Jūsan-ji made ni modorimasu."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "戻ったら、次の作業をお願いします。",
                target: "もどったら つぎのさぎょうをおねがいします",
                ruby: "<ruby>戻<rt>もど</rt></ruby>ったら、<ruby>次<rt>つぎ</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Modottara, tsugi no sagyō o onegai shimasu."
            }
        ],
        {
            ja: ["自分：これから休憩に入らせていただきます。", "相手：戻る時間だけ確認しておきましょう。", "自分：十三時までに戻ります。", "相手：戻ったら、次の作業をお願いします。"],
            en: ["Me: I will take my break now.", "Other Person: Let’s just confirm the time you will return.", "Me: I will be back by 1 p.m.", "Other Person: When you come back, please start the next task."],
            "zh-CN": ["自己：我现在去休息。", "对方：我们先确认一下你回来的时间。", "自己：我会在十三点前回来。", "对方：回来后，请进行下一项工作。"],
            "zh-TW": ["自己：我現在去休息。", "對方：我們先確認一下你回來的時間。", "自己：我會在十三點前回來。", "對方：回來後，請進行下一項工作。"],
            ko: ["나: 이제 휴식에 들어가겠습니다.", "상대방: 돌아오는 시간만 확인해 둡시다.", "나: 13시까지 돌아오겠습니다.", "상대방: 돌아오면 다음 작업을 부탁합니다."],
            vi: ["Tôi: Bây giờ tôi xin phép nghỉ giải lao.", "Người kia: Hãy xác nhận thời gian bạn quay lại.", "Tôi: Tôi sẽ quay lại trước 13 giờ.", "Người kia: Khi quay lại, hãy làm công việc tiếp theo."],
            tl: ["Ako: Magbe-break na po ako ngayon.", "Kausap: Kumpirmahin po natin ang oras ng balik ninyo.", "Ako: Babalik po ako bago mag-1 p.m.", "Kausap: Pagbalik ninyo, pakiumpisahan po ang susunod na gawain."],
            id: ["Saya: Saya akan mulai istirahat sekarang.", "Lawan bicara: Mari kita pastikan waktu Anda kembali.", "Saya: Saya akan kembali sebelum pukul 13.00.", "Lawan bicara: Setelah kembali, tolong kerjakan tugas berikutnya."],
            th: ["ฉัน/ผม: ตอนนี้ขอไปพักค่ะ/ครับ", "อีกฝ่าย: ขอ確認เวลา戻ってくるเวลาだけしましょうค่ะ/ครับ", "ฉัน/ผม: จะกลับมาก่อน 13.00 น. ค่ะ/ครับ", "อีกฝ่าย: กลับมาแล้ว กรุณาทำงานต่อไปค่ะ/ครับ"],
            my: ["မိမိ: အခုနားချိန်ယူပါမယ်။", "တစ်ဖက်လူ: ပြန်လာမယ့်အချိန်ကိုသာ အတည်ပြုထားကြရအောင်။", "မိမိ: ၁၃ နာရီမတိုင်ခင် ပြန်လာပါမယ်။", "တစ်ဖက်လူ: ပြန်လာရင် နောက်တစ်ခုလုပ်ငန်းကို လုပ်ပေးပါ။"],
            km: ["ខ្ញុំ: ឥឡូវខ្ញុំនឹងចូលពេលសម្រាក។", "អ្នកម្ខាងទៀត: សូមបញ្ជាក់ពេលត្រឡប់មកវិញជាមុន។", "ខ្ញុំ: ខ្ញុំនឹងត្រឡប់មកវិញមុនម៉ោង ១៣។", "អ្នកម្ខាងទៀត: ពេលត្រឡប់មកវិញ សូមធ្វើការងារបន្ទាប់។"],
            ne: ["म: अब म विश्राममा जान्छु।", "अर्को व्यक्ति: फर्किने समय मात्र पुष्टि गरौं।", "म: म १३ बजेसम्म फर्किन्छु।", "अर्को व्यक्ति: फर्किएपछि अर्को काम गर्नुहोस्।"],
            mn: ["Би: Одоо завсарлага авъя.", "Нөгөө хүн: Буцаж ирэх цагийг л баталгаажуулъя.", "Би: 13 цаг гэхэд буцаж ирнэ.", "Нөгөө хүн: Ирээд дараагийн ажлыг хийгээрэй."],
            si: ["මම: දැන් විවේකයට යන්නම්.", "අනෙක් පුද්ගලයා: ආපසු එන වේලාව පමණක් තහවුරු කරමු.", "මම: මම 13ට කලින් ආපසු එන්නම්.", "අනෙක් පුද්ගලයා: ආපසු ආවම ඊළඟ වැඩ කරන්න."],
            bn: ["আমি: এখন বিরতিতে যাচ্ছি।", "অন্য ব্যক্তি: শুধু ফেরার সময়টা নিশ্চিত করি।", "আমি: আমি ১৩টার মধ্যে ফিরে আসব।", "অন্য ব্যক্তি: ফিরে এসে পরের কাজটি করবেন।"],
            pt: ["Eu: Vou fazer minha pausa agora.", "Outra pessoa: Vamos confirmar apenas o horário de retorno.", "Eu: Voltarei até as 13h.", "Outra pessoa: Quando voltar, faça a próxima tarefa, por favor."],
            es: ["Yo: Voy a tomar mi descanso ahora.", "Otra persona: Confirmemos solo la hora de regreso.", "Yo: Volveré antes de la 1 p.m.", "Otra persona: Cuando vuelva, haga la siguiente tarea, por favor."],
            fr: ["Moi : Je vais prendre ma pause maintenant.", "Autre personne : Confirmons simplement l’heure de retour.", "Moi : Je reviendrai avant 13 heures.", "Autre personne : À votre retour, faites la tâche suivante, s’il vous plaît."],
            ru: ["Я: Сейчас я пойду на перерыв.", "Другой человек: Давайте только подтвердим время возвращения.", "Я: Я вернусь до 13:00.", "Другой человек: Когда вернётесь, пожалуйста, начните следующую работу."],
            uk: ["Я: Зараз я піду на перерву.", "Інша людина: Давайте лише підтвердимо час повернення.", "Я: Я повернуся до 13:00.", "Інша людина: Коли повернетеся, будь ласка, почніть наступну роботу."]
        }
    ),

    makeA2GreetingsBySituationDialogue(
        "a2_greeting_004",
        "先に帰るとき",
        [
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "本日の作業が終わりましたので、お先に失礼します。",
                target: "ほんじつのさぎょうがおわりましたので おさきにしつれいします",
                ruby: "<ruby>本日<rt>ほんじつ</rt></ruby>の<ruby>作業<rt>さぎょう</rt></ruby>が<ruby>終<rt>お</rt></ruby>わりましたので、お<ruby>先<rt>さき</rt></ruby>に<ruby>失礼<rt>しつれい</rt></ruby>します。",
                romaji: "Honjitsu no sagyō ga owarimashita node, osaki ni shitsurei shimasu."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "今日も丁寧に進めてくれて助かりました。",
                target: "きょうもていねいにすすめてくれてたすかりました",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>も<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>進<rt>すす</rt></ruby>めてくれて<ruby>助<rt>たす</rt></ruby>かりました。",
                romaji: "Kyō mo teinei ni susumete kurete tasukarimashita."
            },
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "明日の準備は机の上に置いてあります。",
                target: "あしたのじゅんびはつくえのうえにおいてあります",
                ruby: "<ruby>明日<rt>あした</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>は<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>置<rt>お</rt></ruby>いてあります。",
                romaji: "Ashita no junbi wa tsukue no ue ni oite arimasu."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "確認しておきます。気をつけて帰ってください。",
                target: "かくにんしておきます きをつけてかえってください",
                ruby: "<ruby>確認<rt>かくにん</rt></ruby>しておきます。<ruby>気<rt>き</rt></ruby>をつけて<ruby>帰<rt>かえ</rt></ruby>ってください。",
                romaji: "Kakunin shite okimasu. Ki o tsukete kaette kudasai."
            }
        ],
        {
            ja: ["自分：本日の作業が終わりましたので、お先に失礼します。", "相手：今日も丁寧に進めてくれて助かりました。", "自分：明日の準備は机の上に置いてあります。", "相手：確認しておきます。気をつけて帰ってください。"],
            en: ["Me: I have finished today’s work, so I will leave now.", "Other Person: Thank you for working carefully today as well.", "Me: I put the materials for tomorrow on the desk.", "Other Person: I will check them. Please get home safely."],
            "zh-CN": ["自己：今天的工作已经完成了，我先告辞。", "对方：今天也很细心地完成了工作，帮了大忙。", "自己：明天的准备资料放在桌子上了。", "对方：我会确认。回家路上小心。"],
            "zh-TW": ["自己：今天的工作已經完成了，我先告辭。", "對方：今天也很細心地完成了工作，幫了大忙。", "自己：明天的準備資料放在桌子上了。", "對方：我會確認。回家路上小心。"],
            ko: ["나: 오늘 작업이 끝났으므로 먼저 실례하겠습니다.", "상대방: 오늘도 꼼꼼하게 진행해 줘서 도움이 됐습니다.", "나: 내일 준비물은 책상 위에 두었습니다.", "상대방: 확인해 두겠습니다. 조심해서 돌아가세요."],
            vi: ["Tôi: Công việc hôm nay đã xong, tôi xin phép về trước.", "Người kia: Hôm nay bạn cũng làm rất cẩn thận, thật sự giúp ích nhiều.", "Tôi: Tôi đã để phần chuẩn bị cho ngày mai trên bàn.", "Người kia: Tôi sẽ kiểm tra. Về cẩn thận nhé."],
            tl: ["Ako: Tapos na po ang trabaho ko ngayong araw, kaya mauuna na po ako.", "Kausap: Malaking tulong po ang maingat ninyong trabaho ngayong araw.", "Ako: Inilagay ko po sa mesa ang paghahanda para bukas.", "Kausap: Titingnan ko po. Ingat po sa pag-uwi."],
            id: ["Saya: Pekerjaan hari ini sudah selesai, jadi saya pulang dulu.", "Lawan bicara: Terima kasih sudah bekerja dengan teliti hari ini.", "Saya: Persiapan untuk besok sudah saya letakkan di atas meja.", "Lawan bicara: Akan saya periksa. Hati-hati di jalan."],
            th: ["ฉัน/ผม: งานวันนี้เสร็จแล้ว ขออนุญาตกลับก่อนค่ะ/ครับ", "อีกฝ่าย: วันนี้ก็ทำงานอย่างละเอียด ขอบคุณมากค่ะ/ครับ", "ฉัน/ผม: ของเตรียมสำหรับพรุ่งนี้วางไว้บนโต๊ะแล้วค่ะ/ครับ", "อีกฝ่าย: จะตรวจสอบให้ค่ะ/ครับ กลับบ้านดี ๆ นะคะ/ครับ"],
            my: ["မိမိ: ဒီနေ့လုပ်ငန်းပြီးပါပြီ၊ အရင်ပြန်ပါမယ်။", "တစ်ဖက်လူ: ဒီနေ့လည်း သေသေချာချာ လုပ်ပေးလို့ အကူအညီဖြစ်ပါတယ်။", "မိမိ: မနက်ဖြန်အတွက် ပြင်ဆင်ထားတာတွေကို စားပွဲပေါ်မှာ ထားပြီးပါပြီ။", "တစ်ဖက်လူ: စစ်ဆေးထားပါမယ်။ ဂရုစိုက်ပြီး ပြန်ပါ။"],
            km: ["ខ្ញុំ: ការងារថ្ងៃនេះរួចហើយ ដូច្នេះខ្ញុំសុំចេញមុន។", "អ្នកម្ខាងទៀត: អរគុណដែលធ្វើការយ៉ាងប្រុងប្រយ័ត្នថ្ងៃនេះផងដែរ។", "ខ្ញុំ: ឯកសារសម្រាប់ថ្ងៃស្អែក ខ្ញុំបានដាក់លើតុហើយ។", "អ្នកម្ខាងទៀត: ខ្ញុំនឹងពិនិត្យ។ សូមត្រឡប់ទៅផ្ទះដោយប្រុងប្រយ័ត្ន។"],
            ne: ["म: आजको काम सकिएकोले म पहिले जान्छु।", "अर्को व्यक्ति: आज पनि सावधानीपूर्वक काम गरेकोमा धेरै सहयोग भयो।", "म: भोलिको तयारी टेबलमाथि राखेको छु।", "अर्को व्यक्ति: म जाँच गर्छु। सावधानीपूर्वक घर जानुहोस्।"],
            mn: ["Би: Өнөөдрийн ажил дууссан тул түрүүлээд явъя.", "Нөгөө хүн: Өнөөдөр ч нямбай ажилласанд баярлалаа.", "Би: Маргаашийн бэлтгэлийг ширээн дээр тавьсан.", "Нөгөө хүн: Би шалгана. Болгоомжтой харь."],
            si: ["මම: අද වැඩ අවසන් වූ නිසා මම පෙරින් යන්නම්.", "අනෙක් පුද්ගලයා: අදත් ඔබ වැඩ ඉතා සැලකිල්ලෙන් කළ නිසා ලොකු උදව්වක් වුණා.", "මම: හෙට සූදානම් දේවල් මේසය උඩ තියලා තියෙනවා.", "අනෙක් පුද්ගලයා: මම පරීක්ෂා කරන්නම්. පරිස්සමින් ගෙදර යන්න."],
            bn: ["আমি: আজকের কাজ শেষ হয়েছে, তাই আমি আগে যাচ্ছি।", "অন্য ব্যক্তি: আজও যত্ন করে কাজ করেছেন, খুব সাহায্য হয়েছে।", "আমি: আগামীকালের প্রস্তুতির জিনিসগুলো ডেস্কের উপর রেখেছি।", "অন্য ব্যক্তি: আমি দেখে নেব। সাবধানে বাড়ি ফিরবেন।"],
            pt: ["Eu: Terminei o trabalho de hoje, então vou me retirar.", "Outra pessoa: Obrigado por trabalhar com cuidado hoje também.", "Eu: Deixei a preparação de amanhã em cima da mesa.", "Outra pessoa: Vou verificar. Volte para casa com cuidado."],
            es: ["Yo: Ya terminé el trabajo de hoy, así que me retiro.", "Otra persona: Gracias por trabajar con cuidado también hoy.", "Yo: Dejé la preparación para mañana sobre el escritorio.", "Otra persona: Lo revisaré. Vuelva a casa con cuidado."],
            fr: ["Moi : J’ai terminé le travail d’aujourd’hui, je vais donc partir.", "Autre personne : Merci d’avoir travaillé avec soin aujourd’hui encore.", "Moi : J’ai mis la préparation pour demain sur le bureau.", "Autre personne : Je vais vérifier. Rentrez prudemment."],
            ru: ["Я: Сегодняшняя работа закончена, поэтому я пойду.", "Другой человек: Спасибо, что сегодня тоже работали аккуратно.", "Я: Подготовку на завтра я положил на стол.", "Другой человек: Я проверю. Возвращайтесь домой осторожно."],
            uk: ["Я: Сьогоднішню роботу завершено, тому я піду.", "Інша людина: Дякую, що сьогодні теж працювали уважно.", "Я: Підготовку на завтра я поклав на стіл.", "Інша людина: Я перевірю. Повертайтеся додому обережно."]
        }
    ),

    makeA2GreetingsBySituationDialogue(
        "a2_greeting_005",
        "休み明けにあいさつする",
        [
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "昨日は急にお休みをいただき、申し訳ありませんでした。",
                target: "きのうはきゅうにおやすみをいただき もうしわけありませんでした",
                ruby: "<ruby>昨日<rt>きのう</rt></ruby>は<ruby>急<rt>きゅう</rt></ruby>にお<ruby>休<rt>やす</rt></ruby>みをいただき、<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありませんでした。",
                romaji: "Kinō wa kyū ni o-yasumi o itadaki, mōshiwake arimasen deshita."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "体調はもう落ち着きましたか。",
                target: "たいちょうはもうおちつきましたか",
                ruby: "<ruby>体調<rt>たいちょう</rt></ruby>はもう<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>きましたか。",
                romaji: "Taichō wa mō ochitsukimashita ka."
            },
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "はい、おかげさまで良くなりました。",
                target: "はい おかげさまでよくなりました",
                ruby: "はい、おかげさまで<ruby>良<rt>よ</rt></ruby>くなりました。",
                romaji: "Hai, okagesama de yoku narimashita."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "無理をせず、今日はゆっくり進めましょう。",
                target: "むりをせず きょうはゆっくりすすめましょう",
                ruby: "<ruby>無理<rt>むり</rt></ruby>をせず、<ruby>今日<rt>きょう</rt></ruby>はゆっくり<ruby>進<rt>すす</rt></ruby>めましょう。",
                romaji: "Muri o sezu, kyō wa yukkuri susumemashō."
            }
        ],
        {
            ja: ["自分：昨日は急にお休みをいただき、申し訳ありませんでした。", "相手：体調はもう落ち着きましたか。", "自分：はい、おかげさまで良くなりました。", "相手：無理をせず、今日はゆっくり進めましょう。"],
            en: ["Me: I am sorry for taking a sudden day off yesterday.", "Other Person: Are you feeling better now?", "Me: Yes, thanks to you, I am better.", "Other Person: Do not push yourself. Let’s take it slowly today."],
            "zh-CN": ["自己：昨天突然请假，非常抱歉。", "对方：身体已经稳定了吗？", "自己：是的，托您的福，好多了。", "对方：不要勉强，今天慢慢来吧。"],
            "zh-TW": ["自己：昨天突然請假，非常抱歉。", "對方：身體已經穩定了嗎？", "自己：是的，托您的福，好多了。", "對方：不要勉強，今天慢慢來吧。"],
            ko: ["나: 어제 갑자기 쉬게 되어 죄송했습니다.", "상대방: 몸 상태는 이제 괜찮아졌나요?", "나: 네, 덕분에 좋아졌습니다.", "상대방: 무리하지 말고 오늘은 천천히 진행합시다."],
            vi: ["Tôi: Hôm qua tôi nghỉ đột xuất, tôi xin lỗi.", "Người kia: Sức khỏe của bạn đã ổn hơn chưa?", "Tôi: Vâng, nhờ mọi người mà tôi đã khỏe hơn.", "Người kia: Đừng cố quá. Hôm nay hãy làm từ từ."],
            tl: ["Ako: Pasensya na po at bigla po akong lumiban kahapon.", "Kausap: Maayos na po ba ang pakiramdam ninyo?", "Ako: Opo, mabuti na po ako.", "Kausap: Huwag pong pilitin ang sarili. Dahan-dahan po tayo ngayon."],
            id: ["Saya: Mohon maaf karena kemarin saya tiba-tiba mengambil cuti.", "Lawan bicara: Apakah kondisi Anda sudah membaik?", "Saya: Ya, berkat semuanya, saya sudah lebih baik.", "Lawan bicara: Jangan memaksakan diri. Hari ini kita lakukan pelan-pelan."],
            th: ["ฉัน/ผม: เมื่อวานหยุดกะทันหัน ขออภัยค่ะ/ครับ", "อีกฝ่าย: อาการดีขึ้นแล้วไหมคะ/ครับ", "ฉัน/ผม: ดีขึ้นแล้วค่ะ/ครับ ขอบคุณมากค่ะ/ครับ", "อีกฝ่าย: อย่าฝืนค่ะ/ครับ วันนี้ค่อย ๆ ทำไปนะคะ/ครับ"],
            my: ["မိမိ: မနေ့က အရေးပေါ် အနားယူခဲ့ရလို့ တောင်းပန်ပါတယ်။", "တစ်ဖက်လူ: ကျန်းမာရေး အခြေအနေက အခု သက်သာပြီလား။", "မိမိ: ဟုတ်ကဲ့၊ အားလုံးရဲ့ကူညီမှုနဲ့ သက်သာလာပါပြီ။", "တစ်ဖက်လူ: မလွန်ကဲပါနဲ့။ ဒီနေ့တော့ ဖြည်းဖြည်းလုပ်ကြရအောင်။"],
            km: ["ខ្ញុំ: សូមទោសដែលម្សិលមិញខ្ញុំបានឈប់សម្រាកភ្លាមៗ។", "អ្នកម្ខាងទៀត: សុខភាពរបស់អ្នកបានប្រសើរឡើងហើយទេ?", "ខ្ញុំ: បាទ/ចាស អរគុណ អាការៈបានប្រសើរហើយ។", "អ្នកម្ខាងទៀត: កុំបង្ខំខ្លួន។ ថ្ងៃនេះយើងធ្វើយឺតៗទៅ។"],
            ne: ["म: हिजो अचानक बिदा लिएकोमा माफी चाहन्छु।", "अर्को व्यक्ति: स्वास्थ्य अब ठीक भयो?", "म: हो, तपाईंहरूको सहयोगले राम्रो भयो।", "अर्को व्यक्ति: आफूलाई जबरजस्ती नगर्नुहोस्। आज बिस्तारै गरौं।"],
            mn: ["Би: Өчигдөр гэнэт амарсанд уучлаарай.", "Нөгөө хүн: Биеийн байдал тань одоо дээрдсэн үү?", "Би: Тийм, та бүхний ачаар дээрдсэн.", "Нөгөө хүн: Өөрийгөө битгий хүчлээрэй. Өнөөдөр аажуухан хийцгээе."],
            si: ["මම: ඊයේ හදිසියේ නිවාඩු ගත්තාට සමාවෙන්න.", "අනෙක් පුද්ගලයා: දැන් සෞඛ්‍ය තත්ත්වය හොඳද?", "මම: ඔව්, ඔබලා නිසා දැන් හොඳයි.", "අනෙක් පුද්ගලයා: ඔබට බල කරගන්න එපා. අද සෙමින් කරමු."],
            bn: ["আমি: গতকাল হঠাৎ ছুটি নেওয়ার জন্য দুঃখিত।", "অন্য ব্যক্তি: শরীর এখন ঠিক হয়েছে?", "আমি: হ্যাঁ, সবার সাহায্যে ভালো হয়েছি।", "অন্য ব্যক্তি: নিজেকে চাপ দেবেন না। আজ ধীরে ধীরে করি।"],
            pt: ["Eu: Desculpe por ter tirado folga de repente ontem.", "Outra pessoa: Sua saúde já melhorou?", "Eu: Sim, graças a vocês, estou melhor.", "Outra pessoa: Não se esforce demais. Vamos seguir com calma hoje."],
            es: ["Yo: Lamento haber faltado de repente ayer.", "Otra persona: ¿Ya se siente mejor?", "Yo: Sí, gracias a ustedes, estoy mejor.", "Otra persona: No se esfuerce demasiado. Hoy avancemos con calma."],
            fr: ["Moi : Je suis désolé d’avoir pris un jour de repos soudainement hier.", "Autre personne : Votre état s’est-il amélioré ?", "Moi : Oui, grâce à vous, ça va mieux.", "Autre personne : Ne forcez pas. Avançons doucement aujourd’hui."],
            ru: ["Я: Извините, что вчера внезапно взял выходной.", "Другой человек: Вам уже лучше?", "Я: Да, благодаря вам мне лучше.", "Другой человек: Не перенапрягайтесь. Сегодня будем работать спокойно."],
            uk: ["Я: Вибачте, що вчора раптово взяв вихідний.", "Інша людина: Вам уже краще?", "Я: Так, завдяки вам мені краще.", "Інша людина: Не перенапружуйтеся. Сьогодні працюймо спокійно."]
        }
    ),

    makeA2GreetingsBySituationDialogue(
        "a2_greeting_006",
        "近所に引っ越してきたとき",
        [
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "先週、隣の部屋に引っ越してきた山田です。",
                target: "せんしゅう となりのへやにひっこしてきたやまだです",
                ruby: "<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>隣<rt>となり</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>してきた<ruby>山田<rt>やまだ</rt></ruby>です。",
                romaji: "Senshū, tonari no heya ni hikkoshite kita Yamada desu."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "そうでしたか。こちらこそよろしくお願いします。",
                target: "そうでしたか こちらこそよろしくおねがいします",
                ruby: "そうでしたか。こちらこそよろしくお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Sō deshita ka. Kochira koso yoroshiku onegai shimasu."
            },
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "生活音などで気になることがあれば教えてください。",
                target: "せいかつおとなどできになることがあればおしえてください",
                ruby: "<ruby>生活音<rt>せいかつおん</rt></ruby>などで<ruby>気<rt>き</rt></ruby>になることがあれば<ruby>教<rt>おし</rt></ruby>えてください。",
                romaji: "Seikatsu-on nado de ki ni naru koto ga areba oshiete kudasai."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "承知しました。こちらも気をつけます。",
                target: "しょうちしました こちらもきをつけます",
                ruby: "<ruby>承知<rt>しょうち</rt></ruby>しました。こちらも<ruby>気<rt>き</rt></ruby>をつけます。",
                romaji: "Shōchi shimashita. Kochira mo ki o tsukemasu."
            }
        ],
        {
            ja: ["自分：先週、隣の部屋に引っ越してきた山田です。", "相手：そうでしたか。こちらこそよろしくお願いします。", "自分：生活音などで気になることがあれば教えてください。", "相手：承知しました。こちらも気をつけます。"],
            en: ["Me: I am Yamada. I moved into the room next door last week.", "Other Person: I see. Nice to meet you too.", "Me: If any daily noise bothers you, please let me know.", "Other Person: Understood. I will also be careful."],
            "zh-CN": ["自己：我是山田，上周搬到隔壁房间。", "对方：原来如此。也请多多关照。", "自己：如果生活声音等让您在意，请告诉我。", "对方：明白了。我也会注意。"],
            "zh-TW": ["自己：我是山田，上週搬到隔壁房間。", "對方：原來如此。也請多多關照。", "自己：如果生活聲音等讓您在意，請告訴我。", "對方：明白了。我也會注意。"],
            ko: ["나: 지난주에 옆방으로 이사 온 야마다입니다.", "상대방: 그렇군요. 저야말로 잘 부탁드립니다.", "나: 생활 소음 등 신경 쓰이는 일이 있으면 알려 주세요.", "상대방: 알겠습니다. 저도 조심하겠습니다."],
            vi: ["Tôi: Tôi là Yamada, tuần trước tôi chuyển vào phòng bên cạnh.", "Người kia: Vậy à. Rất mong được giúp đỡ nhau.", "Tôi: Nếu có tiếng sinh hoạt nào làm phiền, xin hãy cho tôi biết.", "Người kia: Tôi hiểu rồi. Tôi cũng sẽ chú ý."],
            tl: ["Ako: Ako po si Yamada. Lumipat po ako sa katabing kuwarto noong nakaraang linggo.", "Kausap: Ganoon po pala. Ikinagagalak ko rin po kayong makilala.", "Ako: Kung may ingay sa araw-araw na nakakaabala, pakisabi po sa akin.", "Kausap: Naiintindihan ko po. Mag-iingat din po ako."],
            id: ["Saya: Saya Yamada. Minggu lalu saya pindah ke kamar sebelah.", "Lawan bicara: Begitu ya. Senang berkenalan dengan Anda juga.", "Saya: Jika ada suara kehidupan sehari-hari yang mengganggu, beri tahu saya.", "Lawan bicara: Baik. Saya juga akan berhati-hati."],
            th: ["ฉัน/ผม: ฉัน/ผมชื่อยามาดะ ย้ายมาอยู่ห้องข้าง ๆ เมื่อสัปดาห์ที่แล้วค่ะ/ครับ", "อีกฝ่าย: อย่างนั้นเอง ยินดีที่ได้รู้จักเช่นกันค่ะ/ครับ", "ฉัน/ผม: หากเสียงในชีวิตประจำวันรบกวน กรุณาบอกได้เลยค่ะ/ครับ", "อีกฝ่าย: รับทราบค่ะ/ครับ ทางนี้ก็จะระวังเช่นกันค่ะ/ครับ"],
            my: ["မိမိ: ကျွန်တော်/ကျွန်မက ယာမဒာပါ။ မနေ့တစ်ပတ်က ဘေးအခန်းကို ပြောင်းလာပါတယ်။", "တစ်ဖက်လူ: အဲဒီလိုလား။ ကျွန်တော်/ကျွန်မလည်း တွေ့ရတာဝမ်းသာပါတယ်။", "မိမိ: နေထိုင်ရာအသံတွေကြောင့် စိတ်အနှောင့်အယှက်ရှိရင် ပြောပေးပါ။", "တစ်ဖက်လူ: နားလည်ပါပြီ။ ကျွန်တော်/ကျွန်မလည်း သတိထားပါမယ်။"],
            km: ["ខ្ញុំ: ខ្ញុំឈ្មោះ Yamada។ ខ្ញុំបានផ្លាស់មកបន្ទប់ជាប់គ្នាកាលពីសប្តាហ៍មុន។", "អ្នកម្ខាងទៀត: អ៊ីចឹងទេ។ រីករាយដែលបានស្គាល់ដូចគ្នា។", "ខ្ញុំ: បើមានសំឡេងប្រចាំថ្ងៃរំខាន សូមប្រាប់ខ្ញុំ។", "អ្នកម្ខាងទៀត: ខ្ញុំយល់ហើយ។ ខ្ញុំក៏នឹងប្រុងប្រយ័ត្នដែរ។"],
            ne: ["म: म यामादा हुँ। अघिल्लो हप्ता छेउको कोठामा सरेको हुँ।", "अर्को व्यक्ति: त्यसो रहेछ। मलाई पनि भेटेर खुशी लाग्यो।", "म: दैनिक आवाजले केही समस्या भए मलाई भन्नुहोस्।", "अर्को व्यक्ति: बुझें। म पनि ध्यान दिन्छु।"],
            mn: ["Би: Би Ямада. Өнгөрсөн долоо хоногт хажуугийн өрөөнд нүүж ирсэн.", "Нөгөө хүн: Тийм үү. Танилцсандаа баяртай.", "Би: Амьдралын дуу чимээ зэрэг санаа зовоох зүйл байвал хэлээрэй.", "Нөгөө хүн: Ойлголоо. Би ч бас анхаарна."],
            si: ["මම: මම යමදා. ගිය සතියේ අසල් කාමරයට පදිංචියට ආවා.", "අනෙක් පුද්ගලයා: එහෙමද. මටත් ඔබව හමුවීම සතුටක්.", "මම: ජීවන ශබ්ද වැනි දේවල් ගැන ඔබට කරදරයක් තිබුණොත් කියන්න.", "අනෙක් පුද්ගලයා: තේරුණා. අපිත් සැලකිලිමත් වෙන්නම්."],
            bn: ["আমি: আমি ইয়ামাদা। গত সপ্তাহে পাশের ঘরে উঠেছি।", "অন্য ব্যক্তি: তাই নাকি। আমিও পরিচিত হয়ে খুশি।", "আমি: দৈনন্দিন শব্দ ইত্যাদি নিয়ে কোনো অসুবিধা হলে জানাবেন।", "অন্য ব্যক্তি: বুঝেছি। আমরাও সাবধান থাকব।"],
            pt: ["Eu: Sou Yamada. Mudei-me para o quarto ao lado na semana passada.", "Outra pessoa: Entendi. Prazer em conhecê-lo também.", "Eu: Se algum som do dia a dia incomodar, por favor, me avise.", "Outra pessoa: Entendido. Também tomarei cuidado."],
            es: ["Yo: Soy Yamada. Me mudé a la habitación de al lado la semana pasada.", "Otra persona: Ya veo. Mucho gusto también.", "Yo: Si algún ruido diario le molesta, por favor dígamelo.", "Otra persona: Entendido. Yo también tendré cuidado."],
            fr: ["Moi : Je suis Yamada. J’ai emménagé dans la chambre voisine la semaine dernière.", "Autre personne : Ah, d’accord. Enchanté également.", "Moi : Si un bruit de la vie quotidienne vous dérange, dites-le-moi.", "Autre personne : Compris. Je ferai attention aussi."],
            ru: ["Я: Я Ямада. На прошлой неделе переехал в соседнюю комнату.", "Другой человек: Понятно. Рад знакомству.", "Я: Если вас будет беспокоить бытовой шум, пожалуйста, скажите мне.", "Другой человек: Понял. Я тоже буду внимателен."],
            uk: ["Я: Я Ямада. Минулого тижня переїхав у сусідню кімнату.", "Інша людина: Зрозуміло. Радий знайомству.", "Я: Якщо вас турбуватиме побутовий шум, будь ласка, скажіть мені.", "Інша людина: Зрозумів. Я теж буду уважним."]
        }
    ),

    makeA2GreetingsBySituationDialogue(
        "a2_greeting_007",
        "久しぶりに会ったとき",
        [
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "お久しぶりです。お元気でしたか。",
                target: "おひさしぶりです おげんきでしたか",
                ruby: "お<ruby>久<rt>ひさ</rt></ruby>しぶりです。お<ruby>元気<rt>げんき</rt></ruby>でしたか。",
                romaji: "O-hisashiburi desu. O-genki deshita ka."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "はい、元気にしていました。あなたも変わりありませんか。",
                target: "はい げんきにしていました あなたもかわりありませんか",
                ruby: "はい、<ruby>元気<rt>げんき</rt></ruby>にしていました。あなたも<ruby>変<rt>か</rt></ruby>わりありませんか。",
                romaji: "Hai, genki ni shite imashita. Anata mo kawari arimasen ka."
            },
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "おかげさまで、毎日忙しくしています。",
                target: "おかげさまで まいにちいそがしくしています",
                ruby: "おかげさまで、<ruby>毎日<rt>まいにち</rt></ruby><ruby>忙<rt>いそが</rt></ruby>しくしています。",
                romaji: "Okagesama de, mainichi isogashiku shite imasu."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "また同じ現場で会えてうれしいです。",
                target: "またおなじげんばであえてうれしいです",
                ruby: "また<ruby>同<rt>おな</rt></ruby>じ<ruby>現場<rt>げんば</rt></ruby>で<ruby>会<rt>あ</rt></ruby>えてうれしいです。",
                romaji: "Mata onaji genba de aete ureshii desu."
            }
        ],
        {
            ja: ["自分：お久しぶりです。お元気でしたか。", "相手：はい、元気にしていました。あなたも変わりありませんか。", "自分：おかげさまで、毎日忙しくしています。", "相手：また同じ現場で会えてうれしいです。"],
            en: ["Me: It has been a while. How have you been?", "Other Person: I have been well. Have you been well too?", "Me: Thanks, I have been busy every day.", "Other Person: I am glad to see you again at the same worksite."],
            "zh-CN": ["自己：好久不见。您最近好吗？", "对方：我很好。你也一切都好吗？", "自己：托您的福，我每天都很忙。", "对方：很高兴又能在同一个现场见到你。"],
            "zh-TW": ["自己：好久不見。您最近好嗎？", "對方：我很好。你也一切都好嗎？", "自己：托您的福，我每天都很忙。", "對方：很高興又能在同一個現場見到你。"],
            ko: ["나: 오랜만입니다. 잘 지내셨나요?", "상대방: 네, 잘 지냈습니다. 당신도 별일 없으셨나요?", "나: 덕분에 매일 바쁘게 지내고 있습니다.", "상대방: 또 같은 현장에서 만나서 기쁩니다."],
            vi: ["Tôi: Lâu rồi không gặp. Bạn vẫn khỏe chứ?", "Người kia: Vâng, tôi vẫn khỏe. Bạn cũng không có gì thay đổi chứ?", "Tôi: Nhờ mọi người, tôi bận rộn mỗi ngày.", "Người kia: Tôi rất vui vì lại gặp bạn ở cùng nơi làm việc."],
            tl: ["Ako: Matagal na po tayong hindi nagkita. Kumusta po kayo?", "Kausap: Mabuti naman po ako. Kayo rin po ba?", "Ako: Mabuti naman po, abala po ako araw-araw.", "Kausap: Masaya po akong makita kayo ulit sa parehong lugar ng trabaho."],
            id: ["Saya: Lama tidak bertemu. Apa kabar?", "Lawan bicara: Ya, saya baik-baik saja. Anda juga baik-baik saja?", "Saya: Berkat semuanya, saya sibuk setiap hari.", "Lawan bicara: Saya senang bisa bertemu lagi di tempat kerja yang sama."],
            th: ["ฉัน/ผม: ไม่ได้เจอกันนานเลยค่ะ/ครับ สบายดีไหมคะ/ครับ", "อีกฝ่าย: สบายดีค่ะ/ครับ คุณก็สบายดีใช่ไหมคะ/ครับ", "ฉัน/ผม: ขอบคุณค่ะ/ครับ ช่วงนี้ยุ่งทุกวันค่ะ/ครับ", "อีกฝ่าย: ดีใจที่ได้เจอกันอีกในไซต์งานเดียวกันค่ะ/ครับ"],
            my: ["မိမိ: မတွေ့တာ ကြာပြီနော်။ ကျန်းမာရဲ့လား။", "တစ်ဖက်လူ: ဟုတ်ကဲ့၊ ကျန်းမာပါတယ်။ သင်လည်း အဆင်ပြေရဲ့လား။", "မိမိ: အားလုံးရဲ့ကူညီမှုနဲ့ နေ့တိုင်း အလုပ်များနေပါတယ်။", "တစ်ဖက်လူ: တူညီတဲ့ လုပ်ငန်းနေရာမှာ ပြန်တွေ့ရလို့ ဝမ်းသာပါတယ်။"],
            km: ["ខ្ញុំ: មិនបានជួបគ្នាយូរហើយ។ សុខសប្បាយទេ?", "អ្នកម្ខាងទៀត: បាទ/ចាស ខ្ញុំសុខសប្បាយ។ អ្នកក៏មិនមានអ្វីផ្លាស់ប្តូរទេឬ?", "ខ្ញុំ: អរគុណ ខ្ញុំរវល់រាល់ថ្ងៃ។", "អ្នកម្ខាងទៀត: ខ្ញុំរីករាយដែលបានជួបអ្នកម្តងទៀតនៅកន្លែងធ្វើការដូចគ្នា។"],
            ne: ["म: धेरै समयपछि भेट भयो। तपाईं सन्चै हुनुहुन्थ्यो?", "अर्को व्यक्ति: हो, म सन्चै थिएँ। तपाईं पनि ठीक हुनुहुन्छ?", "म: तपाईंहरूको कृपाले, म हरेक दिन व्यस्त छु।", "अर्को व्यक्ति: फेरि एउटै कार्यस्थलमा भेट्न पाउँदा खुशी लाग्यो।"],
            mn: ["Би: Удаан уулзсангүй. Сайн байсан уу?", "Нөгөө хүн: Тийм, сайн байсан. Та ч бас сайн биз дээ?", "Би: Таны ачаар өдөр бүр завгүй байна.", "Нөгөө хүн: Дахиад нэг ажлын талбай дээр уулзсандаа баяртай байна."],
            si: ["මම: ගොඩක් කාලෙකින් හමු වුණා. ඔබ හොඳින් සිටියාද?", "අනෙක් පුද්ගලයා: ඔව්, හොඳින් සිටියා. ඔබත් වෙනසක් නැද්ද?", "මම: ඔබලා නිසා, දිනපතා වැඩබහුලයි.", "අනෙක් පුද්ගලයා: නැවත එකම වැඩබිමේ හමුවීම සතුටක්."],
            bn: ["আমি: অনেক দিন পর দেখা হলো। আপনি ভালো ছিলেন?", "অন্য ব্যক্তি: হ্যাঁ, ভালো ছিলাম। আপনিও ভালো আছেন তো?", "আমি: সবার কৃপায়, প্রতিদিন ব্যস্ত আছি।", "অন্য ব্যক্তি: আবার একই কর্মস্থলে দেখা হয়ে ভালো লাগছে।"],
            pt: ["Eu: Faz tempo que não nos vemos. Como você tem passado?", "Outra pessoa: Tenho passado bem. Você também está bem?", "Eu: Graças a todos, tenho estado ocupado todos os dias.", "Outra pessoa: Fico feliz em vê-lo novamente no mesmo local de trabalho."],
            es: ["Yo: Hace tiempo que no nos vemos. ¿Cómo ha estado?", "Otra persona: He estado bien. ¿Usted también está bien?", "Yo: Gracias a todos, he estado ocupado todos los días.", "Otra persona: Me alegra verlo de nuevo en el mismo lugar de trabajo."],
            fr: ["Moi : Cela fait longtemps. Comment allez-vous ?", "Autre personne : Je vais bien. Vous aussi, tout va bien ?", "Moi : Grâce à vous, je suis occupé tous les jours.", "Autre personne : Je suis heureux de vous revoir sur le même lieu de travail."],
            ru: ["Я: Давно не виделись. Как вы?", "Другой человек: Да, всё хорошо. У вас тоже всё в порядке?", "Я: Благодаря вам, я каждый день занят.", "Другой человек: Рад снова встретиться на той же площадке."],
            uk: ["Я: Давно не бачилися. Як ви?", "Інша людина: Так, усе добре. У вас теж усе гаразд?", "Я: Завдяки вам, я щодня зайнятий.", "Інша людина: Радий знову зустрітися на тому самому місці роботи."]
        }
    ),

    makeA2GreetingsBySituationDialogue(
        "a2_greeting_008",
        "電話であいさつする",
        [
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "お電話ありがとうございます。さくら工業でございます。",
                target: "おでんわありがとうございます さくらこうぎょうでございます",
                ruby: "お<ruby>電話<rt>でんわ</rt></ruby>ありがとうございます。さくら<ruby>工業<rt>こうぎょう</rt></ruby>でございます。",
                romaji: "O-denwa arigatō gozaimasu. Sakura Kōgyō de gozaimasu."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "田中さんはいらっしゃいますか。",
                target: "たなかさんはいらっしゃいますか",
                ruby: "<ruby>田中<rt>たなか</rt></ruby>さんはいらっしゃいますか。",
                romaji: "Tanaka-san wa irasshaimasu ka."
            },
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "ただいま席を外しております。",
                target: "ただいませきをはずしております",
                ruby: "ただいま<ruby>席<rt>せき</rt></ruby>を<ruby>外<rt>はず</rt></ruby>しております。",
                romaji: "Tadaima seki o hazushite orimasu."
            },
            {
                label: "話者B",
                key: "other",
                name: "相手",
                line: "では、また後ほどかけ直します。",
                target: "では またのちほどかけなおします",
                ruby: "では、また<ruby>後<rt>のち</rt></ruby>ほどかけ<ruby>直<rt>なお</rt></ruby>します。",
                romaji: "Dewa, mata nochihodo kakenaoshimasu."
            },
            {
                label: "話者A",
                key: "self",
                name: "自分",
                line: "承知いたしました。お電話ありがとうございました。",
                target: "しょうちいたしました おでんわありがとうございました",
                ruby: "<ruby>承知<rt>しょうち</rt></ruby>いたしました。お<ruby>電話<rt>でんわ</rt></ruby>ありがとうございました。",
                romaji: "Shōchi itashimashita. O-denwa arigatō gozaimashita."
            }
        ],
        {
            ja: ["自分：お電話ありがとうございます。さくら工業でございます。", "相手：田中さんはいらっしゃいますか。", "自分：ただいま席を外しております。", "相手：では、また後ほどかけ直します。", "自分：承知いたしました。お電話ありがとうございました。"],
            en: ["Me: Thank you for calling. This is Sakura Industry.", "Other Person: Is Mr. Tanaka available?", "Me: He is away from his desk at the moment.", "Other Person: Then I will call again later.", "Me: Certainly. Thank you for calling."],
            "zh-CN": ["自己：感谢您的来电。这里是樱花工业。", "对方：田中先生在吗？", "自己：他现在不在座位上。", "对方：那我稍后再打来。", "自己：明白了。感谢您的来电。"],
            "zh-TW": ["自己：感謝您的來電。這裡是櫻花工業。", "對方：田中先生在嗎？", "自己：他現在不在座位上。", "對方：那我稍後再打來。", "自己：明白了。感謝您的來電。"],
            ko: ["나: 전화 주셔서 감사합니다. 사쿠라 공업입니다.", "상대방: 다나카 씨 계신가요?", "나: 지금 자리를 비우고 있습니다.", "상대방: 그럼 나중에 다시 전화하겠습니다.", "나: 알겠습니다. 전화 주셔서 감사합니다."],
            vi: ["Tôi: Cảm ơn quý khách đã gọi điện. Đây là Sakura Kogyo.", "Người kia: Anh Tanaka có ở đó không ạ?", "Tôi: Hiện anh ấy đang rời khỏi chỗ ngồi.", "Người kia: Vậy tôi sẽ gọi lại sau.", "Tôi: Tôi hiểu rồi. Cảm ơn quý khách đã gọi điện."],
            tl: ["Ako: Salamat po sa pagtawag. Ito po ang Sakura Industry.", "Kausap: Nariyan po ba si Mr. Tanaka?", "Ako: Wala po siya sa kanyang mesa sa ngayon.", "Kausap: Kung ganoon, tatawag po ako ulit mamaya.", "Ako: Naiintindihan ko po. Salamat po sa pagtawag."],
            id: ["Saya: Terima kasih atas teleponnya. Ini Sakura Industry.", "Lawan bicara: Apakah Bapak Tanaka ada?", "Saya: Saat ini beliau sedang tidak di tempat.", "Lawan bicara: Kalau begitu, saya akan menelepon lagi nanti.", "Saya: Baik. Terima kasih atas teleponnya."],
            th: ["ฉัน/ผม: ขอบคุณที่โทรมาค่ะ/ครับ ที่นี่บริษัทซากุระอุตสาหกรรมค่ะ/ครับ", "อีกฝ่าย: คุณทานากะอยู่ไหมคะ/ครับ", "ฉัน/ผม: ตอนนี้ออกจากโต๊ะอยู่ค่ะ/ครับ", "อีกฝ่าย: ถ้าอย่างนั้นจะโทรมาใหม่ภายหลังค่ะ/ครับ", "ฉัน/ผม: รับทราบค่ะ/ครับ ขอบคุณที่โทรมาค่ะ/ครับ"],
            my: ["မိမိ: ဖုန်းခေါ်ပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ်။ Sakura Industry ဖြစ်ပါတယ်။", "တစ်ဖက်လူ: တနကာစံ ရှိပါသလား။", "မိမိ: အခု ထိုင်ခုံကနေ ခဏထွက်နေပါတယ်။", "တစ်ဖက်လူ: ဒါဆို နောက်မှ ပြန်ခေါ်ပါမယ်။", "မိမိ: နားလည်ပါပြီ။ ဖုန်းခေါ်ပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ်။"],
            km: ["ខ្ញុំ: អរគុណដែលបានទូរស័ព្ទមក។ នេះគឺក្រុមហ៊ុន Sakura Industry។", "អ្នកម្ខាងទៀត: តើលោក Tanaka នៅទីនោះទេ?", "ខ្ញុំ: ឥឡូវនេះគាត់មិននៅតុរបស់គាត់ទេ។", "អ្នកម្ខាងទៀត: ដូច្នេះ ខ្ញុំនឹងទូរស័ព្ទម្តងទៀតពេលក្រោយ។", "ខ្ញុំ: ខ្ញុំយល់ហើយ។ អរគុណដែលបានទូរស័ព្ទមក។"],
            ne: ["म: फोन गर्नुभएकोमा धन्यवाद। यो साकुरा इन्डस्ट्री हो।", "अर्को व्यक्ति: तानाका सर हुनुहुन्छ?", "म: उहाँ अहिले आफ्नो सिटमा हुनुहुन्न।", "अर्को व्यक्ति: त्यसो भए, म पछि फेरि फोन गर्छु।", "म: ठीक छ। फोन गर्नुभएकोमा धन्यवाद।"],
            mn: ["Би: Утасдсанд баярлалаа. Энэ бол Сакура үйлдвэр.", "Нөгөө хүн: Танака гуай байна уу?", "Би: Тэр одоогоор ширээндээ алга.", "Нөгөө хүн: Тэгвэл дараа дахин залгая.", "Би: Ойлголоо. Утасдсанд баярлалаа."],
            si: ["මම: දුරකථන ඇමතුමට ස්තුතියි. මෙය Sakura Industry.", "අනෙක් පුද්ගලයා: තනකා මහතා ඉන්නවද?", "මම: ඔහු මේ වෙලාවේ තමන්ගේ ආසනයේ නැහැ.", "අනෙක් පුද්ගලයා: එහෙනම් පසුව නැවත ඇමතුමක් දෙන්නම්.", "මම: තේරුණා. දුරකථන ඇමතුමට ස්තුතියි."],
            bn: ["আমি: ফোন করার জন্য ধন্যবাদ। এটি সাকুরা ইন্ডাস্ট্রি।", "অন্য ব্যক্তি: তানাকা সাহেব আছেন?", "আমি: তিনি এখন সিটে নেই।", "অন্য ব্যক্তি: তাহলে পরে আবার ফোন করব।", "আমি: বুঝেছি। ফোন করার জন্য ধন্যবাদ।"],
            pt: ["Eu: Obrigado pela ligação. Aqui é a Sakura Industry.", "Outra pessoa: O senhor Tanaka está?", "Eu: No momento, ele está fora da mesa.", "Outra pessoa: Então ligarei novamente mais tarde.", "Eu: Entendido. Obrigado pela ligação."],
            es: ["Yo: Gracias por llamar. Habla Sakura Industry.", "Otra persona: ¿Está el señor Tanaka?", "Yo: En este momento no está en su escritorio.", "Otra persona: Entonces llamaré de nuevo más tarde.", "Yo: Entendido. Gracias por llamar."],
            fr: ["Moi : Merci pour votre appel. Ici Sakura Industry.", "Autre personne : Monsieur Tanaka est-il disponible ?", "Moi : Il n’est pas à son bureau pour le moment.", "Autre personne : Alors je rappellerai plus tard.", "Moi : Très bien. Merci pour votre appel."],
            ru: ["Я: Спасибо за звонок. Это компания Sakura Industry.", "Другой человек: Господин Танака на месте?", "Я: Сейчас он отошёл от рабочего места.", "Другой человек: Тогда я перезвоню позже.", "Я: Понял. Спасибо за звонок."],
            uk: ["Я: Дякуємо за дзвінок. Це Sakura Industry.", "Інша людина: Пан Танака на місці?", "Я: Зараз він відійшов від робочого місця.", "Інша людина: Тоді я передзвоню пізніше.", "Я: Зрозуміло. Дякуємо за дзвінок."]
        }
    )

];