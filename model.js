let model = {
    app: {
        currentPage: 'login' // register , myProfile, home, matchProfile, chat,
        , loggedInUser: null
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
        },
        myProfile: {
            firstName: ''
            , lastName: ''
            , profileImg: ''
            , favFood: ''
            , catName: ''
            , personality: ''
            , color: ''
            , age: null
            , race: ''
            , interests: ''
            , description: ''
            , pictureURL: ''
            , isEditMode: false
        },
        home: {
            userId: null
            , isLike: false
            , placeInSequence: 1 //Usikker
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
            , lastName: 'Norman'
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

    cat: [
        {
           userID: 1
           , catName: 'Range' 
            , race: 'Norsk skogs katt' 
            , favFood: 'bird'
            , personality: 'kind'
            , color: 'black'
            , age: null
            , interests: 'sleep'
            , description: ''
            , pictureURL: ''
        }
    ],

    pictures: [
        //TO DO se på mulig bedre navn for placeInSequence
        {userId: 1, pictureURL: '', placeInSequence: 1}
        , {userId: 1, pictureURL: '', placeInSequence: 2}
        , {userId: 1, pictureURL: '', placeInSequence: 3}
        , {userId: 1, pictureURL: '', placeInSequence: 4}
        , {userId: 1, pictureURL: '', placeInSequence: 5}
    ],

    likedProfiles: [
        //Assign dates when liked
        {userId: 1, likesUserId: 2, date: null,} 
        , {userId: 2, likesUserId: 1, date: null,} 
        , {userId: 3, likesUserId: 1, date: null,} 
    ],
    
    matchedProfiles: [
        {userId: 1, matchedWithUserId: 2}
        , {userId: 2, matchedWithUserId: 1}
    ]
    
}
