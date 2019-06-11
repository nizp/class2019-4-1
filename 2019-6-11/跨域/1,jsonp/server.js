let express = require('express');
let app = express();

app.get('/say',function(req,res){
    let {wd,cb} = req.query;//查询字符串
    console.log(wd);
    res.end(`${cb}('No，Thanks')`);
})
app.listen(3002);