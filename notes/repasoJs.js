// OBJETOS JS - son la instancia de uin prorotipo, existen objetos literales y bojetos instanciados(en un contexto de POO)

// OBJETOS LITERALES - en js los objetos literales pueden contener funciones y estas se pueden declarar de dos formas:
/*
        const natalia = {
            name: "Natalia",
            age: 18,
            cursosAprobados: ["GRID", "CSS"],
            // Forma 1 
            aprobarCurso(nuevoCurso) {
                this.cursosAprobados.push(nuevoCurso);
            },
            //Forma 2
            aprobarCurso2: function (nuevoCurso) {
                natalia.cursosAprobados.push(nuevoCurso);
            },
        };
        
        natalia.aprobarCurso("HTML");
        natalia.aprobarCurso2("PYTHON");
        console.log(natalia);
*/

    // ACCEDER A LOS DATOS DE UN OBJETO: siempre que queremos acceder a lso valores de un elemento del objeto, debemos primeramente llamar el nombre del objeto que actua como 'namespace', con este llamado, ya podemos acceder a los elementos encapsulados dentro de dicho objeto, bien sean propiedades o métodos.

        /* DOT NOTATION (NOTACION DE PUNTO) -

            print(natalia.name) //ACCEDER A PROPIEDADES
            // Output => 'Natalia

            natalia.aprobarcurso2('HTML') //LLAMAR MÉTODOS
            print(natalia.cursosAprobados)
            // Output => '["GRID", "CSS", "HTML"]

        */

        //BACKET NOTATION (NOTACION DE CORCHETE) - 
/*
            console.log(natalia['name']) //ACCEDER A PROPIEDADES
            // Output => 'Natalia

            natalia['aprobarCurso2']('JS') //LLAMAR MÉTODOS
            console.log(natalia.cursosAprobados)
            // Output => '["GRID", "CSS", "HTML", "JS"]
*/
        // CLAVE : VALOR DINÁMICOS - se pueden establecer elementos del objeto con clave y valor dinámicos que pueden cambiar de acuerdo al valor deuna variable externa
/*
            let nombrePersonalizado = 'altura'
            let valorPersonalizado = '1.75'

            natalia[nombrePersonalizado] = valorPersonalizado

            natalia.aprobarCurso2('RUBI')
            natalia.aprobarCurso('C++')
            console.log('_______________________________');
            console.log (natalia.id)
*/

// FUNCION CONSOLE GROUP PARA AGRUPAR ELEMENTOS POR BLOQUES DE CODIGO, COMO SECCIONES
/*
        console.group('Cuadrado') //se debe establecer un inicio 
            console.log('hola cuadrado')
        console.groupEnd() //se debe establecer un final y todo lo que este entre el inicoi y final quedará como encapsulado en un bloque.

        console.group('Triangulo') 
            console.log('hola Triangulo')
        console.groupEnd()
*/

// MATEMÁTICAS Y ESTADISTICA EN JS
        // FUNCION TOFIXED (object.toFixed(#decimales))- permite determinar la cantidad de decimales de un numero que tenga decimal
            // console.log(Math.PI.toFixed(2));
            // Output => 3.2

// Prototipo Math - consultar distintos métodos en la documentacion



// METODOS DE LOS ARRAYS

// REDUCE - reduce un array a una solo valor. recibe dos parámetos, valor acumulado y valor nuvor, este nuevo valor hará referencia a cada elkemento del array que esta iterando  para hacer la operacion que le pasemos como parámetro en la funcion callback.
/*
    array = [1,2,3,4,5,6]

    function sumar (ValorAcumulado,nuevoValor){
        return ValorAcumulado + nuevoValor
    }

    sumaLista = array.reduce(sumar)

    console.log(sumaLista);
*/

//SORT - ordena una lita desordenada, recibe funcion callback
/*
    let array = [5,9,4,1,3,9]

    let arrayOrdenado = array.sort((a,b)=>a-b)

    console.log(arrayOrdenado);

        // ORDENAR UN ARRAY BIDIMENSIONAL
        let array1= [ [ '1', 1 ], [ '2', 3 ], [ '5', 6 ] ]
        console.log(array1.sort((a,b)=> b[1]-a[1]))
*/

// SLICE - extrae una parte de un array, no muta el array original
// SPLICE  - muta el array original eliminando elementos


// FUNCIONES
    // FUNCIONES DECLARATIVAS
    // FUNCIONES DE EXPRESION
        // ARROW FUNCTIONS - son funciones de expresion con una sintaxis particular, que para retornar algo no necesitan la palabra return
/*
        const ejemplo = (a,b) => a+b // esta es la sintaxis, no necesita las llaves para definir el bloque de codigo a ejecutar y tampoco necesita la palabra return para retornar
        console.log(ejemplo(5,6))
*/

// METODOS PARA OBJETOS (DICCIONARISO DE PY)

    // Object.keys(variable)
    // Object.values(variable)
    // Object.items(variable)
    // Object.entries(variable) - convierte un objeto en un array de arrays, donde cada par clave valor es otro array.
/*    
objeto = {1:1, 2:3, 5:6}
Object.entries(objeto)
    // Output => [ [ '1', 1 ], [ '2', 3 ], [ '5', 6 ] ]
*/

f = new Student ('pedro', 30)
console.log(f)