////OBJETO MATH
///Es nativo del lenguaje, simplemente lo utilizamos

///atributos
console.log(Math.PI);
console.log(Math.E);

///metodos
const array = [25,17,13,12,1,20];

/* 

////EJERCICIO PARA LA CLASE 13!
//// -> destructuring en arrays
///--> aplicar en este ejemplo destructuring en arrays
///Math.min('ARRAY DESTRUCTURADO');

 */
///metodos para devolver el minimo o maximo de un conjunto de valores
///mas adelante veremos algo denominado destrucutring, que nos va a permitir 'poner' un array en ese metodo
console.log(Math.min(25,72,15,11,12,1)); /// 1
console.log(Math.max(12,15,70,25,12,73,93)); //93


/////Metodos de redondeo
////CEIL -> nos devuelve el entero por encima de nuestro numero flotante
/// fLOOR -> nos devuelve el entero cercano por debajo de nuestro numero flotante
/// ROUND -> nos devuelve el entero mas cercano a nuestro valor numero flotante -> honesto

console.log(Math.ceil(3.55)); ///4
console.log(Math.floor(3.55)); ///3
console.log(Math.round(3.55)); ///4

///Haciendo raices cuadradas usando Math

console.log(Math.sqrt(3));
console.log(Math.sqrt(4));
console.log(Math.sqrt(-3)); ///NaN -> no trabaja con el conjunto de numeros imaginarios


///Utilizando valores al azar

console.log(Math.random());

///Quiero establecer un rango para mis valores al azar

///ej: quiero que mi numero al azar sea un valor entre 1 y 6 (un dado)

///estableciendo limite inferior
let valorAzar = Math.random() + 50; /// le establezco un limite inferior (desde que numero comienza)
//console.log(valorAzar);

///ahora que tengo el limite inferior, decido el superior

///Math.random()*(LIMITE_SUPERIOR - LIMITE_INFERIOR) + LIMITE_INFERIOR;
let valorAzar2 = Math.random()*(6 - 1) + 1;
console.log(valorAzar2);

///redondeamos con round para que nos devuelva el entero mas cercano a ese valor
valorAzar2 = Math.round(valorAzar2);
console.log(valorAzar2);

