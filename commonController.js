function navigateToPage(page, selectedUserId){
    model.app.currentPage = page;
    model.inputs.otherProfile.selectedUserId = selectedUserId; 
    updateView();
}

function logOutUser(){
    model.app.loggedInUser = null;
    
    navigateToPage('login');

    updateView();
}