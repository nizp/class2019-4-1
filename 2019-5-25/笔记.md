#Generator 

* 特征一是，function关键字与函数名之间有一个星号；

> function* fn(){}

* 二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。

```
function* fn(){
    yield 4;
    return 5;
}

```

* Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。

```
    //当前这个fn是一个暂缓执行的函数，一开始是不执行的，只有调用了next方法才执行函数内的代码
    function* fn(){
        console.log(111);
    }
    let f = fn();

    setTimeout(()=>{
        f.next();
    },1000)

```
> yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。

#### yield做了2件事
        
> 1.给value设置值  {value:0,done:false}

> 2.给reset返回了一个undefined

```

function* numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}

// 扩展运算符
[...numbers()] // [1, 2]

// Array.from 方法
Array.from(numbers()) // [1, 2]

// 解构赋值
let [x, y] = numbers();
x // 1
y // 2

// for...of 循环
for (let n of numbers()) {
  console.log(n)
}
// 1
// 2

```


* 第一步，协程A开始执行。
* 第二步，协程A执行到一半，进入暂停，执行权转移到协程B。
* 第三步，（一段时间后）协程B交还执行权。
* 第四步，协程A恢复执行。
```