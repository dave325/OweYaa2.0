var mongoose = require('mongoose');
mongoose.connect('mongodb://oweyaa:password1@ds247449.mlab.com:47449/oweyaa');


var UserSchema = new mongoose.Schema({
    email:String,
    type:String,
    password:String,
    created_at: Date
});

module.exports = mongoose.model('User',UserSchema);