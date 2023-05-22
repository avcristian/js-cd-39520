///3 - copiar Arrays

/* const copiaArray = [...array1];

///ojo con esto!, esto no es copiar arrays, recuerden objetos!
const copiaArrayMala = array1;
*/
let stock = [new Producto('Arroz',500), new Producto('Cacao', 250), new Producto('Membrillo',700)];
/*
const stock2 = [...stock]; ///esto es una copia

stock[0] = new Producto('Dulce de leche', 600); ///modificando un item del stock original
console.log(stock);
console.log(stock2);

////yo quiero ver a los productos de stock y stock2 como un conjunto de valores
console.log(...stock,...stock2); 
*/

////Mostrar mis productos en venta

/* function muestraProductosEnVenta(producto1,producto2,producto3) {
    console.log('Mis productos en venta: '+ producto1.nombre, producto2.nombre,producto3.nombre);
}

muestraProductosEnVenta(...stock); */
