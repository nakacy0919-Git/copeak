import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const code=fs.readFileSync(new URL('../grammar-practice-engine.js',import.meta.url),'utf8');
const window={};
vm.runInNewContext(code,{window});
const {score,words}=window.CopeakGrammarPractice;

const equivalent=[
 ['I am fifty.','I am 50.'],
 ['I am 15 years old.','I am fifteen years old.'],
 ['There are 50 students.','There are fifty students.'],
 ['My dad is fifty-five.','My dad is 55.'],
 ['I have fifty fifty chances.','I have 50 50 chances.'],
 ['We had a fifty-fifty chance.','We had a 50/50 chance.'],
 ['We need one hundred and five dollars.','We need 105 dollars.'],
 ['It costs a hundred dollars.','It costs 100 dollars.'],
 ['We invited one hundred and twenty students.','We invited 120 students.'],
 ['They spent two thousand and fifty dollars.','They spent 2050 dollars.'],
 ['The city has 1,250 houses.','The city has one thousand two hundred fifty houses.'],
 ['She ran three point five miles.','She ran 3.5 miles.'],
 ['The result was three point one four.','The result was 3.14.'],
 ['It is fifty percent correct.','It is 50% correct.'],
 ['Today is the twenty-first.','Today is the 21st.'],
 ['This is the fiftieth lesson.','This is the 50th lesson.'],
 ['It is the second day.','It is the 2nd day.'],
 ['The year is twenty twenty-six.','The year is 2026.'],
 ['It happened in nineteen ninety-nine.','It happened in 1999.'],
 ['It happened in two thousand twenty-six.','It happened in 2026.'],
 ['I own one car.','I own 1 car.'],
 ['I own zero cars.','I own 0 cars.']
];
for(const [written,transcribed] of equivalent){
 const forward=score(written,transcribed),reverse=score(transcribed,written);
 assert.equal(forward.percent,100,written+' / '+transcribed);
 assert.equal(reverse.percent,100,transcribed+' / '+written);
 assert.equal(forward.errorCount,0,'no artificial number errors');
 assert(forward.wordMatches.every(x=>x.matched),'transcribed numeric words should be marked correct');
}

const nonEquivalent=[
 ['I am fifty.','I am fifteen.'],
 ['I am fifty.','I am 15.'],
 ['I am 50.','I am 15.'],
 ['There are fifty students.','There are forty students.'],
 ['We spent 105 dollars.','We spent 150 dollars.'],
 ['I have one pen.','I have a pen.'],
 ['I have four books.','I have for books.'],
 ['We will go to school.','We will go 2 school.'],
 ['The result was 3.5.','The result was 3.6.'],
 ['This is the first lesson.','This is the 2nd lesson.']
];
for(const [target,spoken] of nonEquivalent){
 assert(score(target,spoken).percent<100,'different meanings must remain incorrect: '+target+' / '+spoken);
}
assert.deepEqual(Array.from(words('Fifty-six and fifteen')),['@number:56','and','@number:15']);
const grouped=score('They counted one hundred and five books.','They counted 105 books.');
assert.equal(grouped.targetCount,4,'one hundred and five counts as one semantic number, not five edits');
assert.equal(grouped.matchCount,4);
const expanded=score('They counted 105 books.','They counted one hundred and five books.');
assert.equal(expanded.wordMatches.length,8,'keep every spoken word visible for highlighting');
assert(expanded.wordMatches.every(w=>w.matched),'correct spoken number words remain highlighted');

// Non-numeric GCC word-error behavior must not change.
function originalReference(target,spoken){
 const norm=s=>s.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9\s]/g,' ').trim().split(/\s+/).filter(Boolean);
 const a=norm(target),b=norm(spoken),n=a.length,m=b.length;
 const dp=Array.from({length:n+1},()=>Array(m+1).fill(0));
 for(let i=0;i<=n;i++)dp[i][0]=i;
 for(let j=0;j<=m;j++)dp[0][j]=j;
 for(let i=1;i<=n;i++)for(let j=1;j<=m;j++)dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
 return n?Math.max(0,Math.min(100,Math.round(100*(1-dp[n][m]/n)))):100;
}
const normal=[
 ['I am a student.','I am a student.'],
 ['I like English.','I like maths.'],
 ['She has been to Japan.','She been to Japan.'],
 ['We practice English every day at school.','We practice English daily at school.'],
 ['If it rains, we will stay at home.','If it rains we stay home.'],
 ['I have a good idea.','I have good idea.']
];
for(const [a,b] of normal)assert.equal(score(a,b).percent,originalReference(a,b));

console.log('PASS grammar number normalization: '+(equivalent.length*2)+' equal number pairs, '+nonEquivalent.length+' distinct meanings, transcript highlighting and unchanged nonnumeric scoring');
