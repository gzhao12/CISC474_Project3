var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true },
    password: {type: String, required: true },

    //TODO set default to false and implement some method of making users a moderator
    isModerator: { type: Boolean, default: true }
});

module.exports = mongoose.model('User', userSchema)