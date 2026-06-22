// ==========================================
// Japeak 教材データベース（事務室・手続き）
// ==========================================
const japeakOfficeData = [
    {
        id: "japeak_ofc_001", title: "場所を聞く (Where is the Office?)", category: "school_office",
        japanese: "事務室はどこですか。", target_speech: "じむしつはどこですか",
        ruby: { hiragana: "<ruby>事務室<rt>じむしつ</rt></ruby>はどこですか。", romaji: "Jimushitsu wa doko desu ka." },
        context: {
            "ja": "学校の手続きや、落とし物の確認などをする「事務室（窓口）」の場所が分からない時に先生や友達に聞きます。",
            "en": "Used to ask a teacher or friend where the school office is located when you need to do paperwork or check for lost items.",
            "pt": "Usado para perguntar a um professor ou amigo onde fica secretaria da escola.",
            "zh-CN": "不知道办理学校手续、确认失物等的“事务室（办公室）”在哪里时，向老师或同学询问的用语。",
            "tl": "Ginagamit upang itanong sa guro o kaibigan kung nasaan ang opisina ng paaralan.",
            "vi": "Dùng để hỏi giáo viên hoặc bạn bè xem văn phòng trường ở đâu khi cần làm thủ tục hoặc tìm đồ thất lạc.",
            "es": "Se usa para preguntarle al profesor o a un amigo dónde está la oficina de la escuela.",
            "ne": "कागजी काम गर्न वा हराएको सामान खोज्न स्कुलको कार्यालय (प्रशासन कक्ष) कहाँ छ भनेर सोध्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk bertanya kepada guru atau teman di mana letak tata usaha (TU) sekolah."
        },
        translations: {
            "en": "Where is the school office?", "pt": "Onde fica a secretaria?", "zh-CN": "请问事务室在哪里？", "tl": "Nasaan po ang opisina ng paaralan?", "vi": "Văn phòng trường ở đâu vậy ạ?", "es": "¿Dónde está la oficina de la escuela?", "ne": "प्रशासन कक्ष कहाँ छ?", "id": "Di mana ruang tata usaha?"
        }
    },
    {
        id: "japeak_ofc_002", title: "電話を借りたい (Borrowing a Phone)", category: "school_office",
        japanese: "電話を貸してください。", target_speech: "でんわをかしてください",
        ruby: { hiragana: "<ruby>電話<rt>でんわ</rt></ruby>を<ruby>貸<rt>か</rt></ruby>してください。", romaji: "Denwa o kashite kudasai." },
        context: {
            "ja": "忘れ物をした時や体調が悪い時など、緊急で家に連絡をしたい時に事務室の先生にお願いする言葉です。",
            "en": "Used to ask the office staff to let you use the phone in an emergency, such as when you forgot something or feel unwell.",
            "pt": "Usado para pedir permissão na secretaria para usar o telefone em caso de emergência.",
            "zh-CN": "忘记带东西或身体不舒服等，需要紧急给家里打个电话时，向事务室老师请求的用语。",
            "tl": "Ginagamit upang pakiusapan ang staff sa opisina na pahiramin ka ng telepono sa oras ng emergency.",
            "vi": "Dùng để xin phép thầy/cô ở văn phòng cho mượn điện thoại trong trường hợp khẩn cấp như quên đồ hoặc không khỏe.",
            "es": "Se usa para pedirle al personal de la oficina que te preste el teléfono en una emergencia.",
            "ne": "सामान बिर्संदा वा बिरामी हुँदा आकस्मिक रूपमा घरमा फोन गर्न प्रशासनको शिक्षकसँग अनुरोध गर्दा प्रयोग गरिन्छ।",
            "id": "Digunakan untuk meminta izin kepada staf TU untuk meminjam telepon dalam keadaan darurat."
        },
        translations: {
            "en": "Please let me use the phone.", "pt": "Por favor, me empreste o telefone.", "zh-CN": "请把电话借我用一下。", "tl": "Pahiram po ng telepono.", "vi": "Cho em mượn điện thoại với ạ.", "es": "Por favor, présteme el teléfono.", "ne": "कृपया मलाई फोन दिनुहोस्।", "id": "Tolong pinjamkan teleponnya."
        }
    },
    {
        id: "japeak_ofc_003", title: "忘れ物の確認 (Checking Lost Property)", category: "school_office",
        japanese: "ここに届いていますか。", target_speech: "ここに届いていますか",
        ruby: { hiragana: "ここに<ruby>届<rt>とど</rt></ruby>いていますか。", romaji: "Koko ni todokeite imasu ka." },
        context: {
            "ja": "自分がなくした落とし物が、事務室に届けられていないかを確認する時に使う言葉です。",
            "en": "Used to check if an item you lost has been handed in to the school office.",
            "pt": "Usado para verificar se algum objeto que você perdeu foi entregue na secretaria.",
            "zh-CN": "用来确认自己弄丢的东西是否已经被送到了事务室。",
            "tl": "Ginagamit para alamin kung ang nawala mong gamit ay naisuko na sa opisina.",
            "vi": "Dùng để kiểm tra xem đồ bạn làm mất đã được ai đó nộp lại văn phòng trường chưa.",
            "es": "Se usa para comprobar si un objeto que perdiste ha sido entregado en la oficina.",
            "ne": "आफ्नो हराएको सामान प्रशासन कक्षमा कसैले बुझाएको छ कि भनेर सोध्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk memastikan apakah barang Anda yang hilang sudah diserahkan ke ruang TU."
        },
        translations: {
            "en": "Has it been turned in here?", "pt": "Foi entregue aqui?", "zh-CN": "请问有送到这里来吗？", "tl": "May nag-surrender po ba rito?", "vi": "Có đồ thất lạc nào được nộp ở đây không ạ?", "es": "¿Ha sido entregado aquí?", "ne": "के यहाँ बुझाइएको छ?", "id": "Apakah ada yang mengumpulkannya ke sini?"
        }
    },
    {
        id: "japeak_ofc_004", title: "学生証の紛失 (Lost Student ID)", category: "school_office",
        japanese: "学生証をなくしました。", target_speech: "がくせいしょうをなくしました",
        ruby: { hiragana: "<ruby>学生証<rt>がくせいしょう</rt></ruby>をなくしました。", romaji: "Gakuseishou o nakushimashita." },
        context: {
            "ja": "学校の身分証明書（学生証）を紛失してしまい、再発行などの手続きをお願いする時に事務室で伝えます。",
            "en": "Used to inform the school office that you lost your student ID card and need to request a re-issue.",
            "pt": "Usado para informar na secretaria que você perdeu sua carteirinha de estudante e precisa de outra.",
            "zh-CN": "遗失了学校的身份证明（学生证），去事务室申请补办等手续时说明的用语。",
            "tl": "Ginagamit upang sabihin sa opisina na nawala mo ang iyong student ID upang magpagawa ng bago.",
            "vi": "Dùng để báo với văn phòng trường khi bạn làm mất thẻ học sinh và cần làm thủ tục cấp lại.",
            "es": "Se usa para informar a la oficina que perdiste tu credencial de estudiante y pedir una nueva.",
            "ne": "स्कुलको विद्यार्थी परिचयपत्र (ID Card) हराएकोले नयाँ बनाउनको लागि प्रशासन कक्षमा जानकारी दिँदा प्रयोग गरिन्छ।",
            "id": "Digunakan untuk memberitahu ruang TU bahwa kartu pelajar Anda hilang dan ingin membuat yang baru."
        },
        translations: {
            "en": "I lost my student ID card.", "pt": "Perdi minha carteirinha de estudante.", "zh-CN": "我的学生证弄丢了。", "tl": "Nawala ko po ang student ID ko.", "vi": "Em làm mất thẻ học sinh rồi ạ.", "es": "Perdí mi credencial de estudiante.", "ne": "मैले मेरो विद्यार्थी परिचयपत्र हराएँ।", "id": "Kartu pelajar saya hilang."
        }
    },
    {
        id: "japeak_ofc_005", title: "定期券の相談 (Commuter Pass Box)", category: "school_office",
        japanese: "定期券を買いたいです。", target_speech: "ていきけんをかいたいです",
        ruby: { hiragana: "<ruby>定期券<rt>ていきけん</rt></ruby>を<ruby>買<rt>か</rt></ruby>いたいです。", romaji: "Teikiken o kaitai desu." },
        context: {
            "ja": "電車やバスで通学するための「定期券」の買い方や、必要な書類について事務室で相談する時の言葉です。",
            "en": "Used to ask the office staff about how to buy a commuter pass for trains or buses and what documents are needed.",
            "pt": "Usado para perguntar na secretaria como comprar o passe de transporte (trem/ônibus) e quais documentos precisa.",
            "zh-CN": "关于乘坐电车或公交车上下学所需的“定期车票”的购买方法及所需材料，在事务室咨询时的用语。",
            "tl": "Ginagamit upang itanong sa opisina kung paano bumili ng commuter pass para sa tren o bus at kung ano ang kailangan.",
            "vi": "Dùng khi bạn muốn hỏi văn phòng về cách mua 'vé tháng' đi tàu hoặc xe buýt và các giấy tờ cần thiết.",
            "es": "Se usa para preguntar al personal cómo comprar un pase de transporte para tren o autobús.",
            "ne": "बस वा रेलको मासिक टिकट (कम्युटर पास) कसरी किन्ने र के-के कागजपत्र चाहिन्छ भनेर सोध्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk bertanya kepada staf TU tentang cara membeli tiket terusan (pass) kereta/bus dan dokumen yang diperlukan."
        },
        translations: {
            "en": "I want to buy a commuter pass.", "pt": "Quero comprar o passe de transporte.", "zh-CN": "我想买定期车票。", "tl": "Gusto ko po sanang bumili ng commuter pass.", "vi": "Em muốn mua vé tháng ạ.", "es": "Quiero comprar un pase de transporte.", "ne": "म मासिक टिकट किन्न चाहन्छु।", "id": "Saya ingin membeli tiket terusan (pass)."
        }
    },
    {
        id: "japeak_ofc_006", title: "書類を提出する (Handing in Paperwork)", category: "school_office",
        japanese: "これをお願いします。", target_speech: "これをおねがいします",
        ruby: { hiragana: "これをお<ruby>願<rt>ねが</rt></ruby>いします。", romaji: "Kore o onegai shimasu." },
        context: {
            "ja": "親に書いてもらった書類や申請書を、事務室の窓口にいる先生に手渡す時の言葉です。",
            "en": "Used when handing over documents or application forms filled out by your parents to the office staff.",
            "pt": "Usado ao entregar documentos ou formulários preenchidos pelos pais na secretaria.",
            "zh-CN": "将父母填写的材料或申请书亲手交给事务室窗口老师时的用语。",
            "tl": "Ginagamit kapag ibinibigay sa opisina ang mga dokumentong sinagutan ng iyong magulang.",
            "vi": "Dùng khi bạn nộp các giấy tờ hoặc đơn xin do phụ huynh viết cho thầy/cô ở quầy văn phòng.",
            "es": "Se usa al entregar documentos o formularios llenados por tus padres al personal de la oficina.",
            "ne": "अभिभावकले भरिदिनुभएको फारम वा कागजपत्र प्रशासनको काउन्टरमा बुझाउँदा प्रयोग गरिने शब्द।",
            "id": "Digunakan saat menyerahkan dokumen atau formulir pendaftaran yang sudah diisi orang tua ke loket TU."
        },
        translations: {
            "en": "Please take this. / Here you are.", "pt": "Por favor, aqui está.", "zh-CN": "这个麻烦您了。（递交材料）", "tl": "Ito po. / Pakiusap po.", "vi": "Dạ em gửi cái này ạ.", "es": "Por favor, tome esto. / Aquí tiene.", "ne": "यो लिनुहोस्, धन्यवाद।", "id": "Tolong terima ini. / Ini, mohon bantuannya."
        }
    },
    {
        id: "japeak_ofc_007", title: "証明書がほしい (Requesting Certificates)", category: "school_office",
        japanese: "在学証明書がほしいです。", target_speech: "ざいがくしゅめいしょがほしいです",
        ruby: { hiragana: "<ruby>在学証明書<rt>ざいがくしょうめいしょ</rt></ruby>がほしいです。", romaji: "Zaigaku shoumeisho ga hoshii desu ka." },
        context: {
            "ja": "ビザの手続きなどで、自分がこの学校の生徒であることを証明する書類（在学証明書）がほしい時に頼みます。",
            "en": "Used to request a certificate of enrollment (proving you are a student at this school) for visa procedures or other official needs.",
            "pt": "Usado para solicitar um comprovante de matrícula (atestado de matrícula) para vistos ou outros fins.",
            "zh-CN": "因办理签证等手续，需要证明自己是这所学校学生的材料（在学证明书）时使用的申请用语。",
            "tl": "Ginagamit upang humingi ng certificate of enrollment para sa visa o iba pang kailangan.",
            "vi": "Dùng khi bạn cần xin giấy chứng nhận đang học tại trường (Giấy chứng nhận học sinh) để làm thủ tục visa hoặc việc khác.",
            "es": "Se usa para solicitar una constancia de estudios (que demuestra que eres estudiante de esta escuela).",
            "ne": "भिसा प्रक्रिया आदिको लागि आफू यसै स्कुलको विद्यार्थी भएको प्रमाणपत्र (Certificate of Enrollment) माग्न प्रयोग गरिन्छ处理。",
            "id": "Digunakan untuk meminta surat keterangan aktif sekolah (surat yang membuktikan Anda murid sekolah ini) untuk keperluan visa atau lainnya."
        },
        translations: {
            "en": "I need a certificate of enrollment.", "pt": "Preciso de um comprovante de matrícula.", "zh-CN": "我需要一份在学证明书。", "tl": "Kailangan ko po ng certificate of enrollment.", "vi": "Em muốn xin giấy chứng nhận học sinh ạ.", "es": "Necesito una constancia de estudios.", "ne": "मलाई विद्यार्थी प्रमाणपत्र चाहिन्छ।", "id": "Saya butuh surat keterangan aktif sekolah."
        }
    },
    {
        id: "japeak_ofc_008", title: "変更の届け出 (Changing Information)", category: "school_office",
        japanese: "住所が変わりました。", target_speech: "じゅうしょがかわりました",
        ruby: { hiragana: "<ruby>住所<rt>じゅうしょ</rt></ruby>が<ruby>変<rt>か</rt></ruby>わりました。", romaji: "Juusho ga kawarimashita." },
        context: {
            "ja": "引っ越しをして、新しい住所になったことを学校に報告して登録を直してもらう時に伝えます。",
            "en": "Used to inform the school that you have moved to a new address so they can update your registration records.",
            "pt": "Usado para informar à escola que você mudou de endereço para que atualizem o cadastro.",
            "zh-CN": "搬家后，向学校报告新住址以便更改登记信息时说明的用语。",
            "tl": "Ginagamit upang ipaalam sa paaralan na lumipat ka ng tirahan para ma-update ang iyong records.",
            "vi": "Dùng để báo với nhà trường khi bạn chuyển nhà, thay đổi địa chỉ để cập nhật lại thông tin đăng ký.",
            "es": "Se usa para informar a la escuela que te mudaste a una nueva dirección para que actualicen tus datos.",
            "ne": "बसाई सरेर नयाँ ठेगाना भएको कुरा विद्यालयमा जानकारी दिई रेकर्ड सच्याउन प्रयोग गरिन्छ।",
            "id": "Digunakan untuk memberitahu sekolah bahwa Anda sudah pindah ke alamat baru agar data pendaftaran diperbarui."
        },
        translations: {
            "en": "My address has changed.", "pt": "Meu endereço mudou.", "zh-CN": "我的住址变了。", "tl": "Nagbago po ang address ko.", "vi": "Địa chỉ nhà em thay đổi rồi ạ.", "es": "Mi dirección cambió.", "ne": "मेरो ठेगाना परिवर्तन भएको छ।", "id": "Alamat saya sudah berubah."
        }
    },
    {
        id: "japeak_ofc_009", title: "プリントをなくした時 (Lost a Handout)", category: "school_office",
        japanese: "プリントをもう一枚ください。", target_speech: "ぷりんとをもういちまいください",
        ruby: { hiragana: "プリントをもう<ruby>一枚<rt>いちまい</rt></ruby>ください。", romaji: "Purinto o mou ichimai kudasai." },
        context: {
            "ja": "学校からもらった大切な提出書類をなくしてしまい、事務室にもう一度もらいに行く時に頼む言葉です。",
            "en": "Used to ask the school office for another copy when you have lost an important handout or submission document.",
            "pt": "Usado para pedir na secretaria outra cópia de um documento importante que você perdeu.",
            "zh-CN": "弄丢了学校发放的重要递交材料，去事务室重新要一份时使用的申请用语。",
            "tl": "Ginagamit upang humingi ng isa pang kopya ng mahalagang dokumento na nawala mo.",
            "vi": "Dùng để xin lại một bản sao khác khi bạn làm mất giấy tờ nộp quan trọng được nhà trường phát.",
            "es": "Se usa para pedir otra copia de un documento importante que perdiste.",
            "ne": "स्कुलबाट पाएको महत्त्वपूर्ण फारम हराउँदा प्रशासन कक्षमा अर्को एउटा माग्न प्रयोग गरिने शब्द।",
            "id": "Digunakan untuk meminta lembaran tugas lagi ke ruang TU karena lembaran yang penting hilang."
        },
        translations: {
            "en": "Could I have another copy of the handout, please?", "pt": "Poderia me dar mais uma cópia da folha, por favor?", "zh-CN": "请再给我一张讲义/表格。", "tl": "Maaari po bang humingi ng isa pang kopya ng handout?", "vi": "Thầy/Cô cho em xin thêm một tờ tài liệu nữa được không ạ?", "es": "¿Me podría dar otra copia de la hoja, por favor?", "ne": "कृपया मलाई फारमको अर्को एउटा कपी दिनुहोस्।", "id": "Bolehkah saya meminta satu lembar tugas lagi?"
        }
    },
    {
        id: "japeak_ofc_010", title: "手続き完了の挨拶 (Thank You for Your Help)", category: "school_office",
        japanese: "ありがとうございました。", target_speech: "ありがとうございました",
        ruby: { hiragana: "ありがとうございました。", romaji: "Arigatou gozaimashita." },
        context: {
            "ja": "事務室での用事や手続きを助けてもらった後に、感謝を伝える大切なお礼の挨拶です。",
            "en": "An important thank you greeting said after the office staff has helped you with your business or paperwork.",
            "pt": "An agradecimento importante dito após a secretaria ajudá-lo com seus assuntos ou documentos.",
            "zh-CN": "在事务室办完事或得到帮助后，表达感谢的重要礼貌用语。",
            "tl": "Isang mahalagang pasasalamat matapos kang tulungan ng staff sa opisina sa iyong kailangan.",
            "vi": "Lời chào cảm ơn quan trọng sau khi được thầy/cô ở văn phòng giúp đỡ làm xong các thủ tục hoặc công việc.",
            "es": "Un saludo de agradecimiento importante que se dice después de que el personal te ayudó con tus trámites.",
            "ne": "प्रशासन कक्षमा आफ्नो काम वा प्रक्रिया सकिएपछि मद्दत गर्नुभएकोमा धन्यवाद भन्न प्रयोग गरिने अभिवादन।",
            "id": "Salam terima kasih yang penting diucapkan setelah staf TU membantu urusan atau pendaftaran Anda."
        },
        translations: {
            "en": "Thank you very much.", "pt": "Muito obrigado(a).", "zh-CN": "非常感谢。", "tl": "Maraming salamat po.", "vi": "Em cảm ơn rất nhiều ạ.", "es": "Muchas gracias.", "ne": "धेरै धेरै धन्यवाद।", "id": "Terima kasih banyak."
        }
    }
];