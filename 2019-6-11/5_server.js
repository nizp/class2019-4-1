const http = require('http');
const fs = require('fs');

/*
    xxx.com?user=xx&pass=xx  接口

    xxx.com/1.html
*/
const app = http.createServer((req,res)=>{
    let ary = ['\.html','\.txt','\.js','\.css','\.less','\.sass'];
    let url = req.url;
    if(url !== '/favicon.ico'){
        let re = new RegExp('('+ary.join('|')+')');
        if(re.test(url)){
            //./www'+url -> ./www/index.html
            fs.readFile('./www'+url,(error,data)=>{
                if(error){
                    res.write('404');
                }else{
                    res.setHeader('Content-type','text/html; charset=utf-8');
                    res.write(data);
                }
                res.end();
            });
            console.log(url);
        }
    }
});
app.listen(80);

