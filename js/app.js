// SELECT ICON HAMBURGER
const hamburger = document.querySelector('.iconHamburger');
console.log(hamburger);

const menuCollapse = document.querySelector('.menuCollapse');
console.log(menuCollapse);

const closeMenu = document.querySelector('.closeMenu');
console.log(closeMenu);


hamburger.addEventListener('click', ()=>{
    console.log('ok')
    menuCollapse.classList.toggle('block');
});

closeMenu.addEventListener('click', ()=>{
    console.log('ok')
    menuCollapse.classList.toggle('block');

});