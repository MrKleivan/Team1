function updateViewLogin() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Logg inn</h1>
        Email/Brukernavn<input id="emailOrUserNameInput" value="Skriv Email" oninput="model.inputs.login.email = this.value">
        <br>
        Passord<input id="passwordInput" oninput="model.inputs.login.password = this.value">
        <br>
        <button onclick="authenticateUser()">Logg inn</button>
        <button onclick="navigateToPage('register')">Registrer</button>
        `;
}