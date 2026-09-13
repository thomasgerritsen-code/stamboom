(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people)return;
const stories=window.FAMILY_STORIES=window.FAMILY_STORIES||{};
const merge=(id,patch)=>{ if(!people[id]) people[id]={}; Object.assign(people[id],patch); };
const addEvent=(id,event)=>{ const p=people[id]; if(!p)return; p.events=p.events||[]; if(!p.events.some(e=>String(e.year)===String(event.year)&&e.label===event.label)) p.events.push(event); };
const addArchive=(id,item)=>{ const p=people[id]; if(!p)return; p.archive=p.archive||[]; if(!p.archive.some(a=>a.title===item.title)) p.archive.push(item); };
const addPlace=(id,place)=>{ const p=people[id]; if(!p)return; p.places=p.places||[]; if(!p.places.includes(place)) p.places.push(place); };

/* Extra rechtstreeks bewezen broer van Maria Theodora ten Böhmer */
merge('matthias1893',{
  name:'Matthias ten Böhmer',
  branch:'gerritsen',
  living:false,
  birth:{date:'1893-09-15',year:1893,place:'Renkum'},
  death:{date:'1966-04-30',year:1966,place:'Renkum'},
  parents:['hendrik1865','mariatheodora1874'],
  generation:'Broers/zussen Maria Theodora',
  occupations:[],
  places:['Renkum','R.K. begraafplaats Mariahof · graf G 2 O-Z 166'],
  status:'confirmed',
  events:[
    {year:1893,label:'Geboren op 15 september 1893 in Renkum als zoon van Hendrik ten Böhmer, arbeider, en Maria Geurtsen. Burgerlijke stand Renkum, akte 186.',status:'confirmed'},
    {year:1966,label:'Overleden op 30 april 1966. Grafregistratie: R.K. begraafplaats Mariahof in Renkum, graf G 2 O-Z 166.',status:'strong'}
  ],
  archive:[
    {type:'document',title:'Geboorteakte Matthias ten Böhmer (1893)',note:'Burgerlijke stand Renkum, akte 186. Matthias werd op 15 september 1893 geboren; vader Hendrik ten Böhmer wordt als 28-jarige arbeider vermeld en moeder is Maria Geurtsen.',url:'https://www.openarchieven.nl/gld:8A88B598-C1BB-4C88-89CC-45617D426538',status:'confirmed'},
    {type:'source',title:'Grafregistratie Matthias ten Böhmer',note:'Mariahof Renkum: 15-09-1893 – 30-04-1966, graf G 2 O-Z 166. De vermelding “Smits” bij de grafregistratie wordt niet zonder aanvullende bron als partnernaam geïnterpreteerd.',url:'https://www.online-begraafplaatsen.nl/zerken.asp?bgp=240&char=B&command=showpers',status:'strong'}
  ]
});
stories.matthias1893='Matthias ten Böhmer werd op 15 september 1893 in Renkum geboren als zoon van Hendrik ten Böhmer en Maria Geurtsen. Zijn geboorteakte is een directe burgerlijke-standbron en vermeldt dat zijn vader toen arbeider was. Matthias is daarmee een rechtstreeks bewezen oudere broer van onder anderen Maria Theodora ten Böhmer en Hendrikus ten Böhmer. Hij overleed op 30 april 1966 en is geregistreerd op de R.K. begraafplaats Mariahof in Renkum.';

/* Familiecontext bij Maria Theodora */
if(people.maria1910){
  addEvent('maria1910',{year:'familie',label:'In de huidige bronnen zijn als kinderen van Hendrik ten Böhmer en Maria Theodora Geurtsen onder meer Matthias (1893), Johanna Maria (1904), Maria Theodora (1910), Antonia (1912) en Hendrikus (1915) geïdentificeerd. Dit is een lijst van nu aangetoonde kinderen en wordt niet als volledig gezin gepresenteerd.',status:'strong'});
  addArchive('maria1910',{type:'source',title:'Bekende broers en zussen ten Böhmer',note:'De huidige reconstructie koppelt Matthias (1893), Johanna Maria (1904), Antonia (1912) en Hendrikus (1915) via dezelfde ouders Hendrik ten Böhmer en Maria Theodora Geurtsen aan Maria Theodora (1910). Matthias is rechtstreeks bevestigd door geboorteakte 186 uit Renkum.',url:'https://www.openarchieven.nl/gld:8A88B598-C1BB-4C88-89CC-45617D426538',status:'strong'});
}

/* Hendrikus 1915: identiteit en doodsoorzaak strikt scheiden */
if(people.hendrikus1915){
  people.hendrikus1915.birth={date:'1915-02-23',year:1915,place:'Renkum'};
  people.hendrikus1915.death={date:'1943-02-01',year:1943,place:'Renkum'};
  people.hendrikus1915.parents=['hendrik1865','mariatheodora1874'];
  people.hendrikus1915.occupations=['Transportarbeider'];
  people.hendrikus1915.status='confirmed';
  addPlace('hendrikus1915','Renkum · Willebrordweg 1');
  addPlace('hendrikus1915','R.K. begraafplaats Mariahof · graf G 3 W 147');
  addEvent('hendrikus1915',{year:1943,label:'Hendrikus overleed op 1 februari 1943 in Renkum, 27 jaar oud. De overlijdensakte (akte 33, aangegeven 2 februari) bevestigt zijn ouders en zijn beroep transportarbeider, maar vermeldt geen doodsoorzaak.',status:'confirmed'});
  addEvent('hendrikus1915',{year:'na 1945',label:'Een lokale Renkumse oorlogsinventarisatie vermeldt dat Hendrikus na de oorlog is herbegraven op de R.K. begraafplaats Mariahof. De huidige grafregistratie noemt graf G 3 W 147.',status:'strong'});
  addEvent('hendrikus1915',{year:'onderzoek',label:'Hendrikus staat in een lokale inventarisatie onder “andere mogelijke oorlogsslachtoffers”. Tot nu toe is geen bron gevonden die zijn dood koppelt aan bombardement, executie, verzet, Arbeidseinsatz of een andere concrete oorlogshandeling. Zijn doodsoorzaak blijft daarom onbekend.',status:'research'});
  addArchive('hendrikus1915',{type:'document',title:'Overlijdensakte Hendrikus ten Böhmer (1943)',note:'Burgerlijke stand Renkum, akte 33. Overleden 1 februari 1943, 27 jaar, geboren Renkum, transportarbeider; ouders Hendrik ten Böhmer en Maria Theodora Geurtsen. De akte geeft geen doodsoorzaak.',url:'https://www.openarchieven.nl/gld:BC5BED19-A0AC-4E32-90DC-44721785A9FD',status:'confirmed'});
  addArchive('hendrikus1915',{type:'source',title:'Renkumse oorlogsinventarisatie · Hendrikus ten Böhmer',note:'Noemt geboorte 23 februari 1915, overlijden 1 februari 1943, ouders Hendrik ten Böhmer en Maria Geurtsen, adres Willebrordweg 1 en herbegrafenis op Mariahof. De bredere begraafplaatsenpagina plaatst hem nadrukkelijk slechts bij “andere mogelijke oorlogsslachtoffers”.',url:'https://www.hansbraakhuis.nl/Renkum/oorlogsslachtoffers-namen.html',status:'strong'});
  addArchive('hendrikus1915',{type:'source',title:'Graf Hendrikus ten Böhmer · Mariahof',note:'Online grafregistratie: Hendrikus ten Böhmer, 23-02-1915 – 01-02-1943, graf G 3 W 147.',url:'https://www.online-begraafplaatsen.nl/zerken.asp?bgp=240&char=B&command=showpers',status:'confirmed'});
  addArchive('hendrikus1915',{type:'source',title:'Naamgenoot in oorlogsbronnen · niet dezelfde Hendrikus',note:'Bij oorlogsonderzoek moet Hendrikus (23-02-1915) strikt worden onderscheiden van andere mannen met dezelfde naam, waaronder een Hendrikus ten Böhmer met geboortejaar 1913 in oorlogsdatasets. De geboortegegevens en ouders van onze Hendrikus zijn door de burgerlijke stand bevestigd.',url:'https://www.oorlogsbronnen.nl/',status:'research'});
  stories.hendrikus1915='Hendrikus ten Böhmer werd op 23 februari 1915 in Renkum geboren als zoon van Hendrik ten Böhmer en Maria Theodora Geurtsen. Hij was een jongere broer van Maria Theodora ten Böhmer (1910) en werkte als transportarbeider. Een lokale bron plaatst zijn woonadres aan de Willebrordweg 1 in Renkum. Hendrikus overleed op 1 februari 1943 in Renkum, slechts 27 jaar oud. De burgerlijke overlijdensakte bevestigt zijn identiteit, ouders, beroep en overlijdensdatum, maar noemt geen doodsoorzaak. Een lokale oorlogshistorische inventarisatie noemt hem bij de “andere mogelijke oorlogsslachtoffers” en vermeldt dat hij na de oorlog op Mariahof werd herbegraven; zijn graf staat daar geregistreerd als G 3 W 147. Tot nu toe is echter geen bewijs gevonden dat hij door een bombardement, executie, verzet, Arbeidseinsatz of een andere specifieke oorlogshandeling is overleden. Daarom blijft een verband met de oorlog een onderzoeksvraag en geen bewezen feit. Bij dit onderzoek moet hij bovendien worden onderscheiden van andere mannen met de naam Hendrikus ten Böhmer.';
}

/* Oudere familiecontext: de ten Böhmer-lijn vóór Renkum */
if(people.hendrik1806){
  people.hendrik1806.birth={date:'1806-05-23',year:1806,place:'Wyler, gemeente Niel (Duitsland)'};
  people.hendrik1806.death={date:'1886-02-07',year:1886,place:'Renkum'};
  people.hendrik1806.occupations=['Dagloner (1828)','Later bezembinder in de Fluitersmaat, Renkum'];
  people.hendrik1806.places=['Wyler, gemeente Niel (Duitsland)','Renkum · Fluitersmaat'];
  addEvent('hendrik1806',{year:1828,label:'Wordt in een genealogische reconstructie met notariële verwijzingen als dagloner vermeld; later werkte hij als bezembinder in de Fluitersmaat te Renkum.',status:'strong'});
  addEvent('hendrik1806',{year:1851,label:'Volgens een aangehaald notarieel stuk verkocht Hendrik op 21 juni 1851 voor ƒ25 een afgepaald gedeelte heidegrond.',status:'strong'});
  addEvent('hendrik1806',{year:1857,label:'Volgens een aangehaald notarieel stuk leende Hendrik op 18 mei 1857 ƒ400 tegen 5%, met verschillende percelen in de Fluitersmaat als onderpand.',status:'strong'});
  addArchive('hendrik1806',{type:'source',title:'Henricus ten Böhmer (1806–1886) · beroep en bezit',note:'Genealogische reconstructie met verwijzingen naar burgerlijke stand en notarieel archief: geboren 23 mei 1806 in Wyler (Niel), dagloner in 1828, later bezembinder in de Fluitersmaat te Renkum, overleden 7 februari 1886.',url:'https://www.wissenburg.info/gen/gen6.htm',status:'strong'});
  stories.hendrik1806='Henricus, later doorgaans Hendrik ten Böhmer genoemd, werd op 23 mei 1806 geboren in Wyler in de toenmalige gemeente Niel. Hij kwam in Renkum terecht en vormt een belangrijke schakel in de Nederlandse ten Böhmer-lijn. In 1828 wordt hij als dagloner vermeld; later werkte hij als bezembinder in de Fluitersmaat. Notariële verwijzingen laten zien dat hij in 1851 een stuk heidegrond verkocht en in 1857 geld leende met meerdere percelen in de Fluitersmaat als onderpand. Hij overleed op 7 februari 1886 in Renkum. Deze beroeps- en bezitsgegevens komen uit een genealogische reconstructie die naar notariële stukken verwijst en worden daarom als sterke, maar nog niet volledig primair gecontroleerde informatie weergegeven.';
}
})();