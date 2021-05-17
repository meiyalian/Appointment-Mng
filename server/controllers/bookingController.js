const mongoose = require('mongoose');
const User = require('../models/user');
const BookingRequest = require('../models/bookingRequest');
const Service = require('../models/service');
let moment = require ('moment');
module.exports = {

    //Customer can view their own voucher request list
    userGetBookingList: function(req,res){
        User.findOne({_id:req.params.id})
        .populate('bookingRequest')
        .exec(function(err,user){
            if(err) return res.status(400).json(err);
            if(!user) return res.status(404).json();
            res.json(user);
        });
    },

    //Customer can add booking request 
    addBookingRequest: function(req,res){
        User.findOne({_id:req.params.id},function(err,user){
            newDate = Date(req.body.date)
            var newbooking = new BookingRequest({
                user: user._id,
                date: newDate,
                serviceType: req.body.serviceType,
                optionalMessage:req.body.optionalMessage,
                deliveryOption: req.body.deliveryOption
            })
            user.bookingRequest.push(newbooking);
            newbooking.save(function(err){
                if(err) return res.status(400).json(err);
                else{
                    user.save(function(err){
                        if(err) return res.status(400).json(err);
                        else{
                            return res.json(newbooking)
                        }
                    })
                }
            })
        })
    },

        //Customer remove booking request 
    removeBookingRequest: function(req,res){


        BookingRequest.findOneAndRemove({ _id: req.params.bookingid }).populate('bookingRequest'). exec((err, booking)=>{
            if(err) return res.status(400).json(err);

            User.findOneAndUpdate({_id: req.params.id}, {$pull: {bookingRequest: {_id: req.params.bookingid }}},  {
                new: true
                }, (err, user)=>{
                if (err) return res.status(400).json({ok:false, err: err});
                
                res.json({
                    ok:true,
                    data: user.bookingRequest
                })


            })

            
        })
    

    },
            // User.findOne({_id:req.params.id},function(err,user){

            //     requests = user.bookingRequest
            //     bookingid = req.params.bookingid
                
            //     for(let i = 0; i < requests.length ; i ++ ){
            //         if (requests[i] == bookingid) requests.splice(i,1)
            //     }


       
            // })
        

    //admin view booking request 
    adminViewBookingRequest: function (req,res){
        BookingRequest.find({'confirmation':false}).populate('user').exec (function(err,bookingRequest){
            if(err) return res.status(400).json({ok:false,err:err});
            res.json({ok:true,data:{bookingRequest}});
        })
    },

    //adminAcceptBookingRequest and update the confirmation to be true

    adminAcceptBookingRequest: function (req,res){
        BookingRequest.update({'confirmation':false},{$set:{'confirmation':true}},function(err,bookingRequest){
            if(err) return res.status(400).json({ok:false,err:err});
            res.json({ok:true,data:{bookingRequest}});
        })
    }
}