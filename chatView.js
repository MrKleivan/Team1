function updateViewChat() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div>
            ${drawChatHtml(model.inputs.chat.selectedChatId)}
        </div>
    `;
}

function drawChatHtml(id){
    
    let currentUser = model.app.loggedInUser;
    let dateFormat = {weekday: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric'};
    let chatLogs = [];
    let html;
    
    let selectedUserId = getSenderId(id, currentUser)

    let username = getUsernameFromId(selectedUserId)

    model.chatLog.filter(log => {
        if((log.senderId === currentUser && log.recipientId === selectedUserId) || (log.senderId === selectedUserId && log.recipientId === currentUser)){chatLogs.push(log)}
    })

    html = `
        <div style="text-align:center; font:50px bold;">${username.firstName}</div>
    `

    for(log of chatLogs){
        let isSender = false;
        if(log.senderId == currentUser){isSender = true}
        let alignMessage = isSender ? 'right' : 'left';

        html += `
        <div style="text-align: ${alignMessage}">
            ${log.message} <br />
            ${log.date.toLocaleString("no-NO", dateFormat)} <br /><br />
        </div>
        `;
    }

    return html
}

function getSenderId(id, currentUser){
    let selectedChat = model.chatLog.find(({ chatId }) => chatId === id)

    if(selectedChat.senderId !== currentUser){selectedUserId = selectedChat.senderId}
    else{selectedUserId = selectedChat.recipientId}

    return selectedUserId
}