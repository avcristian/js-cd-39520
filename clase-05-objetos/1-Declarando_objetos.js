////cargar una persona

/* let nombre;
let apellido;
let edad;
let dni;
 */


///declarando OBJETOS

///forma literal de objetos

const persona = {nombre: 'pepe', apellido: 'gomez', edad: 21, dni: '12525364', altura: 1.55};
const persona2 = {nombre: 'luis' , apellido: 'gimenez', edad:18 , dni: '43583293', altura: 1.61};


persona = 5; 

////como accedemos a los atributos?
 console.log(persona);

console.log('El dni de ' + persona.nombre + ' es ' + persona.dni);
console.log(persona2.altura);
 
///quiero modificar el contenido del atributo de un objeto, como hago?

persona.edad = 27;
console.log(persona);

//otra forma de acceder a los atributos del objeto
let atributo = 'nombre';
console.log(persona[atributo]);
