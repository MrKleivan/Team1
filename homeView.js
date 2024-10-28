


function updateViewHome() {
    let html = '';
    
    const loggedInnUserProfile = model.app.loggedInUser;
    createSvipeList();
   
    let otherProfile = getOtherProfile();
    
    

    if(model.inputs.home.svipeList.length < 1) {
        html = /*HTML*/`
        
        <div class="homeContent" >
            <div class="homeContentSideNoneSvipe">
            </div>
            <div class="homeContentCenterNoneSvipe">
                <div class="profileViewNoneSvipe">
                    <div class="profileViewTopp" ><h1>Du har sveipet gjennom alle katteprofilene</h1></div>
                    <div class="profileViewBottom"><h1>Venligst vent på flere brukere</h1></div>
                </div>
            </div>
            <div class="homeContentSideNoneSvipe">
            </div>
        </div>
        <div class="homeContentLikeButtonsNoneSvipe" onclick="updateView()">
            <img src="img/house-solid.svg" alt="home" />
        </div>
        `;
    } if (model.inputs.home.svipeList.length > 1){
        let catPicture = model.pictures.filter(u => u.userId === model.inputs.home.watching[1].userId) || '';
        let displaydPicture = '';
        html = /*HTML*/`
        
        
        <div class="homeContentTopp"><h1>Finn din kats kjærlighet</h1></div>
        <div class="homeContent">
            <div class="homeContentSide" onclick="privPic()">
                <img src="img/leftArrow2.svg" alt="Left arrow" />
            </div>
            <div class="homeContentCenter">
                <div class="profileView" style="background-image: url(${displaydPicture = catPicture.length > 0  ? catPicture[model.inputs.home.placeInSequence].pictureUrl : '/img/nofoto.jpg'});" onclick="navigateToPage('otherProfile', ${model.inputs.home.watching[1].userId})">
                    <div class="profileViewTopp"><h1>${otherProfile[1].name}</h1></div>
                    <div class="profileViewBottom"><h1>${otherProfile[1].description}</h1></div>
                </div>
            </div>
            <div class="homeContentSide" onclick="nextPic(${catPicture.length})">
                <img src="img/rightArrow2.svg" alt="Right arrow"/>
            </div>
        </div>
        <div style="text-align: center;">
            ${createPictureCircle(catPicture)}
        </div>
        <br>
        <div  class="homeContentLikeButtons">
            <button id="likeButton" onclick="likeCat(${loggedInnUserProfile}, ${otherProfile[1].userId})">Liker</button>
            <button id="likeButton" onclick="notLikeCat(${loggedInnUserProfile}, ${otherProfile[1].userId})">Liker ikke</button>
        </div>
        `;
    }

    document.getElementById('app').innerHTML = html;
    
    model.inputs.home.isTrue = false;
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



