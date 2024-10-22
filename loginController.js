function authenticateUser(){
    let emailOrUserName = document.getElementById("emailOrUserNameInput").value;
    let password = document.getElementById("passwordInput").value;

    authenticateLoginData(emailOrUserName, password)

    if(findUser) {
        model.app.loggedInUser = findUser.userId;
        navigateToPage('myProfile')
    }
}

function authenticateLoginData(inputEmailOrUserName, inputPassword){
    return findUser = model.users.find(u => u.userEmail == inputEmailOrUserName || u.userName == inputEmailOrUserName && u.password == inputPassword);
}
