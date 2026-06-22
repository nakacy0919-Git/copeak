// ==========================================
// Japeak 教材データベース（休み時間・友達作り）
// ==========================================
const japeakBreakData = [
    {
        id: "japeak_brk_001", title: "遊びに誘う (Let's Play)", category: "break_time",
        japanese: "一緒に遊ぼう。", target_speech: "いっしょにあそぼう",
        ruby: { hiragana: "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>遊<rt>あそ</rt></ruby>ぼう。", romaji: "Issho ni asobou." },
        context: {
            "ja": "休み時間に友達を遊びに誘う時の言葉です。勇気を出して声をかけてみましょう。",
            "en": "Used to invite a friend to play during break time. Gather your courage and ask!",
            "pt": "Usado para convidar um amigo para brincar durante o intervalo. Crie coragem e pergunte!",
            "zh-CN": "休息时邀请朋友一起玩的用语。鼓起勇气去搭话吧。",
            "tl": "Ginagamit para ayayain ang kaibigan na maglaro sa oras ng pahinga. Lakasan ang loob at magtanong!",
            "vi": "Dùng để rủ bạn bè cùng chơi vào giờ ra chơi. Hãy can đảm lên tiếng nhé.",
            "es": "Se usa para invitar a un amigo a jugar durante el recreo. ¡Anímate a preguntar!",
            "ne": "खाजाको छुट्टीमा साथीलाई खेल्न बोलाउन प्रयोग गरिन्छ। हिम्मत गरेर सोध्नुहोस्!",
            "id": "Digunakan untuk mengajak teman bermain saat jam istirahat. Beranikan dirimu dan ajaklah!"
        },
        translations: {
            "en": "Let's play together.", "pt": "Vamos brincar juntos.", "zh-CN": "我们一起玩吧。", "tl": "Maglaro tayo.", "vi": "Cùng chơi nhé.", "es": "Juguemos juntos.", "ne": "सँगै खेलौं।", "id": "Ayo main bersama."
        }
    },
    {
        id: "japeak_brk_002", title: "仲間に入れて (Can I Join?)", category: "break_time",
        japanese: "仲間に入れて。", target_speech: "なかまにいれて",
        ruby: { hiragana: "<ruby>仲間<rt>なかま</rt></ruby>に<ruby>入<rt>い</rt></ruby>れて。", romaji: "Nakama ni irete." },
        context: {
            "ja": "友達がすでに遊んでいるところに、自分も参加したい時に使います。",
            "en": "Used when you want to join friends who are already playing a game.",
            "pt": "Usado quando você quer se juntar aos amigos que já estão brincando.",
            "zh-CN": "想加入已经开始玩耍的朋友们时使用。",
            "tl": "Ginagamit kapag gusto mong sumali sa mga kaibigan na naglalaro na.",
            "vi": "Dùng khi bạn muốn tham gia vào nhóm bạn bè đang chơi.",
            "es": "Se usa cuando quieres unirte a tus amigos que ya están jugando.",
            "ne": "साथीहरू खेलिरहेको ठाउँमा आफू पनि सहभागी हुन चाहँदा प्रयोग गरिन्छ।",
            "id": "Digunakan saat Anda ingin ikut bergabung dengan teman yang sedang bermain."
        },
        translations: {
            "en": "Can I join you? / Let me play too.", "pt": "Posso brincar também?", "zh-CN": "加我一个。", "tl": "Pwede ba akong sumali?", "vi": "Cho mình chơi với.", "es": "¿Puedo unirme?", "ne": "म पनि खेल्न सक्छु?", "id": "Bolehkah saya ikut bermain?"
        }
    },
    {
        id: "japeak_brk_003", title: "順番を代わる (My Turn)", category: "break_time",
        japanese: "次は私の番です。", target_speech: "つぎはわたしのばんです",
        ruby: { hiragana: "<ruby>次<rt>つぎ</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>の<ruby>番<rt>ばん</rt></ruby>です。", romaji: "Tsugi wa watashi no ban desu." },
        context: {
            "ja": "ブランコなどの遊具やゲームで、順番を交代してほしい時にしっかり伝えます。",
            "en": "Used to firmly tell others that it's your turn next on the swings or a game.",
            "pt": "Usado para dizer com firmeza que é a sua vez nos balanços ou num jogo.",
            "zh-CN": "玩秋千或游戏时，想要轮换顺序时明确地告诉对方。",
            "tl": "Ginagamit upang sabihin na ikaw na ang susunod sa swing o laro.",
            "vi": "Dùng để nói rõ rằng đã đến lượt mình chơi xích đu hoặc trò chơi nào đó.",
            "es": "Se usa para decir firmemente que es tu turno en los columpios o en un juego.",
            "ne": "पिङ वा खेलमा अब मेरो पालो हो भनेर स्पष्ट रूपमा बताउन प्रयोग गरिन्छ।",
            "id": "Digunakan untuk memberitahu bahwa sekarang giliran Anda di ayunan atau permainan."
        },
        translations: {
            "en": "It's my turn next.", "pt": "É a minha vez agora.", "zh-CN": "接下来轮到我了。", "tl": "Ako na ang susunod.", "vi": "Tiếp theo là đến lượt mình.", "es": "Es mi turno ahora.", "ne": "अब मेरो पालो हो।", "id": "Selanjutnya giliranku."
        }
    },
    {
        id: "japeak_brk_004", title: "教室に戻る (Going Back)", category: "break_time",
        japanese: "教室に戻ろう。", target_speech: "きょうしつにもどろう",
        ruby: { hiragana: "<ruby>教室<rt>きょうしつ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>ろう。", romaji: "Kyoushitsu ni modorou." },
        context: {
            "ja": "休み時間が終わるチャイム（鐘）が鳴った時に、友達に声をかけます。",
            "en": "Used to tell your friends to head back when the bell rings to end break time.",
            "pt": "Usado para dizer aos amigos para voltarem quando o sinal toca para terminar o intervalo.",
            "zh-CN": "休息时间结束的钟声响起时，用来提醒朋友回教室的用语。",
            "tl": "Ginagamit para sabihin sa mga kaibigan na bumalik na kapag tumunog ang bell.",
            "vi": "Dùng để gọi bạn bè quay lại lớp khi chuông báo hết giờ ra chơi reo lên.",
            "es": "Se usa para decirles a tus amigos que regresen cuando suene el timbre de fin de recreo.",
            "ne": "छुट्टी सकिएको घण्टी बज्दा साथीहरूलाई कक्षामा फर्कन भन्दा प्रयोग गरिन्छ।",
            "id": "Digunakan untuk mengajak teman kembali ke kelas saat bel masuk berbunyi."
        },
        translations: {
            "en": "Let's go back to the classroom.", "pt": "Vamos voltar para a sala.", "zh-CN": "回教室吧。", "tl": "Bumalik na tayo sa klase.", "vi": "Về lớp thôi.", "es": "Volvamos al salón.", "ne": "कक्षामा फर्कौं।", "id": "Ayo kembali ke kelas."
        }
    },
    {
        id: "japeak_brk_005", title: "名前を聞く (Asking Name)", category: "break_time",
        japanese: "お名前は何ですか。", target_speech: "おなまえはなんですか",
        ruby: { hiragana: "お<ruby>名前<rt>なまえ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。", romaji: "Onamae wa nan desu ka." },
        context: {
            "ja": "初めて話すクラスメイトの名前を聞いて、友達になるための第一歩です。",
            "en": "The first step to making friends is asking a new classmate their name.",
            "pt": "O primeiro passo para fazer amigos é perguntar o nome de um novo colega.",
            "zh-CN": "询问初次交谈的同学的名字，是交朋友的第一步。",
            "tl": "Ang unang hakbang sa pakikipagkaibigan ay ang pagtatanong ng pangalan ng kaklase.",
            "vi": "Hỏi tên một người bạn cùng lớp lần đầu tiên nói chuyện là bước đầu tiên để kết bạn.",
            "es": "El primer paso para hacer amigos es preguntarle el nombre a un nuevo compañero.",
            "ne": "पहिलो पटक कुरा गरिरहेको साथीको नाम सोधेर मित्रता सुरु गर्ने पहिलो कदम।",
            "id": "Langkah pertama untuk berteman adalah menanyakan nama teman sekelas yang baru."
        },
        translations: {
            "en": "What is your name?", "pt": "Qual é o seu nome?", "zh-CN": "你叫什么名字？", "tl": "Ano ang pangalan mo?", "vi": "Bạn tên là gì?", "es": "¿Cómo te llamas?", "ne": "तपाईंको नाम के हो?", "id": "Siapa namamu?"
        }
    },
    {
        id: "japeak_brk_006", title: "好きなものを聞く (Asking Preferences)", category: "break_time",
        japanese: "何が好きですか。", target_speech: "なにがすきですか",
        ruby: { hiragana: "<ruby>何<rt>なに</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。", romaji: "Nani ga suki desu ka." },
        context: {
            "ja": "相手の好きなアニメや食べ物を聞いて、共通点を見つけて仲良くなるための質問です。",
            "en": "A question to ask about their favorite anime or food to find common ground and become closer.",
            "pt": "Uma pergunta para saber sobre o anime ou comida favorita deles e se aproximarem.",
            "zh-CN": "询问对方喜欢的动画或食物，寻找共同点以增进感情的提问。",
            "tl": "Isang tanong tungkol sa paborito nilang anime o pagkain para mas maging malapit.",
            "vi": "Câu hỏi về sở thích anime hoặc đồ ăn để tìm điểm chung và thân thiết hơn.",
            "es": "Una pregunta para saber cuál es su anime o comida favorita y hacerse más unidos.",
            "ne": "साथीलाई मनपर्ने एनिमे वा खाना सोधेर समानता खोजी नजिक हुन सोधिने प्रश्न।",
            "id": "Pertanyaan tentang anime atau makanan favorit untuk mencari kesamaan dan menjadi lebih akrab."
        },
        translations: {
            "en": "What do you like?", "pt": "Do que você gosta?", "zh-CN": "你喜欢什么？", "tl": "Ano ang mga gusto mo?", "vi": "Bạn thích gì?", "es": "¿Qué te gusta?", "ne": "तपाईंलाई के मन पर्छ?", "id": "Kamu suka apa?"
        }
    },
    {
        id: "japeak_brk_007", title: "共感する (Me Too)", category: "break_time",
        japanese: "私も好きです。", target_speech: "わたしもすきです",
        ruby: { hiragana: "<ruby>私<rt>わたし</rt></ruby>も<ruby>好<rt>す</rt></ruby>きです。", romaji: "Watashi mo suki desu." },
        context: {
            "ja": "友達と同じものが好きだった時に、共感して会話を盛り上げる言葉です。",
            "en": "Used to show empathy and keep the conversation going when you like the same thing as your friend.",
            "pt": "Usado para mostrar empatia quando você gosta da mesma coisa que seu amigo.",
            "zh-CN": "和朋友喜欢同样的东西时，用来产生共鸣、活跃气氛的用语。",
            "tl": "Ginagamit para ipakita na pareho kayo ng gusto at maging masaya ang usapan.",
            "vi": "Dùng để thể hiện sự đồng cảm và làm câu chuyện vui hơn khi bạn thích cùng một thứ với bạn bè.",
            "es": "Se usa para mostrar empatía cuando te gusta lo mismo que a tu amigo.",
            "ne": "साथीलाई मनपर्ने कुरा आफूलाई पनि मन पर्दा कुराकानीलाई रोचक बनाउन प्रयोग गरिन्छ।",
            "id": "Digunakan untuk menunjukkan bahwa Anda juga menyukai hal yang sama dengan teman."
        },
        translations: {
            "en": "I like it too. / Me too.", "pt": "Eu também gosto.", "zh-CN": "我也喜欢。", "tl": "Gusto ko rin iyan.", "vi": "Mình cũng thích.", "es": "A mí también me gusta.", "ne": "मलाई पनि मन पर्छ।", "id": "Saya juga suka."
        }
    },
    {
        id: "japeak_brk_008", title: "日本語を教えてもらう (Asking to Teach)", category: "break_time",
        japanese: "日本語を教えてください。", target_speech: "にほんごをおしえてください",
        ruby: { hiragana: "<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。", romaji: "Nihongo o oshiete kudasai." },
        context: {
            "ja": "分からない言葉があったら、友達に聞いてみましょう。きっと喜んで教えてくれます。",
            "en": "If you don't know a word, ask a friend. They will surely be happy to teach you.",
            "pt": "Se não souber uma palavra, pergunte a um amigo. Eles certamente ficarão felizes em ensinar.",
            "zh-CN": "遇到不懂的词语，就问问朋友吧。他们一定会很乐意教你的。",
            "tl": "Kung may hindi alam na salita, magtanong sa kaibigan. Tiyak na matutuwa silang turuan ka.",
            "vi": "Nếu có từ nào không biết, hãy hỏi bạn bè. Chắc chắn họ sẽ rất vui lòng chỉ cho bạn.",
            "es": "Si no sabes una palabra, pregúntale a un amigo. Seguramente estarán felices de enseñarte.",
            "ne": "नबुझेको कुरा साथीलाई सोध्नुहोस्। उनीहरू पक्कै खुसी भएर सिकाउनेछन्।",
            "id": "Jika ada kata yang tidak dimengerti, tanyakan pada teman. Mereka pasti senang mengajarimu."
        },
        translations: {
            "en": "Please teach me Japanese.", "pt": "Por favor, me ensine japonês.", "zh-CN": "请教我日语。", "tl": "Turuan mo naman ako ng Japanese.", "vi": "Hãy dạy tiếng Nhật cho mình với.", "es": "Por favor, enséñame japonés.", "ne": "मलाई जापानी भाषा सिकाउनुहोस्।", "id": "Tolong ajari saya bahasa Jepang."
        }
    },
    {
        id: "japeak_brk_009", title: "移動する時 (Moving Together)", category: "break_time",
        japanese: "一緒に行こう。", target_speech: "いっしょにいこう",
        ruby: { hiragana: "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>こう。", romaji: "Issho ni ikou." },
        context: {
            "ja": "トイレや図書室、次の教室に移動する時に、友達を誘って一緒に行く言葉です。",
            "en": "Used to invite a friend to walk together to the bathroom, library, or next classroom.",
            "pt": "Usado para convidar um amigo para ir junto ao banheiro, biblioteca ou próxima sala.",
            "zh-CN": "去洗手间、图书馆或换教室时，邀请朋友一起走的用语。",
            "tl": "Ginagamit upang anyayahan ang kaibigan na sumabay sa pagpunta sa banyo o ibang klase.",
            "vi": "Dùng để rủ bạn bè cùng đi khi di chuyển đến nhà vệ sinh, thư viện hoặc lớp học tiếp theo.",
            "es": "Se usa para invitar a un amigo a ir juntos al baño, a la biblioteca o a la siguiente clase.",
            "ne": "शौचालय, पुस्तकालय वा अर्को कक्षामा जाँदा साथीलाई सँगै जान बोलाउन प्रयोग गरिन्छ।",
            "id": "Digunakan untuk mengajak teman pergi bersama ke toilet, perpustakaan, atau kelas berikutnya."
        },
        translations: {
            "en": "Let's go together.", "pt": "Vamos juntos.", "zh-CN": "我们一起去吧。", "tl": "Sabay na tayong pumunta.", "vi": "Cùng đi nhé.", "es": "Vamos juntos.", "ne": "सँगै जाऔं।", "id": "Ayo pergi bersama."
        }
    },
    {
        id: "japeak_brk_010", title: "楽しかったと伝える (Having Fun)", category: "break_time",
        japanese: "楽しかったです。", target_speech: "たのしかったです",
        ruby: { hiragana: "<ruby>楽<rt>たの</rt></ruby>しかったです。", romaji: "Tanoshikatta desu." },
        context: {
            "ja": "休み時間に一緒に遊んだ後、また遊びたいという気持ちを込めて伝える言葉です。",
            "en": "Said after playing together during the break, conveying the feeling that you want to play again.",
            "pt": "Dito depois de brincarem juntos, transmitindo o sentimento de que quer brincar de novo.",
            "zh-CN": "休息时一起玩耍后使用，包含着“还想一起玩”的心情。",
            "tl": "Sinasabi pagkatapos maglaro nang magkasama, nagpapakita na gusto mo pang maulit ito.",
            "vi": "Nói sau khi cùng chơi vào giờ ra chơi, thể hiện mong muốn lần sau lại chơi tiếp.",
            "es": "Se dice después de jugar juntos durante el recreo, para mostrar que quieres volver a jugar.",
            "ne": "खाजाको समयमा सँगै खेलेपछि, फेरि खेल्ने इच्छा व्यक्त गर्न प्रयोग गरिन्छ।",
            "id": "Diucapkan setelah selesai bermain bersama, menunjukkan bahwa Anda ingin bermain lagi nanti."
        },
        translations: {
            "en": "It was fun.", "pt": "Foi divertido.", "zh-CN": "很开心。", "tl": "Naging masaya po.", "vi": "Rất vui ạ.", "es": "Fue divertido.", "ne": "रमाइलो भयो।", "id": "Menyenangkan sekali."
        }
    }
];