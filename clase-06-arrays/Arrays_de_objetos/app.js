const pokemones = [];

pokemones.push(new Pokemon('Pikachu','electrico',1,'Ash','impactrueno',500,200));
pokemones.push(new Pokemon('Charmander','fuego',1,'Brock','llamarada',300,150));

///recorro el array de objetos con el for..of
for (pokemon of pokemones) {
    console.log(pokemon.nombre);
}

//pokemones.indexOf('Pikachu'); ///ya no nos sirve un metodo como este porque pikachu es un atributo del OBJETO

