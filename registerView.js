function updateViewRegister() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Registrer din bruker</h1>
        Email<input id="mailInput" type="email" value="Skriv Email" oninput="model.inputs.loginPage.email = this.value">
        <br>
        Brukernavn<input id="usernameInput" value="Skriv Brukernavn" oninput="model.inputs.loginPage.userName = this.value">
        <br>
        Passord<input id="passwordInput" type="password" oninput="model.inputs.loginPage.password = this.value">
        <br>
        <button onclick="createUser()">Registrer</button>
        `;
}