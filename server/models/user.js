var mongoose = require('mongoose');

// User
// email - require - trim - type String - minlength 1

var User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        minlength: 1
    }
});

// var newUser = new User({
//     email: 'matejcsok@hotmail.com'
// });
//
// newUser.save().then((result) => {
//     console.log('User saved', result)
// }, err => {
//     console.log('Unable to save User', e)
// });

module.exports = {User};