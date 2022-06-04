const menuBtn = document.querySelector('.menu-btn');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');


// Set Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    menuBtn.classList.add('close');
    menu.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
      showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

   
    showMenu = false;
  }
}
