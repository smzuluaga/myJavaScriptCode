// Diseña un script en javascript que imprima los primeros 10 formas siguiendo el siguiente patrón (Se muestran sólo las primeras 3):

let pattern = (n) =>{
    let oddNumbers = [];
    let symbol = "*";
    let space =" ";
    let goal = n*2-1
    let array =[];
    
    for (let i= 0; i<n; i++){
            oddNumbers.push(i*2+1)
    }   
    
    for ( let i=oddNumbers.length-2; i>=0; i--){
        oddNumbers.push(oddNumbers[i])
    }          
    
    if (n==1){
        return "*";
    } else {
        
        for (let i=0; i<=goal; i++){
            array.push(`${space.repeat((goal-oddNumbers[i])/2)}${symbol.repeat(oddNumbers[i])}\n`)
        }
   
        return array.join("");
    }

}

// Pruebas en consola
console.log(pattern(1))
console.log(pattern(2))
console.log(pattern(3))
console.log(pattern(4))
console.log(pattern(5))
console.log(pattern(6))
console.log(pattern(7))
console.log(pattern(8))
console.log(pattern(9))
console.log(pattern(10))
