const botonMenu = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

botonMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})

//Modo oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
const htmlElement = document.documentElement;
const darkModeIcon = document.getElementById('dark-mode-icon');

// Alternar clase 'dark' en el elemento raíz
darkModeToggle.addEventListener('click', () => {
    const isDarkMode = htmlElement.classList.toggle('dark');
    darkModeIcon.textContent = isDarkMode ? '☀️' : '🌙'; // Cambiar ícono
});