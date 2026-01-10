import { renderDashboard } from "./pages/dashboard";
import { renderHome } from "./pages/home";
import { renderProduct } from "./pages/products";

const routes={
    dashboard: renderDashboard,
    products: renderProduct,
}

class Router{
    constructor(root){
        this.root=root;
        // window.addEventListener("hashchange", ()=> this.handleRouteChange());
        // this.handleRouteChange();
    }
    navigate(pageName){
        const pageFn=routes[pageName]
        if(pageFn){
            this.root.innerHTML=""; //para limpiar el contenedor
            pageFn(this.root)
        } else {
            this.root.innerHTML="<h1>404 - Pagina no encontrada</h1>";
        }
    }
}