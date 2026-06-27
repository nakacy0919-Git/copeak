// ==========================================
// Japeak 教材データベース（休み時間・友達作り）
// 対応言語: 19言語 + 日本語
// ==========================================
const japeakBreakData = [
    {
        id: "japeak_brk_001", audio: "audio/japeak_brk_001.mp3", title: "遊びに誘う (Let's Play)", category: "break_time",
        japanese: "一緒に遊ぼう。", target_speech: "いっしょにあそぼう",
        ruby: { hiragana: "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>遊<rt>あそ</rt></ruby>ぼう。", romaji: "Issho ni asobou." },
        context: {
            "ja": "休み時間に友達を遊びに誘う時の言葉です。勇気を出して声をかけてみましょう。",
            "en": "Used to invite a friend to play during break time. Gather your courage and ask!",
            "zh-CN": "休息时邀请朋友一起玩的用语。鼓起勇气去搭话吧。",
            "zh-TW": "休息時邀請朋友一起玩的用語。鼓起勇氣去搭話吧。",
            "ko": "쉬는 시간에 친구를 놀이에 초대할 때 쓰는 말입니다. 용기를 내어 말을 걸어보세요.",
            "vi": "Dùng để rủ bạn bè cùng chơi vào giờ ra chơi. Hãy can đảm lên tiếng nhé.",
            "tl": "Ginagamit para ayayain ang kaibigan na maglaro sa oras ng pahinga. Lakasan ang loob at magtanong!",
            "id": "Digunakan untuk mengajak teman bermain saat jam istirahat. Beranikan dirimu dan ajaklah!",
            "th": "ใช้ชวนเพื่อนเล่นตอนพักกลางวัน รวบรวมความกล้าแล้วลองชวนดูนะ!",
            "my": "အနားယူချိန်တွင် သူငယ်ချင်းကို ကစားရန် ဖိတ်ခေါ်သော စကားဖြစ်သည်။ သတ္တိမွေးပြီး ပြောကြည့်ပါ။",
            "km": "ប្រើសម្រាប់បបួលមិត្តភក្តិលេងនៅពេលចេញលេង។ សូមក្លាហានសាកល្បងសួរទៅ!",
            "ne": "खाजाको छुट्टीमा साथीलाई खेल्न बोलाउन प्रयोग गरिन्छ। हिम्मत गरेर सोध्नुहोस्!",
            "mn": "Завсарлагаанаар найзыгаа тоглохыг урихдаа ашигладаг. Зориг гаргаад дуудаад үзээрэй!",
            "si": "විවේක කාලයේදී මිතුරෙකුට සෙල්ලම් කිරීමට ආරාධනා කරන විට භාවිතා වේ. ධෛර්යය ගෙන කතා කර බලන්න!",
            "bn": "টিফিন টাইমে বন্ধুদের খেলার জন্য ডাকার সময় ব্যবহৃত হয়। সাহস করে কথা বলে দেখো!",
            "pt": "Usado para convidar um amigo para brincar durante o intervalo. Crie coragem e pergunte!",
            "es": "Se usa para invitar a un amigo a jugar durante el recreo. ¡Anímate a preguntar!",
            "fr": "Utilisé pour inviter un ami à jouer pendant la récréation. Prenez votre courage à deux mains et demandez-lui !",
            "ru": "Используется, чтобы позвать друга играть на перемене. Наберись смелости и предложи!",
            "uk": "Використовується, щоб покликати друга грати на перерві. Наберися сміливості та запропонуй!"
        },
        translations: {
            "en": "Let's play together.", "zh-CN": "我们一起玩吧。", "zh-TW": "我們一起玩吧。", "ko": "같이 놀자.", "vi": "Cùng chơi nhé.", "tl": "Maglaro tayo.", "id": "Ayo main bersama.", "th": "มาเล่นด้วยกันเถอะ", "my": "အတူတူကစားရအောင်။", "km": "តោះលេងជាមួយគ្នា។", "ne": "सँगै खेलौं।", "mn": "Хамтдаа тоглоё.", "si": "එකට සෙල්ලම් කරමු.", "bn": "চলো একসাথে খেলি।", "pt": "Vamos brincar juntos.", "es": "Juguemos juntos.", "fr": "Jouons ensemble.", "ru": "Давай поиграем вместе.", "uk": "Давай пограємо разом."
        }
    },
    {
        id: "japeak_brk_002", audio: "audio/japeak_brk_002.mp3", title: "仲間に入れて (Can I Join?)", category: "break_time",
        japanese: "仲間に入れて。", target_speech: "なかまにいれて",
        ruby: { hiragana: "<ruby>仲間<rt>なかま</rt></ruby>に<ruby>入<rt>い</rt></ruby>れて。", romaji: "Nakama ni irete." },
        context: {
            "ja": "友達がすでに遊んでいるところに、自分も参加したい時に使います。",
            "en": "Used when you want to join friends who are already playing a game.",
            "zh-CN": "想加入已经开始玩耍的朋友们时使用。",
            "zh-TW": "想加入已經開始玩耍的朋友們時使用。",
            "ko": "친구들이 이미 놀고 있는 곳에 나도 끼고 싶을 때 사용합니다.",
            "vi": "Dùng khi bạn muốn tham gia vào nhóm bạn bè đang chơi.",
            "tl": "Ginagamit kapag gusto mong sumali sa mga kaibigan na naglalaro na.",
            "id": "Digunakan saat Anda ingin ikut bergabung dengan teman yang sedang bermain.",
            "th": "ใช้เมื่อต้องการเข้าร่วมวงกับเพื่อนที่กำลังเล่นกันอยู่",
            "my": "သူငယ်ချင်းများ ကစားနေသော နေရာတွင် မိမိလည်း ပါဝင်ချင်သောအခါ သုံးသည်။",
            "km": "ប្រើនៅពេលអ្នកចង់ចូលរួមជាមួយមិត្តភក្តិដែលកំពុងលេងរួចហើយ។",
            "ne": "साथीहरू खेलिरहेको ठाउँमा आफू पनि सहभागी हुन चाहँदा प्रयोग गरिन्छ।",
            "mn": "Найзууд нь хэдийнэ тоглож байгаа үед өөрөө ч бас оролцохыг хүсвэл хэрэглэнэ.",
            "si": "මිතුරන් දැනටමත් සෙල්ලම් කරමින් සිටින විට ඔබටත් සම්බන්ධ වීමට අවශ්‍ය වූ විට භාවිතා වේ.",
            "bn": "বন্ধুরা যেখানে খেলছে, সেখানে আপনিও যোগ দিতে চাইলে এটি ব্যবহৃত হয়।",
            "pt": "Usado quando você quer se juntar aos amigos que já estão brincando.",
            "es": "Se usa cuando quieres unirte a tus amigos que ya están jugando.",
            "fr": "Utilisé lorsque vous voulez rejoindre des amis qui sont déjà en train de jouer.",
            "ru": "Используется, когда вы хотите присоединиться к друзьям, которые уже играют.",
            "uk": "Використовується, коли ви хочете приєднатися до друзів, які вже грають."
        },
        translations: {
            "en": "Can I join you?", "zh-CN": "加我一个。", "zh-TW": "加我一個。", "ko": "나도 끼워 줘.", "vi": "Cho mình chơi với.", "tl": "Pwede ba akong sumali?", "id": "Bolehkah saya ikut bermain?", "th": "ขอเล่นด้วยคนสิ", "my": "ငါလည်း ကစားမယ်။", "km": "ខ្ញុំសុំលេងផងបានទេ?", "ne": "म पनि खेल्न सक्छु?", "mn": "Би хамт тоглож болох уу?", "si": "මටත් එකතු වෙන්න පුළුවන්ද?", "bn": "আমি কি তোমাদের সাথে যোগ দিতে পারি?", "pt": "Posso brincar também?", "es": "¿Puedo unirme?", "fr": "Je peux jouer aussi ?", "ru": "Можно с вами?", "uk": "Можна мені з вами?"
        }
    },
    {
        id: "japeak_brk_003", audio: "audio/japeak_brk_003.mp3", title: "順番を代わる (My Turn)", category: "break_time",
        japanese: "次は私の番です。", target_speech: "つぎはわたしのばんです",
        ruby: { hiragana: "<ruby>次<rt>つぎ</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>の<ruby>番<rt>ばん</rt></ruby>です。", romaji: "Tsugi wa watashi no ban desu." },
        context: {
            "ja": "ブランコなどの遊具やゲームで、順番を交代してほしい時にしっかり伝えます。",
            "en": "Used to firmly tell others that it's your turn next on the swings or a game.",
            "zh-CN": "玩秋千或游戏时，想要轮换顺序时明确地告诉对方。",
            "zh-TW": "玩鞦韆或遊戲時，想要輪換順序時明確地告訴對方。",
            "ko": "그네 등의 놀이기구나 게임에서 차례를 바꾸고 싶을 때 확실하게 전달합니다.",
            "vi": "Dùng để nói rõ rằng đã đến lượt mình chơi xích đu hoặc trò chơi nào đó.",
            "tl": "Ginagamit upang sabihin na ikaw na ang susunod sa swing o laro.",
            "id": "Digunakan untuk memberitahu bahwa sekarang giliran Anda di ayunan atau permainan.",
            "th": "ใช้บอกอย่างชัดเจนว่าถึงตาของตัวเองแล้วเวลาเล่นชิงช้าหรือเล่นเกม",
            "my": "ဒန်း စသော ကစားစရာများနှင့် ဂိမ်းများတွင် အလှည့်ပြောင်းပေးရန် သေချာစွာ ပြောသောအခါ သုံးသည်။",
            "km": "ប្រើដើម្បីប្រាប់ឱ្យច្បាស់ថានេះជាវេនរបស់អ្នក ពេលលេងទោង ឬហ្គេម។",
            "ne": "पिङ वा खेलमा अब मेरो पालो हो भनेर स्पष्ट रूपमा बताउन प्रयोग गरिन्छ।",
            "mn": "Савлуур зэрэг тоглоом дээр ээлжээ солихыг хүссэн үедээ тодорхой хэлнэ.",
            "si": "ඔන්චිල්ලා වැනි සෙල්ලම් භාණ්ඩ හෝ ක්‍රීඩා වලදී ඊළඟට ඔබේ වාරය බව පැවසීමට භාවිතා වේ.",
            "bn": "দোলনা বা খেলায় এবার আপনার পালা, তা স্পষ্টভাবে বলতে ব্যবহৃত হয়।",
            "pt": "Usado para dizer com firmeza que é a sua vez nos balanços ou num jogo.",
            "es": "Se usa para decir firmemente que es tu turno en los columpios o en un juego.",
            "fr": "Utilisé pour dire fermement que c'est votre tour de faire de la balançoire ou de jouer.",
            "ru": "Используется, чтобы твердо сказать, что теперь ваша очередь на качелях или в игре.",
            "uk": "Використовується, щоб твердо сказати, що тепер ваша черга на гойдалках або в грі."
        },
        translations: {
            "en": "It's my turn next.", "zh-CN": "接下来轮到我了。", "zh-TW": "接下來輪到我了。", "ko": "다음은 내 차례야.", "vi": "Tiếp theo là đến lượt mình.", "tl": "Ako na ang susunod.", "id": "Selanjutnya giliranku.", "th": "ตาต่อไปของฉันนะ", "my": "နောက်တစ်လှည့်က ငါ့အလှည့်ပါ။", "km": "បន្ទាប់ជាវេនរបស់ខ្ញុំ។", "ne": "अब मेरो पालो हो।", "mn": "Дараагийнх нь миний ээлж.", "si": "ඊළඟට මගේ වාරය.", "bn": "এরপর আমার পালা।", "pt": "É a minha vez agora.", "es": "Es mi turno ahora.", "fr": "C'est mon tour ensuite.", "ru": "Следующая моя очередь.", "uk": "Наступна моя черга."
        }
    },
    {
        id: "japeak_brk_004", audio: "audio/japeak_brk_004.mp3", title: "教室に戻る (Going Back)", category: "break_time",
        japanese: "教室に戻ろう。", target_speech: "きょうしつにもどろう",
        ruby: { hiragana: "<ruby>教室<rt>きょうしつ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>ろう。", romaji: "Kyoushitsu ni modorou." },
        context: {
            "ja": "休み時間が終わるチャイム（鐘）が鳴った時に、友達に声をかけます。",
            "en": "Used to tell your friends to head back when the bell rings to end break time.",
            "zh-CN": "休息时间结束的钟声响起时，用来提醒朋友回教室的用语。",
            "zh-TW": "休息時間結束的鐘聲響起時，用來提醒朋友回教室的用語。",
            "ko": "쉬는 시간이 끝나는 종이 울렸을 때 친구에게 하는 말입니다.",
            "vi": "Dùng để gọi bạn bè quay lại lớp khi chuông báo hết giờ ra chơi reo lên.",
            "tl": "Ginagamit para sabihin sa mga kaibigan na bumalik na kapag tumunog ang bell.",
            "id": "Digunakan untuk mengajak teman kembali ke kelas saat bel masuk berbunyi.",
            "th": "ใช้บอกเพื่อนให้กลับห้องเรียนเมื่อเสียงออดหมดเวลาพักดังขึ้น",
            "my": "အနားယူချိန် ပြီးဆုံးကြောင်း ခေါင်းလောင်းထိုးသောအခါ သူငယ်ချင်းကို ပြောသောစကားဖြစ်သည်။",
            "km": "ប្រើដើម្បីប្រាប់មិត្តភក្តិឱ្យត្រឡប់ទៅថ្នាក់វិញ ពេលកណ្តឹងបញ្ចប់ម៉ោងចេញលេងបន្លឺឡើង។",
            "ne": "छुट्टी सकिएको घण्टी बज्दा साथीहरूलाई कक्षामा फर्कन भन्दा प्रयोग गरिन्छ।",
            "mn": "Завсарлагаа дуусах хонх дуугарахад найзууддаа хандаж хэлнэ.",
            "si": "විවේක කාලය අවසන් වන සීනුව නාද වන විට මිතුරන්ට පන්තියට යමු යැයි පැවසීමට භාවිතා වේ.",
            "bn": "ছুটির ঘণ্টা বাজলে বন্ধুদের ক্লাসে ফিরে যাওয়ার জন্য বলা হয়।",
            "pt": "Usado para dizer aos amigos para voltarem quando o sinal toca para terminar o intervalo.",
            "es": "Se usa para decirles a tus amigos que regresen cuando suene el timbre de fin de recreo.",
            "fr": "Utilisé pour dire à vos amis de retourner en classe quand la sonnerie de fin de récréation retentit.",
            "ru": "Используется, чтобы позвать друзей обратно в класс, когда звенит звонок с перемены.",
            "uk": "Використовується, щоб покликати друзів назад до класу, коли лунає дзвоник з перерви."
        },
        translations: {
            "en": "Let's go back to the classroom.", "zh-CN": "回教室吧。", "zh-TW": "回教室吧。", "ko": "교실로 돌아가자.", "vi": "Về lớp thôi.", "tl": "Bumalik na tayo sa klase.", "id": "Ayo kembali ke kelas.", "th": "กลับห้องเรียนกันเถอะ", "my": "စာသင်ခန်းကို ပြန်သွားကြစို့။", "km": "តោះត្រឡប់ទៅថ្នាក់វិញ។", "ne": "कक्षामा फर्कौं।", "mn": "Анги руугаа буцацгаая.", "si": "පන්තියට යමු.", "bn": "চলো ক্লাসে ফিরে যাই।", "pt": "Vamos voltar para a sala.", "es": "Volvamos al salón.", "fr": "Retournons en classe.", "ru": "Пойдем обратно в класс.", "uk": "Повертаймося до класу."
        }
    },
    {
        id: "japeak_brk_005", audio: "audio/japeak_brk_005.mp3", title: "名前を聞く (Asking Name)", category: "break_time",
        japanese: "お名前は何ですか。", target_speech: "おなまえはなんですか",
        ruby: { hiragana: "お<ruby>名前<rt>なまえ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。", romaji: "Onamae wa nan desu ka." },
        context: {
            "ja": "初めて話すクラスメイトの名前を聞いて、友達になるための第一歩です。",
            "en": "The first step to making friends is asking a new classmate their name.",
            "zh-CN": "询问初次交谈的同学的名字，是交朋友的第一步。",
            "zh-TW": "詢問初次交談的同學的名字，是交朋友的第一步。",
            "ko": "처음 대화하는 반 친구의 이름을 물어보며 친구가 되기 위한 첫걸음을 내딛습니다.",
            "vi": "Hỏi tên một người bạn cùng lớp lần đầu tiên nói chuyện là bước đầu tiên để kết bạn.",
            "tl": "Ang unang hakbang sa pakikipagkaibigan ay ang pagtatanong ng pangalan ng kaklase.",
            "id": "Langkah pertama untuk berteman adalah menanyakan nama teman sekelas yang baru.",
            "th": "ถามชื่อเพื่อนร่วมชั้นที่เพิ่งเคยคุยด้วยครั้งแรก เป็นก้าวแรกในการเป็นเพื่อนกัน",
            "my": "ပထမဆုံးစကားပြောမည့် အတန်းဖော်၏ နာမည်ကို မေးခြင်းသည် သူငယ်ချင်းဖြစ်ရန် ပထမခြေလှမ်းဖြစ်သည်။",
            "km": "ការសួរឈ្មោះមិត្តរួមថ្នាក់ដែលនិយាយគ្នាលើកដំបូង ជាជំហានដំបូងដើម្បីក្លាយជាមិត្ត។",
            "ne": "पहिलो पटक कुरा गरिरहेको साथीको नाम सोधेर मित्रता सुरु गर्ने पहिलो कदम।",
            "mn": "Анх удаа ярилцаж байгаа ангийнхаа хүүхдийн нэрийг асуух нь найз болох эхний алхам юм.",
            "si": "පළමු වතාවට කතා කරන පන්තියේ මිතුරාගේ නම ඇසීම මිතුරන් වීමට පළමු පියවරයි.",
            "bn": "প্রথমবার কথা বলা সহপাঠীর নাম জিজ্ঞেস করে বন্ধুত্ব শুরু করার প্রথম ধাপ।",
            "pt": "O primeiro passo para fazer amigos é perguntar o nome de um novo colega.",
            "es": "El primer paso para hacer amigos es preguntarle el nombre a un nuevo compañero.",
            "fr": "La première étape pour se faire des amis est de demander son nom à un nouveau camarade.",
            "ru": "Первый шаг к тому, чтобы подружиться — спросить имя у нового одноклассника.",
            "uk": "Перший крок до того, щоб потоваришувати — запитати ім'я у нового однокласника."
        },
        translations: {
            "en": "What is your name?", "zh-CN": "你叫什么名字？", "zh-TW": "你叫什麼名字？", "ko": "이름이 뭐야?", "vi": "Bạn tên là gì?", "tl": "Ano ang pangalan mo?", "id": "Siapa namamu?", "th": "เธอชื่ออะไรเหรอ?", "my": "နာမည် ဘယ်လိုခေါ်လဲ။", "km": "តើអ្នកឈ្មោះអ្វី?", "ne": "तपाईंको नाम के हो?", "mn": "Чамайг хэн гэдэг вэ?", "si": "ඔයාගේ නම කුමක්ද?", "bn": "তোমার নাম কি?", "pt": "Qual é o seu nome?", "es": "¿Cómo te llamas?", "fr": "Comment tu t'appelles ?", "ru": "Как тебя зовут?", "uk": "Як тебе звати?"
        }
    },
    {
        id: "japeak_brk_006", audio: "audio/japeak_brk_006.mp3", title: "好きなものを聞く (Asking Preferences)", category: "break_time",
        japanese: "何が好きですか。", target_speech: "なにがすきですか",
        ruby: { hiragana: "<ruby>何<rt>なに</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。", romaji: "Nani ga suki desu ka." },
        context: {
            "ja": "相手の好きなアニメや食べ物を聞いて、共通点を見つけて仲良くなるための質問です。",
            "en": "A question to ask about their favorite anime or food to find common ground and become closer.",
            "zh-CN": "询问对方喜欢的动画或食物，寻找共同点以增进感情的提问。",
            "zh-TW": "詢問對方喜歡的動畫或食物，尋找共同點以增進感情的提問。",
            "ko": "상대방이 좋아하는 애니메이션이나 음식을 물어보고 공통점을 찾아 친해지기 위한 질문입니다.",
            "vi": "Câu hỏi về sở thích anime hoặc đồ ăn để tìm điểm chung và thân thiết hơn.",
            "tl": "Isang tanong tungkol sa paborito nilang anime o pagkain para mas maging malapit.",
            "id": "Pertanyaan tentang anime atau makanan favorit untuk mencari kesamaan dan menjadi lebih akrab.",
            "th": "คำถามเพื่อหาจุดร่วมและสนิทกันมากขึ้น โดยถามถึงอนิเมะหรืออาหารที่ชอบ",
            "my": "တစ်ဖက်လူ ကြိုက်နှစ်သက်သော အန်နီမေးရှင်း သို့မဟုတ် အစားအစာကို မေးပြီး တူညီသောအချက်ကိုရှာကာ ရင်းနှီးရန် မေးခွန်းဖြစ်သည်။",
            "km": "ជាសំណួរសួរពីរឿងគំនូរជីវចល ឬម្ហូបដែលចូលចិត្ត ដើម្បីស្វែងរកចំណុចដូចគ្នា និងកាន់តែស្និទ្ធស្នាល។",
            "ne": "साथीलाई मनपर्ने एनिमे वा खाना सोधेर समानता खोजी नजिक हुन सोधिने प्रश्न।",
            "mn": "Нөгөө хүнийхээ дуртай аниме эсвэл хоолыг нь асууж, ижил төстэй зүйл олж дотносох зорилготой асуулт.",
            "si": "අනෙක් පුද්ගලයා කැමති ඇනිමේ හෝ කෑම ගැන අසා පොදු දේවල් සොයාගෙන මිත්‍ර වීමට අසන ප්‍රශ්නයකි.",
            "bn": "পছন্দের অ্যানিমে বা খাবার সম্পর্কে জিজ্ঞেস করে মিল খুঁজে পেয়ে আরও ঘনিষ্ঠ হওয়ার প্রশ্ন।",
            "pt": "Uma pergunta para saber sobre o anime ou comida favorita deles e se aproximarem.",
            "es": "Una pregunta para saber cuál es su anime o comida favorita y hacerse más unidos.",
            "fr": "Une question sur leur anime ou repas préféré pour trouver des points communs et se rapprocher.",
            "ru": "Вопрос о любимом аниме или еде, чтобы найти общие интересы и сблизиться.",
            "uk": "Запитання про улюблене аніме чи їжу, щоб знайти спільні інтереси та зблизитися."
        },
        translations: {
            "en": "What do you like?", "zh-CN": "你喜欢什么？", "zh-TW": "你喜歡什麼？", "ko": "뭘 좋아해?", "vi": "Bạn thích gì?", "tl": "Ano ang mga gusto mo?", "id": "Kamu suka apa?", "th": "เธอชอบอะไรเหรอ?", "my": "ဘာကို ကြိုက်လဲ။", "km": "តើអ្នកចូលចិត្តអ្វី?", "ne": "तपाईंलाई के मन पर्छ?", "mn": "Чи юунд дуртай вэ?", "si": "ඔයා කැමති මොනවටද?", "bn": "তুমি কী পছন্দ করো?", "pt": "Do que você gosta?", "es": "¿Qué te gusta?", "fr": "Qu'est-ce que tu aimes ?", "ru": "Что тебе нравится?", "uk": "Що тобі подобається?"
        }
    },
    {
        id: "japeak_brk_007", audio: "audio/japeak_brk_007.mp3", title: "共感する (Me Too)", category: "break_time",
        japanese: "私も好きです。", target_speech: "わたしもすきです",
        ruby: { hiragana: "<ruby>私<rt>わたし</rt></ruby>も<ruby>好<rt>す</rt></ruby>きです。", romaji: "Watashi mo suki desu." },
        context: {
            "ja": "友達と同じものが好きだった時に、共感して会話を盛り上げる言葉です。",
            "en": "Used to show empathy and keep the conversation going when you like the same thing as your friend.",
            "zh-CN": "和朋友喜欢同样的东西时，用来产生共鸣、活跃气氛的用语。",
            "zh-TW": "和朋友喜歡同樣的東西時，用來產生共鳴、活躍氣氛的用語。",
            "ko": "친구와 같은 것을 좋아할 때 공감하며 대화를 이어나가는 말입니다.",
            "vi": "Dùng để thể hiện sự đồng cảm và làm câu chuyện vui hơn khi bạn thích cùng một thứ với bạn bè.",
            "tl": "Ginagamit para ipakita na pareho kayo ng gusto at maging masaya ang usapan.",
            "id": "Digunakan untuk menunjukkan bahwa Anda juga menyukai hal yang sama dengan teman.",
            "th": "ใช้บอกว่าชอบเหมือนกันเพื่อแสดงความรู้สึกร่วมและทำให้บทสนทนาสนุกขึ้น",
            "my": "သူငယ်ချင်းနှင့် ကြိုက်နှစ်သက်မှု တူညီသောအခါ ထောက်ခံအားပေးပြီး စကားပြောကောင်းစေရန် သုံးသည်။",
            "km": "ប្រើដើម្បីបង្ហាញការយល់ស្រប និងធ្វើឱ្យការសន្ទនាកាន់តែសប្បាយ ពេលអ្នកចូលចិត្តរបស់ដូចគ្នា។",
            "ne": "साथीलाई मनपर्ने कुरा आफूलाई पनि मन पर्दा कुराकानीलाई रोचक बनाउन प्रयोग गरिन्छ।",
            "mn": "Найзтайгаа ижил зүйлд дуртай байх үедээ санал нэгдэж, яриаг илүү сонирхолтой болгоход хэрэглэнэ.",
            "si": "මිතුරා කැමති දෙයටම ඔබත් කැමති වූ විට එකඟ වී කතාව දිගටම කරගෙන යාමට භාවිතා වේ.",
            "bn": "বন্ধুর মতো একই জিনিস পছন্দ হলে সহমত পোষণ করে আড্ডা জমানোর কথা।",
            "pt": "Usado para mostrar empatia quando você gosta da mesma coisa que seu amigo.",
            "es": "Se usa para mostrar empatía cuando te gusta lo mismo que a tu amigo.",
            "fr": "Utilisé pour montrer que vous avez les mêmes goûts et animer la conversation.",
            "ru": "Используется, чтобы показать, что вам нравится то же самое, и поддержать разговор.",
            "uk": "Використовується, щоб показати, що вам подобається те саме, і підтримати розмову."
        },
        translations: {
            "en": "I like it too. / Me too.", "zh-CN": "我也喜欢。", "zh-TW": "我也喜歡。", "ko": "나도 좋아해.", "vi": "Mình cũng thích.", "tl": "Gusto ko rin iyan.", "id": "Saya juga suka.", "th": "ฉันก็ชอบเหมือนกัน", "my": "ငါလည်း ကြိုက်တယ်။", "km": "ខ្ញុំក៏ចូលចិត្តដែរ។", "ne": "मलाई पनि मन पर्छ।", "mn": "Би ч бас дуртай.", "si": "මමත් කැමතියි.", "bn": "আমিও পছন্দ করি।", "pt": "Eu também gosto.", "es": "A mí también me gusta.", "fr": "Moi aussi j'aime bien.", "ru": "Мне тоже нравится.", "uk": "Мені теж подобається."
        }
    },
    {
        id: "japeak_brk_008", audio: "audio/japeak_brk_008.mp3", title: "日本語を教えてもらう (Asking to Teach)", category: "break_time",
        japanese: "日本語を教えてください。", target_speech: "にほんごをおしえてください",
        ruby: { hiragana: "<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。", romaji: "Nihongo o oshiete kudasai." },
        context: {
            "ja": "分からない言葉があったら、友達に聞いてみましょう。きっと喜んで教えてくれます。",
            "en": "If you don't know a word, ask a friend. They will surely be happy to teach you.",
            "zh-CN": "遇到不懂的词语，就问问朋友吧。他们一定会很乐意教你的。",
            "zh-TW": "遇到不懂的詞語，就問問朋友吧。他們一定會很樂意教你的。",
            "ko": "모르는 단어가 있다면 친구에게 물어보세요. 분명 기꺼이 가르쳐 줄 것입니다.",
            "vi": "Nếu có từ nào không biết, hãy hỏi bạn bè. Chắc chắn họ sẽ rất vui lòng chỉ cho bạn.",
            "tl": "Kung may hindi alam na salita, magtanong sa kaibigan. Tiyak na matutuwa silang turuan ka.",
            "id": "Jika ada kata yang tidak dimengerti, tanyakan pada teman. Mereka pasti senang mengajarimu.",
            "th": "ถ้ามีคำศัพท์ที่ไม่รู้ ลองถามเพื่อนดูสิ พวกเขาต้องเต็มใจสอนแน่นอน",
            "my": "နားမလည်သော စကားလုံးရှိပါက သူငယ်ချင်းကို မေးကြည့်ပါ။ ဝမ်းသာအားရ သင်ပေးပါလိမ့်မည်။",
            "km": "បើមានពាក្យមិនយល់ សូមសួរមិត្តភក្តិ។ ពួកគេប្រាកដជារីករាយនឹងបង្រៀនអ្នក។",
            "ne": "नबुझेको कुरा साथीलाई सोध्नुहोस्। उनीहरू पक्कै खुसी भएर सिकाउनेछन्।",
            "mn": "Ойлгохгүй үг байвал найзаасаа асуугаарай. Тэд дуртайяа зааж өгөх болно.",
            "si": "නොතේරෙන වචනයක් ඇත්නම් මිතුරෙකුගෙන් අසන්න. ඔවුන් නිසැකවම සතුටින් කියා දෙනු ඇත.",
            "bn": "বুঝতে না পারলে বন্ধুদের জিজ্ঞেস করো। তারা নিশ্চয়ই খুশিমনে শিখিয়ে দেবে।",
            "pt": "Se não souber uma palavra, pergunte a um amigo. Eles certamente ficarão felizes em ensinar.",
            "es": "Si no sabes una palabra, pregúntale a un amigo. Seguramente estarán felices de enseñarte.",
            "fr": "Si tu ne connais pas un mot, demande à un ami. Ils seront sûrement ravis de t'apprendre.",
            "ru": "Если не знаешь слово, спроси у друга. Он с радостью тебе подскажет.",
            "uk": "Якщо не знаєш слово, запитай у друга. Він з радістю тобі підкаже."
        },
        translations: {
            "en": "Please teach me Japanese.", "zh-CN": "请教我日语。", "zh-TW": "請教我日語。", "ko": "일본어 좀 가르쳐 줘.", "vi": "Hãy dạy tiếng Nhật cho mình với.", "tl": "Turuan mo naman ako ng Japanese.", "id": "Tolong ajari saya bahasa Jepang.", "th": "ช่วยสอนภาษาญี่ปุ่นให้หน่อยสิ", "my": "ဂျပန်စာ သင်ပေးပါ။", "km": "សូមបង្រៀនភាសាជប៉ុនឱ្យខ្ញុំផង។", "ne": "मलाई जापानी भाषा सिकाउनुहोस्।", "mn": "Надад япон хэл зааж өгөөч.", "si": "කරුණාකර මට ජපන් භාෂාව කියා දෙන්න.", "bn": "অনুগ্রহ করে আমাকে জাপানি ভাষা শেখাও।", "pt": "Por favor, me ensine japonês.", "es": "Por favor, enséñame japonés.", "fr": "S'il te plaît, apprends-moi le japonais.", "ru": "Пожалуйста, научи меня японскому.", "uk": "Будь ласка, навчи мене японської."
        }
    },
    {
        id: "japeak_brk_009", audio: "audio/japeak_brk_009.mp3", title: "移動する時 (Moving Together)", category: "break_time",
        japanese: "一緒に行こう。", target_speech: "いっしょにいこう",
        ruby: { hiragana: "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>こう。", romaji: "Issho ni ikou." },
        context: {
            "ja": "トイレや図書室、次の教室に移動する時に、友達を誘って一緒に行く言葉です。",
            "en": "Used to invite a friend to walk together to the bathroom, library, or next classroom.",
            "zh-CN": "去洗手间、图书馆或换教室时，邀请朋友一起走的用语。",
            "zh-TW": "去洗手間、圖書館或換教室時，邀請朋友一起走的用語。",
            "ko": "화장실이나 도서실, 다음 교실로 이동할 때 친구에게 같이 가자고 할 때 쓰는 말입니다.",
            "vi": "Dùng để rủ bạn bè cùng đi khi di chuyển đến nhà vệ sinh, thư viện hoặc lớp học tiếp theo.",
            "tl": "Ginagamit upang anyayahan ang kaibigan na sumabay sa pagpunta sa banyo o ibang klase.",
            "id": "Digunakan untuk mengajak teman pergi bersama ke toilet, perpustakaan, atau kelas berikutnya.",
            "th": "ใช้ชวนเพื่อนไปห้องน้ำ ห้องสมุด หรือห้องเรียนถัดไปด้วยกัน",
            "my": "အိမ်သာ၊ စာကြည့်တိုက် သို့မဟုတ် နောက်စာသင်ခန်းသို့ သွားသောအခါ သူငယ်ချင်းကို အတူတူသွားရန် ခေါ်သောစကားဖြစ်သည်။",
            "km": "ប្រើដើម្បីបបួលមិត្តភក្តិទៅជាមួយគ្នា ពេលដើរទៅបន្ទប់ទឹក បណ្ណាល័យ ឬថ្នាក់បន្ទាប់។",
            "ne": "शौचालय, पुस्तकालय वा अर्को कक्षामा जाँदा साथीलाई सँगै जान बोलाउन प्रयोग गरिन्छ।",
            "mn": "Бие засах газар, номын сан, дараагийн анги руу явахдаа найзыгаа хамт явахыг урихдаа хэрэглэнэ.",
            "si": "වැසිකිළියට, පුස්තකාලයට හෝ ඊළඟ පන්තියට යන විට මිතුරෙකුට එකට යමු යැයි පැවසීමට භාවිතා වේ.",
            "bn": "বাথরুম, লাইব্রেরি বা পরের ক্লাসে যাওয়ার সময় বন্ধুদের একসাথে যাওয়ার জন্য বলা হয়।",
            "pt": "Usado para convidar um amigo para ir junto ao banheiro, biblioteca ou próxima sala.",
            "es": "Se usa para invitar a un amigo a ir juntos al baño, a la biblioteca o a la siguiente clase.",
            "fr": "Utilisé pour inviter un ami à aller ensemble aux toilettes, à la bibliothèque ou dans la classe suivante.",
            "ru": "Используется, чтобы предложить другу пойти вместе в туалет, библиотеку или другой класс.",
            "uk": "Використовується, щоб запропонувати другу піти разом у туалет, бібліотеку або інший клас."
        },
        translations: {
            "en": "Let's go together.", "zh-CN": "我们一起去吧。", "zh-TW": "我們一起去吧。", "ko": "같이 가자.", "vi": "Cùng đi nhé.", "tl": "Sabay na tayong pumunta.", "id": "Ayo pergi bersama.", "th": "ไปด้วยกันเถอะ", "my": "အတူတူသွားရအောင်။", "km": "តោះទៅជាមួយគ្នា។", "ne": "सँगै जाऔं।", "mn": "Хамтдаа явцгаая.", "si": "එකට යමු.", "bn": "চলো একসাথে যাই।", "pt": "Vamos juntos.", "es": "Vamos juntos.", "fr": "Allons-y ensemble.", "ru": "Пойдем вместе.", "uk": "Пішли разом."
        }
    },
    {
        id: "japeak_brk_010", audio: "audio/japeak_brk_010.mp3", title: "楽しかったと伝える (Having Fun)", category: "break_time",
        japanese: "楽しかったです。", target_speech: "たのしかったです",
        ruby: { hiragana: "<ruby>楽<rt>たの</rt></ruby>しかったです。", romaji: "Tanoshikatta desu." },
        context: {
            "ja": "休み時間に一緒に遊んだ後、また遊びたいという気持ちを込めて伝える言葉です。",
            "en": "Said after playing together during the break, conveying the feeling that you want to play again.",
            "zh-CN": "休息时一起玩耍后使用，包含着“还想一起玩”的心情。",
            "zh-TW": "休息時一起玩耍後使用，包含著「還想一起玩」的心情。",
            "ko": "쉬는 시간에 같이 놀고 난 후, 또 놀고 싶다는 마음을 담아 전하는 말입니다.",
            "vi": "Nói sau khi cùng chơi vào giờ ra chơi, thể hiện mong muốn lần sau lại chơi tiếp.",
            "tl": "Sinasabi pagkatapos maglaro nang magkasama, nagpapakita na gusto mo pang maulit ito.",
            "id": "Diucapkan setelah selesai bermain bersama, menunjukkan bahwa Anda ingin bermain lagi nanti.",
            "th": "ใช้พูดหลังเล่นด้วยกันตอนพักกลางวัน เพื่อบอกว่าสนุกและอยากเล่นด้วยกันอีก",
            "my": "အနားယူချိန်တွင် အတူတူကစားပြီးနောက် နောက်ထပ်ကစားချင်သေးကြောင်း ပြောသောစကားဖြစ်သည်။",
            "km": "និយាយបន្ទាប់ពីលេងជាមួយគ្នានៅពេលចេញលេង ដើម្បីបង្ហាញអារម្មណ៍ចង់លេងម្តងទៀត។",
            "ne": "खाजाको समयमा सँगै खेलेपछि, फेरि खेल्ने इच्छा व्यक्त गर्न प्रयोग गरिन्छ।",
            "mn": "Завсарлагаанаар хамт тоглосны дараа дахин тоглох хүсэлтэй байгаагаа илэрхийлж хэлнэ.",
            "si": "විවේක කාලයේදී එකට සෙල්ලම් කළ පසු නැවතත් සෙල්ලම් කිරීමට අවශ්‍ය බව පවසමින් කියන වචනයකි.",
            "bn": "টিফিনের সময় একসাথে খেলার পর, আবার খেলার ইচ্ছা প্রকাশ করতে ব্যবহৃত হয়।",
            "pt": "Dito depois de brincarem juntos, transmitindo o sentimento de que quer brincar de novo.",
            "es": "Se dice después de jugar juntos durante el recreo, para mostrar que quieres volver a jugar.",
            "fr": "Se dit après avoir joué ensemble pendant la récréation, pour montrer que l'on veut rejouer.",
            "ru": "Говорят после совместной игры на перемене, выражая желание поиграть еще.",
            "uk": "Кажуть після спільної гри на перерві, висловлюючи бажання пограти ще."
        },
        translations: {
            "en": "It was fun.", "zh-CN": "很开心。", "zh-TW": "很開心。", "ko": "재밌었어.", "vi": "Rất vui ạ.", "tl": "Naging masaya po.", "id": "Menyenangkan sekali.", "th": "สนุกมากเลย", "my": "ပျော်စရာကောင်းတယ်။", "km": "សប្បាយណាស់។", "ne": "रमाइलो भयो।", "mn": "Хөгжилтэй байлаа.", "si": "විනෝදජනකයි.", "bn": "খুব মজা হয়েছে।", "pt": "Foi divertido.", "es": "Fue divertido.", "fr": "C'était amusant.", "ru": "Было весело.", "uk": "Було весело."
        }
    }
];