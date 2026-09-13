(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people)return;
const merge=(id,patch)=>{ if(!people[id]) people[id]={}; Object.assign(people[id],patch); };
const addEvent=(id,event)=>{ const p=people[id]; if(!p)return; p.events=p.events||[]; if(!p.events.some(e=>String(e.year)===String(event.year)&&e.label===event.label)) p.events.push(event); };
const addArchive=(id,item)=>{ const p=people[id]; if(!p)return; p.archive=p.archive||[]; if(!p.archive.some(a=>a.title===item.title)) p.archive.push(item); };

/*
 * Oudere Verbeek-lijn.
 * De 17e-eeuwse naamvoering wordt bewust voorzichtig weergegeven:
 * de primaire kerkboektranscripties noemen Gerrit als Hendricksen/Hendricxse
 * en zijn zoon als Hendrik Gerritsen/Geertsen. De koppeling naar de latere
 * familienaam Verbeek is genealogisch sterk, maar de naam "Verbeek" staat
 * in deze oudste inschrijvingen niet steeds expliciet vermeld.
 */

if(people.jan1871){
  people.jan1871.birth={date:'1871-07-05',year:1871,place:'Heerewaarden'};
  people.jan1871.death={date:'1935-09-11',year:1935,place:'Renkum'};
  people.jan1871.parents=['barend1826','geertruidavanaalst1840'];
  people.jan1871.places=Array.from(new Set([...(people.jan1871.places||[]),'Heerewaarden','Duisburg (gezin, uiterlijk 1907)','Renkum']));
  addEvent('jan1871',{year:1871,label:'Geboren op 5 juli 1871 in Heerewaarden als zoon van Barend Verbeek en Geertruida van Aalst.',status:'strong'});
  addEvent('jan1871',{year:1935,label:'Overleden op 11 september 1935 in Renkum.',status:'strong'});
  addArchive('jan1871',{type:'source',title:'Jan Verbeek (1871–1935) – ouderkoppeling',note:'Genealogische reconstructie koppelt Jan Verbeek aan Barend Verbeek en Geertruida van Aalst. De lijn is in het stamboek als sterke match opgenomen; primaire akten blijven leidend bij eventuele verschillen.',url:'https://www.genealogieonline.nl/stamboom-van-schaik-oskam-verbeek-werkhoven/I9214.php',status:'strong'});
}

merge('barend1826',{
  name:'Barend Verbeek',branch:'gerritsen',living:false,
  birth:{date:'1826-02-18',year:1826,place:'Waardenburg / Neerijnen'},
  death:{date:'1876-09-10',year:1876,place:'Heerewaarden'},
  parents:['hendrik1794','mariamagdalena1792'],generation:'Oudere Verbeek-lijn',
  occupations:['Boerenknecht (1864)','Arbeider (1868)'],
  places:['Waardenburg / Neerijnen','Varik','Heerewaarden'],status:'strong',
  events:[
    {year:1826,label:'Geboren op 18 februari 1826 in de omgeving Waardenburg/Neerijnen.',status:'strong'},
    {year:1864,label:'Huwde op 2 april 1864 in Varik met Geertruida van Aalst; in de huwelijkscontext wordt hij als boerenknecht vermeld.',status:'strong'},
    {year:1868,label:'In een geboorteakte van een kind als arbeider vermeld.',status:'strong'},
    {year:1876,label:'Overleden op 10 september 1876 in Heerewaarden.',status:'strong'}
  ],
  archive:[
    {type:'source',title:'Barend Verbeek & Geertruida van Aalst',note:'Secundaire genealogische reconstructie met levensdata, huwelijk en gezin. Gegevens worden in de site als sterke match getoond totdat ieder detail rechtstreeks aan de burgerlijke stand is gekoppeld.',url:'https://www.genealogieonline.nl/stamboom-van-schaik-oskam-verbeek-werkhoven/I9193.php',status:'strong'},
    {type:'source',title:'Stamboom Floor Eleonora Lemmen',note:'De aangeleverde familiestamboom noemt Barend Verbeek (18-02-1826 – 10-09-1876) in de directe voorouderlijn.',status:'confirmed'}
  ]
});

merge('geertruidavanaalst1840',{
  name:'Geertruida van Aalst',branch:'gerritsen',living:false,
  birth:{date:'1840-09-16',year:1840},parents:[],generation:'Oudere Verbeek-lijn',
  occupations:[],places:['Varik / Heerewaarden-regio'],status:'strong',
  events:[{year:1864,label:'Huwde op 2 april 1864 in Varik met Barend Verbeek.',status:'strong'}],
  archive:[{type:'source',title:'Gezin Verbeek–Van Aalst',note:'Geertruida van Aalst wordt als echtgenote van Barend Verbeek en moeder van Jan Verbeek (1871) in de genealogische reconstructie genoemd.',url:'https://www.genealogieonline.nl/stamboom-van-schaik-oskam-verbeek-werkhoven/I9193.php',status:'strong'}]
});

merge('hendrik1794',{
  name:'Hendrik Verbeek',branch:'gerritsen',living:false,
  birth:{date:'1794-03-13',year:1794,place:'Meteren'},
  death:{date:'1881-06-29',year:1881,place:'Neerijnen'},
  parents:['hendrikpeters1750','clazinadebruijn'],generation:'Oudere Verbeek-lijn',
  occupations:[],places:['Meteren','Waardenburg','Neerijnen'],status:'strong',
  events:[
    {year:1794,label:'Geboren op 13 maart 1794 in Meteren.',status:'strong'},
    {year:1815,label:'Huwde op 25 februari 1815 in Waardenburg met Maria Magdalena van den Berg. De huwelijksakte noemt Hendrik Peters Verbeek en Clazina de Bruijn als zijn ouders.',status:'confirmed'},
    {year:1881,label:'Overleden op 29 juni 1881 in Neerijnen.',status:'strong'}
  ],
  archive:[
    {type:'document',title:'Huwelijk Hendrik Verbeek & Maria Magdalena van den Berg (1815)',note:'Burgerlijke stand Waardenburg, 25 februari 1815. De akte koppelt Hendrik aan zijn ouders Hendrik Peters Verbeek en Clazina de Bruijn.',url:'https://www.openarchieven.nl/gld:A25F0B51-0CE9-4546-9D92-90AD09C62022',status:'confirmed'}
  ]
});

merge('mariamagdalena1792',{
  name:'Maria Magdalena van den Berg',branch:'gerritsen',living:false,
  birth:{year:1792},death:{year:1831},parents:[],generation:'Oudere Verbeek-lijn',
  occupations:[],places:['Waardenburg / Neerijnen-regio'],status:'strong',
  events:[{year:1815,label:'Huwde op 25 februari 1815 in Waardenburg met Hendrik Verbeek.',status:'confirmed'}],
  archive:[{type:'document',title:'Huwelijksakte 1815',note:'De huwelijksakte noemt haar als Maria Magdalena van den Berg en vermeldt haar ouders Barend van den Berg en Aaltje van de Pol.',url:'https://www.openarchieven.nl/gld:A25F0B51-0CE9-4546-9D92-90AD09C62022',status:'confirmed'}]
});

merge('hendrikpeters1750',{
  name:'Hendrik Peters Verbeek',branch:'gerritsen',living:false,
  birth:{date:'1750-08-09',year:1750,place:'Geldermalsen'},
  parents:['peterhendrikse1720','corsjevanderburg'],generation:'Oudere Verbeek-lijn',
  occupations:[],places:['Geldermalsen','Meteren'],status:'strong',
  events:[{year:1750,label:'Gedoopt op 9 augustus 1750 in Geldermalsen volgens de genealogische reconstructie van de kerkboeklijn.',status:'strong'},{year:1779,label:'Huwde op 27 februari 1779 in Meteren met Clazina de Bruijn.',status:'strong'}],
  archive:[{type:'source',title:'Hendrik Peters Verbeek – kerkboeklijn',note:'Genealogische reconstructie koppelt Hendrik Peters Verbeek aan Peter Hendrikse Verbeek en aan het huwelijk met Clazina de Bruijn.',url:'https://www.genealogieonline.nl/stamboom-van-schaik-oskam-verbeek-werkhoven/I9155.php',status:'strong'}]
});

merge('clazinadebruijn',{
  name:'Clazina de Bruijn',branch:'gerritsen',living:false,birth:{},parents:[],generation:'Oudere Verbeek-lijn',
  occupations:[],places:['Meteren-regio'],status:'strong',
  events:[{year:1779,label:'Huwde op 27 februari 1779 in Meteren met Hendrik Peters Verbeek.',status:'strong'}],
  archive:[{type:'source',title:'Huwelijk Verbeek–De Bruijn (1779)',note:'Kerkboek-/genealogische reconstructie van het huwelijk in Meteren.',url:'https://www.genealogieonline.nl/stamboom-van-schaik-oskam-verbeek-werkhoven/I9155.php',status:'strong'}]
});

merge('peterhendrikse1720',{
  name:'Peter Hendrikse Verbeek',branch:'gerritsen',living:false,
  birth:{date:'1720-03-12',year:1720,place:'Meteren'},death:{date:'1798-10-10',year:1798},
  parents:['hendrik1692','heijltjejans'],generation:'Oudere Verbeek-lijn',
  occupations:[],places:['Meteren'],status:'strong',
  events:[
    {year:1720,label:'Gedoopt op 12 maart 1720 in Meteren.',status:'strong'},
    {year:1748,label:'Huwde in 1748 met Corsje (Zweers) van der Burg.',status:'strong'},
    {year:1756,label:'Na haar overlijden hertrouwde hij in 1756 met Helena van der Burg.',status:'strong'},
    {year:1798,label:'Overleden op 10 oktober 1798 volgens de genealogische reconstructie.',status:'strong'}
  ],
  archive:[{type:'source',title:'Peter Hendrikse Verbeek (1720–1798)',note:'Secundaire genealogische reconstructie van doop, huwelijken en ouderkoppeling.',url:'https://www.genealogieonline.nl/stamboom-van-schaik-oskam-verbeek-werkhoven/I9147.php',status:'strong'}]
});

merge('corsjevanderburg',{
  name:'Corsje / Zweers van der Burg',branch:'gerritsen',living:false,birth:{},parents:[],generation:'Oudere Verbeek-lijn',
  occupations:[],places:['Meteren-regio'],status:'strong',
  events:[{year:1748,label:'Huwde in 1748 met Peter Hendrikse Verbeek.',status:'strong'}],
  archive:[{type:'source',title:'Eerste huwelijk Peter Hendrikse Verbeek',note:'Genealogische reconstructie noemt Corsje/Zweers van der Burg als eerste echtgenote en moeder in de directe lijn naar Hendrik Peters Verbeek.',url:'https://www.genealogieonline.nl/stamboom-van-schaik-oskam-verbeek-werkhoven/I9147.php',status:'strong'}]
});

merge('hendrik1692',{
  name:'Hendrik Gerritsen / Verbeek-lijn',branch:'gerritsen',living:false,
  birth:{date:'1692-10-02',year:1692,place:'Meteren'},parents:['gerrithendricksen17e','lijskendirks17e'],generation:'17e-eeuwse Verbeek-lijn',
  occupations:[],places:['Meteren'],status:'strong',
  events:[
    {year:1692,label:'Gedoopt op 2 oktober 1692 in Meteren. In de kerkboektranscriptie staat de vader als Gerrit Hendrikse; de latere familienaam Verbeek staat in deze inschrijving niet expliciet vermeld.',status:'confirmed'},
    {year:1717,label:'Huwde op 14 maart 1717 in Meteren met Heijltje Jans. De naamvorm in de transcriptie varieert als Gerritsen/Geertsen.',status:'confirmed'}
  ],
  archive:[
    {type:'document',title:'Doopboek Meteren – Hendrik (2 oktober 1692)',note:'Kerkboektranscriptie: doop van Hendrik met vader Gerrit Hendrikse. Deze primaire/near-primary transcriptie ondersteunt de generatiekoppeling, maar gebruikt nog niet consequent de familienaam Verbeek.',url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1828',status:'confirmed'},
    {type:'document',title:'Trouwboek Meteren – huwelijk 1717',note:'Transcriptie van het huwelijk van Hendrik en Heijltje Jans op 14 maart 1717.',url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1829',status:'confirmed'}
  ]
});

merge('heijltjejans',{
  name:'Heijltje Jans',branch:'gerritsen',living:false,birth:{},parents:[],generation:'17e/18e-eeuwse Verbeek-lijn',
  occupations:[],places:['Meteren'],status:'confirmed',
  events:[{year:1717,label:'Huwde op 14 maart 1717 in Meteren met Hendrik Gerritsen/Geertsen.',status:'confirmed'}],
  archive:[{type:'document',title:'Trouwboek Meteren – huwelijk 1717',note:'Kerkboektranscriptie van het huwelijk.',url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1829',status:'confirmed'}]
});

merge('gerrithendricksen17e',{
  name:'Gerrit Hendricksen',branch:'gerritsen',living:false,birth:{},parents:[],generation:'17e-eeuwse voorouder Verbeek-lijn',
  occupations:[],places:['Meteren','Hemert / Nederhemert','Ophemert'],status:'strong',
  events:[
    {year:1674,label:'Op 6 december 1674 eerste huwelijksafkondiging als jongeman van Meteren, woonachtig in Hemert, met Jenneke Dircks, weduwe van Gerrit Stevensen.',status:'confirmed'},
    {year:1680,label:'Op 14 augustus 1680 in ondertrouw als weduwnaar van Jenneke Dircks met Heesken Segers; huwelijk op 12 september 1680 in Ophemert.',status:'confirmed'},
    {year:1692,label:'Op 11 februari 1692 trouwde hij, als weduwnaar van Heesken Segers, met Lijsken Dirks uit Meteren.',status:'confirmed'},
    {year:1692,label:'Op 2 oktober 1692 werd zoon Hendrik in Meteren gedoopt. De doopinschrijving noemt de vader als Gerrit Hendrikse.',status:'confirmed'}
  ],
  archive:[
    {type:'document',title:'Trouwboek Meteren/Ophemert – Gerrit Hendricksen',note:'Transcripties documenteren Gerrits huwelijken in 1674, 1680 en 1692. Zijn exacte geboortejaar en ouders zijn nog niet vastgesteld.',url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1829',status:'confirmed'},
    {type:'source',title:'Onderzoeksnotitie naam Verbeek',note:'De 17e-eeuwse stukken noemen hem Hendricksen/Hendricxse; “Gerrit H. Verbeek, ca. 1640” wordt daarom niet als bewezen naam/geboortejaar weergegeven. Onderzoek naar zijn ouders blijft open.',status:'research'}
  ]
});

merge('lijskendirks17e',{
  name:'Lijsken Dirks',branch:'gerritsen',living:false,birth:{},parents:[],generation:'17e-eeuwse Verbeek-lijn',
  occupations:[],places:['Meteren'],status:'confirmed',
  events:[{year:1692,label:'Huwde op 11 februari 1692 met Gerrit Hendricksen en wordt in de kerkboeklijn als moeder van de in oktober 1692 gedoopte Hendrik gekoppeld.',status:'confirmed'}],
  archive:[{type:'document',title:'Trouwboek Meteren – 1692',note:'Kerkboektranscriptie noemt Lijsken Dirks als bruid van Gerrit Hendricksen.',url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1829',status:'confirmed'}]
});

})();
