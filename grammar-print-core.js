/* Shared, dependency-free worksheet rendering and real Office Open XML export. */
(function(root){
'use strict';
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const dimensions={A4:[210,297],B4:[257,364]};
function settings(c){
 if(!dimensions[c.paper]||![1,2,3].includes(+c.columns)||![9,10,11,12].includes(+c.fontSize)||!['portrait','landscape'].includes(c.orientation)||!['both','questions','answers'].includes(c.content))throw Error('用紙設定を確認してください。');
 return {...c,columns:+c.columns,fontSize:+c.fontSize,title:String(c.title||'大学入試 英文法演習')};
}
function sample(pool,count,order,random=Math.random){
 if(!Number.isInteger(count)||count<1||count>pool.length)throw Error('問題数は1〜'+pool.length+'の整数で指定してください。');
 const items=[...new Map(pool.map(q=>[q.id,q])).values()];
 if(count>items.length)throw Error('重複を除いた問題数を超えています。');
 if(order==='random'){for(let i=items.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[items[i],items[j]]=[items[j],items[i]];}}
 else items.sort((a,b)=>a.id.localeCompare(b.id,undefined,{numeric:true}));
 return items.slice(0,count);
}
function lines(q,i,answers,c){
 if(!answers)return [`${i+1}. ${q.question_jp||''}`,q.stem_en,...Object.entries(q.options).map(([k,v])=>`${k}. ${v}`),'解答（　　　）'];
 const out=[`${i+1}. 正解 ${q.answer}　[${q.id}]`,q.answer_sentence_en||q.stem_en,q.answer_sentence_jp||'',q.explanation_jp||''];
 if(q.rule_jp)out.push('ポイント：'+q.rule_jp);
 if(c.wrong)for(const [k,v] of Object.entries(q.wrong_choice_explanations_jp||{}))out.push(`${k}：${v}`);
 return out.filter(Boolean);
}
function sections(c){return c.content==='both'?[false,true]:[c.content==='answers'];}
function html(items,config){
 const c=settings(config),size=dimensions[c.paper],w=c.orientation==='landscape'?size[1]:size[0],h=c.orientation==='landscape'?size[0]:size[1];
 const content=sections(c).map(answers=>`<section><h1>${escape(c.title)}${answers?' ― 解答解説':''}</h1><p class="meta">Copeak Study · ${items.length}問 · セット ${escape(c.setId||'')} ${answers?'':'　年　組　番　氏名 ____________________'}</p><div class="questions">${items.map((q,i)=>`<article>${lines(q,i,answers,c).map((s,j)=>`<p${j===0?' class="lead"':''}>${escape(s)}</p>`).join('')}</article>`).join('')}</div></section>`).join('');
 return `<!doctype html><html lang="ja"><head><meta charset="utf-8"><title>${escape(c.title)}</title><style>@page{size:${w}mm ${h}mm;margin:12mm}*{box-sizing:border-box}body{margin:0;color:#000;background:#fff;font-family:Arial,"Yu Gothic","Hiragino Kaku Gothic ProN",sans-serif;font-size:${c.fontSize}pt;line-height:1.5}h1{font-size:15pt;margin:0 0 5mm}.meta{font-size:9pt;border-bottom:1px solid black;padding-bottom:3mm;margin-bottom:5mm}.questions{column-count:${c.columns};column-gap:7mm}article{break-inside:avoid;page-break-inside:avoid;margin-bottom:5mm;overflow-wrap:anywhere}p{margin:0 0 1.4mm;white-space:pre-wrap}.lead{font-weight:bold}section+section{break-before:page;page-break-before:always}@media screen{body{padding:12mm;min-width:0}section{margin-bottom:12mm}section+section{border-top:1px dashed #888;padding-top:10mm}}@media print{body{width:auto}article{max-height:none}}</style></head><body>${content}</body></html>`;
}
// Store-only ZIP with CRC32: DOCX needs no external libraries, network or paid API.
function zip(files){
 const encoder=new TextEncoder(),parts=[],central=[];let offset=0;
 const u16=(v,n,x)=>v.setUint16(n,x,true),u32=(v,n,x)=>v.setUint32(n,x,true);
 for(const [name,text] of Object.entries(files)){
  const n=encoder.encode(name),data=encoder.encode(text);let crc=0xffffffff;
  for(const b of data){crc^=b;for(let k=0;k<8;k++)crc=(crc>>>1)^((crc&1)?0xedb88320:0);}crc=(crc^0xffffffff)>>>0;
  const local=new Uint8Array(30+n.length),v=new DataView(local.buffer);u32(v,0,0x04034b50);u16(v,4,20);u32(v,14,crc);u32(v,18,data.length);u32(v,22,data.length);u16(v,26,n.length);local.set(n,30);parts.push(local,data);
  const entry=new Uint8Array(46+n.length),e=new DataView(entry.buffer);u32(e,0,0x02014b50);u16(e,4,20);u16(e,6,20);u32(e,16,crc);u32(e,20,data.length);u32(e,24,data.length);u16(e,28,n.length);u32(e,42,offset);entry.set(n,46);central.push(entry);offset+=local.length+data.length;
 }
 const length=central.reduce((n,x)=>n+x.length,0),end=new Uint8Array(22),ev=new DataView(end.buffer);u32(ev,0,0x06054b50);u16(ev,8,central.length);u16(ev,10,central.length);u32(ev,12,length);u32(ev,16,offset);
 const result=new Uint8Array(offset+length+22);let at=0;for(const p of [...parts,...central,end]){result.set(p,at);at+=p.length;}return result;
}
function docx(items,config){
 const c=settings(config),[short,long]=dimensions[c.paper],land=c.orientation==='landscape',twip=n=>Math.round(n*1440/25.4);
 const sect=(cols,type='nextPage')=>`<w:sectPr><w:type w:val="${type}"/><w:pgSz w:w="${twip(land?long:short)}" w:h="${twip(land?short:long)}"${land?' w:orient="landscape"':''}/><w:pgMar w:top="680" w:right="680" w:bottom="680" w:left="680" w:header="0" w:footer="0" w:gutter="0"/><w:cols w:num="${cols}" w:space="397"/></w:sectPr>`;
 const para=(text,{bold=false,next=false,size=c.fontSize,section=''}={})=>`<w:p><w:pPr><w:keepLines/>${next?'<w:keepNext/>':''}<w:spacing w:after="60"/>${section}</w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:eastAsia="Yu Gothic"/>${bold?'<w:b/>':''}<w:sz w:val="${size*2}"/><w:szCs w:val="${size*2}"/></w:rPr><w:t xml:space="preserve">${escape(text).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g,'')}</w:t></w:r></w:p>`;
 let body='';
 sections(c).forEach((answers,s)=>{
  // Separate question and answer sections on a new page, preserving columns.
  if(s)body+=para('',{section:sect(c.columns)});
  body+=para(c.title+(answers?' ― 解答解説':''),{bold:true,size:15,next:true});
  body+=para(`Copeak Study · ${items.length}問 · セット ${c.setId||''}`+(answers?'':'　年　組　番　氏名 ____________________'),{size:9,next:true});
  items.forEach((q,i)=>{const ls=lines(q,i,answers,c);ls.forEach((line,j)=>{body+=para(line,{bold:j===0,next:j<ls.length-1});});body+=para('');});
 });
 body+=sect(c.columns);
 return zip({
  '[Content_Types].xml':'<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>',
  '_rels/.rels':'<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>',
  'word/document.xml':`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}</w:body></w:document>`
 });
}
const api={sample,html,docx,settings,lines,zip};if(typeof module!=='undefined')module.exports=api;root.CopeakGrammarPrint=api;
})(typeof window!=='undefined'?window:globalThis);
