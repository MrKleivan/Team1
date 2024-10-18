function createUser(){
    let getInputEmail = document.getElementById("emailInput").value;
    let getInputUserName = document.getElementById("userNameInput").value;
    let getInputFirstName = document.getElementById("firstNameInput").value;
    let getInputLastName = document.getElementById("lastNameInput").value;
    let getInputPassword = document.getElementById("passwordInput").value
    let confirmPassword = document.getElementById("confirmPasswordInput").value;

    authenticateInputData(getInputEmail, getInputUserName, getInputFirstName, getInputLastName, getInputPassword, confirmPassword)
}

function authenticateInputData(inputEmail, inputUserName, inputFirstName, inputLastName, inputPassword, inputConfirmPassword){
    let findUser = model.users.find(u => u.userEmail == inputEmail || u.userName == inputUserName);
    let user = {}

    user.userId = model.users.length+1;
    user.userEmail = inputEmail;
    user.userName = inputUserName;
    user.firstName = inputFirstName;
    user.lastName = inputLastName;
    user.password = inputPassword;

    if(!inputEmail || !inputUserName || !inputFirstName || !inputLastName || !inputPassword || !inputConfirmPassword){
        model.inputs.register.error = "Det er et tomt felt"; 
        updateView(); 
        return;
    }
    if(!inputEmail.match(/@gmail.com/)){      
        model.inputs.register.error = "Vi tar kun @gmail.com brukere"; 
        updateView(); 
        return;
    }
    if(user.password != inputConfirmPassword){
        model.inputs.register.error = "Ikke samme passord";
        updateView();
        return;
    }
    if(findUser){
        model.inputs.register.error = "En bruker med denne emailen eller brukernavnet eksisterer allerede";
        updateView();
        return;
    }

        model.users.push(user);
        navigateToPage("login")
}