// ==========================================
// Japeak 教材データベース（登下校・挨拶）
// ==========================================
const japeakCommutingData = [
    {
        id: "japeak_com_001", title: "丁寧な朝の挨拶 (Polite Good Morning)", category: "commuting",
        japanese: "おはようございます。", target_speech: "おはようございます",
        ruby: { hiragana: "おはようございます。", romaji: "Ohayou gozaimasu." },
        context: {
            "ja": "先生や先輩、近所の人に朝会った時に使う、丁寧な挨拶です。元気な声で言いましょう。",
            "en": "A polite greeting used when meeting teachers, seniors, or neighbors in the morning. Say it cheerfully.",
            "pt": "Uma saudação educada usada ao encontrar professores, veteranos ou vizinhos de manhã. Diga com alegria.",
            "zh-CN": "早上遇到老师、前辈或邻居时使用的礼貌问候。请用精神饱满的声音说。",
            "tl": "Isang magalang na pagbati sa umaga para sa mga guro, senior, o kapitbahay. Sabihin ito nang masaya.",
            "vi": "Lời chào lịch sự dùng khi gặp giáo viên, đàn anh hoặc hàng xóm vào buổi sáng. Hãy nói thật tươi tắn nhé.",
            "es": "Un saludo educado que se usa al encontrar a profesores, compañeros mayores o vecinos por la mañana.",
            "ne": "बिहान शिक्षक, सिनियर वा छिमेकीलाई भेट्दा प्रयोग गरिने विनम्र अभिवादन। हँसिलो अनुहारले भन्नुहोस्।",
            "id": "Salam sopan yang digunakan saat bertemu guru, senior, atau tetangga di pagi hari. Ucapkan dengan semangat."
        },
        translations: {
            "en": "Good morning. (Polite)", "pt": "Bom dia. (Educado)", "zh-CN": "早上好。（礼貌）", "tl": "Magandang umaga po.", "vi": "Chào buổi sáng. (Lịch sự)", "es": "Buenos días. (Educado)", "ne": "शुभ प्रभात। (विनम्र)", "id": "Selamat pagi. (Sopan)"
        }
    },
    {
        id: "japeak_com_002", title: "友達への朝の挨拶 (Casual Good Morning)", category: "commuting",
        japanese: "おはよう。", target_speech: "おはよう",
        ruby: { hiragana: "おはよう。", romaji: "Ohayou." },
        context: {
            "ja": "仲の良い友達やクラスメイトに朝会った時に使う、カジュアルな挨拶です。",
            "en": "A casual greeting used when meeting close friends or classmates in the morning.",
            "pt": "Uma saudação casual usada ao encontrar amigos próximos ou colegas de classe de manhã.",
            "zh-CN": "早上遇到好朋友或同班同学时使用的随和问候语。",
            "tl": "Isang kaswal na pagbati sa umaga para sa mga malalapit na kaibigan o kaklase.",
            "vi": "Lời chào thân mật dùng khi gặp bạn bè thân thiết hoặc bạn cùng lớp vào buổi sáng.",
            "es": "Un saludo informal que se usa al encontrar a amigos cercanos o compañeros de clase por la mañana.",
            "ne": "बिहान मिल्ने साथी वा सहपाठीलाई भेट्दा प्रयोग गरिने अनौपचारिक अभिवादन।",
            "id": "Salam santai yang digunakan saat bertemu teman dekat atau teman sekelas di pagi hari."
        },
        translations: {
            "en": "Good morning. (Casual)", "pt": "Bom dia. (Casual)", "zh-CN": "早啊。", "tl": "Magandang umaga.", "vi": "Chào buổi sáng. (Thân mật)", "es": "Buenos días. (Informal)", "ne": "शुभ प्रभात। (अनौपचारिक)", "id": "Pagi."
        }
    },
    {
        id: "japeak_com_003", title: "丁寧な別れの挨拶 (Polite Goodbye)", category: "commuting",
        japanese: "さようなら。", target_speech: "さようなら",
        ruby: { hiragana: "さようなら。", romaji: "Sayounara." },
        context: {
            "ja": "先生や地域の人に、学校の帰り道で別れる時に使う丁寧な挨拶です。",
            "en": "A polite greeting used when parting ways with teachers or community members on the way home from school.",
            "pt": "Uma saudação educada usada ao se despedir de professores ou membros da comunidade no caminho de casa.",
            "zh-CN": "放学回家的路上，与老师或社区居民道别时使用的礼貌问候语。",
            "tl": "Isang magalang na pagbati kapag nagpapaalam sa guro o mga tao sa komunidad pauwi galing paaralan.",
            "vi": "Lời chào lịch sự dùng khi tạm biệt giáo viên hoặc người dân trong khu vực trên đường đi học về.",
            "es": "Un saludo educado que se usa al despedirse de profesores o miembros de la comunidad camino a casa.",
            "ne": "विद्यालयबाट घर फर्कने बाटोमा शिक्षक वा स्थानीय मानिसहरूसँग बिदा हुँदा प्रयोग गरिने विनम्र अभिवादन।",
            "id": "Salam sopan yang digunakan saat berpisah dengan guru atau warga sekitar dalam perjalanan pulang dari sekolah."
        },
        translations: {
            "en": "Goodbye.", "pt": "Adeus. / Tchau.", "zh-CN": "再见。", "tl": "Paalam po.", "vi": "Tạm biệt.", "es": "Adiós.", "ne": "बिदा हौं (नमस्कार)।", "id": "Selamat tinggal."
        }
    },
    {
        id: "japeak_com_004", title: "友達との別れ (See You Tomorrow)", category: "commuting",
        japanese: "また明日。", target_speech: "またあした",
        ruby: { hiragana: "また<ruby>明日<rt>あした</rt></ruby>。", romaji: "Mata ashita." },
        context: {
            "ja": "友達と学校の帰り道で別れる時に使う、「明日も学校で会おうね」という意味の挨拶です。",
            "en": "A greeting used when parting ways with friends on the way home, meaning 'Let's meet again tomorrow at school.'",
            "pt": "Uma saudação usada ao se despedir de amigos a caminho de casa, significando 'Vamos nos ver amanhã na escola.'",
            "zh-CN": "放学回家路上与朋友道别时使用的用语，包含“明天学校见”的意思。",
            "tl": "Pagbati kapag naghihiwalay na kayo ng kaibigan pauwi, ibig sabihin ay 'Magkita tayo bukas sa paaralan.'",
            "vi": "Lời chào khi tạm biệt bạn bè trên đường về, mang ý nghĩa 'Ngày mai lại gặp nhau ở trường nhé.'",
            "es": "Un saludo que se usa al despedirse de amigos en el camino a casa, que significa 'Nos vemos mañana en la escuela'.",
            "ne": "स्कुलबाट फर्कंदा साथीसँग छुट्टिँदा 'भोलि स्कुलमा भेटौंला' भन्ने अर्थमा प्रयोग गरिने अभिवादन।",
            "id": "Salam saat berpisah dengan teman di jalan pulang, yang berarti 'Sampai jumpa besok di sekolah'."
        },
        translations: {
            "en": "See you tomorrow.", "pt": "Até amanhã.", "zh-CN": "明天见。", "tl": "Bukas ulit. / Hanggang bukas.", "vi": "Hẹn gặp lại vào ngày mai.", "es": "Hasta mañana.", "ne": "भोलि भेटौंला।", "id": "Sampai jumpa besok."
        }
    },
    {
        id: "japeak_com_005", title: "一緒に帰る (Let's Go Home Together)", category: "commuting",
        japanese: "一緒に帰ろう。", target_speech: "いっしょにかえろう",
        ruby: { hiragana: "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ろう。", romaji: "Issho ni kaerou." },
        context: {
            "ja": "学校が終わった後、友達を誘って同じ道を帰りたい時に使います。",
            "en": "Used to invite a friend to walk home together after school.",
            "pt": "Usado para convidar um amigo para irem juntos para casa depois da escola.",
            "zh-CN": "放学后，邀请朋友一起顺路回家时使用。",
            "tl": "Ginagamit para ayayain ang kaibigan na sabay kayong umuwi pagkatapos ng klase.",
            "vi": "Dùng để rủ bạn bè đi cùng đường về nhà sau khi tan học.",
            "es": "Se usa para invitar a un amigo a caminar juntos a casa después de la escuela.",
            "ne": "स्कुल सकिएपछि साथीलाई सँगै घर जान बोलाउन प्रयोग गरिन्छ।",
            "id": "Digunakan untuk mengajak teman pulang bersama setelah sekolah usai."
        },
        translations: {
            "en": "Let's go home together.", "pt": "Vamos para casa juntos.", "zh-CN": "我们一起回家吧。", "tl": "Sabay na tayong umuwi.", "vi": "Cùng về nhé.", "es": "Vamos a casa juntos.", "ne": "सँगै घर जाऔं।", "id": "Ayo pulang bersama."
        }
    },
    {
        id: "japeak_com_006", title: "友達を待たせる (Wait a Minute)", category: "commuting",
        japanese: "ちょっと待って。", target_speech: "ちょっとまって",
        ruby: { hiragana: "ちょっと<ruby>待<rt>ま</rt></ruby>って。", romaji: "Chotto matte." },
        context: {
            "ja": "帰る準備をしている時や、靴を履いている時に、友達に少し待ってほしいとお願いします。",
            "en": "Used to ask a friend to wait a moment while you are getting ready to leave or putting on your shoes.",
            "pt": "Usado para pedir a um amigo que espere um momento enquanto você se arruma ou calça os sapatos.",
            "zh-CN": "正在收拾书包或穿鞋时，请求朋友稍等一下的用语。",
            "tl": "Ginagamit para pakiusapan ang kaibigan na maghintay sandali habang ikaw ay naghahanda o nagsusuot ng sapatos.",
            "vi": "Dùng để nhờ bạn đợi một chút khi bạn đang chuẩn bị đồ hoặc mang giày.",
            "es": "Se usa para pedirle a un amigo que espere un momento mientras te preparas para irte o te pones los zapatos.",
            "ne": "घर जान झोला मिलाउँदा वा जुत्ता लगाउँदा साथीलाई एकछिन पर्खन अनुरोध गर्न प्रयोग गरिन्छ।",
            "id": "Digunakan untuk meminta teman menunggu sebentar saat Anda sedang bersiap pulang atau memakai sepatu."
        },
        translations: {
            "en": "Wait a minute.", "pt": "Espere um minuto.", "zh-CN": "等一下。", "tl": "Teka lang. / Sandali lang.", "vi": "Đợi một chút.", "es": "Espera un minuto.", "ne": "एकछिन पख है।", "id": "Tunggu sebentar."
        }
    },
    {
        id: "japeak_com_007", title: "安全を願う (Take Care)", category: "commuting",
        japanese: "気をつけてね。", target_speech: "きをつけてね",
        ruby: { hiragana: "<ruby>気<rt>き</rt></ruby>をつけてね。", romaji: "Ki o tsukete ne." },
        context: {
            "ja": "友達と別れる時に、交通事故などに遭わないように安全を願って言う優しい言葉です。",
            "en": "A kind phrase said when parting with a friend to wish them a safe trip home, free from accidents.",
            "pt": "Uma frase gentil dita ao se despedir de um amigo para desejar-lhe um caminho seguro para casa.",
            "zh-CN": "和朋友分别时，祈愿对方路上安全、不要发生交通事故的贴心话语。",
            "tl": "Isang mabait na parirala kapag naghihiwalay ng kaibigan, nag-iingat na sana ay makauwi sila nang ligtas.",
            "vi": "Một lời chúc tốt lành khi chia tay bạn bè, mong họ đi đường an toàn, không gặp tai nạn.",
            "es": "Una frase amable que se dice al despedirse de un amigo para desearle un viaje seguro a casa.",
            "ne": "साथीसँग छुट्टिँदा बाटोमा दुर्घटना नहोस् र सुरक्षित रूपमा घर पुगोस् भनेर भनिने मायालु शब्द।",
            "id": "Kalimat perhatian yang diucapkan saat berpisah dengan teman, mendoakan agar mereka selamat di jalan."
        },
        translations: {
            "en": "Take care. / Be careful.", "pt": "Tome cuidado. / Vá com cuidado.", "zh-CN": "路上小心。", "tl": "Mag-ingat ka.", "vi": "Đi đường cẩn thận nhé.", "es": "Cuídate. / Ten cuidado.", "ne": "बाटोमा होस गरेर जानु है।", "id": "Hati-hati di jalan."
        }
    },
    {
        id: "japeak_com_008", title: "先に帰る (Leaving First)", category: "commuting",
        japanese: "先に帰るね。", target_speech: "さきにかえるね",
        ruby: { hiragana: "<ruby>先<rt>さき</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>るね。", romaji: "Saki ni kaeru ne." },
        context: {
            "ja": "友達が掃除や部活でまだ残っているけれど、自分は用事があって先に学校を出る時に使います。",
            "en": "Used when you need to leave school earlier than your friends who are still doing chores or club activities.",
            "pt": "Usado quando você precisa sair da escola antes dos seus amigos que ainda estão limpando ou no clube.",
            "zh-CN": "朋友还在打扫卫生或参加社团，自己因为有事要先离开学校时使用。",
            "tl": "Ginagamit kapag kailangan mong maunang umuwi habang ang mga kaibigan mo ay may ginagawa pa.",
            "vi": "Dùng khi bạn có việc phải về trước, trong khi bạn bè vẫn còn ở lại dọn dẹp hoặc sinh hoạt câu lạc bộ.",
            "es": "Se usa cuando necesitas salir de la escuela antes que tus amigos que todavía están limpiando o en el club.",
            "ne": "साथीहरू सरसफाइ वा क्लबमा बसिरहेको बेला आफू काम परेर अघि नै घर फर्कंदा प्रयोग गरिन्छ।",
            "id": "Digunakan saat Anda harus pulang lebih dulu sementara teman-teman masih piket atau ada kegiatan klub."
        },
        translations: {
            "en": "I'm going home first.", "pt": "Vou indo para casa primeiro.", "zh-CN": "我先回去了。", "tl": "Mauuna na akong umuwi.", "vi": "Mình về trước nhé.", "es": "Me voy a casa primero.", "ne": "म अघि नै घर जान्छु है।", "id": "Aku pulang duluan ya."
        }
    },
    {
        id: "japeak_com_009", title: "寄り道をしない (Going Straight Home)", category: "commuting",
        japanese: "まっすぐ帰ります。", target_speech: "まっすぐかえります",
        ruby: { hiragana: "まっすぐ<ruby>帰<rt>かえ</rt></ruby>ります。", romaji: "Massugu kaerimasu." },
        context: {
            "ja": "学校の帰りにどこかのお店や公園に寄り道をせず、直接家に帰ることを先生に約束する言葉です。",
            "en": "Used to promise a teacher that you will go straight home without stopping at any shops or parks.",
            "pt": "Usado para prometer a um professor que você irá direto para casa sem parar em lojas ou parques.",
            "zh-CN": "向老师保证放学后不随便去商店或公园，直接回家。",
            "tl": "Ginagamit upang mangako sa guro na uuwi nang diretso nang hindi dadaan kung saan-saan.",
            "vi": "Dùng để hứa với giáo viên rằng bạn sẽ về thẳng nhà mà không la cà ở quán xá hay công viên.",
            "es": "Se usa para prometerle a un profesor que irás directo a casa sin detenerte en tiendas o parques.",
            "ne": "स्कुलबाट फर्कंदा कतै पसल वा पार्कमा नअल्मलिई सीधै घर जान्छु भनेर शिक्षकलाई वाचा गर्दा प्रयोग गरिन्छ।",
            "id": "Digunakan untuk berjanji kepada guru bahwa Anda akan langsung pulang tanpa mampir ke tempat lain."
        },
        translations: {
            "en": "I will go straight home.", "pt": "Vou direto para casa.", "zh-CN": "我会直接回家。", "tl": "Uuwi po ako nang diretso.", "vi": "Em sẽ về thẳng nhà ạ.", "es": "Iré directo a casa.", "ne": "म सीधै घर जानेछु।", "id": "Saya akan langsung pulang."
        }
    },
    {
        id: "japeak_com_010", title: "忘れ物を取りに戻る (Forgot Something)", category: "commuting",
        japanese: "学校に戻ります。", target_speech: "がっこうにもどります",
        ruby: { hiragana: "<ruby>学校<rt>がっこう</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>ります。", romaji: "Gakkou ni modorimasu." },
        context: {
            "ja": "家に帰る途中で学校に忘れ物をしたことに気づき、取りに帰ることを友達に伝えます。",
            "en": "Used to tell a friend that you realized you forgot something at school and are going back to get it.",
            "pt": "Usado para dizer a um amigo que você percebeu que esqueceu algo na escola e vai voltar para buscar.",
            "zh-CN": "在回家的路上发现东西落在学校，告诉朋友自己要返回学校拿。",
            "tl": "Ginagamit upang sabihin sa kaibigan na babalik ka sa paaralan dahil may nakalimutan ka.",
            "vi": "Dùng để nói với bạn bè rằng bạn đang trên đường về thì nhớ ra để quên đồ và phải quay lại trường.",
            "es": "Se usa para decirle a un amigo que te diste cuenta de que olvidaste algo en la escuela y vas a regresar a buscarlo.",
            "ne": "घर फर्कने बाटोमा स्कुलमै सामान बिर्सेको थाहा पाएर लिनको लागि फेरि स्कुलमै फर्कन्छु भनेर साथीलाई भन्दा प्रयोग गरिन्छ।",
            "id": "Digunakan untuk memberitahu teman bahwa Anda akan kembali ke sekolah karena ada barang yang tertinggal."
        },
        translations: {
            "en": "I'm going back to school. (To get something)", "pt": "Vou voltar para a escola.", "zh-CN": "我要返回学校（拿东西）。", "tl": "Babalik ako sa paaralan.", "vi": "Mình sẽ quay lại trường.", "es": "Voy a volver a la escuela.", "ne": "म स्कुलमै फर्कन्छु।", "id": "Saya mau kembali ke sekolah."
        }
    }
];