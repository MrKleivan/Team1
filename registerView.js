function updateViewRegister() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="registrationForm">
        <div class="inputBox">
        <h1>Registrer</h1>
        <label>Email:</label>
        <br>
        <input id="emailInput" type="email" value="${model.inputs.register.userEmail}" placeholder="example@gmail.com" oninput="model.inputs.register.userEmail = this.value">
        <br>
        <label>Brukernavn:</label>
        <br>
        <input id="userNameInput" placeholder="Skriv inn ditt brukernavn" value="${model.inputs.register.userName}" type="text" oninput="model.inputs.register.userName = this.value">
        <br>
        <label>Fornavn:</label>
        <br>
        <input id="firstNameInput" placeholder="Skriv inn ditt fornavn" value="${model.inputs.register.firstName}" type="text" oninput="model.inputs.register.firstName = this.value">
        <br>
        <label>Etternavn:</label>
        <br>
        <input id="lastNameInput" placeholder="Skriv inn ditt etternavn" value="${model.inputs.register.lastName}" type="text" oninput="model.inputs.register.lastName = this.value">
        <br>
        <label>Passord:</label>
        <br>
        <input id="passwordInput" placeholder="Skriv inn ditt passord" type="password" oninput="model.inputs.register.password = this.value">
        <br>
        <label>Bekreft passord:</label>
        <br>
        <input id="approvePasswordInput" type="password" placeholder="Skriv inn passord på nytt" oninput="model.inputs.register.approvePassword = this.value">
        <br>
        <button type="submit" onclick="createUser()">Registrer</button>
        <h2>${model.inputs.register.error}</h2>
        </div>
    </div>
        `;
}