////CHAINING OPERATOR
/// es una forma de evitar que avance a los atributos de algo que NO EXISTE
//// ?.
///devuelve undefined cuando el objeto o su atributo no exista.

  const usuario =  {
  nombreUsuario : 'Pedrito1234',
  nombre: 'Pedro',
  apellido: 'Gimenez',
  edad: null,
  estadoCivil: null,
  mascota: {nombre: 'pepito', tipo: 'perro'}
}; 

//const usuario = null;


function mostrarMascota(usuario) {
  console.log(usuario?.mascota?.nombre);
  console.log(usuario?.mascota?.tipo ?? 'No existe');
}

mostrarMascota(usuario);


const carrito = [new Item('Arroz',25.5,'Marolio',4), new Item('Leche',52.20, 'Serenisima', 4), new Item('Membrillo', 62.30, 'Bubu', 2)];

console.log(carrito.find((item) => item.nombre === 'Dulce de batata')?.precio ?? 'No existe');

 