
function updateViewMyProfile() {
    let loggedInUser = model.app.loggedInUser;
    let loggedUser = model.users.find(user => user.userId === loggedInUser);
    let loggedUserLastName = loggedUser.lastName;
    let loggedUserFirstName = loggedUser.firstName;
    let loggedCat = model.cats.find(cat => cat.userId === loggedInUser);
    let loggedFavouriteFood = loggedCat?.favouriteFood || '';
    let loggedCatName = loggedCat?.name || '';
    let loggedPersonality = loggedCat?.personality || '';
    let loggedColor = loggedCat?.color || '';
    let loggedAge = loggedCat?.age || '';
    let loggedRace = loggedCat?.race || '';
    let loggedDescription = loggedCat?.description || '';
    let loggedGender = loggedCat?.gender || '';
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="header">
    <h1 class='headerText'>Din katteprofil</h1>
    </div>
    <div class="column0">
    Brukers informasjon:<br>
    <div class="column3">
    Fornavn*<br><input id="firstNameInput" type="text" value="${loggedUserFirstName}" placeholder="Fornavn"><br>
    Etternavn*<br><input id="lastNameInput" type="text"  value="${loggedUserLastName}" placeholder="Etternavn" ><br>
    </div>
    <div class="header">
    Kattens informasjon:<br>
    </div>
    <div id="myProfileContent">
    <div class="column1">
    Kattens personlighet:<br><input id="personalityInput" type="text" value="${loggedPersonality}" placeholder="Personligheten til katten din"><br>
    Kattens favorittmat:<br><input id="favouriteFoodInput" type="text" value="${loggedFavouriteFood}" placeholder="Kattens favorittmat"><br>
    Kattens navn:<br><input id="catNameInput" type="text"value="${loggedCatName}" placeholder="Skriv inn kattenavnet ditt" ><br>
    </div>
    <div class="column2">
    Kattens farge:<br><input id="colorInput" type="text" value="${loggedColor}" placeholder="Fargen på katten din" ><br>
    Kattens alder:<br><input id="ageInput" type="number" min='1' value="${loggedAge}" placeholder="Alderen på katten din" ><br>
    Kattens rase:<br><input id="raceInput" type="text" value="${loggedRace}" placeholder="Rasen til katten dint"><br>
    </div>
    </div>
    </div>
    <div class="column3">
    Beskrivelse:<br><input id="descriptionInput" type="text" value="${loggedDescription}" placeholder="Beskriv katten din"><br>
    
    Velg kjønn:<br><div class="gender">
	<input id="male" type="radio" value="${loggedGender}" name="gender" onchange="selectGender()" ${loggedGender === 'male' ? 'checked' : ''}>
		<div>Mann</div>
	<input id="female" type="radio" value="${loggedGender}"  name="gender" onchange="selectGender()" ${loggedGender === 'female' ? 'checked' : ''}>
		<div>Kvinne</div>
	<input id="other" type="radio" value="${loggedGender}" name="gender" onchange="selectGender()"${loggedGender === 'other' ? 'checked' : ''}>
		<div>Annet</div>
    </div>
    </div>
    <div id="saveLayout">
    <button onclick="saveChanges()" id="saveButton">Lagre</button><br>
    </div>
    <div class='column4'><br>
    Velg interessene:<br>
    <div id='interestsSelection'></div><br>
    </div>
    <div class='column5'>
    Legg til kattebilder:<br>
    <input type='file' id='imageInput' accept='image/*' onchange="readFileSelection(event)" style="display: none;" />
    <div id='divAddPictures'>
    
    <div id="dragImageHere1" class="imageDisplay" onclick="openFilePicker(1)">+</div>
    <div id="dragImageHere2" class="imageDisplay" onclick="openFilePicker(2)">+</div>
    <div id="dragImageHere3" class="imageDisplay" onclick="openFilePicker(3)">+</div>
    <div id="dragImageHere4" class="imageDisplay" onclick="openFilePicker(4)">+</div>
    <div id="dragImageHere5" class="imageDisplay" onclick="openFilePicker(5)">+</div>
    </div>
    </div><br>
    `;
    displayImages();
    displayInterests();
}
function selectGender() {
    men = document.getElementById('male');
    women = document.getElementById('female');
    other = document.getElementById('other');
    if (men.checked) {
        model.inputs.myProfile.gender = 'male';
    } else if (women.checked) {
        model.inputs.myProfile.gender = 'female';
    } else if (other.checked) {
        model.inputs.myProfile.gender = 'other';
    }
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