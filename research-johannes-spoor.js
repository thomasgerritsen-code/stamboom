(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people?.johannes1895)return;
const p=people.johannes1895;

const addEvent=(event)=>{
  p.events=p.events||[];
  if(!p.events.some(e=>String(e.year)===String(event.year)&&e.label===event.label)) p.events.push(event);
};
const addArchive=(item)=>{
  p.archive=p.archive||[];
  if(!p.archive.some(a=>a.title===item.title)) p.archive.push(item);
};

/*
  Woonplaatsen / spoorloopbaan Johannes Makkinga (1895)
  Belangrijk: een geboorteplaats van een kind of een plaats aan een HSM-lijn is niet automatisch
  bewijs van zijn exacte standplaats. Daarom worden Enschede en Sint Annaparochie als sterke
  reconstructie weergegeven; Borculo en Pijnacker zijn rechtstreeks als vertrek-/woonplaats genoemd.
*/
p.places=[
  'Ommen · geboorteplaats (1895)',
  'Enschede · ca. 1921–1924 (gezin; huwelijk en geboorten kinderen)',
  'Sint Annaparochie · ca. 1927 (gezin; zoon Henri hier geboren)',
  'Borculo · vóór juli 1934 (rechtstreeks als vertrekplaats vermeld)',
  'Pijnacker · Stationsstraat 65 · vanaf juli 1934'
];

p.occupations=[
  'Spoorwegassistent bij HSM / belangengemeenschap Nederlandse Spoorwegen; in 1934 vermeld als “assistent bij de N.S.”'
];

addEvent({year:'1921–1924',label:'Het gezin is aantoonbaar met Enschede verbonden: Johannes trouwde er in 1921 en de kinderen Gerrit (1922) en Aaltje (1924) werden er geboren. Enschede lag in een gebied met HSM-exploitatie. Een exact personeelsdossier dat zijn standplaats Enschede noemt is nog niet gevonden.',status:'strong'});
addEvent({year:1927,label:'Zoon Henri werd op 2 mei 1927 in Sint Annaparochie geboren. Het station Sint Annaparochie lag aan de Noord-Friesche Locaalspoorweg, waarvan de exploitatie sinds 1905 door de HSM werd uitgevoerd. Dit maakt een HSM-overplaatsing naar Noord-Friesland aannemelijk, maar zijn exacte standplaats is nog niet rechtstreeks uit een personeelsregister bevestigd.',status:'strong'});
addEvent({year:'vóór juli 1934',label:'Johannes woonde direct vóór zijn verhuizing naar Pijnacker in Borculo. De Pijnacker-bewonershistorie vermeldt expliciet dat hij uit Borculo kwam. Borculo lag aan het voormalige GOLS-net, dat door de HSM werd geëxploiteerd; een spoorwegplaatsing in Borculo is daarom aannemelijk maar nog niet individueel gedocumenteerd.',status:'strong'});
addEvent({year:'juli 1934',label:'Johannes verhuisde vanuit Borculo naar Pijnacker en vestigde zich met zijn gezin aan Stationsstraat 65. Hier wordt hij expliciet vermeld als “assistent bij de N.S.”. Station Pijnacker lag aan de Hofpleinlijn, die in deze periode door de HSM werd geëxploiteerd binnen de belangengemeenschap Nederlandse Spoorwegen.',status:'confirmed'});

addArchive({type:'source',title:'Reconstructie spoorloopbaan Johannes Makkinga',note:'De bekende gezinsplaatsen Enschede, Sint Annaparochie, Borculo en Pijnacker sluiten opvallend aan op spoorlijnen die in Johannes’ werkzame jaren door de HSM werden geëxploiteerd. Borculo en Pijnacker zijn rechtstreeks als verhuis-/woonplaatsen gedocumenteerd; voor Enschede en Sint Annaparochie blijft de koppeling met zijn precieze standplaats een sterke reconstructie totdat een personeelskaart of dienststaat wordt gevonden.',url:'https://www.museumbuurtspoorweg.nl/historie/',status:'strong'});
addArchive({type:'source',title:'HSM-exploitatie Noord-Friesche Locaalspoorweg',note:'Een rijksbron beschrijft de overdracht van de exploitatie van de Noord-Friesche Locaalspoorweg aan de Hollandsche IJzeren Spoorweg-Maatschappij. Dit ondersteunt de spoorcontext van Sint Annaparochie rond 1927.',url:'https://repository.overheid.nl/frbr/sgd/19051906/0000357711/1/pdf/SGD_19051906_0001274.pdf',status:'confirmed'});
addArchive({type:'source',title:'HSM-exploitatie GOLS / Borculo',note:'Museum Buurtspoorweg beschrijft dat de GOLS haar treinexploitatie vanaf het begin aan de HSM uitbesteedde. Borculo lag aan dit netwerk. Dat ondersteunt de spoorcontext van Johannes’ vertrekplaats Borculo in 1934.',url:'https://www.museumbuurtspoorweg.nl/historie/',status:'confirmed'});
addArchive({type:'source',title:'Hofpleinlijn en station Pijnacker',note:'Historische bronnen over de Hofpleinlijn tonen dat Pijnacker in 1934 onder HSM-exploitatie viel. De bewonershistorie noemt Johannes hier bovendien expliciet als assistent bij de N.S.',url:'https://hgop-pijnacker.nl/geschiedenis-pijnacker/schetsen-van-pijnacker/schetsen-h8/',status:'confirmed'});

window.FAMILY_STORIES=window.FAMILY_STORIES||{};
window.FAMILY_STORIES.johannes1895='Johannes Makkinga werd op 2 oktober 1895 in Ommen geboren. Zijn latere levensloop vertoont een opvallend spoorwegpatroon. Op 9 april 1921 trouwde hij in Enschede met Everijntje Schoonderbeek; hun zoons en dochters laten vervolgens zien hoe het gezin zich door Nederland verplaatste. Gerrit werd in 1922 en Aaltje in 1924 in Enschede geboren. In 1927 werd zoon Henri geboren in Sint Annaparochie, een plaats aan de Noord-Friesche Locaalspoorweg die sinds 1905 door de HSM werd geëxploiteerd. Direct vóór juli 1934 stond Johannes in Borculo geregistreerd, eveneens een spoorplaats op een door de HSM geëxploiteerd voormalig GOLS-traject. Medio juli 1934 verhuisde hij vanuit Borculo naar Pijnacker, waar het gezin aan Stationsstraat 65 woonde en Johannes expliciet werd omschreven als “assistent bij de N.S.”. Station Pijnacker lag aan de Hofpleinlijn, eveneens onder HSM-exploitatie. Daardoor ontstaat een samenhangende reconstructie van zijn spoorloopbaan: Enschede → Sint Annaparochie → Borculo → Pijnacker. Voor Borculo en Pijnacker is de woon-/verhuisrelatie rechtstreeks gedocumenteerd; bij Enschede en Sint Annaparochie is de combinatie van gezinsgegevens en spoorcontext zeer sterk, maar een individuele HSM/NS-personeelskaart zou zijn exacte standplaatsen definitief kunnen bevestigen.';
})();
