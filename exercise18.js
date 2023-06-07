// Diseñe e implemente una función en javascript que reciba un número entero positivo N y retorne un arreglo con los N primeros números que son potencias de 2 (2^x).

let potenciasDeDos = function (num){
    arrPow =[];

    for (let i=0; i<num; i++){
        arrPow.push(Math.pow(2,i))
    }
    return arrPow
}

//Pruebas en consola.
console.log (potenciasDeDos(5))
console.log (potenciasDeDos(3))
