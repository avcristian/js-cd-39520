///ASINCRONIA

function decirHola() {
    console.log('hola');
}

function decirChau() {
    console.log('chau');
}

///secuencial
/* decirHola();
decirChau(); */

///SETTIMEOuT - funcion asincronica
/// se ejecuta en paralelo

/* console.log('viene el codigo ejecutando...');
setTimeout(decirHola, 3000); ///el tiempo que va a tardar en ejecutarse decirhola es de 3 segundos
console.log('Sigo haciendo otras cosas...');
///viene el codigo ejecutando...
///Sigo haciendo cosas....
///hola */

/* console.log('viene el codigo ejecutando...');
setTimeout(decirHola, 3000); ///el tiempo que va a tardar en ejecutarse decirhola es de 3 segundos
console.log('Sigo haciendo otras cosas...');
setTimeout(decirChau,2000); */

///que pasa si el tiempo es 0 ?


/* console.log('viene el codigo ejecutando...');
setTimeout(decirHola, 0); 
console.log('sigo haciendo cosas..');
console.log('otra sentencia despeus'); 

 */

///CALL STACK

function primeraFuncion() {
  segundaFuncion('Hola como va');
}

function segundaFuncion(texto) {
  terceraFuncion(texto);
}

function terceraFuncion(texto) {
    console.log(texto);
    console.log('chau');
}


primeraFuncion();


/* for (let letra of 'hola') {
    setTimeout(() => {
       console.log(letra); 
    }, 2000);
} */


////SetInterval
///Se ejecuta una funcion cada cierto intervalo de tiempo
////es una funcion ASINCRONICA

/* setInterval(() => {
    console.log('hola');
},2000);

setInterval(() => {
    console.log('como va');
},2000);
 */
//console.log('aca sigue el resto de mi codigo...');


///clear interval
/* const idInterval1 = setInterval(() => {
    console.log('hola');
},2000);

const idInterval2 = setInterval(() => {
    console.log('como va');
},2000);


setTimeout(() => {
    clearInterval(idInterval1);
}, 4000);

setTimeout(() => {
    clearInterval(idInterval2);
}, 3000); */


///EJEMPLO 

///simulamos una compra de entradas
/* let idTimeoutEntradas;
let idTimeoutCompra;

function compraEntradas(cantEntradas) {
    console.log(`Las ${cantEntradas} han sido reservadas, usted posee de 10 segundos para comprarlas`);
    idTimeoutEntradas = setTimeout(() => {
        console.log('Se termino el tiempo!, entradas liberadas');
        clearTimeout(idTimeoutCompra);
    }, 10000);
}

function realizarCompra() {
    console.log('Voy a comprar entradas!');
    idTimeoutCompra=setTimeout(() => {
        console.log('Ya me dio el abuelo la info de la tarjeta');
        console.log('Entradas compradas!');
        clearTimeout(idTimeoutEntradas);
        console.log('Gracias por su compra');
    }, 6000); ///simulo de que tardo 6 segundos en realizar la compra
    compraEntradas(3);
}

realizarCompra(); */
