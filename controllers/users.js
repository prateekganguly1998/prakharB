const { restart } = require("nodemon");
const User=require("../models/users");
const Admin=require('../models/admin');
const users = require("../models/users");
const admin = require("../models/admin");
exports.getUsers=(req,res,next)=>
{
    var limit = parseInt(req.query.limit);
    var page =  parseInt(req.query.page);
    let startIndex=(page-1)*limit;
    let endIndex=page*limit;
    User.find().limit(limit)
    .skip(startIndex).then(users=>
        {
            console.log(users);
            return res.json(users);
        }).catch(err=>
        {
            console.log(err);
        })
}

exports.getOddIds=(req,res,next)=>
{
    User.find({_id:{$in:[1,5,7]}}).then(result=>
        {
            console.log(result);
            return res.json(result);
        }).catch(err=>
            {
                console.log(err);
            })

}

exports.adminController=(req,res,next)=>
{
   Admin.aggregate([{
       $lookup:{
           from:'users',
           "localField":"_id",
           "foreignField":"admin_id",
           "as":"adminDocs"
       }
   }]).then(result=>
    {
       let adminWithmorethan3Users=[];
       result.forEach(admin=>
        {
            if(admin.adminDocs.length>=3)
            {
                adminWithmorethan3Users.push(admin);
            }
        })
        return res.json(adminWithmorethan3Users);

       
    })
}