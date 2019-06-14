const express = require('express');
const router = express.Router();

// router.get('/',function(req,res){
//     res.send('{code:0,msg:"/index"}');//  /
// });
let arr = [1,2,3,4];
router.get('/',function(req,res){
    res.render('index',{
        data:arr,
        title:'首页'
    });
});


module.exports = router;