////objetos de mi programa
const cuentas = [];
const LIMITE_EXT = 500; ///limite de extraccion para los usuarios


///trabajamos con el 1er formulario

///1 - obtenemos los elementos del dom
const inputTitular = document.getElementById('titular');
const inputContacto = document.getElementById('contacto');
const inputSaldo = document.getElementById('saldo');
const btnRegistrar = document.getElementById('registrar');
const formRegistro = document.getElementById('form-registrar');

///2 agregamos el escuchador del boton

btnRegistrar.addEventListener('click', (evento) => {
    evento.preventDefault(); ///prevengo de que se envie el formulario
    if (validarCamposVacios()) {
        registrarUsuario();
        alert('Usuario registrado!, bienvenido');
        limpiarFormulario(formRegistro);
    }else {
        alert('No se pudo registrar el usuario');
    }
});

///todo input nos trae de value un tipo string
function registrarUsuario() {
    const nuevaCuenta = new Cuenta(inputTitular.value, inputContacto.value,+inputSaldo.value,LIMITE_EXT);
    cuentas.push(nuevaCuenta);
}

function validarCamposVacios() {
    return inputTitular.value !== '' && inputContacto.value !== '' && inputSaldo.value !== '';
}

function limpiarFormulario(form) {
    form.reset(); ///resetea el formulario - limpia los campos
}