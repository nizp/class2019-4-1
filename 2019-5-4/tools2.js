let tools = (function(){

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





    return {
        toDouble,
        sumNum,
        countDown,
        getCss,
        setCss,
        po
    }
})();