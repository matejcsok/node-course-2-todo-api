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


module.exports = {User};