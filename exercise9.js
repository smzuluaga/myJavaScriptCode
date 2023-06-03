// Diseña una función en JavaScript que reciba como parámetro una cadena de texto y retorne el número de palabras que tienen al menos un dígito.


let wordsWithDigits = (str) => {
    let array = str.split(" ");
    let contador = 0;

    for (let i=0; i<array.length; i++){
        if (Number(array[i].replace(/[^0-9]+/g, "")) || array[i].replace(/[^0-9]+/g, "") == "0"){
            contador++
        }
    } 
    return contador
    
}

//Pruebas en consola.
console.log(wordsWithDigits("Una cadena sin dígitos"))
console.log(wordsWithDigits("T3ng0 3 palabras c0n dígit0s"))

