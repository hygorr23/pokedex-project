

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
const pokeCards = document.getElementById("cardList");

const pokemonList = pokeApi.getPokemons()
    .then(pokemons => pokeApi.getPokemonDetails(pokemons))
    .then(details => {
        console.log("Pokémons detalhados:", details);
        pokeCards.innerHTML = details.map(pokemon => pokeHtml(pokemon)).join('');
    })
    .catch(error => console.error("Erro ao buscar detalhes:", error));

        
        
    class PokemonInfo {
        name;
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

    