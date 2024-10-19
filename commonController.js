function navigateToPage(page){
    model.app.currentPage = page;
    updateView();
}

function logOutUser(){
    model.app.loggedInUser = null;
    
    navigateToPage('login');

    updateView();
}