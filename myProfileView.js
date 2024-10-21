
function updateViewMyProfile() {
    let loggedInUser = model.app.loggedInUser !== null ? model.app.loggedInUser : 1;
    console.log(loggedInUser);
    let loggedUser = model.users.find(user => user.userId === loggedInUser);
    console.log(loggedUser);
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
    <div id="myProfileContent">
    <div id="column1">
    First Name*<br><input id="firstNameInput" type="text" value="${loggedUserFirstName}" placeholder="first name"><br>
    Last Name*<br><input id="lastNameInput" type="text"  value="${loggedUserLastName}" placeholder="last name" ><br>
    Favorite Food:<br><input id="favouriteFoodInput" type="text" value="${loggedFavouriteFood}" placeholder="your cat's favorite food"><br>
    Cat Name:<br><input id="catNameInput" type="text"value="${loggedCatName}" placeholder="write your cat name" ><br>
    </div>
    <div id="column2">
    Personality:<br><input id="personalityInput" type="text" value="${loggedPersonality}" placeholder=" personality of your cat"><br>
    Color:<br><input id="colorInput" type="text" value="${loggedColor}" placeholder="color of your cat" ><br>
    Age:<br><input id="ageInput" type="number" min= '0' value="${loggedAge}" placeholder="age of your cat" ><br>
    Race:<br><input id="raceInput" type="text" value="${loggedRace}" placeholder="race of your cat"><br>
    </div>
    </div>
    <div id="column3">
    Description:<br><input id="descriptionInput" type="text" value="${loggedDescription}" placeholder="describe your cat"><br>
    </div>
    <div id="saveLayout">
    <button onclick="saveChanges()" id="saveButton">Save</button><br>
    </div>
    Selected Interests:<br>
    
    <div id='interestsSelection'></div><br>
    
    Add cat picture:<br>
    <input type='file' id='imageInput' accept='image/*' onchange="readFileSelection(event)" style="display: none;" />
    <div id='divAddPictures'>
    
    <div id="dragImageHere1" class="imageDisplay" onclick="openFilePicker(1)">+</div>
    <div id="dragImageHere2" class="imageDisplay" onclick="openFilePicker(2)">+</div>
    <div id="dragImageHere3" class="imageDisplay" onclick="openFilePicker(3)">+</div>
    <div id="dragImageHere4" class="imageDisplay" onclick="openFilePicker(4)">+</div>
    <div id="dragImageHere5" class="imageDisplay" onclick="openFilePicker(5)">+</div>
    </div><br>
    
    `;
    displayImages();
    displayInterests();
}

function updateImageDiv(addImageToDiv, picture, i) {
    if (addImageToDiv) {
        if (picture) {
            addImageToDiv.innerHTML = `
                <div class="imageWrapper">
                    <img src="${picture.pictureUrl}" alt="image" class="thumbnail" />
                    <span class="cross" onclick="deleteImage(${i + 1}, event)">&times;</span>
                </div>`;
        } else {
            addImageToDiv.innerHTML = '+';
        }
    }
}

function displayInterests() {
    let userId = model.app.loggedInUser;
    let interests = model.interests;
    let selectedInterestsArray = [];
    for (let i = 0; i < model.chosenInterests.length; i++) {
        if (model.chosenInterests[i].userId === userId) {
            selectedInterestsArray.push(model.chosenInterests[i].interest);
        } 
    }
    let buttonsHtml = '';
    for (let i = 0; i < interests.length; i++) {
        let interest = interests[i];
        let selected = selectedInterestsArray.includes(interest) ? 'selected' : '';
        buttonsHtml += `<div class="interestButton ${selected}" onclick="selectInterest('${interest}')">${interest}</div>`;
    }
    document.getElementById('interestsSelection').innerHTML = buttonsHtml
}
function displayImages() {
    let totalPictures = 5;
    let loggedInUser = model.app.loggedInUser;
    let catPictures = model.pictures.filter(picture => picture.userId == loggedInUser);

    for (let i = 0; i < totalPictures; i++) {
        let divImageId = 'dragImageHere' + (i + 1);
        let addImageToDiv = document.getElementById(divImageId);
        let picture = catPictures.find(p => p.placeInSequence === (i + 1));
        updateImageDiv(addImageToDiv, picture, i);
        }
    }