const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('./www'));

const conn = mongoose.createConnection('mongodb://127.0.0.1/haha',{
    useNewUrlParser:true
});


conn.on('connected',()=>{
    console.log('数据库链接成功');

    const UserSchema = new mongoose.Schema({
        user:{
            required:true,
            type:String
        },
        pass:{
            required:true,
            type:String
        },
        rank:{
            default:0,
            type:Number
        }
    });

    const UserModel = conn.model('User',UserSchema);


    app.post('/add',(req,res)=>{
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

    app.post('/rank',(req,res)=>{
        let {id} = req.body;
        
        UserModel.findById({_id:id},(err,data)=>{
            if(data){
                data.rank = ++ data.rank;
                data.save((err,dd)=>{
                    // console.log()
                    res.json({
                        code:0,
                        id:dd._id,
                        rank:dd.rank,
                        user:dd.user
                    })
                });
                // console.log(data);
            }  
        })
    });


    app.post('/login',(req,res)=>{
        let {user,pass} = req.body;
        UserModel.findOne({user,pass},{pass:0},(err,data)=>{
            if(err){
                res.json({
                    code:1,
                    msg:'登录失败'
                });
                return;
            }

            if(data){
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




    app.get('/getList',(req,res)=>{
        let {search} = req.query;
        UserModel.find({rank:search},{user:1,_id:0},function(err,data){
            if(err){
                res.json({code:1,msg:'查询失败'});
                return;
            }
            console.log('进');
            res.json({code:0,msg:data});
        })
    });





    app.listen(80,()=>{
        console.log('服务器链接成功');
    });
})









