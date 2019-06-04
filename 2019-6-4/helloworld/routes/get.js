var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
  
*/
let person = [
 "yuhaiyang",
 "lintonghe",
 "zhaodan",
 "mamou",
 "刘泉",
 "nizp"
];

router.get('/', function(req, res, next) {
  let obj = {
    code:0,
    msg:'有介个银了啦!'
  }
  let json = req.query;
  
  console.log(req);
  if(!person.includes(json.user)){
      obj.code = 1;
      obj.msg = '没有介个银!';
  }
  res.send(JSON.stringify(obj));
});

module.exports = router;
