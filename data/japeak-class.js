// ==========================================
// Japeak 教材データベース（授業中）
// 対応言語: 19言語 + 日本語
// ==========================================
const japeakClassData = [
    {
        id: "japeak_cls_001", audio: "audio/japeak_cls_001.mp3", title: "質問する (Asking a Question)", category: "class_time",
        japanese: "先生、質問してもいいですか。", target_speech: "せんせいしつもんしてもいいですか",
        ruby: { hiragana: "<ruby>先生<rt>せんせい</rt></ruby>、<ruby>質問<rt>しつもん</rt></ruby>してもいいですか。", romaji: "Sensei, shitsumon shite mo ii desu ka." },
        context: {
            "ja": "授業中や勉強中に、分からないことを先生に聞きたい時に手を挙げて使います。",
            "en": "Used when you raise your hand to ask the teacher a question during class.",
            "zh-CN": "上课时举手向老师提问的用语。",
            "zh-TW": "上課時舉手向老師提問的用語。",
            "ko": "수업이나 공부 중에 모르는 것을 선생님께 묻고 싶을 때 손을 들고 사용합니다.",
            "vi": "Dùng khi giơ tay muốn hỏi giáo viên một câu hỏi trong giờ học.",
            "tl": "Ginagamit kapag nagtataas ng kamay para magtanong sa guro sa klase.",
            "id": "Digunakan saat mengangkat tangan untuk bertanya kepada guru di kelas.",
            "th": "ใช้ตอนยกมือถามคำถามคุณครูระหว่างเรียนเมื่อมีเรื่องที่ไม่เข้าใจ",
            "my": "စာသင်နေစဉ် နားမလည်သည်များကို ဆရာ့အား မေးလိုသောအခါ လက်ထောင်ပြီး သုံးသည်။",
            "km": "ប្រើនៅពេលអ្នកលើកដៃសួរសំណួរទៅកាន់គ្រូក្នុងម៉ោងរៀន។",
            "ne": "कक्षामा शिक्षकलाई प्रश्न सोध्न हात उठाउँदा प्रयोग गरिन्छ।",
            "mn": "Хичээлийн үеэр багшаас асуулт асуухын тулд гар өргөх үед ашиглана.",
            "si": "පන්තියේදී ගුරුවරයාගෙන් ප්‍රශ්නයක් ඇසීමට අත උස්සන විට භාවිතා වේ.",
            "bn": "ক্লাস চলাকালীন শিক্ষককে প্রশ্ন করার জন্য হাত তোলার সময় ব্যবহৃত হয়।",
            "pt": "Usado quando você levanta a mão para fazer uma pergunta ao professor durante a aula.",
            "es": "Se usa cuando levantas la mano para hacerle una pregunta al profesor en clase.",
            "fr": "Utilisé lorsque vous levez la main pour poser une question au professeur pendant le cours.",
            "ru": "Используется, когда вы поднимаете руку, чтобы задать вопрос учителю на уроке.",
            "uk": "Використовується, коли ви піднімаєте руку, щоб поставити запитання вчителю на уроці."
        },
        translations: {
            "en": "Teacher, may I ask a question?", "zh-CN": "老师，我可以提问吗？", "zh-TW": "老師，我可以提問嗎？", "ko": "선생님, 질문해도 될까요?", "vi": "Thưa thầy/cô, em có thể hỏi một câu được không ạ?", "tl": "Titser, pwede po bang magtanong?", "id": "Guru, bolehkah saya bertanya?", "th": "คุณครูคะ/ครับ ขอถามคำถามได้ไหมคะ/ครับ?", "my": "ဆရာ၊ မေးခွန်းမေးလို့ရမလား။", "km": "លោកគ្រូ/អ្នកគ្រូ តើខ្ញុំអាចសួរសំណួរបានទេ?", "ne": "शिक्षक, म एउटा प्रश्न सोध्न सक्छु?", "mn": "Багш аа, асуулт асууж болох уу?", "si": "ගුරුතුමනි, මට ප්‍රශ්නයක් අහන්න පුළුවන්ද?", "bn": "শিক্ষক, আমি কি একটা প্রশ্ন করতে পারি?", "pt": "Professor, posso fazer uma pergunta?", "es": "Profesor, ¿puedo hacer una pregunta?", "fr": "Professeur, puis-je poser une question ?", "ru": "Учитель, можно задать вопрос?", "uk": "Вчителю, можна поставити запитання?"
        }
    },
    {
        id: "japeak_cls_002", audio: "audio/japeak_cls_002.mp3", title: "ページを確認する (Checking the Page)", category: "class_time",
        japanese: "教科書の何ページですか。", target_speech: "きょうかしょのなんぺーじですか",
        ruby: { hiragana: "<ruby>教科書<rt>きょうかしょ</rt></ruby>の<ruby>何<rt>なん</rt></ruby>ページですか。", romaji: "Kyoukasho no nan peeji desu ka." },
        context: {
            "ja": "先生が指示した教科書の開く場所が聞き取れなかった時に確認する言葉です。",
            "en": "Used to ask which page of the textbook to open when you missed the teacher's instruction.",
            "zh-CN": "没听清老师说打开哪一页时，用来确认的用语。",
            "zh-TW": "沒聽清老師說打開哪一頁時，用來確認的用語。",
            "ko": "선생님이 펴라고 지시한 교과서의 페이지를 제대로 듣지 못했을 때 확인하는 말입니다.",
            "vi": "Dùng để hỏi xem mở sách giáo khoa trang bao nhiêu khi bạn nghe không rõ.",
            "tl": "Ginagamit para itanong kung aling pahina ng aklat ang bubuksan.",
            "id": "Digunakan untuk bertanya halaman berapa di buku cetak yang harus dibuka.",
            "th": "ใช้ถามว่าต้องเปิดหนังสือเรียนหน้าไหนเมื่อฟังที่คุณครูบอกไม่ทัน",
            "my": "ဆရာ ဖွင့်ခိုင်းသော ဖတ်စာအုပ်စာမျက်နှာကို မကြားလိုက်သောအခါ မေးရန်သုံးသည်။",
            "km": "ប្រើដើម្បីសួរថាតើត្រូវបើកសៀវភៅពុម្ពទំព័រណា ពេលអ្នកស្តាប់គ្រូមិនទាន់។",
            "ne": "शिक्षकले भनेको पृष्ठ नम्बर नसुन्दा कुन पृष्ठ हो भनेर सोध्न प्रयोग गरिन्छ।",
            "mn": "Багшийн хэлсэн сурах бичгийн хуудсыг сонсож амжаагүй үедээ тодруулахын тулд хэрэглэнэ.",
            "si": "ගුරුවරයා පැවසූ පෙළපොතේ පිටුව ඔබට නොඇසුණු විට එය තහවුරු කර ගැනීමට භාවිතා වේ.",
            "bn": "শিক্ষক কোন পৃষ্ঠা খুলতে বলেছেন তা না শুনলে পৃষ্ঠা নম্বর জানতে ব্যবহৃত হয়।",
            "pt": "Usado para perguntar qual página do livro abrir quando você não ouviu a instrução.",
            "es": "Se usa para preguntar qué página del libro abrir cuando no escuchaste.",
            "fr": "Utilisé pour demander à quelle page du manuel ouvrir quand on n'a pas entendu la consigne.",
            "ru": "Используется, чтобы спросить, какую страницу учебника открыть, если вы не расслышали.",
            "uk": "Використовується, щоб запитати, яку сторінку підручника відкрити, якщо ви не почули."
        },
        translations: {
            "en": "What page of the textbook is it?", "zh-CN": "请问是教科书的第几页？", "zh-TW": "請問是教科書的第幾頁？", "ko": "교과서 몇 페이지인가요?", "vi": "Sách giáo khoa trang mấy vậy ạ?", "tl": "Anong pahina po ng aklat?", "id": "Buku cetaknya halaman berapa?", "th": "หนังสือเรียนหน้าอะไรเหรอคะ/ครับ?", "my": "ဖတ်စာအုပ် စာမျက်နှာ ဘယ်လောက်လဲ။", "km": "តើសៀវភៅពុម្ពទំព័រប៉ុន្មាន?", "ne": "पाठ्यपुस्तकको कुन पाना हो?", "mn": "Сурах бичгийн хэддүгээр хуудас вэ?", "si": "පෙළපොතේ කීවෙනි පිටුවද?", "bn": "বইয়ের কত নম্বর পৃষ্ঠা?", "pt": "Qual é a página do livro didático?", "es": "¿Qué página del libro de texto es?", "fr": "C'est à quelle page du manuel ?", "ru": "Какая это страница учебника?", "uk": "Яка це сторінка підручника?"
        }
    },
    {
        id: "japeak_cls_003", audio: "audio/japeak_cls_003.mp3", title: "プリントがない時 (Missing a Handout)", category: "class_time",
        japanese: "プリントをもらっていません。", target_speech: "ぷりんとをもらっていません",
        ruby: { hiragana: "プリントをもらっていません。", romaji: "Purinto o moratte imasen." },
        context: {
            "ja": "授業で配られたプリント（用紙）が自分の席まで回ってこなかった時に先生に伝えます。",
            "en": "Used to tell the teacher that you didn't receive the handout distributed in class.",
            "zh-CN": "上课发的讲义没有传到自己这里时，向老师说明的用语。",
            "zh-TW": "上課發的講義沒有傳到自己這裡時，向老師說明的用語。",
            "ko": "수업에서 나눠준 유인물을 받지 못했을 때 선생님께 알리는 말입니다.",
            "vi": "Dùng để nói với giáo viên rằng bạn chưa nhận được tài liệu phát trên lớp.",
            "tl": "Ginagamit upang sabihin sa guro na hindi ka nakatanggap ng handout.",
            "id": "Digunakan untuk memberitahu guru bahwa Anda belum mendapat lembaran tugas.",
            "th": "ใช้บอกคุณครูเมื่อคุณไม่ได้รับเอกสารที่แจกในห้องเรียน",
            "my": "စာသင်ခန်းတွင် ဝေသော စာရွက် မိမိထံ မရောက်လာသောအခါ ဆရာ့အား ပြောရန်သုံးသည်။",
            "km": "ប្រើដើម្បីប្រាប់គ្រូថាអ្នកមិនទទួលបានក្រដាសលំហាត់ដែលបានចែកនៅក្នុងថ្នាក់។",
            "ne": "कक्षामा बाँडिएको कागज (प्रिन्ट) आफूले नपाउँदा शिक्षकलाई भनिन्छ।",
            "mn": "Хичээл дээр тараасан материал өөрт нь ирээгүй үед багшид хэлнэ.",
            "si": "පන්තියේදී බෙදා දුන් පත්‍රිකාව ඔබට නොලැබුණු විට ගුරුවරයාට පැවසීමට භාවිතා වේ.",
            "bn": "ক্লাসে দেওয়া হ্যান্ডআউট না পেলে শিক্ষককে জানাতে ব্যবহৃত হয়।",
            "pt": "Usado para dizer ao professor que você não recebeu a folha de atividades.",
            "es": "Se usa para decirle al profesor que no recibiste la hoja de trabajo.",
            "fr": "Utilisé pour dire au professeur que l'on n'a pas reçu le document distribué en classe.",
            "ru": "Используется, чтобы сказать учителю, что вы не получили раздаточный материал.",
            "uk": "Використовується, щоб сказати вчителю, що ви не отримали роздатковий матеріал."
        },
        translations: {
            "en": "I haven't received the handout.", "zh-CN": "我没有拿到讲义。", "zh-TW": "我沒有拿到講義。", "ko": "프린트를 받지 못했습니다.", "vi": "Em chưa nhận được tài liệu ạ.", "tl": "Hindi po ako nakatanggap ng handout.", "id": "Saya belum menerima lembaran tugas.", "th": "หนู/ผมยังไม่ได้รับเอกสารค่ะ/ครับ", "my": "စာရွက် မရသေးပါ။", "km": "ខ្ញុំមិនទាន់ទទួលបានក្រដាសលំហាត់ទេ។", "ne": "मैले प्रिन्ट पाएको छैन।", "mn": "Би тараах материал аваагүй байна.", "si": "මට පත්‍රිකාව ලැබුණේ නැහැ.", "bn": "আমি কাগজটি পাইনি।", "pt": "Eu não recebi a folha.", "es": "No he recibido la hoja.", "fr": "Je n'ai pas reçu le document.", "ru": "Я не получил распечатку.", "uk": "Я не отримав роздруківку."
        }
    },
    {
        id: "japeak_cls_004", audio: "audio/japeak_cls_004.mp3", title: "黒板が見えない時 (Can't See the Board)", category: "class_time",
        japanese: "黒板が見えません。", target_speech: "こくばんがみえません",
        ruby: { hiragana: "<ruby>黒板<rt>こくばん</rt></ruby>が<ruby>見<rt>み</rt></ruby>えません。", romaji: "Kokuban ga miemasen." },
        context: {
            "ja": "光の反射や前の人の頭で、黒板（ホワイトボード）の字が見えない時に使います。",
            "en": "Used when you cannot see the writing on the blackboard due to glare or someone's head.",
            "zh-CN": "因为反光或被挡住而看不见黑板时使用的用语。",
            "zh-TW": "因為反光或被擋住而看不見黑板時使用的用語。",
            "ko": "빛 반사나 앞 사람의 머리 때문에 칠판 글씨가 보이지 않을 때 사용합니다.",
            "vi": "Dùng khi bạn không thể nhìn thấy bảng đen do bị lóa hoặc bị che khuất.",
            "tl": "Ginagamit kapag hindi mo makita ang nakasulat sa blackboard.",
            "id": "Digunakan saat Anda tidak bisa melihat papan tulis.",
            "th": "ใช้เมื่อมองไม่เห็นกระดานดำเพราะแสงสะท้อนหรือโดนบัง",
            "my": "အလင်းပြန်ခြင်း သို့မဟုတ် ရှေ့လူ၏ခေါင်းကြောင့် ကျောက်သင်ပုန်းမှ စာကို မမြင်ရသောအခါ သုံးသည်။",
            "km": "ប្រើនៅពេលអ្នកមិនអាចមើលឃើញក្តារខៀន ដោយសារពន្លឺចាំង ឬមានមនុស្សបាំង។",
            "ne": "अगाडिको मान्छे वा प्रकाशको कारणले कालोपाटी नदेख्दा प्रयोग गरिन्छ।",
            "mn": "Гэрэл гялбах эсвэл урд талын хүн хааснаас болж самбар харагдахгүй үед хэрэглэнэ.",
            "si": "ආලෝකය පරාවර්තනය වීමෙන් හෝ ඉදිරියෙන් සිටින කෙනෙකු නිසා කළු ලෑල්ල නොපෙනෙන විට භාවිතා වේ.",
            "bn": "আলোর প্রতিফলন বা সামনের কারো মাথার কারণে ব্ল্যাকবোর্ড দেখতে না পেলে ব্যবহৃত হয়।",
            "pt": "Usado quando você não consegue ver a lousa devido ao reflexo ou à cabeça de alguém.",
            "es": "Se usa cuando no puedes ver la pizarra debido al reflejo o a alguien.",
            "fr": "Utilisé lorsque l'on ne peut pas voir le tableau à cause d'un reflet ou de quelqu'un devant.",
            "ru": "Используется, когда вам не видно доску из-за бликов или впереди сидящих.",
            "uk": "Використовується, коли вам не видно дошку через відблиски або тих, хто сидить попереду."
        },
        translations: {
            "en": "I can't see the blackboard.", "zh-CN": "我看不见黑板。", "zh-TW": "我看不見黑板。", "ko": "칠판이 안 보여요.", "vi": "Em không nhìn thấy bảng ạ.", "tl": "Hindi ko po makita ang blackboard.", "id": "Saya tidak bisa melihat papan tulis.", "th": "มองไม่เห็นกระดานดำค่ะ/ครับ", "my": "ကျောက်သင်ပုန်းကို မမြင်ရပါ။", "km": "ខ្ញុំមើលមិនឃើញក្តារខៀនទេ។", "ne": "मैले कालोपाटी देख्न सकिनँ।", "mn": "Самбар харагдахгүй байна.", "si": "මට කළු ලෑල්ල පේන්නේ නැහැ.", "bn": "আমি ব্ল্যাকবোর্ড দেখতে পাচ্ছি না।", "pt": "Não consigo ver a lousa.", "es": "No puedo ver la pizarra.", "fr": "Je ne vois pas le tableau.", "ru": "Мне не видно доску.", "uk": "Мені не видно дошку."
        }
    },
    {
        id: "japeak_cls_005", audio: "audio/japeak_cls_005.mp3", title: "声が聞こえない時 (Can't Hear)", category: "class_time",
        japanese: "もう少し大きな声でお願いします。", target_speech: "もうすこしおおきなこえでおねがいします",
        ruby: { hiragana: "もう<ruby>少<rt>すこ</rt></ruby>し<ruby>大<rt>おお</rt></ruby>きな<ruby>声<rt>こえ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。", romaji: "Mou sukoshi ookina koe de onegai shimasu." },
        context: {
            "ja": "先生や友達の声が小さくて聞こえない時に、もっと大きく話してほしいとお願いします。",
            "en": "Used to ask the teacher or a friend to speak louder when you can't hear them.",
            "zh-CN": "听不清老师或同学的声音时，请求对方大声一点。",
            "zh-TW": "聽不清老師或同學的聲音時，請求對方大聲一點。",
            "ko": "선생님이나 친구의 목소리가 작아서 들리지 않을 때 조금 더 크게 말해달라고 부탁합니다.",
            "vi": "Dùng để yêu cầu ai đó nói to hơn một chút khi bạn không nghe rõ.",
            "tl": "Ginagamit para pakiusapan ang isang tao na lakasan ang boses.",
            "id": "Digunakan untuk meminta seseorang berbicara lebih keras.",
            "th": "ใช้ขอให้คุณครูหรือเพื่อนพูดให้ดังขึ้นอีกนิดเมื่อไม่ได้ยิน",
            "my": "ဆရာ သို့မဟုတ် သူငယ်ချင်း၏ အသံတိုး၍ မကြားရသောအခါ အနည်းငယ် ပိုကျယ်ကျယ်ပြောပေးရန် တောင်းဆိုသည်။",
            "km": "ប្រើដើម្បីសុំឱ្យគ្រូ ឬមិត្តភក្តិនិយាយឱ្យលឺជាងនេះបន្តិច ពេលអ្នកស្តាប់មិនលឺ។",
            "ne": "आवाज सानो भएर नसुन्दा अलि ठूलो स्वरमा बोल्न अनुरोध गर्दा प्रयोग गरिन्छ।",
            "mn": "Багш эсвэл найзынхаа дууг сонсохгүй байгаа үед арай чанга ярихыг хүсэхэд хэрэглэнэ.",
            "si": "ගුරුවරයාගේ හෝ මිතුරාගේ හඬ නොඇසෙන විට ටිකක් හයියෙන් කතා කරන ලෙස ඉල්ලා සිටීමට භාවිතා වේ.",
            "bn": "শিক্ষক বা বন্ধুর কথা শুনতে না পেলে একটু জোরে কথা বলতে অনুরোধ করার জন্য ব্যবহৃত হয়।",
            "pt": "Usado para pedir que falem mais alto quando você não consegue ouvir.",
            "es": "Se usa para pedir que hablen más fuerte cuando no puedes escuchar.",
            "fr": "Utilisé pour demander de parler un peu plus fort quand on n'entend pas bien.",
            "ru": "Используется, чтобы попросить говорить погромче, если вам не слышно.",
            "uk": "Використовується, щоб попросити говорити гучніше, якщо вам не чути."
        },
        translations: {
            "en": "Please speak a little louder.", "zh-CN": "请大声一点。", "zh-TW": "請大聲一點。", "ko": "조금만 더 크게 말씀해 주세요.", "vi": "Xin hãy nói to hơn một chút ạ.", "tl": "Pakilakasan po ng kaunti ang boses.", "id": "Tolong bicara sedikit lebih keras.", "th": "ช่วยพูดให้ดังขึ้นอีกนิดได้ไหมคะ/ครับ?", "my": "အသံနည်းနည်း ပိုကျယ်ကျယ် ပြောပေးပါ။", "km": "សូមនិយាយឱ្យលឺជាងនេះបន្តិច។", "ne": "कृपया अलि ठूलो स्वरमा बोल्नुहोस्।", "mn": "Арай чанга ярина уу.", "si": "කරුණාකර ටිකක් හයියෙන් කතා කරන්න.", "bn": "অনুগ্রহ করে একটু জোরে বলুন।", "pt": "Por favor, fale um pouco mais alto.", "es": "Por favor, hable un poco más fuerte.", "fr": "Parlez un peu plus fort, s'il vous plaît.", "ru": "Пожалуйста, говорите немного громче.", "uk": "Будь ласка, говоріть трохи голосніше."
        }
    },
    {
        id: "japeak_cls_006", audio: "audio/japeak_cls_006.mp3", title: "ペアワーク (Pair Work)", category: "class_time",
        japanese: "一緒にやりましょう。", target_speech: "いっしょにやりましょう",
        ruby: { hiragana: "<ruby>一緒<rt>いっしょ</rt></ruby>にやりましょう。", romaji: "Issho ni yarimashou." },
        context: {
            "ja": "2人1組（ペア）で話し合ったり、問題を解いたりする時に、隣の席の人に声をかけます。",
            "en": "Used to invite your desk neighbor to work together during pair work or group activities.",
            "zh-CN": "两人一组讨论或解题时，用来邀请旁边同学的用语。",
            "zh-TW": "兩人一組討論或解題時，用來邀請旁邊同學的用語。",
            "ko": "2인 1조로 의논하거나 문제를 풀 때 짝꿍에게 같이 하자고 하는 말입니다.",
            "vi": "Dùng để rủ người ngồi cạnh làm việc cùng nhau trong hoạt động nhóm/cặp.",
            "tl": "Ginagamit para yanyain ang katabi na gumawa nang magkasama sa pair work.",
            "id": "Digunakan untuk mengajak teman sebangku mengerjakan tugas bersama.",
            "th": "ใช้ชวนเพื่อนที่นั่งข้างๆ ให้ทำงานคู่หรือแก้โจทย์ปัญหาด้วยกัน",
            "my": "၂ ယောက် ၁ တွဲ တိုင်ပင်ဆွေးနွေးခြင်း သို့မဟုတ် ပုစ္ဆာတွက်သောအခါ ဘေးလူကို ခေါ်ရန်သုံးသည်။",
            "km": "ប្រើដើម្បីបបួលអ្នកអង្គុយក្បែរឱ្យធ្វើការរួមគ្នា ពេលធ្វើការជាគូ។",
            "ne": "जोडी भएर काम गर्दा वा छलफल गर्दा सँगै गरौं भन्न प्रयोग गरिन्छ।",
            "mn": "Хосоор ажиллах эсвэл даалгавар гүйцэтгэх үед хажуудах хүндээ хандаж хэлнэ.",
            "si": "යුගල වශයෙන් වැඩ කරන විට හෝ සාකච්ඡා කරන විට එකට කරමු යැයි පැවසීමට භාවිතා වේ.",
            "bn": "জোড়ায় কাজ করার সময় পাশের জনকে একসাথে কাজ করার জন্য বলা হয়।",
            "pt": "Usado para convidar o colega ao lado para trabalharem juntos em uma atividade.",
            "es": "Se usa para invitar al compañero de al lado a trabajar juntos en una actividad.",
            "fr": "Utilisé pour inviter son voisin de table à travailler ensemble lors d'un travail en binôme.",
            "ru": "Используется, чтобы предложить соседу по парте поработать вместе.",
            "uk": "Використовується, щоб запропонувати сусідові по парті попрацювати разом."
        },
        translations: {
            "en": "Let's do it together.", "zh-CN": "我们一起做吧。", "zh-TW": "我們一起做吧。", "ko": "같이 해요.", "vi": "Chúng ta cùng làm nhé.", "tl": "Gawin natin nang magkasama.", "id": "Ayo kita kerjakan bersama.", "th": "มาทำด้วยกันเถอะ", "my": "အတူတူ လုပ်ကြရအောင်။", "km": "តោះធ្វើវាជាមួយគ្នា។", "ne": "सँगै गरौं।", "mn": "Хамтдаа хийцгээе.", "si": "එකට කරමු.", "bn": "চলো একসাথে করি।", "pt": "Vamos fazer isso juntos.", "es": "Hagámoslo juntos.", "fr": "Faisons-le ensemble.", "ru": "Давай сделаем это вместе.", "uk": "Давай зробимо це разом."
        }
    },
    {
        id: "japeak_cls_007", audio: "audio/japeak_cls_007.mp3", title: "作業が終わった時 (Finished a Task)", category: "class_time",
        japanese: "終わりました。", target_speech: "おわりました",
        ruby: { hiragana: "<ruby>終<rt>お</rt></ruby>わりました。", romaji: "Owarimashita." },
        context: {
            "ja": "先生に出されたプリントや、ノートを書き写す作業が最後まで完了したことを伝えます。",
            "en": "Used to tell the teacher that you have finished a task, such as a worksheet or copying notes.",
            "zh-CN": "用来向老师报告自己已经完成了讲义或笔记等任务。",
            "zh-TW": "用來向老師報告自己已經完成了講義或筆記等任務。",
            "ko": "선생님이 주신 프린트나 노트 필기 등의 과제를 다 마쳤을 때 알리는 말입니다.",
            "vi": "Dùng để báo với giáo viên rằng bạn đã làm xong bài hoặc chép xong bài.",
            "tl": "Ginagamit upang sabihin sa guro na tapos ka na sa gawain.",
            "id": "Digunakan untuk memberitahu guru bahwa Anda sudah selesai mengerjakan tugas.",
            "th": "ใช้บอกคุณครูว่าทำใบงานหรือจดบันทึกเสร็จเรียบร้อยแล้ว",
            "my": "ဆရာပေးသော စာရွက် သို့မဟုတ် ဗလာစာအုပ်တွင် ကူးရေးခြင်းများ ပြီးဆုံးကြောင်း ပြောရန်သုံးသည်။",
            "km": "ប្រើដើម្បីប្រាប់គ្រូថាអ្នកបានបញ្ចប់លំហាត់ ឬការកត់ត្រា។",
            "ne": "दिइएको काम वा लेख्ने काम सकियो भनेर जानकारी दिन प्रयोग गरिन्छ।",
            "mn": "Багшийн өгсөн даалгавар эсвэл дэвтэрт хуулж бичих ажил дууссаныг мэдэгдэнэ.",
            "si": "ගුරුවරයා දුන් වැඩ හෝ සටහන් ලිවීම අවසන් බව දැනුම් දීමට භාවිතා වේ.",
            "bn": "দেওয়া কাজ বা লেখা শেষ হলে শিক্ষককে তা জানাতে ব্যবহৃত হয়।",
            "pt": "Usado para dizer ao professor que você terminou uma tarefa.",
            "es": "Se usa para decirle al profesor que has terminado una tarea.",
            "fr": "Utilisé pour dire au professeur que l'on a terminé un exercice ou de copier la leçon.",
            "ru": "Используется, чтобы сказать учителю, что вы закончили задание или переписывание в тетрадь.",
            "uk": "Використовується, щоб сказати вчителю, що ви закінчили завдання або переписування в зошит."
        },
        translations: {
            "en": "I'm finished.", "zh-CN": "我做完了。", "zh-TW": "我做完了。", "ko": "다 했습니다.", "vi": "Em làm xong rồi ạ.", "tl": "Tapos na po ako.", "id": "Saya sudah selesai.", "th": "เสร็จแล้วค่ะ/ครับ", "my": "ပြီးပါပြီ။", "km": "ខ្ញុំធ្វើរួចហើយ។", "ne": "मैले सकें।", "mn": "Дуусчихлаа.", "si": "මම ඉවරයි.", "bn": "আমার শেষ।", "pt": "Eu terminei.", "es": "He terminado.", "fr": "J'ai fini.", "ru": "Я закончил.", "uk": "Я закінчив."
        }
    },
    {
        id: "japeak_cls_008", audio: "audio/japeak_cls_008.mp3", title: "読み方を聞く (Asking How to Read)", category: "class_time",
        japanese: "この漢字はどう読みますか。", target_speech: "このかんじはどうよみますか",
        ruby: { hiragana: "この<ruby>漢字<rt>かんじ</rt></ruby>はどう<ruby>読<rt>よ</rt></ruby>みますか。", romaji: "Kono kanji wa dou yomimasu ka." },
        context: {
            "ja": "教科書や黒板に書かれている漢字（言葉）の発音や読み方が分からない時に聞きます。",
            "en": "Used when you don't know the pronunciation or reading of a Kanji (Chinese character) in the textbook.",
            "zh-CN": "不知道教科书或黑板上的汉字怎么读时使用的提问。",
            "zh-TW": "不知道教科書或黑板上的漢字怎麼讀時使用的提問。",
            "ko": "교과서나 칠판에 적힌 한자(단어)를 어떻게 읽는지 모를 때 묻는 말입니다.",
            "vi": "Dùng khi bạn không biết cách đọc một chữ Hán (Kanji) trong sách.",
            "tl": "Ginagamit kapag hindi mo alam kung paano basahin ang isang Kanji.",
            "id": "Digunakan saat Anda tidak tahu cara membaca huruf Kanji.",
            "th": "ใช้ถามเมื่อไม่รู้วิธีอ่านคันจิในหนังสือเรียนหรือบนกระดานดำ",
            "my": "ဖတ်စာအုပ် သို့မဟုတ် ကျောက်သင်ပုန်းတွင် ရေးထားသော ခန်းဂျီး အသံထွက်ကို မသိသောအခါ မေးသည်။",
            "km": "ប្រើនៅពេលអ្នកមិនដឹងពីរបៀបអានអក្សរខាន់ជី (Kanji) នៅលើក្តារខៀន ឬសៀវភៅ។",
            "ne": "किताब वा कालोपाटीमा भएको कान्जी (अक्षर) कसरी पढ्ने भनेर सोध्दा प्रयोग गरिन्छ।",
            "mn": "Сурах бичиг болон самбар дээрх ханз (үг)-ийг хэрхэн уншихыг мэдэхгүй үедээ асууна.",
            "si": "පෙළපොතේ හෝ කළු ලෑල්ලේ ඇති කාන්ජි (අකුරු) කියවන ආකාරය නොදන්නා විට ඇසීමට භාවිතා වේ.",
            "bn": "বই বা ব্ল্যাকবোর্ডে লেখা কাঞ্জি (শব্দ) কীভাবে পড়তে হয় তা জানতে চাওয়া হয়।",
            "pt": "Usado quando você não sabe como ler um Kanji (letra) no livro.",
            "es": "Se usa cuando no sabes cómo leer un Kanji en el libro.",
            "fr": "Utilisé pour demander comment se prononce ou se lit un kanji (caractère).",
            "ru": "Используется, чтобы спросить, как читается кандзи (иероглиф).",
            "uk": "Використовується, щоб запитати, як читається кандзі (ієрогліф)."
        },
        translations: {
            "en": "How do you read this Kanji?", "zh-CN": "这个汉字怎么读？", "zh-TW": "這個漢字怎麼讀？", "ko": "이 한자는 어떻게 읽나요?", "vi": "Chữ Kanji này đọc như thế nào ạ?", "tl": "Paano po basahin ang Kanji na ito?", "id": "Bagaimana cara membaca Kanji ini?", "th": "คันจิตัวนี้อ่านว่าอะไรเหรอคะ/ครับ?", "my": "ဒီခန်းဂျီးကို ဘယ်လိုဖတ်ရမလဲ။", "km": "តើអក្សរខាន់ជីនេះអានយ៉ាងម៉េច?", "ne": "यो कान्जी कसरी पढ्ने?", "mn": "Энэ ханзыг хэрхэн унших вэ?", "si": "මෙම කාන්ජි අකුර කියවන්නේ කෙසේද?", "bn": "এই কাঞ্জিটি কীভাবে পড়তে হয়?", "pt": "Como se lê este Kanji?", "es": "¿Cómo se lee este Kanji?", "fr": "Comment lit-on ce kanji ?", "ru": "Как читается этот кандзи?", "uk": "Як читається цей кандзі?"
        }
    },
    {
        id: "japeak_cls_009", audio: "audio/japeak_cls_009.mp3", title: "答えが分からない時 (Don't Know the Answer)", category: "class_time",
        japanese: "答えがわかりません。", target_speech: "こたえがわかりません",
        ruby: { hiragana: "<ruby>答<rt>こた</rt></ruby>えがわかりません。", romaji: "Kotae ga wakarimasen." },
        context: {
            "ja": "先生に当てられた（質問された）時に、正解が分からないことを正直に伝える言葉です。",
            "en": "Used to honestly tell the teacher that you don't know the answer when called upon.",
            "zh-CN": "被老师提问时，诚实地表示自己不知道答案的用语。",
            "zh-TW": "被老師提問時，誠實地表示自己不知道答案的用語。",
            "ko": "선생님이 질문했을 때 정답을 모른다는 것을 솔직하게 전달하는 말입니다.",
            "vi": "Dùng để trả lời thành thật rằng bạn không biết đáp án khi được giáo viên gọi.",
            "tl": "Ginagamit upang sabihin nang tapat sa guro na hindi mo alam ang sagot.",
            "id": "Digunakan untuk memberitahu guru dengan jujur bahwa Anda tidak tahu jawabannya.",
            "th": "ใช้บอกตรงๆ ว่าไม่รู้คำตอบเวลาที่คุณครูเรียกถาม",
            "my": "ဆရာက မေးခွန်းမေးသောအခါ အဖြေမှန်ကို မသိကြောင်း ရိုးသားစွာ ပြောရန်သုံးသည်။",
            "km": "ប្រើដើម្បីប្រាប់គ្រូដោយស្មោះត្រង់ថាអ្នកមិនដឹងចម្លើយ ពេលគ្រូហៅសួរ។",
            "ne": "शिक्षकले प्रश्न सोध्दा उत्तर थाहा नभएको कुरा इमान्दारीपूर्वक भन्दा प्रयोग गरिन्छ।",
            "mn": "Багш асуулт асуух үед хариултыг нь мэдэхгүй байгаагаа үнэнээр нь хэлэхэд хэрэглэнэ.",
            "si": "ගුරුවරයා ප්‍රශ්නයක් ඇසූ විට පිළිතුර නොදන්නා බව අවංකව පැවසීමට භාවිතා වේ.",
            "bn": "শিক্ষক প্রশ্ন করলে উত্তর না জানা থাকলে সততার সাথে তা জানাতে ব্যবহৃত হয়।",
            "pt": "Usado para dizer honestamente ao professor que você não sabe a resposta.",
            "es": "Se usa para decirle honestamente al profesor que no sabes la respuesta.",
            "fr": "Utilisé pour dire honnêtement au professeur que l'on ne connaît pas la réponse quand on est interrogé.",
            "ru": "Используется, чтобы честно сказать учителю, что вы не знаете ответ.",
            "uk": "Використовується, щоб чесно сказати вчителю, що ви не знаєте відповідь."
        },
        translations: {
            "en": "I don't know the answer.", "zh-CN": "我不知道答案。", "zh-TW": "我不知道答案。", "ko": "답을 모르겠습니다.", "vi": "Em không biết câu trả lời ạ.", "tl": "Hindi ko po alam ang sagot.", "id": "Saya tidak tahu jawabannya.", "th": "ไม่ทราบคำตอบค่ะ/ครับ", "my": "အဖြေကို မသိပါ။", "km": "ខ្ញុំមិនដឹងចម្លើយទេ។", "ne": "मलाई उत्तर थाहा छैन।", "mn": "Би хариултыг нь мэдэхгүй байна.", "si": "මට පිළිතුර දන්නේ නැහැ.", "bn": "আমি উত্তরটি জানি না।", "pt": "Eu não sei a resposta.", "es": "No sé la respuesta.", "fr": "Je ne connais pas la réponse.", "ru": "Я не знаю ответ.", "uk": "Я не знаю відповідь."
        }
    },
    {
        id: "japeak_cls_010", audio: "audio/japeak_cls_010.mp3", title: "意味を確認する (Asking the Meaning)", category: "class_time",
        japanese: "これはどういう意味ですか。", target_speech: "これはどういういみですか",
        ruby: { hiragana: "これはどういう<ruby>意味<rt>いみ</rt></ruby>ですか。", romaji: "Kore wa dou iu imi desu ka." },
        context: {
            "ja": "プリントや教科書に書かれている言葉の「意味」が分からない時に先生や友達に聞きます。",
            "en": "Used to ask the teacher or a friend what a specific word or sentence means.",
            "zh-CN": "不知道讲义或教科书上的词语是什么意思时使用的提问。",
            "zh-TW": "不知道講義或教科書上的詞語是什麼意思時使用的提問。",
            "ko": "프린트나 교과서에 있는 단어의 '뜻'을 모를 때 선생님이나 친구에게 묻습니다.",
            "vi": "Dùng để hỏi giáo viên hoặc bạn bè ý nghĩa của một từ/câu.",
            "tl": "Ginagamit upang itanong kung ano ang ibig sabihin ng isang salita.",
            "id": "Digunakan untuk bertanya apa arti dari suatu kata atau kalimat.",
            "th": "ใช้ถามความหมายของคำศัพท์ในใบงานหรือหนังสือเรียนเมื่อไม่เข้าใจ",
            "my": "စာရွက် သို့မဟုတ် ဖတ်စာအုပ်တွင် ရေးထားသော စကားလုံး၏ အဓိပ္ပာယ်ကို မသိသောအခါ ဆရာ သို့မဟုတ် သူငယ်ချင်းကို မေးသည်။",
            "km": "ប្រើដើម្បីសួរគ្រូ ឬមិត្តភក្តិអំពីអត្ថន័យនៃពាក្យ ឬប្រយោគណាមួយ។",
            "ne": "कुनै शब्द वा वाक्यको अर्थ के हो भनेर सोध्न प्रयोग गरिन्छ।",
            "mn": "Тараах материал эсвэл сурах бичиг дээрх үгийн утгыг ойлгохгүй үедээ багш болон найзаасаа асууна.",
            "si": "යම් වචනයක හෝ වාක්‍යයක තේරුම කුමක්දැයි ගුරුවරයාගෙන් හෝ මිතුරෙකුගෙන් ඇසීමට භාවිතා වේ.",
            "bn": "কোনো শব্দ বা বাক্যের অর্থ জানতে শিক্ষক বা বন্ধুকে জিজ্ঞাসা করতে ব্যবহৃত হয়।",
            "pt": "Usado para perguntar ao professor ou a um amigo o que uma palavra significa.",
            "es": "Se usa para preguntar qué significa una palabra o frase.",
            "fr": "Utilisé pour demander à un professeur ou à un ami la signification d'un mot ou d'une phrase.",
            "ru": "Используется, чтобы спросить у учителя или друга, что означает определенное слово.",
            "uk": "Використовується, щоб запитати у вчителя або друга, що означає певне слово."
        },
        translations: {
            "en": "What does this mean?", "zh-CN": "这是什么意思？", "zh-TW": "這是什麼意思？", "ko": "이것은 무슨 뜻인가요?", "vi": "Cái này có ý nghĩa là gì ạ?", "tl": "Ano po ang ibig sabihin nito?", "id": "Apa arti dari ini?", "th": "อันนี้แปลว่าอะไรเหรอคะ/ครับ?", "my": "ဒါက ဘာအဓိပ္ပာယ်လဲ။", "km": "តើនេះមានន័យដូចម្តេច?", "ne": "यसको अर्थ के हो?", "mn": "Энэ ямар утгатай вэ?", "si": "මෙමගින් අදහස් කරන්නේ කුමක්ද?", "bn": "এটার মানে কী?", "pt": "O que isso significa?", "es": "¿Qué significa esto?", "fr": "Qu'est-ce que ça veut dire ?", "ru": "Что это значит?", "uk": "Що це означає?"
        }
    }
];