function updateViewChat() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="chatBox">
        <div>
            ${drawChatHtml(model.inputs.chat.selectedChatId)}
        </div>
        <div class="custom_input">
            <input class="input" type="text" placeholder="Skriv melding" oninput="model.inputs.chat.message = this.value">
            <button onclick="sendMessage()">Send</button>
        </div>
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

function getChatId(currentUserId, selectedUserId){
    let chats = model.chatLog;
    let chatId;

    isInSystem = chats.some(({ senderId, recipientId }) => (senderId === currentUserId && recipientId === selectedUserId) || (senderId === selectedUserId && recipientId === currentUserId));

    if(isInSystem == true){
        currentChat = chats.find(({ senderId, recipientId }) => (senderId === currentUserId && recipientId === selectedUserId) || (senderId === selectedUserId && recipientId === currentUserId));

        chatId = currentChat.chatId;
    }
    else{
        let maxObj = chats.reduce(function(max, obj) {
            return obj.chatId > max.chatId? obj : max;
        });
        
        chatId = maxObj.chatId + 1;
    }

    return chatId;
}