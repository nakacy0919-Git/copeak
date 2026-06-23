// ==========================================
// Japeak 教材データベース（中文：生徒編＆保護者編）
// ==========================================
const japeakParagraphsData = [
    // ------------------------------------------
    // 🧑‍🎓 せいと編（student_paragraphs）
    // ------------------------------------------
    {
        id: "japeak_para_stu_001", audio: "audio/japeak_para_stu_001.mp3", title: "自己紹介 (Self-Introduction)", category: "student_paragraphs",
        japanese: "初めまして。ネパールから来ました。日本語の勉強と部活動を頑張りたいです。宜しくお願いします。",
        target_speech: "はじめましてねぱーるからきましたにほんごのべんきょうとぶかつどうをがんばりたいですよろしくおねがいします",
        ruby: { 
            hiragana: "<ruby>初<rt>はじめ</rt></ruby>まして。<br>ネパールから<ruby>来<rt>き</rt></ruby>ました。<br><ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>と<ruby>部活動<rt>ぶかつどう</rt></ruby>を<ruby>頑張<rt>がんば</rt></ruby>りたいです。<br><ruby>宜<rt>よろ</rt></ruby>しくお<ruby>願<rt>ねが</rt></ruby>いします。", 
            romaji: "Hajimemashite.<br>Nepaaru kara kimashita.<br>Nihongo no benkyou to bukatsudou o ganbaritai desu.<br>Yoroshiku onegai shimasu." 
        },
        context: {
            "ja": "転校してきた初日や、新しいクラスでみんなの前で自己紹介をする時に使います。",
            "en": "Used on your first day after transferring, or when introducing yourself in front of a new class.",
            "pt": "Usado no primeiro dia após a transferência ou ao se apresentar na frente de uma nova classe.", "zh-CN": "转校第一天或在新班级面前做自我介绍时使用。", "tl": "Ginagamit sa unang araw pagkalipat, o kapag nagpapakilala sa harap ng bagong klase.", "vi": "Dùng vào ngày đầu tiên chuyển trường, hoặc khi tự giới thiệu trước lớp mới.", "es": "Se usa el primer día después de transferirte, o al presentarte frente a una nueva clase.", "ne": "सरुवा भएर आएको पहिलो दिन वा नयाँ कक्षामा सबैको अगाडि आत्म-परिचय दिँदा प्रयोग गरिन्छ।", "id": "Digunakan pada hari pertama pindah sekolah, o saat memperkenalkan diri di depan kelas baru."
        },
        translations: {
            "en": "Nice to meet you. I came from Nepal. I want to do my best in my Japanese studies and club activities. Please be kind to me.",
            "pt": "Prazer em conhecê-lo. Vim do Nepal. Quero dar o meu melhor nos estudos de japonês e nas atividades do clube. Conto com a sua colaboração.",
            "zh-CN": "初次见面。我来自尼泊尔。我想在日语学习和社团活动上努力。请多关照。",
            "tl": "Ikinagagalak ko kayong makilala. Galing ako sa Nepal. Gusto kong galingan sa pag-aaral ng Japanese at sa mga club activity. Pakiusap, maging mabuti kayo sa akin.",
            "vi": "Rất vui được gặp các bạn. Em đến từ Nepal. Em muốn cố gắng học tiếng Nhật và tham gia hoạt động câu lạc bộ. Rất mong nhận được sự giúp đỡ.",
            "es": "Mucho gusto. Vengo de Nepal. Quiero dar lo mejor de mí en mis estudios de japonés y actividades del club. Cuento con su colaboración.",
            "ne": "नमस्ते। म नेपालबाट आएको हुँ। म जापानी भाषाको पढाइ र क्लबका गतिविधिहरूमा आफ्नो उत्कृष्ट प्रयास गर्न चाहन्छु। धन्यवाद।",
            "id": "Salam kenal. Saya datang dari Nepal. Saya ingin berusaha keras dalam belajar bahasa Jepang dan kegiatan klub. Mohon bimbingannya."
        }
    },
    {
        id: "japeak_para_stu_002", audio: "audio/japeak_para_stu_002.mp3", title: "体調不良を伝える (Feeling Unwell)", category: "student_paragraphs",
        japanese: "少し熱があって、頭が痛いです。保健室で休んでもいいですか。おうちに電話をしたいです。",
        target_speech: "すこしねつがあってあたまがいたいですほけんしつでやすんでもいいですかおうちにでんわをしたいです",
        ruby: { 
            hiragana: "少し熱があって、頭が痛いです。<br>保健室で休んでもいいですか。<br>おうちに電話をしたいです。", 
            romaji: "Sukoshi netsu ga atte, atama ga itai desu.<br>Hokenshitsu de yasunde mo ii desu ka.<br>Ouchi ni denwa o shitai desu." 
        },
        context: {
            "ja": "授業中や休み時間に体調が悪くなり、保健室に行きたい時や保護者に連絡してほしい時に伝えます。",
            "en": "Used during class or break time when you feel sick, want to rest in the clinic, or need to call home.",
            "pt": "Usado durante a aula ou intervalo quando você se sente doente e quer ir à enfermaria.", "zh-CN": "上课或休息时间身体不舒服，想去保健室或想给家里打电话时使用。", "tl": "Ginagamit kapag masama ang pakiramdam sa klase at gustong magpahinga sa klinika.", "vi": "Dùng khi bạn bị ốm trong giờ học hoặc giờ giải lao, muốn nghỉ ở phòng y tế.", "es": "Se usa durante la clase o el recreo quando te sientes mal y quieres ir a la enfermería.", "ne": "कक्षा वा छुट्टीको समयमा बिरामी पर्दा, स्वास्थ्य कक्षमा आराम गर्न वा घरमा फोन गर्न चाहँदा भनिन्छ।", "id": "Digunakan saat merasa tidak enak badan di kelas, ingin istirahat di UKS, atau ingin menelepon rumah."
        },
        translations: {
            "en": "I have a slight fever and my head hurts. May I rest in the nurse's office? I would like to call my home.",
            "pt": "Estou com um pouco de febre e dor de cabeça. Posso descansar na enfermaria? Quero ligar para casa.",
            "zh-CN": "我有点发烧，头痛。我可以去保健室休息吗？我想给家里打个电话。",
            "tl": "May kaunting lagnat po ako at masakit ang ulo ko. Maaari po ba akong magpahinga sa klinika? Gusto ko pong tumawag sa bahay.",
            "vi": "Em hơi sốt và bị đau đầu. Em có thể xuống phòng y tế nghỉ được không ạ? Em muốn gọi điện về nhà.",
            "es": "Tengo un pouco de fiebre y me duele la cabeza. ¿Puedo descansar en la enfermería? Me gustaría llamar a casa.",
            "ne": "मलाई अलि ज्वरो आएको छ र टाउको दुखिरहेको छ। के म स्वास्थ्य कक्षमा आराम गर्न सक्छु? म घरमा फोन गर्न चाहन्छु।",
            "id": "Saya agak demam dan kepala saya sakit. Bolehkah saya istirahat di UKS? Saya ingin menelepon rumah."
        }
    },
    {
        id: "japeak_para_stu_003", audio: "audio/japeak_para_stu_003.mp3", title: "宿題を忘れた時 (Forgetting Homework)", category: "student_paragraphs",
        japanese: "宿題のプリントを家に忘れてしまいました。明日の朝、必ず提出します。すみません。",
        target_speech: "しゅくだいのぷりんとをいえにわすれてしまいましたあしたのあさかならずていしゅつしますすみません",
        ruby: { 
            hiragana: "<ruby>宿題<rt>しゅくだい</rt></ruby>のプリントを<ruby>家<rt>いえ</rt></ruby>に<ruby>忘<rt>わす</rt></ruby>れてしまいました。<br><ruby>明日<rt>あした</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>、<ruby>必<rt>かなら</rt></ruby>ず<ruby>提出<rt>ていしゅつ</rt></ruby>します。<br>すみません。", 
            romaji: "Shukudai no purinto o ie ni wasurete shimaimashita.<br>Ashita no asa, kanarazu teishutsu shimasu.<br>Sumimasen." 
        },
        context: {
            "ja": "やっておいた宿題のプリントを家に忘れてきてしまい、先生に謝って提出期限を相談する時に使います。",
            "en": "Used to apologize to the teacher and promise to bring it the next morning when you left your homework at home.",
            "pt": "Usado para pedir desculpas ao professor quando você esquece a lição de casa.", "zh-CN": "把做好的作业讲义忘在家里，向老师道并保证明天交时使用。", "tl": "Ginagamit para humingi ng paumanhin sa guro kapag naiwan ang homework sa bahay.", "vi": "Dùng để xin lỗi giáo viên và hứa sáng mai sẽ nộp khi bạn để quên bài tập ở nhà.", "es": "Se usa para disculparsetenindo el profesor cuando olvidaste la tarea en casa.", "ne": "गरेको गृहकार्यको पेपर घरमा बिर्संदा, शिक्षकसँग माफी मागेर भोलि बुझाउँछु भन्न प्रयोग गरिन्छ。", "id": "Digunakan untuk meminta maaf kepada guru ketika Anda meninggalkan lembar PR di rumah."
        },
        translations: {
            "en": "I forgot my homework worksheet at home. I will definitely submit it tomorrow morning. I'm sorry.",
            "pt": "Esqueci a folha de lição de casa em casa. Com certeza vou entregar amanhã de manhã. Desculpe.",
            "zh-CN": "我把作业讲义忘在家里了。明天早上我一定提交。对不起。",
            "tl": "Naiwan ko po sa bahay ang aking homework handout. Sigurado pong ipapasa ko bukas ng umaga. Pasensya na po.",
            "vi": "Em để quên tờ bài tập ở nhà mất rồi ạ. Sáng mai em nhất định sẽ nộp. Em xin lỗi thầy/cô.",
            "es": "Olvidé la hoja de tarea en casa. Sin falta la entregaré mañana por la mañana. Lo siento.",
            "ne": "मैले गृहकार्यको पेपर घरमै बिर्सिएँ। भोलि बिहान निश्चित रूपमा बुझाउनेछु। माफ गर्नुहोस्।",
            "id": "Saya lupa membawa lembar PR saya di rumah. Besok pagi, pasti akan saya kumpulkan. Maaf."
        }
    },

    // ------------------------------------------
    // 👪 ほごしゃ編（parent_paragraphs）
    // ------------------------------------------
    {
        id: "japeak_para_par_001", audio: "audio/japeak_para_par_001.mp3", title: "欠席の連絡 (Reporting an Absence)", category: "parent_paragraphs",
        japanese: "いつもお世話になっております。息子のタロウですが、今朝から熱が３８度あります。今日は学校を休ませます。",
        target_speech: "いつもおせわになっておりますむすこのたろうですがけさからねつがさんじゅうはちどありますきょうはがっこうをやすませます",
        ruby: { 
            hiragana: "いつもお<ruby>世話<rt>せわ</rt></ruby>になっております。<br><ruby>息子<rt>むすこ</rt></ruby>のタロウですが、<ruby>今朝<rt>けさ</rt></ruby>から<ruby>熱<rt>ねつ</rt></ruby>が３８<ruby>度<rt>ど</rt></ruby>あります。<br><ruby>今日<rt>きょう</rt></ruby>は<ruby>学校<rt>がっこう</rt></ruby>を<ruby>休<rt>やす</rt></ruby>ませます。", 
            romaji: "Itsumo osewa ni natte orimasu.<br>Musuko no Tarou desu ga, kesa kara netsu ga sanjuuhachi-do arimasu.<br>Kyou wa gakkou o yasumasemasu." 
        },
        context: {
            "ja": "朝、子どもが病気になった時に、保護者が学校（担任の先生）に電話や連絡帳で伝える定番の文章です。",
            "en": "A standard phrase used by parents to inform the school (homeroom teacher) via phone or contact book when a child is sick in the morning.",
            "pt": "Uma frase padrão usada pelos pais para informar a escola quando o filho está doente de manhã.", "zh-CN": "早上孩子生病时，家长通过电话或联络簿向学校（班主任）说明情况的固定句式。", "tl": "Isang karaniwang pangungusap na ginagamit ng magulang para ipaalam sa paaralan na may sakit ang anak.", "vi": "Câu mẫu chuẩn để phụ huynh thông báo cho nhà trường khi con bị ốm vào buổi sáng.", "es": "Una frase estándar usada por los padres para informar a la escuela cuando el hijo está enfermo por la mañana.", "ne": "बिहान बच्चा बिरामी हुँदा, अभिभावकले विद्यालय (कक्षा शिक्षक) लाई फोन वा सम्पर्क डायरी मार्फत जानकारी दिने वाक्य।", "id": "Kalimat standar yang digunakan orang tua untuk memberitahu sekolah saat anak sakit di pagi hari."
        },
        translations: {
            "en": "Thank you for always taking care of my child. Regarding my son, Taro, he has had a fever of 38 degrees since this morning. I will have him stay home from school today.",
            "pt": "Obrigado por sempre cuidar do meu filho. Sobre o meu filho Taro, ele está com febre de 38 graus desde hoje de manhã. Vou deixá-lo descansar da escola hoje.",
            "zh-CN": "非常感谢您一直以来的照顾。我的儿子太郎今天早上开始发烧38度。今天让他请假不去上学。",
            "tl": "Salamat po sa laging pag-aalaga sa aking anak. Tungkol po sa anak kong si Taro, may lagnat po siyang 38 degrees simula kaninang umaga. Papakahit muna siya sa bahay ngayon.",
            "vi": "Xin chào thầy/cô. Con trai tôi là Taro bị sốt 38 độ từ sáng nay. Hôm nay tôi xin phép cho cháu nghỉ học ạ.",
            "es": "Gracias por cuidar sempre de mi hijo. Con respecto a mi hijo Taro, tiene fiebre de 38 grados desde esta mañana. Lo haré faltar a la escuela hoy.",
            "ne": "सधैं सहयोग गर्नुभएकोमा धन्यवाद। मेरो छोरा तारोलाई आज बिहानदेखि ३८ डिग्री ज्वरो आएको छ। त्यसैले आज उसलाई स्कुल पठाउँदिनँ।",
            "id": "Terima kasih atas bimbingannya selalu. Mengenai anak saya Taro, dia demam 38 derajat sejak pagi ini. Hari ini saya ijin tidak menyekolahkannya."
        }
    },
    {
        id: "japeak_para_par_002", audio: "audio/japeak_para_par_002.mp3", title: "持ち物の確認 (Checking School Supplies)", category: "parent_paragraphs",
        japanese: "お世話になります。昨日もらったプリントを見ました。明日の遠足の持ち物がよく分かりません。教えてください。",
        target_speech: "おせわになりますきのうもらったぷりんとをみましたあしたのえんそくのもちものがよくわかりませんおしえてください",
        ruby: { 
            hiragana: "お<ruby>世話<rt>せわ</rt></ruby>になります。<br><ruby>昨日<rt>きのう</rt></ruby>もらったプリントを<ruby>見<rt>み</rt></ruby>ました。<br><ruby>明日<rt>あした</rt></ruby>の<ruby>遠足<rt>えんそく</rt></ruby>の<ruby>持ち物<rt>もちもの</rt></ruby>がよく分かりません。<br>教えてください。", 
            romaji: "Osewa ni narimasu.<br>Kinou moratta purinto o mimashita.<br>Ashita no ensoku no mochimono ga yoku wakarimasen.<br>Oshiete kudasai." 
        },
        context: {
            "ja": "学校から配布されたプリントを読んでも、次の日のイベント（遠足など）の持ち物が分からない時に先生に質問する文章です。",
            "en": "Used to ask the teacher when you don't understand the required supplies for tomorrow's field trip written on the handout.",
            "pt": "Usado para perguntar ao professor quando você não entende os materiais necessários para a excursão de amanhã.", "zh-CN": "看了学校发的通知单，还是不明白明天活动（如远足）需要带什么物品时，向老师请教的用语。", "tl": "Ginagamit upang magtanong sa titser kapag hindi naintindihan ang mga dadalhin para sa lakbay-aral bukas.", "vi": "Dùng để hỏi giáo viên khi đọc tài liệu trường phát nhưng chưa rõ đồ dùng cần mang cho chuyến dã ngoại ngày mai.", "es": "Se usa para preguntar al profesor cuando no entiendes los materiales para la excursión de mañana.", "ne": "विद्यालयबाट पाएको कागज हेर्दा पनि भोलिको पिकनिकको लागि चाहिने सामान नबुझ्दा शिक्षकलाई सोध्ने वाक्य।", "id": "Digunakan untuk bertanya kepada guru saat tidak memahami barang bawaan untuk piknik besok setelah membaca lembaran pengumuman."
        },
        translations: {
            "en": "Thank you for your support. I looked at the handout I received yesterday. I don't really understand the items needed for tomorrow's field trip. Please tell me.",
            "pt": "Obrigado pelo suporte. Vi o folheto que recebi ontem. Não entendi muito bem o que levar para a excursão de amanhã. Por favor, me informe.",
            "zh-CN": "谢谢您的照顾。我看了昨天发的手册。说明天远足要带的东西我不太明白。请告诉我。",
            "tl": "Salamat po. Nakita ko po ang handout na binigay kahapon. Hindi ko po gaanong naintindihan ang mga dadalhin para sa lakbay-aral bukas. Pakiusap, pakisabi po sa amin.",
            "vi": "Chào thầy/cô. Tôi đã xem tờ thông báo nhận được hôm qua. Tôi không rõ lắm về đồ dùng cần mang cho chuyến dã ngoại ngày mai. Xin hãy hướng dẫn giúp tôi.",
            "es": "Gracias por su apoyo. Vi la hoja que recibí ayer. No entiendo muy bien las cosas que hay que llevar para la excursión de mañana. Por favor, dígame.",
            "ne": "नमस्कार। मैले हिजो पाएको कागज हेरेँ। भोलिको पिकनिकको लागि लैजाने सामानहरू राम्रोसँग बुझिनँ। कृपया मलाई बताइदिनुहोस्।",
            "id": "Terima kasih atas bantuannya. Saya sudah membaca lembaran yang diberikan kemarin. Saya kurang paham barang bawaan untuk piknik besok. Mohon penjelasannya."
        }
    }
];