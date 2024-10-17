function createUser(){
    let confirmPassword = document.getElementById("approvePasswordInput").value;
    let getInputEmail = document.getElementById("emailInput").value;
    let getInputUserName = document.getElementById("userNameInput").value;
    let getInputFirstName = document.getElementById("firstNameInput").value;
    let getInputLastName = document.getElementById("lastNameInput").value;
    let getInputPassword = document.getElementById("passwordInput").value;
    let findUser = model.users.find(u => u.userEmail == getInputEmail || u.userName == getInputUserName);
    let user = {}

    user.userId = model.users.length+1;
    user.userEmail = getInputEmail;
    user.userName = getInputUserName;
    user.firstName = getInputFirstName;
    user.lastName = getInputLastName;
    user.password = getInputPassword;

    if(!getInputEmail || !getInputUserName || !getInputFirstName || !getInputLastName || !getInputPassword){
        model.inputs.register.error = "Det er et tomt felt"; 
        updateView(); 
        return;
    }
    if(!getInputEmail.match(/@gmail.com/)){        
        model.inputs.register.error = "Vi tar kun @gmail.com brukere"; 
        updateView(); 
        return;
    }
    if(user.password != confirmPassword){
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
        navigateToLogin();
}

function navigateToLogin(){
    model.app.currentPage = "login";
    updateView();
}