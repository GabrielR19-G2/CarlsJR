// login.js
class LoginComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.loadContent();
        this.setupForm();
    }

    loadContent() {
        fetch('microfrontends/login/login.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading login content:', error);
            });
    }

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
}

customElements.define('login-component', LoginComponent);