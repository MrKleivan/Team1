


function updateViewHome() {
    let html = '';
    
    const LoggedInnUserProfile = model.app.loggedInUser;
    let otherProfileS = createSvipeList();
   
    let otherProfile = getOtherProfile();
    
    

    if(model.inputs.home.watching.length < 1) {
        html = /*HTML*/`
        
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
        let number = catPicture.length;
        html = /*HTML*/`
        
        
        <div class="homeContentTopp"><h1>Finn din kats kjærlighet</h1></div>
        <div class="homeContent">
            <div class="homeContentSide" onclick="privPic()">
                <img src="img/leftArrow2.svg" alt="Left arrow" />
            </div>
            <div class="homeContentCenter">
                <div class="profileView" style="background-image: url(${catPicture[model.inputs.home.placeInSequence].pictureUrl});" onclick="navigateToPage('otherProfile')">
                    <div class="profileViewTopp"><h1>${otherProfile[1].name}</h1></div>
                    <div class="profileViewBottom"><h1>${otherProfile[1].description}</h1></div>
                </div>
            </div>
            <div class="homeContentSide" onclick="nextPic(${number})">
                <img src="img/rightArrow2.svg" alt="Right arrow"/>
            </div>
        </div>
        <div style="text-align: center;">
            ${createPictureCircle(catPicture)}
        </div>
        <br>
        <div  class="homeContentLikeButtons">
            <button onclick="likeCat(${LoggedInnUserProfile}, ${otherProfile[1].userId})">Liker</button>
            <button onclick="notLikeCat(${LoggedInnUserProfile}, ${otherProfile[1].userId})">Liker ikke</button>
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



