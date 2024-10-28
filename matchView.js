function updateViewMyMatch(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <div>
            <div style="text-align:center; font:50px bold;">
            Matches
            </div>
            ${drawMatchesHtml()}
        </div>
    `;
}

function drawMatchesHtml(){
    let currentUser = model.app.loggedInUser;
    let interactedProfiles = model.interactedProfiles;
    let html = '';
    let dateFormat = {weekday: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric'};

    let matches = interactedProfiles.filter(({ userId, isLike }) => userId == currentUser && isLike == true)
    matches.sort((a,b) => b.date.getDate() - a.date.getDate());

    for(let find of matches){
        let interactedUser = find.interactedUserId;
        let isBothMatched = interactedProfiles.filter(({ userId, interactedUserId, isLike }) => userId == interactedUser && interactedUserId == currentUser && isLike == true);
        for(let match of isBothMatched){
        let user = getUsernameFromId(interactedUser);
        let chatId = getChatId(currentUser, interactedUser);
        let cat = model.cats.find(({ userId }) => userId === interactedUser);

        html += /*html*/`
                <div id="borderMessages">
                    <div id="catNameMessages">${cat.name}</div>
                    <div id="userNameMessages">${user.firstName} ${user.lastName}</div>
                    <br />
                    <div id="dateMessages">${match.date.toLocaleString("no-NO", dateFormat)}</div>
                    <button onclick="navigateToPage('otherProfile', ${interactedUser})">Gå til profil</button>
                    <button onclick="goToSelectedChat(${chatId}, ${interactedUser})">Send melding</button>
                </div>
        `}
    }
    return html;
}