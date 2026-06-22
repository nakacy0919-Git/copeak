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

// 🌟 新しく作成した中文データ（生徒編・保護者編）を結合
if (typeof japeakParagraphsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakParagraphsData);

let menuLang = 'en';
let selectedCategory = null;

// 🌟 カテゴリの多言語翻訳辞書
const categoryTranslations = {
    "school_life": {
        "icon": "🎒", "en": "Basic School Life", "pt": "Vida Escolar (Básico)", "zh-CN": "学校生活(基础)", "tl": "Buhay Paaralan", "vi": "Đời sống học đường", "es": "Vida Escolar", "ne": "स्कूल जीवन", "id": "Kehidupan Sekolah",
        "ja_ruby": "がっこうの せいかつ（きほん）"
    },
    "school_life_conversation": {
        "icon": "🗣️", "en": "Conversation with Friends", "pt": "Conversa com Amigos", "zh-CN": "与朋友交谈", "tl": "Pakikipag-usap sa Kaibigan", "vi": "Trò chuyện với bạn bè", "es": "Conversación con amigos", "ne": "साथीहरूसँग कुराकानी", "id": "Percakapan dengan Teman",
        "ja_ruby": "ともだちとの かいわ"
    },
    "class_time": {
        "icon": "✏️", "en": "In Class", "pt": "Na Sala de Aula", "zh-CN": "上课时", "tl": "Sa Klase", "vi": "Trong lớp học", "es": "En Clase", "ne": "कक्षामा", "id": "Di Kelas",
        "ja_ruby": "じゅぎょうの とき"
    },
    "health_clinic": {
        "icon": "🏥", "en": "Health & Clinic", "pt": "Saúde e Enfermaria", "zh-CN": "保健室・身体不适", "tl": "Kalusugan at Klinika", "vi": "Sức khỏe & Phòng y tế", "es": "Salud y Enfermería", "ne": "स्वास्थ्य र क्लिनिक", "id": "Kesehatan & UKS",
        "ja_ruby": "ほけんしつ・たいちょうふりょう"
    },
    "lunch_time": {
        "icon": "🍱", "en": "Lunch Time", "pt": "Hora do Almoço", "zh-CN": "午餐时间", "tl": "Oras ng Tanghalian", "vi": "Giờ ăn trưa", "es": "Hora del Almuerzo", "ne": "खाजाको समय", "id": "Jam Makan Siang",
        "ja_ruby": "きゅうしょく・おべんとう"
    },
    "break_time": {
        "icon": "⚽", "en": "Break Time", "pt": "Intervalo", "zh-CN": "休息时间", "tl": "Oras ng Pahinga", "vi": "Giờ ra chơi", "es": "Recreo", "ne": "छुट्टीको समय", "id": "Jam Istirahat",
        "ja_ruby": "やすみ じかん"
    },
    "clubs_committees": {
        "icon": "🏃", "en": "Clubs & Committees", "pt": "Clubes e Comitês", "zh-CN": "社团与委员会", "tl": "Clubs at Komite", "vi": "Câu lạc bộ & Ủy ban", "es": "Clubes y Comités", "ne": "क्लब र समितिहरू", "id": "Klub & Komite",
        "ja_ruby": "ぶかつどう・いいんかい"
    },
    "teachers_room": {
        "icon": "👨‍🏫", "en": "Teachers' Room", "pt": "Sala dos Professores", "zh-CN": "教职员室・提交作业", "tl": "Faculty Room", "vi": "Phòng Giáo viên", "es": "Sala de Profesores", "ne": "शिक्षक कक्ष", "id": "Ruang Guru",
        "ja_ruby": "しょくいんしつ・ていしゅつぶつ"
    },
    "commuting": {
        "icon": "🚶", "en": "Commuting & Greetings", "pt": "Trajeto e Saudações", "zh-CN": "上下学・问候", "tl": "Pagpasok at Pag-uwi", "vi": "Đến trường & Về nhà", "es": "Camino a la Escuela", "ne": "स्कुल आउने-जाने बाटो", "id": "Perjalanan Sekolah",
        "ja_ruby": "とうげこう・あいさつ"
    },
    "troubles": {
        "icon": "🆘", "en": "Troubles & SOS", "pt": "Problemas e SOS", "zh-CN": "麻烦与SOS求助", "tl": "Problema at SOS", "vi": "Rắc rối & Kêu cứu", "es": "Problemas y SOS", "ne": "समस्या र मद्दत (SOS)", "id": "Masalah & SOS",
        "ja_ruby": "トラブル・こまりごと"
    },
    "school_events": {
        "icon": "🎊", "en": "School Events", "pt": "Eventos Escolares", "zh-CN": "学校活动", "tl": "Events ng Paaralan", "vi": "Sự kiện ở trường", "es": "Eventos Escolares", "ne": "विद्यालयका कार्यक्रमहरू", "id": "Acara Sekolah",
        "ja_ruby": "ぎょうじ・イベント"
    },
    "school_office": {
        "icon": "🏢", "en": "School Office", "pt": "Secretaria Escolar", "zh-CN": "事务室・行政手续", "tl": "Opisina ng Paaralan", "vi": "Văn phòng trường", "es": "Oficina de la Escuela", "ne": "प्रशासन कक्ष", "id": "Tata Usaha (TU)",
        "ja_ruby": "じむしつ・てつづき"
    },
    // 🌟 中文（生徒編・保護者編）を追加！
    "student_paragraphs": {
        "icon": "🧑‍🎓", "en": "Student Sentences", "pt": "Frases do Aluno", "zh-CN": "学生篇(长文)", "tl": "Pangungusap ng Estudyante", "vi": "Đoạn văn của học sinh", "es": "Frases del Alumno", "ne": "विद्यार्थी खण्ड (लामो वाक्य)", "id": "Kalimat Siswa",
        "ja_ruby": "せいと編（すこし長い文）"
    },
    "parent_paragraphs": {
        "icon": "👪", "en": "Parent Sentences", "pt": "Avisos dos Pais", "zh-CN": "家长篇(学校联络)", "tl": "Mensahe ng Magulang", "vi": "Phành cho phụ huynh", "es": "Mensahes de los Padres", "ne": "अभिभावक खण्ड (स्कुललाई सम्पर्क)", "id": "Kalimat Orang Tua",
        "ja_ruby": "ほごしゃ編（学校への連絡）"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();

    const langSelect = document.getElementById('menu-lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            menuLang = e.target.value;
            renderCategories();
            if (selectedCategory) renderPhraseList(selectedCategory);
        });
    }
});

function renderCategories() {
    const container = document.getElementById('category-container');
    if (!container) return;
    container.innerHTML = '';
    
    container.className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";

    const uniqueCategories = [...new Set(allJapeakData.map(item => item.category))];

    uniqueCategories.forEach(cat => {
        const btn = document.createElement('button');
        const trans = categoryTranslations[cat];
        const icon = trans && trans.icon ? trans.icon : "🗻";
        
        btn.innerHTML = `
            <div class="text-3xl md:text-4xl mb-2 drop-shadow-sm group-hover:scale-110 transition-transform">${icon}</div>
            <div class="text-sm font-bold leading-snug">${trans ? trans.ja_ruby : cat}</div>
            <div class="text-[10px] opacity-80 mt-1">${trans ? trans[menuLang] : cat}</div>
        `;
        
        btn.className = `category-btn group flex flex-col items-center justify-center p-4 h-full w-full bg-[#f4f0e6] text-[#1e3a5f] border-2 border-[#1e3a5f] rounded-sm hover:bg-[#1e3a5f] hover:text-white transition shadow-sm ${selectedCategory === cat ? 'active' : ''}`;
        
        btn.onclick = () => {
            selectedCategory = cat;
            renderCategories(); 
            renderPhraseList(cat);

            const phraseArea = document.getElementById('phrase-list-container');
            if (phraseArea && phraseArea.parentElement) {
                const y = phraseArea.parentElement.getBoundingClientRect().top + window.pageYOffset - 20;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        };
        container.appendChild(btn);
    });
}

function renderPhraseList(category) {
    const container = document.getElementById('phrase-list-container');
    if (!container) return;
    container.innerHTML = '';

    const filteredData = allJapeakData.filter(item => item.category === category);

    if (filteredData.length === 0) {
        container.innerHTML = '<div class="text-stone-400 text-center py-10 font-bold">フレーズがありません</div>';
        return;
    }

    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.onclick = () => {
            window.location.href = `japeak.html?id=${item.id}&lang=${menuLang}`;
        };
        card.className = "group cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-stone-50 hover:bg-[#e0e7ff] border border-stone-200 rounded-sm transition gap-4 shadow-sm";

        card.innerHTML = `
            <div class="flex-1">
                <h3 class="text-lg font-bold text-stone-800 mincho-font">${item.japanese}</h3>
                <p class="text-sm text-stone-500 font-medium mt-1">${item.translations[menuLang] || item.translations['en']}</p>
            </div>
            <div class="bg-[#1e3a5f] text-white text-xs font-bold px-4 py-2 rounded-sm group-hover:bg-[#b91c1c] transition whitespace-nowrap">
                れんしゅう ▶
            </div>
        `;
        container.appendChild(card);
    });
}