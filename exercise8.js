// Diseña una función en JavaScript que reciba como parámetro un número entero positivo y retorne el primer número de la secuencia de Fibonacci que es estrictamente mayor que él.Recuerda que la sucesión de fibonacci es la secuencia de números donde cada término es la suma de los dos anteriores y empieza con los números 0 y 1. La secuencia es 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

function mayorFibonacci (n) {
    let num1 = 0
    let num2 = 1
    let valor =0
    
    do {

    valor = num1 + num2;
    num1 =  num2;
    num2= valor;
    }
    while (valor<=n)
    
    return valor
}
    
//Pruebas en consola.
console.log (mayorFibonacci(7))
console.log (mayorFibonacci(10))