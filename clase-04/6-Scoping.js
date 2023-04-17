/////SCOPE

///ambito global
///esta hoja de documento es el ambito global
 let variableGlobal = 5; /// global

///de adentro hacia afuera puedo utilizar las variables
///de afuera hacia adentro no pueden utilizar ninguna variable
function mostrarDato()
{
    ///ambito de la funcion ///local
    let variableLocal = 3; /// local a la funcion
    console.log(variableLocal);
    console.log('variable global dentro de mostrarDato: ' +variableGlobal);
}

mostrarDato();
//console.log('variableGlobal: ' +variableGlobal);
console.log('variable local a mostrarDato: ' +variableLocal);


 ///////ejemplo utilizando una variable global

let numero = 5;

function imprimirNumero()
{
    numero = 3;
    console.log(numero);
}

imprimirNumero(); /// 3
console.log(numero); /// 3


/////////////////ejemplo declarando la variable dentro de la funcion

let numero2 = 5;


function imprimirNumero()
{
    let numero2 = 3;
    console.log(numero2);
}

imprimirNumero(); /// 3
console.log(numero2); /// 5 