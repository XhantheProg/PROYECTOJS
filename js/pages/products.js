export function renderProductsPage(root){
    root.innerHTML = `
       <div class="container">
        <h1>Products</h1>
        <div class="container-products">
                <div class="card">
                    <p class="precio">
                        <span class="divisa">US$</span>
                        <span class="precio-principal">99</span>
                        <span class="precio-decimal">99</span>
                    </p>
                    <img src="https://m.media-amazon.com/images/I/71e5GgPXQzL._AC_UY327_FMwebp_QL65_.jpg"   >
                    <article>
                        Acer Monitor de 27 pulgadas - Pantalla FHD IPS KB272-27 pulgadas (1920 x 1080), frecuencia de actualización de hasta 120 Hz, 99% sRGB, inclinación, compatibilidad de sincronización adaptativa
                    </article>
                    <button>Comprar</button>
                </div>
                <div class="card">
                    <p class="precio">
                        <span class="divisa">US$</span>
                        <span class="precio-principal">18</span>
                        <span class="precio-decimal">97</span>
                    </p>
                    <img src="https://m.media-amazon.com/images/I/61RM1rMoceL._AC_SY300_SX300_QL70_FMwebp_.jpg">
                    <article>
                        GEODMAER Teclado para juegos al 65%, mini teclado retroiluminado con cable, ultracompacto, anti-fantasma, sin conflictos, 68 teclas, teclado con cable para juegos para PC, laptop, Windows Gamer
                    </article>
                    <button>Comprar</button>
                </div>
                <div class="card">
                    <p class="precio">
                        <span class="divisa">US$</span>
                        <span class="precio-principal">49</span>
                        <span class="precio-decimal">95</span>
                    </p>
                    <img src="https://m.media-amazon.com/images/I/71BhRQvEGHL._AC_UY327_FMwebp_QL65_.jpg">
                    <article>
                        Impresora de inyección de tinta inalámbrica Brother Work Smart 1360 a color todo en uno con impresión dúplex automática y pantalla a color de 1.8" | Incluye prueba de suscripción Refresh(1
                    </article>
                    <button>Comprar</button>
                </div>
                <div class="card">
                    <p class="precio">
                        <span class="divisa">US$</span>
                        <span class="precio-principal">29</span>
                        <span class="precio-decimal">99</span>
                    </p>
                    <img src="https://m.media-amazon.com/images/I/61129X8FpDL._AC_UL480_FMwebp_QL65_.jpg">
                    <article>
                        ganopterygon Reloj inteligente con pantalla táctil HD de 2.01 pulgadas, llamadas Bluetooth, más de 120 modos deportivos, frecuencia cardíaca 24/7 y monitor de sueño, resistente al agua IP67
                    </article>
                    <button>Comprar</button>
                </div>
                <div class="card">
                    <p class="precio">
                        <span class="divisa">US$</span>
                        <span class="precio-principal">159</span>
                        <span class="precio-decimal">99</span>
                    </p>
                    <img src="https://m.media-amazon.com/images/I/61-7FkUAw-L._AC_UY327_FMwebp_QL65_.jpg">
                    <article>
                        Lenovo Idea Tab - Tableta para la Universidad - Pantalla IPS táctil de 11" 2.5K - 90Hz - MediaTek Dimensity 6300 - 4 GB de memoria - 128 GB de almacenamiento - Arm Mali-G57 MC2 integrado - Lenovo Tab
                    </article>
                    <button>Comprar</button>
                </div>
                <div class="card">
                    <p class="precio">
                        <span class="divisa">US$</span>
                        <span class="precio-principal">455</span>
                        <span class="precio-decimal">00</span>
                    </p>
                    <img src="https://m.media-amazon.com/images/I/71N9tTF6pML._AC_UY327_FMwebp_QL65_.jpg">
                    <article>
                        Lenovo V15 Gen 4 portátil de negocios, pantalla FHD de 15.6", Intel Core i5-13420H (Beat i7-1355U), HDMI, RJ45, cámara web, teclado numérico, Wi-Fi, Windows 11 Pro, negro (16 GB RAM | 512 GB SSD)
                    </article>
                    <button>Comprar</button>
                </div>
        </div>
    </div>
    `
}