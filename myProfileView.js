function updateViewMyProfile() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>Din katteprofil</h1>
    <div id ="myProfileContent" style= ' flex-direction:column;  flex 1; flex-direction: row; justify-content: center; align-content: center; margin: auto; border-radius:40px; background-color: rgba(255, 255, 255, 0.7);'>
    <div id="column1" style="flex: 1; display: flex; flex-direction: column; padding-right: 20px;">
    First Name<br><input id="firstNameInput" type="firstName" placeholder="write your first name" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Last Name<br><input id="lastNameInput" type="lastName" placeholder="write your last name" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Favorite Food<br><input id="favouriteFoodInput" type="favouriteFood" placeholder="your cat's favorite food" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Cat Name<br><input id="catNameInput" type="catName" placeholder="write your cat name" oninput="model.inputs.myProfile.firstName = this.value"><br>
    </div>
    <div id="column2" style="flex: 1; display: flex; flex-direction: column; padding-left: 20px;">
    Personality<br><input id="personalityInput" type="personality" placeholder="personality of your cat" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Color<br><input id="colorInput" type="colorDescription" placeholder="color of your cat" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Age<br><input id="ageInput" type="age" placeholder="age of your cat" oninput="model.inputs.myProfile.firstName = this.value"><br>
    Race<br><input id="raceInput" type="race" placeholder="race of your cat" oninput="model.inputs.myProfile.firstName = this.value"><br>
    </div>
    <div id="noneColumnContent">
    Interests<br><select id='interestsSelection' multiple>
    <option value="cuddle">cuddle</option>
    <option value="sleep">sleep</option>
    <option value="play">play</option>
    <option value="eat">eat</option>
    </select><br>
</div>

    Description<br><input id="descriptionInput" type="description" placeholder="describe your cat" oninput="model.inputs.myProfile.firstName = this.value"><br>
    <button onclick="saveChanges()">Save</button>
</div>
        <br>
        <button onclick="updateViewHome()">Home</button>
        <button onclick="updateViewMatch()">match</button>
        <button onclick="updateViewChat()">chat</button>
    `;
}
function saveChanges() {
    var selectedValues = [];
    for (var option of document.getElementById('interestsSelection').options) {
        if (option.selected) {
            selectedValues.push(option.value)
        }
    }
}