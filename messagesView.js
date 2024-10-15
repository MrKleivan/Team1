function updateViewMessages(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <div>
            <div style="text-align:center; font:50px bold;">
            Chat
            </div>
            ${drawMessagesHtml()}
        </div>
    `;
}

function drawMessagesHtml(){
    let currentUser = model.app.loggedInUser;
    let html = '';
    let messages = messagesByUserId();
    let dateFormat = {weekday: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric'};

    for(chat of messages){
        let user = '';
        if(chat.senderId == currentUser){user = getUsernameFromId(chat.recipientId)}
        else{user = getUsernameFromId(chat.senderId)}
        html += `
            <div>
                ${user.firstName}
                ${user.lastName}<br />
                ${chat.message}<br />
                ${chat.date.toLocaleString("no-NO", dateFormat)}<br /><br />
            </div>
        `
    }

    return html;
}