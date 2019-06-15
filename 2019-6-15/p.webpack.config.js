const path = require('path');
//抽离html和js的
const HtmlWebpackPlugin = require('html-webpack-plugin');
//抽离css的
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//webpack的配置文件
const obj = {
    mode:'production',
    //入口文件，让webpack去分析文件
    // entry:'./2.js',
    // entry:['./2','./1'], //多入口单出口
    entry:{
        index:'./2',
        aa:'./1'
    },
    //出口文件（打包后的文件放在哪，叫什么名字）
    output:{
        // filename:'haha.js',
        filename:'[name].js',
        path:path.resolve(__dirname,'./build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader//建议生产环境采用此方式解耦CSS文件与js文件
                    },
                    {
                       loader: 'css-loader',//CSS加载器
                       options: {importLoaders: 2}//指定css-loader处理前最多可以经过的loader个数     
                    }
                   
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'首页',
            filename: 'index.html',//文件名称
            template: './index.html'//基于哪个模板
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
}

module.exports = obj;