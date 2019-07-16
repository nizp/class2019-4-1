const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');  

const app = express();

app.use(cookieParser())

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('./www'));

const conn = mongoose.createConnection('mongodb://127.0.0.1/haha',{
    useNewUrlParser:true
});


/*
    分页
    限制查询返回的数量
        limit(5);
    
    跳过前N个查询结果
        skip(10)

    排序:
        sort({条件:1升序，-1降序})
*/

const UserSchema = mongoose.Schema({
    user:String,
    pass:String,
    sex:String,
    age:Number,
    job:String
});

const userModel = conn.model('User',UserSchema);

// let arr = [];
// for(let i=0;i<100;i++){
//     arr.push({
//         user:'zf'+i,
//         pass:123,
//         sex:i%2?'男':'女',
//         age:18+i,
//         job:['语文老师','数学老师','英语老师','体育老师'][i%3]
//     })
// }
// userModel.create(arr,(err,data)=>{
//     console.log(data);
// });

// userModel.deleteMany({},function(err){
//     console.log(err);
// })


let len = 5;
let page = 1;
userModel.find({age:{$gte:28}}).limit(len).skip((page-1)*len).sort({age:1}).exec((err,data)=>{
    console.log(data)
});








conn.on('connected',()=>{
    console.log('数据库链接成功');

   
    

    app.listen(80,()=>{
        console.log('服务器链接成功');
    });
});









