function updateViewRegister() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Registrer din bruker</h1>
        Email<input id="emailInput" type="email" oninput="model.inputs.register.userEmail = this.value">
        <br>
        Brukernavn<input id="usernameInput" oninput="model.inputs.register.userName = this.value">
        <br>
        Fornavn<input id="firstNameInput" oninput="model.inputs.register.firstName = this.value">
        <br>
        Etternavn<input id="lastNameInput" oninput="model.inputs.register.lastName = this.value">
        <br>
        Passord<input id="passwordInput" type="password" oninput="model.inputs.register.password = this.value">
        <br>
        Bekreft Passord<input id="approvePasswordInput" type="password" oninput="model.inputs.register.approvePassword = this.value">
        <br>
        <button onclick="createUser()">Registrer</button>
        <h2>${model.inputs.register.error}</h2>
        `;
}