// Funcion para contar, cuántos dígitos tiene una cadena de texto

conteoDigitos = function (str){
    return str.replace(/[^0-9]+/g, "").length
}

let letrasynumeros = "Hol4 c0m0 3st4s";
let soloLetras = "Hola Como estas";

// pruebas en consola
console.log (conteoDigitos (letrasynumeros))
console.log (conteoDigitos (soloLetras))


