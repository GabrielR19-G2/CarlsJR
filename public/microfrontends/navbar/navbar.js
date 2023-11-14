// navbar.js

export function initNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    
    if (navbarContainer) {
        fetch('./microfrontends/navbar/navbar.html')
            .then(response => response.text())
            .then(html => {
                navbarContainer.innerHTML = html;
                // Lógica de inicialización específica del navbar si es necesario
            })
            .catch(error => {
                console.error('Error al cargar el contenido del navbar:', error);
            });
    }
}
