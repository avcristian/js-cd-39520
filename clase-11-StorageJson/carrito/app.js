
///lista de elementos que vamos a utilizar
let productos = [] ///lista de productos
let carrito = [] ///lista de items

////ELEMENTOS DEL DOM
////Vamos a obtener el elemento del dom usando querySelector
///QuerySelector funciona igual que getElement, la diferencia es que usa selectores CSS

const selectorProductos = document.querySelector('#productos');


/* ///si necesitase obtener por clase
const selectorProductos2 = document.querySelector('.prod-selector'); ///me trae siemrpe un elemento

///si quisiese que me traiga todos los elementos de X clase 
const btnesPrimarios = document.querySelectorAll('.btn-primary'); ///me devuelve un array de elementos
///si es por nombre de tag
const unDiv = document.querySelector('div');  /// otra forma: '[data-index=1][for="productos"]'
 */


////generamos la lista de productos
///esto haganlo la primera vez que lo ejecutan, luego lo comentan
/** 
productos.push(new Producto('cafe',600));
productos.push(new Producto('medialuna', 80));
productos.push(new Producto('tostado', 800));
productos.push(new Producto('muffin', 300));
productos.push(new Producto('Jugo Exprimido', 550));
productos.push(new Producto('Brownie',700));
productos.push(new Producto('cafe con leche', 600));
productos.push(new Producto('Submarino', 800));
productos.push(new Producto('Latte Vainilla',900));
productos.push(new Producto('Chocolatada',700));

///guardamos la lista de productos en el localStorage
localStorage.setItem('productos',JSON.stringify(productos));
**/

////EVENTOS

////este evento ocurre cuando se carga la pagina
/// se carga el contenido del documento completamente
document.addEventListener('DOMContentLoaded', () => {
  productos = JSON.parse(localStorage.getItem('productos'));
  popularDropDown();
});

function popularDropDown()
{
 productos.forEach((producto) => {
   const option = document.createElement('option');
   option.textContent = `${producto.nombre} : ${producto.precio}`;
   option.value = productos.indexOf(producto); /// para luego saber el producto que esta seleccionando el usuario
   selectorProductos.appendChild(option);
  });
}




