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
    - onClick、onMouseOver...

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
