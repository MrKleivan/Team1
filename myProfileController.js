let loggedUser = model.users.find(user => user.userId === loggedInUser);
let loggedCat = model.cats.find(cat => cat.userId === loggedInUser);
function saveChanges() {
    model.inputs.myProfile.firstName = document.getElementById('firstNameInput').value;
    model.inputs.myProfile.lastName = document.getElementById('lastNameInput').value;
    model.inputs.myProfile.favouriteFood = document.getElementById('favouriteFoodInput').value;
    model.inputs.myProfile.catName = document.getElementById('catNameInput').value;
    model.inputs.myProfile.personality = document.getElementById('personalityInput').value;
    model.inputs.myProfile.color = document.getElementById('colorInput').value;
    model.inputs.myProfile.age = document.getElementById('ageInput').value;
    model.inputs.myProfile.race = document.getElementById('raceInput').value;
    //model.inputs.myProfile.interests = document.getElementById('interestsSelection').value;
    model.inputs.myProfile.description = document.getElementById('descriptionInput').value;


    loggedUser.firstName = model.inputs.myProfile.firstName;
    loggedUser.lastName = model.inputs.myProfile.lastName;
    loggedCat.favouriteFood = model.inputs.myProfile.favouriteFood;
    loggedCat.name = model.inputs.myProfile.catName;
    loggedCat.personality = model.inputs.myProfile.personality;
    loggedCat.color = model.inputs.myProfile.color;
    loggedCat.age = model.inputs.myProfile.age;
    loggedCat.race = model.inputs.myProfile.race;
    loggedCat.description = model.inputs.myProfile.description;
    alert('Profile data saved successfully!');
    updateViewMyProfile();
    console.log(model); 
}
