function updateViewChat() {
    let selectedUser = model.users.filter(user => user.userId === 2);
    selectedUser = selectedUser.pop() 
    document.getElementById('app').innerHTML = /*HTML*/`
        <div>

            <div style="text-align:center; font:50px bold; ">
                ${selectedUser.userName}
            </div><br />
            <div>
                ${drawChatHtml(selectedUser)}
            </div>
        </div>
    `;
}

function drawChatHtml(selectedUser){
    let currentUser = model.app.loggedInUser;
    let dateFormat = {weekday: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric'};

    let chatLogs = [];
    let html = '';
    console.log(chatLogs)
    model.chatLog.filter(log => {
        if((log.senderId === currentUser && log.recipientId === selectedUser.userId) || (log.senderId === selectedUser.userId && log.recipientId === currentUser)){chatLogs.push(log)}
    })

    for(log of chatLogs){
        let isSender = false;
        if(log.senderId == currentUser){isSender = true}
        let alignMessage = isSender ? 'right' : 'left';

        html += `
        <div style="text-align: ${alignMessage}">
            ${log.message} <br />
            ${log.date.toLocaleString("no-NO", dateFormat)} <br /><br />
        </div>
        `;
    }

    return html
}