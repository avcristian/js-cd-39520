////PROMISES


/* const saludo = new Promise((resolve,reject) => {
    setTimeout(() => {
        //resolve('Buenos dias!'); ////voy a mandar al estado de fullfilled la promesa y le mando el mensaje 'buenos dias'
        reject('Algo salio mal..');
    }, 3000);
});

console.log(saludo);
setTimeout(() => {
    console.log(saludo);
}, 4000); */


///peticion a servidor

function peticionServidor() {
    return false; ///todo esta mal
}


const miPromesa = new Promise((resolve, reject) => {
    console.log('Hacemos una peticion a un servidor para que nos traiga informacion de gatitos');
    setTimeout(() => {
        let respuestaPeticion = peticionServidor();
        if (respuestaPeticion === true) {
            resolve([{nombre: 'gatito', raza: 'atigrado'}, {nombre: 'gatito2', raza:'blanquito'}]); ///la promesa pasa a fullfilled 
        }else {
            reject('404 not found'); ///la promesa pasara a rejected
        }
    }, 3000);
});

console.log(miPromesa);
miPromesa
    .then((gatitos) => { ///el then espera a que se resuelva la promesa -> fullfilled
        console.log(miPromesa);
        alert(gatitos);
    })
    .catch((error) => { ///el catch captura la promesa que fue rejected
        console.log(miPromesa);
        console.log('Hubo un error: '+error);
    })
    .finally(() => { //espera a que la promesa deje de estar en pending
        console.log('esto lo muestro igual, no importa si la promesa fue rechazada o fullfilled');
    })

    console.log('hola');