// ==========================================
// Japeak 教材データベース（部活動・委員会）
// ==========================================
const japeakClubsData = [
    {
        id: "japeak_clb_001", audio: "audio/japeak_clb_001.mp3", title: "部活の挨拶 (Club Greeting)", category: "clubs_committees",
        japanese: "お疲れ様です。", target_speech: "おつかれさまです",
        ruby: { hiragana: "お<ruby>疲<rt>つか</rt></ruby>れ<ruby>様<rt>さま</rt></ruby>です。", romaji: "Otsukaresama desu." },
        context: {
            "ja": "部活や委員会で、先輩や友達に会った時や、活動中にすれ違う時に使うとても便利な挨拶です。",
            "en": "A very useful greeting used when meeting or passing by seniors and friends during club or committee activities.",
            "pt": "Uma saudação muito útil usada ao encontrar veteranos e amigos durante as atividades do clube.",
            "zh-CN": "在社团或委员会遇到前辈和朋友，或活动中擦肩而过时使用的非常方便的问候语。",
            "tl": "Isang napaka-kapaki-pakinabang na pagbati kapag nakakasalubong ang mga senior at kaibigan sa club.",
            "vi": "Một câu chào rất hữu ích dùng khi gặp hoặc đi ngang qua đàn anh và bạn bè trong câu lạc bộ.",
            "es": "Un saludo muy útil que se usa al encontrarse o cruzarse con compañeros mayores y amigos en el club.",
            "ne": "क्लब वा समितिको काम गर्दा सिनियर वा साथीहरूलाई भेट्दा प्रयोग गरिने धेरै उपयोगी अभिवादन।",
            "id": "Salam yang sangat berguna saat bertemu atau berpapasan dengan senior dan teman di klub."
        },
        translations: {
            "en": "Hello. / Good work.", "pt": "Olá. / Bom trabalho.", "zh-CN": "辛苦了。", "tl": "Hello po. / Magandang gawain.", "vi": "Chào anh/chị/bạn. / Mọi người vất vả rồi.", "es": "Hola. / Buen trabajo.", "ne": "नमस्ते / राम्रो काम।", "id": "Halo. / Selamat bekerja."
        }
    },
    {
        id: "japeak_clb_002", audio: "audio/japeak_clb_002.mp3", title: "指示を仰ぐ (Asking What to Do)", category: "clubs_committees",
        japanese: "何をすればいいですか。", target_speech: "なにをすればいいですか",
        ruby: { hiragana: "<ruby>何<rt>なに</rt></ruby>をすればいいですか。", romaji: "Nani o sureba ii desu ka." },
        context: {
            "ja": "部活や委員会で、自分の仕事や役割が分からない時に、先輩や先生に指示をもらう言葉です。",
            "en": "Used to ask a senior or teacher for instructions when you don't know your task or role.",
            "pt": "Usado para pedir instruções a um veterano ou professor quando você não sabe sua tarefa.",
            "zh-CN": "在社团或委员会中不知道自己的工作或任务时，向前辈或老师请示的用语。",
            "tl": "Ginagamit upang humingi ng utos sa senior o guro kapag hindi mo alam ang iyong gagawin.",
            "vi": "Dùng để hỏi đàn anh hoặc giáo viên xem mình cần làm gì khi không rõ nhiệm vụ.",
            "es": "Se usa para pedir instrucciones a un compañero mayor o profesor cuando no sabes qué hacer.",
            "ne": "आफ्नो काम वा भूमिका थाहा नभएको बेला सिनियर वा शिक्षकसँग निर्देशन माग्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk meminta instruksi dari senior atau guru saat Anda tidak tahu tugas Anda."
        },
        translations: {
            "en": "What should I do?", "pt": "O que devo fazer?", "zh-CN": "我该做什么呢？", "tl": "Ano po ang dapat kong gawin?", "vi": "Em nên làm gì ạ?", "es": "¿Qué debo hacer?", "ne": "मैले के गर्नुपर्छ?", "id": "Apa yang harus saya lakukan?"
        }
    },
    {
        id: "japeak_clb_003", audio: "audio/japeak_clb_003.mp3", title: "手伝いを申し出る (Offering Help)", category: "clubs_committees",
        japanese: "準備を手伝います。", target_speech: "じゅんびをてつだいます",
        ruby: { hiragana: "<ruby>準備<rt>じゅんび</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>います。", romaji: "Junbi o tetsudaimasu." },
        context: {
            "ja": "練習の準備や、委員会の仕事などを自分から進んで手伝う時に使う、とても親切な言葉です。",
            "en": "A very kind phrase used when offering to help with preparations for practice or committee work.",
            "pt": "Uma frase muito gentil usada ao se oferecer para ajudar nos preparativos do treino.",
            "zh-CN": "主动帮忙做练习准备或委员会工作时使用的非常体贴的用语。",
            "tl": "Isang napakabait na parirala kapag nag-aalok ng tulong sa paghahanda sa practice.",
            "vi": "Một câu nói rất tử tế dùng khi bạn chủ động đề nghị giúp đỡ chuẩn bị cho buổi tập.",
            "es": "Una frase muy amable que se usa para ofrecer ayuda con los preparativos de la práctica.",
            "ne": "अभ्यासको तयारी वा काममा मद्दत गर्न प्रस्ताव गर्दा प्रयोग गरिने धेरै राम्रो वाक्यांश।",
            "id": "Kalimat yang sangat baik digunakan saat menawarkan bantuan untuk persiapan latihan."
        },
        translations: {
            "en": "I will help with the preparation.", "pt": "Eu ajudarei na preparação.", "zh-CN": "我来帮忙准备。", "tl": "Tutulong po ako sa paghahanda.", "vi": "Mình sẽ giúp chuẩn bị.", "es": "Ayudaré con la preparación.", "ne": "म तयारी गर्न मद्दत गर्नेछु।", "id": "Saya akan membantu persiapannya."
        }
    },
    {
        id: "japeak_clb_004", audio: "audio/japeak_clb_004.mp3", title: "やり方を聞く (Asking How)", category: "clubs_committees",
        japanese: "やり方を教えてください。", target_speech: "やりかたをおしえてください",
        ruby: { hiragana: "やり<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。", romaji: "Yarikata o oshiete kudasai." },
        context: {
            "ja": "スポーツの道具の使い方や、仕事のルールが分からない時に、教えてもらうためのお願いです。",
            "en": "A request used when you don't know how to use sports equipment or the rules of a task.",
            "pt": "Um pedido usado quando você não sabe como usar um equipamento ou as regras de uma tarefa.",
            "zh-CN": "不知道运动器材的用法或工作规则时，请求对方教自己的用语。",
            "tl": "Ginagamit kapag hindi mo alam kung paano gamitin ang isang gamit o gawin ang isang gawain.",
            "vi": "Dùng để nhờ hướng dẫn khi bạn không biết cách dùng dụng cụ thể thao hoặc luật làm việc.",
            "es": "Se usa cuando no sabes cómo usar el equipo de deportes o las reglas de una tarea.",
            "ne": "खेलकुदका सामान प्रयोग गर्न वा कामको नियम थाहा नहुँदा सिकाउन अनुरोध गर्दा प्रयोग गरिन्छ।",
            "id": "Permintaan yang digunakan saat Anda tidak tahu cara menggunakan alat olahraga atau aturan tugas."
        },
        translations: {
            "en": "Please teach me how to do it.", "pt": "Por favor, me ensine como fazer isso.", "zh-CN": "请教我怎么做。", "tl": "Pakituro po sa akin kung paano gawin.", "vi": "Hãy chỉ cho mình cách làm với.", "es": "Por favor, enséñame cómo hacerlo.", "ne": "कृपया मलाई यो कसरी गर्ने सिकाउनुहोस्।", "id": "Tolong ajari saya cara melakukannya."
        }
    },
    {
        id: "japeak_clb_005", audio: "audio/japeak_clb_005.mp3", title: "励まし合う (Encouragement)", category: "clubs_committees",
        japanese: "頑張りましょう。", target_speech: "がんばりましょう",
        ruby: { hiragana: "<ruby>頑張<rt>がんば</rt></ruby>りましょう。", romaji: "Ganbarimashou." },
        context: {
            "ja": "試合の前や、大変な仕事の前に、みんなで声をかけて励まし合い、チームワークを高める言葉です。",
            "en": "Used to encourage each other and boost teamwork before a game or a tough task.",
            "pt": "Usado para encorajar uns aos outros e melhorar o trabalho em equipe antes de um jogo ou tarefa difícil.",
            "zh-CN": "比赛前或艰巨的任务前，大家互相鼓励、提高团队凝聚力的用语。",
            "tl": "Ginagamit para palakasin ang loob ng isa't isa bago ang laban o mahirap na gawain.",
            "vi": "Dùng để động viên nhau và tăng tinh thần đồng đội trước trận đấu hoặc nhiệm vụ khó khăn.",
            "es": "Se usa para animarse mutuamente y mejorar el trabajo en equipo antes de un partido o tarea difícil.",
            "ne": "खेल वा गाह्रो कामअघि एकअर्कालाई हौसला दिन र टिमवर्क बढाउन प्रयोग गरिन्छ।",
            "id": "Digunakan untuk saling menyemangati dan meningkatkan kerja sama tim sebelum pertandingan atau tugas berat."
        },
        translations: {
            "en": "Let's do our best.", "pt": "Vamos dar o nosso melhor.", "zh-CN": "一起加油吧。", "tl": "Galingan natin.", "vi": "Cùng cố gắng nhé.", "es": "Hagamos nuestro mejor esfuerzo.", "ne": "हाम्रो तर्फबाट राम्रो गरौं।", "id": "Mari kita lakukan yang terbaik."
        }
    },
    {
        id: "japeak_clb_006", audio: "audio/japeak_clb_006.mp3", title: "慰める・励ます (Comforting)", category: "clubs_committees",
        japanese: "気にしないでください。", target_speech: "きにしないでください",
        ruby: { hiragana: "<ruby>気<rt>き</rt></ruby>にしないでください。", romaji: "Ki ni shinaide kudasai." },
        context: {
            "ja": "友達やチームメイトがスポーツでミスをした時などに、慰めてあげる優しい言葉です。（「ドンマイ」とも言います）",
            "en": "A kind phrase to comfort a friend or teammate when they make a mistake in sports. (Also said as 'Don-mai').",
            "pt": "Uma frase gentil para confortar um amigo ou colega de equipe quando ele comete um erro.",
            "zh-CN": "朋友或队友在运动中失误时，用来安慰对方的温柔话语。（也常说“Don-mai”）。",
            "tl": "Isang mabait na parirala para aliwin ang kakampi na nagkamali. (Sinasabi rin na 'Don-mai').",
            "vi": "Lời nói nhẹ nhàng để an ủi bạn bè hoặc đồng đội khi họ mắc lỗi. (Còn gọi là 'Don-mai').",
            "es": "Una frase amable para consolar a un compañero de equipo cuando comete un error.",
            "ne": "साथी वा टिमको सदस्यले गल्ती गर्दा सान्त्वना दिने दयालु शब्द।",
            "id": "Kalimat baik untuk menghibur teman atau rekan setim saat mereka melakukan kesalahan dalam olahraga."
        },
        translations: {
            "en": "Please don't worry about it. / Never mind.", "pt": "Não se preocupe com isso.", "zh-CN": "请不要在意。（没关系）", "tl": "Huwag kang mag-alala.", "vi": "Đừng bận tâm nhé.", "es": "No te preocupes por eso.", "ne": "कृपया यसको चिन्ता नगर्नुहोस्।", "id": "Tolong jangan dipikirkan."
        }
    },
    {
        id: "japeak_clb_007", audio: "audio/japeak_clb_007.mp3", title: "片付け (Cleaning Up)", category: "clubs_committees",
        japanese: "片付けをしましょう。", target_speech: "かたづけをしましょう",
        ruby: { hiragana: "<ruby>片付<rt>かたづ</rt></ruby>けをしましょう。", romaji: "Katazuke o shimashou." },
        context: {
            "ja": "部活や委員会が終わった後に、みんなで使った道具や部屋をきれいにする時に声をかけます。",
            "en": "Used to call everyone to clean up the equipment and room after club or committee activities.",
            "pt": "Usado para chamar todos para limpar os equipamentos e a sala após as atividades.",
            "zh-CN": "社团或委员会结束后，招呼大家一起清理使用过的工具和房间时使用。",
            "tl": "Ginagamit para tawagin ang lahat na magligpit ng mga gamit pagkatapos ng aktibidad.",
            "vi": "Dùng để gọi mọi người cùng dọn dẹp dụng cụ và phòng ốc sau khi kết thúc hoạt động.",
            "es": "Se usa para llamar a todos a limpiar el equipo y el salón después de las actividades.",
            "ne": "क्लब वा समितिको काम सकिएपछि प्रयोग गरिएका सामान र कोठा सफा गर्न सबैलाई बोलाउँदा प्रयोग गरिन्छ।",
            "id": "Digunakan untuk mengajak semua orang merapikan alat dan ruangan setelah kegiatan selesai."
        },
        translations: {
            "en": "Let's clean up.", "pt": "Vamos arrumar/limpar.", "zh-CN": "我们收拾一下吧。", "tl": "Magligpit na tayo.", "vi": "Chúng ta cùng dọn dẹp nào.", "es": "Vamos a limpiar.", "ne": "सफा गरौं।", "id": "Mari kita rapikan."
        }
    },
    {
        id: "japeak_clb_008", audio: "audio/japeak_clb_008.mp3", title: "欠席の連絡 (Reporting Absence)", category: "clubs_committees",
        japanese: "今日、部活を休みます。", target_speech: "きょうぶかつをやすみます",
        ruby: { hiragana: "<ruby>今日<rt>きょう</rt></ruby>、<ruby>部活<rt>ぶかつ</rt></ruby>を<ruby>休<rt>やす</rt></ruby>みます。", romaji: "Kyou, bukatsu o yasumimasu." },
        context: {
            "ja": "体調が悪い時や、家の用事がある時に、事前に先生や先輩に部活（または委員会）を休むことを伝える言葉です。",
            "en": "Used to inform the teacher or seniors in advance that you will be absent from the club (or committee) due to illness or family matters.",
            "pt": "Usado para informar que você faltará ao clube devido a doença ou assuntos familiares.",
            "zh-CN": "生病或有家事时，提前向老师或前辈请假不参加社团（或委员会）活动的用语。",
            "tl": "Ginagamit para sabihin nang maaga na hindi ka makaka-attend ng club dahil sa sakit o gawain sa bahay.",
            "vi": "Dùng để xin phép nghỉ câu lạc bộ trước với giáo viên hoặc đàn anh khi bị ốm hoặc có việc nhà.",
            "es": "Se usa para informar que faltarás al club debido a enfermedad o asuntos familiares.",
            "ne": "बिरामी वा घरायसी कामको कारणले क्लबमा अनुपस्थित हुने कुरा शिक्षक वा सिनियरलाई पहिले नै जानकारी दिन प्रयोग गरिन्छ।",
            "id": "Digunakan untuk memberitahu guru atau senior sebelumnya bahwa Anda akan absen dari klub karena sakit atau urusan keluarga."
        },
        translations: {
            "en": "I will be absent from the club today.", "pt": "Vou faltar ao clube hoje.", "zh-CN": "我今天请假不去社团了。", "tl": "Aabsent po ako sa club ngayon.", "vi": "Hôm nay em xin nghỉ câu lạc bộ ạ.", "es": "Faltaré al club hoy.", "ne": "म आज क्लबमा आउँदिनँ।", "id": "Saya akan absen dari klub hari ini."
        }
    },
    {
        id: "japeak_clb_009", audio: "audio/japeak_clb_009.mp3", title: "先に帰る時の挨拶 (Leaving Early)", category: "clubs_committees",
        japanese: "お先に失礼します。", target_speech: "おさきにしつれいします",
        ruby: { hiragana: "お<ruby>先<rt>さき</rt></ruby>に<ruby>失礼<rt>しつれい</rt></ruby>します。", romaji: "Osaki ni shitsurei shimasu." },
        context: {
            "ja": "他の人がまだ活動したり片付けたりしているけれど、自分だけ先に帰る時に使う、日本の大切なマナーです。",
            "en": "An important Japanese etiquette phrase used when you are leaving earlier than others who are still working or cleaning up.",
            "pt": "Uma etiqueta japonesa importante usada quando você sai mais cedo do que os outros que ainda estão trabalhando.",
            "zh-CN": "其他人还在活动或打扫，自己需要先走时使用的日本重要礼仪用语。",
            "tl": "Isang mahalagang etiquette sa Japan kapag mauuna kang umuwi habang ang iba ay may ginagawa pa.",
            "vi": "Một phép lịch sự quan trọng của Nhật Bản khi bạn ra về trước trong khi những người khác vẫn đang làm việc.",
            "es": "Una frase de etiqueta japonesa importante que se usa cuando te vas antes que los demás.",
            "ne": "अरू काम गरिरहेको वा सफा गरिरहेको बेला आफू अघि नै घर फर्कंदा प्रयोग गरिने महत्त्वपूर्ण जापानी शिष्टाचार।",
            "id": "Etika penting di Jepang yang digunakan saat Anda pulang lebih dulu sementara yang lain masih beraktivitas."
        },
        translations: {
            "en": "Excuse me for leaving before you.", "pt": "Com licença por sair antes de vocês.", "zh-CN": "我先告辞了。", "tl": "Mauuna na po ako.", "vi": "Mình xin phép về trước nhé.", "es": "Disculpen que me vaya antes.", "ne": "म तपाईंहरू भन्दा अघि निस्कन्छु, माफ गर्नुहोस्।", "id": "Permisi, saya pulang duluan."
        }
    },
    {
        id: "japeak_clb_010", audio: "audio/japeak_clb_010.mp3", title: "活動終了の挨拶 (Good Work Today)", category: "clubs_committees",
        japanese: "お疲れ様でした。", target_speech: "おつかれさまでした",
        ruby: { hiragana: "お<ruby>疲<rt>つか</rt></ruby>れ<ruby>様<rt>さま</rt></ruby>でした。", romaji: "Otsukaresama deshita." },
        context: {
            "ja": "部活や委員会の活動がすべて終わって、帰る時にお互いの頑張りをねぎらって言い合う挨拶です。",
            "en": "A greeting exchanged at the end of club or committee activities to show appreciation for everyone's hard work before going home.",
            "pt": "Uma saudação trocada no final das atividades do clube para agradecer o esforço de todos.",
            "zh-CN": "社团或委员会活动全部结束，准备回家时互相慰劳对方努力的问候语。",
            "tl": "Isang pagbati sa pagtatapos ng aktibidad para pasalamatan ang pagod ng bawat isa.",
            "vi": "Lời chào khi kết thúc hoạt động câu lạc bộ, dùng để cảm ơn sự cố gắng của mọi người trước khi ra về.",
            "es": "Un saludo intercambiado al final de las actividades del club para agradecer el esfuerzo de todos.",
            "ne": "क्लब वा समितिको काम सकिएर घर फर्कने बेला सबैको मिहिनेतको कदर गर्दै एकअर्कालाई भनिने अभिवादन।",
            "id": "Salam yang diucapkan di akhir kegiatan klub untuk menghargai kerja keras semua orang sebelum pulang."
        },
        translations: {
            "en": "Good work today. / Thanks for your hard work.", "pt": "Bom trabalho hoje.", "zh-CN": "今天辛苦了。", "tl": "Salamat sa magandang trabaho ngayon.", "vi": "Hôm nay mọi người vất vả rồi.", "es": "Buen trabajo hoy.", "ne": "आजको कामको लागि धन्यवाद।", "id": "Terima kasih atas kerja kerasnya hari ini."
        }
    }
];