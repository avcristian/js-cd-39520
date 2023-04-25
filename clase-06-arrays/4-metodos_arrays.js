const lista = ['Pepe' , 'Juan', 'Matias', 'Lucas', 'Mariano', 'Cristian' , 'Pablo']; ///7 elementos

////SPLICE
///elimina 1 o mas elementos a partir de una posicion en mi array
/// array.splice(INDICE,CANT_ELEMENTOS)

lista.splice(4,1); ////elimino 1 elemento en la posicion 4;

console.log(lista);


//// JOIN PARA CONCATENAR ELEMENTOS
/// NO modifico mi array original!

const recursos = ['mipagina.com','usuarios','1','perfil','editar'];

const url = recursos.join('/'); ///me devuelve un string

console.log(url); ///muestro un string
console.log(recursos); 


//// CONCAT
///concat lo que hace es concatenar los elementos de dos arrays y devolver uno nuevo
///NO afecta a mis arrays originales!

const listaHombres = [ 'pedro' , 'pablo', 'miguel'];
const listaMujeres = ['Maria', 'Marta', 'Paola', 'Paola'];
const listaNoBinarios = ['Algo1','Algo2','Algo3'];

const listaPersonas = listaHombres.concat(listaMujeres,listaNoBinarios);
console.log(listaPersonas);


/// SLICE
//slice me genera una rebanada de mi array
/// miarray.slice(DESDE_DONDE, HASTA_DONDE(EXC));
///mi arrray original NO se ve afectado!

const mujeres = listaPersonas.slice(3,7);
console.log(mujeres); ///imprimo el nuevo array generado
console.log(listaPersonas); /// mi array original queda como estaba!

////indexOF
///obtener el indice de un valor en mi array
///me devuelve el PRIMERO que coincide con mi busqueda
///si no encuentra ninguna ocurrencia me devolvera -1 -> no existe

let indice = listaPersonas.indexOf('Paola');
if (indice != -1) {
    console.log('El elemento esta en la posicion ' + indice);
}else {
    console.log('El elemento no esta!');
}

///INCLUDES
///me devuelve si el elemento ESTA o no ESTA

if (listaPersonas.includes('Marta')) {
    console.log('Existe una Marta en el array');
}

///REVERSE
///reverse me da vuelta los elementos del array (del primero al ultimo -> del ultimo al primero)
///AFECTA al array original!
listaPersonas.reverse();
console.log(listaPersonas);