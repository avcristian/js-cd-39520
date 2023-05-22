const valores = [1, 7 , 8 , 11, 4, 2];

console.log(Math.max(3,2,1,4,6,5,10));


///usamos spread OPERATOR! -> ...
///vamos a separar el array y convertirlo en un conjunto de datos

///1 - Nos sirve para MATH ///Max, Min me piden un conjunto de datos

console.log(Math.max(...valores));
console.log(...valores);/// 1,7,8,11,4,2
console.log(valores); /// [1,7,8,11,4,2]
