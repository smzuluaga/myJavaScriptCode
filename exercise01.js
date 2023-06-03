// Funcion que suma todos los multiplos de 5 y 7 en rango dado

sumaMultiplos = (a,b) =>{

    let suma = 0;
    for (let i=a; i<=b; i++){
        if (i%5 == 0 || i%7 ==0){
           suma += i;
        }
    }
    return suma;
}

// pruebas en consola
console.log (sumaMultiplos(6,9));
console.log (sumaMultiplos(1,20));