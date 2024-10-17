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
    <h1>Din katteprofil</h1>
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
    Interests<br>
    
    <div id='interestsSelection'></div><br>
    
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
    displayInterests();
}

function displayInterests() {
    let interests = model.interests;
    let interestsSelection = document.getElementById('interestsSelection');
    let buttonsHTML = ''; 
    for (let i = 0; i < interests.length; i++) {
        let interest = interests[i];
        buttonsHTML += `<button class="interestButton">${interest}</button>`; 
    }
    interestsSelection.innerHTML = buttonsHTML;
}
