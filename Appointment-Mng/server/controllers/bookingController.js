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
                optionalMessage:req.body.optionalMessage
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
    }
}