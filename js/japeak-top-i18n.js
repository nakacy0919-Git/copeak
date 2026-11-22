/* Japeak home: 29 languages for UI only. Speaking targets stay Japanese. */
(function(root){
'use strict';
const keys=['school','life','headline','description','choose','schoolSub','lifeSub','mySub'];
const rows={
ja:['学校で話そう','暮らしで話そう','話せる楽しさを、日本での毎日に。','「こんにちは」から学校やお店での会話まで。日本語を声に出して練習し、人とつながろう。','どこから はじめますか？','学校の日本語','暮らしの日本語','読む・作る・整理する'],
en:['Speak at School','Speak in Daily Life','Enjoy speaking Japanese every day.','From greetings to real conversations at school and in shops. Practice Japanese aloud and connect with people.','Where would you like to start?','Japanese at school','Everyday Japanese','Read · Create · Organize'],
'zh-CN':['在学校说日语','在生活中说日语','享受每天说日语的乐趣。','从打招呼到学校和商店里的对话。开口练习日语，与他人交流。','从哪里开始？','校园日语','生活日语','阅读・创建・整理'],
'zh-TW':['在學校說日語','在生活中說日語','享受每天說日語的樂趣。','從打招呼到學校和商店裡的對話。開口練習日語，與他人交流。','從哪裡開始？','校園日語','生活日語','閱讀・建立・整理'],
ko:['학교에서 말해요','일상에서 말해요','매일 일본어로 말하는 즐거움을 느껴 보세요.','인사부터 학교와 가게에서의 대화까지. 일본어를 소리 내어 연습해 보세요.','어디서 시작할까요?','학교 일본어','생활 일본어','읽기 · 만들기 · 정리'],
vi:['Nói ở trường','Nói trong cuộc sống','Tận hưởng niềm vui nói tiếng Nhật mỗi ngày.','Từ chào hỏi đến trò chuyện ở trường và cửa hàng. Hãy luyện nói tiếng Nhật thành tiếng.','Bạn muốn bắt đầu từ đâu?','Tiếng Nhật ở trường','Tiếng Nhật hằng ngày','Đọc · Tạo · Sắp xếp'],
tl:['Magsalita sa paaralan','Magsalita araw-araw','Masayang magsalita ng Hapon araw-araw.','Mula sa pagbati hanggang sa usapan sa paaralan at tindahan. Magsanay magsalita ng Hapon.','Saan ka magsisimula?','Hapon sa paaralan','Hapon sa araw-araw','Basa · Gawa · Ayos'],
id:['Berbicara di sekolah','Berbicara sehari-hari','Nikmati berbicara bahasa Jepang setiap hari.','Dari salam hingga percakapan di sekolah dan toko. Berlatih bahasa Jepang dengan suara keras.','Mulai dari mana?','Bahasa Jepang di sekolah','Bahasa Jepang sehari-hari','Baca · Buat · Atur'],
th:['พูดที่โรงเรียน','พูดในชีวิตประจำวัน','สนุกกับการพูดภาษาญี่ปุ่นทุกวัน','ฝึกภาษาญี่ปุ่นตั้งแต่การทักทายไปจนถึงการสนทนาที่โรงเรียนและร้านค้า','เริ่มจากที่ไหนดี?','ภาษาญี่ปุ่นในโรงเรียน','ภาษาญี่ปุ่นในชีวิตประจำวัน','อ่าน · สร้าง · จัดการ'],
my:['ကျောင်းမှာ ပြောကြမယ်','နေ့စဉ်ဘဝမှာ ပြောကြမယ်','နေ့တိုင်း ဂျပန်စကား ပြောရတာ ပျော်ရွှင်ပါစေ။','နှုတ်ဆက်ခြင်းမှ ကျောင်းနှင့် ဆိုင်တွင် စကားပြောခြင်းအထိ လေ့ကျင့်ပါ။','ဘယ်ကနေ စမလဲ?','ကျောင်းသုံး ဂျပန်ဘာသာ','နေ့စဉ်သုံး ဂျပန်ဘာသာ','ဖတ် · ဖန်တီး · စီမံ'],
km:['និយាយនៅសាលា','និយាយក្នុងជីវិតប្រចាំថ្ងៃ','រីករាយនឹងការនិយាយភាសាជប៉ុនរាល់ថ្ងៃ។','ពីការស្វាគមន៍ដល់ការសន្ទនានៅសាលា និងហាង។ ហាត់និយាយភាសាជប៉ុន។','ចាប់ផ្តើមពីណា?','ភាសាជប៉ុននៅសាលា','ភាសាជប៉ុនប្រចាំថ្ងៃ','អាន · បង្កើត · រៀបចំ'],
ne:['विद्यालयमा बोलौँ','दैनिक जीवनमा बोलौँ','हरेक दिन जापानी बोल्ने आनन्द लिनुहोस्।','अभिवादनदेखि विद्यालय र पसलका कुराकानीसम्म जापानी बोल्ने अभ्यास गर्नुहोस्।','कहाँबाट सुरु गर्ने?','विद्यालयको जापानी','दैनिक जापानी','पढ्नुहोस् · बनाउनुहोस् · मिलाउनुहोस्'],
mn:['Сургуульд ярья','Өдөр тутам ярья','Өдөр бүр япон хэлээр ярьж сураарай.','Мэндчилгээнээс эхлээд сургууль, дэлгүүрийн яриаг япон хэлээр давтаарай.','Хаанаас эхлэх вэ?','Сургуулийн япон хэл','Өдөр тутмын япон хэл','Унших · Үүсгэх · Цэгцлэх'],
si:['පාසලේ කතා කරමු','දිනපතා කතා කරමු','දිනපතා ජපන් භාෂාව කතා කිරීමේ සතුට විඳින්න.','ආචාර කිරීමේ සිට පාසලේ සහ වෙළඳසැල්වල සංවාද දක්වා ජපන් භාෂාව පුහුණු වන්න.','කොතැනින් පටන් ගමුද?','පාසලේ ජපන්','දෛනික ජපන්','කියවන්න · සාදන්න · සකසන්න'],
bn:['স্কুলে কথা বলুন','দৈনন্দিন জীবনে কথা বলুন','প্রতিদিন জাপানি ভাষায় কথা বলার আনন্দ উপভোগ করুন।','অভিবাদন থেকে স্কুল ও দোকানের কথোপকথন পর্যন্ত জাপানি বলার অনুশীলন করুন।','কোথা থেকে শুরু করবেন?','স্কুলের জাপানি','দৈনন্দিন জাপানি','পড়ুন · তৈরি করুন · সাজান'],
pt:['Fale na escola','Fale no dia a dia','Descubra o prazer de falar japonês todos os dias.','Dos cumprimentos às conversas na escola e nas lojas. Pratique japonês em voz alta.','Por onde começar?','Japonês na escola','Japonês cotidiano','Ler · Criar · Organizar'],
es:['Habla en la escuela','Habla en la vida diaria','Disfruta hablando japonés cada día.','Desde los saludos hasta las conversaciones en la escuela y las tiendas. Practica japonés en voz alta.','¿Por dónde empezar?','Japonés en la escuela','Japonés cotidiano','Leer · Crear · Organizar'],
fr:['Parler à l’école','Parler au quotidien','Le plaisir de parler japonais chaque jour.','Des salutations aux conversations à l’école et dans les magasins. Entraînez-vous à parler japonais.','Par où commencer ?','Japonais à l’école','Japonais au quotidien','Lire · Créer · Organiser'],
ru:['Говорим в школе','Говорим каждый день','Говорите по-японски с удовольствием каждый день.','От приветствий до разговоров в школе и магазине. Практикуйте японскую речь.','С чего начнём?','Японский в школе','Японский в быту','Читать · Создать · Упорядочить'],
uk:['Говоримо в школі','Говоримо щодня','Радійте спілкуванню японською щодня.','Від привітань до розмов у школі та магазині. Практикуйте японську мову вголос.','З чого почнемо?','Японська в школі','Японська щодня','Читати · Створити · Впорядкувати'],
hi:['स्कूल में बोलें','रोज़मर्रा में बोलें','हर दिन जापानी बोलने का आनंद लें।','अभिवादन से लेकर स्कूल और दुकान में बातचीत तक जापानी बोलने का अभ्यास करें।','कहाँ से शुरू करें?','स्कूल की जापानी','रोज़मर्रा की जापानी','पढ़ें · बनाएँ · व्यवस्थित करें'],
ur:['اسکول میں بات کریں','روزمرہ زندگی میں بات کریں','میرے اسباق','سلام سے لے کر اسکول اور دکان کی گفتگو تک جاپانی بولنے کی مشق کریں۔','کہاں سے شروع کریں؟','اسکول کی جاپانی','روزمرہ جاپانی','پڑھیں · بنائیں · ترتیب دیں'],
ar:['تحدث في المدرسة','تحدث في الحياة اليومية','استمتع بالتحدث باليابانية كل يوم.','من التحيات إلى المحادثات في المدرسة والمتاجر. تدرب على التحدث باليابانية.','من أين نبدأ؟','اليابانية في المدرسة','اليابانية اليومية','اقرأ · أنشئ · نظّم'],
de:['In der Schule sprechen','Im Alltag sprechen','Jeden Tag mit Freude Japanisch sprechen.','Von Begrüßungen bis zu Gesprächen in der Schule und im Geschäft: Übe Japanisch laut.','Wo möchtest du anfangen?','Japanisch in der Schule','Japanisch im Alltag','Lesen · Erstellen · Ordnen'],
it:['Parla a scuola','Parla nella vita quotidiana','Il piacere di parlare giapponese ogni giorno.','Dai saluti alle conversazioni a scuola e nei negozi. Esercitati a parlare giapponese.','Da dove vuoi iniziare?','Giapponese a scuola','Giapponese quotidiano','Leggi · Crea · Organizza'],
tr:['Okulda konuş','Günlük hayatta konuş','Her gün Japonca konuşmanın keyfini çıkar.','Selamlaşmadan okul ve mağaza sohbetlerine kadar Japonca konuşma pratiği yap.','Nereden başlamak istersin?','Okulda Japonca','Günlük Japonca','Oku · Oluştur · Düzenle'],
ms:['Bertutur di sekolah','Bertutur setiap hari','Nikmati keseronokan bertutur bahasa Jepun setiap hari.','Daripada salam hingga perbualan di sekolah dan kedai. Berlatih bertutur bahasa Jepun.','Mula dari mana?','Bahasa Jepun di sekolah','Bahasa Jepun harian','Baca · Cipta · Susun'],
uz:['Maktabda gaplashamiz','Kundalik hayotda gaplashamiz','Har kuni yaponcha gapirishdan zavqlaning.','Salomlashishdan tortib maktab va do‘kondagi suhbatlargacha yaponcha gapirishni mashq qiling.','Qayerdan boshlaymiz?','Maktabdagi yapon tili','Kundalik yapon tili','O‘qish · Yaratish · Tartiblash'],
fa:['در مدرسه صحبت کنید','در زندگی روزمره صحبت کنید','هر روز از صحبت کردن به ژاپنی لذت ببرید.','از سلام و احوالپرسی تا گفتگو در مدرسه و فروشگاه، ژاپنی صحبت کردن را تمرین کنید.','از کجا شروع کنیم؟','ژاپنی در مدرسه','ژاپنی روزمره','خواندن · ساختن · سازمان‌دهی']
};
const dictionaries=Object.fromEntries(Object.entries(rows).map(([code,values])=>[code,Object.fromEntries(keys.map((key,i)=>[key,values[i]]))]));
function apply(language){
  const code=Object.prototype.hasOwnProperty.call(dictionaries,language)?language:'en';
  const dict=dictionaries[code];
  const home=document.querySelector('.jpk-v4-home');
  if(!home)return;
  document.documentElement.lang=code;
  home.querySelectorAll('[data-jpk-home-key]').forEach(node=>{
    const key=node.getAttribute('data-jpk-home-key');
    if(key==='my')node.textContent=root.JapeakMyI18n?.t(code,'my')||'My lessons';
    else if(dict[key])node.textContent=dict[key];
    node.setAttribute('dir','auto');
  });
  for(const [cls,key] of [['start-school','school'],['start-life','life'],['start-my','my']]){
    const button=home.querySelector('.'+cls);
    if(!button)continue;
    button.setAttribute('aria-label',(key==='my'?(root.JapeakMyI18n?.t(code,'my')||'My lessons'):dict[key])+' — '+dict[key+'Sub']);
  }
  const my=home.querySelector('.start-my');
  if(my)my.href='japeak-my.html?lang='+encodeURIComponent(code);
  for(const mode of ['school','life']){
    const btn=home.querySelector('.start-'+mode);
    if(btn)btn.href='japeak-menu.html?mode='+mode+'&lang='+encodeURIComponent(code);
  }
  return dict;
}
root.JapeakTopI18n={languages:Object.keys(dictionaries),dictionaries,apply};
})(window);
