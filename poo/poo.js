// Casi todo en js es un objeto, los objetos literales, las instancias de prototipos, los tipos de datos como: arreglos. Prototipo Object es el prototipo madre de todos los prototipos

// las instancias de los protipos son objetos, podemos crear objetos con {}, con Object.create() y con prototipos.

// los objetos en js estan basados en prototipos, no en clases como la mayoría de lenguajes como python.

// PARADIGMA = formas, caminos, indicaciones, lineamientos para resolver un problema.

/* POO - es uno de los paradigmas más populares de la programacion.
    1. ORDEN - es uno de los problemas que este paradigma se propuso a mejorar mejorar
    2. REUTILIZAR CÓDIGO - DRY

*/

/* OBJETOS LITERALES = objetos {clave:valor} que declaramos e inicializamos nosotros con un conjunto x de datos a partir de una necesidad. somos nosotros quienes escribimos el contenido de dicho objeto ( OBJETO LITERAL !== OBJETOS DE POO (instancias de clases/prototipos)) los objetos literales son diferentes a las instancias de un prototipo

*/
// PROTOTIPOS - son plantillas, que proporcionan mecanismos de herencia. los objetos tienen una propiedad prototype donde se almacenan las propiedades y metodos  que hereda del prototipo que esta instanciando.

    // CADENA DE PROTOTIPOS - cuando la propiedad prototipo de un objeto, a su vez tiene una propiedad prototipo, explica por qué objetos diferentes pueden tener disponibles poropiedades y métodos definidos en otros objetos. los métodos y propiedades son definidos en la propiedad prototype, que reside en la función constructora del objeto, no en la instancia misma del objeto.

    // para acceder a la propiedad Prototype de un objeto sepuede hacer usando las sigueintes expresiones, donde obj sería la variable que contiene la instancia de un prototipo:
        // 1. obj.__proto__
        // 2. Object.getPrototypeOf(obj)

    // PROPIEDAD PROTOTIPO - El valor de la propiedad del prototipo es un objeto, que es básicamente un repositorio(bucket) para almacenar propiedades y métodos que queremos que sean heredados por los objetos más abajo en la cadena del prototipo. 
    //La propiedad prototype es una de las partes más confusamente nombradas de JavaScript - podría pensarse que this apunta al objeto prototipo del objeto actual, pero no lo hace (es un objeto interno al que puede accederse mediante __proto__, ¿recuerda?). en su lugar, prototype es una propiedad que contiene un objeto en el que se definen los miembros que se desea que se hereden.

    // DECLARAR PROTOTIPOS EN JS
    /*
        function Student(name, age, cursosAprobados) {
          this.name = name;
          this.age = age;
          this.cursosAprobados = cursosAprobados;

        // esta es una forma de declarar métodos en en prototipo.
          this.aprobarCurso = function (nuevoCurso) {
              this.cursosAprobados.push(nuevoCurso);
        };
        }

        // esta es otra forma de definir funciones a un prototipo, realizandolo fuera de la declaracion del prototipo y usando la palabra reservada prototype.
        Student.prototype.aprobarCurso2 = function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
        };
    */

    // INSTANCIAR UN OBJETO DE UN PROTOTIPO
    //      const ivan = new Student("Ivan", 30, ["CSS", "C++"]);

// CLASES - bloques de codigo que definen métodos y atributos básicos por defecto para crear objetos. Son una forma de trabajar prototipos a parte de las funciones vistas previamente, es preferida por muchos porque tiene una sintaxy más amigable y similar al manejo de clases de otros lenguajes, sin embargo, es lo mismo, trabajar con prorotipos.

// DECLARAR PROTOTIPOS CON SINTAXYS CLASS
/*
    class Student2 {
      constructor(name, age, cursosAprobados = []) {
          this.name = name;
          this.age = age;
          this.cursosAprobados = cursosAprobados;

          // FORMA 1 PARA DEFINIR METODOS - en constructor
          this.aprobarCurso = (nuevoCurso) => {
            this.cursosAprobados.push(nuevoCurso);
          };
      }
      // FORMA 2 PARA DEFINIR METODOS - dentro de la clase, pero fuera del constructor
      aprobarCurso2(nuevoCurso) {
          this.cursosAprobados.push(nuevoCurso);
      }
    }

    // FORMA 3 PARA DEFINIR METODOS - fuera de la clase, utilizando la palabra reservada 'prototype'.
    Student2.prototype.aprobarCurso3 = function (nuevoCurso) {
     this.cursosAprobados.push(nuevoCurso);
    };

    jorge = new Student2("Jorge", 30, ["RUBI", "PEARL"]);
*/

// ROR (Receive an Object- Return an Object) - es una forma de declarar el constructor, de forma que en vez de pasar x numero de parámetros para intanciar un prototipo, se pasa un solo parámetro que sería un objeto literal que contiene todos los argumentos que requiere la clase para ser instanciada. para esto, los parámetros del constructor se pasan dentro de {} y cuando se está instanciando la clase  se pasan los argumentos en forma de objeto literal.
/*
    class Student2 {
    constructor({name, age, cursosAprobados = []}) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    }

    jorge = new Student2({ age: 30, cursosAprobados: ["CSS"], name: "Jorge" });

    console.log(jorge);
*/

// OBJETOS LITERALES VS. BOJETOS DE INSTANCIA
/*
        * Los objetos literales de js son faciles de inicializar, sin embargo, para trabajar con un gran volumen de objetos, no es escalable, pues al momento de hacer algun cambio en la estructura o los datos, se tendria que hacer manual objeto por objeto.

*/

// PILARES DE LA OOP EN JS

// ABSTRACCION - a partir de un objeto, se abstrae o analiza sus propiedades y acciones para crear un molde (prototipo) para posteriormente crear instancias de ese prorotipo

// ENCAPSULAMIENTO - permite limitar el acceso de ciertos atributos y propiedades en los prototipos y objetos. Cuando hablamos de encapsulamiento, hablamos de esconder métodos y atributos de forma que estos queden privados y solo lo que esté por dentro de la clase puede manipular  dichos elementos privados de dicha clase, y esto permite restringir la alteracion de métodos y atributos. PARA ENCAPSULAR UN ATRIBUTO EN JS SE USA '_' DELANTE DE LA VARIABLE.
    /*
        class Student {
            constructor({ name, age,}) {
                this._name = name; // ENCAPSULAMIENTO
                this.age = age;
            }
        }
        */
    // NOTA: en Js no podemos esconder métodos y atributos, en los prototipos de JS, no existen los métodos y atributos privados, solamente publicos, sin embargo, la parte de restringir la alteracion de atributos y metodos si existe.

    // para hacer encapsulamiento en JS se podemos usar diferentes formas:
    //  *getters y setters
    //  *namespaces
    //  *Object.defineProperties
    //  *modulos de ES6

    // ENCAPSULAMIENTO DE ATRIBUTOS CON GETTERS AND SETTERS
    // Cuando encapsulamos un atributo como privado con el underscore, para poder leerlo, debemos crear un getter.
    /*
        class Student {
            constructor({ name, age }) {
                this._name = name; // ENCAPSULAMIENTO
                this.age = age;
            }
            // DECLARACION DEL GETTER - se crea una funcion con la palabra reservada get y el nombre usualemte debe ser el mismo nombre del atributo encapsulado, que retorne el valor del atributo encapsulado.
            get name() {
                return this._name;
            }
            // DECLARACION DEL SETTER - se crea una funcion con la palabra reservada set y el nombre usualemte debe ser el mismo nombre del atributo encapsulado, que asigne un nuevo valor al atributo encapsulado.
            set name (newName) {
                this._name = newName
            }
        }

        s = new Student({age: 32, name:'Pedro'})
        s.name = 'Alberto' // usando setter
        console.log(s.name) // usando getter
        */

    // ENCAPSULAMIENTO DE MÓDULOS - para trabajar con módulos de js se debe asignar al archivo una extension '.mjs'.
    // una vez tenemos el archivo con extension .mjs, le debemos asignar la plabra reservada 'export' a las clases o funciones que queremos exportar. luego desde el archivo donde queremos usar dicha clase o funcion usamos la palabra reservada 'import'. example:
/* 
    // en el modulo en el que definimos la clase, le ponemos la palabra 'export' a la clase PlatziClass que queremos exportar
    export class PlatziClass {
        constructor({
          name,
          videoID,
        }) {
          this.name = name;
          this.videoID = videoID;
        }
      
        reproducir() {
          videoPlay(this.videoID); // estas funciones estan en el mismo archivo que la clase que exportamos, sin embargo, no exportamos las funciones, pero las llamamos desde la clase exportada, esta es la forma en que generamos encapsulamiento.
        }
        pausar() {
          videoStop(this.videoID);
        }
      }

    // otra forma de exportar es al final del archivo usar la siguiente expresion y ponemos dentro de las llaves todos las clases que vamos a exportar:
      export {Platziclass, Student} 
    
    //luego en el modulo donde vamos a utilizar la clase exportada del modulo anterior isamos import
        import {PlatziClass} from './archivo.mjs'

*/
// HERENCIA - extender las propiedades y métodos de un prototipo a otro. para usar herencia en js, se usa la siguiente expresion para crear la clase B que hereda de una clase A. 

/*    HERENCIA CON SINTAXIS CLASS - SIN ROR
      class Student {
        constructor(name,age){
            this.name = name
            this.age = age
        }
      }      
      class FreeStudent extends Student {
        constructor(name,age){
            super(name, age)
        }
      } 
*/
    // si en el constructor se uso la sintaxys ROR, al extender la superclase a una subclase, el constructor inicializaría un solo parámnetro, el objeto que contiene todos los parámetros
//    HERENCIA CON SINTAXYS CLAS - CON ROR
/*
      class Student {
        constructor({name,age}){
            this.name = name
            this.age = age
        }
      }      
      class FreeStudent extends Student {
        constructor(props){
            super(props)
        }
      } 
        h = new FreeStudent({name: 'gilberto', age: 36})
        // console.log(h);
*/
    // si no se va a agregar nuevas propiedades a la nueva subclase, no es necesario inicializar el constructor de la superclase, en la subclase.
    
/*      HERENCIA CUANDO NO SE VA A AGREGAR NUEVAS PROPIEDADES
        class FreeStudent extends Student {
        } 

        h = new FreeStudent({name: 'gilberto', age: 36})
        console.log(h);
*/
    // HERENCIA DE PROTOTIPOS - para este caso, la sublase que va a heredar de la superclase, debe llamar a  los parámetros de inicialización del constructor de la superclase, para esto hacemos uso de la función call(this,args), posteriormente debe hacer una copia de la propiedad prototipo de ls superclase, en la propiedad prototipo de la subclase
/*
    function Student ({name,age}){
        this.name = name
        this.age = age

        function h (f) {
            return f
        }
    }
        function FreeStudent(props) {
            Student.call(this,props)
        }

        FreeStudent.prototype = Object.create(Student.prototype)

        console.log(Student.__proto__);

    f = new FreeStudent ({name:'pedro', age:30})
    console.log(f.__proto__);
*/

// POLIMORFISMO -
    // Sobrecarga
    // Paramétrico
    // Inclusión - permite sobrescribir el método que estamos heredando de la superclase



/* 

console.log(typeof persona);

var persona = {
  nombre: ["Bob", "Smith"],
  edad: 32,
  genero: "masculino",
  intereses: ["música", "esquí"],
  bio: function () {
    alert(
      this.nombre[0] +
        "" +
        this.nombre[1] +
        " tiene " +
        this.edad +
        " años. Le gusta " +
        this.intereses[0] +
        " y " +
        this.intereses[1] +
        "."
    );
  },
  saludo: function () {
    alert("Hola, Soy " + this.nombre[0] + ". ");
  },
  setName() {
    persona.nombre = prompt("Escriba un nuevo nombre");
  },
};




function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      // First define a string, and make it equal to the part of
      // the bio that we know will always be the same.
      var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
      // define a variable that will contain the pronoun part of
      // the second sentence
      var pronoun;
    }
}

let jose = new Person('Bob', 'Smith', 32, 'hombre', ['music', 'skiing'])

console.log(typeof('j')) */