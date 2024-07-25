let pokemonData = [];
let filteredData = [];
let currentOffset = 0;
const limit = 20;

function init() {
  filteredData = pokemonData;
  renderPokemonData();
}

async function loadPokedex() {
  for (let i = 1; i < 20; i++) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    responseAsJson = await response.json();
    pokemonData.push(responseAsJson);
  }
  renderPokemonData();
}

function renderPokemonData() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  if (filteredData == '') 
    {
    for (let j = 0; j < pokemonData.length; j++) {
        let pokemonID = pokemonData[j]["id"];
        let pokemonName = capitalizeFirstLetter(pokemonData[j]["name"]);
        let typesCheckPokemon = pokemonData[j]["types"];
        let pokemonType1 = pokemonData[j]["types"][0]["type"]["name"];
        let pokemonType2 = checkType(typesCheckPokemon, j);
        content.innerHTML += `<div class="card ${pokemonType1}">
                                    <div class=nameOfPokemon>#${pokemonID} ${pokemonName}</div>
                                    <div> <img class="mainImagesOfPokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${j + 1}.png"></div>    
                                    <div class="typeMainContainer">
                                        <div class="type1Class">${pokemonType1}</div>
                                        <div id="type2">${pokemonType2}</div>
                                    </div>
                            </div>`;
        }
     }
     else
     {
        showFilteredData();
     }

}

function checkType(typesCheckPokemon, j) {
  let pokemonType2 = "";
  if (typesCheckPokemon.length > 1) {
    pokemonType2 = `<div class="type2Class">${pokemonData[j]["types"][1]["type"]["name"]}</div>`;
  }
  return pokemonType2;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function searchName(j) {
  let input = document.getElementById("inputID").value.toLowerCase();
  if (input.length >= 3) {
    filteredData = pokemonData.filter((pokemonData) =>pokemonData["name"].toLowerCase().startsWith(input));
    document.getElementById("content").innerHTML = ""; // Clear previous results
    renderPokemonData();
  }
  else if(input.length === 0)
  {
        filteredData.splice(j);
        renderPokemonData();
  }
}

async function loadMorePokemon() {
  for (let i = currentOffset + 1; i <= currentOffset + limit; i++) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let responseAsJson = await response.json();
    pokemonData.push(responseAsJson);
  }
  renderPokemonData(pokemonData);
  currentOffset += limit;
}
