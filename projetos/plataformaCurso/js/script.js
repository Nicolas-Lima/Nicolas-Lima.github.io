const conteudo = document.querySelector("#conteudo");
let divAtivada = false;
let musicaTocando = false;
const listaMusicas = [];
let isTimerActive = false;
let timerFinished = true;
let volumeMusica = 0.1;
let lofiMp3Element = null;

const musicas = {
    "10": "Lofi.mp3",
    "1": "Compre bens materiais e dane...mp4",
    "2": "Adestramento de namorada e de shih tzu (...mp4",
    "3": "Venda seu voto (127)  Saco Cheio Podcas...mp4",
    "4": "Fique na zona de conforto (111)  Saco Ch...mp4",
    "5": "Programa do Diguinho.mp4",
    "6": "Viva o dia de hoje como se voc\u00ea fosse vi...mp4",
    "7": "Angra - Rebirth.mp4",
    "8": "Nirvana - Nevermind.mp4",
    "9": "Podcast.mp4",
    "11": "Chuck Berry - Johnny B Goode (1959).mp3",
    "12": "Imagine Dragons - Whatever It Takes (Official Music Video).mp3",
    "13": "Cody Jinks - Must Be The Whisky - Legendado.mp3",
    "14": "Warriors (ft. Imagine Dragons) _ Worlds 2014 - League of Legends.mp3",
    "15": "Psycho.mp3",
    "16": "The White Buffalo At - Guitar Center 'The Whistler'.mp3",
    "17": "Red Hot Chili Peppers - Dark Necessities [Official Music Video].mp3",
    "18": "Avicii - Wake Me Up (Lyric Video).mp3",
    "19": "Eu E Voc\u00ea Sempre - Live from Porto Alcoba\u00e7a, S\u00e3o Paulo, Brazil_2006 [Music Video].mp3",
    "20": "ZZ Top - La Grange (Live From Gruene Hall) _ Stages.mp3",
    "21": "Alice Cooper - (Intro) - Poison.mp3",
    "22": "Eminem - Godzilla ft. Juice WRLD (Directed by Cole Bennett).mp3",
    "23": "Humberto Gessinger - Infinita Highway + At\u00e9 O Fim (DVD Ao Vivo Pra Caramba).mp3",
    "24": "Shoot to Thrill.mp3",
    "25": "Toto - Hold The Line (Official Video).mp3",
    "26": "The Cure - Pictures Of You.mp3",
    "27": "Black Alien - Mister Niter\u00f3i.mp3",
    "28": "O Telefone Tocou Novamente.mp3",
    "29": "Avicii - Waiting For Love.mp3",
    "30": "Stone Sour - Through the Glass (acoustic).mp3",
    "31": "Aerosmith - Cryin' (Official Music Video).mp3",
    "32": "Numb [Official Music Video] - Linkin Park.mp3",
    "33": "Falc\u00e3o - No Cume.mp3",
    "34": "Foo Fighters - Best Of You (Official Music Video).mp3",
    "35": "Gotye performing 'Somebody That I Used To Know' Live on KCRW.mp3",
    "36": "Hoobastank - The Reason (Official Music Video).mp3",
    "37": "The Trooper (2015 Remaster).mp3",
    "38": "Aquarela.mp3",
    "39": "AC_DC - Girls Got Rhythm (1979) \u2022 TopPop.mp3",
    "40": "Formula Ma\u0301gica de Paz.mp3",
    "41": "Put Your Head On My Shoulder.mp3",
    "42": "Eric Clapton - Layla (Live).mp3",
    "43": "Bon Jovi - You Give Love A Bad Name (Official Music Video).mp3",
    "44": "MANOWAR - Warriors Of The World United (Live) - OFFICIAL VIDEO.mp3",
    "45": "Por Causa De Voc\u00ea, Menina.mp3",
    "46": "Carolina IV.mp3",
    "47": "Outras Freq\u00fc\u00eancias (Ao Vivo).mp3",
    "48": "Bon Jovi - Livin' On A Prayer.mp3",
    "49": "Pharrell Williams - Happy (Video).mp3",
    "50": "Guns N' Roses - Don't Cry.mp3",
    "51": "What I've Done [Official Music Video] - Linkin Park.mp3",
    "52": "Vida Loka, Pt. 1.mp3",
    "53": "Eminem - Sing For The Moment (Official Music Video).mp3",
    "54": "Calvin Harris - Blame ft. John Newman.mp3",
    "55": "The Weeknd - The Hills (Official Video).mp3",
    "56": "The Woods.mp3",
    "57": "Toto - Africa (Official HD Video).mp3",
    "58": "AWOLNATION - Sail (Official Music Video).mp3",
    "59": "Hallowed Be Thy Name (2015 Remaster).mp3",
    "60": "Papercut [Official HD Music Video] - Linkin Park.mp3",
    "61": "Arlindo Cruz - Meu Lugar (Ao Vivo).mp3",
    "62": "The White Buffalo - i Am The Light ( Lyrics ).mp3",
    "63": "Highwayman.mp3",
    "64": "Jonas Blue - Fast Car ft. Dakota (Official Video).mp3",
    "65": "Maroon 5 - Memories (Official Video).mp3",
    "66": "I Am the Highway.mp3",
    "67": "Dire Straits - Sultans Of Swing.mp3",
    "68": "Hey Hey, My My (From 'Sons of Anarchy').mp3",
    "69": "Metallica - Nothing Else Matters (Official Music Video).mp3",
    "70": "3 X 4 (Ao Vivo).mp3",
    "71": "Touch Too Much.mp3",
    "72": "alt-J (\u2206) Breezeblocks.mp3",
    "73": "System Of A Down - Radio_Video (Official Audio).mp3",
    "74": "Lynyrd Skynyrd - Sweet Home Alabama.mp3",
    "75": "Imagine Dragons - Radioactive.mp3",
    "76": "That's Life (Remastered 2008).mp3",
    "77": "\u00c1guas De Mar\u00e7o.mp3",
    "78": "Engenheiros do Hawaii - Refr\u00e3o de Bolero (Acustico MTV).mp3",
    "79": "In The End [Official HD Music Video] - Linkin Park.mp3",
    "80": "Shania Twain - You're Still The One (Tradu\u00e7\u00e3o).mp3",
    "81": "Kygo - Stole The Show (Lyrics) feat. Parson James.mp3",
    "82": "Creedence Clearwater Revival - Fortunate Son.mp3",
    "83": "Hypnotize.mp3",
    "84": "Sad Statue.mp3",
    "85": "System Of A Down - Lonely Day (Official HD Video).mp3",
    "86": "System Of A Down - B.Y.O.B. (Official HD Video).mp3",
    "87": "Eminem - Without Me (Official Music Video).mp3",
    "88": "I Still Belong To You.mp3",
    "89": "Folsom Prison Blues.mp3",
    "90": "Shaaman  - 06.- Lisbon (Angra cover) (live).mp3",
    "91": "Fall Out Boy - Centuries (Official Music Video).mp3",
    "92": "Nothing to Say.mp3",
    "93": "Elvis Presley - Jailhouse Rock (Official Audio).mp3",
    "94": "Kenny Rogers - The Gambler.mp3",
    "95": "Capi\u0301tulo 4, Versi\u0301culo 3.mp3",
    "96": "Aerosmith - Crazy (Official Music Video).mp3",
    "97": "Freedom - Django Unchained.mp3",
    "98": "Kansas - Dust in the Wind (Official Video).mp3",
    "99": "Journey - Don't Stop Believin' (Official Audio).mp3",
    "100": "Raimundos - Mulher de Fases.mp3",
    "101": "Engenheiros do Hawaii - Depois de n\u00f3s (Acutico MTV).mp3",
    "102": "Scorpions - Rock You Like A Hurricane (Official Music Video).mp3",
    "103": "Blackberry Smoke - One Horse Town (Official Acoustic Video).mp3",
    "104": "Stone Sour - Wicked Games (Live Acoustic).mp3",
    "105": "Maneva - Seja Para Mim (Ao Vivo Em S\u00e3o Paulo).mp3",
    "106": "A Revolta Dos D\u00e2ndis Pt. 1 (Ao Vivo).mp3",
    "107": "Spirit In The Sky Norman Greenbaum.mp3",
    "108": "Redbone - Come and Get Your Love (Single Edit - Audio).mp3",
    "109": "The Silver Seas - Catch Yer Own Train (HD) (CC lyrics).mp3",
    "110": "John Legend - All of Me (Official Video).mp3",
    "111": "Vintage Culture, Rooftime - I Will Find (Official Music Video).mp3",
    "112": "What You Won't Do for Love.mp3",
    "113": "Estilo Cachorro.mp3",
    "114": "Toxicity.mp3",
    "115": "The Sound of Silence (Electric Version).mp3",
    "116": "Slipknot - Before I Forget (Official Music Video).mp3",
    "117": "Audioslave - Cochise.mp3",
    "118": "White Lies - To Lose My Life.mp3",
    "119": "Red Hot Chili Peppers - Dani California [Official Music Video].mp3",
    "120": "Avicii - The Nights.mp3",
    "121": "Imagine Dragons - Demons (Official Video).mp3",
    "122": "The Way You Look Tonight (2008 Remastered).mp3",
    "123": "Aloe Blacc - Ticking Bomb (Official Lyric Video).mp3",
    "124": "Dead Or Alive - You Spin Me Round (Like a Record) (Official Video).mp3",
    "125": "Shaman - For Tomorrow [Subbed _ Legendado].mp3",
    "126": "B.Y.O.B..mp3",
    "127": "Engenheiros do Hawaii - Vida real (Acustico MTV).mp3",
    "128": "September.mp3",
    "129": "THE WHITE BUFFALO - 'Wish It Was True' (Official Music Video).mp3",
    "130": "Vance Joy - 'Riptide' Official Video.mp3",
    "131": "SHAMAN_ REASON (VIDEO CLIP).mp3",
    "132": "Trem Das Onze.mp3",
    "133": "Adam Jensen -  The Mystic (Official Audio).mp3",
    "134": "Ozielzinho-Isabella (Cover - Abim ).mp3",
    "135": "Lil Nas X - Old Town Road (NOT YOUR DOPE Remix).mp3",
    "136": "Red Hot Chili Peppers - Can't Stop [Official Music Video].mp3",
    "137": "Eu e voc\u00ea sempre (Ao vivo).mp3",
    "138": "Five Finger Death Punch - Wrong Side Of Heaven.mp3",
    "139": "Have You Ever Seen The Rain.mp3",
    "140": "So Far Away (Remastered 1996).mp3",
    "141": "Queen - Somebody To Love (Official Video).mp3",
    "142": "Robin Schulz - Sugar (feat. Francesco Yates) (OFFICIAL MUSIC VIDEO).mp3",
    "143": "Jesus Chorou.mp3",
    "144": "Led Zeppelin - Stairway To Heaven (Official Audio).mp3",
    "145": "Faint [Official Music Video] - Linkin Park.mp3",
    "146": "Survivor - Burning heart (Rocky IV) HQ.mp3",
    "147": "Terra De Gigantes _ N\u00fameros (Ao Vivo).mp3",
    "148": "Day Is Gone (from Sons of Anarchy).mp3",
    "149": "Dreams (2004 Remaster).mp3",
    "150": "Kungs vs Cookin\u2019 on 3 Burners - This Girl (Official Music Video).mp3",
    "151": "Eric Clapton - Change The World.mp3",
    "152": "Imagine Dragons - On Top Of The World (Official Music Video).mp3",
    "153": "Joan Osborne - One Of Us (Official Music Video).mp3",
    "154": "Kool & The Gang - Get Down On It (Official Video).mp3",
    "155": "Red Hot Chili Peppers - Snow (Hey Oh) (Official Music Video).mp3",
    "156": "Skies on Fire.mp3",
    "157": "Rock and Roll Ain't Noise Pollution.mp3",
    "158": "I-E-A-I-A-I-O.mp3",
    "159": "The Chainsmokers & Coldplay - Something Just Like This (Lyric).mp3",
    "160": "Shawn James \u2013 The Curse of The Fold (Audio) \u2013 The Dark & The Light.mp3",
    "161": "CAN'T STOP THE FEELING! (from DreamWorks Animation's 'TROLLS') (Official Video).mp3",
    "162": "White Lies - Farewell To The Fairground.mp3",
    "163": "The Neighbourhood - Sweater Weather (Official Video).mp3",
    "164": "AC_DC - Back In Black (Official Video).mp3",
    "165": "Engrenagens do Hawaii - Eu Que N\u00e3o Amo Voc\u00ea (Engenheiros do Hawaii Cover) Ao vivo.mp3",
    "166": "Corey Taylor - Snuff (Acoustic).mp3",
    "167": "Tame Impala - The Less I Know the Better (Official Audio).mp3",
    "168": "Coldplay - A Sky Full Of Stars (Official Video).mp3",
    "169": "Seu Jorge - Burguesinha.mp3",
    "170": "Falador Passa Mal.mp3",
    "171": "Red Hot Chili Peppers - Under The Bridge [Official Music Video].mp3",
    "172": "Eric Clapton-My father`s eyes Lyrics.mp3",
    "173": "Still Got The Blues.mp3",
    "174": "Galantis - No Money (Official Video).mp3",
    "175": "Engenheiros do Hawaii - At\u00e9 o fim (Acustico MTV).mp3",
    "176": "'Till I Collapse.mp3",
    "177": "Eu Sou 157.mp3",
    "178": "Sujeito De Sorte.mp3",
    "179": "Lonely Day.mp3",
    "180": "X Ambassadors - Renegades (Lyric Video).mp3",
    "181": "Kanye West - Stronger.mp3",
    "182": "505.mp3",
    "183": "Bon Jovi - It's My Life (Official Music Video).mp3",
    "184": "Black Alien - Babylon By Gus.mp3",
    "185": "Pra n\u00e3o dizer que n\u00e3o falei das flores.mp3",
    "186": "Guns N' Roses - Paradise City.mp3",
    "187": "Heroes of Sand.mp3",
    "188": "Red Hot Chili Peppers - Black Summer (Official Music Video).mp3",
    "189": "R.E.M. - Losing My Religion (Official Music Video).mp3",
    "190": "Engenheiros do Hawaii - Dom Quixote (Acustico MTV).mp3",
    "191": "Quem Nasce para Tatu, Morre Cavando.mp3",
    "192": "The Doors - Riders On The Storm.mp3",
    "193": "The Crew Cuts - Sh Boom Sh Boom.mp3",
    "194": "Aerosmith - Dream On (Official Audio).mp3",
    "195": "Red Army.mp3",
    "196": "Broken Bones.mp3",
    "197": "Eric Clapton[70] 16. Cocaine.mp3",
    "198": "The White Buffalo - The Pilot.mp3",
    "199": "Grover Washington Jr. - Just the Two of Us (feat. Bill Withers) (Official Lyric Video).mp3",
    "200": "Coldplay - Clocks (Official Video).mp3",
    "201": "Nova Era.mp3",
    "202": "Slash ft.Myles Kennedy & The Conspirators - Anastasia _ Live in Sydney.mp3",
    "203": "Fear of the Dark (2015 Remaster).mp3",
    "204": "Give Me the Night.mp3",
    "205": "Iron Maiden - Wasting Love (Official Video).mp3",
    "206": "Big Poppa (2007 Remaster).mp3",
    "207": "Maneva - Saudades Do Tempo (Ao Vivo Em S\u00e3o Paulo).mp3",
    "208": "It's in the Way That You Use It (1999 Remaster).mp3",
    "209": "Negro Drama.mp3",
    "210": "Deixa Acontecer _ Cora\u00e7\u00e3o Radiante _ Compasso Do Amor.mp3",
    "211": "Black Alien - Como Eu Te Quero.mp3",
    "212": "Eric Clapton - I Shot The Sheriff [Crossroads 2010] (Official Live Video).mp3",
    "213": "Ci\u00fame.mp3",
    "214": "New Divide [Official Music Video] - Linkin Park.mp3",
    "215": "Imagine Dragons - Believer (Official Music Video).mp3",
    "216": "The Weeknd - Starboy ft. Daft Punk (Official Video).mp3",
    "217": "The White Buffalo - I Got You ft Audra Mae (Official Video).mp3",
    "218": "Another One Bites The Dust.mp3",
    "219": "MACKLEMORE & RYAN LEWIS - CAN'T HOLD US FEAT. RAY DALTON (OFFICIAL MUSIC VIDEO).mp3",
    "220": "A Vida E\u0301 Desafio.mp3",
    "221": "Surfando Karmas & DNA (Ao Vivo).mp3",
    "222": "The Clash - Should I Stay or Should I Go (Official Audio).mp3",
    "223": "MEDUZA, Goodboys - Piece Of Your Heart (Visualizer).mp3",
    "224": "The White Buffalo - House Of Pain - Tradu\u00e7\u00e3o PT-br.mp3",
    "225": "The White Buffalo - One Lone Night (lyrics).mp3",
    "226": "Metallica - The Unforgiven (Official Music Video).mp3",
    "227": "Black Alien - Caminhos do Destino.mp3",
    "228": "Flo Rida - Whistle [Official Video].mp3",
    "229": "twenty one pilots - Heathens (from Suicide Squad - The Album) [OFFICIAL VIDEO].mp3",
    "230": "Black Sabbath - Iron Man.mp3",
    "231": "Piece of My Heart (Official Audio).mp3",
    "232": "Pink Floyd - Another Brick In The Wall, Part Two (Official Music Video).mp3",
    "233": "Come Join the Murder (From Sons of Anarchy).mp3",
    "234": "Men At Work - Who Can It Be Now (Video Version).mp3",
    "235": "Arctic Monkeys - Fluorescent Adolescent (Official Video).mp3",
    "236": "Exagerado.mp3",
    "237": "Foo Fighters - The Pretender.mp3",
    "238": "Imagine Dragons - It's Time (Official Music Video).mp3",
    "239": "Umaextrapunkprumextrafunk - Black Alien.mp3",
    "240": "AC_DC - Thunderstruck (Official Video).mp3",
    "241": "Guns N' Roses - Sweet Child O' Mine (Official Music Video).mp3",
    "242": "Running Alone.mp3",
    "243": "Audioslave - Show Me How to Live (Video).mp3",
    "244": "While My Guitar Gently Weeps (Taken from Concert For George).mp3",
    "245": "Eminem - The Real Slim Shady (Official Video - Clean Version).mp3",
    "246": "Talking Heads - Psycho Killer.mp3",
    "247": "Dire Straits - Brothers In Arms.mp3",
    "248": "Aerials.mp3",
    "249": "The Outfield - Your Love (Official HD Video).mp3",
    "250": "Gorillaz - Feel Good Inc. (Official Video).mp3",
    "251": "Da Ponte pra Ca\u0301.mp3",
    "252": "Survivor - Eye Of The Tiger (Official HD Video).mp3",
    "253": "Maneva - O Destino N\u00e3o Quis (Ao Vivo Em S\u00e3o Paulo).mp3",
    "254": "Imagine Dragons - Thunder.mp3",
    "255": "Maroon 5 - One More Night (Official Music Video).mp3",
    "256": "Grupo Revela\u00e7\u00e3o - T\u00e1 Escrito (Ao Vivo no Morro).mp3",
    "257": "The River.mp3",
    "258": "Ronnie James Dio & Deep Purple - Sitting In A Dream.mp3",
    "259": "Bad, Bad Leroy Brown.mp3",
    "260": "Sway.mp3",
    "261": "System Of A Down - Soldier Side (Official Audio).mp3",
    "262": "Edi Rock - That's My Way ft. Seu Jorge [Video Oficial].mp3",
    "263": "Maneva - Pisando Descal\u00e7o (Ao Vivo Em S\u00e3o Paulo) ft. Deko.mp3",
    "264": "System Of A Down - I-E-A-I-A-I-O (Official Audio).mp3",
    "265": "System Of A Down - Aerials (Official HD Video).mp3",
    "266": "Aerosmith - Jaded (Official HD Video).mp3",
    "267": "Aerosmith - I Don't Want To Miss A Thing (Tradu\u00e7\u00e3o_Legendado).mp3",
    "268": "Acid Rain.mp3",
    "269": "In This River - Black Label Society(High Quality).mp3",
    "270": "Colt Ford - Answer to No One ft. JJ Lawhorn.mp3",
    "271": "SHAMAN_ FAIRY TALE (OFFICIAL VIDEO CLIP).mp3",
    "272": "Unlike Pluto - Everything Black (feat. Mike Taylor) [Official Lyric Video].mp3",
    "273": "The House of The Rising Sun - The White Buffalo.mp3",
    "274": "Queen - Under Pressure (Official Video).mp3",
    "275": "twenty one pilots - Ride (Official Video).mp3",
    "276": "Jason Mraz - 93 Million Miles (Official Video).mp3",
    "277": "Aerosmith - Hole In My Soul (Official HD Video).mp3",
    "278": "Queen - Don't Stop Me Now (Official Video).mp3",
    "279": "DESCOBRIDOR DOS SETE MARES -  TIM MAIA.mp3",
    "280": "OneRepublic - Counting Stars (Official Music Video).mp3",
    "281": "Corey Taylor - Tired (Acoustic).mp3",
    "282": "Angra - Holy Land.mp3",
    "283": "TIM MAIA - GOSTAVA TANTO DE VOCE.mp3",
    "284": "Black Alien - U-Informe.mp3",
    "285": "Maroon 5 - Animals (Official Music Video).mp3",
    "286": "Ed Sheeran - Shape of You (Official Music Video).mp3",
    "287": "Big TV.mp3",
    "288": "Green Day - Boulevard Of Broken Dreams [Official Music Video].mp3",
    "289": "BLACK SABBATH - 'Paranoid' (Official Video).mp3",
    "290": "Five Finger Death Punch- Bad Company.mp3",
    "291": "Coldplay - Viva La Vida (Official Video).mp3",
    "292": "Angra 'Black Widow's Web' feat. Alissa White-Gluz & Sandy - Official Music Video.mp3",
    "293": "Green Day - Basket Case [Official Music Video].mp3",
    "294": "White Lies - Bigger Than Us.mp3",
    "295": "Jeremy.mp3",
    "296": "Coldplay - Paradise (Official Video).mp3",
    "297": "Scorpions - Send Me An Angel.mp3",
    "298": "Come Together (Remastered 2009).mp3",
    "299": "My Sweet Lord (Remastered 2014).mp3",
    "300": "ATWA.mp3",
    "301": "Engenheiros do Hawaii - O Pre\u00e7o (Ac\u00fastico MTV).mp3",
    "302": "Elton John - Sacrifice.mp3",
    "303": "Fundo de Quintal - A Amizade.mp3",
    "304": "Love Of My Life (Live At Rock In Rio).mp3",
    "305": "Calvin Harris - Outside (Official Video) ft. Ellie Goulding.mp3",
    "306": "Coldplay - Hymn For The Weekend (Official Video).mp3",
    "307": "Imagine Dragons, Jid - Enemy (Lyrics).mp3",
    "308": "A Fuma\u00e7a J\u00e1 Subiu Pra Cuca.mp3",
    "309": "NIGHTWISH - The Phantom Of The Opera (OFFICIAL LIVE).mp3",
    "310": "Trevor Daniel - Falling (Official Music Video).mp3",
    "311": "Lil Wayne, Wiz Khalifa & Imagine Dragons w_ Logic & Ty Dolla $ign ft X Ambassadors - Sucker for Pain.mp3",
    "312": "Audioslave - Be Yourself (Album Version, Closed Captioned).mp3",
    "313": "Prismo - Stronger.mp3",
    "314": "3\u00aa Do Plural (Ao Vivo).mp3",
    "315": "Cazuza - O Tempo N\u00e3o Para.mp3",
    "316": "Mike Posner - I Took A Pill In Ibiza (Seeb Remix) (Explicit).mp3",
    "317": "Breaking The Habit [Official Music Video] - Linkin Park.mp3",
    "318": "Calvin Harris - Summer (8D AUDIO)\ud83c\udfa7.mp3",
    "319": "Abba - Dancing Queen (Official Music Video Remastered).mp3",
    "320": "Armas Qu\u00edmicas E Poemas (Ao Vivo).mp3",
    "321": "Engenheiros do Hawaii - Pose (Acustico MTV).mp3",
    "322": "System Of A Down - Toxicity (Official HD Video).mp3",
    "323": "Vida Loka, Pt. 2.mp3",
    "324": "Angra - Rebirth - Legendado.mp3",
    "325": "AC_DC - Highway to Hell (Official Video).mp3",
    "326": "Azul Da Cor Do Mar.mp3",
    "327": "I Love Rock 'N Roll.mp3",
    "328": "House Of Pain.mp3",
    "329": "The Mamas & The Papas - California Dreamin'.mp3",
    "330": "Ca\u00e7a E Ca\u00e7ador.mp3",
    "331": "Dia\u0301rio de um Detento.mp3",
    "332": "Lost In Hollywood.mp3",
    "333": "Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars.mp3",
    "334": "Maniac.mp3",
    "335": "Ed Sheeran - Photograph (Official Music Video).mp3",
    "336": "Let's Groove.mp3",
    "337": "Mr. Blue Sky by the Electric Light Orchestra (2012 version).mp3",
    "338": "Eminem - Venom.mp3",
    "339": "Fly Me To The Moon (2008 Remastered).mp3",
    "340": "Calvin Harris & Disciples - How Deep Is Your Love.mp3",
    "341": "Strangers In The Night (Remastered 2008).mp3",
    "342": "I Want You Back - The Jackson 5.mp3",
    "343": "Voyage Voyage-Desireless.mp3",
    "344": "KONGOS - Come with Me Now.mp3",
    "345": "Holy Mountains.mp3",
    "346": "Rick Astley - Never Gonna Give You Up (Official Music Video).mp3",
    "347": "Belchior - Saia do Meu Caminho.mp3",
    "348": "1. Blue Swede - Hooked on a Feeling.mp3",
    "349": "Anna J\u00falia.mp3",
    "350": "Fundo de Quintal - O Show Tem Que Continuar.mp3",
    "351": "The White Buffalo - Ballad of a Dead Man (Lyrics).mp3",
    "352": "The White Buffalo - Last Call to Heaven (Live Acoustic).mp3",
    "353": "Major Lazer & DJ Snake - Lean On (feat. M\u00d8) (Official Music Video).mp3",
    "354": "Claudinho E Buchecha-Fico Assim Sem Voce.mp3",
    "355": "Black Alien - From Hell do C\u00e9u - Faixa 12.mp3",
    "356": "Guns N' Roses - November Rain.mp3",
    "357": "Here Comes The Sun (Remastered 2009).mp3",
    "358": "Nothing Will Remain.mp3",
    "359": "Fundo de Quintal - Nosso grito.mp3",
    "360": "The Chainsmokers - Don't Let Me Down (Official Video) ft. Daya.mp3",
    "361": "Angra - Carry On (Legendado PT-BR).mp3",
    "362": "Maroon 5 - Maps (Lyric Video).mp3",
    "363": "Chove Chuva.mp3",
    "364": "Tim Maia \u2013 Que Beleza (Official Audio).mp3",
    "365": "AC_DC - You Shook Me All Night Long (Official Video).mp3",
    "366": "Yesterday (Remastered 2009).mp3",
    "367": "Dido - Thank You (Official Video).mp3",
    "368": "Scorpions - Still Loving You (original video).mp3",
    "369": "Almir Sater - 'O Vento e o Tempo' (Caminhos Me Levem_1996).mp3",
    "370": "Peaky Blinders - You Know I'm No Good (Ash Winston Riser. Amy Winehouse cover).mp3",
    "371": "Evanescence - Bring Me To Life (Official Music Video).mp3",
    "372": "THE WHITE BUFFALO - 'Don't You Want It' (Official Music Video).mp3",
    "373": "Ed Sheeran \u2013 Make It Rain (Fixed Vocals!).mp3",
    "374": "Tim Maia \u2013 Ela Partiu (Official Audio).mp3",
    "375": "Engenheiros do Hawaii -  O papa \u00e9 pop ( Acustico MTV).mp3",
    "376": "Garota De Ipanema.mp3",
    "377": "Somewhere I Belong [Official Music Video] - Linkin Park.mp3",
    "378": "Wuthering Heights.mp3",
    "379": "Janis Joplin - Maybe (Official Audio).mp3",
    "380": "Avicii - Hey Brother (Lyric).mp3",
    "381": "One Step Closer [Official HD Music Video] - Linkin Park.mp3",
    "382": "Aerosmith - Fly Away From Here (Official HD Video).mp3",
    "383": "Chop Suey!.mp3",
    "384": "Depeche Mode - Enjoy The Silence (Official Video).mp3",
    "385": "Johnny Cash - God's Gonna Cut You Down (Official Music Video).mp3",
    "386": "Eminem - Lose Yourself [HD].mp3",
    "387": "Ser\u00e1.mp3",
    "388": "Metallica - One (Official Music Video).mp3",
    "389": "Hey Jude (Remastered 2009).mp3",
    "390": "Alive (Live) - MTV Unplugged - Pearl Jam.mp3",
    "391": "LP - Lost On You (Live).mp3",
    "392": "Dio - Rainbow In The Dark.mp3",
    "393": "01 lilly wood and the prick and robin schulz   prayer in c robin schulz radio edit.mp3",
    "394": "Coldplay - Adventure Of A Lifetime (Official Video).mp3",
    "395": "Red Hot Chili Peppers - Californication [Official Music Video].mp3",
    "396": "Question!.mp3",
    "397": "Disturbed  - The Sound Of Silence [Official Music Video].mp3",
    "398": "Let Me Put My Love Into You.mp3",
    "399": "Radio_Video.mp3",
    "400": "Crawling [Official HD Music Video] - Linkin Park.mp3",
    "401": "Scorpions - Wind Of Change (Official Music Video).mp3",
    "402": "Red Hot Chili Peppers - Otherside [Official Music Video].mp3",
    "403": "Boogie Wonderland.mp3",
    "404": "Red Hot Chili Peppers - Scar Tissue [Official Music Video].mp3",
    "405": "Slipknot - Psychosocial [OFFICIAL VIDEO].mp3",
    "406": "twenty one pilots - Stressed Out [OFFICIAL VIDEO].mp3",
    "407": "Mina Do Condom\u00ednio.mp3",
    "408": "Millennium Sun.mp3",
    "409": "Engenheiros do Hawaii - Somos quem podemos ser (Acustico MTV).mp3",
    "410": "Alan Jackson - Chattahoochee (Official Music Video).mp3",
    "411": "Imagine Dragons - Natural (Official Music Video).mp3",
    "412": "Aerosmith - Pink.mp3",
    "413": "White Lies - Getting Even.mp3",
    "414": "Fleetwood Mac - The Chain (2004 Remastered Edition).mp3",
    "415": "The White Buffalo - Oh Darling, what have I done.mp3",
    "416": "Red Hot Chili Peppers - By The Way [Official Music Video].mp3",
    "417": "Don't Let Me Down (Naked Version _ Remastered 2013).mp3",
    "418": "The Weeknd - Blinding Lights (Official Audio).mp3",
    "419": "Black Alien - Na segunda vinda.mp3",
    "420": "Bruno Mars - Talking To The Moon (Official Lyric Video).mp3",
    "421": "Ghost Train.mp3",
    "422": "Oba, L\u00e1 Vem Ela.mp3",
    "423": "Payphone (Edit).mp3",
    "424": "Ghostbusters.mp3",
    "425": "Journey - Faithfully (Official Video).mp3",
    "426": "Kiss - Forever.mp3",
    "427": "The Heavy Horses - Anyone Can Tell - Legendado.mp3",
    "428": "Bee Gees - Stayin' Alive (Official Music Video).mp3",
    "429": "Aerosmith - Amazing (Official Music Video).mp3",
    "430": "Shaaman - Innocence.mp3",
    "431": "Stratovarius - Hunting High And Low.mp3",
    "432": "The Show Must Go On (Remastered 2011).mp3",
    "433": "Aerosmith - Livin' On The Edge (Official Music Video).mp3",
    "434": "AC_DC - Hells Bells (Official Video).mp3",
    "435": "Larkin Poe - Bad Spell (Official Video).mp3",
    "436": "Guns N' Roses - Estranged.mp3",
    "437": "Alec Benjamin - Let Me Down Slowly (Lyrics).mp3",
    "438": "Free Bird.mp3",
    "439": "Hotel California (2013 Remaster).mp3",
    "440": "Chris DeBurgh - Lady In Red.mp3",
    "441": "Simple Man.mp3",
    "442": "Audioslave - Like a Stone (Official Video).mp3",
    "443": "Djalma Pires - Samba de Ninar.mp3",
    "444": "Guns N' Roses - Patience (Official Music Video).mp3",
    "445": "Soundgarden - Black Hole Sun.mp3",
    "446": "Guns N' Roses - Welcome To The Jungle (Official Music Video).mp3",
    "447": "Knockin' On Heaven's Door.mp3",
    "448": "Jon Bon Jovi - Blaze Of Glory (Official Music Video).mp3",
    "449": "Dire Straits - Walk Of Life.mp3",
    "450": "Elvis Presley, The Royal Philharmonic Orchestra - Always On My Mind (Official Audio).mp3",
    "451": "Conselho - Jorge Arag\u00e3o - Ao vivo 3.mp3",
    "452": "Cant Take My Eyes Off You - Frankie Valli and The 4 Seasons + lyrics.mp3",
    "453": "Dire Straits - Money For Nothing.mp3",
    "454": "16 Toneladas - Noriel Vilela.mp3",
    "455": "Ramones - Poison Heart (Official Video).mp3",
    "456": "Eminem - Mockingbird (Official Music Video).mp3"
,"457": "A Horse with No Name.mp3","458": "Debbie Gibson - Lost In Your Eyes (Official Music Video).mp3","459": "Glory of Love.mp3","460": "Making Love Out of Nothing at All.mp3","461": "Give It Up.mp3","462": "It Might Be You (Theme from Tootsie).mp3","463": "Keane - Somewhere Only We Know (Official Video).mp3","464": "Glenn Medeiros - Nothing's Gonna Change My Love for You.mp3","465": "Vanessa Williams - Save The Best For Last (Official Video).mp3","466": "Radiohead - Fake Plastic Trees.mp3","467": "Eric Clapton [ Sunshine of your love ] HD.mp3","468": "Eric Clapton - After midnight (1988 Version).mp3","469": "Deep Purple - Smoke on the Water (Audio).mp3"};

function mudarVolume() {
    const divmudarVolumeMusica = document.querySelector("#mudarVolumeMusica");
    const divVolume = divmudarVolumeMusica.querySelector("#volume");
    const inputVolume = divVolume.querySelector("#volumeMusica");
    inputVolume.removeAttribute("disabled");
    inputVolume.value = 10;
    const volumeTexto = divVolume.querySelector("#volumeTexto");

    inputVolume.addEventListener("change", () => {
        volumeMusica = inputVolume.value / 100;

        volumeTexto.innerText = inputVolume.value + "%";

        musicaTocando.volume = volumeMusica;
    });
};

(function lofi() {
    mudarVolume();
    
    const divLofi = document.querySelector("#lofi");
    const botoes = divLofi.querySelector("#botoes");
    const botaoPlay = botoes.querySelector("#play");
    const botaoPause = botoes.querySelector("#pause");
    botaoPause.setAttribute("disabled", "true");

    const lofiMp3 = document.createElement("video");
    lofiMp3.id = "lofiMp3";
    lofiMp3.src = `videos/Lofi.mp3`;
    lofiMp3.volume = volumeMusica;

    lofiMp3Element = lofiMp3;

    botaoPlay.addEventListener("click", () => {
        if(musicaTocando != lofiMp3){ 
            if(!!musicaTocando) {
                const divBotaoPauseMusicaTocando = document.querySelector(`#pause-${musicaTocando.id}`);
                divBotaoPauseMusicaTocando.classList.add("d-none");

                const divBotaoPlayMusicaTocando = document.querySelector(`#play-${musicaTocando.id}`);
                divBotaoPlayMusicaTocando.classList.remove("d-none");

                divMusicaTocando.removeChild(musicaTocando);
            };

            musicaTocando = lofiMp3;
            musicaTocando.play();

            botaoPlay.setAttribute("disabled", "true");
            botaoPause.removeAttribute("disabled"); 
        }

        else if(musicaTocando == lofiMp3 && musicaTocando.paused) {
            musicaTocando.play();
            botaoPlay.setAttribute("disabled", "true");
            botaoPause.removeAttribute("disabled");
        };
    });

    botaoPause.addEventListener("click", () => {
        if(musicaTocando == lofiMp3) {
            musicaTocando.pause();
            botaoPlay.removeAttribute("disabled");
            botaoPause.setAttribute("disabled", "true");
        };
    });
})();

function colocarMusicaParaTocar(botaoPlay, verificarSeMusicaAcabou) {
    mudarVolume();

    const divBotaoPlay = botaoPlay.parentElement;
    const id = divBotaoPlay.id.split("play-")[1];

    const mp3 = document.createElement("video");
    mp3.id = id;
    mp3.src = `../videos/musica${id}.mp3`;
    mp3.volume = volumeMusica;

    setTimeout(() => {
        mp3.currentTime = mp3.duration - 10;
    }, 2000);

    if(musicaTocando && musicaTocando != mp3 && musicaTocando != lofiMp3Element) {
        try {
            const divBotaoPauseMusicaTocando = document.querySelector(`#pause-${musicaTocando.id}`);
            divBotaoPauseMusicaTocando.classList.add("d-none");
    
            const divBotaoPlayMusicaTocando = document.querySelector(`#play-${musicaTocando.id}`);
            divBotaoPlayMusicaTocando.classList.remove("d-none");
        } catch(err) {
            
        };

        divMusicaTocando.removeChild(musicaTocando);
    }

    else if (musicaTocando == lofiMp3Element) {
        botaoPauseLofi = document.querySelector("#botoes #pause");
        
        if(!lofiMp3Element.paused) {
            botaoPauseLofi.click();
        };
    };

    divMusicaTocando.appendChild(mp3);
    mp3.play()

    if(musicaTocando != mp3) {
        musicaTocando = mp3;    
    };

    const divBotaoPause = document.querySelector(`#pause-${id}`);
    divBotaoPlay.classList.add("d-none");
    divBotaoPause.classList.remove("d-none");

    function verificarSeMusicaAcabou() {
        let duracaoMusica;

        setTimeout(() => {
            duracaoMusica = mp3.duration;
        }, 2000);

        const timer = 26000;
        const timerFinished = timer >= 25000;

        const intervalVerificando = setInterval(() => {
            if(mp3.currentTime >= duracaoMusica && timerFinished && listaMusicas.length > 1) {
                listaMusicas.splice(listaMusicas.indexOf(id), 1);
                const proximaMusicaId = listaMusicas[0];
                const botaoPlayProximaMusica = document.querySelector(`#play-${proximaMusicaId} a`);

                colocarMusicaParaTocar(botaoPlayProximaMusica, verificarSeMusicaAcabou);

                const checkbox = document.querySelector(`#musica-${id} .checkbox input`);
                
                if(checkbox.hasAttribute("checked")) {
                    checkbox.click();
                };

                pararIntervalVerificando(true);
            }

            else if (mp3.currentTime >= duracaoMusica && listaMusicas.length <= 1 && musicaTocando) {
                listaMusicas.splice(listaMusicas.indexOf(id), 1);

                const divBotaoPauseMusicaTocando = document.querySelector(`#pause-${musicaTocando.id}`);
                divBotaoPauseMusicaTocando.classList.add("d-none");
        
                const divBotaoPlayMusicaTocando = document.querySelector(`#play-${musicaTocando.id}`);
                divBotaoPlayMusicaTocando.classList.remove("d-none");
        
                divMusicaTocando.removeChild(musicaTocando);

                const checkbox = document.querySelector(`#musica-${id} .checkbox input`);

                if(checkbox.hasAttribute("checked")) {
                    checkbox.click();
                };

                musicaTocando = false;
                
                pararIntervalVerificando(true);
            };      
        }, 1000);

        function pararIntervalVerificando(parar) {
            if(parar) {
                clearInterval(intervalVerificando);
            }
        }
    };

    verificarSeMusicaAcabou();
};

function limparDivConteudo() {
    conteudo.innerHTML = "";
};

function mostrarDivTimer() {
    limparDivConteudo();

    conteudo.classList.remove("ps-5");
    conteudo.classList.add("p-3");

    conteudo.innerHTML = `
        <div id="divTimer" class="d-flex flex-column justify-content-center align-items-center mt-3">
            <img src="imgs/relogio.png" id="relogio">

            <div id="tempoRestante" class="mt-5">
                <h3 style="text-align: center"><h3>
            </div>

            <div id="botoes" class="mt-3">
                <button type="button" class="btn btn-outline-primary" id="comecarTimer">Começar</button>
            </div>

            <div class="d-none d-flex flex-column align-items-center justify-content-center mt-5 p-3 bg-secondary rounded" id="recompensa">
                <h2 class="text-warning p-3"><h2>

                <img src="imgs/recompensa.png" class="mt-3">
            </div>
        </div>
    `;

    let isTimerActive = false;

    const buttonComecarTimer = document.querySelector("#divTimer > #botoes > #comecarTimer");
    buttonComecarTimer.addEventListener("click", () => {
        if(!isTimerActive) {
            comecarTimer();
            isTimerActive = true;

            buttonComecarTimer.classList.add("d-none");

            isTimerActive = true;
        }
    });
};

function mostrarDivMusicas() {
    limparDivConteudo();

    conteudo.classList.remove("p-3");
    conteudo.classList.add("ps-5");
    
    conteudo.innerHTML = `
    <div class="d-flex input-group text-align-rigth w-100 mb-5" id="divPesquisar">
        <span class="input-group-text link-secondary" id="iconePesquisar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
        </span>
        <input type="text" class="form-control" placeholder="Digite o nome da música" aria-label="Input group example" aria-describedby="basic-addon1" id="nomeMusica">
    </div>

    <h1 class="mb-5">Músicas</h1> 

    <div id="musicas"></div>`;

    const pesquisarBotao = document.querySelector("#iconePesquisar");
    pesquisarBotao.addEventListener("click", () => {
        pesquisarMusica();
    });
};

function mostrarDivVideos() {
    limparDivConteudo();

    conteudo.classList.add("ps-5");
    // 
};

function comecarTimer() {
    if(musicaTocando && musicaTocando != lofiMp3Element) {
        musicaTocando.pause();
    }

    const buttonComecarTimer = document.querySelector("#divTimer > #botoes > #comecarTimer");
    buttonComecarTimer.classList.add("d-none");
    
    const timerSom = document.querySelector("#timerSom > video");
    
    const divRecompensa = document.querySelector("#recompensa");
    divRecompensa.classList.remove("d-none");

    const textoRecompensa = document.querySelector("#recompensa > h2");
    textoRecompensa.innerText = "Sua recompensa são 10 minutos de descanso para poder fazer qualquer coisa!";

    timerFinished = false;

    const divTempoRestante = document.querySelector("#tempoRestante h3");
    let tempoRestante = 1500;
    let segundosRestantes;
    let minutosRestantes;

    const intervalTimer = setInterval(() => {
        if(tempoRestante > 0) {
            tempoRestante -= 1;
            minutosRestantes = Math.floor(tempoRestante / 60);
            segundosRestantes = Math.floor(tempoRestante % 60);
    
            divTempoRestante.innerText =  `${minutosRestantes} minutos e ${segundosRestantes} segundos restantes`; 
        }
        
        else {
            pararIntervalTimer(true);
            console.log("636")
            timerSom.play();
        }
    }, 1000);

    function pararIntervalTimer(parar) {
        if(parar) {
            clearInterval(intervalTimer);
            
            timerFinished = true;
            comecarTimerDescanso();
        };
    };
};

function comecarTimerDescanso() {
    const timerSom = document.querySelector("#timerSom > video");

    const divRecompensa = document.querySelector("#recompensa");
    divRecompensa.classList.remove("d-none");

    const textoRecompensa = document.querySelector("#recompensa > h2");
    textoRecompensa.innerText = "Você tem 10 minutos de descanso!";

    const divTempoRestante = document.querySelector("#tempoRestante h3");
    let tempoRestante = 600;
    let segundosRestantes;
    let minutosRestantes;

    const intervalTimer = setInterval(() => {
        if(tempoRestante > 0) {
            tempoRestante -= 1;
            minutosRestantes = Math.floor(tempoRestante / 60);
            segundosRestantes = Math.floor(tempoRestante % 60);
    
            divTempoRestante.innerText =  `${minutosRestantes} minutos e ${segundosRestantes} segundos restantes de descanso`; 
        }
        
        else {
            pararIntervalTimerDescanso(true);   
            
            timerSom.play()
            comecarTimer();
        }
    }, 1000);

    function pararIntervalTimerDescanso(parar) {
        if(parar) {
            clearInterval(intervalTimer);

            comecarTimer();
        };
    };
};

function pesquisarMusica() {
    const divMusicas = document.querySelector("#musicas");
    divMusicas.innerHTML = "";
    
    function divMusica(id, nome, checkboxCheck) {
        const musicaNaLista = listaMusicas.includes(id);
        let divCheckbox;

        if(musicaNaLista) {
            divCheckbox = `
                <div class="checkbox me-2">
                    <input class="form-check-input" type="checkbox" checked/>
                </div>`;
        }

        else {
            divCheckbox = `
                <div class="checkbox me-2">
                    <input class="form-check-input" type="checkbox"/>
                </div>`;
        };

        divMusicas.innerHTML += `
        <div id="musica-${id}" class="d-flex align-items-center">
                ${divCheckbox}
    
                <div id="nome">
                  ${nome}
                </div>
    
                <div id="botoes" class="d-flex align-items-center justify-content-end flex-grow-1">
                  <div id="play-${id}" class="link-dark">
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16" id="tocarSvg">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                        </svg>
                      </a>
                  </div>
    
                  <div id="pause-${id}" class="link-dark d-none">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16" id="pausarSvg">
                        <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </a>
                  </div>
                </div>
        </div>
        
        <hr>`;

        checkboxCheck(musicaNaLista, id);
    };

    const nomeMusica = document.querySelector("#nomeMusica").value.toLowerCase();
    
    if(nomeMusica.length >= 3) {
        function checkboxCheck(isOnList = false, id) {
            if(isOnList) {
                const checkbox = document.querySelector(`#musica-${id} > .checkbox input`);  

                checkbox.setAttribute("checked", "true");
            };
        };

        const musicasKeys = Object.keys(musicas);

        musicasKeys.forEach((id) => {
            let isMp3 = false;

            let nome = musicas[id];
            const nomeLowerCase = nome.toLowerCase();

            if(nome.includes(".mp3")) {
                nome = nome.split(".mp3")[0];
                isMp3 = true;
            }

            else if(nome.includes(".mp4")) {
                nome = nome.split(".mp4")[0];
            }
   
            if(nomeLowerCase.split(nomeMusica, 2).length > 1 && isMp3) {
                divMusica(id, nome, checkboxCheck);
            };
        });

        // Checkboxes

        const checkboxes = document.querySelectorAll(`[id*="musica"] > .checkbox input`);
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("click", () => {
                const id = checkbox.parentElement.parentElement.id.split("musica-")[1];

                if(!checkbox.hasAttribute("checked")) {
                    listaMusicas.push(id);
                    checkbox.setAttribute("checked", "");                  
                }

                else {
                    listaMusicas.splice(listaMusicas.indexOf(id), 1);
                    checkbox.removeAttribute("checked");
                };
            });
        });

        // Botões 

        const botoesPlay = document.querySelectorAll(`[id*="play"] > a`);
        const botoesPause = document.querySelectorAll(`[id*="pause"] > a`);

        // Botão de tocar

        botoesPlay.forEach(botaoPlay => {
            botaoPlay.addEventListener("click", () => {
                const divBotaoPlay = botaoPlay.parentElement;
                const id = divBotaoPlay.id.split("play-")[1];

                if(musicaTocando.id == id) {
                    const divBotaoPause = document.querySelector(`#pause-${id}`);
                    
                    divBotaoPlay.classList.add("d-none");
                    divBotaoPause.classList.remove("d-none");
                    musicaTocando.play();
                }

                else {
                    colocarMusicaParaTocar(botaoPlay);
                };
            });
        });

        // Botão de pausar

        botoesPause.forEach(botaoPause => {
            botaoPause.addEventListener("click", () => {
                const divBotaoPause = botaoPause.parentElement;
                const id = divBotaoPause.id.split("pause-")[1];

                musicaTocando.pause();

                const divBotaoPlay = document.querySelector(`#play-${id}`);
                divBotaoPause.classList.add("d-none");
                divBotaoPlay.classList.remove("d-none");
            });

            const divBotaoPause = botaoPause.parentElement;
            const id = divBotaoPause.id.split("pause-")[1];

            if(id == musicaTocando.id && !musicaTocando.paused) {
                const divBotaoPlay = document.querySelector(`#play-${id}`);
                divBotaoPause.classList.remove("d-none");
                divBotaoPlay.classList.add("d-none");
            };
        });
    };
};

function colocarClassActive(button) {
    if(divAtivada) {
        divAtivada.classList.remove("active");
    };

    button.classList.add("active");
    divAtivada = button;
};

// Botões Sidebar

const buttonTimer = document.querySelector("#buttonTimer");
const buttonMusicas = document.querySelector("#buttonMusicas");
const buttonVideos = document.querySelector("#buttonVideos");

mostrarDivTimer();

    // Quando forem "clicados".

    buttonTimer.addEventListener("click", (e) => {
        e.preventDefault();
        // colocarClassActive(buttonTimer);

        if(timerFinished) {
            mostrarDivTimer();
        };
    });

    buttonMusicas.addEventListener("click", (e) => {
        e.preventDefault();
        // colocarClassActive(buttonMusicas);

        if(timerFinished) {
            mostrarDivMusicas();
        };
    });

    buttonVideos.addEventListener("click", (e) => {
        e.preventDefault();
        // colocarClassActive(buttonVideos);
        
        if(timerFinished) {
            mostrarDivVideos();
        };
    });



