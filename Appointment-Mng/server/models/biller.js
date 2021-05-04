//user's biller information schema 
const mongoose = require('mongoose');

const BillerSchema = new mongoose.Schema({
   name: {
       type:String, 
       required:true
   },
   email: {
        type: String,
        required: true,
        unique: true
    }
})


module.exports = mongoose.model('Biller', BillerSchema);