function sendMessage(text){
    let currentUserId = model.app.loggedInUser;
    let selectedUserId = getSenderId(model.inputs.chat.selectedChatId, currentUserId);

    let chatId = getChatId(currentUserId, selectedUserId)

    newMessage = {
        senderId: currentUserId
        , message: text
        , date: new Date()
        , recipientId: selectedUserId
        , chatId
    }

    model.chatLog.push(newMessage)

    updateView();
}