var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var kuayu = require('./routes/kuayu');

var app = express();
let arr = [
  'http://localhost',
  'http://localhost:88',
  'http://localhost:81'
]
app.all('*', function(req, res, next) {

  // res.header("Access-Control-Allow-Origin","*");
  //response  request
  console.log(123);
  // console.log(req.headers.origin);//当前请求的地址
  if(arr.includes(req.headers.origin)){
    res.header("Access-Control-Allow-Origin", req.headers.origin);
  }
  //如果是80端口设置白名单的时候就不用写端口号了
  // res.header("Access-Control-Allow-Origin", "http://localhost");
  // res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

  // app.all('*',(req,response,next)=>{
  //   // response.setHeader("Access-Control-Allow-Origin", "*");
  //   response.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS,GET");
  //   response.setHeader("Access-Control-Max-Age", "3600");
  //   response.setHeader("Access-Control-Allow-Headers", "accept,x-requested-with,Content-Type");
  //   response.setHeader("Access-Control-Allow-Credentials", "true");
  //   response.setHeader("Access-Control-Allow-Origin", "http://localhost:80")
    // next();
  // })


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var jsonp = require('./routes/jsonp');
app.use('/', index);
app.use('/kuayu',kuayu);
app.use('/jsonp',jsonp);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8080);

module.exports = app;
