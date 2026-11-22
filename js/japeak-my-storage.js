/* Japeak personal library: local-first, same IndexedDB pattern as Copeak.
   Only Japanese reading material; interface language never changes reading target.
   No transcripts, microphone files, or account details are stored. */
(function (root) {
  'use strict';
  const DB_NAME='JapeakPersonalDB',VERSION=1,MAX_LESSONS=300,MAX_FOLDERS=80,MAX_HISTORY=500;
  const STORES={lessons:'lessons',folders:'folders',records:'records'};
  const STORAGE_PREFIX='japeak:personal:v1:';
  const memory={lessons:[],folders:[],records:[]};
  let dbPromise=null,mode='indexeddb';
  function uniqueId(prefix){
    const random = root.crypto?.randomUUID?.() || (Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,11));
    return prefix+random.replace(/[^a-zA-Z0-9_-]/g,'');
  }
  function openDb(){
    if(dbPromise)return dbPromise;
    dbPromise=new Promise((resolve,reject)=>{
      if(!root.indexedDB){reject(Error('IndexedDB unavailable'));return;}
      let request;
      try{request=root.indexedDB.open(DB_NAME,VERSION);}catch(e){reject(e);return;}
      request.onupgradeneeded=()=>{
        const db=request.result;
        for(const name of Object.values(STORES)){
          if(!db.objectStoreNames.contains(name))db.createObjectStore(name,{keyPath:'id'});
        }
      };
      request.onsuccess=()=>resolve(request.result);
      request.onerror=()=>reject(request.error||Error('Cannot open library'));
      request.onblocked=()=>reject(Error('Please close other tabs and reopen the library'));
    }).catch(()=>{mode='local';return null;});
    return dbPromise;
  }
  function safeDecode(raw){
    try{const obj=JSON.parse(raw||'[]');return Array.isArray(obj)?obj:[];}catch(_){return []}
  }
  function fallbackRead(name){
    if(mode==='temporary')return memory[name].slice();
    try {
      if(root.localStorage)return safeDecode(root.localStorage.getItem(STORAGE_PREFIX+name));
    } catch(_){}
    mode='temporary';
    return memory[name].slice();
  }
  function fallbackWrite(name,items){
    memory[name]=items;
    try {
      if(!root.localStorage)throw Error('Local storage unavailable');
      root.localStorage.setItem(STORAGE_PREFIX+name,JSON.stringify(items));
      mode='local';
    } catch(_) {
      mode='temporary';
    }
  }
  async function all(name){
    const db=await openDb();
    if(!db)return fallbackRead(name);
    return new Promise((resolve,reject)=>{
      const tx=db.transaction(name,'readonly'),req=tx.objectStore(name).getAll();
      req.onsuccess=()=>resolve(req.result||[]);
      req.onerror=()=>reject(req.error);
    });
  }
  async function get(name,id){
    const db=await openDb();
    if(!db)return fallbackRead(name).find(item=>item.id===id)||null;
    return new Promise((resolve,reject)=>{
      const tx=db.transaction(name,'readonly'),req=tx.objectStore(name).get(id);
      req.onsuccess=()=>resolve(req.result||null);
      req.onerror=()=>reject(req.error);
    });
  }
  async function put(name,obj){
    const db=await openDb();
    if(!db){
      const items=fallbackRead(name).filter(item=>item.id!==obj.id);
      items.push(obj);
      fallbackWrite(name,items);
      return obj;
    }
    return new Promise((resolve,reject)=>{
      const tx=db.transaction(name,'readwrite');
      tx.objectStore(name).put(obj);
      tx.oncomplete=()=>resolve(obj);
      tx.onerror=()=>reject(tx.error||Error('Save failed'));
      tx.onabort=()=>reject(tx.error||Error('Save cancelled'));
    });
  }
  async function erase(name,id){
    const db=await openDb();
    if(!db){fallbackWrite(name,fallbackRead(name).filter(item=>item.id!==id));return;}
    return new Promise((resolve,reject)=>{
      const tx=db.transaction(name,'readwrite');tx.objectStore(name).delete(id);
      tx.oncomplete=()=>resolve();
      tx.onerror=()=>reject(tx.error||Error('Delete failed'));
    });
  }
  function text(value,max){
    return String(value??'').normalize('NFKC').trim().slice(0,max);
  }
  async function listLessons(){
    return (await all('lessons')).sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0));
  }
  async function listFolders(){
    return (await all('folders')).sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));
  }
  async function saveFolder(name,id=null){
    name=text(name,65);
    if(!name)throw Error('フォルダ名を入力してください');
    let old=id?await get('folders',id):null;
    if(id&&!old)throw Error('フォルダが見つかりません');
    if(!old&&(await all('folders')).length>=MAX_FOLDERS)throw Error('フォルダは80件までです');
    const time=Date.now();
    return put('folders',{id:old?.id||uniqueId('folder_'),name,createdAt:old?.createdAt||time,updatedAt:time});
  }
  async function deleteFolder(id){
    if(!await get('folders',id))return;
    // Deleting a folder never deletes lessons: move them to the unfiled view.
    const lessons=(await all('lessons')).filter(x=>x.folderId===id);
    for(const lesson of lessons)await put('lessons',{...lesson,folderId:null});
    await erase('folders',id);
  }
  async function saveLesson(data){
    const old=data?.id?await get('lessons',data.id):null;
    if(data?.id&&!old)throw Error('教材が見つかりません');
    if(!old&&(await all('lessons')).length>=MAX_LESSONS)throw Error('教材は300件までです');
    const title=text(data?.title,110),japanese=text(data?.japanese,12000),note=text(data?.note,600);
    if(!title||!japanese)throw Error('教材名と日本語の本文を入力してください');
    const folderId=data?.folderId||null;
    if(folderId && !await get('folders',folderId))throw Error('保存先フォルダが見つかりません');
    const audioBlob = data?.audioBlob === undefined ? (old?.audioBlob||null) : (data.audioBlob||null);
    if(audioBlob && (typeof audioBlob.size!=='number'||audioBlob.size>15*1024*1024))throw Error('音声は15MB以下にしてください');
    if(audioBlob && !(await openDb()))throw Error('この端末では音声ファイルを保存できません。音声なしで教材を保存してください。');
    const time=Date.now();
    const lesson={
      id:old?.id||uniqueId('my_'),title,japanese,note,folderId,
      audioBlob,createdAt:old?.createdAt||time,updatedAt:time,
      type:'japanese',version:1
    };
    return put('lessons',lesson);
  }
  async function deleteLesson(id){await erase('lessons',id);}
  async function moveLesson(id,folderId){
    const lesson=await get('lessons',id);
    if(!lesson)throw Error('教材が見つかりません');
    if(folderId&&!await get('folders',folderId))throw Error('保存先が見つかりません');
    return put('lessons',{...lesson,folderId:folderId||null,updatedAt:Date.now()});
  }
  function asPracticeLesson(item){
    if(!item||!/^my_[a-zA-Z0-9_-]+$/.test(item.id))return null;
    return {
      id:item.id,title:item.title,japanese:item.japanese,
      target_speech:item.japanese,category:'my_japanese',
      context:{ja:item.note||''},translations:{ja:item.note||''},
      ruby:{hiragana:'',romaji:''},
      myLesson:true,audioBlob:item.audioBlob||null
    };
  }
  async function savePracticeResult(id,accuracy,modeName='full'){
    if(!/^my_[a-zA-Z0-9_-]+$/.test(id) && !/^[a-zA-Z0-9_-]{1,180}$/.test(id))throw Error('不正な教材IDです');
    const score=Number(accuracy);
    if(!Number.isFinite(score)||score<0||score>100)throw Error('不正なスコアです');
    const row={id:uniqueId('result_'),lessonId:id,accuracy:Math.round(score),mode:modeName==='sentence'?'sentence':'full',at:Date.now()};
    await put('records',row);
    const rows=(await all('records')).sort((a,b)=>a.at-b.at);
    // Keep the last 500 scoring results; never store the actual speech transcript.
    for(const old of rows.slice(0,Math.max(0,rows.length-MAX_HISTORY)))await erase('records',old.id);
    return row;
  }
  async function listPracticeResults(id){
    const rows=await all('records');
    return rows.filter(x=>x.lessonId===id).sort((a,b)=>b.at-a.at);
  }
  root.JapeakMyLibrary={
    listLessons,listFolders,getLesson:id=>get('lessons',id),saveLesson,deleteLesson,
    saveFolder,deleteFolder,moveLesson,asPracticeLesson,
    savePracticeResult,listPracticeResults,getStorageMode:()=>mode
  };
})(window);
