let pokemonData = [];
let filteredData = [];
let currentOffset = 40;
const limit = 20;
let currentIndex = 0; // Index des aktuell angezeigten Pokemon

async function loadPokedex() {
  showLoadingSpinner();
  for (let i = 1; i <= currentOffset; i++) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let responseAsJson = await response.json();
    pokemonData.push(responseAsJson);
  }
  renderPokemonData();
  hideLoadingSpinner();
}

function renderPokemonData() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  if (filteredData.length === 0) {
    for (let j = 0; j < pokemonData.length; j++) {
      let pokemonID = pokemonData[j]["id"];
      let pokemonImage = pokemonData[j]["sprites"]["other"]["home"]["front_default"];
      let pokemonName = capitalizeFirstLetter(pokemonData[j]["name"]);
      let pokemonType1 = pokemonData[j]["types"][0]["type"]["name"];
      let pokemonType2 = pokemonData[j]["types"].length > 1 ? pokemonData[j]["types"][1]["type"]["name"]: "";

      // POKEMON STATS //
      let pokemonStatsHp = pokemonData[j]["stats"][0]["base_stat"];
      let pokemonStatsAttack = pokemonData[j]["stats"][1]["base_stat"];
      let pokemonStatsDefense = pokemonData[j]["stats"][2]["base_stat"];
      let pokemonStatsSpecialAttack = pokemonData[j]["stats"][3]["base_stat"];
      let pokemonStatsSpecialDefense = pokemonData[j]["stats"][4]["base_stat"];
      let pokemonStatsSpecialSpeed = pokemonData[j]["stats"][5]["base_stat"];

      content.innerHTML += renderPokemonDataTemplate(
        j,
        pokemonType1,
        pokemonType2,
        pokemonID,
        pokemonName,
        pokemonImage,
        pokemonStatsHp,
        pokemonStatsAttack,
        pokemonStatsDefense,
        pokemonStatsSpecialAttack,
        pokemonStatsSpecialDefense,
        pokemonStatsSpecialSpeed
      );
    }
  } else {
    showFilteredData();
  }
}

function showAttributes(
  index,
  pokemonType1,
  pokemonType2,
  pokemonID,
  pokemonName,
  pokemonImage,
  pokemonStatsHp,
  pokemonStatsAttack,
  pokemonStatsDefense,
  pokemonStatsSpecialAttack,
  pokemonStatsSpecialDefense,
  pokemonStatsSpecialSpeed,
  isFiltered = false
) {
  currentIndex = index; // Speichere den Index des angezeigten Pokémon
  isFilteredData = isFiltered;

  document.getElementById("attributesMainContainerID").classList.toggle("d-none");
  document.getElementById("showAttributesID").classList.toggle("d-none");
  document.getElementById("blurForAllContainer").classList.toggle("blur");

  let showAttributesFromPokemon = document.getElementById("showAttributesID");
  showAttributesFromPokemon.innerHTML = showAttributesFromPokemonTemplate(
    pokemonType1,
    pokemonID,
    pokemonName,
    pokemonImage,
    pokemonType2,
    pokemonStatsHp,
    pokemonStatsAttack,
    pokemonStatsDefense,
    pokemonStatsSpecialAttack,
    pokemonStatsSpecialDefense,
    pokemonStatsSpecialSpeed
  );
}

function hideAttributes() {
  document.getElementById("attributesMainContainerID").classList.toggle("d-none");
  document.getElementById("showAttributesID").classList.toggle("d-none");
  document.getElementById("blurForAllContainer").classList.toggle("blur");
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function searchName() {
  let input = document.getElementById("inputID").value.toLowerCase();
  if (input.length > 0) {
    if (isNaN(input)) { filteredData = pokemonData.filter((pokemonData) => pokemonData["name"].toLowerCase().startsWith(input));
    } else {
      filteredData = pokemonData.filter((pokemonData) => pokemonData["id"] == input);
    }
    renderPokemonData();
  } else {
    filteredData = [];
    renderPokemonData();
  }
}

async function loadMorePokemon() {
  showLoadingSpinner();
  for (let i = currentOffset + 1; i <= currentOffset + limit; i++) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let responseAsJson = await response.json();
    pokemonData.push(responseAsJson);
  }
  renderPokemonData();
  hideLoadingSpinner();
  currentOffset += limit;
}

function disableScroll() {
  document.body.classList.add("remove-scrolling");
}

function enableScroll() {
  document.body.classList.remove("remove-scrolling");
}

function showLoadingSpinner() {
  document.getElementById("loadingSpinnerContainerID").classList.remove("d-none");
  document.getElementById("loadingSpinnerID").classList.remove("d-none");
  document.getElementById("loadingSpinnerContainerID").classList.add("p-fixed");
  document.getElementById("loadingSpinnerID").classList.add("p-fixed");
  document.getElementById("blurForAllContainer").classList.add("d-none");
  document.getElementById("loadingSpinnerID").classList.add("centerLoadingScreen");
}

function hideLoadingSpinner() {
  document.getElementById("loadingSpinnerContainerID").classList.remove("d-none");
  document.getElementById("loadingSpinnerID").classList.add("d-none");
  document.getElementById("loadingSpinnerContainerID").classList.remove("p-fixed");
  document.getElementById("loadingSpinnerID").classList.remove("p-fixed");
  document.getElementById("blurForAllContainer").classList.remove("d-none");
  document.getElementById("loadingSpinnerID").classList.remove("centerLoadingScreen");
}

function previousImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = isFilteredData ? filteredData.length - 1: pokemonData.length - 1;
  }
  showAttributesFromIndex(currentIndex);
}

function nextPicture() {
  currentIndex++;

  if (currentIndex >= (isFilteredData ? filteredData.length : pokemonData.length)) {
    currentIndex = 0;
  }
  showAttributesFromIndex(currentIndex);
}

function showAttributesFromIndex(index) {
  let pokemon = isFilteredData ? filteredData[index] : pokemonData[index];
  showAttributes(
    index,
    pokemon["types"][0]["type"]["name"],
    pokemon["types"].length > 1 ? pokemon["types"][1]["type"]["name"] : "",
    pokemon["id"],
    capitalizeFirstLetter(pokemon["name"]),
    pokemon["sprites"]["other"]["home"]["front_default"],
    pokemon["stats"][0]["base_stat"],
    pokemon["stats"][1]["base_stat"],
    pokemon["stats"][2]["base_stat"],
    pokemon["stats"][3]["base_stat"],
    pokemon["stats"][4]["base_stat"],
    pokemon["stats"][5]["base_stat"],
    isFilteredData
  );
}
