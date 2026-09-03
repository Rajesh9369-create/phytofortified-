// PHYTOFORTIFIED interactions — deliberately lightweight so navigation works in Streamlit and normal browsers.
document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.desktop-nav');
  const menu=document.querySelector('.menu');
  if(menu&&nav){
    menu.addEventListener('click',()=>nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
  }

  // Use native anchor navigation, but account for the fixed/sticky header.
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
