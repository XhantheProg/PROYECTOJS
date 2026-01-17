import { productsSeed } from "../data/products.js";
import { readJSON, writeJSON } from "./storage.js";

const KEY = "products_db_v18";

// Inicializar productos en localStorage
export function initProducts() {
    const existing = readJSON(KEY);
    if (!existing) {
        writeJSON(KEY, productsSeed);
    }
}

// Obtener todos los productos
export function getAllProducts() {
    return readJSON(KEY, []);
}

// Obtener producto por ID
export function getProductById(id) {
    return getAllProducts().find(p => p.id === id) || null;
}

// Agregar nuevo producto
export function addProduct(product) {
    const products = getAllProducts();
    products.push(product);
    writeJSON(KEY, products);
    return product;
}

// Eliminar producto por ID
export function deleteProduct(id) {
    const products = getAllProducts();
    const next = products.filter(p => p.id !== id);
    writeJSON(KEY, next);
    return products.length !== next.length;
}

// Actualizar producto existente
export function updateProduct(id, patch) {
    const products = getAllProducts();
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) {
        return null;
    }
    
    const existing = products[index];
    const updated = { ...existing, ...patch };
    products[index] = updated;
    writeJSON(KEY, products);
    
    return updated;
}

// Obtener categorías únicas
export function getCategories() {
    const products = getAllProducts();
    const cats = new Set(products.map(p => p.category));
    return ["Todos", ...Array.from(cats)];
}

// Filtrar productos por categoría
export function filterByCategory(category) {
    const products = getAllProducts();
    if (!category || category === "Todos") {
        return products;
    }
    return products.filter(p => p.category === category);
}

// Obtener productos más vendidos
export function getTopSold(limit = 5) {
    return [...getAllProducts()]
        .sort((a, b) => (b.sold ?? 0) - (a.sold ?? 0))
        .slice(0, limit);
}

// Buscar productos por nombre
export function searchProducts(query) {
    const products = getAllProducts();
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description?.toLowerCase().includes(lowerQuery)
    );
}