/* Grade 1 originally authored supplementary practice.
 * Core textbook passages are not reproduced. Verified words retain the audit label;
 * other words and examples are original topic-aligned additions.
 */
const SECTION_CATALOG = Object.create(null);
const SECTION_PRACTICE = Object.create(null);
(function(){
'use strict';
const RAW = "\n@u0-review\nI [[am]] a student.|私は生徒です。\nMy [[name]] is Yuki.|私の名前はユキです。\nI [[like]] soccer.|私はサッカーが好きです。\nMy friend [[likes]] music.|私の友達は音楽が好きです。\n[[Do]] you like English?|あなたは英語が好きですか。\nWe [[play]] tennis after school.|私たちは放課後にテニスをします。\nI [[have]] a red bag.|私は赤いかばんを持っています。\nThis [[is]] my classroom.|ここは私の教室です。\nI [[want]] a new notebook.|私は新しいノートが欲しいです。\n[[Nice]] to meet you.|はじめまして。\n@u1-part1\nI [[am]] Edward.|私はエドワードです。\nI [[am]] from South Africa.|私は南アフリカ出身です。\nMy friends [[call]] me Eddy.|友人たちは私をエディと呼びます。\nI [[like]] Japanese sweets.|私は日本のお菓子が好きです。\nI [[love]] green tea.|私は緑茶が大好きです。\nMy new school [[is]] in Japan.|私の新しい学校は日本にあります。\nI [[want]] to join the tea club.|私は茶道部に入りたいです。\nMy name [[is]] Anna.|私の名前はアンナです。\nWe [[are]] first-year students.|私たちは1年生の生徒です。\nI [[have]] many new friends.|私には新しい友達がたくさんいます。\n@u1-part2\n[[Do]] you like rugby?|あなたはラグビーが好きですか。\nI [[do not]] play rugby.|私はラグビーをしません。\nMy sister [[likes]] basketball.|姉はバスケットボールが好きです。\nWe [[play]] soccer after school.|私たちは放課後にサッカーをします。\nI often [[watch]] sports on TV.|私はよくテレビでスポーツを見ます。\n[[Do]] your friends like tennis?|あなたの友達はテニスが好きですか。\nI [[like]] baseball, but my brother likes soccer.|私は野球が好きですが、弟はサッカーが好きです。\nMy friends [[do not]] play volleyball.|私の友達はバレーボールをしません。\nI [[practice]] with my team on Sundays.|私は日曜日にチームで練習します。\nWe [[have]] a sports club at school.|私たちの学校には運動部があります。\n@u1-part3\n[[Are]] you an anime fan?|あなたはアニメファンですか。\nI [[am not]] an anime fan.|私はアニメファンではありません。\nI [[draw]] pictures after school.|私は放課後に絵を描きます。\nMy favorite character [[is]] a cat.|私のお気に入りのキャラクターは猫です。\nThis lesson [[is]] interesting.|この授業は面白いです。\nWe [[talk]] about Japanese anime.|私たちは日本のアニメについて話します。\nI [[have]] a picture of my favorite character.|私はお気に入りのキャラクターの絵を持っています。\n[[Are]] your friends in the art club?|あなたの友達は美術部に入っていますか。\nI [[am]] a member of the art club.|私は美術部の部員です。\nI [[like]] drawing animals.|私は動物を描くことが好きです。\n@u2-part1\nThis [[is]] our new teacher.|こちらは私たちの新しい先生です。\nShe [[is]] from Canada.|彼女はカナダ出身です。\nHe [[is]] in Class 1-1.|彼は1年1組にいます。\n[[Is]] he on the soccer team?|彼はサッカー部ですか。\nOur teacher [[likes]] Japanese food.|私たちの先生は日本食が好きです。\nThis [[is]] my friend Jun.|こちらは私の友達の純です。\nMy classmates [[are]] very friendly.|私のクラスメートはとても親切です。\nShe [[is]] good at singing.|彼女は歌うことが得意です。\n[[Is]] your new teacher from America?|あなたの新しい先生はアメリカ出身ですか。\nWe [[are]] happy to meet our teacher.|私たちは先生に会えてうれしいです。\n@u2-part2\nI [[can]] make gyoza.|私は餃子を作れます。\n[[Can]] you read hiragana?|あなたはひらがなを読めますか。\nShe [[can]] speak Chinese.|彼女は中国語を話せます。\nMy father [[cannot]] swim.|私の父は泳げません。\nWe [[can]] sing an English song.|私たちは英語の歌を歌えます。\n[[Can]] your parents cook Japanese food?|あなたの両親は日本食を作れますか。\nI [[cannot]] play the piano.|私はピアノを弾けません。\nMy sister [[can]] draw pictures.|妹は絵を描けます。\nI [[can]] help you after school.|私は放課後にあなたを手伝えます。\n[[Can]] you open this box?|あなたはこの箱を開けられますか。\n@u2-part3\n[[This]] is your pen.|これはあなたのペンです。\n[[That]] is my notebook.|あれは私のノートです。\n[[Is]] this your bag?|これはあなたのかばんですか。\n[[Is]] that a bird?|あれは鳥ですか。\nHere [[is]] your book.|はい、あなたの本です。\n[[This]] is our classroom.|ここは私たちの教室です。\nMy pencil [[is]] on the desk.|私の鉛筆は机の上にあります。\n[[That]] is the school library.|あれは学校の図書館です。\n[[Are]] these your pictures?|これらはあなたの写真ですか。\nWe [[have]] some new books.|私たちには新しい本が何冊かあります。\n@u3-part1\n[[What]] is that?|あれは何ですか。\n[[Who]] is your favorite character?|あなたの好きなキャラクターは誰ですか。\nMy favorite animal [[is]] a panda.|私の好きな動物はパンダです。\n[[What]] is this school symbol?|この学校のシンボルは何ですか。\n[[Who]] is your English teacher?|あなたの英語の先生は誰ですか。\nThe character [[is]] very popular.|そのキャラクターはとても人気があります。\nMy friend [[likes]] the school mascot.|友達は学校のマスコットが好きです。\n[[What]] do you study on Mondays?|あなたは月曜日に何を勉強しますか。\nThis picture [[is]] interesting.|この絵は面白いです。\n[[Who]] is in the library?|誰が図書館にいますか。\n@u3-part2\n[[How]] do you come to school?|どうやって学校へ来ますか。\nI [[walk]] to school every day.|私は毎日歩いて学校へ来ます。\n[[When]] do you play tennis?|あなたはいつテニスをしますか。\nWe [[study]] English after school.|私たちは放課後に英語を勉強します。\n[[How]] do you use this computer?|このコンピューターはどうやって使いますか。\nI [[ride]] my bike to school.|私は自転車で学校へ来ます。\n[[When]] is your music lesson?|あなたの音楽の授業はいつですか。\nMy friends [[come]] to school at eight.|友達は8時に学校へ来ます。\nWe [[meet]] in the gym on Fridays.|私たちは金曜日に体育館で会います。\n[[How]] do you practice English?|あなたはどうやって英語を練習しますか。\n@u3-part3\n[[Where]] is the park?|公園はどこにありますか。\nIt [[is]] near the station.|それは駅の近くにあります。\n[[Where]] is our classroom?|私たちの教室はどこですか。\nThe library [[is]] next to the gym.|図書館は体育館の隣です。\nOur school [[has]] a long hallway.|私たちの学校には長い廊下があります。\nMy friend [[is]] in the music room.|友達は音楽室にいます。\n[[Where]] do you play soccer?|あなたはどこでサッカーをしますか。\nWe [[practice]] on the school ground.|私たちは校庭で練習します。\nThe station [[is]] behind the museum.|駅は博物館の後ろにあります。\n[[Where]] is the next game?|次の試合はどこですか。\n@u4-part1\n[[How many]] rabbits do you have?|あなたはウサギを何匹飼っていますか。\nI [[have]] two small puppies.|私は小さな子犬を2匹飼っています。\nMy friend [[has]] three cats.|友達は猫を3匹飼っています。\n[[How many]] students are in your class?|あなたのクラスには何人の生徒がいますか。\nWe [[have]] five friends in New Zealand.|私たちにはニュージーランドに5人の友達がいます。\n[[How many]] books are on the desk?|机の上に本は何冊ありますか。\nThey [[have]] a lot of sheep.|彼らはたくさんの羊を飼っています。\nI [[want]] to visit New Zealand someday.|私はいつかニュージーランドを訪れたいです。\n[[How many]] pictures do you have?|あなたは写真を何枚持っていますか。\nOur school [[has]] many international friends.|私たちの学校には多くの海外の友達がいます。\n@u4-part2\n[[What time]] is it?|今何時ですか。\nIt [[is]] three o'clock.|3時です。\n[[What]] sports do you play?|あなたはどんなスポーツをしますか。\nWe [[play]] soccer after lunch.|私たちは昼食後にサッカーをします。\nOur online meeting [[starts]] at noon.|私たちのオンライン会議は正午に始まります。\n[[What time]] does your class start?|あなたの授業は何時に始まりますか。\nI [[like]] playing basketball.|私はバスケットボールをするのが好きです。\nMy last class [[ends]] at four.|私の最後の授業は4時に終わります。\nWe [[have]] English on Tuesdays.|私たちは火曜日に英語の授業があります。\n[[What]] music do you like?|あなたはどんな音楽が好きですか。\n@u4-part3\n[[Come]] to the front.|前に来てください。\n[[Be]] brave.|勇気を出してください。\n[[Don't]] worry.|心配しないでください。\n[[Look]] at this picture.|この絵を見てください。\n[[Enjoy]] your time in New Zealand.|ニュージーランドでの時間を楽しんでください。\n[[Listen]] to your classmates.|クラスメートの話を聞いてください。\n[[Don't]] run in the hallway.|廊下で走らないでください。\n[[Open]] your notebook.|ノートを開いてください。\n[[Speak]] clearly during your presentation.|発表中ははっきり話してください。\n[[Don't]] be nervous.|緊張しないでください。\n@u5-part1\nMy brother [[lives]] in Hawaii.|私の兄はハワイに住んでいます。\nHe [[writes]] a blog about local places.|彼は地元の場所についてブログを書いています。\nFumiya [[enjoys]] surfing at the beach.|文也は浜辺でサーフィンを楽しみます。\nHe [[likes]] beautiful spots in Hawaii.|彼はハワイの美しい場所が好きです。\nMy brother [[works]] as a tour guide.|私の兄はツアーガイドとして働いています。\nHe [[takes]] pictures of the ocean.|彼は海の写真を撮ります。\nMy friend [[reads]] his blog every week.|友達は毎週彼のブログを読みます。\nHe [[visits]] many interesting places.|彼はたくさんの面白い場所を訪れます。\nThe beach [[looks]] beautiful in summer.|夏の浜辺は美しく見えます。\nHe [[speaks]] English every day.|彼は毎日英語を話します。\n@u5-part2\n[[Does]] Fumiya live near a beach?|文也は浜辺の近くに住んでいますか。\nHe [[does]] not live in Tokyo.|彼は東京に住んでいません。\n[[Does]] your brother surf every day?|あなたの兄は毎日サーフィンをしますか。\nHe [[has]] many friends in Hawaii.|彼にはハワイにたくさんの友達がいます。\n[[Does]] Maria study English?|マリアは英語を勉強しますか。\nShe [[does]] not play soccer.|彼女はサッカーをしません。\n[[Does]] your teacher like swimming?|先生は水泳が好きですか。\nMy sister [[does]] not eat fish.|私の妹は魚を食べません。\n[[Does]] he have a bicycle?|彼は自転車を持っていますか。\nHe [[has]] a good life on the island.|彼はその島でよい暮らしをしています。\n@u5-part3\nMaria [[does not]] speak Japanese.|マリアは日本語を話しません。\nMy brother [[does not]] play baseball.|私の兄は野球をしません。\n[[Does]] Ken study at this school?|ケンはこの学校で勉強していますか。\nShe [[does not]] watch TV every day.|彼女は毎日テレビを見ません。\n[[Does]] your father work on Sundays?|お父さんは日曜日に働きますか。\nOur teacher [[does not]] live near the station.|私たちの先生は駅の近くに住んでいません。\n[[Does]] your sister enjoy music?|あなたの妹は音楽を楽しみますか。\nHe [[does not]] eat breakfast at school.|彼は学校で朝食を食べません。\n[[Does]] she read English books?|彼女は英語の本を読みますか。\nMy mother [[does not]] drive to work.|私の母は車で通勤しません。\n@u6-part1\nDo you know [[him]]?|あなたは彼を知っていますか。\nI often listen to [[her]].|私はよく彼女の話を聞きます。\nThe performer tells [[us]] funny stories.|その演者は私たちに面白い話をしてくれます。\nPlease show [[me]] your ticket.|あなたのチケットを私に見せてください。\nWe want to meet [[him]] after the show.|私たちは公演後に彼に会いたいです。\nI can help [[you]] with English.|私はあなたの英語を手伝えます。\nThe teacher asks [[them]] a question.|先生は彼らに質問します。\nLet's watch the performer with [[her]].|彼女と一緒にその演者を見ましょう。\nHe tells [[me]] about British culture.|彼は私にイギリス文化について話します。\nPlease tell [[us]] more about rakugo.|落語についてもっと私たちに教えてください。\n@u6-part2\n[[Whose]] ticket is this?|これは誰のチケットですか。\nIt is [[mine]].|それは私のものです。\nIs that pen [[yours]]?|あのペンはあなたのものですか。\nThe red bag is [[hers]].|その赤いかばんは彼女のものです。\n[[Whose]] notebook is on the desk?|机の上のノートは誰のものですか。\nThat umbrella is [[his]].|あの傘は彼のものです。\nThis camera is [[ours]].|このカメラは私たちのものです。\n[[Whose]] books are these?|これらは誰の本ですか。\nThe tickets are [[theirs]].|そのチケットは彼らのものです。\nMy watch is old, but [[yours]] is new.|私の時計は古いですが、あなたのものは新しいです。\n@u6-part3\n[[Which]] do you speak, English or Japanese?|英語と日本語のどちらを話しますか。\n[[Which]] book do you want?|あなたはどちらの本が欲しいですか。\n[[Which]] ticket is yours?|どちらのチケットがあなたのものですか。\nI [[like]] this performer better.|私はこちらの演者の方が好きです。\n[[Which]] story is your favorite?|どちらの物語が好きですか。\nWe [[watch]] rakugo in the school hall.|私たちは学校のホールで落語を見ます。\n[[Which]] language does she use?|彼女はどの言語を使いますか。\nI [[choose]] the blue ticket.|私は青いチケットを選びます。\n[[Which]] picture shows the performer?|どちらの写真がその演者を示していますか。\nWe [[enjoy]] the English performance.|私たちは英語の公演を楽しみます。\n@u7-part1\nI [[am watching]] an online tour now.|私は今オンラインツアーを見ています。\nWe [[are looking]] at pictures of London.|私たちはロンドンの写真を見ています。\nMy friends [[are planning]] a trip to the U.K.|友達はイギリスへの旅行を計画しています。\nI [[am reading]] a map of London.|私はロンドンの地図を読んでいます。\nWe [[are waiting]] for the online guide.|私たちはオンラインガイドを待っています。\nI [[am enjoying]] the tour with my classmates.|私はクラスメートとツアーを楽しんでいます。\nMy sister [[is watching]] the screen.|妹は画面を見ています。\nOur teacher [[is speaking]] to the guide.|先生はガイドと話しています。\nWe [[are learning]] about British history.|私たちはイギリスの歴史を学んでいます。\nI [[am taking]] notes during the tour.|私はツアー中にメモを取っています。\n@u7-part2\nMy friend [[is buying]] a souvenir.|友達はお土産を買っています。\nThe guide [[is showing]] us a market.|ガイドは私たちに市場を見せています。\nThe tourists [[are walking]] around London.|観光客はロンドンを歩いています。\nMy brother [[is taking]] pictures.|兄は写真を撮っています。\nShe [[is looking]] at a famous clock.|彼女は有名な時計を見ています。\nWe [[are visiting]] a museum online.|私たちはオンラインで博物館を訪れています。\nA man [[is selling]] postcards at the market.|男性が市場で絵はがきを売っています。\nMy classmates [[are talking]] about souvenirs.|クラスメートはお土産について話しています。\nThe guide [[is standing]] near the station.|ガイドは駅の近くに立っています。\nHe [[is carrying]] a small bag.|彼は小さなかばんを運んでいます。\n@u7-part3\n[[Are]] you walking around a lake?|あなたは湖の周りを歩いていますか。\n[[What]] are people doing?|人々は何をしていますか。\nThey [[are taking]] pictures.|彼らは写真を撮っています。\nMy friends [[are listening]] to the guide.|友達はガイドの話を聞いています。\n[[Is]] your brother watching TV?|あなたの兄はテレビを見ていますか。\nWe [[are learning]] about famous places.|私たちは有名な場所について学んでいます。\nShe [[is asking]] the guide a question.|彼女はガイドに質問しています。\n[[Are]] the students enjoying the tour?|生徒たちはツアーを楽しんでいますか。\nHe [[is not using]] his phone now.|彼は今電話を使っていません。\nThe tourists [[are waiting]] for the bus.|観光客はバスを待っています。\n@u8-part1\nShe [[wants to]] help people in need.|彼女は困っている人々を助けたいです。\nWe [[try to]] learn about life in Kenya.|私たちはケニアでの生活について学ぼうとします。\nThe volunteer [[wants to]] teach English.|そのボランティアは英語を教えたいです。\nOur class [[tries to]] collect useful books.|私たちのクラスは役立つ本を集めようとします。\nI [[want to]] learn about African cultures.|私はアフリカの文化を学びたいです。\nHe [[tries to]] do his best every day.|彼は毎日最善を尽くそうとします。\nWe [[want to]] respect different traditions.|私たちは異なる伝統を尊重したいです。\nMy friend [[tries to]] help younger children.|友達は年下の子どもたちを助けようとします。\nI [[want to]] become a volunteer.|私はボランティアになりたいです。\nWe [[try to]] understand the water problem.|私たちは水の問題を理解しようとします。\n@u8-part2\nThe children [[look]] happy.|子どもたちは幸せそうに見えます。\nThis reusable bag [[looks]] useful.|この再利用できるかばんは便利そうに見えます。\nThe river [[looks]] clean.|川はきれいに見えます。\nThe classroom [[looks]] bright.|その教室は明るく見えます。\nThe new paper straw [[looks]] strong.|その新しい紙ストローは丈夫そうに見えます。\nOur school [[tries to]] reduce plastic waste.|私たちの学校はプラスチックごみを減らそうとします。\nMy friend [[wants to]] use less plastic.|友達はプラスチックを減らしたいです。\nThe students [[look]] tired after the event.|生徒たちは行事の後で疲れて見えます。\nThis poster [[looks]] beautiful.|このポスターは美しく見えます。\nWe [[want to]] protect our environment.|私たちは環境を守りたいです。\n@u8-part3\nWe [[want to]] save water every day.|私たちは毎日水を節約したいです。\nThe class [[tries to]] collect old paper.|クラスは古紙を集めようとします。\nI [[want to]] make a poster about recycling.|私はリサイクルについてポスターを作りたいです。\nOur friends [[try to]] use reusable bottles.|友達は再利用できるボトルを使おうとします。\nThe students [[look]] excited about the project.|生徒たちはその企画にわくわくしているように見えます。\nWe [[want to]] share our ideas with others.|私たちは自分たちの考えを他の人々と共有したいです。\nShe [[tries to]] teach younger students.|彼女は年下の生徒に教えようとします。\nThe garden [[looks]] clean after our work.|私たちの活動の後、庭はきれいに見えます。\nI [[want to]] help people in other countries.|私は他の国の人々を助けたいです。\nWe [[try to]] do one small thing every day.|私たちは毎日小さなことを一つしようとします。\n@u9-part1\nI [[stayed]] in Canada last winter.|私は去年の冬カナダに滞在しました。\nMy family [[visited]] a small town.|家族は小さな町を訪れました。\nWe [[played]] ice hockey on Christmas Day.|私たちはクリスマスにアイスホッケーをしました。\nI [[watched]] a snowboarding event.|私はスノーボードの競技を見ました。\nMy brother [[relaxed]] at home.|兄は家でゆっくりしました。\nWe [[enjoyed]] the winter vacation.|私たちは冬休みを楽しみました。\nMy parents [[cooked]] dinner together.|両親は一緒に夕食を作りました。\nI [[walked]] in the snow.|私は雪の中を歩きました。\nWe [[talked]] about our winter memories.|私たちは冬の思い出について話しました。\nMy friend [[played]] with a dog.|友達は犬と遊びました。\n@u9-part2\nI [[went]] to my grandparents' house.|私は祖父母の家へ行きました。\nWe [[ate]] rice cakes on New Year's Day.|私たちは元日に餅を食べました。\n[[Did]] you enjoy the vacation?|あなたは休暇を楽しみましたか。\nMy friend [[wrote]] a New Year's card.|友達は年賀状を書きました。\nI [[saw]] a traditional dance.|私は伝統的な踊りを見ました。\nMy father [[made]] a special meal.|父は特別な料理を作りました。\n[[Did]] you visit a shrine?|あなたは神社を訪れましたか。\nWe [[had]] a wonderful holiday.|私たちはすばらしい休暇を過ごしました。\nI [[met]] my cousins last week.|私は先週いとこたちに会いました。\nMy family [[went]] to the park.|家族は公園へ行きました。\n@u9-part3\nI [[did not]] buy a good luck charm.|私はお守りを買いませんでした。\nWe [[did not]] go snowboarding.|私たちはスノーボードに行きませんでした。\n[[Did]] you eat rice cakes?|あなたはお餅を食べましたか。\nMy brother [[did not]] stay at home.|兄は家にいませんでした。\n[[Did]] she visit her grandparents?|彼女は祖父母を訪れましたか。\nI [[did not]] watch TV yesterday.|私は昨日テレビを見ませんでした。\n[[Did]] your family travel during winter vacation?|あなたの家族は冬休みに旅行しましたか。\nMy friends [[did not]] play ice hockey.|友達はアイスホッケーをしませんでした。\n[[Did]] you make a New Year's card?|あなたは年賀状を作りましたか。\nWe [[did not]] eat at the restaurant.|私たちはそのレストランで食事をしませんでした。\n@u10-part1\nI [[was]] nervous during the contest.|私はコンテスト中緊張していました。\nMy classmates [[were]] happy after the game.|クラスメートは試合後にうれしそうでした。\n[[Were]] you tired yesterday?|あなたは昨日疲れていましたか。\nOur teacher [[was]] proud of us.|先生は私たちを誇りに思っていました。\nWe [[were]] in the music room.|私たちは音楽室にいました。\nI [[was]] happy to see my friends.|私は友達に会えてうれしかったです。\nMy brother [[was]] a first-year student last year.|兄は去年1年生でした。\nThe students [[were]] busy in the morning.|生徒たちは朝忙しかったです。\n[[Was]] the test difficult?|試験は難しかったですか。\nOur class [[was]] excited about the trip.|クラスは旅行を楽しみにしていました。\n@u10-part2\nI [[was playing]] soccer then.|私はそのときサッカーをしていました。\nMy sister [[was reading]] a book.|妹は本を読んでいました。\nMy friends [[were studying]] in the library.|友達は図書館で勉強していました。\nWe [[were singing]] on the stage.|私たちはステージで歌っていました。\nMy father [[was cooking]] dinner.|父は夕食を作っていました。\nThe students [[were watching]] a video.|生徒たちは動画を見ていました。\nI [[was listening]] to music at nine.|私は9時に音楽を聞いていました。\nMy brother [[was running]] in the park.|兄は公園で走っていました。\nWe [[were taking]] pictures of the school.|私たちは学校の写真を撮っていました。\nOur teacher [[was talking]] to a student.|先生は生徒と話していました。\n@u10-part3\nThere [[was]] a campground near the lake.|湖の近くにキャンプ場がありました。\nThere [[were]] many students in the hall.|ホールにはたくさんの生徒がいました。\n[[Was]] there a park near your house?|あなたの家の近くに公園はありましたか。\nThere [[were]] two new books on the desk.|机の上には新しい本が2冊ありました。\nThere [[was]] a big tree behind the school.|学校の後ろに大きな木がありました。\n[[Were]] there any shops near the station?|駅の近くに店はありましたか。\nThere [[was]] an interesting picture on the wall.|壁には面白い絵がありました。\nThere [[were]] three teachers at the event.|その行事には先生が3人いました。\n[[Was]] there a river near the campground?|キャンプ場の近くに川はありましたか。\nThere [[were]] many memories from our first year.|1年目にはたくさんの思い出がありました。";
const VOCAB_RAW = "u0-review|hello=こんにちは;name=名前;school=学校;friend=友達;music=音楽;soccer=サッカー;student=生徒;tennis=テニス;notebook=ノート;classroom=教室;teacher=先生;bag=かばん\nu1-part1|Edward=エドワード;friend=友達;green=緑の;tea=お茶;sweets=お菓子;school=学校;club=部活;student=生徒;name=名前;Japan=日本;Africa=アフリカ;call=呼ぶ\nu1-part2|rugby=ラグビー;sister=姉妹;basketball=バスケットボール;soccer=サッカー;friend=友達;sport=スポーツ;tennis=テニス;team=チーム;practice=練習する;school=学校;Sunday=日曜日;volleyball=バレーボール\nu1-part3|anime=アニメ;fan=ファン;picture=絵;character=キャラクター;cat=猫;lesson=授業;art=美術;club=部活;animal=動物;friend=友達;school=学校;draw=描く\nu2-part1|teacher=先生;Canada=カナダ;class=クラス;soccer=サッカー;food=食べ物;friend=友達;student=生徒;singer=歌手;classmate=クラスメート;America=アメリカ;English=英語;school=学校\nu2-part2|gyoza=餃子;hiragana=ひらがな;Chinese=中国語;father=父;swim=泳ぐ;song=歌;parent=親;piano=ピアノ;sister=姉妹;picture=絵;school=学校;box=箱\nu2-part3|pen=ペン;notebook=ノート;bag=かばん;bird=鳥;book=本;classroom=教室;pencil=鉛筆;desk=机;library=図書館;picture=写真;school=学校;teacher=先生\nu3-part1|character=キャラクター;favorite=お気に入りの;animal=動物;panda=パンダ;symbol=象徴;teacher=先生;mascot=マスコット;school=学校;picture=絵;library=図書館;friend=友達;study=勉強する\nu3-part2|school=学校;walk=歩く;tennis=テニス;English=英語;computer=コンピューター;bike=自転車;lesson=授業;friend=友達;gym=体育館;Friday=金曜日;Monday=月曜日;practice=練習する\nu3-part3|park=公園;station=駅;classroom=教室;library=図書館;gym=体育館;hallway=廊下;music=音楽;ground=校庭;game=試合;museum=博物館;teacher=先生;friend=友達\nu4-part1|rabbit=ウサギ;puppy=子犬;cat=猫;student=生徒;friend=友達;Zealand=ジーランド;book=本;desk=机;sheep=羊;picture=写真;school=学校;international=国際的な\nu4-part2|time=時間;sport=スポーツ;soccer=サッカー;lunch=昼食;meeting=会議;noon=正午;class=授業;basketball=バスケットボール;Tuesday=火曜日;music=音楽;teacher=先生;clock=時計\nu4-part3|front=前;nervous=緊張した;brave=勇敢な;picture=絵;Zealand=ジーランド;classmate=クラスメート;hallway=廊下;notebook=ノート;presentation=発表;teacher=先生;listen=聞く;speak=話す\nu5-part1|brother=兄弟;Hawaii=ハワイ;blog=ブログ;place=場所;beach=浜辺;picture=写真;ocean=海;friend=友達;summer=夏;English=英語;guide=ガイド;week=週\nu5-part2|brother=兄弟;beach=浜辺;Tokyo=東京;friend=友達;teacher=先生;school=学校;fish=魚;island=島;life=生活;bicycle=自転車;Sunday=日曜日;swimming=水泳\nu5-part3|Japanese=日本語;brother=兄弟;baseball=野球;school=学校;teacher=先生;station=駅;music=音楽;book=本;father=父;mother=母;breakfast=朝食;Sunday=日曜日\nu6-part1|performer=演者;story=物語;ticket=チケット;show=公演;English=英語;teacher=先生;culture=文化;rakugo=落語;question=質問;friend=友達;British=イギリスの;student=生徒\nu6-part2|ticket=チケット;pen=ペン;bag=かばん;notebook=ノート;desk=机;umbrella=傘;camera=カメラ;book=本;watch=時計;friend=友達;school=学校;mine=私のもの\nu6-part3|English=英語;Japanese=日本語;book=本;ticket=チケット;performer=演者;story=物語;rakugo=落語;school=学校;hall=ホール;language=言語;picture=写真;performance=公演\nu7-part1|online=オンライン;tour=ツアー;London=ロンドン;friend=友達;trip=旅行;map=地図;guide=ガイド;screen=画面;teacher=先生;history=歴史;note=メモ;classmate=クラスメート\nu7-part2|souvenir=お土産;market=市場;tourist=観光客;London=ロンドン;brother=兄弟;picture=写真;clock=時計;museum=博物館;postcard=絵はがき;station=駅;bag=かばん;guide=ガイド\nu7-part3|lake=湖;people=人々;picture=写真;friend=友達;guide=ガイド;brother=兄弟;student=生徒;place=場所;phone=電話;tour=ツアー;bus=バス;question=質問\nu8-part1|Kenya=ケニア;Africa=アフリカ;people=人々;volunteer=ボランティア;English=英語;book=本;culture=文化;tradition=伝統;student=生徒;water=水;problem=問題;friend=友達\nu8-part2|children=子どもたち;bag=かばん;river=川;classroom=教室;straw=ストロー;paper=紙;plastic=プラスチック;waste=ごみ;poster=ポスター;environment=環境;school=学校;friend=友達\nu8-part3|water=水;paper=紙;poster=ポスター;recycling=リサイクル;bottle=ボトル;student=生徒;project=企画;garden=庭;country=国;friend=友達;school=学校;environment=環境\nu9-part1|Canada=カナダ;winter=冬;family=家族;town=町;hockey=ホッケー;Christmas=クリスマス;snowboarding=スノーボード;brother=兄弟;vacation=休暇;snow=雪;friend=友達;dog=犬\nu9-part2|grandparent=祖父母;house=家;cake=餅;holiday=休暇;dance=踊り;meal=食事;shrine=神社;card=カード;cousin=いとこ;park=公園;father=父;friend=友達\nu9-part3|charm=お守り;snowboarding=スノーボード;cake=餅;brother=兄弟;grandparent=祖父母;television=テレビ;winter=冬;vacation=休暇;hockey=ホッケー;restaurant=レストラン;family=家族;card=カード\nu10-part1|contest=コンテスト;student=生徒;classmate=クラスメート;game=試合;teacher=先生;music=音楽;room=部屋;brother=兄弟;test=試験;trip=旅行;school=学校;morning=朝\nu10-part2|soccer=サッカー;sister=姉妹;book=本;friend=友達;library=図書館;stage=ステージ;father=父;dinner=夕食;video=動画;music=音楽;park=公園;teacher=先生\nu10-part3|campground=キャンプ場;lake=湖;student=生徒;hall=ホール;park=公園;house=家;book=本;desk=机;tree=木;station=駅;teacher=先生;wall=壁";
const PAGE_MAP = { 0:[6],1:[12,14,16],2:[20,22,24],3:[32,34,36],4:[44,46,48],5:[62,64,66],6:[72,74,76],7:[82,84,86],8:[92,94,96],9:[104,106,108],10:[114,116,118] };
const SOURCE = window.COPEAK_NH_AUDIT?.grade1 || {};
const lines = Object.create(null);
let current = '';
for(const rawLine of RAW.split(/\r?\n/)){
  const line=rawLine.trim();if(!line)continue;
  if(line.startsWith('@')){current=line.slice(1);lines[current]=[];continue}
  const at=line.indexOf('|');if(!current||at<1)continue;
  const marked=line.slice(0,at);
  const match=marked.match(/\[\[([^\]]+)\]\]/);
  if(!match)throw new Error('Missing grammar target: '+current+' '+line);
  const target=match[1];
  const en=marked.replace(/\[\[([^\]]+)\]\]/g,'$1');
  lines[current].push({en,jp:line.slice(at+1),target});
}
const related=Object.create(null);
for(const entry of VOCAB_RAW.split(/\r?\n/)){
 const line=entry.trim();if(!line)continue;
 const pos=line.indexOf('|');if(pos<0)continue;
 const id=line.slice(0,pos);
 related[id]=line.slice(pos+1).split(';').map(z=>{const k=z.indexOf('=');return{word:z.slice(0,k),jp:z.slice(k+1)}});
}
const grammarOptions={
 'am':['is','are','be'],'is':['am','are','be'],'are':['is','am','be'],'am not':['is not','are not','do not'],
 'do':['does','did','is'],'Do':['Does','Did','Is'],'do not':['does not','did not','is not'],
 'does':['do','did','is'],'Does':['Do','Did','Is'],'does not':['do not','did not','is not'],
 'have':['has','had','having'],'has':['have','had','having'],
 'can':['cans','can to','could to'],'Can':['Does','Do','Is'],'cannot':['can not to','does not can','can to not'],
 'was':['were','is','am'],'were':['was','are','be'],'Was':['Were','Is','Do'],'Were':['Was','Are','Did'],
 'did':['does','do','is'],'Did':['Do','Does','Is'],'did not':['does not','do not','was not'],
 'how many':['How much','How often','How old'],'How many':['How much','How often','How old'],
 'what time':['What day','How often','How many'],'What time':['What day','How often','How many'],
 'what':['When','Where','Who'],'What':['When','Where','Who'],
 'who':['What','Where','When'],'Who':['What','Where','When'],
 'how':['Who','Where','When'],'How':['Who','Where','When'],
 'when':['How','Where','Who'],'When':['How','Where','Who'],
 'where':['What','Who','When'],'Where':['What','Who','When'],
 'which':['What','Who','Where'],'Which':['What','Who','Where'],
 'whose':['Who','Which','What'],'Whose':['Who','Which','What'],
 'this':['These','Those','They'],'This':['These','Those','They'],
 'that':['Those','These','They'],'That':['Those','These','They'],
 'him':['he','his','they'],'her':['she','hers','he'],'us':['we','our','they'],
 'me':['I','my','mine'],'you':['your','yours','he'],
 'mine':['my','me','I'],'yours':['your','you','mine'],
 'hers':['her','she','his'],'his':['him','he','her'],
 'ours':['our','us','we'],'theirs':['their','them','they'],
 'like':['likes','liking','liked'],'likes':['like','liking','liked'],
 'love':['loves','loving','loved'],'call':['calls','calling','called'],
 'have to':['has to','having to','have must'],
 'want to':['wants to','want','wanting to'],'wants to':['want to','wants','wanted to'],
 'try to':['tries to','try','trying to'],'tries to':['try to','tries','tried to'],
 'look':['looks','looking','looked'],'looks':['look','looking','looked'],
 "Don't":["Doesn't","Didn't","Not"],'Be':['Is','Are','Being'],
 'Come':['Comes','Coming','Came'],'Look':['Looks','Looking','Looked'],
 'Enjoy':['Enjoys','Enjoying','Enjoyed'],'Listen':['Listens','Listening','Listened'],
 'Open':['Opens','Opening','Opened'],'Speak':['Speaks','Speaking','Spoke'],
 'Nice':['Nicely','Nicer','Nicest'],
 'am watching':['is watching','are watching','watching'],
 'am reading':['is reading','are reading','reading'],
 'am enjoying':['is enjoying','are enjoying','enjoying'],
 'am taking':['is taking','are taking','taking'],
 'are looking':['is looking','am looking','looking'],
 'are planning':['is planning','am planning','planning'],
 'are waiting':['is waiting','am waiting','waiting'],
 'are learning':['is learning','am learning','learning'],
 'are walking':['is walking','am walking','walking'],
 'are visiting':['is visiting','am visiting','visiting'],
 'are talking':['is talking','am talking','talking'],
 'are taking':['is taking','am taking','taking'],
 'are listening':['is listening','am listening','listening'],
 'is asking':['are asking','am asking','asking'],
 'is not using':['are not using','am not using','not using'],
 'is watching':['are watching','am watching','watching'],
 'is buying':['are buying','am buying','buying'],
 'is showing':['are showing','am showing','showing'],
 'is taking':['are taking','am taking','taking'],
 'is looking':['are looking','am looking','looking'],
 'is selling':['are selling','am selling','selling'],
 'is standing':['are standing','am standing','standing'],
 'is carrying':['are carrying','am carrying','carrying'],
 'was playing':['were playing','is playing','playing'],
 'was reading':['were reading','is reading','reading'],
 'was cooking':['were cooking','is cooking','cooking'],
 'was listening':['were listening','is listening','listening'],
 'was running':['were running','is running','running'],
 'was talking':['were talking','is talking','talking'],
 'were studying':['was studying','are studying','studying'],
 'were singing':['was singing','are singing','singing'],
 'were watching':['was watching','are watching','watching'],
 'were taking':['was taking','are taking','taking'],
 'stayed':['stay','stays','staying'],'visited':['visit','visits','visiting'],
 'played':['play','plays','playing'],'watched':['watch','watches','watching'],
 'relaxed':['relax','relaxes','relaxing'],'enjoyed':['enjoy','enjoys','enjoying'],
 'cooked':['cook','cooks','cooking'],'walked':['walk','walks','walking'],
 'talked':['talk','talks','talking'],
 'went':['go','goes','going'],'ate':['eat','eats','eating'],
 'wrote':['write','writes','writing'],'saw':['see','sees','seeing'],
 'made':['make','makes','making'],'had':['have','has','having'],
 'met':['meet','meets','meeting'],
 'writes':['write','wrote','writing'],'enjoys':['enjoy','enjoyed','enjoying'],
 'works':['work','worked','working'],'takes':['take','took','taking'],
 'reads':['read','reading','reader'],'visits':['visit','visited','visiting'],
 'speaks':['speak','spoke','speaking'],'starts':['start','started','starting'],
 'ends':['end','ended','ending'],
 'plays':['play','played','playing'],'watch':['watches','watched','watching'],
 'draw':['draws','drew','drawing'],'study':['studies','studied','studying'],
 'walk':['walks','walked','walking'],'ride':['rides','rode','riding'],
 'come':['comes','came','coming'],'meet':['meets','met','meeting'],
 'practice':['practices','practiced','practicing'],
 'talk':['talks','talked','talking'],'listen':['listens','listened','listening'],
 'speak':['speaks','spoke','speaking'],'play':['plays','played','playing'],
 'want':['wants','wanted','wanting'],'read':['reads','reading','reader'],
 'choose':['chooses','chose','choosing'],'show':['shows','showed','showing']
};
function grammarChoices(target){
  const first=grammarOptions[target]||grammarOptions[target.toLowerCase()];
  if(first) return [target,...first];
  const w=target.toLowerCase();
  if(/^[a-z]{4,}s$/.test(w))return [target,target.slice(0,-1),target+'es',target+'ing'];
  if(/^[a-z]{3,}ed$/.test(w))return [target,target.slice(0,-2),target.slice(0,-1)+'s',target+'ing'];
  return [target,'am','is','are'].filter((x,i,a)=>a.indexOf(x)===i);
}
function wordsInSection(sec,unit){
 const verified=SOURCE[unit+':'+sec.title]?.words||[];
 const found=new Set(),items=[];
 const push=(word,jp,source)=>{
  const w=String(word||'').replace(/\([^)]*\)/g,'').trim(),key=w.toLowerCase();
  if(!w||!jp||found.has(key)||key.length<2)return;
  found.add(key);items.push({word:w,jp,source});
 };
 for(const w of verified)push(w.en,w.ja,'教科書 New Words（照合済み）');
 for(const w of related[sec.id]||[])push(w.word,w.jp,'同じテーマの追加練習語（独自）');
 return items;
}
const tokenise=en=>en.match(/[A-Za-z]+(?:['’][A-Za-z]+)?|[0-9]+|[.,!?]/g)||[];
function uniqueChoices(answer,all,pos){
 const arr=[answer];
 for(let i=1;i<=all.length&&arr.length<4;i++){
   const other=all[(pos+i*3)%all.length];if(other&&!arr.includes(other))arr.push(other);
 }
 for(const t of ['学校で本を読みました。','公園で犬を見ました。','駅で電車を待ちました。'])
   if(arr.length<4&&!arr.includes(t))arr.push(t);
 return arr.slice(0,4);
}
for(const [unitStr,pages] of Object.entries(PAGE_MAP)){
 const unit=Number(unitStr);SECTION_CATALOG[unitStr]=[];SECTION_PRACTICE[unitStr]=Object.create(null);
 for(let i=0;i<pages.length;i++){
  const title=unit===0?'Unit 0 復習':'Part '+(i+1);
  const id=unit===0?'u0-review':'u'+unit+'-part'+(i+1);
  const verified=!!SOURCE[unit+':'+title]?.words?.length;
  const sec={id,title,code:unit===0?'review':'part'+(i+1),pageStart:pages[i],pageEnd:pages[i]+1,verified,
    wordCount:SOURCE[unit+':'+title]?.words?.length||0};
  SECTION_CATALOG[unitStr].push(sec);
  const cards=lines[id]||[];
  const pool=Object.fromEntries(['vocab','listening','meaning','grammar','speaking','spelling','ordering','reading'].map(x=>[x,[]]));
  if(cards.length<10)throw new Error('Part has fewer than 10 original sentences: '+id);
  SECTION_PRACTICE[unitStr][id]=pool;
  const words=wordsInSection(sec,unit);
  // Every section has ten distinct vocabulary checks.  Related words are marked explicitly.
  for(const w of words.slice(0,10)){
    pool.vocab.push({id:id+'-v'+pool.vocab.length,word:w.word,jp:w.jp,source:w.source,page:pages[i]});
  }
  const spelling=words.filter(w=>/^[a-z]{3,}$/i.test(w.word));
  for(const w of spelling.slice(0,10)){
    pool.spelling.push({id:id+'-sp'+pool.spelling.length,word:w.word.toLowerCase(),jp:w.jp,page:pages[i]});
  }
  const translations=cards.map(c=>c.jp);
  for(let k=0;k<cards.length;k++){
    const c=cards[k],n=id+'-'+String(k+1).padStart(2,'0');
    const grammar=grammarChoices(c.target);
    if(grammar.length<3)throw new Error('Invalid grammar options: '+n);
    const sentence=c.en.replace(c.target,'___');
    const choices=uniqueChoices(c.jp,translations,k);
    pool.listening.push({id:n+'-l',tts:c.en,prompt:'聞こえた英文に合う意味',choices,correct:0,page:pages[i]});
    pool.meaning.push({id:n+'-m',en:c.en,prompt:'この英文の意味は？',choices,correct:0,page:pages[i]});
    pool.grammar.push({id:n+'-g',sentence,choices:grammar.slice(0,4),correct:0,
      explain:'正解：'+c.target+'。英文全体の形と意味を確認しましょう。',page:pages[i]});
    pool.speaking.push({id:n+'-s',en:c.en,jp:c.jp,page:pages[i]});
    pool.ordering.push({id:n+'-o',jp:c.jp,answer:tokenise(c.en),page:pages[i]});
    const next=cards[(k+1)%cards.length];
    pool.reading.push({id:n+'-r',label:title+'／教科書テーマに沿った独自短文',
      en:c.en+' '+next.en,jp:c.jp+' '+next.jp,
      question:'最初の文の内容に合うのは？',choices,correct:0,
      sourceQuestion:false,page:pages[i]});
  }
  if(pool.vocab.length<10||pool.spelling.length<10)
    console.warn('Grade 1 vocabulary or spelling below target: '+id,pool.vocab.length,pool.spelling.length);
 }
}
})();
