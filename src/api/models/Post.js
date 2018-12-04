var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    course_id: {type: String, /*required: true*/},
    author: String,
    post_section: {type: String, /*required: true*/}, 
    content: {type: String, /*required: true*/},
    up_votes: {type: Number, default: 0 },
    down_votes: {type: Number, default: 0 },
    local_time: {type: Date, default: new Date()}
});

module.exports = mongoose.model('Post', postSchema)