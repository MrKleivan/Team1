let model = {
    app: {
        currentPage: 'login' // register , myProfile, home, matchProfile, chat, messages
        , loggedInUser: null
    },


    //Inputs
    inputs: {
        login: {
            email: ''
            , userName: ''
            , password: ''
            , error : ''
        },
        register: {
            userName: ''
            , userEmail: ''
            , password: ''
            , approvePassword: ''
            , firstName : ''
            , lastName : ''
            , error : ''
        },
        myProfile: { 
            firstName: ''
            , lastName: ''
            , profileImg: ''
            , favouriteFood: ''
            , catName: ''
            , personality: ''
            , color: ''
            , age: null
            , race: ''
            , description: ''
            , pictureUrl: ''
            , interests: []
            , isEditMode: false
        },
        home: {
            userId: null
            , isLike: false
            , placeInSequence: 1 
        }
    },


    //Fellesdata
    users: [
        {
            userId: 1
            , userName: 'per'
            , userEmail: 'per@hotmail.com'
            , password: '123'
            , firstName: 'Per'
            , lastName: 'Nordman'
        },
        {
            userId: 2
            , userName: 'espen'
            , userEmail: 'epsen@mail.com'
            , password: '123'
            , firstName: 'Espen'
            , lastName: 'Norman'
        },
        {
            userId: 3
            , userName: 'pål'
            , userEmail: 'pållern@gmail.com'
            , password: '321'
            , firstName: 'Pål'
            , lastName: 'Norman'
        },
    ],

    cats: [
        {
            userId: 1
            , name: 'Range' 
            , race: 'Norsk skogs katt' 
            , favouriteFood: 'bird'
            , personality: 'kind'
            , color: 'black'
            , age: null
            , description: ''
        }
    ],

    chosenInterests: [
        {userId: 1, interest: 'Kose'}
        , {userId: 1, interest: 'Sove'}
    ],

    //Select Values
    interests: [
        'Kose'
        , 'Sove'
        , 'Leke'
        , 'Klatre'
        , 'Spise'
        , 'Utforske'
    ],
    
    pictures: [
        //TODO: se på mulig bedre navn for placeInSequence
        {userId: 1, pictureUrl: '', placeInSequence: 1}
        , {userId: 1, pictureUrl: '', placeInSequence: 2}
        , {userId: 1, pictureUrl: '', placeInSequence: 3}
        , {userId: 1, pictureUrl: '', placeInSequence: 4}
        , {userId: 1, pictureUrl: '', placeInSequence: 5}
    ],

    //TODO: Tenk på navn likesUserId    
    interactedProfiles: [
        //Assign dates when liked
        {userId: 1, interactedUserId: 2, date: null, isLike: true} 
        , {userId: 2, interactedUserId: 1, date: null,isLike: true} 
        , {userId: 3, interactedUserId: 1, date: null,isLike: false}  
    ],
 
    chatLog: [
      {senderId: 1, message: 'Hei', date: new Date(new Date("2024-10-14").setHours(14,32,0,0)), recipientId:2}  
      , {senderId: 1, message: 'Hvordan går det?', date: new Date(new Date("2024-10-14").setHours(14,33,0,0)), recipientId:2}   
      , {senderId: 2, message: 'Hallo, det går bra!', date: new Date(new Date("2024-10-9").setHours(15,47,0,0)), recipientId:1}  
      , {senderId: 2, message: 'Hei', date: new Date(new Date("2024-9-14").setHours(9,30,0,0)), recipientId:3}  
      , {senderId: 1, message: 'Hei', date: new Date(new Date("2024-10-14").setHours(22,10,0,0)), recipientId:3}
    ],
}