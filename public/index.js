// index.js
import './microfrontends/Menu/menu.js'; 
import './microfrontends/navbar/navbar.js'; 
import './microfrontends/footer/footer.js'; 

document.addEventListener('DOMContentLoaded', () => {

    const navbarContainer = document.getElementById('navbar-container');
    navbarContainer.innerHTML = '<navbar-component></navbar-component>';

    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '<menu-component></menu-component>';

    const footerContainer = document.getElementById('footer-container');
    footerContainer.innerHTML = '<footer-component></footer-component>';
});