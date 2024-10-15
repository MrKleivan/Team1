function authenticateUser(){
    let emailOrUserName = document.getElementById("emailOrUserNameInput").value;
    let password = document.getElementById("passwordInput").value;

    let findUser = model.users.find(u => u.userEmail == emailOrUserName || u.userName == emailOrUserName && u.password == password)

    console.log(findUser)
    if(findUser) {
        model.app.loggedInUser = findUser.userId;
        console.log(model.app.loggedInUser)
        navigateToPage('home')
    }
}

function navigateToPage(page){
    model.app.currentPage = page;
    updateView();
}
