    function createUser(){
        getRegisterInputData();
        if(!isEmptyInputs(registerInputDataObj.getInputEmail, registerInputDataObj.getInputUserName, registerInputDataObj.getInputFirstName, registerInputDataObj.getInputLastName, registerInputDataObj.getInputPassword, registerInputDataObj.getconfirmPassword)) return;
        setUserData(model.users.length+1,registerInputDataObj.getInputEmail, registerInputDataObj.getInputUserName, registerInputDataObj.getInputFirstName, registerInputDataObj.getInputLastName, registerInputDataObj.getInputPassword);

        model.users.push(registeredUser);
        model.inputs.register.error = "";
        navigateToPage('login');
    }

    function setUserData(userID, inputEmail, inputUserName, inputFirstName, inputLastName, inputPassword){
        return registeredUser = {
        userId : userID,
        userEmail : inputEmail,
        userName : inputUserName,
        firstName : inputFirstName,
        lastName : inputLastName,
        password : inputPassword,
        }
    }

    function getRegisterInputData(){
        return registerInputDataObj = {
            getInputEmail : document.getElementById("emailInput").value,
            getInputUserName : document.getElementById("userNameInput").value,
            getInputFirstName : document.getElementById("firstNameInput").value,
            getInputLastName : document.getElementById("lastNameInput").value,
            getInputPassword : document.getElementById("passwordInput").value,
            getconfirmPassword : document.getElementById("confirmPasswordInput").value,
        }
    }

    function isEmptyInputs(inputEmail, inputUserName, inputFirstName, inputLastName, inputPassword, inputConfirmPassword){
        let findUser = model.users.find(u => u.userEmail == inputEmail || u.userName == inputUserName);

        if(!inputEmail || !inputUserName || !inputFirstName || !inputLastName || !inputPassword || !inputConfirmPassword){
            model.inputs.register.error = "Det er et tomt felt"; 
            updateView(); 
            return false;
        }
        if(!inputEmail.match(/@gmail.com/)){      
            model.inputs.register.error = "Vi tar kun @gmail.com brukere"; 
            updateView(); 
            return false;
        }
        if(inputPassword != inputConfirmPassword){
            model.inputs.register.error = "Ikke samme passord";
            updateView();
            return false;
        }
        if(findUser){
            model.inputs.register.error = "En bruker med denne emailen eller brukernavnet eksisterer allerede";
            updateView();
            return false;
        }

        return true;

    }