function updateViewLogin() {
    document.getElementById('app').innerHTML = /*HTML*/`

        Email<input id="mailInput" value="Skriv Email" oninput="model.inputs.loginPage.email = this.value">
        <br>
        Passord<input id="mailInput" value="Skriv Passord" oninput="model.inputs.loginPage.password = this.value">
        <br>
        <button onclick="authenticateUser()">Logg inn</button>
        <button onclick="navigateToRegistration()">Registrer</button>
        `;
}