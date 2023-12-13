// SELECT ICON HAMBURGER
const hamburger = document.querySelector('.iconHamburger');
console.log(hamburger);

const navBar = document.querySelector('.navBar');
console.log(navBar);

const closeMenu = document.querySelector('.closeMenu');
console.log(closeMenu);


hamburger.addEventListener('click', ()=>{
    console.log('ok')
    navBar.classList.toggle('block');
});

closeMenu.addEventListener('click', ()=>{
    console.log('ok')
    navBar.classList.toggle('block');

});