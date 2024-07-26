function showFilteredData() {
    let content = document.getElementById("content");
    content.innerHTML = "";
    for (let j = 0; j < filteredData.length; j++) {
        let pokemonID = filteredData[j]["id"];
        let pokemonImage = filteredData[j]["sprites"]["other"]["home"]["front_default"];
        let pokemonName = capitalizeFirstLetter(filteredData[j]["name"]);
        let typesCheckPokemon = filteredData[j]["types"];
        let pokemonType1 = typesCheckPokemon[0]["type"]["name"];
        let pokemonType2 = checkType(typesCheckPokemon);

        // POKEMON STATS //
        let pokemonStatsHp = filteredData[j]["stats"][0]["base_stat"];
        let pokemonStatsAttack = filteredData[j]["stats"][1]["base_stat"];
        let pokemonStatsDefense = filteredData[j]["stats"][2]["base_stat"];
        let pokemonStatsSpecialAttack = filteredData[j]["stats"][3]["base_stat"];
        let pokemonStatsSpecialDefense = filteredData[j]["stats"][4]["base_stat"];
        let pokemonStatsSpecialSpeed = filteredData[j]["stats"][5]["base_stat"];

        content.innerHTML += `<div onclick="showAttributes(
        '${pokemonType1}',
        '${pokemonID}',
        '${pokemonName}',
        '${pokemonImage}',
        '${pokemonStatsHp}',
        '${pokemonStatsAttack}',
        '${pokemonStatsDefense}',
        '${pokemonStatsSpecialAttack}',
        '${pokemonStatsSpecialDefense}',
        '${pokemonStatsSpecialSpeed}')" class="card ${pokemonType1}">
                                      <div class=nameOfPokemon>#${pokemonID} ${pokemonName}</div>
                                      <div> <img class="mainImagesOfPokemon" src="${pokemonImage}"></div>    
                                      <div class="typeMainContainer">
                                          <div class="type1Class">${pokemonType1}</div>
                                          <div>${pokemonType2}</div>
                                      </div>
                              </div>`;
    }
}

function checkType(typesCheckPokemon) {
    let pokemonType2 = "";
    if (typesCheckPokemon.length > 1) {
        pokemonType2 = `<div class="type2Class">${typesCheckPokemon[1]["type"]["name"]}</div>`;
    }
    return pokemonType2;
}
