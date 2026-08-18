// ==========================================
// 1. コースデータ (全16コース)
// ==========================================
const courses = {
    "l-r": { id: "l-r", title: "L / R", subtitle: "Light or Right?", labelJa: "LとRの聞き分け", theme: "text-emerald-600", bgTheme: "bg-emerald-50", borderTheme: "border-emerald-200", coachA: "l", coachB: "r",
        pairs: [ {wordA:"light",wordB:"right",ipaA:"/laɪt/",ipaB:"/raɪt/"}, {wordA:"led",wordB:"red",ipaA:"/led/",ipaB:"/red/"}, {wordA:"play",wordB:"pray",ipaA:"/pleɪ/",ipaB:"/preɪ/"}, {wordA:"collect",wordB:"correct",ipaA:"/kəˈlɛkt/",ipaB:"/kəˈrɛkt/"}, {wordA:"fly",wordB:"fry",ipaA:"/flaɪ/",ipaB:"/fraɪ/"} ],
        phrases: [ {text:"a red light",translation:"赤信号",targetWords:["red","light"]} ],
        sentences: [ {text:"Turn right at the red light.",translation:"赤信号を右に曲がってください。",targetWords:["right","red","light"]} ]
    },
    "b-v": { id: "b-v", title: "B / V", subtitle: "Berry or Very?", labelJa: "BとVの聞き分け", theme: "text-blue-600", bgTheme: "bg-blue-50", borderTheme: "border-blue-200", coachA: "b", coachB: "v",
        pairs: [ {wordA:"berry",wordB:"very",ipaA:"/ˈbɛri/",ipaB:"/ˈvɛri/"}, {wordA:"boat",wordB:"vote",ipaA:"/boʊt/",ipaB:"/voʊt/"}, {wordA:"best",wordB:"vest",ipaA:"/bɛst/",ipaB:"/vɛst/"}, {wordA:"bat",wordB:"vat",ipaA:"/bæt/",ipaB:"/væt/"}, {wordA:"ban",wordB:"van",ipaA:"/bæn/",ipaB:"/væn/"} ],
        phrases: [ {text:"the very best",translation:"最高の",targetWords:["very","best"]} ],
        sentences: [ {text:"He has the very best vest.",translation:"彼は最高のベストを持っている。",targetWords:["very","best","vest"]} ]
    },
    "s-sh": { id: "s-sh", title: "S / SH", subtitle: "See or She?", labelJa: "SとSHの聞き分け", theme: "text-indigo-600", bgTheme: "bg-indigo-50", borderTheme: "border-indigo-200", coachA: "s", coachB: "sh",
        pairs: [ {wordA:"see",wordB:"she",ipaA:"/si/",ipaB:"/ʃi/"}, {wordA:"seat",wordB:"sheet",ipaA:"/sit/",ipaB:"/ʃit/"}, {wordA:"sign",wordB:"shine",ipaA:"/saɪn/",ipaB:"/ʃaɪn/"}, {wordA:"save",wordB:"shave",ipaA:"/seɪv/",ipaB:"/ʃeɪv/"}, {wordA:"sip",wordB:"ship",ipaA:"/sɪp/",ipaB:"/ʃɪp/"} ],
        phrases: [ {text:"she can see",translation:"彼女は見える",targetWords:["she","see"]} ],
        sentences: [ {text:"She can see the ship.",translation:"彼女はその船が見える。",targetWords:["she","see","ship"]} ]
    },
    "s-th": { id: "s-th", title: "S / TH", subtitle: "Sink or Think?", labelJa: "Sと無声音TH", theme: "text-teal-600", bgTheme: "bg-teal-50", borderTheme: "border-teal-200", coachA: "s", coachB: "th_s",
        pairs: [ {wordA:"sink",wordB:"think",ipaA:"/sɪŋk/",ipaB:"/θɪŋk/"}, {wordA:"sick",wordB:"thick",ipaA:"/sɪk/",ipaB:"/θɪk/"}, {wordA:"sum",wordB:"thumb",ipaA:"/sʌm/",ipaB:"/θʌm/"}, {wordA:"pass",wordB:"path",ipaA:"/pæs/",ipaB:"/pæθ/"}, {wordA:"mouse",wordB:"mouth",ipaA:"/maʊs/",ipaB:"/maʊθ/"} ],
        phrases: [ {text:"think and sink",translation:"考えて沈む",targetWords:["think","sink"]} ],
        sentences: [ {text:"I think the mouse is sick.",translation:"そのネズミは病気だと思う。",targetWords:["think","mouse","sick"]} ]
    },
    "th-z": { id: "th-z", title: "TH / Z", subtitle: "Breathe or Breeze?", labelJa: "有声音THとZ", theme: "text-teal-700", bgTheme: "bg-teal-50", borderTheme: "border-teal-300", coachA: "th_z", coachB: "z",
        pairs: [ {wordA:"breathe",wordB:"breeze",ipaA:"/brið/",ipaB:"/briz/"}, {wordA:"clothing",wordB:"closing",ipaA:"/ˈkloʊðɪŋ/",ipaB:"/ˈkloʊzɪŋ/"}, {wordA:"teethe",wordB:"tease",ipaA:"/tið/",ipaB:"/tiz/"}, {wordA:"writhe",wordB:"rise",ipaA:"/raɪð/",ipaB:"/raɪz/"}, {wordA:"loathe",wordB:"lows",ipaA:"/loʊð/",ipaB:"/loʊz/"} ],
        phrases: [ {text:"a gentle breeze",translation:"そよ風",targetWords:["gentle","breeze"]} ],
        sentences: [ {text:"Breathe in the gentle breeze.",translation:"優しいそよ風を吸い込んで。",targetWords:["breathe","gentle","breeze"]} ]
    },
    "f-h": { id: "f-h", title: "F / H", subtitle: "Food or Hood?", labelJa: "FとHの聞き分け", theme: "text-amber-600", bgTheme: "bg-amber-50", borderTheme: "border-amber-200", coachA: "f", coachB: "h",
        pairs: [ {wordA:"food",wordB:"hood",ipaA:"/fud/",ipaB:"/hʊd/"}, {wordA:"fairy",wordB:"hairy",ipaA:"/ˈfɛri/",ipaB:"/ˈhɛri/"}, {wordA:"fat",wordB:"hat",ipaA:"/fæt/",ipaB:"/hæt/"}, {wordA:"fan",wordB:"Han",ipaA:"/fæn/",ipaB:"/hæn/"}, {wordA:"fold",wordB:"hold",ipaA:"/foʊld/",ipaB:"/hoʊld/"} ],
        phrases: [ {text:"fast food",translation:"ファーストフード",targetWords:["fast","food"]} ],
        sentences: [ {text:"He holds the fast food.",translation:"彼はファーストフードを持っている。",targetWords:["holds","fast","food"]} ]
    },
    "f-v": { id: "f-v", title: "F / V", subtitle: "Fan or Van?", labelJa: "無声音と有声音(F/V)", theme: "text-rose-500", bgTheme: "bg-rose-50", borderTheme: "border-rose-200", coachA: "f", coachB: "v",
        pairs: [ {wordA:"fan",wordB:"van",ipaA:"/fæn/",ipaB:"/væn/"}, {wordA:"fault",wordB:"vault",ipaA:"/fɔlt/",ipaB:"/vɔlt/"}, {wordA:"safe",wordB:"save",ipaA:"/seɪf/",ipaB:"/seɪv/"}, {wordA:"leaf",wordB:"leave",ipaA:"/lif/",ipaB:"/liv/"}, {wordA:"half",wordB:"halve",ipaA:"/hæf/",ipaB:"/hæv/"} ],
        phrases: [ {text:"a fast van",translation:"速いバン",targetWords:["fast","van"]} ],
        sentences: [ {text:"Leave the fan in the van.",translation:"バンの中に扇風機を置いておいて。",targetWords:["leave","fan","van"]} ]
    },
    "p-f": { id: "p-f", title: "P / F", subtitle: "Pool or Fool?", labelJa: "PとFの聞き分け", theme: "text-pink-600", bgTheme: "bg-pink-50", borderTheme: "border-pink-200", coachA: "p", coachB: "f",
        pairs: [ {wordA:"pool",wordB:"fool",ipaA:"/pul/",ipaB:"/ful/"}, {wordA:"copy",wordB:"coffee",ipaA:"/ˈkɒpi/",ipaB:"/ˈkɔfi/"}, {wordA:"pan",wordB:"fan",ipaA:"/pæn/",ipaB:"/fæn/"}, {wordA:"past",wordB:"fast",ipaA:"/pæst/",ipaB:"/fæst/"}, {wordA:"pill",wordB:"fill",ipaA:"/pɪl/",ipaB:"/fɪl/"} ],
        phrases: [ {text:"free coffee",translation:"無料のコーヒー",targetWords:["free","coffee"]} ],
        sentences: [ {text:"Please fill the cup with coffee.",translation:"カップにコーヒーを入れてください。",targetWords:["please","fill","coffee"]} ]
    },
    "w-v": { id: "w-v", title: "W / V", subtitle: "West or Vest?", labelJa: "WとVの聞き分け", theme: "text-cyan-600", bgTheme: "bg-cyan-50", borderTheme: "border-cyan-200", coachA: "w", coachB: "v",
        pairs: [ {wordA:"west",wordB:"vest",ipaA:"/wɛst/",ipaB:"/vɛst/"}, {wordA:"wet",wordB:"vet",ipaA:"/wɛt/",ipaB:"/vɛt/"}, {wordA:"wine",wordB:"vine",ipaA:"/waɪn/",ipaB:"/vaɪn/"}, {wordA:"worse",wordB:"verse",ipaA:"/wɜrs/",ipaB:"/vɜrs/"}, {wordA:"wheel",wordB:"veal",ipaA:"/wil/",ipaB:"/vil/"} ],
        phrases: [ {text:"a wet vest",translation:"濡れたベスト",targetWords:["wet","vest"]} ],
        sentences: [ {text:"The vet has a wet vest.",translation:"その獣医は濡れたベストを着ている。",targetWords:["vet","wet","vest"]} ]
    },
    "i-ee": { id: "i-ee", title: "I / EE", subtitle: "Hit or Heat?", labelJa: "短いイ・長いイー", theme: "text-fuchsia-600", bgTheme: "bg-fuchsia-50", borderTheme: "border-fuchsia-200", coachA: "i", coachB: "ee",
        pairs: [ {wordA:"hit",wordB:"heat",ipaA:"/hɪt/",ipaB:"/hit/"}, {wordA:"ship",wordB:"sheep",ipaA:"/ʃɪp/",ipaB:"/ʃip/"}, {wordA:"sit",wordB:"seat",ipaA:"/sɪt/",ipaB:"/sit/"}, {wordA:"bit",wordB:"beet",ipaA:"/bɪt/",ipaB:"/bit/"}, {wordA:"dip",wordB:"deep",ipaA:"/dɪp/",ipaB:"/dip/"} ],
        phrases: [ {text:"sit on the seat",translation:"席に座る",targetWords:["sit","seat"]} ],
        sentences: [ {text:"I see a sheep on the ship.",translation:"船の上に羊が見える。",targetWords:["see","sheep","ship"]} ]
    },
    "a-u": { id: "a-u", title: "A / U", subtitle: "Cat or Cut?", labelJa: "アとア（æ / ʌ）", theme: "text-red-600", bgTheme: "bg-red-50", borderTheme: "border-red-200", coachA: "a", coachB: "u",
        pairs: [ {wordA:"cat",wordB:"cut",ipaA:"/kæt/",ipaB:"/kʌt/"}, {wordA:"hat",wordB:"hut",ipaA:"/hæt/",ipaB:"/hʌt/"}, {wordA:"bag",wordB:"bug",ipaA:"/bæɡ/",ipaB:"/bʌɡ/"}, {wordA:"match",wordB:"much",ipaA:"/mætʃ/",ipaB:"/mʌtʃ/"}, {wordA:"cap",wordB:"cup",ipaA:"/kæp/",ipaB:"/kʌp/"} ],
        phrases: [ {text:"a bug in a bag",translation:"バッグの中の虫",targetWords:["bug","bag"]} ],
        sentences: [ {text:"The cat cut the bag.",translation:"猫がカバンを切った。",targetWords:["cat","cut","bag"]} ]
    },
    "e-a": { id: "e-a", title: "E / A", subtitle: "Bed or Bad?", labelJa: "エとア（ɛ / æ）", theme: "text-violet-600", bgTheme: "bg-violet-50", borderTheme: "border-violet-200", coachA: "e", coachB: "a",
        pairs: [ {wordA:"bed",wordB:"bad",ipaA:"/bɛd/",ipaB:"/bæd/"}, {wordA:"men",wordB:"man",ipaA:"/mɛn/",ipaB:"/mæn/"}, {wordA:"said",wordB:"sad",ipaA:"/sɛd/",ipaB:"/sæd/"}, {wordA:"pen",wordB:"pan",ipaA:"/pɛn/",ipaB:"/pæn/"}, {wordA:"head",wordB:"had",ipaA:"/hɛd/",ipaB:"/hæd/"} ],
        phrases: [ {text:"a bad bed",translation:"悪いベッド",targetWords:["bad","bed"]} ],
        sentences: [ {text:"The man had a bad pen.",translation:"その男は悪いペンを持っていた。",targetWords:["man","had","bad","pen"]} ]
    },
    "n-ng": { id: "n-ng", title: "N / NG", subtitle: "Sin or Sing?", labelJa: "鼻音の聞き分け", theme: "text-emerald-600", bgTheme: "bg-emerald-50", borderTheme: "border-emerald-200", coachA: "n", coachB: "ng",
        pairs: [ {wordA:"sin",wordB:"sing",ipaA:"/sɪn/",ipaB:"/sɪŋ/"}, {wordA:"ran",wordB:"rang",ipaA:"/ræn/",ipaB:"/ræŋ/"}, {wordA:"win",wordB:"wing",ipaA:"/wɪn/",ipaB:"/wɪŋ/"}, {wordA:"thin",wordB:"thing",ipaA:"/θɪn/",ipaB:"/θɪŋ/"}, {wordA:"ban",wordB:"bang",ipaA:"/bæn/",ipaB:"/bæŋ/"} ],
        phrases: [ {text:"sing a song",translation:"歌を歌う",targetWords:["sing","song"]} ],
        sentences: [ {text:"I ran to see the king sing.",translation:"王様が歌うのを見るために走った。",targetWords:["ran","king","sing"]} ]
    },
    "u-oo": { id: "u-oo", title: "U / OO", subtitle: "Pull or Pool?", labelJa: "ウとウー（ʊ / uː）", theme: "text-cyan-600", bgTheme: "bg-cyan-50", borderTheme: "border-cyan-200", coachA: "u_short", coachB: "oo",
        pairs: [ {wordA:"pull",wordB:"pool",ipaA:"/pʊl/",ipaB:"/pul/"}, {wordA:"full",wordB:"fool",ipaA:"/fʊl/",ipaB:"/ful/"}, {wordA:"look",wordB:"Luke",ipaA:"/lʊk/",ipaB:"/luk/"}, {wordA:"soot",wordB:"suit",ipaA:"/sʊt/",ipaB:"/sut/"}, {wordA:"stood",wordB:"stewed",ipaA:"/stʊd/",ipaB:"/stud/"} ],
        phrases: [ {text:"a full pool",translation:"満杯のプール",targetWords:["full","pool"]} ],
        sentences: [ {text:"The fool jumped into the full pool.",translation:"その愚か者は満杯のプールに飛び込んだ。",targetWords:["fool","full","pool"]} ]
    },
    "ur-ar": { id: "ur-ar", title: "UR / AR", subtitle: "Hurt or Heart?", labelJa: "こもったアとアー", theme: "text-purple-600", bgTheme: "bg-purple-50", borderTheme: "border-purple-200", coachA: "ur", coachB: "ar",
        pairs: [ {wordA:"hurt",wordB:"heart",ipaA:"/hɜrt/",ipaB:"/hɑrt/"}, {wordA:"firm",wordB:"farm",ipaA:"/fɜrm/",ipaB:"/fɑrm/"}, {wordA:"stir",wordB:"star",ipaA:"/stɜr/",ipaB:"/stɑr/"}, {wordA:"dirt",wordB:"dart",ipaA:"/dɜrt/",ipaB:"/dɑrt/"}, {wordA:"lurk",wordB:"lark",ipaA:"/lɜrk/",ipaB:"/lɑrk/"} ],
        phrases: [ {text:"a firm farm",translation:"堅実な農場",targetWords:["firm","farm"]} ],
        sentences: [ {text:"The farmer has a firm heart.",translation:"その農夫は強い心を持っている。",targetWords:["farmer","firm","heart"]} ]
    },
    "aw-ow": { id: "aw-ow", title: "AW / OW", subtitle: "Bought or Boat?", labelJa: "オーとオウ", theme: "text-orange-600", bgTheme: "bg-orange-50", borderTheme: "border-orange-200", coachA: "aw", coachB: "ow",
        pairs: [ {wordA:"caught",wordB:"coat",ipaA:"/kɔt/",ipaB:"/koʊt/"}, {wordA:"bought",wordB:"boat",ipaA:"/bɔt/",ipaB:"/boʊt/"}, {wordA:"ought",wordB:"oat",ipaA:"/ɔt/",ipaB:"/oʊt/"}, {wordA:"bald",wordB:"bold",ipaA:"/bɔld/",ipaB:"/boʊld/"}, {wordA:"call",wordB:"coal",ipaA:"/kɔl/",ipaB:"/koʊl/"} ],
        phrases: [ {text:"bought a boat",translation:"ボートを買った",targetWords:["bought","boat"]} ],
        sentences: [ {text:"He bought a new boat.",translation:"彼は新しいボートを買った。",targetWords:["bought","new","boat"]} ]
    }
};

// ==========================================
// 2. リッチコーチングデータ (26音素分)
// ==========================================
const coachingData = {
    "l": { 
        symbol: "/l/", title: "舌先をピタッと押し当てる", theme: "emerald",
        howTo: "Lの音は「舌先をどこに置くか」がすべてです。上の前歯のすぐ裏にある膨らみ（歯茎）に、舌先をピタッと押し当ててください。<br>そのままの状態で、舌の『両脇のすき間』から声と息を逃がすように「ウー」と鳴らします。",
        tips: "日本語の「ラ行」は舌が上顎を弾きますが、英語の「L」は前歯の裏に『ずっとくっつけたまま』発音します。弾かずに押し当てるのが最大のポイントです。",
        wordLists: [
            { title: "/l/ の入った単語", desc: "語頭のL（ライトL）は、はっきり明るく聞こえます。", words: ["large", "learn", "less", "letter", "light", "like", "lift", "list", "long", "love", "black", "flag"] },
            { title: "知っておきたい！「ダークL」", desc: "単語の最後や子音の前にくると、こもった「オ」や「ウ」のような響きに変わります。", words: ["cool", "file", "heal", "help", "milk", "people", "pool", "school", "towel", "well"] }
        ]
    },
    "r": { 
        symbol: "/r/", title: "空間を作り、舌を奥に引く", theme: "emerald",
        howTo: "Rの音は、口の中の『空間づくり』がカギになります。唇を「ウ」の形にすぼめて前に突き出し、舌全体を喉の奥へグッと引き込みます。<br>この時、舌先は上を向きますが、口の中のどこにも触れてはいけません。うがいをするような、くぐもった「ゥー」という音が出れば大成功です。",
        tips: "よく「舌を巻く」と勘違いされますが、実際に巻いてしまうと不自然な音になります。『舌を根元から奥に引く』『唇を少し丸める』の2点を守るだけで綺麗なRになります。",
        wordLists: [
            { title: "/r/ の入った単語", desc: "口を丸めて、こもった音を作ることに集中しましょう。", words: ["already", "experience", "favorite", "parents", "period", "read", "red", "rest", "return", "story"] },
            { title: "語尾のRは引きっぱなし！", desc: "直前の母音を発音した後、そのままの口の形で舌を奥に引きます。", words: ["doctor", "door", "remember", "river", "ruler"] }
        ]
    },
    "b": { 
        symbol: "/b/", title: "両くちびるを閉じて、声と一緒にポン！", theme: "blue",
        howTo: "まず、上下のくちびるをぴったり閉じて、口の中に一瞬だけ空気をためます。<br>そのまま喉を震わせて声を出しながら、くちびるをパッと開いて空気を外へ出しましょう。<br>ポイントは「閉じる → ためる → 声を出して開く」の3ステップです。<br>/p/ と口の動きはほぼ同じですが、/b/ は喉を震わせる有声音。喉に手を当てて「b, b, b」と言い、振動を感じられればOKです。",
        tips: "日本語の「ブ」のように、/b/ の後ろへ余分な「ウ」をつけないことが大切です。/b/ は一瞬で終わる音なので、「ブー」ではなく短く「b」と止めます。特に語尾の /b/ はとても軽く、ほとんど聞こえないこともあります。次に子音が続くときも、毎回強く破裂させる必要はありません。なお /v/ との最大の違いは、/b/ は「上下のくちびるを完全に閉じてから開く音」、/v/ は「上の歯と下くちびるの間から空気を流し続ける音」であることです。",
        wordLists: [
            { title: "まずは基本の /b/", desc: "語頭や語中の /b/ を、短くはっきり破裂させて練習しましょう。", words: ["baby", "ball", "beautiful", "big", "book"] },
            { title: "弱くなる /b/ に挑戦", desc: "語尾や次の子音の前では、/b/ を強く「ブ」と言わず、軽く止める感覚を身につけましょう。", words: ["bathtub", "club", "sub", "tab", "robbed"] }
        ]
    },
    "v": { 
        symbol: "/v/", title: "上の歯を下くちびるに軽く当てて、ブーン！", theme: "blue",
        howTo: "下くちびるをほんの少し内側へ入れ、上の前歯を軽く触れさせます。<br>完全に口を閉じず、その小さなすき間から空気を流しながら声を出しましょう。<br>「vvvvv」と音を伸ばせるのが /v/ の特徴です。下くちびるに細かな振動やムズムズする感覚があれば成功です。<br>歯でくちびるを強く噛む必要はありません。「軽く触れる」くらいで、空気の通り道を残しておきましょう。",
        tips: "日本語には /v/ と /b/ のはっきりした区別がないため、very を berry のように発音してしまうことがあります。/b/ は「両くちびるを閉じて、一気に開く」破裂音ですが、/v/ は「上の歯＋下くちびる」で空気をこすりながら続ける音です。迷ったら、音を伸ばしてみましょう。「vvvvv」と伸ばせれば /v/。「bbbbb」のようには伸ばせないので、この違いを体で覚えると聞き分けや発音が一気に安定します。",
        wordLists: [
            { title: "基本の /v/ をマスター", desc: "上の歯と下くちびるの接触を意識しながら、/v/ の摩擦をしっかり感じましょう。", words: ["very", "vet", "view", "visit", "give"] },
            { title: "/b/ にしない練習", desc: "日本人が /b/ に置き換えやすい単語です。「両くちびるを閉じない」ことを意識しましょう。", words: ["available", "observe", "valuable", "verb", "vibrant"] }
        ]
    },
    "s": { 
        symbol: "/s/", title: "歯のすき間から、細く「スーッ」！", theme: "indigo",
        howTo: "上下の歯を近づけて、その間に細い空気の通り道を作ります。<br>舌先は下の前歯のすぐ裏あたりに置き、歯や上あごには強く当てません。<br>そのまま声を出さずに、歯のすき間から「ssss...」と細く長く息を流しましょう。<br>ヘビが「スーッ」と音を立てるイメージです。喉に手を当てても振動しなければOKです。",
        tips: "日本語の「ス」のように、/s/ の後ろへ「ウ」をつけないのが最大のポイントです。「sea」を「スィー」ではなく、最初に純粋な /s/ の空気だけを出してから母音へつなげます。/ʃ/ との違いは口の形です。/s/ は唇を丸めず、歯の近くから鋭く細い息を出します。一方 /ʃ/ は唇を少し前へ出し、もっと広がりのある「シューッ」という音になります。",
        wordLists: [
            { title: "まずは基本の /s/", desc: "唇を丸めず、声を出さずに細い息から単語をスタートさせましょう。", words: ["sea", "sick", "sky", "song", "whisper"] },
            { title: "s と書かなくても /s/", desc: "ss・sc・ce・c など、つづりが違っても /s/ になる単語に慣れましょう。", words: ["blossom", "scene", "dance", "center", "bicycle"] }
        ]
    },
    "sh": { 
        symbol: "/ʃ/", title: "唇を少し前へ出して、静かに「シューッ」！", theme: "indigo",
        howTo: "まず、唇を軽く丸めて少し前へ突き出します。<br>舌先は上の歯にはつけず、舌の前の部分を上あごへ近づけて、空気が通るせまい道を作ります。<br>そのすき間から声を出さずに「shhhh...」と息を流しましょう。<br>誰かに「静かに！」と伝えるときの「シーッ」に近い音ですが、日本語の「シ」よりも母音をつけず、息だけを長く流すのがポイントです。",
        tips: "/s/ と /ʃ/ はどちらも声を出さずに息をこする音ですが、口の形が大きく違います。/s/ は唇を横に近い形にして、歯のすぐ近くから鋭い「スーッ」。/ʃ/ は唇を少し丸めて前へ出し、舌も少し奥にして「シューッ」と柔らかく広い音を作ります。日本語の「シ」のように「イ」の母音を入れないよう、まず /ʃ/ だけを2〜3秒伸ばしてから単語につなげると安定します。",
        wordLists: [
            { title: "語頭の /ʃ/ をマスター", desc: "唇を少し前へ出したまま、息だけの /ʃ/ から母音へなめらかにつなげましょう。", words: ["shade", "shadow", "shake", "share", "shark"] },
            { title: "単語の中や最後の /ʃ/", desc: "語頭だけでなく、単語の途中や最後でも同じ「シューッ」の口の形をキープしましょう。", words: ["brush", "dish", "fish", "wash", "shrimp"] }
        ]
    },
    "th_s": { 
        symbol: "/θ/", title: "舌先を歯にはさんで、声なしで「スーッ」！", theme: "teal",
        howTo: "舌先を上の前歯と下の前歯の間にほんの少しだけ出します。<br>舌を強く噛まず、前歯に軽く触れさせたまま、そのすき間から息だけを「θθθ...」と流しましょう。<br>ポイントは、舌を引っ込めたまま日本語の「ス」にしないことです。<br>喉に手を当てて、振動せずに空気だけが抜けていれば /θ/ になっています。",
        tips: "/θ/ は日本語にないため、three を「スリー」、think を「シンク」のように /s/ で代用しやすい音です。/s/ は舌を歯の後ろに置きますが、/θ/ は舌先が前歯の間から少し見えるのが大きな違いです。また、同じ th でも /ð/ は声を出します。舌の位置はほぼ同じなので、「声なし＝/θ/」「声あり＝/ð/」とセットで覚えましょう。",
        wordLists: [
            { title: "語頭の /θ/ をマスター", desc: "舌先を少し見せた状態から、余分な「ス」や「シ」を入れずに母音へつなげましょう。", words: ["thirteen", "thought", "three", "thunder", "think"] },
            { title: "単語の途中・最後の /θ/", desc: "語中や語尾でも舌を前歯の間へ戻し、息だけを通す感覚を身につけましょう。", words: ["athlete", "birthday", "fifth", "month", "math"] }
        ]
    },
    "th_z": { 
        symbol: "/ð/", title: "舌先を歯にはさんで、声を乗せて「ズーッ」！", theme: "teal",
        howTo: "口の形と舌の位置は /θ/ とほぼ同じです。舌先を前歯の間にほんの少し出し、歯で軽く触れます。<br>そこから息を流しながら、今度は喉を震わせて「ððð...」と声を乗せましょう。<br>舌やあごに力を入れる必要はありません。前歯と舌の小さなすき間を空気が通り、その空気に声が混ざるイメージです。<br>喉に手を当てて振動を感じられればOKです。",
        tips: "/ð/ を日本語の「ザ」「ダ」で代用しないことがポイントです。that を「ザット」と言うと、舌が歯の後ろに隠れてしまいます。/ð/ では舌先を前歯の間に少し出したまま声を出します。/θ/ との違いは喉の振動だけで、口と舌の形はほぼ同じです。特に the・that・they など頻出語で使われるので、弱く発音するときも舌先を歯に軽く触れさせる習慣をつけましょう。",
        wordLists: [
            { title: "よく使う /ð/ の基本単語", desc: "the と同じ「声あり th」の口を作り、舌先を隠さずに発音しましょう。", words: ["that", "their", "there", "they", "those"] },
            { title: "語中の /ð/ に挑戦", desc: "単語の途中でも一瞬だけ舌先を前歯に触れさせ、声を途切れさせずにつなげましょう。", words: ["breathe", "brother", "clothing", "father", "mother"] }
        ]
    },
    "z": { 
        symbol: "/z/", title: "歯のすき間から、声を乗せて「ズーッ」！", theme: "teal",
        howTo: "上下の歯を近づけ、舌先を上の前歯のすぐ後ろあたりに近づけます。ただし、舌を歯に強く押しつけないようにしましょう。<br>その細いすき間から息を流しながら、同時に喉を震わせて「zzzz...」と音を伸ばします。<br>口の形は /s/ とほぼ同じですが、/z/ では必ず声を加えるのがポイントです。<br>喉に手を当てて「zzzz...」と言い、ブルブルと振動を感じられればOKです。",
        tips: "/z/ は日本語の「ズ」と違い、後ろに「ウ」をつけません。「ズー」ではなく、歯の近くで作った摩擦音だけを「zzzz...」と伸ばす感覚です。/s/ との違いはとてもシンプルで、口と舌の位置はほぼ同じ。声なしなら /s/、喉を震わせれば /z/ です。一方 /f/ は上の歯を下くちびるに当てて作るので、音を作る場所そのものが違います。",
        wordLists: [
            { title: "基本の /z/ をマスター", desc: "歯の近くで息をこすりながら、喉の振動を切らさずに発音しましょう。", words: ["size", "zero", "zigzag", "zipper", "zone"] },
            { title: "z と書かなくても /z/", desc: "zz や s のつづりでも /z/ になる単語があります。スペルではなく音に注目しましょう。", words: ["buzz", "puzzle", "choose", "easy", "music"] }
        ]
    },
    "f": { 
        symbol: "/f/", title: "上の歯＋下くちびるで、息を細く「フーッ」！", theme: "amber",
        howTo: "上の前歯の先を、下くちびるの内側にそっと触れさせます。<br>強く噛むのではなく、歯とくちびるの間にほんの少しだけ空気の通り道を残すのがポイントです。<br>そのすき間から、声を出さずに「ffff...」と細く長く息を流しましょう。<br>英語の /f/ は、歯とくちびるがこすれることで生まれる音です。喉に手を当てて振動せず、下くちびる付近に空気を感じられればOKです。",
        tips: "日本語の「フ」は主に両くちびるで作りますが、英語の /f/ は必ず「上の歯＋下くちびる」で作ります。ここが最重要ポイントです。/h/ との違いもはっきりしています。/f/ は口の前で歯とくちびるを使って空気をこすりますが、/h/ は歯やくちびるを使わず、喉の奥から息をそのまま出します。food と hood のような単語では、この口の作り方の違いが意味の違いにつながります。",
        wordLists: [
            { title: "基本の /f/ をマスター", desc: "上の歯を下くちびるに軽く触れさせ、余分な「ウ」をつけずに発音しましょう。", words: ["fat", "favorite", "fly", "after", "before"] },
            { title: "f 以外のつづりにも注目", desc: "ff・ph・gh でも /f/ になることがあります。つづりではなく、同じ口の形で発音しましょう。", words: ["coffee", "different", "photograph", "telephone", "enough"] }
        ]
    },
    "h": { 
        symbol: "/h/", title: "口は自由、喉の奥から息だけ「ハーッ」！", theme: "amber",
        howTo: "/h/ は、舌や歯で何かをせき止める音ではありません。<br>寒い日に手を温めるときのように、喉の奥から「haa...」と息を外へ出すイメージです。<br>最初は母音をつけず、「hhh...」と息だけを出してみましょう。口の形は次に続く母音に合わせて自然に変わります。<br>口の前に手やティッシュを置き、しっかり空気が当たればOKです。喉を締めず、息を前へ送ることを意識しましょう。",
        tips: "日本語の「ハ行」よりも、英語の /h/ は息の存在がはっきりしています。half や hot を発音するときは、最初にしっかり息を出してから母音へつなげましょう。/f/ との違いは、/f/ が「上の歯と下くちびるのすき間」で作る摩擦音なのに対し、/h/ は口の前で何もこすらず、喉の奥から息を直接出す音だということです。また hour・honest・honor のように、h と書いてあっても発音しない単語があるので注意しましょう。",
        wordLists: [
            { title: "息から始める基本の /h/", desc: "単語の最初に息をしっかり出してから、次の母音へなめらかにつなげましょう。", words: ["half", "hand", "happen", "hear", "hot"] },
            { title: "いろいろな位置の h", desc: "語頭だけでなく語中の /h/ にも注目し、息の流れが弱くならないように練習しましょう。", words: ["how", "ahead", "behave", "behind", "perhaps"] }
        ]
    },
    "p": { 
        symbol: "/p/", title: "くちびるを閉じて、息だけを「パッ！」", theme: "pink",
        howTo: "まず上下のくちびるをぴったり閉じて、口の中に一瞬だけ空気をためます。<br>そこから声を出さずに、くちびるをパッと開いて息を一気に前へ飛ばしましょう。<br>大切なのは「閉じる → ためる → 息だけで破裂させる」の3ステップです。<br>口の前にティッシュを置いて発音し、大きく動けばしっかり息が出ています。喉に手を当てても振動しなければOKです。",
        tips: "/p/ と /b/ は、口の形も動きもほぼ同じです。違うのは「声を使うかどうか」だけ。/p/ は喉を震わせずに息だけを強く出し、/b/ は喉を震わせながら発音します。日本語の「プ」のように後ろへ「ウ」をつけず、一瞬の破裂音だけを作るのもポイントです。特に plan や popular では、最初の /p/ の息をしっかり前へ飛ばすと英語らしい発音になります。",
        wordLists: [
            { title: "基本の /p/ をマスター", desc: "くちびるをしっかり閉じてから、声を使わずに空気を一気に飛ばしましょう。", words: ["plan", "popular", "positive", "practice", "important"] },
            { title: "いろいろな位置の /p/", desc: "単語の途中や最後でも、余分な「プ」を足さずに短く破裂させましょう。", words: ["capture", "computer", "develop", "soup", "friendship"] }
        ]
    },
    "w": { 
        symbol: "/w/", title: "くちびるを丸めて前へ出し、一気にほどく！", theme: "cyan",
        howTo: "まず、口笛を吹く直前のように、くちびるを小さく丸めて前へ突き出します。<br>その状態から声を出しながら、次の母音へ向かってすばやくくちびるを開いていきましょう。<br>/w/ は「ウー」と止まって発音する音ではなく、丸めた口から次の音へ一瞬で移動する音です。<br>「w...」を長く伸ばすより、「丸める → すぐ開く」というくちびるの動きを意識すると、自然な /w/ になります。",
        tips: "日本語の「ワ」は、くちびるをあまり丸めなくても発音できますが、英語の /w/ は最初にしっかりくちびるを前へ突き出すことが重要です。例えば we や win を発音するとき、最初に小さな「ウ」の口を作ってから素早く母音へ移ります。また /v/ との違いにも注意しましょう。/w/ は上下のくちびるを丸める音ですが、/v/ は上の歯を下くちびるに当てて摩擦を作る音です。wine と vine のような単語では、この口の形の違いがそのまま音の違いになります。",
        wordLists: [
            { title: "基本の /w/ をマスター", desc: "最初にくちびるをしっかり丸め、そこから次の母音へすばやく移動しましょう。", words: ["we", "well", "win", "wine", "way"] },
            { title: "動く /w/ を身につける", desc: "単語の中でも「丸める → 開く」の動きを意識し、日本語のワ行との差を感じましょう。", words: ["window", "swim", "wake", "watch", "wild"] }
        ]
    },
    "i": { 
        symbol: "/ɪ/", title: "力を抜いて、「イ」と「エ」の間を短く！", theme: "fuchsia",
        howTo: "口や舌に力を入れず、くちびるを軽く横に開きます。<br>日本語の「イ」ほど口を強く横へ引かず、「エ」を言うときに近いリラックスした口を作りましょう。<br>その状態で「イ」と「エ」のちょうど中間のような音を、短く「ɪ」と出します。<br>大切なのは、はっきりした日本語の「イ」にしないこと。少しぼんやりした、力の抜けた短い母音をイメージすると英語らしくなります。",
        tips: "/ɪ/ と /iː/ は、日本人にはどちらも「イ」に聞こえやすいですが、違いは長さだけではありません。/ɪ/ は口をリラックスさせて短く発音し、/iː/ はくちびるをしっかり横へ引いて、明るく長く発音します。ship と sheep、sit と seat のように、この違いだけで意味が変わることもあります。「短い /iː/」ではなく、口の力を抜いた別の音として覚えるのがポイントです。",
        wordLists: [
            { title: "基本の /ɪ/ をマスター", desc: "口を横に引きすぎず、力を抜いた短い「イとエの間」の音を意識しましょう。", words: ["in", "it", "kick", "lip", "ship"] },
            { title: "i 以外でも /ɪ/", desc: "y・u・ui などのつづりでも /ɪ/ になることがあります。スペルではなく音に注目しましょう。", words: ["gym", "symbol", "busy", "build", "guilty"] }
        ]
    },
    "ee": { 
        symbol: "/iː/", title: "口を横にしっかり引いて、明るく長い「イー」！", theme: "fuchsia",
        howTo: "くちびるを左右へしっかり引き、少し歯が見えるくらいの口を作ります。<br>舌の前の部分を高めに保ち、その口の形をキープしたまま「イー」と明るく伸ばしましょう。<br>日本語の「イ」よりも、口角をさらに横へ引くイメージです。<br>音を出している途中で口の形を変えず、「iːーー」とまっすぐ伸ばせればOKです。",
        tips: "/iː/ は単に /ɪ/ を長くした音ではありません。/iː/ はくちびるを強めに横へ引き、舌も高い位置で保つため、音そのものがより明るく鋭く聞こえます。一方 /ɪ/ は口をリラックスさせた短く曖昧な音です。sheep と ship、leave と live のような単語では、この「口の緊張＋音の長さ」の両方が重要です。まず大げさなくらい口を横へ引くと違いをつかみやすくなります。",
        wordLists: [
            { title: "基本の /iː/ をマスター", desc: "口角をしっかり横へ引き、明るい音を少し長めにキープしましょう。", words: ["cheese", "keep", "meet", "see", "sheep"] },
            { title: "ee 以外でも /iː/", desc: "ea・e・ey・ei・ie など、さまざまなつづりで /iː/ が現れます。", words: ["eat", "she", "key", "ceiling", "believe"] }
        ]
    },
    "a": { 
        symbol: "/æ/", title: "口を横に引いて大きく開き、「エ」から「ア」へ！", theme: "red",
        howTo: "まず、くちびるを左右へしっかり引いて「エ」の口を作ります。<br>その形をできるだけ残したまま、あごを下げて口を縦にも大きく開きましょう。<br>すると、日本語の「エ」と「ア」の中間のような /æ/ の音になります。<br>舌は力を抜いて低めに置き、くちびるを丸めないのがポイントです。「エ」と言いながら口だけを大きく開いていく感覚で練習するとつかみやすくなります。",
        tips: "/æ/ を日本語の普通の「ア」にしてしまうと、英語らしい響きが失われます。大切なのは「ア」よりも口を横に広げることです。一方 /ʌ/ は、口を大きく横へ引かず、もっと力を抜いた中央寄りの音です。/æ/ は「横に広げて大きく開く」、/ʌ/ は「リラックスして軽く開く」と覚えると違いが分かりやすくなります。特に cat や hand の /æ/ は、少し大げさなくらい口を開くと上達しやすい音です。",
        wordLists: [
            { title: "基本の /æ/ をマスター", desc: "「エ」の口を横に保ちながら、あごを下げて明るい /æ/ を出しましょう。", words: ["and", "answer", "ant", "ask", "camp"] },
            { title: "単語の中の /æ/", desc: "日本語の「ア」に戻らないよう、口を横に広げた形をキープして発音しましょう。", words: ["gas", "hand", "past", "sand", "understand"] }
        ]
    },
    "u": { 
        symbol: "/ʌ/", title: "力を抜いて口を軽く開き、お腹から短く「アッ」！", theme: "red",
        howTo: "口やくちびるの力を抜き、自然に少しだけ口を開けます。<br>舌もリラックスさせ、口の中の中央あたりに置いたまま、短く「ʌ」と声を出しましょう。<br>日本語の「あ」に近く聞こえますが、口を大きく開いたり、くちびるを横に強く引いたりしません。<br>お腹の奥から短く「アッ」と声を出し、すぐ次の音へ移るイメージです。低く、力の抜けた音を意識すると自然になります。",
        tips: "/ʌ/ はスペルの u だけでなく、ou・o・oo などでも現れるため、文字だけで判断しないことが大切です。/æ/ との違いは口の開き方。/æ/ は口を左右にも上下にも大きく開いて明るい音を作りますが、/ʌ/ は口も舌もリラックスさせて中央で短く発音します。cat の /æ/ と cut の /ʌ/ を交互に言うと、「大きく広げる音」と「力を抜く音」の違いを体で覚えられます。",
        wordLists: [
            { title: "ou でも /ʌ/ になる単語", desc: "ou の文字に引っぱられて「オウ」と読まず、短い /ʌ/ で発音しましょう。", words: ["country", "couple", "cousin", "double", "enough"] },
            { title: "いろいろなスペルの /ʌ/", desc: "u・o・oo など、つづりが違っても同じリラックスした /ʌ/ になる単語です。", words: ["bus", "cup", "come", "mother", "blood"] }
        ]
    },
    "e": { 
        symbol: "/e/", title: "口角を横に引いて、明るく「エ」！", theme: "violet",
        howTo: "日本語の「エ」からスタートしますが、そのままではなく、口角を左右へ少し強めに引きます。<br>軽く笑顔を作るように口を横へ広げ、舌は力を抜いて自然に下あごの中へ収めましょう。<br>その口の形のまま、短くはっきり「e」と声を出します。<br>鏡を見ながら、日本語の「エ」よりも口の横幅が広くなっているか確認すると、英語らしい明るい音を作りやすくなります。",
        tips: "/e/ は簡単そうに見えますが、日本語の「エ」のように口をほとんど動かさないと、音がぼんやりしやすくなります。ポイントは「軽く笑顔になるくらい口角を横へ引く」ことです。また /æ/ と混同しないように注意しましょう。/e/ は口を横へ広げますが、あごはそれほど大きく下げません。一方 /æ/ は横に広げたうえで、さらに口を大きく縦にも開きます。bed の /e/ と bad の /æ/ を交互に言うと違いを感じやすくなります。",
        wordLists: [
            { title: "基本の /e/ をマスター", desc: "口角を軽く横へ引き、日本語の「エ」より明るく短い音を意識しましょう。", words: ["egg", "attention", "bed", "nest", "pepper"] },
            { title: "e 以外でも /e/", desc: "ea や ai のつづりでも /e/ になる単語があります。スペルではなく実際の音に注目しましょう。", words: ["bread", "head", "instead", "weather", "said"] }
        ]
    },
    "n": { 
        symbol: "/n/", title: "舌先を歯ぐきにつけて、鼻から「ンー」！", theme: "emerald",
        howTo: "口を軽く開き、舌先を上の前歯のすぐ後ろにある歯ぐきへしっかりつけます。<br>舌で口から出る空気をせき止めたまま声を出すと、空気は鼻へ抜けて「nnnn...」という音になります。<br>ポイントは、くちびるを閉じないこと。舌先は上に触れていますが、上下のくちびるは離したままです。<br>鼻のあたりに軽い振動を感じながら「nnnn...」と伸ばせれば、/n/ の形ができています。",
        tips: "/n/ は日本語の「ん」に似ていますが、英語では舌先を上の歯ぐきにつける位置をはっきり意識することが大切です。特に /m/ との違いに注意しましょう。/n/ は「口を開けたまま、舌で止める」音ですが、/m/ は「両くちびるを閉じて止める」音です。number などで /n/ を出すときに最初からくちびるを閉じてしまうと /m/ に近づきます。また know や knife のように kn と書いても k を読まず、/n/ から始まる単語があります。",
        wordLists: [
            { title: "基本の /n/ をマスター", desc: "舌先を上の歯ぐきにつけ、口ではなく鼻へ声を抜く感覚を身につけましょう。", words: ["need", "next", "no", "number", "animal"] },
            { title: "いろいろなスペルの /n/", desc: "nn・kn・gn などのつづりでも /n/ が現れます。発音されない文字にも注意しましょう。", words: ["funny", "sunny", "know", "knife", "sign"] }
        ]
    },
    "ng": { 
        symbol: "/ŋ/", title: "舌の奥で止めて、鼻から「ンー」！", theme: "emerald",
        howTo: "口は軽く開いたまま、舌先は下の前歯の裏あたりに置いてリラックスさせます。<br>次に、舌の後ろ側を上あごの奥へ持ち上げて、口へ抜ける空気をそこで止めましょう。<br>その状態で声を出すと、空気が鼻へ抜けて「ŋŋŋ...」という響きになります。<br>ポイントは、舌先ではなく「舌の奥」を使うこと。鼻のあたりに振動を感じられればOKです。語尾の -ng では、最後に余分な「グ」をつけず、そのまま鼻の音で終わりましょう。",
        tips: "/ŋ/ は日本語の「ング」のように聞こえることがありますが、基本の /ŋ/ 自体には /g/ の音はありません。sing を「シング」と最後まで強く /g/ で止めず、舌の奥を上げたまま鼻へ響かせて終わります。また /n/ との違いは、空気を止める場所です。/n/ は舌先を上の歯ぐきにつけますが、/ŋ/ は舌先を下げたまま舌の奥を持ち上げます。なお finger や angry など、ng の後に実際に /g/ を発音する単語もあるので注意しましょう。",
        wordLists: [
            { title: "語尾の /ŋ/ をマスター", desc: "最後に「グ」を足さず、舌の奥を上げたまま鼻へ響かせて終わりましょう。", words: ["bring", "going", "king", "listening", "long"] },
            { title: "/ŋ/ と /ŋg/ の違いに注意", desc: "ng のあとに /g/ が聞こえる単語もあります。舌の奥の動きを意識して聞き分けましょう。", words: ["song", "spring", "strong", "angry", "finger"] }
        ]
    },
    "oo": { 
        symbol: "/uː/", title: "くちびるを丸く前へ出して、深く「ウー」！", theme: "cyan",
        howTo: "まず、くちびるをしっかり丸めて、口笛を吹くときのように前へ突き出します。<br>舌の後ろ側を少し高くし、その口の形を保ったまま「uːーー」と長めに声を伸ばしましょう。<br>日本語の「ウ」はくちびるをあまり丸めませんが、英語の /uː/ は口をかなり丸くするのがポイントです。<br>喉の奥から深く響かせながら、音の途中でもくちびるの丸い形をキープできればOKです。",
        tips: "/uː/ を日本語の「ウー」と同じ口で発音すると、英語では少し平たく聞こえます。英語では「しっかり丸めて前へ出す」ことが重要です。また /w/ も似た口から始まりますが、/uː/ はその丸い形を保って母音を伸ばす音、/w/ は丸めた口からすぐ次の母音へ動く音です。food の /uː/ なら口の形をキープし、we の /w/ ならすぐに口を開く、という違いを意識しましょう。",
        wordLists: [
            { title: "基本の /uː/ をマスター", desc: "くちびるを大きく丸めて前へ出し、その形のまま長く深い音を伸ばしましょう。", words: ["cool", "food", "moon", "pool", "room"] },
            { title: "oo 以外でも /uː/", desc: "ew・ue・u・oe・ough・ui・ou など、さまざまなつづりでも /uː/ が現れます。", words: ["blue", "June", "shoe", "through", "juice"] }
        ]
    },
    "ur": { 
        symbol: "/ɜːr/", title: "口を力ませず、舌を中央で浮かせて「アー＋r」！", theme: "purple",
        howTo: "口を大きく開かず、くちびるも丸めずにリラックスさせます。<br>舌先はどこにもつけず、舌全体を口の中央あたりで少し持ち上げて「ɜː」と声を出しましょう。<br>そこから舌先を上あごにつけないまま、舌を少し後ろへ引いて /r/ の響きを加えます。<br>日本語の「アー」や「ウー」にはっきり寄せず、その中間のような音を口の中で響かせるのがポイントです。アメリカ英語では、母音と /r/ がほぼ一体になった音として聞こえます。",
        tips: "/ɜːr/ では、くちびるを丸めたり、口を大きく開いたりしないことが大切です。日本語の「アール」のように「アー＋ル」と2つの音に分けるのも避けましょう。/ɑːr/ との違いは、口の開きと舌の位置です。/ɜːr/ は口をあまり開けず、舌を中央付近に置く音。一方 /ɑːr/ はあごを大きく下げ、舌を低くして深い「アー」から /r/ へつなげます。hurt と heart を交互に言うと違いが分かりやすくなります。",
        wordLists: [
            { title: "基本の /ɜːr/ をマスター", desc: "口をリラックスさせ、舌をどこにもつけずに /r/ の響きを加えましょう。", words: ["hurt", "firm", "bird", "turn", "word"] },
            { title: "いろいろなスペルの /ɜːr/", desc: "ur・ir・er・ear など、つづりが違っても同じタイプの音になる単語があります。", words: ["nurse", "shirt", "person", "learn", "work"] }
        ]
    },
    "ar": { 
        symbol: "/ɑːr/", title: "あごを下げて深い「アー」、そこから /r/ へ！", theme: "purple",
        howTo: "まず、あごをしっかり下げて口を縦に大きく開きます。<br>舌は力を抜いて低い位置に置き、口の奥から深く「ɑː」と声を伸ばしましょう。<br>そのまま舌先を上あごにつけず、舌を少し後ろへ引いて /r/ の響きへなめらかにつなげます。<br>「アー・ル」と区切るのではなく、深い母音から /r/ へ一続きに動くイメージです。口の中に大きな空間を作ると、英語らしい厚みのある音になります。",
        tips: "/ɑːr/ を日本語の「アール」にすると、最後に日本語の「ル」が入ってしまいます。英語の /r/ では舌先を上あごにつけません。また /ɜːr/ との違いにも注意しましょう。/ɑːr/ は口を大きく開き、舌を低くして作る深い音ですが、/ɜːr/ は口をあまり開けず、舌を中央付近に置いて作ります。heart と hurt、farm と firm をセットで練習すると、母音の違いをはっきり感じられます。",
        wordLists: [
            { title: "基本の /ɑːr/ をマスター", desc: "あごを下げて深い母音を作り、舌先をつけずに /r/ へつなげましょう。", words: ["heart", "farm", "car", "dark", "start"] },
            { title: "ar の響きを身につける", desc: "口を大きく開いた深い /ɑː/ から、なめらかに /r/ へ移動しましょう。", words: ["park", "hard", "large", "garden", "march"] }
        ]
    },
    "aw": { 
        symbol: "/ɔː/", title: "あごを下げて、口の奥から深く「オー」！", theme: "orange",
        howTo: "まず日本語の「オ」を言う口を作り、そこからあごを少し下げて口を縦に大きく開きます。<br>くちびるは軽く丸めますが、前へ突き出しすぎないようにしましょう。<br>そのまま舌を低めにして、口の奥から「ɔːーー」と深く長く声を出します。<br>日本語の「オー」よりも口の中を広く使い、「オ」と「ア」の中間のような響きを作るのがポイントです。",
        tips: "/ɔː/ と /oʊ/ は、どちらも日本人には「オー」に聞こえやすい音です。しかし /ɔː/ は、口を大きめに開いた形をほぼ変えず、そのまま長く伸ばす音です。一方 /oʊ/ は「オ」から始まり、途中でくちびるを小さく丸めながら「ウ」の方向へ動く二重母音です。law の /ɔː/ は口を固定、low の /oʊ/ は口が動く、と覚えると違いがつかみやすくなります。",
        wordLists: [
            { title: "基本の /ɔː/ をマスター", desc: "あごを下げ、口の奥から深い音をまっすぐ長く伸ばしましょう。", words: ["awful", "claw", "draw", "law", "lawn"] },
            { title: "aw 以外でも /ɔː/", desc: "au・al・augh・ough など、さまざまなつづりでも同じ深い /ɔː/ が現れます。", words: ["audience", "author", "autumn", "call", "daughter"] }
        ]
    },
    "ow": { 
        symbol: "/oʊ/", title: "「オ」から「ウ」へ、くちびるをキュッと動かす！", theme: "orange",
        howTo: "最初は日本語の「オ」より少し口を大きく開いて、はっきり「オ」と声を出します。<br>そこから音を切らずに、くちびるを少しずつ丸めて前へ突き出しながら「ウ」の方向へ移動しましょう。<br>「オ・ウ」と2つに分けるのではなく、「oʊ」と一息でなめらかにつなげるのがポイントです。<br>口が「少し開いた形 → 小さく丸い形」へ動いていれば、英語らしい二重母音になっています。",
        tips: "/oʊ/ を日本語の「オー」のように、同じ口の形のまま伸ばさないようにしましょう。英語の /oʊ/ では、発音している途中でくちびるが必ず動きます。/ɔː/ が「口の形を保って深く伸ばす音」なのに対し、/oʊ/ は「オからウへ動く音」です。例えば saw /ɔː/ と sew /oʊ/、law /ɔː/ と low /oʊ/ を交互に練習すると、口の動きの違いがよく分かります。",
        wordLists: [
            { title: "基本の /oʊ/ をマスター", desc: "最初の「オ」から、くちびるを丸めながら「ウ」へなめらかに移動しましょう。", words: ["boat", "coat", "foam", "goal", "goat"] },
            { title: "ow でも /oʊ/", desc: "ow のつづりでも /oʊ/ になる単語があります。最後までくちびるを動かすことを意識しましょう。", words: ["bowl", "crow", "row", "snow", "window"] }
        ]
    },
    "u_short": { 
        symbol: "/ʊ/", title: "くちびるを軽く丸めて、短くやわらかい「ウ」！", theme: "cyan",
        howTo: "くちびるを少しだけ丸めますが、/uː/ ほど強く前へ突き出しません。<br>口は軽く開いたまま、舌の後ろ側を少し持ち上げて、短く「ʊ」と声を出しましょう。<br>日本語の「ウ」に近く聞こえることもありますが、英語の /ʊ/ はもっと短く、力の抜けた音です。<br>ポイントは、口を作りすぎないこと。深く長く伸ばさず、「一瞬だけ出すウ」のイメージで発音すると自然になります。",
        tips: "/ʊ/ は /uː/ とよく似ていますが、同じ音ではありません。/uː/ はくちびるをしっかり丸めて前へ出し、長くはっきり伸ばす音です。一方 /ʊ/ は、くちびるの丸め方が弱く、音も短くやわらかいのが特徴です。full を fool のように長く言わないように注意しましょう。pull と pool、full と fool を比べると、この違いがつかみやすくなります。",
        wordLists: [
            { title: "基本の /ʊ/ をマスター", desc: "くちびるを軽く丸め、長く伸ばさずに短く発音しましょう。", words: ["pull", "full", "book", "look", "good"] },
            { title: "/uː/ と混同しやすい単語", desc: "長い /uː/ にしないよう、短くやわらかい /ʊ/ を意識して練習しましょう。", words: ["cook", "foot", "wood", "should", "woman"] }
        ]
    }
};