function createUser(){
    let approvedPassword = document.getElementById("approvePasswordInput").value;
    let getInputEmail = document.getElementById("emailInput").value;
    let getInputUserName = document.getElementById("userNameInput").value;
    let getInputFirstName = document.getElementById("firstNameInput").value;
    let getInputLastName = document.getElementById("lastNameInput").value;
    let getInputPassword = document.getElementById("passwordInput").value;
    let user = {}

    user.userId = model.users.length+1;
    user.userEmail = getInputEmail;
    user.userName = getInputUserName;
    user.firstName = getInputFirstName;
    user.lastName = getInputLastName;
    user.password = getInputPassword;

    console.log(user.password)
    console.log(approvedPassword)

    if(!getInputEmail || !getInputUserName || !getInputFirstName || !getInputLastName || !getInputPassword){
        model.inputs.register.error = "Det er et tomt felt"; 
        updateView(); 
        return;
    }
    if(!getInputEmail.match(/@gmail.com/)){        
        model.inputs.register.error = "Vi tar kun @gmail.com brukere"; 
        updateView(); 
        return}
    if(user.password != approvedPassword){
        model.inputs.register.error = "Ikke samme passord";
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