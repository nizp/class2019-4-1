const http = require('http');

//创建服务器
/*
    request  请求  客户端请求
    response 响应  发送给客户端
*/
let sql = [
    {
        user:'yuhaiyang',
        pass:123
    },
    {
        user:'weibohui',
        pass:123
    },
    {
        user:'zhangmengya',
        pass:321
    }
];
/*
    user=yuhaiyang&cb=jquery_2321321
    {
        user:yuhaiyang,
        cb:jquery_2321321
    }
*/
const app = http.createServer((request,response)=>{
    // console.log(request);
    let url = request.url; //接收到客户端发送的请求带的参数，key=val&key2=val2...
    let obj = {};//把字符串转成对象 {key:val,key2:val2}
    
    
    if(url !== '/favicon.ico'){
        // console.log(url);
        //拿到url转成对象
        url.split('?')[1].split('&').forEach(item=>{
            let ary = item.split('=');
            obj[ary[0]] = ary[1];
        });  //['user=yuhaiyang','pass=123']

        //查找传入参数在数组中是否有
        let o = sql.find((e)=>e.user === obj.user);
        console.log(o);
        //中文设置
        response.setHeader('Content-Type','text/html; charset=utf-8');
        //如果o为对象，说明数组中有这个人
        if(o){
            response.write(obj.cb + '('+ JSON.stringify( {code:1,mas:'用户被占用'} )+')')
            // response.write(obj.cb + "({code:1,msg:'用户已被占用'})");
        }else{
            response.write(obj.cb + "({code:0,msg:'开始起飞'})");
        }
        // console.log(obj,'找到的'+o);
        // response.write("{code:1,msg:'abc'}");
        //{user:xxx,pass:xxx,cb:'jqeury_321dsha'}
        response.end();
    }
   
});
app.listen(80);

