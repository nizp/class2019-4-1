
# node

### 服务器语言

```
1、编译性语言
（1）只须编译一次就可以把源代码编译成机器语言，后面的执行无须重新编译，直接使用之前的编译结果就可以；因此其执行的效率比较高；
（2）编译性语言代表：C、C++、Pascal/Object Pascal（Delphi）；
（3）程序执行效率比较高，但比较依赖编译器，因此跨平台性差一些；

2、解释性语言
（1）源代码不能直接翻译成机器语言，而是先翻译成中间代码，再由解释器对中间代码进行解释运行；
（2）程序不需要编译，程序在运行时才翻译成机器语言，每执行一次都要翻译一次

源代码—>中间代码—>机器语言
```

后台管理（vue全家桶、react全家桶） + node + 数据库



### 通过node更好的去理解前端做的事情
> Node.js是基于Chrome的V8 JavaScript引擎构建的JavaScript运行环境

### node的优势
- 单线程
- 事件驱动
- 非阻塞I/O


### npm 全球最大的包管理平台（下载资源、学习平台）

**node的模块化管理**

> 通过require('http')引入文件 如果不写路径说明要么node中，要么在node_modules中,否则要加路径如require('./3')


> 通过module.exports = {key:value} 去导出

**写一个人生中第一个服务器**
```
const http = require('http'); //引包

//创建服务器
/*
    request  请求  客户端请求
    response 响应  发送给客户端
*/
//创建服务
const app = http.createServer((request,response)=>{
    console.log(1);
    //发送给客户端
    response.write("{code:1,msg:'abc'}");
    //结束发送
    response.end();
});
//80监听
app.listen(80);
```
### find  当回调函数中的条件成立的时候返回符合条件的那项
如果找不到，就返回undefined
> Array arr.find(function(item,i,all){})

```
    let ary = [1,2,3];
    ary.find(e=>e==1) -> 1
```

````
    xxx.com?user=abc&pass=123&cb=fn&wd=警察叔叔
```
### fs - FileSystem 文件管理

- const fs = require('fs');

```
到www目录下找1.txt文件
fs.readFile('./www/1.txt',(error,data)=>{
    if(error){
        console.log('404');
    }else{
        console.log(data.toString())
    }
})

也可以用readFileSync
try {
    let data = fs.readFileSync('./www/2.txt');
    console.log(data);
} catch (error) {
    console.log('404');
}
```





