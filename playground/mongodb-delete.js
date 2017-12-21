const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connet MongoDb Server!');
    }
    console.log('Connected to MongoDb Server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch!'}).then((result) => {
    //     console.log(result);
    //     console.log(JSON.stringify(result, undefined, 2));
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    //     console.log(JSON.stringify(result, undefined, 2));
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // })

    // db.collection('Users').deleteMany({text: 'go home'});
    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a3951567db461265001c136')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2))
    });
    
});