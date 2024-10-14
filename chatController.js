function userNameById (inputId){
    model.users.filter(user => {
        return user.userId == inputId
    })
}
