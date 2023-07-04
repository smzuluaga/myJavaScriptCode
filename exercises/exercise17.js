// Diseñe e implemente una función en javascript que reciba un arreglo de números enteros todos positivos y retorna un nuevo arreglo pero sólo con los números que son múltiplos de 10. Además, el arreglo debe estar ordenado de menor a mayor.

let extraerMultiplosDeDiez = (arrNum) => {
    return arrNum.sort((a,b)=>a-b).filter ((num)=>{
        return num % 10 === 0
    })

}

let numbers1 = [20,5,100,81,7,11];
let numbers2 = [100000,1,120,12];
let numbers3 = [500,51,200,65];

// Pruebas en consola
console.log (extraerMultiplosDeDiez(numbers1));
console.log (extraerMultiplosDeDiez(numbers2));
console.log (extraerMultiplosDeDiez(numbers3));