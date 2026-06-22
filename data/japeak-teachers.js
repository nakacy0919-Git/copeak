// ==========================================
// Japeak 教材データベース（職員室・提出物）
// ==========================================
const japeakTeachersData = [
    {
        id: "japeak_tch_001", title: "時間を確認する (Do you have a moment?)", category: "teachers_room",
        japanese: "先生、今お時間よろしいですか。", target_speech: "せんせい、いまおじかんよろしいですか",
        ruby: { hiragana: "<ruby>先生<rt>せんせい</rt></ruby>、<ruby>今<rt>いま</rt></ruby>お<ruby>時間<rt>じかん</rt></ruby>よろしいですか。", romaji: "Sensei, ima ojikan yoroshii desu ka." },
        context: {
            "ja": "職員室などで先生に話しかける前に、先生が忙しくないかを確認するための丁寧な言葉です。",
            "en": "A polite phrase used before speaking to a teacher to check if they are not too busy.",
            "pt": "Uma frase educada usada antes de falar com um professor para verificar se ele não está muito ocupado.",
            "zh-CN": "在教职员室等地方向老师搭话前，确认老师是否忙碌的礼貌用语。",
            "tl": "Isang magalang na parirala bago kausapin ang guro upang alamin kung hindi sila busy.",
            "vi": "Một câu nói lịch sự dùng trước khi bắt chuyện với giáo viên để hỏi xem họ có đang bận không.",
            "es": "Una frase educada que se usa antes de hablar con un profesor para comprobar si no está demasiado ocupado.",
            "ne": "शिक्षकसँग कुरा गर्नुअघि उहाँ व्यस्त हुनुहुन्छ कि हुनुहुन्न भनेर सोध्न प्रयोग गरिने विनम्र शब्द।",
            "id": "Kalimat sopan yang digunakan sebelum berbicara dengan guru untuk memastikan apakah mereka sedang tidak sibuk."
        },
        translations: {
            "en": "Teacher, do you have a moment now?", "pt": "Professor, o senhor(a) tem um momento agora?", "zh-CN": "老师，您现在有空吗？", "tl": "Titser, may oras po ba kayo ngayon?", "vi": "Thưa thầy/cô, bây giờ thầy/cô có rảnh không ạ?", "es": "Profesor, ¿tiene un momento ahora?", "ne": "शिक्षक, के तपाईंसँग अहिले एकछिन समय छ?", "id": "Guru, apakah Anda punya waktu sebentar sekarang?"
        }
    },
    {
        id: "japeak_tch_002", title: "先生を探す (Looking for a Teacher)", category: "teachers_room",
        japanese: "田中先生はいらっしゃいますか。", target_speech: "たなかせんせいはいらっしゃいますか",
        ruby: { hiragana: "<ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はいらっしゃいますか。", romaji: "Tanaka sensei wa irasshaimasu ka." },
        context: {
            "ja": "職員室に入って特定の先生（ここでは田中先生）を探している時に、他の先生に聞く言葉です。",
            "en": "Used to ask another teacher if a specific teacher (e.g., Mr./Ms. Tanaka) is in the teachers' room.",
            "pt": "Usado para perguntar a outro professor se um professor específico (ex: Sr./Sra. Tanaka) está na sala.",
            "zh-CN": "进入教职员室寻找某位老师（例如田中老师）时，向其他老师询问的用语。",
            "tl": "Ginagamit upang itanong sa ibang guro kung nasa faculty room ang isang partikular na guro.",
            "vi": "Dùng để hỏi một giáo viên khác xem một giáo viên cụ thể (ví dụ: thầy/cô Tanaka) có ở trong phòng không.",
            "es": "Se usa para preguntar a otro profesor si un profesor en específico (ej. Sr./Sra. Tanaka) está en la sala.",
            "ne": "शिक्षक कक्षमा गएर कुनै विशेष शिक्षक (जस्तै तानाका शिक्षक) हुनुहुन्छ कि भनेर अरू शिक्षकलाई सोध्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk bertanya kepada guru lain apakah guru tertentu (misalnya, Guru Tanaka) ada di ruang guru."
        },
        translations: {
            "en": "Is Mr./Ms. Tanaka here?", "pt": "O(a) professor(a) Tanaka está?", "zh-CN": "请问田中老师在吗？", "tl": "Nandito po ba si Sir/Ma'am Tanaka?", "vi": "Thầy/Cô Tanaka có ở đây không ạ?", "es": "¿Está el/la profesor(a) Tanaka aquí?", "ne": "के तानाका शिक्षक हुनुहुन्छ?", "id": "Apakah Guru Tanaka ada?"
        }
    },
    {
        id: "japeak_tch_003", title: "呼ばれた時 (When Called by a Teacher)", category: "teachers_room",
        japanese: "先生に呼ばれて来ました。", target_speech: "せんせいによばれてきました",
        ruby: { hiragana: "<ruby>先生<rt>せんせい</rt></ruby>に<ruby>呼<rt>よ</rt></ruby>ばれて<ruby>来<rt>き</rt></ruby>ました。", romaji: "Sensei ni yobarete kimashita." },
        context: {
            "ja": "先生から「職員室に来なさい」と言われて来た時に、用件を伝える言葉です。",
            "en": "Used to explain that you came to the teachers' room because a teacher called for you.",
            "pt": "Usado para explicar que você veio à sala dos professores porque um professor o chamou.",
            "zh-CN": "老师叫你来教职员室时，用来向老师说明来意的用语。",
            "tl": "Ginagamit upang ipaliwanag na pumunta ka dahil ipinatawag ka ng guro.",
            "vi": "Dùng để giải thích rằng bạn đến phòng giáo viên vì được thầy/cô gọi đến.",
            "es": "Se usa para explicar que viniste a la sala de profesores porque un profesor te llamó.",
            "ne": "शिक्षकले बोलाएर आएको हुँ भनेर आफ्नो आउनुको कारण बताउन प्रयोग गरिन्छ।",
            "id": "Digunakan untuk menjelaskan bahwa Anda datang karena dipanggil oleh guru."
        },
        translations: {
            "en": "I came because a teacher called me.", "pt": "Eu vim porque o professor me chamou.", "zh-CN": "我是被老师叫来的。", "tl": "Pumunta po ako dahil ipinatawag ako ng guro.", "vi": "Em đến vì được thầy/cô gọi ạ.", "es": "Vine porque me llamó un profesor.", "ne": "मलाई शिक्षकले बोलाएर आएको हुँ।", "id": "Saya datang karena dipanggil oleh guru."
        }
    },
    {
        id: "japeak_tch_004", title: "提出する (Submitting Homework)", category: "teachers_room",
        japanese: "宿題を提出しに来ました。", target_speech: "しゅくだいをていしゅつしにきました",
        ruby: { hiragana: "<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>提出<rt>ていしゅつ</rt></ruby>しに<ruby>来<rt>き</rt></ruby>ました。", romaji: "Shukudai o teishutsu shi ni kimashita." },
        context: {
            "ja": "終わった宿題やレポートを職員室の先生に出しに来た時に使います。",
            "en": "Used when you come to the teachers' room to hand in your completed homework or report.",
            "pt": "Usado quando você vai à sala dos professores para entregar sua lição de casa.",
            "zh-CN": "去教职员室交作业或报告时使用的用语。",
            "tl": "Ginagamit kapag pumunta ka sa faculty room para ipasa ang iyong takdang-aralin.",
            "vi": "Dùng khi bạn đến phòng giáo viên để nộp bài tập về nhà hoặc báo cáo.",
            "es": "Se usa cuando vas a la sala de profesores a entregar tu tarea terminada.",
            "ne": "शिक्षक कक्षमा आफ्नो गृहकार्य वा रिपोर्ट बुझाउन आउँदा प्रयोग गरिन्छ।",
            "id": "Digunakan saat Anda datang ke ruang guru untuk mengumpulkan PR atau laporan yang sudah selesai."
        },
        translations: {
            "en": "I came to submit my homework.", "pt": "Vim entregar minha lição de casa.", "zh-CN": "我来交作业。", "tl": "Nandito po ako para ipasa ang homework ko.", "vi": "Em đến để nộp bài tập về nhà ạ.", "es": "Vine a entregar mi tarea.", "ne": "म मेरो गृहकार्य बुझाउन आएको हुँ।", "id": "Saya datang untuk mengumpulkan PR."
        }
    },
    {
        id: "japeak_tch_005", title: "提出場所を聞く (Asking Where to Submit)", category: "teachers_room",
        japanese: "これはどこに出せばいいですか。", target_speech: "これはどこにだせばいいですか",
        ruby: { hiragana: "これはどこに<ruby>出<rt>だ</rt></ruby>せばいいですか。", romaji: "Kore wa doko ni daseba ii desu ka." },
        context: {
            "ja": "プリントや宿題を提出する場所（箱や机など）が分からない時に先生に聞きます。",
            "en": "Used to ask a teacher where you should submit a handout or homework.",
            "pt": "Usado para perguntar a um professor onde você deve entregar uma atividade ou lição.",
            "zh-CN": "不知道讲义或作业应该交到哪里时，用来询问老师的用语。",
            "tl": "Ginagamit upang itanong sa guro kung saan dapat ipasa ang handout o homework.",
            "vi": "Dùng để hỏi giáo viên xem nên nộp tài liệu hoặc bài tập ở đâu.",
            "es": "Se usa para preguntar a un profesor dónde debes entregar una hoja o tarea.",
            "ne": "प्रिन्ट वा गृहकार्य बुझाउने ठाउँ (बक्स वा टेबल) थाहा नहुँदा शिक्षकलाई सोध्न प्रयोग गरिन्छ।", "id": "Digunakan untuk bertanya kepada guru di mana Anda harus mengumpulkan tugas atau PR."
        },
        translations: {
            "en": "Where should I submit this?", "pt": "Onde devo entregar isso?", "zh-CN": "这个应该交到哪里？", "tl": "Saan ko po ito dapat ipasa?", "vi": "Cái này nộp ở đâu ạ?", "es": "¿Dónde debo entregar esto?", "ne": "मैले यो कहाँ बुझाउनुपर्छ?", "id": "Di mana saya harus mengumpulkan ini?"
        }
    },
    {
        id: "japeak_tch_006", title: "提出が遅れた謝罪 (Apologizing for Late Submission)", category: "teachers_room",
        japanese: "提出が遅れてすみません。", target_speech: "ていしゅつがおくれてすみません",
        ruby: { hiragana: "<ruby>提出<rt>ていしゅつ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れてすみません。", romaji: "Teishutsu ga okurete sumimasen." },
        context: {
            "ja": "約束の日（締め切り）よりも遅れて宿題などを出す時に、まず謝るための大切な言葉です。",
            "en": "An important phrase to apologize first when you hand in homework past the deadline.",
            "pt": "Uma frase importante para se desculpar primeiro ao entregar a lição de casa após o prazo.",
            "zh-CN": "超过规定期限交作业时，用来首先表达歉意的重要用语。",
            "tl": "Isang mahalagang parirala upang humingi ng paumanhin kung huli na ang pagpasa mo ng homework.",
            "vi": "Một câu quan trọng dùng để xin lỗi trước khi bạn nộp bài tập muộn hơn hạn chót.",
            "es": "Una frase importante para disculparte primero cuando entregas la tarea después de la fecha límite.",
            "ne": "तोकिएको समय (डेडलाइन) भन्दा ढिलो गृहकार्य बुझाउँदा माफी माग्न प्रयोग गरिने महत्त्वपूर्ण शब्द।", "id": "Kalimat penting untuk meminta maaf terlebih dahulu saat Anda mengumpulkan PR melewati batas waktu."
        },
        translations: {
            "en": "I'm sorry for the late submission.", "pt": "Desculpe pelo atraso na entrega.", "zh-CN": "很抱歉迟交了。", "tl": "Pasensya na po at huli na ang pagpasa ko.", "vi": "Em xin lỗi vì nộp bài muộn ạ.", "es": "Siento entregar esto tarde.", "ne": "ढिलो बुझाएकोमा माफ गर्नुहोस्।", "id": "Maaf saya terlambat mengumpulkannya."
        }
    },
    {
        id: "japeak_tch_007", title: "期限の延長 (Asking for an Extension)", category: "teachers_room",
        japanese: "明日提出してもいいですか。", target_speech: "あしたていしゅつしてもいいですか",
        ruby: { hiragana: "<ruby>明日<rt>あした</rt></ruby><ruby>提出<rt>ていしゅつ</rt></ruby>してもいいですか。", romaji: "Ashita teishutsu shite mo ii desu ka." },
        context: {
            "ja": "宿題を忘れてしまった時に、次の日に出しても良いか先生にお願いする言葉です。",
            "en": "Used to ask the teacher if it is okay to submit your homework tomorrow when you forgot it today.",
            "pt": "Usado para perguntar ao professor se não há problema em entregar a lição de casa amanhã.",
            "zh-CN": "忘记带作业时，向老师请求明天再交的用语。",
            "tl": "Ginagamit para itanong sa guro kung pwede ipasa bukas ang homework na nakalimutan mo.",
            "vi": "Dùng để xin phép giáo viên được nộp bài tập vào ngày mai khi bạn lỡ quên ở nhà.",
            "es": "Se usa para preguntarle al profesor si puedes entregar la tarea mañana si la olvidaste hoy.",
            "ne": "गृहकार्य बिर्संदा, भोलि बुझाउँदा हुन्छ कि भनेर शिक्षकलाई अनुरोध गर्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk bertanya kepada guru apakah boleh mengumpulkan PR besok karena hari ini lupa."
        },
        translations: {
            "en": "May I submit it tomorrow?", "pt": "Posso entregar amanhã?", "zh-CN": "我可以明天交吗？", "tl": "Maaari ko po bang ipasa bukas?", "vi": "Ngày mai em nộp có được không ạ?", "es": "¿Puedo entregarlo mañana?", "ne": "के म यो भोलि बुझाउन सक्छु?", "id": "Bolehkah saya mengumpulkannya besok?"
        }
    },
    {
        id: "japeak_tch_008", title: "プリントをもらう (Asking for Handouts)", category: "teachers_room",
        japanese: "休んだ日のプリントをください。", target_speech: "やすんだひのぷりんとをください",
        ruby: { hiragana: "<ruby>休<rt>やす</rt></ruby>んだ<ruby>日<rt>ひ</rt></ruby>のプリントをください。", romaji: "Yasunda hi no purinto o kudasai." },
        context: {
            "ja": "病気などで学校を休んだ日に配られたプリントや宿題をもらいに行く時に使います。",
            "en": "Used to ask for handouts or homework that were distributed on a day you were absent.",
            "pt": "Usado para pedir atividades ou lições que foram distribuídas no dia em que você faltou.",
            "zh-CN": "用来索要因病等原因缺席当天发放的讲义或作业。",
            "tl": "Ginagamit upang hingin ang mga handout na ipinamigay noong araw na absent ka.",
            "vi": "Dùng để xin tài liệu hoặc bài tập được phát vào ngày bạn nghỉ học.",
            "es": "Se usa para pedir las hojas o tareas que se repartieron el día que faltaste.",
            "ne": "बिरामी भएर विद्यालय नआएको दिन बाँडिएको प्रिन्ट वा गृहकार्य माग्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk meminta lembaran tugas yang dibagikan pada hari Anda tidak masuk sekolah."
        },
        translations: {
            "en": "Please give me the handouts from the day I was absent.", "pt": "Por favor, me dê as atividades do dia em que faltei.", "zh-CN": "请给我我缺席那天的讲义。", "tl": "Pakibigay po sa akin ang mga handout noong absent ako.", "vi": "Thầy/Cô cho em xin tài liệu của ngày em nghỉ với ạ.", "es": "Por favor, deme las hojas del día que falté.", "ne": "कृपया मलाई अनुपस्थित भएको दिनको प्रिन्ट दिनुहोस्।", "id": "Tolong beri saya lembaran tugas dari hari saya absen."
        }
    },
    {
        id: "japeak_tch_009", title: "授業の準備完了 (Class is Ready)", category: "teachers_room",
        japanese: "授業の準備ができました。", target_speech: "じゅぎょうのじゅんびができました",
        ruby: { hiragana: "<ruby>授業<rt>じゅんび</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>ができました。", romaji: "Jugyou no junbi ga dekimashita." },
        context: {
            "ja": "日直や当番の生徒が、クラスのみんなが授業を受ける準備ができたことを先生に呼びに行く言葉です。",
            "en": "Used by the class representative to tell the teacher that the class is ready to start the lesson.",
            "pt": "Usado pelo representante de classe para dizer ao professor que a turma está pronta para começar.",
            "zh-CN": "值日生或课代表去叫老师时，报告全班已经做好上课准备的用语。",
            "tl": "Ginagamit ng class representative para sabihin sa guro na handa na ang klase.",
            "vi": "Lớp trưởng hoặc trực nhật dùng để báo với giáo viên rằng cả lớp đã sẵn sàng học.",
            "es": "Usado por el representante de la clase para decirle al profesor que la clase está lista para empezar.",
            "ne": "कक्षाको प्रतिनिधि (मोनिटर) ले शिक्षकलाई कक्षा पढ्न तयार भयो भनेर जानकारी दिँदा प्रयोग गरिन्छ।",
            "id": "Digunakan oleh ketua kelas untuk memberitahu guru bahwa kelas sudah siap untuk mulai pelajaran."
        },
        translations: {
            "en": "The class is ready.", "pt": "A turma está pronta.", "zh-CN": "上课的准备做好了。", "tl": "Handa na po ang klase.", "vi": "Lớp đã chuẩn bị xong rồi ạ.", "es": "La clase está lista.", "ne": "कक्षा पढ्नको लागि तयार छ।", "id": "Kelas sudah siap untuk belajar."
        }
    },
    {
        id: "japeak_tch_010", title: "退出する (Leaving the Room)", category: "teachers_room",
        japanese: "失礼しました。", target_speech: "しつれいしました",
        ruby: { hiragana: "<ruby>失礼<rt>しつれい</rt></ruby>しました。", romaji: "Shitsurei shimashita." },
        context: {
            "ja": "用事が終わって職員室などの部屋から出る時に言う、丁寧な挨拶です。（※入る時は「失礼します」）",
            "en": "A polite greeting said when leaving a room like the teachers' room after finishing your business.",
            "pt": "Uma saudação educada dita ao sair de uma sala (como a dos professores) após terminar o que tinha que fazer.",
            "zh-CN": "办完事离开教职员室等房间时使用的礼貌问候语。（※进去时说「失礼します」）",
            "tl": "Isang magalang na pagbati kapag aalis na ng faculty room pagkatapos ng iyong sadya.",
            "vi": "Lời chào lịch sự dùng khi rời khỏi phòng (như phòng giáo viên) sau khi xong việc.",
            "es": "Un saludo educado que se dice al salir de una sala, como la de profesores, después de terminar.",
            "ne": "शिक्षक कक्ष जस्ता कोठाबाट आफ्नो काम सकेर बाहिर निस्कँदा भनिने विनम्र अभिवादन।",
            "id": "Salam sopan yang diucapkan saat keluar dari ruangan (seperti ruang guru) setelah urusan selesai."
        },
        translations: {
            "en": "Excuse me. (Used when leaving)", "pt": "Com licença. (Usado ao sair)", "zh-CN": "告辞了。", "tl": "Aalis na po ako. / Excuse me po.", "vi": "Em xin phép đi ạ.", "es": "Con permiso. (Al salir)", "ne": "माफ गर्नुहोस् (म निस्कन्छु)।", "id": "Permisi. (Saat keluar ruangan)"
        }
    }
];