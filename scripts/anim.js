let burger = document.getElementById('btn-burger');
let menu = document.getElementById('menu');
let closeMenu = document.getElementById('close');
let tl = gsap.timeline({paused: true})

tl.to("#menu",{opacity: 1, duration: 0.5});
tl.from("#menu-top",{y:-50 ,duration: 0.5},"<");
tl.from("#menu-container",{y:100 ,duration: 1},"<");
tl.to("#menu-main", {opacity: 1, duration: 2}, "<");
tl.from("#social-list", {y:50 , duration: 1},">-1");
tl.to("#social-list", {opacity:1 , duration: 1},"<");
tl.from("#menu-right", {y:50, duration:1},">-1");
tl.to("#menu-right", {opacity:1, duration: 1}, "<")

let tlLoad = gsap.timeline();
tlLoad.to("#hero-title", {opacity: 1, duration: 0.7});
tlLoad.from("#hero-title", {y: 50, duration: 0.7},"<");
tlLoad.to("#hero-btn", {opacity: 1, duration:0.7},"<");
tlLoad.from("#hero-btn", {y: 50, duration: 0.7},"<");
tlLoad.to("#hero-descr", {opacity: 1, duration:0.7},">");
tlLoad.to("#photos-1", {opacity: 1, duration:0.5},">");
tlLoad.to("#photos-2", {opacity: 1, duration:0.5},">");
tlLoad.to("#photos-3", {opacity: 1, duration:0.5},">");
tlLoad.to("#photos-author", {opacity: 1, duration:0.5},">");

burger.addEventListener('click',()=>{
  menu.classList.add('menu--open');
  tl.restart();

});
closeMenu.addEventListener('click', ()=>{
  tl.reverse();
  setTimeout(()=> menu.classList.remove('menu--open'),2000);

});




