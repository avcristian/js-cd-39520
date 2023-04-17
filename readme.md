# JavaScript

anotacion de la cusrsada en coder house

## Diferencia entre aplicaciones web y estaticas

- aplicaciones web, son web app por las funcionalidades que la misma nos brinda, son plataformas que ofrecen un alto nivel de interatividad y un variado numero de funcionalidades, yo no hablamos de sitios, sino de aplicaciones web que permiten realizar tareas importante a sus usuarios.

### Que es js?

Es un lenguaje de programacion que se usa utiliza prinicpalmente par aportar dinamismo a sitios web y aplicaciones web.
funciona en complementos en css y html

Lenguaje interpretado, a diferencias de un lenguaje de programacion compilado, js es un lenguaje interpretaod, lo que significa que se ejecuta por medio de un programa interprete. En nuestro caso, los navegadores son los programas que se encargan de interpretar y ejecutrar el codigo js que creemos. Cuando accedemos a alguna pagina a traves del navegador, este se encarga de leer y ejecutar todos los archivos que conforme la aplicaciones(html, css, js).

- Diferencias entre backend y frontend
javaescript nos sirve para ambos ambitos del desarrollo tanto en backend como frontend.
    - frontend: son la primera linea en contra el usuario, es la parte visual donde interactua.
    - backend: el backend es el que maneja toda la informacion que se pide desde el frontend.

## Algoritmos

En programacion, un algoritmo es un conjunto de procedimientos o funciones ordenados que se necesistan para realizar cierta operacion o accion. Por ejemplo, en una suma el algoritmo implica tomar un dato, sumarlo a otro, y obtener un resultado.
Pensear en algoritmos es una practica que debemos fortalecer como desarrolladores. consiste en encarar n problema complejo y dividir su resolucion en diversos pasos, pensar como resolver cada uno y luego secuenciarlos correctamente para llegar al resultado esperado. Dividir todo el problema en pequenoas fracciones y resolverlosde a poco.

Crear un repo para esta cosa o bien actualizar el que ya estaba.

## Aplicaciones web interactiva

- crearas una pagina web interactiva de la tematica que elijas en javascript que permitira simular distintos proceso. Utilizaras para obtener datos y diversas herramientas de SJ como librerias, promises, async y frameworks, para controlar eventos de la interfaz y producir animaciones en respuestas.

## Variables

Es una espacio reservado en la memoria que, como su nombre indica, puede cambiar de contenido a lo largo de la ejecucion de un programa. En las variables almacenamos diversos tipos de datos.

- var : Antiguamente se declaraban asi, hoy dia ya no se usa.
- let : La nueva forma de declarar las variables.
- const : Un espacio de momeria como el de una variable pero la diferencia es que NO podemos alterar su contenido, la voy a tener que declarar e inicializar con un valor y se mantendra siempre igual, recordar de poner todo en mayusculas.

~~~js
// declaracion de variables ES5
var nombre = "Juan" // El var ya no se usa, pero asi se hacia anteriormente

// declaracion de variables ES6
let apellido = "Doe" // De esta forma es mucho mejor
const CURSO = "javascript" //esto es una constante
~~~

### Tipos de datos que se pueden almacenar

Esto lo vamos a ir llenando a partir de las cosas que vamos viendo, de momento solo son esto dos tipos

Podemos asociar distintos valores en una variable en JS.

- number: un valor numerico puede ser un entero o decimal.
    - int
    - float
- string: una cadena de datos.

~~~js
// tipo de operaciones con los tipos de datos
// suma resta multiplicacion division resto
let resultado;
let numero1;
let numero2;

numero1 = 3;
numero2 = 9;

//Suma 
resultado = numero1 + numero2;

//Resta
resultado = numero1 - numero2;

//multiplicacion
resultado = numero1 * numero2;

//division
resultado = numero1 / numero2;

//resto
resultado = numero1 % 2; //guarda el resto de la division

// cadena de textos
let frase1 = 'Hola';
let frase2 = 'Me llamo Cristian';
let sumaString;

sumaString = frase1 + ' ' + frase2;
sumaString = 'Hola' + 1;
~~~

### Prompt

La sentencia prompt() mostarta un cuadro de dialogo para que el usuario ingrese un dato. se puede preoporcionar un mensaje que se colocara sobre el campo de texto. El valor que devuelve es una cadena que representa lo que el usuario ingreso.

- Podemos convertir las entradas en enteros, en caso de necesitemos, con parseFloat() o parseInt() o Number() o bien +valor.

~~~js
let nombreIngresado = prompt('Ingrese su nombre');

let numero1 = prompt('Ingrese un numero');
let numero2 = prompt('Ingrese otro numero');

// Formas de pasar de str a numero int o float
let resultado = parseFloat(numero1) + parseFloat(numero2); // o parseInt
let resultado = Number(numero1) + Number(numero2)
let resultado = (+numero1) + (+numero2)
alert("el resultado es: " + resultado)
~~~

### Console

La setencia console.log() muestra el mensaje que pasamos como parametro a la llamada en al consola de JS del navegador nuevo.

~~~js
console.log('Mensaje de prueba')

let mensaje = 'Hola como estas soy un mensaje';

// mostrar el mensaje en la consola
console.log(mensaje);
~~~

### Alert

La setencia alert() mostrara una ventana sobre la pagina web que estamos accediendo mostrando el mensaje que se pase como parametro a la llamada.

~~~js
alert("Hola soy un mensaje de alerta!");
~~~

## Control de flujo

Es marcar puntos en nuestra plicacion donde, a partir de alguna evaluacion, nuestro programa puede tomar varios caminos posibles de accion.

### Valores booleanos

Para generar estos controles empezamos a trabajar con los valores booleanos. Estos pueden tomar dos valores posibles, true o false
Asi, para que nuestro programa toma un camino u otro le vamos a decir que resuelva alguna evalucacion/ comparacion.
Si es verdadero(true) toamar aun camino, si no(false), tomara otro camino.
~~~js
let variableBooleana;
variableBooleana = true;
variableBooleana = false;
~~~

## Estructura If Else

Si la condicion se cumple, verdadero, se ejecuta lo que esta dentro del bloque, si no se ejecuta con lo que esta en el else, y de ahi va seguir con todo el bloque de codigo


~~~js
// si - condicion
if (condicion) {
    //
    console.log('vas a ver este mensaje');
} else { // sino
    console.log('si no se ejecuta este codigo')
}
~~~

### Condicionales anidadas

~~~js
let nombreUsuario = prompt('Ingrese su nombre de usuario: ');
let contrasena;
if ( nombreUsuario != ''){
    contrasena = prompt('Ingrese su contresna: ');
    if(contrasena != ''){
        console.log('El usuario ingreso datos en el nombre y contrasena')
    } else {
        console.log('La contrasena esta vacia')
    }
} else{
    console.log('El usuario ingreso un nombre vacio')
}

// si no estan los else if (condicion)
~~~

### Comparacino

Cuando utilizamos operadores matematicos, entre dos valores numericos, estos resuelven un nuevo tipo de valor numerico que es el resultado de la operacion. Cuando comparamos dos vaolores a traves de un operador de comparacion, esta operacion siempre se resuelve en true o false, es decir la comparacion es verdadero o false.

- es igual  ==
- es estrictamente igual ===
- es distinto !=
- es estrictamente distinto !==
- meno, menor igual, mayor, mayor igual <, <=, >, =>
- Operadores logicos
    - and &&
    - or ||
    - not !

## Ciclos / Iteraciones

Los ciclos repiten un bloque de codigo y se vuelve a evaluar la condicion si esta se cumple se repite el bloque de codigo, hasta que sea falsa.

- Bucles en JavaScript
    * For
        - Sentencia break
        - Sentencia continue
    - While
    - Do... while
- Estructura switch (No tiene nada que ver con los ciclos)

Los ciclos, tambien conocidos como bucles o iteraciones **son un medio rapido y sencillo para hacer algo rapidamente**.
Si tenemos que hacer alguna opreacion mas de una vez en el programa, de forma consecutiva, usaremos las estructuras de bucles en JavaScript `for, while o do... while`.

- Tipos de bulces
    - Ciclos por conteo : Repiten un bloque de codigo un numero de veces especifica. Estructura `for`.
    - Ciclos condicionales: Repiten un blque de codigo mientreas la condicion evaluada es verdadera. Estructuras `while` y `do... while`.

---

Estructura de FOR

El **'desde'** es la zona en la que se establecen los valores iniciale de las variables que controlan el ciclo.
El **'hasta'** es el unico elemento que decide si se repite o se detiene el ciclo.
La **'actualizacion'** es el nuevo valor que se asigna despues de cada repeticion a las variables que controlan que controlan el bucle

~~~js
// FOR
for(desde; hasta; actualizacion){
    ... // lo que se escribe aca se ejecutara las veces que dure el ciclo
}

for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log('Resto del codigo...');
~~~

## Falta ver la clase de bucles minuto 26 quede

## Fucniones

Es muy habitual utilizar una y otra vez las mismas intrucciopnes.
Separan el codigo en bloques para poder realizar otro tipo de cosas.
En programacion, una funcion es un conjunto de intrucciones que se agrupan para realizar una tarea concreta, que luego se puede reutilizar a lo largo de diferentes instancias del codigo.
Las funciones en todo lenugaje son instrucciones que van a realizar una accion

- Ventajas:
    - evitra instrucciones duplicadas.
    - Soluciona un porblema complejo usando tareas sencillas, con esto debemos separar en pequenas tareas para poder resolver un problema.
    - Focaliza tareas prioritarias para el programa.
    - Aporta ordenamiento y entendimiento al codigo.
    - Aporta facilidad y rapidez para hacer modificaciones.

### Declaracion

Se declara a traves de la palbra reservada `function`. Deben tener un nombre en minusucla y sin espracion seguidos de los caracteriricos parenteiss(). El contenido de la fucniona se escribe entre llaves. El nombre no se puede repetir en otra.
Para utilizar la funcion, llamamos / invocamos la funcion, es unicamente llamar a la funcion que declaramos

~~~js
// forma declarativa
function saludar(){ // inicializamos la funcion
    console.log('Hola Mundo!'); // cuerpo de la funcion
}

saludar(); // Aca se llama la fucnion
~~~

### Parametros

Una funcion simple, puede no necesitar ningun dato para funcionar.
Pero cuando empezamos a codificar fuciones mas complejas, nos enocntramos con la necesidad de reibir cierta informacion.
Cuando enviamos al a funcion uno o mas valores para ser empleados en sus operaciones, estamos hablando de los parametros de la funcion.
Los parametros se enviar a la funcion mediante variables y se colocan entre los parentesis posteriores al nombre de la funcion.

Los parametros son varialbes que se declaran dentro de la funcion, entre sus parentesis. Los valores de estos se definene luego en el llamado.
~~~js
// forma declarativa
function sumar(a, b){ // inicializamos la funcion y agregamos parametros
    console.log(a + b); // cuerpo de la funcion
}

sumar(12, 23); // Aca se llama la fucnion
~~~

### Return

En el ejemplo anterior sumamos dos numeros a una variable declarada anteriormente. Pero las funciones pueden generar un valor de retorno usando la palabra `return`, obteniendo el valor cuando la fucnion es llamada.

~~~js
function sumar(a, b){
    return a + b;
}

let resultado = sumar(1, 12); // Aca se guarda el valor que nos retorna la funcion

console.log(resultado); // suma total
~~~

## Funciones anonimas y funcinoes flecha

### Anonimas
Una funcion anonima es una funcion que se define sin nombre y se utiliza para se pasada como parametro o asiganad a una variable.
En el caso de asinarlas a una variable, pueden llamar usando el identificador de la variable declarada.

~~~js
// Generalemente, se asignan a variables constantes
const suma = function(a,b) { return a + b }
const resta = function(a,b){ return a - b }

console.log(suma(1, 1)) //2
console.log(resta(15, 5)) //15
~~~

### flechas

Identificamos a las funciones flechas como funciones anonimas de sintaxis simplificada. Esnta disponibles desde la version ES6 de JS, no usan palabra function pero usa => (flecha) en los parametro y el bloque.

~~~js
const suma = (a, b) => { return a + b }
// si es una funcion de una sola linea con retrono podemos evitar escribir el cuerpo.
const resta = (a, b) => a - b;
const saludar = () =>{
    console.log('Hola');
}

console.log(suma(1, 1));
console.log(resta(15, 5));
saludar();
~~~