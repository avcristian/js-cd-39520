

///almacenamiento persistente en el navegador

///1) localStorage

////forma de almacenamiento persistente en disco local del usuari
///guardando un item
localStorage.setItem('Miclavecita', 'hola como va soy un valor');

///obtener un item
const itemClave = localStorage.getItem('Miclavecita');
console.log(itemClave);

localStorage.setItem('numerito', 3);
const numerito = localStorage.getItem('numerito');
console.log(numerito);


console.log(numerito + 7); ///devuelve 37

///el storage guarda todos los valores en formato STRING
////cuando lo obtenemos entonces... nos devolvera un string
///esto seria un problema si el valor que queremos almacenar.. no es un string


///2) sessionStorage
///tiene los mismos metodos y atributos que el localStorage
sessionStorage.setItem('token','ADJE4j5KXNm');
const token = sessionStorage.getItem('token');

///si yo cierro la pestana o el navegador, esa sesion se ACABA, entonces el storage de SESION se pierde (actualiza)



/***********remover elementos del localStorage/sessionStorage *********************/

///remuevo el item
localStorage.removeItem('numerito');

///////////////////////que pasa si una clave no existe?
localStorage.removeItem('numerito');

///y si obtenemos ahora numerito?
const numero = localStorage.getItem('numerito');

console.log(numero); ///me devuelve null

if (numero != null) {
    console.log('El numero es: ' +numero);
}else {
    console.log('No existe dicha clave');
}

/********ELIMINAR POR COMPLETO EL LOCALSTORAGE*************/
//localStorage.clear(); ////todas las claves seran eliminadas
//sessionStorage.clear();


/*****ALMACENAMIENTO DE UN ARRAY o UN OBJETO EN EL LOCAL/SESSION STORAGE ****/

const objetito = { nombre: 'pepe', edad: 25, email:'pepe@gmail.com'};

localStorage.setItem('profile', objetito);

const profile = localStorage.getItem('profile');
console.log(typeof profile);

const array = [2, 4 , 6 , 25 , objetito];

localStorage.setItem('arraycito', array);
const miArrayDesdeLocalStorage = localStorage.getItem('arraycito');
console.log(miArrayDesdeLocalStorage);


/// SI SOLO INTERPRETA STRINGS.... COMO HACEMOS???

///JSON -> STRING CON FORMATO , es decir, reglas sintacticas
////el navegador comprende el string con formato y sabe que es un json
///yo puedo enviarle objetos haciendole entender que ESO es un objeto en json

///COMO GUARDAMOS UN OBJETO EN FORMATO JSON??

const objetitoJson = '{"nombre": "pepe", "edad": 25, "email": "pepe@gmail.com"}'; ///objetitoJson

localStorage.setItem('objetitojson', objetitoJson);

/**HERRAMIENTAS DE CONVERSION JSON-OBJETO OBJETO-JSON ***/
////JSON.stringify(objeto) ///va a convertir A JSON mi objeto
///JSON.parse(objetoEnJSON) ///va a convertir DE JSON a un objeto en javascript

//const producto = {nombre:"arroz", precio:25.5};

//localStorage.setItem('producto', JSON.stringify(producto));

///obtenemos el objeto del localStorage
///el objeto esta almacenado en formato JSON
///tengo que convertir JSON -> OBJETO JAVASCRIPT

const miProducto = JSON.parse(localStorage.getItem('producto'));
console.log(miProducto.nombre);
console.log(miProducto.precio);


///GUARDANDO UN ARRAY EN EL LOCALSTORAGE


let productos = [];
/* productos.push(new Producto('cafe',600));
productos.push(new Producto('medialuna', 80));
productos.push(new Producto('tostado', 800));
productos.push(new Producto('muffin', 300));
productos.push(new Producto('Jugo Exprimido', 550));
productos.push(new Producto('Brownie',700));
productos.push(new Producto('cafe con leche', 600));
productos.push(new Producto('Submarino', 800));
productos.push(new Producto('Latte Vainilla',900));
productos.push(new Producto('Chocolatada',700)); */

//localStorage.setItem('productos', JSON.stringify(productos));

productos = JSON.parse(localStorage.getItem('productos'));
console.log(productos);
