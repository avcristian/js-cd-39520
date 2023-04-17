////CONSTRUCTORES

///constructor de productos
function Producto(nom,precio,marca) {
    this.nombre = nom;
    this.precio = precio;
    this.marca = marca;
}

const producto1 = new Producto('Arroz',12.50,'Marolio');
console.log(producto1);
const producto2 = new Producto('Leche', 50.25 , 'Pipi');
console.log(producto2);

/////AGREGARLE COMPORTAMIENTO A MIS OBJETOS / ACCIONES / METODOS

function Pokemon(nombre,tipo,nivel,entrenador,tipoAtaque,vida,ataque)
{
    ////atributos /caracteristicas / propiedades
    this.nombre = nombre;
    this.tipo = tipo;
    this.nivel = nivel;
    this.entrenador = entrenador;
    this.tipoAtaque = tipoAtaque;
    this.ataque = ataque;
    this.vida = vida;

    ////comportamiento/acciones/metodos

    this.atacar = function(nombre) {
        console.log(this.nombre + ' ataca a ' + nombre + ' con un tipo de ataque de ' + this.tipoAtaque);
    }

    this.evolucionar = function(nombreEvolucionado, cantAtaque) {
        console.log(this.nombre + ' esta evolucionando...');
        this.nombre = nombreEvolucionado;
        this.ataque += cantAtaque;
        this.nivel++;
        console.log(`Ahora paso a llamarse ${nombreEvolucionado}`);
    }

    this.volverPokebola = () => {
        console.log(this.nombre + ' vuelve a la pokebola...');
    }

    this.recibirAtaque = (ataqueRecibido,atacante) => {
        console.log(`${this.nombre} recibe una cantidad de ataque ${ataqueRecibido} de ${atacante}`);
        this.vida = this.vida - ataqueRecibido;
        console.log(`Ahora su cantidad de vida es ${this.vida}`);
    }

} 

const pokemon1 = new Pokemon('Pikachu','electrico',1,'Ash','impactrueno',500,200);
const pokemon2 = new Pokemon('Charmander','fuego',1,'Brock','llamarada',300,150);

///console.log(pokemon1);

pokemon1.atacar(pokemon2.nombre);
pokemon2.recibirAtaque(pokemon1.ataque,pokemon1.nombre);
pokemon1.volverPokebola();

pokemon2.evolucionar('charizard',100);
pokemon2.atacar(pokemon1.nombre);
pokemon1.recibirAtaque(pokemon2.ataque,pokemon2.nombre);

console.log(pokemon2);
pokemon2.precio = 200;
console.log(pokemon2);