import { renderDashboardPage } from "./pages/dashboard.js";
import { renderProductsPage } from "./pages/products.js";
import { renderAboutPage } from "./pages/about.js";

const routes = {
    dashboard: renderDashboardPage,
    products: renderProductsPage,
    about: renderAboutPage
};
// Clase Router para manejar la navegación
export class Router {
    constructor(root) {
        this.root = root;
    }

    navigate(pageName) {
        const pageFn = routes[pageName];
        
        if (pageFn) {
            this.root.innerHTML = "";
            pageFn(this.root);
        } else {
            this.root.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <h2 style="color: #ef4444;">Página no encontrada</h2>
                    <p style="color: #94a3b8; margin-top: 8px;">La página "${pageName}" no existe.</p>
                </div>
            `;
        }
    }
}