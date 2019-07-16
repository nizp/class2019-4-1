const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');  

const app = express();
const Session = [];

app.use(cookieParser())

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('./www'));

const conn = mongoose.createConnection('mongodb://127.0.0.1/haha',{
    useNewUrlParser:true
});





conn.on('connected',()=>{
    console.log('数据库链接成功');

    app.use('*',(req,res,next)=>{
        req.Session = Session;
        next();
    })
    app.get('/setcookie',(req,res)=>{
        let obj = req.Session.find(item=>item.user === req.cookies.name);
        //{maxAge: 12000}
        if(obj){
            res.json({code:0,msg:obj})
        }else{
            res.json({code:1,msg:'请登录'})
           
        }
    })

    app.use('/add',require('./router/user_add_router'));

    app.use('/rank',require('./router/user_rank_router'));

    app.use('/login',require('./router/user_login_router'));

    app.use('/getList',require('./router/user_getList_router'));

    app.listen(80,()=>{
        console.log('服务器链接成功');
    });
});









