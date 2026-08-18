// ==========================================
// 1. リエゾン（Connected Speech）コースデータ
// ==========================================
const liaisonCourses = {
    "reduction": {
        id: "reduction", 
        title: "Reduction", 
        subtitle: "リダクション（消える音）", 
        theme: "text-rose-500", bgTheme: "bg-rose-50", borderTheme: "border-rose-200",
        phrases: [ 
            { text: "next time", translation: "次回", targetWords: ["next", "time"], displayHtml: "nex<span class='text-rose-400 line-through opacity-50'>t</span> time", kana: "ネクスタイム" },
            { text: "must go", translation: "行かなければ", targetWords: ["must", "go"], displayHtml: "mus<span class='text-rose-400 line-through opacity-50'>t</span> go", kana: "マスゴー" },
            { text: "best friend", translation: "親友", targetWords: ["best", "friend"], displayHtml: "bes<span class='text-rose-400 line-through opacity-50'>t</span> friend", kana: "ベスフレンド" }
        ],
        sentences: [ 
            { text: "I must go to see my best friend just now.", translation: "ちょうど今、親友に会いに行かなければならない。", targetWords: ["must", "go", "best", "friend", "just", "now"], displayHtml: "I mus<span class='text-rose-400 line-through opacity-50'>t</span> go to see my bes<span class='text-rose-400 line-through opacity-50'>t</span> friend jus<span class='text-rose-400 line-through opacity-50'>t</span> now.", kana: "アイ マスゴー トゥ シー マイ ベスフレンド ジャスナウ" },
            { text: "We used to stand by the bus stop next time.", translation: "私たちはバス停で待機したものだ。", targetWords: ["used", "to", "stand", "by", "bus", "stop"], displayHtml: "We use<span class='text-rose-400 line-through opacity-50'>d</span> to stan<span class='text-rose-400 line-through opacity-50'>d</span> by the bu<span class='text-rose-400 line-through opacity-50'>s</span> stop.", kana: "ウィ ユーストゥ スタンバイ ザ バストップ" }
        ],
        passages: [
            {
                text: "I was just now thinking about my best friend. We used to spend hours talking at the cafe. I must go see her next time I visit my hometown. It's been too long, and I really want to catch up.",
                translation: "ちょうど今、親友のことを考えていました。私たちは昔、カフェで何時間も話して過ごしたものです。次に地元を訪れた時には、必ず彼女に会いに行かなければ。ずいぶん長く会っていないので、本当に近況を語り合いたいです。",
                displayHtml: "I was jus<span class='text-rose-400 line-through opacity-50'>t</span> now thinking about my bes<span class='text-rose-400 line-through opacity-50'>t</span> friend. We use<span class='text-rose-400 line-through opacity-50'>d</span> to spend hours talking at the cafe. I mus<span class='text-rose-400 line-through opacity-50'>t</span> go see her nex<span class='text-rose-400 line-through opacity-50'>t</span> time I visit my hometown. It's been too long, and I really want to catch up.",
                kana: "アイ ワズ ジャスナウ シンキング アバウト マイ ベスフレンド。ウィ ユーストゥ スペンド アワーズ トーキング アット ザ カフェ。アイ マスゴー シー ハー ネクスタイム アイ ヴィジット マイ ホームタウン。イッツ ビーン トゥー ロング、アンド アイ リアリー ワント トゥ キャッチ アップ。"
            }
        ]
    },
    "linking": { 
        id: "linking", 
        title: "Linking", 
        subtitle: "連結（子音＋母音）", 
        theme: "text-amber-500", bgTheme: "bg-amber-50", borderTheme: "border-amber-200",
        phrases: [ 
            { text: "Can I", translation: "〜してもいいですか？", targetWords: ["Can", "I"], displayHtml: "Ca<span class='text-amber-500 font-bold'>n ‿ I</span>", kana: "キャナイ" },
            { text: "Stop it", translation: "やめなさい", targetWords: ["Stop", "it"], displayHtml: "Sto<span class='text-amber-500 font-bold'>p ‿ i</span>t", kana: "ストピット" },
            { text: "far away", translation: "遠く離れて", targetWords: ["far", "away"], displayHtml: "fa<span class='text-amber-500 font-bold'>r ‿ a</span>way", kana: "ファラウェイ" }
        ],
        sentences: [ 
            { text: "Can I have some juice?", translation: "ジュースをもらえますか？", targetWords: ["Can", "I", "have"], displayHtml: "Ca<span class='text-amber-500 font-bold'>n ‿ I</span> have some juice?", kana: "キャナイ ハヴ サム ジュース" },
            { text: "A cup of coffee, please.", translation: "コーヒーを１杯ください。", targetWords: ["cup", "of", "coffee"], displayHtml: "A cu<span class='text-amber-500 font-bold'>p ‿ o</span>f coffee, please.", kana: "ア カッポヴ コーヒー プリーズ" }
        ],
        passages: [
            {
                text: "Take a look at this picture. This is from a trip far away in the mountains. We sat on a bench and shared an apple. Can I go back there someday? I really hope so. It was such a peaceful place to have a seat and relax.",
                translation: "この写真を見てみて。これは遠く離れた山へ旅行した時のものだよ。私たちはベンチに座って、りんごを分け合ったんだ。いつかまたそこに行けるかな？本当にそう願っているよ。座ってリラックスできる、とても平和な場所だったんだ。",
                displayHtml: "Tak<span class='text-amber-500 font-bold'>e ‿ a</span> loo<span class='text-amber-500 font-bold'>k ‿ a</span>t this picture. Thi<span class='text-amber-500 font-bold'>s ‿ i</span>s from a trip fa<span class='text-amber-500 font-bold'>r ‿ a</span>way in the mountains. We sat on a bench and shared a<span class='text-amber-500 font-bold'>n ‿ a</span>pple. Ca<span class='text-amber-500 font-bold'>n ‿ I</span> go back there someday? I really hope so. It was such a peaceful place to hav<span class='text-amber-500 font-bold'>e ‿ a</span> seat and relax.",
                kana: "テイカルック アット ディス ピクチャー。ディスィズ フロム ア トリップ ファラウェイ イン ザ マウンテンズ。ウィ サット オン ア ベンチ アンド シェアード アナプル。キャナイ ゴー バック ゼア サムデイ？ アイ リアリー ホウプ ソー。イット ワズ サッチ ア ピースフル プレイス トゥ ハヴァ シート アンド リラックス。"
            }
        ]
    },
    "silent-letters": {
        id: "silent-letters", 
        title: "Silent Letters", 
        subtitle: "黙字（読まない文字）", 
        theme: "text-slate-500", bgTheme: "bg-slate-50", borderTheme: "border-slate-200",
        phrases: [ 
            { text: "know the answer", translation: "答えを知っている", targetWords: ["know", "answer"], displayHtml: "<span class='text-slate-400 line-through opacity-50'>k</span>now the answer", kana: "ノウ ジ アンサー" },
            { text: "climb the mountain", translation: "山に登る", targetWords: ["climb", "mountain"], displayHtml: "clim<span class='text-slate-400 line-through opacity-50'>b</span> the mountain", kana: "クライム ザ マウンテン" },
            { text: "half an hour", translation: "30分", targetWords: ["half", "hour"], displayHtml: "ha<span class='text-slate-400 line-through opacity-50'>l</span>f an <span class='text-slate-400 line-through opacity-50'>h</span>our", kana: "ハフ アン アウア" }
        ],
        sentences: [ 
            { text: "Listen! I know how to walk to the island.", translation: "聞いて！私は島への歩き方を知っています。", targetWords: ["Listen", "know", "walk", "island"], displayHtml: "Lis<span class='text-slate-400 line-through opacity-50'>t</span>en! I <span class='text-slate-400 line-through opacity-50'>k</span>now how to wa<span class='text-slate-400 line-through opacity-50'>l</span>k to the i<span class='text-slate-400 line-through opacity-50'>s</span>land.", kana: "リスン アイ ノウ ハウトゥ ウォーク トゥ ジ アイランド" }
        ],
        passages: [
            {
                text: "If you walk for half an hour, you will reach the foot of the hill. From there, we usually climb the mountain. Listen carefully to the birds while you walk. I know it is a bit tough, but the view at the top is worth it.",
                translation: "30分ほど歩くと、丘のふもとに着きます。そこから、私たちは普段その山を登ります。歩きながら、鳥の鳴き声によく耳を澄ませてください。少し大変なのは知っていますが、頂上からの景色はそれだけの価値がありますよ。",
                displayHtml: "If you wa<span class='text-slate-400 line-through opacity-50'>l</span>k for ha<span class='text-slate-400 line-through opacity-50'>l</span>f an <span class='text-slate-400 line-through opacity-50'>h</span>our, you will reach the foot of the hill. From there, we usually clim<span class='text-slate-400 line-through opacity-50'>b</span> the mountain. Lis<span class='text-slate-400 line-through opacity-50'>t</span>en carefully to the birds while you wa<span class='text-slate-400 line-through opacity-50'>l</span>k. I <span class='text-slate-400 line-through opacity-50'>k</span>now it is a bit tough, but the view at the top is worth it.",
                kana: "イフ ユー ウォーク フォア ハフ アン アウア、ユー ウィル リーチ ザ フット オブ ザ ヒル。フロム ゼア、ウィ ユージュアリー クライム ザ マウンテン。リスン ケアフリー トゥ ザ バーズ ホワイル ユー ウォーク。アイ ノウ イット イズ ア ビット タフ、バット ザ ヴュー アット ザ トップ イズ ワース イット。"
            }
        ]
    },
    "magic-e": {
        id: "magic-e", 
        title: "Magic E", 
        subtitle: "語末の e（母音の変化）", 
        theme: "text-fuchsia-500", bgTheme: "bg-fuchsia-50", borderTheme: "border-fuchsia-200",
        phrases: [ 
            { text: "make a cake", translation: "ケーキを作る", targetWords: ["make", "cake"], displayHtml: "m<span class='text-fuchsia-500 font-bold'>a</span>k<span class='text-slate-400 line-through opacity-50'>e</span> a c<span class='text-fuchsia-500 font-bold'>a</span>k<span class='text-slate-400 line-through opacity-50'>e</span>", kana: "メイク ア ケイク" },
            { text: "cute tube", translation: "かわいい管", targetWords: ["cute", "tube"], displayHtml: "c<span class='text-fuchsia-500 font-bold'>u</span>t<span class='text-slate-400 line-through opacity-50'>e</span> t<span class='text-fuchsia-500 font-bold'>u</span>b<span class='text-slate-400 line-through opacity-50'>e</span>", kana: "キュート チューブ" },
            { text: "hope to win", translation: "勝つことを望む", targetWords: ["hope", "win"], displayHtml: "h<span class='text-fuchsia-500 font-bold'>o</span>p<span class='text-slate-400 line-through opacity-50'>e</span> to win", kana: "ホウプ トゥ ウィン" }
        ],
        sentences: [ 
            { text: "He drank wine and made a speech at the game.", translation: "彼はワインを飲み、試合でスピーチをした。", targetWords: ["wine", "made", "game"], displayHtml: "He drank w<span class='text-fuchsia-500 font-bold'>i</span>n<span class='text-slate-400 line-through opacity-50'>e</span> and m<span class='text-fuchsia-500 font-bold'>a</span>d<span class='text-slate-400 line-through opacity-50'>e</span> a speech at the g<span class='text-fuchsia-500 font-bold'>a</span>m<span class='text-slate-400 line-through opacity-50'>e</span>.", kana: "ヒー ドランク ワイン アンド メイド ア スピーチ アット ザ ゲイム" }
        ],
        passages: [
            {
                text: "I made a huge dinner for the party. My friends brought some fine wine, and we watched the baseball game on TV. Later, I plan to make a cake for dessert. I really hope everyone has a great time tonight.",
                translation: "パーティーのために豪華な夕食を作りました。友人たちは上質なワインを持ってきてくれて、私たちはテレビで野球の試合を見ました。後で、デザートにケーキを作る予定です。今夜みんなが素晴らしい時間を過ごせることを本当に願っています。",
                displayHtml: "I m<span class='text-fuchsia-500 font-bold'>a</span>d<span class='text-slate-400 line-through opacity-50'>e</span> a h<span class='text-fuchsia-500 font-bold'>u</span>g<span class='text-slate-400 line-through opacity-50'>e</span> dinner for the party. My friends brought some f<span class='text-fuchsia-500 font-bold'>i</span>n<span class='text-slate-400 line-through opacity-50'>e</span> w<span class='text-fuchsia-500 font-bold'>i</span>n<span class='text-slate-400 line-through opacity-50'>e</span>, and we watched the baseball g<span class='text-fuchsia-500 font-bold'>a</span>m<span class='text-slate-400 line-through opacity-50'>e</span> on TV. Later, I plan to m<span class='text-fuchsia-500 font-bold'>a</span>k<span class='text-slate-400 line-through opacity-50'>e</span> a c<span class='text-fuchsia-500 font-bold'>a</span>k<span class='text-slate-400 line-through opacity-50'>e</span> for dessert. I really h<span class='text-fuchsia-500 font-bold'>o</span>p<span class='text-slate-400 line-through opacity-50'>e</span> everyone has a great t<span class='text-fuchsia-500 font-bold'>i</span>m<span class='text-slate-400 line-through opacity-50'>e</span> tonight.",
                kana: "アイ メイド ア ヒュージ ディナー フォア ザ パーティー。マイ フレンズ ブロート サム ファイン ワイン、アンド ウィ ウォッチト ザ ベースボール ゲイム オン ティーヴィー。レイター、アイ プラン トゥ メイク ア ケイク フォア デザート。アイ リアリー ホウプ エヴリワン ハズ ア グレイト タイム トゥナイト。"
            }
        ]
    },
    "assimilation": {
        id: "assimilation", 
        title: "Assimilation", 
        subtitle: "アシミレーション（同化）", 
        theme: "text-indigo-500", bgTheme: "bg-indigo-50", borderTheme: "border-indigo-200",
        phrases: [ 
            { text: "want you", translation: "あなたに〜してほしい", targetWords: ["want", "you"], displayHtml: "wan<span class='text-indigo-500 font-bold'>t ＋ y</span>ou", kana: "ワンチュー" },
            { text: "Did you", translation: "〜しましたか？", targetWords: ["Did", "you"], displayHtml: "Di<span class='text-indigo-500 font-bold'>d ＋ y</span>ou", kana: "ディジュー" },
            { text: "miss you", translation: "あなたが恋しい", targetWords: ["miss", "you"], displayHtml: "mi<span class='text-indigo-500 font-bold'>ss ＋ y</span>ou", kana: "ミシュー" }
        ],
        sentences: [ 
            { text: "What did your family think when I met you?", translation: "私があなたに会った時、ご家族はどう思われましたか？", targetWords: ["did", "your", "family", "met", "you"], displayHtml: "What di<span class='text-indigo-500 font-bold'>d ＋ y</span>our family think when I me<span class='text-indigo-500 font-bold'>t ＋ y</span>ou?", kana: "ワット ディジュア ファミリー シンク ウェン アイ ミーチュー" }
        ],
        passages: [
            {
                text: "Hey, did you get my message? I really want you to come to my party this weekend. I will let you know the exact time later. How's your new job, by the way? I can't wait to meet you and hear all about it.",
                translation: "ねえ、メッセージ届いた？今週末のパーティーにどうしても来てほしいな。正確な時間はまた後でお知らせするね。ところで、新しい仕事はどう？あなたに会って、その話を全部聞くのが待ちきれないよ。",
                displayHtml: "Hey, di<span class='text-indigo-500 font-bold'>d ＋ y</span>ou get my message? I really wan<span class='text-indigo-500 font-bold'>t ＋ y</span>ou to come to my party this weekend. I will le<span class='text-indigo-500 font-bold'>t ＋ y</span>ou know the exact time later. How'<span class='text-indigo-500 font-bold'>s ＋ y</span>our new job, by the way? I can't wait to mee<span class='text-indigo-500 font-bold'>t ＋ y</span>ou and hear all about it.",
                kana: "ヘイ、ディジュー ゲット マイ メッセージ？ アイ リアリー ワンチュー トゥ カム トゥ マイ パーティー ディス ウィークエンド。アイ ウィル レッチュー ノウ ジ イグザクト タイム レイター。ハウジュア ニュー ジョブ、バイ ザ ウェイ？ アイ キャント ウェイト トゥ ミーチュー アンド ヒア オール アバウト イット。"
            }
        ]
    },
    "glottal-t": {
        id: "glottal-t", 
        title: "Glottal T", 
        subtitle: "飲み込みの t", 
        theme: "text-cyan-600", bgTheme: "bg-cyan-50", borderTheme: "border-cyan-200",
        phrases: [ 
            { text: "push the button", translation: "ボタンを押す", targetWords: ["push", "button"], displayHtml: "push the bu<span class='text-cyan-500 font-bold'>tt</span>on", kana: "プッシュ ザ バッンン" },
            { text: "high mountain", translation: "高い山", targetWords: ["high", "mountain"], displayHtml: "high moun<span class='text-cyan-500 font-bold'>t</span>ain", kana: "ハイ マウンンン" },
            { text: "very important", translation: "とても重要", targetWords: ["very", "important"], displayHtml: "very impor<span class='text-cyan-500 font-bold'>t</span>ant", kana: "ヴェリー インポーッンン" }
        ],
        sentences: [ 
            { text: "It is very important to push the button.", translation: "そのボタンを押すことはとても重要です。", targetWords: ["important", "push", "button"], displayHtml: "It is very impor<span class='text-cyan-500 font-bold'>t</span>ant to push the bu<span class='text-cyan-500 font-bold'>tt</span>on.", kana: "イット イズ ヴェリー インポーッンン トゥ プッシュ ザ バッンン" }
        ],
        passages: [
            {
                text: "When hiking a high mountain in Britain, the weather can change quickly. It is very important to bring warm clothes. Also, make sure you have eaten enough food for energy. If there is an emergency, just push the button on your radio.",
                translation: "イギリスの高い山をハイキングする時、天候は急変する可能性があります。暖かい服を持参することが非常に重要です。また、エネルギーのために十分な食事をとることも確認してください。もし緊急事態が起きたら、ラジオのボタンを押すだけです。",
                displayHtml: "When hiking a high moun<span class='text-cyan-500 font-bold'>t</span>ain in Bri<span class='text-cyan-500 font-bold'>t</span>ain, the weather can change quickly. It is very impor<span class='text-cyan-500 font-bold'>t</span>ant to bring warm clothes. Also, make sure you have ea<span class='text-cyan-500 font-bold'>t</span>en enough food for energy. If there is an emergency, just push the bu<span class='text-cyan-500 font-bold'>tt</span>on on your radio.",
                kana: "ウェン ハイキング ア ハイ マウンンン イン ブリッンン、ザ ウェザー キャン チェンジ クイックリー。イット イズ ヴェリー インポーッンン トゥ ブリング ウォーム クロウズ。オルソー、メイク シュア ユー ハヴ イーッン イナフ フード フォア エナジー。イフ ゼア イズ アン イマージェンシー、ジャスト プッシュ ザ バッンン オン ユア レイディオ。"
            }
        ]
    }
};

// ==========================================
// 2. リエゾン用 リッチコーチングデータ
// ==========================================
const liaisonCoachingData = {
    "reduction": {
        symbol: "💨", title: "同じ子音が続くと、前の音が消える！", theme: "rose",
        howTo: "ネイティブが発音するとき、スペル通りの音を出していないことがあります。<br>「Good morning」の d が消えて「グッモーニン」となるように、単語の最後の一音が消えたようになる現象を「リダクション（脱落）」と言います。",
        tips: "p, b, t, d, k, g などの破裂音が単語の最後にきた時や、同じ子音・よく似た子音が連続する時（next time など）に起こります。無理に全部読もうとせず、前の音は「口の形を作るだけ」で寸止めするのがコツです。",
        wordLists: [
            { title: "同じ/似た子音が続く場合", desc: "前の音は発音せず、タメを作ります。", words: ["next time", "must go", "best friend", "used to"] },
            { title: "破裂音で終わる場合", desc: "最後の音を飲み込むように寸止めします。", words: ["stop", "good", "job", "make", "big"] }
        ]
    },
    "linking": {
        symbol: "🔗", title: "子音と母音が磁石のようにくっつく！", theme: "amber",
        howTo: "単語の最後が「子音」で終わり、次の単語が「母音（a, i, u, e, o）」で始まる場合、2つの音は磁石のようにくっついて発音されます。<br>例えば「Can I」は「キャン・アイ」ではなく、nとIが合体して「キャナイ」のようになります。",
        tips: "日本語のように単語を1つずつ区切って話すと、ロボットのような不自然な英語になってしまいます。「子音＋母音」を見つけたら、1つの新しい単語だと思ってスムーズに繋げてみましょう。",
        wordLists: [
            { title: "n や m ＋ 母音の連結", desc: "n や m の音が次の母音と合体して「ナ行」や「マ行」のように聞こえます。", words: ["Can I", "in an hour", "an apple", "Come on"] },
            { title: "p / t / k ＋ 母音の連結", desc: "破裂音が次の母音に乗って滑らかに繋がります。", words: ["keep it", "get up", "look at", "Stop it"] }
        ]
    },
    "silent-letters": {
        symbol: "🤫", title: "スペルにあるのに発音しない「黙字」", theme: "slate",
        howTo: "b, h, k, l, n, p, s, t, w は、スペルに入っていても「発音しない」ときがあります。<br>例えば「know（知る）」は「クノウ」ではなく「ノウ」と読みます。",
        tips: "古典英語のスペルが残っていたり、他の国の言葉のスペルが残っていたりと理由は様々です。発音しなくなるパターンを押さえておくと、正しいつづりと発音を結びつけやすくなります。",
        wordLists: [
            { title: "よくある黙字（k, w, b, l）", desc: "単語の最初や最後にある特定の文字は無視します。", words: ["know", "write", "climb", "walk", "half"] },
            { title: "要注意の黙字（h, t, s）", desc: "発音しないことを意識して覚えましょう。", words: ["hour", "listen", "island", "often", "honest"] }
        ]
    },
    "magic-e": {
        symbol: "🪄", title: "最後が「子音＋e」なら、前の母音が変身！", theme: "fuchsia",
        howTo: "単語の最後が「子音と e」で終わる場合、最後の e は発音しません。<br>その代わり、一つ手前の母音の読み方が「アルファベットの読み方（エイ、イー、アイ、ユー、オウ）」に変化します。",
        tips: "例えば「cake」は「カケ」ではなく「ケイク」と読みます。eがつくかつかないかで、発音も意味も全く違う単語になるので、セットで違いを確認しましょう。",
        wordLists: [
            { title: "a / i が変身するパターン", desc: "ア→エイ、イ→アイ に変化します。", words: ["mad / made", "tap / tape", "win / wine", "bit / bite"] },
            { title: "o / u が変身するパターン", desc: "オ→オウ、ウ→ユー に変化します。", words: ["hop / hope", "rob / robe", "cut / cute", "tub / tube"] }
        ]
    },
    "assimilation": {
        symbol: "💥", title: "隣り合った音がくっついて別の音になる！", theme: "indigo",
        howTo: "隣り合った単語の、最後と最初の子音がくっついて別の音になる変化を「アシミレーション（同化）」といいます。<br>・t ＋ y ＝ チュ<br>・d ＋ y ＝ ジュ<br>・s ＋ y ＝ ジョ / シュ",
        tips: "「want you（ワンチュー）」や「Did you（ディジュー）」など、後に you や your がくる時に頻繁に起こります。これを意識するだけで、ネイティブの速い英語が一気に聞き取りやすくなります。",
        wordLists: [
            { title: "t / d ＋ y の変化", desc: "チュ、ジュ という音になります。", words: ["want you", "meet you", "Did you see it?", "We followed your"] },
            { title: "s ＋ y の変化", desc: "ジョ、シュ という音になります。", words: ["How's your family?", "Where's your mom?", "I miss you"] }
        ]
    },
    "glottal-t": {
        symbol: "🫥", title: "t を発音せずに飲み込む「んー」", theme: "cyan",
        howTo: "t の後に母音がきて n が続く時、t は発音せずに「ン」が続くように発音する場合があります。<br>t の発音を喉の奥で飲み込むように聞こえるので「飲み込みの t（Glottal T）」と呼ばれます。",
        tips: "「button」は「ボタン」ではなく「バッンン」のように、鼻にかけて音を出します。少し難易度が高いですが、これができると英語らしさが格段にアップします。",
        wordLists: [
            { title: "飲み込みの t を含む単語", desc: "t の音を出さず、喉で息を止めて「ン」に繋げます。", words: ["button", "mountain", "important", "Britain", "eaten"] },
            { title: "実践フレーズ", desc: "文の中で飲み込みの t を意識してみましょう。", words: ["push the button", "high mountain", "very important"] }
        ]
    }
};