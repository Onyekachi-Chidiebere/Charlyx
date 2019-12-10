const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    phone:Number,
    password:String,
    email:String
})
const User = mongoose.model('user', userSchema);
module.exports = User;