//user's biller information schema 
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
   name: {
       type:String, 
       required:true
   },
   deliveryOptions:{
    type: String,
    default: 'pickup',
    enum: ["pickup", "delivery"]
}
})


module.exports = mongoose.model('Service', UserSchema);