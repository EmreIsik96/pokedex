let pokemonData = [];

async function loadPokedex()
{
    for (let i = 1; i < 20; i++) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        responseAsJson = await response.json();
        pokemonData.push(responseAsJson);
    }
    renderPokemonData()
}

function renderPokemonData()
{   
    for (let j = 0; j < pokemonData.length; j++) {
            let pokemonName = capitalizeFirstLetter(pokemonData[j]['name']);
            let pokemonType = pokemonData[j]['types'][0]['type']['name'];
            let content = document.getElementById('content');
                content.innerHTML += `<div class="card">${pokemonName}
                                            <div id=bgCardsID><img class="mainImagesOfPokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${j +1}.png"></div>    
                                            <div>${pokemonType}</div>
                                        </div>`;
        
        
        
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*function backgroundColorOfCards(pokemonType)
{
    if (pokemonType == ('water')) {
        document.getElementById('bgCardsID').classList.add('water');
    }
}*/