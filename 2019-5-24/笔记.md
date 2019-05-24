# for of进行循环
* 在ES6中添加了别的数据结构(Set,Map)，他们都需要循环，所以专门通过for of来遍历这些数据结构（循环的统一标准）

```
    let arr = [1,2,3,4];
        
    for(let val of arr){
        console.log(val); //1,2,3,4
    }

```

* 如果使用for of循环的时候要获取数据的键值，那么可以借助数组的keys() 获取键 ,values() 获取值,entries() 获取键值对

```

    这三个方法的返回值都是一个Iterator对象，可以通过next()去调用继续执行

    let arr = [1,2,3,4];
    for(let [key,val] of arr.entries()){
        console.log(key,val);  //key为下标，val为值
    }

```

```
    对象默认不能进行for of循环，因为没有遍历器。
    以下代码会报错
    
    let obj = {
         name:'林同贺',
         age:81
    }
    for(let attr of obj){
         console.log(attr);
    }
```

#set
> ES6 提供了新的数据结构 Set。它类似于数组，
    但是成员的值都是唯一的，没有重复的值
    size就等同于length

    add(value)：添加某个值，返回 Set 结构本身。
    delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    has(value)：返回一个布尔值，表示该值是否为Set的成员。
    clear()：清除所有成员，没有返回值。

    let s = new Set();  //set{}
    s.add('1'); //添加一个数据 //set{'1'}

    let s = new Set([1,2,3,4,5,5]);  //set{1,2,3,4,5}

```

    写出一个方法join([1,2,3,4],[2,3,5,6])找出交集 //[2,3]
    
    function join(a,b){
        let s = new Set(a);
        return b.filter(e=>s.has(e));
    }
    console.log(join([1,2,3,4],[2,3,5,6])); //[2,3]
```
    


# Map
为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
    let m = new Map();
    m.set(ele,'哈哈');
    console.log(m.get(ele));

#  Iterator ,遍历器，只要数据中有Symbol.iterator就能使用for of
    遍历接口返回一个对象，对象中有一个next方法
    这个方法必须return对象，在这个对象下有2个属性
    value，done

    value就是for of中的attr
    done:为true的时候不遍历
    done:为false的时候遍历

> 当使用for of的时候，内部会调用next方法，只要next的返回值done为false就一直调用next，直到为true就不调用next方法了

# promise

* promise解决把异步编程转成同步编程的。

* 有三种状态，pending（初始化）、fulfilled（成功）、rejected（失败）

```
    let p = new  Promise((resolve,reject)=>{
        //放异步代码

        //当异步代码执行完成手动调用resolve或者reject
    })

    返回值为一个promise对象
    在promise对象下有几个方法
    .then(fn1,fn2)  
        fn1代表异步代码执行成功之后的回调
        fn2代表异步代码执行失败之后的回调

    .catch(异步代码执行失败之后的回调)

 let p1 = new Promise(()=>{})
 let p2 = new Promise(()=>{})
 let p3 = new Promise(()=>{})
 Promise.all([p1,p2,p3])
（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

```