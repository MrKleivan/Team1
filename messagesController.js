// function goToSelectedChat(selectedId){
//     let isSavedChat = model.chatLog.some(({ chatId }) => chatId === selectedId);
//     if(isSavedChat == true){
//         model.inputs.chat.selectedChatId = selectedId;
//         model.app.currentPage = 'chat';
//     }
//     else{
//         model.app.currentPage = 'home';
//     }

//     updateView();
// }

function goToSelectedChat(selectedChatId, selectedUserId){
    model.inputs.chat.selectedChatId = selectedChatId;
    model.inputs.chat.selectedUserId = selectedUserId;
    model.app.currentPage = 'chat';
    setChatAsSeen();

    updateView();
}

function setChatAsSeen(){
    let selectedChatId = model.inputs.chat.selectedChatId;
    let currentUserId = model.app.loggedInUser;
    let currentChat = model.chatLog;
    currentChat = currentChat.filter(chat => chat.chatId === selectedChatId && chat.recipientId === currentUserId)
    for(chat of currentChat){
        chat.isSeen = true;
    }
}