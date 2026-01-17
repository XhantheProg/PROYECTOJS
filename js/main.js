import { Router } from "./router.js";
import { initProducts } from "./services/products_service.js";

// Inicializar la app
const app = document.getElementById('app');
const router = new Router(app);

// Inicializar productos en localStorage
initProducts();

// Función para marcar el botón activo
function setActive(page) {
    document.querySelectorAll('.menu-item').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.page === page);
    });
}

// Event listeners para navegación
document.querySelectorAll('.menu-item').forEach((btn) => {
    btn.addEventListener("click", () => {
        const page = btn.dataset.page;
        router.navigate(page);
        setActive(page);
    });
});

// Navegar a dashboard por defecto
router.navigate("dashboard");
setActive("dashboard");