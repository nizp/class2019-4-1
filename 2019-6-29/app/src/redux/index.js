export function createStore (reducer,initState){
    if(typeof reducer !== 'function'){
        throw new Error('reducer必须要是个函数');
    }
    let currentReducer = reducer;
    let currentState = initState; //可变的数据
    let currentListener = []; //订阅池，订阅监听函数的

    // store.getState() -> num:0
    function getState(){
        return currentState;
    }

    /*
        dispatch({type:'ADD'})

        纯对象，只能是new Object出来的
            new Object
            {}

        实例对象的原型链 === 构造函数的原型为Object.prototype

        obj.__proto__ === Object.prototype

        Object.getPrototypeOf(obj) 找到指定对象的构造函数的原型

        let proto = obj;
        while(Object.getPrototypeOf(obj)){
            proto = Object.getPrototypeOf(obj) -> obj.__proto__
        }

        return proto === Object.prototype
    */

    function isObject(obj){
        if(typeof obj !== 'object' || obj === null){
            return false;
        }
        return  Object.getPrototypeOf(obj) === Object.prototype;
    }


    function dispatch(action){
        if(!isObject(action)){
            throw new Error('action必须是个纯对象');
        }
        //调用dispatch的目的就是改变当前的状态
        currentState = currentReducer(currentState,action);
       
        currentListener.forEach(fn=>fn());
        return action;
        /*
            state=0
            dispatch({type:'ADD'})
            reducer(0,{'add'})
            function reducer(0,{type:'add'}){
                if(action.type === 'add'){
                    return 0 + 1
                }
            }
            getState()=>currentState 1
        */

    }

    function subscribe(listener){
        currentListener.push(listener);
        return function (){
            let index = currentListener.indexOf(listener);
            currentListener.splice(index,1);
        }
    }
    
    dispatch({type:'@_@~~'}); //一上来调用一次reducer，保证currentState有状态值
    return {
        getState,
        dispatch,
        subscribe
    }
}