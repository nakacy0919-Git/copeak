// ==========================================
// Japeak 教材データベース（給食・お弁当）
// ==========================================
const japeakLunchData = [
    {
        id: "japeak_lun_001", audio: "audio/japeak_lun_001.mp3", title: "いただきます (Starting a Meal)", category: "lunch_time",
        japanese: "いただきます。", target_speech: "いただきます",
        ruby: { hiragana: "いただきます。", romaji: "Itadakimasu." },
        context: {
            "ja": "食事を始める前に言う日本の大切な挨拶です。食べ物や、料理を作ってくれた人への感謝を表します。",
            "en": "An important Japanese greeting said before starting a meal. It expresses gratitude for the food and the people who prepared it.",
            "pt": "Uma saudação japonesa importante dita antes de começar a comer. Expressa gratidão pela comida e pelas pessoas que a prepararam.",
            "zh-CN": "饭前的重要寒暄语。表达对食物和做饭的人的感谢。",
            "tl": "Isang mahalagang pagbati sa Japan bago kumain. Ipinapakita nito ang pasasalamat sa pagkain at sa nagluto.",
            "vi": "Lời chào quan trọng của Nhật Bản trước khi ăn. Thể hiện sự biết ơn đối với thức ăn và người đã nấu.",
            "es": "Un saludo japonés importante que se dice antes de empezar a comer. Expresa gratitud por la comida y por quienes la prepararon.",
            "ne": "खाना खान सुरु गर्नु अघि भनिने महत्त्वपूर्ण जापानी अभिवादन। यसले खाना र खाना बनाउने व्यक्तिप्रति कृतज्ञता व्यक्त गर्दछ।",
            "id": "Salam penting Jepang yang diucapkan sebelum mulai makan. Menunjukkan rasa terima kasih atas makanan dan orang yang memasaknya."
        },
        translations: {
            "en": "Let's eat. / Thank you for the meal.", "pt": "Vamos comer. / Obrigado pela comida.", "zh-CN": "我开动了。", "tl": "Kakain na po tayo.", "vi": "Mời mọi người ăn cơm. / Xin phép ăn.", "es": "A comer. / Gracias por la comida.", "ne": "खाना सुरु गरौं।", "id": "Selamat makan."
        }
    },
    {
        id: "japeak_lun_002", audio: "audio/japeak_lun_002.mp3", title: "ごちそうさまでした (Finishing a Meal)", category: "lunch_time",
        japanese: "ごちそうさまでした。", target_speech: "ごちそうさまでした",
        ruby: { hiragana: "ごちそうさまでした。", romaji: "Gochisousama deshita." },
        context: {
            "ja": "食事が終わった後に言う挨拶です。感謝の気持ちを込めて手を合わせて言います。",
            "en": "A greeting said after finishing a meal. Said with hands put together to express gratitude.",
            "pt": "Uma saudação dita depois de terminar a refeição. Dita com as mãos juntas para expressar gratidão.",
            "zh-CN": "饭后使用的寒暄语。双手合十，怀着感谢的心情说。",
            "tl": "Isang pagbati pagkatapos kumain. Sinasabi nang magkadikit ang mga kamay upang magpasalamat.",
            "vi": "Lời chào sau khi ăn xong. Chắp tay lại và nói với lòng biết ơn.",
            "es": "Un saludo que se dice después de terminar de comer. Se dice con las manos juntas para expresar gratitud.",
            "ne": "खाना खाइसकेपछि भनिने अभिवादन। कृतज्ञता व्यक्त गर्न हात जोडेर भनिन्छ।",
            "id": "Salam yang diucapkan setelah selesai makan. Diucapkan dengan kedua tangan dikatupkan untuk menunjukkan rasa terima kasih."
        },
        translations: {
            "en": "Thank you for the meal. / I'm finished.", "pt": "Obrigado pela refeição. / Terminei.", "zh-CN": "多谢款待。/ 我吃饱了。", "tl": "Salamat po sa pagkain.", "vi": "Cảm ơn vì bữa ăn.", "es": "Gracias por la comida.", "ne": "खानाको लागि धन्यवाद।", "id": "Terima kasih atas makanannya."
        }
    },
    {
        id: "japeak_lun_003", audio: "audio/japeak_lun_003.mp3", title: "おかわり (Asking for Seconds)", category: "lunch_time",
        japanese: "おかわりをしてもいいですか。", target_speech: "おかわりをしてもいいですか",
        ruby: { hiragana: "おかわりをしてもいいですか。", romaji: "Okawari o shite mo ii desu ka." },
        context: {
            "ja": "給食が美味しくて、もっと食べたい時にもう少しもらえるか先生に聞く言葉です。",
            "en": "Used to ask the teacher if you can have a little more when the school lunch is delicious and you want seconds.",
            "pt": "Usado para perguntar ao professor se você pode comer um pouco mais quando a merenda está gostosa.",
            "zh-CN": "觉得供餐很好吃，想再多吃一点时，用来询问老师的用语。",
            "tl": "Ginagamit upang tanungin ang guro kung pwede kang humingi ng dagdag na pagkain.",
            "vi": "Dùng để hỏi giáo viên xem có thể lấy thêm đồ ăn không khi bữa trưa ngon và bạn muốn ăn thêm.",
            "es": "Se usa para preguntarle al profesor si puedes servirte un poco más cuando la comida está rica.",
            "ne": "खाना मीठो लागेर अझै खान मन लाग्दा शिक्षकसँग थप्न मिल्छ कि भनेर सोध्न प्रयोग गरिन्छ।", "id": "Digunakan untuk bertanya kepada guru apakah boleh nambah karena makanannya enak."
        },
        translations: {
            "en": "May I have seconds? / Can I have some more?", "pt": "Posso repetir?", "zh-CN": "我可以再来一碗（添饭）吗？", "tl": "Pwede po bang humingi ng dagdag?", "vi": "Em có thể lấy thêm được không ạ?", "es": "¿Puedo repetir?", "ne": "के म थप्न सक्छु?", "id": "Bolehkah saya nambah?"
        }
    },
    {
        id: "japeak_lun_004", audio: "audio/japeak_lun_004.mp3", title: "量を減らす (Asking for Less)", category: "lunch_time",
        japanese: "これを減らしてください。", target_speech: "これをへらしてください",
        ruby: { hiragana: "これを<ruby>減<rt>へ</rt></ruby>らしてください。", romaji: "Kore o herashite kudasai." },
        context: {
            "ja": "給食の量が多すぎたり、苦手な食べ物がある時に、配られる量を少なくしてほしいとお願いします。",
            "en": "Used to ask for a smaller portion when the food is too much or there is something you don't like.",
            "pt": "Usado para pedir uma porção menor quando a comida é muita ou tem algo que você não gosta.",
            "zh-CN": "供餐分量太多，或者有不喜欢的食物时，请求减少分量的用语。",
            "tl": "Ginagamit para humingi ng mas kaunting pagkain kapag masyadong marami o may hindi ka gusto.",
            "vi": "Dùng để xin giảm bớt phần ăn khi đồ ăn quá nhiều hoặc có món bạn không thích.",
            "es": "Se usa para pedir una porción más pequeña cuando hay mucha comida o algo que no te gusta.",
            "ne": "खाना धेरै भएमा वा मन नपर्ने खाना भएमा अलि कम गरिदिनुहोस् भनेर अनुरोध गर्दा प्रयोग गरिन्छ।", "id": "Digunakan untuk meminta porsi yang lebih sedikit jika makanannya terlalu banyak atau ada yang tidak disukai."
        },
        translations: {
            "en": "Please give me less of this.", "pt": "Por favor, coloque menos disso para mim.", "zh-CN": "请给我少一点这个。", "tl": "Pakibawasan po ito.", "vi": "Cho em ít cái này lại được không ạ.", "es": "Por favor, dame menos de esto.", "ne": "कृपया यो अलि कम गरिदिनुहोस्।", "id": "Tolong kurangi porsi ini."
        }
    },
    {
        id: "japeak_lun_005", audio: "audio/japeak_lun_005.mp3", title: "量を増やす (Asking for More)", category: "lunch_time",
        japanese: "これを増やしてください。", target_speech: "これをふやしてください",
        ruby: { hiragana: "これを<ruby>増<rt>ふ</rt></ruby>やしてください。", romaji: "Kore o fuyashite kudasai." },
        context: {
            "ja": "自分の好きなメニューや、お腹が空いていて、もっとたくさん食べたい時におお願いする言葉です。",
            "en": "Used to ask for a larger portion of your favorite food or when you are hungry and want to eat more.",
            "pt": "Usado para pedir uma porção maior da sua comida favorita ou quando você está com fome.",
            "zh-CN": "遇到喜欢的菜或者肚子饿想多吃一点时，请求增加分量的用语。",
            "tl": "Ginagamit para humingi ng mas maraming pagkain kung paborito mo ito o kung gutom ka pa.",
            "vi": "Dùng để xin thêm phần ăn đối với món bạn thích hoặc khi bạn đang đói và muốn ăn nhiều hơn.",
            "es": "Se usa para pedir una porción más grande de tu comida favorita o cuando tienes hambre.",
            "ne": "आफूलाई मन पर्ने खाना वा भोक लागेको बेला अलि धेरै दिनुहोस् भनेर अनुरोध गर्न प्रयोग गरिन्छ।", "id": "Digunakan untuk meminta porsi lebih banyak untuk makanan favorit atau saat Anda sangat lapar."
        },
        translations: {
            "en": "Please give me more of this.", "pt": "Por favor, coloque mais disso para mim.", "zh-CN": "请给我多一点这个。", "tl": "Pakidagdagan po ito.", "vi": "Cho em thêm một chút cái này được không ạ.", "es": "Por favor, dame más de esto.", "ne": "कृपया यो अलि धेरै दिनुहोस्।", "id": "Tolong tambah porsi ini."
        }
    },
    {
        id: "japeak_lun_006", audio: "audio/japeak_lun_006.mp3", title: "アレルギーを伝える (Having Allergies)", category: "lunch_time",
        japanese: "アレルギーがあります。", target_speech: "あれるぎーがあります",
        ruby: { hiragana: "アレルギーがあります。", romaji: "Arerugii ga arimasu." },
        context: {
            "ja": "特定の食べ物を食べると具合が悪くなることを伝える非常に重要な言葉です。給食を食べる前に確認しましょう。",
            "en": "A very important phrase to tell someone you get sick if you eat certain foods. Always check before eating school lunch.",
            "pt": "Uma frase muito importante para dizer que você passa mal se comer certos alimentos. Verifique antes de comer.",
            "zh-CN": "表达吃特定食物会引发身体不适的非常重要的用语。吃供餐前务必确认。",
            "tl": "Napakahalagang parirala upang sabihin na bawal sa iyo ang ilang pagkain. Tiyakin ito bago kumain.",
            "vi": "Một câu rất quan trọng để nói rằng bạn sẽ bị bệnh nếu ăn những thức ăn nhất định. Hãy kiểm tra trước khi ăn.",
            "es": "Una frase muy importante para decir que te enfermas si comes ciertos alimentos. Revisa antes de comer.",
            "ne": "कुनै खानेकुरा खाँदा एलर्जी हुन्छ भनेर जानकारी दिने अत्यन्त महत्त्वपूर्ण वाक्य। खाना खानु अघि सधैं जाँच गर्नुहोस्।", "id": "Kalimat yang sangat penting untuk memberitahu bahwa Anda alergi terhadap makanan tertentu. Pastikan sebelum makan."
        },
        translations: {
            "en": "I have allergies.", "pt": "Eu tenho alergia.", "zh-CN": "我有过敏。", "tl": "May allergy po ako.", "vi": "Em bị dị ứng ạ.", "es": "Tengo alergias.", "ne": "मलाई एलर्जी छ।", "id": "Saya punya alergi."
        }
    },
    {
        id: "japeak_lun_007", audio: "audio/japeak_lun_007.mp3", title: "箸を忘れた (Forgot Chopsticks)", category: "lunch_time",
        japanese: "お箸を忘れました。", target_speech: "おはしをわすれました",
        ruby: { hiragana: "お<ruby>箸<rt>はし</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れました。", romaji: "Ohashi o wasuremashita." },
        context: {
            "ja": "お弁当や給食を食べるための、お箸やスプーンを家に忘れてしまった時に先生に伝える言葉です。",
            "en": "Used to tell the teacher when you forget to bring your chopsticks or spoon for lunch from home.",
            "pt": "Usado para dizer ao professor quando você esquece de trazer seus pauzinhos ou colher de casa.",
            "zh-CN": "把吃午饭用的筷子或勺子忘在家里时，向老师说明的用语。",
            "tl": "Ginagamit upang sabihin sa guro na nakalimutan mo ang iyong chopsticks o kutsara.",
            "vi": "Dùng để báo với giáo viên khi bạn để quên đũa hoặc thìa ăn trưa ở nhà.",
            "es": "Se usa para decirle al profesor que olvidaste traer tus palillos o cuchara de casa.",
            "ne": "खाना खानको लागि चपस्टिक (काँटा-चम्चा) घरमै बिर्संदा शिक्षकलाई भनिने शब्द।", "id": "Digunakan untuk memberitahu guru saat Anda lupa membawa sumpit atau sendok dari rumah."
        },
        translations: {
            "en": "I forgot my chopsticks.", "pt": "Esqueci meus hashis (pauzinhos).", "zh-CN": "我忘记带筷子了。", "tl": "Nakalimutan ko po ang aking chopsticks.", "vi": "Em để quên đũa rồi ạ.", "es": "Olvidé mis palillos.", "ne": "मैले चपस्टिक बिर्सें।", "id": "Saya lupa membawa sumpit."
        }
    },
    {
        id: "japeak_lun_008", audio: "audio/japeak_lun_008.mp3", title: "こぼした時 (Spilled Food/Drink)", category: "lunch_time",
        japanese: "こぼしてしまいました。", target_speech: "こぼしてしまいました",
        ruby: { hiragana: "こぼしてしまいました。", romaji: "Koboshite shimaimashita." },
        context: {
            "ja": "誤って牛乳やスープなどを机や床に落としてしまった時に、先生に報告して掃除の手伝いをお願いします。",
            "en": "Used to report to the teacher when you accidentally spill milk or soup on the desk or floor and need help cleaning up.",
            "pt": "Usado para avisar o professor quando você derrama leite ou sopa acidentalmente e precisa de ajuda para limpar.",
            "zh-CN": "不小心把牛奶或汤洒在桌子或地上时，向老师报告并请求帮助打扫的用语。",
            "tl": "Ginagamit para sabihin sa guro kapag natapon mo ang gatas o sabaw at kailangan ng tulong sa paglinis.",
            "vi": "Dùng để báo với giáo viên khi bạn vô tình làm đổ sữa hoặc súp ra bàn, sàn nhà và cần giúp dọn dẹp.",
            "es": "Se usa para informar al profesor cuando accidentalmente derramas leche o sopa y necesitas ayuda para limpiar.",
            "ne": "झुक्किएर दूध वा झोल पोखिँदा शिक्षकलाई खबर गर्न र सफा गर्न मद्दत माग्दा प्रयोग गरिन्छ।", "id": "Digunakan untuk melapor ke guru saat Anda tidak sengaja menumpahkan susu atau sup dan butuh bantuan untuk membersihkan."
        },
        translations: {
            "en": "I spilled it.", "pt": "Eu derramei.", "zh-CN": "我弄洒了。", "tl": "Natapon ko po.", "vi": "Em lỡ làm đổ rồi ạ.", "es": "Lo derramé.", "ne": "मैले पोखें।", "id": "Saya menumpahkannya."
        }
    },
    {
        id: "japeak_lun_009", audio: "audio/japeak_lun_009.mp3", title: "一緒に食べる (Eating Together)", category: "lunch_time",
        japanese: "一緒に食べましょう。", target_speech: "いっしょにたべましょう",
        ruby: { hiragana: "<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>食<rt>た</rt></ruby>べましょう。", romaji: "Issho ni tabemashou." },
        context: {
            "ja": "お弁当や給食の時間に、友達を誘って楽しく食事をしたい時に使います。",
            "en": "Used to invite a friend to eat lunch together so you can have an enjoyable mealtime.",
            "pt": "Usado para convidar um amigo para almoçar junto e ter uma refeição agradável.",
            "zh-CN": "午餐时间邀请朋友一起愉快地吃饭时使用。",
            "tl": "Ginagamit upang ayayain ang kaibigan na kumain nang sabay para mas masaya.",
            "vi": "Dùng để rủ bạn bè cùng ăn trưa cho vui.",
            "es": "Se usa para invitar a un amigo a comer juntos y pasar un buen rato.",
            "ne": "खाजाको समयमा साथीलाई सँगै खाजा खान बोलाउन प्रयोग गरिन्छ।", "id": "Digunakan untuk mengajak teman makan siang bersama agar lebih menyenangkan."
        },
        translations: {
            "en": "Let's eat together.", "pt": "Vamos comer juntos.", "zh-CN": "我们一起吃吧。", "tl": "Sabay tayong kumain.", "vi": "Cùng ăn chung nhé.", "es": "Comamos juntos.", "ne": "सँगै खाजा खाऔं।", "id": "Ayo makan bersama."
        }
    },
    {
        id: "japeak_lun_010", audio: "audio/japeak_lun_010.mp3", title: "美味しいです (It's Delicious)", category: "lunch_time",
        japanese: "美味しいです。", target_speech: "おいしいです",
        ruby: { hiragana: "<ruby>美味<rt>おい</rt></ruby>しいです。", romaji: "Oishii desu." },
        context: {
            "ja": "料理の味が良くて気に入った時に使います。作った人や一緒に食べている人が嬉しい気持ちになります。",
            "en": "Used when the food tastes good and you like it. It makes the cook and the people eating with you happy.",
            "pt": "Usado quando a comida está saborosa e você gosta. Deixa o cozinheiro e as pessoas que estão comendo com você felizes.",
            "zh-CN": "觉得饭菜很好吃时使用。能让做饭的人和一起吃饭的人感到高兴。",
            "tl": "Ginagamit kapag masarap ang pagkain. Nagpapasaya ito sa nagluto at sa mga kasama mong kumakain.",
            "vi": "Dùng khi đồ ăn ngon và bạn thích nó. Sẽ làm cho người nấu và người ăn cùng cảm thấy vui vẻ.",
            "es": "Se usa cuando la comida sabe bien y te gusta. Hace felices al cocinero y a las personas que comen contigo.",
            "ne": "खाना मीठो हुँदा प्रयोग गरिन्छ। यसले खाना बनाउने र सँगै खाने मान्छेलाई खुसी बनाउँछ।", "id": "Digunakan saat makanannya enak. Membuat orang yang memasak dan teman makan Anda merasa senang."
        },
        translations: {
            "en": "It's delicious.", "pt": "Está delicioso.", "zh-CN": "很好吃。", "tl": "Masarap po.", "vi": "Ngon lắm ạ.", "es": "Está delicioso.", "ne": "यो मीठो छ।", "id": "Ini enak sekali."
        }
    }
];