const mongoose = require('mongoose');
let moment = require ('moment');
const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
   date: {
       type:Date, 
       default: moment.utc(),
       validate: function(input){
        moment(input).isBefore(moment.utc());
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
optionalMessage:{
    type:String
}


})


module.exports = mongoose.model('BookingRequest', UserSchema);