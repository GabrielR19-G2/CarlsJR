// FooterComponent.js

export class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.initFooter();
        this.loadContent();
    }

    initFooter() {
        console.log('Footer initialized');
    }

    loadContent() {
        const footerContainer = document.getElementById('footer-container');

        // Cargar el contenido del footer.html en el contenedor
        fetch('microfrontends/footer/footer.html') // Ajusta la ruta según tu estructura
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido del footer:', error);
            });

        // Puedes agregar aquí lógica adicional para el footer si es necesario
    }
}

customElements.define('footer-component', FooterComponent);
