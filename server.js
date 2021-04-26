const express = require('express');
const app = express();
app.listen(8080);
const path= require('path');

app.use("/", express.static(path.join(__dirname, "dist/mngApp")));