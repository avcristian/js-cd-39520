////METODOS DE ARRAYS AVANZADOS
const otroArray = [ 'Pablo', 'Pepe', 'Pachu', 'Jimeno'];
const numeros = [ 25.5, 17.20, 40.25, 10];
///FOREACH (es igual al porCadaUno)

const accion = function(elem) {
    console.log(elem);
}
otroArray.forEach(accion);


let total = 0;
numeros.forEach((elem) => {
    total = total + elem;
});

console.log(total);

///FIND
///devuelve el primer resultado de la ocurrencia o 'undefined' si no existe


const carrito = [ {nombre: 'Chocolate', marca:'Cadbury', precio:500.20}, 
                  {nombre: 'Rollo de Servilleta', marca:'Elite', precio: 850.10},
                  {nombre: 'trapo de piso', marca:'cuchuflito', precio:200},
                  {nombre: 'Chocolate', marca:'Cofler', precio:700.20}
                ];


const elementoEncontrado = carrito.find((elem) => { return elem.nombre == 'Chocolate'});
console.log(elementoEncontrado);

const noExiste = carrito.find((elem) => { return elem.nombre == 'pava' });
console.log(noExiste);



///FILTER
///devuelve una lista de objetos/datos que coincidan con el criterio de mi busqueda
///si ninguno coincide devuelve un ARRAY vacio
///SIEMRPE va a devolver un array

const chocolates = carrito.filter((item) => {return item.nombre == 'Chocolate'});
console.log(chocolates);

///SOME
///some es como el find pero la diferencia es que devuelve si esta o no esta (true o false)

if (carrito.some((elem) => {return elem.marca == 'Cadbury'})) {

    console.log('Este carrito tendra un descuento cuando haga el checkout! ya que lleva un cadbury!');
} else {
    console.log('este carrito no lleva descuento');
}

////MAP
////me genera un nuevo array con la misma cantidad de elementos pero cada elemento con la transformacion que querramos

const carritoConIva = carrito.map((item) => { return {nombre: item.nombre, precio: item.precio *1.21}});

console.log(carritoConIva);

///REDUCE
///hace una acumulacion de valores y devuelve un total

const totalCarrito = carrito.reduce((total,item) => { return total + item.precio}, 0);
console.log(totalCarrito);

///SORT
///para ordenar un array
///si el resultado devuelve > 0 pone el item2 antes que el item1
///si el resultado devuelve < 0 pone el item1 antes  que el item2
carrito.sort((item1,item2) => { return item1.precio - item2.precio});
console.log(carrito);