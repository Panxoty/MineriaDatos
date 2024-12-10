const botonMenu = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

botonMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})