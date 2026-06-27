// ==========================================
// Japeak 教材データベース（登下校・挨拶）- 19言語指定順対応版
// ==========================================
const japeakCommutingData = [
    {
        id: "japeak_com_001", audio: "audio/japeak_com_001.mp3", title: "丁寧な朝の挨拶 (Polite Good Morning)", category: "commuting",
        japanese: "おはようございます。", target_speech: "おはようございます",
        ruby: { hiragana: "おはようございます。", romaji: "Ohayou gozaimasu." },
        context: {
            "ja": "先生や先輩、近所の人に朝会った時に使う、丁寧な挨拶です。元気な声で言いましょう。",
            "en": "A polite greeting used when meeting teachers, seniors, or neighbors in the morning. Say it cheerfully.",
            "zh-CN": "早上遇到老师、前辈或邻居时使用的礼貌问候。请用精神饱满的声音说。",
            "zh-TW": "早上遇到老師、前輩或鄰居時使用的禮貌問候。請用精神飽滿的聲音說。",
            "ko": "선생님이나 선배, 이웃을 아침에 만났을 때 사용하는 정중한 인사입니다. 활기찬 목소리로 말해봅시다.",
            "vi": "Lời chào lịch sự dùng khi gặp giáo viên, đàn anh hoặc hàng xóm vào buổi sáng. Hãy nói thật tươi tắn nhé.",
            "tl": "Isang magalang na pagbati sa umaga para sa mga guro, senior, o kapitbahay. Sabihin ito nang masaya.",
            "id": "Salam sopan yang digunakan saat bertemu guru, senior, atau tetangga di pagi hari. Ucapkan dengan semangat.",
            "th": "คำทักทายสุภาพที่ใช้เมื่อพบครู รุ่นพี่ หรือเพื่อนบ้านในตอนเช้า พูดด้วยน้ำเสียงร่าเริง",
            "my": "ဆရာ၊ စီနီယာများ သို့မဟုတ် အိမ်နီးချင်းများနှင့် နံနက်ပိုင်းတွင် တွေ့ဆုံရာ၌ သုံးသော ယဉ်ကျေးသည့် နှုတ်ခွန်းဆက်စကားဖြစ်သည်။ တက်ကြွစွာပြောပါ။",
            "km": "ការស្វាគមន៍ដោយគួរសមដែលប្រើនៅពេលជួបលោកគ្រូអ្នកគ្រូ សិស្សច្បង ឬអ្នកជិតខាងនៅពេលព្រឹក។ និយាយដោយរីករាយ។",
            "ne": "बिहान शिक्षक, सिनियर वा छिमेकीलाई भेट्दा प्रयोग गरिने विनम्र अभिवादन। हँसिलो अनुहारले भन्नुहोस्।",
            "mn": "Өглөө багш, ахмад хүн эсвэл хөрштэйгөө тааралдахдаа ашигладаг хүндэтгэлийн мэндчилгээ. Цоглог дуугаар хэлээрэй.",
            "si": "උදෑසන ගුරුවරුන්, ජ්‍යෙෂ්ඨයින් හෝ අසල්වැසියන් මුණගැසුණු විට භාවිතා කරන ආචාරශීලී සුබපැතුමක්. සතුටින් පවසන්න.",
            "bn": "সকালে শিক্ষক, সিনিয়র বা প্রতিবেশীদের সাথে দেখা হলে ব্যবহৃত একটি নম্র অভিবাদন। আনন্দের সাথে বলুন।",
            "pt": "Uma saudação educada usada ao encontrar professores, veteranos ou vizinhos de manhã. Diga com alegria.",
            "es": "Un saludo educado que se usa al encontrar a profesores, compañeros mayores o vecinos por la mañana.",
            "fr": "Salutation polie utilisée le matin pour s'adresser aux professeurs, aux aînés ou aux voisins. À dire joyeusement.",
            "ru": "Вежливое приветствие при встрече с учителями, старшими или соседями по утрам. Говорите бодро.",
            "uk": "Ввічливе привітання, яке використовується під час зустрічі з вчителями, старшими або сусідами вранці. Кажіть це бадьоро."
        },
        translations: {
            "en": "Good morning. (Polite)", "zh-CN": "早上好。（礼貌）", "zh-TW": "早安。（禮貌）", "ko": "좋은 아침입니다. (정중)", "vi": "Chào buổi sáng. (Lịch sự)", "tl": "Magandang umaga po.", "id": "Selamat pagi. (Sopan)", "th": "อรุณสวัสดิ์ (สุภาพ)", "my": "မင်္ဂလာနံနက်ခင်းပါ (ယဉ်ကျေးသော)", "km": "អរុណសួស្តី (គួរសម)", "ne": "शुभ प्रभात। (विनम्र)", "mn": "Өглөөний мэнд. (Хүндэтгэлийн)", "si": "සුබ උදෑසනක්. (Polite)", "bn": "শুভ সকাল। (নম্র)", "pt": "Bom dia. (Educado)", "es": "Buenos días. (Educado)", "fr": "Bonjour. (Poli)", "ru": "Доброе утро. (Вежливо)", "uk": "Доброго ранку. (Ввічливо)"
        }
    },
    {
        id: "japeak_com_002", audio: "audio/japeak_com_002.mp3", title: "友達への朝の挨拶 (Casual Good Morning)", category: "commuting",
        japanese: "おはよう。", target_speech: "おはよう",
        ruby: { hiragana: "おはよう。", romaji: "Ohayou." },
        context: {
            "ja": "仲の良い友達やクラスメイトに朝会った時に使う、カジュアルな挨拶です。",
            "en": "A casual greeting used when meeting close friends or classmates in the morning.",
            "zh-CN": "早上遇到好朋友或同班同学时使用的随和问候语。",
            "zh-TW": "早上遇到好朋友或同班同學時使用的隨和問候語。",
            "ko": "친한 친구나 반 친구를 아침에 만났을 때 사용하는 가벼운 인사입니다.",
            "vi": "Lời chào thân mật dùng khi gặp bạn bè thân thiết hoặc bạn cùng lớp vào buổi sáng.",
            "tl": "Isang kaswal na pagbati sa umaga para sa mga malalapit na kaibigan o kaklase.",
            "id": "Salam santai yang digunakan saat bertemu teman dekat atau teman sekelas di pagi hari.",
            "th": "คำทักทายแบบเป็นกันเองที่ใช้เมื่อพบเพื่อนสนิทหรือเพื่อนร่วมชั้นในตอนเช้า",
            "my": "ရင်းနှီးသော သူငယ်ချင်းများ သို့မဟုတ် အတန်းဖော်များနှင့် နံနက်ပိုင်းတွင် တွေ့ဆုံရာ၌ သုံးသော ပေါ့ပေါ့ပါးပါး နှုတ်ခွန်းဆက်စကားဖြစ်သည်။",
            "km": "ការស្វាគមន៍ក្រៅផ្លូវការដែលប្រើនៅពេលជួបមិត្តភក្តិជិតស្និទ្ធ ឬមិត្តរួមថ្នាក់នៅពេលព្រឹក។",
            "ne": "बिहान मिल्ने साथी वा सहपाठीलाई भेट्दा प्रयोग गरिने अनौपचारिक अभिवादन।",
            "mn": "Өглөө дотны найз эсвэл ангийнхантайгаа тааралдахдаа ашигладаг энгийн мэндчилгээ.",
            "si": "සමීප මිතුරන් හෝ පන්තියේ මිතුරන් උදෑසන මුණගැසුණු විට භාවිතා කරන සාමාන්‍ය සුබපැතුමක්.",
            "bn": "সকালে ঘনিষ্ঠ বন্ধু বা সহপাঠীদের সাথে দেখা হলে ব্যবহৃত একটি সাধারণ অভিবাদন।",
            "pt": "Uma saudação casual usada ao encontrar amigos próximos ou colegas de classe de manhã.",
            "es": "Un saludo informal que se usa al encontrar a amigos cercanos o compañeros de clase por la mañana.",
            "fr": "Salutation décontractée utilisée le matin avec des amis proches ou des camarades de classe.",
            "ru": "Повседневное приветствие при встрече с близкими друзьями или одноклассниками по утрам.",
            "uk": "Неформальне привітання, яке використовується під час зустрічі з близькими друзями або однокласниками вранці."
        },
        translations: {
            "en": "Good morning. (Casual)", "zh-CN": "早啊。", "zh-TW": "早啊。", "ko": "안녕. (아침)", "vi": "Chào buổi sáng. (Thân mật)", "tl": "Magandang umaga.", "id": "Pagi.", "th": "อรุณสวัสดิ์ (เป็นกันเอง)", "my": "နံနက်ခင်းပါ (ပေါ့ပေါ့ပါးပါး)", "km": "អរុណសួស្តី (ក្រៅផ្លូវការ)", "ne": "शुभ प्रभात। (अनौपचारिक)", "mn": "Өглөөний мэнд. (Энгийн)", "si": "සුබ උදෑසනක්. (Casual)", "bn": "শুভ সকাল। (সাধারণ)", "pt": "Bom dia. (Casual)", "es": "Buenos días. (Informal)", "fr": "Salut. (Matin)", "ru": "С добрым утром. (Неформально)", "uk": "Доброго ранку. (Неформально)"
        }
    },
    {
        id: "japeak_com_003", audio: "audio/japeak_com_003.mp3", title: "丁寧な別れの挨拶 (Polite Goodbye)", category: "commuting",
        japanese: "さようなら。", target_speech: "さようなら",
        ruby: { hiragana: "さようなら。", romaji: "Sayounara." },
        context: {
            "ja": "先生や地域の人に、学校の帰り道で別れる時に使う丁寧な挨拶です。",
            "en": "A polite greeting used when parting ways with teachers or community members on the way home from school.",
            "zh-CN": "放学回家的路上，与老师或社区居民道别时使用的礼貌问候语。",
            "zh-TW": "放學回家的路上，與老師或社區居民道別時使用的禮貌問候語。",
            "ko": "하굣길에 선생님이나 지역 주민과 헤어질 때 사용하는 정중한 인사입니다.",
            "vi": "Lời chào lịch sự dùng khi tạm biệt giáo viên hoặc người dân trong khu vực trên đường đi học về.",
            "tl": "Isang magalang na pagbati kapag nagpapaalam sa guro o mga tao sa komunidad pauwi galing paaralan.",
            "id": "Salam sopan yang digunakan saat berpisah dengan guru atau warga sekitar dalam perjalanan pulang dari sekolah.",
            "th": "คำกล่าวลาสุภาพที่ใช้เมื่อแยกย้ายกับครูหรือคนในชุมชนระหว่างทางกลับบ้าน",
            "my": "ကျောင်းဆင်း၍ အိမ်အပြန်လမ်းတွင် ဆရာ၊ ဆရာမများ သို့မဟုတ် ရပ်ကွက်လူကြီးများနှင့် လမ်းခွဲရာ၌ သုံးသော ယဉ်ကျေးသည့် နှုတ်ဆက်စကားဖြစ်သည်။",
            "km": "ការស្វាគមន៍ដោយគួរសមដែលប្រើនៅពេលបែកគ្នាជាមួយលោកគ្រូអ្នកគ្រូ ឬអ្នកភូមិនៅតាមផ្លូវត្រឡប់ទៅផ្ទះវិញ។",
            "ne": "विद्यालयबाट घर फर्कने बाटोमा शिक्षक वा स्थानीय मानिसहरूसँग बिदा हुँदा प्रयोग गरिने विनम्र अभिवादन।",
            "mn": "Сургуулиас тарах замд багш эсвэл нутгийн иргэдтэй салах ёс гүйцэтгэхдээ ашигладаг хүндэтгэлийн мэндчилгээ.",
            "si": "පාසල නිම වී ගෙදර යන විට ගුරුවරුන්ගෙන් හෝ ප්‍රදේශවාසීන්ගෙන් සමුගන්නා විට භාවිතා කරන ආචාරශීලී සුබපැතුමක්.",
            "bn": "স্কুল থেকে বাড়ি ফেরার পথে শিক্ষক বা স্থানীয়দের কাছ থেকে বিদায় নেওয়ার সময় ব্যবহৃত একটি নম্র অভিবাদন।",
            "pt": "Uma saudação educada usada ao se despedir de professores ou membros da comunidade no caminho de casa.",
            "es": "Un saludo educado que se usa al despedirse de profesores o miembros de la comunidad camino a casa.",
            "fr": "Salutation polie utilisée pour dire au revoir aux professeurs ou aux membres de la communauté sur le chemin du retour.",
            "ru": "Вежливое прощание с учителями или местными жителями по пути домой из школы.",
            "uk": "Ввічливе прощання з вчителями або місцевими жителями по дорозі додому зі школи."
        },
        translations: {
            "en": "Goodbye.", "zh-CN": "再见。", "zh-TW": "再見。", "ko": "안녕히 계세요.", "vi": "Tạm biệt.", "tl": "Paalam po.", "id": "Selamat tinggal.", "th": "ลาก่อน", "my": "နှုတ်ဆက်ပါတယ်", "km": "លាហើយ", "ne": "बिदा हौं (नमस्कार)।", "mn": "Баяртай.", "si": "ආයුබෝවන්.", "bn": "বিদায়।", "pt": "Adeus. / Tchau.", "es": "Adiós.", "fr": "Au revoir.", "ru": "До свидания.", "uk": "До побачення."
        }
    },
    {
        id: "japeak_com_004", audio: "audio/japeak_com_004.mp3", title: "友達との別れ (See You Tomorrow)", category: "commuting",
        japanese: "また明日。", target_speech: "またあした",
        ruby: { hiragana: "また<ruby>明日<rt>あした</rt></ruby>。", romaji: "Mata ashita." },
        context: {
            "ja": "友達と学校の帰り道で別れる時に使う、「明日も学校で会おうね」という意味の挨拶です。",
            "en": "A greeting used when parting ways with friends on the way home, meaning 'Let's meet again tomorrow at school.'",
            "zh-CN": "放学回家路上与朋友道别时使用的用语，包含“明天学校见”的意思。",
            "zh-TW": "放學回家路上與朋友道別時使用的用語，包含「明天學校見」的意思。",
            "ko": "하굣길에 친구와 헤어질 때 사용하는 '내일 또 학교에서 보자'는 의미의 인사입니다.",
            "vi": "Lời chào khi tạm biệt bạn bè trên đường về, mang ý nghĩa 'Ngày mai lại gặp nhau ở trường nhé.'",
            "tl": "Pagbati kapag naghihiwalay na kayo ng kaibigan pauwi, ibig sabihin ay 'Magkita tayo bukas sa paaralan.'",
            "id": "Salam saat berpisah dengan teman di jalan pulang, yang berarti 'Sampai jumpa besok di sekolah'.",
            "th": "คำกล่าวลาเพื่อนระหว่างทางกลับบ้าน มีความหมายว่า 'พรุ่งนี้เจอกันใหม่ที่โรงเรียนนะ'",
            "my": "အိမ်အပြန်လမ်းတွင် သူငယ်ချင်းများနှင့် လမ်းခွဲရာ၌ 'မနက်ဖြန် ကျောင်းမှာ ပြန်တွေ့ကြမယ်' ဟူသော အဓိပ္ပာယ်ဖြင့် သုံးသော စကားဖြစ်သည်။",
            "km": "ការស្វាគមន៍នៅពេលបែកគ្នាជាមួយមិត្តភក្តិនៅតាមផ្លូវត្រឡប់ទៅផ្ទះវិញ ដែលមានន័យថា 'ជួបគ្នានៅសាលាថ្ងៃស្អែក'។",
            "ne": "स्कुलबाट फर्कंदा साथीसँग छुट्टिँदा 'भोलि स्कुलमा भेटौंला' भन्ने अर्थमा प्रयोग गरिने अभिवादन।",
            "mn": "Гэр рүүгээ харих замд найзуудтайгаа салахдаа 'Маргааш сургууль дээр уулзъя' гэсэн утгаар хэлдэг мэндчилгээ.",
            "si": "පාසල නිම වී ගෙදර යන අතරමගදී මිතුරන්ගෙන් සමුගන්නා විට භාවිතා කරන සුබපැතුමක්, 'හෙටත් පාසලේදී හමුවෙමු' යන අදහස ඇත.",
            "bn": "স্কুল থেকে বাড়ি ফেরার পথে বন্ধুদের থেকে বিদায় নেওয়ার সময় ব্যবহৃত একটি অভিবাদন, যার অর্থ 'আগামীকাল স্কুলে দেখা হবে'।",
            "pt": "Uma saudação usada ao se despedir de amigos a caminho de casa, significando 'Vamos nos ver amanhã na escola.'",
            "es": "Un saludo que se usa al despedirse de amigos en el camino a casa, que significa 'Nos vemos mañana en la escuela'.",
            "fr": "Salutation utilisée pour se séparer d'amis sur le chemin du retour, signifiant « on se voit demain à l'école ».",
            "ru": "Приветствие при прощании с друзьями по дороге домой, означающее «увидимся завтра в школе».",
            "uk": "Привітання при прощанні з друзями по дорозі додому, що означає «побачимося завтра в школі»."
        },
        translations: {
            "en": "See you tomorrow.", "zh-CN": "明天见。", "zh-TW": "明天見。", "ko": "내일 봐.", "vi": "Hẹn gặp lại vào ngày mai.", "tl": "Bukas ulit. / Hanggang bukas.", "id": "Sampai jumpa besok.", "th": "แล้วเจอกันพรุ่งนี้", "my": "မနက်ဖြန်တွေ့မယ်", "km": "ជួបគ្នាថ្ងៃស្អែក", "ne": "भोलि भेटौंला।", "mn": "Маргааш уулзъя.", "si": "හෙට හමුවෙමු.", "bn": "আগামীকাল দেখা হবে।", "pt": "Até amanhã.", "es": "Hasta mañana.", "fr": "À demain.", "ru": "До завтра.", "uk": "Побачимося завтра."
        }
    },
    {
        id: "japeak_com_005", audio: "audio/japeak_com_005.mp3", title: "一緒に帰る (Let's Go Home Together)", category: "commuting",
        japanese: "一緒に帰ろう。", target_speech: "いっしょにかえろう",
        ruby: { hiragana: "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ろう。", romaji: "Issho ni kaerou." },
        context: {
            "ja": "学校が終わった後、友達を誘って同じ道を帰りたい時に使います。",
            "en": "Used to invite a friend to walk home together after school.",
            "zh-CN": "放学后，邀请朋友一起顺路回家时使用。",
            "zh-TW": "放學後，邀請朋友一起順路回家時使用。",
            "ko": "학교가 끝난 후, 친구에게 같이 집에 가자고 권유할 때 사용합니다.",
            "vi": "Dùng để rủ bạn bè đi cùng đường về nhà sau khi tan học.",
            "tl": "Ginagamit para ayayain ang kaibigan na sabay kayong umuwi pagkatapos ng klase.",
            "id": "Digunakan untuk mengajak teman pulang bersama setelah sekolah usai.",
            "th": "ใช้เมื่อต้องการชวนเพื่อนกลับบ้านทางเดียวกันหลังเลิกเรียน",
            "my": "ကျောင်းဆင်းပြီးနောက် သူငယ်ချင်းကို အတူတူ အိမ်ပြန်ရန် ခေါ်ရာတွင် သုံးသည်။",
            "km": "ប្រើដើម្បីបបួលមិត្តភក្តិដើរទៅផ្ទះជាមួយគ្នាបន្ទាប់ពីចេញពីរៀន។",
            "ne": "स्कुल सकिएपछि साथीलाई सँगै घर जान बोलाउन प्रयोग गरिन्छ।",
            "mn": "Хичээл тарсны дараа найзыгаа хамт харихыг урих үед ашиглана.",
            "si": "පාසල නිම වූ පසු මිතුරෙකුට එකට ගෙදර යාමට ආරාධනා කිරීමට භාවිතා කරයි.",
            "bn": "স্কুল ছুটির পর বন্ধুকে একসাথে বাড়ি যাওয়ার জন্য আমন্ত্রণ জানাতে ব্যবহৃত হয়।",
            "pt": "Usado para convidar um amigo para irem juntos para casa depois da escola.",
            "es": "Se usa para invitar a un amigo a caminar juntos a casa después de la escuela.",
            "fr": "Utilisé pour inviter un ami à rentrer ensemble après l'école.",
            "ru": "Используется, чтобы предложить другу пойти домой вместе после уроков.",
            "uk": "Використовується, щоб запропонувати другу піти додому разом після школи."
        },
        translations: {
            "en": "Let's go home together.", "zh-CN": "我们一起回家吧。", "zh-TW": "我們一起回家吧。", "ko": "같이 가자.", "vi": "Cùng về nhé.", "tl": "Sabay na tayong umuwi.", "id": "Ayo pulang bersama.", "th": "กลับบ้านด้วยกันเถอะ", "my": "အတူတူပြန်ကြရအောင်", "km": "តោះទៅផ្ទះជាមួយគ្នា", "ne": "सँगै घर जाऔं।", "mn": "Хамтдаа харья.", "si": "අපි එකට ගෙදර යමු.", "bn": "চলো একসাথে বাড়ি যাই।", "pt": "Vamos para casa juntos.", "es": "Vamos a casa juntos.", "fr": "Rentrons ensemble.", "ru": "Пойдем домой вместе.", "uk": "Ходімо додому разом."
        }
    },
    {
        id: "japeak_com_006", audio: "audio/japeak_com_006.mp3", title: "友達を待たせる (Wait a Minute)", category: "commuting",
        japanese: "ちょっと待って。", target_speech: "ちょっとまって",
        ruby: { hiragana: "ちょっと<ruby>待<rt>ま</rt></ruby>って。", romaji: "Chotto matte." },
        context: {
            "ja": "帰る準備をしている時や、靴を履いている時に、友達に少し待ってほしいとお願いします。",
            "en": "Used to ask a friend to wait a moment while you are getting ready to leave or putting on your shoes.",
            "zh-CN": "正在收拾书包或穿鞋时，请求朋友稍等一下的用语。",
            "zh-TW": "正在收拾書包或穿鞋時，請求朋友稍等一下的用語。",
            "ko": "집에 갈 준비를 하거나 신발을 신을 때, 친구에게 잠시 기다려달라고 부탁할 때 사용합니다.",
            "vi": "Dùng để nhờ bạn đợi một chút khi bạn đang chuẩn bị đồ hoặc mang giày.",
            "tl": "Ginagamit para pakiusapan ang kaibigan na maghintay sandali habang ikaw ay naghahanda o nagsusuot ng sapatos.",
            "id": "Digunakan untuk meminta teman menunggu sebentar saat Anda sedang bersiap pulang atau memakai sepatu.",
            "th": "ใช้ขอให้เพื่อนรอสักครู่ขณะกำลังเตรียมตัวกลับหรือใส่รองเท้า",
            "my": "အိမ်ပြန်ရန် ပြင်ဆင်နေချိန် သို့မဟုတ် ဖိနပ်စီးနေချိန်တွင် သူငယ်ချင်းကို ခဏစောင့်ပေးရန် တောင်းဆိုရာ၌ သုံးသည်။",
            "km": "ប្រើដើម្បីសុំឲ្យមិត្តភក្តិរង់ចាំបន្តិចនៅពេលអ្នកកំពុងរៀបចំខ្លួនត្រឡប់ទៅផ្ទះ ឬពាក់ស្បែកជើង។",
            "ne": "घर जान झोला मिलाउँदा वा जुत्ता लगाउँदा साथीलाई एकछिन पर्खन अनुरोध गर्न प्रयोग गरिन्छ।",
            "mn": "Харих бэлтгэлээ хийх, гутлаа өмсөх үед найзаасаа түр хүлээхийг гуйх үед хэрэглэнэ.",
            "si": "ගෙදර යාමට සූදානම් වන විට හෝ සපත්තු දමන විට මිතුරෙකුට ටිකක් රැඳී සිටින ලෙස ඉල්ලා සිටීමට භාවිතා කරයි.",
            "bn": "বাড়ি যাওয়ার প্রস্তুতি নেওয়ার সময় বা জুতো পরার সময় বন্ধুকে একটু অপেক্ষা করতে বলার জন্য ব্যবহৃত হয়।",
            "pt": "Usado para pedir a um amigo que espere um momento enquanto você se arruma ou calça os sapatos.",
            "es": "Se usa para pedirle a un amigo que espere un momento mientras te preparas para irte o te pones los zapatos.",
            "fr": "Utilisé pour demander à un ami d'attendre un instant pendant que l'on se prépare ou qu'on met ses chaussures.",
            "ru": "Используется, чтобы попросить друга подождать, пока вы собираетесь или надеваете обувь.",
            "uk": "Використовується, щоб попросити друга почекати, поки ви збираєтеся додому або взуваєтеся."
        },
        translations: {
            "en": "Wait a minute.", "zh-CN": "等一下。", "zh-TW": "等一下。", "ko": "잠깐만 기다려.", "vi": "Đợi một chút.", "tl": "Teka lang. / Sandali lang.", "id": "Tunggu sebentar.", "th": "รอเดี๋ยวนะ", "my": "ခဏစောင့်ပါ", "km": "រង់ចាំបន្តិច", "ne": "एकछिन पख है।", "mn": "Түр хүлээгээрэй.", "si": "ටිකක් ඉන්න.", "bn": "একটু অপেক্ষা করো।", "pt": "Espere um minuto.", "es": "Espera un minuto.", "fr": "Attends une minute.", "ru": "Подожди немного.", "uk": "Зачекай хвилинку."
        }
    },
    {
        id: "japeak_com_007", audio: "audio/japeak_com_007.mp3", title: "安全を願う (Take Care)", category: "commuting",
        japanese: "気をつけてね。", target_speech: "きをつけてね",
        ruby: { hiragana: "<ruby>気<rt>き</rt></ruby>をつけてね。", romaji: "Ki o tsukete ne." },
        context: {
            "ja": "友達と別れる時に、交通事故などに遭わないように安全を願って言う優しい言葉です。",
            "en": "A kind phrase said when parting with a friend to wish them a safe trip home, free from accidents.",
            "zh-CN": "和朋友分别时，祈愿对方路上安全、不要发生交通事故的贴心话语。",
            "zh-TW": "和朋友分別時，祈願對方路上安全、不要發生交通事故的貼心話語。",
            "ko": "친구와 헤어질 때, 교통사고 등이 나지 않도록 안전을 바라며 하는 다정한 말입니다.",
            "vi": "Một lời chúc tốt lành khi chia tay bạn bè, mong họ đi đường an toàn, không gặp tai nạn.",
            "tl": "Isang mabait na parirala kapag naghihiwalay ng kaibigan, nag-iingat na sana ay makauwi sila nang ligtas.",
            "id": "Kalimat perhatian yang diucapkan saat berpisah dengan teman, mendoakan agar mereka selamat di jalan.",
            "th": "คำพูดแสดงความห่วงใยเมื่อแยกย้ายกับเพื่อน เพื่อขอให้เดินทางกลับบ้านอย่างปลอดภัย ไม่เกิดอุบัติเหตุ",
            "my": "သူငယ်ချင်းနှင့် လမ်းခွဲချိန်တွင် ယာဉ်တိုက်မှုစသည်တို့ မဖြစ်စေဘဲ ဘေးကင်းစွာ အိမ်ပြန်ရောက်စေရန် ဆုတောင်းပေးသော ယဉ်ကျေးသည့် စကားဖြစ်သည်။",
            "km": "ពាក្យសម្តីពិរោះៗដែលនិយាយនៅពេលបែកគ្នាជាមួយមិត្តភក្តិ ដើម្បីជូនពរពួកគេឲ្យធ្វើដំណើរទៅផ្ទះដោយសុវត្ថិភាព ជៀសផុតពីគ្រោះថ្នាក់ចរាចរណ៍។",
            "ne": "साथीसँग छुट्टिँदा बाटोमा दुर्घटना नहोस् र सुरक्षित रूपमा घर पुगोस् भनेर भनिने मायालु शब्द।",
            "mn": "Найзаасаа салах үед зам тээврийн осолд өртөхгүй, аюулгүй харихыг хүсэж хэлдэг эелдэг үг.",
            "si": "මිතුරෙකුගෙන් සමුගන්නා විට රථවාහන අනතුරු ආදියෙන් තොරව ආරක්ෂිතව ගෙදර යාමට ප්‍රාර්ථනා කරන කරුණාවන්ත වචනයකි.",
            "bn": "বন্ধুর কাছ থেকে বিদায় নেওয়ার সময়, ট্র্যাফিক দুর্ঘটনা এড়িয়ে নিরাপদে বাড়ি ফেরার কামনা করে বলা একটি সদয় কথা।",
            "pt": "Uma frase gentil dita ao se despedir de um amigo para desejar-lhe um caminho seguro para casa.",
            "es": "Una frase amable que se dice al despedirse de un amigo para desearle un viaje seguro a casa.",
            "fr": "Une phrase gentille dite au moment de se séparer d'un ami pour lui souhaiter un retour en toute sécurité, sans accident.",
            "ru": "Доброе пожелание при прощании с другом, чтобы он благополучно добрался домой без происшествий.",
            "uk": "Добре побажання при прощанні з другом, щоб він безпечно дістався додому, уникаючи ДТП."
        },
        translations: {
            "en": "Take care. / Be careful.", "zh-CN": "路上小心。", "zh-TW": "路上小心。", "ko": "조심해서 가.", "vi": "Đi đường cẩn thận nhé.", "tl": "Mag-ingat ka.", "id": "Hati-hati di jalan.", "th": "เดินทางปลอดภัยนะ", "my": "ဂရုစိုက်သွားပါ", "km": "ប្រយ័ត្នប្រយែង", "ne": "बाटोमा होस गरेर जानु है।", "mn": "Болгоомжтой яваарай.", "si": "පරිස්සමෙන්.", "bn": "সাবধানে থেকো।", "pt": "Tome cuidado. / Vá com cuidado.", "es": "Cuídate. / Ten cuidado.", "fr": "Fais attention.", "ru": "Береги себя. / Осторожнее.", "uk": "Бережи себе."
        }
    },
    {
        id: "japeak_com_008", audio: "audio/japeak_com_008.mp3", title: "先に帰る (Leaving First)", category: "commuting",
        japanese: "先に帰るね。", target_speech: "さきにかえるね",
        ruby: { hiragana: "<ruby>先<rt>さき</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>るね。", romaji: "Saki ni kaeru ne." },
        context: {
            "ja": "友達が掃除や部活でまだ残っているけれど、自分は用事があって先に学校を出る時に使います。",
            "en": "Used when you need to leave school earlier than your friends who are still doing chores or club activities.",
            "zh-CN": "朋友还在打扫卫生或参加社团，自己因为有事要先离开学校时使用。",
            "zh-TW": "朋友還在打掃衛生或參加社團，自己因為有事要先離開學校時使用。",
            "ko": "친구가 청소나 동아리 활동으로 아직 남아있지만, 나는 볼일이 있어 먼저 학교를 나설 때 사용합니다.",
            "vi": "Dùng khi bạn có việc phải về trước, trong khi bạn bè vẫn còn ở lại dọn dẹp hoặc sinh hoạt câu lạc bộ.",
            "tl": "Ginagamit kapag kailangan mong maunang umuwi habang ang mga kaibigan mo ay may ginagawa pa.",
            "id": "Digunakan saat Anda harus pulang lebih dulu sementara teman-teman masih piket atau ada kegiatan klub.",
            "th": "ใช้เมื่อเพื่อนยังอยู่ทำความสะอาดหรือกิจกรรมชมรม แต่ตัวเองมีธุระต้องกลับก่อน",
            "my": "သူငယ်ချင်းများ သန့်ရှင်းရေးလုပ်ရန် သို့မဟုတ် ကလပ်လုပ်ငန်းများအတွက် ကျန်နေခဲ့သော်လည်း မိမိက ကိစ္စရှိ၍ ကျောင်းမှ အရင်ပြန်ထွက်ချိန်တွင် သုံးသည်။",
            "km": "ប្រើនៅពេលដែលមិត្តភក្តិកំពុងសម្អាត ឬនៅក្លឹបនៅឡើយ ប៉ុន្តែអ្នកមានធុរៈត្រូវចាកចេញពីសាលាមុន។",
            "ne": "साथीहरू सरसफाइ वा क्लबमा बसिरहेको बेला आफू काम परेर अघि नै घर फर्कंदा प्रयोग गरिन्छ।",
            "mn": "Найзууд маань цэвэрлэгээ болон дугуйлантай учраас үлдсэн ч өөрөө ажилтай болохоор түрүүлж сургуулиас гарах үед ашиглана.",
            "si": "මිතුරන් පිරිසිදු කිරීම් හෝ සමාජ ශාලා ක්‍රියාකාරකම් සඳහා තවමත් රැඳී සිටියත්, ඔබට වැඩක් ඇති නිසා කලින් පාසලෙන් පිටවන විට භාවිතා වේ.",
            "bn": "বন্ধুরা পরিষ্কার-পরিচ্ছন্নতা বা ক্লাবের কার্যকলাপে থাকা সত্ত্বেও, আপনার কাজ থাকায় আগে স্কুল থেকে চলে যাওয়ার সময় ব্যবহৃত হয়।",
            "pt": "Usado quando você precisa sair da escola antes dos seus amigos que ainda estão limpando ou no clube.",
            "es": "Se usa cuando necesitas salir de la escuela antes que tus amigos que todavía están limpiando o en el club.",
            "fr": "Utilisé lorsque l'on doit quitter l'école avant ses amis qui sont encore occupés au ménage ou aux activités de club.",
            "ru": "Используется, когда друзья еще остаются на уборку или кружки, а вам нужно уйти из школы раньше по делам.",
            "uk": "Використовується, коли друзі ще залишаються на прибирання або гуртки, а вам потрібно піти зі школи раніше у справах."
        },
        translations: {
            "en": "I'm going home first.", "zh-CN": "我先回去了。", "zh-TW": "我先回去了。", "ko": "먼저 갈게.", "vi": "Mình về trước nhé.", "tl": "Mauuna na akong umuwi.", "id": "Aku pulang duluan ya.", "th": "กลับก่อนนะ", "my": "အရင်ပြန်နှင့်မယ်နော်", "km": "ខ្ញុំទៅផ្ទះមុនហើយ", "ne": "म अघि नै घर जान्छु है।", "mn": "Би түрүүлээд харьлаа шүү.", "si": "මම කලින් ගෙදර යනවා.", "bn": "আমি আগে বাড়ি যাচ্ছি।", "pt": "Vou indo para casa primeiro.", "es": "Me voy a casa primero.", "fr": "Je rentre d'abord.", "ru": "Я пойду домой первым.", "uk": "Я піду додому першим."
        }
    },
    {
        id: "japeak_com_009", audio: "audio/japeak_com_009.mp3", title: "寄り道をしない (Going Straight Home)", category: "commuting",
        japanese: "まっすぐ帰ります。", target_speech: "まっすぐかえります",
        ruby: { hiragana: "まっすぐ<ruby>帰<rt>かえ</rt></ruby>ります。", romaji: "Massugu kaerimasu." },
        context: {
            "ja": "学校の帰りにどこかのお店や公園に寄り道をせず、直接家に帰ることを先生に約束する言葉です。",
            "en": "Used to promise a teacher that you will go straight home without stopping at any shops or parks.",
            "zh-CN": "向老师保证放学后不随便去商店或公园，直接回家。",
            "zh-TW": "向老師保證放學後不隨便去商店或公園，直接回家。",
            "ko": "하굣길에 가게나 공원에 들르지 않고 곧장 집으로 가겠다고 선생님께 약속하는 말입니다.",
            "vi": "Dùng để hứa với giáo viên rằng bạn sẽ về thẳng nhà mà không la cà ở quán xá hay công viên.",
            "tl": "Ginagamit upang mangako sa guro na uuwi nang diretso nang hindi dadaan kung saan-saan.",
            "id": "Digunakan untuk berjanji kepada guru bahwa Anda akan langsung pulang tanpa mampir ke tempat lain.",
            "th": "คำสัญญาที่ให้ไว้กับครูว่าจะกลับตรงบ้านโดยไม่แวะร้านค้าหรือสวนสาธารณะ",
            "my": "ကျောင်းအပြန်တွင် ဆိုင်များ သို့မဟုတ် ပန်းခြံများသို့ ဝင်မနေဘဲ အိမ်သို့ တိုက်ရိုက်ပြန်မည်ဟု ဆရာအား ကတိပေးသောစကားဖြစ်သည်။",
            "km": "ពាក្យសន្យាជាមួយលោកគ្រូអ្នកគ្រូថាអ្នកនឹងត្រឡប់ទៅផ្ទះត្រង់ដោយមិនឈប់នៅហាង ឬសួនច្បារណាមួយឡើយ។",
            "ne": "स्कुलबाट फर्कंदा कतै पसल वा पार्कमा नअल्मलिई सीधै घर जान्छु भनेर शिक्षकलाई वाचा गर्दा प्रयोग गरिन्छ।",
            "mn": "Сургуулиас тарах замдаа дэлгүүр юм уу цэцэрлэгт хүрээлэнгээр орохгүйгээр шууд харина гэж багшдаа амлахдаа хэрэглэнэ.",
            "si": "පාසල නිම වී වෙනත් කඩයකට හෝ උද්‍යානයකට නොගොස් කෙළින්ම ගෙදර යන බවට ගුරුවරයාට පොරොන්දු වීමට භාවිතා කරන වචනයකි.",
            "bn": "স্কুল থেকে ফেরার পথে কোনো দোকান বা পার্কে না গিয়ে সোজা বাড়ি যাওয়ার জন্য শিক্ষককে প্রতিশ্রুতি দেওয়ার কথা।",
            "pt": "Usado para prometer a um professor que você irá direto para casa sem parar em lojas ou parques.",
            "es": "Se usa para prometerle a un profesor que irás directo a casa sin detenerte en tiendas o parques.",
            "fr": "Promesse faite à un professeur de rentrer directement chez soi sans s'arrêter dans des magasins ou des parcs.",
            "ru": "Обещание учителю пойти сразу домой, не задерживаясь по пути в магазинах или парках.",
            "uk": "Обіцянка вчителю піти прямо додому, не затримуючись по дорозі в магазинах або парках."
        },
        translations: {
            "en": "I will go straight home.", "zh-CN": "我会直接回家。", "zh-TW": "我會直接回家。", "ko": "곧장 집에 가겠습니다.", "vi": "Em sẽ về thẳng nhà ạ.", "tl": "Uuwi po ako nang diretso.", "id": "Saya akan langsung pulang.", "th": "จะกลับตรงบ้านครับ/ค่ะ", "my": "တိုက်ရိုက်အိမ်ပြန်ပါမည်", "km": "ខ្ញុំនឹងត្រឡប់ទៅផ្ទះត្រង់", "ne": "म सीधै घर जानेछु।", "mn": "Шууд харина.", "si": "මම කෙළින්ම ගෙදර යනවා.", "bn": "আমি সোজা বাড়ি যাব।", "pt": "Vou direto para casa.", "es": "Iré directo a casa.", "fr": "Je vais rentrer directement.", "ru": "Я пойду прямо домой.", "uk": "Я піду прямо додому."
        }
    },
    {
        id: "japeak_com_010", audio: "audio/japeak_com_010.mp3", title: "忘れ物を取りに戻る (Forgot Something)", category: "commuting",
        japanese: "学校に戻ります。", target_speech: "がっこうにもどります",
        ruby: { hiragana: "<ruby>学校<rt>がっこう</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>ります。", romaji: "Gakkou ni modorimasu." },
        context: {
            "ja": "家に帰る途中で学校に忘れ物をしたことに気づき、取りに帰ることを友達に伝えます。",
            "en": "Used to tell a friend that you realized you forgot something at school and are going back to get it.",
            "zh-CN": "在回家的路上发现东西落在学校，告诉朋友自己要返回学校拿。",
            "zh-TW": "在回家的路上發現東西落在學校，告訴朋友自己要返回學校拿。",
            "ko": "집에 가는 길에 학교에 두고 온 물건이 생각나서, 가지러 다시 학교로 돌아가겠다고 친구에게 말할 때 사용합니다.",
            "vi": "Dùng để nói với bạn bè rằng bạn đang trên đường về thì nhớ ra để quên đồ và phải quay lại trường.",
            "tl": "Ginagamit upang sabihin sa kaibigan na babalik ka sa paaralan dahil may nakalimutan ka.",
            "id": "Digunakan untuk memberitahu teman bahwa Anda akan kembali ke sekolah karena ada barang yang tertinggal.",
            "th": "บอกเพื่อนระหว่างทางกลับบ้านว่าลืมของไว้ที่โรงเรียนและกำลังจะกลับไปเอา",
            "my": "အိမ်အပြန်လမ်းတွင် ကျောင်း၌ ပစ္စည်းမေ့ကျန်ခဲ့သည်ကို သတိရ၍ ပြန်ယူရန် ကျောင်းသို့ပြန်သွားမည်ဖြစ်ကြောင်း သူငယ်ချင်းကို ပြောရာတွင် သုံးသည်။",
            "km": "ប្រើដើម្បីប្រាប់មិត្តភក្តិថាអ្នកភ្លេចរបស់នៅសាលា ហើយកំពុងត្រឡប់ទៅយកវាវិញនៅតាមផ្លូវត្រឡប់ទៅផ្ទះ។",
            "ne": "घर फर्कने बाटोमा स्कुलमै सामान बिर्सेको थाहा पाएर लिनको लागि फेरि स्कुलमै फर्कन्छु भनेर साथीलाई भन्दा प्रयोग गरिन्छ।",
            "mn": "Гэр рүүгээ харих замд сургууль дээр юмаа мартсанаа санаж, буцаж очиж авна гэдгээ найздаа хэлэх үед хэрэглэнэ.",
            "si": "ගෙදර යන අතරමගදී පාසලේ යමක් අමතක වී ඇති බව තේරුම් ගෙන එය ගැනීමට ආපසු යන බව මිතුරෙකුට පැවසීමට භාවිතා කරයි.",
            "bn": "বাড়ি ফেরার পথে স্কুলে কিছু ভুলে যাওয়ার কথা মনে পড়লে, তা নিতে ফিরে যাওয়ার কথা বন্ধুকে বলতে ব্যবহৃত হয়।",
            "pt": "Usado para dizer a um amigo que você percebeu que esqueceu algo na escola e vai voltar para buscar.",
            "es": "Se usa para decirle a un amigo que te diste cuenta de que olvidaste algo en la escuela y vas a regresar a buscarlo.",
            "fr": "Utilisé pour dire à un ami sur le chemin du retour qu'on a oublié quelque chose à l'école et qu'on y retourne pour le chercher.",
            "ru": "Используется, чтобы сказать другу по дороге домой, что вы забыли что-то в школе и возвращаетесь, чтобы это забрать.",
            "uk": "Використовується, щоб сказати другу по дорозі додому, що ви забули щось у школі і повертаєтеся, щоб це забрати."
        },
        translations: {
            "en": "I'm going back to school. (To get something)", "zh-CN": "我要返回学校（拿东西）。", "zh-TW": "我要返回學校（拿東西）。", "ko": "학교에 다시 돌아갈게.", "vi": "Mình sẽ quay lại trường.", "tl": "Babalik ako sa paaralan.", "id": "Saya mau kembali ke sekolah.", "th": "จะกลับไปโรงเรียน (ไปเอาของ)", "my": "ကျောင်းကို ပြန်သွားပါမည်", "km": "ខ្ញុំនឹងត្រឡប់ទៅសាលាវិញ", "ne": "म स्कुलमै फर्कन्छु।", "mn": "Сургууль руу буцлаа.", "si": "මම ආපසු පාසලට යනවා.", "bn": "আমি স্কুলে ফিরে যাচ্ছি।", "pt": "Vou voltar para a escola.", "es": "Voy a volver a la escuela.", "fr": "Je retourne à l'école.", "ru": "Я возвращаюсь в школу.", "uk": "Я повертаюся до школи."
        }
    }
];