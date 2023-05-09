////1era forma de escuchar eventos
const boton = document.getElementById('boton');

/* boton.addEventListener('click', () => {
    alert('Me clickeaste!');
});
 */

///2da forma de escuchar eventos
const boton2 = document.getElementById('boton2');

/* boton2.onclick = function() {
    alert('Clickeaste otro boton!');
} */



///diferencia entre usar addEventListener y el evento como atributo.
const eventito = 'click';
const accion = () => {
    console.log('hola');
}

function escucharEvento(evento,accion) {
    boton.addEventListener(evento, accion );
}

escucharEvento(eventito,accion);

////jugando con los eventos

///eventos del mouse

boton.addEventListener('mousemove', () => {
    console.log('se ejecuto el evento');
});


////eventos del teclado

const input = document.getElementById('input1');

///escucha la presion de una tecla no importa si el input se modifica o no
/* input.addEventListener('keydown', () => {
    console.log('presionaste una tecla');
}); */


/* input.addEventListener('keyup', () => {
    console.log('soltaste una tecla');
}); */

///se ejecuta luego de dejar de hacer foco en el input y producir un cambio en el value 
/* input.addEventListener('change', () => {
    console.log('deje de hacer foco en el elemento');
}); */


//escucha modificacion del input al presionar una tecla
/* input.addEventListener('input', () => {
    console.log('ingreso un caracter');
}); */




