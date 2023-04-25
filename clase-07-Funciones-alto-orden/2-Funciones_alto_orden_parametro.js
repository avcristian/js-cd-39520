///FUNCION QUE RECIBE COMO PARAMETRO UNA ACCION

const miArray1 = [ 'Pablo', 'Pepe', 'Pachu', 'Jimeno'];

function porCadaUno(array,accion)
{
    for (const elemento of array) {
        accion(elemento); ///alert('pablo') ///alert('Pepe') ///alert('Pachu') ///alert('Jimeno')
    }
}

porCadaUno(miArray1,alert);

 
const miArray = [ 25.5, 17.20, 40.25, 10];
const otroArray = [ 'Pablo', 'Pepe', 'Pachu', 'Jimeno'];
let total = 0;

function porCadaUno(array,accion)
{
    for (const elemento of array) {
        accion(elemento); ///suma(25,5) /// suma(17.2) ///suma(40.25)
    }
}

function suma(valor) {
    total = total + valor;
}

porCadaUno(miArray,suma);
console.log(total);


porCadaUno(otroArray,console.log);

