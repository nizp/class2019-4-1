一开始我们用的原生js写东西

为了效率使用了jQuery

angular   谷歌  粘性很强，强主张  TS-> typeScript,脏值检查
react     facebook   虚拟DOM，让开发者专注于数据处理，并且根据数据的变化去操作DOM(性能优化的去操作)，生态(手机端)

用于构建用户界面的 JavaScript 库，react是V层框架，专注于视图层
    M：Model    数据
    V: view     视图
    C：controller  控制器
vue



用对象去模拟DOM树
```
createElement('li',{className:'active',id:'box',children:[

    ]},'哈哈')

    {
        tagName:'li',
        attr:{
            className:'active',
            id:'box',
            children:[
                {
                    tagName:'div',
                    attr:{id:'div1'},
                    text:'呵呵'
                }
            ]
        }
        text:'哈哈'
    }

```

### react 安装
https://react.docschina.org/docs/getting-started.html

- npx create-react-app 文件名
- cd 文件名
- npm start



yarn 安装

# Hello World
- import React from 'react';
- import ReactDOM from 'react-dom';

- ReactDOM.render(document.getElementById('root'));
```
ReactDOM.render() 有三个参数
1.结构
2.根元素，默认为root
3.渲染完之后的回调函数

注意:
    结构的顶层只能有1个元素
    比如
        <div>你好</div><div>haha</div>  报错

        <div>
            <div>你好</div><div>haha</div>  对的
        </div>
```

## jsx -> js xml 可扩展的js语法

```
不用jsx的语法
    const H1 = React.createElement(
     'h1',
     {className: 'greeting'},
     'Hello, world!'
   );
用jsx的语法
<h1 className="greeting">Hello, world</h1>
```

- class必须写成className
- 标签必须是闭合状态 包括单标签 <input />
- {}
    - 可以执行js语句
    - 如果花括号内部有数组，默认展开
    - 如果元素属性是一个变量需要花括号  src={obj.xx} 
    - 受控组件、非受控组件
- 事件
    - onClick、onMouseOver...  onClick={}

```
    onClick = {()=>{
        事件干的事情
    }}

    myClick(){

    }

    onClick = {this.myClick.bind(this)}

```
    - 事件函数的this默认为undefined,所以要使用bind(this)修正this指向
    - 如果适合create-react-app 有语法不用使用bind
```
    下面的写法就不用加bind(this)
    事件函数 = ()=> {

    }
```
    


### 创建组件

- 类创建
```
    class 组件名称(首字母大写) extends  React.Component{
        render(){
            return (
                JSX -> 结构
            )
        }
    }
```
- 函数创建
```
    function App(){
        return (
            <div>
                <div>别的上面东西</div>
            </div>
        )
    }
```


###状态 state 在react中的所有数据，只要是在state下的，这些数据发生变化就会让视图更新

```
    constructor(){
        super();
        this.state = {
            数据
        }
    }

    修改数据

    this.setState({新数据})

        第一个参数可以是对象也可以是函数
        第二个参数
            状态改变之后的回调


        第一个参数为函数，函数的第一个参数为没改变的state,第二个参数为props

        如果要改变状态得return一个*对象*

        比如:
            this.setState((prev,props)=>({
                num:prev.num + 1
            }))


        setState,在包了一个定时器和原生事件的时候为同步的，别的时候就异步

        原生事件:
            componentDidMount(){
                let btn = document.querySelector('button');
                btn.onclick = function(){
                    //原生事件
                }
            }

        定时器:
            add = () => {
                setTimeout(()=>{
                    this.setState({num:2})
                    console.log(this.state.num); //2 同步
                },10)
            }
        



```





### 受控组件
    如果在表单元素上设置了一个（value、checked）默认值，那么该元素就变成了受控组件

### 非受控组件
    - 不设置默认值
    - defaultValue

### 父子组件传递

- 1.在父组件上给子组件中绑定自定义属性，把数据放到自定义属性上（发送）

- 2.在子组件中使用this.props.自定义属性名去接收（接收）
    ```
            function fn(a){
                <!-- console.log(a) -->
                a(function(a){
                    a(function(a){  
                        console.log(a);
                    })
                })
            }

            fn(function(a){
                a(function(a){
                    a(a);
                })
            });

    ```

### 数据的单向流动


父级的数据传到子级，数据本身还是父级的，如果用户操作子级要改变传递的数据
那么不能让子级改，要让父级修改

- 第一种情况
也就是说，父级需要定义一个修改数据的方法，在传递数据的时候也一起传给子级

当触发子级行为的时候，子级去调用父级修改数据的方法，父级修改数据，

当父级的数据发生变化的时候，又把最新的数据传给了子级


- 第二种情况，父级把数据给了子级，只想在触发子级的时候子级的数据变，父级的数据就不变

也就是说，父级通过自定义的方式传数据给子级，子级可以在constructor中接收到父级传递的数据（就一次），把父级传递的这个数据，变为this.state（子级的）,子级就拥有了父级的数据，并且修改自己的数据是不会影响父级


### 生命周期https://www.jianshu.com/p/514fe21b9914
一个组件从开始到死亡的过程中会触发该生命周期中的事件，把这个事件的生命周期函数暴露出来给我们使用，这个(些)函数就叫生命周期

- monting阶段(一次)
    - constructor  √  初始化数据时使用

    - componentWillMount 挂载之前

    - render  第一次渲染  √   第一次渲染时要处理的逻辑（千万不能用setState）

    - componentDidMount 挂载之后  √  请求数据 、获取到真实的DOM


- updating阶段
    - shouldComponentUpdate  性能优化 如果写了必须写上一个布尔值，默认为true，当为false的时候updating阶段就停止

    - componentWillUpdate 数据更新之前

    - render  渲染

    - componentDidUpdate 数据更新之后

**注意** 在上面这几个函数中不要使用this.setState()，不然会死循环 

    - componentWillReceivePorps  父级数据发生变化的时候使用


- ummonting阶段
    componentWillUnmount  当组件死亡的时候触发(卸载，跳路由，关定时器，数据重置，变量制空，清除事件...)




- ummonting阶段



### ref
可以快速的获取组件或者元素
    在指定组件上写一个ref的属性，值就随意

    ```
        <App ref="app"/>  定义好了

        this.refs.app 就能获得这个组件
    ```

### prop-types  验证传递数据的类型，目的（为了报错）

- 安装 npm i prop-types -S

- 引包 import PropType from  'prop-types';


### 路由 https://reacttraining.com/react-router/

- 安装 npm i react-router-dom -S

- 引包 import {BrowserRouter as Router |HashRouter as Router,Route} from 'react-router-dom'

    - 路由有2种
        - 一种是hash路由  /#home
        - 另一种history路由 /home

- 使用
    必须把Router放到根下
        ```
            ReactDOM.render((
                <Router>
                    <App />
                </Router>
            ),document.getbyId('xx'))


            function App (){
                return (
                    <Route path="/" component={App}/>   
                )
            }

        ```
**注意**
- 切换路由的时候可以通过组件内的props获取到路由信息
    -   history  就是与H5的history一样，能够操作浏览器的历史记录

    -  location  里面可以获取hash #，search ?，state:{key:value}

    -  match   里面可以获取url,path

### link
- <Link to="/home" >首页</Link>   to="字符串"

- <Link to={{pathname:'/home',hash:'#age=1',search:'?num=1',state:{}}} >


### Route
```
exact
    假设path="/one" 
        如果此时**没有**加上exact
        那么能匹配到
            /one还能匹配到/one/two


        如果如果此时**加上**exact
        那么能匹配到
            /one    

            /one/two是匹配不到的

    /one	/one/two	true	no
    /one	/one/two	false	yes


    例子:
        path="/"   / -> home,如果不加exact,除了能匹配/还能匹配/about,/xx


strict
当加上strict之后，path="/one/"    url上输入的是/one（少一个斜杠）不能匹配，

能匹配/one/或者/one/two


/one/	/one	no
/one/	/one/	yes
/one/	/one/two	yes
        

```

<Route path="/" component={组件}/>
<Route path="/" component={()=>{return (<div>list</div>)}}/>


render  放一个函数
<Route path="/" render={(props)=>{return (<div>list</div>)}}/>
    //props -> history、location、match


children 不管路径匹配是否成功都执行这个组件


<Route path="/user:/id" />  动态路由

在子页面就可以通过match.params.id去获取值，来改变我的数据或者样式...



### 重定向（ Redirect ）

<Route path="/" render={(props)=>{
    if(xx){
        return (<Axx />)
    }else{
        return (<Redirect to="/xx"/>)
    }
}}/>


A -> B


### Switch 只匹配一个先捕捉到的路由

```
<Switch>
    <Route path="/about/d" component={AboutD}/>
    <Route exact path="/about/:id" component={About2}/>
</Switch>

输入/about/d 会被优先捕获，捕获之后就不会在往下走了

```

## context

#### 老的context
设置
- childContextTypes 定义函数数据中的数据类型（必须是组件的静态方法）
- getChildContext 函数 用来设置数据的

获取
- contextTypes 获取数据的类型  子类下的静态方法
- this.context.xxx

**注意**
    如果父级和祖先级都设置了一个一样的属性，那么会按就近原则走



```
    import PropTypes from 'prop-types'; 

    App.childContextTypes = {

    }

    static childContextTypes = {
        num:PropTypes.number
    }
    getChildContext(){
        return {
            num:0
        }
    }



    取
    static contextTypes = {
        num:PropTypes.number
    }

    this.context.num
```

### 新版的context
是通过React.createContext() ->  Provider(生产),Consumer(消费)
```
    let {Provider,Consumer} = React.createContext() 

    <Provider value='哈哈'>   //value={{key1:xx,key2:xxx}}
        <PaP />
    </Provider>

    function Fn(){
        return(
            <Consumer>
                {
                    (val)=>{
                        return (
                            <div>{val}</div>
                        )
                    }
                }
            </Consumer>
        )
    }

```
如果要让子组件享用context的数据为自己的状态，可以添加一个(通过this.context拿)
contextType = context的数据（React.createContext()）

在constructor中没有this.context，在各生命周期中可以拿到(this.context拿)

```
import MyContext from './context';

class XX extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    static contextType = MyContext

    componentDidMount(){
        console.log(this.context);
    }
   
}

```

redux -> reduce + Flux 可预见的状态管理的容器  是一个独立的状态管理器（不依赖于某个框架的）

- 安装 npm i redux -S
- 引包 import {createStore} from 'redux'
- 创建store、reducer
    ```

        ADD_NUM 每次num + 1
        CHANGE_NAME 把于海洋变成林同贺

        function reducer(state={num:0,name:'于海洋'},action){
            console.log(action); //ADD_NUM
            switch(action.type){
                case 'ADD_NUM':
                    return {...state,num:state.num+1}
                case 'CHANGE_NAME':
                    return {...state,name:'林同贺'}
            }
            return state;
        }
        const store = createStore(reducer)
    ```
- 使用  console.log(store.getState()) -> {num:0}

- 修改state，就要触发dispatch({type:'ADD_NUM'})  ,默认传入一个对象

**发起了action一定是要新给一个对象，如果你发现你修改了state，但是页面没有更新，问题基本上就是没有更新最新的状态**

- bindActionCreators
    简化store.dispatch操作
    让函数返回一个对象
```
    import {createStore,bindActionCreators} from 'redux';
    import * as actionCreateors from './action'; 
    const store = createStore(reducer);
    const ActionCreators = bindActionCreators(actionCreateors,store.dispatch)
```

```
    store -
        index.js
            - import {createStore,bindActionCreators} from 'redux';
            - const store = createStore(reducer)
            - const ActionCreators = bindActionCreators(actions,           store.dispatch)
            - export {ActionCreators}
            - export default store

        action.js
            - 引入 actionTypes
            export function incrment(){
                return {type:actionTypes.INCRMENT}
            }
            ....
        actionTypes
            - const INCRMENT = 'INCRMENT';
            ....
        reducer
            -   export default function (state,action){
                    switch(action.type){
                        case xxx:
                            return 新的state
                        default:
                            return  state
                    }
                } 
```
    combineReducers 合并reducer的
        -   combineReducers({
                reducer1:reducer1,
                reducer2:reducer2
            })

store、action、reducer、dispatch、store.subscribe、getState()
bindActionCreators、combineReducers、actions、actionTypes

### react-redux

Provider  放到顶层组件上

```
    生产
    <Provider store={store}>  根组件
        <App />
    </Provider>

    connect(mapstateProp,mapdispatchProp)(组件) 链接
```



















