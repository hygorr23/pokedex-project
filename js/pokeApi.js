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
                const pokemonInfo = newPokemon(details);
                return pokemonInfo;
            });
    });
    return Promise.all(promises);
}

pokeApi.getPokemonSearch = (pokemonSearch) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
            .then(response => response.json())
           
            
            
    }
