// registercomponent.js
export class RegistroComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        this.setupForm();
        this.#agregarEstilo(shadow);
        this.#render(shadow);
    }

    #render(shadow) {
        shadow.innerHTML += `
        <!-- registerComponent.html -->
        <div class="contenedor">
            <div class="registro">
                <h2>Regístrate</h2>
                <p class="hint-text">Crea tu cuenta es gratis y sólo te llevará un minuto.</p>
                <!-- Agrega un ID al formulario -->
                <form id="registroForm">
                    <label for="username">Usuario:</label>
                    <input type="text" id="username" name="username" required />
        
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                
                    <div class="form-group">
                        <label class="form-check-label"><input type="checkbox" required="required"> Acepto las <a href="#">Condiciones de uso</a> y las <a href="#"> Políticas de privacidad</a></label>
                    </div>

                    <button type="submit">Crear cuenta</button>

                </form>
                
                <div class="text-red">¿Ya tiene una cuenta? <a class="text-red" href="login.html">Iniciar Sesión</a></div>                 
                </div>
                
            </div>
        </div>
        
        `;
    }
    setupForm() {
        const registroForm = this.shadowRoot.querySelector('#registroForm');
    
        if (registroForm) {
            registroForm.addEventListener('submit', async function (event) {
                event.preventDefault();
    
                const username = registroForm.querySelector('#username').value;
                const password = registroForm.querySelector('#password').value;
    
                try {
                    const response = await fetch('http://localhost:3000/api/usuarios', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ usuario: username, contraseña: password }),
                    });
    
                    const data = await response.json();
    
                    if (response.ok) {
                        console.log('Registro exitoso:', data);
                        // Muestra un mensaje de éxito o redirige a otra página
                        alert('¡Registro exitoso!');
                    } else {
                        console.error('Error en el registro:', data.error);
                        // Muestra un mensaje de error al usuario
                        alert('Error en el registro. Por favor, inténtalo de nuevo.');
                    }
                } catch (error) {
                    console.error('Error en la solicitud:', error);
                }
            });
        }
    }
    


    #agregarEstilo(shadow) {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "/frontend/microfrontends/RegisterComponent/register.css");
        shadow.appendChild(link);
    }
    
}
customElements.define('registro-component', RegistroComponent);
