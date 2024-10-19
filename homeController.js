
let count = 1;

function privPic() {
    if(count == 0) {
        return;
    } else {count--}
    updateView();
}

function nextPic(number) {
    if(count == number - 1) {
        return;
    } else count++
    updateView();
}

function createSvipeList(OtherUserId) {
    let myProfile = model.app.loggedInUser;
    let otherProfile = [];
    if(OtherUserId == undefined && model.inputs.home.svipeList < 1) {
        for(let i = 0; i < model.users.length; i++) { 
            model.inputs.home.svipeList.push(model.users[i]);
            model.inputs.home.svipeList.push(model.cats[i]);
            }
        for(let i = 0; i < model.pictures.length; i++) {
            model.inputs.home.svipeList.push(model.pictures[i])
        }
        model.inputs.home.svipeList = model.inputs.home.svipeList.filter(user => user.userId != myProfile);
        otherProfile = model.inputs.home.svipeList;
        
    } else if(OtherUserId !== undefined) {
        model.inputs.home.svipeList =  model.inputs.home.svipeList.filter(user => user.userId != OtherUserId);
        otherProfile = model.inputs.home.svipeList;
        
    } return otherProfile;
    

}

function getOtherProfile() {
    if(model.inputs.home.watching < 1) {
        let otherProfileS = model.inputs.home.svipeList;
        let randomIndex = Math.ceil(Math.random() * otherProfileS.length);
        let profileId = otherProfileS[randomIndex].userId;
        
        model.inputs.home.watching = otherProfileS.filter(user => user.userId == profileId);
            
        return model.inputs.home.watching;
    } else if(model.inputs.home.watching > 1 ){model.inputs.home.svipeList = [] }
    updateView();
}

function likeCat(myUserProfile, otherUserProfile) {
    model.interactedProfiles.push({userId: myUserProfile, interactedUserId: otherUserProfile, date: new Date(), isLike: true});
    createSvipeList(otherUserProfile);
    model.inputs.home.watching = [];
    updateView();
}

function notLikeCat(myUserProfile, otherUserProfile) {
    model.interactedProfiles.push({userId: myUserProfile, interactedUserId: otherUserProfile, date: new Date(), isLike: false});
    createSvipeList(otherUserProfile);
    model.inputs.home.watching = [];
    updateView();
}
