const botonMenu = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

botonMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})

//Modo oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
const htmlElement = document.documentElement;
const darkModeIcon = document.getElementById('dark-mode-icon');

function initializeTheme() {
    const userPreference = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userPreference) {
        htmlElement.classList.toggle('dark', userPreference === 'dark');
    } else {
        htmlElement.classList.toggle('dark', systemPreference);
    }

    updateIcon();
}
// Cambiar tema manualmente y guardar en localStorage
function toggleTheme() {
    const isDarkMode = htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateIcon();
}

// Actualizar ícono según el tema actual
function updateIcon() {
    const isDarkMode = htmlElement.classList.contains('dark');
    darkModeIcon.textContent = isDarkMode ? '☀️' : '🌙';
}
// Event Listener para el botón
darkModeToggle.addEventListener('click', toggleTheme);

// Detectar cambios en la preferencia del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!localStorage.getItem('theme')) {
    htmlElement.classList.toggle('dark', event.matches);
    updateIcon();
    }
});

// Inicializar tema
initializeTheme();