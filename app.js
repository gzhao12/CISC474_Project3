
var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb://localhost:27017/subject-savant", {useNewUrlParser: true})
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

var userSchema = new mongoose.Schema({
    username: {type: String, unique: true },
    password: String,

    //TODO set default to false and implement some method of making users a moderator
    isModerator: { type: Boolean, default: true }
});
var User = mongoose.model("User", userSchema);

var postSchema = new mongoose.Schema({
    course_id: String,
    post_id: String,
    author: [userSchema],
    post_section: String, 
    content: String,
    up_votes: {type: Number, default: 0 },
    down_votes: {type: Number, default: 0 },
    date: Date
});

var Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/adduser", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("User saved to database!");
        })
        .catch(err => {
            res.status(400).send("A user with this username already exists!");
        });
});

app.post("/addpost", (req, res) => {
    var myData = new Post(req.body);
    myData.save()
        .then(item => {
            res.send("Your post was uploaded!");
        })
        .catch(err => {
            res.status(400).send("Unable to save post to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});