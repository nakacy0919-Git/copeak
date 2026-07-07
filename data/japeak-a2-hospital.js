// =====================================================
// Japeak A2 Level
// Scene: 病院に行こう
// Category Key: a2_hospital
// =====================================================

const a2HospitalContext = {
    ja: "病院に行くとき、受付、予約、問診票、症状の説明、診察、処方せん、薬局、会計、次回予約について話す日本語を練習します。",
    en: "Practice Japanese for going to a hospital or clinic, including reception, appointments, medical forms, explaining symptoms, examination, prescriptions, pharmacy, payment, and follow-up appointments.",
    "zh-CN": "练习去医院或诊所时使用的日语，包括挂号、预约、问诊表、说明症状、诊察、处方、药局、付款和下次预约。",
    "zh-TW": "練習去醫院或診所時使用的日語，包括掛號、預約、問診表、說明症狀、診察、處方、藥局、付款和下次預約。",
    ko: "병원이나 클리닉에 갈 때 접수, 예약, 문진표, 증상 설명, 진찰, 처방전, 약국, 결제, 다음 예약에 대해 말하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi đi bệnh viện hoặc phòng khám, gồm tiếp tân, đặt lịch, phiếu hỏi bệnh, giải thích triệu chứng, khám bệnh, đơn thuốc, nhà thuốc, thanh toán và lịch hẹn tiếp theo.",
    tl: "Practice ng Japanese sa pagpunta sa hospital o clinic, tulad ng reception, appointment, medical form, symptoms, examination, prescription, pharmacy, payment, at next appointment.",
    id: "Latihan bahasa Jepang saat pergi ke rumah sakit atau klinik, termasuk resepsionis, janji temu, formulir medis, menjelaskan gejala, pemeriksaan, resep, apotek, pembayaran, dan janji berikutnya.",
    th: "ฝึกภาษาญี่ปุ่นเมื่อไปโรงพยาบาลหรือคลินิก เช่น การติดต่อ受付 การนัดหมาย แบบสอบถามอาการ การอธิบายอาการ การตรวจ ใบสั่งยา ร้านยา การชำระเงิน และการนัดครั้งต่อไป",
    my: "ဆေးရုံ သို့မဟုတ် clinic သို့ သွားရာတွင်受付၊ appointment၊ medical form၊ ရောဂါလက္ခဏာရှင်းပြခြင်း၊ စစ်ဆေးခြင်း၊ prescription၊ pharmacy၊ ငွေပေးချေခြင်းနှင့် နောက်တစ်ကြိမ်予約 အကြောင်း ပြောရန် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ទៅមន្ទីរពេទ្យ ឬគ្លីនិក ដូចជា ការចុះឈ្មោះ ការណាត់ជួប សន្លឹកសួរអាការៈ ការពន្យល់រោគសញ្ញា ការពិនិត្យ វេជ្ជបញ្ជា ឱសថស្ថាន ការបង់ប្រាក់ និងការណាត់ជួបបន្ទាប់។",
    ne: "अस्पताल वा क्लिनिक जाँदा受付, appointment, medical form, लक्षण説明, जाँच, prescription, pharmacy, payment र next appointment बारे बोल्ने जापानी अभ्यास।",
    mn: "Эмнэлэг эсвэл клиникт очих үед бүртгэл, цаг авах, асуумж бөглөх, шинж тэмдэг тайлбарлах, үзлэг, жор, эмийн сан, төлбөр, дараагийн цагийн талаар ярих япон хэлний дадлага.",
    si: "hospital හෝ clinic එකකට යන විට reception, appointment, medical form, symptoms පැහැදිලි කිරීම, examination, prescription, pharmacy, payment සහ next appointment ගැන කතා කිරීමට අවශ්‍ය ජපන් භාෂා පුහුණුව.",
    bn: "হাসপাতাল বা ক্লিনিকে যাওয়ার সময় reception, appointment, medical form, symptoms ব্যাখ্যা, examination, prescription, pharmacy, payment এবং next appointment নিয়ে জাপানি অনুশীলন।",
    pt: "Prática de japonês para ir ao hospital ou clínica, incluindo recepção, consultas, formulário médico, explicação de sintomas, exame, receita, farmácia, pagamento e próxima consulta.",
    es: "Práctica de japonés para ir al hospital o clínica, incluyendo recepción, citas, formulario médico, explicación de síntomas, consulta, receta, farmacia, pago y próxima cita.",
    fr: "Entraînement en japonais pour aller à l’hôpital ou à la clinique : accueil, rendez-vous, questionnaire médical, explication des symptômes, consultation, ordonnance, pharmacie, paiement et prochain rendez-vous.",
    ru: "Практика японского языка для посещения больницы или клиники: регистрация, запись, медицинская анкета, объяснение симптомов, осмотр, рецепт, аптека, оплата и следующий приём.",
    uk: "Практика японської мови для відвідування лікарні або клініки: реєстрація, запис, медична анкета, пояснення симптомів, огляд, рецепт, аптека, оплата та наступний прийом."
};

const a2HospitalSpeakerNames = {
    staff: {
        ja: "病院の人", en: "Hospital Staff", "zh-CN": "医院人员", "zh-TW": "醫院人員", ko: "병원 직원",
        vi: "Nhân viên bệnh viện", tl: "Hospital staff", id: "Staf rumah sakit", th: "เจ้าหน้าที่โรงพยาบาล",
        my: "ဆေးရုံဝန်ထမ်း", km: "បុគ្គលិកមន្ទីរពេទ្យ", ne: "अस्पतालका कर्मचारी", mn: "Эмнэлгийн ажилтан",
        si: "රෝහල් කාර්ය මණ්ඩලය", bn: "হাসপাতালের কর্মী", pt: "Funcionário do hospital", es: "Personal del hospital",
        fr: "Personnel de l’hôpital", ru: "Сотрудник больницы", uk: "Працівник лікарні"
    },
    patient: {
        ja: "患者", en: "Patient", "zh-CN": "患者", "zh-TW": "患者", ko: "환자",
        vi: "Bệnh nhân", tl: "Patient", id: "Pasien", th: "ผู้ป่วย",
        my: "လူနာ", km: "អ្នកជំងឺ", ne: "बिरामी", mn: "Өвчтөн",
        si: "රෝගියා", bn: "রোগী", pt: "Paciente", es: "Paciente",
        fr: "Patient", ru: "Пациент", uk: "Пацієнт"
    },
    doctor: {
        ja: "医師", en: "Doctor", "zh-CN": "医生", "zh-TW": "醫師", ko: "의사",
        vi: "Bác sĩ", tl: "Doktor", id: "Dokter", th: "แพทย์",
        my: "ဆရာဝန်", km: "វេជ្ជបណ្ឌិត", ne: "डाक्टर", mn: "Эмч",
        si: "වෛද්‍යවරයා", bn: "ডাক্তার", pt: "Médico", es: "Médico",
        fr: "Médecin", ru: "Врач", uk: "Лікар"
    },
    pharmacist: {
        ja: "薬剤師", en: "Pharmacist", "zh-CN": "药剂师", "zh-TW": "藥師", ko: "약사",
        vi: "Dược sĩ", tl: "Pharmacist", id: "Apoteker", th: "เภสัชกร",
        my: "ဆေးဝါးကျွမ်းကျင်သူ", km: "ឱសថការី", ne: "फार्मासिस्ट", mn: "Эм зүйч",
        si: "ඖෂධවේදියා", bn: "ফার্মাসিস্ট", pt: "Farmacêutico", es: "Farmacéutico",
        fr: "Pharmacien", ru: "Фармацевт", uk: "Фармацевт"
    }
};

function makeA2HospitalDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_hospital",
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
            speakerNames: a2HospitalSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2HospitalContext,
        translations,
        dialogueTranslations
    };
}

const japeakA2HospitalData = [

    makeA2HospitalDialogue(
        "a2_hospital_001",
        "初めて受付に行く",
        [
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "初めて受診したいのですが、受付はこちらで合っていますか。",
                target: "はじめてじゅしんしたいのですが うけつけはこちらであっていますか",
                ruby: "<ruby>初<rt>はじ</rt></ruby>めて<ruby>受診<rt>じゅしん</rt></ruby>したいのですが、<ruby>受付<rt>うけつけ</rt></ruby>はこちらで<ruby>合<rt>あ</rt></ruby>っていますか。",
                romaji: "Hajimete jushin shitai no desu ga, uketsuke wa kochira de atte imasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "はい。保険証をお持ちでしたら、こちらに出してください。",
                target: "はい ほけんしょうをおもちでしたら こちらにだしてください",
                ruby: "はい。<ruby>保険証<rt>ほけんしょう</rt></ruby>をお<ruby>持<rt>も</rt></ruby>ちでしたら、こちらに<ruby>出<rt>だ</rt></ruby>してください。",
                romaji: "Hai. Hokenshō o omochi deshitara, kochira ni dashite kudasai."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "はい、持っています。何科を受ければいいかわかりません。",
                target: "はい もっています なにかをうければいいかわかりません",
                ruby: "はい、<ruby>持<rt>も</rt></ruby>っています。<ruby>何科<rt>なにか</rt></ruby>を<ruby>受<rt>う</rt></ruby>ければいいかわかりません。",
                romaji: "Hai, motte imasu. Nanika o ukereba ii ka wakarimasen."
            },
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "症状を聞いてから、担当の科を確認します。",
                target: "しょうじょうをきいてから たんとうのかをかくにんします",
                ruby: "<ruby>症状<rt>しょうじょう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてから、<ruby>担当<rt>たんとう</rt></ruby>の<ruby>科<rt>か</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。",
                romaji: "Shōjō o kiite kara, tantō no ka o kakunin shimasu."
            }
        ],
        {
            ja: ["患者：初めて受診したいのですが、受付はこちらで合っていますか。", "病院の人：はい。保険証をお持ちでしたら、こちらに出してください。", "患者：はい、持っています。何科を受ければいいかわかりません。", "病院の人：症状を聞いてから、担当の科を確認します。"],
            en: ["Patient: I would like to see a doctor for the first time. Is this the correct reception desk?", "Hospital Staff: Yes. If you have your health insurance card, please give it here.", "Patient: Yes, I have it. I do not know which department I should visit.", "Hospital Staff: After we ask about your symptoms, we will check the correct department."],
            "zh-CN": ["患者：我想第一次就诊，受付是在这里吗？", "医院人员：是的。如果您有保险证，请交到这里。", "患者：是的，我有。我不知道应该看哪个科。", "医院人员：我们先询问症状，再确认负责的科室。"],
            "zh-TW": ["患者：我想第一次就診，報到是在這裡嗎？", "醫院人員：是的。如果您有保險證，請交到這裡。", "患者：是的，我有。我不知道應該看哪一科。", "醫院人員：我們先詢問症狀，再確認負責的科別。"],
            ko: ["환자: 처음 진료를 받고 싶은데 접수는 여기서 하는 것이 맞나요?", "병원 직원: 네. 보험증을 가지고 계시면 여기에 내 주세요.", "환자: 네, 가지고 있습니다. 어느 과를 받아야 할지 모르겠습니다.", "병원 직원: 증상을 들은 뒤 담당 과를 확인하겠습니다."],
            vi: ["Bệnh nhân: Tôi muốn khám lần đầu, quầy tiếp tân có đúng là ở đây không ạ?", "Nhân viên bệnh viện: Vâng. Nếu bạn có thẻ bảo hiểm, xin hãy đưa ở đây.", "Bệnh nhân: Vâng, tôi có. Tôi không biết nên khám khoa nào.", "Nhân viên bệnh viện: Sau khi hỏi triệu chứng, chúng tôi sẽ xác nhận khoa phụ trách."],
            tl: ["Patient: Gusto ko pong magpatingin sa unang pagkakataon. Dito po ba ang tamang reception?", "Hospital staff: Oo. Kung mayroon po kayong health insurance card, pakibigay po dito.", "Patient: Opo, mayroon. Hindi ko po alam kung anong department ang dapat kong puntahan.", "Hospital staff: Pagkatapos naming itanong ang symptoms, iche-check namin ang tamang department."],
            id: ["Pasien: Saya ingin berobat untuk pertama kali. Apakah resepsionisnya benar di sini?", "Staf rumah sakit: Ya. Jika Anda memiliki kartu asuransi kesehatan, silakan serahkan di sini.", "Pasien: Ya, saya punya. Saya tidak tahu harus ke bagian apa.", "Staf rumah sakit: Setelah menanyakan gejala, kami akan memastikan bagian yang menangani."],
            th: ["ผู้ป่วย: อยากมาพบแพทย์ครั้งแรกค่ะ/ครับ จุด受付อยู่ตรงนี้ถูกไหมคะ/ครับ", "เจ้าหน้าที่โรงพยาบาล: ใช่ค่ะ/ครับ ถ้ามีบัตรประกันสุขภาพ กรุณายื่นที่นี่ค่ะ/ครับ", "ผู้ป่วย: มีค่ะ/ครับ แต่ไม่รู้ว่าควรไปแผนกไหนค่ะ/ครับ", "เจ้าหน้าที่โรงพยาบาล: หลังจากถามอาการแล้ว จะตรวจสอบแผนกที่รับผิดชอบค่ะ/ครับ"],
            my: ["လူနာ: ပထမဆုံးအကြိမ် ဆေးစစ်ချင်ပါတယ်။受付က ဒီမှာမှန်ပါသလား။", "ဆေးရုံဝန်ထမ်း: ဟုတ်ကဲ့။ health insurance card ရှိရင် ဒီမှာ ပေးပါ။", "လူနာ: ဟုတ်ကဲ့၊ ရှိပါတယ်။ ဘယ်ဌာနကို သွားရမလဲ မသိပါဘူး။", "ဆေးရုံဝန်ထမ်း: ရောဂါလက္ခဏာကို မေးပြီးနောက် တာဝန်ယူမယ့်ဌာနကို စစ်ဆေးပါမယ်။"],
            km: ["អ្នកជំងឺ: ខ្ញុំចង់ពិនិត្យជាលើកដំបូង តើ受付នៅទីនេះត្រឹមត្រូវទេ?", "បុគ្គលិកមន្ទីរពេទ្យ: បាទ/ចាស។ បើមានប័ណ្ណធានារ៉ាប់រងសុខភាព សូមដាក់នៅទីនេះ។", "អ្នកជំងឺ: មាន។ ខ្ញុំមិនដឹងថាគួរទៅផ្នែកណាទេ។", "បុគ្គលិកមន្ទីរពេទ្យ: បន្ទាប់ពីសួរអាការៈ យើងនឹងពិនិត្យផ្នែកដែលទទួលខុសត្រូវ។"],
            ne: ["बिरामी: म पहिलो पटक जाँच गराउन चाहन्छु।受付 यही हो?", "अस्पतालका कर्मचारी: हो। स्वास्थ्य बीमा कार्ड छ भने यहाँ दिनुहोस्।", "बिरामी: छ। कुन विभागमा जानुपर्ने हो थाहा छैन।", "अस्पतालका कर्मचारी: लक्षण सोधेपछि सम्बन्धित विभाग確認 गर्छौं।"],
            mn: ["Өвчтөн: Анх удаа үзүүлэх гэсэн юм, бүртгэл энд мөн үү?", "Эмнэлгийн ажилтан: Тийм. Эрүүл мэндийн даатгалын карт байвал энд өгнө үү.", "Өвчтөн: Тийм, байгаа. Аль тасагт үзүүлэхээ мэдэхгүй байна.", "Эмнэлгийн ажилтан: Шинж тэмдгийг сонссоны дараа хариуцах тасгийг шалгана."],
            si: ["රෝගියා: පළමු වතාවට වෛද්‍යවරයෙකු හමුවීමට කැමතියි. reception එක මෙතැනද?", "රෝහල් කාර්ය මණ්ඩලය: ඔව්. health insurance card එක තියෙනවා නම් මෙතැනට දෙන්න.", "රෝගියා: ඔව්, තියෙනවා. මොන department එකට යන්න ඕනෙද කියලා දන්නේ නැහැ.", "රෝහල් කාර්ය මණ්ඩලය: symptoms අහලා පසුව අදාල department එක確認 කරමු."],
            bn: ["রোগী: প্রথমবার ডাক্তার দেখাতে চাই।受付 কি এখানে?", "হাসপাতালের কর্মী: হ্যাঁ। health insurance card থাকলে এখানে দিন।", "রোগী: হ্যাঁ, আছে। কোন বিভাগে যেতে হবে জানি না।", "হাসপাতালের কর্মী: লক্ষণ শুনে আমরা দায়িত্বপ্রাপ্ত বিভাগ確認 করব।"],
            pt: ["Paciente: Gostaria de me consultar pela primeira vez. A recepção é aqui?", "Funcionário do hospital: Sim. Se você tiver o cartão de seguro de saúde, entregue-o aqui.", "Paciente: Sim, tenho. Não sei qual departamento devo consultar.", "Funcionário do hospital: Depois de perguntarmos os sintomas, confirmaremos o departamento responsável."],
            es: ["Paciente: Quisiera atenderme por primera vez. ¿La recepción es aquí?", "Personal del hospital: Sí. Si tiene su tarjeta de seguro médico, entréguela aquí.", "Paciente: Sí, la tengo. No sé a qué departamento debo ir.", "Personal del hospital: Después de preguntar sus síntomas, confirmaremos el departamento correspondiente."],
            fr: ["Patient : Je voudrais consulter pour la première fois. L’accueil est bien ici ?", "Personnel de l’hôpital : Oui. Si vous avez votre carte d’assurance maladie, veuillez la présenter ici.", "Patient : Oui, je l’ai. Je ne sais pas quel service consulter.", "Personnel de l’hôpital : Après avoir demandé vos symptômes, nous vérifierons le service approprié."],
            ru: ["Пациент: Я хотел бы обратиться впервые. Регистрация здесь?", "Сотрудник больницы: Да. Если у вас есть страховая карта, пожалуйста, подайте её сюда.", "Пациент: Да, есть. Я не знаю, в какое отделение идти.", "Сотрудник больницы: После того как спросим о симптомах, проверим нужное отделение."],
            uk: ["Пацієнт: Я хотів би звернутися вперше. Реєстрація тут?", "Працівник лікарні: Так. Якщо у вас є страхова картка, подайте її сюди.", "Пацієнт: Так, є. Я не знаю, до якого відділення йти.", "Працівник лікарні: Після того як запитаємо про симптоми, перевіримо потрібне відділення."]
        }
    ),

    makeA2HospitalDialogue(
        "a2_hospital_002",
        "予約なしで診てもらう",
        [
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "予約なしでも診てもらえますか。",
                target: "よやくなしでもみてもらえますか",
                ruby: "<ruby>予約<rt>よやく</rt></ruby>なしでも<ruby>診<rt>み</rt></ruby>てもらえますか。",
                romaji: "Yoyaku nashi demo mite moraemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "本日は混んでいるので、待ち時間が長くなるかもしれません。",
                target: "ほんじつはこんでいるので まちじかんがながくなるかもしれません",
                ruby: "<ruby>本日<rt>ほんじつ</rt></ruby>は<ruby>混<rt>こ</rt></ruby>んでいるので、<ruby>待<rt>ま</rt></ruby>ち<ruby>時間<rt>じかん</rt></ruby>が<ruby>長<rt>なが</rt></ruby>くなるかもしれません。",
                romaji: "Honjitsu wa konde iru node, machijikan ga nagaku naru kamoshiremasen."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "どのくらい待つ予定ですか。",
                target: "どのくらいまつよていですか",
                ruby: "どのくらい<ruby>待<rt>ま</rt></ruby>つ<ruby>予定<rt>よてい</rt></ruby>ですか。",
                romaji: "Dono kurai matsu yotei desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "今のところ、一時間ほどお待ちいただきます。",
                target: "いまのところ いちじかんほどおまちいただきます",
                ruby: "<ruby>今<rt>いま</rt></ruby>のところ、<ruby>一時間<rt>いちじかん</rt></ruby>ほどお<ruby>待<rt>ま</rt></ruby>ちいただきます。",
                romaji: "Ima no tokoro, ichijikan hodo o-machi itadakimasu."
            }
        ],
        {
            ja: ["患者：予約なしでも診てもらえますか。", "病院の人：本日は混んでいるので、待ち時間が長くなるかもしれません。", "患者：どのくらい待つ予定ですか。", "病院の人：今のところ、一時間ほどお待ちいただきます。"],
            en: ["Patient: Can I see a doctor even without an appointment?", "Hospital Staff: It is crowded today, so the waiting time may be long.", "Patient: How long do you expect I will wait?", "Hospital Staff: At the moment, you will need to wait about one hour."],
            "zh-CN": ["患者：没有预约也可以看诊吗？", "医院人员：今天比较拥挤，等待时间可能会比较长。", "患者：预计要等多久？", "医院人员：目前大约需要等一个小时。"],
            "zh-TW": ["患者：沒有預約也可以看診嗎？", "醫院人員：今天比較擁擠，等待時間可能會比較長。", "患者：預計要等多久？", "醫院人員：目前大約需要等一個小時。"],
            ko: ["환자: 예약 없이도 진료를 받을 수 있나요?", "병원 직원: 오늘은 붐비기 때문에 대기 시간이 길어질지도 모릅니다.", "환자: 어느 정도 기다릴 예정인가요?", "병원 직원: 현재로서는 한 시간 정도 기다리셔야 합니다."],
            vi: ["Bệnh nhân: Không đặt lịch trước cũng có thể khám được không ạ?", "Nhân viên bệnh viện: Hôm nay đông nên thời gian chờ có thể dài.", "Bệnh nhân: Dự kiến phải chờ khoảng bao lâu ạ?", "Nhân viên bệnh viện: Hiện tại, bạn sẽ chờ khoảng một tiếng."],
            tl: ["Patient: Pwede po ba akong matingnan kahit walang appointment?", "Hospital staff: Matao po ngayon, kaya maaaring humaba ang waiting time.", "Patient: Mga gaano po katagal ang paghihintay?", "Hospital staff: Sa ngayon, mga isang oras po ang kailangan ninyong hintayin."],
            id: ["Pasien: Apakah bisa diperiksa meskipun tanpa janji?", "Staf rumah sakit: Hari ini ramai, jadi waktu tunggunya mungkin lama.", "Pasien: Kira-kira harus menunggu berapa lama?", "Staf rumah sakit: Untuk saat ini, Anda perlu menunggu sekitar satu jam."],
            th: ["ผู้ป่วย: ไม่มีนัดก็ตรวจได้ไหมคะ/ครับ", "เจ้าหน้าที่โรงพยาบาล: วันนี้คนเยอะ เวลารออาจนานค่ะ/ครับ", "ผู้ป่วย: คาดว่าจะรอนานแค่ไหนคะ/ครับ", "เจ้าหน้าที่โรงพยาบาล: ตอนนี้ต้องรอประมาณหนึ่งชั่วโมงค่ะ/ครับ"],
            my: ["လူနာ: appointment မရှိလည်း ဆရာဝန်ကို ပြလို့ရပါသလား။", "ဆေးရုံဝန်ထမ်း: ဒီနေ့ လူများလို့ စောင့်ရတဲ့အချိန် ရှည်နိုင်ပါတယ်။", "လူနာ: ဘယ်လောက်လောက် စောင့်ရမလဲ။", "ဆေးရုံဝန်ထမ်း: လောလောဆယ် တစ်နာရီလောက် စောင့်ရပါမယ်။"],
            km: ["អ្នកជំងឺ: គ្មានការណាត់ជួប អាចពិនិត្យបានទេ?", "បុគ្គលិកមន្ទីរពេទ្យ: ថ្ងៃនេះមនុស្សច្រើន ដូច្នេះពេលរង់ចាំអាចយូរ។", "អ្នកជំងឺ: តើត្រូវរង់ចាំប្រហែលប៉ុន្មាន?", "បុគ្គលិកមន្ទីរពេទ្យ: បច្ចុប្បន្ន ត្រូវរង់ចាំប្រហែលមួយម៉ោង។"],
            ne: ["बिरामी: appointment नभए पनि जाँच गराउन मिल्छ?", "अस्पतालका कर्मचारी: आज भीड भएकाले प्रतीक्षा समय लामो हुन सक्छ।", "बिरामी: करिब कति समय पर्खनुपर्छ?", "अस्पतालका कर्मचारी: अहिलेको अवस्थामा करिब एक घण्टा पर्खनुपर्छ।"],
            mn: ["Өвчтөн: Цаг аваагүй ч үзүүлж болох уу?", "Эмнэлгийн ажилтан: Өнөөдөр хүн ихтэй тул хүлээх хугацаа урт байж магадгүй.", "Өвчтөн: Ойролцоогоор хэр удаан хүлээх вэ?", "Эмнэлгийн ажилтан: Одоогоор нэг цаг орчим хүлээнэ."],
            si: ["රෝගියා: appointment නැතුවත් වෛද්‍යවරයා හමුවෙන්න පුළුවන්ද?", "රෝහල් කාර්ය මණ්ඩලය: අද පිරිස වැඩි නිසා waiting time දිග විය හැක.", "රෝගියා: කොච්චර වෙලා බලා ඉන්න වෙයිද?", "රෝහල් කාර්ය මණ්ඩලය: දැනට පැයක පමණ කාලයක් රැඳී සිටීමට සිදුවේ."],
            bn: ["রোগী: appointment না থাকলেও ডাক্তার দেখানো যাবে?", "হাসপাতালের কর্মী: আজ ভিড় আছে, তাই অপেক্ষার সময় দীর্ঘ হতে পারে।", "রোগী: প্রায় কতক্ষণ অপেক্ষা করতে হবে?", "হাসপাতালের কর্মী: এখনকার হিসাবে প্রায় এক ঘণ্টা অপেক্ষা করতে হবে।"],
            pt: ["Paciente: Posso ser atendido mesmo sem consulta marcada?", "Funcionário do hospital: Hoje está cheio, então o tempo de espera pode ser longo.", "Paciente: Quanto tempo devo esperar?", "Funcionário do hospital: No momento, será necessário esperar cerca de uma hora."],
            es: ["Paciente: ¿Puedo ser atendido aunque no tenga cita?", "Personal del hospital: Hoy está lleno, así que el tiempo de espera puede ser largo.", "Paciente: ¿Cuánto tiempo se espera aproximadamente?", "Personal del hospital: Por ahora, tendrá que esperar alrededor de una hora."],
            fr: ["Patient : Puis-je être vu même sans rendez-vous ?", "Personnel de l’hôpital : Aujourd’hui, il y a beaucoup de monde, donc l’attente peut être longue.", "Patient : Combien de temps devrai-je attendre environ ?", "Personnel de l’hôpital : Pour le moment, il faut attendre environ une heure."],
            ru: ["Пациент: Можно ли попасть к врачу без записи?", "Сотрудник больницы: Сегодня много людей, поэтому ожидание может быть долгим.", "Пациент: Сколько примерно ждать?", "Сотрудник больницы: На данный момент нужно ждать около часа."],
            uk: ["Пацієнт: Чи можна потрапити до лікаря без запису?", "Працівник лікарні: Сьогодні багато людей, тому очікування може бути довгим.", "Пацієнт: Скільки приблизно чекати?", "Працівник лікарні: Наразі потрібно чекати близько години."]
        }
    ),

    makeA2HospitalDialogue(
        "a2_hospital_003",
        "問診票を書く",
        [
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "こちらの問診票に症状を書いてください。",
                target: "こちらのもんしんひょうにしょうじょうをかいてください",
                ruby: "こちらの<ruby>問診票<rt>もんしんひょう</rt></ruby>に<ruby>症状<rt>しょうじょう</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Kochira no monshinhyō ni shōjō o kaite kudasai."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "日本語でうまく書けない所があります。",
                target: "にほんごでうまくかけないところがあります",
                ruby: "<ruby>日本語<rt>にほんご</rt></ruby>でうまく<ruby>書<rt>か</rt></ruby>けない<ruby>所<rt>ところ</rt></ruby>があります。",
                romaji: "Nihongo de umaku kakenai tokoro ga arimasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "わかる範囲で大丈夫です。あとで看護師が確認します。",
                target: "わかるはんいでだいじょうぶです あとでかんごしがかくにんします",
                ruby: "わかる<ruby>範囲<rt>はんい</rt></ruby>で<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。あとで<ruby>看護師<rt>かんごし</rt></ruby>が<ruby>確認<rt>かくにん</rt></ruby>します。",
                romaji: "Wakaru han'i de daijōbu desu. Ato de kangoshi ga kakunin shimasu."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "薬のアレルギーも書いた方がいいですか。",
                target: "くすりのあれるぎーもかいたほうがいいですか",
                ruby: "<ruby>薬<rt>くすり</rt></ruby>のアレルギーも<ruby>書<rt>か</rt></ruby>いた<ruby>方<rt>ほう</rt></ruby>がいいですか。",
                romaji: "Kusuri no arerugī mo kaita hō ga ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "はい、必ず書いてください。",
                target: "はい かならずかいてください",
                ruby: "はい、<ruby>必<rt>かなら</rt></ruby>ず<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Hai, kanarazu kaite kudasai."
            }
        ],
        {
            ja: ["病院の人：こちらの問診票に症状を書いてください。", "患者：日本語でうまく書けない所があります。", "病院の人：わかる範囲で大丈夫です。あとで看護師が確認します。", "患者：薬のアレルギーも書いた方がいいですか。", "病院の人：はい、必ず書いてください。"],
            en: ["Hospital Staff: Please write your symptoms on this medical questionnaire.", "Patient: There are some parts I cannot write well in Japanese.", "Hospital Staff: It is okay to write only what you understand. A nurse will check it later.", "Patient: Should I also write drug allergies?", "Hospital Staff: Yes, please be sure to write them."],
            "zh-CN": ["医院人员：请在这张问诊表上写症状。", "患者：有些地方我不能用日语很好地写出来。", "医院人员：在您能理解的范围内写就可以。之后护士会确认。", "患者：药物过敏也要写吗？", "医院人员：是的，请一定写。"],
            "zh-TW": ["醫院人員：請在這張問診表上寫症狀。", "患者：有些地方我不能用日語很好地寫出來。", "醫院人員：在您能理解的範圍內寫就可以。之後護理師會確認。", "患者：藥物過敏也要寫嗎？", "醫院人員：是的，請一定寫。"],
            ko: ["병원 직원: 이 문진표에 증상을 적어 주세요.", "환자: 일본어로 잘 쓸 수 없는 부분이 있습니다.", "병원 직원: 아는 범위에서 괜찮습니다. 나중에 간호사가 확인합니다.", "환자: 약 알레르기도 적는 것이 좋나요?", "병원 직원: 네, 반드시 적어 주세요."],
            vi: ["Nhân viên bệnh viện: Xin hãy viết triệu chứng vào phiếu hỏi bệnh này.", "Bệnh nhân: Có chỗ tôi không viết tốt bằng tiếng Nhật được.", "Nhân viên bệnh viện: Viết trong phạm vi bạn hiểu là được. Sau đó y tá sẽ kiểm tra.", "Bệnh nhân: Tôi có nên viết cả dị ứng thuốc không ạ?", "Nhân viên bệnh viện: Vâng, nhất định hãy viết."],
            tl: ["Hospital staff: Pakisulat po ang symptoms sa medical questionnaire na ito.", "Patient: May mga bahagi po na hindi ko maisulat nang maayos sa Japanese.", "Hospital staff: Okay lang po kung hanggang saan ang naiintindihan ninyo. Iche-check po ng nurse mamaya.", "Patient: Dapat ko rin po bang isulat ang allergy sa gamot?", "Hospital staff: Oo, siguraduhin pong isulat iyon."],
            id: ["Staf rumah sakit: Silakan tulis gejala Anda di formulir pemeriksaan ini.", "Pasien: Ada bagian yang tidak bisa saya tulis dengan baik dalam bahasa Jepang.", "Staf rumah sakit: Tidak apa-apa sejauh yang Anda pahami. Nanti perawat akan memeriksa.", "Pasien: Apakah alergi obat juga sebaiknya ditulis?", "Staf rumah sakit: Ya, pastikan untuk menuliskannya."],
            th: ["เจ้าหน้าที่โรงพยาบาล: กรุณาเขียนอาการในแบบสอบถามนี้ค่ะ/ครับ", "ผู้ป่วย: มีบางส่วนที่เขียนภาษาญี่ปุ่นได้ไม่ดีค่ะ/ครับ", "เจ้าหน้าที่โรงพยาบาล: เขียนเท่าที่เข้าใจก็ได้ค่ะ/ครับ เดี๋ยวพยาบาลจะตรวจสอบทีหลังค่ะ/ครับ", "ผู้ป่วย: ควรเขียน allergy ต่อ medicine ด้วยไหมคะ/ครับ", "เจ้าหน้าที่โรงพยาบาล: ใช่ค่ะ/ครับ กรุณาเขียนให้แน่นอนค่ะ/ครับ"],
            my: ["ဆေးရုံဝန်ထမ်း: ဒီ medical questionnaire မှာ ရောဂါလက္ခဏာတွေကို ရေးပေးပါ။", "လူနာ: ဂျပန်ဘာသာနဲ့ ကောင်းကောင်းမရေးနိုင်တဲ့နေရာတွေ ရှိပါတယ်။", "ဆေးရုံဝန်ထမ်း: နားလည်တဲ့အတိုင်းရေးရင် ရပါတယ်။ နောက်မှ nurse က စစ်ဆေးပါမယ်။", "လူနာ: ဆေး allergy လည်း ရေးသင့်ပါသလား။", "ဆေးရုံဝန်ထမ်း: ဟုတ်ကဲ့၊ မဖြစ်မနေ ရေးပေးပါ။"],
            km: ["បុគ្គលិកមន្ទីរពេទ្យ: សូមសរសេររោគសញ្ញានៅលើសន្លឹកសួរអាការៈនេះ។", "អ្នកជំងឺ: មានកន្លែងខ្លះដែលខ្ញុំមិនអាចសរសេរជាភាសាជប៉ុនបានល្អ។", "បុគ្គលិកមន្ទីរពេទ្យ: សរសេរតាមដែលអ្នកយល់ក៏បាន។ ពេលក្រោយគិលានុបដ្ឋាយិកានឹងពិនិត្យ។", "អ្នកជំងឺ: តើគួរសរសេរ allergy ថ្នាំផងដែរទេ?", "បុគ្គលិកមន្ទីរពេទ្យ: បាទ/ចាស សូមសរសេរឲ្យប្រាកដ។"],
            ne: ["अस्पतालका कर्मचारी: कृपया यो medical form मा लक्षण लेख्नुहोस्।", "बिरामी: जापानीमा राम्रोसँग लेख्न नसक्ने ठाउँहरू छन्।", "अस्पतालका कर्मचारी: बुझ्ने दायरामा लेखे हुन्छ। पछि नर्सले確認 गर्छिन्।", "बिरामी: औषधिको allergy पनि लेख्नु राम्रो हो?", "अस्पतालका कर्मचारी: हो, अवश्य लेख्नुहोस्।"],
            mn: ["Эмнэлгийн ажилтан: Энэ асуумж дээр шинж тэмдгээ бичнэ үү.", "Өвчтөн: Япон хэлээр сайн бичиж чадахгүй хэсэг байна.", "Эмнэлгийн ажилтан: Ойлгож байгаа хэмжээндээ бичвэл болно. Дараа нь сувилагч шалгана.", "Өвчтөн: Эмийн харшлаа ч бичсэн нь дээр үү?", "Эмнэлгийн ажилтан: Тийм, заавал бичнэ үү."],
            si: ["රෝහල් කාර්ය මණ්ඩලය: මේ medical questionnaire එකේ symptoms ලියන්න.", "රෝගියා: Japanese වලින් හොඳින් ලියන්න බැරි තැන් තියෙනවා.", "රෝහල් කාර්ය මණ්ඩලය: තේරෙන範囲で හරි. පසුව nurse එක確認 කරයි.", "රෝගියා: medicine allergy එකත් ලියන එක හොඳද?", "රෝහල් කාර්ය මණ්ඩලය: ඔව්, අනිවාර්යෙන්ම ලියන්න."],
            bn: ["হাসপাতালের কর্মী: এই medical questionnaire-এ লক্ষণ লিখুন।", "রোগী: কিছু জায়গা জাপানিতে ভালোভাবে লিখতে পারছি না।", "হাসপাতালের কর্মী: আপনি যতটা বোঝেন ততটা লিখলেই হবে। পরে নার্স確認 করবেন।", "রোগী: ওষুধের allergy-ও লেখা উচিত?", "হাসপাতালের কর্মী: হ্যাঁ, অবশ্যই লিখুন।"],
            pt: ["Funcionário do hospital: Escreva seus sintomas neste questionário médico.", "Paciente: Há partes que não consigo escrever bem em japonês.", "Funcionário do hospital: Tudo bem escrever dentro do que você entende. Depois, uma enfermeira verificará.", "Paciente: Também devo escrever alergias a medicamentos?", "Funcionário do hospital: Sim, por favor, escreva com certeza."],
            es: ["Personal del hospital: Escriba sus síntomas en este cuestionario médico.", "Paciente: Hay partes que no puedo escribir bien en japonés.", "Personal del hospital: Está bien escribir dentro de lo que entienda. Luego una enfermera lo revisará.", "Paciente: ¿También debo escribir alergias a medicamentos?", "Personal del hospital: Sí, asegúrese de escribirlas."],
            fr: ["Personnel de l’hôpital : Veuillez écrire vos symptômes sur ce questionnaire médical.", "Patient : Il y a des parties que je ne peux pas bien écrire en japonais.", "Personnel de l’hôpital : Écrivez dans la mesure de ce que vous comprenez. Une infirmière vérifiera plus tard.", "Patient : Dois-je aussi écrire les allergies aux médicaments ?", "Personnel de l’hôpital : Oui, veuillez absolument les écrire."],
            ru: ["Сотрудник больницы: Пожалуйста, напишите симптомы в этой медицинской анкете.", "Пациент: Есть места, которые я не могу хорошо написать по-японски.", "Сотрудник больницы: Можно написать в пределах того, что понимаете. Потом медсестра проверит.", "Пациент: Нужно ли писать аллергию на лекарства?", "Сотрудник больницы: Да, обязательно напишите."],
            uk: ["Працівник лікарні: Будь ласка, напишіть симптоми в цій медичній анкеті.", "Пацієнт: Є місця, які я не можу добре написати японською.", "Працівник лікарні: Можна написати в межах того, що розумієте. Потім медсестра перевірить.", "Пацієнт: Чи потрібно також писати алергію на ліки?", "Працівник лікарні: Так, обов’язково напишіть."]
        }
    ),

    makeA2HospitalDialogue(
        "a2_hospital_004",
        "のどの痛みと熱を伝える",
        [
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "今日はどうされましたか。",
                target: "きょうはどうされましたか",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>はどうされましたか。",
                romaji: "Kyō wa dō saremashita ka."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "昨日からのどが痛くて、少し熱があります。",
                target: "きのうからのどがいたくて すこしねつがあります",
                ruby: "<ruby>昨日<rt>きのう</rt></ruby>からのどが<ruby>痛<rt>いた</rt></ruby>くて、<ruby>少<rt>すこ</rt></ruby>し<ruby>熱<rt>ねつ</rt></ruby>があります。",
                romaji: "Kinō kara nodo ga itakute, sukoshi netsu ga arimasu."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "せきや鼻水はありますか。",
                target: "せきやはなみずはありますか",
                ruby: "せきや<ruby>鼻水<rt>はなみず</rt></ruby>はありますか。",
                romaji: "Seki ya hanamizu wa arimasu ka."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "せきは少しありますが、息苦しさはありません。",
                target: "せきはすこしありますが いきぐるしさはありません",
                ruby: "せきは<ruby>少<rt>すこ</rt></ruby>しありますが、<ruby>息苦<rt>いきぐる</rt></ruby>しさはありません。",
                romaji: "Seki wa sukoshi arimasu ga, ikigurushisa wa arimasen."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "では、のどを見てから必要な検査を考えます。",
                target: "では のどをみてからひつようなけんさをかんがえます",
                ruby: "では、のどを<ruby>見<rt>み</rt></ruby>てから<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>検査<rt>けんさ</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えます。",
                romaji: "Dewa, nodo o mite kara hitsuyō na kensa o kangaemasu."
            }
        ],
        {
            ja: ["医師：今日はどうされましたか。", "患者：昨日からのどが痛くて、少し熱があります。", "医師：せきや鼻水はありますか。", "患者：せきは少しありますが、息苦しさはありません。", "医師：では、のどを見てから必要な検査を考えます。"],
            en: ["Doctor: What brings you here today?", "Patient: Since yesterday, my throat has hurt, and I have a slight fever.", "Doctor: Do you have a cough or runny nose?", "Patient: I have a slight cough, but I do not have difficulty breathing.", "Doctor: Then I will look at your throat and consider any necessary tests."],
            "zh-CN": ["医生：今天怎么了？", "患者：从昨天开始喉咙痛，还有一点发烧。", "医生：有咳嗽或流鼻水吗？", "患者：有一点咳嗽，但没有呼吸困难。", "医生：那么，我先看一下喉咙，再考虑需要的检查。"],
            "zh-TW": ["醫師：今天怎麼了？", "患者：從昨天開始喉嚨痛，還有一點發燒。", "醫師：有咳嗽或流鼻水嗎？", "患者：有一點咳嗽，但沒有呼吸困難。", "醫師：那麼，我先看一下喉嚨，再考慮需要的檢查。"],
            ko: ["의사: 오늘은 어떻게 오셨나요?", "환자: 어제부터 목이 아프고 조금 열이 있습니다.", "의사: 기침이나 콧물은 있나요?", "환자: 기침은 조금 있지만 숨이 차지는 않습니다.", "의사: 그럼 목을 본 뒤 필요한 검사를 생각하겠습니다."],
            vi: ["Bác sĩ: Hôm nay bạn bị sao ạ?", "Bệnh nhân: Từ hôm qua tôi đau họng và hơi sốt.", "Bác sĩ: Bạn có ho hay chảy nước mũi không?", "Bệnh nhân: Tôi hơi ho, nhưng không khó thở.", "Bác sĩ: Vậy tôi sẽ xem họng rồi cân nhắc xét nghiệm cần thiết."],
            tl: ["Doktor: Ano po ang nararamdaman ninyo ngayon?", "Patient: Mula kahapon po, masakit ang lalamunan ko at may kaunting lagnat.", "Doktor: May ubo o sipon po ba kayo?", "Patient: May kaunting ubo po, pero hindi ako hirap huminga.", "Doktor: Kung ganoon, titingnan ko muna ang lalamunan at iisipin ang kinakailangang tests."],
            id: ["Dokter: Hari ini ada keluhan apa?", "Pasien: Sejak kemarin tenggorokan saya sakit dan sedikit demam.", "Dokter: Apakah ada batuk atau pilek?", "Pasien: Batuk sedikit, tetapi tidak sesak napas.", "Dokter: Kalau begitu, saya akan melihat tenggorokan Anda lalu mempertimbangkan pemeriksaan yang diperlukan."],
            th: ["แพทย์: วันนี้เป็นอะไรคะ/ครับ", "ผู้ป่วย: ตั้งแต่เมื่อวานเจ็บคอและมีไข้นิดหน่อยค่ะ/ครับ", "แพทย์: มีไอหรือน้ำมูกไหมคะ/ครับ", "ผู้ป่วย: ไอนิดหน่อย แต่ไม่หายใจลำบากค่ะ/ครับ", "แพทย์: งั้นจะดูคอก่อน แล้วพิจารณาการตรวจที่จำเป็นค่ะ/ครับ"],
            my: ["ဆရာဝန်: ဒီနေ့ ဘာဖြစ်လို့လာတာပါလဲ။", "လူနာ: မနေ့ကတည်းက လည်ချောင်းနာပြီး အဖျားနည်းနည်းရှိပါတယ်။", "ဆရာဝန်: ချောင်းဆိုးတာ ဒါမှမဟုတ် နှာရည်ယိုတာ ရှိပါသလား။", "လူနာ: ချောင်းနည်းနည်းဆိုးပေမယ့် အသက်ရှူကျပ်တာ မရှိပါဘူး။", "ဆရာဝန်: ဒါဆို လည်ချောင်းကိုကြည့်ပြီး လိုအပ်တဲ့စစ်ဆေးမှုကို စဉ်းစားပါမယ်။"],
            km: ["វេជ្ជបណ្ឌិត: ថ្ងៃនេះមានអ្វីកើតឡើង?", "អ្នកជំងឺ: តាំងពីម្សិលមិញ ខ្ញុំឈឺបំពង់ក និងមានគ្រុនក្តៅបន្តិច។", "វេជ្ជបណ្ឌិត: តើមានក្អក ឬហៀរសំបោរទេ?", "អ្នកជំងឺ: ខ្ញុំក្អកបន្តិច ប៉ុន្តែមិនពិបាកដកដង្ហើមទេ។", "វេជ្ជបណ្ឌិត: ដូច្នេះ ខ្ញុំនឹងមើលបំពង់ក ហើយគិតអំពីការពិនិត្យដែលចាំបាច់។"],
            ne: ["डाक्टर: आज के समस्या भयो?", "बिरामी: हिजोदेखि घाँटी दुखेको छ र अलि ज्वरो छ।", "डाक्टर: खोकी वा नाकबाट पानी आउँछ?", "बिरामी: अलि खोकी छ, तर सास फेर्न गाह्रो छैन।", "डाक्टर: त्यसो भए, घाँटी हेरेपछि आवश्यक जाँच सोच्नेछु।"],
            mn: ["Эмч: Өнөөдөр яасан бэ?", "Өвчтөн: Өчигдрөөс хоолой өвдөж, жаахан халуурч байна.", "Эмч: Ханиалга эсвэл нус гоожих байна уу?", "Өвчтөн: Жаахан ханиалгаж байгаа ч амьсгаа давчдахгүй.", "Эмч: Тэгвэл хоолойг үзээд шаардлагатай шинжилгээг бодъё."],
            si: ["වෛද්‍යවරයා: අද මොකක් නිසා ආවේද?", "රෝගියා: ඊයේ සිට උගුර đau되고 ටිකක් fever තියෙනවා.", "වෛද්‍යවරයා: cough හෝ runny nose තියෙනවද?", "රෝගියා: cough ටිකක් තියෙනවා, නමුත් breathing difficulty නැහැ.", "වෛද්‍යවරයා: එහෙනම් උගුර බලලා අවශ්‍ය test ගැන සිතමු."],
            bn: ["ডাক্তার: আজ কী হয়েছে?", "রোগী: গতকাল থেকে গলা ব্যথা এবং একটু জ্বর আছে।", "ডাক্তার: কাশি বা নাক দিয়ে পানি পড়ছে?", "রোগী: একটু কাশি আছে, কিন্তু শ্বাসকষ্ট নেই।", "ডাক্তার: তাহলে গলা দেখে প্রয়োজনীয় পরীক্ষা চিন্তা করব।"],
            pt: ["Médico: O que aconteceu hoje?", "Paciente: Desde ontem minha garganta dói e tenho um pouco de febre.", "Médico: Você tem tosse ou coriza?", "Paciente: Tenho um pouco de tosse, mas não tenho falta de ar.", "Médico: Então vou olhar sua garganta e considerar os exames necessários."],
            es: ["Médico: ¿Qué le pasa hoy?", "Paciente: Desde ayer me duele la garganta y tengo un poco de fiebre.", "Médico: ¿Tiene tos o secreción nasal?", "Paciente: Tengo un poco de tos, pero no tengo dificultad para respirar.", "Médico: Entonces miraré su garganta y consideraré las pruebas necesarias."],
            fr: ["Médecin : Qu’est-ce qui vous amène aujourd’hui ?", "Patient : Depuis hier, j’ai mal à la gorge et un peu de fièvre.", "Médecin : Avez-vous de la toux ou le nez qui coule ?", "Patient : J’ai un peu de toux, mais je n’ai pas de difficulté à respirer.", "Médecin : Alors je vais regarder votre gorge et envisager les examens nécessaires."],
            ru: ["Врач: Что вас беспокоит сегодня?", "Пациент: Со вчерашнего дня болит горло и есть небольшая температура.", "Врач: Есть кашель или насморк?", "Пациент: Немного кашляю, но одышки нет.", "Врач: Тогда я посмотрю горло и подумаю о необходимых анализах."],
            uk: ["Лікар: Що вас турбує сьогодні?", "Пацієнт: З учора болить горло і є невелика температура.", "Лікар: Є кашель або нежить?", "Пацієнт: Трохи кашляю, але задишки немає.", "Лікар: Тоді я подивлюся горло і подумаю про потрібні обстеження."]
        }
    ),

    makeA2HospitalDialogue(
        "a2_hospital_005",
        "お腹の痛みを伝える",
        [
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "お腹の痛みはいつからですか。",
                target: "おなかのいたみはいつからですか",
                ruby: "お<ruby>腹<rt>なか</rt></ruby>の<ruby>痛<rt>いた</rt></ruby>みはいつからですか。",
                romaji: "Onaka no itami wa itsu kara desu ka."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "今朝からです。食事のあとに強くなりました。",
                target: "けさからです しょくじのあとにつよくなりました",
                ruby: "<ruby>今朝<rt>けさ</rt></ruby>からです。<ruby>食事<rt>しょくじ</rt></ruby>のあとに<ruby>強<rt>つよ</rt></ruby>くなりました。",
                romaji: "Kesa kara desu. Shokuji no ato ni tsuyoku narimashita."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "吐き気や下痢はありますか。",
                target: "はきけやげりはありますか",
                ruby: "<ruby>吐<rt>は</rt></ruby>き<ruby>気<rt>け</rt></ruby>や<ruby>下痢<rt>げり</rt></ruby>はありますか。",
                romaji: "Hakike ya geri wa arimasu ka."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "吐き気はありますが、下痢はありません。",
                target: "はきけはありますが げりはありません",
                ruby: "<ruby>吐<rt>は</rt></ruby>き<ruby>気<rt>け</rt></ruby>はありますが、<ruby>下痢<rt>げり</rt></ruby>はありません。",
                romaji: "Hakike wa arimasu ga, geri wa arimasen."
            },
            {
                label: "話者A",
                key: "doctor",
                name: "医師",
                line: "水分を取れているかも確認します。",
                target: "すいぶんをとれているかもかくにんします",
                ruby: "<ruby>水分<rt>すいぶん</rt></ruby>を<ruby>取<rt>と</rt></ruby>れているかも<ruby>確認<rt>かくにん</rt></ruby>します。",
                romaji: "Suibun o torete iru ka mo kakunin shimasu."
            }
        ],
        {
            ja: ["医師：お腹の痛みはいつからですか。", "患者：今朝からです。食事のあとに強くなりました。", "医師：吐き気や下痢はありますか。", "患者：吐き気はありますが、下痢はありません。", "医師：水分を取れているかも確認します。"],
            en: ["Doctor: Since when have you had stomach pain?", "Patient: Since this morning. It became stronger after I ate.", "Doctor: Do you have nausea or diarrhea?", "Patient: I have nausea, but I do not have diarrhea.", "Doctor: I will also check whether you are able to take in fluids."],
            "zh-CN": ["医生：肚子痛是从什么时候开始的？", "患者：从今天早上开始。吃饭后变严重了。", "医生：有恶心或腹泻吗？", "患者：有恶心，但没有腹泻。", "医生：我也会确认您是否能摄取水分。"],
            "zh-TW": ["醫師：肚子痛是從什麼時候開始的？", "患者：從今天早上開始。吃飯後變嚴重了。", "醫師：有噁心或腹瀉嗎？", "患者：有噁心，但沒有腹瀉。", "醫師：我也會確認您是否能攝取水分。"],
            ko: ["의사: 배의 통증은 언제부터인가요?", "환자: 오늘 아침부터입니다. 식사 후에 심해졌습니다.", "의사: 메스꺼움이나 설사는 있나요?", "환자: 메스꺼움은 있지만 설사는 없습니다.", "의사: 수분을 섭취할 수 있는지도 확인하겠습니다."],
            vi: ["Bác sĩ: Đau bụng bắt đầu từ khi nào?", "Bệnh nhân: Từ sáng nay. Sau bữa ăn thì đau mạnh hơn.", "Bác sĩ: Bạn có buồn nôn hay tiêu chảy không?", "Bệnh nhân: Tôi buồn nôn nhưng không bị tiêu chảy.", "Bác sĩ: Tôi cũng sẽ kiểm tra xem bạn có uống được nước không."],
            tl: ["Doktor: Kailan po nagsimula ang pananakit ng tiyan?", "Patient: Simula po ngayong umaga. Lumakas po pagkatapos kumain.", "Doktor: May nausea o diarrhea po ba?", "Patient: May nausea po, pero wala pong diarrhea.", "Doktor: Iche-check ko rin kung nakakainom kayo ng fluids."],
            id: ["Dokter: Sejak kapan perut Anda sakit?", "Pasien: Sejak pagi ini. Setelah makan, sakitnya menjadi lebih kuat.", "Dokter: Apakah ada mual atau diare?", "Pasien: Ada mual, tetapi tidak ada diare.", "Dokter: Saya juga akan memeriksa apakah Anda bisa minum cairan."],
            th: ["แพทย์: ปวดท้องตั้งแต่เมื่อไรคะ/ครับ", "ผู้ป่วย: ตั้งแต่เช้านี้ค่ะ/ครับ หลังอาหารปวดมากขึ้นค่ะ/ครับ", "แพทย์: มีคลื่นไส้หรือท้องเสียไหมคะ/ครับ", "ผู้ป่วย: มีคลื่นไส้ แต่ไม่มีท้องเสียค่ะ/ครับ", "แพทย์: จะตรวจด้วยว่าสามารถดื่มน้ำได้หรือไม่ค่ะ/ครับ"],
            my: ["ဆရာဝန်: ဗိုက်နာတာ ဘယ်အချိန်ကတည်းကပါလဲ။", "လူနာ: ဒီမနက်ကတည်းကပါ။ အစာစားပြီးနောက် ပိုနာလာပါတယ်။", "ဆရာဝန်: အန်ချင်တာ ဒါမှမဟုတ် ဝမ်းလျှောတာ ရှိပါသလား။", "လူနာ: အန်ချင်တာ ရှိပေမယ့် ဝမ်းလျှောတာ မရှိပါဘူး။", "ဆရာဝန်: ရေဓာတ် သောက်နိုင်မနိုင်လည်း စစ်ဆေးပါမယ်။"],
            km: ["វេជ្ជបណ្ឌិត: ឈឺពោះចាប់ផ្តើមពីពេលណា?", "អ្នកជំងឺ: ចាប់ពីព្រឹកនេះ។ បន្ទាប់ពីញ៉ាំអាហារ វាឈឺខ្លាំងឡើង។", "វេជ្ជបណ្ឌិត: តើមានអារម្មណ៍ចង់ក្អួត ឬរាគទេ?", "អ្នកជំងឺ: មានអារម្មណ៍ចង់ក្អួត ប៉ុន្តែមិនរាគទេ។", "វេជ្ជបណ្ឌិត: ខ្ញុំនឹងពិនិត្យផងដែរថាអ្នកអាចផឹកទឹកបានឬអត់។"],
            ne: ["डाक्टर: पेट दुखाइ कहिलेदेखि हो?", "बिरामी: आज बिहानदेखि हो। खाना खाएपछि बलियो भयो।", "डाक्टर: वाकवाकी वा पखाला छ?", "बिरामी: वाकवाकी छ, तर पखाला छैन।", "डाक्टर: पानी पिउन सकिरहेको छ कि छैन पनि確認 गर्छु।"],
            mn: ["Эмч: Гэдэсний өвдөлт хэзээнээс вэ?", "Өвчтөн: Өнөө өглөөнөөс. Хоолны дараа хүчтэй болсон.", "Эмч: Дотор муухайрах эсвэл суулгах байна уу?", "Өвчтөн: Дотор муухайрч байна, гэхдээ суулгахгүй.", "Эмч: Шингэн ууж чадаж байгаа эсэхийг ч шалгана."],
            si: ["වෛද්‍යවරයා: බඩේ වේදනාව කවදා සිටද?", "රෝගියා: අද උදේ සිටයි. කෑමෙන් පසුව වැඩි වුණා.", "වෛද්‍යවරයා: nausea හෝ diarrhea තියෙනවද?", "රෝගියා: nausea තියෙනවා, නමුත් diarrhea නැහැ.", "වෛද්‍යවරයා: fluids ගන්න පුළුවන්ද කියලත්確認 කරමු."],
            bn: ["ডাক্তার: পেটের ব্যথা কখন থেকে?", "রোগী: আজ সকালে থেকে। খাবারের পরে বেশি হয়েছে।", "ডাক্তার: বমি বমি ভাব বা ডায়রিয়া আছে?", "রোগী: বমি বমি ভাব আছে, কিন্তু ডায়রিয়া নেই।", "ডাক্তার: পানি পান করতে পারছেন কি না তাও 확인 করব।"],
            pt: ["Médico: Desde quando está com dor abdominal?", "Paciente: Desde esta manhã. Ficou mais forte depois de comer.", "Médico: Tem náusea ou diarreia?", "Paciente: Tenho náusea, mas não tenho diarreia.", "Médico: Também vou verificar se você consegue ingerir líquidos."],
            es: ["Médico: ¿Desde cuándo tiene dolor de estómago?", "Paciente: Desde esta mañana. Se hizo más fuerte después de comer.", "Médico: ¿Tiene náuseas o diarrea?", "Paciente: Tengo náuseas, pero no tengo diarrea.", "Médico: También revisaré si puede tomar líquidos."],
            fr: ["Médecin : Depuis quand avez-vous mal au ventre ?", "Patient : Depuis ce matin. C’est devenu plus fort après le repas.", "Médecin : Avez-vous des nausées ou de la diarrhée ?", "Patient : J’ai des nausées, mais pas de diarrhée.", "Médecin : Je vais aussi vérifier si vous pouvez boire suffisamment."],
            ru: ["Врач: С какого времени болит живот?", "Пациент: С сегодняшнего утра. После еды стало сильнее.", "Врач: Есть тошнота или диарея?", "Пациент: Тошнота есть, но диареи нет.", "Врач: Я также проверю, можете ли вы пить жидкость."],
            uk: ["Лікар: Відколи болить живіт?", "Пацієнт: З цього ранку. Після їжі стало сильніше.", "Лікар: Є нудота або діарея?", "Пацієнт: Нудота є, але діареї немає.", "Лікар: Я також перевірю, чи можете ви пити рідину."]
        }
    ),

    makeA2HospitalDialogue(
        "a2_hospital_006",
        "処方せんを受け取る",
        [
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "診察が終わりましたので、会計までお待ちください。",
                target: "しんさつがおわりましたので かいけいまでおまちください",
                ruby: "<ruby>診察<rt>しんさつ</rt></ruby>が<ruby>終<rt>お</rt></ruby>わりましたので、<ruby>会計<rt>かいけい</rt></ruby>までお<ruby>待<rt>ま</rt></ruby>ちください。",
                romaji: "Shinsatsu ga owarimashita node, kaikei made o-machi kudasai."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "薬はこの病院でもらえますか。",
                target: "くすりはこのびょういんでもらえますか",
                ruby: "<ruby>薬<rt>くすり</rt></ruby>はこの<ruby>病院<rt>びょういん</rt></ruby>でもらえますか。",
                romaji: "Kusuri wa kono byōin de moraemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "今日は処方せんを出しますので、近くの薬局へ持って行ってください。",
                target: "きょうはしょほうせんをだしますので ちかくのやっきょくへもっていってください",
                ruby: "<ruby>今日<rt>きょう</rt></ruby>は<ruby>処方<rt>しょほう</rt></ruby>せんを<ruby>出<rt>だ</rt></ruby>しますので、<ruby>近<rt>ちか</rt></ruby>くの<ruby>薬局<rt>やっきょく</rt></ruby>へ<ruby>持<rt>も</rt></ruby>って<ruby>行<rt>い</rt></ruby>ってください。",
                romaji: "Kyō wa shohōsen o dashimasu node, chikaku no yakkyoku e motte itte kudasai."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "処方せんは何日以内に使えばいいですか。",
                target: "しょほうせんはなんにちいないにつかえばいいですか",
                ruby: "<ruby>処方<rt>しょほう</rt></ruby>せんは<ruby>何日以内<rt>なんにちいない</rt></ruby>に<ruby>使<rt>つか</rt></ruby>えばいいですか。",
                romaji: "Shohōsen wa nan-nichi inai ni tsukaeba ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "発行日を含めて四日以内です。",
                target: "はっこうびをふくめてよっかいないです",
                ruby: "<ruby>発行日<rt>はっこうび</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>めて<ruby>四日以内<rt>よっかいない</rt></ruby>です。",
                romaji: "Hakkōbi o fukumete yokka inai desu."
            }
        ],
        {
            ja: ["病院の人：診察が終わりましたので、会計までお待ちください。", "患者：薬はこの病院でもらえますか。", "病院の人：今日は処方せんを出しますので、近くの薬局へ持って行ってください。", "患者：処方せんは何日以内に使えばいいですか。", "病院の人：発行日を含めて四日以内です。"],
            en: ["Hospital Staff: The examination is finished, so please wait until payment.", "Patient: Can I get the medicine at this hospital?", "Hospital Staff: Today we will issue a prescription, so please take it to a nearby pharmacy.", "Patient: Within how many days should I use the prescription?", "Hospital Staff: Within four days, including the date it is issued."],
            "zh-CN": ["医院人员：诊察结束了，请等候会计。", "患者：药可以在这家医院领取吗？", "医院人员：今天会开处方，请拿到附近的药局。", "患者：处方应在几天以内使用？", "医院人员：包括发行日在内四天以内。"],
            "zh-TW": ["醫院人員：診察結束了，請等候會計。", "患者：藥可以在這家醫院領取嗎？", "醫院人員：今天會開處方，請拿到附近的藥局。", "患者：處方應在幾天以內使用？", "醫院人員：包括開立日在內四天以內。"],
            ko: ["병원 직원: 진찰이 끝났으니 회계까지 기다려 주세요.", "환자: 약은 이 병원에서 받을 수 있나요?", "병원 직원: 오늘은 처방전을 드리니 가까운 약국으로 가져가 주세요.", "환자: 처방전은 며칠 이내에 사용하면 되나요?", "병원 직원: 발행일을 포함하여 4일 이내입니다."],
            vi: ["Nhân viên bệnh viện: Việc khám đã xong, xin hãy chờ đến phần thanh toán.", "Bệnh nhân: Tôi có thể nhận thuốc ở bệnh viện này không ạ?", "Nhân viên bệnh viện: Hôm nay chúng tôi sẽ cấp đơn thuốc, nên hãy mang đến nhà thuốc gần đây.", "Bệnh nhân: Đơn thuốc nên dùng trong vòng bao nhiêu ngày?", "Nhân viên bệnh viện: Trong vòng bốn ngày, tính cả ngày phát hành."],
            tl: ["Hospital staff: Tapos na po ang examination, kaya maghintay po hanggang payment.", "Patient: Makukuha ko po ba ang gamot sa hospital na ito?", "Hospital staff: Magbibigay po kami ng prescription ngayon, kaya dalhin po ito sa malapit na pharmacy.", "Patient: Sa loob po ng ilang araw dapat gamitin ang prescription?", "Hospital staff: Sa loob po ng apat na araw, kasama ang issue date."],
            id: ["Staf rumah sakit: Pemeriksaan sudah selesai, jadi silakan menunggu sampai pembayaran.", "Pasien: Apakah obat bisa didapatkan di rumah sakit ini?", "Staf rumah sakit: Hari ini kami akan mengeluarkan resep, jadi bawalah ke apotek terdekat.", "Pasien: Resep ini harus digunakan dalam berapa hari?", "Staf rumah sakit: Dalam empat hari, termasuk tanggal penerbitan."],
            th: ["เจ้าหน้าที่โรงพยาบาล: ตรวจเสร็จแล้ว กรุณารอจนถึงการชำระเงินค่ะ/ครับ", "ผู้ป่วย: รับยาได้ที่โรงพยาบาลนี้ไหมคะ/ครับ", "เจ้าหน้าที่โรงพยาบาล: วันนี้จะออกใบสั่งยาให้ กรุณานำไปที่ร้านยาใกล้ ๆ ค่ะ/ครับ", "ผู้ป่วย: ใบสั่งยาต้องใช้ภายในกี่วันคะ/ครับ", "เจ้าหน้าที่โรงพยาบาล: ภายใน 4 วัน รวมวันที่ออกใบสั่งยาค่ะ/ครับ"],
            my: ["ဆေးရုံဝန်ထမ်း: စစ်ဆေးမှု ပြီးပါပြီ၊ ငွေပေးချေချိန်အထိ စောင့်ပေးပါ။", "လူနာ: ဆေးကို ဒီဆေးရုံမှာ ရနိုင်ပါသလား။", "ဆေးရုံဝန်ထမ်း: ဒီနေ့ prescription ထုတ်ပေးမှာဖြစ်လို့ အနီးက pharmacy ကို ယူသွားပေးပါ။", "လူနာ: prescription ကို ဘယ်နှစ်ရက်အတွင်း သုံးရမလဲ။", "ဆေးရုံဝန်ထမ်း: ထုတ်တဲ့နေ့အပါအဝင် ၄ ရက်အတွင်းပါ။"],
            km: ["បុគ្គលិកមន្ទីរពេទ្យ: ការពិនិត្យបានបញ្ចប់ហើយ សូមរង់ចាំដល់ពេលបង់ប្រាក់។", "អ្នកជំងឺ: តើអាចទទួលថ្នាំនៅមន្ទីរពេទ្យនេះបានទេ?", "បុគ្គលិកមន្ទីរពេទ្យ: ថ្ងៃនេះយើងនឹងចេញវេជ្ជបញ្ជា ដូច្នេះសូមយកទៅឱសថស្ថានជិតនេះ។", "អ្នកជំងឺ: តើវេជ្ជបញ្ជាត្រូវប្រើក្នុងរយៈពេលប៉ុន្មានថ្ងៃ?", "បុគ្គលិកមន្ទីរពេទ្យ: ក្នុងរយៈពេល 4 ថ្ងៃ រួមទាំងថ្ងៃចេញ។"],
            ne: ["अस्पतालका कर्मचारी: जाँच सकियो, payment सम्म पर्खनुहोस्।", "बिरामी: औषधि यो अस्पतालमै पाइन्छ?", "अस्पतालका कर्मचारी: आज prescription दिन्छौं, त्यसैले नजिकको pharmacy मा लैजानुहोस्।", "बिरामी: prescription कति दिनभित्र प्रयोग गर्नुपर्छ?", "अस्पतालका कर्मचारी: जारी भएको दिनसहित चार दिनभित्र हो।"],
            mn: ["Эмнэлгийн ажилтан: Үзлэг дууссан тул төлбөр хүртэл хүлээнэ үү.", "Өвчтөн: Эмийг энэ эмнэлгээс авч болох уу?", "Эмнэлгийн ажилтан: Өнөөдөр жор гаргах тул ойролцоох эмийн сан руу авч яваарай.", "Өвчтөн: Жорыг хэдэн өдрийн дотор ашиглах ёстой вэ?", "Эмнэлгийн ажилтан: Гаргасан өдрийг оруулаад 4 хоногийн дотор."],
            si: ["රෝහල් කාර්ය මණ්ඩලය: examination එක අවසන් වුණා, payment දක්වා රැඳී සිටින්න.", "රෝගියා: medicine එක මේ hospital එකෙන් ගන්න පුළුවන්ද?", "රෝහල් කාර්ය මණ්ඩලය: අද prescription එකක් දෙන්නම්, ඒක ළඟ pharmacy එකකට ගෙනියන්න.", "රෝගියා: prescription එක දින කීයක් ඇතුළත භාවිතා කරන්න ඕනෙද?", "රෝහල් කාර්ය මණ්ඩලය: issue date ඇතුළුව දින 4ක් ඇතුළතයි."],
            bn: ["হাসপাতালের কর্মী: পরীক্ষা শেষ হয়েছে, payment পর্যন্ত অপেক্ষা করুন।", "রোগী: ওষুধ কি এই হাসপাতালে পাব?", "হাসপাতালের কর্মী: আজ prescription দেব, তাই কাছের pharmacy-তে নিয়ে যান।", "রোগী: prescription কত দিনের মধ্যে ব্যবহার করতে হবে?", "হাসপাতালের কর্মী: ইস্যু করার দিনসহ চার দিনের মধ্যে।"],
            pt: ["Funcionário do hospital: A consulta terminou, então aguarde até o pagamento.", "Paciente: Posso receber o remédio neste hospital?", "Funcionário do hospital: Hoje emitiremos uma receita, então leve-a a uma farmácia próxima.", "Paciente: Em quantos dias devo usar a receita?", "Funcionário do hospital: Dentro de quatro dias, incluindo a data de emissão."],
            es: ["Personal del hospital: La consulta terminó, así que espere hasta el pago.", "Paciente: ¿Puedo recibir la medicina en este hospital?", "Personal del hospital: Hoy emitiremos una receta, así que llévela a una farmacia cercana.", "Paciente: ¿En cuántos días debo usar la receta?", "Personal del hospital: Dentro de cuatro días, incluyendo la fecha de emisión."],
            fr: ["Personnel de l’hôpital : La consultation est terminée, veuillez attendre le paiement.", "Patient : Puis-je recevoir le médicament dans cet hôpital ?", "Personnel de l’hôpital : Aujourd’hui, nous vous donnerons une ordonnance, veuillez l’apporter à une pharmacie proche.", "Patient : Dans combien de jours dois-je utiliser l’ordonnance ?", "Personnel de l’hôpital : Dans les quatre jours, y compris le jour d’émission."],
            ru: ["Сотрудник больницы: Осмотр закончен, пожалуйста, подождите до оплаты.", "Пациент: Можно получить лекарство в этой больнице?", "Сотрудник больницы: Сегодня мы выдадим рецепт, поэтому отнесите его в ближайшую аптеку.", "Пациент: В течение скольких дней нужно использовать рецепт?", "Сотрудник больницы: В течение четырёх дней, включая дату выдачи."],
            uk: ["Працівник лікарні: Огляд завершено, будь ласка, зачекайте до оплати.", "Пацієнт: Чи можна отримати ліки в цій лікарні?", "Працівник лікарні: Сьогодні ми видаємо рецепт, тому віднесіть його до найближчої аптеки.", "Пацієнт: Протягом скількох днів потрібно використати рецепт?", "Працівник лікарні: Протягом чотирьох днів, включно з датою видачі."]
        }
    ),

    makeA2HospitalDialogue(
        "a2_hospital_007",
        "薬局で薬の説明を聞く",
        [
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "お薬の説明をします。",
                target: "おくすりのせつめいをします",
                ruby: "お<ruby>薬<rt>くすり</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>をします。",
                romaji: "O-kusuri no setsumei o shimasu."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "食前と食後の違いがよくわかりません。",
                target: "しょくぜんとしょくごのちがいがよくわかりません",
                ruby: "<ruby>食前<rt>しょくぜん</rt></ruby>と<ruby>食後<rt>しょくご</rt></ruby>の<ruby>違<rt>ちが</rt></ruby>いがよくわかりません。",
                romaji: "Shokuzen to shokugo no chigai ga yoku wakarimasen."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "食前は食事の前、食後は食事のあとです。",
                target: "しょくぜんはしょくじのまえ しょくごはしょくじのあとです",
                ruby: "<ruby>食前<rt>しょくぜん</rt></ruby>は<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>、<ruby>食後<rt>しょくご</rt></ruby>は<ruby>食事<rt>しょくじ</rt></ruby>のあとです。",
                romaji: "Shokuzen wa shokuji no mae, shokugo wa shokuji no ato desu."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "飲み忘れた場合はどうしたらいいですか。",
                target: "のみわすれたばあいはどうしたらいいですか",
                ruby: "<ruby>飲<rt>の</rt></ruby>み<ruby>忘<rt>わす</rt></ruby>れた<ruby>場合<rt>ばあい</rt></ruby>はどうしたらいいですか。",
                romaji: "Nomiwasureta baai wa dō shitara ii desu ka."
            },
            {
                label: "話者A",
                key: "pharmacist",
                name: "薬剤師",
                line: "自己判断せず、薬局か病院に相談してください。",
                target: "じこはんだんせず やっきょくかびょういんにそうだんしてください",
                ruby: "<ruby>自己判断<rt>じこはんだん</rt></ruby>せず、<ruby>薬局<rt>やっきょく</rt></ruby>か<ruby>病院<rt>びょういん</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>してください。",
                romaji: "Jiko handan sezu, yakkyoku ka byōin ni sōdan shite kudasai."
            }
        ],
        {
            ja: ["薬剤師：お薬の説明をします。", "患者：食前と食後の違いがよくわかりません。", "薬剤師：食前は食事の前、食後は食事のあとです。", "患者：飲み忘れた場合はどうしたらいいですか。", "薬剤師：自己判断せず、薬局か病院に相談してください。"],
            en: ["Pharmacist: I will explain your medicine.", "Patient: I do not really understand the difference between before meals and after meals.", "Pharmacist: Before meals means before eating, and after meals means after eating.", "Patient: What should I do if I forget to take it?", "Pharmacist: Please do not decide by yourself. Consult the pharmacy or hospital."],
            "zh-CN": ["药剂师：我来说明药的用法。", "患者：我不太明白饭前和饭后的区别。", "药剂师：饭前是吃饭前，饭后是吃饭后。", "患者：如果忘记吃药，该怎么办？", "药剂师：请不要自行判断，请咨询药局或医院。"],
            "zh-TW": ["藥師：我來說明藥的用法。", "患者：我不太明白飯前和飯後的差別。", "藥師：飯前是吃飯前，飯後是吃飯後。", "患者：如果忘記吃藥，該怎麼辦？", "藥師：請不要自行判斷，請諮詢藥局或醫院。"],
            ko: ["약사: 약에 대해 설명드리겠습니다.", "환자: 식전과 식후의 차이를 잘 모르겠습니다.", "약사: 식전은 식사 전, 식후는 식사 후입니다.", "환자: 약을 먹는 것을 잊은 경우에는 어떻게 하면 되나요?", "약사: 스스로 판단하지 말고 약국이나 병원에 상담해 주세요."],
            vi: ["Dược sĩ: Tôi sẽ giải thích về thuốc.", "Bệnh nhân: Tôi không hiểu rõ sự khác nhau giữa trước bữa ăn và sau bữa ăn.", "Dược sĩ: Trước bữa ăn là trước khi ăn, sau bữa ăn là sau khi ăn.", "Bệnh nhân: Nếu tôi quên uống thì nên làm gì?", "Dược sĩ: Xin đừng tự quyết định, hãy hỏi nhà thuốc hoặc bệnh viện."],
            tl: ["Pharmacist: Ipapaliwanag ko po ang gamot ninyo.", "Patient: Hindi ko po masyadong naiintindihan ang pagkakaiba ng before meals at after meals.", "Pharmacist: Before meals po ay bago kumain, after meals po ay pagkatapos kumain.", "Patient: Ano po ang gagawin kung nakalimutan kong uminom?", "Pharmacist: Huwag po kayong magdesisyon mag-isa. Kumonsulta po sa pharmacy o hospital."],
            id: ["Apoteker: Saya akan menjelaskan obat Anda.", "Pasien: Saya kurang mengerti perbedaan sebelum makan dan sesudah makan.", "Apoteker: Sebelum makan berarti sebelum makan, dan sesudah makan berarti setelah makan.", "Pasien: Apa yang harus saya lakukan jika lupa minum obat?", "Apoteker: Jangan mengambil keputusan sendiri. Silakan konsultasi ke apotek atau rumah sakit."],
            th: ["เภสัชกร: จะอธิบายเรื่องยานะคะ/ครับ", "ผู้ป่วย: ยังไม่ค่อยเข้าใจความแตกต่างระหว่างก่อนอาหารกับหลังอาหารค่ะ/ครับ", "เภสัชกร: ก่อนอาหารคือก่อนกินข้าว หลังอาหารคือหลังกินข้าวค่ะ/ครับ", "ผู้ป่วย: ถ้าลืมกินยาควรทำอย่างไรคะ/ครับ", "เภสัชกร: อย่าตัดสินใจเอง กรุณาปรึกษาร้านยาหรือโรงพยาบาลค่ะ/ครับ"],
            my: ["ဆေးဝါးကျွမ်းကျင်သူ: ဆေးအကြောင်း ရှင်းပြပါမယ်။", "လူနာ: အစာမစားခင်နဲ့ အစာစားပြီးနောက်ကွာခြားချက်ကို သိပ်နားမလည်ပါဘူး။", "ဆေးဝါးကျွမ်းကျင်သူ: အစာမစားခင်ဆိုတာ စားသောက်မတိုင်ခင်၊ အစာစားပြီးနောက်ဆိုတာ စားပြီးနောက်ပါ။", "လူနာ: ဆေးသောက်ဖို့ မေ့သွားရင် ဘာလုပ်ရမလဲ။", "ဆေးဝါးကျွမ်းကျင်သူ: ကိုယ်တိုင်မဆုံးဖြတ်ဘဲ pharmacy သို့မဟုတ် ဆေးရုံကို တိုင်ပင်ပါ။"],
            km: ["ឱសថការី: ខ្ញុំនឹងពន្យល់អំពីថ្នាំរបស់អ្នក។", "អ្នកជំងឺ: ខ្ញុំមិនយល់ច្បាស់អំពីភាពខុសគ្នារវាងមុនអាហារ និងក្រោយអាហារ។", "ឱសថការី: មុនអាហារ គឺមុនញ៉ាំអាហារ ហើយក្រោយអាហារ គឺបន្ទាប់ពីញ៉ាំអាហារ។", "អ្នកជំងឺ: ប្រសិនបើភ្លេចផឹកថ្នាំ តើគួរធ្វើដូចម្តេច?", "ឱសថការី: សូមកុំសម្រេចចិត្តដោយខ្លួនឯង។ សូមពិគ្រោះជាមួយឱសថស្ថាន ឬមន្ទីរពេទ្យ។"],
            ne: ["फार्मासिस्ट: म औषधिको説明 गर्छु।", "बिरामी: खाना अघि र खाना पछि को फरक राम्रोसँग बुझ्दिनँ।", "फार्मासिस्ट: खाना अघि भनेको खाना खानुभन्दा अघि, खाना पछि भनेको खाना खाएपछि हो।", "बिरामी: औषधि खान बिर्सिए भने के गर्ने?", "फार्मासिस्ट: आफैं निर्णय नगरी pharmacy वा अस्पतालसँग सल्लाह गर्नुहोस्।"],
            mn: ["Эм зүйч: Эмийн талаар тайлбарлая.", "Өвчтөн: Хоолны өмнө, хоолны дараа гэдгийн ялгааг сайн ойлгохгүй байна.", "Эм зүйч: Хоолны өмнө гэдэг нь идэхээс өмнө, хоолны дараа гэдэг нь идсэний дараа гэсэн үг.", "Өвчтөн: Уухаа мартвал яах вэ?", "Эм зүйч: Өөрөө шийдэхгүйгээр эмийн сан эсвэл эмнэлэгт зөвлөнө үү."],
            si: ["ඖෂධවේදියා: ඔබේ medicine ගැන පැහැදිලි කරන්නම්.", "රෝගියා: before meals සහ after meals වෙනස හොඳින් තේරෙන්නේ නැහැ.", "ඖෂධවේදියා: before meals කියන්නේ කෑමට පෙර, after meals කියන්නේ කෑමෙන් පසුවයි.", "රෝගියා: බොන්න අමතක වුණොත් මොකද කරන්නේ?", "ඖෂධවේදියා: තමන්ම තීරණය නොකර pharmacy එකකට හෝ hospital එකකට相談 කරන්න."],
            bn: ["ফার্মাসিস্ট: ওষুধের ব্যাখ্যা করব।", "রোগী: খাবারের আগে আর খাবারের পরে পার্থক্য ভালো বুঝি না।", "ফার্মাসিস্ট: খাবারের আগে মানে খাওয়ার আগে, খাবারের পরে মানে খাওয়ার পরে।", "রোগী: খেতে ভুলে গেলে কী করব?", "ফার্মাসিস্ট: নিজে সিদ্ধান্ত নেবেন না, pharmacy বা hospital-এ পরামর্শ করুন।"],
            pt: ["Farmacêutico: Vou explicar o seu medicamento.", "Paciente: Não entendo bem a diferença entre antes e depois das refeições.", "Farmacêutico: Antes das refeições significa antes de comer, e depois das refeições significa depois de comer.", "Paciente: O que devo fazer se esquecer de tomar?", "Farmacêutico: Não decida por conta própria. Consulte a farmácia ou o hospital."],
            es: ["Farmacéutico: Le explicaré su medicamento.", "Paciente: No entiendo bien la diferencia entre antes y después de las comidas.", "Farmacéutico: Antes de las comidas significa antes de comer, y después de las comidas significa después de comer.", "Paciente: ¿Qué debo hacer si olvido tomarlo?", "Farmacéutico: No decida por su cuenta. Consulte a la farmacia o al hospital."],
            fr: ["Pharmacien : Je vais vous expliquer votre médicament.", "Patient : Je ne comprends pas bien la différence entre avant et après les repas.", "Pharmacien : Avant les repas signifie avant de manger, et après les repas signifie après avoir mangé.", "Patient : Que dois-je faire si j’oublie de le prendre ?", "Pharmacien : Ne décidez pas seul. Consultez la pharmacie ou l’hôpital."],
            ru: ["Фармацевт: Я объясню, как принимать лекарство.", "Пациент: Я не очень понимаю разницу между до еды и после еды.", "Фармацевт: До еды означает перед приёмом пищи, после еды — после приёма пищи.", "Пациент: Что делать, если я забуду принять лекарство?", "Фармацевт: Не решайте сами. Обратитесь в аптеку или больницу."],
            uk: ["Фармацевт: Я поясню, як приймати ліки.", "Пацієнт: Я не дуже розумію різницю між до їжі та після їжі.", "Фармацевт: До їжі означає перед прийомом їжі, після їжі — після прийому їжі.", "Пацієнт: Що робити, якщо я забуду прийняти ліки?", "Фармацевт: Не вирішуйте самостійно. Зверніться до аптеки або лікарні."]
        }
    ),

    makeA2HospitalDialogue(
        "a2_hospital_008",
        "会計と次回予約をする",
        [
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "本日の会計は二千四百円です。",
                target: "ほんじつのかいけいはにせんよんひゃくえんです",
                ruby: "<ruby>本日<rt>ほんじつ</rt></ruby>の<ruby>会計<rt>かいけい</rt></ruby>は<ruby>二千四百円<rt>にせんよんひゃくえん</rt></ruby>です。",
                romaji: "Honjitsu no kaikei wa nisen yonhyaku-en desu."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "カードで支払えますか。",
                target: "かーどでしはらえますか",
                ruby: "カードで<ruby>支払<rt>しはら</rt></ruby>えますか。",
                romaji: "Kādo de shiharaemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "はい、使えます。次の予約も取りますか。",
                target: "はい つかえます つぎのよやくもとりますか",
                ruby: "はい、<ruby>使<rt>つか</rt></ruby>えます。<ruby>次<rt>つぎ</rt></ruby>の<ruby>予約<rt>よやく</rt></ruby>も<ruby>取<rt>と</rt></ruby>りますか。",
                romaji: "Hai, tsukaemasu. Tsugi no yoyaku mo torimasu ka."
            },
            {
                label: "話者B",
                key: "patient",
                name: "患者",
                line: "来週の同じ時間でお願いできますか。",
                target: "らいしゅうのおなじじかんでおねがいできますか",
                ruby: "<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>同<rt>おな</rt></ruby>じ<ruby>時間<rt>じかん</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いできますか。",
                romaji: "Raishū no onaji jikan de onegai dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "病院の人",
                line: "確認します。診察券は次回も持ってきてください。",
                target: "かくにんします しんさつけんはじかいももってきてください",
                ruby: "<ruby>確認<rt>かくにん</rt></ruby>します。<ruby>診察券<rt>しんさつけん</rt></ruby>は<ruby>次回<rt>じかい</rt></ruby>も<ruby>持<rt>も</rt></ruby>ってきてください。",
                romaji: "Kakunin shimasu. Shinsatsuken wa jikai mo motte kite kudasai."
            }
        ],
        {
            ja: ["病院の人：本日の会計は二千四百円です。", "患者：カードで支払えますか。", "病院の人：はい、使えます。次の予約も取りますか。", "患者：来週の同じ時間でお願いできますか。", "病院の人：確認します。診察券は次回も持ってきてください。"],
            en: ["Hospital Staff: Today’s payment is 2,400 yen.", "Patient: Can I pay by card?", "Hospital Staff: Yes, you can. Would you also like to make your next appointment?", "Patient: Could I have the same time next week?", "Hospital Staff: I will check. Please bring your patient registration card next time too."],
            "zh-CN": ["医院人员：今天的会计是二千四百日元。", "患者：可以用卡支付吗？", "医院人员：可以。也要预约下次吗？", "患者：可以预约下周同一时间吗？", "医院人员：我确认一下。下次也请带诊察券。"],
            "zh-TW": ["醫院人員：今天的費用是二千四百日圓。", "患者：可以用卡支付嗎？", "醫院人員：可以。也要預約下次嗎？", "患者：可以預約下週同一時間嗎？", "醫院人員：我確認一下。下次也請帶診察券。"],
            ko: ["병원 직원: 오늘 회계는 2,400엔입니다.", "환자: 카드로 지불할 수 있나요?", "병원 직원: 네, 사용할 수 있습니다. 다음 예약도 잡으시겠습니까?", "환자: 다음 주 같은 시간으로 부탁드릴 수 있나요?", "병원 직원: 확인하겠습니다. 진찰권은 다음번에도 가져와 주세요."],
            vi: ["Nhân viên bệnh viện: Hôm nay tổng tiền là 2,400 yên.", "Bệnh nhân: Tôi có thể trả bằng thẻ không ạ?", "Nhân viên bệnh viện: Vâng, có thể dùng thẻ. Bạn có muốn đặt lịch lần sau không?", "Bệnh nhân: Có thể cho tôi lịch cùng giờ vào tuần sau không ạ?", "Nhân viên bệnh viện: Tôi sẽ kiểm tra. Lần sau cũng xin hãy mang thẻ khám bệnh."],
            tl: ["Hospital staff: Ang bayad po ngayon ay 2,400 yen.", "Patient: Pwede po bang magbayad gamit ang card?", "Hospital staff: Oo, puwede po. Gusto rin po ba ninyong kumuha ng next appointment?", "Patient: Pwede po ba sa parehong oras sa susunod na linggo?", "Hospital staff: Iche-check ko po. Pakidala rin po ang patient card sa susunod."],
            id: ["Staf rumah sakit: Pembayaran hari ini 2.400 yen.", "Pasien: Apakah bisa membayar dengan kartu?", "Staf rumah sakit: Ya, bisa. Apakah Anda juga ingin membuat janji berikutnya?", "Pasien: Bisakah minggu depan pada jam yang sama?", "Staf rumah sakit: Saya akan cek. Kartu pasien juga harap dibawa lain kali."],
            th: ["เจ้าหน้าที่โรงพยาบาล: ค่ารักษาวันนี้ 2,400 เยนค่ะ/ครับ", "ผู้ป่วย: จ่ายด้วยบัตรได้ไหมคะ/ครับ", "เจ้าหน้าที่โรงพยาบาล: ได้ค่ะ/ครับ จะนัดครั้งต่อไปด้วยไหมคะ/ครับ", "ผู้ป่วย: ขอเป็นเวลาเดียวกันสัปดาห์หน้าได้ไหมคะ/ครับ", "เจ้าหน้าที่โรงพยาบาล: จะตรวจสอบให้ค่ะ/ครับ ครั้งหน้ากรุณานำบัตรผู้ป่วยมาด้วยค่ะ/ครับ"],
            my: ["ဆေးရုံဝန်ထမ်း: ဒီနေ့ ငွေပေးချေရမယ့်ငွေက ၂,၄၀၀ ယန်းပါ။", "လူနာ: card နဲ့ ပေးလို့ရပါသလား။", "ဆေးရုံဝန်ထမ်း: ရပါတယ်။ နောက်တစ်ကြိမ် appointment လည်း ယူမလား။", "လူနာ: နောက်အပတ် အချိန်တူနဲ့ လုပ်ပေးလို့ရပါသလား။", "ဆေးရုံဝန်ထမ်း: စစ်ကြည့်ပါမယ်။ patient card ကို နောက်တစ်ကြိမ်လည်း ယူလာပေးပါ။"],
            km: ["បុគ្គលិកមន្ទីរពេទ្យ: ថ្លៃសេវាថ្ងៃនេះគឺ 2,400 យ៉េន។", "អ្នកជំងឺ: តើអាចបង់ដោយកាតបានទេ?", "បុគ្គលិកមន្ទីរពេទ្យ: បាន។ តើចង់កក់ណាត់ជួបលើកក្រោយផងដែរទេ?", "អ្នកជំងឺ: តើអាចជ្រើសម៉ោងដូចគ្នានៅសប្តាហ៍ក្រោយបានទេ?", "បុគ្គលិកមន្ទីរពេទ្យ: ខ្ញុំនឹងពិនិត្យ។ សូមយកប័ណ្ណពិនិត្យជំងឺមកលើកក្រោយផងដែរ។"],
            ne: ["अस्पतालका कर्मचारी: आजको payment २,४०० येन हो।", "बिरामी: card बाट तिर्न मिल्छ?", "अस्पतालका कर्मचारी: मिल्छ। अर्को appointment पनि लिनुहुन्छ?", "बिरामी: अर्को हप्ताको उही समयमा गर्न मिल्छ?", "अस्पतालका कर्मचारी:確認 गर्छु। patient card अर्को पटक पनि ल्याउनुहोस्।"],
            mn: ["Эмнэлгийн ажилтан: Өнөөдрийн төлбөр 2,400 иен.", "Өвчтөн: Картаар төлж болох уу?", "Эмнэлгийн ажилтан: Тийм, болно. Дараагийн цагийг ч авах уу?", "Өвчтөн: Ирэх долоо хоногийн ижил цагт болох уу?", "Эмнэлгийн ажилтан: Шалгана. Өвчтөний картыг дараагийн удаа ч авчирна уу."],
            si: ["රෝහල් කාර්ය මණ්ඩලය: අද payment එක yen 2,400යි.", "රෝගියා: card එකෙන් pay කරන්න පුළුවන්ද?", "රෝහල් කාර්ය මණ්ඩලය: ඔව්, පුළුවන්. next appointment එකත් ගන්නවද?", "රෝගියා: ලබන සතියේ එකම වේලාවෙන් කරන්න පුළුවන්ද?", "රෝහල් කාර්ය මණ්ඩලය:確認 කරන්නම්. patient card එක next time ද ගෙන එන්න."],
            bn: ["হাসপাতালের কর্মী: আজকের payment ২,৪০০ ইয়েন।", "রোগী: card দিয়ে payment করা যাবে?", "হাসপাতালের কর্মী: হ্যাঁ, যাবে। পরের appointment-ও নেবেন?", "রোগী: আগামী সপ্তাহের একই সময়ে করা যাবে?", "হাসপাতালের কর্মী:確認 করছি। patient card পরের বারও নিয়ে আসুন।"],
            pt: ["Funcionário do hospital: O pagamento de hoje é 2.400 ienes.", "Paciente: Posso pagar com cartão?", "Funcionário do hospital: Sim, pode. Gostaria de marcar a próxima consulta também?", "Paciente: Poderia ser no mesmo horário da próxima semana?", "Funcionário do hospital: Vou verificar. Traga também o cartão de paciente na próxima vez."],
            es: ["Personal del hospital: El pago de hoy es de 2.400 yenes.", "Paciente: ¿Puedo pagar con tarjeta?", "Personal del hospital: Sí, puede. ¿También quiere hacer la próxima cita?", "Paciente: ¿Podría ser a la misma hora la próxima semana?", "Personal del hospital: Lo revisaré. Traiga también su tarjeta de paciente la próxima vez."],
            fr: ["Personnel de l’hôpital : Le paiement d’aujourd’hui est de 2 400 yens.", "Patient : Puis-je payer par carte ?", "Personnel de l’hôpital : Oui, vous pouvez. Voulez-vous aussi prendre le prochain rendez-vous ?", "Patient : Pourrait-il être à la même heure la semaine prochaine ?", "Personnel de l’hôpital : Je vais vérifier. Veuillez aussi apporter votre carte de patient la prochaine fois."],
            ru: ["Сотрудник больницы: Сегодняшняя оплата составляет 2 400 иен.", "Пациент: Можно оплатить картой?", "Сотрудник больницы: Да, можно. Хотите также записаться на следующий приём?", "Пациент: Можно на то же время на следующей неделе?", "Сотрудник больницы: Проверю. Пожалуйста, принесите карточку пациента и в следующий раз."],
            uk: ["Працівник лікарні: Сьогоднішня оплата становить 2 400 єн.", "Пацієнт: Можна оплатити карткою?", "Працівник лікарні: Так, можна. Хочете також записатися на наступний прийом?", "Пацієнт: Можна на той самий час наступного тижня?", "Працівник лікарні: Перевірю. Будь ласка, принесіть картку пацієнта і наступного разу."]
        }
    )

];