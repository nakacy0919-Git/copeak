(function(){
"use strict";
var fallback="./assets/copeak-default-thumbnail.svg",selected="all",sort="new",term="",all=[],folders=[],starred=new Set();
var CLASSROOM_FOLDER_ID="__copeak_classroom__";
var taxonomy=window.CopeakLessonTaxonomy;
var categoryFilters={source:"all",grade:"all",cert:"all",cefr:"all"};
try{starred=new Set(JSON.parse(localStorage.getItem("copeak_reader_starred")||"[]"));}catch(_){}
var $=s=>document.querySelector(s);
function dbRead(){return new Promise(done=>{try{if(typeof db==="undefined"||!db)return done([]);var r=db.transaction("CustomLessons","readonly").objectStore("CustomLessons").getAll();r.onsuccess=()=>done(r.result||[]);r.onerror=()=>done([]);}catch(_){done([])}});}
function folderData(){try{return (typeof getLibraryFolders==="function"?getLibraryFolders():[]).filter(f=>String(f.id)!==CLASSROOM_FOLDER_ID)}catch(_){return []}}
function isClassroomLesson(l){return Boolean(l&&(l.classroomSource===true||l.classroomAssignmentId||l.folderId===CLASSROOM_FOLDER_ID))}
function matchesFolder(l,id){if(id==="all")return true;if(id===CLASSROOM_FOLDER_ID)return isClassroomLesson(l);if(isClassroomLesson(l))return false;if(id==="__unfiled__")return !l.folderId;if(id==="__copeak_original__")return String(l.folderId||"").startsWith("__copeak_");return String(l.folderId)===id}
function count(id){return all.filter(l=>matchesFolder(l,id)).length}
function image(l){var s=l.thumbnail||l.thumbnailUrl||"";return typeof s==="string"&&(/^(data:image\/(webp|png|jpeg);base64,|https:\/\/|\.?\/?assets\/)/i).test(s)&&s.length<180000?s:fallback}
function make(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e}
function panel(){
 var r=$("#cpReaderPage"),scroll=r&&r.querySelector(".cp-page-scroll");if(!scroll||$("#cprLibrary"))return false;
 var p=make("section","cpr-root");p.id="cprLibrary";
 p.innerHTML='<div class="cpr-tiles"><button class="cpr-tile cpr-blue" data-cat="normal"><span>📖</span><strong>通常の音読教材</strong><small>ニュース・スピーチ・エッセイ</small></button><a class="cpr-tile cpr-teal" href="./story-theater.html"><span>🎬</span><strong>Story Theater</strong><small>物語を楽しみながら音読</small></a><button class="cpr-tile cpr-gold" data-cat="quest"><span>🏆</span><strong>Copeak Quest</strong><small>チャレンジで音読力を伸ばす</small></button></div><div class="cpr-main"><section class="cpr-box cpr-folders"><header><h3>📁 フォルダ <small id="cprFolderCount"></small></h3><button id="cprAddFolder" type="button">＋ 作成</button></header><div id="cprFolderRows" class="cpr-scroll"></div></section><section class="cpr-box cpr-lessons"><header><h3>▤ 教材一覧 <small id="cprLessonCount"></small></h3><input id="cprSearch" type="search" placeholder="教材を検索"><select id="cprSort"><option value="new">新しい順</option><option value="popular">よく読んだ順</option><option value="name">タイトル順</option><option value="grade">学年順（やさしい順）</option><option value="cert">英語レベル順（やさしい順）</option></select></header><div class="cpr-filter-panel" aria-label="教材を分類して探す"><div class="cpr-source-tabs" role="group" aria-label="教材の種類"><button type="button" data-cpr-source="all" aria-pressed="true">すべて</button><button type="button" data-cpr-source="sample" aria-pressed="false">サンプル</button><button type="button" data-cpr-source="original" aria-pressed="false">Copeakオリジナル</button><button type="button" data-cpr-source="personal" aria-pressed="false">自作教材</button><button type="button" data-cpr-source="classroom" aria-pressed="false">Classroom</button></div><div class="cpr-level-selects"><label>学年 <select id="cprGrade"><option value="all">すべて</option><option value="中1">中学1年</option><option value="中2">中学2年</option><option value="中3">中学3年</option><option value="高1">高校1年</option><option value="高2">高校2年</option><option value="高3">高校3年</option></select></label><label>英語レベル <select id="cprCert"><option value="all">すべて</option><option value="5級">5級相当</option><option value="4級">4級相当</option><option value="3級">3級相当</option><option value="準2級">準2級相当</option><option value="準2級プラス">準2級プラス相当</option><option value="2級">2級相当</option><option value="準1級">準1級相当</option><option value="1級">1級相当</option></select></label><label>CEFR <select id="cprCefr"><option value="all">すべて</option><option value="A1">A1</option><option value="A2">A2</option><option value="B1">B1</option><option value="B2">B2</option><option value="C1">C1</option><option value="C2">C2</option></select></label><button type="button" id="cprClearFilters">解除</button></div><p class="cpr-filter-note">※ 登録済みの学年・レベル情報だけを使います。未設定の教材は「すべて」で表示します。</p><div class="cpr-nh-links"><span>New Horizon（別ページ）：</span><a href="./new-horizon-1.html">1年</a><a href="./new-horizon-2.html">2年</a><a href="./new-horizon-3.html">3年</a></div></div><div id="cprLessonRows" class="cpr-scroll"></div></section><aside class="cpr-box cpr-tools"><header><h3>✦ クイックアクセス</h3></header><button data-shortcut="search">⌕　教材を探す</button><button data-shortcut="popular">☆　よく読んだ教材</button><button data-shortcut="new">✧　新着教材</button><button data-shortcut="guide">📖　音読の始め方</button></aside></div><dialog id="cprGuide"><button id="cprClose">×</button><h3>音読の始め方</h3><p>教材を選んだらREADから始めましょう。</p><ol><li>READ：英文を見て読む</li><li>PACED：ペースに合わせる</li><li>VANISH：消える英文を覚える</li><li>SHADOW：音声を追って読む</li></ol></dialog>';
 scroll.prepend(p);r.classList.add("cpr-active");
 var legacy=$("#cpReaderLibrary");if(legacy)legacy.hidden=true;
 var story=$("#cpStoryTheaterEntry");if(story)story.hidden=true;
 var quest=$("#cpReadQuest");if(quest){var qp=quest.closest(".cp-panel");if(qp){qp.id="cprQuestPanel";qp.hidden=true}}
 var guides=$("#cpReadGuides");if(guides&&guides.closest(".cp-panel"))guides.closest(".cp-panel").hidden=true;
 return true;
}
function foldersDraw(){var holder=$("#cprFolderRows");if(!holder)return;holder.replaceChildren();$("#cprFolderCount").textContent="("+(folders.length+2)+")";
 [{id:"__unfiled__",name:"フォルダ未設定",system:true},{id:CLASSROOM_FOLDER_ID,name:"Copeak Classroom",system:true},{id:"all",name:"すべての教材",system:true},...folders].forEach(f=>{
 var row=make("div","cpr-folder"+(selected===String(f.id)?" chosen":""));
 var b=make("button","cpr-folder-open");b.type="button";b.append(make("span","",f.id===CLASSROOM_FOLDER_ID?"🎓":f.id==="__unfiled__"?"📂":f.id==="all"?"📚":"📁"),make("span","cpr-folder-label",f.name),make("small","",count(f.id)+"件"));if(f.id==="__unfiled__")b.title="まだフォルダに分類していない教材";if(f.id===CLASSROOM_FOLDER_ID)b.title="Copeak Classroomから届いた教材を自動表示";b.onclick=()=>{selected=String(f.id);foldersDraw();lessonsDraw()};row.append(b);
 if(!f.system){var more=make("button","cpr-folder-more","⋮");more.title="名前変更・削除";more.onclick=()=>{
 var choice=prompt("1：名前変更　2：削除（中の教材は未整理へ）","1");
 if(choice==="1"&&typeof renameLibraryFolder==="function")renameLibraryFolder({stopPropagation(){}},f.id);
 if(choice==="2"&&typeof deleteLibraryFolder==="function")deleteLibraryFolder({stopPropagation(){}},f.id);
 setTimeout(refresh,350);
 };row.append(more)}holder.append(row);
 });
}
function lessonSet(){var result=all.filter(l=>matchesFolder(l,selected)&&(!taxonomy||taxonomy.matches(l,categoryFilters)));
 if(term.trim())result=result.filter(l=>String(l.title||"").toLocaleLowerCase().includes(term.toLocaleLowerCase()));
 return result.sort((a,b)=>{
  if((sort==="grade"||sort==="cert")&&taxonomy){
    const d=taxonomy.rank(a,sort)-taxonomy.rank(b,sort);
    return Number.isNaN(d)||d===0?String(a.title||"").localeCompare(String(b.title||""),"ja"):d;
  }
  return sort==="popular"?(b.history||[]).length-(a.history||[]).length:sort==="name"?String(a.title||"").localeCompare(String(b.title||""),"ja"):(b.createdAt||0)-(a.createdAt||0);
 });
}
function lessonsDraw(){var holder=$("#cprLessonRows");if(!holder)return;holder.replaceChildren();var rows=lessonSet();$("#cprLessonCount").textContent="("+rows.length+"件)";
 if(!rows.length){holder.append(make("p","cpr-empty","この条件の教材はありません。"));return}
 rows.forEach(l=>{
 var item=make("div","cpr-lesson"),img=make("img","cpr-thumb");img.src=image(l);img.alt="";img.loading="lazy";img.onerror=()=>{img.onerror=null;img.src=fallback};
 var details=make("div","cpr-desc"),title=make("button","cpr-title",l.title||"無題の教材");title.type="button";title.onclick=()=>{if(typeof startCustomLesson==="function")startCustomLesson(l)};
 details.append(title,make("small","",(l.langName||"English")+" · "+(l.history?.length||0)+"回音読"));
 if(taxonomy){
   const badges=make("div","cpr-level-badges");
   badges.append(make("span","cpr-origin-badge",taxonomy.LABELS[taxonomy.source(l)]||"その他"));
   [l.schoolLevel,l.levelLabel,l.cefr].filter(Boolean).forEach(label=>badges.append(make("span","",String(label))));
   if(!l.schoolLevel&&!l.levelLabel&&!l.cefr)badges.append(make("span","cpr-unknown-level","レベル未設定"));
   details.append(badges);
 }
 var fav=make("button","cpr-fav",starred.has(String(l.id))?"★":"☆");fav.type="button";fav.title="お気に入り";fav.onclick=()=>{var id=String(l.id);starred.has(id)?starred.delete(id):starred.add(id);localStorage.setItem("copeak_reader_starred",JSON.stringify([...starred]));fav.textContent=starred.has(id)?"★":"☆"};
 var move=make("button","cpr-move","⋯");move.type="button";move.title=isClassroomLesson(l)?"Classroom配信教材は自動分類されます":"フォルダを移動";move.disabled=isClassroomLesson(l);move.onclick=e=>{if(!isClassroomLesson(l)&&typeof openMoveLessonModal==="function")openMoveLessonModal(e,l.id)};
 var open=make("button","cpr-open","▶");open.type="button";open.title="音読を開始";open.onclick=title.onclick;
 item.append(img,details,fav,move,open);holder.append(item);
 });
}
async function refresh(){if(!$("#cprLibrary"))return;all=await dbRead();folders=folderData();if(selected!=="all"&&selected!=="__unfiled__"&&selected!==CLASSROOM_FOLDER_ID&&!folders.some(f=>String(f.id)===selected))selected="all";foldersDraw();lessonsDraw()}
function init(){if(!panel())return;
 $("#cprAddFolder").onclick=()=>{if(typeof createLibraryFolder==="function")createLibraryFolder();setTimeout(refresh,250)};
 $("#cprSearch").oninput=e=>{term=e.target.value;lessonsDraw()};
 $("#cprSort").onchange=e=>{sort=e.target.value;lessonsDraw()};
 function redrawFilter(){
   document.querySelectorAll("#cprLibrary [data-cpr-source]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.cprSource===categoryFilters.source)));
   lessonsDraw();
 }
 $("#cprLibrary").addEventListener("click",e=>{
   const button=e.target.closest("[data-cpr-source]");
   if(!button)return;
   categoryFilters.source=button.dataset.cprSource;
   selected="all";foldersDraw();redrawFilter();
 });
 [["cprGrade","grade"],["cprCert","cert"],["cprCefr","cefr"]].forEach(([id,key])=>{
   $("#"+id).onchange=e=>{categoryFilters[key]=e.target.value;redrawFilter()};
 });
 $("#cprClearFilters").onclick=()=>{
   categoryFilters={source:"all",grade:"all",cert:"all",cefr:"all"};
   ["cprGrade","cprCert","cprCefr"].forEach(id=>$("#"+id).value="all");
   selected="all";foldersDraw();redrawFilter();
 };
 $("#cprClose").onclick=()=>$("#cprGuide").close();
 $("#cprLibrary").addEventListener("click",e=>{
 var cat=e.target.closest("[data-cat]")?.dataset.cat;if(cat==="normal")$("#cprSearch").focus();
 if(cat==="quest"){var quest=$("#cprQuestPanel");if(quest){var r=$("#cpReaderPage");r.classList.add("cpr-quest-open");$("#cprLibrary").hidden=true;quest.hidden=false;if(!$("#cprQuestBack")){var back=make("button","cpr-quest-back","← 教材ライブラリに戻る");back.id="cprQuestBack";back.type="button";back.onclick=()=>{quest.hidden=true;$("#cprLibrary").hidden=false;r.classList.remove("cpr-quest-open");refresh()};quest.prepend(back)}quest.scrollIntoView({block:"start"})}else location.href="./challenge.html"}
 var action=e.target.closest("[data-shortcut]")?.dataset.shortcut;
 if(action==="search"){selected="all";foldersDraw();lessonsDraw();$("#cprSearch").focus()}
 if(action==="popular"||action==="new"){selected="all";sort=action==="popular"?"popular":"new";$("#cprSort").value=sort;foldersDraw();lessonsDraw()}
 if(action==="guide")$("#cprGuide").showModal();
 });
 var reader=$("#cpReaderPage");new MutationObserver(()=>{if(!reader.hidden)refresh()}).observe(reader,{attributes:true,attributeFilter:["hidden"]});
 window.addEventListener("copeak-storage-ready",refresh);var oldList=$("#savedLessonsList");if(oldList)new MutationObserver(()=>{if(!reader.hidden)refresh()}).observe(oldList,{childList:true});window.CopeakReaderV2={refresh};
 refresh();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>setTimeout(init,150));else setTimeout(init,150);
})();