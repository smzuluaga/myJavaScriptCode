// Diseña una función en JavaScript que reciba como parámetro un número entero positivo y retorne un arreglo con los dígitos del número en orden inverso.

let numeroInverso = function (n){
    let array = String(n).split("");
    let reverseNum = array.reverse();
       return reverseNum
}

//Pruebas en consola

let numero = 123456
let otroNumero = 987654321
let numeroNegativo= -665544332211

console.log (numeroInverso(numero))
console.log (numeroInverso(otroNumero))
console.log (numeroInverso(numeroNegativo))