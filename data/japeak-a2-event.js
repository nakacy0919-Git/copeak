// =====================================================
// Japeak A2 Level
// Scene: イベントに行ってみよう
// Category Key: a2_event
// =====================================================

const a2EventContext = {
    ja: "地域イベントや市民センターのイベントに参加するとき、受付、会場への行き方、プログラム、途中参加、休憩場所、屋台、アンケートなどについて話す日本語を練習します。",
    en: "Practice Japanese for joining local events or community center events, including reception, directions, programs, late arrival, rest areas, food stalls, and surveys.",
    "zh-CN": "练习参加地区活动或市民中心活动时，关于受付、会场路线、节目、中途参加、休息区、摊位和问卷等内容的日语。",
    "zh-TW": "練習參加地區活動或市民中心活動時，關於報到、會場路線、節目、中途參加、休息區、攤位和問卷等內容的日語。",
    ko: "지역 행사나 시민센터 행사에 참여할 때 접수, 행사장 가는 길, 프로그램, 중간 참가, 휴식 공간, 노점, 설문 등에 대해 말하는 일본어를 연습합니다.",
    vi: "Luyện tiếng Nhật khi tham gia sự kiện địa phương hoặc sự kiện ở trung tâm cộng đồng, gồm quầy tiếp tân, đường đến địa điểm, chương trình, đến muộn, khu nghỉ, quầy đồ ăn và khảo sát.",
    tl: "Practice ng Japanese sa pagpunta sa local events o community center events, tulad ng reception, directions, programs, late arrival, rest area, food stalls, at surveys.",
    id: "Latihan bahasa Jepang untuk mengikuti acara lokal atau acara di pusat komunitas, termasuk resepsionis, arah ke lokasi, program, datang terlambat, area istirahat, stan makanan, dan survei.",
    th: "ฝึกภาษาญี่ปุ่นเมื่อเข้าร่วมงานท้องถิ่นหรืองานที่ศูนย์ชุมชน เช่น การลงทะเบียน เส้นทางไปสถานที่ โปรแกรม การเข้าร่วมระหว่างงาน พื้นที่พัก ร้านอาหาร และแบบสอบถาม",
    my: "ဒေသဆိုင်ရာပွဲများ သို့မဟုတ် community center ပွဲများတွင် ပါဝင်ရာတွင်受付၊ သွားရာလမ်း၊ program၊ နောက်ကျရောက်ခြင်း၊ အနားယူရာနေရာ၊ အစားအသောက်ဆိုင်များနှင့် survey အကြောင်း ပြောရန် ဂျပန်စကားကို လေ့ကျင့်ခြင်း။",
    km: "ហាត់ភាសាជប៉ុនសម្រាប់ចូលរួមកម្មវិធីក្នុងតំបន់ ឬកម្មវិធីនៅមជ្ឈមណ្ឌលសហគមន៍ ដូចជា ការចុះឈ្មោះ ផ្លូវទៅកន្លែងកម្មវិធី កម្មវិធី ការចូលរួមយឺត កន្លែងសម្រាក តូបអាហារ និងសំណួរស្ទង់មតិ។",
    ne: "स्थानीय कार्यक्रम वा सामुदायिक केन्द्रको कार्यक्रममा सहभागी हुँदा受付, कार्यक्रमस्थल जाने बाटो, कार्यक्रम, ढिलो पुग्दा, विश्राम ठाउँ, खाना स्टल र सर्वेक्षणबारे बोल्ने जापानी अभ्यास।",
    mn: "Орон нутгийн арга хэмжээ эсвэл community center-ийн арга хэмжээнд оролцох үед бүртгэл, очих зам, хөтөлбөр, хоцорч очих, амрах газар, хоолны лангуу, санал асуулгын талаар ярих япон хэлний дадлага.",
    si: "local events හෝ community center events වලට යන විට reception, directions, programs, late arrival, rest areas, food stalls සහ surveys ගැන කතා කිරීමට අවශ්‍ය ජපන් භාෂා පුහුණුව.",
    bn: "স্থানীয় অনুষ্ঠান বা কমিউনিটি সেন্টারের অনুষ্ঠানে যাওয়ার সময়受付, পথনির্দেশ, প্রোগ্রাম, দেরিতে পৌঁছানো, বিশ্রাম স্থান, খাবারের স্টল এবং জরিপ নিয়ে জাপানি অনুশীলন।",
    pt: "Prática de japonês para participar de eventos locais ou de centros comunitários, incluindo recepção, caminho até o local, programação, chegada atrasada, área de descanso, barracas de comida e questionário.",
    es: "Práctica de japonés para participar en eventos locales o de centros comunitarios, incluyendo recepción, camino al lugar, programas, llegada tarde, zona de descanso, puestos de comida y encuesta.",
    fr: "Entraînement en japonais pour participer à des événements locaux ou dans un centre communautaire : accueil, itinéraire, programme, arrivée en retard, espace de repos, stands de nourriture et questionnaire.",
    ru: "Практика японского языка для участия в местных мероприятиях или событиях в общественном центре: регистрация, дорога к месту, программа, опоздание, зона отдыха, киоски с едой и анкета.",
    uk: "Практика японської мови для участі в місцевих заходах або подіях у громадському центрі: реєстрація, дорога до місця, програма, запізнення, зона відпочинку, кіоски з їжею та анкета."
};

const a2EventSpeakerNames = {
    staff: {
        ja: "スタッフ", en: "Staff", "zh-CN": "工作人员", "zh-TW": "工作人員", ko: "스태프",
        vi: "Nhân viên", tl: "Staff", id: "Staf", th: "เจ้าหน้าที่",
        my: "ဝန်ထမ်း", km: "បុគ្គលិក", ne: "कर्मचारी", mn: "Ажилтан",
        si: "කාර්ය මණ්ඩලය", bn: "কর্মী", pt: "Funcionário", es: "Personal",
        fr: "Personnel", ru: "Сотрудник", uk: "Працівник"
    },
    visitor: {
        ja: "参加者", en: "Visitor", "zh-CN": "参加者", "zh-TW": "參加者", ko: "참가자",
        vi: "Người tham gia", tl: "Participant", id: "Peserta", th: "ผู้เข้าร่วม",
        my: "ပါဝင်သူ", km: "អ្នកចូលរួម", ne: "सहभागी", mn: "Оролцогч",
        si: "සහභාගීවන්නා", bn: "অংশগ্রহণকারী", pt: "Participante", es: "Participante",
        fr: "Participant", ru: "Участник", uk: "Учасник"
    }
};

function makeA2EventDialogue(id, title, dialogue, dialogueTranslations) {
    const translations = {};
    Object.keys(dialogueTranslations).forEach(lang => {
        translations[lang] = dialogueTranslations[lang].join("\n");
    });

    return {
        id,
        audio: `audio/${id}.mp3`,
        title,
        category: "a2_event",
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
            speakerNames: a2EventSpeakerNames[t.key] || { ja: t.name },
            line: t.line,
            target: t.target,
            ruby: t.ruby,
            romaji: t.romaji
        })),
        context: a2EventContext,
        translations,
        dialogueTranslations
    };
}

const japeakA2EventData = [

    makeA2EventDialogue(
        "a2_event_001",
        "イベント情報を確認する",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "週末のイベントについて聞きたいです。",
                target: "しゅうまつのいべんとについてききたいです",
                ruby: "<ruby>週末<rt>しゅうまつ</rt></ruby>のイベントについて<ruby>聞<rt>き</rt></ruby>きたいです。",
                romaji: "Shūmatsu no ibento ni tsuite kikitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "市民センターで国際交流フェスタがあります。",
                target: "しみんせんたーでこくさいこうりゅうふぇすたがあります",
                ruby: "<ruby>市民<rt>しみん</rt></ruby>センターで<ruby>国際交流<rt>こくさいこうりゅう</rt></ruby>フェスタがあります。",
                romaji: "Shimin sentā de kokusai kōryū fesuta ga arimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "予約が必要かどうか教えていただけますか。",
                target: "よやくがひつようかどうかおしえていただけますか",
                ruby: "<ruby>予約<rt>よやく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>かどうか<ruby>教<rt>おし</rt></ruby>えていただけますか。",
                romaji: "Yoyaku ga hitsuyō ka dō ka oshiete itadakemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "入場は無料ですが、ワークショップだけ予約が必要です。",
                target: "にゅうじょうはむりょうですが わーくしょっぷだけよやくがひつようです",
                ruby: "<ruby>入場<rt>にゅうじょう</rt></ruby>は<ruby>無料<rt>むりょう</rt></ruby>ですが、ワークショップだけ<ruby>予約<rt>よやく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。",
                romaji: "Nyūjō wa muryō desu ga, wākushoppu dake yoyaku ga hitsuyō desu."
            }
        ],
        {
            ja: ["参加者：週末のイベントについて聞きたいです。", "スタッフ：市民センターで国際交流フェスタがあります。", "参加者：予約が必要かどうか教えていただけますか。", "スタッフ：入場は無料ですが、ワークショップだけ予約が必要です。"],
            en: ["Visitor: I would like to ask about the event this weekend.", "Staff: There will be an international exchange festival at the community center.", "Visitor: Could you tell me whether a reservation is required?", "Staff: Admission is free, but reservations are required only for the workshops."],
            "zh-CN": ["参加者：我想了解周末的活动。", "工作人员：市民中心有国际交流节。", "参加者：可以告诉我是否需要预约吗？", "工作人员：入场免费，但只有工作坊需要预约。"],
            "zh-TW": ["參加者：我想了解週末的活動。", "工作人員：市民中心有國際交流節。", "參加者：可以告訴我是否需要預約嗎？", "工作人員：入場免費，但只有工作坊需要預約。"],
            ko: ["참가자: 주말 행사에 대해 묻고 싶습니다.", "스태프: 시민센터에서 국제교류 페스타가 있습니다.", "참가자: 예약이 필요한지 알려 주실 수 있나요?", "스태프: 입장은 무료이지만 워크숍만 예약이 필요합니다."],
            vi: ["Người tham gia: Tôi muốn hỏi về sự kiện cuối tuần.", "Nhân viên: Ở trung tâm cộng đồng sẽ có lễ hội giao lưu quốc tế.", "Người tham gia: Anh/chị có thể cho tôi biết có cần đặt trước không ạ?", "Nhân viên: Vào cửa miễn phí, nhưng chỉ workshop là cần đặt trước."],
            tl: ["Participant: Gusto ko pong magtanong tungkol sa event ngayong weekend.", "Staff: May international exchange festival po sa community center.", "Participant: Maaari po bang sabihin kung kailangan ng reservation?", "Staff: Libre po ang entrance, pero kailangan ng reservation para sa workshop lang."],
            id: ["Peserta: Saya ingin bertanya tentang acara akhir pekan.", "Staf: Akan ada festival pertukaran internasional di pusat komunitas.", "Peserta: Bisakah Anda memberi tahu apakah perlu reservasi?", "Staf: Masuknya gratis, tetapi hanya workshop yang memerlukan reservasi."],
            th: ["ผู้เข้าร่วม: อยากสอบถามเกี่ยวกับงานสุดสัปดาห์ค่ะ/ครับ", "เจ้าหน้าที่: จะมีงานเทศกาลแลกเปลี่ยนนานาชาติที่ศูนย์ชุมชนค่ะ/ครับ", "ผู้เข้าร่วม: ช่วยบอกได้ไหมคะ/ครับว่าต้องจองหรือไม่", "เจ้าหน้าที่: เข้าฟรีค่ะ/ครับ แต่เฉพาะ workshop ต้องจองค่ะ/ครับ"],
            my: ["ပါဝင်သူ: စနေ၊ တနင်္ဂနွေပွဲအကြောင်း မေးချင်ပါတယ်။", "ဝန်ထမ်း: community center မှာ နိုင်ငံတကာ交流 festival ရှိပါတယ်။", "ပါဝင်သူ: ကြိုတင် booking လိုမလို ပြောပြပေးနိုင်ပါသလား။", "ဝန်ထမ်း: ဝင်ကြေးအခမဲ့ပါ၊ ဒါပေမယ့် workshop ပဲ booking လိုပါတယ်။"],
            km: ["អ្នកចូលរួម: ខ្ញុំចង់សួរអំពីកម្មវិធីចុងសប្តាហ៍។", "បុគ្គលិក: នៅមជ្ឈមណ្ឌលសហគមន៍ មានពិធីបុណ្យប្តូរវប្បធម៌អន្តរជាតិ។", "អ្នកចូលរួម: តើអាចប្រាប់ខ្ញុំបានទេថាត្រូវកក់ទុកឬអត់?", "បុគ្គលិក: ចូលរួមឥតគិតថ្លៃ ប៉ុន្តែ workshop តែប៉ុណ្ណោះត្រូវកក់ទុក។"],
            ne: ["सहभागी: म सप्ताहन्तको कार्यक्रमबारे सोध्न चाहन्छु।", "कर्मचारी: सामुदायिक केन्द्रमा अन्तर्राष्ट्रिय आदानप्रदान फेस्टा हुन्छ।", "सहभागी: आरक्षण आवश्यक छ कि छैन बताइदिन सक्नुहुन्छ?", "कर्मचारी: प्रवेश निःशुल्क हो, तर workshop मात्र आरक्षण आवश्यक छ।"],
            mn: ["Оролцогч: Амралтын өдрийн арга хэмжээний талаар асуумаар байна.", "Ажилтан: Community center дээр олон улсын交流 фестиваль болно.", "Оролцогч: Захиалга хэрэгтэй эсэхийг хэлж өгч болох уу?", "Ажилтан: Орох нь үнэгүй, харин workshop-д л захиалга хэрэгтэй."],
            si: ["සහභාගීවන්නා: සති අන්තයේ event එක ගැන අහන්න ඕනේ.", "කාර්ය මණ්ඩලය: community center එකේ international exchange festival එකක් තියෙනවා.", "සහභාගීවන්නා: reservation අවශ්‍යද නැද්ද කියලා කියලා දෙන්න පුළුවන්ද?", "කාර්ය මණ්ඩලය: ඇතුල්වීම නොමිලේ, නමුත් workshop එකට පමණක් reservation අවශ්‍යයි."],
            bn: ["অংশগ্রহণকারী: সপ্তাহান্তের অনুষ্ঠান সম্পর্কে জানতে চাই।", "কর্মী: কমিউনিটি সেন্টারে আন্তর্জাতিক বিনিময় উৎসব আছে।", "অংশগ্রহণকারী: রিজার্ভেশন দরকার কি না জানাতে পারবেন?", "কর্মী: প্রবেশ বিনামূল্যে, তবে শুধু workshop-এর জন্য রিজার্ভেশন দরকার।"],
            pt: ["Participante: Gostaria de perguntar sobre o evento do fim de semana.", "Funcionário: Haverá um festival de intercâmbio internacional no centro comunitário.", "Participante: Poderia me dizer se é necessário fazer reserva?", "Funcionário: A entrada é gratuita, mas apenas os workshops precisam de reserva."],
            es: ["Participante: Quisiera preguntar sobre el evento del fin de semana.", "Personal: Habrá un festival de intercambio internacional en el centro comunitario.", "Participante: ¿Podría decirme si se necesita reserva?", "Personal: La entrada es gratuita, pero solo los talleres necesitan reserva."],
            fr: ["Participant : Je voudrais me renseigner sur l’événement du week-end.", "Personnel : Il y aura un festival d’échanges internationaux au centre communautaire.", "Participant : Pourriez-vous me dire si une réservation est nécessaire ?", "Personnel : L’entrée est gratuite, mais seuls les ateliers nécessitent une réservation."],
            ru: ["Участник: Я хотел бы узнать о мероприятии на выходных.", "Сотрудник: В общественном центре будет фестиваль международного обмена.", "Участник: Не могли бы вы сказать, нужна ли регистрация?", "Сотрудник: Вход бесплатный, но только на мастер-классы нужна запись."],
            uk: ["Учасник: Я хотів би дізнатися про захід на вихідних.", "Працівник: У громадському центрі буде фестиваль міжнародного обміну.", "Учасник: Чи могли б ви сказати, чи потрібне бронювання?", "Працівник: Вхід безкоштовний, але лише на workshop потрібне бронювання."]
        }
    ),

    makeA2EventDialogue(
        "a2_event_002",
        "受付で名前を書く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "受付はどこでできますか。",
                target: "うけつけはどこでできますか",
                ruby: "<ruby>受付<rt>うけつけ</rt></ruby>はどこでできますか。",
                romaji: "Uketsuke wa doko de dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "入口の右側で、名簿に名前を書いてください。",
                target: "いりぐちのみぎがわで めいぼになまえをかいてください",
                ruby: "<ruby>入口<rt>いりぐち</rt></ruby>の<ruby>右側<rt>みぎがわ</rt></ruby>で、<ruby>名簿<rt>めいぼ</rt></ruby>に<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。",
                romaji: "Iriguchi no migigawa de, meibo ni namae o kaite kudasai."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "友だちと一緒に入っても大丈夫ですか。",
                target: "ともだちといっしょにはいってもだいじょうぶですか",
                ruby: "<ruby>友<rt>とも</rt></ruby>だちと<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Tomodachi to issho ni haitte mo daijōbu desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "はい、人数を受付で伝えてください。",
                target: "はい にんずうをうけつけでつたえてください",
                ruby: "はい、<ruby>人数<rt>にんずう</rt></ruby>を<ruby>受付<rt>うけつけ</rt></ruby>で<ruby>伝<rt>つた</rt></ruby>えてください。",
                romaji: "Hai, ninzū o uketsuke de tsutaete kudasai."
            }
        ],
        {
            ja: ["参加者：受付はどこでできますか。", "スタッフ：入口の右側で、名簿に名前を書いてください。", "参加者：友だちと一緒に入っても大丈夫ですか。", "スタッフ：はい、人数を受付で伝えてください。"],
            en: ["Visitor: Where can I check in?", "Staff: Please write your name on the list on the right side of the entrance.", "Visitor: Is it okay to enter with my friend?", "Staff: Yes, please tell the reception desk how many people are entering."],
            "zh-CN": ["参加者：在哪里受付？", "工作人员：请在入口右侧的名簿上写名字。", "参加者：可以和朋友一起进去吗？", "工作人员：可以，请在受付处告诉人数。"],
            "zh-TW": ["參加者：在哪裡報到？", "工作人員：請在入口右側的名簿上寫名字。", "參加者：可以和朋友一起進去嗎？", "工作人員：可以，請在報到處告訴人數。"],
            ko: ["참가자: 접수는 어디에서 할 수 있나요?", "스태프: 입구 오른쪽에서 명부에 이름을 적어 주세요.", "참가자: 친구와 함께 들어가도 괜찮나요?", "스태프: 네, 인원수를 접수처에서 말씀해 주세요."],
            vi: ["Người tham gia: Tôi có thể làm thủ tục ở đâu ạ?", "Nhân viên: Xin hãy viết tên vào danh sách ở bên phải lối vào.", "Người tham gia: Tôi vào cùng bạn có được không ạ?", "Nhân viên: Vâng, xin hãy báo số người tại quầy tiếp tân."],
            tl: ["Participant: Saan po ang reception?", "Staff: Sa kanang bahagi ng entrance, pakisulat po ang pangalan sa list.", "Participant: Okay lang po bang pumasok kasama ang kaibigan ko?", "Staff: Oo, pakisabi po sa reception kung ilan kayo."],
            id: ["Peserta: Di mana saya bisa melakukan registrasi?", "Staf: Silakan tulis nama Anda di daftar di sisi kanan pintu masuk.", "Peserta: Apakah boleh masuk bersama teman?", "Staf: Ya, beri tahu jumlah orang di resepsionis."],
            th: ["ผู้เข้าร่วม: ลงทะเบียนได้ที่ไหนคะ/ครับ", "เจ้าหน้าที่: กรุณาเขียนชื่อในรายชื่อทางขวาของทางเข้าค่ะ/ครับ", "ผู้เข้าร่วม: เข้าไปพร้อมเพื่อนได้ไหมคะ/ครับ", "เจ้าหน้าที่: ได้ค่ะ/ครับ กรุณาแจ้งจำนวนคนที่จุด受付ค่ะ/ครับ"],
            my: ["ပါဝင်သူ:受付ကို ဘယ်မှာ လုပ်ရမလဲ။", "ဝန်ထမ်း: ဝင်ပေါက်ညာဘက်မှာ နာမည်စာရင်းထဲ နာမည်ရေးပေးပါ။", "ပါဝင်သူ: သူငယ်ချင်းနဲ့အတူ ဝင်လို့ရပါသလား။", "ဝန်ထမ်း: ရပါတယ်၊ လူဦးရေကို受付မှာ ပြောပေးပါ။"],
            km: ["អ្នកចូលរួម: តើអាចចុះឈ្មោះនៅឯណា?", "បុគ្គលិក: សូមសរសេរឈ្មោះក្នុងបញ្ជីនៅខាងស្តាំច្រកចូល។", "អ្នកចូលរួម: តើអាចចូលជាមួយមិត្តភក្តិបានទេ?", "បុគ្គលិក: បាន សូមប្រាប់ចំនួនមនុស្សនៅកន្លែងចុះឈ្មោះ។"],
            ne: ["सहभागी:受付 कहाँ गर्न सकिन्छ?", "कर्मचारी: प्रवेशद्वारको दायाँपट्टि नामावलीमा नाम लेख्नुहोस्।", "सहभागी: साथी सँगै भित्र जान मिल्छ?", "कर्मचारी: मिल्छ,受付मा人数 बताउनुहोस्।"],
            mn: ["Оролцогч: Бүртгэл хаана хийх вэ?", "Ажилтан: Орцны баруун талд нэрсийн жагсаалтад нэрээ бичнэ үү.", "Оролцогч: Найзтайгаа хамт орж болох уу?", "Ажилтан: Тийм, хэдэн хүн гэдгээ бүртгэл дээр хэлнэ үү."],
            si: ["සහභාගීවන්නා: reception එක කොහෙද කරන්න පුළුවන්?", "කාර්ය මණ්ඩලය: entrance එකේ දකුණු පැත්තේ list එකට නම ලියන්න.", "සහභාගීවන්නා: මිතුරාත් එක්ක ඇතුල් වෙන්න හරිද?", "කාර්ය මණ්ඩලය: ඔව්, reception එකට පුද්ගලයන් ගණන කියන්න."],
            bn: ["অংশগ্রহণকারী:受付 কোথায় করা যাবে?", "কর্মী: প্রবেশপথের ডান পাশে নামের তালিকায় নাম লিখুন।", "অংশগ্রহণকারী: বন্ধুর সঙ্গে ঢোকা যাবে?", "কর্মী: হ্যাঁ,受付-এ人数 জানান।"],
            pt: ["Participante: Onde posso fazer a recepção?", "Funcionário: Escreva seu nome na lista à direita da entrada.", "Participante: Posso entrar junto com meu amigo?", "Funcionário: Sim, informe o número de pessoas na recepção."],
            es: ["Participante: ¿Dónde puedo registrarme?", "Personal: Escriba su nombre en la lista a la derecha de la entrada.", "Participante: ¿Puedo entrar con mi amigo?", "Personal: Sí, diga el número de personas en la recepción."],
            fr: ["Participant : Où puis-je faire l’accueil ?", "Personnel : Veuillez écrire votre nom sur la liste à droite de l’entrée.", "Participant : Puis-je entrer avec mon ami ?", "Personnel : Oui, veuillez indiquer le nombre de personnes à l’accueil."],
            ru: ["Участник: Где можно зарегистрироваться?", "Сотрудник: Пожалуйста, напишите имя в списке справа от входа.", "Участник: Можно войти вместе с другом?", "Сотрудник: Да, сообщите количество людей на регистрации."],
            uk: ["Учасник: Де можна зареєструватися?", "Працівник: Будь ласка, напишіть ім’я у списку праворуч від входу.", "Учасник: Можна зайти разом із другом?", "Працівник: Так, повідомте кількість людей на реєстрації."]
        }
    ),

    makeA2EventDialogue(
        "a2_event_003",
        "会場までの行き方を聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "会場までは駅から歩けますか。",
                target: "かいじょうまではえきからあるけますか",
                ruby: "<ruby>会場<rt>かいじょう</rt></ruby>までは<ruby>駅<rt>えき</rt></ruby>から<ruby>歩<rt>ある</rt></ruby>けますか。",
                romaji: "Kaijō made wa eki kara arukemasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "徒歩で十五分くらいですが、無料バスも出ています。",
                target: "とほでじゅうごふんくらいですが むりょうばすもでています",
                ruby: "<ruby>徒歩<rt>とほ</rt></ruby>で<ruby>十五分<rt>じゅうごふん</rt></ruby>くらいですが、<ruby>無料<rt>むりょう</rt></ruby>バスも<ruby>出<rt>で</rt></ruby>ています。",
                romaji: "Toho de jūgo-fun kurai desu ga, muryō basu mo dete imasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "雨が降っているので、バスを使いたいです。",
                target: "あめがふっているので ばすをつかいたいです",
                ruby: "<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っているので、バスを<ruby>使<rt>つか</rt></ruby>いたいです。",
                romaji: "Ame ga futte iru node, basu o tsukaitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "駅の南口から十分おきに出ています。",
                target: "えきのみなみぐちからじゅっぷんおきにでています",
                ruby: "<ruby>駅<rt>えき</rt></ruby>の<ruby>南口<rt>みなみぐち</rt></ruby>から<ruby>十分<rt>じゅっぷん</rt></ruby>おきに<ruby>出<rt>で</rt></ruby>ています。",
                romaji: "Eki no minami-guchi kara juppun oki ni dete imasu."
            }
        ],
        {
            ja: ["参加者：会場までは駅から歩けますか。", "スタッフ：徒歩で十五分くらいですが、無料バスも出ています。", "参加者：雨が降っているので、バスを使いたいです。", "スタッフ：駅の南口から十分おきに出ています。"],
            en: ["Visitor: Can I walk from the station to the venue?", "Staff: It is about 15 minutes on foot, but there is also a free bus.", "Visitor: Since it is raining, I would like to use the bus.", "Staff: It leaves from the station’s south exit every ten minutes."],
            "zh-CN": ["参加者：从车站可以走到会场吗？", "工作人员：步行大约十五分钟，但也有免费巴士。", "参加者：因为在下雨，所以我想坐巴士。", "工作人员：从车站南口每十分钟发车一次。"],
            "zh-TW": ["參加者：從車站可以走到會場嗎？", "工作人員：步行大約十五分鐘，但也有免費巴士。", "參加者：因為在下雨，所以我想搭巴士。", "工作人員：從車站南口每十分鐘發車一次。"],
            ko: ["참가자: 행사장까지 역에서 걸어갈 수 있나요?", "스태프: 도보로 15분 정도지만 무료 버스도 운행하고 있습니다.", "참가자: 비가 오고 있어서 버스를 이용하고 싶습니다.", "스태프: 역 남쪽 출구에서 10분 간격으로 출발합니다."],
            vi: ["Người tham gia: Từ ga có thể đi bộ đến địa điểm không ạ?", "Nhân viên: Đi bộ khoảng 15 phút, nhưng cũng có xe buýt miễn phí.", "Người tham gia: Vì trời đang mưa nên tôi muốn dùng xe buýt.", "Nhân viên: Xe xuất phát từ cửa nam của ga mỗi 10 phút."],
            tl: ["Participant: Pwede po bang lakarin mula station hanggang venue?", "Staff: Mga 15 minutes po kung lalakarin, pero may free bus din po.", "Participant: Umuulan po kaya gusto kong gumamit ng bus.", "Staff: Umaalis po ito mula sa south exit ng station bawat 10 minutes."],
            id: ["Peserta: Apakah bisa berjalan kaki dari stasiun ke lokasi acara?", "Staf: Sekitar 15 menit berjalan kaki, tetapi ada juga bus gratis.", "Peserta: Karena sedang hujan, saya ingin menggunakan bus.", "Staf: Bus berangkat dari pintu selatan stasiun setiap sepuluh menit."],
            th: ["ผู้เข้าร่วม: จากสถานีเดินไปถึงสถานที่จัดงานได้ไหมคะ/ครับ", "เจ้าหน้าที่: เดินประมาณ 15 นาที แต่มีรถบัสฟรีด้วยค่ะ/ครับ", "ผู้เข้าร่วม: ฝนตกอยู่ เลยอยากใช้รถบัสค่ะ/ครับ", "เจ้าหน้าที่: รถออกจากทางออกทิศใต้ของสถานีทุก 10 นาทีค่ะ/ครับ"],
            my: ["ပါဝင်သူ: ပွဲနေရာအထိ ဘူတာကနေ လမ်းလျှောက်လို့ရပါသလား။", "ဝန်ထမ်း: လမ်းလျှောက်ရင် ၁၅ မိနစ်လောက်ပါ၊ ဒါပေမယ့် အခမဲ့ bus လည်း ရှိပါတယ်။", "ပါဝင်သူ: မိုးရွာနေလို့ bus သုံးချင်ပါတယ်။", "ဝန်ထမ်း: ဘူတာတောင်ဘက်ထွက်ပေါက်ကနေ ၁၀ မိနစ်တိုင်း ထွက်ပါတယ်။"],
            km: ["អ្នកចូលរួម: តើអាចដើរពីស្ថានីយ៍ទៅកន្លែងកម្មវិធីបានទេ?", "បុគ្គលិក: ប្រហែល 15 នាទីដោយដើរ ប៉ុន្តែក៏មានឡានក្រុងឥតគិតថ្លៃដែរ។", "អ្នកចូលរួម: ព្រោះកំពុងភ្លៀង ខ្ញុំចង់ប្រើឡានក្រុង។", "បុគ្គលិក: វាចេញពីច្រកខាងត្បូងស្ថានីយ៍រៀងរាល់ 10 នាទី។"],
            ne: ["सहभागी: कार्यक्रमस्थलसम्म स्टेशनबाट हिँडेर जान सकिन्छ?", "कर्मचारी: पैदल करिब १५ मिनेट हो, तर निःशुल्क बस पनि छ।", "सहभागी: पानी परिरहेकोले बस प्रयोग गर्न चाहन्छु।", "कर्मचारी: स्टेशनको दक्षिणी निकासबाट हरेक १० मिनेटमा छुट्छ।"],
            mn: ["Оролцогч: Арга хэмжээний газар хүртэл буудлаас алхаж болох уу?", "Ажилтан: Алхвал 15 минут орчим, гэхдээ үнэгүй автобус ч явдаг.", "Оролцогч: Бороо орж байгаа болохоор автобусаар явмаар байна.", "Ажилтан: Буудлын өмнөд гарцаас 10 минут тутамд явдаг."],
            si: ["සහභාගීවන්නා: venue එකට station එකෙන් ඇවිදින්න පුළුවන්ද?", "කාර්ය මණ්ඩලය: පයින් මිනිත්තු 15ක් වගේ, නමුත් free bus එකකුත් තියෙනවා.", "සහභාගීවන්නා: වැස්ස නිසා bus එක භාවිතා කරන්න ඕනේ.", "කාර්ය මණ්ඩලය: station එකේ south exit එකෙන් මිනිත්තු 10කට වරක් පිටත් වෙනවා."],
            bn: ["অংশগ্রহণকারী: স্টেশন থেকে অনুষ্ঠানের স্থানে হাঁটা যায়?", "কর্মী: হাঁটলে প্রায় ১৫ মিনিট, তবে বিনামূল্যে বাসও আছে।", "অংশগ্রহণকারী: বৃষ্টি হচ্ছে, তাই বাস ব্যবহার করতে চাই।", "কর্মী: স্টেশনের দক্ষিণ গেট থেকে প্রতি ১০ মিনিটে ছাড়ে।"],
            pt: ["Participante: Dá para ir a pé da estação até o local?", "Funcionário: A pé leva cerca de 15 minutos, mas também há ônibus gratuito.", "Participante: Como está chovendo, gostaria de usar o ônibus.", "Funcionário: Ele sai da saída sul da estação a cada dez minutos."],
            es: ["Participante: ¿Se puede caminar desde la estación hasta el lugar?", "Personal: A pie son unos 15 minutos, pero también hay autobús gratuito.", "Participante: Como está lloviendo, quiero usar el autobús.", "Personal: Sale de la salida sur de la estación cada diez minutos."],
            fr: ["Participant : Peut-on marcher depuis la gare jusqu’au lieu de l’événement ?", "Personnel : C’est environ 15 minutes à pied, mais il y a aussi un bus gratuit.", "Participant : Comme il pleut, je voudrais prendre le bus.", "Personnel : Il part de la sortie sud de la gare toutes les dix minutes."],
            ru: ["Участник: Можно дойти пешком от станции до места проведения?", "Сотрудник: Пешком около 15 минут, но есть и бесплатный автобус.", "Участник: Так как идёт дождь, я хочу воспользоваться автобусом.", "Сотрудник: Он отправляется от южного выхода станции каждые десять минут."],
            uk: ["Учасник: Можна дійти пішки від станції до місця проведення?", "Працівник: Пішки близько 15 хвилин, але є й безкоштовний автобус.", "Учасник: Оскільки йде дощ, я хочу скористатися автобусом.", "Працівник: Він відправляється від південного виходу станції кожні десять хвилин."]
        }
    ),

    makeA2EventDialogue(
        "a2_event_004",
        "プログラムを選ぶ",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "どのプログラムから参加すればいいか迷っています。",
                target: "どのぷろぐらむからさんかすればいいかまよっています",
                ruby: "どのプログラムから<ruby>参加<rt>さんか</rt></ruby>すればいいか<ruby>迷<rt>まよ</rt></ruby>っています。",
                romaji: "Dono puroguramu kara sanka sureba ii ka mayotte imasu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "初めてなら、体験コーナーがおすすめです。",
                target: "はじめてなら たいけんこーなーがおすすめです",
                ruby: "<ruby>初<rt>はじ</rt></ruby>めてなら、<ruby>体験<rt>たいけん</rt></ruby>コーナーがおすすめです。",
                romaji: "Hajimete nara, taiken kōnā ga osusume desu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "日本語がまだ得意ではありませんが、大丈夫ですか。",
                target: "にほんごがまだとくいではありませんが だいじょうぶですか",
                ruby: "<ruby>日本語<rt>にほんご</rt></ruby>がまだ<ruby>得意<rt>とくい</rt></ruby>ではありませんが、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
                romaji: "Nihongo ga mada tokui de wa arimasen ga, daijōbu desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "スタッフがそばで説明しますので、安心してください。",
                target: "すたっふがそばでせつめいしますので あんしんしてください",
                ruby: "スタッフがそばで<ruby>説明<rt>せつめい</rt></ruby>しますので、<ruby>安心<rt>あんしん</rt></ruby>してください。",
                romaji: "Sutaffu ga soba de setsumei shimasu node, anshin shite kudasai."
            }
        ],
        {
            ja: ["参加者：どのプログラムから参加すればいいか迷っています。", "スタッフ：初めてなら、体験コーナーがおすすめです。", "参加者：日本語がまだ得意ではありませんが、大丈夫ですか。", "スタッフ：スタッフがそばで説明しますので、安心してください。"],
            en: ["Visitor: I am not sure which program I should join first.", "Staff: If this is your first time, the hands-on corner is recommended.", "Visitor: I am not very good at Japanese yet. Is that okay?", "Staff: Staff will explain nearby, so please do not worry."],
            "zh-CN": ["参加者：我不知道应该先参加哪个节目。", "工作人员：如果是第一次，推荐体验区。", "参加者：我的日语还不太好，可以吗？", "工作人员：工作人员会在旁边说明，请放心。"],
            "zh-TW": ["參加者：我不知道應該先參加哪個節目。", "工作人員：如果是第一次，推薦體驗區。", "參加者：我的日語還不太好，可以嗎？", "工作人員：工作人員會在旁邊說明，請放心。"],
            ko: ["참가자: 어떤 프로그램부터 참여하면 좋을지 고민하고 있습니다.", "스태프: 처음이라면 체험 코너를 추천합니다.", "참가자: 일본어가 아직 능숙하지 않은데 괜찮나요?", "스태프: 스태프가 옆에서 설명하니 안심하세요."],
            vi: ["Người tham gia: Tôi đang phân vân nên tham gia chương trình nào trước.", "Nhân viên: Nếu là lần đầu, góc trải nghiệm được khuyến nghị.", "Người tham gia: Tiếng Nhật của tôi chưa giỏi lắm, có sao không ạ?", "Nhân viên: Nhân viên sẽ giải thích ở bên cạnh nên xin hãy yên tâm."],
            tl: ["Participant: Hindi ko po alam kung aling program ang dapat kong salihan muna.", "Staff: Kung first time po, recommended ang hands-on corner.", "Participant: Hindi pa po ako magaling sa Japanese. Okay lang po ba?", "Staff: May staff po na magpapaliwanag sa tabi ninyo, kaya huwag po kayong mag-alala."],
            id: ["Peserta: Saya bingung harus ikut program yang mana terlebih dahulu.", "Staf: Kalau pertama kali, area pengalaman langsung direkomendasikan.", "Peserta: Bahasa Jepang saya belum begitu baik. Apakah tidak apa-apa?", "Staf: Staf akan menjelaskan di dekat Anda, jadi tenang saja."],
            th: ["ผู้เข้าร่วม: กำลังลังเลว่าควรเข้าร่วมโปรแกรมไหนก่อนค่ะ/ครับ", "เจ้าหน้าที่: ถ้าเป็นครั้งแรก แนะนำมุมทดลองประสบการณ์ค่ะ/ครับ", "ผู้เข้าร่วม: ภาษาญี่ปุ่นยังไม่เก่งมาก จะไม่เป็นไรไหมคะ/ครับ", "เจ้าหน้าที่: เจ้าหน้าที่จะอธิบายอยู่ข้าง ๆ กรุณาวางใจค่ะ/ครับ"],
            my: ["ပါဝင်သူ: ဘယ် program ကနေ စပါဝင်ရမလဲ မသေချာပါဘူး။", "ဝန်ထမ်း: ပထမဆုံးဆိုရင် experience corner ကို အကြံပြုပါတယ်။", "ပါဝင်သူ: ဂျပန်စကားကို မကျွမ်းကျင်သေးပါဘူး၊ ရပါသလား။", "ဝန်ထမ်း: ဝန်ထမ်းက အနားမှာ ရှင်းပြပေးမှာဖြစ်လို့ စိတ်ချပါ။"],
            km: ["អ្នកចូលរួម: ខ្ញុំកំពុងស្ទាក់ស្ទើរថាគួរចូលរួមកម្មវិធីណាមុន។", "បុគ្គលិក: ប្រសិនបើជាលើកដំបូង កន្លែងសាកល្បងគឺណែនាំ។", "អ្នកចូលរួម: ភាសាជប៉ុនរបស់ខ្ញុំមិនទាន់ពូកែទេ តើបានទេ?", "បុគ្គលិក: បុគ្គលិកនឹងពន្យល់នៅជិតអ្នក ដូច្នេះសូមកុំបារម្ភ។"],
            ne: ["सहभागी: कुन कार्यक्रमबाट सहभागी हुने भनेर अलमलमा छु।", "कर्मचारी: पहिलो पटक भए अनुभव गर्ने corner सिफारिस गर्छु।", "सहभागी: जापानी अझै राम्रो छैन, हुन्छ?", "कर्मचारी: कर्मचारीले नजिकैबाट説明 गर्छन्, ढुक्क हुनुहोस्।"],
            mn: ["Оролцогч: Аль хөтөлбөрөөс оролцохоо эргэлзэж байна.", "Ажилтан: Анх удаа бол туршиж үзэх буланг санал болгож байна.", "Оролцогч: Япон хэлдээ одоохондоо сайн биш, болох уу?", "Ажилтан: Ажилтан ойролцоо тайлбарлах тул санаа зоволтгүй."],
            si: ["සහභාගීවන්නා: කොයි program එකෙන් පටන් ගන්නද කියලා සැකයි.", "කාර්ය මණ්ඩලය: පළමු වතාව නම් hands-on corner එක recommend කරනවා.", "සහභාගීවන්නා: මගේ Japanese තවම හොඳ නැහැ, ඒක හරිද?", "කාර්ය මණ්ඩලය: staff එකක් ළඟින් පැහැදිලි කරන නිසා බය වෙන්න එපා."],
            bn: ["অংশগ্রহণকারী: কোন প্রোগ্রাম থেকে শুরু করব বুঝতে পারছি না।", "কর্মী: প্রথমবার হলে অভিজ্ঞতা কর্নারおすすめ।", "অংশগ্রহণকারী: আমার জাপানি এখনও ভালো নয়, ঠিক আছে?", "কর্মী: কর্মীরা পাশে থেকে ব্যাখ্যা করবে, তাই নিশ্চিন্ত থাকুন।"],
            pt: ["Participante: Estou em dúvida sobre qual programa devo participar primeiro.", "Funcionário: Se for sua primeira vez, recomendo a área de experiências.", "Participante: Ainda não sou muito bom em japonês. Tudo bem?", "Funcionário: Um funcionário explicará ao seu lado, então fique tranquilo."],
            es: ["Participante: No sé bien en qué programa debería participar primero.", "Personal: Si es su primera vez, le recomendamos la zona de experiencias.", "Participante: Todavía no soy muy bueno en japonés. ¿Está bien?", "Personal: El personal explicará a su lado, así que no se preocupe."],
            fr: ["Participant : Je ne sais pas par quel programme commencer.", "Personnel : Si c’est votre première fois, je recommande le coin d’expérience.", "Participant : Je ne suis pas encore très bon en japonais. Est-ce que ça va ?", "Personnel : Le personnel expliquera à côté de vous, donc soyez rassuré."],
            ru: ["Участник: Я не знаю, с какой программы начать.", "Сотрудник: Если вы впервые, рекомендую зону практического опыта.", "Участник: Я ещё не очень хорошо говорю по-японски. Это нормально?", "Сотрудник: Сотрудники объяснят рядом, поэтому не волнуйтесь."],
            uk: ["Учасник: Я не знаю, з якої програми почати.", "Працівник: Якщо ви вперше, рекомендую зону практичного досвіду.", "Учасник: Я ще не дуже добре володію японською. Це нормально?", "Працівник: Працівники пояснять поруч, тож не хвилюйтеся."]
        }
    ),

    makeA2EventDialogue(
        "a2_event_005",
        "途中から参加する",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "少し遅れて着きそうです。",
                target: "すこしおくれてつきそうです",
                ruby: "<ruby>少<rt>すこ</rt></ruby>し<ruby>遅<rt>おく</rt></ruby>れて<ruby>着<rt>つ</rt></ruby>きそうです。",
                romaji: "Sukoshi okurete tsukisō desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "メインステージは十時半から始まります。",
                target: "めいんすてーじはじゅうじはんからはじまります",
                ruby: "メインステージは<ruby>十時半<rt>じゅうじはん</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>まります。",
                romaji: "Mein sutēji wa jūji han kara hajimarimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "途中から入っても迷惑になりませんか。",
                target: "とちゅうからはいってもめいわくになりませんか",
                ruby: "<ruby>途中<rt>とちゅう</rt></ruby>から<ruby>入<rt>はい</rt></ruby>っても<ruby>迷惑<rt>めいわく</rt></ruby>になりませんか。",
                romaji: "Tochū kara haitte mo meiwaku ni narimasen ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "後ろの席から静かに入れば大丈夫です。",
                target: "うしろのせきからしずかにはいればだいじょうぶです",
                ruby: "<ruby>後<rt>うし</rt></ruby>ろの<ruby>席<rt>せき</rt></ruby>から<ruby>静<rt>しず</rt></ruby>かに<ruby>入<rt>はい</rt></ruby>れば<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。",
                romaji: "Ushiro no seki kara shizuka ni haireba daijōbu desu."
            }
        ],
        {
            ja: ["参加者：少し遅れて着きそうです。", "スタッフ：メインステージは十時半から始まります。", "参加者：途中から入っても迷惑になりませんか。", "スタッフ：後ろの席から静かに入れば大丈夫です。"],
            en: ["Visitor: It looks like I will arrive a little late.", "Staff: The main stage starts at 10:30.", "Visitor: Would it be a problem if I enter after it starts?", "Staff: It is fine if you enter quietly from the back seats."],
            "zh-CN": ["参加者：我可能会稍微晚一点到。", "工作人员：主舞台从十点半开始。", "参加者：中途进去会不会打扰别人？", "工作人员：从后面的座位安静地进去就可以。"],
            "zh-TW": ["參加者：我可能會稍微晚一點到。", "工作人員：主舞台從十點半開始。", "參加者：中途進去會不會打擾別人？", "工作人員：從後面的座位安靜地進去就可以。"],
            ko: ["참가자: 조금 늦게 도착할 것 같습니다.", "스태프: 메인 스테이지는 10시 30분부터 시작합니다.", "참가자: 중간에 들어가도 민폐가 되지 않을까요?", "스태프: 뒤쪽 자리에서 조용히 들어가면 괜찮습니다."],
            vi: ["Người tham gia: Có vẻ tôi sẽ đến hơi muộn.", "Nhân viên: Sân khấu chính bắt đầu từ 10 giờ 30.", "Người tham gia: Nếu tôi vào giữa chừng thì có làm phiền không ạ?", "Nhân viên: Nếu vào nhẹ nhàng từ ghế phía sau thì không sao."],
            tl: ["Participant: Mukhang medyo male-late po ako.", "Staff: Magsisimula po ang main stage ng 10:30.", "Participant: Makaabala po ba kung pumasok ako sa gitna?", "Staff: Okay lang po kung tahimik kayong papasok mula sa likod na seats."],
            id: ["Peserta: Sepertinya saya akan tiba sedikit terlambat.", "Staf: Panggung utama mulai pukul 10.30.", "Peserta: Apakah mengganggu jika saya masuk di tengah acara?", "Staf: Tidak apa-apa jika masuk dengan tenang dari kursi belakang."],
            th: ["ผู้เข้าร่วม: ดูเหมือนจะถึงช้านิดหน่อยค่ะ/ครับ", "เจ้าหน้าที่: เวทีหลักเริ่มเวลา 10:30 ค่ะ/ครับ", "ผู้เข้าร่วม: ถ้าเข้าไประหว่างทางจะรบกวนไหมคะ/ครับ", "เจ้าหน้าที่: ถ้าเข้าจากที่นั่งด้านหลังอย่างเงียบ ๆ ก็ไม่เป็นไรค่ะ/ครับ"],
            my: ["ပါဝင်သူ: နည်းနည်းနောက်ကျပြီး ရောက်မယ်ထင်ပါတယ်။", "ဝန်ထမ်း: main stage က ၁၀ နာရီခွဲမှာ စပါမယ်။", "ပါဝင်သူ: အလယ်ပိုင်းကနေ ဝင်ရင် အနှောင့်အယှက်ဖြစ်မလား။", "ဝန်ထမ်း: နောက်ဘက်ထိုင်ခုံကနေ ငြိမ်ငြိမ်ဝင်ရင် ရပါတယ်။"],
            km: ["អ្នកចូលរួម: ខ្ញុំប្រហែលជានឹងមកយឺតបន្តិច។", "បុគ្គលិក: វេទិកាសំខាន់ចាប់ផ្តើមម៉ោង 10:30។", "អ្នកចូលរួម: តើវានឹងរំខានទេ បើខ្ញុំចូលពីកណ្តាលកម្មវិធី?", "បុគ្គលិក: បើចូលយ៉ាងស្ងៀមស្ងាត់ពីកៅអីខាងក្រោយ គ្មានបញ្ហាទេ។"],
            ne: ["सहभागी: म अलि ढिलो पुग्ने जस्तो छ।", "कर्मचारी: मुख्य stage १०:३० बाट सुरु हुन्छ।", "सहभागी: बीचबाट भित्र पस्दा अरूलाई समस्या हुन्छ?", "कर्मचारी: पछाडिको सीटबाट शान्त रूपमा पस्नुभयो भने हुन्छ।"],
            mn: ["Оролцогч: Жаахан хоцорч очих бололтой.", "Ажилтан: Гол тайз 10:30-аас эхэлнэ.", "Оролцогч: Дундаас нь орвол төвөг болох уу?", "Ажилтан: Арын суудлаас чимээгүй орвол болно."],
            si: ["සහභාගීවන්නා: ටිකක් පරක්කු වෙලා එන්න වගේ.", "කාර්ය මණ්ඩලය: main stage එක 10:30ට පටන් ගන්නවා.", "සහභාගීවන්නා: මැදදී ඇතුල් වුණොත් අනිත් අයට කරදරයක් වෙයිද?", "කාර්ය මණ්ඩලය: පසුපස seats වලින් නිහඬව ඇතුල් වුණොත් හරි."],
            bn: ["অংশগ্রহণকারী: মনে হচ্ছে একটু দেরিতে পৌঁছাব।", "কর্মী: main stage দশটা ত্রিশ থেকে শুরু হবে।", "অংশগ্রহণকারী: মাঝখান থেকে ঢুকলে অসুবিধা হবে?", "কর্মী: পেছনের আসন দিক থেকে শান্তভাবে ঢুকলে ঠিক আছে।"],
            pt: ["Participante: Parece que vou chegar um pouco atrasado.", "Funcionário: O palco principal começa às 10h30.", "Participante: Será inconveniente se eu entrar no meio?", "Funcionário: Tudo bem se entrar em silêncio pelos assentos de trás."],
            es: ["Participante: Parece que llegaré un poco tarde.", "Personal: El escenario principal comienza a las 10:30.", "Participante: ¿Sería molesto si entro a mitad?", "Personal: Está bien si entra en silencio por los asientos de atrás."],
            fr: ["Participant : Il semble que je vais arriver un peu en retard.", "Personnel : La scène principale commence à 10 h 30.", "Participant : Est-ce que cela dérange si j’entre en cours de route ?", "Personnel : Cela ira si vous entrez calmement par les sièges du fond."],
            ru: ["Участник: Похоже, я немного опоздаю.", "Сотрудник: Главная сцена начинается в 10:30.", "Участник: Не будет ли помехой, если я войду посреди программы?", "Сотрудник: Всё нормально, если тихо войдёте с задних мест."],
            uk: ["Учасник: Схоже, я трохи запізнюся.", "Працівник: Головна сцена починається о 10:30.", "Учасник: Чи не заважатиме, якщо я зайду посеред програми?", "Працівник: Усе гаразд, якщо тихо зайдете з задніх місць."]
        }
    ),

    makeA2EventDialogue(
        "a2_event_006",
        "休憩場所を聞く",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "人が多くて、少し疲れてしまいました。",
                target: "ひとがおおくて すこしつかれてしまいました",
                ruby: "<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>くて、<ruby>少<rt>すこ</rt></ruby>し<ruby>疲<rt>つか</rt></ruby>れてしまいました。",
                romaji: "Hito ga ōkute, sukoshi tsukarete shimaimashita."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "二階に休憩スペースがあります。",
                target: "にかいにきゅうけいすぺーすがあります",
                ruby: "<ruby>二階<rt>にかい</rt></ruby>に<ruby>休憩<rt>きゅうけい</rt></ruby>スペースがあります。",
                romaji: "Nikai ni kyūkei supēsu ga arimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "飲み物を持ち込んでもいいですか。",
                target: "のみものをもちこんでもいいですか",
                ruby: "<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>んでもいいですか。",
                romaji: "Nomimono o mochikonde mo ii desu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "ふた付きの飲み物なら持ち込みできます。",
                target: "ふたつきののみものならもちこみできます",
                ruby: "ふた<ruby>付<rt>つ</rt></ruby>きの<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>なら<ruby>持<rt>も</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>みできます。",
                romaji: "Futa-tsuki no nomimono nara mochikomi dekimasu."
            }
        ],
        {
            ja: ["参加者：人が多くて、少し疲れてしまいました。", "スタッフ：二階に休憩スペースがあります。", "参加者：飲み物を持ち込んでもいいですか。", "スタッフ：ふた付きの飲み物なら持ち込みできます。"],
            en: ["Visitor: There are many people, and I have become a little tired.", "Staff: There is a rest area on the second floor.", "Visitor: May I bring in a drink?", "Staff: You can bring in drinks with lids."],
            "zh-CN": ["参加者：人很多，我有点累了。", "工作人员：二楼有休息区。", "参加者：可以带饮料进去吗？", "工作人员：有盖子的饮料可以带进去。"],
            "zh-TW": ["參加者：人很多，我有點累了。", "工作人員：二樓有休息區。", "參加者：可以帶飲料進去嗎？", "工作人員：有蓋子的飲料可以帶進去。"],
            ko: ["참가자: 사람이 많아서 조금 지쳐 버렸습니다.", "스태프: 2층에 휴식 공간이 있습니다.", "참가자: 음료를 가지고 들어가도 되나요?", "스태프: 뚜껑이 있는 음료라면 반입할 수 있습니다."],
            vi: ["Người tham gia: Đông người quá nên tôi hơi mệt.", "Nhân viên: Có khu nghỉ ở tầng hai.", "Người tham gia: Tôi có thể mang đồ uống vào không ạ?", "Nhân viên: Nếu là đồ uống có nắp thì có thể mang vào."],
            tl: ["Participant: Maraming tao kaya medyo napagod po ako.", "Staff: May rest area po sa second floor.", "Participant: Pwede po ba akong magdala ng drink sa loob?", "Staff: Pwede po kung may takip ang drink."],
            id: ["Peserta: Orangnya banyak, jadi saya sedikit lelah.", "Staf: Ada area istirahat di lantai dua.", "Peserta: Bolehkah saya membawa minuman masuk?", "Staf: Minuman dengan tutup boleh dibawa masuk."],
            th: ["ผู้เข้าร่วม: คนเยอะ เลยเหนื่อยนิดหน่อยค่ะ/ครับ", "เจ้าหน้าที่: มีพื้นที่พักที่ชั้นสองค่ะ/ครับ", "ผู้เข้าร่วม: นำเครื่องดื่มเข้าไปได้ไหมคะ/ครับ", "เจ้าหน้าที่: ถ้าเป็นเครื่องดื่มที่มีฝาปิด สามารถนำเข้าได้ค่ะ/ครับ"],
            my: ["ပါဝင်သူ: လူများလို့ နည်းနည်းပင်ပန်းသွားပါတယ်။", "ဝန်ထမ်း: ဒုတိယထပ်မှာ အနားယူရာနေရာရှိပါတယ်။", "ပါဝင်သူ: သောက်စရာ ယူဝင်လို့ရပါသလား။", "ဝန်ထမ်း: အဖုံးပါတဲ့ သောက်စရာဆို ယူဝင်လို့ရပါတယ်။"],
            km: ["អ្នកចូលរួម: មនុស្សច្រើន ហើយខ្ញុំហត់បន្តិច។", "បុគ្គលិក: មានកន្លែងសម្រាកនៅជាន់ទីពីរ។", "អ្នកចូលរួម: តើអាចយកភេសជ្ជៈចូលបានទេ?", "បុគ្គលិក: បើជាភេសជ្ជៈមានគម្រប អាចយកចូលបាន។"],
            ne: ["सहभागी: मानिस धेरै छन्, त्यसैले अलि थाकें।", "कर्मचारी: दोस्रो तलामा विश्राम ठाउँ छ।", "सहभागी: पेय पदार्थ भित्र लैजान मिल्छ?", "कर्मचारी: ढक्कन भएको पेय पदार्थ भए लैजान मिल्छ।"],
            mn: ["Оролцогч: Хүн ихтэй болохоор жаахан ядарчихлаа.", "Ажилтан: Хоёр давхарт амрах газар бий.", "Оролцогч: Уух зүйл авч орж болох уу?", "Ажилтан: Тагтай ундаа бол авч орж болно."],
            si: ["සහභාගීවන්නා: මිනිස්සු ගොඩක් ඉන්න නිසා ටිකක් වෙහෙසුණා.", "කාර්ය මණ්ඩලය: දෙවන මහලේ rest area එකක් තියෙනවා.", "සහභාගීවන්නා: drink එකක් ඇතුළට ගෙනියන්න පුළුවන්ද?", "කාර්ය මණ්ඩලය: lid එකක් තියෙන drink නම් ගෙනියන්න පුළුවන්."],
            bn: ["অংশগ্রহণকারী: মানুষ অনেক, তাই একটু ক্লান্ত হয়ে গেছি।", "কর্মী: দ্বিতীয় তলায় বিশ্রামের জায়গা আছে।", "অংশগ্রহণকারী: পানীয় ভেতরে নেওয়া যাবে?", "কর্মী: ঢাকনাযুক্ত পানীয় হলে নেওয়া যাবে।"],
            pt: ["Participante: Há muitas pessoas, então fiquei um pouco cansado.", "Funcionário: Há uma área de descanso no segundo andar.", "Participante: Posso levar bebida para dentro?", "Funcionário: Bebidas com tampa podem ser levadas para dentro."],
            es: ["Participante: Hay mucha gente y me cansé un poco.", "Personal: Hay una zona de descanso en el segundo piso.", "Participante: ¿Puedo llevar una bebida adentro?", "Personal: Puede entrar con bebidas que tengan tapa."],
            fr: ["Participant : Il y a beaucoup de monde et je suis un peu fatigué.", "Personnel : Il y a un espace de repos au deuxième étage.", "Participant : Puis-je apporter une boisson à l’intérieur ?", "Personnel : Les boissons avec couvercle peuvent être apportées."],
            ru: ["Участник: Людей много, и я немного устал.", "Сотрудник: На втором этаже есть зона отдыха.", "Участник: Можно принести напиток внутрь?", "Сотрудник: Напитки с крышкой можно приносить."],
            uk: ["Учасник: Людей багато, і я трохи втомився.", "Працівник: На другому поверсі є зона відпочинку.", "Учасник: Можна принести напій усередину?", "Працівник: Напої з кришкою можна приносити."]
        }
    ),

    makeA2EventDialogue(
        "a2_event_007",
        "屋台で買い物をする",
        [
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "屋台で食べ物を買いたいです。",
                target: "やたいでたべものをかいたいです",
                ruby: "<ruby>屋台<rt>やたい</rt></ruby>で<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>を<ruby>買<rt>か</rt></ruby>いたいです。",
                romaji: "Yatai de tabemono o kaitai desu."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "現金の店と電子決済の店があります。",
                target: "げんきんのみせとでんしけっさいのみせがあります",
                ruby: "<ruby>現金<rt>げんきん</rt></ruby>の<ruby>店<rt>みせ</rt></ruby>と<ruby>電子決済<rt>でんしけっさい</rt></ruby>の<ruby>店<rt>みせ</rt></ruby>があります。",
                romaji: "Genkin no mise to denshi kessai no mise ga arimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "先に食券を買う必要がありますか。",
                target: "さきにしょっけんをかうひつようがありますか",
                ruby: "<ruby>先<rt>さき</rt></ruby>に<ruby>食券<rt>しょっけん</rt></ruby>を<ruby>買<rt>か</rt></ruby>う<ruby>必要<rt>ひつよう</rt></ruby>がありますか。",
                romaji: "Saki ni shokken o kau hitsuyō ga arimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "一部の店だけ食券制です。看板を確認してください。",
                target: "いちぶのみせだけしょっけんせいです かんばんをかくにんしてください",
                ruby: "<ruby>一部<rt>いちぶ</rt></ruby>の<ruby>店<rt>みせ</rt></ruby>だけ<ruby>食券制<rt>しょっけんせい</rt></ruby>です。<ruby>看板<rt>かんばん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してください。",
                romaji: "Ichibu no mise dake shokken-sei desu. Kanban o kakunin shite kudasai."
            }
        ],
        {
            ja: ["参加者：屋台で食べ物を買いたいです。", "スタッフ：現金の店と電子決済の店があります。", "参加者：先に食券を買う必要がありますか。", "スタッフ：一部の店だけ食券制です。看板を確認してください。"],
            en: ["Visitor: I want to buy food at the stalls.", "Staff: Some stalls accept cash, and some accept electronic payment.", "Visitor: Do I need to buy meal tickets first?", "Staff: Only some stalls use a meal ticket system. Please check the signs."],
            "zh-CN": ["参加者：我想在摊位买食物。", "工作人员：有些店收现金，有些店可以电子支付。", "参加者：需要先买食券吗？", "工作人员：只有部分店是食券制。请确认看板。"],
            "zh-TW": ["參加者：我想在攤位買食物。", "工作人員：有些店收現金，有些店可以電子支付。", "參加者：需要先買食券嗎？", "工作人員：只有部分店是食券制。請確認看板。"],
            ko: ["참가자: 노점에서 음식을 사고 싶습니다.", "스태프: 현금 가게와 전자 결제 가게가 있습니다.", "참가자: 먼저 식권을 사야 하나요?", "스태프: 일부 가게만 식권제입니다. 간판을 확인해 주세요."],
            vi: ["Người tham gia: Tôi muốn mua đồ ăn ở quầy hàng.", "Nhân viên: Có quầy dùng tiền mặt và có quầy dùng thanh toán điện tử.", "Người tham gia: Tôi có cần mua vé ăn trước không ạ?", "Nhân viên: Chỉ một số quầy dùng hệ thống vé ăn. Xin hãy kiểm tra bảng hiệu."],
            tl: ["Participant: Gusto ko pong bumili ng pagkain sa food stalls.", "Staff: May stalls na cash at may stalls na electronic payment.", "Participant: Kailangan po bang bumili muna ng meal ticket?", "Staff: Ilang stalls lang po ang meal ticket system. Pakitingnan po ang signs."],
            id: ["Peserta: Saya ingin membeli makanan di stan.", "Staf: Ada stan tunai dan ada stan dengan pembayaran elektronik.", "Peserta: Apakah saya perlu membeli kupon makan terlebih dahulu?", "Staf: Hanya sebagian stan yang menggunakan sistem kupon makan. Silakan cek papan tanda."],
            th: ["ผู้เข้าร่วม: อยากซื้ออาหารที่ร้าน屋台ค่ะ/ครับ", "เจ้าหน้าที่: มีร้านที่รับเงินสดและร้านที่รับการชำระเงินอิเล็กทรอนิกส์ค่ะ/ครับ", "ผู้เข้าร่วม: ต้องซื้อบัตรอาหารก่อนไหมคะ/ครับ", "เจ้าหน้าที่: เฉพาะบางร้านเป็นระบบบัตรอาหารค่ะ/ครับ กรุณาตรวจสอบป้ายค่ะ/ครับ"],
            my: ["ပါဝင်သူ: အစားအသောက်ဆိုင်တန်းမှာ အစားအစာဝယ်ချင်ပါတယ်။", "ဝန်ထမ်း: ငွေသားသုံးတဲ့ဆိုင်နဲ့ electronic payment သုံးတဲ့ဆိုင်တွေ ရှိပါတယ်။", "ပါဝင်သူ: အရင် food ticket ဝယ်ဖို့ လိုပါသလား။", "ဝန်ထမ်း: ဆိုင်တချို့ပဲ food ticket system ပါ။ ဆိုင်းဘုတ်ကို စစ်ပေးပါ။"],
            km: ["អ្នកចូលរួម: ខ្ញុំចង់ទិញអាហារនៅតូប។", "បុគ្គលិក: មានតូបបង់សាច់ប្រាក់ និងតូបបង់តាមអេឡិចត្រូនិក។", "អ្នកចូលរួម: តើត្រូវទិញសំបុត្រអាហារមុនទេ?", "បុគ្គលិក: តូបមួយចំនួនប៉ុណ្ណោះប្រើប្រព័ន្ធសំបុត្រអាហារ។ សូមពិនិត្យស្លាក។"],
            ne: ["सहभागी: म स्टलमा खाना किन्न चाहन्छु।", "कर्मचारी: नगद चल्ने स्टल र electronic payment चल्ने स्टल छन्।", "सहभागी: पहिले food ticket किन्नुपर्ने हो?", "कर्मचारी: केही स्टल मात्र food ticket system हो। बोर्ड हेर्नुहोस्।"],
            mn: ["Оролцогч: Лангуунаас хоол авмаар байна.", "Ажилтан: Бэлэн мөнгөний лангуу, цахим төлбөрийн лангуу байна.", "Оролцогч: Эхлээд хоолны тасалбар авах хэрэгтэй юу?", "Ажилтан: Зарим лангуу л тасалбарын системтэй. Самбарыг шалгана уу."],
            si: ["සහභාගීවන්නා: food stalls වලින් කෑම ගන්න ඕනේ.", "කාර්ය මණ්ඩලය: cash ගන්න stalls සහ electronic payment ගන්න stalls තියෙනවා.", "සහභාගීවන්නා: මුලින් food ticket එකක් ගන්න ඕනෙද?", "කාර්ය මණ්ඩලය: සමහර stalls විතරක් food ticket system එකයි. sign එක බලන්න."],
            bn: ["অংশগ্রহণকারী: স্টল থেকে খাবার কিনতে চাই।", "কর্মী: নগদ নেওয়া দোকান এবং electronic payment নেওয়া দোকান আছে।", "অংশগ্রহণকারী: আগে কি food ticket কিনতে হবে?", "কর্মী: শুধু কিছু দোকানে food ticket system আছে। সাইনবোর্ড দেখুন।"],
            pt: ["Participante: Quero comprar comida nas barracas.", "Funcionário: Há barracas que aceitam dinheiro e barracas que aceitam pagamento eletrônico.", "Participante: Preciso comprar tíquete de refeição primeiro?", "Funcionário: Apenas algumas barracas usam sistema de tíquete. Verifique as placas."],
            es: ["Participante: Quiero comprar comida en los puestos.", "Personal: Hay puestos que aceptan efectivo y puestos que aceptan pago electrónico.", "Participante: ¿Necesito comprar un ticket de comida primero?", "Personal: Solo algunos puestos usan sistema de tickets. Revise los letreros."],
            fr: ["Participant : Je veux acheter de la nourriture aux stands.", "Personnel : Certains stands acceptent les espèces et d’autres le paiement électronique.", "Participant : Dois-je d’abord acheter un ticket repas ?", "Personnel : Seuls certains stands utilisent un système de tickets. Veuillez vérifier les panneaux."],
            ru: ["Участник: Я хочу купить еду в киосках.", "Сотрудник: Есть киоски с оплатой наличными и киоски с электронным платежом.", "Участник: Нужно сначала купить талон на еду?", "Сотрудник: Только некоторые киоски работают по системе талонов. Проверьте вывески."],
            uk: ["Учасник: Я хочу купити їжу в кіосках.", "Працівник: Є кіоски з оплатою готівкою та кіоски з електронною оплатою.", "Учасник: Потрібно спочатку купити талон на їжу?", "Працівник: Лише деякі кіоски працюють за системою талонів. Перевірте вивіски."]
        }
    ),

    makeA2EventDialogue(
        "a2_event_008",
        "アンケートに答える",
        [
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "お帰りの前にアンケートをお願いしています。",
                target: "おかえりのまえにあんけーとをおねがいしています",
                ruby: "お<ruby>帰<rt>かえ</rt></ruby>りの<ruby>前<rt>まえ</rt></ruby>にアンケートをお<ruby>願<rt>ねが</rt></ruby>いしています。",
                romaji: "Okaeri no mae ni ankēto o onegai shite imasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "スマホで答えることはできますか。",
                target: "すまほでこたえることはできますか",
                ruby: "スマホで<ruby>答<rt>こた</rt></ruby>えることはできますか。",
                romaji: "Sumaho de kotaeru koto wa dekimasu ka."
            },
            {
                label: "話者A",
                key: "staff",
                name: "スタッフ",
                line: "はい、このQRコードから回答できます。",
                target: "はい このきゅーあーるこーどからかいとうできます",
                ruby: "はい、このQRコードから<ruby>回答<rt>かいとう</rt></ruby>できます。",
                romaji: "Hai, kono kyū-āru kōdo kara kaitō dekimasu."
            },
            {
                label: "話者B",
                key: "visitor",
                name: "参加者",
                line: "とても楽しかったです。また参加したいです。",
                target: "とてもたのしかったです またさんかしたいです",
                ruby: "とても<ruby>楽<rt>たの</rt></ruby>しかったです。また<ruby>参加<rt>さんか</rt></ruby>したいです。",
                romaji: "Totemo tanoshikatta desu. Mata sanka shitai desu."
            }
        ],
        {
            ja: ["スタッフ：お帰りの前にアンケートをお願いしています。", "参加者：スマホで答えることはできますか。", "スタッフ：はい、このQRコードから回答できます。", "参加者：とても楽しかったです。また参加したいです。"],
            en: ["Staff: Before you leave, we ask you to complete a survey.", "Visitor: Can I answer it on my smartphone?", "Staff: Yes, you can answer from this QR code.", "Visitor: It was very fun. I would like to join again."],
            "zh-CN": ["工作人员：离开前请您填写问卷。", "参加者：可以用手机回答吗？", "工作人员：可以，可以从这个二维码回答。", "参加者：非常开心。我还想再参加。"],
            "zh-TW": ["工作人員：離開前請您填寫問卷。", "參加者：可以用手機回答嗎？", "工作人員：可以，可以從這個QR碼回答。", "參加者：非常開心。我還想再參加。"],
            ko: ["스태프: 돌아가시기 전에 설문을 부탁드리고 있습니다.", "참가자: 스마트폰으로 답할 수 있나요?", "스태프: 네, 이 QR 코드로 답할 수 있습니다.", "참가자: 정말 즐거웠습니다. 또 참여하고 싶습니다."],
            vi: ["Nhân viên: Trước khi ra về, chúng tôi nhờ bạn trả lời khảo sát.", "Người tham gia: Tôi có thể trả lời bằng điện thoại không ạ?", "Nhân viên: Vâng, bạn có thể trả lời từ mã QR này.", "Người tham gia: Rất vui ạ. Tôi muốn tham gia lần nữa."],
            tl: ["Staff: Bago po kayo umuwi, hinihiling namin na sagutan ang survey.", "Participant: Pwede po bang sagutan sa smartphone?", "Staff: Oo, pwede po mula sa QR code na ito.", "Participant: Napakasaya po. Gusto ko pong sumali ulit."],
            id: ["Staf: Sebelum pulang, kami meminta Anda mengisi survei.", "Peserta: Apakah bisa menjawab dengan smartphone?", "Staf: Ya, bisa menjawab melalui kode QR ini.", "Peserta: Sangat menyenangkan. Saya ingin ikut lagi."],
            th: ["เจ้าหน้าที่: ก่อนกลับ ขอความร่วมมือตอบแบบสอบถามค่ะ/ครับ", "ผู้เข้าร่วม: ตอบด้วยสมาร์ตโฟนได้ไหมคะ/ครับ", "เจ้าหน้าที่: ได้ค่ะ/ครับ ตอบจาก QR code นี้ได้ค่ะ/ครับ", "ผู้เข้าร่วม: สนุกมากค่ะ/ครับ อยากเข้าร่วมอีกค่ะ/ครับ"],
            my: ["ဝန်ထမ်း: ပြန်မသွားခင် survey ဖြေပေးဖို့ တောင်းဆိုထားပါတယ်။", "ပါဝင်သူ: smartphone နဲ့ ဖြေလို့ရပါသလား။", "ဝန်ထမ်း: ရပါတယ်၊ ဒီ QR code ကနေ ဖြေလို့ရပါတယ်။", "ပါဝင်သူ: အရမ်းပျော်စရာကောင်းခဲ့ပါတယ်။ နောက်တစ်ခါလည်း ပါဝင်ချင်ပါတယ်။"],
            km: ["បុគ្គលិក: មុនត្រឡប់ទៅវិញ យើងសូមឱ្យអ្នកឆ្លើយសំណួរស្ទង់មតិ។", "អ្នកចូលរួម: តើអាចឆ្លើយតាមស្មាតហ្វូនបានទេ?", "បុគ្គលិក: បាន អាចឆ្លើយតាម QR code នេះ។", "អ្នកចូលរួម: សប្បាយណាស់។ ខ្ញុំចង់ចូលរួមម្តងទៀត។"],
            ne: ["कर्मचारी: फर्कनुअघि survey गरिदिन अनुरोध गर्छौं।", "सहभागी: smartphone बाट उत्तर दिन सकिन्छ?", "कर्मचारी: हुन्छ, यो QR code बाट उत्तर दिन सकिन्छ।", "सहभागी: धेरै रमाइलो भयो। फेरि सहभागी हुन चाहन्छु।"],
            mn: ["Ажилтан: Буцахаасаа өмнө санал асуулга бөглөхийг хүсэж байна.", "Оролцогч: Утсаараа хариулж болох уу?", "Ажилтан: Тийм, энэ QR кодоор хариулж болно.", "Оролцогч: Маш хөгжилтэй байлаа. Дахин оролцмоор байна."],
            si: ["කාර්ය මණ්ඩලය: ආපසු යන්න කලින් survey එකකට උත්තර දෙන්න කියලා ඉල්ලා සිටිනවා.", "සහභාගීවන්නා: smartphone එකෙන් උත්තර දෙන්න පුළුවන්ද?", "කාර්ය මණ්ඩලය: ඔව්, මේ QR code එකෙන් උත්තර දෙන්න පුළුවන්.", "සහභාගීවන්නා: ගොඩක් සතුටු වුණා. නැවත සහභාගී වෙන්න ඕනේ."],
            bn: ["কর্মী: বাড়ি ফেরার আগে আমরা survey পূরণ করতে বলছি।", "অংশগ্রহণকারী: smartphone দিয়ে উত্তর দেওয়া যাবে?", "কর্মী: হ্যাঁ, এই QR code থেকে উত্তর দেওয়া যাবে।", "অংশগ্রহণকারী: খুব আনন্দ হয়েছে। আবার অংশ নিতে চাই।"],
            pt: ["Funcionário: Antes de ir embora, pedimos que responda a um questionário.", "Participante: Posso responder pelo smartphone?", "Funcionário: Sim, você pode responder por este QR code.", "Participante: Foi muito divertido. Gostaria de participar novamente."],
            es: ["Personal: Antes de irse, le pedimos que responda una encuesta.", "Participante: ¿Puedo responder con mi smartphone?", "Personal: Sí, puede responder desde este código QR.", "Participante: Fue muy divertido. Me gustaría participar de nuevo."],
            fr: ["Personnel : Avant de partir, nous vous demandons de répondre à un questionnaire.", "Participant : Puis-je répondre avec mon smartphone ?", "Personnel : Oui, vous pouvez répondre avec ce QR code.", "Participant : C’était très amusant. J’aimerais participer à nouveau."],
            ru: ["Сотрудник: Перед уходом мы просим заполнить анкету.", "Участник: Можно ответить со смартфона?", "Сотрудник: Да, можно ответить по этому QR-коду.", "Участник: Было очень весело. Я хотел бы участвовать снова."],
            uk: ["Працівник: Перед тим як піти, ми просимо заповнити анкету.", "Учасник: Можна відповісти зі смартфона?", "Працівник: Так, можна відповісти за цим QR-кодом.", "Учасник: Було дуже весело. Я хотів би взяти участь знову."]
        }
    )

];