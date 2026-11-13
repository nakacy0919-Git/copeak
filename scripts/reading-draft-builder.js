/* Offline manuscript builder for Copeak Study. Draft-only: never deploy.
   All passage sentences, question answers, and specialized lexicon are authored manually.
   Common dictionary entries are added only if the EXACT term occurs in the passage.
*/
'use strict';
const COMMON_GLOSSARY=[
['important','重要な','significant','having a great effect or value'],['people','人々','persons','human beings in a group'],
['different','異なる','unlike','not the same as something else'],['similar','似ている','alike','having features in common'],
['change','変える・変化','alteration','to become or make something different'],['changes','変化','differences','things that become different over time'],
['community','地域社会','local society','people connected by a shared place or interest'],
['students','生徒たち','learners','people receiving education at school'],['student','生徒','learner','a person learning at school'],
['teachers','教師たち','educators','people who teach others'],['teacher','教師','educator','a person who helps others learn'],
['school','学校','educational institution','a place where children or young adults learn'],
['learning','学習','study','the process of gaining knowledge or skills'],
['knowledge','知識','understanding','information gained through learning or experience'],
['research','研究・調査','investigation','careful study to discover new information'],
['study','調べる・学習する','examine','to learn or investigate something carefully'],
['information','情報','facts','facts or details provided about something'],
['explain','説明する','clarify','to make something understandable through words'],
['example','例','illustration','one case used to make an idea clear'],
['however','しかし','nevertheless','used to introduce an opposing idea'],
['therefore','したがって','consequently','used to introduce a logical result'],
['result','結果','outcome','what happens because of an action or event'],
['reason','理由','cause','an explanation for why something happens'],
['reasons','理由','causes','explanations for why things happen'],
['cause','原因・引き起こす','produce','something that makes an event happen'],
['because','なぜなら・〜なので','since','introducing a reason or explanation'],
['possible','可能な・あり得る','potential','able to happen or be true'],
['opportunity','機会','chance','a situation allowing someone to do something'],
['opportunities','機会','chances','situations allowing people to do things'],
['experience','経験','personal knowledge','knowledge gained from living through events'],
['experiences','経験','events lived through','things people have done or lived through'],
['understand','理解する','comprehend','to know what something means'],
['understanding','理解','comprehension','knowledge of meaning and reasons'],
['support','支援・支える','help','assistance that makes something easier'],
['help','助ける','assist','to make a task easier for someone'],
['improve','改善する','make better','to change something for the better'],
['better','より良い','improved','of higher quality than before'],
['problem','問題','difficulty','something that needs attention or a solution'],
['problems','問題','difficulties','situations that need solutions'],
['solution','解決策','answer','a way to solve a difficulty'],
['solutions','解決策','answers','ways to solve difficulties'],
['develop','発展させる','grow','to become more advanced or complete'],
['development','発展・開発','growth','the process of growing or improving'],
['local','地域の','nearby','connected with a particular nearby area'],
['global','世界的な','worldwide','relating to the whole world'],
['society','社会','community','people living together under shared systems'],
['future','未来','time ahead','the period that has not happened yet'],
['past','過去','earlier time','the time before the present'],
['history','歴史','past events','events that took place before the present'],
['culture','文化','way of life','shared beliefs, habits, and activities of a group'],
['language','言語','speech system','a system used by people to communicate'],
['communication','意思疎通','exchange','the act of sharing information and ideas'],
['communicate','意思疎通する','share messages','to exchange information with others'],
['discussion','議論','conversation','a conversation examining ideas'],
['discuss','話し合う','talk about','to exchange ideas about a subject'],
['question','問い・質問','inquiry','something asked to obtain information'],
['questions','問い・質問','inquiries','things asked to obtain information'],
['answer','答え・答える','response','what is given in reply to a question'],
['answers','答え','responses','statements given in reply to questions'],
['decide','決める','choose','to make a choice after considering options'],
['decision','決定','choice','an action of choosing between possibilities'],
['decisions','決定','choices','choices made after considering options'],
['choice','選択','option','an act of selecting from alternatives'],
['choices','選択肢','options','things that can be selected'],
['value','価値','importance','the worth or usefulness of something'],
['valuable','価値ある','worthwhile','important or useful enough to matter'],
['effective','効果的な','successful','producing the intended result'],
['useful','役立つ','helpful','able to serve a practical purpose'],
['practical','実用的な','workable','suitable for real conditions'],
['careful','慎重な','thoughtful','avoiding errors through attention'],
['carefully','慎重に','thoughtfully','with attention to accuracy and detail'],
['evidence','証拠・根拠','supporting facts','information that helps test or support a claim'],
['suggest','示唆する','propose','to put forward an idea or possibility'],
['suggests','示唆する','indicates','offers an idea without complete certainty'],
['might','〜かもしれない','possibly','expressing a possibility rather than certainty'],
['risk','危険・リスク','danger','the chance of harm occurring'],
['risks','危険・リスク','dangers','possible sources of harm or loss'],
['safety','安全','protection','the condition of being protected from harm'],
['healthy','健康な','well','in good condition physically or mentally'],
['health','健康','well-being','the condition of body and mind'],
['environment','環境','surroundings','conditions and things around living beings'],
['environmental','環境の','ecological','relating to nature and surroundings'],
['natural','自然の','from nature','existing without being made by humans'],
['benefit','利益・役立つ','advantage','a positive result or useful effect'],
['benefits','利点','advantages','positive effects or helpful results'],
['limited','限られた','restricted','small in amount or restricted in extent'],
['resources','資源','supplies','materials or means available for use'],
['share','共有する','exchange','to allow others to use or know something'],
['shared','共有された','common','used or held by more than one person'],
['individual','個人の','personal','relating to a single person'],
['individuals','個人','persons','single people rather than whole groups'],
['families','家族','households','groups of related people living together'],
['children','子どもたち','young people','people who have not reached adulthood'],
['adults','大人','grown-ups','people who have reached adulthood'],
['neighbors','近所の人々','nearby residents','people who live close to one another'],
['residents','住民','inhabitants','people who live in a particular area'],
['process','過程','sequence','a series of actions or changes'],
['methods','方法','techniques','ways of doing something'],
['method','方法','technique','a way of doing a particular task'],
['approach','取り組み方','method','a way of dealing with something'],
['approaches','取り組み方','methods','ways of dealing with a problem'],
['compare','比較する','examine together','to examine similarities and differences'],
['difference','違い','distinction','a way in which two things are not alike'],
['differences','違い','distinctions','features that make things unlike each other'],
['responsibility','責任','duty','something someone is expected to do'],
['responsibilities','責任','duties','things people are expected to do'],
['public','公共の','open to all','available to or related to a community'],
['private','私的な','personal','meant for an individual rather than the public'],
['rights','権利','entitlements','freedoms or protections people may claim'],
['respect','尊重する・敬意','consideration','thoughtful treatment of another person'],
['trust','信頼','confidence','belief in the honesty or ability of someone'],
['fair','公正な','just','treating people in a reasonable equal way'],
['rather','むしろ','instead','used to express a preferred alternative'],
['although','〜だが','even though','used to introduce a contrasting fact'],
['nevertheless','それにもかかわらず','however','used to introduce an unexpected contrast'],
['instead','代わりに','alternatively','used to indicate a different choice'],
['finally','最後に','lastly','used to introduce the last step or point'],
['first','最初に','initially','before everything else in a sequence'],
['next','次に','then','following a previous action in a sequence'],
['also','さらに・また','additionally','introducing another fact or action'],
['even','〜でさえ','including','adding emphasis to an unexpected case'],
['simple','単純な','easy','not complicated or hard to understand'],
['complex','複雑な','complicated','consisting of many connected parts'],
['important','重要な','significant','having a great effect or value']
];
function build(d){
 const ps=d.p.map((part,i)=>({id:'p'+(i+1),sentences:part.map(([en,ja])=>({en,ja}))}));
 const full=ps.flatMap(p=>p.sentences.map(s=>s.en)).join(' '),count=full.trim().split(/\s+/).filter(Boolean).length;
 let words=(d.v||[]).map(([term,ja,synonym,definition])=>({term,ja,synonym,definition}));
 const isWord=term=>new RegExp('(^|[^a-z])'+term.replace(/[.*+?^$\{\}()|[\]\\]/g,'\\$&')+'($|[^a-z])','i').test(full);
 words=words.filter(v=>isWord(v.term));
 const had=new Set(words.map(x=>x.term.toLowerCase()));
 for(const [term,ja,synonym,definition] of COMMON_GLOSSARY){if(words.length>=42)break;if(!had.has(term.toLowerCase())&&isWord(term)){words.push({term,ja,synonym,definition});had.add(term.toLowerCase());}}
 const questions=d.q.map(([skill,prompt,options,answer,explanation_ja,paragraph_ids],i)=>({id:'q'+(i+1),skill,prompt,options,answer,explanation_ja,paragraph_ids}));
 const grammar=d.g.map(([paragraph_id,sentence_index,focus,explanation_ja])=>({paragraph_id,sentence_index,focus,explanation_ja}));
 const discourse=d.dis.map(([paragraph_id,expression,role_ja,options])=>({paragraph_id,expression,role_ja}));
 const cloze=d.dis.map(([paragraph_id,expression,role_ja,options])=>({paragraph_id,sentence_index:ps.find(p=>p.id===paragraph_id)?.sentences.findIndex(s=>s.en.includes(expression)),answer:expression,options:options||[expression,'Therefore','For example','In addition'],explanation_ja:role_ja}));
 const paraphrases=d.para.map(([source,rewrite,explanation_ja])=>{const index=full.toLowerCase().indexOf(String(source).toLowerCase());return {source:index>=0?full.slice(index,index+String(source).length):source,rewrite,explanation_ja};});
 const x={id:d.id,category_id:d.id.slice(0,3),title:d.title,title_ja:d.ja,level_id:d.level,word_count:count,original:true,status:'draft',source_links:d.sources.map(([title,url])=>({title,url})),fact_notes:d.notes||['背景となる考え方は添付の資料で確認。本文と練習問題は新規制作。例示した人物・学校・活動は架空の説明用設定。'],paragraphs:ps,questions,vocabulary:words,grammar,discourse,paraphrases,cloze};
 const bands={'eiken-pre2':[250,350],'eiken-2':[350,500],'eiken-pre1':[500,700],'university-mid':[450,650],'university-advanced':[650,900],'university-national':[700,1000]};
 const errors=[];
 const band=bands[x.level_id];
 if(!band||count<band[0]||count>band[1])errors.push('word count '+count+' outside '+(band||'unknown'));
 if(questions.length!==10)errors.push('questions '+questions.length);
 // New passages must function as five-question entrance-style tests, not as
 // ten nearly identical isolated facts.
 const presentSkills=new Set(questions.map(q=>q.skill));
 for(const skill of ['main-idea','detail','inference','purpose','vocabulary-in-context']){
  if(!presentSkills.has(skill))errors.push('missing comprehension skill '+skill);
 }
 if(new Set(questions.map(q=>q.prompt)).size!==questions.length)errors.push('repeated question prompts');
 if(new Set(questions.map(q=>q.answer)).size<4)errors.push('answer positions must use all four choices');
 const evidenceParagraphs=new Set(questions.flatMap(q=>q.paragraph_ids));
 if(evidenceParagraphs.size<Math.min(4,ps.length))errors.push('insufficient paragraph coverage');
 for(const p of ps)if(!questions.some(q=>q.skill!=='main-idea'&&q.paragraph_ids.includes(p.id))){
  errors.push('no focused comprehension evidence in paragraph '+p.id);
 }
 if(words.length<40)errors.push('vocabulary count '+words.length);
 for(const v of words){if(!isWord(v.term))errors.push('word not in passage '+v.term);if(!v.ja||!v.definition||!v.synonym)errors.push('incomplete dictionary entry '+v.term);}
 for(const p of ps)for(const s of p.sentences)if(!s.en||!s.ja)errors.push('empty sentence or translation');
 for(const q of questions){if(q.options.length!==4||new Set(q.options).size!==4||!Number.isInteger(q.answer)||q.answer<0||q.answer>3||!q.explanation_ja)errors.push('invalid question '+q.id);for(const pid of q.paragraph_ids)if(!ps.some(p=>p.id===pid))errors.push('bad evidence '+q.id);}
 for(const g of grammar)if(!ps.find(p=>p.id===g.paragraph_id)?.sentences[g.sentence_index]?.en.includes(g.focus))errors.push('grammar '+g.focus);
 for(const e of discourse)if(!ps.find(p=>p.id===e.paragraph_id)?.sentences.some(s=>s.en.includes(e.expression)))errors.push('discourse '+e.expression);
 for(const c of cloze){if(c.sentence_index===undefined||c.sentence_index<0||!c.options.includes(c.answer)||c.options.length!==4||new Set(c.options).size!==4)errors.push('cloze '+c.answer)}
 for(const t of paraphrases)if(!full.includes(t.source))errors.push('paraphrase '+t.source);
 if(grammar.length<4||discourse.length<4||paraphrases.length<4||cloze.length<4)errors.push('extension counts');
 return {lesson:x,errors};
}
