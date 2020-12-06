const mongoose = require("mongoose");

const Schema = mongoose.Schema;

 

const userSchema = new Schema({
    _id:Schema.Types.Number,
    user_name: {
        type: String,
    },
    admin_id:{type:Schema.Types.Number,ref:"Admin"},
    createdAt:{type:Date,default:Date.now()}
},{_id:false});
module.exports = mongoose.model("User", userSchema);

