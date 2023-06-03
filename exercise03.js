// funcion que retorna un patron determinado, n veces, a aprtir del numero n dado.

function pattern (n){
    let ast = "*"
    let letter = "Q"
    let pattern = []

    let makePattern = () => {
       
        pattern.push (`*${ast.repeat(n)}*`);

    for (let i=0; i<n; i++){
        pattern.push (`*${letter.repeat(n)}*`)
        
    }
         pattern.push (`*${ast.repeat(n)}*`)

    return pattern 
    } 

    return n === 0 ? '*' :  makePattern();
}

// pruebas en consola. 
console.log (pattern(0))
console.log (pattern(1))
console.log (pattern(3))
console.log (pattern(8))