var express = require('express');
var User = require('../models/User.js');

var router = express.Router();

router.post("/adduser", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("User saved to database!");
        })
        .catch(err => {
            res.status(400).send("A user with this username already exists!");
        });
});

module.exports = router;