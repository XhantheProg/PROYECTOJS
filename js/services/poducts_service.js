import { productsSeed } from "../data/products";
import { readJSON, writeJSON } from "./storage";

const KEY= "products_db_v18";

export function initProduct(){
    const existing= readJSON(KEY); //leer los productos almacenados
    if(!existing){
        writeJSON (KEY, productsSeed);
    }
}

export function getAllProducts(){
    return readJSON (KEY, []); //devolver un array vacio si no hay productos
}

export function getProductById(id){
    return getAllProducts().find((p)=> p.id === id) || null; //buscar el producto por id y devolver null si no existe
}

export function addProduct(product){
    const products= getAllProducts();
    products.push(product);
    writeJSON(KEY, products);
}

export function deleteProduct(id){
    const products= getAllProducts();
    const next= products.filter((p)=> p.id !== id); //filtrar el producto por id
    writeJSON(KEY, next);
    return products.length !== next.length; //devolver true si se elimino el producto, false si no se encontro
}

export function updateProduct(id,patch){
    const products= getAllProducts();
    const index= products.findIndex((p)=> p.id === id);
    if(index=== -1) return null; //devolver null si no se encontro el producto

    const updated= { ...existing, ...patch}; //combinar el producto existente con el parche
    writeJSON(KEY, products);
    return true; //devolver true si se actualizo el producto
    products[index]= updated;
    const existing= products[index];
}

//extras utiles de productos

export function getCategories(){
    const cats= new Set(getAllProducts().map((p)=> p.category)); //conjunto para almacenar categorias unicas
    return ["Todos", ...Array.from(cats)]; //devolver un array con las categorias
    const products= getAllProducts();

}

export function filterByCategory(category){
    const products= getAllProducts(); 
    if(!category || category === "Todos") return products; //devolver todos los productos si no hay categoria o es "Todos"
    return products.filter((p)=> p.category === category); //filtrar los productos por categoria
}

function getTopSold(limit=5){
    return [...getAllProducts()] //crear una copia del array de productos
        .sort((a,b)=> (b.sold ?? 0) - (a.sold ?? 0)) //ordenar los productos por cantidad vendida
        .slice(0,limit); //devolver los primeros n productos
}