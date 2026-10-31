/*
 * Copeak Vocabulary Read-Aloud v8.3.
 * Copeak speech.js uses ordered LCS word matching for Accuracy.
 * This isolated helper follows the same scoring principle without importing
 * its lesson-level microphone, UI, or Classroom state.
 * The percentage reflects recognized-word agreement, NOT pronunciation quality.
 */
(function(root){
  'use strict';
  const WORD=/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu;
  const expand={
    "i'm":"i am","you're":"you are","we're":"we are","they're":"they are",
    "he's":"he is","she's":"she is","it's":"it is","that's":"that is","there's":"there is",
    "i've":"i have","we've":"we have","you've":"you have","they've":"they have",
    "i'll":"i will","you'll":"you will","we'll":"we will","they'll":"they will",
    "he'll":"he will","she'll":"she will","it'll":"it will",
    "i'd":"i would","you'd":"you would","we'd":"we would","they'd":"they would",
    "don't":"do not","doesn't":"does not","didn't":"did not",
    "can't":"can not","cannot":"can not","won't":"will not",
    "isn't":"is not","aren't":"are not","wasn't":"was not","weren't":"were not",
    "shouldn't":"should not","wouldn't":"would not","couldn't":"could not",
    "hasn't":"has not","haven't":"have not","hadn't":"had not",
    "let's":"let us"
  };
  function words(input){
    const text=String(input||'').normalize('NFKC').replace(/[‘’]/g,"'").toLowerCase();
    const found=Array.from(text.matchAll(WORD),m=>m[0]).slice(0,160);
    const tokens=[],indices=[];
    found.forEach((word,i)=>{
      const split=(expand[word]||word).split(' ');
      for(const part of split){tokens.push(part);indices.push(i)}
    });
    return {original:found,tokens,indices};
  }
  function score(targetText,transcript){
    const t=words(targetText),s=words(transcript);
    const A=s.tokens,B=t.tokens,m=A.length,n=B.length;
    const dp=Array.from({length:m+1},()=>new Uint16Array(n+1));
    for(let i=m-1;i>=0;i--)for(let j=n-1;j>=0;j--){
      dp[i][j]=A[i]===B[j]?dp[i+1][j+1]+1:Math.max(dp[i+1][j],dp[i][j+1]);
    }
    const matched=new Set();
    let i=0,j=0;
    while(i<m&&j<n){
      if(A[i]===B[j]){matched.add(s.indices[i]);i++;j++}
      else if(dp[i+1][j]>=dp[i][j+1])i++;else j++;
    }
    return {
      percent:n?Math.min(100,Math.round(100*dp[0][0]/n)):0,
      matchCount:dp[0][0],targetCount:n,
      transcript:String(transcript||''),
      wordMatches:s.original.map((value,k)=>({value,matched:matched.has(k)}))
    };
  }
  root.CopeakVocabularyReading=Object.freeze({score,words});
})(typeof window!=='undefined'?window:globalThis);
