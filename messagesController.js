function goToSelectedChat(selectedId){
    let isSavedChat = model.chatLog.some(({ chatId }) => chatId === selectedId);
    if(isSavedChat == true){
        model.inputs.chat.selectedChatId = selectedId;
        model.app.currentPage = 'chat';
    }
    else{
        model.app.currentPage = 'home';
    }

    updateView();
}