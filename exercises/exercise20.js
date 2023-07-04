// Diseñe e implemente una función en javascript que reciba un arreglo de números enteros y retorne el producto de todos los elementos que sean mayores a 10.

function productoMayoresADiez (arrNum) {
    arrFilt = arrNum.filter ((x)=>{
       return x > 10;})

    let product = 1;
    
    for (let i = 0; i< arrFilt.length; i++){
        product *= arrFilt[i];
    }
    
    return product;
}


// Pruebas en consola.
let numeros1 = [8, 2, 20, 1, -2, 15, 0];
let numeros2 = [10, 3, 12, -1, -2, 9, 0];

console.log (productoMayoresADiez(numeros1));
console.log (productoMayoresADiez(numeros2));