### mongoose

### 使用步骤
- 安装mongoose,引包

- 链接 const conn =  mongoose.createConnection('mongodb://127.0.0.1/数据库的名字',{
    useNewUrlParser:true
})

- 监听事件
    conn.on('connected',()=>{
        //链接成功

    })

    conn.on('error',()=>{
        //链接失败
    })

    conn.on('open',()=>{
        //打开
    })

。。。。


- 创建骨架
    - new mongoose.Schema({user:String,ary:[]})

    - 注意的是设计骨架的时候，可以添加必填设置
        new mongoose.Schema({
            user:String,
            ary:[],
            pass:{
                type:String,
                required:true    //必填项
            },
            zhushi:{
                default:'哈哈'
            }
        })



- 基于骨架去创建模型
    - conn.model('模型名',骨架)


- 基于模型就造数据即可。


增:create 删:delete 改:update 查:find

增加数据:
    通过模型去创建真实数据，比如

```
    const UserModel =  conn.model('User',UserSchema); 

    1.UserModel.create({user:'xxx',pass:123},(error,data)=>{

    })

    2.UserModel.create({user:'xxx',pass:123}).then((data)=>{})

    3.;(async function(){
        const d = await UserModel.create({user:'xxx',pass:123})
    })()


    4.
        let arr = []

        for(let i=0;i<1000;i++){
            arr.push({
                user:zf+i,
                pass:123
            })
        }

        UserModel.create(arr)

    在创建数据的时候，如果骨架中没有添加这个数据字段，那么这项数据是不会成功添加进数据库的，骨架中有数据字段只能减少不能增多，比如:

        UserModel.create({user:'xxx',pass:123,age:12})

        这里的age是没有的在骨架中的，所以age是不能成功添加到数据库中的


```

查询:
    find,findOne,findById

    find就是查多个数据,返回的是数组

        find({_id:12321321,age:18})  查所有的数据

        find({_id:12321321,age:18},{user_:1,id:0})  查所有的数据

        返回的数组，user显示，id就不显示


    findOne就是查询一个数据

    findById('321312')












