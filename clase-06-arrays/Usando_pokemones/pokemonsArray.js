let pokemons = [];

async function retrievePokemons() {
    const jsonResponse = await fetch('https://pokeapi.co/api/v2/pokemon/')
    return jsonResponse.json();
}

const showPokemons = async () => {
   const body = await retrievePokemons();

   body?.results.forEach( async (item) => {
        const pokemon = await retrieveAPokemon(item.url);
        pokemons.push(pokemon);
   });
   console.log(pokemons);
}

async function retrieveAPokemon(url) {
    const jsonResponse = await fetch(`${url}`);
    return jsonResponse.json();
}




