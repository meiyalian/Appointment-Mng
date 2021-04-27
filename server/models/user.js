const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
     
    },
    role: {
        type: String,
        default: 'basic',
        enum: ["basic", "admin"]
    },  
    password: {
        type: String,
        required: true
    },
    accessToken: String
})


module.exports = mongoose.model('User', UserSchema);