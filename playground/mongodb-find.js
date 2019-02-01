const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if(err) {
       return console.log('Couldnt connect to database');
   }
    db.collection('Todos').find().count().then((count) => {
        console.log(count);
    }, (err) => {
        console.log(err);
    });
    db.close();
});