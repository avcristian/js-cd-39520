/* 
////tipo de dato BOOLEAN

let variableBooleana;

variableBooleana = true;

//variableBooleana = false;


/////Sintaxis condicional - if

 if (CONDICION) {

   ////bloque de codigo 

}  

if (variableBooleana) {

    console.log('El usuario esta logeado!');

}

console.log('resto del codigo....'); */

////COMPARADORES
/**
 * == igual
 * === estrictamente igual
 * != distinto
 * !== estrictamente distinto
 * >= > <= <
 */


///igual -> compara el VALOR
/* 
let numerito1;
let numerito2;
let resultado;

numerito1 = 7; ///number
numerito2 = '7'; ///string

resultado = (numerito1 == numerito2);

console.log(numerito1 + '==' + numerito2 + '? : ' + resultado);


////estrictamente igual
//// compara el VALOR y el TIPO

resultado = (numerito1 === numerito2);
console.log(numerito1 + '===' + numerito2 + '? : ' + resultado);


/////ejemplo con logeo de usuario

 let contrasena;

contrasena = prompt('Ingrese su contrasena');

if (contrasena === 'pepe1234')
{
    console.log('Contrasena correcta!!');
} 

/////>= < <= 

numerito1 = 10;
numerito2 = 8;

resultado = (numerito1 > numerito2);
console.log(numerito1 + '>' + numerito2 + ' ' + resultado);

////!= y !===

numerito1 = 7;
numerito2 = '7';

////distinto !=
///compara VALOR
resultado = numerito1 != numerito2;
console.log(numerito1 + '!=' + numerito2 + ' ' + resultado);

///estrictamente distinto !==
///compara VALOR y TIPO

resultado = numerito1 !== numerito2;
console.log(numerito1 + '!==' + numerito2 + ' ' + resultado);
 */

////if...else
/*  if (CONDICION) {
    ///BLOQUE DE CODIGO
 } else {
    ////BLOQUE DE CODIGO ALTERNATIVO
 } */

/* let edad;

edad = parseInt(prompt('Ingrese su edad'));

if (edad >= 18) {
    console.log('Ingresando a la plataforma de bebidas alcoholicas....');
} else {
    console.log('Lamentablemente no tiene edad suficiente para ingresar a la plataforma...');
}

console.log('Resto del codigo...'); */


////if-else anidados

////evaluamos si alguno de los campos esta vacio

/* let nombreUsuario;
let contrasena;

nombreUsuario = prompt('Ingrese su nombre de usuario');

if (nombreUsuario != '') {

    contrasena = prompt('Ingrese su contrasena');

    if (contrasena != '') {
        console.log('El usuario ingreso datos en el nombre y la contrasena');
    } else {
        console.log('La contrasena esta vacia');
    }
}else {
    console.log('El usuario ingreso un nombre vacio');
}
 */

/////OPERADORES LOGICOS
/* 
p : 'voy a la playa' -> false
q : 'voy al cine' -> false
 */
////AND -> && -> Y
////dara verdadero si ambas condiciones son VERDADERAS

///p && q -> false

/* let nombreUsuario;
let contrasena;

nombreUsuario = prompt('Ingrese su nombre de usuario');
contrasena = prompt('Ingrese su contrasena');

if (nombreUsuario != '' && contrasena != '') {
    console.log('Datos ingresados correctamente!');
}else {
    console.log('Al menos uno de los campos esta vacio');
} */
/* 
let a = 10;
let b = 0;

if (b != 0 && a / b == 5) {
    console.log('la division entre A y B da 5');
}else {
    console.log('la division entre A y B no me da 5');
} */


////OR -> || -> O
/* 
p : 'voy a la playa' -> verdadero
q : 'voy al cine' -> falso
 */

////Es verdadero cuando AL MENOS UNA de las condiciones es verdadera


//p || q -> verdadero */

/* let usuario = prompt('Ingrese su nombre de usuario');
let contrasena = prompt('Ingrese su contrasena');

if (usuario == '' || contrasena == '') {
    alert('No ingreso datos en el usuario O en la contrasena');
}else {
    alert('Datos ingresados correctamente!');
}

*/
//NOT -> ! -> NEGACION (NO)

let variableVerdadera = true;
let resultado2 = !variableVerdadera; ///false

console.log(resultado2);


let usuario = prompt('Ingrese su nombre de usuario');
let contrasena = prompt('Ingrese su contrasena');

if (!(usuario == '') && !(contrasena == '')) {
    alert('Datos ingresados correctamente!');
}else {
    alert('Alguno de los campos esta vacio!');
}

















