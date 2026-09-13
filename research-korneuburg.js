(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people?.gerrit1922)return;
const p=people.gerrit1922;
p.events=p.events||[];
p.archive=p.archive||[];

const addEvent=e=>{if(!p.events.some(x=>x.year===e.year&&x.label===e.label))p.events.push(e)};
const addArchive=a=>{if(!p.archive.some(x=>x.title===a.title))p.archive.push(a)};

addEvent({
  year:'1941–1945',
  label:'Onderzoeksspoor: Gerrit zat volgens familie-informatie in een kamp vlak bij Klosterneuburg. De sterkste historische match is het arbeiderskamp bij de Schiffswerft Korneuburg, direct aan de Donau tegenover Klosterneuburg. De werf gebruikte buitenlandse arbeiders en krijgsgevangenen; in 1941–1942 werkten er bovendien circa 400 Nederlandse scheepsbouwers uit Rotterdam. Een persoonlijk werf- of kampdocument op Gerrits naam moet deze koppeling nog definitief bevestigen.',
  status:'strong'
});

addArchive({
  type:'source',
  title:'Onderzoeksspoor: Schiffswerft Korneuburg en Nederlands arbeiderscontingent',
  note:'Universiteitsonderzoek naar de Korneuburger werf vermeldt een barakkenkamp naast de werf voor Duitse arbeiders, buitenlandse arbeiders en krijgsgevangenen. In 1941–1942 waren daarnaast ongeveer 400 Nederlandse scheepsbouwers uit Rotterdam op het terrein werkzaam. Dit past sterk bij de familie-informatie dat Gerrit in een kamp vlak bij Klosterneuburg verbleef, maar is nog geen persoonsbewijs.',
  url:'https://services.phaidra.univie.ac.at/api/object/o:1251585/get',
  status:'strong'
});

addArchive({
  type:'source',
  title:'NS-context werkgever: Schiffswerft Korneuburg / Reichswerke',
  note:'De Schiffswerft Korneuburg werd in de NS-periode als oorlogsbelangrijk bedrijf opgenomen in de Reichswerke AG für Binnenschiffahrt “Hermann Göring”. De werf produceerde voor het Reichsverkehrsministerium en de Kriegsmarine. Als Gerrits persoonskoppeling aan deze werf wordt bevestigd, is dit de relevante werkgeverscontext.',
  url:'https://de.wikipedia.org/wiki/Schiffswerft_Korneuburg',
  status:'strong'
});

addArchive({
  type:'photo',
  title:'Contextfoto: voormalige Schiffswerft Korneuburg',
  note:'Huidige opname van het voormalige werfterrein in Korneuburg. Dit is geen foto uit Gerrits oorlogsjaren, maar toont de plaats die op basis van het huidige onderzoek de sterkste kandidaat is voor zijn werk- en kampomgeving. Foto: Thomas Ledl, CC BY-SA 4.0.',
  image:'https://upload.wikimedia.org/wikipedia/commons/9/9e/Korneuburg_Schiffswerft_1.jpg',
  url:'https://commons.wikimedia.org/wiki/File:Korneuburg_Schiffswerft_1.jpg',
  status:'confirmed'
});

window.FAMILY_STORIES=window.FAMILY_STORIES||{};
window.FAMILY_STORIES.gerrit1922='Gerrit Makkinga werd op 2 maart 1922 in Enschede geboren als zoon van Johannes Makkinga en Everijntje Schoonderbeek. In 1934 verhuisde hij met zijn gezin naar Pijnacker. Tijdens de Tweede Wereldoorlog kwam hij als Nederlandse verplichte arbeider in het Duitse/Oostenrijkse arbeidssysteem terecht. Familie-informatie plaatst zijn kamp vlak bij Klosterneuburg. De sterkste historische match is momenteel het arbeiderskamp bij de Schiffswerft Korneuburg, direct aan de Donau tegenover Klosterneuburg. Deze werf was in de NS-periode een oorlogsbelangrijk bedrijf binnen de Reichswerke AG für Binnenschiffahrt “Hermann Göring”. Historisch onderzoek vermeldt dat er naast de werf een barakkenkamp voor buitenlandse arbeiders en krijgsgevangenen stond en dat in 1941–1942 ongeveer 400 Nederlandse scheepsbouwers uit Rotterdam op het werfterrein werkten. Dit sluit opvallend goed aan bij Gerrits bekende status als “Verpflichtete Arbeiter”, maar een persoonsdocument waarop zijn naam rechtstreeks aan Korneuburg of de werf wordt gekoppeld blijft nodig voor definitief bewijs. In 1945 werd Gerrit geregistreerd voor repatriëring naar Nederland. Later woonde hij met Geertje Venema in de omgeving van Denekamp, waar hij zeer waarschijnlijk diaken en daarna ouderling was. Hij overleed op 12 december 1997.';
})();
