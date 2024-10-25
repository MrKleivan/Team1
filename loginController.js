function authenticateUser(){
    let loginInput = model.inputs.login;
    getLoginInputData();
    let foundUser = authenticateLoginData(inputDataObj.emailOrUserName, inputDataObj.password);

    if(foundUser) {
        let userId = findUser.userId
        loginInput.error = "";
        setLoggedInUserId(userId);
        navigationAfterLogin(userId);
    }else{
        loginInput.error = "Brukernavn eller passord er feil"
        updateView()
    }
    }

    function navigationAfterLogin(ID){
        if(isCatOwner(ID)) navigateToPage('home');
        else navigateToPage('myProfile');
    }

    function authenticateLoginData(inputEmailOrUserName, inputPassword){ 
        return findUser = model.users.find(u => u.userEmail == inputEmailOrUserName || u.userName == inputEmailOrUserName && u.password == inputPassword);
    }

    function getLoginInputData(){
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



