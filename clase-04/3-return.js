///usando return
//////Actualmente tenemos funciones que envian datos a la consola, cuando veamos DOM las funciones como validacion de formularios
////vamos a tener ejecutando todo el codigo ahi en funciones...

////Ejemplo agregando al carrito un elemento

function agregarItemCarrito(suma,precio) { ////suma = 25.50 , precio = 50.00
    return suma + precio; 
}

///calcular el precio total con el iva de la suma de todos los precios
function calcularIva(suma) { /// suma = 75.50
    return 1.21 * suma; ///devuelve el calculo del iva con lo que contiene suma
}

let total = 0;
let totalConIva = 0;

console.log('total al principio: ' + total);

total = agregarItemCarrito(total,25.50); // total = 25.50
console.log('total con el precio añadido de 25.50: '+ total);

total = agregarItemCarrito(total,50.00); /// total = 75.50
console.log('total con el precio añadido de 50.00: '+ total);

totalConIva = calcularIva(total);
console.log('total con el iva: '+ totalConIva); 


/////algo para aclarar sobre returns...\
////luego de un return la funcion FINALIZA
///la funcion termina donde encuentra un return.

function saludarAlPublico()
{
    console.log('Hola los saludo a todos!');
    return 2 + 2;
    console.log('Y les digo algo mas...');
}

let cuatro = saludarAlPublico();
console.log(cuatro)

