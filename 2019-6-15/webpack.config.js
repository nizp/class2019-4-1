const path = require('path');
const HTML = require('html-webpack-plugin');
const webpack = require('webpack');
if(module.hot){
    module.hot.accept()
}
const obj = {
    entry:'./2.js',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'./build')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    mode:'development',
    devServer: {
        port: 3000,
        open: true,
        hot: true 
    },
    plugins:[
        new HTML({
            title:'首页',
            filename:'index.html',
            template:'./index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = obj;