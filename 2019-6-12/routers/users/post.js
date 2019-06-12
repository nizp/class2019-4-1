const express = require('express');
const router = express.Router();
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

router.post('/',(req,res)=>{ //  /user
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

router.post('/getname',(req,res)=>{ //  /user/getname
    let obj = req.body;
    console.log(sql)
    let o = sql.find(item=>item.name === obj.user);
    if(o){
        res.json({code:1,msg:'用户名已经占用'});
    }else{
        res.json({code:0,msg:'可以注册'});
    }
})

//user/getname

module.exports = router; //导出路由