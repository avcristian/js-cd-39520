////ARRAYS
///Un array es un objeto (un nuevo tipo de dato para nosotros, pero no deja de ser un objeto)

const listaVacia = []; //// una lista vacia

const listaConDatos = ['pepe', 'pablo', 'Sara']; ///una lista con datos

console.log('array vacio:' + listaVacia);
console.log('array con datos:' + listaConDatos);
console.log(listaConDatos); ///imprimo el objeto
console.log(listaVacia)

////como todo objeto, un array tiene atributos..

///LENGTH
///cantidad de elementos que posee mi array

console.log(listaConDatos.length);

////para acceder a un elemento especifico de mi array lo hare mediante su indice
///siempre los indices comienzan en 0

console.log(listaConDatos[2]);

///modificacion de un valor
listaConDatos[1] = 'Juan';
console.log(listaConDatos[1]);
console.log(listaConDatos);



///ultimo indice de mi array: 6

console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
console.log(lista[3]);

