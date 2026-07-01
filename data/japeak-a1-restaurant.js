// =====================================================
// Japeak A1 Level
// Scene: レストランへ行ってみよう
// Category Key: a1_restaurant
// =====================================================

const a1RestaurantContext = {
    ja: "レストランで入店、席、メニュー、注文、食事の希望、会計について話す練習です。",
    en: "Practice speaking at a restaurant, including entering, seating, menus, ordering, food preferences, and payment.",
    "zh-CN": "练习在餐厅入店、选座、看菜单、点餐、表达饮食需求和结账。",
    "zh-TW": "練習在餐廳入店、選座、看菜單、點餐、表達飲食需求和結帳。",
    ko: "식당에서 입장, 좌석, 메뉴, 주문, 음식 요청, 계산을 말하는 연습입니다.",
    vi: "Luyện nói tại nhà hàng: vào quán, chỗ ngồi, thực đơn, gọi món, yêu cầu về món ăn và thanh toán.",
    tl: "Practice sa pagsasalita sa restaurant: pagpasok, upuan, menu, order, pagkain, at bayad.",
    id: "Latihan berbicara di restoran: masuk, tempat duduk, menu, pesanan, kebutuhan makanan, dan pembayaran.",
    th: "ฝึกพูดในร้านอาหาร เช่น เข้าร้าน ที่นั่ง เมนู สั่งอาหาร ความต้องการเรื่องอาหาร และการจ่ายเงิน",
    my: "စားသောက်ဆိုင်တွင် ဝင်ရောက်ခြင်း၊ ထိုင်ခုံ၊ မီနူး၊ အမှာစာ၊ အစားအသောက်လိုအပ်ချက်နှင့် ငွေပေးချေမှုကို ပြောရန် လေ့ကျင့်ခြင်း။",
    km: "ហាត់និយាយនៅភោជនីយដ្ឋាន អំពីការចូលហាង កន្លែងអង្គុយ មឺនុយ ការកម្មង់ម្ហូប តម្រូវការអាហារ និងការបង់ប្រាក់។",
    ne: "रेस्टुरेन्टमा प्रवेश, सिट, मेनु, अर्डर, खानेकुराको चाहना र भुक्तानीबारे बोल्ने अभ्यास।",
    mn: "Ресторанд орох, суудал, цэс, захиалга, хоолны хүсэлт, төлбөрийн талаар ярих дадлага.",
    si: "අවන්හලක ඇතුළු වීම, අසුන් ගැනීම, මෙනුව, ඇණවුම් කිරීම, ආහාර අවශ්‍යතා සහ ගෙවීම පිළිබඳව කතා කරන පුහුණුවකි.",
    bn: "রেস্টুরেন্টে ঢোকা, বসার জায়গা, মেনু, অর্ডার, খাবারের প্রয়োজন এবং পেমেন্ট নিয়ে কথা বলার অনুশীলন।",
    pt: "Prática para falar em um restaurante: entrada, assentos, cardápio, pedido, preferências alimentares e pagamento.",
    es: "Práctica para hablar en un restaurante: entrada, asientos, menú, pedido, preferencias de comida y pago.",
    fr: "Entraînement pour parler au restaurant : entrée, place, menu, commande, préférences alimentaires et paiement.",
    ru: "Практика общения в ресторане: вход, места, меню, заказ, пожелания к еде и оплата.",
    uk: "Практика спілкування в ресторані: вхід, місця, меню, замовлення, побажання щодо їжі та оплата."
};

const a1RestaurantSpeakerNames = {
    staff: {
        ja: "店員", en: "Staff", "zh-CN": "店员", "zh-TW": "店員", ko: "직원",
        vi: "Nhân viên", tl: "Staff", id: "Staf", th: "พนักงาน",
        my: "ဝန်ထမ်း", km: "បុគ្គលិក", ne: "कर्मचारी", mn: "Ажилтан",
        si: "සේවකයා", bn: "কর্মী", pt: "Funcionário", es: "Empleado",
        fr: "Employé", ru: "Сотрудник", uk: "Працівник"
    },
    customer: {
        ja: "客", en: "Customer", "zh-CN": "顾客", "zh-TW": "顧客", ko: "손님",
        vi: "Khách", tl: "Customer", id: "Pelanggan", th: "ลูกค้า",
        my: "ဖောက်သည်", km: "អតិថិជន", ne: "ग्राहक", mn: "Үйлчлүүлэгч",
        si: "පාරිභෝගිකයා", bn: "গ্রাহক", pt: "Cliente", es: "Cliente",
        fr: "Client", ru: "Посетитель", uk: "Відвідувач"
    }
};

function makeA1RestaurantDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a1_restaurant",
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
            speakerNames: a1RestaurantSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a1RestaurantContext,
        translations,
        dialogueTranslations
    };
}

const japeakA1RestaurantData = [

    makeA1RestaurantDialogue(
        "a1_restaurant_001",
        "予約していません",
        [
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "ご予約はありますか。",
                target: "ごよやくはありますか",
                ruby: "ご<ruby>予約<rt>よやく</rt></ruby>はありますか。",
                romaji: "Go-yoyaku wa arimasu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "いいえ、予約していません。",
                target: "いいえ よやくしていません",
                ruby: "いいえ、<ruby>予約<rt>よやく</rt></ruby>していません。",
                romaji: "Iie, yoyaku shite imasen."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "何名様ですか。",
                target: "なんめいさまですか",
                ruby: "<ruby>何名様<rt>なんめいさま</rt></ruby>ですか。",
                romaji: "Nanmei-sama desu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "二人です。",
                target: "ふたりです",
                ruby: "<ruby>二人<rt>ふたり</rt></ruby>です。",
                romaji: "Futari desu."
            }
        ],
        {
            ja: ["店員：ご予約はありますか。", "客：いいえ、予約していません。", "店員：何名様ですか。", "客：二人です。"],
            en: ["Staff: Do you have a reservation?", "Customer: No, I do not have a reservation.", "Staff: How many people?", "Customer: Two people."],
            "zh-CN": ["店员：您有预约吗？", "顾客：没有，我没有预约。", "店员：几位？", "顾客：两位。"],
            "zh-TW": ["店員：您有預約嗎？", "顧客：沒有，我沒有預約。", "店員：幾位？", "顧客：兩位。"],
            ko: ["직원: 예약이 있으신가요?", "손님: 아니요, 예약하지 않았습니다.", "직원: 몇 분이세요?", "손님: 두 명입니다."],
            vi: ["Nhân viên: Quý khách có đặt chỗ không ạ?", "Khách: Không, tôi chưa đặt chỗ.", "Nhân viên: Mấy người ạ?", "Khách: Hai người."],
            tl: ["Staff: May reservation po ba kayo?", "Customer: Wala po, wala akong reservation.", "Staff: Ilan po kayo?", "Customer: Dalawa po."],
            id: ["Staf: Apakah Anda memiliki reservasi?", "Pelanggan: Tidak, saya tidak memiliki reservasi.", "Staf: Berapa orang?", "Pelanggan: Dua orang."],
            th: ["พนักงาน: ได้จองไว้ไหมคะ/ครับ", "ลูกค้า: ไม่ได้จองค่ะ/ครับ", "พนักงาน: กี่ท่านคะ/ครับ", "ลูกค้า: สองคนค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ကြိုတင်မှာထားပါသလား။", "ဖောက်သည်: မဟုတ်ပါ၊ ကြိုတင်မမှာထားပါ။", "ဝန်ထမ်း: လူဘယ်နှစ်ယောက်ပါသလဲ။", "ဖောက်သည်: နှစ်ယောက်ပါ။"],
            km: ["បុគ្គលិក: តើបានកក់ទុកទេ?", "អតិថិជន: ទេ ខ្ញុំមិនបានកក់ទុកទេ។", "បុគ្គលិក: ប៉ុន្មាននាក់?", "អតិថិជន: ពីរនាក់។"],
            ne: ["कर्मचारी: के तपाईंले आरक्षण गर्नुभएको छ?", "ग्राहक: छैन, आरक्षण गरेको छैन।", "कर्मचारी: कति जना हुनुहुन्छ?", "ग्राहक: दुई जना।"],
            mn: ["Ажилтан: Захиалга байгаа юу?", "Үйлчлүүлэгч: Үгүй, захиалга хийгээгүй.", "Ажилтан: Хэдэн хүн бэ?", "Үйлчлүүлэгч: Хоёр хүн."],
            si: ["සේවකයා: ඔබට වෙන් කිරීමක් තිබේද?", "පාරිභෝගිකයා: නැහැ, වෙන් කරලා නැහැ.", "සේවකයා: කී දෙනෙක්ද?", "පාරිභෝගිකයා: දෙන්නෙක්."],
            bn: ["কর্মী: আপনার কি রিজার্ভেশন আছে?", "গ্রাহক: না, রিজার্ভেশন করিনি।", "কর্মী: কয়জন?", "গ্রাহক: দুইজন।"],
            pt: ["Funcionário: Você tem reserva?", "Cliente: Não, não fiz reserva.", "Funcionário: Quantas pessoas?", "Cliente: Duas pessoas."],
            es: ["Empleado: ¿Tiene reserva?", "Cliente: No, no tengo reserva.", "Empleado: ¿Cuántas personas?", "Cliente: Dos personas."],
            fr: ["Employé : Avez-vous une réservation ?", "Client : Non, je n’ai pas réservé.", "Employé : Combien de personnes ?", "Client : Deux personnes."],
            ru: ["Сотрудник: У вас есть бронь?", "Посетитель: Нет, я не бронировал.", "Сотрудник: Сколько человек?", "Посетитель: Два человека."],
            uk: ["Працівник: У вас є бронювання?", "Відвідувач: Ні, я не бронював.", "Працівник: Скільки людей?", "Відвідувач: Двоє."]
        }
    ),

    makeA1RestaurantDialogue(
        "a1_restaurant_002",
        "席の希望を伝える",
        [
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "テーブル席とカウンター席がございます。",
                target: "てーぶるせきとかうんたーせきがございます",
                ruby: "テーブル<ruby>席<rt>せき</rt></ruby>とカウンター<ruby>席<rt>せき</rt></ruby>がございます。",
                romaji: "Tēburu-seki to kauntā-seki ga gozaimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "テーブル席がいいです。",
                target: "てーぶるせきがいいです",
                ruby: "テーブル<ruby>席<rt>せき</rt></ruby>がいいです。",
                romaji: "Tēburu-seki ga ii desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "では、こちらへどうぞ。",
                target: "では こちらへどうぞ",
                ruby: "では、こちらへどうぞ。",
                romaji: "Dewa, kochira e dōzo."
            }
        ],
        {
            ja: ["店員：テーブル席とカウンター席がございます。", "客：テーブル席がいいです。", "店員：では、こちらへどうぞ。"],
            en: ["Staff: We have table seats and counter seats.", "Customer: I prefer a table seat.", "Staff: Then, this way please."],
            "zh-CN": ["店员：有桌位和吧台位。", "顾客：我想坐桌位。", "店员：那么，请往这边。"],
            "zh-TW": ["店員：有桌位和吧台位。", "顧客：我想坐桌位。", "店員：那麼，請往這邊。"],
            ko: ["직원: 테이블석과 카운터석이 있습니다.", "손님: 테이블석이 좋습니다.", "직원: 그럼 이쪽으로 오세요."],
            vi: ["Nhân viên: Có chỗ bàn và chỗ quầy ạ.", "Khách: Tôi muốn chỗ bàn.", "Nhân viên: Vậy xin mời đi lối này."],
            tl: ["Staff: May table seats at counter seats po.", "Customer: Gusto ko po ng table seat.", "Staff: Sige po, dito po kayo."],
            id: ["Staf: Ada tempat duduk meja dan tempat duduk counter.", "Pelanggan: Saya ingin tempat duduk meja.", "Staf: Baik, silakan ke sini."],
            th: ["พนักงาน: มีที่นั่งโต๊ะและที่นั่งเคาน์เตอร์ค่ะ/ครับ", "ลูกค้า: อยากได้ที่นั่งโต๊ะค่ะ/ครับ", "พนักงาน: งั้นเชิญทางนี้ค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: စားပွဲထိုင်ခုံနဲ့ ကောင်တာထိုင်ခုံ ရှိပါတယ်။", "ဖောက်သည်: စားပွဲထိုင်ခုံကောင်းပါတယ်။", "ဝန်ထမ်း: ဒါဆို ဒီဘက်ကို ကြွပါ။"],
            km: ["បុគ្គលិក: មានកន្លែងអង្គុយតុ និងកន្លែងអង្គុយកោនធ័រ។", "អតិថិជន: ខ្ញុំចង់បានកន្លែងអង្គុយតុ។", "បុគ្គលិក: ដូច្នេះ សូមអញ្ជើញមកខាងនេះ។"],
            ne: ["कर्मचारी: टेबल सिट र काउन्टर सिट छन्।", "ग्राहक: मलाई टेबल सिट राम्रो लाग्छ।", "कर्मचारी: त्यसो भए, यता आउनुहोस्।"],
            mn: ["Ажилтан: Ширээний болон каунтерийн суудал байна.", "Үйлчлүүлэгч: Ширээний суудал байвал сайн.", "Ажилтан: Тэгвэл наашаа яваарай."],
            si: ["සේවකයා: මේස අසුන් සහ කවුන්ටර් අසුන් තියෙනවා.", "පාරිභෝගිකයා: මට මේස අසුනක් හොඳයි.", "සේවකයා: එහෙනම් මෙතනින් එන්න."],
            bn: ["কর্মী: টেবিল সিট আর কাউন্টার সিট আছে।", "গ্রাহক: আমি টেবিল সিট চাই।", "কর্মী: তাহলে এদিকে আসুন।"],
            pt: ["Funcionário: Temos mesas e balcão.", "Cliente: Prefiro uma mesa.", "Funcionário: Então, por aqui, por favor."],
            es: ["Empleado: Tenemos mesas y asientos en la barra.", "Cliente: Prefiero una mesa.", "Empleado: Entonces, por aquí, por favor."],
            fr: ["Employé : Nous avons des tables et des places au comptoir.", "Client : Je préfère une table.", "Employé : Alors, par ici, s’il vous plaît."],
            ru: ["Сотрудник: Есть места за столом и у стойки.", "Посетитель: Я предпочитаю столик.", "Сотрудник: Тогда пройдите сюда, пожалуйста."],
            uk: ["Працівник: Є місця за столом і біля стійки.", "Відвідувач: Я хочу місце за столом.", "Працівник: Тоді пройдіть сюди, будь ласка."]
        }
    ),

    makeA1RestaurantDialogue(
        "a1_restaurant_003",
        "メニューを見る",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "メニューを見てもいいですか。",
                target: "めにゅーをみてもいいですか",
                ruby: "メニューを<ruby>見<rt>み</rt></ruby>てもいいですか。",
                romaji: "Menyū o mite mo ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、どうぞ。",
                target: "はい どうぞ",
                ruby: "はい、どうぞ。",
                romaji: "Hai, dōzo."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "少し考えます。",
                target: "すこしかんがえます",
                ruby: "<ruby>少<rt>すこ</rt></ruby>し<ruby>考<rt>かんが</rt></ruby>えます。",
                romaji: "Sukoshi kangaemasu."
            }
        ],
        {
            ja: ["客：メニューを見てもいいですか。", "店員：はい、どうぞ。", "客：少し考えます。"],
            en: ["Customer: May I look at the menu?", "Staff: Yes, please.", "Customer: I will think for a moment."],
            "zh-CN": ["顾客：可以看一下菜单吗？", "店员：好的，请看。", "顾客：我想一下。"],
            "zh-TW": ["顧客：可以看一下菜單嗎？", "店員：好的，請看。", "顧客：我想一下。"],
            ko: ["손님: 메뉴를 봐도 될까요?", "직원: 네, 여기 있습니다.", "손님: 조금 생각하겠습니다."],
            vi: ["Khách: Tôi có thể xem thực đơn không ạ?", "Nhân viên: Vâng, xin mời.", "Khách: Tôi sẽ suy nghĩ một chút."],
            tl: ["Customer: Pwede ko po bang tingnan ang menu?", "Staff: Oo, heto po.", "Customer: Mag-iisip muna po ako."],
            id: ["Pelanggan: Boleh saya lihat menunya?", "Staf: Ya, silakan.", "Pelanggan: Saya akan berpikir sebentar."],
            th: ["ลูกค้า: ขอดูเมนูได้ไหมคะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ เชิญค่ะ/ครับ", "ลูกค้า: ขอคิดสักครู่ค่ะ/ครับ"],
            my: ["ဖောက်သည်: မီနူးကို ကြည့်လို့ရပါသလား။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ ကြည့်ပါ။", "ဖောက်သည်: ခဏစဉ်းစားပါမယ်။"],
            km: ["អតិថិជន: ខ្ញុំអាចមើលមឺនុយបានទេ?", "បុគ្គលិក: បាន សូមមើល។", "អតិថិជន: ខ្ញុំគិតបន្តិចសិន។"],
            ne: ["ग्राहक: मेनु हेर्न मिल्छ?", "कर्मचारी: हुन्छ, हेर्नुहोस्।", "ग्राहक: म अलि सोच्छु।"],
            mn: ["Үйлчлүүлэгч: Цэс үзэж болох уу?", "Ажилтан: Тийм, авна уу.", "Үйлчлүүлэгч: Түр бодъё."],
            si: ["පාරිභෝගිකයා: මෙනුව බලන්න පුළුවන්ද?", "සේවකයා: ඔව්, බලන්න.", "පාරිභෝගිකයා: මම ටිකක් හිතන්නම්."],
            bn: ["গ্রাহক: মেনুটা দেখতে পারি?", "কর্মী: হ্যাঁ, দেখুন।", "গ্রাহক: আমি একটু ভাবছি।"],
            pt: ["Cliente: Posso ver o cardápio?", "Funcionário: Sim, aqui está.", "Cliente: Vou pensar um pouco."],
            es: ["Cliente: ¿Puedo ver el menú?", "Empleado: Sí, aquí tiene.", "Cliente: Voy a pensarlo un momento."],
            fr: ["Client : Puis-je voir le menu ?", "Employé : Oui, voici.", "Client : Je vais réfléchir un peu."],
            ru: ["Посетитель: Можно посмотреть меню?", "Сотрудник: Да, пожалуйста.", "Посетитель: Я немного подумаю."],
            uk: ["Відвідувач: Можна подивитися меню?", "Працівник: Так, будь ласка.", "Відвідувач: Я трохи подумаю."]
        }
    ),

    makeA1RestaurantDialogue(
        "a1_restaurant_004",
        "注文する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "注文してもいいですか。",
                target: "ちゅうもんしてもいいですか",
                ruby: "<ruby>注文<rt>ちゅうもん</rt></ruby>してもいいですか。",
                romaji: "Chūmon shite mo ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、お伺いします。",
                target: "はい おうかがいします",
                ruby: "はい、お<ruby>伺<rt>うかが</rt></ruby>いします。",
                romaji: "Hai, oukagai shimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "この定食にします。",
                target: "このていしょくにします",
                ruby: "この<ruby>定食<rt>ていしょく</rt></ruby>にします。",
                romaji: "Kono teishoku ni shimasu."
            }
        ],
        {
            ja: ["客：注文してもいいですか。", "店員：はい、お伺いします。", "客：この定食にします。"],
            en: ["Customer: May I order?", "Staff: Yes, I will take your order.", "Customer: I will have this set meal."],
            "zh-CN": ["顾客：可以点餐吗？", "店员：好的，请说。", "顾客：我要这个套餐。"],
            "zh-TW": ["顧客：可以點餐嗎？", "店員：好的，請說。", "顧客：我要這個套餐。"],
            ko: ["손님: 주문해도 될까요?", "직원: 네, 주문 받겠습니다.", "손님: 이 정식으로 하겠습니다."],
            vi: ["Khách: Tôi có thể gọi món không ạ?", "Nhân viên: Vâng, tôi xin nghe ạ.", "Khách: Tôi chọn suất ăn này."],
            tl: ["Customer: Pwede na po ba akong umorder?", "Staff: Oo, kukunin ko po ang order ninyo.", "Customer: Ito pong set meal ang kukunin ko."],
            id: ["Pelanggan: Boleh saya memesan?", "Staf: Ya, saya akan mencatat pesanan Anda.", "Pelanggan: Saya pilih set makanan ini."],
            th: ["ลูกค้า: สั่งอาหารได้ไหมคะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ รับออร์เดอร์ค่ะ/ครับ", "ลูกค้า: เอาชุดอาหารนี้ค่ะ/ครับ"],
            my: ["ဖောက်သည်: အော်ဒါမှာလို့ရပါသလား။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ အော်ဒါယူပါမယ်။", "ဖောက်သည်: ဒီဆက်မီနူးကို ယူပါမယ်။"],
            km: ["អតិថិជន: ខ្ញុំអាចកម្មង់បានទេ?", "បុគ្គលិក: បាន ខ្ញុំនឹងទទួលការកម្មង់។", "អតិថិជន: ខ្ញុំយកឈុតអាហារនេះ។"],
            ne: ["ग्राहक: अर्डर गर्न मिल्छ?", "कर्मचारी: हुन्छ, म अर्डर लिन्छु।", "ग्राहक: म यो सेट खाना लिन्छु।"],
            mn: ["Үйлчлүүлэгч: Захиалж болох уу?", "Ажилтан: Тийм, захиалгыг авъя.", "Үйлчлүүлэгч: Энэ сет хоолыг авъя."],
            si: ["පාරිභෝගිකයා: ඇණවුම් කරන්න පුළුවන්ද?", "සේවකයා: ඔව්, ඇණවුම ගන්නම්.", "පාරිභෝගිකයා: මම මේ කෑම සෙට් එක ගන්නවා."],
            bn: ["গ্রাহক: অর্ডার করতে পারি?", "কর্মী: হ্যাঁ, আমি অর্ডার নিচ্ছি।", "গ্রাহক: আমি এই সেট মিল নেব।"],
            pt: ["Cliente: Posso fazer o pedido?", "Funcionário: Sim, vou anotar.", "Cliente: Vou querer este prato combinado."],
            es: ["Cliente: ¿Puedo pedir?", "Empleado: Sí, le tomo el pedido.", "Cliente: Quiero este menú fijo."],
            fr: ["Client : Puis-je commander ?", "Employé : Oui, je vous écoute.", "Client : Je vais prendre ce menu."],
            ru: ["Посетитель: Можно сделать заказ?", "Сотрудник: Да, я приму заказ.", "Посетитель: Я возьму этот комплексный обед."],
            uk: ["Відвідувач: Можна замовити?", "Працівник: Так, я прийму замовлення.", "Відвідувач: Я візьму цей комплексний обід."]
        }
    ),

    makeA1RestaurantDialogue(
        "a1_restaurant_005",
        "苦手なものを抜いてもらう",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "ねぎを抜いてもらえますか。",
                target: "ねぎをぬいてもらえますか",
                ruby: "ねぎを<ruby>抜<rt>ぬ</rt></ruby>いてもらえますか。",
                romaji: "Negi o nuite moraemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、できます。",
                target: "はい できます",
                ruby: "はい、できます。",
                romaji: "Hai, dekimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "ありがとうございます。",
                target: "ありがとうございます",
                ruby: "ありがとうございます。",
                romaji: "Arigatō gozaimasu."
            }
        ],
        {
            ja: ["客：ねぎを抜いてもらえますか。", "店員：はい、できます。", "客：ありがとうございます。"],
            en: ["Customer: Could you leave out the green onions?", "Staff: Yes, we can.", "Customer: Thank you."],
            "zh-CN": ["顾客：可以不要放葱吗？", "店员：好的，可以。", "顾客：谢谢。"],
            "zh-TW": ["顧客：可以不要放蔥嗎？", "店員：好的，可以。", "顧客：謝謝。"],
            ko: ["손님: 파를 빼 주실 수 있나요?", "직원: 네, 가능합니다.", "손님: 감사합니다."],
            vi: ["Khách: Có thể bỏ hành lá ra giúp tôi không ạ?", "Nhân viên: Vâng, được ạ.", "Khách: Cảm ơn."],
            tl: ["Customer: Pwede po bang tanggalin ang green onions?", "Staff: Oo, pwede po.", "Customer: Salamat po."],
            id: ["Pelanggan: Bisa tanpa daun bawang?", "Staf: Ya, bisa.", "Pelanggan: Terima kasih."],
            th: ["ลูกค้า: ไม่ใส่ต้นหอมได้ไหมคะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ", "ลูกค้า: ขอบคุณค่ะ/ครับ"],
            my: ["ဖောက်သည်: ကြက်သွန်မြိတ် မထည့်ပေးလို့ရပါသလား။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ ရပါတယ်။", "ဖောက်သည်: ကျေးဇူးတင်ပါတယ်။"],
            km: ["អតិថិជន: អាចមិនដាក់ខ្ទឹមបារាំងបៃតងបានទេ?", "បុគ្គលិក: បាន។", "អតិថិជន: អរគុណ។"],
            ne: ["ग्राहक: हरियो प्याज नराखिदिन सक्नुहुन्छ?", "कर्मचारी: हुन्छ, सकिन्छ।", "ग्राहक: धन्यवाद।"],
            mn: ["Үйлчлүүлэгч: Ногоон сонгино хийхгүй байж болох уу?", "Ажилтан: Тийм, болно.", "Үйлчлүүлэгч: Баярлалаа."],
            si: ["පාරිභෝගිකයා: ලීක්ස් අයින් කරලා දෙන්න පුළුවන්ද?", "සේවකයා: ඔව්, පුළුවන්.", "පාරිභෝගිකයා: ස්තුතියි."],
            bn: ["গ্রাহক: পেঁয়াজপাতা বাদ দিতে পারবেন?", "কর্মী: হ্যাঁ, পারব।", "গ্রাহক: ধন্যবাদ।"],
            pt: ["Cliente: Poderia tirar a cebolinha?", "Funcionário: Sim, podemos.", "Cliente: Obrigado."],
            es: ["Cliente: ¿Podría quitar la cebolla verde?", "Empleado: Sí, podemos.", "Cliente: Gracias."],
            fr: ["Client : Pourriez-vous enlever les oignons verts ?", "Employé : Oui, c’est possible.", "Client : Merci."],
            ru: ["Посетитель: Можно без зелёного лука?", "Сотрудник: Да, можно.", "Посетитель: Спасибо."],
            uk: ["Відвідувач: Можна без зеленої цибулі?", "Працівник: Так, можна.", "Відвідувач: Дякую."]
        }
    ),

    makeA1RestaurantDialogue(
        "a1_restaurant_006",
        "豚肉が入っているか聞く",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "豚肉は入っていますか。",
                target: "ぶたにくははいっていますか",
                ruby: "<ruby>豚肉<rt>ぶたにく</rt></ruby>は<ruby>入<rt>はい</rt></ruby>っていますか。",
                romaji: "Butaniku wa haitte imasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "いいえ、入っていません。",
                target: "いいえ はいっていません",
                ruby: "いいえ、<ruby>入<rt>はい</rt></ruby>っていません。",
                romaji: "Iie, haitte imasen."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "では、これにします。",
                target: "では これにします",
                ruby: "では、これにします。",
                romaji: "Dewa, kore ni shimasu."
            }
        ],
        {
            ja: ["客：豚肉は入っていますか。", "店員：いいえ、入っていません。", "客：では、これにします。"],
            en: ["Customer: Does it contain pork?", "Staff: No, it does not.", "Customer: Then I will have this."],
            "zh-CN": ["顾客：里面有猪肉吗？", "店员：没有，不含猪肉。", "顾客：那我要这个。"],
            "zh-TW": ["顧客：裡面有豬肉嗎？", "店員：沒有，不含豬肉。", "顧客：那我要這個。"],
            ko: ["손님: 돼지고기가 들어 있나요?", "직원: 아니요, 들어 있지 않습니다.", "손님: 그럼 이것으로 하겠습니다."],
            vi: ["Khách: Món này có thịt heo không ạ?", "Nhân viên: Không, không có ạ.", "Khách: Vậy tôi chọn món này."],
            tl: ["Customer: May pork po ba ito?", "Staff: Wala po.", "Customer: Sige po, ito na lang."],
            id: ["Pelanggan: Apakah ada daging babi di dalamnya?", "Staf: Tidak, tidak ada.", "Pelanggan: Kalau begitu, saya pilih ini."],
            th: ["ลูกค้า: มีเนื้อหมูไหมคะ/ครับ", "พนักงาน: ไม่มีค่ะ/ครับ", "ลูกค้า: งั้นเอาอันนี้ค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဝက်သား ပါပါသလား။", "ဝန်ထမ်း: မပါပါ။", "ဖောက်သည်: ဒါဆို ဒီဟာကို ယူပါမယ်။"],
            km: ["អតិថិជន: មានសាច់ជ្រូកទេ?", "បុគ្គលិក: ទេ មិនមានទេ។", "អតិថិជន: ដូច្នេះ ខ្ញុំយកនេះ។"],
            ne: ["ग्राहक: यसमा सुँगुरको मासु छ?", "कर्मचारी: छैन, छैन।", "ग्राहक: त्यसो भए, म यो लिन्छु।"],
            mn: ["Үйлчлүүлэгч: Үүнд гахайн мах орсон уу?", "Ажилтан: Үгүй, ороогүй.", "Үйлчлүүлэгч: Тэгвэл үүнийг авъя."],
            si: ["පාරිභෝගිකයා: මේකේ ඌරු මස් තියෙනවද?", "සේවකයා: නැහැ, නැහැ.", "පාරිභෝගිකයා: එහෙනම් මේක ගන්නවා."],
            bn: ["গ্রাহক: এতে কি শূকরের মাংস আছে?", "কর্মী: না, নেই।", "গ্রাহক: তাহলে আমি এটা নেব।"],
            pt: ["Cliente: Tem carne de porco?", "Funcionário: Não, não tem.", "Cliente: Então vou querer este."],
            es: ["Cliente: ¿Tiene cerdo?", "Empleado: No, no tiene.", "Cliente: Entonces quiero este."],
            fr: ["Client : Y a-t-il du porc ?", "Employé : Non, il n’y en a pas.", "Client : Alors je vais prendre ceci."],
            ru: ["Посетитель: Здесь есть свинина?", "Сотрудник: Нет, свинины нет.", "Посетитель: Тогда я возьму это."],
            uk: ["Відвідувач: Тут є свинина?", "Працівник: Ні, свинини немає.", "Відвідувач: Тоді я візьму це."]
        }
    ),

    makeA1RestaurantDialogue(
        "a1_restaurant_007",
        "辛さを調整する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "辛くしないでください。",
                target: "からくしないでください",
                ruby: "<ruby>辛<rt>から</rt></ruby>くしないでください。",
                romaji: "Karaku shinaide kudasai."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、辛くしません。",
                target: "はい からくしません",
                ruby: "はい、<ruby>辛<rt>から</rt></ruby>くしません。",
                romaji: "Hai, karaku shimasen."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "助かります。",
                target: "たすかります",
                ruby: "<ruby>助<rt>たす</rt></ruby>かります。",
                romaji: "Tasukarimasu."
            }
        ],
        {
            ja: ["客：辛くしないでください。", "店員：はい、辛くしません。", "客：助かります。"],
            en: ["Customer: Please do not make it spicy.", "Staff: Yes, we will not make it spicy.", "Customer: That helps."],
            "zh-CN": ["顾客：请不要做辣。", "店员：好的，不做辣。", "顾客：太好了。"],
            "zh-TW": ["顧客：請不要做辣。", "店員：好的，不做辣。", "顧客：太好了。"],
            ko: ["손님: 맵게 하지 말아 주세요.", "직원: 네, 맵게 하지 않겠습니다.", "손님: 도움이 됩니다."],
            vi: ["Khách: Xin đừng làm cay ạ.", "Nhân viên: Vâng, sẽ không làm cay.", "Khách: Cảm ơn, vậy tốt quá."],
            tl: ["Customer: Huwag pong gawing maanghang.", "Staff: Sige po, hindi namin gagawing maanghang.", "Customer: Malaking tulong po."],
            id: ["Pelanggan: Tolong jangan dibuat pedas.", "Staf: Baik, tidak akan dibuat pedas.", "Pelanggan: Itu sangat membantu."],
            th: ["ลูกค้า: กรุณาไม่เผ็ดค่ะ/ครับ", "พนักงาน: ได้ค่ะ/ครับ จะไม่ทำให้เผ็ดค่ะ/ครับ", "ลูกค้า: ช่วยได้มากค่ะ/ครับ"],
            my: ["ဖောက်သည်: မစပ်အောင် လုပ်ပေးပါ။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ မစပ်အောင် လုပ်ပါမယ်။", "ဖောက်သည်: အကူအညီဖြစ်ပါတယ်။"],
            km: ["អតិថិជន: សូមកុំធ្វើឱ្យហឹរ។", "បុគ្គលិក: បាន ខ្ញុំនឹងមិនធ្វើឱ្យហឹរទេ។", "អតិថិជន: ជួយខ្ញុំបានច្រើន។"],
            ne: ["ग्राहक: कृपया पिरो नबनाउनुहोस्।", "कर्मचारी: हुन्छ, पिरो बनाउँदैनौं।", "ग्राहक: सहयोग भयो।"],
            mn: ["Үйлчлүүлэгч: Халуун ногоотой битгий хийгээрэй.", "Ажилтан: За, халуун ногоотой хийхгүй.", "Үйлчлүүлэгч: Тус боллоо."],
            si: ["පාරිභෝගිකයා: කරුණාකර සැර නොකරන්න.", "සේවකයා: හරි, සැර නොකරන්නම්.", "පාරිභෝගිකයා: ඒක උදව්වක්."],
            bn: ["গ্রাহক: দয়া করে ঝাল করবেন না।", "কর্মী: ঠিক আছে, ঝাল করব না।", "গ্রাহক: এতে সুবিধা হবে।"],
            pt: ["Cliente: Por favor, não deixe apimentado.", "Funcionário: Sim, não deixaremos apimentado.", "Cliente: Isso ajuda."],
            es: ["Cliente: Por favor, no lo haga picante.", "Empleado: Sí, no lo haremos picante.", "Cliente: Eso ayuda."],
            fr: ["Client : S’il vous plaît, ne le rendez pas épicé.", "Employé : Oui, nous ne le rendrons pas épicé.", "Client : Cela m’aide."],
            ru: ["Посетитель: Пожалуйста, не делайте острым.", "Сотрудник: Хорошо, не сделаем острым.", "Посетитель: Это очень поможет."],
            uk: ["Відвідувач: Будь ласка, не робіть гострим.", "Працівник: Добре, не зробимо гострим.", "Відвідувач: Це дуже допоможе."]
        }
    ),

    makeA1RestaurantDialogue(
        "a1_restaurant_008",
        "会計で別々に払う",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "お会計をお願いします。",
                target: "おかいけいをおねがいします",
                ruby: "お<ruby>会計<rt>かいけい</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "O-kaikei o onegai shimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "お支払いは一緒ですか。",
                target: "おしはらいはいっしょですか",
                ruby: "お<ruby>支払<rt>しはら</rt></ruby>いは<ruby>一緒<rt>いっしょ</rt></ruby>ですか。",
                romaji: "O-shiharai wa issho desu ka."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "別々でお願いします。",
                target: "べつべつでおねがいします",
                ruby: "<ruby>別々<rt>べつべつ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Betsubetsu de onegai shimasu."
            }
        ],
        {
            ja: ["客：お会計をお願いします。", "店員：お支払いは一緒ですか。", "客：別々でお願いします。"],
            en: ["Customer: The bill, please.", "Staff: Will you pay together?", "Customer: Separately, please."],
            "zh-CN": ["顾客：请结账。", "店员：一起付款吗？", "顾客：请分开付款。"],
            "zh-TW": ["顧客：請結帳。", "店員：一起付款嗎？", "顧客：請分開付款。"],
            ko: ["손님: 계산 부탁합니다.", "직원: 결제는 같이 하시나요?", "손님: 따로 부탁합니다."],
            vi: ["Khách: Cho tôi thanh toán ạ.", "Nhân viên: Quý khách thanh toán chung ạ?", "Khách: Thanh toán riêng giúp tôi."],
            tl: ["Customer: Bill, please.", "Staff: Isang bayad po ba?", "Customer: Hiwalay po, please."],
            id: ["Pelanggan: Tolong tagihannya.", "Staf: Pembayarannya bersama?", "Pelanggan: Terpisah, tolong."],
            th: ["ลูกค้า: เช็กบิลด้วยค่ะ/ครับ", "พนักงาน: จ่ายรวมกันไหมคะ/ครับ", "ลูกค้า: แยกกันค่ะ/ครับ"],
            my: ["ဖောက်သည်: ငွေရှင်းပါမယ်။", "ဝန်ထမ်း: အတူတူပေးချေမှာပါလား။", "ဖောက်သည်: သီးသန့်စီပေးချေပါမယ်။"],
            km: ["អតិថិជន: សូមគិតលុយ។", "បុគ្គលិក: តើបង់ប្រាក់រួមគ្នាទេ?", "អតិថិជន: សូមបង់ដោយឡែកពីគ្នា។"],
            ne: ["ग्राहक: बिल दिनुहोस्।", "कर्मचारी: भुक्तानी सँगै हो?", "ग्राहक: छुट्टाछुट्टै, कृपया।"],
            mn: ["Үйлчлүүлэгч: Тооцоо хийе.", "Ажилтан: Төлбөрөө хамт төлөх үү?", "Үйлчлүүлэгч: Тус тусад нь төлнө."],
            si: ["පාරිභෝගිකයා: බිල දෙන්න.", "සේවකයා: ගෙවීම එකටද?", "පාරිභෝගිකයා: වෙන වෙනම කරුණාකර."],
            bn: ["গ্রাহক: বিল দিন, দয়া করে।", "কর্মী: একসাথে পেমেন্ট করবেন?", "গ্রাহক: আলাদা আলাদা, দয়া করে।"],
            pt: ["Cliente: A conta, por favor.", "Funcionário: O pagamento será junto?", "Cliente: Separado, por favor."],
            es: ["Cliente: La cuenta, por favor.", "Empleado: ¿Pagan juntos?", "Cliente: Por separado, por favor."],
            fr: ["Client : L’addition, s’il vous plaît.", "Employé : Vous payez ensemble ?", "Client : Séparément, s’il vous plaît."],
            ru: ["Посетитель: Счёт, пожалуйста.", "Сотрудник: Оплата вместе?", "Посетитель: Раздельно, пожалуйста."],
            uk: ["Відвідувач: Рахунок, будь ласка.", "Працівник: Оплата разом?", "Відвідувач: Окремо, будь ласка."]
        }
    )

];