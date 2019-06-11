const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
// const 

let sql = ['zhiqiang']
http.createServer((req,res)=>{
    let url = req.url;
    if(url !== '/favicon.ico'){
        //走文件
        if(url.includes('.html')){
            try {
                let d = fs.readFileSync('./www'+url);
                res.write(d.toString());
            } catch (error) {
                let er = fs.readFileSync('./www/404.html');
                res.write(er.toString());
            }
            res.end();
        }else{
            //走接口

            if(url === '/post'){
                let str = '';
                req.on('data',(d)=>{
                    // console.log(d.toString())
                    str += d;
                });

                req.on('end',()=>{
                    // console.log(str.toString(),111);
                    let obj = querystring.parse(str);
                    // console.log(.user)
                    res.setHeader('Content-Type','text/html;charset=utf-8');
                    if(sql.includes(obj.user)){
                        res.write(JSON.stringify({code:0,msg:"失败"}));
                    }else{
                        res.write(JSON.stringify({code:1,msg:"成功"}));
                    }
                    res.end();
                });
            }
        }
    }
    
}).listen(80);


