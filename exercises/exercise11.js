// Repita el ejercicio anterior pero asumiendo que el número puede ser negativo

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