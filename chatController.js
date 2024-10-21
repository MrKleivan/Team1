function sendMessage(){
    let text = model.inputs.chat.message;
    let currentUserId = model.app.loggedInUser;
    let selectedUserId = getSenderId(model.inputs.chat.selectedChatId, currentUserId);

    let chatId = getChatId(currentUserId, selectedUserId)

    if(text === ''){return}
    newMessage = {
        senderId: currentUserId
        , message: text
        , date: new Date()
        , recipientId: selectedUserId
        , chatId
    }

    model.chatLog.push(newMessage)

    model.inputs.chat.message = ''
    updateView();
}

function createNewChat(){
    let text = model.inputs.chat.message;
    let currentUserId = model.app.loggedInUser;
    let selectedUserId = model.inputs.chat.selectedUserId;

    let chatId = getChatId(currentUserId, selectedUserId)

    if(text === ''){return}
    newMessage = {
        senderId: currentUserId
        , message: text
        , date: new Date()
        , recipientId: selectedUserId
        , chatId
    }

    model.chatLog.push(newMessage)

    model.inputs.chat.message = ''
    updateView();
}