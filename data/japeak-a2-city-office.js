// =====================================================
// Japeak A2 Level
// Scene: 役所に行こう
// Category Key: a2_city_office
// =====================================================

const a2CityOfficeContext = {
    ja: "役所で、窓口の場所、転入手続き、住民票、健康保険、税金、マイナンバーカード、多言語相談などについて話す日本語を練習します。",
    en: "Practice Japanese for visiting city hall, including counters, moving-in procedures, residence certificates, health insurance, taxes, My Number Card, and multilingual support.",
    "zh-CN": "练习去市役所时使用的日语，包括窗口、迁入手续、住民票、健康保险、税金、个人编号卡和多语言咨询。",
    "zh-TW": "練習去市役所時使用的日語，包括窗口、遷入手續、住民票、健康保險、稅金、個人編號卡和多語言諮詢。",
    ko: "시청이나 구청에서 창구, 전입 절차, 주민표, 건강보험, 세금, 마이넘버카드, 다국어 상담에 대해 말하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi đến văn phòng hành chính, gồm quầy tiếp nhận, thủ tục chuyển đến, giấy cư trú, bảo hiểm y tế, thuế, thẻ My Number và hỗ trợ đa ngôn ngữ.",
    tl: "Practice ng Japanese sa city office, tulad ng counter, moving-in procedures, residence certificate, health insurance, taxes, My Number Card, at multilingual support.",
    id: "Latihan bahasa Jepang di kantor pemerintah kota, termasuk loket, prosedur pindah masuk, surat domisili, asuransi kesehatan, pajak, My Number Card, dan dukungan multibahasa.",
    th: "ฝึกภาษาญี่ปุ่นเมื่อไปที่ว่าการเมือง เช่น ช่องบริการ ขั้นตอนย้ายเข้า ใบ住民票 ประกันสุขภาพ ภาษี บัตร My Number และการช่วยเหลือหลายภาษา",
    my: "မြို့ရုံးတွင် ကောင်တာ၊ ပြောင်းရွှေ့ဝင်ရောက်မှုလုပ်ငန်းစဉ်၊ residence certificate၊ health insurance၊ tax၊ My Number Card နှင့် ဘာသာစကားအကူအညီအကြောင်း ပြောရန် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុននៅសាលាក្រុង ដូចជា កន្លែងបម្រើសេវា នីតិវិធីផ្លាស់ទីចូល លិខិត住民票 ធានារ៉ាប់រងសុខភាព ពន្ធ ប័ណ្ណ My Number និងជំនួយពហុភាសា។",
    ne: "नगर कार्यालयमा counter, बसाइँसराइ दर्ता, residence certificate, health insurance, tax, My Number Card र multilingual support बारे बोल्ने जापानी अभ्यास।",
    mn: "Хотын захиргаанд очих үед цонх, нүүж ирсний бүртгэл, оршин суугчийн тодорхойлолт, эрүүл мэндийн даатгал, татвар, My Number Card, олон хэлний тусламжийн талаар ярих япон хэлний дадлага.",
    si: "city office එකේ counter, moving-in procedures, residence certificate, health insurance, taxes, My Number Card සහ multilingual support ගැන කතා කිරීමට අවශ්‍ය ජපන් භාෂා පුහුණුව.",
    bn: "সিটি অফিসে counter, moving-in procedures, residence certificate, health insurance, taxes, My Number Card এবং multilingual support নিয়ে জাপানি অনুশীলন।",
    pt: "Prática de japonês para ir à prefeitura, incluindo balcões, mudança de endereço, certificado de residência, seguro de saúde, impostos, My Number Card e apoio multilíngue.",
    es: "Práctica de japonés para ir al ayuntamiento, incluyendo ventanillas, trámites de mudanza, certificado de residencia, seguro médico, impuestos, My Number Card y apoyo multilingüe.",
    fr: "Entraînement en japonais pour aller à la mairie : guichets, déclaration d’emménagement, certificat de résidence, assurance maladie, impôts, My Number Card et aide multilingue.",
    ru: "Практика японского языка для посещения мэрии: окна обслуживания, регистрация переезда, справка о проживании, медицинская страховка, налоги, карта My Number и многоязычная поддержка.",
    uk: "Практика японської мови для відвідування мерії: вікна обслуговування, реєстрація переїзду, довідка про проживання, медичне страхування, податки, картка My Number і багатомовна підтримка."
};

const a2CityOfficeSpeakerNames = {
    staff: {
        ja: "役所の人", en: "City Office Staff", "zh-CN": "市役所人员", "zh-TW": "市役所人員", ko: "시청 직원",
        vi: "Nhân viên văn phòng hành chính", tl: "City office staff", id: "Staf kantor kota", th: "เจ้าหน้าที่ที่ว่าการเมือง",
        my: "မြို့ရုံးဝန်ထမ်း", km: "បុគ្គលិកសាលាក្រុង", ne: "नगर कार्यालयका कर्मचारी", mn: "Захиргааны ажилтан",
        si: "නගර කාර්යාල සේවකයා", bn: "সিটি অফিস কর্মী", pt: "Funcionário da prefeitura", es: "Personal del ayuntamiento",
        fr: "Personnel de la mairie", ru: "Сотрудник мэрии", uk: "Працівник мерії"
    },
    visitor: {
        ja: "利用者", en: "Visitor", "zh-CN": "办事的人", "zh-TW": "辦事的人", ko: "이용자",
        vi: "Người sử dụng dịch vụ", tl: "Visitor", id: "Pengunjung", th: "ผู้ใช้บริการ",
        my: "လာရောက်သူ", km: "អ្នកមកប្រើសេវា", ne: "सेवाग्राही", mn: "Үйлчлүүлэгч",
        si: "සේවා ලබාගන්නා පුද්ගලයා", bn: "সেবা গ্রহণকারী", pt: "Usuário", es: "Usuario",
        fr: "Usager", ru: "Посетитель", uk: "Відвідувач"
    }
};

function makeA2CityOfficeDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_city_office",
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
            speakerNames: a2CityOfficeSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2CityOfficeContext,
        translations,
        dialogueTranslations
    };
}

const japeakA2CityOfficeData = [

    makeA2CityOfficeDialogue(
        "a2_cityoffice_001",
        "窓口の場所を聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "転入の手続きをしたいのですが、どの窓口へ行けばいいですか。",
                target: "てんにゅうのてつづきをしたいのですが どのまどぐちへいけばいいですか",
                ruby: "<ruby>転入<rt>てんにゅう</rt></ruby>の<ruby>手続<rt>てつづ</rt></ruby>きをしたいのですが、どの<ruby>窓口<rt>まどぐち</rt></ruby>へ<ruby>行<rt>い</rt></ruby>けばいいですか。",
                romaji: "Tennyū no tetsuzuki o shitai no desu ga, dono madoguchi e ikeba ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "一階の市民課で受け付けています。",
                target: "いっかいのしみんかでうけつけています",
                ruby: "<ruby>一階<rt>いっかい</rt></ruby>の<ruby>市民課<rt>しみんか</rt></ruby>で<ruby>受<rt>う</rt></ruby>け<ruby>付<rt>つ</rt></ruby>けています。",
                romaji: "Ikkai no shiminka de uketsukete imasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "番号札を取る必要がありますか。",
                target: "ばんごうふだをとるひつようがありますか",
                ruby: "<ruby>番号札<rt>ばんごうふだ</rt></ruby>を<ruby>取<rt>と</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>がありますか。",
                romaji: "Bangōfuda o toru hitsuyō ga arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "はい。入口の機械で、住所変更を選んでください。",
                target: "はい いりぐちのきかいで じゅうしょへんこうをえらんでください",
                ruby: "はい。<ruby>入口<rt>いりぐち</rt></ruby>の<ruby>機械<rt>きかい</rt></ruby>で、<ruby>住所変更<rt>じゅうしょへんこう</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んでください。",
                romaji: "Hai. Iriguchi no kikai de, jūsho henkō o erande kudasai."
            }
        ],
        {
            ja: ["利用者：転入の手続きをしたいのですが、どの窓口へ行けばいいですか。", "役所の人：一階の市民課で受け付けています。", "利用者：番号札を取る必要がありますか。", "役所の人：はい。入口の機械で、住所変更を選んでください。"],
            en: ["Visitor: I would like to complete moving-in procedures. Which counter should I go to?", "City Office Staff: The citizen affairs section on the first floor handles that.", "Visitor: Do I need to take a number ticket?", "City Office Staff: Yes. Please choose address change on the machine near the entrance."],
            "zh-CN": ["办事的人：我想办理迁入手续，应该去哪个窗口？", "市役所人员：一楼的市民课受理。", "办事的人：需要取号码牌吗？", "市役所人员：需要。请在入口的机器上选择地址变更。"],
            "zh-TW": ["辦事的人：我想辦理遷入手續，應該去哪個窗口？", "市役所人員：一樓的市民課受理。", "辦事的人：需要取號碼牌嗎？", "市役所人員：需要。請在入口的機器上選擇地址變更。"],
            ko: ["이용자: 전입 절차를 하고 싶은데 어느 창구로 가면 되나요?", "시청 직원: 1층 시민과에서 접수하고 있습니다.", "이용자: 번호표를 뽑아야 하나요?", "시청 직원: 네. 입구의 기계에서 주소 변경을 선택해 주세요."],
            vi: ["Người sử dụng dịch vụ: Tôi muốn làm thủ tục chuyển đến, nên đi quầy nào ạ?", "Nhân viên văn phòng hành chính: Phòng công dân ở tầng một tiếp nhận việc đó.", "Người sử dụng dịch vụ: Tôi có cần lấy số thứ tự không ạ?", "Nhân viên văn phòng hành chính: Vâng. Xin hãy chọn thay đổi địa chỉ trên máy ở lối vào."],
            tl: ["Visitor: Gusto ko pong gawin ang moving-in procedure. Saang counter po ako pupunta?", "City office staff: Tinatanggap po iyon sa citizen affairs section sa first floor.", "Visitor: Kailangan po bang kumuha ng number ticket?", "City office staff: Oo. Sa machine sa entrance, piliin po ang address change."],
            id: ["Pengunjung: Saya ingin melakukan prosedur pindah masuk. Harus ke loket mana?", "Staf kantor kota: Itu dilayani di bagian warga di lantai satu.", "Pengunjung: Apakah perlu mengambil nomor antrean?", "Staf kantor kota: Ya. Pilih perubahan alamat pada mesin di pintu masuk."],
            th: ["ผู้ใช้บริการ: อยากทำขั้นตอนย้ายเข้าค่ะ/ครับ ควรไปช่องบริการไหนคะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: รับเรื่องที่แผนกประชาชนชั้นหนึ่งค่ะ/ครับ", "ผู้ใช้บริการ: ต้องรับบัตรคิวไหมคะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: ต้องค่ะ/ครับ กรุณาเลือกเปลี่ยนที่อยู่ที่เครื่องตรงทางเข้าค่ะ/ครับ"],
            my: ["လာရောက်သူ: ပြောင်းရွှေ့ဝင်ရောက်မှုလုပ်ငန်းစဉ် လုပ်ချင်ပါတယ်။ ဘယ်ကောင်တာကို သွားရမလဲ။", "မြို့ရုံးဝန်ထမ်း: ပထမထပ် citizen affairs section မှာ လက်ခံပါတယ်။", "လာရောက်သူ: နံပါတ်လက်မှတ် ယူဖို့ လိုပါသလား။", "မြို့ရုံးဝန်ထမ်း: လိုပါတယ်။ ဝင်ပေါက်နားက စက်မှာ address change ကို ရွေးပါ။"],
            km: ["អ្នកមកប្រើសេវា: ខ្ញុំចង់ធ្វើនីតិវិធីផ្លាស់ទីចូល តើគួរទៅកន្លែងណា?", "បុគ្គលិកសាលាក្រុង: ផ្នែកប្រជាពលរដ្ឋនៅជាន់ទីមួយទទួលបម្រើ។", "អ្នកមកប្រើសេវា: តើត្រូវយកលេខរង់ចាំទេ?", "បុគ្គលិកសាលាក្រុង: ត្រូវ។ សូមជ្រើសរើសការផ្លាស់ប្តូរអាសយដ្ឋាននៅម៉ាស៊ីនក្បែរច្រកចូល។"],
            ne: ["सेवाग्राही: म बसाइँसराइ दर्ता गर्न चाहन्छु। कुन counter मा जाने?", "नगर कार्यालयका कर्मचारी: पहिलो तलाको नागरिक शाखामा受付 हुन्छ।", "सेवाग्राही: number ticket लिनुपर्छ?", "नगर कार्यालयका कर्मचारी: हो। प्रवेशद्वारको मेसिनमा address change छान्नुहोस्।"],
            mn: ["Үйлчлүүлэгч: Нүүж ирсний бүртгэл хийлгэмээр байна. Аль цонх руу очих вэ?", "Захиргааны ажилтан: Нэгдүгээр давхрын иргэдийн хэлтэс хүлээн авдаг.", "Үйлчлүүлэгч: Дугаарын тасалбар авах хэрэгтэй юу?", "Захиргааны ажилтан: Тийм. Орцны машины дээр address change-г сонгоно уу."],
            si: ["සේවා ලබාගන්නා පුද්ගලයා: moving-in procedure එක කරන්න ඕනේ. කුමන counter එකට යන්නද?", "නගර කාර්යාල සේවකයා: පළමු මහලේ citizen affairs section එකේ受付 කරනවා.", "සේවා ලබාගන්නා පුද්ගලයා: number ticket එකක් ගන්න ඕනෙද?", "නගර කාර්යාල සේවකයා: ඔව්. entrance එකේ machine එකෙන් address change තෝරන්න."],
            bn: ["সেবা গ্রহণকারী: moving-in procedure করতে চাই। কোন counter-এ যাব?", "সিটি অফিস কর্মী: প্রথম তলার citizen affairs section-এ受付 হয়।", "সেবা গ্রহণকারী: number ticket নিতে হবে?", "সিটি অফিস কর্মী: হ্যাঁ। প্রবেশপথের machine-এ address change নির্বাচন করুন।"],
            pt: ["Usuário: Gostaria de fazer o procedimento de mudança para esta cidade. A qual balcão devo ir?", "Funcionário da prefeitura: Isso é atendido na seção de cidadãos, no primeiro andar.", "Usuário: Preciso pegar uma senha?", "Funcionário da prefeitura: Sim. Na máquina da entrada, escolha mudança de endereço."],
            es: ["Usuario: Quisiera hacer el trámite de mudanza. ¿A qué ventanilla debo ir?", "Personal del ayuntamiento: Se atiende en la sección de ciudadanos del primer piso.", "Usuario: ¿Necesito sacar un número?", "Personal del ayuntamiento: Sí. En la máquina de la entrada, elija cambio de dirección."],
            fr: ["Usager : Je voudrais faire la déclaration d’emménagement. À quel guichet dois-je aller ?", "Personnel de la mairie : C’est pris en charge au service des citoyens, au premier étage.", "Usager : Dois-je prendre un ticket numéroté ?", "Personnel de la mairie : Oui. Sur la machine à l’entrée, choisissez changement d’adresse."],
            ru: ["Посетитель: Я хотел бы оформить регистрацию после переезда. К какому окну идти?", "Сотрудник мэрии: Это принимают в отделе по делам граждан на первом этаже.", "Посетитель: Нужно взять номерок?", "Сотрудник мэрии: Да. На аппарате у входа выберите изменение адреса."],
            uk: ["Відвідувач: Я хотів би оформити реєстрацію після переїзду. До якого вікна йти?", "Працівник мерії: Це приймають у відділі громадян на першому поверсі.", "Відвідувач: Потрібно взяти номерок?", "Працівник мерії: Так. На апараті біля входу виберіть зміну адреси."]
        }
    ),

    makeA2CityOfficeDialogue(
        "a2_cityoffice_002",
        "転入届を出す",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "他の市から引っ越してきたので、転入届を出したいです。",
                target: "ほかのしからひっこしてきたので てんにゅうとどけをだしたいです",
                ruby: "<ruby>他<rt>ほか</rt></ruby>の<ruby>市<rt>し</rt></ruby>から<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>してきたので、<ruby>転入届<rt>てんにゅうとどけ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>したいです。",
                romaji: "Hoka no shi kara hikkoshite kita node, tennyū todoke o dashitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "前の市でもらった転出証明書はありますか。",
                target: "まえのしでもらったてんしゅつしょうめいしょはありますか",
                ruby: "<ruby>前<rt>まえ</rt></ruby>の<ruby>市<rt>し</rt></ruby>でもらった<ruby>転出証明書<rt>てんしゅつしょうめいしょ</rt></ruby>はありますか。",
                romaji: "Mae no shi de moratta tenshutsu shōmeisho wa arimasu ka."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "はい、この封筒の中に入っています。",
                target: "はい このふうとうのなかにはいっています",
                ruby: "はい、この<ruby>封筒<rt>ふうとう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っています。",
                romaji: "Hai, kono fūtō no naka ni haitte imasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "確認しますので、申請書に新しい住所を書いてください。",
                target: "かくにんしますので しんせいしょにあたらしいじゅうしょをかいてください",
                ruby: "<ruby>確認<rt>かくにん</rt></ruby>しますので、<ruby>申請書<rt>しんせいしょ</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しい<ruby>住所<rt>じゅうしょ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Kakunin shimasu node, shinseisho ni atarashii jūsho o kaite kudasai."
            }
        ],
        {
            ja: ["利用者：他の市から引っ越してきたので、転入届を出したいです。", "役所の人：前の市でもらった転出証明書はありますか。", "利用者：はい、この封筒の中に入っています。", "役所の人：確認しますので、申請書に新しい住所を書いてください。"],
            en: ["Visitor: I moved here from another city, so I would like to submit a moving-in notification.", "City Office Staff: Do you have the moving-out certificate from your previous city?", "Visitor: Yes, it is inside this envelope.", "City Office Staff: I will check it, so please write your new address on the application form."],
            "zh-CN": ["办事的人：我从别的市搬来，所以想提交迁入届。", "市役所人员：您有以前城市给的迁出证明书吗？", "办事的人：有，在这个信封里。", "市役所人员：我来确认，请在申请书上写新地址。"],
            "zh-TW": ["辦事的人：我從別的市搬來，所以想提交遷入屆。", "市役所人員：您有以前城市給的遷出證明書嗎？", "辦事的人：有，在這個信封裡。", "市役所人員：我來確認，請在申請書上寫新地址。"],
            ko: ["이용자: 다른 시에서 이사 왔기 때문에 전입신고를 하고 싶습니다.", "시청 직원: 이전 시에서 받은 전출증명서는 있나요?", "이용자: 네, 이 봉투 안에 들어 있습니다.", "시청 직원: 확인하겠습니다. 신청서에 새 주소를 적어 주세요."],
            vi: ["Người sử dụng dịch vụ: Tôi chuyển đến từ thành phố khác nên muốn nộp giấy chuyển đến.", "Nhân viên văn phòng hành chính: Bạn có giấy chứng nhận chuyển đi từ thành phố trước không?", "Người sử dụng dịch vụ: Vâng, nó ở trong phong bì này.", "Nhân viên văn phòng hành chính: Tôi sẽ kiểm tra, nên xin hãy viết địa chỉ mới vào đơn."],
            tl: ["Visitor: Lumipat po ako mula sa ibang city, kaya gusto kong magsumite ng moving-in notification.", "City office staff: May moving-out certificate po ba kayo mula sa dating city?", "Visitor: Opo, nasa loob po ng envelope na ito.", "City office staff: Iche-check ko po, kaya pakisulat ang bagong address sa application form."],
            id: ["Pengunjung: Saya pindah dari kota lain, jadi ingin menyerahkan laporan pindah masuk.", "Staf kantor kota: Apakah ada surat pindah keluar dari kota sebelumnya?", "Pengunjung: Ya, ada di dalam amplop ini.", "Staf kantor kota: Saya akan memeriksanya, jadi tulis alamat baru di formulir permohonan."],
            th: ["ผู้ใช้บริการ: ย้ายมาจากเมืองอื่น จึงอยากยื่นใบแจ้งย้ายเข้าค่ะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: มีใบรับรองการย้ายออกจากเมืองก่อนหน้าหรือไม่คะ/ครับ", "ผู้ใช้บริการ: มีค่ะ/ครับ อยู่ในซองนี้ค่ะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: จะตรวจสอบให้ กรุณาเขียนที่อยู่ใหม่ในแบบฟอร์มค่ะ/ครับ"],
            my: ["လာရောက်သူ: တခြားမြို့ကနေ ပြောင်းလာလို့ moving-in notification တင်ချင်ပါတယ်။", "မြို့ရုံးဝန်ထမ်း: အရင်မြို့ကနေ ရခဲ့တဲ့ moving-out certificate ရှိပါသလား။", "လာရောက်သူ: ရှိပါတယ်၊ ဒီစာအိတ်ထဲမှာ ပါပါတယ်။", "မြို့ရုံးဝန်ထမ်း: စစ်ဆေးပါမယ်၊ application form မှာ လိပ်စာအသစ်ကို ရေးပေးပါ။"],
            km: ["អ្នកមកប្រើសេវា: ខ្ញុំបានផ្លាស់មកពីទីក្រុងផ្សេង ដូច្នេះចង់ដាក់សេចក្តីជូនដំណឹងផ្លាស់ទីចូល។", "បុគ្គលិកសាលាក្រុង: តើមានលិខិតបញ្ជាក់ផ្លាស់ចេញពីទីក្រុងមុនទេ?", "អ្នកមកប្រើសេវា: មាន នៅក្នុងស្រោមសំបុត្រនេះ។", "បុគ្គលិកសាលាក្រុង: ខ្ញុំនឹងពិនិត្យ ដូច្នេះសូមសរសេរអាសយដ្ឋានថ្មីលើពាក្យស្នើសុំ។"],
            ne: ["सेवाग्राही: म अर्को शहरबाट सरेर आएकोले moving-in notification दिन चाहन्छु।", "नगर कार्यालयका कर्मचारी: पहिलेको शहरबाट पाएको moving-out certificate छ?", "सेवाग्राही: छ, यो खामभित्र छ।", "नगर कार्यालयका कर्मचारी:確認 गर्छु, आवेदन फाराममा नयाँ ठेगाना लेख्नुहोस्।"],
            mn: ["Үйлчлүүлэгч: Би өөр хотоос нүүж ирсэн тул moving-in notification өгөх гэсэн юм.", "Захиргааны ажилтан: Өмнөх хотоос авсан moving-out certificate байгаа юу?", "Үйлчлүүлэгч: Тийм, энэ дугтуйн дотор байгаа.", "Захиргааны ажилтан: Шалгана. Өргөдлийн маягт дээр шинэ хаягаа бичнэ үү."],
            si: ["සේවා ලබාගන්නා පුද්ගලයා: වෙනත් city එකකින් මෙහි පදිංචියට ආ නිසා moving-in notification එක දාන්න ඕනේ.", "නගර කාර්යාල සේවකයා: කලින් city එකෙන් ලැබුණු moving-out certificate එක තියෙනවද?", "සේවා ලබාගන්නා පුද්ගලයා: ඔව්, මේ envelope එක ඇතුළේ තියෙනවා.", "නගර කාර්යාල සේවකයා:確認 කරන්නම්, application form එකේ නව address එක ලියන්න."],
            bn: ["সেবা গ্রহণকারী: আমি অন্য শহর থেকে এসেছি, তাই moving-in notification জমা দিতে চাই।", "সিটি অফিস কর্মী: আগের শহর থেকে পাওয়া moving-out certificate আছে?", "সেবা গ্রহণকারী: হ্যাঁ, এই envelope-এর ভেতরে আছে।", "সিটি অফিস কর্মী:確認 করব, আবেদন ফর্মে নতুন ঠিকানা লিখুন।"],
            pt: ["Usuário: Mudei-me de outra cidade, então gostaria de entregar a declaração de entrada.", "Funcionário da prefeitura: Você tem o certificado de saída da cidade anterior?", "Usuário: Sim, está dentro deste envelope.", "Funcionário da prefeitura: Vou verificar, então escreva seu novo endereço no formulário."],
            es: ["Usuario: Me mudé desde otra ciudad, así que quiero presentar la notificación de entrada.", "Personal del ayuntamiento: ¿Tiene el certificado de salida de la ciudad anterior?", "Usuario: Sí, está dentro de este sobre.", "Personal del ayuntamiento: Lo revisaré, así que escriba su nueva dirección en el formulario."],
            fr: ["Usager : J’ai déménagé depuis une autre ville, donc je voudrais déposer une déclaration d’emménagement.", "Personnel de la mairie : Avez-vous le certificat de sortie de votre ancienne ville ?", "Usager : Oui, il est dans cette enveloppe.", "Personnel de la mairie : Je vais vérifier, veuillez écrire votre nouvelle adresse sur le formulaire."],
            ru: ["Посетитель: Я переехал из другого города и хочу подать уведомление о въезде.", "Сотрудник мэрии: У вас есть справка о выезде из предыдущего города?", "Посетитель: Да, она в этом конверте.", "Сотрудник мэрии: Я проверю, поэтому напишите новый адрес в заявлении."],
            uk: ["Відвідувач: Я переїхав з іншого міста і хочу подати повідомлення про в’їзд.", "Працівник мерії: У вас є довідка про виїзд з попереднього міста?", "Відвідувач: Так, вона в цьому конверті.", "Працівник мерії: Я перевірю, тому напишіть нову адресу в заяві."]
        }
    ),

    makeA2CityOfficeDialogue(
        "a2_cityoffice_003",
        "住民票を取る",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "住民票の写しを一通取りたいです。",
                target: "じゅうみんひょうのうつしをいっつうとりたいです",
                ruby: "<ruby>住民票<rt>じゅうみんひょう</rt></ruby>の<ruby>写<rt>うつ</rt></ruby>しを<ruby>一通<rt>いっつう</rt></ruby><ruby>取<rt>と</rt></ruby>りたいです。",
                romaji: "Jūminhyō no utsushi o ittsū toritai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "本人確認書類を見せてください。",
                target: "ほんにんかくにんしょるいをみせてください",
                ruby: "<ruby>本人確認書類<rt>ほんにんかくにんしょるい</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。",
                romaji: "Honnin kakunin shorui o misete kudasai."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "在留カードで大丈夫ですか。",
                target: "ざいりゅうかーどでだいじょうぶですか",
                ruby: "<ruby>在留<rt>ざいりゅう</rt></ruby>カードで<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Zairyū kādo de daijōbu desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "はい。続柄とマイナンバーを載せるか選んでください。",
                target: "はい つづきがらとまいなんばーをのせるかえらんでください",
                ruby: "はい。<ruby>続柄<rt>つづきがら</rt></ruby>とマイナンバーを<ruby>載<rt>の</rt></ruby>せるか<ruby>選<rt>えら</rt></ruby>んでください。",
                romaji: "Hai. Tsuzukigara to mai nanbā o noseru ka erande kudasai."
            }
        ],
        {
            ja: ["利用者：住民票の写しを一通取りたいです。", "役所の人：本人確認書類を見せてください。", "利用者：在留カードで大丈夫ですか。", "役所の人：はい。続柄とマイナンバーを載せるか選んでください。"],
            en: ["Visitor: I would like to get one copy of my residence certificate.", "City Office Staff: Please show an identity verification document.", "Visitor: Is my residence card okay?", "City Office Staff: Yes. Please choose whether to include relationship information and My Number."],
            "zh-CN": ["办事的人：我想取一份住民票复印件。", "市役所人员：请出示本人确认文件。", "办事的人：在留卡可以吗？", "市役所人员：可以。请确认是否要记载关系和个人编号。"],
            "zh-TW": ["辦事的人：我想取一份住民票副本。", "市役所人員：請出示本人確認文件。", "辦事的人：在留卡可以嗎？", "市役所人員：可以。請選擇是否要記載關係和個人編號。"],
            ko: ["이용자: 주민표 사본을 한 통 받고 싶습니다.", "시청 직원: 본인 확인 서류를 보여 주세요.", "이용자: 재류카드로 괜찮나요?", "시청 직원: 네. 관계와 마이넘버를 기재할지 선택해 주세요."],
            vi: ["Người sử dụng dịch vụ: Tôi muốn lấy một bản sao giấy cư trú.", "Nhân viên văn phòng hành chính: Xin hãy cho xem giấy tờ xác nhận danh tính.", "Người sử dụng dịch vụ: Thẻ cư trú có được không ạ?", "Nhân viên văn phòng hành chính: Vâng. Xin hãy chọn có ghi quan hệ gia đình và My Number hay không."],
            tl: ["Visitor: Gusto ko pong kumuha ng isang copy ng residence certificate.", "City office staff: Pakita po ang identity verification document.", "Visitor: Okay po ba ang residence card?", "City office staff: Oo. Piliin po kung ilalagay ang relationship information at My Number."],
            id: ["Pengunjung: Saya ingin mengambil satu salinan surat domisili.", "Staf kantor kota: Tunjukkan dokumen identifikasi.", "Pengunjung: Apakah kartu penduduk saya bisa?", "Staf kantor kota: Ya. Pilih apakah ingin mencantumkan hubungan keluarga dan My Number."],
            th: ["ผู้ใช้บริการ: อยากขอใบ住民票หนึ่งฉบับค่ะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: กรุณาแสดงเอกสารยืนยันตัวตนค่ะ/ครับ", "ผู้ใช้บริการ: ใช้บัตรไซริวได้ไหมคะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: ได้ค่ะ/ครับ กรุณาเลือกว่าจะใส่ความสัมพันธ์ในครอบครัวและ My Number หรือไม่ค่ะ/ครับ"],
            my: ["လာရောက်သူ: residence certificate မိတ္တူ တစ်စောင်ယူချင်ပါတယ်။", "မြို့ရုံးဝန်ထမ်း: identity verification document ကို ပြပေးပါ။", "လာရောက်သူ: residence card နဲ့ ရပါသလား။", "မြို့ရုံးဝန်ထမ်း: ရပါတယ်။ relationship information နဲ့ My Number ကို ထည့်မထည့် ရွေးပေးပါ။"],
            km: ["អ្នកមកប្រើសេវា: ខ្ញុំចង់យកច្បាប់ចម្លង住民票មួយច្បាប់។", "បុគ្គលិកសាលាក្រុង: សូមបង្ហាញឯកសារបញ្ជាក់អត្តសញ្ញាណ។", "អ្នកមកប្រើសេវា: តើប័ណ្ណស្នាក់នៅបានទេ?", "បុគ្គលិកសាលាក្រុង: បាន។ សូមជ្រើសថាតើចង់បញ្ចូលព័ត៌មានទំនាក់ទំនងគ្រួសារ និង My Number ឬអត់។"],
            ne: ["सेवाग्राही: residence certificate को एक प्रति लिन चाहन्छु।", "नगर कार्यालयका कर्मचारी: identity verification document देखाउनुहोस्।", "सेवाग्राही: residence card भए हुन्छ?", "नगर कार्यालयका कर्मचारी: हुन्छ। relationship information र My Number राख्ने कि नराख्ने छान्नुहोस्।"],
            mn: ["Үйлчлүүлэгч: Оршин суугчийн тодорхойлолтын нэг хувь авмаар байна.", "Захиргааны ажилтан: Иргэний үнэмлэхийн баримтаа үзүүлнэ үү.", "Үйлчлүүлэгч: Оршин суух карт байж болох уу?", "Захиргааны ажилтан: Тийм. Харилцааны мэдээлэл болон My Number-г оруулах эсэхээ сонгоно уу."],
            si: ["සේවා ලබාගන්නා පුද්ගලයා: residence certificate එකේ copy එකක් ගන්න ඕනේ.", "නගර කාර්යාල සේවකයා: identity verification document එක පෙන්වන්න.", "සේවා ලබාගන්නා පුද්ගලයා: residence card එක හරිද?", "නගර කාර්යාල සේවකයා: ඔව්. relationship information සහ My Number දාන්නද නැද්ද තෝරන්න."],
            bn: ["সেবা গ্রহণকারী: residence certificate-এর একটি copy নিতে চাই।", "সিটি অফিস কর্মী: identity verification document দেখান।", "সেবা গ্রহণকারী: residence card হলে হবে?", "সিটি অফিস কর্মী: হ্যাঁ। relationship information এবং My Number যুক্ত করবেন কি না নির্বাচন করুন।"],
            pt: ["Usuário: Gostaria de obter uma cópia do certificado de residência.", "Funcionário da prefeitura: Mostre um documento de identificação.", "Usuário: O cartão de residência serve?", "Funcionário da prefeitura: Sim. Escolha se deseja incluir relação familiar e My Number."],
            es: ["Usuario: Quisiera obtener una copia del certificado de residencia.", "Personal del ayuntamiento: Muestre un documento de identificación.", "Usuario: ¿Sirve la tarjeta de residencia?", "Personal del ayuntamiento: Sí. Elija si quiere incluir la relación familiar y el My Number."],
            fr: ["Usager : Je voudrais obtenir une copie du certificat de résidence.", "Personnel de la mairie : Veuillez montrer un document d’identité.", "Usager : La carte de résidence convient-elle ?", "Personnel de la mairie : Oui. Choisissez si vous voulez inclure la relation familiale et le My Number."],
            ru: ["Посетитель: Я хотел бы получить одну копию справки о проживании.", "Сотрудник мэрии: Покажите документ, удостоверяющий личность.", "Посетитель: Подойдёт карта резидента?", "Сотрудник мэрии: Да. Выберите, указывать ли семейные отношения и My Number."],
            uk: ["Відвідувач: Я хотів би отримати одну копію довідки про проживання.", "Працівник мерії: Покажіть документ, що посвідчує особу.", "Відвідувач: Підійде картка резидента?", "Працівник мерії: Так. Виберіть, чи вказувати сімейні відносини та My Number."]
        }
    ),

    makeA2CityOfficeDialogue(
        "a2_cityoffice_004",
        "健康保険について聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "国民健康保険に入る必要があるか知りたいです。",
                target: "こくみんけんこうほけんにはいるひつようがあるかしりたいです",
                ruby: "<ruby>国民健康保険<rt>こくみんけんこうほけん</rt></ruby>に<ruby>入<rt>はい</rt></ruby>る<ruby>必要<rt>ひつよう</rt></ruby>があるか<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Kokumin kenkō hoken ni hairu hitsuyō ga aru ka shiritai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "会社の健康保険に入っていない場合は、加入が必要です。",
                target: "かいしゃのけんこうほけんにはいっていないばあいは かにゅうがひつようです",
                ruby: "<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>健康保険<rt>けんこうほけん</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っていない<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>加入<rt>かにゅう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。",
                romaji: "Kaisha no kenkō hoken ni haitte inai baai wa, kanyū ga hitsuyō desu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "アルバイト先では保険に入っていません。",
                target: "あるばいとさきではほけんにはいっていません",
                ruby: "アルバイト<ruby>先<rt>さき</rt></ruby>では<ruby>保険<rt>ほけん</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っていません。",
                romaji: "Arubaito-saki de wa hoken ni haitte imasen."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "では、在留カードとパスポートを持って、保険年金課へ行ってください。",
                target: "では ざいりゅうかーどとぱすぽーとをもって ほけんねんきんかへいってください",
                ruby: "では、<ruby>在留<rt>ざいりゅう</rt></ruby>カードとパスポートを<ruby>持<rt>も</rt></ruby>って、<ruby>保険年金課<rt>ほけんねんきんか</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってください。",
                romaji: "Dewa, zairyū kādo to pasupōto o motte, hoken nenkin ka e itte kudasai."
            }
        ],
        {
            ja: ["利用者：国民健康保険に入る必要があるか知りたいです。", "役所の人：会社の健康保険に入っていない場合は、加入が必要です。", "利用者：アルバイト先では保険に入っていません。", "役所の人：では、在留カードとパスポートを持って、保険年金課へ行ってください。"],
            en: ["Visitor: I would like to know whether I need to join National Health Insurance.", "City Office Staff: If you are not enrolled in company health insurance, you need to join.", "Visitor: I am not enrolled in insurance at my part-time job.", "City Office Staff: Then please take your residence card and passport to the insurance and pension section."],
            "zh-CN": ["办事的人：我想知道是否需要加入国民健康保险。", "市役所人员：如果没有加入公司的健康保险，就需要加入。", "办事的人：我的打工单位没有给我加入保险。", "市役所人员：那么，请带在留卡和护照去保险年金课。"],
            "zh-TW": ["辦事的人：我想知道是否需要加入國民健康保險。", "市役所人員：如果沒有加入公司的健康保險，就需要加入。", "辦事的人：我的打工單位沒有給我加入保險。", "市役所人員：那麼，請帶在留卡和護照去保險年金課。"],
            ko: ["이용자: 국민건강보험에 가입해야 하는지 알고 싶습니다.", "시청 직원: 회사 건강보험에 가입하지 않은 경우에는 가입이 필요합니다.", "이용자: 아르바이트하는 곳에서는 보험에 가입되어 있지 않습니다.", "시청 직원: 그럼 재류카드와 여권을 가지고 보험연금과로 가 주세요."],
            vi: ["Người sử dụng dịch vụ: Tôi muốn biết có cần tham gia Bảo hiểm Y tế Quốc dân không.", "Nhân viên văn phòng hành chính: Nếu bạn không tham gia bảo hiểm y tế của công ty thì cần tham gia.", "Người sử dụng dịch vụ: Ở nơi làm thêm, tôi không được tham gia bảo hiểm.", "Nhân viên văn phòng hành chính: Vậy hãy mang thẻ cư trú và hộ chiếu đến phòng bảo hiểm và lương hưu."],
            tl: ["Visitor: Gusto kong malaman kung kailangan kong sumali sa National Health Insurance.", "City office staff: Kung hindi po kayo naka-enroll sa company health insurance, kailangan pong sumali.", "Visitor: Hindi po ako naka-enroll sa insurance sa part-time job ko.", "City office staff: Kung ganoon, dalhin po ang residence card at passport sa insurance and pension section."],
            id: ["Pengunjung: Saya ingin tahu apakah perlu masuk Asuransi Kesehatan Nasional.", "Staf kantor kota: Jika Anda tidak masuk asuransi kesehatan perusahaan, Anda perlu mendaftar.", "Pengunjung: Di tempat kerja paruh waktu, saya tidak masuk asuransi.", "Staf kantor kota: Kalau begitu, bawa kartu penduduk dan paspor ke bagian asuransi dan pensiun."],
            th: ["ผู้ใช้บริการ: อยากทราบว่าจำเป็นต้องเข้าประกันสุขภาพแห่งชาติไหมคะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: หากไม่ได้เข้าประกันสุขภาพของบริษัท จำเป็นต้องสมัครค่ะ/ครับ", "ผู้ใช้บริการ: ที่งานพาร์ตไทม์ไม่ได้เข้าประกันค่ะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: ถ้าอย่างนั้น กรุณานำบัตรไซริวและพาสปอร์ตไปที่แผนกประกันและบำนาญค่ะ/ครับ"],
            my: ["လာရောက်သူ: National Health Insurance ဝင်ဖို့ လိုမလို သိချင်ပါတယ်။", "မြို့ရုံးဝန်ထမ်း: ကုမ္ပဏီ health insurance မဝင်ထားရင် ဝင်ဖို့လိုပါတယ်။", "လာရောက်သူ: part-time အလုပ်မှာ insurance မဝင်ထားပါဘူး။", "မြို့ရုံးဝန်ထမ်း: ဒါဆို residence card နဲ့ passport ကို ယူပြီး insurance and pension section ကို သွားပါ။"],
            km: ["អ្នកមកប្រើសេវា: ខ្ញុំចង់ដឹងថាតើត្រូវចូលធានារ៉ាប់រងសុខភាពជាតិឬអត់។", "បុគ្គលិកសាលាក្រុង: ប្រសិនបើមិនមានធានារ៉ាប់រងសុខភាពក្រុមហ៊ុន ត្រូវចូលរួម។", "អ្នកមកប្រើសេវា: កន្លែងធ្វើការក្រៅម៉ោងរបស់ខ្ញុំមិនមានធានារ៉ាប់រងទេ។", "បុគ្គលិកសាលាក្រុង: ដូច្នេះ សូមយកប័ណ្ណស្នាក់នៅ និងលិខិតឆ្លងដែនទៅផ្នែកធានារ៉ាប់រង និងប្រាក់សោធន។"],
            ne: ["सेवाग्राही: National Health Insurance मा बस्नुपर्छ कि पर्दैन जान्न चाहन्छु।", "नगर कार्यालयका कर्मचारी: कम्पनीको health insurance मा हुनुहुन्न भने,加入 आवश्यक छ।", "सेवाग्राही: part-time काममा insurance छैन।", "नगर कार्यालयका कर्मचारी: त्यसो भए residence card र passport लिएर insurance and pension section मा जानुहोस्।"],
            mn: ["Үйлчлүүлэгч: Үндэсний эрүүл мэндийн даатгалд орох хэрэгтэй эсэхийг мэдмээр байна.", "Захиргааны ажилтан: Компанийн эрүүл мэндийн даатгалд ороогүй бол бүртгүүлэх шаардлагатай.", "Үйлчлүүлэгч: Part-time ажил дээрээ даатгалд ороогүй.", "Захиргааны ажилтан: Тэгвэл оршин суух карт, паспортоо аваад даатгал, тэтгэврийн хэлтэс рүү очно уу."],
            si: ["සේවා ලබාගන්නා පුද්ගලයා: National Health Insurance එකට ඇතුල් වෙන්න ඕනෙද කියලා දැනගන්න ඕනේ.", "නගර කාර්යාල සේවකයා: company health insurance එකකට ඇතුල් වෙලා නැත්නම්, ඇතුල් වීම අවශ්‍යයි.", "සේවා ලබාගන්නා පුද්ගලයා: part-time job එකේ insurance එකක් නැහැ.", "නගර කාර්යාල සේවකයා: එහෙනම් residence card සහ passport එක අරගෙන insurance and pension section එකට යන්න."],
            bn: ["সেবা গ্রহণকারী: National Health Insurance-এ যোগ দিতে হবে কি না জানতে চাই।", "সিটি অফিস কর্মী: কোম্পানির health insurance-এ না থাকলে যোগ দেওয়া দরকার।", "সেবা গ্রহণকারী: part-time job-এ insurance নেই।", "সিটি অফিস কর্মী: তাহলে residence card এবং passport নিয়ে insurance and pension section-এ যান।"],
            pt: ["Usuário: Gostaria de saber se preciso entrar no Seguro Nacional de Saúde.", "Funcionário da prefeitura: Se você não está no seguro de saúde da empresa, precisa se inscrever.", "Usuário: No meu trabalho de meio período, não estou no seguro.", "Funcionário da prefeitura: Então leve seu cartão de residência e passaporte à seção de seguro e pensão."],
            es: ["Usuario: Quisiera saber si necesito inscribirme en el Seguro Nacional de Salud.", "Personal del ayuntamiento: Si no está en el seguro médico de la empresa, necesita inscribirse.", "Usuario: En mi trabajo de medio tiempo no estoy en ningún seguro.", "Personal del ayuntamiento: Entonces lleve su tarjeta de residencia y pasaporte a la sección de seguro y pensión."],
            fr: ["Usager : Je voudrais savoir si je dois adhérer à l’assurance maladie nationale.", "Personnel de la mairie : Si vous n’êtes pas couvert par l’assurance maladie de l’entreprise, l’inscription est nécessaire.", "Usager : Dans mon travail à temps partiel, je ne suis pas assuré.", "Personnel de la mairie : Alors apportez votre carte de résidence et votre passeport au service assurance et pension."],
            ru: ["Посетитель: Я хотел бы узнать, нужно ли мне вступать в Национальную медицинскую страховку.", "Сотрудник мэрии: Если вы не включены в медицинскую страховку компании, нужно зарегистрироваться.", "Посетитель: На подработке я не включён в страховку.", "Сотрудник мэрии: Тогда возьмите карту резидента и паспорт и идите в отдел страхования и пенсий."],
            uk: ["Відвідувач: Я хотів би дізнатися, чи потрібно мені вступати до Національного медичного страхування.", "Працівник мерії: Якщо ви не маєте медичного страхування від компанії, потрібно зареєструватися.", "Відвідувач: На підробітку я не маю страхування.", "Працівник мерії: Тоді візьміть картку резидента та паспорт і йдіть до відділу страхування та пенсій."]
        }
    ),

    makeA2CityOfficeDialogue(
        "a2_cityoffice_005",
        "税金の納付書について聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "家に税金の納付書が届きましたが、内容がよくわかりません。",
                target: "いえにぜいきんののうふしょがとどきましたが ないようがよくわかりません",
                ruby: "<ruby>家<rt>いえ</rt></ruby>に<ruby>税金<rt>ぜいきん</rt></ruby>の<ruby>納付書<rt>のうふしょ</rt></ruby>が<ruby>届<rt>とど</rt></ruby>きましたが、<ruby>内容<rt>ないよう</rt></ruby>がよくわかりません。",
                romaji: "Ie ni zeikin no nōfusho ga todokimashita ga, naiyō ga yoku wakarimasen."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "こちらで確認しますので、封筒ごと見せてください。",
                target: "こちらでかくにんしますので ふうとうごとみせてください",
                ruby: "こちらで<ruby>確認<rt>かくにん</rt></ruby>しますので、<ruby>封筒<rt>ふうとう</rt></ruby>ごと<ruby>見<rt>み</rt></ruby>せてください。",
                romaji: "Kochira de kakunin shimasu node, fūtō goto misete kudasai."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "期限までに払えない場合は、相談できますか。",
                target: "きげんまでにはらえないばあいは そうだんできますか",
                ruby: "<ruby>期限<rt>きげん</rt></ruby>までに<ruby>払<rt>はら</rt></ruby>えない<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>相談<rt>そうだん</rt></ruby>できますか。",
                romaji: "Kigen made ni haraenai baai wa, sōdan dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "はい。分割で払えるか、担当者と相談できます。",
                target: "はい ぶんかつではらえるか たんとうしゃとそうだんできます",
                ruby: "はい。<ruby>分割<rt>ぶんかつ</rt></ruby>で<ruby>払<rt>はら</rt></ruby>えるか、<ruby>担当者<rt>たんとうしゃ</rt></ruby>と<ruby>相談<rt>そうだん</rt></ruby>できます。",
                romaji: "Hai. Bunkatsu de haraeru ka, tantōsha to sōdan dekimasu."
            }
        ],
        {
            ja: ["利用者：家に税金の納付書が届きましたが、内容がよくわかりません。", "役所の人：こちらで確認しますので、封筒ごと見せてください。", "利用者：期限までに払えない場合は、相談できますか。", "役所の人：はい。分割で払えるか、担当者と相談できます。"],
            en: ["Visitor: A tax payment notice arrived at my home, but I do not understand the contents well.", "City Office Staff: I will check it here, so please show me the whole envelope.", "Visitor: If I cannot pay by the deadline, can I consult someone?", "City Office Staff: Yes. You can consult the person in charge about whether payment in installments is possible."],
            "zh-CN": ["办事的人：家里收到了税金缴纳书，但我不太明白内容。", "市役所人员：我来确认，请把整个信封给我看。", "办事的人：如果不能在期限前支付，可以咨询吗？", "市役所人员：可以。可以和负责人咨询是否能分期支付。"],
            "zh-TW": ["辦事的人：家裡收到了稅金繳納書，但我不太明白內容。", "市役所人員：我來確認，請把整個信封給我看。", "辦事的人：如果不能在期限前支付，可以諮詢嗎？", "市役所人員：可以。可以和負責人諮詢是否能分期支付。"],
            ko: ["이용자: 집에 세금 납부서가 왔는데 내용을 잘 모르겠습니다.", "시청 직원: 여기서 확인하겠습니다. 봉투째로 보여 주세요.", "이용자: 기한까지 낼 수 없는 경우 상담할 수 있나요?", "시청 직원: 네. 분할 납부가 가능한지 담당자와 상담할 수 있습니다."],
            vi: ["Người sử dụng dịch vụ: Giấy nộp thuế đã gửi đến nhà tôi, nhưng tôi không hiểu rõ nội dung.", "Nhân viên văn phòng hành chính: Tôi sẽ kiểm tra ở đây, nên xin hãy cho xem cả phong bì.", "Người sử dụng dịch vụ: Nếu tôi không thể trả trước hạn, tôi có thể相談 không ạ?", "Nhân viên văn phòng hành chính: Vâng. Bạn có thể相談 với người phụ trách xem có trả góp được không."],
            tl: ["Visitor: May dumating pong tax payment notice sa bahay, pero hindi ko masyadong naiintindihan ang laman.", "City office staff: Iche-check ko po rito, kaya pakita po ang buong envelope.", "Visitor: Kung hindi ko po mabayaran bago ang deadline, puwede po bang kumonsulta?", "City office staff: Oo. Puwede po kayong kumonsulta sa person in charge kung puwedeng installment."],
            id: ["Pengunjung: Surat pembayaran pajak datang ke rumah saya, tetapi saya kurang memahami isinya.", "Staf kantor kota: Saya akan memeriksanya di sini, jadi tunjukkan bersama amplopnya.", "Pengunjung: Jika saya tidak bisa membayar sampai batas waktu, apakah bisa konsultasi?", "Staf kantor kota: Ya. Anda bisa berkonsultasi dengan petugas apakah bisa membayar secara cicilan."],
            th: ["ผู้ใช้บริการ: มีใบชำระภาษีส่งมาที่บ้าน แต่ไม่ค่อยเข้าใจเนื้อหาค่ะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: จะตรวจสอบให้ กรุณาให้ดูทั้งซองค่ะ/ครับ", "ผู้ใช้บริการ: ถ้าจ่ายไม่ทันกำหนด สามารถปรึกษาได้ไหมคะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: ได้ค่ะ/ครับ สามารถปรึกษาผู้รับผิดชอบเรื่องการแบ่งจ่ายได้ค่ะ/ครับ"],
            my: ["လာရောက်သူ: အိမ်ကို tax payment notice ရောက်လာပေမယ့် အကြောင်းအရာကို သိပ်နားမလည်ပါဘူး။", "မြို့ရုံးဝန်ထမ်း: ဒီမှာ စစ်ဆေးပါမယ်၊ စာအိတ်ပါအကုန် ပြပေးပါ။", "လာရောက်သူ: သတ်မှတ်နေ့အထိ မပေးနိုင်ရင် တိုင်ပင်လို့ရပါသလား။", "မြို့ရုံးဝန်ထမ်း: ရပါတယ်။ installment နဲ့ ပေးလို့ရမရ တာဝန်ခံနဲ့ တိုင်ပင်နိုင်ပါတယ်။"],
            km: ["អ្នកមកប្រើសេវា: មានលិខិតបង់ពន្ធមកដល់ផ្ទះ ប៉ុន្តែខ្ញុំមិនយល់ខ្លឹមសារល្អទេ។", "បុគ្គលិកសាលាក្រុង: ខ្ញុំនឹងពិនិត្យនៅទីនេះ សូមបង្ហាញទាំងស្រោមសំបុត្រ។", "អ្នកមកប្រើសេវា: ប្រសិនបើមិនអាចបង់មុនថ្ងៃកំណត់ តើអាចពិគ្រោះបានទេ?", "បុគ្គលិកសាលាក្រុង: បាន។ អ្នកអាចពិគ្រោះជាមួយអ្នកទទួលខុសត្រូវថាអាចបង់ជាដំណាក់កាលបានឬអត់។"],
            ne: ["सेवाग्राही: घरमा tax payment notice आएको छ, तर内容 राम्रोसँग बुझिनँ।", "नगर कार्यालयका कर्मचारी: यहाँ確認 गर्छु, खामसहित देखाउनुहोस्।", "सेवाग्राही: deadline सम्म तिर्न नसके相談 गर्न मिल्छ?", "नगर कार्यालयका कर्मचारी: मिल्छ। installment मा तिर्न सकिन्छ कि भनेर जिम्मेवार व्यक्तिसँग相談 गर्न सकिन्छ।"],
            mn: ["Үйлчлүүлэгч: Гэрт татварын төлбөрийн мэдэгдэл ирсэн ч агуулгыг сайн ойлгохгүй байна.", "Захиргааны ажилтан: Энд шалгана, дугтуйтай нь үзүүлнэ үү.", "Үйлчлүүлэгч: Хугацаанд нь төлж чадахгүй бол зөвлөлдөж болох уу?", "Захиргааны ажилтан: Тийм. Хэсэгчлэн төлж болох эсэхийг хариуцсан хүнтэй зөвлөлдөж болно."],
            si: ["සේවා ලබාගන්නා පුද්ගලයා: ගෙදරට tax payment notice එකක් ආවා, නමුත්内容ය හොඳින් තේරෙන්නේ නැහැ.", "නගර කාර්යාල සේවකයා: මෙතැන確認 කරන්නම්, envelope එකත් එක්ක පෙන්වන්න.", "සේවා ලබාගන්නා පුද්ගලයා: deadline එකට පෙර ගෙවන්න බැරි නම්相談 කරන්න පුළුවන්ද?", "නගර කාර්යාල සේවකයා: ඔව්. installment වලින් ගෙවිය හැකිද කියලා person in charge සමඟ相談 කරන්න පුළුවන්."],
            bn: ["সেবা গ্রহণকারী: বাড়িতে tax payment notice এসেছে, কিন্তু বিষয়বস্তু ভালো বুঝি না।", "সিটি অফিস কর্মী: এখানে確認 করব, পুরো envelope দেখান।", "সেবা গ্রহণকারী: deadline-এর মধ্যে দিতে না পারলে相談 করা যাবে?", "সিটি অফিস কর্মী: হ্যাঁ। installment-এ দেওয়া যায় কি না 담당 ব্যক্তির সঙ্গে相談 করা যাবে।"],
            pt: ["Usuário: Chegou uma notificação de pagamento de imposto em minha casa, mas não entendo bem o conteúdo.", "Funcionário da prefeitura: Vou verificar aqui, então mostre o envelope inteiro.", "Usuário: Se eu não conseguir pagar até o prazo, posso consultar alguém?", "Funcionário da prefeitura: Sim. Você pode consultar o responsável sobre a possibilidade de pagar em parcelas."],
            es: ["Usuario: Llegó una notificación de pago de impuestos a mi casa, pero no entiendo bien el contenido.", "Personal del ayuntamiento: La revisaré aquí, así que muestre el sobre completo.", "Usuario: Si no puedo pagar antes del plazo, ¿puedo consultar a alguien?", "Personal del ayuntamiento: Sí. Puede consultar con la persona encargada si es posible pagar en cuotas."],
            fr: ["Usager : J’ai reçu un avis de paiement d’impôts chez moi, mais je ne comprends pas bien le contenu.", "Personnel de la mairie : Je vais vérifier ici, veuillez montrer l’enveloppe entière.", "Usager : Si je ne peux pas payer avant la date limite, puis-je consulter quelqu’un ?", "Personnel de la mairie : Oui. Vous pouvez consulter la personne responsable pour savoir si un paiement en plusieurs fois est possible."],
            ru: ["Посетитель: Мне домой пришло уведомление об уплате налога, но я плохо понимаю содержание.", "Сотрудник мэрии: Я проверю здесь, покажите весь конверт.", "Посетитель: Если я не смогу оплатить до срока, можно проконсультироваться?", "Сотрудник мэрии: Да. Можно поговорить с ответственным о возможности оплаты частями."],
            uk: ["Відвідувач: Мені додому прийшло повідомлення про сплату податку, але я погано розумію зміст.", "Працівник мерії: Я перевірю тут, покажіть весь конверт.", "Відвідувач: Якщо я не зможу сплатити до терміну, можна проконсультуватися?", "Працівник мерії: Так. Можна поговорити з відповідальним про можливість оплати частинами."]
        }
    ),

    makeA2CityOfficeDialogue(
        "a2_cityoffice_006",
        "マイナンバーカードについて聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "マイナンバーカードの申請について聞きたいです。",
                target: "まいなんばーかーどのしんせいについてききたいです",
                ruby: "マイナンバーカードの<ruby>申請<rt>しんせい</rt></ruby>について<ruby>聞<rt>き</rt></ruby>きたいです。",
                romaji: "Mai nanbā kādo no shinsei ni tsuite kikitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "申請はスマホでも、窓口でもできます。",
                target: "しんせいはすまほでも まどぐちでもできます",
                ruby: "<ruby>申請<rt>しんせい</rt></ruby>はスマホでも、<ruby>窓口<rt>まどぐち</rt></ruby>でもできます。",
                romaji: "Shinsei wa sumaho demo, madoguchi demo dekimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "写真を用意する必要がありますか。",
                target: "しゃしんをよういするひつようがありますか",
                ruby: "<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>用意<rt>ようい</rt></ruby>する<ruby>必要<rt>ひつよう</rt></ruby>がありますか。",
                romaji: "Shashin o yōi suru hitsuyō ga arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "窓口で申請する場合は、こちらで写真を撮れます。",
                target: "まどぐちでしんせいするばあいは こちらでしゃしんをとれます",
                ruby: "<ruby>窓口<rt>まどぐち</rt></ruby>で<ruby>申請<rt>しんせい</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は、こちらで<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>れます。",
                romaji: "Madoguchi de shinsei suru baai wa, kochira de shashin o toremasu."
            }
        ],
        {
            ja: ["利用者：マイナンバーカードの申請について聞きたいです。", "役所の人：申請はスマホでも、窓口でもできます。", "利用者：写真を用意する必要がありますか。", "役所の人：窓口で申請する場合は、こちらで写真を撮れます。"],
            en: ["Visitor: I would like to ask about applying for a My Number Card.", "City Office Staff: You can apply by smartphone or at the counter.", "Visitor: Do I need to prepare a photo?", "City Office Staff: If you apply at the counter, we can take your photo here."],
            "zh-CN": ["办事的人：我想咨询个人编号卡的申请。", "市役所人员：可以用手机申请，也可以在窗口申请。", "办事的人：需要准备照片吗？", "市役所人员：如果在窗口申请，可以在这里拍照。"],
            "zh-TW": ["辦事的人：我想諮詢個人編號卡的申請。", "市役所人員：可以用手機申請，也可以在窗口申請。", "辦事的人：需要準備照片嗎？", "市役所人員：如果在窗口申請，可以在這裡拍照。"],
            ko: ["이용자: 마이넘버카드 신청에 대해 묻고 싶습니다.", "시청 직원: 신청은 스마트폰으로도, 창구에서도 할 수 있습니다.", "이용자: 사진을 준비해야 하나요?", "시청 직원: 창구에서 신청하는 경우에는 여기서 사진을 찍을 수 있습니다."],
            vi: ["Người sử dụng dịch vụ: Tôi muốn hỏi về việc đăng ký thẻ My Number.", "Nhân viên văn phòng hành chính: Bạn có thể đăng ký bằng điện thoại hoặc tại quầy.", "Người sử dụng dịch vụ: Tôi có cần chuẩn bị ảnh không ạ?", "Nhân viên văn phòng hành chính: Nếu đăng ký tại quầy, bạn có thể chụp ảnh tại đây."],
            tl: ["Visitor: Gusto ko pong magtanong tungkol sa application ng My Number Card.", "City office staff: Puwede pong mag-apply sa smartphone o sa counter.", "Visitor: Kailangan po ba akong maghanda ng photo?", "City office staff: Kung mag-a-apply po sa counter, puwede po kaming kumuha ng photo dito."],
            id: ["Pengunjung: Saya ingin bertanya tentang permohonan My Number Card.", "Staf kantor kota: Permohonan bisa dilakukan lewat smartphone atau di loket.", "Pengunjung: Apakah perlu menyiapkan foto?", "Staf kantor kota: Jika mengajukan di loket, foto bisa diambil di sini."],
            th: ["ผู้ใช้บริการ: อยากสอบถามเกี่ยวกับการสมัครบัตร My Number ค่ะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: สมัครได้ทั้งทางสมาร์ตโฟนและที่ช่องบริการค่ะ/ครับ", "ผู้ใช้บริการ: ต้องเตรียมรูปถ่ายไหมคะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: ถ้าสมัครที่ช่องบริการ สามารถถ่ายรูปที่นี่ได้ค่ะ/ครับ"],
            my: ["လာရောက်သူ: My Number Card လျှောက်ထားတာအကြောင်း မေးချင်ပါတယ်။", "မြို့ရုံးဝန်ထမ်း: smartphone နဲ့လည်း လျှောက်လို့ရပါတယ်၊ ကောင်တာမှာလည်း ရပါတယ်။", "လာရောက်သူ: ဓာတ်ပုံ ပြင်ဆင်ဖို့ လိုပါသလား။", "မြို့ရုံးဝန်ထမ်း: ကောင်တာမှာ လျှောက်မယ်ဆိုရင် ဒီမှာ ဓာတ်ပုံရိုက်လို့ရပါတယ်။"],
            km: ["អ្នកមកប្រើសេវា: ខ្ញុំចង់សួរអំពីការដាក់ពាក្យសុំប័ណ្ណ My Number។", "បុគ្គលិកសាលាក្រុង: អាចដាក់ពាក្យតាមស្មាតហ្វូន ឬនៅកន្លែងបម្រើសេវា។", "អ្នកមកប្រើសេវា: តើត្រូវរៀបចំរូបថតទេ?", "បុគ្គលិកសាលាក្រុង: ប្រសិនបើដាក់ពាក្យនៅកន្លែងបម្រើសេវា អាចថតរូបនៅទីនេះបាន។"],
            ne: ["सेवाग्राही: My Number Card को आवेदनबारे सोध्न चाहन्छु।", "नगर कार्यालयका कर्मचारी: आवेदन smartphone बाट पनि, counter बाट पनि गर्न सकिन्छ।", "सेवाग्राही: फोटो तयार गर्नुपर्छ?", "नगर कार्यालयका कर्मचारी: counter मा आवेदन गर्ने場合, यहाँ फोटो खिच्न सकिन्छ।"],
            mn: ["Үйлчлүүлэгч: My Number Card-ийн өргөдлийн талаар асуумаар байна.", "Захиргааны ажилтан: Утсаар ч, цонхоор ч өргөдөл гаргаж болно.", "Үйлчлүүлэгч: Зураг бэлдэх хэрэгтэй юу?", "Захиргааны ажилтан: Цонхон дээр өргөдөл гаргах бол энд зураг авч болно."],
            si: ["සේවා ලබාගන්නා පුද්ගලයා: My Number Card application ගැන අහන්න ඕනේ.", "නගර කාර්යාල සේවකයා: smartphone එකෙන් හෝ counter එකේදී apply කරන්න පුළුවන්.", "සේවා ලබාගන්නා පුද්ගලයා: photo එකක් සූදානම් කරන්න ඕනෙද?", "නගර කාර්යාල සේවකයා: counter එකේ apply කරන場合, මෙතැන photo ගන්න පුළුවන්."],
            bn: ["সেবা গ্রহণকারী: My Number Card আবেদন সম্পর্কে জানতে চাই।", "সিটি অফিস কর্মী: smartphone দিয়েও, counter-এও আবেদন করা যায়।", "সেবা গ্রহণকারী: photo প্রস্তুত করতে হবে?", "সিটি অফিস কর্মী: counter-এ আবেদন করলে এখানে photo তোলা যায়।"],
            pt: ["Usuário: Gostaria de perguntar sobre a solicitação do My Number Card.", "Funcionário da prefeitura: A solicitação pode ser feita pelo smartphone ou no balcão.", "Usuário: Preciso preparar uma foto?", "Funcionário da prefeitura: Se solicitar no balcão, podemos tirar a foto aqui."],
            es: ["Usuario: Quisiera preguntar sobre la solicitud de la My Number Card.", "Personal del ayuntamiento: Puede solicitarla por smartphone o en la ventanilla.", "Usuario: ¿Necesito preparar una foto?", "Personal del ayuntamiento: Si la solicita en la ventanilla, podemos tomar la foto aquí."],
            fr: ["Usager : Je voudrais me renseigner sur la demande de My Number Card.", "Personnel de la mairie : La demande peut se faire par smartphone ou au guichet.", "Usager : Dois-je préparer une photo ?", "Personnel de la mairie : Si vous faites la demande au guichet, nous pouvons prendre la photo ici."],
            ru: ["Посетитель: Я хотел бы спросить о подаче заявления на карту My Number.", "Сотрудник мэрии: Подать заявление можно со смартфона или в окне.", "Посетитель: Нужно подготовить фотографию?", "Сотрудник мэрии: Если вы подаёте заявление в окне, мы можем сделать фото здесь."],
            uk: ["Відвідувач: Я хотів би запитати про подання заяви на картку My Number.", "Працівник мерії: Подати заяву можна зі смартфона або у вікні.", "Відвідувач: Потрібно підготувати фотографію?", "Працівник мерії: Якщо подаєте заяву у вікні, ми можемо зробити фото тут."]
        }
    ),

    makeA2CityOfficeDialogue(
        "a2_cityoffice_007",
        "子どもの手続きについて聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "子どもが生まれたので、必要な手続きを知りたいです。",
                target: "こどもがうまれたので ひつようなてつづきをしりたいです",
                ruby: "<ruby>子<rt>こ</rt></ruby>どもが<ruby>生<rt>う</rt></ruby>まれたので、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>手続<rt>てつづ</rt></ruby>きを<ruby>知<rt>し</rt></ruby>りたいです。",
                romaji: "Kodomo ga umareta node, hitsuyō na tetsuzuki o shiritai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "出生届のほかに、児童手当の申請があります。",
                target: "しゅっしょうとどけのほかに じどうてあてのしんせいがあります",
                ruby: "<ruby>出生届<rt>しゅっしょうとどけ</rt></ruby>のほかに、<ruby>児童手当<rt>じどうてあて</rt></ruby>の<ruby>申請<rt>しんせい</rt></ruby>があります。",
                romaji: "Shusshō todoke no hoka ni, jidō teate no shinsei ga arimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "必要な書類を一覧でもらえますか。",
                target: "ひつようなしょるいをいちらんでもらえますか",
                ruby: "<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>を<ruby>一覧<rt>いちらん</rt></ruby>でもらえますか。",
                romaji: "Hitsuyō na shorui o ichiran de moraemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "はい。こちらの紙に、持ち物と期限が書いてあります。",
                target: "はい こちらのかみに もちものときげんがかいてあります",
                ruby: "はい。こちらの<ruby>紙<rt>かみ</rt></ruby>に、<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>と<ruby>期限<rt>きげん</rt></ruby>が<ruby>書<rt>か</rt></ruby>いてあります。",
                romaji: "Hai. Kochira no kami ni, mochimono to kigen ga kaite arimasu."
            }
        ],
        {
            ja: ["利用者：子どもが生まれたので、必要な手続きを知りたいです。", "役所の人：出生届のほかに、児童手当の申請があります。", "利用者：必要な書類を一覧でもらえますか。", "役所の人：はい。こちらの紙に、持ち物と期限が書いてあります。"],
            en: ["Visitor: My child was born, so I would like to know the necessary procedures.", "City Office Staff: In addition to the birth notification, there is an application for child allowance.", "Visitor: Could I get a list of the required documents?", "City Office Staff: Yes. This paper shows what to bring and the deadlines."],
            "zh-CN": ["办事的人：孩子出生了，我想知道需要办理哪些手续。", "市役所人员：除了出生届以外，还有儿童津贴的申请。", "办事的人：可以给我一份所需文件清单吗？", "市役所人员：可以。这张纸上写着需要带的东西和期限。"],
            "zh-TW": ["辦事的人：孩子出生了，我想知道需要辦理哪些手續。", "市役所人員：除了出生屆以外，還有兒童津貼的申請。", "辦事的人：可以給我一份所需文件清單嗎？", "市役所人員：可以。這張紙上寫著需要帶的東西和期限。"],
            ko: ["이용자: 아이가 태어나서 필요한 절차를 알고 싶습니다.", "시청 직원: 출생신고 외에 아동수당 신청이 있습니다.", "이용자: 필요한 서류를 목록으로 받을 수 있나요?", "시청 직원: 네. 이 종이에 준비물과 기한이 적혀 있습니다."],
            vi: ["Người sử dụng dịch vụ: Con tôi mới sinh nên tôi muốn biết các thủ tục cần thiết.", "Nhân viên văn phòng hành chính: Ngoài giấy khai sinh, còn có đơn xin trợ cấp trẻ em.", "Người sử dụng dịch vụ: Tôi có thể nhận danh sách giấy tờ cần thiết không ạ?", "Nhân viên văn phòng hành chính: Vâng. Trên giấy này có ghi đồ cần mang và thời hạn."],
            tl: ["Visitor: Ipinanganak po ang anak ko, kaya gusto kong malaman ang kinakailangang procedures.", "City office staff: Bukod po sa birth notification, may application para sa child allowance.", "Visitor: Maaari po bang makakuha ng listahan ng required documents?", "City office staff: Oo. Nakasulat po sa papel na ito ang dadalhin at deadlines."],
            id: ["Pengunjung: Anak saya lahir, jadi saya ingin tahu prosedur yang diperlukan.", "Staf kantor kota: Selain laporan kelahiran, ada permohonan tunjangan anak.", "Pengunjung: Bisakah saya mendapatkan daftar dokumen yang diperlukan?", "Staf kantor kota: Ya. Di kertas ini tertulis barang yang harus dibawa dan batas waktunya."],
            th: ["ผู้ใช้บริการ: ลูกเกิดแล้ว จึงอยากทราบขั้นตอนที่จำเป็นค่ะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: นอกจากใบแจ้งเกิดแล้ว ยังมีการสมัครเงินช่วยเหลือเด็กค่ะ/ครับ", "ผู้ใช้บริการ: ขอรายการเอกสารที่จำเป็นได้ไหมคะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: ได้ค่ะ/ครับ ในกระดาษนี้มีของที่ต้องนำมาและ期限เขียนไว้ค่ะ/ครับ"],
            my: ["လာရောက်သူ: ကလေးမွေးလာလို့ လိုအပ်တဲ့လုပ်ငန်းစဉ်တွေ သိချင်ပါတယ်။", "မြို့ရုံးဝန်ထမ်း: birth notification အပြင် child allowance application လည်း ရှိပါတယ်။", "လာရောက်သူ: လိုအပ်တဲ့စာရွက်စာတမ်းစာရင်းကို ရနိုင်ပါသလား။", "မြို့ရုံးဝန်ထမ်း: ရပါတယ်။ ဒီစာရွက်မှာ ယူလာရမယ့်ပစ္စည်းနဲ့ deadline ရေးထားပါတယ်။"],
            km: ["អ្នកមកប្រើសេវា: កូនខ្ញុំបានកើត ដូច្នេះចង់ដឹងនីតិវិធីដែលត្រូវធ្វើ។", "បុគ្គលិកសាលាក្រុង: ក្រៅពីលិខិតកំណើត មានការដាក់ពាក្យសុំប្រាក់ឧបត្ថម្ភកុមារ។", "អ្នកមកប្រើសេវា: តើអាចទទួលបញ្ជីឯកសារចាំបាច់បានទេ?", "បុគ្គលិកសាលាក្រុង: បាន។ ក្រដាសនេះមានសរសេររបស់ត្រូវយកមក និងថ្ងៃកំណត់។"],
            ne: ["सेवाग्राही: बच्चा जन्मिएकोले आवश्यक procedures जान्न चाहन्छु।", "नगर कार्यालयका कर्मचारी: birth notification बाहेक child allowance को application छ।", "सेवाग्राही: आवश्यक documents को list पाउन सकिन्छ?", "नगर कार्यालयका कर्मचारी: हुन्छ। यस कागजमा ल्याउने कुरा र deadline लेखिएको छ।"],
            mn: ["Үйлчлүүлэгч: Хүүхэд төрсөн тул шаардлагатай процедурыг мэдмээр байна.", "Захиргааны ажилтан: Төрсний мэдэгдлээс гадна хүүхдийн тэтгэмжийн өргөдөл бий.", "Үйлчлүүлэгч: Шаардлагатай бичиг баримтын жагсаалт авч болох уу?", "Захиргааны ажилтан: Тийм. Энэ цаасан дээр авчрах зүйлс болон хугацаа бичсэн байгаа."],
            si: ["සේවා ලබාගන්නා පුද්ගලයා: දරුවෙක් උපන් නිසා අවශ්‍ය procedures දැනගන්න ඕනේ.", "නගර කාර්යාල සේවකයා: birth notification එකට අමතරව child allowance application එකක් තියෙනවා.", "සේවා ලබාගන්නා පුද්ගලයා: required documents list එකක් ගන්න පුළුවන්ද?", "නගර කාර්යාල සේවකයා: ඔව්. මේ කඩදාසියේ ගෙන එන්න ඕන දේවල් සහ deadlines ලියලා තියෙනවා."],
            bn: ["সেবা গ্রহণকারী: আমার সন্তান জন্মেছে, তাই প্রয়োজনীয় procedures জানতে চাই।", "সিটি অফিস কর্মী: birth notification ছাড়াও child allowance application আছে।", "সেবা গ্রহণকারী: required documents-এর list পেতে পারি?", "সিটি অফিস কর্মী: হ্যাঁ। এই কাগজে আনতে হবে এমন জিনিস এবং deadlines লেখা আছে।"],
            pt: ["Usuário: Meu filho nasceu, então gostaria de saber os procedimentos necessários.", "Funcionário da prefeitura: Além da declaração de nascimento, há a solicitação do benefício infantil.", "Usuário: Posso receber uma lista dos documentos necessários?", "Funcionário da prefeitura: Sim. Neste papel estão escritos os itens a trazer e os prazos."],
            es: ["Usuario: Mi hijo nació, así que quisiera saber los trámites necesarios.", "Personal del ayuntamiento: Además de la notificación de nacimiento, está la solicitud de subsidio infantil.", "Usuario: ¿Puedo recibir una lista de los documentos necesarios?", "Personal del ayuntamiento: Sí. En este papel están escritos los documentos a traer y los plazos."],
            fr: ["Usager : Mon enfant est né, donc je voudrais connaître les démarches nécessaires.", "Personnel de la mairie : En plus de la déclaration de naissance, il y a la demande d’allocation pour enfant.", "Usager : Puis-je recevoir une liste des documents nécessaires ?", "Personnel de la mairie : Oui. Ce papier indique les choses à apporter et les délais."],
            ru: ["Посетитель: У меня родился ребёнок, и я хочу узнать необходимые процедуры.", "Сотрудник мэрии: Кроме уведомления о рождении, есть заявление на детское пособие.", "Посетитель: Можно получить список необходимых документов?", "Сотрудник мэрии: Да. На этой бумаге написано, что нужно принести и сроки."],
            uk: ["Відвідувач: У мене народилася дитина, і я хочу дізнатися потрібні процедури.", "Працівник мерії: Окрім повідомлення про народження, є заява на дитячу допомогу.", "Відвідувач: Можна отримати список необхідних документів?", "Працівник мерії: Так. На цьому папері написано, що потрібно принести і терміни."]
        }
    ),

    makeA2CityOfficeDialogue(
        "a2_cityoffice_008",
        "多言語相談を利用する",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "日本語の説明が少し難しいです。",
                target: "にほんごのせつめいがすこしむずかしいです",
                ruby: "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>し<ruby>難<rt>むずか</rt></ruby>しいです。",
                romaji: "Nihongo no setsumei ga sukoshi muzukashii desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "やさしい日本語で、もう一度説明しますね。",
                target: "やさしいにほんごで もういちどせつめいしますね",
                ruby: "やさしい<ruby>日本語<rt>にほんご</rt></ruby>で、もう<ruby>一度<rt>いちど</rt></ruby><ruby>説明<rt>せつめい</rt></ruby>しますね。",
                romaji: "Yasashii nihongo de, mō ichido setsumei shimasu ne."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "通訳や外国語の案内はありますか。",
                target: "つうやくやがいこくごのあんないはありますか",
                ruby: "<ruby>通訳<rt>つうやく</rt></ruby>や<ruby>外国語<rt>がいこくご</rt></ruby>の<ruby>案内<rt>あんない</rt></ruby>はありますか。",
                romaji: "Tsūyaku ya gaikokugo no annai wa arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "役所の人",
                line: "曜日によって、多言語相談の時間があります。",
                target: "ようびによって たげんごそうだんのじかんがあります",
                ruby: "<ruby>曜日<rt>ようび</rt></ruby>によって、<ruby>多言語相談<rt>たげんごそうだん</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>があります。",
                romaji: "Yōbi ni yotte, tagengo sōdan no jikan ga arimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "利用者",
                line: "その予定を紙でもらえますか。",
                target: "そのよていをかみでもらえますか",
                ruby: "その<ruby>予定<rt>よてい</rt></ruby>を<ruby>紙<rt>かみ</rt></ruby>でもらえますか。",
                romaji: "Sono yotei o kami de moraemasu ka."
            }
        ],
        {
            ja: ["利用者：日本語の説明が少し難しいです。", "役所の人：やさしい日本語で、もう一度説明しますね。", "利用者：通訳や外国語の案内はありますか。", "役所の人：曜日によって、多言語相談の時間があります。", "利用者：その予定を紙でもらえますか。"],
            en: ["Visitor: The Japanese explanation is a little difficult for me.", "City Office Staff: I will explain it again in simple Japanese.", "Visitor: Is there interpretation or information in foreign languages?", "City Office Staff: Depending on the day, there are times for multilingual consultation.", "Visitor: Could I get that schedule on paper?"],
            "zh-CN": ["办事的人：日语说明有点难。", "市役所人员：我用简单日语再说明一次。", "办事的人：有口译或外语说明吗？", "市役所人员：根据星期不同，有多语言咨询时间。", "办事的人：可以把那个时间表给我一张纸吗？"],
            "zh-TW": ["辦事的人：日語說明有點難。", "市役所人員：我用簡單日語再說明一次。", "辦事的人：有口譯或外語說明嗎？", "市役所人員：根據星期不同，有多語言諮詢時間。", "辦事的人：可以把那個時間表給我一張紙嗎？"],
            ko: ["이용자: 일본어 설명이 조금 어렵습니다.", "시청 직원: 쉬운 일본어로 다시 한 번 설명하겠습니다.", "이용자: 통역이나 외국어 안내가 있나요?", "시청 직원: 요일에 따라 다국어 상담 시간이 있습니다.", "이용자: 그 일정을 종이로 받을 수 있나요?"],
            vi: ["Người sử dụng dịch vụ: Phần giải thích bằng tiếng Nhật hơi khó.", "Nhân viên văn phòng hành chính: Tôi sẽ giải thích lại bằng tiếng Nhật đơn giản.", "Người sử dụng dịch vụ: Có phiên dịch hoặc hướng dẫn bằng tiếng nước ngoài không ạ?", "Nhân viên văn phòng hành chính: Tùy theo ngày trong tuần, có thời gian相談 đa ngôn ngữ.", "Người sử dụng dịch vụ: Tôi có thể nhận lịch đó bằng giấy không ạ?"],
            tl: ["Visitor: Medyo mahirap po ang explanation sa Japanese.", "City office staff: Ipapaliwanag ko po ulit sa simple Japanese.", "Visitor: May interpreter o information po ba sa foreign languages?", "City office staff: Depende po sa araw, may multilingual consultation time.", "Visitor: Maaari po bang makuha ang schedule na iyon sa papel?"],
            id: ["Pengunjung: Penjelasan dalam bahasa Jepang agak sulit.", "Staf kantor kota: Saya akan menjelaskan sekali lagi dengan bahasa Jepang yang mudah.", "Pengunjung: Apakah ada penerjemah atau panduan dalam bahasa asing?", "Staf kantor kota: Tergantung hari, ada waktu konsultasi multibahasa.", "Pengunjung: Bisakah saya mendapatkan jadwal itu dalam bentuk kertas?"],
            th: ["ผู้ใช้บริการ: คำอธิบายภาษาญี่ปุ่นยากนิดหน่อยค่ะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: จะอธิบายอีกครั้งด้วยภาษาญี่ปุ่นง่าย ๆ ค่ะ/ครับ", "ผู้ใช้บริการ: มีล่ามหรือคำแนะนำภาษาต่างประเทศไหมคะ/ครับ", "เจ้าหน้าที่ที่ว่าการเมือง: ขึ้นอยู่กับวัน มีเวลาปรึกษาหลายภาษาค่ะ/ครับ", "ผู้ใช้บริการ: ขอรับตารางนั้นเป็นกระดาษได้ไหมคะ/ครับ"],
            my: ["လာရောက်သူ: ဂျပန်ဘာသာနဲ့ ရှင်းပြတာ နည်းနည်းခက်ပါတယ်။", "မြို့ရုံးဝန်ထမ်း: ရိုးရှင်းတဲ့ဂျပန်စကားနဲ့ နောက်တစ်ကြိမ် ရှင်းပြပါမယ်။", "လာရောက်သူ: interpreter ဒါမှမဟုတ် foreign language information ရှိပါသလား။", "မြို့ရုံးဝန်ထမ်း: နေ့အလိုက် multilingual consultation အချိန် ရှိပါတယ်။", "လာရောက်သူ: အဲဒီ schedule ကို စာရွက်နဲ့ ရနိုင်ပါသလား။"],
            km: ["អ្នកមកប្រើសេវា: ការពន្យល់ជាភាសាជប៉ុនពិបាកបន្តិច។", "បុគ្គលិកសាលាក្រុង: ខ្ញុំនឹងពន្យល់ម្តងទៀតដោយភាសាជប៉ុនងាយៗ។", "អ្នកមកប្រើសេវា: តើមានអ្នកបកប្រែ ឬការណែនាំជាភាសាបរទេសទេ?", "បុគ្គលិកសាលាក្រុង: អាស្រ័យលើថ្ងៃ មានពេលពិគ្រោះពហុភាសា។", "អ្នកមកប្រើសេវា: តើអាចទទួលកាលវិភាគនោះជាក្រដាសបានទេ?"],
            ne: ["सेवाग्राही: जापानी説明 अलि गाह्रो छ।", "नगर कार्यालयका कर्मचारी: सजिलो जापानीमा फेरि説明 गर्छु।", "सेवाग्राही: interpreter वा foreign language information छ?", "नगर कार्यालयका कर्मचारी: बारअनुसार multilingual consultation को समय छ।", "सेवाग्राही: त्यो schedule कागजमा पाउन सकिन्छ?"],
            mn: ["Үйлчлүүлэгч: Япон хэлний тайлбар жаахан хэцүү байна.", "Захиргааны ажилтан: Энгийн япон хэлээр дахин тайлбарлая.", "Үйлчлүүлэгч: Орчуулагч эсвэл гадаад хэлний мэдээлэл байна уу?", "Захиргааны ажилтан: Өдрөөс хамааран олон хэлний зөвлөгөөний цаг байдаг.", "Үйлчлүүлэгч: Тэр хуваарийг цаасаар авч болох уу?"],
            si: ["සේවා ලබාගන්නා පුද්ගලයා: Japanese explanation එක ටිකක් අපහසුයි.", "නගර කාර්යාල සේවකයා: easy Japanese වලින් නැවත පැහැදිලි කරන්නම්.", "සේවා ලබාගන්නා පුද්ගලයා: interpreter එකක් හෝ foreign language information තියෙනවද?", "නගර කාර්යාල සේවකයා: දවස අනුව multilingual consultation time එකක් තියෙනවා.", "සේවා ලබාගන්නා පුද්ගලයා: ඒ schedule එක paper එකකින් ගන්න පුළුවන්ද?"],
            bn: ["সেবা গ্রহণকারী: জাপানি explanation একটু কঠিন।", "সিটি অফিস কর্মী: সহজ জাপানিতে আবার説明 করব।", "সেবা গ্রহণকারী: interpreter বা foreign language information আছে?", "সিটি অফিস কর্মী: দিনের ওপর নির্ভর করে multilingual consultation সময় আছে।", "সেবা গ্রহণকারী: সেই schedule কাগজে পেতে পারি?"],
            pt: ["Usuário: A explicação em japonês é um pouco difícil.", "Funcionário da prefeitura: Vou explicar novamente em japonês simples.", "Usuário: Há intérprete ou informações em língua estrangeira?", "Funcionário da prefeitura: Dependendo do dia da semana, há horários de consulta multilíngue.", "Usuário: Posso receber esse horário em papel?"],
            es: ["Usuario: La explicación en japonés es un poco difícil.", "Personal del ayuntamiento: Lo explicaré otra vez en japonés sencillo.", "Usuario: ¿Hay interpretación o información en idiomas extranjeros?", "Personal del ayuntamiento: Según el día de la semana, hay horarios de consulta multilingüe.", "Usuario: ¿Puedo recibir ese horario en papel?"],
            fr: ["Usager : L’explication en japonais est un peu difficile.", "Personnel de la mairie : Je vais l’expliquer encore une fois en japonais simple.", "Usager : Y a-t-il un interprète ou des informations en langues étrangères ?", "Personnel de la mairie : Selon le jour, il y a des horaires de consultation multilingue.", "Usager : Puis-je recevoir ce planning sur papier ?"],
            ru: ["Посетитель: Объяснение на японском немного сложное.", "Сотрудник мэрии: Я объясню ещё раз простым японским.", "Посетитель: Есть переводчик или информация на иностранных языках?", "Сотрудник мэрии: В зависимости от дня недели есть время многоязычной консультации.", "Посетитель: Можно получить это расписание на бумаге?"],
            uk: ["Відвідувач: Пояснення японською трохи складне.", "Працівник мерії: Я поясню ще раз простою японською.", "Відвідувач: Є перекладач або інформація іноземними мовами?", "Працівник мерії: Залежно від дня тижня є час багатомовної консультації.", "Відвідувач: Можна отримати цей розклад на папері?"]
        }
    )

];