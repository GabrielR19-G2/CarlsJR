export class LoginComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" })
        // this.loadContent();
        this.setupForm();

        this.#agregarEstilo(shadow);
        this.#render(shadow);
    }


    #render(shadow) {
        shadow.innerHTML += `
        
        `
    }
    //No se esta usando render.
    // loadContent() {
    //     fetch('microfrontends/login/login.html')
    //         .then(response => response.text())
    //         .then(html => {
    //             this.innerHTML = html;
    //         })
    //         .catch(error => {
    //             console.error('Error loading login content:', error);
    //         });
    // }

    setupForm() {
        const loginForm = this.querySelector('#loginForm');

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = loginForm.querySelector('#username').value;
            const password = loginForm.querySelector('#password').value;

            // Add your login logic here
            console.log('Username:', username);
            console.log('Password:', password);
        });
    }

    #agregarEstilo(shadow) {
        let link = document.createElement("link"); // Crea un elemento link para cargar los estilos CSS.
        link.setAttribute("rel", "stylesheet"); // Establece el atributo "rel" en "stylesheet".
        link.setAttribute("href", "./loginComponent/login.css"); // Establece la ruta del archivo CSS.
        shadow.appendChild(link); // Agrega el elemento link al Shadow DOM para cargar los estilos.

    }
}

customElements.define('login-component', LoginComponent);