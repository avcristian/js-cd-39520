const lista = ['Pepe' , 'Juan', 'Matias', 'Lucas', 'Mariano', 'Cristian' , 'Pablo']; ///7 elementos

////AGREGANDO NUEVOS ELEMENTOS

///push -> agrega un nuevo elemento al final del array
///unshift -> agrego un elemento al principio del array

//lista.push('Mauricio');
//console.log(lista);

///cargar un elemento al array -> se lo pido al usuario
function cargarNombreEnLista()
{
    const nuevoNombre = prompt('Ingrese un nombre');
    lista.unshift(nuevoNombre); ///inserto el nuevo nombre en la cola del array
}

function cargaDatos()
{
    let seguir;
    do {
        cargarNombreEnLista();
        seguir = prompt('desea continuar? si/no');

    }while(seguir == 'si');

}

cargaDatos();
console.log(lista);


/////Quitando elementos de mi array
//// Pop() -> quita del FINAL del array
//// shift() -> quita del PRINCIPIO del array


let elementoQuitado = lista.shift();
console.log(elementoQuitado);
console.log(lista);

