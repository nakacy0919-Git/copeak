/* Copeak Phase 2 — CREATE / EDIT form localization.
   Presentation only. Does not modify input values, lesson content, scoring,
   speech recognition language, storage, Firebase/Supabase or network behavior.
   Added separately to make removal/rollback as simple as deleting one script. */
(function () {
  'use strict';

  const primary = ['ja','en','zh-TW','vi','id','tl','hi'];
  const codes = [...primary, ...(window.CopeakExtraLocales?.newCodes || [])];
  const keys = [
    'title','language','audio','memo','standard','dialogue','script','dialogueLines',
    'addLine','excluded','suggest','translation','formUrl','save','cancel',
    'chooseFile','noFile','audioSaved','imageSaved','speaker','line','recordingNote'
  ];

  // Explicit labels for each available display language. Additional detailed
  // paragraphs below can fall back to English until reviewed by native speakers.
  const rows = {
    'ja': ['タイトル','言語','音声ファイル（任意）','メモ画像（任意）','標準テキスト','会話文','音読テキスト','会話文のセリフ','＋ セリフを追加する','採点しない固有名詞（任意）','固有名詞の候補を表示','翻訳（任意）','成績提出用GoogleフォームURL（任意）','教材を保存','キャンセル','ファイルを選択','選択されていません','音声はすでに保存されています','画像はすでに保存されています','話者（A）','セリフを入力','先生から指定された場合のみ入力してください'],
    'en': ['Title','Language','Audio file (optional)','Memo image (optional)','Standard text','Dialogue','Reading script','Dialogue lines','＋ Add a line','Names excluded from scoring (optional)','Suggest proper names','Translation (optional)','Google Form URL for scores (optional)','Save to library','Cancel','Choose file','No file selected','Audio already saved','Image already saved','Speaker (A)','Enter a line','Enter only if your teacher provides a URL'],
    'zh-TW': ['標題','語言','音訊檔案（選填）','備註圖片（選填）','標準文字','對話','朗讀文字','對話台詞','＋ 新增台詞','不計分的專有名詞（選填）','顯示專有名詞建議','翻譯（選填）','成績提交 Google 表單網址（選填）','儲存教材','取消','選擇檔案','尚未選擇檔案','音訊已儲存','圖片已儲存','說話者（A）','輸入台詞','僅在老師提供網址時填寫'],
    'vi': ['Tiêu đề','Ngôn ngữ','Tệp âm thanh (tùy chọn)','Hình ghi chú (tùy chọn)','Văn bản chuẩn','Hội thoại','Nội dung đọc','Các câu thoại','＋ Thêm câu thoại','Tên riêng không chấm điểm (tùy chọn)','Gợi ý tên riêng','Bản dịch (tùy chọn)','URL Google Form nộp điểm (tùy chọn)','Lưu bài học','Hủy','Chọn tệp','Chưa chọn tệp','Đã lưu âm thanh','Đã lưu hình ảnh','Người nói (A)','Nhập câu thoại','Chỉ nhập khi giáo viên cung cấp URL'],
    'id': ['Judul','Bahasa','File audio (opsional)','Gambar catatan (opsional)','Teks standar','Dialog','Teks bacaan','Baris dialog','＋ Tambah dialog','Nama diri yang tidak dinilai (opsional)','Sarankan nama diri','Terjemahan (opsional)','URL Google Form untuk nilai (opsional)','Simpan materi','Batal','Pilih berkas','Belum ada berkas','Audio sudah tersimpan','Gambar sudah tersimpan','Pembicara (A)','Masukkan dialog','Isi hanya jika guru memberikan URL'],
    'tl': ['Pamagat','Wika','Audio file (opsyonal)','Larawang tala (opsyonal)','Karaniwang teksto','Diyalogo','Babasahing teksto','Mga linya ng diyalogo','＋ Magdagdag ng linya','Pangalan na hindi isasama sa pagmamarka','Magmungkahi ng mga pangalan','Salin (opsyonal)','Google Form URL para sa marka (opsyonal)','I-save ang aralin','Kanselahin','Pumili ng file','Walang napiling file','Naka-save na ang audio','Naka-save na ang larawan','Tagapagsalita (A)','Ilagay ang linya','Ilagay lang kung nagbigay ng URL ang guro'],
    'hi': ['शीर्षक','भाषा','ऑडियो फ़ाइल (वैकल्पिक)','नोट की तस्वीर (वैकल्पिक)','सामान्य पाठ','संवाद','पढ़ने का पाठ','संवाद की पंक्तियाँ','＋ पंक्ति जोड़ें','अंक से बाहर रखे गए व्यक्तिवाचक नाम (वैकल्पिक)','नामों के सुझाव दिखाएँ','अनुवाद (वैकल्पिक)','अंक जमा करने का Google फ़ॉर्म URL (वैकल्पिक)','पाठ सहेजें','रद्द करें','फ़ाइल चुनें','कोई फ़ाइल नहीं चुनी','ऑडियो पहले से सहेजा गया है','चित्र पहले से सहेजा गया है','वक्ता (A)','संवाद लिखें','केवल शिक्षक द्वारा URL दिए जाने पर भरें'],
    'es-ES': ['Título','Idioma','Archivo de audio (opcional)','Imagen de notas (opcional)','Texto estándar','Diálogo','Texto de lectura','Líneas de diálogo','＋ Añadir línea','Nombres propios excluidos de la puntuación','Sugerir nombres propios','Traducción (opcional)','URL de Google Forms para notas (opcional)','Guardar material','Cancelar','Elegir archivo','Ningún archivo seleccionado','Audio ya guardado','Imagen ya guardada','Hablante (A)','Escribe el diálogo','Completa solo si lo indica el profesor'],
    'fr-FR': ['Titre','Langue','Fichier audio (facultatif)','Image de notes (facultatif)','Texte standard','Dialogue','Texte à lire','Répliques du dialogue','＋ Ajouter une réplique','Noms propres exclus de la notation','Suggérer des noms propres','Traduction (facultatif)','URL Google Forms des résultats (facultatif)','Enregistrer le cours','Annuler','Choisir un fichier','Aucun fichier sélectionné','Audio déjà enregistré','Image déjà enregistrée','Locuteur (A)','Saisir une réplique','À remplir uniquement si l’enseignant fournit une URL'],
    'de-DE': ['Titel','Sprache','Audiodatei (optional)','Notizbild (optional)','Standardtext','Dialog','Lesetext','Dialogzeilen','＋ Zeile hinzufügen','Eigennamen ohne Bewertung (optional)','Eigennamen vorschlagen','Übersetzung (optional)','Google-Formular-URL für Ergebnisse (optional)','Lektion speichern','Abbrechen','Datei auswählen','Keine Datei ausgewählt','Audio bereits gespeichert','Bild bereits gespeichert','Sprecher (A)','Dialogzeile eingeben','Nur ausfüllen, wenn die Lehrkraft eine URL angibt'],
    'it-IT': ['Titolo','Lingua','File audio (facoltativo)','Immagine appunti (facoltativa)','Testo standard','Dialogo','Testo da leggere','Battute del dialogo','＋ Aggiungi battuta','Nomi propri esclusi dal punteggio','Suggerisci nomi propri','Traduzione (facoltativa)','URL Google Moduli per i risultati (facoltativo)','Salva materiale','Annulla','Scegli file','Nessun file selezionato','Audio già salvato','Immagine già salvata','Parlante (A)','Inserisci battuta','Compila solo se il docente fornisce un URL'],
    'pt-PT': ['Título','Idioma','Ficheiro de áudio (opcional)','Imagem de notas (opcional)','Texto padrão','Diálogo','Texto para leitura','Falas do diálogo','＋ Adicionar fala','Nomes próprios excluídos da avaliação','Sugerir nomes próprios','Tradução (opcional)','URL do Google Forms para resultados (opcional)','Guardar material','Cancelar','Escolher ficheiro','Nenhum ficheiro selecionado','Áudio já guardado','Imagem já guardada','Falante (A)','Introduzir fala','Preencher apenas se o professor fornecer um URL'],
    'nl-NL': ['Titel','Taal','Audiobestand (optioneel)','Notitieafbeelding (optioneel)','Standaardtekst','Dialoog','Leestekst','Dialoogregels','＋ Regel toevoegen','Eigennamen buiten beoordeling','Eigennamen voorstellen','Vertaling (optioneel)','Google Formulier-URL voor scores (optioneel)','Les opslaan','Annuleren','Bestand kiezen','Geen bestand gekozen','Audio al opgeslagen','Afbeelding al opgeslagen','Spreker (A)','Voer een regel in','Alleen invullen als de docent een URL geeft'],
    'pl-PL': ['Tytuł','Język','Plik audio (opcjonalnie)','Obraz notatki (opcjonalnie)','Tekst standardowy','Dialog','Tekst do czytania','Kwestie dialogu','＋ Dodaj kwestię','Nazwy własne poza oceną','Zaproponuj nazwy własne','Tłumaczenie (opcjonalnie)','Adres Google Forms do ocen (opcjonalnie)','Zapisz materiał','Anuluj','Wybierz plik','Nie wybrano pliku','Audio jest już zapisane','Obraz jest już zapisany','Mówca (A)','Wpisz kwestię','Wpisz tylko, jeśli nauczyciel poda adres URL'],
    'ru-RU': ['Название','Язык','Аудиофайл (необязательно)','Изображение заметки (необязательно)','Обычный текст','Диалог','Текст для чтения','Реплики диалога','＋ Добавить реплику','Имена собственные без оценки','Предложить имена собственные','Перевод (необязательно)','Ссылка Google Forms для оценок','Сохранить материал','Отмена','Выбрать файл','Файл не выбран','Аудио уже сохранено','Изображение уже сохранено','Говорящий (A)','Введите реплику','Заполняйте только по указанию учителя'],
    'uk-UA': ['Назва','Мова','Аудіофайл (необов’язково)','Зображення нотатки (необов’язково)','Звичайний текст','Діалог','Текст для читання','Репліки діалогу','＋ Додати репліку','Власні назви без оцінювання','Запропонувати власні назви','Переклад (необов’язково)','URL Google Forms для оцінок','Зберегти матеріал','Скасувати','Вибрати файл','Файл не вибрано','Аудіо вже збережено','Зображення вже збережено','Мовець (A)','Введіть репліку','Заповнюйте лише за вказівкою вчителя'],
    'sv-SE': ['Titel','Språk','Ljudfil (valfritt)','Anteckningsbild (valfritt)','Standardtext','Dialog','Lästext','Dialograder','＋ Lägg till rad','Egennamn utan poäng','Föreslå egennamn','Översättning (valfritt)','Google Formulär-URL för resultat','Spara material','Avbryt','Välj fil','Ingen fil vald','Ljud redan sparat','Bild redan sparad','Talare (A)','Skriv en replik','Fyll endast i om läraren anger en URL'],
    'nb-NO': ['Tittel','Språk','Lydfil (valgfritt)','Notatbilde (valgfritt)','Standardtekst','Dialog','Lesetekst','Dialoglinjer','＋ Legg til linje','Egennavn uten vurdering','Foreslå egennavn','Oversettelse (valgfritt)','Google Skjema-URL for resultater','Lagre materiale','Avbryt','Velg fil','Ingen fil valgt','Lyd allerede lagret','Bilde allerede lagret','Taler (A)','Skriv en replikk','Fyll bare ut hvis læreren gir en URL'],
    'da-DK': ['Titel','Sprog','Lydfil (valgfri)','Notebillede (valgfrit)','Standardtekst','Dialog','Læsetekst','Dialoglinjer','＋ Tilføj linje','Egennavne uden bedømmelse','Foreslå egennavne','Oversættelse (valgfri)','Google Formular-URL til resultater','Gem materiale','Annuller','Vælg fil','Ingen fil valgt','Lyd allerede gemt','Billede allerede gemt','Taler (A)','Skriv en replik','Udfyld kun, hvis læreren giver en URL'],
    'fi-FI': ['Otsikko','Kieli','Äänitiedosto (valinnainen)','Muistiinpanokuva (valinnainen)','Tavallinen teksti','Keskustelu','Luettava teksti','Keskustelurivit','＋ Lisää rivi','Arvioinnin ulkopuoliset erisnimet','Ehdota erisnimiä','Käännös (valinnainen)','Google Forms -osoite tuloksille','Tallenna materiaali','Peruuta','Valitse tiedosto','Tiedostoa ei valittu','Ääni on jo tallennettu','Kuva on jo tallennettu','Puhuja (A)','Kirjoita repliikki','Täytä vain, jos opettaja antaa URL-osoitteen'],
    'cs-CZ': ['Název','Jazyk','Zvukový soubor (volitelné)','Obrázek poznámek (volitelné)','Standardní text','Dialog','Text ke čtení','Repliky dialogu','＋ Přidat repliku','Vlastní jména bez hodnocení','Navrhnout vlastní jména','Překlad (volitelné)','URL Google Formuláře pro hodnocení','Uložit materiál','Zrušit','Vybrat soubor','Soubor nebyl vybrán','Zvuk je již uložen','Obrázek je již uložen','Mluvčí (A)','Zadejte repliku','Vyplňte pouze podle pokynů učitele'],
    'sk-SK': ['Názov','Jazyk','Zvukový súbor (voliteľné)','Obrázok poznámok (voliteľné)','Štandardný text','Dialóg','Text na čítanie','Repliky dialógu','＋ Pridať repliku','Vlastné mená bez hodnotenia','Navrhnúť vlastné mená','Preklad (voliteľné)','URL Google Formulára na hodnotenie','Uložiť materiál','Zrušiť','Vybrať súbor','Súbor nebol vybraný','Zvuk je už uložený','Obrázok je už uložený','Hovoriaci (A)','Zadajte repliku','Vyplňte iba podľa pokynov učiteľa'],
    'hu-HU': ['Cím','Nyelv','Hangfájl (nem kötelező)','Jegyzetkép (nem kötelező)','Normál szöveg','Párbeszéd','Felolvasandó szöveg','Párbeszédsorok','＋ Sor hozzáadása','Értékelésből kizárt tulajdonnevek','Tulajdonnevek javaslata','Fordítás (nem kötelező)','Google Űrlap URL az eredményekhez','Tananyag mentése','Mégse','Fájl kiválasztása','Nincs kiválasztott fájl','Hang már mentve','Kép már mentve','Beszélő (A)','Írja be a sort','Csak akkor töltse ki, ha a tanár URL-t ad'],
    'ro-RO': ['Titlu','Limbă','Fișier audio (opțional)','Imagine de notițe (opțional)','Text standard','Dialog','Text de citit','Replici de dialog','＋ Adaugă replică','Nume proprii excluse de la notare','Sugerează nume proprii','Traducere (opțional)','URL Google Forms pentru rezultate','Salvează materialul','Anulează','Alege fișier','Niciun fișier selectat','Audio deja salvat','Imagine deja salvată','Vorbitor (A)','Introdu replica','Completează doar dacă profesorul oferă URL'],
    'el-GR': ['Τίτλος','Γλώσσα','Αρχείο ήχου (προαιρετικό)','Εικόνα σημειώσεων (προαιρετική)','Τυπικό κείμενο','Διάλογος','Κείμενο ανάγνωσης','Ατάκες διαλόγου','＋ Προσθήκη ατάκας','Κύρια ονόματα χωρίς βαθμολόγηση','Προτάσεις κύριων ονομάτων','Μετάφραση (προαιρετική)','Σύνδεσμος Google Forms για βαθμούς','Αποθήκευση υλικού','Ακύρωση','Επιλογή αρχείου','Δεν επιλέχθηκε αρχείο','Ο ήχος έχει αποθηκευτεί','Η εικόνα έχει αποθηκευτεί','Ομιλητής (A)','Εισαγωγή ατάκας','Συμπληρώστε μόνο αν ο δάσκαλος δώσει σύνδεσμο'],
    'tr-TR': ['Başlık','Dil','Ses dosyası (isteğe bağlı)','Not resmi (isteğe bağlı)','Standart metin','Diyalog','Okuma metni','Diyalog satırları','＋ Satır ekle','Puanlamadan hariç özel adlar','Özel ad öner','Çeviri (isteğe bağlı)','Notlar için Google Form URL’si','Materyali kaydet','İptal','Dosya seç','Dosya seçilmedi','Ses zaten kaydedildi','Resim zaten kaydedildi','Konuşmacı (A)','Diyalog satırı gir','Yalnızca öğretmen URL verirse doldurun'],
    'zh-CN': ['标题','语言','音频文件（可选）','备注图片（可选）','标准文本','对话','朗读文本','对话台词','＋ 添加台词','不计分的专有名词（可选）','显示专有名词建议','翻译（可选）','提交成绩的 Google 表单链接（可选）','保存教材','取消','选择文件','未选择文件','音频已保存','图片已保存','说话者（A）','输入台词','仅当老师提供链接时填写'],
    'ko-KR': ['제목','언어','오디오 파일(선택)','메모 이미지(선택)','일반 텍스트','대화문','낭독할 글','대화문 대사','＋ 대사 추가','채점에서 제외할 고유명사(선택)','고유명사 후보 보기','번역(선택)','성적 제출용 Google 양식 URL(선택)','교재 저장','취소','파일 선택','선택한 파일 없음','오디오가 이미 저장됨','이미지가 이미 저장됨','화자(A)','대사 입력','선생님이 URL을 제공한 경우에만 입력하세요'],
    'th-TH': ['ชื่อเรื่อง','ภาษา','ไฟล์เสียง (ไม่บังคับ)','รูปภาพบันทึก (ไม่บังคับ)','ข้อความทั่วไป','บทสนทนา','ข้อความสำหรับอ่าน','บรรทัดบทสนทนา','＋ เพิ่มบรรทัด','ชื่อเฉพาะที่ไม่นับคะแนน','แนะนำชื่อเฉพาะ','คำแปล (ไม่บังคับ)','URL Google Form สำหรับส่งคะแนน','บันทึกบทเรียน','ยกเลิก','เลือกไฟล์','ยังไม่ได้เลือกไฟล์','บันทึกเสียงแล้ว','บันทึกรูปภาพแล้ว','ผู้พูด (A)','กรอกบทสนทนา','กรอกเฉพาะเมื่อครูให้ URL'],
    'ar-SA': ['العنوان','اللغة','ملف صوتي (اختياري)','صورة ملاحظات (اختياري)','نص عادي','حوار','النص المراد قراءته','أسطر الحوار','＋ إضافة سطر','الأسماء العلم المستثناة من التقييم (اختياري)','اقتراح أسماء علم','الترجمة (اختياري)','رابط نموذج Google لإرسال النتائج (اختياري)','حفظ المادة التعليمية','إلغاء','اختيار ملف','لم يتم اختيار ملف','الملف الصوتي محفوظ مسبقًا','الصورة محفوظة مسبقًا','المتحدث (A)','أدخل سطر الحوار','أدخله فقط إذا زودك المعلم بالرابط'],
    'ne-NP': ['शीर्षक','भाषा','अडियो फाइल (वैकल्पिक)','नोटको तस्वीर (वैकल्पिक)','सामान्य पाठ','संवाद','पढ्ने पाठ','संवादका पङ्क्तिहरू','＋ पङ्क्ति थप्नुहोस्','अङ्कमा नजोडिने नामहरू (वैकल्पिक)','नामहरूको सुझाव','अनुवाद (वैकल्पिक)','नतिजाका लागि Google Form URL (वैकल्पिक)','पाठ सुरक्षित गर्नुहोस्','रद्द गर्नुहोस्','फाइल छान्नुहोस्','कुनै फाइल छानिएको छैन','अडियो पहिले नै सुरक्षित छ','तस्बिर पहिले नै सुरक्षित छ','वक्ता (A)','संवाद लेख्नुहोस्','शिक्षकले URL दिएमा मात्र भर्नुहोस्']
  };
  const translations = Object.fromEntries(Object.entries(rows).map(([code, values]) => {
    if (values.length !== keys.length) throw new Error('Invalid creator locale '+code);
    return [code, Object.fromEntries(keys.map((key, i) => [key, values[i]]))];
  }));
  const detail = {
    'en': {
      exclusionsHelp:'One name or phrase per line. Text is still displayed and read aloud; only scoring excludes these words. Teachers should review suggestions.',
      exclusionsLimit:'Maximum 20 items, 60 characters each. Review suggestions carefully.',
      formPlaceholder:'Paste the Google Form URL provided by your teacher',
      scriptPlaceholder:'Paste the target script here',
      titlePlaceholder:'e.g., Steve Jobs Speech',
      translationPlaceholder:'Paste a translation into your native language (optional)',
      dialogueHint:'Add a line for each speaker.'
    },
    'ja': {
      exclusionsHelp:'1行に1語句。本文はそのまま表示・音読し、Accuracyの対象からだけ除外します。候補は先生が確認してください。',
      exclusionsLimit:'最大20件・各60文字。候補の誤検出に注意してください。',
      formPlaceholder:'先生から指定されたGoogleフォームのURLを貼り付け',scriptPlaceholder:'音読する文章を貼り付け',
      titlePlaceholder:'例：Steve Jobs Speech',translationPlaceholder:'母語での訳を貼り付け（任意）',dialogueHint:'話者ごとにセリフを入力してください。'
    },
    'ar-SA': {
      exclusionsHelp:'اكتب اسمًا أو عبارة في كل سطر. سيظل النص ظاهرًا ويمكن قراءته بصوت عالٍ، ولكن ستُستثنى هذه الكلمات من حساب الدقة. يجب على المعلم مراجعة الاقتراحات.',
      exclusionsLimit:'بحد أقصى 20 عنصرًا، و60 حرفًا لكل عنصر. راجع الأسماء المقترحة بعناية.',
      formPlaceholder:'ألصق رابط نموذج Google الذي أرسله المعلم',scriptPlaceholder:'ألصق النص الذي تريد التدرب على قراءته',
      titlePlaceholder:'مثال: خطاب ستيف جوبز',translationPlaceholder:'ألصق الترجمة إلى لغتك (اختياري)',dialogueHint:'أدخل سطرًا لكل متحدث.'
    },
    'zh-TW': {
      exclusionsHelp:'每行一個名稱或詞組。文字仍會顯示並可朗讀，但不計入 Accuracy；請老師確認建議。',
      exclusionsLimit:'最多20項，每項最多60字。請仔細確認建議。',formPlaceholder:'貼上老師提供的 Google 表單網址',
      scriptPlaceholder:'貼上要朗讀的文字',titlePlaceholder:'例如：Steve Jobs Speech',translationPlaceholder:'貼上母語翻譯（選填）',dialogueHint:'請逐行輸入每位說話者的台詞。'
    },
    'zh-CN': {
      exclusionsHelp:'每行输入一个名称或词组。文字仍会显示并可朗读，但不计入准确率；请老师核对建议。',
      exclusionsLimit:'最多20项，每项不超过60字。请仔细核对建议。',formPlaceholder:'粘贴老师提供的 Google 表单链接',
      scriptPlaceholder:'粘贴要朗读的文字',titlePlaceholder:'例如：Steve Jobs Speech',translationPlaceholder:'粘贴母语翻译（可选）',dialogueHint:'请逐行输入每位说话者的台词。'
    },
    'vi': {
      exclusionsHelp:'Mỗi dòng một tên hoặc cụm từ. Nội dung vẫn hiển thị và được đọc; chỉ bỏ qua khi chấm Accuracy. Giáo viên nên kiểm tra gợi ý.',
      exclusionsLimit:'Tối đa 20 mục, mỗi mục 60 ký tự. Hãy kiểm tra gợi ý.',formPlaceholder:'Dán URL Google Form do giáo viên cung cấp',
      scriptPlaceholder:'Dán nội dung cần đọc tại đây',titlePlaceholder:'Ví dụ: Steve Jobs Speech',translationPlaceholder:'Dán bản dịch sang tiếng mẹ đẻ (tùy chọn)',dialogueHint:'Nhập lời thoại cho từng người nói.'
    },
    'id': {
      exclusionsHelp:'Satu nama atau frasa per baris. Teks tetap ditampilkan dan dibaca; hanya dikecualikan dari skor Accuracy. Guru perlu memeriksa saran.',
      exclusionsLimit:'Maksimal 20 item, 60 karakter masing-masing. Periksa saran dengan teliti.',formPlaceholder:'Tempel URL Google Form dari guru',
      scriptPlaceholder:'Tempel teks yang akan dibaca',titlePlaceholder:'Contoh: Steve Jobs Speech',translationPlaceholder:'Tempel terjemahan ke bahasa ibu (opsional)',dialogueHint:'Masukkan satu baris untuk setiap pembicara.'
    },
    'tl': {
      exclusionsHelp:'Isang pangalan o parirala bawat linya. Mananatiling nakikita at binabasa ang teksto; hindi lang isasama sa Accuracy. Dapat suriin ng guro ang mga mungkahi.',
      exclusionsLimit:'Hanggang 20 item, 60 character bawat isa. Suriin ang mga mungkahi.',formPlaceholder:'I-paste ang Google Form URL mula sa guro',
      scriptPlaceholder:'I-paste ang tekstong babasahin',titlePlaceholder:'Hal.: Steve Jobs Speech',translationPlaceholder:'I-paste ang salin sa sariling wika (opsyonal)',dialogueHint:'Maglagay ng linya para sa bawat nagsasalita.'
    },
    'hi': {
      exclusionsHelp:'प्रति पंक्ति एक नाम या शब्दसमूह लिखें। पाठ दिखाई देगा और पढ़ा जाएगा; केवल Accuracy की गणना से बाहर होगा। शिक्षक सुझाव जाँचें।',
      exclusionsLimit:'अधिकतम 20 प्रविष्टियाँ, प्रत्येक 60 वर्ण। सुझावों को ध्यान से जाँचें।',formPlaceholder:'शिक्षक का दिया Google फ़ॉर्म URL चिपकाएँ',
      scriptPlaceholder:'पढ़ने वाला पाठ यहाँ चिपकाएँ',titlePlaceholder:'उदाहरण: Steve Jobs Speech',translationPlaceholder:'अपनी भाषा में अनुवाद चिपकाएँ (वैकल्पिक)',dialogueHint:'प्रत्येक वक्ता के लिए एक पंक्ति जोड़ें।'
    },
    'es-ES': {
      exclusionsHelp:'Un nombre o expresión por línea. El texto sigue visible y se lee, pero no cuenta para Accuracy. El docente debe revisar las sugerencias.',
      exclusionsLimit:'Máximo 20 elementos y 60 caracteres por elemento. Revisa las sugerencias.',formPlaceholder:'Pega la URL del formulario que te dio tu profesor',
      scriptPlaceholder:'Pega el texto que vas a leer',titlePlaceholder:'Ej.: Steve Jobs Speech',translationPlaceholder:'Pega la traducción a tu idioma (opcional)',dialogueHint:'Añade una línea por hablante.'
    },
    'pt-PT': {
      exclusionsHelp:'Um nome ou expressão por linha. O texto continua visível e pode ser lido, mas é excluído do cálculo de Accuracy. O professor deve rever as sugestões.',
      exclusionsLimit:'Máximo de 20 itens, 60 caracteres por item. Reveja as sugestões.',formPlaceholder:'Cole o URL do Google Forms fornecido pelo professor',
      scriptPlaceholder:'Cole aqui o texto a ler',titlePlaceholder:'Ex.: Steve Jobs Speech',translationPlaceholder:'Cole a tradução para a sua língua (opcional)',dialogueHint:'Adicione uma fala por interveniente.'
    },
    'ko-KR': {
      exclusionsHelp:'한 줄에 고유명사 또는 표현 하나를 입력하세요. 본문은 그대로 표시되고 읽지만 Accuracy 채점에서만 제외됩니다. 선생님이 추천 항목을 확인하세요.',
      exclusionsLimit:'최대 20개, 항목당 60자. 추천 항목을 확인하세요.',formPlaceholder:'선생님이 제공한 Google 양식 URL을 붙여넣으세요',
      scriptPlaceholder:'낭독할 글을 붙여넣으세요',titlePlaceholder:'예: Steve Jobs Speech',translationPlaceholder:'모국어 번역을 붙여넣으세요(선택)',dialogueHint:'화자별로 대사를 입력하세요.'
    },
    'th-TH': {
      exclusionsHelp:'ใส่ชื่อหรือวลีหนึ่งรายการต่อบรรทัด ข้อความยังแสดงและอ่านได้ แต่ไม่รวมในการคำนวณ Accuracy ให้ครูตรวจสอบคำแนะนำ',
      exclusionsLimit:'ไม่เกิน 20 รายการ รายการละ 60 อักขระ ตรวจสอบคำแนะนำอย่างระมัดระวัง',formPlaceholder:'วาง URL Google Form ที่ครูให้มา',
      scriptPlaceholder:'วางข้อความที่จะอ่านที่นี่',titlePlaceholder:'เช่น Steve Jobs Speech',translationPlaceholder:'วางคำแปลเป็นภาษาแม่ (ไม่บังคับ)',dialogueHint:'เพิ่มบทพูดของแต่ละคน'
    },
    'ne-NP': {
      exclusionsHelp:'प्रत्येक लाइनमा एउटा नाम वा शब्दसमूह राख्नुहोस्। पाठ देखिन्छ र पढिन्छ तर Accuracy गणनामा मात्र समावेश हुँदैन। शिक्षकले सुझाव जाँच्नुहोस्।',
      exclusionsLimit:'बढीमा 20 वटा, प्रत्येकमा 60 अक्षर। सुझाव जाँच्नुहोस्।',formPlaceholder:'शिक्षकले दिएको Google Form URL टाँस्नुहोस्',
      scriptPlaceholder:'पढ्ने पाठ यहाँ टाँस्नुहोस्',titlePlaceholder:'जस्तै: Steve Jobs Speech',translationPlaceholder:'आफ्नो भाषामा अनुवाद टाँस्नुहोस् (वैकल्पिक)',dialogueHint:'प्रत्येक वक्ताका लागि एउटा पङ्क्ति थप्नुहोस्।'
    }
  };

  function current() {
    const value = document.getElementById('appLangSelector')?.value || 'ja';
    return translations[value] ? value : 'en';
  }
  function t(code, key) {
    return translations[code]?.[key] || translations.en[key] || detail[code]?.[key] || detail.en[key] || key;
  }
  function d(code, key) { return detail[code]?.[key] || detail.en[key] || ''; }
  function text(selector, value, root) {
    const node=(root||document).querySelector(selector);
    if(node && value && node.textContent!==value)node.textContent=value;
  }
  function placeholder(selector, value, root) {
    const node=(root||document).querySelector(selector);
    if(node && node.getAttribute('placeholder')!==value)node.setAttribute('placeholder',value);
  }
  function addFilePicker(id, code, labelKey) {
    const input = document.getElementById(id);
    if(!input || input.type !== 'file')return;
    let row = input.parentElement?.querySelector('[data-copeak-local-file-for="'+id+'"]');
    if(!row) {
      row=document.createElement('label');row.setAttribute('for',id);
      row.className='cp-local-file-picker';row.dataset.copeakLocalFileFor=id;
      const title=document.createElement('span');title.className='cp-local-file-name';
      const button=document.createElement('span');button.className='cp-local-file-button';
      row.append(title,button);
      input.insertAdjacentElement('afterend',row);
      input.classList.add('cp-local-file-input');
      // Native file-control text is owned by the browser / OS. Keep input
      // accessible but replace only its visible surface with localized UI.
      input.addEventListener('change',()=>{updateFilePicker(input);});
    }
    input.setAttribute('aria-label',t(code,labelKey));
    updateFilePicker(input,code);
  }
  function updateFilePicker(input,language) {
    const code=language||current();
    const row=input.parentElement?.querySelector('[data-copeak-local-file-for="'+input.id+'"]');
    if(!row)return;
    const chosen=input.files?.length?Array.from(input.files).map(f=>f.name).join(', '):t(code,'noFile');
    const name=row.querySelector('.cp-local-file-name');
    if(name && name.textContent!==chosen)name.textContent=chosen;
    const button=row.querySelector('.cp-local-file-button');
    if(button && button.textContent!==t(code,'chooseFile'))button.textContent=t(code,'chooseFile');
  }
  function update() {
    const root=document.getElementById('customMaterialForm');
    if(!root)return;
    const code=current();
    const k=key=>t(code,key);
    const fieldMap={
      form_label_title:'title',form_label_language:'language',form_label_audio:'audio',
      form_label_text:'script',form_label_translation:'translation',
      form_btn_cancel:'cancel',form_btn_save:'save'
    };
    for(const [id,key] of Object.entries(fieldMap))text('[data-i18n="'+id+'"]',k(key),root);
    text('#tabStandardText',k('standard'),root);
    text('#tabDialogueText',k('dialogue'),root);
    text('#standardInputArea label',k('script'),root);
    text('#dialogueInputArea label',k('dialogueLines'),root);
    text('#dialogueInputArea button[onclick*="addDialogueLine"]',k('addLine'),root);
    text('label[for="customScoreExclusions"]',k('excluded'),root);
    text('#suggestCustomScoreExclusions',k('suggest'),root);
    const exclusions=root.querySelector('#customScoreExclusions')?.parentElement;
    if(exclusions){
      text('p.text-blue-800',d(code,'exclusionsHelp'),exclusions);
      text('p.text-blue-700',d(code,'exclusionsLimit'),exclusions);
    }
    const memo=root.querySelector('#customMemoImage');
    if(memo){
      text('label',k('memo'),memo.parentElement?.parentElement);
      text('#imageRegisteredMark','🖼️ '+k('imageSaved'),root);
    }
    const audioSaved=root.querySelector('#audioRegisteredMark [data-i18n]');
    if(audioSaved && audioSaved.textContent!==k('audioSaved'))audioSaved.textContent=k('audioSaved');
    const google=root.querySelector('#customFormUrl');
    if(google){
      text('label',k('formUrl'),google.parentElement);
      text('p',k('recordingNote'),google.parentElement);
    }
    placeholder('#customTitle',d(code,'titlePlaceholder'),root);
    placeholder('#customEng',d(code,'scriptPlaceholder'),root);
    placeholder('#customJpn',d(code,'translationPlaceholder'),root);
    placeholder('#customFormUrl',d(code,'formPlaceholder'),root);
    for(const el of root.querySelectorAll('.dialogue-speaker')) {
      const v=k('speaker');if(el.placeholder!==v)el.placeholder=v;
    }
    for(const el of root.querySelectorAll('.dialogue-text')){
      const v=k('line');if(el.placeholder!==v)el.placeholder=v;
    }
    for(const id of ['customTitle','customEng','customJpn','customScoreExclusions','customFormUrl']){
      const el=document.getElementById(id);if(el && el.getAttribute('dir')!=='auto')el.setAttribute('dir','auto');
    }
    addFilePicker('customAudio',code,'audio');
    addFilePicker('customMemoImage',code,'memo');
  }
  function installStyle(){
    if(document.getElementById('copeakCreatorFileI18nStyle'))return;
    const style=document.createElement('style');style.id='copeakCreatorFileI18nStyle';
    style.textContent=`
      #customMaterialForm .cp-local-file-input{position:absolute!important;opacity:0!important;width:1px!important;height:1px!important;clip-path:inset(50%);overflow:hidden}
      #customMaterialForm .cp-local-file-picker{display:flex;align-items:center;justify-content:space-between;gap:8px;max-width:100%;min-height:42px;background:#fff;border-radius:9px;padding:5px 8px;cursor:pointer}
      #customMaterialForm .cp-local-file-name{min-width:0;overflow-wrap:anywhere;font-size:13px;color:#64748b}
      #customMaterialForm .cp-local-file-button{white-space:normal;flex-shrink:0;text-align:center;background:#e5e7eb;color:#1f2937;font-weight:700;font-size:13px;border-radius:7px;padding:9px 12px}
      #customMaterialForm .cp-local-file-picker:hover .cp-local-file-button{background:#d1d5db}
      #customMaterialForm .cp-local-file-input:focus-visible+.cp-local-file-picker{outline:2px solid #2563eb;outline-offset:2px}
      @media(max-width:480px){#customMaterialForm .cp-local-file-picker{flex-wrap:wrap}}
    `;
    document.head.appendChild(style);
  }
  let pending=false;
  function schedule(){if(pending)return;pending=true;queueMicrotask(()=>{pending=false;update();});}
  function boot(){
    installStyle();schedule();
    const lang=document.getElementById('appLangSelector');
    lang?.addEventListener('change',schedule);
    window.addEventListener('copeak:languagechange',schedule);
    window.addEventListener('pageshow',schedule);
    // Watch only new dialogue rows. Watching the entire form could create
    // a feedback loop when a localized label is refreshed.
    const dialogue=document.getElementById('dialogueLinesContainer');
    if(dialogue)new MutationObserver(()=>schedule()).observe(dialogue,{childList:true});
    // Dedicated page moves the original form after DOMContentLoaded.
    setTimeout(schedule,150);
    setTimeout(schedule,650);
  }
  // Explicit debug helper for verifying translations from the browser console.
  window.CopeakCreatorLocale={supported:codes.slice(), keys:keys.slice(), t:(key,code)=>t(code||current(),key), refresh:schedule};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
