///usando el operador AND
///reduce un if

let numerito = 5;

numerito > 0 && console.log('numerito es mayor a 0 ');

if (numerito > 0 ) {
  console.log('numerito es mayor a 0');
}


 const usuario =  {
  nombreUsuario : 'Pedrito1234',
  nombre: 'Pedro',
  apellido: 'Gimenez',
  edad: '',
  estadoCivil: '',
}; 

const validado = usuario.nombreUsuario != '' && usuario.nombre != '' && usuario.apellido != '' && usuario.edad != '' && login();

if (!validado) {
  console.log('hubo un problema en la validacion');
}
 




//jugando con and y los falsy values

//const respuesta = true && console.log('hola') && console.log('chau');
const respuesta = true && parseInt('hola') && console.log('hello world');
console.log('respuesta:' +respuesta);

////EVALUANDO EL OR

console.log(0 || NaN || undefined || null || '' || `` || "" || false || null);


/* const usuario =  {
  nombreUsuario : 'Pedrito1234',
  nombre: 'Pedro',
  apellido: 'Gimenez',
  edad: null,
  estadoCivil: null
}; */

inputNombre.value = usuario.nombreUsuario || '';
inputApellido.value = usuario.apellido || '';
inputEdad.value = usuario.edad || '';
inputEstadoCivil = usuario.estadoCivil || '';

 
const usuarios = [ {nombre:'usuario1'}, {nombre: 'usuario2'}, {nombre: 'usuario3'}];

const user = usuarios.find((usuario) => usuario.nombre === 'usuario4') || {nombre: 'usuario4'};
console.log(user);
 
