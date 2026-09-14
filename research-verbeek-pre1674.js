(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people)return;
const addEvent=(id,event)=>{const p=people[id];if(!p)return;p.events=p.events||[];if(!p.events.some(e=>String(e.year)===String(event.year)&&e.label===event.label))p.events.push(event);};
const addArchive=(id,item)=>{const p=people[id];if(!p)return;p.archive=p.archive||[];if(!p.archive.some(a=>a.title===item.title))p.archive.push(item);};

const id='gerrithendricksen17e';
if(!people[id])return;

addEvent(id,{
  year:1674,
  label:'De formulering in de huwelijksafkondiging — jongeman van Meteren, woonachtig in Hemert — is belangrijk voor de identificatie: Gerrit was in december 1674 nog ongehuwd en kwam oorspronkelijk uit Meteren. Zijn ouders worden in deze inschrijving niet genoemd.',
  status:'confirmed'
});

addArchive(id,{
  type:'source',
  title:'Onderzoeksspoor: Hendricks(en)-cluster in Meteren, 1675–1681',
  note:'In het Meterense trouwregister verschijnen in dezelfde periode meerdere jonge, ongehuwde personen met het patroniem Hendricks/Hendricksen: onder anderen Lijsken Hendricks (1675), Jenneke Hendricks (1675), Aelbertje Handricks (1677), Dirck Hendricksen (1677) en Aert Hendricksen (1681). Bij Aelbertje was haar vader getuige en bij Aert zijn moeder, maar de transcriptie noemt hun namen niet. Dit kan een familiecluster zijn, maar er is nog geen bewijs dat zij broers of zussen van Gerrit waren.',
  url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1829',
  status:'research'
});

addArchive(id,{
  type:'source',
  title:'Sterk onderzoeksspoor: Lijsken Hendrick “VERBEECK” te Tricht (1675)',
  note:'Een secundaire reconstructie van het Trichtse huwelijk van Gerit Herbertsen op 2 april 1675 noemt zijn bruid als “Lijsken Hendrick VERBEECK”, geboren te Meteren. De Meterense ondertrouwtranscriptie noemt haar alleen “Lijsken Hendricks”. Daarom is de familienaam Verbeeck hier nog niet als feit overgenomen. Het originele Trichtse register, archief Hervormde gemeente Tricht 0747 inventaris 1, is nu een prioritaire bron om te controleren.',
  url:'https://kooijktr.home.xs4all.nl/00/00-00013.htm',
  status:'research'
});

addArchive(id,{
  type:'source',
  title:'Archiefroute: Hervormde gemeente Tricht 1646–1981',
  note:'Regionaal Archief Rivierenland bewaart onder archief 0747, inventaris 1 het hervormde notulenboek met huwelijken en lidmaten van Tricht 1664–1723. Deze bron kan mogelijk duidelijk maken of de naam VERBEECK werkelijk in de Trichtse huwelijksinschrijving van 1675 staat en of er aanvullende familieverbanden worden genoemd.',
  url:'https://www.openarchieven.nl/rar:E991E357-2BF9-4DB1-9D67-CFB7AAC48B9D',
  status:'confirmed'
});

addArchive(id,{
  type:'source',
  title:'Onderzoeksgrens: ouders van Gerrit nog niet bewezen',
  note:'Er is nog geen betrouwbare primaire bron gevonden die Gerrit Hendricksens vader of moeder noemt. De site koppelt daarom bewust geen ouders aan Gerrit. Patroniemen en de naam Verbeeck worden alleen als zoekspoor gebruikt totdat een akte, lidmateninschrijving, boedelstuk of rechterlijk document de relatie expliciet maakt.',
  status:'research'
});

})();
