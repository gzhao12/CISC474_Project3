
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var postAPI = require('./functions/post');
var userAPI = require('./functions/user');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', postAPI);
app.use('/', userAPI);

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)

mongoose.connect("mongodb://localhost:27017/subject-savant", {useNewUrlParser: true})
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});

module.exports = app;