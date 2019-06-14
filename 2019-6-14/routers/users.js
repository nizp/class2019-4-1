const express = require('express');
const router = express.Router();

router.get('/',function(req,res){       //  /user
    res.send('{code:0,msg:"/user"}');
});
router.get('/add',function(req,res){
    res.send('{code:0,msg:"/user/add"}');  // /add -> /user/add 
});
router.get('/rm',function(req,res){
    res.send('{code:0,msg:"/user/rm"}');
});

module.exports = router;