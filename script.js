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
            let typesCheckPokemon = pokemonData[j]['types'];
            let pokemonType1 = pokemonData[j]['types'][0]['type']['name'];
            let pokemonType2 = checkType(typesCheckPokemon, j);
            console.log(pokemonType2);
            let content = document.getElementById('content');
                content.innerHTML += `<div class="card ${pokemonType1}">
                                            <div class=nameOfPokemon>${pokemonName}</div>
                                            <div id=bgCardsID${j}><img class="mainImagesOfPokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${j +1}.png"></div>    
                                            
                                            <div class="typeMainContainer">
                                                <div class="typeClass">${pokemonType1}</div>
                                                <div id="type2" class="typeClass">${pokemonType2}</div>
                                            </div>
                                    </div>`;       
    }
}

function checkType(typesCheckPokemon, j)
{
    let pokemonType2 = '';
    if (typesCheckPokemon.length > 1) 
        {
            pokemonType2 = pokemonData[j]['types'][1]['type']['name'];
        } 
    return pokemonType2;
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function backgroundColorOfCards(pokemonType)
{
    if (pokemonType == ('water')) {
        document.getElementById().classList.add('water');
    }
    if  (pokemonType == ('grass')) {
        document.getElementById().classList.add('water');
    }
}

function loadMorePokemon(i) {
    i + 20;
}