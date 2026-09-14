(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people)return;
const addArchive=(id,item)=>{const p=people[id];if(!p)return;p.archive=p.archive||[];if(!p.archive.some(a=>a.title===item.title))p.archive.push(item);};
const addEvent=(id,event)=>{const p=people[id];if(!p)return;p.events=p.events||[];if(!p.events.some(e=>String(e.year)===String(event.year)&&e.label===event.label))p.events.push(event);};
const id='gerrithendricksen17e';
if(!people[id])return;

addArchive(id,{
  type:'source',
  title:'Bank van Tuil 1638–1641: vroege Verbeeck-familiegroep',
  note:'De naamindex van Bank van Tuil inv.nr. 1249 zet op folio 60v meerdere personen met hetzelfde patroniem en dezelfde familienaam bij elkaar: Aert, Anneken, Gerit, Heisken en Jan Stevens Verbeeck, samen met Hermen Stevens(en) Verbeeck en de weduwe van Steven Hermens Verbeeck. Dit is sterk bewijs voor een oude Verbeeck-familiegroep in de regio, maar omdat alleen de index en niet de volledige akte is gecontroleerd worden de onderlinge ouder-kindrelaties nog niet als bewezen ingevoerd.',
  url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=2990',
  status:'strong'
});

addArchive(id,{
  type:'source',
  title:'Mogelijke stammoeder: Hendricken Gerrits van Deurn',
  note:'Dezelfde Bank-van-Tuil-index bevat de regel “hendricken gerrits deurn van 27v wed s.h. verbeek”. Elders in dezelfde index staat “hendrixken wed. steven hermens verbeeck”. Dit kan dezelfde vrouw zijn en zou haar nader identificeren als Hendricken/Hendrixken Gerrits van Deurn, weduwe van Steven Hermens Verbeeck. Omdat de oorspronkelijke akten op folio 27v/60v nog niet rechtstreeks zijn gelezen, blijft dit een sterke aanwijzing en geen definitief ouderpaar.',
  url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=2990',
  status:'research'
});

addArchive(id,{
  type:'source',
  title:'Hermen Stevens Verbeeck in Ophemert, 1640 en 1658–1659',
  note:'Hermen Stevens Verbeeck is in 1640 als verkoper van vijf hont bouwland bij Ophemert vermeld. In het kerkboek van Ophemert wordt Hermen Stevensen Verbeeck bovendien genoemd bij het afleggen van de kerkrekening over 1658 en 1659. Dit ondersteunt continuïteit van dezelfde naamvorm in de regio over meerdere decennia.',
  url:'https://www.yumpu.com/nl/document/view/20476680/kroniek',
  status:'strong'
});

addArchive(id,{
  type:'source',
  title:'Steven Hermens Verbeeck actief in Ophemert, 1669–1696',
  note:'Het Ophemertse kerkboek noemt Steven Hermsen/Hermens Verbeeck herhaaldelijk als armenmeester of rekeningplichtige: hij rekende in 1671 af over 1669–1670, wordt opnieuw genoemd bij de afrekening van 3 december 1674 en verschijnt nog in de jaren 1690. Dit is een primaire/near-primary kerkboeklijn voor een jongere Steven Hermens Verbeeck in precies de regio en tijd waarin Gerrit Hendricksen trouwde.',
  url:'https://www.onsvoorgeslacht.nl/',
  status:'confirmed'
});

addArchive(id,{
  type:'source',
  title:'Sterke reconstructie: Steven Hermens → Hermen Stevens → Steven Hermens',
  note:'Patroniemen en chronologie passen opvallend goed bij drie generaties: een oudere Steven Hermens Verbeeck (vóór/om 1640 overleden), een Hermen Stevens(en) Verbeeck die in 1640 en 1658–1659 actief is, en een jongere Steven Hermens Verbeeck die vanaf 1669 in Ophemert optreedt. Dit is een sterke genealogische reconstructie, maar er is nog geen gevonden akte die de twee opeenvolgende vader-zoonrelaties letterlijk uitschrijft.',
  url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=2990',
  status:'research'
});

addArchive(id,{
  type:'source',
  title:'1702: expliciete neef-nichtrelatie binnen de Verbeek-familie',
  note:'Een transcriptie van een besluit van de Gelderse Landdag van 1 augustus 1702 meldt dat ds. Herman Verbeek, predikant te Purmerland, dispensatie kreeg om te trouwen met Aemilia Margaretha Verbeek te Nijmegen, omschreven als “zijn vaders broeders dochter”. Dit bewijst dat de vader van Aemilia een broer was van Hermans vader. Het identificeren van die broer is nu een belangrijk doel om de Ophemertse Verbeeck-broederlijn hard te reconstrueren.',
  url:'https://www.nikhef.nl/~louk/MATON/generation1.html',
  status:'strong'
});

addArchive(id,{
  type:'source',
  title:'Jenneke Dircks’ eerste man: mogelijk Gerit Stevens Verbeeck',
  note:'De primaire huwelijksafkondiging van Gerrit Hendricksen uit 1674 noemt Jenneke Dircks als weduwe van “Gerrit Stevensen”. De Bank van Tuil-index uit 1638–1641 bevat tegelijk een “Gerit Stevens Verbeeck” in de oude Verbeeck-familiegroep. De persoonsidentiteit is nog niet bewezen, maar dit maakt het serieus mogelijk dat Jennekes eerste echtgenoot tot de reeds bestaande Verbeeck-familie behoorde. Dat is belangrijk voor de vraag wanneer de familienaam Verbeek in de latere directe lijn verschijnt.',
  url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=2990',
  status:'research'
});

addEvent(id,{
  year:1674,
  label:'Nieuw onderzoek laat zien dat in Ophemert/Tuil al vóór en tijdens Gerrits huwelijk een oudere Verbeeck-familiegroep aantoonbaar actief was. De mogelijke relatie daarvan met Jenneke Dircks’ eerste echtgenoot Gerrit Stevensen wordt onderzocht; dit is nog geen bewijs dat Gerrit Hendricksen zelf toen de familienaam Verbeeck droeg.',
  status:'research'
});

})();
