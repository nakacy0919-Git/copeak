// =====================================================
// Japeak A1 Level
// Scene: 住民としてのマナーを理解しよう
// Category Key: a1_resident_manners
// =====================================================

const a1ResidentMannersContext = {
    ja: "日本で住民として生活するときの、ごみ出し、分別、騒音、自転車、共用スペース、ペット、あいさつ、掃除当番について話す練習です。",
    en: "Practice Japanese for daily manners as a resident in Japan, including garbage rules, sorting, noise, bicycles, shared spaces, pets, greetings, and cleaning duty.",
    "zh-CN": "练习在日本作为居民生活时使用的日语，包括丢垃圾、分类、噪音、自行车、公共空间、宠物、问候和清扫值日。",
    "zh-TW": "練習在日本作為居民生活時使用的日語，包括丟垃圾、分類、噪音、自行車、公共空間、寵物、問候和清掃值日。",
    ko: "일본에서 주민으로 생활할 때 필요한 쓰레기 배출, 분리수거, 소음, 자전거, 공용 공간, 반려동물, 인사, 청소 당번에 대해 말하는 연습입니다.",
    vi: "Luyện tiếng Nhật về cách sống như một cư dân ở Nhật: đổ rác, phân loại rác, tiếng ồn, xe đạp, không gian chung, thú cưng, chào hỏi và trực vệ sinh.",
    tl: "Practice ng Japanese tungkol sa manners bilang residente sa Japan: basura, paghihiwalay ng basura, ingay, bisikleta, shared spaces, pets, greetings, at cleaning duty.",
    id: "Latihan bahasa Jepang tentang tata krama sebagai warga di Jepang: sampah, pemilahan, kebisingan, sepeda, ruang bersama, hewan peliharaan, salam, dan tugas bersih-bersih.",
    th: "ฝึกภาษาญี่ปุ่นเกี่ยวกับมารยาทของผู้อยู่อาศัยในญี่ปุ่น เช่น การทิ้งขยะ การแยกขยะ เสียงรบกวน จักรยาน พื้นที่ส่วนกลาง สัตว์เลี้ยง การทักทาย และเวรทำความสะอาด",
    my: "ဂျပန်တွင် နေထိုင်သူတစ်ဦးအဖြစ် အမှိုက်ပစ်ခြင်း၊ အမှိုက်ခွဲခြင်း၊ ဆူညံသံ၊ စက်ဘီး၊ ပူးတွဲအသုံးပြုရာနေရာ၊ အိမ်မွေးတိရစ္ဆာန်၊ နှုတ်ဆက်ခြင်းနှင့် သန့်ရှင်းရေးတာဝန်အကြောင်း ပြောရန် လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនអំពីវិន័យក្នុងការរស់នៅជាអ្នកស្នាក់នៅក្នុងប្រទេសជប៉ុន ដូចជា ការចោលសំរាម ការបែងចែកសំរាម សំឡេងរំខាន កង់ កន្លែងប្រើរួម សត្វចិញ្ចឹម ការសួរសុខទុក្ខ និងវេនសម្អាត។",
    ne: "जापानमा बासिन्दा भएर बस्दा चाहिने जापानी अभ्यास: फोहोर फाल्ने नियम, फोहोर छुट्याउने, आवाज, साइकल, साझा ठाउँ, घरपालुवा जनावर, अभिवादन र सरसफाइ पालो।",
    mn: "Японд оршин суугчийн хувьд амьдрахад хэрэгтэй хог гаргах, ангилах, дуу чимээ, дугуй, нийтийн талбай, тэжээвэр амьтан, мэндлэх, цэвэрлэгээний ээлжийн талаар ярих япон хэлний дадлага.",
    si: "ජපානයේ පදිංචිකරුවෙකු ලෙස ජීවත් වීමේදී අවශ්‍ය කසළ දැමීම, වෙන් කිරීම, ශබ්දය, බයිසිකල්, පොදු ස්ථාන, සුරතල් සතුන්, ආචාර කිරීම සහ පිරිසිදු කිරීමේ වාරය පිළිබඳ ජපන් භාෂා පුහුණුවකි.",
    bn: "জাপানে বাসিন্দা হিসেবে থাকার সময় আবর্জনা ফেলা, আলাদা করা, শব্দ, সাইকেল, যৌথ স্থান, পোষা প্রাণী, শুভেচ্ছা এবং পরিষ্কার করার পালা নিয়ে জাপানি ভাষার অনুশীলন।",
    pt: "Prática de japonês sobre regras de convivência no Japão: lixo, separação, barulho, bicicletas, espaços comuns, animais de estimação, cumprimentos e turno de limpeza.",
    es: "Práctica de japonés sobre normas de convivencia en Japón: basura, separación, ruido, bicicletas, espacios compartidos, mascotas, saludos y turno de limpieza.",
    fr: "Entraînement en japonais sur les règles de vie comme résident au Japon : déchets, tri, bruit, vélos, espaces communs, animaux, salutations et tour de nettoyage.",
    ru: "Практика японского языка о правилах жизни жильца в Японии: мусор, сортировка, шум, велосипеды, общие зоны, домашние животные, приветствия и дежурство по уборке.",
    uk: "Практика японської мови про правила життя мешканця в Японії: сміття, сортування, шум, велосипеди, спільні місця, домашні тварини, вітання та чергування з прибирання."
};

const a1ResidentMannersSpeakerNames = {
    manager: {
        ja: "管理人", en: "Manager", "zh-CN": "管理员", "zh-TW": "管理員", ko: "관리인",
        vi: "Người quản lý", tl: "Manager", id: "Pengelola", th: "ผู้ดูแล",
        my: "အဆောက်အအုံတာဝန်ခံ", km: "អ្នកគ្រប់គ្រង", ne: "व्यवस्थापक", mn: "Байрны хариуцагч",
        si: "කළමනාකරු", bn: "ব্যবস্থাপক", pt: "Administrador", es: "Encargado",
        fr: "Gestionnaire", ru: "Управляющий", uk: "Керівник будинку"
    },
    resident: {
        ja: "住民", en: "Resident", "zh-CN": "居民", "zh-TW": "居民", ko: "주민",
        vi: "Cư dân", tl: "Residente", id: "Warga", th: "ผู้อยู่อาศัย",
        my: "နေထိုင်သူ", km: "អ្នកស្នាក់នៅ", ne: "बासिन्दा", mn: "Оршин суугч",
        si: "පදිංචිකරු", bn: "বাসিন্দা", pt: "Morador", es: "Residente",
        fr: "Résident", ru: "Житель", uk: "Мешканець"
    }
};

function makeA1ResidentMannersDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a1_resident_manners",
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
            speakerNames: a1ResidentMannersSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a1ResidentMannersContext,
        translations,
        dialogueTranslations
    };
}

const japeakA1ResidentMannersData = [

    makeA1ResidentMannersDialogue(
        "a1_manners_001",
        "ごみの日を確認する",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "ごみは何曜日に出しますか。",
                target: "ごみはなんようびにだしますか",
                ruby: "ごみは<ruby>何曜日<rt>なんようび</rt></ruby>に<ruby>出<rt>だ</rt></ruby>しますか。",
                romaji: "Gomi wa nan-yōbi ni dashimasu ka."
            },
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "燃えるごみは月曜日と木曜日です。",
                target: "もえるごみはげつようびともくようびです",
                ruby: "<ruby>燃<rt>も</rt></ruby>えるごみは<ruby>月曜日<rt>げつようび</rt></ruby>と<ruby>木曜日<rt>もくようび</rt></ruby>です。",
                romaji: "Moeru gomi wa getsuyōbi to mokuyōbi desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "朝に出しますか。",
                target: "あさにだしますか",
                ruby: "<ruby>朝<rt>あさ</rt></ruby>に<ruby>出<rt>だ</rt></ruby>しますか。",
                romaji: "Asa ni dashimasu ka."
            },
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "はい、朝八時までに出してください。",
                target: "はい あさはちじまでにだしてください",
                ruby: "はい、<ruby>朝八時<rt>あさはちじ</rt></ruby>までに<ruby>出<rt>だ</rt></ruby>してください。",
                romaji: "Hai, asa hachi-ji made ni dashite kudasai."
            }
        ],
        {
            ja: ["住民：ごみは何曜日に出しますか。", "管理人：燃えるごみは月曜日と木曜日です。", "住民：朝に出しますか。", "管理人：はい、朝八時までに出してください。"],
            en: ["Resident: What day do I put out the garbage?", "Manager: Burnable garbage is on Monday and Thursday.", "Resident: Do I put it out in the morning?", "Manager: Yes, please put it out by 8 a.m."],
            "zh-CN": ["居民：垃圾星期几拿出去？", "管理员：可燃垃圾是星期一和星期四。", "居民：早上拿出去吗？", "管理员：是的，请在早上八点以前拿出去。"],
            "zh-TW": ["居民：垃圾星期幾拿出去？", "管理員：可燃垃圾是星期一和星期四。", "居民：早上拿出去嗎？", "管理員：是的，請在早上八點以前拿出去。"],
            ko: ["주민: 쓰레기는 무슨 요일에 내놓나요?", "관리인: 타는 쓰레기는 월요일과 목요일입니다.", "주민: 아침에 내놓나요?", "관리인: 네, 아침 8시까지 내놓아 주세요."],
            vi: ["Cư dân: Tôi đổ rác vào thứ mấy?", "Người quản lý: Rác cháy được là thứ Hai và thứ Năm.", "Cư dân: Tôi để rác ra vào buổi sáng phải không?", "Người quản lý: Vâng, xin hãy để rác trước 8 giờ sáng."],
            tl: ["Residente: Anong araw po ilalabas ang basura?", "Manager: Ang burnable garbage ay Lunes at Huwebes.", "Residente: Sa umaga po ba ilalabas?", "Manager: Oo, pakilabas po bago mag-8 ng umaga."],
            id: ["Warga: Hari apa saya membuang sampah?", "Pengelola: Sampah yang bisa dibakar hari Senin dan Kamis.", "Warga: Apakah dibuang pagi hari?", "Pengelola: Ya, buang sebelum jam 8 pagi."],
            th: ["ผู้อยู่อาศัย: ต้องทิ้งขยะวันอะไรคะ/ครับ", "ผู้ดูแล: ขยะเผาได้คือวันจันทร์และวันพฤหัสบดีค่ะ/ครับ", "ผู้อยู่อาศัย: ทิ้งตอนเช้าใช่ไหมคะ/ครับ", "ผู้ดูแล: ใช่ค่ะ/ครับ กรุณาทิ้งก่อนแปดโมงเช้าค่ะ/ครับ"],
            my: ["နေထိုင်သူ: အမှိုက်ကို ဘယ်နေ့ထုတ်ရပါသလဲ။", "အဆောက်အအုံတာဝန်ခံ: လောင်ကျွမ်းနိုင်သောအမှိုက်က တနင်္လာနေ့နဲ့ ကြာသပတေးနေ့ပါ။", "နေထိုင်သူ: မနက်မှာ ထုတ်ရပါသလား။", "အဆောက်အအုံတာဝန်ခံ: ဟုတ်ကဲ့၊ မနက် ၈ နာရီမတိုင်ခင် ထုတ်ပေးပါ။"],
            km: ["អ្នកស្នាក់នៅ: តើត្រូវចោលសំរាមថ្ងៃណា?", "អ្នកគ្រប់គ្រង: សំរាមដុតបានគឺថ្ងៃចន្ទ និងថ្ងៃព្រហស្បតិ៍។", "អ្នកស្នាក់នៅ: តើចោលពេលព្រឹកទេ?", "អ្នកគ្រប់គ្រង: បាទ/ចាស សូមចោលមុនម៉ោង ៨ ព្រឹក។"],
            ne: ["बासिन्दा: फोहोर कुन बार निकाल्ने हो?", "व्यवस्थापक: जल्ने फोहोर सोमबार र बिहीबार हो।", "बासिन्दा: बिहान निकाल्ने हो?", "व्यवस्थापक: हो, बिहान ८ बजेसम्म निकाल्नुहोस्।"],
            mn: ["Оршин суугч: Хогоо ямар өдөр гаргах вэ?", "Байрны хариуцагч: Шатдаг хог даваа, пүрэв гарагт.", "Оршин суугч: Өглөө гаргах уу?", "Байрны хариуцагч: Тийм, өглөө 8 цаг хүртэл гаргаарай."],
            si: ["පදිංචිකරු: කසළ දාන්නේ සතියේ කවදාද?", "කළමනාකරු: දහන කසළ සඳුදා සහ බ්‍රහස්පතින්දා.", "පදිංචිකරු: උදේ දාන්නද?", "කළමනාකරු: ඔව්, උදේ 8ට පෙර දාන්න."],
            bn: ["বাসিন্দা: আবর্জনা কোন দিনে বের করব?", "ব্যবস্থাপক: পোড়ানো যায় এমন আবর্জনা সোমবার ও বৃহস্পতিবার।", "বাসিন্দা: সকালে বের করব?", "ব্যবস্থাপক: হ্যাঁ, সকাল ৮টার মধ্যে বের করুন।"],
            pt: ["Morador: Em que dia devo colocar o lixo?", "Administrador: O lixo queimável é na segunda e na quinta-feira.", "Morador: Devo colocar de manhã?", "Administrador: Sim, coloque até as 8 da manhã."],
            es: ["Residente: ¿Qué día saco la basura?", "Encargado: La basura combustible es lunes y jueves.", "Residente: ¿La saco por la mañana?", "Encargado: Sí, sáquela antes de las 8 de la mañana."],
            fr: ["Résident : Quel jour dois-je sortir les déchets ?", "Gestionnaire : Les déchets combustibles sont le lundi et le jeudi.", "Résident : Je les sors le matin ?", "Gestionnaire : Oui, sortez-les avant 8 heures du matin."],
            ru: ["Житель: В какой день выносить мусор?", "Управляющий: Сгораемый мусор — в понедельник и четверг.", "Житель: Выносить утром?", "Управляющий: Да, вынесите до 8 утра."],
            uk: ["Мешканець: У який день виносити сміття?", "Керівник будинку: Спалюване сміття — у понеділок і четвер.", "Мешканець: Виносити вранці?", "Керівник будинку: Так, винесіть до 8 ранку."]
        }
    ),

    makeA1ResidentMannersDialogue(
        "a1_manners_002",
        "びんの分別を聞く",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "このびんはどこに出しますか。",
                target: "このびんはどこにだしますか",
                ruby: "このびんはどこに<ruby>出<rt>だ</rt></ruby>しますか。",
                romaji: "Kono bin wa doko ni dashimasu ka."
            },
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "びんは青い箱に入れてください。",
                target: "びんはあおいはこにいれてください",
                ruby: "びんは<ruby>青<rt>あお</rt></ruby>い<ruby>箱<rt>はこ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れてください。",
                romaji: "Bin wa aoi hako ni irete kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "キャップは外しますか。",
                target: "きゃっぷははずしますか",
                ruby: "キャップは<ruby>外<rt>はず</rt></ruby>しますか。",
                romaji: "Kyappu wa hazushimasu ka."
            },
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "はい、外してください。",
                target: "はい はずしてください",
                ruby: "はい、<ruby>外<rt>はず</rt></ruby>してください。",
                romaji: "Hai, hazushite kudasai."
            }
        ],
        {
            ja: ["住民：このびんはどこに出しますか。", "管理人：びんは青い箱に入れてください。", "住民：キャップは外しますか。", "管理人：はい、外してください。"],
            en: ["Resident: Where do I put this bottle?", "Manager: Please put bottles in the blue box.", "Resident: Do I remove the cap?", "Manager: Yes, please remove it."],
            "zh-CN": ["居民：这个瓶子放在哪里？", "管理员：瓶子请放进蓝色箱子里。", "居民：瓶盖要取下来吗？", "管理员：是的，请取下来。"],
            "zh-TW": ["居民：這個瓶子放在哪裡？", "管理員：瓶子請放進藍色箱子裡。", "居民：瓶蓋要取下來嗎？", "管理員：是的，請取下來。"],
            ko: ["주민: 이 병은 어디에 내놓나요?", "관리인: 병은 파란 상자에 넣어 주세요.", "주민: 뚜껑은 빼나요?", "관리인: 네, 빼 주세요."],
            vi: ["Cư dân: Chai này để ở đâu ạ?", "Người quản lý: Chai thì cho vào hộp màu xanh.", "Cư dân: Tôi tháo nắp ra phải không ạ?", "Người quản lý: Vâng, xin hãy tháo ra."],
            tl: ["Residente: Saan po ilalagay ang bote na ito?", "Manager: Ilagay po ang bote sa asul na kahon.", "Residente: Tatanggalin po ba ang takip?", "Manager: Oo, pakitanggal po."],
            id: ["Warga: Botol ini dibuang di mana?", "Pengelola: Masukkan botol ke kotak biru.", "Warga: Apakah tutupnya dilepas?", "Pengelola: Ya, lepaskan."],
            th: ["ผู้อยู่อาศัย: ขวดนี้ต้องทิ้งที่ไหนคะ/ครับ", "ผู้ดูแล: กรุณาใส่ขวดในกล่องสีน้ำเงินค่ะ/ครับ", "ผู้อยู่อาศัย: ต้องถอดฝาไหมคะ/ครับ", "ผู้ดูแล: ใช่ค่ะ/ครับ กรุณาถอดฝาค่ะ/ครับ"],
            my: ["နေထိုင်သူ: ဒီပုလင်းကို ဘယ်နေရာမှာ ထုတ်ရပါမလဲ။", "အဆောက်အအုံတာဝန်ခံ: ပုလင်းကို အပြာရောင်သေတ္တာထဲ ထည့်ပေးပါ။", "နေထိုင်သူ: အဖုံးကို ဖြုတ်ရပါသလား။", "အဆောက်အအုံတာဝန်ခံ: ဟုတ်ကဲ့၊ ဖြုတ်ပေးပါ။"],
            km: ["អ្នកស្នាក់នៅ: តើដបនេះត្រូវដាក់នៅឯណា?", "អ្នកគ្រប់គ្រង: សូមដាក់ដបក្នុងប្រអប់ពណ៌ខៀវ។", "អ្នកស្នាក់នៅ: តើត្រូវដោះគម្របចេញទេ?", "អ្នកគ្រប់គ្រង: បាទ/ចាស សូមដោះចេញ។"],
            ne: ["बासिन्दा: यो बोतल कहाँ राख्ने हो?", "व्यवस्थापक: बोतल निलो बाकसमा राख्नुहोस्।", "बासिन्दा: बिर्को हटाउने हो?", "व्यवस्थापक: हो, हटाउनुहोस्।"],
            mn: ["Оршин суугч: Энэ шилийг хаана гаргах вэ?", "Байрны хариуцагч: Шилийг цэнхэр хайрцагт хийнэ үү.", "Оршин суугч: Тагийг нь авах уу?", "Байрны хариуцагч: Тийм, авна уу."],
            si: ["පදිංචිකරු: මේ බෝතලය කොහෙට දාන්නද?", "කළමනාකරු: බෝතල් නිල් පෙට්ටියට දාන්න.", "පදිංචිකරු: කවරය ඉවත් කරන්නද?", "කළමනාකරු: ඔව්, ඉවත් කරන්න."],
            bn: ["বাসিন্দা: এই বোতল কোথায় ফেলব?", "ব্যবস্থাপক: বোতল নীল বাক্সে রাখুন।", "বাসিন্দা: ঢাকনা খুলব?", "ব্যবস্থাপক: হ্যাঁ, খুলে ফেলুন।"],
            pt: ["Morador: Onde coloco esta garrafa?", "Administrador: Coloque as garrafas na caixa azul.", "Morador: Tiro a tampa?", "Administrador: Sim, tire a tampa."],
            es: ["Residente: ¿Dónde pongo esta botella?", "Encargado: Ponga las botellas en la caja azul.", "Residente: ¿Quito la tapa?", "Encargado: Sí, quítela, por favor."],
            fr: ["Résident : Où dois-je mettre cette bouteille ?", "Gestionnaire : Mettez les bouteilles dans la boîte bleue.", "Résident : Dois-je enlever le bouchon ?", "Gestionnaire : Oui, enlevez-le, s’il vous plaît."],
            ru: ["Житель: Куда положить эту бутылку?", "Управляющий: Бутылки кладите в синий ящик.", "Житель: Крышку снять?", "Управляющий: Да, снимите, пожалуйста."],
            uk: ["Мешканець: Куди покласти цю пляшку?", "Керівник будинку: Пляшки кладіть у синій ящик.", "Мешканець: Кришку зняти?", "Керівник будинку: Так, зніміть, будь ласка."]
        }
    ),

    makeA1ResidentMannersDialogue(
        "a1_manners_003",
        "夜の音に気をつける",
        [
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "夜は静かにしてください。",
                target: "よるはしずかにしてください",
                ruby: "<ruby>夜<rt>よる</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かにしてください。",
                romaji: "Yoru wa shizuka ni shite kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "何時からですか。",
                target: "なんじからですか",
                ruby: "<ruby>何時<rt>なんじ</rt></ruby>からですか。",
                romaji: "Nanji kara desu ka."
            },
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "夜十時からです。",
                target: "よるじゅうじからです",
                ruby: "<ruby>夜十時<rt>よるじゅうじ</rt></ruby>からです。",
                romaji: "Yoru jū-ji kara desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "わかりました。気をつけます。",
                target: "わかりました きをつけます",
                ruby: "わかりました。<ruby>気<rt>き</rt></ruby>をつけます。",
                romaji: "Wakarimashita. Ki o tsukemasu."
            }
        ],
        {
            ja: ["管理人：夜は静かにしてください。", "住民：何時からですか。", "管理人：夜十時からです。", "住民：わかりました。気をつけます。"],
            en: ["Manager: Please be quiet at night.", "Resident: From what time?", "Manager: From 10 p.m.", "Resident: I understand. I will be careful."],
            "zh-CN": ["管理员：晚上请保持安静。", "居民：从几点开始？", "管理员：晚上十点开始。", "居民：明白了。我会注意。"],
            "zh-TW": ["管理員：晚上請保持安靜。", "居民：從幾點開始？", "管理員：晚上十點開始。", "居民：明白了。我會注意。"],
            ko: ["관리인: 밤에는 조용히 해 주세요.", "주민: 몇 시부터인가요?", "관리인: 밤 10시부터입니다.", "주민: 알겠습니다. 조심하겠습니다."],
            vi: ["Người quản lý: Buổi tối xin hãy giữ yên lặng.", "Cư dân: Từ mấy giờ ạ?", "Người quản lý: Từ 10 giờ tối.", "Cư dân: Tôi hiểu rồi. Tôi sẽ chú ý."],
            tl: ["Manager: Pakihinaan po ang ingay sa gabi.", "Residente: Mula anong oras po?", "Manager: Mula 10 p.m.", "Residente: Naiintindihan ko po. Mag-iingat po ako."],
            id: ["Pengelola: Tolong tenang pada malam hari.", "Warga: Mulai jam berapa?", "Pengelola: Mulai jam 10 malam.", "Warga: Saya mengerti. Saya akan berhati-hati."],
            th: ["ผู้ดูแล: ตอนกลางคืนกรุณาเงียบค่ะ/ครับ", "ผู้อยู่อาศัย: ตั้งแต่กี่โมงคะ/ครับ", "ผู้ดูแล: ตั้งแต่สี่ทุ่มค่ะ/ครับ", "ผู้อยู่อาศัย: เข้าใจแล้วค่ะ/ครับ จะระวังค่ะ/ครับ"],
            my: ["အဆောက်အအုံတာဝန်ခံ: ညမှာ တိတ်တိတ်နေပေးပါ။", "နေထိုင်သူ: ဘယ်အချိန်က စပါသလဲ။", "အဆောက်အအုံတာဝန်ခံ: ည ၁၀ နာရီက စပါတယ်။", "နေထိုင်သူ: နားလည်ပါပြီ။ သတိထားပါမယ်။"],
            km: ["អ្នកគ្រប់គ្រង: ពេលយប់ សូមនៅស្ងាត់។", "អ្នកស្នាក់នៅ: ចាប់ពីម៉ោងប៉ុន្មាន?", "អ្នកគ្រប់គ្រង: ចាប់ពីម៉ោង ១០ យប់។", "អ្នកស្នាក់នៅ: ខ្ញុំយល់ហើយ។ ខ្ញុំនឹងប្រុងប្រយ័ត្ន។"],
            ne: ["व्यवस्थापक: राति शान्त बस्नुहोस्।", "बासिन्दा: कति बजेदेखि?", "व्यवस्थापक: राति १० बजेदेखि।", "बासिन्दा: बुझें। ध्यान दिन्छु।"],
            mn: ["Байрны хариуцагч: Шөнө чимээгүй байгаарай.", "Оршин суугч: Хэдэн цагаас вэ?", "Байрны хариуцагч: Орой 10 цагаас.", "Оршин суугч: Ойлголоо. Анхаарна."],
            si: ["කළමනාකරු: රාත්‍රියේ නිහඬව ඉන්න.", "පදිංචිකරු: කීයට පස්සේද?", "කළමනාකරු: රාත්‍රී 10ට පස්සේ.", "පදිංචිකරු: තේරුණා. සැලකිලිමත් වෙන්නම්."],
            bn: ["ব্যবস্থাপক: রাতে শান্ত থাকুন।", "বাসিন্দা: কয়টা থেকে?", "ব্যবস্থাপক: রাত ১০টা থেকে।", "বাসিন্দা: বুঝেছি। সাবধান থাকব।"],
            pt: ["Administrador: Por favor, faça silêncio à noite.", "Morador: A partir de que horas?", "Administrador: A partir das 10 da noite.", "Morador: Entendi. Vou tomar cuidado."],
            es: ["Encargado: Por favor, haga silencio por la noche.", "Residente: ¿Desde qué hora?", "Encargado: Desde las 10 de la noche.", "Residente: Entendido. Tendré cuidado."],
            fr: ["Gestionnaire : Veuillez être silencieux la nuit.", "Résident : À partir de quelle heure ?", "Gestionnaire : À partir de 22 heures.", "Résident : J’ai compris. Je ferai attention."],
            ru: ["Управляющий: Ночью, пожалуйста, соблюдайте тишину.", "Житель: С какого времени?", "Управляющий: С 10 вечера.", "Житель: Понял. Буду осторожен."],
            uk: ["Керівник будинку: Уночі, будь ласка, дотримуйтеся тиші.", "Мешканець: З якої години?", "Керівник будинку: З 10 вечора.", "Мешканець: Зрозуміло. Буду уважним."]
        }
    ),

    makeA1ResidentMannersDialogue(
        "a1_manners_004",
        "自転車を置く場所を聞く",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "自転車はここに置いてもいいですか。",
                target: "じてんしゃはここにおいてもいいですか",
                ruby: "<ruby>自転車<rt>じてんしゃ</rt></ruby>はここに<ruby>置<rt>お</rt></ruby>いてもいいですか。",
                romaji: "Jitensha wa koko ni oite mo ii desu ka."
            },
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "ここは通路です。",
                target: "ここはつうろです",
                ruby: "ここは<ruby>通路<rt>つうろ</rt></ruby>です。",
                romaji: "Koko wa tsūro desu."
            },
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "駐輪場に置いてください。",
                target: "ちゅうりんじょうにおいてください",
                ruby: "<ruby>駐輪場<rt>ちゅうりんじょう</rt></ruby>に<ruby>置<rt>お</rt></ruby>いてください。",
                romaji: "Chūrinjō ni oite kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "駐輪場は建物の横ですか。",
                target: "ちゅうりんじょうはたてもののよこですか",
                ruby: "<ruby>駐輪場<rt>ちゅうりんじょう</rt></ruby>は<ruby>建物<rt>たてもの</rt></ruby>の<ruby>横<rt>よこ</rt></ruby>ですか。",
                romaji: "Chūrinjō wa tatemono no yoko desu ka."
            }
        ],
        {
            ja: ["住民：自転車はここに置いてもいいですか。", "管理人：ここは通路です。", "管理人：駐輪場に置いてください。", "住民：駐輪場は建物の横ですか。"],
            en: ["Resident: May I put my bicycle here?", "Manager: This is a hallway.", "Manager: Please put it in the bicycle parking area.", "Resident: Is the bicycle parking area next to the building?"],
            "zh-CN": ["居民：自行车可以放在这里吗？", "管理员：这里是通道。", "管理员：请放到自行车停车场。", "居民：自行车停车场在建筑旁边吗？"],
            "zh-TW": ["居民：自行車可以放在這裡嗎？", "管理員：這裡是通道。", "管理員：請放到自行車停車場。", "居民：自行車停車場在建築旁邊嗎？"],
            ko: ["주민: 자전거를 여기에 두어도 되나요?", "관리인: 여기는 통로입니다.", "관리인: 자전거 주차장에 두어 주세요.", "주민: 자전거 주차장은 건물 옆인가요?"],
            vi: ["Cư dân: Tôi có thể để xe đạp ở đây không ạ?", "Người quản lý: Đây là lối đi.", "Người quản lý: Xin hãy để xe ở bãi đỗ xe đạp.", "Cư dân: Bãi đỗ xe đạp ở bên cạnh tòa nhà phải không ạ?"],
            tl: ["Residente: Pwede ko po bang ilagay ang bisikleta dito?", "Manager: Daanan po ito.", "Manager: Pakilagay po sa bicycle parking.", "Residente: Nasa tabi po ba ng building ang bicycle parking?"],
            id: ["Warga: Boleh saya menaruh sepeda di sini?", "Pengelola: Ini adalah lorong.", "Pengelola: Taruh di tempat parkir sepeda.", "Warga: Apakah tempat parkir sepeda di samping gedung?"],
            th: ["ผู้อยู่อาศัย: วางจักรยานตรงนี้ได้ไหมคะ/ครับ", "ผู้ดูแล: ตรงนี้เป็นทางเดินค่ะ/ครับ", "ผู้ดูแล: กรุณาวางที่ที่จอดจักรยานค่ะ/ครับ", "ผู้อยู่อาศัย: ที่จอดจักรยานอยู่ข้างอาคารใช่ไหมคะ/ครับ"],
            my: ["နေထိုင်သူ: စက်ဘီးကို ဒီမှာ ထားလို့ရပါသလား။", "အဆောက်အအုံတာဝန်ခံ: ဒီနေရာက လမ်းကြောင်းပါ။", "အဆောက်အအုံတာဝန်ခံ: စက်ဘီးရပ်နားရာမှာ ထားပေးပါ။", "နေထိုင်သူ: စက်ဘီးရပ်နားရာက အဆောက်အအုံဘေးမှာပါလား။"],
            km: ["អ្នកស្នាក់នៅ: តើខ្ញុំអាចដាក់កង់នៅទីនេះបានទេ?", "អ្នកគ្រប់គ្រង: ទីនេះជាផ្លូវដើរ។", "អ្នកគ្រប់គ្រង: សូមដាក់នៅកន្លែងចតកង់។", "អ្នកស្នាក់នៅ: តើកន្លែងចតកង់នៅខាងចំហៀងអគារទេ?"],
            ne: ["बासिन्दा: साइकल यहाँ राख्न मिल्छ?", "व्यवस्थापक: यो बाटो हो।", "व्यवस्थापक: साइकल पार्किङमा राख्नुहोस्।", "बासिन्दा: साइकल पार्किङ भवनको छेउमा हो?"],
            mn: ["Оршин суугч: Дугуйгаа энд тавьж болох уу?", "Байрны хариуцагч: Энэ бол гарц.", "Байрны хариуцагч: Дугуйн зогсоолд тавина уу.", "Оршин суугч: Дугуйн зогсоол байшингийн хажууд уу?"],
            si: ["පදිංචිකරු: බයිසිකලය මෙතැන තියන්න පුළුවන්ද?", "කළමනාකරු: මෙතැන මාර්ගයක්.", "කළමනාකරු: බයිසිකල් නැවතුම් ස්ථානයේ තියන්න.", "පදිංචිකරු: බයිසිකල් නැවතුම ගොඩනැගිල්ලේ පැත්තේද?"],
            bn: ["বাসিন্দা: সাইকেলটা এখানে রাখতে পারি?", "ব্যবস্থাপক: এটা চলার পথ।", "ব্যবস্থাপক: সাইকেল পার্কিংয়ে রাখুন।", "বাসিন্দা: সাইকেল পার্কিং কি ভবনের পাশে?"],
            pt: ["Morador: Posso deixar a bicicleta aqui?", "Administrador: Aqui é uma passagem.", "Administrador: Coloque no estacionamento de bicicletas.", "Morador: O estacionamento de bicicletas fica ao lado do prédio?"],
            es: ["Residente: ¿Puedo dejar la bicicleta aquí?", "Encargado: Esto es un pasillo.", "Encargado: Déjela en el estacionamiento de bicicletas.", "Residente: ¿El estacionamiento de bicicletas está al lado del edificio?"],
            fr: ["Résident : Puis-je mettre mon vélo ici ?", "Gestionnaire : Ici, c’est un passage.", "Gestionnaire : Mettez-le au parking à vélos.", "Résident : Le parking à vélos est-il à côté du bâtiment ?"],
            ru: ["Житель: Можно поставить велосипед здесь?", "Управляющий: Здесь проход.", "Управляющий: Поставьте его на велопарковке.", "Житель: Велопарковка рядом со зданием?"],
            uk: ["Мешканець: Можна поставити велосипед тут?", "Керівник будинку: Тут прохід.", "Керівник будинку: Поставте його на велопарковці.", "Мешканець: Велопарковка біля будівлі?"]
        }
    ),

    makeA1ResidentMannersDialogue(
        "a1_manners_005",
        "共用スペースに荷物を置かない",
        [
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "ここに荷物を置かないでください。",
                target: "ここにもつをおかないでください",
                ruby: "ここに<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>置<rt>お</rt></ruby>かないでください。",
                romaji: "Koko ni nimotsu o okanaide kudasai."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "すみません。すぐ片付けます。",
                target: "すみません すぐかたづけます",
                ruby: "すみません。すぐ<ruby>片付<rt>かたづ</rt></ruby>けます。",
                romaji: "Sumimasen. Sugu katazukemasu."
            },
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "通る人が困ります。",
                target: "とおるひとがこまります",
                ruby: "<ruby>通<rt>とお</rt></ruby>る<ruby>人<rt>ひと</rt></ruby>が<ruby>困<rt>こま</rt></ruby>ります。",
                romaji: "Tōru hito ga komarimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "これから気をつけます。",
                target: "これからきをつけます",
                ruby: "これから<ruby>気<rt>き</rt></ruby>をつけます。",
                romaji: "Kore kara ki o tsukemasu."
            }
        ],
        {
            ja: ["管理人：ここに荷物を置かないでください。", "住民：すみません。すぐ片付けます。", "管理人：通る人が困ります。", "住民：これから気をつけます。"],
            en: ["Manager: Please do not leave your things here.", "Resident: Sorry. I will move them right away.", "Manager: People passing by will have trouble.", "Resident: I will be careful from now on."],
            "zh-CN": ["管理员：请不要把东西放在这里。", "居民：对不起。我马上收拾。", "管理员：经过的人会不方便。", "居民：以后我会注意。"],
            "zh-TW": ["管理員：請不要把東西放在這裡。", "居民：對不起。我馬上收拾。", "管理員：經過的人會不方便。", "居民：以後我會注意。"],
            ko: ["관리인: 여기에 짐을 두지 말아 주세요.", "주민: 죄송합니다. 바로 치우겠습니다.", "관리인: 지나가는 사람이 곤란합니다.", "주민: 앞으로 조심하겠습니다."],
            vi: ["Người quản lý: Xin đừng để đồ ở đây.", "Cư dân: Xin lỗi. Tôi sẽ dọn ngay.", "Người quản lý: Người đi qua sẽ gặp khó khăn.", "Cư dân: Từ giờ tôi sẽ chú ý."],
            tl: ["Manager: Huwag po kayong mag-iwan ng gamit dito.", "Residente: Pasensya po. Aayusin ko po agad.", "Manager: Mahihirapan po ang mga dumadaan.", "Residente: Mag-iingat po ako mula ngayon."],
            id: ["Pengelola: Jangan menaruh barang di sini.", "Warga: Maaf. Saya akan segera merapikannya.", "Pengelola: Orang yang lewat akan terganggu.", "Warga: Mulai sekarang saya akan berhati-hati."],
            th: ["ผู้ดูแล: กรุณาอย่าวางของไว้ตรงนี้ค่ะ/ครับ", "ผู้อยู่อาศัย: ขอโทษค่ะ/ครับ จะเก็บทันทีค่ะ/ครับ", "ผู้ดูแล: คนที่เดินผ่านจะลำบากค่ะ/ครับ", "ผู้อยู่อาศัย: ต่อไปจะระวังค่ะ/ครับ"],
            my: ["အဆောက်အအုံတာဝန်ခံ: ဒီမှာ ပစ္စည်းမထားပါနဲ့။", "နေထိုင်သူ: တောင်းပန်ပါတယ်။ ချက်ချင်းရှင်းပါမယ်။", "အဆောက်အအုံတာဝန်ခံ: ဖြတ်သွားတဲ့လူတွေ အခက်အခဲရှိနိုင်ပါတယ်။", "နေထိုင်သူ: နောက်ပိုင်း သတိထားပါမယ်။"],
            km: ["អ្នកគ្រប់គ្រង: សូមកុំដាក់ឥវ៉ាន់នៅទីនេះ។", "អ្នកស្នាក់នៅ: សុំទោស។ ខ្ញុំនឹងរៀបចំចេញភ្លាមៗ។", "អ្នកគ្រប់គ្រង: អ្នកដើរឆ្លងកាត់នឹងពិបាក។", "អ្នកស្នាក់នៅ: ចាប់ពីពេលនេះ ខ្ញុំនឹងប្រុងប្រយ័ត្ន។"],
            ne: ["व्यवस्थापक: यहाँ सामान नराख्नुहोस्।", "बासिन्दा: माफ गर्नुहोस्। म तुरुन्तै हटाउँछु।", "व्यवस्थापक: हिँड्ने मानिसलाई समस्या हुन्छ।", "बासिन्दा: अबदेखि ध्यान दिन्छु।"],
            mn: ["Байрны хариуцагч: Энд эд зүйлсээ битгий тавиарай.", "Оршин суугч: Уучлаарай. Шууд янзална.", "Байрны хариуцагч: Өнгөрөх хүмүүст хүндрэлтэй.", "Оршин суугч: Одооноос анхаарна."],
            si: ["කළමනාකරු: මෙතැන බඩු තියන්න එපා.", "පදිංචිකරු: සමාවෙන්න. වහාම ඉවත් කරන්නම්.", "කළමනාකරු: යන එන අයට කරදර වෙනවා.", "පදිංචිකරු: ඉදිරියේදී සැලකිලිමත් වෙන්නම්."],
            bn: ["ব্যবস্থাপক: এখানে জিনিস রাখবেন না।", "বাসিন্দা: দুঃখিত। এখনই সরিয়ে ফেলব।", "ব্যবস্থাপক: চলাচলকারী লোকদের সমস্যা হবে।", "বাসিন্দা: এখন থেকে সাবধান থাকব।"],
            pt: ["Administrador: Por favor, não deixe coisas aqui.", "Morador: Desculpe. Vou tirar agora.", "Administrador: As pessoas que passam terão dificuldade.", "Morador: Vou tomar cuidado a partir de agora."],
            es: ["Encargado: Por favor, no deje cosas aquí.", "Residente: Lo siento. Las quitaré enseguida.", "Encargado: Las personas que pasan tendrán problemas.", "Residente: Tendré cuidado desde ahora."],
            fr: ["Gestionnaire : Ne laissez pas vos affaires ici, s’il vous plaît.", "Résident : Désolé. Je vais les enlever tout de suite.", "Gestionnaire : Les personnes qui passent seront gênées.", "Résident : Je ferai attention à partir de maintenant."],
            ru: ["Управляющий: Пожалуйста, не оставляйте вещи здесь.", "Житель: Извините. Я сразу уберу.", "Управляющий: Проходящим людям будет мешать.", "Житель: С этого момента буду внимательнее."],
            uk: ["Керівник будинку: Будь ласка, не залишайте речі тут.", "Мешканець: Вибачте. Я одразу приберу.", "Керівник будинку: Людям, які проходять, буде незручно.", "Мешканець: Відтепер буду уважнішим."]
        }
    ),

    makeA1ResidentMannersDialogue(
        "a1_manners_006",
        "ペットについて確認する",
        [
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "ペットを飼ってもいいですか。",
                target: "ぺっとをかってもいいですか",
                ruby: "ペットを<ruby>飼<rt>か</rt></ruby>ってもいいですか。",
                romaji: "Petto o katte mo ii desu ka."
            },
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "この部屋では飼えません。",
                target: "このへやではかえません",
                ruby: "この<ruby>部屋<rt>へや</rt></ruby>では<ruby>飼<rt>か</rt></ruby>えません。",
                romaji: "Kono heya dewa kaemasen."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "小さい魚はいいですか。",
                target: "ちいさいさかなはいいですか",
                ruby: "<ruby>小<rt>ちい</rt></ruby>さい<ruby>魚<rt>さかな</rt></ruby>はいいですか。",
                romaji: "Chīsai sakana wa ii desu ka."
            },
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "管理会社に確認してください。",
                target: "かんりがいしゃにかくにんしてください",
                ruby: "<ruby>管理会社<rt>かんりがいしゃ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Kanri-gaisha ni kakunin shite kudasai."
            }
        ],
        {
            ja: ["住民：ペットを飼ってもいいですか。", "管理人：この部屋では飼えません。", "住民：小さい魚はいいですか。", "管理人：管理会社に確認してください。"],
            en: ["Resident: May I keep a pet?", "Manager: You cannot keep pets in this room.", "Resident: Is a small fish okay?", "Manager: Please check with the management company."],
            "zh-CN": ["居民：可以养宠物吗？", "管理员：这个房间不能养宠物。", "居民：小鱼可以吗？", "管理员：请向管理公司确认。"],
            "zh-TW": ["居民：可以養寵物嗎？", "管理員：這個房間不能養寵物。", "居民：小魚可以嗎？", "管理員：請向管理公司確認。"],
            ko: ["주민: 반려동물을 키워도 되나요?", "관리인: 이 방에서는 키울 수 없습니다.", "주민: 작은 물고기는 괜찮나요?", "관리인: 관리 회사에 확인해 주세요."],
            vi: ["Cư dân: Tôi có thể nuôi thú cưng không ạ?", "Người quản lý: Không thể nuôi thú cưng trong phòng này.", "Cư dân: Cá nhỏ thì có được không ạ?", "Người quản lý: Xin hãy xác nhận với công ty quản lý."],
            tl: ["Residente: Pwede po bang mag-alaga ng pet?", "Manager: Hindi po pwede ang pet sa kuwartong ito.", "Residente: Pwede po ba ang maliit na isda?", "Manager: Pakikumpirma po sa management company."],
            id: ["Warga: Boleh memelihara hewan peliharaan?", "Pengelola: Di kamar ini tidak boleh memelihara hewan.", "Warga: Kalau ikan kecil boleh?", "Pengelola: Silakan konfirmasi ke perusahaan pengelola."],
            th: ["ผู้อยู่อาศัย: เลี้ยงสัตว์ได้ไหมคะ/ครับ", "ผู้ดูแล: ห้องนี้เลี้ยงสัตว์ไม่ได้ค่ะ/ครับ", "ผู้อยู่อาศัย: ปลาเล็ก ๆ ได้ไหมคะ/ครับ", "ผู้ดูแล: กรุณาตรวจสอบกับบริษัทจัดการค่ะ/ครับ"],
            my: ["နေထိုင်သူ: အိမ်မွေးတိရစ္ဆာန် မွေးလို့ရပါသလား။", "အဆောက်အအုံတာဝန်ခံ: ဒီအခန်းမှာ မွေးလို့မရပါ။", "နေထိုင်သူ: ငါးသေးသေးဆိုရပါသလား။", "အဆောက်အအုံတာဝန်ခံ: စီမံခန့်ခွဲရေးကုမ္ပဏီမှာ မေးမြန်းပေးပါ။"],
            km: ["អ្នកស្នាក់នៅ: តើខ្ញុំអាចចិញ្ចឹមសត្វបានទេ?", "អ្នកគ្រប់គ្រង: នៅបន្ទប់នេះ មិនអាចចិញ្ចឹមសត្វបានទេ។", "អ្នកស្នាក់នៅ: តើត្រីតូចៗបានទេ?", "អ្នកគ្រប់គ្រង: សូមពិនិត្យជាមួយក្រុមហ៊ុនគ្រប់គ្រង។"],
            ne: ["बासिन्दा: घरपालुवा जनावर पाल्न मिल्छ?", "व्यवस्थापक: यो कोठामा पाल्न मिल्दैन।", "बासिन्दा: सानो माछा ठीक छ?", "व्यवस्थापक: व्यवस्थापन कम्पनीसँग पुष्टि गर्नुहोस्।"],
            mn: ["Оршин суугч: Тэжээвэр амьтан тэжээж болох уу?", "Байрны хариуцагч: Энэ өрөөнд тэжээж болохгүй.", "Оршин суугч: Жижиг загас бол болох уу?", "Байрны хариуцагч: Удирдлагын компанитай шалгана уу."],
            si: ["පදිංචිකරු: සුරතල් සතෙක් තබාගන්න පුළුවන්ද?", "කළමනාකරු: මේ කාමරයේ තබාගන්න බැහැ.", "පදිංචිකරු: කුඩා මාළුවෙක් හරිද?", "කළමනාකරු: කළමනාකරණ සමාගමෙන් තහවුරු කරන්න."],
            bn: ["বাসিন্দা: পোষা প্রাণী রাখতে পারি?", "ব্যবস্থাপক: এই ঘরে পোষা প্রাণী রাখা যাবে না।", "বাসিন্দা: ছোট মাছ হলে হবে?", "ব্যবস্থাপক: ব্যবস্থাপনা কোম্পানির সঙ্গে নিশ্চিত করুন।"],
            pt: ["Morador: Posso ter um animal de estimação?", "Administrador: Neste quarto não é permitido ter animais.", "Morador: Um peixe pequeno pode?", "Administrador: Confirme com a empresa administradora."],
            es: ["Residente: ¿Puedo tener una mascota?", "Encargado: En esta habitación no se pueden tener mascotas.", "Residente: ¿Un pez pequeño está bien?", "Encargado: Confirme con la empresa administradora."],
            fr: ["Résident : Puis-je avoir un animal ?", "Gestionnaire : Dans cette chambre, les animaux ne sont pas autorisés.", "Résident : Un petit poisson, c’est possible ?", "Gestionnaire : Veuillez vérifier auprès de la société de gestion."],
            ru: ["Житель: Можно держать домашнее животное?", "Управляющий: В этой комнате животных держать нельзя.", "Житель: Маленькая рыбка можно?", "Управляющий: Пожалуйста, уточните в управляющей компании."],
            uk: ["Мешканець: Можна тримати домашню тварину?", "Керівник будинку: У цій кімнаті тварин тримати не можна.", "Мешканець: Маленьку рибку можна?", "Керівник будинку: Будь ласка, уточніть у керуючій компанії."]
        }
    ),

    makeA1ResidentMannersDialogue(
        "a1_manners_007",
        "近所の人にあいさつする",
        [
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "近所の人には軽くあいさつしましょう。",
                target: "きんじょのひとにはかるくあいさつしましょう",
                ruby: "<ruby>近所<rt>きんじょ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>には<ruby>軽<rt>かる</rt></ruby>くあいさつしましょう。",
                romaji: "Kinjo no hito ni wa karuku aisatsu shimashō."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "どんな言葉がいいですか。",
                target: "どんなことばがいいですか",
                ruby: "どんな<ruby>言葉<rt>ことば</rt></ruby>がいいですか。",
                romaji: "Donna kotoba ga ii desu ka."
            },
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "おはようございますで大丈夫です。",
                target: "おはようございますでだいじょうぶです",
                ruby: "おはようございますで<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。",
                romaji: "Ohayō gozaimasu de daijōbu desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "やってみます。",
                target: "やってみます",
                ruby: "やってみます。",
                romaji: "Yatte mimasu."
            }
        ],
        {
            ja: ["管理人：近所の人には軽くあいさつしましょう。", "住民：どんな言葉がいいですか。", "管理人：おはようございますで大丈夫です。", "住民：やってみます。"],
            en: ["Manager: Please give a simple greeting to your neighbors.", "Resident: What words should I use?", "Manager: Good morning is fine.", "Resident: I will try."],
            "zh-CN": ["管理员：请简单地和邻居打招呼。", "居民：说什么比较好？", "管理员：说早上好就可以。", "居民：我试试看。"],
            "zh-TW": ["管理員：請簡單地和鄰居打招呼。", "居民：說什麼比較好？", "管理員：說早安就可以。", "居民：我試試看。"],
            ko: ["관리인: 이웃에게는 가볍게 인사합시다.", "주민: 어떤 말을 하면 좋을까요?", "관리인: 좋은 아침입니다 라고 하면 괜찮습니다.", "주민: 해 보겠습니다."],
            vi: ["Người quản lý: Hãy chào hỏi nhẹ nhàng với hàng xóm.", "Cư dân: Tôi nên nói câu gì?", "Người quản lý: Nói chào buổi sáng là được.", "Cư dân: Tôi sẽ thử."],
            tl: ["Manager: Magbigay po kayo ng simpleng bati sa kapitbahay.", "Residente: Anong salita po ang mabuti?", "Manager: Sapat na po ang magandang umaga.", "Residente: Susubukan ko po."],
            id: ["Pengelola: Berilah salam sederhana kepada tetangga.", "Warga: Kata seperti apa yang baik?", "Pengelola: Selamat pagi sudah cukup.", "Warga: Saya akan coba."],
            th: ["ผู้ดูแล: ควรทักทายเพื่อนบ้านเบา ๆ ค่ะ/ครับ", "ผู้อยู่อาศัย: ใช้คำว่าอะไรดีคะ/ครับ", "ผู้ดูแล: พูดว่าอรุณสวัสดิ์ก็พอค่ะ/ครับ", "ผู้อยู่อาศัย: จะลองดูค่ะ/ครับ"],
            my: ["အဆောက်အအုံတာဝန်ခံ: အိမ်နီးချင်းတွေကို ရိုးရိုးနှုတ်ဆက်ပါ။", "နေထိုင်သူ: ဘယ်လိုစကားပြောရင် ကောင်းပါသလဲ။", "အဆောက်အအုံတာဝန်ခံ: မင်္ဂလာနံနက်ခင်းပါ လို့ပြောရင် ရပါတယ်။", "နေထိုင်သူ: လုပ်ကြည့်ပါမယ်။"],
            km: ["អ្នកគ្រប់គ្រង: សូមសួរសុខទុក្ខអ្នកជិតខាងបន្តិច។", "អ្នកស្នាក់នៅ: តើគួរប្រើពាក្យអ្វី?", "អ្នកគ្រប់គ្រង: និយាយថា អរុណសួស្តី គឺបានហើយ។", "អ្នកស្នាក់នៅ: ខ្ញុំនឹងសាកល្បង។"],
            ne: ["व्यवस्थापक: छिमेकीलाई हल्का अभिवादन गरौं।", "बासिन्दा: कस्तो शब्द ठीक हुन्छ?", "व्यवस्थापक: शुभ प्रभात भने ठीक हुन्छ।", "बासिन्दा: प्रयास गर्छु।"],
            mn: ["Байрны хариуцагч: Хөршүүддээ энгийнээр мэндлээрэй.", "Оршин суугч: Ямар үг хэлвэл сайн вэ?", "Байрны хариуцагч: Өглөөний мэнд гэж хэлэхэд болно.", "Оршин суугч: Оролдоод үзье."],
            si: ["කළමනාකරු: අසල්වැසියන්ට සරලව ආචාර කරමු.", "පදිංචිකරු: මොන වචන භාවිතා කරන්නද?", "කළමනාකරු: සුබ උදෑසනක් කියලා කිව්වාම ඇති.", "පදිංචිකරු: උත්සාහ කරන්නම්."],
            bn: ["ব্যবস্থাপক: প্রতিবেশীদের সহজভাবে শুভেচ্ছা জানান।", "বাসিন্দা: কী কথা বলা ভালো?", "ব্যবস্থাপক: সুপ্রভাত বললেই ঠিক আছে।", "বাসিন্দা: চেষ্টা করব।"],
            pt: ["Administrador: Cumprimente seus vizinhos de forma simples.", "Morador: Que palavras devo usar?", "Administrador: Bom dia já está bom.", "Morador: Vou tentar."],
            es: ["Encargado: Salude de forma sencilla a sus vecinos.", "Residente: ¿Qué palabras debería usar?", "Encargado: Buenos días está bien.", "Residente: Lo intentaré."],
            fr: ["Gestionnaire : Saluez simplement vos voisins.", "Résident : Quels mots dois-je utiliser ?", "Gestionnaire : Bonjour suffit.", "Résident : Je vais essayer."],
            ru: ["Управляющий: Просто здоровайтесь с соседями.", "Житель: Какие слова лучше использовать?", "Управляющий: Доброе утро — достаточно.", "Житель: Я попробую."],
            uk: ["Керівник будинку: Просто вітайтеся з сусідами.", "Мешканець: Які слова краще використовувати?", "Керівник будинку: Доброго ранку — достатньо.", "Мешканець: Спробую."]
        }
    ),

    makeA1ResidentMannersDialogue(
        "a1_manners_008",
        "掃除当番を確認する",
        [
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "来週は掃除当番です。",
                target: "らいしゅうはそうじとうばんです",
                ruby: "<ruby>来週<rt>らいしゅう</rt></ruby>は<ruby>掃除当番<rt>そうじとうばん</rt></ruby>です。",
                romaji: "Raishū wa sōji tōban desu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "何をしますか。",
                target: "なにをしますか",
                ruby: "<ruby>何<rt>なに</rt></ruby>をしますか。",
                romaji: "Nani o shimasu ka."
            },
            {
                label: "話者A",
                key: "manager",
                name: "管理人",
                line: "ごみ置き場の周りを掃除します。",
                target: "ごみおきばのまわりをそうじします",
                ruby: "ごみ<ruby>置<rt>お</rt></ruby>き<ruby>場<rt>ば</rt></ruby>の<ruby>周<rt>まわ</rt></ruby>りを<ruby>掃除<rt>そうじ</rt></ruby>します。",
                romaji: "Gomi-okiba no mawari o sōji shimasu."
            },
            {
                label: "話者B",
                key: "resident",
                name: "住民",
                line: "わかりました。参加します。",
                target: "わかりました さんかします",
                ruby: "わかりました。<ruby>参加<rt>さんか</rt></ruby>します。",
                romaji: "Wakarimashita. Sanka shimasu."
            }
        ],
        {
            ja: ["管理人：来週は掃除当番です。", "住民：何をしますか。", "管理人：ごみ置き場の周りを掃除します。", "住民：わかりました。参加します。"],
            en: ["Manager: Next week, it is your cleaning duty.", "Resident: What do I do?", "Manager: You clean around the garbage area.", "Resident: I understand. I will join."],
            "zh-CN": ["管理员：下周是你的清扫值日。", "居民：要做什么？", "管理员：清扫垃圾放置处周围。", "居民：明白了。我会参加。"],
            "zh-TW": ["管理員：下週是你的清掃值日。", "居民：要做什麼？", "管理員：清掃垃圾放置處周圍。", "居民：明白了。我會參加。"],
            ko: ["관리인: 다음 주는 청소 당번입니다.", "주민: 무엇을 하나요?", "관리인: 쓰레기장 주변을 청소합니다.", "주민: 알겠습니다. 참여하겠습니다."],
            vi: ["Người quản lý: Tuần sau là lượt trực vệ sinh của bạn.", "Cư dân: Tôi phải làm gì ạ?", "Người quản lý: Dọn quanh khu vực để rác.", "Cư dân: Tôi hiểu rồi. Tôi sẽ tham gia."],
            tl: ["Manager: Sa susunod na linggo, cleaning duty po ninyo.", "Residente: Ano po ang gagawin?", "Manager: Lilinisin po ang paligid ng garbage area.", "Residente: Naiintindihan ko po. Sasali po ako."],
            id: ["Pengelola: Minggu depan giliran Anda membersihkan.", "Warga: Apa yang harus saya lakukan?", "Pengelola: Membersihkan sekitar tempat sampah.", "Warga: Saya mengerti. Saya akan ikut."],
            th: ["ผู้ดูแล: สัปดาห์หน้าเป็นเวรทำความสะอาดของคุณค่ะ/ครับ", "ผู้อยู่อาศัย: ต้องทำอะไรคะ/ครับ", "ผู้ดูแล: ทำความสะอาดรอบที่ทิ้งขยะค่ะ/ครับ", "ผู้อยู่อาศัย: เข้าใจแล้วค่ะ/ครับ จะเข้าร่วมค่ะ/ครับ"],
            my: ["အဆောက်အအုံတာဝန်ခံ: နောက်အပတ်က သင့်ရဲ့ သန့်ရှင်းရေးတာဝန်ပါ။", "နေထိုင်သူ: ဘာလုပ်ရပါမလဲ။", "အဆောက်အအုံတာဝန်ခံ: အမှိုက်ထားရာနေရာပတ်ဝန်းကျင်ကို သန့်ရှင်းရေးလုပ်ပါ။", "နေထိုင်သူ: နားလည်ပါပြီ။ ပါဝင်ပါမယ်။"],
            km: ["អ្នកគ្រប់គ្រង: សប្តាហ៍ក្រោយជាវេនសម្អាតរបស់អ្នក។", "អ្នកស្នាក់នៅ: តើខ្ញុំត្រូវធ្វើអ្វី?", "អ្នកគ្រប់គ្រង: សម្អាតជុំវិញកន្លែងដាក់សំរាម។", "អ្នកស្នាក់នៅ: ខ្ញុំយល់ហើយ។ ខ្ញុំនឹងចូលរួម។"],
            ne: ["व्यवस्थापक: अर्को हप्ता तपाईंको सरसफाइ पालो हो।", "बासिन्दा: के गर्नुपर्छ?", "व्यवस्थापक: फोहोर राख्ने ठाउँ वरिपरि सफा गर्ने हो।", "बासिन्दा: बुझें। म सहभागी हुन्छु।"],
            mn: ["Байрны хариуцагч: Ирэх долоо хоногт таны цэвэрлэгээний ээлж.", "Оршин суугч: Юу хийх вэ?", "Байрны хариуцагч: Хогийн цэгийн эргэн тойрныг цэвэрлэнэ.", "Оршин суугч: Ойлголоо. Оролцоно."],
            si: ["කළමනාකරු: ලබන සතියේ ඔබේ පිරිසිදු කිරීමේ වාරයයි.", "පදිංචිකරු: මොනවා කරන්නද?", "කළමනාකරු: කසළ තැන වටේ පිරිසිදු කරන්න.", "පදිංචිකරු: තේරුණා. සහභාගි වෙන්නම්."],
            bn: ["ব্যবস্থাপক: আগামী সপ্তাহে আপনার পরিষ্কার করার পালা।", "বাসিন্দা: কী করতে হবে?", "ব্যবস্থাপক: আবর্জনা রাখার জায়গার চারপাশ পরিষ্কার করবেন।", "বাসিন্দা: বুঝেছি। অংশ নেব।"],
            pt: ["Administrador: Na próxima semana é o seu turno de limpeza.", "Morador: O que devo fazer?", "Administrador: Limpar ao redor da área de lixo.", "Morador: Entendi. Vou participar."],
            es: ["Encargado: La próxima semana es su turno de limpieza.", "Residente: ¿Qué debo hacer?", "Encargado: Limpiar alrededor del área de basura.", "Residente: Entendido. Participaré."],
            fr: ["Gestionnaire : La semaine prochaine, c’est votre tour de nettoyage.", "Résident : Que dois-je faire ?", "Gestionnaire : Nettoyer autour de l’endroit des déchets.", "Résident : J’ai compris. Je participerai."],
            ru: ["Управляющий: На следующей неделе ваша очередь уборки.", "Житель: Что нужно делать?", "Управляющий: Убирать вокруг места для мусора.", "Житель: Понял. Я буду участвовать."],
            uk: ["Керівник будинку: Наступного тижня ваша черга прибирання.", "Мешканець: Що потрібно робити?", "Керівник будинку: Прибирати навколо місця для сміття.", "Мешканець: Зрозуміло. Я братиму участь."]
        }
    )

];