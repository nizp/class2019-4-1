###webpack 自动化构建工具、项目构建、打包处理、转换让浏览器支持的语法 
https://www.webpackjs.com/concepts/ 官网
> 难点-> 英文
> 目标:当学完之后，希望大家都能够自己手动配置webpack
> 一般结果 -> 学完之后，啥东西？干啥的？我是谁？我在哪？

> <div id="box"></div> -> <div id=box></div>

### 四个核心概念
- 入口(entry)
```
    entry:'./2.js',  字符串，单入口
    entry:['./2','./1'], //多入口单出口
    output:{
        filename:'haha.js'
    }
    //多入口多出口
    entry:{
        index:'./2',
        aa:'./1'
    },
    output:{
        filename:'[name].[hash:8].js'  
    }
    name就表示entry的key

```
- 输出(output)
- loader
> 模块的源代码进行转换
```
module:{
    rules:[
        {
            test:/\.css$/,  //处理上面文件
            use:[需要的模块]
        }
    ]
}
```

- 插件(plugins)
plugins:[new HTML({}),new Xxx()]

### 安装
-   npm i webpack webpack-cli --golbal  （第一次安装需要那么做）
-   项目目录名称千万不要写webpack
-   npm init -y(到你项目的目录中输入)
-   npm i webpack webpack-cli --save   （只要安装过，就不用安装上面那句话了）

### 配置
- 自己手动创建一个webpack.config.js的文件

```
const path = require('path');
const obj = {
    entry:'./2.js',
    output:{
        filename:'2.js',
        path:path.relove(__dirname,'./build')
    }
}
module.exports = obj;

```

### 设置package.json 文件
> 找到scripts 设置值为 "build（自定义名称）":"webpack"
> 到命令行输入npm run build

### mode设置

> production  生产环境   让用户看的
> development 开发环境   让程序员看的

### webpack-dev-server

- npm i webpack-dev-server -D

- 配置
```
devServer: {
        clientLogLevel: 'warning',
        hot: true,
        compress: true,
        host: 'localhost',
        port: 80,
        open:true,
        proxy: {   //服务器跨域
            '/api': {
                target: 'http://www.yijianbaoshui.com/acc/queryAll.do',
                // changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

    //前端只需要请求/api这个接口就等同于访问http://www.yijianbaoshui.com/acc/queryAll.do
    例子如下:
    fetch('/api?orgid=bc97556b69a34ec2b885c6db0eab9acf&orgName=&loginType=0&curRoleId=2&groupId=811fa6641f974b9ab2855268ff59b27f')
    .then(e=>e.json())
    .then(d=>{
        console.log(d);
    })
```






