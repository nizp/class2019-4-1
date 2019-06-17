const Html = require('html-webpack-plugin');
// const Wp = require('webpack');
//https://segmentfault.com/a/1190000012383015
// if(module.hot){
//     module.hot.accept();
// }
const obj = {
    entry:'./1',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer: {
        clientLogLevel: 'warning',
        hot: true,
        compress: true,
        host: 'localhost',
        port: 80,
        open:true,
        proxy: {
            '/api': {
                target: 'http://www.yijianbaoshui.com/acc/queryAll.do',
                // changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    mode:'development',
    plugins:[
        new Html({
            template:'./index.html',
            filename:'index.html'
        }),
        // new Wp.HotModuleReplacementPlugin()
    ]

}

module.exports = obj;

