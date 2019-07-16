const express = require('express')
const router = express.Router();

const UserModel = require('../model/userModel');

router.post('/',(req,res)=>{
    let {user,pass} = req.body;

    console.log(user,pass)

    UserModel.findOne({user},(error,data)=>{
        if(error){
            res.json({code:1,msg:'注册失败'})
            return;
        }
        if(data === null){
            ;(async function(){
                const d = await UserModel.create({user,pass});

                console.log(d);
                res.json({code:0,msg:'注册成功',user,rank:d.rank});
            })();
        }else{
            res.json({code:2,msg:'用户名已被占用'})
        }
        // console.log(error,doc);
    });
});

module.exports = router;