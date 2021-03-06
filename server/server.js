var express = require('express');
var bodyParse = require('body-parser');

var {mongoose} = require('../db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');


var app = express();

// set port to lisen, process.env.port for heroku and 3000 for localhost
const port = process.env.PORT || 3000;

app.use(bodyParse.json());

// POST /todos
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


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, e => {
        res.status(400).send(e);
    });
});

// GET /todos/1fds1f35123df1sa
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;


    // findById
    Todo.findById(id).then(todo => {
        // succes
        // if todo -- send back
        if (todo) {
            res.status(200).send({todo});
        } else {
            // if no todo --  send back 404 with empty body
            console.log('id not found');
            res.status(404).send();
        }
    }).catch(e => {
        // valid id useing isValid
        if (!ObjectID.isValid(id)) {
            // 404 -- send back empty send
            console.log('invalid id');
            res.status(404).send();

        }
        // error
        // 400 -- and send empty body back
        res.status(400).send();


    });
});


app.listen(port, () => {
    console.log('Started on port: ', port);
});