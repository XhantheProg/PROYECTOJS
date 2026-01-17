console.log("=== INICIO DEL SCRIPT ===");

import { Router } from "./router.js";
console.log("✅ Router importado");

import { initProducts } from "./services/products_service.js";
console.log("✅ initProducts importado");

document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 DOM cargado, iniciando app...");
    
    const app = document.getElementById('app');
    console.log("App element:", app);
    
    if (!app) {
        console.error("❌ No se encontró #app");
        return;
    }
    
    try {
        const router = new Router(app);
        console.log("✅ Router creado");
        
        initProducts();
        console.log("✅ Productos inicializados");
        
        function setActive(page) {
            document.querySelectorAll('.menu-item').forEach((btn) => {
                btn.classList.toggle('active', btn.dataset.page === page);
            });
        }
        
        const menuItems = document.querySelectorAll('.menu-item');
        console.log(`📋 Botones encontrados: ${menuItems.length}`);
        
        menuItems.forEach((btn, index) => {
            console.log(`Botón ${index}:`, btn.dataset.page);
            btn.addEventListener("click", () => {
                const page = btn.dataset.page;
                console.log("🔄 Click en botón:", page);
                router.navigate(page);
                setActive(page);
            });
        });
        
        console.log("🏠 Navegando a dashboard...");
        router.navigate("dashboard");
        setActive("dashboard");
        console.log("✅ App iniciada correctamente");
        
    } catch (error) {
        console.error("❌ Error al iniciar app:", error);
    }
});