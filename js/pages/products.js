import { getCategories, filterByCategory } from "../services/products_service.js";

export function renderProductsPage(root) {
    const categories = getCategories();
    
    root.innerHTML = `
        <div class="products-page">
            <h2>Productos</h2>
            <div class="filter-section">
                <label for="cat">Filtrar por categoría:</label>
                <select id="cat">
                    ${categories.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
            </div>
            <div id="list"></div>
        </div>
    `;
    
    const list = root.querySelector("#list");
    const select = root.querySelector("#cat");

    function draw(category) {
        const items = filterByCategory(category);
        
        if (items.length === 0) {
            list.innerHTML = `
                <div class="empty-state">
                    <p>No hay productos en esta categoría</p>
                </div>
            `;
            return;
        }
        
        list.innerHTML = `
            <ul>
                ${items.map(p => `
                    <li>
                        <strong>${p.name}</strong><br>
                        <b>${p.category}</b><br>
                        <small>Vendidos: ${p.sold} | Precio: $${p.price.toFixed(2)}</small>
                    </li>
                `).join("")}
            </ul>
        `;
    }

    draw("Todos");
    select.addEventListener("change", (e) => draw(e.target.value));
}