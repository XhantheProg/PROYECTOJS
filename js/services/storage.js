export function readJSON(key, fallback = null) { //lee un objeto JSON desde localStorage
    //key es la clave donde se almacena el objeto
    //fallback es el valor que se devuelve si no existe la clave
    const raw=localStorage.getItem(key); //obtener el valor almacenado en localStorage
    return raw ? JSON.parse(raw) : fallback; //si existe el valor, parsearlo como JSON, si no, devolver el valor por defecto

}

export function writeJSON(key, value) { //escribe un objeto JSON en localStorage
    localStorage.setItem(key, JSON.stringify(value)); //convertir el objeto a JSON y almacenarlo en localStorage

}
export function remove(key) { //elimina un objeto JSON en localStorage
    localStorage.removeItem(key); //eliminar el valor almacenado en localStorage
}