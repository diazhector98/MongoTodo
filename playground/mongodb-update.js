const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('There was an error');
    }
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5c51008320f75a594a8faab9")
    },{
        $inc: {
            difficulty: 5
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

});