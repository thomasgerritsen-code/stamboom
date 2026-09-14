(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people)return;
const merge=(id,patch)=>{if(!people[id])people[id]={};Object.assign(people[id],patch);};
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

/* Kinderen rond Hendrik Geertsen en Heijltje Jans: bewijssterkte per persoon. */
merge('jan1724verbeeklijn',{
  name:'Jan (zoon van Hendrick Geertsen)',branch:'gerritsen',living:false,
  birth:{date:'1724-11-19',year:1724,place:'Meteren'},parents:['hendrik1692','heijltjejans'],
  generation:'Broers/zussen Peter Hendrikse Verbeek',occupations:[],places:['Meteren'],status:'confirmed',
  events:[{year:1724,label:'Gedoopt op 19 november 1724 in Meteren als Jan, zoon van Hendrick Geertsen en Heijlken Jansen. In deze inschrijving staat geen achternaam Verbeek.',status:'confirmed'}],
  archive:[{type:'document',title:'Doop Meteren – Jan (1724)',note:'De dooptranscriptie noemt expliciet Hendrick Geertsen en Heijlken Jansen als ouders. De familienaam Verbeek wordt niet vermeld.',url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1828',status:'confirmed'}]
});

merge('gerrithendrikseverbeek1717',{
  name:'Gerrit Hendrikse Verbeek',branch:'gerritsen',living:false,birth:{year:1717,place:'Meteren'},
  parents:['hendrik1692','heijltjejans'],generation:'Broers/zussen Peter Hendrikse Verbeek',occupations:[],places:['Meteren'],status:'strong',
  events:[{year:1747,label:'Op 19 november 1747 wordt hij in het Meterense doopboek als “Gerrit Hendrikse Verbeek” genoemd bij de doop van zoon Jan; moeder is Gijsbertje van Campen.',status:'confirmed'},{year:1754,label:'Gijsbertje van Campen/Kamoen, huisvrouw van Gerret Verbeek, treedt als doopgetuige op bij een kind van Geertje Verbeek en Tijmen van de Kop. Dit ondersteunt het bestaande familiecluster.',status:'strong'}],
  archive:[{type:'document',title:'Doop Meteren 1747 – Gerrit Hendrikse Verbeek',note:'Expliciete vermelding van de naamvorm Gerrit Hendrikse Verbeek met Gijsbertje van Campen.',url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1828',status:'confirmed'},{type:'source',title:'Ouderkoppeling aan Hendrik Geertsen × Heijltje Jans',note:'De ouderkoppeling is breed aanwezig in genealogische reconstructies en wordt ondersteund door patroniem, plaats en het onderlinge getuigenpatroon van de Verbeek-familiegroep. Een directe doop- of boedelakte voor Gerrit zelf is nog gewenst.',url:'https://www.genealogieonline.nl/stamboom-van-schaik-oskam-verbeek-werkhoven/I9146.php',status:'strong'}]
});

merge('aaltjehendriksverbeek1722',{
  name:'Aaltje Hendriks Verbeek',branch:'gerritsen',living:false,birth:{year:1722,place:'Geldermalsen / Meteren-regio'},
  parents:['hendrik1692','heijltjejans'],generation:'Broers/zussen Peter Hendrikse Verbeek',occupations:[],places:['Meteren'],status:'strong',
  events:[{year:1751,label:'Aaltje Verbeek treedt als doopgetuige op bij Crijn, kind van Tijmen van de Kop en Geertje Verbeek.',status:'strong'},{year:1753,label:'Aaltje Verbeek is opnieuw doopgetuige bij een kind van Geertje Verbeek en Tijmen van de Kop.',status:'strong'},{year:1754,label:'Op 28 april 1754 trouwt zij in Meteren als “Aaltje Hendriks Verbeek”, jonge dochter geboren en wonend aldaar, met Klaas Jansen van Ooij.',status:'confirmed'}],
  archive:[{type:'document',title:'Trouwboek Meteren – Aaltje Hendriks Verbeek (1754)',note:'Primaire/near-primary transcriptie noemt haar expliciet Aaltje Hendriks Verbeek, jonge dochter geboren en wonend te Meteren.',url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1829',status:'confirmed'},{type:'source',title:'Ouderkoppeling Hendrik × Heijltje',note:'De koppeling aan Hendrik Gerritsen/Geertsen en Heijltje Jans is sterk secundair ondersteund; het patroniem Hendriks, de woonplaats en het getuigenpatroon passen, maar een expliciete doopakte met beide ouders is nog gewenst.',url:'https://www.genealogieonline.nl/stamboom-van-schaik-oskam-verbeek-werkhoven/I9150.php',status:'strong'}]
});

merge('geertjebeek1729',{
  name:'Geertje Verbeek',branch:'gerritsen',living:false,birth:{year:1729,place:'Meteren'},death:{year:1794,place:'Meteren'},
  parents:['hendrik1692','heijltjejans'],generation:'Broers/zussen Peter Hendrikse Verbeek',occupations:[],places:['Meteren'],status:'strong',
  events:[{year:1751,label:'Trouwde op 30 mei 1751 in Meteren als “Geertje Verbeek”, jonge dochter geboren en wonend aldaar, met Tijmen van de Kop.',status:'confirmed'},{year:1751,label:'Bij de doop van haar zoon Crijn staat Aaltje Verbeek als getuige.',status:'strong'},{year:1754,label:'Bij de doop van zoon Hendrik staat Gijsbertje van Campen/Kamoen, huisvrouw van Gerret Verbeek, als getuige. Dit vormt een belangrijk familiecluster rond Geertje, Aaltje en Gerrit Verbeek.',status:'strong'}],
  archive:[{type:'document',title:'Trouwboek Meteren – Geertje Verbeek (1751)',note:'Primaire/near-primary transcriptie noemt haar als Geertje Verbeek, jonge dochter geboren en wonend te Meteren.',url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1829',status:'confirmed'},{type:'document',title:'Doopgetuigen in gezin Van de Kop–Verbeek',note:'Meterense dooptranscripties noemen Aaltje Verbeek als getuige in 1751 en 1753 en Gijsbertje, huisvrouw van Gerret Verbeek, in 1754. Dit ondersteunt de gereconstrueerde siblinggroep, zonder op zichzelf het ouderschap volledig te bewijzen.',url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1828',status:'strong'}]
});

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
  addArchive(peter,{
    type:'document',
    title:'Hoge Bank van Deil – Peter Verbeek als erfgenaam via Corsje (1752)',
    note:'Een transcriptie van Bank van Deil 1744–1757, folio 171, d.d. 7 maart 1752 noemt “Peter Verbeek en Corsje van der Burgh egtelieden” samen met de overige kinderen en erfgenamen van Sweer Lucasse van der Burgh en Corsje van Hees bij de overdracht van een huis, schuur en boomgaard onder Meteren. Dit bevestigt juridisch gebruik van Peters familienaam en zijn huwelijk met Corsje.',
    url:'https://www.genealogieonline.nl/stamboom-gruwel-reesink/I27978.php',
    status:'strong'
  });
  addEvent(peter,{
    year:1752,
    label:'In een transcriptie van een akte van de Hoge Bank van Deil (7 maart 1752, fol. 171) verschijnt hij als “Peter Verbeek” naast zijn vrouw Corsje van der Burgh in een erfgenamen-/transportakte.',
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
