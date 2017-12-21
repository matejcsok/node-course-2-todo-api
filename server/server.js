var express = require('express');
var bodyParse = require('body-parser');

var {mongoose} = require('../db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParse.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, e => {
        res.status(400).send(e);
    })

});


// GET /todos/1fds1f35123df1sa








app.listen(3000, () => {
    console.log('Started on port: 3000')
});