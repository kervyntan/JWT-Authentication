const mongoose = require('mongoose');

// Create schema using mongoose
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength : [2, 'Name should be a minimum of 2 characters']
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true,
        minLength : [8, 'Password should be a minimum of 8 characters.']
    },

    token : {
        type : String
    }
})

// Model creation
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;