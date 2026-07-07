// =====================================================
// Japeak A2 Level
// Scene: 上手にお買い物をしよう
// Category Key: a2_smart_shopping
// =====================================================

const a2SmartShoppingContext = {
    ja: "値引き条件、容量、賞味期限、クーポン、在庫、予算、返品条件、セルフレジなどを確認しながら、上手に買い物をする日本語を練習します。",
    en: "Practice Japanese for smart shopping by checking discount conditions, size, expiration dates, coupons, stock, budget, return rules, and self-checkout.",
    "zh-CN": "练习在确认折扣条件、容量、保质期、优惠券、库存、预算、退货条件和自助收银等情况下聪明购物的日语。",
    "zh-TW": "練習在確認折扣條件、容量、保存期限、優惠券、庫存、預算、退貨條件和自助收銀等情況下聰明購物的日語。",
    ko: "할인 조건, 용량, 유통기한, 쿠폰, 재고, 예산, 반품 조건, 셀프 계산대 등을 확인하며 알뜰하게 쇼핑하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật để mua sắm thông minh bằng cách kiểm tra điều kiện giảm giá, dung lượng, hạn sử dụng, phiếu giảm giá, hàng tồn, ngân sách, quy định trả hàng và quầy tự thanh toán.",
    tl: "Practice ng Japanese para sa matalinong pamimili sa pamamagitan ng pag-check ng discount conditions, size, expiration date, coupons, stock, budget, return rules, at self-checkout.",
    id: "Latihan bahasa Jepang untuk berbelanja dengan cerdas sambil memeriksa syarat diskon, ukuran, tanggal kedaluwarsa, kupon, stok, anggaran, aturan retur, dan kasir mandiri.",
    th: "ฝึกภาษาญี่ปุ่นเพื่อซื้อของอย่างฉลาด โดยตรวจสอบเงื่อนไขส่วนลด ปริมาณ วันหมดอายุ คูปอง สต็อก งบประมาณ เงื่อนไขการคืนสินค้า และเครื่องชำระเงินด้วยตนเอง",
    my: "လျှော့ဈေးအခြေအနေ၊ ပမာဏ၊ သက်တမ်းကုန်ရက်၊ coupon၊ stock၊ budget၊ return rules နှင့် self-checkout တို့ကို စစ်ဆေးရင်း ကောင်းကောင်းဈေးဝယ်ရန် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ទិញទំនិញឱ្យឆ្លាត ដោយពិនិត្យលក្ខខណ្ឌបញ្ចុះតម្លៃ បរិមាណ កាលបរិច្ឆេទផុតកំណត់ គូប៉ុង ស្តុក ថវិកា លក្ខខណ្ឌត្រឡប់ទំនិញ និងម៉ាស៊ីនគិតលុយដោយខ្លួនឯង។",
    ne: "छुट सर्त, मात्रा, म्याद, कुपन, स्टक, बजेट, फिर्ता नियम र self-checkout जाँच गर्दै राम्रोसँग किनमेल गर्ने जापानी अभ्यास।",
    mn: "Хямдралын нөхцөл, хэмжээ, дуусах хугацаа, купон, үлдэгдэл, төсөв, буцаалтын дүрэм, өөрөө тооцоо хийх касс зэргийг шалгаж ухаалаг худалдан авах япон хэлний дадлага.",
    si: "discount conditions, size, expiration dates, coupons, stock, budget, return rules සහ self-checkout පරීක්ෂා කරමින් බුද්ධිමත්ව මිලදී ගැනීමට අවශ්‍ය ජපන් භාෂා පුහුණුව.",
    bn: "ডিসকাউন্টের শর্ত, পরিমাণ, মেয়াদ, কুপন, স্টক, বাজেট, রিটার্ন নিয়ম এবং self-checkout দেখে বুদ্ধিমানের মতো কেনাকাটার জাপানি অনুশীলন।",
    pt: "Prática de japonês para comprar de forma inteligente, verificando condições de desconto, quantidade, validade, cupons, estoque, orçamento, regras de devolução e autoatendimento.",
    es: "Práctica de japonés para comprar de forma inteligente, revisando condiciones de descuento, cantidad, fecha de vencimiento, cupones, stock, presupuesto, reglas de devolución y autocobro.",
    fr: "Entraînement en japonais pour faire des achats intelligents en vérifiant les conditions de réduction, la quantité, la date limite, les coupons, le stock, le budget, les règles de retour et la caisse automatique.",
    ru: "Практика японского языка для разумных покупок: проверка условий скидки, объёма, срока годности, купонов, наличия, бюджета, правил возврата и кассы самообслуживания.",
    uk: "Практика японської мови для розумних покупок: перевірка умов знижки, об’єму, терміну придатності, купонів, наявності, бюджету, правил повернення та каси самообслуговування."
};

const a2SmartShoppingSpeakerNames = {
    staff: {
        ja: "店員", en: "Store Staff", "zh-CN": "店员", "zh-TW": "店員", ko: "점원",
        vi: "Nhân viên cửa hàng", tl: "Staff ng tindahan", id: "Staf toko", th: "พนักงานร้าน",
        my: "ဆိုင်ဝန်ထမ်း", km: "បុគ្គលិកហាង", ne: "पसलका कर्मचारी", mn: "Дэлгүүрийн ажилтан",
        si: "වෙළඳසැලේ සේවකයා", bn: "দোকানের কর্মী", pt: "Funcionário da loja", es: "Empleado de la tienda",
        fr: "Employé du magasin", ru: "Сотрудник магазина", uk: "Працівник магазину"
    },
    customer: {
        ja: "客", en: "Customer", "zh-CN": "顾客", "zh-TW": "顧客", ko: "손님",
        vi: "Khách hàng", tl: "Customer", id: "Pelanggan", th: "ลูกค้า",
        my: "ဖောက်သည်", km: "អតិថិជន", ne: "ग्राहक", mn: "Үйлчлүүлэгч",
        si: "පාරිභෝගිකයා", bn: "গ্রাহক", pt: "Cliente", es: "Cliente",
        fr: "Client", ru: "Клиент", uk: "Клієнт"
    }
};

function makeA2SmartShoppingDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_smart_shopping",
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
            speakerNames: a2SmartShoppingSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2SmartShoppingContext,
        translations,
        dialogueTranslations
    };
}

const japeakA2SmartShoppingData = [

    makeA2SmartShoppingDialogue(
        "a2_smart_shop_001",
        "値引きの条件を確認する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "この商品は二つ買うと安くなりますか。",
                target: "このしょうひんはふたつかうとやすくなりますか",
                ruby: "この<ruby>商品<rt>しょうひん</rt></ruby>は<ruby>二<rt>ふた</rt></ruby>つ<ruby>買<rt>か</rt></ruby>うと<ruby>安<rt>やす</rt></ruby>くなりますか。",
                romaji: "Kono shōhin wa futatsu kau to yasuku narimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、二点目が半額になります。",
                target: "はい にてんめがはんがくになります",
                ruby: "はい、<ruby>二点目<rt>にてんめ</rt></ruby>が<ruby>半額<rt>はんがく</rt></ruby>になります。",
                romaji: "Hai, niten-me ga hangaku ni narimasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "同じ種類でなくても大丈夫ですか。",
                target: "おなじしゅるいでなくてもだいじょうぶですか",
                ruby: "<ruby>同<rt>おな</rt></ruby>じ<ruby>種類<rt>しゅるい</rt></ruby>でなくても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Onaji shurui de nakute mo daijōbu desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "対象マークが付いていれば、組み合わせ自由です。",
                target: "たいしょうまーくがついていれば くみあわせじゆうです",
                ruby: "<ruby>対象<rt>たいしょう</rt></ruby>マークが<ruby>付<rt>つ</rt></ruby>いていれば、<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせ<ruby>自由<rt>じゆう</rt></ruby>です。",
                romaji: "Taishō māku ga tsuite ireba, kumiawase jiyū desu."
            }
        ],
        {
            ja: ["客：この商品は二つ買うと安くなりますか。", "店員：はい、二点目が半額になります。", "客：同じ種類でなくても大丈夫ですか。", "店員：対象マークが付いていれば、組み合わせ自由です。"],
            en: ["Customer: Does this item get cheaper if I buy two?", "Store Staff: Yes, the second item becomes half price.", "Customer: Is it okay if they are not the same type?", "Store Staff: If they have the campaign mark, you can combine them freely."],
            "zh-CN": ["顾客：这个商品买两个会便宜吗？", "店员：是的，第二件半价。", "顾客：不是同一种也可以吗？", "店员：只要有活动标记，就可以自由组合。"],
            "zh-TW": ["顧客：這個商品買兩個會便宜嗎？", "店員：是的，第二件半價。", "顧客：不是同一種也可以嗎？", "店員：只要有活動標記，就可以自由組合。"],
            ko: ["손님: 이 상품은 두 개 사면 싸지나요?", "점원: 네, 두 번째 상품이 반값입니다.", "손님: 같은 종류가 아니어도 괜찮나요?", "점원: 대상 표시가 붙어 있으면 자유롭게 조합할 수 있습니다."],
            vi: ["Khách hàng: Sản phẩm này mua hai cái thì rẻ hơn không ạ?", "Nhân viên cửa hàng: Vâng, món thứ hai sẽ giảm một nửa giá.", "Khách hàng: Không cùng loại cũng được không ạ?", "Nhân viên cửa hàng: Nếu có dấu áp dụng thì có thể kết hợp tự do."],
            tl: ["Customer: Mas mura po ba ang item na ito kapag dalawa ang bibilhin?", "Staff ng tindahan: Oo, kalahati po ang presyo ng pangalawang item.", "Customer: Okay lang po ba kahit hindi parehong uri?", "Staff ng tindahan: Kung may campaign mark po, puwedeng kombinasyon kahit alin."],
            id: ["Pelanggan: Apakah barang ini lebih murah jika membeli dua?", "Staf toko: Ya, barang kedua menjadi setengah harga.", "Pelanggan: Apakah tidak apa-apa kalau jenisnya berbeda?", "Staf toko: Jika ada tanda promo, kombinasinya bebas."],
            th: ["ลูกค้า: สินค้านี้ถ้าซื้อสองชิ้นจะถูกลงไหมคะ/ครับ", "พนักงานร้าน: ใช่ค่ะ/ครับ ชิ้นที่สองลดครึ่งราคาค่ะ/ครับ", "ลูกค้า: ไม่ใช่ชนิดเดียวกันก็ได้ไหมคะ/ครับ", "พนักงานร้าน: ถ้ามีเครื่องหมาย対象 สามารถผสมกันได้อิสระค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီပစ္စည်းကို နှစ်ခုဝယ်ရင် စျေးသက်သာပါသလား။", "ဆိုင်ဝန်ထမ်း: ဟုတ်ကဲ့၊ ဒုတိယပစ္စည်းက တစ်ဝက်စျေးになります။", "ဖောက်သည်: အမျိုးအစားမတူလည်း ရပါသလား။", "ဆိုင်ဝန်ထမ်း: promo mark ပါရင် ကြိုက်သလို တွဲလို့ရပါတယ်။"],
            km: ["អតិថិជន: ប្រសិនបើទិញទំនិញនេះពីរ តើវាតម្លៃថោកជាងមុនទេ?", "បុគ្គលិកហាង: បាទ/ចាស ទំនិញទីពីរនឹងតម្លៃពាក់កណ្តាល។", "អតិថិជន: មិនមែនប្រភេទដូចគ្នាក៏បានទេ?", "បុគ្គលិកហាង: បើមានសញ្ញាផ្សព្វផ្សាយ អាចបញ្ចូលគ្នាបានដោយសេរី។"],
            ne: ["ग्राहक: यो सामान दुईवटा किन्दा सस्तो हुन्छ?", "पसलका कर्मचारी: हुन्छ, दोस्रो सामान आधा मूल्य हुन्छ।", "ग्राहक: एउटै प्रकार नभए पनि हुन्छ?", "पसलका कर्मचारी: अभियान चिन्ह लागेको भए स्वतन्त्र रूपमा मिलाउन सकिन्छ।"],
            mn: ["Үйлчлүүлэгч: Энэ барааг хоёрыг авбал хямдрах уу?", "Дэлгүүрийн ажилтан: Тийм, хоёр дахь нь хагас үнэтэй болно.", "Үйлчлүүлэгч: Заавал ижил төрөл байх шаардлагагүй юу?", "Дэлгүүрийн ажилтан: Урамшууллын тэмдэгтэй бол чөлөөтэй хослуулж болно."],
            si: ["පාරිභෝගිකයා: මේ භාණ්ඩය දෙකක් ගත්තොත් ලාභ වෙනවද?", "වෙළඳසැලේ සේවකයා: ඔව්, දෙවැනි භාණ්ඩය අර්ධ මිලයි.", "පාරිභෝගිකයා: එකම වර්ගය නොවුණත් හරිද?", "වෙළඳසැලේ සේවකයා: campaign mark එක තියෙනවා නම් ඕනෑම එකක් එක්කර ගන්න පුළුවන්."],
            bn: ["গ্রাহক: এই পণ্যটি দুইটি কিনলে কি সস্তা হবে?", "দোকানের কর্মী: হ্যাঁ, দ্বিতীয়টি অর্ধেক দামে হবে।", "গ্রাহক: একই ধরনের না হলেও হবে?", "দোকানের কর্মী: যদি ক্যাম্পেইন মার্ক থাকে, তাহলে যেকোনোভাবে মিলিয়ে নেওয়া যায়।"],
            pt: ["Cliente: Este produto fica mais barato se eu comprar dois?", "Funcionário da loja: Sim, o segundo item fica pela metade do preço.", "Cliente: Pode ser de tipos diferentes?", "Funcionário da loja: Se tiver a marca da promoção, a combinação é livre."],
            es: ["Cliente: ¿Este producto sale más barato si compro dos?", "Empleado de la tienda: Sí, el segundo artículo queda a mitad de precio.", "Cliente: ¿Está bien si no son del mismo tipo?", "Empleado de la tienda: Si tienen la marca de la promoción, puede combinarlos libremente."],
            fr: ["Client : Ce produit est-il moins cher si j’en achète deux ?", "Employé du magasin : Oui, le deuxième article est à moitié prix.", "Client : Ce n’est pas obligé d’être le même type ?", "Employé du magasin : S’il y a la marque de promotion, vous pouvez les combiner librement."],
            ru: ["Клиент: Этот товар будет дешевле, если купить два?", "Сотрудник магазина: Да, второй товар будет за полцены.", "Клиент: Можно, если это не один и тот же вид?", "Сотрудник магазина: Если есть отметка акции, можно сочетать свободно."],
            uk: ["Клієнт: Цей товар буде дешевшим, якщо купити два?", "Працівник магазину: Так, другий товар буде за пів ціни.", "Клієнт: Можна, якщо це не один і той самий вид?", "Працівник магазину: Якщо є позначка акції, можна поєднувати вільно."]
        }
    ),

    makeA2SmartShoppingDialogue(
        "a2_smart_shop_002",
        "容量を比べる",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "大きいサイズと小さいサイズで迷っています。",
                target: "おおきいさいずとちいさいさいずでまよっています",
                ruby: "<ruby>大<rt>おお</rt></ruby>きいサイズと<ruby>小<rt>ちい</rt></ruby>さいサイズで<ruby>迷<rt>まよ</rt></ruby>っています。",
                romaji: "Ōkii saizu to chīsai saizu de mayotte imasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "よく使うなら、大きい方が割安です。",
                target: "よくつかうなら おおきいほうがわりやすです",
                ruby: "よく<ruby>使<rt>つか</rt></ruby>うなら、<ruby>大<rt>おお</rt></ruby>きい<ruby>方<rt>ほう</rt></ruby>が<ruby>割安<rt>わりやす</rt></ruby>です。",
                romaji: "Yoku tsukau nara, ōkii hō ga wariyasu desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "一か月で使い切れるか心配です。",
                target: "いっかげつでつかいきれるかしんぱいです",
                ruby: "<ruby>一<rt>いっ</rt></ruby>か<ruby>月<rt>げつ</rt></ruby>で<ruby>使<rt>つか</rt></ruby>い<ruby>切<rt>き</rt></ruby>れるか<ruby>心配<rt>しんぱい</rt></ruby>です。",
                romaji: "Ikkagetsu de tsukaikireru ka shinpai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "それなら、まず小さいサイズで試す方が良いと思います。",
                target: "それなら まずちいさいさいずでためすほうがいいとおもいます",
                ruby: "それなら、まず<ruby>小<rt>ちい</rt></ruby>さいサイズで<ruby>試<rt>ため</rt></ruby>す<ruby>方<rt>ほう</rt></ruby>が<ruby>良<rt>い</rt></ruby>いと<ruby>思<rt>おも</rt></ruby>います。",
                romaji: "Sore nara, mazu chīsai saizu de tamesu hō ga ii to omoimasu."
            }
        ],
        {
            ja: ["客：大きいサイズと小さいサイズで迷っています。", "店員：よく使うなら、大きい方が割安です。", "客：一か月で使い切れるか心配です。", "店員：それなら、まず小さいサイズで試す方が良いと思います。"],
            en: ["Customer: I am not sure whether to choose the large size or the small size.", "Store Staff: If you use it often, the large one is better value.", "Customer: I am worried whether I can use it up in one month.", "Store Staff: In that case, I think it is better to try the small size first."],
            "zh-CN": ["顾客：我在大容量和小容量之间犹豫。", "店员：如果经常使用，大的更划算。", "顾客：我担心一个月内能不能用完。", "店员：那样的话，我觉得先试小的比较好。"],
            "zh-TW": ["顧客：我在大容量和小容量之間猶豫。", "店員：如果經常使用，大的比較划算。", "顧客：我擔心一個月內能不能用完。", "店員：那樣的話，我覺得先試小的比較好。"],
            ko: ["손님: 큰 사이즈와 작은 사이즈 중에서 고민하고 있습니다.", "점원: 자주 사용하신다면 큰 쪽이 더 경제적입니다.", "손님: 한 달 안에 다 쓸 수 있을지 걱정됩니다.", "점원: 그렇다면 먼저 작은 사이즈로 시험해 보는 것이 좋다고 생각합니다."],
            vi: ["Khách hàng: Tôi đang phân vân giữa cỡ lớn và cỡ nhỏ.", "Nhân viên cửa hàng: Nếu dùng thường xuyên thì cỡ lớn tiết kiệm hơn.", "Khách hàng: Tôi lo không biết có dùng hết trong một tháng không.", "Nhân viên cửa hàng: Vậy thì tôi nghĩ nên thử cỡ nhỏ trước."],
            tl: ["Customer: Nagdadalawang-isip ako sa malaking size at maliit na size.", "Staff ng tindahan: Kung madalas gamitin, mas sulit ang malaking size.", "Customer: Nag-aalala ako kung mauubos ko ito sa loob ng isang buwan.", "Staff ng tindahan: Kung ganoon, mas mabuting subukan muna ang maliit na size."],
            id: ["Pelanggan: Saya bingung antara ukuran besar dan kecil.", "Staf toko: Jika sering digunakan, ukuran besar lebih hemat.", "Pelanggan: Saya khawatir apakah bisa habis dalam satu bulan.", "Staf toko: Kalau begitu, saya pikir lebih baik mencoba ukuran kecil dulu."],
            th: ["ลูกค้า: กำลังลังเลระหว่างขนาดใหญ่กับขนาดเล็กค่ะ/ครับ", "พนักงานร้าน: ถ้าใช้บ่อย ขนาดใหญ่คุ้มกว่าค่ะ/ครับ", "ลูกค้า: กังวลว่าจะใช้หมดภายในหนึ่งเดือนไหมค่ะ/ครับ", "พนักงานร้าน: ถ้าอย่างนั้น ลองขนาดเล็กก่อนน่าจะดีกว่าค่ะ/ครับ"],
            my: ["ဖောက်သည်: size ကြီးနဲ့ size သေး ဘယ်ဟာရွေးရမလဲ မသေချာပါဘူး။", "ဆိုင်ဝန်ထမ်း: မကြာခဏသုံးမယ်ဆိုရင် size ကြီးက ပိုတန်ပါတယ်။", "ဖောက်သည်: တစ်လအတွင်း သုံးကုန်နိုင်မလား စိတ်ပူပါတယ်။", "ဆိုင်ဝန်ထမ်း: ဒါဆို ပထမဆုံး size သေးနဲ့ စမ်းတာ ပိုကောင်းမယ်ထင်ပါတယ်။"],
            km: ["អតិថិជន: ខ្ញុំកំពុងស្ទាក់ស្ទើររវាងទំហំធំ និងទំហំតូច។", "បុគ្គលិកហាង: ប្រសិនបើប្រើញឹកញាប់ ទំហំធំនឹងសន្សំជាង។", "អតិថិជន: ខ្ញុំបារម្ភថាតើអាចប្រើអស់ក្នុងមួយខែបានទេ។", "បុគ្គលិកហាង: បើដូច្នោះ ខ្ញុំគិតថាសាកទំហំតូចមុនល្អជាង។"],
            ne: ["ग्राहक: ठूलो साइज र सानो साइजमध्ये कुन लिने भनेर अलमलमा छु।", "पसलका कर्मचारी: धेरै प्रयोग गर्ने भए ठूलो साइज बढी किफायती हुन्छ।", "ग्राहक: एक महिनामा सकिन्छ कि सकिँदैन चिन्ता छ।", "पसलका कर्मचारी: त्यसो भए पहिले सानो साइज प्रयोग गरेर हेर्नु राम्रो हुन्छ।"],
            mn: ["Үйлчлүүлэгч: Том хэмжээ, жижиг хэмжээнээс алийг сонгохоо эргэлзэж байна.", "Дэлгүүрийн ажилтан: Байнга хэрэглэдэг бол том нь илүү хэмнэлттэй.", "Үйлчлүүлэгч: Нэг сарын дотор хэрэглэж дуусгах эсэхдээ санаа зовж байна.", "Дэлгүүрийн ажилтан: Тэгвэл эхлээд жижиг хэмжээгээр туршсан нь дээр байх."],
            si: ["පාරිභෝගිකයා: ලොකු size එකද පොඩි size එකද කියලා තෝරගන්න අමාරුයි.", "වෙළඳසැලේ සේවකයා: නිතර භාවිතා කරනවා නම් ලොකු එක වඩා වාසිදායකයි.", "පාරිභෝගිකයා: මාසයක් ඇතුළත අවසන් කරගන්න පුළුවන්ද කියලා කනස්සල්ලක් තියෙනවා.", "වෙළඳසැලේ සේවකයා: එහෙනම් පළමුව පොඩි size එකෙන් උත්සාහ කරන එක හොඳයි කියලා හිතනවා."],
            bn: ["গ্রাহক: বড় সাইজ আর ছোট সাইজের মধ্যে দ্বিধায় আছি।", "দোকানের কর্মী: বেশি ব্যবহার করলে বড় সাইজ বেশি সাশ্রয়ী।", "গ্রাহক: এক মাসের মধ্যে শেষ করতে পারব কি না চিন্তা হচ্ছে।", "দোকানের কর্মী: তাহলে আগে ছোট সাইজ দিয়ে চেষ্টা করা ভালো মনে করি।"],
            pt: ["Cliente: Estou em dúvida entre o tamanho grande e o pequeno.", "Funcionário da loja: Se você usa com frequência, o grande tem melhor custo-benefício.", "Cliente: Tenho receio de não conseguir usar tudo em um mês.", "Funcionário da loja: Nesse caso, acho melhor testar primeiro o tamanho pequeno."],
            es: ["Cliente: Estoy dudando entre el tamaño grande y el pequeño.", "Empleado de la tienda: Si lo usa con frecuencia, el grande sale más económico.", "Cliente: Me preocupa si podré terminarlo en un mes.", "Empleado de la tienda: En ese caso, creo que es mejor probar primero el tamaño pequeño."],
            fr: ["Client : J’hésite entre le grand format et le petit format.", "Employé du magasin : Si vous l’utilisez souvent, le grand format est plus avantageux.", "Client : Je crains de ne pas pouvoir le finir en un mois.", "Employé du magasin : Dans ce cas, je pense qu’il vaut mieux essayer d’abord le petit format."],
            ru: ["Клиент: Я сомневаюсь между большим и маленьким размером.", "Сотрудник магазина: Если часто использовать, большой выгоднее.", "Клиент: Я переживаю, смогу ли использовать всё за месяц.", "Сотрудник магазина: Тогда, думаю, лучше сначала попробовать маленький размер."],
            uk: ["Клієнт: Я вагаюся між великим і малим розміром.", "Працівник магазину: Якщо часто використовувати, великий вигідніший.", "Клієнт: Я хвилююся, чи зможу використати все за місяць.", "Працівник магазину: Тоді, думаю, краще спочатку спробувати малий розмір."]
        }
    ),

    makeA2SmartShoppingDialogue(
        "a2_smart_shop_003",
        "賞味期限を確認する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "このパンは今日食べる予定です。",
                target: "このぱんはきょうたべるよていです",
                ruby: "このパンは<ruby>今日<rt>きょう</rt></ruby><ruby>食<rt>た</rt></ruby>べる<ruby>予定<rt>よてい</rt></ruby>です。",
                romaji: "Kono pan wa kyō taberu yotei desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "でしたら、こちらの見切り品もおすすめです。",
                target: "でしたら こちらのみきりひんもおすすめです",
                ruby: "でしたら、こちらの<ruby>見切<rt>みき</rt></ruby>り<ruby>品<rt>ひん</rt></ruby>もおすすめです。",
                romaji: "Deshitara, kochira no mikirihin mo osusume desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "賞味期限はいつまでですか。",
                target: "しょうみきげんはいつまでですか",
                ruby: "<ruby>賞味期限<rt>しょうみきげん</rt></ruby>はいつまでですか。",
                romaji: "Shōmi kigen wa itsu made desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "本日中ですので、今日食べるなら問題ありません。",
                target: "ほんじつちゅうですので きょうたべるならもんだいありません",
                ruby: "<ruby>本日中<rt>ほんじつちゅう</rt></ruby>ですので、<ruby>今日<rt>きょう</rt></ruby><ruby>食<rt>た</rt></ruby>べるなら<ruby>問題<rt>もんだい</rt></ruby>ありません。",
                romaji: "Honjitsu-chū desu node, kyō taberu nara mondai arimasen."
            }
        ],
        {
            ja: ["客：このパンは今日食べる予定です。", "店員：でしたら、こちらの見切り品もおすすめです。", "客：賞味期限はいつまでですか。", "店員：本日中ですので、今日食べるなら問題ありません。"],
            en: ["Customer: I plan to eat this bread today.", "Store Staff: In that case, these reduced-price items are also recommended.", "Customer: When is the best-before date?", "Store Staff: It is today, so there is no problem if you eat it today."],
            "zh-CN": ["顾客：这个面包我打算今天吃。", "店员：那样的话，这边的临期折扣商品也推荐。", "顾客：保质期到什么时候？", "店员：今天之内，所以今天吃的话没有问题。"],
            "zh-TW": ["顧客：這個麵包我打算今天吃。", "店員：那樣的話，這邊的臨期折扣商品也推薦。", "顧客：保存期限到什麼時候？", "店員：今天之內，所以今天吃的話沒有問題。"],
            ko: ["손님: 이 빵은 오늘 먹을 예정입니다.", "점원: 그렇다면 이 할인 상품도 추천드립니다.", "손님: 유통기한은 언제까지인가요?", "점원: 오늘까지이므로 오늘 드신다면 문제없습니다."],
            vi: ["Khách hàng: Tôi định ăn bánh mì này hôm nay.", "Nhân viên cửa hàng: Vậy thì các mặt hàng giảm giá này cũng được khuyên dùng.", "Khách hàng: Hạn sử dụng đến khi nào ạ?", "Nhân viên cửa hàng: Trong hôm nay, nên nếu ăn hôm nay thì không có vấn đề gì."],
            tl: ["Customer: Kakainin ko ang bread na ito ngayong araw.", "Staff ng tindahan: Kung ganoon, recommended din po itong reduced-price items.", "Customer: Hanggang kailan po ang best-before date?", "Staff ng tindahan: Hanggang ngayon po, kaya walang problema kung kakainin ngayon."],
            id: ["Pelanggan: Saya berencana makan roti ini hari ini.", "Staf toko: Kalau begitu, barang diskon ini juga direkomendasikan.", "Pelanggan: Tanggal kedaluwarsanya sampai kapan?", "Staf toko: Sampai hari ini, jadi tidak masalah jika dimakan hari ini."],
            th: ["ลูกค้า: ขนมปังนี้ตั้งใจจะกินวันนี้ค่ะ/ครับ", "พนักงานร้าน: ถ้าอย่างนั้น สินค้าลดราคาตรงนี้ก็แนะนำค่ะ/ครับ", "ลูกค้า: วันหมดอายุถึงเมื่อไรคะ/ครับ", "พนักงานร้าน: ภายในวันนี้ค่ะ/ครับ ถ้ากินวันนี้ก็ไม่มีปัญหาค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီပေါင်မုန့်ကို ဒီနေ့စားဖို့ စီစဉ်ထားပါတယ်။", "ဆိုင်ဝန်ထမ်း: ဒါဆို ဒီ discount item တွေလည်း အကြံပြုပါတယ်။", "ဖောက်သည်: သက်တမ်းက ဘယ်နေ့အထိပါလဲ။", "ဆိုင်ဝန်ထမ်း: ဒီနေ့အတွင်းပါ၊ ဒီနေ့စားမယ်ဆို ပြဿနာမရှိပါဘူး။"],
            km: ["អតិថិជន: ខ្ញុំមានគម្រោងញ៉ាំនំប៉័ងនេះថ្ងៃនេះ។", "បុគ្គលិកហាង: បើដូច្នោះ ទំនិញបញ្ចុះតម្លៃនេះក៏ណែនាំផងដែរ។", "អតិថិជន: កាលបរិច្ឆេទផុតកំណត់ដល់ពេលណា?", "បុគ្គលិកហាង: ដល់ក្នុងថ្ងៃនេះ ដូច្នេះបើញ៉ាំថ្ងៃនេះគ្មានបញ្ហាទេ។"],
            ne: ["ग्राहक: यो पाउरोटी आज खाने योजना छ।", "पसलका कर्मचारी: त्यसो भए, यी छुटका सामान पनि सिफारिस गर्छु।", "ग्राहक: म्याद कहिलेसम्म हो?", "पसलका कर्मचारी: आजभित्र हो, त्यसैले आज खाने भए समस्या छैन।"],
            mn: ["Үйлчлүүлэгч: Энэ талхыг өнөөдөр идэх төлөвлөгөөтэй.", "Дэлгүүрийн ажилтан: Тэгвэл энэ хямдарсан барааг ч санал болгож байна.", "Үйлчлүүлэгч: Хэрэглэх хугацаа нь хэзээ хүртэл вэ?", "Дэлгүүрийн ажилтан: Өнөөдөр дуустал тул өнөөдөр идэх бол асуудалгүй."],
            si: ["පාරිභෝගිකයා: මේ පාන් අද කන්න සැලසුම් කරලා තියෙනවා.", "වෙළඳසැලේ සේවකයා: එහෙම නම්, මේ reduced-price itemsත් නිර්දේශ කරනවා.", "පාරිභෝගිකයා: expiry date එක කවදා දක්වාද?", "වෙළඳසැලේ සේවකයා: අද දක්වායි, ඒ නිසා අද කනවා නම් ප්‍රශ්නයක් නැහැ."],
            bn: ["গ্রাহক: এই পাউরুটি আজ খাওয়ার পরিকল্পনা আছে।", "দোকানের কর্মী: তাহলে এই কম দামের পণ্যগুলোও ভালো।", "গ্রাহক: মেয়াদ কখন পর্যন্ত?", "দোকানের কর্মী: আজকের মধ্যে, তাই আজ খেলে সমস্যা নেই।"],
            pt: ["Cliente: Pretendo comer este pão hoje.", "Funcionário da loja: Nesse caso, estes itens com desconto também são recomendados.", "Cliente: Até quando é a validade?", "Funcionário da loja: É até hoje, então não há problema se comer hoje."],
            es: ["Cliente: Tengo pensado comer este pan hoy.", "Empleado de la tienda: En ese caso, estos productos rebajados también son recomendables.", "Cliente: ¿Hasta cuándo es la fecha de consumo preferente?", "Empleado de la tienda: Es hasta hoy, así que no hay problema si lo come hoy."],
            fr: ["Client : Je prévois de manger ce pain aujourd’hui.", "Employé du magasin : Dans ce cas, ces articles en réduction sont aussi recommandés.", "Client : Jusqu’à quand est la date limite ?", "Employé du magasin : C’est jusqu’à aujourd’hui, donc aucun problème si vous le mangez aujourd’hui."],
            ru: ["Клиент: Я планирую съесть этот хлеб сегодня.", "Сотрудник магазина: Тогда рекомендую также эти уценённые товары.", "Клиент: До какого числа срок годности?", "Сотрудник магазина: До сегодняшнего дня, поэтому если съесть сегодня, проблем нет."],
            uk: ["Клієнт: Я планую з’їсти цей хліб сьогодні.", "Працівник магазину: Тоді рекомендую також ці товари зі знижкою.", "Клієнт: До якого числа термін придатності?", "Працівник магазину: До сьогодні, тому якщо з’їсти сьогодні, проблем немає."]
        }
    ),

    makeA2SmartShoppingDialogue(
        "a2_smart_shop_004",
        "クーポンの使い方を確認する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "このクーポンは今日使えますか。",
                target: "このくーぽんはきょうつかえますか",
                ruby: "このクーポンは<ruby>今日<rt>きょう</rt></ruby><ruby>使<rt>つか</rt></ruby>えますか。",
                romaji: "Kono kūpon wa kyō tsukaemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "税込み千五百円以上で使えます。",
                target: "ぜいこみせんごひゃくえんいじょうでつかえます",
                ruby: "<ruby>税込<rt>ぜいこ</rt></ruby>み<ruby>千五百円以上<rt>せんごひゃくえんいじょう</rt></ruby>で<ruby>使<rt>つか</rt></ruby>えます。",
                romaji: "Zeikomi sengohyaku-en ijō de tsukaemasu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "今の合計は条件に届いていますか。",
                target: "いまのごうけいはじょうけんにとどいていますか",
                ruby: "<ruby>今<rt>いま</rt></ruby>の<ruby>合計<rt>ごうけい</rt></ruby>は<ruby>条件<rt>じょうけん</rt></ruby>に<ruby>届<rt>とど</rt></ruby>いていますか。",
                romaji: "Ima no gōkei wa jōken ni todoite imasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "あと百二十円で使えるようになります。",
                target: "あとひゃくにじゅうえんでつかえるようになります",
                ruby: "あと<ruby>百二十円<rt>ひゃくにじゅうえん</rt></ruby>で<ruby>使<rt>つか</rt></ruby>えるようになります。",
                romaji: "Ato hyaku nijū-en de tsukaeru yō ni narimasu."
            }
        ],
        {
            ja: ["客：このクーポンは今日使えますか。", "店員：税込み千五百円以上で使えます。", "客：今の合計は条件に届いていますか。", "店員：あと百二十円で使えるようになります。"],
            en: ["Customer: Can I use this coupon today?", "Store Staff: You can use it for purchases of 1,500 yen or more including tax.", "Customer: Does my current total meet the condition?", "Store Staff: You need 120 yen more to use it."],
            "zh-CN": ["顾客：这个优惠券今天可以用吗？", "店员：含税一千五百日元以上可以使用。", "顾客：现在的合计金额达到条件了吗？", "店员：还差120日元就可以使用了。"],
            "zh-TW": ["顧客：這張優惠券今天可以用嗎？", "店員：含稅一千五百日圓以上可以使用。", "顧客：現在的合計金額達到條件了嗎？", "店員：還差120日圓就可以使用了。"],
            ko: ["손님: 이 쿠폰은 오늘 사용할 수 있나요?", "점원: 세금 포함 1,500엔 이상이면 사용할 수 있습니다.", "손님: 지금 합계가 조건에 도달했나요?", "점원: 앞으로 120엔이면 사용할 수 있게 됩니다."],
            vi: ["Khách hàng: Hôm nay tôi có thể dùng phiếu giảm giá này không?", "Nhân viên cửa hàng: Có thể dùng khi tổng tiền từ 1,500 yên trở lên, bao gồm thuế.", "Khách hàng: Tổng hiện tại đã đạt điều kiện chưa ạ?", "Nhân viên cửa hàng: Cần thêm 120 yên nữa là dùng được."],
            tl: ["Customer: Pwede ko po bang gamitin ang coupon na ito ngayon?", "Staff ng tindahan: Magagamit po ito kapag 1,500 yen pataas kasama ang tax.", "Customer: Umabot na po ba sa condition ang total ngayon?", "Staff ng tindahan: Kulang pa po ng 120 yen para magamit."],
            id: ["Pelanggan: Apakah kupon ini bisa digunakan hari ini?", "Staf toko: Bisa digunakan untuk total 1.500 yen atau lebih termasuk pajak.", "Pelanggan: Apakah total sekarang sudah memenuhi syarat?", "Staf toko: Kurang 120 yen lagi agar bisa digunakan."],
            th: ["ลูกค้า: คูปองนี้ใช้วันนี้ได้ไหมคะ/ครับ", "พนักงานร้าน: ใช้ได้เมื่อยอดรวมรวมภาษีตั้งแต่ 1,500 เยนขึ้นไปค่ะ/ครับ", "ลูกค้า: ยอดรวมตอนนี้ถึงเงื่อนไขหรือยังคะ/ครับ", "พนักงานร้าน: อีก 120 เยนก็ใช้ได้ค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီ coupon ကို ဒီနေ့ သုံးလို့ရပါသလား။", "ဆိုင်ဝန်ထမ်း: tax ပါပြီး ၁,၅၀၀ ယန်းအထက်ဆို သုံးလို့ရပါတယ်။", "ဖောက်သည်: အခု total က condition ပြည့်ပါပြီလား။", "ဆိုင်ဝန်ထမ်း: နောက်ထပ် ၁၂၀ ယန်းဆို သုံးလို့ရပါမယ်။"],
            km: ["អតិថិជន: តើគូប៉ុងនេះអាចប្រើថ្ងៃនេះបានទេ?", "បុគ្គលិកហាង: អាចប្រើបានសម្រាប់ទឹកប្រាក់ 1,500 យ៉េន ឬច្រើនជាងនេះ រួមពន្ធ។", "អតិថិជន: តើសរុបបច្ចុប្បន្នដល់លក្ខខណ្ឌហើយទេ?", "បុគ្គលិកហាង: ត្រូវការ 120 យ៉េនបន្ថែមទៀត ដើម្បីអាចប្រើបាន។"],
            ne: ["ग्राहक: यो कुपन आज प्रयोग गर्न मिल्छ?", "पसलका कर्मचारी: करसहित १,५०० येन वा बढीमा प्रयोग गर्न मिल्छ।", "ग्राहक: अहिलेको जम्मा रकम सर्तमा पुगेको छ?", "पसलका कर्मचारी: अझै १२० येन पुगेपछि प्रयोग गर्न मिल्छ।"],
            mn: ["Үйлчлүүлэгч: Энэ купоныг өнөөдөр ашиглаж болох уу?", "Дэлгүүрийн ажилтан: Татвартайгаа 1,500 иенээс дээш бол ашиглаж болно.", "Үйлчлүүлэгч: Одоогийн нийт дүн нөхцөлийг хангаж байна уу?", "Дэлгүүрийн ажилтан: Дахиад 120 иен нэмбэл ашиглаж болно."],
            si: ["පාරිභෝගිකයා: මේ coupon එක අද භාවිතා කරන්න පුළුවන්ද?", "වෙළඳසැලේ සේවකයා: tax ඇතුළුව yen 1,500කට වැඩි නම් භාවිතා කළ හැක.", "පාරිභෝගිකයා: දැන් total එක condition එකට ලඟා වෙලාද?", "වෙළඳසැලේ සේවකයා: තව yen 120ක් තිබුණොත් භාවිතා කළ හැක."],
            bn: ["গ্রাহক: এই কুপনটি আজ ব্যবহার করা যাবে?", "দোকানের কর্মী: ট্যাক্সসহ ১,৫০০ ইয়েন বা তার বেশি হলে ব্যবহার করা যাবে।", "গ্রাহক: এখনকার মোট কি শর্ত পূরণ করেছে?", "দোকানের কর্মী: আর ১২০ ইয়েন হলে ব্যবহার করা যাবে।"],
            pt: ["Cliente: Posso usar este cupom hoje?", "Funcionário da loja: Ele pode ser usado em compras de 1.500 ienes ou mais com imposto.", "Cliente: O total atual já atende à condição?", "Funcionário da loja: Faltam 120 ienes para poder usar."],
            es: ["Cliente: ¿Puedo usar este cupón hoy?", "Empleado de la tienda: Se puede usar en compras de 1.500 yenes o más con impuestos incluidos.", "Cliente: ¿El total actual cumple la condición?", "Empleado de la tienda: Faltan 120 yenes para poder usarlo."],
            fr: ["Client : Puis-je utiliser ce coupon aujourd’hui ?", "Employé du magasin : Il peut être utilisé pour un achat de 1 500 yens ou plus, taxes comprises.", "Client : Le total actuel atteint-il la condition ?", "Employé du magasin : Il manque encore 120 yens pour pouvoir l’utiliser."],
            ru: ["Клиент: Можно использовать этот купон сегодня?", "Сотрудник магазина: Можно использовать при сумме от 1 500 иен с налогом.", "Клиент: Текущая сумма уже соответствует условию?", "Сотрудник магазина: Нужно ещё 120 иен, чтобы использовать купон."],
            uk: ["Клієнт: Можна використати цей купон сьогодні?", "Працівник магазину: Можна використати при сумі від 1 500 єн із податком.", "Клієнт: Поточна сума вже відповідає умові?", "Працівник магазину: Потрібно ще 120 єн, щоб використати купон."]
        }
    ),

    makeA2SmartShoppingDialogue(
        "a2_smart_shop_005",
        "在庫を確認する",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "棚に出ている分で全部ですか。",
                target: "たなにでているぶんでぜんぶですか",
                ruby: "<ruby>棚<rt>たな</rt></ruby>に<ruby>出<rt>で</rt></ruby>ている<ruby>分<rt>ぶん</rt></ruby>で<ruby>全部<rt>ぜんぶ</rt></ruby>ですか。",
                romaji: "Tana ni dete iru bun de zenbu desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "色によっては、裏に在庫があるかもしれません。",
                target: "いろによっては うらにざいこがあるかもしれません",
                ruby: "<ruby>色<rt>いろ</rt></ruby>によっては、<ruby>裏<rt>うら</rt></ruby>に<ruby>在庫<rt>ざいこ</rt></ruby>があるかもしれません。",
                romaji: "Iro ni yotte wa, ura ni zaiko ga aru kamoshiremasen."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "黒のMサイズを確認していただけますか。",
                target: "くろのえむさいずをかくにんしていただけますか",
                ruby: "<ruby>黒<rt>くろ</rt></ruby>のMサイズを<ruby>確認<rt>かくにん</rt></ruby>していただけますか。",
                romaji: "Kuro no emu saizu o kakunin shite itadakemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "少しお待ちください。倉庫を見てまいります。",
                target: "すこしおまちください そうこをみてまいります",
                ruby: "<ruby>少<rt>すこ</rt></ruby>しお<ruby>待<rt>ま</rt></ruby>ちください。<ruby>倉庫<rt>そうこ</rt></ruby>を<ruby>見<rt>み</rt></ruby>てまいります。",
                romaji: "Sukoshi o-machi kudasai. Sōko o mite mairimasu."
            }
        ],
        {
            ja: ["客：棚に出ている分で全部ですか。", "店員：色によっては、裏に在庫があるかもしれません。", "客：黒のMサイズを確認していただけますか。", "店員：少しお待ちください。倉庫を見てまいります。"],
            en: ["Customer: Is everything on the shelf all that you have?", "Store Staff: Depending on the color, we may have stock in the back.", "Customer: Could you check the black one in size M?", "Store Staff: Please wait a moment. I will check the stockroom."],
            "zh-CN": ["顾客：货架上摆出来的就是全部吗？", "店员：根据颜色，后面可能还有库存。", "顾客：可以帮我确认黑色M码吗？", "店员：请稍等。我去仓库看一下。"],
            "zh-TW": ["顧客：貨架上擺出來的就是全部嗎？", "店員：根據顏色，後面可能還有庫存。", "顧客：可以幫我確認黑色M號嗎？", "店員：請稍等。我去倉庫看一下。"],
            ko: ["손님: 진열대에 나와 있는 것이 전부인가요?", "점원: 색상에 따라 뒤쪽에 재고가 있을지도 모릅니다.", "손님: 검정색 M 사이즈를 확인해 주실 수 있나요?", "점원: 잠시만 기다려 주세요. 창고를 확인하고 오겠습니다."],
            vi: ["Khách hàng: Tất cả chỉ là phần đang bày trên kệ thôi ạ?", "Nhân viên cửa hàng: Tùy màu, có thể còn hàng ở phía sau.", "Khách hàng: Anh/chị có thể kiểm tra cỡ M màu đen giúp tôi không ạ?", "Nhân viên cửa hàng: Xin chờ một chút. Tôi sẽ kiểm tra kho."],
            tl: ["Customer: Ito na po ba ang lahat ng nasa shelf?", "Staff ng tindahan: Depende po sa kulay, maaaring may stock pa sa likod.", "Customer: Pwede po bang i-check ang black na M size?", "Staff ng tindahan: Sandali lang po. Titingnan ko po sa stockroom."],
            id: ["Pelanggan: Apakah yang ada di rak ini semuanya?", "Staf toko: Tergantung warnanya, mungkin ada stok di belakang.", "Pelanggan: Bisa tolong cek warna hitam ukuran M?", "Staf toko: Mohon tunggu sebentar. Saya akan melihat gudang."],
            th: ["ลูกค้า: ที่วางบนชั้นคือทั้งหมดแล้วใช่ไหมคะ/ครับ", "พนักงานร้าน: แล้วแต่สี อาจมีสต็อกด้านหลังค่ะ/ครับ", "ลูกค้า: ช่วยเช็กสีดำไซซ์ M ได้ไหมคะ/ครับ", "พนักงานร้าน: กรุณารอสักครู่ จะไปดูที่คลังสินค้าค่ะ/ครับ"],
            my: ["ဖောက်သည်: shelf ပေါ်မှာ ပြထားတာက အကုန်လား။", "ဆိုင်ဝန်ထမ်း: အရောင်ပေါ်မူတည်ပြီး အနောက်မှာ stock ရှိနိုင်ပါတယ်။", "ဖောက်သည်: အနက်ရောင် M size ကို စစ်ပေးနိုင်ပါသလား။", "ဆိုင်ဝန်ထမ်း: ခဏစောင့်ပေးပါ။ stockroom ကို ကြည့်လာပါမယ်။"],
            km: ["អតិថិជន: តើទំនិញដែលដាក់លើធ្នើគឺទាំងអស់ហើយទេ?", "បុគ្គលិកហាង: អាស្រ័យលើពណ៌ អាចមានស្តុកនៅខាងក្រោយ។", "អតិថិជន: តើអាចពិនិត្យពណ៌ខ្មៅទំហំ M ឱ្យបានទេ?", "បុគ្គលិកហាង: សូមរង់ចាំបន្តិច។ ខ្ញុំនឹងទៅមើលឃ្លាំង។"],
            ne: ["ग्राहक: र्याकमा राखिएको यही सबै हो?", "पसलका कर्मचारी: रङअनुसार पछाडि स्टक हुन सक्छ।", "ग्राहक: कालो M साइज जाँच गरिदिन सक्नुहुन्छ?", "पसलका कर्मचारी: एकछिन पर्खनुहोस्। म गोदाम हेरेर आउँछु।"],
            mn: ["Үйлчлүүлэгч: Лангуун дээр байгаа нь бүгд үү?", "Дэлгүүрийн ажилтан: Өнгөнөөсөө хамаараад ард нөөц байж магадгүй.", "Үйлчлүүлэгч: Хар өнгийн M хэмжээг шалгаж өгч болох уу?", "Дэлгүүрийн ажилтан: Түр хүлээнэ үү. Агуулахыг шалгаад ирье."],
            si: ["පාරිභෝගිකයා: rack එකේ තියෙන්නේම ඔක්කොමද?", "වෙළඳසැලේ සේවකයා: පාට අනුව stock එක පසුපස තිබිය හැක.", "පාරිභෝගිකයා: black M size එක check කරලා දෙන්න පුළුවන්ද?", "වෙළඳසැලේ සේවකයා: කරුණාකර මොහොතක් රැඳී සිටින්න. stockroom එක බලලා එන්නම්."],
            bn: ["গ্রাহক: তাকের ওপর যা আছে সেটাই সব?", "দোকানের কর্মী: রঙের ওপর নির্ভর করে পেছনে স্টক থাকতে পারে।", "গ্রাহক: কালো M সাইজটি দেখে দিতে পারবেন?", "দোকানের কর্মী: একটু অপেক্ষা করুন। আমি স্টকরুম দেখে আসছি।"],
            pt: ["Cliente: O que está na prateleira é tudo?", "Funcionário da loja: Dependendo da cor, pode haver estoque nos fundos.", "Cliente: Poderia verificar o tamanho M em preto?", "Funcionário da loja: Aguarde um momento. Vou verificar o estoque."],
            es: ["Cliente: ¿Todo lo que tienen está en el estante?", "Empleado de la tienda: Dependiendo del color, puede que haya stock en la parte de atrás.", "Cliente: ¿Podría revisar el negro en talla M?", "Empleado de la tienda: Espere un momento. Voy a revisar el almacén."],
            fr: ["Client : Tout ce que vous avez est sur l’étagère ?", "Employé du magasin : Selon la couleur, il peut y avoir du stock à l’arrière.", "Client : Pourriez-vous vérifier le noir en taille M ?", "Employé du magasin : Veuillez patienter un instant. Je vais vérifier la réserve."],
            ru: ["Клиент: Всё, что есть, уже на полке?", "Сотрудник магазина: В зависимости от цвета, запас может быть на складе сзади.", "Клиент: Можете проверить чёрный размер M?", "Сотрудник магазина: Подождите немного. Я посмотрю на складе."],
            uk: ["Клієнт: Усе, що є, уже на полиці?", "Працівник магазину: Залежно від кольору, запас може бути позаду на складі.", "Клієнт: Можете перевірити чорний розмір M?", "Працівник магазину: Зачекайте трохи. Я перевірю на складі."]
        }
    ),

    makeA2SmartShoppingDialogue(
        "a2_smart_shop_006",
        "予算内におさめる",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "今日は三千円以内におさめたいです。",
                target: "きょうはさんぜんえんいないにおさめたいです",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>三千円以内<rt>さんぜんえんいない</rt></ruby>におさめたいです。",
                romaji: "Kyō wa sanzen-en inai ni osametai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "必要な物を先に選ぶと、予算を超えにくいです。",
                target: "ひつようなものをさきにえらぶと よさんをこえにくいです",
                ruby: "<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>物<rt>もの</rt></ruby>を<ruby>先<rt>さき</rt></ruby>に<ruby>選<rt>えら</rt></ruby>ぶと、<ruby>予算<rt>よさん</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えにくいです。",
                romaji: "Hitsuyō na mono o saki ni erabu to, yosan o koenikui desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "迷っている物は、次回に回してもいいですね。",
                target: "まよっているものは じかいにまわしてもいいですね",
                ruby: "<ruby>迷<rt>まよ</rt></ruby>っている<ruby>物<rt>もの</rt></ruby>は、<ruby>次回<rt>じかい</rt></ruby>に<ruby>回<rt>まわ</rt></ruby>してもいいですね。",
                romaji: "Mayotte iru mono wa, jikai ni mawashite mo ii desu ne."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "はい、必要になってから買うのも良い方法です。",
                target: "はい ひつようになってからかうのもいいほうほうです",
                ruby: "はい、<ruby>必要<rt>ひつよう</rt></ruby>になってから<ruby>買<rt>か</rt></ruby>うのも<ruby>良<rt>い</rt></ruby>い<ruby>方法<rt>ほうほう</rt></ruby>です。",
                romaji: "Hai, hitsuyō ni natte kara kau no mo ii hōhō desu."
            }
        ],
        {
            ja: ["客：今日は三千円以内におさめたいです。", "店員：必要な物を先に選ぶと、予算を超えにくいです。", "客：迷っている物は、次回に回してもいいですね。", "店員：はい、必要になってから買うのも良い方法です。"],
            en: ["Customer: Today, I want to keep it under 3,000 yen.", "Store Staff: If you choose the necessary items first, it is harder to go over your budget.", "Customer: For things I am unsure about, I can leave them for next time.", "Store Staff: Yes, buying something after you really need it is also a good method."],
            "zh-CN": ["顾客：今天我想控制在三千日元以内。", "店员：先选择必要的东西，就不容易超出预算。", "顾客：犹豫的东西可以留到下次再买呢。", "店员：是的，等真正需要时再买也是好方法。"],
            "zh-TW": ["顧客：今天我想控制在三千日圓以內。", "店員：先選擇必要的東西，就不容易超出預算。", "顧客：猶豫的東西可以留到下次再買呢。", "店員：是的，等真正需要時再買也是好方法。"],
            ko: ["손님: 오늘은 3천 엔 이내로 맞추고 싶습니다.", "점원: 필요한 물건을 먼저 고르면 예산을 넘기기 어렵습니다.", "손님: 고민 중인 물건은 다음번으로 미뤄도 되겠네요.", "점원: 네, 필요해진 뒤에 사는 것도 좋은 방법입니다."],
            vi: ["Khách hàng: Hôm nay tôi muốn giữ trong vòng 3,000 yên.", "Nhân viên cửa hàng: Nếu chọn đồ cần thiết trước thì khó vượt ngân sách hơn.", "Khách hàng: Những món còn phân vân thì để lần sau cũng được nhỉ.", "Nhân viên cửa hàng: Vâng, mua sau khi thật sự cần cũng là một cách tốt."],
            tl: ["Customer: Gusto kong manatili sa loob ng 3,000 yen ngayon.", "Staff ng tindahan: Kung pipiliin muna ang kailangan, mas mahirap lumampas sa budget.", "Customer: Ang mga bagay na pinag-iisipan ko pa ay puwede nang sa susunod na lang.", "Staff ng tindahan: Oo, magandang paraan din ang bumili kapag kailangan na talaga."],
            id: ["Pelanggan: Hari ini saya ingin menahan belanja di bawah 3.000 yen.", "Staf toko: Jika memilih barang yang perlu terlebih dahulu, lebih sulit melewati anggaran.", "Pelanggan: Barang yang masih saya ragukan bisa saya tunda sampai lain kali ya.", "Staf toko: Ya, membeli setelah benar-benar diperlukan juga cara yang baik."],
            th: ["ลูกค้า: วันนี้อยากให้อยู่ภายใน 3,000 เยนค่ะ/ครับ", "พนักงานร้าน: ถ้าเลือกของจำเป็นก่อน จะไม่เกินงบง่ายค่ะ/ครับ", "ลูกค้า: ของที่ยังลังเล เก็บไว้ซื้อครั้งหน้าก็ได้นะคะ/ครับ", "พนักงานร้าน: ใช่ค่ะ/ครับ ซื้อเมื่อจำเป็นจริง ๆ ก็เป็นวิธีที่ดีค่ะ/ครับ"],
            my: ["ဖောက်သည်: ဒီနေ့ ၃,၀၀၀ ယန်းအတွင်းပဲ ဝယ်ချင်ပါတယ်။", "ဆိုင်ဝန်ထမ်း: လိုအပ်တဲ့ပစ္စည်းကို အရင်ရွေးရင် budget မကျော်လွယ်ပါဘူး။", "ဖောက်သည်: မဆုံးဖြတ်နိုင်သေးတဲ့ပစ္စည်းတွေကို နောက်တစ်ခါအတွက် ထားလည်းရတယ်နော်။", "ဆိုင်ဝန်ထမ်း: ဟုတ်ကဲ့၊ တကယ်လိုအပ်လာမှ ဝယ်တာလည်း ကောင်းတဲ့နည်းလမ်းပါ။"],
            km: ["អតិថិជន: ថ្ងៃនេះខ្ញុំចង់រក្សាឱ្យនៅក្រោម 3,000 យ៉េន។", "បុគ្គលិកហាង: បើជ្រើសរើសរបស់ចាំបាច់មុន នឹងមិនងាយលើសថវិកាទេ។", "អតិថិជន: របស់ដែលខ្ញុំមិនទាន់ប្រាកដ អាចទុកលើកក្រោយបាន។", "បុគ្គលិកហាង: បាទ/ចាស ការទិញបន្ទាប់ពីចាំបាច់ពិតៗក៏ជាវិធីល្អដែរ។"],
            ne: ["ग्राहक: आज ३,००० येनभित्र राख्न चाहन्छु।", "पसलका कर्मचारी: आवश्यक सामान पहिले छान्दा बजेट नाघ्न गाह्रो हुन्छ।", "ग्राहक: अलमल भएको सामान अर्को पटक किन्न पनि मिल्छ है।", "पसलका कर्मचारी: हो, साँच्चै आवश्यक भएपछि किन्नु पनि राम्रो तरिका हो।"],
            mn: ["Үйлчлүүлэгч: Өнөөдөр 3,000 иен дотор багтаамаар байна.", "Дэлгүүрийн ажилтан: Хэрэгтэй зүйлээ түрүүлж сонговол төсвөөс хэтрэхгүй байх амар.", "Үйлчлүүлэгч: Эргэлзэж байгаа зүйлээ дараагийн удаад үлдээж болноですね.", "Дэлгүүрийн ажилтан: Тийм, үнэхээр хэрэгтэй болсон үед авах нь ч сайн арга."],
            si: ["පාරිභෝගිකයා: අද yen 3,000ක් ඇතුළත තබාගන්න ඕනේ.", "වෙළඳසැලේ සේවකයා: අවශ්‍ය දේවල් මුලින් තෝරගත්තොත් budget එක ඉක්මවා යන්න අමාරුයි.", "පාරිභෝගිකයා: තවම සැක දේවල් ඊළඟ වතාවට දාන්නත් පුළුවන් නේ.", "වෙළඳසැලේ සේවකයා: ඔව්, ඇත්තටම අවශ්‍ය වූ විට මිලදී ගැනීමත් හොඳ ක්‍රමයක්."],
            bn: ["গ্রাহক: আজ ৩,০০০ ইয়েনের মধ্যে রাখতে চাই।", "দোকানের কর্মী: দরকারি জিনিস আগে বেছে নিলে বাজেট ছাড়ানো কঠিন হয়।", "গ্রাহক: যেগুলো নিয়ে দ্বিধায় আছি, সেগুলো পরের বারেও রাখা যায়।", "দোকানের কর্মী: হ্যাঁ, সত্যিই দরকার হলে পরে কেনাও ভালো উপায়।"],
            pt: ["Cliente: Hoje quero ficar dentro de 3.000 ienes.", "Funcionário da loja: Se escolher primeiro os itens necessários, é mais difícil passar do orçamento.", "Cliente: As coisas sobre as quais estou em dúvida podem ficar para a próxima vez.", "Funcionário da loja: Sim, comprar depois que realmente precisar também é uma boa forma."],
            es: ["Cliente: Hoy quiero mantenerme dentro de 3.000 yenes.", "Empleado de la tienda: Si elige primero lo necesario, es más difícil superar el presupuesto.", "Cliente: Lo que todavía me causa duda puedo dejarlo para la próxima vez.", "Empleado de la tienda: Sí, comprarlo cuando realmente lo necesite también es una buena manera."],
            fr: ["Client : Aujourd’hui, je veux rester sous les 3 000 yens.", "Employé du magasin : Si vous choisissez d’abord les articles nécessaires, il est plus difficile de dépasser le budget.", "Client : Les choses pour lesquelles j’hésite peuvent attendre la prochaine fois.", "Employé du magasin : Oui, acheter quand cela devient vraiment nécessaire est aussi une bonne méthode."],
            ru: ["Клиент: Сегодня хочу уложиться в 3 000 иен.", "Сотрудник магазина: Если сначала выбрать необходимые вещи, сложнее выйти за бюджет.", "Клиент: То, в чём сомневаюсь, можно оставить на следующий раз.", "Сотрудник магазина: Да, покупать после того, как вещь действительно понадобится, тоже хороший способ."],
            uk: ["Клієнт: Сьогодні хочу вкластися в 3 000 єн.", "Працівник магазину: Якщо спочатку вибрати необхідні речі, складніше перевищити бюджет.", "Клієнт: Те, щодо чого я вагаюся, можна залишити на наступний раз.", "Працівник магазину: Так, купувати після того, як річ справді знадобиться, теж хороший спосіб."]
        }
    ),

    makeA2SmartShoppingDialogue(
        "a2_smart_shop_007",
        "返品条件を確認してから買う",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "家でサイズを確認してから使いたいです。",
                target: "いえでさいずをかくにんしてからつかいたいです",
                ruby: "<ruby>家<rt>いえ</rt></ruby>でサイズを<ruby>確認<rt>かくにん</rt></ruby>してから<ruby>使<rt>つか</rt></ruby>いたいです。",
                romaji: "Ie de saizu o kakunin shite kara tsukaitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "開封後は返品できませんので、ご注意ください。",
                target: "かいふうごはへんぴんできませんので ごちゅういください",
                ruby: "<ruby>開封後<rt>かいふうご</rt></ruby>は<ruby>返品<rt>へんぴん</rt></ruby>できませんので、ご<ruby>注意<rt>ちゅうい</rt></ruby>ください。",
                romaji: "Kaifū-go wa henpin dekimasen node, go-chūi kudasai."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "袋を開けなければ、返品できますか。",
                target: "ふくろをあけなければ へんぴんできますか",
                ruby: "<ruby>袋<rt>ふくろ</rt></ruby>を<ruby>開<rt>あ</rt></ruby>けなければ、<ruby>返品<rt>へんぴん</rt></ruby>できますか。",
                romaji: "Fukuro o akenakereba, henpin dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "七日以内で、レシートがあれば対応できます。",
                target: "なのかいないで れしーとがあればたいおうできます",
                ruby: "<ruby>七日以内<rt>なのかいない</rt></ruby>で、レシートがあれば<ruby>対応<rt>たいおう</rt></ruby>できます。",
                romaji: "Nanoka inai de, reshīto ga areba taiō dekimasu."
            }
        ],
        {
            ja: ["客：家でサイズを確認してから使いたいです。", "店員：開封後は返品できませんので、ご注意ください。", "客：袋を開けなければ、返品できますか。", "店員：七日以内で、レシートがあれば対応できます。"],
            en: ["Customer: I want to check the size at home before using it.", "Store Staff: Please note that it cannot be returned after opening.", "Customer: If I do not open the bag, can I return it?", "Store Staff: We can handle it within seven days if you have the receipt."],
            "zh-CN": ["顾客：我想回家确认尺寸后再使用。", "店员：开封后不能退货，请注意。", "顾客：如果不打开袋子，可以退货吗？", "店员：七天以内，并且有收据的话可以处理。"],
            "zh-TW": ["顧客：我想回家確認尺寸後再使用。", "店員：開封後不能退貨，請注意。", "顧客：如果不打開袋子，可以退貨嗎？", "店員：七天以內，並且有收據的話可以處理。"],
            ko: ["손님: 집에서 사이즈를 확인한 뒤 사용하고 싶습니다.", "점원: 개봉 후에는 반품할 수 없으니 주의해 주세요.", "손님: 봉투를 열지 않으면 반품할 수 있나요?", "점원: 7일 이내이고 영수증이 있으면 대응할 수 있습니다."],
            vi: ["Khách hàng: Tôi muốn kiểm tra kích cỡ ở nhà rồi mới dùng.", "Nhân viên cửa hàng: Xin lưu ý rằng sau khi mở bao bì thì không thể trả hàng.", "Khách hàng: Nếu tôi không mở túi thì có thể trả hàng không ạ?", "Nhân viên cửa hàng: Nếu trong vòng bảy ngày và có hóa đơn thì chúng tôi có thể xử lý."],
            tl: ["Customer: Gusto kong i-check muna ang size sa bahay bago gamitin.", "Staff ng tindahan: Pakitandaan po na hindi na puwedeng i-return kapag nabuksan na.", "Customer: Kung hindi ko bubuksan ang bag, puwede po bang i-return?", "Staff ng tindahan: Maaari po kung within seven days at may receipt."],
            id: ["Pelanggan: Saya ingin mengecek ukuran di rumah sebelum menggunakannya.", "Staf toko: Harap diperhatikan, setelah dibuka tidak bisa dikembalikan.", "Pelanggan: Kalau saya tidak membuka kantongnya, apakah bisa dikembalikan?", "Staf toko: Bisa kami tangani dalam tujuh hari jika ada struk."],
            th: ["ลูกค้า: อยากตรวจสอบขนาดที่บ้านก่อนใช้ค่ะ/ครับ", "พนักงานร้าน: หลังเปิดบรรจุภัณฑ์แล้วไม่สามารถคืนสินค้าได้ กรุณาระวังค่ะ/ครับ", "ลูกค้า: ถ้าไม่เปิดถุง สามารถคืนได้ไหมคะ/ครับ", "พนักงานร้าน: ภายในเจ็ดวันและมีใบเสร็จ สามารถดำเนินการได้ค่ะ/ครับ"],
            my: ["ဖောက်သည်: အိမ်မှာ size ကို စစ်ပြီးမှ သုံးချင်ပါတယ်။", "ဆိုင်ဝန်ထမ်း: ဖွင့်ပြီးနောက် return လုပ်လို့မရပါ၊ သတိပြုပေးပါ။", "ဖောက်သည်: အိတ်မဖွင့်ဘူးဆို return လုပ်လို့ရပါသလား။", "ဆိုင်ဝန်ထမ်း: ၇ ရက်အတွင်းဖြစ်ပြီး receipt ရှိရင် လုပ်ပေးနိုင်ပါတယ်။"],
            km: ["អតិថិជន: ខ្ញុំចង់ពិនិត្យទំហំនៅផ្ទះមុនប្រើ។", "បុគ្គលិកហាង: សូមប្រយ័ត្ន បើបើកកញ្ចប់ហើយ មិនអាចត្រឡប់ទំនិញបានទេ។", "អតិថិជន: បើមិនបើកថង់ តើអាចត្រឡប់បានទេ?", "បុគ្គលិកហាង: ក្នុងរយៈពេល 7 ថ្ងៃ និងមានវិក្កយបត្រ យើងអាចដោះស្រាយបាន។"],
            ne: ["ग्राहक: घरमा साइज जाँच गरेपछि प्रयोग गर्न चाहन्छु।", "पसलका कर्मचारी: खोलिसकेपछि फिर्ता गर्न मिल्दैन, कृपया ध्यान दिनुहोस्।", "ग्राहक: झोला नखोले फिर्ता गर्न मिल्छ?", "पसलका कर्मचारी: सात दिनभित्र र रसिद भए हामी प्रक्रिया गर्न सक्छौं।"],
            mn: ["Үйлчлүүлэгч: Гэртээ хэмжээг шалгасны дараа ашигламаар байна.", "Дэлгүүрийн ажилтан: Нээсний дараа буцаах боломжгүй тул анхаарна уу.", "Үйлчлүүлэгч: Уутыг нээхгүй бол буцааж болох уу?", "Дэлгүүрийн ажилтан: 7 хоногийн дотор, баримттай бол шийдвэрлэх боломжтой."],
            si: ["පාරිභෝගිකයා: ගෙදර size එක check කරලා පසුව භාවිතා කරන්න ඕනේ.", "වෙළඳසැලේ සේවකයා: package එක විවෘත කළ පසු return කළ නොහැකි බව කරුණාකර සැලකිල්ලට ගන්න.", "පාරිභෝගිකයා: bag එක විවෘත නොකරනවා නම් return කරන්න පුළුවන්ද?", "වෙළඳසැලේ සේවකයා: දින 7ක් ඇතුළත සහ receipt එක තියෙනවා නම් handle කළ හැක."],
            bn: ["গ্রাহক: বাড়িতে সাইজ দেখে তারপর ব্যবহার করতে চাই।", "দোকানের কর্মী: খোলার পর ফেরত দেওয়া যাবে না, দয়া করে খেয়াল রাখুন।", "গ্রাহক: ব্যাগ না খুললে কি ফেরত দেওয়া যাবে?", "দোকানের কর্মী: সাত দিনের মধ্যে এবং রসিদ থাকলে ব্যবস্থা করা যাবে।"],
            pt: ["Cliente: Quero verificar o tamanho em casa antes de usar.", "Funcionário da loja: Observe que, depois de aberto, não pode ser devolvido.", "Cliente: Se eu não abrir a embalagem, posso devolver?", "Funcionário da loja: Podemos atender dentro de sete dias se tiver o recibo."],
            es: ["Cliente: Quiero comprobar el tamaño en casa antes de usarlo.", "Empleado de la tienda: Tenga en cuenta que después de abrirlo no se puede devolver.", "Cliente: Si no abro la bolsa, ¿puedo devolverlo?", "Empleado de la tienda: Podemos atenderlo dentro de siete días si tiene el recibo."],
            fr: ["Client : Je veux vérifier la taille à la maison avant de l’utiliser.", "Employé du magasin : Veuillez noter qu’après ouverture, le retour n’est pas possible.", "Client : Si je n’ouvre pas le sachet, puis-je le retourner ?", "Employé du magasin : Nous pouvons le traiter dans les sept jours si vous avez le reçu."],
            ru: ["Клиент: Хочу дома проверить размер перед использованием.", "Сотрудник магазина: Обратите внимание, после вскрытия возврат невозможен.", "Клиент: Если не открывать пакет, можно вернуть?", "Сотрудник магазина: В течение семи дней и при наличии чека мы можем принять возврат."],
            uk: ["Клієнт: Хочу вдома перевірити розмір перед використанням.", "Працівник магазину: Зверніть увагу, після відкриття повернення неможливе.", "Клієнт: Якщо не відкривати пакет, можна повернути?", "Працівник магазину: Протягом семи днів і за наявності чека ми можемо прийняти повернення."]
        }
    ),

    makeA2SmartShoppingDialogue(
        "a2_smart_shop_008",
        "セルフレジを使う",
        [
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "セルフレジは初めてなので、少し不安です。",
                target: "せるふれじははじめてなので すこしふあんです",
                ruby: "セルフレジは<ruby>初<rt>はじ</rt></ruby>めてなので、<ruby>少<rt>すこ</rt></ruby>し<ruby>不安<rt>ふあん</rt></ruby>です。",
                romaji: "Serufu reji wa hajimete na node, sukoshi fuan desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "画面の案内に沿って進めれば大丈夫です。",
                target: "がめんのあんないにそってすすめればだいじょうぶです",
                ruby: "<ruby>画面<rt>がめん</rt></ruby>の<ruby>案内<rt>あんない</rt></ruby>に<ruby>沿<rt>そ</rt></ruby>って<ruby>進<rt>すす</rt></ruby>めれば<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。",
                romaji: "Gamen no annai ni sotte susumereba daijōbu desu."
            },
            {
                label: "話者B",
                key: "customer",
                name: "客",
                line: "バーコードがない商品はどうしますか。",
                target: "ばーこーどがないしょうひんはどうしますか",
                ruby: "バーコードがない<ruby>商品<rt>しょうひん</rt></ruby>はどうしますか。",
                romaji: "Bākōdo ga nai shōhin wa dō shimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "店員",
                line: "画面の一覧から商品名を選んでください。",
                target: "がめんのいちらんからしょうひんめいをえらんでください",
                ruby: "<ruby>画面<rt>がめん</rt></ruby>の<ruby>一覧<rt>いちらん</rt></ruby>から<ruby>商品名<rt>しょうひんめい</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んでください。",
                romaji: "Gamen no ichiran kara shōhin-mei o erande kudasai."
            }
        ],
        {
            ja: ["客：セルフレジは初めてなので、少し不安です。", "店員：画面の案内に沿って進めれば大丈夫です。", "客：バーコードがない商品はどうしますか。", "店員：画面の一覧から商品名を選んでください。"],
            en: ["Customer: This is my first time using self-checkout, so I feel a little nervous.", "Store Staff: It is okay if you follow the instructions on the screen.", "Customer: What should I do with items that do not have a barcode?", "Store Staff: Please choose the product name from the list on the screen."],
            "zh-CN": ["顾客：我是第一次使用自助收银，所以有点不安。", "店员：按照画面上的指示操作就可以。", "顾客：没有条码的商品怎么办？", "店员：请从画面上的列表中选择商品名。"],
            "zh-TW": ["顧客：我是第一次使用自助收銀，所以有點不安。", "店員：按照畫面上的指示操作就可以。", "顧客：沒有條碼的商品怎麼辦？", "店員：請從畫面上的列表中選擇商品名。"],
            ko: ["손님: 셀프 계산대는 처음이라 조금 불안합니다.", "점원: 화면 안내에 따라 진행하면 괜찮습니다.", "손님: 바코드가 없는 상품은 어떻게 하나요?", "점원: 화면의 목록에서 상품명을 선택해 주세요."],
            vi: ["Khách hàng: Đây là lần đầu tôi dùng quầy tự thanh toán nên hơi lo.", "Nhân viên cửa hàng: Nếu làm theo hướng dẫn trên màn hình thì không sao.", "Khách hàng: Sản phẩm không có mã vạch thì làm thế nào ạ?", "Nhân viên cửa hàng: Xin hãy chọn tên sản phẩm từ danh sách trên màn hình."],
            tl: ["Customer: First time ko pong gumamit ng self-checkout, kaya medyo kinakabahan ako.", "Staff ng tindahan: Okay lang po kung susundin ang instructions sa screen.", "Customer: Ano po ang gagawin sa item na walang barcode?", "Staff ng tindahan: Piliin po ang product name mula sa list sa screen."],
            id: ["Pelanggan: Ini pertama kali saya memakai kasir mandiri, jadi saya sedikit khawatir.", "Staf toko: Tidak apa-apa jika mengikuti petunjuk di layar.", "Pelanggan: Bagaimana dengan barang yang tidak memiliki barcode?", "Staf toko: Pilih nama produk dari daftar di layar."],
            th: ["ลูกค้า: ใช้ self-checkout ครั้งแรก เลยกังวลนิดหน่อยค่ะ/ครับ", "พนักงานร้าน: ถ้าทำตามคำแนะนำบนหน้าจอก็ไม่เป็นไรค่ะ/ครับ", "ลูกค้า: สินค้าที่ไม่มีบาร์โค้ดต้องทำอย่างไรคะ/ครับ", "พนักงานร้าน: กรุณาเลือกชื่อสินค้าจากรายการบนหน้าจอค่ะ/ครับ"],
            my: ["ဖောက်သည်: self-checkout သုံးတာ ပထမဆုံးဖြစ်လို့ နည်းနည်းစိုးရိမ်ပါတယ်။", "ဆိုင်ဝန်ထမ်း: screen ပေါ်က ညွှန်ကြားချက်အတိုင်း ဆက်လုပ်ရင် ရပါတယ်။", "ဖောက်သည်: barcode မရှိတဲ့ပစ္စည်းဆို ဘယ်လိုလုပ်ရမလဲ။", "ဆိုင်ဝန်ထမ်း: screen ပေါ်က list ထဲက product name ကို ရွေးပေးပါ။"],
            km: ["អតិថិជន: នេះជាលើកដំបូងដែលខ្ញុំប្រើ self-checkout ដូច្នេះខ្ញុំបារម្ភបន្តិច។", "បុគ្គលិកហាង: ប្រសិនបើធ្វើតាមការណែនាំលើអេក្រង់ គ្មានបញ្ហាទេ។", "អតិថិជន: ចំពោះទំនិញដែលគ្មាន barcode ត្រូវធ្វើដូចម្តេច?", "បុគ្គលិកហាង: សូមជ្រើសឈ្មោះទំនិញពីបញ្ជីលើអេក្រង់។"],
            ne: ["ग्राहक: self-checkout पहिलो पटक भएकाले अलि चिन्ता लागेको छ।", "पसलका कर्मचारी: स्क्रिनको निर्देशनअनुसार अघि बढे ठीक हुन्छ।", "ग्राहक: barcode नभएको सामान के गर्ने?", "पसलका कर्मचारी: स्क्रिनको सूचीबाट सामानको नाम छान्नुहोस्।"],
            mn: ["Үйлчлүүлэгч: Self-checkout анх удаа хэрэглэж байгаа болохоор жаахан санаа зовж байна.", "Дэлгүүрийн ажилтан: Дэлгэцийн зааврыг дагаад явбал зүгээр.", "Үйлчлүүлэгч: Бар кодгүй барааг яах вэ?", "Дэлгүүрийн ажилтан: Дэлгэц дээрх жагсаалтаас барааны нэрийг сонгоно уу."],
            si: ["පාරිභෝගිකයා: self-checkout පළමු වතාව නිසා ටිකක් බයයි.", "වෙළඳසැලේ සේවකයා: screen එකේ උපදෙස් අනුව කළොත් හරි.", "පාරිභෝගිකයා: barcode නැති භාණ්ඩයක් නම් මොකද කරන්නේ?", "වෙළඳසැලේ සේවකයා: screen එකේ list එකෙන් product name එක තෝරන්න."],
            bn: ["গ্রাহক: self-checkout প্রথমবার, তাই একটু চিন্তা হচ্ছে।", "দোকানের কর্মী: স্ক্রিনের নির্দেশনা অনুসরণ করলে ঠিক হবে।", "গ্রাহক: যেসব পণ্যে barcode নেই, সেগুলো কী করব?", "দোকানের কর্মী: স্ক্রিনের তালিকা থেকে পণ্যের নাম নির্বাচন করুন।"],
            pt: ["Cliente: É a primeira vez que uso o autoatendimento, então estou um pouco inseguro.", "Funcionário da loja: Tudo bem se seguir as instruções na tela.", "Cliente: O que faço com produtos sem código de barras?", "Funcionário da loja: Escolha o nome do produto na lista da tela."],
            es: ["Cliente: Es la primera vez que uso el autocobro, así que estoy un poco nervioso.", "Empleado de la tienda: Está bien si sigue las instrucciones de la pantalla.", "Cliente: ¿Qué hago con los productos que no tienen código de barras?", "Empleado de la tienda: Elija el nombre del producto en la lista de la pantalla."],
            fr: ["Client : C’est la première fois que j’utilise la caisse automatique, donc je suis un peu inquiet.", "Employé du magasin : Tout ira bien si vous suivez les instructions à l’écran.", "Client : Que dois-je faire avec les produits sans code-barres ?", "Employé du magasin : Choisissez le nom du produit dans la liste à l’écran."],
            ru: ["Клиент: Я впервые пользуюсь кассой самообслуживания, поэтому немного переживаю.", "Сотрудник магазина: Всё будет нормально, если следовать указаниям на экране.", "Клиент: Что делать с товаром без штрихкода?", "Сотрудник магазина: Выберите название товара из списка на экране."],
            uk: ["Клієнт: Я вперше користуюся касою самообслуговування, тому трохи хвилююся.", "Працівник магазину: Усе буде добре, якщо дотримуватися вказівок на екрані.", "Клієнт: Що робити з товаром без штрихкоду?", "Працівник магазину: Виберіть назву товару зі списку на екрані."]
        }
    )

];