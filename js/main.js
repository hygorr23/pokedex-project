let offset = 0;
const limit = 20;
let allPokemons = [];
const pokeCards = document.getElementById("cardList");
const detailsContainer = document.getElementsByClassName('headerPokeDetail')[0];
const buttonLoadMore = document.getElementById('loadMore');
const cardPokeInfo = document.getElementsByClassName('cardPoke');

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
                        <button class="detailsButton" data-id="${pokemon.id}"><i class="fa-solid fa-bolt"></i>more details</button>

                </div>`
}
function pokemonDetailsHtml(pokemon) {
    return `        <div class="pokeSelect">
                        <div class="detailSelect">
                            <h2>${pokemon.name}</h2>
                            <p>é um Pokémon elétrico, considerado o mais popular e reconhecível da franquia Pokémon. Ele é um roedor com bolsas nas bochechas, que armazena eletricidade, e tem um rabo em forma de raio. Pikachu é conhecido por seus ataques a distância com eletricidade, que às vezes podem paralisar o oponente. 
                            </p>
                        </div>
                        <div class="imagePoke">
                            <img src="${pokemon.imageBig}" alt="">
                        </div>
                        <div class="moreInfo">
                            <div class="information">
                                <h3>Informações</h3>
                                    <ol>
                                        ${pokemon.types.map(type => `<li class="${type.type.name}">${type.type.name}</li>`).join('')}
                                     </ol>
                                <div class="pokeInfoSelect">
                                    <div class="infoSelect">
                                    <h4><i class="fa-solid fa-ruler"></i> Altura</h4>
                                        <p>${pokemon.height} M</p>
                                    </div>
                                    <div class="infoSelect">
                                    <h4><i class="fa-solid fa-dumbbell"></i> Peso</h4>
                                        <p>${pokemon.weight} KG</p>
                                </div>
                        </div>
                            </div>
                            <div class="status">
                                <h3>Status</h3>
                                    <div class="statusItem">
                                        <h4>Hp</h4>
                                        <p>${pokemon.stats[0].base_stat}</p>
                                        <div class="barra-hp">
                                        <div class="preenchido" style="width: ${pokemon.stats[0].base_stat/1.3}%;"></div>
                                        </div>
                                    </div>
                                    <div class="statusItem">
                                        <h4>Atk.</h4>
                                        <p>${pokemon.stats[1].base_stat}</p>
                                        <div class="barra-hp">
                                        <div class="preenchido" style="width: ${pokemon.stats[1].base_stat/1.3}%;"></div>
                                        </div>
                                    </div>
                                    <div class="statusItem">
                                        <h4>Def.</h4>
                                        <p>${pokemon.stats[2].base_stat}</p>
                                        <div class="barra-hp">
                                        <div class="preenchido" style="width: ${pokemon.stats[2].base_stat/1.3}%;"></div>
                                        </div>
                                    </div>
                                    <div class="statusItem">
                                       <h4>Sp.Atk</h4>
                                        <p>${pokemon.stats[3].base_stat}</p>
                                        <div class="barra-hp">
                                        <div class="preenchido" style="width: ${pokemon.stats[3].base_stat/1.3}%;"></div>
                                        </div>
                                    </div>
                                    <div class="statusItem">
                                        <h4>Sp.Def</h4>
                                        <p>${pokemon.stats[4].base_stat}</p>
                                        <div class="barra-hp">
                                        <div class="preenchido" style="width: ${pokemon.stats[4].base_stat/1.3}%;"></div>
                                        </div>
                                    </div>
                                    <div class="statusItem">
                                        <h4>Speed</h4>
                                        <p>${pokemon.stats[5].base_stat}</p>
                                        <div class="barra-hp">
                                        <div class="preenchido" style="width: ${pokemon.stats[5].base_stat/1.3}%;"></div>
                                        </div>
                                    </div>
                            </div>

                        </div>
                    </div>
                            `;
}   
function loadPokemonCards(offset,limit) {
    pokeApi.getPokemons(offset,limit)
    .then(pokemons => pokeApi.getPokemonDetails(pokemons))
    .then(details => {
        allPokemons = allPokemons.concat(details); 
        pokeCards.innerHTML += details.map(pokemon => pokeCardHtml(pokemon)).join('');
        selectPokemonInfo(details);     
        console.log(details);  
    });
}
function showPokemonDetails(pokemon) {
    detailsContainer.innerHTML = pokemonDetailsHtml(pokemon);
};
function selectPokemonInfo() {
    document.querySelectorAll('.detailsButton').forEach((button) => {
        button.addEventListener('click', () => {
            const pokeId = button.getAttribute('data-id');
            const pokemon = allPokemons.find(p => p.id == pokeId);
            showPokemonDetails(pokemon);
        });
    });
}

loadPokemonCards(offset, limit);

buttonLoadMore.addEventListener('click', () => {
    offset += limit; 
    loadPokemonCards(offset, limit);
});

