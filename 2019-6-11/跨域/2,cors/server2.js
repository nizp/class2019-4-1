let express = require('express');
let app = express();
let whitList = ['http://localhost:3000']//白名单列表
app.use(function(req,res,next){
    let origin = req.headers.origin;
    if(whitList.includes(origin)){//判断白名单列表里面是否包含请求头
        //设置那个源可以访问
        res.setHeader('Access-Control-Allow-Origin','*');
        //允许携带那个头访问我
        res.setHeader('Access-Control-Allow-Header','name');
        //允许那个方法访问我
        res.setHeader('Access-Control-Allow-Meathods','PUT');
        //允许携带cookie
        res.setHeader('Access-Control-Allow-Credentials',true);
        //预检的存活时间
        res.setHeader('Access-Control-Max-Age',6);
        //允许返回的头
        res.setHeader('Access-Control-Expose-Headers','name');
        if(req.method === 'OPTIONS'){
            res.end();//OPTIONS请求不做任何处理
        }
    }
    next();
})
app.put('./getData',function(req,res){
    console.log(req.headers);
    res.end("我不爱你")
})
app.get('./getData',function(req,res){
    console.log(req.headers);
    res.end("我不爱你")
})
app.use(express.static(__dirname));//express的中间件 以当前文件当做静态文件目录

app.listen(4000);
