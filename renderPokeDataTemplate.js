function renderPokemonDataTemplate(
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
) {
  return `<div onclick="disableScroll(), showAttributes(
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
      '${pokemonStatsSpecialSpeed}')" class="card ${pokemonType1}">
                                    <div class=nameOfPokemon>#${pokemonID} ${pokemonName}</div>
                                    <div> <img class="mainImagesOfPokemon" src="${pokemonImage}"></div>    
                                    <div class="typeMainContainer">
                                        <div class="type1Class">${pokemonType1}</div>
                                        ${pokemonType2 ? `<div class="type2Class">${pokemonType2}</div>` : ""}
                                    </div>
                            </div>`;
}
