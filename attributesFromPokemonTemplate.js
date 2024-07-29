function showAttributesFromPokemonTemplate(
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
) {
  return `<div class="infoBox ${pokemonType1}">
            <div class="nameOfPokemonOnBigWindow">#${pokemonID} ${pokemonName}</div>
            <div class="ImageContainerOnBigWindow"> <img class="mainImagesOfPokemonOnBigWindow" src="${pokemonImage}"></div>

            <div class="secondContainerOnBigWindow"> 
                <div class="typeMainContainerOnBigWindow">
                <div id="statsID" class="statsTypeContainer">TYPE:
                    <div class="typesMainContainer"> 
                        <div class="type1ClassOnBigWindow">${pokemonType1}</div>
                        ${pokemonType2 ? `<div class="type2ClassOnBigWindow">${pokemonType2}</div>` : ""}
                    </div> 
                </div>

                <div class="statsContainer">
                    <div class="individualStats"> HP: <div class="attributeClassOnBigWindow">${pokemonStatsHp}</div></div>
                    <div class="individualStats"> ATTACK: <div class="attributeClassOnBigWindow">${pokemonStatsAttack}</div></div>
                    <div class="individualStats"> DEFENSE: <div class="attributeClassOnBigWindow">${pokemonStatsDefense}</div></div>
                    <div class="individualStats"> SP-ATTACK: <div class="attributeClassOnBigWindow">${pokemonStatsSpecialAttack}</div></div>
                    <div class="individualStats"> SP-DEFENSE: <div class="attributeClassOnBigWindow">${pokemonStatsSpecialDefense}</div></div>
                    <div class="individualStats"> SPEED: <div class="attributeClassOnBigWindow">${pokemonStatsSpecialSpeed}</div></div>
                </div>
            </div>

            <div class="arrowMainContainer">
                <div onclick="previousImage()" class="arrowLeftContainer">
                <img id="previousButtonID" class="arrows" src="./img/leftArrow.svg" alt="">
            </div>

            <div onclick="nextPicture()" class="arrowRightContainer">
                <img id="nextButtonID" class="arrows" src="./img/rightArrow.svg" alt="">
            </div>
            </div>
            </div>`
}
