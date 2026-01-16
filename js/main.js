import { Router } from "./router.js";

const app = document.getElementById('app');
const router = new Router(app);




//funcion para marcar activo el dashboard

function setActive(page){ //dashboard
    document.querySelectorAll('.menu-item').forEach((btn)=>{
        btn.classList.toggle('active', btn.dataset.page === page); //classlist es para manejar las clases de css
        // toggle agrega o quita una clase dependiendo si ya la tiene o no
        //btn.dataset.page accede al atributo data-page del boton
    });

    
}

{/* <button> id="dash-btn" class="menu-item" data-page="dashboard" style="border: 1px solid red">Dashboard</button> */}











// router.navigate("dashboard");

// document.getElementById('dash-btn').addEventListener("click",(e)=>{
//     e.preventDefault();
//     router.navigate("dashboard");
// });
// document.getElementById('prod-btn').addEventListener("click",(e)=>{
//     e.preventDefault();
//     router.navigate("products");
// });



// todo funcion para navegar cuando hacemos click en el sifebar
document.querySelectorAll('.menu-item').forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const page = btn.dataset.page; //acceder al atributo data-page
        router.navigate(page); //navegar a la pagina correspondiente
        setActive(page); //marcar el boton como activo
    });
});
        

router.navigate("dashboard");


// document.querySelectorAll('.menu-item').forEach((btn)=>{
//     btn.addEventListener("click",(e)=>{
//         const page = btn.dataset.page;
//         router.navigate(page);
//     })
// });