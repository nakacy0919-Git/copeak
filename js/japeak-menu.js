// ==========================================
// Japeak メニュー画面ロジック
// ==========================================
let allJapeakData = [];
if (typeof japeakData !== 'undefined') allJapeakData = allJapeakData.concat(japeakData);
if (typeof japeakConversationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConversationData);

let menuLang = 'en';
let selectedCategory = null;

// カテゴリの多言語翻訳辞書（UI用）
const categoryTranslations = {
    "school_life": {
        "en": "Basic School Life", "pt": "Vida Escolar (Básico)", "zh-CN": "学校生活(基础)", "tl": "Buhay Paaralan", "vi": "Đời sống học đường", "es": "Vida Escolar", "ne": "स्कूल जीवन", "id": "Kehidupan Sekolah",
        "ja_ruby": "がっこうの せいかつ（きほん）"
    },
    "school_life_conversation": {
        "en": "Conversation with Friends", "pt": "Conversa com Amigos", "zh-CN": "与朋友交谈", "tl": "Pakikipag-usap sa Kaibigan", "vi": "Trò chuyện với bạn bè", "es": "Conversación con amigos", "ne": "साथीहरूसँग कुराकानी", "id": "Percakapan dengan Teman",
        "ja_ruby": "ともだちとの かいわ"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();

    const langSelect = document.getElementById('menu-lang-select');
    langSelect.addEventListener('change', (e) => {
        menuLang = e.target.value;
        renderCategories();
        if (selectedCategory) renderPhraseList(selectedCategory);
    });
});

function renderCategories() {
    const container = document.getElementById('category-container');
    container.innerHTML = '';

    // データから存在するカテゴリを抽出
    const uniqueCategories = [...new Set(allJapeakData.map(item => item.category))];

    uniqueCategories.forEach(cat => {
        const btn = document.createElement('button');
        const trans = categoryTranslations[cat];
        
        // 日本語ルビ＋翻訳言語の表示
        btn.innerHTML = `
            <div class="text-sm font-bold">${trans ? trans.ja_ruby : cat}</div>
            <div class="text-[10px] opacity-80 mt-1">${trans ? trans[menuLang] : cat}</div>
        `;
        
        btn.className = `category-btn flex flex-col items-center justify-center px-4 py-3 bg-[#f4f0e6] text-[#1e3a5f] border-2 border-[#1e3a5f] rounded-sm hover:bg-[#1e3a5f] hover:text-white transition shadow-sm ${selectedCategory === cat ? 'active' : ''}`;
        
        btn.onclick = () => {
            selectedCategory = cat;
            renderCategories(); // ボタンのアクティブ状態を更新
            renderPhraseList(cat);
        };
        container.appendChild(btn);
    });
}

function renderPhraseList(category) {
    const container = document.getElementById('phrase-list-container');
    container.innerHTML = '';

    const filteredData = allJapeakData.filter(item => item.category === category);

    filteredData.forEach(item => {
        const card = document.createElement('div');
        // クリックしたら japeak.html に ID と 言語 を渡して遷移
        card.onclick = () => {
            window.location.href = `japeak.html?id=${item.id}&lang=${menuLang}`;
        };
        card.className = "group cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-stone-50 hover:bg-[#e0e7ff] border border-stone-200 rounded-sm transition gap-4";

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