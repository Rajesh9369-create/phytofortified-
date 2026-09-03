const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('section,article').forEach(el=>{el.classList.add('reveal');revealObserver.observe(el)});
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
const menu=document.querySelector('.menu');const nav=document.querySelector('.nav nav');menu?.addEventListener('click',()=>{nav.classList.toggle('open')});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
window.addEventListener('scroll',()=>{document.body.style.setProperty('--scroll',window.scrollY/(document.body.scrollHeight-innerHeight))},{passive:true});
