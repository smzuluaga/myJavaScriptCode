// Repita el ejercicio anterior pero recibiendo la letra a detectar como argumento.

function detectArgument (str, lett) {
    let array = str.split(" ");
    let contador = 0

    for (let i=0; i<array.length; i++){
        for (let j=0; j<array[i].length; j++){
            if (array[i][j] == lett)
            contador++
        }
    }
    return contador;
}

// Pruenas en consola
console.log (detectArgument("perro", "r"))
console.log (detectArgument("te voy a contar una historia que paso", "a"))
