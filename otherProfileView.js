function updateViewOtherProfile() {
    let loggedUser = model.users.find(user => user.userId === model.app.loggedInUser);
    let loggedUserLastName = loggedUser.lastName;
    let loggedUserFirstName = loggedUser.firstName;
    let loggedCat = model.cats.find(cat => cat.userId === loggedInUser);
    let loggedFavouriteFood = loggedCat.favouriteFood;
    let loggedCatName = loggedCat.name;
    let loggedPersonality = loggedCat.personality;
    let loggedColor = loggedCat.color;
    let loggedAge = loggedCat.age !== null ? loggedCat.age : '';
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
            <div class="profileView">
                <div class="profileViewTopp"><h1></h1></div>
                <div class="profileViewBottom"><h1></h1></div>
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
    <div id="column1">
    First Name*<br><p id="firstName">${loggedUserFirstName}</p><br>
    Last Name*<br><p id="lastName">${loggedUserLastName}</p><br>
    Favorite Food:<br><p id="favouriteFood">${loggedFavouriteFood}</p><br>
    Cat Name:<br><p id="catName">${loggedCatName}</p><br>
    </div>
    <div id="column2">
    Personality:<br><p id="personality">${loggedPersonality}</p><br>
    Color:<br><p id="color">${loggedColor}</p><br>
    Age:<br><p id="age">${loggedAge}</p><br>
    Race:<br><p id="race">${loggedRace}</p><br>
    </div>
    </div>
    <div id="column3">
    <p>Description:<p>${loggedDescription}</p><br>
    </div>

    Interests:<br>
    
    <div id='showInterestContainer'></div><br>
    
    
    `;
    displayChosenInterests();
}

function displayChosenInterests() {
    let userId = model.app.loggedInUser;
    let chosenInterests = model.chosenInterests.filter(u => u.userId === userId);
    let interestHTML = '';
    for (let i = 0; i < chosenInterests.length; i++) {
        let chosenInterest = chosenInterests[i];
        let selected = chosenInterests.includes(chosenInterest) ? 'selected' : '';
        interestHTML += `<div class="chosenInterestButton ${selected}">${chosenInterest.interest}</div>`;
    }
    document.getElementById('showInterestContainer').innerHTML = interestHTML;
}
