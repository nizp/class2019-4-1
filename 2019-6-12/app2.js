const express = require('express');
const bodyParser = require('body-parser');
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

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('www'));
app.post('/user',(req,res)=>{
    let obj = req.body;
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