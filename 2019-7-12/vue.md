#vue

- MVVM框架 - Model  View  ViewModel(视图模型) 

- M-Model  V-View  C-Control

https://cn.vuejs.org/index.html  官方地址  国人，尤玉溪开发，有不稳定因素,

有可能作者会凉凉。

### vue是MVVM框架   react是V框架  都专注于视图层

中文文档 是非常容易学习（学习成本不高，只要是个前端都会vue）

模板引擎 - swig  ejs  <%=if(){}%>   {{}} 小胡子写法

react  如果要写成<div>,必须使用babel去转换React.createClass()
vue  div 弱主张性
angular 强主张

个人初期感受，vue好用，轻量、方便、用起来浑身舒服畅快
用了一阵以后，觉得没有react抽离的干净，内心深处会有一种小小的鄙视（被环境影响），但是另一个小人告诉我，这才叫前端

用什么框架不是由自己决定的(排除公司只有你一个人)，所以按理来说所有的框架都要学，不过可以先精通一个

真实的我，如果你react接收的很吃力，打算出来先就业，再拿高薪，可以选择vue

我只见过直接放弃react的，直接奔向vue的，别的被动选择vue的同学，不一定能把vue学很好，所以说，学的好和学的不好，第一学习习惯，第二就是学习态度。

JSX 
    this.state
    this.props
    className
    </>
    生命周期

router

redux

vue api


渐进式:
    弱主张


第一种方式:
    通过vuejs去引入


### 使用
new Vue({
    el:'#挂载的元素名',
    data:{
        在new Vue中data的值是一个**对象**，对象里面就可以设置初始化的数据
    }
})

指令:
    v-if="数据|条件"  true 渲染在页面，false，不渲染页面
    v-else-if="数据|条件"
    v-else

注意:v-else前一兄弟元素必须有 v-if 或 v-else-if。
    如果触发频繁会影响性能

    v-show="条件" -> 成立:display:block 否则为none
    尽量用这个

    v-text  -> innerText
    v-html  -> innerHTML

    v-for="val in data"  数组  val就是数组中的值
    v-for="(val,attr) in data" 如果是数组 val就是数组中的值，key就是索引
                              如果是对象，val值，attr名


    v-on:不带on事件名
    缩写:@ 比如:@click
    修饰符:
        .13 || .enter 回车
        .stop  阻止冒泡
        .prevent 阻止默认行为
        ....

    事件函数应该写在
        methods中

        new Vue({
            methods:{
                方法1,
                方法2
            }
        })
        

    事件中可以绑定函数
        @click="fn"  fn没有参数，默认的参数是event

        @click="fn(key)" fn如果有参数，那么key就是传进来的参数

        如果又要传参又想获取event，那么需要在函数调用中写*** $event ***

        @click="fn(key,$event)"  

        onClick={this.click}
        @click={fn} 
        methods['fn'] = function(){}


    v-bind  绑定行间属性
        缩写:  :
        如果属性为value="",src="",href=""... 里面的值是静态的(写死那么不需要v-bind)

        如果属性的值是通过数据得到，那么需要加上v-bind
         v-bind:value
         v-bind:href
         v-bind:src
         v-bind:style
         ... 

         缩写为
            :value=""
            :href="" 
            ....

    v-model  只要是表单就要立马想到是否使用v-model (双向数据绑定)
    v-model="数据"

        这个数据要么直接就是data下的属性，要么就一定要是一个引用类型下的属性


    computed:计算属性
        如果需要通过data的数据派生出别的结果，这个时候就要想到computed并且还要让第一次运行，接下来每次修改接着运行

        

        computed:{
            fn(){
                return this.arr.every(item=>item)
            },
            all:{
                get(){
                    return this.arr.every(item=>item)
                },
                set(val){
                    val就是当修改数据时的值
                }
            }
        }

    watch:
        监听data数据的变化，只要变化就触发，第一次是不会触发的，只有改变了之后才触发

        写法:
           ```
             data:{
                arr:[]
            },
            watch:{
                要监听的数据名:函数或者对象
                比如:

                arr(newValue,oldValue){
                    //当arr发生变化的时候做的事情
                }

                如果数据要深层监听要用对象的方式
                比如:
                arr:{
                    handler:function(newValue,oldValue){
                        //当arr发生变化的时候做的事情
                    },
                    deep:true
                }
            }
           ```

### 组件
在Vue中有一个component的方法来创建组件。

```
    Vue.component({
        template:'<div>{{num}}</div>',
        data(){
            return {
                ary:[],
                num:0
            }
        }
    })
```

注意：
    方法必须写new Vue的上面
    要记得插入子组件
    data的值为函数，这个函数必须返回一个对象，对象的值就是初始化数据
    组件的名字要么小写，要么烤串命名
    组件顶层只能有一个元素

    烤串命名:get-by-id
    驼峰命名:getById

### 子组件的数据流动
react是单向的流动
vue是单向流动 -> 父级的数据传递给子级，如果需要通过操作子级修改数据，只能是父级修改(因为数据是从父级流向子级的，子级是不能流动数据给父级的)

双向数据绑定  -> 数据驱动视图，视图操作数据

传递的方式:
    1.传递:
        通过在子组件上挂一个自定义的属性，如果传递的值是一个静态的，那么不需要加v-bind
        比如:
            pn="1"  这个1就是静态的
        如果传递的值是一个动态的，那么这个属性必须是被v-bind的所绑定

        比如:
            :pn="num"  这个num是父级或者可能需要变化的

    2. 接收:
        子组件写上props的属性
            比如:
            {
                data(){
                    return {}
                },
                props:['自定义属性的名字']  可以是个数组
                还可以写对象(对象是为了验证传递的数据类型)
                props:{
                    自定义的名字:类型
                    pn:String
                }
                还可以
                props:{
                    自定义的名字:[类型,类型]
                    pn:[String,Number]
                    还可以写
                    default:100  // 如果没有传默认值为100
                    required:true //必须传
                }

            }


子传父:
    1.父级定义一个改变数据的方法
    2.子组件内使用this.$emit去定义一个自定义的事件
        比如:
            this.$emit('tongdao',可以加参数);

    3.在子组件上绑定tongdao这个事件，并且把父组件的改变数据的方法添加到自定义事件上


第二种，把父级的数据变成子级自己的，跟父级断开联系

    1.通过props去接收父级的数据
    2.把接收到的数据存到自己的data中

    ```
        {
            props:['nn'],
            data(){
                return {
                    cnum:this.nn
                }
            },
            template:`<div>{{cnum}}</div>`
        }
    ```

    如果想父级的数据根据子级的数据变化
    那么，父级需要定义的一个方法去接收子级传过来的数据
    比如:
        ```
            getchildfn(val){
                this.num = val;
            }
        ```

    然后通过事件绑定的方式把getchildfn传给子级
        @自定义名字="getchildfn"

    最后当修改子级数据的时候，创建一个自定义名字的事件，并且把数据传进去
        比如:
        ```
            this.$emit('自定义名字',要传给父级的数据)
        ```

### ref 快速定位组件或者是元素
    给元素身上加上ref的属性，值就是自定义的名字
    小技巧:
        在v-for的时候如果在被遍历的元素上写死一个名字，那么所有的遍历元素都会有相同的名字
        那么这个时候可以使用字符串拼接的方式来区分ref的名字

        比如:
            <li v-for="val,key in arr" ref="'aa'+val.id"></li>  -> refs['aa'+id]

### nextTick 当DOM加载完成执行的一个函数（在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。）


### slot 插槽

- 在组件中使用slot标签，包裹默认的元素和样式||组件
- 用双标签注入到父级组件中，那么显示出来的结果就是slot标签中的结构||组件
- 如果在双标签中有添加别的标签，那么就会显示添加的标签而不会显示slot中的默认标签||组件

比如
```
    走slot默认
    <div id="root">
        <ppa></ppa>  
    </div>


    走自定义的组件
    <div id="root">
        <ppa>
            <p>自定义组件</p>
        </ppa>  
    </div>


    定义slot:
        Vue.component('ppa',{
            template:`
                <slot>
                    <p>默认的组件或者元素</p>
                <slot>
            `
        })

```

### 如果有多个slot的情况下要保证结构同步那么可以给slot设置一个name去识别，使用的时候通过slot=“name”去关联

比如:
```
    <div id="root">
        <ppa>
            <p slot="m2">自定义组件2</p>
            <p slot="m1">自定义组件</p>
        </ppa>  
    </div>


    Vue.component('ppa',{
        template:`
            <slot name="m1">
                <p>默认的组件或者元素</p>
            <slot>
             <slot name="m2">
                <p>默认的组件或者元素</p>
            <slot>
        `
    })
```

## vue的生命周期
- 当new了Vue之后就执行vue的代码
- beforeCreate  数据挂载之前  拿不到数据
- created   数据挂载之后  可以拿到数据，此时可以进行ajax请求
- 有没有el(挂载元素)，如果有去看有没有模板，如果没有看看有没有$mount('el'),如果都没有就没有后续了，页面该是什么样子就是什么样子
- beforeMount (数据渲染之前)  数据还没生产模板，只能获取到页面中手写的DOM
- mounted (数据渲染之后) 在这个生命周期中，我们可以获取到渲染之后的DOM

上面的过程只会执行一次

- beforeUpdate  数据修改更新之前
- updated   数据更新之后，可以获取到最新的数据和数据对应的dom

只要数据发生变化就执行

beforeDestroy  组件卸载之前  关闭定时器,函数初始化
destroyed 



/home/add  -> home/add

/#home/add  -> hash

##路由:

- 安装vue-router
- 创建一个router文件夹
    index.js ->
        import VueRouter from 'vue-router';
        const routes = [

        ]

        const router = new VueRouter({
            mode:'history', //开启history模式，不写默认hash模式
            routes
        })

        export default router


    main.js中
        import VueRouter from 'vue-router';
        import router from './router/index';

        Vue.use(VueRouter)

        new Vue({
            router
        })

    用路由一定要使用，<router-view></router-view>


    配置好路由之后，可以通过$route.xx去拿到查询信息或者paramsId

    比如:
        模板中:
            $route.params.id
            $route.query.a

        组件中:
            this.$route.params.id
            this.$route.query.a

    <router-link to="/">
    <router-link :to="{path:'/',query:{a:1}}">
    <router-link :to="{name:'news',query:{a:1}}">

## 
    **$route是放属性的**
        可以获取到查询信息: ?后面的

        可以获取hash值：#后面的

        可以获取到params /xx/:id


    **$router是放方法的**
        push()
        replace
        go(1)


#导航守卫
    全局的守卫
        只要是切换路由就会进
        需要在router.beforeEach((to,from,next)=>{
            to,到哪里去
            from，从哪里来
            next，继续向下执行
            next();
        });


        router.afterEach((to,from)=>{
            路由守卫结束
        });


    局部守卫
        beforeRouteEnter((to,from,next)=>{
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
        })
        beforeRouteUpdate((to,from,next)=>{
            // 在当前路由改变，但是该组件***被复用时调用***
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
        }) 
        beforeRouteLeave((to,from,next)=>{
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
        })


### redirect

```
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```

## EVENT BUS

- new Vue()  vue的实例就是EVENT BUS

- 绑定事件:  
    - 在created下去写一个事件绑定
    - Bus.$on('事件名',(传入参数)=>{该事件要做的事情})


- 事件触发:
    - 在methods中触发
    - Bus.$emit('要触发的事件名',参数)



# VueX 状态管理容器
    使用步骤:
    - 安装包  npm install vuex -S
    - 引包  
        import Vuex from 'vuex';
        Vue.use(Vuex);引入中间件
    - 创建store
        const store = new Vuex.Store({
            state:{
                //初始化数据
            },
            mutations:{
                //数据更新的方法都写在里面,只有mutations才能改变数据的状态
                increment(state){
                    state.num ++;
                }
            }

        });

    - 在new Vue({store}) 引入store

    - Vue组件如何显示store的数据呢？
        - 如果在模板中
            - $store.state.xx
        - 如果在组件的方法中
            - this.$store.state.xxx

        还可以通过vuex下的mapState去获取数据
        在computed下使用mapState
        比如:
            import {mapState} from 'vuex';

            computed:mapState({
                nn:'num'    把store下的num获取到，并且取个nn的名字
                nn:state=>state.num 效果和上面一样
                fn(state){
                    return state.num + this.num;  //this代表当前组件的
                }
            })

            或者是
            ...mapState(['num'])

            <!-- let {num.str...} = this.props -->


    getters: 就是通过数据派生出来的结果
    比如:
            import {mapState,mapGetters} from 'vuex';
            computed:...mapState(['toudbl'])


    mutations:是改变store中状态的唯一方式;Mutation **必须是同步函数**

    mutations:{
        add(state,n){
            state.num += n;
        }
    }

    发起mutations使用commit
    $stroe.commit('add',5);


    actions:异步请求的时候使用
        actions:{
            actionAdd(context){
                setTimeout(() => {
                    context.commit('add');
                },2000)
            }
        }

    $store.dispatch('actionAdd')

    mapActions:
        methods:{
        ...mapActions(['actionAdd'])
    }

        








    

可以安装谷歌商城中找Vue.js devtools













  






















         





    








































