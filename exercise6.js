// Diseña una función en javascript que recibe una cadena de texto y retorna como resultado cuántos tokens hay conformados por sólo dígitos. Un token es una secuencia de caracteres sin espacios.

let numeritos = " Hola 234 como estan ustedes 4 xd 05 00000 000000"

function prueba (string){
    let token=  0
    let array= string.trim().split(" ");
    
    for (let i=0; i<array.length; i++){
        if (array[i]>=0){
            token++
        }
    }
    return token
}

//pruebas en consola
console.log (prueba(numeritos));


