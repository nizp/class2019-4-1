const express = require('express');
const router = express.Router();
const YunModel = require('../../model/yunModel'); //通过model创建数据


router.get('/',(req,res)=>{
    let {ary} = req.query;

   

   

    // ary = eval(eval(ary));

    

    // ary = ary.map(item=>({_id:item}))
     
    // console.log(ary);

    /*
        deleteMany 批量删除
            第一参数为对象，是查询条件
    */
   
    YunModel.deleteMany({_id:ary},(err,data)=>{
        if(err){
            console.log('删除失败',err);
            return;
        }
        res.json({
            code:0,
            msg:data
        })

    })

   
   
})


module.exports = router;