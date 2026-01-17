import { productsSeed } from "../data/products.js";
import { readJSON, writeJSON } from "./storage.js";

const KEY = "products_db_v18";

export function initProducts() {
    const existing = readJSON(KEY);
    if (!existing) {
        writeJSON(KEY, productsSeed);
    }
}

export function getAllProducts() {
    return readJSON(KEY, []);
}

export function getProductById(id) {
    const products = getAllProducts();
    return products.find(p => p.id === id) || null;
}

export function addProduct(product) {
    const products = getAllProducts();
    products.push(product);
    writeJSON(KEY, products);
    return product;
}

export function deleteProduct(id) {
    const products = getAllProducts();
    const next = products.filter(p => p.id !== id);
    writeJSON(KEY, next);
    return products.length !== next.length;
}

export function updateProduct(id, patch) {
    const products = getAllProducts();
    const index = products.findIndex(p => p.id === id);
    
    if (index === -1) {
        return null;
    }
    
    const existing = products[index];
    const updated = { 
        ...existing, 
        ...patch,
        updatedAt: new Date().toISOString().slice(0, 10)
    };
    products[index] = updated;
    writeJSON(KEY, products);
    
    return updated;
}

export function getCategories() {
    const products = getAllProducts();
    const cats = new Set(products.map(p => p.category));
    return ["Todos", ...Array.from(cats).sort()];
}

export function filterByCategory(category) {
    const products = getAllProducts();
    if (!category || category === "Todos") {
        return products;
    }
    return products.filter(p => p.category === category);
}

export function isDuplicateName(name, excludeId = null) {
    const products = getAllProducts();
    const normalized = name.trim().toLowerCase();
    
    return products.some(p => {
        if (excludeId && p.id === excludeId) {
            return false;
        }
        return p.name.trim().toLowerCase() === normalized;
    });
}

export function generateProductId() {
    const products = getAllProducts();
    if (products.length === 0) {
        return "prod_1";
    }
    
    const numbers = products
        .map(p => {
            const match = String(p.id).match(/\d+$/);
            return match ? parseInt(match[0]) : 0;
        })
        .filter(n => !isNaN(n));
    
    const maxNum = numbers.length > 0 ? Math.max(...numbers) : 0;
    return `prod_${maxNum + 1}`;
}