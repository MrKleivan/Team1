
function saveChanges() {
    let loggedInUser = model.app.loggedInUser;
    let loggedUser = model.users.find(user => user.userId === loggedInUser);
    let loggedCat = model.cats.find(cat => cat.userId === loggedInUser);
    model.inputs.myProfile.firstName = document.getElementById('firstNameInput').value;
    model.inputs.myProfile.lastName = document.getElementById('lastNameInput').value;
    model.inputs.myProfile.favouriteFood = document.getElementById('favouriteFoodInput').value;
    model.inputs.myProfile.catName = document.getElementById('catNameInput').value;
    model.inputs.myProfile.personality = document.getElementById('personalityInput').value;
    model.inputs.myProfile.color = document.getElementById('colorInput').value;
    model.inputs.myProfile.age = document.getElementById('ageInput').value;
    model.inputs.myProfile.race = document.getElementById('raceInput').value;
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
}

lickedSequence = null;
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
    let loggedInUser = model.app.loggedInUser;
    let userId = loggedInUser;
    let pictureIndex = model.pictures.findIndex(picture => picture.userId === userId && picture.placeInSequence === sequence);
    console.log(pictureIndex);
    if (pictureIndex !== -1) {
        model.pictures[pictureIndex].pictureUrl = pictureUrl;
        console.log('Updated', model.pictures);
    } else {
        model.pictures.push({ userId: loggedInUser, pictureUrl: pictureUrl, placeInSequence: sequence });
        console.log("added new",model.pictures);
    }
}

function deleteImage(sequence, event) {
    event.stopPropagation(); 
    model.pictures = model.pictures.filter(picture => picture.placeInSequence !== sequence);
    displayImages();
}

function selectInterest(interest) {
    let userId = model.app.loggedInUser;
    let selectedInterestsArray = model.chosenInterests.filter(item => item.userId === userId);
    let index = model.chosenInterests.findIndex(item => item.userId === userId && item.interest === interest);
    if (index === -1) {
        if (selectedInterestsArray.length < 3) {
            model.chosenInterests.push({ userId: userId, interest: interest });
        } else {
            alert("You can select up to 3 interests.");
        }
    } else {
        model.chosenInterests = model.chosenInterests.filter(item => item.userId && item.interest !== interest);
        console.log("Chosen Interests:", model.chosenInterests);
    }
    displayInterests();
}
displayImages();
