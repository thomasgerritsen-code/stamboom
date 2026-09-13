(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people?.hendrikus1915)return;
const p=people.hendrikus1915;
const stories=window.FAMILY_STORIES=window.FAMILY_STORIES||{};
const addEvent=(event)=>{p.events=p.events||[];if(!p.events.some(e=>String(e.year)===String(event.year)&&e.label===event.label))p.events.push(event)};
const addArchive=(item)=>{p.archive=p.archive||[];if(!p.archive.some(a=>a.title===item.title))p.archive.push(item)};

addEvent({year:1923,label:'Hendrikus verloor in 1923 beide ouders: vader Hendrik ten Böhmer overleed in mei en moeder Maria Theodora Geurtsen in november. Hendrikus was toen acht jaar oud. Bij wie hij daarna in huis kwam en wie formeel voor hem zorgde, is nog niet vastgesteld en is een belangrijk nieuw onderzoekspunt.',status:'strong'});
addEvent({year:'1916–1941',label:'Voor de periode van zijn jeugd tot vlak vóór de oorlog is het gereconstrueerde bevolkingsregister van de gemeente Renkum (Gelders Archief, toegang 1709) de meest kansrijke primaire bron. Dit register kan huishouden, adressen, vestiging/vertrek en beroep bevatten. Een individuele kaart/vermelding van Hendrikus is in de openbare webzoekresultaten nog niet rechtstreeks gevonden.',status:'research'});
addEvent({year:'1942–1943',label:'Zijn werkgever als transportarbeider is onbekend. Een koppeling aan papierfabriek Van Gelder wordt niet aangenomen: bronnen tonen dat de Renkumse fabriek in 1942 onder de Duitse bedrijfsconcentratie werd stilgelegd/gesloten, terwijl een studie over de April-Meistakingen van 1943 nog wel personeel van Van Gelder in Renkum noemt. De bedrijfssituatie was dus complex en levert zonder personeelsbron geen bewijs voor Hendrikus’ werkgever.',status:'research'});
addEvent({year:'onderzoek',label:'Zoekacties op naam, exacte overlijdensdatum, beroep en adres leverden tot nu toe geen rouwadvertentie, ongevalsbericht, ziekenhuisvermelding of geïndexeerd Arbeidseinsatz-dossier op. Dit is geen bewijs dat zulke bronnen niet bestaan; de niet-geïndexeerde bevolkings-, adresboek-, kerk- en begrafenisbronnen blijven daarom prioriteit.',status:'research'});

addArchive({type:'source',title:'Reconstructie bevolkingsregister Renkum 1916–1941 · toegang 1709',note:'Het Gelders Archief bewaart een reconstructie van het bevolkingsregister van de gemeente Renkum. Deze collectie bevat ruim 24.000 beschrijvingen en kan de sleutel zijn tot Hendrikus’ huishouden na het overlijden van zijn ouders, zijn adressen en mogelijk zijn beroep of werkgever. De exacte inschrijving van Hendrikus moet nog rechtstreeks in toegang 1709 worden opgezocht.',url:'https://www.geldersarchief.nl/',status:'research'});
addArchive({type:'source',title:'Adresboek Renkum 1943 · nog controleren',note:'Historisch onderzoek van Oud Renkum noemt een adresboek uit 1943 als gebruikte bron. Omdat Hendrikus op 1 februari 1943 overleed, kan een editie rond 1942/1943 mogelijk bevestigen wie op Willebrordweg 1 woonde en welk beroep of huishouden bij het adres hoorde. De Hendrikus-vermelding zelf is nog niet teruggevonden.',url:'https://www.oud-renkum.nl/hgr/wp-content/uploads/2024/06/Historische-gids-Nieuweweg-v24-verkleind.pdf',status:'research'});
addArchive({type:'source',title:'Werkgever Hendrikus · Van Gelder niet bewezen',note:'Een economische-historische studie vermeldt sluiting van de Van Gelder-fabriek in Renkum in 1942 door bedrijfsconcentratie. Een afzonderlijke studie van de April-Meistakingen noemt in 1943 echter nog personeel van Van Gelder in Renkum. Daarom is “transportarbeider bij Van Gelder” zonder personeels- of bevolkingsbron niet verantwoord.',url:'https://bmgn-lchr.nl/article/download/URN:NBN:NL:UI:10-1-105817/3503/3581',status:'research'});

const base=stories.hendrikus1915||'';
const extra=' Een belangrijk nieuw spoor is zijn jeugd na 1923: Hendrikus was acht jaar toen beide ouders binnen hetzelfde jaar overleden. Het gereconstrueerde bevolkingsregister van Renkum (1916–1941) kan mogelijk laten zien bij welk huishouden hij daarna hoorde en hoe zijn woon- en beroepsloopbaan richting Willebrordweg 1 verliep. Zijn werkgever als transportarbeider is nog onbekend; een koppeling aan Van Gelder wordt bewust niet gemaakt zonder directe personeelsbron.';
if(!base.includes('gereconstrueerde bevolkingsregister van Renkum'))stories.hendrikus1915=base+extra;
})();
