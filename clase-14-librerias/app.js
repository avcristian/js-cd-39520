const boton = document.querySelector('#boton');

boton.onclick = () => {
    Swal.fire(
        {
            title: 'Este es el titulo',
            text: 'Esto es un mensaje en un alert',
            icon: 'success'
        }
    );
}

////login de usuario
////plantearnos la idea de hacerlo funcionar como un prompt

const otroBoton = document.getElementById('otroboton');

let nombreUsuario = null;
let pass = null;

otroBoton.onclick = () => {
    Swal.fire({
        title: 'Login',
        text: 'Ingrese su mail de login',
        input: 'email',
        inputPlaceholder: 'Pepe@pepe.com',
        confirmButtonText: 'Enviar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
    }).then((resultado) => { ///una vez que el usuario ingreso el valro en el prompt y apreto algun boton
        console.log(resultado);
        if (resultado.isConfirmed) { //apreto el boton enviar?
            nombreUsuario = resultado.value; ///me llevo el valor del input
            Swal.fire({
                title: 'Password',
                text: 'Ingrese su password',
                input: 'password',
                confirmButtonText: 'Enviar',
                showCancelButton: true,
                cancelButtonText: 'Me arrepenti'
            }).then((resultado) => {
                if (resultado.isConfirmed) {
                    pass = resultado.value;
                    if (pass === '') { ///si el password esta vacio
                        Swal.fire({
                            title: 'El pass es invalido',
                            icon: 'error'
                        });
                    } else {
                        Swal.fire({
                            title: 'Ingreso de usuario Exitoso!',
                            icon: 'success'
                        });
                    }
                }

            })
        }
    });


}

const botonToast = document.querySelector('#boton-toast');

botonToast.onclick = () => {
    Toastify({
        text: "This is a toast",
        duration: 5000,
        close: true,
        gravity: 'top',
        position: 'center',
        stopOnFocus: true,
        style : {
            background: "linear-gradient(to right, #00b09b, #96c93d)"
        },
        onClick: function() {
            Swal.fire({ title: 'Hola soy el sweetalert!'});
        }
        }).showToast();
}
