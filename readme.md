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
  - For
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

### Estructura de FOR

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

//Ejemplo practico For(1) tablas
//Algoritmo para calcular la tabla de multiplicar de un numero
let ingresarNumero = parseInt(prompt('Ingresar numero'));
// en cada repeticion, calculamos el numero ingresado (x) el numero de repeticion (i)
for(let i = 1; i <= 10; i++){
    let resultado = ingresarNumero * i;
    alert(ingresaNumero + " X" + i + "= " + resultado);
}

//Ejemplo practico FOR(2): Turnos
//algoritmo para dar turnos del 1 al 20 a los nombres ingresados.
for(let i = 1; i <= 20; i++){
    //En cada repetecicion solicitamos un nombre.
    let ingresarNombre = prompt("ingresar nombre");
    //Informamos el turno asignado usando el numero de repeticion (i).
    alert(" Turno Nro "+i+" Nombre: " + ingresarNombre);
}
~~~

### Setencia Break

A veces, cuando escribimos una estructura **for**, necesitamos que bajo cierta condicion el ciclo se interrumpa. Para eso se utiliza la sentencia break.
Al escribir esa linea dentro de un cicle for, el mismo se interrumpira como si hubiera finalizado.

~~~js
for(let i = 1; i <= 10; i++){
    // si la variable es igual 5 interrupo el for
    if(i == 5){
        break;
    }
    alert(i);
}
~~~

### Sentencia Continue

A ve ces, cuando escribimos una estructura **for**, necesitamos que bajo cierta condicion el ciclo saltee esa repeticion y siga con la proxima, Para eso se utiliza la **sentencia continue**.

~~~js
for(let i = 1; i <= 10; i++){
    //Si la variable i es 5, no se interpreta la repeticion
    if(i == 5){
        continue;
    }
    alert(i);
}
~~~

### WHILE

La estructura **while** permite crear bucles que se ejecutan cero o mas veces, dependiendo de la condicion indicada.
El funcionanmiento del bucle **while** se reume en: **mientras se cumpla la condicion indicada, repite las intrucciones inluidas dentro del bucle.**

Cuando usamos **while**, asumimos que en algun momento la repeticion va a finalizar; si la comparacion no se realiza adecuadamente podemos generar el llamado "bule infinito";

~~~js
//Bucle infinito
let repetir = true;
while(repetir){
    console.log("Al infinito y ... Mas alla!");
}

//Ejemplo aplicado de WHILE: ESC
//Algoritmo que solicita una entrada al usuario hasta que ingresa "ESC"
let entrada = prompt('Ingresar un dato');
//Repetimos con while hasta que el usuario ingresa "esc"
while(entrada != 'esc'){
    alert('El usuario ingreso ' + entrada);
    //Volvemos a solicitar un dato. En la proxima iteracion se evalua si no es ESC.
    entrada = prompt('ingresar otro dato');
}
~~~

### DO... WHILE

La estructura do... while permite crear bucles que se ejecutan una o mas veces, dependiendo de la condicion indicada.
A diferencia de while, **garantiza que el bloque de codigo se interpreta al menos una vez, porque la condicion se evalua al final.**

~~~js
let repetir = false;
do{
    console.log('Solo una vez!');
} while(repetir);

//Ejemplo aplicado DO... WHILE
//Algoritmo que solicita una entrada y se detiene cuando NO es un numero
let numero = 0;
do{
    //repetimos con do... while mientras el usuario ingresa un numero
    numero = prompt('Ingresar Numero');
    console.log(numero);
    //Si el parseo no resulta un numero se interrumpe el bucle.
} while(parseInt(numero));
~~~

### Switch

La estructura switch esta especialmente diseñada para manejar de forma sencilla **multiples condiciones sobre la misma variable** (tecnicamente se podria resolver un if, pero el uso de switch es mas ordenado).
Su definicion formal puede parecer confusa, pero veamos un ejemplo para entender su simpleza.

Cada condicion se evalua y, si se cumple, se ejecuta lo que esta indicado de cada **case**.
Normalmente, despues de las instrucciones de cada case se incluye la sentencia **break** para terminar la ejecucion del **switch**, aunue no es obligatorio.
Que sucede si ningun valor de la variable del switch coincide con los calores definidos en los **case**?
En este caso, se utiliza el valor **default** para indicar las instrucciones que se ejecutan cuando ninguna condicion anterior se cumplio.

~~~js
let numero = Number(prompt('Ingrese un numero'));

switch (numero){
    case 5:
        ...
        break;
    case 8:
        ...
        break;
    case 20:
        ...
        break;
    default:
        ...
        break;
}

// ejemplo aplicado: while y switch
// algoritmo que hace la operacion segun la entrada, pero ignora la ejecucion de bloque si la entrada es ESC.
let entrada = prompt('ingresar un nombre');
// repetimos hasta que se ingresa 'ESC'
while(entrada != 'esc'){
    switch(entrada){
        case 'ANA':
            alert('Hola ANA');
            break;
        case 'JUAN':
            alert('Hola Juan');
            break;
        default:
            alert('Quien sos?');
            break
    }
    entrada = prompt('ingresar un nombre');
}
~~~

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

Se declara a traves de la palbra reservada **`function`**. Deben tener un nombre en minusucla y sin espracion seguidos de los caracteriricos parenteiss(). El contenido de la fucniona se escribe entre llaves. El nombre no se puede repetir en otra.
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

- Ejemplo aplicado: Calcular precio

~~~js
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

// si una funcion es una sola linea con retrno y un parametro puede evitar escrbir los ()
const iva = x => x * 0.21;

let precio
~~~

### Scope

El scope o **ambito** de una variable es la zona del programa en la cual se define, el contexto al que pertenece la misma dentro de un algoritmo, registriendo su uso y alcance.

JavaScript define dos ambitos para las variables: **global y local**.

#### Variables globales

Si una variable se declara fuera de cualquier funcion o bloque, automaticamente se transforma en variable global.

~~~js
let resultado = 0;
function sumar(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}

sumar(5, 6);
//Se puede acceder a al variable resultado porque es golbal
console.log(resultado); // devuelve el valor de la suma, y la variable ya obtiene ese valor.
~~~

#### Variables locales

Cuando definimos una variable dentro de una funcion o bloque es una varialbe local, y sera accesible solo dentro de ese espacio. **Si queremos utilizar por fuera, la variable no existiria para JS.**

~~~js
function sumar(primerNumero, segundoNumero){
    let resultado = primer numero + segundoNumero;
}
// No se puede acceder a la variable resultado fuera del bloque.
console.log(resultado); //resultado is not undefined.
~~~

#### Variables locales y globales

Hay que entender que las varialbes globales y locales se identifican como diferentes entre si, y pueden existir en el programa bajo el mismo nombre sin conflicto.

~~~js
let nombre = 'John Doe';
function saludar(){
    let nombre = 'juan coder'
    console.log(nombre);
}
//Accede a nombre global.
console.log(nombre);

//Accede a nombre local
saludar(); // Juan coder
~~~

- Scope: Entender que cada scope local es un espacion cerrado nos permite crear bloques de trabajo bien diferenciados e independientes, sin preocuparnos por repetir nombres de variables, sabiendo que se entienden como diferentes segundo donde los llamemos.

~~~js
function sumar(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

function restar(num1, num2){
    let resultado = num1 - num2;
    return resultado;
}
~~~

## Objetos

En SJ, los objetos son estructuras que podemos definir para agrupar valor bajo un mismo criterio. Podemos decir que **un objeto es una colecccion de datos relacionados como una entidad**. Se componen de un listado de pares clave-valor, es decir **propiedades y valores** agrupados.

- Porque usamos objetos?
  - La utilidad de los objetos deviene de su composicion por varios valores y operaciones comunes (funciones) para todos los elementos, de este tipo y sus propiedades.

~~~js
const persona1 = {nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
~~~

### Anatomia de un objeto

Un objeto literal se define directamente entre llaves {}. Los valores que almacenan se listan separados por coma, bajo la forma propiedad: valor.

~~~js
const persona1 = {
    nombre: "Homer",
    edad: 39,
    calle: "Av. Siempreviva 742"
};
~~~

### Obteniendo valores del objeto

#### Notacion de punto

Para obtener el valor de una propiedad en un objeto utilizamos la notacion de punto **(.)**: El nombre de la variable del obejto, seguido de punto y nombre de la propiedad:

~~~js
const persona1 = {
    nombre: "Homer",
    edad: 39,
    calle: "Av. Siempreviva 742"
};

console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.calle);
~~~

#### Notacion de corchete

Otra forma de obtener el valor de una propuedad en un objeto utilizamos la notacion de corchetes **([])**: el nombre de la variable del objeto, seguido de corchetes y dentro de ellos un string del nombre de la propiedad:

~~~js
const persona1 = {
    nombre: "Homer",
    edad: 39,
    calle: "Av. Siempreviva 742"
};

console.log(persona1['nombre']);
console.log(persona1['edad']);
console.log(persona1['calle']);
~~~

#### Asignar valores a las proopiedades

Es posible usar las dos formas(corchetes y parentesis) para acceder a las propiedades y asignar nuevos valores a los datos almacenados en las propiedades del objeto.

~~~js
const persona1 = {
    nombre: "Homer",
    edad: 39,
    calle: "Av. Siempreviva 742"
};

persona1['nombre'] = 'Marge';
persona1.edad = 36;
~~~

### Operador IN y FOR ... IN

El operador **in** devuelve true si la propiedad especifica existe en el objeto.
Mientras que el bucle **for ... in** permite acceder a todas las propiedades del objeto, obteninendo una propiedad por cada itereacion.

~~~js
const persona1 = {
    nombre: "Homer",
    edad: 39,
    calle: "Av. Siempreviva 742"
};

// devuelve true porque la clave nombre existe en el objeto persona1
console.log('nombre' in persona1);

// devuelve false porque la clave 'origen' no existe en el objeto peronsa1
console.lgo('orige' in persona1);

// recorremos todas las propiedad del objeto con el ciclo for ... in
for(const propiedad in persona1){
    console.log(perona1[propiedad]);
}
~~~

### Constructores

En js, **el constructor de un objeto es una funcion que usamos para crear un nuebo objeto cada vez que sea necesario.** Con esta 'funcion constructora' podemos inicializar las propiedades del objeto al momento de ser instanciado como **new**.

~~~js
function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
};

const persona1 = new Persona('Homero', 39, 'Av. Siempreviva 732');
const persona2 = new Persona('Marge', 36, 'Av. Siempreviva 732');
~~~

En este ejemplo, se define la funcion Persona, donde se asignan las diferentes propiedades con los valores recibidos como parametros.
En algun lugar del codigo, se puede construir un objeto Persona declarando una variable y asignando la referencia del objeto instanciado mediante la instruccion **new Persona()**

#### Uso de THIS

La palabra clave **this** ('este') refiere al elemento actual en el que se esta escribiendo el codigo. Cuando se emplea una funcion constructora para crear un objeto (con la palabra clave new), **this** esta enlazada al nuevo objeto instanciado.
**This** es muy util para asegurar que se emplean las propiedades del objeto actual.

~~~js
function Persona(literal){
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;
}

const persona1 = new Persona({
    nombre: 'Homero',
    edad: 39, 
    calle: 'Av. Siemprevivia 742'
});
~~~

### Metodos en objetos JS

JavaScript cuenta con sus poropios objetos, por ejemplo: cada vez que creamos una cadena de caracteres se crea automaticamente como una instancia del objeto String y, por lo tanto, tiene varios metodos / propiedades comunes disponibles en ella.

~~~js
let cadena = 'HOLA CODER';
//Propiedad de objeto String: largo de la cadena.
console.log(cadena.length);

//Pasar a minusculas
console.log(cadena.toLoweCase());

//Pasar a mayusculas
console.log(cadena.toUpperCase());
~~~

#### Metodos personalizados

Podemos crear nuestros propios **metodos para objetos personalizados, referenciando funciones por su nombre o definiendo funciones anonimas asociadas a una propiedad de la funcion constructora.**
Llamar a un metodo es similar a acceder a una propiedad, pero se agrega() al final del nombre del metodo, posiblemente con argumentos.

~~~js
function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){ console.log('Hola soy ' + this.nombre) };
};

const persona1 = new Persona('Homero', 39, 'Av. Siempreviva 742');
const persona2 = new Persona('Marge', 36, 'Av. Siempreviva 742');

persona1.hablar();
persona2.hablar();
~~~

## Clases

Las **clases** de JavaScript, introducidas en ES6, proveen una sintaxis mucho mas clara y simple para crear objetos personalizados.
**Son una equivalencia al empleo de funcion constructora y permite definir distintos tipos de metodos.**

~~~js
class Persona {
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
}

const persona1 = new Persona('Homero', 39, 'Av. Siempreviva 742');
~~~

### Clases y Metodos

En la declaracion de clase, **la funcion constructora es remplazada por el metodo constructor.** Los metodos en las clases no referencian a propiedades, se declaran dentro del bloque sin la plabra **function**.

~~~js
class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar(){
        console.log('Hola soy' + this.nombre);
    }
}

const persona1 = new Persona('Homero', 39, 'Av. Siempreviva 742');
persona1.hablar();

// Ejemplo aplicado clase producto

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parserFloat(precio);
        this.vendido = false; 
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
    vender(){
        this.vendido = true;
    }
}

const producto1 = new Producto('arroz', '125');
const producto2 = new Producto('fide', '50');

producto1.sumarIva();
producto2.sumarIva();
producto1.vender();
~~~

## Arrays

Un array es un **tipo de dato que sirve para almacenar valores en forma de lista**. Puede ser una coleccion de numeros, strings, booleanos, objetos o hasta una lista de listas.
Los **valores** del array puede ser distintos y es posible agregar o quitar elementos en todo momento.
Los elementeos del arrray **tienen un indice**, que va desde el 0(el primer elemento del array) hasta el ultimo elemento.

### Declaracion del array

Para declarar una variable y asiganar un array empleamos los **corchetes (**[]**)** y dentro de ellos definimos todos los valores separados por coma.
Los array en js empiezan siempre en la posicion 0. Un array que tenga, por ejemplo, 10 elementos, tendra posiciones de 0 a 9.

~~~js
// declaracion de array vacio
const arrayA = [];

//declaracion de array con nymeros
const arrayB = [1, 2];

//array con strings
const arrayC = ['c1', 'c2', 'c3'];

//array con booleanos
const arrayD = [true, false, true, false];

//array mixto
const arrayE = [1, false, 'E1'];
~~~

#### Acceso al array

Los elementos dentro de un array tienen un indice que determina su posicion en el mismo.
Asi, es posible acceder a los elementos dentro de un array a traves de su posicion:

~~~js
const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); //1
console.log(numeros[3]); //4

let resultado = numeros[1] + numeros[2];
console.log(resultado) // 5
~~~

#### Recorrido del array

Decimos que estamos recorriendo un array cuando empleamos un bucle para acceder a cada elemento por separado.
Los array en Js son **objetos iterables**, lo que permite usar distintas estructuras para iterar sobre ellos.

~~~js
const numeros = [1, 2, 3, 4, 5];
for(let index = 0; index < numeros.length(); index++){
    alert(numeros[index]);
}
~~~

### Metodos y propiedades

#### Length

Al igual que en un String, la **propiedad Length** nos sirve para obtener el largo de un array, es decir, para identificar cuantos elementeos tiene.

~~~js
const miArray = ['marca', 3, 'palbra'];
console.log(miArray.length());
~~~

Es comun utilizarlo para definir el limite de itereaciones sobre un array, ya que la propiedad length me permite saber explicitamente la longitud del mismo

~~~js
const numeros = [1, 2, 3, 4, 5];
for(let i = 0; i < numeros.length; i++){
    alert(numeros[i]);
}
~~~

#### Agregar elementos

Para sumar un elemento a un array que ya existe, se utiliza el **metodo push**, pasando como parametro el valor (o variable) a agrega.

~~~js
const miArray = ['Marca', 3, 'palabra'];
miArray.push('Otro elemento');
console.log(miArray.length) //4
console.log(miArray)
//['Marca', 3, 'palabra', 'Otro elemento']
~~~

El **metodos push ()** agrega elementos al final del array. Si queremos agregar al inicia del array, utilizamos el metodo **unshift()** de forma similar:

~~~js
const miArray = ['Marca', 3, 'palabra'];
miArray.unshift('Otro elemento');
console.log(miArray.length) //4
console.log(miArray)
//['Otro elemento', 'Marca', 3, 'palabra']
~~~

#### Quitar elementos

De forma inversa, existe metodos para eliminar elementos del array.

- Si queremos eliminar **el primer elemento del array** utilizamos el metodo **shift()**
- Si queremos eliminar **el ultimo elemento**, el metodo **pop()**.

~~~js
const nombres = ['Luis', 'Ana', 'Julia', 'Juan'];

nombres.pop();
console.log(nombres) // ['Luis', 'Ana', 'Julia']

nombres.shift();
console.log(nombres) //['Ana', 'Julia']
~~~

#### Splice

El **metodo splice()** permite eliminar uno o varios elementos de un array en cualquier posicion. Funciona con 2 parametros: el primero es el **indice** donde se ubica el metodo para trabajar, y el segundo es la **cantidad de elemetnos a eliminar** desde esa posicion.

~~~js
const nombres = ['Luis', 'Ana', 'Julia', 'Juan'];
nombres.splice(1, 2); //desde la posicion 1 va a elimiar 2 elementos del array

console.log(nombres);
// ['Luis', 'Juan']
~~~

#### Join

Mediante el metodo **join** podemos generar un string con todos los elementos del array, separados por el valor que pasamos por parametro.

~~~js
const nombres = ['Luis', 'Ana', 'Julia', 'Juan'];

console.log(nombres.join(', '));
// Luis, Ana, Julia, Juan

console.log(nombres.join(*));
// Luis*Ana*Julia*Juan
~~~

#### Concat

Mediante el metodo **contact** podemos combianar dos array en un unico Array resultante:

~~~js
const perros = ['pupy', 'ronnie'];
const gatos = ['mishi', 'garfield', 'zuri'];
const mascotas = perros.concat(gatos);
console.log(mascotas);
// [ 'pupy', 'ronnie', 'mishi', 'garfield', 'zuri' ]
~~~

#### Slice

El metodo slice devuelve una copia de una parte de array dentro de un nuevo array, empemamos con el iniciaio hasta el fin(el fin no incluido). El array original no se modificara.

~~~js
const nombres = ['rita', 'pedro', 'miguel', 'ana', 'vanesa'];
const masculinos = nombres.slice(1,3); // nuevo array de la pos 1 a la 3, la 3 no es incluida.
// [ 'pedro', 'miguel' ]
~~~

#### IndexOf

El metodo **indexOf()** nos permite obtener el indice de un elementeo en un array.
Recibe por parametro el elemento que queremos buscar en el array y , en caso existir, nos retorna su indice. Si el elemento no existe nos retornara como valor **-1**

~~~js
const nombres = ['rita', 'pedro', 'miguel', 'ana', 'vanesa'];

console.log(nombres.indexOf('rita')) // 0
console.log(nombres.indexOf('ana')) // 3
console.log(nombres.indexOf('cris')) // -1
~~~

#### Includes

Similar al antreior, el metodo **includes** me permite saber si un elemento que recibe por parametro existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo.

~~~js
const nombres = ['rita', 'pedro', 'miguel', 'ana', 'vanesa'];

console.log(nombres.includes('rita')) //true
console.log(nombres.includes('miguel')) //true
console.log(nombres.includes('cris')) //false
~~~

#### Reverse

Como su nombres lo indica, el metodo **reverse()** invierte el orde de los elementos dentro de un array.
Este metodo modifica el array original.

~~~js
const nombres = ['rita', 'pedro', 'miguel', 'ana', 'vanesa'];
nombres.reverse()
console.log(nombres)
//[ 'vanesa', 'ana', 'miguel', 'pedro', 'rita' ]
~~~
