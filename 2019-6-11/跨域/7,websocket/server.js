let express = require('express');
let app = express();
let webSocket = require('ws');
let wss = new webSocket.Server({port:3000});
wss.on('connection ',function(ws){
    wss.on('message',function(e){
        console.log(e.data);
        ws.send('我爱你')
    });
})