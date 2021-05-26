const mongoose = require('mongoose');
const User = require('../models/user');
const BookingRequest = require('../models/bookingRequest');
const Service = require('../models/service');
let moment = require ('moment');
let nodeemailer = require('nodemailer');
const { getMaxListeners } = require('../models/user');
module.exports = {

    //Customer can view their own voucher request list
    userGetBookingList: function(req,res){
        User.findOne({_id:req.params.id})
        .populate('bookingRequest')
        .exec(function(err,user){
            if(err) return res.status(400).json({ok:false,err:err});
            if(!user) return res.status(404).json({ok:false,err:"user not found"});
            res.json({ok:true,data:{bookingRequest:user.bookingRequest}});
        });
    },

    //Customer can add booking request
    addBookingRequest: function(req,res){
        User.findOne({_id:req.params.id}).exec (function(err,user){
            newDate = new Date(req.body.date)
            var newbooking = new BookingRequest({
                user: user._id,
                date: newDate,
                serviceType: req.body.serviceType,
                optionalMessage:req.body.optionalMessage,
                deliveryOption: req.body.deliveryOption
            })
            user.bookingRequest.push(newbooking);
            newbooking.save(function(err){
                if(err) return res.status(400).json({ok:false, err: err});
                else{

                user.save(function(err){
                    if(err) return res.status(400).json(err);
                    else{

                        Service.findOne({_id:newbooking.serviceType}).exec(function(err,serviceinfo){
                            console.log(serviceinfo);
                          let message = {
                              from:"testemail90016@gmail.com",
                              to: "user959.swen90016@gmail.com",
                              subject:"Booking Request From Customer",
                              html: `<h1>Booking Request for Voucher Booking System</h1><br>
                              <h4>Customer name: ${user.name} </h4>
                              <h4>Customer email: ${user.email} </h4>
                              <h4>Customer phone number: ${user.phoneNumber} </h4>
                              <h4>Service Type: ${serviceinfo.name} </h4>
                              <h4>Service Delivery Options: ${newbooking.deliveryOption} </h4>
                              <h4>Booking Date and time: ${newbooking.date} </h4>`
                          }
                          sendMail(message, info => {
                              console.log(`The mail has beed send`);

                            });
                            return res.json({ok: true,
                            data: newbooking,serviceinfo:serviceinfo})
                        })


                    }
                })

            }
            })
        })
    },

        //Customer remove booking request
    removeBookingRequest: async function(req,res){



        User.findOneAndUpdate({_id: req.params.id}, {$pull: {bookingRequest: req.params.bookingid}},  {
            new: true
            }).populate({path: 'bookingRequest', model: 'BookingRequest'}).exec(async (err, usr)=>{
                if(err) return res.status(400).json(err);
                else{
                    BookingRequest.findOne({_id:req.params.bookingid}).exec(function(err,bookinginfo){
                        console.log(bookinginfo)
                        Service.findOne({_id:bookinginfo.serviceType}).exec(function(err,serviceinfo){
                        console.log()
                      let message = {
                          from:"testemail90016@gmail.com",
                          to: "user959.swen90016@gmail.com",
                          subject:"Booking Cancel From Customer",
                          html: `<h1>Booking Cancel for Voucher Booking System</h1><br>
                          <h4>Customer name: ${usr.name} </h4>
                          <h4>Customer email: ${usr.email} </h4>
                          <h4>Customer phone number: ${usr.phoneNumber} </h4>
                          <h4>Service Type: ${serviceinfo.name} </h4>
                          <h4>Service Delivery Options: ${bookinginfo.deliveryOption} </h4>
                          <h4>Booking Date and time: ${bookinginfo.date} </h4>`
                      }
                      sendMail(message, info => {
                          console.log(`The mail has beed send`);

                        });
                    })
                    })



                    await BookingRequest.findOneAndRemove({ _id: req.params.bookingid }, (err, booking)=>{
                             if(err) return res.status(400).json(err);
                    })
                    return res.json({ok: true,
                        data: usr})

                    }

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

    adminAcceptBookingRequest: async function (req,res){
      await BookingRequest.findOneAndUpdate({_id: req.params.id,confirmation:false},{$set:{confirmation:true}},{new:true}).
      populate('user').
      exec(function(err,bookingRequest){
            if(bookingRequest==null) return res.status(500).json({ok:false,err:"bad request"})
            if(err) return res.status(400).json({ok:false,err:err});
            else{

                Service.findOne({_id:bookingRequest.serviceType}).exec(function(err,serviceinfo){
                            console.log(serviceinfo);
                          let message = {
                              from:"testemail90016@gmail.com",
                              to: bookingRequest.user.email,
                              subject:"Booking Request Confirmation",
                              html: `<h1>Your Booking Request for Voucher Booking System Has Been Confirmed</h1><br>
                              <h4>Your name: ${bookingRequest.user.name} </h4>
                              <h4>Your email: ${bookingRequest.user.email} </h4>
                              <h4>Your phone number: ${bookingRequest.user.phoneNumber} </h4>
                              <h4>Your Service Type: ${serviceinfo.name} </h4>
                              <h4>Your Service Delivery Options: ${bookingRequest.deliveryOption} </h4>
                              <h4>Your Booking Date and time: ${bookingRequest.date} </h4>`
                          }
                          sendMail(message, info => {
                              console.log(`The mail has beed send`);

                            });
                            return res.json({ok: true,
                            data: bookingRequest,serviceinfo:serviceinfo})
                        })
        }
        })
    }
}

function sendMail(message,callback){
    let transporter = nodeemailer.createTransport({
        host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "testemail90016@gmail.com",
      pass: "catherine7join"
    }
});
let info = transporter.sendMail(message);
callback(info);
}
