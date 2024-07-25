function showFilteredData()
{
    for (let j = 0; j < filteredData.length; j++) {
        let pokemonID = filteredData[j]["id"];
        let pokemonImage = filteredData[j]["sprites"]["other"]["home"]["front_default"];
        let pokemonName = capitalizeFirstLetter(filteredData[j]["name"]);
        let typesCheckPokemon = filteredData[j]["types"];
        let pokemonType1 = filteredData[j]["types"][0]["type"]["name"];
        let pokemonType2 = checkType(typesCheckPokemon, j);
       
        content.innerHTML += `<div class="card ${pokemonType1}">
                                    <div class=nameOfPokemon>#${pokemonID} ${pokemonName}</div>
                                    <div> <img class="mainImagesOfPokemon" src="${pokemonImage}"></div>  
                                    <div class="typeMainContainer">
                                        <div class="type1Class">${pokemonType1}</div>
                                        <div id="type2">${pokemonType2}</div>
                                    </div>
                            </div>`;
        }
}