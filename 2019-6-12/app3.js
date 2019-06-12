const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('www'));
let list = [{txt:'小明你好吗?',id:Date.now()}];

app.use('*',(req,res,next)=>{
    req.list = list;
    next();
});
//引入了路由
app.use('/user',require('./routers/users/post'));


app.use('/list/add',require('./routers/list/add'));
app.use('/list',require('./routers/list/get'));

// app.use('/list/:name',require('./routers/list/get'));

app.listen(80);