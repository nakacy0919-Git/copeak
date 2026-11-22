/* Japeak personal library UI. Real lessons are stored locally with IndexedDB. */
(function(root){
'use strict';
const db=root.JapeakMyLibrary, i18n=root.JapeakMyI18n, taxonomy=root.JapeakV4Taxonomy;
if(!db||!i18n)return;
const $=id=>document.getElementById(id);
let lang='ja',selectedFolder=null,editingId=null,busy=false,folders=[],lessons=[];
const editor=$('jp-editor'),form=$('jp-editor-form');
const t=key=>i18n.t(lang,key);
function notify(message,error=false){
  const toast=$('jp-toast');
  toast.textContent=message;toast.hidden=false;toast.classList.toggle('jp-error',error);
}
function translate(){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-t]').forEach(node=>{
    node.textContent=t(node.dataset.t);
  });
  $('jp-editor-title').textContent=editingId?t('edit'):t('create');
  const mode=db.getStorageMode();
  if(mode==='temporary'){
    $('jp-storage-note')?.classList.add('jp-warning');
    $('jp-storage-note').textContent=t('storage')+' ⚠ Storage unavailable: changes may be lost when the page closes.';
  }
}
function createEl(tag,className,textValue){
  const el=document.createElement(tag);
  if(className)el.className=className;
  if(textValue!==undefined)el.textContent=textValue;
  return el;
}
function getFolderText(id){
  return folders.find(x=>x.id===id)?.name||t('unfiled');
}
function refreshFolderSelect(value){
  const select=$('jp-field-folder');
  select.replaceChildren();
  for(const [id,label] of [['',t('unfiled')],...folders.map(x=>[x.id,x.name])]){
    const option=new Option(label,id);select.appendChild(option);
  }
  select.value=value||'';
}
function folderButton(id,title,amount){
  const button=createEl('button','jp-folder-select');
  button.type='button';
  button.setAttribute('aria-pressed',String(selectedFolder===id));
  const label=createEl('span','jp-folder-name','▣  '+title);
  const count=createEl('span','jp-folder-count',String(amount));
  button.append(label,count);
  button.addEventListener('click',()=>{selectedFolder=id;render();});
  return button;
}
function renderFolders(){
  const box=$('jp-folder-list');box.replaceChildren();
  box.append(folderButton(null,t('all'),lessons.length));
  box.append(folderButton('__unfiled__',t('unfiled'),lessons.filter(x=>!x.folderId).length));
  for(const folder of folders){
    const row=createEl('div','jp-folder-row');
    const select=folderButton(folder.id,folder.name,lessons.filter(x=>x.folderId===folder.id).length);
    const edit=createEl('button','jp-folder-icon','✎');
    edit.type='button';edit.title=t('edit');edit.setAttribute('aria-label',t('edit')+' '+folder.name);
    edit.addEventListener('click',async()=>{
      const name=root.prompt(t('folderRename'),folder.name);
      if(name===null||!name.trim())return;
      try{await db.saveFolder(name,folder.id);await reload();notify(t('saved'));}catch(e){notify(e.message,true)}
    });
    const remove=createEl('button','jp-folder-icon danger','×');
    remove.type='button';remove.title=t('remove');remove.setAttribute('aria-label',t('remove')+' '+folder.name);
    remove.addEventListener('click',async()=>{
      if(!root.confirm(t('confirmFolder')))return;
      try{await db.deleteFolder(folder.id);if(selectedFolder===folder.id)selectedFolder=null;await reload();notify(t('saved'));}catch(e){notify(e.message,true)}
    });
    row.append(select,edit,remove);box.append(row);
  }
}
function makeAction(label,action,css='jp-text-action'){
  const button=createEl('button',css,label);button.type='button';button.addEventListener('click',action);return button;
}
function makeLessonCard(lesson){
  const card=createEl('article','jp-lesson-card');
  const deco=createEl('span','jp-deco','✿');deco.setAttribute('aria-hidden','true');
  const title=createEl('h3','',lesson.title);
  const text=createEl('p','jp-excerpt',lesson.japanese);
  const meta=createEl('p','jp-lesson-meta',getFolderText(lesson.folderId));
  const main=createEl('div','jp-lesson-content');main.append(deco,meta,title,text);
  const start=createEl('a','jp-read-action','▶ '+t('start'));
  start.href='japeak.html?id='+encodeURIComponent(lesson.id)+'&lang='+encodeURIComponent(lang);
  const edit=makeAction('✎ '+t('edit'),()=>openEditor(lesson),'jp-text-action');
  const remove=makeAction('× '+t('remove'),async()=>{
    if(!root.confirm(t('confirmDelete')))return;
    try{await db.deleteLesson(lesson.id);await reload();notify(t('saved'));}catch(e){notify(e.message,true)}
  },'jp-text-action jp-danger-action');
  const move=document.createElement('select');move.className='jp-move-select';
  move.setAttribute('aria-label',t('move')+'：'+lesson.title);
  for(const [id,name] of [['',t('unfiled')],...folders.map(x=>[x.id,x.name])]){
    move.add(new Option(name,id));
  }
  move.value=lesson.folderId||'';
  move.addEventListener('change',async()=>{
    try{await db.moveLesson(lesson.id,move.value);await reload();notify(t('saved'));}catch(e){notify(e.message,true)}
  });
  const footer=createEl('div','jp-lesson-actions');footer.append(start,edit,move,remove);
  card.append(main,footer);return card;
}
function render(){
  renderFolders();
  let filtered=lessons;
  if(selectedFolder==='__unfiled__')filtered=lessons.filter(x=>!x.folderId);
  else if(selectedFolder)filtered=lessons.filter(x=>x.folderId===selectedFolder);
  $('jp-count').textContent=filtered.length+' '+(lang==='ja'?'教材':'');
  const list=$('jp-lesson-list');list.replaceChildren();
  if(!filtered.length){
    const empty=createEl('div','jp-empty',t('empty'));
    list.append(empty);return;
  }
  const fragment=document.createDocumentFragment();
  filtered.forEach(x=>fragment.append(makeLessonCard(x)));list.append(fragment);
}
async function reload(){
  [folders,lessons]=await Promise.all([db.listFolders(),db.listLessons()]);
  translate();render();
}
function openEditor(lesson=null){
  editingId=lesson?.id||null;
  form.reset();
  $('jp-field-title').value=lesson?.title||'';
  $('jp-field-body').value=lesson?.japanese||'';
  $('jp-field-note').value=lesson?.note||'';
  $('jp-editor-message').textContent='';
  refreshFolderSelect(lesson?.folderId||(selectedFolder&&!selectedFolder.startsWith('__')?selectedFolder:null));
  translate();
  if(typeof editor.showModal==='function')editor.showModal();
  else editor.setAttribute('open','');
  $('jp-field-title').focus();
}
function closeEditor(){
  if(typeof editor.close==='function')editor.close();
  else editor.removeAttribute('open');
  editingId=null;translate();
}
async function save(event){
  event.preventDefault();if(busy)return;
  const file=$('jp-field-audio').files?.[0];
  if(file && file.size>15*1024*1024){$('jp-editor-message').textContent='音声ファイルは15MB以下にしてください';return;}
  busy=true;$('jp-editor-save').disabled=true;
  try {
    const saved=await db.saveLesson({
      id:editingId,title:$('jp-field-title').value,japanese:$('jp-field-body').value,
      note:$('jp-field-note').value,folderId:$('jp-field-folder').value||null,
      audioBlob:file||undefined
    });
    closeEditor();await reload();notify(t('saved'));
    selectedFolder=saved.folderId||'__unfiled__';render();
  }catch(error){$('jp-editor-message').textContent=error.message||t('error');}
  finally{busy=false;$('jp-editor-save').disabled=false;}
}
function setLanguage(code){
  lang=i18n.codes.includes(code)?code:'en';
  try{root.localStorage?.setItem('japeakLang',lang)}catch(_){}
  $('jp-ui-language').value=lang;reload().catch(e=>notify(e.message,true));
}
async function boot(){
  const select=$('jp-ui-language');
  const langs=taxonomy?.languages||i18n.codes.map(code=>({code,name:code}));
  for(const item of langs) {
    if(i18n.codes.includes(item.code))select.add(new Option(item.name,item.code));
  }
  $('jp-create-open').addEventListener('click',()=>openEditor());
  $('jp-add-folder').addEventListener('click',async()=>{
    const name=root.prompt(t('folderPrompt'));
    if(name===null||!name.trim())return;
    try{const folder=await db.saveFolder(name);selectedFolder=folder.id;await reload();notify(t('saved'));}catch(e){notify(e.message,true)}
  });
  $('jp-editor-close').addEventListener('click',closeEditor);
  $('jp-editor-cancel').addEventListener('click',closeEditor);
  form.addEventListener('submit',save);
  select.addEventListener('change',()=>setLanguage(select.value));
  try {
    const requested=new URLSearchParams(root.location.search).get('lang');
    const stored=root.localStorage?.getItem('japeakLang');
    lang=i18n.codes.includes(requested)?requested:i18n.codes.includes(stored)?stored:'ja';
  }catch(_){lang='ja';}
  select.value=lang;await reload();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{void boot();});
else void boot();
})(window);
