


function privPic(counter) {
    if(counter == 0) {
        counter = counter;
    } else {counter--}
    count = counter;
    updateViewHome(counter);
}

function nextPic(counter, catPicture) {
    if(counter == catPicture.length - 1) {
        counter = counter;
    } else {counter++}
    count = counter;
    updateViewHome(counter);
}

function createSvipeList(OtherUserId) {
    let myProfile = model.app.loggedInUser;
    let otherProfile = [];
    if(model.inputs.home.svipeList < 1) {
        for(let i = 0; i < model.users.length; i++) { 
            model.inputs.home.svipeList.push(model.users[i]);
            model.inputs.home.svipeList.push(model.cats[i]);
            }
        for(let i = 0; i < model.pictures.length; i++) {
            model.inputs.home.svipeList.push(model.pictures[i])
        }
        model.inputs.home.svipeList = model.inputs.home.svipeList.filter(user => user.userId != myProfile);
        otherProfile = model.inputs.home.svipeList;
        
    } else {
        model.inputs.home.svipeList = otherProfile.filter(user => user.userId != OtherUserId);
        otherProfile = model.inputs.home.svipeList;
        
    } return otherProfile;
    

}

function getOtherProfile(create) {
    if(create == true) {
        let otherProfile = [];
        let otherProfileS = model.inputs.home.svipeList;
        let randomIndex = Math.ceil(Math.random() * otherProfileS.length);
        let profileId = otherProfileS[randomIndex].userId;
        
        otherProfile = otherProfileS.filter(user => user.userId == profileId);
        return otherProfile;    
    } else return;
}

function likeCat(myUserProfile, otherUserProfile) {
    model.interactedProfiles.push({userId: myUserProfile, interactedUserId: otherUserProfile, date: new Date(), isLike: true});
    otherProfileS = otherProfileS.filter(user => user.userId != otherUserProfile);
    if(otherProfileS.length > 1) {
        otherProfile = getOtherProfile();
        catPic = otherProfile.filter(u => u.pictureUrl);
    } 
    updateView();
}

function notLikeCat(myUserProfile, otherUserProfile) {
    model.interactedProfiles.push({userId: myUserProfile, interactedUserId: otherUserProfile, date: new Date(), isLike: false});
    otherProfileS = otherProfileS.filter(user => user.userId != otherUserProfile);
    if(otherProfileS.length > 1) {
        otherProfile = getOtherProfile();
        catPic = otherProfile.filter(u => u.pictureUrl);
    } 
    
    updateView();
}
