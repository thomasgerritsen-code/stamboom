(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people)return;

const merge=(id,patch)=>{ if(!people[id]) people[id]={}; Object.assign(people[id],patch); };
const addEvent=(id,event)=>{ const p=people[id]; if(!p)return; p.events=p.events||[]; if(!p.events.some(e=>e.year===event.year&&e.label===event.label)) p.events.push(event); };
const addArchive=(id,item)=>{ const p=people[id]; if(!p)return; p.archive=p.archive||[]; if(!p.archive.some(a=>a.title===item.title)) p.archive.push(item); };

/* Johannes Makkinga (1895) */
people.johannes1895.places=[
  'Ommen',
  'Enschede (gezin)',
  'Borculo (voor juli 1934)',
  'Pijnacker · Stationsstraat 65 (vanaf juli 1934)'
];
addEvent('johannes1895',{year:1921,label:'Huwde op 9 april 1921 in Enschede met Everijntje Schoonderbeek. Huwelijksakte nr. 84 noemt Gerrit Makkinga en Hendrina Pasman als zijn ouders.',status:'confirmed'});
addEvent('johannes1895',{year:1924,label:'Dochter Aaltje Makkinga werd op 7 januari 1924 in Enschede geboren.',status:'strong'});
addEvent('johannes1895',{year:1927,label:'Zoon Henri Makkinga werd op 2 mei 1927 in Sint Annaparochie geboren.',status:'strong'});
addEvent('johannes1895',{year:1934,label:'Kwam medio juli 1934 vanuit Borculo naar Pijnacker. Everijntje kwam vanuit Wolvega; het gezin woonde aan Stationsstraat 65.',status:'strong'});
addEvent('johannes1895',{year:1934,label:'Zoon Hendrikus Makkinga werd op 7 september 1934 in Pijnacker geboren.',status:'strong'});
addArchive('johannes1895',{type:'document',title:'Huwelijksakte Johannes Makkinga & Everijntje Schoonderbeek (1921)',note:'Huwelijk op 9 april 1921 in Enschede, akte 84. Johannes was 25 jaar en geboren in Ommen; ouders Gerrit Makkinga en Hendrina Pasman. Everijntje was 25 jaar en geboren in Veenendaal; ouders Hendrikus Schoonderbeek en Aaltje Stuivenberg.',url:'https://www.genealogieonline.nl/stamboom-de-duffelt/I41627.php',status:'strong'});
addArchive('johannes1895',{type:'photo',title:'Contextfoto: N.S.-station Pijnacker (1966)',note:'Het voormalige N.S.-station van Pijnacker, waar Johannes in 1934 als assistent bij de N.S. werd vermeld. De foto is uit 1966 en dus later dan zijn bekende verblijf. Collectie Het Utrechts Archief / Nederlandse Spoorwegen, CC0.',image:'https://upload.wikimedia.org/wikipedia/commons/7/75/HUA-150591-Gezicht_op_het_N.S.-station_te_Pijnacker.jpg',url:'https://commons.wikimedia.org/wiki/File:HUA-150591-Gezicht_op_het_N.S.-station_te_Pijnacker.jpg',status:'confirmed'});

/* Everijntje: burgerlijke bron corrigeert de eerdere datum */
people.everijntje1895.birth={date:'1895-05-09',year:1895,place:'Veenendaal'};
people.everijntje1895.places=[
  'Veenendaal',
  'Enschede (gezin)',
  'Wolvega (voor juli 1934)',
  'Pijnacker · Stationsstraat 65 (vanaf juli 1934)'
];
people.everijntje1895.events=(people.everijntje1895.events||[]).filter(e=>!String(e.label||'').includes('20 mei 1895'));
addEvent('everijntje1895',{year:1895,label:'Geboren op 9 mei 1895 in Veenendaal volgens B.S. Veenendaal, akte 85. Latere bronnen geven afwijkend 19 of 20 mei; de burgerlijke akte krijgt daarom voorrang.',status:'confirmed'});
addEvent('everijntje1895',{year:1921,label:'Huwde op 9 april 1921 in Enschede met Johannes Makkinga (akte 84).',status:'confirmed'});
addEvent('everijntje1895',{year:1934,label:'Kwam medio juli 1934 vanuit Wolvega naar Pijnacker; Johannes kwam vanuit Borculo.',status:'strong'});
addArchive('everijntje1895',{type:'source',title:'B.S. Veenendaal geboorteakte 85 (1895)',note:'De burgerlijke bron geeft 9 mei 1895 als geboortedatum. Dit wijkt af van 19 mei in de Pijnacker-bewonershistorie en 20 mei in de eerder gebruikte familiefan.',url:'https://www.genealogieonline.nl/genealogische-gegevens-uit-noord-oost-overijssel/I211136.php',status:'strong'});
addArchive('everijntje1895',{type:'document',title:'Huwelijksakte Johannes Makkinga & Everijntje Schoonderbeek (1921)',note:'Enschede, 9 april 1921, akte 84. De akte bevestigt de ouderparen van beide echtgenoten.',url:'https://www.genealogieonline.nl/stamboom-de-duffelt/I41627.php',status:'strong'});

/* Extra kinderen van Johannes en Everijntje; levensstatus nog niet vastgesteld, daarom privacy-conservatief als levend gemarkeerd. */
merge('aaltje1924',{name:'Aaltje Makkinga',branch:'makkinga',living:true,birth:{date:'1924-01-07',year:1924,place:'Enschede'},parents:['johannes1895','everijntje1895'],generation:'Kinderen Johannes & Everijntje',occupations:[],places:['Enschede'],status:'strong',events:[{year:1924,label:'Geboren op 7 januari 1924 in Enschede volgens de bewonershistorie van Stationsstraat 65.',status:'strong'}],archive:[{type:'source',title:'Bewonershistorie Stationsstraat 65, Pijnacker',note:'Noemt Aaltje als kind van Johannes Makkinga en Everijntje Schoonderbeek.',url:'https://sites.google.com/view/pijnacker-in-vroeger-tijden/stationsstraat',status:'strong'}]});
merge('henri1927',{name:'Henri Makkinga',branch:'makkinga',living:true,birth:{date:'1927-05-02',year:1927,place:'Sint Annaparochie'},parents:['johannes1895','everijntje1895'],generation:'Kinderen Johannes & Everijntje',occupations:[],places:['Sint Annaparochie'],status:'strong',events:[{year:1927,label:'Geboren op 2 mei 1927 in Sint Annaparochie volgens de bewonershistorie van Stationsstraat 65.',status:'strong'}],archive:[{type:'source',title:'Bewonershistorie Stationsstraat 65, Pijnacker',note:'Noemt Henri als kind van Johannes Makkinga en Everijntje Schoonderbeek.',url:'https://sites.google.com/view/pijnacker-in-vroeger-tijden/stationsstraat',status:'strong'}]});
merge('hendrikus1934',{name:'Hendrikus Makkinga',branch:'makkinga',living:true,birth:{date:'1934-09-07',year:1934,place:'Pijnacker'},parents:['johannes1895','everijntje1895'],generation:'Kinderen Johannes & Everijntje',occupations:[],places:['Pijnacker'],status:'strong',events:[{year:1934,label:'Geboren op 7 september 1934 in Pijnacker, kort na de verhuizing van het gezin naar Stationsstraat 65.',status:'strong'}],archive:[{type:'source',title:'Bewonershistorie Stationsstraat 65, Pijnacker',note:'Noemt Hendrikus als in Pijnacker geboren zoon van Johannes Makkinga en Everijntje Schoonderbeek.',url:'https://sites.google.com/view/pijnacker-in-vroeger-tijden/stationsstraat',status:'strong'}]});

/* Gerrit Makkinga (1922) */
people.gerrit1922.places=[
  'Enschede',
  'Pijnacker · Stationsstraat 65 (vanaf 1934, gezin)',
  'Korneuburg, Oostenrijk · Schiffswerft Korneuburg (WOII)',
  'Denekamp'
];
people.gerrit1922.occupations=[
  'Verplichte/dwangarbeider bij Schiffswerft Korneuburg tijdens de Tweede Wereldoorlog',
  'Kerkelijk ambtsdrager: diaken (1967–1968)',
  'Kerkelijk ambtsdrager: ouderling (1969–1972)'
];
addEvent('gerrit1922',{year:'1940–1945',label:'Werkte tijdens de Tweede Wereldoorlog bij Schiffswerft Korneuburg in Oostenrijk en verbleef in het bijbehorende arbeiderskamp. Deze werkplek is mondeling bevestigd door zijn dochter; de Arolsen-registratie ondersteunt dat hij als verplichte/dwangarbeider geregistreerd stond.',status:'confirmed'});
addEvent('gerrit1922',{year:1948,label:'Volgens de familiegenealogie trouwde Gerrit op 26 februari 1948 met Geertje Venema. Deze datum is nog niet aan een primaire huwelijksakte gekoppeld.',status:'strong'});
addArchive('gerrit1922',{type:'source',title:'Mondelinge familiebron: Schiffswerft Korneuburg',note:'Gerrits dochter heeft binnen de familie bevestigd dat Gerrit tijdens de oorlog bij de scheepswerf in Korneuburg werkte en in het kamp bij de werf verbleef. Dit wordt als bevestigde familiebron opgenomen; een individueel personeels- of kampregister wordt nog gezocht voor archiefmatige bevestiging.',status:'confirmed'});
addArchive('gerrit1922',{type:'document',title:'A.E.F. Assembly Center Registration Card (1945)',note:'Originele registratiekaart, Arolsen Archives document ID 39648882a, collectie DP3 of CNI. De kaart noemt Makkinga, Gerrit, Nederlander, geboortedatum 2-3-1922 en bestemming Rotterdam, Zuid-Holland. De handgeschreven opmerking lijkt te lezen als “Verpflichtete arbeider”. De kaart noemt de werkplek niet zelf; de identificatie van Schiffswerft Korneuburg is via directe familieoverlevering bevestigd.',image:'https://europe1.discourse-cdn.com/flex013/uploads/arolsen_archives/original/3X/b/c/bc5210159eb770071ab066ed08c4ee8622dbc644.jpeg',url:'https://talk.arolsen-archives.org/t/gerrit-makkinga-dutch/29155',status:'confirmed'});
addArchive('gerrit1922',{type:'source',title:'Huwelijk Gerrit Makkinga & Geertje Venema (familiegenealogie)',note:'Secundaire genealogische bron vermeldt huwelijk op 26 februari 1948 en drie kinderen. De datum wordt als sterke aanwijzing gebruikt totdat een primaire huwelijksakte is gevonden.',url:'https://en.geneanet.org/fonds/individus/?country__0__=NLD&go=1&nom=VENEMA&region__0__=GEL&size=50&zonegeo__0__=Gelderland%2C+Netherlands',status:'strong'});

/* Verhalen aanvullen/overschrijven */
window.FAMILY_STORIES=window.FAMILY_STORIES||{};
window.FAMILY_STORIES.johannes1895='Johannes Makkinga werd op 2 oktober 1895 in Ommen geboren als zoon van Gerrit Makkinga en Hendrina Pasman. Op 9 april 1921 trouwde hij in Enschede met Everijntje Schoonderbeek. Het gezin bewoog vervolgens door verschillende delen van Nederland: Gerrit en Aaltje werden in Enschede geboren, Henri in Sint Annaparochie. Medio juli 1934 kwam Johannes vanuit Borculo naar Pijnacker, terwijl Everijntje vanuit Wolvega kwam. Aan Stationsstraat 65 werd Johannes vermeld als assistent bij de Nederlandse Spoorwegen. Kort na de verhuizing werd hun zoon Hendrikus in Pijnacker geboren. De combinatie van geboorteplaatsen en zijn spoorwegberoep maakt het aannemelijk dat zijn werk een rol speelde in de vele verhuizingen, maar dat verband is nog niet rechtstreeks door een personeelsdossier bevestigd.';
window.FAMILY_STORIES.gerrit1922='Gerrit Makkinga werd op 2 maart 1922 in Enschede geboren als oudste bekende zoon van Johannes Makkinga en Everijntje Schoonderbeek. In 1934 verhuisde hij met het gezin naar Pijnacker, waar zijn vader aan Stationsstraat 65 als assistent bij de Nederlandse Spoorwegen werkte. Tijdens de Tweede Wereldoorlog werkte Gerrit bij Schiffswerft Korneuburg in Oostenrijk en verbleef hij in het kamp bij de werf. Deze locatie en werkplek zijn binnen de familie rechtstreeks bevestigd door zijn dochter. Een A.E.F.-registratiekaart uit 1945 in de Arolsen Archives noemt Gerrit met zijn exacte geboortedatum en Rotterdam als bestemming voor terugkeer naar Nederland; de handgeschreven aanduiding lijkt “Verpflichtete arbeider” te vermelden en sluit daarmee aan op de familieoverlevering van verplichte of gedwongen arbeid. De registratiekaart zelf noemt de scheepswerf niet, zodat een individueel personeels- of kampdocument nog een waardevolle aanvullende archiefbevestiging zou zijn. Volgens de familiegenealogie trouwde Gerrit op 26 februari 1948 met Geertje Venema. Later woonde het gezin in de omgeving van Denekamp. Een kerkelijke jubileumbron noemt een Makkinga Gerard, geboren in 1922 en gehuwd met Geertje Venema, als diaken in 1967–1968 en ouderling in 1969–1972. Gerrit overleed op 12 december 1997.';
})();
