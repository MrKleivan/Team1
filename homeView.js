let myProfile = model.app.loggedInUser;
let otherProfile = model.users.filter(user => user.userId != myProfile);
let otherCatProfile =  model.cats.filter(user => user.userId != myProfile);
let catPicture = model.pictures.filter(user => user.id == myProfile);
let count = 1;
function updateViewHome() {
    
    
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 style="font-size:3vh;text-align:center;color:purple;">Finn din kats elsker</h1>
        
        <div id="homeContent"  style="width: 100%; height: 80%; margin: auto;align-items: center; display: flex; align-content:center; text-align: center;">
            <div style="width: 10%; height: 95%; align-content:center;" >
            <img style="height: 5vh" src="img/leftArrow.svg" alt="Home Icon"  onclick="count > 0 ? count-- : count = 0" />
            </div>
            <div id="homeProfile" style="width: 95%; height: 90%; border-radius: 40px; align-content: center; background-color: rgba(255, 255, 255, 0.5);">
                <div class="profileView" style=" width: 90%; height: 90%; margin: auto; border-radius: 40px; background-image: url(${catPicture[count].pictureUrl});background-size: cover;background-position: center; background-repeat: no-repeat;">
                    <h1>${otherCatProfile[0].name}<h1>
                    <h1 class="profileScript">${otherCatProfile[0].description}<h1>
                </div>
            </div>
            <div style="width: 10%; height: 10%; align-content:center;">
            <img style="height: 5vh" src="img/rightArrow.svg" alt="Home Icon"  onclick="count < catPicture.lenght ? count++ : count = Number(catPicture.length)" />
            </div>
        </div>
        
        
        <br/>
        <div style="width: 90%; margin: auto; text-align: center;">
            <button onclick="likeCat()" style="width: 10vw; height: 4vh; border: none; margin-right: 40px; border-radius: 10px; background-color: rgba(255,255,255,0.7);">Liker</button>
            <button onclick="notLikeCat()" style="width: 10vw; height: 4vh; border: none; border-radius: 10px; background-color: rgba(255,255,255,0.7);">Liker ikke</button>
        </div>
        `;
    
}



function likeCat(myUserProfile, otherUserProfile) {
    

    updateView();
}

function notLikeCat(myUserProfile, otherUserProfile) {



    updateView();
}


