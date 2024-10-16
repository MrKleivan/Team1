function privPic() {
    if(count == 0) {
        return;
    } else {count--}
    updateView();
}
function nextPic() {
    if(count == catPicture.length - 1) {
        return;
    } else {count++}
    updateView();
}




function likeCat(myUserProfile, otherUserProfile) {
    model.interactedProfiles.push({userId: myUserProfile, interactedUserId: otherUserProfile, date: new Date(), isLike: true});
    otherProfile = otherProfile.filter(user => user.userId !== otherProfile[profileCount].userId);
    profileCount = Math.floor(Math.random() * otherProfile.length);

    updateView();
}

function notLikeCat(myUserProfile, otherUserProfile) {
    model.interactedProfiles.push({userId: myUserProfile, interactedUserId: otherUserProfile, date: new Date(), isLike: false});
    otherProfile.filter(user => user.userId != profileCount);
    profileCount = Math.floor(Math.random() * otherProfile.length);

    updateView();
}