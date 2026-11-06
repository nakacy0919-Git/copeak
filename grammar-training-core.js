/* Copeak Grammar Training core: pure helpers for browser and tests. */
(function(root,factory){'use strict';const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;if(root)root.CopeakGrammarCore=api;})(typeof window!=='undefined'?window:(typeof globalThis!=='undefined'?globalThis:null),function(){'use strict';
const STAGES=Object.freeze([{step:1,hide:0,threshold:80,label:'全文表示'},{step:2,hide:.25,threshold:90,label:'25%非表示'},{step:3,hide:.5,threshold:90,label:'50%非表示'},{step:4,hide:.75,threshold:95,label:'75%非表示'},{step:5,hide:1,threshold:100,label:'全文を思い出す'}]);
const LETTERS=['A','B','C','D'];
function normalizeQuestion(q){if(!q||typeof q!=='object')return null;const raw=q.options||q.choices;const options=Array.isArray(raw)?raw.slice(0,4):LETTERS.map(k=>raw&&raw[k]);const answer=String(q.answer||q.correct_answer||'').trim().toUpperCase(),answerIndex=LETTERS.indexOf(answer),stem=String(q.stem_en||q.question||'').trim(),sentence=String(q.answer_sentence_en||'').trim();if(!q.id||options.length!==4||options.some(v=>typeof v!=='string'||!v.trim())||answerIndex===-1||!stem||!sentence)return null;return{id:String(q.id),pointId:String(q.point_id||q.unit||''),categoryId:String(q.category_id||''),level:String(q.level||''),instruction:String(q.question_jp||''),stem,options,answerIndex,sentence,japanese:String(q.answer_sentence_jp||''),explanation:String(q.explanation_jp||''),rule:String(q.rule_jp||''),wrong:q.wrong_choice_explanations_jp||{},example:String(q.extra_example_en||''),exampleJa:String(q.extra_example_jp||''),subtopic:String(q.subtopic_jp||'')};}
function groupedQuestions(questions){const grouped=new Map();for(const raw of questions||[]){const q=normalizeQuestion(raw);if(!q)continue;if(!grouped.has(q.pointId))grouped.set(q.pointId,[]);grouped.get(q.pointId).push(q);}return grouped;}
function maskedParts(sentence,step){
 const text=String(sentence||''),stage=STAGES[Math.min(5,Math.max(1,Number(step)||1))-1];
 if(!stage.hide||!text.trim())return [{text,hidden:false}];
 const matches=[...text.matchAll(/[\p{L}\p{N}]+(?:[’'][\p{L}\p{N}]+)*/gu)];
 const count=stage.hide===1?matches.length:Math.max(1,Math.ceil(matches.length*stage.hide));
 const seed=[...text].reduce((h,ch)=>(Math.imul(h^ch.codePointAt(0),16777619)>>>0),2166136261);
 const ranks=matches.map((_,i)=>({i,weight:Math.imul((i+1)^seed,2654435761)>>>0})).sort((a,b)=>a.weight-b.weight||a.i-b.i);
 const hidden=new Set(ranks.slice(0,count).map(x=>x.i)),parts=[];let cursor=0;
 for(let i=0;i<matches.length;i++){
  const m=matches[i];
  if(m.index>cursor)parts.push({text:text.slice(cursor,m.index),hidden:false});
  if(hidden.has(i))parts.push({hidden:true,length:[...m[0]].length});
  else parts.push({text:m[0],hidden:false});
  cursor=m.index+m[0].length;
 }
 if(cursor<text.length)parts.push({text:text.slice(cursor),hidden:false});
 return parts;
}

/* Reading-only emphasis: preserves the original sentence for TTS and Accuracy scoring. */
function focusRanges(sentence,meta={}){
 const text=String(sentence||''),title=String(meta.title||''),hint=String(meta.hint||''),topic=[title,hint,meta.category||''].join(' ');
 if(!text)return [];
 const candidates=[],stop=new Set(['the','and','for','with','from','this','that','these','those','some','such','sentence','example','fact','english','japanese','grammar','a','an','of','in','on','as','to','be','is','are','was','were','do','does','did','s','v','o','c','p','pp']);
 function add(regex,score){
  const rx=new RegExp(regex.source,regex.flags.includes('g')?regex.flags:regex.flags+'g');
  for(const m of text.matchAll(rx))if(m[0].trim()&&m[0].length<=55)candidates.push({start:m.index,end:m.index+m[0].length,score});
 }
 function exact(term,score,allowStop=false){
  const value=String(term||'').trim().replace(/\s+/g,' ');
  if(value.length<2||value.length>48||(!allowStop&&stop.has(value.toLowerCase()))||!/^[A-Za-z][A-Za-z'’ -]*$/.test(value))return;
  add(new RegExp('(?<![A-Za-z])'+value.replace(/\s+/g,'\\s+')+'(?![A-Za-z])','gi'),score);
 }
 function phrases(value,score){
  for(const raw of String(value||'').match(/[A-Za-z][A-Za-z'’-]*(?:\s+[A-Za-z][A-Za-z'’-]*){0,4}/g)||[]){
   const term=raw.trim();
   if(term.length>=3&&!stop.has(term.toLowerCase()))exact(term,score+Math.min(10,term.split(/\s+/).length*2));
  }
 }
 const has=rx=>rx.test(topic);
 for(const target of Array.isArray(meta.focus)?meta.focus:[])exact(target,145);
 phrases(hint,106);
 phrases(title.replace(/^FACT\s*\d+\s*[·:：-]?\s*/i,''),99);
 if(has(/完了|have\s|has\s|had\s|perfect/i))add(/\b(?:will\s+have|have|has|had)(?:\s+not)?\s+(?:been\s+)?[a-z]+(?:\s+[a-z]+ing)?\b/gi,96);
 if(has(/受動|passive/i))add(/\b(?:am|is|are|was|were|be|been|being)(?:\s+\w+)?\s+(?:\w+ed|known|seen|made|given|taken|written|built|found|done|sent|told|bought|left|put|set|read|born)\b/gi,98);
 if(has(/不定詞|infinitive/i))add(/\b(?:not\s+)?to\s+[a-z]+\b/gi,100);
 if(has(/進行|動名詞|現在分詞|分詞|gerund/i))add(/\b(?:am|is|are|was|were|be|been|being)?\s*\b[a-z]+ing\b/gi,94);
 if(has(/関係代名詞|関係副詞|関係詞|複合関係|relative/i))add(/\b(?:who|whom|whose|which|that|where|when|why|whoever|whatever|whichever)\b/gi,93);
 if(has(/疑問詞|間接疑問|wh語/i))add(/\b(?:what|which|who|whom|whose|where|when|why|how|whether)\b/gi,93);
 if(has(/助動詞|must|may|might|should|shall|can|could|would|will|have to|used to|had better/i))add(/\b(?:must|may|might|can|could|should|shall|will|would|ought\s+to|have\s+to|has\s+to|had\s+to|had\s+better|used\s+to)(?:\s+not)?\b/gi,93);
 if(has(/仮定|wish|if only|as if|条件/i))add(/\b(?:if\s+only|as\s+if|i\s+wish|if|wish|would|could|were|had)\b/gi,91);
 if(has(/比較|原級|最上級|比較級|as\s+.*as/i)){
  add(/\bas\s+(?:\w+\s+){1,3}as\b/gi,97);
  add(/\b(?:more|most|less|least|better|best|worse|worst|than)\b|\b[a-z]{3,}(?:er|est)\b/gi,91);
 }
 if(has(/否定|禁止|not|never/i))add(/\b(?:do(?:es)?\s+not|did\s+not|is\s+not|are\s+not|was\s+not|were\s+not|cannot|can't|won't|don't|doesn't|didn't|never|neither|nothing|no\s+longer|not\s+only|not)\b/gi,95);
 if(has(/疑問文|疑問詞|付加疑問/i))add(/\b(?:am|is|are|was|were|do|does|did|can|could|will|would|should|what|who|which|when|where|why|how)\b/gi,85);
 if(has(/接続|従属節|副詞節|conjunction/i))add(/\b(?:as\s+soon\s+as|as\s+long\s+as|even\s+though|so\s+that|in\s+case|because\s+of|because|although|though|unless|whether|whereas|while|until|before|after|when|if|since|that|and|but|or|so)\b/gi,91);
 if(has(/前置詞|前置き|preposition/i)){
  const match=title.match(/\b(about|above|across|after|against|along|among|around|at|before|behind|between|beyond|by|during|for|from|in|into|of|on|over|through|to|toward|under|with|within|without)\s*[:：]/i);
  if(match)exact(match[1],112,true);
  else add(/\b(?:about|above|across|after|against|along|among|around|at|before|behind|between|beyond|by|during|for|from|into|over|through|towards?|under|within|without)\b/gi,62);
 }
 if(has(/be動詞|be\s*\/|be疑問/i))add(/\b(?:am|is|are|was|were|be|been)\b/gi,92);
 if(has(/三人称単数|三単現/i))add(/\b(?:has|does|goes|watches|teaches|studies|plays|likes|works|lives|speaks|reads|takes|makes|gets|needs|wants|knows|seems)\b/gi,91);
 if(has(/過去形|過去の|past/i))add(/\b(?:was|were|did|went|saw|had|took|made|came|gave|bought|knew|wrote|ate|got|said|thought|found|felt|left|lost|slept|told|read|[a-z]{3,}ed)\b/gi,78);
 if(has(/動詞-ing|現在進行|進行形/i))add(/\b(?:am|is|are|was|were)\s+[a-z]+ing\b/gi,102);
 if(has(/名詞|代名詞|所有|冠詞|限定詞/i))add(/\b(?:my|your|his|her|its|our|their|mine|yours|hers|ours|theirs|itself|himself|herself|themselves|this|these|those|each|every|either|neither|both|all|some|any)\b/gi,66);
 if(has(/形容詞|adjective/i))add(/\b[a-z]{4,}(?:ful|less|able|ible|ous|ive|al|ic)\b/gi,72);
 if(has(/副詞|adverb/i))add(/\b[a-z]{3,}ly\b/gi,76);
 if(has(/現在形|一般動詞|習慣|広く・常に|宣言|思考・感情/i)){
  add(/\b(?:play|plays|study|studies|live|lives|speak|speaks|like|likes|walk|walks|eat|eats|work|works|know|knows|have|has|go|goes|take|takes|think|thinks|make|makes|practice|practices|move|moves|freeze|freezes)\b/gi,87);
  add(/\b[a-z]{3,}(?:ies|es|s)\b/gi,56);
 }
 if(has(/三人称単数|三単現/i))add(/\b[a-z]{3,}(?:ies|es|s)\b/gi,63);
 if(has(/主語とは|主語の範囲|無生物主語/i)){
  const subject=text.match(/^(?:(?:The|A|An|My|Our|Her|His|Their|This|That|These|Those)\s+(?:[A-Za-z]+\s+){0,2}[A-Za-z]+|[A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);
  if(subject)candidates.push({start:0,end:subject[0].length,score:77});
 }
 if(has(/形容詞/i))add(/\b(?:quiet|small|big|large|clear|long|short|happy|sad|old|new|wooden|young|green|bright|late|early|beautiful|good|bad|nice|important|interesting|busy|tired|ready|difficult|easy|wrong|right|fast|slow|warm|cold|strong|weak)\b/gi,69);
 if(has(/副詞/i))add(/\b(?:almost|often|always|never|usually|sometimes|already|still|soon|today|yesterday|tomorrow|here|there|now|then|very|too|quite|rather|just|only|perhaps|maybe|fast|hard|well|early|late)\b/gi,77);
 if(has(/名詞.*複数|複数.*名詞|名詞の単数形・複数形/i))add(/\b[a-z]{3,}(?:ies|es|s)\b/gi,62);
 if(has(/動名詞|過去分詞|分詞構文/i))add(/\b(?:frozen|known|seen|made|given|taken|written|built|asked|broken|gone|done|born)\b/gi,81);
 if(has(/付帯状況|with\b/i))add(/\bwith\b/gi,92);
 if(has(/授与|書き換え|to・for/i))add(/\b(?:to|for)\b/gi,77);
 if(/\b(?:as|at|by|for|with|in|of|on|to)\s*[:：]/i.test(title)){
  exact(title.match(/\b(as|at|by|for|with|in|of|on|to)\s*[:：]/i)[1],112,true);
 }
 if(has(/助動詞|否定|禁止|had better|should|could|would|must|may|can|will|shall/i)){
  add(/\b[a-z]+(?:n't|n’t)\b/gi,107);
  add(/\b[a-z]+(?:'d|’d)\s+better\b/gi,108);
 }


 if(has(/第[１２３４５12345]文型|説明型|授与型|他動型|自動型|使役|知覚|命令文|一般動詞|take・cost/i)){
  add(/\b(?:enjoy|enjoys|sent|slept|smells|seems|became|plays|built|need|gave|told|bought|took|takes|cost|costs|call|made|make|keep|saw|heard|knock|jump|close|try|take|help|show|let|have|want|asked|persuaded|allowed|find|found|get|got)\b/gi,73);
 }
 if(has(/使役|知覚|第5文型|目的語説明型/i))add(/\b(?:made|make|let|saw|see|heard|hear|call|keep)\s+(?:[a-z]+\s+){0,2}[a-z]+\b/gi,101);
 if(has(/Let.s|勧誘|誘う/i))add(/\bLet['’]s\b/gi,105);
 if(has(/状態動詞|使える場合・使えない|現在形/i))add(/\b(?:know|knows|own|owns|taste|tastes|seem|seems|believe|believes|have|has|like|likes|love|loves|think|thinks)\b/gi,82);


 if(has(/付加疑問文/i))add(/\b(?:shall\s+we|will\s+you|don't\s+you|isn't\s+it|aren't\s+they|didn't\s+you)\b/gi,117);
 if(has(/挿入|注釈|つなぎ表現/i))add(/\b(?:for\s+example|in\s+fact|by\s+the\s+way|however|therefore|after\s+all)\b/gi,101);
 if(has(/直接話法|間接話法/i))add(/\b(?:said|told|asked|replied|explained|reported)\b/gi,99);
 if(has(/定冠詞the/i))exact('the',110,true);
 if(has(/不定冠詞a・an/i))add(/\b(?:a|an)\b/gi,105);
 if(has(/some：/i))exact('some',112,true);
 if(has(/\bit：|^it：/i))exact('it',108,true);
 if(has(/人々一般/i))add(/\b(?:we|you|they|one|people|others)\b/gi,99);
 if(has(/限定詞なし/i))add(/^[A-Za-z]{3,}\b/g,91);
 if(has(/無冠詞|総称/i))add(/^[A-Za-z]{3,}(?:s|es)\b/g,102);
 if(has(/数量|複数の物が関わる/i))add(/\b(?:spoonfuls|pairs|friends|pieces|glasses|slices|bottles|cups|liters|meters|students)\b/gi,85);
 if(has(/形容詞/i))add(/\b(?:alone|certain|asleep|awake|afraid|alive|well|ill|elderly|former|main|only|present|responsible)\b/gi,88);
 if(has(/時を表す副詞・副詞句|複数の副詞の並べ方/i))add(/\b(?:at|on|in)\s+(?:a\s+)?[A-Za-z]+(?:\s+[A-Za-z]+)?\b/gi,81);
 if(has(/時・場所を表すat|前置詞＋名詞・代名詞/i))add(/\b(?:at|on|in|beside)\b/gi,92);

 // A modifier explicitly described as an adverb is not the S/V/C focus.
 const excluded=new Set();
 if(has(/文型|基本構造/)){
  for(const match of String(meta.explanation||'').matchAll(/([A-Za-z]+)\s+は(?:副詞|修飾語)/g))excluded.add(match[1].toLowerCase());
 }
 phrases(meta.rule,88);
 phrases(meta.explanation,66);
 exact(meta.answer,94,true);
 if(!candidates.length){
  add(/\b(?:have\s+to|used\s+to|be\s+going\s+to|as\s+soon\s+as|look\s+forward\s+to|in\s+spite\s+of|would\s+rather|not\s+only)\b/gi,65);
  add(/\b(?:am|is|are|was|were|have|has|had|do|does|did|can|could|will|would|must|should|may|might|if|when|who|which|that|because|although|than|to\s+[a-z]+|[a-z]{4,}(?:ed|ing))\b/gi,53);
 }
 const relevant=candidates.filter(c=>!excluded.has(text.slice(c.start,c.end).toLowerCase()));
 relevant.sort((a,b)=>b.score-a.score||(b.end-b.start)-(a.end-a.start)||a.start-b.start);
 const chosen=[];
 for(const c of relevant){
  if(chosen.some(x=>c.start<x.end&&x.start<c.end))continue;
  if(chosen.length>=3)break;
  chosen.push(c);
 }
 return chosen.sort((a,b)=>a.start-b.start).map(({start,end})=>({start,end}));
}

function hideWords(sentence,step){return maskedParts(sentence,step).map(part=>part.hidden?'_____':part.text).join('');}
function stageCanAdvance(step,percent){return Number.isFinite(percent)&&percent>=STAGES[Math.min(5,Math.max(1,Number(step)||1))-1].threshold;}
function makeReading(raw){if(!raw)return null;const english=String(raw.english||raw.sentence||'').trim(),japanese=String(raw.japanese||raw.ja||'').trim();if(!english||!japanese||!raw.id)return null;return{id:String(raw.id),sentence:english,japanese,example:'',exampleJa:'',priority:String(raw.priority||'')};}
return Object.freeze({STAGES,LETTERS,normalizeQuestion,groupedQuestions,hideWords,maskedParts,stageCanAdvance,makeReading,focusRanges});});