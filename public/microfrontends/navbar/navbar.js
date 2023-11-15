
// NavbarComponent.js

export class NavbarComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.initNavbar();
        this.loadContent();
    }

    initNavbar() {
        // Lógica de inicialización específica del navbar si es necesario
    }

    loadContent() {
        fetch('microfrontends/navbar/navbar.html') // Ajusta la ruta según tu estructura
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
                // Puedes agregar aquí lógica adicional para el navbar si es necesario
            })
            .catch(error => {
                console.error('Error al cargar el contenido del navbar:', error);
            });
    }
}

customElements.define('navbar-component', NavbarComponent);
