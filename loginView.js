function updateViewLogin() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Logg inn</h1>
        Email/Brukernavn<input id="mailInput" value="Skriv Email" oninput="model.inputs.loginPage.email = this.value">
        <br>
        Passord<input id="mailInput" oninput="model.inputs.loginPage.password = this.value">
        <br>
        <button onclick="authenticateUser()">Logg inn</button>
        <button onclick="navigateToRegistration()">Registrer</button>
        `;
}