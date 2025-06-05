 class PokemonInfo {
        name;
        id;
        order;
        types;
        typeMain;
        imageMove;
        imageDefault;
        imageBig;
        weight;
        height;
        stats;
    }

function newPokemon(listPokemon){
    const pokemonInfo = new PokemonInfo();
                pokemonInfo.name = listPokemon.name;
                pokemonInfo.id = listPokemon.id;
                pokemonInfo.order = listPokemon.order;
                pokemonInfo.types = listPokemon.types;
                pokemonInfo.typeMain = listPokemon.types[0];
                pokemonInfo.stats = listPokemon.stats;
                pokemonInfo.imageMove = listPokemon.sprites.versions['generation-v']['black-white'].animated.front_default;
                pokemonInfo.imageDefault = listPokemon.sprites.front_default;
                pokemonInfo.imageBig = listPokemon.sprites.other.dream_world.front_default;
                pokemonInfo.weight = listPokemon.weight / 10; // Convert to kg
                pokemonInfo.height = listPokemon.height / 10; // Convert to m
                return pokemonInfo;
}