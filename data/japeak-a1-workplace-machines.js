// =====================================================
// Japeak A1 Level
// Scene: 職場の機械を使いこなそう
// Category Key: a1_workplace_machines
// =====================================================

const a1WorkplaceMachinesContext = {
    ja: "職場で打刻機、コピー機、プリンター、シュレッダー、スキャナーなどを使うときの日本語を練習します。",
    en: "Practice Japanese for using workplace machines such as time clocks, copiers, printers, shredders, and scanners.",
    "zh-CN": "练习在职场使用打卡机、复印机、打印机、碎纸机和扫描仪等设备时的日语。",
    "zh-TW": "練習在職場使用打卡機、影印機、印表機、碎紙機和掃描器等設備時的日語。",
    ko: "직장에서 출퇴근 기록기, 복사기, 프린터, 문서 세단기, 스캐너 등을 사용할 때의 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi sử dụng máy móc ở nơi làm việc như máy chấm công, máy photocopy, máy in, máy hủy giấy và máy scan.",
    tl: "Practice ng Japanese sa paggamit ng workplace machines tulad ng time clock, copier, printer, shredder, at scanner.",
    id: "Latihan bahasa Jepang untuk menggunakan mesin di tempat kerja seperti mesin absensi, fotokopi, printer, penghancur kertas, dan scanner.",
    th: "ฝึกภาษาญี่ปุ่นเมื่อใช้เครื่องในที่ทำงาน เช่น เครื่องตอกบัตร เครื่องถ่ายเอกสาร เครื่องพิมพ์ เครื่องทำลายเอกสาร และเครื่องสแกน",
    my: "အလုပ်ခွင်တွင် အချိန်မှတ်စက်၊ မိတ္တူကူးစက်၊ ပရင်တာ၊ စာရွက်ဖျက်စက်နှင့် စကင်နာတို့ကို အသုံးပြုရာတွင် အသုံးဝင်သော ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ប្រើម៉ាស៊ីននៅកន្លែងធ្វើការ ដូចជា ម៉ាស៊ីនចុះម៉ោង ម៉ាស៊ីនថតចម្លង ម៉ាស៊ីនបោះពុម្ព ម៉ាស៊ីនបំផ្លាញឯកសារ និងម៉ាស៊ីនស្កេន។",
    ne: "कार्यस्थलमा टाइम कार्ड मेसिन, कपी मेसिन, प्रिन्टर, श्रेडर र स्क्यानर प्रयोग गर्दा चाहिने जापानी अभ्यास।",
    mn: "Ажлын байранд цаг бүртгэгч, хувилагч, принтер, бичиг устгагч, сканнер зэрэг төхөөрөмж ашиглах япон хэлний дадлага.",
    si: "රැකියා ස්ථානයේ time clock, copy machine, printer, shredder සහ scanner වැනි යන්ත්‍ර භාවිතා කිරීමේදී අවශ්‍ය ජපන් භාෂා පුහුණුවකි.",
    bn: "কর্মস্থলে টাইম কার্ড মেশিন, কপি মেশিন, প্রিন্টার, শ্রেডার এবং স্ক্যানার ব্যবহার করার সময় ব্যবহৃত জাপানি ভাষার অনুশীলন।",
    pt: "Prática de japonês para usar máquinas no trabalho, como relógio de ponto, copiadora, impressora, fragmentadora e scanner.",
    es: "Práctica de japonés para usar máquinas en el trabajo, como reloj de asistencia, copiadora, impresora, trituradora y escáner.",
    fr: "Entraînement en japonais pour utiliser des machines au travail, comme la pointeuse, le photocopieur, l’imprimante, le destructeur de documents et le scanner.",
    ru: "Практика японского языка для использования техники на работе: отметка времени, копир, принтер, шредер и сканер.",
    uk: "Практика японської мови для використання техніки на роботі: табельний апарат, копір, принтер, шредер і сканер."
};

const a1WorkplaceMachinesSpeakerNames = {
    supervisor: {
        ja: "先輩", en: "Senior Worker", "zh-CN": "前辈", "zh-TW": "前輩", ko: "선배",
        vi: "Người đi trước", tl: "Senior worker", id: "Senior", th: "รุ่นพี่",
        my: "အတွေ့အကြုံရှိဝန်ထမ်း", km: "បុគ្គលិកជាន់ខ្ពស់", ne: "वरिष्ठ कर्मचारी", mn: "Ахлах ажилтан",
        si: "ජ්‍යෙෂ්ඨ සේවකයා", bn: "সিনিয়র কর্মী", pt: "Funcionário experiente", es: "Compañero con experiencia",
        fr: "Collègue expérimenté", ru: "Старший сотрудник", uk: "Старший працівник"
    },
    worker: {
        ja: "社員", en: "Worker", "zh-CN": "员工", "zh-TW": "員工", ko: "직원",
        vi: "Nhân viên", tl: "Worker", id: "Karyawan", th: "พนักงาน",
        my: "ဝန်ထမ်း", km: "បុគ្គលិក", ne: "कर्मचारी", mn: "Ажилтан",
        si: "සේවකයා", bn: "কর্মী", pt: "Funcionário", es: "Empleado",
        fr: "Employé", ru: "Сотрудник", uk: "Працівник"
    }
};

function makeA1WorkplaceMachinesDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a1_workplace_machines",
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
            speakerNames: a1WorkplaceMachinesSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a1WorkplaceMachinesContext,
        translations,
        dialogueTranslations
    };
}

const japeakA1WorkplaceMachinesData = [

    makeA1WorkplaceMachinesDialogue(
        "a1_machine_001",
        "打刻機を使う",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "出勤の打刻をしたいです。",
                target: "しゅっきんのだこくをしたいです",
                ruby: "<ruby>出勤<rt>しゅっきん</rt></ruby>の<ruby>打刻<rt>だこく</rt></ruby>をしたいです。",
                romaji: "Shukkin no dakoku o shitai desu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "このカードをここにタッチしてください。",
                target: "このかーどをここにたっちしてください",
                ruby: "このカードをここにタッチしてください。",
                romaji: "Kono kādo o koko ni tacchi shite kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "音が鳴りました。",
                target: "おとがなりました",
                ruby: "<ruby>音<rt>おと</rt></ruby>が<ruby>鳴<rt>な</rt></ruby>りました。",
                romaji: "Oto ga narimashita."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい、それで大丈夫です。",
                target: "はい それでだいじょうぶです",
                ruby: "はい、それで<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。",
                romaji: "Hai, sore de daijōbu desu."
            }
        ],
        {
            ja: ["社員：出勤の打刻をしたいです。", "先輩：このカードをここにタッチしてください。", "社員：音が鳴りました。", "先輩：はい、それで大丈夫です。"],
            en: ["Worker: I want to clock in.", "Senior Worker: Please touch this card here.", "Worker: It made a sound.", "Senior Worker: Yes, that is okay."],
            "zh-CN": ["员工：我想打上班卡。", "前辈：请把这张卡刷在这里。", "员工：响了一声。", "前辈：好的，这样就可以了。"],
            "zh-TW": ["員工：我想打上班卡。", "前輩：請把這張卡感應在這裡。", "員工：響了一聲。", "前輩：好的，這樣就可以了。"],
            ko: ["직원: 출근 기록을 하고 싶습니다.", "선배: 이 카드를 여기에 터치해 주세요.", "직원: 소리가 났습니다.", "선배: 네, 그걸로 괜찮습니다."],
            vi: ["Nhân viên: Tôi muốn chấm công vào làm.", "Người đi trước: Xin hãy chạm thẻ này vào đây.", "Nhân viên: Có tiếng kêu rồi.", "Người đi trước: Vâng, như vậy là được."],
            tl: ["Worker: Gusto kong mag-clock in.", "Senior worker: I-tap po ang card na ito dito.", "Worker: Tumunog po.", "Senior worker: Oo, ayos na po iyon."],
            id: ["Karyawan: Saya ingin absen masuk.", "Senior: Tempelkan kartu ini di sini.", "Karyawan: Ada bunyi.", "Senior: Ya, itu sudah benar."],
            th: ["พนักงาน: อยากตอกบัตรเข้างานค่ะ/ครับ", "รุ่นพี่: กรุณาแตะบัตรนี้ตรงนี้ค่ะ/ครับ", "พนักงาน: มีเสียงดังแล้วค่ะ/ครับ", "รุ่นพี่: ใช่ค่ะ/ครับ แบบนั้นใช้ได้แล้วค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: အလုပ်ဝင်ချိန် မှတ်ချင်ပါတယ်။", "အတွေ့အကြုံရှိဝန်ထမ်း: ဒီကတ်ကို ဒီနေရာမှာ ထိပေးပါ။", "ဝန်ထမ်း: အသံမြည်ပါပြီ။", "အတွေ့အကြုံရှိဝန်ထမ်း: ဟုတ်ကဲ့၊ အဲဒါဆို ရပါပြီ။"],
            km: ["បុគ្គលិក: ខ្ញុំចង់ចុះម៉ោងចូលធ្វើការ។", "បុគ្គលិកជាន់ខ្ពស់: សូមប៉ះកាតនេះនៅទីនេះ។", "បុគ្គលិក: វាមានសំឡេងហើយ។", "បុគ្គលិកជាន់ខ្ពស់: បាទ/ចាស បែបនេះបានហើយ។"],
            ne: ["कर्मचारी: म काममा आएको समय दर्ता गर्न चाहन्छु।", "वरिष्ठ कर्मचारी: यो कार्ड यहाँ टच गर्नुहोस्।", "कर्मचारी: आवाज आयो।", "वरिष्ठ कर्मचारी: हो, त्यसो भए ठीक छ।"],
            mn: ["Ажилтан: Би ажилдаа ирсэн цагаа бүртгэмээр байна.", "Ахлах ажилтан: Энэ картыг энд хүргэнэ үү.", "Ажилтан: Дуу гарлаа.", "Ахлах ажилтан: Тийм, ингэвэл болно."],
            si: ["සේවකයා: මට වැඩට ආපු වෙලාව සටහන් කරන්න ඕනේ.", "ජ්‍යෙෂ්ඨ සේවකයා: මේ කාඩ් එක මෙතැනට touch කරන්න.", "සේවකයා: ශබ්දයක් ආවා.", "ජ්‍යෙෂ්ඨ සේවකයා: ඔව්, ඒක හරි."],
            bn: ["কর্মী: আমি কাজে আসার সময় রেকর্ড করতে চাই।", "সিনিয়র কর্মী: এই কার্ডটি এখানে ট্যাপ করুন।", "কর্মী: শব্দ হলো।", "সিনিয়র কর্মী: হ্যাঁ, এভাবেই ঠিক আছে।"],
            pt: ["Funcionário: Quero registrar minha entrada.", "Funcionário experiente: Encoste este cartão aqui, por favor.", "Funcionário: Fez um som.", "Funcionário experiente: Sim, está certo."],
            es: ["Empleado: Quiero registrar mi entrada.", "Compañero con experiencia: Toque esta tarjeta aquí, por favor.", "Empleado: Sonó.", "Compañero con experiencia: Sí, así está bien."],
            fr: ["Employé : Je veux pointer mon arrivée.", "Collègue expérimenté : Touchez ici avec cette carte, s’il vous plaît.", "Employé : Il y a eu un son.", "Collègue expérimenté : Oui, c’est bon."],
            ru: ["Сотрудник: Я хочу отметить приход на работу.", "Старший сотрудник: Приложите эту карту здесь.", "Сотрудник: Раздался звук.", "Старший сотрудник: Да, так нормально."],
            uk: ["Працівник: Я хочу відмітити прихід на роботу.", "Старший працівник: Прикладіть цю картку тут.", "Працівник: Пролунав звук.", "Старший працівник: Так, усе правильно."]
        }
    ),

    makeA1WorkplaceMachinesDialogue(
        "a1_machine_002",
        "コピー機を使う",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "この書類をコピーしたいです。",
                target: "このしょるいをこぴーしたいです",
                ruby: "この<ruby>書類<rt>しょるい</rt></ruby>をコピーしたいです。",
                romaji: "Kono shorui o kopī shitai desu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "ここに紙を置いてください。",
                target: "ここにかみをおいてください",
                ruby: "ここに<ruby>紙<rt>かみ</rt></ruby>を<ruby>置<rt>お</rt></ruby>いてください。",
                romaji: "Koko ni kami o oite kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "何枚コピーしますか。",
                target: "なんまいこぴーしますか",
                ruby: "<ruby>何枚<rt>なんまい</rt></ruby>コピーしますか。",
                romaji: "Nanmai kopī shimasu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "三枚コピーしてください。",
                target: "さんまいこぴーしてください",
                ruby: "<ruby>三枚<rt>さんまい</rt></ruby>コピーしてください。",
                romaji: "Sanmai kopī shite kudasai."
            }
        ],
        {
            ja: ["社員：この書類をコピーしたいです。", "先輩：ここに紙を置いてください。", "社員：何枚コピーしますか。", "先輩：三枚コピーしてください。"],
            en: ["Worker: I want to copy this document.", "Senior Worker: Please place the paper here.", "Worker: How many copies should I make?", "Senior Worker: Please make three copies."],
            "zh-CN": ["员工：我想复印这份文件。", "前辈：请把纸放在这里。", "员工：要复印几张？", "前辈：请复印三张。"],
            "zh-TW": ["員工：我想影印這份文件。", "前輩：請把紙放在這裡。", "員工：要影印幾張？", "前輩：請影印三張。"],
            ko: ["직원: 이 서류를 복사하고 싶습니다.", "선배: 여기에 종이를 놓아 주세요.", "직원: 몇 장 복사하나요?", "선배: 세 장 복사해 주세요."],
            vi: ["Nhân viên: Tôi muốn photo tài liệu này.", "Người đi trước: Xin hãy đặt giấy ở đây.", "Nhân viên: Tôi photo mấy bản ạ?", "Người đi trước: Xin hãy photo ba bản."],
            tl: ["Worker: Gusto kong i-copy ang dokumentong ito.", "Senior worker: Ilagay po ang papel dito.", "Worker: Ilang kopya po?", "Senior worker: Tatlong kopya po, please."],
            id: ["Karyawan: Saya ingin menyalin dokumen ini.", "Senior: Letakkan kertas di sini.", "Karyawan: Berapa lembar saya salin?", "Senior: Tolong salin tiga lembar."],
            th: ["พนักงาน: อยากถ่ายเอกสารนี้ค่ะ/ครับ", "รุ่นพี่: กรุณาวางกระดาษตรงนี้ค่ะ/ครับ", "พนักงาน: ถ่ายกี่แผ่นคะ/ครับ", "รุ่นพี่: กรุณาถ่ายสามแผ่นค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ဒီစာရွက်စာတမ်းကို မိတ္တူကူးချင်ပါတယ်။", "အတွေ့အကြုံရှိဝန်ထမ်း: စာရွက်ကို ဒီမှာ တင်ပေးပါ။", "ဝန်ထမ်း: မိတ္တူ ဘယ်နှစ်ရွက် ကူးရပါမလဲ။", "အတွေ့အကြုံရှိဝန်ထမ်း: သုံးရွက် ကူးပေးပါ။"],
            km: ["បុគ្គលិក: ខ្ញុំចង់ថតចម្លងឯកសារនេះ។", "បុគ្គលិកជាន់ខ្ពស់: សូមដាក់ក្រដាសនៅទីនេះ។", "បុគ្គលិក: ត្រូវថតចម្លងប៉ុន្មានសន្លឹក?", "បុគ្គលិកជាន់ខ្ពស់: សូមថតចម្លងបីសន្លឹក។"],
            ne: ["कर्मचारी: म यो कागजात कपी गर्न चाहन्छु।", "वरिष्ठ कर्मचारी: कागज यहाँ राख्नुहोस्।", "कर्मचारी: कति प्रति कपी गर्ने?", "वरिष्ठ कर्मचारी: तीन प्रति कपी गर्नुहोस्।"],
            mn: ["Ажилтан: Би энэ бичиг баримтыг хувилмаар байна.", "Ахлах ажилтан: Цаасаа энд тавина уу.", "Ажилтан: Хэдэн хувь хувилах вэ?", "Ахлах ажилтан: Гурван хувь хувилаарай."],
            si: ["සේවකයා: මට මේ ලේඛනය copy කරන්න ඕනේ.", "ජ්‍යෙෂ්ඨ සේවකයා: කඩදාසිය මෙතැන තියන්න.", "සේවකයා: කී පිටපත් copy කරන්නද?", "ජ්‍යෙෂ්ඨ සේවකයා: පිටපත් තුනක් copy කරන්න."],
            bn: ["কর্মী: আমি এই নথিটি কপি করতে চাই।", "সিনিয়র কর্মী: কাগজটি এখানে রাখুন।", "কর্মী: কয় কপি করব?", "সিনিয়র কর্মী: তিন কপি করুন।"],
            pt: ["Funcionário: Quero copiar este documento.", "Funcionário experiente: Coloque o papel aqui, por favor.", "Funcionário: Quantas cópias devo fazer?", "Funcionário experiente: Faça três cópias, por favor."],
            es: ["Empleado: Quiero copiar este documento.", "Compañero con experiencia: Coloque el papel aquí, por favor.", "Empleado: ¿Cuántas copias hago?", "Compañero con experiencia: Haga tres copias, por favor."],
            fr: ["Employé : Je veux copier ce document.", "Collègue expérimenté : Placez le papier ici, s’il vous plaît.", "Employé : Combien de copies dois-je faire ?", "Collègue expérimenté : Faites trois copies, s’il vous plaît."],
            ru: ["Сотрудник: Я хочу скопировать этот документ.", "Старший сотрудник: Положите бумагу сюда.", "Сотрудник: Сколько копий сделать?", "Старший сотрудник: Сделайте три копии."],
            uk: ["Працівник: Я хочу скопіювати цей документ.", "Старший працівник: Покладіть папір сюди.", "Працівник: Скільки копій зробити?", "Старший працівник: Зробіть три копії."]
        }
    ),

    makeA1WorkplaceMachinesDialogue(
        "a1_machine_003",
        "プリンターに紙を入れる",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "プリンターに紙がありません。",
                target: "ぷりんたーにかみがありません",
                ruby: "プリンターに<ruby>紙<rt>かみ</rt></ruby>がありません。",
                romaji: "Purintā ni kami ga arimasen."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "下のトレーを開けてください。",
                target: "したのとれーをあけてください",
                ruby: "<ruby>下<rt>した</rt></ruby>のトレーを<ruby>開<rt>あ</rt></ruby>けてください。",
                romaji: "Shita no torē o akete kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "この向きで入れますか。",
                target: "このむきでいれますか",
                ruby: "この<ruby>向<rt>む</rt></ruby>きで<ruby>入<rt>い</rt></ruby>れますか。",
                romaji: "Kono muki de iremasu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい、その向きで入れてください。",
                target: "はい そのむきでいれてください",
                ruby: "はい、その<ruby>向<rt>む</rt></ruby>きで<ruby>入<rt>い</rt></ruby>れてください。",
                romaji: "Hai, sono muki de irete kudasai."
            }
        ],
        {
            ja: ["社員：プリンターに紙がありません。", "先輩：下のトレーを開けてください。", "社員：この向きで入れますか。", "先輩：はい、その向きで入れてください。"],
            en: ["Worker: There is no paper in the printer.", "Senior Worker: Please open the lower tray.", "Worker: Do I put it in this direction?", "Senior Worker: Yes, please put it in that direction."],
            "zh-CN": ["员工：打印机里没有纸。", "前辈：请打开下面的纸盘。", "员工：按这个方向放吗？", "前辈：是的，请按这个方向放进去。"],
            "zh-TW": ["員工：印表機裡沒有紙。", "前輩：請打開下面的紙匣。", "員工：按這個方向放嗎？", "前輩：是的，請按這個方向放進去。"],
            ko: ["직원: 프린터에 종이가 없습니다.", "선배: 아래 트레이를 열어 주세요.", "직원: 이 방향으로 넣나요?", "선배: 네, 그 방향으로 넣어 주세요."],
            vi: ["Nhân viên: Máy in không có giấy.", "Người đi trước: Xin hãy mở khay bên dưới.", "Nhân viên: Tôi cho giấy theo hướng này phải không ạ?", "Người đi trước: Vâng, xin hãy cho theo hướng đó."],
            tl: ["Worker: Walang papel sa printer.", "Senior worker: Buksan po ang tray sa ibaba.", "Worker: Sa ganitong direksyon po ba ilalagay?", "Senior worker: Oo, ilagay po sa direksyong iyon."],
            id: ["Karyawan: Tidak ada kertas di printer.", "Senior: Buka tray bawah, silakan.", "Karyawan: Apakah saya memasukkannya dengan arah ini?", "Senior: Ya, masukkan dengan arah itu."],
            th: ["พนักงาน: เครื่องพิมพ์ไม่มีกระดาษค่ะ/ครับ", "รุ่นพี่: กรุณาเปิดถาดด้านล่างค่ะ/ครับ", "พนักงาน: ใส่ทิศทางนี้ใช่ไหมคะ/ครับ", "รุ่นพี่: ใช่ค่ะ/ครับ ใส่ทิศทางนั้นค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ပရင်တာမှာ စာရွက်မရှိပါ။", "အတွေ့အကြုံရှိဝန်ထမ်း: အောက်ဘက်က tray ကို ဖွင့်ပေးပါ။", "ဝန်ထမ်း: ဒီဦးတည်ချက်နဲ့ ထည့်ရပါသလား။", "အတွေ့အကြုံရှိဝန်ထမ်း: ဟုတ်ကဲ့၊ အဲဒီဦးတည်ချက်နဲ့ ထည့်ပေးပါ။"],
            km: ["បុគ្គលិក: ម៉ាស៊ីនបោះពុម្ពគ្មានក្រដាសទេ។", "បុគ្គលិកជាន់ខ្ពស់: សូមបើកថាសខាងក្រោម។", "បុគ្គលិក: តើដាក់តាមទិសនេះទេ?", "បុគ្គលិកជាន់ខ្ពស់: បាទ/ចាស សូមដាក់តាមទិសនោះ។"],
            ne: ["कर्मचारी: प्रिन्टरमा कागज छैन।", "वरिष्ठ कर्मचारी: तलको ट्रे खोल्नुहोस्।", "कर्मचारी: यो दिशामा राख्ने हो?", "वरिष्ठ कर्मचारी: हो, त्यही दिशामा राख्नुहोस्।"],
            mn: ["Ажилтан: Принтерт цаас алга.", "Ахлах ажилтан: Доод тавиурыг нээнэ үү.", "Ажилтан: Энэ чиглэлээр хийх үү?", "Ахлах ажилтан: Тийм, тэр чиглэлээр нь хийнэ үү."],
            si: ["සේවකයා: printer එකේ කඩදාසි නැහැ.", "ජ්‍යෙෂ්ඨ සේවකයා: පහළ tray එක විවෘත කරන්න.", "සේවකයා: මේ දිශාවෙන් දාන්නද?", "ජ්‍යෙෂ්ඨ සේවකයා: ඔව්, ඒ දිශාවෙන් දාන්න."],
            bn: ["কর্মী: প্রিন্টারে কাগজ নেই।", "সিনিয়র কর্মী: নিচের ট্রেটি খুলুন।", "কর্মী: এই দিকে রাখব?", "সিনিয়র কর্মী: হ্যাঁ, ওই দিকেই রাখুন।"],
            pt: ["Funcionário: Não há papel na impressora.", "Funcionário experiente: Abra a bandeja de baixo, por favor.", "Funcionário: Coloco nesta direção?", "Funcionário experiente: Sim, coloque nessa direção."],
            es: ["Empleado: No hay papel en la impresora.", "Compañero con experiencia: Abra la bandeja inferior, por favor.", "Empleado: ¿Lo pongo en esta dirección?", "Compañero con experiencia: Sí, póngalo en esa dirección."],
            fr: ["Employé : Il n’y a pas de papier dans l’imprimante.", "Collègue expérimenté : Ouvrez le bac du bas, s’il vous plaît.", "Employé : Je le mets dans ce sens ?", "Collègue expérimenté : Oui, mettez-le dans ce sens."],
            ru: ["Сотрудник: В принтере нет бумаги.", "Старший сотрудник: Откройте нижний лоток.", "Сотрудник: Вставлять в этом направлении?", "Старший сотрудник: Да, вставьте в этом направлении."],
            uk: ["Працівник: У принтері немає паперу.", "Старший працівник: Відкрийте нижній лоток.", "Працівник: Вставляти в цьому напрямку?", "Старший працівник: Так, вставте в цьому напрямку."]
        }
    ),

    makeA1WorkplaceMachinesDialogue(
        "a1_machine_004",
        "シュレッダーを使う",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "この紙をシュレッダーにかけますか。",
                target: "このかみをしゅれっだーにかけますか",
                ruby: "この<ruby>紙<rt>かみ</rt></ruby>をシュレッダーにかけますか。",
                romaji: "Kono kami o shureddā ni kakemasu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい、名前があるのでお願いします。",
                target: "はい なまえがあるのでおねがいします",
                ruby: "はい、<ruby>名前<rt>なまえ</rt></ruby>があるのでお<ruby>願<rt>ねが</rt></ruby>いします。",
                romaji: "Hai, namae ga aru node onegai shimasu."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "ホチキスは外しますか。",
                target: "ほちきすははずしますか",
                ruby: "ホチキスは<ruby>外<rt>はず</rt></ruby>しますか。",
                romaji: "Hochikisu wa hazushimasu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい、外してください。",
                target: "はい はずしてください",
                ruby: "はい、<ruby>外<rt>はず</rt></ruby>してください。",
                romaji: "Hai, hazushite kudasai."
            }
        ],
        {
            ja: ["社員：この紙をシュレッダーにかけますか。", "先輩：はい、名前があるのでお願いします。", "社員：ホチキスは外しますか。", "先輩：はい、外してください。"],
            en: ["Worker: Should I shred this paper?", "Senior Worker: Yes, please. It has a name on it.", "Worker: Do I remove the staple?", "Senior Worker: Yes, please remove it."],
            "zh-CN": ["员工：这张纸要放进碎纸机吗？", "前辈：是的，上面有名字，麻烦你。", "员工：订书钉要取下来吗？", "前辈：是的，请取下来。"],
            "zh-TW": ["員工：這張紙要放進碎紙機嗎？", "前輩：是的，上面有名字，麻煩你。", "員工：訂書針要取下來嗎？", "前輩：是的，請取下來。"],
            ko: ["직원: 이 종이를 문서 세단기에 넣을까요?", "선배: 네, 이름이 있으니 부탁합니다.", "직원: 스테이플러 심은 빼나요?", "선배: 네, 빼 주세요."],
            vi: ["Nhân viên: Tôi cho giấy này vào máy hủy giấy phải không ạ?", "Người đi trước: Vâng, có tên trên đó nên nhờ bạn.", "Nhân viên: Tôi tháo ghim ra phải không ạ?", "Người đi trước: Vâng, xin hãy tháo ra."],
            tl: ["Worker: I-shred ko po ba ang papel na ito?", "Senior worker: Oo, may pangalan po kaya pakiusap.", "Worker: Tatanggalin po ba ang staple?", "Senior worker: Oo, pakitanggal po."],
            id: ["Karyawan: Apakah kertas ini saya masukkan ke shredder?", "Senior: Ya, karena ada nama, tolong.", "Karyawan: Apakah staplesnya dilepas?", "Senior: Ya, lepaskan."],
            th: ["พนักงาน: กระดาษนี้ต้องใส่เครื่องทำลายเอกสารไหมคะ/ครับ", "รุ่นพี่: ใช่ค่ะ/ครับ มีชื่ออยู่ รบกวนด้วยค่ะ/ครับ", "พนักงาน: ต้องเอาลวดเย็บออกไหมคะ/ครับ", "รุ่นพี่: ใช่ค่ะ/ครับ กรุณาเอาออกค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ဒီစာရွက်ကို စာရွက်ဖျက်စက်ထဲ ထည့်ရပါမလား။", "အတွေ့အကြုံရှိဝန်ထမ်း: ဟုတ်ကဲ့၊ နာမည်ပါလို့ လုပ်ပေးပါ။", "ဝန်ထမ်း: စတေပလာကို ဖြုတ်ရပါသလား။", "အတွေ့အကြုံရှိဝန်ထမ်း: ဟုတ်ကဲ့၊ ဖြုတ်ပေးပါ။"],
            km: ["បុគ្គលិក: តើត្រូវដាក់ក្រដាសនេះក្នុងម៉ាស៊ីនបំផ្លាញឯកសារទេ?", "បុគ្គលិកជាន់ខ្ពស់: បាទ/ចាស ព្រោះមានឈ្មោះ សូមធ្វើឱ្យផង។", "បុគ្គលិក: តើត្រូវដកម្ជុលចេញទេ?", "បុគ្គលិកជាន់ខ្ពស់: បាទ/ចាស សូមដកចេញ។"],
            ne: ["कर्मचारी: यो कागज श्रेडरमा हाल्ने हो?", "वरिष्ठ कर्मचारी: हो, नाम भएकाले कृपया गर्नुहोस्।", "कर्मचारी: स्टेपल हटाउने हो?", "वरिष्ठ कर्मचारी: हो, हटाउनुहोस्।"],
            mn: ["Ажилтан: Энэ цаасыг шредерт хийх үү?", "Ахлах ажилтан: Тийм, нэр байгаа тул хийгээрэй.", "Ажилтан: Үдээсийг авах уу?", "Ахлах ажилтан: Тийм, аваарай."],
            si: ["සේවකයා: මේ කඩදාසිය shredder එකට දාන්නද?", "ජ්‍යෙෂ්ඨ සේවකයා: ඔව්, නම තියෙන නිසා කරුණාකර කරන්න.", "සේවකයා: staple එක ඉවත් කරන්නද?", "ජ්‍යෙෂ්ඨ සේවකයා: ඔව්, ඉවත් කරන්න."],
            bn: ["কর্মী: এই কাগজটা কি শ্রেডারে দেব?", "সিনিয়র কর্মী: হ্যাঁ, এতে নাম আছে, দয়া করে করুন।", "কর্মী: স্ট্যাপল খুলব?", "সিনিয়র কর্মী: হ্যাঁ, খুলে ফেলুন।"],
            pt: ["Funcionário: Devo passar este papel na fragmentadora?", "Funcionário experiente: Sim, por favor. Tem um nome nele.", "Funcionário: Devo tirar o grampo?", "Funcionário experiente: Sim, tire, por favor."],
            es: ["Empleado: ¿Debo triturar este papel?", "Compañero con experiencia: Sí, por favor. Tiene un nombre.", "Empleado: ¿Quito la grapa?", "Compañero con experiencia: Sí, quítela, por favor."],
            fr: ["Employé : Dois-je passer ce papier au destructeur ?", "Collègue expérimenté : Oui, s’il vous plaît. Il y a un nom dessus.", "Employé : Dois-je enlever l’agrafe ?", "Collègue expérimenté : Oui, enlevez-la."],
            ru: ["Сотрудник: Нужно измельчить эту бумагу?", "Старший сотрудник: Да, пожалуйста. Там есть имя.", "Сотрудник: Скрепку снять?", "Старший сотрудник: Да, снимите."],
            uk: ["Працівник: Потрібно подрібнити цей папір?", "Старший працівник: Так, будь ласка. Там є ім’я.", "Працівник: Скобу зняти?", "Старший працівник: Так, зніміть."]
        }
    ),

    makeA1WorkplaceMachinesDialogue(
        "a1_machine_005",
        "スキャナーを使う",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "この書類をスキャンしたいです。",
                target: "このしょるいをすきゃんしたいです",
                ruby: "この<ruby>書類<rt>しょるい</rt></ruby>をスキャンしたいです。",
                romaji: "Kono shorui o sukyan shitai desu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "ここに表を下にして置いてください。",
                target: "ここにおもてをしたにしておいてください",
                ruby: "ここに<ruby>表<rt>おもて</rt></ruby>を<ruby>下<rt>した</rt></ruby>にして<ruby>置<rt>お</rt></ruby>いてください。",
                romaji: "Koko ni omote o shita ni shite oite kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "このボタンを押しますか。",
                target: "このぼたんをおしますか",
                ruby: "このボタンを<ruby>押<rt>お</rt></ruby>しますか。",
                romaji: "Kono botan o oshimasu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい、スタートを押してください。",
                target: "はい すたーとをおしてください",
                ruby: "はい、スタートを<ruby>押<rt>お</rt></ruby>してください。",
                romaji: "Hai, sutāto o oshite kudasai."
            }
        ],
        {
            ja: ["社員：この書類をスキャンしたいです。", "先輩：ここに表を下にして置いてください。", "社員：このボタンを押しますか。", "先輩：はい、スタートを押してください。"],
            en: ["Worker: I want to scan this document.", "Senior Worker: Please place it here with the front side down.", "Worker: Do I press this button?", "Senior Worker: Yes, please press start."],
            "zh-CN": ["员工：我想扫描这份文件。", "前辈：请把正面朝下放在这里。", "员工：按这个按钮吗？", "前辈：是的，请按开始。"],
            "zh-TW": ["員工：我想掃描這份文件。", "前輩：請把正面朝下放在這裡。", "員工：按這個按鈕嗎？", "前輩：是的，請按開始。"],
            ko: ["직원: 이 서류를 스캔하고 싶습니다.", "선배: 여기에 앞면을 아래로 해서 놓아 주세요.", "직원: 이 버튼을 누르나요?", "선배: 네, 시작을 눌러 주세요."],
            vi: ["Nhân viên: Tôi muốn scan tài liệu này.", "Người đi trước: Xin hãy đặt mặt trước úp xuống ở đây.", "Nhân viên: Tôi bấm nút này phải không ạ?", "Người đi trước: Vâng, xin bấm nút bắt đầu."],
            tl: ["Worker: Gusto kong i-scan ang dokumentong ito.", "Senior worker: Ilagay po dito na nakaharap pababa ang harap.", "Worker: Pipindutin ko po ba ang button na ito?", "Senior worker: Oo, pindutin po ang start."],
            id: ["Karyawan: Saya ingin memindai dokumen ini.", "Senior: Letakkan di sini dengan sisi depan menghadap ke bawah.", "Karyawan: Apakah saya menekan tombol ini?", "Senior: Ya, tekan start."],
            th: ["พนักงาน: อยากสแกนเอกสารนี้ค่ะ/ครับ", "รุ่นพี่: กรุณาวางด้านหน้าคว่ำลงตรงนี้ค่ะ/ครับ", "พนักงาน: กดปุ่มนี้ใช่ไหมคะ/ครับ", "รุ่นพี่: ใช่ค่ะ/ครับ กดปุ่มเริ่มค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ဒီစာရွက်စာတမ်းကို စကင်ဖတ်ချင်ပါတယ်။", "အတွေ့အကြုံရှိဝန်ထမ်း: မျက်နှာဘက်ကို အောက်ဘက်ထားပြီး ဒီမှာ တင်ပေးပါ။", "ဝန်ထမ်း: ဒီခလုတ်ကို နှိပ်ရပါသလား။", "အတွေ့အကြုံရှိဝန်ထမ်း: ဟုတ်ကဲ့၊ စတင်ခလုတ်ကို နှိပ်ပေးပါ။"],
            km: ["បុគ្គលិក: ខ្ញុំចង់ស្កេនឯកសារនេះ។", "បុគ្គលិកជាន់ខ្ពស់: សូមដាក់នៅទីនេះ ដោយដាក់ផ្នែកមុខចុះក្រោម។", "បុគ្គលិក: តើខ្ញុំចុចប៊ូតុងនេះទេ?", "បុគ្គលិកជាន់ខ្ពស់: បាទ/ចាស សូមចុចប៊ូតុងចាប់ផ្តើម។"],
            ne: ["कर्मचारी: म यो कागजात स्क्यान गर्न चाहन्छु।", "वरिष्ठ कर्मचारी: अगाडिको भाग तल पारेर यहाँ राख्नुहोस्।", "कर्मचारी: यो बटन थिच्ने हो?", "वरिष्ठ कर्मचारी: हो, स्टार्ट थिच्नुहोस्।"],
            mn: ["Ажилтан: Би энэ бичиг баримтыг сканнердмаар байна.", "Ахлах ажилтан: Нүүрэн талыг нь доош харуулаад энд тавина уу.", "Ажилтан: Энэ товчийг дарах уу?", "Ахлах ажилтан: Тийм, эхлэх товчийг дарна уу."],
            si: ["සේවකයා: මට මේ ලේඛනය scan කරන්න ඕනේ.", "ජ්‍යෙෂ්ඨ සේවකයා: ඉදිරි පැත්ත පහළට කරලා මෙතැන තියන්න.", "සේවකයා: මේ button එක ඔබන්නද?", "ජ්‍යෙෂ්ඨ සේවකයා: ඔව්, start ඔබන්න."],
            bn: ["কর্মী: আমি এই নথিটি স্ক্যান করতে চাই।", "সিনিয়র কর্মী: সামনের দিক নিচে করে এখানে রাখুন।", "কর্মী: এই বোতাম চাপব?", "সিনিয়র কর্মী: হ্যাঁ, স্টার্ট চাপুন।"],
            pt: ["Funcionário: Quero escanear este documento.", "Funcionário experiente: Coloque aqui com a frente para baixo.", "Funcionário: Aperto este botão?", "Funcionário experiente: Sim, aperte iniciar."],
            es: ["Empleado: Quiero escanear este documento.", "Compañero con experiencia: Colóquelo aquí con la parte frontal hacia abajo.", "Empleado: ¿Presiono este botón?", "Compañero con experiencia: Sí, presione iniciar."],
            fr: ["Employé : Je veux scanner ce document.", "Collègue expérimenté : Placez-le ici, face vers le bas.", "Employé : J’appuie sur ce bouton ?", "Collègue expérimenté : Oui, appuyez sur démarrer."],
            ru: ["Сотрудник: Я хочу отсканировать этот документ.", "Старший сотрудник: Положите его сюда лицевой стороной вниз.", "Сотрудник: Нажать эту кнопку?", "Старший сотрудник: Да, нажмите старт."],
            uk: ["Працівник: Я хочу відсканувати цей документ.", "Старший працівник: Покладіть його сюди лицевою стороною вниз.", "Працівник: Натиснути цю кнопку?", "Старший працівник: Так, натисніть старт."]
        }
    ),

    makeA1WorkplaceMachinesDialogue(
        "a1_machine_006",
        "エラー表示が出た",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "機械にエラーが出ています。",
                target: "きかいにえらーがでています",
                ruby: "<ruby>機械<rt>きかい</rt></ruby>にエラーが<ruby>出<rt>で</rt></ruby>ています。",
                romaji: "Kikai ni erā ga dete imasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "赤いランプはついていますか。",
                target: "あかいらんぷはついていますか",
                ruby: "<ruby>赤<rt>あか</rt></ruby>いランプはついていますか。",
                romaji: "Akai ranpu wa tsuite imasu ka."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "はい、ついています。",
                target: "はい ついています",
                ruby: "はい、ついています。",
                romaji: "Hai, tsuite imasu."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "一度、止めてください。",
                target: "いちど とめてください",
                ruby: "<ruby>一度<rt>いちど</rt></ruby>、<ruby>止<rt>と</rt></ruby>めてください。",
                romaji: "Ichido, tomete kudasai."
            }
        ],
        {
            ja: ["社員：機械にエラーが出ています。", "先輩：赤いランプはついていますか。", "社員：はい、ついています。", "先輩：一度、止めてください。"],
            en: ["Worker: The machine is showing an error.", "Senior Worker: Is the red lamp on?", "Worker: Yes, it is on.", "Senior Worker: Please stop it once."],
            "zh-CN": ["员工：机器显示错误。", "前辈：红色指示灯亮着吗？", "员工：是的，亮着。", "前辈：请先停一下。"],
            "zh-TW": ["員工：機器顯示錯誤。", "前輩：紅色指示燈亮著嗎？", "員工：是的，亮著。", "前輩：請先停一下。"],
            ko: ["직원: 기계에 오류가 표시되어 있습니다.", "선배: 빨간 램프가 켜져 있나요?", "직원: 네, 켜져 있습니다.", "선배: 일단 멈춰 주세요."],
            vi: ["Nhân viên: Máy đang hiện lỗi.", "Người đi trước: Đèn đỏ có sáng không?", "Nhân viên: Vâng, có sáng.", "Người đi trước: Xin hãy dừng lại một lần."],
            tl: ["Worker: May error po sa machine.", "Senior worker: Nakabukas po ba ang pulang ilaw?", "Worker: Opo, nakabukas.", "Senior worker: Ihinto po muna."],
            id: ["Karyawan: Ada error di mesin.", "Senior: Apakah lampu merah menyala?", "Karyawan: Ya, menyala.", "Senior: Tolong hentikan dulu."],
            th: ["พนักงาน: เครื่องขึ้น error ค่ะ/ครับ", "รุ่นพี่: ไฟสีแดงติดอยู่ไหมคะ/ครับ", "พนักงาน: ใช่ค่ะ/ครับ ติดอยู่ค่ะ/ครับ", "รุ่นพี่: กรุณาหยุดก่อนค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: စက်မှာ error ပေါ်နေပါတယ်။", "အတွေ့အကြုံရှိဝန်ထမ်း: အနီရောင်မီးလင်းနေပါသလား။", "ဝန်ထမ်း: ဟုတ်ကဲ့၊ လင်းနေပါတယ်။", "အတွေ့အကြုံရှိဝန်ထမ်း: တစ်ခါ ရပ်ပေးပါ။"],
            km: ["បុគ្គលិក: ម៉ាស៊ីនបង្ហាញកំហុស។", "បុគ្គលិកជាន់ខ្ពស់: តើភ្លើងពណ៌ក្រហមភ្លឺទេ?", "បុគ្គលិក: បាទ/ចាស ភ្លឺ។", "បុគ្គលិកជាន់ខ្ពស់: សូមបញ្ឈប់មួយភ្លែត។"],
            ne: ["कर्मचारी: मेसिनमा एरर देखिएको छ।", "वरिष्ठ कर्मचारी: रातो बत्ती बलेको छ?", "कर्मचारी: हो, बलेको छ।", "वरिष्ठ कर्मचारी: एक पटक रोक्नुहोस्।"],
            mn: ["Ажилтан: Төхөөрөмж дээр алдаа гарч байна.", "Ахлах ажилтан: Улаан гэрэл ассан уу?", "Ажилтан: Тийм, ассан.", "Ахлах ажилтан: Түр зогсооно уу."],
            si: ["සේවකයා: යන්ත්‍රයේ error එකක් පෙන්වනවා.", "ජ්‍යෙෂ්ඨ සේවකයා: රතු light එක දැල්වෙනවද?", "සේවකයා: ඔව්, දැල්වෙනවා.", "ජ්‍යෙෂ්ඨ සේවකයා: එක් වරක් නවත්වන්න."],
            bn: ["কর্মী: মেশিনে এরর দেখাচ্ছে।", "সিনিয়র কর্মী: লাল আলো জ্বলছে?", "কর্মী: হ্যাঁ, জ্বলছে।", "সিনিয়র কর্মী: একবার বন্ধ করুন।"],
            pt: ["Funcionário: A máquina está mostrando um erro.", "Funcionário experiente: A luz vermelha está acesa?", "Funcionário: Sim, está acesa.", "Funcionário experiente: Pare uma vez, por favor."],
            es: ["Empleado: La máquina muestra un error.", "Compañero con experiencia: ¿Está encendida la luz roja?", "Empleado: Sí, está encendida.", "Compañero con experiencia: Deténgala una vez, por favor."],
            fr: ["Employé : La machine affiche une erreur.", "Collègue expérimenté : Le voyant rouge est-il allumé ?", "Employé : Oui, il est allumé.", "Collègue expérimenté : Arrêtez-la une fois, s’il vous plaît."],
            ru: ["Сотрудник: На машине отображается ошибка.", "Старший сотрудник: Красная лампа горит?", "Сотрудник: Да, горит.", "Старший сотрудник: Остановите её на время."],
            uk: ["Працівник: На машині показує помилку.", "Старший працівник: Червона лампа горить?", "Працівник: Так, горить.", "Старший працівник: Зупиніть її на час."]
        }
    ),

    makeA1WorkplaceMachinesDialogue(
        "a1_machine_007",
        "電源を切る",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "この機械の電源を切りますか。",
                target: "このきかいのでんげんをきりますか",
                ruby: "この<ruby>機械<rt>きかい</rt></ruby>の<ruby>電源<rt>でんげん</rt></ruby>を<ruby>切<rt>き</rt></ruby>りますか。",
                romaji: "Kono kikai no dengen o kirimasu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい、最後に切ってください。",
                target: "はい さいごにきってください",
                ruby: "はい、<ruby>最後<rt>さいご</rt></ruby>に<ruby>切<rt>き</rt></ruby>ってください。",
                romaji: "Hai, saigo ni kitte kudasai."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "長く押しますか。",
                target: "ながくおしますか",
                ruby: "<ruby>長<rt>なが</rt></ruby>く<ruby>押<rt>お</rt></ruby>しますか。",
                romaji: "Nagaku oshimasu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい、三秒くらい押してください。",
                target: "はい さんびょうくらいおしてください",
                ruby: "はい、<ruby>三秒<rt>さんびょう</rt></ruby>くらい<ruby>押<rt>お</rt></ruby>してください。",
                romaji: "Hai, san-byō kurai oshite kudasai."
            }
        ],
        {
            ja: ["社員：この機械の電源を切りますか。", "先輩：はい、最後に切ってください。", "社員：長く押しますか。", "先輩：はい、三秒くらい押してください。"],
            en: ["Worker: Should I turn off this machine?", "Senior Worker: Yes, please turn it off at the end.", "Worker: Do I hold the button?", "Senior Worker: Yes, press it for about three seconds."],
            "zh-CN": ["员工：这台机器要关电源吗？", "前辈：是的，最后请关掉。", "员工：要长按吗？", "前辈：是的，请按三秒左右。"],
            "zh-TW": ["員工：這台機器要關電源嗎？", "前輩：是的，最後請關掉。", "員工：要長按嗎？", "前輩：是的，請按三秒左右。"],
            ko: ["직원: 이 기계의 전원을 끄나요?", "선배: 네, 마지막에 꺼 주세요.", "직원: 길게 누르나요?", "선배: 네, 3초 정도 눌러 주세요."],
            vi: ["Nhân viên: Tôi tắt nguồn máy này phải không ạ?", "Người đi trước: Vâng, xin hãy tắt cuối cùng.", "Nhân viên: Tôi nhấn giữ phải không ạ?", "Người đi trước: Vâng, nhấn khoảng ba giây."],
            tl: ["Worker: Papatayin ko po ba ang power ng machine na ito?", "Senior worker: Oo, patayin po sa huli.", "Worker: Pipindutin po ba nang matagal?", "Senior worker: Oo, pindutin po nang mga tatlong segundo."],
            id: ["Karyawan: Apakah saya mematikan mesin ini?", "Senior: Ya, matikan di akhir.", "Karyawan: Apakah ditekan lama?", "Senior: Ya, tekan sekitar tiga detik."],
            th: ["พนักงาน: ต้องปิดเครื่องนี้ไหมคะ/ครับ", "รุ่นพี่: ใช่ค่ะ/ครับ ปิดตอนสุดท้ายค่ะ/ครับ", "พนักงาน: กดค้างไหมคะ/ครับ", "รุ่นพี่: ใช่ค่ะ/ครับ กดประมาณสามวินาทีค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ဒီစက်ရဲ့ ပါဝါကို ပိတ်ရပါသလား။", "အတွေ့အကြုံရှိဝန်ထမ်း: ဟုတ်ကဲ့၊ နောက်ဆုံးမှာ ပိတ်ပေးပါ။", "ဝန်ထမ်း: ကြာကြာနှိပ်ရပါသလား။", "အတွေ့အကြုံရှိဝန်ထမ်း: ဟုတ်ကဲ့၊ သုံးစက္ကန့်လောက် နှိပ်ပေးပါ။"],
            km: ["បុគ្គលិក: តើខ្ញុំត្រូវបិទភ្លើងម៉ាស៊ីននេះទេ?", "បុគ្គលិកជាន់ខ្ពស់: បាទ/ចាស សូមបិទនៅចុងក្រោយ។", "បុគ្គលិក: តើត្រូវចុចយូរទេ?", "បុគ្គលិកជាន់ខ្ពស់: បាទ/ចាស សូមចុចប្រហែលបីវិនាទី។"],
            ne: ["कर्मचारी: यो मेसिनको पावर बन्द गर्ने हो?", "वरिष्ठ कर्मचारी: हो, अन्त्यमा बन्द गर्नुहोस्।", "कर्मचारी: लामो समय थिच्ने हो?", "वरिष्ठ कर्मचारी: हो, करिब तीन सेकेन्ड थिच्नुहोस्।"],
            mn: ["Ажилтан: Энэ төхөөрөмжийн тэжээлийг унтраах уу?", "Ахлах ажилтан: Тийм, хамгийн сүүлд унтраагаарай.", "Ажилтан: Удаан дарах уу?", "Ахлах ажилтан: Тийм, гурван секунд орчим дараарай."],
            si: ["සේවකයා: මේ යන්ත්‍රයේ power එක off කරන්නද?", "ජ්‍යෙෂ්ඨ සේවකයා: ඔව්, අවසානයේ off කරන්න.", "සේවකයා: දිගටම ඔබන්නද?", "ජ්‍යෙෂ්ඨ සේවකයා: ඔව්, තත්පර තුනක් විතර ඔබන්න."],
            bn: ["কর্মী: এই মেশিনের পাওয়ার বন্ধ করব?", "সিনিয়র কর্মী: হ্যাঁ, শেষে বন্ধ করুন।", "কর্মী: লম্বা সময় চাপব?", "সিনিয়র কর্মী: হ্যাঁ, প্রায় তিন সেকেন্ড চাপুন।"],
            pt: ["Funcionário: Devo desligar esta máquina?", "Funcionário experiente: Sim, desligue no final.", "Funcionário: Devo segurar o botão?", "Funcionário experiente: Sim, pressione por cerca de três segundos."],
            es: ["Empleado: ¿Debo apagar esta máquina?", "Compañero con experiencia: Sí, apáguela al final.", "Empleado: ¿Mantengo presionado?", "Compañero con experiencia: Sí, presiónelo durante unos tres segundos."],
            fr: ["Employé : Dois-je éteindre cette machine ?", "Collègue expérimenté : Oui, éteignez-la à la fin.", "Employé : Dois-je appuyer longtemps ?", "Collègue expérimenté : Oui, appuyez environ trois secondes."],
            ru: ["Сотрудник: Нужно выключить эту машину?", "Старший сотрудник: Да, выключите в конце.", "Сотрудник: Долго нажимать?", "Старший сотрудник: Да, нажмите примерно на три секунды."],
            uk: ["Працівник: Потрібно вимкнути цю машину?", "Старший працівник: Так, вимкніть наприкінці.", "Працівник: Довго натискати?", "Старший працівник: Так, натисніть приблизно на три секунди."]
        }
    ),

    makeA1WorkplaceMachinesDialogue(
        "a1_machine_008",
        "使い方がわからない",
        [
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "すみません。使い方がわかりません。",
                target: "すみません つかいかたがわかりません",
                ruby: "すみません。<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>がわかりません。",
                romaji: "Sumimasen. Tsukaikata ga wakarimasen."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "大丈夫です。一緒にやりましょう。",
                target: "だいじょうぶです いっしょにやりましょう",
                ruby: "<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。<ruby>一緒<rt>いっしょ</rt></ruby>にやりましょう。",
                romaji: "Daijōbu desu. Issho ni yarimashō."
            },
            {
                label: "話者B",
                key: "worker",
                name: "社員",
                line: "先に見てもいいですか。",
                target: "さきにみてもいいですか",
                ruby: "<ruby>先<rt>さき</rt></ruby>に<ruby>見<rt>み</rt></ruby>てもいいですか。",
                romaji: "Saki ni mite mo ii desu ka."
            },
            {
                label: "話者A",
                key: "supervisor",
                name: "先輩",
                line: "はい、見てから使ってください。",
                target: "はい みてからつかってください",
                ruby: "はい、<ruby>見<rt>み</rt></ruby>てから<ruby>使<rt>つか</rt></ruby>ってください。",
                romaji: "Hai, mite kara tsukatte kudasai."
            }
        ],
        {
            ja: ["社員：すみません。使い方がわかりません。", "先輩：大丈夫です。一緒にやりましょう。", "社員：先に見てもいいですか。", "先輩：はい、見てから使ってください。"],
            en: ["Worker: Excuse me. I do not know how to use it.", "Senior Worker: It is okay. Let’s do it together.", "Worker: May I watch first?", "Senior Worker: Yes, please watch first and then use it."],
            "zh-CN": ["员工：不好意思。我不知道怎么用。", "前辈：没关系。我们一起做吧。", "员工：我可以先看一下吗？", "前辈：可以，请先看，然后再使用。"],
            "zh-TW": ["員工：不好意思。我不知道怎麼用。", "前輩：沒關係。我們一起做吧。", "員工：我可以先看一下嗎？", "前輩：可以，請先看，然後再使用。"],
            ko: ["직원: 죄송합니다. 사용법을 모르겠습니다.", "선배: 괜찮습니다. 같이 해 봅시다.", "직원: 먼저 봐도 될까요?", "선배: 네, 보고 나서 사용해 주세요."],
            vi: ["Nhân viên: Xin lỗi. Tôi không biết cách sử dụng.", "Người đi trước: Không sao. Chúng ta cùng làm nhé.", "Nhân viên: Tôi xem trước được không ạ?", "Người đi trước: Vâng, hãy xem trước rồi sử dụng."],
            tl: ["Worker: Excuse me. Hindi ko po alam kung paano gamitin.", "Senior worker: Ayos lang po. Gawin natin nang magkasama.", "Worker: Pwede po bang manood muna?", "Senior worker: Oo, manood muna po at saka gamitin."],
            id: ["Karyawan: Permisi. Saya tidak tahu cara menggunakannya.", "Senior: Tidak apa-apa. Mari kita lakukan bersama.", "Karyawan: Boleh saya lihat dulu?", "Senior: Ya, lihat dulu, lalu gunakan."],
            th: ["พนักงาน: ขอโทษค่ะ/ครับ ไม่ทราบวิธีใช้ค่ะ/ครับ", "รุ่นพี่: ไม่เป็นไรค่ะ/ครับ ทำด้วยกันค่ะ/ครับ", "พนักงาน: ขอดูก่อน ได้ไหมคะ/ครับ", "รุ่นพี่: ได้ค่ะ/ครับ ดูก่อนแล้วค่อยใช้ค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: တောင်းပန်ပါတယ်။ သုံးနည်းမသိပါ။", "အတွေ့အကြုံရှိဝန်ထမ်း: ရပါတယ်။ အတူတူ လုပ်ကြရအောင်။", "ဝန်ထမ်း: အရင်ကြည့်လို့ရပါသလား။", "အတွေ့အကြုံရှိဝန်ထမ်း: ရပါတယ်၊ အရင်ကြည့်ပြီးမှ သုံးပါ။"],
            km: ["បុគ្គលិក: សុំទោស។ ខ្ញុំមិនដឹងរបៀបប្រើទេ។", "បុគ្គលិកជាន់ខ្ពស់: មិនអីទេ។ យើងធ្វើជាមួយគ្នា។", "បុគ្គលិក: តើខ្ញុំអាចមើលមុនបានទេ?", "បុគ្គលិកជាន់ខ្ពស់: បាន សូមមើលមុន រួចប្រើ។"],
            ne: ["कर्मचारी: माफ गर्नुहोस्। प्रयोग गर्ने तरिका थाहा छैन।", "वरिष्ठ कर्मचारी: ठीक छ। सँगै गरौं।", "कर्मचारी: पहिले हेर्न मिल्छ?", "वरिष्ठ कर्मचारी: हुन्छ, पहिले हेरेर प्रयोग गर्नुहोस्।"],
            mn: ["Ажилтан: Уучлаарай. Яаж ашиглахаа мэдэхгүй байна.", "Ахлах ажилтан: Зүгээр. Хамтдаа хийцгээе.", "Ажилтан: Эхлээд харж болох уу?", "Ахлах ажилтан: Тийм, эхлээд хараад дараа нь ашиглаарай."],
            si: ["සේවකයා: සමාවෙන්න. භාවිතා කරන විදිය මට තේරෙන්නේ නැහැ.", "ජ්‍යෙෂ්ඨ සේවකයා: කමක් නැහැ. අපි එකට කරමු.", "සේවකයා: පළමුව බලන්න පුළුවන්ද?", "ජ්‍යෙෂ්ඨ සේවකයා: ඔව්, බලලා පසුව භාවිතා කරන්න."],
            bn: ["কর্মী: মাফ করবেন। আমি ব্যবহার করার পদ্ধতি জানি না।", "সিনিয়র কর্মী: সমস্যা নেই। আমরা একসাথে করি।", "কর্মী: আগে দেখতে পারি?", "সিনিয়র কর্মী: হ্যাঁ, আগে দেখে তারপর ব্যবহার করুন।"],
            pt: ["Funcionário: Com licença. Não sei como usar.", "Funcionário experiente: Tudo bem. Vamos fazer juntos.", "Funcionário: Posso ver primeiro?", "Funcionário experiente: Sim, veja primeiro e depois use."],
            es: ["Empleado: Disculpe. No sé cómo usarlo.", "Compañero con experiencia: Está bien. Hagámoslo juntos.", "Empleado: ¿Puedo mirar primero?", "Compañero con experiencia: Sí, mire primero y luego úselo."],
            fr: ["Employé : Excusez-moi. Je ne sais pas comment l’utiliser.", "Collègue expérimenté : Ce n’est pas grave. Faisons-le ensemble.", "Employé : Puis-je regarder d’abord ?", "Collègue expérimenté : Oui, regardez d’abord, puis utilisez-le."],
            ru: ["Сотрудник: Извините. Я не знаю, как пользоваться.", "Старший сотрудник: Ничего страшного. Давайте сделаем вместе.", "Сотрудник: Можно сначала посмотреть?", "Старший сотрудник: Да, сначала посмотрите, потом используйте."],
            uk: ["Працівник: Вибачте. Я не знаю, як користуватися.", "Старший працівник: Нічого страшного. Зробімо разом.", "Працівник: Можна спочатку подивитися?", "Старший працівник: Так, спочатку подивіться, потім використовуйте."]
        }
    )

];