

let carrito = [] ///aqui iran los items del carrito
let stock = [] ///aqui iran los productos

////traerme los elementos del dom
const tabla = document.getElementById('items');
const selectProductos = document.getElementById('productos');
const btnAgregar = document.getElementById('agregar');
const btnOrdenar = document.getElementById('ordenar');
const btnVaciar = document.getElementById('vaciar');
const total = document.getElementById('total');


///ejecutar una vez para cargar el localStorage con stock
/*
stock.push(new Producto('cafe', 600));
stock.push(new Producto('te', 400));
stock.push(new Producto('medialuna', 80));
stock.push(new Producto('tostado',1000));
stock.push(new Producto('licuado de fruta', 850));
stock.push(new Producto('jugo de naranja', 500));
stock.push(new Producto('pinta', 750));
stock.push(new Producto('dona', 200));
stock.push(new Producto('cookie', 250));
stock.push(new Producto('scon',150));

localStorage.setItem('stock',JSON.stringify(stock));
 */



allEventListeners();


function allEventListeners()
{
  ////agregamos un escuchador del evento cuando el DOM se carga
  window.addEventListener('DOMContentLoaded', traerItems);
  btnVaciar.addEventListener('click', vaciarCarrito);

  ///event listener de agregar un producto al carrito
  btnAgregar.addEventListener('submit', (e) =>
  {
    e.preventDefault(); ///evito el refresque
    const productoSeleccionado = stock[+selectProductos.value]; ///obtengo el producto elegido
    console.log(productoSeleccionado);
    const indiceCarrito = carrito.findIndex((item) => { return item.producto.nombre == productoSeleccionado.nombre});
    console.log(indiceCarrito);
    if (indiceCarrito != -1)
    {
      carrito[indiceCarrito].cantidad++;
    } else {
      const item = new Item(productoSeleccionado,1);
      carrito.push(item);
    }

    actualizarTablaCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito)); //actualizo el carrito en el localStorage
  });

}



function traerItems()
{
  ///traer los productos del localStorage
  ///si no hay nada inicializara stock en vacio []
  stock = JSON.parse(localStorage.getItem('stock')) || [];
  carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  popularDropDown();
  actualizarTablaCarrito();  
}


///rellenamos el dropDown de productos
function popularDropDown() {
  stock.forEach((producto,index) => {
    const option = document.createElement('option');
    option.textContent = `${producto.nombre}: ${producto.precio}`;
    option.value = index; ///el indice donde se encuentra este producto
    selectProductos.appendChild(option);
  });
}

function actualizarTablaCarrito()
{
  tabla.innerHTML = '';
  total.innerText = 0;
  carrito.length || btnVaciar.setAttribute('disabled', true);
  carrito.forEach((item) => {
    newRow(item);
  });
}



function newRow(item)
{
  const row = document.createElement('tr'); ///creo la fila
  let td = document.createElement('td');
  const posCarrito = carrito.indexOf(item); ///posicion del item en el carrito

  td.classList.add('font-white');
  td.textContent = item.producto.nombre;
  row.appendChild(td);
  
  td.classList.add('font-white');
  td = document.createElement('td');
  td.textContent = item.cantidad;
  row.appendChild(td);

  td.classList.add('font-white');
  td = document.createElement('td');
  td.textContent = item.producto.precio;

  row.appendChild(td);

  const btnEliminar = document.createElement('button');
  btnEliminar.className = 'btn btn-danger';
  btnEliminar.textContent = 'Eliminar';

  btnEliminar.onclick = () => 
  {
      carrito.splice(posCarrito,1); //posicion y cantidad de elementos
      actualizarTablaCarrito();
      localStorage.setItem('carrito',JSON.stringify(carrito));
  }

  td = document.createElement('td')
  td.appendChild(btnEliminar);
  row.appendChild(td);
  tabla.appendChild(row); ///le agrego al tbody una nueva fila
  btnVaciar.removeAttribute('disabled');

  ///calculo el total que tengo ahora
  
  total.innerText = carrito.reduce((acumulador,item) => acumulador + item.producto.precio * item.cantidad,0);
}


function vaciarCarrito()
{
        Swal.fire({
          title: 'Desea eliminar los items del carrito?',
          confirmButtonText: 'Si',
          showCancelButton: true,
          cancelButtonText: 'Nop'
        }).then((resultado)=> {
            if (resultado.isConfirmed) {
              carrito = [];
              localStorage.setItem('carrito',JSON.stringify(carrito));
              actualizarTablaCarrito();
              Swal.fire({
                title: 'Carrito vaciado!',
                icon: 'success'
              });
            }
        });
          
}
