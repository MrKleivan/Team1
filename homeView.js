
let otherProfile = createSvipeList();
let profileCount = Math.floor(Math.random() * model.users.length);
otherProfile = otherProfile.filter(user => user.userId === profileCount);
let catPic = otherProfile.filter(u => u.pictureUrl);
function updateViewHome() {
    
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 style="font-size:3vh;text-align:center;color:purple;">Finn din kats elsker</h1>
        
        <div id="homeContent"  style="width: 100%; height: 80%; margin: auto;align-items: center; display: flex; align-content:center; text-align: center;">
            <div style="width: 10%; height: 95%; align-content:center;" >
            <img style="height: 5vh" src="img/leftArrow.svg" alt="Left arrow"  onclick="privPic()" />
            </div>
            <div id="homeProfile" style="width: 95%; height: 90%; border-radius: 40px; align-content: center; background-color: rgba(255, 255, 255, 0.5);">
                <div class="profileView" onclick="navigateToPage('otherProfile')" style=" width: 90%; height: 90%; margin: auto; border-radius: 40px; background-image: url(${catPic[1]});background-size: cover;background-position: center; background-repeat: no-repeat;">
                    <div style="height: 80%; padding: 20px;"><h1>${otherProfile.name}<h1></div>
                    <div style="text-align: start;"><h1 class="profileScript" >${otherProfile.description}<h1></div>
                </div>
            </div>
            <div style="width: 10%; height: 10%; align-content:center;">
            <img style="height: 5vh" src="img/rightArrow.svg" alt="Right arrow"  onclick="nextPic()" />
            </div>
        </div>
        <div style="text-align: center;">
            <span>
                <svg width="30" height="30">
                    <circle cx="15" cy="15" r="10" fill="${count == 0 ? `yellow` : `grey`}" />
                </svg> 
            </span>
            <span>
                <svg width="30" height="30">
                    <circle cx="15" cy="15" r="10" fill="${count == 1 ? `yellow` : `grey`}" />
                </svg> 
            </span>
            <span>
                <svg width="30" height="30">
                    <circle cx="15" cy="15" r="10" fill="${count == 2 ? `yellow` : `grey`}" />
                </svg> 
            </span>
            <span>
                <svg width="30" height="30">
                    <circle cx="15" cy="15" r="10" fill="${count == 3 ? `yellow` : `grey`}" />
                </svg> 
            </span>
            <span>
                <svg width="30" height="30">
                    <circle cx="15" cy="15" r="10" fill="${count == 4 ? `yellow` : `grey`}" />
                </svg> 
            </span>
        </div>
        <br>
        <div style="width: 90%; margin: auto; text-align: center;">
            <button onclick="likeCat(myProfile, otherProfile[profileCount].userId)" style="width: 10vw; height: 4vh; border: none; margin-right: 40px; border-radius: 10px; background-color: rgba(255,255,255,0.7);">Liker</button>
            <button onclick="notLikeCat(myProfile, otherProfile[profileCount].userId)" style="width: 10vw; height: 4vh; border: none; border-radius: 10px; background-color: rgba(255,255,255,0.7);">Liker ikke</button>
        </div>
        `;
    
}




