(function CopeakReader(){
'use strict';
const grade=Number((document.querySelector('.top-date')?.textContent||'').match(/[123]/)?.[0]||0);if(grade!==1&&grade!==3)return;
const color=grade===1?'#168f66':'#4b79c8',root=document.querySelector('.top-right');
const stages=grade===1?{0:[6],1:[12,14,16],2:[20,22,24],3:[32,34,36],4:[44,46,48],5:[62,64,66],6:[72,74,76],7:[82,84,86],8:[92,94,96],9:[104,106,108],10:[114,116,118]}:{0:[6],1:[10,11,12,14],2:[20,21,22,24],3:[32,33,34,36],4:[52,53,54,56],5:[62,63,64,66],6:[78,79,80,82]};
const keys1=`1|12|I am Edward Trout.
2|12|I like Japanese sweets.
3|14|Do you like rugby?
4|14|I do not play rugby.
5|16|Are you an anime fan?
6|16|I am not an anime fan.
7|20|This is Jun. He is in Class 1-1.
7|20|This is Ms. Chen. She is our new teacher.
8|20|Is he on the soccer team?
9|22|I can make gyoza.
10|22|Can you read hiragana?
11|24|This is your pen. That is my pen.
12|24|Is this a bird?
13|32|What is that?
14|32|Who is your favorite character?
15|34|How do you come to school?
16|34|When do you come to school?
17|36|Where is the park? It is near the station.
18|44|How many rabbits do you have?
19|46|What time is it? It is three o'clock.
20|46|What sports do you play?
21|48|Come to the front.
22|48|Be brave.
23|48|Don't worry.
24|62|Fumiya lives in Hawaii.
25|64|Does Fumiya live near a beach?
26|67|Maria does not speak Japanese.
27|72|That is Jun. Do you know him?
28|74|Whose ticket is this? It is mine.
29|77|Which do you speak, English or Japanese?
30|82|I am watching TV now.
31|84|Are you walking around a lake?
31|84|What are people doing? They are taking pictures.
32|87|How interesting!
33|92|She wants to help people in need.
33|92|She tries to do her best.
34|94|What do you want to eat?
35|97|The children look happy.
36|104|I stayed in Canada last winter.
37|106|Did you eat rice cakes?
38|109|I did not buy a good luck charm.
39|114|Were you nervous during the contest?
40|116|I was playing soccer then.
41|119|There is a campground near the lake.`;
const keys3=`1|10|I have watched Japanese anime many times.
1|10|Eddy has never watched Japanese anime.
2|11|Have you ever been to an anime event?
3|13|Anime songs make me happy.
4|15|The story shows me the power of love.
4|15|The story shows me that anything is possible.
10|52|I know where the local shelter is.`;
const allKeys=(grade===1?keys1:keys3).trim().split('\n').map(line=>{const [no,p,...words]=line.split('|');return{no:+no,page:+p,text:words.join('|')}});
const books=grade===3?[{key:'BRW58CDC94D53DD_000822.pdf',from:6,to:129,scan:6}]:[
{key:'BRW58CDC94D53DD_000740.pdf',from:6,to:91,scan:6},
{key:'BRW58CDC94D53DD_000788.pdf',from:90,to:101,scan:1},
{key:'BRW58CDC94D53DD_000795.pdf',from:100,to:151,scan:1},
{key:'BRW58CDC94D53DD_000821.pdf',from:152,to:153,scan:1}
];
const auditedLexicon=window.COPEAK_NH_AUDIT||null;
const fallbackChecked={1:{'1:Part 1':[['call','呼ぶ'],['South Africa','南アフリカ'],['love','大好き'],['Call me ...','〜と呼んで'],['want to','〜したい']]},3:{'1:Part 1':[['fashion','ファッション'],['regional','地域の'],['been','beの過去分詞'],['have never been to','一度も行ったことがない']],'1:Part 2':[['foreigner(s)','外国人'],['ever','今までに'],['have been to','行ったことがある']]}};
const checked=auditedLexicon?Object.fromEntries([1,3].map(g=>[g,Object.fromEntries(Object.entries(auditedLexicon['grade'+g]||{}).map(([section,v])=>[section,v.words.map(w=>[w.en,w.ja,w.type])]))])):fallbackChecked;
const actualText={1:{'1:Part 1':"Hello, everyone. I'm Edward Trout. Call me Eddy. I'm twelve. I'm from South Africa. I like Japanese sweets. I love daifuku and anmitsu. I love matcha, too. I want to join the sado club!"},3:{'1:Part 1':"I have watched Japanese anime many times, so I'm excited to go to an anime museum in Tokyo. I love Japanese food, so I came here to eat many regional dishes. I have never been to a Japanese shrine, so I want to visit some here.",'1:Part 2':"I'm surprised by these results. Japanese pop culture is so popular among foreigners. Right. I like watching anime, too. I sometimes use anime to learn Japanese. Oh, really? Have you ever watched Pokemon? It's my favorite. Yes, I have. I've watched it many times. That's nice to hear! Have you been to an anime event in Japan? No, I haven't. Really? Anime events are so much fun."}};
const dbName='copeak-book-pdf-reader',mem={},localText={};let db=null,overlay=null,part='',pageNo=6,unitNo=1,rec=null,renderId=0,pdfDocs={};
const style=document.createElement('style');style.textContent=`
.nhr-open{border-radius:11px;border:1px solid ${color}66;background:${color}13;color:${color};font-weight:850;padding:8px 12px;cursor:pointer}
.nhr-overlay{position:fixed;inset:0;background:#152b448a;backdrop-filter:blur(7px);z-index:10001;padding:12px;display:grid;place-items:center}
.nhr-shell{background:white;width:min(1230px,100%);height:min(820px,calc(100dvh - 24px));border-radius:22px;display:grid;grid-template-rows:auto minmax(0,1fr);overflow:hidden;box-shadow:0 16px 70px #0d294644}
.nhr-head{display:flex;align-items:center;justify-content:space-between;padding:11px 16px;border-bottom:1px solid #e1e9f1;background:linear-gradient(115deg,${color}19,#fff);gap:8px}
.nhr-head strong{font-size:16px}.nhr-sub{display:block;font-size:11px;color:#7c91a3}
.nhr-btn{border:1px solid #dae5ed;border-radius:10px;background:white;padding:8px 11px;cursor:pointer;font-weight:750;color:#34506a}
.nhr-btn.main{background:${color};color:#fff;border-color:${color}}.nhr-btn:disabled{opacity:.4}
.nhr-grid{display:grid;grid-template-columns:1.15fr .85fr;min-height:0}
.nhr-book{background:#e9eef4;min-height:0;padding:10px;display:flex;flex-direction:column;gap:7px}
.nhr-pdf{background:white;border:1px solid #dde6ee;border-radius:12px;min-height:0;flex:1;display:grid;place-items:center;overflow:hidden;color:#688198}
.nhr-pdf canvas{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain}
.nhr-pager{display:flex;justify-content:space-between;align-items:center}
.nhr-side{padding:12px;overflow:auto;min-height:0;display:flex;flex-direction:column;gap:9px}
.nhr-tabs{display:flex;flex-wrap:wrap;gap:6px}.nhr-tab{border:1px solid #e0e8ef;background:#f6f8fb;border-radius:10px;padding:8px 10px;font-size:12px;font-weight:750;cursor:pointer}
.nhr-tab.sel{background:${color}18;color:${color};border-color:${color}75}
.nhr-card{padding:12px;background:#f9fbfd;border:1px solid #e1e9f1;border-radius:13px}
.nhr-card h3{font-size:14px;margin:0 0 8px}.nhr-text{font-size:16px;line-height:1.8;max-height:140px;overflow:auto;white-space:pre-wrap}
.nhr-note{font-size:11px;color:#667f95;margin:5px 0}
.nhr-row{display:flex;gap:7px;flex-wrap:wrap;margin-top:8px}
.nhr-words{max-height:110px;overflow:auto;display:flex;flex-direction:column;gap:5px}
.nhr-word{padding:7px 9px;background:white;border:1px solid #e4eaf0;border-radius:9px;cursor:pointer;text-align:left}
.nhr-word span{display:block;color:#8193a3;font-size:11px}
.nhr-result{font-size:12px;color:#32634f;background:#e6f4ed;border-radius:9px;padding:8px;white-space:pre-wrap;margin-top:8px}
.nhr-teacher{font-size:11px;color:#637d95}.nhr-teacher textarea{width:100%;min-height:75px;margin-top:7px;border:1px solid #cfdde7;border-radius:8px;padding:8px}
@media(max-width:800px){.nhr-grid{grid-template-columns:1fr;grid-template-rows:48% 52%}.nhr-shell{height:calc(100dvh - 12px);border-radius:12px}.nhr-head{padding:8px}.nhr-side{padding:7px;gap:6px}.nhr-book{padding:6px}.nhr-card{padding:9px}.nhr-text{max-height:100px}}
`;document.head.append(style);
const safe=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const unit=()=>Number(document.querySelector('#units .unit.selected')?.dataset.unit||1);
const sectionNames=(n)=>{let x=stages[n]||[6];return x.map((p,i)=>({label:n===0?'Unit 0':(grade===3?['Part 1','Part 2','Read and Think 1','Read and Think 2'][i]:['Part 1','Part 2','Part 3'][i]),start:p,end:i<x.length-1?x[i+1]-1:p+(grade===3&&i>1?1:1)}))};
const key=()=>`${grade}:${unitNo}:${part}`;
function setResult(s){let node=document.getElementById('nhr-result');if(node)node.textContent=s}
function speak(t){if(!window.speechSynthesis)return setResult('音声合成に対応していません');speechSynthesis.cancel();const x=new SpeechSynthesisUtterance(t);x.lang='en-US';x.rate=.8;speechSynthesis.speak(x)}
async function dbStart(){if(db)return;try{db=await new Promise((yes,no)=>{let x=indexedDB.open(dbName,1);x.onupgradeneeded=()=>{for(let name of ['files','texts','records'])if(!x.result.objectStoreNames.contains(name))x.result.createObjectStore(name)};x.onsuccess=()=>yes(x.result);x.onerror=()=>no(x.error)})}catch(e){console.warn(e)}}
async function get(table,k){if(!db)return null;return new Promise(resolve=>{let q=db.transaction(table).objectStore(table).get(k);q.onsuccess=()=>resolve(q.result);q.onerror=()=>resolve(null)})}
async function put(table,k,value){if(!db)return false;return new Promise(resolve=>{let q=db.transaction(table,'readwrite').objectStore(table).put(value,k);q.onsuccess=()=>resolve(true);q.onerror=()=>resolve(false)})}
function bookFor(p){let a=books.filter(x=>p>=x.from&&p<=x.to);return a.find(x=>mem[x.key])||a.sort((x,y)=>y.from-x.from)[0]||books[0]}
function sourceText(){return localText[key()]||actualText[grade][`${unitNo}:${part}`]||''}
function score(ref,heard){let a=(ref.toLowerCase().match(/[a-z']+/g)||[]),b=(heard.toLowerCase().match(/[a-z']+/g)||[]);if(!a.length)return null;let row=Array(b.length+1).fill(0);for(let i=1;i<=a.length;i++){let next=[0];for(let j=1;j<=b.length;j++)next[j]=a[i-1]===b[j-1]?row[j-1]+1:Math.max(next[j-1],row[j]);row=next}return Math.round(100*row.at(-1)/a.length)}
function repaint(){if(!overlay)return;let ss=sectionNames(unitNo);let current=ss.find(x=>x.label===part)||ss[0];document.getElementById('nhr-location').textContent=`NEW HORIZON ${grade} · Unit ${unitNo} · ${part}`;
document.getElementById('nhr-tabs').innerHTML=ss.map(s=>`<button class="nhr-tab ${s.label===part?'sel':''}" data-to="${safe(s.label)}">${safe(s.label)}</button>`).join('');
document.querySelectorAll('[data-to]').forEach(b=>b.onclick=()=>goPart(b.dataset.to));
let keys=allKeys.filter(k=>k.page>=current.start&&k.page<=current.end);
let words=(checked[grade]||{})[`${unitNo}:${part}`]||[];
const auditSection=auditedLexicon?.['grade'+grade]?.[`${unitNo}:${part}`];
const wordsLabel=document.getElementById('nhr-vocab-count');
if(wordsLabel)wordsLabel.textContent=auditSection?'（新出語 '+words.filter(w=>w[2]!=='phrase').length+'・表現 '+words.filter(w=>w[2]==='phrase').length+' / p.'+auditSection.page+' 照合）':'（未照合）';
let txt=sourceText();document.getElementById('nhr-text').textContent=txt||keys.map(k=>k.text).join(' ')||'本文の文字データは未登録です。左の教科書を見ながら音読できます。';
document.getElementById('nhr-caption').textContent=txt?'文字データが確認できた本文（一部）':'本文の文字データ未登録：音読の自動判定は行いません';
document.getElementById('nhr-words').innerHTML=words.map(([en,jp],i)=>`<button class="nhr-word" data-word="${i}">${safe(en)}<span>${safe(jp)}　🔊再生</span></button>`).join('')||'<p class="nhr-note">このPartの全New Words照合は未完了です。教科書の掲載欄で確認できます。</p>';
document.querySelectorAll('[data-word]').forEach(b=>b.onclick=()=>speak(words[Number(b.dataset.word)][0].replace('...','')));
document.getElementById('nhr-keys').innerHTML=keys.map((k,i)=>`<button class="nhr-word" data-sentence="${i}">${safe(k.text)}<span>Key ${k.no} · p.${k.page}　🔊再生</span></button>`).join('')||'<p class="nhr-note">照合済みのKey Sentenceは未登録です。</p>';
document.querySelectorAll('[data-sentence]').forEach(b=>b.onclick=()=>speak(keys[Number(b.dataset.sentence)].text));
document.getElementById('nhr-teacher-text').value=localText[key()]||'';
setResult(txt?'音読を開始すると、音声認識による単語一致率を表示します。':'PDFを見ながら音読練習できます。自動採点は行いません。');showPage()}
function goPart(next){part=next;pageNo=sectionNames(unitNo).find(x=>x.label===next)?.start||6;repaint()}
async function showPage(){if(!overlay)return;let id=++renderId;document.getElementById('nhr-page').textContent=`p.${pageNo}`;let b=bookFor(pageNo),node=document.getElementById('nhr-pdf');if(!mem[b.key]){node.innerHTML='<div style="text-align:center;padding:16px"><b>📂 教科書PDFを読み込んでください</b><p>端末内に保存し、該当ページを表示します。</p></div>';return}
node.textContent='PDFを表示しています…';
try{
if(!window.pdfjsLib){if(!window.__copeakPdfPromise){window.__copeakPdfPromise=new Promise((resolve,reject)=>{let s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';s.onload=resolve;s.onerror=reject;document.head.append(s)})}await window.__copeakPdfPromise}
pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
if(!pdfDocs[b.key])pdfDocs[b.key]=await pdfjsLib.getDocument({data:mem[b.key].slice(0)}).promise;
let p=await pdfDocs[b.key].getPage(b.scan+Math.floor((pageNo-b.from)/2)),view=p.getViewport({scale:2,rotation:90});
let cv=document.createElement('canvas');cv.width=Math.ceil(view.width);cv.height=Math.ceil(view.height);await p.render({canvasContext:cv.getContext('2d'),viewport:view}).promise;if(id!==renderId)return;
let half=cv.width/2,dst=document.createElement('canvas');dst.width=Math.ceil(half);dst.height=cv.height;dst.getContext('2d').drawImage(cv,(pageNo-b.from)%2?half:0,0,half,cv.height,0,0,dst.width,dst.height);node.replaceChildren(dst);
}catch(e){node.textContent='PDFの表示に失敗しました。通信環境を確認してください。';console.warn(e)}
}
async function importPdfs(files){for(let f of files){let b=books.find(x=>x.key===f.name)||bookFor(pageNo);mem[b.key]=await f.arrayBuffer();await put('files',`${grade}:${b.key}`,mem[b.key])}setResult('教科書PDFを端末に保存しました。サーバーには送信していません。');showPage()}
async function record(){let SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){setResult('このブラウザでは音声認識を利用できません');return}try{rec?.stop()}catch(e){}rec=new SR();rec.lang='en-US';rec.continuous=true;rec.interimResults=true;let transcript='';rec.onresult=e=>{transcript=Array.from(e.results).map(v=>v[0].transcript).join(' ');setResult('認識中：'+transcript.slice(-250))};
rec.onend=async()=>{document.getElementById('nhr-rec').disabled=false;document.getElementById('nhr-stop').disabled=true;let ref=sourceText(),pct=ref?score(ref,transcript):null;await put('records',key(),{last:new Date().toISOString(),transcript,accuracy:pct,referenceAvailable:!!ref});setResult(pct===null?'音読を記録しました。全文未照合のため採点なし。':`単語一致率 ${pct}%（発音の総合評価ではありません）\n認識：${transcript}`)};rec.onerror=e=>setResult('音声認識エラー：'+e.error);document.getElementById('nhr-rec').disabled=true;document.getElementById('nhr-stop').disabled=false;try{rec.start()}catch(e){setResult('録音開始に失敗しました')}}
async function show(){unitNo=unit();part=sectionNames(unitNo)[0].label;pageNo=sectionNames(unitNo)[0].start;await dbStart();for(let b of books){if(!mem[b.key])mem[b.key]=await get('files',`${grade}:${b.key}`)}
overlay=document.createElement('div');overlay.className='nhr-overlay';overlay.innerHTML=`<div class="nhr-shell" role="dialog" aria-modal="true" aria-label="教科書本文・音読"><header class="nhr-head"><div><strong>📖 教科書本文・音読</strong><small class="nhr-sub" id="nhr-location"></small></div><div><button class="nhr-btn" id="nhr-upload">📂 PDF読込</button><input type="file" accept=".pdf" multiple id="nhr-files" hidden><button class="nhr-btn" id="nhr-close">×</button></div></header><div class="nhr-grid"><div class="nhr-book"><div class="nhr-pdf" id="nhr-pdf"></div><div class="nhr-pager"><button class="nhr-btn" id="nhr-prev">← 前</button><strong id="nhr-page"></strong><button class="nhr-btn" id="nhr-next">次 →</button></div></div><div class="nhr-side"><div class="nhr-tabs" id="nhr-tabs"></div><article class="nhr-card"><h3>🎤 本文音読</h3><p class="nhr-note" id="nhr-caption"></p><div id="nhr-text" class="nhr-text"></div><div class="nhr-row"><button class="nhr-btn" id="nhr-listen">🔊 お手本</button><button class="nhr-btn main" id="nhr-rec">🎙️ 音読</button><button class="nhr-btn" id="nhr-stop" disabled>■ 判定</button></div><div class="nhr-result" role="status" id="nhr-result"></div></article><article class="nhr-card"><h3>📚 New Words <small id="nhr-vocab-count"></small></h3><div class="nhr-words" id="nhr-words"></div></article><article class="nhr-card"><h3>🔑 Key Sentences</h3><div class="nhr-words" id="nhr-keys"></div><details class="nhr-teacher"><summary>先生用：本文の文字データを登録</summary><textarea id="nhr-teacher-text" placeholder="このPartの本文を貼り付け"></textarea><button class="nhr-btn" id="nhr-save">保存</button></details></article></div></div></div>`;
document.body.append(overlay);const close=()=>{try{rec?.stop()}catch(e){}speechSynthesis?.cancel();overlay.remove();overlay=null};overlay.querySelector('#nhr-close').onclick=close;overlay.addEventListener('click',e=>{if(e.target===overlay)close()});
document.getElementById('nhr-upload').onclick=()=>document.getElementById('nhr-files').click();document.getElementById('nhr-files').onchange=e=>importPdfs(e.target.files);
document.getElementById('nhr-prev').onclick=()=>{pageNo=Math.max(6,pageNo-1);showPage()};document.getElementById('nhr-next').onclick=()=>{pageNo++;showPage()};
document.getElementById('nhr-rec').onclick=record;document.getElementById('nhr-stop').onclick=()=>rec?.stop();
document.getElementById('nhr-listen').onclick=()=>{let t=sourceText()||document.getElementById('nhr-text').textContent;if(t&&!t.includes('未登録'))speak(t)};
document.getElementById('nhr-save').onclick=async()=>{let t=document.getElementById('nhr-teacher-text').value.trim();localText[key()]=t;await put('texts',key(),t);repaint();setResult('この端末に本文文字データを保存しました。')};
for(let s of sectionNames(unitNo)){let t=await get('texts',`${grade}:${unitNo}:${s.label}`);if(t)localText[`${grade}:${unitNo}:${s.label}`]=t}
repaint()}
let start=document.createElement('button');start.type='button';start.className='nhr-open';start.textContent='📖 本文・音読';start.onclick=show;if(root)root.insertBefore(start,root.firstChild);
})();