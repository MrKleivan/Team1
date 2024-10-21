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

    updateView();
}