(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people)return;
const addArchive=(id,item)=>{const p=people[id];if(!p)return;p.archive=p.archive||[];if(!p.archive.some(a=>a.title===item.title))p.archive.push(item);};
const addEvent=(id,event)=>{const p=people[id];if(!p)return;p.events=p.events||[];if(!p.events.some(e=>String(e.year)===String(event.year)&&e.label===event.label))p.events.push(event);};

const hendrik='hendrik1692';
if(people[hendrik]){
  addArchive(hendrik,{
    type:'source',
    title:'1724: directe huishouden nog zonder familienaam Verbeek',
    note:'In het Meterense doopboek staat op 19 november 1724 de doop van Jan met vader “Hendrick Geertsen” en moeder “Heijlken Jansen”. Net als bij hun huwelijk in 1717 wordt de familienaam Verbeek hier niet gebruikt. Dit maakt het onwaarschijnlijk dat “Verbeek” in deze bronreeks al als vaste geschreven achternaam van Hendrik gold.',
    url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1828',
    status:'confirmed'
  });
  addEvent(hendrik,{
    year:1724,
    label:'Bij de doop van zoon Jan staat hij opnieuw als “Hendrick Geertsen”, zonder de familienaam Verbeek. De naam Verbeek wordt in de tot nu toe gevonden directe bronnen pas bij de volgende generatie expliciet zichtbaar.',
    status:'confirmed'
  });
  addArchive(hendrik,{
    type:'source',
    title:'1747: familienaam verschijnt bij een Hendrikse Verbeek',
    note:'Het Meterense doopboek noemt op 19 november 1747 een “Gerrit Hendrikse Verbeek” als vader van Jan, met Gijsbertje van Campen als moeder. Secundaire genealogieën plaatsen deze Gerrit als zoon van Hendrik Gerritsen/Geertsen en Heijltje Jans. De naamvorm is primair/near-primary bevestigd, maar de ouderkoppeling wordt nog niet als hard feit toegevoegd zonder een expliciete doop-, huwelijks- of boedelakte.',
    url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1828',
    status:'strong'
  });
}

const peter='peterhendrikse1720';
if(people[peter]){
  addArchive(peter,{
    type:'document',
    title:'1748: Peter heet expliciet Hendrikse Verbeek',
    note:'Het Meterense trouwregister noemt op 4 februari 1748 expliciet “Peter Hendrikse Verbeek” bij zijn huwelijk met Corsje Zweer van der Borg. Dit is een ondubbelzinnige primaire/near-primary Verbeek-vermelding in de bewezen directe lijn.',
    url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1829',
    status:'confirmed'
  });
  addEvent(peter,{
    year:1748,
    label:'Op 4 februari 1748 trouwde hij als “Peter Hendrikse Verbeek” met Corsje Zweer van der Borg. Daarmee is de familienaam Verbeek in deze generatie ondubbelzinnig schriftelijk aangetoond.',
    status:'confirmed'
  });
  addArchive(peter,{
    type:'source',
    title:'Naamvenster Verbeek in de directe familie: 1724–1747/1748',
    note:'Vader Hendrik wordt in 1717 en 1724 nog als Hendrik/Hendrick Geertsen geschreven. In november 1747 verschijnt een Gerrit Hendrikse Verbeek en in februari 1748 Peter Hendrikse Verbeek. Het vaste schriftelijke gebruik van Verbeek in deze generatie is daarmee uiterlijk 1747–1748 zichtbaar. Dit bewijst niet dat de naam toen pas ontstond.',
    status:'strong'
  });
}

if(people.gerrithendricksen17e){
  addArchive('gerrithendricksen17e',{
    type:'source',
    title:'Aparte Geldermalsense Verbeek-lijn: Gerrit Verbeek × Arneken Amswinkel',
    note:'Een afzonderlijke genealogische reconstructie noemt in Geldermalsen een Gerrit Verbeek, gehuwd in 1672 met Arneken Amswinkel, met onder meer zonen Hendrik en Dirk. De Geldermalsense dijkcedullen van omstreeks 1680 noemen bovendien daadwerkelijk een Gerrit Verbeek met grond en een huis bij het Zandpad. Deze Gerrit kan niet zonder meer met onze Gerrit Hendricksen worden gelijkgesteld: onze Gerrit wordt bij zijn huwelijksafkondiging in december 1674 expliciet als jongman/ongehuwd geregistreerd.',
    url:'https://jverbeek.nl/genealogie/verbeek/',
    status:'strong'
  });
  addArchive('gerrithendricksen17e',{
    type:'source',
    title:'Waarom Dirk Geertsen Verbeek (1713) niet automatisch familie is',
    note:'Het Meterense trouwboek noemt in 1713 “Dirk Geertsen Verbeek”, geboren te Meteren, gehuwd met Christijntje Joosten van Loenen. In 1715 wordt bij hun dochter Willemke opnieuw de vader als Dirk Geertsen Verbeek genoemd. Een secundaire reconstructie plaatst deze Dirk als zoon van de Geldermalsense Gerrit Verbeek en Arneken Amswinkel. Omdat er aantoonbaar meer dan één Gerrit/Geert-Verbeek-context in de streek bestond, wordt Dirk niet als broer van onze Hendrik Geertsen toegevoegd zonder een expliciete ouderakte.',
    url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1829',
    status:'strong'
  });
  addArchive('gerrithendricksen17e',{
    type:'source',
    title:'Onderzoeksregel: gelijknamige Verbeeks niet samenvoegen',
    note:'De combinatie van patroniemen (Gerritsen/Geertsen), dezelfde dorpen en een al bestaande familienaam Verbeek maakt conflatie zeer waarschijnlijk. Personen worden daarom alleen aan de directe lijn gekoppeld wanneer een primaire of zeer sterke bron de ouder-, partner- of erfgenamenrelatie expliciet maakt.',
    status:'confirmed'
  });
}
})();
