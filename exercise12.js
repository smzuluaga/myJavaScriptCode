//Diseña una función en JavaScript que reciba como parámetro una cadena de texto y retorne cuántas veces aparece la letra 'a' o 'A' en la cadena.

//Forma 1
let filterA = function (str){
    return (str.replace(/[^a,A]+/g, "")).length;
}  

//Forma 2
let filterA1 = function (str){
    return (str.replace(/[^a]+/g, "")).length + (str.replace(/[^A]+/g, "")).length;
}  




// Pruebas en consola
let example1 = "Camila Arboleda"
let example2 = "anaranjado"
let example3 = "Algoritmos y programación"

console.log(filterA (example1));
console.log(filterA (example2));
console.log(filterA (example3));
console.log(filterA1 (example1));
console.log(filterA1 (example2));
console.log(filterA1 (example3));