const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const app = express();


//创建数据模型
const Blog = mongoose.model('Blog', new Schema({
    title:  String,
    author: String,
    body:   String,
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now }
}));


app.get('/add',(req,res)=>{
    let {title,author,body} = req.query;

    //添加数据
    new Blog({
        title,
        author,
        body
    }).save((error,fluffy)=>{
        if(error){
            // console.log('存储失败');
            res.json({
                code:1,
                msg:'存储失败'
            })
        }else{
            res.json({
                code:0,
                msg:'成功'
            })
            console.log(fluffy);
        }
    })
});



//服务器与数据库链接
mongoose.connect('mongodb://localhost:27017',function(error){
    if(error){
        console.log('链接失败')
    }else{
        console.log('链接成功');
        app.listen(80);
    }
});

// mongoose.connection.on('connected',)



