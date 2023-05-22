








///DESESTRUCTURING

const usuario =  {
  nombreUsuario : 'Pedrito1234',
  nombre: 'Pedro',
  apellido: 'Gimenez',
  edad: 58,
  estadoCivil: null,
  mascota: {nombre: 'pepito', tipo: 'perro'}
}; 

const usuario2 =  {
  nombreUsuario : 'Carlos123',
  nombre: 'Carlos',
  apellido: 'Lopez',
  edad: 21,
  estadoCivil: 'soltero',
  mascota: {nombre: 'pepito', tipo: 'perro'}
}; 

let {nombreUsuario, mascota, estadoCivil } = usuario;

console.log(nombreUsuario);
console.log(mascota);
console.log(estadoCivil);
console.log(usuario);

///ALIAS
///cuando quiero cambiarle el nombre a la variable que va a tomar el valor de ese atributo que yo quiero obtener
//{NOMBRE_PROPIEDAD:ALIAS } = objeto;

let {nombreUsuario:nombreUsuario2, mascota:mascota2, estadoCivil:estadoCivil2} = usuario2;
console.log(nombreUsuario2);
console.log(mascota2);
mostrarUsuario(usuario2);



function mostrarUsuario({nombreUsuario = '',nombre = '',edad = 45}) { /// si los atributos no existen los setea por defecto con ese valor
  console.log(nombreUsuario);
  console.log(nombre);
  console.log(edad);
}

//mostrarUsuario(usuario);



