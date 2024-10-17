
// let myProfile = model.app.loggedInUser;
// let otherProfile = [];    
// let otherProfile = model.users.filter(user => user.userId != myProfile);
    // let profileCount = Math.floor(Math.random() * otherProfile.length); 
    // let otherCatProfile =  model.cats.filter(user => user.userId != myProfile);
    // let catPicture = model.pictures.filter(user => user.userId != myProfile);

let myProfile = model.app.loggedInUser;
let otherProfileS = createSvipeList();
let otherProfile = getOtherProfile();
let catPic = otherProfile.filter(u => u.pictureUrl);
let count = 0;

function privPic() {
    if(count == 0) {
        return;
    } else {count--}
    updateView();
}
function nextPic() {
    if(count == catPic.length - 1) {
        return;
    } else {count++}
    updateView();
}

function createSvipeList() {
    let otherProfile = [];
    for(let i = 0; i < model.users.length; i++) { 
        otherProfile.push(model.users[i]);
        otherProfile.push(model.cats[i]);
        }
    for(let i = 0; i < model.pictures.length; i++) {
        otherProfile.push(model.pictures[i])
    }
    
    otherProfile = otherProfile.filter(user => user.userId != myProfile);

    return otherProfile;
}

function getOtherProfile() {
    let otherProfile;
    let profileCount = Math.ceil(Math.random() * model.users.length);
    
    while(profileCount == myProfile) {
        profileCount = Math.ceil(Math.random() * 3);
    } 
    otherProfile = otherProfileS.filter(user => user.userId != myProfile);
    otherProfile = otherProfileS.filter(user => user.userId === profileCount);
    otherProfile = otherProfileS.filter(user => user.userId === profileCount);
    return otherProfile;

}

function likeCat(myUserProfile, otherUserProfile) {
    model.interactedProfiles.push({userId: myUserProfile, interactedUserId: otherUserProfile, date: new Date(), isLike: true});
    otherProfileS = otherProfileS.filter(user => user.userId != otherUserProfile);
    otherProfile = getOtherProfile();
    catPic = otherProfile.filter(u => u.pictureUrl);
    
    updateView();
}

function notLikeCat(myUserProfile, otherUserProfile) {
    model.interactedProfiles.push({userId: myUserProfile, interactedUserId: otherUserProfile, date: new Date(), isLike: false});
    otherProfileS = otherProfileS.filter(user => user.userId != otherUserProfile);
    otherProfile = getOtherProfile();
    catPic = otherProfile.filter(u => u.pictureUrl);
    
    updateView();
}

// function createSvipeList() {
//     let myProfile = model.app.loggedInUser;
//     let otherProfile = model.users.filter(user => user.userId != myProfile);
//     let profileCount = Math.floor(Math.random() * otherProfile.length); 
//     let otherCatProfile =  model.cats.filter(user => user.userId != myProfile);
//     let catPicture = model.pictures.filter(user => user.userId != myProfile);

    
//     otherProfile.push(otherCatProfile);
//     otherProfile.push(catPicture);

//     otherProfile = otherProfile.filter(user => user.userId);

//     return otherProfile + myProfile;
// }