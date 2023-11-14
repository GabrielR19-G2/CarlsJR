// footer.js
export function initFooter() {
    // Lógica de inicialización del footer aquí
    console.log('Footer initialized');
}

// footer.js
document.addEventListener('DOMContentLoaded', function () {
    console.log('El script footer.js se ha cargado correctamente.');

    // Cargar el contenido del footer.html en el contenedor
    const footerContainer = document.getElementById('footer-container');
    fetch('microfrontends/footer/footer.html')
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error al cargar el contenido del footer:', error);
        });
});
