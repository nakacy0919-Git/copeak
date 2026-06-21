// ==========================================
// Japeak 教材データベース（授業中）
// ==========================================
const japeakClassData = [
    {
        id: "japeak_cls_001", title: "質問する (Asking a Question)", category: "class_time",
        japanese: "先生、質問してもいいですか。", target_speech: "せんせいしつもんしてもいいですか",
        ruby: { hiragana: "<ruby>先生<rt>せんせい</rt></ruby>、<ruby>質問<rt>しつもん</rt></ruby>してもいいですか。", romaji: "Sensei, shitsumon shite mo ii desu ka." },
        context: {
            "ja": "授業中や勉強中に、分からないことを先生に聞きたい時に手を挙げて使います。",
            "en": "Used when you raise your hand to ask the teacher a question during class.",
            "pt": "Usado quando você levanta a mão para fazer uma pergunta ao professor durante a aula.", "zh-CN": "上课时举手向老师提问的用语。", "tl": "Ginagamit kapag nagtataas ng kamay para magtanong sa guro sa klase.", "vi": "Dùng khi giơ tay muốn hỏi giáo viên một câu hỏi trong giờ học.", "es": "Se usa cuando levantas la mano para hacerle una pregunta al profesor en clase.", "ne": "कक्षामा शिक्षकलाई प्रश्न सोध्न हात उठाउँदा प्रयोग गरिन्छ।", "id": "Digunakan saat mengangkat tangan untuk bertanya kepada guru di kelas."
        },
        translations: {
            "en": "Teacher, may I ask a question?", "pt": "Professor, posso fazer uma pergunta?", "zh-CN": "老师，我可以提问吗？", "tl": "Titser, pwede po bang magtanong?", "vi": "Thưa thầy/cô, em có thể hỏi một câu được không ạ?", "es": "Profesor, ¿puedo hacer una pregunta?", "ne": "शिक्षक, म एउटा प्रश्न सोध्न सक्छु?", "id": "Guru, bolehkah saya bertanya?"
        }
    },
    {
        id: "japeak_cls_002", title: "ページを確認する (Checking the Page)", category: "class_time",
        japanese: "教科書の何ページですか。", target_speech: "きょうかしょのなんぺーじですか",
        ruby: { hiragana: "<ruby>教科書<rt>きょうかしょ</rt></ruby>の<ruby>何<rt>なん</rt></ruby>ページですか。", romaji: "Kyoukasho no nan peeji desu ka." },
        context: {
            "ja": "先生が指示した教科書の開く場所が聞き取れなかった時に確認する言葉です。",
            "en": "Used to ask which page of the textbook to open when you missed the teacher's instruction.",
            "pt": "Usado para perguntar qual página do livro abrir quando você não ouviu a instrução.", "zh-CN": "没听清老师说打开哪一页时，用来确认的用语。", "tl": "Ginagamit para itanong kung aling pahina ng aklat ang bubuksan.", "vi": "Dùng để hỏi xem mở sách giáo khoa trang bao nhiêu khi bạn nghe không rõ.", "es": "Se usa para preguntar qué página del libro abrir cuando no escuchaste.", "ne": "शिक्षकले भनेको पृष्ठ नम्बर नसुन्दा कुन पृष्ठ हो भनेर सोध्न प्रयोग गरिन्छ।", "id": "Digunakan untuk bertanya halaman berapa di buku cetak yang harus dibuka."
        },
        translations: {
            "en": "What page of the textbook is it?", "pt": "Qual é a página do livro didático?", "zh-CN": "请问是教科书的第几页？", "tl": "Anong pahina po ng aklat?", "vi": "Sách giáo khoa trang mấy vậy ạ?", "es": "¿Qué página del libro de texto es?", "ne": "पाठ्यपुस्तकको कुन पाना हो?", "id": "Buku cetaknya halaman berapa?"
        }
    },
    {
        id: "japeak_cls_003", title: "プリントがない時 (Missing a Handout)", category: "class_time",
        japanese: "プリントをもらっていません。", target_speech: "ぷりんとをもらっていません",
        ruby: { hiragana: "プリントをもらっていません。", romaji: "Purinto o moratte imasen." },
        context: {
            "ja": "授業で配られたプリント（用紙）が自分の席まで回ってこなかった時に先生に伝えます。",
            "en": "Used to tell the teacher that you didn't receive the handout distributed in class.",
            "pt": "Usado para dizer ao professor que você não recebeu a folha de atividades.", "zh-CN": "上课发的讲义没有传到自己这里时，向老师说明的用语。", "tl": "Ginagamit upang sabihin sa guro na hindi ka nakatanggap ng handout.", "vi": "Dùng để nói với giáo viên rằng bạn chưa nhận được tài liệu phát trên lớp.", "es": "Se usa para decirle al profesor que no recibiste la hoja de trabajo.", "ne": "कक्षामा बाँडिएको कागज (प्रिन्ट) आफूले नपाउँदा शिक्षकलाई भनिन्छ।", "id": "Digunakan untuk memberitahu guru bahwa Anda belum mendapat lembaran tugas."
        },
        translations: {
            "en": "I haven't received the handout.", "pt": "Eu não recebi a folha.", "zh-CN": "我没有拿到讲义。", "tl": "Hindi po ako nakatanggap ng handout.", "vi": "Em chưa nhận được tài liệu ạ.", "es": "No he recibido la hoja.", "ne": "मैले प्रिन्ट पाएको छैन।", "id": "Saya belum menerima lembaran tugas."
        }
    },
    {
        id: "japeak_cls_004", title: "黒板が見えない時 (Can't See the Board)", category: "class_time",
        japanese: "黒板が見えません。", target_speech: "こくばんがみえません",
        ruby: { hiragana: "<ruby>黒板<rt>こくばん</rt></ruby>が<ruby>見<rt>み</rt></ruby>えません。", romaji: "Kokuban ga miemasen." },
        context: {
            "ja": "光の反射や前の人の頭で、黒板（ホワイトボード）の字が見えない時に使います。",
            "en": "Used when you cannot see the writing on the blackboard due to glare or someone's head.",
            "pt": "Usado quando você não consegue ver a lousa devido ao reflexo ou à cabeça de alguém.", "zh-CN": "因为反光或被挡住而看不见黑板时使用的用语。", "tl": "Ginagamit kapag hindi mo makita ang nakasulat sa blackboard.", "vi": "Dùng khi bạn không thể nhìn thấy bảng đen do bị lóa hoặc bị che khuất.", "es": "Se usa cuando no puedes ver la pizarra debido al reflejo o a alguien.", "ne": "अगाडिको मान्छे वा प्रकाशको कारणले कालोपाटी नदेख्दा प्रयोग गरिन्छ।", "id": "Digunakan saat Anda tidak bisa melihat papan tulis."
        },
        translations: {
            "en": "I can't see the blackboard.", "pt": "Não consigo ver a lousa.", "zh-CN": "我看不见黑板。", "tl": "Hindi ko po makita ang blackboard.", "vi": "Em không nhìn thấy bảng ạ.", "es": "No puedo ver la pizarra.", "ne": "मैले कालोपाटी देख्न सकिनँ।", "id": "Saya tidak bisa melihat papan tulis."
        }
    },
    {
        id: "japeak_cls_005", title: "声が聞こえない時 (Can't Hear)", category: "class_time",
        japanese: "もう少し大きな声でお願いします。", target_speech: "もうすこしおおきなこえでおねがいします",
        ruby: { hiragana: "もう<ruby>少<rt>すこ</rt></ruby>し<ruby>大<rt>おお</rt></ruby>きな<ruby>声<rt>こえ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。", romaji: "Mou sukoshi ookina koe de onegai shimasu." },
        context: {
            "ja": "先生や友達の声が小さくて聞こえない時に、もっと大きく話してほしいとお願いします。",
            "en": "Used to ask the teacher or a friend to speak louder when you can't hear them.",
            "pt": "Usado para pedir que falem mais alto quando você não consegue ouvir.", "zh-CN": "听不清老师或同学的声音时，请求对方大声一点。", "tl": "Ginagamit para pakiusapan ang isang tao na lakasan ang boses.", "vi": "Dùng để yêu cầu ai đó nói to hơn một chút khi bạn không nghe rõ.", "es": "Se usa para pedir que hablen más fuerte cuando no puedes escuchar.", "ne": "आवाज सानो भएर नसुन्दा अलि ठूलो स्वरमा बोल्न अनुरोध गर्दा प्रयोग गरिन्छ।", "id": "Digunakan untuk meminta seseorang berbicara lebih keras."
        },
        translations: {
            "en": "Please speak a little louder.", "pt": "Por favor, fale um pouco mais alto.", "zh-CN": "请大声一点。", "tl": "Pakilakasan po ng kaunti ang boses.", "vi": "Xin hãy nói to hơn một chút ạ.", "es": "Por favor, hable un poco más fuerte.", "ne": "कृपया अलि ठूलो स्वरमा बोल्नुहोस्।", "id": "Tolong bicara sedikit lebih keras."
        }
    },
    {
        id: "japeak_cls_006", title: "ペアワーク (Pair Work)", category: "class_time",
        japanese: "一緒にやりましょう。", target_speech: "いっしょにやりましょう",
        ruby: { hiragana: "<ruby>一緒<rt>いっしょ</rt></ruby>にやりましょう。", romaji: "Issho ni yarimashou." },
        context: {
            "ja": "2人1組（ペア）で話し合ったり、問題を解いたりする時に、隣の席の人に声をかけます。",
            "en": "Used to invite your desk neighbor to work together during pair work or group activities.",
            "pt": "Usado para convidar o colega ao lado para trabalharem juntos em uma atividade.", "zh-CN": "两人一组讨论或解题时，用来邀请旁边同学的用语。", "tl": "Ginagamit para yanyain ang katabi na gumawa nang magkasama sa pair work.", "vi": "Dùng để rủ người ngồi cạnh làm việc cùng nhau trong hoạt động nhóm/cặp.", "es": "Se usa para invitar al compañero de al lado a trabajar juntos en una actividad.", "ne": "जोडी भएर काम गर्दा वा छलफल गर्दा सँगै गरौं भन्न प्रयोग गरिन्छ।", "id": "Digunakan untuk mengajak teman sebangku mengerjakan tugas bersama."
        },
        translations: {
            "en": "Let's do it together.", "pt": "Vamos fazer isso juntos.", "zh-CN": "我们一起做吧。", "tl": "Gawin natin nang magkasama.", "vi": "Chúng ta cùng làm nhé.", "es": "Hagámoslo juntos.", "ne": "सँगै गरौं।", "id": "Ayo kita kerjakan bersama."
        }
    },
    {
        id: "japeak_cls_007", title: "作業が終わった時 (Finished a Task)", category: "class_time",
        japanese: "終わりました。", target_speech: "おわりました",
        ruby: { hiragana: "<ruby>終<rt>お</rt></ruby>わりました。", romaji: "Owarimashita." },
        context: {
            "ja": "先生に出されたプリントや、ノートを書き写す作業が最後まで完了したことを伝えます。",
            "en": "Used to tell the teacher that you have finished a task, such as a worksheet or copying notes.",
            "pt": "Usado para dizer ao professor que você terminou uma tarefa.", "zh-CN": "用来向老师报告自己已经完成了讲义或笔记等任务。", "tl": "Ginagamit upang sabihin sa guro na tapos ka na sa gawain.", "vi": "Dùng để báo với giáo viên rằng bạn đã làm xong bài hoặc chép xong bài.", "es": "Se usa para decirle al profesor que has terminado una tarea.", "ne": "दिइएको काम वा लेख्ने काम सकियो भनेर जानकारी दिन प्रयोग गरिन्छ।", "id": "Digunakan untuk memberitahu guru bahwa Anda sudah selesai mengerjakan tugas."
        },
        translations: {
            "en": "I'm finished.", "pt": "Eu terminei.", "zh-CN": "我做完了。", "tl": "Tapos na po ako.", "vi": "Em làm xong rồi ạ.", "es": "He terminado.", "ne": "मैले सकें।", "id": "Saya sudah selesai."
        }
    },
    {
        id: "japeak_cls_008", title: "読み方を聞く (Asking How to Read)", category: "class_time",
        japanese: "この漢字はどう読みますか。", target_speech: "このかんじはどうよみますか",
        ruby: { hiragana: "この<ruby>漢字<rt>かんじ</rt></ruby>はどう<ruby>読<rt>よ</rt></ruby>みますか。", romaji: "Kono kanji wa dou yomimasu ka." },
        context: {
            "ja": "教科書や黒板に書かれている漢字（言葉）の発音や読み方が分からない時に聞きます。",
            "en": "Used when you don't know the pronunciation or reading of a Kanji (Chinese character) in the textbook.",
            "pt": "Usado quando você não sabe como ler um Kanji (letra) no livro.", "zh-CN": "不知道教科书或黑板上的汉字怎么读时使用的提问。", "tl": "Ginagamit kapag hindi mo alam kung paano basahin ang isang Kanji.", "vi": "Dùng khi bạn không biết cách đọc một chữ Hán (Kanji) trong sách.", "es": "Se usa cuando no sabes cómo leer un Kanji en el libro.", "ne": "किताब वा कालोपाटीमा भएको कान्जी (अक्षर) कसरी पढ्ने भनेर सोध्दा प्रयोग गरिन्छ।", "id": "Digunakan saat Anda tidak tahu cara membaca huruf Kanji."
        },
        translations: {
            "en": "How do you read this Kanji?", "pt": "Como se lê este Kanji?", "zh-CN": "这个汉字怎么读？", "tl": "Paano po basahin ang Kanji na ito?", "vi": "Chữ Kanji này đọc như thế nào ạ?", "es": "¿Cómo se lee este Kanji?", "ne": "यो कान्जी कसरी पढ्ने?", "id": "Bagaimana cara membaca Kanji ini?"
        }
    },
    {
        id: "japeak_cls_009", title: "答えが分からない時 (Don't Know the Answer)", category: "class_time",
        japanese: "答えがわかりません。", target_speech: "こたえがわかりません",
        ruby: { hiragana: "<ruby>答<rt>こた</rt></ruby>えがわかりません。", romaji: "Kotae ga wakarimasen." },
        context: {
            "ja": "先生に当てられた（質問された）時に、正解が分からないことを正直に伝える言葉です。",
            "en": "Used to honestly tell the teacher that you don't know the answer when called upon.",
            "pt": "Usado para dizer honestamente ao professor que você não sabe a resposta.", "zh-CN": "被老师提问时，诚实地表示自己不知道答案的用语。", "tl": "Ginagamit upang sabihin nang tapat sa guro na hindi mo alam ang sagot.", "vi": "Dùng để trả lời thành thật rằng bạn không biết đáp án khi được giáo viên gọi.", "es": "Se usa para decirle honestamente al profesor que no sabes la respuesta.", "ne": "शिक्षकले प्रश्न सोध्दा उत्तर थाहा नभएको कुरा इमान्दारीपूर्वक भन्दा प्रयोग गरिन्छ।", "id": "Digunakan untuk memberitahu guru dengan jujur bahwa Anda tidak tahu jawabannya."
        },
        translations: {
            "en": "I don't know the answer.", "pt": "Eu não sei a resposta.", "zh-CN": "我不知道答案。", "tl": "Hindi ko po alam ang sagot.", "vi": "Em không biết câu trả lời ạ.", "es": "No sé la respuesta.", "ne": "मलाई उत्तर थाहा छैन।", "id": "Saya tidak tahu jawabannya."
        }
    },
    {
        id: "japeak_cls_010", title: "意味を確認する (Asking the Meaning)", category: "class_time",
        japanese: "これはどういう意味ですか。", target_speech: "これはどういういみですか",
        ruby: { hiragana: "これはどういう<ruby>意味<rt>いみ</rt></ruby>ですか。", romaji: "Kore wa dou iu imi desu ka." },
        context: {
            "ja": "プリントや教科書に書かれている言葉の「意味」が分からない時に先生や友達に聞きます。",
            "en": "Used to ask the teacher or a friend what a specific word or sentence means.",
            "pt": "Usado para perguntar ao professor ou a um amigo o que uma palavra significa.", "zh-CN": "不知道讲义或教科书上的词语是什么意思时使用的提问。", "tl": "Ginagamit upang itanong kung ano ang ibig sabihin ng isang salita.", "vi": "Dùng để hỏi giáo viên hoặc bạn bè ý nghĩa của một từ/câu.", "es": "Se usa para preguntar qué significa una palabra o frase.", "ne": "कुनै शब्द वा वाक्यको अर्थ के हो भनेर सोध्न प्रयोग गरिन्छ।", "id": "Digunakan untuk bertanya apa arti dari suatu kata atau kalimat."
        },
        translations: {
            "en": "What does this mean?", "pt": "O que isso significa?", "zh-CN": "这是什么意思？", "tl": "Ano po ang ibig sabihin nito?", "vi": "Cái này có ý nghĩa là gì ạ?", "es": "¿Qué significa esto?", "ne": "यसको अर्थ के हो?", "id": "Apa arti dari ini?"
        }
    }
];