
//////Iterando sobre una lista

const listaConDatos = ['pepe', 'pablo', 'Sara']; ///una lista con datos

for (let i = 0; i < lista.length ; i++)
{
    console.log(lista[i]); ///muestro un string
}

//console.log(lista); ///muestro un objeto


let texto = '';

for (let i = 0; i < lista.length ; i++)
{
    texto = texto + lista[i] + ' '; ///concateno cada string
}