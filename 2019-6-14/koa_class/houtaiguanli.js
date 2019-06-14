const koa = require('koa');
const app = new koa;
const router = require('koa-router')();
const body = require('koa-body');

const static = require('koa-static');
// 配置静态web服务的中间件
app.use(static('./www'));

let sql = [
    {
        "id": 1,
        "title": "HUAWEI全网通版（亮黑色）",
        "price": 499,
        "time": "2017-03-15",
        "hot": 198,
        "img": "img/1.jpg"
    },
];
app.use(body());
let arr = new Set(['title','time','price','hot','img']);

router.get('/api/list',async(ctx)=>{
    ctx.response.body = {
        data:sql
    }
})

router.get('/api/add',async (ctx,next)=>{
    let obj = ctx.request.query;
    let conText = {};
    
    let ary = Object.keys(obj);
    let num = 0;
    ary.forEach(item=>{
        if(arr.has(item))num++;
        console.log(arr.has(item),item)
    });
    console.log(num , arr.size)
    if(num < arr.size){
        //参数错误
        conText = {
            code:2,
            msg:'参数错误'
        }
        ctx.response.status = 400;
    }else{
        let {title,price,time,hot,img} = obj;
        //正确就添加数据
        sql.push({
            "id": Date.now(),
            title,
            price,
            time,
            hot,
            img
        });
        conText = {
            code:1,
            msg:'添加成功',
            data:sql
        }
    }

    ctx.response.body = conText;

    console.log(obj);

});

router.get('/api/rm',async(ctx)=>{
    let {query} = ctx.request;
    let conText = {}
    if(query.id){
        //删除对应的id
        if(sql.some(item=>item.id == query.id)){
            sql = sql.filter(item=>item.id != query.id);
            conText = {
                code:1,
                msg:'删除成功',
                data:sql
            }
        }else{
            //传入的参数有误
            conText = {
                code:2,
                msg:'参数错误'
            }
            ctx.response.status = 400;
        }
        ctx.response.body = conText;
    }

});

router.get('/api/replace',async(ctx)=>{
    let {query} = ctx.request;
    let conText = {};
    if(query.id){
        let obj = sql.find(item=>item.id == query.id);
        if(obj){
            /* 
                {
                    id:32132,
                    price:1999,
                    hahahe:1
                }
            */
            let keys = Object.keys(query);
            let oo = {};
            keys.forEach(item=>{
                if(arr.has(item)){
                    oo[item] = query[item];
                }
            });

            /*
                {
                    id:1321
                }
            */
            
            Object.assign(obj,oo);
            // console.log(obj);
            conText = {
                code:1,
                msg:'修改成功'
            }
        }else{
            conText = {
                code:3,
                msg:'没有此商品'
            }
        }
    }else{
        conText = {
            code:2,
            msg:'参数错误'
        }
        ctx.response.status = 400;
    }
    ctx.response.body = conText;
});

router.post('/api/search',async(ctx)=>{
    let {body} = ctx.request;
    let conText = {};
    if(body.s && body.wd){
        let data = sql.filter(item=>{
            return item[body.s] == body.wd;
        });
        if(data.length){
            conText = {
                code:1,
                msg:'查询成功',
                data
            }
        }else{
            conText = {
                code:4,
                msg:'没有此商品'
            }
        }
        ctx.response.body = conText;
    }
})


app.use(router.routes());//引路由

app.listen(80);