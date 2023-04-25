////VARIABLES

///declaracion de una variable
//let numerito;
//let numerito2;

///solamente declare 2 variables
///en este momento almacenan NADA -> 'undefined' (no definido)

////ASIGNACION de datos

//numerito = 3;  ///le asigne a numerito un 3
//numerito2 = 3.16;  

///declaracion e inicializacion
//let numerito3 = 1;

////CONSTANTE
///un espacio de memoria como el de una variable pero la diferencia es que NO podemos alterar su contenido
///la voy a tener que declarar e inicializar con un valor y siempre tendra el mismo 

const PI = 3.14;
//PI = 8; //// ESTO NO SE PUEDE

const IVA = 0.21;

////Tipos de datos que puedo almacenar
let numerito;
let texto;

///Tipo Number
numerito = 3; ///Int - entero
numerito = 2.7;  ///float - flotante

///Tipo string
texto = 'Avenida siempre viva 2374 @ % $ & ^ * ()';
texto = "Juan Perez";
texto = `Pablito`;
texto = 'h';

///OPERACIONES CON LOS TIPOS DE DATOS

////SUMA RESTA MULTIPLICACION DIVISION RESTO

let resultado;
let numerito1;
let numerito2;

numerito1 = 3;
numerito2 = 8;

///OPERACIONES CON TIPO DE DATO NUMBER

//SUMA
resultado = numerito1 + numerito2; /// 11
///MULTIPLICACION
resultado = numerito1 * numerito2; // 24
///DIVISION
resultado = numerito1 / numerito2; /// 0.375
////RESTO
resultado = numerito1 % 2; /// 1
resultado = numerito2 % 2; /// 0

///OPERACIONES CON STRINGS

let frase1 = 'hola ';
let frase2 = 'me llamo Pedro';
let resultadoOperacion;

////concatenacion
resultadoOperacion = frase1 + frase2; ///'hola me llamo Pedro'
resultadoOperacion = 'Mariano ' + 'Lopez'; /// 'Mariano Lopez'

resultadoOperacion = 'hola' + 1; /// 'hola1'
resultadoOperacion = 8 + 'hola'; //// '8hola'


////TRABAJANDO CON LA MUESTRA E INGRESO DE DATOS DESDE EL NAVEGADOR

/////MUESTRA DE DATOS

let mensajito = 'Hola como estas soy un mensaje';

////mostrar el mensaje en la consola
///console.log(VALOR);

console.log(mensajito);
console.log('Este es el numero PI: ' + PI);

////ALERT
////es una ventana de dialogo emergente en el navegador
///el alert lo ve el usuario

alert(mensajito);
alert('Este es el numero PI: ' + PI);

////INGRESO DE DATOS
////PROMPT(MENSAJE);

/* 
let texto1;
let texto2;
let fraseTotal;

texto1 = prompt("Ingrese un texto");
texto2 = prompt("Ingrese otro texto");
fraseTotal = texto1 + texto2; ///concatenacion
alert(fraseTotal);
 */

/* let numero1;
let numero2;
let total;

numero1 = prompt("Ingrese un numero");
numero2 = prompt("Ingrese otro numero");
total = numero1 + numero2;
alert('El total es: ' + total);
 */

////PROMPT SIEMPRE Y SIEMPRE VA A DEVOLVER UN STRING
///tengo que hacer un proceso de conversion

let numero1;
let numero2;
let total;

numero1 = prompt("Ingrese un numero");
numero2 = prompt("Ingrese otro numero");

numero1 = parseInt(numero1); ///parsea un string a un numero de tipo flotante (coma)
numero2 = parseInt(numero2);

//numero1 = Number(numero1); /// convierte el string a Number (con coma o entero)
//numero2 = Number(numero2);

//numero1 = +numero1; ///convierte el string al tipo de dato que contenga
//numero2 = +numero2;

total = numero1 + numero2;
alert('El total es: ' + total);






























