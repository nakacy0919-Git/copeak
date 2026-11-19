/* A compact lesson-list cover, independent of Memo Image and the reading text. */
(function(){
  'use strict';
  const FALLBACK = './assets/copeak-default-thumbnail.svg';
  const MAX_SOURCE_BYTES = 5 * 1024 * 1024;
  const MAX_DATA_URL_LENGTH = 135000; // ~100 KB stored after base64 decoding.
  let current = null;
  let pending = Promise.resolve();
  let revision = 0;
  let savedCover = false;

  function byId(id){ return document.getElementById(id); }

  function setStatus(message, kind){
    const status = byId('cptStatus');
    if(status){
      status.textContent = message;
      status.dataset.kind = kind || 'neutral';
    }
  }

  function renderCover(source, state){
    const img = byId('cptThumbPreview');
    if(img){
      img.onerror = function(){
        img.onerror = null;
        img.src = FALLBACK;
        setStatus('保存済み画像を読み込めません。別の画像で登録し直してください。','error');
      };
      img.src = source || FALLBACK;
    }
    const fileName = byId('cptFileName');
    if(fileName && state !== 'file'){
      fileName.textContent = source ? '画像を登録済み' : '画像未登録（Copeak標準画像を表示）';
    }
    const remove = byId('cptRemoveThumb');
    if(remove){
      remove.disabled = !source;
      remove.setAttribute('aria-disabled', String(!source));
    }
  }

  function compressImage(file){
    return new Promise(function(resolve,reject){
      if(!file || !/^image\/(?:png|jpeg|webp)$/i.test(file.type)){
        reject(new Error('PNG・JPEG・WebP画像を選択してください。'));return;
      }
      if(file.size > MAX_SOURCE_BYTES){
        reject(new Error('画像は5MB以下のものを選択してください。'));return;
      }
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = function(){
        try{
          if(!img.naturalWidth || !img.naturalHeight || img.naturalWidth > 16000 || img.naturalHeight > 16000){
            throw new Error('画像のサイズを確認してください。');
          }
          const ratio = Math.min(1, 320 / img.naturalWidth, 180 / img.naturalHeight);
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1,Math.round(img.naturalWidth * ratio));
          canvas.height = Math.max(1,Math.round(img.naturalHeight * ratio));
          const ctx = canvas.getContext('2d',{alpha:false});
          if(!ctx)throw new Error('この端末では画像を圧縮できません。');
          ctx.fillStyle = '#063b76';
          ctx.fillRect(0,0,canvas.width,canvas.height);
          ctx.drawImage(img,0,0,canvas.width,canvas.height);
          let data = '';
          for(const quality of [0.72,0.57,0.43]){
            data = canvas.toDataURL('image/webp',quality);
            if(!data.startsWith('data:image/webp')) data = canvas.toDataURL('image/jpeg',quality);
            if(data.length <= MAX_DATA_URL_LENGTH)break;
          }
          if(data.length > MAX_DATA_URL_LENGTH){
            throw new Error('画像を十分に小さくできません。別の画像をお試しください。');
          }
          resolve(data);
        }catch(error){reject(error);}
        finally{URL.revokeObjectURL(url);}
      };
      img.onerror = function(){URL.revokeObjectURL(url);reject(new Error('画像を読み込めませんでした。'))};
      img.src = url;
    });
  }

  function updateFolders(value){
    const el = byId('cptFolderSelect');
    if(!el)return;
    let folders = [];
    try{if(typeof getLibraryFolders === 'function') folders = getLibraryFolders();}catch(_){}
    const options = [{id:'',name:'フォルダ未設定'},...folders.filter(f => f && f.id !== '__copeak_classroom__')];
    el.replaceChildren();
    options.forEach(function(f){
      const option = document.createElement('option');
      option.value = f.id;
      option.textContent = f.name;
      el.append(option);
    });
    el.value = value || '';
  }

  function clear(){
    revision++;
    pending = Promise.resolve();
    current = null;
    savedCover = false;
    const input=byId('cptThumbInput');if(input)input.value='';
    const folder=byId('cptFolderSelect');if(folder)folder.value='';
    renderCover(null);
    setStatus('未登録の場合はCopeak標準画像が表示されます。');
  }

  function set(source,folderId){
    revision++;
    pending = Promise.resolve();
    current = source || null;
    savedCover = !!source;
    const input=byId('cptThumbInput');if(input)input.value='';
    renderCover(current);
    updateFolders(folderId);
    setStatus(source ? '登録済みの画像を表示しています。' : '未登録の場合はCopeak標準画像が表示されます。',
      source ? 'success' : 'neutral');
  }

  function attach(){
    const form = byId('customMaterialForm');
    if(!form || byId('cptThumbnail'))return;
    const column = form.querySelector(':scope > .flex-1') || form.firstElementChild || form;
    const box = document.createElement('section');
    box.id = 'cptThumbnail';
    box.className = 'cpt-box';
    box.setAttribute('aria-label','教材一覧のサムネイル');
    box.innerHTML =
      '<div class="cpt-heading"><strong>教材一覧のサムネイル</strong><small>メモ画像とは別の、教材カードに表示する表紙です。</small></div>' +
      '<div class="cpt-body">' +
        '<img id="cptThumbPreview" src="' + FALLBACK + '" alt="教材のサムネイルプレビュー">' +
        '<div class="cpt-info">' +
          '<div class="cpt-picker">' +
            '<label class="cpt-upload-btn" for="cptThumbInput">🖼 画像を選択</label>' +
            '<input class="cpt-file-input" id="cptThumbInput" type="file" accept="image/png,image/jpeg,image/webp" aria-label="教材一覧のサムネイル画像を選ぶ">' +
            '<span class="cpt-file-name" id="cptFileName">画像未登録（Copeak標準画像を表示）</span>' +
          '</div>' +
          '<small class="cpt-hint">PNG / JPEG / WebP · 最大5MB · 自動で軽量化</small>' +
          '<button class="cpt-remove" id="cptRemoveThumb" type="button" disabled>登録画像を削除</button>' +
          '<span id="cptStatus" role="status" aria-live="polite"></span>' +
        '</div>' +
      '</div>' +
      '<div class="cpt-folder-row"><label class="cpt-folder-label" for="cptFolderSelect">保存先フォルダ</label>' +
      '<select id="cptFolderSelect"><option value="">フォルダ未設定</option></select></div>';

    // Preserve the Title-first form and put cover editing DIRECTLY after Memo Image.
    const memoInput = byId('customMemoImage');
    const memoField = memoInput && memoInput.parentElement && memoInput.parentElement.parentElement;
    if(memoField && column.contains(memoField)) memoField.insertAdjacentElement('afterend',box);
    else column.append(box);
    updateFolders(null);

    byId('cptThumbInput').addEventListener('change',function(){
      const file = this.files && this.files[0];
      if(!file)return;
      const input=this, task=++revision;
      byId('cptFileName').textContent=file.name;
      setStatus('画像を軽量化しています…');
      pending=compressImage(file).then(function(data){
        if(task!==revision)return;
        current=data;
        savedCover=false;
        renderCover(current,'file');
        setStatus('プレビュー更新済み。教材を保存すると登録されます。','success');
      }).catch(function(error){
        if(task!==revision)return;
        input.value='';
        renderCover(current);
        setStatus(error.message || '画像を登録できませんでした。','error');
        throw error;
      });
      // Capture rejection to avoid unhandled browser errors; save awaits pending as well.
      pending.catch(function(){});
    });

    byId('cptRemoveThumb').addEventListener('click',function(){
      if(!current)return;
      revision++;
      pending=Promise.resolve();
      const input=byId('cptThumbInput');if(input)input.value='';
      current='';
      savedCover=false;
      renderCover(null);
      setStatus('画像を削除するには教材を保存してください。','neutral');
    });

    // The image choice is keyboard-accessible through the label.
    const label=box.querySelector('.cpt-upload-btn');
    label.tabIndex=0;
    label.addEventListener('keydown',function(e){
      if(e.key==='Enter'||e.key===' '){e.preventDefault();byId('cptThumbInput').click();}
    });
    setStatus('未登録の場合はCopeak標準画像が表示されます。');
  }

  window.CopeakThumbnail = {
    attach,clear,set,updateFolders,
    get(){return current},
    folder(){return byId('cptFolderSelect')?.value||null},
    ready(){return pending},
    isReady(){return !!byId('cptThumbnail')}
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(attach,100)});
  else setTimeout(attach,100);
})();