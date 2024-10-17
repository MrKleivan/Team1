function updateViewChat() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div>
            ${drawChatHtml(model.inputs.chat.selectedChatId)}
        </div>
    `;
}

function drawChatHtml(id){
    let selectedChat = model.chatLog.find(({ chatId }) => chatId === id)
    let selectedUser;
    let currentUser = model.app.loggedInUser;
    let dateFormat = {weekday: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric'};
    let chatLogs = [];
    let html;
    
    if(selectedChat.senderId !== currentUser){selectedUser = selectedChat.senderId}
    else{selectedUser = selectedChat.recipientId}
    let username = getUsernameFromId(selectedUser)

    model.chatLog.filter(log => {
        if((log.senderId === currentUser && log.recipientId === selectedUser) || (log.senderId === selectedUser && log.recipientId === currentUser)){chatLogs.push(log)}
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
