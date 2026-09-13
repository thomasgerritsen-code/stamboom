(()=>{
'use strict';
const data=window.FAMILY_DATA?.people||{};
const stories=window.FAMILY_STORIES||{};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const labels={confirmed:'Bevestigd',strong:'Sterke match',research:'Onderzoeken'};
let selected='thomas', branch='all', privacy=true, zoom=1;
let positions={}, canvas={w:1420,h:920};

function initials(name){return name.split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase()}
function dateNL(date){if(!date)return'';const [y,m,d]=date.split('-').map(Number);return new Intl.DateTimeFormat('nl-NL',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(y,m-1,d)))}
function lifeText(p){
 const b=p.birth||{}, d=p.death||{};
 const born=p.living&&privacy?(b.year?`° ${b.year}`:''):(b.date?`° ${dateNL(b.date)}`:(b.year?`° ${b.year}`:''));
 const died=d.date?`† ${dateNL(d.date)}`:(d.year?`† ${d.year}`:'');
 return [born,died].filter(Boolean).join('  ')+(b.place?` · ${b.place}`:'');
}
function branchLabel(p){return p.branch==='gerritsen'?'Gerritsen':p.branch==='makkinga'?'Makkinga / Venema':'Gerritsen / Makkinga'}
function visible(id){const p=data[id];return branch==='all'||id==='thomas'||p?.branch===branch}
function descendantsReachable(){
 const levels=[['thomas']], seen=new Set(['thomas']);
 for(let depth=0;depth<10;depth++){
  const next=[];
  for(const id of levels[depth]||[]){for(const pid of data[id]?.parents||[]){if(data[pid]&&!seen.has(pid)){seen.add(pid);next.push(pid)}}}
  if(!next.length)break; levels.push(next);
 }
 return levels;
}
function layoutTree(){
 const levels=descendantsReachable();
 const maxCount=Math.max(...levels.map(x=>x.length),1);
 canvas.w=Math.max(1200,maxCount*166+100); canvas.h=Math.max(700,levels.length*155+110);
 positions={};
 levels.forEach((ids,depth)=>{
   const gap=canvas.w/(ids.length+1), y=canvas.h-85-depth*150;
   ids.forEach((id,i)=>positions[id]={x:gap*(i+1),y});
 });
 const svg=$('#treeSvg'); svg.setAttribute('viewBox',`0 0 ${canvas.w} ${canvas.h}`); applyZoom();
}
function applyZoom(){const svg=$('#treeSvg');svg.style.width=`${Math.max(850,canvas.w*zoom)}px`;$('#zoomReset').textContent=`${Math.round(zoom*100)}%`}
function drawTree(){
 layoutTree(); const lines=$('#treeLines'),nodes=$('#treeNodes'); lines.innerHTML='';nodes.innerHTML='';
 const NS='http://www.w3.org/2000/svg';
 Object.entries(positions).forEach(([id,pos])=>{
  const p=data[id]; if(!p)return;
  (p.parents||[]).forEach(pid=>{
   const pp=positions[pid]; if(!pp)return;
   const path=document.createElementNS(NS,'path'); const mid=(pos.y+pp.y)/2;
   path.setAttribute('d',`M ${pos.x} ${pos.y-31} V ${mid} H ${pp.x} V ${pp.y+31}`); path.setAttribute('class','tree-line'+((visible(id)&&visible(pid))?'':' dimmed')); lines.appendChild(path);
  });
 });
 Object.entries(positions).forEach(([id,pos])=>{
  const p=data[id]; if(!p)return; const g=document.createElementNS(NS,'g');
  g.setAttribute('transform',`translate(${pos.x},${pos.y})`);g.setAttribute('class',`node${id===selected?' selected':''}${visible(id)?'':' hidden'}`);g.setAttribute('role','button');g.setAttribute('tabindex','0');g.setAttribute('aria-label',p.name);g.style.cursor='pointer';
  const rect=document.createElementNS(NS,'rect');rect.setAttribute('x','-70');rect.setAttribute('y','-33');rect.setAttribute('width','140');rect.setAttribute('height','66');rect.setAttribute('rx','13');
  const dot=document.createElementNS(NS,'circle');dot.setAttribute('cx','-57');dot.setAttribute('cy','-21');dot.setAttribute('r','4');dot.setAttribute('class',`node-status-${p.status||'research'}`);
  const name=document.createElementNS(NS,'text');name.setAttribute('x','0');name.setAttribute('y','-4');name.setAttribute('text-anchor','middle');name.setAttribute('class','node-name');name.textContent=p.name.length>22?p.name.slice(0,21)+'…':p.name;
  const meta=document.createElementNS(NS,'text');meta.setAttribute('x','0');meta.setAttribute('y','16');meta.setAttribute('text-anchor','middle');meta.setAttribute('class','node-meta');const by=p.birth?.year||'?';const dy=p.death?.year?`–${p.death.year}`:'';meta.textContent=p.living&&privacy?String(by):`${by}${dy}`;
  g.append(rect,dot,name,meta); const activate=()=>selectPerson(id);g.addEventListener('click',activate);g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate()}});nodes.appendChild(g);
 });
}
function fact(label,value){return value?`<dl class="fact"><dt>${esc(label)}</dt><dd>${esc(value)}</dd></dl>`:''}
function selectPerson(id){if(!data[id])return;selected=id;updatePerson();drawTree()}
function generatedStory(id,p){
 const parts=[]; const b=p.birth||{}, d=p.death||{};
 const bDate=(p.living&&privacy)?(b.year?String(b.year):''):(b.date?dateNL(b.date):(b.year?String(b.year):''));
 if(bDate) parts.push(`${p.name} werd ${bDate.includes(' ')?'op ': 'in '}${bDate}${b.place?` in ${b.place}`:''} geboren.`);
 else parts.push(`${p.name} behoort tot de ${branchLabel(p)}-tak van de familie.`);
 const parentNames=(p.parents||[]).map(pid=>data[pid]?.name).filter(Boolean);
 if(parentNames.length===2) parts.push(`${p.name} was een kind van ${parentNames[0]} en ${parentNames[1]}.`);
 else if(parentNames.length===1) parts.push(`Als ouder is ${parentNames[0]} in de huidige stamboom bekend.`);
 if((p.occupations||[]).length) parts.push(`Uit de gevonden bronnen kennen we als beroep of rol: ${(p.occupations||[]).join(', ')}.`);
 if((p.places||[]).length>1) parts.push(`In de huidige bronnen is ${p.name} verbonden met ${p.places.join(', ')}.`);
 if(d.date||d.year) parts.push(`${p.name} overleed ${d.date?`op ${dateNL(d.date)}`:`in ${d.year}`}${d.place?` in ${d.place}`:''}.`);
 if(parts.length===1 && !(p.occupations||[]).length) parts.push('Over het verdere leven van deze persoon zijn nog weinig details aan bronnen gekoppeld; dit profiel wordt uitgebreid zodra nieuwe akten, adressen, beroepen of familieverhalen worden gevonden.');
 return parts.join(' ');
}
function storyFor(id,p){return stories[id]||generatedStory(id,p)}
function storyHasUncertainty(p){return (p.events||[]).some(e=>e.status&&e.status!=='confirmed')||(p.archive||[]).some(a=>a.status&&a.status!=='confirmed')||p.status==='strong'||p.status==='research'}
function updatePerson(){
 const p=data[selected]; $('#portrait').textContent=initials(p.name);$('#portrait').style.backgroundImage=p.photo?`url(${JSON.stringify(p.photo).slice(1,-1)})`:'';
 $('#personGeneration').textContent=p.generation||'Persoon';$('#personName').textContent=p.name;$('#personLife').textContent=lifeText(p);
 const occupations=(p.occupations||[]).join(' · '), places=(p.places||[]).join(' · ');
 $('#personFacts').innerHTML=fact('Familietak',branchLabel(p))+fact('Beroep',occupations||'Nog uitzoeken')+fact('Woonplaatsen',places||'Nog uitzoeken')+fact('Onderzoeksstatus',labels[p.status]||'Onderzoeken');
 const story=$('#personStory');story.innerHTML=`<p>${esc(storyFor(selected,p))}</p>${storyHasUncertainty(p)?'<span class="story-note">Dit verhaal bevat één of meer sterke matches of onderzoeksaanwijzingen. Bekijk de bronstatus in de tijdlijn en het archief.</span>':''}`;
 const tl=$('#personTimeline');tl.innerHTML='';(p.events||[]).sort((a,b)=>Number(a.year)-Number(b.year)).forEach(e=>{const d=document.createElement('div');d.className='mini-event';d.innerHTML=`<time>${esc(e.year)}</time><span>${esc(e.label)}</span>`;tl.appendChild(d)});if(!(p.events||[]).length)tl.innerHTML='<p class="muted">Nog geen gebeurtenissen.</p>';
 const ar=$('#personArchive');ar.innerHTML='';(p.archive||[]).forEach((item,i)=>{const b=document.createElement('button');b.type='button';b.className='archive-link';b.innerHTML=`<strong>${esc(item.title)}</strong><small>${esc(item.note||'')}</small>`;b.addEventListener('click',()=>openArchive(selected,i));ar.appendChild(b)});if(!(p.archive||[]).length)ar.innerHTML='<p class="muted">Nog geen foto’s of documenten gekoppeld.</p>';
}
function allEvents(filter='all'){
 const out=[];Object.entries(data).forEach(([id,p])=>{if(filter!=='all'&&p.branch!==filter)return;(p.events||[]).forEach(e=>out.push({id,p,e}))});return out.sort((a,b)=>Number(a.e.year)-Number(b.e.year)||a.p.name.localeCompare(b.p.name));
}
function renderTimeline(){const f=$('#timelineBranch').value,el=$('#globalTimeline');el.innerHTML='';allEvents(f).forEach(({id,p,e})=>{const d=document.createElement('article');d.className='timeline-entry';d.innerHTML=`<div class="timeline-year">${esc(e.year)}</div><h2>${esc(p.name)}</h2><p>${esc(e.label)}</p>`;d.addEventListener('click',()=>{showView('tree');branch='all';syncBranchButtons();selectPerson(id)});el.appendChild(d)})}
function archiveItems(){const arr=[];Object.entries(data).forEach(([id,p])=>(p.archive||[]).forEach((item,i)=>arr.push({id,p,item,index:i})));return arr}
function renderArchive(){const type=$('#archiveType').value,grid=$('#archiveGrid');grid.innerHTML='';let items=archiveItems();if(type!=='all')items=items.filter(x=>x.item.type===type);items.forEach(({id,p,item,index})=>{const c=document.createElement('article');c.className='archive-card';const vis=item.image?`style="background-image:url('${esc(item.image)}')"`:'';const icon=item.type==='photo'?'◎':item.type==='document'?'▤':'↗';c.innerHTML=`<div class="archive-visual" ${vis}>${item.image?'':icon}</div><div class="archive-body"><span class="archive-type">${esc(item.type||'source')} · ${esc(p.name)}</span><h2>${esc(item.title)}</h2><p>${esc(item.note||'')}</p><button type="button">Bekijken</button></div>`;c.querySelector('button').addEventListener('click',()=>openArchive(id,index));grid.appendChild(c)});if(!items.length)grid.innerHTML='<p class="muted">Nog geen archiefstukken in deze categorie.</p>'}
function openArchive(id,index){const p=data[id],item=p.archive[index];if(!item)return;const status=labels[item.status]||'Onderzoeken';let html=`<p class="eyebrow">${esc(p.name)}</p><h1>${esc(item.title)}</h1><span class="status">${esc(status)}</span><p>${esc(item.note||'')}</p>`;if(item.image)html+=`<img class="dialog-image" src="${esc(item.image)}" alt="${esc(item.title)}">`;if(item.file)html+=`<p><a href="${esc(item.file)}" target="_blank" rel="noopener">Document openen</a></p>`;if(item.url)html+=`<p><a href="${esc(item.url)}" target="_blank" rel="noopener">Externe bron openen ↗</a></p>`;$('#dialogContent').innerHTML=html;$('#archiveDialog').showModal()}
function showView(name){$$('.view').forEach(v=>v.classList.toggle('active',v.id===`${name}View`));$$('.tab').forEach(t=>t.classList.toggle('active',t.dataset.view===name));if(name==='timeline')renderTimeline();if(name==='archive')renderArchive()}
function syncBranchButtons(){$$('.chip').forEach(c=>c.classList.toggle('active',c.dataset.branch===branch))}

$$('.tab').forEach(t=>t.addEventListener('click',()=>showView(t.dataset.view)));
$$('.chip').forEach(c=>c.addEventListener('click',()=>{branch=c.dataset.branch;syncBranchButtons();drawTree()}));
$('#timelineBranch').addEventListener('change',renderTimeline);$('#archiveType').addEventListener('change',renderArchive);
$('#privacyToggle').addEventListener('click',e=>{privacy=!privacy;e.currentTarget.setAttribute('aria-pressed',String(privacy));e.currentTarget.textContent=`Privacy: ${privacy?'aan':'uit'}`;updatePerson();drawTree()});
$('#zoomIn').addEventListener('click',()=>{zoom=Math.min(1.6,Math.round((zoom+.1)*10)/10);applyZoom()});$('#zoomOut').addEventListener('click',()=>{zoom=Math.max(.6,Math.round((zoom-.1)*10)/10);applyZoom()});$('#zoomReset').addEventListener('click',()=>{zoom=1;applyZoom()});
$('#closeDialog').addEventListener('click',()=>$('#archiveDialog').close());$('#archiveDialog').addEventListener('click',e=>{if(e.target===$('#archiveDialog'))$('#archiveDialog').close()});
$('#search').addEventListener('input',e=>{const q=e.target.value.trim().toLocaleLowerCase('nl-NL');if(!q)return;const hit=Object.entries(data).find(([,p])=>[p.name,p.birth?.place,...(p.places||[]),...(p.occupations||[])].filter(Boolean).join(' ').toLocaleLowerCase('nl-NL').includes(q));if(hit){showView('tree');branch='all';syncBranchButtons();selectPerson(hit[0])}});

updatePerson();drawTree();renderTimeline();renderArchive();
})();