import { Router } from "./router.js";

const app = document.getElementById('app');
const router = new Router(app);

router.navigate("dashboard");

document.getElementById('dash-btn').addEventListener("click",(e)=>{
    e.preventDefault();
    router.navigate("dashboard");
});
document.getElementById('prod-btn').addEventListener("click",(e)=>{
    e.preventDefault();
    router.navigate("products");
});



// document.querySelectorAll('.menu-item').forEach((btn)=>{
//     btn.addEventListener("click",(e)=>{
//         const page = btn.dataset.page;
//         router.navigate(page);
//     })
// });