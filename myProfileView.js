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
    let loggedAge = loggedCat.age;
    let loggedRace = loggedCat.race;
    //let loggedDescription = loggedInUser.firstName;
   
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>Din katteprofil</h1>
    <div id="myProfileContent">
        <div id="column1">
            First Name<br><input id="firstNameInput" type="text" placeholder="${loggedUserFirstName} || first name" oninput="model.inputs.myProfile.firstName = this.value"><br>
            Last Name<br><input id="lastNameInput" type="text" placeholder="${loggedUserLastName}" oninput="model.inputs.myProfile.lastName = this.value"><br>
            Favorite Food<br><input id="favouriteFoodInput" type="text" placeholder="${loggedFavouriteFood} || your cat's favorite food" oninput="model.inputs.myProfile.favouriteFood = this.value"><br>
            Cat Name<br><input id="catNameInput" type="text" placeholder="${loggedCatName} || write your cat name" oninput="model.inputs.myProfile.catName = this.value"><br>
        </div>
        <div id="column2">
            Personality<br><input id="personalityInput" type="text" placeholder="${loggedPersonality} || personality of your cat" oninput="model.inputs.myProfile.personality = this.value"><br>
            Color<br><input id="colorInput" type="text" placeholder="${loggedColor} || color of your cat" oninput="model.inputs.myProfile.color = this.value"><br>
            Age<br><input id="ageInput" type="number" placeholder="${loggedAge} || age of your cat" oninput="model.inputs.myProfile.age = this.value"><br>
            Race<br><input id="raceInput" type="text" placeholder="${loggedRace} || race of your cat" oninput="model.inputs.myProfile.race = this.value"><br>
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
    
    Description<br><input id="descriptionInput" type="text" placeholder="describe your cat" oninput="model.inputs.myProfile.description = this.value"><br>
    <button onclick="saveChanges()">Save</button><br>
    `;
    loadSavedData();
}
function addImage(event) {
    const imageInput = document.getElementById('dragImageHere');
    imageInput.addEventListener('dragover', (event))
    imageInput.addEventListener('drop', (event))

}
function saveChanges() {
    const myProfileIdOwner = model.app.loggedInUser;
    console.log(myProfileIdOwner)
    const formData = {
        firstName: model.inputs.myProfile.firstName,
        lastName: model.inputs.myProfile.lastName,
        favouriteFood: model.inputs.myProfile.favouriteFood,
        catName: model.inputs.myProfile.catName,
        personality: model.inputs.myProfile.personality,
        color: model.inputs.myProfile.color,
        age: model.inputs.myProfile.age,
        race: model.inputs.myProfile.race,
        interests: model.inputs.myProfile.interests,
        description: model.inputs.myProfile.description,
    };
    localStorage.setItem('myProfile', JSON.stringify(formData));
    alert('Profile data saved successfully!');
}
function loadSavedData() {
    const savedData = localStorage.getItem('myProfile');
    if (savedData) {
      const formData = JSON.parse(savedData);
      model.inputs.myProfile.firstName = formData.firstName;
      model.inputs.myProfile.lastName = formData.lastName;
      model.inputs.myProfile.favouriteFood = formData.favouriteFood;
      model.inputs.myProfile.catName = formData.catName;
      model.inputs.myProfile.personality = formData.personality;
      model.inputs.myProfile.color = formData.color;
      model.inputs.myProfile.age = formData.age;
      model.inputs.myProfile.race = formData.race;
      model.inputs.myProfile.description = formData.description;

      document.getElementById('firstNameInput').value = formData.firstName;
      document.getElementById('lastNameInput').value = formData.lastName;
      document.getElementById('favouriteFoodInput').value = formData.favouriteFood;
      document.getElementById('catNameInput').value = formData.catName;
      document.getElementById('personalityInput').value = formData.personality;
      document.getElementById('colorInput').value = formData.color;
      document.getElementById('ageInput').value = formData.age;
      document.getElementById('raceInput').value = formData.race;
      document.getElementById('descriptionInput').value = formData.description;
    }
  }

