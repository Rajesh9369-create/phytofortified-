document.addEventListener('DOMContentLoaded',()=>{
  const style=document.createElement('style');
  style.textContent=`
    html{scroll-behavior:smooth;scroll-padding-top:78px}
    body{font-family:'Manrope',sans-serif;background:#f7f8f3;color:#17251e}
    .nav{background:rgba(247,248,243,.62)!important;backdrop-filter:blur(24px) saturate(125%);-webkit-backdrop-filter:blur(24px) saturate(125%);border-bottom:1px solid rgba(207,216,209,.72)!important;box-shadow:0 8px 30px rgba(40,58,47,.045)}
    .nav:before{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(circle at 51% -20%,rgba(145,172,150,.34),transparent 30%),radial-gradient(circle at 76% 0%,rgba(103,136,111,.25),transparent 22%),rgba(247,248,243,.38);filter:blur(1px)}
    .desktop-nav a,.nav-cta,.brand{font-family:'Manrope',sans-serif}
    .desktop-nav a{font-size:11px!important;color:#5a6961!important}
    .brand{font-size:14px!important}
    .hero h1,.section-top h2,.solution h2,.lab-copy h2,.evidence h2,.strength h2,.development h2,.impact h2,.ecosystem h2,.contact h2,.footer-word{font-family:'Manrope',sans-serif!important;font-weight:300!important}
    .hero h1{font-size:clamp(68px,7.65vw,116px)!important;line-height:.80!important;letter-spacing:-.078em!important}
    .lead{font-family:'Manrope',sans-serif!important;font-size:23px!important}
    .bodycopy,.section p,.challenge-grid p,.four-steps p,.evidence-cards p,.contact p,.ecosystem p{font-family:'Manrope',sans-serif!important}
    .challenge-grid article,.four-steps>div,.evidence-cards article,.ecosystem-grid article{background:rgba(255,255,255,.48)!important;backdrop-filter:blur(18px) saturate(120%);-webkit-backdrop-filter:blur(18px) saturate(120%);box-shadow:0 12px 35px rgba(43,63,50,.035)}
    .challenge-grid .icon{background:rgba(224,233,225,.74)!important;border:1px solid rgba(198,211,201,.65)}
    .mechanism,.candidates,.contact form{background:rgba(255,255,255,.38)!important;backdrop-filter:blur(20px) saturate(120%);-webkit-backdrop-filter:blur(20px) saturate(120%);box-shadow:0 16px 45px rgba(43,63,50,.04)}
    .pill{box-shadow:0 10px 25px rgba(25,39,31,.10)}
    .photo-label{background:rgba(255,255,255,.13)!important;border:1px solid rgba(255,255,255,.55)!important;backdrop-filter:blur(18px) saturate(125%)!important;-webkit-backdrop-filter:blur(18px) saturate(125%)!important;box-shadow:0 5px 22px rgba(0,0,0,.10)}
    .phase,.chips span{background:rgba(255,255,255,.35);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
    .ingredient{box-shadow:0 15px 45px rgba(40,57,46,.07)}
    .ingredient:after{background:linear-gradient(0deg,rgba(17,27,22,.48),rgba(17,27,22,.02) 62%)!important}
    .contact input,.contact select,.contact textarea{background:rgba(231,238,232,.64)!important;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
    .reveal{opacity:1!important;transform:none!important}
    @media(max-width:900px){.nav:before{display:none}.desktop-nav.open{display:flex!important;position:absolute;left:0;right:0;top:78px;padding:18px 5vw;flex-direction:column;gap:15px;background:rgba(247,248,243,.88);backdrop-filter:blur(24px);border-bottom:1px solid #dce2dc}.hero h1{font-size:15vw!important}}
  `;
  document.head.appendChild(style);

  const root='https://raw.githubusercontent.com/Rajesh9369-create/phytofortified-/main/assets/';
  const hero=document.querySelector('.hero-photo img');
  if(hero) hero.src=root+'hero-reference.webp';
  const moringa=document.querySelector('.ingredient.moringa img');
  if(moringa) moringa.src=root+'moringa-reference.webp';
  const tulsi=document.querySelector('.ingredient.tulsi img');
  if(tulsi) tulsi.src=root+'tulsi-reference.webp';

  const nav=document.querySelector('.desktop-nav');
  const menu=document.querySelector('.menu');
  if(menu&&nav){
    menu.addEventListener('click',()=>nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
  }
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id=a.getAttribute('href');
      const target=document.querySelector(id);
      if(!target)return;
      e.preventDefault();
      const top=target.getBoundingClientRect().top+window.scrollY-82;
      window.scrollTo({top,behavior:'smooth'});
      history.replaceState(null,'',id);
    });
  });
});
