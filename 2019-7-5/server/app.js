const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cookieParser=require("cookie-parser");

let sql = {
    "0": {
        "id": 0,
        "pid": -1,
        "title": "微云",
        "type": "file",
        "checked":false
    },
    "1": {
        "id": 1,
        "pid": 0,
        "title": "我的文档",
        "type": "file",
        "checked":true
    },
    "2": {
        "id": 2,
        "pid": 0,
        "title": "我的音乐",
        "checked":false
    },
    "3": {
        "id": 3,
        "pid": 2,
        "title": "周杰伦",
        "checked":false
    },
    "4": {
        "id": 4,
        "pid": 3,
        "title": "发如雪",
        "checked":false
    },
    "600": {
        "id": 600,
        "pid": 3,
        "title": "夜曲",
        "checked":false
    },
    "2999": {
        "id": 2999,
        "pid": 1,
        "title": "js程序设计",
        "checked":false
    },
    "4000": {
        "id": 4000,
        "pid": 3,
        "title": "稻香",
        "checked":false
    },
    "23333": {
        "id": 23333,
        "pid": 2,
        "title": "王杰",
        "checked":false
    },
    "29000": {
        "id": 29000,
        "pid": 1,
        "title": "js权威指南",
        "checked":false
    },
    "244444": {
        "id": 244444,
        "pid": 2,
        "title": "张国荣",
        "checked":false
    },
    "31":{
        id:31,
        pid:244444,
        title:'当爱已成往事',
        "checked":false
    },
    "321321": {
        "id": 321321,
        "pid": 0,
        "title": "123",
        "checked":false
    }
}

app.use(express.static('./img'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

//获取云数据
app.get('/list',(req,res)=>{
    res.json({
        code:0,
        msg:sql
    })
})
/*
    id
    pid
    ?pid=0&title=xxx
*/
app.get('/add',(req,res)=>{
    let {pid,title} = req.query;
    let id=  Date.now();
    sql[id] = {
        id,
        pid:pid*1,
        title,
        checked:false
    }
    res.json({
        code:0,
        msg:sql
    })
});

app.get('/rm',(req,res)=>{
    let {ary} = req.query;
    ary = JSON.parse(ary);

    // console.log(ary)

    for(let attr in sql){
        for(let i=0;i<ary.length;i++){
            if(ary[i] == attr){
               delete sql[attr];
               console.log(sql);
               break;
            }
        }
    }
   
    res.json({
        code:0,
        msg:sql
    })
});

// let picUrl = '';
// try {
//     picUrl = fs.readFileSync('./img/mouse.png');
// } catch (error) {
//     console.log('图片不存在')
// }



// console.log(new Buffer(picUrl,'base64'));

//用户操作
const userSql = [
    {
        id:0,
        user:'于海洋',
        pass:'123',
        sex:'未知',
        age:19,
        type:3,
        pic:'http://localhost/mouse.png'
    },
    {
        id:1,
        user:'阿梅',
        pass:321,
        sex:'女',
        age:2,
        type:2,
        pic:'http://localhost/mouse.png'
    }
];


app.use('/get',(req,res,next)=>{
    let cookie = req.cookies.user;
    let obj = {};
    // console.log('进来没11')
    if(!cookie){
        // next();
        res.json({code:5,msg:'未登录'});
    }else{
        obj.code = 0;
        obj.msg = '登录成功';
        // console.log(cookie,'我要cookie')
        let u = userSql.find(item=>item.user === cookie)
        obj.data = {
            user:u.user,
            pic:u.pic,
            type:u.type,
            sex:u.sex
        }
        res.json(obj);
    }
});


// /login?user=xx&pass=xxx
app.post('/login',(req,res)=>{
    let obj = {};
    let {user,pass} = req.body;
    console.log(user,pass);
    // console.log( req );
    let u = userSql.find(item=>item.user === user);
    if(u){
        if(u.pass == pass){
            obj.code = 0;
            obj.msg = '登录成功';
            obj.data = {
                user:u.user,
                pic:u.pic,
                type:u.type,
                sex:u.sex
            }
        }else{
            obj.code = 2;
            obj.msg = '用户名或密码错误';
        }
    }else{
      obj.code = 1;
      obj.msg = '用户不存在';
    }

    if(obj.code === 0){
        res.cookie("user",obj.data.user,{maxAge:100000});
    }
    
    res.json(obj);

});









app.listen(80);
