;(function(global,factoy){
    factoy(global);
})(this,function(global,noGlobal){
    
    function Axios(json){
        return new axios(json);
    }

    Axios.prototype = {
        constructor:axios,
        get:function(url){
            return new Promise((resolve,reject)=>{
                this.xhr.open('get',url);
                this.xhr.onreadystatechange = this.ready.bind(this,resolve,reject);
                this.xhr.send();
            });
        },
        post:function(url,data){
            return new Promise((resolve,reject)=>{
                this.xhr.open('post',url);
                this.xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                this.xhr.onreadystatechange = this.ready.bind(this,resolve,reject);
                this.xhr.send(this.quryString(data));
            });
        },
        //把对象变成字符串以key=val&key2=val2...
        quryString:function(data){
            var arr = [];
            for(var attr in data){
                arr.push(attr +'='+ data[attr]);
            }
            return arr.join('&');
        },
        all:function(ary){
            return Promise.all(ary);
        },
        ready:function(resolve,reject){
            if(this.xhr.readyState === 4){
                if(this.xhr.status >= 200 && this.xhr.status <=207 || this.xhr.status === 304){
                    resolve(this.xhr.responseText);
                }else{
                    reject(this.xhr.status);
                }
            }
        }
    }
    function axios(json){
        this.xhr = new XMLHttpRequest;
    }

    axios.prototype = Axios.prototype;

    global.axios = Axios();
});