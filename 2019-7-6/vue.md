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

注意:前一兄弟元素必须有 v-if 或 v-else-if。
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


    computed:计算属性
        如果需要通过data的数据派生出别的结果这个时候就要想到computed并且还要让第一次运行，接下来每次修改接着运行

        

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












         





    








































