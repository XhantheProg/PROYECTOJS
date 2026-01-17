export function renderHomePage(root) {
    root.innerHTML = `
        <div class="about-page">
            <h1>Bienvenido</h1>
            <p>
                Esta es la página de inicio de la aplicación SPA Modular JS.
            </p>
            <p>
                Utiliza el menú lateral para navegar entre las diferentes secciones:
            </p>
            <ul style="margin-left: 20px; color: #cbd5e1;">
                <li>Dashboard - Visualiza métricas y estadísticas</li>
                <li>Productos - Gestiona el catálogo de productos</li>
                <li>Acerca de - Información sobre la aplicación</li>
            </ul>
        </div>
    `;
}