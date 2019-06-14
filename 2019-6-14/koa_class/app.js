const koa = require('koa');

const app = new koa;
const router = require('koa-router')()

// app.use(async (ctx,next)=>{
//     // ctx.response.type = 'text/html';
//     // ctx.response.body = JSON.stringify({code:0});
//     let url = ctx.request;
//     let obj = url.query;
//     let u = url.url.split('?')[0];


//     switch (u) {
//         case '/user':
//                 if(obj.user === 'yuhaiyang'){
//                     ctx.response.body = {
//                         code:0,
//                         msg:'失败'
//                     }
//                 }else{
//                     ctx.response.body = {
//                         code:1,
//                         msg:'成功'
//                     }
//                 }
//             break;
    
//         default:
//             break;
//     }
    
// });

router.get('/user',async (ctx,next)=>{
    ctx.response.body = {
        code:0
    }
});

app.use(router.routes())

app.listen(80);
