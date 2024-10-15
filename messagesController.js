function messagesByUserId(){
    let currentUser = model.app.loggedInUser;
    let chat = model.chatLog;
    let messages = chat.filter(message => message.recipientId === currentUser || message.senderId === currentUser)
    messages.sort((a,b) => a.date.getDate() - b.date.getDate());
    return messages;
}

// function removeDuplicateMessages(arr){
//     let noDuplicateMessages = [];

//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//         if(arr[i++].senderId != arr[i].senderId){
//             noDuplicateMessages.push(arr[i])
//         }
//     }
//     console.log(noDuplicateMessages)
// }

function getUsernameFromId(id){
    let users = model.users;
    let user = users.filter(a => a.userId === id)
    
    return user.pop();
}