// ==========================================
// Japeak メニュー画面ロジック
// ==========================================

// 🌟 全データを結合して1つのリストにする
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

let menuLang = 'en';
let selectedCategory = null;

// 🌟 カテゴリの多言語翻訳辞書 (ウクライナ語 'uk' を追加)
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

// ==========================================
// Japeak メニュー操作ロジック
// 学校編・生活編 共通フレーズ表示対応版
// ==========================================

window.selectedLifeSceneName = null;

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();

    const langSelect = document.getElementById('menu-lang-select');

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            menuLang = e.target.value;

            renderCategories();

            if (selectedCategory) {
                renderPhraseList(selectedCategory, window.selectedLifeSceneName);
            }

            if (typeof renderLifeDashboard === 'function') {
                renderLifeDashboard(menuLang);
            }
        });
    }
});

// 学校編カテゴリを表示する
function renderCategories() {
    const container = document.getElementById('category-container');
    if (!container) return;

    container.innerHTML = '';
    container.className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";

    // a1_scene1 は生活編側で使うので、学校編一覧からは外す
    const uniqueCategories = [...new Set(allJapeakData.map(item => item.category))]
        .filter(cat => cat !== 'a1_scene1');

    uniqueCategories.forEach(cat => {
        const btn = document.createElement('button');
        const trans = categoryTranslations[cat];
        const icon = trans && trans.icon ? trans.icon : "🗻";

        btn.innerHTML = `
            <div class="text-3xl md:text-4xl mb-2 drop-shadow-sm group-hover:scale-110 transition-transform">${icon}</div>
            <div class="text-sm font-bold leading-snug">${trans ? trans.ja_ruby : cat}</div>
            <div class="text-[10px] opacity-80 mt-1">${trans ? (trans[menuLang] || trans['en']) : cat}</div>
        `;

        btn.className = `category-btn group flex flex-col items-center justify-center p-4 h-full w-full bg-[#f4f0e6] text-[#1e3a5f] border-2 border-[#1e3a5f] rounded-sm hover:bg-[#1e3a5f] hover:text-white transition shadow-sm ${selectedCategory === cat ? 'active' : ''}`;

        btn.onclick = () => {
            window.selectedLifeSceneName = null;
            selectedCategory = cat;

            renderCategories();
            renderPhraseList(cat);

            scrollToPhraseSection();
        };

        container.appendChild(btn);
    });
}

// フレーズ一覧を表示する
function renderPhraseList(category, sceneName = null) {
    const container = document.getElementById('phrase-list-container');
    if (!container) return;

    container.innerHTML = '';

    const labelPhrase = document.getElementById('label-phrase');

    if (labelPhrase) {
        if (sceneName) {
            labelPhrase.innerText = `${sceneName}：れんしゅうする フレーズ`;
        } else {
            const trans = categoryTranslations[category];
            const label = trans ? (trans.ja_ruby || trans[menuLang] || trans['en']) : category;
            labelPhrase.innerText = `${label}：れんしゅうする フレーズ`;
        }
    }

    const filteredData = allJapeakData.filter(item => item.category === category);

    if (filteredData.length === 0) {
        container.innerHTML = `
            <div class="text-stone-400 text-center py-10 font-bold">
                このシチュエーションのフレーズはまだ登録されていません。
            </div>
        `;
        return;
    }

    const countBox = document.createElement('div');
    countBox.className = "mb-2 text-xs md:text-sm text-stone-500 font-bold tracking-wide";
    countBox.innerHTML = `全 ${filteredData.length} フレーズ`;
    container.appendChild(countBox);

    filteredData.forEach((item, index) => {
        const card = document.createElement('div');

        card.onclick = () => {
            window.location.href = `japeak.html?id=${item.id}&lang=${menuLang}`;
        };

        card.className = "group cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-500 rounded-sm transition gap-4 shadow-sm";

        const translationText = item.translations
            ? (item.translations[menuLang] || item.translations['en'] || '')
            : '';

        const contextText = item.context
            ? (item.context[menuLang] || item.context['en'] || '')
            : '';

        card.innerHTML = `
            <div class="flex items-start gap-3 flex-1">
                <div class="w-8 h-8 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-xs font-black shrink-0">
                    ${index + 1}
                </div>

                <div class="flex-1">
                    <h3 class="text-lg md:text-xl font-bold text-stone-800 mincho-font leading-relaxed">
                        ${item.japanese}
                    </h3>

                    <p class="text-sm text-stone-600 font-bold mt-1">
                        ${translationText}
                    </p>

                    <p class="text-xs text-stone-400 font-medium mt-2 leading-relaxed">
                        ${contextText}
                    </p>
                </div>
            </div>

            <div class="bg-[#1e3a5f] text-white text-xs font-bold px-4 py-2 rounded-sm group-hover:bg-[#047857] transition whitespace-nowrap">
                れんしゅう ▶
            </div>
        `;

        container.appendChild(card);
    });
}

// 生活編のシーンボタンから、フレーズ一覧を表示する
window.loadJapeakCategory = function(category, sceneName = null) {
    selectedCategory = category;
    window.selectedLifeSceneName = sceneName;

    renderPhraseList(category, sceneName);

    if (typeof renderLifeDashboard === 'function') {
        renderLifeDashboard(menuLang);
    }

    scrollToPhraseSection();
};

// フレーズ一覧セクションへ自動スクロールする
function scrollToPhraseSection() {
    const phraseArea = document.getElementById('phrase-list-container');

    if (phraseArea && phraseArea.parentElement) {
        setTimeout(() => {
            const y = phraseArea.parentElement.getBoundingClientRect().top + window.pageYOffset - 20;
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }, 80);
    }
}