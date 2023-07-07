// REGULAR EXPRESIONS - REGEX

// Patrones de caracteres (formulas) para dar manejo a cadenas de caracteres o strings. la intencion de las regex es que los strings cumplan ciertas condiciones o patrones para poder retornarlos y dichas condiciones estaran determinados por el patron de caracteres o la formula que determinemos con la regular expression. Con las regex quitamos de un string lo que no nos sirve y dejamos lo que nos es util de acuerdo a la logica del problema. por ejemplo con las regex podemos limpiar la basura de un csv para dejarlo con la informacion extrictamente necesaria para operarcom

// el proposito principal de las regex es busqueda/filtrado.


// CLASES DE REGEX 

// CLASE . - (punto) denota cualquier caracter(numero, letra, espacio, símbolo, tab, caracter invisible) - cuando buscamos por ejemplo con el punto, pareciera que esta señalando toda la linea completa o todo el archivo completo, sin embargo, esta señalando caracter por caracter. 
    // se puede poner por ejemplo la sig. expresion '. =' la cual nos buscará cualquier caracter que seguidamente tenga un espacio y posteriormente un signo igual.
    // se puede poner por ejemplo la sig. expresion '. ' la cual nos buscará cualquier caracter que seguidamente tenga un espacio y posteriormente un signo '.
    // se pueden poner varios puntos segidos '..' por ejemeplo 2 puntos seguidos, indicando que busque un caracter que tenga dos caracteres seguidos, cuando una linea queda señalada completamente, es porque la cantidad de caracteres es multiplo de la cantidad de puntos, entonces por ejemplo en una linea de 10 digitos, quedarían5 parejas de digitos de a 2.

    // del punto nacen 3 tipos de clases principales predefinidas por la sintaxis de regex.
        // digito
        // palabra (cualquier caracter que pueda ir en una palabra)
        // espacio (espacio simple, tab)

    // \d - (CLASE digit) buscar un digito
        // se puede poner varias veces seguidas, por ejemplo '\d\d' para indicar que busque los numeros que tengan dos digitos consecutivos 
        // otra notacion para buscar digitos sería [0-9], nos permite hacer búsquedas mucho más potentes y personalizadas ya que le podemos indicar el rango de numeros que queremos buscar, por ejemplo [6-9]

    // \w - (CLASE word) (all word characters) buscar una palabra que contenga los siguientes caracteres:  'a-z' 'A-Z' '_' '0-9'
        // otra notacion para buscar palabras sería [a-z], nos permite hacer búsquedas mucho más potentes y personalizadas ya que le podemos indicar el rango de letras que queremos buscar, por ejemplo [a-m] buscaría las ltras minusculas entre la a y la m, tambien se puede buscar solo mayusculas [A-Z] o mayusculas y minusculas al mismo tiempo y tambien buscaría los guines bajos [a-zA-Z_] - finalmente podemos buscar tambien digitos y letras al mismo tiempo [a-zA-Z0-9_]
        // cuando estamos usando la notacion de corchetes, tambien podemos buscar el punto(caracter, no la clase, para ello debemos escaparlo con backslash asi  [a-zA-Z0-9_\.]

    // \s (CLASE white spaces) - busca todos los espacios en blanco. los saltos de linea '\n\r' '\n' tambien son espacios en blanco

// ESCAPADO - cuando queremos buscar un caracter que a su vez es un caracter reservado de las regex, debemos pasarlo con un backslash antes como por ejemplo le punto\. 
    // se puede escapar varios caracteres,se puede abrir corchete [\.\-], sin embargo, cada caracter debe tener su propio escapado. esta heramienta es muy potente, ya que despues se puede reemplazar todo lo que no este en grupos, pornada y dejar unicamente lo que estaba dentro de grupos con la notacion '$1,$2,...' y asi sucesivamente, dependiendo la cantidad de grupos que hayamos declarado. posteriormente esto se  puede llevar a SQL o JSON

    // CARACTERES QUE DEBEN SER ESCAPADOS:
        // \+
        // \[ \]
        // \-
        // \.
        // \\
        // \/
        // \(
        // \)
        // \?

// NEGACION - (^) se usa para expresar una busqueda, pero que retorne todo lo contrario a pasado por parámetro. por ejemplo, si expresamos'[^0-9]' el sistema retornará todo lo que sea diferente de los números del cero al 9 

// AGRUPACION - se usa para agurpar expresiones, para ello se utilizan los parentesis '()'
    // en los agrupadores se pueden usar cosas como el pipe, para indicar que busque una cosa u otra, por ejemplo (a|b) buscará a o b

// DELIMITADORES - son contadores, indican si algo existe o no existe
    // SI DEBEN APARECER, SE DEBE USAR +
    //# + (uno o mas) - indica que el caracter anterior se puede repetir entre 1 y más veces. 

    // SI PUEDEN APARECER SE USA * O ?
    // * (greedy) - indica que el caracter anterior se puede repetir entre 0 y más veces.
    // ? (cero o uno) - indica que el caracter anterior es opcional, se puede repetir entre cero y una vez
    // se pueden convinar +? para hacer el match lo más pequeño o concreto posible. por ejemplo: dado el sig string 'csv1,csv2,csv3,csv4,csv5' si usamos la expresion '.+?,' el programa buscará todo lo que termine con una ',' pero busca la coincidencia inmediatamente anterior, en ese caso cada match sería 'csv2,' antes de encontrar la coma anterior, si le quitamos el ?, el sistema traera de la coma hacia atrás todo hasta el inicio de la linea.

// CONTADORES - cuando necesitamos una cantidad X precisa de apariciones de un caracter.
    // {n1,n2} se usa expresion de llaves, donde n1 es el numero minimo de apariciones que queremos encontrar y n2 es el numero maximo de apariciones que queremos encontrar, si queremos que sea un numero especifico, ponemos n1 y n2 el mismo valor {1,1}. primero evalua los matches superiores y luego evalua los inferiores.

// REGEX DE LINEA COMPLETA - es una forma  en la cual al linea completa debe cumplir con la expresion regular o se descarta, no existen coincidencias parciales.  ^ ------------- $
    // (^) - denota el inicio de la linea
    // ($) - denota el final de la linea
    // por ejemplo. la siguien
    // te expresion '^[^\d].*$' solo hace match las lineas que no inicien con un digito.

// REGEX EN LOGS
    // LOS LOGS o registros en el sector IT hacen referencia a los archivos de texto en los que se incluyen de forma cronológica los acontecimientos como cambios, actualizaciones y demás que han ocurrido dentro de un sistema informático, como puede ser un servidor, una aplicación o un programa.
    // ^\[LOG.*\[ERROR\].*$
    // ^\[LOG.*\[WARN\].*$
    // con los anteriores ejemplos podemos ver como con regex de linea completa podemos explorar en logs inmensos, y pedirle que nos traiga solo lo que necesitamos, retornando lineas completas


// REGEX EN JAVASCRIPT // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions (OFICIAL DOCUMENTATION)

    // SINTAXYS - /pattern/modifiers; (se escribe la expresion entre '//' y los modificadores despues del '/' de cierre)

    // MODIFIERS - 
        // i (case-insensitiv)- este modificador omite el case sensitive, asi que hace una busqueda sin importar si el caracter está en mayuscula o minuscula.
        // g (global) - ejecuta las acciones en TODOS los matches(dependiendo el metodo), no unicamente el primer match 
        // m (multilinea)- este modificador hace matches en multilinea
        // d
        // s
        // u
        // v
        // y
        

    // METODOS REGEX EN JAVASRIPT 

    // SEARCH - busca un match y retorna la posicion de inicio del mismo. Example:

        //let text = "Visit W3Schools!";
        //let n = text.search("W3Schools") // usando solo string.
        // let n = text.search(/w3Schools/i) // usando regex con modificador case insensitive
        // Output => 6

    // REPLACE - busca un match, hace un reemplazo en la primera coincidencia (a menos que usemos el modificador g)con el parámetro que le pasemos y retrona el string con los cambios.

        //text = 'Please visit Microsoft'
        //text.replace("Microsoft","W3Schools"); // usando solo string.
        // let result = text.replace(/microsoft/i, "W3Schools"); // usando regex con modificador case insensitive
        //Output => Please visit W3Schools

    
    // REPLACEALL - busca un match, hace un reemplazo de todas las coincidencias  con el parámetro que le pasemos y retrona el string con los cambios. Example:
        // const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
        // const regex = /Dog/ig;
        // console.log(p.replaceAll(regex, 'ferret'));


    // MATCH - retorna un array con las coincidencias encontradas, si no se usa el modiffier g, retorna solo la primera coincidencia. example:
        //const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.'
        //const regex = /[A-Z]/;
        //const found = paragraph.match(regex)
        // Output => Array ["T"]
    
    // MATCHALL - retorna un array con las coincidencias encontradas, TIENE QUE  usar el modifier g. Example:
        //const regexp = /t(e)(st(\d?))/g;
        //const str = 'test1test2';   
        // console.log(...str.matchAll(regexp))
        // Output => Array [Array ["test1", "e", "st1", "1"], Array ["test2", "e", "st2", "2"]]

    // SPLIT - hace una division de un string y retorna un array con la division, la division se ejecuta donde encuentre el parametro que le pasemos.
        //const str = 'The quick brown Fox jumps over the lazy dog.';
        //const words = str.split(/[^a-z]/);
        //console.log(words);
        // Output => Array ["", "he", "quick", "brown", "", "ox", "jumps", "over", "the", "lazy", "dog", ""] 

    // USING TEST - busca el patron definido en el regezx y retorna un booleano. Example=

        // const pattern = /e/;
        // pattern.test("The best things in life are free!"); // el regex se puede almacenar o no en una variable, puede ser de esta forma o la de la siguietne linea.
        // /e/.test("The best things in life are free!");
        // Output => true

    // EXEC - busca el pattron y si encuentra match retorna un array indicando: el parametro buscado(patron), la posicion(index) de la primera coincidencia, el string en el cual buscó. sino encuentra una coincidencia retrona null
        //const obj = /e/.exec("The best things in life are free!")
        //console.log(typeof(obj));
        // Output =>  /* [ 'e', index: 2, input: 'The best things in life are free!', groups: undefined ]  */

 // PATTERNS
    // [arn] - retorna un match si uno de los caracteres especificados (a, r o n) esta presente en el string 
    // [^arn] - retorna un match de cualquier coincidencia en els tring de caracteres diferente a los especificados (a, r o n)
    // [a-n] - retorna un match para cualquier coincidencia de letra en minuscula entre la a y la n
    // [012] - retorna un match si uno de los digitos especificados (0,1 o 2) estan presentes en el string
    // [0-9] - retorna un match si un digito entre 0 y 9 esta presente en el string
    // [0-9][0-9] - retorna un match si encuentra una coincidencia entre numeros que contengan más de 2 digitos, la condicion del primer digito estará condicionada por el primer argumento de cada set, y el segundo digito estará condicionado por el argumento del segundo set. si se necesita buscar numero de 3 cifras, se buscaría [0-9][0-9][0-9] y así sucesivamente.
    // [+, *, ., |, (), $,{}] - retorna un match si enceuntra uno de los caracteres. como estos son caracteres reservados, si estan en un set, no asumiran su papel en el lenguaje, sino que se buscará coincidencias en el string con estos parmaetros. en algunos lenguajes dichos caracteres deben ser escapados
    // (A|B) - busca una de las alternativas separadas por pipe operator.

// METACARACTERES EN PYTHON
    // [] - indica un conjunto de caraacteres - Exmpl - [a-m] encuentra todas las coincidencias de letras entre la a y la m // [ar] encuentra todas las coincidencias a o r
    // \ - señala una secuencua especial - Exmpl - \d \w \s
    // . - indica cualquier caracter
    // ^ - comienza con..
    // $ - termina con..
    // * - cero o mas ocurrencias
    // + - una o más ocurrencias
    // ? - cero o una ocurrencia
    // {} - especifica el numero exacto de ocurrencias
    // | - indica si se busca x o y - Exmpl - (a|b) 
    // () - termino de agrupacion.

// SECUANCIAS ESPECIALES EN JS
    // \A retorna un match si el caracter/es especificado esta al INICIO del STRING/CADENA (se debe usar con metodo, por ejemplo con findall) Exmp - re.findall("\AThe", txt)

    // \Z retorna un match si el caracter/es especificado esta al FINAL del STRING/CADENA (se debe usar con metodo, por ejemplo con findall) Exmp - re.findall("Spain\Z", txt)

    // \b retorna un match si el caracter/es especificado  esta al inicio o al final de una PALABRA (se debe usar con metodo, por ejemplo con findall) Exmp - 
        // Para validar si se encuentra al inicio de una palabra, se  usa => re.findall(r"\bain", txt) 
        // Para validar si se encuentra al final de una palabra, se  usa => re.findall(r"ain\b", txt) 

    // \B retorna un match si el caracter/es especificado NO ESTA al inicio o al final de una PALABRA (se debe usar con metodo, por ejemplo con findall) Exmp - 
        // Para validar si NO se encuentra al inicio de una palabra, se  usa => re.findall(r"\Bain", txt) 
        // Para validar si NO se encuentra al final de una palabra, se  usa => re.findall(r"ain\B", txt) 

    //SECUENCUAS ESPECIALES TRANSVERSALES (ALL LANGUAGES)
    // \d - retorna match si el caracter especificado contine un digito entre [0-9]
    // \D - retorna match si el caracter especificado NO contine un digito entre [0-9]
    // \s - retorna match si el caracter especificado contine un espacio en blanco (otros caracteres de espacios en blanco es \r \n \t \f)
    // \S - retorna match si el caracter especificado NO contine un espacio en blanco
    // \w - retorna match si el caracter especificado contine un caracter de palabras ([a-z][A-Z][0-9]_)
    // \W - retorna match si el caracter especificado NO contine un caracter de palabras ([a-z][A-Z][0-9]_)







