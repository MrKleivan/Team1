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

    let matches = interactedProfiles.filter(({ userId }) => userId == currentUser)

    for(let match of matches){
        let interactedUser = match.interactedUserId;
        let user = getUsernameFromId(interactedUser);

        html += `
                <div id="borderMessages">
                    <div id="userNameMessages">${user.firstName} ${user.lastName}</div>
                    <br />
                    <div id="dateMessages">${match.date.toLocaleString("no-NO", dateFormat)}</div>
            </div>
        `
    }


    return html;
}