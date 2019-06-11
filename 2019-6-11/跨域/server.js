const express = require('express');
let app = express();
app.get('/say',function(req,res){
    let {wd,cb} = req.query;
    res.end(`${cb}('No，Thanks')`)
});

app.listen(3003);