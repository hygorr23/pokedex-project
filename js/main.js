
const limit = 20;
const offset = 0;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

function pokeHtml(pokemon){
    return`<div class="cardPoke ${pokemon.typeMain.type.name+'Bg'}">
                        <div class="pokeImage">
                            <img src="${pokemon.imageBig}" alt="">
                        </div>
                        <div class="pokeName">
                            <h3>${pokemon.name}</h3>
                        </div>
                        <div class="pokeClass">
                            <ol>
                                ${pokemon.types.map(type => `<li class="${type.type.name}">${type.type.name}</li>`).join('')}
                            </ol>
                        </div>
                        <div class="pokeInfo">
                            <div class="info">
                                <h4>${pokemon.height} M</h4>
                                <p><i class="fa-solid fa-ruler"></i> altura</p>
                            </div>
                            <div class="info">
                                <h4>${pokemon.weight} KG</h4>
                                <p><i class="fa-solid fa-dumbbell"></i> peso</p>
                            </div>
                        </div>
                        <button class="detailsButton"><i class="fa-solid fa-bolt"></i>more details</button>

                </div>`
}



fetch(url).then((response) => response.json())
    .then((pokeList) => pokeList.results)
    .then((pokeList) => {
        pokeList.forEach(pokemons => {
            fetch(pokemons.url)
            .then((response) => response.json())
            .then((pokeData) => {
                const pokemon = new PokemonInfo();
                pokemon.name = pokeData.name;
                pokemon.order = pokeData.order;
                pokemon.types = pokeData.types;
                pokemon.typeMain = pokemon.types[0];
                pokemon.description = pokeData.description;
                pokemon.imageMove = pokeData.sprites.other.showdown.front_default;
                pokemon.imageDefault = pokeData.sprites.front_default;
                pokemon.imageBig = pokeData.sprites.other.dream_world.front_default;
                pokemon.weight = pokeData.weight;
                pokemon.height = pokeData.height;

                console.log(pokemon);
                const pokeCards = document.getElementById("cardList");
                pokeCards.innerHTML += pokeHtml(pokemon);
                console.log(pokeHtml(pokemon));
            })
        });
    })
    .catch((error) => console.error( error));

    class PokemonInfo {
        name;
        order;
        types;
        typeMain;
        description;
        imageMove;
        imageDefault;
        imageBig;
        weight;
        height;
    }

    