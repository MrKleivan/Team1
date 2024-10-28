function updateViewOtherProfile() {
    let catPicture = model.pictures.filter(u => u.userId === model.inputs.otherProfile.selectedUserId);
    let selectedProfile = model.inputs.otherProfile.selectedUserId;
    let selectedCat = model.cats.find(cat => cat.userId === selectedProfile);
    let selectedUser = model.users.find(u => u.userId === selectedProfile);
    let loggedUserLastName = selectedUser.lastName;
    let loggedUserFirstName = selectedUser.firstName;
    let loggedFavouriteFood = selectedCat.favouriteFood;
    let selectedCatName = selectedCat.name;
    let loggedPersonality = selectedCat.personality;
    let loggedColor = selectedCat.color;
    let loggedAge = selectedCat.age !== null ? selectedCat.age : 'Ikke angitt';
    let loggedRace = selectedCat.race;
    let loggedDescription = selectedCat.description;
    let chatId = getChatId(model.app.loggedInUser, selectedProfile);

    document.getElementById('app').innerHTML = /*HTML*/`
    
    <div style="text-align: center;" class="header">
    <h1>${selectedCatName} sin profil</h1>
    </div>
    <div class="selectedHomeContent">
            <div class="selectedHomeContentSide" onclick="privPic()">
            <img src="img/leftArrow2.svg" alt="Left arrow" />
        </div>
        <div class="selectedHomeContentCenter">
            <div class="profileView" style="background-image: url(${displaydPicture = catPicture.length > 0  ? catPicture[model.inputs.home.placeInSequence].pictureUrl : '/img/nofoto.jpg'});" onclick="navigateToPage('otherProfile', ${model.inputs.home.watching[1].userId})">
                <div class="selectedProfileViewTopp"><h1>${otherProfile[1].name}</h1></div>
                <div class="selectedProfileViewBottom"><h1>${otherProfile[1].description}</h1></div>
            </div>
        </div>
        <div class="selectedHomeContentSide" onclick="nextPic(${catPicture.length})">
            <img src="img/rightArrow2.svg" alt="Right arrow"/>
        </div>
    </div>
    <div id="selectedProfileColumn3">
    <button onclick="goToSelectedChat(${chatId}, ${selectedProfile})">Send melding</button>
    <div id="myProfileContent">
    <div id="selectedProfileColumn1">
    Eier fornavn<br><p id="firstName">${loggedUserFirstName}</p><br>
    Eier etternavn<br><p id="lastName">${loggedUserLastName}</p><br>
    Favoritt mat:<br><p id="favouriteFood">${loggedFavouriteFood}</p><br>
    Kattens navn:<br><p id="catName">${selectedCatName}</p><br>
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
    </div>
  
    </div>

  
    `;
}

function displayChosenInterests() {
    let userId = model.inputs.otherProfile.selectedUserId;
    let chosenInterests = model.chosenInterests.filter(u => u.userId === userId);
    let interestHTML = '';
    for (let i = 0; i < chosenInterests.length; i++) {
        let chosenInterest = chosenInterests[i];
        interestHTML += `${chosenInterest.interest}`;
    }
    return interestHTML;
}
