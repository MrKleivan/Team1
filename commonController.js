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

function countNotifications(arr){
    let count = 0;

    for(let item of arr){
        if(item?.isSeen == false){
            count++
        }else{continue}
    }
    return count;
}

function loginPer(){
    model.app.loggedInUser = 1;
    model.app.currentPage = 'messages';

    updateView();
}

function loginEspen(){
    model.app.loggedInUser = 2;
    model.app.currentPage = 'messages';

    updateView();
}