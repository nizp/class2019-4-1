const express = require('express');
const router = express.Router();
const UserModel = require('../../model/userModel'); //通过model创建数据
//https://www.cnblogs.com/xuxinstyle/p/9675541.html
let qm = '007';
const jwt = require('jsonwebtoken');
function generateToken(data){
    let created = Math.floor(Date.now() / 1000); //生成一个时间
    // let cert = fs.readFileSync(path.join(__dirname, '../config/pri.pem'));//私钥
    //设置token的
    let token = jwt.sign({
        data,
        exp: created + 20 //3600 * 24  //过期时间
    },qm);
    return token;
}

router.post('/',(req,res)=>{
    let {user,pass} = req.body;
    if(user && pass){
        //用户名是否为手机号
        if(/^1[3456789]\d{9}$/.test(user)){
            UserModel.findOne({user,pass},{pass:0},(err,data)=>{
                if(!err){
                    //说明没有用户
                    if( data === null ){
                        res.json({
                            code:1,
                            msg:'请检查您的用户名和密码'
                        });
                    }else{
                        // res.cookie("user",data.user,{maxAge:100000});
                        //设置token
                        let token = generateToken(data);
                        res.json({
                            code:0,
                            msg:data,
                            token
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
            code:3,
            msg:'用户名参数错误'
        })
    }
});


module.exports = router;