// ==========================================
// Japeak 教材データベース（多言語対応・基礎編）
// ==========================================
const japeakData = [
    // 1. あいさつ
    {
        id: "japeak_001", title: "あいさつ① (Greetings 1)", category: "school_life",
        japanese: "宜しくお願いします。", target_speech: "よろしくお願いします",
        ruby: { hiragana: "<ruby>宜<rt>よろ</rt></ruby>しくお<ruby>願<rt>ねが</rt></ruby>いします。", romaji: "Yoroshiku onegai shimasu." },
        context: {
            "ja": "初めて会ったときや、相手に何かをお願いするときに使います。良い関係を作るための大切な言葉です。",
            "en": "Used when meeting someone for the first time, or when asking for a favor. A crucial phrase for building good relationships.",
            "pt": "Usado ao conhecer alguém pela primeira vez ou ao pedir um favor.", "zh-CN": "初次见面或请求对方帮忙时使用。这是建立良好关系的重要用语。", "tl": "Ginagamit kapag unang nakikita ang isang tao, o kapag may ipinapakiusap.", "vi": "Dùng khi gặp ai đó lần đầu tiên, hoặc khi nhờ vả điều gì đó.", "es": "Se usa al conocer a alguien por primera vez o al pedir un favor.", "ne": "पहिलो पटक कसैलाई भेट्दा वा कुनै अनुरोध गर्दा प्रयोग गरिन्छ।", "id": "Digunakan saat pertama kali bertemu seseorang, atau saat meminta bantuan."
        },
        translations: {
            "en": "I look forward to working with you. / Please be kind to me.", "pt": "Conto com sua colaboração. / Muito prazer.", "zh-CN": "请多关照。", "tl": "Ikinagagalak ko kayong makasama.", "vi": "Rất mong nhận được sự giúp đỡ của bạn.", "es": "Mucho gusto. / Cuento con su colaboración.", "ne": "तपाईंसँग काम गर्न तत्पर छु।", "id": "Mohon bimbingannya."
        }
    },
    // 2. 職員室に入る
    {
        id: "japeak_002", title: "職員室に入る (Entering a Room)", category: "school_life",
        japanese: "失礼します。", target_speech: "しつれいします",
        ruby: { hiragana: "<ruby>失礼<rt>しつれい</rt></ruby>します。", romaji: "Shitsurei shimasu." },
        context: {
            "ja": "職員室や校長室など、部屋に入るときに言う挨拶です。部屋を出るときにも使います。",
            "en": "A greeting used when entering a room, such as the teachers' room. Also used when leaving.",
            "pt": "Uma saudação usada ao entrar em uma sala.", "zh-CN": "进入教职员室等房间时使用的问候语。", "tl": "Isang pagbati na ginagamit kapag pumapasok sa isang silid.", "vi": "Lời chào được sử dụng khi bước vào phòng.", "es": "Un saludo que se usa al entrar a una habitación.", "ne": "शिक्षक कक्ष जस्ता कोठामा प्रवेश गर्दा प्रयोग गरिने अभिवादन।", "id": "Salam yang digunakan saat memasuki ruangan."
        },
        translations: {
            "en": "Excuse me.", "pt": "Com licença.", "zh-CN": "打扰了。", "tl": "Makikiraan po.", "vi": "Xin phép.", "es": "Con permiso.", "ne": "माफ गर्नुहोस्।", "id": "Permisi."
        }
    },
    // 3. トイレに行きたい時
    {
        id: "japeak_003", title: "許可をもらう (Asking Permission)", category: "school_life",
        japanese: "トイレに行ってもいいですか。", target_speech: "といれにいってもいいですか",
        ruby: { hiragana: "トイレに<ruby>行<rt>い</rt></ruby>ってもいいですか。", romaji: "Toire ni itte mo ii desu ka." },
        context: {
            "ja": "授業中や部活中に、トイレに行きたいときに先生に許可をもらうためのフレーズです。",
            "en": "A phrase to ask the teacher for permission to go to the bathroom during class or club activities.",
            "pt": "Uma frase para pedir permissão ao professor para ir ao banheiro.", "zh-CN": "在课堂上想去洗手间时向老师寻求许可的用语。", "tl": "Isang parirala upang humingi ng pahintulot na pumunta sa banyo.", "vi": "Một câu để xin phép giáo viên đi vệ sinh.", "es": "Una frase para pedir permiso al profesor para ir al baño.", "ne": "शौचालय जान शिक्षकसँग अनुमति माग्ने वाक्यांश।", "id": "Kalimat untuk meminta izin pergi ke toilet."
        },
        translations: {
            "en": "May I go to the bathroom?", "pt": "Posso ir ao banheiro?", "zh-CN": "我可以去洗手间吗？", "tl": "Maaari po ba akong pumunta sa banyo?", "vi": "Em có thể đi vệ sinh được không ạ?", "es": "¿Puedo ir al baño?", "ne": "म शौचालय जान सक्छु?", "id": "Bolehkah saya pergi ke toilet?"
        }
    },
    // 4. 理解できない時
    {
        id: "japeak_004", title: "聞き返す (Asking to Repeat)", category: "school_life",
        japanese: "分かりません。もう一度お願いします。", target_speech: "わかりませんもういちどおねがいします",
        ruby: { hiragana: "<ruby>分<rt>わ</rt></ruby>かりません。もう<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。", romaji: "Wakarimasen. Mou ichido onegai shimasu." },
        context: {
            "ja": "先生の指示や、友達の話が理解できなかった時に、もう一度言ってほしいと伝える言葉です。",
            "en": "Used when you don't understand instructions and ask to repeat them.",
            "pt": "Usado quando você não entende as instruções e pede para repetir.", "zh-CN": "当你听不懂指示时，请求对方再念一次的用语。", "tl": "Ginagamit kapag hindi mo naintindihan at pakiusapan silang ulitin.", "vi": "Được sử dụng khi bạn không hiểu và yêu cầu lặp lại.", "es": "Se usa cuando no entiendes y pides que lo repitan.", "ne": "नबुझ्दा फेरि भन्न अनुरोध गर्न प्रयोग गरिन्छ।", "id": "Digunakan saat Anda tidak mengerti dan meminta untuk mengulanginya."
        },
        translations: {
            "en": "I don't understand. Could you repeat that, please?", "pt": "Eu não entendo. Mais uma vez, por favor.", "zh-CN": "我不明白。请再讲一次。", "tl": "Hindi ko po maintindihan. Pakiulit po.", "vi": "Em không hiểu. Xin hãy nhắc lại một lần nữa.", "es": "No entiendo. ¿Podría repetirlo?", "ne": "मैले बुझिन। कृपया फेरि भन्नुहोस्।", "id": "Saya tidak mengerti. Tolong ulangi sekali lagi."
        }
    },
    // 5. 助けを求める時
    {
        id: "japeak_005", title: "助けを呼ぶ (Asking for Help)", category: "school_life",
        japanese: "手伝ってください。", target_speech: "てつだってください",
        ruby: { hiragana: "<ruby>手伝<rt>てつだ</rt></ruby>ってください。", romaji: "Tetsudatte kudasai." },
        context: {
            "ja": "勉強が分からない時や、重いものを運ぶ時など、誰かに助けが必要な時に使います。",
            "en": "Used when you need someone's help, such as when you don't understand your studies.",
            "pt": "Usado quando você precisa da ajuda de alguém.", "zh-CN": "需要别人帮助时使用。", "tl": "Ginagamit kapag kailangan mo ng tulong.", "vi": "Được sử dụng khi bạn cần ai đó giúp đỡ.", "es": "Se usa cuando necesitas ayuda.", "ne": "सहयोग चाहिने बेला प्रयोग गरिन्छ।", "id": "Digunakan saat Anda membutuhkan bantuan."
        },
        translations: {
            "en": "Please help me.", "pt": "Por favor, me ajude.", "zh-CN": "请帮帮我。", "tl": "Tulungan mo po ako.", "vi": "Xin hãy giúp tôi.", "es": "Por favor, ayúdame.", "ne": "कृपया मलाई सहयोग गर्नुहोस्।", "id": "Tolong bantu saya."
        }
    },
    // 6. 遅刻した時（新規）
    {
        id: "japeak_006", title: "遅刻した時 (Being Late)", category: "school_life",
        japanese: "遅れてすみません。", target_speech: "おくれてすみません",
        ruby: { hiragana: "<ruby>遅<rt>おく</rt></ruby>れてすみません。", romaji: "Okurete sumimasen." },
        context: {
            "ja": "授業や集合時間に遅刻してしまった時に、先生や友達に謝る言葉です。",
            "en": "An apology used when you are late for class or a meeting.",
            "pt": "Um pedido de desculpas usado quando você se atrasa para a aula.", "zh-CN": "上课或集合迟到时向老师或朋友道歉的用语。", "tl": "Isang paghingi ng paumanhin kapag nahuli ka sa klase.", "vi": "Lời xin lỗi khi bạn đi học muộn.", "es": "Una disculpa que se usa cuando llegas tarde a clase.", "ne": "कक्षा वा भेटघाटमा ढिलो हुँदा माफी माग्ने शब्द।", "id": "Permintaan maaf saat Anda terlambat masuk kelas."
        },
        translations: {
            "en": "I'm sorry I'm late.", "pt": "Desculpe o atraso.", "zh-CN": "对不起，我迟到了。", "tl": "Paumanhin po at nahuli ako.", "vi": "Em xin lỗi vì đã đến muộn.", "es": "Siento llegar tarde.", "ne": "ढिलो भएकोमा माफ गर्नुहोस्।", "id": "Maaf saya terlambat."
        }
    },
    // 7. 忘れ物をした時（新規）
    {
        id: "japeak_007", title: "忘れ物をした時 (Forgetting Something)", category: "school_life",
        japanese: "教科書を忘れました。", target_speech: "きょうかしょをわすれました",
        ruby: { hiragana: "<ruby>教科書<rt>きょうかしょ</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れました。", romaji: "Kyoukasho o wasuremashita." },
        context: {
            "ja": "授業で使う教科書やノートを家に忘れてしまった時に、先生に伝える言葉です。",
            "en": "A phrase to tell the teacher when you forget your textbook or notebook at home.",
            "pt": "Uma frase para dizer ao professor quando você esquece seu livro didático.", "zh-CN": "忘记带教科书或笔记本时向老师说明的用语。", "tl": "Ginagamit upang sabihin sa guro na nakalimutan mo ang iyong aklat.", "vi": "Câu nói với giáo viên khi bạn để quên sách giáo khoa.", "es": "Una frase para decirle al profesor que olvidaste tu libro de texto.", "ne": "पाठ्यपुस्तक बिर्संदा शिक्षकलाई भनिने वाक्यांश।", "id": "Kalimat untuk memberitahu guru saat Anda lupa membawa buku cetak."
        },
        translations: {
            "en": "I forgot my textbook.", "pt": "Esqueci meu livro didático.", "zh-CN": "我忘记带教科书了。", "tl": "Nakalimutan ko po ang aking aklat.", "vi": "Em quên mang sách giáo khoa ạ.", "es": "Olvidé mi libro de texto.", "ne": "मैले मेरो पाठ्यपुस्तक बिर्सें।", "id": "Saya lupa membawa buku cetak."
        }
    },
    // 8. 早退したい時（新規）
    {
        id: "japeak_008", title: "早退したい時 (Leaving Early)", category: "school_life",
        japanese: "早退してもいいですか。", target_speech: "そうたいしてもいいですか",
        ruby: { hiragana: "<ruby>早退<rt>そうたい</rt></ruby>してもいいですか。", romaji: "Soutai shite mo ii desu ka." },
        context: {
            "ja": "体調が悪い時や、家の用事で学校を早く帰りたい時に、先生に許可をもらう言葉です。",
            "en": "A phrase to ask the teacher for permission to leave school early due to illness or family reasons.",
            "pt": "Uma frase para pedir permissão para sair mais cedo da escola.", "zh-CN": "因为生病或家事需要提前放学时，向老师请假的用语。", "tl": "Ginagamit upang humingi ng pahintulot na umuwi nang maaga.", "vi": "Câu để xin phép giáo viên về sớm khi bị ốm hoặc có việc gia đình.", "es": "Frase para pedir permiso para salir temprano de la escuela.", "ne": "बिरामी वा कामको कारण छिटो घर जान अनुमति माग्ने शब्द।", "id": "Kalimat untuk meminta izin pulang lebih awal karena sakit atau ada urusan."
        },
        translations: {
            "en": "May I leave early?", "pt": "Posso sair mais cedo?", "zh-CN": "我可以早退吗？", "tl": "Maaari po ba akong umuwi nang maaga?", "vi": "Em có thể về sớm được không ạ?", "es": "¿Puedo salir temprano?", "ne": "म छिटो जान सक्छु?", "id": "Bolehkah saya pulang lebih awal?"
        }
    },
    // 9. 言葉の意味を聞く時（新規）
    {
        id: "japeak_009", title: "言葉を聞く (Asking How to Say)", category: "school_life",
        japanese: "これは日本語で何と言いますか。", target_speech: "これはにほんごでなんといいますか",
        ruby: { hiragana: "これは<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。", romaji: "Kore wa nihongo de nan to iimasu ka." },
        context: {
            "ja": "物の名前や、自分の言いたいことが日本語でどう表現するのか分からない時に聞く言葉です。",
            "en": "Used to ask how to say something in Japanese when you don't know the word.",
            "pt": "Usado para perguntar como se diz algo em japonês.", "zh-CN": "不知道某物用日语怎么说时使用的提问方式。", "tl": "Ginagamit upang itanong kung ano ang tawag sa isang bagay sa Japanese.", "vi": "Dùng để hỏi cách nói một từ nào đó bằng tiếng Nhật.", "es": "Se usa para preguntar cómo se dice algo en japonés.", "ne": "जापानी भाषामा यसलाई के भनिन्छ भनेर सोध्न प्रयोग गरिन्छ।", "id": "Digunakan untuk bertanya apa bahasa Jepangnya suatu benda."
        },
        translations: {
            "en": "How do you say this in Japanese?", "pt": "Como se diz isso em japonês?", "zh-CN": "这个用日语怎么说？", "tl": "Ano po ito sa Japanese?", "vi": "Cái này tiếng Nhật nói như thế nào ạ?", "es": "¿Cómo se dice esto en japonés?", "ne": "यसलाई जापानी भाषामा के भनिन्छ?", "id": "Apa bahasa Jepangnya ini?"
        }
    },
    // 10. ゆっくり話してほしい時（新規）
    {
        id: "japeak_010", title: "ゆっくり話してほしい時 (Asking to Speak Slower)", category: "school_life",
        japanese: "もう少しゆっくり話してください。", target_speech: "もうすこしゆっくりはなしてください",
        ruby: { hiragana: "もう<ruby>少<rt>すこ</rt></ruby>しゆっくり<ruby>話<rt>はな</rt></ruby>してください。", romaji: "Mou sukoshi yukkuri hanashite kudasai." },
        context: {
            "ja": "相手の日本語が速くて聞き取れない時に、ゆっくり話してもらうようにお願いする言葉です。",
            "en": "Used to ask someone to speak more slowly when you cannot catch what they are saying.",
            "pt": "Usado para pedir a alguém que fale mais devagar.", "zh-CN": "对方语速太快听不清时，请求对方说慢一点的用语。", "tl": "Ginagamit upang pakiusapan ang isang tao na magsalita nang mas mabagal.", "vi": "Dùng để yêu cầu ai đó nói chậm lại một chút.", "es": "Se usa para pedir a alguien que hable más despacio.", "ne": "कसैलाई अलि बिस्तारै बोल्न अनुरोध गर्न प्रयोग गरिन्छ।", "id": "Digunakan untuk meminta seseorang berbicara lebih pelan."
        },
        translations: {
            "en": "Please speak a little slower.", "pt": "Por favor, fale um pouco mais devagar.", "zh-CN": "请说慢一点。", "tl": "Pakibagalan po ng kaunti ang pagsasalita.", "vi": "Xin hãy nói chậm lại một chút.", "es": "Por favor, hable un poco más despacio.", "ne": "कृपया अलि बिस्तारै बोल्नुहोस्।", "id": "Tolong bicara sedikit lebih pelan."
        }
    }
];