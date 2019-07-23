const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cookieParser=require("cookie-parser");
const jwt = require('jsonwebtoken');

//链接数据库
const conn = require('./conn');
conn.on('error',()=>{
    console.log('链接失败');
})

conn.on('connected',()=>{
    //链接成功
    console.log('数据库链接成功');

    
   
    app.use(express.static('./img'));
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(cookieParser());
    
    //获取云数据
    app.use('/list',require('./routes/yun/index'));

    
    /*
        新建功能
        id
        pid
        ?pid=0&title=xxx
    */
    app.use('/add',require('./routes/yun/add'));
    
    app.use('/rm',require('./routes/yun/rm'));

    //注册
    app.use('/user/add',require('./routes/user/add'));

    // /login?user=xx&pass=xxx
    app.use('/user/login',require('./routes/user/login'));


    app.post('/getToken',(req,res,next)=>{
        //没有登录过
        //req.headers.Authorization === undefined
        const {token}= req.body;
        console.log(token)
        if(!token){
            console.log('没有登录')
            res.json({
                code:1,
                msg:'没有登录'
            });
        }else{
            try{
                const token2 = jwt.verify(token,'007')
                console.log('没过期')
                res.json({
                    code:0,
                    data:token2.data,
                    msg:'登录成功'
                });
            }catch(e){
                console.log('过期')
                res.json({
                    code:2,
                    msg:'重新登录'
                });
            }
        }
        // console.log()
        // next();
    });


    // app.use('/get',(req,res,next)=>{
    //     let cookie = req.cookies.user;
    //     let obj = {};
    //     // console.log('进来没11')
    //     if(!cookie){
    //         // next();
    //         res.json({code:5,msg:'未登录'});
    //     }else{
    //         obj.code = 0;
    //         obj.msg = '登录成功';
    //         // console.log(cookie,'我要cookie')
    //         let u = userSql.find(item=>item.user === cookie)
    //         obj.data = {
    //             user:u.user,
    //             pic:u.pic,
    //             type:u.type,
    //             sex:u.sex
    //         }
    //         res.json(obj);
    //     }
    // });
    
    
    


    



    
    
    
    
    
    
    
    
    
    app.listen(80);












});



