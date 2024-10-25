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
    let messages = messagesByUserId(true);
    let dateFormat = {weekday: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric'};

    for(let chat of messages){
        let user = '';
        let interactedUser;
        let chatId = chat.chatId;
        if(chat.senderId == currentUser){
            user = getUsernameFromId(chat.recipientId);
            interactedUser = chat.recipientId;
        }
        else{
            user = getUsernameFromId(chat.senderId);
            interactedUser = chat.senderId;
        }

        
        let cat = model.cats.find(({ userId }) => userId === interactedUser);

        html += `
            <div id="borderMessages" onclick="goToSelectedChat(${chatId})">
                <div id="catNameMessages">${cat.name}</div>
                <div id="userNameMessages">${user.firstName} ${user.lastName}</div>
                <br />
                <div id="messageFormatMessages">${chat.message}<br /></div>
                <div id="dateMessages">${chat.date.toLocaleString("no-NO", dateFormat)}</div>
            </div>
        `
    }

    return html;
}

function messagesByUserId(removeDublicates){
    let currentUser = model.app.loggedInUser;
    let chat = model.chatLog;
    let messages = chat.filter(message => message.recipientId === currentUser || message.senderId === currentUser)
    messages.sort((a,b) => b.date.getDate() - a.date.getDate());
    messages.sort((a,b) => b.date.getTime() - a.date.getTime());
    if(removeDublicates == true){messagesByChatId = removeDuplicateMessages(messages)}
    else{
        messages = messages.filter(message => message.senderId !== currentUser)
        return messages
    }

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