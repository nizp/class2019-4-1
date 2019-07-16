const express = require('express')
const router = express.Router();

const UserModel = require('../model/userModel');

router.post('/',(req,res)=>{

    let {user,pass} = req.body;
    // console.log(UserModel,1111)
    UserModel.findOne({user,pass},{pass:0},(err,data)=>{
        console.log(data,2222)
        if(err){
            res.json({
                code:1,
                msg:'登录失败'
            });
            return;
        }
        if(data){
            console.log(res.cookie)
            res.cookie("name",data.user,{maxAge: 1200000});
            // res.cookie("name",data.user,{maxAge: 12000});
            req.Session.push({
                user:data.user,
                rank:data.rank,
                id:data._id
            });
            res.json({
                code:0,
                data
            });
        }else{
            res.json({
                code:2,
                msg:'用户名或密码错误'
            });
        }
    });
});

module.exports = router;