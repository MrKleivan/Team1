function updateViewChat() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div>
            <div>
                ${currentUser.userName}
            </div>
        </div>
    `;
    
}