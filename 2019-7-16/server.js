const mongoose = require('mongoose');
const express = require('express');

const app = express();

/* 
    服务器和数据库进行连接
    mongoose.createConnection()

    数据库默认有2个  一个叫做admin，一个叫做local


    on('connected') 连接成功的时候触发
    
    on('open')数据库打开的时候触发

    on('error')连接失败的时候触发
*/  
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/haha',{
    useNewUrlParser:true
});


conn.on('error',(error)=>{
    console.log(error); //数据库链接失败
});

conn.on('connected',()=>{
    console.log('数据库连接已成功')

    //定义骨架
    let UserSchema = new mongoose.Schema({
        user:String,
        // pass:Number  //如果这里是数字，那么尽量会帮你转 得看看能不能转得出来，转不出来就报错
        pass:{
            type:Number,
            required: true
        }
    });

    //基于骨架定义了一个模子
    const UserModel =  conn.model('User',UserSchema); 


    // UserModel.create({user:'于海洋',pass:1234},function(error,data){
    //     console.log(data);
    // });

    // UserModel.create({user:'王旭',pass:123}).then((data)=>{
    //     console.log(data);
    // })
    // ;(async function(){
    //     const data = await  UserModel.create({user:'王权士'});
    //     console.log(data);
    // })();

    // ;(async function(){
    //     const data = await  UserModel.create({user:'杨志康',pass:123,age:18});
    //     console.log(data);
    // })();

    ;(async function(){
        const data = await  UserModel.create({user:'王蓉',pass:123});
        console.log(data);
    })();










    //数据库链接成功之后才起服务
    app.listen(80,()=>{
        console.log('服务器连接已成功')
    });
});




