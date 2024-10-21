
let count = 0;

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
    if(model.inputs.home.svipeList.length < 1 && model.inputs.home.watching.length < 1) {
        for(let i = 0; i < model.users.length; i++) { 
            model.inputs.home.svipeList.push(model.users[i]);
            model.inputs.home.svipeList.push(model.cats[i]);
            }
        for(let i = 0; i < model.pictures.length; i++) {
            model.inputs.home.svipeList.push(model.pictures[i])
        }
        model.inputs.home.svipeList = model.inputs.home.svipeList.filter(user => user.userId != myProfile);
        otherProfile = model.inputs.home.svipeList;
        
        
    } if(OtherUserId !== undefined && model.inputs.home.svipeList.length > 1) {
        model.inputs.home.svipeList =  model.inputs.home.svipeList.filter(user => user.userId != OtherUserId);
        otherProfile = model.inputs.home.svipeList;
        
    } if(model.inputs.home.svipeList.length < 1 && model.inputs.home.watching.length > 1){
        otherProfile = [];
    } 
    
    return otherProfile;
    

}

function getOtherProfile() {
    if(model.inputs.home.watching.length < 1 && model.inputs.home.svipeList.length > 1) {
        let otherProfileS = model.inputs.home.svipeList;
        let randomIndex = Math.ceil(Math.random() * otherProfileS.length);
        let profileId = otherProfileS[randomIndex].userId;
        
        model.inputs.home.watching = otherProfileS.filter(user => user.userId == profileId);
            
        return model.inputs.home.watching;
    } if(model.inputs.home.watching.length > 1 && model.inputs.home.svipeList.length > 1){return model.inputs.home.watching;}
    if(model.inputs.home.watching.length > 1 && model.inputs.home.svipeList.length < 1) {model.inputs.home.watching = []; return model.inputs.home.watching;}

}

function likeCat(myUserProfile, otherUserProfile) {
    model.interactedProfiles.push({userId: myUserProfile, interactedUserId: otherUserProfile, date: new Date(), isLike: true});
    model.inputs.home.watching = [];
    createSvipeList(otherUserProfile);
    updateView();
}

function notLikeCat(myUserProfile, otherUserProfile) {
    model.interactedProfiles.push({userId: myUserProfile, interactedUserId: otherUserProfile, date: new Date(), isLike: false});
    model.inputs.home.watching = [];
    createSvipeList(otherUserProfile);
    updateView();
}
