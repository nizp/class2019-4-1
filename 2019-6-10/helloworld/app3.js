"use strict";
const express = require('express');
const path = require('path');
const app = express();
const request = require('request');
 
// // 配置静态文件服务中间件
// let serverUrl='http://www.baidu.com';//server地址
// app.use(express.static(path.join(__dirname, './')));//静态资源index.html和node代码在一个目录下
// app.use('/', function(req, res) {
//   let url = serverUrl + req.url;
//   req.pipe(request(url)).pipe(res);
// });
 
// 配置静态文件服务中间件
/*
  https://movie.douban.com/j/search_subjects?type=tv&tag=国产剧&page_limit=50&page_start=0
*/
let serverUrl='https://movie.douban.com/j/search_subjects?type=tv&tag=%E5%9B%BD%E4%BA%A7%E5%89%A7';//server地址
app.use(express.static(path.join(__dirname, './')));//静态资源index.html和node代码在一个目录下
app.use('/', function(req, res) {
  let url = serverUrl + req.url;
  req.pipe(request(url)).pipe(res);
});
 

app.listen(3001,'127.0.0.1', function () {//前端ajax地址写 http://127.0.0.1:3000/
  console.log('server is running at port 3001');
});