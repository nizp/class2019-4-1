const express = require('express')
const router = express.Router();

const UserModel = require('../model/userModel');

router.post('/',(req,res)=>{
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

module.exports = router;