let model = {
    app: {
        currentPage: 'login' // register, match , myProfile, match, matchProfile, chat,
    },


    //Inputs
    inputs: {
        login: {
            email: ''
            , userName: ''
            , password: ''
        },
        register: {
            userName: 'per'
            , userEmail: 'per@hotmail.com'
            , password: '123'
            , approvePassword: '123'
            
        }
    },


    //Fellesdata
    user: [
        {
            userId: 1
            , userName: 'per'
            , userEmail: 'per@hotmail.com'
            , password: '123'
            , firstName: 'Per'
        },
        {
            userId: 2
            , userName: 'espen'
            , userEmail: 'epsen@mail.com'
            , password: '123'
            , firstName: 'Espen'
        },
        {
            userId: 3
            , userName: 'pål'
            , userEmail: 'pållern@gmail.com'
            , password: '321'
        },
    ],

    cat: [
        {
            
        }
    ],

    pictures: [
        {userId: 1, pictureURL: '', number: 1} //Spørr terje/dag om liste i picture istedenfor
        , { userId: 1, pictureURL: '',}
        , { userId: 1, pictureURL: '',}
        , { userId: 1, pictureURL: '',}
        , { userId: 1, pictureURL: '',}
    ]
}
