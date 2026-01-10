export function renderProduct(root){
    root.innerHTML=`
    <h1>Productos</h1>
    <p>Esta es la pagina Productos</p>
    `;
}






export const productsSeed =[
    {id:"p-001", name: "Teclado Mecanico", category: "perifericos", price: 2500, stock: 15, sold: 5, active:true},
    {id:"p-002", name: "Mouse Gamer", category: "perifericos", price: 1200, stock: 25, sold: 10, active:true},
    {id:"p-003", name: "Monitor 24\"", category: "monitores", price: 8500, stock: 8, sold: 3, active:true},
    {id:"p-004", name: "Laptop Gaming", category: "computadoras", price: 15000, stock: 5, sold: 2, active:true},
    {id:"p-005", name: "Parlantes Bluetooth", category: "audio", price: 1800, stock: 20, sold: 7, active:true},
]