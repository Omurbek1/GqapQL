/users GET

Запрос:

query{
    feed{
        comments
        likeLunmber
    }
    notifications{
isRead
    }
    profile{
        photo
        username
    }
}


Ответ: 
{
    feed:[
        {
            comments:20,
            likenumber:5
        }
        {
            .....
        }
    ],
    notifications:[
        {
            isRead:true
        },
        isRead:false
    ],
    profile:{
        photo:'/photo/jpg',
        username:'Omurbek'
    }
}