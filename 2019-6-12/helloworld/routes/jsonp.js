var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {

  // res.header("Access-Control-Allow-Origin", 'http://localhost:80');
  // res.header('Access-Control-Allow-Credentials', 'true');

  var _callback = req.query.callback;//callback=fn3  -> fn3
  var _data = [1,2,3,4,5];
  console.log(_callback)
  if (_callback){
      res.type('text/javascript');
    //   fn + '(' data + ')' ->  fn(data)
    res.send(_callback + '(' + JSON.stringify(_data) + ')');
      // setTimeout(function(){
        
      // },5000)
  }
  else{
      res.json(_data);
  }
});

module.exports = router;