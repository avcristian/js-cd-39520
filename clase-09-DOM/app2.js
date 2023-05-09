////Elementos del DOM
console.log(document);
console.log(document.body);
console.log(document.head);

console.log(document.URL); ///el path donde esta mi documento
console.log(document.contentType);

console.dir(document.body);
console.log(document.links); ///me muestra todos los href
console.log(document.scripts);


///ACCEDER A ALGUN ELEMENTO DEL DOM

///obtener un elemento por su ID
///voy a partir desde la raiz

///si encuentra el elemento me lo retorna, de lo contrario devolvera 'null'

const miH1 = document.getElementById('heading');
console.log(miH1);
miH1.textContent = 'My shopping Cart';

///puedo cambiar los atributos de los estilos CSS de mi objeto
//miH1.style.color = 'red';

///ver las clases de mi H1
console.log(miH1.classList); ///es un array

///le agrego una nueva clase
const validacion = true;

if (validacion) {
    miH1.classList.remove('danger');
    miH1.classList.add('Meli');
}else{
    miH1.classList.remove('Meli');
    miH1.classList.add('danger');
}

///le quito una clase
//miH1.classList.remove('text-center');


/////OTRAS FORMAS DE OBTENER ELEMENTOS

///2 - POR NOMBRE DE CLASE
///si no hay ningun elemento con esa clase, sera un array vacio

const elementos = document.getElementsByClassName('Meli'); ///siempre me va a devolver un array

if (elementos.length > 0) {
    console.log(elementos);
}

elementos[1].textContent = 'Hola';
elementos[1].classList.add('bg-danger');

///3 - POR NOMBRE DE TAG
///me devuelve un array

const divs = document.getElementsByTagName('div'); ////me va a traer todos los divs

if (divs.length > 0 ) {
    console.log(divs);
    console.log(divs[0].children); ///puedo ver los hijos de mi div
    console.log(divs[0].innerHTML); ///veo el contenido HTML de mi div
    ///innerHTML es un string que basicamente es el codigo HTML
}

divs[0].innerHTML = ``;









