const express = require('express');
const router = express.Router();
const YunModel = require('../../model/yunModel'); //通过model创建数据

// let sql = {
//     "0": {
//         "id": 0,
//         "pid": -1,
//         "title": "微云",
//         "type": "file",
//         "checked":false
//     },
//     "1": {
//         "id": 1,
//         "pid": 0,
//         "title": "我的文档",
//         "type": "file",
//         "checked":true
//     },
//     "2": {
//         "id": 2,
//         "pid": 0,
//         "title": "我的音乐",
//         "checked":false
//     },
//     "3": {
//         "id": 3,
//         "pid": 2,
//         "title": "周杰伦",
//         "checked":false
//     },
//     "4": {
//         "id": 4,
//         "pid": 3,
//         "title": "发如雪",
//         "checked":false
//     },
//     "600": {
//         "id": 600,
//         "pid": 3,
//         "title": "夜曲",
//         "checked":false
//     },
//     "2999": {
//         "id": 2999,
//         "pid": 1,
//         "title": "js程序设计",
//         "checked":false
//     },
//     "4000": {
//         "id": 4000,
//         "pid": 3,
//         "title": "稻香",
//         "checked":false
//     },
//     "23333": {
//         "id": 23333,
//         "pid": 2,
//         "title": "王杰",
//         "checked":false
//     },
//     "29000": {
//         "id": 29000,
//         "pid": 1,
//         "title": "js权威指南",
//         "checked":false
//     },
//     "244444": {
//         "id": 244444,
//         "pid": 2,
//         "title": "张国荣",
//         "checked":false
//     },
//     "31":{
//         id:31,
//         pid:244444,
//         title:'当爱已成往事',
//         "checked":false
//     },
//     "321321": {
//         "id": 321321,
//         "pid": 0,
//         "title": "123",
//         "checked":false
//     }
// }

// let ary = [];

// for(let attr in sql){
//     ary.push(sql[attr]);
// }


// YunModel.create(ary,(err,data)=>{
//     if(err){
//         console.log('添加失败');
//         return;
//     }
//     console.log(data);
// });



router.post('/',(req,res)=>{
    /*
        (req,res)=>{
            res.json({
                code:0,
                msg:sql
            })
        }
    */
    
    YunModel.find({},(err,data)=>{
        if(err){
            console.log('数据读取失败');
            return;
        }
        res.json({
            code:0,
            data
        });
    })

});

module.exports = router;