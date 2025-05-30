let offset = 0;
const limit = 20;
const pokeCards = document.getElementById("cardList");
const detailsContainer = document.getElementsByClassName('headerPokeDetail')[0];
const buttonLoadMore = document.getElementById('loadMore');

function pokeCardHtml(pokemon){
    return`<div class="cardPoke ${pokemon.typeMain.type.name+'Bg'}">
                        <div class="order">
                            <p ># ${pokemon.id}</p>
                        </div>
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
function pokemonDetailsHtml(pokemon) {
    return `<div class="headerPoke">
                    <div class="pokeSelect">
                        <div class="detailSelect">
                            <h2>${pokemon.name}</h2>
                            <p>é um Pokémon elétrico, considerado o mais popular e reconhecível da franquia Pokémon. Ele é um roedor com bolsas nas bochechas, que armazena eletricidade, e tem um rabo em forma de raio. Pikachu é conhecido por seus ataques a distância com eletricidade, que às vezes podem paralisar o oponente. 
                            </p>
                            </div>
                        <img src="${pokemon.imageBig}" alt="">
                        <div class="moreInfo">
                            <div class="information">
                                <h3>Informações</h3>
                                <ol>
                                ${pokemon.types.map(type => `<li class="${type.type.name}">${type.type.name}</li>`).join('')}
                                </ol>
                                <div class="">
                                    <p><span>Altura:</span> 0.4 m</p>
                                    <p><span>Peso:</span> 6.0 kg</p>
                                    <div class="pokeClass">
                           
                                    </div>
                                </div>
                            </div>
                            <div class="status">
                                <h3>Status</h3>
                                <div class="statusItem">
                                    <h4>HP</h4>
                                    <p>69</p>
                                    <div class="barra-hp">
                                        <div class="preenchido" style="width: 50%;"></div>
                                    </div>
                                </div>
                                 <div class="statusItem">
                                    <h4>Atk.</h4>
                                    <p>69</p>
                                    <div class="barra-hp">
                                        <div class="preenchido" style="width: 50%;"></div>
                                    </div>
                                </div>
                                 <div class="statusItem">
                                    <h4>Def.</h4>
                                    <p>69</p>
                                    <div class="barra-hp">
                                        <div class="preenchido" style="width: 50%;"></div>
                                    </div>
                                </div>
                                 <div class="statusItem">
                                    <h4>hp</h4>
                                    <p>69</p>
                                    <div class="barra-hp">
                                        <div class="preenchido" style="width: 50%;"></div>
                                    </div>
                                </div>
                                 <div class="statusItem">
                                    <h4>hp</h4>
                                    <p>69</p>
                                    <div class="barra-hp">
                                        <div class="preenchido" style="width: 50%;"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>`;
}   
function loadPokemonCards(offset,limit) {
    pokeApi.getPokemons(offset,limit)
    .then(pokemons => pokeApi.getPokemonDetails(pokemons))
    .then(details => {
        pokeCards.innerHTML += details.map(pokemon => pokeCardHtml(pokemon)).join('');
        showPokemonDetails(details[0]); // Exibe os detalhes do primeiro Pokémon inicialmente
    });
}
function showPokemonDetails(pokemon) {
    

    detailsContainer.innerHTML = pokemonDetailsHtml(pokemon);
}
loadPokemonCards(offset, limit);

buttonLoadMore.addEventListener('click', () => {
    offset += limit; 
    loadPokemonCards(offset, limit);
});
