let selectedUser = model.users.filter(user => {
    return user.userId === 1
});
selectedUser = selectedUser.pop()
let loggedInUser = 3;

function updateViewChat() { 

    document.getElementById('app').innerHTML = /*HTML*/`
        <div>

            <div style="text-align:center; font:50px bold; ">
                ${selectedUser.userName}
            </div><br />
            <div>
                ${drawChatHtml()}
            </div>
        </div>
    `;
}

function drawChatHtml(){
    let dateFormat = {weekday: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric'};

    let chatLogs = [];
    let html = '';
    console.log(chatLogs)
    model.chatLog.filter(log => {
        if((log.senderId === loggedInUser && log.recipientId === selectedUser.userId) || (log.senderId === selectedUser.userId && log.recipientId === loggedInUser)){chatLogs.push(log)}
    })

    for(log of chatLogs){
        let isSender = false;
        if(log.senderId == loggedInUser){isSender = true}
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