function updateViewChat() {
    let selectedId = model.inputs.chat.selectedChatId
    let isSavedChat = model.chatLog.some(({ chatId }) => chatId === selectedId);

    if(isSavedChat == true){
        document.getElementById('app').innerHTML = /*HTML*/`
        <div id="chatBox">
            <div>
                ${drawChatHtml(selectedId)}
            </div>
            <div class="custom_input">
                <input class="input" type="text" placeholder="Skriv melding" oninput="model.inputs.chat.message = this.value">
                <button onclick="sendMessage()">Send</button>
            </div>
        </div>    
    `;}
    else{
        document.getElementById('app').innerHTML = /*HTML*/`
        <div id="chatBox">
            <div class="custom_input">
                <input class="input" type="text" placeholder="Skriv melding" oninput="model.inputs.chat.message = this.value">
                <button onclick="createNewChat()">Send</button>
            </div>
        </div>    
    `;        
    }
}

function drawChatHtml(id){
    let currentUserId = model.app.loggedInUser;
    let dateFormat = {weekday: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric'};
    let html;
    
    let selectedUserId = getSenderId(id, currentUserId)
    let cat = model.cats.find(({ userId }) => userId === selectedUserId);

    let username = getUsernameFromId(selectedUserId)
    
    let chatLogs = getChatLog(currentUserId, selectedUserId);
    

    html = `
        <div id="catNameMessages" style="text-align:center">${cat.name}</div>
        <div id="userNameMessages" style="text-align:center">${username.firstName}</div>
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