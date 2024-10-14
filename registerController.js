function createUser(){
    let user = {}
    user.userId = model.users.length;
    user.email = document.getElementById("emailInput").value;
    user.userName = document.getElementById("usernameInput").value;
    user.password = document.getElementById("passwordInput").value;
}

function navigateToLogin(){
    model.app.currentPage = "login";
    updateView();
}