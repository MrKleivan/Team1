function updateViewChat() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div>
            ${drawChatHtml(model.inputs.chat.selectedChatId)}
        </div>
    `;
}

function drawChatHtml(id){
    
    let currentUserId = model.app.loggedInUser;
    let dateFormat = {weekday: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric'};
    let html;

    let selectedUserId = getSenderId(id, currentUserId)
    
    let username = getUsernameFromId(selectedUserId)
    
    let chatLogs = getChatLog(currentUserId, selectedUserId);


    html = `
        <div style="text-align:center; font:50px bold;">${username.firstName}</div>
    `

    for(log of chatLogs){
        let isSender = false;
        if(log.senderId == currentUserId){isSender = true}
        let alignMessage = isSender ? 'senderBackground' : 'reciverBackground';

        html += `
        <div class="${alignMessage}">
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

function getChatLog(currentUserId, selectedUserId){
    let chatLogs = [];

    model.chatLog.filter(log => {
        if((log.senderId === currentUserId && log.recipientId === selectedUserId) || (log.senderId === selectedUserId && log.recipientId === currentUserId)){chatLogs.push(log)}
    })

    return chatLogs;
}