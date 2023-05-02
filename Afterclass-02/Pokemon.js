class Pokemon {

    ///atributos
    nombre;
    tipo;
    nivel;
    entrenador;
    tipoAtaque;
    ataque;
    vida;
    precio; ///precio almacenara undefined ya que en el constructor no lo tengo

    ///constructor
    constructor(nombre,tipo,nivel,entrenador,tipoAtaque,vida,ataque) 
    {
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
        this.entrenador = entrenador;
        this.tipoAtaque = tipoAtaque;
        this.ataque = ataque;
        this.vida = vida;
    }

    ///comportamiento /metodos
    atacar = function(nombre) {
        console.log(this.nombre + ' ataca a ' + nombre + ' con un tipo de ataque de ' + this.tipoAtaque);
    };

    evolucionar = function(nombreEvolucionado, cantAtaque) {
        console.log(this.nombre + ' esta evolucionando...');
        this.nombre = nombreEvolucionado;
        this.ataque += cantAtaque;
        this.nivel++;
        console.log(`Ahora paso a llamarse ${nombreEvolucionado}`);
    };

    volverPokebola = () => {
        console.log(this.nombre + ' vuelve a la pokebola...');
    };

    recibirAtaque = (ataqueRecibido,atacante) => {
        console.log(`${this.nombre} recibe una cantidad de ataque ${ataqueRecibido} de ${atacante}`);
        this.vida = this.vida - ataqueRecibido;
        console.log(`Ahora su cantidad de vida es ${this.vida}`);
    };
}





