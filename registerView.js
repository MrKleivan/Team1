function updateViewRegister() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Registrer din bruker</h1>
        Email<input id="emailInput" type="email" value="${model.inputs.register.userEmail}" oninput="model.inputs.register.userEmail = this.value">
        <br>
        Brukernavn<input id="userNameInput" value="${model.inputs.register.userName}" type="text" oninput="model.inputs.register.userName = this.value">
        <br>
        Fornavn<input id="firstNameInput" value="${model.inputs.register.firstName}" type="text" oninput="model.inputs.register.firstName = this.value">
        <br>
        Etternavn<input id="lastNameInput" value="${model.inputs.register.lastName}" type="text" oninput="model.inputs.register.lastName = this.value">
        <br>
        Passord<input id="passwordInput" type="password" oninput="model.inputs.register.password = this.value">
        <br>
        Bekreft Passord<input id="approvePasswordInput" type="password" oninput="model.inputs.register.approvePassword = this.value">
        <br>
        <button type="submit" onclick="createUser()">Registrer</button>
        <h2>${model.inputs.register.error}</h2>
        `;
}