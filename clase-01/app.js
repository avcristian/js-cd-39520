// let booleano;
// booleano = true;

// // estructura if
// if (booleano){
//     console.log('Este codigo se ve porque la variable es verdadera')
// }

// console.log('Despues se ejecuta el resto del codigo')

// let num1 = 7;
// let num2 = 1;

// resultado = num1 == num2;

// console.log('Num1 es igual a num2?: ' + resultado)


// Ejemplo de logeo de usuario

// let nombreUsuario;
// let contrasena;

// contrasena = prompt('Ingrese su contrasena: ')

// if (contrasena === 'pepe1234'){ /// se compara estrictamente el string
//     console.log('Constrasena correcta! ')
// }

// < <= > >=
// if (num1 > num2){
//     console.log('El num1 es mayor a num2' )
// }

// let edad = prompt('Ingrese la edad: ')

// if (edad >= 18){
//     console.log('Ingresando a la plataforma de bebidas alcoholicas')
// } else{
//     console.log('No cumple con la edad')
// }

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
