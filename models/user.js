var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email:String,
    type:String,
    password:String,
    created_at: Date
});

module.exports = mongoose.model('User',UserSchema);