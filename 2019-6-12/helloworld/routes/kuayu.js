var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
  
*/
let person = [
  'hh',
  'cc',
  'yy',
  'ss',
  'yuer'
];

router.get('/', function(req, res, next) {
  let obj = {
    code:0,
    msg:'有介个银了啦!'
  }
  let json = req.query;
  console.log(json);
  if(!person.includes(json.name)){
      obj.code = 1;
      obj.msg = '没有介个银!';
  }
  res.send(JSON.stringify(obj));
});

module.exports = router;
