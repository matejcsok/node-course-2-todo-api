const {ObjectID} = require('mongodb');
const {mongoose} = require('./../db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a3b821dd24b8678239052ea';
var userId = '5a3b8b179b22892813ee3f3c';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log(todo)
// }).catch(e => {
//     console.log(e);
// });


    User.findById(userId).then(doc => {
        console.log(`User ${doc}`)
    },).catch(e => {
        if (!ObjectID.isValid(userId)) {
            console.log('ID is not valid\n',e.message)
        }
    });


