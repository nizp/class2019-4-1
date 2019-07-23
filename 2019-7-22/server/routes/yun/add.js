const express = require('express');
const router = express.Router();
const YunModel = require('../../model/yunModel'); //通过model创建数据


router.post('/',(req,res)=>{
    let {pid,title} = req.body;
    console.log(pid,title,111);
    YunModel.create({
        pid:pid*1,
        title,
        checked:false
    },(error,data)=>{
        if(error){
            console.log('添加失败');
            return;
        }
        res.json({
            code:0,
            data
        })
    })
})


module.exports = router;