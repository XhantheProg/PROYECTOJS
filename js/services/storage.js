// Servicio para manejo de localStorage

/**
 * Lee un objeto JSON desde localStorage
 * @param {string} key - La clave del item en localStorage
 * @param {*} fallback - Valor por defecto si no existe
 * @returns {*} El objeto parseado o el fallback
 */
export function readJSON(key, fallback = null) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
        console.error(`Error leyendo ${key} de localStorage:`, error);
        return fallback;
    }
}

/**
 * Escribe un objeto JSON en localStorage
 * @param {string} key - La clave para almacenar
 * @param {*} value - El valor a almacenar (será convertido a JSON)
 */
export function writeJSON(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error escribiendo ${key} en localStorage:`, error);
    }
}

/**
 * Elimina un item de localStorage
 * @param {string} key - La clave a eliminar
 */
export function remove(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error eliminando ${key} de localStorage:`, error);
    }
}

/**
 * Limpia todo el localStorage
 */
export function clearAll() {
    try {
        localStorage.clear();
    } catch (error) {
        console.error('Error limpiando localStorage:', error);
    }
}

/**
 * Verifica si existe una clave en localStorage
 * @param {string} key - La clave a verificar
 * @returns {boolean}
 */
export function exists(key) {
    return localStorage.getItem(key) !== null;
}