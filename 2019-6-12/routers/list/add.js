const express = require('express');
const router = express.Router();

//  /list/add?txt=12345

router.get('/',(req,res)=>{

    req.list.push({txt:req.query.txt,id:Date.now()})
    // res.send('好');
    res.json({code:0,msg:req.list});
})

module.exports = router;