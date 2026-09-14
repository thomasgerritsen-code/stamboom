(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people)return;
const addArchive=(id,item)=>{const p=people[id];if(!p)return;p.archive=p.archive||[];if(!p.archive.some(a=>a.title===item.title))p.archive.push(item);};
const id='gerrithendricksen17e';
if(!people[id])return;

addArchive(id,{
  type:'source',
  title:'Kandidaat-vader getest: Hendrick Gerritsen van Empel',
  note:'In Meteren trouwde op 27 maart 1665 een Hendrick Gerritsen als jongeman met Mariken Cornelissen van Steenis. Het doopboek laat daarna kinderen van dit paar zien vanaf 1666. Een onafhankelijke genealogische reconstructie identificeert deze Hendrick als Hendrick Gerritsen van Empel. Omdat onze Gerrit Hendricksen in december 1674 zelf al als jongeman trouwde, past deze in 1665 nog ongehuwde Hendrick chronologisch niet als normale vader. Alleen een onbewezen veel eerdere buitenechtelijke geboorte zou dat mogelijk maken. Hij wordt daarom niet als vader gekoppeld.',
  url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1829',
  status:'strong'
});

addArchive(id,{
  type:'source',
  title:'Waarom het Hendricks(en)-cluster geen familie-bewijs is',
  note:'Het Meterense trouwboek bevat in 1664–1681 veel verschillende jonge mannen en vrouwen met het patroniem Hendricks/Hendricksen. Sommige dragen aantoonbaar andere toevoegingen of familienamen, zoals Vreem en Van der Hoeve. Het patroniem betekent vooral “kind van een Hendrick” en is op zichzelf onvoldoende om hen als broers en zussen van Gerrit te beschouwen.',
  url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1829',
  status:'confirmed'
});

addArchive(id,{
  type:'source',
  title:'Nabije maar nog afzonderlijke Verbeeck-tak in Ophemert',
  note:'Het trouwboek van Ophemert gebruikt de naam Verbeeck expliciet: Peterken Hermens Verbeeck trouwde er in juni 1679 en Dirck Gerritsz Verbeeck in 1685. Daarmee staat vast dat de familienaam in de directe regio in Gerrits tijd werd gebruikt. Er is nog geen akte gevonden die deze Ophemertse Verbeecks aan Gerrit Hendricksen uit Meteren koppelt, dus deze groep blijft een afzonderlijk onderzoeksspoor.',
  url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=2201',
  status:'confirmed'
});

addArchive(id,{
  type:'source',
  title:'Secundaire identificatie Hendrick Gerritsen als Van Empel',
  note:'Een genealogische reconstructie van de familie Van Steenis noemt Mariken Cornelissen van Steenis, gehuwd op 27 maart 1665 te Meteren, als echtgenote van Hendrik Gerritsen van Empel. Een tweede kwartierstaat plaatst Hendrik Gerritsen van Empel eveneens naast Mariken van Stenis en noemt Gerrit van Empel als een generatie erboven. Dit is secundair bewijs en wordt alleen gebruikt om de kandidaat van onze Verbeek-lijn te onderscheiden, niet om nieuwe voorouders toe te voegen.',
  url:'https://genealogie.lexellen.nl/gegevens.htm',
  status:'research'
});

addArchive(id,{
  type:'source',
  title:'Stand van bewijs: ouderpaar Gerrit Hendricksen blijft onbekend',
  note:'Na toetsing van de meest voor de hand liggende Hendrick Gerritsen in Meteren is nog steeds geen primaire bron gevonden die Gerrits vader of moeder noemt. De hoogste prioriteit blijft daarom een boedel-, voogdij-, transport- of erfdelingsakte uit de Hoge Bank van Deil waarin Gerrit samen met verwanten wordt genoemd.',
  status:'research'
});

})();
