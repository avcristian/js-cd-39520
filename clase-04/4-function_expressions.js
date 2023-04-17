///EXPRESIONES DE FUNCION
///se asignan como si fuese una variable

const saludar2 = function() {
    console.log('Hola!!!!');
}

saludar2();


const sumarUsandoParametros2 = function(a,b) {
return a + b;
}

let resultado = sumarUsandoParametros2(12,3);
console.log(resultado); 

/////ARROW FUNCTIONS
////funcion anonima//expresion de funcion

const saludar4 = () => {
    console.log('hola como va!');
}

const sumar2Numeros = (a,b) => {
    return a + b;
}

saludar4();

let result = sumar2Numeros(2,3);
