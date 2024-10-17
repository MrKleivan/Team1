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
        let chatId = chat.chatId;
        if(chat.senderId == currentUser){user = getUsernameFromId(chat.recipientId)}
        else{user = getUsernameFromId(chat.senderId)}
        html += `
            <div id="borderMessages" onclick="goToSelectedChat(${chatId})">
                <div id="userNameMessages">${user.firstName} ${user.lastName}</div>
                <br />
                <div id="messageFormatMessages">${chat.message}<br /></div>
                <div id="dateMessages">${chat.date.toLocaleString("no-NO", dateFormat)}</div>
            </div>
        `
    }

    return html;
}

function messagesByUserId(){
    let currentUser = model.app.loggedInUser;
    let chat = model.chatLog;
    let messages = chat.filter(message => message.recipientId === currentUser || message.senderId === currentUser)
    
    messages.sort((a,b) => a.date.getDate() - b.date.getDate());
    messagesByChatId = removeDuplicateMessages(messages)

    return messagesByChatId;
}

function removeDuplicateMessages(arr){
    let noDuplicateMessages = [];
    for(let i = 0; i < model.chatLog.length; i++){
        message = arr.find(({ chatId }) => chatId === i)
        if(message !== undefined){noDuplicateMessages.push(message)}
    }

    return noDuplicateMessages;
}

function getUsernameFromId(id){
    let users = model.users;
    let user = users.filter(a => a.userId === id)
    
    return user.pop();
}