let model = {
    app: {
        currentPage: 'home' // register , myProfile, home, match, chat, messages
        , loggedInUser: 1
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
            , confirmPassword: ''
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
            , placeInSequence: 0
            , svipeList: [] 
            , watching: []
        },
        chat: {
            selectedChatId : null
            , selectedUserId: null
            , message: ''
        },
        otherProfile: {
            selectedUserId : null,
        }
    },


    //Fellesdata
    users: [
        {
            userId: 1
            , userName: 'per'
            , userEmail: 'per@gmail.com'
            , password: '123'
            , firstName: 'Per'
            , lastName: 'Nordman'
        },
        {
            userId: 2
            , userName: 'espen'
            , userEmail: 'epsen@gmail.com'
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
        {
            userId: 4
            , userName: 'kåre'
            , userEmail: 'kaare@gmail.com'
            , password: '123'
            , firstName: 'Kåre'
            , lastName: 'Norman'
        },
        {
            userId: 5
            , userName: 'Ole'
            , userEmail: 'ole@gmail.com'
            , password: '321'
            , firstName: 'Ole'
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
            , description: 'Livlig og kosen katt'
        },
        {
            userId: 2
            , name: 'Raptus' 
            , race: 'Norsk skogs katt' 
            , favouriteFood: 'tørrfor'
            , personality: 'leken'
            , color: 'black&white'
            , age: null
            , description: 'Livlig og kosen katt'
        },
        {
            userId: 3
            , name: 'Mango' 
            , race: 'Norsk skogs katt' 
            , favouriteFood: 'mus'
            , personality: 'vilter'
            , color: 'oransje'
            , age: null
            , description: 'Livlig og kosen katt'
        },
        {
            userId: 4
            , name: 'Emma' 
            , race: 'Norsk skogs katt' 
            , favouriteFood: 'tørrfor'
            , personality: 'Gal'
            , color: 'brun'
            , age: null
            , description: 'Rar og gal'
        },
        {
            userId: 5
            , name: 'Monsen' 
            , race: 'Norsk skogs katt' 
            , favouriteFood: 'mus'
            , personality: 'Utadvendt'
            , color: 'brun'
            , age: null
            , description: 'Utekatt'
        },
    ],

    chosenInterests: [
        {userId: 1, interest: 'Kose'}
        , {userId: 1, interest: 'Sove'}
        , {userId: 2, interest: 'Synge'}
        , {userId: 3, interest: 'Jakte'}
        , {userId: 4, interest: 'Trene'}
        , {userId: 5, interest: 'Leke'}
    ],

    //Select Values
    interests: [
        'Kose'
        , 'Sove'
        , 'Leke'
        , 'Klatre'
        , 'Spise'
        , 'Utforske'
        , 'Trene'
        , 'Jakte'
        , 'Synge'
    ],
    
    pictures: [
        //TODO: se på mulig bedre navn for placeInSequence
        {userId: 1, pictureUrl: 'img/orangeCat1.jpg', placeInSequence: 1}
        , {userId: 1, pictureUrl: 'img/orangeCat2.jpg', placeInSequence: 2}
        , {userId: 2, pictureUrl: 'img/blackCat1.jpg', placeInSequence: 1}
        , {userId: 2, pictureUrl: 'img/blackCat2.jpg', placeInSequence: 2}
        , {userId: 2, pictureUrl: 'img/blackCat3.jpg', placeInSequence: 3}
        , {userId: 3, pictureUrl: 'img/greyCat1.jpg', placeInSequence: 1}
        , {userId: 3, pictureUrl: 'img/greyCat2.jpg', placeInSequence: 2}
        , {userId: 3, pictureUrl: 'img/greyCat3.jpg', placeInSequence: 3}
        , {userId: 4, pictureUrl: 'img/brownCat1.jpg', placeInSequence: 1}
        , {userId: 4, pictureUrl: 'img/brownCat2.jpg', placeInSequence: 2}
        , {userId: 5, pictureUrl: 'img/brownCat1a.jpg', placeInSequence: 1}
        , {userId: 5, pictureUrl: 'img/brownCat2a.jpg', placeInSequence: 2}
    ],

    //TODO: Tenk på navn likesUserId    
    interactedProfiles: [
        //Assign dates when liked
        {userId: 1, interactedUserId: 2, date: new Date(new Date("2024-10-14").setHours(14,33,0,0)), isLike: true} 
        , {userId: 2, interactedUserId: 1, date: new Date(new Date("2024-10-14").setHours(14,33,0,0)),isLike: true} 
        , {userId: 3, interactedUserId: 1, date: new Date(new Date("2024-10-14").setHours(14,33,0,0)),isLike: true}  
    ],
 
    chatLog: [
      {senderId: 1, message: 'Hei', date: new Date(new Date("2024-10-14").setHours(10,32,0,0)), recipientId:2, chatId: 1}  
      , {senderId: 1, message: 'Hvordan går det?', date: new Date(new Date("2024-10-14").setHours(14,33,0,0)), recipientId:2, chatId: 1}   
      , {senderId: 2, message: 'Hallo, det går bra!', date: new Date(new Date("2024-10-15").setHours(15,47,0,0)), recipientId:1, chatId: 1}  
      , {senderId: 2, message: 'Hei Pål', date: new Date(new Date("2024-9-14").setHours(9,30,0,0)), recipientId:3, chatId: 2}  
      , {senderId: 1, message: 'Hei', date: new Date(new Date("2024-10-14").setHours(22,10,0,0)), recipientId:3, chatId: 3}
    ],
}