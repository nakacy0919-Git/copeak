// ==========================================
// Japeak 教材データベース（保健室・体調不良）
// ==========================================
const japeakHealthData = [
    {
        id: "japeak_hlt_001", audio: "audio/japeak_hlt_001.mp3", title: "頭が痛い (Headache)", category: "health_clinic",
        japanese: "頭が痛いです。", target_speech: "あたまがいたいです",
        ruby: { hiragana: "<ruby>頭<rt>あたま</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>いです。", romaji: "Atama ga itai desu." },
        context: {
            "ja": "授業中や休み時間に、頭が痛くなった時に先生に伝える言葉です。無理をせずに早めに言いましょう。",
            "en": "Used to tell the teacher when you get a headache during class or break time. Don't push yourself and tell them early.",
            "pt": "Usado para dizer ao professor quando você está com dor de cabeça. Não se esforce muito e avise logo.", "zh-CN": "上课或休息时头痛，用来向老师报告的用语。不要勉强，尽早说明。", "tl": "Ginagamit para sabihin sa guro na masakit ang iyong ulo. Huwag pilitin ang sarili at sabihin agad.", "vi": "Dùng để nói với giáo viên khi bạn bị đau đầu. Đừng cố quá mà hãy báo sớm.", "es": "Se usa para decirle al profesor que te duele la cabeza. No te exijas demasiado y avisa pronto.", "ne": "कक्षा वा खाजा समयमा टाउको दुख्दा शिक्षकलाई भन्न प्रयोग गरिन्छ। गाह्रो नमान्नुहोस् र छिट्टै भन्नुहोस्।", "id": "Digunakan untuk memberitahu guru saat Anda sakit kepala. Jangan dipaksakan dan beritahu secepatnya."
        },
        translations: {
            "en": "My head hurts. / I have a headache.", "pt": "Minha cabeça dói. / Estou com dor de cabeça.", "zh-CN": "我头痛。", "tl": "Masakit po ang ulo ko.", "vi": "Em bị đau đầu ạ.", "es": "Me duele la cabeza.", "ne": "मेरो टाउको दुखेको छ।", "id": "Kepala saya sakit."
        }
    },
    {
        id: "japeak_hlt_002", audio: "audio/japeak_hlt_002.mp3", title: "お腹が痛い (Stomachache)", category: "health_clinic",
        japanese: "お腹が痛いです。", target_speech: "おなかがいたいです",
        ruby: { hiragana: "お<ruby>腹<rt>なか</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>いです。", romaji: "Onaka ga itai desu." },
        context: {
            "ja": "お腹の調子が悪い時に使います。トイレに行きたい時や保健室に行きたい時に、すぐ先生に言いましょう。",
            "en": "Used when your stomach feels bad. Tell the teacher immediately if you need to go to the bathroom or the nurse's office.",
            "pt": "Usado quando você está com dor de estômago. Avise o professor imediatamente se precisar ir ao banheiro ou à enfermaria.", "zh-CN": "肚子痛时使用。想去洗手间或保健室时，请立刻告诉老师。", "tl": "Ginagamit kapag masakit ang tiyan. Sabihin agad sa guro kung kailangan mong pumunta sa banyo o klinika.", "vi": "Dùng khi bị đau bụng. Hãy báo ngay cho giáo viên nếu bạn muốn đi vệ sinh hoặc xuống phòng y tế.", "es": "Se usa cuando te duele el estómago. Dile al profesor de inmediato si necesitas ir al baño o a la enfermería.", "ne": "पेट दुख्दा प्रयोग गरिन्छ। शौचालय वा स्वास्थ्य कक्ष जानु परेमा तुरुन्तै शिक्षकलाई भन्नुहोस्।", "id": "Digunakan saat perut terasa sakit. Segera beritahu guru jika ingin ke toilet atau UKS."
        },
        translations: {
            "en": "My stomach hurts. / I have a stomachache.", "pt": "Minha barriga dói. / Estou com dor de estômago.", "zh-CN": "我肚子痛。", "tl": "Masakit po ang tiyan ko.", "vi": "Em bị đau bụng ạ.", "es": "Me duele el estómago.", "ne": "मेरो पेट दुखेको छ।", "id": "Perut saya sakit."
        }
    },
    {
        id: "japeak_hlt_003", audio: "audio/japeak_hlt_003.mp3", title: "気持ちが悪い (Feeling Sick/Nauseous)", category: "health_clinic",
        japanese: "気持ちが悪いです。", target_speech: "きもちがわるいです",
        ruby: { hiragana: "<ruby>気持<rt>きも</rt></ruby>ちが<ruby>悪<rt>わる</rt></ruby>いです。", romaji: "Kimochi ga warui desu." },
        context: {
            "ja": "吐き気がしたり、気分が悪くなったりした時に使う大切な言葉です。我慢してはいけません。",
            "en": "An important phrase used when you feel nauseous or unwell. Do not try to endure it.",
            "pt": "Uma frase importante usada quando você sente náuseas ou mal-estar. Não tente aguentar.", "zh-CN": "恶心想吐或感觉不舒服时使用的重要用语。千万不要强忍着。", "tl": "Isang mahalagang parirala kapag nakakaramdam ka ng pagduduwal o masama ang pakiramdam. Huwag itong tiisin.", "vi": "Một câu quan trọng dùng khi bạn cảm thấy buồn nôn hoặc khó ở. Đừng cố chịu đựng.", "es": "Una frase importante que se usa cuando sientes náuseas o malestar. No trates de aguantar.", "ne": "वाकवाकी लाग्दा वा सन्चो नहुँदा प्रयोग गरिने महत्त्वपूर्ण वाक्यांश। यसलाई सहेर नबस्नुहोस्।", "id": "Kalimat penting yang digunakan saat Anda merasa mual atau tidak enak badan. Jangan ditahan."
        },
        translations: {
            "en": "I feel sick. / I feel nauseous.", "pt": "Estou me sentindo mal. / Sinto náuseas.", "zh-CN": "我有点恶心/不舒服。", "tl": "Masama po ang pakiramdam ko. / Nasusuka po ako.", "vi": "Em thấy buồn nôn / khó chịu trong người ạ.", "es": "Me siento mal. / Tengo náuseas.", "ne": "मलाई वाकवाकी लागिरहेको छ / बिसन्चो छ।", "id": "Saya merasa mual / tidak enak badan."
        }
    },
    {
        id: "japeak_hlt_004", audio: "audio/japeak_hlt_004.mp3", title: "熱がある (Having a Fever)", category: "health_clinic",
        japanese: "熱があります。", target_speech: "ねつがあります",
        ruby: { hiragana: "<ruby>熱<rt>ねつ</rt></ruby>があります。", romaji: "Netsu ga arimasu." },
        context: {
            "ja": "体が熱くて、風邪かもしれないと思った時に先生に伝えます。体温計で熱を測りましょう。",
            "en": "Used to tell the teacher when your body feels hot and you think you might have a cold. Let's take your temperature.",
            "pt": "Usado para dizer ao professor quando seu corpo está quente e você acha que pode estar gripado.", "zh-CN": "感觉身体发烫，可能感冒时向老师报告。需要用体温计量一下体温。", "tl": "Ginagamit kapag mainit ang iyong katawan at sa tingin mo ay may lagnat ka.", "vi": "Dùng để báo với giáo viên khi thấy người nóng và nghĩ mình bị cảm. Hãy đo thân nhiệt nhé.", "es": "Se usa para decirle al profesor cuando tu cuerpo está caliente y crees que podrías tener un resfriado.", "ne": "शरीर तातो भएर ज्वरो आएको जस्तो लाग्दा शिक्षकलाई भन्न प्रयोग गरिन्छ। थर्मोमिटरले ज्वरो नापौं।", "id": "Digunakan saat badan terasa panas dan Anda merasa mungkin terkena flu. Mari ukur suhu tubuh Anda."
        },
        translations: {
            "en": "I have a fever.", "pt": "Estou com febre.", "zh-CN": "我发烧了。", "tl": "May lagnat po ako.", "vi": "Em bị sốt ạ.", "es": "Tengo fiebre.", "ne": "मलाई ज्वरो आएको छ।", "id": "Saya demam."
        }
    },
    {
        id: "japeak_hlt_005", audio: "audio/japeak_hlt_005.mp3", title: "ケガをした (Got Injured)", category: "health_clinic",
        japanese: "ケガをしました。", target_speech: "けがをしました",
        ruby: { hiragana: "ケガをしました。", romaji: "Kega o shimashita." },
        context: {
            "ja": "転んだり、ぶつけたりして血が出たり痛い時に、すぐ先生に伝えてください。",
            "en": "Tell the teacher immediately if you fall, bump into something, bleed, or feel pain.",
            "pt": "Avise o professor imediatamente se você cair, bater em algo, sangrar ou sentir dor.", "zh-CN": "摔倒、撞到导致流血或疼痛时，请立刻告诉老师。", "tl": "Sabihin agad sa guro kung ikaw ay nadapa, nabunggo, dumugo, o nakaramdam ng sakit.", "vi": "Hãy báo ngay cho giáo viên nếu bạn bị ngã, va đập gây chảy máu hoặc đau đớn.", "es": "Dile al profesor inmediatamente si te caes, te golpeas, sangras o sientes dolor.", "ne": "लडेर, ठोक्किएर रगत आउँदा वा दुख्दा तुरुन्तै शिक्षकलाई भन्नुहोस्।", "id": "Segera beritahu guru jika Anda jatuh, terbentur, berdarah, atau merasa sakit."
        },
        translations: {
            "en": "I got injured. / I hurt myself.", "pt": "Eu me machuquei.", "zh-CN": "我受伤了。", "tl": "Nasugatan po ako. / Nasaktan po ako.", "vi": "Em bị thương rồi ạ.", "es": "Me lastimé. / Me herí.", "ne": "मलाई चोट लाग्यो।", "id": "Saya terluka."
        }
    },
    {
        id: "japeak_hlt_006", audio: "audio/japeak_hlt_006.mp3", title: "保健室に行きたい (Going to the Clinic)", category: "health_clinic",
        japanese: "保健室に行ってもいいですか。", target_speech: "ほけんしつにいってもいいですか",
        ruby: { hiragana: "<ruby>保健室<rt>ほけんしつ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってもいいですか。", romaji: "Hokenshitsu ni itte mo ii desu ka." },
        context: {
            "ja": "体調が悪くて、保健室（学校の病院のような部屋）で休みたい時や手当てをしてほしい時に先生に許可をもらいます。",
            "en": "Used to ask the teacher for permission to go to the nurse's office (clinic) when you feel unwell and need to rest or get treatment.",
            "pt": "Usado para pedir permissão ao professor para ir à enfermaria quando você não se sente bem.", "zh-CN": "身体不舒服，想去保健室休息或处理伤口时，向老师寻求许可的用语。", "tl": "Ginagamit para humingi ng pahintulot na pumunta sa klinika ng paaralan kapag masama ang pakiramdam.", "vi": "Dùng để xin phép giáo viên xuống phòng y tế khi cảm thấy không khỏe, muốn nghỉ ngơi hoặc sơ cứu.", "es": "Se usa para pedir permiso al profesor para ir a la enfermería cuando no te sientes bien.", "ne": "सन्चो नभएर स्वास्थ्य कक्ष (नर्सको कोठा) मा गएर आराम गर्न वा उपचार गर्न अनुमति माग्दा प्रयोग गरिन्छ।", "id": "Digunakan untuk meminta izin pergi ke UKS saat Anda merasa tidak enak badan dan butuh istirahat atau perawatan."
        },
        translations: {
            "en": "May I go to the nurse's office?", "pt": "Posso ir à enfermaria?", "zh-CN": "我可以去保健室吗？", "tl": "Maaari po ba akong pumunta sa klinika?", "vi": "Em có thể xuống phòng y tế được không ạ?", "es": "¿Puedo ir a la enfermería?", "ne": "म स्वास्थ्य कक्ष जान सक्छु?", "id": "Bolehkah saya pergi ke ruang UKS?"
        }
    },
    {
        id: "japeak_hlt_007", audio: "audio/japeak_hlt_007.mp3", title: "薬を飲みたい (Taking Medicine)", category: "health_clinic",
        japanese: "薬を飲んでもいいですか。", target_speech: "くすりをのんでもいいですか",
        ruby: { hiragana: "<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んでもいいですか。", romaji: "Kusuri o nonde mo ii desu ka." },
        context: {
            "ja": "自分で持ってきた薬を授業中などに飲みたい時に、先生に確認する言葉です。",
            "en": "Used to ask the teacher for permission to take medicine you brought with you during class.",
            "pt": "Usado para pedir permissão ao professor para tomar o remédio que você trouxe.", "zh-CN": "上课时想吃自己带来的药，用来向老师确认的用语。", "tl": "Ginagamit upang humingi ng pahintulot sa guro na inumin ang dalang gamot.", "vi": "Dùng để xin phép giáo viên uống thuốc bạn tự mang theo trong giờ học.", "es": "Se usa para pedir permiso al profesor para tomar la medicina que trajiste.", "ne": "आफूले ल्याएको औषधि कक्षामा खानु परेमा शिक्षकसँग अनुमति माग्ने शब्द।", "id": "Digunakan untuk meminta izin meminum obat yang Anda bawa sendiri saat pelajaran."
        },
        translations: {
            "en": "May I take my medicine?", "pt": "Posso tomar meu remédio?", "zh-CN": "我可以吃药吗？", "tl": "Maaari ko po bang inumin ang aking gamot?", "vi": "Em uống thuốc được không ạ?", "es": "¿Puedo tomar mi medicina?", "ne": "म औषधि खान सक्छु?", "id": "Bolehkah saya minum obat?"
        }
    },
    {
        id: "japeak_hlt_008", audio: "audio/japeak_hlt_008.mp3", title: "休みたい (Want to Rest)", category: "health_clinic",
        japanese: "少し休みたいです。", target_speech: "すこしやすみたいです",
        ruby: { hiragana: "<ruby>少<rt>すこ</rt></ruby>し<ruby>休<rt>やす</rt></ruby>みたいです。", romaji: "Sukoshi yasumitai desu." },
        context: {
            "ja": "体育の授業中や集会の時など、疲れたり具合が悪くて少し座って休みたい時に使います。",
            "en": "Used when you feel tired or unwell during PE class or an assembly and want to sit and rest for a bit.",
            "pt": "Usado quando você se sente cansado ou mal durante a aula de educação física e quer descansar um pouco.", "zh-CN": "上体育课或集会时，感到疲劳或不适，想坐下休息一会儿时使用。", "tl": "Ginagamit kapag pagod o masama ang pakiramdam sa PE class at gusto mong magpahinga saglit.", "vi": "Dùng khi thấy mệt hoặc khó ở trong giờ Thể dục hoặc chào cờ và muốn ngồi nghỉ một chút.", "es": "Se usa cuando te sientes cansado o mal durante la clase de educación física y quieres descansar un poco.", "ne": "शारीरिक शिक्षा (PE) कक्षामा वा भेलामा थाकेको वा गाह्रो महसुस भएर एकछिन आराम गर्न मन लाग्दा प्रयोग गरिन्छ।", "id": "Digunakan saat Anda merasa lelah atau tidak sehat saat pelajaran olahraga dan ingin beristirahat sebentar."
        },
        translations: {
            "en": "I want to rest a little.", "pt": "Quero descansar um pouco.", "zh-CN": "我想休息一下。", "tl": "Gusto ko po sanang magpahinga saglit.", "vi": "Em muốn nghỉ ngơi một chút ạ.", "es": "Quiero descansar un poco.", "ne": "म एकछिन आराम गर्न चाहन्छु।", "id": "Saya ingin beristirahat sebentar."
        }
    },
    {
        id: "japeak_hlt_009", audio: "audio/japeak_hlt_009.mp3", title: "喉が痛い (Sore Throat)", category: "health_clinic",
        japanese: "喉が痛いです。", target_speech: "のどがいたいです",
        ruby: { hiragana: "<ruby>喉<rt>のど</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>いです。", romaji: "Nodo ga itai desu." },
        context: {
            "ja": "風邪をひいて、つばを飲み込むと喉が痛い時や、咳が出る時に使います。",
            "en": "Used when you have a cold, it hurts to swallow, or you have a cough.",
            "pt": "Usado quando você está resfriado e dói para engolir ou está com tosse.", "zh-CN": "感冒时吞咽困难或咳嗽喉咙痛时使用。", "tl": "Ginagamit kapag may sipon ka at masakit lumunok, o inuubo ka.", "vi": "Dùng khi bạn bị cảm, nuốt nước bọt thấy đau họng hoặc khi bị ho.", "es": "Se usa cuando tienes un resfriado, te duele al tragar o tienes tos.", "ne": "रुघाखोकी लागेर थुक निल्दा घाँटी दुख्दा वा खोकी लाग्दा प्रयोग गरिन्छ।", "id": "Digunakan saat Anda terkena flu, sakit saat menelan, atau sedang batuk."
        },
        translations: {
            "en": "My throat hurts. / I have a sore throat.", "pt": "Minha garganta dói.", "zh-CN": "我喉咙痛。", "tl": "Masakit po ang lalamunan ko.", "vi": "Em bị đau họng ạ.", "es": "Me duele la garganta.", "ne": "मेरो घाँटी दुखेको छ।", "id": "Tenggorokan saya sakit."
        }
    },
    {
        id: "japeak_hlt_010", audio: "audio/japeak_hlt_010.mp3", title: "鼻血が出た (Nosebleed)", category: "health_clinic",
        japanese: "鼻血が出ました。", target_speech: "はなぢがでました",
        ruby: { hiragana: "<ruby>鼻血<rt>はなぢ</rt></ruby>が<ruby>出<rt>で</rt></ruby>ました。", romaji: "Hanaji ga demashita." },
        context: {
            "ja": "鼻から血が出た時に使います。ティッシュをもらったり、保健室に行くためにすぐ言いましょう。",
            "en": "Used when your nose is bleeding. Tell the teacher immediately to get tissues or go to the nurse's office.",
            "pt": "Usado quando seu nariz está sangrando. Avise imediatamente para pegar lenços ou ir à enfermaria.", "zh-CN": "流鼻血时使用。请立刻告诉老师以拿取纸巾或前往保健室。", "tl": "Ginagamit kapag dumudugo ang ilong. Sabihin agad para makakuha ng tissue o makapunta sa klinika.", "vi": "Dùng khi bị chảy máu cam. Hãy báo ngay để lấy giấy hoặc xuống phòng y tế.", "es": "Se usa cuando te sangra la nariz. Avisa inmediatamente para pedir pañuelos o ir a la enfermería.", "ne": "नाकबाट रगत आउँदा प्रयोग गरिन्छ। टिस्यु पेपर माग्न वा स्वास्थ्य कक्ष जान तुरुन्तै भन्नुहोस्।", "id": "Digunakan saat mimisan. Segera beritahu guru untuk meminta tisu atau pergi ke UKS."
        },
        translations: {
            "en": "My nose is bleeding. / I have a nosebleed.", "pt": "Meu nariz está sangrando.", "zh-CN": "我流鼻血了。", "tl": "Dumudugo po ang ilong ko.", "vi": "Em bị chảy máu cam ạ.", "es": "Me sangra la nariz.", "ne": "मेरो नाकबाट रगत बगिरहेको छ।", "id": "Hidung saya berdarah (mimisan)."
        }
    }
];