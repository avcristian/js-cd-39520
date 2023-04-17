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