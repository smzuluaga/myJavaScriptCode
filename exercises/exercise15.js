// Diseña una función en JavaScript que reciba como parámetro una cadena de texto y retorne la cantidad de vocales que contiene.

// FORMA 1: NO tiene restriccion con las vocales tildadas.
let contarVocales = function (string){
    let counter = 0;
    let possibilities = ['a','e','i','o','u','á','é','í','ó','ú','ü'];
    let stringLower = string.toLowerCase();

    for (let i=0; i<string.length; i++){
       if (possibilities.includes(stringLower[i])){
        counter++
       }
    }
    return counter;
}

// FORMA2: tiene restriccion con las vocales tildadas.

let contarVocales2 = function (string){
    let contador = 0;
    let stringLower = string.toLowerCase();

    for (let i=0; i<string.length; i++){
        if (stringLower[i] === "a"||stringLower[i] === "e" || stringLower[i] === "i" || stringLower[i] === "o"||stringLower[i] === "u"){
            contador++
        }
    }
    return contador;
}



//Pruebas en consola.


console.log(contarVocales("Inteligencia Artificial"))
console.log(contarVocales2("Inteligencia Artificial"))
console.log(contarVocales("Lenguaje de programación"))
console.log(contarVocales2("Lenguaje de programación"))