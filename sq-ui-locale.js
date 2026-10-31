/* Sound Quest UI display language. Exercise content, IPA, audio and mic stay unchanged.
   Reads Copeak's selected display locale; no network calls. */
(function(){
  'use strict';
  const languageCodes=['ja','en','zh-TW','vi','id','tl','hi'];
  const items={
    'ホームへ':['ホームへ','Home','首頁','Trang chủ','Beranda','Home','होम'],
    'コース選択へ':['コース選択へ','Course Selection','選擇課程','Chọn bài','Pilih Kursus','Pumili ng Kurso','पाठ चुनें'],
    'スキップ':['スキップ','Skip','跳過','Bỏ qua','Lewati','Laktawan','छोड़ें'],
    '発音の基礎となる「音の違い」をマスター':['発音の基礎となる「音の違い」をマスター','Master essential differences between sounds','掌握發音基礎中的音韻差異','Nắm vững sự khác biệt giữa các âm','Kuasai perbedaan bunyi dasar','Alamin ang pagkakaiba ng mga tunog','ध्वनियों के बीच अंतर पहचानें'],
    '実践的な「音の繋がりや脱落」をマスター':['実践的な「音の繋がりや脱落」をマスター','Master linking and reduced sounds','掌握連音與省音','Nắm vững nối âm và lược âm','Kuasai sambungan dan pengurangan bunyi','Alamin ang pagdudugtong ng tunog','जुड़ी और लुप्त ध्वनियाँ सीखें'],
    '💡 解説':['💡 解説','💡 Guide','💡 說明','💡 Giải thích','💡 Penjelasan','💡 Paliwanag','💡 विवरण'],
    'リエゾンのデータがまだありません。':['リエゾンのデータがまだありません。','Connected speech lessons are not available yet.','連音教材尚未提供。','Chưa có bài nối âm.','Materi liaison belum tersedia.','Wala pang aralin sa liaison.','लिऐज़ों पाठ अभी उपलब्ध नहीं हैं।'],
    '発音のポイント':['発音のポイント','Pronunciation Tips','發音要點','Mẹo phát âm','Kiat Pengucapan','Mga Tip sa Pagbigkas','उच्चारण के सुझाव'],
    'データ作成中です。':['データ作成中です。','Lesson in preparation.','教材準備中。','Đang chuẩn bị bài học.','Materi sedang disiapkan.','Inihahanda ang aralin.','पाठ तैयार हो रहा है।'],
    'データ準備中...':['データ準備中...','Preparing data…','資料準備中…','Đang chuẩn bị dữ liệu…','Menyiapkan data…','Inihahanda ang datos…','डेटा तैयार हो रहा है…'],
    '画像準備中...':['画像準備中...','Image coming soon…','圖片準備中…','Đang chuẩn bị ảnh…','Gambar segera tersedia…','Inihahanda ang larawan…','चित्र तैयार हो रहा है…'],
    'マイクボタンを押して発音してください':['マイクボタンを押して発音してください','Tap the microphone and pronounce the word.','點選麥克風並發音。','Nhấn mic và phát âm.','Tekan mikrofon lalu ucapkan.','Pindutin ang mikropono at bigkasin.','माइक्रोफ़ोन दबाकर उच्चारण करें।'],
    'Listening... (話してください)':['Listening... (話してください)','Listening… Speak now.','正在聆聽…請說話。','Đang nghe… Hãy nói.','Mendengarkan… Silakan bicara.','Nakikinig… Magsalita na.','सुन रहा है… अब बोलें।'],
    'マイクボタンを押して、最後まで一気に読んでください':['マイクボタンを押して、最後まで一気に読んでください','Tap the microphone and read the whole passage.','點選麥克風，完整朗讀文章。','Nhấn mic và đọc hết đoạn văn.','Tekan mikrofon dan baca seluruh teks.','Pindutin ang mikropono at basahin ang buong teksto.','माइक्रोफ़ोन दबाकर पूरा अनुच्छेद पढ़ें।'],
    'Listening... (読み終わったらマイクをもう一度押して終了)':['Listening... (読み終わったらマイクをもう一度押して終了)','Listening… Tap the microphone again when finished.','正在聆聽…讀完後再按一次麥克風。','Đang nghe… Nhấn lại mic khi đọc xong.','Mendengarkan… Tekan lagi mikrofon saat selesai.','Nakikinig… Pindutin muli kapag tapos na.','सुन रहा है… समाप्त होने पर दोबारा माइक्रोफ़ोन दबाएँ।'],
    '聞き取れませんでした。もう一度発音してください。':['聞き取れませんでした。もう一度発音してください。','Speech not detected. Please try again.','無法辨識聲音，請再試一次。','Không nhận được giọng nói. Hãy thử lại.','Suara tidak dikenali. Coba lagi.','Hindi narinig ang boses. Subukan muli.','आवाज़ नहीं पहचानी गई। फिर प्रयास करें।'],
    'もう一度コツを確認する':['もう一度コツを確認する','Review the tips','重新查看技巧','Xem lại mẹo','Lihat kiat lagi','Tingnan muli ang tip','सुझाव फिर देखें'],
    '💡 解説とコツを見る':['💡 解説とコツを見る','💡 View tips and explanation','💡 查看技巧與說明','💡 Xem mẹo và giải thích','💡 Lihat kiat & penjelasan','💡 Tingnan ang paliwanag','💡 सुझाव और विवरण देखें'],
    '👂 聞き分けを始める ➔':['👂 聞き分けを始める ➔','👂 Start Listening ➔','👂 開始聽辨 ➔','👂 Bắt đầu nghe ➔','👂 Mulai Mendengar ➔','👂 Simulan ang Pakikinig ➔','👂 सुनने का अभ्यास शुरू करें ➔'],
    '🎤 発音の特訓を始める ➔':['🎤 発音の特訓を始める ➔','🎤 Start Speaking ➔','🎤 開始發音練習 ➔','🎤 Luyện phát âm ➔','🎤 Mulai Latihan Ucap ➔','🎤 Simulan ang Pagbigkas ➔','🎤 उच्चारण अभ्यास शुरू करें ➔'],
    '🎤 発音テストへ進む ➔':['🎤 発音テストへ進む ➔','🎤 Continue to Voice Check ➔','🎤 前往發音測驗 ➔','🎤 Tiếp tục kiểm tra phát âm ➔','🎤 Lanjut Tes Ucapan ➔','🎤 Mag-Voice Check ➔','🎤 उच्चारण जाँच पर जाएँ ➔'],
    '句の練習へ進む ➔':['句の練習へ進む ➔','Continue to Phrases ➔','前往片語練習 ➔','Tiếp tục luyện cụm từ ➔','Lanjut ke Frasa ➔','Magpatuloy sa Parirala ➔','वाक्यांश अभ्यास जारी रखें ➔'],
    '文の練習へ進む ➔':['文の練習へ進む ➔','Continue to Sentences ➔','前往句子練習 ➔','Tiếp tục luyện câu ➔','Lanjut ke Kalimat ➔','Magpatuloy sa Pangungusap ➔','वाक्य अभ्यास जारी रखें ➔'],
    '長文の音読へ進む ➔':['長文の音読へ進む ➔','Continue to Passage ➔','前往文章朗讀 ➔','Tiếp tục đọc đoạn văn ➔','Lanjut Baca Teks ➔','Magpatuloy sa Talata ➔','अनुच्छेद पढ़ने जाएँ ➔'],
    'ミッション完了 ➔':['ミッション完了 ➔','Mission Complete ➔','任務完成 ➔','Hoàn thành nhiệm vụ ➔','Misi Selesai ➔','Tapos ang Misyon ➔','मिशन पूरा ➔'],
    '次へ進む ➔':['次へ進む ➔','Continue ➔','繼續 ➔','Tiếp tục ➔','Lanjut ➔','Magpatuloy ➔','आगे बढ़ें ➔'],
    'もう一度 Voice Check へ戻る (Retry)':['もう一度 Voice Check へ戻る (Retry)','Retry Voice Check','再試一次發音檢查','Thử lại kiểm tra phát âm','Coba Lagi Voice Check','Subukan Muli ang Voice Check','आवाज़ जाँच दोहराएँ'],
    '別の特訓に挑戦する ➔':['別の特訓に挑戦する ➔','Try Another Course ➔','挑戰其他課程 ➔','Thử bài khác ➔','Coba Kursus Lain ➔','Subukan ang Ibang Aralin ➔','दूसरा अभ्यास चुनें ➔'],
    'Copeak 本編へ戻る 🚀':['Copeak 本編へ戻る 🚀','Continue to Copeak 🚀','前往 Copeak 🚀','Tiếp tục đến Copeak 🚀','Lanjut ke Copeak 🚀','Magpatuloy sa Copeak 🚀','Copeak पर जाएँ 🚀'],
    'ターゲット音の聞き分けと発音を習得しました！':['ターゲット音の聞き分けと発音を習得しました！','You mastered the target sounds!','你已掌握目標發音！','Bạn đã nắm vững các âm mục tiêu!','Kamu menguasai bunyi target!','Natutuhan mo ang mga target na tunog!','आपने लक्ष्य ध्वनियाँ सीख ली हैं!'],
    'この感覚を持ったまま、Copeak本体へ進みましょう。':['この感覚を持ったまま、Copeak本体へ進みましょう。','Keep this feeling and continue in Copeak.','保持這個感覺，前往 Copeak。','Giữ cảm giác này và tiếp tục trong Copeak.','Lanjutkan latihan di Copeak.','Dalhin ang natutuhan mo sa Copeak.','इसी अभ्यास को Copeak में जारी रखें।'],
    '次のステージへ進む':['次のステージへ進む','Next stage','下一關','Màn tiếp theo','Tahap berikutnya','Susunod na yugto','अगला चरण'],
    '口の形':['口の形','Mouth position','口型','Khẩu hình','Posisi mulut','Posisyon ng bibig','मुँह की स्थिति'],
    '※短い単語はAIが誤認識しやすいため、最初の子音を少し大げさに発音してみてください':['※短い単語はAIが誤認識しやすいため、最初の子音を少し大げさに発音してみてください','Short words can be misheard. Emphasize the first consonant.','短詞容易辨識錯誤，請加強第一個子音。','Từ ngắn dễ bị nhận sai. Nhấn mạnh phụ âm đầu.','Kata pendek mudah salah dikenali. Perjelas konsonan awal.','Maaaring hindi makilala ang maikling salita. Diinan ang unang katinig.','छोटे शब्द गलत पहचाने जा सकते हैं। पहला व्यंजन स्पष्ट बोलें।'],
    '素晴らしい！リエゾンのルールがしっかり定着しています！✨':['素晴らしい！リエゾンのルールがしっかり定着しています！✨','Excellent! You are mastering connected speech! ✨','太棒了！你已掌握連音規則！✨','Tuyệt vời! Bạn đã nắm được quy tắc nối âm! ✨','Bagus! Kamu menguasai aturan liaison! ✨','Magaling! Kabisado mo na ang connected speech! ✨','बहुत अच्छे! आप जुड़ी ध्वनियाँ सीख रहे हैं! ✨'],
    'Nice try! 繰り返し練習してさらに精度を上げましょう！💪':['Nice try! 繰り返し練習してさらに精度を上げましょう！💪','Nice try! Keep practicing to improve! 💪','繼續加油！透過練習提升準確度！💪','Tốt lắm! Tiếp tục luyện tập để tiến bộ! 💪','Bagus! Terus berlatih agar makin tepat! 💪','Magaling! Sanayin pa upang gumaling! 💪','अच्छा प्रयास! अभ्यास जारी रखें! 💪']
  };
  const originalTexts=new WeakMap();
  const reverse=new Map();
  for(const [ja,values] of Object.entries(items))for(const v of values)reverse.set(v,ja);
  const supported=()=>{let lang='ja';try{lang=localStorage.getItem('copeak_lang')||'ja';}catch(_){}return languageCodes.includes(lang)?lang:'ja';};
  function translateNode(node,idx){
    if(node.nodeType!==Node.TEXT_NODE)return;
    const parent=node.parentElement;if(!parent||parent.closest('script,style,textarea,input,[contenteditable="true"]'))return;
    const raw=node.nodeValue||'';
    if(!raw.trim())return;
    let original=originalTexts.get(node);
    if(!original){
      original=reverse.get(raw.trim());
      if(!original)return;
      originalTexts.set(node,original);
    }
    const target=items[original][idx];
    const white=raw.match(/^(\s*)/)[1],tail=raw.match(/(\s*)$/)[1];
    const next=white+target+tail;
    if(raw!==next)node.nodeValue=next;
  }
  function translateTree(root,idx){
    if(!root)return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node;while((node=walker.nextNode()))translateNode(node,idx);
    root.querySelectorAll('[title],[alt],[aria-label]').forEach(el=>{
      for(const attr of ['title','alt','aria-label']){
        const raw=el.getAttribute(attr);
        const jp=reverse.get(raw);
        if(jp){const value=items[jp][idx];if(value!==raw)el.setAttribute(attr,value);}
      }
    });
  }
  function apply(){
    const idx=languageCodes.indexOf(supported());
    document.documentElement.lang=languageCodes[idx];
    for(const id of ['sqAppContainer','transferModal','progressContainer']){
      translateTree(document.getElementById(id),idx);
    }
    translateTree(document.querySelector('header'),idx);
  }
  function begin(){
    apply();
    let scheduled=false;
    const schedule=()=>{if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;apply();});};
    for(const id of ['sqAppContainer','transferModal','progressContainer']){
      const root=document.getElementById(id);
      if(root)new MutationObserver(schedule).observe(root,{subtree:true,childList:true});
    }
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)apply();});
    window.addEventListener('pageshow',apply);
    // No microphone or training state is modified by this UI-only translation.
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',begin);
  else begin();
})();