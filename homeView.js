let myProfile = model.app.loggedInUser;
let otherProfile = model.users.filter(user => user.userId != myProfile);
let profileCount = Math.floor(Math.random() * otherProfile.length); 
let otherCatProfile =  model.cats.filter(user => user.userId != myProfile);
let catPicture = model.pictures.filter(user => user.userId == otherProfile[profileCount].userId);
let count = 1;
function updateViewHome() {
    
    
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 style="font-size:3vh;text-align:center;color:purple;">Finn din kats elsker</h1>
        
        <div id="homeContent"  style="width: 100%; height: 80%; margin: auto;align-items: center; display: flex; align-content:center; text-align: center;">
            <div style="width: 10%; height: 95%; align-content:center;" >
            <img style="height: 5vh" src="img/leftArrow.svg" alt="Left arrow"  onclick="privPic()" />
            </div>
            <div id="homeProfile" style="width: 95%; height: 90%; border-radius: 40px; align-content: center; background-color: rgba(255, 255, 255, 0.5);">
                <div class="profileView" onclick="goToProfile()" style=" width: 90%; height: 90%; margin: auto; border-radius: 40px; background-image: url(${catPicture[count].pictureUrl});background-size: cover;background-position: center; background-repeat: no-repeat;">
                    <h1>${otherCatProfile[profileCount].name}<h1>
                    <div style="position: relative; bottom: 4px; left: 2px;"><hr/><h1 class="profileScript" >${otherCatProfile[profileCount].description}<h1></div>
                </div>
            </div>
            <div style="width: 10%; height: 10%; align-content:center;">
            <img style="height: 5vh" src="img/rightArrow.svg" alt="Right arrow"  onclick="nextPic()" />
            </div>
        </div>
        
        
        <br/>
        <div style="width: 90%; margin: auto; text-align: center;">
            <button onclick="likeCat(myProfile, otherProfile[0].userId)" style="width: 10vw; height: 4vh; border: none; margin-right: 40px; border-radius: 10px; background-color: rgba(255,255,255,0.7);">Liker</button>
            <button onclick="notLikeCat(myProfile, otherProfile[0].userId)" style="width: 10vw; height: 4vh; border: none; border-radius: 10px; background-color: rgba(255,255,255,0.7);">Liker ikke</button>
        </div>
        `;
    
}

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

function goToProfile() {
    model.app.currentPage = 'otherProfile';
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


