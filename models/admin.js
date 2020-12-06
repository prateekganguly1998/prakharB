const mongoose = require("mongoose");

const Schema = mongoose.Schema;

 

const adminSchema = new Schema({
    _id:Schema.Types.Number,
    user_name: {
        type: String,
    },
    is_active:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()}
},{_id:false,collection:'admin'});
module.exports = mongoose.model("Admin", adminSchema);

