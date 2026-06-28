// ==========================================
// Japeak 教材データベース（A1 シーン1：挨拶・基本表現）
// 対応言語: 19言語 + 日本語
// ==========================================
const japeakA1Scene1Data = [
    {
        id: "a1_s1_001", audio: "audio/a1_s1_001.mp3", title: "朝の挨拶 (Morning Greeting)", category: "a1_scene1",
        japanese: "おはようございます。", target_speech: "おはようございます",
        ruby: { hiragana: "おはようございます。", romaji: "Ohayou gozaimasu." },
        context: {
            "ja": "朝、人に会ったときや、職場でその日初めて人に会ったときに使います。",
            "en": "Used when meeting someone in the morning, or when seeing someone for the first time that day at work.",
            "zh-CN": "早上遇到别人，或者在职场当天第一次见到别人时使用。",
            "zh-TW": "早上遇到別人，或者在職場當天第一次見到別人時使用。",
            "ko": "아침에 사람을 만났을 때나, 직장에서 그날 처음 사람을 만났을 때 사용합니다.",
            "vi": "Dùng khi gặp ai đó vào buổi sáng hoặc khi gặp ai đó lần đầu tiên trong ngày tại nơi làm việc.",
            "tl": "Ginagamit kapag may nakasalubong sa umaga, o kapag unang nakita ang isang tao sa trabaho sa araw na iyon.",
            "id": "Digunakan saat bertemu seseorang di pagi hari, atau saat pertama kali bertemu seseorang pada hari itu di tempat kerja.",
            "th": "ใช้เมื่อพบปะผู้คนในตอนเช้า หรือเมื่อพบผู้คนเป็นครั้งแรกของวันในที่ทำงาน",
            "my": "နံနက်ပိုင်းတွင် လူများနှင့်တွေ့ဆုံသောအခါ သို့မဟုတ် လုပ်ငန်းခွင်တွင် ထိုနေ့အတွက် ပထမဆုံးအကြိမ် တွေ့ဆုံသောအခါ သုံးသည်။",
            "km": "ប្រើនៅពេលជួបនរណាម្នាក់នៅពេលព្រឹក ឬនៅពេលជួបនរណាម្នាក់ជាលើកដំបូងនៅកន្លែងធ្វើការនៅថ្ងៃនោះ។",
            "ne": "बिहान कसैलाई भेट्दा वा कार्यस्थलमा त्यस दिन पहिलो पटक कसैलाई भेट्दा प्रयोग गरिन्छ।",
            "mn": "Өглөө хүн тааралдах, эсвэл ажлын байран дээр тухайн өдөр анх удаа хүнтэй уулзах үедээ хэрэглэнэ.",
            "si": "උදෑසන කෙනෙකු හමුවන විට හෝ රැකියා ස්ථානයේදී එදින පළමු වරට කෙනෙකු හමුවන විට භාවිතා වේ.",
            "bn": "সকালে কারও সাথে দেখা হলে বা কর্মক্ষেত্রে সেই দিন প্রথমবারের মতো কারও সাথে দেখা হলে ব্যবহৃত হয়।",
            "pt": "Usado ao encontrar alguém de manhã ou ao ver alguém pela primeira vez no dia no trabalho.",
            "es": "Se usa al encontrarse con alguien por la mañana, o al ver a alguien por primera vez en el día en el trabajo.",
            "fr": "Utilisé lors d'une rencontre le matin, ou lorsque vous voyez quelqu'un pour la première fois de la journée au travail.",
            "ru": "Используется при встрече с кем-либо утром или при первой за день встрече с человеком на работе.",
            "uk": "Використовується при зустрічі з кимось вранці або при першій за день зустрічі з людиною на роботі."
        },
        translations: {
            "en": "Good morning.", "zh-CN": "早上好。", "zh-TW": "早安。", "ko": "좋은 아침입니다. / 안녕하세요.", "vi": "Chào buổi sáng.", "tl": "Magandang umaga.", "id": "Selamat pagi.", "th": "อรุณสวัสดิ์ค่ะ/ครับ", "my": "မင်္ဂလာနံနက်ခင်းပါ။", "km": "អរុណសួស្តី។", "ne": "शुभ प्रभात।", "mn": "Өглөөний мэнд.", "si": "සුභ උදෑසනක්.", "bn": "শুভ সকাল।", "pt": "Bom dia.", "es": "Buenos días.", "fr": "Bonjour.", "ru": "Доброе утро.", "uk": "Доброго ранку."
        }
    },
    {
        id: "a1_s1_002", audio: "audio/a1_s1_002.mp3", title: "昼の挨拶 (Daytime Greeting)", category: "a1_scene1",
        japanese: "こんにちは。", target_speech: "こんにちは",
        ruby: { hiragana: "こんにちは。", romaji: "Konnichiwa." },
        context: {
            "ja": "昼間（午前11時頃から夕方頃まで）に人に会ったときに使います。",
            "en": "Used when meeting someone during the day (from around 11 AM to early evening).",
            "zh-CN": "白天（上午11点左右到傍晚）遇到别人时使用。",
            "zh-TW": "白天（上午11點左右到傍晚）遇到別人時使用。",
            "ko": "낮(오전 11시경부터 저녁 무렵까지)에 사람을 만났을 때 사용합니다.",
            "vi": "Dùng khi gặp ai đó vào ban ngày (từ khoảng 11 giờ sáng đến chiều tối).",
            "tl": "Ginagamit kapag may nakasalubong sa araw (mula bandang 11 ng umaga hanggang dapit-hapon).",
            "id": "Digunakan saat bertemu seseorang di siang hari (dari sekitar jam 11 pagi hingga sore hari).",
            "th": "ใช้เมื่อพบปะผู้คนในช่วงกลางวัน (ตั้งแต่ประมาณ 11.00 น. ถึงช่วงเย็น)",
            "my": "နေ့လည်ပိုင်း (နံနက် ၁၁ နာရီခန့်မှ ညနေပိုင်းအထိ) လူများနှင့်တွေ့ဆုံသောအခါ သုံးသည်။",
            "km": "ប្រើនៅពេលជួបនរណាម្នាក់នៅពេលថ្ងៃ (ពីម៉ោងប្រហែល 11 ព្រឹកដល់ពេលល្ងាច)។",
            "ne": "दिउँसो (बिहान ११ बजेदेखि साँझसम्म) कसैलाई भेट्दा प्रयोग गरिन्छ।",
            "mn": "Өдрийн цагаар (өглөөний 11 цагаас орой хүртэл) хүнтэй тааралдах үедээ хэрэглэнэ.",
            "si": "දහවල් කාලයේ (උදේ 11 සිට සවස දක්වා) කෙනෙකු හමුවන විට භාවිතා වේ.",
            "bn": "দিনের বেলায় (সকাল ১১টা থেকে সন্ধ্যা পর্যন্ত) কারও সাথে দেখা হলে ব্যবহৃত হয়।",
            "pt": "Usado ao encontrar alguém durante o dia (das 11h da manhã até o final da tarde).",
            "es": "Se usa al encontrarse con alguien durante el día (desde las 11 AM hasta el atardecer).",
            "fr": "Utilisé lors d'une rencontre en journée (d'environ 11h du matin jusqu'en fin d'après-midi).",
            "ru": "Используется при встрече с кем-либо днем (примерно с 11 утра до раннего вечера).",
            "uk": "Використовується при зустрічі з кимось вдень (приблизно з 11 ранку до раннього вечора)."
        },
        translations: {
            "en": "Hello / Good afternoon.", "zh-CN": "你好 / 下午好。", "zh-TW": "你好 / 下午好。", "ko": "안녕하세요.", "vi": "Xin chào / Chào buổi chiều.", "tl": "Magandang hapon.", "id": "Selamat siang.", "th": "สวัสดีค่ะ/ครับ (ตอนบ่าย)", "my": "မင်္ဂလာနေ့လည်ခင်းပါ။", "km": "សួស្តី។", "ne": "नमस्कार / शुभ दिउँसो।", "mn": "Өдрийн мэнд.", "si": "සුභ දහවලක්.", "bn": "নমস্কার / শুভ অপরাহ্ন।", "pt": "Boa tarde.", "es": "Buenas tardes.", "fr": "Bonjour / Bon après-midi.", "ru": "Добрый день.", "uk": "Добрий день."
        }
    },
    {
        id: "a1_s1_003", audio: "audio/a1_s1_003.mp3", title: "夜の挨拶 (Evening Greeting)", category: "a1_scene1",
        japanese: "こんばんは。", target_speech: "こんばんは",
        ruby: { hiragana: "こんばんは。", romaji: "Konbanwa." },
        context: {
            "ja": "暗くなり始めた夕方から夜にかけて、人に会ったときに使います。",
            "en": "Used when meeting someone from early evening as it gets dark, into the night.",
            "zh-CN": "从天色变暗的傍晚到晚上，遇到别人时使用。",
            "zh-TW": "從天色變暗的傍晚到晚上，遇到別人時使用。",
            "ko": "어두워지기 시작하는 저녁부터 밤 사이에 사람을 만났을 때 사용합니다.",
            "vi": "Dùng khi gặp ai đó từ lúc chập tối khi trời bắt đầu tối cho đến đêm.",
            "tl": "Ginagamit kapag may nakasalubong mula dapit-hapon kung kailan padilim na, hanggang gabi.",
            "id": "Digunakan saat bertemu seseorang dari sore hari saat mulai gelap, hingga malam hari.",
            "th": "ใช้เมื่อพบปะผู้คนตั้งแต่ช่วงเย็นที่เริ่มมืดจนถึงตอนกลางคืน",
            "my": "မှောင်စပျိုးသော ညနေပိုင်းမှ ညပိုင်းအတွင်း လူများနှင့်တွေ့ဆုံသောအခါ သုံးသည်။",
            "km": "ប្រើនៅពេលជួបនរណាម្នាក់ពីពេលល្ងាចដែលចាប់ផ្តើមងងឹតរហូតដល់យប់។",
            "ne": "अँध्यारो हुन थालेको साँझदेखि रातिसम्म कसैलाई भेट्दा प्रयोग गरिन्छ।",
            "mn": "Харанхуй болж эхлэх оройноос шөнө хүртэлх хугацаанд хүнтэй тааралдах үедээ хэрэглэнэ.",
            "si": "අඳුර වැටෙන සවස් කාලයේ සිට රාත්‍රිය දක්වා කෙනෙකු හමුවන විට භාවිතා වේ.",
            "bn": "সন্ধ্যা ঘনিয়ে আসার সময় থেকে রাত পর্যন্ত কারও সাথে দেখা হলে ব্যবহৃত হয়।",
            "pt": "Usado ao encontrar alguém do início da noite, quando começa a escurecer, até a noite.",
            "es": "Se usa al encontrarse con alguien desde el atardecer, cuando empieza a oscurecer, hasta la noche.",
            "fr": "Utilisé lors d'une rencontre à partir de la fin d'après-midi lorsque la nuit tombe, jusqu'au soir.",
            "ru": "Используется при встрече с кем-либо с раннего вечера, когда начинает темнеть, и до ночи.",
            "uk": "Використовується при зустрічі з кимось з раннього вечора, коли починає темніти, і до ночі."
        },
        translations: {
            "en": "Good evening.", "zh-CN": "晚上好。", "zh-TW": "晚上好。", "ko": "안녕하세요 (저녁 인사).", "vi": "Chào buổi tối.", "tl": "Magandang gabi.", "id": "Selamat malam.", "th": "สวัสดีค่ะ/ครับ (ตอนเย็น)", "my": "မင်္ဂလာညချမ်းပါ။", "km": "សាយ័ន្តសួស្តី។", "ne": "शुभ सन्ध्या।", "mn": "Оройн мэнд.", "si": "සුභ සැන්දෑවක්.", "bn": "শুভ সন্ধ্যা।", "pt": "Boa noite.", "es": "Buenas noches.", "fr": "Bonsoir.", "ru": "Добрый вечер.", "uk": "Добрий вечір."
        }
    },
    {
        id: "a1_s1_004", audio: "audio/a1_s1_004.mp3", title: "お礼を言う (Expressing Gratitude)", category: "a1_scene1",
        japanese: "ありがとうございます。", target_speech: "ありがとうございます",
        ruby: { hiragana: "ありがとうございます。", romaji: "Arigatou gozaimasu." },
        context: {
            "ja": "人に何かをしてもらったときや、感謝の気持ちを伝えるときに使います。",
            "en": "Used when someone does something for you, or to express gratitude.",
            "zh-CN": "别人为自己做了什么事，或者表达感谢之情时使用。",
            "zh-TW": "別人為自己做了什麼事，或者表達感謝之情時使用。",
            "ko": "다른 사람이 무언가를 해주었을 때나, 감사의 마음을 전할 때 사용합니다.",
            "vi": "Dùng khi được ai đó làm giúp việc gì hoặc khi muốn bày tỏ lòng biết ơn.",
            "tl": "Ginagamit kapag may ginawa ang isang tao para sa iyo, o para magpasalamat.",
            "id": "Digunakan saat seseorang melakukan sesuatu untuk Anda, atau untuk mengungkapkan rasa terima kasih.",
            "th": "ใช้เมื่อมีคนทำอะไรให้ หรือเมื่อต้องการแสดงความขอบคุณ",
            "my": "တစ်စုံတစ်ယောက်က မိမိအတွက် တစ်ခုခုလုပ်ပေးသောအခါ သို့မဟုတ် ကျေးဇူးတင်ကြောင်း ပြောကြားလိုသောအခါ သုံးသည်။",
            "km": "ប្រើនៅពេលមាននរណាម្នាក់ធ្វើអ្វីមួយសម្រាប់អ្នក ឬដើម្បីបង្ហាញការដឹងគុណ។",
            "ne": "कसैले तपाईंको लागि केही गरिदिँदा वा कृतज्ञता व्यक्त गर्नुपर्दा प्रयोग गरिन्छ।",
            "mn": "Хүн танд ямар нэгэн зүйл хийж өгөх, эсвэл талархсанаа илэрхийлэх үедээ хэрэглэнэ.",
            "si": "යමෙකු ඔබට යමක් කළ විට හෝ කෘතඥතාව ප්‍රකාශ කිරීමට භාවිතා වේ.",
            "bn": "কেউ আপনার জন্য কিছু করলে বা কৃতজ্ঞতা প্রকাশ করতে চাইলে ব্যবহৃত হয়।",
            "pt": "Usado quando alguém faz algo por você ou para expressar gratidão.",
            "es": "Se usa cuando alguien hace algo por ti, o para expresar gratitud.",
            "fr": "Utilisé lorsque quelqu'un fait quelque chose pour vous, ou pour exprimer de la gratitude.",
            "ru": "Используется, когда кто-то делает что-то для вас, или чтобы выразить благодарность.",
            "uk": "Використовується, коли хтось робить щось для вас, або щоб висловити вдячність."
        },
        translations: {
            "en": "Thank you very much.", "zh-CN": "非常感谢。", "zh-TW": "非常感謝。", "ko": "감사합니다.", "vi": "Cảm ơn rất nhiều.", "tl": "Maraming salamat.", "id": "Terima kasih banyak.", "th": "ขอบคุณมากค่ะ/ครับ", "my": "ကျေးဇူးတင်ပါတယ်။", "km": "សូមអរគុណច្រើន។", "ne": "धेरै धेरै धन्यवाद।", "mn": "Маш их баярлалаа.", "si": "බොහොම ස්තූතියි.", "bn": "আপনাকে অনেক ধন্যবাদ।", "pt": "Muito obrigado(a).", "es": "Muchas gracias.", "fr": "Merci beaucoup.", "ru": "Большое спасибо.", "uk": "Дуже дякую."
        }
    },
    {
        id: "a1_s1_005", audio: "audio/a1_s1_005.mp3", title: "謝る・声をかける (Apologizing / Calling Out)", category: "a1_scene1",
        japanese: "すみません。", target_speech: "すみません",
        ruby: { hiragana: "すみません。", romaji: "Sumimasen." },
        context: {
            "ja": "人に声をかけるとき、軽く謝るとき、またはちょっとした感謝を伝えるときに使います。",
            "en": "Used to call out to someone, apologize lightly, or express a small amount of gratitude.",
            "zh-CN": "向人搭话、轻轻道歉或表达一点谢意时使用。",
            "zh-TW": "向人搭話、輕輕道歉或表達一點謝意時使用。",
            "ko": "사람을 부를 때, 가볍게 사과할 때, 또는 가벼운 감사를 전할 때 사용합니다.",
            "vi": "Dùng khi gọi ai đó, xin lỗi nhẹ nhàng hoặc bày tỏ một chút lòng biết ơn.",
            "tl": "Ginagamit pangtawag ng pansin, paghingi ng paumanhin, o pagpapasalamat sa maliit na bagay.",
            "id": "Digunakan untuk memanggil seseorang, meminta maaf dengan ringan, atau mengungkapkan sedikit rasa terima kasih.",
            "th": "ใช้เมื่อเรียกคนอื่น ขอโทษแบบเบาๆ หรือแสดงความขอบคุณเล็กน้อย",
            "my": "လူများကိုခေါ်သောအခါ၊ ပေါ့ပေါ့ပါးပါး တောင်းပန်သောအခါ သို့မဟုတ် အနည်းငယ်ကျေးဇူးတင်ကြောင်း ပြောကြားလိုသောအခါ သုံးသည်။",
            "km": "ប្រើដើម្បីហៅនរណាម្នាក់ សុំទោសបន្តិចបន្តួច ឬបង្ហាញការដឹងគុណ។",
            "ne": "कसैलाई बोलाउँदा, सामान्य माफी माग्दा, वा सानो कुरामा धन्यवाद दिँदा प्रयोग गरिन्छ।",
            "mn": "Хүнийг дуудах, хөнгөн уучлалт гуйх, эсвэл бага зэрэг талархал илэрхийлэх үедээ хэрэглэнэ.",
            "si": "කෙනෙකුට කතා කිරීමට, සුළු සමාවක් ඉල්ලීමට හෝ සුළු කෘතඥතාවක් ප්‍රකාශ කිරීමට භාවිතා වේ.",
            "bn": "কাউকে ডাকার সময়, হালকাভাবে ক্ষমা চাইতে বা সামান্য কৃতজ্ঞতা প্রকাশ করতে ব্যবহৃত হয়।",
            "pt": "Usado para chamar alguém, pedir desculpas de forma leve ou expressar um pouco de gratidão.",
            "es": "Se usa para llamar a alguien, pedir una disculpa ligera o expresar un poco de gratitud.",
            "fr": "Utilisé pour interpeller quelqu'un, s'excuser légèrement, ou exprimer une petite gratitude.",
            "ru": "Используется, чтобы окликнуть кого-то, слегка извиниться или выразить небольшую благодарность.",
            "uk": "Використовується, щоб покликати когось, злегка вибачитися або висловити невелику вдячність."
        },
        translations: {
            "en": "Excuse me / I'm sorry.", "zh-CN": "不好意思 / 对不起。", "zh-TW": "不好意思 / 對不起。", "ko": "실례합니다 / 죄송합니다.", "vi": "Xin lỗi.", "tl": "Makikiraan / Pasensya na.", "id": "Permisi / Maaf.", "th": "ขอโทษค่ะ/ครับ", "my": "တောင်းပန်ပါတယ်။", "km": "សុំទោស។", "ne": "माफ गर्नुहोस्।", "mn": "Уучлаарай.", "si": "සමාවෙන්න.", "bn": "ক্ষমা করবেন / দুঃখিত।", "pt": "Com licença / Desculpe.", "es": "Disculpe / Lo siento.", "fr": "Excusez-moi / Je suis désolé(e).", "ru": "Извините.", "uk": "Перепрошую / Вибачте."
        }
    },
    {
        id: "a1_s1_006", audio: "audio/a1_s1_006.mp3", title: "ねぎらいの言葉 (Appreciation for Hard Work)", category: "a1_scene1",
        japanese: "おつかれさまでした。", target_speech: "おつかれさまでした",
        ruby: { hiragana: "おつかれさまでした。", romaji: "Otsukaresama deshita." },
        context: {
            "ja": "仕事や作業が終わったとき、または同僚が帰るときにねぎらいの気持ちで使います。",
            "en": "Used to show appreciation for someone's hard work when a task is finished, or when a colleague is leaving.",
            "zh-CN": "工作或作业结束时，或同事下班回家时，怀着慰劳的心情使用。",
            "zh-TW": "工作或作業結束時，或同事下班回家時，懷著慰勞的心情使用。",
            "ko": "일이나 작업이 끝났을 때, 또는 동료가 퇴근할 때 노고를 치하하는 마음으로 사용합니다.",
            "vi": "Dùng để động viên, ghi nhận công sức khi làm xong việc hoặc khi đồng nghiệp ra về.",
            "tl": "Ginagamit bilang pagpapahalaga sa pagod ng isang tao pagkatapos ng trabaho o kapag uuwi na ang katrabaho.",
            "id": "Digunakan untuk menghargai kerja keras seseorang saat pekerjaan selesai, atau saat rekan kerja pulang.",
            "th": "ใช้เพื่อแสดงความชื่นชมในความเหน็ดเหนื่อยเมื่อเลิกงาน หรือเมื่อเพื่อนร่วมงานกลับบ้าน",
            "my": "အလုပ် သို့မဟုတ် လုပ်ငန်းဆောင်တာများ ပြီးဆုံးသောအခါ သို့မဟုတ် လုပ်ဖော်ကိုင်ဖက်များ အိမ်ပြန်သောအခါ အသိအမှတ်ပြုသောအနေဖြင့် သုံးသည်။",
            "km": "ប្រើដើម្បីបង្ហាញការដឹងគុណចំពោះការខិតខំប្រឹងប្រែងនៅពេលបញ្ចប់ការងារ ឬនៅពេលមិត្តរួមការងារត្រឡប់ទៅវិញ។",
            "ne": "काम वा कार्य सकिएपछि, वा सहकर्मी घर फर्कंदा उनीहरूको मेहेनतको कदर गर्न प्रयोग गरिन्छ।",
            "mn": "Ажил, даалгавар дууссан үед, эсвэл хамтран ажиллагсад тарах үед хөдөлмөрийг нь үнэлж хэрэглэнэ.",
            "si": "වැඩ අවසන් වූ පසු හෝ සගයෙකු පිටව යන විට ඔවුන්ගේ මහන්සිය අගය කිරීමට භාවිතා වේ.",
            "bn": "কাজ শেষ হওয়ার পরে বা সহকর্মী বাড়ি ফেরার সময় কাজের প্রশংসা করতে ব্যবহৃত হয়।",
            "pt": "Usado para demonstrar apreço pelo trabalho duro de alguém quando uma tarefa termina, ou quando um colega vai embora.",
            "es": "Se usa para mostrar aprecio por el buen trabajo cuando termina una tarea, o cuando un colega se va.",
            "fr": "Utilisé pour montrer son appréciation du travail accompli lorsqu'une tâche est terminée, ou lorsqu'un collègue part.",
            "ru": "Используется, чтобы выразить признательность за хорошую работу по окончании задачи или когда коллега уходит.",
            "uk": "Використовується, щоб висловити вдячність за хорошу роботу після закінчення завдання, або коли колега йде."
        },
        translations: {
            "en": "Good work today / Thank you for your hard work.", "zh-CN": "辛苦了。", "zh-TW": "辛苦了。", "ko": "수고하셨습니다.", "vi": "Bạn đã vất vả rồi.", "tl": "Salamat sa magandang trabaho.", "id": "Terima kasih atas kerja kerasnya.", "th": "ขอบคุณที่เหน็ดเหนื่อยนะคะ/ครับ", "my": "ပင်ပန်းသွားပါပြီ။", "km": "អរគុណសម្រាប់ការខិតខំប្រឹងប្រែង។", "ne": "आजको कामको लागि धन्यवाद।", "mn": "Та сайн ажиллалаа.", "si": "අද හොඳට වැඩ කළා.", "bn": "আপনার কঠোর পরিশ্রমের জন্য ধন্যবাদ।", "pt": "Bom trabalho hoje.", "es": "Buen trabajo hoy.", "fr": "Bon travail aujourd'hui / Merci pour votre travail.", "ru": "Спасибо за хорошую работу.", "uk": "Дякую за вашу працю."
        }
    },
    {
        id: "a1_s1_007", audio: "audio/a1_s1_007.mp3", title: "先に帰ることを伝える (Leaving Early)", category: "a1_scene1",
        japanese: "お先に失礼します。", target_speech: "おさきにしつれいします",
        ruby: { hiragana: "お<ruby>先<rt>さき</rt></ruby>に<ruby>失礼<rt>しつれい</rt></ruby>します。", romaji: "Osakini shitsurei shimasu." },
        context: {
            "ja": "職場などで、他の人より先に帰るときに使います。",
            "en": "Used when leaving work or a gathering before others.",
            "zh-CN": "在职场等场合，比其他人先下班回家时使用。",
            "zh-TW": "在職場等場合，比其他人先下班回家時使用。",
            "ko": "직장 등에서 다른 사람보다 먼저 퇴근할 때 사용합니다.",
            "vi": "Dùng khi rời khỏi nơi làm việc hoặc chỗ tập trung trước những người khác.",
            "tl": "Ginagamit kapag mauunang umuwi kaysa sa iba sa trabaho at iba pang lugar.",
            "id": "Digunakan saat pulang lebih dulu dari orang lain di tempat kerja atau sejenisnya.",
            "th": "ใช้เมื่อกลับบ้านก่อนคนอื่นในที่ทำงาน ฯลฯ",
            "my": "လုပ်ငန်းခွင် စသည်တို့တွင် အခြားသူများထက် အရင်ပြန်သောအခါ သုံးသည်။",
            "km": "ប្រើនៅពេលត្រឡប់ទៅវិញមុនអ្នកដទៃនៅកន្លែងធ្វើការជាដើម។",
            "ne": "कार्यस्थल आदिमा अरु भन्दा पहिले घर फर्कंदा प्रयोग गरिन्छ।",
            "mn": "Ажлын байр зэрэгт бусдаас түрүүлж тарах үедээ хэрэглэнэ.",
            "si": "රැකියා ස්ථානයකදී අනෙක් අයට පෙර පිටව යන විට භාවිතා වේ.",
            "bn": "কর্মক্ষেত্রে অন্যদের আগে বাড়ি ফেরার সময় ব্যবহৃত হয়।",
            "pt": "Usado ao sair do trabalho ou de uma reunião antes das outras pessoas.",
            "es": "Se usa al salir del trabajo o de una reunión antes que los demás.",
            "fr": "Utilisé pour s'excuser de quitter le travail ou une réunion avant les autres.",
            "ru": "Используется при уходе с работы или со встречи раньше других.",
            "uk": "Використовується, коли йдете з роботи або із зустрічі раніше за інших."
        },
        translations: {
            "en": "Excuse me for leaving before you.", "zh-CN": "我先下班了 / 失陪了。", "zh-TW": "我先下班了 / 失陪了。", "ko": "먼저 실례하겠습니다 / 먼저 들어가겠습니다.", "vi": "Tôi xin phép về trước.", "tl": "Mauuna na po ako.", "id": "Permisi, saya pulang duluan.", "th": "ขอตัวกลับก่อนนะคะ/ครับ", "my": "အရင်ပြန်ခွင့်ပြုပါ။", "km": "សុំទោសដែលខ្ញុំចេញទៅមុន។", "ne": "म पहिले जाँदैछु, माफ गर्नुहोस्।", "mn": "Би түрүүлээд явлаа.", "si": "මම කලින් යනවා, සමාවෙන්න.", "bn": "আগে যাওয়ার জন্য ক্ষমা চাইছি।", "pt": "Com licença, vou sair mais cedo.", "es": "Con permiso, me retiro antes.", "fr": "Je vous demande pardon, je pars avant vous.", "ru": "Извините, я ухожу раньше вас.", "uk": "Перепрошую, я піду раніше."
        }
    },
    {
        id: "a1_s1_008", audio: "audio/a1_s1_008.mp3", title: "初めての挨拶 (First Time Meeting)", category: "a1_scene1",
        japanese: "はじめまして。", target_speech: "はじめまして",
        ruby: { hiragana: "はじめまして。", romaji: "Hajimemashite." },
        context: {
            "ja": "初めて会う人に自己紹介をするとき、一番最初に使います。",
            "en": "Used at the very beginning of a self-introduction to someone you are meeting for the first time.",
            "zh-CN": "向初次见面的人自我介绍时，最开始使用的一句话。",
            "zh-TW": "向初次見面的人自我介紹時，最開始使用的一句話。",
            "ko": "처음 만나는 사람에게 자기소개를 할 때 가장 먼저 사용합니다.",
            "vi": "Dùng ở phần đầu của lời tự giới thiệu với người mới gặp lần đầu.",
            "tl": "Ginagamit sa pinakaumpisa ng pagpapakilala sa taong ngayon mo lang nakita.",
            "id": "Digunakan paling awal saat memperkenalkan diri kepada orang yang baru pertama kali ditemui.",
            "th": "ใช้เป็นคำแรกเมื่อแนะนำตัวกับคนที่เพิ่งพบกันครั้งแรก",
            "my": "ပထမဆုံးအကြိမ် တွေ့ဆုံသူအား မိမိကိုယ်ကိုမိတ်ဆက်ရာတွင် အစပထမဆုံးအနေဖြင့် သုံးသည်။",
            "km": "ប្រើដំបូងបំផុតនៅពេលណែនាំខ្លួនអ្នកទៅកាន់នរណាម្នាក់ដែលអ្នកជួបជាលើកដំបូង។",
            "ne": "पहिलो पटक भेटेको व्यक्तिलाई आफ्नो परिचय दिँदा सबैभन्दा सुरुमा प्रयोग गरिन्छ।",
            "mn": "Анх удаа уулзаж буй хүнд өөрийгөө танилцуулахдаа хамгийн түрүүнд хэрэглэнэ.",
            "si": "පළමු වරට හමුවන කෙනෙකුට ඔබව හඳුන්වා දීමේදී මුලින්ම භාවිතා වේ.",
            "bn": "প্রথমবার কারও সাথে দেখা হলে নিজেকে পরিচয় করিয়ে দেওয়ার একেবারে শুরুতে ব্যবহৃত হয়।",
            "pt": "Usado no início de uma apresentação pessoal a alguém que você está conhecendo pela primeira vez.",
            "es": "Se usa al principio de una presentación personal a alguien que conoces por primera vez.",
            "fr": "Utilisé au tout début d'une présentation à quelqu'un que l'on rencontre pour la première fois.",
            "ru": "Используется в самом начале при знакомстве с человеком, которого вы видите впервые.",
            "uk": "Використовується на самому початку при знайомстві з людиною, яку ви бачите вперше."
        },
        translations: {
            "en": "Nice to meet you.", "zh-CN": "初次见面。", "zh-TW": "初次見面。", "ko": "처음 뵙겠습니다.", "vi": "Rất vui được gặp bạn.", "tl": "Ikinagagalak kong makilala ka.", "id": "Senang bertemu dengan Anda.", "th": "ยินดีที่ได้รู้จักค่ะ/ครับ", "my": "တွေ့ရတာဝမ်းသာပါတယ်။", "km": "រីករាយដែលបានស្គាល់អ្នក។", "ne": "तपाईंलाई भेटेर खुसी लाग्यो।", "mn": "Танилцахад таатай байна.", "si": "ඔබව හමුවීම සතුටක්.", "bn": "আপনার সাথে দেখা হয়ে ভালো লাগলো।", "pt": "Muito prazer.", "es": "Mucho gusto.", "fr": "Enchanté(e).", "ru": "Приятно познакомиться.", "uk": "Приємно познайомитися."
        }
    },
    {
        id: "a1_s1_009", audio: "audio/a1_s1_009.mp3", title: "よろしくと言う (Asking for Favor / Closing Intro)", category: "a1_scene1",
        japanese: "よろしくお願いします。", target_speech: "よろしくおねがいします",
        ruby: { hiragana: "よろしくお<ruby>願<rt>ねが</rt></ruby>いします。", romaji: "Yoroshiku onegai shimasu." },
        context: {
            "ja": "自己紹介の最後や、誰かに何かをお願いするときに使います。",
            "en": "Used at the end of a self-introduction, or when asking someone for a favor.",
            "zh-CN": "自我介绍的最后，或者拜托别人事情时使用。",
            "zh-TW": "自我介紹的最後，或者拜託別人事情時使用。",
            "ko": "자기소개의 마지막이나, 누군가에게 무언가를 부탁할 때 사용합니다.",
            "vi": "Dùng ở cuối phần tự giới thiệu hoặc khi nhờ ai đó làm việc gì.",
            "tl": "Ginagamit sa huli ng pagpapakilala, o kapag may hinihiling sa isang tao.",
            "id": "Digunakan di akhir perkenalan diri, atau saat meminta tolong sesuatu kepada seseorang.",
            "th": "ใช้ตอนท้ายของการแนะนำตัว หรือเมื่อขอร้องบางสิ่งบางอย่างจากใครสักคน",
            "my": "မိမိကိုယ်ကိုမိတ်ဆက်ခြင်း၏ အဆုံးတွင် သို့မဟုတ် တစ်စုံတစ်ယောက်အား အကူအညီတောင်းသောအခါ သုံးသည်။",
            "km": "ប្រើនៅចុងបញ្ចប់នៃការណែនាំខ្លួន ឬនៅពេលសុំនរណាម្នាក់ឲ្យជួយ។",
            "ne": "आफ्नो परिचयको अन्त्यमा वा कसैलाई केही अनुरोध गर्दा प्रयोग गरिन्छ।",
            "mn": "Өөрийгөө танилцуулж дуусах үедээ, эсвэл хүнээс ямар нэгэн зүйл хүсэх үедээ хэрэглэнэ.",
            "si": "තමන්ව හඳුන්වා දීම අවසානයේ හෝ යමෙකුගෙන් යමක් ඉල්ලා සිටින විට භාවිතා වේ.",
            "bn": "নিজের পরিচয়ের শেষে বা কাউকে কোনও অনুরোধ করার সময় ব্যবহৃত হয়।",
            "pt": "Usado no final de uma apresentação pessoal, ou ao pedir um favor a alguém.",
            "es": "Se usa al final de una presentación personal, o al pedirle un favor a alguien.",
            "fr": "Utilisé à la fin d'une présentation ou lorsque vous demandez un service à quelqu'un.",
            "ru": "Используется в конце представления или когда вы просите кого-то об одолжении.",
            "uk": "Використовується наприкінці представлення або коли ви просите когось про послугу."
        },
        translations: {
            "en": "Please to meet you / Please treat me well.", "zh-CN": "请多关照。", "zh-TW": "請多指教。", "ko": "잘 부탁드립니다.", "vi": "Rất mong được giúp đỡ.", "tl": "Sana ay magkasundo tayo / Pakiusap.", "id": "Mohon bantuannya / Salam kenal.", "th": "ฝากเนื้อฝากตัวด้วยนะคะ/ครับ", "my": "ကူညီစောင့်ရှောက်ပေးပါ။", "km": "សូមមេត្តាជួយខ្ញុំផង។", "ne": "कृपया मलाई सहयोग गर्नुहोला।", "mn": "Тусалж дэмжээрэй.", "si": "කරුණාකර මට උදව් කරන්න.", "bn": "দয়া করে আমাকে সাহায্য করবেন।", "pt": "Conto com a sua colaboração.", "es": "Cuento con su apoyo / Encantado.", "fr": "Je compte sur vous / Ravi de vous connaître.", "ru": "Прошу любить и жаловать / Заранее спасибо.", "uk": "Сподіваюся на співпрацю."
        }
    },
    {
        id: "a1_s1_010", audio: "audio/a1_s1_010.mp3", title: "同意する (Agreeing)", category: "a1_scene1",
        japanese: "はい、そうです。", target_speech: "はい、そうです",
        ruby: { hiragana: "はい、そうです。", romaji: "Hai, sou desu." },
        context: {
            "ja": "相手の言ったことが正しいときや、同意するときに使います。",
            "en": "Used when what the other person said is correct, or to show agreement.",
            "zh-CN": "对方说得对，或者表示同意时使用。",
            "zh-TW": "對方說得對，或者表示同意時使用。",
            "ko": "상대방의 말이 맞을 때나 동의할 때 사용합니다.",
            "vi": "Dùng khi điều người đối diện nói là đúng hoặc khi muốn bày tỏ sự đồng ý.",
            "tl": "Ginagamit kapag tama ang sinabi ng kausap o kapag sumasang-ayon ka.",
            "id": "Digunakan saat perkataan lawan bicara benar, atau untuk menunjukkan persetujuan.",
            "th": "ใช้เมื่อสิ่งที่อีกฝ่ายพูดนั้นถูกต้อง หรือเมื่อต้องการแสดงความเห็นด้วย",
            "my": "တစ်ဖက်လူပြောသည့်စကား မှန်ကန်သောအခါ သို့မဟုတ် သဘောတူသောအခါ သုံးသည်။",
            "km": "ប្រើនៅពេលដែលអ្វីដែលអ្នកដទៃនិយាយត្រឹមត្រូវ ឬដើម្បីបង្ហាញការយល់ព្រម។",
            "ne": "अर्को व्यक्तिले भनेको कुरा सही हुँदा वा सहमत हुँदा प्रयोग गरिन्छ।",
            "mn": "Нөгөө хүний хэлсэн зүйл зөв байх үед, эсвэл санал нийлэх үедээ хэрэглэнэ.",
            "si": "අනෙක් පුද්ගලයා පැවසූ දෙය නිවැරදි වූ විට හෝ එකඟතාවය ප්‍රකාශ කිරීමට භාවිතා වේ.",
            "bn": "অন্য ব্যক্তির কথা সঠিক হলে বা সম্মতি প্রকাশ করতে ব্যবহৃত হয়।",
            "pt": "Usado quando o que a outra pessoa disse está correto, ou para demonstrar concordância.",
            "es": "Se usa cuando lo que dijo la otra persona es correcto, o para mostrar acuerdo.",
            "fr": "Utilisé lorsque ce que dit l'interlocuteur est correct, ou pour exprimer son accord.",
            "ru": "Используется, когда слова собеседника верны, или чтобы выразить согласие.",
            "uk": "Використовується, коли слова співрозмовника вірні, або щоб висловити згоду."
        },
        translations: {
            "en": "Yes, that's right.", "zh-CN": "是的，没错。", "zh-TW": "是的，沒錯。", "ko": "네, 맞습니다.", "vi": "Vâng, đúng vậy.", "tl": "Opo, tama po.", "id": "Ya, benar.", "th": "ใช่ค่ะ/ครับ", "my": "ဟုတ်ကဲ့၊ မှန်ပါတယ်။", "km": "បាទ/ចាស ត្រឹមត្រូវហើយ។", "ne": "हो, त्यही हो।", "mn": "Тийм ээ, зөв.", "si": "ඔව්, ඒක හරි.", "bn": "হ্যাঁ, ঠিক তাই।", "pt": "Sim, é isso mesmo.", "es": "Sí, así es.", "fr": "Oui, c'est exact.", "ru": "Да, это так.", "uk": "Так, це правильно."
        }
    }
];