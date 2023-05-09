////los Strings son objetos -> array de caracteres
//tiene metodos
//tiene atributos
///-> length -> cantidad de caracteres que posee un string;

const unString = 'supercalifrastilicuespialidoso';
console.log(unString.length); ////cuantos caracteres posee mi string

///metodos
///trim() //// agregar ejemplo ---


///replace()
///me reemplaza un caracter o grupo de caracteres por lo que desee
///devuelve un nuevo string -> no afecta el nuestro
const regex = /a/g;
const otroString = unString.replace(regex,'mono'); ///me reemplaza la primera ocurrencia
console.log(otroString);
///si yo quisiese que reemplace mas de una 'a' o que reemplace algunas de ellas, o que siga algun patron
///debo usar lo que se denomina expresion regular (regEx)

