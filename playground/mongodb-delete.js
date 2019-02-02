const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('There was an error');
    }
/*
    db.collection('Todos').deleteMany({text: 'Read book'}).then((result) => {
        console.log(result);
    });

    */
   /*
    db.collection('Todos').deleteOne({text: 'Something'}).then((result) => {
        console.log(result);
    });
    */

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    })

});