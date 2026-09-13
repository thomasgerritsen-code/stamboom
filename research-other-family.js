(()=>{
'use strict';
const people=window.FAMILY_DATA?.people;
if(!people)return;
const addEvent=(id,event)=>{const p=people[id];if(!p)return;p.events=p.events||[];if(!p.events.some(e=>String(e.year)===String(event.year)&&e.label===event.label))p.events.push(event)};
const addArchive=(id,item)=>{const p=people[id];if(!p)return;p.archive=p.archive||[];if(!p.archive.some(a=>a.title===item.title))p.archive.push(item)};

/* Hendriks / Gerritsen */
if(people.hendrika1840){
  people.hendrika1840.birth={date:'1840-03-12',year:1840,place:'Doorwerth'};
  people.hendrika1840.death={date:'1869-06-04',year:1869,place:'Renkum'};
  people.hendrika1840.places=['Doorwerth','Renkum'];
  addEvent('hendrika1840',{year:1865,label:'Huwde op 15 december 1865 in Doorwerth met Gerrit Gerritsen, arbeider.',status:'strong'});
  addEvent('hendrika1840',{year:1869,label:'Overleden op 4 juni 1869 in Renkum. Hiermee wordt de eerder gebruikte datum 4 januari 1869 gecorrigeerd.',status:'strong'});
  addArchive('hendrika1840',{type:'source',title:'Kwartierstaat Heijligers · Hendrika Hendriks',note:'Geeft geboorte 12 maart 1840 te Doorwerth, huwelijk 15 december 1865 en overlijden 4 juni 1869 te Renkum.',url:'https://www.hjmwijers.nl/KEH/Heijligers-A-kwst.htm',status:'strong'});
}
if(people.hendrikushendriks){
  people.hendrikushendriks.birth={date:'1813-10-06',year:1813,place:'Renkum'};
  people.hendrikushendriks.death={date:'1891-03-25',year:1891,place:'Renkum'};
  people.hendrikushendriks.occupations=['Tuinman (1836, 1846)','Broodbakker (1848, 1853)','Tabaksplanter (1857, 1873)'];
  people.hendrikushendriks.places=['Renkum','Doorwerth'];
  addEvent('hendrikushendriks',{year:1836,label:'Huwde op 3 december 1836 in Doorwerth met Cornelia Aartsen.',status:'strong'});
  addArchive('hendrikushendriks',{type:'source',title:'Kwartierstaat Heijligers · Hendrikus Hendriks',note:'Geeft exacte levensdata en laat zijn beroepsontwikkeling zien van tuinman via broodbakker naar tabaksplanter.',url:'https://www.hjmwijers.nl/KEH/Heijligers-A-kwst.htm',status:'strong'});
}
if(people.corneliaaartsen){
  people.corneliaaartsen.birth={date:'1814-02-27',year:1814,place:'Heelsum (Renkum)'};
  people.corneliaaartsen.death={date:'1890-10-19',year:1890,place:'Doorwerth'};
  people.corneliaaartsen.occupations=['Landbouwster','Tabaksplantster (1864–1865)'];
  people.corneliaaartsen.places=['Heelsum (Renkum)','Doorwerth'];
  addEvent('corneliaaartsen',{year:1836,label:'Huwde op 3 december 1836 in Doorwerth met Hendrikus Hendriks.',status:'strong'});
  addEvent('corneliaaartsen',{year:1890,label:'Overleden op 19 oktober 1890 in Doorwerth.',status:'strong'});
  addArchive('corneliaaartsen',{type:'source',title:'Cornelia Aartsen · levensdata en beroep',note:'Genealogische bron met verwijzingen naar geboorte-, huwelijks- en overlijdensakten; noemt haar als landbouwster. Een tweede kwartierstaat noemt haar in 1864–1865 als tabaksplantster.',url:'https://www.genealogieonline.nl/stamboom-jansen-brandsma/I42.php',status:'strong'});
}

/* Van Harn */
if(people.everdina1876){
  people.everdina1876.birth={date:'1875-08-14',year:1875,place:'Wageningen'};
  people.everdina1876.death={date:'1943-04-08',year:1943,place:'Wageningen'};
  people.everdina1876.places=['Wageningen'];
  addEvent('everdina1876',{year:1896,label:'Huwde op 17 juli 1896 in Wageningen met Geurt Hendrik Gerritsen.',status:'strong'});
  addEvent('everdina1876',{year:1943,label:'Overleden op 8 april 1943 in Wageningen; overlijden geregistreerd op 9 april.',status:'strong'});
  addArchive('everdina1876',{type:'source',title:'Everdina Hermina Jantje van Harn (1875–1943)',note:'Geeft geboorte 14 augustus 1875 te Wageningen, huwelijk met Geurt Hendrik Gerritsen op 17 juli 1896 en overlijden 8 april 1943 te Wageningen.',url:'https://www.genealogieonline.nl/stamboom-van-engeldorp-gastelaars/I1167092987.php',status:'strong'});
}

/* Verbeek / ten Böhmer */
if(people.anton1907){
  people.anton1907.birth={date:'1907-02-01',year:1907,place:'Duisburg'};
  people.anton1907.death={date:'1972-09-04',year:1972};
  people.anton1907.places=Array.from(new Set([...(people.anton1907.places||[]),'Duisburg','Renkum (begraafplaats Harten)']));
  addEvent('anton1907',{year:1972,label:'Overleden op 4 september 1972; begraven op Algemene Begraafplaats Harten te Renkum, vak RK-C 102.',status:'confirmed'});
  addArchive('anton1907',{type:'source',title:'Grafregistratie Johann Anton Verbeek',note:'Grafregistratie vermeldt 1 februari 1907 – 4 september 1972 en koppelt de grafplaats aan de naam Böhmer.',url:'https://www.online-begraafplaatsen.nl/zerken.asp?bgp=199&char=V&command=showpers',status:'confirmed'});
}
if(people.maria1910){
  people.maria1910.death={date:'1978-11-19',year:1978};
  people.maria1910.places=Array.from(new Set([...(people.maria1910.places||[]),'Renkum (begraafplaats Harten)']));
  addEvent('maria1910',{year:1978,label:'Overleden op 19 november 1978; begraven op Algemene Begraafplaats Harten te Renkum, vak RK-C 102.',status:'confirmed'});
  addArchive('maria1910',{type:'source',title:'Grafregistratie Maria Theodora ten Böhmer',note:'Grafregistratie vermeldt 12 augustus 1910 – 19 november 1978 en de familienaam Verbeek bij dezelfde grafplaats RK-C 102.',url:'https://www.online-begraafplaatsen.nl/zerken.asp?bgp=199&char=B&command=showpers',status:'confirmed'});
}

/* Wildeboer / Schuurman */
if(people.roelof1845){
  people.roelof1845.birth={date:'1844-04-13',year:1844,place:'IJhorst (Staphorst)'};
  people.roelof1845.occupations=['Landbouwer'];
  people.roelof1845.places=Array.from(new Set([...(people.roelof1845.places||[]),'IJhorst (Staphorst)']));
  addEvent('roelof1845',{year:1844,label:'Geboren op 13 april 1844 in IJhorst. Geboorteakte noemt vader Jan Hendriks Wildeboer, landbouwer, en moeder Beertje Veldhoen, boerin.',status:'confirmed'});
  addEvent('roelof1845',{year:1886,label:'Huwde op 1 juni 1886 in Nijeveen met Geertje Schuurman.',status:'strong'});
  addArchive('roelof1845',{type:'document',title:'Geboorteakte Roelof Wildeboer (1844)',note:'Burgerlijke stand Staphorst: Roelof Wildeboer, geboren 13 april 1844 te IJhorst; ouders Jan Hendriks Wildeboer en Beertje Veldhoen.',url:'https://www.openarchieven.nl/hco:1039DA42-9468-4598-B319-044610C8BD3F',status:'confirmed'});
}
if(people.geertje1862s){
  people.geertje1862s.birth={date:'1862-09-20',year:1862,place:'Kolderveen (Nijeveen)'};
  people.geertje1862s.death={date:'1939-07-02',year:1939,place:'Losser'};
  people.geertje1862s.places=['Kolderveen (Nijeveen)','IJhorst','Losser'];
  addEvent('geertje1862s',{year:1886,label:'Huwde op 1 juni 1886 in Nijeveen met Roelof Wildeboer.',status:'strong'});
  addArchive('geertje1862s',{type:'source',title:'Gezin Roelof Wildeboer & Geertje Schuurman',note:'Genealogische reconstructie noemt Geertje als geboren 20 september 1862 te Kolderveen/Nijeveen en huwelijk op 1 juni 1886.',url:'https://www.windgenealogie.org/re/re-000405.htm',status:'strong'});
}

/* Oudere Makkinga-lijn */
if(people.hannesmakkinga){
  people.hannesmakkinga.birth={year:1778,place:'Ommen'};
  people.hannesmakkinga.death={date:'1866-05-18',year:1866,place:'Ommen'};
  people.hannesmakkinga.occupations=['Timmerman (1812)'];
  people.hannesmakkinga.places=['Ommen'];
  addEvent('hannesmakkinga',{year:1778,label:'Gedoopt op 10 mei 1778 in Ommen.',status:'strong'});
  addEvent('hannesmakkinga',{year:1812,label:'Huwde op 5 september 1812 in Ommen met Gerridina Dieters; in de huwelijkscontext wordt hij als timmerman vermeld.',status:'confirmed'});
  addEvent('hannesmakkinga',{year:1866,label:'Overleden op 18 mei 1866 in Ommen; burgerlijke stand, akte 52.',status:'confirmed'});
  addArchive('hannesmakkinga',{type:'source',title:'Hannes Everts Makkinga (1778–1866)',note:'Bron verwijst voor overlijden naar Burgerlijke Stand Ommen 1866, akte 52; doop 10 mei 1778 en huwelijk 5 september 1812 worden eveneens genoemd.',url:'https://www.werelate.org/wiki/Person:Hannes_Makkinga_(1)',status:'strong'});
}
})();