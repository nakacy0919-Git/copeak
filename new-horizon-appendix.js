/* Copeak Study: private, device-only Grade 2 appendix reference viewer.
 * No textbook passages or private Word List data are bundled in this public source.
 */
(function(){
'use strict';
const q=new URLSearchParams(location.search);
if(Number(q.get('grade')||2)!==2)return;
const host=document.querySelector('.foot .actions');
if(!host)return;
const button=document.createElement('button');
button.type='button';
button.className='btn';
button.textContent='📘 資料編';
button.title='読み込んだ個人用JSONの比較・動詞・重要英文・Word Room';
host.append(button);
const css=document.createElement('style');
css.textContent=[
'.nh2-appx-overlay{position:fixed;inset:0;z-index:3200;display:grid;place-items:center;background:#10263d91;padding:10px;backdrop-filter:blur(4px)}',
'.nh2-appx-modal{width:min(1040px,100%);height:min(88dvh,790px);min-height:0;border-radius:17px;background:#fff;box-shadow:0 20px 90px #132c4e66;display:flex;flex-direction:column;overflow:hidden;color:#244258}',
'.nh2-appx-head{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:linear-gradient(100deg,#ffedf7,#f4f4ff);gap:8px}',
'.nh2-appx-head strong{font-size:17px}.nh2-appx-head small{display:block;font-size:10px;color:#7b8ba0}',
'.nh2-appx-head button{background:#fff;border:1px solid #ddd;border-radius:9px;padding:6px 11px;cursor:pointer}',
'.nh2-appx-tabs{display:flex;gap:5px;overflow-x:auto;scrollbar-width:thin;padding:8px 10px;border-bottom:1px solid #e3eaf1}',
'.nh2-appx-tabs button{flex:0 0 auto;border:1px solid #dce5ee;background:#f8fafc;border-radius:8px;padding:7px 10px;font-size:12px;font-weight:750;cursor:pointer;white-space:nowrap}',
'.nh2-appx-tabs button.active{background:#fbe2f1;color:#a13778;border-color:#ecb3d3}',
'.nh2-appx-body{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:8px 11px 15px;display:grid;align-content:start;gap:5px}',
'.nh2-appx-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);align-items:start;border:1px solid #e7edf3;border-radius:8px;padding:8px 10px;gap:7px;font-size:13px}',
'.nh2-appx-row b{overflow-wrap:anywhere}.nh2-appx-row span{color:#607b8e;overflow-wrap:anywhere}',
'.nh2-appx-note{font-size:11px;color:#75889b;padding:5px 4px 10px}',
'.nh2-appx-section{font-size:12px;font-weight:800;color:#945078;background:#f9f2f7;border-radius:7px;padding:7px 9px;margin-top:5px}',
' .nh2-appx-switches{display:flex;gap:5px;overflow-x:auto;padding:2px 0 7px;flex-wrap:nowrap}',
'.nh2-appx-switches button{flex:0 0 auto;border:1px solid #dfe6ed;background:#fff;padding:6px 10px;border-radius:9px;font-weight:750;color:#516d82;cursor:pointer}',
'.nh2-appx-switches button.on{border-color:#dfa0c7;background:#fbeef7;color:#9b3c77}',
'.nh2-appx-line{display:flex;align-items:center;gap:7px;border:1px solid #e7edf3;border-radius:9px;padding:7px 9px;min-height:37px}',
'.nh2-appx-line b{flex:1;overflow-wrap:anywhere;font-size:12px}.nh2-appx-line small{flex:1;color:#657a89;font-size:11px}',
'.nh2-appx-line button{border:1px solid #d6e3ec;background:#f5f9fc;border-radius:8px;padding:5px 9px;cursor:pointer;min-height:30px}',
'.nh2-appx-mcq{padding:12px;border-radius:13px;background:#f7fafc;border:1px solid #dce6ee;display:grid;gap:8px}',
'.nh2-appx-mcq strong{font-size:16px}.nh2-appx-mcq button{min-height:40px;border:1px solid #dce6ee;border-radius:10px;background:#fff;font-weight:750;color:#345;cursor:pointer}',
'.nh2-appx-mcq button.right{background:#e5f6ec;border-color:#5ac189}.nh2-appx-mcq button.wrong{background:#fff2ef;border-color:#eaa9a0}',

'@media(max-width:680px){.nh2-appx-overlay{padding:5px}.nh2-appx-modal{height:calc(100dvh - 10px);border-radius:10px}.nh2-appx-head{padding:7px 9px}.nh2-appx-head strong{font-size:14px}.nh2-appx-tabs{padding:5px}.nh2-appx-tabs button{font-size:11px;padding:6px 7px}.nh2-appx-body{padding:6px}.nh2-appx-row{font-size:12px;padding:6px;grid-template-columns:1fr 1.8fr}}'
].join('\n');
document.head.append(css);
function safe(v){return String(v===undefined||v===null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function readData(){try{const v=JSON.parse(localStorage.getItem('copeak-grade2-appendix-v1')||'null');return v&&typeof v==='object'?v:null}catch(e){return null}}
function row(left,right){return '<div class="nh2-appx-row"><b>'+safe(left)+'</b><span>'+safe(right)+'</span></div>'}
button.onclick=function(){
 const data=readData();
 if(!data){alert('先に「＋教材JSONを読み込む」から改訂版の個人用JSONを取り込んでください。');return}
 const wrap=document.createElement('div');wrap.className='nh2-appx-overlay';wrap.setAttribute('role','dialog');wrap.setAttribute('aria-modal','true');
 wrap.innerHTML='<div class="nh2-appx-modal"><header class="nh2-appx-head"><div><strong>📘 NEW HORIZON 2 · 資料編</strong><small>端末内の教科書照合データ／学習用・校正継続中</small></div><button type="button" id="nh2-close">✕ 閉じる</button></header><nav class="nh2-appx-tabs"></nav><main class="nh2-appx-body"></main></div>';
 document.body.append(wrap);
 const close=()=>wrap.remove();
 wrap.querySelector('#nh2-close').onclick=close;
 wrap.onclick=e=>{if(e.target===wrap)close()};
 const nav=wrap.querySelector('.nh2-appx-tabs'),body=wrap.querySelector('.nh2-appx-body');
 const tabs=[
  ['verbs','🔄 不規則動詞',data.irregular_verbs||[]],
  ['comp','📊 比較',data.comparatives||[]],
  ['keys','🔑 Key',data.key_sentences||[]],
  ['real','💬 Real Life',data.real_life_key_expressions||[]],
  ['room','📚 Word Room',data.word_room_opposites||[]],
  ['unit','🧩 Unit Plus',data.unit_activity_plus||[]],
  ['small','🎧 Small Talk',data.small_talk_prompts||[]],
  ['further','📖 Further Reading',data.further_reading?.comprehension_questions||[]],
  ['func','💬 表現まとめ',data.expression_functions_p134||[]],
  ['sounds','🔤 発音',data.pronunciation?.basic_phonemes||[]]
 ];
 for(const [id,label,records] of tabs){
  const b=document.createElement('button');b.type='button';b.dataset.tab=id;b.textContent=label+' '+records.length;b.onclick=()=>show(id);nav.append(b)
 }
 function show(id){
  nav.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.tab===id));
  const footer='<div class="nh2-appx-note">資料編の掲載内容を復習するための照合一覧です。Word Listの新出語数とは合算しません。長い一覧だけ内部スクロールします。</div>';
  let html='';
  if(id==='verbs')html=(data.irregular_verbs||[]).map(x=>row(x.base,'過去形 '+(x.past||[]).join('/')+'　／　過去分詞 '+(x.past_participle||[]).join('/')+'　／　-ing '+x.ing_form)).join('');
  if(id==='comp')html=(data.comparatives||[]).map(x=>row(x.base+'（'+x.meaning_ja+'）',x.comparative+'　／　'+x.superlative)).join('');
  if(id==='keys')html=(data.key_sentences||[]).map(x=>row('Key '+x.number+' · p.'+x.page,(x.examples||[]).join('　/　'))).join('');
  if(id==='real')html=(data.real_life_key_expressions||[]).map(x=>row('Real Life '+x.number+' · p.'+x.page,x.english)).join('');
  if(id==='room'){
   html='<div class="nh2-appx-section">p.142 反対語（28組）</div>'+(data.word_room_opposites||[]).map(x=>row(x.number+' '+x.word_a,'↔ '+x.word_b)).join('');
   html+='<div class="nh2-appx-section">p.143 前置詞の用法</div>'+(data.word_room_prepositions||[]).map(x=>row(x.preposition+' · '+x.type,x.meaning_ja)).join('');
   html+='<div class="nh2-appx-section">p.144 衣服・持ち物（42項目）</div>'+(data.word_room_clothing||[]).map(x=>row(x.number,x.english)).join('');
  }

  if(id==='unit'){
   const active=Number(body.dataset.selectedUnit||1);
   const entries=data.unit_activity_plus||[];
   const selected=entries.find(x=>Number(x.unit)===active)||entries[0];
   html='<div class="nh2-appx-switches">'+entries.map(x=>'<button type="button" data-appx-unit="'+Number(x.unit)+'" class="'+(Number(x.unit)===active?'on':'')+'">Unit '+Number(x.unit)+'</button>').join('')+'</div>';
   if(selected){
    html+='<div class="nh2-appx-section">Unit '+Number(selected.unit)+' · p.'+Number(selected.page)+' · '+safe(selected.title_ja)+'</div>';
    for(const section of selected.sections||[]){
     html+='<div class="nh2-appx-section">'+safe(section.label)+'</div>';
     for(const it of section.items||[])html+='<div class="nh2-appx-line"><b>'+safe(it.headword)+'</b><small>'+safe(it.meaning_ja)+'</small><button type="button" data-appx-say="'+safe(it.headword)+'" aria-label="単語を聞く">🔊</button></div>';
    }
   }
  }
  if(id==='small'){
   const active=Number(body.dataset.selectedUnit||1);
   const all=data.small_talk_prompts||[];
   html='<div class="nh2-appx-switches">'+Array.from({length:7},(_,i)=>'<button type="button" data-appx-unit="'+(i+1)+'" class="'+(i+1===active?'on':'')+'">Unit '+(i+1)+'</button>').join('')+'</div>';
   const qs=all.filter(x=>Number(x.unit)===active);
   html+='<div class="nh2-appx-section">Unit '+active+' · 8 Questions · p.'+(qs[0]?.page||'—')+'</div>';
   for(const it of qs)html+='<div class="nh2-appx-line"><b>Q'+Number(it.number)+'</b><small>'+safe(it.question)+'</small><button type="button" data-appx-say="'+safe(it.question)+'" aria-label="質問を聞く">🔊</button></div>';
  }
  if(id==='further'){
   const story=data.further_reading||{};
   const scenes=story.scenes_ja||[];
   const questions=story.comprehension_questions||[];
   html='<div class="nh2-appx-section">p.110〜112 · 14場面を日本語で確認（学習用要約）</div>';
   html+=scenes.map(x=>row('場面 '+Number(x.number)+' · p.'+Number(x.page),x.summary_ja)).join('');
   html+='<div class="nh2-appx-section">オリジナル内容理解 10問（本文を読んで答える）</div>';
   for(const q of questions){
    html+='<div class="nh2-appx-mcq" data-mcq="'+safe(q.id)+'"><strong>'+safe(q.question)+'</strong>';
    html+=(q.choices||[]).map((answer,i)=>'<button type="button" data-appx-answer="'+i+'" data-appx-question="'+safe(q.id)+'">'+safe(answer)+'</button>').join('');
    html+='<small role="status" class="nh2-appx-feedback" style="color:#75889b"></small></div>';
   }
  }
  if(id==='func'){
   html='<div class="nh2-appx-section">p.134 · 1・2年 表現のまとめ（機能別）</div>';
   html+=(data.expression_functions_p134||[]).map((x,i)=>row(i+1,x.label_ja)).join('');
  }
  if(id==='sounds'){
   const p=data.pronunciation||{};
   html='<div class="nh2-appx-section">p.150 基本音の例（'+(p.basic_phonemes||[]).length+'）</div>';
   html+=(p.basic_phonemes||[]).map(x=>'<div class="nh2-appx-line"><b>'+safe(x.symbol)+' · '+safe(x.spellings)+'</b><small>'+safe(x.example)+'</small><button type="button" data-appx-say="'+safe(x.example)+'">🔊</button></div>').join('');
   html+='<div class="nh2-appx-section">p.151 文字の読み方の例（'+(p.letter_name_examples||[]).length+'）</div>';
   html+=(p.letter_name_examples||[]).map(x=>row(x.letter,x.example)).join('');
   html+='<div class="nh2-appx-section">p.151 読み方に注意する単語（'+(p.exception_examples||[]).length+'）</div>';
   html+=(p.exception_examples||[]).map(x=>'<div class="nh2-appx-line"><b>'+safe(x.word)+'</b><button type="button" data-appx-say="'+safe(x.word)+'">🔊</button></div>').join('');
  }
  body.innerHTML=html+footer;
  body.dataset.currentTab=id;
  body.querySelectorAll('[data-appx-unit]').forEach(b=>b.onclick=()=>{body.dataset.selectedUnit=b.dataset.appxUnit;show(id)});
  body.querySelectorAll('[data-appx-say]').forEach(b=>b.onclick=()=>{
   try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(b.dataset.appxSay);u.lang='en-US';u.rate=.86;speechSynthesis.speak(u)}catch(e){}
  });
  body.querySelectorAll('[data-appx-answer]').forEach(b=>b.onclick=()=>{
   const q=(data.further_reading?.comprehension_questions||[]).find(x=>x.id===b.dataset.appxQuestion);
   if(!q)return;
   const chosen=Number(b.dataset.appxAnswer);
   const group=b.closest('[data-mcq]');
   if(group?.dataset.answered==='true')return;
   if(group)group.dataset.answered='true';
   b.classList.add(chosen===Number(q.correct)?'right':'wrong');
   const msg=group?.querySelector('.nh2-appx-feedback');
   if(msg)msg.textContent=chosen===Number(q.correct)?'✓ 正解！':'正解：'+String((q.choices||[])[q.correct]||'');
  });
  body.scrollTop=0
 }
 show('verbs')
};
})();