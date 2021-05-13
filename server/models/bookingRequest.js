const mongoose = require('mongoose');
let moment = require ('moment');
const BookingSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
   date: {
       type:Date, 
        // default:Date.now,
       default: moment.utc(),
       validate: function(input){
        moment(input).isAfter(moment.utc());
       },
       get:function(newDate){
           return moment(newDate).format('DD-MM-YYYY');
       },
       required:true
   },
   serviceType: {
    type: mongoose.Schema.ObjectId,
    ref: 'Service',
    required:true
},
deliveryOption:{
    type:String,
    required:true
},
optionalMessage:{
    type:String
},
confirmation:{
    type: Boolean,
    default:false
}


})


module.exports = mongoose.model('BookingRequest', BookingSchema);