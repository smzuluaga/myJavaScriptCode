// Diseñe e implemente una función en javascript que reciba un arreglo de números enteros y retorne el arreglo sin los elementos que sean múltiplos de 3, manteniendo el orden original de los demás elementos.

//Forma 1
function eliminarMultiplosDeTres (arrNum) {
    return arrNum.filter ((num)=>{
       return num % 3 != 0 || num ==0;
    })
}
 // Forma 2
function eliminarMultiplosDeTres2 (arrNum) {
    let newArray = [];

    for (let i=0; i<arrNum.length; i++){
        if (arrNum[i] %3 !== 0 || arrNum[i] == 0){
            newArray.push(arrNum[i])}
    }
        
    return newArray
}
let Numbers1 = [8, 2, 3, 1, -2, 9, 0];
let Numbers2 = [10, 3, 4, -1, -2, 9, 0];

console.log (eliminarMultiplosDeTres(Numbers1));
console.log (eliminarMultiplosDeTres2(Numbers2));