// Funcion que recibe un a array de numeros escrito en letras (Ejm: let numeros = "uno dos uno") y esta retorna la suma de dichos numeros.

let numeros = "la idea es que el algoritmo sume uno mas dos"
let numeros1 = "uno uno uno uno uno"
let numeros2 = "nueve cuatro seis dos"

let sumaNumeros = function (string){
    let suma = 0;
    let stringArray = string.split(" ");
    let conversionArray = stringArray.map((i) => {
        switch (i) {
            case "uno":
                return 1;
            break;

            case "dos":
                return 2;
            break;

            case "tres":
                return 3;
            break;

            case "cuatro":
                return 4;
            break;

            case "cinco":
                return 5;
            break;

            case "seis":
                return 6;
            break;

            case "siete":
                return 7;
            break;

            case "ocho":
                return 8;
            break;

            case "nueve":
                return 9;
            break;

            case "cero":
                return 0;
            break;

            default:
                return 0;
        }
    })

    for (let i=0; i<conversionArray.length; i++){
        suma += conversionArray[i];
    }
    return suma;
}

// Pruebas en consola
console.log (sumaNumeros(numeros))
console.log (sumaNumeros(numeros1))
console.log (sumaNumeros(numeros2))



