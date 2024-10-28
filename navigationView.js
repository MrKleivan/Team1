function drawNavigationButtons(){
    if(model.app.loggedInUser != null){
        let messagesNotifications = countNotifications(getChatNotificationList())
        let matchesNotfications = countNotifications(getMatchNotificationList())
        let messagesNotificationsHtml = '';
        let matchesNotficationsHtml = '';
        console.log(matchesNotfications)
        if(messagesNotifications > 9){
            messagesNotificationsHtml = `
             <div class="numberCircle notificationStyleDiv">+9</div>
            `; 
        }else if(messagesNotifications > 0){
            messagesNotificationsHtml = `
             <div class="numberCircle notificationStyleDiv">${messagesNotifications}</div>
            `; 
        }
        
        if(matchesNotfications > 9){
            matchesNotficationsHtml = `
             <div class="numberCircle notificationStyleDiv">+9</div>
            `; 
        }else if(matchesNotfications > 0){
            matchesNotficationsHtml = `
             <div class="numberCircle notificationStyleDiv">${matchesNotfications}</div>
            `; 
        }

        document.getElementById("header").innerHTML = `
        <div class="left-icons">
            <span class="buttonForIcon">
                <img class='image' src="img/house-solid.svg" alt="Home Icon" onclick="navigateToPage('home')" />
            </span>
            <div id="container">
                <span class="buttonForIcon">
                    <img class='image notificationStyleImg' src="img/comments-solid.svg" alt="Messages Icon" onclick="navigateToPage('messages')" />
                    ${messagesNotificationsHtml}
                    </span>
            </div>
            <span class="buttonForIcon">
                <img class='image notificationSyleImg' src="img/hand-holding-heart-solid.svg" alt="Matches Icon" onclick="navigateToPage('match')" />
                ${matchesNotficationsHtml}
            </span>
        </div>
        <div class="right-icons">
            <span class="buttonForIcon">
                <img class='image' src="img/user-solid.svg" alt="Profile Icon" onclick="navigateToPage('myProfile')" />
            </span>
            <span class="buttonForIcon">
                <img class='image' src="img/right-to-bracket-solid.svg" alt="Log out Icon" onclick="logOutUser()" />
            </span>
        </div>
    `}
    else{
        document.getElementById("header").innerHTML = `
            <span class="buttonForIcon">
                <img class='image' src="img/right-to-bracket-solid.svg" alt="Log out Icon" onclick="logOutUser()" />
            </span>
        </div>
    `
    }
}

function getChatNotificationList(){
    let currentUserId = model.app.loggedInUser;
    let messages = messagesByUserId()

    messages = messages.filter(message => message.senderId !== currentUserId);
    
    return messages
}

function getMatchNotificationList(){
    let output = [];
    let currentUser = model.app.loggedInUser;
    let interactedProfiles = model.interactedProfiles;
    let matches = interactedProfiles.filter(({ userId, isLike }) => userId == currentUser && isLike == true)
    matches.sort((a,b) => b.date.getDate() - a.date.getDate());

    for(let find of matches){
        let interactedUser = find.interactedUserId;
        let isBothMatched = interactedProfiles.filter(({ userId, interactedUserId, isLike }) => userId == interactedUser && interactedUserId == currentUser && isLike == true);
        
        output.push(isBothMatched.pop())
    }

    return output;
}