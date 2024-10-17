
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
let profileCount = Math.ceil(Math.random() * model.users.length);
function getOtherProfile() {
    let otherProfile;
    otherProfile = otherProfileS.filter(user => user.userId != myProfile);
    let profileCount = Math.ceil(Math.random() * otherProfileS.length);
    profileCount = otherProfileS[profileCount].userId;
    
    // while(profileCount == myProfile) {
    //     profileCount = Math.ceil(Math.random() * userProfiles);
    //     if(userProfiles < 0) {profileCount = 0 }
    // } 
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