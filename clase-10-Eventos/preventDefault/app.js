const checkbox = document.getElementById('id-checkbox');

///los eventos producen informacion
///el objeto que se produce lo agarramos con nuestra funcion que vamos a ejecutar.

checkbox.addEventListener('click', (evento) => {
   evento.preventDefault(); ///prevengo que la accion por defecto (checkearse) no se produzca
   console.log(evento);
});

checkbox.addEventListener('click', (evento) => {
   console.log(evento);
   checkbox.checked = false; ///a traves del target accedo al input y no dejo que nunca se chequee
});