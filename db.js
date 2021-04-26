const mongoose = require('mongoose');
let mongoDbUrl = 'mongodb://127.0.0.1:27017/mng';
function connect(callback){
    mongoose.connect(mongoDbUrl,  {useUnifiedTopology: true, useNewUrlParser: true},(err) => {
        if (err) throw err
        callback();
    });
}

module.exports = {
    connect
};