(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people)return;
const addArchive=(id,item)=>{const p=people[id];if(!p)return;p.archive=p.archive||[];if(!p.archive.some(a=>a.title===item.title))p.archive.push(item);};
const id='gerrithendricksen17e';
if(!people[id])return;

addArchive(id,{
  type:'source',
  title:'Jurisdictie bevestigd: Hoge Bank van Deil',
  note:'Meteren viel in de 17e eeuw onder de Hoge Bank van Deil, samen met onder meer Geldermalsen, Deil, Enspijk, Rumpt, Gellicum, Wadenoijen en Drumpt. Daardoor zijn juist de rechterlijke registers van deze bank de belangrijkste bron om vóór 1674 naar familiebanden, erfgenamen, voogden en goederen van Gerrit Hendricksen te zoeken.',
  url:'https://www.ngv-afdelingen.nl/bet/category/projecten/schepenbanken-in-de-betuwe/',
  status:'confirmed'
});

addArchive(id,{
  type:'source',
  title:'Archiefroute: Gerechtsbank van Deil, 1536–1811',
  note:'Regionaal Archief Rivierenland beheert toegang 1513, Gerechtsbank van Deil. Uit secundaire verwijzingen blijkt dat het geloftesignaat met inventarisnummer 1095 in 1650–1652 daadwerkelijk transacties betreffende Meteren bevat. Zulke vrijwillige rechtspraak kan transporten, schuldbekentenissen, boedelscheidingen, huwelijkse voorwaarden, volmachten en andere familie-informatie bevatten. Dit is nu de prioritaire bron voor de generatie vóór Gerrit.',
  url:'https://regionaalarchiefrivierenland.nl/',
  status:'confirmed'
});

addArchive(id,{
  type:'source',
  title:'Regionale naam Verbeeck bestond al vóór 1674',
  note:'De familienaam Verbeeck is in de directe regio aantoonbaar ouder dan Gerrits huwelijk. In naburige rechterlijke en kerkelijke bronnen komen in de 17e eeuw verschillende Verbeeck-families voor. Dit maakt het plausibel dat Verbeeck in de latere reconstructie van de Meterense lijn een echte familienaam is, maar bewijst niet dat al deze Verbeecks tot Gerrits gezin behoorden.',
  url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=2201',
  status:'research'
});

addArchive(id,{
  type:'source',
  title:'Tricht/Buurmalsen: vroeg Verbeeck-netwerk als onderzoeksspoor',
  note:'Schepenprotocollen van Buurmalsen en Tricht noemen in 1644 en 1646 Jan Corneliss de oude, korenkoper, met echtgenote Maijken Gijsbertsdr. In 1648 verschijnt Andries Hendriksen van Santen met Huybertgen Jansdr. Secundaire genealogische reconstructies identificeren Jan Corneliss als Verbeeck en Huybertgen als zijn dochter. De juridische stukken bevestigen de personen en transacties, maar de familienaam en ouder-dochterkoppeling zijn in de geraadpleegde aktesamenvattingen niet expliciet genoeg om deze groep aan Gerrit Hendricksen te koppelen.',
  url:'https://rvvz.home.xs4all.nl/santenkraam/Buren/bronnen/JAMvS/genealogie.html',
  status:'research'
});

addArchive(id,{
  type:'source',
  title:'Hypothese: een Hendrick-Verbeeck-gezin in Meteren',
  note:'Gerrits patroniem Hendricksen wijst op een vader Hendrick. Tegelijk verschijnen rond 1675–1681 meerdere ongehuwde Hendricks/Hendricksen uit Meteren, en één secundaire reconstructie noemt Lijsken Hendrick uit Meteren expliciet “VERBEECK”. De werkhypothese is daarom dat Gerrit en mogelijk enkele van deze tijdgenoten kinderen van een Hendrick Verbeeck kunnen zijn. Er is nog geen primaire akte gevonden die dit bewijst; daarom zijn geen ouders of broers/zussen aan Gerrit gekoppeld.',
  url:'https://kooijktr.home.xs4all.nl/00/00-00013.htm',
  status:'research'
});

addArchive(id,{
  type:'source',
  title:'Verworpen spoor: Meerten bij Lienden is niet Meteren',
  note:'Een inwonerslijst uit 1693 voor “Meerten” bleek betrekking te hebben op het buurtschap Meerten bij Lienden en niet op Meteren bij Geldermalsen. Personen uit die lijst zijn daarom bewust niet gebruikt voor deze Verbeek-lijn.',
  status:'confirmed'
});

})();
