const Service = require('../models/service');

module.exports={

    //fetch all the available services 
    getServices: function (req,res){
        Service.find({},function(err,results){
            if(err) return res.status(400).json(err);
            res.json(results);
        })
    },

    //add services: 
    addService: function (req,res){
        let newServiceDetails = req.body
        Service.create(newServiceDetails, function (err, service) {
            if (err) return res.status(400).json(err);

            res.json(service);
        });
    }
}