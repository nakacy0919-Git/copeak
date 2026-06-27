// ==========================================
// Japeak 教材データベース（部活動・委員会）
// 対応言語: 19言語 + 日本語
// ==========================================
const japeakClubsData = [
    {
        id: "japeak_clb_001", audio: "audio/japeak_clb_001.mp3", title: "部活の挨拶 (Club Greeting)", category: "clubs_committees",
        japanese: "お疲れ様です。", target_speech: "おつかれさまです",
        ruby: { hiragana: "お<ruby>疲<rt>つか</rt></ruby>れ<ruby>様<rt>さま</rt></ruby>です。", romaji: "Otsukaresama desu." },
        context: {
            "ja": "部活や委員会で、先輩や友達に会った時や、活動中にすれ違う時に使うとても便利な挨拶です。",
            "en": "A very useful greeting used when meeting or passing by seniors and friends during club or committee activities.",
            "zh-CN": "在社团或委员会遇到前辈和朋友，或活动中擦肩而过时使用的非常方便的问候语。",
            "zh-TW": "在社團或委員會遇到前輩和朋友，或活動中擦肩而過時使用的非常方便的問候語。",
            "ko": "동아리나 위원회에서 선배나 친구를 만났을 때나 활동 중 스쳐 지나갈 때 사용하는 아주 유용한 인사입니다.",
            "vi": "Một câu chào rất hữu ích dùng khi gặp hoặc đi ngang qua đàn anh và bạn bè trong câu lạc bộ.",
            "tl": "Isang napaka-kapaki-pakinabang na pagbati kapag nakakasalubong ang mga senior at kaibigan sa club.",
            "id": "Salam yang sangat berguna saat bertemu atau berpapasan dengan senior dan teman di klub.",
            "th": "คำทักทายที่มีประโยชน์มาก ใช้เมื่อเจอรุ่นพี่หรือเพื่อนในชมรม หรือตอนเดินสวนกันระหว่างทำกิจกรรม",
            "my": "ကလပ် သို့မဟုတ် ကော်မတီတွင် စီနီယာများ၊ သူငယ်ချင်းများနှင့် တွေ့သောအခါ သို့မဟုတ် ဖြတ်သွားသောအခါ သုံးသော အလွန်အသုံးဝင်သည့် နှုတ်ခွန်းဆက်စကားဖြစ်သည်။",
            "km": "ជាការស្វាគមន៍ដ៏មានប្រយោជន៍បំផុត ប្រើនៅពេលជួបសិស្សច្បង និងមិត្តភក្តិ ឬពេលដើរកាត់គ្នាក្នុងក្លឹប។",
            "ne": "क्लब वा समितिको काम गर्दा सिनियर वा साथीहरूलाई भेट्दा प्रयोग गरिने धेरै उपयोगी अभिवादन।",
            "mn": "Дугуйлан, зөвлөлийн үйл ажиллагааны үеэр ахлах сурагч эсвэл найзтайгаа таарах, зөрж өнгөрөхдөө хэрэглэдэг маш хэрэгтэй мэндчилгээ юм.",
            "si": "සමාජ ශාලා හෝ කමිටු ක්‍රියාකාරකම් අතරතුර ජ්‍යෙෂ්ඨයන් සහ මිතුරන් මුණගැසෙන විට හෝ පසුකර යන විට භාවිතා කරන ඉතා ප්‍රයෝජනවත් සුබ පැතුමකි.",
            "bn": "ক্লাব বা কমিটির কাজ করার সময় সিনিয়র বা বন্ধুদের সাথে দেখা হলে বা পাশ দিয়ে যাওয়ার সময় ব্যবহৃত একটি খুব দরকারী অভিবাদন।",
            "pt": "Uma saudação muito útil usada ao encontrar veteranos e amigos durante as atividades do clube.",
            "es": "Un saludo muy útil que se usa al encontrarse o cruzarse con compañeros mayores y amigos en el club.",
            "fr": "Une salutation très utile utilisée lorsque l'on rencontre ou croise des aînés et des amis lors des activités du club.",
            "ru": "Очень полезное приветствие, которое используется при встрече со старшими товарищами и друзьями во время занятий в клубе.",
            "uk": "Дуже корисне привітання, яке використовується під час зустрічі зі старшими учнями та друзями на заняттях у клубі."
        },
        translations: {
            "en": "Hello. / Good work.", "zh-CN": "辛苦了。", "zh-TW": "辛苦了。", "ko": "수고하십니다.", "vi": "Chào anh/chị/bạn. / Mọi người vất vả rồi.", "tl": "Hello po. / Magandang gawain.", "id": "Halo. / Selamat bekerja.", "th": "สวัสดีค่ะ/ครับ (เหนื่อยหน่อยนะคะ/ครับ)", "my": "ပင်ပန်းနေပြီလား။ (အလုပ်ကြိုးစားပါတယ်)", "km": "សួស្តី / ធ្វើការបានល្អ។", "ne": "नमस्ते / राम्रो काम।", "mn": "Сайн байна уу / Ажлын амжилт.", "si": "ආයුබෝවන්. / හොඳ වැඩක්.", "bn": "হ্যালো। / ভালো কাজ।", "pt": "Olá. / Bom trabalho.", "es": "Hola. / Buen trabajo.", "fr": "Bonjour. / Bon travail.", "ru": "Здравствуйте. / Хорошая работа.", "uk": "Добрий день. / Гарна робота."
        }
    },
    {
        id: "japeak_clb_002", audio: "audio/japeak_clb_002.mp3", title: "指示を仰ぐ (Asking What to Do)", category: "clubs_committees",
        japanese: "何をすればいいですか。", target_speech: "なにをすればいいですか",
        ruby: { hiragana: "<ruby>何<rt>なに</rt></ruby>をすればいいですか。", romaji: "Nani o sureba ii desu ka." },
        context: {
            "ja": "部活や委員会で、自分の仕事や役割が分からない時に、先輩や先生に指示をもらう言葉です。",
            "en": "Used to ask a senior or teacher for instructions when you don't know your task or role.",
            "zh-CN": "在社团或委员会中不知道自己的工作或任务时，向前辈或老师请示的用语。",
            "zh-TW": "在社團或委員會中不知道自己的工作或任務時，向前輩或老師請示的用語。",
            "ko": "동아리나 위원회에서 자신의 일이나 역할을 모를 때, 선배나 선생님에게 지시를 받는 말입니다.",
            "vi": "Dùng để hỏi đàn anh hoặc giáo viên xem mình cần làm gì khi không rõ nhiệm vụ.",
            "tl": "Ginagamit upang humingi ng utos sa senior o guro kapag hindi mo alam ang iyong gagawin.",
            "id": "Digunakan untuk meminta instruksi dari senior atau guru saat Anda tidak tahu tugas Anda.",
            "th": "ใช้ขอคำแนะนำจากรุ่นพี่หรือคุณครูเมื่อไม่รู้ว่าต้องทำหน้าที่อะไรในชมรมหรือคณะกรรมการ",
            "my": "ကလပ်တွင် မိမိတာဝန်ကို မသိသောအခါ စီနီယာ သို့မဟုတ် ဆရာ့ထံမှ ညွှန်ကြားချက်တောင်းရန် သုံးသည်။",
            "km": "ប្រើដើម្បីសុំការណែនាំពីសិស្សច្បង ឬគ្រូ ពេលអ្នកមិនដឹងពីតួនាទីរបស់អ្នកនៅក្នុងក្លឹប។",
            "ne": "आफ्नो काम वा भूमिका थाहा नभएको बेला सिनियर वा शिक्षकसँग निर्देशन माग्न प्रयोग गरिन्छ।",
            "mn": "Дугуйлан болон зөвлөл дээр хийх ажил, үүргээ мэдэхгүй үедээ ахлах сурагч эсвэл багшаас зааварчилгаа авах үг юм.",
            "si": "ඔබේ රාජකාරිය හෝ කාර්යභාරය නොදන්නා විට ජ්‍යෙෂ්ඨයෙකුගෙන් හෝ ගුරුවරයෙකුගෙන් උපදෙස් ඉල්ලා සිටීමට භාවිතා වේ.",
            "bn": "নিজের কাজ বা ভূমিকা না জানলে সিনিয়র বা শিক্ষকের কাছে নির্দেশনা চাইতে ব্যবহৃত হয়।",
            "pt": "Usado para pedir instruções a um veterano ou professor quando você não sabe sua tarefa.",
            "es": "Se usa para pedir instrucciones a un compañero mayor o profesor cuando no sabes qué hacer.",
            "fr": "Utilisé pour demander des instructions à un aîné ou à un professeur lorsque vous ne connaissez pas votre tâche.",
            "ru": "Используется, чтобы спросить у старшего или учителя, что нужно делать, если вы не знаете свою задачу.",
            "uk": "Використовується, щоб запитати у старшого або вчителя, що потрібно робити, якщо ви не знаєте своє завдання."
        },
        translations: {
            "en": "What should I do?", "zh-CN": "我该做什么呢？", "zh-TW": "我該做什麼呢？", "ko": "무엇을 하면 될까요?", "vi": "Em nên làm gì ạ?", "tl": "Ano po ang dapat kong gawin?", "id": "Apa yang harus saya lakukan?", "th": "หนู/ผมควรทำอะไรดีคะ/ครับ?", "my": "ကျွန်တော်/ကျွန်မ ဘာလုပ်ရမလဲ။", "km": "តើខ្ញុំគួរធ្វើអ្វី?", "ne": "मैले के गर्नुपर्छ?", "mn": "Би юу хийх хэрэгтэй вэ?", "si": "මම කුමක් කළ යුතුද?", "bn": "আমার কী করা উচিত?", "pt": "O que devo fazer?", "es": "¿Qué debo hacer?", "fr": "Que dois-je faire ?", "ru": "Что мне нужно делать?", "uk": "Що мені слід робити?"
        }
    },
    {
        id: "japeak_clb_003", audio: "audio/japeak_clb_003.mp3", title: "手伝いを申し出る (Offering Help)", category: "clubs_committees",
        japanese: "準備を手伝います。", target_speech: "じゅんびをてつだいます",
        ruby: { hiragana: "<ruby>準備<rt>じゅんび</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>います。", romaji: "Junbi o tetsudaimasu." },
        context: {
            "ja": "練習の準備や、委員会の仕事などを自分から進んで手伝う時に使う、とても親切な言葉です。",
            "en": "A very kind phrase used when offering to help with preparations for practice or committee work.",
            "zh-CN": "主动帮忙做练习准备或委员会工作时使用的非常体贴的用语。",
            "zh-TW": "主動幫忙做練習準備或委員會工作時使用的非常體貼的用語。",
            "ko": "연습 준비나 위원회 일 등을 스스로 나서서 도울 때 사용하는 아주 친절한 말입니다.",
            "vi": "Một câu nói rất tử tế dùng khi bạn chủ động đề nghị giúp đỡ chuẩn bị cho buổi tập.",
            "tl": "Isang napakabait na parirala kapag nag-aalok ng tulong sa paghahanda sa practice.",
            "id": "Kalimat yang sangat baik digunakan saat menawarkan bantuan untuk persiapan latihan.",
            "th": "คำพูดที่แสดงความมีน้ำใจ ใช้เมื่อเสนอตัวช่วยเตรียมการฝึกซ้อมหรืองานของคณะกรรมการ",
            "my": "လေ့ကျင့်ရေး သို့မဟုတ် ကော်မတီအလုပ်အတွက် ပြင်ဆင်မှုများကို ကူညီပေးမည်ဟု ကမ်းလှမ်းသောအခါ သုံးသည့် အလွန်ကြင်နာသောစကားဖြစ်သည်။",
            "km": "ជាពាក្យដ៏មានចិត្តល្អ ប្រើនៅពេលស្នើជួយរៀបចំការហ្វឹកហាត់ ឬការងារគណៈកម្មការ។",
            "ne": "अभ्यासको तयारी वा काममा मद्दत गर्न प्रस्ताव गर्दा प्रयोग गरिने धेरै राम्रो वाक्यांश।",
            "mn": "Бэлтгэл сургуулилалт болон зөвлөлийн ажилд туслахыг санал болгох үед хэрэглэдэг маш эелдэг үг юм.",
            "si": "පුහුණුවීම් හෝ කමිටු වැඩ සඳහා සූදානම් වීමට උදව් කිරීමට ඉදිරිපත් වන විට භාවිතා කරන ඉතා කාරුණික වාක්‍ය ඛණ්ඩයකි.",
            "bn": "অনুশীলন বা কমিটির কাজের প্রস্তুতিতে সাহায্য করার প্রস্তাব দেওয়ার সময় ব্যবহৃত একটি খুব সদয় বাক্য।",
            "pt": "Uma frase muito gentil usada ao se oferecer para ajudar nos preparativos do treino.",
            "es": "Una frase muy amable que se usa para ofrecer ayuda con los preparativos de la práctica.",
            "fr": "Une phrase très gentille utilisée pour proposer son aide pour les préparatifs de l'entraînement ou du comité.",
            "ru": "Очень вежливая фраза, которая используется, когда вы предлагаете помощь в подготовке к тренировке или работе.",
            "uk": "Дуже ввічлива фраза, яка використовується, коли ви пропонуєте допомогу в підготовці до тренування або роботи."
        },
        translations: {
            "en": "I will help with the preparation.", "zh-CN": "我来帮忙准备。", "zh-TW": "我來幫忙準備。", "ko": "준비를 돕겠습니다.", "vi": "Mình sẽ giúp chuẩn bị.", "tl": "Tutulong po ako sa paghahanda.", "id": "Saya akan membantu persiapannya.", "th": "จะช่วยเตรียมของให้นะคะ/ครับ", "my": "ပြင်ဆင်မှုကို ကူညီပေးပါမယ်။", "km": "ខ្ញុំនឹងជួយរៀបចំ។", "ne": "म तयारी गर्न मद्दत गर्नेछु।", "mn": "Би бэлтгэл ажилд тусалъя.", "si": "මම සූදානම් වීමට උදව් කරන්නම්.", "bn": "আমি প্রস্তুতিতে সাহায্য করব।", "pt": "Eu ajudarei na preparação.", "es": "Ayudaré con la preparación.", "fr": "Je vais aider à la préparation.", "ru": "Я помогу с подготовкой.", "uk": "Я допоможу з підготовкою."
        }
    },
    {
        id: "japeak_clb_004", audio: "audio/japeak_clb_004.mp3", title: "やり方を聞く (Asking How)", category: "clubs_committees",
        japanese: "やり方を教えてください。", target_speech: "やりかたをおしえてください",
        ruby: { hiragana: "やり<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。", romaji: "Yarikata o oshiete kudasai." },
        context: {
            "ja": "スポーツの道具の使い方や、仕事のルールが分からない時に、教えてもらうためのお願いです。",
            "en": "A request used when you don't know how to use sports equipment or the rules of a task.",
            "zh-CN": "不知道运动器材的用法或工作规则时，请求对方教自己的用语。",
            "zh-TW": "不知道運動器材的用法或工作規則時，請求對方教自己的用語。",
            "ko": "스포츠 도구의 사용법이나 일의 규칙을 모를 때 가르쳐 달라고 부탁하는 말입니다.",
            "vi": "Dùng để nhờ hướng dẫn khi bạn không biết cách dùng dụng cụ thể thao hoặc luật làm việc.",
            "tl": "Ginagamit kapag hindi mo alam kung paano gamitin ang isang gamit o gawin ang isang gawain.",
            "id": "Permintaan yang digunakan saat Anda tidak tahu cara menggunakan alat olahraga atau aturan tugas.",
            "th": "ใช้ขอให้ช่วยสอนเมื่อไม่รู้วิธีใช้อุปกรณ์กีฬาหรือกฎเกณฑ์การทำงาน",
            "my": "အားကစားပစ္စည်း အသုံးပြုပုံ သို့မဟုတ် အလုပ်စည်းမျဉ်းများကို မသိသောအခါ သင်ပေးရန် တောင်းဆိုချက်ဖြစ်သည်။",
            "km": "ការស្នើសុំប្រើនៅពេលអ្នកមិនដឹងពីរបៀបប្រើប្រាស់ឧបករណ៍កីឡា ឬច្បាប់នៃការងារ។",
            "ne": "खेलकुदका सामान प्रयोग गर्न वा कामको नियम थाहा नहुँदा सिकाउन अनुरोध गर्दा प्रयोग गरिन्छ।",
            "mn": "Спортын хэрэгсэл хэрхэн ашиглах, ажлын дүрэм журмыг мэдэхгүй үедээ зааж өгөхийг хүсэхэд хэрэглэнэ.",
            "si": "ක්‍රීඩා උපකරණ භාවිතා කරන ආකාරය හෝ කාර්යයක නීති නොදන්නා විට ඉල්ලා සිටීමක්.",
            "bn": "খেলাধুলার সরঞ্জাম কীভাবে ব্যবহার করতে হয় বা কাজের নিয়ম না জানলে শেখানোর অনুরোধ।",
            "pt": "Um pedido usado quando você não sabe como usar um equipamento ou as regras de uma tarefa.",
            "es": "Se usa cuando no sabes cómo usar el equipo de deportes o las reglas de una tarea.",
            "fr": "Une demande utilisée lorsque vous ne savez pas comment utiliser un équipement sportif ou les règles d'une tâche.",
            "ru": "Просьба, которая используется, когда вы не знаете, как использовать спортивный инвентарь или правила выполнения задания.",
            "uk": "Прохання, яке використовується, коли ви не знаєте, як використовувати спортивний інвентар або правила виконання завдання."
        },
        translations: {
            "en": "Please teach me how to do it.", "zh-CN": "请教我怎么做。", "zh-TW": "請教我怎麼做。", "ko": "하는 방법을 가르쳐 주세요.", "vi": "Hãy chỉ cho mình cách làm với.", "tl": "Pakituro po sa akin kung paano gawin.", "id": "Tolong ajari saya cara melakukannya.", "th": "ช่วยสอนวิธีทำหน่อยได้ไหมคะ/ครับ?", "my": "လုပ်နည်းကို သင်ပေးပါ။", "km": "សូមបង្រៀនខ្ញុំពីរបៀបធ្វើវា។", "ne": "कृपया मलाई यो कसरी गर्ने सिकाउनुहोस्।", "mn": "Хэрхэн хийхийг зааж өгнө үү.", "si": "කරුණාකර මෙය කරන ආකාරය මට කියා දෙන්න.", "bn": "দয়া করে আমাকে এটি কীভাবে করতে হয় তা শিখিয়ে দিন।", "pt": "Por favor, me ensine como fazer isso.", "es": "Por favor, enséñame cómo hacerlo.", "fr": "S'il vous plaît, apprenez-moi comment faire.", "ru": "Пожалуйста, научите меня, как это делать.", "uk": "Будь ласка, навчіть мене, як це робити."
        }
    },
    {
        id: "japeak_clb_005", audio: "audio/japeak_clb_005.mp3", title: "励まし合う (Encouragement)", category: "clubs_committees",
        japanese: "頑張りましょう。", target_speech: "がんばりましょう",
        ruby: { hiragana: "<ruby>頑張<rt>がんば</rt></ruby>りましょう。", romaji: "Ganbarimashou." },
        context: {
            "ja": "試合の前や、大変な仕事の前に、みんなで声をかけて励まし合い、チームワークを高める言葉です。",
            "en": "Used to encourage each other and boost teamwork before a game or a tough task.",
            "zh-CN": "比赛前或艰巨的任务前，大家互相鼓励、提高团队凝聚力的用语。",
            "zh-TW": "比賽前或艱鉅的任務前，大家互相鼓勵、提高團隊凝聚力的用語。",
            "ko": "시합 전이나 힘든 일을 하기 전에 다 함께 서로를 격려하고 팀워크를 높이는 말입니다.",
            "vi": "Dùng để động viên nhau và tăng tinh thần đồng đội trước trận đấu hoặc nhiệm vụ khó khăn.",
            "tl": "Ginagamit para palakasin ang loob ng isa't isa bago ang laban o mahirap na gawain.",
            "id": "Digunakan untuk saling menyemangati dan meningkatkan kerja sama tim sebelum pertandingan atau tugas berat.",
            "th": "ใช้พูดให้กำลังใจกันและกันเพื่อเสริมสร้างความสามัคคีในทีมก่อนการแข่งขันหรืองานหนัก",
            "my": "ပွဲမစမီ သို့မဟုတ် ခက်ခဲသောအလုပ်မစမီ အချင်းချင်း အားပေးရန်နှင့် အဖွဲ့လိုက်စိတ်ဓာတ်မြှင့်တင်ရန် သုံးသည်။",
            "km": "ប្រើដើម្បីលើកទឹកចិត្តគ្នាទៅវិញទៅមក និងបង្កើនស្មារតីក្រុម មុនពេលប្រកួត ឬការងារលំបាក។",
            "ne": "खेल वा गाह्रो कामअघि एकअर्कालाई हौसला दिन र टिमवर्क बढाउन प्रयोग गरिन्छ।",
            "mn": "Тэмцээний өмнө эсвэл хүнд хэцүү ажлын өмнө бие биенээ урамшуулж, багаар ажиллах чадварыг нэмэгдүүлэх үг юм.",
            "si": "තරඟයකට හෝ දුෂ්කර කාර්යයකට පෙර එකිනෙකා දිරිමත් කිරීමට සහ කණ්ඩායම් හැඟීම වැඩි දියුණු කිරීමට භාවිතා වේ.",
            "bn": "কোনো খেলা বা কঠিন কাজের আগে একে অপরকে উৎসাহিত করতে এবং দলগত কাজ বাড়াতে ব্যবহৃত হয়।",
            "pt": "Usado para encorajar uns aos outros e melhorar o trabalho em equipe antes de um jogo ou tarefa difícil.",
            "es": "Se usa para animarse mutuamente y mejorar el trabajo en equipo antes de un partido o tarea difícil.",
            "fr": "Utilisé pour s'encourager mutuellement et renforcer l'esprit d'équipe avant un match ou une tâche difficile.",
            "ru": "Используется для ободрения друг друга и укрепления командного духа перед игрой или сложной задачей.",
            "uk": "Використовується для підбадьорення один одного та зміцнення командного духу перед грою або складним завданням."
        },
        translations: {
            "en": "Let's do our best.", "zh-CN": "一起加油吧。", "zh-TW": "一起加油吧。", "ko": "열심히 합시다.", "vi": "Cùng cố gắng nhé.", "tl": "Galingan natin.", "id": "Mari kita lakukan yang terbaik.", "th": "พยายามเข้านะคะ/ครับ (สู้ๆ นะ)", "my": "အကောင်းဆုံး ကြိုးစားကြရအောင်။", "km": "តោះខិតខំទាំងអស់គ្នា។", "ne": "हाम्रो तर्फबाट राम्रो गरौं।", "mn": "Хичээцгээе.", "si": "අපි අපේ උපරිමය කරමු.", "bn": "চলো আমাদের সেরাটা দিই।", "pt": "Vamos dar o nosso melhor.", "es": "Hagamos nuestro mejor esfuerzo.", "fr": "Faisons de notre mieux.", "ru": "Давайте постараемся.", "uk": "Давайте постараємося."
        }
    },
    {
        id: "japeak_clb_006", audio: "audio/japeak_clb_006.mp3", title: "慰める・励ます (Comforting)", category: "clubs_committees",
        japanese: "気にしないでください。", target_speech: "きにしないでください",
        ruby: { hiragana: "<ruby>気<rt>き</rt></ruby>にしないでください。", romaji: "Ki ni shinaide kudasai." },
        context: {
            "ja": "友達やチームメイトがスポーツでミスをした時などに、慰めてあげる優しい言葉です。（「ドンマイ」とも言います）",
            "en": "A kind phrase to comfort a friend or teammate when they make a mistake in sports. (Also said as 'Don-mai').",
            "zh-CN": "朋友或队友在运动中失误时，用来安慰对方的温柔话语。（也常说“Don-mai”）。",
            "zh-TW": "朋友或隊友在運動中失誤時，用來安慰對方的溫柔話語。（也常說「Don-mai」）。",
            "ko": "친구나 팀 동료가 스포츠에서 실수했을 때 위로해 주는 다정한 말입니다. ('돈마이'라고도 합니다)",
            "vi": "Lời nói nhẹ nhàng để an ủi bạn bè hoặc đồng đội khi họ mắc lỗi. (Còn gọi là 'Don-mai').",
            "tl": "Isang mabait na parirala para aliwin ang kakampi na nagkamali. (Sinasabi rin na 'Don-mai').",
            "id": "Kalimat baik untuk menghibur teman atau rekan setim saat mereka melakukan kesalahan dalam olahraga.",
            "th": "คำพูดอ่อนโยนใช้ปลอบใจเพื่อนหรือเพื่อนร่วมทีมเมื่อพวกเขาทำพลาดในกีฬา (เรียกอีกอย่างว่า 'ดงไม')",
            "my": "သူငယ်ချင်း သို့မဟုတ် အသင်းဖော် အားကစားတွင် အမှားလုပ်မိသောအခါ နှစ်သိမ့်ပေးသော စကားဖြစ်သည်။",
            "km": "ពាក្យទន់ភ្លន់សម្រាប់លួងលោមមិត្តភក្តិ ឬមិត្តរួមក្រុម ពេលពួកគេធ្វើខុសក្នុងកីឡា។",
            "ne": "साथी वा टिमको सदस्यले गल्ती गर्दा सान्त्वना दिने दयालु शब्द।",
            "mn": "Найз эсвэл багийн анд нь спортын үеэр алдаа гаргахад тайтгаруулах эелдэг үг юм. (Мөн \"Донмай\" гэж хэлдэг)",
            "si": "මිතුරෙකු හෝ කණ්ඩායම් සගයෙකු ක්‍රීඩාවේදී වැරදීමක් කළ විට සනසාලීමට කාරුණික වාක්‍ය ඛණ්ඩයක්.",
            "bn": "খেলাধুলায় ভুল করলে বন্ধু বা সতীর্থকে সান্ত্বনা দেওয়ার একটি সদয় বাক্য।",
            "pt": "Uma frase gentil para confortar um amigo ou colega de equipe quando ele comete um erro.",
            "es": "Una frase amable para consolar a un compañero de equipo cuando comete un error.",
            "fr": "Une phrase gentille pour réconforter un ami ou un coéquipier lorsqu'il fait une erreur. (On dit aussi \"Don-mai\").",
            "ru": "Добрая фраза, чтобы утешить друга или товарища по команде, когда он совершает ошибку. (Также говорят \"Дон-май\").",
            "uk": "Добра фраза, щоб втішити друга або товариша по команді, коли він робить помилку."
        },
        translations: {
            "en": "Please don't worry about it. / Never mind.", "zh-CN": "请不要在意。（没关系）", "zh-TW": "請不要在意。（沒關係）", "ko": "신경 쓰지 마세요.", "vi": "Đừng bận tâm nhé.", "tl": "Huwag kang mag-alala.", "id": "Tolong jangan dipikirkan.", "th": "ไม่ต้องคิดมากนะคะ/ครับ", "my": "စိတ်မပူပါနဲ့။", "km": "សូមកុំខ្វល់អី។", "ne": "कृपया यसको चिन्ता नगर्नुहोस्।", "mn": "Битгий санаа зовоорой.", "si": "කරුණාකර ඒ ගැන කරදර වෙන්න එපා.", "bn": "দয়া করে এ নিয়ে চিন্তা করবেন না।", "pt": "Não se preocupe com isso.", "es": "No te preocupes por eso.", "fr": "Ne t'en fais pas.", "ru": "Не обращайте внимания. / Не переживай.", "uk": "Не звертайте уваги. / Не переймайся."
        }
    },
    {
        id: "japeak_clb_007", audio: "audio/japeak_clb_007.mp3", title: "片付け (Cleaning Up)", category: "clubs_committees",
        japanese: "片付けをしましょう。", target_speech: "かたづけをしましょう",
        ruby: { hiragana: "<ruby>片付<rt>かたづ</rt></ruby>けをしましょう。", romaji: "Katazuke o shimashou." },
        context: {
            "ja": "部活や委員会が終わった後に、みんなで使った道具や部屋をきれいにする時に声をかけます。",
            "en": "Used to call everyone to clean up the equipment and room after club or committee activities.",
            "zh-CN": "社团或委员会结束后，招呼大家一起清理使用过的工具和房间时使用。",
            "zh-TW": "社團或委員會結束後，招呼大家一起清理使用過的工具和房間時使用。",
            "ko": "동아리나 위원회가 끝난 후, 다 같이 사용한 도구나 방을 정리할 때 하는 말입니다.",
            "vi": "Dùng để gọi mọi người cùng dọn dẹp dụng cụ và phòng ốc sau khi kết thúc hoạt động.",
            "tl": "Ginagamit para tawagin ang lahat na magligpit ng mga gamit pagkatapos ng aktibidad.",
            "id": "Digunakan untuk mengajak semua orang merapikan alat dan ruangan setelah kegiatan selesai.",
            "th": "ใช้เรียกทุกคนให้มาช่วยกันเก็บของและทำความสะอาดห้องหลังจบกิจกรรมชมรม",
            "my": "ကလပ် သို့မဟုတ် ကော်မတီလှုပ်ရှားမှုများ ပြီးဆုံးပြီးနောက် အသုံးပြုခဲ့သော ပစ္စည်းများနှင့် အခန်းကို ရှင်းလင်းရန် အားလုံးကို ခေါ်သောအခါ သုံးသည်။",
            "km": "ប្រើដើម្បីហៅអ្នករាល់គ្នាឱ្យជួយរៀបចំសម្ភារៈ និងបន្ទប់បន្ទាប់ពីបញ្ចប់សកម្មភាព។",
            "ne": "क्लब वा समितिको काम सकिएपछि प्रयोग गरिएका सामान र कोठा सफा गर्न सबैलाई बोलाउँदा प्रयोग गरिन्छ।",
            "mn": "Дугуйлан, зөвлөлийн үйл ажиллагаа дууссаны дараа бүгдээрээ ашигласан хэрэгсэл, өрөөгөө цэвэрлэх үед хэлнэ.",
            "si": "සමාජ ශාලා හෝ කමිටු ක්‍රියාකාරකම් අවසන් වූ පසු උපකරණ සහ කාමරය පිරිසිදු කිරීමට සැමට කතා කිරීමට භාවිතා වේ.",
            "bn": "ক্লাব বা কমিটির কাজ শেষ হওয়ার পর ব্যবহৃত সরঞ্জাম ও ঘর পরিষ্কার করার জন্য সবাইকে ডাকতে ব্যবহৃত হয়।",
            "pt": "Usado para chamar todos para limpar os equipamentos e a sala após as atividades.",
            "es": "Se usa para llamar a todos a limpiar el equipo y el salón después de las actividades.",
            "fr": "Utilisé pour appeler tout le monde à ranger le matériel et nettoyer la pièce après les activités.",
            "ru": "Используется, чтобы позвать всех убрать инвентарь и помещение после занятий.",
            "uk": "Використовується, щоб покликати всіх прибрати інвентар та приміщення після занять."
        },
        translations: {
            "en": "Let's clean up.", "zh-CN": "我们收拾一下吧。", "zh-TW": "我們收拾一下吧。", "ko": "정리를 합시다.", "vi": "Chúng ta cùng dọn dẹp nào.", "tl": "Magligpit na tayo.", "id": "Mari kita rapikan.", "th": "มาเก็บของ/ทำความสะอาดกันเถอะ", "my": "ရှင်းလင်းကြရအောင်။", "km": "តោះរៀបចំ/សម្អាត។", "ne": "सफा गरौं।", "mn": "Цэвэрлэгээ хийцгээе.", "si": "අපි පිරිසිදු කරමු.", "bn": "চলো পরিষ্কার করি।", "pt": "Vamos arrumar/limpar.", "es": "Vamos a limpiar.", "fr": "Rangeons / Nettoyons.", "ru": "Давайте уберем(ся).", "uk": "Давайте приберемо(ся)."
        }
    },
    {
        id: "japeak_clb_008", audio: "audio/japeak_clb_008.mp3", title: "欠席の連絡 (Reporting Absence)", category: "clubs_committees",
        japanese: "今日、部活を休みます。", target_speech: "きょうぶかつをやすみます",
        ruby: { hiragana: "<ruby>今日<rt>きょう</rt></ruby>、<ruby>部活<rt>ぶかつ</rt></ruby>を<ruby>休<rt>やす</rt></ruby>みます。", romaji: "Kyou, bukatsu o yasumimasu." },
        context: {
            "ja": "体調が悪い時や、家の用事がある時に、事前に先生や先輩に部活（または委員会）を休むことを伝える言葉です。",
            "en": "Used to inform the teacher or seniors in advance that you will be absent from the club (or committee) due to illness or family matters.",
            "zh-CN": "生病或有家事时，提前向老师或前辈请假不参加社团（或委员会）活动的用语。",
            "zh-TW": "生病或有家事時，提前向老師或前輩請假不參加社團（或委員會）活動的用語。",
            "ko": "몸이 아프거나 집안일이 있을 때, 미리 선생님이나 선배에게 동아리를 쉰다고 알리는 말입니다.",
            "vi": "Dùng để xin phép nghỉ câu lạc bộ trước với giáo viên hoặc đàn anh khi bị ốm hoặc có việc nhà.",
            "tl": "Ginagamit para sabihin nang maaga na hindi ka makaka-attend ng club dahil sa sakit o gawain sa bahay.",
            "id": "Digunakan untuk memberitahu guru atau senior sebelumnya bahwa Anda akan absen dari klub karena sakit atau urusan keluarga.",
            "th": "ใช้แจ้งคุณครูหรือรุ่นพี่ล่วงหน้าว่าจะขอลาหยุดชมรมเนื่องจากป่วยหรือมีธุระทางบ้าน",
            "my": "ဖျားနာခြင်း သို့မဟုတ် အိမ်ကိစ္စများကြောင့် ကလပ်ကို ခွင့်ယူမည်ဟု ဆရာ သို့မဟုတ် စီနီယာများအား ကြိုတင်အကြောင်းကြားရန် သုံးသည်။",
            "km": "ប្រើដើម្បីជម្រាបគ្រូ ឬសិស្សច្បងជាមុនថាអ្នកនឹងឈប់សម្រាកពីក្លឹប ដោយសារឈឺ ឬមានធុរៈគ្រួសារ។",
            "ne": "बिरामी वा घरायसी कामको कारणले क्लबमा अनुपस्थित हुने कुरा शिक्षक वा सिनियरलाई पहिले नै जानकारी दिन प्रयोग गरिन्छ।",
            "mn": "Бие өвдөх эсвэл ар гэрийн гачигдал гарсан үед багш, ахлах сурагчдад дугуйландаа очихгүй гэдгээ урьдчилан мэдэгдэх үг юм.",
            "si": "අසනීපයක් හෝ පවුලේ කටයුත්තක් හේතුවෙන් ඔබ සමාජ ශාලාවට (හෝ කමිටුවට) නොපැමිණෙන බව ගුරුවරයාට හෝ ජ්‍යෙෂ්ඨයන්ට කල්තියා දැනුම් දීමට භාවිතා වේ.",
            "bn": "অসুস্থতা বা পারিবারিক কারণে ক্লাবে উপস্থিত থাকতে পারবেন না তা শিক্ষক বা সিনিয়রদের আগে থেকে জানাতে ব্যবহৃত হয়।",
            "pt": "Usado para informar que você faltará ao clube devido a doença ou assuntos familiares.",
            "es": "Se usa para informar que faltarás al club debido a enfermedad o asuntos familiares.",
            "fr": "Utilisé pour informer à l'avance le professeur ou les aînés que vous serez absent du club pour cause de maladie ou d'affaire familiale.",
            "ru": "Используется, чтобы заранее сообщить учителю или старшим о том, что вы не придете в клуб из-за болезни или семейных обстоятельств.",
            "uk": "Використовується, щоб заздалегідь повідомити вчителю або старшим про те, що ви не прийдете в клуб через хворобу або сімейні обставини."
        },
        translations: {
            "en": "I will be absent from the club today.", "zh-CN": "我今天请假不去社团了。", "zh-TW": "我今天請假不去社團了。", "ko": "오늘 동아리를 쉬겠습니다.", "vi": "Hôm nay em xin nghỉ câu lạc bộ ạ.", "tl": "Aabsent po ako sa club ngayon.", "id": "Saya akan absen dari klub hari ini.", "th": "วันนี้หนู/ผมขอลาหยุดชมรมนะคะ/ครับ", "my": "ဒီနေ့ ကလပ် ခွင့်ယူပါမယ်။", "km": "ថ្ងៃនេះខ្ញុំសុំច្បាប់សម្រាកពីក្លឹប។", "ne": "म आज क्लबमा आउँदिनँ।", "mn": "Өнөөдөр дугуйландаа очиж чадахгүй нь ээ.", "si": "මම අද සමාජ ශාලාවට එන්නේ නැහැ.", "bn": "আমি আজ ক্লাবে অনুপস্থিত থাকব।", "pt": "Vou faltar ao clube hoje.", "es": "Faltaré al club hoy.", "fr": "Je serai absent du club aujourd'hui.", "ru": "Сегодня я не приду в клуб.", "uk": "Сьогодні я буду відсутній у клубі."
        }
    },
    {
        id: "japeak_clb_009", audio: "audio/japeak_clb_009.mp3", title: "先に帰る時の挨拶 (Leaving Early)", category: "clubs_committees",
        japanese: "お先に失礼します。", target_speech: "おさきにしつれいします",
        ruby: { hiragana: "お<ruby>先<rt>さき</rt></ruby>に<ruby>失礼<rt>しつれい</rt></ruby>します。", romaji: "Osaki ni shitsurei shimasu." },
        context: {
            "ja": "他の人がまだ活動したり片付けたりしているけれど、自分だけ先に帰る時に使う、日本の大切なマナーです。",
            "en": "An important Japanese etiquette phrase used when you are leaving earlier than others who are still working or cleaning up.",
            "zh-CN": "其他人还在活动或打扫，自己需要先走时使用的日本重要礼仪用语。",
            "zh-TW": "其他人還在活動或打掃，自己需要先走時使用的日本重要禮儀用語。",
            "ko": "다른 사람들이 아직 활동하거나 정리하고 있는데 자신만 먼저 돌아갈 때 사용하는 일본의 중요한 예절입니다.",
            "vi": "Một phép lịch sự quan trọng của Nhật Bản khi bạn ra về trước trong khi những người khác vẫn đang làm việc.",
            "tl": "Isang mahalagang etiquette sa Japan kapag mauuna kang umuwi habang ang iba ay may ginagawa pa.",
            "id": "Etika penting di Jepang yang digunakan saat Anda pulang lebih dulu sementara yang lain masih beraktivitas.",
            "th": "มารยาทสำคัญของญี่ปุ่นที่ใช้พูดเมื่อคุณต้องกลับก่อนในขณะที่คนอื่นยังทำกิจกรรมหรือเก็บของอยู่",
            "my": "အခြားသူများ အလုပ်လုပ်နေဆဲ သို့မဟုတ် ရှင်းလင်းနေဆဲတွင် မိမိက အရင်ပြန်သောအခါ သုံးသော အရေးကြီးသည့် ဂျပန်ယဉ်ကျေးမှုဖြစ်သည်။",
            "km": "ជាសុជីវធម៌ដ៏សំខាន់របស់ជប៉ុន ប្រើនៅពេលអ្នកត្រូវត្រឡប់ទៅមុន ពេលដែលអ្នកផ្សេងទៀតនៅកំពុងធ្វើការ។",
            "ne": "अरू काम गरिरहेको वा सफा गरिरहेको बेला आफू अघि नै घर फर्कंदा प्रयोग गरिने महत्त्वपूर्ण जापानी शिष्टाचार।",
            "mn": "Бусад нь үйл ажиллагаагаа үргэлжлүүлэх эсвэл цэвэрлэгээ хийж байхад өөрөө түрүүлээд явах үед хэрэглэдэг Японы чухал соёл юм.",
            "si": "අනෙක් අය තවමත් වැඩ කරමින් සිටින විට හෝ පිරිසිදු කරමින් සිටින විට ඔබ කලින් පිටත්ව යන විට භාවිතා කරන වැදගත් ජපන් ආචාර විධියකි.",
            "bn": "অন্যেরা কাজ করা বা পরিষ্কার করার সময় আপনি আগে চলে গেলে ব্যবহৃত একটি গুরুত্বপূর্ণ জাপানি শিষ্টাচার।",
            "pt": "Uma etiqueta japonesa importante usada quando você sai mais cedo do que os outros que ainda estão trabalhando.",
            "es": "Una frase de etiqueta japonesa importante que se usa cuando te vas antes que los demás.",
            "fr": "Une importante formule de politesse japonaise utilisée lorsque vous partez avant les autres qui travaillent ou nettoient encore.",
            "ru": "Важная фраза японского этикета, которая используется, когда вы уходите раньше других, пока они еще работают или убирают.",
            "uk": "Важлива фраза японського етикету, яка використовується, коли ви йдете раніше за інших, поки вони ще працюють або прибирають."
        },
        translations: {
            "en": "Excuse me for leaving before you.", "zh-CN": "我先告辞了。", "zh-TW": "我先告辭了。", "ko": "먼저 실례하겠습니다.", "vi": "Mình xin phép về trước nhé.", "tl": "Mauuna na po ako.", "id": "Permisi, saya pulang duluan.", "th": "ขอตัวกลับก่อนนะคะ/ครับ", "my": "အရင်ပြန်ခွင့်ပြုပါ။", "km": "ខ្ញុំសូមអនុញ្ញាតទៅមុនហើយ។", "ne": "म तपाईंहरू भन्दा अघि निस्कन्छु, माफ गर्नुहोस्।", "mn": "Түрүүлээд явъя даа (Уучлаарай).", "si": "මම කලින් පිටත්ව යනවාට සමාවන්න.", "bn": "আমাকে আগে যাওয়ার জন্য ক্ষমা করবেন।", "pt": "Com licença por sair antes de vocês.", "es": "Disculpen que me vaya antes.", "fr": "Excusez-moi de partir avant vous.", "ru": "Извините, я пойду первым.", "uk": "Вибачте, я піду першим."
        }
    },
    {
        id: "japeak_clb_010", audio: "audio/japeak_clb_010.mp3", title: "活動終了の挨拶 (Good Work Today)", category: "clubs_committees",
        japanese: "お疲れ様でした。", target_speech: "おつかれさまでした",
        ruby: { hiragana: "お<ruby>疲<rt>つか</rt></ruby>れ<ruby>様<rt>さま</rt></ruby>でした。", romaji: "Otsukaresama deshita." },
        context: {
            "ja": "部活や委員会の活動がすべて終わって、帰る時にお互いの頑張りをねぎらって言い合う挨拶です。",
            "en": "A greeting exchanged at the end of club or committee activities to show appreciation for everyone's hard work before going home.",
            "zh-CN": "社团或委员会活动全部结束，准备回家时互相慰劳对方努力的问候语。",
            "zh-TW": "社團或委員會活動全部結束，準備回家時互相慰勞對方努力的問候語。",
            "ko": "동아리나 위원회 활동이 모두 끝나고, 집에 갈 때 서로의 노고를 위로하며 나누는 인사입니다.",
            "vi": "Lời chào khi kết thúc hoạt động câu lạc bộ, dùng để cảm ơn sự cố gắng của mọi người trước khi ra về.",
            "tl": "Isang pagbati sa pagtatapos ng aktibidad para pasalamatan ang pagod ng bawat isa.",
            "id": "Salam yang diucapkan di akhir kegiatan klub untuk menghargai kerja keras semua orang sebelum pulang.",
            "th": "คำทักทายที่ใช้เมื่อสิ้นสุดกิจกรรมชมรมเพื่อขอบคุณในความเหนื่อยยากของทุกคนก่อนแยกย้ายกันกลับบ้าน",
            "my": "ကလပ် သို့မဟုတ် ကော်မတီလှုပ်ရှားမှုများအားလုံး ပြီးဆုံးပြီး အိမ်ပြန်ချိန်တွင် အချင်းချင်း၏ ကြိုးစားအားထုတ်မှုကို အသိအမှတ်ပြုသော နှုတ်ခွန်းဆက်စကားဖြစ်သည်။",
            "km": "ជាការស្វាគមន៍នៅពេលបញ្ចប់សកម្មភាពក្លឹប ដើម្បីអរគុណដល់ការខិតខំប្រឹងប្រែងរបស់អ្នកទាំងអស់គ្នាមុនពេលត្រឡប់ទៅផ្ទះ។",
            "ne": "क्लब वा समितिको काम सकिएर घर फर्कने बेला सबैको मिहिनेतको कदर गर्दै एकअर्कालाई भनिने अभिवादन।",
            "mn": "Дугуйлан, зөвлөлийн үйл ажиллагаа бүрэн дуусаж, гэр рүүгээ харихын өмнө бие биенийхээ хөдөлмөрийг үнэлж хэлдэг мэндчилгээ юм.",
            "si": "සමාජ ශාලා හෝ කමිටු ක්‍රියාකාරකම් අවසානයේ නිවසට යාමට පෙර සැමගේ මහන්සිය අගය කිරීමට හුවමාරු කර ගන්නා සුබ පැතුමකි.",
            "bn": "ক্লাব বা কমিটির কাজ শেষে বাড়ি যাওয়ার আগে সবার পরিশ্রমের প্রশংসা করে ব্যবহৃত একটি অভিবাদন।",
            "pt": "Uma saudação trocada no final das atividades do clube para agradecer o esforço de todos.",
            "es": "Un saludo intercambiado al final de las actividades del club para agradecer el esfuerzo de todos.",
            "fr": "Salutation échangée à la fin des activités du club pour remercier tout le monde de son travail avant de rentrer chez soi.",
            "ru": "Приветствие, которым обмениваются в конце занятий клуба, чтобы поблагодарить всех за хорошую работу перед уходом домой.",
            "uk": "Привітання, яким обмінюються в кінці занять клубу, щоб подякувати всім за гарну роботу перед тим, як піти додому."
        },
        translations: {
            "en": "Good work today. / Thanks for your hard work.", "zh-CN": "今天辛苦了。", "zh-TW": "今天辛苦了。", "ko": "수고하셨습니다.", "vi": "Hôm nay mọi người vất vả rồi.", "tl": "Salamat sa magandang trabaho ngayon.", "id": "Terima kasih atas kerja kerasnya hari ini.", "th": "วันนี้เหนื่อยหน่อยนะคะ/ครับ (ขอบคุณที่ทำงานหนัก)", "my": "ဒီနေ့ ပင်ပန်းသွားပြီ။ (အလုပ်ကြိုးစားလို့ ကျေးဇူးပါ)", "km": "ធ្វើការបានល្អនៅថ្ងៃនេះ។ / អរគុណសម្រាប់ការខិតខំប្រឹងប្រែង។", "ne": "आजको कामको लागि धन्यवाद।", "mn": "Өнөөдөр сайн ажиллалаа.", "si": "අද හොඳ වැඩක්. / ඔබේ මහන්සියට ස්තූතියි.", "bn": "আজ ভালো কাজ হয়েছে। / আপনার কঠোর পরিশ্রমের জন্য ধন্যবাদ।", "pt": "Bom trabalho hoje.", "es": "Buen trabajo hoy.", "fr": "Bon travail aujourd'hui. / Merci pour votre travail.", "ru": "Отличная работа сегодня. / Спасибо за ваш труд.", "uk": "Гарна робота сьогодні. / Дякую за вашу працю."
        }
    }
];