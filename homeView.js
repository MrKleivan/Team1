


function updateViewHome() {
    let html = '';
    
    const LoggedInnUserProfile = model.app.loggedInUser;
    let otherProfileS = createSvipeList();
   
    let otherProfile = getOtherProfile();
    
    

    if(model.inputs.home.watching.length < 1) {
        html = /*HTML*/`<h1 style="font-size:3vh;text-align:center;color:purple;">Finn din kats elsker</h1>
        
        <div id="homeContent"  style="width: 100%; height: 80%; margin: auto;align-items: center; display: flex; align-content:center; text-align: center;">
            <div style="width: 10%; height: 95%; align-content:center;" >
            </div>
            <div id="homeProfile" style="width: 95%; height: 90%; border-radius: 40px; align-content: center; background-color: rgba(255, 255, 255, 0.5);">
                <div class="profileView" onclick="navigateToPage('otherProfile')" style=" width: 98%; height: 98%; margin: auto; border-radius: 40px;background-color: rgba(255,255,255,0.5)">
                    <div style="height: 80%; padding: 20px;"><h1>Vent for mer<h1></div>
                    <div style="text-align: start;"><h1 class="profileScript">?<h1></div>
                </div>
            </div>
            <div style="width: 10%; height: 10%; align-content:center;">
            </div>
        </div>
        <div style="text-align: center;">
        <img style="height: 10vh" src="img/house-solid.svg" alt="home"  onclick="updateView()" />
        </div>
        `;
    } if (model.inputs.home.watching.length > 1){
        let catPicture = model.pictures.filter(u => u.userId === model.inputs.home.watching[1].userId);
        html = /*HTML*/`
        
        <h1 style="font-size:3vh;text-align:center;color:purple;">Finn din kats elsker</h1>
        
        <div id="homeContent"  style="width: 100%; height: 80%; margin: auto;align-items: center; display: flex; align-content:center; text-align: center;">
            <div class="pictureSvipe" style="width: 10%; height: 95%; align-content:center;" >
            <img style="height: 5vh" src="img/leftArrow.svg" alt="Left arrow"  onclick="privPic()" />
            </div>
            <div id="homeProfile" style="width: 95%; height: 90%; border-radius: 40px; align-content: center; background-color: rgba(255, 255, 255, 0.5);">
                <div class="profileView" onclick="navigateToPage('otherProfile')" style=" width: 98%; height: 98%; margin: auto; border-radius: 40px; background-image: url(${catPicture[model.inputs.home.placeInSequence].pictureUrl});background-size: cover;background-position: center; background-repeat: no-repeat;">
                    <div style="height: 80%; padding: 20px;"><h1>${otherProfile[1].name}<h1></div>
                    <div style="text-align: start;"><h1 class="profileScript" >${otherProfile[1].description}<h1></div>
                </div>
            </div>
            <div class="pictureSvipe" style="width: 10%; height: 10%; align-content:center;">
            <img style="height: 5vh" src="img/rightArrow.svg" alt="Right arrow"  onclick="nextPic()" />
            </div>
        </div>
        <div style="text-align: center;">
            ${createPictureCircle(catPicture)}
        </div>
        <br>
        <div  id="likeButtons" style="width: 90%; margin: auto; text-align: center;">
            <button onclick="likeCat(${LoggedInnUserProfile}, ${otherProfile[1].userId})" style="width: 10vw; height: 4vh; border: none; margin-right: 40px; border-radius: 10px; background-color: rgba(255,255,255,0.7);">Liker</button>
            <button onclick="notLikeCat(${LoggedInnUserProfile}, ${otherProfile[1].userId})" style="width: 10vw; height: 4vh; border: none; border-radius: 10px; background-color: rgba(255,255,255,0.7);">Liker ikke</button>
        </div>
        `;
    }

    document.getElementById('app').innerHTML = html;
    
}

function createPictureCircle(catPicture) {
    let html = '';
    for(i = 0; i < catPicture.length; i++){
        html += /*HTML*/`<span>
            <svg width="30" height="30">
                <circle cx="15" cy="15" r="10" fill="${model.inputs.home.placeInSequence == i ? `yellow` : `grey`}" />
            </svg> 
        </span>`;
    }
    return html;
}



