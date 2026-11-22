/* Japeak personal library UI, 29 instruction languages.
   The learning text and all speech scoring remain Japanese (ja-JP). */
(function(root){
  'use strict';
  const keys=['my','create','read','folders','newFolder','home','title','body','folder','audio','note','cancel','save','start','edit','move','remove','all','unfiled','language'];
  const rows={
    ja:['マイ教材','音読教材を作る','音読教材を読む','フォルダ','＋ 新規','← ホーム','教材名','日本語の本文','保存先フォルダ','お手本音声（任意）','場面の説明（任意）','キャンセル','教材を保存','音読する','編集','移動','削除','すべて','未整理','言語'],
    en:['My lessons','Create a reading lesson','Read a lesson','Folders','＋ New','← Home','Lesson title','Japanese text','Folder','Model audio (optional)','Situation notes (optional)','Cancel','Save lesson','Start reading','Edit','Move','Delete','All','Unfiled','Language'],
    'zh-CN':['我的教材','制作朗读教材','阅读教材','文件夹','＋ 新建','← 首页','教材标题','日语正文','保存文件夹','示范音频（选填）','场景说明（选填）','取消','保存教材','开始朗读','编辑','移动','删除','全部','未分类','语言'],
    'zh-TW':['我的教材','製作朗讀教材','閱讀教材','資料夾','＋ 新增','← 首頁','教材標題','日文正文','儲存資料夾','示範音訊（選填）','情境說明（選填）','取消','儲存教材','開始朗讀','編輯','移動','刪除','全部','未分類','語言'],
    ko:['내 교재','낭독 교재 만들기','교재 읽기','폴더','＋ 새 폴더','← 홈','교재 제목','일본어 본문','폴더','예시 음성 (선택)','상황 설명 (선택)','취소','교재 저장','낭독 시작','편집','이동','삭제','전체','미분류','언어'],
    vi:['Bài học của tôi','Tạo bài luyện đọc','Đọc bài học','Thư mục','＋ Tạo mới','← Trang chủ','Tên bài học','Văn bản tiếng Nhật','Thư mục','Âm thanh mẫu (tùy chọn)','Ghi chú tình huống','Hủy','Lưu bài học','Bắt đầu đọc','Sửa','Di chuyển','Xóa','Tất cả','Chưa phân loại','Ngôn ngữ'],
    tl:['Aking mga aralin','Gumawa ng babasahin','Basahin ang aralin','Mga folder','＋ Bago','← Home','Pamagat','Tekstong Hapon','Folder','Halimbawang audio (opsyonal)','Tala ng sitwasyon','Kanselahin','I-save','Simulang magbasa','I-edit','Ilipat','Burahin','Lahat','Walang folder','Wika'],
    id:['Materi saya','Buat materi membaca','Baca materi','Folder','＋ Baru','← Beranda','Judul materi','Teks bahasa Jepang','Folder','Audio contoh (opsional)','Catatan situasi','Batal','Simpan materi','Mulai membaca','Ubah','Pindah','Hapus','Semua','Tanpa folder','Bahasa'],
    th:['บทเรียนของฉัน','สร้างบทเรียนอ่านออกเสียง','อ่านบทเรียน','โฟลเดอร์','＋ สร้างใหม่','← หน้าแรก','ชื่อบทเรียน','ข้อความภาษาญี่ปุ่น','โฟลเดอร์','เสียงตัวอย่าง (ไม่บังคับ)','บันทึกสถานการณ์','ยกเลิก','บันทึกบทเรียน','เริ่มอ่าน','แก้ไข','ย้าย','ลบ','ทั้งหมด','ยังไม่จัดหมวด','ภาษา'],
    my:['ကျွန်ုပ်၏ သင်ခန်းစာများ','ဖတ်ရှုလေ့ကျင့်ရန် စာဖန်တီးရန်','သင်ခန်းစာဖတ်ရန်','ဖိုင်တွဲများ','＋ အသစ်','← ပင်မ','ခေါင်းစဉ်','ဂျပန်စာသား','ဖိုင်တွဲ','နမူနာအသံ (စိတ်ကြိုက်)','အခြေအနေမှတ်စု','ပယ်ဖျက်','သိမ်းဆည်း','စဖတ်ရန်','ပြင်ဆင်','ရွှေ့','ဖျက်','အားလုံး','မခွဲထား','ဘာသာစကား'],
    km:['មេរៀនរបស់ខ្ញុំ','បង្កើតមេរៀនអាន','អានមេរៀន','ថតឯកសារ','＋ ថ្មី','← ទំព័រដើម','ចំណងជើង','អត្ថបទជប៉ុន','ថតឯកសារ','សំឡេងគំរូ (ជម្រើស)','កំណត់ចំណាំ','បោះបង់','រក្សាទុក','ចាប់ផ្តើមអាន','កែសម្រួល','ផ្លាស់ទី','លុប','ទាំងអស់','មិនទាន់រៀបចំ','ភាសា'],
    ne:['मेरो पाठहरू','पठन सामग्री बनाउनुहोस्','पाठ पढ्नुहोस्','फोल्डरहरू','＋ नयाँ','← गृहपृष्ठ','पाठको शीर्षक','जापानी पाठ','फोल्डर','नमुना अडियो (वैकल्पिक)','परिस्थिति टिप्पणी','रद्द','सुरक्षित गर्नुहोस्','पढ्न सुरु','सम्पादन','सार्नुहोस्','मेट्नुहोस्','सबै','वर्गीकरण नगरिएको','भाषा'],
    mn:['Миний хичээл','Унших хичээл үүсгэх','Хичээл унших','Хавтас','＋ Шинэ','← Нүүр','Хичээлийн нэр','Япон текст','Хавтас','Дууны жишээ (заавал биш)','Нөхцөл байдлын тэмдэглэл','Цуцлах','Хадгалах','Уншиж эхлэх','Засах','Шилжүүлэх','Устгах','Бүгд','Ангилаагүй','Хэл'],
    si:['මගේ පාඩම්','කියවීමේ පාඩමක් සාදන්න','පාඩම කියවන්න','ෆෝල්ඩර','＋ නව','← මුල් පිටුව','පාඩමේ නම','ජපන් පෙළ','ෆෝල්ඩරය','ආදර්ශ හඬ (විකල්ප)','තත්ත්ව සටහන්','අවලංගු','සුරකින්න','කියවීම අරඹන්න','සංස්කරණය','ගෙන යන්න','මකන්න','සියල්ල','වර්ග නොකළ','භාෂාව'],
    bn:['আমার পাঠ','পড়ার পাঠ তৈরি করুন','পাঠ পড়ুন','ফোল্ডার','＋ নতুন','← হোম','পাঠের নাম','জাপানি লেখা','ফোল্ডার','নমুনা অডিও (ঐচ্ছিক)','পরিস্থিতির নোট','বাতিল','সংরক্ষণ','পড়া শুরু','সম্পাদনা','সরান','মুছুন','সব','অবিন্যস্ত','ভাষা'],
    pt:['Meus materiais','Criar leitura','Ler materiais','Pastas','＋ Nova','← Início','Título da lição','Texto em japonês','Pasta','Áudio de exemplo (opcional)','Notas da situação','Cancelar','Salvar lição','Começar leitura','Editar','Mover','Excluir','Todos','Sem pasta','Idioma'],
    es:['Mis lecciones','Crear lectura','Leer lecciones','Carpetas','＋ Nueva','← Inicio','Título de la lección','Texto japonés','Carpeta','Audio de ejemplo (opcional)','Notas de situación','Cancelar','Guardar lección','Empezar lectura','Editar','Mover','Eliminar','Todos','Sin carpeta','Idioma'],
    fr:['Mes leçons','Créer une lecture','Lire une leçon','Dossiers','＋ Nouveau','← Accueil','Titre de la leçon','Texte japonais','Dossier','Audio modèle (facultatif)','Notes de contexte','Annuler','Enregistrer','Commencer la lecture','Modifier','Déplacer','Supprimer','Tous','Non classé','Langue'],
    ru:['Мои уроки','Создать текст для чтения','Читать урок','Папки','＋ Новая','← Главная','Название урока','Японский текст','Папка','Образец аудио (необязательно)','Описание ситуации','Отмена','Сохранить урок','Начать чтение','Изменить','Переместить','Удалить','Все','Без папки','Язык'],
    uk:['Мої уроки','Створити текст для читання','Читати урок','Папки','＋ Нова','← Головна','Назва уроку','Японський текст','Папка','Зразок аудіо (необов’язково)','Опис ситуації','Скасувати','Зберегти урок','Почати читати','Редагувати','Перемістити','Видалити','Усі','Без папки','Мова'],
    hi:['मेरे पाठ','पठन पाठ बनाएं','पाठ पढ़ें','फ़ोल्डर','＋ नया','← होम','पाठ शीर्षक','जापानी पाठ','फ़ोल्डर','नमूना ऑडियो (वैकल्पिक)','स्थिति नोट्स','रद्द करें','पाठ सहेजें','पढ़ना शुरू करें','संपादित करें','स्थानांतरित','हटाएं','सभी','बिना फ़ोल्डर','भाषा'],
    ur:['میرے اسباق','پڑھنے کا سبق بنائیں','سبق پڑھیں','فولڈرز','＋ نیا','← ہوم','سبق کا عنوان','جاپانی متن','فولڈر','نمونہ آڈیو (اختیاری)','صورتحال کے نوٹس','منسوخ','سبق محفوظ کریں','پڑھنا شروع کریں','ترمیم','منتقل','حذف','تمام','بغیر فولڈر','زبان'],
    ar:['دروسي','إنشاء درس قراءة','قراءة درس','المجلدات','＋ جديد','← الرئيسية','عنوان الدرس','النص الياباني','المجلد','صوت نموذجي (اختياري)','ملاحظات الموقف','إلغاء','حفظ الدرس','بدء القراءة','تعديل','نقل','حذف','الكل','بدون مجلد','اللغة'],
    de:['Meine Lektionen','Lesetext erstellen','Lektion lesen','Ordner','＋ Neu','← Startseite','Lektionstitel','Japanischer Text','Ordner','Beispielaudio (optional)','Situationsnotizen','Abbrechen','Lektion speichern','Lesen starten','Bearbeiten','Verschieben','Löschen','Alle','Ohne Ordner','Sprache'],
    it:['Le mie lezioni','Crea una lettura','Leggi una lezione','Cartelle','＋ Nuova','← Home','Titolo lezione','Testo giapponese','Cartella','Audio di esempio (facoltativo)','Note sul contesto','Annulla','Salva lezione','Inizia a leggere','Modifica','Sposta','Elimina','Tutti','Senza cartella','Lingua'],
    tr:['Derslerim','Okuma dersi oluştur','Dersi oku','Klasörler','＋ Yeni','← Ana sayfa','Ders başlığı','Japonca metin','Klasör','Örnek ses (isteğe bağlı)','Durum notları','İptal','Dersi kaydet','Okumaya başla','Düzenle','Taşı','Sil','Tümü','Klasörsüz','Dil'],
    ms:['Pelajaran saya','Cipta bahan bacaan','Baca pelajaran','Folder','＋ Baharu','← Laman utama','Tajuk pelajaran','Teks bahasa Jepun','Folder','Audio contoh (pilihan)','Nota situasi','Batal','Simpan pelajaran','Mula membaca','Sunting','Alih','Padam','Semua','Tanpa folder','Bahasa'],
    uz:['Mening darslarim','O‘qish darsi yaratish','Darsni o‘qish','Jildlar','＋ Yangi','← Bosh sahifa','Dars nomi','Yaponcha matn','Jild','Namuna audio (ixtiyoriy)','Vaziyat izohi','Bekor qilish','Darsni saqlash','O‘qishni boshlash','Tahrirlash','Ko‘chirish','O‘chirish','Barchasi','Jildsiz','Til'],
    fa:['درس‌های من','ساخت درس روخوانی','خواندن درس','پوشه‌ها','＋ جدید','← خانه','عنوان درس','متن ژاپنی','پوشه','صدای نمونه (اختیاری)','یادداشت موقعیت','لغو','ذخیره درس','شروع خواندن','ویرایش','انتقال','حذف','همه','بدون پوشه','زبان']
  };
  const custom={
    ja:{subtitle:'日本語の教材を作って、フォルダに整理して、いつでも音読練習。',storage:'教材と練習記録はこの端末に保存されます。別の端末には自動同期されません。',jpOnly:'音読は日本語を対象に採点します。表示言語は操作案内用です。',tts:'音声を登録しない場合は、端末の日本語読み上げを利用します。',empty:'まだ教材がありません。「音読教材を作る」で始めましょう。',folderPrompt:'フォルダ名を入力してください',folderRename:'新しいフォルダ名を入力してください',confirmDelete:'この教材を削除しますか？',confirmFolder:'このフォルダを削除しますか？中の教材は未整理になります。',scoreHistory:'練習記録',saved:'保存しました',error:'保存できませんでした'},
    en:{subtitle:'Create Japanese texts, organize them in folders, and practice aloud.',storage:'Lessons and results stay on this device. They do not sync automatically.',jpOnly:'Reading and scoring are always in Japanese. The language selector changes instructions only.',tts:'Without an audio file, your device will read the Japanese text.',empty:'No lessons yet. Create your first Japanese text.',folderPrompt:'Folder name',folderRename:'Rename folder',confirmDelete:'Delete this lesson?',confirmFolder:'Delete this folder? Its lessons will become unfiled.',scoreHistory:'Practice history',saved:'Saved',error:'Could not save'},
    id:{subtitle:'Buat materi Jepang, atur folder, lalu berlatih membaca.',storage:'Materi dan nilai tersimpan di perangkat ini; tidak disinkronkan.',jpOnly:'Latihan dan penilaian selalu dalam bahasa Jepang. Bahasa pilihan hanya untuk petunjuk.',tts:'Jika tanpa audio, perangkat akan membacakan teks Jepang.',empty:'Belum ada materi. Buat materi pertama Anda.',folderPrompt:'Nama folder',folderRename:'Ubah nama folder',confirmDelete:'Hapus materi ini?',confirmFolder:'Hapus folder ini? Materi tetap disimpan.',scoreHistory:'Riwayat latihan',saved:'Tersimpan',error:'Gagal menyimpan'},
    vi:{subtitle:'Tạo bài đọc tiếng Nhật, sắp xếp vào thư mục và luyện nói.',storage:'Bài học và điểm chỉ lưu trên thiết bị này.',jpOnly:'Đọc và chấm điểm bằng tiếng Nhật; ngôn ngữ hiển thị chỉ dành cho hướng dẫn.',tts:'Nếu không có âm thanh, thiết bị sẽ đọc tiếng Nhật.',empty:'Chưa có bài học nào.',folderPrompt:'Tên thư mục',folderRename:'Đổi tên thư mục',confirmDelete:'Xóa bài học này?',confirmFolder:'Xóa thư mục? Bài học không bị xóa.',scoreHistory:'Lịch sử luyện tập',saved:'Đã lưu',error:'Không thể lưu'}
  };
  for(const [code,values] of Object.entries(rows)){
    if(values.length!==keys.length)throw Error('Missing labels for '+code);
  }
  const dictionaries=Object.fromEntries(Object.entries(rows).map(([code,values])=>[code,{
    ...Object.fromEntries(keys.map((key,i)=>[key,values[i]])),
    ...custom.en,...(custom[code]||{})
  }]));
  root.JapeakMyI18n={
    codes:Object.keys(dictionaries),
    forLanguage(code){return dictionaries[code]||dictionaries.en},
    t(code,key){return (dictionaries[code]||dictionaries.en)[key]||dictionaries.en[key]||key}
  };
})(window);
