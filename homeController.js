

function privPic() {
    if(model.inputs.home.placeInSequence == 0) {
        return;
    } else {model.inputs.home.placeInSequence--}
    updateView();
}

function nextPic(number) {
    if(model.inputs.home.placeInSequence == number - 1) {
        return;
    } else model.inputs.home.placeInSequence++;
    updateView();
}

function createSvipeList() {
    
    const myProfile = model.app.loggedInUser;

    model.inputs.home.svipeList = [];
    for(let i = 0; i < model.users.length; i++) { 
        model.inputs.home.svipeList.push(model.users[i]);
        model.inputs.home.svipeList.push(model.cats[i]);
        }
    for(let i = 0; i < model.pictures.length; i++) {
        model.inputs.home.svipeList.push(model.pictures[i])
    }
    model.inputs.home.svipeList = model.inputs.home.svipeList.filter(user => user.userId != myProfile);
    

    let checkForUser = model.interactedProfiles.filter(user => user.userId == myProfile)
    checkForUser = checkForUser.filter(user => user.interactedUserId);

    for(let i = 0; i < checkForUser.length; i++) {
        model.inputs.home.svipeList = model.inputs.home.svipeList.filter(user => user.userId != checkForUser[i].interactedUserId)
    }
    otherProfile = model.inputs.home.svipeList;
    
    
    return otherProfile;
}

function getOtherProfile() {
    if(model.inputs.home.watching < 1 && model.inputs.home.svipeList.length > 1) {
        let otherProfileS = model.inputs.home.svipeList;
        let randomIndex = Math.ceil(Math.random() * otherProfileS.length - 1);
        let profileId = otherProfileS[randomIndex].userId;
        
        model.inputs.home.watching = otherProfileS.filter(user => user.userId == profileId);
            
        return model.inputs.home.watching;
    } else {return model.inputs.home.watching;}

}

function likeCat(myUserProfile, otherUserProfile) {
    model.interactedProfiles.push({userId: myUserProfile, interactedUserId: otherUserProfile, date: new Date(), isLike: true});
    model.inputs.home.watching = [];
    model.inputs.home.placeInSequence = 0;
    model.inputs.home.isTrue = false;
    updateView();
}

function notLikeCat(myUserProfile, otherUserProfile) {
    model.interactedProfiles.push({userId: myUserProfile, interactedUserId: otherUserProfile, date: new Date(), isLike: false});
    model.inputs.home.watching = [];
    model.inputs.home.placeInSequence = 0;
    model.inputs.home.isTrue = false;
    updateView();
}
