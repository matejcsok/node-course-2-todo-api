const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDb Server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a399c13fdf3a40db4c2ccbb')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        name: 'matejcsok istvan'
    },{
        $set: {
            name: 'istvan'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5a3b7ad0dc8cfd956663ed53')
    // },{
    //     $inc: {
    //         age: 1
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    

});