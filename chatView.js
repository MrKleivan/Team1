function updateViewChat() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div>
            <div>
                ${selectedUser.userName}
            </div>
        </div>
    `;
    
}