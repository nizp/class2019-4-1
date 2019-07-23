const express = require('express');
const router = express.Router();
const UserModel = require('../../model/userModel'); //通过model创建数据

/*
    {
        user:'13888888888',
        pass:'123',
        sex:'未知',
        age:19,
        type:3,
        pic:'http://localhost/mouse.png'
    },

*/
router.post('/',(req,res)=>{
    let {user,pass,sex,age} = req.body;
    if(user && pass && sex && age){
        //用户名是否为手机号
        if(/^1[3456789]\d{9}$/.test(user)){
            UserModel.findOne({user},(err,data)=>{
                if(!err){
                     //说明没有用户
                    if( data === null ){
                        UserModel.create({
                            user,
                            pass,
                            sex,
                            age
                        },(error,data)=>{
                            if(error){
                                console.log('添加失败');
                                return;
                            }
                            const {_id,user,sex,age,pic} = data;
                            res.json({
                                code:0,
                                data:{
                                    _id,user,sex,age,pic
                                }
                            })
                        })
    
                    }else{
                        //说明用户被占用
                        res.json({
                            code:1,
                            msg:'用户名被占用'
                        })
                    }
                }
            })
        }else{
            res.json({
                code:2,
                msg:'用户名格式错误'
            })
        }
       
    }else{
        //400
        res.status(400);
        res.json({
            code:2,
            msg:'用户名参数错误'
        })
    }
});


module.exports = router;