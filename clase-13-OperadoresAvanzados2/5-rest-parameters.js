///5 - Utilizar el spread como REST parameters
////cuando hago que la cantidad de argumentos de una funcion sea indeterminada

function muestraValores(...valores) { ///la funcion recibe un conjunto de valores pero maneja LOS PARAMETROS como un array
    valores.forEach((valor) => console.log(valor));
}

muestraValores(2,5,7);
muestraValores(1,25,18,"pepe",7,12); 


function muestraProductos(...productos) { ///la funcion recibe un conjunto de valores pero maneja LOS PARAMETROS como un array
    productos.forEach((producto) => console.log(producto.nombre));
}

muestraProductos(...stock); /// {nombre: 'Batatas', precio: 420}, {nombre: 'Cacao', precio: 250} ... 
