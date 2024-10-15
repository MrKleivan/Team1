function updateViewHome() {
    let myProfile = model.app.loggedInUser;
    let otherProfile = model.users.filter(user => user.userId != myProfile);
    let otherCatProfile =  model.cats.filter(user => user.userId != myProfile);
    let catPicture = model.pictures.filter(user => user.id == myProfile);
    let count = Math.floor(Math.random * model.users.length - 1);
    
    
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 style="font-size:5vh;text-align:center;color:purple;">Finn din kats elsker</h1>
        
        <div id="homeContent"  style="width: 80vh; height: 60vh; margin: auto; display: flex; align-content:center; text-align: center;">
            <div style="width: 10%; height: 80%; align-content:center;" >
                <button style="width: 20px; height: 20px;"></button>
            </div>
            <div id="homeProfile" style="width: 80%; height: 80%; border-radius: 40px; align-content: center; background-color: rgba(255, 255, 255, 0.5);">
                <div class="profileView" style=" width: 90%; height: 90%; margin: auto; border-radius: 40px; background-image: url(${catPicture[0].pictureUrl});background-size: cover;">
                    <h1>${otherCatProfile[0].name}<h1>
                    <h1 class="profileScript">${otherCatProfile[0].description}<h1>
                </div>
            </div>
            <div style="width: 10%; height: 80%;align-content:center;">
                <button style="width: 20px; height: 20px;"></button>
            </div>
        </div>
        
        
        <br/>
        <div style="width: 20vw; margin: auto; text-align: center;">
            <button onclick="likeCat()" style="width: 5vw; height: 4vh; border: none; margin-right: 20px; border-radius: 10px; background-color: rgba(255,255,255,0.7);">Liker</button>
            <button onclick="notLikeCat()" style="width: 5vw; height: 4vh; border: none; border-radius: 10px; background-color: rgba(255,255,255,0.7);">Liker ikke</button>
        </div>
        `;
    
}



function likeCat(myUserProfile, otherUserProfile) {
    

    updateView();
}

function notLikeCat(myUserProfile, otherUserProfile) {



    updateView();
}


