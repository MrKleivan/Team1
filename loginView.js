function updateViewLogin() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="loginForm">
        <div id="loginElementContainer">
        <h1>Logg inn</h1>
        <label>Email/Brukernavn</label>
        <br>
        <input class="loginInput"  id="emailOrUserNameInput" placeholder="example@gmail.com" oninput="model.inputs.login.email = this.value">
        <br>
        <label>Passord</label>
        <br>
        <input class="loginInput" id="passwordInput" oninput="model.inputs.login.password = this.value" onkeydown="if(event.code === 'Enter') authenticateUser()" >
        <br>
        <button onclick="authenticateUser()" style="margin-left:-5px">Logg inn</button>
        <button onclick="navigateToPage('register')">Registrer</button>
        </div>
    </div>
        `;
}