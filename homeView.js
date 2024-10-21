


function updateViewHome() {
    let html = '';
    
    const LoggedInnUserProfile = model.app.loggedInUser;
    let otherProfileS = createSvipeList();
   
    let otherProfile = getOtherProfile();
    
    

    if(model.inputs.home.watching.length < 1) {
        html = /*HTML*/`<h1>Finn din kats elsker</h1>
        
        <div class="homeContent" >
            <div class="homeContentSide">
            </div>
            <div class="homeContentCenter">
                <div class="profileView" onclick="navigateToPage('otherProfile')">
                    <div class="profileViewTopp" ><h1>Vent for mer<h1></div>
                    <div class="profileViewBottom"><h1>?<h1></div>
                </div>
            </div>
            <div class="homeContentSide">
            </div>
        </div>
        <div class="homeFooter">
        <img style="height: 10vh" src="img/house-solid.svg" alt="home"  onclick="updateView()" />
        </div>
        `;
    } if (model.inputs.home.watching.length > 1){
        let catPicture = model.pictures.filter(u => u.userId === model.inputs.home.watching[1].userId);
        html = /*HTML*/`
        
        <h1>Finn din kats elsker</h1>
        
        <div class="homeContent">
            <div class="homeContentSide">
            <img style="height: 5vh" src="img/leftArrow.svg" alt="Left arrow"  onclick="privPic()" />
            </div>
            <div class="homeContentCenter">
                <div class="profileView" style="background-image: url(${catPicture[model.inputs.home.placeInSequence].pictureUrl});" onclick="navigateToPage('otherProfile')">
                    <div class="profileViewTopp"><h1>${otherProfile[1].name}<h1></div>
                    <div class="profileViewBottom"><h2>${otherProfile[1].description}<h2></div>
                </div>
            </div>
            <div class="homeContentSide">
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



