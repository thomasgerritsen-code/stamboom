(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people)return;
const stories=window.FAMILY_STORIES=window.FAMILY_STORIES||{};
const merge=(id,patch)=>{if(!people[id])people[id]={};Object.assign(people[id],patch)};
const addEvent=(id,event)=>{const p=people[id];if(!p)return;p.events=p.events||[];if(!p.events.some(e=>String(e.year)===String(event.year)&&e.label===event.label))p.events.push(event)};
const addArchive=(id,item)=>{const p=people[id];if(!p)return;p.archive=p.archive||[];if(!p.archive.some(a=>a.title===item.title))p.archive.push(item)};

/* DIRECTE MAKKINGA-LIJN: bestuurlijke rol in Ommen */
merge('evert1736',{
 name:'Evert Makkinga',branch:'makkinga',living:false,
 birth:{year:1736,place:'Ommen'},death:{date:'1815-06-24',year:1815,place:'Ommen'},
 parents:['jacobmakkinga','roelofjeschutte'],generation:'Directe voorouder · Makkinga',
 occupations:['Wieldraaier / stoelmaker','Gemeenteraadslid / municipaliteitslid te Ommen'],
 places:['Ommen · 2e wijk (1795)','Ommen · Kruisstraat 36 (1815)'],status:'confirmed',events:[],archive:[]
});
addEvent('evert1736',{year:1795,label:'In een genealogische reconstructie op basis van de volkstelling van 1795 wordt Evert in de tweede wijk van Ommen vermeld als wieldraaier met zijn gezin.',status:'strong'});
addEvent('evert1736',{year:1801,label:'Op 9 mei 1801 trad Evert Makkinga samen met H. Veenhoven op als municipaliteitslid bij de voltrekking van een huwelijk voor het stadsgerecht van Ommen.',status:'confirmed'});
addEvent('evert1736',{year:1815,label:'Overleden op 24 juni 1815 in zijn huis aan de Kruisstraat nr. 36 in Ommen. De burgerlijke stand noemt zijn beroep expliciet als gemeenteraadslid.',status:'confirmed'});
addEvent('evert1736',{year:'onderzoek',label:'Een genealogische reconstructie noemt Evert bovendien als een van de burgemeesters van Stad Ommen en als vertegenwoordiger in het Provinciaal Bestuur van Overijssel. Dit bijzondere detail moet nog rechtstreeks in een bestuurlijk archief worden gecontroleerd.',status:'research'});
addArchive('evert1736',{type:'document',title:'Overlijdensakte Evert Makkinga (1815)',note:'Collectie Overijssel, Ommen akte 26. Bevestigt overlijden 24 juni 1815, vader Jacob Makkinga, moeder Roelofje Schutte, partner Jennigje Hannessen en beroep gemeenteraadslid.',url:'https://www.openarchieven.nl/hco:648D0D48-19A2-44FC-8124-BB1F22C8857F',status:'confirmed'});
addArchive('evert1736',{type:'source',title:'Evert Makkinga als municipaliteitslid (1801)',note:'Transcriptie van huwelijken van het stadsgerecht Ommen: op 9 mei 1801 werd een huwelijk voltrokken voor de twee municipaliteitsleden H. Veenhoven en Evert Makkinga.',url:'https://historischeprojecten.nl/geheugenvanhardenberg/archieven/genealogie/huwelijken-in-de-omliggende-kerspels/huwelijken-te-ommen-1764-1810/',status:'confirmed'});
addArchive('evert1736',{type:'source',title:'Bestuurlijke en ambachtelijke context Evert Makkinga',note:'Secundaire genealogische reconstructie noemt hem wieldraaier/stoelmaker, burgemeester van Ommen en vertegenwoordiger van de stad in het Provinciaal Bestuur. De laatste twee functies blijven rechtstreeks te verifiëren.',url:'https://genealogie.profijt.info/2402/649.htm',status:'strong'});
stories.evert1736='Evert Makkinga, geboren rond 1736 in Ommen, combineerde een ambachtelijke loopbaan als wieldraaier/stoelmaker met een opvallende bestuurlijke rol. Een bron uit 1801 noemt hem expliciet municipaliteitslid van Ommen, en zijn overlijdensakte uit 1815 vermeldt zijn beroep als gemeenteraadslid. Hij overleed in zijn eigen huis aan de Kruisstraat nr. 36. Secundaire familiehistorische bronnen gaan nog verder en noemen hem burgemeester van Ommen en vertegenwoordiger in het Provinciaal Bestuur van Overijssel; die laatste twee functies worden voorlopig als onderzoekspunt bewaard totdat een bestuurlijk archiefstuk ze rechtstreeks bevestigt.';

merge('jacobmakkinga',{
 name:'Jacob Makkinga',branch:'makkinga',living:false,birth:{place:'Makkinga, Friesland'},generation:'Directe voorouder · Makkinga',occupations:[],places:['Makkinga, Friesland','Ommen'],status:'strong',events:[],archive:[]
});
merge('roelofjeschutte',{name:'Roelofje Schutte',branch:'makkinga',living:false,generation:'Directe voorouder · Makkinga',occupations:[],places:['Ommen'],status:'confirmed',events:[],archive:[]});
addEvent('jacobmakkinga',{year:1732,label:'Volgens een familiehistorische reconstructie kreeg Jacob, afkomstig uit Makkinga in Friesland, op 7 juni 1732 burgerrecht van Stad Ommen.',status:'strong'});
addEvent('jacobmakkinga',{year:1737,label:'Volgens dezelfde reconstructie kocht Jacob op 9 juli 1737 het zogeheten Siethuys aan/naast de Brugstraat in Ommen. De bron verwijst hiervoor naar een koopakte in het toenmalige Rijksarchief Zwolle.',status:'strong'});
addArchive('jacobmakkinga',{type:'source',title:'Jacob Makkinga · komst naar Ommen',note:'Familiehistorische reconstructie, gebaseerd op onder meer De Dardeklokke en een genoemde koopakte: afkomstig uit Makkinga (Friesland), burgerrecht Ommen in 1732 en aankoop van het Siethuys in 1737. De oorspronkelijke burgerrecht- en koopakte moeten nog rechtstreeks worden bekeken.',url:'https://genealogie.profijt.info/2402/762.htm',status:'strong'});
stories.jacobmakkinga='Jacob Makkinga vormt waarschijnlijk het begin van deze Makkinga-lijn in Ommen. Een familiehistorische reconstructie vermeldt dat hij afkomstig was uit het Friese dorp Makkinga, tussen ongeveer 1710 en 1730 naar Ommen kwam, in 1732 burgerrecht van de stad kreeg en in 1737 een huis bij de Brugstraat kocht. Daarmee kan de familienaam in deze tak rechtstreeks verbonden zijn met de plaats Makkinga. Omdat de oorspronkelijke burgerrecht- en koopakte nog niet rechtstreeks zijn gecontroleerd, blijft dit een sterke maar nog niet volledig bevestigde reconstructie.';

if(people.hannesmakkinga){
 people.hannesmakkinga.parents=['evert1736','jennigje1745'];
 addEvent('hannesmakkinga',{year:'familie',label:'Vader Evert Makkinga was wieldraaier/stoelmaker en bekleedde rond 1801 een bestuurlijke functie als municipaliteitslid van Ommen; zijn overlijdensakte noemt hem gemeenteraadslid.',status:'confirmed'});
}
merge('jennigje1745',{name:'Jennigje Hannessen (Mannessen)',branch:'makkinga',living:false,birth:{year:1745},death:{year:1831},generation:'Directe voorouder · Makkinga',occupations:[],places:['Ommen'],status:'strong',events:[],archive:[]});

/* DIRECTE VAN HARN-LIJN: soldaat in de achttiende eeuw */
merge('petervanharn1759',{
 name:'Peter van Harn',branch:'gerritsen',living:false,birth:{year:1759,place:'Wageningen'},death:{date:'1804-07-15',year:1804,place:'Wageningen'},
 generation:'Directe voorouder · Van Harn',occupations:['Soldaat (vermeld vanaf 1786)'],places:['Wageningen','Grave (huwelijk 1786)'],status:'strong',events:[],archive:[]
});
addEvent('petervanharn1759',{year:1759,label:'Gedoopt op 26 augustus 1759 in Wageningen, zoon van Johannes/Jan Stevens van Harn en Janna Stevens de Roos.',status:'strong'});
addEvent('petervanharn1759',{year:1786,label:'Wordt in genealogische bronnen vanaf 1786 als soldaat vermeld. In hetzelfde jaar trouwde hij met Grada Weeldie/Wilde; een bron verwijst zowel naar een huwelijk in Grave als naar het Wageningse trouwregister.',status:'strong'});
addEvent('petervanharn1759',{year:1795,label:'In Wageningse stadsstukken uit maart 1795 komt een Peter van Harn voor die één perceel onderhoudswerk langs de binnenhaven/vaart aannam. Naam, plaats en periode passen bij deze Peter, maar de identiteit is nog niet definitief bewezen.',status:'research'});
addEvent('petervanharn1759',{year:1804,label:'Overleden op 15 juli 1804 in Wageningen en op 19 juli begraven.',status:'strong'});
addArchive('petervanharn1759',{type:'source',title:'Peter van Harn (1759–1804) · soldaat',note:'Genealogische reconstructie noemt doop 26 augustus 1759 te Wageningen, beroep soldaat vanaf 1786, huwelijk met Grada Weeldie/Wilde en overlijden 15 juli 1804.',url:'https://www.genealogieonline.nl/stamboom-van-engeldorp-gastelaars/I1167093168.php',status:'strong'});
addArchive('petervanharn1759',{type:'source',title:'Huwelijk Peter van Harn & Grada Weeldie (1786)',note:'Een tweede genealogische publicatie verwijst naar archief 0176 inv.nr. 1662 pag. 189 voor de doop en archief 1437 inv.nr. 19 pag. 6 voor het huwelijk te Grave op 21 augustus 1786; ook het Wageningse trouwregister wordt genoemd.',url:'https://www.genealogieonline.nl/families-in-noord-oost-brabant/I5320.php',status:'strong'});
addArchive('petervanharn1759',{type:'source',title:'Mogelijke stadsopdracht Wageningen (1795)',note:'Historische Vereniging Oud-Wageningen noemt in een stadsrekening van 26 maart 1795 een Peter van Harn als aannemer van één perceel werk langs de binnenhaven/vaart. De persoonsmatch is aannemelijk maar nog niet rechtstreeks bewezen.',url:'https://www.oudwageningen.nl/wp-content/uploads/2010/02/CB_1983_HVOW.pdf',status:'research'});
stories.petervanharn1759='Peter van Harn werd in 1759 in Wageningen gedoopt en is een directe voorouder in de Van Harn-lijn. Genealogische bronnen vermelden hem vanaf 1786 als soldaat. In datzelfde jaar trouwde hij met Grada Weeldie, ook geschreven als Wilde. Zijn precieze regiment of garnizoen is nog niet gevonden. Een Wagenings stadsstuk uit 1795 noemt bovendien een Peter van Harn die onderhoudswerk langs de haven aannam; gezien naam, plaats en periode kan dat dezelfde man zijn, maar deze identificatie blijft voorlopig een onderzoeksaanwijzing.';

merge('gradawilde1761',{name:'Grada Weeldie (Wilde)',branch:'gerritsen',living:false,birth:{year:1761},death:{year:1842},generation:'Directe voorouder · Van Harn',occupations:[],places:['Wageningen'],status:'strong',events:[],archive:[]});
merge('andriesvanharn1804',{name:'Andries van Harn',branch:'gerritsen',living:false,birth:{date:'1804-02-23',year:1804,place:'Wageningen'},death:{year:1896},parents:['petervanharn1759','gradawilde1761'],generation:'Directe voorouder · Van Harn',occupations:['Dagloner'],places:['Wageningen · Achterstraat'],status:'strong',events:[],archive:[]});
merge('jannetjeschuilenburg1798',{name:'Jannetje van Schuilenburg',branch:'gerritsen',living:false,birth:{year:1798,place:'Wageningen'},death:{year:1862},generation:'Directe voorouder · Van Harn',occupations:[],places:['Wageningen'],status:'strong',events:[],archive:[]});
merge('petervanharn1827',{name:'Peter van Harn',branch:'gerritsen',living:false,birth:{year:1827,place:'Wageningen'},death:{date:'1915-01-14',year:1915,place:'Wageningen'},parents:['andriesvanharn1804','jannetjeschuilenburg1798'],generation:'Directe voorouder · Van Harn',occupations:[],places:['Wageningen'],status:'strong',events:[],archive:[]});
merge('jantjejansen1813',{name:'Jantje Jansen',branch:'gerritsen',living:false,birth:{year:1813},death:{year:1871},generation:'Directe voorouder · Van Harn',occupations:[],places:['Wageningen'],status:'strong',events:[],archive:[]});
merge('petervanharn1853',{name:'Peter van Harn',branch:'gerritsen',living:false,birth:{year:1853,place:'Wageningen'},death:{year:1928},parents:['petervanharn1827','jantjejansen1813'],generation:'Directe voorouder · Van Harn',occupations:[],places:['Wageningen'],status:'strong',events:[],archive:[]});
merge('everdinalooijen1849',{name:'Everdina Looijen',branch:'gerritsen',living:false,birth:{date:'1849-05-12',year:1849,place:'Wageningen'},death:{date:'1931-06-13',year:1931,place:'Wageningen'},generation:'Directe voorouder · Van Harn',occupations:[],places:['Wageningen'],status:'strong',events:[],archive:[]});
if(people.everdina1876){
 people.everdina1876.parents=['petervanharn1853','everdinalooijen1849'];
 addEvent('everdina1876',{year:'voorouders',label:'De Van Harn-lijn is verder teruggekoppeld via Peter van Harn (1853), Peter van Harn (1827) en Andries van Harn (1804) naar Peter van Harn (1759–1804), die vanaf 1786 als soldaat wordt vermeld.',status:'strong'});
 addArchive('everdina1876',{type:'source',title:'Directe Van Harn-lijn tot Peter van Harn (1759)',note:'Genealogische bronnen koppelen Everdina Hermina Jantje via haar vader Peter (1853), grootvader Peter (1827) en overgrootvader Andries (1804) aan Peter van Harn (1759–1804). De afzonderlijke schakels zijn sterk gedocumenteerd, maar de oudste keten is nog niet volledig met alle originele scans gecontroleerd.',url:'https://www.genealogieonline.nl/stamboom-van-engeldorp-gastelaars/I1167092987.php',status:'strong'});
}
})();
