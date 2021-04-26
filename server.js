const express = require('express');
const app = express();
let db = require('./db'); // 
db.connect(() => app.listen(8080)); // connect to database 


// app.use("/", express.static(path.join(__dirname, "dist/mngApp"))); // any request other than the CRUD operation should be redirected to mngAng

app.get('/api/test',async(req,res) =>{
    res.send('ok')
})