function authenticateUser(){
    let emailOrUserName = document.getElementById("emailOrUserNameInput").value;
    let password = document.getElementById("passwordInput").value;

    authenticateLoginData(emailOrUserName, password)

    if(findUser) {
        model.app.loggedInUser = findUser.userId;
        navigateToPage('home')
    }
}

function authenticateLoginData(inputEmailOrUserName, inputPassword){
    return findUser = model.users.find(u => u.userEmail == inputEmailOrUserName || u.userName == inputEmailOrUserName && u.password == inputPassword);
}

function navigateToPage(page){
    model.app.currentPage = page;
    updateView();
}
