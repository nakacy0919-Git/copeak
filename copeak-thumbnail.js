/* Thumbnail is separate from the explanatory memo image. */
(function(){
"use strict";
var current=null,pending=Promise.resolve();
function clear(){current=null;pending=Promise.resolve();var f=document.getElementById("cptThumbInput");if(f)f.value="";var folder=document.getElementById("cptFolderSelect");if(folder)folder.value="";preview(null)}
function preview(src){var img=document.getElementById("cptThumbPreview");if(img)img.src=src||"./assets/copeak-default-thumbnail.svg"}
function compression(file){
 return new Promise((resolve,reject)=>{
  if(!/^image\/(?:png|jpeg|webp)$/i.test(file.type))return reject(new Error("PNG・JPEG・WebPのみ登録できます"));
  if(file.size>15*1024*1024)return reject(new Error("画像は15MB以下にしてください"));
  var blobURL=URL.createObjectURL(file),im=new Image();
  im.onload=function(){try{
   var scale=Math.min(1,320/im.naturalWidth,180/im.naturalHeight);
   var can=document.createElement("canvas");can.width=Math.max(1,Math.round(im.naturalWidth*scale));can.height=Math.max(1,Math.round(im.naturalHeight*scale));
   var ctx=can.getContext("2d",{alpha:false});ctx.fillStyle="#0c4274";ctx.fillRect(0,0,can.width,can.height);ctx.drawImage(im,0,0,can.width,can.height);
   var data=can.toDataURL("image/webp",0.67);if(!data.startsWith("data:image/webp"))data=can.toDataURL("image/jpeg",0.65);
   URL.revokeObjectURL(blobURL);if(data.length>160000)throw new Error("圧縮画像が大きすぎます。別の画像をお試しください");
   resolve(data);
  }catch(err){URL.revokeObjectURL(blobURL);reject(err)}};
  im.onerror=()=>{URL.revokeObjectURL(blobURL);reject(new Error("画像を読み込めませんでした"))};
  im.src=blobURL;
 });
}
function attach(){
 var form=document.getElementById("customMaterialForm");if(!form||document.getElementById("cptThumbnail"))return;
 var box=document.createElement("div");box.id="cptThumbnail";box.className="cpt-box";
 box.innerHTML='<img id="cptThumbPreview" src="./assets/copeak-default-thumbnail.svg" alt="教材一覧の表紙プレビュー"><div class="cpt-info"><strong>教材一覧のサムネイル</strong><small>補助画像とは別。PNG / JPEG / WebP（15MBまで）</small><input id="cptThumbInput" type="file" accept="image/png,image/jpeg,image/webp"><button id="cptRemoveThumb" type="button">サムネを解除</button><label class="cpt-folder-label">保存先フォルダ <select id="cptFolderSelect"><option value="">未整理</option></select></label><span id="cptStatus" role="status"></span></div>';
 var mainColumn=form.querySelector(":scope > .flex-1") || form.firstElementChild || form;
 mainColumn.prepend(box);
 updateFolders(null);
 document.getElementById("cptThumbInput").addEventListener("change",async function(){
  var f=this.files&&this.files[0];if(!f)return;
  var status=document.getElementById("cptStatus");status.textContent="圧縮中…";
  pending=compression(f).then(data=>{current=data;preview(current);status.textContent="登録準備完了（"+Math.round(current.length*0.75/1024)+"KB）"}).catch(e=>{this.value="";status.textContent=e.message;throw e});
  try{await pending}catch(_){}
 });
 document.getElementById("cptRemoveThumb").onclick=()=>{pending=Promise.resolve();current="";preview(null);document.getElementById("cptStatus").textContent="サムネイルを解除します"};
}
function updateFolders(value){var el=document.getElementById("cptFolderSelect");if(!el)return;var options=[{id:"",name:"未整理"},...(typeof getLibraryFolders==="function"?getLibraryFolders():[])];el.replaceChildren();options.forEach(f=>{var option=document.createElement("option");option.value=f.id;option.textContent=f.name;el.append(option)});el.value=value||""}
window.CopeakThumbnail={attach,clear,get(){return current},folder(){return document.getElementById("cptFolderSelect")?.value||null},ready(){return pending},set(src,folderId){pending=Promise.resolve();current=src||null;preview(current);updateFolders(folderId)},updateFolders,isReady(){return !!document.getElementById("cptThumbnail")}};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>setTimeout(attach,160));else setTimeout(attach,160);
})();