function authenticateUser(){
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;

    let findUser = model.users.find(u => u.userEmail == email && u.password == password)

    if(findUser) {
        model.app.loggedInUser = findUser.userName;
        navigateToPage('home')
    }
}

function navigateToPage(page){
    model.app.currentPage = page;
    updateView();
}
