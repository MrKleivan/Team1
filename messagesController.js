function goToSelectedChat(selectedId){
    model.inputs.chat.selectedChatId = selectedId;
    model.app.currentPage = 'chat';

    updateView();
}