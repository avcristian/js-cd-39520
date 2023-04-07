/// hacer un programa el cual me muestr por consoladel 1 al 10
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// Se le pide al usuario que ingrese el precio de 10 items, y luego calcular el promedio de precio.

let promedio = 0;

for(let i = 1; i <=10; i++){
    let precio = parseFloat(prompt('Ingrese el precio del item'));
    promedio += precio;
}

console.log('El promedio del precio es: ' + promedio / 10)