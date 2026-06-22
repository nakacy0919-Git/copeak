// ==========================================
// Japeak 教材データベース（トラブル・困りごと）
// ==========================================
const japeakTroublesData = [
    {
        id: "japeak_trb_001", title: "物をなくした (Lost Something)", category: "troubles",
        japanese: "物をなくしました。", target_speech: "ものをなくしました",
        ruby: { hiragana: "<ruby>物<rt>もの</rt></ruby>をなくしました。", romaji: "Mono o nakushimashita." },
        context: {
            "ja": "教科書や文房具など、自分の持ち物がどこかにいってしまった時に先生に伝える言葉です。",
            "en": "Used to tell the teacher when you have lost your belongings, like a textbook or stationery.",
            "pt": "Usado para dizer ao professor quando você perdeu seus pertences, como um livro ou material escolar.",
            "zh-CN": "弄丢了教科书或文具等自己的物品时，向老师报告的用语。",
            "tl": "Ginagamit para sabihin sa guro kapag nawawala ang iyong gamit, tulad ng aklat o lapis.",
            "vi": "Dùng để báo với giáo viên khi bạn làm mất đồ đạc của mình như sách giáo khoa hay dụng cụ học tập.",
            "es": "Se usa para decirle al profesor cuando has perdido tus pertenencias, como un libro de texto o útiles escolares.",
            "ne": "आफ्नो किताब वा कापी-कलम जस्ता सामान हराउँदा शिक्षकलाई जानकारी दिन प्रयोग गरिन्छ।",
            "id": "Digunakan untuk memberitahu guru saat Anda kehilangan barang, seperti buku cetak atau alat tulis."
        },
        translations: {
            "en": "I lost something.", "pt": "Eu perdi uma coisa.", "zh-CN": "我把东西弄丢了。", "tl": "May nawala po sa akin.", "vi": "Em làm mất đồ rồi ạ.", "es": "Perdí algo.", "ne": "मैले मेरो सामान हराएँ।", "id": "Saya kehilangan barang."
        }
    },
    {
        id: "japeak_trb_002", title: "落とし物を拾った (Found Something)", category: "troubles",
        japanese: "落とし物を拾いました。", target_speech: "おとしものをひろいました",
        ruby: { hiragana: "<ruby>落<rt>お</rt></ruby>とし<ruby>物<rt>もの</rt></ruby>を<ruby>拾<rt>ひろ</rt></ruby>いました。", romaji: "Otoshimono o hiroimashita." },
        context: {
            "ja": "廊下や教室で、誰かの落とし物を見つけた時に、先生に渡して報告する言葉です。",
            "en": "Used to report and hand over something you found on the floor in the hallway or classroom to a teacher.",
            "pt": "Usado para relatar e entregar a um professor algo que você encontrou no chão no corredor ou na sala.",
            "zh-CN": "在走廊或教室里捡到别人遗失的物品，将其交给老师时的用语。",
            "tl": "Ginagamit kapag may napulot kang gamit sa koridor o klase at ibibigay ito sa guro.",
            "vi": "Dùng khi bạn nhặt được đồ rơi ở hành lang hoặc lớp học và mang nộp lại cho giáo viên.",
            "es": "Se usa para reportar y entregar a un profesor algo que encontraste en el piso en el pasillo o en el salón.",
            "ne": "बरामडा वा कक्षामा कसैको हराएको सामान भेटाएर शिक्षकलाई बुझाउँदा प्रयोग गरिन्छ।",
            "id": "Digunakan saat Anda menemukan barang yang jatuh di lorong atau kelas dan menyerahkannya kepada guru."
        },
        translations: {
            "en": "I found a lost item.", "pt": "Eu achei um item perdido.", "zh-CN": "我捡到了失物。", "tl": "May napulot po akong gamit.", "vi": "Em nhặt được đồ rơi ạ.", "es": "Encontré un objeto perdido.", "ne": "मैले हराएको सामान भेटाएँ।", "id": "Saya menemukan barang yang hilang."
        }
    },
    {
        id: "japeak_trb_003", title: "壊してしまった (Broke Something)", category: "troubles",
        japanese: "壊してしまいました。", target_speech: "こわしてしまいました",
        ruby: { hiragana: "<ruby>壊<rt>こわ</rt></ruby>してしまいました。", romaji: "Kowashite shimaimashita." },
        context: {
            "ja": "学校の道具や友達の持ち物を誤って壊してしまった時に、正直に謝って伝える大切な言葉です。",
            "en": "An important phrase used to honestly apologize when you accidentally break school property or a friend's belonging.",
            "pt": "Uma frase importante usada para se desculpar honestamente quando você quebra acidentalmente um bem da escola ou de um amigo.",
            "zh-CN": "不小心弄坏了学校的物品或朋友的东西时，诚实道歉并说明的重要用语。",
            "tl": "Isang mahalagang parirala para matapat na humingi ng tawad kapag nakasira ka ng gamit sa paaralan o ng kaibigan.",
            "vi": "Câu nói quan trọng dùng để xin lỗi thành thật khi bạn vô tình làm hỏng đồ của trường hoặc của bạn bè.",
            "es": "Una frase importante que se usa para disculparse honestamente cuando accidentalmente rompes propiedad de la escuela o de un amigo.",
            "ne": "झुक्किएर स्कुलको वा साथीको सामान बिगार्दा इमान्दारीपूर्वक माफी माग्न प्रयोग गरिने महत्त्वपूर्ण शब्द।",
            "id": "Kalimat penting untuk meminta maaf dengan jujur saat Anda tidak sengaja merusak fasilitas sekolah atau barang teman."
        },
        translations: {
            "en": "I broke it by accident.", "pt": "Eu quebrei sem querer.", "zh-CN": "我不小心弄坏了。", "tl": "Nakasira po ako.", "vi": "Em lỡ làm hỏng mất rồi ạ.", "es": "Lo rompí sin querer.", "ne": "मैले झुक्किएर बिगारें।", "id": "Saya tidak sengaja merusaknya."
        }
    },
    {
        id: "japeak_trb_004", title: "ケンカをした (Had a Fight)", category: "troubles",
        japanese: "友達とケンカをしました。", target_speech: "ともだちとけんかをとしました",
        ruby: { hiragana: "<ruby>友達<rt>ともだち</rt></ruby>とケンカをしました。", romaji: "Tomodachi to kenka o shimashita." },
        context: {
            "ja": "友達と言い合いになったり、ケンカをしてしまったりした時に、先生に相談して解決を手伝ってもらう言葉です。",
            "en": "Used to consult a teacher and ask for help resolving a fight or argument you had with a friend.",
            "pt": "Usado para consultar um professor e pedir ajuda para resolver uma briga ou discussão com um amigo.",
            "zh-CN": "和朋友发生争吵或打架后，找老师商量并请求帮助解决的用语。",
            "tl": "Ginagamit para humingi ng tulong sa guro kapag nakipag-away o nagkaroon ng hindi pagkakaunawaan sa kaibigan.",
            "vi": "Dùng để nhờ giáo viên giúp đỡ giải quyết khi bạn có cãi vã hoặc đánh nhau với bạn bè.",
            "es": "Se usa para consultar a un profesor y pedir ayuda para resolver una pelea o discusión con un amigo.",
            "ne": "साथीसँग झगडा पर्दा वा भनाभन हुँदा शिक्षकसँग सल्लाह गरेर समस्या समाधान गर्न मद्दत माग्ने शब्द।",
            "id": "Digunakan untuk berkonsultasi dengan guru dan meminta bantuan untuk menyelesaikan pertengkaran dengan teman."
        },
        translations: {
            "en": "I had a fight with my friend.", "pt": "Eu briguei com meu amigo.", "zh-CN": "我和朋友吵架/打架了。", "tl": "Nakaaway ko po ang kaibigan ko.", "vi": "Em đã cãi nhau/đánh nhau với bạn ạ.", "es": "Me peleé con mi amigo.", "ne": "मेरो साथीसँग झगडा भयो।", "id": "Saya bertengkar dengan teman."
        }
    },
    {
        id: "japeak_trb_005", title: "嫌なことをされた (Someone Was Mean)", category: "troubles",
        japanese: "嫌なことを言われました。", target_speech: "いやなことをいわれません",
        ruby: { hiragana: "<ruby>嫌<rt>いや</rt></ruby>なことを<ruby>言<rt>い</rt></ruby>われました。", romaji: "Iya na koto o iwaremashita." },
        context: {
            "ja": "誰かに悪口を言われたり、傷つくことをされたりした時に、一人で悩まずに先生や大人に伝えるためのSOSです。",
            "en": "An SOS used to tell a teacher or adult when someone says bad things to you or hurts you. Do not suffer alone.",
            "pt": "Um SOS usado para dizer a um professor ou adulto quando alguém diz coisas ruins para você ou te machuca. Não sofra sozinho.",
            "zh-CN": "被别人说坏话或做了伤害自己的事情时，不要一个人承担，向老师或大人求助的SOS信号。",
            "tl": "Isang SOS para sabihin sa guro o matanda kapag may nagsabi ng masama o nanakit sa iyo. Huwag sarilinin.",
            "vi": "Một tín hiệu cầu cứu (SOS) dùng để báo với giáo viên hoặc người lớn khi bị ai đó nói xấu hoặc làm tổn thương. Đừng chịu đựng một mình.",
            "es": "Un SOS que se usa para decirle a un profesor o adulto cuando alguien te dice cosas malas o te lastima. No sufras solo.",
            "ne": "कसैले नराम्रो कुरा भन्दा वा चित्त दुखाउँदा एक्लै नबसी शिक्षक वा ठूलो मान्छेलाई बताउने SOS (मद्दत माग्ने) शब्द।",
            "id": "SOS untuk memberitahu guru atau orang dewasa saat ada yang mengatakan hal buruk atau menyakiti Anda. Jangan pendam sendiri."
        },
        translations: {
            "en": "Someone said something mean to me.", "pt": "Alguém me disse uma coisa ruim.", "zh-CN": "有人对我说了难听的话。", "tl": "May nagsabi po ng masama sa akin.", "vi": "Có người nói những lời khó nghe với em ạ.", "es": "Alguien me dijo algo malo.", "ne": "मलाई कसैले नराम्रो कुरा भन्यो।", "id": "Seseorang mengatakan hal yang buruk padaku."
        }
    },
    {
        id: "japeak_trb_006", title: "トイレの紙がない (No Toilet Paper)", category: "troubles",
        japanese: "トイレの紙がありません。", target_speech: "といれのかみがありません",
        ruby: { hiragana: "トイレの<ruby>紙<rt>かみ</rt></ruby>がありません。", romaji: "Toire no kami ga arimasen." },
        context: {
            "ja": "学校のトイレに入った時、トイレットペーパーが切れていることに気づいて、友達や先生に知らせる言葉です。",
            "en": "Used to inform a friend or teacher that you noticed the toilet paper has run out in the school bathroom.",
            "pt": "Usado para informar a um amigo ou professor que você percebeu que o papel higiênico acabou no banheiro da escola.",
            "zh-CN": "上学校厕所时发现没有卫生纸了，用来通知朋友或老师的用语。",
            "tl": "Ginagamit upang sabihin sa kaibigan o guro na naubusan ng toilet paper sa banyo ng paaralan.",
            "vi": "Dùng để báo cho bạn bè hoặc giáo viên biết khi bạn phát hiện nhà vệ sinh của trường hết giấy.",
            "es": "Se usa para informar a un amigo o profesor que te diste cuenta de que se acabó el papel higiénico en el baño de la escuela.",
            "ne": "स्कुलको शौचालयमा जाँदा ट्वाइलेट पेपर सकिएको थाहा पाएर साथी वा शिक्षकलाई भन्दा प्रयोग गरिन्छ।",
            "id": "Digunakan untuk memberitahu teman atau guru bahwa tisu toilet di kamar mandi sekolah habis."
        },
        translations: {
            "en": "There is no toilet paper.", "pt": "Não tem papel higiênico.", "zh-CN": "厕所里没有纸了。", "tl": "Wala pong toilet paper.", "vi": "Nhà vệ sinh hết giấy rồi ạ.", "es": "No hay papel higiénico.", "ne": "शौचालयमा कागज छैन।", "id": "Tisu toiletnya habis."
        }
    },
    {
        id: "japeak_trb_007", title: "財布を落とした (Lost Wallet)", category: "troubles",
        japanese: "お財布を落としました。", target_speech: "おさいふをおとしました",
        ruby: { hiragana: "お<ruby>財布<rt>さいふ</rt></ruby>を<ruby>落<rt>お</rt></ruby>としました。", romaji: "Osaifu o otoshimashita." },
        context: {
            "ja": "登下校中や校外学習で、お金が入った財布をなくしてしまった時に、大急ぎで先生に助けを求める言葉です。",
            "en": "Used to urgently ask a teacher for help when you have lost your wallet with money in it during your commute or a field trip.",
            "pt": "Usado para pedir ajuda com urgência a um professor quando você perdeu sua carteira com dinheiro durante o trajeto ou um passeio escolar.",
            "zh-CN": "在上下学途中或校外学习时，把装有钱的钱包弄丢了，急忙向老师求助的用语。",
            "tl": "Ginagamit para madaliang humingi ng tulong sa guro kapag naiwala ang wallet na may pera papasok o pauwi.",
            "vi": "Dùng để khẩn cấp nhờ giáo viên giúp đỡ khi bạn làm rơi ví tiền trên đường đi học hoặc trong chuyến dã ngoại.",
            "es": "Se usa para pedir ayuda urgentemente a un profesor cuando has perdido tu billetera con dinero durante el viaje o una excursión.",
            "ne": "स्कुल आउँदा-जाँदा वा शैक्षिक भ्रमणमा पैसा भएको पर्स हराउँदा हतार-हतार शिक्षकसँग मद्दत माग्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk segera meminta bantuan guru saat Anda menjatuhkan atau kehilangan dompet berisi uang."
        },
        translations: {
            "en": "I lost my wallet.", "pt": "Perdi minha carteira.", "zh-CN": "我把钱包弄丢了。", "tl": "Naiwala ko po ang wallet ko.", "vi": "Em làm rơi ví rồi ạ.", "es": "Perdí mi billetera.", "ne": "मैले मेरो पर्स हराएँ।", "id": "Saya menjatuhkan/kehilangan dompet saya."
        }
    },
    {
        id: "japeak_trb_008", title: "道に迷った (Getting Lost)", category: "troubles",
        japanese: "道に迷いました。", target_speech: "みちにまよいました",
        ruby: { hiragana: "<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>いました。", romaji: "Michi ni mayoimashita." },
        context: {
            "ja": "遠足や校外学習、または登下校中に自分がどこにいるか分からなくなった時に、電話などで大人に伝えます。",
            "en": "Used to tell an adult over the phone that you don't know where you are during a field trip or your commute.",
            "pt": "Usado para dizer a um adulto pelo telefone que você não sabe onde está durante um passeio ou no trajeto.",
            "zh-CN": "远足、校外学习或上下学途中迷路，不知道自己在哪里时，通过电话等告诉大人的用语。",
            "tl": "Ginagamit para sabihin sa matanda sa pamamagitan ng telepono na nawawala ka papasok o sa field trip.",
            "vi": "Dùng để báo cho người lớn (qua điện thoại) khi bạn bị lạc, không biết mình đang ở đâu trên đường hoặc khi đi dã ngoại.",
            "es": "Se usa para decirle a un adulto por teléfono que no sabes dónde estás durante una excursión o en tu camino a la escuela.",
            "ne": "शैक्षिक भ्रमण वा बाटोमा हिँड्दा आफू कुन ठाउँमा छु भन्ने थाहा नपाएर बाटो बिराउँदा फोनबाट ठूलो मान्छेलाई बताउने शब्द।",
            "id": "Digunakan untuk memberitahu orang dewasa via telepon bahwa Anda tersesat dan tidak tahu sedang berada di mana."
        },
        translations: {
            "en": "I'm lost.", "pt": "Estou perdido.", "zh-CN": "我迷路了。", "tl": "Naliligaw po ako.", "vi": "Em bị lạc đường rồi ạ.", "es": "Estoy perdido.", "ne": "म बाटो हराएँ।", "id": "Saya tersesat."
        }
    },
    {
        id: "japeak_trb_009", title: "友達のケガを知らせる (Friend is Hurt)", category: "troubles",
        japanese: "友達がケガをしました。", target_speech: "ともだちがけがをしました",
        ruby: { hiragana: "<ruby>友達<rt>ともだち</rt></ruby>がケガをしました。", romaji: "Tomodachi ga kega o shimashita." },
        context: {
            "ja": "自分ではなく、一緒にいる友達が遊具から落ちたりしてケガをした時に、急いで大人を呼びに行く言葉です。",
            "en": "Used to quickly call an adult when a friend you are with falls from playground equipment or gets hurt.",
            "pt": "Usado para chamar um adulto rapidamente quando um amigo cai de um brinquedo ou se machuca.",
            "zh-CN": "一起玩的朋友从游乐设施上掉下来或受伤时，急忙跑去叫大人求助的用语。",
            "tl": "Ginagamit para mabilis na tumawag ng matanda kapag nasaktan o nahulog ang kaibigan mo.",
            "vi": "Dùng để chạy đi gọi người lớn thật nhanh khi bạn bè đi cùng bị ngã hoặc bị thương.",
            "es": "Se usa para llamar rápidamente a un adulto cuando un amigo se cae de un juego o se lastima.",
            "ne": "आफू नभई सँगै भएको साथी लडेर वा चोट लागेर घाइते हुँदा हतार-हतार ठूलो मान्छेलाई बोलाउन प्रयोग गरिन्छ।",
            "id": "Digunakan untuk segera memanggil orang dewasa saat teman Anda jatuh atau terluka."
        },
        translations: {
            "en": "My friend got hurt.", "pt": "Meu amigo se machucou.", "zh-CN": "我的朋友受伤了。", "tl": "Nasugatan/Nasaktan po ang kaibigan ko.", "vi": "Bạn em bị thương rồi ạ.", "es": "Mi amigo se lastimó.", "ne": "मेरो साथीलाई चोट लाग्यो।", "id": "Teman saya terluka."
        }
    },
    {
        id: "japeak_trb_010", title: "助けを求める (What Should I Do?)", category: "troubles",
        japanese: "どうしたらいいですか。", target_speech: "どうしたらいいですか",
        ruby: { hiragana: "どうしたらいいですか。", romaji: "Doushitara ii desu ka." },
        context: {
            "ja": "トラブルが起きて、自分一人ではどうやって解決すればいいか全く分からない時に、大人にアドバイスをもらう言葉です。",
            "en": "Used to ask an adult for advice when a problem occurs and you have absolutely no idea how to solve it alone.",
            "pt": "Usado para pedir conselhos a um adulto quando ocorre um problema e você não tem ideia de como resolvê-lo sozinho.",
            "zh-CN": "发生麻烦，自己一个人完全不知道该怎么办时，向大人寻求建议的用语。",
            "tl": "Ginagamit para humingi ng payo sa matanda kapag may problema at hindi mo alam kung ano ang gagawin.",
            "vi": "Dùng để xin lời khuyên từ người lớn khi có rắc rối xảy ra mà bạn không biết phải giải quyết thế nào.",
            "es": "Se usa para pedir consejo a un adulto cuando ocurre un problema y no sabes cómo resolverlo solo.",
            "ne": "कुनै समस्या पर्दा र आफू एक्लैले के गर्ने भनेर केही पनि थाहा नपाउँदा ठूलो मान्छेसँग सल्लाह माग्ने शब्द।",
            "id": "Digunakan untuk meminta saran dari orang dewasa saat terjadi masalah dan Anda sama sekali tidak tahu cara menyelesaikannya."
        },
        translations: {
            "en": "What should I do?", "pt": "O que eu devo fazer?", "zh-CN": "我该怎么办？", "tl": "Ano po ang dapat kong gawin?", "vi": "Em nên làm gì bây giờ ạ?", "es": "¿Qué debo hacer?", "ne": "मैले के गर्दा ठीक होला?", "id": "Apa yang harus saya lakukan?"
        }
    }
];