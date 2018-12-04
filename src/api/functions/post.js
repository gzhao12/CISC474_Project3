var express = require('express');
var Post = require('../models/Post.js');

var router = express.Router();

router.post("/addpost", (req, res) => {
    var myData = new Post(req.body);
    myData.save()
        .then(item => {
            res.send("Your post was uploaded!");
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("Unable to save post to database");
        });
});


router.put('/:id', (req,res) => {
Post.findByIdAndUpdate(req.params.id, req.body, {new:true}, function (err,post){
if (err) return next(err);
res.json(post); });
});




//TODO return only posts for a certain course and post section
router.get('/allposts', (req, res) => {
    Post.find((err, Posts) => {
        if(err) return next(err);
        res.json(Posts);
    });
});

router.get('/search', (req, res) => {
    var course_desc = Post.find({course_id: req.query['course_id']}, (err, Posts) => {
        if(err) return next(err);
        res.json(Posts);
    });
    console.log(course_desc);
});

module.exports = router;