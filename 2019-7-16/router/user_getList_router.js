const express = require('express')
const router = express.Router();

const UserModel = require('../model/userModel');

router.get('/',(req,res)=>{
    let {search} = req.query;
    UserModel.find({rank:search},{user:1,_id:0},function(err,data){
        if(err){
            res.json({code:1,msg:'查询失败'});
            return;
        }
        console.log('进');
        res.json({code:0,msg:data});
    })
});

module.exports = router;