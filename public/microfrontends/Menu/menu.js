// menu.js

export function initMenu() {
    const menuContainer = document.getElementById('menu-container');

    if (menuContainer) {
        fetch('./microfrontends/Menu/menu.html')
            .then(response => response.text())
            .then(html => {
                menuContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido del menú:', error);
            });
    }
}
