//1、
// var i = 2; //4
// function fn() {
//     i += 2;
//     return function (n) {
//         console.log(n + (--i));
//     }
// }
// var f=fn();
// f(2);//2 + 3=5
// f(3);//3 + 2=5

// /*
//     i  = 2 + 2 = 4;

//     console.log(2 + (3));
// */
// fn()(2);//2 + 3=5

// fn()(3);//3+4=7

// f(4);//4 + 3 = 7


//2、
// var n = 10;
// function fn() {
//     var n = 20;
//     function f() {
//         n++;
//         console.log(n);//21  22  23
//     }
//     f();
//     return f;
// }

// var x = fn();//1.执行了fn，2.x=return 后面的
// x();
// x();
// console.log(n);//10


// //3、
// let i = 1;//2
// let fn = function (n) {//2
//     i *= 2;
//     return function (m) {
//         i += n + m;
//         console.log(i);
//     }
// };
// let f = fn(2);//1.执行了fn ，2.f=return
// f(3);//2+=2+3=7   i=7
// fn(2)(3);//i=14  14+=5 = 19 i=19
// f(4);//19+=2+4=25
// f(5);//25+=2+5=32


// var i=0;
// console.dir(window);

//匿名函数自执行的this一定是window
// var num =1;
// var obj = {
//     num : 10,
//     fn : (function () {
//         this.num *=3;//window.num=3
//         return function () {
//             num +=2;
//             this.num ++;
//         }
//     })()
// };
// var f = obj.fn;
// f();//3+=2  5  window.num=6
// obj.fn(); //6+=2=8  obj.num=11
// console.log(num, obj.num);//8,11

// var name = '珠峰';
// var age = 9;
// age = (function (name,age) {
//     name = '珠峰';
//     age = age || this.age;
//     this.age = arguments[0];//window.age='珠峰'
//     console.log(name,age);//'珠峰',9
//     return this.age;
// })(name,age);//'珠峰',9
// console.log(name,age);

//3
// var obj = {name:'珠峰',age:9};//name=中国
// (function (obj) {
//     obj.name = '中国';
//     obj = {};
//     obj.age = 5000;
//     console.log(obj.age);//5000
// })(obj);
// console.log(obj.name);//中国



// var num = 1;
// var obj = {num:2};
// obj.fn = (function (num) {
//     this.num = num*2;//  window.num=2*2=4
//     num++;//3
//     return function (n) {
//         this.num += n;//window.num += n = 4+=10
//         num++;
//         console.log(num)//5
//     }
// })(obj.num)
// var fn = obj.fn;
// fn(10);//window.num=14    4
// obj.fn(20);//obj.num=2+=20=22
// console.log(num, obj.num);//14  22