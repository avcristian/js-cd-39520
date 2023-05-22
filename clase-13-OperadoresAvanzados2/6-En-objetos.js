////6 - Spread en Objetos

let numerito1 = 5;
let numerito2 = numerito1; 

///ojo con la copia de objetos
let producto1 = {nombre: 'Sal', precio: 250};

let producto2 = producto1; ///producto2 apunta a la misma ubicacion que esta producto1

producto2.precio = 15000;
console.log(producto1);

///Aplico spread sobre objetos // shallow cloning

let producto3 = {...producto1}; ///hice realmente una copia de producto1 ///shallow cloning
console.log(producto3);
producto3.precio = 250000;
console.log(producto1);
console.log(producto3);


///puedo agregar atributos

let producto4 = {...producto1, marca: 'Pepito'};
console.log(producto4);

