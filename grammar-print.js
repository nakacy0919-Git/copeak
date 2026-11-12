(function(){
'use strict';
const $=id=>document.getElementById(id),core=window.CopeakGrammarPrint,cache=new Map();
let manifest,banks=[],selected=[],busy=false,ready=false,previewToken=0,currentSetId='';
const checks=id=>[...$(id).querySelectorAll('input:checked')].map(x=>x.value);
function pool(){const cats=new Set(checks('categories')),points=new Set(checks('points'));return banks.filter(b=>cats.has(b.category_id)).flatMap(b=>b.questions).filter(q=>!points.size||points.has(q.point_id));}
function config(){return core.settings({title:$('title').value,paper:$('paper').value,orientation:$('orientation').value,columns:+$('columns').value,fontSize:+$('fontSize').value,content:$('content').value,wrong:$('wrong').checked,setId:currentSetId});}
function status(text){$('status').textContent=text;}
function buttons(){ $('generate').disabled=busy||!manifest; $('pdf').disabled=busy||!ready; $('word').disabled=busy||!ready; }
function invalidate(){selected=[];ready=false;previewToken++;$('preview').srcdoc='';buttons();status('設定を変更しました。「問題を選んでプレビュー」を押してください。');}
function available(){const n=pool().length;$('available').textContent=`出題可能：${n.toLocaleString('ja-JP')}問`;$('count').max=String(n);}
function pointList(){
 const old=new Set(checks('points')),cats=new Set(checks('categories')),map=new Map();
 banks.filter(b=>cats.has(b.category_id)).forEach(b=>b.questions.forEach(q=>map.set(q.point_id,q.subtopic||manifest.point_titles?.[q.point_id]||q.point_id)));
 $('points').replaceChildren(...[...map].map(([id,title])=>checkbox(id,`${id} ${title}`,old.has(id))));available();
}
function checkbox(value,text,checked){const label=document.createElement('label'),input=document.createElement('input');input.type='checkbox';input.value=value;input.checked=checked;label.append(input,document.createTextNode(text));return label;}
async function get(url){if(!cache.has(url))cache.set(url,fetch(url).then(r=>{if(!r.ok)throw Error('問題データの取得に失敗しました。再読み込みしてください。');return r.json();}).catch(e=>{cache.delete(url);throw e;}));return cache.get(url);}
async function init(){
 try{
  manifest=await get('data/grammar/entrance/manifest.json');
  banks=await Promise.all(manifest.categories.map(c=>get(c.url)));
  $('categories').replaceChildren(...manifest.categories.map(c=>checkbox(c.id,`${c.id} ${c.title}（${c.count}問）`,true)));
  $('loading').textContent=`${manifest.categories.length}分野・${banks.reduce((n,b)=>n+b.questions.length,0).toLocaleString('ja-JP')}問を読み込みました。`;
  pointList();buttons();
 }catch(e){manifest=null;$('loading').textContent=e.message;status('読み込めませんでした。ページを再読み込みしてください。');buttons();}
}
$('categories').addEventListener('change',()=>{pointList();invalidate();});
$('points').addEventListener('change',()=>{available();invalidate();});
for(const id of ['all','none'])$(id).addEventListener('click',()=>{$('categories').querySelectorAll('input').forEach(x=>x.checked=id==='all');pointList();invalidate();});
for(const id of ['title','paper','orientation','columns','fontSize','content','wrong'])$(id).addEventListener('input',()=>{
 if(selected.length){ready=false;buttons();refresh();}else invalidate();
});
for(const id of ['count','order'])$(id).addEventListener('input',invalidate);
function refresh(){
 const token=++previewToken;ready=false;buttons();
 const c=config();$('preview').onload=()=>{if(token!==previewToken||!selected.length)return;ready=true;buttons();status(`${selected.length}問 · ${c.paper} ${c.orientation==='portrait'?'縦':'横'} · ${c.columns}段 · セット ${currentSetId}\n同じ問題セットをPDF・Wordで保存できます。`);};
 $('preview').srcdoc=core.html(selected,c);
}
$('settings').addEventListener('submit',event=>{
 event.preventDefault();if(busy)return;busy=true;ready=false;buttons();
 try{const candidates=pool();selected=core.sample(candidates,Number($('count').value),$('order').value);currentSetId=new Date().toISOString().slice(0,10).replaceAll('-','')+'-'+Math.random().toString(36).slice(2,8).toUpperCase();refresh();}
 catch(e){selected=[];$('preview').srcdoc='';status(e.message);}
 finally{busy=false;buttons();}
});
$('pdf').addEventListener('click',()=>{if(!ready)return;try{$('preview').contentWindow.focus();$('preview').contentWindow.print();}catch(e){status('印刷画面を開けませんでした。ブラウザの印刷機能をご利用ください。');}});
$('word').addEventListener('click',()=>{
 if(!ready)return;
 try{const c=config(),bytes=core.docx(selected,c),url=URL.createObjectURL(new Blob([bytes],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'}));const a=document.createElement('a');a.href=url;a.download=(c.title.replace(/[\\/:*?"<>|\u0000-\u001f]/g,'_')||'Copeak')+'_'+currentSetId+'_'+c.content+'.docx';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);}catch(e){status('Wordの生成に失敗しました：'+e.message);}
});
init();
})();
