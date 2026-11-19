/* Independent Copeak list thumbnail, never confused with lesson memoImage. */
(() => {
  'use strict';
  const MAX_SOURCE=12*1024*1024;
  const valid=/^image\/(png|jpeg|webp)$/;
  let current=null, busy=false, generation=0;
  let input,preview,status,clear;

  function safeUrl(value) {
    return typeof value==='string' && /^data:image\/(?:webp|jpeg|png);base64,[A-Za-z0-9+/=]+$/.test(value)
      && value.length<=95000 ? value : null;
  }
  function update(){
    if(preview){
      preview.src=current||'logo.png';
      preview.alt=current?'登録中の教材サムネイル':'Copeakの標準サムネイル';
    }
    if(status)status.textContent=busy?'画像を圧縮しています…':current?'サムネイル登録済み（教材の補助画像とは別です）':'未登録時はCopeak標準画像を表示します';
    if(clear)clear.disabled=busy||!current;
  }
  function imageFromFile(file){
    return new Promise((resolve,reject)=>{
      const url=URL.createObjectURL(file),image=new Image();
      image.onload=()=>{URL.revokeObjectURL(url);resolve(image)};
      image.onerror=()=>{URL.revokeObjectURL(url);reject(new Error('画像を読み取れませんでした'))};
      image.src=url;
    });
  }
  async function compress(file) {
    if(!file||(!valid.test(file.type)&&!/\.(png|jpe?g|webp)$/i.test(file.name||'')))throw new Error('PNG・JPEG・WebP画像を選択してください');
    if(file.size>MAX_SOURCE)throw new Error('元画像は12 MB以下にしてください');
    const img=await imageFromFile(file);
    if(!img.naturalWidth||!img.naturalHeight)throw new Error('画像サイズを確認してください');
    const cv=document.createElement('canvas'),ctx=cv.getContext('2d',{alpha:false});
    if(!ctx)throw new Error('画像の圧縮に対応していません');
    const sizes=[[320,180,.74],[280,158,.67],[240,135,.60],[200,113,.53]];
    let output=null;
    for(const [w,h,q] of sizes){
      cv.width=w;cv.height=h;
      ctx.fillStyle='#073a72';ctx.fillRect(0,0,w,h);
      ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
      const scale=Math.max(w/img.naturalWidth,h/img.naturalHeight);
      const rw=img.naturalWidth*scale,rh=img.naturalHeight*scale;
      ctx.drawImage(img,(w-rw)/2,(h-rh)/2,rw,rh);
      const webp=cv.toDataURL('image/webp',q);
      output=/^data:image\/webp;base64,/.test(webp)?webp:cv.toDataURL('image/jpeg',q);
      if(output.length<=78000)break;
    }
    if(!safeUrl(output))throw new Error('画像を小さくできませんでした。別の画像を選択してください');
    return output;
  }
  async function changed() {
    const file=input.files?.[0];
    const my=++generation;
    if(!file)return;
    busy=true;update();
    try{
      const value=await compress(file);
      if(my!==generation)return;
      current=value;
    }catch(err){
      if(my===generation){
        input.value='';
        if(status)status.textContent=err.message;
        if(typeof window.showMsg==='function')window.showMsg('⚠ '+err.message);
      }
    }finally{
      if(my===generation){busy=false;update();}
    }
  }
  function mount(){
    if(document.getElementById('cpThumbnailUpload'))return;
    const memo=document.getElementById('customMemoImage');
    if(!memo)return;
    const wrapper=document.createElement('section');
    wrapper.className='cp-thumb-editor';
    wrapper.innerHTML='<div class="cp-thumb-editor-title">🖼 教材一覧のサムネイル <span>任意・補助画像とは別</span></div>'+
      '<div class="cp-thumb-editor-body"><img id="cpThumbPreview" alt="教材サムネイルのプレビュー" src="logo.png">'+
      '<div class="cp-thumb-editor-info"><input id="cpThumbnailUpload" type="file" accept=".png,.jpg,.jpeg,.webp,image/png,image/jpeg,image/webp">'+
      '<p id="cpThumbStatus" role="status">未登録時はCopeak標準画像を表示します</p>'+
      '<button id="cpThumbClear" type="button">画像を解除</button></div></div>';
    const section=memo.closest('.field')||memo.parentElement?.parentElement||memo.parentElement;
    section?.parentElement?.insertBefore(wrapper,section);
    input=wrapper.querySelector('#cpThumbnailUpload');
    preview=wrapper.querySelector('#cpThumbPreview');
    status=wrapper.querySelector('#cpThumbStatus');
    clear=wrapper.querySelector('#cpThumbClear');
    input.addEventListener('change',changed);
    clear.addEventListener('click',()=>{generation++;current=null;busy=false;input.value='';update()});
    update();
  }
  const api={
    mount,compress,safeUrl,
    isBusy:()=>busy,
    getForSave:()=>safeUrl(current),
    loadForEdit:(value)=>{generation++;busy=false;current=safeUrl(value);if(input)input.value='';update()},
    reset:()=>{generation++;busy=false;current=null;if(input)input.value='';update()}
  };
  window.CopeakThumbnail=api;
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});
  else mount();
})();