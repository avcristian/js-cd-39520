////2- concatenar Arrays

 const array1 = [1,7,9, "pedro", "pablito"];
const array2 = ["miguelito", 7 , {nombre:"Mariano", edad: 25}, 18];

const array3 = array1.concat(array2);
console.log(array3);

///usando SPREAD

const arrayConcatenadoSpread = [...array1, "hola", ...array2];
console.log(arrayConcatenadoSpread); 
