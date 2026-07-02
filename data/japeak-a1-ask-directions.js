// =====================================================
// Japeak A1 Level
// Scene: 道を聞いてみよう
// Category Key: a1_ask_directions
// =====================================================

const a1AskDirectionsContext = {
    ja: "道に迷ったときや目的地へ行きたいときに使う日本語を練習します。",
    en: "Practice Japanese for asking for directions when you are lost or want to go somewhere.",
    "zh-CN": "练习迷路时或想去某个地方时使用的日语。",
    "zh-TW": "練習迷路時或想去某個地方時使用的日語。",
    ko: "길을 잃었거나 목적지에 가고 싶을 때 사용하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi bị lạc đường hoặc muốn đi đến một địa điểm.",
    tl: "Practice ng Japanese kapag naligaw ka o gusto mong pumunta sa isang lugar.",
    id: "Latihan bahasa Jepang saat tersesat atau ingin pergi ke suatu tempat.",
    th: "ฝึกภาษาญี่ปุ่นเมื่อหลงทางหรืออยากไปยังสถานที่หนึ่ง",
    my: "လမ်းပျောက်သည့်အခါ သို့မဟုတ် တစ်နေရာရာသို့ သွားလိုသည့်အခါ အသုံးပြုသော ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុននៅពេលវង្វេងផ្លូវ ឬចង់ទៅកន្លែងណាមួយ។",
    ne: "बाटो हराउँदा वा कुनै ठाउँमा जान चाहँदा प्रयोग गर्ने जापानी भाषा अभ्यास।",
    mn: "Зам төөрөх эсвэл хаа нэг газар очихыг хүсэх үед хэрэглэх япон хэлний дадлага.",
    si: "මාර්ගය වැරදුණු විට හෝ තැනකට යාමට අවශ්‍ය වූ විට භාවිතා කරන ජපන් භාෂාව පුහුණු කිරීම.",
    bn: "রাস্তা হারালে বা কোথাও যেতে চাইলে ব্যবহৃত জাপানি ভাষার অনুশীলন।",
    pt: "Prática de japonês para pedir direções quando você se perde ou quer ir a algum lugar.",
    es: "Práctica de japonés para pedir direcciones cuando te pierdes o quieres ir a algún lugar.",
    fr: "Entraînement en japonais pour demander son chemin quand on est perdu ou que l’on veut aller quelque part.",
    ru: "Практика японского языка для того, чтобы спросить дорогу, когда вы заблудились или хотите куда-то пойти.",
    uk: "Практика японської мови для запитання дороги, коли ви заблукали або хочете кудись піти."
};

const a1AskDirectionsSpeakerNames = {
    local: {
        ja: "案内する人", en: "Local Person", "zh-CN": "指路的人", "zh-TW": "指路的人", ko: "길을 알려주는 사람",
        vi: "Người chỉ đường", tl: "Taong nagtuturo ng daan", id: "Orang yang memberi arah", th: "คนบอกทาง",
        my: "လမ်းညွှန်ပေးသူ", km: "អ្នកប្រាប់ផ្លូវ", ne: "बाटो बताउने व्यक्ति", mn: "Зам зааж өгөх хүн",
        si: "මාර්ගය කියන පුද්ගලයා", bn: "রাস্তা দেখানো ব্যক্তি", pt: "Pessoa que dá informações", es: "Persona que da indicaciones",
        fr: "Personne qui indique le chemin", ru: "Человек, который подсказывает дорогу", uk: "Людина, яка підказує дорогу"
    },
    visitor: {
        ja: "道を聞く人", en: "Person Asking", "zh-CN": "问路的人", "zh-TW": "問路的人", ko: "길을 묻는 사람",
        vi: "Người hỏi đường", tl: "Taong nagtatanong ng daan", id: "Orang yang bertanya arah", th: "คนถามทาง",
        my: "လမ်းမေးသူ", km: "អ្នកសួរផ្លូវ", ne: "बाटो सोध्ने व्यक्ति", mn: "Зам асууж буй хүн",
        si: "මාර්ගය අසන පුද්ගලයා", bn: "রাস্তা জিজ্ঞেস করা ব্যক্তি", pt: "Pessoa que pergunta", es: "Persona que pregunta",
        fr: "Personne qui demande", ru: "Человек, который спрашивает дорогу", uk: "Людина, яка запитує дорогу"
    }
};

function makeA1AskDirectionsDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a1_ask_directions",
        japanese: dialogue.map(t => `${t.name}：${t.line}`).join("\n"),
        target_speech: dialogue.map(t => t.target || t.line).join(" "),
        ruby: {
            hiragana: dialogue.map(t => t.ruby || t.line).join("<br>"),
            romaji: dialogue.map(t => t.romaji || "").join("<br>")
        },
        dialogue: dialogue.map(t => ({
            speakerLabel: t.label,
            speakerName: t.name,
            speakerKey: t.key || t.name,
            speakerNames: a1AskDirectionsSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a1AskDirectionsContext,
        translations,
        dialogueTranslations
    };
}

const japeakA1AskDirectionsData = [

    makeA1AskDirectionsDialogue(
        "a1_direction_001",
        "駅までの道を聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "すみません。駅まで行きたいです。",
                target: "すみません えきまでいきたいです",
                ruby: "すみません。<ruby>駅<rt>えき</rt></ruby>まで<ruby>行<rt>い</rt></ruby>きたいです。",
                romaji: "Sumimasen. Eki made ikitai desu."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "この道をまっすぐ行ってください。",
                target: "このみちをまっすぐいってください",
                ruby: "この<ruby>道<rt>みち</rt></ruby>をまっすぐ<ruby>行<rt>い</rt></ruby>ってください。",
                romaji: "Kono michi o massugu itte kudasai."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "ありがとうございます。",
                target: "ありがとうございます",
                ruby: "ありがとうございます。",
                romaji: "Arigatō gozaimasu."
            }
        ],
        {
            ja: ["道を聞く人：すみません。駅まで行きたいです。", "案内する人：この道をまっすぐ行ってください。", "道を聞く人：ありがとうございます。"],
            en: ["Person Asking: Excuse me. I want to go to the station.", "Local Person: Please go straight on this road.", "Person Asking: Thank you."],
            "zh-CN": ["问路的人：不好意思。我想去车站。", "指路的人：请沿着这条路一直走。", "问路的人：谢谢。"],
            "zh-TW": ["問路的人：不好意思。我想去車站。", "指路的人：請沿著這條路一直走。", "問路的人：謝謝。"],
            ko: ["길을 묻는 사람: 실례합니다. 역까지 가고 싶어요.", "길을 알려주는 사람: 이 길을 곧장 가세요.", "길을 묻는 사람: 감사합니다."],
            vi: ["Người hỏi đường: Xin lỗi. Tôi muốn đi đến nhà ga.", "Người chỉ đường: Xin hãy đi thẳng đường này.", "Người hỏi đường: Cảm ơn."],
            tl: ["Taong nagtatanong: Excuse me. Gusto kong pumunta sa istasyon.", "Taong nagtuturo: Dumiretso po kayo sa daang ito.", "Taong nagtatanong: Salamat po."],
            id: ["Orang yang bertanya: Permisi. Saya ingin pergi ke stasiun.", "Orang yang memberi arah: Silakan jalan lurus di jalan ini.", "Orang yang bertanya: Terima kasih."],
            th: ["คนถามทาง: ขอโทษค่ะ/ครับ อยากไปสถานีค่ะ/ครับ", "คนบอกทาง: กรุณาเดินตรงไปตามถนนนี้ค่ะ/ครับ", "คนถามทาง: ขอบคุณค่ะ/ครับ"],
            my: ["လမ်းမေးသူ: တဆိတ်လောက်ပါ။ ဘူတာအထိ သွားချင်ပါတယ်။", "လမ်းညွှန်ပေးသူ: ဒီလမ်းကို တည့်တည့်သွားပေးပါ။", "လမ်းမေးသူ: ကျေးဇူးတင်ပါတယ်။"],
            km: ["អ្នកសួរផ្លូវ: សុំទោស។ ខ្ញុំចង់ទៅស្ថានីយ៍។", "អ្នកប្រាប់ផ្លូវ: សូមទៅត្រង់តាមផ្លូវនេះ។", "អ្នកសួរផ្លូវ: អរគុណ។"],
            ne: ["बाटो सोध्ने व्यक्ति: माफ गर्नुहोस्। म स्टेशनसम्म जान चाहन्छु।", "बाटो बताउने व्यक्ति: यो बाटो सिधा जानुहोस्।", "बाटो सोध्ने व्यक्ति: धन्यवाद।"],
            mn: ["Зам асууж буй хүн: Уучлаарай. Би буудал хүртэл явмаар байна.", "Зам зааж өгөх хүн: Энэ замаар чигээрээ яваарай.", "Зам асууж буй хүн: Баярлалаа."],
            si: ["මාර්ගය අසන පුද්ගලයා: සමාවෙන්න. මට දුම්රිය ස්ථානයට යන්න ඕනේ.", "මාර්ගය කියන පුද්ගලයා: මේ මාර්ගයෙන් කෙළින්ම යන්න.", "මාර්ගය අසන පුද්ගලයා: ස්තුතියි."],
            bn: ["রাস্তা জিজ্ঞেস করা ব্যক্তি: মাফ করবেন। আমি স্টেশনে যেতে চাই।", "রাস্তা দেখানো ব্যক্তি: এই রাস্তা ধরে সোজা যান।", "রাস্তা জিজ্ঞেস করা ব্যক্তি: ধন্যবাদ।"],
            pt: ["Pessoa que pergunta: Com licença. Quero ir até a estação.", "Pessoa que dá informações: Siga reto por esta rua, por favor.", "Pessoa que pergunta: Obrigado."],
            es: ["Persona que pregunta: Disculpe. Quiero ir a la estación.", "Persona que da indicaciones: Siga recto por esta calle, por favor.", "Persona que pregunta: Gracias."],
            fr: ["Personne qui demande : Excusez-moi. Je veux aller à la gare.", "Personne qui indique le chemin : Allez tout droit sur cette rue, s’il vous plaît.", "Personne qui demande : Merci."],
            ru: ["Спрашивающий: Извините. Я хочу дойти до станции.", "Местный житель: Идите прямо по этой дороге, пожалуйста.", "Спрашивающий: Спасибо."],
            uk: ["Людина, яка запитує: Вибачте. Я хочу дійти до станції.", "Людина, яка підказує: Ідіть прямо цією дорогою, будь ласка.", "Людина, яка запитує: Дякую."]
        }
    ),

    makeA1AskDirectionsDialogue(
        "a1_direction_002",
        "近くのコンビニを聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "この近くにコンビニはありますか。",
                target: "このちかくにこんびにはありますか",
                ruby: "この<ruby>近<rt>ちか</rt></ruby>くにコンビニはありますか。",
                romaji: "Kono chikaku ni konbini wa arimasu ka."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "はい、信号の先にあります。",
                target: "はい しんごうのさきにあります",
                ruby: "はい、<ruby>信号<rt>しんごう</rt></ruby>の<ruby>先<rt>さき</rt></ruby>にあります。",
                romaji: "Hai, shingō no saki ni arimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "歩いて行けますか。",
                target: "あるいていけますか",
                ruby: "<ruby>歩<rt>ある</rt></ruby>いて<ruby>行<rt>い</rt></ruby>けますか。",
                romaji: "Aruite ikemasu ka."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "はい、歩いて三分くらいです。",
                target: "はい あるいてさんぷんくらいです",
                ruby: "はい、<ruby>歩<rt>ある</rt></ruby>いて<ruby>三分<rt>さんぷん</rt></ruby>くらいです。",
                romaji: "Hai, aruite sanpun kurai desu."
            }
        ],
        {
            ja: ["道を聞く人：この近くにコンビニはありますか。", "案内する人：はい、信号の先にあります。", "道を聞く人：歩いて行けますか。", "案内する人：はい、歩いて三分くらいです。"],
            en: ["Person Asking: Is there a convenience store near here?", "Local Person: Yes, it is past the traffic light.", "Person Asking: Can I walk there?", "Local Person: Yes, it is about three minutes on foot."],
            "zh-CN": ["问路的人：这附近有便利店吗？", "指路的人：有，在红绿灯前面。", "问路的人：可以走路去吗？", "指路的人：可以，走路大约三分钟。"],
            "zh-TW": ["問路的人：這附近有便利商店嗎？", "指路的人：有，在紅綠燈前面。", "問路的人：可以走路去嗎？", "指路的人：可以，走路大約三分鐘。"],
            ko: ["길을 묻는 사람: 이 근처에 편의점이 있나요?", "길을 알려주는 사람: 네, 신호등을 지나면 있습니다.", "길을 묻는 사람: 걸어서 갈 수 있나요?", "길을 알려주는 사람: 네, 걸어서 3분 정도입니다."],
            vi: ["Người hỏi đường: Gần đây có cửa hàng tiện lợi không ạ?", "Người chỉ đường: Có, ở phía sau đèn giao thông.", "Người hỏi đường: Tôi có thể đi bộ đến đó không?", "Người chỉ đường: Có, đi bộ khoảng ba phút."],
            tl: ["Taong nagtatanong: May convenience store po ba malapit dito?", "Taong nagtuturo: Oo, lagpas po ng traffic light.", "Taong nagtatanong: Pwede po bang lakarin?", "Taong nagtuturo: Oo, mga tatlong minuto po sa paglalakad."],
            id: ["Orang yang bertanya: Apakah ada minimarket di dekat sini?", "Orang yang memberi arah: Ya, ada setelah lampu lalu lintas.", "Orang yang bertanya: Bisa jalan kaki ke sana?", "Orang yang memberi arah: Ya, sekitar tiga menit berjalan kaki."],
            th: ["คนถามทาง: แถวนี้มีร้านสะดวกซื้อไหมคะ/ครับ", "คนบอกทาง: มีค่ะ/ครับ อยู่เลยสัญญาณไฟไปค่ะ/ครับ", "คนถามทาง: เดินไปได้ไหมคะ/ครับ", "คนบอกทาง: ได้ค่ะ/ครับ เดินประมาณสามนาทีค่ะ/ครับ"],
            my: ["လမ်းမေးသူ: ဒီနားမှာ ကွန်ဗီနီရှိပါသလား။", "လမ်းညွှန်ပေးသူ: ရှိပါတယ်၊ မီးပွိုင့်ကျော်ပြီးနောက်မှာ ရှိပါတယ်။", "လမ်းမေးသူ: လမ်းလျှောက်သွားလို့ရပါသလား။", "လမ်းညွှန်ပေးသူ: ရပါတယ်၊ လမ်းလျှောက်ရင် သုံးမိနစ်လောက်ပါ။"],
            km: ["អ្នកសួរផ្លូវ: តើមានហាងងាយស្រួលនៅជិតនេះទេ?", "អ្នកប្រាប់ផ្លូវ: មាន នៅខាងមុខភ្លើងសញ្ញា។", "អ្នកសួរផ្លូវ: តើអាចដើរទៅបានទេ?", "អ្នកប្រាប់ផ្លូវ: បាន ប្រហែលបីនាទីដោយដើរ។"],
            ne: ["बाटो सोध्ने व्यक्ति: यहाँ नजिकै कन्भिनियन्स स्टोर छ?", "बाटो बताउने व्यक्ति: छ, ट्राफिक बत्तीभन्दा अगाडि छ।", "बाटो सोध्ने व्यक्ति: हिँडेर जान सकिन्छ?", "बाटो बताउने व्यक्ति: हुन्छ, हिँडेर करिब तीन मिनेट हो।"],
            mn: ["Зам асууж буй хүн: Энэ хавьд конбини байна уу?", "Зам зааж өгөх хүн: Тийм, гэрлэн дохионы цаана байгаа.", "Зам асууж буй хүн: Алхаад очиж болох уу?", "Зам зааж өгөх хүн: Тийм, алхахад ойролцоогоор гурван минут."],
            si: ["මාර්ගය අසන පුද්ගලයා: මේ ළඟ convenience store එකක් තියෙනවද?", "මාර්ගය කියන පුද්ගලයා: ඔව්, signal එකට එහා පැත්තේ තියෙනවා.", "මාර්ගය අසන පුද්ගලයා: ඇවිදිලා යන්න පුළුවන්ද?", "මාර්ගය කියන පුද්ගලයා: ඔව්, ඇවිදිලා විනාඩි තුනක් විතරයි."],
            bn: ["রাস্তা জিজ্ঞেস করা ব্যক্তি: এখানে কাছাকাছি কোনো কনভেনিয়েন্স স্টোর আছে?", "রাস্তা দেখানো ব্যক্তি: হ্যাঁ, ট্রাফিক লাইটের পরে আছে।", "রাস্তা জিজ্ঞেস করা ব্যক্তি: হেঁটে যেতে পারব?", "রাস্তা দেখানো ব্যক্তি: হ্যাঁ, হাঁটলে প্রায় তিন মিনিট।"],
            pt: ["Pessoa que pergunta: Há uma loja de conveniência perto daqui?", "Pessoa que dá informações: Sim, fica depois do semáforo.", "Pessoa que pergunta: Posso ir a pé?", "Pessoa que dá informações: Sim, são cerca de três minutos a pé."],
            es: ["Persona que pregunta: ¿Hay una tienda de conveniencia cerca de aquí?", "Persona que da indicaciones: Sí, está después del semáforo.", "Persona que pregunta: ¿Puedo ir caminando?", "Persona que da indicaciones: Sí, son unos tres minutos a pie."],
            fr: ["Personne qui demande : Y a-t-il une supérette près d’ici ?", "Personne qui indique le chemin : Oui, elle est après le feu.", "Personne qui demande : Puis-je y aller à pied ?", "Personne qui indique le chemin : Oui, c’est à environ trois minutes à pied."],
            ru: ["Спрашивающий: Есть ли рядом круглосуточный магазин?", "Местный житель: Да, он находится за светофором.", "Спрашивающий: Можно дойти пешком?", "Местный житель: Да, примерно три минуты пешком."],
            uk: ["Людина, яка запитує: Чи є поблизу магазин біля дому?", "Людина, яка підказує: Так, він за світлофором.", "Людина, яка запитує: Можна дійти пішки?", "Людина, яка підказує: Так, приблизно три хвилини пішки."]
        }
    ),

    makeA1AskDirectionsDialogue(
        "a1_direction_003",
        "市役所への道を聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "市役所へ行きたいです。",
                target: "しやくしょへいきたいです",
                ruby: "<ruby>市役所<rt>しやくしょ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きたいです。",
                romaji: "Shiyakusho e ikitai desu."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "次の角を右に曲がってください。",
                target: "つぎのかどをみぎにまがってください",
                ruby: "<ruby>次<rt>つぎ</rt></ruby>の<ruby>角<rt>かど</rt></ruby>を<ruby>右<rt>みぎ</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がってください。",
                romaji: "Tsugi no kado o migi ni magatte kudasai."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "右ですね。",
                target: "みぎですね",
                ruby: "<ruby>右<rt>みぎ</rt></ruby>ですね。",
                romaji: "Migi desu ne."
            }
        ],
        {
            ja: ["道を聞く人：市役所へ行きたいです。", "案内する人：次の角を右に曲がってください。", "道を聞く人：右ですね。"],
            en: ["Person Asking: I want to go to city hall.", "Local Person: Please turn right at the next corner.", "Person Asking: Right, correct?"],
            "zh-CN": ["问路的人：我想去市役所。", "指路的人：请在下一个路口右转。", "问路的人：右边，对吗？"],
            "zh-TW": ["問路的人：我想去市公所。", "指路的人：請在下一個路口右轉。", "問路的人：右邊，對嗎？"],
            ko: ["길을 묻는 사람: 시청에 가고 싶어요.", "길을 알려주는 사람: 다음 모퉁이에서 오른쪽으로 도세요.", "길을 묻는 사람: 오른쪽이죠?"],
            vi: ["Người hỏi đường: Tôi muốn đi đến tòa thị chính.", "Người chỉ đường: Xin hãy rẽ phải ở góc tiếp theo.", "Người hỏi đường: Bên phải đúng không ạ?"],
            tl: ["Taong nagtatanong: Gusto kong pumunta sa city hall.", "Taong nagtuturo: Kumanan po kayo sa susunod na kanto.", "Taong nagtatanong: Kanan po, tama?"],
            id: ["Orang yang bertanya: Saya ingin pergi ke balai kota.", "Orang yang memberi arah: Silakan belok kanan di sudut berikutnya.", "Orang yang bertanya: Kanan ya?"],
            th: ["คนถามทาง: อยากไปศาลากลางค่ะ/ครับ", "คนบอกทาง: กรุณาเลี้ยวขวาที่หัวมุมถัดไปค่ะ/ครับ", "คนถามทาง: ขวานะคะ/ครับ"],
            my: ["လမ်းမေးသူ: မြို့တော်ခန်းမကို သွားချင်ပါတယ်။", "လမ်းညွှန်ပေးသူ: နောက်တစ်ထောင့်မှာ ညာဘက်ကွေ့ပေးပါ။", "လမ်းမေးသူ: ညာဘက်နော်။"],
            km: ["អ្នកសួរផ្លូវ: ខ្ញុំចង់ទៅសាលាក្រុង។", "អ្នកប្រាប់ផ្លូវ: សូមបត់ស្តាំនៅជ្រុងបន្ទាប់។", "អ្នកសួរផ្លូវ: ស្តាំមែនទេ។"],
            ne: ["बाटो सोध्ने व्यक्ति: म नगर कार्यालय जान चाहन्छु।", "बाटो बताउने व्यक्ति: अर्को कुनामा दायाँ मोड्नुहोस्।", "बाटो सोध्ने व्यक्ति: दायाँ है?"],
            mn: ["Зам асууж буй хүн: Би хотын захиргаа руу явмаар байна.", "Зам зааж өгөх хүн: Дараагийн булангаар баруун тийш эргээрэй.", "Зам асууж буй хүн: Баруун тийш, тийм үү?"],
            si: ["මාර්ගය අසන පුද්ගලයා: මට නගර කාර්යාලයට යන්න ඕනේ.", "මාර්ගය කියන පුද්ගලයා: ඊළඟ කෙළවරේ දකුණට හැරෙන්න.", "මාර්ගය අසන පුද්ගලයා: දකුණට නේද?"],
            bn: ["রাস্তা জিজ্ঞেস করা ব্যক্তি: আমি সিটি হলে যেতে চাই।", "রাস্তা দেখানো ব্যক্তি: পরের মোড়ে ডান দিকে ঘুরুন।", "রাস্তা জিজ্ঞেস করা ব্যক্তি: ডান দিকে, তাই তো?"],
            pt: ["Pessoa que pergunta: Quero ir à prefeitura.", "Pessoa que dá informações: Vire à direita na próxima esquina, por favor.", "Pessoa que pergunta: À direita, certo?"],
            es: ["Persona que pregunta: Quiero ir al ayuntamiento.", "Persona que da indicaciones: Gire a la derecha en la próxima esquina, por favor.", "Persona que pregunta: A la derecha, ¿verdad?"],
            fr: ["Personne qui demande : Je veux aller à la mairie.", "Personne qui indique le chemin : Tournez à droite au prochain coin, s’il vous plaît.", "Personne qui demande : À droite, c’est bien ça ?"],
            ru: ["Спрашивающий: Я хочу пойти в мэрию.", "Местный житель: Поверните направо на следующем углу.", "Спрашивающий: Направо, верно?"],
            uk: ["Людина, яка запитує: Я хочу піти до міської ради.", "Людина, яка підказує: Поверніть праворуч на наступному розі.", "Людина, яка запитує: Праворуч, так?"]
        }
    ),

    makeA1AskDirectionsDialogue(
        "a1_direction_004",
        "病院へ行く方法を聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "病院は遠いですか。",
                target: "びょういんはとおいですか",
                ruby: "<ruby>病院<rt>びょういん</rt></ruby>は<ruby>遠<rt>とお</rt></ruby>いですか。",
                romaji: "Byōin wa tōi desu ka."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "少し遠いです。バスが便利です。",
                target: "すこしとおいです ばすがべんりです",
                ruby: "<ruby>少<rt>すこ</rt></ruby>し<ruby>遠<rt>とお</rt></ruby>いです。バスが<ruby>便利<rt>べんり</rt></ruby>です。",
                romaji: "Sukoshi tōi desu. Basu ga benri desu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "バス停はどこですか。",
                target: "ばすていはどこですか",
                ruby: "バス<ruby>停<rt>てい</rt></ruby>はどこですか。",
                romaji: "Basu-tei wa doko desu ka."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "あの白い建物の前です。",
                target: "あのしろいたてもののまえです",
                ruby: "あの<ruby>白<rt>しろ</rt></ruby>い<ruby>建物<rt>たてもの</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>です。",
                romaji: "Ano shiroi tatemono no mae desu."
            }
        ],
        {
            ja: ["道を聞く人：病院は遠いですか。", "案内する人：少し遠いです。バスが便利です。", "道を聞く人：バス停はどこですか。", "案内する人：あの白い建物の前です。"],
            en: ["Person Asking: Is the hospital far?", "Local Person: It is a little far. The bus is convenient.", "Person Asking: Where is the bus stop?", "Local Person: It is in front of that white building."],
            "zh-CN": ["问路的人：医院远吗？", "指路的人：有点远。坐公交比较方便。", "问路的人：公交站在哪里？", "指路的人：在那栋白色建筑前面。"],
            "zh-TW": ["問路的人：醫院遠嗎？", "指路的人：有點遠。坐公車比較方便。", "問路的人：公車站在哪裡？", "指路的人：在那棟白色建築前面。"],
            ko: ["길을 묻는 사람: 병원은 먼가요?", "길을 알려주는 사람: 조금 멉니다. 버스가 편리합니다.", "길을 묻는 사람: 버스 정류장은 어디인가요?", "길을 알려주는 사람: 저 흰 건물 앞입니다."],
            vi: ["Người hỏi đường: Bệnh viện có xa không ạ?", "Người chỉ đường: Hơi xa một chút. Đi xe buýt thì tiện.", "Người hỏi đường: Trạm xe buýt ở đâu ạ?", "Người chỉ đường: Ở trước tòa nhà màu trắng kia."],
            tl: ["Taong nagtatanong: Malayo po ba ang ospital?", "Taong nagtuturo: Medyo malayo po. Mas convenient ang bus.", "Taong nagtatanong: Saan po ang bus stop?", "Taong nagtuturo: Sa harap po ng puting building na iyon."],
            id: ["Orang yang bertanya: Apakah rumah sakit jauh?", "Orang yang memberi arah: Sedikit jauh. Bus lebih praktis.", "Orang yang bertanya: Di mana halte bus?", "Orang yang memberi arah: Di depan gedung putih itu."],
            th: ["คนถามทาง: โรงพยาบาลไกลไหมคะ/ครับ", "คนบอกทาง: ไกลนิดหน่อยค่ะ/ครับ รถบัสสะดวกค่ะ/ครับ", "คนถามทาง: ป้ายรถบัสอยู่ที่ไหนคะ/ครับ", "คนบอกทาง: อยู่หน้าตึกสีขาวนั้นค่ะ/ครับ"],
            my: ["လမ်းမေးသူ: ဆေးရုံက ဝေးပါသလား။", "လမ်းညွှန်ပေးသူ: နည်းနည်းဝေးပါတယ်။ ဘတ်စ်ကားက အဆင်ပြေပါတယ်။", "လမ်းမေးသူ: ဘတ်စ်ကားမှတ်တိုင်က ဘယ်မှာပါလဲ။", "လမ်းညွှန်ပေးသူ: အဲဒီအဖြူရောင်အဆောက်အအုံရှေ့မှာပါ။"],
            km: ["អ្នកសួរផ្លូវ: តើមន្ទីរពេទ្យឆ្ងាយទេ?", "អ្នកប្រាប់ផ្លូវ: ឆ្ងាយបន្តិច។ ឡានក្រុងងាយស្រួល។", "អ្នកសួរផ្លូវ: ចំណតឡានក្រុងនៅឯណា?", "អ្នកប្រាប់ផ្លូវ: នៅមុខអគារពណ៌សនោះ។"],
            ne: ["बाटो सोध्ने व्यक्ति: अस्पताल टाढा छ?", "बाटो बताउने व्यक्ति: अलि टाढा छ। बस सजिलो हुन्छ।", "बाटो सोध्ने व्यक्ति: बस स्टप कहाँ छ?", "बाटो बताउने व्यक्ति: त्यो सेतो भवनको अगाडि छ।"],
            mn: ["Зам асууж буй хүн: Эмнэлэг хол уу?", "Зам зааж өгөх хүн: Жаахан хол. Автобус тохиромжтой.", "Зам асууж буй хүн: Автобусны буудал хаана байна вэ?", "Зам зааж өгөх хүн: Тэр цагаан барилгын урд байна."],
            si: ["මාර්ගය අසන පුද්ගලයා: රෝහල දුරද?", "මාර්ගය කියන පුද්ගලයා: ටිකක් දුරයි. බස් එක පහසුයි.", "මාර්ගය අසන පුද්ගලයා: බස් නැවතුම කොහෙද?", "මාර්ගය කියන පුද්ගලයා: අර සුදු ගොඩනැගිල්ල ඉස්සරහයි."],
            bn: ["রাস্তা জিজ্ঞেস করা ব্যক্তি: হাসপাতাল কি দূরে?", "রাস্তা দেখানো ব্যক্তি: একটু দূরে। বাসে গেলে সুবিধা।", "রাস্তা জিজ্ঞেস করা ব্যক্তি: বাস স্টপ কোথায়?", "রাস্তা দেখানো ব্যক্তি: ওই সাদা ভবনের সামনে।"],
            pt: ["Pessoa que pergunta: O hospital é longe?", "Pessoa que dá informações: É um pouco longe. O ônibus é conveniente.", "Pessoa que pergunta: Onde fica o ponto de ônibus?", "Pessoa que dá informações: Fica em frente àquele prédio branco."],
            es: ["Persona que pregunta: ¿El hospital está lejos?", "Persona que da indicaciones: Está un poco lejos. El autobús es conveniente.", "Persona que pregunta: ¿Dónde está la parada de autobús?", "Persona que da indicaciones: Está frente a ese edificio blanco."],
            fr: ["Personne qui demande : L’hôpital est-il loin ?", "Personne qui indique le chemin : C’est un peu loin. Le bus est pratique.", "Personne qui demande : Où est l’arrêt de bus ?", "Personne qui indique le chemin : Il est devant ce bâtiment blanc."],
            ru: ["Спрашивающий: Больница далеко?", "Местный житель: Немного далеко. Удобнее на автобусе.", "Спрашивающий: Где автобусная остановка?", "Местный житель: Перед тем белым зданием."],
            uk: ["Людина, яка запитує: Лікарня далеко?", "Людина, яка підказує: Трохи далеко. Автобусом зручно.", "Людина, яка запитує: Де автобусна зупинка?", "Людина, яка підказує: Перед тією білою будівлею."]
        }
    ),

    makeA1AskDirectionsDialogue(
        "a1_direction_005",
        "地図を見せて聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "すみません。ここはどこですか。",
                target: "すみません ここはどこですか",
                ruby: "すみません。ここはどこですか。",
                romaji: "Sumimasen. Koko wa doko desu ka."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "今、ここにいます。",
                target: "いま ここにいます",
                ruby: "<ruby>今<rt>いま</rt></ruby>、ここにいます。",
                romaji: "Ima, koko ni imasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "目的地はここです。",
                target: "もくてきちはここです",
                ruby: "<ruby>目的地<rt>もくてきち</rt></ruby>はここです。",
                romaji: "Mokutekichi wa koko desu."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "では、まっすぐ行って左です。",
                target: "では まっすぐいってひだりです",
                ruby: "では、まっすぐ<ruby>行<rt>い</rt></ruby>って<ruby>左<rt>ひだり</rt></ruby>です。",
                romaji: "Dewa, massugu itte hidari desu."
            }
        ],
        {
            ja: ["道を聞く人：すみません。ここはどこですか。", "案内する人：今、ここにいます。", "道を聞く人：目的地はここです。", "案内する人：では、まっすぐ行って左です。"],
            en: ["Person Asking: Excuse me. Where am I now?", "Local Person: You are here now.", "Person Asking: My destination is here.", "Local Person: Then go straight and turn left."],
            "zh-CN": ["问路的人：不好意思。这里是哪里？", "指路的人：现在你在这里。", "问路的人：目的地是这里。", "指路的人：那么，直走然后左转。"],
            "zh-TW": ["問路的人：不好意思。這裡是哪裡？", "指路的人：現在你在這裡。", "問路的人：目的地是這裡。", "指路的人：那麼，直走然後左轉。"],
            ko: ["길을 묻는 사람: 실례합니다. 여기가 어디인가요?", "길을 알려주는 사람: 지금 여기에 있습니다.", "길을 묻는 사람: 목적지는 여기입니다.", "길을 알려주는 사람: 그럼 곧장 가서 왼쪽입니다."],
            vi: ["Người hỏi đường: Xin lỗi. Đây là đâu ạ?", "Người chỉ đường: Bây giờ bạn đang ở đây.", "Người hỏi đường: Điểm đến của tôi là đây.", "Người chỉ đường: Vậy đi thẳng rồi rẽ trái."],
            tl: ["Taong nagtatanong: Excuse me. Nasaan po ito?", "Taong nagtuturo: Nandito po kayo ngayon.", "Taong nagtatanong: Ito po ang pupuntahan ko.", "Taong nagtuturo: Kung ganoon, dumiretso po kayo at kumaliwa."],
            id: ["Orang yang bertanya: Permisi. Ini di mana?", "Orang yang memberi arah: Sekarang Anda ada di sini.", "Orang yang bertanya: Tujuan saya di sini.", "Orang yang memberi arah: Kalau begitu, lurus lalu kiri."],
            th: ["คนถามทาง: ขอโทษค่ะ/ครับ ที่นี่คือที่ไหนคะ/ครับ", "คนบอกทาง: ตอนนี้คุณอยู่ตรงนี้ค่ะ/ครับ", "คนถามทาง: จุดหมายของฉัน/ผมอยู่ตรงนี้ค่ะ/ครับ", "คนบอกทาง: งั้นตรงไปแล้วเลี้ยวซ้ายค่ะ/ครับ"],
            my: ["လမ်းမေးသူ: တဆိတ်လောက်ပါ။ ဒီနေရာက ဘယ်နေရာပါလဲ။", "လမ်းညွှန်ပေးသူ: အခု ဒီနေရာမှာ ရှိနေပါတယ်။", "လမ်းမေးသူ: သွားမယ့်နေရာက ဒီမှာပါ။", "လမ်းညွှန်ပေးသူ: ဒါဆို တည့်တည့်သွားပြီး ဘယ်ဘက်ပါ။"],
            km: ["អ្នកសួរផ្លូវ: សុំទោស។ ទីនេះជាអ្វី?", "អ្នកប្រាប់ផ្លូវ: ឥឡូវនេះ អ្នកនៅទីនេះ។", "អ្នកសួរផ្លូវ: គោលដៅរបស់ខ្ញុំនៅទីនេះ។", "អ្នកប្រាប់ផ្លូវ: ដូច្នេះ ទៅត្រង់ រួចបត់ឆ្វេង។"],
            ne: ["बाटो सोध्ने व्यक्ति: माफ गर्नुहोस्। यो कहाँ हो?", "बाटो बताउने व्यक्ति: अहिले तपाईं यहाँ हुनुहुन्छ।", "बाटो सोध्ने व्यक्ति: मेरो गन्तव्य यहाँ हो।", "बाटो बताउने व्यक्ति: त्यसो भए, सिधा गएर बाँया हो।"],
            mn: ["Зам асууж буй хүн: Уучлаарай. Энэ хаана вэ?", "Зам зааж өгөх хүн: Одоо та энд байна.", "Зам асууж буй хүн: Миний очих газар энд байна.", "Зам зааж өгөх хүн: Тэгвэл чигээрээ яваад зүүн тийш."],
            si: ["මාර්ගය අසන පුද්ගලයා: සමාවෙන්න. මේ කොහෙද?", "මාර්ගය කියන පුද්ගලයා: දැන් ඔබ මෙතන ඉන්නවා.", "මාර්ගය අසන පුද්ගලයා: මගේ ගමනාන්තය මෙතනයි.", "මාර්ගය කියන පුද්ගලයා: එහෙනම් කෙළින්ම ගිහින් වමට."],
            bn: ["রাস্তা জিজ্ঞেস করা ব্যক্তি: মাফ করবেন। এটা কোথায়?", "রাস্তা দেখানো ব্যক্তি: এখন আপনি এখানে আছেন।", "রাস্তা জিজ্ঞেস করা ব্যক্তি: আমার গন্তব্য এখানে।", "রাস্তা দেখানো ব্যক্তি: তাহলে সোজা যান, তারপর বাঁ দিকে।"],
            pt: ["Pessoa que pergunta: Com licença. Onde estou agora?", "Pessoa que dá informações: Agora você está aqui.", "Pessoa que pergunta: Meu destino é aqui.", "Pessoa que dá informações: Então siga reto e vire à esquerda."],
            es: ["Persona que pregunta: Disculpe. ¿Dónde estoy ahora?", "Persona que da indicaciones: Ahora está aquí.", "Persona que pregunta: Mi destino está aquí.", "Persona que da indicaciones: Entonces siga recto y gire a la izquierda."],
            fr: ["Personne qui demande : Excusez-moi. Où suis-je ?", "Personne qui indique le chemin : Vous êtes ici maintenant.", "Personne qui demande : Ma destination est ici.", "Personne qui indique le chemin : Alors allez tout droit et tournez à gauche."],
            ru: ["Спрашивающий: Извините. Где я сейчас?", "Местный житель: Сейчас вы здесь.", "Спрашивающий: Место назначения вот здесь.", "Местный житель: Тогда идите прямо и налево."],
            uk: ["Людина, яка запитує: Вибачте. Де я зараз?", "Людина, яка підказує: Зараз ви тут.", "Людина, яка запитує: Моє місце призначення тут.", "Людина, яка підказує: Тоді йдіть прямо і ліворуч."]
        }
    ),

    makeA1AskDirectionsDialogue(
        "a1_direction_006",
        "道に迷ったと伝える",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "道に迷いました。",
                target: "みちにまよいました",
                ruby: "<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>いました。",
                romaji: "Michi ni mayoimashita."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "どこへ行きたいですか。",
                target: "どこへいきたいですか",
                ruby: "どこへ<ruby>行<rt>い</rt></ruby>きたいですか。",
                romaji: "Doko e ikitai desu ka."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "図書館へ行きたいです。",
                target: "としょかんへいきたいです",
                ruby: "<ruby>図書館<rt>としょかん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きたいです。",
                romaji: "Toshokan e ikitai desu."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "一緒に地図を見ましょう。",
                target: "いっしょにちずをみましょう",
                ruby: "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>地図<rt>ちず</rt></ruby>を<ruby>見<rt>み</rt></ruby>ましょう。",
                romaji: "Issho ni chizu o mimashō."
            }
        ],
        {
            ja: ["道を聞く人：道に迷いました。", "案内する人：どこへ行きたいですか。", "道を聞く人：図書館へ行きたいです。", "案内する人：一緒に地図を見ましょう。"],
            en: ["Person Asking: I am lost.", "Local Person: Where do you want to go?", "Person Asking: I want to go to the library.", "Local Person: Let’s look at the map together."],
            "zh-CN": ["问路的人：我迷路了。", "指路的人：你想去哪里？", "问路的人：我想去图书馆。", "指路的人：我们一起看地图吧。"],
            "zh-TW": ["問路的人：我迷路了。", "指路的人：你想去哪裡？", "問路的人：我想去圖書館。", "指路的人：我們一起看地圖吧。"],
            ko: ["길을 묻는 사람: 길을 잃었습니다.", "길을 알려주는 사람: 어디에 가고 싶으세요?", "길을 묻는 사람: 도서관에 가고 싶어요.", "길을 알려주는 사람: 함께 지도를 봅시다."],
            vi: ["Người hỏi đường: Tôi bị lạc đường.", "Người chỉ đường: Bạn muốn đi đâu?", "Người hỏi đường: Tôi muốn đi đến thư viện.", "Người chỉ đường: Chúng ta cùng xem bản đồ nhé."],
            tl: ["Taong nagtatanong: Naligaw po ako.", "Taong nagtuturo: Saan po kayo gustong pumunta?", "Taong nagtatanong: Gusto kong pumunta sa library.", "Taong nagtuturo: Tingnan po natin ang mapa nang magkasama."],
            id: ["Orang yang bertanya: Saya tersesat.", "Orang yang memberi arah: Anda ingin pergi ke mana?", "Orang yang bertanya: Saya ingin pergi ke perpustakaan.", "Orang yang memberi arah: Mari kita lihat peta bersama."],
            th: ["คนถามทาง: หลงทางค่ะ/ครับ", "คนบอกทาง: อยากไปที่ไหนคะ/ครับ", "คนถามทาง: อยากไปห้องสมุดค่ะ/ครับ", "คนบอกทาง: มาดูแผนที่ด้วยกันค่ะ/ครับ"],
            my: ["လမ်းမေးသူ: လမ်းပျောက်သွားပါတယ်။", "လမ်းညွှန်ပေးသူ: ဘယ်ကို သွားချင်ပါသလဲ။", "လမ်းမေးသူ: စာကြည့်တိုက်ကို သွားချင်ပါတယ်။", "လမ်းညွှန်ပေးသူ: အတူတူ မြေပုံကြည့်ကြရအောင်။"],
            km: ["អ្នកសួរផ្លូវ: ខ្ញុំវង្វេងផ្លូវ។", "អ្នកប្រាប់ផ្លូវ: តើអ្នកចង់ទៅណា?", "អ្នកសួរផ្លូវ: ខ្ញុំចង់ទៅបណ្ណាល័យ។", "អ្នកប្រាប់ផ្លូវ: តោះមើលផែនទីជាមួយគ្នា។"],
            ne: ["बाटो सोध्ने व्यक्ति: म बाटो हराएँ।", "बाटो बताउने व्यक्ति: तपाईं कहाँ जान चाहनुहुन्छ?", "बाटो सोध्ने व्यक्ति: म पुस्तकालय जान चाहन्छु।", "बाटो बताउने व्यक्ति: सँगै नक्सा हेरौं।"],
            mn: ["Зам асууж буй хүн: Би замаа төөрчихлөө.", "Зам зааж өгөх хүн: Та хаашаа явахыг хүсэж байна?", "Зам асууж буй хүн: Би номын сан руу явмаар байна.", "Зам зааж өгөх хүн: Хамтдаа газрын зураг харцгаая."],
            si: ["මාර්ගය අසන පුද්ගලයා: මම මාර්ගය වැරදුණා.", "මාර්ගය කියන පුද්ගලයා: ඔබ කොහෙට යන්න ඕනේද?", "මාර්ගය අසන පුද්ගලයා: මට පුස්තකාලයට යන්න ඕනේ.", "මාර්ගය කියන පුද්ගලයා: අපි එකට සිතියම බලමු."],
            bn: ["রাস্তা জিজ্ঞেস করা ব্যক্তি: আমি রাস্তা হারিয়েছি।", "রাস্তা দেখানো ব্যক্তি: আপনি কোথায় যেতে চান?", "রাস্তা জিজ্ঞেস করা ব্যক্তি: আমি লাইব্রেরিতে যেতে চাই।", "রাস্তা দেখানো ব্যক্তি: চলুন একসাথে মানচিত্র দেখি।"],
            pt: ["Pessoa que pergunta: Estou perdido.", "Pessoa que dá informações: Para onde você quer ir?", "Pessoa que pergunta: Quero ir à biblioteca.", "Pessoa que dá informações: Vamos olhar o mapa juntos."],
            es: ["Persona que pregunta: Estoy perdido.", "Persona que da indicaciones: ¿A dónde quiere ir?", "Persona que pregunta: Quiero ir a la biblioteca.", "Persona que da indicaciones: Veamos el mapa juntos."],
            fr: ["Personne qui demande : Je suis perdu.", "Personne qui indique le chemin : Où voulez-vous aller ?", "Personne qui demande : Je veux aller à la bibliothèque.", "Personne qui indique le chemin : Regardons la carte ensemble."],
            ru: ["Спрашивающий: Я заблудился.", "Местный житель: Куда вы хотите пойти?", "Спрашивающий: Я хочу пойти в библиотеку.", "Местный житель: Давайте посмотрим карту вместе."],
            uk: ["Людина, яка запитує: Я заблукав.", "Людина, яка підказує: Куди ви хочете піти?", "Людина, яка запитує: Я хочу піти до бібліотеки.", "Людина, яка підказує: Давайте подивимося карту разом."]
        }
    ),

    makeA1AskDirectionsDialogue(
        "a1_direction_007",
        "バス停を探す",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "バス停を探しています。",
                target: "ばすていをさがしています",
                ruby: "バス<ruby>停<rt>てい</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しています。",
                romaji: "Basu-tei o sagashite imasu."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "あの建物の前にあります。",
                target: "あのたてもののまえにあります",
                ruby: "あの<ruby>建物<rt>たてもの</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>にあります。",
                romaji: "Ano tatemono no mae ni arimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "あの茶色い建物ですか。",
                target: "あのちゃいろいたてものですか",
                ruby: "あの<ruby>茶色<rt>ちゃいろ</rt></ruby>い<ruby>建物<rt>たてもの</rt></ruby>ですか。",
                romaji: "Ano chairoi tatemono desu ka."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "はい、そうです。",
                target: "はい そうです",
                ruby: "はい、そうです。",
                romaji: "Hai, sō desu."
            }
        ],
        {
            ja: ["道を聞く人：バス停を探しています。", "案内する人：あの建物の前にあります。", "道を聞く人：あの茶色い建物ですか。", "案内する人：はい、そうです。"],
            en: ["Person Asking: I am looking for a bus stop.", "Local Person: It is in front of that building.", "Person Asking: That brown building?", "Local Person: Yes, that’s right."],
            "zh-CN": ["问路的人：我在找公交站。", "指路的人：在那栋建筑前面。", "问路的人：那栋棕色的建筑吗？", "指路的人：是的，没错。"],
            "zh-TW": ["問路的人：我在找公車站。", "指路的人：在那棟建築前面。", "問路的人：那棟棕色的建築嗎？", "指路的人：是的，沒錯。"],
            ko: ["길을 묻는 사람: 버스 정류장을 찾고 있어요.", "길을 알려주는 사람: 저 건물 앞에 있습니다.", "길을 묻는 사람: 저 갈색 건물인가요?", "길을 알려주는 사람: 네, 맞습니다."],
            vi: ["Người hỏi đường: Tôi đang tìm trạm xe buýt.", "Người chỉ đường: Nó ở trước tòa nhà kia.", "Người hỏi đường: Tòa nhà màu nâu kia phải không ạ?", "Người chỉ đường: Vâng, đúng vậy."],
            tl: ["Taong nagtatanong: Hinahanap ko po ang bus stop.", "Taong nagtuturo: Nasa harap po ng building na iyon.", "Taong nagtatanong: Yung brown na building po ba?", "Taong nagtuturo: Oo, tama po."],
            id: ["Orang yang bertanya: Saya sedang mencari halte bus.", "Orang yang memberi arah: Ada di depan gedung itu.", "Orang yang bertanya: Gedung cokelat itu?", "Orang yang memberi arah: Ya, benar."],
            th: ["คนถามทาง: กำลังหาป้ายรถบัสค่ะ/ครับ", "คนบอกทาง: อยู่หน้าตึกนั้นค่ะ/ครับ", "คนถามทาง: ตึกสีน้ำตาลนั้นใช่ไหมคะ/ครับ", "คนบอกทาง: ใช่ค่ะ/ครับ"],
            my: ["လမ်းမေးသူ: ဘတ်စ်ကားမှတ်တိုင်ကို ရှာနေပါတယ်။", "လမ်းညွှန်ပေးသူ: အဲဒီအဆောက်အအုံရှေ့မှာ ရှိပါတယ်။", "လမ်းမေးသူ: အဲဒီအညိုရောင်အဆောက်အအုံပါလား။", "လမ်းညွှန်ပေးသူ: ဟုတ်ပါတယ်။"],
            km: ["អ្នកសួរផ្លូវ: ខ្ញុំកំពុងរកចំណតឡានក្រុង។", "អ្នកប្រាប់ផ្លូវ: នៅមុខអគារនោះ។", "អ្នកសួរផ្លូវ: អគារពណ៌ត្នោតនោះមែនទេ?", "អ្នកប្រាប់ផ្លូវ: បាទ/ចាស មែនហើយ។"],
            ne: ["बाटो सोध्ने व्यक्ति: म बस स्टप खोज्दै छु।", "बाटो बताउने व्यक्ति: त्यो भवनको अगाडि छ।", "बाटो सोध्ने व्यक्ति: त्यो खैरो भवन हो?", "बाटो बताउने व्यक्ति: हो, त्यही हो।"],
            mn: ["Зам асууж буй хүн: Би автобусны буудал хайж байна.", "Зам зааж өгөх хүн: Тэр барилгын урд байгаа.", "Зам асууж буй хүн: Тэр бор барилга уу?", "Зам зааж өгөх хүн: Тийм, зөв."],
            si: ["මාර්ගය අසන පුද්ගලයා: මම බස් නැවතුමක් සොයනවා.", "මාර්ගය කියන පුද්ගලයා: අර ගොඩනැගිල්ල ඉස්සරහ තියෙනවා.", "මාර්ගය අසන පුද්ගලයා: අර දුඹුරු ගොඩනැගිල්ලද?", "මාර්ගය කියන පුද්ගලයා: ඔව්, ඒකයි."],
            bn: ["রাস্তা জিজ্ঞেস করা ব্যক্তি: আমি বাস স্টপ খুঁজছি।", "রাস্তা দেখানো ব্যক্তি: ওই ভবনের সামনে আছে।", "রাস্তা জিজ্ঞেস করা ব্যক্তি: ওই বাদামি ভবনটি?", "রাস্তা দেখানো ব্যক্তি: হ্যাঁ, ঠিক।"],
            pt: ["Pessoa que pergunta: Estou procurando o ponto de ônibus.", "Pessoa que dá informações: Fica em frente àquele prédio.", "Pessoa que pergunta: Aquele prédio marrom?", "Pessoa que dá informações: Sim, isso mesmo."],
            es: ["Persona que pregunta: Estoy buscando la parada de autobús.", "Persona que da indicaciones: Está frente a ese edificio.", "Persona que pregunta: ¿Ese edificio marrón?", "Persona que da indicaciones: Sí, así es."],
            fr: ["Personne qui demande : Je cherche l’arrêt de bus.", "Personne qui indique le chemin : Il est devant ce bâtiment.", "Personne qui demande : Ce bâtiment marron ?", "Personne qui indique le chemin : Oui, c’est ça."],
            ru: ["Спрашивающий: Я ищу автобусную остановку.", "Местный житель: Она перед тем зданием.", "Спрашивающий: Перед тем коричневым зданием?", "Местный житель: Да, верно."],
            uk: ["Людина, яка запитує: Я шукаю автобусну зупинку.", "Людина, яка підказує: Вона перед тією будівлею.", "Людина, яка запитує: Перед тією коричневою будівлею?", "Людина, яка підказує: Так, правильно."]
        }
    ),

    makeA1AskDirectionsDialogue(
        "a1_direction_008",
        "入口を聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "市民センターの入口はどこですか。",
                target: "しみんせんたーのいりぐちはどこですか",
                ruby: "<ruby>市民<rt>しみん</rt></ruby>センターの<ruby>入口<rt>いりぐち</rt></ruby>はどこですか。",
                romaji: "Shimin sentā no iriguchi wa doko desu ka."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "建物の裏側です。",
                target: "たてもののうらがわです",
                ruby: "<ruby>建物<rt>たてもの</rt></ruby>の<ruby>裏側<rt>うらがわ</rt></ruby>です。",
                romaji: "Tatemono no uragawa desu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "道を聞く人",
                line: "裏側ですね。",
                target: "うらがわですね",
                ruby: "<ruby>裏側<rt>うらがわ</rt></ruby>ですね。",
                romaji: "Uragawa desu ne."
            },
            {
                label: "話者A",
                key: "local",
                name: "案内する人",
                line: "はい、看板があります。",
                target: "はい かんばんがあります",
                ruby: "はい、<ruby>看板<rt>かんばん</rt></ruby>があります。",
                romaji: "Hai, kanban ga arimasu."
            }
        ],
        {
            ja: ["道を聞く人：市民センターの入口はどこですか。", "案内する人：建物の裏側です。", "道を聞く人：裏側ですね。", "案内する人：はい、看板があります。"],
            en: ["Person Asking: Where is the entrance to the community center?", "Local Person: It is at the back of the building.", "Person Asking: At the back, right?", "Local Person: Yes, there is a sign."],
            "zh-CN": ["问路的人：市民中心的入口在哪里？", "指路的人：在建筑物的后面。", "问路的人：后面，对吗？", "指路的人：是的，有招牌。"],
            "zh-TW": ["問路的人：市民中心的入口在哪裡？", "指路的人：在建築物的後面。", "問路的人：後面，對嗎？", "指路的人：是的，有招牌。"],
            ko: ["길을 묻는 사람: 시민 센터 입구는 어디인가요?", "길을 알려주는 사람: 건물 뒤쪽입니다.", "길을 묻는 사람: 뒤쪽이죠?", "길을 알려주는 사람: 네, 간판이 있습니다."],
            vi: ["Người hỏi đường: Lối vào trung tâm cộng đồng ở đâu ạ?", "Người chỉ đường: Ở phía sau tòa nhà.", "Người hỏi đường: Phía sau đúng không ạ?", "Người chỉ đường: Vâng, có biển hiệu."],
            tl: ["Taong nagtatanong: Saan po ang entrance ng community center?", "Taong nagtuturo: Nasa likod po ng building.", "Taong nagtatanong: Sa likod po, tama?", "Taong nagtuturo: Oo, may signboard po."],
            id: ["Orang yang bertanya: Di mana pintu masuk pusat masyarakat?", "Orang yang memberi arah: Di belakang gedung.", "Orang yang bertanya: Di belakang ya?", "Orang yang memberi arah: Ya, ada papan petunjuk."],
            th: ["คนถามทาง: ทางเข้า civic center อยู่ที่ไหนคะ/ครับ", "คนบอกทาง: อยู่ด้านหลังอาคารค่ะ/ครับ", "คนถามทาง: ด้านหลังนะคะ/ครับ", "คนบอกทาง: ใช่ค่ะ/ครับ มีป้ายค่ะ/ครับ"],
            my: ["လမ်းမေးသူ: ပြည်သူ့စင်တာဝင်ပေါက်က ဘယ်မှာပါလဲ။", "လမ်းညွှန်ပေးသူ: အဆောက်အအုံနောက်ဘက်မှာပါ။", "လမ်းမေးသူ: နောက်ဘက်နော်။", "လမ်းညွှန်ပေးသူ: ဟုတ်ပါတယ်၊ ဆိုင်းဘုတ်ရှိပါတယ်။"],
            km: ["អ្នកសួរផ្លូវ: ច្រកចូលមជ្ឈមណ្ឌលសហគមន៍នៅឯណា?", "អ្នកប្រាប់ផ្លូវ: នៅខាងក្រោយអគារ។", "អ្នកសួរផ្លូវ: ខាងក្រោយមែនទេ។", "អ្នកប្រាប់ផ្លូវ: បាទ/ចាស មានផ្លាកសញ្ញា។"],
            ne: ["बाटो सोध्ने व्यक्ति: नागरिक केन्द्रको प्रवेशद्वार कहाँ छ?", "बाटो बताउने व्यक्ति: भवनको पछाडि छ।", "बाटो सोध्ने व्यक्ति: पछाडि है?", "बाटो बताउने व्यक्ति: हो, साइनबोर्ड छ।"],
            mn: ["Зам асууж буй хүн: Иргэдийн төвийн орц хаана байна вэ?", "Зам зааж өгөх хүн: Барилгын ар талд.", "Зам асууж буй хүн: Ар талд, тийм үү?", "Зам зааж өгөх хүн: Тийм, самбар байгаа."],
            si: ["මාර්ගය අසන පුද්ගලයා: ප්‍රජා මධ්‍යස්ථානයේ ඇතුල්වීම කොහෙද?", "මාර්ගය කියන පුද්ගලයා: ගොඩනැගිල්ලේ පිටුපසයි.", "මාර්ගය අසන පුද්ගලයා: පිටුපස නේද?", "මාර්ගය කියන පුද්ගලයා: ඔව්, පුවරුවක් තියෙනවා."],
            bn: ["রাস্তা জিজ্ঞেস করা ব্যক্তি: কমিউনিটি সেন্টারের প্রবেশদ্বার কোথায়?", "রাস্তা দেখানো ব্যক্তি: ভবনের পেছনে।", "রাস্তা জিজ্ঞেস করা ব্যক্তি: পেছনে, তাই তো?", "রাস্তা দেখানো ব্যক্তি: হ্যাঁ, সাইনবোর্ড আছে।"],
            pt: ["Pessoa que pergunta: Onde fica a entrada do centro comunitário?", "Pessoa que dá informações: Fica atrás do prédio.", "Pessoa que pergunta: Atrás, certo?", "Pessoa que dá informações: Sim, há uma placa."],
            es: ["Persona que pregunta: ¿Dónde está la entrada del centro comunitario?", "Persona que da indicaciones: Está detrás del edificio.", "Persona que pregunta: Detrás, ¿verdad?", "Persona que da indicaciones: Sí, hay un letrero."],
            fr: ["Personne qui demande : Où est l’entrée du centre communautaire ?", "Personne qui indique le chemin : Elle est derrière le bâtiment.", "Personne qui demande : Derrière, c’est bien ça ?", "Personne qui indique le chemin : Oui, il y a un panneau."],
            ru: ["Спрашивающий: Где вход в общественный центр?", "Местный житель: Сзади здания.", "Спрашивающий: Сзади, верно?", "Местный житель: Да, там есть вывеска."],
            uk: ["Людина, яка запитує: Де вхід до громадського центру?", "Людина, яка підказує: Ззаду будівлі.", "Людина, яка запитує: Ззаду, так?", "Людина, яка підказує: Так, там є вивіска."]
        }
    )

];