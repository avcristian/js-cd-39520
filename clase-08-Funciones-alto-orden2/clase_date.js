////CLASE DATE

console.log(new Date(1998,3,17));
console.log(new Date('April 17, 1998')); ///puedo escribirlo en formato String siguiendo reglas

const fechaDeHoy = new Date();
console.log(fechaDeHoy.getDate()); ///devuelve numero del mes
console.log(fechaDeHoy.getDay());  ///devuelve numero de la semana (1 al 7)
console.log(fechaDeHoy.getMonth()); ///obtiene el indice del mes
console.log(fechaDeHoy.getUTCDate()); ///en UTC
console.log(fechaDeHoy.getTime()); ///milisegundos
console.log(fechaDeHoy.getHours());

///con to. ... formateo al string que quiero que me devuelva

console.log(fechaDeHoy.toLocaleDateString());
console.log(fechaDeHoy.toLocaleString());
console.log(fechaDeHoy.toISOString()); ///este se usa para almacenamiento e interpretacion de las fechas en cualquier lenguaje

///pueden aplicar diferencias entre fechas (les devolvera en milisegundos) pero... no se los recomiendo
//utilizaremos una libreria denominada Luxon que nos resolvera esto en simplemente una llamada a un metodo.




