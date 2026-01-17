export function renderAboutPage(root) {
    root.innerHTML = `
        <div class="about-page">
            <h1>Acerca de</h1>
            <p>
                Esta es una aplicación SPA (Single Page Application) construida con JavaScript vanilla.
                Utiliza un sistema de routing del lado del cliente para navegar entre páginas sin recargar.
            </p>
            <p>
                <strong>Características:</strong><br>
                • Router personalizado<br>
                • Sistema de componentes modulares<br>
                • Persistencia de datos con localStorage<br>
                • Diseño responsive<br>
                • Arquitectura escalable
            </p>
            <p>
                <strong>Tecnologías utilizadas:</strong><br>
                • HTML5<br>
                • CSS3 (con diseño modular)<br>
                • JavaScript ES6+ (Módulos)<br>
                • LocalStorage API
            </p>
        </div>
    `;
}