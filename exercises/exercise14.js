//Diseña una función en JavaScript que reciba como parámetro un entero positivo n y retorne un arreglo con los n primeros números impares.


function primerosNImpares (num){
    let oddNumbers = [];

    for (let i = 1; i<=num*2;i++){
        if (i%2 !== 0){
            oddNumbers.push(i);
        }
    }
    return oddNumbers;
}

//pruebas en consola
console.log(primerosNImpares(1))
console.log(primerosNImpares(2))
console.log(primerosNImpares(3))
console.log(primerosNImpares(4))
console.log(primerosNImpares(5))