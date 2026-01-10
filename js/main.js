import {Router} from './router.js';


const app=document.getElementById("app");
const router =new Router(app);

router.navigate("dashboard"); //navegar a la pagina de dashboard al iniciar

document.getElementById("dash-btn").addEventListener("click", ()=>{
    router.navigate("dashboard")
});
document.getElementById("prod-btn").addEventListener("click", ()=>{
    router.navigate("products")
    
});


// document.querySelectorAll(".menu-item").forEach((button)=>{
//     button.addEventListener("click", ()=>{
//         const page=button.dataset.page; //obtener el nombre de la pagina desde el atributo data-page
//         router.navigate(page);
//     });
// });
