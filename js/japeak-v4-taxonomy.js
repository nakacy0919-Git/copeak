/* Japeak V4 taxonomy: display-only grouping on top of real lifeMasterData.
   Never modify lesson IDs or the Stage 1–3 scoring/speech pipeline. */
(function (global) {
  'use strict';
  const languages = [
    ['ja','日本語'],['en','English'],['zh-CN','简体中文'],['zh-TW','繁體中文'],
    ['ko','한국어'],['vi','Tiếng Việt'],['tl','Filipino'],['id','Bahasa Indonesia'],
    ['th','ภาษาไทย'],['my','မြန်မာဘာသာ'],['km','ខ្មែរ'],['ne','नेपाली'],
    ['mn','Монгол хэл'],['si','සිංහල'],['bn','বাংলা'],['pt','Português'],
    ['es','Español'],['fr','Français'],['ru','Русский'],['uk','Українська'],
    ['hi','हिन्दी'],['ur','اردو'],['ar','العربية'],['de','Deutsch'],['it','Italiano'],
    ['tr','Türkçe'],['ms','Bahasa Melayu'],['uz','Oʻzbekcha'],['fa','فارسی']
  ].map(([code,name]) => ({code,name}));
  const extraLanguages = languages.slice(20);
  const levels = [
    {id:'all',ja:'すべて',en:'All'},
    {id:'intro',ja:'入門',en:'Starter'},
    {id:'a1',ja:'A1',en:'A1'},
    {id:'a2',ja:'A2',en:'A2'},
    {id:'b1',ja:'B1',en:'B1'},
    {id:'b2',ja:'B2',en:'B2'}
  ];
  const domains = [
    {id:'all',icon:'✨',ja:'すべて',en:'All'},
    {id:'daily',icon:'💬',ja:'日常・あいさつ',en:'Everyday'},
    {id:'shopping',icon:'🛍️',ja:'買い物・食事',en:'Shopping & dining'},
    {id:'work',icon:'💼',ja:'仕事・職場',en:'Work'},
    {id:'health',icon:'🏥',ja:'健康・病院',en:'Health'},
    {id:'community',icon:'🏘️',ja:'地域・手続き',en:'Community'},
    {id:'family',icon:'👪',ja:'家族・子育て',en:'Family'},
    {id:'transport',icon:'🚃',ja:'交通・外出',en:'Transport'},
    {id:'safety',icon:'🆘',ja:'防災・安全',en:'Safety'}
  ];
  function getLevel(scene, groupId) {
    const key=String(scene.catKey||'');
    const matched=key.match(/^(a1|a2|b1|b2)_/i);
    if (matched) return matched[1].toLowerCase();
    const group=String(groupId||'').toLowerCase();
    const level=group.match(/title_(a1|a2|b1|b2)/);
    return level ? level[1] : 'intro';
  }
  function getDomain(scene) {
    const key=String(scene.catKey||'').toLowerCase();
    const label=String(scene.name||'');
    const s=key+' '+label;
    if (/disaster|emergency|accident|safety|safe_|trouble|防災|緊急|事故|安全/.test(s)) return 'safety';
    if (/work|job_|interview|職場|仕事|就職|面接|同僚|休暇/.test(s)) return 'work';
    if (/hospital|pharmacy|illness|health|病院|薬局|健康|病気|予防/.test(s)) return 'health';
    if (/child|parent|birth|school_enrollment|育児|子ども|子育て|出産|保育|入学/.test(s)) return 'family';
    if (/train|destination|transport|directions|commut|movement|電車|交通|移動|道を|場所に|行きたい場所/.test(s)) return 'transport';
    if (/shopping|buy|store|order|restaurant|sale|sell|preferences|買い物|買って|値段|レストラン|注文|お店|売り場/.test(s)) return 'shopping';
    if (/city_office|bank|postcard|association|resident|neighbor|community|moving|find_home|delivery|event|library|internet_phone|役所|銀行|地域|自治会|住民|郵便|引っ越し|図書館|宅配|近所|インターネット/.test(s)) return 'community';
    return 'daily';
  }
  function makeScenes(groups) {
    if (!Array.isArray(groups)) return [];
    const unique=new Map();
    groups.forEach(group => (group.scenes||[]).forEach(scene => {
      if (!scene.catKey || scene.isReady===false) return;
      const level=getLevel(scene,group.labelId);
      const row={key:scene.catKey,name:scene.name,level,domain:getDomain(scene),groupId:group.labelId};
      // Prefer the correctly leveled group over introductory duplicates.
      if(!unique.has(row.key) || (unique.get(row.key).level==='intro'&&level!=='intro')) unique.set(row.key,row);
    }));
    return [...unique.values()];
  }
  global.JapeakV4Taxonomy=Object.freeze({languages,extraLanguages,levels,domains,getLevel,getDomain,makeScenes});
})(window);
