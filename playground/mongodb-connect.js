//Hectors-Air:bin hectordiazaceves$ ./mongod --dbpath ~/mongo-data/
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj.id);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('There was an error');
    }

    console.log('Connected successfully');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to connect to db');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    
    db.collection('Users').insertOne({
        name: 'Juan',
        age: 20
    }, (err, result) => {
        if(err) return console.log('Error adding user');
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    
    db.close();



});