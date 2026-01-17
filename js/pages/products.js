    import { 
        getCategories, 
        filterByCategory, 
        getAllProducts, 
        deleteProduct, 
        isDuplicateName, 
        generateProductId, 
        addProduct, 
        getProductById, 
        updateProduct 
    } from "../services/products_service.js";

    export function renderProductsPage(root) {
        const categories = getCategories();
        
        root.innerHTML = `
            <div class="products-page">
                <h2>Gestión de Productos</h2>
                
                <!-- FORMULARIO: AGREGAR/EDITAR -->
                <div class="product-form">
                    <h3 id="formTitle">Agregar Producto</h3>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="pName">Nombre</label>
                            <input id="pName" type="text" placeholder="Ej: Teclado mecánico">
                        </div>    
                        <div class="form-group">
                            <label for="pCategory">Categoría</label>
                            <input id="pCategory" type="text" placeholder="Ej: Periféricos">
                        </div>    
                        <div class="form-group">
                            <label for="pPrice">Precio (Bs)</label>
                            <input id="pPrice" type="number" min="0" step="0.01" placeholder="Ej: 450">
                        </div>    
                        <div class="form-group">
                            <label for="pStock">Stock</label>
                            <input id="pStock" type="number" min="0" placeholder="Ej: 12">
                        </div>    
                    </div>
                    <div class="form-actions">
                        <button id="btnPrimary" class="btn btn-primary">Agregar</button>
                        <button id="btnCancel" class="btn btn-secondary" style="display: none;">Cancelar</button>
                        <small id="msg" class="form-message"></small>
                    </div>
                </div>
                
                <!-- FILTROS -->
                <div class="filter-section">
                    <label for="cat">Filtrar por categoría:</label>
                    <select id="cat">
                        ${categories.map(c => `<option value="${c}">${c}</option>`).join("")}
                    </select>
                    <span id="debug" class="debug-info"></span>
                </div>
                
                <!-- LISTA DE PRODUCTOS -->
                <div id="list" class="products-list"></div>
            </div>
        `;

        // Referencias DOM
        const formTitle = root.querySelector("#formTitle");
        const msg = root.querySelector("#msg");
        const debug = root.querySelector("#debug");
        const list = root.querySelector("#list");
        const select = root.querySelector("#cat");
        const pName = root.querySelector("#pName");
        const pCategory = root.querySelector("#pCategory");
        const pPrice = root.querySelector("#pPrice");
        const pStock = root.querySelector("#pStock");
        const btnPrimary = root.querySelector("#btnPrimary");
        const btnCancel = root.querySelector("#btnCancel");
        
        // Estado
        let editingId = null;

        // ============ FUNCIONES DE UI ============
        
        function setMessage(text, isError = false) {
            msg.textContent = text;
            msg.className = `form-message ${isError ? 'error' : 'success'}`;
            
            // Auto-limpiar después de 5 segundos
            setTimeout(() => {
                if (msg.textContent === text) {
                    clearMessage();
                }
            }, 5000);
        }

        function clearMessage() {
            msg.textContent = "";
            msg.className = "form-message";
        }

        function setFormModeAdd() {
            editingId = null;
            formTitle.textContent = "Agregar Producto";
            btnPrimary.textContent = "Agregar";
            btnCancel.style.display = "none";
            clearForm();
        }

        function setFormModeEdit(product) {
            editingId = product.id;
            formTitle.textContent = "Editar Producto";
            btnPrimary.textContent = "Guardar Cambios";
            btnCancel.style.display = "inline-block";

            pName.value = product.name ?? "";
            pCategory.value = product.category ?? "";
            pPrice.value = String(product.price ?? 0);
            pStock.value = String(product.stock ?? 0);
            pName.focus();
        }

        function clearForm() {
            pName.value = "";
            pCategory.value = "";
            pPrice.value = "";
            pStock.value = "";
            pName.focus();
        }

        function validateInputs() {
            const name = pName.value.trim();
            const category = pCategory.value.trim();
            const price = Number(pPrice.value);
            const stock = Number(pStock.value);

            if (!name) return { ok: false, message: "El nombre es requerido" };
            if (name.length < 3) return { ok: false, message: "El nombre debe tener al menos 3 caracteres" };
            if (!category) return { ok: false, message: "La categoría es requerida" };
            if (Number.isNaN(price) || price < 0) return { ok: false, message: "Precio inválido" };
            if (Number.isNaN(stock) || stock < 0) return { ok: false, message: "Stock inválido" };

            return { ok: true, name, category, price, stock };
        }

        // ============ RENDERIZADO DE TABLA ============
        
        function draw(category) {
            const all = getAllProducts();
            const items = filterByCategory(category);

            debug.textContent = `Total: ${all.length} | Mostrando: ${items.length}`;
            
            if (items.length === 0) {
                list.innerHTML = `
                    <div class="empty-state">
                        <p>📦 No hay productos para mostrar</p>
                        <small>Agrega productos usando el formulario de arriba</small>
                    </div>
                `;
                return;
            }

            list.innerHTML = `
                <table class="products-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Categoría</th>
                            <th>Precio (Bs)</th>
                            <th>Stock</th>
                            <th>Vendidos</th>
                            <th>Acciones</th>
                        </tr>   
                    </thead>
                    <tbody>
                        ${items.map(p => `
                            <tr>
                                <td><strong>${p.name}</strong></td>
                                <td>${p.category}</td>
                                <td>${p.price.toFixed(2)}</td>
                                <td class="${p.stock <= 5 ? 'stock-low' : ''}">${p.stock ?? 0}</td>
                                <td>${p.sold ?? 0}</td>
                                <td class="actions">
                                    <button class="btnEdit btn-icon" data-id="${p.id}" title="Editar">✏️</button>
                                    <button class="btnDelete btn-icon" data-id="${p.id}" title="Eliminar">🗑️</button>
                                </td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            `;

            // Event listeners para botones de editar
            root.querySelectorAll(".btnEdit").forEach(btn => {
                btn.addEventListener("click", () => {
                    clearMessage();
                    const id = btn.dataset.id;
                    const product = getProductById(id);
                    
                    if (!product) {
                        setMessage("Producto no encontrado", true);
                        return;
                    }
                    
                    setFormModeEdit(product);
                    // Scroll al formulario
                    root.querySelector(".product-form").scrollIntoView({ behavior: 'smooth' });
                });
            });

            // Event listeners para botones de eliminar
            root.querySelectorAll(".btnDelete").forEach(btn => {
                btn.addEventListener("click", () => {
                    clearMessage();
                    const id = btn.dataset.id;
                    const product = getProductById(id);
                    
                    if (!product) {
                        setMessage("Producto no encontrado", true);
                        return;
                    }
                    
                    const confirmed = confirm(`¿Seguro que deseas eliminar "${product.name}"?`);
                    if (!confirmed) return;

                    const removed = deleteProduct(id);
                    if (removed) {
                        setMessage("✅ Producto eliminado correctamente");
                        draw(select.value);
                    } else {
                        setMessage("No se pudo eliminar (ID no encontrado)", true);
                    }
                });
            });
        }

        // ============ EVENT LISTENERS ============

        // Botón principal: Agregar o Guardar cambios
        btnPrimary.addEventListener("click", () => {
            clearMessage();
            const v = validateInputs();
            
            if (!v.ok) {
                setMessage(v.message, true);
                return;
            }

            // MODO AGREGAR
            if (!editingId) {
                if (isDuplicateName(v.name)) {
                    setMessage("Ya existe un producto con ese nombre", true);
                    return;
                }

                const newProduct = {
                    id: generateProductId(),
                    name: v.name,
                    category: v.category,
                    price: v.price,
                    stock: v.stock,
                    sold: 0,
                    active: true,
                    createdAt: new Date().toISOString().slice(0, 10)
                };

                addProduct(newProduct);
                setMessage("✅ Producto agregado correctamente");
                clearForm();
                draw(select.value);
                return;
            }

            // MODO EDITAR
            const current = getProductById(editingId);
            if (!current) {
                setMessage("No se pudo editar (producto no existe)", true);
                return;
            }

            const normalizedNew = v.name.trim().toLowerCase();
            const normalizedCurrent = (current.name ?? "").trim().toLowerCase();

            if (normalizedNew !== normalizedCurrent && isDuplicateName(v.name, editingId)) {
                setMessage("Ya existe otro producto con ese nombre", true);
                return;
            }

            const updated = updateProduct(editingId, {
                name: v.name,
                category: v.category,
                price: v.price,
                stock: v.stock
            });

            if (!updated) {
                setMessage("No se pudo guardar los cambios", true);
                return;
            }

            setMessage("✅ Cambios guardados correctamente");
            setFormModeAdd();
            draw(select.value);
        });

        // Cancelar edición
        btnCancel.addEventListener("click", () => {
            clearMessage();
            setFormModeAdd();
        });

        // Filtro por categoría
        select.addEventListener("change", (e) => {
            draw(e.target.value);
        });

        // Enter en inputs para enviar formulario
        [pName, pCategory, pPrice, pStock].forEach(input => {
            input.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    btnPrimary.click();
                }
            });
        });

        // ============ INICIALIZACIÓN ============
        setFormModeAdd();
        draw("Todos");
    }