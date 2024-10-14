function createUser(){
    let approvedPassword = document.getElementById("approvePasswordInput").value;
    let user = {}
    user.userId = model.users.length+1;
    user.userEmail = document.getElementById("emailInput").value;
    user.userName = document.getElementById("usernameInput").value;
    user.firstName = document.getElementById("firstNameInput").value;
    user.lastName = document.getElementById("lastNameInput").value;
    user.password = document.getElementById("passwordInput").value;
    
    if(user.password != approvedPassword){
        return model.inputs.register.error = "Feil passord";
    }
    model.users.push(user);
    
    
}

function navigateToLogin(){
    model.app.currentPage = "login";
    updateView();
}