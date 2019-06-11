let express = require('express');
let app = express();
app.use(express.static(__dirname));//express的中间件 以当前文件当做静态文件目录

app.listen(3000);