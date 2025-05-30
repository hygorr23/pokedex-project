const pokeApi = {};

pokeApi.getPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    return fetch(url)
        .then(response => response.json())
        .then(pokeList => pokeList.results);
};

pokeApi.getPokemonDetails = (pokemons) => {
    const promises = pokemons.map(pokemon => {
        return fetch(pokemon.url)
            .then(response => response.json())
            .then(details => {
                const pokemonInfo = new PokemonInfo();
                pokemonInfo.name = details.name;
                pokemonInfo.id = details.id;
                pokemonInfo.order = details.order;
                pokemonInfo.types = details.types;
                pokemonInfo.typeMain = details.types[0];
                pokemonInfo.stats = details.stats;
                pokemonInfo.imageMove = details.sprites.versions['generation-v']['black-white'].animated.front_default;
                pokemonInfo.imageDefault = details.sprites.front_default;
                pokemonInfo.imageBig = details.sprites.other.dream_world.front_default;
                pokemonInfo.weight = details.weight / 10; // Convert to kg
                pokemonInfo.height = details.height / 10; // Convert to m
                return pokemonInfo;
            });
    });
    return Promise.all(promises);
}


