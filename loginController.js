function authenticateUser(){
    let loginInput = model.inputs.login;
    getInputData();
    authenticateLoginData(inputDataObj.emailOrUserName, inputDataObj.password);

    if(findUser) {
        let userId = findUser.userId
        loginInput.error = "";
        setLoggedInUserId(userId);
        navigationAfterAuth(userId);
    }else{
        loginInput.error = "Brukernavn eller passord er feil"
        updateView()
    }
}

function navigationAfterAuth(ID){
    if(isCatOwner(ID)) navigateToPage('home');
    else navigateToPage('myProfile');
}

function authenticateLoginData(inputEmailOrUserName, inputPassword){ 
    return findUser = model.users.find(u => u.userEmail.toLowerCase() == inputEmailOrUserName || u.userName.toLowerCase() == inputEmailOrUserName && u.password == inputPassword);
}

function getInputData(){
    return inputDataObj = {
        emailOrUserName : document.getElementById("emailOrUserNameInput").value,
        password : document.getElementById("passwordInput").value,
    }
}

function isCatOwner(userID){
    return findCat = model.cats.find(cat => cat.userId == userID)
}

function setLoggedInUserId(userId){
    model.app.loggedInUser = userId;
}



