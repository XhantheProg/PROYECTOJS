import { renderDashboard } from "./pages/dashboard.js";
import { renderHome } from "./pages/home.js";
import { renderProduct } from "./data/products.js";
//para importar primero opngo las renders luego importo arriba de mi
const routes={
    dashboard: renderDashboard,
    products: renderProduct,
}

export class Router{
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