let tools = (function(){

        //循环所有的数据，把每个数据的pid和你传进来的pid对比，如果一致，说明
    //就放到一个数组中，这个数组就是同级的了
    function getChild(pid){
        //判断一下是否有这个pid，如果整个对象下都没有这个数据
        //返回null
        if(!data[pid])return null;
        let arr = [];
        for(let attr in data){
            if(data[attr].pid === pid){
                    arr.push(data[attr]);
            }
        }
        return arr;
    }

    function getParent(id){
        //有这个数据并且pid不等于-1

        if(!data[id] || data[id].pid ==-1)return null;
        return data[data[id].pid];

        // if(data[id] && data[id].pid != -1){//
        //     return data[data[id].pid];
        // }else{
        //     return null;
        // }
    }

    // 2.获取一堆的父级
    function getParents(id){
        let arr = [];
        let now = data[id];
        while(now){
            arr.unshift(now);
            now = getParent(now.id); 
        }
        return arr;
    }





    function po(ele){
        let obj = ele,
        top = 0,left = 0;
        while(obj){
            top += obj.offsetTop + obj.clientTop;
            left += obj.offsetLeft + obj.clientLeft;
            obj = obj.offsetParent;
        }
        top -= ele.clientTop;
        left -= ele.clientLeft;
        return {top,left}
    }

    //单位数补零
    function toDouble(n){
        return n < 10? '0'+n:''+n;
    }

    //[1,2,3,4,5]
    //[{num:1,price:10},{num:2,price:20}]
    //求和
    function sumNum(arr,attr){
        let num = 0;
        if(attr){
            arr = arr.map(e=>e[attr]);
        }
        arr.forEach(item=>{
            num += item
        });

        return num;
    }

    //倒计时 日时分秒  '2019/5/4' 2019,5,4   new Date('2019/5/4')
    /*
        '2019/5/4 10:51:30'
        '2019-5-4 10:51:30'
        '2019-05-04 10:51:30'
    */
    function countDown(str,callback){
        let newTime = new Date(str);
        let timer = null;

        timer = setInterval(() => {
            let oldTime = new Date;
            let s = Math.floor((newTime - oldTime)/1000);
            //已经过了未来时间
            if(s < 0){
                clearInterval(timer);
            }else{
                let day = Math.floor(s/86400);
                day %= 86400;
                let hour = Math.floor(s/3600);
                hour %= 3600;
                let mi = Math.floor(s/60);
                s %= 60;

                let str = toDouble(day) +"天"+ toDouble(hour) +':'+ toDouble(mi) + ':'+ toDouble(s);

                //如果传入了函数，就调用函数
                // callback && callback(str);

                if(callback && typeof callback === 'function'){
                    callback(str);
                }

                // if(callback){
                //     callback(str);
                // }
            }

        }, 1000);
    }

    function getCss(obj,attr){
        if(typeof obj === 'string'){
            obj = document.querySelector(obj);
        }
        if(!obj)return null;
        return parseFloat(getComputedStyle(obj)[attr]);

        // if(typeof obj === 'string'){
        //     obj = document.querySelector(obj);
        //     return parseFloat(getComputedStyle(obj)[attr]);
        // }else if(obj.nodeType === 1){
        //     return parseFloat(getComputedStyle(obj)[attr]);
        // }
    }

    /*
        px/em/rem/vh/vw/%

        普通的设置都是px 默认为px

    */
    function setCss(obj,...arg){
        
        let toS = Object.prototype.toString;
        if(typeof obj === 'string'){
            obj = document.querySelector(obj);
        }
        if(!obj)return null;

        if(arg.length === 1 && toS.call(arg[0]) === '[object Object]'){
            for(let attr in arg[0]){
                style(obj,attr,arg[0][attr]);
                // obj.style[attr] = arg[0][attr];
            }
        }

        if(arg.length === 2){
            //如果属性不为带单位的就直接赋值即可
            style(obj,...arg);
        }
    }
    function style(obj,...arg){
        let toS = Object.prototype.toString;
        //不带单位的
        let re = /opacity|fontSize|weight|zIndex/;
        if(re.test(arg[0])){ //属性
            obj.style[arg[0]] = arg[1];
            //如果直接是数字的，那么默认为px
        }else if(typeof arg[1] === 'number'){
            obj.style[arg[0]] = arg[1] + 'px';
            //如果是对象，那么就说明用户需要带单位
        }else if(toS.call(arg[1]) === '[object Object]'){
            obj.style[arg[0]] = arg[1].num + arg[1].dw;
        }else{
            obj.style[arg[0]] = arg[1];
        }
    }

    var Tween = {
        linear: function (t, b, c, d){  //匀速
            return c*(t/d) + b;
        },
        easeIn: function(t, b, c, d){  //加速曲线
            return c*(t/=d)*t + b;
        },
        easeOut: function(t, b, c, d){  //减速曲线
            return -c *(t/=d)*(t-2) + b;
        },
        easeBoth: function(t, b, c, d){  //加速减速曲线
            if ((t/=d/2) < 1) {
                return c/2*t*t + b;
            }
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInStrong: function(t, b, c, d){  //加加速曲线
            return c*(t/=d)*t*t*t + b;
        },
        easeOutStrong: function(t, b, c, d){  //减减速曲线
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
            if ((t/=d/2) < 1) {
                return c/2*t*t*t*t + b;
            }
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
            if (t === 0) { 
                return b; 
            }
            if ( (t /= d) == 1 ) {
                return b+c; 
            }
            if (!p) {
                p=d*0.3; 
            }
            if (!a || a < Math.abs(c)) {
                a = c; 
                var s = p/4;
            } else {
                var s = p/(2*Math.PI) * Math.asin (c/a);
            }
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        //弹性运动
        elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
            if (t === 0) {
                return b;
            }
            if ( (t /= d) == 1 ) {
                return b+c;
            }
            if (!p) {
                p=d*0.3;
            }
            if (!a || a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else {
                var s = p/(2*Math.PI) * Math.asin (c/a);
            }
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },    
        elasticBoth: function(t, b, c, d, a, p){
            if (t === 0) {
                return b;
            }
            if ( (t /= d/2) == 2 ) {
                return b+c;
            }
            if (!p) {
                p = d*(0.3*1.5);
            }
            if ( !a || a < Math.abs(c) ) {
                a = c; 
                var s = p/4;
            }
            else {
                var s = p/(2*Math.PI) * Math.asin (c/a);
            }
            if (t < 1) {
                return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
                        Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            }
            return a*Math.pow(2,-10*(t-=1)) * 
                    Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
        },
        backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
            if (typeof s == 'undefined') {
               s = 1.70158;
            }
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        backOut: function(t, b, c, d, s){
            if (typeof s == 'undefined') {
                s = 3.70158;  //回缩的距离
            }
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        }, 
        backBoth: function(t, b, c, d, s){
            if (typeof s == 'undefined') {
                s = 1.70158; 
            }
            if ((t /= d/2 ) < 1) {
                return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            }
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
            return c - Tween['bounceOut'](d-t, 0, c, d) + b;
        },     
        //自由落体  
        bounceOut: function(t, b, c, d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
            }
            return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
        },      
        bounceBoth: function(t, b, c, d){
            if (t < d/2) {
                return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
            }
            return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
        }
    }
    


    function startMove(opts){
        let opt = {
            obj:null,
            json:{},
            durtion:1000,
            cb:function(){},
            fx:'linear'
        }

        //有配置走配置，没配置走默认
        Object.assign(opt,opts);
        if(opts.cb && typeof opts.cb !== 'function'){
            opt.cb = function(){}
        }

        let f = opt.fx;
        //存储每个属性的初始值和目标点
        let j = {};
        // 枚举整个json,把每个属性赋值为对象，在对象下又有初始值和目标点
        for(let attr in opt.json){
            if(opt.json.hasOwnProperty(attr)){
                //获取到每个属性的初始值
                let b = parseFloat(getComputedStyle(opt.obj)[attr]);
                let c = 0;
                //获取到每个属性的目标点 类似于{width:{fx:'exx',d:500}}
                if(typeof opt.json[attr] === 'object'){
                    j[attr] = {b}
                    for(let attr2 in opt.json[attr]){
                        j[attr][attr2] = opt.json[attr][attr2];
                    }

                    j[attr].c = j[attr].c - j[attr].b;
                }else{
                    c = opt.json[attr];
                    c = c - b;
                    j[attr] = {
                        b,
                        c
                    };
                }
            }
        }
       
        let d = opt.durtion;
        let t = 0;

       
        (function move(){
            opt.obj.timer = requestAnimationFrame(move);
            t += 16.7;
            if(t >= d)t=d;

            for(let attr in j){
                //把默认值赋值给fx，不然都覆盖了
                opt.fx = f;
                opt.fx = j[attr].fx || opt.fx;
                //如果是opacity就不加单位
                if(attr === 'opacity'){
                    opt.obj.style[attr] = Tween[opt.fx](t, j[attr].b,j[attr].c, d);
                }else{
                    opt.obj.style[attr] = Tween[opt.fx](t, j[attr].b,j[attr].c, d) + 'px';
                }
            }
           
            if(t === d){
                cancelAnimationFrame(opt.obj.timer);
                opt.cb();
            }
        })();
    }





    function shake(opt){
        //默认配置
        //为什么要用默认配置？
        //是因为有些参数不想传
        let opts = {
            obj:null,
            attr:'left',
            endNum:10,
            cb:function(){}
        }
        
        //有配置走配置，没配置走默认
        Object.assign(opts,opt);

        //如果传了一个cb的属性,还要判断是否为函数，因为只有函数才能调用。
        if(opt.cb && typeof opt.cb !== 'function'){
            opts.cb = function(){}
        }

        // console.log(opts)

        // return;

       let num = 0;
       let begin = parseFloat(getComputedStyle(opts.obj)[opts.attr]);
       let arr = [];
       for(let i=opts.endNum;i>0;i-=2){
            arr.push(i,-i);
       }
       arr.push(0);
    //    console.log(arr);

    //    return;
       clearInterval(opts.obj.timer);
        opts.obj.timer = setInterval(() => {
            opts.obj.style[opts.attr] = begin + arr[num] + 'px';
            num ++;
            if(num === arr.length){
                num = 0;
                clearTimeout(opts.obj.timer);
                //当运动完成之后再执行cb这个函数
                opts.cb();
                // console.log('马某在跳跃');
            }
       }, 16.7);
    }

    function addWheel(obj,fn){
        //let w = window.navigator.userAgent.toLowerCase();
        // if(w.includes('chrome')){
        if(obj.onmousewheel === null){
        // if('onmousewheel' in window){
            obj.onmousewheel = whell;
        }else{
            obj.addEventListener('DOMMouseScroll',whell);
        }

        function whell(ev){
            let o = true;
            // console.log(ev.wheelDelta);
            if(ev.wheelDelta){ //是chrome
                o = ev.wheelDelta > 0?true:false;
            }else{
                o = ev.detail < 0?true:false;
            }

            //回调函数
            fn && fn(o);
        }
    }

    function duang(obj,obj2,scrollT,scrollL){
        scrollT = scrollT || 0;
        scrollL = scrollL || 0;
        let l1 = obj.offsetLeft + scrollL;
        let t1 = obj.offsetTop + scrollT;
        let r1 = l1 + obj.offsetWidth;
        let b1 = t1 + obj.offsetHeight;

        let l2 = obj2.offsetLeft;
        let t2 = obj2.offsetTop;
        let r2 = l2 + obj2.offsetWidth;
        let b2 = t2 + obj2.offsetHeight;

        //+ folders.scrollTop
        // console.log(t1)

        //只要碰到就返回true，否则false
        if(r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2){
            return false;
        }else{
            return true;
        }
    }





    return {
        toDouble,
        sumNum,
        countDown,
        getCss,
        setCss,
        po,
        shake,
        addWheel,
        duang,
        getChild,
        startMove,
        getParent,
        getParents
    }
})();