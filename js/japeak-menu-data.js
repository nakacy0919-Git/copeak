
// ==========================================
// Japeak Menu 完全版：メニュー・生活編・フッター情報モーダル
// ==========================================
let allJapeakData = [];
if (typeof japeakData !== 'undefined') allJapeakData = allJapeakData.concat(japeakData);
if (typeof japeakConversationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConversationData);
if (typeof japeakClassData !== 'undefined') allJapeakData = allJapeakData.concat(japeakClassData);
if (typeof japeakHealthData !== 'undefined') allJapeakData = allJapeakData.concat(japeakHealthData);
if (typeof japeakLunchData !== 'undefined') allJapeakData = allJapeakData.concat(japeakLunchData);
if (typeof japeakBreakData !== 'undefined') allJapeakData = allJapeakData.concat(japeakBreakData);
if (typeof japeakClubsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakClubsData);
if (typeof japeakTeachersData !== 'undefined') allJapeakData = allJapeakData.concat(japeakTeachersData);
if (typeof japeakCommutingData !== 'undefined') allJapeakData = allJapeakData.concat(japeakCommutingData);
if (typeof japeakTroublesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakTroublesData);
if (typeof japeakEventsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakEventsData);
if (typeof japeakOfficeData !== 'undefined') allJapeakData = allJapeakData.concat(japeakOfficeData);
if (typeof japeakParagraphsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakParagraphsData);
if (typeof japeakA1Scene1Data !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1Scene1Data);
if (typeof japeakConvenientShoppingData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConvenientShoppingData);
if (typeof japeakConvenientOrderingData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConvenientOrderingData);
if (typeof japeakConvenientNeighborData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConvenientNeighborData);
if (typeof japeakConvenientVisitHomeData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConvenientVisitHomeData);
if (typeof japeakConvenientQuestionData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConvenientQuestionData);
if (typeof japeakA1BuyThingsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1BuyThingsData);
if (typeof japeakA1GreetingDialogueData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1GreetingDialogueData);
if (typeof japeakA1AskPlacePriceData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1AskPlacePriceData);
if (typeof japeakA1WantToBuyData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1WantToBuyData);
if (typeof japeakA1TellPreferencesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1TellPreferencesData);
if (typeof japeakA1RestaurantData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1RestaurantData);
if (typeof japeakA1DeliveryData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1DeliveryData);
if (typeof japeakA1TrainData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1TrainData);
if (typeof japeakA1AskDirectionsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1AskDirectionsData);
if (typeof japeakA1BankData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1BankData);
if (typeof japeakA1ResidentMannersData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1ResidentMannersData);
if (typeof japeakA1WorkplaceMachinesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA1WorkplaceMachinesData);
if (typeof japeakA2GreetingsBySituationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2GreetingsBySituationData);
if (typeof japeakA2StoreServicesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2StoreServicesData);
if (typeof japeakA2ChooseStoreData !== 'undefined') allJapeakData = allJapeakData.concat(japeakA2ChooseStoreData);

let menuLang = localStorage.getItem('japeakLang') || 'en';
let selectedCategory = null;
window.menuLang = menuLang;
window.japeakCurrentLang = menuLang;

const categoryTranslations = {
    "school_life": {
        "icon": "🎒", "ja_ruby": "がっこうの せいかつ（きほん）",
        "en": "Basic School Life", "pt": "Vida Escolar (Básico)", "zh-CN": "学校生活(基础)", "zh-TW": "學校生活(基礎)", "ko": "학교 생활(기본)", "tl": "Buhay Paaralan", "vi": "Đời sống học đường", "es": "Vida Escolar", "ne": "स्कूल जीवन", "id": "Kehidupan Sekolah", "th": "ชีวิตในโรงเรียน", "my": "ကျောင်းဘဝ", "km": "ជីវិតសាលារៀន", "uk": "Шкільне життя", "ru": "Школьная жизнь", "hi": "स्कूल जीवन", "bn": "স্কুল জীবন", "ur": "اسکول کی زندگی", "ar": "الحياة المدرسية"
    },
    "school_life_conversation": {
        "icon": "🗣️", "ja_ruby": "ともだちとの かいわ",
        "en": "Conversation with Friends", "pt": "Conversa com Amigos", "zh-CN": "与朋友交谈", "zh-TW": "與朋友交談", "ko": "친구와의 대화", "tl": "Pakikipag-usap sa Kaibigan", "vi": "Trò chuyện với bạn bè", "es": "Conversación con amigos", "ne": "साथीहरूसँग कुराकानी", "id": "Percakapan dengan Teman", "th": "คุยกับเพื่อน", "my": "သူငယ်ချင်းများနှင့်စကားပြောခြင်း", "km": "ការសន្ទនាជាមួយមិត្តភក្តិ", "uk": "Розмова з друзями", "ru": "Общение с друзьями", "hi": "दोस्तों के साथ बातचीत", "bn": "বন্ধুদের সাথে কথোপকথন", "ur": "دوستوں کے ساتھ بات چیت", "ar": "محادثة مع الأصدقاء"
    },
    "class_time": {
        "icon": "✏️", "ja_ruby": "じゅぎょうの とき",
        "en": "In Class", "pt": "Na Sala de Aula", "zh-CN": "上课时", "zh-TW": "上課時", "ko": "수업 시간", "tl": "Sa Klase", "vi": "Trong lớp học", "es": "En Clase", "ne": "कक्षामा", "id": "Di Kelas", "th": "ในชั้นเรียน", "my": "အတန်းထဲတွင်", "km": "ក្នុងថ្នាក់រៀន", "uk": "На уроці", "ru": "На уроке", "hi": "कक्षा में", "bn": "ক্লাসে", "ur": "کلاس میں", "ar": "في الصف"
    },
    "health_clinic": {
        "icon": "🏥", "ja_ruby": "ほけんしつ・たいちょうふりょう",
        "en": "Health & Clinic", "pt": "Saúde e Enfermaria", "zh-CN": "保健室・身体不适", "zh-TW": "保健室・身體不適", "ko": "보건실・컨디션 불량", "tl": "Kalusugan at Klinika", "vi": "Sức khỏe & Phòng y tế", "es": "Salud y Enfermería", "ne": "स्वास्थ्य र क्लिनिक", "id": "Kesehatan & UKS", "th": "ห้องพยาบาล", "my": "ကျန်းမာရေးနှင့်ဆေးခန်း", "km": "សុខភាព និងគ្លីនិក", "uk": "Медпункт / Здоров'я", "ru": "Медпункт", "hi": "स्वास्थ्य और क्लिनिक", "bn": "স্বাস্থ্য ও ক্লিনিক", "ur": "صحت اور کلینک", "ar": "الصحة والعيادة"
    },
    "lunch_time": {
        "icon": "🍱", "ja_ruby": "きゅうしょく・おべんとう",
        "en": "Lunch Time", "pt": "Hora do Almoço", "zh-CN": "午餐时间", "zh-TW": "午餐時間", "ko": "급식・도시락", "tl": "Oras ng Tanghalian", "vi": "Giờ ăn trưa", "es": "Hora del Almuerzo", "ne": "खाजाको समय", "id": "Jam Makan Siang", "th": "เวลาอาหารกลางวัน", "my": "နေ့လည်စာစားချိန်", "km": "ម៉ោងអាហារថ្ងៃត្រង់", "uk": "Обід", "ru": "Обед", "hi": "दोपहर का भोजन", "bn": "দুপুরের খাবার", "ur": "دوپہر کے کھانے کا وقت", "ar": "وقت الغداء"
    },
    "break_time": {
        "icon": "⚽", "ja_ruby": "やすみ じかん",
        "en": "Break Time", "pt": "Intervalo", "zh-CN": "休息时间", "zh-TW": "休息時間", "ko": "쉬는 시간", "tl": "Oras ng Pahinga", "vi": "Giờ ra chơi", "es": "Recreo", "ne": "छुट्टीको समय", "id": "Jam Istirahat", "th": "เวลาพัก", "my": "အနားယူချိန်", "km": "ម៉ោងសម្រាក", "uk": "Перерва", "ru": "Перемена", "hi": "ब्रेक का समय", "bn": "বিরতির সময়", "ur": "وقفے کا وقت", "ar": "وقت الاستراحة"
    },
    "clubs_committees": {
        "icon": "🏃", "ja_ruby": "ぶかつどう・いいんかい",
        "en": "Clubs & Committees", "pt": "Clubes e Comitês", "zh-CN": "社团与委员会", "zh-TW": "社團與委員會", "ko": "동아리・위원회", "tl": "Clubs at Komite", "vi": "Câu lạc bộ & Ủy ban", "es": "Clubes y Comités", "ne": "क्लब र समितिहरू", "id": "Klub & Komite", "th": "ชมรมและคณะกรรมการ", "my": "ကလပ်များနှင့် ကော်မတီများ", "km": "ក្លឹប និងគណៈកម្មាធិការ", "uk": "Гуртки та комітети", "ru": "Клубы и комитеты", "hi": "क्लब और समितियां", "bn": "ক্লাব এবং কমিটি", "ur": "کلب اور کمیٹیاں", "ar": "الأندية واللجان"
    },
    "teachers_room": {
        "icon": "👨‍🏫", "ja_ruby": "しょくいんしつ・ていしゅつぶつ",
        "en": "Teachers' Room", "pt": "Sala dos Professores", "zh-CN": "教职员室・提交作业", "zh-TW": "教職員室・提交作業", "ko": "교무실・과제 제출", "tl": "Faculty Room", "vi": "Phòng Giáo viên", "es": "Sala de Profesores", "ne": "शिक्षक कक्ष", "id": "Ruang Guru", "th": "ห้องพักครู", "my": "ဆရာများအခန်း", "km": "បន្ទប់គ្រូបង្រៀន", "uk": "Учительська", "ru": "Учительская", "hi": "शिक्षक कक्ष", "bn": "শিক্ষকদের রুম", "ur": "اساتذہ کا کمرہ", "ar": "غرفة المعلمين"
    },
    "commuting": {
        "icon": "🚶", "ja_ruby": "とうげこう・あいさつ",
        "en": "Commuting & Greetings", "pt": "Trajeto e Saudações", "zh-CN": "上下学・问候", "zh-TW": "上下學・問候", "ko": "등하교・인사", "tl": "Pagpasok at Pag-uwi", "vi": "Đến trường & Về nhà", "es": "Camino a la Escuela", "ne": "स्कुल आउने-जाने बाटो", "id": "Perjalanan Sekolah", "th": "การเดินทางไปโรงเรียน", "my": "ကျောင်းတက်ကျောင်းဆင်း", "km": "ការធ្វើដំណើរទៅសាលា", "uk": "Дорога до школи", "ru": "Дорога в школу", "hi": "स्कूल आना-जाना", "bn": "যাতায়াত ও শুভেচ্ছা", "ur": "آنا جانا اور سلام", "ar": "التنقل والتحيات"
    },
    "troubles": {
        "icon": "🆘", "ja_ruby": "トラブル・こまりごと",
        "en": "Troubles & SOS", "pt": "Problemas e SOS", "zh-CN": "麻烦与SOS求助", "zh-TW": "麻煩與SOS求助", "ko": "문제・SOS", "tl": "Problema at SOS", "vi": "Rắc rối & Kêu cứu", "es": "Problemas y SOS", "ne": "समस्या र मद्दत (SOS)", "id": "Masalah & SOS", "th": "ปัญหาและ SOS", "my": "အခက်အခဲများနှင့် SOS", "km": "បញ្ហា និង SOS", "uk": "Проблеми та SOS", "ru": "Проблемы и SOS", "hi": "समस्याएं और SOS", "bn": "সমস্যা এবং SOS", "ur": "مسائل اور SOS", "ar": "المشاكل وطلب المساعدة"
    },
    "school_events": {
        "icon": "🎊", "ja_ruby": "ぎょうじ・イベント",
        "en": "School Events", "pt": "Eventos Escolares", "zh-CN": "学校活动", "zh-TW": "學校活動", "ko": "학교 행사", "tl": "Events ng Paaralan", "vi": "Sự kiện ở trường", "es": "Eventos Escolares", "ne": "विद्यालयका कार्यक्रमहरू", "id": "Acara Sekolah", "th": "กิจกรรมโรงเรียน", "my": "ကျောင်းပွဲများ", "km": "ព្រឹត្តិការណ៍សាលា", "uk": "Шкільні заходи", "ru": "Школьные мероприятия", "hi": "स्कूल के कार्यक्रम", "bn": "স্কুল ইভেন্ট", "ur": "اسکول کی تقریبات", "ar": "الفعاليات المدرسية"
    },
    "school_office": {
        "icon": "🏢", "ja_ruby": "じむしつ・てつづき",
        "en": "School Office", "pt": "Secretaria Escolar", "zh-CN": "事务室・行政手续", "zh-TW": "事務室・行政手續", "ko": "행정실・수속", "tl": "Opisina ng Paaralan", "vi": "Văn phòng trường", "es": "Oficina de la Escuela", "ne": "प्रशासन कक्ष", "id": "Tata Usaha (TU)", "th": "สำนักงานโรงเรียน", "my": "ကျောင်းရုံးခန်း", "km": "ការិយាល័យសាលា", "uk": "Шкільна канцелярія", "ru": "Школьная канцелярия", "hi": "स्कूल कार्यालय", "bn": "স্কুল অফিস", "ur": "اسکول کا دفتر", "ar": "مكتب المدرسة"
    },
    "student_paragraphs": {
        "icon": "🧑‍🎓", "ja_ruby": "せいと編（すこし長い文）",
        "en": "Student Sentences", "pt": "Frases do Aluno", "zh-CN": "学生篇(长文)", "zh-TW": "學生篇(長文)", "ko": "학생편(장문)", "tl": "Pangungusap ng Estudyante", "vi": "Đoạn văn của học sinh", "es": "Frases del Alumno", "ne": "विद्यार्थी खण्ड (लामो वाक्य)", "id": "Kalimat Siswa", "th": "ประโยคของนักเรียน", "my": "ကျောင်းသားစာကြောင်းများ", "km": "ប្រយោគសិស្ស", "uk": "Для учнів (тексти)", "ru": "Для учеников (тексты)", "hi": "छात्र के वाक्य", "bn": "ছাত্র বাক্য", "ur": "طالب علم کے جملے", "ar": "جمل الطلاب"
    },
    "parent_paragraphs": {
        "icon": "👪", "ja_ruby": "ほごしゃ編（学校への連絡）",
        "en": "Parent Sentences", "pt": "Avisos dos Pais", "zh-CN": "家长篇(学校联络)", "zh-TW": "家長篇(學校聯絡)", "ko": "학부모편(학교 연락)", "tl": "Mensahe ng Magulang", "vi": "Dành cho phụ huynh", "es": "Mensajes de los Padres", "ne": "अभिभावक खण्ड (स्कुललाई सम्पर्क)", "id": "Kalimat Orang Tua", "th": "ข้อความสำหรับผู้ปกครอง", "my": "မိဘစာကြောင်းများ", "km": "ប្រយោគមាតាបិតា", "uk": "Для батьків (тексти)", "ru": "Для родителей", "hi": "माता-पिता के संदेश", "bn": "পিতামাতার বার্তা", "ur": "والدین کے پیغامات", "ar": "رسائل أولياء الأمور"
    }
};

const lifeMasterData = [
            {
                labelId: "title_convenient",
                titles: { 'ja': "🥚 はじめに覚えよう！便利なフレーズ", 'en': "🥚 Basic Convenient Phrases", 'zh-CN': "🥚 首先记住！便利短句", 'zh-TW': "🥚 首先記住！便利短句", 'ko': "🥚 우선 기억하자! 편리한 표현", 'vi': "🥚 Cụm từ tiện lợi cơ bản", 'tl': "🥚 Mga Pangunahing Parirala", 'id': "🥚 Ungkapan Praktis Dasar", 'th': "🥚 วลีสะดวกใช้เบื้องต้น", 'my': "🥚 အခြေခံအသုံးဝင်သောစကားစုများ", 'km': "🥚 ឃ្លាប្រកបដោយភាពងាយស្រួល", 'ne': "🥚 सुरुमा सम्झनुपर्ने उपयोगी वाक्यांशहरू", 'mn': "🥚 Анхлан сурах хэрэгцээт үгс", 'si': "🥚 මූලික ප්‍රයෝජනවත් වාක්‍ය ඛණ්ඩ", 'bn': "🥚 প্রাথমিক দরকারী বাক্যাংশ", 'pt': "🥚 Frases Úteis Básicas", 'es': "🥚 Frases Útiles Básicas", 'fr': "🥚 Phrases Pratiques de Base", 'ru': "🥚 Базовые полезные фразы", 'uk': "🥚 Базові корисні фрази" },
                scenes: [
                    { name: "ちょっと声をかけたいとき", isReady: true, catKey: "a1_scene1" },
                    { name: "買い物をするとき", isReady: true, catKey: "convenient_shopping" },
                    { name: "注文するとき", isReady: true, catKey: "convenient_ordering" },
                    { name: "近所の人に会ったとき", isReady: true, catKey: "convenient_neighbor" },
                    { name: "人の家を訪問するとき", isReady: true, catKey: "convenient_visit_home" },
                    { name: "質問したいとき", isReady: true, catKey: "convenient_question" }
                ]
            },
            {
                labelId: "title_a1",
                titles: { 'ja': "🌱 目指そう A1レベル", 'en': "🌱 Aim for A1 Level", 'zh-CN': "🌱 目标 A1 レベル", 'zh-TW': "🌱 目標 A1 レベル", 'ko': "🌱 도전하자 A1 레벨", 'vi': "🌱 Hướng tới trình độ A1", 'tl': "🌱 Layunin ang A1 Level", 'id': "🌱 Target Tingkat A1", 'th': "🌱 มุ่งสู่ระดับ A1", 'my': "🌱 A1 အဆင့်သို့ ရည်မှန်းကြစို့", 'km': "🌱 ឆ្ពោះទៅកម្រិត A1", 'ne': "🌱 A1 स्तरको लक्ष्य राखौं", 'mn': "🌱 A1 түвшинд хүрэх зорилт", 'si': "🌱 A1 මට්ටම සාක්ෂාත් කරගනිමු", 'bn': "🌱 A1 স্তরের লক্ষ্য নির্ধারণ", 'pt': "🌱 Rumo ao Nível A1", 'es': "🌱 Rumo ao Nivel A1", 'fr': "🌱 Objectif Niveau A1", 'ru': "🌱 Стремись к уровню A1", 'uk': "🌱 Прагни до рівня A1" },
                scenes: [
                    { name: "あいさつをしよう", isReady: true, catKey: "a1_scene1" }, { name: "みじかなモノを買ってみよう", isReady: true, catKey: "a1_buy_things" },
                    { name: "売り場や値段をきいてみよう", isReady: true, catKey: "a1_ask_place_price" }, { name: "ほしいものを選んで買ってみよう", isReady: true, catKey: "a1_want_to_buy" },
                    { name: "お店の人に希望を伝えてみよう", isReady: true, catKey: "a1_tell_preferences" }, { name: "レストランへ行ってみよう", isReady: true, catKey: "a1_restaurant" },
                    { name: "宅配便を利用しよう", isReady: true, catKey: "a1_delivery" }, { name: "電車に乗ってみよう", isReady: true, catKey: "a1_train" },
                    { name: "道をきいてみよう", isReady: true, catKey: "a1_ask_directions" }, { name: "銀行を利用しよう", isReady: true, catKey: "a1_bank" },
                    { name: "住民としてのマナーを理解しよう", isReady: true, catKey: "a1_resident_manners" }, { name: "職場の機械を使いこなそう", isReady: true, catKey: "a1_workplace_machines" }
                ]
            },
            {
                labelId: "title_a2",
                titles: { 'ja': "🧱 目指そう A2レベル", 'en': "🧱 Aim for A2 Level", 'zh-CN': "🧱 目标 A2 レベル", 'zh-TW': "🧱 目標 A2 レベル", 'ko': "🧱 도전하자 A2 레벨", 'vi': "🧱 Hướng tới trình độ A2", 'tl': "🧱 Layunin ang A2 Level", 'id': "🧱 Target Tingkat A2", 'th': "🧱 มุ่งสู่ระดับ A2", 'my': "🧱 A2 အဆင့်သို့ ရည်မှန်းကြစို့", 'km': "🧱 ឆ្ពោះទៅកម្រិត A2", 'ne': "🧱 A2 स्तरको लक्ष्य राखौं", 'mn': "🧱 A2 түвшинд хүрэх зорилт", 'si': "🧱 A2 මට්ටම සාක්ෂาත් කරගනිමු", 'bn': "🧱 A2 স্তরের লক্ষ্য নির্ধারণ", 'pt': "🧱 Rumo ao Nível A2", 'es': "🧱 Rumo ao Nivel A2", 'fr': "🧱 Objectif Niveau A2", 'ru': "🧱 Стремись к уровню A2", 'uk': "🧱 Прагни до рівня A2" },
                scenes: [
                    { name: "場面に応じたあいさつをしよう", isReady: true, catKey: "a2_greetings_by_situation" }, { name: "お店のサービスを利用してみよう", isReady: true, catKey: "a2_store_services" },
                    { name: "お店を選んでみよう", isReady: true, catKey: "a2_choose_store" }, { name: "いろいろなお店を利用しよう", isReady: true, catKey: "a2_choose_various_stores" },
                    { name: "上手にお買い物をしよう", isReady: false }, { name: "自治会に入ってみよう", isReady: false },
                    { name: "イベントに行ってみよう", isReady: false }, { name: "病院に行こう", isReady: false },
                    { name: "緊急のときは、助けをもとめよう", isReady: false }, { name: "役所に行こう", isReady: false },
                    { name: "図書館に行ってみよう", isReady: false }, { name: "ハガキを送ってみよう", isReady: false },
                    { name: "インターネットや電話を利用しよう", isReady: false }, { name: "安全に注意して働こう", isReady: false },
                    { name: "職場での事故に対応しよう", isReady: false }, { name: "仕事を探してみよう", isReady: false },
                    { name: "面接を受けてみよう", isReady: false }, { name: "職場の同僚とやりとりしよう", isReady: false },
                    { name: "職場で早退や休暇を申請してみよう", isReady: false }
                ]
            },
            {
                labelId: "title_b1",
                titles: { 'ja': "🌿 目指そう B1レベル", 'en': "🌿 Aim for B1 Level", 'zh-CN': "🌿 目标 B1 レベル", 'zh-TW': "🌿 目標 B1 レベル", 'ko': "🌿 도전하자 B1 레벨", 'vi': "🌿 Hướng tới trình độ B1", 'tl': "🌿 Layunin ang B1 Level", 'id': "🌿 Target Tingkat B1", 'th': "🌿 มุ่งสู่ระดับ B1", 'my': "🌿 B1 အဆင့်သို့ ရည်မှန်းကြစို့", 'km': "🌿 ឆ្ពោះទៅកម្រិត B1", 'ne': "🌿 B1 स्तरको लक्ष्य राखौं", 'mn': "🌿 B1 түвшинд хүрэх зорилт", 'si': "🌿 B1 මට්ටම සාක්ෂาත් කරගනිමු", 'bn': "🌿 B1 স্তরের লক্ষ্য নির্ধারণ", 'pt': "🌿 Rumo ao Nível B1", 'es': "🌿 Rumo ao Nivel B1", 'fr': "🌿 Objectif Niveau B1", 'ru': "🌿 Стремись к уровню B1", 'uk': "🌿 Прагни до рівня B1" },
                scenes: [
                    { name: "職場であいさつをしよう", isReady: false }, { name: "行きたい場所に自分の力で行ってみよう", isReady: false },
                    { name: "安全に注意して移動しよう", isReady: false }, { name: "薬局を利用しよう", isReady: false },
                    { name: "防災について考えよう", isReady: false }, { name: "病気を予防しよう", isReady: false },
                    { name: "住民として地域の活動に参加しよう", isReady: false }, { name: "引っ越し先を探そう", isReady: false },
                    { name: "引っ越しの準備をしよう", isReady: false }, { name: "出産の準備をしよう", isReady: false },
                    { name: "出産について相談してみよう", isReady: false }, { name: "育児に関するサービスを利用しよう", isReady: false },
                    { name: "子どもを病院に連れていこう", isReady: false }, { name: "保育施設を利用しよう", isReady: false },
                    { name: "子育てについて相談しよう", isReady: false }, { name: "入学に向けて準備しよう", isReady: false },
                    { name: "学校生活について理解しよう", isReady: false }, { name: "学校生活でのトラブルに対処しよう", isReady: false },
                    { name: "進路について相談しよう", isReady: false }
                ]
            }
        ];

const uiDict = {
    ja:{school:'学校編',schoolSub:'School',life:'生活編',lifeSub:'Daily Life',back:'◀ コース選択にもどる',top:'トップへ戻る',category:'どんな 場面（シチュエーション）ですか？',phrase:'れんしゅうする フレーズ',prompt:'シチュエーションを えらんでください',lifeTitle:'生活でつかう にほんご',practice:'れんしゅう ▶',empty:'フレーズがありません',soon:'準備中'},
    en:{school:'School Mode',schoolSub:'School',life:'Life Mode',lifeSub:'Daily Life',back:'◀ Back to Course Selection',top:'Back to Top',category:'What situation do you want to practice?',phrase:'Practice Phrases',prompt:'Please select a situation',lifeTitle:'Japanese for Daily Life',practice:'Practice ▶',empty:'No phrases found',soon:'Soon'},
    'zh-CN':{school:'学校篇',schoolSub:'School',life:'生活篇',lifeSub:'Daily Life',back:'◀ 返回课程选择',top:'返回首页',category:'你想练习什么场景？',phrase:'练习短句',prompt:'请选择一个场景',lifeTitle:'日常生活日语',practice:'练习 ▶',empty:'没有短句',soon:'准备中'},
    'zh-TW':{school:'學校篇',schoolSub:'School',life:'生活篇',lifeSub:'Daily Life',back:'◀ 返回課程選擇',top:'返回首頁',category:'你想練習什麼場景？',phrase:'練習短句',prompt:'請選擇一個場景',lifeTitle:'日常生活日語',practice:'練習 ▶',empty:'沒有短句',soon:'準備中'},
    ko:{school:'학교편',schoolSub:'School',life:'생활편',lifeSub:'Daily Life',back:'◀ 코스 선택으로 돌아가기',top:'첫 화면으로',category:'어떤 상황을 연습할까요?',phrase:'연습할 표현',prompt:'상황을 선택해 주세요',lifeTitle:'일상생활에서 쓰는 일본어',practice:'연습 ▶',empty:'표현이 없습니다',soon:'준비 중'},
    vi:{school:'Trường học',schoolSub:'School',life:'Đời sống',lifeSub:'Daily Life',back:'◀ Quay lại chọn khóa học',top:'Về trang đầu',category:'Bạn muốn luyện tình huống nào?',phrase:'Cụm từ luyện tập',prompt:'Vui lòng chọn một tình huống',lifeTitle:'Tiếng Nhật đời sống hằng ngày',practice:'Luyện tập ▶',empty:'Không có cụm từ',soon:'Sắp có'},
    tl:{school:'Paaralan',schoolSub:'School',life:'Araw-araw',lifeSub:'Daily Life',back:'◀ Bumalik sa pagpili',top:'Bumalik sa Top',category:'Anong sitwasyon ang gusto mong praktisin?',phrase:'Mga Pariralang Praktis',prompt:'Pumili ng sitwasyon',lifeTitle:'Japanese para sa araw-araw',practice:'Practice ▶',empty:'Walang parirala',soon:'Soon'},
    id:{school:'Sekolah',schoolSub:'School',life:'Kehidupan',lifeSub:'Daily Life',back:'◀ Kembali ke pilihan kursus',top:'Kembali ke awal',category:'Situasi apa yang ingin dilatih?',phrase:'Frasa Latihan',prompt:'Silakan pilih situasi',lifeTitle:'Bahasa Jepang untuk kehidupan sehari-hari',practice:'Latihan ▶',empty:'Tidak ada frasa',soon:'Segera'},
    th:{school:'โหมดโรงเรียน',schoolSub:'School',life:'โหมดชีวิตประจำวัน',lifeSub:'Daily Life',back:'◀ กลับไปเลือกคอร์ส',top:'กลับหน้าแรก',category:'ต้องการฝึกสถานการณ์ใด?',phrase:'วลีสำหรับฝึก',prompt:'กรุณาเลือกสถานการณ์',lifeTitle:'ภาษาญี่ปุ่นในชีวิตประจำวัน',practice:'ฝึก ▶',empty:'ไม่มีวลี',soon:'เร็ว ๆ นี้'},
    my:{school:'ကျောင်း',schoolSub:'School',life:'နေ့စဉ်ဘဝ',lifeSub:'Daily Life',back:'◀ သင်တန်းရွေးရန် ပြန်သွားရန်',top:'မူလစာမျက်နှာ',category:'ဘယ်အခြေအနေကို လေ့ကျင့်မလဲ။',phrase:'လေ့ကျင့်ရန် စကားစုများ',prompt:'အခြေအနေတစ်ခု ရွေးပါ',lifeTitle:'နေ့စဉ်ဘဝသုံး ဂျပန်ဘာသာ',practice:'လေ့ကျင့် ▶',empty:'စကားစုမရှိပါ',soon:'မကြာမီ'},
    km:{school:'សាលារៀន',schoolSub:'School',life:'ជីវិតប្រចាំថ្ងៃ',lifeSub:'Daily Life',back:'◀ ត្រឡប់ទៅជ្រើសវគ្គ',top:'ត្រឡប់ទៅទំព័រដើម',category:'តើចង់ហាត់ស្ថានភាពណា?',phrase:'ឃ្លាសម្រាប់ហាត់',prompt:'សូមជ្រើសរើសស្ថានភាព',lifeTitle:'ភាសាជប៉ុនសម្រាប់ជីវិតប្រចាំថ្ងៃ',practice:'ហាត់ ▶',empty:'គ្មានឃ្លា',soon:'ឆាប់ៗនេះ'},
    ne:{school:'विद्यालय',schoolSub:'School',life:'दैनिक जीवन',lifeSub:'Daily Life',back:'◀ कोर्स चयनमा फर्कनुहोस्',top:'शीर्षमा फर्कनुहोस्',category:'कुन परिस्थिति अभ्यास गर्ने?',phrase:'अभ्यास वाक्यांशहरू',prompt:'कृपया परिस्थिति छान्नुहोस्',lifeTitle:'दैनिक जीवनका लागि जापानी',practice:'अभ्यास ▶',empty:'वाक्यांश छैन',soon:'चाँडै'},
    mn:{school:'Сургууль',schoolSub:'School',life:'Өдөр тутмын амьдрал',lifeSub:'Daily Life',back:'◀ Сонголт руу буцах',top:'Эхлэл рүү',category:'Ямар нөхцөлийг давтах вэ?',phrase:'Давтах хэллэгүүд',prompt:'Нөхцөл байдлыг сонгоно уу',lifeTitle:'Өдөр тутмын япон хэл',practice:'Давтах ▶',empty:'Хэллэг алга',soon:'Удахгүй'},
    si:{school:'පාසල',schoolSub:'School',life:'එදිනෙදා ජීවිතය',lifeSub:'Daily Life',back:'◀ පාඨමාලා තේරීමට ආපසු',top:'මුල් පිටුවට',category:'ඔබට පුහුණු කිරීමට අවශ්‍ය තත්ත්වය කුමක්ද?',phrase:'පුහුණු වාක්‍ය',prompt:'කරුණාකර තත්ත්වයක් තෝරන්න',lifeTitle:'එදිනෙදා ජීවිතයට ජපන් භාෂාව',practice:'පුහුණු ▶',empty:'වාක්‍ය නැත',soon:'ඉක්මනින්'},
    bn:{school:'স্কুল',schoolSub:'School',life:'দৈনন্দিন জীবন',lifeSub:'Daily Life',back:'◀ কোর্স নির্বাচনে ফিরে যান',top:'শুরুতে ফিরুন',category:'কোন পরিস্থিতি অনুশীলন করবেন?',phrase:'অনুশীলনের বাক্যাংশ',prompt:'অনুগ্রহ করে একটি পরিস্থিতি বেছে নিন',lifeTitle:'দৈনন্দিন জীবনের জন্য জাপানি',practice:'অনুশীলন ▶',empty:'কোনো বাক্যাংশ নেই',soon:'শীঘ্রই'},
    pt:{school:'Escola',schoolSub:'School',life:'Vida Diária',lifeSub:'Daily Life',back:'◀ Voltar à seleção',top:'Voltar ao início',category:'Que situação deseja praticar?',phrase:'Frases de prática',prompt:'Selecione uma situação',lifeTitle:'Japonês para o dia a dia',practice:'Praticar ▶',empty:'Nenhuma frase',soon:'Em breve'},
    es:{school:'Escuela',schoolSub:'School',life:'Vida diaria',lifeSub:'Daily Life',back:'◀ Volver a la selección',top:'Volver al inicio',category:'¿Qué situación quieres practicar?',phrase:'Frases de práctica',prompt:'Selecciona una situación',lifeTitle:'Japonés para la vida diaria',practice:'Practicar ▶',empty:'No hay frases',soon:'Pronto'},
    fr:{school:'École',schoolSub:'School',life:'Vie quotidienne',lifeSub:'Daily Life',back:'◀ Retour à la sélection',top:'Retour accueil',category:'Quelle situation voulez-vous pratiquer ?',phrase:'Phrases à pratiquer',prompt:'Veuillez choisir une situation',lifeTitle:'Japonais pour la vie quotidienne',practice:'Pratiquer ▶',empty:'Aucune phrase',soon:'Bientôt'},
    ru:{school:'Школа',schoolSub:'School',life:'Повседневная жизнь',lifeSub:'Daily Life',back:'◀ Назад к выбору',top:'На главную',category:'Какую ситуацию вы хотите практиковать?',phrase:'Фразы для практики',prompt:'Выберите ситуацию',lifeTitle:'Японский для повседневной жизни',practice:'Практика ▶',empty:'Фраз нет',soon:'Скоро'},
    uk:{school:'Школа',schoolSub:'School',life:'Повсякденне життя',lifeSub:'Daily Life',back:'◀ Назад до вибору',top:'На головну',category:'Яку ситуацію ви хочете практикувати?',phrase:'Фрази для практики',prompt:'Оберіть ситуацію',lifeTitle:'Японська для повсякденного життя',practice:'Практика ▶',empty:'Фраз немає',soon:'Скоро'}
};

const langData = [
    { code:'ja', native:'日本語', jp:'にほんご' },{ code:'en', native:'English', jp:'英語' },{ code:'zh-CN', native:'简体中文', jp:'中国語（簡体字）' },{ code:'zh-TW', native:'繁體中文', jp:'中国語（繁体字）' },
    { code:'ko', native:'한국어', jp:'韓国語' },{ code:'vi', native:'Tiếng Việt', jp:'ベトナム語' },{ code:'tl', native:'Filipino', jp:'フィリピノ語' },{ code:'id', native:'Indonesia', jp:'インドネシア語' },
    { code:'th', native:'ภาษาไทย', jp:'タイ語' },{ code:'my', native:'မြန်မာဘာသာ', jp:'ミャンマー語' },{ code:'km', native:'ខ្មែរ', jp:'クメール語' },{ code:'ne', native:'नेपाली', jp:'ネパール語' },
    { code:'mn', native:'Монгол хэл', jp:'モンゴル語' },{ code:'si', native:'සිංහල', jp:'シンハラ語' },{ code:'bn', native:'বাংলা ভাষা', jp:'ベンガル語' },{ code:'pt', native:'Português', jp:'ポルトガル語' },
    { code:'es', native:'Español', jp:'スペイン語' },{ code:'fr', native:'Français', jp:'フランス語' },{ code:'ru', native:'Русский', jp:'ロシア語' },{ code:'uk', native:'Українська', jp:'ウクライナ語' }
];
