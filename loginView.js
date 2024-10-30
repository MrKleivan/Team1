function updateViewLogin() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="loginForm">
        <div id="loginElementContainer">
        <h1>Logg inn</h1>
        <label>Email/Brukernavn:</label>
        <br>
        <input class="loginInput"  id="emailOrUserNameInput" placeholder="example@gmail.com" oninput="model.inputs.login.email = this.value">
        <br>
        <label>Passord:</label>
        <br>
        <input class="loginInput" id="passwordInput" oninput="model.inputs.login.password = this.value" onkeydown="if(event.code === 'Enter') authenticateUser()" >
        <br>
        <button onclick="authenticateUser()" style="margin-left:-5px">Logg inn</button>
        <button onclick="navigateToPage('register')">Registrer</button>
        </div>
        </div>
        <div style="display:flex; justify-content:center; align-items: center; flex-direction:column">
        <h2 id="errorText">${model.inputs.login.error}</h2>   
        <h2>LoginData:</h2>   
        <h2>Bruker1: per, Passord: 123</h2>   
        <h2>Bruker2: espen, Passord: 123</h2>   
        <h2>Bruker3: pål, Passord: 321</h2>   
        <h2>Bruker4: kåre, Passord: 123</h2>   
        <h2>Bruker5: ole, Passord: 321</h2>
        </div>
        `;
}