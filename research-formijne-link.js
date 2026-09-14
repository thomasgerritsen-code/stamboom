(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people)return;
const addArchive=(id,item)=>{const p=people[id];if(!p)return;p.archive=p.archive||[];if(!p.archive.some(a=>a.title===item.title))p.archive.push(item);};
const addEvent=(id,event)=>{const p=people[id];if(!p)return;p.events=p.events||[];if(!p.events.some(e=>String(e.year)===String(event.year)&&e.label===event.label))p.events.push(event);};

const gerrit='gerrithendricksen17e';
if(people[gerrit]){
  addArchive(gerrit,{
    type:'source',
    title:'Formijne is een gedocumenteerde 17e-eeuwse familie in Ophemert',
    note:'De Nederlandse Familienamenbank van het CBG verwijst naar vakgenealogisch onderzoek van H.A.P. van Gessel en noemt expliciet Dirk Formijne als schout van Ophemert in 1653 en zoon van Formijn Jansz, kerkmeester van Ophemert in 1612. De naam Formijne is dus aantoonbaar historisch in precies de regio en periode van Jenneke Dircks.',
    url:'https://www.cbgfamilienamen.nl/nfb/detail_naam.php?gba_naam=formijne&info=documentatie&nfd_naam=Formijne&operator=eq&taal=.',
    status:'strong'
  });

  addArchive(gerrit,{
    type:'source',
    title:'Bank van Tuil 1647–1653: Dirk en Lijsken Formijn',
    note:'De naamindex op Bank van Tuil inv.nr. 1251 (1647–1653) bevat Dirk Formijn op folio 19v, 70 en 78 en Lijsken Formijn op folio 169. Daarmee is de familie Formijn(e) onafhankelijk in de lokale rechterlijke administratie aantoonbaar. De index alleen geeft nog geen onderlinge familiebanden.',
    url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=2992',
    status:'confirmed'
  });

  addArchive(gerrit,{
    type:'source',
    title:'Sterke hypothese: Jenneke Dirks Formijne, dochter van Dirk Formijne',
    note:'Meerdere genealogische reconstructies plaatsen Jenneke Dirks Formijn(e), geboren circa 1630, als dochter van Dirk Formijne en Grietje Cornelis van Opijnen. Een daarvan reconstrueert acht kinderen van dit paar, waaronder Jenneke en Steventje. Het CBG bevestigt Dirk Formijne en zijn status in Ophemert, maar in het huidige onderzoek is nog geen primaire akte gelezen die Jenneke letterlijk als zijn dochter noemt. Daarom wordt deze ouderkoppeling nog niet in de directe stamboom getekend.',
    url:'https://www.genealogieonline.nl/stamboom-familie-hermans/I87.php',
    status:'strong'
  });

  addArchive(gerrit,{
    type:'source',
    title:'Mogelijke zusters Jenneke en Steventje Formijne',
    note:'Genealogische reconstructies plaatsen zowel Jenneke Dirks Formijne als Steventje Dirks Formijne in het gezin van Dirk Formijne en Grietje van Opijnen. Dit is bijzonder relevant omdat Steventje in andere reconstructies voorkomt bij de Ophemertse Verbeeck-familie. De zusterrelatie is plausibel en door meerdere secundaire lijnen ondersteund, maar blijft voorlopig onderzoeksstatus totdat een boedel-, erfdelings- of voogdijakte de kinderen gezamenlijk noemt.',
    url:'https://www.stamboomnederland.nl/etalage/onno_de_ruiter_Project_van_onno_de_ruiter_129275/families194.html',
    status:'research'
  });

  addEvent(gerrit,{
    year:1674,
    label:'Onderzoek naar Jenneke Dircks wijst nu naar de lokaal gedocumenteerde familie Formijne van Ophemert. Haar identificatie als dochter van schout Dirk Formijne is sterk maar nog niet met één primaire verwantschapsakte bewezen.',
    status:'strong'
  });
}

const hendrik='hendrik1692';
if(people[hendrik]){
  addArchive(hendrik,{
    type:'source',
    title:'Naamcontrole 1717: huwelijk vermeldt géén Verbeek',
    note:'De Meterense trouwboektranscriptie van 14 maart 1717 noemt de bruidegom uitsluitend “Hendrik Geertsen”, jongeman wonend te Meteren, en de bruid “Heijltjen Jans”. De familienaam Verbeek staat niet in deze inschrijving. Dit is belangrijk bij het bepalen wanneer de naam Verbeek daadwerkelijk in de directe lijn verschijnt.',
    url:'https://www.onsvoorgeslacht.nl/wp-content/plugins/typify-databank/download.php?item_id=1829',
    status:'confirmed'
  });

  addArchive(hendrik,{
    type:'source',
    title:'Onderzoeksvraag: eerste primaire gebruik van de naam Verbeek',
    note:'Latere genealogieën noemen hem Hendrik Gerritsen Verbeek en zijn kinderen Verbeek, maar de doopinschrijving van 1692 en het huwelijk van 1717 gebruiken die familienaam niet. Het onderzoek richt zich daarom op dopen, huwelijken en rechterlijke akten van zijn kinderen om het eerste primaire gebruik van Verbeek in deze directe lijn vast te stellen.',
    status:'research'
  });
}
})();
