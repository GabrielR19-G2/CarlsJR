// index.js

import { initMenu } from './microfrontends/Menu/menu.js';
import './microfrontends/navbar/navbar.js'; // Ajusta la ruta según tu estructura
import './microfrontends/footer/footer.js'; // Ajusta la ruta según tu estructura

document.addEventListener('DOMContentLoaded', () => {
    initMenu();

    // Puedes crear el componente de navbar simplemente agregando la etiqueta HTML
    const navbarContainer = document.getElementById('navbar-container');
    navbarContainer.innerHTML = '<navbar-component></navbar-component>';

    // Puedes crear el componente de footer simplemente agregando la etiqueta HTML
    const footerContainer = document.getElementById('footer-container');
    footerContainer.innerHTML = '<footer-component></footer-component>';
});
