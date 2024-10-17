let loggedInUser = model.app.loggedInUser;
function updateViewMyProfile() {
    console.log(loggedInUser);
    let loggedUser = model.users.find(user => user.userId === loggedInUser);
    let loggedUserLastName = loggedUser.lastName;
    let loggedUserFirstName = loggedUser.firstName;
    let loggedCat = model.cats.find(cat => cat.userId === loggedInUser);
    let loggedFavouriteFood = loggedCat.favouriteFood;
    let loggedCatName = loggedCat.name;
    let loggedPersonality = loggedCat.personality;
    let loggedColor = loggedCat.color;
    let loggedAge = loggedCat.age !== null ? loggedCat.age : '';
    console.log(loggedAge)
    let loggedRace = loggedCat.race;
    console.log(loggedRace)
    let loggedDescription = loggedCat.description;

    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="header">
    "<h1>Din katteprofil</h1>
    </div>
    <div id="myProfileContent">
    <div id="column1">
    First Name<br><input id="firstNameInput" type="text" value="${loggedUserFirstName}" placeholder="first name"><br>
    Last Name<br><input id="lastNameInput" type="text"  value="${loggedUserLastName}" placeholder="last name" ><br>
    Favorite Food<br><input id="favouriteFoodInput" type="text" value="${loggedFavouriteFood}" placeholder="your cat's favorite food"><br>
    Cat Name<br><input id="catNameInput" type="text"value="${loggedCatName}" placeholder="write your cat name" ><br>
    </div>
    <div id="column2">
    Personality<br><input id="personalityInput" type="text" value="${loggedPersonality}" placeholder=" personality of your cat" ><br>
    Color<br><input id="colorInput" type="text" value="${loggedColor}" placeholder="color of your cat" ><br>
    Age<br><input id="ageInput" type="number" value="${loggedAge}" placeholder="age of your cat" ><br>
    Race<br><input id="raceInput" type="text" value="${loggedRace}" placeholder="race of your cat"><br>
    </div>
    </div>
    <div id="noneColumnContent" style="display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
    Interests<br><select id='interestsSelection' multiple>
    <option value="cuddle">cuddle</option>
    <option value="sleep">sleep</option>
    <option value="play">play</option>
    <option value="eat">eat</option>
    <option value="walk">walk</option>
    </select><br>
    </div>
    Add cat pictures
    <input type='file' id='imageInput' accept='image/*' onchange="readFileSelection(event)" style="display: none;" />
    <div id='divAddPictures'>
    
    <div id="dragImageHere1" class="imageDisplay" onclick="openFilePicker(1)">+</div>
    <div id="dragImageHere2" class="imageDisplay" onclick="openFilePicker(2)">+</div>
    <div id="dragImageHere3" class="imageDisplay" onclick="openFilePicker(3)">+</div>
    <div id="dragImageHere4" class="imageDisplay" onclick="openFilePicker(4)">+</div>
    <div id="dragImageHere5" class="imageDisplay" onclick="openFilePicker(5)">+</div>
    </div><br>
    
    Description<br><input id="descriptionInput" type="text" value="${loggedDescription}" placeholder="describe your cat"><br>
    <button onclick="saveChanges()">Save</button><br>
    `;
    displayImages();
}

clickedSequence = null;
function openFilePicker(sequence) {
    clickedSequence = sequence;
    document.getElementById('imageInput').click();
}

function readFileSelection(event) {
    const file = event.target.files[0];
    if (!file)
        return;
    readImage(file);
}
function readImage(file) {
    const reader = new FileReader();
    reader.onload = function (loadEvent) {
        processLoadedImage(loadEvent.target.result);
    };
    reader.readAsDataURL(file);
}
function processLoadedImage(pictureUrl) {
    updateModelPictures(clickedSequence, pictureUrl);
    displayImages();
}
function updateModelPictures(sequence, pictureUrl) {
    let pictureIndex = model.pictures.findIndex(picture => picture.placeInSequence === sequence);
    console.log(pictureIndex);
    if (pictureIndex !== -1) {
        model.pictures[pictureIndex].pictureUrl = pictureUrl;
    } else {
        model.pictures.push({ userId: loggedInUser, pictureUrl: pictureUrl, placeInSequence: sequence });
        console.log(model.pictures);
    }
}

function displayImages() {
    let totalPictures = 5;
    let catPictures = model.pictures.filter(picture => picture.userId == loggedInUser);

    for (let i = 0; i < totalPictures; i++) {
        let divImageId = 'dragImageHere' + (i + 1);
        let addImageToDiv = document.getElementById(divImageId);
        let picture = catPictures.find(p => p.placeInSequence === (i + 1));
        updateImageDiv(addImageToDiv, picture, i);
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
function deleteImage(sequence, event) {
    event.stopPropagation();
    model.pictures = model.pictures.filter(picture => picture.placeInSequence !== sequence);
    updateModelPictures(sequence, null);
    displayImages();
}
displayImages();

