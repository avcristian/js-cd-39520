let carrito = [new Item('Arroz',25.5,'Marolio',4), new Item('Leche',52.20, 'Serenisima', 4), new Item('Membrillo', 62.30, 'Bubu', 2)];

function mostrarTabla() {
  const tabla = document.getElementById('items');
  tabla.innerHTML = ``; ///vacio la tabla limpiando el innerHTML
  let counter = 1;

  carrito.forEach((item) => { ///por cada uno de los items de mi carrito, genero una fila
    tabla.innerHTML = tabla.innerHTML +
                      `
                        <tr>
                          <th> ${counter} </th>
                          <td> ${item.nombre} </td>
                          <td> ${item.marca} </td>
                          <td> ${item.cantidad} </td>           
                          <td> ${item.precio} </td>
                        </tr>
                      `;
      counter++;
  });

}



function mostrarTablaV2() {
  const tabla = document.getElementById('items');
  tabla.innerHTML = ``; ///vacio la tabla limpiando el innerHTML
  let counter = 1;
  
    carrito.forEach((item) => { ///por cada uno de los items de mi carrito, genero una fila
    let tr = document.createElement('tr'); ///creo una fila!
    let th = document.createElement('th'); ///creo el header de la fila!
    th.textContent = counter; //// <th> ${counter} </th>
    ///le agregue el th como hijo de la fila
    tr.appendChild(th);

    ///crear la celda para el nombre del item
    let td = document.createElement('td');
    td.textContent = item.nombre;
    tr.appendChild(td);

    //creo la celda para la marca
    td = document.createElement('td');
    td.textContent = item.marca;
    tr.appendChild(td);

    ///creo la celda para la cantidad
    td = document.createElement('td');
    td.textContent = item.cantidad;
    tr.appendChild(td);

    ///creo la celda para el precio
    td = document.createElement('td');
    td.textContent = item.precio;
    tr.appendChild(td);

    ////appendeo la fila a la tabla (el body)
    tabla.appendChild(tr);

    counter++;
  });

}

mostrarTablaV2()
