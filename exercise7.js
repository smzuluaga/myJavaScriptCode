// Diseña una función en JavaScript que reciba como parámetro un entero positivo n y retorne la suma de los primeros n números pares

function sumaPares(n) {
    let suma = 0;

    for (let i=1; i<=n; i++){
        suma += (2*i);
    }
    return suma;
}


// pruebas en consola.
console.log (sumaPares(5))
console.log (sumaPares(10))

