
let selectedUser = model.users.filter(user => {
     return user.userId === 1
});
popSelectedUser()
function popSelectedUser (){
    selectedUser = selectedUser.pop()
}