const navLinks=[...document.querySelectorAll('.desktop-nav a,.mobile-nav a')];
const sections=[...document.querySelectorAll('section[id]')];
const reveals=[...document.querySelectorAll('.reveal')];
const filters=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('.project-spotlight')];
const progress=document.querySelector('.scroll-progress span');
const glow=document.querySelector('.cursor-glow');

const projectData={
  pms:{eyebrow:'01 · CORE SYSTEM',title:'PMS / ERP Web Application',summary:'A business-management system built around day-to-day workflows such as billing, inventory, GST and reporting.',problem:'Operational teams need connected screens and records rather than isolated pages. The work centers on making those business flows usable through a web application.',approach:'Build the feature as an end-to-end slice: MVC screens, backend logic, database interaction and validations working together.',stack:'.NET / ASP.NET MVC · C# · SQL Server · JavaScript / jQuery · Bootstrap',delivery:'Business workflows across billing, inventory, GST and reports, with production-oriented improvements and support.'},
  sudha:{eyebrow:'02 · GOVERNMENT PORTAL',title:'Sudha Bikri Kendra',summary:'A form-driven .NET Core MVC portal for structured application workflows and backend processing.',problem:'The portal needs clear forms, controlled data flow and reliable processing for a real-world institutional workflow.',approach:'Use MVC for the user-facing flow, backend processing for business rules and SQL-backed data handling for records.',stack:'.NET Core · ASP.NET MVC · C# · SQL · HTML / CSS / JavaScript',delivery:'A live government-oriented portal at sudhabikrikendra.in with an application-focused workflow.'},
  b2b:{eyebrow:'03 · B2B COMMERCE',title:'B2B Order & E-Commerce System',summary:'An online ordering platform connected with PMS workflows for billing, reporting and account operations.',problem:'Online ordering and offline business operations need to stay aligned so customers and internal teams see the same operational flow.',approach:'Connect the customer-facing order experience with the PMS-side business workflow and data movement.',stack:'.NET · MVC · APIs · SQL · JavaScript / Bootstrap',delivery:'A live B2B ordering platform at orderapp1.dynode.in.'},
  b2c:{eyebrow:'04 · B2C COMMERCE',title:'B2C E-Commerce Platform',summary:'A customer-facing commerce system linked with PMS-backed product and billing workflows.',problem:'Customer ordering needs to stay connected with internal product, billing and operational records.',approach:'Provide a customer-friendly storefront while keeping the backend workflow connected to PMS operations.',stack:'.NET · MVC · APIs · SQL · JavaScript / Bootstrap',delivery:'A live B2C commerce platform at ecom.dynode.in.'}
};

const setActive=id=>navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${id}`));
const sectionObserver=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActive(visible.target.id);},{rootMargin:'-25% 0px -58% 0px',threshold:[.15,.35,.55]});
sections.forEach(s=>sectionObserver.observe(s));

const revealObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target);}});},{threshold:.12});
reveals.forEach(el=>revealObserver.observe(el));

navLinks.forEach(a=>a.addEventListener('click',()=>setActive(a.getAttribute('href').slice(1))));

window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=`${max>0?(window.scrollY/max)*100:0}%`;},{passive:true});

if(glow && window.matchMedia('(pointer:fine)').matches){window.addEventListener('pointermove',e=>{glow.style.left=`${e.clientX}px`;glow.style.top=`${e.clientY}px`;},{passive:true});}

const tilt=document.querySelector('.tilt-card');
if(tilt && window.matchMedia('(pointer:fine)').matches){tilt.addEventListener('pointermove',e=>{const r=tilt.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;tilt.style.transform=`perspective(1100px) rotateX(${(-y*5).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg)`;});tilt.addEventListener('pointerleave',()=>{tilt.style.transform='';});}

document.querySelectorAll('.magnetic').forEach(el=>{if(!window.matchMedia('(pointer:fine)').matches)return;el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.09;const y=(e.clientY-r.top-r.height/2)*.09;el.style.transform=`translate(${x}px,${y}px)`;});el.addEventListener('pointerleave',()=>el.style.transform='');});

const pipelineSteps=[...document.querySelectorAll('.pipeline-card')];let pipelineIndex=0;
setInterval(()=>{if(document.hidden||!pipelineSteps.length)return;pipelineSteps.forEach((el,i)=>el.classList.toggle('active',i===pipelineIndex));pipelineIndex=(pipelineIndex+1)%pipelineSteps.length;},1750);

filters.forEach(btn=>btn.addEventListener('click',()=>{const filter=btn.dataset.filter;filters.forEach(b=>b.classList.toggle('active',b===btn));cards.forEach(card=>{card.style.display=(filter==='all'||card.dataset.type===filter)?'block':'none';});}));

const modal=document.getElementById('case-modal');
const modalTitle=document.getElementById('modal-title');
const modalSummary=document.getElementById('modal-summary');
const modalEyebrow=document.getElementById('modal-eyebrow');
const modalProblem=document.getElementById('modal-problem');
const modalApproach=document.getElementById('modal-approach');
const modalStack=document.getElementById('modal-stack');
const modalDelivery=document.getElementById('modal-delivery');
const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');};

document.querySelectorAll('.open-case').forEach(btn=>btn.addEventListener('click',()=>{const p=projectData[btn.dataset.project];if(!p)return;modalEyebrow.textContent=p.eyebrow;modalTitle.textContent=p.title;modalSummary.textContent=p.summary;modalProblem.textContent=p.problem;modalApproach.textContent=p.approach;modalStack.textContent=p.stack;modalDelivery.textContent=p.delivery;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');}));
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
