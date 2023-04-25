
////hacer un programa el cual me muestre por consola los numeros del 1 al 10

/* 
for (DESDE DONDE COMIENZA; CONDICION DE AVANCE; COMO AVANZA)
{
    ///instrucciones que se repetiran
}
 */

///operador incremento
//// i++
///  i = i + 1

///se crea i y se empieza en 1
/// evalua la condicion
/// ejecuta las instrucciones
////incrementa
///evalua la condicion
////ejecuta las instrucciones

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//// 1 2 3 4 5 6 7 8 9 10
/// resto del codigo....

console.log('resto del codigo....');

////el for sirve UNICAMENTE cuando se la cantidad de veces que voy a REPETIR ese codigo

////se le pide al usuario ingresar el precio de 10 items, y luego calcular el promedio de precio.

/* 
let item1 = Number(prompt('ingrese precio'));
suma = item1;
let item2 = Number(prompt('ingrese precio'));
suma = item1 + item2;

 */
/* 
let precioItem;
let suma = 0; ///acumuladora
let promedio;
let cantidad;

cantidad = Number(prompt("cuantos items desea ingresar?"));

for (let i = 1 ; i <= cantidad; i++)
{
   precioItem = Number(prompt('ingrese precio'));
   console.log('Acumulandose... :' + suma);
   suma = suma + precioItem; 
}

promedio = suma / cantidad ;

console.log('El promedio es: ' + promedio);


for (let i = 1 ; i <= 6; i++)
{
    if (i == 3)
    {
        console.log('Salteo el mensaje...');
        continue;
    }

    console.log('Aca se muestra el mensaje!');
    console.log(i);
}

console.log('resto del programa...');
 */

////

//// El usuario va agregando items al carrito de compras hasta que escribe la palabra basta

/* let continuar = 'basta';

while (continuar != 'basta')
{
    console.log('Agregando un nuevo item al carrito de compras...');
    continuar = prompt('Desea agregar otro item? si/basta');
}

console.log('resto del codigo...'); */

///mostrar los numeros del 1 al 10 con un while
/* 
let i = 1; ///iterador - contador

while (i <= 10) {
    console.log(i);
    i++;
} */

////realizamos una calculadora
//// + - * /
/* const SUMAR = '+';
const PRODUCTO = '*';
const DIVISION = '/';
const RESTA = '-';

let resultado;
let continuar = 's';
///CONDICION - instrucciones - CONDICION - instrucciones
while (continuar == 's') {
    let operacion = prompt('ingrese la operacion que desea realizar "+ - * /"');
    let numero1 = Number(prompt('ingrese el primer numero'));
    let numero2 = Number(prompt('ingrese el segundo numero'));

    if (operacion == SUMAR) {
        resultado = numero1 + numero2;
    } else {
        if (operacion == RESTA) {
            resultado = numero1 - numero2;
        } else {
            if (operacion == PRODUCTO) {
                resultado = numero1 * numero2;
            } else {
                if (operacion == DIVISION) {
                    resultado = numero1 / numero2;
                } else { ///por defecto
                    resultado = NaN ///not a number
                    console.log('Ingreso un caracter invalido...');
                }
            }
        }
    }

    console.log('El resultado de la operacion es: ' + resultado);
    continuar = prompt('Desea continuar? s/n');
} */


///el do- while se estructura
///INSTRUCCIONES - CONDICION - INSTRUCCIONES ....
/**
 *  do {
 *      INSTRUCCIONES 
 * }while(CONDICION);
 * 
 */


/* const SUMAR = '+';
const PRODUCTO = '*';
const DIVISION = '/';
const RESTA = '-';

let resultado;
let continuar;

do {
    let operacion = prompt('ingrese la operacion que desea realizar "+ - * /"');
    let numero1 = Number(prompt('ingrese el primer numero'));
    let numero2 = Number(prompt('ingrese el segundo numero'));

    if (operacion == SUMAR) {
        resultado = numero1 + numero2;
    } else {
        if (operacion == RESTA) {
            resultado = numero1 - numero2;
        } else {
            if (operacion == PRODUCTO) {
                resultado = numero1 * numero2;
            } else {
                if (operacion == DIVISION) {
                    resultado = numero1 / numero2;
                } else { ///por defecto
                    resultado = NaN ///not a number
                    console.log('Ingreso un caracter invalido...');
                }
            }
        }
    }

    console.log('El resultado de la operacion es: ' + resultado);
    continuar = prompt('Desea continuar? s/n');

}while(continuar == 's'); */


///la estructura SWITCH
/**
 * switch(VALOR)
 * {
 *   case X: ///instrucciones..
 *   case Y: //// instrucciones...
 *    ...
 *   default:
 *           ////instrucciones....
 * }
 * 
 * 
 */

const SUMAR = '+';
const PRODUCTO = '*';
const DIVISION = '/';
const RESTA = '-';
const SALIR = '0';

let resultado;
let operacion;

do {
    alert('Bienvenido a la calculadora!' + '\n' +
        '"+": sumar' + '\n' +
        '"-": restar' + '\n' +
        '"*": multiplicar' + '\n' +
        '"/": division' + '\n' +
        '"0": salir');
    operacion = prompt('ingrese la operacion que desea realizar');

    if (operacion != SALIR) {
        let numero1 = Number(prompt('ingrese el primer numero'));
        let numero2 = Number(prompt('ingrese el segundo numero'));

        switch (operacion) {
            case SUMAR:
                resultado = numero1 + numero2;
                break; ///salgo del switch
            case RESTA:
                resultado = numero1 - numero2;
                break;
            case PRODUCTO:
                resultado = numero1 * numero2;
                break;
            case DIVISION:
                resultado = numero1 / numero2;
                break;
            default:
                resultado = NaN ///not a number
                alert('Ingreso un caracter invalido...');
        }
        alert('El resultado de la operacion es: ' + resultado);
    } else {
        alert('Gracias por usar la calculadora!');
    }
} while (operacion != SALIR); 
