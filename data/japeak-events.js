// ==========================================
// Japeak 教材データベース（行事・イベント）
// ==========================================
const japeakEventsData = [
    {
        id: "japeak_evt_001", title: "楽しみにする (Looking Forward to It)", category: "school_events",
        japanese: "運動会が楽しみです。", target_speech: "うんどうかいがたのしみです",
        ruby: { hiragana: "<ruby>運動会<rt>うんどうかい</rt></ruby>が<ruby>楽<rt>たの</rt></ruby>しみです。", romaji: "Undoukai ga tanoshimi desu." },
        context: {
            "ja": "運動会や遠足などの行事の前に、ワクワクしている気持ちを先生や友達に伝える言葉です。",
            "en": "Used to express your excitement to teachers and friends before school events like sports day or a field trip.",
            "pt": "Usado para expressar sua empolgação aos professores e amigos antes de eventos escolares, como o dia de esportes ou um passeio.",
            "zh-CN": "在运动会或远足等活动前，向老师或朋友表达自己期待、兴奋心情的用语。",
            "tl": "Ginagamit para ipakita sa guro at mga kaibigan ang iyong pagkasabik bago ang mga event tulad ng sports day o field trip.",
            "vi": "Dùng để bày tỏ tâm trạng háo hức, mong chờ với giáo viên và bạn bè trước các sự kiện như hội thao hay dã ngoại.",
            "es": "Se usa para expresar tu emoción a profesores y amigos antes de eventos escolares como el día de los deportes o una excursión.",
            "ne": "खेलकुद दिवस वा शैक्षिक भ्रमण जस्ता कार्यक्रमहरू अघि शिक्षक र साथीहरूलाई आफ्नो उत्साह र खुसी व्यक्त गर्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk mengungkapkan rasa antusias kepada guru dan teman sebelum acara sekolah seperti festival olahraga atau karyawisata."
        },
        translations: {
            "en": "I'm looking forward to sports day.", "pt": "Estou ansioso pelo festival esportivo.", "zh-CN": "我很期待运动会。", "tl": "Nasasabik na ako sa sports day.", "vi": "Em rất mong chờ hội thao.", "es": "Tengo muchas ganas de que llegue el día de los deportes.", "ne": "म खेलकुद दिवसको उत्सुकताका साथ पर्खिरहेको छु।", "id": "Saya sangat menantikan festival olahraga."
        }
    },
    {
        id: "japeak_evt_002", title: "持ち物の確認 (Checking Belongings)", category: "school_events",
        japanese: "持ち物は何ですか。", target_speech: "もちものはなんですか",
        ruby: { hiragana: "<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。", romaji: "Mochimono wa nan desu ka." },
        context: {
            "ja": "遠足や校外学習の前に、家から持ってくる必要があるものを先生に確認する大切な質問です。",
            "en": "An important question to ask the teacher what you need to bring from home before a field trip or excursion.",
            "pt": "Uma pergunta importante para fazer ao professor sobre o que você precisa trazer de casa antes de um passeio.",
            "zh-CN": "在远足或校外学习前，向老师确认需要从家里带什么物品的重要提问。",
            "tl": "Isang mahalagang tanong sa guro kung ano ang mga dapat dalhin mula sa bahay bago ang field trip.",
            "vi": "Câu hỏi quan trọng dùng để hỏi giáo viên xem cần mang theo những gì từ nhà trước khi đi dã ngoại hoặc học tập ngoại khóa.",
            "es": "Una pregunta importante para hacerle al profesor sobre lo que necesitas traer de casa antes de una excursión.",
            "ne": "शैक्षिक भ्रमणमा जानुअघि घरबाट के-के सामान ल्याउनुपर्छ भनेर शिक्षकलाई सोध्ने महत्त्वपूर्ण प्रश्न।",
            "id": "Pertanyaan penting kepada guru mengenai barang apa saja yang harus dibawa dari rumah sebelum karyawisata."
        },
        translations: {
            "en": "What should I bring?", "pt": "O que devo levar?", "zh-CN": "需要带什么东西？", "tl": "Ano po ang dapat kong dalhin?", "vi": "Em cần mang theo những gì ạ?", "es": "¿Qué debo llevar?", "ne": "मैले के-के ल्याउनुपर्छ?", "id": "Barang apa yang harus saya bawa?"
        }
    },
    {
        id: "japeak_evt_003", title: "集合時間の確認 (Gathering Time)", category: "school_events",
        japanese: "何時に集まりますか。", target_speech: "なんじにあつまりますか",
        ruby: { hiragana: "<ruby>何時<rt>なんじ</rt></ruby>に<ruby>集<rt>あつ</rt></ruby>まりますか。", romaji: "Nanji ni atsumarimasu ka." },
        context: {
            "ja": "行事の朝などに、遅刻しないように集合する時間を先生や友達に確認する言葉です。",
            "en": "Used to confirm the gathering time with a teacher or friends so you won't be late on the morning of an event.",
            "pt": "Usado para confirmar o horário de encontro com um professor ou amigos para não se atrasar na manhã de um evento.",
            "zh-CN": "在活动当天早上等时间，为了不迟到而向老师或朋友确认集合时间的用语。",
            "tl": "Ginagamit para kumpirmahin ang oras ng tagpuan sa guro o kaibigan para hindi mahuli sa event.",
            "vi": "Dùng để xác nhận thời gian tập trung với giáo viên hoặc bạn bè để không bị đến muộn trong ngày diễn ra sự kiện.",
            "es": "Se usa para confirmar la hora de encuentro con el profesor o amigos para no llegar tarde la mañana de un evento.",
            "ne": "कार्यक्रमको दिन ढिलो नहोस् भनेर शिक्षक वा साथीहरूसँग कति बजे जम्मा हुने भनेर निश्चित गर्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk memastikan jam berkumpul kepada guru atau teman agar tidak terlambat di hari acara."
        },
        translations: {
            "en": "What time should we gather?", "pt": "A que horas devemos nos reunir?", "zh-CN": "几点集合？", "tl": "Anong oras po tayo magtitipon?", "vi": "Mấy giờ chúng ta tập trung ạ?", "es": "¿A qué hora debemos reunirnos?", "ne": "हामी कति बजे जम्मा हुनुपर्छ?", "id": "Jam berapa kita harus berkumpul?"
        }
    },
    {
        id: "japeak_evt_004", title: "集合場所の確認 (Gathering Place)", category: "school_events",
        japanese: "どこに集まりますか。", target_speech: "どこにあつまりますか",
        ruby: { hiragana: "どこに<ruby>集<rt>あつ</rt></ruby>まりますか。", romaji: "Doko ni atsumarimasu ka." },
        context: {
            "ja": "いつもの教室ではない場所（体育館や運動場など）に集まる時に、場所を聞く言葉です。",
            "en": "Used to ask for the location when gathering somewhere other than the usual classroom (like the gym or field).",
            "pt": "Usado para perguntar o local quando se reúnem em outro lugar que não a sala de aula (como o ginásio ou campo).",
            "zh-CN": "集合地点不是平时的教室（如体育馆或操场）时，用来询问地点的用语。",
            "tl": "Ginagamit para itanong kung saan magtitipon kapag hindi sa karaniwang silid-aralan (tulad ng gym o field).",
            "vi": "Dùng để hỏi địa điểm khi tập trung ở một nơi không phải lớp học bình thường (như nhà thể chất hoặc sân vận động).",
            "es": "Se usa para preguntar el lugar cuando se reúnen en un sitio distinto al salón habitual (como el gimnasio o el patio).",
            "ne": "सधैंको कक्षाकोठामा नभई अर्को ठाउँमा (जस्तै हल वा चौरमा) जम्मा हुनुपर्दा ठाउँ सोध्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk menanyakan tempat berkumpul jika bukan di kelas seperti biasanya (misal di aula atau lapangan)."
        },
        translations: {
            "en": "Where should we gather?", "pt": "Onde devemos nos reunir?", "zh-CN": "在哪里集合？", "tl": "Saan po tayo magtitipon?", "vi": "Chúng ta tập trung ở đâu ạ?", "es": "¿Dónde debemos reunirnos?", "ne": "हामी कहाँ जम्मा हुनुपर्छ?", "id": "Di mana kita harus berkumpul?"
        }
    },
    {
        id: "japeak_evt_005", title: "お弁当の確認 (Need a Lunch Box?)", category: "school_events",
        japanese: "お弁当は必要ですか。", target_speech: "おべんとうはひつようですか",
        ruby: { hiragana: "お<ruby>弁当<rt>べんとう</rt></ruby>は<ruby>必要<rt>ひつよう</rt></ruby>ですか。", romaji: "Obentou wa hitsuyou desu ka." },
        context: {
            "ja": "給食がない行事の日に、自分でお弁当（昼ごはん）を持っていく必要があるかを確認します。",
            "en": "Used to check if you need to bring your own bento (lunch) on event days when school lunch is not provided.",
            "pt": "Usado para verificar se você precisa trazer sua própria marmita (bento) em dias de evento sem merenda escolar.",
            "zh-CN": "在没有供餐的活动日，确认是否需要自己带便当（午饭）的用语。",
            "tl": "Ginagamit para kumpirmahin kung kailangan mong magdala ng sariling bento (tanghalian) sa mga event na walang school lunch.",
            "vi": "Dùng để xác nhận xem có cần tự mang cơm hộp (bento) đi không vào những ngày sự kiện không có suất ăn ở trường.",
            "es": "Se usa para comprobar si necesitas traer tu propia comida (bento) en días de eventos donde no se sirve almuerzo escolar.",
            "ne": "विद्यालयमा खाजा नदिइने कार्यक्रमको दिनमा आफूले नै खाजा (बेन्तो) ल्याउनुपर्छ कि भनेर सोध्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk memastikan apakah harus membawa bekal (bento) sendiri pada hari acara yang tidak menyediakan makan siang."
        },
        translations: {
            "en": "Do I need to bring a lunch box?", "pt": "Preciso levar marmita?", "zh-CN": "需要带便当吗？", "tl": "Kailangan po bang magdala ng baon?", "vi": "Có cần mang theo cơm hộp không ạ?", "es": "¿Necesito traer una lonchera?", "ne": "के मैले खाजा ल्याउनुपर्छ?", "id": "Apakah saya perlu membawa bekal?"
        }
    },
    {
        id: "japeak_evt_006", title: "雨天時の確認 (In Case of Rain)", category: "school_events",
        japanese: "雨の日はどうなりますか。", target_speech: "あめのひはどうなりますか",
        ruby: { hiragana: "<ruby>雨<rt>あめ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>はどうなりますか。", romaji: "Ame no hi wa dou narimasu ka." },
        context: {
            "ja": "運動会や遠足など、外で行う行事の日に雨が降ったら予定がどう変わるのかを聞く言葉です。",
            "en": "Used to ask how the schedule will change if it rains on the day of an outdoor event like sports day or a field trip.",
            "pt": "Usado para perguntar como a programação vai mudar se chover no dia de um evento ao ar livre.",
            "zh-CN": "用来询问如果在运动会或远足等户外活动的当天下雨，计划会如何改变。",
            "tl": "Ginagamit para itanong kung ano ang mangyayari sa schedule kapag umulan sa araw ng outdoor event.",
            "vi": "Dùng để hỏi xem lịch trình sẽ thay đổi thế nào nếu trời mưa vào ngày diễn ra các hoạt động ngoài trời.",
            "es": "Se usa para preguntar cómo cambiará el horario si llueve el día de un evento al aire libre.",
            "ne": "खेलकुद दिवस वा भ्रमण जस्ता बाहिरी कार्यक्रमको दिन पानी पर्‍यो भने योजना के हुन्छ भनेर सोध्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk bertanya bagaimana jadwalnya jika turun hujan pada hari acara luar ruangan seperti festival olahraga."
        },
        translations: {
            "en": "What happens if it rains?", "pt": "O que acontece se chover?", "zh-CN": "下雨天怎么办？（计划会有什么变化？）", "tl": "Ano pong mangyayari kapag umulan?", "vi": "Nếu trời mưa thì sẽ thế nào ạ?", "es": "¿Qué pasa si llueve?", "ne": "पानी पर्‍यो भने के हुन्छ?", "id": "Bagaimana jika turun hujan?"
        }
    },
    {
        id: "japeak_evt_007", title: "応援する (Cheering)", category: "school_events",
        japanese: "頑張れ！", target_speech: "がんばれ",
        ruby: { hiragana: "<ruby>頑張<rt>がんば</rt></ruby>れ！", romaji: "Ganbare!" },
        context: {
            "ja": "運動会などで、走っている友達や競技をしているクラスメイトを大声で応援する短い言葉です。",
            "en": "A short phrase used to loudly cheer on friends running or competing in an event like sports day.",
            "pt": "Uma frase curta usada para torcer em voz alta pelos amigos que estão correndo ou competindo num evento.",
            "zh-CN": "在运动会等场合，大声为正在跑步或比赛的同学加油的简短用语。",
            "tl": "Isang maikling parirala para malakas na i-cheer ang mga kaibigan na tumatakbo o lumalaban sa sports day.",
            "vi": "Một câu nói ngắn gọn dùng để cổ vũ thật to cho bạn bè đang chạy hoặc thi đấu trong hội thao.",
            "es": "Una frase corta que se usa para animar en voz alta a los amigos que corren o compiten en un evento.",
            "ne": "खेलकुद दिवसमा दौडिरहेको वा प्रतियोगितामा भाग लिइरहेको साथीलाई ठूलो स्वरमा हौसला दिन प्रयोग गरिने शब्द।",
            "id": "Kata singkat untuk menyemangati dengan keras teman yang sedang berlari atau bertanding di festival olahraga."
        },
        translations: {
            "en": "Go for it! / Do your best!", "pt": "Força! / Dê o seu melhor!", "zh-CN": "加油！", "tl": "Galingan mo! / Kaya mo yan!", "vi": "Cố lên!", "es": "¡Vamos! / ¡Haz tu mejor esfuerzo!", "ne": "ल है! राम्रो गर!", "id": "Ayo! / Semangat!"
        }
    },
    {
        id: "japeak_evt_008", title: "出番の確認 (Our Turn is Next)", category: "school_events",
        japanese: "次は私のクラスです。", target_speech: "つぎはわたしのくらすです",
        ruby: { hiragana: "<ruby>次<rt>つぎ</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>のクラスです。", romaji: "Tsugi wa watashi no kurasu desu." },
        context: {
            "ja": "文化祭の発表や運動会の競技などで、自分たちの出番が次になった時に知らせて準備をするための言葉です。",
            "en": "Used to let everyone know and get ready when it's your class's turn next to perform or compete.",
            "pt": "Usado para avisar a todos e se preparar quando for a vez da sua turma de se apresentar ou competir.",
            "zh-CN": "在文化祭表演或运动会比赛中，轮到自己班级出场时，用来提醒大家做准备的用语。",
            "tl": "Ginagamit para ipaalam na klase niyo na ang susunod na magpe-perform o lalaban para makapaghanda.",
            "vi": "Dùng để thông báo cho mọi người chuẩn bị khi sắp đến lượt lớp mình biểu diễn hoặc thi đấu.",
            "es": "Se usa para avisar y prepararse cuando es el turno de tu clase para presentarse o competir.",
            "ne": "सांस्कृतिक कार्यक्रम वा खेलकुदमा अब आफ्नो कक्षाको पालो आयो भनेर सबैलाई तयार हुन जानकारी दिन प्रयोग गरिन्छ।",
            "id": "Digunakan untuk memberitahu teman-teman agar bersiap karena giliran kelas Anda tampil atau bertanding selanjutnya."
        },
        translations: {
            "en": "My class is next.", "pt": "A minha turma é a próxima.", "zh-CN": "下一个是我们班。", "tl": "Klase na namin ang susunod.", "vi": "Tiếp theo là đến lượt lớp mình.", "es": "Mi clase es la siguiente.", "ne": "अब हाम्रो कक्षाको पालो हो।", "id": "Giliran kelas saya selanjutnya."
        }
    },
    {
        id: "japeak_evt_009", title: "写真を撮る (Taking Pictures)", category: "school_events",
        japanese: "写真を撮りましょう。", target_speech: "しゃしんをとりましょう",
        ruby: { hiragana: "<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>りましょう。", romaji: "Shashin o torimashou." },
        context: {
            "ja": "行事の楽しい思い出を残すために、友達や先生と一緒に写真を撮りたい時に誘う言葉です。",
            "en": "Used to invite friends or teachers to take a picture together to capture fun memories of the event.",
            "pt": "Usado para convidar amigos ou professores para tirar uma foto juntos e guardar boas lembranças do evento.",
            "zh-CN": "为了留下活动的美好回忆，邀请朋友或老师一起拍照时的用语。",
            "tl": "Ginagamit para ayayain ang mga kaibigan o guro na magpakuha ng litrato para sa alaala ng event.",
            "vi": "Dùng để rủ bạn bè hoặc giáo viên cùng chụp ảnh để lưu lại những kỷ niệm vui vẻ của sự kiện.",
            "es": "Se usa para invitar a amigos o profesores a tomarse una foto juntos para guardar recuerdos del evento.",
            "ne": "कार्यक्रमको रमाइलो सम्झनाहरू राख्न साथी वा शिक्षकसँग सँगै फोटो खिच्न बोलाउँदा प्रयोग गरिन्छ।",
            "id": "Digunakan untuk mengajak teman atau guru berfoto bersama untuk mengabadikan kenangan acara."
        },
        translations: {
            "en": "Let's take a picture.", "pt": "Vamos tirar uma foto.", "zh-CN": "我们一起拍照吧。", "tl": "Magpa-picture tayo.", "vi": "Chúng ta cùng chụp ảnh nhé.", "es": "Tomemos una foto.", "ne": "हामी फोटो खिचौं।", "id": "Ayo berfoto."
        }
    },
    {
        id: "japeak_evt_010", title: "感想を伝える (Expressing Impressions)", category: "school_events",
        japanese: "とても楽しかったです。", target_speech: "とてもたのしかったです",
        ruby: { hiragana: "とても<ruby>楽<rt>たの</rt></ruby>しかったです。", romaji: "Totemo tanoshikatta desu." },
        context: {
            "ja": "行事がすべて終わった後、良い思い出になったことや喜びを友達や先生に伝える言葉です。",
            "en": "Used after the event is over to tell your friends or teachers that you had a great time and made good memories.",
            "pt": "Usado após o evento para dizer aos amigos ou professores que você se divertiu muito e fez boas lembranças.",
            "zh-CN": "活动全部结束后，向朋友或老师表达自己玩得很开心、留下了美好回忆的用语。",
            "tl": "Sinasabi pagkatapos ng event para sabihin sa mga kaibigan o guro na naging masaya ka at maganda ang karanasan mo.",
            "vi": "Dùng sau khi sự kiện kết thúc để nói với bạn bè hoặc giáo viên rằng bạn đã rất vui và có những kỷ niệm đẹp.",
            "es": "Se usa después del evento para decirles a tus amigos o profesores que te divertiste mucho y tienes buenos recuerdos.",
            "ne": "कार्यक्रम सकिएपछि धेरै रमाइलो भयो र राम्रो सम्झना रह्यो भनेर साथी वा शिक्षकलाई बताउन प्रयोग गरिन्छ।",
            "id": "Digunakan setelah acara selesai untuk memberitahu teman atau guru bahwa Anda sangat bersenang-senang dan menjadi kenangan yang indah."
        },
        translations: {
            "en": "It was a lot of fun.", "pt": "Foi muito divertido.", "zh-CN": "玩得非常开心。", "tl": "Naging sobrang saya po.", "vi": "Sự kiện đã rất vui ạ.", "es": "Fue muy divertido.", "ne": "धेरै रमाइलो भयो।", "id": "Acara ini sangat menyenangkan."
        }
    }
];