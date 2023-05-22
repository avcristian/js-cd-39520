
let carrito = [];
const btnCargar = document.getElementById('cargaItem');
btnCargar.addEventListener('click', cargarUnItem);

///cuando recien se carga el documento
document.addEventListener('DOMContentLoaded', () => {
    /* carrito = JSON.parse(localStorage.getItem('carrito'));
    carrito = (carrito !== null) ? carrito : []; */
    /* if (carrito.length > 0) {
        mostrarItemsCarrito();
    } */

    carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.length > 0 && mostrarItemsCarrito();
});







function cargarUnItem() {

    const nuevoItem = new Item();
    nuevoItem.nombre = prompt('Ingrese un nombre');
    nuevoItem.precio = Number(prompt('Ingrese un precio'));
    nuevoItem.cantidad = Number(prompt('Ingrese cantidad'));

    carrito.push(nuevoItem);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarItemsCarrito();
}




///1era forma de crear elementos HTML -> a traves de innerHTML
function mostrarItemsCarrito() {
    const tabla = document.getElementById('items');
    tabla.innerHTML = ``;
    let counter = 1;

    carrito.forEach(({nombre,cantidad,precio}) => {
        tabla.innerHTML += `
            <tr>
                <th>${counter}</th>
                <td>${nombre} </td>
                <td>${cantidad} </td>
                <td>${precio} </td>
            </tr>
       `;
        counter++;
        console.log(tabla.innerHTML);
    });
}

/* EJERCICIO A REALIZAR
   1- Cargar el dropdown con un array de productos 
   2- Elegir del dropdown un producto y apretar el boton agregar para que se inserte en el carrito y se muestre en la tabla
*/
