export function renderDashboardPage(root) {
    root.innerHTML = `
        <div class="principal-dashboard">
            <h1>Dashboard</h1>
            <div class="container-images">
                <div class="card-dash" id="img-1">
                    <div class="card-title">Analíticas</div>
                </div>
                <div class="card-dash" id="img-2">
                    <div class="card-title">Usuarios</div>
                </div>
                <div class="card-dash" id="img-3">
                    <div class="card-title">Ventas</div>
                </div>
                <div class="card-dash" id="img-4">
                    <div class="card-title">Reportes</div>
                </div>
            </div>
        </div>
    `;
}