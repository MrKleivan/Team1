function updateViewMyProfile() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>Din katteprofil</h1>
    First Name<br><input id="firstNameInput" type="firstName" placeholder="write your first name" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Last Name<br><input id="lastNameInput" type="lastName" placeholder="write your last name" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Favorite Food<br><input id="favouriteFoodInput" type="favouriteFood" placeholder="your cat's favorite food" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Interests<br><select id='interestsSelection'>
    <option>cuddle</option>
    <option>sleep</option>
    <option>play</option>
    </select><br>

    Cat Name<br><input id="catNameInput" type="catName" placeholder="write your cat name" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Personality<br><input id="personalityInput" type="personality" placeholder="personality of your cat" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Color<br><input id="colorInput" type="colorDescription" placeholder="color of your cat" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Age<br><input id="ageInput" type="age" placeholder="age of your cat" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Race<br><input id="raceInput" type="race" placeholder="race of your cat" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Description<br><input id="descriptionInput" type="description" placeholder="describe your cat" oninput="model.inputs.myProfile.firstName = this.value"><br>

        <br>
        <button onclick="saveChanges()">Save</button>
    `;
}