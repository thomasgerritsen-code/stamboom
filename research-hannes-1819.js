(()=>{
'use strict';
const p=window.FAMILY_DATA?.people?.hannesmakkinga;
if(!p)return;
p.events=p.events||[];
p.archive=p.archive||[];
const label='In 1819 bood Hannes Makkinga, timmerman te Ommen, in een notariële veiling op een stuk bouwland in de Zuid-Thange. Hij zette in op 50 gulden en verhoogde zijn eigen bod met 5 gulden; in de transcriptie staat ook zijn handtekening als “H. Mokkenga”.';
if(!p.events.some(e=>e.label===label))p.events.push({year:1819,label,status:'confirmed'});
const title='Notariële veiling Hannes Makkinga (1819)';
if(!p.archive.some(a=>a.title===title))p.archive.push({type:'document',title,note:'Collectie Overijssel, Notarissen in Overijssel, toegang 0122, inv.nr. 3029, pagina 90. Hannes Makkinga wordt als timmerman te Ommen genoemd en biedt op bouwland in de Zuid-Thange: 50 gulden, daarna door hemzelf met 5 gulden verhoogd. De transcriptie toont zijn ondertekening als H. Mokkenga.',url:'https://www.openarchieven.nl/transcripties/toon/NL-ZlHCO_0122_3029_0090',status:'confirmed'});
})();
