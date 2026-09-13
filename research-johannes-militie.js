(()=>{
'use strict';
const p=window.FAMILY_DATA?.people?.johannes1895;
if(!p)return;
const addEvent=(event)=>{p.events=p.events||[];if(!p.events.some(e=>String(e.year)===String(event.year)&&e.label===event.label))p.events.push(event)};
const addArchive=(item)=>{p.archive=p.archive||[];if(!p.archive.some(a=>a.title===item.title))p.archive.push(item)};

addEvent({year:1915,label:'Johannes viel op grond van zijn geboortejaar 1895 onder de reguliere militielichting 1915. Er is nog geen individuele militie-inschrijving of keuringsuitslag van hem online teruggevonden; daadwerkelijke dienst, vrijstelling en onderdeel blijven daarom te onderzoeken.',status:'research'});

addArchive({type:'source',title:'Militielichting 1915 · Johannes Makkinga',note:'Volgens de landelijke regel voor reguliere miliciens wordt bij het geboortejaar 20 opgeteld om de lichting te bepalen. Voor Johannes (1895) is dat lichting 1915. Collectie Overijssel bewaart provinciale militieregisters vanaf lichting 1865, waaronder alfabetische naamlijsten/registers per gemeente. De individuele regel voor Johannes is nog niet digitaal op naam teruggevonden en moet in het register van lichting 1915 worden gecontroleerd.',url:'https://collectieoverijssel.nl/zoekhulp/militieregisters/',status:'research'});
addArchive({type:'source',title:'Zoekhulp Nederlandse militairen 1813–1940',note:'Het Nationaal Archief bevestigt dat voor reguliere miliciens het lichtingsjaar doorgaans geboortejaar + 20 is. Voor personen van vóór 1904 kunnen daarnaast stamboeken en staten van dienst relevant zijn als een gewone dienstplichtkaart ontbreekt.',url:'https://www.nationaalarchief.nl/onderzoeken/zoekhulpen/militairen-onderofficieren-en-soldaten-landmacht-nederland-1813-1940',status:'confirmed'});
})();
