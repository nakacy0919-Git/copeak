// ==========================================
// Japeak 教材データベース（多言語対応・会話編）
// ==========================================
const japeakConversationData = [
    // 1. 友達を誘う
    {
        id: "japeak_conv_001", title: "友達を誘う (Inviting a Friend)", category: "school_life_conversation",
        japanese: "一緒に昼ごはんを食べませんか？", target_speech: "いっしょにひるごはんをたべませんか",
        ruby: { hiragana: "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>昼<rt>ひる</rt></ruby>ごはんを<ruby>食<rt>た</rt></ruby>べませんか？", romaji: "Issho ni hirugohan o tabemasen ka?" },
        context: {
            "ja": "休み時間や昼休みに、クラスメイトを食事に誘うときに使います。友達を作るための第一歩です。",
            "en": "Used to invite a classmate to eat together during break or lunch.",
            "pt": "Usado para convidar um colega de classe para comer junto.", "zh-CN": "在午休时邀请同学一起吃饭的用语。", "tl": "Ginagamit upang anyayahan ang isang kaklase na kumain nang sabay.", "vi": "Được sử dụng để mời bạn cùng lớp ăn trưa.", "es": "Se usa para invitar a un compañero a comer.", "ne": "खाजाको समयमा साथीलाई सँगै खाना खान बोलाउँदा प्रयोग गरिन्छ।", "id": "Digunakan untuk mengajak teman sekelas makan bersama."
        },
        translations: {
            "en": "Would you like to eat lunch together?", "pt": "Você gostaria de almoçar junto?", "zh-CN": "要不要一起吃午饭？", "tl": "Gusto mo bang sabay tayong mananghalian?", "vi": "Bạn có muốn ăn trưa cùng nhau không?", "es": "¿Te gustaría almorzar juntos?", "ne": "के तपाईं सँगै खाजा खान चाहनुहुन्छ?", "id": "Maukah kamu makan siang bersama?"
        }
    },
    // 2. 感謝を伝える
    {
        id: "japeak_conv_002", title: "感謝を伝える (Expressing Gratitude)", category: "school_life_conversation",
        japanese: "助けてくれて、ありがとうございます。", target_speech: "たすけてくれてありがとうございます",
        ruby: { hiragana: "<ruby>助<rt>たす</rt></ruby>けてくれて、ありがとうございます。", romaji: "Tasukete kurete, arigatou gozaimasu." },
        context: {
            "ja": "勉強を教えてもらったり、手伝ってもらったりした後に、相手に感謝の気持ちを伝える言葉です。",
            "en": "Used to express gratitude after someone has taught you something or helped you out.",
            "pt": "Usado para expressar gratidão depois de ser ajudado.", "zh-CN": "在别人帮助你之后，表达感谢之情的用语。", "tl": "Ginagamit upang magpasalamat matapos kang tulungan.", "vi": "Được sử dụng để bày tỏ lòng biết ơn sau khi được giúp đỡ.", "es": "Se usa para expresar gratitud después de ser ayudado.", "ne": "मद्दत गरेपछि कृतज्ञता व्यक्त गर्न प्रयोग गरिन्छ।", "id": "Digunakan untuk mengungkapkan rasa terima kasih setelah dibantu."
        },
        translations: {
            "en": "Thank you for helping me.", "pt": "Obrigado por me ajudar.", "zh-CN": "谢谢你的帮助。", "tl": "Salamat sa pagtulong sa akin.", "vi": "Cảm ơn bạn đã giúp đỡ tôi.", "es": "Gracias por ayudarme.", "ne": "मलाई मद्दत गर्नुभएकोमा धन्यवाद।", "id": "Terima kasih telah membantu saya."
        }
    },
    // 3. 誘いを断る（新規）
    {
        id: "japeak_conv_003", title: "誘いを断る (Declining an Invitation)", category: "school_life_conversation",
        japanese: "ごめんなさい、今日は用事があります。", target_speech: "ごめんなさいきょうはようじがあります",
        ruby: { hiragana: "ごめんなさい、<ruby>今日<rt>きょう</rt></ruby>は<ruby>用事<rt>ようじ</rt></ruby>があります。", romaji: "Gomen nasai, kyou wa youji ga arimasu." },
        context: {
            "ja": "友達からの遊びや食事の誘いに行けない時、相手を傷つけずに優しく断る言葉です。",
            "en": "A polite way to decline a friend's invitation to hang out or eat when you have other plans.",
            "pt": "Uma maneira educada de recusar um convite de um amigo quando você tem outros planos.", "zh-CN": "因为有事无法赴约时，委婉拒绝朋友邀请的用语。", "tl": "Isang magalang na paraan para tumanggi sa imbitasyon ng kaibigan.", "vi": "Cách từ chối lịch sự lời mời của bạn bè khi bạn có việc bận.", "es": "Una forma educada de rechazar una invitación de un amigo.", "ne": "साथीको निमन्त्रणा अस्वीकार गर्ने विनम्र तरिका।", "id": "Cara sopan untuk menolak ajakan teman saat Anda ada urusan lain."
        },
        translations: {
            "en": "I'm sorry, I have plans today.", "pt": "Desculpe, tenho compromissos hoje.", "zh-CN": "对不起，我今天有事。", "tl": "Pasensya na, may gagawin ako ngayon.", "vi": "Xin lỗi, hôm nay tôi có việc rồi.", "es": "Lo siento, tengo planes hoy.", "ne": "माफ गर्नुहोस्, आज मेरो काम छ।", "id": "Maaf, saya ada urusan hari ini."
        }
    },
    // 4. 物を借りる（新規）
    {
        id: "japeak_conv_004", title: "物を借りる (Borrowing Something)", category: "school_life_conversation",
        japanese: "ペンを貸してくれませんか。", target_speech: "ぺんをかしてくれませんか",
        ruby: { hiragana: "ペンを<ruby>貸<rt>か</rt></ruby>してくれませんか。", romaji: "Pen o kashite kuremasen ka." },
        context: {
            "ja": "授業中に文房具を忘れた時など、隣の席の友達に物を借りたい時に使います。",
            "en": "Used to ask a friend to lend you something, like a pen when you forgot yours in class.",
            "pt": "Usado para pedir a um amigo que lhe empreste algo, como uma caneta.", "zh-CN": "上课时忘记带文具，想向旁边的同学借用时的用语。", "tl": "Ginagamit upang humiram ng isang bagay mula sa kaibigan, tulad ng bolpen.", "vi": "Dùng để mượn bạn bè một vật gì đó, chẳng hạn như bút.", "es": "Se usa para pedirle prestado algo a un amigo, como un bolígrafo.", "ne": "साथीसँग कलम जस्ता सामान माग्न प्रयोग गरिन्छ।", "id": "Digunakan untuk meminjam sesuatu dari teman, seperti pulpen."
        },
        translations: {
            "en": "Could you lend me a pen?", "pt": "Você poderia me emprestar uma caneta?", "zh-CN": "能借我一支笔吗？", "tl": "Pwede ba akong humiram ng bolpen?", "vi": "Bạn cho mình mượn một cây bút được không?", "es": "¿Me podrías prestar un bolígrafo?", "ne": "के मलाई कलम दिन सक्नुहुन्छ?", "id": "Bolehkah saya pinjam pulpenmu?"
        }
    },
    // 5. 遊びに誘う（週末）（新規）
    {
        id: "japeak_conv_005", title: "遊びに誘う (Inviting to Hang Out)", category: "school_life_conversation",
        japanese: "今週末、一緒に遊びに行きませんか。", target_speech: "こんしゅうまついっしょにあそびにいきませんか",
        ruby: { hiragana: "<ruby>今週末<rt>こんしゅうまつ</rt></ruby>、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>遊<rt>あそ</rt></ruby>びに<ruby>行<rt>い</rt></ruby>きませんか。", romaji: "Konshuumatsu, issho ni asobi ni ikimasen ka." },
        context: {
            "ja": "学校が休みの週末に、仲良くなった友達を買い物や映画などに誘う言葉です。",
            "en": "A phrase to invite a good friend to hang out, go shopping, or see a movie on the weekend.",
            "pt": "Uma frase para convidar um amigo para sair no fim de semana.", "zh-CN": "周末时邀请好朋友一起出去玩或逛街的用语。", "tl": "Ginagamit para anyayahan ang isang kaibigan na lumabas sa weekend.", "vi": "Câu dùng để rủ bạn bè đi chơi vào cuối tuần.", "es": "Una frase para invitar a un amigo a salir el fin de semana.", "ne": "सप्ताहन्तमा साथीलाई घुम्न जान बोलाउने शब्द।", "id": "Kalimat untuk mengajak teman jalan-jalan di akhir pekan."
        },
        translations: {
            "en": "Would you like to hang out this weekend?", "pt": "Você gostaria de sair neste fim de semana?", "zh-CN": "这周末要不要一起出去玩？", "tl": "Gusto mo bang lumabas ngayong weekend?", "vi": "Cuối tuần này đi chơi cùng nhau không?", "es": "¿Te gustaría salir este fin de semana?", "ne": "यस सप्ताहन्तमा सँगै घुम्न जाऔं?", "id": "Maukah kamu pergi jalan-jalan akhir pekan ini?"
        }
    },
    // 6. 相手を褒める（新規）
    {
        id: "japeak_conv_006", title: "相手を褒める (Complimenting)", category: "school_life_conversation",
        japanese: "すごいですね！かっこいいです。", target_speech: "すごいですねかっこいいです",
        ruby: { hiragana: "すごいですね！かっこいいです。", romaji: "Sugoi desu ne! Kakkoii desu." },
        context: {
            "ja": "友達の持ち物や、スポーツのプレイなどを見て、素敵だと感じた時に素直に褒める言葉です。",
            "en": "Used to honestly compliment a friend's belongings or their skills in sports.",
            "pt": "Usado para elogiar honestamente as coisas de um amigo ou suas habilidades.", "zh-CN": "看到朋友的物品或出色的表现时，由衷赞美对方的用语。", "tl": "Ginagamit para purihin ang kaibigan sa kanilang gamit o galing.", "vi": "Dùng để khen ngợi đồ vật hoặc kỹ năng của bạn bè một cách chân thành.", "es": "Se usa para elogiar sinceramente las cosas o habilidades de un amigo.", "ne": "साथीको सामान वा सीपको प्रशंसा गर्न प्रयोग गरिन्छ।", "id": "Digunakan untuk memuji barang atau kemampuan teman."
        },
        translations: {
            "en": "That's amazing! It's so cool.", "pt": "Isso é incrível! É muito legal.", "zh-CN": "太棒了！真帅气。", "tl": "Ang galing! Ang astig.", "vi": "Tuyệt quá! Rất tuyệt vời.", "es": "¡Eso es increíble! Es genial.", "ne": "धेरै राम्रो! कस्तो अचम्मको।", "id": "Hebat sekali! Itu sangat keren."
        }
    },
    // 7. 分からないことを友達に聞く（新規）
    {
        id: "japeak_conv_007", title: "友達に質問する (Asking a Friend a Question)", category: "school_life_conversation",
        japanese: "これ、どういう意味か教えてくれる？", target_speech: "これどういういみかおしえてくれる",
        ruby: { hiragana: "これ、どういう<ruby>意味<rt>いみ</rt></ruby>か<ruby>教<rt>おし</rt></ruby>えてくれる？", romaji: "Kore, dou iu imi ka oshiete kureru?" },
        context: {
            "ja": "先生ではなく、仲の良い友達に日本語の意味やプリントの内容をフランクに聞く時の言葉です。",
            "en": "A casual way to ask a close friend what a Japanese word or a handout means.",
            "pt": "Uma maneira casual de perguntar a um amigo próximo o que algo significa.", "zh-CN": "向关系好的朋友询问日语含义或讲义内容时的随和用语。", "tl": "Isang kaswal na paraan upang magtanong sa kaibigan kung ano ang ibig sabihin ng isang bagay.", "vi": "Cách hỏi thân mật một người bạn thân về ý nghĩa của từ vựng hoặc tài liệu.", "es": "Una forma informal de preguntarle a un amigo cercano qué significa algo.", "ne": "नजिकको साथीलाई कुनै कुराको अर्थ सोध्ने अनौपचारिक तरिका।", "id": "Cara santai untuk bertanya kepada teman dekat apa arti sesuatu."
        },
        translations: {
            "en": "Could you tell me what this means?", "pt": "Você poderia me dizer o que isso significa?", "zh-CN": "你能告诉我这是什么意思吗？", "tl": "Pwede mo bang sabihin sa akin kung ano ang ibig sabihin nito?", "vi": "Cậu có thể cho mình biết cái này có nghĩa là gì không?", "es": "¿Podrías decirme qué significa esto?", "ne": "यसको अर्थ के हो मलाई बताउन सक्नुहुन्छ?", "id": "Bisakah kamu memberitahuku apa arti ini?"
        }
    }
];