function updateViewHome() {
    let myProfile = model.app.loggedInUser;
    let otherProfile = model.users.filter(user => user.userId != myProfile);
    let count = Math.floor(Math.random * model.users.length - 1);
    
    
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1 style="font-size:5vh;text-align:center;color:purple;">Finn din kats elsker</h1>
        
        
        <div id="homeContent" style="width: 60vh; height: 60vh; align-content: center; margin: auto; border-radius: 40px; background-color: rgba(255, 255, 255, 0.5);">
            <div class="profileImage" style="width: 55vh; height: 55vh; margin: auto; border-radius: 40px; background-image: url(img/cat2.jpg); background-size: cover;">
            
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


