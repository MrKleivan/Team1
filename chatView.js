function updateViewChat() { 
    let selectedUser = model.users.filter(user => {
        return user.userId === 1
    });
    selectedUser = selectedUser.pop()

    document.getElementById('app').innerHTML = /*HTML*/`
        <div>
            <div>
                ${selectedUser.userName}
            </div><br />
            <div>
                ${drawChatHtml()}
            </div>
        </div>
    `;
    
}

function drawChatHtml(){
    let chat = model.chatLog;
    let chatLogs = [];
    let html = '';
    console.log(chatLogs)
    model.chatLog.filter(log => {
        if(log.senderId === 1){chatLogs.push(log)}
    })

    for(log of chatLogs){
        html += `
            ${log.message} <br />
            ${log.date} <br /><br />

        `
    }

    return html
}