function showFilteredData() {
    let content = document.getElementById("content");
    content.innerHTML = "";
    for (let j = 0; j < filteredData.length; j++) {
        let pokemonID = filteredData[j]["id"];
        let pokemonImage = filteredData[j]["sprites"]["other"]["home"]["front_default"];
        let pokemonName = capitalizeFirstLetter(filteredData[j]["name"]);
        let typesCheckPokemon = filteredData[j]["types"];
        let pokemonType1 = typesCheckPokemon[0]["type"]["name"];
        let pokemonType2 = pokemonData[j]["types"].length > 1 ? pokemonData[j]["types"][1]["type"]["name"] : "";
        
        // POKEMON STATS //
        let pokemonStatsHp = filteredData[j]["stats"][0]["base_stat"];
        let pokemonStatsAttack = filteredData[j]["stats"][1]["base_stat"];
        let pokemonStatsDefense = filteredData[j]["stats"][2]["base_stat"];
        let pokemonStatsSpecialAttack = filteredData[j]["stats"][3]["base_stat"];
        let pokemonStatsSpecialDefense = filteredData[j]["stats"][4]["base_stat"];
        let pokemonStatsSpecialSpeed = filteredData[j]["stats"][5]["base_stat"];
    
        content.innerHTML += `<div onclick="showAttributes(
        '${j}',
        '${pokemonType1}',
        '${pokemonType2}',
        '${pokemonID}',
        '${pokemonName}',
        '${pokemonImage}',
        '${pokemonStatsHp}',
        '${pokemonStatsAttack}',
        '${pokemonStatsDefense}',
        '${pokemonStatsSpecialAttack}',
        '${pokemonStatsSpecialDefense}',
        '${pokemonStatsSpecialSpeed}',true)" class="card ${pokemonType1}">
                                    <div class=nameOfPokemon>#${pokemonID} ${pokemonName}</div>
                                    <div> <img class="mainImagesOfPokemon" src="${pokemonImage}"></div>    
                                    <div class="typeMainContainer">
                                        <div class="type1Class">${pokemonType1}</div>
                                        ${pokemonType2 ? `<div class="type2Class">${pokemonType2}</div>` : ""}
                                    </div>
                                </div>`;
    }
}
