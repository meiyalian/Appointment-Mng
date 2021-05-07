const mongoose = require('mongoose');
let moment = require ('moment');
const BookingSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
   date: {
       type:Date, 
       min: Date.now,
    //    set:function(newDate){
    //        return moment(newDate).tz('Australia/Melbourne').format('YYYY-MM-DD h:mm:ss');
    //    },
       required:true
   },
   serviceType: {
    type: mongoose.Schema.ObjectId,
    ref: 'Service',
    required:true
},
optionalMessage:{
    type:String
}


})


module.exports = mongoose.model('BookingRequest', BookingSchema);