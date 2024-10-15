function authenticateUser(){
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;

    let match = model.users.find(u => u.userEmail == email && u.password == password)
    console.log(match);
    // navigateToPage('home')

}

function navigateToPage(page){
    model.app.currentPage = page;
    updateView();
}
