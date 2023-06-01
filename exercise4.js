// Funcion que devuelve un nuevo arreglo con los numeros dados en un array que tienen una raiz cuadrada exacta(cuadrado perfecto), ordenados de menor a mayor.

function cuadradosPerfectos (array) {
    let newArray = [];
    
    for (let i=0; i<array.length; i++){

        if (Math.sqrt(array[i])%1 == 0){
            newArray.push(array[i]);
        }
    }
    newArray.sort((a,b)=> {return a-b;})
    return newArray
}


let arrayx = [4,5,100,81,7,11]
let arrayz = [1000000,1,121,12]

// pruebas en consola
console.log(cuadradosPerfectos(arrayx))
console.log(cuadradosPerfectos(arrayz))