///FUNCIONES DE ALTO ORDEN
///RETORNAN UNA ACCION

function Dios(accion) {
    return function (nombre) {
        console.log(nombre + ' esta ' + accion +',es un milagro!');
    } ///capacidad de hacer una accion (volar)
}


const elMilagro = Dios('volando'); ///me devuelve una funcion y se la almaceno a elMilagro

const elMilagro2 = Dios('hablando con los pajaritos');

 
///////////////////////////////////////////

 function asignarOperacion(operacion)
{
    if (operacion == 'sumar') {
        return function(a,b) { return a + b};
    }
    if (operacion == 'restar') {
        return (a,b) => { return a - b};
    }
}

const sumar = asignarOperacion('sumar'); // sumar = function(a,b) { return a + b};

console.log(sumar(5,3));
