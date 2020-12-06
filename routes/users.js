const express=require('express');
const router=express.Router();
const User=require('../models/users');
const userController=require('../controllers/users');

router.get('/',userController.getUsers);
router.get('/oddIds',userController.getOddIds);
router.get('/userWithAdminCondition',userController.adminController);


module.exports=router;