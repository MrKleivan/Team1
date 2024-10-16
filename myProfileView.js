function updateViewMyProfile() {
    let loggedInUser = model.app.loggedInUser ? model.app.loggedInUser.userId : 1;
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
    <h1>Din katteprofil</h1>
    <div id="myProfileContent">
        <div id="column1">
            First Name<br><input id="firstNameInput" type="text" value="${loggedUserFirstName}" placeholder="first name" oninput="model.inputs.myProfile.firstName = this.value"><br>
            Last Name<br><input id="lastNameInput" type="text"  value="${loggedUserLastName}" placeholder="last name" oninput="model.inputs.myProfile.lastName = this.value"><br>
            Favorite Food<br><input id="favouriteFoodInput" type="text" value="${loggedFavouriteFood}" placeholder="your cat's favorite food" oninput="model.inputs.myProfile.favouriteFood = this.value"><br>
            Cat Name<br><input id="catNameInput" type="text"value="${loggedCatName}" placeholder="write your cat name" oninput="model.inputs.myProfile.catName = this.value"><br>
        </div>
        <div id="column2">
            Personality<br><input id="personalityInput" type="text" value="${loggedPersonality}" placeholder=" personality of your cat" oninput="model.inputs.myProfile.personality = this.value"><br>
            Color<br><input id="colorInput" type="text" value="${loggedColor}" placeholder="color of your cat" oninput="model.inputs.myProfile.color = this.value"><br>
            Age<br><input id="ageInput" type="number" value="${loggedAge}" placeholder="age of your cat" oninput="model.inputs.myProfile.age = this.value"><br>
            Race<br><input id="raceInput" type="text" value="${loggedRace}" placeholder="race of your cat" oninput="model.inputs.myProfile.race = this.value"><br>
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
    <input type='file' id='imageInput' multiple='multiple' accept='image/jpeg, image/png, image/jpg' >
    <div id='divAddPictures'>
        <div class= 'dragImageHere'>Add or drag image here</div>
        <div class= 'dragImageHere'>Add or drag image here</div>
        <div class= 'dragImageHere'>Add or drag image here</div>
        <div class= 'dragImageHere'>Add or drag image here</div>
        <div class= 'dragImageHere'>Add or drag image here</div>
    </div>
    
    Description<br><input id="descriptionInput" type="text" value="${loggedDescription}" placeholder="describe your cat" oninput="model.inputs.myProfile.description = this.value"><br>
    <button onclick="saveChanges()">Save</button><br>
    `;
}
function addImage(event) {
    const imageInput = document.getElementById('dragImageHere');
    imageInput.addEventListener('dragover', (event))
    imageInput.addEventListener('drop', (event))

}
function saveChanges() {
    const formData = {
        firstName: document.getElementById('firstNameInput').value,
        lastName: document.getElementById('lastNameInput').value,
        favouriteFood: document.getElementById('favouriteFoodInput').value,
        catName: document.getElementById('catNameInput').value,
        personality: document.getElementById('personalityInput').value,
        color: document.getElementById('colorInput').value,
        age: document.getElementById('ageInput').value,
        race: document.getElementById('raceInput').value,
        //interests: document.getElementById('interestsSelection').value,
        description: document.getElementById('descriptionInput').value,
    };
    model.inputs.myProfile = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        favouriteFood: formData.favouriteFood,
        catName: formData.catName,
        personality: formData.personality,
        color: formData.color,
        age: formData.age,
        race: formData.race,
        description: formData.description,
    };
    alert('Profile data saved successfully!');
}

