# vue 项目配置

> 现在官方的vue-cli已经升级到3.x版本了，精简了很多文件，其中包括了没有了cli2中的config目录，所以需要改之前cli2中的config中相关的配置文件。需要我们自己在cli3项目根目录下新建vue.config.js来写。


## vue.config.js配置
> [vue.config.js](https://cli.vuejs.org/zh/config/#vue-config-js)是一个可选的配置文件，如果项目的（和package.json同级的）根目录中存在这个文件，那么它会被@vue/cli-service 自动加载。

- `vue.config.js` 配置详情

```
module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */ 
    publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: 'dist',
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "assets",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: true,
    /* webpack-dev-server 相关配置 */
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: 'localhost',
        port: 8066,
        /* 使用代理 */
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                target: 'http://47.100.47.3/',
                /* 允许跨域 */
                changeOrigin: true,
            },
        },
    },
}
```


## webpack-dev-server 相关配置
> 在开发模式下，devServer提供虚拟服务器，让我们进行开发和调试

- `devServer`的具体配置


```
devServer:{
    hot: true,  //热更新
    host: 'localhost', //配置主机名,默认localhost
    port: 8080, // 端口号，默认8080
    open: true, // 自动开启浏览器
    compress: true, // 如果为 true ，开启虚拟服务器时，为你的代码进行压缩。加快开发流程和优化的作用。
    historyApiFallback: true, //详见下文
    overlay:{
        errors:true, //如果为 true ，在浏览器上全屏显示编译的errors或warnings。默认 false （关闭
        warnings:false
    },
    quiet: true, //true，则终端输出的只有初始启动信息。 webpack 的警告和错误是不输出到终端的。
    proxy: {
         '/api': {
            target: '<url>',
            ws: true,
            changeOrigin: true
        },
     }
}
```

- historyApiFallback
    - 如果为true，页面出错不会弹出404页面。
    - 如果为{...}，看看里面有什么配置
        - rewrites
        ```
        rewrites: [
            { from: /^\/subpage/, to: '/views/subpage.html' },
            {
              from: /^\/helloWorld\/.*$/,
              to: function() {
                  return '/views/hello_world.html;
              }
            }
        ]
        // 从代码可以看出 url 匹配正则，匹配成功就到某个页面。
        // 并不建议将路由写在这，一般 historyApiFallback: true 就行了。
        ```
        - verbose: 如果为true，则激活日志记录
        - disableDotRule: 禁止url带小数点
        

- contentBase
    - 你要提供哪里的内容给虚拟服务器用，这里最好写**绝对路径**
    ```
    //单目录
    contentBase: path.join(__dirname,'public')
    
    //多目录
    contentBase: [path.join(__dirname, "public"), path.join(__dirname, "assets")]
    ```
    - 默认情况下，它将使用当前的工作目录来提供内容
    
    
### proxy
> 跨域代理，如果你的前端应用和后端API服务器没有运行在同一个主机上，你需要在开发环境下将API请求代理到服务器，这个问题可以通过`vue.config.js`中的`devServer.proxy`选项来配置，同`webpack-dev-server`中的`proxy`

- 例：
    ```
      proxy: {
        '/api': {
            target: 'http://your_api_server.com',
            changeOrigin: true,
            pathRewrite: {
                '^/proxy': ''
            }
      }
    ```
    
    - **target**：假设你的主机名为 `localhost:8080`,请求的API的url是`http：//your_api_server.com/user/list`
    
    - **'/api'**: 那么在你发送请求的地方把原有的`http：//your_api_server.com/user/list`换成 `/api/user/list`,这时在控制台看到的请求是 `http：//localhost:8080/api/user/list`
    
    - **changeOrigin**: 如果是true，那么`http：//localhost:8080/api/user/list`变为`http：//your_api_server.com/proxy/user/list`
    
    - **pathRewrite**: 重写路径，匹配 `/proxy` ，然后变为`''` ，那么url最终为`http：//your_api_server.com/user/list`
    
    