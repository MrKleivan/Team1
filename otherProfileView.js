function updateViewOtherProfile() {
    let catPicture = model.pictures.filter(u => u.userId === model.inputs.home.watching[1].userId);
    let selectedProfile = model.inputs.home.watching[0];
    let loggedUserLastName = selectedProfile.lastName;
    let loggedUserFirstName = selectedProfile.firstName;
    let loggedCat = model.cats.find(cat => cat.userId === selectedProfile.userId);
    let loggedFavouriteFood = loggedCat.favouriteFood;
    let loggedCatName = loggedCat.name;
    let loggedPersonality = loggedCat.personality;
    let loggedColor = loggedCat.color;
    let loggedAge = loggedCat.age !== null ? loggedCat.age : 'Ikke angitt';
    let loggedRace = loggedCat.race;
    let loggedDescription = loggedCat.description;

    document.getElementById('app').innerHTML = /*HTML*/`
    
    <div class="header">
    <h1>Din katteprofil</h1>
    </div>
        
    <div class="homeContent">
        <div class="homeContentSide">
        <img style="height: 5vh" src="img/leftArrow.svg" alt="Left arrow"  onclick="privPic()" />
        </div>
        <div class="homeContentCenter">
            <div class="profileView" style="background-image: url(${catPicture[model.inputs.home.placeInSequence].pictureUrl});">
            <div class="profileViewTopp"></div>
            <div class="profileViewBottom"></div>
        </div>
        </div>
        <div class="homeContentSide">
        <img style="height: 5vh" src="img/rightArrow.svg" alt="Right arrow"  onclick="nextPic()" />
        </div>
    </div>
    <div style="text-align: center;">
    </div>
    <br>

    <div id="myProfileContent">
    <div id="selectedProfileColumn1">
    Eier fornavn<br><p id="firstName">${loggedUserFirstName}</p><br>
    Eier etternavn<br><p id="lastName">${loggedUserLastName}</p><br>
    Favoritt mat:<br><p id="favouriteFood">${loggedFavouriteFood}</p><br>
    Kattens navn:<br><p id="catName">${loggedCatName}</p><br>
    Beskrivelse:<br><p>${loggedDescription}</p><br>
    </div>
    <div id="selectedProfileColumn2">
    Personlighet:<br><p id="personality">${loggedPersonality}</p><br>
    Farge:<br><p id="color">${loggedColor}</p><br>
    Alder:<br><p id="age">${loggedAge}</p><br>
    Rase:<br><p id="race">${loggedRace}</p><br>
    Interesser:<br><p>${displayChosenInterests()}</p><br>
    </div>
    </div>
    `;
}

function displayChosenInterests() {
    let userId = model.inputs.home.watching[0].userId;
    let chosenInterests = model.chosenInterests.filter(u => u.userId === userId);
    let interestHTML = '';
    for (let i = 0; i < chosenInterests.length; i++) {
        let chosenInterest = chosenInterests[i];
        let selected = chosenInterests.includes(chosenInterest) ? 'selected' : '';
        interestHTML += `${chosenInterest.interest}`;
    }
    return interestHTML;
}
