let selectedUser = model.users.filter(user => {
    return user.userId === 2
});
let loggedInUser = 1;

function updateViewChat() { 
    selectedUser = selectedUser.pop()

    document.getElementById('app').innerHTML = /*HTML*/`
        <div>
            <div>
                <img style="height: 30px" src="img/house-solid.svg" alt="Home Icon"  onclick="changePage('home')" />
                <img style="height: 30px" src="img/user-solid.svg" alt="Profile Icon"  onclick="changePage('myProfile')" />
                <img style="height: 30px" src="img/right-to-bracket-solid.svg" alt="Log out Icon"  onclick="changePage('login')" />
            </div>
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
    let chatLogs = [];
    let html = '';
    console.log(chatLogs)
    model.chatLog.filter(log => {
        if((log.senderId === loggedInUser && log.recipientId === selectedUser.userId) ||(log.senderId === selectedUser.userId && log.recipientId === loggedInUser)){chatLogs.push(log)}
    })

    for(log of chatLogs){
        let isSender = false;
        if(log.senderId == loggedInUser){isSender = true}
        let alignMessage = isSender ? 'right' : 'left';

        html += `
        <div style="text-align: ${alignMessage}">
            ${log.message} <br />
            ${log.date} <br /><br />
        </div>

        `
    }

    return html
}