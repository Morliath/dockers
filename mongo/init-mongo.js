db.createUser(
  {
    user  : "test",
    pwd   : "123",
    roles : [
     {
       role: "readWrite",
       db  : "mongo-db-test"
     }
    ]
  }
)

use admin
db.createUser(
   {
     user: "mean-user",
     pwd: "123", 
     roles: ["readWrite" ]
   }
)
