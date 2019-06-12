const express = require('express');
const app = express();
let sql = [
    {
        name:'youqian',
        age:18
    },
    {
        name:'yongyi',
        age:20
    },
    {
        name:'xiangxiang',
        age:16
    }
];

/*
    ie=utf-8&
    f=8&
    rsv_bp=1
    rsv_idx=1
    tn=baidu
    wd=dependencies&oq=express&rsv_pq=c0212c17000cab51&rsv_t=a20eH83T

    http://localhost/
*/

app.use(express.static('www'));

app.get('/getname',(req,res)=>{
    let obj = req.query;
    let o = sql.find(item=>item.name === obj.user);
    if(o){
        res.json({code:1,msg:'用户名已经占用'});
    }else{
        res.json({code:0,msg:'可以注册'});
    }
})
app.get('/get',(req,res)=>{
    let obj = req.query;
    let o = sql.find(item=>item.name === obj.user);
    if(o){
        res.json({code:1,msg:'用户名已经占用'});
    }else{
        //既要有pass也要有user
        if(obj.pass && obj.user){
            sql.push({
                name:obj.user,
                pass:obj.pass
            });
            res.json({code:0,msg:'成功'});
        }else{
            res.json({code:2,msg:'请正确填写用户名或密码'});
        }
    }
});
app.listen(80);