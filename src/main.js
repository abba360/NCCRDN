import './style.css'
import { createIcons, Handshake, Globe, Search, Lightbulb, Network, BookOpen, Users, FileText, Mail, Phone, Building, Share2, ArrowUp, Menu, X, ChevronDown, User } from 'lucide'
const ICONS = { Handshake, Globe, Search, Lightbulb, Network, BookOpen, Users, FileText, Mail, Phone, Building, Share2, ArrowUp, Menu, X, ChevronDown, User }

// ===== Central configuration: edit here =====
const CONFIG = {
  eventDate: '2026-12-08T09:00:00+01:00',
  links: { register:'https://forms.gle/VKn94cLwcjgp8MMB8', abstract:'https://forms.gle/hixp1kFZsQUXn4tK9', paper:'#', guidelines:'/documents/NCCRDN_2026_Registration_and_Call_for_Papers_Guidelines.pdf', map:'#', partner:'#' }, // replace '#' with real URLs
  socialLinks: { linkedin:'https://www.linkedin.com/in/muhammad-bello-shitu-3663b282/' },
  nav: [['home','Home'],['about','About'],['objectives','Objectives'],['sub-themes','Sub-themes'],['speakers','Speakers'],['call-for-papers','Call for Papers'],['programme','Programme'],['partners','Partners'],['contact','Contact']],
  objectives: [
    ['handshake','Strengthen cooperation among IACD members and encourage new membership.'],
    ['globe','Promote IACD ideals and goals in Nigeria and Sub-Saharan Africa.'],
    ['search','Examine current challenges affecting community and regional development in Nigeria.'],
    ['lightbulb','Identify innovative approaches for sustainable development.'],
    ['network','Promote partnerships among government, academia, civil society, and development partners.'],
    ['book-open','Share research findings, best practices, and success stories.'],
    ['users','Promote community participation in development programmes and projects.'],
    ['file-text','Develop policy recommendations for inclusive and sustainable community and regional development.']
  ],
  subthemes: {
    'General':[
      'The Nexus Between community and Regional Development',
      'Trends in Regional Development',
      'Theory of change for regional intervention',
      'Regional Inequalities and Development',
      'Urban and regional Planning Issues'
    ],
    'Community Development and Social Inclusion':[
      'Social welfare and Community Resilience',
      'Youth Development Programmes and Projects',
      'Child Protection Programmes and projects',
      'Managing Drug Abuse and Development and Mental Health Initiatives',
      'Situational Analysis of Social Behavior Change Programmes and Projects in Nigeria',
      'Older persons Programmes and Initiatives',
      'Gender Issues, Women and Adolescent Girls development programmes and Projects'
    ],
    'Sustainable Livelihoods and Poverty Reduction':[
      'Poverty reduction initiatives, food security and livelihood sustainability',
      'Entrepreneurship and Job Creation',
      'Cooperatives and community Enterprise',
      'skills development and vocational training'
    ],
    'Governance, Infrastructure and Services':[
      'Infrastructure development programmes and projects',
      'Education and health Services at community and Regional levels',
      'Governance, Peace, and Security',
      'Safety and Movement System',
      'Sports and recreational Resources Development'
    ],
    'Environment and Climate Change':[
      'Climate change adaptation and mitigation',
      'Land Degradation and Desertification',
      'Energy Supply and Development including Renewable energy',
      'Natural Resources Management'
    ],
    'Technology and Innovation':[
      'Digital Transformation at Community and Regional Levels',
      'Towards smart communities and smart region in nigeria',
      'ICT and Governance at local and Regional Level',
      'Internal best practices on promotion of community participation in community and regional Development'
    ]
  },
  speakers: [ // 4th value: portrait path, e.g. 'images/speakers/falola.jpg'
    ['Prof. J. Afolabi Falola','Emeritus Professor of Geography and Development','Lead Paper Presenter','images/speakers/Proj_J.webp'],
    ['Engineer Bello Abdullahi Gwarzo FNSE','Public Affairs Analyst and Commentator','Guest Speaker','images/speakers/Engr_Bello.png'],
    ['Honourable Commissioner','Ministry for Local Government, Jigawa State','Guest of Honour',''],
    ['Prof. S.A. Ma’aji','MD/CEO, North West Development Commission','Special Guest of Honour',''],
  ],
  committee: [
    ['Professor Muhammad Bello Shitu','Chairman','images/partners/Prof_shitu.jpg'],
    ['Professor Abdul Hamidu Abdullahi','IACD Board Member Representing West Africa','images/partners/Prof_hamidu.jpeg'],
    ['Garba Hamma Dikko','Secretary','images/partners/garba.webp']
  ],
  dates: [['Arrival','7 December 2026'],['Conference Day 1','8 December 2026'],['Conference Day 2','9 December 2026'],['Departure','10 December 2026']],
  programme: [],
  partners: { // confirmed only; add {name, url}
    'Sponsors and supporting organisations':[
      {name:'IACD',url:'https://www.iacdglobal.org',logo:'images/logos/IACD_logo.png'},
      {name:'ICDP Nigeria',url:'https://www.icdpnigeria.org',logo:'images/logos/ICDP_logo.png'},
      {name:'CITAD',logo:'images/logos/citad.png'}
    ],
    // 'Institutional partners':[], 'Government and development partners':[], 'Organising institutions':[]
  },
  contact: [['mail','Official email','Shitumbshitu2@gmail.com'],['phone','Phone numbers','+234 8033175965 +234 8024879978 +234 8036629090'],['building','Organising institutions','IACD and ICDP Nigeria'],['share-2','Social media','To be announced']]
}

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)]
const TBC='<span class="tbc">To be announced</span>'
$$('[data-link]').forEach(a=>a.href=CONFIG.links[a.dataset.link]||'#')
$('#venue-map-button').addEventListener('click',()=>{
  const status=$('#venue-map-status')
  status.textContent='Venue and location details are currently being finalized. Google Maps directions will be available once they are confirmed. Please check back soon.'
  status.hidden=false
})

// Navigation
$('#nav-desktop').innerHTML=CONFIG.nav.map(([i,t])=>`<a href="#${i}" data-nav="${i}" class="py-1 hover:text-gold">${t}</a>`).join('')
$('#nav-mobile').innerHTML=CONFIG.nav.map(([i,t])=>`<a href="#${i}" data-nav="${i}" class="py-2.5 border-b border-white/10">${t}</a>`).join('')
$('#footer-nav').innerHTML=CONFIG.nav.map(([i,t])=>`<li><a href="#${i}" class="hover:text-gold">${t}</a></li>`).join('')
const mb=$('#menu-btn'), mn=$('#nav-mobile')
const toggle=o=>{mn.classList.toggle('hidden',!o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu')}
mb.onclick=()=>toggle(mb.getAttribute('aria-expanded')!=='true')
$$('a',mn).forEach(a=>a.onclick=()=>toggle(false))
addEventListener('keydown',e=>{if(e.key==='Escape')toggle(false)})
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('[data-nav]').forEach(a=>{const on=a.dataset.nav===e.target.id;a.classList.toggle('active',on);on?a.setAttribute('aria-current','true'):a.removeAttribute('aria-current')})}),{rootMargin:'-40% 0px -55% 0px'})
CONFIG.nav.forEach(([i])=>{const s=document.getElementById(i);s&&io.observe(s)})

// Content
$('#objectives-grid').innerHTML=CONFIG.objectives.map(([ic,t],n)=>`<li class="card"><i data-lucide="${ic}" class="text-gold mb-3"></i><p class="font-mono text-xs opacity-60 mb-1">0${n+1}</p><p class="text-sm leading-relaxed">${t}</p></li>`).join('')

Object.entries(CONFIG.subthemes).forEach(([cat,items],i)=>{
  const w=document.createElement('div'); w.className='border-b border-slate-300'
  const body=items.length?`<ul class="list-disc pl-5 space-y-2 text-slate-700">${items.map(x=>`<li>${x}</li>`).join('')}</ul>`:`<p class="text-slate-700">Sub-themes: ${TBC}</p>`
  w.innerHTML=`<h3><button class="w-full flex justify-between items-center text-left py-5 font-display uppercase text-2xl sm:text-3xl" aria-expanded="false" aria-controls="acc${i}">${cat}<i data-lucide="chevron-down" aria-hidden="true"></i></button></h3><div id="acc${i}" role="region" class="acc"><div><div class="pb-5">${body}</div></div></div>`
  const b=$('button',w), p=$('.acc',w)
  b.onclick=()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);p.classList.toggle('open',!o)}
  $('#accordion').appendChild(w)
})

$('#speakers-grid').innerHTML=CONFIG.speakers.map(([n,d,r,img])=>`<article class="card"><div class="ph aspect-square mb-4" ${img?`data-img="${img}"`:''} data-alt="Portrait of ${n}"><i data-lucide="user" class="w-10 h-10 opacity-60"></i></div><p class="font-mono text-[11px] uppercase text-gold">${r}</p><h3 class="font-display text-2xl uppercase mt-1 leading-tight">${n}</h3><p class="text-sm opacity-75 mt-2">${d}</p></article>`).join('')
$('#committee-grid').innerHTML=CONFIG.committee.map(([name,role,img])=>`<article class="card"><div class="ph aspect-square mb-4" data-img="${img}" data-alt="Temporary portrait for ${name}"><i data-lucide="user" class="w-10 h-10 opacity-60"></i></div><p class="font-mono text-[11px] uppercase text-gold">${role}</p><h3 class="font-display text-2xl uppercase mt-1 leading-tight">${name}</h3></article>`).join('')
$$('[data-img]').forEach(b=>{const i=new Image();i.onload=()=>{b.style.backgroundImage=`url(${i.src})`;b.setAttribute('role','img');b.setAttribute('aria-label',b.dataset.alt);b.innerHTML=''};i.src=b.dataset.img})

$('#dates').innerHTML=CONFIG.dates.map(([a,b])=>`<div class="card"><p class="font-mono text-xs uppercase opacity-70">${a}</p><p class="font-display text-2xl mt-1">${b}</p></div>`).join('')
$('#partners-wrap').innerHTML=Object.entries(CONFIG.partners).map(([g,list])=>`<div><h3 class="font-mono text-xs uppercase mb-3">${g}</h3><div class="grid grid-cols-2 sm:grid-cols-4 gap-4">${list.length?list.map(p=>p.url?`<a href="${p.url}" target="_blank" rel="noopener" class="card h-28 grid place-items-center hover:border-current" aria-label="${p.name} (opens in a new tab)"><img src="${p.logo}" alt="${p.name} logo" class="max-h-20 max-w-full object-contain"></a>`:`<div class="card h-28 grid place-items-center" aria-label="${p.name}"><img src="${p.logo}" alt="${p.name} logo" class="max-h-20 max-w-full object-contain"></div>`).join(''):`<div class="card h-24 grid place-items-center text-sm opacity-70 border-dashed">Awaiting confirmation</div>`}</div></div>`).join('')

const phoneNumbers=CONFIG.contact.find(([,label])=>label==='Phone numbers')[2].match(/\+234\s*\d+/g)
const socialLinks=[`<a class="underline" href="${CONFIG.socialLinks.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`,...phoneNumbers.map(number=>`<a class="underline" href="https://wa.me/${number.replace(/\D/g,'')}" target="_blank" rel="noopener">WhatsApp ${number}</a>`)]
$('#contact-list').innerHTML=CONFIG.contact.map(([ic,l,v])=>`<li class="card flex gap-3"><i data-lucide="${ic}" class="shrink-0"></i><div><p class="font-semibold">${l}</p>${l==='Social media'?`<div class="flex flex-wrap gap-x-4 gap-y-2">${socialLinks.join('')}</div>`:`<p>${v==='To be announced'?TBC:v}</p>`}</div></li>`).join('')+`<li class="card sm:col-span-2">Websites: <a class="underline" href="https://www.iacdglobal.org" target="_blank" rel="noopener">iacdglobal.org</a> and <a class="underline" href="https://www.icdpnigeria.org" target="_blank" rel="noopener">icdpnigeria.org</a></li>`

// Countdown (dials)
const target=new Date(CONFIG.eventDate).getTime(), pad=n=>String(n).padStart(2,'0')
function tick(){const d=Math.max(0,target-Date.now());$('#cd-d').textContent=pad(Math.floor(d/864e5));$('#cd-h').textContent=pad(Math.floor(d/36e5)%24);$('#cd-m').textContent=pad(Math.floor(d/6e4)%60)}
tick(); setInterval(tick,1000)

const tt=$('#to-top'); addEventListener('scroll',()=>tt.classList.toggle('hidden',scrollY<600),{passive:true})
tt.onclick=()=>scrollTo({top:0,behavior:'smooth'})
createIcons({ icons: Object.fromEntries(Object.entries(ICONS).map(([k,v])=>[k,v])) })
