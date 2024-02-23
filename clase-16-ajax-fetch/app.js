///hago un GET
///un fetch es una peticion a un servidor envuelta en una promesa


let posteos = [];

(fetch('https://jsonplaceholder.typicode.com/gatitos')
    .then((response) => {
        if (response.ok) {
            return response.json(); ///esto me devolvera el body con los objetos en javascript
        }else {
            throw new Error('Hubo un error en el servidor: ' + response.status);
        }
    }))
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => console.log(error));

 
///lectura de datos de un archivo local
///uso una ruta relativa
 fetch('./platos.json')
    .then((response) => {
        if (response.ok) {
            return response.json(); ///convierte los objetos de json a javascript
        } else {
            throw new Error('Hubo un error en el servidor: '+ response.status);
        }
    })
    .then((platos) => {
        ///aca dibujaria los platos en el html
        console.log(platos);
    })
    .catch((error) => {
        console.log('Disculpe, en este momento no podemos traerle los platos...');
    })


///hacemos un POST
const nuevoPost = { title: 'El titulo de mi post', body: 'Algo en el body', userId: 1};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(nuevoPost),
    headers: {
        'Content-type' : 'application/json; charset=UTF-8'
    }
})
    .then((response) => response.json())
    .then((objetoCreado) => console.log(objetoCreado));




