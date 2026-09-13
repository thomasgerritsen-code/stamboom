(()=>{
'use strict';
const data=window.FAMILY_DATA?.people||{};
const nameEl=document.querySelector('#personName');
const familyPanel=document.querySelector('#profile-family');
if(!nameEl||!familyPanel)return;

const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const initials=name=>String(name||'').split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase();
const personIdByName=name=>Object.entries(data).find(([,p])=>p?.name===name)?.[0]||null;

function siblingIds(id){
  const me=data[id];
  const parents=new Set(me?.parents||[]);
  if(!parents.size)return[];
  return Object.entries(data)
    .filter(([oid,p])=>oid!==id&&(p?.parents||[]).some(pid=>parents.has(pid)))
    .map(([oid])=>oid)
    .sort((a,b)=>(data[a]?.birth?.year||9999)-(data[b]?.birth?.year||9999)||String(data[a]?.name||'').localeCompare(String(data[b]?.name||''),'nl'));
}

function relationType(id,sid){
  const a=new Set(data[id]?.parents||[]), b=new Set(data[sid]?.parents||[]);
  const shared=[...a].filter(x=>b.has(x));
  return shared.length>=2?'Volle broer/zus':'Halfbroer/-zus';
}

function life(p){
  const by=p?.birth?.year, dy=p?.death?.year;
  if(by&&dy)return `${by}–${dy}`;
  if(by)return `° ${by}`;
  if(dy)return `† ${dy}`;
  return p?.generation||'Familielid';
}

function ensureUI(){
  const nav=document.querySelector('.profile-tabs');
  if(!nav)return null;
  let tab=nav.querySelector('[data-profile-tab="siblings"]');
  if(!tab){
    tab=document.createElement('button');
    tab.className='profile-tab';
    tab.type='button';
    tab.dataset.profileTab='siblings';
    tab.textContent='Broers & zussen';
    nav.appendChild(tab);
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.profile-tab').forEach(b=>b.classList.toggle('active',b===tab));
      document.querySelectorAll('.profile-panel').forEach(p=>p.classList.toggle('active',p.id==='profile-siblings'));
    });
  }
  let panel=document.querySelector('#profile-siblings');
  if(!panel){
    panel=document.createElement('section');
    panel.id='profile-siblings';
    panel.className='profile-panel';
    familyPanel.insertAdjacentElement('afterend',panel);
  }
  return panel;
}

function render(){
  const panel=ensureUI();
  if(!panel)return;
  const id=personIdByName(nameEl.textContent.trim());
  if(!id){panel.innerHTML='<p class="muted">Persoon niet gevonden.</p>';return;}
  const sibs=siblingIds(id);
  if(!sibs.length){
    panel.innerHTML='<div class="relation-group"><h3>Broers & zussen</h3><p class="muted relation-empty">Nog geen broers of zussen in de huidige database.</p></div>';
    return;
  }
  panel.innerHTML=`<div class="relation-group"><h3>Broers & zussen</h3><p class="muted siblings-intro">${sibs.length} ${sibs.length===1?'familielid':'familieleden'} gevonden via gedeelde ouder(s).</p>${sibs.map(sid=>{
    const p=data[sid];
    return `<button type="button" class="relation-card sibling-card" data-sibling-id="${esc(sid)}"><span class="relation-avatar">${esc(initials(p.name))}</span><span class="relation-copy"><strong>${esc(p.name)}</strong><small>${esc(life(p))} · ${esc(relationType(id,sid))}</small></span><span class="relation-arrow">›</span></button>`;
  }).join('')}</div>`;
}

function openSibling(id){
  const familyTab=document.querySelector('[data-profile-tab="family"]');
  const family=document.querySelector('#profile-family');
  if(!familyTab||!family)return;
  // Re-use the app's existing relation navigation: create a temporary relation button and dispatch a click in the family panel.
  const proxy=document.createElement('button');
  proxy.type='button';
  proxy.dataset.personId=id;
  proxy.style.display='none';
  family.appendChild(proxy);
  proxy.click();
  proxy.remove();
}

document.addEventListener('click',e=>{
  const btn=e.target.closest('[data-sibling-id]');
  if(!btn)return;
  openSibling(btn.dataset.siblingId);
});

const observer=new MutationObserver(()=>render());
observer.observe(nameEl,{childList:true,subtree:true,characterData:true});
render();
})();
