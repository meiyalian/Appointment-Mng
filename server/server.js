const express = require('express');
const app = express();
const path = require('path');
let router = require('./router.js');
let bodyParser = require('body-parser')
let db = require('./db'); // databse
require('dotenv').config() // add env variables 
db.connect(() => app.listen(9000)); // connect to database 
// app.use(express.urlencoded({
//     extended: true
//   }));
app.use(bodyParser.json());

app.use('/', router);

//connect to frontend 
app.use("/", express.static(path.join(__dirname, "../dist/mngApp")));



