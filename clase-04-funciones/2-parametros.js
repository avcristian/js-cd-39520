////usando parametros

function sumarUsandoParametros(a,b) {
    console.log(a + b);
}
///invocar - llamar a la funcion

sumarUsandoParametros(12,13);
sumarUsandoParametros(10,5);
sumarUsandoParametros(1,8);
sumarUsandoParametros('pepe','pablo');
sumarUsandoParametros();
sumarUsandoParametros(12);
 

let x,y;

x = 25;
y = 'pepe';

///podemos validar los datos para no enviar cualquier valor por parametro!

if (Number(x) && Number(y)) {
    sumarUsandoParametros(x,y);
}else {
    console.log('Datos invalidos!');
}


function saludar(nombre)
{
    console.log('hola como estas!' + nombre);
}


let nombrePersona = prompt('Ingrese su nombre');

saludar(nombrePersona);
saludar(nombrePersona);
