const path = require("path");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
const userRoutes=require('./routes/users');
const MONGODB_URI = `mongodb://localhost:27017/prakharB`;
//app declaration//
const app = express();



app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("dev"));
app.use(userRoutes);
//store is like a collection/table for storing sessions only//
mongoose.connect(MONGODB_URI, {useNewUrlParser: true}).then(()=>
{
    app.listen(port);
    console.log("Server running on port: " + port);

}).catch(err=>
    {
        console.log(err);

    });